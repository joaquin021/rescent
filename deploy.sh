#!/bin/bash

# Deploy helper script for GitHub Pages
# Usage: ./deploy.sh "commit message"

echo "🚀 Deploy Script - Rescent"
echo "========================================"
echo ""

# Check that a commit message was provided
if [ -z "$1" ]; then
  echo "❌ Error: You must provide a commit message"
  echo ""
  echo "Usage: ./deploy.sh \"your commit message\""
  echo "Example: ./deploy.sh \"Updated images\""
  exit 1
fi

# Check that we're in a git repository
if [ ! -d ".git" ]; then
  echo "❌ Error: Not in a Git repository"
  echo "Run first: git init"
  exit 1
fi

echo "📦 Verifying build..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build error. Check errors above."
  exit 1
fi

echo "✅ Build successful"
echo ""

echo "📝 Adding files..."
git add .

echo "💾 Creating commit..."
git commit -m "$1"

if [ $? -ne 0 ]; then
  echo "⚠️  No changes to commit or commit failed"
  echo "If there are no changes, everything is up to date."
  exit 0
fi

echo "🚀 Pushing to GitHub..."
git push

if [ $? -ne 0 ]; then
  echo "❌ Push error"
  echo "Check your connection and that you've configured the remote correctly"
  exit 1
fi

echo ""
echo "✅ Deploy completed!"
echo ""
echo "📊 Check progress at:"
echo "   https://github.com/joaquin021/rescent/actions"
echo ""
echo "🌐 Your site will be ready in 1-2 minutes at:"
echo "   https://joaquin021.github.io/rescent/"
echo ""
