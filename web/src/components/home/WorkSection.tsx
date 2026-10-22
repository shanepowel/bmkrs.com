import { GhostButton, PullQuote, SectionHeading, Surface, WorkGrid, WorkTile } from "@bmkrs/ui";
import type { Project, Testimonial } from "@/lib/types";

export function WorkSection({
  projects,
  testimonial,
  eyebrow,
  title,
}: {
  projects: Project[];
  testimonial?: Testimonial;
  eyebrow: string;
  title: string;
}) {
  const cite = [testimonial?.name, testimonial?.company ?? testimonial?.attribution]
    .filter(Boolean)
    .join(", ");

  return (
    <Surface theme="paper" pad="home" id="work">
      <SectionHeading title={title} eyebrow={eyebrow} />
      <WorkGrid>
        {projects.map((project) => (
          <WorkTile
            key={project.slug}
            href={`/work/${project.slug}`}
            tag={project.category.toLowerCase()}
            name={project.title.toLowerCase()}
            image={{ src: project.thumbnailPath, alt: "" }}
          />
        ))}
      </WorkGrid>
      <div className="bmkrs-work__more">
        <GhostButton href="/work">all projects →</GhostButton>
      </div>
      {testimonial ? <PullQuote quote={testimonial.quote} cite={cite} /> : null}
    </Surface>
  );
}
