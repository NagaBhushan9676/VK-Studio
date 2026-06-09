Rewrite Content Skill

Purpose
- Replace placeholder and dummy content in the Antra template with client-provided, SEO-friendly copy while preserving animation wrappers, data attributes, and JS behavior.

Inputs
- `static-site-ai-system/context/client-info.json` and `static-site-ai-system/context/*` branding files
- Target page(s) under `antra/*.html`

Outputs
- Updated HTML pages under `antra/` (text-only edits)
- `static-site-ai-system/static-page-agent/outputs/content-map-[client].md` mapping source selectors to new content
- Changelog entry appended to `static-site-ai-system/static-page-agent/outputs/changes-log.md`

Workflow
1. Content plan (required)
	- For each target page, produce a section-by-section content plan listing selector, current text, and proposed replacement text. Present plan to user for approval.

2. Safe-edit rules (strict)
	- Replace visible text only (headings, paragraphs, button text, meta description, alt text)
	- Preserve inline wrappers: `<span>`, `<strong>`, `<em>`, `<br>`, and split-text spans — do not remove them.
	- Do not touch `data-*` attributes, `src` or `href` values, or script content.

3. Applying edits
	- Use a programmatic approach (DOM parser) or careful regex that targets only text nodes.
	- For multi-language or accented text, preserve encoding (UTF-8) and any special HTML entities.

4. Post-edit checks
	- Run placeholder grep:
	  `grep -RIn "REPLACE-ME\|lorem ipsum\|placeholder@" antra/ --include="*.html"`
	- Open with `npm run start` and visually inspect pages.

Accessibility & SEO
- Ensure headings follow a logical order (`h1` present once per page).
- Provide meaningful `alt` attributes for images when client supplies them.
- Update `<title>` and `<meta name="description">` entries per page.

Examples
- Content plan snippet:
```
SECTION: Hero (.hero-area)
  H1: "VK Interior Studio — Thoughtful Interiors"
  Subheading: "Residential and commercial interior design in [City]"
  CTA: "Request a Consultation"
```

Notes
- If a proposed change requires altering markup structure (e.g., adding a new DOM node or container), escalate to `site-customizer` for review.
