import Image from "next/image";

export default function HeroGraphic() {
  return (
    <div className="relative h-[500px] w-[500px] lg:h-[600px] lg:w-[600px]">

      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-full w-full"
      >
        <defs>
          {/* Shield glow */}
          <filter id="shield-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Node glow */}
          <filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="shield-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="50%" stopColor="#1677FF" />
            <stop offset="100%" stopColor="#0B5CFF" />
          </linearGradient>

          <linearGradient id="ring-grad-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#1677FF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.5" />
          </linearGradient>

          <linearGradient id="ring-grad-2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1677FF" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#0B5CFF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#1677FF" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="ring-grad-3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0B5CFF" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0B5CFF" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* ---- Ring 1 (innermost, steep tilt) ---- */}
        <g className="hero-ring-1" style={{ transformOrigin: '200px 200px' }}>
          <ellipse
            cx="200" cy="200" rx="110" ry="38"
            stroke="url(#ring-grad-1)" strokeWidth="1" fill="none"
            style={{ transform: 'rotateX(65deg) rotateZ(-15deg)', transformOrigin: '200px 200px' }}
          />
          {/* Node 1 - dot */}
          <circle cx="310" cy="200" r="4" fill="#22D3EE" filter="url(#node-glow)" className="hero-node-pulse" />
          {/* Node 2 - lock icon */}
          <g transform="translate(90, 200)" filter="url(#node-glow)" className="hero-node-pulse-delayed">
            <rect x="-4" y="-2" width="8" height="6" rx="1" fill="#22D3EE" />
            <path d="M-2,-2 L-2,-4 A2,2 0 0,1 2,-4 L2,-2" stroke="#22D3EE" strokeWidth="1.2" fill="none" />
          </g>
        </g>

        {/* ---- Ring 2 (middle, moderate tilt) ---- */}
        <g className="hero-ring-2" style={{ transformOrigin: '200px 200px' }}>
          <ellipse
            cx="200" cy="200" rx="145" ry="50"
            stroke="url(#ring-grad-2)" strokeWidth="1" fill="none"
            style={{ transform: 'rotateX(60deg) rotateZ(30deg)', transformOrigin: '200px 200px' }}
          />
          {/* Node 3 */}
          <circle cx="345" cy="200" r="3.5" fill="#1677FF" filter="url(#node-glow)" className="hero-node-pulse" />
          {/* Node 4 - lock */}
          <g transform="translate(55, 200)" filter="url(#node-glow)" className="hero-node-pulse-delayed">
            <rect x="-3.5" y="-1.5" width="7" height="5" rx="1" fill="#1677FF" />
            <path d="M-1.5,-1.5 L-1.5,-3.5 A1.5,1.5 0 0,1 1.5,-3.5 L1.5,-1.5" stroke="#1677FF" strokeWidth="1" fill="none" />
          </g>
        </g>

        {/* ---- Ring 3 (outermost, gentle tilt) ---- */}
        <g className="hero-ring-3" style={{ transformOrigin: '200px 200px' }}>
          <ellipse
            cx="200" cy="200" rx="175" ry="60"
            stroke="url(#ring-grad-3)" strokeWidth="0.8" fill="none"
            style={{ transform: 'rotateX(55deg) rotateZ(-45deg)', transformOrigin: '200px 200px' }}
          />
          {/* Node 5 */}
          <circle cx="375" cy="200" r="3" fill="#0B5CFF" filter="url(#node-glow)" className="hero-node-pulse" />
          {/* Node 6 */}
          <circle cx="25" cy="200" r="3" fill="#22D3EE" filter="url(#node-glow)" className="hero-node-pulse-delayed" />
        </g>

      </svg>

      {/* ---- Central shield image ---- */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="hero-shield-pulse">
          <Image
            src="/images/seald_icon.svg"
            alt="Seald Healthcare | Shield Icon"
            width={200}
            height={200}
            className="h-[180px] w-[180px] lg:h-[200px] lg:w-[200px] drop-shadow-[0_0_20px_rgba(22,119,255,0.4)]"
          />
        </div>
      </div>
    </div>
  );
}
