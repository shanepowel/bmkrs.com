import Link from "next/link";
import { H1, Section } from "@/components/bmkrs/surfaces";
import { Wordmark } from "@/components/bmkrs/Wordmark";

export default function NotFound() {
  return (
    <main>
      <Section theme="orange" className="min-h-[70vh] grid place-items-center text-center">
        <div className="max-w-[480px]">
          <Wordmark className="wordmark mx-auto" variant="primary-light" />
          <p className="mono mt-8 text-meta" style={{ color: "#4A1B0C" }}>
            404
          </p>
          <H1 theme="orange" className="!text-[clamp(2rem,6vw,3.5rem)]">
            this page did not ship.
          </H1>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: "#2C1005" }}>
            the url might be wrong, or the page moved. try one of these instead.
          </p>
          <nav className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <Link href="/work" className="underline decoration-1 underline-offset-4">
              work
            </Link>
            <Link href="/services" className="underline decoration-1 underline-offset-4">
              services
            </Link>
            <Link href="/journal" className="underline decoration-1 underline-offset-4">
              journal
            </Link>
            <Link href="/contact" className="underline decoration-1 underline-offset-4">
              contact
            </Link>
          </nav>
        </div>
      </Section>
    </main>
  );
}
