---
description: "Replace placeholder content in a specific section of the Antra template with real business content"
tools: [read, edit, search]
argument-hint: "Page filename + section name (e.g. 'index.html hero section' or 'about.html about section')"
---

Replace the placeholder content in the specified section with real business content.

## Step 1 — Read Context

Read `static-site-ai-system/context/business-requirements.md` to get:
- Business name, type, tagline
- Services list
- Contact details
- Team members and roles

Read `static-site-ai-system/context/branding.md` to get:
- Brand voice and tone

## Step 2 — Read Target

Read the full HTML file and locate the target section by its class name.

## Step 3 — Write Content

Replace placeholder text following these rules:

**SAFE to replace:**
- All `<h1>`–`<h6>` text (preserve `<span>`, `<br>` tags inside)
- All `<p>` text
- Visible `<span>` text (those without icon children)
- `<a>` link visible text (NOT the href)
- `alt` and `placeholder` attributes

**NEVER touch:**
- `data-*` attributes
- CSS class names
- `href`, `src`, `action` values
- Script content
- Decorative watermark spans (`.footer-text`, `.counter-text`, etc.)

## Step 4 — Apply Changes

Edit the file with targeted replacements. Make the minimum edits necessary.

## Step 5 — Confirm

After editing, confirm what was changed:
- Section edited: [name]
- Text blocks replaced: [N]
- Content summary: [brief description]
