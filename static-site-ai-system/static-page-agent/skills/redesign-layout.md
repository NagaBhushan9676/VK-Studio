Redesign Layout Skill

Purpose
- Make layout or spacing adjustments to the Antra template while preserving responsive behavior, JS hooks, and theme tokens.

Inputs
- `antra/assets/scss/` (partials and utilities)
- `antra/*.html` pages to verify markup coupling

Outputs
- Updated SCSS partials (with change log entries)
- `static-site-ai-system/static-page-agent/outputs/layout-changes.md` describing edits and rationale

Constraints and Rules
- Never hardcode color tokens — use `$colors` map in `_colors.scss` and CSS variables defined in `_root.scss`.
- Never edit `antra/assets/css/main.css` — recompile via `npm run sass` after SCSS changes.
- Preserve JS-critical attributes and DOM nesting (Swiper, GSAP wrappers).

Recommended Workflow
1. Create a new SCSS partial for the change (if it affects multiple components) and import in `main.scss`.
2. Prefer variable-driven spacing: update or add spacing tokens in `_variables.scss` or the appropriate utilities partial.
3. Implement change locally and compile CSS:
	- `cd antra && npm run sass`
4. Preview with `npm run start` (browser-sync) to test across breakpoints.

Testing
- Test breakpoints: mobile (<576px), tablet (576–991px), desktop (≥992px), wide (≥1200px).
- Validate that GSAP animations and Swiper carousels still run; check console for JS errors.

Rollbacks
- Keep SCSS changes in a dedicated commit/patch so they can be reverted if the site breaks.

Example
- To change section vertical rhythm, add variables like `$section-gap-lg: 6rem;` and use mixins to apply on sections rather than editing each rule.

Notes
- Keep changes minimal and focused. If a layout update requires restructuring DOM in HTML, escalate to the `site-customizer` agent for approval.
