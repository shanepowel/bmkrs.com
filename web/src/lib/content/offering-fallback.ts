import type { AboutPageContent, Discipline, Product, TeamMember } from "@/lib/types";
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
    shape: "six to eight weeks.",
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
    tagline: "a sharper position and a fresh identity for a brand that has outgrown its old one.",
    forWho: "established brands that look homemade next to where they are heading.",
    included: [
      "repositioning",
      "identity refresh or rebuild",
      "messaging realignment",
      "rollout assets and guidelines",
    ],
    shape: "six to ten weeks.",
    outcome:
      "a brand that matches the ambition, without throwing away the equity you have already built.",
    priceNote: "let's talk",
    proof: [{ title: "floare din banat", slug: "fdb" }],
    order: 3,
  },
  {
    slug: "storefront",
    name: "storefront",
    tier: "make",
    tagline: "an identity-led ecommerce build that makes the buying easy and the brand obvious.",
    forWho: "product brands whose storefront is losing them sales they should be winning.",
    included: [
      "identity applied to commerce",
      "product copy and structure",
      "storefront build",
      "checkout and conversion basics",
    ],
    shape: "six to ten weeks.",
    outcome: "a store that looks as good as the product and gets out of the customer's way.",
    priceNote: "let's talk",
    proof: [{ title: "floare din banat", slug: "fdb" }],
    order: 4,
  },
  {
    slug: "story",
    name: "story",
    tier: "make",
    tagline: "tone of voice, messaging and narrative, so the brand sounds like itself everywhere.",
    forWho:
      "teams whose product is strong but hard to explain, or who sound different in every channel.",
    included: [
      "tone of voice",
      "messaging framework",
      "brand and product narrative",
      "launch and campaign copy",
    ],
    shape: "three to five weeks.",
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
    monthlyDeliverables: [
      "brand stewardship and new assets",
      "content and campaigns",
      "a pr moment or angle in play",
      "site and storefront iteration",
      "a monthly readout on what moved",
    ],
    shape: "rolling, monthly.",
    outcome: "a brand that never goes quiet, looked after by the same team that built it.",
    priceNote: "let's talk",
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
    monthlyDeliverables: [
      "everything in motion",
      "performance and growth marketing",
      "seo and email",
      "an ongoing pr programme and thought leadership",
      "deeper analytics and reporting",
    ],
    shape: "rolling, monthly.",
    outcome: "brand, story and growth handled by one team, compounding every month.",
    priceNote: "let's talk",
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
    monthlyDeliverables: [
      "a named, senior team working as part of yours",
      "brand, voice, pr and delivery on tap",
      "access to the wider bmkrs network of engineers and specialists",
      "no recruitment, no ramp-up",
    ],
    shape: "embedded, ongoing.",
    outcome:
      "the capability of an in-house brand team, without the cost and time of building one.",
    priceNote: "let's talk",
    order: 9,
  },
];

export const fallbackAboutPage: AboutPageContent = {
  headline: "we are b makers.",
  intro:
    "a brand company run by builders. for people with something good that deserves to be better known. since 2013.",
  story: [
    "we started in 2013, not as a design studio, but as a team of builders.",
    "we spent years inside big, complicated organisations, building the teams and the delivery that made ambitious things actually happen. public sector, regulated industries, the kind of work with real stakes. we got good at it. properly good.",
    "but we kept seeing the same thing. brilliant products, built by brilliant people, that nobody outside the building had ever heard of. and every time, the better-told brand won. not the better product. the better-told one.",
    "so we started building the other half. the identity, the voice, the story, the noise that makes people actually care. we kept the delivery rigour from the old days and pointed it at brand. more than a decade on, that is the whole job.",
    "we are b makers. it is on the door for a reason.",
  ],
  whoWeAre:
    "we are a small, senior team. the people you brief are the people who do the work. no account manager in the middle relaying messages, no junior learning on your brand. we are exact about the details and honest to a fault: we will tell you when an idea is not working, even the one you walked in loving. that is what good partners are for.",
  whatWeLove:
    "the brief nobody else wants. the messy product that turns out to be brilliant once someone can finally explain it. the moment a muddled idea lands in one sentence. seeing something we built turn up in the wild and hold its own. we like the work. it shows in what we make.",
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
    "we are not built for the one-off. the work we are proudest of came from clients we have known for years, the kind of trust where we can move fast, skip the posturing, and tell each other the truth because we have earned the right to. most of our new work comes from people we have worked with before, or people they pointed our way. that is the only scoreboard we really watch.",
  inOwnWords: [
    "we would rather be your team than your agency.",
    "we are in it for the long game, not the launch.",
    "no awards shelf. just clients who keep calling.",
  ],
};

export const fallbackTeam: TeamMember[] = [
  {
    name: "shane",
    discipline: "delivery + strategy",
    bio: "spent years making ambitious things actually ship inside complex, regulated organisations. keeps the work moving and the timelines honest, and is happiest when a messy programme finally clicks into a plan everyone believes.",
    photoAlt: "shane",
  },
  {
    name: "george",
    discipline: "pr + communications",
    bio: "finds the angle and the right person to tell it to. would rather land one story that matters than a hundred that do not, and usually knows the journalist's name already.",
    photoAlt: "george",
  },
  {
    name: "melissa",
    discipline: "product + engineering",
    bio: "the one who makes the clever idea actually work. builds the sites, stores and tools that carry the brand, and quietly fixes the thing nobody else noticed was broken.",
    photoAlt: "melissa",
  },
  {
    name: "sarah",
    discipline: "brand + identity",
    bio: "turns a position into a world you can see. lives in type, colour and the small decisions that make a brand feel like one thing, not ten.",
    photoAlt: "sarah",
  },
  {
    name: "marcus",
    discipline: "voice + messaging",
    bio: "makes brands sound like themselves. obsessed with the one sentence that does the work of a whole paragraph.",
    photoAlt: "marcus",
  },
  {
    name: "the wider team",
    discipline: "engineers, consultants + specialists",
    bio: "behind the named five is a trusted network of engineers, consultants and specialists we bring in when the work calls for it. same standard, no strangers.",
    photoAlt: "the wider team",
  },
];
