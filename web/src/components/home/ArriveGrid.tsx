import { CellGrid, QuoteCell } from "@bmkrs/ui";
import type { PainPoint } from "@/lib/content/expansion-v2";

export function ArriveGrid({ points }: { points: PainPoint[] }) {
  return (
    <CellGrid>
      {points.map((point) => (
        <QuoteCell
          key={point.number}
          index={point.number}
          title={point.headline.replace(/^"|"$/g, "")}
          body={point.body}
        />
      ))}
    </CellGrid>
  );
}
