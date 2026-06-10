"use client";

import { useState } from "react";

export function EmailCapture({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

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
    <section className={className ?? "section-pad section--paper"}>
      <div className="wrap section max-w-[560px]">
        <h3 className="display text-[clamp(1.35rem,3vw,2rem)] font-bold">one idea a fortnight.</h3>
        <p className="muted mt-3 text-[15px]">
          the thinking we use on real brands, written down. no filler, no funnels.
        </p>
        {status === "sent" ? (
          <p className="mt-6 text-sm text-accent">got it. the next one is on its way.</p>
        ) : (
          <form className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end" onSubmit={onSubmit}>
            <label className="flex-1">
              <span className="sr-only">email</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="your email"
                className="w-full"
              />
            </label>
            <button className="btn-primary shrink-0" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "sending..." : "send me the next one"}
            </button>
          </form>
        )}
        {status === "error" ? (
          <p className="mt-2 text-sm text-accent">something went wrong. try again.</p>
        ) : null}
      </div>
    </section>
  );
}
