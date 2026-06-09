# Design Rules — Antra Template

These rules govern all edits to the template. All agents must follow them.

---

## 1. SCSS Token System (Mandatory)

- All color changes go through `antra/assets/scss/utilities/_colors.scss` → `$colors` map
- All font changes go through `antra/assets/scss/utilities/_typography.scss` → `$font-family` map
- Never hardcode hex values in layout SCSS files — always use `var(--tl-color-*)`
- After any SCSS edit, always run `cd antra && npm run sass` to recompile
- Never edit `antra/assets/css/main.css` — it is auto-generated

## 2. HTML Immutability Rules

- Never remove or alter `data-background`, `data-animation`, `data-delay`, `data-duration`, `data-direction`, `data-offset`, `data-count`, `data-img`, `data-gall`, `data-vbtype`, `data-text-animation`, `data-split`, `data-stagger` attributes
- Never alter the `#antra-smooth-wrapper > #antra-smooth-content` wrapper structure (GSAP requires it)
- Never rename or remove CSS classes (they are GSAP/jQuery/Swiper hook points)
- Never alter `.swiper-wrapper > .swiper-slide` DOM nesting (Swiper requires exact structure)
- Never change the JS `<script>` loading order at the bottom of `<body>`
- Never add inline `style="background-image: ..."` — use `data-background` attribute instead

## 3. Content Editing Scope

- Safe to edit: `<h1>`–`<h6>`, `<p>`, visible `<span>`, `<a>` text, `alt`, `placeholder`, `<title>`, `<meta name="description">`
- Never edit: decorative watermark spans (`.footer-text`, `.counter-text`, `.about-text`), script tag content
- Preserve `<span>` and `<br>` inside headings — they are used by SplitType/GSAP

## 4. Asset Management

- Place logos in `assets/img/logo/`, hero backgrounds in `assets/img/bg-img/`
- Use placeholder format for missing assets: `assets/img/[category]/REPLACE-ME-[description].png`
- When updating team photos, update both the `<img src>` AND the `data-img` attribute
- Logo appears in 5 locations per page — always update all 5

## 5. Responsive Design

- All layouts use Bootstrap 5 grid — maintain `col-*` class usage
- Test breakpoints: mobile (< 576px), tablet (576–991px), desktop (≥ 992px), wide (≥ 1200px)
- Use the `@include breakpoint(lg)` mixin from `_mixins.scss` — never hardcode `@media` queries
- Never remove Bootstrap grid classes from elements

## 6. Changelog Convention

All agents must append to `static-site-ai-system/static-page-agent/outputs/changes-log.md`:

```markdown
## [Agent Name] — YYYY-MM-DD HH:MM

### Files Modified
- `antra/path/to/file` — description

### Summary
Brief description of what was done and why.

---
```
