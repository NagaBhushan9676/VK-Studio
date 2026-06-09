const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE = 'https://picsum.photos';
const DELAY = 300; // milliseconds between downloads

// Define all images needed for Home One (index.html)
const images = [
  // Hero/Slider Section
  { name: 'slider-img-1.png', dir: 'bg-img', width: 1920, height: 950, seed: 2001 },
  { name: 'slider-img-2.png', dir: 'bg-img', width: 1920, height: 950, seed: 2002 },
  { name: 'slider-thumb-1.png', dir: 'images', width: 450, height: 450, seed: 2003 },
  
  // About Section
  { name: 'about-bg.png', dir: 'bg-img', width: 1920, height: 800, seed: 2004 },
  // about-img-1.png already exists in images/
  
  // Process Section (already downloaded)
  // process-img-1.png through process-img-4.png exist in images/
  
  // Counter Section
  { name: 'counter-img-1.png', dir: 'images', width: 800, height: 600, seed: 2005 },
  
  // Projects/Portfolio Section
  { name: 'project-img-1.png', dir: 'project', width: 450, height: 540, seed: 3001 },
  { name: 'project-img-2.png', dir: 'project', width: 450, height: 540, seed: 3002 },
  { name: 'project-img-3.png', dir: 'project', width: 450, height: 540, seed: 3003 },
  { name: 'project-img-4.png', dir: 'project', width: 450, height: 540, seed: 3004 },
  { name: 'project-img-5.png', dir: 'project', width: 450, height: 540, seed: 3005 },
  { name: 'project-house.png', dir: 'images', width: 600, height: 700, seed: 3006 },
  
  // Sidebar Gallery
  { name: 'sidebar-gallary-1.png', dir: 'project', width: 120, height: 120, seed: 3007 },
  { name: 'sidebar-gallary-2.png', dir: 'project', width: 120, height: 120, seed: 3008 },
  { name: 'sidebar-gallary-3.png', dir: 'project', width: 120, height: 120, seed: 3009 },
  { name: 'sidebar-gallary-4.png', dir: 'project', width: 120, height: 120, seed: 3010 },
  { name: 'sidebar-gallary-5.png', dir: 'project', width: 120, height: 120, seed: 3011 },
  { name: 'sidebar-gallary-6.png', dir: 'project', width: 120, height: 120, seed: 3012 },
  
  // Footer Gallery
  { name: 'project-img-6.png', dir: 'project', width: 270, height: 270, seed: 3013 },
  { name: 'project-img-7.png', dir: 'project', width: 270, height: 270, seed: 3014 },
  { name: 'project-img-8.png', dir: 'project', width: 270, height: 270, seed: 3015 },
  { name: 'project-img-9.png', dir: 'project', width: 270, height: 270, seed: 3016 },
  { name: 'project-img-10.png', dir: 'project', width: 270, height: 270, seed: 3017 },
  { name: 'project-img-11.png', dir: 'project', width: 270, height: 270, seed: 3018 },
  { name: 'project-img-12.png', dir: 'project', width: 270, height: 270, seed: 3019 },
  { name: 'project-img-13.png', dir: 'project', width: 270, height: 270, seed: 3020 },
  
  // Feature Section
  { name: 'feature-img-1.png', dir: 'service', width: 710, height: 700, seed: 4001 },
  
  // Testimonial Section
  { name: 'testi-img-1.png', dir: 'testi', width: 730, height: 800, seed: 5001 },
  { name: 'testi-author-1.png', dir: 'testi', width: 120, height: 120, seed: 5002 },
  
  // Team Section
  { name: 'team-img-1.png', dir: 'team', width: 370, height: 450, seed: 6001 },
  
  // Video Section
  { name: 'video-bg-1.png', dir: 'bg-img', width: 1920, height: 1080, seed: 7001 },
  
  // Blog Section
  { name: 'post-1.jpg', dir: 'blog', width: 450, height: 400, seed: 8001 },
  { name: 'post-2.png', dir: 'blog', width: 450, height: 400, seed: 8002 },
  { name: 'post-3.png', dir: 'blog', width: 450, height: 400, seed: 8003 },
  
  // Footer Background
  { name: 'footer-bg.png', dir: 'bg-img', width: 1920, height: 600, seed: 9001 },
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filepath);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function downloadAll() {
  console.log('🏠 Downloading Interior Design Images for Home One');
  console.log(`📥 Using Picsum (FREE, no copyright)\n`);
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

    // Build URL with seed for consistency
    const url = `${BASE}/seed/${img.seed}/${img.width}/${img.height}.jpg`;

    try {
      await downloadImage(url, targetPath);
      success++;
      console.log(`✓ ${i + 1}/${images.length}: ${img.dir}/${img.name}`);
    } catch (error) {
      failed++;
      console.log(`✗ ${i + 1}/${images.length}: ${img.dir}/${img.name} - ${error.message}`);
    }

    // Delay between downloads to be respectful
    if (i < images.length - 1) {
      await new Promise(resolve => setTimeout(resolve, DELAY));
    }
  }

  console.log(`\n✨ Done! ✓ Success:${success} ✗ Failed:${failed}\n`);
  console.log(`📁 Images in: ${path.join(__dirname, 'antra', 'assets', 'img')}`);
}

downloadAll().catch(console.error);
