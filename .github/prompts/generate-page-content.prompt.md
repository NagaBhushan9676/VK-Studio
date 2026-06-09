---
description: "Generate and apply complete real copy to a full page, replacing all placeholder text with business-specific content"
tools: [read, edit, search]
argument-hint: "Page filename (e.g. about.html) + brief description of the business if not in context files"
---

Generate complete real-world copy for the specified Antra template page and apply it.

## Step 1 — Load Context

Read `static-site-ai-system/context/business-requirements.md` and `static-site-ai-system/context/branding.md`.

If critical fields (Business Name, Business Type, Services) are empty, ask the user to provide them before proceeding.

## Step 2 — Read the Page

Read the full target HTML file from `antra/[filename].html`. Identify every editable text block.

## Step 3 — Generate Content

Generate a complete content plan before editing. Show the user:

```
Page: [filename.html]
Business: [name]

Proposed content for each section:
──────────────────────────────────
SECTION: [section name]
  H2: "[proposed headline]"
  Subheading: "[proposed subheading]"
  Body: "[proposed paragraph]"
  CTA: "[proposed button text]"

SECTION: [next section]
  ...
──────────────────────────────────
Proceed with applying this content? (yes/no)
```

Wait for user confirmation before applying.

## Step 4 — Apply Content

For each section, apply the approved content. Follow the safe-edit rules:

- Replace visible text only
- Preserve `<span>`, `<br>`, `<strong>`, `<em>` wrapper tags inside headings
- Never alter `data-*` attributes, class names, or href/src values
- Keep `<img>` tags untouched (Asset Manager handles those)

## Step 5 — Summary

After all edits:
- Sections updated: [N]
- Text blocks replaced: ~[N]
- Note any sections left with placeholder text and why
