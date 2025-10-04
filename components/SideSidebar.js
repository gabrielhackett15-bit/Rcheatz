// components/SideSidebar.js
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SideSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button - positioned correctly */}
      <button 
        className="md:hidden fixed top-12 left-2 z-50 p-1 bg-gray-800 text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Side Sidebar - Simplified */}
      <div className={`fixed md:sticky top-12 left-0 h-[calc(100vh-3rem)] w-48 bg-gray-900 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition duration-300 ease-in-out z-40 overflow-y-auto border-r border-gray-800`}>
        <div className="p-3">
          <h2 className="text-lg font-bold mb-4">Navigation</h2>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/">
                <a className="block py-1 px-3 rounded hover:bg-gray-800">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/executors">
                <a className="block py-1 px-3 rounded hover:bg-gray-800">Executors</a>
              </Link>
            </li>
            <li>
              <Link href="/edits">
                <a className="block py-1 px-3 rounded hover:bg-gray-800">Edits</a>
              </Link>
            </li>
            <li>
              <Link href="/disclaimer">
                <a className="block py-1 px-3 rounded hover:bg-gray-800">Disclaimer</a>
              </Link>
            </li>
            <li>
              <Link href="/version">
                <a className="block py-1 px-3 rounded hover:bg-gray-800">Versions</a>
              </Link>
            </li>
          </ul>
          
          <div className="mt-6 pt-3 border-t border-gray-800">
            <h3 className="text-sm font-semibold mb-2">Stats</h3>
            <div className="space-y-1 text-xs text-gray-400">
              <p>24 Executors</p>
              <p>Updated: Today</p>
              <p>v1.0 Professional</p>
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
