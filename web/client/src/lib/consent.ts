/**
 * Cookie consent for bmkrs.com: one source of truth for the banner, the analytics loader and the footer link.
 *
 * Only one optional category exists: analytics (Google Tag Manager and Mailchimp's site script). Nothing optional
 * loads until the visitor accepts. The choice is kept for 12 months and then asked for again, and it can be changed
 * at any time from "Cookie settings" in the footer.
 */

export type ConsentChoice = { analytics: boolean; decidedAt: string };

const KEY = "bmkrs-consent";
const LEGACY_KEYS = ["cookie-consent", "analytics-cookies"];
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

/** Fired when the visitor makes or changes a choice. */
export const CONSENT_CHANGED = "bmkrs:cookie-consent";
/** Fired to reopen the banner, from the footer's "Cookie settings". */
export const OPEN_COOKIE_SETTINGS = "bmkrs:open-cookie-settings";

/** Cookies set by the optional scripts, removed when analytics is turned off. */
const ANALYTICS_COOKIE = /^(_ga|_gid|_gat|_gcl|_dc_gtm|_mcid|_mcda)/;

function read(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const choice = JSON.parse(raw) as ConsentChoice;
      if (typeof choice.analytics === "boolean" && Date.now() - Date.parse(choice.decidedAt) < MAX_AGE_MS) return choice;
      localStorage.removeItem(KEY);
      return null;
    }
    // Carry over a choice made with the previous banner, then re-ask after 12 months like any other.
    const legacy = localStorage.getItem("analytics-cookies");
    if (legacy === "accepted" || legacy === "rejected") {
      const migrated = { analytics: legacy === "accepted", decidedAt: new Date().toISOString() };
      localStorage.setItem(KEY, JSON.stringify(migrated));
      LEGACY_KEYS.forEach((k) => localStorage.removeItem(k));
      return migrated;
    }
  } catch {
    // Storage blocked: treat as no choice made, so nothing optional loads.
  }
  return null;
}

export function getConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  return read();
}

export function hasAnalyticsConsent(): boolean {
  return getConsent()?.analytics === true;
}

/**
 * Whether the analytics scripts have run during this page view. Tracked separately from the saved choice, because
 * a choice can expire while the page is open, and withdrawal must still clean up scripts that already ran.
 */
let analyticsLoaded = false;

export function markAnalyticsLoaded() {
  analyticsLoaded = true;
}

function clearAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  for (const name of document.cookie.split(";").map((c) => c.split("=")[0].trim())) {
    if (!ANALYTICS_COOKIE.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

/**
 * Save a choice. Turning analytics off after it was on clears its cookies and reloads the page, because scripts
 * that have already run cannot be unloaded.
 */
export function setConsent(analytics: boolean) {
  const wasOn = analyticsLoaded || hasAnalyticsConsent();
  try {
    localStorage.setItem(KEY, JSON.stringify({ analytics, decidedAt: new Date().toISOString() }));
    LEGACY_KEYS.forEach((k) => localStorage.removeItem(k));
  } catch {
    // Storage blocked: the choice applies to this page view only.
  }
  window.dispatchEvent(new Event(CONSENT_CHANGED));
  if (wasOn && !analytics) {
    clearAnalyticsCookies();
    window.location.reload();
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS));
}
