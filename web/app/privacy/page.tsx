import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | bmkrs',
  description: 'bmkrs\'s privacy policy. How we collect, use, and protect your personal data in line with UK GDPR.',
  openGraph: {
    title: 'Privacy Policy | bmkrs',
    description: 'bmkrs\'s privacy policy. How we collect, use, and protect your personal data in line with UK GDPR.',
    url: 'https://bmkrs.com/privacy',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | bmkrs',
    description: 'bmkrs\'s privacy policy. How we collect, use, and protect your personal data in line with UK GDPR.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/privacy',
  },
};

import Privacy from '../../client/src/pages/privacy';

export default function Page() {
  return <Privacy />;
}
