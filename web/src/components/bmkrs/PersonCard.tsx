import Image from "next/image";
import Link from "next/link";
import { visibleQuickfire } from "@/lib/quickfire";
import type { Person } from "@/lib/types";

type PersonCardProps = {
  person: Person;
};

export function PersonCard({ person }: PersonCardProps) {
  const quickfire = visibleQuickfire(person.quickfire);
  const headline = [person.name, person.role ?? person.discipline].filter(Boolean).join(" · ");
  const bio = person.shortBio ?? person.longBio ?? "";

  return (
    <article className="team-card" id={person.slug}>
      <div className="team-photo relative aspect-square overflow-hidden rounded-[var(--radius)] border border-[var(--line)] bg-[var(--block-lilac)]">
        {person.portraitUrl ? (
          <Image
            src={person.portraitUrl}
            alt={person.portraitAlt ?? `illustrated portrait of ${person.name}, ${person.discipline ?? ""} at bmkrs`}
            fill
            className="object-cover"
            sizes="360px"
          />
        ) : (
          <span className="team-initial preserve-case">{person.name.charAt(0)}</span>
        )}
      </div>
      <p className="mono mt-4 text-meta text-muted">{headline}</p>
      {bio ? <p className="mt-3 text-[17px] leading-relaxed text-muted">{bio}</p> : null}
      {quickfire.length > 0 ? (
        <ul className="mono mt-4 space-y-1 text-meta text-muted">
          {quickfire.map((item) => (
            <li key={item.label}>
              {item.label} →{" "}
              {item.href ? (
                <Link href={item.href} className="text-accent hover:underline">
                  {item.value}
                </Link>
              ) : (
                item.value
              )}
            </li>
          ))}
        </ul>
      ) : null}
      {person.linkedinUrl ? (
        <a
          href={person.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="accent-link mt-3 inline-block text-sm"
        >
          linkedin ↗
        </a>
      ) : null}
    </article>
  );
}
