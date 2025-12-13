# My Awesome Homelab & Self-Hosted Projects 🚀

A curated list of the software and services I personally use and recommend for building a powerful, local development and deployment environment. This list is aimed at tech individuals looking to get started with self-hosting and exploring the world of homelabbing.

> 🌐 **Live Website**: [View the interactive version](https://launchpad.servr.co.za) hosted on my homelab infrastructure

## 📱 Two Ways to Explore

1. **📖 Documentation**: Continue reading this README for detailed project information
2. **🌐 Interactive Website**: Visit the [live website](https://launchpad.servr.co.za) for a social media-style experience

> 💡 **Note**: This page is a living document and will be updated as I explore new and exciting projects. This is linked from my LinkedIn profile to showcase the technologies I'm passionate about.

## 🚀 Quick Start

New to homelabbing? Start with these essentials:
1. **Hardware**: Any old computer or a Raspberry Pi 4+
2. **Hypervisor**: Install [Proxmox VE](#proxmox-ve) for virtualization
3. **Remote Access**: Set up [Cloudflare Tunnels](#cloudflare-tunnels) for secure external access
4. **Monitoring**: Deploy [Uptime Kuma](#uptime-kuma) to monitor your services
5. **Deploy Apps**: Use [Coolify](#coolify) for easy application deployment

## 📋 Table of Contents

- [Core Infrastructure](#-core-infrastructure)
- [DevOps & Automation](#-devops--automation)
- [Monitoring & Analytics](#-monitoring--analytics)
- [Productivity & Collaboration](#-productivity--collaboration)
- [Backend & Data Services](#-backend--data-services)
- [AI & Development Tools](#-ai--development-tools)
- [Getting Help](#-getting-help)

## 🏛️ Core Infrastructure
*Virtualization & Networking - The foundation of your homelab*

These tools manage the hardware and provide secure access to your services.

### Proxmox VE
**🎯 Purpose**: Hypervisor for running VMs and containers  
**💰 Cost**: Free  
**⚡ Difficulty**: Beginner-friendly  

Proxmox Virtual Environment is a powerful, open-source hypervisor that allows you to run virtual machines (VMs) and lightweight Linux Containers (LXC). It's the bedrock of my homelab, providing a robust and easy-to-manage platform for all my other services.

**Why I use it**: 
- Free with excellent web UI
- Supports both VMs (full OS isolation) and LXC containers (lightweight Linux services)
- Built-in backup and clustering capabilities

**Key Features**: 
- KVM for VMs
- LXC for containers
- Built-in backup solutions
- Clustering support
- Comprehensive web-based management interface
- no subcription repo

**🔗 Resources**: <a href="https://www.proxmox.com/en/proxmox-ve" target="_blank" rel="noopener noreferrer">Official Website</a> | <a href="https://pve.proxmox.com/wiki/Installation" target="_blank" rel="noopener noreferrer">Installation Guide</a> | <a href="https://pve.proxmox.com/pve-docs/pve-admin-guide.html#sysadmin_no_subscription_repo" target="u_blank" rel="noopener noreferrer">no subcription repo</a>



---

### Cloudflare Tunnels
**🎯 Purpose**: Secure remote access without port forwarding  
**💰 Cost**: Free tier available  
**⚡ Difficulty**: Intermediate  

Cloudflare Tunnels create a secure, outbound-only connection between your local services and the Cloudflare network. This allows you to expose your homelab applications to the internet without opening any ports on your firewall.

**Why I use it**: 
- Much more secure than traditional port forwarding
- Includes Cloudflare's DDoS protection and caching
- No need to configure firewall rules

**🔗 Resources**: [Getting Started Guide](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/tunnel-guide/)

## ⚙️ DevOps & Automation
*Platform-as-a-Service tools for easy deployment*

Tools that make deploying and managing applications a breeze.

### Coolify
**🎯 Purpose**: Self-hosted alternative to Heroku/Vercel  
**💰 Cost**: Free (open-source)  
**⚡ Difficulty**: Beginner-friendly  

Coolify is an open-source and self-hostable alternative to Heroku, Netlify, and Vercel. It allows you to deploy applications, databases, and other services with just a few clicks.

**Why I use it**: 
- Dramatically simplifies deployment process
- Automatic builds from GitHub repositories
- Handles SSL certificates automatically
- Supports multiple programming languages and frameworks

**🔗 Resources**: [GitHub](https://github.com/coollabsio/coolify) | [Documentation](https://coolify.io/docs)

---

### n8n
**🎯 Purpose**: Workflow automation platform  
**💰 Cost**: Free (open-source) / Paid (cloud)  
**⚡ Difficulty**: Beginner-friendly  

n8n is a powerful, open-source workflow automation tool that allows you to connect different services and automate repetitive tasks. It's like Zapier but self-hosted, giving you complete control over your automation workflows.

**Why I started with n8n**: 
- Perfect entry point into self-hosting
- Visual workflow builder makes automation accessible
- Connects to hundreds of different services
- Great for learning API integrations
- Excellent documentation and community

**Key Features**: 
- Visual workflow editor
- 400+ integrations
- Custom code nodes for advanced logic
- Webhook support for real-time triggers
- Built-in credential management

**🔗 Resources**: [GitHub](https://github.com/n8n-io/n8n) | [Documentation](https://docs.n8n.io/) | [Community](https://community.n8n.io/)

## 📊 Monitoring & Analytics
*Keep track of your services and data*

Essential tools for monitoring service health and understanding usage patterns.

### Uptime Kuma
**🎯 Purpose**: Service uptime monitoring  
**💰 Cost**: Free (open-source)  
**⚡ Difficulty**: Beginner-friendly  

A beautiful, easy-to-use, self-hosted monitoring tool. Uptime Kuma can monitor your services over HTTP/S, TCP, DNS, and other protocols. It sends notifications through various channels like Slack, Discord, and Telegram if a service goes down.

**Why I use it**: 
- Incredibly simple to set up
- Clean, at-a-glance dashboard
- Multiple notification channels
- Supports various monitoring protocols

**🔗 Resources**: [GitHub](https://github.com/louislam/uptime-kuma) | [Demo](https://demo.uptime.kuma.pet/)

---

### Plausible Analytics
**🎯 Purpose**: Privacy-friendly web analytics  
**💰 Cost**: Free (self-hosted) / Paid (cloud)  
**⚡ Difficulty**: Intermediate  

A lightweight, open-source, and privacy-friendly alternative to Google Analytics. It provides all the essential website traffic metrics without collecting any personal data.

**Why I use it**: 
- Privacy-focused (no personal data collection)
- Lightweight and fast
- GDPR compliant out of the box
- Clean, intuitive interface

**🔗 Resources**: [GitHub](https://github.com/plausible/analytics) | [Self-hosting Guide](https://plausible.io/docs/self-hosting)

## 📝 Productivity & Collaboration
*Documentation, knowledge management, and AI tools*

Tools for organizing information and enhancing productivity.

### OpenWebUI
**🎯 Purpose**: Local LLM interface  
**💰 Cost**: Free (open-source)  
**⚡ Difficulty**: Intermediate  

OpenWebUI is a user-friendly and feature-rich web interface for local Large Language Models (LLMs) like Llama, CodeLlama, and Mistral. It provides a ChatGPT-like experience for your self-hosted AI models.

**Why I use it**: 
- Best interface for local LLMs
- Supports multiple AI models
- RAG (Retrieval-Augmented Generation) capabilities
- ChatGPT-like user experience
- Complete privacy (runs locally)

**🔗 Resources**: [GitHub](https://github.com/open-webui/open-webui) | [Documentation](https://docs.openwebui.com/)

---

### Docmost
**🎯 Purpose**: Team documentation and wiki  
**💰 Cost**: Free (open-source)  
**⚡ Difficulty**: Beginner-friendly  

An open-source, self-hosted alternative to Confluence for team documentation and knowledge sharing.

**Why I use it**: 
- Clean, modern interface
- Real-time collaboration
- Markdown support
- Organized document structure
- Great for technical documentation

**🔗 Resources**: [GitHub](https://github.com/docmost/docmost) | [Documentation](https://docmost.com/docs)

## 💾 Backend & Data Services
*Powerful database and backend solutions*

Self-hostable backends and databases for your applications.

### Supabase
**🎯 Purpose**: Open-source Firebase alternative  
**💰 Cost**: Free (self-hosted) / Paid tiers (cloud)  
**⚡ Difficulty**: Intermediate  

Supabase is an open-source alternative to Firebase. It provides a suite of tools to build your backend, including a Postgres database, authentication, instant APIs, storage, and more.

**Why I use it**: 
- All the power of Firebase with self-hosting flexibility
- Built on rock-solid PostgreSQL
- Instant REST and GraphQL APIs
- Built-in authentication and authorization
- Real-time subscriptions
- File storage capabilities

**🔗 Resources**: [GitHub](https://github.com/supabase/supabase) | [Self-Hosting Guide](https://supabase.com/docs/guides/hosting/overview) | [Official Website](https://supabase.com/)

## 🤖 AI & Development Tools
*AI-powered development and content management*

Tools that enhance development workflow and content creation.

### Strapi (Headless CMS)
**🎯 Purpose**: Headless CMS for content management  
**💰 Cost**: Free (Community Edition)  
**⚡ Difficulty**: Intermediate  

Strapi is a leading open-source headless CMS that is 100% JavaScript, fully customizable, and developer-first. Perfect for building APIs and managing content for AI applications or tech blogs.

**Why I use it**: 
- Incredibly flexible for custom APIs
- Define custom data structures easily
- Both REST and GraphQL APIs
- Great admin panel
- Perfect backend for content-driven projects
- Extensive plugin ecosystem

**🔗 Resources**: [GitHub](https://github.com/strapi/strapi) | [Docker Installation Guide](https://docs.strapi.io/dev-docs/installation/docker) | [Official Website](https://strapi.io/)

---

### GitHub Copilot
**🎯 Purpose**: AI-powered code completion  
**💰 Cost**: Paid subscription  
**⚡ Difficulty**: Beginner-friendly  

While not a self-hosted project, GitHub Copilot is an indispensable tool in my developer workflow. It's an AI pair programmer that offers autocomplete-style suggestions as you code.

**Why I recommend it**: 
- Significantly speeds up development
- Reduces boilerplate code writing
- Excellent for learning new languages and frameworks
- Context-aware suggestions
- Supports multiple programming languages

**🔗 Resources**: [Official Website](https://github.com/features/copilot) | [Getting Started](https://docs.github.com/en/copilot/getting-started-with-github-copilot)

---

## 🆘 Getting Help

### Community Resources
- **r/selfhosted** - Active Reddit community for self-hosting enthusiasts
- **r/homelab** - Hardware and infrastructure discussions
- **Awesome-Selfhosted** - Comprehensive list of self-hosted services

### Technical Support
- Most projects have active GitHub issues and discussions
- Many have Discord/Matrix communities
- Documentation is usually excellent for the recommended tools

### Hardware Requirements
- **Minimum**: Raspberry Pi 4 (4GB RAM) or equivalent
- **Recommended**: Old desktop/laptop with 8GB+ RAM
- **Enterprise**: Dedicated server hardware or cloud VPS

## 🌐 Interactive Experience

For a more engaging way to explore this homelab journey:

- **🔗 Live Website**: [your-domain.com](https://your-domain.com)
- **📱 Mobile-Friendly**: Optimized social media-style interface
- **🎮 Interactive**: Click through projects, resources, and documentation

## 🏗️ Website Technology

The companion website is built with:
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Self-hosted via [Coolify](https://coolify.io)
- **Infrastructure**: Running on my Proxmox homelab
- **Security**: HTML sanitization with DOMPurify (see [SECURITY.md](SECURITY.md))

### Local Development

```bash
cd website
npm install
npm run dev
```

Visit `http://localhost:3000` to see the website locally.

### Deploy with Coolify

1. **Repository**: Connect this GitHub repo to Coolify
2. **Build Path**: Set to `website/`
3. **Build Command**: `npm run build`
4. **Output Directory**: `out/`
5. **Environment**: Node.js 18+

---

**⭐ Found this helpful?** Star this repository and share it with fellow developers!

**💬 Questions or suggestions?** Feel free to open an issue or reach out on LinkedIn.