export interface BlogPostType {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
  author?: string
  readTime?: string
}

export interface HomelabProject {
  id: string
  name: string
  description: string
  category: string
  difficulty: 'Beginner-friendly' | 'Intermediate' | 'Advanced'
  cost: string
  purpose: string
  whyIUseIt: string[]
  keyFeatures?: string[]
  resources: {
    github?: string
    website?: string
    docs?: string
    demo?: string
  }
  tags: string[]
}