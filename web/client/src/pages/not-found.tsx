'use client';

import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import {
  AmpButton,
  Container,
  Grid,
  PageShell,
  Section,
  Stack,
  Surface,
  Text,
} from "@/components/system";

export default function NotFound() {
  useEffect(() => {
    const metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (metaRobots) {
      metaRobots.content = "noindex, nofollow";
    } else {
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "noindex, nofollow";
      document.head.appendChild(meta);
    }

    return () => {
      const metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
      if (metaRobots) {
        metaRobots.content = "index, follow";
      }
    };
  }, []);

  return (
    <PageShell>
      <Section tone="white" padding="lg">
        <Container size="narrow" className="max-w-2xl text-center">
          <Stack gap="lg" align="center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#F2F0F7]">
              <AlertCircle className="h-12 w-12 text-[#F85C70]" />
            </div>
            <Text variant="h2" data-testid="text-404-title">
              404. Page Not Found
            </Text>
            <Text variant="lead" tone="muted">
              The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s get you back on track.
            </Text>

            <Surface variant="bordered" padding="lg" className="w-full text-left">
              <Stack gap="lg">
                <Grid cols={2} gap="md" equal={false} className="sm:grid-cols-2">
                  <AmpButton asChild fullWidth size="lg" data-testid="button-home">
                    <Link href="/">
                      <Home className="h-5 w-5" />
                      Go Home
                    </Link>
                  </AmpButton>
                  <AmpButton
                    fullWidth
                    size="lg"
                    variant="outlineDark"
                    onClick={() => window.history.back()}
                    data-testid="button-back"
                  >
                    <ArrowLeft className="h-5 w-5" />
                    Go Back
                  </AmpButton>
                </Grid>

                <div className="border-t border-[#E5E3EE] pt-6">
                  <Text variant="h4" className="mb-4 text-center">
                    Quick links
                  </Text>
                  <div className="flex flex-wrap justify-center gap-3">
                    <AmpButton asChild variant="ghostDark" size="sm">
                      <Link href="/services">What we make</Link>
                    </AmpButton>
                    <AmpButton asChild variant="ghostDark" size="sm">
                      <Link href="/ai">AI</Link>
                    </AmpButton>
                    <AmpButton asChild variant="ghostDark" size="sm">
                      <Link href="/our-work">Our work</Link>
                    </AmpButton>
                    <AmpButton asChild variant="ghostDark" size="sm">
                      <Link href="/contact">Contact us</Link>
                    </AmpButton>
                  </div>
                </div>
              </Stack>
            </Surface>

            <Text variant="small" tone="muted">
              Need help?{" "}
              <Link href="/contact" className="text-[#F85C70] hover:underline">
                Contact our support team
              </Link>{" "}
              or call us at +44 20 7946 0958
            </Text>
          </Stack>
        </Container>
      </Section>
    </PageShell>
  );
}
