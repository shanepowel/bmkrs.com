/** Journal posts to the case studies and packages that prove the argument. */
export type RelatedCase = { title: string; slug: string };
export type RelatedProduct = { name: string; slug: string };

export type JournalRelatedWork = {
  product?: RelatedProduct;
  cases: RelatedCase[];
};

export const journalRelatedWork: Record<string, JournalRelatedWork> = {
  "one-team-vs-five-agencies": {
    product: { name: "product build", slug: "product-build" },
    cases: [
      { title: "floare din banat", slug: "fdb" },
      { title: "copa, off the shore", slug: "copa" },
      { title: "podcast studio london", slug: "podcast-studio-london" },
      { title: "three18 media", slug: "three18-media" },
    ],
  },
  "choosing-a-rebrand-agency-uk": {
    product: { name: "product build", slug: "product-build" },
    cases: [
      { title: "floare din banat", slug: "fdb" },
      { title: "copa, off the shore", slug: "copa" },
    ],
  },
  "rebrand-business-decision": {
    product: { name: "product build", slug: "product-build" },
    cases: [{ title: "floare din banat", slug: "fdb" }],
  },
  "brand-identity-for-startups": {
    product: { name: "product build", slug: "product-build" },
    cases: [
      { title: "copa, off the shore", slug: "copa" },
      { title: "flipster iptv", slug: "flipster" },
    ],
  },
  "what-a-brand-strategy-agency-does": {
    product: { name: "readiness", slug: "readiness" },
    cases: [{ title: "copa, off the shore", slug: "copa" }],
  },
  "website-copywriting-that-converts": {
    product: { name: "product build", slug: "product-build" },
    cases: [
      { title: "floare din banat", slug: "fdb" },
      { title: "podcast studio london", slug: "podcast-studio-london" },
    ],
  },
  "landing-page-ux-five-seconds": {
    product: { name: "product build", slug: "product-build" },
    cases: [
      { title: "floare din banat", slug: "fdb" },
      { title: "data deep clean", slug: "data-deep-clean" },
    ],
  },
  "product-launch-pr-checklist": {
    product: { name: "onboard", slug: "onboard" },
    cases: [{ title: "podcast studio london", slug: "podcast-studio-london" }],
  },
  "better-told-brand-wins": {
    product: { name: "product build", slug: "product-build" },
    cases: [
      { title: "podcast studio london", slug: "podcast-studio-london" },
      { title: "three18 media", slug: "three18-media" },
      { title: "copa, off the shore", slug: "copa" },
    ],
  },
};
