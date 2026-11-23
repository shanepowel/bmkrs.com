import { NextResponse } from 'next/server';

/**
 * One group per crawler. A crawler obeys only the most specific group that
 * names it, so every group repeats the private paths.
 */
const PRIVATE = ['/api/', '/studio'];
const allow = (agents: string[]) =>
  `${agents.map((a) => `User-agent: ${a}`).join('\n')}\nAllow: /\n${PRIVATE.map((p) => `Disallow: ${p}`).join('\n')}`;

export async function GET() {
  const body = `# bmkrs: AI tokenomics, practical AI and digital products
# https://www.bmkrs.com

${allow(['*'])}

# AI search and answer engines: welcome
${allow(['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended', 'Applebot', 'Amazonbot'])}

# Bulk training-only crawlers: not permitted
User-agent: CCBot
User-agent: Applebot-Extended
User-agent: meta-externalagent
User-agent: Bytespider
Disallow: /

Sitemap: https://www.bmkrs.com/sitemap.xml
`;

  return new NextResponse(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
}
