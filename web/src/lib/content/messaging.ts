/**
 * Single source for public-facing brand lines.
 * Keep pages, SEO and CTAs pointed here so the offer reads as one studio, not a collage of drafts.
 *
 * Ladder (user-facing): start → build → grow
 * Process: assess → implement → amplify → motion
 * Internal Sanity tier value for build remains `make` until a schema migration.
 */

import type { ProductTier } from "@/lib/types";

export const brandMessaging = {
  tagline: "digital products. ai that ships.",
  oneLiner: "we ship digital products and put ai into production.",
  description:
    "bmkrs builds digital products and brings ai into production. strategy, build, governance and handover, so your teams can own what we leave behind.",
  process: "assess → implement → amplify → motion",
  processShort: "assess → implement → amplify",
  ctaPrimary: "start a build",
  ctaWork: "see the work",
  ctaMotion: "explore motion",
  heroEyebrow: "digital product · ai · governance",
  heroTitleLead: "most ai never leaves the pilot.",
  heroTitleEm: "we put it into production.",
  heroSub:
    "digital products, ai systems and the operating model around them. one team from readiness to handover, then motion if you want us to stay.",
  positioningEyebrow: "what we really do",
  positioningStatement: "we ship digital products and put ai into production.",
  positioningLead:
    "pilots are easy. production is the hard part. we design, build and govern with your people in the room, then leave capability that compounds after we leave.",
  closeTitle: "let's put something into production.",
  whoStatement: "product leaders who need shipped work, not another pilot.",
  whoLead:
    "you are responsible for a digital product or an ai programme that has to survive audit, users and the next quarter. you need builders who can design, ship and leave your team able to own it. that is the job we built bmkrs to do.",
  workTitle: "products we have shipped",
  workSubtitle: "selected builds across product, platforms and ai.",
  packagesEyebrow: "ways to work with us",
  packagesTitle: "start, build, grow.",
  servicesHero: "assess, implement, amplify. then stay if you want us.",
  servicesLead:
    "every engagement is bespoke. the packages below shape how we begin, what you get, and what it costs. fixed scope, fixed timeline, one point of contact.",
  contactServicesLabel: "what are we building?",
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
    blurb: "readiness before you spend on a build.",
    eyebrow: "assess",
    shape: "one week, fixed scope",
  },
  make: {
    label: "build",
    blurb: "fixed-scope sprints that ship product and ai into production.",
    eyebrow: "implement",
    shape: "four to twelve weeks, fixed scope",
    featured: true,
  },
  grow: {
    label: "grow",
    blurb: "one team keeping product and ai moving, month after month.",
    eyebrow: "amplify",
    shape: "rolling, monthly",
  },
};

export function tierLabel(tier: ProductTier): string {
  return TIER_DISPLAY[tier].label;
}
