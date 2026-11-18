"use client";

import { useState } from "react";
import Image from "next/image";
import { Button as UiButton } from "@bmkrs/ui";
import { Field, H1, Meta, PillSelect, SelectMenu, Surface, TextArea } from "@bmkrs/ui";
import { contactBudgetReassurance } from "@/lib/content/expansion-v2";
import { brandMessaging } from "@/lib/content/messaging";

const SERVICE_OPTIONS = [
  { value: "product-strategy", label: "product strategy and discovery" },
  { value: "ai-delivery", label: "AI delivery and integration" },
  { value: "ai-governance", label: "AI governance and risk" },
  { value: "enablement", label: "team enablement and handover" },
  { value: "motion", label: "ongoing product and AI support" },
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
  const [budget, setBudget] = useState("");

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
          company: data.company,
          message: data.message,
          budget: budget || undefined,
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
    <main className="contact-page">
      <section className="section-pad contact-split-section" data-surface="paper">
        <div className="wrap contact-split">
          <div className="contact-intro">
            <H1 theme="paper" className="contact-page-title">
              contact
            </H1>
            <p className="contact-promise">
              Moving an AI pilot into production, or trying to make a digital product work better? Tell us where you are stuck. We&apos;ll help you find a sensible next step.
            </p>
          </div>

          <Surface
            as="div"
            theme="paper"
            pad="tight"
            className="contact-form-panel contact-form-col"
            innerClassName="!mx-0 !max-w-none !px-[clamp(1.5rem,4vw,2.5rem)]"
          >
            {status === "sent" ? (
              <h2 className="text-h3 font-medium">got it. a real person reads this today. talk soon.</h2>
            ) : (
              <form className="cx-form" onSubmit={onSubmit} noValidate>
                <Field name="name" label="name" required autoComplete="name" />
                <Field name="company" label="company" autoComplete="organization" />
                <Field
                  name="email"
                  label="email"
                  type="email"
                  required
                  autoComplete="email"
                  aria-invalid={fieldError?.includes("@") ? true : undefined}
                />
                <TextArea
                  className="cx-full"
                  name="message"
                  label="project / enquiry"
                  required
                  placeholder="what are you trying to change, and what is getting in the way?"
                />
                <details className="cx-full contact-more">
                  <summary>share a little more (optional)</summary>
                  <PillSelect
                    className="cx-full mt-4"
                    label={brandMessaging.contactServicesLabel}
                    options={[...SERVICE_OPTIONS]}
                    value={selectedServices}
                    onChange={(next) => setSelectedServices(Array.isArray(next) ? next : [next])}
                    multiple
                  />
                  <div className="mt-4">
                    <Meta theme="paper">{contactBudgetReassurance}</Meta>
                    <SelectMenu name="budget" label="budget, roughly (optional)" placeholder="select a range" options={[...BUDGET_OPTIONS]} value={budget || undefined} onValueChange={setBudget} />
                  </div>
                </details>
                <div className="cx-full">
                  <UiButton type="submit" variant="orange" disabled={status === "sending"}>
                    {status === "sending"
                      ? brandMessaging.contactSending
                      : `${brandMessaging.contactSubmit} +`}
                  </UiButton>
                </div>
                {fieldError ? <p className="cx-full text-meta" role="alert">{fieldError} <a href={`mailto:${fallbackEmail}`} className="underline underline-offset-4">email us directly</a>.</p> : null}
              </form>
            )}
          </Surface>
          <aside className="contact-aside">
            <div><span>studio</span><p>London, UK</p></div>
            <div><span>email</span><ContactEmails helloEmail={fallbackEmail} pressEmail={pressEmail} className="contact-emails" /></div>
            <div className="contact-aside__image"><Image src="/images/bmkrs-architecture-editorial.webp" alt="Vermilion and concrete architectural details" fill sizes="(max-width: 1024px) 100vw, 25vw" unoptimized /></div>
          </aside>
        </div>
      </section>
    </main>
  );
}
