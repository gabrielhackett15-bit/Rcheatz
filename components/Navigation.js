'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="nav-container">
          <div className="nav-brand">
            <Link href="/">Rcheatz</Link>
          </div>
          
          <div className="nav-menu">
            <Link href="/">Home</Link>
            <Link href="/executors">Executors</Link>
            <Link href="/history">History</Link>
            <Link href="/about">About</Link>
          </div>

          <button 
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <button 
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
          >
            ×
          </button>
          
          <div className="sidebar-menu">
            <h3>Quick Links</h3>
            <Link href="/" onClick={() => setSidebarOpen(false)}>Home</Link>
            <Link href="/executors" onClick={() => setSidebarOpen(false)}>All Executors</Link>
            <Link href="/history" onClick={() => setSidebarOpen(false)}>Site History</Link>
            <Link href="/about" onClick={() => setSidebarOpen(false)}>About Rcheatz</Link>
            
            <h3>Popular Executors</h3>
            <Link href="/executors/krnl" onClick={() => setSidebarOpen(false)}>KRNL</Link>
            <Link href="/executors/synapse" onClick={() => setSidebarOpen(false)}>Synapse X</Link>
            <Link href="/executors/script-ware" onClick={() => setSidebarOpen(false)}>Script Ware</Link>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
