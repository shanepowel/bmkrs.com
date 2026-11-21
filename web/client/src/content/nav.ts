/**
 * The one source of truth for site navigation. The desktop menu, mobile menu and
 * footer are all built from this list, so they always match.
 */
import { brand } from "@/lib/brand";

export type NavItem = { tag?: string; name: string; desc: string; href: string };
export type NavMenu = {
  id: string;
  label: string;
  width: string;
  align: "center" | "right";
  feature?: { eyebrow: string; title: string; desc: string; href: string };
  items: NavItem[];
  footer?: { label: string; value: string; href: string };
};

export const navMenus: NavMenu[] = [
  {
    id: "what",
    label: "What we do",
    width: "w-[520px]",
    align: "center",
    feature: {
      eyebrow: "Three ways to start",
      title: "Sprint · Build · Crew",
      desc: "Two weeks, a few months, or a team on tap.",
      href: "/services",
    },
    items: [
      { tag: "BMK 01", name: "Brand and identity", desc: "Names, logos, voice and visual systems", href: "/services/brand" },
      { tag: "BMK 02", name: "Websites and platforms", desc: "Fast sites your team can run themselves", href: "/services/websites" },
      { tag: "BMK 03", name: "Digital products", desc: "Apps, portals and marketplaces", href: "/services/products" },
      { tag: "BMK 06", name: "Growth and content", desc: "Campaigns, content and tracking", href: "/services/growth" },
      { tag: "BMK 07", name: "Delivery leadership", desc: "Programmes across teams and suppliers", href: "/services/delivery" },
    ],
    footer: { label: "How we work", value: "Sketch → Make → Ship → Grow", href: "/how-we-work" },
  },
  {
    id: "ai",
    label: "AI",
    width: "w-[460px]",
    align: "center",
    feature: {
      eyebrow: "AI Sprint · 2 weeks",
      title: "A working AI use case on your data",
      desc: "With its cost per run, so you know if it's worth scaling.",
      href: "/ai",
    },
    items: [
      { tag: "BMK 04", name: "AI and automation", desc: "Assistants, agents and AI in your product", href: "/ai" },
      { tag: "BMK 05", name: "AI tokenomics", desc: "Know what your AI costs, and make each token count", href: "/ai/tokenomics" },
      { tag: "EN", name: "EmberNest", desc: "Governed AI-assisted software delivery", href: "/ai/embernest" },
    ],
  },
  {
    id: "work",
    label: "Our work",
    width: "w-[320px]",
    align: "center",
    items: [
      { name: "What we've made", desc: "Viralyz, Konduit, FreelanceNearMe", href: "/our-work" },
      { name: "Track record", desc: "Programmes our people have led", href: "/case-studies" },
      { name: "Insights", desc: "Notes from the studio", href: "/insights" },
    ],
  },
  {
    id: "company",
    label: "Company",
    width: "w-[300px]",
    align: "center",
    items: [
      { name: `About ${brand.name}`, desc: "Who we are and how we think", href: "/about" },
      { name: "How we work", desc: "Sketch, make, ship, grow", href: "/how-we-work" },
      { name: "Careers", desc: "Make things with us", href: "/careers" },
      { name: "Contact", desc: "Start a conversation", href: "/contact" },
    ],
  },
  {
    id: "who",
    label: "Who we work with",
    width: "w-[340px]",
    align: "right",
    items: [
      { name: "Founders and start-ups", desc: "Idea to launch without the bloat", href: "/for/founders" },
      { name: "Growing businesses", desc: "Rebuild what's holding you back", href: "/for/scale-ups" },
      { name: "Marketing teams", desc: "More good work, not more headcount", href: "/for/marketing-teams" },
      { name: "CTOs and digital leads", desc: "Ship faster with AI, keep control", href: "/for/ctos" },
    ],
  },
];


/** Legal links shown in the footer bar. */
export const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Modern slavery", href: "/modern-slavery" },
];
