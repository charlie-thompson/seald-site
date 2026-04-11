'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import {
  // ArrowRight, GitCompare, Sparkles — re-enable with "Why Seald Healthcare" column
  Bot,
  Building2,
  ChevronDown,
  FileText,
  GraduationCap,
  Pill,
  ShieldAlert,
  Stethoscope,
  Video,
} from 'lucide-react';
import { solutions } from '@/app/solutions/solutionsData';
import type { LucideIcon } from 'lucide-react';

// Icon map — co-located here so Lucide imports stay in one client file
const ICON_MAP: Record<string, LucideIcon> = {
  'hospitals-health-systems': Building2,
  'academic-medical-centers': GraduationCap,
  pharmacy: Pill,
  'small-specialty-providers': Stethoscope,
  telehealth: Video,
  'third-party-risk': ShieldAlert,
  insurance: FileText,
  'agentic-ai': Bot,
};

export default function SolutionsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const open = () => {
    clearTimeout(closeTimer.current);
    setIsOpen(true);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setIsOpen(false), 130);
  };

  return (
    // No position:relative here — panel is positioned relative to <nav> (nearest positioned ancestor)
    <div onMouseEnter={open} onMouseLeave={scheduleClose}>
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="flex items-center gap-1 text-lg text-navy transition-colors duration-200 hover:text-blue-primary"
      >
        Solutions
        <ChevronDown
          size={15}
          style={{
            transition: 'transform 0.2s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {/* ── Mega menu panel ─────────────────────────────────────────────────
          Position: absolute relative to <nav> (position:relative ancestor).
          left:50% + translateX(-50%) centers the 100vw-wide panel on the page
          regardless of how the nav's max-width is constrained.
      ──────────────────────────────────────────────────────────────────── */}
      <div
        role="menu"
        onMouseEnter={open}
        onMouseLeave={scheduleClose}
        style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          width: '100vw',
          zIndex: 48,
          transform: isOpen
            ? 'translateX(-50%) translateY(0px)'
            : 'translateX(-50%) translateY(-6px)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.18s ease, transform 0.18s ease',
        }}
      >
        <div
          style={{
            background: '#ffffff',
            borderTop: '1px solid rgba(11,31,59,0.07)',
            boxShadow:
              '0 4px 6px rgba(11,31,59,0.04), 0 20px 60px rgba(11,31,59,0.11)',
          }}
        >
          {/* Inner container matches site's max-w-6xl */}
          <div
            style={{
              maxWidth: 1152,
              margin: '0 auto',
              padding: '28px 24px 32px',
              display: 'grid',
              gridTemplateColumns: '1fr 1px 340px',
              gap: 0,
            }}
          >
            {/* ── Column 1: By Use Case ── */}
            <div style={{ paddingRight: 40 }}>
              <p
                style={{
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#6B83A0',
                  marginBottom: 14,
                }}
              >
                By Use Case
              </p>
              {/* 2-across grid of solution items */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 2,
                }}
              >
                {solutions.map(({ slug, label, tagline }) => {
                  const Icon = ICON_MAP[slug] ?? Building2;
                  return (
                    <Link
                      key={slug}
                      href={`/solutions/${slug}`}
                      role="menuitem"
                      onClick={() => setIsOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 11,
                        padding: '10px 12px',
                        borderRadius: 10,
                        textDecoration: 'none',
                        transition: 'background 0.14s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(22,119,255,0.06)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      {/* Icon box */}
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          background: 'rgba(22,119,255,0.07)',
                          border: '1px solid rgba(22,119,255,0.13)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        <Icon size={15} color="#1677FF" />
                      </div>
                      {/* Text */}
                      <div>
                        <div
                          style={{
                            fontSize: 13.5,
                            fontWeight: 600,
                            color: '#0B1F3B',
                            lineHeight: 1.3,
                            marginBottom: 2,
                          }}
                        >
                          {label}
                        </div>
                        <div
                          style={{
                            fontSize: 11.5,
                            color: '#6B83A0',
                            lineHeight: 1.45,
                          }}
                        >
                          {tagline}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* ── "Why Seald Healthcare" column — hidden until content is ready ── */}
            {/*
            <div
              style={{
                width: 1,
                background: 'rgba(11,31,59,0.07)',
                margin: '0 0 0 0',
                alignSelf: 'stretch',
              }}
            />

            <div
              style={{
                paddingLeft: 40,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 12,
              }}
            >
              <p
                style={{
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#6B83A0',
                  marginBottom: 2,
                }}
              >
                Why Seald Healthcare
              </p>

              <Link
                href="/security-comparison"
                role="menuitem"
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 11,
                  padding: '12px 14px',
                  borderRadius: 10,
                  background: 'rgba(22,119,255,0.04)',
                  border: '1px solid rgba(22,119,255,0.1)',
                  textDecoration: 'none',
                  transition: 'background 0.14s ease, border-color 0.14s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F6FAFF';
                  e.currentTarget.style.borderColor = 'rgba(22,119,255,0.22)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(22,119,255,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(22,119,255,0.1)';
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    background: 'rgba(22,119,255,0.07)',
                    border: '1px solid rgba(22,119,255,0.13)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  <GitCompare size={15} color="#1677FF" />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 13.5,
                      fontWeight: 600,
                      color: '#0B1F3B',
                      lineHeight: 1.3,
                      marginBottom: 3,
                    }}
                  >
                    Security Model Comparison
                  </div>
                  <div style={{ fontSize: 11.5, color: '#6B83A0', lineHeight: 1.45 }}>
                    Perimeter security vs. persistent record-level encryption
                  </div>
                </div>
              </Link>

              <div style={{ height: 1, background: 'rgba(11,31,59,0.07)', margin: '4px 0' }} />

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  alignSelf: 'flex-start',
                  marginTop: 4,
                  padding: '9px 18px',
                  borderRadius: 9,
                  background: 'linear-gradient(135deg, #0B5CFF, #1677FF)',
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(11,92,255,0.22)',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(11,92,255,0.32)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(11,92,255,0.22)';
                }}
              >
                Talk to us
                <ArrowRight size={13} />
              </Link>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  );
}
