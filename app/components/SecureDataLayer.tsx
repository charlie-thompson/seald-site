'use client';
import { useState } from "react";

const CAPABILITIES = [
  {
    // Sealed envelope with keyhole - distinct from lock icon in Data Protection
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="10" width="26" height="18" rx="3" stroke="#22D3EE" strokeWidth="2" fill="none"/>
        <path d="M3 13l13 8 13-8" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="22" r="2" fill="#22D3EE"/>
        <path d="M16 24v2" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "End-to-End Encryption",
    description: "PHI is encrypted on the sender's device and only decrypted by authorized recipients. No intermediary, including Seald Healthcare, can access plaintext data.",
  },
  {
    // Toggle switch with clock - distinct from shield in Data Protection
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="11" width="20" height="12" rx="6" stroke="#22D3EE" strokeWidth="2" fill="none"/>
        <circle cx="17" cy="17" r="4" fill="#22D3EE" opacity="0.3"/>
        <circle cx="17" cy="17" r="3" stroke="#22D3EE" strokeWidth="1.5" fill="none"/>
        <circle cx="25" cy="9" r="6" stroke="#22D3EE" strokeWidth="1.5" fill="none"/>
        <path d="M25 6v3h2.5" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Persistent Access Policies",
    description: "Control who can access data, from which devices, and during which time windows. Revoke or update permissions at any time, even after data has been shared.",
  },
  {
    // Fingerprint with checkmark - distinct from clipboard in Data Protection
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M10 24c0-6 2-12 6-12s6 6 6 12" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M7 22c0-8 3.5-15 9-15s9 7 9 15" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
        <path d="M13 23c0-3 1.2-6 3-6s3 3 3 6" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
        <circle cx="24" cy="24" r="6" fill="rgba(34,211,238,0.15)" stroke="#22D3EE" strokeWidth="1.5"/>
        <path d="M21.5 24l2 2 3.5-3.5" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Tamper-Evident Audit Logs",
    description: "Every access, denial, and policy change is logged with cryptographic integrity. Logs cannot be altered without detection.",
  },
  {
    // Code brackets with electrical plug - distinct from document icon in Data Protection
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M10 8L4 16l6 8" stroke="#22D3EE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 8l6 8-6 8" stroke="#22D3EE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 6l-4 20" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <circle cx="16" cy="28" r="3" stroke="#22D3EE" strokeWidth="1.5" fill="none"/>
        <path d="M14.5 28h3" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "SDK-First Integration",
    description: "Seamlessly add encryption to your existing applications or workflows. No changes to how you currently operate are required.",
  },
  {
    // Key with circular refresh arrows - distinct from gear/settings icon in Data Protection
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="11" cy="13" r="5" stroke="#22D3EE" strokeWidth="2" fill="none"/>
        <circle cx="11" cy="13" r="2" fill="#22D3EE" opacity="0.4"/>
        <path d="M15 16l10 10" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 26h4v-4" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 4a10 10 0 00-8 4" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <path d="M28 6l-2-2-2 2" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        <path d="M4 28a10 10 0 008-4" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <path d="M2 26l2 2 2-2" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      </svg>
    ),
    title: "Automatic Key Management",
    description: "Encryption keys are issued, rotated, rewrapped, and revoked automatically. No cryptography expertise is needed from your team.",
  },
  {
    // Org chart / hierarchy tree - distinct from people icon in Data Protection
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="11" y="3" width="10" height="8" rx="2" stroke="#22D3EE" strokeWidth="2" fill="none"/>
        <rect x="2" y="21" width="9" height="7" rx="1.5" stroke="#22D3EE" strokeWidth="1.5" fill="none"/>
        <rect x="21" y="21" width="9" height="7" rx="1.5" stroke="#22D3EE" strokeWidth="1.5" fill="none"/>
        <path d="M16 11v4" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6.5 21v-3.5a2 2 0 012-2h15a2 2 0 012 2V21" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="17" r="2" fill="#22D3EE" opacity="0.4"/>
      </svg>
    ),
    title: "Group and Role-Based Access",
    description: "Assign permissions to care teams, departments, or roles. Access updates automatically as group membership changes.",
  },
];

function CapabilityCard({ icon, title, description, index }: { icon: React.ReactNode; title: string; description: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 16,
        padding: 1,
        background: hovered
          ? "linear-gradient(135deg, rgba(34,211,238,0.5), rgba(22,119,255,0.5))"
          : "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(22,119,255,0.08))",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "default",
        animationDelay: `${index * 100}ms`,
        animation: "cardFadeIn 0.6s ease backwards",
      }}
    >
      <div
        style={{
          borderRadius: 15,
          padding: "32px 28px",
          background: hovered
            ? "linear-gradient(135deg, rgba(11,31,59,0.97), rgba(8,22,44,0.99))"
            : "linear-gradient(135deg, rgba(11,31,59,0.85), rgba(5,13,26,0.95))",
          backdropFilter: "blur(20px)",
          height: "100%",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: hovered
            ? "0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(34,211,238,0.08)"
            : "0 4px 16px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 12,
            background: hovered ? "rgba(34,211,238,0.15)" : "rgba(34,211,238,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
            transition: "all 0.4s ease",
            border: "1px solid rgba(34,211,238,0.1)",
          }}
        >
          {icon}
        </div>

        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 12,
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: 14.5,
            lineHeight: 1.7,
            color: "rgba(203,213,225,0.85)",
            margin: 0,
            letterSpacing: "0.005em",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default function SecureDataLayer() {
  return (
    <section
      style={{
        position: "relative",
        padding: "80px 24px",
        background: "linear-gradient(180deg, #050d1a 0%, #0B1F3B 50%, #050d1a 100%)",
        overflow: "hidden",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(22,119,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "-5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 100,
              background: "rgba(34,211,238,0.08)",
              border: "1px solid rgba(34,211,238,0.15)",
              marginBottom: 20,
              fontSize: 13,
              fontWeight: 600,
              color: "#22D3EE",
              letterSpacing: "0.04em",
              textTransform: "uppercase" as const,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L9 5L13 5.5L10 8.5L10.8 13L7 11L3.2 13L4 8.5L1 5.5L5 5L7 1Z" fill="#22D3EE"/>
            </svg>
            Capabilities
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: 16,
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
            }}
          >
            The Secure Data Layer{" "}
            <br className="md:hidden" />
            <span
              style={{
                background: "linear-gradient(135deg, #22D3EE, #1677FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              for Healthcare
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(16px, 2vw, 19px)",
              lineHeight: 1.6,
              color: "rgba(148,163,184,0.9)",
              maxWidth: 680,
              margin: "0 auto",
              letterSpacing: "0.005em",
            }}
          >
            Everything you need to encrypt PHI at the source, enforce access policies in real time, and maintain a complete chain of custody. Seald secures data at the layer that matters most, giving you control over who accesses your data, how, and under what conditions, even after it leaves your systems and reaches third-party vendors, business associates, and partners. When a vendor is breached or a contract expires, your data stays protected.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {CAPABILITIES.map((cap, i) => (
            <CapabilityCard key={i} {...cap} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
