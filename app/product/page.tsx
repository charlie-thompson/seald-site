import type { Metadata } from "next";
import Container from "@/app/components/Container";
import SectionHeading from "@/app/components/SectionHeading";
import GlassCard from "@/app/components/GlassCard";
import { PrimaryButton } from "@/app/components/Buttons";

export const metadata: Metadata = {
  title: "Product | Seald Healthcare",
  description:
    "End-to-end encryption and policy-based access control for PHI. Learn how Seald protects healthcare data after it leaves your perimeter.",
};

const capabilities = [
  {
    title: "End-to-end encryption",
    description:
      "Data is encrypted on the sender's device using strong, standards-based cryptography. Only authorized recipients can decrypt. No server, admin, or intermediary has access to plaintext.",
  },
  {
    title: "Persistent access policies",
    description:
      "Access rules travel with the data. Revoke a recipient's access at any time, add time-based expiration, or restrict access to specific devices and IP ranges.",
  },
  {
    title: "Tamper-evident audit logs",
    description:
      "Every encryption, decryption, and policy change is logged. Audit records are cryptographically chained to prevent tampering.",
  },
  {
    title: "SDK-first integration",
    description:
      "Native SDKs for JavaScript, iOS, Android, and server-side runtimes. Add encryption to your application in hours, not months.",
  },
  {
    title: "Key management",
    description:
      "Seald manages key lifecycle, rotation, and recovery. Your team never handles raw cryptographic keys. Optional BYOK for enterprise deployments.",
  },
  {
    title: "Group and role-based access",
    description:
      "Grant access to care teams, departments, or custom groups. When group membership changes, access to all associated data updates automatically.",
  },
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
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-28 pt-20 md:pt-28">
        <div className="glow-shape glow-blue -top-20 right-[15%] h-[30rem] w-[30rem]" />
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
              Encryption and access control that travel with the data
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
              Seald is an SDK-first platform that adds end-to-end encryption and
              persistent, policy-based access control to healthcare
              applications. Data stays protected after it leaves your systems,
              across every recipient, device, and workflow.
            </p>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="relative overflow-hidden py-28">
        <div className="glow-shape glow-cyan right-0 top-[20%] h-[24rem] w-[24rem]" />
        <Container>
          <SectionHeading title="Core capabilities" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <GlassCard key={c.title} className="p-7">
                <h3 className="text-[0.95rem] font-semibold text-navy">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                  {c.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Ecosystem */}
      <section className="relative overflow-hidden py-28">
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
      <section className="relative overflow-hidden py-28">
        <div className="glow-shape glow-cyan right-[15%] bottom-0 h-[20rem] w-[20rem]" />
        <Container className="max-w-3xl">
          <SectionHeading title="Frequently asked questions" />
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
        <div className="glow-shape glow-blue left-[20%] top-0 h-[20rem] w-[20rem]" />
        <Container>
          <div className="glass-card-strong mx-auto max-w-3xl px-8 py-16 text-center md:px-16">
            <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
              See Seald in your environment
            </h2>
            <p className="mt-4 text-text-secondary">
              Start with a focused pilot to validate encryption and access
              control across your workflows.
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
