import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | bmkrs',
  description: 'Terms and conditions governing use of the bmkrs website and services.',
  openGraph: {
    title: 'Terms of Use | bmkrs',
    description: 'Terms and conditions governing use of the bmkrs website and services.',
    url: 'https://bmkrs.com/terms',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use | bmkrs',
    description: 'Terms and conditions governing use of the bmkrs website and services.',
  },
  alternates: {
    canonical: 'https://bmkrs.com/terms',
  },
};

import Terms from '../../client/src/pages/terms';

export default function Page() {
  return <Terms />;
}
