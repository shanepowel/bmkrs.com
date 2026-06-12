/**
 * Canonical /services package anchors (start / make tiers).
 * Legacy discipline hashes (#branding, #voice, #pr, #product) redirect client-side.
 */

/** @deprecated legacy discipline hash ids — use product anchors */
export const LEGACY_DISCIPLINE_HASH_MAP = {
  branding: "launch-kit",
  voice: "story",
  pr: "press-launch",
  product: "storefront",
} as const;

/** Case study service labels → primary product anchor. */
const SERVICE_TAG_ANCHORS: Record<string, string> = {
  "brand + identity": "launch-kit",
  "voice + messaging": "story",
  "pr + communications": "press-launch",
  "product, web + growth": "storefront",
  "photography / art direction": "launch-kit",
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

/** @deprecated use productHref or serviceAnchorForTag */
export function disciplineHref(name: string): string {
  const key = name.trim().toLowerCase();
  const match = Object.entries(SERVICE_TAG_ANCHORS).find(
    ([label]) => label.toLowerCase() === key,
  );
  return match ? `/services#${match[1]}` : "/services";
}
