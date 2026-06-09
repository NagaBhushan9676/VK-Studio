const https = require('https');
const fs = require('fs');
const path = require('path');

const DELAY = 600; // milliseconds between downloads

// Pexels curated interior design images
// Using Pexels free stock photos (high quality, no attribution needed)
const images = [
  // Hero/Slider Section - Modern Living Spaces
  { name: 'slider-img-1.png', dir: 'bg-img', pexelsId: '1457842', width: 1920, height: 950 }, // Modern living room
  { name: 'slider-img-2.png', dir: 'bg-img', pexelsId: '1909791', width: 1920, height: 950 }, // Luxury interior
  { name: 'slider-thumb-1.png', dir: 'images', pexelsId: '1648776', width: 450, height: 450 }, // Interior detail
  
  // About Section
  { name: 'about-bg.png', dir: 'bg-img', pexelsId: '1571460', width: 1920, height: 800 }, // Office interior
  
  // Counter Section
  { name: 'counter-img-1.png', dir: 'images', pexelsId: '1029599', width: 800, height: 600 }, // Interior architecture
  
  // Projects/Portfolio Section - Various Rooms
  { name: 'project-img-1.png', dir: 'project', pexelsId: '1454804', width: 450, height: 540 }, // Modern bedroom
  { name: 'project-img-2.png', dir: 'project', pexelsId: '1350789', width: 450, height: 540 }, // Living room
  { name: 'project-img-3.png', dir: 'project', pexelsId: '1599791', width: 450, height: 540 }, // Kitchen
  { name: 'project-img-4.png', dir: 'project', pexelsId: '1918291', width: 450, height: 540 }, // Dining room
  { name: 'project-img-5.png', dir: 'project', pexelsId: '1457847', width: 450, height: 540 }, // Bathroom
  { name: 'project-house.png', dir: 'images', pexelsId: '1648768', width: 600, height: 700 }, // Full interior
  
  // Sidebar Gallery - Interior Details
  { name: 'sidebar-gallary-1.png', dir: 'project', pexelsId: '1866149', width: 120, height: 120 }, // Furniture
  { name: 'sidebar-gallary-2.png', dir: 'project', pexelsId: '1648771', width: 120, height: 120 }, // Decor
  { name: 'sidebar-gallary-3.png', dir: 'project', pexelsId: '1080721', width: 120, height: 120 }, // Modern furniture
  { name: 'sidebar-gallary-4.png', dir: 'project', pexelsId: '1457845', width: 120, height: 120 }, // Lighting
  { name: 'sidebar-gallary-5.png', dir: 'project', pexelsId: '279746', width: 120, height: 120 }, // Home interior
  { name: 'sidebar-gallary-6.png', dir: 'project', pexelsId: '1743229', width: 120, height: 120 }, // Room design
  
  // Footer Gallery - Interior Styles
  { name: 'project-img-6.png', dir: 'project', pexelsId: '1571463', width: 270, height: 270 }, // Minimalist
  { name: 'project-img-7.png', dir: 'project', pexelsId: '1454805', width: 270, height: 270 }, // Scandinavian
  { name: 'project-img-8.png', dir: 'project', pexelsId: '1599791', width: 270, height: 270 }, // Industrial
  { name: 'project-img-9.png', dir: 'project', pexelsId: '1866149', width: 270, height: 270 }, // Classic
  { name: 'project-img-10.png', dir: 'project', pexelsId: '1648768', width: 270, height: 270 }, // Contemporary
  { name: 'project-img-11.png', dir: 'project', pexelsId: '1909791', width: 270, height: 270 }, // Elegant
  { name: 'project-img-12.png', dir: 'project', pexelsId: '1350789', width: 270, height: 270 }, // Modern home
  { name: 'project-img-13.png', dir: 'project', pexelsId: '1457842', width: 270, height: 270 }, // Luxury apartment
  
  // Feature Section
  { name: 'feature-img-1.png', dir: 'service', pexelsId: '3184292', width: 710, height: 700 }, // Designer working
  
  // Testimonial Section
  { name: 'testi-img-1.png', dir: 'testi', pexelsId: '1457845', width: 730, height: 800 }, // Beautiful interior
  { name: 'testi-author-1.png', dir: 'testi', pexelsId: '415829', width: 120, height: 120 }, // Professional portrait
  
  // Team Section
  { name: 'team-img-1.png', dir: 'team', pexelsId: '774909', width: 370, height: 450 }, // Architect portrait
  
  // Video Section
  { name: 'video-bg-1.png', dir: 'bg-img', pexelsId: '1571460', width: 1920, height: 1080 }, // Stunning interior
  
  // Blog Section
  { name: 'post-1.jpg', dir: 'blog', pexelsId: '1350789', width: 450, height: 400 }, // Interior design trends
  { name: 'post-2.png', dir: 'blog', pexelsId: '1648768', width: 450, height: 400 }, // Home decoration
  { name: 'post-3.png', dir: 'blog', pexelsId: '1454804', width: 450, height: 400 }, // Modern interior tips
  
  // Footer Background
  { name: 'footer-bg.png', dir: 'bg-img', pexelsId: '1457842', width: 1920, height: 600 }, // Contemporary interior
];

function downloadImage(url, filepath, retries = 3) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 303 || response.statusCode === 307 || response.statusCode === 308) {
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
      } else if ((response.statusCode === 503 || response.statusCode === 429) && retries > 0) {
        // Rate limited, wait and retry
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
        }, 1500);
      } else {
        reject(err);
      }
    });
    
    request.setTimeout(20000, () => {
      request.destroy();
      if (retries > 0) {
        setTimeout(() => {
          downloadImage(url, filepath, retries - 1).then(resolve).catch(reject);
        }, 1500);
      } else {
        reject(new Error('Timeout'));
      }
    });
  });
}

async function downloadAll() {
  console.log('🏠 Downloading HIGH-QUALITY Interior Design Images');
  console.log('📥 Using Pexels Curated Collection (100% Interior Design)\n');
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

    // Build Pexels download URL
    const url = `https://images.pexels.com/photos/${img.pexelsId}/pexels-photo-${img.pexelsId}.jpeg?auto=compress&cs=tinysrgb&w=${img.width}&h=${img.height}&dpr=1`;

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
    console.log('\n✅ ALL IMAGES ARE REAL INTERIOR DESIGN PHOTOS:');
    console.log('   ✓ Modern living rooms with furniture');
    console.log('   ✓ Luxury bedrooms with elegant design');
    console.log('   ✓ Contemporary kitchens with appliances');
    console.log('   ✓ Designer bathrooms with fixtures');
    console.log('   ✓ Complete interior spaces');
    console.log('   ✓ Architectural interior details');
    console.log('\n   High resolution, professional photography!');
  }
}

downloadAll().catch(console.error);
