import type { AboutPageContent, NowBuildingContent, Person, Product, TeamMember } from "@/lib/types";
import { authorBios } from "./author-bios";
import { fallbackPosts } from "./journal-posts-fallback";

export { fallbackPosts };

export const fallbackProducts: Product[] = [
  {
    slug: "readiness",
    name: "readiness",
    tier: "start",
    tagline:
      "a one-week assessment of product, ai opportunity and governance maturity, with a plan you can act on monday.",
    forWho:
      "product and transformation leaders who need an honest read before committing to a build or an ai programme.",
    included: [
      "product and journey audit",
      "ai use-case and risk scan",
      "governance maturity check",
      "a prioritised action plan",
      "a sixty-minute readout with your team",
    ],
    shape: "one week, fixed scope.",
    outcome:
      "you will know what to build, what to govern first, and what not to touch yet. if the answer is \"you do not need us,\" we say so.",
    price: "£2,500",
    priceQualifier: "fixed",
    creditNote:
      "if you go on to a make package within ninety days, the readiness fee comes off the price.",
    order: 1,
    featured: true,
  },
  {
    slug: "product-build",
    name: "product build",
    tier: "make",
    tagline:
      "digital products and platforms shipped end to end: discovery, design, build and measurement.",
    forWho: "teams who need a product in users' hands, not another prototype deck.",
    included: [
      "discovery and product strategy",
      "ux, architecture and build",
      "integrations and analytics",
      "launch plan",
      "handover your team can run",
    ],
    shape: "six to twelve weeks.",
    price: "£24,000",
    priceQualifier: "from",
    outcome:
      "a product in production, with one primary metric and a team that knows how to keep shipping.",
    proof: [
      { title: "podcast studio london", slug: "podcast-studio-london" },
      { title: "three18 media", slug: "three18-media" },
      { title: "floare din banat", slug: "fdb" },
      { title: "freelance near me", slug: "freelance-near-me" },
      { title: "data deep clean", slug: "data-deep-clean" },
    ],
    order: 2,
    featured: true,
  },
  {
    slug: "ai-implementation",
    name: "ai implementation",
    tier: "make",
    tagline:
      "end-to-end ai delivery inside your governance: prioritise, prove, deploy, hand over.",
    forWho:
      "organisations stuck between ai ambition and production reality, who need builders that respect existing controls.",
    included: [
      "use-case prioritisation and proof of concept",
      "production deployment with governance gates",
      "integration with your change and release process",
      "monitoring and evaluation setup",
      "capability transfer to your team",
    ],
    shape: "six to twelve weeks.",
    price: "£32,000",
    priceQualifier: "from",
    outcome:
      "ai that users touch every week, with an accountability trail your board can follow.",
    proof: [{ title: "data deep clean", slug: "data-deep-clean" }],
    order: 3,
    featured: true,
  },
  {
    slug: "ai-governance",
    name: "ai governance",
    tier: "make",
    tagline:
      "governance foundations before your teams write a line of model code: frameworks that stand up to audit and board challenge.",
    forWho:
      "regulated or programme-heavy organisations that cannot adopt ai by bypassing the controls that protect them.",
    included: [
      "ai readiness and risk frameworks",
      "responsible ai policy",
      "eu ai act and uk framework alignment",
      "auditability and explainability standards",
      "board-level risk reporting",
    ],
    shape: "four to eight weeks.",
    price: "£18,000",
    priceQualifier: "from",
    outcome:
      "controls your auditors can verify, and a path for delivery that does not fight them.",
    order: 4,
  },
  {
    slug: "onboard",
    name: "onboard",
    tier: "make",
    tagline:
      "build the capability in, not bolt it on: training, operating model and handover that sticks.",
    forWho:
      "teams who have been left with a system they cannot run, or who want the amplify phase done properly from day one.",
    included: [
      "operating model design",
      "product owner and team enablement",
      "ai literacy for non-technical roles",
      "documentation and runbooks",
      "centre of excellence setup where it earns its keep",
    ],
    shape: "four to six weeks.",
    price: "£12,000",
    priceQualifier: "from",
    outcome:
      "your people can own, improve and explain the product without calling the agency every sprint.",
    order: 5,
  },
  {
    slug: "motion",
    name: "motion",
    tier: "grow",
    tagline:
      "one team keeping your product and ai estate moving, month after month.",
    forWho:
      "organisations that have shipped and need consistent delivery without rebuilding a team for every job.",
    cadence: "monthly planning, continuous shipping.",
    commitment: "rolling, monthly. thirty days' notice, no lock-in.",
    price: "£4,500",
    priceQualifier: "per-month",
    monthlyDeliverables: [
      "product iteration and releases",
      "ai system upkeep and evaluation",
      "operating-model support",
      "priority incident and change line",
      "a monthly readout on what moved",
    ],
    shape: "rolling, monthly.",
    outcome: "a product that never goes quiet, looked after by the same team that built it.",
    order: 6,
    featured: true,
  },
  {
    slug: "motion-plus",
    name: "motion plus",
    tier: "grow",
    tagline:
      "everything in motion, plus deeper product and growth capacity for teams actively scaling.",
    forWho:
      "product orgs in a growth phase that want delivery, ai and performance pulling together.",
    cadence: "monthly planning, continuous shipping, fortnightly check-ins.",
    commitment: "rolling, monthly. thirty days' notice.",
    price: "£6,500",
    priceQualifier: "per-month",
    monthlyDeliverables: [
      "everything in motion",
      "deeper product discovery and experimentation",
      "growth and performance loops",
      "extended specialist bench on demand",
      "deeper analytics and reporting",
    ],
    shape: "rolling, monthly.",
    outcome: "product, ai and growth handled by one team, compounding every month.",
    order: 7,
  },
  {
    slug: "motion-embedded",
    name: "motion embedded",
    tier: "grow",
    tagline:
      "a senior product and ai team that plugs straight into yours, without the hire cycle.",
    forWho:
      "scale-ups and enterprises who need delivery firepower embedded alongside their own people.",
    cadence: "embedded, agreed weekly capacity.",
    commitment: "rolling, by agreement.",
    price: "£9,000",
    priceQualifier: "per-month",
    monthlyDeliverables: [
      "a named, senior team working as part of yours",
      "product, ai and delivery on tap",
      "access to the wider bmkrs network of engineers and specialists",
      "no recruitment, no ramp-up",
    ],
    shape: "embedded, ongoing.",
    outcome:
      "the capability of an in-house product and ai team, without the cost and time of building one.",
    order: 8,
  },
];

export const fallbackAboutPage: AboutPageContent = {
  headline: "built to stay in production.",
  intro:
    "bmkrs is a digital product studio founded by a builder. seventeen years shipping inside organisations where failure is expensive, now pointed at the gap most ai programmes never close: production, governance and a team that can own what ships.",
  founder: {
    name: "shane powell",
    linkedinUrl: "https://www.linkedin.com/in/shanepowell",
    portraitAlt: "illustrated portrait of shane powell, founder at bmkrs",
  },
  founderStoryTitle: "the short version of a long story.",
  founderStory: [
    "i have spent seventeen years building products and delivery teams inside organisations where things have to actually work: public sector, utilities, infrastructure, regulated industries. real stakes, real scrutiny, no marks for decks.",
    "and the whole time, one pattern kept ruining my week. good ideas, weak product, no governance, and nobody left who can run the thing after the pilot. ai made that pattern louder, not new. i watched it happen so many times i stopped calling it unfair and started calling it a delivery gap.",
    "bmkrs is me closing that gap. digital products and ai systems built the way good programmes get built: assess before implement, controls before code, one accountable team, shipped and measured instead of presented and abandoned. and because i never stopped building products of my own, some of the work on these shelves is ours. we live with the consequences of our own advice, which keeps the advice honest.",
  ],
  founderPullQuote:
    "most ai ambition dies in the pilot. i got tired of watching it happen on my watch.",
  teamIntro:
    "around the studio is a small group of partner collaborators. all of them are multiskilled. each of them leads the thing they are scary-good at. you meet the people who do the work, because there is no one else to meet.",
  teamClosing: "no account managers. no chain. just us.",
  beliefsHeadline: "four things we refuse to budge on.",
  beliefs: [
    {
      title: "production is the product.",
      body: "a demo is not a delivery. if it cannot survive users, change control and the next quarter, it does not ship.",
    },
    {
      title: "governance is not optional.",
      body: "we design delivery that fits the controls you already have. bypassing them is not speed. it is deferred failure.",
    },
    {
      title: "proof beats noise.",
      body: "we would rather show one number that moved than ten adjectives that did not. we measure, and we tell you what we find, even when it stings.",
    },
    {
      title: "one team, all in.",
      body: "no handoffs, no account managers, no whoever-is-free-on-friday. the people in the first meeting are the people doing the work, because they are the only people there are.",
    },
  ],
  studioProductCount: 2,
  longGameTitle: "built to stick around.",
  longGame:
    "the work we are proudest of comes from relationships, not transactions. the longer we know a product, the better the work gets: we move faster, skip the posturing, and say the hard thing because we have earned the right to.\n\nwe keep the same team on your build. we learn it, look after it, and treat it like ours. the only scoreboard we really watch is who comes back, and who they bring with them.",
};

export const fallbackPeople: Person[] = [
  {
    slug: "shane-powell",
    name: "shane",
    role: "founder + product",
    discipline: "delivery + strategy",
    shortBio:
      "seventeen years shipping inside complex organisations. builds the products that carry the brands, including ours.",
    portraitAlt: "illustrated portrait of shane powell, founder at bmkrs",
    linkedinUrl: "https://www.linkedin.com/in/shanepowell",
    order: 0,
    quickfire: [
      { label: "now building", value: "freelance near me", href: "/work/freelance-near-me" },
      { label: "banned word", value: "leverage", href: "/journal/banned-words" },
      { label: "off the clock", value: "rugby and sci-fi" },
    ],
  },
  {
    slug: "marcus",
    name: "marcus",
    role: "voice + messaging",
    shortBio:
      "came up through broadcast, where nobody owes you their attention. every line he writes has to survive being said out loud.",
    portraitAlt: "illustrated portrait of marcus, voice + messaging at bmkrs",
    order: 1,
  },
  {
    slug: "sarah",
    name: "sarah",
    role: "brand + identity",
    shortBio:
      "builds visual worlds from positioning outwards, never the other way round. will tell you when you do not need a rebrand.",
    portraitAlt: "illustrated portrait of sarah, brand + identity at bmkrs",
    order: 2,
  },
  {
    slug: "george",
    name: "george",
    role: "pr + communications",
    shortBio:
      "would rather find the one right journalist than blast a hundred wrong ones. angle first, always.",
    portraitAlt: "illustrated portrait of george, pr + communications at bmkrs",
    order: 3,
  },
  {
    slug: "melissa",
    name: "melissa",
    role: "product + growth",
    shortBio:
      "ships the sites, apps and campaigns that turn brand work into revenue. one primary metric per campaign, no exceptions.",
    portraitAlt: "illustrated portrait of melissa, product + growth at bmkrs",
    order: 4,
  },
];

export const fallbackNowBuilding: NowBuildingContent = {
  lines: [
    "closed beta onboarding for data deep clean",
    "shipping seo landing pages for freelance near me",
    "keeping podcast studio london and three18 media in motion",
  ],
  updatedAt: "2026-11-18",
  updatedLabel: "november 2026",
};

export const fallbackTeam: TeamMember[] = authorBios.map((a) => ({
  name: a.name,
  discipline: a.discipline,
  bio: a.footer,
  photoAlt: `illustrated portrait of ${a.name}, ${a.discipline} at bmkrs`,
  slug: a.slug,
}));
