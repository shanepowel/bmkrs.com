import type { Metadata } from 'next';
import { PressPageClient } from '../../client/src/components/press-page-client';

export const metadata: Metadata = {
  title: 'Press and brand kit | bmkrs',
  description:
    'bmkrs logos, colours, boilerplate and key facts for press and partners. Download the full brand kit.',
  alternates: { canonical: 'https://bmkrs.com/press' },
};

export default function Page() {
  return <PressPageClient />;
}
