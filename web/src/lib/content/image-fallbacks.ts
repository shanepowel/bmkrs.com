import { fallbackProjects } from "./fallback";
import { fallbackPosts, fallbackTeam } from "./offering-fallback";
import {
  journalCoverByCategory,
  marketingImages,
  motionStripImages,
} from "@/lib/marketing-assets";
import type { JournalPost, Project, TeamMember } from "@/lib/types";

const PLACEHOLDER_LOGO = "/images/blacklogo.png";

const projectBySlug = new Map(fallbackProjects.map((p) => [p.slug, p]));

const postCoverBySlug = new Map(
  fallbackPosts.filter((p) => p.cover?.url).map((p) => [p.slug, p.cover!]),
);

/** Discipline imagery used when Sanity has no team photo yet. */
export const teamPhotoByName: Record<string, { url: string; alt: string }> = {
  shane: { url: marketingImages.brandArchitecture, alt: "delivery and strategy" },
  george: { url: marketingImages.socialStrategy, alt: "pr and communications" },
  melissa: { url: marketingImages.digitalEcosystem, alt: "product and engineering" },
  sarah: { url: marketingImages.brandGuidelines, alt: "brand and identity" },
  marcus: { url: marketingImages.designStudio, alt: "voice and messaging" },
  "the wider team": {
    url: marketingImages.creativeToolkit,
    alt: "extended specialist network",
  },
};

export const disciplineImages = [
  {
    n: "01",
    name: "brand + identity",
    body: "strategy, positioning, naming and the visual world that makes you clear at a glance.",
    href: "/services#launch-kit",
    image: marketingImages.brandGuidelines,
  },
  {
    n: "02",
    name: "voice + messaging",
    body: "tone, narrative and messaging that makes people understand and care.",
    href: "/services#story",
    image: marketingImages.designStudio,
  },
  {
    n: "03",
    name: "pr + communications",
    body: "launches, press and thought leadership that get your story heard.",
    href: "/services#press-launch",
    image: marketingImages.socialStrategy,
  },
  {
    n: "04",
    name: "product, web + growth",
    body: "sites, apps and campaigns that turn attention into revenue.",
    href: "/services#storefront",
    image: marketingImages.digitalEcosystem,
  },
] as const;

export const disciplineImageByName = Object.fromEntries(
  disciplineImages.map((d) => [d.name, d.image]),
) as Record<(typeof disciplineImages)[number]["name"], string>;

export const homeMotionStrip = motionStripImages;

export const pageHeroImages = {
  services: {
    src: marketingImages.digitalMedia,
    alt: "bmkrs digital media — brand, product, pr, disciplines",
  },
  about: { src: marketingImages.studioBrand, alt: "bmkrs creative studio" },
  work: { src: marketingImages.filmProduction, alt: "campaign and film production" },
  motion: { src: marketingImages.contentPlatform, alt: "content and platform work" },
  journal: { src: marketingImages.brandArchitecture, alt: "brand strategy and thinking" },
  contact: { src: marketingImages.creativeDesk, alt: "creative workspace" },
} as const;

export const aboutStoryImage = {
  src: marketingImages.brandGuidelines,
  alt: "brand identity and guidelines",
};

export const aboutBeliefsImage = {
  src: marketingImages.brandEcosystem,
  alt: "brand building ecosystem",
};

export const homePositioningImage = aboutBeliefsImage;

export const homeWhoWeWorkWithImage = {
  src: marketingImages.filmProduction,
  alt: "ambitious brand work",
};

export const productImageBySlug: Record<string, { src: string; alt: string }> = {
  "brand-check": { src: marketingImages.brandArchitecture, alt: "brand check" },
  "launch-kit": { src: marketingImages.brandGuidelines, alt: "launch kit" },
  rebrand: { src: marketingImages.designStudio, alt: "rebrand" },
  storefront: { src: marketingImages.digitalEcosystem, alt: "storefront" },
  story: { src: marketingImages.designStudio, alt: "story" },
  "press-launch": { src: marketingImages.socialStrategy, alt: "press launch" },
  motion: { src: marketingImages.contentPlatform, alt: "motion" },
  "motion-plus": { src: marketingImages.filmProduction, alt: "motion plus" },
  "motion-embedded": { src: marketingImages.creativeToolkit, alt: "motion embedded" },
};

export function mergeDisciplineImage<T extends { name: string; imageUrl?: string; imageAlt?: string }>(
  discipline: T,
): T {
  const src = discipline.imageUrl ?? disciplineImageByName[discipline.name.toLowerCase() as keyof typeof disciplineImageByName];
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

export function mergePostCover(post: JournalPost): JournalPost {
  if (isUsableImage(post.cover?.url)) return post;
  const cover =
    postCoverBySlug.get(post.slug) ??
    journalCoverByCategory[post.category as keyof typeof journalCoverByCategory] ?? {
      ...journalCoverByCategory.brand,
      alt: post.title,
    };
  return { ...post, cover: { ...cover, alt: post.title } };
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
