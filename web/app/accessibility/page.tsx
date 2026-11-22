import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | bmkrs',
  description: 'bmkrs\'s commitment to digital accessibility. How we design our website to meet WCAG 2.2 AA and remain usable for everyone, on any device.',
  openGraph: {
    title: 'Accessibility Statement | bmkrs',
    description: 'bmkrs\'s commitment to digital accessibility. How we design our website to meet WCAG 2.2 AA and remain usable for everyone, on any device.',
    url: 'https://www.bmkrs.com/accessibility',
    siteName: 'bmkrs',
    type: 'website',
    locale: 'en_GB',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'bmkrs' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
    title: 'Accessibility Statement | bmkrs',
    description: 'bmkrs\'s commitment to digital accessibility. How we design our website to meet WCAG 2.2 AA and remain usable for everyone, on any device.',
  },
  alternates: {
    canonical: 'https://www.bmkrs.com/accessibility',
  },
};

import Accessibility from '../../client/src/pages/accessibility';

export default function Page() {
  return <Accessibility />;
}
