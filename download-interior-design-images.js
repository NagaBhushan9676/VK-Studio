const https = require('https');
const fs = require('fs');
const path = require('path');

const DELAY = 500; // milliseconds between downloads

// Interior Design specific images from Unsplash
const images = [
  // Hero/Slider Section - Modern Interior Spaces
  { name: 'slider-img-1.png', dir: 'bg-img', width: 1920, height: 950, query: 'modern-interior-living-room', seed: 'hero1' },
  { name: 'slider-img-2.png', dir: 'bg-img', width: 1920, height: 950, query: 'luxury-interior-design', seed: 'hero2' },
  { name: 'slider-thumb-1.png', dir: 'images', width: 450, height: 450, query: 'interior-design-detail', seed: 'thumb1' },
  
  // About Section - Interior Design Studio
  { name: 'about-bg.png', dir: 'bg-img', width: 1920, height: 800, query: 'interior-design-office', seed: 'about-bg' },
  
  // Counter Section - Interior Project
  { name: 'counter-img-1.png', dir: 'images', width: 800, height: 600, query: 'interior-architecture', seed: 'counter1' },
  
  // Projects/Portfolio Section - Various Interior Spaces
  { name: 'project-img-1.png', dir: 'project', width: 450, height: 540, query: 'modern-bedroom-interior', seed: 'proj1' },
  { name: 'project-img-2.png', dir: 'project', width: 450, height: 540, query: 'luxury-living-room', seed: 'proj2' },
  { name: 'project-img-3.png', dir: 'project', width: 450, height: 540, query: 'modern-kitchen-design', seed: 'proj3' },
  { name: 'project-img-4.png', dir: 'project', width: 450, height: 540, query: 'contemporary-dining-room', seed: 'proj4' },
  { name: 'project-img-5.png', dir: 'project', width: 450, height: 540, query: 'interior-bathroom-design', seed: 'proj5' },
  { name: 'project-house.png', dir: 'images', width: 600, height: 700, query: 'residential-interior-design', seed: 'house1' },
  
  // Sidebar Gallery - Interior Design Details
  { name: 'sidebar-gallary-1.png', dir: 'project', width: 120, height: 120, query: 'interior-furniture', seed: 'side1' },
  { name: 'sidebar-gallary-2.png', dir: 'project', width: 120, height: 120, query: 'interior-decor', seed: 'side2' },
  { name: 'sidebar-gallary-3.png', dir: 'project', width: 120, height: 120, query: 'modern-furniture', seed: 'side3' },
  { name: 'sidebar-gallary-4.png', dir: 'project', width: 120, height: 120, query: 'interior-lighting', seed: 'side4' },
  { name: 'sidebar-gallary-5.png', dir: 'project', width: 120, height: 120, query: 'home-interior', seed: 'side5' },
  { name: 'sidebar-gallary-6.png', dir: 'project', width: 120, height: 120, query: 'room-design', seed: 'side6' },
  
  // Footer Gallery - More Interior Projects
  { name: 'project-img-6.png', dir: 'project', width: 270, height: 270, query: 'minimalist-interior', seed: 'foot1' },
  { name: 'project-img-7.png', dir: 'project', width: 270, height: 270, query: 'scandinavian-interior', seed: 'foot2' },
  { name: 'project-img-8.png', dir: 'project', width: 270, height: 270, query: 'industrial-interior', seed: 'foot3' },
  { name: 'project-img-9.png', dir: 'project', width: 270, height: 270, query: 'classic-interior', seed: 'foot4' },
  { name: 'project-img-10.png', dir: 'project', width: 270, height: 270, query: 'contemporary-interior', seed: 'foot5' },
  { name: 'project-img-11.png', dir: 'project', width: 270, height: 270, query: 'elegant-interior', seed: 'foot6' },
  { name: 'project-img-12.png', dir: 'project', width: 270, height: 270, query: 'modern-home-interior', seed: 'foot7' },
  { name: 'project-img-13.png', dir: 'project', width: 270, height: 270, query: 'luxury-apartment', seed: 'foot8' },
  
  // Feature Section - Interior Design Service
  { name: 'feature-img-1.png', dir: 'service', width: 710, height: 700, query: 'interior-designer-working', seed: 'feat1' },
  
  // Testimonial Section - Interior Design Studio
  { name: 'testi-img-1.png', dir: 'testi', width: 730, height: 800, query: 'beautiful-interior-space', seed: 'testi1' },
  { name: 'testi-author-1.png', dir: 'testi', width: 120, height: 120, query: 'professional-portrait', seed: 'author1' },
  
  // Team Section - Interior Designer
  { name: 'team-img-1.png', dir: 'team', width: 370, height: 450, query: 'architect-portrait', seed: 'team1' },
  
  // Video Section - Stunning Interior
  { name: 'video-bg-1.png', dir: 'bg-img', width: 1920, height: 1080, query: 'luxury-interior-space', seed: 'video1' },
  
  // Blog Section - Interior Design Topics
  { name: 'post-1.jpg', dir: 'blog', width: 450, height: 400, query: 'interior-design-trends', seed: 'blog1' },
  { name: 'post-2.png', dir: 'blog', width: 450, height: 400, query: 'home-decoration-ideas', seed: 'blog2' },
  { name: 'post-3.png', dir: 'blog', width: 450, height: 400, query: 'modern-interior-tips', seed: 'blog3' },
  
  // Footer Background - Elegant Interior
  { name: 'footer-bg.png', dir: 'bg-img', width: 1920, height: 600, query: 'contemporary-interior-design', seed: 'footer1' },
];

function downloadImage(url, filepath, retries = 3) {
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
        // Rate limited, retry after delay
        setTimeout(() => {
          downloadImage(url, filepath, retries - 1).then(resolve).catch(reject);
        }, 2000);
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
    
    request.setTimeout(15000, () => {
      request.destroy();
      reject(new Error('Timeout'));
    });
  });
}

async function downloadAll() {
  console.log('🏠 Downloading INTERIOR DESIGN Images for Home One');
  console.log('📥 Using Unsplash (HIGH QUALITY, Interior Design Specific)\n');
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

    // Build Unsplash URL with interior design keywords
    const keywords = img.query.replace(/-/g, ',');
    const url = `https://source.unsplash.com/${img.width}x${img.height}/?${keywords}`;

    try {
      await downloadImage(url, targetPath);
      success++;
      console.log(`✓ ${i + 1}/${images.length}: ${img.dir}/${img.name} [${img.query}]`);
    } catch (error) {
      failed++;
      console.log(`✗ ${i + 1}/${images.length}: ${img.dir}/${img.name} - ${error.message}`);
    }

    // Longer delay to respect rate limits
    if (i < images.length - 1) {
      await new Promise(resolve => setTimeout(resolve, DELAY));
    }
  }

  console.log(`\n✨ Done! ✓ Success:${success} ✗ Failed:${failed}\n`);
  console.log(`📁 Images in: ${path.join(__dirname, 'antra', 'assets', 'img')}`);
  
  if (failed > 0) {
    console.log('\n⚠️  Some images failed. This is usually due to rate limiting.');
    console.log('You can run the script again to retry failed images.');
  }
}

downloadAll().catch(console.error);
