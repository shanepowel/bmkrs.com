/** Static marketing imagery (committed under /public/images/marketing). */
export const marketingImages = {
  heroSculpture: "/images/marketing/hero-sculpture.png",
  teamCollaboration: "/images/marketing/team-collaboration.png",
  digitalMediaDevices: "/images/marketing/digital-media-devices.png",
  identityPackaging: "/images/marketing/identity-packaging.png",
  studioBrand: "/images/marketing/studio-brand.png",
  brandEcosystem: "/images/marketing/brand-ecosystem.png",
  digitalMedia: "/images/marketing/digital-media.png",
  socialStrategy: "/images/marketing/social-strategy.png",
  brandArchitecture: "/images/marketing/brand-architecture.png",
  creativeToolkit: "/images/marketing/creative-toolkit.png",
  podcastStudio: "/images/marketing/podcast-studio.png",
  videoEditing: "/images/marketing/video-editing.png",
  contentPlatform: "/images/marketing/content-platform.png",
  designStudio: "/images/marketing/design-studio.png",
  brandGuidelines: "/images/marketing/brand-guidelines.png",
  creativeDesk: "/images/marketing/creative-desk.png",
  filmProduction: "/images/marketing/film-production.png",
  digitalEcosystem: "/images/marketing/digital-ecosystem.png",
} as const;

export const marketingVideos = {
  heroReel: "/videos/hero-reel.mp4",
} as const;

/** Journal post covers when CMS has no image (category → path). */
export const journalCoverByCategory = {
  brand: { url: marketingImages.brandGuidelines, alt: "brand" },
  voice: { url: marketingImages.designStudio, alt: "voice" },
  pr: { url: marketingImages.socialStrategy, alt: "pr" },
  growth: { url: marketingImages.digitalEcosystem, alt: "growth" },
  studio: { url: marketingImages.creativeToolkit, alt: "studio" },
} as const satisfies Record<string, { url: string; alt: string }>;

export type JournalCoverCategory = keyof typeof journalCoverByCategory;

/** Four-up strip used on home and motion pages. */
export const motionStripImages = [
  { src: marketingImages.filmProduction, alt: "film and campaign production" },
  { src: marketingImages.videoEditing, alt: "video editing and content" },
  { src: marketingImages.podcastStudio, alt: "studio and audio production" },
  { src: marketingImages.contentPlatform, alt: "content across channels" },
] as const;
