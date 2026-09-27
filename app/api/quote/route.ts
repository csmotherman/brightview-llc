import { NextResponse } from "next/server";

type QuotePayload = {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  service?: string;
  details?: string;
  contactPreference?: string;
  source?: string;
};

export async function POST(request: Request) {
  let payload: QuotePayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "The quote request could not be read." },
      { status: 400 }
    );
  }

  if (!payload.name?.trim() || !payload.phone?.trim() || !payload.service?.trim()) {
    return NextResponse.json(
      { message: "Name, phone, and service are required." },
      { status: 400 }
    );
  }

  const webhook = process.env.BRIGHTVIEW_QUOTE_WEBHOOK;

  if (!webhook) {
    return NextResponse.json(
      {
        message:
          "The online quote form is being connected. Please message Bright View on Facebook for now.",
      },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        submittedAt: new Date().toISOString(),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Quote webhook returned ${response.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Bright View quote delivery failed", error);

    return NextResponse.json(
      {
        message:
          "We could not send the request right now. Please message Bright View on Facebook instead.",
      },
      { status: 502 }
    );
  }
}
