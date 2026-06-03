export type MediaItem = {
  type: "image" | "iframe" | "html";
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  htmlContent?: string;
};

export type NavItem = {
  label: string;
  href: string;
  highlight?: boolean;
};

export type SocialLink = {
  platform: string;
  url: string;
};

export type SiteSettings = {
  siteName: string;
  tagline: string;
  description: string;
  email: string;
  copyright: string;
  socialLinks: SocialLink[];
  navigation: NavItem[];
};

export type PageSection = {
  key: string;
  title?: string;
  subtitle?: string;
  content?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type CmsPage = {
  slug: string;
  title: string;
  metaDescription?: string;
  heroEyebrow?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroCtaLabel?: string;
  heroCtaHref?: string;
  heroCta2Label?: string;
  heroCta2Href?: string;
  heroVideoUrl?: string;
  sections?: PageSection[];
};

export type Service = {
  slug: string;
  title: string;
  lead?: string;
  summary?: string;
  body?: string;
  imagePath?: string;
  bullets?: string[];
  order: number;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  tagline?: string;
  excerpt?: string;
  brief?: string;
  whatWeDid?: string;
  result?: string;
  serviceTags?: string[];
  client?: string;
  background?: string;
  problem?: string;
  thumbnailPath: string;
  media: MediaItem[];
  order: number;
  featured?: boolean;
};

export type HomePillar = {
  title: string;
  description: string;
  order: number;
};

export type CapabilityTile = {
  number?: string;
  title: string;
  description: string;
  href: string;
};

export type HomeStat = {
  value: string;
  highlight?: string;
  label: string;
};

export type Testimonial = {
  quote: string;
  attribution: string;
};

export type MotionTier = {
  id: string;
  tag?: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  featured?: boolean;
  plus?: boolean;
};

export type MotionBenefit = {
  title: string;
  body: string;
};

export type HomeContent = {
  heroLines: string[];
  heroSub: string;
  marqueeItems: string[];
  positioning: {
    eyebrow: string;
    statement: string;
    lead: string;
  };
  capabilitiesHead: {
    title: string;
    subtitle: string;
  };
  capabilityTiles: CapabilityTile[];
  stats: HomeStat[];
  statsDisclaimer?: string;
  whoWeWorkWith: {
    eyebrow: string;
    statement: string;
    lead: string;
  };
  clientMarquee: string[];
  motionTeaser: {
    eyebrow: string;
    heading: string;
    body: string;
    ctaLabel: string;
    href: string;
  };
  howWeWorkIntro: string;
  pillars: HomePillar[];
  testimonial?: Testimonial;
  selectedWork: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
};

export type MotionContent = {
  benefits: MotionBenefit[];
  motionPlus: {
    eyebrow: string;
    statement: string;
    paragraphs: string[];
    poweredBy?: string;
  };
  tiersHead: {
    title: string;
    subtitle: string;
  };
  tiers: MotionTier[];
  closingCta: {
    title: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
};
