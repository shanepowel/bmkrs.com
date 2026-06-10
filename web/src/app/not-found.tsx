import Link from "next/link";
import { Wordmark } from "@/components/bmkrs/Wordmark";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-6 py-20 text-center">
      <div className="max-w-[480px]">
        <Wordmark className="wordmark mx-auto" />
        <p className="eyebrow mt-8 justify-center">404</p>
        <h1 className="display mt-4 text-[clamp(2rem,6vw,3.5rem)] font-bold">
          this page did not ship.
        </h1>
        <p className="muted mt-4 text-[15px]">
          the url might be wrong, or the page moved. try one of these instead.
        </p>
        <nav className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-semibold">
          <Link href="/work" className="text-accent hover:underline">
            work
          </Link>
          <Link href="/services" className="text-accent hover:underline">
            services
          </Link>
          <Link href="/journal" className="text-accent hover:underline">
            journal
          </Link>
          <Link href="/contact" className="text-accent hover:underline">
            contact
          </Link>
        </nav>
      </div>
    </main>
  );
}
