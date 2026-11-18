/**
 * Canonical /services package anchors (start / make tiers).
 * Legacy discipline hashes (#branding, #voice, #pr, #product) redirect client-side.
 */

/** Legacy discipline hash ids → product anchors (include leading #). */
export const LEGACY_DISCIPLINE_HASH_MAP: Record<string, string> = {
  "#branding": "#product-build",
  "#voice": "#product-build",
  "#pr": "#onboard",
  "#product": "#product-build",
  "#launch-kit": "#product-build",
  "#story": "#product-build",
  "#press-launch": "#onboard",
  "#storefront": "#product-build",
  "#brand-check": "#readiness",
  "#rebrand": "#product-build",
};

/** Case study service labels → primary product anchor. */
const SERVICE_TAG_ANCHORS: Record<string, string> = {
  "product build": "product-build",
  "digital product": "product-build",
  "ai implementation": "ai-implementation",
  "ai governance": "ai-governance",
  onboard: "onboard",
  readiness: "readiness",
  "brand + identity": "product-build",
  "voice + messaging": "product-build",
  "pr + communications": "onboard",
  "product, web + growth": "product-build",
  "photography / art direction": "product-build",
};

export function productHref(slug: string): string {
  return `/services#${slug}`;
}

export function serviceAnchorForTag(tag: string): string {
  const key = tag.trim().toLowerCase();
  const match = Object.entries(SERVICE_TAG_ANCHORS).find(
    ([label]) => label.toLowerCase() === key,
  );
  return match ? `/services#${match[1]}` : "/services";
}
