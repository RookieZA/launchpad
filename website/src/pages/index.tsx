import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import BlogPost from '../components/BlogPost'
import ThemeToggle from '../components/ThemeToggle'
import { BlogPostType } from '../types'
import { getAllPosts } from '../utils/posts'

interface HomeProps {
  posts: BlogPostType[]
}

export default function Home({ posts }: HomeProps) {
  const [activeTab, setActiveTab] = useState('for-you');

  // Enhanced homelab projects from README
  const homelabProjects = [
    {
      id: 'proxmox',
      name: 'Proxmox VE',
      description: 'Enterprise-grade hypervisor for running VMs and containers with built-in clustering',
      category: 'Infrastructure',
      difficulty: 'Beginner-friendly',
      cost: 'Free',
      purpose: 'Virtualization platform',
      whyIUseIt: [
        'Free with excellent web UI and enterprise features',
        'Supports both VMs and LXC containers seamlessly',
        'Built-in backup, clustering, and high availability'
      ],
      resources: {
        website: 'https://www.proxmox.com/en/proxmox-ve',
        docs: 'https://pve.proxmox.com/wiki/Installation',
        github: 'https://github.com/proxmox'
      },
      tags: ['virtualization', 'infrastructure', 'homelab']
    },
    {
      id: 'cloudflare-tunnels',
      name: 'Cloudflare Tunnels',
      description: 'Zero-trust network access solution that secures homelab services without port forwarding',
      category: 'Infrastructure',
      difficulty: 'Intermediate',
      cost: 'Free tier available',
      purpose: 'Secure remote access',
      whyIUseIt: [
        'Much more secure than traditional port forwarding',
        'Includes Cloudflare\'s DDoS protection and caching',
        'No need to configure firewall rules'
      ],
      resources: {
        docs: 'https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/tunnel-guide/'
      },
      tags: ['networking', 'security', 'remote-access', 'zero-trust']
    },
    {
      id: 'coolify',
      name: 'Coolify',
      description: 'Self-hosted PaaS alternative to Heroku/Vercel with git-based deployments',
      category: 'DevOps',
      difficulty: 'Beginner-friendly',
      cost: 'Free (open-source)',
      purpose: 'Application deployment platform',
      whyIUseIt: [
        'Dramatically simplifies deployment process',
        'Automatic builds from GitHub repositories',
        'Handles SSL certificates automatically',
        'Supports multiple programming languages and frameworks'
      ],
      resources: {
        github: 'https://github.com/coollabsio/coolify',
        docs: 'https://coolify.io/docs'
      },
      tags: ['deployment', 'devops', 'paas', 'automation']
    },
    {
      id: 'n8n',
      name: 'n8n',
      description: 'Powerful workflow automation platform that started my self-hosting journey',
      category: 'Automation',
      difficulty: 'Beginner-friendly',
      cost: 'Free (open-source)',
      purpose: 'Workflow automation',
      whyIUseIt: [
        'Perfect entry point into self-hosting',
        'Visual workflow builder makes automation accessible',
        'Connects to hundreds of different services',
        'Great for learning API integrations',
        'Excellent documentation and community'
      ],
      resources: {
        github: 'https://github.com/n8n-io/n8n',
        docs: 'https://docs.n8n.io/',
        community: 'https://community.n8n.io/'
      },
      tags: ['automation', 'workflows', 'api', 'integration', 'beginner'],
      featured: true,
      story: 'watch this space :D'
    },
    {
      id: 'uptime-kuma',
      name: 'Uptime Kuma',
      description: 'Beautiful and feature-rich monitoring solution for tracking service availability',
      category: 'Monitoring',
      difficulty: 'Beginner-friendly',
      cost: 'Free (open-source)',
      purpose: 'Service uptime monitoring',
      whyIUseIt: [
        'Incredibly simple to set up',
        'Clean, at-a-glance dashboard',
        'Multiple notification channels',
        'Supports various monitoring protocols'
      ],
      resources: {
        github: 'https://github.com/louislam/uptime-kuma',
        demo: 'https://demo.uptime.kuma.pet/'
      },
      tags: ['monitoring', 'uptime', 'notifications', 'alerting']
    },
    {
      id: 'plausible',
      name: 'Plausible Analytics',
      description: 'A lightweight, open-source, and privacy-friendly alternative to Google Analytics',
      category: 'Analytics',
      difficulty: 'Intermediate',
      cost: 'Free (self-hosted) / Paid (cloud)',
      purpose: 'Privacy-focused web analytics',
      whyIUseIt: [
        'Privacy-focused (no personal data collection)',
        'Lightweight and fast',
        'GDPR compliant out of the box',
        'Clean, intuitive interface'
      ],
      resources: {
        github: 'https://github.com/plausible/analytics',
        docs: 'https://plausible.io/docs/self-hosting'
      },
      tags: ['analytics', 'privacy', 'monitoring', 'web']
    },
    {
      id: 'openwebui',
      name: 'OpenWebUI',
      description: 'User-friendly and feature-rich web interface for local Large Language Models',
      category: 'AI',
      difficulty: 'Intermediate',
      cost: 'Free (open-source)',
      purpose: 'Local LLM interface',
      whyIUseIt: [
        'Best interface for local LLMs',
        'Supports multiple AI models',
        'RAG (Retrieval-Augmented Generation) capabilities',
        'ChatGPT-like user experience',
        'Complete privacy (runs locally)'
      ],
      resources: {
        github: 'https://github.com/open-webui/open-webui',
        docs: 'https://docs.openwebui.com/'
      },
      tags: ['ai', 'llm', 'machine-learning', 'privacy']
    },
    {
      id: 'docmost',
      name: 'Docmost',
      description: 'An open-source, self-hosted alternative to Confluence for team documentation and knowledge sharing',
      category: 'Documentation',
      difficulty: 'Beginner-friendly',
      cost: 'Free (open-source)',
      purpose: 'Team documentation and wiki',
      whyIUseIt: [
        'Clean, modern interface',
        'Real-time collaboration',
        'Markdown support',
        'Organized document structure',
        'Great for technical documentation'
      ],
      resources: {
        github: 'https://github.com/docmost/docmost',
        docs: 'https://docmost.com/docs'
      },
      tags: ['documentation', 'wiki', 'collaboration', 'markdown']
    },
    {
      id: 'supabase',
      name: 'Supabase',
      description: 'Open-source Firebase alternative with PostgreSQL database, authentication, instant APIs, and more',
      category: 'Backend',
      difficulty: 'Intermediate',
      cost: 'Free (self-hosted) / Paid tiers (cloud)',
      purpose: 'Backend-as-a-Service',
      whyIUseIt: [
        'All the power of Firebase with self-hosting flexibility',
        'Built on rock-solid PostgreSQL',
        'Instant REST and GraphQL APIs',
        'Built-in authentication and authorization',
        'Real-time subscriptions'
      ],
      resources: {
        github: 'https://github.com/supabase/supabase',
        docs: 'https://supabase.com/docs/guides/hosting/overview',
        website: 'https://supabase.com/'
      },
      tags: ['database', 'backend', 'api', 'authentication']
    }
  ];

  const trendingTopics = [
    { tag: 'homelab', tweets: '12.3K' },
    { tag: 'selfhosted', tweets: '8.7K' },
    { tag: 'devops', tweets: '15.2K' },
    { tag: 'proxmox', tweets: '3.1K' },
    { tag: 'docker', tweets: '24.8K' },
  ];

  const whoToFollow = [
    { name: 'TechnoTim', username: 'TechnoTimLive', description: 'Homelab & Self-Hosting Content' },
    { name: 'NetworkChuck', username: 'NetworkChuck_', description: 'Networking & IT Education' },
    { name: 'Jeff Geerling', username: 'geerlingguy', description: 'Ansible & Infrastructure' },
  ];

  return (
    <>
      <Head>
        <title>My Homelab Journey</title>
        <meta name="description" content="Follow my personal homelab journey and discover insights about self-hosting, DevOps, and infrastructure automation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className="main-container">
        <div className="content-wrapper">
          {/* Top bar */}
          <div className="flex justify-end mb-8">
            <ThemeToggle />
          </div>

          {/* Hero Section */}
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-heading">
              My Personal Homelab Journey
            </h1>
            <p className="text-lg md:text-xl text-secondary max-w-2xl">
              From a single Raspberry Pi to a full-fledged homelab - documenting my adventures in self-hosting, automation, and infrastructure.
            </p>
          </header>

          {/* Filter Tabs */}
          <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`nav-link ${activeTab === 'all' ? 'active' : ''}`}
            >
              All Posts
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('tutorials')}
              className={`nav-link ${activeTab === 'tutorials' ? 'active' : ''}`}
            >
              Tutorials
            </button>
          </div>

          {/* Blog Posts */}
          <div className="post-grid">
            {posts.map((post) => (
              <BlogPost
                key={post.slug}
                post={post}
                isPreview={true}
              />
            ))}

            {/* Featured Projects */}
            {activeTab !== 'tutorials' && homelabProjects.map((project) => (
              <article key={project.id} className={`blog-card ${project.featured ? 'border-l-4 border-l-accent' : ''}`}>
                <h2 className="blog-title">
                  {project.name}
                  {project.featured && (
                    <span className="ml-2 text-sm px-2 py-1 bg-accent text-white rounded-full">
                      Journey Start
                    </span>
                  )}
                </h2>
                <div className="blog-metadata">
                  <div className="flex items-center gap-2">
                    <span className="text-secondary">{project.category}</span>
                    <span className="text-secondary">•</span>
                    <span className="text-secondary">{project.difficulty}</span>
                  </div>
                </div>
                <div className="blog-content">
                  <p className="mb-6">{project.description}</p>
                  
                  {project.story && (
                    <div className="mb-6 p-4 bg-surface rounded-lg border-l-4 border-l-primary">
                      <h3 className="font-semibold mb-2 text-primary">My Journey:</h3>
                      <p className="text-secondary italic">{project.story}</p>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Why I use it:</h3>
                    <ul className="list-disc list-inside space-y-1 text-secondary">
                      {project.whyIUseIt.map((reason, index) => (
                        <li key={index}>{reason}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.resources.github && (
                    <a
                      href={project.resources.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 text-primary hover:text-accent transition-colors"
                    >
                      View on GitHub
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()

  return {
    props: {
      posts,
    },
  }
}