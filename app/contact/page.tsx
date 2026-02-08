import type { Metadata } from "next";
import Container from "@/app/components/Container";
import GlassCard from "@/app/components/GlassCard";

export const metadata: Metadata = {
  title: "Contact | Seald Healthcare",
  description:
    "Get in touch with Seald Healthcare. Book a pilot, ask a question, or schedule a technical deep-dive.",
};

const inputClass =
  "mt-1.5 block w-full rounded-xl border border-border bg-white/50 px-4 py-3 text-sm text-navy placeholder-text-muted shadow-sm backdrop-blur-sm transition-colors duration-200 focus:border-blue-primary focus:outline-none focus:ring-1 focus:ring-blue-primary/30";

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-20 md:pt-24">
        <div className="glow-shape glow-blue -top-20 left-[20%] h-[28rem] w-[28rem]" />
        <div className="glow-shape glow-cyan right-[5%] bottom-0 h-[20rem] w-[20rem]" />
        <Container className="relative max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Tell us about your use case and we will follow up within one
            business day.
          </p>

          <GlassCard hover={false} className="mt-12 p-8">
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-navy"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-navy"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={inputClass}
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-navy"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className={inputClass}
                  placeholder="Your company"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-navy"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className={inputClass}
                  placeholder="Tell us about your use case, questions, or what you are looking for."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send message
              </button>
            </form>
          </GlassCard>
        </Container>
      </section>
    </>
  );
}
