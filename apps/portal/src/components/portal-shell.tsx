import Link from "next/link";
import type { ReactNode } from "react";

export function PortalShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-black/10 px-[var(--gutter,1.25rem)] py-4">
        <Link href="/" className="font-medium lowercase tracking-tight">
          bmkrs network
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
}
