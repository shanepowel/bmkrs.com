import type { Metadata } from 'next';
import { Archivo, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { AnalyticsScripts, GoogleTagManagerNoScript } from '../client/src/components/analytics-scripts';
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
        url: `${brand.url}/favicon.png`,
        width: 200,
        height: 60,
      },
      description: brand.description,
      foundingDate: brand.foundingYear,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7 Bell Yard',
        addressLocality: 'London',
        postalCode: 'WC2A 2JR',
        addressCountry: 'GB',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: brand.email,
        contactType: 'customer service',
      },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      knowsAbout: [
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
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${brand.url}/insights?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
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
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${archivo.variable} ${plexMono.variable}`}>
      <body className={archivo.className}>
        <GoogleTagManagerNoScript />
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
