import Link from "next/link";
import { Body, Button, H1, Kicker, Surface } from "@bmkrs/ui";
import { PortalShell } from "@/components/portal-shell";

export default function JoinPage() {
  return (
    <PortalShell>
      <Surface theme="ink">
        <Kicker theme="ink">join</Kicker>
        <H1 theme="ink">apply to the network.</H1>
        <Body theme="ink" lead className="mt-6 max-w-xl">
          senior freelancers and small studios with a clear discipline, shipped work, and appetite
          for long client relationships.
        </Body>
        <div className="mt-10">
          <Button href="mailto:network@bmkrs.com?subject=network%20application">
            apply by email
          </Button>
        </div>
        <p className="mt-8 text-sm opacity-80">
          <Link href="/login">already a member? sign in</Link>
          <span aria-hidden="true"> · </span>
          <Link href="/">portal home</Link>
        </p>
      </Surface>
    </PortalShell>
  );
}
