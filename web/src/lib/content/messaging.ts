/**
 * Brand lines locked to the editorial render.
 * Sentence-case headlines. Quiet studio voice. No AI-pilot pitch.
 * Ladder (internal): start → build → grow. Schema value `make` displays as `build`.
 */

import type { ProductTier } from "@/lib/types";

export const brandMessaging = {
  tagline: "A creative and digital studio in London.",
  oneLiner: "We partner with ambitious businesses to define, design and build what's next.",
  description:
    "bmkrs is an independent creative and digital studio in London. We partner with ambitious businesses to define, design and build what's next.",
  process: "define → design → build → grow",
  processShort: "strategy · design · build · grow",
  ctaPrimary: "Talk to us",
  ctaWork: "See the work",
  ctaMotion: "Grow with us",
  ctaClose: "Get in touch",
  heroEyebrow: "",
  heroTitle: "A creative and digital studio in London.",
  heroSub: "We partner with ambitious businesses to define, design and build what's next.",
  positioningEyebrow: "Our story",
  positioningStatement: "Our story",
  positioningLead:
    "We are a small independent studio. Strategy, design and technology sit in one room so the work stays coherent from the first conversation to launch and beyond.",
  positioningBody:
    "We partner with ambitious businesses that care about craft as much as outcomes. The brief is never just a deck. It is something people can use.",
  teamEyebrow: "The team",
  teamLead: "A tight group of people who think, design and build together.",
  closeTitle: "Let's talk.",
  closeLead: "Tell us what you are building. We will tell you what it needs.",
  whoStatement: "Ambitious businesses ready to move forward.",
  whoLead:
    "Whether you are shaping a new idea, improving a product or rethinking how technology can work for your business, we bring the people and perspective to move it forward.",
  workTitle: "Selected work",
  workSubtitle: "Brands, products and experiences we have helped bring to life.",
  journalTitle: "Journal",
  journalLede: "Ideas, perspectives and field notes from across brand, product and technology.",
  packagesEyebrow: "Ways to work with us",
  packagesTitle: "Start, build, grow.",
  servicesHero: "Everything needed to move an idea forward.",
  servicesLead:
    "From early-stage thinking to complex delivery, we bring the right expertise together around the problem that needs solving.",
  contactServicesLabel: "What would you like to make happen?",
  contactSubmit: "Send the brief",
  contactSending: "Sending…",
  newsletterTitle: "The bmkrs newsletter",
  newsletterLede: "Occasional notes on design, technology and the work we are making.",
} as const;

export const TIER_DISPLAY: Record<
  ProductTier,
  { label: string; blurb: string; eyebrow: string; shape: string; featured?: boolean }
> = {
  start: {
    label: "Start",
    blurb: "Find the opportunity and agree a confident next step.",
    eyebrow: "Discover",
    shape: "A focused first step",
  },
  make: {
    label: "Build",
    blurb: "Turn the right idea into a thoughtful digital product or experience.",
    eyebrow: "Make it real",
    shape: "Timeline and scope agreed together",
    featured: true,
  },
  grow: {
    label: "Grow",
    blurb: "Keep improving with a partner alongside your team.",
    eyebrow: "Keep moving",
    shape: "Ongoing partnership, shaped around your team",
  },
};

export function tierLabel(tier: ProductTier): string {
  return TIER_DISPLAY[tier].label;
}
