'use client';

import { useState, useEffect, useRef } from 'react';

// ─── Phase-based animation (mirrors homepage SealdEncryptionHero pattern) ───
// enter → sharing → securing → protected → resting → (fade-out → restart)
type Phase = 'enter' | 'sharing' | 'securing' | 'protected' | 'resting' | 'shielding';

/* ── Seald Healthcare shield — paths copied from /public/images/seald_icon.svg ── */
function SealdShield({ size = 76 }: { size?: number }) {
  const w = size * (140 / 160);
  const h = size;
  return (
    <svg width={w} height={h} viewBox="0 0 140 160" fill="none">
      <defs>
        <linearGradient id="hha-sg" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#47b0f5" />
          <stop offset="40%" stopColor="#007ff2" />
          <stop offset="100%" stopColor="#0062cc" />
        </linearGradient>
        <clipPath id="hha-ec">
          <rect x="30" y="52" width="80" height="52" rx="6" />
        </clipPath>
      </defs>
      <path
        d="M70,6 L128,30 C128,30 132,52 132,80 C132,120 104,148 70,158 C36,148 8,120 8,80 C8,52 12,30 12,30 Z"
        fill="url(#hha-sg)"
        stroke="#42ccf3"
        strokeWidth="3"
      />
      <rect x="30" y="52" width="80" height="52" rx="6" fill="none" stroke="white" strokeWidth="3.5" />
      <g clipPath="url(#hha-ec)">
        <path d="M30,52 L70,82 L110,52" fill="none" stroke="white" strokeWidth="3.5" strokeLinejoin="round" />
        <path d="M30,104 L55,82" fill="none" stroke="white" strokeWidth="3.5" />
        <path d="M110,104 L85,82" fill="none" stroke="white" strokeWidth="3.5" />
      </g>
    </svg>
  );
}

/* ── Packet layout: 8 data-document divs that fly outward from hospital ── */
const PACKETS: { id: number; endX: number; endY: number; delay: number }[] = [
  { id: 0, endX: -95, endY: -15, delay: 0 },
  { id: 1, endX: 95, endY: -20, delay: 80 },
  { id: 2, endX: -115, endY: 35, delay: 160 },
  { id: 3, endX: 110, endY: 30, delay: 120 },
  { id: 4, endX: -85, endY: 80, delay: 200 },
  { id: 5, endX: 90, endY: 75, delay: 100 },
  { id: 6, endX: -55, endY: -48, delay: 240 },
  { id: 7, endX: 65, endY: -42, delay: 60 },
];

/* ── Window row helper ── */
function WindowRow({
  count,
  gap,
  w,
  h,
  isFirst,
  lit,
}: {
  count: number;
  gap: number;
  w: number;
  h: number;
  isFirst: boolean;
  lit: boolean;
}) {
  return (
    <div
      style={{
        display: 'flex',
        gap,
        justifyContent: 'center',
        marginTop: isFirst ? 0 : 8,
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            width: w,
            height: h,
            borderRadius: 2,
            background: lit ? 'rgba(66,204,243,0.4)' : 'rgba(0,167,248,0.18)',
            boxShadow: lit
              ? '0 0 10px rgba(66,204,243,0.45), inset 0 0 4px rgba(66,204,243,0.2)'
              : '0 0 5px rgba(0,167,248,0.1)',
            transition: 'all 1s ease',
          }}
        />
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */

export default function HospitalHeroAnimation() {
  const [phase, setPhase] = useState<Phase>('enter');
  const [buildingIn, setBuildingIn] = useState(false);
  const [ringProgress, setRingProgress] = useState(0);
  const [wrapperOpacity, setWrapperOpacity] = useState(1);

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const ringFrameRef = useRef<number>(0);

  useEffect(() => {
    // Skip animation for reduced-motion users
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setBuildingIn(true);
      setPhase('shielding');
      setRingProgress(1);
      return;
    }

    const runCycle = () => {
      // Clear previous cycle
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
      if (ringFrameRef.current) cancelAnimationFrame(ringFrameRef.current);

      // Reset to initial state
      setPhase('enter');
      setBuildingIn(false);
      setRingProgress(0);
      setWrapperOpacity(1);

      const t = timersRef.current;

      // Phase timeline
      t.push(setTimeout(() => setBuildingIn(true), 200));
      t.push(setTimeout(() => setPhase('sharing'), 1200));
      t.push(setTimeout(() => setPhase('securing'), 3400));
      t.push(setTimeout(() => setPhase('protected'), 5000));
      t.push(setTimeout(() => setPhase('resting'), 6400));
      t.push(setTimeout(() => setPhase('shielding'), 7000));

      // Encryption ring stroke draw (starts with securing phase)
      t.push(
        setTimeout(() => {
          let start: number | null = null;
          const dur = 1200;
          const frame = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / dur, 1);
            setRingProgress(1 - Math.pow(1 - p, 3)); // ease-out cubic
            if (p < 1) {
              ringFrameRef.current = requestAnimationFrame(frame);
            }
          };
          ringFrameRef.current = requestAnimationFrame(frame);
        }, 3400),
      );

      // After shielding transition (800ms) + 1.5s hold, fade out and restart
      t.push(
        setTimeout(() => {
          setWrapperOpacity(0); // 600ms CSS transition
          t.push(setTimeout(() => runCycle(), 700));
        }, 9300), // 7000ms shielding + 800ms transition + 1500ms hold
      );
    };

    runCycle();

    return () => {
      timersRef.current.forEach(clearTimeout);
      if (ringFrameRef.current) cancelAnimationFrame(ringFrameRef.current);
    };
  }, []);

  // Numeric phase index for comparisons
  const pi = ['enter', 'sharing', 'securing', 'protected', 'resting', 'shielding'].indexOf(
    phase,
  );

  const windowsLit = pi >= 3;
  const circumference = 2 * Math.PI * 68;

  return (
    <div style={{ width: '100%', maxWidth: 420, margin: '0 auto' }}>
      {/* Aspect-ratio container */}
      <div style={{ position: 'relative', width: '100%', paddingBottom: '115%' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: wrapperOpacity,
            transition: 'opacity 0.6s ease',
          }}
        >
          {/* ── Ambient glow ── */}
          <div
            style={{
              position: 'absolute',
              top: '10%',
              left: '50%',
              width: 260,
              height: 220,
              transform: 'translateX(-50%)',
              borderRadius: '50%',
              background:
                'radial-gradient(ellipse, rgba(0,127,242,0.07) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* ══════════════════════════════════════════════════════════
              HOSPITAL BUILDING (HTML divs, filled gradients + depth)
              ══════════════════════════════════════════════════════════ */}
          <div
            style={{
              position: 'absolute',
              top: '5%',
              left: '50%',
              transform: `translateX(-50%) translateY(${buildingIn ? '0px' : '-18px'}) scale(${buildingIn ? 1 : 0.92})`,
              opacity: buildingIn ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)',
              zIndex: 3,
            }}
          >
            {/* Ground shadow */}
            <div
              style={{
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 190,
                height: 22,
                borderRadius: '50%',
                background:
                  'radial-gradient(ellipse, rgba(7,42,80,0.18) 0%, transparent 70%)',
              }}
            />

            {/* ── Left wing ── */}
            <div
              style={{
                position: 'absolute',
                left: -54,
                top: 36,
                width: 58,
                height: 108,
                borderRadius: '5px 5px 3px 3px',
                background: 'linear-gradient(180deg, #0f4d7e 0%, #0a3862 100%)',
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.06), 0 10px 30px rgba(7,42,80,0.35), 0 2px 8px rgba(0,0,0,0.12)',
              }}
            >
              <div style={{ paddingTop: 16 }}>
                <WindowRow count={2} gap={8} w={14} h={16} isFirst lit={windowsLit} />
                <WindowRow count={2} gap={8} w={14} h={16} isFirst={false} lit={windowsLit} />
                <WindowRow count={2} gap={8} w={14} h={16} isFirst={false} lit={windowsLit} />
              </div>
            </div>

            {/* ── Right wing ── */}
            <div
              style={{
                position: 'absolute',
                right: -54,
                top: 36,
                width: 58,
                height: 108,
                borderRadius: '5px 5px 3px 3px',
                background: 'linear-gradient(180deg, #0f4d7e 0%, #0a3862 100%)',
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.06), 0 10px 30px rgba(7,42,80,0.35), 0 2px 8px rgba(0,0,0,0.12)',
              }}
            >
              <div style={{ paddingTop: 16 }}>
                <WindowRow count={2} gap={8} w={14} h={16} isFirst lit={windowsLit} />
                <WindowRow count={2} gap={8} w={14} h={16} isFirst={false} lit={windowsLit} />
                <WindowRow count={2} gap={8} w={14} h={16} isFirst={false} lit={windowsLit} />
              </div>
            </div>

            {/* ── Center tower ── */}
            <div
              style={{
                position: 'relative',
                width: 92,
                height: 152,
                borderRadius: '7px 7px 3px 3px',
                background: 'linear-gradient(180deg, #0d4070 0%, #072A50 100%)',
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -2px 8px rgba(0,0,0,0.15), 0 16px 40px rgba(7,42,80,0.45), 0 4px 12px rgba(0,0,0,0.18)',
              }}
            >
              {/* Cross glow */}
              <div
                style={{
                  position: 'absolute',
                  top: 10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, rgba(66,204,243,0.22) 0%, transparent 70%)',
                }}
              />
              {/* Cross vertical */}
              <div
                style={{
                  position: 'absolute',
                  top: 14,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 10,
                  height: 32,
                  borderRadius: 3,
                  background: 'linear-gradient(180deg, #42CCF3, #00A7F8)',
                  boxShadow: '0 0 14px rgba(66,204,243,0.5)',
                }}
              />
              {/* Cross horizontal */}
              <div
                style={{
                  position: 'absolute',
                  top: 25,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 32,
                  height: 10,
                  borderRadius: 3,
                  background: 'linear-gradient(90deg, #42CCF3, #00A7F8)',
                  boxShadow: '0 0 14px rgba(66,204,243,0.5)',
                }}
              />

              {/* Tower windows */}
              <div style={{ paddingTop: 58 }}>
                <WindowRow count={3} gap={7} w={16} h={18} isFirst lit={windowsLit} />
                <WindowRow count={3} gap={7} w={16} h={18} isFirst={false} lit={windowsLit} />
                <WindowRow count={3} gap={7} w={16} h={18} isFirst={false} lit={windowsLit} />
              </div>

              {/* Door */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 24,
                  height: 30,
                  borderRadius: '12px 12px 0 0',
                  background:
                    'linear-gradient(180deg, rgba(0,127,242,0.2), rgba(0,127,242,0.08))',
                  border: '1px solid rgba(0,127,242,0.25)',
                  borderBottom: 'none',
                  boxShadow: 'inset 0 2px 8px rgba(0,127,242,0.12)',
                }}
              />
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              DATA PACKETS (fly outward, red-orange → cyan)
              ══════════════════════════════════════════════════════════ */}
          {PACKETS.map((pkt) => {
            const flying = pi >= 1;
            const secured = pi >= 3;
            return (
              <div
                key={pkt.id}
                style={{
                  position: 'absolute',
                  top: '21%',
                  left: '50%',
                  width: 22,
                  height: 26,
                  borderRadius: 4,
                  transform: `translate(calc(-50% + ${flying ? pkt.endX : 0}px), ${flying ? pkt.endY : 0}px) scale(${flying ? 1 : 0.25})`,
                  opacity: pi >= 1 ? 0.95 : 0,
                  background: secured
                    ? 'linear-gradient(135deg, #42CCF3, #00A7F8)'
                    : 'linear-gradient(135deg, #FF7043, #FF5722)',
                  boxShadow: secured
                    ? '0 3px 14px rgba(66,204,243,0.45), 0 0 4px rgba(66,204,243,0.2)'
                    : '0 3px 14px rgba(255,87,34,0.4), 0 0 4px rgba(255,87,34,0.15)',
                  transition: secured
                    ? `all 0.7s cubic-bezier(0.34, 1, 0.64, 1) ${pkt.delay}ms`
                    : `all 1.4s cubic-bezier(0.34, 1, 0.64, 1) ${pkt.delay}ms`,
                  zIndex: 5,
                }}
              >
                {/* Mini document lines */}
                <div
                  style={{
                    padding: '5px 4px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2.5,
                  }}
                >
                  <div
                    style={{
                      height: 2,
                      borderRadius: 1,
                      background: 'rgba(255,255,255,0.7)',
                      width: '85%',
                    }}
                  />
                  <div
                    style={{
                      height: 2,
                      borderRadius: 1,
                      background: 'rgba(255,255,255,0.45)',
                      width: '55%',
                    }}
                  />
                  <div
                    style={{
                      height: 2,
                      borderRadius: 1,
                      background: 'rgba(255,255,255,0.3)',
                      width: '72%',
                    }}
                  />
                </div>
              </div>
            );
          })}

          {/* ══════════════════════════════════════════════════════════
              CONNECTION BEAM (hospital → shield)
              ══════════════════════════════════════════════════════════ */}
          <div
            style={{
              position: 'absolute',
              top: '39%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 4,
              height: '18%',
              borderRadius: 2,
              background:
                pi >= 2
                  ? 'linear-gradient(180deg, rgba(0,127,242,0.5) 0%, rgba(66,204,243,0.7) 100%)'
                  : 'transparent',
              boxShadow:
                pi >= 2
                  ? '0 0 20px rgba(22,119,255,0.35), 0 0 40px rgba(66,204,243,0.12)'
                  : 'none',
              opacity: pi >= 2 && pi < 5 ? 1 : 0,
              transition: 'all 0.8s ease',
              zIndex: 2,
            }}
          />

          {/* ══════════════════════════════════════════════════════════
              SHIELD + ENCRYPTION RING
              ══════════════════════════════════════════════════════════ */}
          <div
            style={{
              position: 'absolute',
              top: pi >= 5 ? '14%' : '57%',
              left: '50%',
              transform: `translateX(-50%) translateY(${pi >= 2 ? '0px' : '28px'}) scale(${pi >= 5 ? 1.3 : pi >= 2 ? 1 : 0.7})`,
              opacity: pi >= 2 ? 1 : 0,
              transition: pi >= 5
                ? 'top 0.8s ease-out, transform 0.8s ease-out, opacity 0.8s ease-out'
                : 'all 1.1s cubic-bezier(0.34, 1.56, 0.64, 1)',
              zIndex: pi >= 5 ? 6 : 4,
            }}
          >
            {/* Shield ambient glow */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 150,
                height: 150,
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, rgba(22,119,255,0.14) 0%, transparent 70%)',
                opacity: pi >= 3 ? 1 : 0.25,
                transition: 'opacity 1s ease',
                pointerEvents: 'none',
              }}
            />

            {/* Encryption ring (SVG stroke-dashoffset draw) */}
            <svg
              width="160"
              height="160"
              viewBox="0 0 160 160"
              fill="none"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
              }}
            >
              <defs>
                <linearGradient
                  id="hospRingGrad"
                  x1="0"
                  y1="0"
                  x2="160"
                  y2="160"
                >
                  <stop offset="0%" stopColor="#007FF2" />
                  <stop offset="100%" stopColor="#42CCF3" />
                </linearGradient>
              </defs>
              {/* Main ring */}
              <circle
                cx="80"
                cy="80"
                r="68"
                stroke="url(#hospRingGrad)"
                strokeWidth="2"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={circumference * (1 - ringProgress)}
                strokeLinecap="round"
                opacity={0.55}
              />
              {/* Tick marks */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
                const inner = 62;
                const outer = 68;
                return (
                  <line
                    key={i}
                    x1={80 + Math.cos(angle) * inner}
                    y1={80 + Math.sin(angle) * inner}
                    x2={80 + Math.cos(angle) * outer}
                    y2={80 + Math.sin(angle) * outer}
                    stroke="#42CCF3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity={ringProgress > i / 12 ? 0.5 : 0}
                    style={{ transition: 'opacity 0.3s ease' }}
                  />
                );
              })}
            </svg>

            {/* Shield icon */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                filter:
                  pi >= 3
                    ? 'drop-shadow(0 0 24px rgba(22,119,255,0.6)) drop-shadow(0 0 48px rgba(34,211,238,0.25))'
                    : 'drop-shadow(0 4px 12px rgba(0,0,0,0.2))',
                transition: 'filter 1s ease',
                animation:
                  pi === 4 ? 'hospShieldBreathe 3.5s ease-in-out infinite' : 'none',
              }}
            >
              <SealdShield size={76} />
            </div>
          </div>

          {/* ── "Records Protected" label ── */}
          <div
            style={{
              position: 'absolute',
              bottom: '3%',
              left: '50%',
              transform: 'translateX(-50%)',
              opacity: pi >= 4 ? 1 : 0,
              transition: 'opacity 0.8s ease 0.4s',
              textAlign: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#42CCF3',
                textShadow: '0 0 20px rgba(66,204,243,0.3)',
              }}
            >
              Records Protected
            </span>
          </div>
        </div>
      </div>

      {/* Scoped keyframes */}
      <style>{`
        @keyframes hospShieldBreathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }
      `}</style>
    </div>
  );
}
