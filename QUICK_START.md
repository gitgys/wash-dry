# Wash'n Dry Website - Quick Start Guide

Get your website running in 5 minutes!

## Prerequisites Check
- Have Node.js installed? [Download](https://nodejs.org)
- Have pnpm or npm ready? Run: `node --version` and `npm --version`

## Quick Setup (5 minutes)

### 1. Install & Run (Copy-Paste These Commands)

```bash
# Navigate to your project folder
cd path/to/wash-n-dry

# Install dependencies (takes 2-3 minutes)
pnpm install

# Start the dev server
pnpm dev
```

### 2. View Your Website

Open your browser and go to: **http://localhost:3000**

That's it! Your website is now running locally.

## Quick Deployment to Vercel (3 steps)

### 1. Install Vercel CLI
```bash
pnpm add -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Deploy
```bash
vercel
```

**Done!** You'll get a live URL in seconds.

## Common Commands

```bash
# Start development
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm start

# Stop the dev server
# Press Ctrl+C in the terminal
```

## Useful Tips

- **Edit colors:** Change the design tokens in `/app/globals.css`
- **Update phone:** Search for "+31402445798" in `/components/Contact.tsx`
- **Update address:** Search for "Hoogstraat 115" in `/components/Contact.tsx`
- **3D scene:** Customize in `/components/ThreeDScene.tsx`

## Browser Support

Works best on:
- Chrome/Chromium
- Firefox
- Safari
- Edge

Requires modern browser with WebGL support for 3D animations.

## Need Help?

1. See **SETUP_GUIDE.md** for detailed instructions
2. Check troubleshooting section in SETUP_GUIDE.md
3. Make sure all dependencies installed: `pnpm install`

## Next Steps After Deployment

1. ✅ Website is live - share the URL!
2. 🔧 Customize your information (phone, address, hours)
3. 🎨 Adjust colors to match your brand
4. 📧 Set up email notifications for contact form
5. 📊 Monitor analytics in Vercel dashboard

---

**Happy to help your laundry business shine online!** 🚀
