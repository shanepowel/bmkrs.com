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
  tagline: "digital products. built for what comes next.",
  oneLiner: "we turn ambitious ideas into working digital products and businesses.",
  description:
    "bmkrs is a digital product and technology partner helping ambitious businesses turn ideas into products, solve complex challenges and build what comes next.",
  process: "discover · design · build · grow",
  processShort: "strategy · design · build · grow",
  ctaPrimary: "let's build something",
  ctaWork: "explore our work",
  ctaMotion: "grow with us",
  heroEyebrow: "strategy · digital products · technology · ai",
  heroTitleLead: "good ideas deserve better than a slide deck.",
  heroTitleEm: "we make them real.",
  heroSub:
    "we help ambitious businesses turn ideas into digital products, unlock the potential of ai and build technology that moves them forward. from the first conversation to launch and beyond, we bring strategy, creativity and technical delivery together to make meaningful things happen.",
  positioningEyebrow: "what we really do",
  positioningStatement: "the right thinking. the right people. the right things built.",
  positioningLead:
    "we bring strategy, product, design and engineering together around the problem that needs solving. then we stay close enough to make sure the work succeeds in the real world.",
  closeTitle: "have something worth making real?",
  whoStatement: "ambitious businesses ready to move forward.",
  whoLead:
    "whether you are shaping a new idea, improving a product or rethinking how technology can work for your business, we bring the people and perspective to move it forward.",
  workTitle: "ideas are easy. making them work is the interesting part.",
  workSubtitle: "a selection of the brands, products and experiences we have helped bring to life.",
  packagesEyebrow: "ways to work with us",
  packagesTitle: "start, build, grow.",
  servicesHero: "everything needed to move an idea forward.",
  servicesLead:
    "from early-stage thinking to complex delivery, we bring the right expertise together around the problem that needs solving. every engagement is shaped around what will make the biggest difference.",
  contactServicesLabel: "what would you like to make happen?",
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
    blurb: "find the opportunity and agree a confident next step.",
    eyebrow: "discover",
    shape: "a focused first step",
  },
  make: {
    label: "build",
    blurb: "turn the right idea into a thoughtful digital product or technology solution.",
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
