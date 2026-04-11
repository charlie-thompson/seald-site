import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { solutions, solutionsBySlug } from '@/app/solutions/solutionsData';
import { solutionsFullContent } from '@/app/solutions/solutionsFullContent';
import SolutionPageShell from '@/app/components/SolutionPageShell';
import HospitalHeroAnimation from '@/app/components/HospitalHeroAnimation';

const HERO_ANIMATIONS: Record<string, React.ReactNode> = {
  'hospitals-health-systems': <HospitalHeroAnimation />,
};

// ── Static params ──────────────────────────────────────────────────────────
export function generateStaticParams() {
  return solutions.map(({ slug }) => ({ slug }));
}

// ── Per-page metadata ──────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionsBySlug[slug];
  if (!solution) return {};
  return {
    title: `${solution.label} | Seald Healthcare`,
    description: solution.tagline,
  };
}

// ── Page ───────────────────────────────────────────────────────────────────
export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutionsBySlug[slug];
  if (!solution) notFound();

  const content = solutionsFullContent[slug];
  if (!content) notFound();

  return (
    <SolutionPageShell
      content={content}
      solutions={solutions}
      currentSlug={slug}
      heroAnimation={HERO_ANIMATIONS[slug]}
    />
  );
}
