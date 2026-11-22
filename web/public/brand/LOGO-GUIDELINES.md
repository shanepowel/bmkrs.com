# bmkrs logo system

One idea: the full stop is the brand's accent. The wordmark is lowercase **bmkrs** in **Archivo Medium (500)**, closed by an oversized coral full stop. The coral is the same one used for actions across the website, so the logo and the site read as one brand.

All files in this folder are **outlined**: the letters are vector paths, not live text, so they look identical on every machine whether or not Archivo is installed.

## The dot

- Sits tight against the s: the gap is about half the dot's width (0.05em at wordmark size). It reads as the word's own full stop, slightly oversized, never as a separate element.
- Baseline-aligned: the bottom of the dot sits on the wordmark's baseline.
- Drawn at about 0.12em of the type size, larger than Archivo's own full stop, so it survives at favicon size.

## Colours

| Name | Hex | Use |
|---|---|---|
| Coral | `#F85C70` | The dot, and actions and highlights on the website. The only coral in the logo. |
| Navy | `#181F4F` | Wordmark on light backgrounds; icon, avatar and website background |
| White | `#FFFFFF` | Wordmark on dark backgrounds |

Supporting website colours: deep navy `#141A44` for alternate sections and panels, plum `#60266A` for glows and gradients.

These replace the earlier orange (`#FF4D00`), ink (`#181613`) and paper (`#F1EFE8`) palette, so the logo matches the site.

## Files and when to use them

| File | Use |
|---|---|
| `bmkrs-primary-dark.svg` / `.png` | Default. White wordmark, coral dot, for dark backgrounds (the website, dark slides) |
| `bmkrs-primary-light.svg` / `.png` | Navy wordmark, coral dot, for light backgrounds: documents, invoices, print |
| `bmkrs-mono-white.svg` | Over busy photography, or where coral would clash. Single colour |
| `bmkrs-mono-black.svg` | Mono print, embossing, single-colour constraints |
| `bmkrs-inverse-coral.svg` | Coral wordmark, white dot. Moments only: campaign covers, end slides, merch. Never the default |
| `bmkrs-icon-dark.svg` / `bmkrs-icon-512.png` | The "b." mark: favicon, app icon, small avatars |
| `bmkrs-icon-light.svg` | The same, for light contexts |
| `bmkrs-avatar-512.svg` / `-512.png` / `-1024.png` | Social profile images |

## Rules

1. The dot is always present and always last. The wordmark is never set without it.
2. In colour versions the dot is the only coral element (except inverse-coral, where the roles flip).
3. Clear space: the height of the lowercase b on all sides.
4. Minimum size: wordmark 96px wide on screen or 24mm in print. Below that, use the "b." icon.
5. Never recolour the dot, add effects, stretch or letterspace the wordmark, widen the dot gap, or re-type the logo in another font.
6. On photography, primary-dark needs a quiet area or a scrim; otherwise use mono-white.
7. In running text the name is always lowercase: bmkrs. The full stop belongs to the logo, not the name.

## On the website

- The header, mobile menu and footer all use one component (`BrandLogo`), built from these same outlines.
- Favicon set: `favicon.ico`, `icon.png` (light browser chrome), `icon-light.png` (dark browser chrome), `apple-icon.png` (180px), `icon-192.png` and `icon-512.png` for the app manifest.
- Link previews use `og-image.png` (1200 × 630).
