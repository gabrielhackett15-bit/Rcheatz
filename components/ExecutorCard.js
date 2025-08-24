import Link from 'next/link';

export default function ExecutorCard({ exec }) {
  return (
    <div className={`executor-card executor-${exec.type}`}>
      <Link href={exec.url} target="_blank" rel="noopener noreferrer">
        <h3>{exec.name}</h3>
        <p>{exec.status}</p>
        {exec.note && <span className="badge">⭐ {exec.note}</span>}
      </Link>
    </div>
  );
}