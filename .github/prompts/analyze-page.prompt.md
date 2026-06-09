---
description: "Analyze a specific page in the Antra template and produce a complete section inventory with modification risk ratings"
tools: [read, search]
argument-hint: "Page filename to analyze (e.g. about.html, service.html, index.html)"
---

Analyze the Antra HTML template page specified by the user.

## Task

1. Read the full HTML file from `antra/[filename].html`
2. Read `template-analysis.md` for cross-reference context
3. Identify every section on the page
4. For each section, produce the inventory entry below

## Output Format

For each section found on the page:

```
## Section: [section class / name]
- Lines: [start]–[end]
- Bootstrap columns: [e.g. col-lg-6 / col-md-4]
- JS dependencies: [e.g. Swiper, GSAP ScrollTrigger, Odometer]
- data-* attributes: [list all with values]
- Editable text blocks: [count] — [list element types]
- Editable images: [count src / data-background]
- Modification risk: [LOW / MEDIUM / HIGH] — [one-sentence reason]
- Safe to edit: [specific elements]
```

After all sections, provide:

## Page Summary
- Total sections: [N]
- JS plugins active: [list]
- Unique features (vs other pages): [list]
- Highest-risk section: [name and reason]
- Recommended edit order: [list sections in safest-first order]
