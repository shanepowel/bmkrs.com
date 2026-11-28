import type { Metadata } from 'next';
import { Archivo, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { AnalyticsScripts } from '../client/src/components/analytics-scripts';
import { Providers } from '../client/src/components/providers';
import { brand } from '../client/src/lib/brand';

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-archivo',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-plex-mono',
});

const organisationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${brand.url}/#organisation`,
      name: brand.name,
      legalName: brand.legalName,
      url: brand.url,
      logo: {
        '@type': 'ImageObject',
        url: `${brand.url}/brand/bmkrs-avatar-512.png`,
        width: 512,
        height: 512,
      },
      description: brand.description,
      foundingDate: brand.foundingYear,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '128 City Road',
        addressLocality: 'London',
        postalCode: 'EC1V 2NX',
        addressCountry: 'GB',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: brand.email,
        contactType: 'customer service',
      },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      knowsAbout: [
        'AI tokenomics',
        'AI cost optimisation',
        'LLM cost management',
        'FinOps for AI',
        'AI governance',
        'AI-assisted software delivery',
        'Digital Products',
        'Product Strategy',
        'Brand Identity',
        'Product Design',
        'Software Engineering',
        'AI Implementation',
        'Automation',
        'Websites and Platforms',
        'Growth Marketing',
        'Delivery Leadership',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${brand.name} Services`,
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI token audit', url: `${brand.url}/ai/tokenomics` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Sprint', url: `${brand.url}/ai` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'EmberNest implementation', url: `${brand.url}/ai/embernest` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sprint' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Build' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Crew' } },
        ],
      },
      sameAs: [brand.social.linkedin, brand.social.instagram],
    },
    {
      '@type': 'WebSite',
      '@id': `${brand.url}/#website`,
      url: brand.url,
      name: brand.name,
      description: brand.tagline,
      publisher: { '@id': `${brand.url}/#organisation` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: brand.metaTitle,
  description: brand.metaDescription,
  openGraph: {
    title: brand.metaTitle,
    description: brand.metaDescription,
    url: brand.url,
    siteName: brand.name,
    images: [{ url: '/og-image.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: brand.metaTitle,
    description: brand.metaDescription,
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: light)' },
      { url: '/icon-light.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" suppressHydrationWarning className={`${archivo.variable} ${plexMono.variable}`}>
      <body className={archivo.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }}
        />
        <Providers>{children}</Providers>
        <AnalyticsScripts />
      </body>
    </html>
  );
}
