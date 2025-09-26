#!/bin/bash

# Tech Journey Blog Setup Script
# This script helps you get started with the blog website

echo "🚀 Setting up your Tech Journey Blog..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the website directory"
    echo "Usage: cd website && ./setup.sh"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed"
    echo "Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Error: Node.js version 18+ required (current: $(node -v))"
    echo "Please upgrade Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
if npm install; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Error: Failed to install dependencies"
    exit 1
fi

# Create basic .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    echo "📝 Creating .gitignore..."
    cat > .gitignore << EOF
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Next.js
.next/
out/

# Environment variables
.env.local
.env.development.local
.env.test.local
.env.production.local

# OS files
.DS_Store
Thumbs.db

# Editor files
.vscode/
.idea/
*.swp
*.swo

# Logs
logs
*.log
EOF
    echo "✅ .gitignore created"
fi

# Create a simple development script
echo "📝 Creating development scripts..."
cat > dev.sh << 'EOF'
#!/bin/bash
echo "🚀 Starting development server..."
echo "Open http://localhost:3000 in your browser"
npm run dev
EOF
chmod +x dev.sh

cat > build.sh << 'EOF'
#!/bin/bash
echo "🏗️ Building for production..."
npm run build
echo "✅ Build complete! Static files are in the 'out' directory"
EOF
chmod +x build.sh

echo "✅ Development scripts created"

# Create a sample blog post if none exist
if [ ! -f "content/posts/welcome.md" ]; then
    echo "📝 Creating welcome blog post..."
    mkdir -p content/posts
    cat > content/posts/welcome.md << 'EOF'
---
title: "Welcome to My Tech Journey!"
date: "2025-09-23"
excerpt: "Welcome to my personal blog where I document my homelab adventures, self-hosting experiments, and technology discoveries."
tags: ["welcome", "introduction", "homelab", "blog"]
author: "Ryan"
readTime: "3 min read"
---

# Welcome to My Tech Journey!

Hello and welcome to my personal tech blog! This site is where I document my adventures in self-hosting, homelab building, and exploring new technologies.

## What You'll Find Here

- **Homelab Projects**: Detailed guides on setting up and managing self-hosted services
- **Technology Reviews**: My experiences with different tools and platforms
- **Tutorials**: Step-by-step guides for various tech projects
- **Lessons Learned**: Honest accounts of what works, what doesn't, and why

## My Mission

My goal is to share knowledge and experiences that can help others on their own tech journeys. Whether you're just starting with a Raspberry Pi or building a full enterprise-grade homelab, I hope you'll find something useful here.

## Get Started

Check out my [homelab showcase](#homelab-showcase) to see what I'm currently running, or browse through the blog posts to learn about specific projects and setups.

Thanks for visiting, and happy self-hosting! 🚀
EOF
    echo "✅ Welcome blog post created"
fi

echo ""
echo "🎉 Setup complete! Your Tech Journey Blog is ready."
echo ""
echo "Next steps:"
echo "  1. Start the development server: ./dev.sh (or npm run dev)"
echo "  2. Open http://localhost:3000 in your browser"
echo "  3. Edit your first blog post in content/posts/"
echo "  4. Customize the homelab showcase in src/components/HomelabShowcase.tsx"
echo "  5. Update your personal information in src/components/Header.tsx and Footer.tsx"
echo ""
echo "For production deployment:"
echo "  1. Build the site: ./build.sh (or npm run build)"
echo "  2. Deploy the 'out' directory to your web server"
echo ""
echo "Happy blogging! 📝✨"