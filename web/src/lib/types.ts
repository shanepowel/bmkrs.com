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
  title: string;
  description: string;
  href: string;
};

export type MotionBenefit = {
  title: string;
  body: string;
};

export type HomeContent = {
  motionTeaser: {
    eyebrow: string;
    heading: string;
    body: string;
    ctaLabel: string;
    href: string;
  };
  capabilityTiles: CapabilityTile[];
  howWeWorkIntro: string;
  pillars: HomePillar[];
  selectedWork: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
};

export type MotionContent = {
  benefits: MotionBenefit[];
  offer: {
    title: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
};
