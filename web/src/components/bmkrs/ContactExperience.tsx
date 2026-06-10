"use client";

import { useState } from "react";
import { EmailCapture } from "@/components/bmkrs/EmailCapture";
import { Kicker } from "@/components/bmkrs/Kicker";
import { SectionRule } from "@/components/bmkrs/SectionRule";

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

  function toggleService(value: string) {
    setSelectedServices((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

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
      <section className="section-pad contact-split-section">
        <div className="wrap contact-split">
          <div className="contact-intro">
            <Kicker>start a project</Kicker>
            <h1 className="display text-h2 mt-[var(--space-tight)] font-medium">
              tell us what you&apos;re building.
            </h1>
            <p className="contact-promise mt-[var(--space-tight)]">
              we reply within one working day, with a real answer, not a calendar link.
            </p>
            <ContactEmails
              helloEmail={fallbackEmail}
              pressEmail={pressEmail}
              className="contact-emails contact-emails--desktop"
            />
          </div>

          <div className="contact-form-col">
            {status === "sent" ? (
              <div className="contact-thanks">
                <h2 className="text-h3 font-medium">got it. a real person reads this today. talk soon.</h2>
              </div>
            ) : (
              <form className="cx-form" onSubmit={onSubmit} noValidate>
                <label className="cx-field">
                  <span className="contact-field-label">name</span>
                  <input name="name" required autoComplete="name" className="cx-input" />
                </label>
                <label className="cx-field">
                  <span className="contact-field-label">email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="cx-input"
                    aria-invalid={fieldError?.includes("@") ? true : undefined}
                  />
                </label>

                <fieldset className="cx-field cx-full">
                  <legend className="contact-field-label">what are we making?</legend>
                  <div className="cx-pills" role="group" aria-label="what are we making?">
                    {SERVICE_OPTIONS.map((opt) => {
                      const active = selectedServices.includes(opt.value);
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          className={`cx-pill${active ? " is-active" : ""}`}
                          aria-pressed={active}
                          onClick={() => toggleService(opt.value)}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <label className="cx-field cx-full">
                  <span className="contact-field-label">budget, roughly (optional)</span>
                  <select name="budget" className="cx-input cx-select" defaultValue="">
                    <option value="">select a range</option>
                    {BUDGET_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="cx-field cx-full">
                  <span className="contact-field-label">tell us about it</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="cx-input cx-textarea"
                    placeholder="the product, the stage you are at, what you need from us."
                  />
                </label>

                <div className="cx-submit">
                  <button className="btn-contact-submit" type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "sending..." : "send it over →"}
                  </button>
                </div>

                {fieldError ? <p className="cx-error">{fieldError}</p> : null}
              </form>
            )}
          </div>

          <ContactEmails
            helloEmail={fallbackEmail}
            pressEmail={pressEmail}
            className="contact-emails contact-emails--mobile"
          />
        </div>

        <div className="wrap contact-secondary">
          <SectionRule dark />
          <p className="contact-secondary-lead mt-[var(--space-tight)]">
            not ready for a project?{" "}
            <span className="text-[var(--bmkrs-muted)]">join the fortnightly instead.</span>
          </p>
          <EmailCapture variant="dark" className="contact-capture" />
        </div>
      </section>
    </main>
  );
}
