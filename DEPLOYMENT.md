# Deployment to GitHub Pages

Your Next.js portfolio is now configured for GitHub Pages deployment!

## ✅ What's Already Done

1. ✅ Next.js configured for static export (`output: 'export'`)
2. ✅ GitHub Actions workflow created (`.github/workflows/deploy.yml`)
3. ✅ API routes removed (not compatible with static export)
4. ✅ Contact form uses mailto links (works with static hosting)
5. ✅ Build tested and working locally

## 🚀 Final Steps to Deploy

### Step 1: Enable GitHub Actions

1. Go to your repository: https://github.com/syal00/syal00.github.io
2. Click **Settings** → **Actions** → **General**
3. Under "Workflow permissions":
   - Select **"Read and write permissions"**
   - Check **"Allow GitHub Actions to create and approve pull requests"** (optional)
4. Click **Save**

### Step 2: Enable GitHub Pages

1. In the same repository, go to **Settings** → **Pages**
2. Under "Source":
   - Select **"GitHub Actions"** (not "Deploy from a branch")
3. Click **Save**

### Step 3: Wait for Deployment

1. The workflow will automatically run after you enable GitHub Pages
2. Go to **Actions** tab to see the build progress
3. Wait 2-5 minutes for deployment to complete
4. Your site will be live at: **https://syal00.github.io/**

## 📝 Notes

- The workflow runs automatically on every push to `main`
- The `out/` directory contains your static files
- Contact form uses mailto links (no server required)
- All images are optimized for static hosting

## 🔍 Verify Deployment

After enabling GitHub Pages, check:
- **Actions** tab: Should show a workflow run "Deploy Next.js to GitHub Pages"
- Once complete, visit https://syal00.github.io/
- Your Next.js portfolio should be live!

## 🛠️ Manual Deploy (if needed)

If you want to manually trigger the workflow:

1. Go to **Actions** tab
2. Select **"Deploy Next.js to GitHub Pages"** workflow
3. Click **"Run workflow"**
4. Select `main` branch and click **"Run workflow"**

Your portfolio is ready to deploy! Just enable GitHub Pages in settings.
