#!/usr/bin/env node
const https = require('https');
const fs = require('fs');
const path = require('path');

const UNSPLASH_BASE = 'https://source.unsplash.com';

const queries = {
  hero: 'modern-interior-design,luxury-living-room',
  living: 'contemporary-living-room,designer-furniture',
  kitchen: 'modern-kitchen-design,luxury-kitchen',
  bedroom: 'master-bedroom-interior,elegant-bedroom',
  bathroom: 'luxury-bathroom,spa-bathroom',
  office: 'home-office-design,modern-workspace',
  dining: 'dining-room-interior,elegant-dining',
  details: 'interior-details,designer-decor',
  lighting: 'interior-lighting,ambient-lighting',
  gallery: 'interior-architecture,residential-design'
};

const images = [
  { name: 'hero-img-1.png', w: 820, h: 820, q: queries.hero },
  { name: 'hero-img-2.png', w: 820, h: 820, q: queries.living },
  { name: 'hero-img-3.png', w: 820, h: 820, q: queries.kitchen },
  { name: 'hero-img-4.png', w: 820, h: 820, q: queries.bedroom },
  { name: 'about-img-1.png', w: 600, h: 700, q: queries.living },
  { name: 'about-img-2.png', w: 600, h: 400, q: queries.office },
  { name: 'about-img-3.png', w: 400, h: 500, q: queries.details },
  { name: 'about-img-4.png', w: 300, h: 400, q: queries.details },
  { name: 'about-img-5.png', w: 400, h: 500, q: queries.bedroom },
  { name: 'about-img-6.png', w: 500, h: 600, q: queries.dining },
  { name: 'about-img-7.png', w: 400, h: 500, q: queries.bathroom },
  { name: 'about-img-8.png', w: 400, h: 500, q: queries.kitchen },
  { name: 'about-img-9.png', w: 500, h: 600, q: queries.living },
  { name: 'about-img-10.png', w: 600, h: 700, q: queries.gallery },
  { name: 'process-img-1.png', w: 400, h: 400, q: 'interior-design-planning' },
  { name: 'process-img-2.png', w: 400, h: 400, q: '3d-interior-rendering' },
  { name: 'process-img-3.png', w: 400, h: 400, q: 'interior-materials' },
  { name: 'process-img-4.png', w: 400, h: 400, q: 'furniture-selection' },
  { name: 'process-img-5.png', w: 400, h: 400, q: 'interior-construction' },
  { name: 'process-img-6.png', w: 400, h: 400, q: 'finished-interior' },
  { name: 'exp-img-1.png', w: 500, h: 600, q: queries.bedroom },
  { name: 'exp-img-2.png', w: 500, h: 600, q: queries.kitchen },
  { name: 'exp-img-3.png', w: 500, h: 600, q: queries.bathroom },
  { name: 'exp-img-4.png', w: 500, h: 600, q: queries.office },
  { name: 'faq-img-1.png', w: 600, h: 700, q: queries.living },
  { name: 'faq-img-2.png', w: 400, h: 500, q: queries.details },
  { name: 'faq-img-3.png', w: 300, h: 400, q: queries.lighting },
  { name: 'content-img-1.png', w: 600, h: 700, q: queries.gallery },
  { name: 'content-img-2.png', w: 600, h: 700, q: queries.dining },
  { name: 'skill-img-1.png', w: 500, h: 600, q: queries.details },
  { name: 'pricing-img-1.png', w: 400, h: 500, q: queries.living },
  { name: 'history-img-1.png', w: 600, h: 700, q: queries.gallery }
];

const qlist = Object.values(queries);
for(let i=1; i<=30; i++) {
  images.push({ name: 'gallary-img-'+i+'.png', w: 600, h: 700, q: qlist[i%qlist.length] });
}

const dir = path.join(__dirname, 'antra/assets/img/images');
if(!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive:true});

console.log('🏠 Interior Design Image Downloader');
console.log('📥 Downloading from Unsplash (FREE)\n');
console.log('Total: '+images.length+' images\n');

let ok=0, fail=0;

function dl(spec, i) {
  return new Promise(r => {
    const url = UNSPLASH_BASE+'/'+spec.w+'x'+spec.h+'/?'+spec.q;
    const out = path.join(dir, spec.name);
    setTimeout(() => {
      const f = fs.createWriteStream(out);
      https.get(url, res => {
        if(res.statusCode===301||res.statusCode===302) {
          https.get(res.headers.location, res2 => {
            if(res2.statusCode===200) {
              res2.pipe(f);
              f.on('finish',()=>{f.close();ok++;console.log('✓ '+(i+1)+'/'+images.length+': '+spec.name);r();});
            } else {fail++;console.log('✗ '+spec.name);r();}
          }).on('error',e=>{fail++;console.log('✗ '+spec.name);fs.unlink(out,()=>{});r();});
        } else if(res.statusCode===200) {
          res.pipe(f);
          f.on('finish',()=>{f.close();ok++;console.log('✓ '+(i+1)+'/'+images.length+': '+spec.name);r();});
        } else {fail++;console.log('✗ '+spec.name);r();}
      }).on('error',e=>{fail++;console.log('✗ '+spec.name);fs.unlink(out,()=>{});r();});
    }, i*2500);
  });
}

(async()=>{
  for(let i=0;i<images.length;i++) await dl(images[i],i);
  console.log('\n✨ Done! Success:'+ok+' Failed:'+fail);
})();
