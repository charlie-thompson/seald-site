import Container from "@/app/components/Container";
import SealdEncryptionHero from "@/app/components/SealdEncryptionHero";
import SecureDataLayer from "@/app/components/SecureDataLayer";
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
    title: "End-to-End Encryption",
    description:
      "PHI is encrypted at the source and only decrypted by authorized recipients. No intermediary, including Seald Healthcare, can access the data.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Policy-Based Access Control",
    description:
      "Set who can access data, for how long, and under what conditions. Access can be revoked at any time, even after sharing.",
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
    title: "Full Audit Trail",
    description:
      "All access events are logged with tamper-evident records. Know exactly who accessed data, when, and from where.",
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
    title: "Group-Based Access",
    description:
      "Easily grant access to care teams, departments, or custom groups. Data access updates automatically as membership changes.",
  },
];

const steps = [
  {
    step: "1",
    title: "Integrate",
    description:
      "Easily add the Seald Healthcare SDK to your applications or workflows. Works with EHRs, portals, messaging, file sharing, and custom apps. Seamlessly complements AWS, Google Cloud, and Azure environments.",
  },
  {
    step: "2",
    title: "Encrypt and Set Policy",
    description:
      "Data is encrypted at the source before it leaves your system. Access policies travel with the data, not the network.",
  },
  {
    step: "3",
    title: "Control After Sharing",
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
<section className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-40">
  {/* Glow orbs */}
  <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#22D3EE]/15 blur-[120px] pointer-events-none" />
  <div className="absolute -top-20 -right-40 h-[600px] w-[600px] rounded-full bg-[#1677FF]/15 blur-[150px] pointer-events-none" />
  <div className="absolute bottom-0 left-20 h-[300px] w-[300px] rounded-full bg-[#0B5CFF]/10 blur-[100px] pointer-events-none" />

  <Container className="relative z-10">
    <div className="flex items-center justify-between">
      <div className="max-w-[720px] px-6 md:px-0">
        <h1>
          <span className="block text-[72px] sm:text-[96px] lg:text-[96px] font-bold leading-none bg-gradient-to-r from-[#22D3EE] via-[#1677FF] to-[#0B5CFF] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(22,119,255,0.3)]">
            Secure PHI
          </span>
          <span className="mt-2 block text-[2rem] sm:text-[2.75rem] lg:text-[4rem] font-bold leading-[1.1] tracking-[-0.02em] text-navy">
            at the Data Layer
          </span>
        </h1>

        <p className="mt-6 max-w-[60ch] text-xl leading-relaxed text-text-secondary md:mt-8 md:text-2xl lg:text-3xl">
          Seald Healthcare removes plaintext patient health information (PHI) by encrypting data at the source, giving you full control wherever data travels, without disrupting workflows.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row md:mt-10">
          <PrimaryButton href="/contact">Book a Demo</PrimaryButton>
          <SecondaryButton href="/how">See how it works</SecondaryButton>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center shrink-0 grow-0 overflow-hidden w-[540px] max-w-[45vw] ml-8">
        <SealdEncryptionHero />
      </div>
    </div>
  </Container>
</section>




      {/* Features */}
      <section className="relative overflow-hidden bg-[#050d1a] py-16 md:py-20">
        <div className="glow-shape glow-blue right-[5%] top-0 h-[24rem] w-[24rem]" />
        <Container>
          <div className="[&_h2]:text-white [&_p]:text-white/70">
            <SectionHeading
              title="Data Protection That Goes Beyond the Perimeter"
              subtitle="Seald Healthcare protects patient data even after it leaves your systems. Encryption and access policies follow the data across every recipient and workflow. Organizations gain visibility and control over where their patient data travels."
              centered
            />
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <GlassCard key={f.title} className="p-7 !bg-white/10 !border-white/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-[0.95rem] font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                  {f.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="relative overflow-hidden bg-[#050d1a] py-16 md:py-20">
        <div className="glow-shape glow-cyan left-[10%] top-1/2 h-[22rem] w-[22rem] -translate-y-1/2" />
        <Container>
          <div className="[&_h2]:text-white [&_p]:text-white/70"><SectionHeading title="How it Works" centered /></div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-white/60">Seald Healthcare integrates easily so you can focus on what matters most: protecting patient data without disrupting care.</p>
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
            subtitle="A simple, intuitive interface for managing encryption, access policies, and audit logs across all your healthcare workflows."
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
      <SecureDataLayer />

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#F6FAFF] py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-r from-[#22D3EE] via-[#1677FF] to-[#0B5CFF] px-8 py-16 text-center shadow-lg md:px-16">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Ready to Be Secure — Not Just Compliant?
            </h2>
            <p className="mt-4 text-white/80">
              Seamlessly encrypt and remove plaintext PHI. No rip-and-replace required.
            </p>
            <div className="mt-8">
              <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-[#0B5CFF] transition hover:bg-white/90">Book a Demo</a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
