# BMKRS CMS (Sanity)

The marketing site in `web/` loads content from **Sanity** when configured, with full **fallback content** in code so the site works before CMS setup.

## Quick start

1. Project ID: **xwgymvao** · dataset: **production** (see `web/.env.local`)
2. Log in locally: `cd web && npx sanity login`
3. Link / init (only if studio is not already set up):
   ```bash
   npm create sanity@latest -- --project xwgymvao --dataset production --template clean
   ```
   **Note:** This repo already has schemas in `web/sanity/schemaTypes/`. Prefer keeping those and only running the command in a temp folder if you need a fresh Sanity CLI link — do not overwrite `sanity.config.ts` unless you intend to.
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

Pick **one** layout (do not mix):

| Root Directory | Install command |
|----------------|-----------------|
| **`web`** (recommended) | Default, or `npm ci --legacy-peer-deps` from `web/vercel.json` only |
| **empty** (repo root) | Uses repo root `vercel.json`: `cd web && npm ci --legacy-peer-deps` |

**ENOENT `.../bmkrs.com/web/package.json`:** Root Directory is wrongly set to **`bmkrs.com`** (legacy empty folder). Set it to **`web`**. See `web/VERCEL.md`.

**Install exit 254:** Root Directory is `web` but Install Command still uses `--prefix web` (npm looks for `web/web/package.json`). Clear the custom Install Command in Build settings.

Add env vars in Project → Settings → Environment Variables:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SITE_URL`

Connect domain **bmkrs.com** in Project → Domains. Optional: `CONTACT_WEBHOOK_URL` for form submissions.

## Without Sanity

Leave `NEXT_PUBLIC_SANITY_PROJECT_ID` unset. The site uses `src/lib/content/fallback.ts` for all copy and projects.
