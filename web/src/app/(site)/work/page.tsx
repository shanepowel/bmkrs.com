import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeroSplit } from "@/components/bmkrs/PageHeroSplit";
import { Reveal } from "@/components/bmkrs/Reveal";
import { H2, Section } from "@/components/bmkrs/surfaces";
import { getProjects } from "@/lib/content";
import { pageHeroImages } from "@/lib/content/image-fallbacks";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata(
  "work",
  "selected brand, product and digital projects, including the products we build ourselves. proof, not promises.",
  "/work",
);

function ProjectGrid({
  projects,
}: {
  projects: Awaited<ReturnType<typeof getProjects>>;
}) {
  if (!projects.length) return null;

  return (
    <div className="work-grid work-grid--index">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/work/${project.slug}`}
          className="work-card group block overflow-hidden rounded-[var(--radius)]"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={project.thumbnailPath}
              alt={project.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div className="meta">
            <span className="eyebrow mb-2 block">
              {project.serviceTags?.length
                ? project.serviceTags.join(" · ")
                : (project.sector ?? project.category)}
            </span>
            <h3 className="display text-xl">{project.title}</h3>
            <p>{project.positioning ?? project.tagline}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default async function WorkPage() {
  const projects = await getProjects();
  const clientWork = projects.filter((p) => p.projectType !== "studio");
  const studioWork = projects.filter((p) => p.projectType === "studio");

  const heroImage =
    projects.find((p) => p.featured)?.thumbnailPath ?? pageHeroImages.work.src;

  const jsonLd = breadcrumbSchema([
    { name: "home", path: "/" },
    { name: "work", path: "/work" },
  ]);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHeroSplit
        image={{ src: heroImage, alt: pageHeroImages.work.alt }}
        minHeight="min-h-[58vh]"
      >
        <Reveal>
          <p className="eyebrow">work</p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="display mt-4 text-[clamp(2.25rem,11vw,10rem)] font-bold">
            we build <span className="text-accent">brands.</span>
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="lead mt-7">
            selected projects across branding, product and digital, including the products we build
            ourselves.
          </p>
        </Reveal>
      </PageHeroSplit>

      <Section theme="ink">
        <H2 theme="ink">client work</H2>
        <div className="mt-8">
          <ProjectGrid projects={clientWork} />
        </div>
      </Section>

      <Section theme="paper">
        <H2 theme="paper">built in the studio</H2>
        <p className="lead mt-3 max-w-[52ch]">
          we are builders, so we build our own. these are bmkrs products: proof we live with the
          consequences of our own advice.
        </p>
        <div className="mt-8">
          <ProjectGrid projects={studioWork} />
        </div>
      </Section>

      <Section theme="ink">
        <div className="work-grid work-grid--index max-w-md">
          <Link href="/contact" className="work-card work-card--cta">
            <div className="meta meta--static">
              <span className="eyebrow">+ your brand next</span>
              <h3 className="display text-2xl">start a project</h3>
            </div>
          </Link>
        </div>
      </Section>
    </main>
  );
}
