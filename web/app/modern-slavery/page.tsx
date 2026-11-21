import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modern Slavery Statement | bmkrs',
  description: 'bmkrs\'s Modern Slavery and Human Trafficking Statement. Our policies, risk assessment, and due diligence approach.',
  openGraph: {
    title: 'Modern Slavery Statement | bmkrs',
    description: 'bmkrs\'s Modern Slavery and Human Trafficking Statement. Our policies, risk assessment, and due diligence approach.',
    url: 'https://bmkrs.com/modern-slavery',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Slavery Statement | bmkrs',
    description: 'bmkrs\'s Modern Slavery and Human Trafficking Statement. Our policies, risk assessment, and due diligence approach.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/modern-slavery',
  },
};

import ModernSlavery from '../../client/src/pages/modern-slavery';

export default function Page() {
  return <ModernSlavery />;
}
