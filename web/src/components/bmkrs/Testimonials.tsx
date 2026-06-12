import { Reveal } from "@/components/bmkrs/Reveal";
import { isFilled } from "@/lib/content/placeholders";
import type { Testimonial } from "@/lib/types";

export function Testimonials({ items }: { items: Testimonial[] }) {
  const real = (items ?? []).filter((t) => isFilled(t.quote));
  if (real.length === 0) return null;

  const lead = real[0];

  return (
    <Reveal>
      <figure className="testimonial testimonial--lead">
        <blockquote className="text-h3 font-medium leading-[1.15]">
          &ldquo;{lead.quote}&rdquo;
        </blockquote>
        <figcaption className="mono mt-4 text-meta font-normal normal-case text-muted">
          {lead.name}
          {lead.role ? `, ${lead.role}` : ""}
          {lead.company ? `, ${lead.company}` : ""}
        </figcaption>
      </figure>
    </Reveal>
  );
}
