import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/app/components/Container";
import SectionHeading from "@/app/components/SectionHeading";
import GlassCard from "@/app/components/GlassCard";
import { PrimaryButton } from "@/app/components/Buttons";

export const metadata: Metadata = {
  title: "How It Works | Seald Healthcare",
  description:
    "How Seald protects PHI with end-to-end encryption, policy enforcement, tamper-evident audit logging, and SDK-first integration.",
};

const threatModelItems = [
  {
    threat: "Compromised server or cloud provider",
    mitigation:
      "Data is encrypted client-side before storage. A breach at the server or cloud layer exposes only ciphertext.",
  },
  {
    threat: "Unauthorized internal access",
    mitigation:
      "Even administrators cannot decrypt data without explicit policy authorization. Zero-knowledge architecture means Seald itself has no access.",
  },
  {
    threat: "Data shared beyond intended recipients",
    mitigation:
      "Access policies are enforced at decryption time. Revoke access to any data at any time, regardless of where copies exist.",
  },
  {
    threat: "Tampering with audit records",
    mitigation:
      "Audit logs are cryptographically chained. Any modification to historical records is detectable.",
  },
];

const auditFeatures = [
  "Every encryption, decryption, and policy change event is recorded",
  "Logs include user identity, device, timestamp, and IP address",
  "Cryptographic chaining ensures tamper evidence",
  "Export logs to your SIEM or compliance platform",
  "Supports HIPAA audit requirements out of the box",
];

const ecosystemItems = [
  "EHR and EMR platforms",
  "Patient portals and messaging",
  "Claims and benefits systems",
  "Lab information systems",
  "AI and analytics pipelines",
  "File sharing and collaboration tools",
];

const faq = [
  {
    q: "Does Seald replace our existing encryption?",
    a: "No. Seald adds a layer of end-to-end encryption on top of TLS and at-rest encryption. It protects data after it leaves your perimeter, which is where most breaches happen.",
  },
  {
    q: "Does Seald replace TLS or at-rest encryption?",
    a: "No. TLS protects data in transit between systems. At-rest encryption protects data on disk. Seald adds a third layer: end-to-end encryption that protects data across trust boundaries, even after it has been shared with external parties.",
  },
  {
    q: "How long does integration take?",
    a: "Most teams complete a proof-of-concept integration within a few weeks using our SDKs and documentation. Full production rollouts depend on the scope of the deployment.",
  },
  {
    q: "Does Seald have access to our data?",
    a: "No. Seald operates on a zero-knowledge architecture. We manage key distribution and policy enforcement, but we never see plaintext data.",
  },
  {
    q: "What standards does Seald support?",
    a: "Seald uses AES-256 for symmetric encryption and RSA-4096/ECDSA for asymmetric operations. All cryptographic implementations are built on audited, open-source libraries.",
  },
  {
    q: "Who holds the encryption keys?",
    a: "Keys are generated on user devices and managed by the Seald key management service. Seald distributes keys according to your access policies but never has access to plaintext data. Enterprise customers can bring their own key management infrastructure.",
  },
  {
    q: "How does Seald handle key recovery?",
    a: "Seald supports multiple recovery mechanisms including secure key escrow, multi-party recovery, and integration with your existing identity provider. Recovery flows are configurable per organization.",
  },
  {
    q: "What happens if Seald goes down?",
    a: "Decryption keys are cached on authorized devices. Users who have already accessed data can continue working offline. New access grants require connectivity to the Seald service.",
  },
  {
    q: "Has Seald been independently audited?",
    a: "Yes. Seald undergoes regular third-party security audits and penetration testing. Cryptographic implementations use audited, open-source libraries.",
  },
];

export default function HowPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#050d1a]">
        <Container>
          <div className="relative pt-8 md:pt-12">
            <Image
              src="/images/seald-how-it-works.webp"
              alt="How Seald Healthcare works - data flows from source through encryption to authorized access"
              width={4096}
              height={2731}
              className="w-full h-auto"
            />
            <div className="absolute top-0 left-0 bottom-0 w-[10%] bg-gradient-to-r from-[#050d1a] to-transparent pointer-events-none z-10" />
            <div className="absolute top-0 right-0 bottom-0 w-[10%] bg-gradient-to-l from-[#050d1a] to-transparent pointer-events-none z-10" />
            <div className="absolute top-0 left-0 right-0 h-[8%] bg-gradient-to-b from-[#050d1a] to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-[#050d1a]/60 to-[#050d1a] pointer-events-none z-10" />
          </div>
        </Container>
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#22D3EE]/15 blur-[120px] pointer-events-none" />
        <div className="absolute -top-20 -right-40 h-[600px] w-[600px] rounded-full bg-[#1677FF]/15 blur-[150px] pointer-events-none" />
        <Container className="relative z-10 pt-10 pb-12 md:pt-12 md:pb-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Encryption and access control built for healthcare
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Seald protects PHI at the data layer so it stays encrypted across
              every system, vendor, and workflow it touches.
            </p>
          </div>
        </Container>
      </section>

      {/* Threat model */}
      <section className="relative overflow-hidden bg-[#F6FAFF] py-4">
        <div className="glow-shape glow-blue right-[5%] top-[15%] h-[24rem] w-[24rem]" />
        <Container>
          <SectionHeading
            title="Threat model"
            subtitle="Seald is designed to protect data against the threats that perimeter security cannot address."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {threatModelItems.map((item) => (
              <GlassCard key={item.threat} className="p-7">
                <h3 className="font-semibold text-navy">{item.threat}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                  {item.mitigation}
                </p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Key control */}
      <section className="relative overflow-hidden py-4">
        <div className="glow-shape glow-cyan left-[5%] top-0 h-[22rem] w-[22rem]" />
        <Container className="max-w-4xl">
          <GlassCard hover={false} className="p-8 md:p-12">
            <SectionHeading title="Key control and policy enforcement" />
            <div className="mt-8 space-y-5 text-[0.9375rem] leading-relaxed text-text-secondary">
              <p>
                Encryption is only as strong as the control you have over keys
                and policies. Seald separates key management from data storage
                so that no single system compromise exposes plaintext.
              </p>
              <p>
                Access policies are evaluated at decryption time, not at the
                point of sharing. This means you can revoke access to data that
                has already been sent, set expiration windows, and restrict
                access by device or location.
              </p>
              <p>
                Policy changes take effect immediately. There is no propagation
                delay, no cache to flush, and no dependency on the
                recipient&apos;s system cooperating.
              </p>
            </div>
          </GlassCard>
        </Container>
      </section>

      {/* Audit */}
      <section className="relative overflow-hidden bg-[#F6FAFF] py-4">
        <div className="glow-shape glow-blue right-[15%] top-0 h-[20rem] w-[20rem]" />
        <Container className="max-w-4xl">
          <GlassCard hover={false} className="p-8 md:p-12">
            <SectionHeading title="Audit logging" />
            <ul className="mt-8 space-y-4">
              {auditFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-[0.9375rem] text-navy"
                >
                  <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-cyan" />
                  {feature}
                </li>
              ))}
            </ul>
          </GlassCard>
        </Container>
      </section>

      {/* Complements perimeter */}
      <section className="relative overflow-hidden bg-[#050d1a] py-4">
        <div className="glow-shape glow-cyan left-[15%] bottom-0 h-[22rem] w-[22rem]" />
        <Container className="max-w-4xl">
          <div className="[&_h2]:text-white [&_p]:text-white/70"><SectionHeading title="How Seald complements perimeter security" /></div>
          <div className="glass-frame mt-10 !border-white/10 !bg-white/5">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/50">
                    Layer
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/50">
                    Protects against
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/50">
                    Limitation
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="px-6 py-4 font-medium text-white">
                    Firewalls / VPN
                  </td>
                  <td className="px-6 py-4 text-white/70">
                    Unauthorized network access
                  </td>
                  <td className="px-6 py-4 text-white/70">
                    No protection after data leaves the network
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">TLS</td>
                  <td className="px-6 py-4 text-white/70">
                    Eavesdropping in transit
                  </td>
                  <td className="px-6 py-4 text-white/70">
                    Data is plaintext at both endpoints
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">
                    At-rest encryption
                  </td>
                  <td className="px-6 py-4 text-white/70">
                    Physical disk theft
                  </td>
                  <td className="px-6 py-4 text-white/70">
                    Admins and apps access data in plaintext
                  </td>
                </tr>
                <tr className="bg-cyan/[0.08]">
                  <td className="px-6 py-4 font-medium text-white">
                    Seald (E2EE)
                  </td>
                  <td className="px-6 py-4 text-white/70">
                    Breaches, insider threats, unauthorized sharing
                  </td>
                  <td className="px-6 py-4 text-white/70">
                    Requires SDK integration
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Ecosystem */}
      <section className="relative overflow-hidden bg-[#F6FAFF] py-4">
        <div className="glow-shape glow-blue left-[10%] top-0 h-[22rem] w-[22rem]" />
        <Container className="max-w-4xl">
          <GlassCard hover={false} className="p-8 md:p-12">
            <SectionHeading
              title="Where Seald fits in your ecosystem"
              subtitle="Seald integrates at the application layer. It works alongside your existing infrastructure and does not require changes to databases, networks, or identity providers."
            />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {ecosystemItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy">
                  <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-cyan" />
                  <span className="text-[0.9375rem]">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Container>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden py-4">
        <div className="glow-shape glow-cyan right-[10%] top-[20%] h-[22rem] w-[22rem]" />
        <Container className="max-w-3xl">
          <SectionHeading title="Frequently asked questions" />
          <div className="mt-12 space-y-3">
            {faq.map((item) => (
              <details
                key={item.q}
                className="glass-panel group rounded-xl px-6 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-navy">
                  {item.q}
                  <svg
                    className="ml-4 h-5 w-5 shrink-0 text-text-muted transition-transform duration-200 group-open:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#F6FAFF] py-4">
        <div className="glow-shape glow-blue left-[20%] top-0 h-[20rem] w-[20rem]" />
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-r from-[#22D3EE] via-[#1677FF] to-[#0B5CFF] px-8 py-16 text-center shadow-lg md:px-16">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              See Seald in your environment
            </h2>
            <p className="mt-4 text-white/80">
              Start with a focused pilot to validate encryption and access
              control across your workflows.
            </p>
            <div className="mt-8">
              <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-[#0B5CFF] transition hover:bg-white/90">Book a pilot</a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
