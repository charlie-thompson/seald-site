import type { Metadata } from "next";
import Container from "@/app/components/Container";
import GlassCard from "@/app/components/GlassCard";
import HubSpotForm from "./HubSpotForm";

export const metadata: Metadata = {
  title: "Contact | Seald Healthcare",
  description:
    "Get in touch with Seald Healthcare. Book a Demo, ask a question, or schedule a technical deep-dive.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-20 md:pt-24">
        <div className="glow-shape glow-blue -top-20 left-[20%] h-[28rem] w-[28rem]" />
        <div className="glow-shape glow-cyan right-[5%] bottom-0 h-[20rem] w-[20rem]" />
        <Container className="relative max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
            See Seald Healthcare<br className="md:hidden" /> in Action
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            Share your use case and we&apos;ll show you how to remove plaintext PHI without disrupting workflows. We always respond within 24 hours.
          </p>
        

          <GlassCard hover={false} className="mt-12 p-8">
            <HubSpotForm />

            <div className="mt-12 border-t border-border/40 pt-8">
              <h2 className="text-sm font-semibold text-navy">
                Or reach out directly
              </h2>
              <p className="mt-2 text-sm text-text-muted">
                <a
                  href="mailto:charlie@sealdhealthcare.com"
                  className="text-text-secondary transition-colors duration-200 hover:text-blue-primary"
                >
                  charlie@sealdhealthcare.com
                </a>
              </p>
            </div>
          </GlassCard>
        </Container>
      </section>
    </>
  );
}
