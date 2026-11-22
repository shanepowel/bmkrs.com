import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modern Slavery Statement | bmkrs',
  description: 'bmkrs\'s Modern Slavery and Human Trafficking Statement. Our policies, risk assessment, and due diligence approach.',
  openGraph: {
    title: 'Modern Slavery Statement | bmkrs',
    description: 'bmkrs\'s Modern Slavery and Human Trafficking Statement. Our policies, risk assessment, and due diligence approach.',
    url: 'https://www.bmkrs.com/modern-slavery',
    siteName: 'bmkrs',
    type: 'website',
    locale: 'en_GB',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'bmkrs' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
    title: 'Modern Slavery Statement | bmkrs',
    description: 'bmkrs\'s Modern Slavery and Human Trafficking Statement. Our policies, risk assessment, and due diligence approach.',
  },
  alternates: {
    canonical: 'https://www.bmkrs.com/modern-slavery',
  },
};

import ModernSlavery from '../../client/src/pages/modern-slavery';

export default function Page() {
  return <ModernSlavery />;
}
