# Tech Journey Blog Website

A modern, responsive website built with Next.js that showcases my homelab projects and documents my self-hosting journey. This site serves as both a portfolio of my homelab stack and a blog for sharing experiences and tutorials.

## 🚀 Features

- **Social Media Feed Interface**: Twitter/X-style timeline showcasing tech journey and homelab projects
- **Interactive Homelab Showcase**: Detailed project cards with difficulty levels, costs, and resources
- **Personal Tech Profile**: Professional profile section with experience highlights
- **Dynamic Project Posts**: Individual posts for each homelab service with metadata and links
- **GitHub Repository Integration**: Embedded GitHub project cards with direct links
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Static Site Generation**: Fast loading times with Next.js SSG
- **SEO Optimized**: Proper meta tags and structured data
- **Accessible**: WCAG compliant design and navigation
- **Real-time Style Updates**: Live interaction buttons and social media styling

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom components and responsive design
- **Content**: Static homelab project data with markdown support via gray-matter
- **Icons & UI**: Lucide React icons and custom SVG components
- **Typography**: Tailwind Typography plugin for enhanced text rendering
- **Date Handling**: date-fns for flexible date formatting
- **Deployment**: Static export for easy hosting anywhere
- **Build Tool**: Next.js built-in bundler with PostCSS and Autoprefixer
- **Development**: ESLint for code quality and hot reload for instant updates

## 📁 Project Structure

```
website/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Site header and navigation
│   │   ├── Footer.tsx       # Site footer with links
│   │   └── BlogPost.tsx     # Blog post display component
│   ├── pages/
│   │   ├── _app.tsx         # Next.js app wrapper
│   │   └── index.tsx        # Main homepage
│   ├── styles/
│   │   └── globals.css      # Global styles and Tailwind
│   ├── utils/
│   │   └── posts.ts         # Blog post utilities
│   └── types.ts             # TypeScript type definitions
├── public/                  # Static assets
│   └── favicon.svg          # Site favicon
├── .next/                   # Next.js build output (generated)
├── node_modules/            # Dependencies (generated)
├── package.json             # Dependencies and scripts
├── package-lock.json        # Dependency lock file
├── next.config.js           # Next.js configuration
├── next-env.d.ts            # Next.js TypeScript declarations
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
├── setup.sh                 # Setup script
└── README.md                # Project documentation
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Basic knowledge of React/Next.js

### Installation

1. **Navigate to the website directory**:
   ```bash
   cd website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** to `http://localhost:3000`

   The application will start on port 3000 by default. You can access:
   - **Main Feed**: `http://localhost:3000` - Social media style homepage
   - **Development Tools**: Hot reload enabled for instant updates

### Building for Production

1. **Build the static site**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm run start
   ```

The static files will be generated in the `out/` directory and can be deployed to any static hosting service.

## ✍️ Writing Blog Posts

Blog posts are written in Markdown with YAML frontmatter. Create new posts in the `content/posts/` directory.

### Post Format

```markdown
---
title: "Your Post Title"
date: "2025-09-23"
excerpt: "A brief description of your post content"
tags: ["tag1", "tag2", "tag3"]
author: "Your Name"
readTime: "X min read"
---

# Your Post Title

Your post content in Markdown format...
```

### Frontmatter Fields

- `title`: Post title (required)
- `date`: Publication date in YYYY-MM-DD format (required)
- `excerpt`: Brief description for previews (required)
- `tags`: Array of relevant tags (required)
- `author`: Author name (optional, defaults to "Ryan")
- `readTime`: Estimated reading time (optional)

### Supported Markdown Features

- Headers (H1-H6)
- Paragraphs and line breaks
- **Bold** and *italic* text
- Lists (ordered and unordered)
- Links and images
- Code blocks with syntax highlighting
- Blockquotes
- Tables

## 🏠 Homelab Showcase

The homelab showcase is integrated directly into the social media feed on the main page (`src/pages/index.tsx`). Each project includes:

### Current Homelab Stack
- **Proxmox VE**: Virtualization platform for VMs and containers
- **Cloudflare Tunnels**: Secure remote access without port forwarding  
- **Coolify**: Self-hosted deployment platform (Heroku/Vercel alternative)
- **Uptime Kuma**: Service uptime monitoring with notifications
- **Supabase**: Self-hosted backend-as-a-service with PostgreSQL
- **OpenWebUI**: Local LLM interface for private AI interactions

### Project Information Structure
- **Basic Info**: Name, description, category, difficulty level
- **Economics**: Cost analysis and value proposition
- **Technical Details**: Purpose, key features, why I chose it
- **Resources**: Direct links to GitHub, documentation, demos, websites
- **Social Elements**: Tags, engagement metrics, and shareable format

To add a new homelab project, edit the `homelabProjects` array in `src/pages/index.tsx` following the established data structure.

## 🎨 Customization

### Styling

The site uses Tailwind CSS for styling. Key customization options:

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Typography**: Customize fonts and sizes in the Tailwind config
- **Components**: Add custom component styles in `globals.css`

### Layout

- **Header**: Modify navigation links in `src/components/Header.tsx`
- **Footer**: Update contact information and links in `src/components/Footer.tsx`
- **Homepage**: Customize sections in `src/pages/index.tsx`

### Content

- **About Section**: Update the hero section in the main page
- **Social Links**: Modify links in Header and Footer components
- **Contact Information**: Update in Footer component

## 📱 Responsive Design

The site is fully responsive with breakpoints:

- **Mobile**: 640px and below
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px and above

All components are optimized for touch interfaces and keyboard navigation.

## 🚀 Deployment Options

### Static Hosting (Recommended)

The site exports to static files and can be hosted on:

- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Built-in Next.js support with zero configuration
- **GitHub Pages**: Free hosting for public repositories
- **Your Homelab**: Serve the `out/` directory with any web server

### Self-Hosting

To host on your own infrastructure:

1. Build the static site: `npm run build`
2. Copy the `out/` directory to your web server
3. Configure your web server to serve the files
4. Set up SSL certificates (recommended)

### Coolify Deployment

If you're using Coolify (like I am), you can deploy directly from your Git repository:

1. Create a new project in Coolify
2. Connect your Git repository
3. Set build command: `npm run build`
4. Set the static file path to `out/`
5. Deploy!

## 🔧 Development

### Adding New Features

1. **New Components**: Add to `src/components/`
2. **New Pages**: Add to `src/pages/`
3. **Styling**: Use Tailwind classes or add to `globals.css`
4. **Types**: Update `src/types.ts` for new data structures

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured for Next.js best practices
- **Prettier**: Code formatting (recommended to add)

### Performance

- **Image Optimization**: Use Next.js Image component for images
- **Bundle Analysis**: Run `npm run build` to see bundle sizes
- **Lazy Loading**: Components are automatically code-split

## 📊 Analytics

The site is designed to work with privacy-first analytics solutions:

- **Plausible Analytics**: Recommended (what I use)
- **Simple Analytics**: Another privacy-focused option
- **Umami**: Self-hosted analytics solution

To add analytics, include the tracking script in `_app.tsx`.

## 🔒 Security

- **No Sensitive Data**: All content is public by design
- **Static Site**: No server-side vulnerabilities
- **Dependencies**: Regularly updated for security patches
- **HTTPS**: Always serve over HTTPS in production

## 🤝 Contributing

This is a personal project, but if you find issues or have suggestions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

- **GitHub**: [ryancoe](https://github.com/ryancoe)
- **LinkedIn**: [ryancoe](https://linkedin.com/in/ryancoe)
- **Website**: [Your Domain]

---

Built with ❤️ and hosted on my homelab.