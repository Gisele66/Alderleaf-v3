# Design Reference — Astro Site (Visual Source)

Extracted from the live Astro codebase (`site/src/styles/global.css`, components, and page markup). Use as reference for the plain HTML/Tailwind rebuild. Do not treat as new design decisions.

**Source repo:** https://github.com/Gisele66/alderleaf  
**Primary files:** `site/src/styles/global.css`, `site/src/components/Header.astro`, `site/src/pages/index.astro`, `site/src/pages/about.astro`, `site/src/pages/contact.astro`

---

## Header

| Property | Value |
|----------|-------|
| Layout | CSS grid: `auto 1fr auto` (logo · nav · CTA); mobile (`max-width: 1023px`): `1fr auto` |
| Min height | `6rem` (default); `9rem` at `min-width: 1024px` |
| Vertical padding | `1.5rem` block (default); `2rem` block at `min-width: 1024px` |
| Column gap | `0.875rem` (default); `1.5rem` at `min-width: 1024px` |
| Row gap | `0.75rem` |
| Background | `#ffffff` |
| Bottom border | `3px solid` forest (`#1d7a20`) |
| Box shadow | `0 4px 24px rgba(18, 50, 8, 0.12)` |
| Position | `sticky top-0 z-40` |
| Container horizontal padding | See **Main content max-width** (header uses `.site-container.site-header-grid` with asymmetric padding) |

### Logo

| Property | Value |
|----------|-------|
| Display height | `4.75rem` (default); `5.5rem` at `640px+`; `8rem` at `1024px+` |
| Width | `auto` |
| HTML `width` / `height` attrs | `250` / `85` |
| Filter | `drop-shadow(0 0 0.75px rgba(29, 122, 32, 0.45))` |

### Nav spacing & typography

| Property | Value |
|----------|-------|
| Nav gap | `1.5rem` (default); `3.5rem` at `1024px+`; `4.5rem` at `1280px+` |
| Link font | Chivo (`--font-sans`) |
| Link font size | `1.0625rem` (default); `1.375rem` at `1024px+` |
| Link font weight | `500` (default); `600` when active |
| Link color | `#212934` (ink); hover/active `#1d7a20` (forest) |
| Link padding block | `0.625rem` |
| Active underline | `3px solid` forest, `padding-bottom: 0.5rem` |

### Header CTA button (`.btn-header-cta`)

| Property | Value |
|----------|-------|
| Padding | `1rem 2.25rem` |
| Font size | `1.125rem` |
| Font weight | `700` |
| Border radius | `0.5rem` |
| Background | `#1d7a20` (forest); hover `#123208` (forest-dark) |
| Color | `#ffffff` |
| Box shadow | `0 4px 14px rgb(29 122 32 / 0.35)` |
| Hover | `translateY(-1px)` |

---

## Main content max-width

| Container class | Max width | Horizontal padding |
|-----------------|-----------|-------------------|
| `.site-container` (homepage, about, contact body) | `1920px` | `1.25rem` → `1.75rem` (640px+) → `2.75rem` (1024px+) → `3.25rem` (1280px+) |
| `.site-container.site-container-page` (inner service pages) | `1320px` | Same as above; at `1024px+` padding is `2rem` inline |
| `.site-container.site-header-grid` | `1920px` (inherits) | Asymmetric: start `1.125rem`→`1.25rem`→`1.25rem`→`1.5rem`; end `1.25rem`→`1.75rem`→`2.75rem`→`3.25rem` |

---

## Homepage hero (`.hero-home`) — **LOCKED**

**Do not change** banner asset, hero dimensions, image CSS, or hero text layout/sizes without explicit user approval.

### Banner image (`.hero-home-bg`)

**Locked asset:** `assets/images/photopea-home-banner-road-crew.jpg`

| Property | Value |
|----------|-------|
| Export size | **1920 × 688 px** (image area) |
| Position | `absolute`; `inset: var(--banner-frame-size) 0` |
| Size | `width: 100%`; `height: 100%` |
| Object fit | `cover` |
| Object position | `left center` |
| Overlay | None |

**Composition:** Road crew + chipper truck on the right; dark foliage on the left for hero text contrast.

### Hero container (`.hero-home`)

| Property | Value |
|----------|-------|
| Width | `100%` |
| Aspect ratio | **`1920 / 700`** (688px image + 6px top/bottom frame via `--banner-frame-size`) |
| Scales | Proportionally at all screen widths — same framing, no breakpoint height clamps |
| Fallback background | `#1d7a20` (forest) |
| Frame stripes | `::before` / `::after` bars, `--banner-frame-size` (`0.375rem` / 6px), forest green above and below image |

### Hero text container (`.page-hero-content` in `.hero-home`)

Markup uses `site-container page-hero-content` (not `.hero-home-content`).

| Property | Value |
|----------|-------|
| Position | `absolute`; `inset: 0` |
| Layout | inherits `.page-hero-content` flex column; `justify-content: center` |
| Padding block | `2.5rem` |

### Homepage hero text sizes

| Element | Default | `640px+` | `1024px+` | `1280px+` |
|---------|---------|----------|-----------|-----------|
| Eyebrow (`.hero-eyebrow`) | `1.25rem` | — | `1.5rem` | — |
| Heading (`.hero-heading-home`) | `3rem` | `3.875rem` | `5rem` | `5.75rem` |
| Lead (`.hero-lead`) | `1.4375rem` | — | `1.6875rem` | — |
| Tagline (`.hero-tagline`) | `1.5rem` | — | `1.75rem` | — |

Heading sizes use `.hero-home .hero-heading.hero-heading-home` (overrides shared `.hero-heading` rules).

### Homepage hero buttons (`.hero-actions`)

| Property | Value |
|----------|-------|
| Layout | `flex-direction: column`; `align-items: stretch`; `width: fit-content` |
| Gap | `1rem` (default); `1.125rem` at `1024px+` |
| Margin top | `2.5rem` (default); `3rem` at `1024px+` |

**Primary (`.btn-hero-primary`):** accent orange `#ff9500`; padding `1.125rem 2rem`; font-size `1.625rem` ( `1.875rem` at `1024px+` ).

**Secondary (`.btn-hero-secondary`):** transparent dark bg; white border; font-size `1.625rem` ( `1.875rem` at `1024px+` ).

**Hidden on homepage:** `.hero-cell-link` (`display: none`).

---

## Section padding (homepage & key pages)

| Section | Padding | Background |
|---------|---------|------------|
| Homepage services | `py-20 lg:py-28` (`5rem` / `7rem`) | `#f9f9f9` (cream) |
| Homepage about block | `py-20 lg:py-28` | white (default body) |
| About page content | `py-20 lg:py-28` | white |
| Contact intro | `py-20 lg:py-32` | cream |
| Contact main | `py-16 lg:py-20` | white |

**Section heading pattern:** `h2` at `text-3xl sm:text-4xl`, `font-normal`; divider `.section-divider` below — width `5rem`, height `3px`, background forest, `mt-5`.

---

## Services card grid (homepage)

| Property | Value |
|----------|-------|
| Grid | `grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12` |
| Margin top (below heading) | `mt-14` (`3.5rem`) |
| Card wrapper | `.service-item` — block link, no extra padding on card shell |

### Service card image (`.service-item-photo` + `.service-card-image`)

| Property | Value |
|----------|-------|
| Image aspect ratio | `4 / 3` |
| Image width | `100%` |
| Object fit | `cover` |
| Object position | `center` |
| Photo wrapper border radius | `1rem` |
| Photo wrapper shadow | `0 10px 28px -12px rgb(18 50 8 / 0.18)` |
| Image border radius | `1rem` |
| Hover (image) | `scale(1.02)` via `group-hover:scale-[1.02]` |
| Lighten variant (`.service-card-image-lighten`) | `filter: brightness(1.2) contrast(1.05) saturate(1.08)` — used on Tree Pruning & Tree Assessments cards |

### Service card text (`.service-item-copy`)

| Property | Value |
|----------|-------|
| Margin top (below photo) | `1.25rem` |
| Title (`h3`) | `text-xl font-bold` (Libre Baskerville via `h3` rule) |
| Body | `mt-3 leading-relaxed` (inherits body font/size) |
| “Read more” | `mt-4 inline-block text-sm font-semibold text-forest` |

### Card border radius, shadow, padding, gap (summary)

| Property | Value |
|----------|-------|
| Border radius | `1rem` on photo/image |
| Shadow | `0 10px 28px -12px rgb(18 50 8 / 0.18)` on photo wrapper |
| Card padding | none on outer card; copy offset `1.25rem` below image |
| Grid gap | `2.5rem` (`gap-10`); `3rem` (`lg:gap-12`) at large |
| Card hover (legacy `.service-card` class) | `translateY(-4px)`; shadow `0 20px 40px -12px rgb(18 50 8 / 0.2)` — defined in CSS but homepage markup uses `.service-item`, not `.service-card` |

---

## Homepage testimonials (`.section-testimonials`) — locked

**Do not change layout, copy, colours, sizing, or review popup behaviour without approval.**

| Property | Value |
|----------|-------|
| Section | `bg-cream section-py section-testimonials` |
| Section padding | `6rem` block → `8rem` at `1024px+` |
| Heading | `.section-heading` up to `3.5rem` at `1024px+`; divider `6rem` × `4px` |
| Grid | 1 column (default); `repeat(3, minmax(0, 1fr))` at `1024px+` on homepage |
| Card | `.testimonial-block` — `#123208`; flex column; equal height; min-height `20rem` → `24rem` at `1024px+`; padding `2.5rem` → `3rem`; shadow `0 20px 45px -16px rgb(0 0 0 / 0.4)` |
| Quote title | `2rem` → `2.375rem` at `1024px+` |
| Body | `1.25rem` → `1.3125rem` at `1024px+` |
| Stars | `1.5rem`, accent `#ff9500` |
| Text colours | Title `#ffffff`; body `#f8fafc`; author `#a7c441` |
| No overlay | Cards use light text on dark green only — no image overlays or darkening filters |
| All reviews link | `.testimonials-all-link` → `reviews.html`; outlined button, fills green on hover |

### Three columns (fixed order)

| Column | Content |
|--------|---------|
| 1 | Jane D. — *"Great Job Guys"* — 5 stars — real client review |
| 2 | Featured slot — latest submitted review from `localStorage`, or G. LaRose — *"Exceptional work!"* (static default) |
| 3 | CTA — *Share Your Experience* — **Leave a Review** (`.btn-review-open`) |

### All reviews page (`reviews.html`)

| Property | Value |
|----------|-------|
| URL | `reviews.html` (not in main nav) |
| Layout | Same card grid + CTA; auto-fit columns; populated by `js/main.js` |
| Link from homepage | *Read all reviews* below testimonial grid |

### Review popup (`#review-modal`)

| Property | Value |
|----------|-------|
| Trigger | `.btn-review-open` on homepage and reviews page |
| Fields | Name (required), title (optional), star rating (1–5), comment (required, max 200 chars with live counter) |
| Behaviour | Thank-you message on submit; updates featured card and reviews grid |
| Script | `js/main.js` |
| Persistence | `localStorage` key `alderleaf-reviews` (browser only, no backend yet) |

---

---

## Inner page banners (`.page-hero`) — **LOCKED**

**Do not change** frame stripes, per-page banner sizing, or bright-text styling without explicit user approval.

### Frame stripes (all `.page-hero` pages)

| Property | Value |
|----------|-------|
| Token | `--banner-frame-size`: `0.375rem` (6px) |
| Top / bottom bars | `.page-hero::before` and `.page-hero::after`, forest green `#1d7a20`, `z-index: 1` |
| Default image | `.page-hero-bg` inset top/bottom by frame size; `height: auto`; `object-fit: cover` |

Homepage uses `.hero-home` with its own stripe rules (same bar size).

### Bright-text pages (Services, About, Gallery)

| Property | Value |
|----------|-------|
| Class | `.page-hero--bright-text` |
| Text | White `#ffffff` on eyebrow, heading, lead |
| Text shadow | Tight dark shadows only |
| Gradient overlay | **None** — do not re-add |

---

## Services page hero — locked

**Services page only. Do not change without approval.**

| Property | Value |
|----------|-------|
| Banner image | `assets/images/banner-services.jpg` |
| Image fit | `inset: 0`; `height: 100%`; `object-fit: cover`; `object-position: 74% 50%` |
| Frame stripes | Same as all `.page-hero` pages (top/bottom bars) |
| Overlay | None |

Scoped in CSS via `.page-hero:has(> img[src$="banner-services.jpg"])`.

---

## About page hero — locked

| Property | Value |
|----------|-------|
| Banner image | `assets/images/IMG_2003.jpg` (`.page-hero-bg--about`) |
| Image fit | `height: calc(100% - (2 * var(--banner-frame-size)))`; `object-fit: cover`; `object-position: 48% bottom` |
| Frame stripes | Same as all `.page-hero` pages |
| Overlay | None |

---

## Gallery page hero — locked

**Gallery page only. Do not change without approval.**

| Property | Value |
|----------|-------|
| Banner image | `assets/images/photopea-banner-chainsaw.jpg` (1920×688) |
| Image fit | `inset: 0`; `height: 100%`; `object-fit: cover`; `object-position: 72% center` |
| Frame stripes | Same as all `.page-hero` pages |
| Overlay | None |

Scoped in CSS via `.page-hero:has(> img[src$="photopea-banner-chainsaw.jpg"])`.

---

## Contact page intro — locked

**Contact page only (`contact.html`, `body.page-contact`). Do not change without approval.**

| Property | Value |
|----------|-------|
| Section | `.contact-page-intro.section-py-contact-intro` |
| Desktop background | Same gradient as mobile (see `.contact-page-intro` in CSS) |
| Divider line under heading | **None** |
| Desktop stripes | Header `border-bottom` **1px**; intro `border-bottom` **1px** forest |
| Mobile only (`max-width: 1023px`) | Header border **none**; intro `border-top` + `border-bottom` **1px** (`--banner-frame-size`); gradient starts on cream at 0% |
| Mobile only (`max-width: 639px`) | Heading `1.625rem`, `text-wrap: balance`, tighter padding |

---

## Mobile popup close buttons — locked

**Mobile only (`max-width: 1023px`). Do not change without approval.**

| Property | Value |
|----------|-------|
| Scope | `.service-modal-close`, `.review-modal-close`, `.gallery-lightbox-close` |
| Placement | Extra dialog top padding; × sits above content, not on images |
| Style | Plain ×, no button chrome (`appearance: none`, transparent background) |

---

## Services page cards + modals — locked (services page only)

| Property | Value |
|----------|-------|
| Cards | `.service-item-modal` buttons (not links to detail pages); first card: **Tree Removal & Tree Assessments** |
| Behaviour | Click opens `#service-modal` with service-specific content |
| Script | `js/services-modal.js` |
| Content | Consolidated copy from former detail pages — no separate page navigation from cards |
| Quote CTA | *Request a Free Quote* inside each modal → `quote.html` |
| Detail pages | Still exist for nav dropdown links; cards on `services.html` use modals only |

---

## About page column layout — locked

**About page only (`about.html`). Do not change without approval.**

| Property | Value |
|----------|-------|
| Section | `.about-page-section` with `.about-page-grid` |
| Grid (1024px+) | Two equal columns (`1fr 1fr`), `gap: 6rem`, `align-items: center` |
| Left column | Six prose paragraphs + signature block (`.about-page-signature`) |
| Paragraph spacing | `.about-page-copy p + p` → `0.875rem` |
| Right column | `.about-photo` — full-width, `rounded-2xl`, shadow |
| Page hero (above content) | `.page-hero` min-height `28rem` → `36rem` (768px+) → `44rem` (1024px+); see [About page hero — locked](#about-page-hero--locked) |

---

## Contact page main — locked

**Contact page only (`contact.html`). Do not change without approval.**

| Property | Value |
|----------|-------|
| Section | `.section-py-contact-main` |
| Background | `#ffffff` (white only — no cream, gradient, or green tint) |

Do not extend `.contact-page-intro` banner styling to this section.

---

## Contact page column layout

| Property | Value |
|----------|-------|
| Intro | Full-width heading in `.site-container`; `h1` `text-4xl sm:text-5xl lg:text-6xl font-normal` |
| Main section grid | `grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20` |
| Left column | Contact blocks (`space-y-8`); payment box `rounded-2xl bg-forest p-8 text-white` |
| Right column | Image `w-full rounded-2xl object-cover shadow-xl lg:min-h-[32rem]` |
| Subheading (`h2`) in contact blocks | `text-2xl font-bold` |
| Contact link text | `text-lg font-semibold text-forest` |
| Quote CTA | `rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white` |

---

## Colours

| Token | Hex | Usage |
|-------|-----|-------|
| forest | `#1d7a20` | Primary green — header border, CTA, links, dividers |
| forest-dark | `#123208` | Dark green — footer, testimonial block, hero fallback bg, CTA hover |
| forest-light | `#a7c441` | Accent green — eyebrow, tagline (non-home overrides), footer tagline |
| accent | `#ff9500` | Orange — hero primary button, stars, contact CTA |
| slate | `#4a4e57` | Body text |
| ink | `#212934` | Headings, nav links |
| cream | `#f9f9f9` | Alternate section background |
| white | `#ffffff` | Header bg, hero text |

---

## Typography

### Font families

| Role | Family |
|------|--------|
| Headings (`h1`–`h4`) | `"Libre Baskerville", Georgia, "Times New Roman", serif` |
| Body, nav, buttons | `"Chivo", system-ui, sans-serif` |

### Font sizes (extracted)

| Element | Size / weight |
|---------|----------------|
| Body default | Chivo, color `#4a4e57` (slate) |
| Nav links | `1.0625rem` / `500`; `1.375rem` at 1024px+; active `600` |
| Header CTA | `1.125rem` / `700` |
| Section `h2` (homepage) | `1.875rem` (`text-3xl`) → `2.25rem` (`sm:text-4xl`); `font-normal` |
| Service card `h3` | `1.25rem` (`text-xl`) / `700` |
| Service card body | default size, `leading-relaxed` |
| Contact page `h1` | `2.25rem` → `3rem` → `3.75rem` (`text-4xl sm:text-5xl lg:text-6xl`) |
| Contact block `h2` | `1.5rem` (`text-2xl`) / `700` |
| Contact links | `1.125rem` (`text-lg`) / `600` |
| Homepage testimonial quote (`.quote-title`) | `2rem` → `2.375rem` at `1024px+` / serif / `700` / `#ffffff` |
| Footer copyright | `0.875rem` (`text-sm`) |

### Inner page hero (`.hero-heading`, not homepage copy overrides)

| Breakpoint | Font size |
|------------|-----------|
| Default | `2.75rem`, line-height `1.08`, weight `400`, color white |
| `640px+` | `3.5rem` |
| `1024px+` | `4.5rem` |
| `1280px+` | `5.25rem` |

---

## Notes

- Homepage hero is **locked** — see [Homepage hero](#homepage-hero-hero-home--locked).
- Inner page banners and frame stripes are **locked** — see [Inner page banners](#inner-page-banners-page-hero--locked).
- `.hero-cell-link` is `display: none` on homepage (markup present but hidden).
- Inner pages use `.site-container-page` (`1320px` max); homepage sections use full `1920px` container.
