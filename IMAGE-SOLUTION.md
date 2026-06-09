# Quick Image Solution for Antra Template

## The Problem
The template preview images are **NOT included** in the download (confirmed in documentation). You need images NOW to deploy to your client.

## Solution: Free Professional Images

### Option 1: Automated Download (Fastest) ⚡

I've created a script that downloads free placeholder images from Lorem Picsum:

```bash
node download-images.js
```

This will:
- Download ~52 professional quality images
- Automatically name them correctly for the template
- Place them in `antra/assets/img/images/`
- Takes about 30 seconds
- **100% Free & Legal** for any use (public domain)
- Uses seeded images for consistency

### Option 2: Manual Download (More Control) 🎯

Visit these FREE stock photo sites and search for architecture/interior images:

1. **Unsplash** - https://unsplash.com/s/photos/interior-design
   - Best quality
   - Free for commercial use
   - No attribution required

2. **Pexels** - https://www.pexels.com/search/architecture/
   - Great variety
   - Free for commercial use

3. **Pixabay** - https://pixabay.com/images/search/interior-design/
   - Large selection
   - Free for commercial use

### Image Requirements

Here are the exact dimensions needed (check `download-images.js` for full list):

| Category | Dimensions | Quantity | Example Names |
|----------|-----------|----------|---------------|
| Hero Images | 820x820 | 4 | hero-img-1.png to hero-img-4.png |
| About Images | Various (300-600px) | 6 | about-img-1.png to about-img-6.png |
| Process Images | 400x400 | 4-6 | process-img-1.png to process-img-6.png |
| Gallery/Projects | 600x700 | 20+ | gallary-img-1.png to gallary-img-20.png |
| Experience | 500x600 | 4 | exp-img-1.png to exp-img-4.png |

### After Getting Images

1. **Save with exact filenames** (keeps HTML unchanged)
2. **Use JPG instead of PNG** (smaller file size, faster loading)
3. **Optimize before upload**: Use TinyPNG.com or ImageOptim

### Deploy Workflow

```bash
# 1. Download images
node download-images.js

# 2. Test locally
cd antra
npm install
npm start

# 3. Deploy to Netlify (fastest)
# Drag and drop the 'antra' folder to https://app.netlify.com/drop

# OR use Netlify CLI
npm install -g netlify-cli
cd antra
netlify deploy --prod
```

## Important Notes

✅ **Legal**: Unsplash images are free for commercial use  
✅ **Quality**: High-resolution professional photos  
✅ **No Attribution Required**: Unlike some free sites  
✅ **Template Compatible**: Script uses exact dimensions & filenames  

⚠️ **For Production**: Replace with your own photos when ready  
⚠️ **Brand Identity**: Consider consistency with your actual work  

## Quick Deploy Checklist

- [ ] Download images (automated or manual)
- [ ] Test locally with `npm start`
- [ ] Verify all images load correctly
- [ ] Optimize images if needed
- [ ] Deploy to Netlify/Vercel
- [ ] Share preview URL with client
- [ ] Replace with real photos later

## Need Help?

Run the automated script and deploy in under 5 minutes:

```bash
# From project root
node download-images.js
cd antra
npm install
npm start
# Check http://localhost:3000
# Then deploy via Netlify drop
```

---

**Status**: Ready to deploy with professional placeholder images while waiting for your custom photography! 🚀
