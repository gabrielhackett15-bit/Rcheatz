import Script from 'next/script';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>RCheatz Hub • v1.0 Professional</title>
      </Head>
      
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">RCheatz</div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/executors">Executors</Link>
          <Link href="/edits">Edits</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/version">Versions</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to RCheatz Hub</h1>
        <p>The ultimate free executor link hub. Fast, simple, and professional.</p>
      </section>

      {/* Quick Links */}
      <section className="quick-links">
        <div className="card"><Link href="/executors">⚡ Executors</Link></div>
        <div className="card"><Link href="/edits">🧬 Edits</Link></div>
        <div className="card"><Link href="/disclaimer">📜 Disclaimer</Link></div>
        <div className="card"><Link href="/version">📂 Versions</Link></div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 RCheatz Hub — v1.0 Professional</p>
      </footer>
    </>
  );
}