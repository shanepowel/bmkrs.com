'use client';

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { OPEN_COOKIE_SETTINGS, getConsent, setConsent } from "@/lib/consent";

/**
 * Cookie choices for bmkrs.com. Not a modal: the page stays usable, and nothing optional loads until the visitor
 * accepts. Accept and reject carry equal weight, and "Cookie settings" in the footer reopens this panel.
 */
const CookieBanner = () => {
  const [open, setOpen] = useState(false);
  const [managing, setManaging] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingId = useId();
  const switchId = useId();

  useEffect(() => {
    if (!getConsent()) setOpen(true);
    const reopen = () => {
      setAnalytics(getConsent()?.analytics ?? false);
      setManaging(true);
      setOpen(true);
      requestAnimationFrame(() => headingRef.current?.focus());
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, reopen);
  }, []);

  const choose = (value: boolean) => {
    setOpen(false);
    setManaging(false);
    setConsent(value);
  };

  if (!open) return null;

  return (
    <section
      role="region"
      aria-labelledby={headingId}
      className="fixed inset-x-0 bottom-0 z-[60] border-t-2 border-[#F85C70] bg-[#181F4F] text-white shadow-[0_-12px_40px_rgba(0,0,0,0.35)] sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-md sm:border sm:border-t-2 sm:border-white/10 sm:border-t-[#F85C70]"
      data-testid="cookie-banner"
    >
      <div className="p-5 sm:p-6">
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#F85C70]">Cookies</p>
        <h2 id={headingId} ref={headingRef} tabIndex={-1} className="mb-2 text-lg font-semibold leading-snug outline-none">
          Can we measure how this site is used?
        </h2>
        <p className="text-sm leading-relaxed text-white/75">
          With your permission we load Google Tag Manager and Mailchimp&apos;s site script, which set cookies to show
          us which pages are read. Nothing is loaded unless you accept. You can change your mind at any time from
          Cookie settings in the footer.
        </p>

        {managing && (
          <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold">Strictly necessary</p>
                <p className="text-xs leading-relaxed text-white/60">
                  Remembers this choice on your device. Always on.
                </p>
              </div>
              <span className="shrink-0 pt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-white/60">On</span>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <label htmlFor={switchId} className="text-sm font-semibold">
                  Analytics
                </label>
                <p className="text-xs leading-relaxed text-white/60">
                  Google Tag Manager and Mailchimp. Kept for 12 months, then we ask again.
                </p>
              </div>
              <Switch
                id={switchId}
                checked={analytics}
                onCheckedChange={setAnalytics}
                className="mt-0.5 shrink-0 data-[state=checked]:bg-[#F85C70] data-[state=unchecked]:bg-white/25"
                data-testid="switch-analytics-cookies"
              />
            </div>
          </div>
        )}

        <div className="mt-5 grid grid-cols-2 gap-2">
          {managing ? (
            <Button
              variant="coral"
              size="md"
              className="col-span-2"
              onClick={() => choose(analytics)}
              data-testid="button-save-cookie-choices"
            >
              Save choices
            </Button>
          ) : (
            <>
              <Button variant="outlineLight" size="md" onClick={() => choose(false)} data-testid="button-reject-cookies">
                Reject
              </Button>
              <Button variant="outlineLight" size="md" onClick={() => choose(true)} data-testid="button-accept-cookies">
                Accept
              </Button>
            </>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between text-xs">
          {managing ? (
            <button
              type="button"
              onClick={() => setManaging(false)}
              className="amp-focus-ring-on-navy rounded text-white/70 underline underline-offset-2 hover:text-white"
            >
              Back
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setAnalytics(getConsent()?.analytics ?? false);
                setManaging(true);
              }}
              className="amp-focus-ring-on-navy rounded text-white/70 underline underline-offset-2 hover:text-white"
              data-testid="button-manage-cookies"
            >
              Manage choices
            </button>
          )}
          <Link href="/privacy#cookies" className="amp-focus-ring-on-navy rounded text-white/70 underline underline-offset-2 hover:text-white">
            Privacy policy
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CookieBanner;
