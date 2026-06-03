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
      className={cn(
        "overflow-hidden whitespace-nowrap border-y-2 border-ink py-5",
        dark && "border-0 bg-ink text-bg"
      )}
    >
      <div
        className="inline-flex animate-marquee gap-12"
        style={{ animationDuration: duration }}
      >
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-12 font-display text-[clamp(28px,4vw,56px)] font-semibold after:content-['✺'] after:text-[0.65em] after:text-accent"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
