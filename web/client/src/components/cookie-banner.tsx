'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import {
  AmpButton,
  Container,
  Eyebrow,
  Grid,
  Stack,
  Surface,
  Text,
} from "@/components/system";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    localStorage.setItem("analytics-cookies", "accepted");
    window.dispatchEvent(new Event("bmkrs:cookie-consent"));
    setIsVisible(false);
  };

  const handleNecessaryOnly = () => {
    localStorage.setItem("cookie-consent", "necessary");
    localStorage.setItem("analytics-cookies", "rejected");
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookie-consent", "rejected");
    localStorage.setItem("analytics-cookies", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="true"
    >
      <div className="border-t-[3px] border-[#F85C70] bg-[#181F4F]">
        <Container className="py-6">
          <Grid cols="2-lg" gap="lg" equal={false} className="items-start lg:grid-cols-[1fr_auto]">
            <div>
              <Stack direction="row" gap="sm" className="mb-3 items-start">
                <div className="mt-0.5 h-6 w-1 flex-shrink-0 rounded bg-[#F85C70]" />
                <Text variant="h4" tone="white" className="font-display font-normal">
                  This site uses cookies
                </Text>
              </Stack>
              <Text variant="small" tone="white-70" className="mb-4 max-w-[680px]">
                We use strictly necessary cookies to make this site work. With your consent, we
                also set optional analytics cookies to help us understand how you use the site so
                we can improve it. You can accept or reject optional cookies below. Your choice
                will be saved for 12 months.
              </Text>

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="amp-focus-ring-on-navy inline-flex items-center gap-1.5 rounded font-sans text-sm font-semibold text-[#F85C70] transition-colors duration-150"
                aria-expanded={showDetails}
                aria-label={showDetails ? "Hide cookie details" : "View cookie details"}
                data-testid="button-cookie-details"
              >
                {showDetails ? (
                  <>Hide cookie details <ChevronUp className="h-3.5 w-3.5" /></>
                ) : (
                  <>View cookie details <ChevronDown className="h-3.5 w-3.5" /></>
                )}
              </button>

              {showDetails && (
                <Grid cols={2} gap="md" equal={false} className="mt-4 md:grid-cols-2">
                  <Surface variant="inset" padding="md" radius="sm">
                    <Text variant="small" tone="white" className="mb-1 font-bold">
                      Strictly necessary
                    </Text>
                    <Text variant="caption" className="text-white/65">
                      Essential for the website to function. These cannot be turned off. They
                      include security, session management, and your cookie preference itself.
                      No personal data is shared with third parties.
                    </Text>
                    <Eyebrow className="mt-2">Always active</Eyebrow>
                  </Surface>
                  <Surface variant="inset" padding="md" radius="sm">
                    <Text variant="small" tone="white" className="mb-1 font-bold">
                      Analytics
                    </Text>
                    <Text variant="caption" className="text-white/65">
                      Help us understand which pages are visited and how users move through
                      the site. Data is aggregated and anonymised. Used by services such as
                      Mailchimp for visitor tracking. Only set with your consent.
                    </Text>
                    <Text variant="mono" className="mt-2 text-white/40">
                      Requires consent
                    </Text>
                  </Surface>
                </Grid>
              )}
            </div>

            <Stack gap="sm" className="lg:min-w-[220px]">
              <AmpButton
                fullWidth
                size="md"
                className="!text-[#181F4F]"
                onClick={handleAcceptAll}
                data-testid="button-accept-all-cookies"
              >
                Accept all <ArrowRight className="h-3.5 w-3.5" />
              </AmpButton>

              <AmpButton
                fullWidth
                size="md"
                variant="outlineLight"
                onClick={handleNecessaryOnly}
                data-testid="button-accept-necessary-cookies"
              >
                Necessary only
              </AmpButton>

              <AmpButton
                fullWidth
                size="md"
                variant="outlineLight"
                className="!border-white/15 !text-white/55 hover:!border-white/30 hover:!text-white/80"
                onClick={handleRejectAll}
                data-testid="button-reject-all-cookies"
              >
                Reject all optional
              </AmpButton>

              <Link href="/privacy" className="block text-center">
                <Text variant="caption" className="cursor-pointer text-white/40 underline underline-offset-2 transition-colors hover:text-white/70">
                  Privacy Policy
                </Text>
              </Link>
            </Stack>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default CookieBanner;
