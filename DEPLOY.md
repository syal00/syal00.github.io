# Deploy to GitHub Pages

Your Next.js portfolio can be deployed to GitHub Pages in two ways:

## Method 1: Automatic Deployment with GitHub Actions (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Add Next.js portfolio"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - Save the changes

3. **Automatic Deployment:**
   - The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
     - Build your Next.js app
     - Export it as static files
     - Deploy to GitHub Pages
   - This happens on every push to the `main` branch

4. **Access your site:**
   - After deployment completes (usually 1-2 minutes), visit:
   - `https://syal00.github.io/`

## Method 2: Manual Deployment

If you prefer to deploy manually:

1. **Build the project:**
   ```bash
   npm run build
   ```
   This creates an `out` folder with static files.

2. **Copy files to root:**
   ```bash
   # On Windows PowerShell:
   Copy-Item -Path "out\*" -Destination "." -Recurse -Force
   ```

3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Deploy Next.js portfolio"
   git push origin main
   ```

## Important Notes

- The Next.js app is configured for static export
- API routes won't work on GitHub Pages (they're server-side)
- The contact form will need to use client-side email services (like EmailJS)
- Blog posts are fetched at build time, not dynamically

## Troubleshooting

### If your site shows a 404:
- Wait a few minutes for GitHub Pages to update
- Clear your browser cache
- Check repository Settings > Pages to ensure it's enabled

### If styles/images don't load:
- Make sure `basePath` is correctly set in `next.config.js`
- Check that all image paths use relative paths (not absolute)

## After Deployment

Once deployed, your Next.js portfolio will be live at:
**https://syal00.github.io/**

The site will automatically update whenever you push changes to the `main` branch.

