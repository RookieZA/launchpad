import { ReactNode, useState, useEffect } from 'react';
import { Heart, Share, BookmarkPlus } from 'lucide-react';

interface TwitterTweetProps {
  children: ReactNode;
  className?: string;
}

export function TwitterTweet({ children, className = '' }: TwitterTweetProps) {
  return (
    <article className={`twitter-card p-4 cursor-pointer transition-colors duration-200 ${className}`}>
      {children}
    </article>
  );
}

interface TweetCardProps {
  author: {
    name: string;
    username: string;
    avatar: string;
    verified?: boolean;
  };
  content: string;
  timestamp: string;
  engagement?: {
    comments: number;
    retweets: number;
    likes: number;
    shares?: number;
  };
  hashtags?: string[];
  media?: {
    type: 'image' | 'link';
    url: string;
    title?: string;
    description?: string;
    domain?: string;
  };
}

export function TweetCard({ author, content, timestamp, engagement, hashtags, media }: TweetCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(engagement?.likes || 0);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  return (
    <TwitterTweet>
      <div className="flex space-x-3">
        {/* Avatar */}
        <div className="twitter-avatar w-12 h-12">
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {author.avatar}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center space-x-1 mb-1">
            <span className="twitter-text font-bold truncate">{author.name}</span>
            {author.verified && (
              <div className="twitter-verified flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            <span className="twitter-text-secondary truncate">@{author.username}</span>
            <span className="twitter-text-secondary">·</span>
            <span className="twitter-text-secondary text-sm">{timestamp}</span>
            <div className="flex-1"></div>

          </div>

          {/* Tweet Content */}
          <div className="space-y-3">
            <div className="twitter-text leading-5 whitespace-pre-wrap">
              {content}
              {hashtags && hashtags.length > 0 && (
                <div className="mt-2 space-x-1">
                  {hashtags.map((tag, index) => (
                    <span key={index} className="twitter-hashtag">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Media */}
            {media && (
              <div className="mt-3">
                {media.type === 'link' && (
                  <div className="twitter-border border rounded-2xl overflow-hidden">
                    <div className="p-3">
                      <div className="twitter-text-secondary text-sm mb-1">{media.domain}</div>
                      <div className="twitter-text font-semibold mb-1 line-clamp-2">{media.title}</div>
                      <div className="twitter-text-secondary text-sm line-clamp-2">{media.description}</div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Minimal Engagement */}
            <div className="flex items-center justify-between max-w-md pt-2">
              <button 
                className={`twitter-engagement-button group like ${isLiked ? 'text-red-500' : ''}`}
                onClick={handleLike}
              >
                <div className="p-2 rounded-full group-hover:bg-red-500/10 transition-colors">
                  <Heart 
                    size={18} 
                    className={`group-hover:text-red-500 transition-colors ${isLiked ? 'fill-current animate-heart' : ''}`} 
                  />
                </div>
                <span className="group-hover:text-red-500 transition-colors">
                  {likeCount}
                </span>
              </button>

              <button 
                className={`twitter-engagement-button group ${isSaved ? 'text-blue-500' : ''}`}
                onClick={handleSave}
              >
                <div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-colors">
                  <BookmarkPlus 
                    size={18} 
                    className={`group-hover:text-blue-500 transition-colors ${isSaved ? 'fill-current' : ''}`} 
                  />
                </div>
              </button>

              <button 
                className="twitter-engagement-button group"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-colors">
                  <Share size={18} className="group-hover:text-blue-500 transition-colors" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </TwitterTweet>
  );
}

interface ProjectTweetProps {
  project: {
    id: string;
    name: string;
    description: string;
    category: string;
    difficulty: string;
    cost: string;
    purpose: string;
    whyIUseIt: string[];
    resources: {
      github?: string;
      website?: string;
      docs?: string;
      demo?: string;
    };
    tags: string[];
  };
}

export function ProjectTweet({ project }: ProjectTweetProps) {
  const getDifficultyEmoji = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner-friendly': return '🟢';
      case 'Intermediate': return '🟡';
      case 'Advanced': return '🔴';
      default: return '🔵';
    }
  };

  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case 'Infrastructure': return '🏗️';
      case 'DevOps': return '⚙️';
      case 'Monitoring': return '📊';
      case 'Backend': return '💾';
      case 'AI': return '🤖';
      default: return '💻';
    }
  };

  // Generate deterministic "random" values based on project ID
  const hashCode = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
  };

  const projectHash = hashCode(project.id);
  const likes = ((projectHash >> 16) % 100) + 25;

  return (
    <TweetCard
      author={{
        name: 'Ryan Coe',
        username: 'ryancoe',
        avatar: 'RC',
        verified: true,
      }}
      content={`${project.name}

${project.description}

${getDifficultyEmoji(project.difficulty)} ${project.difficulty}
${getCategoryEmoji(project.category)} ${project.category}
💰 ${project.cost}

Key benefits:
${project.whyIUseIt.slice(0, 2).map(reason => `• ${reason}`).join('\n')}

#homelab #selfhosted`}
      timestamp="2h"
      engagement={{
        comments: 0,
        retweets: 0,
        likes,
      }}
      hashtags={project.tags}
      media={project.resources.github ? {
        type: 'link',
        url: project.resources.github,
        title: `${project.name} - Self-hosted ${project.category}`,
        description: project.description,
        domain: 'github.com'
      } : undefined}
    />
  );
}