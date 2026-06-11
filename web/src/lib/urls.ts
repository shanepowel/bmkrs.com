/** External product URLs (marketing site links out; apps live on their own hosts). */

export const NETWORK_PORTAL_URL =
  process.env.NEXT_PUBLIC_NETWORK_PORTAL_URL || "https://app.bmkrs.com";

type NetworkUrlSettings = {
  networkPortalUrl?: string;
  networkHireUrl?: string;
  networkJoinUrl?: string;
  memberLoginUrl?: string;
};

export function resolveNetworkPortalUrl(settings?: NetworkUrlSettings): string {
  return settings?.networkPortalUrl?.trim() || NETWORK_PORTAL_URL;
}

function networkAppPath(base: string, path: string): string {
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

export function resolveNetworkHireUrl(settings?: NetworkUrlSettings): string {
  return (
    settings?.networkHireUrl?.trim() ||
    networkAppPath(resolveNetworkPortalUrl(settings), "hire")
  );
}

export function resolveNetworkJoinUrl(settings?: NetworkUrlSettings): string {
  return (
    settings?.networkJoinUrl?.trim() ||
    networkAppPath(resolveNetworkPortalUrl(settings), "join")
  );
}

export function resolveMemberLoginUrl(settings?: NetworkUrlSettings): string {
  return (
    settings?.memberLoginUrl?.trim() ||
    networkAppPath(resolveNetworkPortalUrl(settings), "login")
  );
}

export function networkPortalLabel(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
}
