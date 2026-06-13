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

export const homeMotionStrip = motionStripImages;

export const pageHeroImages = {
  services: {
    src: marketingImages.disciplinePillars,
    alt: "brand identity, voice, pr and product — four disciplines, one team",
  },
  about: { src: marketingImages.studioTeam, alt: "bmkrs team collaborating in the studio" },
  work: { src: marketingImages.portfolioCaseStudy, alt: "brand and digital experience work" },
  motion: { src: marketingImages.studioTeam, alt: "ongoing brand and creative partnership" },
  journal: { src: marketingImages.brandStrategy, alt: "brand strategy and thinking" },
  contact: { src: marketingImages.teamCollaboration, alt: "start a project with bmkrs" },
} as const;

export const aboutStoryImage = {
  src: marketingImages.teamCollaboration,
  alt: "strategy session in the studio",
};

export const aboutBeliefsImage = {
  src: marketingImages.architectureConcrete,
  alt: "built to last — brand as infrastructure",
};

export const aboutTeamImage = {
  src: marketingImages.studioTeam,
  alt: "partner collaborators at work in the studio",
};

export const homePositioningImage = {
  src: marketingImages.disciplinePillars,
  alt: "four disciplines on one coordinated team",
};

export const homeWhoWeWorkWithImage = {
  src: marketingImages.teamCollaboration,
  alt: "founders and product teams in the studio",
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
