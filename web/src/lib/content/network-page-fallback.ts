import type { NetworkPageContent } from "@/lib/types";

export const fallbackNetworkPage: NetworkPageContent = {
  headline: "the people behind the work.",
  intro:
    "every bmkrs project is staffed from a vetted bench of senior builders, designers, writers and specialists. now the bench is open: hire from it, or earn a place on it.",
  members: [],
  disciplineTiles: [
    { title: "brand + identity", sub: "designers" },
    { title: "voice + copy", sub: "writers" },
    { title: "pr + comms", sub: "specialists" },
    { title: "web + product", sub: "engineers" },
    { title: "growth + seo", sub: "marketers" },
    { title: "delivery", sub: "leads" },
  ],
  stats: [],
  barHeadline: "one question decides it: would we put you on our own client work?",
  barSteps: [
    {
      title: "referred or apply",
      body: "most of the bench came recommended by people already on it. the rest applied and stood out.",
    },
    {
      title: "vetted on shipped work",
      body: "we review work that went live, not portfolios polished for interviews.",
    },
    {
      title: "proven on ours first",
      body: "new members work on bmkrs projects before we ever put them in yours.",
    },
  ],
  forCompanies: {
    heading: "hire from the bench.",
    body: "bring senior people in to build alongside your team. brand, voice, pr, product, with no recruitment and no ramp-up. the same people who deliver our client work, working as part of yours.",
    steps: [
      "tell us what you need",
      "we match from people we have already worked with",
      "they start in days, inside your team",
    ],
    cta: "find talent",
  },
  forSpecialists: {
    heading: "earn a place on it.",
    body: "we work with people we would stake our name on. if that is you, the work is good and the company is better.",
    steps: [
      "apply with work that shipped",
      "we vet like we are hiring for ourselves",
      "we only call when something genuinely fits",
    ],
    cta: "join the network",
  },
  connects:
    "already a client? the network is what powers motion embedded, our most hands-on tier. it is the same bench, whether we run the work or you do.",
  seo: {
    metaTitle: "the network | bmkrs.",
    metaDescription:
      "the vetted bench of senior builders, designers and specialists behind every bmkrs project. hire from it, or earn a place on it.",
  },
};
