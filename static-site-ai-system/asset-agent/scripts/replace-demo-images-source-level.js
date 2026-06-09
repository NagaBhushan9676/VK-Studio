#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { globSync } = require("glob");

const ROOT = path.resolve(__dirname, "../../..");
const HTML_GLOB = path.join(ROOT, "antra/**/*.html").replace(/\\/g, "/");
const APPLY = process.argv.includes("--apply");

const demoNamePattern =
  /(project-img-\d+|project-\d+|service-img-\d+|service-hover-img-\d+|feature-img-\d+|team-img-\d+|post-\d+|post-inner-\d+|sidebar-post-\d+|slider-img-\d+|slider-thumb-\d+|sidebar-gallary-\d+|award-img-\d+|shop-\d+|shop-img-\d+|about-img-\d+|process-img-\d+|exp-img-\d+|hero-img-\d+|hero-title-thumb-\d+|faq-img-\d+|counter-img-\d+|blog-details-img(?:-\d+)?|comment-thumb-\d+|testi-(?:img|author)-\d+|sponsor-\d+|video-bg-\d+|coming-bg-\d+|request-bg|cta-bg-\d+|page-header-bg|banner-process-\d+|virtual-tours(?:-sample)?|footer-bg|about-bg(?:-\d+)?)(\.[a-zA-Z0-9]+)$/i;

function isSkippablePath(assetPath) {
  return (
    !assetPath ||
    !assetPath.includes("assets/img/") ||
    assetPath.includes("REPLACE-ME-") ||
    assetPath.includes("/logo/") ||
    assetPath.includes("/icon/") ||
    assetPath.includes("/shapes/") ||
    assetPath.includes("vk-interior-studio-logo")
  );
}

function getCategory(assetPath) {
  const match = assetPath.match(/assets\/img\/([^/]+)\//);
  return match ? match[1] : "misc";
}

function toPlaceholderPath(assetPath) {
  const fileName = path.posix.basename(assetPath);
  const category = getCategory(assetPath);
  return `assets/img/${category}/REPLACE-ME-${fileName}`;
}

function shouldReplace(assetPath) {
  if (isSkippablePath(assetPath)) return false;
  const fileName = path.posix.basename(assetPath);
  if (!demoNamePattern.test(fileName)) return false;

  const absolute = path.join(ROOT, "antra", assetPath);
  return !fs.existsSync(absolute);
}

function replaceInHtml(content, stats) {
  const attrRegex = /(src|href|data-background|data-img)\s*=\s*(["'])([^"']+)\2/g;

  return content.replace(attrRegex, (full, attr, quote, value) => {
    if (!shouldReplace(value)) {
      return full;
    }

    const replaced = toPlaceholderPath(value);
    if (replaced === value) {
      return full;
    }

    stats.replacements += 1;
    return `${attr}=${quote}${replaced}${quote}`;
  });
}

function run() {
  const files = globSync(HTML_GLOB);
  let changedFiles = 0;
  let replacements = 0;

  for (const filePath of files) {
    const original = fs.readFileSync(filePath, "utf8");
    const stats = { replacements: 0 };
    const next = replaceInHtml(original, stats);

    if (next !== original) {
      changedFiles += 1;
      replacements += stats.replacements;
      if (APPLY) {
        fs.writeFileSync(filePath, next, "utf8");
      }
    }
  }

  if (APPLY) {
    console.log(`Updated files: ${changedFiles}`);
    console.log(`Total replacements: ${replacements}`);
  } else {
    console.log("Dry run only. No files were changed.");
    console.log(`Files that would change: ${changedFiles}`);
    console.log(`Total replacements: ${replacements}`);
    console.log("Run with --apply to write changes.");
  }
}

run();
