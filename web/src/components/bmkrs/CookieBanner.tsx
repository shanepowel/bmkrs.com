"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SURFACE } from "@/lib/surfaces";

const KEY = "bmkrs-consent";
const MAX_AGE_DAYS = 365;

type Consent = { analytics: boolean; at: number };

export function getConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Consent;
    const ageDays = (Date.now() - parsed.at) / 86400000;
    return ageDays > MAX_AGE_DAYS ? null : parsed;
  } catch {
    return null;
  }
}

/** call from the footer "manage cookies" link */
export function reopenConsent() {
  localStorage.removeItem(KEY);
  window.dispatchEvent(new Event("bmkrs-consent-reopen"));
}

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const ink = SURFACE.ink;

  useEffect(() => {
    setOpen(getConsent() === null);
    const reopen = () => setOpen(true);
    window.addEventListener("bmkrs-consent-reopen", reopen);
    return () => window.removeEventListener("bmkrs-consent-reopen", reopen);
  }, []);

  function decide(analytics: boolean) {
    localStorage.setItem(KEY, JSON.stringify({ analytics, at: Date.now() } satisfies Consent));
    window.dispatchEvent(new Event("bmkrs-consent-changed"));
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="cookie consent"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-50"
      style={{ background: ink.bg, borderTop: `1px solid ${ink.rule}` }}
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-12">
        <p className="max-w-[60ch] text-sm leading-relaxed" style={{ color: ink.body }}>
          we use one or two cookies to see how the site is doing. nothing creepy, nothing sold, and
          saying no changes nothing about your visit.{" "}
          <Link
            href="/legal/cookies"
            className="underline decoration-1 underline-offset-4"
            style={{ color: ink.text }}
          >
            the full list
          </Link>
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => decide(false)}
            className="rounded-full border px-6 py-3 text-sm font-medium transition-transform hover:scale-[1.03] active:scale-[0.98] motion-reduce:transform-none"
            style={{
              borderColor: "rgba(241,239,232,0.4)",
              color: ink.text,
              background: "transparent",
            }}
          >
            no thanks
          </button>
          <button
            type="button"
            onClick={() => decide(true)}
            className="rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-[1.03] active:scale-[0.98] motion-reduce:transform-none"
            style={{ background: ink.accent, color: ink.bg }}
          >
            fine by me
          </button>
        </div>
      </div>
    </div>
  );
}
