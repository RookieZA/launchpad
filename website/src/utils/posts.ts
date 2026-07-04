import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { BlogPostType } from '../types'

const postsDirectory = path.join(process.cwd(), 'content/posts')

// Renders trusted, author-authored markdown from content/posts to HTML.
// Not for untrusted input: remark-html does not sanitize its output.
async function markdownToHtml(markdown: string): Promise<string> {
  const processed = await remark().use(html).process(markdown)
  return processed.toString()
}

export async function getAllPosts(): Promise<BlogPostType[]> {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return {
          slug,
          title: matterResult.data.title || 'Untitled',
          date: matterResult.data.date || new Date().toISOString(),
          excerpt: matterResult.data.excerpt || '',
          content: await markdownToHtml(matterResult.content),
          tags: matterResult.data.tags || [],
          author: matterResult.data.author || 'Ryan',
          readTime: matterResult.data.readTime || '5 min read',
        } as BlogPostType
      })
  )

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}