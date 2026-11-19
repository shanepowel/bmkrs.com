import type { PressKitContent } from "@/lib/types";

const BRAND = "/brand";

export const fallbackPressKit: PressKitContent = {
  headline: "everything you need to write about bmkrs.",
  intro:
    "logos, colours, type, boilerplate and usage rules. download what you need. questions: press@bmkrs.com.",
  shortBoilerplate:
    "bmkrs is an independent creative and digital studio in London. We bring strategy, design and technology together to help ambitious businesses make meaningful things happen.",
  longBoilerplate:
    "LRC Labs Ltd is the parent company of bmkrs. Co-founded by Shane Powell and Marcelo, bmkrs is an independent creative and digital studio in London, working with ambitious businesses across strategy, design, digital products and technology. One connected team helps shape ideas, make meaningful products and experiences, and keep building on what works. The studio also makes and runs its own products, so we live with the consequences of our decisions.",
  founderBio:
    "Shane Powell co-founded bmkrs with Marcelo. He brings years of experience building products and delivery teams in complex organisations, and works closely with the people shaping and making each project.",
  legalName: "LRC Labs Ltd",
  location: "london, and wherever you are",
  founded: "2013",
  colors: [
    { name: "ink", hex: "#181613", role: "primary dark surface, photography backgrounds" },
    { name: "paper", hex: "#F1EFE8", role: "reading surfaces, documents, print backgrounds" },
    { name: "orange", hex: "#FF4D00", role: "logo dot and site accent only. never recolour the dot." },
    { name: "body on ink", hex: "#D3D1C7", role: "long copy on dark surfaces" },
    { name: "body on paper", hex: "#444441", role: "long copy on light surfaces" },
  ],
  typefaces: [
    {
      name: "archivo",
      role: "logo wordmark only",
      source: "google fonts (ofl)",
      weights: "medium 500",
    },
    {
      name: "cabinet grotesk",
      role: "site display and body",
      source: "fontshare (self-hosted)",
      weights: "400, 500",
    },
    {
      name: "fragment mono",
      role: "site metadata and kickers",
      source: "google fonts (ofl)",
      weights: "400",
    },
  ],
  logoAssets: [
    {
      name: "primary dark",
      fileUrl: `${BRAND}/bmkrs-primary-dark.svg`,
      format: "svg",
      usage: "default on dark backgrounds. off-white wordmark, orange dot.",
    },
    {
      name: "primary light",
      fileUrl: `${BRAND}/bmkrs-primary-light.svg`,
      format: "svg",
      usage: "documents, invoices, light backgrounds, print.",
    },
    {
      name: "mono white",
      fileUrl: `${BRAND}/bmkrs-mono-white.svg`,
      format: "svg",
      usage: "busy photography or where orange would clash.",
    },
    {
      name: "mono black",
      fileUrl: `${BRAND}/bmkrs-mono-black.svg`,
      format: "svg",
      usage: "mono print, embossing, single-colour constraints.",
    },
    {
      name: "inverse orange",
      fileUrl: `${BRAND}/bmkrs-inverse-orange.svg`,
      format: "svg",
      usage: "campaign moments only. never the default.",
    },
    {
      name: "icon dark",
      fileUrl: `${BRAND}/bmkrs-icon-dark.svg`,
      format: "svg",
      usage: "favicon, app icon, small avatars.",
    },
    {
      name: "icon light",
      fileUrl: `${BRAND}/bmkrs-icon-light.svg`,
      format: "svg",
      usage: "icon on light contexts.",
    },
    {
      name: "avatar 512",
      fileUrl: `${BRAND}/bmkrs-avatar-512.svg`,
      format: "svg",
      usage: "social profile square. also available as png at 512 and 1024.",
    },
    {
      name: "avatar png 512",
      fileUrl: "/images/bmkrs-avatar-512.png",
      format: "png",
      usage: "social profiles, og default image.",
    },
    {
      name: "avatar png 1024",
      fileUrl: "/images/bmkrs-avatar-1024.png",
      format: "png",
      usage: "high-res social and press use.",
    },
    {
      name: "logo guidelines",
      fileUrl: `${BRAND}/LOGO-GUIDELINES.md`,
      format: "md",
      usage: "full logo system rules and clearspace.",
    },
  ],
  usageRules: [
    "the dot is always present and always last. the wordmark is never set without it.",
    "in colour versions the dot is the only orange element (except inverse-orange, where roles flip).",
    "clearspace: the height of the lowercase b on all sides.",
    "minimum wordmark width: 96px on screen, 24mm in print. below that, use the icon mark.",
    "never recolour the dot, add effects, or set the wordmark in cabinet grotesk.",
    "on photography, primary-dark needs a quiet area or scrim; otherwise use mono-white.",
  ],
  updatedAt: "2026-06-03",
};
