import { useState } from 'react';
import Link from 'next/link';
import { Home, Search, Bell, Bookmark, User, MoreHorizontal, List } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [activeTab, setActiveTab] = useState('home');

  const navigationItems = [
    { id: 'home', icon: Home, label: 'Home', href: '#' },
    { id: 'feed', icon: List, label: 'Feed', href: '/feed' },
    { id: 'bookmarks', icon: Bookmark, label: 'Saved', href: '#' },
    { id: 'profile', icon: User, label: 'Profile', href: '#' },
  ];
<script defer data-domain="launchpad.servr.co.za" src="https://plausible-tswscokgw4c8coo4kccwscww.servr.co.za/js/script.hash.outbound-links.js"></script>
  return (
    <div className="twitter-main-container">
      <div className="twitter-content">
        {/* Left Sidebar */}
        <div className="twitter-left-sidebar">
          <div className="space-y-2">
            {/* Twitter Logo */}
            <div className="p-3 mb-8">
              <div className="w-8 h-8 twitter-blue">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                
                // Use Link for real routes; keep <a> for tabs
                if (item.href && item.href !== '#') {
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={`flex items-center space-x-4 px-3 py-3 rounded-full transition-colors duration-200 group ${
                        isActive 
                          ? 'twitter-text font-bold' 
                          : 'twitter-text-secondary hover:twitter-text hover:twitter-bg-hover'
                      }`}
                    >
                      <Icon size={26} />
                      <span className="text-xl hidden xl:block">{item.label}</span>
                    </Link>
                  );
                }

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(item.id);
                    }}
                    className={`flex items-center space-x-4 px-3 py-3 rounded-full transition-colors duration-200 group ${
                      isActive 
                        ? 'twitter-text font-bold' 
                        : 'twitter-text-secondary hover:twitter-text hover:twitter-bg-hover'
                    }`}
                  >
                    <Icon size={26} className={isActive ? 'twitter-blue' : ''} />
                    <span className="text-xl hidden xl:block">{item.label}</span>
                  </a>
                );
              })}
              
              <div className="pt-4">
                <button className="twitter-button-primary w-full xl:w-auto xl:px-8 py-3 text-base">
                  <span className="hidden xl:block">Tweet</span>
                  <svg className="w-6 h-6 xl:hidden" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </button>
              </div>
            </nav>

            {/* User Profile Section */}
            <div className="absolute bottom-4 left-4 right-4 space-y-4">
              <ThemeToggle />
              <div className="flex items-center space-x-3 p-3 rounded-full hover:twitter-bg-hover transition-colors cursor-pointer">
                <div className="twitter-avatar w-10 h-10">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    RC
                  </div>
                </div>
                <div className="hidden xl:block flex-1">
                  <div className="twitter-text font-bold">Ryan Coe</div>
                  <div className="twitter-text-secondary text-sm">@ryancoe</div>
                </div>
                <MoreHorizontal size={20} className="twitter-text-secondary hidden xl:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}