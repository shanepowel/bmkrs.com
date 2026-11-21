import type { BmkPageContent } from "./bmk-types";

export const companyPages: Record<string, BmkPageContent> = {
  /* ------------------------- WHO WE WORK WITH ------------------------- */
  "for-founders": {
    id: "for-founders",
    path: "/for/founders",
    metaTitle: "For founders and start-ups | bmkrs",
    metaDescription:
      "bmkrs helps founders go from idea to a brand, a product and a launch, with AI built in where it makes sense. Fast, senior and honest about cost.",
    hero: {
      code: "FOR / 01",
      eyebrow: "Founders and start-ups",
      title: "From idea to launch",
      accent: "without the agency bloat.",
      lead: "You need a brand, a product and a launch, and you need them to cost what you planned. We've built our own start-ups, so we'll tell you what to skip as well as what to build.",
      image: "portrait",
      figLabel: "FIG. 01 / DAY ONE",
      primaryCta: { label: "Start a Sprint", href: "/contact" },
    },
    blocks: [
      {
        type: "grid",
        code: "§ 01",
        eyebrow: "What founders usually need",
        title: "The essentials, done properly.",
        items: [
          { title: "A clickable prototype", body: "Something to put in front of users and investors in two weeks." },
          { title: "A brand that looks funded", body: "Name, identity and a launch site that make you look like you've been around for years." },
          { title: "A first version that works", body: "The smallest product people will actually pay for, built to grow." },
          { title: "AI where it helps", body: "Built in from day one, with costs that make sense per user." },
        ],
        cols: 2,
      },
      {
        type: "split",
        code: "§ 02",
        eyebrow: "Why us",
        title: "We spend your money like it's ours.",
        paragraphs: [
          "Because sometimes it is. We run Viralyz, Konduit and FreelanceNearMe ourselves, so we know what a wasted month feels like.",
          "You'll get straight advice on what to build now, what can wait, and what you shouldn't build at all.",
        ],
        image: "workshop",
        figLabel: "FIG. 02 / THE BENCH",
      },
    ],
  },

  "for-scale-ups": {
    id: "for-scale-ups",
    path: "/for/scale-ups",
    metaTitle: "For growing businesses | bmkrs",
    metaDescription:
      "bmkrs helps growing businesses rebuild what's holding them back: the site, the product, the brand, and the processes AI can take on.",
    hero: {
      code: "FOR / 02",
      eyebrow: "Growing businesses",
      title: "What got you here",
      accent: "won't get you there.",
      lead: "The website, the product and the spreadsheets that worked at ten people start creaking at fifty. We rebuild what's holding you back, and put AI to work on the jobs that are eating your team's week.",
      image: "speakers",
      figLabel: "FIG. 01 / GROWTH",
      primaryCta: { label: "Talk to us", href: "/contact" },
    },
    blocks: [
      {
        type: "grid",
        code: "§ 01",
        eyebrow: "Common jobs",
        title: "Where we usually start.",
        items: [
          { title: "Rebrand and relaunch", body: "A brand and site that match the business you are now." },
          { title: "Product rescue", body: "Stabilise a buggy product and get releases moving again." },
          { title: "Automate the busywork", body: "Agents and automations for the repetitive work that doesn't need a person." },
          { title: "Get AI costs under control", body: "If AI is already in your product, we'll show you what it costs per customer." },
          { title: "A crew on tap", body: "A senior team on a monthly rhythm, without hiring five people." },
          { title: "Growth engine", body: "Content, paid and analytics working together." },
        ],
      },
    ],
  },

  "for-marketing-teams": {
    id: "for-marketing-teams",
    path: "/for/marketing-teams",
    metaTitle: "For marketing teams | bmkrs",
    metaDescription:
      "bmkrs gives marketing teams a brand, website and content engine that work together, with AI to make more good work without more headcount.",
    hero: {
      code: "FOR / 03",
      eyebrow: "Marketing teams",
      title: "More good work.",
      accent: "Not more headcount.",
      lead: "A brand system people follow, a website you can update yourselves, and AI that helps the team make more on-brand content, with a person approving what goes out.",
      image: "megaphone",
      figLabel: "FIG. 01 / CAMPAIGN",
      primaryCta: { label: "Talk to us", href: "/contact" },
    },
    blocks: [
      {
        type: "grid",
        code: "§ 01",
        eyebrow: "What we do for marketers",
        title: "Joined up, end to end.",
        items: [
          { title: "Brand systems", body: "Guidelines, templates and design tokens your whole team can use.", href: "/services/brand" },
          { title: "Websites you control", body: "A CMS your team can run without a ticket to IT.", href: "/services/websites" },
          { title: "AI content workflows", body: "Draft, adapt and check content against your brand voice at scale.", href: "/ai" },
          { title: "Creative testing", body: "Score ad creative before you spend, using our own tool, Viralyz.", href: "/services/growth" },
        ],
        cols: 2,
      },
    ],
  },

  "for-ctos": {
    id: "for-ctos",
    path: "/for/ctos",
    metaTitle: "For CTOs and digital leads | bmkrs",
    metaDescription:
      "bmkrs helps CTOs and digital leads ship faster with AI while keeping control: governed AI-assisted delivery with EmberNest, AI tokenomics and senior delivery leadership.",
    hero: {
      code: "FOR / 04",
      eyebrow: "CTOs and digital leads",
      title: "Ship faster with AI.",
      accent: "Keep your hands on the wheel.",
      lead: "Your teams are already using AI to write code and your board wants AI in the product. We help you do both without losing control of quality, security or cost.",
      image: "vr",
      figLabel: "FIG. 01 / CONTROL",
      primaryCta: { label: "Talk to us", href: "/contact" },
    },
    blocks: [
      {
        type: "grid",
        code: "§ 01",
        eyebrow: "What we help with",
        title: "Three things CTOs ask us for.",
        items: [
          { code: "01", title: "Governed AI-assisted delivery", body: "EmberNest to assess the codebase and tie every AI-assisted change to scope, approval and evidence.", href: "/ai/embernest" },
          { code: "02", title: "AI tokenomics", body: "Cost per outcome for every AI feature and coding tool, with budgets that hold.", href: "/ai/tokenomics" },
          { code: "03", title: "Extra hands that are senior", body: "A crew to build, rescue or lead, without a long ramp-up.", href: "/services/delivery" },
        ],
      },
      {
        type: "statement",
        text: "More code isn't progress.",
        accent: "Better software is.",
      },
    ],
  },

  /* ------------------------------ COMPANY ----------------------------- */
  about: {
    id: "about",
    path: "/about",
    metaTitle: "About bmkrs | A small, senior studio that makes things real",
    metaDescription:
      "bmkrs is a small, senior studio that designs, builds and launches brands, products and practical AI. Part of Digiteq, and we run our own products too.",
    hero: {
      code: "BMK / ABOUT",
      eyebrow: "About us",
      title: "We're makers.",
      accent: "It's in the name.",
      lead: "bmkrs is a small, senior studio. We design, build and launch brands, digital products and practical AI for ambitious organisations, and we run our own products alongside.",
      image: "workshop",
      figLabel: "FIG. 01 / THE TEAM",
      primaryCta: { label: "Work with us", href: "/contact" },
      secondaryCta: { label: "How we work", href: "/how-we-work" },
    },
    blocks: [
      {
        type: "split",
        code: "§ 01",
        eyebrow: "Our story",
        title: "Built by people who got tired of decks.",
        paragraphs: [
          "Between us we've spent seventeen years leading digital delivery: websites, payment platforms, portals, AI products. Too often we watched good ideas die in a slide deck, or get built so slowly that the moment passed.",
          "So we set up the studio we wanted to hire. Small enough that the people you meet are the people doing the work. Broad enough to take an idea from name to launch to growth.",
          "bmkrs is part of Digiteq, a UK group that builds and runs digital brands. That's why we have our own products on the bench, and why we think like owners.",
        ],
        image: "portrait",
        figLabel: "FIG. 02 / LAUNCH DAY",
      },
      {
        type: "grid",
        code: "§ 02",
        eyebrow: "What we believe",
        title: "Six rules we work by.",
        items: [
          { code: "01", title: "Show, don't tell", body: "Working software beats a strategy document. Teams ship; frameworks don't. We put real things in front of you early." },
          { code: "02", title: "Small and senior", body: "No bench of juniors learning on your budget. The people you meet are the people doing the work." },
          { code: "03", title: "Spend it like it's ours", body: "Because we run our own products, we know what waste costs, and we'll tell you what not to build." },
          { code: "04", title: "Governance that helps you go faster", body: "Rules that slow everything down get ignored. We build checks into the work, so AI and software stay safe without stalling." },
          { code: "05", title: "Leave you stronger", body: "You own the code, the files and the know-how. Skills that leave with the supplier were never yours." },
          { code: "06", title: "The honest view", body: "We'll say when something won't work, and we'll walk away from work that isn't right for us or for you." },
        ],
      },
      {
        type: "ledger",
        code: "§ 03",
        eyebrow: "Responsibility",
        title: "How we try to do right by people and the planet.",
        lead: "Small commitments we can actually keep, rather than big claims we can't.",
        items: [
          { title: "Remote-first", body: "We work remotely by default and travel when it genuinely helps the work. It's the biggest thing a small studio can do about its footprint.", meta: "Fewer journeys" },
          { title: "Careful suppliers", body: "We favour cloud, hosting and service providers with published sustainability commitments, and UK and EU suppliers where it's practical.", meta: "Supply chain" },
          { title: "Steady growth", body: "We grow deliberately rather than hiring to fill capacity and cutting back later. Better for the people who work with us, and for clients.", meta: "Stable teams" },
          { title: "Giving time back", body: "We set aside some capacity each year for charities and social enterprises, and our people mentor and speak to help others into digital work.", meta: "Community" },
          { title: "Open doors", body: "We hire from every walk of life and invest in people's long-term development, including those who wouldn't usually get into this industry.", meta: "Inclusive hiring" },
          { title: "Honest reporting", body: "We don't claim to be carbon neutral. We review our impact each year and set ourselves realistic targets to improve.", meta: "Annual review" },
        ],
      },
    ],
  },

  "how-we-work": {
    id: "how-we-work",
    path: "/how-we-work",
    metaTitle: "How we work | Sketch, make, ship, grow | bmkrs",
    metaDescription:
      "How bmkrs works: short visible cycles, senior people, fixed-price Sprints, and AI used throughout, with costs and quality measured.",
    hero: {
      code: "BMK / METHOD",
      eyebrow: "How we work",
      title: "Sketch. Make.",
      accent: "Ship. Grow.",
      lead: "Short cycles you can see, senior people doing the work, and a real thing in front of you every fortnight. Here's what working with us is actually like.",
      image: "workshop",
      figLabel: "FIG. 01 / THE METHOD",
      primaryCta: { label: "Let's build something", href: "/contact" },
    },
    blocks: [
      {
        type: "steps",
        code: "§ 01",
        eyebrow: "The method",
        title: "Four stages, no mystery.",
        items: [
          { title: "Sketch", body: "Get the idea out of heads and onto paper. Fast, cheap and easy to change." },
          { title: "Make", body: "Build the real thing in fortnightly cycles. You see progress every time." },
          { title: "Ship", body: "Put it in front of real people, measure, then fix what they find." },
          { title: "Grow", body: "Improve what works, cut what doesn't, and hand over cleanly when you're ready." },
        ],
      },
      {
        type: "grid",
        code: "§ 02",
        eyebrow: "What to expect",
        title: "The practical stuff.",
        items: [
          { title: "One lead, start to finish", body: "A senior person who owns the outcome and answers your messages." },
          { title: "A demo every fortnight", body: "Working software or real designs, never just a status report." },
          { title: "Clear prices", body: "Sprints are fixed price. Builds are estimated up front and tracked openly." },
          { title: "AI throughout", body: "We use AI to work faster, governed with EmberNest and costed with tokenomics." },
          { title: "You own everything", body: "Code, designs, accounts and documents are yours from day one." },
          { title: "Clean handover", body: "Documentation and training so your team can carry on without us." },
        ],
      },
      {
        type: "grid",
        code: "§ 03",
        eyebrow: "Principles",
        title: "What doesn't change, whatever we're making.",
        cols: 2,
        items: [
          { title: "Honest sequencing", body: "We do things in the order that de-risks them, even when another order would look more exciting in a demo." },
          { title: "Embedded, not parachuted", body: "We work inside your team, your tools and your constraints, not from a distance." },
          { title: "Measured, not guessed", body: "Every piece of work has an outcome we can measure, agreed before we start." },
          { title: "Checks built in", body: "Security, accessibility, cost and AI governance are part of the work from day one, not an audit at the end." },
        ],
      },
      {
        type: "links",
        code: "§ 04",
        eyebrow: "Ways to start",
        title: "Pick a size.",
        items: [
          { label: "Sprint · 2 weeks", href: "/services", desc: "From loose idea to a working prototype and a plan." },
          { label: "Build · 6 to 12 weeks", href: "/services", desc: "The first real version, live with real users." },
          { label: "Crew · monthly", href: "/services", desc: "A senior team that keeps shipping after launch." },
        ],
      },
    ],
  },


  careers: {
    id: "careers",
    path: "/careers",
    metaTitle: "Careers | Make things with bmkrs",
    metaDescription:
      "bmkrs is a small, senior studio. We're always keen to meet designers, engineers, AI builders and marketers who like shipping real things.",
    hero: {
      code: "BMK / CAREERS",
      eyebrow: "Careers",
      title: "Like making things?",
      accent: "So do we.",
      lead: "We're a small, senior studio, so we don't hire often. But we're always keen to meet people who like shipping real work: designers, engineers, AI builders, marketers and delivery leads.",
      image: "portrait",
      figLabel: "FIG. 01 / YOU, PROBABLY",
      primaryCta: { label: "Email us your work", href: "mailto:hello@bmkrs.com?subject=Careers" },
    },
    blocks: [
      {
        type: "grid",
        code: "§ 01",
        eyebrow: "What it's like",
        title: "Small team, real work.",
        items: [
          { title: "You make things", body: "Client work and our own products. Your work goes live, often." },
          { title: "Senior by default", body: "You'll own outcomes, not tickets, and talk to clients directly." },
          { title: "AI in the toolkit", body: "We use AI every day, properly governed and costed." },
          { title: "Remote-first", body: "UK based, working where the work needs us." },
        ],
        cols: 2,
      },
      {
        type: "split",
        code: "§ 02",
        eyebrow: "How to get in touch",
        title: "Show us something you've made.",
        paragraphs: [
          "No cover letter needed. Send a link to something you've built, designed, written or shipped, and a couple of lines on what you'd like to do next.",
          "We read everything and reply to everyone.",
        ],
        image: "workshop",
        figLabel: "FIG. 02 / THE BENCH",
      },
    ],
    cta: {
      title: "Send us",
      accent: "your work.",
      lead: "A link and a couple of lines is plenty. hello@bmkrs.com",
      label: "Start a conversation",
    },
  },

  /* -------------------------------- WORK ------------------------------ */
  "our-work": {
    id: "our-work",
    path: "/our-work",
    metaTitle: "Our work | Products we've made and run | bmkrs",
    metaDescription:
      "Products bmkrs has designed, built and runs itself, including Viralyz, Konduit and FreelanceNearMe, plus programmes our team has led.",
    hero: {
      code: "BMK / WORK",
      eyebrow: "What we've made",
      title: "We'd rather",
      accent: "show you.",
      lead: "Our own products, built and run by the same team that works on yours, plus the programmes our people have led along the way.",
      image: "laptop",
      figLabel: "FIG. 01 / ON THE BENCH",
      primaryCta: { label: "Let's build something", href: "/contact" },
      secondaryCta: { label: "Track record", href: "/case-studies" },
    },
    blocks: [
      {
        type: "grid",
        code: "§ 01",
        eyebrow: "On the bench",
        title: "Products we run ourselves.",
        items: [
          { code: "MADE 01", title: "Viralyz", body: "Scores short-form video and ad creative before it goes live, so creators and brands know what will land and why.", tags: ["Creator tools", "AI scoring"], href: "https://viralyz.com", external: true },
          { code: "MADE 02", title: "Konduit", body: "Sourcing and procurement for Zimbabwe and the region, with suppliers in the UK, USA and China and stock you can order online.", tags: ["Marketplace", "E-commerce"], href: "https://konduit.co.zw", external: true },
          { code: "MADE 03", title: "FreelanceNearMe", body: "Connects people with local freelancers. Around 15,000 visitors a week, and being rebuilt as a proper SaaS platform.", tags: ["Marketplace", "Rebuild in progress"] },
        ],
      },
      {
        type: "grid",
        code: "§ 02",
        eyebrow: "Also from the studio",
        title: "Sites and platforms we've built.",
        cols: 2,
        items: [
          { code: "BUILT 01", title: "Podcast Studio London", body: "Website for a professional podcast recording studio in London: editorial design, an online booking flow and a studio showcase built to win both visiting talent and corporate clients.", tags: ["Website", "Booking", "Brand"], href: "https://podcaststudiolondon.com", external: true },
          { code: "BUILT 02", title: "Kaizened", body: "A continuous improvement learning platform rooted in Kaizen principles, for organisations building an improvement culture through structured, self-paced learning.", tags: ["Learning platform", "EdTech"], href: "https://kaizened.co.uk", external: true },
        ],
      },
      {
        type: "ledger",
        code: "§ 03",
        eyebrow: "Where our people have shipped",
        title: "Selected programmes.",
        footnote: "Programmes led by members of the bmkrs team in previous roles.",
        items: [
          { title: "Online wine retailer", body: "Customer website replatformed onto React and Node across several agencies.", meta: "Faster checkout, 20% more sales" },
          { title: "UK energy supplier", body: "A new payments platform with a better customer experience.", meta: "£250k a year saved, 38% fewer errors" },
          { title: "National housebuilder", body: "Photoreal AI that lets buyers place catalogue furniture into any room.", meta: "AI in the sales journey" },
          { title: "Global outdoor advertising group", body: "A new advertising platform built end to end and wired into Google analytics.", meta: "Full lifecycle" },
        ],
      },
    ],
  },

  "case-studies": {
    id: "case-studies",
    path: "/case-studies",
    metaTitle: "Track record | bmkrs",
    metaDescription:
      "Programmes led by members of the bmkrs team for retailers, energy suppliers, housebuilders, media groups and more.",
    hero: {
      code: "BMK / RECORD",
      eyebrow: "Track record",
      title: "Seventeen years of",
      accent: "making things go live.",
      lead: "Different sectors, same habit: get it built, get it live, prove it worked. These are programmes our people have led.",
      image: "mesh",
      figLabel: "FIG. 01 / RESULTS",
      primaryCta: { label: "Let's build something", href: "/contact" },
    },
    blocks: [
      {
        type: "ledger",
        code: "§ 01",
        eyebrow: "Selected programmes",
        title: "Results, not slideware.",
        footnote: "Programmes led by members of the bmkrs team in previous roles.",
        items: [
          { title: "Online wine retailer", body: "Customer-facing website replatformed onto React and Node, with several agencies, pricing and technical decisions to manage.", meta: "Faster checkout, 20% more sales" },
          { title: "UK energy supplier", body: "A new payments platform with a better customer experience and fewer things going wrong.", meta: "£250k a year saved, 38% fewer errors" },
          { title: "National housebuilder", body: "A photoreal AI platform letting buyers place catalogue furniture into any room.", meta: "AI in the sales journey" },
          { title: "Global outdoor advertising group", body: "A new advertising platform built end to end and integrated with Google's analytics tools.", meta: "Full lifecycle, one team" },
          { title: "London broadband provider", body: "Customer portal delivered by four scrum teams across two locations.", meta: "4 teams, 1 plan" },
          { title: "UK university", body: "Programme-level migration from on-premise systems to the cloud.", meta: "Cloud migration" },
        ],
      },
      {
        type: "callout",
        eyebrow: "Our own products",
        title: "See what we build for ourselves.",
        body: "Viralyz, Konduit and FreelanceNearMe: designed, built and run by bmkrs.",
        href: "/our-work",
        linkLabel: "What we've made",
      },
    ],
  },
};
