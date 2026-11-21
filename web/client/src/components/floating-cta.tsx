'use client';

import { useState, useEffect } from "react";
import { Calendar, X, MessageCircle } from "lucide-react";
import { AmpButton, Stack, Surface, Text } from "@/components/system";

interface FloatingCTAProps {
  onOpenConsultation: () => void;
}

export function FloatingCTA({ onOpenConsultation }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 500 && !isDismissed;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isExpanded && (
        <Surface
          variant="bordered"
          padding="md"
          radius="lg"
          className="animate-in slide-in-from-bottom-2 fade-in border-border/50 bg-background/95 shadow-strong backdrop-blur-lg duration-300"
        >
          <Stack gap="sm">
            <div className="flex items-center justify-between">
              <Text variant="small" className="font-medium">
                Got an idea?
              </Text>
              <button
                onClick={() => setIsExpanded(false)}
                className="amp-focus-ring rounded p-0.5 text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Close consultation menu"
                data-testid="floating-cta-close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <AmpButton
              size="sm"
              fullWidth
              className="justify-start"
              onClick={() => {
                onOpenConsultation();
                setIsExpanded(false);
              }}
              data-testid="floating-cta-book-call"
            >
              <Calendar className="h-4 w-4" />
              Book a 30-minute call
            </AmpButton>
            <Text variant="caption" tone="subtle" className="text-center">
              We reply within two working days
            </Text>
          </Stack>
        </Surface>
      )}

      <AmpButton
        size="lg"
        className="!h-14 !w-14 !rounded-full !p-0 shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-strong"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label="Book consultation"
        data-testid="floating-cta-trigger"
      >
        {isExpanded ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </AmpButton>
    </div>
  );
}
