"use client";

import { useState } from "react";

const serviceOptions = [
  "Branding & Identity",
  "Performance Marketing",
  "Websites & Digital Platforms",
  "eCommerce Platforms",
];

export function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setMessage("Thanks — we'll be in touch soon.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(`Something went wrong. Email us at ${email}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl bg-surface p-8 ring-1 ring-white/10">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-muted">Name</span>
          <input
            name="name"
            required
            className="w-full rounded-lg border border-white/10 bg-background px-4 py-3 text-white outline-none focus:border-brand"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-muted">Email</span>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-white/10 bg-background px-4 py-3 text-white outline-none focus:border-brand"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-sm text-muted">Business</span>
        <input
          name="business"
          className="w-full rounded-lg border border-white/10 bg-background px-4 py-3 text-white outline-none focus:border-brand"
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm text-muted">Service</span>
        <select
          name="service"
          className="w-full rounded-lg border border-white/10 bg-background px-4 py-3 text-white outline-none focus:border-brand"
        >
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-2 block text-sm text-muted">Message</span>
        <textarea
          name="message"
          rows={4}
          required
          className="w-full rounded-lg border border-white/10 bg-background px-4 py-3 text-white outline-none focus:border-brand"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-brand py-3 font-medium text-white hover:bg-brand-hover disabled:opacity-50"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
      {message && (
        <p className={status === "error" ? "text-red-400" : "text-brand"}>{message}</p>
      )}
      <p className="text-center text-sm text-muted">
        Or email{" "}
        <a href={`mailto:${email}`} className="text-brand hover:underline">
          {email}
        </a>
      </p>
    </form>
  );
}
