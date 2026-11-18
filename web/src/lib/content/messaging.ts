/**
 * Single source for public-facing brand lines.
 * Keep pages, SEO and CTAs pointed here so the offer reads as one studio, not a collage of drafts.
 *
 * Ladder (user-facing): start → build → grow
 * Process (user-facing): discover → design → build → grow
 * Internal Sanity tier value for build remains `make` until a schema migration.
 */

import type { ProductTier } from "@/lib/types";

export const brandMessaging = {
  tagline: "from AI ambition to products in production.",
  oneLiner: "an independent product and AI delivery studio for complex organisations.",
  description:
    "bmkrs is an independent product and AI delivery studio. We help product and transformation leaders move from promising ideas and pilots to useful products their teams can run.",
  process: "assess · design · build · enable",
  processShort: "assess · build · govern · enable",
  ctaPrimary: "talk through a challenge",
  ctaWork: "see the work",
  ctaMotion: "keep it moving",
  heroEyebrow: "independent product and AI delivery studio",
  heroTitleLead: "the right idea,",
  heroTitleEm: "made real.",
  heroSub:
    "we help product and transformation leaders take AI and digital products into production, inside the systems, safeguards and teams that keep them running.",
  positioningEyebrow: "the work after the pilot",
  positioningStatement: "the hard part begins when the demo ends.",
  positioningLead:
    "we bring product, engineering and governance into one delivery team, so useful AI and digital products can clear the controls, reach real users and stay operational.",
  closeTitle: "move the work into the real world.",
  whoStatement: "for product and transformation leaders carrying real-world complexity.",
  whoLead:
    "you need products people can use, delivery that respects existing controls, and a team that leaves your people more capable. that's where we work.",
  workTitle: "built and shipped for real use.",
  workSubtitle: "digital products, platforms and brands made for clients and built in our studio. all real work, made to be used.",
  packagesEyebrow: "one team, from first question to live product",
  packagesTitle: "start, build, grow.",
  servicesHero: "move beyond the pilot.",
  servicesLead:
    "we assess the opportunity, build the product and leave your team ready to run it. one connected team across product, AI, governance and delivery.",
  contactServicesLabel: "where does the work need to move?",
  contactSubmit: "send your enquiry",
  contactSending: "sending…",
} as const;

/** User-facing labels for product tiers. Schema value `make` displays as `build`. */
export const TIER_DISPLAY: Record<
  ProductTier,
  { label: string; blurb: string; eyebrow: string; shape: string; featured?: boolean }
> = {
  start: {
    label: "start",
    blurb: "find the use cases worth solving, assess the risk and agree what to do next.",
    eyebrow: "assess",
    shape: "a focused first step",
  },
  make: {
    label: "build",
    blurb: "design, integrate and ship usable products within your operating controls.",
    eyebrow: "build",
    shape: "timeline and scope agreed together",
    featured: true,
  },
  grow: {
    label: "grow",
    blurb: "improve what is live, build team capability and keep it working.",
    eyebrow: "enable",
    shape: "ongoing partnership, shaped around your team",
  },
};

export function tierLabel(tier: ProductTier): string {
  return TIER_DISPLAY[tier].label;
}
