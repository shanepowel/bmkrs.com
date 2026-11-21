# bmkrs.com

The bmkrs site: brands, digital products and practical AI. A Next.js app in [`web/`](web/), with content in Sanity.

## Quick start

```bash
npm ci --prefix web
npm run dev          # http://localhost:3000  (Sanity Studio: /studio)
npm run build
```

## Where things live

| What | Where |
|---|---|
| Pages and routes | `web/app/` |
| Page template and design system | `web/client/src/components/bmk/`, `web/client/src/components/ui/` (shadcn/ui) |
| Navigation (header, mobile menu and footer all read this) | `web/client/src/content/nav.ts` |
| Page copy (fallback and seed source) | `web/client/src/content/bmk-pages-*.ts` |
| Sanity schema and Studio structure | `web/studio/` |
| Company and brand constants (incl. legal details) | `web/client/src/lib/brand.ts` |
| Old-copy coverage map | [`docs/content-coverage.md`](docs/content-coverage.md) |

## Content (Sanity)

Pages and insights load from the **BMKRS** Sanity project (`laqqhrou`, dataset `production`) and fall back to the bundled copy if Sanity isn't configured. Edit at `/studio`; changes appear within about a minute.

To reload the bundled copy into Sanity: `SANITY_API_WRITE_TOKEN=... npm run seed:sanity` (add `-- --remove-legacy` to remove old Amplified-era document types).

## Environment

| Variable | Needed for |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` | Reading content from Sanity |
| `DATABASE_URL` | Saving contact and consultation form submissions (Postgres) |
| `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_EMAIL` | Form notification emails |
| `HUBSPOT_API_KEY` | Optional: pushing enquiries to HubSpot |
| `NEXT_PUBLIC_BOOKING_URL` | Optional: a booking page for "Book a call" (otherwise it opens the enquiry form) |

## Other folders

`apps/portal` and `packages/ui` are separate apps; `archive/` is legacy. The previous site lives in git history on `master`.
