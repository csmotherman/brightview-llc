import { EMAIL_PATTERN, QUOTE_LIMITS, SERVICE_OPTIONS, hasEnoughPhoneDigits } from "@/lib/quote-services";

export const runtime = "nodejs";

const allowedServices = new Set<string>(SERVICE_OPTIONS.map((option) => option.name));
const NO_STORE = { "Cache-Control": "no-store" };

// Best-effort, per-instance protections. On serverless hosts each instance keeps its own memory,
// so production should also add edge rate limiting / CAPTCHA (see README).
const RATE_WINDOW_MS = 10 * 60_000;
const RATE_MAX = 5;
const DEDUPE_WINDOW_MS = 10 * 60_000;
const hits = new Map<string, number[]>();
const accepted = new Map<string, number>(); // submission id / content fingerprint -> time delivered
const inFlight = new Set<string>();

function errorResponse(message: string, status: number, extra: HeadersInit = {}) {
  return Response.json({ ok: false, message }, { status, headers: { ...NO_STORE, ...extra } });
}

function normalize(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const clean = value.trim();
  return clean.length >= 1 && clean.length <= maxLength ? clean : null;
}

function rateLimited(ip: string, now: number) {
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) for (const [key, times] of hits) if (now - times[times.length - 1] > RATE_WINDOW_MS) hits.delete(key);
  return recent.length > RATE_MAX;
}

function resolveWebhook(): URL | null {
  const raw = process.env.ZOLATO_INTAKE_WEBHOOK_URL?.trim();
  if (!raw) {
    console.error("[quote] ZOLATO_INTAKE_WEBHOOK_URL is not set in the server environment.");
    return null;
  }
  try {
    // Restrict the secret endpoint to Zolato so the env var cannot be turned into an SSRF target.
    const endpoint = new URL(raw);
    const valid =
      endpoint.protocol === "https:" && endpoint.hostname === "zolato.ai" &&
      /^\/api\/intake\/webhook\/[A-Za-z0-9_-]+$/.test(endpoint.pathname) &&
      !endpoint.search && !endpoint.hash && !endpoint.username && !endpoint.password;
    if (valid) return endpoint;
  } catch {
    // fall through
  }
  console.error("[quote] ZOLATO_INTAKE_WEBHOOK_URL is set but is not a valid Zolato intake webhook URL.");
  return null;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return errorResponse("Invalid request origin.", 403);
  }

  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return errorResponse("Expected JSON.", 415);
  }

  const length = Number(request.headers.get("content-length"));
  if (Number.isFinite(length) && length > 16_384) {
    return errorResponse("Request too large.", 413);
  }

  let input: Record<string, unknown>;
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return errorResponse("Invalid request.", 400);
    }
    input = parsed as Record<string, unknown>;
  } catch {
    return errorResponse("Invalid JSON.", 400);
  }

  // Honeypot: real visitors never see this field. Bots get a silent fake success.
  if (typeof input.website === "string" && input.website.trim()) {
    return Response.json({ ok: true }, { headers: NO_STORE });
  }

  const now = Date.now();
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip, now)) {
    return errorResponse("Too many requests. Please wait a few minutes and try again.", 429, { "Retry-After": "600" });
  }

  const name = normalize(input.name, QUOTE_LIMITS.name);
  const phone = normalize(input.phone, QUOTE_LIMITS.phone);
  const email = normalize(input.email, QUOTE_LIMITS.email);
  const address = normalize(input.address, QUOTE_LIMITS.address);
  const message = normalize(input.message, QUOTE_LIMITS.message);
  const services = input.services;

  if (!name || !phone || !email || !address || !message ||
      !Array.isArray(services) || services.length < 1 ||
      services.length > SERVICE_OPTIONS.length ||
      services.some((service) => typeof service !== "string" || !allowedServices.has(service)) ||
      new Set(services).size !== services.length ||
      !hasEnoughPhoneDigits(phone) || !EMAIL_PATTERN.test(email)) {
    return errorResponse("Please complete all required fields and select at least one service.", 400);
  }

  const endpoint = resolveWebhook();
  if (!endpoint) {
    return errorResponse("Quote requests are temporarily unavailable. Please contact BrightView directly.", 503);
  }

  // Duplicate protection: the client's per-attempt id, falling back to the request content.
  const submissionId = typeof input.submissionId === "string" && /^[A-Za-z0-9-]{8,64}$/.test(input.submissionId)
    ? input.submissionId
    : null;
  const fingerprint = "c:" + [name, phone, email, address, [...(services as string[])].sort().join("|"), message].join("\u0000").toLowerCase();
  const keys = [submissionId && "id:" + submissionId, fingerprint].filter((key): key is string => Boolean(key));
  for (const [key, time] of accepted) if (now - time > DEDUPE_WINDOW_MS) accepted.delete(key);
  if (keys.some((key) => accepted.has(key))) {
    return Response.json({ ok: true }, { headers: NO_STORE });
  }
  if (keys.some((key) => inFlight.has(key))) {
    return errorResponse("Your request is already being sent.", 409);
  }

  const selectedServices = (services as string[]).join(", ");
  // Zolato has a single Service field, so every choice is also repeated in the notes.
  const payload = {
    name,
    phone,
    email,
    address,
    service: selectedServices,
    message: "Requested services: " + selectedServices + "\n\nProject details:\n" + message,
    source: "website",
  };

  const additionalSecret = process.env.ZOLATO_INTAKE_SECRET?.trim();
  keys.forEach((key) => inFlight.add(key));
  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(additionalSecret ? { "X-Zolato-Secret": additionalSecret } : {}),
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    // Log only the status code: never the URL, payload, or response body (may contain customer data).
    if (!upstream.ok) {
      console.error("[quote] Zolato rejected the lead with HTTP " + upstream.status + ".");
      return errorResponse("We couldn't confirm receipt of your request. Please try again.", 502);
    }

    // A 2xx that explicitly reports failure must not be shown as success.
    const body: unknown = await upstream.json().catch(() => null);
    if (body && typeof body === "object" &&
        ((body as Record<string, unknown>).success === false || (body as Record<string, unknown>).ok === false)) {
      console.error("[quote] Zolato returned HTTP " + upstream.status + " with a failure flag.");
      return errorResponse("We couldn't confirm receipt of your request. Please try again.", 502);
    }

    keys.forEach((key) => accepted.set(key, Date.now()));
    return Response.json({ ok: true }, { headers: NO_STORE });
  } catch (error) {
    console.error("[quote] Could not reach Zolato (" + (error instanceof Error ? error.name : "unknown error") + ").");
    return errorResponse("We couldn't confirm receipt of your request. Please try again.", 502);
  } finally {
    keys.forEach((key) => inFlight.delete(key));
  }
}
