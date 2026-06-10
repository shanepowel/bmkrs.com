import type { PortableBlock } from "@/lib/types";

export function PortableBody({ blocks }: { blocks?: PortableBlock[] }) {
  if (!blocks?.length) return null;

  return (
    <div className="prose max-w-none">
      {blocks.map((block, i) => {
        if (block._type === "heading" && block.text) {
          return (
            <h2 key={i} className="display mt-10 mb-4 text-[clamp(1.35rem,3vw,2rem)] font-bold">
              {block.text}
            </h2>
          );
        }
        if (block._type === "pullQuote" && block.text) {
          return (
            <blockquote
              key={i}
              className="case-testimonial my-8 border-l-4 border-accent pl-6 text-[clamp(1.125rem,2vw,1.35rem)] font-medium"
            >
              {block.text}
            </blockquote>
          );
        }
        if (block._type === "block") {
          const text = block.children?.map((c) => c.text).join("") ?? "";
          if (!text) return null;
          return (
            <p key={i} className="mb-6 text-[17px] leading-relaxed text-ink/90">
              {text}
            </p>
          );
        }
        return null;
      })}
    </div>
  );
}
