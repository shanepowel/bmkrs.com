import { NextResponse } from 'next/server';
import { getInsights } from '../../lib/content/insights';

const SITE = 'https://www.bmkrs.com';

/** A plain-text map of the site for AI assistants and AI search (llms.txt convention). */
export async function GET() {
  let articles = '';
  try {
    const items = await getInsights();
    articles = items
      .filter((a) => a.slug)
      .map((a) => {
        const desc = (a.content as { description?: string })?.description;
        return `- [${a.title}](${SITE}/insights/${a.slug})${desc ? `: ${desc}` : ''}`;
      })
      .join('\n');
  } catch {
    articles = '';
  }

  const body = `# bmkrs

> bmkrs is a small, senior UK studio. Our main focus is AI tokenomics: helping organisations measure the cost per outcome of their AI, cut LLM and token spend with model routing, caching, leaner prompts and agent limits, and set budgets that hold as usage grows. We also build practical AI, digital products and brands, and implement EmberNest for governed AI-assisted software delivery.

## AI tokenomics and AI costs

- [AI tokenomics](${SITE}/ai/tokenomics): what AI tokenomics is, the six levers we use to cut AI token costs, a worked cost per outcome example, and our two-week token audit.
- [EmberNest](${SITE}/ai/embernest): governed AI-assisted software delivery, keeping AI coding spend on the work that matters.
- [AI and automation](${SITE}/ai): assistants, agents, automation and AI features, each built with a clear cost per outcome.

## Guides

${articles}

## Services

- [What we do](${SITE}/services): Sprint, Build and Crew engagements.
- [Digital products](${SITE}/services/products)
- [Websites and platforms](${SITE}/services/websites)
- [Brand](${SITE}/services/brand)
- [Growth](${SITE}/services/growth)
- [Delivery](${SITE}/services/delivery)

## Company

- [What we've made](${SITE}/our-work): EmberNest, Viralyz, FreelanceNearMe and OneScope.
- [About](${SITE}/about)
- [How we work](${SITE}/how-we-work)
- [Press and brand kit](${SITE}/press)
- [Contact](${SITE}/contact): hello@bmkrs.com
`;

  return new NextResponse(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
}
