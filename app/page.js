// app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section with Colorful Background */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to RCheatz Hub</h1>
          <p>The ultimate free executor link hub. Fast, simple, and professional.</p>
        </div>
      </section>
      
      <div className="container">
        {/* History Link Section */}
        <div className="card mb-4">
          <h2 className="text-xl font-bold mb-3">The History of Rcheatz</h2>
          <p className="mb-3">
            Curious about how Rcheatz evolved from a simple HTML experiment to the professional platform it is today? 
            Explore our complete timeline and learn about each milestone in our development journey.
          </p>
          <Link href="https://rcheatz.neocities.org" target="_blank" rel="noopener noreferrer">
            <a className="btn">View Full History</a>
          </Link>
        </div>
        
        {/* Quick Links */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <div className="grid grid-cols-4 gap-3">
            <div className="card p-3">
              <Link href="/executors">
                <a className="text-white">⚡ Executors</a>
              </Link>
            </div>
            <div className="card p-3">
              <Link href="/edits">
                <a className="text-white">🧬 Edits</a>
              </Link>
            </div>
            <div className="card p-3">
              <Link href="/disclaimer">
                <a className="text-white">📜 Disclaimer</a>
              </Link>
            </div>
            <div className="card p-3">
              <Link href="/version">
                <a className="text-white">📂 Versions</a>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-6 pt-4 border-t border-gray-800">
          <p>© 2025 RCheatz Hub — v1.0 Professional</p>
        </footer>
      </div>
    </>
  );
}
