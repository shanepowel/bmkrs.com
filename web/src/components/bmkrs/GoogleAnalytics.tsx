"use client";

import { useEffect, useRef } from "react";
import { getConsent } from "@/components/bmkrs/CookieBanner";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-4GXGNXYMVL";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function shouldLoad(): boolean {
  if (process.env.NODE_ENV !== "production") return false;
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") return false;
  return getConsent()?.analytics === true;
}

function injectGtag(id: string) {
  if (typeof window === "undefined") return;
  if (document.querySelector(`script[data-bmkrs-ga="${id}"]`)) {
    window.gtag?.("config", id);
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", id);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  script.dataset.bmkrsGa = id;
  document.head.appendChild(script);
}

/** loads gtag only after cookie-banner analytics consent */
export function GoogleAnalytics() {
  const loaded = useRef(false);

  useEffect(() => {
    if (!GA_ID) return;

    const sync = () => {
      if (!shouldLoad()) return;
      if (loaded.current) {
        window.gtag?.("config", GA_ID);
        return;
      }
      injectGtag(GA_ID);
      loaded.current = true;
    };

    sync();
    window.addEventListener("bmkrs-consent-changed", sync);
    return () => window.removeEventListener("bmkrs-consent-changed", sync);
  }, []);

  return null;
}
