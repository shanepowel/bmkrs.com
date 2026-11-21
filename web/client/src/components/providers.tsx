'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { ScrollProgress } from '@/components/scroll-progress';
import { ConsultationContext } from '@/lib/consultation-context';

const ConsultationModal = dynamic(
  () => import('@/components/consultation-modal'),
  { ssr: false }
);

const CookieBanner = dynamic(
  () => import('@/components/cookie-banner'),
  { ssr: false }
);

const FloatingCTA = dynamic(
  () => import('@/components/floating-cta').then(m => ({ default: m.FloatingCTA })),
  { ssr: false }
);

const CursorSpotlight = dynamic(
  () => import('@/components/cursor-spotlight').then(m => ({ default: m.CursorSpotlight })),
  { ssr: false }
);

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState<string>('');
  const [modalMounted, setModalMounted] = useState(false);

  const openConsultation = (serviceType?: string) => {
    setSelectedServiceType(serviceType || '');
    setModalMounted(true);
    setIsConsultationOpen(true);
  };

  const closeConsultation = () => {
    setIsConsultationOpen(false);
    setSelectedServiceType('');
  };

  // The Sanity Studio route (/studio) renders full-screen and must not be
  // wrapped in the site chrome (navigation, footer, floating CTA, etc.).
  // All hooks above run unconditionally to satisfy the Rules of Hooks.
  if (pathname?.startsWith('/studio')) {
    return <>{children}</>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <ConsultationContext.Provider value={{ openConsultation }}>
            <div className="min-h-screen flex flex-col">
              <a
                href="#main-content"
                className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
              >
                Skip to main content
              </a>
              <ScrollProgress />
              <Navigation onOpenConsultation={openConsultation} />
              <main id="main-content" className="flex-1">
                {children}
              </main>
              <Footer />
              {modalMounted && (
                <ConsultationModal
                  isOpen={isConsultationOpen}
                  onClose={closeConsultation}
                  serviceType={selectedServiceType}
                />
              )}
              <CookieBanner />
              <ScrollToTop />
              <FloatingCTA onOpenConsultation={() => openConsultation()} />
              <CursorSpotlight />
            </div>
            <Toaster />
          </ConsultationContext.Provider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
