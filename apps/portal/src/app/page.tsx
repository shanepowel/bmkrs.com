import Link from "next/link";
import { Body, Button, H1, Kicker, Surface } from "@bmkrs/ui";
import { PortalShell } from "@/components/portal-shell";

const marketingUrl = process.env.NEXT_PUBLIC_MARKETING_URL ?? "https://www.bmkrs.com";

export default function PortalHomePage() {
  return (
    <PortalShell>
      <Surface theme="ink" className="min-h-[70vh]">
        <Kicker theme="ink">network portal</Kicker>
        <H1 theme="ink">the bench, behind the brand.</H1>
        <Body theme="ink" lead className="mt-6 max-w-xl">
          hire collaborators, join the network, or sign in to manage your profile.
        </Body>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/hire">hire from the bench</Button>
          <Button href="/join" variant="ghost">
            join the network
          </Button>
          <Button href="/login" variant="ghost">
            member login
          </Button>
        </div>
        <p className="mt-12 text-sm opacity-70">
          <Link href={marketingUrl}>back to bmkrs.com</Link>
        </p>
      </Surface>
    </PortalShell>
  );
}
