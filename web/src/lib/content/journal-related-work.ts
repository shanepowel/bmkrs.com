/** Journal posts → the case studies and packages that prove the argument. */
export type RelatedCase = { title: string; slug: string };
export type RelatedProduct = { name: string; slug: string };

export type JournalRelatedWork = {
  product?: RelatedProduct;
  cases: RelatedCase[];
};

export const journalRelatedWork: Record<string, JournalRelatedWork> = {
  "one-team-vs-five-agencies": {
    product: { name: "services", slug: "launch-kit" },
    cases: [
      { title: "floare din banat", slug: "fdb" },
      { title: "copa, off the shore", slug: "copa" },
      { title: "podcast studio london", slug: "podcast-studio-london" },
    ],
  },
  "choosing-a-rebrand-agency-uk": {
    product: { name: "rebrand", slug: "rebrand" },
    cases: [
      { title: "floare din banat", slug: "fdb" },
      { title: "copa, off the shore", slug: "copa" },
    ],
  },
  "rebrand-business-decision": {
    product: { name: "rebrand", slug: "rebrand" },
    cases: [{ title: "floare din banat", slug: "fdb" }],
  },
  "brand-identity-for-startups": {
    product: { name: "launch kit", slug: "launch-kit" },
    cases: [
      { title: "copa, off the shore", slug: "copa" },
      { title: "flipster iptv", slug: "flipster" },
    ],
  },
  "what-a-brand-strategy-agency-does": {
    product: { name: "brand check", slug: "brand-check" },
    cases: [{ title: "copa, off the shore", slug: "copa" }],
  },
  "website-copywriting-that-converts": {
    product: { name: "story", slug: "story" },
    cases: [{ title: "floare din banat", slug: "fdb" }],
  },
  "landing-page-ux-five-seconds": {
    product: { name: "storefront", slug: "storefront" },
    cases: [{ title: "floare din banat", slug: "fdb" }],
  },
  "product-launch-pr-checklist": {
    product: { name: "press launch", slug: "press-launch" },
    cases: [{ title: "podcast studio london", slug: "podcast-studio-london" }],
  },
  "better-told-brand-wins": {
    product: { name: "launch kit", slug: "launch-kit" },
    cases: [
      { title: "podcast studio london", slug: "podcast-studio-london" },
      { title: "copa, off the shore", slug: "copa" },
    ],
  },
};
