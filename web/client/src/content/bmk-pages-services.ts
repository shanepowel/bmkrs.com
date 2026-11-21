import type { BmkPageContent } from "./bmk-types";

const threeWays = {
  type: "grid" as const,
  code: "§ 03",
  eyebrow: "Three ways to start",
  title: "Pick a size. We'll pick up the tools.",
  items: [
    {
      code: "MK 01 · 2 WEEKS",
      title: "Sprint",
      body: "From a loose idea to something you can click, test and show your board. Brand direction, product shape and a working prototype.",
      tags: ["Prototype", "Brand direction", "Build plan"],
    },
    {
      code: "MK 02 · 6 TO 12 WEEKS",
      title: "Build",
      body: "We design, engineer and launch the first real version, live and in the hands of real users.",
      tags: ["Live product", "Design system", "Handover"],
    },
    {
      code: "MK 03 · MONTHLY",
      title: "Crew",
      body: "A small senior team that keeps shipping after launch, on a steady monthly rhythm.",
      tags: ["Releases", "Growth", "One lead"],
    },
  ],
};

export const servicesPages: Record<string, BmkPageContent> = {
  services: {
    id: "services",
    path: "/services",
    metaTitle: "What we make | Brand, products and AI | bmkrs",
    metaDescription:
      "bmkrs designs, builds and launches brands, websites, digital products and practical AI. Small, senior team. Real things shipped.",
    hero: {
      code: "BMK / SERVICES",
      eyebrow: "What we make",
      title: "Brands, products and AI.",
      accent: "Made, not just planned.",
      lead: "Seven things we're very good at, one team doing all of them. Pick the one you need now; we'll make sure it joins up with the rest later.",
      image: "megaphone",
      figLabel: "FIG. 01 / THE STUDIO",
      primaryCta: { label: "Let's build something", href: "/contact" },
      secondaryCta: { label: "How we work", href: "/how-we-work" },
    },
    blocks: [
      {
        type: "grid",
        code: "§ 01",
        eyebrow: "Capabilities",
        title: "What we make.",
        items: [
          { code: "BMK 01", title: "Brand and identity", body: "Names, logos, voice and the visual system that holds it all together.", tags: ["Naming", "Identity", "Voice"], href: "/services/brand" },
          { code: "BMK 02", title: "Websites and platforms", body: "Fast, good-looking sites your team can update without calling us.", tags: ["Next.js", "Headless CMS", "SEO"], href: "/services/websites" },
          { code: "BMK 03", title: "Digital products", body: "Apps, portals and marketplaces, from first sketch to paying users.", tags: ["Product design", "Web apps", "Marketplaces"], href: "/services/products" },
          { code: "BMK 04", title: "AI and automation", body: "Practical AI that removes real work, with sensible guardrails from day one.", tags: ["AI features", "Agents", "Automation"], href: "/ai" },
          { code: "BMK 05", title: "AI tokenomics", body: "Know what your AI costs, what it earns, and how to get more from every token.", tags: ["Cost per outcome", "Model routing", "Budgets"], href: "/ai/tokenomics" },
          { code: "BMK 06", title: "Growth and content", body: "Campaigns, content and the tracking to know what is actually working.", tags: ["Paid social", "Content", "Analytics"], href: "/services/growth" },
          { code: "BMK 07", title: "Delivery leadership", body: "When it is bigger than a studio job, we lead the programme and the partners.", tags: ["Programme lead", "Multi-agency"], href: "/services/delivery" },
        ],
      },
      {
        type: "statement",
        text: "One team for the brand, the build and the AI.",
        accent: "Fewer handoffs. Fewer surprises.",
      },
      threeWays,
    ],
  },

  "services-brand": {
    id: "services-brand",
    path: "/services/brand",
    metaTitle: "Brand and identity | bmkrs",
    metaDescription:
      "Naming, identity, tone of voice and design systems from bmkrs. Brands built to be used, on every screen and in every channel.",
    hero: {
      code: "BMK 01",
      eyebrow: "Brand and identity",
      title: "A brand you can",
      accent: "actually use.",
      lead: "Not a logo and a PDF that gathers dust. We make the name, the look, the voice and the system your team needs to put it to work everywhere, from the website to the sales deck.",
      image: "megaphone",
      figLabel: "FIG. 01 / BRAND",
      primaryCta: { label: "Start a brand Sprint", href: "/contact" },
      facts: [
        { label: "Typical length", value: "2 to 6 weeks" },
        { label: "You own", value: "Every file" },
        { label: "Built in", value: "Figma and code" },
      ],
    },
    blocks: [
      {
        type: "grid",
        code: "§ 01",
        eyebrow: "What's in the box",
        title: "Everything you need to look and sound like yourselves.",
        items: [
          { title: "Positioning", body: "Who you're for, why you're different, and the one line that says it. The bit everything else hangs off." },
          { title: "Naming", body: "Names that are short, ownable and have a domain you can actually buy." },
          { title: "Identity", body: "Logo, colour, type and imagery, designed to work small on a phone and big on a stand." },
          { title: "Tone of voice", body: "How you write, with real examples. Plain English that sounds like a person, not a press release." },
          { title: "Design system", body: "Components and tokens your developers can build with, so the brand survives contact with the product." },
          { title: "Launch kit", body: "Templates for social, slides and email so the team can use the new brand on day one." },
        ],
      },
      {
        type: "split",
        code: "§ 02",
        eyebrow: "How it runs",
        title: "Fast, visible and argued out early.",
        paragraphs: [
          "We show you work within days, not weeks. Rough routes first, so you can react while it's still cheap to change direction.",
          "By the end, the brand is already live in something real: a homepage, a product screen, a pitch deck. That's how you know it works.",
        ],
        image: "headphones",
        figLabel: "FIG. 02 / VOICE",
        listTitle: "You walk away with",
        list: ["Brand guidelines your team will read", "Logo and asset files", "Design tokens for developers", "Templates for social, slides and email"],
      },
      {
        type: "links",
        code: "§ 03",
        eyebrow: "Goes well with",
        title: "Brand rarely travels alone.",
        items: [
          { label: "Websites and platforms", href: "/services/websites", desc: "Put the new brand live on a site that's quick to update." },
          { label: "Growth and content", href: "/services/growth", desc: "Launch it with campaigns and content that get seen." },
          { label: "AI and automation", href: "/ai", desc: "Use AI to keep content on-brand at scale." },
        ],
      },
    ],
  },

  "services-websites": {
    id: "services-websites",
    path: "/services/websites",
    metaTitle: "Websites and platforms | bmkrs",
    metaDescription:
      "Fast, accessible, search-friendly websites built on modern stacks, with a CMS your team can run. Designed and built by bmkrs.",
    hero: {
      code: "BMK 02",
      eyebrow: "Websites and platforms",
      title: "Sites that load fast,",
      accent: "rank well and sell.",
      lead: "We design and build websites on modern, proven tools, with a content system your team can run without a developer on speed dial. Then we keep making them better.",
      image: "laptop",
      figLabel: "FIG. 01 / WEB",
      primaryCta: { label: "Talk about your site", href: "/contact" },
      facts: [
        { label: "Typical length", value: "4 to 10 weeks" },
        { label: "Stack", value: "Next.js, headless CMS" },
        { label: "Hosting", value: "Vercel or yours" },
      ],
    },
    blocks: [
      {
        type: "grid",
        code: "§ 01",
        eyebrow: "What we build",
        title: "From a sharp marketing site to a full platform.",
        items: [
          { title: "Marketing sites", body: "Fast, good-looking and built to convert, with pages your team can add in minutes." },
          { title: "Content platforms", body: "Headless CMS set-ups for teams publishing a lot, across more than one site or channel." },
          { title: "E-commerce", body: "Shops and checkouts that load quickly and don't lose people at the last step." },
          { title: "Portals", body: "Logged-in areas for customers, members or partners, joined to your other systems." },
          { title: "Search and AI visibility", body: "Technical SEO plus structured content, so you show up in search and in AI answers." },
          { title: "Accessibility", body: "Built to WCAG 2.2 AA from the start, not bolted on after an audit." },
        ],
      },
      {
        type: "split",
        code: "§ 02",
        eyebrow: "Proof",
        title: "We've rebuilt big sites under pressure.",
        paragraphs: [
          "Our team led the rebuild of a leading online wine retailer's customer website onto React and Node, across several agencies. Checkout got faster and sales went up by 20%.",
          "Same approach for you, at whatever size fits: modern stack, clear ownership, measurable results.",
        ],
        listTitle: "You walk away with",
        list: ["A live site, not a staging link", "A CMS your team is trained on", "Performance and SEO baselines", "A backlog of what to improve next"],
      },
      {
        type: "faq",
        code: "§ 03",
        title: "Things people ask.",
        items: [
          { q: "Can you work with our existing CMS?", a: "Usually, yes. If it's holding you back we'll say so and show you the cost of moving, but we won't force a rebuild you don't need." },
          { q: "Do you host it?", a: "We can set up and manage hosting, or hand it over to your own team. Either way you own the code and the accounts." },
          { q: "What about AI on the site?", a: "Search, chat and personalisation can all be added, with sensible limits on cost. See our AI tokenomics work for how we keep that spend in check." },
        ],
      },
    ],
  },

  "services-products": {
    id: "services-products",
    path: "/services/products",
    metaTitle: "Digital products | Apps, portals and marketplaces | bmkrs",
    metaDescription:
      "bmkrs designs and builds digital products: web apps, portals and marketplaces, from first prototype to paying users, with AI built in where it earns its place.",
    hero: {
      code: "BMK 03",
      eyebrow: "Digital products",
      title: "From first sketch",
      accent: "to paying users.",
      lead: "We design, build and launch apps, portals and marketplaces. We run our own products too, so we know the difference between a demo and a business.",
      image: "vr",
      figLabel: "FIG. 01 / PRODUCT",
      primaryCta: { label: "Start a product Sprint", href: "/contact" },
      secondaryCta: { label: "See what we've made", href: "/our-work" },
    },
    blocks: [
      {
        type: "steps",
        code: "§ 01",
        eyebrow: "How a product gets made",
        title: "Small steps you can see.",
        items: [
          { title: "Prove", body: "A clickable prototype in front of real users within two weeks." },
          { title: "Build", body: "The smallest version people will pay for or use every day." },
          { title: "Launch", body: "Live, measured, and supported by people who know the code." },
          { title: "Grow", body: "Fortnightly releases driven by what users actually do." },
        ],
      },
      {
        type: "grid",
        code: "§ 02",
        eyebrow: "What we build",
        title: "The kinds of products we know well.",
        items: [
          { title: "Marketplaces", body: "Two-sided platforms with listings, search, payments and trust built in. We run two of our own." },
          { title: "SaaS tools", body: "Subscription products with sign-up, billing and the admin you'll need from week one." },
          { title: "Customer portals", body: "Self-service that cuts calls and emails, joined to the systems you already have." },
          { title: "Internal tools", body: "The spreadsheet that runs the business, turned into something safer and faster." },
          { title: "AI-first products", body: "Products where AI is the core, designed so the cost per user still makes sense at scale." },
          { title: "Rescues and modernisation", body: "A product that's buggy, stuck or built on ageing tech. We stabilise it, modernise the platform, connect it to your other systems and automate the release pipeline.", tags: ["Legacy", "APIs", "DevOps"] },
        ],
      },
      {
        type: "callout",
        eyebrow: "Got a codebase that needs sorting?",
        title: "Make any codebase solid with EmberNest.",
        body: "For products that have grown messy, or where AI is writing more of the code, we use EmberNest to assess the codebase and turn fixes into scoped, approved work.",
        href: "/ai/embernest",
        linkLabel: "How EmberNest helps",
      },
    ],
  },

  "services-growth": {
    id: "services-growth",
    path: "/services/growth",
    metaTitle: "Growth and content | bmkrs",
    metaDescription:
      "Campaigns, content, paid social and analytics from bmkrs, with AI used to make more good work, not more noise.",
    hero: {
      code: "BMK 06",
      eyebrow: "Growth and content",
      title: "Get seen.",
      accent: "Know what worked.",
      lead: "Campaigns, content and paid social, with the tracking set up properly so every pound has a result next to it. We use AI to make more good work, not more noise.",
      image: "speakers",
      figLabel: "FIG. 01 / SIGNAL",
      primaryCta: { label: "Talk about growth", href: "/contact" },
    },
    blocks: [
      {
        type: "grid",
        code: "§ 01",
        eyebrow: "What we do",
        title: "Growth that's measured, not guessed.",
        items: [
          { title: "Launch campaigns", body: "A plan, the creative and the media to get a new brand or product noticed." },
          { title: "Paid social", body: "Ad creative tested before it goes live, then optimised on real results." },
          { title: "Content engines", body: "Articles, video and social on a steady rhythm, with AI helping and humans in charge." },
          { title: "Search and AI answers", body: "Content built to show up in Google and in tools like ChatGPT." },
          { title: "Analytics", body: "Tracking set up properly, and dashboards people actually look at." },
          { title: "Email and CRM", body: "Journeys that turn interest into customers and customers into regulars." },
        ],
      },
      {
        type: "split",
        code: "§ 02",
        eyebrow: "Our own tools",
        title: "We built the tool we wanted for creative testing.",
        paragraphs: [
          "Viralyz is our own product. It scores short-form video and ad creative before it goes live, so you spend on the work most likely to land.",
          "We use it on client campaigns, which means less guesswork and fewer wasted budgets.",
        ],
        image: "headphones",
        figLabel: "FIG. 02 / VIRALYZ",
      },
    ],
  },

  "services-delivery": {
    id: "services-delivery",
    path: "/services/delivery",
    metaTitle: "Delivery leadership | bmkrs",
    metaDescription:
      "When a build involves several teams, agencies or suppliers, bmkrs leads the programme: one plan, one owner, and things that actually go live.",
    hero: {
      code: "BMK 07",
      eyebrow: "Delivery leadership",
      title: "When it's bigger",
      accent: "than a studio job.",
      lead: "Some builds need several teams, agencies and suppliers pulling the same way. We lead those programmes: one plan, one accountable owner, and a steady drumbeat of things going live.",
      image: "workshop",
      figLabel: "FIG. 01 / THE ROOM",
      primaryCta: { label: "Talk to us", href: "/contact" },
    },
    blocks: [
      {
        type: "ledger",
        code: "§ 01",
        eyebrow: "Where our people have led",
        title: "Seventeen years of getting big things live.",
        footnote: "Programmes led by members of the bmkrs team in previous roles.",
        items: [
          { title: "Online wine retailer", body: "Customer website replatformed across several agencies, including pricing and technical decisions.", meta: "20% more sales" },
          { title: "UK energy supplier", body: "New payments platform with a better customer experience.", meta: "£250k a year saved, 38% fewer errors" },
          { title: "London broadband provider", body: "Customer portal delivered by four scrum teams in two locations.", meta: "4 teams, 1 plan" },
          { title: "Global outdoor advertising group", body: "Advertising platform built end to end and wired into Google analytics.", meta: "Full lifecycle" },
          { title: "UK university", body: "Programme-level move from on-premise systems to the cloud.", meta: "Cloud migration" },
        ],
      },
      {
        type: "grid",
        code: "§ 02",
        eyebrow: "What you get",
        title: "Calm, visible delivery.",
        cols: 2,
        items: [
          { title: "One plan", body: "A single view of scope, dates and risk that everyone, including the board, can read." },
          { title: "Supplier management", body: "Agencies and vendors held to clear outcomes, not just hours." },
          { title: "AI-assisted delivery, governed", body: "When AI is writing code across teams, we use EmberNest to keep it scoped, approved and evidenced." },
          { title: "Coaching on the job", body: "We coach your delivery leads, product owners and teams while the work happens, so the way of working stays when we step back." },
          { title: "Extra hands, quickly", body: "Need more capacity? We add senior people to your team, working your way, without a long recruitment cycle." },
        ],
      },
    ],
  },
};
