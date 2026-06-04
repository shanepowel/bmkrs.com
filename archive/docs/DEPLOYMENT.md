# Deployment Guide

## GitHub Repository Setup

### Option 1: Create Repository via GitHub Web Interface

1. Go to https://github.com/new
2. Repository name: `bmkrs.com`
3. Description: "BMKRS Digital Design Agency - React Application"
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### Option 2: Create Repository via Command Line

If you have GitHub CLI (`gh`) installed:

```bash
gh repo create bmkrs.com --public --source=. --remote=origin --description="BMKRS Digital Design Agency - React Application"
```

### Push to GitHub

After creating the repository on GitHub, run:

```bash
# Get your repository URL from GitHub (should look like)
# https://github.com/yourusername/bmkrs.com.git

# Add the remote
git remote add origin https://github.com/yourusername/bmkrs.com.git

# Push the code
git push -u origin master
```

---

## Vercel Deployment

### Prerequisites

1. Create a Vercel account at https://vercel.com/signup
2. Install Vercel CLI: `npm install -g vercel`

### Deploy to Vercel

#### Option 1: Deploy via Vercel CLI

```bash
# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Or deploy to preview first
vercel
```

The CLI will:
- Link your project to Vercel
- Build and deploy your application
- Provide you with a URL

#### Option 2: Deploy via Vercel Dashboard

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Configure project:
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: Leave empty
   - **Output Directory**: `public_html`
4. Click "Deploy"

### Vercel Configuration

The project includes a `vercel.json` configuration file that:
- Sets up PHP runtime for `index.php`
- Configures routing to serve files from `public_html/`
- Maps URLs correctly for all pages

### Environment Variables (if needed)

If your application requires environment variables:

```bash
# Add via CLI
vercel env add VARIABLE_NAME

# Or add via Vercel Dashboard
# Settings → Environment Variables
```

---

## Deployment Architecture

```
GitHub Repository
       ↓
   (git push)
       ↓
Vercel Build System
       ↓
   Deploy to:
   - Production: yourproject.vercel.app
   - Preview: [branch]-yourproject.vercel.app
```

---

## Custom Domain (Optional)

To add a custom domain (e.g., bmkrs.com):

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain
3. Configure DNS records as instructed by Vercel
4. Vercel will automatically provision SSL certificate

---

## Continuous Deployment

Once connected to GitHub, Vercel will:
- Auto-deploy on every push to `master` (production)
- Create preview deployments for pull requests
- Run checks before deployment

---

## Monitoring

After deployment:
- View logs: `vercel logs [deployment-url]`
- View analytics: Vercel Dashboard → Analytics
- View deployments: Vercel Dashboard → Deployments

---

## Troubleshooting

### PHP Not Working
- Ensure `vercel.json` includes PHP runtime configuration
- Check Vercel logs for PHP errors

### Static Files Not Loading
- Verify paths in `vercel.json` routes
- Check that files exist in `public_html/`

### React Components Not Rendering
- Check browser console for JavaScript errors
- Verify Babel and React CDN scripts are loading

---

## Quick Deploy Commands

```bash
# Initial setup
git remote add origin https://github.com/yourusername/bmkrs.com.git
git push -u origin master
vercel login
vercel --prod

# Subsequent deployments (automatic via git push)
git add .
git commit -m "Your changes"
git push

# Manual Vercel deployment
vercel --prod
```

---

## Production Checklist

- [ ] GitHub repository created and code pushed
- [ ] Vercel account created
- [ ] Project deployed to Vercel
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active (automatic with Vercel)
- [ ] Environment variables configured (if needed)
- [ ] Analytics enabled
- [ ] Deployment notifications configured

---

**Your React application is ready for production! 🚀**
