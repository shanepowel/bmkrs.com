import type { Metadata } from "next";
import Link from "next/link";
import { Body, Button, H2, Kicker, PageHero, Section, WorkGrid, WorkTile } from "@bmkrs/ui";
import { workHowProjectRuns, workPageIntro } from "@/lib/content/expansion-v2";
import { getProjects } from "@/lib/content";
import { pageHeroImages } from "@/lib/content/image-fallbacks";
import { isOnPublicShelf } from "@/lib/content/public-shelf";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import type { Project } from "@/lib/types";

export const metadata: Metadata = pageMetadata(
  "work",
  "selected brand, product and digital projects, including the products we build ourselves. proof, not promises.",
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
  const projects = (await getProjects()).filter(isOnPublicShelf);
  const clientWork = projects.filter((p) => p.projectType !== "studio");
  const studioWork = projects.filter((p) => p.projectType === "studio");

  const heroImage = pageHeroImages.work.src;

  const jsonLd = breadcrumbSchema([
    { name: "home", path: "/" },
    { name: "work", path: "/work" },
  ]);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="work"
        title={
          <>
            we build <span className="text-accent">brands.</span>
          </>
        }
        lede={workPageIntro}
        image={{ src: heroImage, alt: pageHeroImages.work.alt }}
      />

      <Section theme="ink">
        <H2 theme="ink">client work</H2>
        <div className="mt-8">
          <ProjectGrid projects={clientWork} />
        </div>
      </Section>

      <Section theme="paper">
        <Kicker theme="paper">{workHowProjectRuns.kicker}</Kicker>
        <H2 theme="paper">{workHowProjectRuns.headline}</H2>
        <div className="mt-8 max-w-[65ch] space-y-6">
          {workHowProjectRuns.paragraphs.map((paragraph) => (
            <Body key={paragraph.slice(0, 32)} theme="paper">
              {paragraph}
            </Body>
          ))}
        </div>
        <p className="mono mt-8 text-meta">
          <Link href="/services" className="underline decoration-1 underline-offset-4">
            {workHowProjectRuns.footnote}
          </Link>
        </p>

        <div className="mt-[var(--space-block)] border-t border-line pt-[var(--space-block)]">
          <H2 theme="paper">built in the studio</H2>
          <Body theme="paper" lead className="mt-3">
            we are builders, so we build our own. these are bmkrs products: proof we live with the
            consequences of our own advice.
          </Body>
          <div className="mt-8">
            <ProjectGrid projects={studioWork} />
          </div>
        </div>
      </Section>

      <Section theme="ink">
        <Kicker theme="ink">your brand next</Kicker>
        <div className="mt-6">
          <Button href="/contact">start a project</Button>
        </div>
      </Section>
    </main>
  );
}
