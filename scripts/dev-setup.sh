#!/bin/bash

# Local Development Helper Script
# Quick setup for local development

set -e

echo "🏠 Localhost Launchpad - Local Development Setup"
echo "================================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version $NODE_VERSION detected. Please upgrade to Node.js 18+."
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Navigate to website directory
if [ ! -d "website" ]; then
    echo "❌ Website directory not found. Make sure you're in the project root."
    exit 1
fi

cd website

echo "📦 Installing dependencies..."
npm install

echo "🏗️  Running initial build to check everything works..."
npm run build

echo "🚀 Starting development server..."
echo "   - Local URL: http://localhost:3000"
echo "   - Press Ctrl+C to stop the server"
echo ""

npm run dev