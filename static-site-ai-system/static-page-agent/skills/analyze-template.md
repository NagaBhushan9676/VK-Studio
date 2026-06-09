
Analyze Template Skill

Purpose
- Produce a complete, machine- and human-readable analysis of the Antra template to inform downstream agents (content-writer, ui-designer, asset-agent, build-reviewer).

Inputs
- The entire `antra/` directory (HTML, SCSS, JS, assets)
- `static-site-ai-system/context/*.md` for business/branding context (optional)

Outputs
- `template-analysis.md` (top-level summary)
- `static-site-ai-system/static-page-agent/outputs/template-analysis.json` (structured report — optional)

When to run
- On first onboarding of a new client into the workspace
- After a large template change (theme or vendor library update)

Steps
1. Gather high-level facts
	- Detect framework: Bootstrap version, SCSS entry point, build scripts (`package.json`), and runtime JS libraries (GSAP, Swiper, jQuery, Three.js).
	- Record build commands: `cd antra && npm run sass` and `npm run start`.

2. Scan files for vendor libraries
	- Parse `antra/assets/js/` and `antra/assets/css/` to list third-party libraries and versions when available.

3. Identify global tokens and entry points
	- Locate SCSS tokens: `antra/assets/scss/utilities/_colors.scss`, `_typography.scss`, `_root.scss`.
	- Note compiled CSS: `antra/assets/css/main.css` (do NOT edit directly).

4. Component & section inventory
	- Walk `antra/*.html`, extract named sections (hero, services, portfolio, team, footer, header, contact form) and record their file list and selector anchors.
	- For each section capture: file, start line, HTML id/class, data-* attributes used by JS plugins.

5. Interaction constraints
	- Detect GSAP/ScrollSmoother wrapper usage (`#antra-smooth-wrapper > #antra-smooth-content`).
	- Detect Swiper carousels and ensure `.swiper-wrapper > .swiper-slide` patterns remain untouched.
	- Record any `data-*` attributes in use (data-background, data-img, data-gall, etc.).

6. Assets inventory
	- List `assets/img` subfolders (logo, bg-img, team, project) and placeholder files (REPLACE-ME).

7. Output generation
	- Write a human-readable `template-analysis.md` summarizing findings and suggestions.
	- Optionally produce `template-analysis.json` with structured fields the other agents can consume.

Quality Checklist
- Include at least: framework summary, list of components (file → component name), list of data-* hooks, critical JS libs, scss token locations, asset paths, build commands, and explicit edit-safety rules.

Example section in `template-analysis.md`
```
Hero
- Files: antra/index.html (lines 10–72)
- Selectors: .hero-area, .hero-content
- Uses data-background and split-text spans
- Safe edits: headings and paragraph text only
```

Note: follow the repository's immutable rules — never change JS-critical attributes, do not edit compiled CSS, and preserve Swiper/GSAP DOM structure.
