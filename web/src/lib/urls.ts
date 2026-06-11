/** External product URLs (marketing site links out; apps live on their own hosts). */

export const NETWORK_PORTAL_URL =
  process.env.NEXT_PUBLIC_NETWORK_PORTAL_URL || "https://app.bmkrs.com";

export const NETWORK_HIRE_URL =
  process.env.NEXT_PUBLIC_NETWORK_HIRE_URL || "https://app.bmkrs.com/hire";

export const NETWORK_JOIN_URL =
  process.env.NEXT_PUBLIC_NETWORK_JOIN_URL || "https://app.bmkrs.com/join";

export const MEMBER_LOGIN_URL =
  process.env.NEXT_PUBLIC_MEMBER_LOGIN_URL || "https://app.bmkrs.com/login";

type NetworkUrlSettings = {
  networkPortalUrl?: string;
  networkHireUrl?: string;
  networkJoinUrl?: string;
  memberLoginUrl?: string;
};

export function resolveNetworkPortalUrl(settings?: NetworkUrlSettings): string {
  return settings?.networkPortalUrl?.trim() || NETWORK_PORTAL_URL;
}

export function resolveNetworkHireUrl(settings?: NetworkUrlSettings): string {
  return settings?.networkHireUrl?.trim() || NETWORK_HIRE_URL;
}

export function resolveNetworkJoinUrl(settings?: NetworkUrlSettings): string {
  return settings?.networkJoinUrl?.trim() || NETWORK_JOIN_URL;
}

export function resolveMemberLoginUrl(settings?: NetworkUrlSettings): string {
  return settings?.memberLoginUrl?.trim() || MEMBER_LOGIN_URL;
}

export function networkPortalLabel(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
}
