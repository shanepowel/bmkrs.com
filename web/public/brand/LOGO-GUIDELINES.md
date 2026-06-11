# bmkrs logo system

eight files, one idea: the full stop is the brand's accent. the wordmark is set in **archivo medium (500)**, a sturdy industrial grotesque (google fonts, ofl, free for any use including logos), deliberately distinct from cabinet grotesk on the site so the logo and the site read as two voices of one brand. orange lives in the dot, permanently.

## the dot

- sits **tight against the s**: the gap between the s and the dot is roughly half the dot's own width (0.05em at wordmark scale). it should read as the word's own full stop, slightly oversized, not as a separate element floating after it.
- baseline-aligned: the bottom of the dot sits on the wordmark baseline.
- the dot is drawn at ~0.13em of the type size, larger than archivo's native full stop, so it survives at favicon scale.
- the svgs lock the wordmark width with `textLength`, which makes the dot position deterministic across renderers. after outlining (below), confirm the gap optically and nudge if needed.

## the orange

```
--bmkrs-orange: #FF4D00;
```

international-orange family: industrial, builder-coded, reads hot against #181613 without going neon. if it feels too hot in situ, the approved fallbacks are #F75C03 (warmer, slightly muted) or #FF5C1F (softer). pick once, then it never changes.

this also resolves the accent rule in the website spec (9.4): the site accent IS the logo orange. its three site jobs remain kickers, the testimonial rule, and link hovers, now colour-matched to the dot.

## the variations and when each is used

| file | use |
|---|---|
| bmkrs-primary-dark.svg | default. site header, anything on #181613 or photography-dark |
| bmkrs-primary-light.svg | documents, invoices, light backgrounds, print |
| bmkrs-mono-white.svg | over busy photography or where orange would clash; single colour |
| bmkrs-mono-black.svg | mono print, embossing, single-colour constraints |
| bmkrs-inverse-orange.svg | moments only: campaign covers, end slides, merch. never the default |
| bmkrs-icon-dark.svg | favicon, app icon, small avatars ("b.") |
| bmkrs-icon-light.svg | same, light contexts |
| bmkrs-avatar-512.svg | social profile images (replaces the current og tile) |

## rules

1. **the dot is always present and always last.** the wordmark is never set without it.
2. **in colour versions the dot is the only orange element** (exception: inverse-orange, where the roles flip and the dot goes off-white).
3. **clearspace**: the height of the lowercase b on all sides. nothing inside it.
4. **minimum sizes**: wordmark 96px wide on screen / 24mm in print; below that, switch to the icon mark.
5. **never**: recolour the dot per context, add effects, set the wordmark in cabinet grotesk (the site voice; the logo's archivo is deliberate contrast), widen the dot gap, or letterspace the wordmark differently between uses.
6. on photography, primary-dark needs a quiet area or a scrim; otherwise use mono-white.

## finalisation (then these are production files)

1. install archivo (google fonts), open each svg, **convert text to outlines** (figma: flatten; illustrator: create outlines) and re-export. outlined paths are mandatory: live-text svgs render in fallback fonts on machines without archivo.
2. after outlining, check the s-to-dot gap optically at both 56px and 24px render sizes and nudge the dot a few px if needed; the locked `textLength` gets it close but the eye finishes the job.
3. from the outlined avatar svg, export png at 512 and 1024 for social platforms; from icon-dark, export 32/180/512 png for favicon/apple-touch/manifest.

## site integration notes

| asset | site use |
|---|---|
| `bmkrs-primary-dark.svg` | header on ink, footer wordmark (off-white + orange dot on `#181613`) |
| `bmkrs-primary-light.svg` | header on paper/orange surfaces |
| `bmkrs-mono-white.svg` | busy photography only; optional footer if the orange dot competes with links |
| `bmkrs-icon-dark.png` | favicon on light browser chrome: `icon.png` (32), `apple-icon.png` (180), `favicon.ico` |
| `bmkrs-icon-light.png` | favicon on dark browser chrome: `icon-light.png` (32) |
| `bmkrs-avatar-512.svg` | `images/bmkrs-avatar-512.png`, default og/social image (`BRAND_AVATAR`) |

- wired in `web/src/lib/brand.ts` (`wordmarkSrc`, `BRAND_AVATAR`, `BRAND_ICON`).
- `bmkrs_white_instapic.png` is retired; do not reintroduce.
- svgs still use live archivo text; outline before treating as final production files (see finalisation above).
