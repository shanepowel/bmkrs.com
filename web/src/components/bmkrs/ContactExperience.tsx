"use client";

import { useState } from "react";
import { EmailCapture } from "@/components/bmkrs/EmailCapture";
import { Button, Field, H1, Kicker, Meta, PillSelect, SelectField, Surface, TextArea } from "@bmkrs/ui";
import { SectionRule } from "@/components/bmkrs/SectionRule";
import {
  contactBudgetReassurance,
  contactWhatHappensNext,
} from "@/lib/content/expansion-v2";

const SERVICE_OPTIONS = [
  { value: "branding", label: "branding" },
  { value: "voice", label: "voice" },
  { value: "pr", label: "pr" },
  { value: "product-web", label: "product + web" },
  { value: "motion", label: "motion" },
  { value: "not-sure", label: "not sure yet" },
] as const;

const BUDGET_OPTIONS = [
  { value: "under-5k", label: "under £5k" },
  { value: "5-15k", label: "£5k to £15k" },
  { value: "15-50k", label: "£15k to £50k" },
  { value: "50k-plus", label: "£50k+" },
  { value: "ongoing", label: "ongoing" },
  { value: "rather-not", label: "rather not say" },
];

function ContactEmails({
  helloEmail,
  pressEmail,
  className,
}: {
  helloEmail: string;
  pressEmail?: string;
  className?: string;
}) {
  return (
    <ul className={className} role="list">
      <li className="contact-email-row">
        <span className="contact-field-label">general</span>
        <a className="mono contact-email-link" href={`mailto:${helloEmail}`}>
          {helloEmail}
        </a>
      </li>
      {pressEmail ? (
        <li className="contact-email-row">
          <span className="contact-field-label">press</span>
          <a className="mono contact-email-link" href={`mailto:${pressEmail}`}>
            {pressEmail}
          </a>
        </li>
      ) : null}
    </ul>
  );
}

export function ContactExperience({
  fallbackEmail,
  pressEmail,
}: {
  fallbackEmail: string;
  pressEmail?: string;
  networkEmail?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFieldError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const email = String(data.email ?? "").trim();

    if (!email.includes("@")) {
      setFieldError("that email is missing an @");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email,
          message: data.message,
          budget: data.budget || undefined,
          services: selectedServices,
          reason: "project",
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        if (body.error === "invalid_email") {
          setFieldError("that email is missing an @");
        } else {
          setFieldError("something went wrong. try again, or email us directly.");
        }
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setFieldError("something went wrong. try again, or email us directly.");
      setStatus("error");
    }
  }

  return (
    <main className="contact-shell">
      <section className="section-pad contact-split-section" data-surface="ink">
        <div className="wrap contact-split">
          <div className="contact-intro">
            <Kicker theme="ink">start a project</Kicker>
            <H1 theme="ink" className="mt-[var(--space-tight)]">
              tell us what you&apos;re building.
            </H1>
            <p className="contact-promise mt-[var(--space-tight)]">
              we reply within one working day, with a real answer, not a calendar link.
            </p>
            <ContactEmails
              helloEmail={fallbackEmail}
              pressEmail={pressEmail}
              className="contact-emails contact-emails--desktop"
            />

            <div className="mt-[var(--space-block)]">
              <Kicker theme="ink">what happens next</Kicker>
              <ul className="mt-4 list-none space-y-0 p-0">
                {contactWhatHappensNext.map((step) => (
                  <li key={step.number} className="contact-email-row">
                    <p className="mono text-meta text-accent">{step.number} →</p>
                    <p className="mt-2 max-w-[48ch] text-[var(--bmkrs-off-white)]/90">{step.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Surface
            as="div"
            theme="paper"
            pad="tight"
            className="contact-form-col"
            innerClassName="!mx-0 !max-w-none !px-[clamp(1.5rem,4vw,2.5rem)]"
          >
            {status === "sent" ? (
              <h2 className="text-h3 font-medium">got it. a real person reads this today. talk soon.</h2>
            ) : (
              <form className="cx-form" onSubmit={onSubmit} noValidate>
                <Field name="name" label="name" required autoComplete="name" />
                <Field
                  name="email"
                  label="email"
                  type="email"
                  required
                  autoComplete="email"
                  aria-invalid={fieldError?.includes("@") ? true : undefined}
                />
                <PillSelect
                  className="cx-full"
                  label="what are we making?"
                  options={[...SERVICE_OPTIONS]}
                  value={selectedServices}
                  onChange={(next) => setSelectedServices(Array.isArray(next) ? next : [next])}
                  multiple
                />
                <div className="cx-full">
                  <Meta theme="paper">{contactBudgetReassurance}</Meta>
                  <SelectField name="budget" label="budget, roughly (optional)" defaultValue="">
                    <option value="">select a range</option>
                    {BUDGET_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </SelectField>
                </div>
                <TextArea
                  className="cx-full"
                  name="message"
                  label="tell us about it"
                  required
                  placeholder="the product, the stage you are at, what you need from us."
                />
                <div className="cx-full">
                  <Button type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "sending..." : "send it over →"}
                  </Button>
                </div>
                {fieldError ? <p className="cx-full text-meta">{fieldError}</p> : null}
              </form>
            )}
          </Surface>

          <ContactEmails
            helloEmail={fallbackEmail}
            pressEmail={pressEmail}
            className="contact-emails contact-emails--mobile"
          />
        </div>
      </section>

      <section className="contact-secondary-ink" data-surface="ink">
        <div className="wrap">
          <SectionRule dark />
          <p className="contact-secondary-lead mt-[var(--space-tight)]">
            not ready for a project?{" "}
            <span className="text-[var(--bmkrs-muted)]">join the fortnightly instead.</span>
          </p>
        </div>
      </section>

      <EmailCapture surface="orange" />
    </main>
  );
}
