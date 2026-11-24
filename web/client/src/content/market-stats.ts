import type { BmkStat } from "./bmk-types";

/**
 * Published figures the site quotes, in one place so every page uses the same
 * number, wording and source. Checked November 2026. When a source publishes a
 * newer edition, update the figure here (and in Sanity, where a page uses it).
 */
export const marketStats = {
  valueGap: {
    value: "37%",
    label: "of organisations can point to any impact on profit from AI, the same share as a year earlier, even though nearly nine in ten now use it.",
    source: "McKinsey, The state of AI in 2026",
    href: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
  },
  pilotToProduction: {
    value: "5%",
    label: "of custom enterprise AI tools make it into production. The rest stall as pilots.",
    source: "MIT NANDA, The GenAI Divide, 2025",
    href: "https://www.computing.co.uk/news/2025/ai/mit-report-95pc-corporate-generative-ai-pilots-fail",
  },
  agentsCancelled: {
    value: "40%+",
    label: "of agentic AI projects are expected to be cancelled by the end of 2027, through rising costs, unclear value or weak risk controls.",
    source: "Gartner, June 2025",
    href: "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027",
  },
  devTrust: {
    value: "46%",
    label: "of developers don't trust the accuracy of what their AI tools produce, up from 31% a year earlier.",
    source: "Stack Overflow Developer Survey 2025",
    href: "https://stackoverflow.co/internal/resources/2025-stack-overflow-developer-survey-for-leaders/ai-adoption",
  },
  devAdoption: {
    value: "90%",
    label: "of software professionals now use AI at work. It amplifies what's already there: strong teams get stronger, struggling ones get messier.",
    source: "Google DORA, State of AI-assisted Software Development 2025",
    href: "https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report",
  },
  searchClicks: {
    value: "8%",
    label: "of Google searches showing an AI summary end in a click on a result, against 15% when there's no summary.",
    source: "Pew Research Center, 2025",
    href: "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/",
  },
  searchCitedClicks: {
    value: "1%",
    label: "of visits to a search page with an AI summary include a click on one of the sources it cites.",
    source: "Pew Research Center, 2025",
    href: "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/",
  },
  ukAdoption: {
    value: "29%",
    label: "of UK businesses used at least one AI technology in June 2026, up 8 points in a year. Most use only one or two tools.",
    source: "ONS, Business Insights and Conditions Survey, July 2026",
    href: "https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/bulletins/businessinsightsandimpactontheukeconomy/2july2026",
  },
  finopsAi: {
    value: "98%",
    label: "of FinOps teams now manage AI spend, up from 31% two years ago. AI cost management is the skill they most need.",
    source: "FinOps Foundation, State of FinOps 2026",
    href: "https://data.finops.org/",
  },
  tokenPrices: {
    value: "280x",
    label: "fall in the price of GPT-3.5-level AI in about 18 months. Bills still rise, because usage grows faster than prices fall.",
    source: "Stanford HAI, AI Index 2025",
    href: "https://hai.stanford.edu/ai-index/2025-ai-index-report/research-and-development",
  },
  costConstraint: {
    value: "1 in 5",
    label: "organisations say AI running costs, including token costs, have held back how much they use AI.",
    source: "McKinsey, The state of AI in 2026",
    href: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
  },
} satisfies Record<string, BmkStat>;

export const statsFootnote = "Figures from published research, checked November 2026. Follow each source for the detail.";
