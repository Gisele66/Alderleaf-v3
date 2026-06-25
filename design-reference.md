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

## Homepage hero (`.hero-home`)

### Height

| Breakpoint | Min height |
|------------|------------|
| Default | `80vh` |
| `min-width: 1024px` | `85vh` |
| Fallback background color | `#123208` (forest-dark) |

### Hero image (`.hero-home-bg`)

| Property | Value |
|----------|-------|
| Position | `absolute inset-0`, `h-full w-full` |
| Object fit | `cover` |
| Object position | `62% center` (default); `66% center` at `min-width: 1024px` |

### Overlay / darkening (`.hero-overlay-home`)

| Property | Value |
|----------|-------|
| Background | `rgba(0, 0, 0, 0.35)` |
| Pointer events | `none` |

*(Inner page heroes use `.hero-overlay` with `background: transparent` — not used on homepage.)*

### Hero text container (`.hero-home-content`)

| Property | Value |
|----------|-------|
| Position | `absolute inset-0`, `z-index: 2` |
| Layout | flex; `align-items: center`; `justify-content: flex-start` |
| Padding inline | `clamp(1.25rem, 6vw, 3rem)` |
| Padding block | `2.5rem` |
| At `min-width: 901px` | `align-items: flex-start`; `padding-left: 520px`; `padding-right: 2rem`; `padding-top: 345px`; `padding-bottom: 2.5rem` |

### Hero text block (`.hero-home-copy`)

| Property | Value |
|----------|-------|
| Max width | `32rem` (default); `620px` at `1024px+` |

### Homepage hero text sizes

Values below come from `.hero-home-copy` overrides (what the homepage actually renders).

| Element | Default | `640px+` | `1024px+` | `1280px+` |
|---------|---------|----------|-----------|-----------|
| Eyebrow (`.hero-eyebrow`) | `0.9375rem`, margin-bottom `1rem` | — | `1.125rem`, margin-bottom `1.25rem` | — |
| Heading (`.hero-heading-home`) | `3rem`, line-height `1.05`, color `#ffffff` | `3.875rem` | `5rem` | `5.75rem` |
| Lead (`.hero-lead`) | `1.125rem`, margin-top `1.25rem`, color `#ffffff` | — | `1.3125rem`, margin-top `1.5rem` | — |
| Tagline (`.hero-tagline`) | `1.1875rem`, margin-top `1rem`, color `#ffffff`, font-weight `700` | — | `1.375rem` | — |

**Eyebrow styling (shared `.hero-eyebrow`):** font-weight `700`, letter-spacing `0.22em`, uppercase, color `#a7c441` (forest-light).

**Text shadows on homepage copy:**
- Eyebrow: `0 1px 3px rgba(0,0,0,0.6), 0 4px 12px rgba(0,0,0,0.4)`
- Heading: `0 2px 6px rgba(0,0,0,0.45), 0 10px 24px rgba(0,0,0,0.35)`
- Lead: `0 1px 3px rgba(0,0,0,0.95), 0 2px 10px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.6)`
- Tagline: `0 1px 3px rgba(0,0,0,0.6), 0 4px 14px rgba(0,0,0,0.45)`

### Homepage hero buttons (`.hero-home-copy .hero-actions`)

| Property | Value |
|----------|-------|
| Layout | `flex-direction: column`; `align-items: stretch`; `width: fit-content` |
| Gap | `1rem` (default); `1.125rem` at `1024px+` |
| Margin top | `2.5rem` (default); `3rem` at `1024px+` |

**Primary (`.btn-hero-primary`) in hero copy:**

| Property | Default | `1024px+` |
|----------|---------|-----------|
| Padding | `1.125rem 2rem` | `1.25rem 2.25rem` |
| Font size | `1.25rem` | `1.5rem` |
| Font weight | `700` | `700` |
| Border radius | `0.5rem` | `0.5rem` |
| Background | `#ff9500` (accent) | same |
| Box shadow | `0 8px 24px rgb(0 0 0 / 0.22)` | same |

**Secondary (`.btn-hero-secondary`) in hero copy:**

| Property | Value |
|----------|-------|
| Padding | `1.125rem 2rem` (default); `1.25rem 2.25rem` at `1024px+` |
| Font size | `1.25rem` (default); `1.5rem` at `1024px+` |
| Font weight | `800` |
| Background | `rgba(0, 0, 0, 0.35)`; hover `rgba(0, 0, 0, 0.45)` |
| Border | `2px solid rgba(255, 255, 255, 0.9)`; hover `#ffffff` |
| Border radius | `0.5rem` |
| Color | `#ffffff` |

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

## About page column layout

| Property | Value |
|----------|-------|
| Section padding | `py-20 lg:py-28` |
| Grid | `grid items-start gap-12 lg:grid-cols-[3fr_2fr] lg:gap-20` |
| Left column | Prose text + signature image (`mt-8 h-16 w-auto`) |
| Right column | Full-width image, `rounded-2xl shadow-xl` |
| Page hero (above content) | `.page-hero` min-height `28rem` → `36rem` (768px+) → `44rem` (1024px+); overlay transparent |

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
| Homepage testimonial quote | `1.5rem` (`text-2xl`) / serif / `700` |
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

- Homepage hero text uses **fixed pixel positioning** at `901px+` (`padding-left: 520px`, `padding-top: 345px`) — not purely flex-centered at desktop.
- `.hero-cell-link` is `display: none` on homepage (markup present but hidden).
- Inner pages use `.site-container-page` (`1320px` max); homepage sections use full `1920px` container.
