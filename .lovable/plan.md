# Sagar Solar Solution — Single-Page Website

Build one self-contained HTML file (vanilla CSS + JS, no frameworks) per the spec.

## Delivery
- File: `public/sagar-solar.html` (served as a static asset, accessible at `/sagar-solar.html`)
- Also update `src/routes/index.tsx` to redirect/replace the placeholder so the site root shows this page. Two options:
  - **A (recommended):** Inline the full HTML body into the index route via `dangerouslySetInnerHTML` + a `<head>` block using TanStack's `head()` for fonts/meta, keeping everything in one logical document.
  - **B:** Keep `public/sagar-solar.html` standalone and make `/` render an iframe or meta-refresh to it.
- I'll go with **A** so the home route IS the site (SEO-friendly, no iframe), while still being effectively one HTML document of vanilla CSS+JS.

## Design tokens
- Colors: `#F5A623` gold, `#0A1628` navy, `#FFFFFF`, `#2ECC71` green, `#F8F9FA` light gray
- Fonts: Google Fonts Poppins (headings/body) + Noto Sans Devanagari (Hindi)
- Loaded via `<link>` in route `head()` (per project rule: no remote @import in styles.css)

## Sections (in order)
1. Sticky **Navbar** (EN) — logo ☀️, links with active gold underline, shadow-on-scroll
2. **Hero** (HI) — navy bg, animated CSS sun (gold circle + rotating rays via `@keyframes spin`), headline, subtext, 2 CTAs
3. **Stats bar** (EN) — 4 counters animated via IntersectionObserver
4. **Solar Plans** (EN headings / HI descriptions) — 5 pricing cards in CSS Grid, 3kW flagged "Most Popular"
5. **Government Scheme** (HI) — title + 3 info boxes (PM Surya Ghar, UP NEDA, Bank Loan) + 3 govt logo placeholder badges
6. **How It Works** (EN) — 4-step timeline, horizontal desktop / vertical mobile
7. **Why Choose Us** (HI) — 6 emoji feature cards
8. **Testimonials** (HI) — JS slider, autoplay 4s, dot nav, 3 fake reviews
9. **Contact** (mixed) — form (Name, Phone, City, Plan dropdown, Message) + info column + map placeholder div
10. **Footer** (EN) — logo, tagline, 3 link columns, social SVGs, copyright

## JS behaviors (all vanilla, inline `<script>`)
- Smooth scroll on nav anchors
- IntersectionObserver counter animation
- Testimonial carousel with autoplay + dot click
- Sticky navbar shadow toggle on scroll
- Form `submit` handler with basic validation + `alert()`
- Floating "Back to top" button (show after 400px scroll)

## Responsive
- CSS Grid for plans / features / footer columns; Flexbox for navbar, stats, timeline
- Mobile breakpoint ~768px: nav collapses to hamburger, timeline → vertical, grids → single column

## Signature
- Hero centerpiece: layered SVG/CSS sun — central gold disk + 12 ray lines rotating via `animation: spin 20s linear infinite`, with a softer glow pulse

## Files touched
- `src/routes/index.tsx` — replace placeholder, add Google Fonts links in `head()`, render full markup + inline `<style>` and `<script>` blocks
- (No new packages, no backend, no schema changes)
