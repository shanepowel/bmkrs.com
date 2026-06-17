import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
import { Body, H1, Surface } from "@bmkrs/ui";
import { PortalShell } from "@/components/portal-shell";

export default function LoginPage() {
  const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  return (
    <PortalShell>
      <Surface theme="paper" className="min-h-[70vh]">
        <H1 theme="paper">member login</H1>
        {clerkKey ? (
          <div className="mt-8 flex justify-center">
            <SignIn routing="path" path="/login" signUpUrl="/join" />
          </div>
        ) : (
          <Body theme="paper" className="mt-6 max-w-lg">
            clerk is not configured yet. set{" "}
            <code className="text-sm">NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> and{" "}
            <code className="text-sm">CLERK_SECRET_KEY</code> on Vercel, then redeploy.
          </Body>
        )}
        <p className="mt-8 text-sm">
          <Link href="/">back to portal home</Link>
        </p>
      </Surface>
    </PortalShell>
  );
}
