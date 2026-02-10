'use client'
import { useState, useEffect, useRef } from "react";

// ─── Seald Healthcare — Encryption Sweep Animation v2 ───
// White screen, three-column table layout, shield sweeps to encrypt.

const PLAINTEXT_ROWS = [
  { label: "Patient Name", value: "Sarah Mitchell" },
  { label: "DOB", value: "03/15/1987" },
  { label: "SSN", value: "482-91-3047" },
  { label: "MRN", value: "MRN-20948571" },
  { label: "Diagnosis", value: "Type 2 Diabetes Mellitus" },
  { label: "Medication", value: "Metformin 500mg BID" },
  { label: "Allergies", value: "Penicillin, Sulfa" },
  { label: "Provider", value: "Dr. James Carter, MD" },
  { label: "Insurance ID", value: "BC-8834921-A" },
  { label: "Last Visit", value: "01/22/2026" },
];

const ENCRYPTED_ROWS = [
  { label: "Patient Name", value: "a8F2$kL9#mNx!qR" },
  { label: "DOB", value: "Zw3&vP7*jT1@cYs" },
  { label: "SSN", value: "hQ5!rM2#bX9$nKw" },
  { label: "MRN", value: "pL8@fG4&dR6*tVz" },
  { label: "Diagnosis", value: "mJ3#wN7!kS1$xBq" },
  { label: "Medication", value: "yC6*hF2@rT8&nLp" },
  { label: "Allergies", value: "dW9$bK5#mQ3!vXz" },
  { label: "Provider", value: "tR4&jL8*fN2@cHw" },
  { label: "Insurance ID", value: "gS7!xP1#kM6$bYr" },
  { label: "Last Visit", value: "qV2@nJ5&wT9*hDf" },
];

function SealdShield({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path
        d="M32 4 L56 16 V36 C56 48 44 58 32 62 C20 58 8 48 8 36 V16 L32 4Z"
        fill="url(#shieldGrad)"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1"
      />
      <rect x="27" y="20" width="10" height="24" rx="2" fill="rgba(255,255,255,0.9)" />
      <rect x="20" y="27" width="24" height="10" rx="2" fill="rgba(255,255,255,0.9)" />
      <polyline
        points="18,34 25,34 28,26 32,40 36,30 39,34 46,34"
        stroke="#22D3EE"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <defs>
        <linearGradient id="shieldGrad" x1="8" y1="4" x2="56" y2="62">
          <stop offset="0%" stopColor="#1677FF" />
          <stop offset="100%" stopColor="#0B5CFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Particle({ style }) {
  return (
    <div
      style={{
        position: "absolute",
        width: 4,
        height: 4,
        borderRadius: "50%",
        background: "#1677FF",
        opacity: 0.6,
        ...style,
      }}
    />
  );
}

export default function SealdEncryptionHero() {
  const [sweepProgress, setSweepProgress] = useState(-0.05);
  const [phase, setPhase] = useState("idle");
  const [particles, setParticles] = useState([]);
  const animRef = useRef(null);

  useEffect(() => {
    let timeout;
    const runCycle = () => {
      setPhase("sweeping");
      setSweepProgress(-0.05);

      let start = null;
      const duration = 2800;

      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1.05);
        setSweepProgress(progress);

        if (progress > 0 && progress < 1 && Math.random() > 0.7) {
          setParticles((prev) => [
            ...prev.slice(-12),
            {
              id: Date.now() + Math.random(),
              x: progress * 100,
              y: 10 + Math.random() * 80,
              vx: (Math.random() - 0.5) * 3,
              vy: (Math.random() - 0.5) * 3,
            },
          ]);
        }

        if (progress < 1.05) {
          animRef.current = requestAnimationFrame(animate);
        } else {
          setPhase("done");
          timeout = setTimeout(() => {
            setPhase("resetting");
            setSweepProgress(-0.05);
            setParticles([]);
            timeout = setTimeout(() => {
              setPhase("idle");
              timeout = setTimeout(runCycle, 1200);
            }, 600);
          }, 3000);
        }
      };

      animRef.current = requestAnimationFrame(animate);
    };

    timeout = setTimeout(runCycle, 1500);

    return () => {
      clearTimeout(timeout);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => prev.filter((p) => Date.now() - p.id < 1500));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const sweepX = sweepProgress * 100;

  const getRowState = (i) => {
    const isEncrypted =
      phase === "done" ||
      (phase === "sweeping" && sweepProgress > (i + 1) / PLAINTEXT_ROWS.length);
    const isBeingEncrypted =
      phase === "sweeping" &&
      sweepProgress > i / PLAINTEXT_ROWS.length &&
      sweepProgress <= (i + 1) / PLAINTEXT_ROWS.length;
    return { isEncrypted, isBeingEncrypted };
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 540,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Monitor frame */}
      <div
        style={{
          background: "linear-gradient(135deg, #d0d5dc 0%, #b8bfc8 50%, #a8b0ba 100%)",
          borderRadius: 16,
          padding: 3,
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 25px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)",
        }}
      >
        {/* Top bezel */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "10px 16px",
            background: "linear-gradient(180deg, #e8ebef 0%, #dfe2e7 100%)",
            borderRadius: "13px 13px 0 0",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
          <div
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: 11,
              color: "#8a919a",
              letterSpacing: "0.05em",
              fontWeight: 500,
            }}
          >
            patient_records.db
          </div>
        </div>

        {/* White screen */}
        <div
          style={{
            position: "relative",
            overflow: "clip",
            borderRadius: "0 0 13px 13px",
            background: "#ffffff",
            width: "100%",
            minHeight: 370,
          }}
        >
          {/* Column headers */}
          <div
            style={{
              display: "flex",
              padding: "12px 24px 8px",
              borderBottom: "2px solid #e5e7eb",
            }}
          >
            <div style={{ ...colHeaderStyle, width: 130, flexShrink: 0 }}>Field</div>
            <div style={{ ...colHeaderStyle, flex: 1 }}>Value</div>
            <div style={{ ...colHeaderStyle, width: 80, flexShrink: 0, textAlign: "center" }}>Status</div>
          </div>

          {/* Data rows */}
          {PLAINTEXT_ROWS.map((row, i) => {
            const { isEncrypted, isBeingEncrypted } = getRowState(i);

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px 24px",
                  fontSize: 13,
                  fontFamily: '"SF Mono", "Fira Code", "Consolas", monospace',
                  borderBottom: "1px solid #f3f4f6",
                  transition: phase === "resetting" ? "background 0.5s ease" : "background 0.2s ease",
                  background: isEncrypted
                    ? "rgba(22,119,255,0.04)"
                    : isBeingEncrypted
                      ? "rgba(22,119,255,0.08)"
                      : i % 2 === 0
                        ? "#ffffff"
                        : "#fafbfc",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* Label */}
                <span
                  style={{
                    width: 130,
                    flexShrink: 0,
                    color: isEncrypted ? "#1677FF" : "#6b7280",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    transition: "color 0.3s ease",
                  }}
                >
                  {row.label}
                </span>

                {/* Value */}
                <span
                  style={{
                    flex: 1,
                    color: isEncrypted ? "#0B5CFF" : "#1f2937",
                    fontWeight: isEncrypted ? 600 : 400,
                    letterSpacing: isEncrypted ? "0.06em" : "0.01em",
                    transition: phase === "resetting" ? "all 0.5s ease" : "all 0.2s ease",
                    filter: isBeingEncrypted ? "blur(3px)" : "none",
                    fontSize: isEncrypted ? 12 : 13,
                  }}
                >
                  {isEncrypted || isBeingEncrypted ? ENCRYPTED_ROWS[i].value : row.value}
                </span>

                {/* Status badge */}
                <span
                  style={{
                    width: 80,
                    flexShrink: 0,
                    textAlign: "center",
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    transition: "all 0.3s ease",
                    color: isEncrypted ? "#059669" : "#d97706",
                    background: isEncrypted ? "rgba(5,150,105,0.1)" : "rgba(217,119,6,0.08)",
                    padding: "3px 8px",
                    borderRadius: 20,
                    whiteSpace: "nowrap",
                  }}
                >
                  {isEncrypted ? <><img src="/brand/seald-shield-icon.png" alt="Seald" style={{ width: 14, height: 14, display: 'inline-block', verticalAlign: 'middle', marginRight: 2 }} /> Seald</> : "⚠ Open"}
                </span>
              </div>
            );
          })}

          {/* ─── Sweep line + Shield ─── */}
          {phase === "sweeping" && sweepProgress >= 0 && sweepProgress <= 1 && (
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: `${sweepX}%`,
                width: 3,
                zIndex: 10,
                overflow: "hidden",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: -2,
                  width: 6,
                  background:
                    "linear-gradient(180deg, rgba(22,119,255,0.6) 0%, rgba(11,92,255,0.9) 50%, rgba(22,119,255,0.6) 100%)",
                  boxShadow:
                    "0 0 24px rgba(22,119,255,0.5), 0 0 48px rgba(11,92,255,0.25), 0 0 80px rgba(22,119,255,0.1)",
                  borderRadius: 4,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: -60,
                  width: 100,
                  background: "radial-gradient(ellipse at center, rgba(22,119,255,0.08) 0%, transparent 70%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  filter: "drop-shadow(0 0 20px rgba(22,119,255,0.6)) drop-shadow(0 4px 12px rgba(0,0,0,0.15))",
                  animation: "shieldPulse 1s ease-in-out infinite",
                }}
              >
                <SealdShield size={44} />
              </div>
            </div>
          )}

          {/* Particles */}
          {particles.map((p) => {
            const age = (Date.now() - p.id) / 1500;
            return (
              <Particle
                key={p.id}
                style={{
                  left: `calc(${p.x}% + ${p.vx * age * 30}px)`,
                  top: `calc(${p.y}% + ${p.vy * age * 30}px)`,
                  opacity: 0.5 * (1 - age),
                  transform: `scale(${1 - age * 0.5})`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Monitor stand */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: 70,
            height: 26,
            background: "linear-gradient(180deg, #c8cdd4 0%, #b0b6bf 100%)",
            borderRadius: "0 0 4px 4px",
          }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: 130,
            height: 8,
            background: "linear-gradient(180deg, #bcc2ca 0%, #a8aeb7 100%)",
            borderRadius: "0 0 8px 8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
          }}
        />
      </div>

      {/* Status text — larger and bolder */}
      <div
        style={{
          textAlign: "center",
          marginTop: 22,
          fontSize: 17,
          fontWeight: 600,
          letterSpacing: "0.02em",
          lineHeight: 1.4,
        }}
      >
        {phase === "idle" || phase === "resetting" ? (
          <span style={{ color: "#d97706" }}>
            <span style={{ fontSize: 20, verticalAlign: "middle" }}>⚠</span>{" "}
            Plaintext PHI detected — data exposed
          </span>
        ) : phase === "sweeping" ? (
          <span style={{ color: "#1677FF" }}>
            <span style={{ animation: "blink 0.8s infinite", fontSize: 20, verticalAlign: "middle" }}>⟩</span>{" "}
            Seald encrypting at the data layer...
          </span>
        ) : (
          <span style={{ color: "#059669" }}>
            <span style={{ fontSize: 20, verticalAlign: "middle" }}>✓</span>{" "}
            All PHI encrypted — zero plaintext exposure
          </span>
        )}
      </div>

      <style>{`
        @keyframes shieldPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.08); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}

const colHeaderStyle = {
  fontSize: 10,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: "#9ca3af",
  fontFamily: '"SF Mono", "Fira Code", "Consolas", monospace',
};
