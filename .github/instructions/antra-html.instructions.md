---
applyTo: "antra/**/*.html"
---

# Antra HTML Template — Editing Rules

These rules apply automatically whenever you edit any `.html` file in `antra/`. Follow them precisely to prevent breaking runtime behavior.

## Immutable Attributes — NEVER Remove or Alter

These `data-*` attributes are read at runtime by JavaScript plugins. Removing or changing them will silently break animations, backgrounds, and carousels.

| Attribute | Read By | Effect If Removed |
|-----------|---------|-------------------|
| `data-background` | jQuery (`main.js`) | Section/element loses its background image entirely |
| `data-animation` | GSAP / Antra animation plugin | Scroll entry animation stops working |
| `data-delay` | GSAP / Antra animation plugin | Animation timing broken |
| `data-duration` | GSAP / Antra animation plugin | Animation duration broken |
| `data-direction` | GSAP / Antra animation plugin | Slide direction lost |
| `data-offset` | Waypoints.js | Scroll trigger offset broken |
| `data-count` | Odometer.js | Counter animation broken — shows 0 |
| `data-img` | jQuery (`main.js`) hover swap | Team photo hover effect broken |
| `data-gall` | Venobox lightbox | Image grouped gallery broken |
| `data-vbtype` | Venobox lightbox | Lightbox content type broken |
| `data-text-animation` | SplitType / GSAP | Text split animation broken |
| `data-split` | SplitType | Text splitting broken |
| `data-stagger` | GSAP | Stagger animation timing broken |
| `data-loop` | Swiper | Carousel loop mode broken |
| `data-autoplay` | Swiper | Carousel autoplay broken |
| `data-speed` | Swiper | Carousel speed broken |
| `data-slides-per-view` | Swiper | Slides per view broken |
| `data-space-between` | Swiper | Carousel spacing broken |

## GSAP ScrollSmoother Wrapper — NEVER Alter

Every page MUST maintain this exact root structure immediately inside `<body>`. Do NOT rename, remove, or restructure these divs. ScrollSmoother requires them to exist as parent-child.

```html
<body>
  <!-- preloader -->
  <div id="preloader">...</div>

  <!-- REQUIRED: Both must exist, in this nesting -->
  <div id="antra-smooth-wrapper">
    <div id="antra-smooth-content">

      <header class="header">...</header>
      <!-- all page sections -->
      <footer class="footer-section">...</footer>

    </div><!-- #antra-smooth-content -->
  </div><!-- #antra-smooth-wrapper -->
</body>
```

## Swiper Carousel DOM — NEVER Restructure

Swiper requires this exact 3-level nesting. Any deviation silently breaks the carousel.

```html
<div class="swiper [carousel-name]">          <!-- Swiper root: has data-* config -->
  <div class="swiper-wrapper">               <!-- REQUIRED: exact class name -->
    <div class="swiper-slide">...</div>      <!-- REQUIRED: direct children only -->
    <div class="swiper-slide">...</div>
  </div>
  <div class="swiper-pagination"></div>      <!-- Optional: navigation elements -->
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</div>
```

## CSS Classes — NEVER Rename or Remove

Classes are referenced by `main.js`, GSAP selectors, and Swiper initialization. Removing a class breaks silent runtime logic.

- Do NOT rename classes on any element
- Do NOT add classes unless you know they won't conflict with GSAP selectors
- Keep all `.antra-*` classes — they are GSAP/plugin hook points

## Background Images — ALWAYS Use data-background

Background images are NEVER set via inline CSS in this template. Always use the attribute:

```html
<!-- ✅ CORRECT — jQuery applies this as background-image at runtime -->
<section data-background="assets/img/bg-img/my-image.jpg">

<!-- ❌ WRONG — will not work; may conflict with jQuery behavior -->
<section style="background-image: url('assets/img/bg-img/my-image.jpg')">
```

## Preloader — Keep Structure Intact

The preloader is required for the GSAP intro animation. Keep all its child elements:

```html
<div id="preloader">
  <div class="site-name"><span>ANTRA</span></div>  <!-- brand reveal animation -->
  <div class="loader-wrap">
    <div class="loader-bar"></div>
  </div>
</div>
```

The `.site-name` text and the loader bar are animated by GSAP. Do not remove any element.

## Venobox Lightbox — Required Classes

Links that open a lightbox MUST have class `venobox` AND the relevant `data-*` attributes:

```html
<a href="path/to/image.jpg" class="venobox" data-gall="gallery-group" data-vbtype="image">
  <img src="..." alt="...">
</a>
```

## Script Loading Order — NEVER Change

The scripts at the bottom of `<body>` are dependency-ordered. Do not reorder, add between, or remove any:

```html
<!-- 1. jQuery must be first -->
<script src="assets/js/vendor/jquery-3.7.1.min.js"></script>
<!-- 2. Bootstrap requires jQuery -->
<script src="assets/js/vendor/bootstrap.bundle.min.js"></script>
<!-- 3. GSAP core before plugins -->
<script src="assets/js/vendor/gsap.min.js"></script>
<script src="assets/js/vendor/ScrollTrigger.min.js"></script>
<script src="assets/js/vendor/ScrollSmoother.min.js"></script>
<!-- 4. All other vendors -->
<script src="assets/js/vendor/swiper.min.js"></script>
<!-- ... other vendors ... -->
<!-- 5. main.js MUST be last — it depends on all vendors above -->
<script src="assets/js/main.js"></script>
```

## What IS Safe to Edit

- All visible text in `<h1>`–`<h6>`, `<p>`, `<span>` (where span contains no icon children)
- `<a>` visible text (NOT `href`)
- `alt` attributes on `<img>`
- `placeholder` attributes on `<input>` and `<textarea>`
- `src` on `<img>` tags (for image replacement)
- `<title>` and `<meta name="description" content="...">` in `<head>`
- `data-background` value (for background image replacement)
- `data-img` value on `.team-item` (for team photo replacement — always update the corresponding `<img src>` too)

## What Is NOT Safe to Edit

- Any `data-*` attribute key or value (except `data-background` and `data-img` for image replacement)
- CSS class names
- `href`, `src`, `action` attribute values (except image `src` for asset replacement)
- Content inside `<script>` tags
- The watermark decorative text in `.footer-text`, `.counter-text`, `.about-text`, `.project-text`
- The preloader `.site-name` span (brand identity, used in GSAP intro)
- HTML structure/nesting (adding/removing wrapper divs)
