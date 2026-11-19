/**
 * Single source for public-facing brand lines.
 * Content call (moodboard × product studio):
 * - Lead with identity: london creative + digital studio
 * - Keep product/technology/ai as how we make things real, not the whole brand
 * - Ladder: start → build → grow
 * - Process: discover → design → build → grow
 * Internal Sanity tier value for build remains `make` until a schema migration.
 */

import type { ProductTier } from "@/lib/types";

export const brandMessaging = {
  tagline: "digital products. built for what comes next.",
  oneLiner: "a creative and digital studio in london. we make good ideas real.",
  description:
    "bmkrs is an independent creative and digital studio in london. we help ambitious businesses turn ideas into products, experiences and technology that work in the real world.",
  process: "discover → design → build → grow",
  processShort: "strategy · design · build · grow",
  ctaPrimary: "talk to us",
  ctaWork: "see the work",
  ctaMotion: "grow with us",
  heroEyebrow: "independent studio · london",
  heroTitleLead: "a creative and digital studio",
  heroTitleEm: "in london.",
  heroSub:
    "we bring strategy, design and technology together to turn ambitious ideas into digital products and experiences people actually use. from the first conversation through launch and beyond.",
  positioningEyebrow: "our story",
  positioningStatement: "the right thinking. the right people. the right things built.",
  positioningLead:
    "we are small enough to care and experienced enough to deliver. strategy, product, design and engineering sit in one room so the work stays coherent from first sketch to production.",
  closeTitle: "let's talk.",
  whoStatement: "ambitious businesses ready to move forward.",
  whoLead:
    "whether you are shaping a new idea, improving a product or rethinking how technology can work for your business, we bring the people and perspective to move it forward.",
  workTitle: "selected work",
  workSubtitle: "brands, products and experiences we have helped bring to life.",
  packagesEyebrow: "ways to work with us",
  packagesTitle: "start, build, grow.",
  servicesHero: "everything needed to move an idea forward.",
  servicesLead:
    "from early-stage thinking to complex delivery, we bring the right expertise together around the problem that needs solving. every engagement is shaped around what will make the biggest difference.",
  contactServicesLabel: "what would you like to make happen?",
  contactSubmit: "send the brief",
  contactSending: "sending…",
} as const;

/** User-facing labels for product tiers. Schema value `make` displays as `build`. */
export const TIER_DISPLAY: Record<
  ProductTier,
  { label: string; blurb: string; eyebrow: string; shape: string; featured?: boolean }
> = {
  start: {
    label: "start",
    blurb: "find the opportunity and agree a confident next step.",
    eyebrow: "discover",
    shape: "a focused first step",
  },
  make: {
    label: "build",
    blurb: "turn the right idea into a thoughtful digital product or experience.",
    eyebrow: "make it real",
    shape: "timeline and scope agreed together",
    featured: true,
  },
  grow: {
    label: "grow",
    blurb: "keep improving with a partner alongside your team.",
    eyebrow: "keep moving",
    shape: "ongoing partnership, shaped around your team",
  },
};

export function tierLabel(tier: ProductTier): string {
  return TIER_DISPLAY[tier].label;
}
