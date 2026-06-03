# BMKRS CMS (Sanity)

The marketing site in `web/` loads content from **Sanity** when configured, with full **fallback content** in code so the site works before CMS setup.

## Quick start

1. Create a project at [sanity.io/manage](https://www.sanity.io/manage)
2. Copy `web/.env.example` → `web/.env.local` and set:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET` (usually `production`)
3. Run the site: `cd web && npm run dev`
4. Open the studio: [http://localhost:3000/studio](http://localhost:3000/studio)
5. Create documents matching the schemas in `web/sanity/schemaTypes/`

## Content models

| Type | Purpose |
|------|---------|
| `siteSettings` | Global nav, email, social links, tagline |
| `navigationItem` | Menu links (referenced from site settings) |
| `page` | Per-route copy (`home`, `discover`, `work`, `motion`, `contact`, `about`) |
| `service` | Discover / Motion capability blocks |
| `project` | Portfolio entries + case study media |
| `homePillar` | Home “Innovate / Design / Grow / Learn” blocks |

## Slugs

**Pages** — use slug: `home`, `discover`, `work`, `motion`, `contact`, `about`

**Projects** — recommended slugs: `fdb`, `copa`, `carter`, `wanderlust`, `smoothies`, `flipster`

Legacy URLs (`/work/project1`, etc.) redirect to the new slugs.

## Vercel

1. Set **Root Directory** to `web` in the Vercel project settings (required — not valid in `vercel.json`)
2. Add the same env vars in Project → Settings → Environment Variables
3. Connect domain **bmkrs.com** in Project → Domains
4. Optional: `CONTACT_WEBHOOK_URL` for form submissions

## Without Sanity

Leave `NEXT_PUBLIC_SANITY_PROJECT_ID` unset. The site uses `src/lib/content/fallback.ts` for all copy and projects.
