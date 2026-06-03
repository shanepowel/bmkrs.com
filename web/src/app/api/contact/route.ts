import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, company, business, service, message } = body;
  const companyName = company || business;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, company: companyName, service, message }),
    });
  }

  console.info("[contact]", { name, email, company: companyName, service });

  return NextResponse.json({ ok: true });
}
