import Link from "next/link";
import { GhostButton } from "@bmkrs/ui";
import type { Project, Testimonial } from "@/lib/types";
import { SectionHeader } from "./SectionHeader";

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
  return (
    <section className="home-work home-section" id="work" data-surface="paper">
      <div className="home-wrap">
        <SectionHeader title={title} eyebrow={eyebrow} theme="paper" />
        <div className="home-work-grid">
          {projects.map((project) => (
            <Link key={project.slug} href={`/work/${project.slug}`} className="home-work-card">
              <span className="home-work-card__tag">{project.category.toLowerCase()}</span>
              <span className="home-work-card__name">{project.title.toLowerCase()}</span>
            </Link>
          ))}
        </div>
        <div className="mt-[clamp(28px,4vh,44px)]">
          <GhostButton href="/work" className="!border-bmkrs-ink !text-bmkrs-ink hover:!bg-bmkrs-ink hover:!text-bmkrs-paper">
            all projects →
          </GhostButton>
        </div>
        {testimonial ? (
          <blockquote className="home-work-quote">
            {testimonial.quote}
            <cite>
              {testimonial.name ? `${testimonial.name}, ` : ""}
              {testimonial.company ?? testimonial.attribution}
            </cite>
          </blockquote>
        ) : null}
      </div>
    </section>
  );
}
