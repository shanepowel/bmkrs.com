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
  { label: "Home", href: "/" },
  { label: "Services", href: "/discover" },
  { label: "Work", href: "/work" },
  { label: "Motion", href: "/motion", highlight: true },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const fallbackSiteSettings: SiteSettings = {
  siteName: "BMKRS",
  tagline: "We are the Brandmakers.",
  description:
    "BMKRS is a design and growth studio. We build brand identities, websites, and eCommerce experiences, then market them to grow.",
  email: "office@bmkrs.com",
  copyright: "© Brandmakers (BMKRS)",
  socialLinks: [
    { platform: "Facebook", url: "https://facebook.com/bmkrs.global" },
    { platform: "Instagram", url: "https://instagram.com/bmkrs.global" },
    { platform: "YouTube", url: "https://youtube.com/bmkrs.global" },
  ],
  navigation: fallbackNavigation,
};

export const fallbackHome: HomeContent = {
  motionTeaser: {
    eyebrow: "Ongoing partnership",
    heading: "Motion.",
    body: "Motion is our rolling partnership for brands that never stop shipping. One dedicated team handling your design, content, and growth — month after month, no re-briefing, no agency churn.",
    ctaLabel: "Explore Motion — 3 months free",
    href: "/motion",
  },
  capabilityTiles: [
    {
      title: "Branding & Identity",
      description:
        "Strategy, naming, and identity systems that make you unmistakable.",
      href: "/discover#branding",
    },
    {
      title: "Websites & Digital",
      description: "Sites and digital platforms designed to convert, built to last.",
      href: "/discover#web",
    },
    {
      title: "eCommerce",
      description: "Storefronts engineered to turn browsers into buyers.",
      href: "/discover#ecommerce",
    },
    {
      title: "Performance Marketing",
      description: "Data-led campaigns that grow revenue, not just reach.",
      href: "/discover#performance",
    },
  ],
  howWeWorkIntro:
    "We don't hand you off to a rotating cast of freelancers. You get a dedicated team that learns your brand inside out and stays with it — so every project moves faster than the last.",
  pillars: [
    {
      title: "Strategy",
      description:
        "We start with the why — your market, your audience, your edge — before a single pixel moves.",
      order: 1,
    },
    {
      title: "Design",
      description:
        "Identity, websites, and storefronts crafted to look sharp and do a job.",
      order: 2,
    },
    {
      title: "Growth",
      description:
        "Content, analytics, and performance marketing that turn a good brand into a growing one.",
      order: 3,
    },
    {
      title: "Partnership",
      description:
        "Through Motion, we stay on as your team — shipping, testing, and improving every month.",
      order: 4,
    },
  ],
  selectedWork: {
    eyebrow: "Selected work",
    title: "The brands we build for",
    subtitle:
      "A few of the brands we've shaped across branding, eCommerce, and digital.",
  },
};

export const fallbackMotion: MotionContent = {
  benefits: [
    {
      title: "A dedicated team",
      body: "The same people every month, who know your brand as well as you do.",
    },
    {
      title: "Design on tap",
      body: "Brand, web, and content work delivered on a predictable rhythm.",
    },
    {
      title: "Growth built in",
      body: "Ongoing performance marketing and analytics, not a one-off launch.",
    },
    {
      title: "No churn, no re-briefing",
      body: "We stay with your brand, so every month compounds on the last.",
    },
  ],
  offer: {
    title: "Try Motion — 3 months free",
    body: "Start with a three-month trial. See what one dedicated team can do for your brand before you commit to anything.",
    ctaLabel: "Meet Motion",
    ctaHref: "/contact",
  },
};

export const fallbackPages: Record<string, CmsPage> = {
  home: {
    slug: "home",
    title: "BMKRS — We are the Brandmakers.",
    metaDescription:
      "BMKRS is a design and growth studio. We build brand identities, websites, and eCommerce experiences, then market them to grow.",
    heroEyebrow: "Design & Growth Studio",
    heroTitle: "Design and growth for ambitious brands.",
    heroSubtitle:
      "From identity and websites to eCommerce and performance marketing, we help brands launch sharp and grow fast.",
    heroCtaLabel: "Explore services",
    heroCtaHref: "/discover",
    heroCta2Label: "See our work",
    heroCta2Href: "/work",
    heroVideoUrl: "/images/headvid4.mp4",
  },
  discover: {
    slug: "discover",
    title: "Services",
    metaDescription:
      "Strategy, design, and growth services for ambitious brands — branding, websites, eCommerce, and performance marketing.",
    heroEyebrow: "Services",
    heroTitle: "Everything your brand needs to grow.",
    heroSubtitle:
      "Strategy, design, and growth — tailored to your brand and built to work together.",
    heroCtaLabel: "See these in action",
    heroCtaHref: "/work",
  },
  work: {
    slug: "work",
    title: "Work",
    metaDescription: "Selected branding, eCommerce, and digital projects by BMKRS.",
    heroEyebrow: "Work",
    heroTitle: "Brands we've built.",
    heroSubtitle: "Selected projects across branding, eCommerce, and digital.",
  },
  motion: {
    slug: "motion",
    title: "Motion",
    metaDescription:
      "Motion is BMKRS's rolling partnership — one dedicated team for design, content, and growth.",
    heroEyebrow: "Ongoing partnership",
    heroTitle: "Your brand, always in Motion.",
    heroSubtitle:
      "A rolling partnership for brands that never stop shipping. One dedicated team for your design, content, and growth — month after month.",
    heroCtaLabel: "Start with 3 months free",
    heroCtaHref: "/contact",
  },
  contact: {
    slug: "contact",
    title: "Contact",
    metaDescription: "Start a project with BMKRS — design and growth studio.",
    heroEyebrow: "Contact",
    heroTitle: "Start a project.",
    heroSubtitle:
      "Tell us about your brand and where you want to take it. We'll come back within one working day.",
  },
  about: {
    slug: "about",
    title: "About",
    metaDescription: "We are the Brandmakers — a design and growth studio for ambitious brands.",
    heroEyebrow: "About BMKRS",
    heroTitle: "We are the Brandmakers.",
    heroSubtitle: "A design and growth studio for brands with ambition.",
    sections: [
      {
        key: "body1",
        content:
          "We build brands worth choosing. From identity and websites to eCommerce and performance marketing, we partner with teams who want creative that performs and experiences that convert.",
      },
      {
        key: "body2",
        content:
          "We work as one dedicated team, not a revolving door. We learn your brand, stay with it, and make every project sharper than the last.",
      },
      {
        key: "manifesto",
        title: "What we believe",
        content:
          "A brand is a promise. We make sure yours is worth keeping.|Good design isn't decoration. It does a job.|Growth beats noise. We measure what matters.|One team, all in. No churn, no hand-offs, no excuses.",
      },
    ],
  },
};

export const fallbackServices: Service[] = [
  {
    slug: "branding",
    title: "Branding & Identity",
    lead: "We build brands with a point of view — and the identity to match.",
    body: "From positioning and naming to a full visual system, we give purpose-driven brands a look and voice people remember and trust.",
    imagePath: "/images/9c7ded037d751c42a0e92288c11998e8.jpg",
    bullets: [
      "Brand Strategy & Positioning",
      "Identity & Visual Systems",
      "Trends & Insights",
      "Content Strategy",
    ],
    order: 1,
  },
  {
    slug: "web",
    title: "Websites & Digital",
    lead: "Digital experiences that connect your brand with the people who matter.",
    body: "We design and build websites and platforms end to end — thoughtful UX, clean engineering, and SEO baked in from day one.",
    imagePath: "/images/7abd2549110b63f83e49877e1d59adea.jpg",
    bullets: ["UI / UX Design", "Web Development", "SEO", "Digital Strategy"],
    order: 2,
  },
  {
    slug: "ecommerce",
    title: "eCommerce",
    lead: "Storefronts that turn visitors into customers.",
    body: "We build eCommerce experiences that are easy to shop and built to convert — backed by research and a clear design direction for your market.",
    imagePath: "/images/165-1655864_e-commerce-px-shopping-cart.jpg",
    bullets: [
      "eCommerce Platforms",
      "Conversion & UX",
      "Industry Research",
      "Design Direction",
    ],
    order: 3,
  },
  {
    slug: "performance",
    title: "Performance Marketing",
    lead: "Campaigns measured in growth, not vanity metrics.",
    body: "Data-led marketing across social, search, and email — aligned to your funnel and tuned for sustainable, measurable growth.",
    imagePath: "/images/business.jpeg",
    bullets: [
      "Social Media Marketing",
      "Growth Strategy",
      "SEO",
      "Email Marketing",
    ],
    order: 4,
  },
];

export const fallbackProjects: Project[] = [
  {
    slug: "fdb",
    title: "Floare Din Banat",
    category: "eCommerce",
    tagline: "Traditional Romanian flowers and gifts, brought online.",
    excerpt: "Traditional Romanian flowers and gifts — brought online nationwide.",
    brief:
      "They needed a full eCommerce experience to reach customers nationwide while honouring a traditional flower business.",
    whatWeDid:
      "A full eCommerce experience built to make their range easy to browse, trust, and buy — designed for nationwide reach without losing the brand's roots.",
    result: "[Add your result metric — e.g. conversion uplift or revenue growth]",
    serviceTags: ["eCommerce", "Websites & Digital"],
    thumbnailPath: "/work/images/fdb-2.png",
    media: [{ type: "image", src: "/work/images/fdb-2.png" }],
    order: 1,
    featured: true,
  },
  {
    slug: "copa",
    title: "COPA — Off the Shore",
    category: "Branding",
    tagline: "Outdoor apparel with a clear point of view — Off the Shore.",
    excerpt: "Outdoor apparel brand — identity and launch from Germany to worldwide.",
    brief:
      "COPA needed a complete brand identity, website, and marketing approach to sell outdoor designs worldwide.",
    whatWeDid:
      "A complete brand identity — positioning, visual system, and campaign-ready assets — built to stand out in outdoor apparel.",
    result: "[Add launch impact or campaign outcome]",
    serviceTags: ["Branding & Identity"],
    thumbnailPath: "/images/aboutus_qyrbat.webp",
    media: [
      { type: "image", src: "/images/copa-site-header2_zagsbx.webp" },
      {
        type: "iframe",
        src: "https://player.vimeo.com/video/398799241",
        width: "640",
        height: "480",
      },
      { type: "image", src: "/images/aboutus_qyrbat.webp" },
      { type: "image", src: "/images/copa-off-the-shore.jpg" },
      { type: "image", src: "/images/copa-off-the-shore (1).jpg" },
    ],
    order: 2,
    featured: true,
  },
  {
    slug: "carter",
    title: "Carter McGreggor",
    category: "Photography",
    tagline: "Portrait and after-effects work for a photographer building his name.",
    excerpt: "Portrait and after-effects photography — personal brand presence.",
    brief:
      "Carter needed a cohesive presence that showcases his craft and drives bookings in a crowded market.",
    whatWeDid:
      "Photography-led brand work and digital presence to position his portfolio and after-effects craft clearly.",
    result: "[Add outcome — bookings, reach, or portfolio impact]",
    serviceTags: ["Branding & Identity", "Photography"],
    thumbnailPath: "/images/carter-instagram.png",
    media: [
      {
        type: "iframe",
        src: "https://player.vimeo.com/video/398804116",
        width: "640",
        height: "317",
      },
      { type: "image", src: "/images/carter-instagram.png" },
    ],
    order: 3,
    featured: true,
  },
  {
    slug: "wanderlust",
    title: "Wanderlust",
    category: "Design",
    tagline: "Travel and lifestyle visuals for Hartmann Design.",
    excerpt: "Hartmann Design — travel and lifestyle visuals.",
    brief: "Prototype and validate a distinctive travel design language.",
    whatWeDid:
      "Visual identity exploration and campaign-ready design for travel and lifestyle positioning.",
    result: "[Add outcome]",
    serviceTags: ["Branding & Identity"],
    thumbnailPath: "/images/trip-of-my-life.png",
    media: [
      {
        type: "iframe",
        src: "https://player.vimeo.com/video/398806774",
        width: "640",
        height: "640",
      },
      { type: "image", src: "/images/blacklogo.png" },
    ],
    order: 4,
    featured: false,
  },
  {
    slug: "smoothies",
    title: "Smoothies",
    category: "Websites & Digital",
    tagline: "A fresh web presence for a new smoothie brand.",
    excerpt: "Fresh, vibrant web design for a new smoothie brand.",
    brief:
      "They needed a website that attracts health-conscious customers and showcases products clearly.",
    whatWeDid:
      "Modern, vibrant web design capturing the fresh and healthy nature of their products.",
    result: "[Add outcome]",
    serviceTags: ["Websites & Digital"],
    thumbnailPath: "/images/smoothies.png",
    media: [{ type: "image", src: "/images/smoothies.png" }],
    order: 5,
    featured: false,
  },
  {
    slug: "flipster",
    title: "Flipster IPTV",
    category: "Branding",
    tagline: "Premium IPTV identity in a competitive streaming market.",
    excerpt: "Premium IPTV brand identity in a competitive market.",
    brief:
      "Flipster needed a brand that feels cutting-edge and trustworthy for tech-savvy consumers.",
    whatWeDid:
      "A complete brand identity positioning them as a premium IPTV service.",
    result: "[Add outcome]",
    serviceTags: ["Branding & Identity"],
    thumbnailPath: "/work/images/flipster-fff.png",
    media: [{ type: "image", src: "/work/images/flipster-fff.png" }],
    order: 6,
    featured: false,
  },
];
