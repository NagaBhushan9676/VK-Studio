---
description: "Read-only SEO audit of the Antra template — check meta tags, title tags, OG tags, canonical URLs, and structured data across all pages"
tools: [read, search]
argument-hint: "Domain name (e.g. www.firmname.com) for canonical URL checks"
---

Perform a read-only SEO audit across the Antra template. Do NOT modify any files.

## Audit Scope

Check every HTML page in `antra/` for the following. Use `search` to efficiently scan across files.

## Check 1 — Title Tags

```
grep -rn "<title>" antra/ --include="*.html"
```

For each page, verify:
- `<title>` is present
- Not the default template placeholder (e.g. "Antra - Architecture & Interior Design")
- Length is 50–60 characters
- Includes the business/brand name

## Check 2 — Meta Descriptions

```
grep -rn 'name="description"' antra/ --include="*.html"
```

Verify:
- Present on every page
- Length 150–160 characters
- Unique per page (not duplicated)
- Not a generic placeholder

## Check 3 — Open Graph Tags

```
grep -rn 'property="og:' antra/ --include="*.html"
```

Verify that each page has: `og:title`, `og:description`, `og:url`, `og:image`

## Check 4 — Canonical URLs

```
grep -rn 'rel="canonical"' antra/ --include="*.html"
```

Verify: present on every page, uses correct domain, uses https://

## Check 5 — JSON-LD Structured Data

```
grep -rn 'application/ld+json' antra/ --include="*.html"
```

Verify: present on `index.html`, valid JSON structure (check for syntax errors), correct `@type` used

## Check 6 — robots.txt & sitemap.xml

Verify:
- `antra/robots.txt` exists
- `antra/sitemap.xml` exists and contains all active pages
- `sitemap.xml` references the correct domain

## Check 7 — Image Alt Text

```
grep -rn '<img' antra/ --include="*.html" | grep -v 'alt='
```

Count images missing `alt` attributes.

## Report Format

```markdown
# SEO Audit Report — [date]
## Domain: [domain or "not configured"]

### Score: [N/7 checks passing]

| Check | Status | Issues Found |
|-------|--------|-------------|
| Title tags | ✅/⚠️/❌ | [N pages missing or using placeholder] |
| Meta descriptions | ✅/⚠️/❌ | [details] |
| Open Graph | ✅/⚠️/❌ | [details] |
| Canonical URLs | ✅/⚠️/❌ | [details] |
| JSON-LD schema | ✅/⚠️/❌ | [details] |
| Sitemap / robots.txt | ✅/⚠️/❌ | [details] |
| Image alt text | ✅/⚠️/❌ | [N images missing alt] |

### Pages Needing SEO Work
[list each page with what's missing]

### Recommended Action
Run the `seo-optimizer` agent to apply fixes.
```

This prompt is read-only. It produces a report only, it does not modify files.
