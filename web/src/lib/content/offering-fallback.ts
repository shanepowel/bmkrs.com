import type { AboutPageContent, Discipline, Product, TeamMember } from "@/lib/types";
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
  headline: "built by a builder.",
  intro:
    "bmkrs is a brand company founded by someone who spent years shipping real products inside complex organisations. the rigour came first. the brand work is where we point it.",
  founder: {
    name: "shane powell",
    linkedinUrl: "https://www.linkedin.com/in/shanepowell",
    portraitAlt: "illustrated portrait of shane powell, founder at bmkrs",
    bio: [
      "i have spent seventeen years building products and delivery teams inside organisations where failure is expensive: public sector, utilities, infrastructure, regulated industries. director-level consulting, the kind of work where things have to ship, work, and stand up to scrutiny.",
      "and across all of it i kept watching the same thing happen. brilliant products, built by brilliant people, losing to worse products with a clearer story. the better-told brand won. every time.",
      "bmkrs exists to fight on that front. i build brands the way i build products: strategy before execution, one accountable team, shipped and measured rather than presented and abandoned. and because i still build products of my own, the studio practices what it sells. some of the work on our shelves is ours.",
    ],
  },
  whoWeAre:
    "around the studio is a small group of partner collaborators. all of them are multiskilled, each of them leads the discipline they are best at. you meet the people who do the work, because they are the only people there are. we'd rather be your team than your agency.",
  teamIntro:
    "around the studio is a small group of partner collaborators. all of them are multiskilled, each of them leads the discipline they are best at. you meet the people who do the work, because they are the only people there are.",
  teamClosing: "no account managers. no chain. no whoever-is-free-on-friday.",
  ethos:
    "we put our own name on the work, so we treat your brand the way we treat ours: build it properly, ship it, and stay long enough to see it work.",
  beliefs: [
    { title: "brand is infrastructure, not decoration.", body: "we build it like something that has to hold weight." },
    { title: "design earns its place.", body: "it is doing a job, or it is in the way." },
    { title: "growth is a habit, not a campaign.", body: "we build the thing that keeps working after launch." },
    { title: "one team, all in.", body: "no churn, no hand-offs, no strangers on your account." },
    { title: "clarity is the whole job.", body: "if it needs a paragraph to explain, it is not finished." },
    { title: "we are in it for the long game.", body: "not the launch. the years after it." },
  ],
  longGame:
    "we are not built for the one-off. the work we are proudest of comes from relationships, not transactions. the longer we know a brand, the better the work gets. most of our new work comes from people we have worked with before, or people they pointed our way. that is the only scoreboard we really watch.",
};

export const fallbackTeam: TeamMember[] = authorBios.map((a) => ({
  name: a.name,
  discipline: a.discipline,
  bio: a.footer,
  photoAlt: `illustrated portrait of ${a.name}, ${a.discipline} at bmkrs`,
  slug: a.slug,
}));
