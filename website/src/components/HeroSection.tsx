import { ReactNode } from 'react';
import { Github, MapPin, Calendar, Code, Server, Zap } from 'lucide-react';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = '' }: HeroSectionProps) {
  const stats = [
    { icon: Server, label: 'Services Running', value: '12+' },
    { icon: Code, label: 'Years Experience', value: '15+' },
    { icon: Zap, label: 'Uptime', value: '99.9%' },
  ];

  return (
    <section className={`animate-fade-in-up ${className}`}>
      <div className="card-modern p-8 text-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-900/10 dark:via-gray-800 dark:to-purple-900/10"></div>
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-10 blur-xl"></div>
        
        <div className="relative">
          {/* Avatar */}
          <div className="relative inline-block mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl mx-auto transform hover:scale-105 transition-all duration-300">
              RC
            </div>
            <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20 blur-lg"></div>
            
            {/* Status indicator */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-2 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-3">
              Ryan Coe
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mono text-sm">@ryancoe • System Engineer</p>
          </div>

          {/* Bio */}
          <div className="space-y-3 mb-8 max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Experienced System Engineer</strong> with 15+ years of transforming business needs into scalable solutions
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <MapPin size={16} />
                <span>Remote</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>Joined 2024</span>
              </div>
            </div>
          </div>

          {/* Key highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div className="text-2xl mb-2">🏠</div>
              <div className="font-semibold text-gray-900 dark:text-white">Homelab Enthusiast</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Self-hosted everything</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div className="text-2xl mb-2">🚀</div>
              <div className="font-semibold text-gray-900 dark:text-white">Infrastructure Expert</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Scaling with confidence</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div className="text-2xl mb-2">💻</div>
              <div className="font-semibold text-gray-900 dark:text-white">DevOps Advocate</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Automation & efficiency</div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mx-auto mb-2">
                  <stat.icon size={16} className="text-white" />
                </div>
                <div className="font-bold text-xl text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://github.com/rookieza" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github size={16} className="mr-2" />
              Follow on GitHub
            </a>
            <button className="btn-secondary">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Let&apos;s Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}