Optimize logos — instructions

What this does
- Converts the client-provided raster logo(s) in `static-site-ai-system/asset-agent/client-assets/logos/` into two PNG sizes:
  - `vk-interior-studio-logo.png` (approx 800px width)
  - `vk-interior-studio-logo@2x.png` (approx 1600px width)
- Outputs are written to `static-site-ai-system/static-page-agent/outputs/generated-assets/` and copied to `antra/assets/img/` so you can preview them in the template.

Prerequisites
- macOS (this script uses the built-in `sips` utility).
- If you have an SVG logo, prefer converting it to PNG/SVG using vector tools; `sips` may not accept SVG.

How to run
1. Make the script executable:

```bash
cd static-site-ai-system/asset-agent/scripts
chmod +x optimize-logos.sh
```

2. Run the script:

```bash
./optimize-logos.sh
```

3. After running, check:
- `static-site-ai-system/static-page-agent/outputs/generated-assets/` for generated files
- `antra/assets/img/` for copied preview files used by the template

Optional: generate WebP (recommended)
- Install `webp` tools: `brew install webp`
- Convert generated PNGs to WebP:

```bash
cwebp -q 80 static-site-ai-system/static-page-agent/outputs/generated-assets/vk-interior-studio-logo.png -o static-site-ai-system/static-page-agent/outputs/generated-assets/vk-interior-studio-logo.webp
```

Notes
- Originals remain untouched in `client-assets/logos/`.
- If you want me to run the optimization here, I can, but I will need permission to execute shell commands and the environment to have `sips` available (this workspace is macOS, so `sips` is present).
