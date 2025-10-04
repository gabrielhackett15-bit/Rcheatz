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
        <div className="section">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">The History of Rcheatz</h2>
            <p className="mb-4">
              Curious about how Rcheatz evolved from a simple HTML experiment to the professional platform it is today? 
              Explore our complete timeline and learn about each milestone in our development journey.
            </p>
            <Link href="https://rcheatz.neocities.org" target="_blank" rel="noopener noreferrer">
              <a className="btn">View Full History</a>
            </Link>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="section">
          <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
          <div className="grid grid-cols-4">
            <div className="card">
              <Link href="/executors">
                <a className="text-white">⚡ Executors</a>
              </Link>
            </div>
            <div className="card">
              <Link href="/edits">
                <a className="text-white">🧬 Edits</a>
              </Link>
            </div>
            <div className="card">
              <Link href="/disclaimer">
                <a className="text-white">📜 Disclaimer</a>
              </Link>
            </div>
            <div className="card">
              <Link href="/version">
                <a className="text-white">📂 Versions</a>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer>
          <p>© 2025 RCheatz Hub — v1.0 Professional</p>
        </footer>
      </div>
    </>
  );
}
