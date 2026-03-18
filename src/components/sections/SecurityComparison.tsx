'use client';
import { useEffect, useRef, useState } from 'react';

/* ═══════════════════════════════════════════════════════════════════════════
   SecurityComparison.tsx — Seald Healthcare
   Animated two-half comparison section showing current data security vs.
   Seald Healthcare's record-level encryption model.
   Scroll-triggered, sequential stage reveal, continuous packet flow.
═══════════════════════════════════════════════════════════════════════════ */

// ── Shared types ────────────────────────────────────────────────────────────
type Variant = 'vulnerable' | 'secure';

// ── SVG Atom components ─────────────────────────────────────────────────────

function SealdShield({
  size = 32,
  glow = false,
  uid,
}: {
  size?: number;
  glow?: boolean;
  uid: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      style={
        glow
          ? {
              filter:
                'drop-shadow(0 0 8px rgba(34,211,238,0.9)) drop-shadow(0 0 20px rgba(34,211,238,0.45))',
              animation: 'shieldGlowPulse 2.5s ease-in-out infinite',
            }
          : undefined
      }
    >
      <path
        d="M16 2.5L28 8V18C28 25.5 22.5 31 16 33C9.5 31 4 25.5 4 18V8L16 2.5Z"
        fill={`url(#shg-${uid})`}
        stroke="rgba(34,211,238,0.4)"
        strokeWidth="0.8"
      />
      <path
        d="M10.5 16.5L14.5 20.5L22 13.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id={`shg-${uid}`}
          x1="4"
          y1="2"
          x2="28"
          y2="33"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#1677FF" />
          <stop offset="60%" stopColor="#0B5CFF" />
          <stop offset="100%" stopColor="#0062CC" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function KeyIcon({
  color = '#EF4444',
  size = 18,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <circle cx="6.5" cy="7" r="4.5" stroke={color} strokeWidth="1.5" />
      <circle cx="6.5" cy="7" r="1.8" fill={color} opacity="0.4" />
      <path
        d="M10 10.5L17 17.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14.5 15.5h2.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13 14v2.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LockIcon({
  color = '#22D3EE',
  size = 13,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none">
      <rect x="1.5" y="6" width="10" height="7" rx="1.5" stroke={color} strokeWidth="1.2" />
      <path d="M4 6V4.5a2.5 2.5 0 015 0V6" stroke={color} strokeWidth="1.2" />
      <circle cx="6.5" cy="9.5" r="1.2" fill={color} opacity="0.7" />
    </svg>
  );
}

function CheckIcon({ color = '#22D3EE', size = 13 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none">
      <circle cx="6.5" cy="6.5" r="5.5" stroke={color} strokeWidth="1.2" fill={`${color}18`} />
      <path
        d="M3.5 6.5l2 2 3.5-3.5"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none">
      <circle cx="6.5" cy="6.5" r="5.5" stroke="#EF4444" strokeWidth="1.2" fill="rgba(239,68,68,0.1)" />
      <path
        d="M4 4l5 5M9 4l-5 5"
        stroke="#EF4444"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ── Stage label chip ────────────────────────────────────────────────────────
function StageLabel({ text, variant }: { text: string; variant: Variant }) {
  const isVuln = variant === 'vulnerable';
  return (
    <div
      style={{
        fontSize: 9.5,
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase' as const,
        color: isVuln ? 'rgba(248,113,113,0.85)' : 'rgba(103,232,249,0.85)',
        textAlign: 'center',
        marginBottom: 12,
      }}
    >
      {text}
    </div>
  );
}

// ── Status badge ────────────────────────────────────────────────────────────
function StatusBadge({ variant }: { variant: Variant }) {
  const isVuln = variant === 'vulnerable';
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        padding: '3px 10px',
        borderRadius: 100,
        background: isVuln ? 'rgba(239,68,68,0.1)' : 'rgba(34,211,238,0.1)',
        border: `1px solid ${isVuln ? 'rgba(239,68,68,0.28)' : 'rgba(34,211,238,0.28)'}`,
        fontSize: 9.5,
        fontWeight: 700,
        letterSpacing: '0.07em',
        color: isVuln ? '#F87171' : '#22D3EE',
        textTransform: 'uppercase' as const,
      }}
    >
      <div
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: isVuln ? '#EF4444' : '#22D3EE',
          animation: isVuln ? 'redPulse 1.8s ease-in-out infinite' : 'cyanPulse 2.2s ease-in-out infinite',
        }}
      />
      {isVuln ? 'Vulnerable' : 'Protected'}
    </div>
  );
}

// ── STAGE 1: Cloud Infrastructure ──────────────────────────────────────────
function CloudStage({ variant, visible }: { variant: Variant; visible: boolean }) {
  const isVuln = variant === 'vulnerable';
  const accentR = isVuln ? '239,68,68' : '34,211,238';
  const accent = isVuln ? '#EF4444' : '#22D3EE';
  const accentMid = isVuln ? '#F87171' : '#67E8F9';
  const uid = `cloud-${variant}`;

  const providers = [
    { name: 'AWS', color: '#FF9900' },
    { name: 'Azure', color: '#0078D4' },
    { name: 'Google Cloud', color: '#4285F4' },
    { name: 'ClearDATA', color: '#22D3EE' },
  ];

  return (
    <div
      style={{
        borderRadius: 16,
        border: `1px solid rgba(${accentR}, 0.22)`,
        background: `radial-gradient(ellipse at 50% 10%, rgba(${accentR}, 0.09), transparent 60%), linear-gradient(180deg, rgba(5,13,32,0.9) 0%, rgba(4,10,24,0.95) 100%)`,
        padding: '20px 16px 16px',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: 10,
        height: '100%',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <StageLabel text="Cloud Infrastructure" variant={variant} />

      {/* Provider badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 4, justifyContent: 'center' }}>
        {providers.map(({ name, color }) => (
          <div
            key={name}
            style={{
              padding: '2px 7px',
              borderRadius: 5,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              fontSize: 9,
              fontWeight: 700,
              color,
              letterSpacing: '0.03em',
            }}
          >
            {name}
          </div>
        ))}
      </div>

      {/* Cloud + Database illustration */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column' as const,
          alignItems: 'center',
          padding: '6px 0 4px',
          animation: 'floatCloud 5s ease-in-out infinite',
        }}
      >
        {/* Cloud SVG outline */}
        <svg
          width="160"
          height="54"
          viewBox="0 0 160 54"
          fill="none"
          style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }}
        >
          <path
            d="M30 50 Q10 50 10 36 Q10 24 22 22 Q20 8 34 6 Q42 0 52 5 Q60 -1 72 5 Q84 -1 94 8 Q108 4 116 18 Q132 14 136 28 Q142 48 124 50 Z"
            fill={`rgba(${accentR}, 0.05)`}
            stroke={`rgba(${accentR}, 0.18)`}
            strokeWidth="1"
          />
        </svg>

        {/* Database cylinder */}
        <div style={{ marginTop: 10, position: 'relative' }}>
          <svg width="88" height="66" viewBox="0 0 88 66" fill="none">
            {/* Highlight ring */}
            <ellipse
              cx="44"
              cy="14"
              rx="36"
              ry="11"
              fill={`rgba(${accentR}, 0.06)`}
              stroke={`rgba(${accentR}, 0.28)`}
              strokeWidth="1.4"
            />
            {/* Body left/right walls */}
            <path
              d="M8 14 L8 52"
              stroke={`rgba(${accentR}, 0.22)`}
              strokeWidth="1.4"
            />
            <path
              d="M80 14 L80 52"
              stroke={`rgba(${accentR}, 0.22)`}
              strokeWidth="1.4"
            />
            {/* Body fill */}
            <rect
              x="8"
              y="14"
              width="72"
              height="38"
              fill={`rgba(${accentR}, 0.04)`}
            />
            {/* Data row lines */}
            <line x1="18" y1="26" x2="70" y2="26" stroke={`rgba(${accentR}, 0.18)`} strokeWidth="0.8" strokeDasharray="4,3" />
            <line x1="18" y1="34" x2="70" y2="34" stroke={`rgba(${accentR}, 0.18)`} strokeWidth="0.8" strokeDasharray="4,3" />
            <line x1="18" y1="42" x2="70" y2="42" stroke={`rgba(${accentR}, 0.18)`} strokeWidth="0.8" strokeDasharray="4,3" />
            {/* Bottom ellipse */}
            <ellipse
              cx="44"
              cy="52"
              rx="36"
              ry="11"
              fill={`rgba(${accentR}, 0.06)`}
              stroke={`rgba(${accentR}, 0.28)`}
              strokeWidth="1.4"
            />
          </svg>

          {/* Vulnerable: Key ON top of database */}
          {isVuln && (
            <div
              style={{
                position: 'absolute',
                top: -14,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                padding: '4px 9px',
                borderRadius: 6,
                background: 'rgba(239,68,68,0.13)',
                border: '1px solid rgba(239,68,68,0.38)',
                fontSize: 9,
                fontWeight: 700,
                color: '#F87171',
                whiteSpace: 'nowrap' as const,
                animation: 'keyPulse 2s ease-in-out infinite',
                zIndex: 2,
              }}
            >
              <KeyIcon color="#EF4444" size={14} />
              <span>Encryption Key</span>
            </div>
          )}

          {/* Secure: Seald Healthcare shield overlaid centrally */}
          {!isVuln && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -55%)',
                zIndex: 2,
              }}
            >
              <SealdShield size={42} glow uid={uid} />
            </div>
          )}
        </div>

        {/* Key management note (secure variant) */}
        {!isVuln && (
          <div
            style={{
              marginTop: 4,
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              fontSize: 9,
              color: 'rgba(103,232,249,0.8)',
              fontWeight: 600,
            }}
          >
            <KeyIcon color="#22D3EE" size={13} />
            <span>Keys managed independently</span>
          </div>
        )}
      </div>

      {/* Info callout */}
      <div
        style={{
          borderRadius: 10,
          padding: '8px 10px',
          background: `rgba(${accentR}, 0.06)`,
          border: `1px solid rgba(${accentR}, 0.14)`,
          fontSize: 10.5,
          color: accentMid,
          lineHeight: 1.55,
          textAlign: 'center' as const,
        }}
      >
        {isVuln
          ? 'Stolen credentials expose ALL records — no individual record encryption'
          : 'Record-level encryption — credentials alone cannot decrypt individual records'}
      </div>

      {/* Breach indicator (vulnerable) */}
      {isVuln && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            padding: '6px 10px',
            borderRadius: 8,
            background: 'rgba(239,68,68,0.08)',
            border: '1px solid rgba(239,68,68,0.22)',
            fontSize: 10,
            color: '#F87171',
            fontWeight: 600,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1L7.5 4.5L11 5L8.5 7.5L9.2 11L6 9.4L2.8 11L3.5 7.5L1 5L4.5 4.5L6 1Z"
              fill="rgba(239,68,68,0.2)"
              stroke="#EF4444"
              strokeWidth="0.8"
            />
          </svg>
          Credential theft = full database exposure
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <StatusBadge variant={variant} />
      </div>
    </div>
  );
}

// ── STAGE 2: Data in Transit ────────────────────────────────────────────────
function TransitStage({ variant, visible }: { variant: Variant; visible: boolean }) {
  const isVuln = variant === 'vulnerable';
  const accentR = isVuln ? '239,68,68' : '34,211,238';
  const accent = isVuln ? '#EF4444' : '#22D3EE';
  const accentMid = isVuln ? '#F87171' : '#67E8F9';
  const pathD = 'M -20 50 C 30 20 70 80 130 50 C 180 25 210 75 260 50';
  const packetOffsets = ['0s', '1.1s', '2.2s'];

  return (
    <div
      style={{
        borderRadius: 16,
        border: `1px solid rgba(${accentR}, 0.22)`,
        background: 'linear-gradient(180deg, rgba(5,13,32,0.85) 0%, rgba(4,10,24,0.92) 100%)',
        padding: '20px 16px 16px',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: 10,
        height: '100%',
        overflow: 'hidden',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
      }}
    >
      <StageLabel text="Data in Transit" variant={variant} />

      {/* Animated flow SVG */}
      <div style={{ position: 'relative', width: '100%', height: 110, flexShrink: 0 }}>
        <svg
          width="100%"
          height="110"
          viewBox="0 0 240 110"
          preserveAspectRatio="xMidYMid meet"
          style={{ display: 'block', overflow: 'visible' }}
        >
          {/* Glow layer for path */}
          <path
            d={pathD}
            stroke={`rgba(${accentR}, 0.1)`}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Main path */}
          <path
            d={pathD}
            stroke={`rgba(${accentR}, 0.4)`}
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="6,4"
            strokeLinecap="round"
          />

          {/* Animated packets */}
          {packetOffsets.map((delay, i) => (
            <g key={i}>
              {/* Packet rectangle */}
              <rect
                x="-12"
                y="-8"
                width="24"
                height="16"
                rx="4"
                fill={`rgba(${accentR}, 0.14)`}
                stroke={accent}
                strokeWidth="1"
              >
                <animateMotion
                  dur="3.3s"
                  begin={delay}
                  repeatCount="indefinite"
                  calcMode="linear"
                  path={pathD}
                />
              </rect>
              {/* Packet label */}
              <text
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="5.5"
                fontWeight="700"
                letterSpacing="0.04em"
                fill={accentMid}
                opacity="0.9"
              >
                <animateMotion
                  dur="3.3s"
                  begin={delay}
                  repeatCount="indefinite"
                  calcMode="linear"
                  path={pathD}
                />
                {isVuln ? 'DATA' : 'ENC'}
              </text>
              {/* Lock icon on packet (secure only) */}
              {!isVuln && (
                <circle cx="0" cy="0" r="3.5" fill="#22D3EE" opacity="0.5">
                  <animateMotion
                    dur="3.3s"
                    begin={delay}
                    repeatCount="indefinite"
                    calcMode="linear"
                    path={pathD}
                  />
                </circle>
              )}
              {/* Vulnerable: warning dot on packet */}
              {isVuln && (
                <circle cx="0" cy="0" r="3.5" fill="rgba(239,68,68,0.6)">
                  <animateMotion
                    dur="3.3s"
                    begin={delay}
                    repeatCount="indefinite"
                    calcMode="linear"
                    path={pathD}
                  />
                </circle>
              )}
            </g>
          ))}

          {/* TLS label on path midpoint */}
          <g transform="translate(120, 36)">
            <rect
              x="-18"
              y="-8"
              width="36"
              height="16"
              rx="4"
              fill={`rgba(${accentR}, 0.1)`}
              stroke={`rgba(${accentR}, 0.25)`}
              strokeWidth="0.8"
            />
            <text
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="6.5"
              fontWeight="700"
              fill={accentMid}
              letterSpacing="0.06em"
            >
              TLS
            </text>
          </g>
        </svg>
      </div>

      {/* Encryption state indicator */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          padding: '6px 12px',
          borderRadius: 8,
          background: `rgba(${accentR}, 0.07)`,
          border: `1px solid rgba(${accentR}, 0.2)`,
          fontSize: 10.5,
          fontWeight: 600,
          color: accentMid,
        }}
      >
        <LockIcon color={accent} size={13} />
        {isVuln ? 'TLS — channel-level only' : 'Record-level encryption persists'}
      </div>

      {/* Description */}
      <div
        style={{
          flex: 1,
          borderRadius: 10,
          padding: '8px 10px',
          background: `rgba(${accentR}, 0.04)`,
          border: `1px solid rgba(${accentR}, 0.1)`,
          fontSize: 10.5,
          color: 'rgba(148,163,184,0.85)',
          lineHeight: 1.6,
          textAlign: 'center' as const,
        }}
      >
        {isVuln
          ? 'Encryption ends when data arrives. Third party immediately decrypts and stores in plaintext.'
          : 'Each record stays individually encrypted in transit. Access policies are embedded in the data itself.'}
      </div>

      {/* Policy travels with data (secure only) */}
      {!isVuln && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5,
            fontSize: 9.5,
            color: 'rgba(103,232,249,0.75)',
            fontWeight: 600,
          }}
        >
          <CheckIcon color="#22D3EE" size={12} />
          Access policies travel with every record
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <StatusBadge variant={variant} />
      </div>
    </div>
  );
}

// ── STAGE 3: Third-Party Vendor ────────────────────────────────────────────
function ThirdPartyStage({ variant, visible }: { variant: Variant; visible: boolean }) {
  const isVuln = variant === 'vulnerable';
  const accentR = isVuln ? '239,68,68' : '34,211,238';
  const accent = isVuln ? '#EF4444' : '#22D3EE';
  const accentMid = isVuln ? '#F87171' : '#67E8F9';

  const plaintextRows = [
    'Patient Name: Sarah Mitchell',
    'SSN: 482-91-3047',
    'Diagnosis: Type 2 DM',
  ];
  const encRows = ['a8F2$kL9#mNx!qR', 'Zw3&vP7*jT1@cYs', 'hQ5!rM2#bX9$nKw'];

  return (
    <div
      style={{
        borderRadius: 16,
        border: `1px solid rgba(${accentR}, 0.22)`,
        background: `radial-gradient(ellipse at 50% 90%, rgba(${accentR}, 0.07), transparent 60%), linear-gradient(180deg, rgba(5,13,32,0.9) 0%, rgba(4,10,24,0.95) 100%)`,
        padding: '20px 16px 16px',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: 10,
        height: '100%',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease 0.8s, transform 0.6s ease 0.8s',
      }}
    >
      <StageLabel text="Third-Party Vendor" variant={variant} />

      {/* Server rack illustration */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column' as const,
          alignItems: 'center',
          gap: 8,
          animation: 'floatCloud 4.8s ease-in-out infinite 1s',
        }}
      >
        <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
          {/* Rack outline */}
          <rect
            x="8"
            y="6"
            width="74"
            height="58"
            rx="4"
            fill={`rgba(${accentR}, 0.04)`}
            stroke={`rgba(${accentR}, 0.22)`}
            strokeWidth="1.4"
          />
          {/* Three server blades */}
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect
                x="14"
                y={14 + i * 15}
                width="62"
                height="11"
                rx="2"
                fill={`rgba(${accentR}, 0.07)`}
                stroke={`rgba(${accentR}, 0.18)`}
                strokeWidth="0.8"
              />
              <circle
                cx="22"
                cy={19.5 + i * 15}
                r="2.8"
                fill={`rgba(${accentR}, 0.55)`}
              />
              <rect
                x="28"
                y={17 + i * 15}
                width="34"
                height="2.5"
                rx="1"
                fill={`rgba(${accentR}, 0.22)`}
              />
              <rect
                x="28"
                y={21 + i * 15}
                width="22"
                height="1.5"
                rx="0.8"
                fill={`rgba(${accentR}, 0.12)`}
              />
            </g>
          ))}
          {/* Vendor label */}
          <text
            x="45"
            y="63"
            textAnchor="middle"
            fontSize="7"
            fill={`rgba(${accentR === '239,68,68' ? '248,113,113' : '103,232,249'}, 0.6)`}
            fontWeight="600"
            letterSpacing="0.06em"
          >
            VENDOR STORAGE
          </text>
        </svg>

        {/* Data state display */}
        <div
          style={{
            width: '100%',
            borderRadius: 8,
            padding: '8px 10px',
            background: `rgba(${accentR}, 0.07)`,
            border: `1px solid rgba(${accentR}, 0.2)`,
            display: 'flex',
            flexDirection: 'column' as const,
            gap: 3,
          }}
        >
          <div
            style={{
              fontSize: 8.5,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              color: accentMid,
              marginBottom: 2,
            }}
          >
            {isVuln ? 'Plaintext Storage' : 'Encrypted at Rest'}
          </div>
          {(isVuln ? plaintextRows : encRows).map((row, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                fontSize: 9,
                color: isVuln ? 'rgba(248,113,113,0.8)' : 'rgba(103,232,249,0.7)',
                fontFamily: 'monospace',
                letterSpacing: isVuln ? '0.01em' : '0.04em',
                animation: isVuln ? `rowBlink ${1.5 + i * 0.4}s ease-in-out infinite` : undefined,
              }}
            >
              {!isVuln && <LockIcon color="#22D3EE" size={10} />}
              {row}
            </div>
          ))}
        </div>
      </div>

      {/* Control indicator */}
      <div
        style={{
          borderRadius: 10,
          padding: '8px 10px',
          background: `rgba(${accentR}, 0.06)`,
          border: `1px solid rgba(${accentR}, 0.13)`,
          fontSize: 10.5,
          color: accentMid,
          lineHeight: 1.55,
          textAlign: 'center' as const,
        }}
      >
        {isVuln
          ? 'Health system has zero control over data after delivery — no audit trail'
          : 'Health system retains full control — HIPAA encryption safe harbor applies'}
      </div>

      {/* Access control state */}
      {isVuln ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5,
            padding: '5px 10px',
            borderRadius: 8,
            background: 'rgba(239,68,68,0.07)',
            border: '1px solid rgba(239,68,68,0.2)',
            fontSize: 10,
            fontWeight: 700,
            color: '#F87171',
          }}
        >
          <CrossIcon size={13} />
          No access controls enforced
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column' as const,
            gap: 5,
          }}
        >
          {[
            'Decryption requires policy authorization',
            'Unauthorized access attempts denied',
          ].map((txt, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                fontSize: 10,
                color: 'rgba(103,232,249,0.78)',
                fontWeight: 500,
              }}
            >
              <CheckIcon color="#22D3EE" size={12} />
              {txt}
            </div>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <StatusBadge variant={variant} />
      </div>
    </div>
  );
}

// ── Flow connector between stages ───────────────────────────────────────────
function FlowArrow({ variant, visible }: { variant: Variant; visible: boolean }) {
  const isVuln = variant === 'vulnerable';
  const accent = isVuln ? '#EF4444' : '#22D3EE';
  const accentR = isVuln ? '239,68,68' : '34,211,238';

  return (
    <div
      className="sc-flow-connector"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        width: 44,
        paddingTop: 28,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease 0.6s',
      }}
    >
      <svg width="44" height="24" viewBox="0 0 44 24" fill="none" overflow="visible">
        <line
          x1="0"
          y1="12"
          x2="36"
          y2="12"
          stroke={`rgba(${accentR}, 0.35)`}
          strokeWidth="1.5"
          strokeDasharray="4,3"
        />
        <path
          d="M34 7 L42 12 L34 17"
          stroke={`rgba(${accentR}, 0.55)`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Animated traveling dot */}
        <circle r="3" fill={accent} opacity="0.75">
          <animateMotion dur="1.6s" repeatCount="indefinite" path="M 0 12 L 42 12" calcMode="linear" />
          <animate attributeName="opacity" values="0;0.85;0.85;0" dur="1.6s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

// ── Verdict banner ────────────────────────────────────────────────────────
function VerdictBanner({
  variant,
  visible,
}: {
  variant: Variant;
  visible: boolean;
}) {
  const isVuln = variant === 'vulnerable';

  return (
    <div
      style={{
        marginTop: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: '14px 28px',
        borderRadius: 12,
        background: isVuln
          ? 'linear-gradient(135deg, rgba(239,68,68,0.12), rgba(185,28,28,0.08))'
          : 'linear-gradient(135deg, rgba(34,211,238,0.12), rgba(22,119,255,0.08))',
        border: `1px solid ${isVuln ? 'rgba(239,68,68,0.28)' : 'rgba(34,211,238,0.28)'}`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.98)',
        transition: 'opacity 0.7s ease 1.2s, transform 0.7s ease 1.2s',
      }}
    >
      {isVuln ? (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="9" stroke="#EF4444" strokeWidth="1.5" fill="rgba(239,68,68,0.1)" />
          <path d="M10 6v5" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
          <circle cx="10" cy="14.5" r="1.2" fill="#EF4444" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="9" stroke="#22D3EE" strokeWidth="1.5" fill="rgba(34,211,238,0.1)" />
          <path d="M6 10l3 3 5-5" stroke="#22D3EE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      <span
        style={{
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: '-0.01em',
          color: isVuln ? '#FCA5A5' : '#67E8F9',
        }}
      >
        {isVuln
          ? 'Data Is Vulnerable to Breaches'
          : 'Data Remains Secure Throughout Its Entire Lifecycle'}
      </span>
    </div>
  );
}

// ── VS Divider ─────────────────────────────────────────────────────────────
function VSDivider({ visible }: { visible: boolean }) {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        margin: '48px 0',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.6s ease',
      }}
    >
      <div
        style={{
          flex: 1,
          height: 1,
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.1) 80%, transparent)',
        }}
      />
      <div
        style={{
          flexShrink: 0,
          width: 52,
          height: 52,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(22,119,255,0.15), rgba(34,211,238,0.1))',
          border: '1px solid rgba(255,255,255,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 14,
          fontWeight: 800,
          letterSpacing: '0.04em',
          color: 'rgba(255,255,255,0.85)',
          boxShadow:
            '0 0 24px rgba(22,119,255,0.15), 0 0 48px rgba(34,211,238,0.08)',
          margin: '0 16px',
        }}
      >
        VS
      </div>
      <div
        style={{
          flex: 1,
          height: 1,
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.1) 80%, transparent)',
        }}
      />
    </div>
  );
}

// ── Half heading ────────────────────────────────────────────────────────────
function HalfHeading({
  variant,
  subtitle,
  visible,
}: {
  variant: Variant;
  subtitle?: string;
  visible: boolean;
}) {
  const isVuln = variant === 'vulnerable';

  return (
    <div
      style={{
        textAlign: 'center' as const,
        marginBottom: 28,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {/* Label chip */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '4px 14px',
          borderRadius: 100,
          background: isVuln ? 'rgba(239,68,68,0.08)' : 'rgba(34,211,238,0.08)',
          border: `1px solid ${isVuln ? 'rgba(239,68,68,0.22)' : 'rgba(34,211,238,0.22)'}`,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.06em',
          textTransform: 'uppercase' as const,
          color: isVuln ? '#F87171' : '#22D3EE',
          marginBottom: 14,
        }}
      >
        {isVuln ? (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" stroke="#EF4444" strokeWidth="1.2" fill="rgba(239,68,68,0.1)" />
            <path d="M6 3.5V6.5" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="6" cy="8.5" r="0.9" fill="#EF4444" />
          </svg>
        ) : (
          <SealdShield size={12} uid="heading-secure" />
        )}
        {isVuln ? 'Current Model' : 'Seald Healthcare'}
      </div>

      <h3
        style={{
          fontSize: 'clamp(18px, 2.5vw, 26px)',
          fontWeight: 800,
          color: '#ffffff',
          margin: '0 auto 10px',
          letterSpacing: '-0.02em',
          lineHeight: 1.25,
          maxWidth: 640,
        }}
      >
        {isVuln
          ? 'The Current Healthcare Security Model Leaves Data Vulnerable'
          : 'Seald Healthcare Secures Patient Data at the Source'}
      </h3>

      {subtitle && (
        <p
          style={{
            fontSize: 14.5,
            color: 'rgba(148,163,184,0.85)',
            lineHeight: 1.6,
            maxWidth: 620,
            margin: '0 auto',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ── Main component ──────────────────────────────────────────────────────────
export default function SecurityComparison() {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const [topVisible, setTopVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);
  const [dividerVisible, setDividerVisible] = useState(false);

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReduced) {
      setTopVisible(true);
      setBottomVisible(true);
      setDividerVisible(true);
      return;
    }

    const observers: IntersectionObserver[] = [];

    const makeObserver = (
      ref: React.RefObject<HTMLDivElement | null>,
      setter: (v: boolean) => void,
    ) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            obs.disconnect();
          }
        },
        { threshold: 0.15 },
      );
      if (ref.current) obs.observe(ref.current);
      observers.push(obs);
    };

    makeObserver(topRef, setTopVisible);
    makeObserver(dividerRef, setDividerVisible);
    makeObserver(bottomRef, setBottomVisible);

    return () => observers.forEach((o) => o.disconnect());
  }, [prefersReduced]);

  return (
    <section
      style={{
        position: 'relative',
        padding: '88px 24px 96px',
        background:
          'linear-gradient(180deg, #050d1a 0%, #071428 40%, #060e1f 70%, #050d1a 100%)',
        overflow: 'hidden',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Background ambient glows */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '-8%',
          width: 520,
          height: 520,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(22,119,255,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '-10%',
          width: 480,
          height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(239,68,68,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '8%',
          left: '30%',
          width: 600,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(60px)',
        }}
      />

      {/* Section intro */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: 52,
          maxWidth: 720,
          margin: '0 auto 52px',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            padding: '5px 16px',
            borderRadius: 100,
            background: 'rgba(22,119,255,0.08)',
            border: '1px solid rgba(22,119,255,0.2)',
            fontSize: 11.5,
            fontWeight: 700,
            letterSpacing: '0.07em',
            textTransform: 'uppercase' as const,
            color: '#60A5FA',
            marginBottom: 18,
          }}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path
              d="M6.5 1.5L8.2 5.2L12.5 5.7L9.5 8.5L10.3 12.5L6.5 10.5L2.7 12.5L3.5 8.5L0.5 5.7L4.8 5.2L6.5 1.5Z"
              fill="#3B82F6"
              opacity="0.7"
            />
          </svg>
          Data Security Comparison
        </div>
        <h2
          style={{
            fontSize: 'clamp(26px, 3.5vw, 40px)',
            fontWeight: 800,
            color: '#ffffff',
            margin: '0 auto 14px',
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
          }}
        >
          Why Perimeter Security{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #EF4444, #F87171)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Fails
          </span>{' '}
          — and How{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #22D3EE, #1677FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Seald Healthcare
          </span>{' '}
          Fixes It
        </h2>
        <p
          style={{
            fontSize: 16,
            color: 'rgba(148,163,184,0.85)',
            lineHeight: 1.65,
            maxWidth: 640,
            margin: '0 auto',
          }}
        >
          Today&apos;s healthcare security stops at the perimeter. Once data leaves your systems,
          you lose control. Seald Healthcare changes that with encryption that travels with the data.
        </p>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* ── TOP HALF: Current Model ── */}
        <div ref={topRef}>
          <HalfHeading variant="vulnerable" visible={topVisible} />

          <div
            className="sc-stages-grid"
            style={{
              display: 'grid',
              alignItems: 'start',
            }}
          >
            <CloudStage variant="vulnerable" visible={topVisible} />
            <FlowArrow variant="vulnerable" visible={topVisible} />
            <TransitStage variant="vulnerable" visible={topVisible} />
            <FlowArrow variant="vulnerable" visible={topVisible} />
            <ThirdPartyStage variant="vulnerable" visible={topVisible} />
          </div>

          <VerdictBanner variant="vulnerable" visible={topVisible} />
        </div>

        {/* ── VS Divider ── */}
        <div ref={dividerRef}>
          <VSDivider visible={dividerVisible} />
        </div>

        {/* ── BOTTOM HALF: Seald Healthcare ── */}
        <div ref={bottomRef}>
          <HalfHeading
            variant="secure"
            subtitle="Persistent, policy-driven encryption that travels with the data wherever it goes. Control who, when, where, and how your data is accessed and used."
            visible={bottomVisible}
          />

          <div
            className="sc-stages-grid"
            style={{
              display: 'grid',
              alignItems: 'start',
            }}
          >
            <CloudStage variant="secure" visible={bottomVisible} />
            <FlowArrow variant="secure" visible={bottomVisible} />
            <TransitStage variant="secure" visible={bottomVisible} />
            <FlowArrow variant="secure" visible={bottomVisible} />
            <ThirdPartyStage variant="secure" visible={bottomVisible} />
          </div>

          <VerdictBanner variant="secure" visible={bottomVisible} />
        </div>
      </div>

      {/* Keyframe definitions + responsive grid */}
      <style>{`
        .sc-stages-grid {
          grid-template-columns: 1fr auto 1fr auto 1fr;
        }

        .sc-flow-connector {
          display: flex;
        }

        @media (max-width: 768px) {
          .sc-stages-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .sc-flow-connector {
            display: none;
          }
        }

        @keyframes floatCloud {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }

        @keyframes shieldGlowPulse {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(34,211,238,0.9)) drop-shadow(0 0 20px rgba(34,211,238,0.45));
          }
          50% {
            filter: drop-shadow(0 0 14px rgba(34,211,238,1)) drop-shadow(0 0 30px rgba(34,211,238,0.6)) drop-shadow(0 0 50px rgba(22,119,255,0.25));
          }
        }

        @keyframes keyPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(239,68,68,0);
            border-color: rgba(239,68,68,0.38);
          }
          50% {
            box-shadow: 0 0 0 4px rgba(239,68,68,0.12);
            border-color: rgba(239,68,68,0.6);
          }
        }

        @keyframes redPulse {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50%       { opacity: 1;    transform: scale(1.35); }
        }

        @keyframes cyanPulse {
          0%, 100% { opacity: 0.6;  transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.4); }
        }

        @keyframes rowBlink {
          0%, 80%, 100% { opacity: 0.85; }
          40%            { opacity: 0.35; }
        }

        /* Mobile: stack stages vertically */
        @media (max-width: 768px) {
          .sc-grid-stages {
            grid-template-columns: 1fr !important;
          }
          .sc-flow-arrow {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
