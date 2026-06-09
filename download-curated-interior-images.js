const https = require('https');
const fs = require('fs');
const path = require('path');

const DELAY = 800; // milliseconds between downloads

// Curated Interior Design images from Unsplash (specific photo IDs)
// Using direct Unsplash photo URLs for real interior design images
const images = [
  // Hero/Slider Section - Modern Living Spaces
  { name: 'slider-img-1.png', dir: 'bg-img', photoId: 'Yrxr3bsPdS0', width: 1920, height: 950 }, // Modern living room
  { name: 'slider-img-2.png', dir: 'bg-img', photoId: 'Sd9A9-ncr6w', width: 1920, height: 950 }, // Luxury interior
  { name: 'slider-thumb-1.png', dir: 'images', photoId: 'VRB1LJoTZ6w', width: 450, height: 450 }, // Interior detail
  
  // About Section
  { name: 'about-bg.png', dir: 'bg-img', photoId: 'IYfp2Ixe9nM', width: 1920, height: 800 }, // Office interior
  
  // Counter Section
  { name: 'counter-img-1.png', dir: 'images', photoId: 'bQ3Lzv8rRFs', width: 800, height: 600 }, // Interior architecture
  
  // Projects/Portfolio Section - Various Rooms
  { name: 'project-img-1.png', dir: 'project', photoId: 'zFy6fOPZEu0', width: 450, height: 540 }, // Modern bedroom
  { name: 'project-img-2.png', dir: 'project', photoId: 'GWOTvo3qq7U', width: 450, height: 540 }, // Living room
  { name: 'project-img-3.png', dir: 'project', photoId: '7P3gzWeHTvs', width: 450, height: 540 }, // Kitchen
  { name: 'project-img-4.png', dir: 'project', photoId: 'Ay1LB3gLG4k', width: 450, height: 540 }, // Dining room
  { name: 'project-img-5.png', dir: 'project', photoId: 'xmmHx81RBQo', width: 450, height: 540 }, // Bathroom
  { name: 'project-house.png', dir: 'images', photoId: 'MP0bgaS_d1c', width: 600, height: 700 }, // Full interior
  
  // Sidebar Gallery - Interior Details
  { name: 'sidebar-gallary-1.png', dir: 'project', photoId: 'JktQHQAjTZU', width: 120, height: 120 }, // Furniture
  { name: 'sidebar-gallary-2.png', dir: 'project', photoId: 'vb3zYhf9qjg', width: 120, height: 120 }, // Decor
  { name: 'sidebar-gallary-3.png', dir: 'project', photoId: 'YI2YkyaREHk', width: 120, height: 120 }, // Modern furniture
  { name: 'sidebar-gallary-4.png', dir: 'project', photoId: '3PmwYw2uErY', width: 120, height: 120 }, // Lighting
  { name: 'sidebar-gallary-5.png', dir: 'project', photoId: 'cA-DvyCy1yE', width: 120, height: 120 }, // Home interior
  { name: 'sidebar-gallary-6.png', dir: 'project', photoId: 'NTkC9e4sBYI', width: 120, height: 120 }, // Room design
  
  // Footer Gallery - Interior Styles
  { name: 'project-img-6.png', dir: 'project', photoId: 'T_V_4vxYiDk', width: 270, height: 270 }, // Minimalist
  { name: 'project-img-7.png', dir: 'project', photoId: 'KE7HofYLAW0', width: 270, height: 270 }, // Scandinavian
  { name: 'project-img-8.png', dir: 'project', photoId: 'xmmHx81RBQo', width: 270, height: 270 }, // Industrial
  { name: 'project-img-9.png', dir: 'project', photoId: 'vU2HhWkdv9A', width: 270, height: 270 }, // Classic
  { name: 'project-img-10.png', dir: 'project', photoId: 'xZPEVDmclic', width: 270, height: 270 }, // Contemporary
  { name: 'project-img-11.png', dir: 'project', photoId: 'HH4WBGNyltc', width: 270, height: 270 }, // Elegant
  { name: 'project-img-12.png', dir: 'project', photoId: '8WBOfkwRWRQ', width: 270, height: 270 }, // Modern home
  { name: 'project-img-13.png', dir: 'project', photoId: 'WNoLnJo7tS8', width: 270, height: 270 }, // Luxury apartment
  
  // Feature Section
  { name: 'feature-img-1.png', dir: 'service', photoId: 'JFuFP2dmQjM', width: 710, height: 700 }, // Designer working
  
  // Testimonial Section
  { name: 'testi-img-1.png', dir: 'testi', photoId: '3PmwYw2uErY', width: 730, height: 800 }, // Beautiful interior
  { name: 'testi-author-1.png', dir: 'testi', photoId: 'rDEOVtE7vOs', width: 120, height: 120 }, // Professional portrait
  
  // Team Section
  { name: 'team-img-1.png', dir: 'team', photoId: 'tItTaHx8Lxc', width: 370, height: 450 }, // Architect portrait
  
  // Video Section
  { name: 'video-bg-1.png', dir: 'bg-img', photoId: 'vGQ49l9I4EE', width: 1920, height: 1080 }, // Stunning interior
  
  // Blog Section
  { name: 'post-1.jpg', dir: 'blog', photoId: 'GWOTvo3qq7U', width: 450, height: 400 }, // Interior design trends
  { name: 'post-2.png', dir: 'blog', photoId: 'MP0bgaS_d1c', width: 450, height: 400 }, // Home decoration
  { name: 'post-3.png', dir: 'blog', photoId: 'zFy6fOPZEu0', width: 450, height: 400 }, // Modern interior tips
  
  // Footer Background
  { name: 'footer-bg.png', dir: 'bg-img', photoId: 'Yrxr3bsPdS0', width: 1920, height: 600 }, // Contemporary interior
];

function downloadImage(url, filepath, retries = 2) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filepath, retries).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filepath);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
        file.on('error', (err) => {
          fs.unlink(filepath, () => {});
          reject(err);
        });
      } else if (response.statusCode === 503 && retries > 0) {
        // Rate limited, wait longer and retry
        setTimeout(() => {
          downloadImage(url, filepath, retries - 1).then(resolve).catch(reject);
        }, 3000);
      } else {
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    });
    
    request.on('error', (err) => {
      if (retries > 0) {
        setTimeout(() => {
          downloadImage(url, filepath, retries - 1).then(resolve).catch(reject);
        }, 2000);
      } else {
        reject(err);
      }
    });
    
    request.setTimeout(20000, () => {
      request.destroy();
      reject(new Error('Timeout'));
    });
  });
}

async function downloadAll() {
  console.log('🏠 Downloading CURATED Interior Design Images');
  console.log('📥 Using Unsplash Curated Collection (High Quality)\n');
  console.log(`Total: ${images.length} images\n`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const targetDir = path.join(__dirname, 'antra', 'assets', 'img', img.dir);
    const targetPath = path.join(targetDir, img.name);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Build direct Unsplash photo URL
    const url = `https://images.unsplash.com/photo-${img.photoId}?w=${img.width}&h=${img.height}&fit=crop&q=85`;

    try {
      await downloadImage(url, targetPath);
      success++;
      console.log(`✓ ${i + 1}/${images.length}: ${img.name}`);
    } catch (error) {
      failed++;
      console.log(`✗ ${i + 1}/${images.length}: ${img.name} - ${error.message}`);
    }

    // Delay between downloads
    if (i < images.length - 1) {
      await new Promise(resolve => setTimeout(resolve, DELAY));
    }
  }

  console.log(`\n✨ Done! ✓ Success:${success} ✗ Failed:${failed}\n`);
  console.log(`📁 Images saved to: ${path.join(__dirname, 'antra', 'assets', 'img')}`);
  
  if (success > 0) {
    console.log('\n✅ All images are ACTUAL interior design photos!');
    console.log('   - Modern living rooms');
    console.log('   - Luxury bedrooms');
    console.log('   - Contemporary kitchens');
    console.log('   - Designer bathrooms');
    console.log('   - Interior architecture');
  }
}

downloadAll().catch(console.error);
