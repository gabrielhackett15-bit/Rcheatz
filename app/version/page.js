'use client';

import Link from 'next/link';
import Head from 'next/head';
import '../../styles/style.css';
import content from '../../data/content.json';

export default function Version() {
  const versions = content.versions;

  return (
    <>
      <Head>
        <title>Versions • RCheatz Hub</title>
      </Head>
      
      <header className="navbar">
        <div className="logo">RCheatz</div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/executors">Executors</Link>
          <Link href="/edits">Edits</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/version" className="active">Versions</Link>
        </nav>
      </header>
    
      <main>
        <section className="hero">
          <h1>📂 Versions</h1>
          <p>Timeline of updates and changes.</p>
        </section>
      
        <section className="quick-links">
          <div className="card">
            {versions.map((v, index) => (
              <p key={index}>
                <b>{v.version}</b> – {v.note}
              </p>
            ))}
          </div>
        </section>
      </main>
    
      <footer>
        <p>© 2025 RCheatz Hub — Versions</p>
      </footer>
    </>
  );
}