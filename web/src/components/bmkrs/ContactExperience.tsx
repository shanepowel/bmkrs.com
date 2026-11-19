"use client";

import { useState } from "react";
import Image from "next/image";
import { Button as UiButton } from "@/components/ui/button";
import { Field, H1, PillSelect, Surface, TextArea } from "@bmkrs/ui";
import { brandMessaging } from "@/lib/content/messaging";
import { marketingImages } from "@/lib/marketing-assets";

const SERVICE_OPTIONS = [
  { value: "strategy", label: "strategy and discovery" },
  { value: "brand", label: "brand and identity" },
  { value: "digital-product", label: "digital product or experience" },
  { value: "technology", label: "technology and AI" },
  { value: "motion", label: "ongoing partnership" },
  { value: "not-sure", label: "not sure yet" },
] as const;

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
          company: data.company,
          message: data.message,
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
              Have an idea worth making real? Tell us a little about it. We&apos;ll listen, ask the right questions and help you find a useful next step.
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
                </details>
                <div className="cx-full">
                  <UiButton type="submit" variant="brand" size="lg" disabled={status === "sending"}>
                    {status === "sending"
                      ? brandMessaging.contactSending
                      : `${brandMessaging.contactSubmit} →`}
                  </UiButton>
                </div>
                {fieldError ? <p className="cx-full text-meta" role="alert">{fieldError} <a href={`mailto:${fallbackEmail}`} className="underline underline-offset-4">email us directly</a>.</p> : null}
              </form>
            )}
          </Surface>
          <aside className="contact-aside">
            <div><span>studio</span><p>London, UK</p></div>
            <div><span>email</span><ContactEmails helloEmail={fallbackEmail} pressEmail={pressEmail} className="contact-emails" /></div>
            <div className="contact-aside__image">
              <Image
                src={marketingImages.architectureConcrete}
                alt="warm concrete architecture, vermilion detail"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
