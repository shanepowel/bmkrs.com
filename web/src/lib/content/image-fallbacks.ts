import { fallbackProjects } from "./fallback";
import { fallbackPosts, fallbackTeam } from "./offering-fallback";
import type { JournalPost, Project, TeamMember } from "@/lib/types";

const PLACEHOLDER_LOGO = "/images/blacklogo.png";

const projectBySlug = new Map(fallbackProjects.map((p) => [p.slug, p]));

const postCoverBySlug = new Map(
  fallbackPosts.filter((p) => p.cover?.url).map((p) => [p.slug, p.cover!]),
);

/** Discipline imagery used when Sanity has no team photo yet. */
export const teamPhotoByName: Record<string, { url: string; alt: string }> = {
  shane: { url: "/images/optimized/intelligent-brands.jpg", alt: "delivery and strategy" },
  george: { url: "/images/optimized/marketing-dis.jpg", alt: "pr and communications" },
  melissa: { url: "/images/optimized/mobile-app.jpg", alt: "product and engineering" },
  sarah: { url: "/images/optimized/branding-dis.jpg", alt: "brand and identity" },
  marcus: { url: "/images/optimized/copa-hero.jpg", alt: "voice and messaging" },
  "the wider team": {
    url: "/images/optimized/business-strategy.jpg",
    alt: "extended specialist network",
  },
};

export const disciplineImages = [
  {
    n: "01",
    name: "brand + identity",
    body: "strategy, positioning, naming and the visual world that makes you unmistakable.",
    href: "/services#launch-kit",
    image: "/images/optimized/branding-dis.jpg",
  },
  {
    n: "02",
    name: "voice + messaging",
    body: "tone, narrative and messaging that makes people understand and care.",
    href: "/services#story",
    image: "/images/optimized/copa-campaign.jpg",
  },
  {
    n: "03",
    name: "pr + communications",
    body: "launches, press and thought leadership that get your story heard.",
    href: "/services#press-launch",
    image: "/images/optimized/marketing-dis.jpg",
  },
  {
    n: "04",
    name: "product, web + growth",
    body: "sites, apps and campaigns that turn attention into revenue.",
    href: "/services#storefront",
    image: "/images/optimized/mobile-app.jpg",
  },
] as const;

export const motionShowcaseImages = [
  { src: "/images/optimized/copa-hero.jpg", alt: "copa brand identity" },
  { src: "/work/images/optimized/fdb-2-hero.jpg", alt: "floare din banat storefront" },
  { src: "/work/images/optimized/flipster-hero.jpg", alt: "flipster identity" },
  { src: "/images/optimized/smoothies-hero.jpg", alt: "smoothies launch site" },
] as const;

export const pageHeroImages = {
  services: {
    src: "/images/optimized/business-strategy.jpg",
    alt: "brand strategy and delivery",
  },
  about: { src: "/images/aboutus_qyrbat.webp", alt: "bmkrs team and studio" },
  work: { src: "/images/optimized/copa-hero.jpg", alt: "copa brand identity" },
  motion: { src: "/images/optimized/copa-campaign.jpg", alt: "ongoing brand campaigns" },
  journal: { src: "/images/optimized/press-feature.jpg", alt: "press and brand thinking" },
  contact: { src: "/images/optimized/intelligent-brands.jpg", alt: "global brand work" },
} as const;

export const aboutStoryImage = {
  src: "/images/optimized/branding-dis.jpg",
  alt: "brand identity work",
};

export const aboutBeliefsImage = {
  src: "/images/optimized/ecom-growth.jpg",
  alt: "growth and commerce",
};

export const homePositioningImage = {
  src: "/images/optimized/marketing-dis.jpg",
  alt: "brand and marketing",
};

export const homeMotionStrip = motionShowcaseImages;

const disciplineImageByName: Record<string, string> = {
  "brand + identity": "/images/optimized/branding-dis.jpg",
  "voice + messaging": "/images/optimized/copa-campaign.jpg",
  "pr + communications": "/images/optimized/marketing-dis.jpg",
  "product, web + growth": "/images/optimized/mobile-app.jpg",
};

export const productImageBySlug: Record<string, { src: string; alt: string }> = {
  "brand-check": { src: "/images/optimized/intelligent-brands.jpg", alt: "brand check" },
  "launch-kit": { src: "/images/optimized/copa-hero.jpg", alt: "launch kit" },
  rebrand: { src: "/images/optimized/branding-dis.jpg", alt: "rebrand" },
  storefront: { src: "/images/optimized/ecom-growth.jpg", alt: "storefront" },
  story: { src: "/images/optimized/copa-campaign.jpg", alt: "story" },
  "press-launch": { src: "/images/optimized/press-feature.jpg", alt: "press launch" },
  motion: { src: "/images/optimized/smoothies-hero.jpg", alt: "motion" },
  "motion-plus": { src: "/images/optimized/wanderlust-hero.jpg", alt: "motion plus" },
  "motion-embedded": { src: "/images/optimized/business-strategy.jpg", alt: "motion embedded" },
};

export function mergeDisciplineImage<T extends { name: string; imageUrl?: string; imageAlt?: string }>(
  discipline: T,
): T {
  const src = discipline.imageUrl ?? disciplineImageByName[discipline.name.toLowerCase()];
  if (!src || !isUsableImage(src)) return discipline;
  return {
    ...discipline,
    imageUrl: src,
    imageAlt: discipline.imageAlt ?? discipline.name,
  };
}

function isUsableImage(url?: string): url is string {
  return Boolean(url && url !== PLACEHOLDER_LOGO && !url.includes("blacklogo"));
}

export function mergeProjectImages(project: Project): Project {
  const fb = projectBySlug.get(project.slug);
  const thumbnailPath = isUsableImage(project.thumbnailPath)
    ? project.thumbnailPath
    : isUsableImage(project.heroImage?.url)
      ? project.heroImage!.url!
      : fb?.thumbnailPath ?? PLACEHOLDER_LOGO;

  const galleryMedia =
    project.gallery
      ?.filter((g) => g.url)
      .map((g) => ({
        type: "image" as const,
        src: g.url!,
        alt: g.alt || project.title,
      })) ?? [];

  const media =
    project.media?.length
      ? project.media
      : galleryMedia.length
        ? galleryMedia
        : fb?.media?.length
          ? fb.media
          : [{ type: "image" as const, src: thumbnailPath, alt: project.title }];

  const heroImage =
    project.heroImage?.url && isUsableImage(project.heroImage.url)
      ? project.heroImage
      : { url: thumbnailPath, alt: project.heroImage?.alt || fb?.title || project.title };

  return {
    ...project,
    thumbnailPath,
    heroImage,
    media,
  };
}

const defaultJournalCover = {
  url: "/images/optimized/branding-dis.jpg",
  alt: "bmkrs brand work",
};

export function mergePostCover(post: JournalPost): JournalPost {
  if (isUsableImage(post.cover?.url)) return post;
  const cover = postCoverBySlug.get(post.slug) ?? {
    ...defaultJournalCover,
    alt: post.title,
  };
  return { ...post, cover };
}

export function mergeTeamPhoto(member: TeamMember): TeamMember {
  if (isUsableImage(member.photoUrl)) return member;
  const fb = fallbackTeam.find(
    (t) => t.name.toLowerCase() === member.name.toLowerCase(),
  );
  const keyed = teamPhotoByName[member.name.toLowerCase()];
  const url = member.photoUrl || fb?.photoUrl || keyed?.url;
  const alt = member.photoAlt || fb?.photoAlt || keyed?.alt || member.name;
  return url ? { ...member, photoUrl: url, photoAlt: alt } : member;
}
