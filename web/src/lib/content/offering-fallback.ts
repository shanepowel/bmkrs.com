import type { AboutPageContent, JournalPost, Product, TeamMember } from "@/lib/types";

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
    "a brand company for people with big plans and the nerve to back them. building brands since 2013.",
  story: [
    "we started in 2013, not as a design studio, but as a team of builders.",
    "we spent years inside big, complicated organisations, building the teams and the delivery that made ambitious things actually happen. public sector, regulated industries, the kind of work with real stakes. we got good at it. properly good.",
    "but we kept seeing the same thing. brilliant products, built by brilliant people, that nobody outside the building had ever heard of. and every time, the better-told brand won. not the better product. the better-told one.",
    "so we started building the other half. the identity, the voice, the story, the noise that makes people actually care. we kept the delivery rigour from the old days and pointed it at brand. more than a decade on, that is the whole job.",
    "we are b makers. it is on the door for a reason.",
  ],
  whoWeAre:
    "we are a small, senior team, and the people you meet are the people who do the work. no account managers passing your brand down a chain until it reaches whoever is free on friday. we are curious, a little obsessive about craft, and honest to a fault. we will tell you when an idea is not working, even when it is the one you walked in loving. that is what good partners are for.",
  whatWeLove:
    "the blank page. the brief nobody else wants. the moment a muddled idea finally sounds like itself out loud. seeing a brand we shaped turn up in the wild and hold its own. we got into this because we like the work, and we think it shows in what we make.",
  ethos:
    "we treat your brand like it is ours, because the only work we are proud of is work we would put our own name on. we move fast, say the hard thing, and stay long enough to see it through.",
  beliefs: [
    { title: "a brand is a promise.", body: "we make sure yours is worth keeping." },
    { title: "design does a job.", body: "it is not decoration. it earns its place." },
    { title: "growth beats noise.", body: "we measure what actually matters, then do more of it." },
    { title: "one team, all in.", body: "no churn, no hand-offs, no strangers on your account." },
    { title: "the better-told brand wins.", body: "so we make sure the best-told one is yours." },
    { title: "we are in it for the long game.", body: "not the launch. the years after it." },
  ],
  longGame:
    "we are not built for the one-off. the work we are proudest of came from clients we have known for years, the kind of trust where we can move fast, skip the posturing, and say the hard thing because we have earned the right to. most of our new work comes from people we have worked with before, or people they pointed our way. that is the only scoreboard we really watch.",
  inOwnWords: [
    "we would rather be your team than your agency.",
    "the better-told brand wins. we make sure it is yours.",
    "no churn. no hand-offs. no strangers on your account.",
    "we say the hard thing. that is the job.",
    "we are in it for the long game, not the launch.",
  ],
};

export const fallbackTeam: TeamMember[] = [
  {
    name: "shane",
    discipline: "delivery + strategy",
    bio: "spent years making ambitious things actually ship inside complex organisations. keeps the work moving and everyone honest about what done really looks like.",
    photoAlt: "shane",
  },
  {
    name: "george",
    discipline: "pr + communications",
    bio: "finds the angle and the right person to tell it to. would rather land one story that matters than a hundred that do not.",
    photoAlt: "george",
  },
  {
    name: "melissa",
    discipline: "product + engineering",
    bio: "the one who makes the clever idea actually work. builds the sites, stores and tools that carry the brand once the design is done.",
    photoAlt: "melissa",
  },
  {
    name: "sarah",
    discipline: "brand + identity",
    bio: "turns a position into a world you can see. identity, campaigns and the visual instinct that makes a brand unmistakable.",
    photoAlt: "sarah",
  },
  {
    name: "marcus",
    discipline: "voice + messaging",
    bio: "makes brands sound like themselves. tone, narrative and the knack for making a complicated product feel obvious.",
    photoAlt: "marcus",
  },
  {
    name: "the wider team",
    discipline: "engineers, consultants + specialists",
    bio: "behind the named five is a trusted network we bring in when the work calls for it. same standard, no strangers.",
    photoAlt: "the wider team",
  },
];

export const fallbackPosts: JournalPost[] = [
  {
    slug: "better-told-brand-wins",
    title: "the better-told brand wins. here is how we tell them.",
    category: "voice",
    excerpt:
      "the best product does not win by default. the best-told one does. our working method for finding a brand's real story.",
    publishedAt: "2026-05-14",
    readingTime: 6,
    featured: true,
    cover: { url: "/images/optimized/branding-dis.jpg", alt: "brand work" },
    author: { name: "marcus", discipline: "voice + messaging" },
    body: [
      {
        _type: "block",
        children: [
          {
            text: "we have lost count of the brilliant products nobody ever heard of. the pattern is always the same: the team can build the thing, but cannot say what it is in a sentence. so the market never gets far enough to care.",
          },
        ],
      },
      {
        _type: "pullQuote",
        text: "not the better product. the better-told one.",
      },
      {
        _type: "block",
        children: [
          {
            text: "the work is not decoration. it is finding the one true thing a brand can say that its competitors cannot, then saying it the same way everywhere until people believe it.",
          },
        ],
      },
    ],
    relatedProduct: { name: "story", slug: "story", tagline: "tone of voice, messaging and narrative." },
    seo: {
      metaDescription:
        "the best-told brand wins, not the best product. our method for finding a brand's real story.",
    },
  },
  {
    slug: "naming-is-positioning",
    title: "naming is a positioning problem, not a creative one.",
    category: "brand",
    excerpt:
      "the best name is not the cleverest. it is the one that does the most positioning work with the least explaining.",
    publishedAt: "2026-05-02",
    readingTime: 4,
    cover: { url: "/images/optimized/copa-hero.jpg", alt: "naming and identity" },
    author: { name: "sarah", discipline: "brand + identity" },
    body: [
      {
        _type: "block",
        children: [
          {
            text: "teams agonise over names as if they were tattoos. the better question is not whether you love it, but what it makes people assume before they have read a word of copy.",
          },
        ],
      },
    ],
    relatedProduct: { name: "launch kit", slug: "launch-kit", tagline: "everything a new brand needs to go live." },
    seo: {
      metaDescription:
        "why the best brand name is a positioning decision, not a creative flourish.",
    },
  },
  {
    slug: "one-journalist",
    title: "we would rather find one journalist than blast a hundred.",
    category: "pr",
    excerpt: "spray-and-pray pr is busywork. the angle and the right person beat volume every time.",
    publishedAt: "2026-04-24",
    readingTime: 5,
    cover: { url: "/images/optimized/carter-hero.jpg", alt: "pr and communications" },
    author: { name: "george", discipline: "pr + communications" },
    body: [
      {
        _type: "block",
        children: [
          {
            text: "most press releases are sent into a void because they answer a question no journalist asked. we spend the time the other way around: who would genuinely care, and what is the story that makes them care.",
          },
        ],
      },
    ],
    relatedProduct: {
      name: "press launch",
      slug: "press-launch",
      tagline: "a launch campaign and press push.",
    },
    seo: {
      metaDescription:
        "why targeted pr beats spray-and-pray: the angle and the right journalist over volume.",
    },
  },
  {
    slug: "same-team",
    title: "why we keep the same team on your brand.",
    category: "studio",
    excerpt:
      "churn is the quiet tax on most agency work. here is why we refuse to pass your brand down a chain.",
    publishedAt: "2026-04-11",
    readingTime: 3,
    cover: { url: "/images/optimized/fdb-2-hero.jpg", alt: "team and delivery" },
    author: { name: "shane", discipline: "delivery + strategy" },
    body: [
      {
        _type: "block",
        children: [
          {
            text: "every hand-off loses something. the context, the in-jokes, the reason you made that call six months ago. keeping the same team is not a perk, it is how the work stays good.",
          },
        ],
      },
    ],
    relatedProduct: {
      name: "motion",
      slug: "motion",
      tagline: "one team keeping your brand moving, month after month.",
    },
    seo: {
      metaDescription:
        "why bmkrs keeps the same senior team on your brand, and what churn quietly costs.",
    },
  },
];
