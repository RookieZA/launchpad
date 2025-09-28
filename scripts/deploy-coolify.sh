#!/bin/bash

# Coolify Deployment Helper Script
# This script helps prepare and deploy the website to Coolify

set -e

echo "🚀 Localhost Launchpad - Coolify Deployment Helper"
echo "=================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the website directory."
    exit 1
fi

echo "📦 Installing dependencies..."
npm ci

echo "🔍 Running linting..."
npm run lint

echo "🏗️  Building website..."
npm run build

echo "📊 Build statistics:"
if [ -d "out" ]; then
    echo "   - Output directory: out/"
    echo "   - Total files: $(find out -type f | wc -l)"
    echo "   - Directory size: $(du -sh out | cut -f1)"
else
    echo "   ❌ Build failed - no output directory found"
    exit 1
fi

echo ""
echo "✅ Build completed successfully!"
echo ""
echo "📝 Coolify Configuration:"
echo "   - Build Command: npm run build"
echo "   - Output Directory: out/"
echo "   - Node Version: 18+"
echo "   - Build Context: website/"
echo ""
echo "🎉 Ready for Coolify deployment!"