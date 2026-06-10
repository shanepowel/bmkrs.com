/**
 * Regenerate sanity/seed/*.ndjson from content/journal markdown and current site copy.
 * Run: node scripts/generate-sanity-seeds.js
 */
const fs = require("fs");
const path = require("path");

const webRoot = path.join(__dirname, "..");
const seedDir = path.join(webRoot, "sanity", "seed");
const journalDir = path.join(webRoot, "content", "journal");

const CATEGORY_MAP = {
  "brand + identity": "brand",
  brand: "brand",
  "voice + messaging": "voice",
  voice: "voice",
  "pr + comms": "pr",
  pr: "pr",
  growth: "growth",
  studio: "studio",
};

const AUTHOR_REF = {
  marcus: "teamMember-marcus",
  sarah: "teamMember-sarah",
  george: "teamMember-george",
  melissa: "teamMember-melissa",
  shane: "teamMember-shane",
};

const PUBLISH_SCHEDULE = {
  "better-told-brand-wins": "2026-06-03",
  "what-a-brand-strategy-agency-does": "2026-06-03",
  "weak-brand-paid-growth": "2026-06-03",
  "choosing-a-rebrand-agency-uk": "2026-06-10",
  "startup-pr-without-retainer": "2026-06-10",
  "brand-identity-for-startups": "2026-06-17",
  "tone-of-voice-underpriced-asset": "2026-06-17",
  "brand-guidelines-people-use": "2026-06-24",
  "messaging-framework-how-to": "2026-06-24",
  "website-copywriting-that-converts": "2026-07-01",
  "product-launch-pr-checklist": "2026-07-01",
  "ux-writing-is-brand-voice": "2026-07-08",
  "thought-leadership-without-cringe": "2026-07-08",
  "seo-for-new-brands": "2026-07-15",
  "landing-page-ux-five-seconds": "2026-07-15",
  "design-systems-small-teams": "2026-07-22",
  "one-team-vs-five-agencies": "2026-07-22",
};

const RELATED_PRODUCT = {
  "better-told-brand-wins": "product-story",
  "what-a-brand-strategy-agency-does": "product-brand-check",
  "choosing-a-rebrand-agency-uk": "product-rebrand",
  "startup-pr-without-retainer": "product-press-launch",
  "brand-identity-for-startups": "product-launch-kit",
  "tone-of-voice-underpriced-asset": "product-story",
  "brand-guidelines-people-use": "product-launch-kit",
  "messaging-framework-how-to": "product-story",
  "website-copywriting-that-converts": "product-storefront",
  "product-launch-pr-checklist": "product-press-launch",
  "ux-writing-is-brand-voice": "product-story",
  "thought-leadership-without-cringe": "product-press-launch",
  "seo-for-new-brands": "product-motion-plus",
  "landing-page-ux-five-seconds": "product-storefront",
  "design-systems-small-teams": "product-launch-kit",
  "one-team-vs-five-agencies": "product-motion",
  "weak-brand-paid-growth": "product-motion",
  "rebrand-business-decision": "product-rebrand",
  "banned-words": "product-story",
};

/** Legacy journal post document IDs to remove on import. */
const LEGACY_POST_IDS = [
  "post-better-told-not-fair",
  "post-delivery-not-design",
  "post-naming-is-positioning",
  "post-bold-is-boring",
  "post-hand-off-brands-die",
  "post-one-journalist",
  "post-numbers-that-flatter",
  "post-product-needs-a-paragraph",
  "post-rebrand-keep-equity",
  "post-one-week-brand-check",
];

function writeNdjson(filename, docs) {
  const out = docs.map((d) => JSON.stringify(d)).join("\n") + "\n";
  fs.writeFileSync(path.join(seedDir, filename), out);
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return null;
  const data = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    data[key] = value;
  }
  return { data, body: match[2].trim() };
}

function stripInline(text) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

function readingTimeMinutes(body) {
  const words = stripInline(body).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function markdownToPortableText(md) {
  const blocks = [];
  let key = 0;
  const lines = md.split("\n");
  let paragraph = [];

  const flush = () => {
    if (!paragraph.length) return;
    const text = stripInline(paragraph.join(" ").trim());
    if (!text) return;
    blocks.push({
      _type: "block",
      _key: `b${key++}`,
      style: "normal",
      markDefs: [],
      children: [{ _type: "span", _key: `s${key++}`, text, marks: [] }],
    });
    paragraph = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flush();
      continue;
    }
    if (trimmed.startsWith("# ")) continue;
    if (trimmed.startsWith("## ")) {
      flush();
      blocks.push({
        _type: "block",
        _key: `b${key++}`,
        style: "h2",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: `s${key++}`,
            text: stripInline(trimmed.slice(3)),
            marks: [],
          },
        ],
      });
      continue;
    }
    if (trimmed.startsWith("> ")) {
      flush();
      blocks.push({ _type: "pullQuote", _key: `pq${key++}`, text: stripInline(trimmed.slice(2)) });
      continue;
    }
    paragraph.push(trimmed);
  }
  flush();
  return blocks;
}

function generatePosts() {
  const posts = [];
  for (const file of fs.readdirSync(journalDir).filter((f) => f.endsWith(".md"))) {
    const parsed = parseFrontmatter(fs.readFileSync(path.join(journalDir, file), "utf8"));
    if (!parsed) continue;
    const { data, body } = parsed;
    const slug = data.slug;
    const authorSlug = data.author.toLowerCase();
    const date = PUBLISH_SCHEDULE[slug] ?? data.date;
    const publishedAt = `${date}T09:00:00.000Z`;
    const productRef = RELATED_PRODUCT[slug];

    const doc = {
      _id: `post-${slug}`,
      _type: "post",
      title: data.title,
      slug: { _type: "slug", current: slug },
      category: CATEGORY_MAP[data.category.toLowerCase()] ?? "studio",
      excerpt: data.excerpt,
      author: { _type: "reference", _ref: AUTHOR_REF[authorSlug] ?? "teamMember-shane" },
      publishedAt,
      readingTime: data.readingTime
        ? parseInt(data.readingTime, 10)
        : readingTimeMinutes(body),
      featured: String(data.featured) === "true",
      body: markdownToPortableText(body),
      seo: { metaDescription: data.excerpt },
    };
    if (productRef) {
      doc.relatedProduct = { _type: "reference", _ref: productRef };
    }
    posts.push(doc);
  }
  posts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  writeNdjson("posts.ndjson", posts);
  console.log(`  posts.ndjson (${posts.length} articles)`);
}

function generateAbout() {
  const docs = [
    {
      _id: "aboutPage",
      _type: "aboutPage",
      headline: "built by a builder.",
      intro:
        "bmkrs is a brand company founded by someone who spent years shipping real products inside complex organisations. the rigour came first. the brand work is where we point it.",
      whoWeAre:
        "around the studio is a small group of partner collaborators. all of them are multiskilled, each of them leads the discipline they are best at. you meet the people who do the work, because they are the only people there are. we'd rather be your team than your agency.",
      ethos:
        "we put our own name on the work, so we treat your brand the way we treat ours: build it properly, ship it, and stay long enough to see it work.",
      beliefs: [
        { _key: "b1", title: "brand is infrastructure, not decoration.", body: "we build it like something that has to hold weight." },
        { _key: "b2", title: "design earns its place.", body: "it is doing a job, or it is in the way." },
        { _key: "b3", title: "growth is a habit, not a campaign.", body: "we build the thing that keeps working after launch." },
        { _key: "b4", title: "one team, all in.", body: "no churn, no hand-offs, no strangers on your account." },
        { _key: "b5", title: "clarity is the whole job.", body: "if it needs a paragraph to explain, it is not finished." },
        { _key: "b6", title: "we are in it for the long game.", body: "not the launch. the years after it." },
      ],
      longGame:
        "we are not built for the one-off. the work we are proudest of comes from relationships, not transactions. the longer we know a brand, the better the work gets. most of our new work comes from people we have worked with before, or people they pointed our way. that is the only scoreboard we really watch.",
      inOwnWords: [],
    },
    {
      _id: "teamMember-marcus",
      _type: "teamMember",
      name: "marcus",
      discipline: "voice + messaging",
      bio: "marcus leads voice and messaging at bmkrs. he came up through broadcast, which is why every line he writes has to survive being said out loud.",
      order: 1,
    },
    {
      _id: "teamMember-sarah",
      _type: "teamMember",
      name: "sarah",
      discipline: "brand + identity",
      bio: "sarah leads brand and identity at bmkrs. she builds visual worlds from positioning outwards, never the other way round.",
      order: 2,
    },
    {
      _id: "teamMember-george",
      _type: "teamMember",
      name: "george",
      discipline: "pr + communications",
      bio: "george leads pr and communications at bmkrs. he would rather find the one right journalist than blast a hundred wrong ones.",
      order: 3,
    },
    {
      _id: "teamMember-melissa",
      _type: "teamMember",
      name: "melissa",
      discipline: "product + growth",
      bio: "melissa leads product and growth at bmkrs. she ships the websites, apps and campaigns that turn the brand work into revenue.",
      order: 4,
    },
    {
      _id: "person-shane",
      _type: "person",
      name: "shane powell",
      slug: { _type: "slug", current: "shane-powell" },
      role: "founder",
      discipline: "delivery + strategy",
      shortBio:
        "founder of bmkrs. seventeen years building products and delivery teams inside complex organisations.",
      longBio:
        "shane spent seventeen years building products and delivery teams inside organisations where failure is expensive. he founded bmkrs to build brands with the same rigour he applied to shipping products.",
      linkedinUrl: "https://www.linkedin.com/in/shanepowell",
    },
  ];
  writeNdjson("about.ndjson", docs);
  console.log(`  about.ndjson (${docs.length} documents)`);
}

function generateProducts() {
  const products = [
    ["product-brand-check", "brand check", "brand-check", "start", "£2,500", "one week, fixed scope.", 1, true],
    ["product-launch-kit", "launch kit", "launch-kit", "make", "£18,000", "six to eight weeks, fixed scope.", 2, true],
    ["product-rebrand", "rebrand", "rebrand", "make", "£15,000", "six to ten weeks, fixed scope.", 3, false],
    ["product-storefront", "storefront", "storefront", "make", "£12,000", "six to ten weeks, fixed scope.", 4, false],
    ["product-story", "story", "story", "make", "£6,000", "three to five weeks, fixed scope.", 5, false],
    ["product-press-launch", "press launch", "press-launch", "make", "£5,000", "a fixed launch window.", 6, false],
    ["product-motion", "motion", "motion", "grow", "£3,500", "rolling, monthly.", 7, true, "/month"],
    ["product-motion-plus", "motion plus", "motion-plus", "grow", "£6,500", "rolling, monthly.", 8, false, "/month"],
    ["product-motion-embedded", "motion embedded", "motion-embedded", "grow", "£9,000", "embedded, ongoing.", 9, false, "/month"],
  ];

  const details = {
    "product-brand-check": {
      tagline: "a one-week teardown of brand, voice and site, with a plan you can act on monday.",
      forWho:
        "founders and teams who suspect the brand is holding the product back, and want an honest read before committing to a bigger piece of work.",
      included: [
        "brand, voice and site audit",
        "competitor and category scan",
        "a prioritised action plan",
        "a sixty-minute readout with your team",
      ],
      outcome:
        "you leave knowing exactly what is working, what is not, and what to fix first. no fluff, no eighty-page deck.",
    },
    "product-launch-kit": {
      tagline: "everything a new brand needs to go live: positioning, identity, voice and a launch site.",
      forWho: "new brands and products getting ready for their first proper outing.",
      included: [
        "positioning and strategy",
        "full visual identity",
        "verbal identity and messaging",
        "launch-ready website",
        "brand guidelines",
      ],
      outcome:
        "a brand that hangs together from the name to the homepage, ready to launch and easy to keep consistent.",
      relatedCaseStudies: [
        { _type: "reference", _ref: "caseStudy-copa", _key: "r1" },
        { _type: "reference", _ref: "caseStudy-flipster", _key: "r2" },
        { _type: "reference", _ref: "caseStudy-smoothies", _key: "r3" },
      ],
    },
    "product-rebrand": {
      tagline: "for brands that have outgrown their look, their story, or both.",
      forWho:
        "established brands whose product has moved on but whose identity has not, or teams who inherited a brand that never quite worked.",
      included: [
        "brand audit and repositioning",
        "refreshed or rebuilt identity",
        "updated voice and messaging",
        "rollout plan and guidelines",
      ],
      outcome: "a brand that fits where you are now, with a system your team can actually use.",
      relatedCaseStudies: [{ _type: "reference", _ref: "caseStudy-fdb", _key: "r1" }],
    },
    "product-storefront": {
      tagline: "a site or store built to convert, not just to look good.",
      forWho: "brands with a product worth buying and a digital shopfront that is not doing it justice.",
      included: [
        "ux and conversion audit",
        "site or store design and build",
        "product copy and merchandising",
        "analytics and launch support",
      ],
      outcome: "a storefront that looks like the brand and makes buying easy.",
      relatedCaseStudies: [{ _type: "reference", _ref: "caseStudy-fdb", _key: "r1" }],
    },
    "product-story": {
      tagline: "the narrative, messaging and copy that make people understand and care.",
      forWho:
        "teams with a good product and a muddled story, or brands launching something complicated that needs explaining clearly.",
      included: [
        "messaging framework",
        "tone of voice",
        "brand and product narrative",
        "launch and campaign copy",
      ],
      outcome: "one clear story, told the same way by everyone, from the homepage to the sales call.",
    },
    "product-press-launch": {
      tagline: "a launch campaign and press push that gets the right people talking.",
      forWho: "brands with a moment worth making noise about: a launch, a raise, a milestone.",
      included: ["pr and media strategy", "press materials", "targeted outreach", "launch campaign support"],
      outcome:
        "coverage that lands with the audiences that matter, not a press release sent into the void.",
    },
    "product-motion": {
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
      outcome: "a brand that never goes quiet, looked after by the same team that built it.",
    },
    "product-motion-plus": {
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
      outcome: "brand, story and growth handled by one team, compounding every month.",
    },
    "product-motion-embedded": {
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
      outcome:
        "the capability of an in-house brand team, without the cost and time of building one.",
    },
  };

  const docs = products.map(([id, name, slug, tier, priceFrom, shape, order, featured, priceNote]) => ({
    _id: id,
    _type: "product",
    name,
    slug: { _type: "slug", current: slug },
    tier,
    priceFrom,
    shape,
    priceNote: priceNote ?? "let's talk",
    order,
    featured,
    ...details[id],
  }));

  writeNdjson("products.ndjson", docs);
  console.log(`  products.ndjson (${docs.length} products)`);
}

function generateCaseStudies() {
  const existing = fs
    .readFileSync(path.join(seedDir, "case-studies.ndjson"), "utf8")
    .trim()
    .split("\n")
    .map((line) => JSON.parse(line));

  const withType = existing.map((cs) => ({
    ...cs,
    projectType: cs.projectType ?? "client",
    thinking: cs.thinking ?? cs.challenge,
  }));

  if (withType.find((c) => c._id === "caseStudy-flipster")) {
    const flip = withType.find((c) => c._id === "caseStudy-flipster");
    flip.featured = true;
  }

  const psl = withType.find((c) => c._id === "caseStudy-podcast-studio-london");
  if (psl) {
    psl.thinking = psl.thinking ?? psl.challenge;
    psl.testimonial = { _type: "reference", _ref: "testimonial-psl" };
  }

  const extra = [
    {
      _id: "caseStudy-podcast-studio-london",
      _type: "caseStudy",
      title: "podcast studio london",
      slug: { _type: "slug", current: "podcast-studio-london" },
      client: "podcast studio london",
      positioning: "a london podcast studio with a brand that finally matches the rooms.",
      sector: "media",
      year: "2025",
      services: ["brand + identity", "voice + messaging", "product, web + growth"],
      projectType: "client",
      order: 7,
      featured: true,
      brief:
        "podcast studio london runs premium recording spaces for founders, brands and broadcasters. they needed a brand and digital presence that matched the quality of the studios.",
      thinking:
        "strong physical product, weak digital first impression. prospective clients were booking on reputation and word of mouth alone.",
      whatWeDid:
        "brand positioning, visual identity, voice and a site built to convert browsing into booking conversations.",
      resultsNarrative:
        "a coherent brand across site, social and studio touchpoints, and a clearer path from discovery to enquiry.",
      results: [],
      testimonial: { _type: "reference", _ref: "testimonial-psl" },
      seo: {
        metaTitle: "podcast studio london | bmkrs.",
        metaDescription: "brand, voice and site for a london podcast studio.",
      },
    },
    {
      _id: "caseStudy-david-wheeler-psychology",
      _type: "caseStudy",
      title: "david wheeler psychology",
      slug: { _type: "slug", current: "david-wheeler-psychology" },
      client: "david wheeler psychology",
      positioning: "a clinical practice brand that earns trust before the first session.",
      sector: "healthcare",
      year: "2025",
      services: ["brand + identity", "voice + messaging"],
      projectType: "client",
      order: 9,
      featured: false,
      brief:
        "david wheeler psychology is building a private practice with a clear specialism and a reputation to protect. the work needed a brand that felt credible to referrers and calm to prospective clients.",
      thinking:
        "clinical brands fail when they look like generic wellness templates. the practice needed warmth without vagueness, and authority without coldness.",
      whatWeDid:
        "positioning, identity and voice for a practice still in launch. full case study copy and imagery to follow once the practice is live.",
      results: [],
      seo: {
        metaTitle: "david wheeler psychology | bmkrs.",
        metaDescription: "a clinical practice brand that earns trust before the first session.",
      },
    },
    {
      _id: "caseStudy-three18-media",
      _type: "caseStudy",
      title: "three18 media",
      slug: { _type: "slug", current: "three18-media" },
      client: "three18 media",
      positioning: "a production company finding its voice in a crowded content market.",
      sector: "media",
      year: "2025",
      services: ["brand + identity", "voice + messaging", "product, web + growth"],
      projectType: "client",
      order: 10,
      featured: false,
      brief:
        "three18 media produces branded content for founders and growing companies. they needed a sharper story and a presence that matched the quality of the work in the reel.",
      thinking:
        "production companies often lead with gear and process. three18's edge is judgement and taste. the brand had to signal that before anyone pressed play.",
      whatWeDid:
        "brand positioning and messaging framework. visual identity and site work in progress. case study to be completed when the new site ships.",
      results: [],
      seo: {
        metaTitle: "three18 media | bmkrs.",
        metaDescription: "a production company finding its voice in a crowded content market.",
      },
    },
    {
      _id: "caseStudy-freelance-near-me",
      _type: "caseStudy",
      title: "freelance near me",
      slug: { _type: "slug", current: "freelance-near-me" },
      positioning: "a local-first marketplace we built because the brief kept appearing in client work.",
      sector: "marketplace",
      year: "2025",
      services: ["brand + identity", "product, web + growth"],
      projectType: "studio",
      order: 8,
      featured: true,
      brief:
        "freelance near me connects local freelancers with nearby clients. it is a bmkrs studio product: we ship our own ideas to prove we live with the consequences of our advice.",
      whatWeDid:
        "positioning, brand, product design and build. one team from name to shipped product.",
      resultsNarrative:
        "a live product in market, built with the same rigour we bring to client launches.",
      results: [],
      seo: {
        metaTitle: "freelance near me | bmkrs.",
        metaDescription: "a bmkrs studio product: local-first freelance marketplace.",
      },
    },
  ];

  const ids = new Set(withType.map((c) => c._id));
  for (const cs of extra) {
    if (!ids.has(cs._id)) withType.push(cs);
  }

  writeNdjson("case-studies.ndjson", withType);
  console.log(`  case-studies.ndjson (${withType.length} case studies)`);
}

function generateSiteSettings() {
  writeNdjson("site-settings.ndjson", [
    {
      _id: "siteSettings",
      _type: "siteSettings",
      siteName: "bmkrs.",
      tagline: "a brand company run by builders.",
      description:
        "the better-told brand wins. we make sure it is yours. brand, voice, pr and the product behind it, from one team.",
      generalEmail: "hello@bmkrs.com",
      pressEmail: "press@bmkrs.com",
      networkEmail: "network@bmkrs.com",
      companyName: "b makers ltd",
      registeredAddress: "",
      copyright: "© 2026 b makers ltd. all rights reserved.",
      heroReelUrl: "/videos/hero-reel.mp4",
      socialLinks: [
        { _key: "ig", platform: "instagram", url: "https://instagram.com/bmkrs.global" },
        { _key: "li", platform: "linkedin", url: "https://www.linkedin.com/company/bmkrs" },
      ],
    },
  ]);
  console.log("  site-settings.ndjson");
}

function generateTestimonials() {
  writeNdjson("testimonials.ndjson", [
    {
      _id: "testimonial-psl",
      _type: "testimonial",
      quote:
        "they gave us a brand we could actually use week to week, not a deck that sat in a folder. the site finally sounds like the studios.",
      name: "founder",
      role: "podcast studio london",
      company: "podcast studio london",
      caseStudy: { _type: "reference", _ref: "caseStudy-podcast-studio-london" },
    },
  ]);
  console.log("  testimonials.ndjson");
}

function main() {
  console.log("Generating Sanity seed files…");
  generateAbout();
  generateProducts();
  generateCaseStudies();
  generatePosts();
  generateTestimonials();
  generateSiteSettings();
  fs.writeFileSync(
    path.join(seedDir, "legacy-post-ids.json"),
    JSON.stringify(LEGACY_POST_IDS, null, 2) + "\n",
  );
  console.log("Done.");
}

main();
