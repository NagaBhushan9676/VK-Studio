---
description: "Apply brand colors and typography to the Antra template via SCSS tokens, then recompile"
tools: [read, edit, execute]
argument-hint: "Primary color hex (e.g. #2563EB), optional: secondary color, heading font name, body font name"
---

Apply the user's brand identity to the Antra template through its SCSS token system.

## Step 1 — Read Current State

Read:
- `antra/assets/scss/utilities/_colors.scss`
- `antra/assets/scss/utilities/_typography.scss`

## Step 2 — Plan Changes

Build this change table from user input and `static-site-ai-system/context/branding.md`:

| Token | Current | New | File |
|-------|---------|-----|------|
| `theme.primary` | `#CAA05C` | `#USER_COLOR` | `_colors.scss` |
| Heading font | Cal Sans | `USER_FONT` (or keep) | `_typography.scss` |
| Body font | Golos Text | `USER_FONT` (or keep) | `_typography.scss` |

If no secondary color or font is specified, keep the existing values.

## Step 3 — Accessibility Check

Before editing, verify the new primary color has sufficient contrast:
- Against white `#FFFFFF`: aim for ≥ 4.5:1
- Against the dark background `#1C1C1D`: aim for ≥ 4.5:1

If contrast is poor, warn the user before proceeding.

## Step 4 — Edit SCSS Tokens

**In `_colors.scss`:** Only change the hex values inside the `$colors` map. Do not alter map keys or the `@each` loop.

**In `_typography.scss`:** If changing fonts, update only `$font-url` and the `$font-family` map values.

## Step 5 — Recompile

```bash
cd /Users/NagaBhushan/Desktop/themeforest-ADFxJ1Pu-antra-architecture-interior-design-html-template/antra && npm run sass
```

Verify exit code 0. If compilation fails, read the error, fix the syntax, and retry.

## Step 6 — Confirm

Report:
- Colors changed: [list]
- Fonts changed: [list or "none"]
- SCSS compilation: ✅ Success / ❌ Error
- `main.css` updated: ✅ Yes / ❌ No
