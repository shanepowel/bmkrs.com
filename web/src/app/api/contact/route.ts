import { NextRequest, NextResponse } from "next/server";
import { sendEnquiryToHubSpot } from "@/lib/crm/hubspot";

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

  const hubSpotToken = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!hubSpotToken && !webhook) {
    return NextResponse.json({ ok: false, error: "contact_unavailable" }, { status: 503 });
  }

  try {
    const enquiry = {
      name: body.name.trim(),
      email: body.email.trim(),
      company,
      reason,
      service: body.service,
      services,
      budget: body.budget || undefined,
      message: body.message.trim(),
      inbox,
    };

    if (hubSpotToken) {
      await sendEnquiryToHubSpot(enquiry, hubSpotToken);
    }

    if (webhook) {
      try {
        const response = await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(enquiry),
          signal: AbortSignal.timeout(10_000),
        });
        if (!response.ok && !hubSpotToken) {
          return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
        }
      } catch {
        if (!hubSpotToken) throw new Error("Contact webhook delivery failed");
      }
    }
  } catch {
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
