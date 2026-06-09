Update Assets Skill

Purpose
- Ingest, normalize, optimize, and register client assets (logos, hero photos, team photos, project images) so they can be safely used by the Antra template and referenced by downstream agents.

Inputs
- Raw client assets placed in `static-site-ai-system/asset-agent/client-assets/` (originals)
- `static-site-ai-system/asset-agent/client-assets/manifest.json`

Outputs
- Optimized images written to `static-site-ai-system/static-page-agent/outputs/generated-assets/`
- Preview copies copied into `antra/assets/img/` (for local visual QA)
- Manifest updated with generated file paths

Filename & Folder Conventions
- Originals: `static-site-ai-system/asset-agent/client-assets/originals/`
- Logos: `antra/assets/img/logo/` and generated assets in `.../outputs/generated-assets/`
- Hero/bg images: `antra/assets/img/bg-img/`
- Team/project photos: `antra/assets/img/team/` and `antra/assets/img/projects/`

Image sizes & formats
- Logos: provide SVG if possible. Generate raster fallbacks: `logo.png` (800px wide) and `logo@2x.png` (1600px wide). Also produce `logo.webp` copies.
- Hero images: generate `1280px` and `2560px` variants and corresponding WebP.
- Thumbnails: 400px wide versions for lists.

Optimization pipeline
1. Use `static-site-ai-system/asset-agent/scripts/optimize-logos.sh` (macOS `sips` + optional `cwebp`) to generate sizes and WebP.
2. Update `manifest.json` to point to generated assets under `static-site-ai-system/static-page-agent/outputs/generated-assets/`.
3. Copy preview copies to `antra/assets/img/` for QA.

Updating HTML
- When replacing a logo in HTML, update both the `<img src>` and the `data-img` attribute if present.
- Update all header/footer occurrences (logo appears in multiple places).

Safety checks
- Preserve `data-background`, `data-img` and other attributes relied upon by JS — only change their values to point to new files.
- Keep consistent file names across manifest and HTML references.

Automation notes
- Prefer vector logos (SVG). If SVG is missing, keep high-resolution PNGs and add WebP.
- After asset updates, run `cd antra && npm run start` to preview changes.

Example commands
```
cd static-site-ai-system/asset-agent/scripts
chmod +x optimize-logos.sh
./optimize-logos.sh
```

Changelog
- Always append an agent changelog entry to `static-site-ai-system/static-page-agent/outputs/changes-log.md` describing files added and copied into `antra/assets/img/`.
