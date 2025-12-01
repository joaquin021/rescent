# ⚡ Quick Deploy Commands

Copy and paste these commands in your terminal.

---

## 📦 First Time Setup

### Push to GitHub

```bash
# Initialize repository
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Rescent - Olfactory Training App"

# Connect to GitHub
git remote add origin https://github.com/joaquin021/rescent.git

# Switch to main branch
git branch -M main

# Push code
git push -u origin main
```

---

## 🔄 Updates (every time you make changes)

```bash
# See modified files
git status

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Description of your changes"

# Push to GitHub (auto-deploys)
git push
```

---

## 🧪 Verify Before Pushing

```bash
# Build locally to check for errors
npm run build

# If no errors, then push
git add .
git commit -m "Your changes"
git push
```

---

## 🌐 View Your Site

After the first deploy, your site will be at:

```
https://joaquin021.github.io/rescent/
```

---

## 📝 Commit Message Examples

```bash
git commit -m "Updated orange scent text"
git commit -m "Changed images"
git commit -m "Adjusted phase timings"
git commit -m "Fixed action phase bug"
git commit -m "Added dark mode"
```

---

## 🔙 Undo Changes (if you made a mistake)

### Before commit:
```bash
# Discard all unstaged changes
git reset --hard
```

### After commit but before push:
```bash
# Go back to previous commit
git reset --soft HEAD~1
```

### After push:
```bash
# Revert last commit (creates a new commit)
git revert HEAD
git push
```

---

## 📊 View Commit History

```bash
# See last 10 commits
git log --oneline -10
```

---

## 🆘 If Something Goes Wrong

### Clone fresh copy of repository:
```bash
cd ..
git clone https://github.com/joaquin021/rescent.git rescent-backup
cd rescent-backup
```

### Sync with GitHub (if conflicts):
```bash
git pull origin main
```

---

## ✅ Complete Workflow (example)

```bash
# 1. Make changes to your code
# ... edit files ...

# 2. Verify it builds
npm run build

# 3. See what files changed
git status

# 4. Add changes
git add .

# 5. Commit
git commit -m "Updated images and texts"

# 6. Push to GitHub
git push

# 7. GitHub Actions auto-deploys
# View at: https://github.com/joaquin021/rescent/actions

# 8. In 1-2 minutes, your site is updated at:
# https://joaquin021.github.io/rescent/
```

---

Ready to deploy! Use these commands to keep your site updated easily.
