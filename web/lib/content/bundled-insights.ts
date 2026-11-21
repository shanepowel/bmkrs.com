import type { BundledInsightSeed, InsightItem } from './types';

/**
 * Fallback articles shown when the CMS has no published insights.
 * If Sanity holds older articles, those take priority over these.
 */
export const bundledInsights: BundledInsightSeed[] = [
  {
    id: 'bmk-insight-001',
    type: 'insight' as const,
    title: 'AI tokenomics: what your AI really costs, and how to make every token count',
    slug: 'ai-tokenomics-what-your-ai-really-costs',
    status: 'published' as const,
    modifiedBy: 'system',
    version: 1,
    content: {
      description:
        'AI is billed by the token. It is cheap in a demo and surprising in production. Here is how to see where the spend goes, what it buys, and how to get the same result for less.',
      date: '2026-11-21',
      readTime: '6 min read',
      author: 'bmkrs',
      tags: ['AI', 'Tokenomics', 'Cost'],
      relatedServices: [
        { label: 'AI tokenomics', href: '/ai/tokenomics' },
        { label: 'EmberNest', href: '/ai/embernest' },
        { label: 'AI and automation', href: '/ai' },
      ],
      keyTakeaways: [
        'AI models charge per token for what goes in and what comes out, and prices vary a lot between models.',
        'The useful number is cost per outcome (per resolved ticket, per article, per merged change), not the monthly bill.',
        'Routing simple work to smaller models is usually the biggest single lever.',
        'Agents and AI coding tools need step limits, spend caps and clear scope, or they will spend for you.',
        'Measure quality before and after every change, so savings never come at the cost of worse results.',
      ],
      body: `## Cheap in the demo, surprising in production

Every time your product or your team calls an AI model, you pay for tokens: small chunks of text, roughly three quarters of a word each. You pay for what you send in and for what comes back, usually at different rates. And the price per token can differ many times over between a small, fast model and a top-tier one.

In a prototype none of this matters. A few hundred calls a day costs pennies. Then real users arrive, prompts get longer, someone pastes a whole policy document into the context "just in case", an agent starts retrying, and everyone is on the most expensive model because it was the default. The bill grows quietly, then all at once.

## The number that actually matters

Most teams can tell you their total AI spend. Very few can tell you what one resolved support ticket, one generated product description or one merged pull request cost to produce.

That is the number that matters, because it is the one you can compare to the value. If an AI-resolved ticket costs a fraction of what a human-resolved one does, scale it. If an AI feature costs more per user than the user pays you, you have a margin problem, not a technology problem.

So the first job is always the same: tag every AI call to the job it is doing, and work out cost per outcome from real usage.

## Five levers that cut cost without cutting quality

**1. Route to the right model.** Most workloads are a mix of easy and hard steps. Classifying an email, pulling a date out of a document or checking a format rarely needs your most capable model. Sending routine steps to a smaller model, and saving the big one for genuinely hard reasoning, is usually the biggest single saving.

**2. Trim and cache.** Long system prompts, repeated instructions and whole documents stuffed into context all cost money on every call. Retrieval (finding and sending only the relevant passages) beats pasting everything. Caching answers to repeated questions, and using provider prompt caching where it exists, removes cost entirely for anything asked twice.

**3. Limit the agents.** Agents decide their own next steps, which is what makes them useful and what makes them expensive. Give them step limits, spend caps and clear stop conditions, so a confused agent cannot burn through a budget overnight.

**4. Keep answers as long as they need to be.** Output tokens often cost more than input tokens. If nobody reads past the second paragraph, do not pay for the fifth.

**5. Set budgets and alerts.** Put spend limits on each feature, team or customer, with alerts well before anything gets out of hand.

## Do not forget the developers

For many organisations the fastest-growing AI line is not a customer feature at all. It is AI-assisted software development. Coding assistants and agents read and write a lot of code, and they are billed for every bit of it. Without scope and review, you pay for work that gets thrown away and for code that creates more work later.

This is where governance and tokenomics meet. Tools like EmberNest assess a codebase, turn the improvements that matter into scoped work, and tie each change to approvals and delivery evidence. The result is AI coding effort spent on the right things, and a clear line from spend to what actually shipped.

## Where to start

Measure first. A two-week token audit is usually enough to trace every AI call, put a cost per outcome on each, and ship the quick wins: routing, caching and limits. Test quality before and after every change. Then keep the cost model, because the prices, the models and your usage will all keep moving.`,
      faq: [
        {
          question: 'What does tokenomics mean in AI?',
          answer:
            'It means the economics of running AI models: what each call costs in tokens, what it delivers, and how to improve the ratio. It is not about crypto tokens.',
        },
        {
          question: 'Will using smaller models make results worse?',
          answer:
            'Not if it is done carefully. Quality should be tested before and after each change, and work only moved to a smaller model where it performs just as well for that specific task.',
        },
      ],
    },
  },
  {
    id: 'bmk-insight-002',
    type: 'insight' as const,
    title: 'AI writes the code. Who checks what it ships?',
    slug: 'governing-ai-assisted-software-delivery',
    status: 'published' as const,
    modifiedBy: 'system',
    version: 1,
    content: {
      description:
        'AI coding tools have made teams faster than their review processes. Here is how to keep the speed without letting quality, security and cost drift.',
      date: '2026-11-14',
      readTime: '5 min read',
      author: 'bmkrs',
      tags: ['AI', 'Engineering', 'EmberNest'],
      relatedServices: [
        { label: 'EmberNest', href: '/ai/embernest' },
        { label: 'AI tokenomics', href: '/ai/tokenomics' },
        { label: 'Digital products', href: '/services/products' },
      ],
      keyTakeaways: [
        'More code is not the same as better software.',
        'AI-assisted changes need the same scope, approval and evidence as any other change.',
        'Start from an assessment of the codebase, not a wish list.',
        'Governance and cost control are the same conversation for AI coding.',
      ],
      body: `## Faster than the review process

AI coding assistants and agents can now produce changes faster than most teams can review them. That is a real gain, but it moves the bottleneck. The hard question is no longer "can we build it?" but "should this change exist, and do we know what it did?"

Without some structure, three things drift. Quality, because changes pile up that nobody fully understands. Knowledge, because decisions are made inside a chat window and never recorded. And cost, because AI tools are billed for every token they read and write, including the work that gets thrown away.

## Treat AI changes like any other change

The fix is not to slow AI down. It is to give AI-assisted work the same shape as good human work: a clear reason for the change, an agreed scope, the right approval, and evidence of what was delivered.

That is the idea behind EmberNest, which describes itself as the governed delivery layer for AI-assisted software development. It assesses a codebase, turns the improvements that matter into scoped pieces of work, and ties each change to approvals and delivery evidence. The aim is to take any codebase and make it solid, then keep it that way as it evolves.

## Start from an assessment

The worst way to use AI on an old codebase is to point it at everything. The best way is to know what actually needs fixing first, prioritise it, and put AI effort there. An assessment gives you that list, and a way to show progress against it.

## Governance and cost are one conversation

Once every AI-assisted change is scoped and approved, measuring what it cost becomes straightforward. You can see what the spend on AI coding produced, and stop paying for work that was never going to ship.`,
    },
  },
  {
    id: 'bmk-insight-003',
    type: 'insight' as const,
    title: 'Two weeks to a working AI use case',
    slug: 'two-weeks-to-a-working-ai-use-case',
    status: 'published' as const,
    modifiedBy: 'system',
    version: 1,
    content: {
      description:
        'Skip the six-month AI strategy. Pick one job, prove it on real data with a real cost per run, and decide from evidence.',
      date: '2026-11-07',
      readTime: '4 min read',
      author: 'bmkrs',
      tags: ['AI', 'Sprint', 'Products'],
      relatedServices: [
        { label: 'AI and automation', href: '/ai' },
        { label: 'How we work', href: '/how-we-work' },
      ],
      keyTakeaways: [
        'Pick one job with a clear owner and a clear measure of success.',
        'Prove it on your real data, not a demo set.',
        'Know the cost per run before you decide to scale.',
        'Design the guardrails at the start, not after launch.',
      ],
      body: `## One job, not a strategy

Most AI programmes stall because they start too wide. A better start is one job that someone does every week, that takes real time, and where you would know straight away if the AI got it wrong.

## Prove it on real data

Demos on tidy sample data tell you very little. Two weeks is enough to get a working version running on your own documents, tickets or records, so you see how it behaves with the mess that real work contains.

## Put a price on it

Every prototype should come with its cost per run. Multiply that by realistic volume and compare it with the time saved. That one sum answers most "should we scale this?" questions.

## Guardrails from day one

Decide early what data the AI can see, who approves its output, what happens when it is wrong, and what it is allowed to spend. Doing this at the start is quick. Retrofitting it after launch is not.

## Then decide

At the end of two weeks you have something working, a cost, and evidence. Scale it, change it or drop it, but decide from facts rather than a slide deck.`,
    },
  },
];

export function getBundledInsights(): InsightItem[] {
  return bundledInsights.map((article) => ({
    id: article.id,
    type: 'insight' as const,
    title: article.title,
    slug: article.slug,
    content: article.content,
    status: article.status,
    modifiedBy: article.modifiedBy,
    version: article.version,
    lastModified: article.content.date ? new Date(article.content.date) : new Date(),
    createdAt: article.content.date ? new Date(article.content.date) : new Date(),
  }));
}
