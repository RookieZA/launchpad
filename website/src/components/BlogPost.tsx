import { BlogPostType } from '../types'
import { CalendarDays, Clock } from 'lucide-react'
import DOMPurify from 'isomorphic-dompurify'

interface BlogPostProps {
  post: BlogPostType
  isPreview?: boolean
}

export default function BlogPost({ post, isPreview = false }: BlogPostProps) {
  const content = isPreview ? post.excerpt : post.content
  
  return (
    <article className="blog-card">
      <h2 className="blog-title">{post.title}</h2>
      <div className="blog-metadata">
        <div className="flex items-center gap-2">
          <CalendarDays size={16} />
          <time>{new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</time>
        </div>
        {post.readTime && (
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{post.readTime}</span>
          </div>
        )}
      </div>
      
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag: string) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <div className="blog-content">
        {isPreview ? (
          <>
            <p className="mb-6">{content}</p>
            <a 
              href={`/posts/${post.slug}`}
              className="inline-flex items-center text-primary hover:text-accent transition-colors"
            >
              Read more
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </>
        ) : (
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
          />
        )}
      </div>
    </article>
  )
}