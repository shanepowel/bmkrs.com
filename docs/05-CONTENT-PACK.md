# bmkrs content pack: index and publishing plan

## what is in this pack

- `web/content/journal/*.md` — markdown articles loaded at build time (featured rebuild + 18 keyword-targeted posts).
- `web/src/lib/structured-data.ts` — json-ld builders (organization, article, breadcrumb).
- `web/src/lib/content/author-bios.ts` — footer bios for marcus, sarah, george, melissa.
- `web/src/lib/content/journal-publish.ts` — staggered publish dates (two per week, no backdating).
- `docs/05-CONTENT-PACK.md` — this file.

Case studies for podcast studio london and freelance near me are surfaced on the homepage under **built in the studio**. Placeholder case studies (david wheeler psychology, three18 media, viralyz) should not ship until placeholders are filled.

## publishing schedule

Articles publish via `journal-publish.ts` schedule (overrides frontmatter `date` when listed). Two per week, starting with commercial-intent pieces and the featured rebuild. Do not backdate.

## slug redirects

- `better-told-brand-isnt-fair` → `better-told-brand-wins`
- `same-team` / `hand-off-brands-die` → `one-team-vs-five-agencies`

## logo strip

Client names stay in the marquee. Studio ventures (podcast studio london, freelance near me) appear as named cards with descriptors under **built in the studio**, not logos alone.
