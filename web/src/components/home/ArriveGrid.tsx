import Link from "next/link";
import type { PainPoint } from "@/lib/content/expansion-v2";

export function ArriveGrid({ points }: { points: PainPoint[] }) {
  return (
    <div className="home-arrive">
      {points.map((point) => (
        <Link key={point.number} href={point.href} className="home-arrive__cell">
          <span className="home-arrive__index">{point.number}</span>
          <h3 className="home-arrive__title">{point.headline.replace(/^"|"$/g, "")}</h3>
          <p className="home-arrive__body">{point.body}</p>
          <span className="home-arrive__cta">see the fit →</span>
        </Link>
      ))}
    </div>
  );
}
