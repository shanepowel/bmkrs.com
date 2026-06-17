import Link from "next/link";
import { Body, Button, H1, Kicker, Surface } from "@bmkrs/ui";
import { PortalShell } from "@/components/portal-shell";

export default function HirePage() {
  return (
    <PortalShell>
      <Surface theme="paper">
        <Kicker theme="paper">hire</Kicker>
        <H1 theme="paper">pull from the bench.</H1>
        <Body theme="paper" lead className="mt-6 max-w-xl">
          tell us the discipline, timeline and budget band. we route to available partners and
          keep delivery inside the bmkrs surface system.
        </Body>
        <div className="mt-10">
          <Button href="mailto:network@bmkrs.com?subject=bench%20hire%20brief">
            email network@bmkrs.com
          </Button>
        </div>
        <p className="mt-8 text-sm">
          <Link href="/">portal home</Link>
        </p>
      </Surface>
    </PortalShell>
  );
}
