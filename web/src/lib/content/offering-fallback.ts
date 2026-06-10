import type { AboutPageContent, Discipline, NowBuildingContent, Person, Product, TeamMember } from "@/lib/types";
import { authorBios } from "./author-bios";
import { fallbackPosts } from "./journal-posts-fallback";

export { fallbackPosts };

export const fallbackDisciplines: Discipline[] = [
  {
    name: "brand + identity",
    proposition: "the foundation everything else is built on.",
    body: "strategy, positioning, naming and a complete visual identity. we make sure the brand says the right thing before it says anything at all.",
    deliverables: [
      "brand strategy and positioning",
      "naming",
      "logo and identity system",
      "typography and colour",
      "brand guidelines",
    ],
    powers: [
      { name: "launch kit", slug: "launch-kit", tier: "make" },
      { name: "rebrand", slug: "rebrand", tier: "make" },
      { name: "brand check", slug: "brand-check", tier: "start" },
    ],
  },
  {
    name: "voice + messaging",
    proposition: "how the brand sounds, everywhere.",
    body: "tone of voice, messaging and narrative, so a complicated product feels obvious and every channel sounds like the same brand.",
    deliverables: [
      "tone of voice",
      "messaging framework",
      "brand and product narrative",
      "campaign and website copy",
    ],
    powers: [
      { name: "story", slug: "story", tier: "make" },
      { name: "launch kit", slug: "launch-kit", tier: "make" },
    ],
  },
  {
    name: "pr + communications",
    proposition: "getting the right people to care.",
    body: "we spend more time finding the right journalist and the right angle than blasting out press releases. launches, press and thought leadership that actually land.",
    deliverables: [
      "pr and media strategy",
      "press materials",
      "targeted outreach",
      "thought leadership",
      "launch campaigns",
    ],
    powers: [
      { name: "press launch", slug: "press-launch", tier: "make" },
      { name: "motion plus", slug: "motion-plus", tier: "grow" },
    ],
  },
  {
    name: "product, web + growth",
    proposition: "turning attention into revenue.",
    body: "the sites, stores and campaigns that carry the brand and make it work commercially. we measure what matters, then do more of it.",
    deliverables: [
      "websites and storefronts",
      "product and ux",
      "growth and performance marketing",
      "seo and email",
      "analytics and reporting",
    ],
    powers: [
      { name: "storefront", slug: "storefront", tier: "make" },
      { name: "launch kit", slug: "launch-kit", tier: "make" },
      { name: "motion", slug: "motion", tier: "grow" },
    ],
  },
];

export const fallbackProducts: Product[] = [
  {
    slug: "brand-check",
    name: "brand check",
    tier: "start",
    tagline: "a one-week teardown of brand, voice and site, with a plan you can act on monday.",
    forWho:
      "founders and teams who suspect the brand is holding the product back, and want an honest read before committing to a bigger piece of work.",
    included: [
      "brand, voice and site audit",
      "competitor and category scan",
      "a prioritised action plan",
      "a sixty-minute readout with your team",
    ],
    shape: "one week, fixed scope.",
    priceFrom: "£2,500",
    outcome: "you leave knowing exactly what is working, what is not, and what to fix first. no fluff, no eighty-page deck.",
    priceNote: "let's talk",
    order: 1,
    featured: true,
  },
  {
    slug: "launch-kit",
    name: "launch kit",
    tier: "make",
    tagline: "everything a new brand needs to go live: positioning, identity, voice and a launch site.",
    forWho: "new brands and products getting ready for their first proper outing.",
    included: [
      "positioning and strategy",
      "full visual identity",
      "verbal identity and messaging",
      "launch-ready website",
      "brand guidelines",
    ],
    shape: "six to eight weeks, fixed scope.",
    priceFrom: "£18,000",
    outcome:
      "a brand that hangs together from the name to the homepage, ready to launch and easy to keep consistent.",
    priceNote: "let's talk",
    proof: [
      { title: "copa, off the shore", slug: "copa" },
      { title: "flipster iptv", slug: "flipster" },
      { title: "smoothies", slug: "smoothies" },
    ],
    order: 2,
    featured: true,
  },
  {
    slug: "rebrand",
    name: "rebrand",
    tier: "make",
    tagline: "for brands that have outgrown their look, their story, or both.",
    forWho:
      "established brands whose product has moved on but whose identity has not, or teams who inherited a brand that never quite worked.",
    included: [
      "brand audit and repositioning",
      "refreshed or rebuilt identity",
      "updated voice and messaging",
      "rollout plan and guidelines",
    ],
    shape: "six to ten weeks, fixed scope.",
    priceFrom: "£15,000",
    outcome: "a brand that fits where you are now, with a system your team can actually use.",
    priceNote: "let's talk",
    order: 3,
  },
  {
    slug: "storefront",
    name: "storefront",
    tier: "make",
    tagline: "a site or store built to convert, not just to look good.",
    forWho: "brands with a product worth buying and a digital shopfront that is not doing it justice.",
    included: [
      "ux and conversion audit",
      "site or store design and build",
      "product copy and merchandising",
      "analytics and launch support",
    ],
    shape: "six to ten weeks, fixed scope.",
    priceFrom: "£12,000",
    outcome: "a storefront that looks like the brand and makes buying easy.",
    priceNote: "let's talk",
    proof: [{ title: "floare din banat", slug: "fdb" }],
    order: 4,
  },
  {
    slug: "story",
    name: "story",
    tier: "make",
    tagline: "the narrative, messaging and copy that make people understand and care.",
    forWho:
      "teams with a good product and a muddled story, or brands launching something complicated that needs explaining clearly.",
    included: [
      "messaging framework",
      "tone of voice",
      "messaging framework",
      "brand and product narrative",
      "launch and campaign copy",
    ],
    shape: "three to five weeks, fixed scope.",
    priceFrom: "£6,000",
    outcome: "one clear story, told the same way by everyone, from the homepage to the sales call.",
    priceNote: "let's talk",
    order: 5,
  },
  {
    slug: "press-launch",
    name: "press launch",
    tier: "make",
    tagline: "a launch campaign and press push that gets the right people talking.",
    forWho: "brands with a moment worth making noise about: a launch, a raise, a milestone.",
    included: ["pr and media strategy", "press materials", "targeted outreach", "launch campaign support"],
    shape: "a fixed launch window.",
    priceFrom: "£5,000",
    outcome:
      "coverage that lands with the audiences that matter, not a press release sent into the void.",
    priceNote: "let's talk",
    order: 6,
  },
  {
    slug: "motion",
    name: "motion",
    tier: "grow",
    tagline: "one team keeping your brand, voice and pr moving, month after month.",
    forWho:
      "brands that have launched and need consistent momentum without rebuilding a team for every job.",
    cadence: "monthly planning, continuous shipping.",
    commitment: "rolling, monthly. thirty days' notice, no lock-in.",
    priceFrom: "£3,500",
    monthlyDeliverables: [
      "brand stewardship and new assets",
      "content and campaigns",
      "a pr moment or angle in play",
      "site and storefront iteration",
      "a monthly readout on what moved",
    ],
    shape: "rolling, monthly.",
    outcome: "a brand that never goes quiet, looked after by the same team that built it.",
    priceNote: "/month",
    order: 7,
    featured: true,
  },
  {
    slug: "motion-plus",
    name: "motion plus",
    tier: "grow",
    tagline:
      "everything in motion, plus growth and an always-on pr engine for brands actively scaling.",
    forWho:
      "brands in a growth phase that want brand, content, pr and performance pulling together.",
    cadence: "monthly planning, continuous shipping, fortnightly check-ins.",
    commitment: "rolling, monthly. thirty days' notice.",
    priceFrom: "£6,500",
    monthlyDeliverables: [
      "everything in motion",
      "performance and growth marketing",
      "seo and email",
      "an ongoing pr programme and thought leadership",
      "deeper analytics and reporting",
    ],
    shape: "rolling, monthly.",
    outcome: "brand, story and growth handled by one team, compounding every month.",
    priceNote: "/month",
    order: 8,
  },
  {
    slug: "motion-embedded",
    name: "motion embedded",
    tier: "grow",
    tagline:
      "a senior brand team that plugs straight into yours, for companies that want it in-house without hiring it.",
    forWho:
      "scale-ups and companies who need brand and delivery firepower embedded alongside their own people.",
    cadence: "embedded, agreed weekly capacity.",
    commitment: "rolling, by agreement.",
    priceFrom: "£9,000",
    monthlyDeliverables: [
      "a named, senior team working as part of yours",
      "brand, voice, pr and delivery on tap",
      "access to the wider bmkrs network of engineers and specialists",
      "no recruitment, no ramp-up",
    ],
    shape: "embedded, ongoing.",
    outcome:
      "the capability of an in-house brand team, without the cost and time of building one.",
    priceNote: "/month",
    order: 9,
  },
];

export const fallbackAboutPage: AboutPageContent = {
  headline: "built, not branded.",
  intro:
    "bmkrs is a brand company founded by a builder. seventeen years shipping real products inside organisations where failure is expensive, now pointed at the thing most good products never get: a brand that does them justice.",
  founder: {
    name: "shane powell",
    linkedinUrl: "https://www.linkedin.com/in/shanepowell",
    portraitAlt: "illustrated portrait of shane powell, founder at bmkrs",
  },
  founderStoryTitle: "the short version of a long story.",
  founderStory: [
    "i have spent seventeen years building products and delivery teams inside organisations where things have to actually work: public sector, utilities, infrastructure, regulated industries. real stakes, real scrutiny, no marks for decks.",
    "and the whole time, one pattern kept ruining my week. brilliant products, built by brilliant people, losing. not to better products. to better-told ones. a sharper name, a clearer story, a tighter site, and the worse thing wins. i watched it happen so many times i stopped calling it unfair and started calling it a gap in the market.",
    "bmkrs is me closing that gap. brands built the way good products get built: strategy before pixels, one accountable team, shipped and measured instead of presented and abandoned. and because i never stopped building products of my own, some of the work on these shelves is ours. we live with the consequences of our own advice, which keeps the advice honest.",
  ],
  founderPullQuote:
    "the better-told brand wins. i got tired of watching it happen to the wrong side.",
  teamIntro:
    "around the studio is a small group of partner collaborators. all of them are multiskilled. each of them leads the thing they are scary-good at. you meet the people who do the work, because there is no one else to meet.",
  teamClosing: "no account managers. no chain. just us.",
  beliefsHeadline: "four things we refuse to budge on.",
  beliefs: [
    {
      title: "a brand is a promise.",
      body: "so we will not design one your business cannot keep. if the work and the words disagree, we fix the work or change the words.",
    },
    {
      title: "design does a job.",
      body: "if we cannot say what a thing is for, it does not ship. beautiful and pointless is still pointless.",
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
  studioProductCount: 1,
  longGameTitle: "built to stick around.",
  longGame:
    "the work we are proudest of comes from relationships, not transactions. the longer we know a brand, the better the work gets: we move faster, skip the posturing, and say the hard thing because we have earned the right to.\n\nwe keep the same team on your brand. we learn it, look after it, and treat it like ours. the only scoreboard we really watch is who comes back, and who they bring with them.",
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
    "[client project or sector, as specific as confidentiality allows]",
    "shipping seo landing pages for freelance near me",
    "writing: why you cannot performance-market your way out of a weak brand",
  ],
  updatedAt: "2026-06-01",
  updatedLabel: "june 2026",
};

export const fallbackTeam: TeamMember[] = authorBios.map((a) => ({
  name: a.name,
  discipline: a.discipline,
  bio: a.footer,
  photoAlt: `illustrated portrait of ${a.name}, ${a.discipline} at bmkrs`,
  slug: a.slug,
}));
