'use client';
import React from "react";

export default function AboutHeroGraphic() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 520,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Main card */}
      <div
        style={{
          background: "linear-gradient(135deg, #0B1F3B 0%, #050d1a 100%)",
          borderRadius: 20,
          padding: "36px 32px 32px",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 25px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        {/* Background grid pattern */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04 }}
          viewBox="0 0 400 500"
          preserveAspectRatio="none"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 25} x2="400" y2={i * 25} stroke="white" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 25} y1="0" x2={i * 25} y2="500" stroke="white" strokeWidth="0.5" />
          ))}
        </svg>

        {/* Subtle glow orbs */}
        <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -30, left: -30, width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Header */}
        <div style={{ position: "relative", zIndex: 1, marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ef4444", boxShadow: "0 0 8px rgba(239,68,68,0.5)", animation: "pulse 2s ease-in-out infinite" }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: "#ef4444", textTransform: "uppercase", letterSpacing: "0.1em" }}>Healthcare Data Crisis</span>
          </div>
          <h3 style={{ fontSize: 22, fontWeight: 800, color: "white", margin: 0, lineHeight: 1.3, letterSpacing: "-0.02em" }}>
            The Breach Problem<br />
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, fontWeight: 500 }}>by the numbers</span>
          </h3>
        </div>

        {/* Stats grid */}
        <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
          {/* Stat 1 */}
          <div style={{
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.15)",
            borderRadius: 14,
            padding: "20px 16px",
          }}>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#ef4444", lineHeight: 1, marginBottom: 4 }}>846M+</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>Patient records exposed since 2009</div>
          </div>

          {/* Stat 2 */}
          <div style={{
            background: "rgba(245,158,11,0.08)",
            border: "1px solid rgba(245,158,11,0.15)",
            borderRadius: 14,
            padding: "20px 16px",
          }}>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#f59e0b", lineHeight: 1, marginBottom: 4 }}>$10M</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>Average cost per healthcare breach</div>
          </div>

          {/* Stat 3 */}
          <div style={{
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.15)",
            borderRadius: 14,
            padding: "20px 16px",
          }}>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#ef4444", lineHeight: 1, marginBottom: 4 }}>725+</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>Major breaches reported in 2023 alone</div>
          </div>

          {/* Stat 4 */}
          <div style={{
            background: "rgba(245,158,11,0.08)",
            border: "1px solid rgba(245,158,11,0.15)",
            borderRadius: 14,
            padding: "20px 16px",
          }}>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#f59e0b", lineHeight: 1, marginBottom: 4 }}>14yrs</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>Healthcare has led all industries in breach cost</div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ position: "relative", zIndex: 1, height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 20 }} />

        {/* The problem vs the solution */}
        <div style={{ position: "relative", zIndex: 1, display: "flex", gap: 16 }}>
          {/* Problem */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="#ef4444" strokeWidth="1.5" fill="none" />
                <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#ef4444", textTransform: "uppercase", letterSpacing: "0.06em" }}>Today</span>
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
              Perimeter-only security. Data sits in plaintext. Compliant on paper, vulnerable in practice.
            </div>
          </div>

          {/* Arrow */}
          <div style={{ display: "flex", alignItems: "center", flexShrink: 0, padding: "0 4px" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Solution */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L14 4V8C14 12 11 15 8 16C5 15 2 12 2 8V4L8 1Z" fill="#22D3EE" opacity="0.2" stroke="#22D3EE" strokeWidth="1.5" />
                <path d="M5.5 8l2 2 3.5-3.5" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#22D3EE", textTransform: "uppercase", letterSpacing: "0.06em" }}>With Seald Healthcare</span>
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
              Data encrypted at the source. Zero plaintext exposure. Secure even during a breach.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
