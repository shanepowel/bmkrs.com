# bmkrs.com Implementation Brief

**Stack:** Next.js (App Router) on Vercel, content in Sanity.
**Audience for this document:** an engineer or AI coding agent (Cursor) executing the work, plus the founder signing off content.
**Status:** ready to action. Tickets are ordered by leverage. Each has acceptance criteria.

---

## 0. How to use this bundle

This folder is a self-contained handoff package.

```
bmkrs-rebuild/
  00-IMPLEMENTATION-BRIEF.md        this file. the spec. feed it to Cursor as the PRD.
  01-CASE-STUDIES.md                the rewritten case-study copy, human readable, for sign-off.
  sanity/
    schemas/                        drop-in Sanity v3 schema files (TypeScript).
      caseStudy.ts
      testimonial.ts
      teamMember.ts
      siteSettings.ts
      index.ts
    seed/
      case-studies.ndjson           importable documents (the rewritten case studies).
  web/
    sanity/
      client.ts                     Sanity client.
      queries.ts                    GROQ queries.
    app/work/[slug]/
      page.tsx                      case-study page with per-page metadata.
      opengraph-image.tsx           dynamic OG image (the share-preview fix).
    styles/
      tokens.css                    design tokens: palette, type, spacing, casing system.
```

**Cursor:** open the repo, add this file to context, and work ticket by ticket (BMK-1, BMK-2 ...). Each ticket names the files it touches and its acceptance criteria. Treat section 6 (voice and casing) and section 7 (design tokens) as global rules that apply to all UI work.

**Sanity:** copy `sanity/schemas/*` into your studio `schemas` folder and register them via `index.ts`. Import seed content with:
`sanity dataset import sanity/seed/case-studies.ndjson production`
(Replace `production` with your dataset name. Run from the studio root. Image assets are referenced by placeholder; see ticket BMK-3 for asset handling.)

**Vercel:** environment variables and deploy notes are in section 9.

---

## 1. Context and goal

The current site is well built and well written. The work is not the problem. The problem is that the site sells outcomes and the case studies prove none. The single highest-value change is to rebuild the case studies around results. The rest is credibility (a visible team, client voice), conversion mechanics (CTA and footer discipline), a consistent casing system, and per-page OG images so shared links show the work rather than the logo.

**Definition of done for this phase:** every case study carries a structured result and a client quote slot; the team is visible; casing is consistent sitewide; every page has its own OG image and meta description; the footer is tidy and legally complete; all content lives in Sanity so the founder can edit without a deploy.

---

## 2. Architecture decision

Move all editable content into Sanity. Today the copy appears to be hard-coded. Hard-coded case studies are why they have no results: adding proof means a code change, so it never happens. With a `caseStudy` document type that has explicit `results` and `testimonial` fields, the structure makes proof a required habit, not an afterthought.

Three Sanity document types plus one singleton:

- `caseStudy` — the portfolio.
- `testimonial` — client quotes, referenceable from case studies and the home page.
- `teamMember` — the people on the About page.
- `siteSettings` (singleton) — contact routes, company registration, social links, default SEO.

Next.js reads from Sanity via GROQ at build time (static) with on-demand revalidation. No client-side Sanity calls.

---

## 3. Tickets

### BMK-1 Content model in Sanity (foundation)
**Files:** `sanity/schemas/*`
**Do:** add the four schema files and register them. Deploy the studio.
**Acceptance:**
- `caseStudy` has: title, slug, client, positioning, sector, year, services[], order, heroImage (with alt), gallery[], brief, challenge, whatWeDid, resultsNarrative, results[] (value + label), testimonial (reference), featured (bool), seo (metaTitle, metaDescription, ogImage).
- `testimonial` has: quote, name, role, company, caseStudy (reference).
- `teamMember` has: name, discipline, photo (with alt), order.
- `siteSettings` singleton has: generalEmail, pressEmail, companyName, companyNumber, registeredAddress, londonAddress, socials[], defaultSeo.
- Studio builds and all types appear.

### BMK-2 Seed the rewritten case studies
**Files:** `sanity/seed/case-studies.ndjson`, content from `01-CASE-STUDIES.md`
**Do:** import the six rewritten case studies. The narrative fields are final copy. The `results` and `testimonial` fields ship as marked placeholders for the founder to complete with true figures and real quotes (see note in section 5).
**Acceptance:** six `caseStudy` documents exist with all narrative fields populated and results/testimonial placeholders flagged for completion.

### BMK-3 Migrate hero and gallery images to Sanity assets
**Files:** Sanity assets; references in the six documents
**Do:** upload existing hero and gallery images from `/images/optimized/` and `/work/images/` into Sanity, set meaningful alt text on each, and wire them to the documents. Keep aspect ratios consistent (see BMK-9).
**Acceptance:** every case study renders its hero and gallery from Sanity; all images have alt text.

### BMK-4 Per-page OG images (quick win, do early)
**Files:** `web/app/work/[slug]/opengraph-image.tsx`, plus equivalent for home/about/services
**Do:** generate a dynamic OG image per case study using the hero plus the project name. Replace the single global logo OG image.
**Acceptance:** sharing any case-study URL shows that project's image, not the bmkrs logo. Validated in the LinkedIn Post Inspector and `https://www.opengraph.xyz`.

### BMK-5 Per-page metadata
**Files:** `web/app/work/[slug]/page.tsx` and every route's `generateMetadata`
**Do:** each page sets its own title and description from Sanity. Stop inheriting the generic site description.
**Acceptance:** Services, About, Work, Contact and each case study have unique `<title>` and `<meta name="description">`. Verified in page source.

### BMK-6 Rebuild the case-study template around results
**Files:** `web/app/work/[slug]/page.tsx`
**Do:** render the new structure: positioning line, sector/year/services meta, brief, challenge, what we did, a **results block** (metric cards from `results[]` plus `resultsNarrative`), and a **testimonial block**. Hide blocks gracefully when a field is empty so placeholders do not render as broken UI.
**Acceptance:** matches the structure in `01-CASE-STUDIES.md`; results and testimonial blocks are visually prominent; empty placeholders do not render.

### BMK-7 Add a team section to About
**Files:** About route, `teamMember` query
**Do:** render `teamMember` documents as a small grid: photo, first name, discipline. This resolves the contradiction between "the people you meet are the people who do the work" and showing nobody.
**Acceptance:** About shows at least three real team members with photos; layout matches the design system.

### BMK-8 Casing system sitewide (global rule)
**Files:** all UI, `web/styles/tokens.css`
**Do:** enforce the two-tier casing system from section 6. Lowercase for all headings and body; uppercase, letter-spaced only for eyebrow labels. Fix the title-case headings ("Four equally strong domains", "Selected projects", "One team", "Trusted by ambitious brands", "A brand is a promise", and the About belief headings).
**Acceptance:** no title-case headings remain except deliberate proper nouns; eyebrow labels use the `.eyebrow` utility.

### BMK-9 Footer tidy and legal completeness
**Files:** footer component, `siteSettings` query
**Do:** collapse the five inboxes to two (general + press); route the rest through the contact form. Add registered company name, company number, and a registered address from `siteSettings`. Apply the casing system. Demote the freelancer-network link out of the primary services column.
**Acceptance:** footer shows two emails max, full company registration line, and consistent casing.

### BMK-10 Client quotes on the home page
**Files:** home route
**Do:** surface two or three `testimonial` documents on the home page once populated.
**Acceptance:** home page renders real quotes with name, role, company when testimonials exist; section hides when none exist.

### BMK-11 Visual system pass (apply tokens)
**Files:** `web/styles/tokens.css`, global styles, components
**Do:** apply the palette (warm ink, warm paper, single accent), type pairing, spacing scale, work-grid hover states, and restrained scroll reveals per section 7.
**Acceptance:** light sections use warm paper not pure white; the accent appears only on links, hovers and primary CTAs; work-grid items reveal title and category on hover.

### BMK-12 Structured data and final SEO
**Files:** home route, case-study route
**Do:** add `Organization` JSON-LD on home, `CreativeWork` JSON-LD on case studies. Confirm sitemap and robots.
**Acceptance:** valid structured data in Google Rich Results test; sitemap lists all pages.

### BMK-13 Performance and accessibility audit
**Do:** Lighthouse pass. Lazy-load the Vimeo embed on case studies. Confirm AA contrast on body text against the warm ink background. Confirm form fields use real labels.
**Acceptance:** Lighthouse performance and accessibility both 90+; no contrast failures on text.

---

## 4. Content model to field mapping

| UI element on case study | Sanity field |
| --- | --- |
| One-line under the title | `positioning` |
| Sector / year / services meta row | `sector`, `year`, `services[]` |
| the brief | `brief` |
| the challenge | `challenge` |
| what we did | `whatWeDid` |
| result metric cards | `results[]` ({ value, label }) |
| result paragraph | `resultsNarrative` |
| client quote | `testimonial` -> `quote`, `name`, `role`, `company` |
| share image | `seo.ogImage` (falls back to `heroImage`) |
| page title / description | `seo.metaTitle`, `seo.metaDescription` |

---

## 5. A note on results and quotes (read before BMK-2)

The narrative copy in `01-CASE-STUDIES.md` is final and faithful to the real projects. The **result metrics and client quotes are left as clearly marked placeholders** because those are real-world facts that must come from the founder and the clients. Do not invent figures or attribute quotes to real companies without sign-off. Each case study lists the *type* of proof that would fit, with example phrasings, so completing them is a fill-in-the-blank exercise, not a writing exercise.

Placeholder convention in copy and seed data: `{{ RESULT: ... }}` and `{{ QUOTE: ... }}`. The render (BMK-6) hides any block still containing an unfilled placeholder, so the site never shows a broken or fake result.

---

## 6. Voice and casing rules (global)

These apply to every piece of UI text Cursor touches.

**Voice.** Lowercase, plain, confident, a little dry. Short sentences. No exclamation marks. British English. No em dashes; use commas, colons or full stops. Never marketing-cliché ("synergy", "bespoke solutions", "passionate about"). The existing copy is the reference; match it.

**Casing, two tiers only:**
1. **Eyebrow labels** (the small kicker above a heading, e.g. "what we really do", "who we work with"): UPPERCASE, letter-spaced, small. Use the `.eyebrow` class.
2. **Everything else** (headings, body, buttons, nav): lowercase.

Proper nouns inside lowercase copy keep their real capitalisation only where the brand itself does (e.g. "COPA" if the client brand is styled that way; "bmkrs." always lowercase with the trailing full stop).

**Do not** leave any title-case headings. The current offenders to fix: "Four equally strong domains", "Selected projects", "One team, built around your brand", "Trusted by ambitious brands", "A brand is a promise", "Design does a job", "Growth beats noise", "One team, all in".

---

## 7. Design tokens and stylistic direction

Full values are in `web/styles/tokens.css`. Summary of intent:

**Palette.** Warm near-black ink (`#181613`, already the theme colour) plus a warm off-white paper (`#F5F1EA`) for light sections instead of pure white, plus one restrained accent. The accent default is an ember (`#E4502A`); confirm or swap, but keep it to one. The accent appears only on links, hover states and primary CTAs. No multi-colour palette.

**Type.** Avoid generic system fonts. Pair a characterful display face with a clean neutral grotesque body:
- Display (headings): a high-contrast characterful serif. Recommended free option: **Fraunces** (variable, OFL). Premium alternatives if budget allows: Reckless, GT Sectra, PP Editorial New.
- Body: a refined neutral grotesque. Recommended free option: **Hanken Grotesk** or **Geist Sans**. Premium alternatives: Söhne, ABC Diatype, GT America.
- Two families maximum. Large heading sizes, tight leading. The copy is strong enough to carry big type.

**Motion.** One well-orchestrated page load with staggered reveals beats scattered micro-interactions. Add work-grid hover states (reveal title and category, subtle scale). Keep scroll reveals quick and restrained. Lazy-load video.

**Imagery.** Consistent aspect ratios across the work grid. Add process and real-world "in the wild" shots to case studies. One consistent grade across the portfolio.

**Spatial.** Generous negative space. A single spacing scale (in tokens). Left-aligned large-type sections suit the voice better than centring everything.

---

## 8. Information architecture notes

- Keep "motion" (the rolling partnership) as a clear upsell, prominent only after the core offer has landed.
- Demote "the network / for freelancers" deeper in the IA. It should not sit in the primary footer services column where it confuses what bmkrs is.
- Journal: if active, surface a recent post on home or about as a thought-leadership signal. If stale, remove the link until populated.

---

## 9. Vercel deploy notes

**Environment variables (Vercel project settings):**
```
NEXT_PUBLIC_SANITY_PROJECT_ID   = <your project id>
NEXT_PUBLIC_SANITY_DATASET      = production
SANITY_API_READ_TOKEN           = <read token, server only>
SANITY_REVALIDATE_SECRET        = <random string for the webhook>
```

**Revalidation.** Configure a Sanity webhook pointing at `/api/revalidate` (build this if not present) so publishing content refreshes the static pages without a full redeploy. Use `SANITY_REVALIDATE_SECRET` to authenticate the webhook.

**OG image runtime.** `opengraph-image.tsx` runs on the edge. Ensure hero image URLs are publicly reachable (Sanity CDN is). Confirm the route is not blocked by any auth middleware.

**Image domains.** Add the Sanity CDN host (`cdn.sanity.io`) to `next.config.js` `images.remotePatterns`.

---

## 10. Definition of done

- [ ] All content in Sanity; founder can edit without a deploy.
- [ ] Six case studies use the results template; narrative live, results and quotes filled by founder.
- [ ] About shows real people.
- [ ] Casing consistent sitewide.
- [ ] Every page has a unique OG image and meta description.
- [ ] Footer: two inboxes, full company registration, consistent casing.
- [ ] Accent colour applied sparingly; warm paper on light sections.
- [ ] Structured data valid; Lighthouse 90+ performance and accessibility.
