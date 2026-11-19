"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SURFACE } from "@/lib/surfaces";

export function FooterEmailCapture({ email = "hello@bmkrs.com" }: { email?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const ink = SURFACE.ink;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const emailValue = formData.get("email");
    const consent = formData.get("consent") === "on";
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailValue, consent }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="footer-capture">
      <h3 className="text-[1.1rem] font-medium" style={{ color: ink.text }}>
        The bmkrs newsletter
      </h3>
      <p className="newsp mt-2 max-w-[34ch] text-[0.92rem]" style={{ color: ink.faint }}>
        Occasional notes on design, technology and the work we are making.
      </p>
      {status === "sent" ? (
        <p className="mt-5 text-base" style={{ color: ink.accent }}>
          Thanks. The next note is on its way.
        </p>
      ) : (
        <form className="footer-capture__form mt-5" onSubmit={onSubmit}>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Your email"
            aria-label="Email"
            className="footer-capture__input"
          />
          <label className="footer-capture__consent">
            <input name="consent" type="checkbox" required />
            <span>
              Send me occasional notes from bmkrs. I can unsubscribe any time. See our{" "}
              <Link href="/legal/privacy">privacy notice</Link>.
            </span>
          </label>
          <Button type="submit" variant="brand" disabled={status === "sending"} className="footer-capture__btn">
            {status === "sending" ? "Sending…" : "Subscribe"}
          </Button>
        </form>
      )}
      {status === "error" ? (
        <p className="mt-2 text-sm" role="alert" style={{ color: ink.accent }}>
          That did not go through.{" "}
          <a href={`mailto:${email}`} className="underline underline-offset-4">
            Email us directly
          </a>{" "}
          and we will help.
        </p>
      ) : null}
    </div>
  );
}
