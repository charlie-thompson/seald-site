import Container from "@/app/components/Container";
import SealdEncryptionHero from "@/app/components/SealdEncryptionHero";
import SecureDataLayer from "@/app/components/SecureDataLayer";
import SectionHeading from "@/app/components/SectionHeading";
import GlassCard from "@/app/components/GlassCard";
import ScreenshotFrame from "@/app/components/ScreenshotFrame";
import WhitePaperCTA from "@/app/components/WhitePaperCTA";

const steps = [
  {
    step: "1",
    title: "Integrate",
    description:
      "Add the Seald Healthcare SDK to your applications or workflows. Works with EHRs, portals, messaging, file sharing, and custom apps, and complements AWS, Google Cloud, and Azure environments.",
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
    alt: "Seald Healthcare | Encryption and Authorization Dashboard",
    caption: "Real-time encryption and authorization overview",
  },
  {
    src: "/screens/ai-policy-studio.png",
    alt: "Seald Healthcare | AI Policy Studio",
    caption: "Write access policies in plain English",
  },
  {
    src: "/screens/logs-audit.png",
    alt: "Seald Healthcare | Audit Logs",
    caption: "Tamper-evident audit trail for every access event",
  },
  {
    src: "/screens/sessions.png",
    alt: "Seald Healthcare | Sessions and Controls",
    caption: "Session control and device posture",
  },
  {
    src: "/screens/admin-keys.png",
    alt: "Seald Healthcare | Admin and Keys Management",
    caption: "Key rotation, TTL, and revocation controls",
  },
  {
    src: "/screens/file-data-stats.png",
    alt: "Seald Healthcare | File and Data Statistics",
    caption: "Visibility into encrypted assets and sharing patterns",
  },
  {
    src: "/screens/settings.png",
    alt: "Seald Healthcare | Settings",
    caption: "Organization and policy configuration",
  },
];


export default function HomePage() {
  return (
    <>
     {/* Hero */}
<section className="relative overflow-hidden bg-white py-20 md:py-8 lg:py-16">
  {/* Glow orbs */}
  {/* <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#22D3EE]/15 blur-[120px] pointer-events-none" /> */}
  {/* <div className="absolute -top-20 -right-40 h-[600px] w-[600px] rounded-full bg-[#1677FF]/15 blur-[150px] pointer-events-none" /> */}
  {/* <div className="absolute bottom-0 left-20 h-[300px] w-[300px] rounded-full bg-[#0B5CFF]/10 blur-[100px] pointer-events-none" /> */}

  <Container className="relative z-10">
    <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between md:gap-12">
      <div className="md:flex-[3] md:min-w-0 px-6 text-center md:px-0 md:text-left">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-[-0.02em]">
          <span className="bg-gradient-to-r from-[#22D3EE] to-[#1677FF] bg-clip-text text-transparent">Control</span><span className="text-[#0B1F3B]"> Your</span><br />
          <span className="text-[#0B1F3B]">Patient </span><span className="bg-gradient-to-r from-[#22D3EE] to-[#1677FF] bg-clip-text text-transparent">Data</span><br />
          <span className="bg-gradient-to-r from-[#22D3EE] to-[#1677FF] bg-clip-text text-transparent">Wherever</span><span className="text-[#0B1F3B]"> it Goes</span>
        </h1>

        <p className="mt-6 max-w-xl text-center text-xl leading-relaxed text-text-secondary md:mt-8 md:text-left md:text-1xl lg:text-2xl">
          Seald Healthcare gives you full control over your patient data by encrypting PHI at the source. Set, enforce, and revoke access in real time, even after data is shared, without disrupting workflows.
        </p>

        <div className="mt-8 hidden flex-col gap-4 sm:flex-row md:mt-10 md:flex">
          <a href="/contact" className="btn-primary !px-8 !py-3 !text-lg">Book a Demo</a>
        </div>
      </div>

      <div className="my-6 flex h-[620px] w-full items-center justify-center overflow-hidden px-0 md:my-0 md:h-auto md:flex-[2] md:min-w-0">
        <SealdEncryptionHero />
      </div>

      <div className="flex justify-center md:hidden">
        <a href="/contact" className="btn-primary !px-8 !py-3 !text-lg">Book a Demo</a>
      </div>
    </div>
  </Container>
</section>




      {/* Core Capabilities */}
      <SecureDataLayer />

      {/* White Paper CTA */}
      <WhitePaperCTA />

      {/* AI Policy Studio */}
      <section className="relative overflow-hidden bg-[#050d1a] py-20 md:py-28">
        <div className="glow-shape glow-blue right-[5%] top-0 h-[24rem] w-[24rem]" />
        <div className="glow-shape glow-cyan left-[10%] bottom-0 h-[20rem] w-[20rem]" />
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Write Access Policies in Plain English with our AI Policy Studio
            </h2>
            <p className="mx-auto mt-6 max-w-[700px] text-center text-base leading-relaxed text-white/70 md:text-left md:text-lg">
              Define and enforce access policies in plain English. Seald Healthcare&apos;s AI Policy Studio translates natural language into cryptographically enforced rules that travel with the data, so administrators can write policies like &ldquo;Only allow clinical staff to decrypt patient records during office hours&rdquo; without configuring complex rule engines.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-[900px]">
            <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/40">
              <ScreenshotFrame
                src="/screens/ai-policy-studio.png"
                alt="Seald Healthcare | AI Policy Studio — Write Access Policies in Plain English"
                caption="Write access policies in plain English"
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <a href="/contact" className="btn-primary !px-8 !py-3 !text-lg">Book a Demo</a>
          </div>
        </Container>
      </section>

      {/* About Us Blurb */}
      <section className="relative overflow-hidden bg-[#050d1a] py-16 md:py-20">
        <Container className="max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Our Mission
          </h2>
          <p className="text-base leading-relaxed text-white/70 md:text-lg">
            Seald Healthcare&apos;s mission is to ensure that every piece of patient data is protected and under the organization&apos;s control, not just where it is stored, but wherever it travels. We combine deep expertise in applied cryptography, healthcare compliance, and enterprise software to close the industry&apos;s most fundamental security gap. Protecting patient data should never come at the cost of clinical efficiency.
          </p>
          <div className="mt-8">
            <a href="/about" className="inline-flex items-center justify-center rounded-lg bg-[#007ff2] px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#0066cc] hover:-translate-y-[1px] shadow-lg shadow-blue-500/20">
              Learn More
            </a>
          </div>
        </Container>
      </section>

      {/* Product proof / screenshots */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="glow-shape glow-blue left-[20%] top-0 h-[28rem] w-[28rem]" />
        <Container>
          <SectionHeading
            title="See it in Action"
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

      {/* How it works */}
      <section className="relative overflow-hidden bg-[#050d1a] py-16 md:py-20">
        <div className="glow-shape glow-cyan left-[10%] top-1/2 h-[22rem] w-[22rem] -translate-y-1/2" />
        <Container>
          <div className="[&_h2]:text-white [&_p]:text-white/70"><SectionHeading title="How it Works" centered /></div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-white/60">Seald Healthcare integrates seamlessly so your team can focus on delivering high-quality care while keeping patient data secure.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <GlassCard key={s.step} className="glass-dark p-8 text-center">
                <div className="brand-gradient mx-auto flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold text-white md:h-11 md:w-11 md:text-base">
                  {s.step}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white md:text-lg">
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
              <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-[#0B5CFF] transition hover:bg-white/90">Book a Demo</a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
