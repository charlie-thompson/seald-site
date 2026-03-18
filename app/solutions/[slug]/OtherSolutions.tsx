'use client';

import Link from 'next/link';
import type { SolutionEntry } from '@/app/solutions/solutionsData';

export default function OtherSolutions({
  solutions,
  currentSlug,
}: {
  solutions: SolutionEntry[];
  currentSlug: string;
}) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8 }}>
      {solutions
        .filter((s) => s.slug !== currentSlug)
        .map((s) => (
          <Link
            key={s.slug}
            href={`/solutions/${s.slug}`}
            style={{
              display: 'inline-flex',
              padding: '7px 14px',
              borderRadius: 8,
              background: 'rgba(246,250,255,0.8)',
              border: '1px solid rgba(230,238,248,0.9)',
              fontSize: 13,
              fontWeight: 500,
              color: '#3B5578',
              textDecoration: 'none',
              transition: 'border-color 0.15s ease, color 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(22,119,255,0.25)';
              e.currentTarget.style.color = '#1677FF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(230,238,248,0.9)';
              e.currentTarget.style.color = '#3B5578';
            }}
          >
            {s.label}
          </Link>
        ))}
    </div>
  );
}
