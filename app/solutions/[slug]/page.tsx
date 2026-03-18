import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { solutions, solutionsBySlug } from '@/app/solutions/solutionsData';
import OtherSolutions from './OtherSolutions';

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

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* ── Hero ── */}
      <section
        style={{
          position: 'relative',
          padding: '96px 24px 80px',
          background:
            'radial-gradient(900px 420px at 15% 30%, rgba(34,211,238,0.14), transparent 60%),' +
            'radial-gradient(900px 520px at 85% 10%, rgba(22,119,255,0.16), transparent 55%),' +
            'linear-gradient(180deg, #061427 0%, #0B1F3B 65%, #061427 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),' +
              'linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at 50% 30%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: 800,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
          }}
        >
          {/* Breadcrumb */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              marginBottom: 24,
              fontSize: 13,
              color: 'rgba(148,163,184,0.75)',
            }}
          >
            <Link href="/" style={{ color: 'rgba(148,163,184,0.75)', textDecoration: 'none' }}>
              Seald Healthcare
            </Link>
            <span>/</span>
            <span style={{ color: 'rgba(103,232,249,0.7)' }}>Solutions</span>
          </div>

          {/* Coming Soon badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              padding: '5px 14px',
              borderRadius: 100,
              background: 'rgba(34,211,238,0.08)',
              border: '1px solid rgba(34,211,238,0.22)',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              color: '#22D3EE',
              marginBottom: 22,
            }}
          >
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
              <circle cx="3.5" cy="3.5" r="3.5" fill="#22D3EE" opacity="0.5" />
              <circle cx="3.5" cy="3.5" r="2" fill="#22D3EE" />
            </svg>
            Coming Soon
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            {solution.label}
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: 'rgba(148,163,184,0.9)',
              lineHeight: 1.65,
              maxWidth: 640,
              margin: '0 auto 32px',
            }}
          >
            {solution.tagline}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '13px 28px',
                borderRadius: 12,
                background: 'linear-gradient(135deg, #0B5CFF, #1677FF)',
                color: '#fff',
                fontSize: 15,
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(11,92,255,0.28), 0 8px 24px rgba(11,92,255,0.16)',
              }}
            >
              Book a Demo
            </Link>
            <Link
              href="/resources"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '13px 28px',
                borderRadius: 12,
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.16)',
                color: 'rgba(255,255,255,0.88)',
                fontSize: 15,
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Read our research
            </Link>
          </div>
        </div>
      </section>

      {/* ── Description card ── */}
      <section style={{ padding: '72px 24px 80px', background: '#F6FAFF' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div
            style={{
              background: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(230,238,248,0.9)',
              borderRadius: 20,
              padding: '40px 44px',
              boxShadow: '0 1px 3px rgba(11,31,59,0.04), 0 8px 32px rgba(11,31,59,0.07)',
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
                color: '#1677FF',
                marginBottom: 16,
              }}
            >
              Overview
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: '#3B5578' }}>
              {solution.description}
            </p>

            <div
              style={{
                marginTop: 32,
                paddingTop: 28,
                borderTop: '1px solid rgba(230,238,248,0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap' as const,
                gap: 16,
              }}
            >
              <p style={{ fontSize: 14, color: '#6B83A0', maxWidth: 380 }}>
                Detailed solution content is being finalized. In the meantime,
                reach out to learn how Seald Healthcare applies to your
                organization.
              </p>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '10px 20px',
                  borderRadius: 10,
                  background: 'linear-gradient(135deg, #0B5CFF, #1677FF)',
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap' as const,
                  boxShadow: '0 2px 8px rgba(11,92,255,0.22)',
                }}
              >
                Get in touch
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path
                    d="M2.5 6.5h8M7 3l3.5 3.5L7 10"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other Solutions ── */}
      <section
        style={{
          padding: '48px 24px 64px',
          background: '#ffffff',
          borderTop: '1px solid rgba(230,238,248,0.9)',
        }}
      >
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              color: '#6B83A0',
              marginBottom: 20,
            }}
          >
            Other Solutions
          </p>
          <OtherSolutions solutions={solutions} currentSlug={slug} />
        </div>
      </section>
    </div>
  );
}
