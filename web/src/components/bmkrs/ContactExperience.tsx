"use client";

import { ImageStrip } from "@/components/bmkrs/ImageStrip";
import { motionShowcaseImages } from "@/lib/content/image-fallbacks";
import { useRef, useState } from "react";

type Reason = "project" | "press" | "network" | "hi";

const PATHS: { key: Reason; title: string; blurb: string }[] = [
  { key: "project", title: "start a project", blurb: "you have something to build." },
  { key: "press", title: "press + partnerships", blurb: "media, collabs, speaking." },
  { key: "network", title: "join the network", blurb: "freelancers and specialists." },
  { key: "hi", title: "just saying hi", blurb: "no agenda, all welcome." },
];

const CITIES = [
  { x: 120, y: 104, name: "new york", d: "M300,86 Q210,40 120,104" },
  { x: 360, y: 74, name: "berlin", d: "M300,86 Q330,52 360,74" },
  { x: 450, y: 126, name: "dubai", d: "M300,86 Q380,82 450,126" },
  { x: 565, y: 168, name: "sydney", d: "M300,86 Q450,36 565,168" },
];

export function ContactExperience({ fallbackEmail }: { fallbackEmail: string }) {
  const [reason, setReason] = useState<Reason>("project");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLDivElement>(null);

  const choose = (r: Reason) => {
    setReason(r);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, reason }),
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
          <p className="muted mt-2">london, and wherever you are.</p>

          <svg
            className="contact-map"
            viewBox="0 0 640 200"
            role="img"
            aria-label="London connected to cities worldwide"
          >
            <defs>
              <pattern id="cxdots" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" />
              </pattern>
            </defs>
            <rect width="640" height="200" fill="url(#cxdots)" className="cx-grid" />
            {CITIES.map((c) => (
              <path key={c.name} d={c.d} className="cx-arc" fill="none" />
            ))}
            {CITIES.map((c) => (
              <g key={c.name}>
                <circle cx={c.x} cy={c.y} r={3} className="cx-city-dot" />
                <text x={c.x} y={c.y + 16} textAnchor="middle" className="cx-city">
                  {c.name}
                </text>
              </g>
            ))}
            <circle cx={300} cy={86} r={6} className="cx-pulse" />
            <circle cx={300} cy={86} r={5} className="cx-london" />
            <text x={300} y={74} textAnchor="middle" className="cx-london-label">
              london
            </text>
          </svg>
          <ImageStrip images={motionShowcaseImages} className="contact-image-strip" />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">what are you here for?</p>
          <div className="cx-paths">
            {PATHS.map((p) => (
              <button
                key={p.key}
                type="button"
                className={`cx-path ${reason === p.key ? "is-active" : ""}`}
                onClick={() => choose(p.key)}
                aria-pressed={reason === p.key}
              >
                <span className="cx-path-title">{p.title}</span>
                <span className="cx-path-blurb">{p.blurb}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section pb-20" ref={formRef}>
        <div className="wrap">
          {status === "sent" ? (
            <div className="cx-thanks">
              <h2 className="display text-[clamp(1.75rem,4vw,2.5rem)] font-bold">got it. thank you.</h2>
              <p className="lede mt-4">a real person will reply within one working day.</p>
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
              <label>
                <span className="eyebrow">company (optional)</span>
                <input name="company" autoComplete="organization" />
              </label>
              <label>
                <span className="eyebrow">what can we help with?</span>
                <select name="reason" value={reason} onChange={(e) => setReason(e.target.value as Reason)}>
                  <option value="project">start a project</option>
                  <option value="press">press + partnerships</option>
                  <option value="network">join the network</option>
                  <option value="hi">just saying hi</option>
                </select>
              </label>
              <label className="cx-full">
                <span className="eyebrow">tell us a bit more</span>
                <textarea name="message" rows={5} required />
              </label>
              <div className="cx-submit">
                <button className="btn-primary" type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "sending..." : "send it over"}
                </button>
                <span className="muted">a real person replies within one working day. promise.</span>
              </div>
              {status === "error" && (
                <p className="cx-error">
                  something went wrong. try again, or email {fallbackEmail}.
                </p>
              )}
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
