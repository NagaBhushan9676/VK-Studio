# Antra Static Template — Workspace Intelligence

You are working inside the **Antra Architecture & Interior Design HTML Template** customization workspace.

## Project Context

This workspace has two concerns:
1. **Source template** (`antra/`) — A production-quality HTML5 static template by ColorPic (ThemeForest). Do NOT delete, restructure, or refactor this directory. Only targeted text/style/asset edits are permitted.
2. **AI agent system** (`.github/`) — The Copilot agent ecosystem for customizing the template. This is what agents actively develop and execute.

## Source Template Stack

| Property | Value |
|---|---|
| Type | Static HTML5 — 35 pages, 9 homepage variants |
| CSS | Bootstrap 5 + custom SCSS (`assets/scss/` → compiled to `assets/css/main.css`) |
| JS | jQuery 3.7.1, GSAP (ScrollTrigger, ScrollSmoother), Swiper.js, Odometer.js, Venobox, MeanMenu, Isotope, Three.js + Panolens.js |
| Build | `npm run start` (sass + browser-sync). Run from `antra/` directory. |
| Fonts | Cal Sans (headings), Golos Text (body) via Google Fonts |
| Primary accent | `#CAA05C` (gold/bronze) — in `assets/scss/utilities/_colors.scss` |

## Critical File Paths

| Asset | Path |
|---|---|
| Main HTML entry | `antra/index.html` |
| SCSS entry | `antra/assets/scss/main.scss` |
| Color tokens | `antra/assets/scss/utilities/_colors.scss` |
| Typography tokens | `antra/assets/scss/utilities/_typography.scss` |
| CSS root vars | `antra/assets/scss/utilities/_root.scss` |
| Core JS | `antra/assets/js/main.js` |
| Contact form handler | `antra/mail.php` |
| Branding context | `static-site-ai-system/context/branding.md` |
| Business context | `static-site-ai-system/context/business-requirements.md` |
| **Customization inventory** | `static-site-ai-system/context/customization-inventory.md` |
| **Client intake form** | `static-site-ai-system/client-intake/website-content-checklist.html` |
| Template analysis | `template-analysis.md` |
| Change log | `static-site-ai-system/static-page-agent/outputs/changes-log.md` |

## Critical Immutable Rules

When editing any file in `antra/`, these rules are absolute:

1. **Never remove** `data-background`, `data-animation`, `data-delay`, `data-duration`, `data-direction`, `data-offset`, `data-count`, `data-img`, `data-gall`, `data-vbtype`, `data-text-animation`, `data-split`, `data-stagger` attributes — they are read by JS plugins at runtime
2. **Never alter** `.swiper-wrapper > .swiper-slide` nesting — Swiper requires exact DOM structure or carousels break silently
3. **Never rename or remove** CSS classes — they are referenced by GSAP, jQuery, and Swiper JS
4. **Never alter** the `#antra-smooth-wrapper > #antra-smooth-content` div wrapper — required by GSAP ScrollSmoother
5. **Never change** the JS `<script>` loading order at bottom of `<body>` — it is dependency-ordered
6. **Never add inline `background-image` CSS** — use `data-background` attribute; jQuery applies it at runtime
7. **Color changes** must go through `_colors.scss` SCSS map, never hardcoded in component files
8. **Never edit** `assets/css/main.css` directly — it is auto-generated and will be overwritten on next compile

## Agent System Overview

| Agent | File | Role | Invocable |
|---|---|---|---|
| Site Customizer | `site-customizer.agent.md` | Master orchestrator, plan-first workflow | User + Subagent |
| Template Analyst | `template-analyst.agent.md` | Read-only structural analysis | User + Subagent |
| Content Writer | `content-writer.agent.md` | Replace placeholder text with real content | User + Subagent |
| UI Designer | `ui-designer.agent.md` | Apply branding, fix spacing/typography via SCSS | User + Subagent |
| Asset Manager | `asset-manager.agent.md` | Replace logos, images, icons | User + Subagent |
| SEO Optimizer | `seo-optimizer.agent.md` | Meta tags, OG, sitemap, structured data | User + Subagent |
| Build Reviewer | `build-reviewer.agent.md` | Validate imports, accessibility, integrity | User + Subagent |
| Deploy Preparer | `deploy-preparer.agent.md` | Verify production build, CI/CD config | User + Subagent |
| Git Workflow | `git-workflow.agent.md` | Branch strategy, commits, client versioning | User |

## Skills Reference

Skills are domain-knowledge files loaded on-demand by agents via `read_file`. Load the relevant skill before performing the task it covers.

| Skill | File | Load When |
|---|---|---|
| Architecture Copywriting | `.github/skills/architecture-copywriting.skill.md` | Writing any visible text for an architecture/design firm. Load **before** `content-writer` generates copy. |
| Image Optimization | `.github/skills/image-optimization.skill.md` | Replacing images or auditing asset specs. Load **before** `asset-manager` specifies or validates images. |

## Changelog Convention

All agents MUST append their work to `static-site-ai-system/static-page-agent/outputs/changes-log.md` using this exact format:

```markdown
## [Agent Name] — YYYY-MM-DD HH:MM

### Files Modified
- `antra/path/to/file` — description of change

### Summary
Brief description of what was done and why.

---
```

## SCSS Token Quick Reference

```scss
// _colors.scss — change these to rebrand
$colors: (
  "theme":   ("primary": #CAA05C),      // → --tl-color-theme-primary
  "heading": ("primary": #191919),      // → --tl-color-heading-primary
  "text":    ("body": #4D4D52),         // → --tl-color-text-body
  "bg":      ("1": #1C1C1D),            // → --tl-color-bg-1
);

// _typography.scss — change these to switch fonts
$font-url: "https://fonts.googleapis.com/css2?family=Cal+Sans&family=Golos+Text...";
$font-family: (
  "ff": ("heading": "'Cal Sans', serif", "body": "'Golos Text', sans-serif")
);
```
