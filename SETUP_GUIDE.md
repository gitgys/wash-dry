# Wash'n Dry Website - Setup & Deployment Guide

Welcome to the Wash'n Dry website! This guide will help you run the project locally and deploy it to Vercel.

## Prerequisites

Before you begin, make sure you have the following installed:
- **Node.js** (version 18.x or higher) - Download from [nodejs.org](https://nodejs.org)
- **pnpm** (recommended) or npm - Install pnpm with: `npm install -g pnpm`
- **Git** (optional, but recommended) - Download from [git-scm.com](https://git-scm.com)

## Part 1: Running the Project Locally

### Step 1: Extract and Navigate to the Project

If you downloaded the ZIP file:
1. Extract the ZIP file to your desired location
2. Open a terminal/command prompt
3. Navigate to the project folder:
   ```bash
   cd path/to/wash-n-dry
   ```

### Step 2: Install Dependencies

Run the following command to install all required packages:
```bash
pnpm install
```

Or if you prefer npm:
```bash
npm install
```

This will install all the necessary dependencies including React, Next.js, and React Three Fiber for the 3D components.

### Step 3: Run the Development Server

Start the development server:
```bash
pnpm dev
```

Or with npm:
```bash
npm run dev
```

You should see output like:
```
▲ Next.js 16.2.0
- Local:        http://localhost:3000
- Environments: .env.local

✓ Ready in 1.2s
```

### Step 4: View the Website

1. Open your web browser
2. Go to `http://localhost:3000`
3. You should now see the Wash'n Dry website with:
   - A 3D animated washing machine hero section
   - Services section with feature cards
   - Contact form and location information
   - Smooth scrolling navigation

### Step 5: Make Changes (Optional)

While the dev server is running, you can make changes to the code and they will automatically refresh in your browser:
- Edit files in the `/components` folder for UI changes
- Edit `/app/page.tsx` for the main layout
- Edit `/components/ThreeDScene.tsx` for 3D animation changes

## Part 2: Deploying to Vercel

### Option 1: Deploy Using Vercel CLI (Easiest)

#### Step 1: Create a Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose your preferred authentication method (GitHub, GitLab, Bitbucket, or email)
4. Complete the registration

#### Step 2: Install Vercel CLI

```bash
pnpm add -g vercel
```

#### Step 3: Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate with your Vercel account.

#### Step 4: Deploy

```bash
vercel
```

You'll be asked several questions:
- **Which scope should contain your project?** - Select your personal account
- **Found project.** - Press `y` (yes)
- **Want to modify the settings above?** - Press `n` (no)

The CLI will automatically build and deploy your project. Once complete, you'll get a URL like:
```
✓ Production: https://wash-n-dry-abc123.vercel.app
```

Your website is now live!

### Option 2: Deploy Using GitHub (Recommended for Future Updates)

#### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the "+" icon and select "New repository"
3. Name it "wash-n-dry-website"
4. Choose public or private
5. Click "Create repository"

#### Step 2: Push Your Project to GitHub

In your project folder, run:
```bash
git init
git add .
git commit -m "Initial commit: Wash'n Dry website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/wash-n-dry-website.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

#### Step 3: Connect GitHub to Vercel

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Click "Import Git Repository"
4. Find and select your "wash-n-dry-website" repository
5. Click "Import"
6. Accept the default settings
7. Click "Deploy"

Your project will automatically deploy. Vercel will also automatically redeploy whenever you push changes to GitHub.

## Post-Deployment Setup

### Update Contact Information

The contact information is currently hardcoded. To update it later:

1. Edit `/components/Contact.tsx` to change:
   - Phone number
   - Address
   - Business hours
   - Google Maps embed code

2. Edit `/components/Footer.tsx` for footer contact info

3. Commit and push changes if using GitHub:
   ```bash
   git add .
   git commit -m "Update contact information"
   git push
   ```

### Custom Domain (Optional)

To connect a custom domain:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Click "Add Domain"
4. Enter your domain name
5. Follow the DNS configuration instructions provided by Vercel

## Troubleshooting

### Issue: `pnpm: command not found`
**Solution:** Install pnpm globally:
```bash
npm install -g pnpm
```

### Issue: Port 3000 is already in use
**Solution:** Use a different port:
```bash
pnpm dev -- -p 3001
```

### Issue: 3D scene not loading
**Solution:** Make sure you're using a modern browser (Chrome, Firefox, Safari, or Edge). Three.js requires WebGL support.

### Issue: Deployment fails
**Solution:** 
1. Check that all files are saved
2. Make sure you have no TypeScript errors by running: `pnpm build`
3. Check the Vercel deployment logs for specific errors

## Development Tips

### Project Structure
```
wash-n-dry/
├── app/
│   ├── page.tsx          # Main page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Navigation bar
│   ├── Hero.tsx          # Hero section with 3D
│   ├── ThreeDScene.tsx   # 3D scene component
│   ├── Services.tsx      # Services section
│   ├── Contact.tsx       # Contact form & info
│   └── Footer.tsx        # Footer
├── package.json          # Dependencies
└── tsconfig.json         # TypeScript config
```

### Useful Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Run production build locally
pnpm start

# Run linting
pnpm lint
```

## Next Steps

1. **Customize Colors:** Edit the design tokens in `/app/globals.css` to match your brand
2. **Add More Sections:** Create new components in `/components` for additional pages
3. **Set Up Forms:** Connect the contact form to a backend service like Formspree or SendGrid
4. **Analytics:** The project includes Vercel Analytics - check your dashboard for visitor insights
5. **SEO:** Update meta tags in `/app/layout.tsx` for better search engine optimization

## Support

If you encounter any issues:

1. Check the **Troubleshooting** section above
2. Review the [Next.js documentation](https://nextjs.org/docs)
3. Check the [Vercel documentation](https://vercel.com/docs)
4. Visit the [React Three Fiber documentation](https://docs.pmnd.rs/react-three-fiber/) for 3D customization

## Questions or Feedback?

For the Wash'n Dry business, contact: +31 12 345 6789

Good luck with your website!
