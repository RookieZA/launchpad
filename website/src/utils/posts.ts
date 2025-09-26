import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPostType } from '../types'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export function getAllPosts(): BlogPostType[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        title: matterResult.data.title || 'Untitled',
        date: matterResult.data.date || new Date().toISOString(),
        excerpt: matterResult.data.excerpt || '',
        content: matterResult.content,
        tags: matterResult.data.tags || [],
        author: matterResult.data.author || 'Ryan',
        readTime: matterResult.data.readTime || '5 min read',
      } as BlogPostType
    })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}