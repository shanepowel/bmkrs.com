import type {
  CmsPage,
  HomeContent,
  HomePillar,
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
    "BMKRS is a digital design agency providing branding, web, eCommerce, and performance marketing for ambitious brands.",
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
  bannerText: "#stayhome",
  introText:
    "Deep-rooted in South Germany, we are a media agency providing our customers and their brands with high-class concept, design, analysis, and marketing strategies — helping them rank their business up.",
  motionTeaser: {
    label: "Meet",
    heading: "Motion.",
    description: "Our capabilities — 3 months for free.",
    href: "/motion",
  },
  capabilityTiles: [
    {
      title: "Branding & Identity",
      description: "Read more about Branding & Identity",
      href: "/discover",
      imageClass: "bg-[url('/images/aboutus_qyrbat.webp')]",
    },
    {
      title: "eCommerce Experience",
      description: "Read more about eCommerce Experience",
      href: "/discover",
      imageClass: "bg-[url('/images/smoothies.png')]",
    },
    {
      title: "Websites & Digital Platforms",
      description: "Read more about Websites & Design",
      href: "/discover",
      imageClass: "bg-[url('/images/trip-of-my-life.png')]",
    },
    {
      title: "Performance Marketing",
      description: "Read more about Performance Marketing",
      href: "/discover",
      imageClass: "bg-[url('/images/carter-instagram.png')]",
    },
  ],
  pillars: [
    {
      title: "Innovate",
      description:
        "Sometimes, the future is hard to predict. We help businesses succeed in a constantly-changing world by imagining new scenarios, exploring new ideas, and testing new solutions — all without disrupting your day-to-day.",
      order: 1,
    },
    {
      title: "Design",
      description:
        "Whether you're launching a new product or need help with a specific challenge, we'll build a team around your needs, helping you deliver more value, faster.",
      order: 2,
    },
    {
      title: "Grow",
      description:
        "Do you need to grow your audience? Could your data be in better shape? With expertise across content, analytics and performance, we can help.",
      order: 3,
    },
    {
      title: "Learn",
      description:
        "From one-off workshops through to long-term training programmes, we help you evolve your digital capability for what's next.",
      order: 4,
    },
  ],
  specializations: [
    "Branding & Identity",
    "Social Media Platforms",
    "Websites & Digital Platforms",
    "Market Analytics",
  ],
  motionProgram: {
    meet: "Meet",
    heading: "Motion.",
    offer: "TRY OUR MOTION PROGRAM — 3 MONTHS FREE",
    ctaLabel: "Meet Motion",
    ctaHref: "/motion",
  },
};

export const fallbackPages: Record<string, CmsPage> = {
  home: {
    slug: "home",
    title: "BMKRS | We are the Brandmakers",
    metaDescription: "Media Agency — Rank your business up.",
    heroTitle: "Media Agency —\nRank your business up.",
    heroSubtitle: "Think big — of your Business.",
    heroCtaLabel: "Discover",
    heroCtaHref: "/discover",
    heroVideoUrl: "/images/headvid4.mp4",
  },
  discover: {
    slug: "discover",
    title: "Discover | BMKRS",
    metaDescription: "Discover our capabilities — your brand's growth is in our hands.",
    heroTitle: "Discover our capabilities —\nYour brand's growth is in our hands.",
    heroCtaLabel: "See projects",
    heroCtaHref: "/work",
  },
  work: {
    slug: "work",
    title: "Work | BMKRS",
    metaDescription: "Intelligent brands choose us.",
    heroTitle: "Intelligent brands\nchoose us.",
    heroSubtitle:
      "Our work, our capabilities, our desire to do the best for your business.",
  },
  motion: {
    slug: "motion",
    title: "Motion | BMKRS",
    metaDescription: "Try our Motion program — intelligent brands choose us.",
    heroTitle: "Motion.",
    heroSubtitle: "Try our IN MOTION program — 3 months for free.",
    sections: [
      {
        key: "offer",
        title: "Startup pitch support",
        content:
          "We help intelligent brands articulate their story, sharpen their offer, and move faster with creative that converts.",
      },
    ],
  },
  contact: {
    slug: "contact",
    title: "Contact | BMKRS",
    metaDescription: "Get in touch with us — you are one email away.",
    heroTitle: "Get in touch with us —\nyou are one email away.",
    heroCtaLabel: "Start a project",
    heroCtaHref: "mailto:office@bmkrs.com",
  },
  about: {
    slug: "about",
    title: "About | BMKRS",
    metaDescription: "We are the Brandmakers — strategy, design, and growth.",
    heroTitle: "We are the\nBrandmakers.",
    heroSubtitle:
      "A media agency rooted in South Germany, building brands that rank up.",
    sections: [
      {
        key: "story",
        content:
          "We fuel the growth of purpose-driven brands through strategy activation, design empowerment, and market adoption.",
      },
    ],
  },
};

export const fallbackServices: Service[] = [
  {
    slug: "branding",
    title: "Branding & Identity",
    summary:
      "We fuel the growth of purpose-driven brands through strategy activation, design empowerment, and market adoption.",
    body: "From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",
    imagePath: "/images/9c7ded037d751c42a0e92288c11998e8.jpg",
    bullets: [
      "Brand Strategy & Experience",
      "Trends & Insights",
      "Identity Design",
      "Content Strategy",
    ],
    order: 1,
  },
  {
    slug: "websites",
    title: "Websites & Design",
    summary:
      "We create digital experiences that connect brands with their audiences through thoughtful design and technology.",
    body: "UI/UX, development, SEO, and digital strategy — end to end.",
    imagePath: "/images/7abd2549110b63f83e49877e1d59adea.jpg",
    bullets: ["UI/UX Design", "Web Development", "SEO", "Digital Strategy"],
    order: 2,
  },
  {
    slug: "ecommerce",
    title: "eCommerce Experience",
    summary:
      "We build eCommerce platforms that convert visitors into customers with seamless shopping experiences.",
    body: "Platforms, research, and design direction tailored to your market.",
    imagePath: "/images/165-1655864_e-commerce-px-shopping-cart.jpg",
    bullets: [
      "Digital Strategy",
      "eCommerce Platforms",
      "Industry Research",
      "Design Direction",
    ],
    order: 3,
  },
  {
    slug: "performance",
    title: "Performance Marketing",
    summary:
      "Data-driven campaigns that deliver measurable results and sustainable growth for your brand.",
    body: "Social, growth, SEO, and email — aligned to your funnel.",
    imagePath: "/images/business.jpeg",
    bullets: [
      "Social Media Marketing",
      "Growth Strategy",
      "SEO",
      "E-mail Marketing",
    ],
    order: 4,
  },
];

export const fallbackProjects: Project[] = [
  {
    slug: "fdb",
    title: "Floare Din Banat",
    category: "E-COMMERCE",
    excerpt: "Traditional Romanian flowers and gifts — brought online nationwide.",
    client:
      "Floare Din Banat is an e-commerce platform selling traditional Romanian flowers and gifts.",
    background:
      "They needed a complete e-commerce solution to bring their traditional flower business online.",
    problem:
      "Create an intuitive shopping experience that honors tradition while providing modern e-commerce functionality.",
    thumbnailPath: "/work/images/fdb-2.png",
    media: [{ type: "image", src: "/work/images/fdb-2.png" }],
    order: 1,
  },
  {
    slug: "copa",
    title: "COPA — Off the Shore",
    category: "BRANDING",
    excerpt: "Outdoor apparel brand — global reach from Germany.",
    client:
      'COPA is a brand new clothing store selling branded outdoor design clothes under the slogan "Off the shore."',
    background:
      "COPA needed branding, website, and a marketing campaign to sell designs worldwide.",
    problem:
      "Their first campaign missed the right niche and the website was not functioning properly.",
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
  },
  {
    slug: "carter",
    title: "Carter McGreggor",
    category: "PHOTOGRAPHY",
    excerpt: "Portrait and after-effects photography — New Hampshire, UK.",
    client:
      "Carter McGreggor is a professional photographer focused on portraits and after-effects designs.",
    background:
      "A personal brand presence that showcases craft and drives bookings.",
    problem:
      "Stand out in a crowded photography market with a cohesive visual identity.",
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
  },
  {
    slug: "wanderlust",
    title: "Wanderlust",
    category: "DESIGN",
    excerpt: "Hartmann Design — travel and lifestyle visuals.",
    client: "Hartmann Design — professional graphic designer based in South Germany.",
    background:
      "Powerful tools and eyecatching elements tailored to customer needs.",
    problem: "Prototype and validate a distinctive travel design language.",
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
  },
  {
    slug: "smoothies",
    title: "Smoothies",
    category: "WEBDESIGN",
    excerpt: "Fresh, vibrant web design for a new smoothie brand.",
    client: "Smoothies is a brand new smoothie store establishing their online presence.",
    background:
      "Modern, vibrant web design capturing the fresh and healthy nature of their products.",
    problem:
      "Attract health-conscious customers and showcase products in an appealing way.",
    thumbnailPath: "/images/smoothies.png",
    media: [{ type: "image", src: "/images/smoothies.png" }],
    order: 5,
  },
  {
    slug: "flipster",
    title: "Flipster IPTV",
    category: "BRANDING",
    excerpt: "Premium IPTV brand identity in a competitive market.",
    client: "Flipster IPTV is a modern streaming television service provider.",
    background:
      "A complete brand identity positioning them as a premium IPTV service.",
    problem:
      "Feel cutting-edge and trustworthy — accessible to tech-savvy consumers.",
    thumbnailPath: "/work/images/flipster-fff.png",
    media: [{ type: "image", src: "/work/images/flipster-fff.png" }],
    order: 6,
  },
];

export const fallbackPillars: HomePillar[] = fallbackHome.pillars;
