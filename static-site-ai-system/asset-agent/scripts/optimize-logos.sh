#!/usr/bin/env bash
set -euo pipefail

# Optimize logos (macOS-friendly)
# - Reads client originals from: static-site-ai-system/asset-agent/client-assets/logos
# - Writes optimized images to: static-site-ai-system/static-page-agent/outputs/generated-assets
# - Copies outputs to: antra/assets/img
# Usage:
#   cd static-site-ai-system/asset-agent/scripts
#   chmod +x optimize-logos.sh
#   ./optimize-logos.sh

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/../../.." && pwd)"
CLIENT_LOGOS_DIR="$ROOT_DIR/static-site-ai-system/asset-agent/client-assets/logos"
OUT_DIR="$ROOT_DIR/static-site-ai-system/static-page-agent/outputs/generated-assets"
ANTRA_IMG_DIR="$ROOT_DIR/antra/assets/img"

mkdir -p "$OUT_DIR" "$ANTRA_IMG_DIR"

if ! command -v sips >/dev/null 2>&1; then
  echo "This script requires macOS 'sips' command (built-in)."
  exit 1
fi

# Find a source raster logo (prefer PNG/JPG). Do not rename originals.
src=""
for ext in png jpg jpeg; do
  candidate="$CLIENT_LOGOS_DIR/vk-interior-studio-logo.$ext"
  if [ -f "$candidate" ]; then
    src="$candidate"
    break
  fi
done

# fallback: pick the first file in the logos folder
if [ -z "$src" ]; then
  for f in "$CLIENT_LOGOS_DIR"/*; do
    [ -f "$f" ] || continue
    src="$f"
    break
  done
fi

if [ -z "$src" ]; then
  echo "No logo files found in $CLIENT_LOGOS_DIR"
  exit 1
fi

echo "Using source logo: $src"
base="vk-interior-studio-logo"
out1="$OUT_DIR/${base}.png"
out2="$OUT_DIR/${base}@2x.png"

# Create 1x and 2x PNG exports (800px and 1600px widths)
sips -Z 800 "$src" --out "$out1" >/dev/null
sips -Z 1600 "$src" --out "$out2" >/dev/null

# Copy to Antra assets folder for immediate preview
cp "$out1" "$ANTRA_IMG_DIR/${base}.png"
cp "$out2" "$ANTRA_IMG_DIR/${base}@2x.png"

echo "Generated:"
echo "  $out1"
echo "  $out2"
echo "Copied to: $ANTRA_IMG_DIR"

echo "Done. For best results request an SVG from the client and re-run conversion tools that support vector input (e.g. rsvg-convert or inkscape)."
