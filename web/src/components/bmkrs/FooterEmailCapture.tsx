"use client";

import { useState } from "react";
import { Button } from "@bmkrs/ui";
import Link from "next/link";
import { SURFACE } from "@/lib/surfaces";

export function FooterEmailCapture({ email = "hello@bmkrs.com" }: { email?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const ink = SURFACE.ink;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const consent = formData.get("consent") === "on";
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="footer-capture">
      <h3 className="text-[1.1rem] font-medium" style={{ color: ink.text }}>
        products in production. lessons from the work.
      </h3>
      <p className="newsp mt-2 max-w-[34ch] text-[0.92rem]" style={{ color: ink.faint }}>
        brief notes on product delivery, applied AI and what it takes to move beyond a pilot.
      </p>
      {status === "sent" ? (
        <p className="mt-5 text-base" style={{ color: ink.accent }}>
          got it. the next one is on its way.
        </p>
      ) : (
        <form className="footer-capture__form mt-5" onSubmit={onSubmit}>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="email"
            aria-label="email"
            className="footer-capture__input"
          />
          <label className="footer-capture__consent">
            <input name="consent" type="checkbox" required />
            <span>
              send me the bmkrs newsletter. i can unsubscribe any time. see our{" "}
              <Link href="/legal/privacy">privacy notice</Link>.
            </span>
          </label>
          <Button type="submit" variant="orange" disabled={status === "sending"} className="footer-capture__btn">
            {status === "sending" ? "sending..." : "send the next one"}
          </Button>
        </form>
      )}
      {status === "error" ? (
        <p className="mt-2 text-sm" role="alert" style={{ color: ink.accent }}>
          we couldn&apos;t complete that just now. <a href={`mailto:${email}`} className="underline underline-offset-4">email us directly</a> and we&apos;ll help.
        </p>
      ) : null}
    </div>
  );
}
