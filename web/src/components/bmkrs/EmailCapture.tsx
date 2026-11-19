"use client";

import { useState } from "react";
import { Button, Field, Section } from "@bmkrs/ui";
import { brandMessaging } from "@/lib/content/messaging";
import { cn } from "@/lib/utils";

type EmailCaptureProps = {
  className?: string;
  variant?: "light" | "dark";
  /** orange = act surface; paper = default reading surface */
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
          <p className="email-capture__success">{brandMessaging.newsletterSent}</p>
        ) : (
          <form className="email-capture__form" onSubmit={onSubmit}>
            <Field name="email" type="email" required autoComplete="email" label="Email" placeholder="Your email" />
            <Button type="submit" variant="ghost" disabled={status === "sending"}>
              {status === "sending" ? brandMessaging.newsletterSending : brandMessaging.newsletterCta}
            </Button>
          </form>
        )}
        {status === "error" ? (
          <p className="email-capture__error">Something went wrong. Try again.</p>
        ) : null}
      </div>
    );
  }

  const onOrange = surface === "orange";

  const inner = (
    <div className={cn("max-w-[34rem]", className)}>
      <h3 className="display text-h3 font-normal">{brandMessaging.newsletterTitle}</h3>
      <p className="mt-3 text-body text-[var(--bmkrs-paper-body)]">{brandMessaging.newsletterLede}</p>
      {status === "sent" ? (
        <p className="mt-6 text-[var(--bmkrs-orange)]">{brandMessaging.newsletterSent}</p>
      ) : (
        <form className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end" onSubmit={onSubmit}>
          <Field
            className="flex-1"
            name="email"
            type="email"
            required
            autoComplete="email"
            label="Email"
            placeholder="Your email"
          />
          <Button type="submit" variant="orange" disabled={status === "sending"}>
            {status === "sending" ? brandMessaging.newsletterSending : brandMessaging.newsletterCta}
          </Button>
        </form>
      )}
      {status === "error" ? (
        <p className="mt-2 text-sm text-[var(--bmkrs-orange)]">Something went wrong. Try again.</p>
      ) : null}
    </div>
  );

  if (onOrange) {
    return <Section theme="orange">{inner}</Section>;
  }

  return <Section theme="paper">{inner}</Section>;
}
