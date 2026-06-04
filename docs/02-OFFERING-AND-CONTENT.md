# bmkrs.com Offering and Content (Addendum)

Extends `00-IMPLEMENTATION-BRIEF.md`. Same stack, same conventions (lowercase voice, no em dashes, British English, "let's talk" on pricing). Tickets continue from BMK-13.

---

## What this set adds

1. A productised offering: a three-tier ladder (start, make, grow) layered over the four disciplines, with pricing kept as "let's talk".
2. A rethought Motion: its own richer page with three tiers, a clear "why it exists", and how it works.
3. Real About content: an editable About page plus a visible team, with ethos and beliefs.
4. A working journal: schema, seed posts, and an index that matches the agreed mockup.
5. On-publish revalidation: the `/api/revalidate` route and the Sanity webhook config.

---

## The offering, in one line

start with a brand check, build with a sprint, grow with motion. one funnel, one team, bespoke work throughout. the packages shape how you *start*, not how the creative gets made; keep that distinction visible so it never reads as templated.

**start** — `brand check`. One paid, fast, fixed-scope diagnostic. Lowers the barrier and qualifies the buyer.
**make** — `launch kit`, `rebrand`, `storefront`, `story`, `press launch`. Fixed-scope build sprints, each linked to a case study as proof.
**grow** — `motion`, `motion plus`, `motion embedded`. The recurring tier (the Motion page).

Each product publishes: who it is for, what is included, the shape (timeline), the outcome, and a CTA that reads "let's talk". A bespoke lane sits above the packages so the premium tier is protected.

## Motion, rethought

Motion was a single line on the home page. It is now a destination:

- **Positioning:** "the project ends, the brand doesn't." Motion is the antidote to build-and-vanish agencies.
- **Why it exists:** a side-by-side contrast of the usual way (bursts, churn, lost momentum, hand-offs) against motion (continuous, same team, compounding knowledge, no strangers).
- **How it works:** plan, ship, measure, compound. A monthly rhythm, not a quarterly scramble.
- **Three tiers:** `motion` (consistent momentum), `motion plus` (adds growth and an always-on PR engine), `motion embedded` (a senior team plugged into yours, tied to the network proposition).
- **Reassurance:** rolling, monthly, thirty days' notice, no lock-in. "you stay because it works."

## Content model additions

| Type | Purpose | New / changed |
| --- | --- | --- |
| `product` | start/make/grow offerings, incl. motion tiers | new |
| `post` | journal | new |
| `aboutPage` | editable ethos, beliefs, story (singleton) | new |
| `caseStudy.productType` | links a case to the product it proves | changed (field added) |
| `teamMember.bio` | bio line for the About cards | changed (field added) |

---

## New tickets

### BMK-14 Register the new schemas
**Files:** `sanity/schemas/{product,post,aboutPage}.ts`, updated `caseStudy.ts`, `teamMember.ts`, `index.ts`
**Acceptance:** studio builds with `product`, `post`, `aboutPage` types; `caseStudy` shows a "product this case proves" reference; `teamMember` has a bio field. Set `aboutPage` and `siteSettings` as singletons in the studio desk structure.

### BMK-15 Seed offering, about and journal content
**Files:** `sanity/seed/{products,about,posts}.ndjson`
**Do:** import all three. Then link each `make` case study to its product via `productType` (launch kit -> copa/flipster/smoothies; rebrand and storefront -> fdb), and upload cover images for the four posts and photos for the team (BMK-3 pattern). Quote/result placeholders on cases still apply.
**Import:**
```
sanity dataset import sanity/seed/products.ndjson production
sanity dataset import sanity/seed/about.ndjson production
sanity dataset import sanity/seed/posts.ndjson production
```
**Acceptance:** services, about and journal pages render real content; team shows six entries; posts have authors resolved.

### BMK-16 Build the home page
**Files:** `web/app/page.tsx`, `web/styles/components.css`
**Acceptance:** hero, disciplines, start/make/grow teaser, featured work grid with hover reveal, testimonials (hidden until real), motion teaser, closing CTA. Casing system applied.

### BMK-17 Build the work index
**Files:** `web/app/work/page.tsx`
**Acceptance:** discipline-tagged grid with hover reveal, consistent aspect ratios, and the "+ your brand next" CTA tile.

### BMK-18 Build the about page
**Files:** `web/app/about/page.tsx`
**Acceptance:** story, who-we-are, a real team grid (resolving the "people you meet do the work" promise), ethos, six beliefs, the long game, in-our-own-words. All from `aboutPage` + `teamMember`.

### BMK-19 Build the services page (productised)
**Files:** `web/app/services/page.tsx`
**Acceptance:** start/make/grow sections; product cards with for-who, included, shape, proof links, and a "let's talk" CTA; a bespoke lane below. No prices shown.

### BMK-20 Build the motion page
**Files:** `web/app/motion/page.tsx`
**Acceptance:** hero, why-it-exists contrast, how-it-works, three tiers from the grow-tier products, no-lock-in reassurance.

### BMK-21 Build the journal index and article
**Files:** `web/app/journal/page.tsx` (index here), plus `web/app/journal/[slug]/page.tsx` (article, same metadata + OG pattern as case studies)
**Acceptance:** featured hero post, category filter, card grid matching the mockup; article template renders portable text, pull quotes, author, and a related-product/case CTA. Per-post OG images via the case-study `opengraph-image.tsx` pattern.

### BMK-22 On-publish revalidation
**Files:** `web/app/api/revalidate/route.ts`, `sanity/webhook-config.md`
**Do:** add the route, set `SANITY_REVALIDATE_SECRET` in Vercel, create the Sanity webhook per the config doc. Tag the layout/footer `siteSettings` fetch with `['settings']`.
**Acceptance:** publishing any document returns a 200 from `/api/revalidate` and the affected page updates without a redeploy.

---

## Queries

`web/sanity/queries.additions.ts` holds the new GROQ (products, motion tiers, about, team, journal). Merge it into `web/sanity/queries.ts` or import alongside it.

## Notes for Cursor

- All new pages depend on `web/styles/tokens.css` (system) and `web/styles/components.css` (layout). Import both at the root.
- The journal category filter chips are placeholders for a tiny client component; the `data-category` attributes on cards are the hook. Keep it as progressive enhancement so the page works without JS.
- Keep "let's talk" as the only CTA on every product and motion tier. Do not add prices.
