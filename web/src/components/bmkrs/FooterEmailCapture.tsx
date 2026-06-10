"use client";

import { useState } from "react";
import { SURFACE } from "@/lib/surfaces";

export function FooterEmailCapture() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const ink = SURFACE.ink;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const email = new FormData(e.currentTarget).get("email");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="footer-capture">
      <h3 className="display text-h3 font-medium" style={{ color: ink.text }}>
        one idea a fortnight.
      </h3>
      <p className="mt-3 max-w-[42ch] text-base leading-relaxed" style={{ color: ink.body }}>
        the thinking we use on real brands, written down. no filler, no funnels.
      </p>
      {status === "sent" ? (
        <p className="mt-5 text-base" style={{ color: ink.accent }}>
          got it. the next one is on its way.
        </p>
      ) : (
        <form className="footer-capture__form mt-5" onSubmit={onSubmit}>
          <label className="footer-capture__label">
            <span className="footer-capture__label-text mono">email</span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className="footer-capture__input"
            />
          </label>
          <button
            type="submit"
            className="footer-capture__btn"
            disabled={status === "sending"}
          >
            {status === "sending" ? "sending..." : "send me the next one"}
          </button>
        </form>
      )}
      {status === "error" ? (
        <p className="mt-2 text-base" role="alert" style={{ color: ink.accent }}>
          something went wrong. try again.
        </p>
      ) : null}
    </div>
  );
}
