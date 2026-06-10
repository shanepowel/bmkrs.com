import Link from "next/link";
import { authorBioForName } from "@/lib/content/author-bios";

export function AuthorBio({ name }: { name: string }) {
  const bio = authorBioForName(name);
  if (!bio) return null;

  return (
    <footer className="author-bio mt-14 border-t-2 border-[var(--line)] pt-8">
      <p className="text-sm font-semibold text-ink">
        <Link href={`/about#${bio.slug}`} className="hover:text-accent">
          {bio.name}
        </Link>
        <span className="text-muted"> · {bio.discipline}</span>
      </p>
      <p className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-muted">{bio.footer}</p>
    </footer>
  );
}
