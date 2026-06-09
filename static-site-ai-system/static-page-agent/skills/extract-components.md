Extract Components Skill

Purpose
- Produce a detailed inventory of reusable components and sections used across the Antra template and map them to source HTML files, selectors, and edit-safety notes.

Inputs
- `antra/*.html` and any partials in `antra/assets/` (if present)
- `antra/assets/js/main.js` (to discover JS hooks) and `antra/assets/scss/` (for component-specific styles)

Outputs
- `static-site-ai-system/static-page-agent/outputs/components.md` (human readable)
- `static-site-ai-system/static-page-agent/outputs/components.json` (structured mapping agents can consume)

Steps
1. Page scan
	- Iterate every HTML file in `antra/` and record top-level sections (by `id`, obvious `.class` names, and semantic headings). Use headings (`<section>`, `<header>`, `<footer>`, `.container`) as anchors.

2. Component identification
	- For repeated DOM blocks (header, footer, service card, portfolio item, testimonial, blog excerpt, team card, contact form), identify the minimal selector that uniquely identifies the block (e.g. `.service-item`, `.portfolio-item`).

3. Data and JS hooks
	- For each component, list `data-*` attributes present and note which JS plugin interacts with it (e.g., Swiper, Venobox, Isotope, GSAP). Mark components that must not be restructured.

4. Style coupling
	- Map components to SCSS partials or style rules (files under `antra/assets/scss/`). Note where CSS variables or tokens are used.

5. Reusability score and complexity
	- Score each component: `low` (simple markup, text-only), `medium` (requires minor markup adjustments), `high` (relies on strict DOM for JS). Use this to advise agents on safe changes.

6. Output examples
	- Example JSON entry:
```
{
  "name": "hero",
  "files": ["antra/index.html"],
  "selector": ".hero-area",
  "jsHooks": ["data-background","split-text"],
  "reusability": "medium",
  "safeEdits": ["heading text","paragraph text","CTA text"]
}
```

Quality Checklist
- Ensure every repeated UI block has an entry
- Include at least header, footer, hero, services, portfolio, team, testimonials, blog list, contact form, and shop item components
- Mark any component that uses `.swiper-wrapper > .swiper-slide` as `high` complexity (do not change DOM nesting)

Notes
- This skill is used by `site-customizer` and `content-writer` to safely target the HTML elements for content and design updates.
