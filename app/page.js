// app/page.js
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to RCheatz Hub</h1>
        <p className="text-lg">The ultimate free executor link hub. Fast, simple, and professional.</p>
      </section>

      {/* Quick Links */}
      <section className="quick-links p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="card bg-gray-800 p-4 rounded-lg">
            <a href="/executors" className="text-white">⚡ Executors</a>
          </div>
          <div className="card bg-gray-800 p-4 rounded-lg">
            <a href="/edits" className="text-white">🧬 Edits</a>
          </div>
          <div className="card bg-gray-800 p-4 rounded-lg">
            <a href="/disclaimer" className="text-white">📜 Disclaimer</a>
          </div>
          <div className="card bg-gray-800 p-4 rounded-lg">
            <a href="/version" className="text-white">📂 Versions</a>
          </div>
        </div>
        // components/HistoryLink.js
import Link from 'next/link';

export default function HistoryLink() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-bold mb-4 text-white">The History of Rcheatz</h2>
      <p className="text-gray-300 mb-4">
       History of us
      </p>
      <Link href="https://rcheatz.neocities.org" target="_blank" rel="noopener noreferrer">
        <a className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
          View Full History
        </a>
      </Link>
    </div>
  );
}
      </section>

      {/* Footer */}
      <footer className="p-4 bg-gray-900 text-white">
        <p>© 2025 RCheatz Hub — v1.0 Professional</p>
      </footer>
    </>
  );
}
