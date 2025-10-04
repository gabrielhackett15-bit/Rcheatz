// components/TopNav.js
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-3 sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold text-indigo-400">RCheatz</div>
        
        {/* Desktop Navigation - Compact */}
        <div className="hidden md:flex space-x-4 text-sm">
          <Link href="/">
            <a className="hover:text-indigo-400 transition-colors">Home</a>
          </Link>
          <Link href="/executors">
            <a className="hover:text-indigo-400 transition-colors">Executors</a>
          </Link>
          <Link href="/edits">
            <a className="hover:text-indigo-400 transition-colors">Edits</a>
          </Link>
          <Link href="/disclaimer">
            <a className="hover:text-indigo-400 transition-colors">Disclaimer</a>
          </Link>
          <Link href="/version">
            <a className="hover:text-indigo-400 transition-colors">Versions</a>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-2 pb-2">
          <div className="flex flex-col space-y-2 text-sm">
            <Link href="/">
              <a className="hover:text-indigo-400 transition-colors">Home</a>
            </Link>
            <Link href="/executors">
              <a className="hover:text-indigo-400 transition-colors">Executors</a>
            </Link>
            <Link href="/edits">
              <a className="hover:text-indigo-400 transition-colors">Edits</a>
            </Link>
            <Link href="/disclaimer">
              <a className="hover:text-indigo-400 transition-colors">Disclaimer</a>
            </Link>
            <Link href="/version">
              <a className="hover:text-indigo-400 transition-colors">Versions</a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
