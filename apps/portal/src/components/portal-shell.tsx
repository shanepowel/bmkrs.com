import { Bar, Wordmark } from "@bmkrs/ui";
import Link from "next/link";
import type { ReactNode } from "react";

export function PortalShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Bar theme="paper">
        <Link href="/" aria-label="network home">
          <Wordmark tone="ink" />
        </Link>
      </Bar>
      <main>{children}</main>
    </div>
  );
}
