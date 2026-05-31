# Amplified — amplified.co.uk

Management consultancy and digital agency site. Two tracks: **Digital Transformation** (AI governance, structured delivery) and **Digital Growth** (web builds, UX, performance marketing).

## Stack

- **Vite** + **React** + **react-router-dom**
- CSS-only design system (no Tailwind). Fonts: Syne, DM Sans, JetBrains Mono.

## Develop

```bash
npm install
npm run dev
```

## Build & preview

```bash
npm run build
npm run preview
```

## Deploy

- Build outputs to `dist/`. Serve as static site (e.g. Replit Deployments, Vercel, Netlify).
- **Redirects:** `/transformation` → `/how-we-work` and `/press` → `/insights` are handled in-app. For **www → non-www**, configure a 301 at your host.
- **Meta:** Per-page title, description, and Open Graph use `react-helmet-async` and `PageMeta`. OG image: `public/og-image.png` (1200×630).

## Contact form (Formspree)

Set `VITE_FORMSPREE_ID` in `.env` (see `.env.example`). Get a form ID from formspree.io. Without it, the form prompts visitors to email hello@amplified.co.uk.

## Structure

- `src/components/layout` — Nav, Footer
- `src/components/home` — Hero, CredBar, Tension, AmpModel, SectorTabs, StatsBar, Insights, CTA
- `src/components/shared` — AmpCard, SectorPanel, InsightCard, SectionLabel, Button
- `src/hooks` — useReveal, useNav, useTicker
- `src/pages` — HomePage, HowWeWork, Contact, services/, sectors/, insights/

## Design

- Colours, type scale, motion and layout follow the Amplified Definitive Build Brief (v3). Accent: `#C8FF00`. Background: `#0A0A0A`.
