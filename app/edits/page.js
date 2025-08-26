'use client';

import Link from 'next/link';
import Head from 'next/head';
import '../../styles/style.css';
import content from '../../data/content.json';

export default function Edits() {
  const edits = content.edits;

  return (
    <>
      <Head>
        <title>Edits • RCheatz Hub</title>
      </Head>
      
      <header className="navbar">
        <div className="logo">RCheatz</div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/executors">Executors</Link>
          <Link href="/edits" className="active">Edits</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/version">Versions</Link>
        </nav>
      </header>
    
      <main>
        <section className="hero">
          <h1>🧬 Edits</h1>
          <p>Track all UI changes and improvements.</p>
        </section>
      
        <section className="quick-links">
          {edits.map((edit, index) => (
            <div key={index} className="card">
              <h2>{edit.title}</h2>
              {edit.changes.map((change, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: change }} />
              ))}
            </div>
          ))}
        </section>
      </main>
    
      <footer>
        <p>© 2025 RCheatz Hub — Edits</p>
      </footer>
    </>
  );
}
