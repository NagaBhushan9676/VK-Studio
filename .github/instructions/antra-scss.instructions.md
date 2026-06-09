---
applyTo: "antra/assets/scss/**/*.scss"
---

# Antra SCSS Architecture — Editing Rules

These rules apply automatically whenever you edit any `.scss` file in `antra/assets/scss/`. Follow them to avoid breaking the compiled CSS and the token system.

## File Responsibility Map

| File | What It Controls | Safe to Edit |
|------|-----------------|-------------|
| `utilities/_colors.scss` | All color tokens (map → CSS vars) | ✅ Hex values in `$colors` map only |
| `utilities/_typography.scss` | Font URL, family map → CSS vars | ✅ `$font-url` and map values only |
| `utilities/_root.scss` | Auto-generates `:root` CSS vars from the maps | ❌ DO NOT EDIT — auto-generated logic |
| `utilities/_breakpoints.scss` | Responsive breakpoint variables | ✅ Values only |
| `utilities/_mixins.scss` | Reusable SCSS mixins | ✅ Only if adding a new mixin |
| `components/_theme.scss` | Global theme-level styles | ⚠️ Only with full understanding |
| `components/_buttons.scss` | Button component styles | ✅ Values via CSS vars only |
| `layout/_*.scss` | Per-page/section layout | ⚠️ Use CSS vars only, never hardcode |
| `main.scss` | Entry file (imports all partials) | ❌ DO NOT EDIT — only add imports at end |

## Token Chain — How Colors Flow

Understanding this chain prevents breaking the variable system:

```
_colors.scss                 _root.scss                   HTML/CSS
─────────────────           ─────────────────────         ──────────────────
$colors: (                  // @each loop auto-generates:
  "theme": (                :root {
    "primary": #CAA05C  ──►   --tl-color-theme-primary: #CAA05C;  ──► var(--tl-color-theme-primary)
  ),                        }
  "text": (
    "body": #4D4D52     ──►   --tl-color-text-body: #4D4D52;      ──► var(--tl-color-text-body)
  ),
  ...
)
```

**Key rule:** Always change the value in the `$colors` map. The CSS var is generated automatically. Never set the CSS var directly.

## CSS Variable Naming Convention

```
--tl-color-[group]-[key]
  ├── --tl-color-theme-primary     (main accent — gold/bronze)
  ├── --tl-color-heading-primary   (headings, dark text)
  ├── --tl-color-text-body         (paragraph text)
  ├── --tl-color-bg-1              (page background, darkest)
  ├── --tl-color-bg-2              (card backgrounds)
  └── --tl-color-bg-3              (hover states, secondary sections)

--tl-ff-[type]
  ├── --tl-ff-heading              (heading font family stack)
  └── --tl-ff-body                 (body font family stack)
```

## Correct vs Wrong Patterns

### Changing a Brand Color
```scss
// ✅ CORRECT — edit the map value
$colors: (
  "theme": ("primary": #2563EB),  // ← only change this hex
);

// ❌ WRONG — hardcoding in a layout file
.hero-section {
  background: #2563EB;  // hardcoded, will not update with rebrand
}

// ❌ WRONG — overriding the CSS var directly
:root {
  --tl-color-theme-primary: #2563EB;  // bypasses the map system
}
```

### Using Colors in Layout Files
```scss
// ✅ CORRECT — always reference CSS var
.service-item:hover {
  border-color: var(--tl-color-theme-primary);
  color: var(--tl-color-heading-primary);
}

// ❌ WRONG — hardcoded value
.service-item:hover {
  border-color: #CAA05C;  // breaks on rebrand
}
```

### Using Breakpoints
```scss
// ✅ CORRECT — use the mixin from _mixins.scss
@include breakpoint(lg) {
  .section-title { font-size: 3rem; }
}

// ❌ WRONG — hardcoded media query
@media (min-width: 992px) {
  .section-title { font-size: 3rem; }
}
```

## _colors.scss — Safe Edit Zone

Only modify the hex values inside the `$colors` map. Never alter the map structure, keys, or the `@each` loop below the map.

```scss
// ✅ SAFE ZONE — only change hex values
$colors: (
  "theme":   ("primary": #CAA05C),   // ← edit this hex
  "heading": ("primary": #191919),   // ← edit this hex
  "text":    ("body": #4D4D52),      // ← edit this hex
  "bg": (
    "1": #1C1C1D,                    // ← edit this hex
    "2": #242527,                    // ← edit this hex
    "3": #2B2C2F                     // ← edit this hex
  ),
);

// ❌ DO NOT TOUCH — the @each loop below
@each $group, $values in $colors {
  // ... auto-generation logic
}
```

## _typography.scss — Safe Edit Zone

```scss
// ✅ SAFE ZONE — edit these two things only
$font-url: "https://fonts.googleapis.com/css2?family=Cal+Sans&...";

$font-family: (
  "ff": (
    "heading": "'Cal Sans', serif",  // ← edit this string
    "body":    "'Golos Text', sans-serif"  // ← edit this string
  )
);

// ❌ DO NOT TOUCH — the @each loop and @import below
```

## After Editing — Always Recompile

After any SCSS change, immediately compile:

```bash
cd antra && npm run sass
```

For production (no source maps, compressed):

```bash
cd antra && npx sass assets/scss/main.scss assets/css/main.css --style=compressed --no-source-map
```

**NEVER** edit `assets/css/main.css` directly — it is overwritten on every compile.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It's Wrong | Correct Alternative |
|---|---|---|
| `!important` everywhere | Breaks override chain, hard to debug | Increase selector specificity instead |
| Nesting deeper than 3 levels | Creates overly specific selectors | Flatten the structure |
| `@import` in layout files | Creates circular dependencies | Only import in `main.scss` |
| Hardcoding `#hex` in layout files | Breaks on rebrand | Use `var(--tl-color-*)` |
| Duplicating variables | Gets out of sync | Only define in `_colors.scss` |
| Adding styles to `main.scss` | Entry file should only have imports | Add to the appropriate partial |
| Editing `_root.scss` | Auto-generated, will be overwritten | Edit the source map in `_colors.scss` |
