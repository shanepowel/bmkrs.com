import { Lead, LinkIndex, LinkRow, SectionHeading } from "@bmkrs/ui";
import type { CapabilityTile } from "@/lib/types";

export function ServicesList({
  eyebrow,
  statement,
  lead,
  tiles,
}: {
  eyebrow: string;
  statement: string;
  lead: string;
  tiles: CapabilityTile[];
}) {
  return (
    <>
      <SectionHeading title={statement} eyebrow={eyebrow} />
      <Lead>{lead}</Lead>
      <LinkIndex>
        {tiles.map((tile) => (
          <LinkRow
            key={tile.title}
            href={tile.href}
            name={tile.title.toLowerCase()}
            description={tile.description}
          />
        ))}
      </LinkIndex>
    </>
  );
}
