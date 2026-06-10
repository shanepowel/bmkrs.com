/**
 * Canonical /services anchors:
 * - Disciplines (top of page): #branding, #voice, #pr, #product
 * - Products (tier sections): #launch-kit, #brand-check, #story, etc.
 */

export const DISCIPLINE_ANCHORS = {
  branding: "brand + identity",
  voice: "voice + messaging",
  pr: "pr + communications",
  product: "product, web + growth",
} as const;

export type DisciplineAnchorId = keyof typeof DISCIPLINE_ANCHORS;

const DISCIPLINE_NAME_TO_ANCHOR: Record<string, DisciplineAnchorId> = {
  "brand + identity": "branding",
  "voice + messaging": "voice",
  "pr + communications": "pr",
  "product, web + growth": "product",
};

/** Case study service labels → primary product anchor. */
const SERVICE_TAG_ANCHORS: Record<string, string> = {
  "brand + identity": "launch-kit",
  "voice + messaging": "story",
  "pr + communications": "press-launch",
  "product, web + growth": "storefront",
  "photography / art direction": "launch-kit",
};

export function disciplineAnchorId(name: string): DisciplineAnchorId | null {
  const key = name.trim().toLowerCase();
  const entry = Object.entries(DISCIPLINE_NAME_TO_ANCHOR).find(
    ([label]) => label.toLowerCase() === key
  );
  return entry?.[1] ?? null;
}

export function disciplineHref(name: string): string {
  const id = disciplineAnchorId(name);
  return id ? `/services#${id}` : "/services";
}

export function productHref(slug: string): string {
  return `/services#${slug}`;
}

export function serviceAnchorForTag(tag: string): string {
  const key = tag.trim().toLowerCase();
  const match = Object.entries(SERVICE_TAG_ANCHORS).find(
    ([label]) => label.toLowerCase() === key
  );
  return match ? `/services#${match[1]}` : disciplineHref(tag);
}
