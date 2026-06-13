/** Static marketing imagery (committed under /public/images/marketing). */
export const marketingImages = {
  disciplineIcons: "/images/marketing/discipline-icons.png",
  disciplinePillars: "/images/marketing/discipline-pillars.png",
  teamCollaboration: "/images/marketing/team-collaboration.png",
  teamStrategy: "/images/marketing/team-strategy.png",
  architectureStairs: "/images/marketing/architecture-stairs.png",
  patternDots: "/images/marketing/pattern-dots.png",
  portfolioMockup: "/images/marketing/portfolio-mockup.png",
  patternGeometry: "/images/marketing/pattern-geometry.png",
  studioWorkspace: "/images/marketing/studio-workspace.png",
  brandPoster: "/images/marketing/brand-poster.png",
  architectureConcrete: "/images/marketing/architecture-concrete.png",
  portfolioCaseStudy: "/images/marketing/portfolio-case-study.png",
  patternHud: "/images/marketing/pattern-hud.png",
  brandStrategy: "/images/marketing/brand-strategy.png",
  studioTeam: "/images/marketing/studio-team.png",
  patternGrid: "/images/marketing/pattern-grid.png",
  brandMark: "/images/marketing/brand-mark.png",
  heroPoster: "/images/marketing/brand-mark.png",

  /** Legacy keys — mapped to on-brand assets for fallbacks across the site. */
  heroSculpture: "/images/marketing/brand-mark.png",
  digitalMediaDevices: "/images/marketing/portfolio-mockup.png",
  identityPackaging: "/images/marketing/brand-strategy.png",
  studioBrand: "/images/marketing/studio-team.png",
  brandEcosystem: "/images/marketing/portfolio-case-study.png",
  digitalMedia: "/images/marketing/portfolio-mockup.png",
  socialStrategy: "/images/marketing/team-strategy.png",
  brandArchitecture: "/images/marketing/architecture-concrete.png",
  creativeToolkit: "/images/marketing/brand-strategy.png",
  podcastStudio: "/images/marketing/studio-workspace.png",
  videoEditing: "/images/marketing/studio-workspace.png",
  contentPlatform: "/images/marketing/portfolio-mockup.png",
  designStudio: "/images/marketing/brand-strategy.png",
  brandGuidelines: "/images/marketing/discipline-icons.png",
  creativeDesk: "/images/marketing/studio-workspace.png",
  filmProduction: "/images/marketing/studio-team.png",
  digitalEcosystem: "/images/marketing/portfolio-case-study.png",
} as const;

export const marketingVideos = {
  heroReel: "/videos/hero-reel.mp4",
} as const;

/** Journal post covers when CMS has no image (category → path). */
export const journalCoverByCategory = {
  brand: { url: marketingImages.brandStrategy, alt: "brand strategy" },
  voice: { url: marketingImages.brandStrategy, alt: "voice and messaging" },
  pr: { url: marketingImages.teamStrategy, alt: "pr and communications" },
  growth: { url: marketingImages.portfolioCaseStudy, alt: "product and growth" },
  studio: { url: marketingImages.studioWorkspace, alt: "studio" },
} as const satisfies Record<string, { url: string; alt: string }>;

export type JournalCoverCategory = keyof typeof journalCoverByCategory;

/** Four-up strip used on home and motion pages. */
export const motionStripImages = [
  { src: marketingImages.studioTeam, alt: "senior team at work in the studio" },
  { src: marketingImages.brandStrategy, alt: "brand strategy and frameworks" },
  { src: marketingImages.studioWorkspace, alt: "design and digital production" },
  { src: marketingImages.portfolioMockup, alt: "brand and digital experience" },
] as const;
