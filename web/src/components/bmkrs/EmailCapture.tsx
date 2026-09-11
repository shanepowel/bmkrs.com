"use client";

import { useState } from "react";
import { Section, SURFACE, tokens } from "@bmkrs/ui";
import { cn } from "@/lib/utils";

type EmailCaptureProps = {
  className?: string;
  variant?: "light" | "dark";
  /** orange = spec act surface; paper = default reading surface */
  surface?: "paper" | "orange";
  /** unique id so footer + journal captures can coexist on one page */
  inputId?: string;
};

export function EmailCapture({
  className,
  variant = "light",
  surface = "paper",
  inputId,
}: EmailCaptureProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const dark = variant === "dark";
  const fieldId =
    inputId ??
    (dark ? "journal-newsletter-email" : surface === "orange" ? "newsletter-email-act" : "newsletter-email");

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
    const ink = SURFACE.ink;
    return (
      <div className={cn("email-capture email-capture--dark", className)}>
        {status === "sent" ? (
          <p className="email-capture__success">got it. the next one is on its way.</p>
        ) : (
          <form className="email-capture__form" onSubmit={onSubmit}>
            <div className="email-capture__label">
              <label htmlFor={fieldId} className="email-capture__label-text" style={{ color: ink.faint }}>
                email
              </label>
              <input
                id={fieldId}
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className="cx-input"
              />
            </div>
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
  const theme = onOrange ? SURFACE.orange : SURFACE.paper;

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
          <div className="flex flex-1 flex-col gap-1.5">
            <label
              htmlFor={fieldId}
              className="font-mono text-meta lowercase"
              style={{ color: theme.faint, letterSpacing: tokens.tracking.kicker }}
            >
              email
            </label>
            <input
              id={fieldId}
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className={onOrange ? "field-input field-input--on-orange w-full" : "field-input w-full"}
            />
          </div>
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
