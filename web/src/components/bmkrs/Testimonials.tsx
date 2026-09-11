import { TestimonialGrid } from "@bmkrs/ui";
import { Reveal } from "@/components/bmkrs/Reveal";
import { isFilled } from "@/lib/content/placeholders";
import type { Testimonial } from "@/lib/types";

function attributionOf(item: Testimonial): string {
  if (isFilled(item.attribution)) return item.attribution as string;
  return [item.name, item.company ?? item.role].filter((part) => isFilled(part)).join(", ");
}

export function Testimonials({ items, theme = "ink" }: { items: Testimonial[]; theme?: "ink" | "paper" }) {
  const quotes = (items ?? [])
    .filter((item) => isFilled(item.quote))
    .map((item) => ({
      quote: item.quote,
      attribution: attributionOf(item),
    }))
    .filter((item) => item.attribution);

  if (quotes.length === 0) return null;

  return (
    <Reveal>
      <TestimonialGrid items={quotes} theme={theme} />
    </Reveal>
  );
}
