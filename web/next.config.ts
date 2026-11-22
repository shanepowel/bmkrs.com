import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  serverExternalPackages: ['isomorphic-dompurify', 'pdfkit'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    const r = (source: string, destination: string) => ({ source, destination, permanent: true });
    return [
      r('/ai-governance', '/ai/embernest'),
      r('/ai-implementation', '/ai'),
      r('/structured-delivery', '/services/delivery'),
      r('/capability', '/services'),
      r('/coaching', '/services'),
      r('/org-design', '/services'),
      r('/transformation', '/services/products'),
      r('/engagements', '/services'),
      r('/engagements/:slug*', '/services'),
      r('/sectors/technology', '/for/scale-ups'),
      r('/sectors/:slug*', '/for/ctos'),
      r('/for-cios', '/for/ctos'),
      r('/for-delivery-directors', '/for/ctos'),
      r('/for-digital-leads', '/for/ctos'),
      r('/teams', '/services/delivery'),
      r('/amp-store', '/our-work'),
      r('/what-we-believe', '/about'),
      r('/about/team', '/about'),
      r('/about/methodology', '/how-we-work'),
      // URLs from the previous bmkrs.com site, so indexed pages and links keep working after go-live.
      r('/motion', '/services'),
      r('/network', '/about'),
      r('/work', '/our-work'),
      r('/work/:slug(freelance-near-me|viralyz|three18-media|data-deep-clean|kaizened|podcast-studio-london)', '/our-work'),
      r('/work/:slug*', '/case-studies'),
      r('/journal', '/insights'),
      r('/journal/feed.xml', '/insights'),
      r('/journal/category/:slug*', '/insights'),
      r('/journal/:slug*', '/insights'),
      r('/legal/privacy', '/privacy'),
      r('/legal/terms', '/terms'),
      r('/legal/cookies', '/privacy'),
      r('/legal', '/privacy'),
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
        ],
      },
    ];
  },
  turbopack: {
    resolveAlias: {
      '@/*': ['./client/src/*'],
      '@assets/*': ['./client/src/assets/*'],
      '@shared/*': ['./shared/*'],
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'client/src'),
      '@assets': path.resolve(__dirname, 'client/src/assets'),
      '@shared': path.resolve(__dirname, 'shared'),
    };
    return config;
  },
};

export default nextConfig;
