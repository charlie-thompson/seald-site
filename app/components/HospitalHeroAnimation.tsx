'use client';

export default function HospitalHeroAnimation() {
  return (
    <div style={{ width: '100%', maxWidth: 440, margin: '0 auto' }}>
      <svg
        viewBox="0 0 400 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="hha-blue-glow" cx="50%" cy="25%" r="40%">
            <stop offset="0%" stopColor="#007FF2" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#007FF2" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hha-shield-glow" cx="50%" cy="80%" r="25%">
            <stop offset="0%" stopColor="#42CCF3" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#42CCF3" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hha-chain-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#007FF2" />
            <stop offset="100%" stopColor="#42CCF3" />
          </linearGradient>
        </defs>

        <style>{`
          @media (prefers-reduced-motion: reduce) {
            .hha-building, .hha-shield, .hha-chain-link,
            .hha-wrap-arc, .hha-data-node, .hha-orbit,
            .hha-shield-breathe {
              animation: none !important;
              opacity: 1 !important;
              stroke-dashoffset: 0 !important;
            }
          }

          .hha-building {
            animation: hhaFadeDown 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both;
          }
          .hha-shield {
            animation: hhaRiseUp 0.8s ease-out 0.7s both;
          }
          .hha-shield-breathe {
            animation: hhaBreathe 3.5s ease-in-out infinite 2.5s;
            transform-box: fill-box;
            transform-origin: center;
          }
          .hha-chain-link {
            opacity: 0;
            transform-box: fill-box;
            transform-origin: center;
          }
          .hha-cl-1 { animation: hhaLinkIn 0.35s ease-out 1.1s both; }
          .hha-cl-2 { animation: hhaLinkIn 0.35s ease-out 1.22s both; }
          .hha-cl-3 { animation: hhaLinkIn 0.35s ease-out 1.34s both; }
          .hha-cl-4 { animation: hhaLinkIn 0.35s ease-out 1.46s both; }
          .hha-cl-5 { animation: hhaLinkIn 0.35s ease-out 1.58s both; }

          .hha-wrap-arc {
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
          }
          .hha-wrap-left  { animation: hhaDraw 1.2s ease-out 1.5s forwards; }
          .hha-wrap-right { animation: hhaDraw 1.2s ease-out 1.65s forwards; }

          .hha-data-node {
            animation: hhaNodePulse 3s ease-in-out infinite;
          }
          .hha-orbit {
            animation: hhaOrbit 25s linear infinite;
            transform-box: fill-box;
            transform-origin: center;
          }

          @keyframes hhaFadeDown {
            0%  { opacity: 0; transform: translateY(-20px); }
            65% { opacity: 1; transform: translateY(4px); }
            100%{ opacity: 1; transform: translateY(0); }
          }
          @keyframes hhaRiseUp {
            0%  { opacity: 0; transform: translateY(30px) scale(0.92); }
            100%{ opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes hhaBreathe {
            0%, 100% { transform: scale(1); }
            50%      { transform: scale(1.03); }
          }
          @keyframes hhaLinkIn {
            0%  { opacity: 0; transform: scale(0.3); }
            100%{ opacity: 1; transform: scale(1); }
          }
          @keyframes hhaDraw {
            to { stroke-dashoffset: 0; }
          }
          @keyframes hhaNodePulse {
            0%, 100% { opacity: 0.4; }
            50%      { opacity: 1; }
          }
          @keyframes hhaOrbit {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
        `}</style>

        {/* Background glows */}
        <circle cx="200" cy="110" r="160" fill="url(#hha-blue-glow)" />
        <circle cx="200" cy="340" r="110" fill="url(#hha-shield-glow)" />

        {/* Orbit ring */}
        <ellipse
          className="hha-orbit"
          cx="200" cy="110" rx="145" ry="56"
          stroke="#007FF2" strokeWidth="0.6" strokeDasharray="5 8"
          fill="none" opacity="0.25"
        />

        {/* ── Hospital building ── */}
        <g className="hha-building">
          {/* Left wing */}
          <rect x="120" y="95" width="55" height="75" rx="4"
            stroke="#007FF2" strokeWidth="1.5" fill="rgba(0,127,242,0.03)" />
          {/* Right wing */}
          <rect x="225" y="95" width="55" height="75" rx="4"
            stroke="#007FF2" strokeWidth="1.5" fill="rgba(0,127,242,0.03)" />
          {/* Center tower */}
          <rect x="160" y="50" width="80" height="120" rx="5"
            stroke="#007FF2" strokeWidth="2" fill="rgba(0,127,242,0.05)" />

          {/* Medical cross */}
          <line x1="200" y1="64" x2="200" y2="96"
            stroke="#42CCF3" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="184" y1="80" x2="216" y2="80"
            stroke="#42CCF3" strokeWidth="2.5" strokeLinecap="round" />

          {/* Tower windows row 1 */}
          <rect x="175" y="106" width="10" height="12" rx="2"
            fill="rgba(66,204,243,0.15)" stroke="rgba(66,204,243,0.3)" strokeWidth="0.5" />
          <rect x="195" y="106" width="10" height="12" rx="2"
            fill="rgba(66,204,243,0.15)" stroke="rgba(66,204,243,0.3)" strokeWidth="0.5" />
          <rect x="215" y="106" width="10" height="12" rx="2"
            fill="rgba(66,204,243,0.15)" stroke="rgba(66,204,243,0.3)" strokeWidth="0.5" />
          {/* Tower windows row 2 */}
          <rect x="175" y="126" width="10" height="12" rx="2"
            fill="rgba(66,204,243,0.1)" stroke="rgba(66,204,243,0.25)" strokeWidth="0.5" />
          <rect x="195" y="126" width="10" height="12" rx="2"
            fill="rgba(66,204,243,0.1)" stroke="rgba(66,204,243,0.25)" strokeWidth="0.5" />
          <rect x="215" y="126" width="10" height="12" rx="2"
            fill="rgba(66,204,243,0.1)" stroke="rgba(66,204,243,0.25)" strokeWidth="0.5" />

          {/* Left wing windows */}
          <rect x="133" y="108" width="8" height="10" rx="1.5"
            fill="rgba(0,167,248,0.1)" stroke="rgba(0,167,248,0.25)" strokeWidth="0.5" />
          <rect x="151" y="108" width="8" height="10" rx="1.5"
            fill="rgba(0,167,248,0.1)" stroke="rgba(0,167,248,0.25)" strokeWidth="0.5" />
          <rect x="133" y="126" width="8" height="10" rx="1.5"
            fill="rgba(0,167,248,0.08)" stroke="rgba(0,167,248,0.2)" strokeWidth="0.5" />
          <rect x="151" y="126" width="8" height="10" rx="1.5"
            fill="rgba(0,167,248,0.08)" stroke="rgba(0,167,248,0.2)" strokeWidth="0.5" />

          {/* Right wing windows */}
          <rect x="240" y="108" width="8" height="10" rx="1.5"
            fill="rgba(0,167,248,0.1)" stroke="rgba(0,167,248,0.25)" strokeWidth="0.5" />
          <rect x="258" y="108" width="8" height="10" rx="1.5"
            fill="rgba(0,167,248,0.1)" stroke="rgba(0,167,248,0.25)" strokeWidth="0.5" />
          <rect x="240" y="126" width="8" height="10" rx="1.5"
            fill="rgba(0,167,248,0.08)" stroke="rgba(0,167,248,0.2)" strokeWidth="0.5" />
          <rect x="258" y="126" width="8" height="10" rx="1.5"
            fill="rgba(0,167,248,0.08)" stroke="rgba(0,167,248,0.2)" strokeWidth="0.5" />

          {/* Door */}
          <rect x="191" y="148" width="18" height="22" rx="9"
            stroke="#007FF2" strokeWidth="1" fill="rgba(0,127,242,0.08)" />
        </g>

        {/* ── Chain link segments ── */}
        <rect className="hha-chain-link hha-cl-1" x="193" y="182" width="14" height="8" rx="4"
          stroke="url(#hha-chain-grad)" strokeWidth="1.5" fill="rgba(66,204,243,0.06)" />
        <rect className="hha-chain-link hha-cl-2" x="193" y="203" width="14" height="8" rx="4"
          stroke="url(#hha-chain-grad)" strokeWidth="1.5" fill="rgba(66,204,243,0.06)" />
        <rect className="hha-chain-link hha-cl-3" x="193" y="224" width="14" height="8" rx="4"
          stroke="url(#hha-chain-grad)" strokeWidth="1.5" fill="rgba(66,204,243,0.06)" />
        <rect className="hha-chain-link hha-cl-4" x="193" y="245" width="14" height="8" rx="4"
          stroke="url(#hha-chain-grad)" strokeWidth="1.5" fill="rgba(66,204,243,0.06)" />
        <rect className="hha-chain-link hha-cl-5" x="193" y="266" width="14" height="8" rx="4"
          stroke="url(#hha-chain-grad)" strokeWidth="1.5" fill="rgba(66,204,243,0.06)" />

        {/* ── Wrapping arcs ── */}
        <path className="hha-wrap-arc hha-wrap-left"
          d="M180 295 C130 265 105 200 120 130 Q122 112 140 95"
          stroke="#007FF2" strokeWidth="1" fill="none" opacity="0.3" />
        <path className="hha-wrap-arc hha-wrap-right"
          d="M220 295 C270 265 295 200 280 130 Q278 112 260 95"
          stroke="#007FF2" strokeWidth="1" fill="none" opacity="0.3" />

        {/* ── Data nodes ── */}
        <circle className="hha-data-node" cx="185" cy="196" r="2.5" fill="#42CCF3"
          style={{ animationDelay: '0s' }} />
        <circle className="hha-data-node" cx="215" cy="217" r="2" fill="#00A7F8"
          style={{ animationDelay: '1s' }} />
        <circle className="hha-data-node" cx="185" cy="238" r="2.5" fill="#42CCF3"
          style={{ animationDelay: '2s' }} />
        <circle className="hha-data-node" cx="215" cy="259" r="2" fill="#007FF2"
          style={{ animationDelay: '0.5s' }} />

        {/* ── Seald shield ── */}
        <g className="hha-shield">
          <g className="hha-shield-breathe">
            {/* Outer shield */}
            <path
              d="M200 295 L240 312 L240 348 Q240 376 200 392 Q160 376 160 348 L160 312 Z"
              stroke="#00A7F8" strokeWidth="2" fill="rgba(0,167,248,0.05)"
            />
            {/* Inner shield */}
            <path
              d="M200 306 L228 318 L228 346 Q228 368 200 380 Q172 368 172 346 L172 318 Z"
              stroke="#42CCF3" strokeWidth="1" fill="rgba(66,204,243,0.03)"
            />
            {/* Checkmark */}
            <path
              d="M188 342 L197 352 L215 334"
              stroke="#42CCF3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
