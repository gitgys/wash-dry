# Wash'n Dry Website - Step-by-Step Installation Guide

Follow these exact steps to get your website running locally and deployed to Vercel.

## Part 1: Prepare Your Computer (First Time Only)

### Step 1: Install Node.js

1. Go to [nodejs.org](https://nodejs.org)
2. Click the LTS (Long Term Support) version button
3. Download and run the installer
4. Follow the installation wizard (accept all defaults)
5. Open a terminal and verify installation:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers (e.g., v18.17.0)

### Step 2: Install pnpm (Recommended)

In your terminal, run:
```bash
npm install -g pnpm
```

Verify installation:
```bash
pnpm --version
```

You should see a version number.

---

## Part 2: Download and Setup Your Project

### Step 1: Get the Project Files

**Option A: If you have a ZIP file**
1. Locate the downloaded ZIP file
2. Right-click and select "Extract All..." (Windows) or double-click (Mac)
3. Choose where to save (e.g., Documents or Desktop)
4. Remember the folder location

**Option B: If using GitHub**
1. Open terminal
2. Navigate where you want the project:
   ```bash
   cd Documents
   ```
3. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/wash-n-dry-website.git
   cd wash-n-dry-website
   ```

### Step 2: Open Terminal in Project Folder

**Windows:**
1. In File Explorer, navigate to your project folder
2. Hold Shift and right-click in empty space
3. Select "Open PowerShell window here"

**Mac:**
1. Open Terminal (Applications → Utilities → Terminal)
2. Type: `cd ` (with space)
3. Drag your project folder into the terminal window
4. Press Enter

**Linux:**
1. Right-click in the project folder
2. Select "Open Here" or "Terminal Here"

### Step 3: Install Dependencies

In the terminal (make sure you're in the project folder), type:
```bash
pnpm install
```

Wait for it to complete. You should see:
```
✓ Packages in scope: [project name]
└─ Dependencies installed
```

This takes 2-5 minutes depending on your internet speed.

---

## Part 3: Run Locally

### Step 1: Start Development Server

In your terminal (still in project folder), type:
```bash
pnpm dev
```

You should see:
```
▲ Next.js 16.2.0
- Local:        http://localhost:3000
```

### Step 2: View Your Website

1. Open your web browser (Chrome, Firefox, Safari, or Edge)
2. Go to: `http://localhost:3000`
3. Your website should load!

### Step 3: Make Changes (Optional)

1. Open any file in the project with a code editor (VS Code recommended)
2. Make a change (e.g., edit text in `/components/Services.tsx`)
3. Save the file
4. The browser automatically refreshes!

To stop the server, press `Ctrl+C` in the terminal.

---

## Part 4: Deploy to Vercel

### Step 1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose login method (GitHub, email, etc.)
4. Complete registration
5. Verify your email if needed

### Step 2: Install Vercel CLI

In your terminal, type:
```bash
npm install -g vercel
```

### Step 3: Login to Vercel

In your terminal, type:
```bash
vercel login
```

Follow the prompts to authorize.

### Step 4: Deploy

Make sure you're in your project folder in the terminal, then type:
```bash
vercel
```

You'll be asked questions. Here are the answers:

```
? Set up and deploy "wash-n-dry"? (Y/n) 
→ Y (press Enter)

? Which scope should contain your project?
→ [Your name] or [Your account] (select it, press Enter)

? Link to existing project? (y/N)
→ N (press Enter, this is your first deploy)

? What's your project's name?
→ wash-n-dry (press Enter or keep default)

? In which directory is your code located?
→ ./ (press Enter)

? Want to modify the settings above?
→ N (press Enter)
```

**It will now deploy!** Wait for completion. You'll see:

```
✓ Production: https://wash-n-dry-abc123.vercel.app
✓ Deployed to production. You can now visit your live URL.
```

**Your website is now LIVE!** Share that URL.

### Step 5: Update Custom Domain (Optional)

To use your own domain:
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your project
3. Go to Settings → Domains
4. Add your domain and follow DNS instructions

---

## Part 5: Update Your Website

### Update Business Information

#### Change Phone Number
1. Open file: `/components/Contact.tsx`
2. Find: `+31402445798`
3. Replace with your phone number
4. Save file
5. Website updates automatically in dev server, or push to GitHub for production

#### Change Address
1. Open file: `/components/Contact.tsx`
2. Find: `Hoogstraat 115` and `5615 PB Eindhoven`
3. Replace with your address
4. Save file

#### Change Business Hours
1. Open file: `/components/Contact.tsx`
2. Find the business hours section:
   ```
   Monday - Friday: 7:00 AM - 7:00 PM
   Saturday: 8:00 AM - 6:00 PM
   ```
3. Update to your hours
4. Save file

#### Change Colors
1. Open file: `/app/globals.css`
2. Find the `:root` section with colors like `#3b82f6` (blue)
3. Replace with your brand colors
4. Save file

### Push Changes to Production

If using GitHub:
```bash
# In terminal, in your project folder
git add .
git commit -m "Updated contact information"
git push
```

Vercel will automatically redeploy your website with the changes!

---

## Part 6: Monitor Your Website

### Check Analytics

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your project
3. Go to Analytics tab
4. See visitors, page views, etc.

### Monitor Errors

1. Go to Monitoring tab
2. See any errors or issues
3. Check logs if something breaks

### Check Deployment History

1. Go to Deployments tab
2. See all deployed versions
3. Can rollback to previous version if needed

---

## Quick Commands Reference

### Local Development
```bash
# Start dev server
pnpm dev

# Build for production testing
pnpm build

# Start production build locally
pnpm start

# Run linting
pnpm lint
```

### Deployment
```bash
# Deploy to Vercel
vercel

# Deploy to production
vercel --prod

# See Vercel help
vercel help
```

### Useful
```bash
# Go to project folder
cd path/to/wash-n-dry

# Stop dev server
# Press Ctrl+C

# Delete dependencies and reinstall
rm -rf node_modules
pnpm install
```

---

## Common Scenarios

### Scenario 1: Want to test on your phone

1. Get your computer's IP address:
   ```bash
   # On Windows PowerShell
   ipconfig
   # Look for IPv4 Address (e.g., 192.168.1.100)
   
   # On Mac/Linux
   ifconfig
   # Look for inet (e.g., 192.168.1.100)
   ```

2. On your phone, connect to same WiFi as computer

3. Open browser on phone and go to:
   ```
   http://[YOUR_IP]:3000
   ```
   (e.g., `http://192.168.1.100:3000`)

### Scenario 2: Port 3000 is already used

Use a different port:
```bash
pnpm dev -- -p 3001
# Then visit http://localhost:3001
```

### Scenario 3: Need to stop the dev server

Press `Ctrl+C` in the terminal where `pnpm dev` is running.

### Scenario 4: Something is broken

Try in order:
```bash
# 1. Hard refresh browser
# Ctrl+Shift+R (Windows/Linux)
# Cmd+Shift+R (Mac)

# 2. Reinstall dependencies
pnpm install

# 3. Clear Next.js cache
rm -rf .next

# 4. Restart dev server
pnpm dev
```

---

## Next Steps After Launch

1. ✅ Website is live
2. Share the URL with customers
3. Update your Google Business profile with the link
4. Add website to your business cards
5. Set up contact form backend (optional, see TROUBLESHOOTING.md)
6. Monitor analytics regularly
7. Update content seasonally

---

## You're All Set!

Your Wash'n Dry website is now live! 

**What to do next:**
- Share your Vercel URL on social media
- Add to your business listings
- Print the URL on marketing materials
- Monitor analytics in Vercel dashboard
- Update business info as needed

**Need help?** See TROUBLESHOOTING.md for common issues and solutions.

---

**Questions?**
- Phone: +31 40 244 5798
- Check TROUBLESHOOTING.md
- Check README.md for more info

Good luck with your laundry business website! 🚀
