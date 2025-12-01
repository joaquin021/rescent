# 🚀 Deploy to GitHub Pages

Step-by-step guide to deploy your Rescent app to GitHub Pages.

---

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Project already configured with GitHub Actions ✅

---

## 🔧 Step 1: Verify Configuration

The project is already configured for deployment:

- ✅ **GitHub username:** `joaquin021`
- ✅ **Repository name:** `rescent`
- ✅ **Live URL:** https://joaquin021.github.io/rescent/

**No configuration changes needed!** Everything is ready to deploy.

---

## 📤 Step 2: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: **`rescent`** (must match the config)
3. Visibility: **Public** (GitHub Pages free tier requires public repos)
4. **DO NOT** initialize with README, .gitignore, or license
5. Click **"Create repository"**

---

## 📦 Step 3: Push Code to GitHub

Open a terminal in the project folder and run:

```bash
# Initialize Git repository (if not already done)
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Rescent - Olfactory Training App"

# Connect to GitHub
git remote add origin https://github.com/joaquin021/rescent.git

# Switch to main branch (if on master)
git branch -M main

# Push the code
git push -u origin main
```

---

## ⚙️ Step 4: Enable GitHub Pages

1. Go to your repository: https://github.com/joaquin021/rescent
2. Click **"Settings"**
3. In the left sidebar, click **"Pages"**
4. Under **"Source"**, select:
   - **Source:** `GitHub Actions`
5. Done! No other configuration needed.

---

## 🎉 Step 5: Auto-Deploy

The GitHub Actions workflow is already configured. Now:

1. Go to the **"Actions"** tab in your repository
2. You'll see a workflow called **"Deploy to GitHub Pages"**
3. If it didn't run automatically, click **"Run workflow"** → **"Run workflow"**

**The process will take 1-2 minutes.**

---

## 🌐 Step 6: View Your Live Site

Once deployment is complete, your site will be live at:

```
https://joaquin021.github.io/rescent/
```

---

## 🔄 Future Updates (Automatic)

Every time you push changes to GitHub, it will auto-deploy:

```bash
# Make changes to your code
# ...

# Stage changes
git add .

# Commit with a descriptive message
git commit -m "Updated scent descriptions"

# Push to GitHub
git push

# GitHub Actions will auto-deploy!
```

---

## 🐛 Troubleshooting

### Site shows 404

**Problem:** Base path doesn't match repository name.

**Solution:**
1. Verify in `astro.config.mjs`:
   ```javascript
   base: '/rescent',  // Must match repo name
   ```
2. If you changed the repo name, update `base` in `astro.config.mjs`
3. Commit and push again

### GitHub Actions workflow fails

**Check:**
1. Go to **Actions** → Click on the failed workflow → Review logs
2. Common errors:
   - Dependencies failed to install → Check `package.json`
   - Build failed → Run `npm run build` locally first

### Styles not loading

**Problem:** Asset paths are incorrect.

**Solution:**
1. Verify `site` and `base` are correctly configured in `astro.config.mjs`
2. Clear cache: `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac)

---

## 📱 Test on Mobile

Once deployed, open the URL on your mobile device:

```
https://joaquin021.github.io/rescent/
```

**Tip:** Add the web app to your home screen for a native app feel.

### On iOS (Safari):
1. Open the website
2. Tap the "Share" icon
3. Select "Add to Home Screen"

### On Android (Chrome):
1. Open the website
2. Menu (3 dots) → "Add to Home screen"

---

## 🎨 Custom Domain (Optional)

If you have your own domain (e.g., `rescent.com`):

1. In GitHub Settings → Pages → Custom domain
2. Enter your domain
3. Configure DNS at your domain provider:
   ```
   CNAME → joaquin021.github.io
   ```
4. Update `astro.config.mjs`:
   ```javascript
   site: 'https://rescent.com',
   base: '/',
   ```

---

## ✅ Final Checklist

- [x] Repository created on GitHub (`rescent`)
- [ ] Pushed code with `git push`
- [ ] Enabled GitHub Pages (Source: GitHub Actions)
- [ ] Workflow executed successfully
- [ ] Site is live at https://joaquin021.github.io/rescent/
- [ ] Tested on mobile device

---

## 🆘 Additional Help

- **Astro GitHub Pages Docs:** https://docs.astro.build/en/guides/deploy/github/
- **GitHub Pages Docs:** https://docs.github.com/en/pages

---

Your Rescent app is ready to share with the world! 🌸
