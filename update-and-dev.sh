#!/usr/bin/env bash
set -e

cd "$(dirname "$0")"

echo "→ git checkout main"
git checkout main

echo "→ git pull origin main"
git pull origin main

echo "→ npm install --legacy-peer-deps"
npm install --legacy-peer-deps

echo "→ pkill old Next.js dev servers"
pkill -f "next dev" 2>/dev/null || true
sleep 1

echo "→ rm -rf .next"
rm -rf .next

# Повышаем лимит открытых файлов, чтобы dev-сервер не падал с EMFILE и не отдавал 404 на /
ulimit -n 10240 2>/dev/null || true

echo "→ npm run dev -- --turbo"
npm run dev -- --turbo
