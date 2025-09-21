import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition duration-300 ease-in-out z-40 bg-gray-900 text-white w-64`}>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-6">Navigation</h2>
          <ul>
            <li className="mb-2">
              <Link href="/">
                <a className="block py-2 px-4 rounded hover:bg-gray-700">Home</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/executors">
                <a className="block py-2 px-4 rounded hover:bg-gray-700">Executors</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/edits">
                <a className="block py-2 px-4 rounded hover:bg-gray-700">Edits</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/disclaimer">
                <a className="block py-2 px-4 rounded hover:bg-gray-700">Disclaimer</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/version">
                <a className="block py-2 px-4 rounded hover:bg-gray-700">Versions</a>
              </Link>
            </li>
          </ul>
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