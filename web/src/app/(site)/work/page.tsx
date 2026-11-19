import type { Metadata } from "next";
import Link from "next/link";
import { Body, Button, H2, Kicker, PageHero, Section, WorkGrid, WorkTile } from "@bmkrs/ui";
import { workHowProjectRuns } from "@/lib/content/expansion-v2";
import { getProjects, prioritizeShowcase } from "@/lib/content";
import { brandMessaging } from "@/lib/content/messaging";
import { pageHeroImages } from "@/lib/content/image-fallbacks";
import { isOnPublicShelf } from "@/lib/content/public-shelf";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import type { Project } from "@/lib/types";

export const metadata: Metadata = pageMetadata(
  "Work",
  "A selection of the brands, products and experiences we have helped bring to life. Ideas are easy; making them work is the interesting part.",
  "/work",
);

function projectTag(project: Project) {
  return project.serviceTags?.length
    ? project.serviceTags.join(" · ")
    : (project.sector ?? project.category);
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  if (!projects.length) return null;

  return (
    <WorkGrid>
      {projects.map((project) => (
        <WorkTile
          key={project.slug}
          href={`/work/${project.slug}`}
          tag={projectTag(project)}
          name={project.title}
          detail={project.outcomeLine || project.positioning || project.tagline}
          image={{ src: project.thumbnailPath, alt: "" }}
        />
      ))}
    </WorkGrid>
  );
}

export default async function WorkPage() {
  const projects = prioritizeShowcase((await getProjects()).filter(isOnPublicShelf));
  const clientWork = projects.filter((p) => p.projectType !== "studio");
  const studioWork = projects.filter((p) => p.projectType === "studio");

  const heroImage = pageHeroImages.work.src;

  const jsonLd = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
  ]);

  return (
    <main data-surface="paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="selected work"
        title={brandMessaging.workTitle}
        lede={brandMessaging.workSubtitle}
        image={{ src: heroImage, alt: pageHeroImages.work.alt }}
      />

      <Section theme="paper" className="!pt-0">
        <H2 theme="paper">Client work</H2>
        <div className="mt-6">
          <ProjectGrid projects={clientWork} />
        </div>
      </Section>

      <Section theme="paper">
        <Kicker theme="paper">{workHowProjectRuns.kicker}</Kicker>
        <H2 theme="paper" className="mt-3">
          {workHowProjectRuns.headline}
        </H2>
        <div className="mt-6 max-w-[65ch] space-y-5">
          {workHowProjectRuns.paragraphs.map((paragraph) => (
            <Body key={paragraph.slice(0, 32)} theme="paper">
              {paragraph}
            </Body>
          ))}
        </div>
        <p className="mono mt-6 text-meta">
          <Link href="/services" className="underline decoration-1 underline-offset-4">
            {workHowProjectRuns.footnote}
          </Link>
        </p>
      </Section>

      <Section theme="paper">
        <H2 theme="paper">Built in the studio</H2>
        <Body theme="paper" lead className="mt-3">
          We are builders, so we build our own. These are bmkrs products: proof we live with the
          consequences of our own advice.
        </Body>
        <div className="mt-6">
          <ProjectGrid projects={studioWork} />
        </div>
      </Section>

      <Section theme="paper">
        <Kicker theme="paper">next</Kicker>
        <H2 theme="paper" className="mt-3">
          {brandMessaging.closeTitle}
        </H2>
        <Body theme="paper" className="mt-4">
          {brandMessaging.closeLead}
        </Body>
        <div className="mt-6">
          <Button href="/contact">{brandMessaging.ctaPrimary} →</Button>
        </div>
      </Section>
    </main>
  );
}
