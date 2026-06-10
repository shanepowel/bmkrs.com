import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/bmkrs/Reveal";
import { H2, Kicker, Section } from "@/components/bmkrs/surfaces";
import { disciplineAnchorId, productHref } from "@/lib/service-anchors";
import type { Discipline } from "@/lib/types";

function powerHref(slug: string, tier: string) {
  return tier === "grow" ? "/motion" : productHref(slug);
}

export function DisciplinesStack({ disciplines }: { disciplines: Discipline[] }) {
  return (
    <Section theme="paper">
      <div className="section">
        <Kicker theme="paper">what we do</Kicker>
        <H2 theme="paper">four disciplines, one team.</H2>
        <div className="disc-stack">
          {disciplines.map((d, i) => (
            <article
              key={d.name}
              id={disciplineAnchorId(d.name) ?? undefined}
              className="disc-row reveal scroll-mt-24"
            >
              <div className="disc-head">
                <Reveal>
                  <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                </Reveal>
                <h3 className="display mt-2 text-[clamp(1.5rem,3vw,2rem)]">{d.name}</h3>
                <p className="disc-prop">{d.proposition}</p>
                {d.body && <p className="disc-body">{d.body}</p>}
              </div>
              {d.imageUrl && (
                <div className="disc-visual relative aspect-[4/3] overflow-hidden rounded-[var(--radius)] border-2 border-ink/15">
                  <Image
                    src={d.imageUrl}
                    alt={d.imageAlt ?? d.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
              )}
              <div className="disc-detail">
                {d.deliverables?.length ? (
                  <ul className="disc-deliverables">
                    {d.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {d.powers?.length ? (
                  <p className="disc-powers">
                    <span className="eyebrow">find it in</span>{" "}
                    {d.powers.map((p, k) => (
                      <span key={p.slug}>
                        <Link href={powerHref(p.slug, p.tier)} className="text-accent hover:underline">
                          {p.name}
                        </Link>
                        {k < d.powers!.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
