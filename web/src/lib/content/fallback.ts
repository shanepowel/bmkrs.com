import { marketingImages, marketingVideos } from "@/lib/marketing-assets";
import {
  placeholderCompany,
  placeholderHomeTestimonials,
  placeholderResultsBySlug,
} from "@/lib/content/case-study-placeholders";
import { companyFromEnv, publicCompanyNumber, publicRegisteredAddress, registeredCompany } from "@/lib/content/company-registration";
import { brandMessaging } from "@/lib/content/messaging";
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
  tagline: brandMessaging.tagline,
  description: brandMessaging.description,
  email: "hello@bmkrs.com",
  generalEmail: "hello@bmkrs.com",
  pressEmail: "press@bmkrs.com",
  companyName: registeredCompany.name,
  companyNumber:
    companyFromEnv().companyNumber ??
    publicCompanyNumber(placeholderCompany.companyNumber) ?? registeredCompany.number,
  registeredAddress:
    companyFromEnv().registeredAddress ??
    publicRegisteredAddress(placeholderCompany.registeredAddress) ?? registeredCompany.registeredAddress,
  contactPhone: companyFromEnv().contactPhone,
  londonAddress: placeholderCompany.londonAddress,
  copyright: "© 2026 LRC Labs Ltd. all rights reserved.",
  footerQuip:
    "they say no one reads the footer. you made it this far, so let's build something that lasts.",
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
    eyebrow: brandMessaging.heroEyebrow,
    headline: `${brandMessaging.heroTitleLead} ${brandMessaging.heroTitleEm}`,
    headlineLead: "we ship",
    headlineTail: "products.",
    sub: brandMessaging.heroSub,
    primaryCta: { label: brandMessaging.ctaWork, href: "/work" },
    secondaryCta: { label: brandMessaging.ctaPrimary, href: "/contact" },
    collage: [
      {
        src: "/images/work/podcast-studio-london-thumb.jpg",
        alt: "podcast studio london",
        caption:
          "podcast studio london · digital product · proof before the booking call",
      },
      {
        src: "/images/work/three18-media-thumb.jpg",
        alt: "three18 media",
        caption:
          "three18 media · digital product · shipped work, named clients, published prices",
      },
      {
        src: "/images/work/data-deep-clean-thumb.jpg",
        alt: "data deep clean",
        caption:
          "data deep clean · built in the studio · see the exposure, then keep clearing it",
      },
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
    ],
  },
  marqueeItems: [
    "strategy",
    "brand systems",
    "digital product",
    "digital experiences",
    "technology",
    "motion",
  ],
  positioning: {
    eyebrow: brandMessaging.positioningEyebrow,
    statement: brandMessaging.positioningStatement,
    lead: brandMessaging.positioningLead,
  },
  capabilitiesHead: {
    title: "from a good idea to a better way forward.",
    subtitle:
      "we bring strategy, design and technology together around the opportunity, then stay close to make sure the work succeeds in the real world.",
  },
  capabilityTiles: [
    {
      number: "01",
      title: "digital product",
      description:
        "platforms, apps and web products built to ship, measure and keep moving.",
      href: "/services#product-build",
      image: marketingImages.digitalEcosystem,
    },
    {
      number: "02",
      title: "technology + ai",
      description:
        "use emerging technology thoughtfully, solving the right problems in ways that work for people and business.",
      href: "/services#ai-implementation",
      image: marketingImages.designStudio,
    },
    {
      number: "03",
      title: "strategy + transformation",
      description:
        "find the opportunity, focus the ambition and give change a clear direction.",
      href: "/services#readiness",
      image: marketingImages.brandGuidelines,
    },
    {
      number: "04",
      title: "partnership + growth",
      description:
        "stay close to what comes next and keep building on what works.",
      href: "/services#motion",
      image: marketingImages.studioWorkspace,
    },
  ],
  stats: [
    {
      highlight: "2013",
      value: "",
      label: "shipping products and delivery teams since. the studio came later. the rigour did not.",
    },
    { highlight: "3", value: "", label: "phases every time: assess, implement, amplify" },
    { highlight: "1", value: "", label: "point of contact from first call to production" },
  ],
  whoWeWorkWith: {
    eyebrow: "who we work with",
    statement: brandMessaging.whoStatement,
    lead: brandMessaging.whoLead,
  },
  clientMarquee: ["floare din banat", "copa", "carter mcgreggor", "flipster"],
  motionTeaser: {
    eyebrow: "ongoing partnership",
    heading: "always in motion.",
    body: "a rolling partnership for brands, products and experiences that never stand still. one team helping you keep moving, month after month.",
    ctaLabel: brandMessaging.ctaMotion,
    href: "/motion",
  },
  howWeWorkIntro:
    "the right people, connected around the work and the outcome that matters.",
  pillars: [
    {
      title: "discover",
      description:
        "understand the people, context and opportunity before deciding what to make.",
      order: 1,
    },
    {
      title: "design",
      description:
        "shape the experience and approach together, bringing clarity to what happens next.",
      order: 2,
    },
    {
      title: "build",
      description:
        "bring the right technology and creativity together to make the idea real.",
      order: 3,
    },
    {
      title: "grow",
      description:
        "keep learning and improving what works, with a partner by your side.",
      order: 4,
    },
  ],
  selectedWork: {
    eyebrow: "selected work",
    title: brandMessaging.workTitle,
    subtitle: brandMessaging.workSubtitle,
  },
  closing: {
    quote: "the storefront finally looks as good as the product. we are proud to share the brand now.",
    attribution: "floare din banat",
  },
};

export const fallbackMotion: MotionContent = {
  benefits: [
    {
      title: "The right people, close to the work",
      body: "a connected team with a clear understanding of your business, your product and what you want to make happen.",
    },
    {
      title: "A steady creative rhythm",
      body: "regular improvements across product, brand and experience, with clear priorities and useful progress.",
    },
    {
      title: "Room for what's next",
      body: "the right strategic, creative and technical support as your opportunities and ambitions evolve.",
    },
    {
      title: "A partnership that builds",
      body: "context and trust grow over time, so each new piece of work builds naturally on the last.",
    },
  ],
  motionPlus: {
    eyebrow: "Motion plus",
    statement: "one connected team, with more room to make.",
    paragraphs: [
      "motion gives you a close, ongoing partner. motion plus brings more of our trusted network around the work when your ambitions call for a broader mix of skills.",
      "you still have one connected team and one point of contact, with the experience to bring in the right expertise at the right time.",
    ],
    poweredBy: "powered by amplifiedteams",
  },
  tiersHead: {
    title: "A partnership shaped around what comes next.",
    subtitle:
      "Choose the level of collaboration that fits your team and ambitions. We will shape the people, focus and rhythm together in conversation.",
  },
  tiers: [
    {
      id: "spark",
      name: "motion",
      description: "for businesses ready to keep good work moving.",
      features: [
        "product iteration and releases",
        "ai system upkeep and evaluation",
        "operating-model support",
        "a monthly readout on what moved",
      ],
      ctaLabel: "talk about motion",
    },
    {
      id: "momentum",
      tag: "most popular",
      name: "motion plus",
      description: "for teams with more opportunity to explore and build.",
      features: [
        "everything in motion",
        "deeper product discovery",
        "growth and performance loops",
        "extended specialist bench",
      ],
      ctaLabel: "talk about motion plus",
      featured: true,
    },
    {
      id: "motion-plus",
      tag: "embedded",
      name: "motion embedded",
      description: "for organisations who want experienced people working alongside their team.",
      features: [
        "everything in motion plus",
        "a named team working as part of yours",
        "product, ai and delivery on tap",
        "access to the wider bmkrs network",
      ],
      ctaLabel: "talk about embedded motion",
      plus: true,
    },
  ],
  closingCta: {
    title: "keep good work moving.",
    body: "tell us what you are building and where you want to go next. we will work out the right way to move it forward together.",
    ctaLabel: "talk through your needs",
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
    category: "digital product",
    sector: "media",
    year: "2025",
    positioning: "a west london broadcast studio with a site that proves the reel before you book.",
    tagline: "a west london broadcast studio with a site that proves the reel before you book.",
    brief:
      "podcast studio london is a working broadcast studio in canalot studios, and the team behind how to kill an hour. they needed a digital product that sold the system behind the room, not just the hire rate.",
    challenge:
      "the physical studio was strong. the old web presence did not carry the proof: brand campaigns, viewership and a clear path from curiosity to a strategy call.",
    whatWeDid:
      "positioning, voice and a full site build: proof-led homepage, services ladder, method, work shelf and booking path, shipped on vercel.",
    resultsNarrative:
      "a live site at podcaststudiolondon.com that leads with evidence, makes the pod system readable, and turns browsing into booked conversations.",
    results: [],
    serviceTags: ["product build", "voice + messaging"],
    thumbnailPath: "/images/work/podcast-studio-london-thumb.jpg",
    media: [
      {
        type: "image",
        src: "/images/work/podcast-studio-london.jpg",
        alt: "podcast studio london homepage",
      },
    ],
    order: 7,
    featured: true,
    projectType: "client",
    externalUrl: "https://www.podcaststudiolondon.com/",
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
      "positioning, identity and voice for a practice still in launch. the work is presented here while the practice prepares to go live.",
    resultsNarrative: "case study details and outcomes are still being confirmed.",
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
    category: "digital product",
    sector: "agency",
    year: "2025",
    positioning: "a windsor studio that leads with shipped work, named clients and published prices.",
    tagline: "a windsor studio that leads with shipped work, named clients and published prices.",
    brief:
      "three18 media has traded since 2012 across brand, web and marketing. they needed a site that matched that record: evidence first, prices in the open, and a clear view of when not to hire them.",
    challenge:
      "agency sites often hide behind soft claims. three18's edge is judgement and numbers with a basis. the product had to show both before a discovery call.",
    whatWeDid:
      "positioning, editorial system and a full site build: selected work with counted outcomes, published service bands, how we work, insights and contact.",
    resultsNarrative:
      "a live site at three18media.com that reads like the studio: actions, not words, with every figure shown with how it was counted.",
    results: [],
    serviceTags: ["product build", "voice + messaging"],
    thumbnailPath: "/images/work/three18-media-thumb.jpg",
    media: [
      {
        type: "image",
        src: "/images/work/three18-media.jpg",
        alt: "three18 media homepage",
      },
    ],
    order: 10,
    featured: true,
    projectType: "client",
    externalUrl: "https://www.three18media.com/",
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
    serviceTags: ["product build"],
    thumbnailPath: "/images/work/freelance-near-me-home.webp",
    media: [{ type: "image", src: "/images/work/freelance-near-me-home.webp", alt: "freelance near me homepage" }],
    order: 8,
    featured: true,
    projectType: "studio",
    externalUrl: "https://freelancenearme.com",
  },
  {
    slug: "data-deep-clean",
    title: "data deep clean",
    category: "product",
    sector: "privacy",
    year: "2025",
    positioning: "a uk-first product that finds where you are listed, then keeps removing you.",
    tagline: "a uk-first product that finds where you are listed, then keeps removing you.",
    brief:
      "data brokers quietly sell names, addresses and phone numbers. data deep clean is a studio product we built to show exposure for free, then remove and recheck on a schedule people can trust.",
    challenge:
      "privacy tools either overpromise overnight silence or bury the truth behind signup walls. the product had to be honest about what it can and cannot clear, and still be useful on day one.",
    whatWeDid:
      "product strategy, ux, brand voice and a full build: free exposure scan, waitlist, methodology, pricing and gdpr-native account flows for a closed uk beta.",
    resultsNarrative:
      "a live product at datadeepclean.com in closed beta, with founding members joining in small groups and a free scan that needs no card or id.",
    results: [],
    serviceTags: ["product build", "ai implementation"],
    thumbnailPath: "/images/work/data-deep-clean-thumb.jpg",
    media: [
      {
        type: "image",
        src: "/images/work/data-deep-clean.jpg",
        alt: "data deep clean homepage",
      },
    ],
    order: 11,
    featured: true,
    projectType: "studio",
    externalUrl: "https://datadeepclean.com/",
  },
];

export const fallbackProjects: Project[] = fallbackProjectsRaw.map((project) => ({
  ...project,
  results: project.results?.length
    ? project.results
    : (placeholderResultsBySlug[project.slug] ?? []),
}));

export const fallbackHomeTestimonials: Testimonial[] = placeholderHomeTestimonials;
