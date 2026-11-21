# Amplified

Marketing and content site for Amplified, a productised digital consultancy
focused on AI implementation and governance for project-driven industries.

Built with Next.js 15 (App Router), React 18, TypeScript and Tailwind CSS.
Content is managed in Sanity. Consultation requests and AI waste calculator
leads are stored in Postgres and forwarded to HubSpot CRM.

## Stack

- **Framework**: Next.js 15 App Router, React 18, TypeScript
- **Styling**: Tailwind CSS with shadcn/ui (Radix primitives)
- **CMS**: Sanity (Studio mounted at `/studio`)
- **Database**: Postgres (Neon) via Drizzle ORM — consultation requests and AI
  waste leads only
- **Email**: Resend (contact form notifications)
- **CRM**: HubSpot (consultation and newsletter sync)
- **Careers**: TalentHR
- **Assistant**: "Ask Amplified" uses the OpenAI API

## Getting started (Cursor / local)

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the environment template and fill in your values:

   ```bash
   cp .env.example .env.local
   ```

   At minimum, set `DATABASE_URL`. Sanity, OpenAI, Resend, HubSpot and TalentHR
   keys are optional for local development — the app falls back to bundled
   content and disables the relevant features when a key is missing.

   Set `ADMIN_API_KEY` in production to protect internal API routes
   (`/api/consultation-requests`, `/api/crm/*`, `/api/cms/dashboard`).

3. Push the database schema (for consultation requests and AI waste leads):

   ```bash
   npm run db:push
   ```

4. Start the dev server:

   ```bash
   npm run dev
   ```

   The site runs at `http://localhost:3000` and the Sanity Studio at
   `http://localhost:3000/studio`.

## Sanity CMS

The Studio is embedded in this app at `/studio`. Schemas live in `studio/`
and the configuration is in `sanity.config.ts`.

Content types:

- **insight** — articles for the Insights section
- **engagement** — the three productised engagements (Squad Blueprint, The
  Forge, Delivery Compass)
- **caseStudy** — reference case studies
- **siteSettings** — singleton holding the manifesto beliefs

### First-time setup

1. Create a project at <https://sanity.io/manage> and note the **Project ID**.
2. Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`
   (usually `production`) in `.env.local`.
3. In the Sanity dashboard, add `http://localhost:3000` and your production URL
   to **API → CORS origins** (with credentials allowed) so the Studio can load.
4. Create an **Editor/Write token** under **API → Tokens** and set it as
   `SANITY_API_WRITE_TOKEN` (only needed for seeding).

### Seed Sanity with the bundled content

This copies the engagements, case studies, manifesto and any insights already
in Postgres into your Sanity dataset:

```bash
npm run seed:sanity
```

Requires `NEXT_PUBLIC_SANITY_PROJECT_ID` and `SANITY_API_WRITE_TOKEN`.

### Fallback behaviour

When Sanity is not configured (no project ID), the site renders bundled
TypeScript content for engagements, insights, and case studies. This keeps
local development and the build working before Sanity is connected.

## Deploying to Vercel

1. Push this repository to GitHub and import it in Vercel.
2. Add the environment variables from `.env.example` in **Project Settings →
   Environment Variables**. Use the same `NEXT_PUBLIC_*` Sanity values you used
   locally.
3. Add your Vercel production domain to the Sanity **CORS origins** list.
4. Deploy. Vercel runs `npm run build` automatically.

The database schema changes are applied with `npm run db:push` (run locally
against your production `DATABASE_URL`); there is no separate migration step in
the build.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run check` | Type-check with `tsc` |
| `npm run db:push` | Push the Drizzle schema to Postgres |
| `npm run seed:sanity` | Seed Sanity with bundled content |

## Project structure

```
app/                 Next.js App Router routes, API handlers, /studio
client/src/          UI components, pages, hooks, bundled engagement data
client/src/components/system/  Amplified design-system primitives
lib/                 services (CRM, email, CMS), Sanity client + content layer
shared/              Drizzle schema and shared types
studio/              Sanity schema types and Studio structure
scripts/             seed scripts
```

## Design system

Layout and marketing surfaces should use the Amplified primitives in
`@/components/system` rather than one-off inline styles:

- `Container`, `Section`, `Stack`, `Grid` — consistent page width, spacing, equal-height grids
- `Text`, `Eyebrow` — overflow-safe typography with optional line clamps
- `Surface`, `ContentCard`, `AmpButton` — standard panels and CTAs with fixed heights

These components enforce `min-w-0`, word wrapping, and equal card heights so
sections stay aligned when copy lengths differ.

## Content conventions

Copy is written in UK English with no em dashes. Engagement pricing is never a
published figure — it renders as "Scoped to engagement, discussed during
initial conversation."

## Content (Sanity)

All inner pages (services, AI, who we work with, company, work) and insights can be edited in Sanity at `/studio`.
They live in the **BMKRS** Sanity project (`laqqhrou`, dataset `production`), alongside the older bmkrs site's content, which this site does not use.
Until Sanity is configured the site shows the bundled copy in `client/src/content/`, which is also what gets seeded.

1. Create a Sanity project and dataset (`production`), and add `https://<your-domain>` and the Vercel preview domain as CORS origins.
2. Set these in Vercel (and `.env.local`):
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET` (defaults to `production`)
   - `SANITY_API_READ_TOKEN` (only needed for a private dataset)
3. Load the current content: `SANITY_API_WRITE_TOKEN=... npm run seed:sanity`
   Add `-- --remove-legacy` to delete old Amplified engagement and case-study documents.
4. Pages refresh from Sanity within 60 seconds of publishing.

Optional: `NEXT_PUBLIC_BOOKING_URL` (a Calendly or Google appointments link) makes "Book a call" open a booking page; without it, it opens the enquiry form.
