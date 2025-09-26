import { useState, useEffect } from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 backdrop-blur-md bg-white/80">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                RC
              </div>
              <div className="font-bold text-xl text-gray-900">
                Ryan's Feed
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Home
              </a>
              <a 
                href="https://github.com/rookieza" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                GitHub
              </a>
            </nav>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}