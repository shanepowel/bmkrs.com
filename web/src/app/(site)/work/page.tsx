import { ProjectTile, ProjectTilePlaceholder } from "@/components/bmkrs/ProjectTile";
import { Reveal } from "@/components/bmkrs/Reveal";
import { getPage, getProjects } from "@/lib/content";

export const metadata = { title: "work" };

export default async function WorkPage() {
  const [page, projects] = await Promise.all([getPage("work"), getProjects()]);

  return (
    <>
      <section className="flex min-h-[58vh] flex-col justify-center px-[var(--pad)] pt-32">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">{page.heroEyebrow}</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display mt-4 text-[clamp(52px,11vw,160px)] font-bold">
              brands we&apos;ve <span className="text-accent">built.</span>
            </h1>
          </Reveal>
          {page.heroSubtitle && (
            <Reveal delay={2}>
              <p className="lead mt-7">{page.heroSubtitle}</p>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="wrap">
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectTile
                key={project.slug}
                project={project}
                delay={(i % 2) as 0 | 1}
                gradientIndex={i}
              />
            ))}
            <Reveal delay={1}>
              <ProjectTilePlaceholder
                title="your brand next"
                category="start a project"
                href="/contact"
                label="+"
                gradientIndex={projects.length}
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
