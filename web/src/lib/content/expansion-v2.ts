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
    headline: '"the product is better than the numbers."',
    body: "you built something genuinely good and the market shrugged. the gap is almost never the product. it is the story, the name, the site, the way nobody can repeat what you do in one sentence.",
  },
  {
    number: "02",
    headline: '"we have five suppliers and no accountability."',
    body: "a brand agency, a web agency, a copywriter, a pr freelancer, and you in the middle translating. when results disappoint, everyone blames the brief. one team ends that conversation.",
  },
  {
    number: "03",
    headline: '"we are launching and we have no story."',
    body: "the build is on track, the announcement is a blank page, and the date is not moving. launches are won in the six weeks before launch day. that window is our home ground.",
  },
  {
    number: "04",
    headline: '"we look fine and sound like everyone."',
    body: "the identity is passable, but the website reads like the competitor's, the deck reads like the website, and nothing is ownable. that is a voice problem, and it is the cheapest big problem you can fix.",
  },
];

export const homeManifesto = `the best product does not win. the best-told one does. we spent seventeen years building products inside organisations where failure is expensive, and watched it happen on repeat: brilliant things losing to clearer stories, sharper names, tighter sites.

it is not fair. it is also fixable, and fixing it is the entire job. so we build the story and the thing that carries it: the brand and the product, the launch and what comes after. one team, all the way through, because the gaps between agencies are where good brands go quiet.`;

export const homeProcessStrip = {
  steps: "listen → decide → make → ship → stay",
  body: "we start with the business, not the brief. then the decisions everything else obeys: positioning, audience, the one-line answer. then we build, properly, the same people end to end. then we launch it like we mean it. then, if you want us, we stay in motion.",
  footnote:
    "fixed scope. fixed timeline. one point of contact. prices on the services page.",
};

export const heroImageCaptions: Record<string, string> = {
  copa: "copa, off the shore · brand + identity · a beach bar that needed to feel like a place, not a logo",
  fdb: "floare din banat · ecommerce · romanian craft, told properly for a uk audience",
  "freelance-near-me":
    "freelance near me · built in the studio · our own marketplace, our own medicine",
};

export const workPageIntro = `every project on this shelf shipped. some are client work, some are products we built and run ourselves, and we show both, because a brand company run by builders should have its own things to point at. no spec work, no concepts, no coming soon. what you see is what went out the door.`;

/** Card outcome lines keyed by project slug. */
export const projectOutcomeLines: Record<string, string> = {
  fdb: "22% lift in store conversion after the rebuild",
  copa: "a bar people now describe the way it wanted to be described",
  "podcast-studio-london": "expertise you can read before you book a session",
  "freelance-near-me": "the marketplace we built to prove the point",
  carter: "a portfolio that finally reads like the work behind it",
  flipster: "a premium identity in a category most brands get wrong",
  smoothies: "a first site that made the range legible on day one",
  wanderlust: "a design language the studio can deploy without starting from scratch",
  "david-wheeler-psychology": "a practice brand built for trust before the first session",
  "three18-media": "a sharper story for a production company with the reel to back it",
};

export const workHowProjectRuns = {
  kicker: "behind the shelf",
  headline: "what actually happens between hello and launch.",
  paragraphs: [
    "week one is questions. we get under the skin of the business: what is true, what is changing, what you are actually selling, what the market thinks you are selling. the gap between those last two is usually the whole project. no design happens this week, on purpose.",
    "then decisions. positioning, audience, the one sentence that does the work of a deck. this is the part most studios skip, and the part everything else depends on. it gets written down and signed off before a single pixel moves.",
    "then making. identity, voice, site, launch materials, built by the people who made the decisions. nothing gets lost in translation because there is no translation.",
    "then shipping. a launch is a project, not a button. we plan the six weeks before it, run the day itself, and measure what actually happened, then tell you, plainly, including the parts that underperformed.",
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
  "brand + identity": {
    symptom:
      "people meet the product before they get it. the name needs explaining. the pitch changes depending on who is giving it. you are about to raise, launch, or enter a market and the current brand will not stretch.",
    craft:
      "we decide who you are before we make anything visible. positioning, naming, the visual world, in that order, because design that starts before the thinking is decoration. sarah leads it, and she will tell you on the first call if you do not need it.",
    outcome:
      "you stop explaining and start being recognised. the pitch is one sentence everyone gives the same way. price conversations get easier, because brands people believe in do not compete on cost.",
  },
  "voice + messaging": {
    symptom:
      "you look fine and sound like everyone. the website, the deck and the founder all describe the company differently. your copy is technically accurate and nobody remembers a word of it.",
    craft:
      "we define how you talk. the words you own, the words you ban, the messaging hierarchy that decides what leads and what supports. marcus runs it; everything he writes has to survive being said out loud.",
    outcome:
      "every page, post and pitch starts reinforcing the same idea instead of reinventing it. content gets faster and cheaper to make because nobody is guessing anymore. and you become quotable, which is where pr starts working.",
  },
  "pr + communications": {
    symptom:
      'you are launching into silence. competitors with worse products get the coverage. the founder has real opinions and zero footprint. "we should do pr" has been in the meeting notes for a year.',
    craft:
      "angle first, always. we find the story a journalist actually wants, identify the handful of writers who cover your space, and pitch like humans. george leads it. one right journalist beats a hundred wrong ones, and we have the inbox receipts.",
    outcome:
      "coverage that moves the business, not mentions that decorate a slide. a founder people quote. and a launch that lands on a warmed audience instead of a cold one.",
  },
  "product, web + growth": {
    symptom:
      'the brand work stops at a pdf and the website undoes it. traffic arrives and does not convert. you are paying for clicks a stronger brand would get free. agencies keep reporting activity instead of outcomes.',
    craft:
      'we build the thing. sites, stores, products, landing pages, and the campaigns that fill them, every campaign with one primary metric so "did it work" has an answer. melissa ships it. this is the part most brand studios cannot do, and the reason the rest of our work survives contact with reality.',
    outcome:
      "the site converts because the message and the design were made together. acquisition gets cheaper as the brand compounds. and you get one accountable answer, monthly, on what moved.",
  },
};

export const servicesDesignPhilosophy = {
  kicker: "how we think about design",
  headline: "design is a decision, not a decoration.",
  body: `everything we make answers one question first: what is this for? if the answer is "it looks good", it does not ship. type is chosen for what it says about you at 140 pixels tall. colour gets a job before it gets a hex code. layouts are built around the five seconds a visitor actually gives you.

that is what "run by builders" means in practice: product rigour, pointed at how the product is seen. we measure our design the way we measure everything else, by what it changed, not by how it photographed.`,
};

export const servicesFaq: FaqItem[] = [
  {
    question: "how long does a project take?",
    answer:
      "the fixed-scope products run two to eight weeks depending on the package. you will know which is yours, and what it costs, by the end of the first call.",
  },
  {
    question: "what does it cost?",
    answer:
      "every package carries a from price on this page. if budget and ambition do not match, we say so before any money moves. no discovery theatre.",
  },
  {
    question: "do you work outside the uk?",
    answer: "yes. london is home; the work travels fine.",
  },
  {
    question: "what if we only need one thing?",
    answer:
      "buy one thing. the packages stand alone; they just compound when combined, which is why most people who start with one come back for another.",
  },
  {
    question: "what do you need from us?",
    answer:
      "honesty, decisions, and one person empowered to make them. projects stall on committees, not on work.",
  },
  {
    question: "what if you think we are wrong about what we need?",
    answer:
      'we tell you. it is in the first call, in writing, and occasionally it costs us the project. cheaper for you to hear it then than after the invoice.',
  },
];

export const motionSignals: string[] = [
  "the brand was great at launch and has not moved since",
  "marketing happens in bursts: a sprint, then silence, then panic",
  "every new asset means re-briefing someone from scratch",
  "you know what needs doing and nobody owns doing it",
];

export const motionMonthInMotion = {
  kicker: "what it actually looks like",
  headline: "a month in motion.",
  paragraphs: [
    "week one: we plan. what the brand needs this month, decided together, written down, with one primary objective. not a backlog. a bet.",
    "weeks two and three: we make. design, words, pages, campaigns, press, whatever the plan called for, shipped as it is finished, not hoarded for a reveal.",
    "week four: we report. what shipped, what moved, what we would do differently, in plain language with numbers, in a document you can forward to your board without editing.",
    "then we plan again. that is the whole rhythm. no retainer mystery, no activity theatre. a team in motion and a paper trail that proves it.",
  ],
};

export const journalMastheadIntro = `notes from a brand company run by builders. one argument, made from different angles: the better-told brand wins, and being better-told is a craft you can buy, learn, or steal from these pages. no filler, no funnels, no five trends for 2026. if a post would not change what you do on monday, we do not publish it.`;

export const journalCategoryDescriptions: Record<string, string> = {
  brand: "deciding who you are, then making it visible",
  voice: "how brands talk, and the words they should ban",
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
    body: "if it fits, a 30-minute call. no deck, no discovery theatre. just the questions that decide whether this works: what you are building, what is in the way, and what done looks like.",
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
