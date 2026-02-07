import type { Metadata } from "next";
import Container from "@/app/components/Container";
import SectionHeading from "@/app/components/SectionHeading";
import GlassCard from "@/app/components/GlassCard";
import { PrimaryButton } from "@/app/components/Buttons";

export const metadata: Metadata = {
  title: "About | Seald Healthcare",
  description:
    "Why Seald exists. Our mission is to make end-to-end encryption practical for healthcare organizations.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-28 pt-20 md:pt-28">
        <div className="glow-shape glow-cyan -top-20 right-[20%] h-[30rem] w-[30rem]" />
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
              Encryption should protect data, not slow it down
            </h1>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="relative overflow-hidden py-28">
        <div className="glow-shape glow-blue left-[10%] top-0 h-[22rem] w-[22rem]" />
        <Container className="max-w-3xl">
          <GlassCard hover={false} className="p-8 md:p-12">
            <SectionHeading title="Our mission" />
            <div className="mt-8 space-y-5 text-[0.9375rem] leading-relaxed text-text-secondary">
              <p>
                Healthcare runs on shared data. Providers, payers, vendors, and
                labs exchange protected health information thousands of times a
                day. The security tools built to protect that data were designed
                for a world where data stayed inside the perimeter. That world
                no longer exists.
              </p>
              <p>
                Seald exists to close the gap between where data goes and where
                protection stops. We build encryption and access control that
                travel with PHI, so organizations can share data freely without
                losing control over who can read it.
              </p>
            </div>
          </GlassCard>
        </Container>
      </section>

      {/* Why */}
      <section className="relative overflow-hidden py-28">
        <div className="glow-shape glow-cyan right-[5%] top-[20%] h-[22rem] w-[22rem]" />
        <Container className="max-w-3xl">
          <GlassCard hover={false} className="p-8 md:p-12">
            <SectionHeading title="Why Seald exists" />
            <div className="mt-8 space-y-5 text-[0.9375rem] leading-relaxed text-text-secondary">
              <p>
                Every major healthcare breach in the past decade shares a common
                pattern: data was protected inside the perimeter, but not
                outside it. Firewalls, VPNs, and at-rest encryption do important
                work, but they stop protecting data the moment it is shared.
              </p>
              <p>
                End-to-end encryption solves this problem in principle. In
                practice, it has been too complex, too rigid, and too disruptive
                for most healthcare organizations to adopt. Seald changes that.
              </p>
              <p>
                We built an SDK-first platform that makes end-to-end encryption
                practical: easy to integrate, invisible to end users, and
                compatible with the systems and workflows healthcare
                organizations already use.
              </p>
            </div>
          </GlassCard>
        </Container>
      </section>

      {/* Approach */}
      <section className="relative overflow-hidden py-28">
        <div className="glow-shape glow-blue left-[15%] bottom-0 h-[20rem] w-[20rem]" />
        <Container className="max-w-3xl">
          <GlassCard hover={false} className="p-8 md:p-12">
            <SectionHeading title="Our approach" />
            <div className="mt-8 space-y-5 text-[0.9375rem] leading-relaxed text-text-secondary">
              <p>
                We are a team of engineers and cryptographers focused on one
                problem: making data-level protection work at the scale and
                speed that healthcare demands.
              </p>
              <p>
                We believe security should be invisible to end users, auditable
                by compliance teams, and controllable by the people responsible
                for the data. We build for CISOs and CIOs who need to protect
                PHI without slowing down the clinicians and partners who depend
                on it.
              </p>
              <p>
                Every design decision we make is guided by a simple test: does
                this make it easier for a healthcare organization to share data
                securely? If not, we reconsider.
              </p>
            </div>
          </GlassCard>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="glow-shape glow-cyan right-[20%] top-0 h-[20rem] w-[20rem]" />
        <Container>
          <div className="glass-card-strong mx-auto max-w-3xl px-8 py-16 text-center md:px-16">
            <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
              Want to learn more?
            </h2>
            <p className="mt-4 text-text-secondary">
              We would be happy to walk you through our approach and answer your
              questions.
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
