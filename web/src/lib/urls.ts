/** External product URLs (marketing site links out; apps live on their own hosts). */

export const NETWORK_PORTAL_URL =
  process.env.NEXT_PUBLIC_NETWORK_PORTAL_URL || "https://app.bmkrs.com";

export function resolveNetworkPortalUrl(settings?: { networkPortalUrl?: string }): string {
  return settings?.networkPortalUrl?.trim() || NETWORK_PORTAL_URL;
}

export function networkPortalLabel(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
}
