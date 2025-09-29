# Localhost Launchpad - Project Structure

This document outlines the project structure and how different components work together.

## 📁 Directory Structure

```
localhost-launchpad/
├── README.md                   # Main GitHub showcase
├── PROJECT_STRUCTURE.md        # Project structure documentation
├── assets/                     # Screenshots, diagrams, etc.
└── website/                    # Next.js website application
    ├── next-env.d.ts          # TypeScript declarations for Next.js
    ├── next.config.js         # Next.js configuration
    ├── package.json           # Dependencies and scripts
    ├── postcss.config.js      # PostCSS configuration
    ├── tailwind.config.js     # Tailwind CSS configuration
    ├── tsconfig.json          # TypeScript configuration
    ├── public/                # Static assets
    │   └── favicon.svg        # Website favicon
    └── src/                   # Source code
        ├── types.ts           # TypeScript type definitions
        ├── components/        # Reusable React components
        │   ├── BlogPost.tsx   # Blog post display component
        │   ├── Footer.tsx     # Website footer
        │   ├── Header.tsx     # Website header
        │   ├── HeroSection.tsx # Hero section component
        │   ├── ModernCard.tsx # Card component
        │   └── ThemeToggle.tsx # Dark/light theme toggle
        ├── pages/             # Next.js page components
        │   ├── _app.tsx       # App wrapper component
        │   └── index.tsx      # Homepage
        ├── styles/            # CSS styles
        │   └── globals.css    # Global styles and theme
        └── utils/             # Utility functions
            └── posts.ts       # Blog post handling utilities
```

## 🚀 Deployment Options

### 1. Coolify (Recommended for Self-Hosting)

**Configuration:**
- **Repository**: Connect your GitHub repo
- **Build Path**: `website/`
- **Build Command**: `npm run build`
- **Output Directory**: `out/`
- **Environment**: Node.js 18+

**Quick Deploy:**
```bash
# From project root
./scripts/deploy-coolify.sh
```

### 2. GitHub Pages (Backup/Demo)

**Automatic Deployment:**
- Push to `main` branch
- GitHub Actions will build and deploy automatically
- Available at: `https://rookieza.github.io/launchpad`

### 3. Manual Deployment

**Build locally:**
```bash
cd website
npm install
npm run build
# Upload contents of 'out/' directory to your web server
```

## 🛠️ Development Workflow

### Initial Setup
```bash
# Clone repository
git clone https://github.com/rookieza/launchpad.git
cd launchpad

# Quick development setup
./scripts/dev-setup.sh
```

### Daily Development
```bash
# Start development server
cd website
npm run dev

# Open http://localhost:3000
```

### Adding New Content
1. Update `README.md` for GitHub showcase
2. Update website components in `website/src/`
3. Test locally with `npm run dev`
4. Commit and push to trigger deployments

## 🔄 Sync Strategy

The project maintains consistency between GitHub README and website through:

1. **Single Source of Truth**: Main project data lives in `README.md`
2. **Website Enhancement**: Website adds interactive features and better UX
3. **Cross-References**: Both formats link to each other
4. **Automated Builds**: Changes trigger automatic deployments

## 📊 Analytics & Monitoring

Consider adding these to track your homelab showcase:

- **Plausible Analytics**: Self-hosted, privacy-friendly analytics
- **Uptime Kuma**: Monitor your deployed website
- **GitHub Insights**: Track repository engagement

## 🤝 Contributing

When updating the project:

1. Always update `README.md` first (single source of truth)
2. Test website changes locally before pushing
3. Ensure both GitHub and website experiences remain consistent
4. Update this documentation if structure changes

## 🔗 Useful Commands

```bash
# Project root commands
./scripts/dev-setup.sh          # Quick development setup
./scripts/deploy-coolify.sh     # Prepare for Coolify deployment

# Website-specific commands (from website/ directory)
npm run dev                     # Development server
npm run build                   # Production build
npm run lint                    # Code linting
npm run start                   # Start production server locally
```