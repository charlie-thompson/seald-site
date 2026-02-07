import Container from "@/app/components/Container";
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
      <section className="relative overflow-hidden pb-28 pt-20 md:pb-36 md:pt-28">
        <div className="glow-shape glow-blue -top-32 left-[15%] h-[32rem] w-[32rem]" />
        <div className="glow-shape glow-cyan -bottom-24 right-[10%] h-[26rem] w-[26rem]" />
        <Container className="relative">
          <div className="glass-panel mx-auto max-w-4xl px-6 py-16 text-center md:px-12 md:py-20">
            <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-navy md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Keep PHI encrypted everywhere while controlling access after
              it&apos;s shared.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
              Seald adds end-to-end encryption and policy-based access control
              to any healthcare application. Protection that travels with the
              data, not with the network.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <PrimaryButton href="/contact">Book a pilot</PrimaryButton>
              <SecondaryButton href="/product">See how it works</SecondaryButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="relative overflow-hidden py-28">
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
      <section className="relative overflow-hidden py-28">
        <div className="glow-shape glow-cyan left-[10%] top-1/2 h-[22rem] w-[22rem] -translate-y-1/2" />
        <Container>
          <SectionHeading title="How it works" centered />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <GlassCard key={s.step} className="p-8 text-center">
                <div className="brand-gradient mx-auto flex h-11 w-11 items-center justify-center rounded-full text-base font-bold text-white">
                  {s.step}
                </div>
                <h3 className="mt-5 text-[0.95rem] font-semibold text-navy">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                  {s.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Product proof / screenshots */}
      <section className="relative overflow-hidden py-28">
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

      {/* Final CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="glow-shape glow-cyan right-[15%] top-0 h-[22rem] w-[22rem]" />
        <Container>
          <div className="glass-card-strong mx-auto max-w-3xl px-8 py-16 text-center md:px-16">
            <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
              Ready to protect PHI beyond the perimeter?
            </h2>
            <p className="mt-4 text-text-secondary">
              Start with a 60-to-90-day pilot. No rip-and-replace required.
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
