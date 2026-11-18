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
    headline: '"we know what we want to change. we need the right first move."',
    body: "An exciting opportunity can be hard to pin down. We help you understand the real need, see what is possible and choose a clear next step.",
  },
  {
    number: "02",
    headline: '"the idea is clear. the experience is not."',
    body: "Good products make complicated things feel simple. We connect strategy, design and technology around the people who will use it.",
  },
  {
    number: "03",
    headline: '"our tools, teams and suppliers do not quite connect."',
    body: "When the parts of a business work in isolation, opportunities slip through the gaps. We bring the right people together to make the whole thing work better.",
  },
  {
    number: "04",
    headline: '"we are ready to grow, but what worked before will not get us there."',
    body: "We help businesses evolve what they have made, make better use of technology and keep creating value as they change.",
  },
];

export const homeManifesto = `the right thinking. the right people. the right things built.

Technology is not the answer to every problem. But when the right thinking meets thoughtful execution, it can change what is possible. We connect strategy, product, design and engineering so the work makes sense for people and the business behind it.`;

export const homeProcessStrip = {
  steps: "discover · design · build · grow",
  body: "we understand the opportunity, shape the right response and bring the people and technology together to make it happen. then we keep learning and improving what works.",
  footnote: "one connected team, from the first conversation to what comes next.",
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

export const workPageIntro = `a selection of the brands, products and experiences we have helped bring to life. we work closely with ambitious businesses to make meaningful things happen.`;

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
  kicker: "how we work",
  headline: "good outcomes start with understanding the challenge.",
  paragraphs: [
    "we listen, ask questions and get close to the people and context around the work. that gives us a shared understanding of what matters and where the opportunity lies.",
    "we shape the approach together, bringing the right mix of strategy, design and technology to the challenge. the work stays focused on the outcome, with decisions made in the open.",
    "the same connected team carries the work through design, build and launch. we stay close to your people and the systems around the product so the result works in everyday life.",
    "then we learn and improve. some partnerships start with one clear piece of work; others keep evolving over time. either way, we help your team move forward with confidence.",
  ],
  footnote: "explore the ways we can work together on the services page.",
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
    question: "how do we get started?",
    answer:
      "tell us what you are trying to make happen. we will listen, ask a few useful questions and suggest a sensible next step together.",
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
    "week one: we get together, set a shared focus and decide what will make the biggest difference this month.",
    "weeks two and three: we make. design, product improvements and technical delivery move forward with regular check-ins and clear decisions.",
    "week four: we look at what changed, what we learned and where to focus next. the work stays visible and the next step stays clear.",
    "then we move into the next month together. a steady rhythm, with room to respond as the business and its ambitions evolve.",
  ],
};

export const journalMastheadIntro = `notes on brands, digital products and technology from an independent creative and digital studio. thoughts, perspectives and useful ideas from the work we do and the things we notice.`;

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
    body: 'a real reply within one working day: our honest read on the opportunity, how we could help, and whether we are the right people, even when the answer is "not us".',
  },
  {
    number: "03",
    body: "if it feels like a fit, we will arrange a conversation to explore the opportunity, the people involved and what a useful next step could look like.",
  },
];

export function outcomeLineForSlug(slug: string, cmsLine?: string): string | undefined {
  return cmsLine || projectOutcomeLines[slug];
}

export function captionForProject(slug: string, title: string): string | undefined {
  return heroImageCaptions[slug] ?? title;
}
