import type { Metadata } from "next";
import Container from "@/app/components/Container";
import SectionHeading from "@/app/components/SectionHeading";
import GlassCard from "@/app/components/GlassCard";
import { PrimaryButton } from "@/app/components/Buttons";

export const metadata: Metadata = {
  title: "Pilot Program | Seald Healthcare",
  description:
    "Run a 60-to-90-day pilot to validate end-to-end encryption and access control for PHI in your environment.",
};

const timeline = [
  {
    phase: "Week 1-2",
    title: "Scoping and setup",
    items: [
      "Define pilot scope: one application, one workflow, or one data type",
      "Provision Seald environment and API keys",
      "Technical kickoff with your engineering team",
    ],
  },
  {
    phase: "Week 3-6",
    title: "Integration and testing",
    items: [
      "Integrate Seald SDK into the target application",
      "Configure access policies and encryption workflows",
      "Test encryption, decryption, revocation, and audit logging",
    ],
  },
  {
    phase: "Week 7-10",
    title: "Validation and review",
    items: [
      "Run the pilot with real users and real data (or realistic test data)",
      "Measure performance, usability, and compliance impact",
      "Security review with your team",
    ],
  },
  {
    phase: "Week 11-12",
    title: "Decision",
    items: [
      "Review results against success criteria",
      "Plan production rollout or identify next steps",
      "Executive summary and recommendations",
    ],
  },
];

const included = [
  "Dedicated Seald environment with full platform access",
  "Engineering support for SDK integration",
  "Access policy design consultation",
  "Weekly check-ins with your team",
  "Security architecture review",
  "Executive summary at pilot completion",
];

const successCriteria = [
  "PHI is encrypted end-to-end within the pilot scope",
  "Access policies are enforced at decryption time",
  "Revocation takes effect immediately across all recipients",
  "Audit logs capture all access events",
  "Integration does not degrade application performance beyond acceptable thresholds",
  "Your security and compliance teams approve the architecture",
];

export default function PilotPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-20 md:pt-24">
        <div className="glow-shape glow-blue -top-20 left-[15%] h-[30rem] w-[30rem]" />
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
              Validate Seald in your environment
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
              A focused, 60-to-90-day pilot to prove that end-to-end encryption
              and access control work in your workflows. No long-term
              commitment. No rip-and-replace.
            </p>
            <div className="mt-8">
              <PrimaryButton href="/contact">Book a pilot</PrimaryButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden bg-[#F6FAFF] py-16 md:py-20">
        <div className="glow-shape glow-cyan right-[5%] top-[20%] h-[24rem] w-[24rem]" />
        <Container className="max-w-4xl">
          <SectionHeading title="Pilot timeline" />
          <div className="mt-14 space-y-5">
            {timeline.map((phase) => (
              <GlassCard key={phase.phase} className="p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-primary">
                  {phase.phase}
                </p>
                <h3 className="mt-1.5 text-lg font-semibold text-navy">
                  {phase.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* What's included */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="glow-shape glow-blue left-[10%] top-0 h-[22rem] w-[22rem]" />
        <Container className="max-w-4xl">
          <GlassCard hover={false} className="p-8 md:p-12">
            <SectionHeading title="What's included" />
            <ul className="mt-10 space-y-4">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[0.9375rem] text-navy"
                >
                  <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </Container>
      </section>

      {/* Success criteria */}
      <section className="relative overflow-hidden bg-[#F6FAFF] py-16 md:py-20">
        <div className="glow-shape glow-cyan right-[15%] bottom-0 h-[22rem] w-[22rem]" />
        <Container className="max-w-4xl">
          <GlassCard hover={false} className="p-8 md:p-12">
            <SectionHeading
              title="Success criteria"
              subtitle="We define success upfront so there is no ambiguity at the end of the pilot."
            />
            <ul className="mt-10 space-y-4">
              {successCriteria.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[0.9375rem] text-navy"
                >
                  <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="glow-shape glow-blue left-[20%] top-0 h-[20rem] w-[20rem]" />
        <Container>
          <div className="glass-card-strong mx-auto max-w-3xl px-8 py-16 text-center md:px-16">
            <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
              Start your pilot
            </h2>
            <p className="mt-4 text-text-secondary">
              Tell us about your use case and we will scope a pilot that fits.
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
