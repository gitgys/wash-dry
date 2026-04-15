# Wash'n Dry Website - Troubleshooting & FAQ

## Common Issues & Solutions

### Installation Issues

#### Problem: `pnpm: command not found`
**Solution:**
```bash
# Install pnpm globally
npm install -g pnpm

# Verify installation
pnpm --version
```

#### Problem: `npm ERR! code ERESOLVE`
**Solution:** This is usually a dependency conflict. Try:
```bash
# Clear npm cache
npm cache clean --force

# Try installing again
pnpm install

# Or use npm with legacy peer deps flag
npm install --legacy-peer-deps
```

#### Problem: `Module not found` errors after installation
**Solution:**
1. Delete `node_modules` folder and lock file
2. Reinstall dependencies:
```bash
rm -rf node_modules
pnpm install
```

---

### Development Server Issues

#### Problem: Port 3000 already in use
**Solution:** Use a different port:
```bash
# Use port 3001
pnpm dev -- -p 3001

# Then visit: http://localhost:3001
```

Or kill the process using port 3000:
```bash
# On macOS/Linux:
lsof -i :3000
kill -9 <PID>

# On Windows (PowerShell):
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

#### Problem: `Cannot find module '@react-three/fiber'`
**Solution:** Reinstall dependencies:
```bash
pnpm install
# Wait for installation to complete
pnpm dev
```

#### Problem: 3D scene doesn't show, just white screen
**Solution:**
1. Check browser console for errors: `F12` → Console tab
2. Ensure browser supports WebGL:
   - Try a different browser (Chrome, Firefox, Safari, Edge)
   - Update your browser to latest version
3. Check that Three.js dependencies are installed:
```bash
npm list @react-three/fiber three
```

#### Problem: Slow development server
**Solution:**
1. Disable source maps in development:
   - Create `.env.local` file with: `NEXT_PUBLIC_DISABLE_SOURCE_MAPS=1`
2. Clear Next.js cache:
```bash
rm -rf .next
pnpm dev
```

---

### Deployment Issues

#### Problem: Deployment fails on Vercel
**Solution:**
1. Check build logs in Vercel dashboard for error messages
2. Run a local production build to test:
```bash
pnpm build
# If it fails, fix the error
pnpm dev
```
3. Common fixes:
   - Clear browser cache (Ctrl+Shift+Delete)
   - Ensure all files are saved
   - Check for TypeScript errors
   - Verify environment variables are set

#### Problem: `vercel: command not found`
**Solution:** Install Vercel CLI globally:
```bash
npm install -g vercel
vercel login
```

#### Problem: Deployment takes too long
**Solution:**
1. Large dependencies are being installed
2. First deployment is slower - subsequent deployments are faster
3. Check Vercel dashboard → Project → Settings → Build & Development Settings
   - Ensure build command is: `pnpm build`
   - Ensure install command is: `pnpm install --frozen-lockfile`

---

### Website Display Issues

#### Problem: 3D content not visible on mobile
**Solution:**
1. Check browser console for WebGL errors
2. Try rotating device (portrait to landscape)
3. Try a different mobile browser
4. Note: Some older Android devices may have limited WebGL support

#### Problem: Navigation menu not working on mobile
**Solution:**
1. Clear browser cache: Settings → Clear Cache
2. Hard refresh page: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
3. Check JavaScript is enabled in browser settings

#### Problem: Contact form not submitting
**Solution:**
Currently, the contact form is client-side only. To enable email notifications:

1. **Option A: Use Formspree (Easiest)**
   - Go to [formspree.io](https://formspree.io)
   - Create account and new form
   - Update form action in `/components/Contact.tsx`:
   ```jsx
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault()
     // Send to Formspree
     fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData)
     })
   }
   ```

2. **Option B: Use SendGrid**
   - Sign up at [sendgrid.com](https://sendgrid.com)
   - Create API key
   - Add to Vercel environment variables
   - Implement backend API route

3. **Option C: Use Google Forms**
   - Create Google Form
   - Update form action to point to Google Forms submission URL

#### Problem: Smooth scrolling not working
**Solution:**
1. Check if CSS is loaded: Open DevTools (F12) → Elements
2. Search for `scroll-smooth` in html tag
3. Some browsers may need `scroll-behavior: smooth` in CSS
4. JavaScript fallback is included for unsupported browsers

---

### Performance Issues

#### Problem: Website loads slowly
**Solution:**
1. Check network tab in DevTools (F12)
2. Optimize images:
   - Compress images before using
   - Use modern formats (WebP)
3. Reduce 3D complexity:
   - Edit `/components/ThreeDScene.tsx`
   - Reduce geometry complexity or animation updates
4. Enable browser caching in Vercel settings

#### Problem: High CPU usage while scrolling
**Solution:**
1. This is usually caused by heavy 3D animations
2. Edit `/components/ThreeDScene.tsx` and reduce animation speeds:
```tsx
// Change this
groupRef.current.rotation.y += 0.005 // Reduce the value

// To this
groupRef.current.rotation.y += 0.002 // Slower rotation = less CPU
```

---

## FAQ

### Q: Can I change the business information?
**A:** Yes! Edit these files:
- Phone/address: `/components/Contact.tsx`
- Footer info: `/components/Footer.tsx`
- Hours: `/components/Contact.tsx`

### Q: How do I add my own logo?
**A:** Add image to `/public` folder, then update `/components/Navigation.tsx` and `/components/Footer.tsx`:
```jsx
<img src="/your-logo.png" alt="Wash'n Dry Logo" className="w-10 h-10" />
```

### Q: Can I change the 3D animations?
**A:** Yes! Edit `/components/ThreeDScene.tsx`:
- Change colors: Modify `color="#..."` values
- Change speed: Adjust `rotation.y += 0.005` values
- Change geometry: Modify `boxGeometry args={[2, 2.2, 1.5]}`

### Q: How do I add a real contact form backend?
**A:** You can:
1. Use Formspree (see above)
2. Use Vercel Functions/API Routes
3. Use a service like SendGrid or Mailgun
4. Use Supabase or Firebase

### Q: Can I add more pages?
**A:** Yes! Create new files in `/app`:
```bash
# Create about page
touch /app/about/page.tsx
```

### Q: How do I monitor website analytics?
**A:** Vercel Analytics is built-in. Check your Vercel dashboard:
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Analytics tab

### Q: Can I use a custom domain?
**A:** Yes! In Vercel dashboard:
1. Project Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions

### Q: How often should I update the website?
**A:** 
- Business hours changes: Update immediately
- Seasonal promotions: Add new sections
- Services changes: Update `/components/Services.tsx`
- Regular updates recommended for SEO

### Q: How do I backup my website?
**A:** Since code is on GitHub:
```bash
# Push all changes to GitHub
git add .
git commit -m "Backup: [date]"
git push
```

Vercel automatically stores deployments and allows rollback.

---

## Getting Help

### Before asking for help, try:
1. Check this troubleshooting guide
2. Read the relevant documentation file (SETUP_GUIDE.md, README.md)
3. Clear browser cache and reload
4. Try in a different browser
5. Check browser console for error messages (F12)

### Helpful Resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber/)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

### Reporting Issues:
When reporting an issue, include:
1. What you were trying to do
2. What error you got (exact message)
3. What browser/OS you're using
4. Steps to reproduce
5. Screenshot if possible

---

## Performance Checklist

Before deploying to production:

- [ ] Test on mobile device
- [ ] Check 3D scene loads
- [ ] Test contact form
- [ ] Test all navigation links
- [ ] Check loading time (should be < 3 seconds)
- [ ] Test on different browser
- [ ] Check mobile responsiveness
- [ ] Verify all business info is correct
- [ ] Run `pnpm build` successfully
- [ ] Test production build locally with `pnpm start`

---

## Quick Fixes

```bash
# Something broken? Try these in order:

# 1. Reinstall dependencies
pnpm install

# 2. Clear build cache
rm -rf .next

# 3. Hard refresh browser
# Ctrl+Shift+R (Windows/Linux)
# Cmd+Shift+R (Mac)

# 4. Restart dev server
# Kill with Ctrl+C, then:
pnpm dev

# 5. Check for errors
# Open DevTools: F12
# Look for red errors in Console tab
```

---

**Still stuck?** Check the specific error message in the console and search for it on Stack Overflow or the relevant documentation site.
