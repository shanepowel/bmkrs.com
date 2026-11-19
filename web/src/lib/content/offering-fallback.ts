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
  headline: "small enough to care. experienced enough to deliver.",
  intro:
    "bmkrs is an independent creative and digital studio in London. We bring strategy, design and technology together to help ambitious businesses make meaningful things happen.",
  founder: {
    name: "shane powell",
    linkedinUrl: "https://www.linkedin.com/in/shanepowell",
    portraitAlt: "illustrated portrait of shane powell, founder at bmkrs",
  },
  founderStoryTitle: "the right people, close to the work.",
  founderStory: [
    "Co-founded by Shane Powell and Marcelo, bmkrs brings together the experience to shape a clear direction and the hands-on ability to make it real. We work closely with ambitious businesses, from the first useful question through to launch and what comes next.",
    "We have seen good ideas lose their way between strategy, design and delivery. So we connect those disciplines around the problem that matters, keep decisions close to the people doing the work, and make things that can thrive beyond the launch.",
    "Technology is not the answer to every problem. But when the right thinking meets thoughtful execution, it can change what is possible. We build digital products, brands and experiences that make sense for people and for the business behind them.",
  ],
  founderPullQuote: "the right thinking. the right people. the right things built.",
  teamIntro:
    "We are a small, senior team of strategists, designers and technologists. We work closely with ambitious businesses to turn bold ideas into meaningful, lasting products and brands.",
  teamClosing: "Independent. Collaborative. Ambitious. Long-term.",
  beliefsHeadline: "how we work.",
  beliefs: [
    {
      title: "start with the real problem.",
      body: "Understand the people, context and opportunity before deciding what to make.",
    },
    {
      title: "bring the right disciplines together.",
      body: "Strategy, design and technology work best when they shape the same outcome.",
    },
    {
      title: "make it useful in the real world.",
      body: "Build for the people, systems and everyday conditions the work will meet.",
    },
    {
      title: "stay close to what comes next.",
      body: "Launch is a beginning. We keep learning, improving and building on what works.",
    },
  ],
  studioProductCount: 2,
  longGameTitle: "good work keeps going.",
  longGame:
    "We value lasting relationships and useful outcomes. The longer we work together, the better we understand the people, ambitions and constraints around the product. That helps us make clearer decisions, move with more confidence and keep improving what we have built.",
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
    role: "product narrative",
    shortBio:
      "came up through broadcast, where nobody owes you their attention. every line he writes has to survive being said out loud, including in the product.",
    portraitAlt: "illustrated portrait of marcus, product narrative at bmkrs",
    order: 1,
  },
  {
    slug: "sarah",
    name: "sarah",
    role: "product design",
    shortBio:
      "builds interfaces from the job to be done outwards. will tell you when you do not need another screen.",
    portraitAlt: "illustrated portrait of sarah, product design at bmkrs",
    order: 2,
  },
  {
    slug: "george",
    name: "george",
    role: "delivery + change",
    shortBio:
      "gets programmes through the gates that stop most ai work. angle first, always: what ships, who owns it, how it is measured.",
    portraitAlt: "illustrated portrait of george, delivery and change at bmkrs",
    order: 3,
  },
  {
    slug: "melissa",
    name: "melissa",
    role: "engineering",
    shortBio:
      "ships the platforms and integrations that keep products in production. one primary metric per release, no exceptions.",
    portraitAlt: "illustrated portrait of melissa, engineering at bmkrs",
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
