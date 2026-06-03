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
  { label: "motion", href: "/motion", highlight: true },
  { label: "about", href: "/about" },
  { label: "contact", href: "/contact" },
];

export const fallbackSiteSettings: SiteSettings = {
  siteName: "bmkrs.",
  tagline: "we are the brandmakers.",
  description:
    "bmkrs. is a brand company. we shape identity, voice, messaging, pr, and the product and growth to back it up.",
  email: "office@bmkrs.com",
  copyright: "© 2026 brandmakers (bmkrs). all rights reserved.",
  footerQuip:
    "they say no one reads the footer. you made it this far, so let's make something.",
  offices: [{ name: "london" }, { name: "worldwide" }],
  departments: [
    { label: "new business", email: "hello@bmkrs.com" },
    { label: "pr & talks", email: "press@bmkrs.com" },
    { label: "work inquiries", email: "work@bmkrs.com" },
    { label: "say hi", email: "office@bmkrs.com" },
  ],
  networkEmail: "network@bmkrs.com",
  socialLinks: [
    { platform: "instagram", url: "https://instagram.com/bmkrs.global" },
    { platform: "linkedin", url: "https://www.linkedin.com/company/bmkrs" },
  ],
  navigation: fallbackNavigation,
};

export const fallbackHome: HomeContent = {
  heroLines: ["we make brands", "that move."],
  heroSub:
    "we don't just help you build your product. we create its brand, give it a voice, get it heard, and grow it. everything from one team.",
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
    title: "brand-led. growth-built.",
    subtitle:
      "four equally strong domains, one team. the best brands are built across all of them, not bolted together by five different agencies.",
  },
  capabilityTiles: [
    {
      number: "01",
      title: "brand + identity",
      description:
        "strategy, positioning, naming, and the visual world that makes you unmistakable.",
      href: "/services#branding",
    },
    {
      number: "02",
      title: "voice + messaging",
      description:
        "tone of voice, narrative, and messaging that makes people understand and care.",
      href: "/services#voice",
    },
    {
      number: "03",
      title: "pr + communications",
      description:
        "launches, press, and thought leadership that get your story heard.",
      href: "/services#pr",
    },
    {
      number: "04",
      title: "product, web + growth",
      description:
        "websites, apps, and campaigns that turn attention into revenue.",
      href: "/services#product",
    },
  ],
  stats: [
    { highlight: "40", value: "+", label: "brands shaped across sectors" },
    { highlight: "2.4", value: "x", label: "average revenue lift in 12 months" },
    { value: "98", highlight: "%", label: "of clients move onto motion" },
    { highlight: "100", value: "+", label: "specialists in our extended network" },
  ],
  statsDisclaimer: "* replace with verified figures before launch.",
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
    eyebrow: "ongoing partnership",
    heading: "always in motion.",
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
  testimonial: {
    quote: "they didn't just redesign us. they rebuilt how the business grows.",
    attribution: "[client name], [role, company]",
  },
  selectedWork: {
    eyebrow: "selected work",
    title: "the brands we build for",
    subtitle: "selected projects across branding, ecommerce, and digital.",
  },
};

export const fallbackMotion: MotionContent = {
  benefits: [
    {
      title: "a dedicated team",
      body: "the same people every month, who know your brand as well as you do.",
    },
    {
      title: "a voice that stays true",
      body: "one team guarding your tone, messaging, and story across everything you ship.",
    },
    {
      title: "always-on pr + content",
      body: "a steady drumbeat of press, content, and campaigns that keep you visible.",
    },
    {
      title: "no churn, no re-briefing",
      body: "we stay with your brand, so every month compounds on the last.",
    },
  ],
  motionPlus: {
    eyebrow: "motion plus",
    statement: "from in-house to full-house.",
    paragraphs: [
      "motion gives you one dedicated team. motion plus opens our extended network: a curated bench of specialist freelancers and studios, on call for whatever your brief needs. a new market, a niche skill, a sudden surge of work.",
      "you still get one point of contact. you just get an almost unlimited team behind them. the ideal team for your brand probably doesn't all sit at one agency. with motion plus, it doesn't have to.",
    ],
    poweredBy: "powered by amplifiedteams",
  },
  tiersHead: {
    title: "pick your pace.",
    subtitle: "three rolling plans, scaled to how loud you want to be.",
  },
  tiers: [
    {
      id: "spark",
      name: "spark",
      price: "£[2.5k]",
      priceNote: "/mo",
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
      price: "£[5k]",
      priceNote: "/mo",
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
      price: "£[from 9k]",
      priceNote: "/mo",
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
    title: "bmkrs. we are the brandmakers.",
    metaDescription: fallbackSiteSettings.description,
    heroEyebrow: "a brand company",
    heroTitle: "we make brands that move.",
    heroSubtitle: fallbackHome.heroSub,
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
    heroEyebrow: "services",
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
    heroEyebrow: "work",
    heroTitle: "brands we've built.",
    heroSubtitle: "selected projects across branding, ecommerce, and digital.",
  },
  motion: {
    slug: "motion",
    title: "motion",
    metaDescription:
      "motion is bmkrs.'s rolling partnership. motion plus adds a curated freelance and studio network on demand.",
    heroEyebrow: "ongoing partnership",
    heroTitle: "always in motion.",
    heroSubtitle:
      "a rolling partnership for brands that never stop talking. one team keeping your brand, voice, content, and pr moving, month after month. no re-briefing, no agency churn.",
    heroCtaLabel: "book a call",
    heroCtaHref: "/contact",
  },
  contact: {
    slug: "contact",
    title: "contact",
    metaDescription: "start a project with bmkrs.",
    heroEyebrow: "contact",
    heroTitle: "start a project.",
    heroSubtitle:
      "tell us about your brand and where you want to take it. we'll come back within one working day.",
  },
  about: {
    slug: "about",
    title: "about",
    metaDescription: "we are the brandmakers. a brand company for people with big plans.",
    heroEyebrow: "about bmkrs",
    heroTitle: "we are the brandmakers.",
    heroSubtitle:
      "a brand company for people with big plans and the nerve to back them. building brands since 2013.",
    sections: [
      { key: "since", content: "2013" },
      { key: "where", content: "london + worldwide" },
      { key: "what", content: "a brand company" },
      {
        key: "intro",
        content:
          "we started in 2013, not as a design studio, but as a team of builders.",
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
        content: "we are the brandmakers. it's on the door for a reason.",
      },
    ],
  },
};

export const fallbackServices: Service[] = [
  {
    slug: "branding",
    title: "brand + identity",
    lead: "we build brands with a point of view, and the identity to match.",
    body: "from positioning and naming to a full visual world, we give purpose-driven brands a look people remember and trust. we don't force a house style. great design comes from understanding your brand, not repeating ourselves.",
    imagePath: "/images/9c7ded037d751c42a0e92288c11998e8.jpg",
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
    imagePath: "/images/7abd2549110b63f83e49877e1d59adea.jpg",
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
    imagePath: "/images/business.jpeg",
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
    imagePath: "/images/165-1655864_e-commerce-px-shopping-cart.jpg",
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
    slug: "fdb",
    title: "floare din banat",
    category: "ecommerce",
    tagline:
      "a regional food brand reimagined for a national digital audience.",
    excerpt: "traditional romanian flowers and gifts, brought online nationwide.",
    brief:
      "they had a loved product and a tired storefront. we rebuilt the brand and the buying experience from the ground up.",
    whatWeDid:
      "a full identity refresh paired with a rebuilt commerce experience. new visual system, restructured catalogue, and a checkout designed to remove friction.",
    result: "online revenue and conversion uplift in year one (add verified metrics).",
    serviceTags: ["brand + identity", "product, web + growth"],
    thumbnailPath: "/work/images/fdb-2.png",
    media: [
      { type: "image", src: "/work/images/fdb-2.png", alt: "floare din banat" },
      { type: "image", src: "/work/images/fdb-1.png", alt: "floare din banat storefront" },
    ],
    order: 1,
    featured: true,
  },
  {
    slug: "copa",
    title: "copa, off the shore",
    category: "branding",
    tagline: "outdoor apparel with a clear point of view.",
    excerpt: "outdoor apparel brand from germany to worldwide.",
    brief:
      "copa needed a complete brand identity, website, and marketing approach to sell outdoor designs worldwide.",
    whatWeDid:
      "a complete brand identity, positioning, visual system, and campaign-ready assets built to stand out in outdoor apparel.",
    result: "launch impact and international brand recognition (add verified metrics).",
    serviceTags: ["brand + identity", "voice + messaging"],
    thumbnailPath: "/images/copa-site-header2_zagsbx.webp",
    media: [
      { type: "image", src: "/images/copa-site-header2_zagsbx.webp", alt: "copa" },
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
    order: 2,
    featured: true,
  },
  {
    slug: "carter",
    title: "carter mcgreggor",
    category: "photography",
    tagline: "portrait and after-effects work for a photographer building his name.",
    excerpt: "photography-led brand presence and portfolio.",
    brief:
      "carter needed a cohesive presence that showcases his craft and drives bookings in a crowded market.",
    whatWeDid:
      "photography-led brand work and digital presence to position his portfolio and after-effects craft clearly.",
    result: "portfolio reach and booking enquiries (add verified metrics).",
    serviceTags: ["brand + identity", "product, web + growth"],
    thumbnailPath: "/images/carter-instagram.png",
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
    category: "design",
    tagline: "travel and lifestyle visuals for hartmann design.",
    excerpt: "hartmann design travel and lifestyle visuals.",
    brief: "prototype and validate a distinctive travel design language.",
    whatWeDid:
      "visual identity exploration and campaign-ready design for travel and lifestyle positioning.",
    result: "campaign-ready design system (add verified metrics).",
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
    tagline: "a fresh web presence for a new smoothie brand.",
    excerpt: "fresh, vibrant web design for a new smoothie brand.",
    brief:
      "they needed a website that attracts health-conscious customers and showcases products clearly.",
    whatWeDid:
      "modern, vibrant web design capturing the fresh and healthy nature of their products.",
    result: "launch-ready web presence (add verified metrics).",
    serviceTags: ["product, web + growth"],
    thumbnailPath: "/images/smoothies.png",
    media: [{ type: "image", src: "/images/smoothies.png", alt: "smoothies" }],
    order: 5,
    featured: false,
  },
  {
    slug: "flipster",
    title: "flipster iptv",
    category: "branding",
    tagline: "premium iptv identity in a competitive streaming market.",
    excerpt: "premium iptv brand identity.",
    brief:
      "flipster needed a brand that feels cutting-edge and trustworthy for tech-savvy consumers.",
    whatWeDid:
      "a complete brand identity positioning them as a premium iptv service.",
    result: "brand launch in competitive market (add verified metrics).",
    serviceTags: ["brand + identity"],
    thumbnailPath: "/work/images/flipster-fff.png",
    media: [{ type: "image", src: "/work/images/flipster-fff.png", alt: "flipster" }],
    order: 6,
    featured: false,
  },
];
