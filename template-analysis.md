# Template Analysis — Antra: Architecture & Interior Design HTML Template

> **Author:** ColorPic | **Version:** 1.0 | **Source:** ThemeForest

---

## 1. Framework Identification

### Core Technology
| Property | Value |
|---|---|
| **Type** | Static Multi-Page HTML5 Template |
| **Framework** | None (vanilla HTML — no React, Vue, Next.js, Angular) |
| **CSS Library** | Bootstrap 5 (`bootstrap.min.css` + `bootstrap-bundle.js`) |
| **Custom CSS** | SCSS compiled to `assets/css/main.css` via Node Sass (`^1.94.0`) |
| **Routing** | None — traditional file-based navigation with `<a href="*.html">` links |
| **Build Tool** | npm scripts: `sass` (watch + compile) + `browser-sync` (dev server) + `concurrently` |

### Dev Dependencies (`package.json`)
```json
"devDependencies": {
  "sass": "^1.94.0",
  "browser-sync": "^2.29.3",
  "concurrently": "^8.2.2"
}
```

### Typography (Google Fonts)
- **Headings:** `Cal Sans` (serif)
- **Body:** `Golos Text` (sans-serif, weights 400–900)
- **Primary accent color:** `#CAA05C` (gold/bronze)
- **Background:** `#f6f6f6`
- **Body text:** `#4D4D52`
- **Heading text:** `#191919`

---

## 2. JavaScript Libraries & Plugins

All scripts loaded from `assets/js/vendor/`:

| Library | File | Purpose |
|---|---|---|
| jQuery 3.7.1 | `jquary-3.7.1.min.js` | DOM manipulation, AJAX |
| Bootstrap Bundle | `bootstrap-bundle.js` | Modals, dropdowns, components |
| Swiper.js | `swiper.min.js` | All carousels and sliders |
| GSAP | `gsap.min.js` | Animations (preloader, transitions) |
| GSAP ScrollTrigger | `scroll-trigger.min.js` | Scroll-driven animations |
| GSAP ScrollSmoother | `scroll-smoother.js` | Smooth page scrolling |
| SplitType | `split-type.min.js` | Character-level text animation |
| Odometer.js | `odometer.min.js` | Animated counter numbers |
| Venobox | `venobox.min.js` | Lightbox (images + YouTube video) |
| MeanMenu | `meanmenu.js` | Mobile accordion navigation |
| jQuery Isotope | `jquery.isotope.js` | Portfolio grid filtering |
| TwentyTwenty | `jquery.twentytwenty.min.js` | Before/after image comparison |
| Waypoints | `waypoints.min.js` | Scroll-triggered event hooks |
| Nice Select | `nice-select.js` | Custom `<select>` styling |
| Three.js | `three.min.js` | 3D rendering (used by Panolens) |
| Panolens.js | `panolens.min.js` | 360° panoramic image viewer |
| CarouselTicker | `jquery.carouselTicker.js` | Marquee/ticker animation |
| imagesLoaded | `imagesloaded-pkgd.js` | Detect image load completion |
| Countdown | `countdown.js` | Coming Soon countdown timer |

### Custom JS Files
| File | Responsibility |
|---|---|
| `assets/js/main.js` | Core: sticky header, mobile menu, sidebar, custom cursor, odometer, GSAP animations, all Swiper instances |
| `assets/js/slider.js` | Hero slider (Swiper + per-slide GSAP entry animations) |
| `assets/js/banner-process.js` | Banner process Swiper + hover-interactive image switching |
| `assets/js/contact.js` | AJAX contact form submission → `mail.php` |

---

## 3. Detected UI Components

### 3.1 Navbar / Header

**Class:** `.header.sticky-active`

- **Structure:** Positioned `absolute` at top; becomes `fixed` (`.fixed`) at scroll ≥ 110px
- **Logo:** `.header-logo` — dual logo support (dark/light variants)
- **Navigation:** `.header-menu-wrap > .mobile-menu-items > ul` — nested `<ul>` dropdowns
  - Converted to accordion on mobile via **MeanMenu** (breakpoint: 992px)
- **Right actions:** Phone link, CTA button (`.tl-primary-btn.header-btn`), search icon, sidebar grid toggle
- **Markup pattern:**
  ```html
  <header class="header sticky-active">
    <div class="primary-header">
      <div class="primary-header-inner">
        <div class="header-left-wrap">
          <!-- logo + nav -->
        </div>
        <div class="header-right-wrap">
          <!-- phone + CTA + search + sidebar trigger -->
        </div>
      </div>
    </div>
  </header>
  ```

---

### 3.2 Hero / Slider Sections

**9 homepage variants** each use a distinct hero layout:

| Page | Hero Type | Class |
|---|---|---|
| `index.html` | Full-screen Swiper fade slider | `.antra-slider.swiper-container` |
| `index-2.html` to `index-9.html` | Varied (banners, split layouts, video bg, etc.) | — |

**index.html hero details:**
- Full-viewport slides with background images loaded via `data-background` attribute
- 2 slides, Swiper `effect: "fade"`, loop, custom GSAP per-element entry animations
- Animation attributes on inner elements: `data-animation`, `data-delay`, `data-duration`
- Slide content: sub-heading, H2 title, description paragraph, CTA button
- Right element panel: stat number, labels, thumbnail image

---

### 3.3 Service Cards

**Class:** `.service-item`

- 4-column Bootstrap grid (`col-xl-3 col-lg-6`)
- Each card: icon image, H3 title (links to `service-details.html`), description paragraph
- Scroll animation via `data-direction`, `data-delay`, `data-offset` attributes

```html
<div class="service-item slide-anim" data-direction="left">
  <div class="service-top">
    <h3 class="title"><a href="service-details.html">…</a></h3>
    <div class="icon"><img src="…" alt="service"></div>
  </div>
  <p>…</p>
</div>
```

---

### 3.4 Project / Portfolio Cards

**Class:** `.project-item` (inside Swiper carousel `.project-carousel`)

- Image with overlay tag list (`ul > li > a`)
- Content area: H3 title, location + year span
- 3 visible slides (responsive: 1 → 2 → 3)

```html
<div class="project-item">
  <div class="project-img">
    <img src="…" alt="project">
    <ul><li><a>Residential</a></li></ul>
  </div>
  <div class="project-content">
    <h3 class="title"><a href="portfolio-details.html">…</a></h3>
    <span>Berlin, Germany <br>2025</span>
  </div>
</div>
```

---

### 3.5 Blog / Post Cards

**Class:** `.post-card` (inside Swiper carousel `.blog-carousel`)

- Thumbnail image + floating `.category` badge span
- Meta list: date + author
- H3 title, excerpt paragraph

```html
<div class="post-card">
  <div class="post-thumb">
    <img src="…" alt="post">
    <span class="category">exteriors</span>
  </div>
  <div class="post-content">
    <ul class="post-meta"><li>Dec 25, 2025</li><li>By Admin</li></ul>
    <h3 class="title"><a href="blog-details.html">…</a></h3>
    <p>…</p>
  </div>
</div>
```

---

### 3.6 Team Cards

**Class:** `.team-item` (inside `.team-item-list`)

- Hover-interactive: hovering a row swaps the large `.team-img` image via GSAP (`featureHoverGSAP`)
- Each row: numbered span, H3 name, role span, arrow link
- `data-img` attribute drives dynamic image updates

---

### 3.7 Counter / Stats Section

**Class:** `.counter-item`

- 4-column grid, Odometer.js animated numbers
- Each item: `<span class="odometer" data-count="22">`, subtitle H4, description P

---

### 3.8 Testimonial Cards

**Class:** `.testi-item` (inside Swiper `.testi-carousel`)

- Quote paragraph, author image, author name + title
- Header block: aggregate rating (4.80), 5-star icons, total review count

---

### 3.9 Footer

**Class:** `.footer-section`

- Background image via `data-background` with dark overlay + glassmorphism shade
- 4-column Bootstrap grid (`col-lg-3 col-md-6`):
  1. **Col 1:** Logo + tagline + address
  2. **Col 2:** Navigation links (About, Services, Careers, Team, Blog, Contact)
  3. **Col 3:** Secondary links (Projects, Partners, Terms, Support)
  4. **Col 4:** Phone, email, social links list
- **Copyright bar:** `.copyright-area` with `© 2025 antra. All Rights Reserved.`
- Decorative large text watermark: `.footer-text`

---

### 3.10 Forms

| Form | ID | Method | Target | Fields |
|---|---|---|---|---|
| Contact | `#ajax_contact` | POST (AJAX) | `mail.php` | Full Name, Phone, Email, Services, Message |
| Search | `#form` | GET | `#` | Search text input |
| Newsletter | _(no id)_ | — | — | Email address input + submit button |

**Contact form uses jQuery AJAX** (`contact.js`): serializes data → POST to `mail.php` → shows success/error in `#form-messages`.

---

### 3.11 Sidebar / Off-Canvas

Two distinct off-canvas components:

1. **Desktop Sidebar** (`#sidebar-area`): triggered by `.sidebar-trigger` button; contains logo, about text, 6-image gallery (Venobox lightbox), contact info, social links
2. **Mobile Slide Menu** (`.mobile-side-menu`): separate mobile drawer with logo, MeanMenu nav, contact list, social links; toggled by `.mobile-side-menu-toggle`

---

### 3.12 Other Reusable Components

| Component | Class | Description |
|---|---|---|
| Preloader | `.preloader` | GSAP animated bar loader |
| Section Heading | `.section-heading` | Sub-heading H4 + title H2 + optional P |
| Custom Cursor | `.mt-cursor` / `.mt-cursor-view` | JS custom cursor with blend mode on hover |
| Popup Search | `#popup-search-box` | Full-width search overlay |
| Scroll Progress | `#scroll-percentage` | Circular scroll progress indicator |
| Video Popup | `.video-popup.venobox` | Venobox YouTube lightbox trigger |
| Image Comparison | `.antra-image-comparison` | TwentyTwenty before/after slider |
| 360° Panorama | `.antra-panoroma-img` | Panolens.js + Three.js viewer |
| Sponsor Carousel | `.sponsor-carousel` | Swiper auto-scrolling logo ticker |
| Gallery Scroll | `.gallary-wrap` | GSAP parallax scroll gallery (bi-directional) |
| Process Steps | `.process-item` | Numbered step cards with thumbnail |
| Feature List | `.feature-item` | Hover → GSAP image swap (services list) |
| Award List | `.award-item` | Hover → GSAP image swap (awards) |
| Primary Button | `.tl-primary-btn` | Base CTA button style (variants: `.white-btn`) |

---

## 4. Page Inventory (35 Pages)

### Homepages (9 variants)
| File | Variant |
|---|---|
| `index.html` | Home One — full-screen fade slider |
| `index-2.html` | Home Two |
| `index-3.html` | Home Three |
| `index-4.html` | Home Four |
| `index-5.html` | Home Five |
| `index-6.html` | Home Six |
| `index-7.html` | Home Seven |
| `index-8.html` | Home Eight |
| `index-9.html` | Home Nine |

### Services
`service.html` · `service-2.html` · `service-3.html` · `service-details.html`

### Portfolio
`portfolio.html` · `portfolio-2.html` · `portfolio-3.html` · `portfolio-details.html`

### Blog
`blog-grid.html` · `blog-list.html` · `blog-standard.html` · `blog-single.html` · `blog-details.html`

### Pages
`about.html` · `team.html` · `team-details.html` · `pricing.html` · `gallary-1.html` · `gallary-2.html` · `shop.html` · `shop-details.html` · `faq.html` · `error-page.html` · `coming-soon.html`

### Utilities
`contact.html` · `mail.php`

---

## 5. SCSS Architecture

```
assets/scss/
├── main.scss                  ← Entry point (@forward only)
├── utilities/
│   ├── _index.scss
│   ├── _colors.scss           ← SCSS color map ($colors)
│   ├── _typography.scss       ← Font family, size, weight maps
│   ├── _root.scss             ← CSS custom properties from maps
│   ├── _breakpoints.scss      ← Responsive breakpoint definitions
│   └── _mixins.scss           ← SCSS mixins (transition, flex, etc.)
├── components/
│   ├── _theme.scss            ← Base/reset + typography defaults
│   └── _buttons.scss          ← Button styles
└── layout/
    ├── _header.scss
    ├── _footer.scss
    ├── _home-1.scss … _home-9.scss
    ├── _about.scss · _about-page.scss
    ├── _service.scss
    ├── _blog.scss · _blog-details.scss
    ├── _shop.scss · _shop-details.scss
    ├── _contact.scss
    ├── _inner-page.scss
    ├── _page-header.scss
    └── _sidebar-area.scss
```

CSS custom properties are auto-generated from SCSS maps using `@each` loops, resulting in tokens like `--tl-color-theme-primary`, `--tl-ff-heading`, `--tl-fs-h1`, etc.

---

## 6. Routing Summary

No SPA router. Navigation is fully file-based:

```
/ (antra/)
├── index.html           (default home)
├── about.html
├── service.html
│   └── service-details.html
├── portfolio.html
│   └── portfolio-details.html
├── blog-grid.html
│   └── blog-details.html
├── contact.html
│   └── mail.php         (PHP form handler)
└── ...
```

All internal links are relative `href="page.html"` anchors. No hash routing, no JS router.

---

## 7. Key Design Patterns

| Pattern | Implementation |
|---|---|
| **Smooth scroll** | GSAP ScrollSmoother wraps `#antra-smooth-wrapper > #antra-smooth-content` |
| **Scroll animations** | Elements with `.fade-top`, `.slide-anim`, `data-direction` animated by GSAP ScrollTrigger |
| **Lazy bg images** | `data-background="path/to/img.png"` → jQuery reads attr and sets CSS `background-image` |
| **Hover image swap** | `featureHoverGSAP()` utility — mouseover `.feature-item` / `.team-item` fades in new `data-img` |
| **Text animation** | `data-text-animation="fade-in-right" data-split="char"` → SplitType + GSAP per-char animation |
| **Odometer counters** | `.odometer[data-count]` — triggered at 80% viewport via Waypoints |
| **Sticky header** | Adds `.fixed` class at `scrollTop >= 110` via jQuery scroll event |
| **Mobile nav** | MeanMenu converts nested `<ul>` to accordion at 992px breakpoint |
