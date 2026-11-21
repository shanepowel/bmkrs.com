import { NextResponse } from 'next/server';
import { getInsights } from '../../lib/content/insights';

export async function GET() {
  const PRODUCTION_URL = 'https://bmkrs.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const pages = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/services', priority: '0.95', changefreq: 'monthly' },
    { path: '/services/brand', priority: '0.85', changefreq: 'monthly' },
    { path: '/services/websites', priority: '0.85', changefreq: 'monthly' },
    { path: '/services/products', priority: '0.85', changefreq: 'monthly' },
    { path: '/services/growth', priority: '0.8', changefreq: 'monthly' },
    { path: '/services/delivery', priority: '0.8', changefreq: 'monthly' },
    { path: '/ai', priority: '0.95', changefreq: 'monthly' },
    { path: '/ai/tokenomics', priority: '0.9', changefreq: 'monthly' },
    { path: '/ai/embernest', priority: '0.9', changefreq: 'monthly' },
    { path: '/for/founders', priority: '0.8', changefreq: 'monthly' },
    { path: '/for/scale-ups', priority: '0.8', changefreq: 'monthly' },
    { path: '/for/marketing-teams', priority: '0.8', changefreq: 'monthly' },
    { path: '/for/ctos', priority: '0.8', changefreq: 'monthly' },
    { path: '/our-work', priority: '0.9', changefreq: 'monthly' },
    { path: '/case-studies', priority: '0.85', changefreq: 'monthly' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/how-we-work', priority: '0.8', changefreq: 'monthly' },
    { path: '/insights', priority: '0.9', changefreq: 'weekly' },
    { path: '/careers', priority: '0.6', changefreq: 'monthly' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' },
    { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { path: '/terms', priority: '0.3', changefreq: 'yearly' },
    { path: '/accessibility', priority: '0.3', changefreq: 'yearly' },
    { path: '/modern-slavery', priority: '0.3', changefreq: 'yearly' },
  ];


  const staticEntries = pages
    .map(
      (page) => `
  <url>
    <loc>${PRODUCTION_URL}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('');

  let articleEntries = '';
  try {
    const articles = await getInsights();
    articleEntries = articles
      .filter((a) => a.slug)
      .map(
        (a) => `
  <url>
    <loc>${PRODUCTION_URL}/insights/${a.slug}</loc>
    <lastmod>${a.createdAt ? new Date(a.createdAt).toISOString().split('T')[0] : currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>`
      )
      .join('');
  } catch {
    // non-fatal - static pages still included
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">${staticEntries}${articleEntries}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
