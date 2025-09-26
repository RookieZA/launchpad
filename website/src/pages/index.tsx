import { GetStaticProps } from 'next'
import Head from 'next/head'
import { format } from 'date-fns'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BlogPostType } from '../types'
import { getAllPosts } from '../utils/posts'

interface HomeProps {
  posts: BlogPostType[]
}

export default function Home({ posts }: HomeProps) {
  // Import homelab projects from the component
  const homelabProjects = [
    {
      id: 'proxmox',
      name: 'Proxmox VE',
      description: 'Hypervisor for running VMs and containers',
      category: 'Infrastructure',
      difficulty: 'Beginner-friendly',
      cost: 'Free',
      purpose: 'Virtualization platform',
      whyIUseIt: [
        'Free with excellent web UI',
        'Supports both VMs and LXC containers',
        'Built-in backup and clustering capabilities'
      ],
      resources: {
        website: 'https://www.proxmox.com/en/proxmox-ve',
        docs: 'https://pve.proxmox.com/wiki/Installation'
      },
      tags: ['virtualization', 'infrastructure', 'homelab']
    },
    {
      id: 'cloudflare-tunnels',
      name: 'Cloudflare Tunnels',
      description: 'Secure remote access without port forwarding',
      category: 'Infrastructure',
      difficulty: 'Intermediate',
      cost: 'Free tier available',
      purpose: 'Secure external access',
      whyIUseIt: [
        'Much more secure than port forwarding',
        'Includes DDoS protection and caching',
        'No firewall configuration needed'
      ],
      resources: {
        docs: 'https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/'
      },
      tags: ['networking', 'security', 'remote-access']
    },
    {
      id: 'coolify',
      name: 'Coolify',
      description: 'Self-hosted alternative to Heroku/Vercel',
      category: 'DevOps',
      difficulty: 'Beginner-friendly',
      cost: 'Free (open-source)',
      purpose: 'Application deployment platform',
      whyIUseIt: [
        'Simplifies deployment process',
        'Automatic builds from GitHub',
        'Handles SSL certificates automatically'
      ],
      resources: {
        github: 'https://github.com/coollabsio/coolify',
        docs: 'https://coolify.io/docs'
      },
      tags: ['deployment', 'devops', 'paas']
    },
    {
      id: 'uptime-kuma',
      name: 'Uptime Kuma',
      description: 'Service uptime monitoring',
      category: 'Monitoring',
      difficulty: 'Beginner-friendly',
      cost: 'Free (open-source)',
      purpose: 'Monitor service availability',
      whyIUseIt: [
        'Simple to set up',
        'Clean dashboard',
        'Multiple notification channels'
      ],
      resources: {
        github: 'https://github.com/louislam/uptime-kuma',
        demo: 'https://demo.uptime.kuma.pet/'
      },
      tags: ['monitoring', 'uptime', 'notifications']
    },
    {
      id: 'supabase',
      name: 'Supabase',
      description: 'Open-source Firebase alternative',
      category: 'Backend',
      difficulty: 'Intermediate',
      cost: 'Free (self-hosted)',
      purpose: 'Backend-as-a-Service',
      whyIUseIt: [
        'All Firebase features with self-hosting',
        'Built on PostgreSQL',
        'Instant APIs and real-time features'
      ],
      resources: {
        github: 'https://github.com/supabase/supabase',
        website: 'https://supabase.com/',
        docs: 'https://supabase.com/docs/guides/hosting/overview'
      },
      tags: ['database', 'backend', 'api', 'postgresql']
    },
    {
      id: 'open-webui',
      name: 'OpenWebUI',
      description: 'Local LLM interface',
      category: 'AI',
      difficulty: 'Intermediate',
      cost: 'Free (open-source)',
      purpose: 'AI model interface',
      whyIUseIt: [
        'Best interface for local LLMs',
        'Supports multiple AI models',
        'Complete privacy (runs locally)'
      ],
      resources: {
        github: 'https://github.com/open-webui/open-webui',
        docs: 'https://docs.openwebui.com/'
      },
      tags: ['ai', 'llm', 'chat', 'privacy']
    }
  ]

  return (
    <>
      <Head>
        <title>Ryan's Digital Feed - Homelab & DevOps</title>
        <meta name="description" content="Follow my journey in self-hosted solutions, homelab configurations, and DevOps practices." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        <Header />
        
        <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Profile Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                RC
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h1 className="font-bold text-gray-900">Ryan Coe</h1>
                  <span className="text-blue-500">✓</span>
                </div>
                <p className="text-gray-500 text-sm">@ryancoe</p>
                <p className="text-gray-700 mt-2">
                  Experienced System Engineer | 15 + Years of Transforming Business Needs into Solutions. 
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  🏠 Building the perfect homelab • 🚀 Scaling infrastructure • 💻 Self-hosted everything
                </p>
              </div>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-4">
            {/* GitHub Repository Share Post */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  RC
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold text-gray-900">Ryan Coe</h3>
                    <span className="text-blue-500">✓</span>
                    <span className="text-gray-500 text-sm">@ryancoe</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Sep 25</span>
                  </div>
                  
                  {/* Tweet Content */}
                  <div className="mt-3">
                    <p className="text-gray-700 leading-relaxed mb-3">
                      🚀 Just discovered this incredible GitHub repo: "every-programmer-should-know" 
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      A curated collection of technical things every software developer should know. Perfect for both beginners and experienced devs looking to fill knowledge gaps!
                    </p>
                    
                    {/* GitHub Card */}
                    <div className="border border-gray-200 rounded-lg p-4 mb-3 bg-gray-50">
                      <div className="flex items-start space-x-3">
                        <svg className="w-8 h-8 text-gray-900 mt-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">mtdvio/every-programmer-should-know</h4>
                          <p className="text-gray-600 text-sm mt-1">
                            A collection of (mostly) technical things every software developer should know about
                          </p>
                          <a 
                            href="https://github.com/mtdvio/every-programmer-should-know" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 text-sm hover:underline mt-1 inline-block"
                          >
                            github.com
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      <span className="text-blue-500 text-sm hover:underline">#programming</span>
                      <span className="text-blue-500 text-sm hover:underline">#learning</span>
                      <span className="text-blue-500 text-sm hover:underline">#github</span>
                      <span className="text-blue-500 text-sm hover:underline">#resources</span>
                    </div>
                    
                    {/* Tweet Actions */}
                    <div className="flex items-center justify-between text-gray-500 text-sm max-w-md">
                      <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>24</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-green-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>18</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        <span>127</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                        <span>45</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {posts.map((post, index) => (
              <div key={post.slug} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                {/* Tweet Header */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    RC
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold text-gray-900">Ryan Coe</h3>
                      <span className="text-blue-500">✓</span>
                      <span className="text-gray-500 text-sm">@ryancoe</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">
                        {format(new Date(post.date), 'MMM d')}
                      </span>
                    </div>
                    
                    {/* Tweet Content */}
                    <div className="mt-3">
                      <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                      <p className="text-gray-700 leading-relaxed mb-3">{post.excerpt}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.tags.slice(0, 3).map((tag: string) => (
                          <span key={tag} className="text-blue-500 text-sm hover:underline">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Tweet Actions */}
                      <div className="flex items-center justify-between text-gray-500 text-sm max-w-md">
                        <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span>Reply</span>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-green-500 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          <span>Repost</span>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span>Like</span>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                          </svg>
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Individual Homelab Project Posts */}
          <div className="space-y-4 mt-8">
            {homelabProjects.map((project, index) => (
              <div key={project.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    RC
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold text-gray-900">Ryan Coe</h3>
                      <span className="text-blue-500">✓</span>
                      <span className="text-gray-500 text-sm">@ryancoe</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Sep {25 - index}</span>
                    </div>
                    
                    <div className="mt-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          project.difficulty === 'Beginner-friendly' ? 'bg-green-100 text-green-700' :
                          project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {project.difficulty}
                        </span>
                        <span className="text-blue-600 font-semibold text-sm">
                          {project.category}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-bold text-gray-900 mb-2">
                        🚀 Just added {project.name} to my homelab stack!
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">{project.description}</p>
                      
                      <div className="bg-gray-50 rounded-lg p-4 mb-3">
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="text-gray-500">💰 Cost:</span>
                            <div className="font-medium text-gray-700">{project.cost}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">🎯 Purpose:</span>
                            <div className="font-medium text-gray-700">{project.purpose}</div>
                          </div>
                        </div>
                        
                        <div className="mt-3">
                          <span className="text-gray-500 text-sm">💡 Why I love it:</span>
                          <ul className="mt-1 space-y-1">
                            {project.whyIUseIt.slice(0, 2).map((reason, reasonIndex) => (
                              <li key={reasonIndex} className="flex items-start text-sm text-gray-700">
                                <span className="text-blue-500 mr-2 mt-0.5">•</span>
                                {reason}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Resource Links */}
                        <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-200">
                          {project.resources.github && (
                            <a 
                              href={project.resources.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300 transition-colors"
                            >
                              📁 GitHub
                            </a>
                          )}
                          {project.resources.website && (
                            <a 
                              href={project.resources.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300 transition-colors"
                            >
                              🌐 Website
                            </a>
                          )}
                          {project.resources.docs && (
                            <a 
                              href={project.resources.docs}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300 transition-colors"
                            >
                              📚 Docs
                            </a>
                          )}
                          {project.resources.demo && (
                            <a 
                              href={project.resources.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300 transition-colors"
                            >
                              🎮 Demo
                            </a>
                          )}
                        </div>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.map((tag: string) => (
                          <span key={tag} className="text-blue-500 text-sm hover:underline">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Tweet Actions */}
                      <div className="flex items-center justify-between text-gray-500 text-sm max-w-md">
                        <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span>12</span>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-green-500 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          <span>8</span>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span>34</span>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                          </svg>
                          <span>7</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
  
  return {
    props: {
      posts,
    },
  }
}