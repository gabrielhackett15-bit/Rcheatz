// I wish a real coder could code this
// components/SideSidebar.js
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SideSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button 
        className="md:hidden fixed top-16 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Side Sidebar */}
      <div className={`fixed md:sticky top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-gray-900 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition duration-300 ease-in-out z-40 overflow-y-auto`}>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-6">Navigation</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <a className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/executors">
                <a className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors">Executors</a>
              </Link>
            </li>
            <li>
              <Link href="/edits">
                <a className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors">Edits</a>
              </Link>
            </li>
            <li>
              <Link href="/disclaimer">
                <a className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors">Disclaimer</a>
              </Link>
            </li>
            <li>
              <Link href="/version">
                <a className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors">Versions</a>
              </Link>
            </li>
            <li>
              <Link href="/history">
                <a className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors">History</a>
              </Link>
            </li>
          </ul>
          
          <div className="mt-8 pt-6 border-t border-gray-800">
            <h3 className="text-lg font-semibold mb-3">Quick Stats</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>12 Executors Available</p>
              <p>Last Updated: Today</p>
              <p>Version: 1.5 Professional Alpha</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
