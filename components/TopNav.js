// components/TopNav.js
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-indigo-400">RCheatz</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
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
          <Link href="/history">
            <a className="hover:text-indigo-400 transition-colors">History</a>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md bg-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-3">
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
            <Link href="/history">
              <a className="hover:text-indigo-400 transition-colors">History</a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
