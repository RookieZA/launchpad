import { BlogPostType } from '../types'

interface BlogPostProps {
  post: BlogPostType
  isPreview?: boolean
}

export default function BlogPost({ post, isPreview = false }: BlogPostProps) {
  const content = isPreview ? post.excerpt : post.content
  
  return (
    <article className="terminal-card overflow-hidden">
      <div className="p-8">
        <div className="flex items-center justify-between mb-6 text-sm">
          <div className="text-gray-300 font-mono">
            [TIMESTAMP: {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit'
            }).replace(/\//g, '-')}]
          </div>
          <div className="text-gray-400 font-mono">
            [EXEC_TIME: {post.readTime}]
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl terminal-title mb-6">
          {post.title}
        </h2>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag: string) => (
            <span 
              key={tag}
              className="text-gray-300 text-sm border border-gray-500 px-3 py-1 rounded font-mono bg-gray-800 bg-opacity-50"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="terminal-text font-mono leading-relaxed">
          {isPreview ? (
            <div>
              <p className="text-gray-200 text-base leading-relaxed mb-6">
                {content}
              </p>
              <a 
                href={`#post-${post.slug}`}
                className="inline-flex items-center text-gray-300 hover:text-white font-mono transition-colors border border-gray-500 px-4 py-2 rounded"
              >
                → execute_full_read()
              </a>
            </div>
          ) : (
            <div 
              className="text-gray-200 leading-relaxed space-y-4 [&>h1]:text-gray-100 [&>h1]:text-xl [&>h1]:font-bold [&>h1]:mt-8 [&>h1]:mb-4 [&>h2]:text-gray-100 [&>h2]:text-lg [&>h2]:font-bold [&>h2]:mt-6 [&>h2]:mb-3 [&>h3]:text-gray-200 [&>h3]:font-bold [&>h3]:mt-4 [&>h3]:mb-2 [&>code]:bg-gray-700 [&>code]:text-gray-100 [&>code]:px-1 [&>code]:rounded [&>pre]:bg-gray-700 [&>pre]:border [&>pre]:border-gray-500 [&>pre]:p-4 [&>pre]:rounded [&>pre]:overflow-x-auto [&>pre>code]:bg-transparent [&>pre>code]:text-gray-100 [&>ul]:list-disc [&>ul]:list-inside [&>ul]:space-y-1 [&>ol]:list-decimal [&>ol]:list-inside [&>ol]:space-y-1 [&>blockquote]:border-l-4 [&>blockquote]:border-gray-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-200 [&>a]:text-gray-300 [&>a]:underline [&>a:hover]:text-white"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </div>
        
        {!isPreview && (
          <div className="mt-8 pt-8 border-t border-gray-500">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400 font-mono">
                [AUTHOR: {post.author || 'ryan'}]
              </div>
              <div className="flex space-x-4 text-sm font-mono">
                <button className="text-gray-300 hover:text-white transition-colors border border-gray-500 px-3 py-1 rounded">
                  ./share --twitter
                </button>
                <button className="text-gray-300 hover:text-white transition-colors border border-gray-500 px-3 py-1 rounded">
                  ./share --linkedin
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}