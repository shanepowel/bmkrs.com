import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = `# bmkrs - brands, digital products and practical AI
# https://bmkrs.com

User-agent: *
Allow: /

# AI search crawlers - explicitly permitted
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Applebot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: Bytespider
Allow: /

# Training-only bots - blocked
User-agent: CCBot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: meta-externalagent
Disallow: /

# Disallow admin/internal pages
User-agent: *
Disallow: /api/

# Sitemap location
Sitemap: https://bmkrs.com/sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
