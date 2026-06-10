"use client";

import { useState } from "react";
import { Section } from "@/components/bmkrs/surfaces";
import { cn } from "@/lib/utils";

type EmailCaptureProps = {
  className?: string;
  variant?: "light" | "dark";
  /** orange = spec act surface; paper = default reading surface */
  surface?: "paper" | "orange";
};

export function EmailCapture({ className, variant = "light", surface = "paper" }: EmailCaptureProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const dark = variant === "dark";

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

  if (dark) {
    return (
      <div className={cn("email-capture email-capture--dark", className)}>
        {status === "sent" ? (
          <p className="email-capture__success">got it. the next one is on its way.</p>
        ) : (
          <form className="email-capture__form" onSubmit={onSubmit}>
            <label className="email-capture__label">
              <span className="sr-only">email</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="your email"
                className="cx-input"
              />
            </label>
            <button className="btn-ghost-dark" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "sending..." : "send me the next one"}
            </button>
          </form>
        )}
        {status === "error" ? (
          <p className="email-capture__error">something went wrong. try again.</p>
        ) : null}
      </div>
    );
  }

  const onOrange = surface === "orange";

  const inner = (
    <div className={cn("section max-w-[560px]", className)}>
      <h3 className="display text-h3 font-medium">one idea a fortnight.</h3>
      <p className="muted mt-3">
        the thinking we use on real brands, written down. no filler, no funnels.
      </p>
      {status === "sent" ? (
        <p className="mt-6 text-accent">got it. the next one is on its way.</p>
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
              className={onOrange ? "field-input field-input--on-orange w-full" : "field-input w-full"}
            />
          </label>
          <button
            className={onOrange ? "btn-ink shrink-0" : "btn-primary shrink-0"}
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "sending..." : "send me the next one"}
          </button>
        </form>
      )}
      {status === "error" ? (
        <p className="mt-2 text-sm text-accent">something went wrong. try again.</p>
      ) : null}
    </div>
  );

  if (onOrange) {
    return <Section theme="orange">{inner}</Section>;
  }

  return <Section theme="paper">{inner}</Section>;
}
