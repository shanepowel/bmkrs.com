import type {
  CmsPage,
  HomeContent,
  MotionContent,
  NavItem,
  Project,
  Service,
  SiteSettings,
} from "@/lib/types";

export const fallbackNavigation: NavItem[] = [
  { label: "home", href: "/" },
  { label: "services", href: "/services" },
  { label: "work", href: "/work" },
  { label: "journal", href: "/journal" },
  { label: "motion", href: "/motion", highlight: true },
  { label: "about", href: "/about" },
  { label: "contact", href: "/contact" },
];

export const fallbackSiteSettings: SiteSettings = {
  siteName: "bmkrs.",
  tagline: "we are b makers.",
  description:
    "bmkrs. is a brand company. we shape identity, voice, messaging, pr, and the product and growth to back it up.",
  email: "hello@bmkrs.com",
  generalEmail: "hello@bmkrs.com",
  pressEmail: "press@bmkrs.com",
  companyName: "b makers ltd",
  companyNumber: "",
  registeredAddress: "registered in england and wales. full address in site settings.",
  copyright: "© 2026 b makers (bmkrs). all rights reserved.",
  footerQuip:
    "they say no one reads the footer. you made it this far, so let's make something.",
  offices: [{ name: "london" }, { name: "worldwide" }],
  departments: [
    { label: "general", email: "hello@bmkrs.com" },
    { label: "press", email: "press@bmkrs.com" },
  ],
  networkEmail: "network@bmkrs.com",
  socialLinks: [
    { platform: "instagram", url: "https://instagram.com/bmkrs.global" },
    { platform: "linkedin", url: "https://www.linkedin.com/company/bmkrs" },
  ],
  navigation: fallbackNavigation,
};

export const fallbackHome: HomeContent = {
  hero: {
    eyebrow: "a brand company",
    headlineLead: "we make",
    headlineTail: "brands.",
    sub: "we don't just help you build your product. we create its brand, give it a voice, get it heard, and grow it. everything from one team.",
    primaryCta: { label: "see our work", href: "/work" },
    secondaryCta: { label: "start a project", href: "/contact" },
    collage: [
      { src: "/work/images/optimized/fdb-2-hero.jpg", alt: "floare din banat" },
      { src: "/images/optimized/copa-hero.jpg", alt: "copa, off the shore" },
      { src: "/images/optimized/smoothies-hero.jpg", alt: "smoothies" },
      { src: "/images/optimized/copa-campaign.jpg", alt: "copa campaign" },
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
    statement:
      "we don't just help you build apps. we build your product's identity, voice + messaging.",
    lead: "anyone can ship a product. we make people care about it, with a brand, a voice, and a story that earns attention and keeps it.",
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
        "strategy, positioning, naming, and the visual world that makes you unmistakable.",
      href: "/services#branding",
    },
    {
      number: "02",
      title: "Voice + messaging",
      description:
        "tone of voice, narrative, and messaging that makes people understand and care.",
      href: "/services#voice",
    },
    {
      number: "03",
      title: "PR + communications",
      description:
        "launches, press, and thought leadership that get your story heard.",
      href: "/services#pr",
    },
    {
      number: "04",
      title: "Product, web + growth",
      description:
        "websites, apps, and campaigns that turn attention into revenue.",
      href: "/services#product",
    },
  ],
  stats: [
    { highlight: "2013", value: "", label: "building brands with delivery rigour behind them" },
    { highlight: "4", value: "", label: "core disciplines on one coordinated team" },
    { highlight: "1", value: "", label: "point of contact from brief to ship" },
  ],
  whoWeWorkWith: {
    eyebrow: "who we work with",
    statement:
      "brands with big plans, bold visions, and the nerve to do something different.",
    lead: "new or established, niche or mainstream. we work with brands from launch to scale. if you're building something worth talking about, we make sure people talk about it.",
  },
  clientMarquee: [
    "floare din banat",
    "copa",
    "carter mcgreggor",
    "wanderlust",
    "flipster",
  ],
  motionTeaser: {
    eyebrow: "Ongoing partnership",
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

export const fallbackPages: Record<string, CmsPage> = {
  home: {
    slug: "home",
    title: "bmkrs. we are b makers.",
    metaDescription: fallbackSiteSettings.description,
    heroEyebrow: "a brand company",
    heroTitle: "we make brands.",
    heroSubtitle: fallbackHome.hero.sub,
    heroCtaLabel: "see our work",
    heroCtaHref: "/work",
    heroCta2Label: "start a project",
    heroCta2Href: "/contact",
  },
  services: {
    slug: "services",
    title: "services",
    metaDescription:
      "brand, voice, pr, and product from one team. tailored to you and built to work together.",
    heroEyebrow: "Services",
    heroTitle: "everything your brand needs to grow.",
    heroSubtitle:
      "brand, voice, pr, and the product to back it up. tailored to you and built to work together as one system.",
    heroCtaLabel: "see these in action",
    heroCtaHref: "/work",
  },
  work: {
    slug: "work",
    title: "work",
    metaDescription: "selected branding, ecommerce, and digital projects by bmkrs.",
    heroEyebrow: "Work",
    heroTitle: "we build brands.",
    heroSubtitle: "selected projects across branding, ecommerce, and digital.",
  },
  motion: {
    slug: "motion",
    title: "motion",
    metaDescription:
      "motion is bmkrs.'s rolling partnership. motion plus adds a curated freelance and studio network on demand.",
    heroEyebrow: "Ongoing partnership",
    heroTitle: "Always in motion.",
    heroSubtitle:
      "a rolling partnership for brands that never stop talking. one team keeping your brand, voice, content, and pr moving, month after month. no re-briefing, no agency churn.",
    heroCtaLabel: "book a call",
    heroCtaHref: "/contact",
  },
  contact: {
    slug: "contact",
    title: "contact",
    metaDescription: "start a project with bmkrs.",
    heroEyebrow: "Contact",
    heroTitle: "Start a project.",
    heroSubtitle:
      "tell us about your brand and where you want to take it. we'll come back within one working day.",
  },
  about: {
    slug: "about",
    title: "about",
    metaDescription: "we are b makers. a brand company for people with big plans.",
    heroEyebrow: "About bmkrs",
    heroTitle: "We are b makers.",
    heroSubtitle:
      "a brand company for people with big plans and the nerve to back them. building brands since 2013.",
    sections: [
      { key: "since", content: "2013" },
      { key: "where", content: "london + worldwide" },
      { key: "what", content: "we are the brandmakers." },
      {
        key: "intro",
        content:
          "We started in 2013, not as a design studio, but as a team of builders.",
      },
      {
        key: "body2",
        content:
          "we spent years inside big, complicated organisations, building the teams and the delivery that made ambitious things actually happen. public sector, regulated industries, the kind of work with real stakes. we got good at it. genuinely good.",
      },
      {
        key: "body3",
        content:
          "but we kept seeing the same thing. brilliant products, built by brilliant people, that nobody outside the building had ever heard of. and every time, the better-told brand won. not the better product. the better-told one.",
      },
      {
        key: "body4",
        content:
          "so we started building the other half. the identity, the voice, the story, the noise that makes people actually care. we kept the delivery rigour from the old days and pointed it at brand. more than a decade on, that is the whole job.",
      },
      {
        key: "closing",
        content: "we are b makers. it's on the door for a reason.",
      },
      {
        key: "whoWeAre1",
        content:
          "we're a small, senior team, and the people you meet are the people who do the work. no account managers passing your brand down a chain until it reaches whoever is free on friday.",
      },
      {
        key: "whoWeAre2",
        content:
          "we're curious, a little obsessive about craft, and honest to a fault. we'll tell you when an idea isn't working, even when it's the one you walked in loving. that's what good partners are for. we like brands with a point of view, and people who want to build something rather than tick a box.",
      },
      {
        key: "whatWeLove1",
        content:
          "the blank page. the brief nobody else wants. the moment a muddled idea finally sounds like itself out loud. seeing a brand we shaped turn up in the wild and hold its own.",
      },
      {
        key: "whatWeLove2",
        content:
          "we got into this because we genuinely like the work. it's the least robotic reason we can think of, and we think it shows in what we make.",
      },
      {
        key: "beliefsIntro",
        content: "A handful of things we believe, that show up in everything we make.",
      },
      {
        key: "longGameLead",
        content: "We're not built for the one-off. We're built to stick around.",
      },
      {
        key: "longGame1",
        content:
          "the work we're proudest of came from clients we've known for years. the kind of trust where we can move fast, skip the posturing, and say the hard thing because we've earned the right to.",
      },
      {
        key: "longGame2",
        content:
          "we keep the same team on your brand. we learn it, look after it, and treat it like it's ours. most of our new work comes from people we've worked with before, or people they pointed our way. that's the only scoreboard we really watch.",
      },
      { key: "creed1", content: "we'd rather be your |team| than your agency." },
      {
        key: "creed2",
        content: "the better-told brand |wins.| we make sure it's yours.",
      },
      { key: "creed3", content: "no churn. no hand-offs. |no strangers| on your account." },
      { key: "creed4", content: "we say the |hard thing.| that's the job." },
      { key: "creed5", content: "we're in it for the |long game,| not the launch." },
    ],
  },
};

export const fallbackServices: Service[] = [
  {
    slug: "branding",
    title: "Brand + identity",
    lead: "we build brands with a point of view, and the identity to match.",
    body: "from positioning and naming to a full visual world, we give purpose-driven brands a look people remember and trust. we don't force a house style. great design comes from understanding your brand, not repeating ourselves.",
    imagePath: "/images/optimized/branding-dis.jpg",
    bullets: [
      "brand strategy + positioning",
      "naming",
      "identity + visual systems",
      "trends + insights",
      "brand guidelines",
    ],
    order: 1,
  },
  {
    slug: "voice",
    title: "voice + messaging",
    lead: "a product is only as strong as the way it talks about itself.",
    body: "we define how your brand sounds and what it says, from tone of voice to the messaging that makes complex products feel obvious. one clear story, told consistently everywhere.",
    imagePath: "/images/optimized/intelligent-brands.jpg",
    bullets: [
      "tone of voice",
      "messaging frameworks",
      "brand + product narrative",
      "launch + campaign copy",
      "website + content copy",
    ],
    order: 2,
  },
  {
    slug: "pr",
    title: "pr + communications",
    lead: "the best product in the world is worth nothing if no one hears about it.",
    body: "we get your story in front of the right people. we spend more time finding the right journalist and the right angle than blasting out press releases, and it pays off.",
    imagePath: "/images/optimized/marketing-dis.jpg",
    bullets: [
      "pr + media strategy",
      "press + launch campaigns",
      "thought leadership",
      "founder + exec profile",
      "social + community",
    ],
    order: 3,
  },
  {
    slug: "product",
    title: "product, web + growth",
    lead: "when the brand is right, we build the product to carry it.",
    body: "websites, apps, and commerce designed around your identity, plus the data-led marketing that turns attention into revenue. we set a primary objective for every campaign and measure whether we hit it.",
    imagePath: "/images/optimized/mobile-app.jpg",
    bullets: [
      "websites + digital platforms",
      "apps + ecommerce",
      "performance marketing",
      "seo + email",
      "analytics + reporting",
    ],
    order: 4,
  },
];

export const fallbackProjects: Project[] = [
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
    thumbnailPath: "/images/trip-of-my-life.png",
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
    featured: false,
  },
];
