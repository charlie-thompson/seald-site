import type { Metadata } from 'next';
import SecurityComparison from '@/src/components/sections/SecurityComparison';

export const metadata: Metadata = {
  title: 'Security Comparison | Seald Healthcare',
  description:
    'See why perimeter security fails for healthcare data — and how Seald Healthcare replaces it with persistent, record-level encryption that travels with the data wherever it goes.',
};

export default function SecurityComparisonPage() {
  return <SecurityComparison />;
}
