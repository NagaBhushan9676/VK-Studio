# Image Optimization Guide — Antra Template

**When to load this skill:** Load this file whenever preparing, replacing, or auditing images for the Antra template. The `asset-manager` agent should load this skill before specifying image requirements or validating assets.

---

## Required Dimensions Per Section

These are the slot dimensions built into the template's layout. Providing images at these exact dimensions prevents layout shift and cropping artifacts.

| Section | Slot | Recommended Size | Aspect Ratio | Format |
|---|---|---|---|---|
| **Hero Slider** | Full-screen background | 1920 × 1080 px | 16:9 | WebP / JPG |
| **Hero Slider** (portrait variant) | Full-screen background | 1440 × 900 px | 16:10 | WebP / JPG |
| **Section Backgrounds** (`data-background`) | Section-wide | 1920 × 800 px | ~12:5 | WebP / JPG |
| **About Section** | Side image | 700 × 850 px | ~5:6 (portrait) | WebP / JPG |
| **Service Items** | Card thumbnail | 600 × 400 px | 3:2 | WebP / JPG |
| **Portfolio / Projects** | Card thumbnail | 800 × 600 px | 4:3 | WebP / JPG |
| **Portfolio Details** | Full-width header | 1920 × 900 px | ~16:7 | WebP / JPG |
| **Team Photos** | Portrait card | 480 × 600 px | 4:5 (portrait) | WebP / JPG |
| **Blog Featured** | Card thumbnail | 800 × 480 px | 5:3 | WebP / JPG |
| **Blog Details Header** | Full-width | 1920 × 700 px | ~11:4 | WebP / JPG |
| **Testimonial Avatars** | Circle crop | 120 × 120 px | 1:1 | WebP / JPG |
| **Sponsor Logos** | Logo strip | 160 × 60 px | ~8:3 | SVG / PNG |
| **Video Poster** | Section background | 1920 × 800 px | ~12:5 | WebP / JPG |
| **Shop Products** | Product card | 600 × 700 px | ~6:7 | WebP / JPG |
| **Logo (dark bg)** | Header/footer | Max 200 × 60 px | Variable | SVG / PNG |
| **Logo (light bg)** | Sidebar light | Max 200 × 60 px | Variable | SVG / PNG |
| **OG Share Images** | Social preview | 1200 × 630 px | ~19:10 | JPG / PNG |
| **Favicon** | Browser tab | 32 × 32 px (+ 192 × 192) | 1:1 | ICO / PNG |

---

## File Format Decision Tree

```
Is it a logo, icon, or illustration?
├─ YES → Use SVG (infinitely scalable, tiny file size)
│
Is it a photograph?
├─ YES → Convert to WebP
│         ├── If browser support for WebP is critical: use <picture> with JPG fallback
│         └── For this template (modern browsers only): WebP is fine as sole format
│
Is it a decorative shape or template element (assets/img/shapes/)?
└── DO NOT REPLACE → Template decoration, leave as-is
```

---

## File Size Targets

Exceeding these targets will cause slow page loads and poor PageSpeed scores.

| Image Type | Target Size | Maximum |
|---|---|---|
| Hero / section backgrounds | < 150 KB | 300 KB |
| Portfolio / project cards | < 80 KB | 150 KB |
| Team photos | < 50 KB | 100 KB |
| Blog thumbnails | < 60 KB | 120 KB |
| Logo (PNG) | < 20 KB | 50 KB |
| Logo (SVG) | < 10 KB | 30 KB |
| OG images | < 200 KB | 300 KB |

---

## Conversion Commands

### macOS — Using `sips` (built-in, no install needed)

```bash
# Resize a JPG to exact dimensions
sips --resampleWidth 1920 --resampleHeight 1080 input.jpg --out output.jpg

# Resize to max width (preserves aspect ratio)
sips --resampleWidth 1920 input.jpg --out output.jpg

# Batch resize all JPGs in a folder
for f in *.jpg; do sips --resampleWidth 800 "$f" --out "resized/$f"; done
```

### macOS — Using `cwebp` (install via Homebrew: `brew install webp`)

```bash
# Convert single image to WebP at quality 82
cwebp -q 82 input.jpg -o output.webp

# Batch convert all JPGs in current folder to WebP
for f in *.jpg; do cwebp -q 82 "$f" -o "${f%.jpg}.webp"; done

# Resize AND convert to WebP
cwebp -q 82 -resize 1920 1080 input.jpg -o hero-bg.webp
```

### Cross-platform — Using `ffmpeg` (install via Homebrew: `brew install ffmpeg`)

```bash
# Convert JPG to WebP
ffmpeg -i input.jpg -c:v libwebp -quality 82 output.webp

# Resize and convert
ffmpeg -i input.jpg -vf scale=1920:1080 -c:v libwebp -quality 82 output.webp

# Batch: convert all JPGs in folder
for f in *.jpg; do ffmpeg -i "$f" -c:v libwebp -quality 82 "${f%.jpg}.webp"; done
```

### Quality Guide

| Quality Setting | Use Case | Visual Quality |
|---|---|---|
| 90–95 | Portfolio hero, print-quality showcase | Near-lossless |
| 80–85 | Standard photos, section backgrounds | Excellent (recommended) |
| 70–79 | Thumbnails, team cards, blog | Good |
| < 70 | Avoid unless file size is critical | Noticeable degradation |

---

## File Naming Convention

Use lowercase, hyphen-separated names. No spaces, underscores, or special characters.

```
Pattern:   [category]-[descriptor]-[optional-number].[ext]

Examples:
  hero-bg-modern-villa.webp       (hero background)
  project-kensington-residence.webp   (portfolio item)
  team-james-harper.webp          (team photo)
  service-interior-design.webp    (service card)
  blog-sustainable-architecture.webp  (blog thumbnail)
  logo-dark.svg                   (logo on dark bg)
  logo-light.svg                  (logo on light bg)
  og-index.jpg                    (Open Graph — homepage)
  og-about.jpg                    (Open Graph — about page)
```

---

## OG Image Creation Guide

Each page needs a `1200 × 630 px` OG image for social sharing. Store in `antra/assets/img/og/`.

| File | Page | Recommended Composition |
|---|---|---|
| `og-index.jpg` | Homepage | Best project photo + firm name overlay |
| `og-about.jpg` | About | Team or studio photo + firm name |
| `og-service.jpg` | Services | Service montage or key project |
| `og-portfolio.jpg` | Portfolio | Grid of best 4 projects |
| `og-contact.jpg` | Contact | Studio exterior or team at work |
| `og-default.jpg` | All other pages | Brand logo centered on `#1C1C1D` background |

**Quick OG image using ImageMagick (if installed):**

```bash
# Create a simple branded OG image with text overlay
convert -size 1200x630 xc:#1C1C1D \
  -font Arial -pointsize 72 -fill '#CAA05C' \
  -gravity Center -annotate 0 'FIRM NAME' \
  og-default.jpg
```

---

## Checking Existing Image Dimensions

```bash
# Check a single image's dimensions
sips -g pixelWidth -g pixelHeight assets/img/team/team-1.jpg

# Check all images in a folder
for f in assets/img/project/*.jpg; do
  echo "$f: $(sips -g pixelWidth -g pixelHeight "$f" | tail -2)"
done
```

---

## Audit: Find Oversized Images

```bash
# Find all images over 300KB in the antra/ directory
find antra/assets/img -name "*.jpg" -o -name "*.png" -o -name "*.webp" | \
  xargs ls -la | awk '$5 > 307200 {print $5/1024 "KB\t" $9}' | sort -rn
```

---

## Image Accessibility Checklist

After replacing any image:
- [ ] `alt` attribute updated to describe the new image content
- [ ] Team photos: `alt` = person's full name and role (e.g. `alt="James Harper, Principal Architect"`)
- [ ] Decorative/background images: `alt=""` (empty, not missing)
- [ ] Project portfolio images: `alt` = project name + type (e.g. `alt="Kensington Residence — Residential Architecture"`)
- [ ] Logo: `alt` = firm name (e.g. `alt="Studio Arch"`)

---

## Placeholder Image Check

Before any deployment, verify no placeholder paths remain:

```bash
grep -rn "REPLACE-ME" antra/ --include="*.html"
```

Any `REPLACE-ME-*` paths mean the asset was noted but not yet provided by the client. List these for the client before launch.
