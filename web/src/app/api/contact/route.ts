import { NextRequest, NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  business?: string;
  reason?: string;
  service?: string;
  services?: string | string[];
  budget?: string;
  message?: string;
};

const REASON_TO_INBOX: Record<string, string> = {
  project: "hello@bmkrs.com",
  press: "press@bmkrs.com",
  network: "hello@bmkrs.com",
  hi: "hello@bmkrs.com",
};

const isEmail = (s?: string) => !!s && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);

export async function POST(req: NextRequest) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  if (!body.name?.trim() || !body.message?.trim()) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 });
  }

  if (!body.email?.includes("@") || !isEmail(body.email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }

  const company = body.company || body.business;
  const reason = body.reason ?? body.service ?? "project";
  const inbox = REASON_TO_INBOX[reason] ?? "hello@bmkrs.com";
  const services = Array.isArray(body.services)
    ? body.services
    : body.services
      ? String(body.services).split(",").map((s) => s.trim()).filter(Boolean)
      : body.service
        ? [body.service]
        : [];

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        company,
        reason,
        service: body.service,
        services,
        budget: body.budget || undefined,
        message: body.message,
        inbox,
      }),
    });
  }

  console.info("[contact] enquiry routed to", inbox, {
    name: body.name,
    email: body.email,
    reason,
    services,
    budget: body.budget,
  });

  return NextResponse.json({ ok: true });
}
