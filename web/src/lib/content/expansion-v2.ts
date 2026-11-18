/** Content expansion pack v2: problem-led copy for sitewide sections. */

export type PainPoint = {
  number: string;
  headline: string;
  body: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type WhatHappensNextStep = {
  number: string;
  body: string;
};

export const homePainPoints: PainPoint[] = [
  {
    number: "01",
    headline: '"we have ai pilots. nothing in production."',
    body: "the demos look good. the board has seen the slides. users still do the work by hand. the gap is almost never the model. it is product, governance and the operating model around them.",
  },
  {
    number: "02",
    headline: '"five suppliers, no one accountable for the product."',
    body: "a strategy firm, a build shop, a data team, a change partner, and you in the middle translating. when results disappoint, everyone blames the brief. one delivery team ends that conversation.",
  },
  {
    number: "03",
    headline: '"we need ai, but we cannot bypass governance."',
    body: "regulated, programme-heavy, or just careful. you cannot skip stage gates for a chatbot. you need implementation that plugs into the controls you already have.",
  },
  {
    number: "04",
    headline: '"the product shipped. the team cannot run it."',
    body: "handover was a pdf. knowledge left with the agency. every change means re-briefing strangers. capability transfer was never in the scope, and now it shows.",
  },
];

export const homeManifesto = `most ai ambition dies in the pilot. we spent seventeen years shipping products inside organisations where failure is expensive, and watched the same pattern: good ideas, weak product, no governance, no one left who can run it.

it is not a model problem. it is a delivery problem, and it is fixable. so we build the product and the ai that powers it, with the controls and the handover baked in. one team, assess to amplify, because the gaps between agencies are where production goes quiet.`;

export const homeProcessStrip = {
  steps: "assess → implement → amplify → stay",
  body: "we start with readiness, value and risk, not a build backlog. then we ship digital products and ai systems inside your change gates. then we transfer capability: training, operating model, documentation your team can use. then, if you want us, we stay in motion.",
  footnote:
    "fixed scope. fixed timeline. one point of contact. prices on the services page.",
};

export const heroImageCaptions: Record<string, string> = {
  copa: "copa, off the shore · brand + identity · a beach bar that needed to feel like a place, not a logo",
  fdb: "floare din banat · ecommerce · romanian craft, told properly for a uk audience",
  "freelance-near-me":
    "freelance near me · built in the studio · our own marketplace, our own medicine",
  "podcast-studio-london":
    "podcast studio london · digital product · proof before the booking call",
  "three18-media":
    "three18 media · digital product · shipped work, named clients, published prices",
  "data-deep-clean":
    "data deep clean · built in the studio · see the exposure, then keep clearing it",
};

export const workPageIntro = `every project on this shelf shipped. some are client work, some are products we built and run ourselves, and we show both, because a product studio should live with its own advice. no spec work, no concepts, no coming soon. what you see is what went out the door.`;

/** Card outcome lines keyed by project slug. */
export const projectOutcomeLines: Record<string, string> = {
  fdb: "22% lift in store conversion after the rebuild",
  copa: "a bar people now describe the way it wanted to be described",
  "podcast-studio-london": "a site that proves the reel before you book the room",
  "freelance-near-me": "the marketplace we built to prove the point",
  carter: "a portfolio that finally reads like the work behind it",
  flipster: "a premium identity in a category most brands get wrong",
  smoothies: "a first site that made the range legible on day one",
  wanderlust: "a design language the studio can deploy without starting from scratch",
  "david-wheeler-psychology": "a practice brand built for trust before the first session",
  "three18-media": "shipped work, named clients and prices in the open",
  "data-deep-clean": "free exposure scan, then removals that keep checking",
};

export const workHowProjectRuns = {
  kicker: "behind the shelf",
  headline: "what actually happens between hello and production.",
  paragraphs: [
    "week one is assessment. we get under the skin of the product, the data, the risk appetite and the governance you cannot change. no build happens this week, on purpose.",
    "then decisions. use cases, architecture, controls, the one sentence that decides what ships first. written down and signed off before a sprint starts.",
    "then making. digital product and ai implementation by the people who made the decisions. nothing gets lost in translation because there is no translation.",
    "then amplify. handover, training and an operating model your team can run. if you want us to stay, motion keeps the product and the ai moving month after month.",
  ],
  footnote:
    "every engagement is fixed scope with one point of contact. the packages and prices are on the services page →",
};

export type DisciplineExpansion = {
  symptom: string;
  craft: string;
  outcome: string;
};

export const disciplineExpansion: Record<string, DisciplineExpansion> = {
  "digital product": {
    symptom:
      "the roadmap is full and nothing useful reaches users. the site or app undoes the strategy. every release needs a new vendor brief.",
    craft:
      "we design and ship the product: discovery, ux, architecture, build and measurement, with one primary outcome per release.",
    outcome:
      "a product people can use, a team that understands it, and a paper trail that shows what moved.",
  },
  "ai implementation": {
    symptom:
      "pilots multiply, production does not. use cases were chosen for demos, not value. nobody owns the path through change control.",
    craft:
      "we prioritise use cases, prove them fast, then deploy with governance gates built in, inside your pmo and release process.",
    outcome:
      "ai that users touch every week, with accountability your board can follow.",
  },
  "ai governance": {
    symptom:
      "pressure to adopt ai without a framework that survives audit. policy is a slide. risk sits in someone's head.",
    craft:
      "readiness assessments, responsible ai policy, regulatory alignment and board reporting before implementation starts.",
    outcome:
      "controls your auditors can verify and a path for delivery that does not bypass them.",
  },
  "onboard + operate": {
    symptom:
      "the build ends and capability walks out the door. every change means calling the agency back.",
    craft:
      "training, centres of excellence, product ownership and an operating model designed for the day after we leave.",
    outcome:
      "your people can run, improve and explain the system without us, unless you choose motion.",
  },
};

export const servicesDesignPhilosophy = {
  kicker: "how we think about product",
  headline: "production is the product.",
  body: `everything we make answers one question first: will this work in the hands of real users, under real controls? if the answer is "it demoed well", it does not ship. architecture is chosen for change and audit. models get a job before they get a slide. interfaces are built around the five seconds a user actually gives you.

that is what builders means in practice: product rigour pointed at ai and digital delivery. we measure the work by what stayed in production, not by how the pilot photographed.`,
};

export const servicesFaq: FaqItem[] = [
  {
    question: "how long does a project take?",
    answer:
      "readiness is usually one week. product and ai builds run four to twelve weeks depending on scope. you will know which package fits, and what it costs, by the end of the first call.",
  },
  {
    question: "what does it cost?",
    answer:
      "every package carries a from price on this page. if budget and ambition do not match, we say so before any money moves. no discovery theatre.",
  },
  {
    question: "do you only do ai?",
    answer:
      "no. we ship digital products. ai is often how those products win, so governance and implementation sit next to the build, not in a separate consultancy.",
  },
  {
    question: "will our team be able to run it after?",
    answer:
      "yes. amplify is part of every engagement: documentation, training and an operating model. if you want us to stay, that is motion.",
  },
  {
    question: "what do you need from us?",
    answer:
      "honesty, decisions, and one person empowered to make them. access to the systems and stakeholders the product has to live inside. projects stall on committees, not on work.",
  },
  {
    question: "what if you think we are wrong about what we need?",
    answer:
      'we tell you. it is in the first call, in writing, and occasionally it costs us the project. cheaper for you to hear it then than after the invoice.',
  },
];

export const motionSignals: string[] = [
  "the product launched and improvement stalled",
  "ai work happens in bursts: a pilot, then silence, then panic",
  "every change means re-briefing someone from scratch",
  "you know what needs doing and nobody owns doing it",
];

export const motionMonthInMotion = {
  kicker: "what it actually looks like",
  headline: "a month in motion.",
  paragraphs: [
    "week one: we plan. what the product and ai estate needs this month, decided together, written down, with one primary objective. not a backlog. a bet.",
    "weeks two and three: we make. product changes, model work, integrations, content, whatever the plan called for, shipped as it is finished.",
    "week four: we report. what shipped, what moved, what we would do differently, in plain language with numbers, in a document you can forward without editing.",
    "then we plan again. that is the whole rhythm. no retainer mystery, no activity theatre. a team in motion and a paper trail that proves it.",
  ],
};

export const journalMastheadIntro = `notes from a digital product studio that also puts ai into production. one argument, made from different angles: pilots are not progress, governance is not optional, and handover is part of the build. no filler, no funnels. if a post would not change what you do on monday, we do not publish it.`;

export const journalCategoryDescriptions: Record<string, string> = {
  brand: "deciding who you are, then making it visible",
  voice: "how products talk, and the words they should ban",
  pr: "earning attention instead of renting it",
  growth: "what happens after people notice you",
  studio: "how we work, told honestly, including the mistakes",
};

export const contactWhatHappensNext: WhatHappensNextStep[] = [
  { number: "01", body: "a real person reads it. usually shane, the same day." },
  {
    number: "02",
    body: 'a real reply within one working day: our honest read on what you need, what it would cost, and whether we are the right people, even when the answer is "not us".',
  },
  {
    number: "03",
    body: "if it fits, a 30-minute call. no deck, no discovery theatre. just the questions that decide whether this works: what you are building, what must stay governed, and what done looks like.",
  },
];

export const contactBudgetReassurance =
  "the budget question is optional and changes nothing about the reply. it just lets us answer with the right-sized plan first instead of third.";

export function outcomeLineForSlug(slug: string, cmsLine?: string): string | undefined {
  return cmsLine || projectOutcomeLines[slug];
}

export function captionForProject(slug: string, _title: string): string | undefined {
  return heroImageCaptions[slug];
}
