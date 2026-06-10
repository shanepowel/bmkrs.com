import { getJournalIndex } from "@/lib/content";

import { SITE_URL } from "@/lib/og-image";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const { featured, posts } = await getJournalIndex();
  const items = [featured, ...posts].filter(Boolean);

  const rssItems = items
    .map((post) => {
      if (!post) return "";
      const url = `${SITE_URL}/journal/${post.slug}`;
      const pubDate = new Date(post.publishedAt).toUTCString();
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>bmkrs journal</title>
    <link>${SITE_URL}/journal</link>
    <description>notes on building brands: identity, voice, pr, growth and how we work.</description>
    <language>en-gb</language>
    <atom:link href="${SITE_URL}/journal/feed.xml" rel="self" type="application/rss+xml"/>
${rssItems}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
