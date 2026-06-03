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
  heroTitle?: string;
  heroSubtitle?: string;
  heroCtaLabel?: string;
  heroCtaHref?: string;
  heroVideoUrl?: string;
  sections?: PageSection[];
};

export type Service = {
  slug: string;
  title: string;
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
  excerpt?: string;
  client?: string;
  background?: string;
  problem?: string;
  thumbnailPath: string;
  media: MediaItem[];
  order: number;
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
  imageClass?: string;
};

export type HomeContent = {
  bannerText: string;
  introText: string;
  motionTeaser: {
    label: string;
    heading: string;
    description: string;
    href: string;
  };
  capabilityTiles: CapabilityTile[];
  pillars: HomePillar[];
  specializations: string[];
  motionProgram: {
    meet: string;
    heading: string;
    offer: string;
    ctaLabel: string;
    ctaHref: string;
  };
};
