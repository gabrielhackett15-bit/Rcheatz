import Link from 'next/link';

export default function Home() {
  return (
    <div className="hero">
      <h1>Welcome to Rcheatz</h1>
      <p>Your hub for free Roblox executors</p>
      
      <div className="hero-buttons">
        <Link href="/executors" className="btn-primary">
          Browse Executors
        </Link>
        <Link href="/history" className="btn-secondary">
          View History
        </Link>
      </div>
      
      <div className="features">
        <div className="feature-card">
          <h3>Free Executors</h3>
          <p>Access the best free Roblox executors</p>
        </div>
        <div className="feature-card">
          <h3>Regular Updates</h3>
          <p>Always updated with the latest versions</p>
        </div>
        <div className="feature-card">
          <h3>Safe & Secure</h3>
          <p>All executors are tested and verified</p>
        </div>
      </div>
    </div>
  );
}
