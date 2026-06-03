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
| `page` | Per-route copy (`home`, `services`, `work`, `motion`, `contact`, `about`) |
| `service` | Discover / Motion capability blocks |
| `project` | Portfolio entries + case study (context, challenge, what we did, outcome, testimonial) |
| `journalArticle` | SEO articles at `/journal/[slug]` (markdown body) |
| `homePillar` | Home “Innovate / Design / Grow / Learn” blocks |

## Slugs

**Pages** — use slug: `home`, `services`, `work`, `motion`, `contact`, `about` (`discover` aliases to `services`)

**About page sections** (optional `sections[]` keys): `since`, `where`, `what`, `intro`, `body2`–`body4`, `closing`, `whoWeAre1`–`whoWeAre2`, `whatWeLove1`–`whatWeLove2`, `beliefsIntro`, `longGameLead`–`longGame2`, `creed1`–`creed5` (use `|word|` in creed copy for accent highlights). Keep `where` as `london + worldwide`, not street addresses.

**Projects** — recommended slugs: `fdb`, `copa`, `carter`, `wanderlust`, `smoothies`, `flipster`. Use `context`, `challenge`, `whatWeDid`, `outcome` for case study copy; leave `outcomeMetrics` empty until you have signed-off figures.

**Journal** — slugs: `brand-tone-of-voice`, `pr-for-startups`, `rebrand-or-refresh`, `agency-freelancer-in-house`. Body is markdown: `###` for section headings (lowercase on site), `-` for lists, `[label](/path)` for links.

Legacy URLs (`/work/project1`, etc.) redirect to the new slugs.

## Vercel

Pick **one** layout (do not mix):

| Root Directory | Install command |
|----------------|-----------------|
| **`web`** (recommended) | Default, or `npm ci --legacy-peer-deps` from `web/vercel.json` only |
| **empty** (repo root) | Uses repo root `vercel.json`: `cd web && npm ci --legacy-peer-deps` |

**ENOENT `.../bmkrs.com/web/package.json`:** Root Directory is wrongly set to **`bmkrs.com`** or **`archive/ftp-stub`** (not the app). Set it to **`web`**. See `web/VERCEL.md`.

**Install exit 254:** Root Directory is `web` but Install Command still uses `--prefix web` (npm looks for `web/web/package.json`). Clear the custom Install Command in Build settings.

Add env vars in Project → Settings → Environment Variables:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SITE_URL`

Connect domain **bmkrs.com** in Project → Domains. Optional: `CONTACT_WEBHOOK_URL` for form submissions.

## Without Sanity

Leave `NEXT_PUBLIC_SANITY_PROJECT_ID` unset. The site uses `src/lib/content/fallback.ts` for all copy and projects.
