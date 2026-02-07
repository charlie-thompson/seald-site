import type { Metadata } from "next";
import Container from "@/app/components/Container";
import SectionHeading from "@/app/components/SectionHeading";
import GlassCard from "@/app/components/GlassCard";
import { PrimaryButton } from "@/app/components/Buttons";

export const metadata: Metadata = {
  title: "Security | Seald Healthcare",
  description:
    "How Seald protects PHI with end-to-end encryption, policy enforcement, and tamper-evident audit logging.",
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

const faq = [
  {
    q: "Does Seald replace TLS or at-rest encryption?",
    a: "No. TLS protects data in transit between systems. At-rest encryption protects data on disk. Seald adds a third layer: end-to-end encryption that protects data across trust boundaries, even after it has been shared with external parties.",
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

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-28 pt-20 md:pt-28">
        <div className="glow-shape glow-cyan -top-20 left-[20%] h-[30rem] w-[30rem]" />
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
              Security that works after the perimeter
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
              Perimeter security protects your network. Seald protects your
              data. When PHI moves between systems, organizations, and devices,
              encryption and access policies move with it.
            </p>
          </div>
        </Container>
      </section>

      {/* Threat model */}
      <section className="relative overflow-hidden py-28">
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
      <section className="relative overflow-hidden py-28">
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
      <section className="relative overflow-hidden py-28">
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
      <section className="relative overflow-hidden py-28">
        <div className="glow-shape glow-cyan left-[15%] bottom-0 h-[22rem] w-[22rem]" />
        <Container className="max-w-4xl">
          <SectionHeading title="How Seald complements perimeter security" />
          <div className="glass-frame mt-10">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Layer
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Protects against
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Limitation
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                <tr>
                  <td className="px-6 py-4 font-medium text-navy">
                    Firewalls / VPN
                  </td>
                  <td className="px-6 py-4 text-text-secondary">
                    Unauthorized network access
                  </td>
                  <td className="px-6 py-4 text-text-secondary">
                    No protection after data leaves the network
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-navy">TLS</td>
                  <td className="px-6 py-4 text-text-secondary">
                    Eavesdropping in transit
                  </td>
                  <td className="px-6 py-4 text-text-secondary">
                    Data is plaintext at both endpoints
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-navy">
                    At-rest encryption
                  </td>
                  <td className="px-6 py-4 text-text-secondary">
                    Physical disk theft
                  </td>
                  <td className="px-6 py-4 text-text-secondary">
                    Admins and apps access data in plaintext
                  </td>
                </tr>
                <tr className="bg-cyan/[0.04]">
                  <td className="px-6 py-4 font-medium text-navy">
                    Seald (E2EE)
                  </td>
                  <td className="px-6 py-4 text-text-secondary">
                    Breaches, insider threats, unauthorized sharing
                  </td>
                  <td className="px-6 py-4 text-text-secondary">
                    Requires SDK integration
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden py-28">
        <div className="glow-shape glow-blue left-0 top-[30%] h-[22rem] w-[22rem]" />
        <Container className="max-w-3xl">
          <SectionHeading title="Security FAQ" />
          <div className="mt-12 space-y-5">
            {faq.map((item) => (
              <GlassCard key={item.q} className="p-6">
                <h3 className="font-medium text-navy">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.a}
                </p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="glow-shape glow-cyan right-[20%] top-0 h-[20rem] w-[20rem]" />
        <Container>
          <div className="glass-card-strong mx-auto max-w-3xl px-8 py-16 text-center md:px-16">
            <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
              Review our security architecture
            </h2>
            <p className="mt-4 text-text-secondary">
              Schedule a technical deep-dive with our security team.
            </p>
            <div className="mt-8">
              <PrimaryButton href="/contact">Book a pilot</PrimaryButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
