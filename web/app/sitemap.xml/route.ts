import { NextResponse } from 'next/server';
import { getInsights } from '../../lib/content/insights';

export const revalidate = 3600;

const SITE = 'https://www.bmkrs.com';

/**
 * Date the page copy last changed. Keep these honest: Google ignores lastmod
 * when every URL claims to have changed today, so only bump a date when that
 * page's content really changes.
 */
const SITE_REFRESH = '2026-11-22';

const pages: { path: string; lastmod?: string }[] = [
  { path: '/' },
  { path: '/ai/tokenomics' },
  { path: '/ai' },
  { path: '/ai/embernest' },
  { path: '/services' },
  { path: '/services/brand' },
  { path: '/services/websites' },
  { path: '/services/products' },
  { path: '/services/growth' },
  { path: '/services/delivery' },
  { path: '/for/founders' },
  { path: '/for/scale-ups' },
  { path: '/for/marketing-teams' },
  { path: '/for/ctos' },
  { path: '/our-work' },
  { path: '/case-studies' },
  { path: '/about' },
  { path: '/how-we-work' },
  { path: '/insights' },
  { path: '/careers' },
  { path: '/press' },
  { path: '/contact' },
  { path: '/privacy' },
  { path: '/terms' },
  { path: '/accessibility' },
  { path: '/modern-slavery' },
];

const day = (value?: string | Date | null) => {
  if (!value) return undefined;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
};

const entry = (loc: string, lastmod?: string) =>
  `  <url>\n    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n  </url>`;

export async function GET() {
  const entries = pages.map((p) => entry(`${SITE}${p.path === '/' ? '/' : p.path}`, p.lastmod ?? SITE_REFRESH));

  try {
    const articles = await getInsights();
    for (const a of articles) {
      if (!a.slug) continue;
      const content = (a.content ?? {}) as { date?: string };
      // Prefer the last edit, then the published date; never "today".
      const lastmod = day(a.lastModified) ?? day(content.date) ?? SITE_REFRESH;
      entries.push(entry(`${SITE}/insights/${a.slug}`, lastmod > SITE_REFRESH ? lastmod : day(content.date) ?? SITE_REFRESH));
    }
  } catch {
    // Articles unavailable: still serve the core pages.
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
