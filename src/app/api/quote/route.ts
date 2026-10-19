import { SERVICE_OPTIONS } from "@/lib/quote-services";

export const runtime = "nodejs";

const allowedServices = new Set<string>(SERVICE_OPTIONS.map((option) => option.name));

function errorResponse(message: string, status: number) {
  return Response.json({ ok: false, message }, { status, headers: { "Cache-Control": "no-store" } });
}

function normalize(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const clean = value.trim();
  return clean.length >= 1 && clean.length <= maxLength ? clean : null;
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

  // A low-friction bot trap. Apply edge rate limiting/CAPTCHA before public launch.
  if (typeof input.website === "string" && input.website.trim()) {
    return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  }

  const name = normalize(input.name, 120);
  const phone = normalize(input.phone, 40);
  const email = normalize(input.email, 254);
  const address = normalize(input.address, 300);
  const message = normalize(input.message, 3000);
  const services = input.services;

  if (!name || !phone || !email || !address || !message ||
      !Array.isArray(services) || services.length < 1 ||
      services.length > SERVICE_OPTIONS.length ||
      services.some((service) => typeof service !== "string" || !allowedServices.has(service)) ||
      new Set(services).size !== services.length ||
      phone.replace(/\D/g, "").length < 7 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return errorResponse("Please complete all required fields and select at least one service.", 400);
  }

  const webhookUrl = process.env.ZOLATO_INTAKE_WEBHOOK_URL;
  if (!webhookUrl) {
    return errorResponse("Quote requests are temporarily unavailable. Please contact BrightView directly.", 503);
  }

  // Explicitly restrict the secret endpoint to Zolato to avoid configurable SSRF.
  try {
    const endpoint = new URL(webhookUrl);
    if (endpoint.protocol !== "https:" || endpoint.hostname !== "zolato.ai" ||
        !/^\/api\/intake\/webhook\/[A-Za-z0-9_-]+$/.test(endpoint.pathname) ||
        endpoint.search || endpoint.hash || endpoint.username || endpoint.password) {
      return errorResponse("Quote requests are temporarily unavailable.", 503);
    }
  } catch {
    return errorResponse("Quote requests are temporarily unavailable.", 503);
  }

  const selectedServices = (services as string[]).join(", ");
  // Zolato has one Service field. Preserve every choice explicitly in the notes too.
  const payload = {
    name,
    phone,
    email,
    address,
    service: selectedServices,
    message: "Requested services: " + selectedServices + "\n\nProject details:\n" + message,
    source: "website",
  };

  const additionalSecret = process.env.ZOLATO_INTAKE_SECRET;
  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(additionalSecret ? { "X-Zolato-Secret": additionalSecret } : {}),
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!upstream.ok) {
      return errorResponse("We couldn't confirm receipt of your request. Please try again.", 502);
    }

    return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return errorResponse("We couldn't confirm receipt of your request. Please try again.", 502);
  }
}
