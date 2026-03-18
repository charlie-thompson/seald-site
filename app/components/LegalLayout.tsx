import Link from 'next/link';

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: '#ffffff' }}>
      {/* Page header */}
      <div
        style={{
          background: '#F6FAFF',
          borderBottom: '1px solid rgba(230,238,248,0.9)',
          padding: '56px 24px 48px',
        }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              marginBottom: 14,
              fontSize: 12,
              color: '#6B83A0',
            }}
          >
            <Link
              href="/"
              style={{ color: '#6B83A0', textDecoration: 'none' }}
            >
              Seald Healthcare
            </Link>
            <span>/</span>
            <span style={{ color: '#1677FF', fontWeight: 600 }}>Legal</span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 800,
              color: '#0B1F3B',
              letterSpacing: '-0.022em',
              lineHeight: 1.15,
              marginBottom: 12,
            }}
          >
            {title}
          </h1>
          <p style={{ fontSize: 13.5, color: '#6B83A0' }}>
            Last Updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Legal content */}
      <div style={{ padding: '56px 24px 96px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ── Shared prose primitives used by each legal page ──────────────────── */

export function LSection({ children }: { children: React.ReactNode }) {
  return <section style={{ marginBottom: 40 }}>{children}</section>;
}

export function LH2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: 19,
        fontWeight: 700,
        color: '#0B1F3B',
        letterSpacing: '-0.01em',
        marginBottom: 10,
        marginTop: 0,
        paddingBottom: 8,
        borderBottom: '1px solid rgba(230,238,248,0.9)',
      }}
    >
      {children}
    </h2>
  );
}

export function LH3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontSize: 15,
        fontWeight: 700,
        color: '#0B1F3B',
        marginBottom: 6,
        marginTop: 20,
      }}
    >
      {children}
    </h3>
  );
}

export function LP({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 15.5,
        lineHeight: 1.75,
        color: '#3B5578',
        marginBottom: 14,
      }}
    >
      {children}
    </p>
  );
}

export function LUL({ children }: { children: React.ReactNode }) {
  return (
    <ul
      style={{
        fontSize: 15.5,
        lineHeight: 1.75,
        color: '#3B5578',
        paddingLeft: 22,
        marginBottom: 14,
        listStyleType: 'disc',
      }}
    >
      {children}
    </ul>
  );
}

export function LLI({ children }: { children: React.ReactNode }) {
  return <li style={{ marginBottom: 5 }}>{children}</li>;
}

export function LA({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      style={{ color: '#1677FF', textDecoration: 'none', fontWeight: 500 }}
    >
      {children}
    </a>
  );
}
