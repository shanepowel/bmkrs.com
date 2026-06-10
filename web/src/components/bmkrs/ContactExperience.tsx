"use client";

import { useState } from "react";

const BUDGET_OPTIONS = [
  { value: "under-5k", label: "under £5k" },
  { value: "5-15k", label: "£5k to £15k" },
  { value: "15-50k", label: "£15k to £50k" },
  { value: "50k-plus", label: "£50k+" },
  { value: "ongoing", label: "ongoing / retainer" },
  { value: "prefer-not", label: "prefer not to say" },
];

export function ContactExperience({
  fallbackEmail,
  pressEmail,
  networkEmail,
}: {
  fallbackEmail: string;
  pressEmail?: string;
  networkEmail?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, reason: "project" }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      <section className="section contact-hero">
        <div className="wrap">
          <h1 className="display text-[clamp(2.25rem,9vw,5rem)] font-bold">let&apos;s talk.</h1>
          <p className="muted mt-2">tell us what you are building. we reply within two working days, with a real answer, not a calendar link.</p>
        </div>
      </section>

      <section className="section pb-20">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_280px]">
          <div>
            {status === "sent" ? (
              <div className="cx-thanks">
                <h2 className="display text-[clamp(1.75rem,4vw,2.5rem)] font-bold">got it. thank you.</h2>
                <p className="lede mt-4">a real person will reply within two working days.</p>
              </div>
            ) : (
              <form className="cx-form" onSubmit={onSubmit}>
                <label>
                  <span className="eyebrow">your name</span>
                  <input name="name" required autoComplete="name" />
                </label>
                <label>
                  <span className="eyebrow">email</span>
                  <input name="email" type="email" required autoComplete="email" />
                </label>
                <label className="cx-full">
                  <span className="eyebrow">what are you building?</span>
                  <textarea name="message" rows={5} required placeholder="the product, the stage you are at, what you need from us." />
                </label>
                <label>
                  <span className="eyebrow">budget range</span>
                  <select name="budget" required defaultValue="">
                    <option value="" disabled>
                      select a range
                    </option>
                    {BUDGET_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>
                <div className="cx-submit">
                  <button className="btn-primary" type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "sending..." : "send it over"}
                  </button>
                </div>
                {status === "error" && (
                  <p className="cx-error">
                    something went wrong. try again, or email {fallbackEmail}.
                  </p>
                )}
              </form>
            )}
          </div>

          <aside>
            <p className="eyebrow">say hello</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li>
                <a href={`mailto:${fallbackEmail}`}>{fallbackEmail}</a>
              </li>
              {pressEmail ? (
                <li>
                  <a href={`mailto:${pressEmail}`}>{pressEmail}</a>{" "}
                  <span className="muted">(press)</span>
                </li>
              ) : null}
              {networkEmail ? (
                <li>
                  <a href={`mailto:${networkEmail}`}>{networkEmail}</a>{" "}
                  <span className="muted">(network)</span>
                </li>
              ) : null}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
