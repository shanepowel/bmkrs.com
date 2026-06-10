import Link from "next/link";
import { H1, Section } from "@/components/bmkrs/surfaces";
import { Wordmark } from "@/components/bmkrs/Wordmark";

const LINKS = [
  { label: "the work", href: "/work" },
  { label: "the services", href: "/services" },
  { label: "the thinking", href: "/journal" },
  { label: "a human", href: "/contact" },
] as const;

export default function NotFound() {
  return (
    <main>
      <Section theme="orange" className="min-h-[70vh] grid place-items-center text-center">
        <div className="max-w-[520px]">
          <Wordmark className="wordmark mx-auto" variant="primary-light" />
          <p className="mono mt-8 text-meta" style={{ color: "#4A1B0C" }}>
            404
          </p>
          <H1 theme="orange" className="!text-[clamp(2rem,6vw,3.5rem)]">
            this page does not exist.
          </H1>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: "#2C1005" }}>
            which is awkward for a company that ships things. everything that does exist is below.
          </p>
          <p className="mono mt-8 text-meta leading-loose" style={{ color: "#4A1B0C" }}>
            {LINKS.map((link, i) => (
              <span key={link.href}>
                <Link href={link.href} className="underline decoration-1 underline-offset-4">
                  {link.label}
                </Link>{" "}
                → {link.href}
                {i < LINKS.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </div>
      </Section>
    </main>
  );
}
