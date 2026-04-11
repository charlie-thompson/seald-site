'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Shield,
  Lock,
  Users,
  Layers,
  RefreshCw,
  CheckCircle2,
  Zap,
  Key,
  Database,
  BarChart2,
  Clock,
  Eye,
  ArrowRightLeft,
  Bot,
} from 'lucide-react';
import type { SolutionFullContent } from '@/app/solutions/solutionsFullContent';
import type { SolutionEntry } from '@/app/solutions/solutionsData';

/* ── Icon map ── */
const ICON_MAP: Record<string, React.ReactNode> = {
  Shield: <Shield size={22} strokeWidth={1.75} />,
  Lock: <Lock size={22} strokeWidth={1.75} />,
  Users: <Users size={22} strokeWidth={1.75} />,
  Layers: <Layers size={22} strokeWidth={1.75} />,
  RefreshCw: <RefreshCw size={22} strokeWidth={1.75} />,
  CheckCircle2: <CheckCircle2 size={22} strokeWidth={1.75} />,
  Zap: <Zap size={22} strokeWidth={1.75} />,
  Key: <Key size={22} strokeWidth={1.75} />,
  Database: <Database size={22} strokeWidth={1.75} />,
  BarChart2: <BarChart2 size={22} strokeWidth={1.75} />,
  Clock: <Clock size={22} strokeWidth={1.75} />,
  Eye: <Eye size={22} strokeWidth={1.75} />,
  ArrowRightLeft: <ArrowRightLeft size={22} strokeWidth={1.75} />,
  Bot: <Bot size={22} strokeWidth={1.75} />,
};

/* ── Scroll-reveal hook ── */
function useReveal(): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, revealed];
}

/* ── Fade-in style helper ── */
const fade = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(24px)',
  transition: `opacity 500ms ease-out ${delay}ms, transform 500ms ease-out ${delay}ms`,
});

/* ── Props ── */
interface Props {
  content: SolutionFullContent;
  solutions: SolutionEntry[];
  currentSlug: string;
  heroAnimation?: React.ReactNode;
}

export default function SolutionPageShell({
  content,
  solutions,
  currentSlug,
  heroAnimation,
}: Props) {
  const otherSolutions = solutions.filter((s) => s.slug !== currentSlug);
  const hasSplitHero = !!heroAnimation;
  const hasProblemCards = !!(content.problemCards?.length);
  const hasStat = !!content.stat;

  const [probRef, probVis] = useReveal();
  const [capRef, capVis] = useReveal();
  const [statRef, statVis] = useReveal();
  const [ctaRef, ctaVis] = useReveal();

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* ════════════════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          padding: hasSplitHero ? '80px 24px 72px' : '96px 24px 96px',
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
            maskImage:
              'radial-gradient(ellipse at 50% 30%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 70%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at 50% 30%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: hasSplitHero ? 1100 : 800,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
            ...(hasSplitHero
              ? {
                  display: 'flex',
                  flexWrap: 'wrap' as const,
                  alignItems: 'center',
                  gap: 48,
                }
              : { textAlign: 'center' as const }),
          }}
        >
          {/* ── Text side ── */}
          <div style={hasSplitHero ? { flex: '1 1 420px', minWidth: 0 } : {}}>
            {/* Breadcrumb */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: hasSplitHero ? 'flex-start' : 'center',
                gap: 6,
                marginBottom: 24,
                fontSize: 13,
                color: 'rgba(148,163,184,0.75)',
              }}
            >
              <Link
                href="/"
                style={{
                  color: 'rgba(148,163,184,0.75)',
                  textDecoration: 'none',
                }}
              >
                Seald Healthcare
              </Link>
              <span>/</span>
              <span style={{ color: 'rgba(103,232,249,0.7)' }}>Solutions</span>
            </div>

            {/* Badge */}
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
                textTransform: 'uppercase',
                color: '#22D3EE',
                marginBottom: 28,
              }}
            >
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                <circle cx="3.5" cy="3.5" r="3.5" fill="#22D3EE" opacity="0.5" />
                <circle cx="3.5" cy="3.5" r="2" fill="#22D3EE" />
              </svg>
              {content.heroBadge}
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(30px, 4.5vw, 54px)',
                fontWeight: 800,
                lineHeight: 1.13,
                letterSpacing: '-0.025em',
                color: '#ffffff',
                marginBottom: 24,
              }}
            >
              {content.heroHeadlineStart}{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #22D3EE, #1677FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {content.heroHeadlineAccent}
              </span>{' '}
              {content.heroHeadlineEnd}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 19px)',
                lineHeight: 1.7,
                color: 'rgba(148,163,184,0.9)',
                maxWidth: hasSplitHero ? 540 : 700,
                margin: hasSplitHero ? '0 0 40px' : '0 auto 40px',
              }}
            >
              {content.heroSubtitle}
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                gap: 12,
                justifyContent: hasSplitHero ? 'flex-start' : 'center',
                flexWrap: 'wrap',
              }}
            >
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
                  boxShadow:
                    '0 2px 8px rgba(11,92,255,0.28), 0 8px 24px rgba(11,92,255,0.16)',
                }}
              >
                Book a Demo
              </Link>
              {!hasSplitHero && (
                <Link
                  href="/contact"
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
                  Talk to an Expert
                </Link>
              )}
            </div>
          </div>

          {/* ── Animation side ── */}
          {hasSplitHero && (
            <div
              style={{
                flex: '1 1 340px',
                minWidth: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {heroAnimation}
            </div>
          )}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          PROBLEM SECTION
          ════════════════════════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: '#F6FAFF' }}>
        <div
          ref={probRef}
          style={{
            maxWidth: hasProblemCards ? 1100 : 880,
            margin: '0 auto',
          }}
        >
          {/* Section header */}
          <div style={fade(probVis)}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#1677FF',
                marginBottom: 14,
              }}
            >
              {content.problemBadge}
            </p>
            {content.problemHeadline && (
              <h2
                style={{
                  fontSize: 'clamp(24px, 3vw, 38px)',
                  fontWeight: 800,
                  color: '#0B1F3B',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  marginBottom: 20,
                  maxWidth: 660,
                }}
              >
                {content.problemHeadline}
              </h2>
            )}
            {content.problemIntro && (
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: '#3B5578',
                  maxWidth: 720,
                  marginBottom: 36,
                }}
              >
                {content.problemIntro}
              </p>
            )}
          </div>

          {/* Cards (new) or Points (legacy) */}
          {hasProblemCards ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 20,
                marginTop: 24,
              }}
            >
              {content.problemCards!.map((card, i) => (
                <div
                  key={i}
                  style={{
                    ...fade(probVis, 150 + i * 120),
                    padding: '32px 28px',
                    borderRadius: 16,
                    background: 'rgba(255,255,255,0.85)',
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    border: '1px solid rgba(230,238,248,0.9)',
                    boxShadow:
                      '0 1px 3px rgba(11,31,59,0.04), 0 8px 24px rgba(11,31,59,0.06)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: '#0B1F3B',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.3,
                      marginBottom: 12,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: '#3B5578',
                      margin: 0,
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 16,
              }}
            >
              {content.problemPoints.map((point, i) => (
                <div
                  key={i}
                  style={{
                    ...fade(probVis, 150 + i * 120),
                    display: 'flex',
                    gap: 14,
                    padding: '20px 22px',
                    borderRadius: 14,
                    background: '#ffffff',
                    border: '1px solid rgba(22,119,255,0.1)',
                    boxShadow:
                      '0 1px 3px rgba(11,31,59,0.04), 0 4px 16px rgba(11,31,59,0.06)',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 22,
                      height: 22,
                      marginTop: 2,
                      borderRadius: '50%',
                      background: 'rgba(239,68,68,0.1)',
                      border: '1.5px solid rgba(239,68,68,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M5 2v4M5 7.5v.5"
                        stroke="#EF4444"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <p
                    style={{
                      fontSize: 14.5,
                      lineHeight: 1.65,
                      color: '#3B5578',
                      margin: 0,
                    }}
                  >
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          CAPABILITIES
          ════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '80px 24px',
          background:
            'linear-gradient(180deg, #050d1a 0%, #0B1F3B 50%, #050d1a 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glows */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '-5%',
            width: 480,
            height: 480,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(22,119,255,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            right: '-5%',
            width: 380,
            height: 380,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          ref={capRef}
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: 56, ...fade(capVis) }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#22D3EE',
                marginBottom: 14,
              }}
            >
              {content.capabilitiesBadge}
            </p>
            <h2
              style={{
                fontSize: 'clamp(24px, 3vw, 40px)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              {content.capabilitiesHeadline}
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.65,
                color: 'rgba(148,163,184,0.85)',
                maxWidth: 600,
                margin: '0 auto',
              }}
            >
              {content.capabilitiesSubtitle}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 20,
            }}
          >
            {content.capabilities.map((cap, i) => (
              <div
                key={i}
                style={{
                  ...fade(capVis, 150 + i * 120),
                  borderRadius: 16,
                  padding: 1,
                  background:
                    'linear-gradient(135deg, rgba(34,211,238,0.15), rgba(22,119,255,0.08))',
                }}
              >
                <div
                  style={{
                    borderRadius: 15,
                    padding: '28px 26px',
                    background:
                      'linear-gradient(135deg, rgba(11,31,59,0.9), rgba(5,13,26,0.97))',
                    backdropFilter: 'blur(20px)',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: 'rgba(34,211,238,0.08)',
                      border: '1px solid rgba(34,211,238,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 18,
                      color: '#22D3EE',
                    }}
                  >
                    {ICON_MAP[cap.iconName] ?? (
                      <Shield size={22} strokeWidth={1.75} />
                    )}
                  </div>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: 10,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.3,
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14.5,
                      lineHeight: 1.7,
                      color: 'rgba(203,213,225,0.85)',
                      margin: 0,
                    }}
                  >
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          STAT / PROOF CALLOUT (optional)
          ════════════════════════════════════════════════════════ */}
      {hasStat && (
        <section
          style={{
            padding: '80px 24px',
            background:
              'linear-gradient(180deg, #061427 0%, #0a1929 50%, #061427 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 500,
              height: 500,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(22,119,255,0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div
            ref={statRef}
            style={{
              maxWidth: 720,
              margin: '0 auto',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <p
              style={{
                ...fade(statVis),
                fontSize: 'clamp(48px, 8vw, 80px)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #22D3EE, #1677FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              {content.stat!.value}
            </p>
            <p
              style={{
                ...fade(statVis, 120),
                fontSize: 'clamp(18px, 2.5vw, 22px)',
                fontWeight: 600,
                color: '#ffffff',
                lineHeight: 1.45,
                marginBottom: 16,
                maxWidth: 600,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {content.stat!.label}
            </p>
            <p
              style={{
                ...fade(statVis, 240),
                fontSize: 16,
                lineHeight: 1.7,
                color: 'rgba(148,163,184,0.8)',
                maxWidth: 520,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {content.stat!.subtext}
            </p>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════
          CTA
          ════════════════════════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: '#F6FAFF' }}>
        <div
          ref={ctaRef}
          style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}
        >
          <div
            style={{
              ...fade(ctaVis),
              borderRadius: 24,
              padding: '56px 48px',
              background:
                'linear-gradient(135deg, #0B1F3B 0%, #061427 100%)',
              boxShadow: '0 8px 40px rgba(11,31,59,0.18)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Glow accent */}
            <div
              style={{
                position: 'absolute',
                top: '-40%',
                right: '-10%',
                width: 320,
                height: 320,
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, rgba(22,119,255,0.18) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#22D3EE',
                  marginBottom: 14,
                }}
              >
                {content.ctaTagline}
              </p>
              <h2
                style={{
                  fontSize: 'clamp(22px, 3vw, 34px)',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  marginBottom: 16,
                }}
              >
                {content.ctaHeadline}
              </h2>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: 'rgba(148,163,184,0.85)',
                  maxWidth: 520,
                  margin: '0 auto 36px',
                }}
              >
                {content.ctaBody}
              </p>
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
                  boxShadow: '0 2px 8px rgba(11,92,255,0.4)',
                }}
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          OTHER SOLUTIONS
          ════════════════════════════════════════════════════════ */}
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
              textTransform: 'uppercase',
              color: '#6B83A0',
              marginBottom: 20,
            }}
          >
            Other Solutions
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {otherSolutions.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                style={{
                  display: 'inline-flex',
                  padding: '9px 18px',
                  borderRadius: 100,
                  background: 'rgba(22,119,255,0.05)',
                  border: '1px solid rgba(22,119,255,0.15)',
                  fontSize: 13.5,
                  fontWeight: 500,
                  color: '#1677FF',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    'rgba(22,119,255,0.1)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    'rgba(22,119,255,0.35)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    'rgba(22,119,255,0.05)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    'rgba(22,119,255,0.15)';
                }}
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
