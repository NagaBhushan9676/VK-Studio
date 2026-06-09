#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { globSync } = require("glob");

const ROOT = path.resolve(__dirname, "../../..");
const HTML_GLOB = path.join(ROOT, "antra/**/*.html").replace(/\\/g, "/");
const APPLY = process.argv.includes("--apply");

function restorePath(assetPath) {
  if (!assetPath || !assetPath.includes("assets/img/") || !assetPath.includes("REPLACE-ME-")) {
    return assetPath;
  }

  const restored = assetPath.replace("REPLACE-ME-", "");
  const absolute = path.join(ROOT, "antra", restored.replace("assets/", "assets/"));

  if (fs.existsSync(absolute)) {
    return restored;
  }

  return assetPath;
}

function replaceInHtml(content, stats) {
  const attrRegex = /(src|href|data-background|data-img)\s*=\s*(["'])([^"']+)\2/g;

  return content.replace(attrRegex, (full, attr, quote, value) => {
    const restored = restorePath(value);
    if (restored === value) {
      return full;
    }

    stats.restored += 1;
    return `${attr}=${quote}${restored}${quote}`;
  });
}

function run() {
  const files = globSync(HTML_GLOB);
  let changedFiles = 0;
  let restoredCount = 0;

  for (const filePath of files) {
    const original = fs.readFileSync(filePath, "utf8");
    const stats = { restored: 0 };
    const next = replaceInHtml(original, stats);

    if (next !== original) {
      changedFiles += 1;
      restoredCount += stats.restored;
      if (APPLY) {
        fs.writeFileSync(filePath, next, "utf8");
      }
    }
  }

  if (APPLY) {
    console.log(`Updated files: ${changedFiles}`);
    console.log(`Restored paths: ${restoredCount}`);
  } else {
    console.log("Dry run only. No files changed.");
    console.log(`Files that would change: ${changedFiles}`);
    console.log(`Paths that would be restored: ${restoredCount}`);
    console.log("Run with --apply to write changes.");
  }
}

run();
