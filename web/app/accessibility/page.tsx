import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | bmkrs',
  description: 'bmkrs\'s commitment to digital accessibility. How we design our website to meet WCAG 2.2 AA and remain usable for everyone, on any device.',
  openGraph: {
    title: 'Accessibility Statement | bmkrs',
    description: 'bmkrs\'s commitment to digital accessibility. How we design our website to meet WCAG 2.2 AA and remain usable for everyone, on any device.',
    url: 'https://bmkrs.com/accessibility',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accessibility Statement | bmkrs',
    description: 'bmkrs\'s commitment to digital accessibility. How we design our website to meet WCAG 2.2 AA and remain usable for everyone, on any device.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/accessibility',
  },
};

import Accessibility from '../../client/src/pages/accessibility';

export default function Page() {
  return <Accessibility />;
}
