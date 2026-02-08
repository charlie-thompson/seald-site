import Container from "@/app/components/Container";
import HeroGraphic from "@/app/components/HeroGraphic";
import SectionHeading from "@/app/components/SectionHeading";
import GlassCard from "@/app/components/GlassCard";
import { PrimaryButton, SecondaryButton } from "@/app/components/Buttons";
import ScreenshotFrame from "@/app/components/ScreenshotFrame";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "End-to-end encryption",
    description:
      "PHI is encrypted on the sender's device and only decrypted by authorized recipients. No intermediary, including Seald, can read the data.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Policy-based access control",
    description:
      "Define who can access data, for how long, and under what conditions. Revoke access at any time, even after sharing.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Full audit trail",
    description:
      "Every access event is logged with tamper-evident records. Know exactly who accessed what, when, and from where.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Group-based access",
    description:
      "Grant access to care teams, departments, or custom groups. When membership changes, data access updates automatically.",
  },
];

const steps = [
  {
    step: "1",
    title: "Integrate",
    description:
      "Add the Seald SDK to your application or workflow. Works with EHRs, portals, messaging, file sharing, and custom apps.",
  },
  {
    step: "2",
    title: "Encrypt and set policy",
    description:
      "Data is encrypted before it leaves the source system. Access policies travel with the data, not with the network.",
  },
  {
    step: "3",
    title: "Control after sharing",
    description:
      "Revoke access, update permissions, and audit usage in real time. Policies are enforced at decryption, not at the perimeter.",
  },
];

const screenshots = [
  {
    src: "/screens/dashboard.png",
    alt: "Seald dashboard showing encryption and authorization overview",
    caption: "Real-time encryption and authorization overview",
  },
  {
    src: "/screens/ai-policy-studio.png",
    alt: "AI Policy Studio screen",
    caption: "Write access policies in plain English",
  },
  {
    src: "/screens/logs-audit.png",
    alt: "Audit logs screen",
    caption: "Tamper-evident audit trail for every access event",
  },
  {
    src: "/screens/sessions.png",
    alt: "Sessions and controls screen",
    caption: "Session control and device posture",
  },
  {
    src: "/screens/admin-keys.png",
    alt: "Admin and keys management screen",
    caption: "Key rotation, TTL, and revocation controls",
  },
  {
    src: "/screens/file-data-stats.png",
    alt: "File and data statistics screen",
    caption: "Visibility into encrypted assets and sharing patterns",
  },
  {
    src: "/screens/settings.png",
    alt: "Settings screen",
    caption: "Organization and policy configuration",
  },
];


export default function HomePage() {
  return (
    <>
     {/* Hero */}
<section className="relative overflow-hidden bg-[#050d1a] py-24 md:py-32 lg:py-40">
  {/* Glow orbs */}
  <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#22D3EE]/15 blur-[120px] pointer-events-none" />
  <div className="absolute -top-20 -right-40 h-[600px] w-[600px] rounded-full bg-[#1677FF]/15 blur-[150px] pointer-events-none" />
  <div className="absolute bottom-0 left-20 h-[300px] w-[300px] rounded-full bg-[#0B5CFF]/10 blur-[100px] pointer-events-none" />
  {/* Grid overlay */}
  <div
    className="absolute inset-0 pointer-events-none opacity-[0.03]"
    style={{
      backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
      backgroundSize: '60px 60px',
    }}
  />

  <Container className="relative z-10">
    <div className="flex items-center justify-between">
      <div className="max-w-[720px] px-6 md:px-0">
        <h1>
          <span className="block text-[72px] sm:text-[96px] lg:text-[140px] font-bold leading-none bg-gradient-to-r from-[#22D3EE] via-[#1677FF] to-[#0B5CFF] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(22,119,255,0.3)]">
            Seald
          </span>
          <span className="mt-2 block text-[2rem] sm:text-[2.75rem] lg:text-[4rem] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            Healthcare
          </span>
        </h1>

        <p className="mt-6 max-w-[60ch] text-xl leading-relaxed text-white/70 md:mt-8 md:text-2xl lg:text-3xl">
          Securing the world&apos;s health data without disrupting your existing infrastructure.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row md:mt-10">
          <PrimaryButton href="/contact">Book a pilot</PrimaryButton>
          <span className="[&_.btn-secondary]:border [&_.btn-secondary]:border-white/30 [&_.btn-secondary]:text-white [&_.btn-secondary]:bg-white/5 [&_.btn-secondary]:backdrop-blur-none">
            <SecondaryButton href="/product">See how it works</SecondaryButton>
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center shrink-0">
        <HeroGraphic />
      </div>
    </div>
  </Container>
</section>




      {/* Features */}
      <section className="relative overflow-hidden bg-[#F6FAFF] py-16 md:py-20">
        <div className="glow-shape glow-blue right-[5%] top-0 h-[24rem] w-[24rem]" />
        <Container>
          <SectionHeading
            title="Data protection that goes beyond the perimeter"
            subtitle="Seald protects PHI after it leaves your systems. Encryption and access policies follow the data across every recipient, device, and workflow."
            centered
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <GlassCard key={f.title} className="p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-deep/10 text-blue-primary">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-[0.95rem] font-semibold text-navy">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                  {f.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="section-dark relative overflow-hidden py-16 md:py-20">
        <div className="glow-shape glow-cyan left-[10%] top-1/2 h-[22rem] w-[22rem] -translate-y-1/2" />
        <Container>
          <div className="[&_h2]:text-white [&_p]:text-white/70"><SectionHeading title="How it works" centered /></div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <GlassCard key={s.step} className="glass-dark p-8 text-center">
                <div className="brand-gradient mx-auto flex h-11 w-11 items-center justify-center rounded-full text-base font-bold text-white">
                  {s.step}
                </div>
                <h3 className="mt-5 text-[0.95rem] font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                  {s.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Product proof / screenshots */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="glow-shape glow-blue left-[20%] top-0 h-[28rem] w-[28rem]" />
        <Container>
          <SectionHeading
            title="See it in action"
            subtitle="A clean, purpose-built interface for managing encryption, access policies, and audit logs across your healthcare workflows."
            centered
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <ScreenshotFrame
                src={screenshots[0].src}
                alt={screenshots[0].alt}
                caption={screenshots[0].caption}
                priority
              />
            </div>
            <div className="flex flex-col gap-6">
              <ScreenshotFrame
                src={screenshots[1].src}
                alt={screenshots[1].alt}
                caption={screenshots[1].caption}
              />
              <ScreenshotFrame
                src={screenshots[2].src}
                alt={screenshots[2].alt}
                caption={screenshots[2].caption}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Core Capabilities */}
      <section className="relative overflow-hidden bg-[#F6FAFF] py-16 md:py-20">
        <div className="glow-shape glow-cyan right-[5%] top-[10%] h-[24rem] w-[24rem]" />
        <Container>
          <SectionHeading title="Core Capabilities" centered />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <GlassCard className="p-7">
              <h3 className="text-[0.95rem] font-semibold text-navy">End-to-end encryption</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                PHI is encrypted on the sender&apos;s device and only decrypted by authorized recipients. No intermediary, including Seald, can access plaintext data.
              </p>
            </GlassCard>
            <GlassCard className="p-7">
              <h3 className="text-[0.95rem] font-semibold text-navy">Persistent access policies</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                Define who can access data, from which devices, during which time windows, and revoke access at any time, even after data has been shared.
              </p>
            </GlassCard>
            <GlassCard className="p-7">
              <h3 className="text-[0.95rem] font-semibold text-navy">Tamper-evident audit logs</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                Every access, denial, and policy change is logged with cryptographic integrity. Logs cannot be altered without detection.
              </p>
            </GlassCard>
            <GlassCard className="p-7">
              <h3 className="text-[0.95rem] font-semibold text-navy">SDK-first integration</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                Integrate encryption into your existing applications with a few lines of code. No UI changes or database re-architecture required.
              </p>
            </GlassCard>
            <GlassCard className="p-7">
              <h3 className="text-[0.95rem] font-semibold text-navy">Automatic key management</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                Keys are issued, rotated, rewrapped, and revoked automatically. No cryptography expertise required from your team.
              </p>
            </GlassCard>
            <GlassCard className="p-7">
              <h3 className="text-[0.95rem] font-semibold text-navy">Group and role-based access</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                Assign encryption permissions to teams, departments, or roles. Access updates propagate automatically when group membership changes.
              </p>
            </GlassCard>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#F6FAFF] py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-r from-[#22D3EE] via-[#1677FF] to-[#0B5CFF] px-8 py-16 text-center shadow-lg md:px-16">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Ready to protect PHI beyond the perimeter?
            </h2>
            <p className="mt-4 text-white/80">
              Start with a 60-to-90-day pilot. No rip-and-replace required.
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
