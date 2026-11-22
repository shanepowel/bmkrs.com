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
    id: 'bmk-insight-004',
    type: 'insight' as const,
    title: "How to work out the cost per outcome of AI",
    slug: 'ai-cost-per-outcome',
    status: 'published' as const,
    modifiedBy: 'system',
    version: 1,
    content: {
      description: "Your AI bill says what you spent, not what you got. Here is a six-step method for working out the cost per outcome of any AI feature, using your own usage.",
      date: '2026-11-22',
      readTime: '5 min read',
      author: 'bmkrs',
      tags: ["AI", "Tokenomics", "Cost per outcome"],
      relatedServices: [
        { label: 'AI tokenomics', href: '/ai/tokenomics' },
        { label: 'EmberNest', href: '/ai/embernest' },
        { label: 'AI and automation', href: '/ai' },
      ],
      keyTakeaways: [
        "Cost per outcome is the cost of all the AI work behind one finished, useful result.",
        "Tag every model call to the feature and step it serves, or you can only ever see totals.",
        "Count retries, failed attempts and reasoning tokens: you paid for them.",
        "Divide by successful outcomes, not attempts, so quality improvements show up as savings.",
        "Recalculate after every change and check quality on a fixed set of test cases."
      ],
      body: `## Why the monthly bill tells you almost nothing

Your AI invoice says what you spent. It doesn't say what you got. A bill that doubled might be great news if the number of customer problems solved tripled, and terrible news if it bought the same work as last month with longer prompts.

Cost per outcome fixes that. It is the cost of all the AI work behind one finished, useful result: one resolved support ticket, one approved product description, one merged pull request, one claim processed. Once you have that number you can compare it with what the outcome is worth, with what it cost before AI, and with itself next month.

## Step 1: name the outcome

Start with the job, not the model. For each AI feature or workflow, write down the single result it exists to produce, and how you know it happened. "Ticket closed without a human reply" is an outcome. "Chat message sent" is not, because a message can be useless.

If you can't name the outcome, that's a finding in itself. It usually means the feature is being run on hope rather than evidence.

## Step 2: tag every call

Every call to a model needs a label saying which feature, workflow and step it belongs to, and ideally which customer or team triggered it. Most providers and gateways let you attach metadata to a request; if yours doesn't, log it alongside the request ID.

This is the dull part, and it is where most attempts stall. Without tags you can only ever see totals by model, which tells you how you spent money, not why.

## Step 3: count all the tokens behind one outcome

An outcome rarely takes one call. A support answer might involve a classification step, a retrieval step, a draft, a check and a rewrite. An agent might take twenty steps. Add them all up, including:

- input tokens, with system prompts, retrieved documents and conversation history
- output tokens, which are usually priced several times higher than input
- reasoning tokens, where the model is billed for thinking it doesn't show you
- retries, failed attempts and abandoned runs, because you paid for those too

Multiply by the price of each model used, net of any discounts or caching credits on your contract.

## Step 4: divide by outcomes delivered

Cost per outcome = total token cost for the workflow ÷ number of successful outcomes.

Use successful outcomes, not attempts. If the assistant resolves 600 of 1,000 conversations, the cost of the other 400 belongs to the 600 that worked. That's what keeps the number honest, and it's why improving quality often cuts cost per outcome faster than cutting token prices.

## Step 5: compare it with value

Now the number becomes useful. Put it next to:

- the cost of the same outcome done by a person or the previous process
- the revenue or margin the outcome supports, for customer-facing features
- the price the customer pays, if AI is part of what you sell

If an AI-resolved ticket costs pennies and a human one costs pounds, scale it. If an AI feature costs more per user than the user pays you, you have a pricing or design problem to fix before you grow.

## Step 6: make it move

With cost per outcome in place, every optimisation can be judged properly. Route simple steps to smaller models, trim context, cache repeat questions, cap agent steps, and shorten answers nobody reads. After each change, check quality on a fixed set of test cases and recalculate. Keep the changes that lower cost per outcome without lowering quality; roll back the rest.

## Common mistakes

**Measuring per token instead of per result.** A cheaper model that needs three attempts can cost more per outcome than a dearer one that gets it right first time.

**Ignoring the failures.** Leaving out retries and abandoned runs flatters the number and hides the most expensive problems.

**Forgetting internal AI.** AI coding tools and staff assistants often outspend customer features. They have outcomes too, such as merged changes or hours saved, and deserve the same treatment.

**Measuring once.** Model prices, your usage and your prompts all change. Cost per outcome is a dashboard, not a report.

## Where to start

Pick your two or three busiest AI workflows and run steps 1 to 5 on a week of real usage. That's usually enough to show where the money goes and which lever to pull first. If you'd like help, it's exactly what our two-week [token audit](/ai/tokenomics) does.
`,
      faq: [
        { question: "What is cost per outcome in AI?", answer: "The total token cost of all the AI calls behind one finished, useful result, such as a resolved ticket or a merged pull request, divided across the successful outcomes delivered." },
        { question: "Why not just track cost per token?", answer: "Because a cheaper model that needs several attempts can cost more per result than a dearer one that gets it right first time. Cost per outcome captures that; cost per token does not." },
      ],
    },
  },
  {
    id: 'bmk-insight-005',
    type: 'insight' as const,
    title: "FinOps for AI and AI tokenomics: who owns AI spend?",
    slug: 'finops-for-ai-and-ai-tokenomics',
    status: 'published' as const,
    modifiedBy: 'system',
    version: 1,
    content: {
      description: "AI spend has landed on the FinOps desk, but it does not behave like cloud. How FinOps for AI and AI tokenomics fit together, who owns what, and a 90-day plan.",
      date: '2026-11-22',
      readTime: '5 min read',
      author: 'bmkrs',
      tags: ["AI", "Tokenomics", "FinOps"],
      relatedServices: [
        { label: 'AI tokenomics', href: '/ai/tokenomics' },
        { label: 'EmberNest', href: '/ai/embernest' },
        { label: 'AI and automation', href: '/ai' },
      ],
      keyTakeaways: [
        "AI is billed by the token, so its cost is set in prompts, routing rules and agent design, not by servers being on.",
        "FinOps for AI is the operating model; AI tokenomics is the practice that changes what goes on the bill.",
        "Cutting AI cost without measuring quality just moves the cost somewhere else.",
        "Finance owns budgets and allocation, engineering owns the levers, product owns the outcome definitions.",
        "A 90-day plan: see it, price it, fix the obvious, then hold the line with budgets and alerts."
      ],
      body: `## AI spend has landed on the FinOps desk

For most of the last decade FinOps meant cloud: servers, storage, reserved instances and the monthly argument about who left something running. That has changed fast. AI model usage, AI coding tools and AI features inside SaaS products now show up in the same budgets, and the people who manage cloud costs are being asked to manage these too.

The trouble is that AI doesn't behave like cloud. Understanding why is the difference between controlling AI spend and just reporting on it.

## What makes AI costs different

**It's billed by the token, not the hour.** You don't pay for a machine being on. You pay for every chunk of text sent to a model and every chunk that comes back. The same feature can cost ten times more on Tuesday than Monday because users asked longer questions.

**The cost is decided in the code and the prompt.** Which model is called, how much context is attached, how long the answer is allowed to be and how many steps an agent can take are product and engineering decisions, often made once and never revisited.

**Quality and cost are tied together.** Switching to a cheaper model is easy. Knowing whether it still does the job is not. Cutting AI cost without measuring quality just moves the cost somewhere else, usually to a customer or a colleague fixing the output.

**Spend is spread everywhere.** Product features, internal assistants, developer tools, data teams and SaaS licences with AI add-ons all draw on different accounts and contracts. Shadow AI is easy to start and hard to see.

## Where AI tokenomics fits

FinOps for AI is the operating model: visibility, allocation, budgets, forecasting and accountability, applied to AI. AI tokenomics is the engineering and product practice underneath it: how tokens are actually consumed, what each outcome costs, and how to change that without hurting results.

Put simply, FinOps for AI tells you the bill and who owns it. AI tokenomics changes what goes on it.

You need both. Without FinOps, savings aren't tracked or sustained. Without tokenomics, FinOps teams can see the spend but can't change it, because the levers sit in prompts, routing rules and agent design.

## Who owns what

A setup that tends to work:

- **Finance and FinOps** own budgets, allocation and forecasting, and report AI spend as cost per outcome by feature, team and customer.
- **Engineering** owns the levers: model routing, context and caching, agent limits, and the logging that makes allocation possible.
- **Product** owns the outcome definitions and the trade-off between cost, quality and speed for each feature.
- **Leadership** gets one view that answers the only question that matters: is this spend buying results?

## The first 90 days

**Weeks 1 to 2: see it.** Find every place AI is used and paid for, including developer tools and SaaS add-ons. Tag model calls to features and teams.

**Weeks 3 to 4: price it.** Work out cost per outcome for the biggest workflows, and compare it with the value of the outcome.

**Weeks 5 to 8: fix the obvious.** Route routine steps to smaller models, trim context, cache repeat questions, cap agents, and test quality before and after each change.

**Weeks 9 to 12: hold the line.** Set budgets and alerts per feature and team, add AI to the forecast, and agree who signs off new AI usage and on what evidence.

## The point

AI is one of the few technology costs that can grow faster than the business without anyone deciding it should. Treat it with the same discipline as cloud, but use the right levers. That's what AI tokenomics is for, and it's where we spend most of our time right now. See how our [token audit](/ai/tokenomics) works, or read our guide to [working out cost per outcome](/insights/ai-cost-per-outcome).
`,
      faq: [
        { question: "What is FinOps for AI?", answer: "Applying FinOps practices such as visibility, allocation, budgets and forecasting to AI spend, including model usage, AI coding tools and AI features in SaaS products." },
        { question: "How is AI tokenomics different from FinOps for AI?", answer: "FinOps for AI tells you the bill and who owns it. AI tokenomics is the engineering and product practice that changes it: model routing, context and caching, agent limits and cost per outcome." },
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
