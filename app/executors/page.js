'use client';

import Link from 'next/link';
import Head from 'next/head';
import '../../data/content.json'
import executorsData from '@/data/executors.json';
import ExecutorCard from '@/components/ExecutorCard';

export default function Executors() {
  return (
    <>
      <Head>
        <title>RCheatz Hub • v0.7 Statfessional</title>
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

      <main>
        <section className="executors">
          <h1>⚡ Executors</h1>
          <p>All free executors with their status & safety details.</p>

          {/* Cards will be injected here */}
          <div className="executors-grid">
            {executorsData.map((exec) => (
              <ExecutorCard key={exec.name} exec={exec} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
