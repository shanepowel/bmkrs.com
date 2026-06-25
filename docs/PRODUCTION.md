# Production checklist

Use this after merging to `master` and before announcing the site live.

## BMKRS marketing (`www.bmkrs.com`)

Vercel project: root directory **`web`** (see `web/VERCEL.md`).

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | `https://www.bmkrs.com` |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `xwgymvao` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `SANITY_API_READ_TOKEN` | Server fetches |
| `SANITY_REVALIDATE_SECRET` | Webhook signature |
| `NEXT_PUBLIC_NETWORK_PORTAL_URL` | `https://app.bmkrs.com` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-4GXGNXYMVL` (consent-gated) |
| `NEXT_PUBLIC_COMPANY_NUMBER` | Companies House number (optional until known) |
| `NEXT_PUBLIC_REGISTERED_ADDRESS` | Registered office (optional) |
| `NEXT_PUBLIC_CONTACT_PHONE` | Public phone line (optional) |
| `CONTACT_WEBHOOK_URL` | Slack/Zapier for contact form (optional) |

**Sanity webhook:** follow `web/sanity/webhook-config.md`. URL: `https://www.bmkrs.com/api/revalidate`.

**Seeds:** `cd web && npm run import:seeds` against production after schema changes.

**Post-deploy smoke:** homepage, `/services`, `/motion`, `/network`, contact form, cookie banner, Studio at `/studio`.

## BMKRS portal (`app.bmkrs.com`)

Separate Vercel project: root directory **`apps/portal`**.

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk sign-in |
| `CLERK_SECRET_KEY` | Clerk server |
| `NEXT_PUBLIC_PORTAL_URL` | `https://app.bmkrs.com` |
| `NEXT_PUBLIC_MARKETING_URL` | `https://www.bmkrs.com` |

**CORS:** allow `https://www.bmkrs.com` to call `GET /api/bench-public`.

**Routes:** `/login`, `/hire`, `/join`, `/api/bench-public`.

## Content still needing real copy

These are intentionally hidden until filled (not fabricated):

- Client testimonials in Sanity (`testimonial-*` seeds still hold placeholder quotes)
- Case study metric labels marked `placeholder:` in seeds
- Company number and registered address until env vars or Sanity `siteSettings` are set

Set env vars or edit Sanity; do not ship invented quotes or metrics.
