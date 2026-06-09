#!/usr/bin/env node

/**
 * Site Rebranding Script
 * Replaces "Antra" with "VK Interior Studio" across all HTML files
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const OLD_BRAND = 'Antra';
const NEW_BRAND = 'VK Interior Studio';
const OLD_BRAND_LOWER = 'antra';
const NEW_BRAND_SLUG = 'vk-interior-studio';

console.log('🏷️  Site Rebranding Tool');
console.log(`📝 Replacing "${OLD_BRAND}" with "${NEW_BRAND}"\n`);

// Find all HTML files
const htmlFiles = glob.sync('antra/**/*.html');
let filesChanged = 0;
let totalReplacements = 0;

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  let fileReplacements = 0;
  
  // Replace all variations
  const replacements = [
    { from: new RegExp(OLD_BRAND, 'g'), to: NEW_BRAND },
    { from: new RegExp(OLD_BRAND.toLowerCase(), 'g'), to: NEW_BRAND },
    { from: new RegExp(OLD_BRAND.toUpperCase(), 'g'), to: NEW_BRAND.toUpperCase() },
    // Handle CSS classes and IDs (keep lowercase with hyphens)
    { from: /#antra-/g, to: '#vk-' },
    { from: /\.antra-/g, to: '.vk-' },
    { from: /data-antra/g, to: 'data-vk' },
  ];
  
  replacements.forEach(({ from, to }) => {
    const matches = content.match(from);
    if (matches) {
      content = content.replace(from, to);
      fileReplacements += matches.length;
    }
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesChanged++;
    totalReplacements += fileReplacements;
    console.log(`✓ ${path.basename(filePath)}: ${fileReplacements} replacements`);
  }
});

console.log(`\n✨ Rebranding complete!`);
console.log(`📁 Files changed: ${filesChanged}`);
console.log(`🔄 Total replacements: ${totalReplacements}`);
console.log(`\n🎉 Site now branded as "${NEW_BRAND}"!`);
