import { cn } from "@/lib/utils";

export function Marquee({
  items,
  dark = false,
  duration = "24s",
}: {
  items: string[];
  dark?: boolean;
  duration?: string;
}) {
  const track = [...items, ...items];

  return (
    <div
      data-surface="ink"
      className={cn(
        "overflow-hidden whitespace-nowrap border-y border-[var(--surface-rule,rgba(241,239,232,0.16))] py-5",
        dark && "border-0 bg-ink text-bg"
      )}
    >
      <div
        className="inline-flex animate-marquee gap-8 sm:gap-12"
        style={{ animationDuration: duration }}
      >
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-8 font-mono text-[clamp(1.125rem,4vw,2.5rem)] font-normal after:content-['✺'] after:text-[0.65em] after:text-accent sm:gap-12"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
