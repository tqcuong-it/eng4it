#!/bin/bash
# Auto-deploy eng4it.com to Cloudflare Pages
set -e

HUGO_BIN="/home/node/.openclaw/workspace/.tools/bin/hugo"
SITE_DIR="/home/node/.openclaw/workspace/eng4it"

# Load tokens from env file (not tracked by git)
if [ -f "$SITE_DIR/.env" ]; then
  source "$SITE_DIR/.env"
fi

echo "🔨 Building..."
cd "$SITE_DIR"
$HUGO_BIN --minify --buildFuture

echo "🚀 Deploying..."
npx wrangler pages deploy public --project-name eng4it --commit-message "${1:-auto deploy}" --commit-dirty=true

echo "📦 Pushing to GitHub..."
git add -A
git commit -m "${1:-auto commit}" 2>/dev/null || true
git push origin main 2>/dev/null || echo "⚠️ Git push failed (non-critical)"

echo "✅ Done! https://eng4it.com"
