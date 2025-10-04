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
      </section>

      {/* Footer */}
      <footer className="p-4 bg-gray-900 text-white">
        <p>© 2025 RCheatz Hub — v1.0 Professional</p>
      </footer>
    </>
  );
}
