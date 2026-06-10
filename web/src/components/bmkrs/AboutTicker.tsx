import { BMKRS_ORANGE } from "@/lib/brand";
import { SURFACE } from "@/lib/surfaces";
import { mono as monoStyle } from "@/components/bmkrs/surfaces";

const ink = SURFACE.ink;

export function AboutTicker({ items }: { items: string[] }) {
  const track = [...items, ...items];

  return (
    <div
      style={{
        background: ink.bg,
        borderTop: `1px solid ${ink.rule}`,
        borderBottom: `1px solid ${ink.rule}`,
      }}
      className="overflow-hidden py-3"
      aria-hidden
    >
      <div className="about-ticker flex w-max gap-10 whitespace-nowrap">
        {track.map((item, i) => (
          <span key={`${item}-${i}`} style={{ ...monoStyle, color: ink.faint }} className="text-meta">
            {item} <span style={{ color: BMKRS_ORANGE }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
