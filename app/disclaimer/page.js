'use client';

import Link from 'next/link';
import Head from 'next/head';
import '@/styles/style.css';

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer • RCheatz Hub</title>
      </Head>
      
      <header className="navbar">
        <div className="logo">RCheatz</div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/executors">Executors</Link>
          <Link href="/edits">Edits</Link>
          <Link href="/disclaimer" className="active">Disclaimer</Link>
          <Link href="/version">Versions</Link>
        </nav>
      </header>
    
      <section className="hero">
        <h1>📜 Disclaimer</h1>
        <p>Important information regarding usage.</p>
      </section>
    
      <section className="quick-links">
        <div className="card">
          <p>This website only links to executors hosted elsewhere.</p>
          <p>We do not own or distribute executors.</p>
          <p>All executors are free only. Paid executors are not supported.(???)</p>
        </div>
      </section>
    
      <footer>
        <p>© 2025 RCheatz Hub — Disclaimer</p>
      </footer>
    </>
  );
}