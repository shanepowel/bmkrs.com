"use client";

import { useState } from "react";
import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";

const serviceOptions = [
  "branding",
  "voice + messaging",
  "pr",
  "product + web",
  "motion",
  "not sure yet",
];

export function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [service, setService] = useState(serviceOptions[0]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    data.service = service;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setMessage("thanks. we'll be in touch within one working day.");
      form.reset();
      setService(serviceOptions[0]);
    } catch {
      setStatus("error");
      setMessage(`something went wrong. email us at ${email}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="field">
        <label className="field-label" htmlFor="name">
          name
        </label>
        <input id="name" name="name" required className="field-input" placeholder="your name" />
      </div>
      <div className="field">
        <label className="field-label" htmlFor="email">
          email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="field-input nocase"
          placeholder="you@company.com"
        />
      </div>
      <div className="field">
        <label className="field-label" htmlFor="company">
          company
        </label>
        <input id="company" name="company" className="field-input" placeholder="company name" />
      </div>
      <div className="field">
        <span className="field-label">what can we help with?</span>
        <div className="flex flex-wrap gap-2.5">
          {serviceOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              className={`rounded-full border-2 border-ink px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-ink hover:text-bg ${
                service === opt ? "bg-ink text-bg" : ""
              }`}
              onClick={() => setService(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
        <input type="hidden" name="service" value={service} />
      </div>
      <div className="field">
        <label className="field-label" htmlFor="message">
          tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={3}
          className="field-input resize-y"
          placeholder="a few lines is plenty."
        />
      </div>
      <button type="submit" className="btn-primary" disabled={status === "loading"}>
        {status === "loading" ? "sending…" : "send it over"} <ArrowIcon />
      </button>
      {message && (
        <p className={`min-h-[22px] text-[15px] font-medium ${status === "error" ? "text-ink" : "text-accent"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
