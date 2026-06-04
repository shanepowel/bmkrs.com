import { Reveal } from "@/components/bmkrs/Reveal";
import { isFilled } from "@/lib/content/placeholders";
import type { Testimonial } from "@/lib/types";

export function Testimonials({ items }: { items: Testimonial[] }) {
  const real = (items ?? []).filter((t) => isFilled(t.quote));
  if (real.length === 0) return null;

  const [lead, ...rest] = real;

  return (
    <section className="section-pad section--paper testimonials">
      <div className="wrap section">
        <Reveal>
          <p className="eyebrow">in their words</p>
        </Reveal>

        <figure className="testimonial testimonial--lead mt-8">
          <blockquote className="display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.15]">
            &ldquo;{lead.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-4 text-sm text-muted">
            {lead.name}
            {lead.role ? `, ${lead.role}` : ""}
            {lead.company ? `, ${lead.company}` : ""}
          </figcaption>
        </figure>

        {rest.length > 0 && (
          <div className="quote-grid mt-10">
            {rest.map((t, i) => (
              <Reveal key={`${t.name}-${i}`} delay={(i % 2) as 0 | 1}>
                <figure className="testimonial case-testimonial border-l-0 pl-0">
                  <blockquote className="text-[clamp(1.125rem,2vw,1.35rem)]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption>
                    {t.name}
                    {t.role ? `, ${t.role}` : ""}
                    {t.company ? `, ${t.company}` : ""}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
