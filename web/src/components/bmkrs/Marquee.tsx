import { cn } from "@/lib/utils";

export function Marquee({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) {
  const track = [...items, ...items];

  return (
    <div
      data-surface="ink"
      className={cn("ticker-band", dark && "border-0 bg-ink text-bg")}
      aria-hidden
    >
      <div className="ticker-band__track animate-marquee">
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className="ticker-band__item">
            {item}
            <span className="ticker-band__dot" aria-hidden>
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
