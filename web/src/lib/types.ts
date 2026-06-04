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

export type Office = {
  name: string;
};

export type DepartmentEmail = {
  label: string;
  email: string;
};

export type SiteSettings = {
  siteName: string;
  tagline: string;
  description: string;
  email: string;
  generalEmail?: string;
  pressEmail?: string;
  companyName?: string;
  companyNumber?: string;
  registeredAddress?: string;
  londonAddress?: string;
  copyright: string;
  footerQuip?: string;
  offices?: Office[];
  departments?: DepartmentEmail[];
  networkEmail?: string;
  socialLinks: SocialLink[];
  navigation: NavItem[];
};

export type TeamMember = {
  name: string;
  discipline?: string;
  photoUrl: string;
  photoAlt: string;
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

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudyTestimonial = {
  quote: string;
  name?: string;
  role?: string;
  company?: string;
  attribution?: string;
};

export type ProjectSeo = {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
};

export type SanityImageRef = {
  url?: string;
  alt?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  positioning?: string;
  tagline?: string;
  excerpt?: string;
  sector?: string;
  year?: string;
  brief?: string;
  context?: string;
  challenge?: string;
  whatWeDid?: string;
  resultsNarrative?: string;
  outcome?: string;
  results?: CaseStudyMetric[];
  outcomeMetrics?: CaseStudyMetric[];
  testimonial?: CaseStudyTestimonial;
  seo?: ProjectSeo;
  heroImage?: SanityImageRef;
  gallery?: SanityImageRef[];
  /** @deprecated use resultsNarrative */
  result?: string;
  serviceTags?: string[];
  client?: string;
  /** @deprecated use whatWeDid */
  background?: string;
  /** @deprecated use challenge */
  problem?: string;
  thumbnailPath: string;
  media: MediaItem[];
  order: number;
  featured?: boolean;
};

export type JournalArticle = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  targetKeyword?: string;
  publishedAt: string;
  body: string;
  relatedLinks?: { label: string; href: string }[];
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
  name?: string;
  role?: string;
  company?: string;
  attribution?: string;
};

export type MotionTier = {
  id: string;
  tag?: string;
  name: string;
  /** Shown only after pricing CTA is activated */
  priceFrom: string;
  priceNote?: string;
  pricingCtaLabel?: string;
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

export type HomeHero = {
  eyebrow: string;
  /** e.g. "we make" */
  headlineLead: string;
  /** e.g. "brands." */
  headlineTail: string;
  sub: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  /** Optional stills for the hero collage (falls back to featured work) */
  collage?: { src: string; alt: string }[];
};

export type HomeContent = {
  hero: HomeHero;
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
