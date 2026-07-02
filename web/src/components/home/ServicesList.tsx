import Link from "next/link";
import type { CapabilityTile } from "@/lib/types";
import { SectionHeader } from "./SectionHeader";

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
      <SectionHeader title={statement} eyebrow={eyebrow} />
      <p className="home-services-lede">{lead}</p>
      <div className="home-services-list">
        {tiles.map((tile) => (
          <Link key={tile.title} href={tile.href} className="home-services-row">
            <span className="home-services-row__name">{tile.title.toLowerCase()}</span>
            <span className="home-services-row__desc">{tile.description}</span>
            <span className="home-services-row__arrow" aria-hidden>
              →
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
