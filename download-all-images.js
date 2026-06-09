#!/usr/bin/env node

/**
 * Complete Interior Design Image Replacement
 * Downloads ALL images for the template from Unsplash (free, no copyright)
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const UNSPLASH_BASE = 'https://source.unsplash.com';

// All image directories to populate
const imageDirs = {
  images: 'antra/assets/img/images',
  blog: 'antra/assets/img/blog',
  project: 'antra/assets/img/project',
  team: 'antra/assets/img/team',
  service: 'antra/assets/img/service',
  bgImg: 'antra/assets/img/bg-img',
  testi: 'antra/assets/img/testi',
  sponsor: 'antra/assets/img/sponsor',
  shop: 'antra/assets/img/shop'
};

// Ensure all directories exist
Object.values(imageDirs).forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Complete image catalog - ALL INTERIOR DESIGN
const allImages = [
  // Main images folder (already defined)
  ...require('./download-images.js').allImages || [],
  
  // Blog images - Interior design articles
  { name: 'blog-img-1.jpg', dir: 'blog', width: 800, height: 600, query: 'modern-living-room-design' },
  { name: 'blog-img-2.jpg', dir: 'blog', width: 800, height: 600, query: 'kitchen-interior-trends' },
  { name: 'blog-img-3.jpg', dir: 'blog', width: 800, height: 600, query: 'bedroom-interior-ideas' },
  { name: 'blog-img-4.jpg', dir: 'blog', width: 800, height: 600, query: 'bathroom-design-luxury' },
  { name: 'blog-img-5.jpg', dir: 'blog', width: 800, height: 600, query: 'home-office-interior' },
  { name: 'blog-img-6.jpg', dir: 'blog', width: 800, height: 600, query: 'dining-room-design' },
  { name: 'blog-img-7.jpg', dir: 'blog', width: 800, height: 600, query: 'minimalist-interior' },
  { name: 'blog-img-8.jpg', dir: 'blog', width: 800, height: 600, query: 'contemporary-furniture' },
  
  // Project/Portfolio images - Completed interior projects
  { name: 'project-img-1.jpg', dir: 'project', width: 800, height: 600, query: 'luxury-apartment-interior' },
  { name: 'project-img-2.jpg', dir: 'project', width: 800, height: 600, query: 'modern-house-interior' },
  { name: 'project-img-3.jpg', dir: 'project', width: 800, height: 600, query: 'villa-interior-design' },
  { name: 'project-img-4.jpg', dir: 'project', width: 800, height: 600, query: 'penthouse-interior' },
  { name: 'project-img-5.jpg', dir: 'project', width: 800, height: 600, query: 'residential-interior' },
  { name: 'project-img-6.jpg', dir: 'project', width: 800, height: 600, query: 'condo-interior-design' },
  { name: 'project-img-7.jpg', dir: 'project', width: 800, height: 600, query: 'townhouse-interior' },
  { name: 'project-img-8.jpg', dir: 'project', width: 800, height: 600, query: 'loft-interior-design' },
  { name: 'project-img-9.jpg', dir: 'project', width: 800, height: 600, query: 'studio-apartment-interior' },
  { name: 'project-img-10.jpg', dir: 'project', width: 800, height: 600, query: 'duplex-interior' },
  
  // Service images - Interior design services
  { name: 'service-img-1.jpg', dir: 'service', width: 600, height: 400, query: 'interior-consultation' },
  { name: 'service-img-2.jpg', dir: 'service', width: 600, height: 400, query: 'space-planning-interior' },
  { name: 'service-img-3.jpg', dir: 'service', width: 600, height: 400, query: '3d-interior-visualization' },
  { name: 'service-img-4.jpg', dir: 'service', width: 600, height: 400, query: 'furniture-selection' },
  { name: 'service-img-5.jpg', dir: 'service', width: 600, height: 400, query: 'color-consultation-interior' },
  { name: 'service-img-6.jpg', dir: 'service', width: 600, height: 400, query: 'lighting-design-interior' },
  
  // Background images - Interior spaces
  { name: 'bg-1.jpg', dir: 'bgImg', width: 1920, height: 1080, query: 'modern-interior-background' },
  { name: 'bg-2.jpg', dir: 'bgImg', width: 1920, height: 1080, query: 'luxury-living-room-wide' },
  { name: 'bg-3.jpg', dir: 'bgImg', width: 1920, height: 1080, query: 'contemporary-interior-panorama' },
  { name: 'bg-4.jpg', dir: 'bgImg', width: 1920, height: 1080, query: 'elegant-bedroom-wide' },
  { name: 'bg-5.jpg', dir: 'bgImg', width: 1920, height: 1080, query: 'designer-kitchen-panorama' },
  
  // Team photos - Interior designers (professional portraits)
  { name: 'team-img-1.jpg', dir: 'team', width: 400, height: 500, query: 'interior-designer-portrait' },
  { name: 'team-img-2.jpg', dir: 'team', width: 400, height: 500, query: 'architect-professional-portrait' },
  { name: 'team-img-3.jpg', dir: 'team', width: 400, height: 500, query: 'designer-at-work' },
  { name: 'team-img-4.jpg', dir: 'team', width: 400, height: 500, query: 'creative-professional-portrait' },
  
  // Testimonial images - Clients with interiors
  { name: 'testi-img-1.jpg', dir: 'testi', width: 100, height: 100, query: 'professional-portrait-smile' },
  { name: 'testi-img-2.jpg', dir: 'testi', width: 100, height: 100, query: 'business-portrait-woman' },
  { name: 'testi-img-3.jpg', dir: 'testi', width: 100, height: 100, query: 'professional-headshot-man' },
];

let completed = 0;
let failed = 0;

function downloadImage(imageSpec, index) {
  return new Promise((resolve) => {
    const { name, dir, width, height, query } = imageSpec;
    const targetDir = dir ? imageDirs[dir] : imageDirs.images;
    const url = `${UNSPLASH_BASE}/${width}x${height}/?${query}`;
    const outputPath = path.join(targetDir, name);
    
    setTimeout(() => {
      const file = fs.createWriteStream(outputPath);
      
      https.get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          https.get(response.headers.location, (redirectResponse) => {
            if (redirectResponse.statusCode === 200) {
              redirectResponse.pipe(file);
              file.on('finish', () => {
                file.close();
                completed++;
                console.log(`✓ ${index + 1}/${allImages.length}: ${name} (${query})`);
                resolve(true);
              });
            } else {
              failed++;
              console.log(`✗ Failed ${name}`);
              resolve(false);
            }
          }).on('error', handleError);
        } else if (response.statusCode === 200) {
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            completed++;
            console.log(`✓ ${index + 1}/${allImages.length}: ${name}`);
            resolve(true);
          });
        } else {
          failed++;
          console.log(`✗ Failed ${name}: HTTP ${response.statusCode}`);
          resolve(false);
        }
      }).on('error', handleError);
      
      function handleError(err) {
        failed++;
        console.error(`✗ Failed ${name}:`, err.message);
        fs.unlink(outputPath, () => {});
        resolve(false);
      }
    }, index * 3000); // 3 second delay
  });
}

async function downloadAll() {
  console.log('🏠 Complete Interior Design Image Replacement');
  console.log('📥 Downloading from Unsplash (FREE, no copyright)\n');
  console.log(`Total images: ${allImages.length}`);
  console.log(`Estimated time: ${Math.ceil(allImages.length * 3 / 60)} minutes\n`);
  
  for (let i = 0; i < allImages.length; i++) {
    await downloadImage(allImages[i], i);
  }
  
  console.log(`\n✨ Complete!`);
  console.log(`✓ Success: ${completed}`);
  console.log(`✗ Failed: ${failed}`);
  console.log(`\n🎨 All images are interior design themed!`);
}

downloadAll().catch(console.error);
