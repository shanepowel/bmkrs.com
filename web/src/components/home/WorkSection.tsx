import Link from "next/link";
import { GhostButton, TestimonialGrid } from "@bmkrs/ui";
import { isFilled } from "@/lib/content/placeholders";
import type { Project, Testimonial } from "@/lib/types";
import { SectionHeader } from "./SectionHeader";

function attributionOf(item: Testimonial): string {
  if (isFilled(item.attribution)) return item.attribution as string;
  return [item.name, item.company ?? item.role].filter((part) => isFilled(part)).join(", ");
}

export function WorkSection({
  projects,
  testimonials = [],
  eyebrow,
  title,
}: {
  projects: Project[];
  testimonials?: Testimonial[];
  eyebrow: string;
  title: string;
}) {
  const quotes = testimonials
    .filter((item) => isFilled(item.quote))
    .map((item) => ({
      quote: item.quote,
      attribution: attributionOf(item),
    }))
    .filter((item) => item.attribution);

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
        {quotes.length ? (
          <div className="mt-[clamp(48px,7vh,72px)]">
            <TestimonialGrid items={quotes} theme="paper" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
