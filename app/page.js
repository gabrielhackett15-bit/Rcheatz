// app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Welcome to RCheatz Hub</h1>
        <p className="text-gray-400 mb-8">The ultimate free executor link hub. Fast, simple, and professional.</p>
        
        {/* History Link Section */}
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4 text-white">The History of Rcheatz</h2>
          <p className="text-gray-300 mb-4">
            Curious about how Rcheatz evolved from a simple HTML experiment to the professional platform it is today? 
            Explore our complete timeline and learn about each milestone in our development journey.
          </p>
          <Link href="https://rcheatz.neocities.org" target="_blank" rel="noopener noreferrer">
            <a className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              View Full History
            </a>
          </Link>
        </div>
        
        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            <Link href="/executors">
              <a className="text-white">⚡ Executors</a>
            </Link>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <Link href="/edits">
              <a className="text-white">🧬 Edits</a>
            </Link>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <Link href="/disclaimer">
              <a className="text-white">📜 Disclaimer</a>
            </Link>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <Link href="/version">
              <a className="text-white">📂 Versions</a>
            </Link>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-800">
          <p>© 2025 RCheatz Hub — v1.0 Professional</p>
        </footer>
      </div>
    </div>
  );
}
