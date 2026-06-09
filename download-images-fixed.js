#!/usr/bin/env node
const https = require('https');
const fs = require('fs');
const path = require('path');

// Using Picsum - reliable, no rate limits, free forever
const BASE = 'https://picsum.photos';

const images = [
  // Use different seed numbers for variety
  { name: 'hero-img-1.png', w: 820, h: 820, seed: 100 },
  { name: 'hero-img-2.png', w: 820, h: 820, seed: 101 },
  { name: 'hero-img-3.png', w: 820, h: 820, seed: 102 },
  { name: 'hero-img-4.png', w: 820, h: 820, seed: 103 },
  { name: 'about-img-1.png', w: 600, h: 700, seed: 200 },
  { name: 'about-img-2.png', w: 600, h: 400, seed: 201 },
  { name: 'about-img-3.png', w: 400, h: 500, seed: 202 },
  { name: 'about-img-4.png', w: 300, h: 400, seed: 203 },
  { name: 'about-img-5.png', w: 400, h: 500, seed: 204 },
  { name: 'about-img-6.png', w: 500, h: 600, seed: 205 },
  { name: 'about-img-7.png', w: 400, h: 500, seed: 206 },
  { name: 'about-img-8.png', w: 400, h: 500, seed: 207 },
  { name: 'about-img-9.png', w: 500, h: 600, seed: 208 },
  { name: 'about-img-10.png', w: 600, h: 700, seed: 209 },
  { name: 'process-img-1.png', w: 400, h: 400, seed: 300 },
  { name: 'process-img-2.png', w: 400, h: 400, seed: 301 },
  { name: 'process-img-3.png', w: 400, h: 400, seed: 302 },
  { name: 'process-img-4.png', w: 400, h: 400, seed: 303 },
  { name: 'process-img-5.png', w: 400, h: 400, seed: 304 },
  { name: 'process-img-6.png', w: 400, h: 400, seed: 305 },
  { name: 'exp-img-1.png', w: 500, h: 600, seed: 400 },
  { name: 'exp-img-2.png', w: 500, h: 600, seed: 401 },
  { name: 'exp-img-3.png', w: 500, h: 600, seed: 402 },
  { name: 'exp-img-4.png', w: 500, h: 600, seed: 403 },
  { name: 'faq-img-1.png', w: 600, h: 700, seed: 500 },
  { name: 'faq-img-2.png', w: 400, h: 500, seed: 501 },
  { name: 'faq-img-3.png', w: 300, h: 400, seed: 502 },
  { name: 'content-img-1.png', w: 600, h: 700, seed: 600 },
  { name: 'content-img-2.png', w: 600, h: 700, seed: 601 },
  { name: 'skill-img-1.png', w: 500, h: 600, seed: 700 },
  { name: 'pricing-img-1.png', w: 400, h: 500, seed: 800 },
  { name: 'history-img-1.png', w: 600, h: 700, seed: 900 }
];

for(let i=1; i<=30; i++) {
  images.push({ name: 'gallary-img-'+i+'.png', w: 600, h: 700, seed: 1000+i });
}

const dir = path.join(__dirname, 'antra/assets/img/images');
if(!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive:true});

console.log('🏠 Downloading Professional Images');
console.log('📥 Using Picsum (FREE, no limits)\n');
console.log('Total: '+images.length+' images\n');

let ok=0, fail=0;

function dl(spec, i) {
  return new Promise(r => {
    const url = BASE+'/seed/'+spec.seed+'/'+spec.w+'/'+spec.h+'.jpg';
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
          }).on('error',()=>{fail++;console.log('✗ '+spec.name);fs.unlink(out,()=>{});r();});
        } else if(res.statusCode===200) {
          res.pipe(f);
          f.on('finish',()=>{f.close();ok++;console.log('✓ '+(i+1)+'/'+images.length+': '+spec.name);r();});
        } else {fail++;console.log('✗ '+spec.name+' HTTP:'+res.statusCode);r();}
      }).on('error',()=>{fail++;console.log('✗ '+spec.name);fs.unlink(out,()=>{});r();});
    }, i*300);
  });
}

(async()=>{
  for(let i=0;i<images.length;i++) await dl(images[i],i);
  console.log('\n✨ Done! ✓ Success:'+ok+' ✗ Failed:'+fail);
  console.log('\n📁 Images in: '+dir);
})();
