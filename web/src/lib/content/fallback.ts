import { marketingImages, marketingVideos } from "@/lib/marketing-assets";
import {
  placeholderCompany,
  placeholderHomeTestimonials,
  placeholderResultsBySlug,
} from "@/lib/content/case-study-placeholders";
import type {
  HomeContent,
  MotionContent,
  NavItem,
  Project,
  SiteSettings,
  Testimonial,
} from "@/lib/types";

export const fallbackNavigation: NavItem[] = [
  { label: "work", href: "/work" },
  { label: "services", href: "/services" },
  { label: "motion", href: "/motion" },
  { label: "network", href: "/network" },
  { label: "journal", href: "/journal" },
  { label: "about", href: "/about" },
  { label: "contact", href: "/contact", highlight: true },
];

export const fallbackSiteSettings: SiteSettings = {
  siteName: "bmkrs.",
  tagline: "a brand company run by builders.",
  description:
    "the better-told brand wins. we make sure it is yours. brand, voice, pr and the product behind it, from one team.",
  email: "hello@bmkrs.com",
  generalEmail: "hello@bmkrs.com",
  pressEmail: "press@bmkrs.com",
  companyName: "b makers ltd",
  companyNumber: placeholderCompany.companyNumber || undefined,
  registeredAddress: placeholderCompany.registeredAddress || undefined,
  londonAddress: placeholderCompany.londonAddress,
  copyright: "© 2026 b makers ltd. all rights reserved.",
  footerQuip:
    "they say no one reads the footer. you made it this far, so let's make something.",
  offices: [{ name: "london" }, { name: "worldwide" }],
  departments: [
    { label: "general", email: "hello@bmkrs.com" },
    { label: "press", email: "press@bmkrs.com" },
  ],
  networkEmail: "network@bmkrs.com",
  networkPortalUrl: "https://app.bmkrs.com",
  networkHireUrl: "https://app.bmkrs.com/hire",
  networkJoinUrl: "https://app.bmkrs.com/join",
  memberLoginUrl: "https://app.bmkrs.com/login",
  socialLinks: [
    { platform: "instagram", url: "https://instagram.com/bmkrs.global" },
    { platform: "linkedin", url: "https://www.linkedin.com/company/bmkrs" },
  ],
  navigation: fallbackNavigation,
  heroReelUrl: marketingVideos.heroReel,
  heroPoster: marketingImages.heroPoster,
};

export const fallbackHome: HomeContent = {
  hero: {
    eyebrow: "a brand company run by builders",
    headline: "most studios stop at the logo. we ship the whole thing.",
    headlineLead: "we build",
    headlineTail: "brands.",
    sub: "brand, voice, pr, product, growth. one team that takes you from a name on a page to a brand people choose.",
    primaryCta: { label: "see our work", href: "/work" },
    secondaryCta: { label: "start a project", href: "/contact" },
    collage: [
      {
        src: "/images/optimized/copa-hero.jpg",
        alt: "copa, off the shore",
        caption:
          "copa, off the shore · brand + identity · a beach bar that needed to feel like a place, not a logo",
      },
      {
        src: "/work/images/optimized/fdb-2-hero.jpg",
        alt: "floare din banat",
        caption: "floare din banat · ecommerce · romanian craft, told properly for a uk audience",
      },
      { src: "/images/optimized/carter-hero.jpg", alt: "carter mcgreggor" },
      { src: "/images/optimized/smoothies-hero.jpg", alt: "smoothies" },
      { src: "/work/images/optimized/flipster-hero.jpg", alt: "flipster" },
      { src: "/images/optimized/wanderlust-hero.jpg", alt: "wanderlust" },
    ],
  },
  marqueeItems: [
    "branding",
    "voice",
    "messaging",
    "pr",
    "product",
    "growth",
  ],
  positioning: {
    eyebrow: "what we really do",
    statement: "we make people care about what you built.",
    lead: "shipping the product is the easy part. the hard part is attention, and keeping it. we give your product a brand, a voice, and a story so the right people notice, understand, and choose it.",
  },
  capabilitiesHead: {
    title: "strategy-led. growth-built.",
    subtitle:
      "four equally strong domains, one team. the best brands are built across all of them, not bolted together by five different agencies.",
  },
  capabilityTiles: [
    {
      number: "01",
      title: "Brand + identity",
      description:
        "strategy, positioning, naming, and the visual world that makes you clear at a glance.",
      href: "/services#launch-kit",
      image: marketingImages.brandGuidelines,
    },
    {
      number: "02",
      title: "Voice + messaging",
      description:
        "tone of voice, narrative, and messaging that makes people understand and care.",
      href: "/services#story",
      image: marketingImages.designStudio,
    },
    {
      number: "03",
      title: "PR + communications",
      description:
        "launches, press, and thought leadership that get your story heard.",
      href: "/services#press-launch",
      image: marketingImages.socialStrategy,
    },
    {
      number: "04",
      title: "Product, web + growth",
      description:
        "websites, apps, and campaigns that turn attention into revenue.",
      href: "/services#storefront",
      image: marketingImages.digitalEcosystem,
    },
  ],
  stats: [
    {
      highlight: "2013",
      value: "",
      label: "building products and teams since. the studio came later, the rigour did not.",
    },
    { highlight: "4", value: "", label: "disciplines on one coordinated team" },
    { highlight: "1", value: "", label: "point of contact from brief to ship" },
  ],
  whoWeWorkWith: {
    eyebrow: "who we work with",
    statement: "founders and product teams who need the whole journey.",
    lead: "you are building something real and you need the brand, the story and the launch to match, without hiring four agencies and refereeing between them. that is the exact job we built bmkrs to do. established brands come to us for the same reason: one team, no gaps.",
  },
  clientMarquee: ["floare din banat", "copa", "carter mcgreggor", "flipster"],
  motionTeaser: {
    eyebrow: "ongoing partnership",
    heading: "Always in motion.",
    body: "a rolling partnership for brands that never stop talking. one team keeping your brand, voice, and pr moving, month after month.",
    ctaLabel: "explore motion",
    href: "/motion",
  },
  howWeWorkIntro:
    "one team, built around your brand. no churn, no hand-offs.",
  pillars: [
    {
      title: "strategy",
      description:
        "we start with the why. your market, audience, and edge, before a pixel moves.",
      order: 1,
    },
    {
      title: "design",
      description:
        "identity, websites, and storefronts crafted to look sharp and do a job.",
      order: 2,
    },
    {
      title: "growth",
      description:
        "content, analytics, and performance that turn a good brand into a growing one.",
      order: 3,
    },
    {
      title: "partnership",
      description:
        "through motion we stay on as your team, shipping and improving every month.",
      order: 4,
    },
  ],
  selectedWork: {
    eyebrow: "selected work",
    title: "the brands we build for",
    subtitle: "selected projects across branding, ecommerce, and digital.",
  },
  closing: {
    quote: "the storefront finally looks as good as the product. we are proud to share the brand now.",
    attribution: "floare din banat",
  },
};

export const fallbackMotion: MotionContent = {
  benefits: [
    {
      title: "A dedicated team",
      body: "the same people every month, who know your brand as well as you do.",
    },
    {
      title: "A voice that stays true",
      body: "one team guarding your tone, messaging, and story across everything you ship.",
    },
    {
      title: "Always-on PR + content",
      body: "a steady drumbeat of press, content, and campaigns that keep you visible.",
    },
    {
      title: "No churn, no re-briefing",
      body: "we stay with your brand, so every month compounds on the last.",
    },
  ],
  motionPlus: {
    eyebrow: "Motion plus",
    statement: "from in-house to full-house.",
    paragraphs: [
      "motion gives you one dedicated team. motion plus opens our extended network: a curated bench of specialist freelancers and studios, on call for whatever your brief needs. a new market, a niche skill, a sudden surge of work.",
      "you still get one point of contact. you just get an almost unlimited team behind them. the ideal team for your brand probably doesn't all sit at one agency. with motion plus, it doesn't have to.",
    ],
    poweredBy: "powered by amplifiedteams",
  },
  tiersHead: {
    title: "Pick your pace.",
    subtitle:
      "Three rolling plans, scaled to how loud you want to be. Pricing is shared when you book a call.",
  },
  tiers: [
    {
      id: "spark",
      name: "spark",
      priceFrom: "£2.5k",
      priceNote: "/mo",
      pricingCtaLabel: "see pricing from",
      description: "for brands finding their voice.",
      features: [
        "brand + messaging upkeep",
        "monthly content set",
        "one pr or social channel",
        "async support",
      ],
      ctaLabel: "choose spark",
    },
    {
      id: "momentum",
      tag: "most popular",
      name: "momentum",
      priceFrom: "£5k",
      priceNote: "/mo",
      pricingCtaLabel: "see pricing from",
      description: "for brands building a profile.",
      features: [
        "everything in spark",
        "always-on pr + content",
        "paid + organic growth",
        "bi-weekly strategy calls",
      ],
      ctaLabel: "choose momentum",
      featured: true,
    },
    {
      id: "motion-plus",
      tag: "in-house to full-house",
      name: "motion plus",
      priceFrom: "£9k",
      priceNote: "/mo",
      pricingCtaLabel: "see pricing from",
      description: "for brands going all-in.",
      features: [
        "everything in momentum",
        "the extended network on demand",
        "any specialist skill or market",
        "press + thought leadership",
        "weekly calls + roadmap",
      ],
      ctaLabel: "choose motion plus",
      plus: true,
    },
  ],
  closingCta: {
    title: "keep the momentum.",
    body: "see what one dedicated team, and the network behind it, can do when your brand never stops moving.",
    ctaLabel: "book a call",
    ctaHref: "/contact",
  },
};

const fallbackProjectsRaw: Project[] = [
  {
    slug: "copa",
    title: "copa, off the shore",
    client: "copa",
    category: "branding",
    sector: "outdoor apparel",
    year: "2024",
    positioning: "outdoor apparel with a clear point of view.",
    tagline: "outdoor apparel with a clear point of view.",
    brief:
      "copa is an outdoor apparel brand built around life off the shore, expanding from a German base toward a wider European audience. it needed a brand that could travel without losing what made it distinct.",
    challenge:
      "the product had a point of view, but the name, story and visuals did not yet hang together. in a crowded outdoor category, copa risked looking like everyone else at the exact moment it needed to stand apart.",
    whatWeDid:
      "we built the positioning first, then a full identity system: logo, typography, colour and campaign-ready assets, plus a verbal identity so the story read clearly in every channel. we leaned into the shore-line tension in the name rather than reaching for generic outdoor cliches.",
    resultsNarrative:
      "a single, distinctive identity copa now uses consistently across every channel, and a campaign-ready asset kit that carried the brand from its German base toward a wider European audience without losing what made it copa.",
    results: [],
    serviceTags: ["brand + identity", "voice + messaging"],
    thumbnailPath: "/images/optimized/copa-hero.jpg",
    media: [
      { type: "image", src: "/images/copa-off-the-shore.jpg", alt: "copa hero" },
      { type: "image", src: "/images/copa-site-header2_zagsbx.webp", alt: "copa site" },
      {
        type: "iframe",
        src: "https://player.vimeo.com/video/398799241",
        width: "640",
        height: "480",
      },
      { type: "image", src: "/images/aboutus_qyrbat.webp", alt: "copa campaign" },
      { type: "image", src: "/images/copa-off-the-shore.jpg", alt: "copa apparel" },
      { type: "image", src: "/images/copa-off-the-shore (1).jpg", alt: "copa lifestyle" },
    ],
    order: 1,
    featured: true,
    projectType: "client",
    seo: {
      metaTitle: "copa, off the shore | bmkrs.",
      metaDescription:
        "outdoor apparel with a clear point of view. brand and identity for copa, off the shore.",
    },
  },
  {
    slug: "fdb",
    title: "floare din banat",
    client: "floare din banat",
    category: "ecommerce",
    sector: "food and drink",
    year: "2025",
    positioning: "a regional food brand rebuilt for a national digital audience.",
    tagline: "a regional food brand rebuilt for a national digital audience.",
    brief:
      "floare din banat makes traditional Romanian flowers and gifts, with a loyal regional following and a strong wholesale business. they came to us with a product people loved and a brand and storefront that did not do it justice.",
    challenge:
      "the product was good. the buying experience was not. an outdated storefront and a brand that looked homemade next to competitors meant people who would have loved the product never got far enough to try it.",
    whatWeDid:
      "we treated it as one job, not three. a refreshed identity that kept what customers already recognised, clearer product copy in a tone that matched the care in the product, and a rebuilt storefront focused on a catalogue that is easy to browse and a checkout that is easy to finish. we kept what people valued and fixed what was in their way.",
    resultsNarrative:
      "a storefront that finally looks as good as the product, a smoother path from browse to checkout, and a brand the team is proud to share.",
    results: [],
    serviceTags: ["brand + identity", "voice + messaging", "product, web + growth"],
    thumbnailPath: "/work/images/optimized/fdb-2-hero.jpg",
    media: [
      { type: "image", src: "/work/images/fdb-2.png", alt: "floare din banat packaging" },
      { type: "image", src: "/work/images/fdb-1.png", alt: "floare din banat storefront" },
      { type: "image", src: "/work/images/fdb-3.png", alt: "floare din banat campaign" },
      { type: "image", src: "/work/images/fdb-4.png", alt: "floare din banat product" },
      { type: "image", src: "/work/images/fdb-5.png", alt: "floare din banat detail" },
    ],
    order: 2,
    featured: true,
    projectType: "client",
    seo: {
      metaTitle: "floare din banat | bmkrs.",
      metaDescription:
        "a regional food brand rebuilt for a national digital audience. identity, voice and storefront.",
    },
  },
  {
    slug: "carter",
    title: "carter mcgreggor",
    client: "carter mcgreggor",
    category: "photography",
    sector: "creative services",
    year: "2024",
    positioning: "portrait and motion work, finally presented like the talent behind it.",
    tagline: "portrait and motion work, finally presented like the talent behind it.",
    brief:
      "carter mcgreggor is a photographer and motion artist building a name for portrait work and after-effects craft. he needed a public presence that matched the quality of the work, not just a folder of files.",
    challenge:
      "strong individual pieces, no consistent thread online. prospective clients could not quickly see what he does best, or why to book him over the next name on the list.",
    whatWeDid:
      "art direction and brand framing around his portrait and motion work, plus digital assets built for how people actually find photographers: a showreel, a social presence, and a portfolio that leads with the craft.",
    resultsNarrative:
      "a consistent visual identity across channels, assets he actually uses, and a clearer profile for booking conversations.",
    results: [],
    serviceTags: ["brand + identity", "photography / art direction"],
    thumbnailPath: "/images/optimized/carter-hero.jpg",
    media: [
      {
        type: "iframe",
        src: "https://player.vimeo.com/video/398804116",
        width: "640",
        height: "317",
      },
      { type: "image", src: "/images/carter-instagram.png", alt: "carter mcgreggor" },
    ],
    order: 3,
    featured: true,
    projectType: "client",
  },
  {
    slug: "wanderlust",
    title: "wanderlust",
    client: "hartmann design",
    category: "design",
    sector: "design",
    positioning: "a travel and lifestyle design language built to scale.",
    tagline: "a travel and lifestyle design language built to scale.",
    brief:
      "hartmann design needed a distinctive travel and lifestyle visual language that could stretch across campaigns without feeling generic.",
    challenge:
      "the work was strong in pieces but had no shared system. every new brief started from scratch.",
    whatWeDid:
      "visual identity exploration and campaign-ready design that gave the team a repeatable language for travel and lifestyle positioning.",
    resultsNarrative:
      "a coherent design system the studio can deploy across campaigns without losing personality, and far less time lost starting each brief from zero.",
    results: [],
    serviceTags: ["brand + identity"],
    thumbnailPath: "/images/optimized/wanderlust-hero.jpg",
    media: [
      {
        type: "iframe",
        src: "https://player.vimeo.com/video/398806774",
        width: "640",
        height: "640",
      },
      { type: "image", src: "/images/blacklogo.png", alt: "wanderlust" },
    ],
    order: 4,
    featured: false,
    projectType: "client",
  },
  {
    slug: "smoothies",
    title: "smoothies",
    category: "websites & digital",
    sector: "websites & digital",
    positioning: "a fresh first website for a brand entering a crowded shelf.",
    tagline: "a fresh first website for a brand entering a crowded shelf.",
    brief:
      "a new smoothie brand needed its first website, one that could introduce the range and make the products easy to understand.",
    challenge:
      "no digital home yet, and a crowded health-drinks category where generic wellness design simply disappears.",
    whatWeDid:
      "a modern, vibrant site that made the range legible and matched the freshness of the product.",
    resultsNarrative:
      "a launch-ready site that shows the range clearly and gives the brand a credible first impression online.",
    results: [],
    serviceTags: ["product, web + growth"],
    thumbnailPath: "/images/optimized/smoothies-hero.jpg",
    media: [{ type: "image", src: "/images/smoothies.png", alt: "smoothies" }],
    order: 5,
    featured: false,
    projectType: "client",
  },
  {
    slug: "flipster",
    title: "flipster iptv",
    client: "flipster",
    category: "branding",
    sector: "branding",
    positioning: "a premium identity in a category most brands get wrong.",
    tagline: "a premium identity in a category most brands get wrong.",
    brief:
      "flipster needed to enter a crowded IPTV market with a brand that felt premium, not grey-market.",
    challenge:
      "trust is hard in the category. the identity had to feel sharp and credible to a technical audience without looking like every other streamer.",
    whatWeDid:
      "a complete brand identity that positioned flipster as a premium IPTV service, with a distinct visual and verbal edge.",
    resultsNarrative:
      "a launch-ready identity that reads clearly in a noisy category and gives the team assets they can use across product and marketing.",
    results: [],
    serviceTags: ["brand + identity"],
    thumbnailPath: "/work/images/optimized/flipster-hero.jpg",
    media: [{ type: "image", src: "/work/images/flipster-fff.png", alt: "flipster" }],
    order: 6,
    featured: true,
    projectType: "client",
  },
  {
    slug: "podcast-studio-london",
    title: "podcast studio london",
    client: "podcast studio london",
    category: "brand + growth",
    sector: "media",
    year: "2025",
    positioning: "a london podcast studio with a brand that finally matches the rooms.",
    tagline: "a london podcast studio with a brand that finally matches the rooms.",
    brief:
      "podcast studio london runs premium recording spaces for founders, brands and broadcasters. they needed a brand and digital presence that matched the quality of the studios.",
    challenge:
      "strong physical product, weak digital first impression. prospective clients were booking on reputation and word of mouth alone.",
    whatWeDid:
      "brand positioning, visual identity, voice and a site built to convert browsing into booking conversations.",
    resultsNarrative:
      "a coherent brand across site, social and studio touchpoints, and a clearer path from discovery to enquiry.",
    results: [],
    serviceTags: ["brand + identity", "voice + messaging", "product, web + growth"],
    thumbnailPath: marketingImages.socialStrategy,
    media: [{ type: "image", src: marketingImages.socialStrategy, alt: "podcast studio london" }],
    order: 7,
    featured: true,
    projectType: "client",
    testimonial: {
      quote:
        "they gave us a brand we could actually use week to week, not a deck that sat in a folder. the site finally sounds like the studios.",
      name: "founder",
      role: "podcast studio london",
      company: "podcast studio london",
    },
  },
  {
    slug: "david-wheeler-psychology",
    title: "david wheeler psychology",
    client: "david wheeler psychology",
    category: "brand + identity",
    sector: "healthcare",
    year: "2025",
    positioning: "a clinical practice brand that earns trust before the first session.",
    tagline: "a clinical practice brand that earns trust before the first session.",
    brief:
      "david wheeler psychology is building a private practice with a clear specialism and a reputation to protect. the work needed a brand that felt credible to referrers and calm to prospective clients.",
    thinking:
      "clinical brands fail when they look like generic wellness templates. the practice needed warmth without vagueness, and authority without coldness.",
    whatWeDid:
      "positioning, identity and voice for a practice still in launch. full case study copy and imagery to follow once the practice is live.",
    serviceTags: ["brand + identity", "voice + messaging"],
    thumbnailPath: marketingImages.identityPackaging,
    media: [{ type: "image", src: marketingImages.identityPackaging, alt: "david wheeler psychology" }],
    order: 9,
    featured: false,
    projectType: "client",
  },
  {
    slug: "three18-media",
    title: "three18 media",
    client: "three18 media",
    category: "brand + growth",
    sector: "media",
    year: "2025",
    positioning: "a production company finding its voice in a crowded content market.",
    tagline: "a production company finding its voice in a crowded content market.",
    brief:
      "three18 media produces branded content for founders and growing companies. they needed a sharper story and a presence that matched the quality of the work in the reel.",
    thinking:
      "production companies often lead with gear and process. three18's edge is judgement and taste. the brand had to signal that before anyone pressed play.",
    whatWeDid:
      "brand positioning and messaging framework. visual identity and site work in progress. case study to be completed when the new site ships.",
    serviceTags: ["brand + identity", "voice + messaging", "product, web + growth"],
    thumbnailPath: marketingImages.digitalMediaDevices,
    media: [{ type: "image", src: marketingImages.digitalMediaDevices, alt: "three18 media" }],
    order: 10,
    featured: false,
    projectType: "client",
  },
  {
    slug: "freelance-near-me",
    title: "freelance near me",
    category: "product",
    sector: "marketplace",
    year: "2025",
    positioning: "a local-first marketplace we built because the brief kept appearing in client work.",
    tagline: "a local-first marketplace we built because the brief kept appearing in client work.",
    brief:
      "freelance near me connects local freelancers with nearby clients. it is a bmkrs studio product: we ship our own ideas to prove we live with the consequences of our advice.",
    whatWeDid:
      "positioning, brand, product design and build. one team from name to shipped product.",
    resultsNarrative:
      "a live product in market, built with the same rigour we bring to client launches.",
    results: [],
    serviceTags: ["brand + identity", "product, web + growth"],
    thumbnailPath: marketingImages.digitalEcosystem,
    media: [{ type: "image", src: marketingImages.digitalEcosystem, alt: "freelance near me" }],
    order: 8,
    featured: true,
    projectType: "studio",
    externalUrl: "https://freelancenearme.com",
  },
];

export const fallbackProjects: Project[] = fallbackProjectsRaw.map((project) => ({
  ...project,
  results: project.results?.length
    ? project.results
    : (placeholderResultsBySlug[project.slug] ?? []),
}));

export const fallbackHomeTestimonials: Testimonial[] = placeholderHomeTestimonials;
