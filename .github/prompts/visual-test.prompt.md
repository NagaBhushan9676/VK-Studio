---
description: "Visually test the Antra template in a browser — take screenshots at multiple breakpoints, check for layout issues, and validate visual output after SCSS recompilation or content changes"
tools: [read, execute]
argument-hint: "Page to test (e.g. 'index.html', 'all') and optional test type ('responsive', 'after-rebrand', 'full')"
---

Visually test the specified Antra template page(s) in a browser by taking screenshots at multiple viewport sizes and checking for layout issues.

## Step 1 — Start the Dev Server

```bash
cd /Users/NagaBhushan/Desktop/themeforest-ADFxJ1Pu-antra-architecture-interior-design-html-template/antra && npm run start &
```

Wait 3 seconds for browser-sync to start. The site will be available at `http://localhost:3000`.

## Step 2 — Load Browser Tools

Use the browser tool to navigate to the page(s) to test.

## Step 3 — Test These Viewports

For each page, capture screenshots at these three breakpoints:

| Viewport | Width × Height | Represents |
|---|---|---|
| Mobile | 390 × 844 | iPhone 14 |
| Tablet | 768 × 1024 | iPad |
| Desktop | 1440 × 900 | Standard laptop |

Navigate to each page at each viewport and take a screenshot.

## Step 4 — Visual Checklist

After capturing screenshots, check each for:

### Global (every viewport)
- [ ] Header/navbar renders correctly — logo visible, nav links present
- [ ] No horizontal overflow (no scrollbar on X-axis)
- [ ] Preloader not stuck (page content visible)
- [ ] Footer renders and is not cut off

### Desktop only
- [ ] Hero slider occupies full viewport height
- [ ] Section background images load (not blank grey sections)
- [ ] GSAP section animations visible on scroll (not broken)
- [ ] Carousel navigation arrows visible and positioned correctly
- [ ] Sidebar/offcanvas trigger visible in header

### Mobile only
- [ ] Hamburger menu icon visible (no desktop nav showing)
- [ ] Text not overflowing container widths
- [ ] Images not stretched beyond their containers
- [ ] CTA buttons full-width and tappable

### After Rebrand (if testing after UI Designer ran)
- [ ] New primary accent color appears on buttons and accents
- [ ] New font loads (not fallback serif/sans-serif)
- [ ] No unstyled content (FOUC)
- [ ] Dark sections still have correct background colors

## Step 5 — Report Issues

For each issue found, report:
- **Page:** `antra/[filename].html`
- **Viewport:** Mobile / Tablet / Desktop
- **Issue:** [description of what looks wrong]
- **Likely cause:** [e.g. missing `data-background`, overflow CSS issue, font not loaded]
- **Screenshot:** [attached]

## Step 6 — Stop Dev Server

```bash
pkill -f "browser-sync"
```

## Report Format

```markdown
# Visual Test Report — [date]
## Pages Tested: [list]
## Viewports: Mobile (390px), Tablet (768px), Desktop (1440px)

### ✅ Passing
- [page] desktop — all checks pass
- [page] mobile — all checks pass

### ⚠️ Issues Found

| Page | Viewport | Issue | Screenshot |
|------|----------|-------|------------|
| index.html | Mobile | Hero text overflows on 390px | [screenshot] |
| about.html | Desktop | Section background not loading | [screenshot] |

### Recommended Fixes
1. [description of fix for issue #1]
2. [description of fix for issue #2]
```

This prompt is visual-only. It does not modify any files.
