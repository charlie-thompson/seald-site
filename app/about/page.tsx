import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/app/components/Container";
import SectionHeading from "@/app/components/SectionHeading";
import GlassCard from "@/app/components/GlassCard";
import { PrimaryButton } from "@/app/components/Buttons";
import AboutHeroGraphic from "@/app/components/AboutHeroGraphic";

const leadership = [
  {
    name: "Tanner Haas",
    role: "CEO",
    image: "/team/tanner-haas-ceo.png",
    bio: [
      "Five-time founder with multiple exits, including in healthcare",
      "Sold his first company at 21",
    ],
  },
  {
    name: "Dmitry Dain",
    role: "CTO",
    image: "/team/dmitry-dain-cto.png",
    bio: [
      "Expert in applied cryptography; led a DARPA initiative to a $990M deployment",
      "Co-founder of Virgil Security",
      "Consulted for the United States Treasury and Goldman Sachs",
    ],
  },
  {
    name: "Charlie Thompson",
    role: "COO",
    image: "/team/charlie-thompson-coo.png",
    bio: [
      "15+ years in healthcare, PHI security, HIPAA compliance, and revenue cycle automation",
      "Technical-sales hybrid with deep domain expertise",
      "Founder-operator, leading cross-functional delivery for clients from strategy through implementation, with clear accountability to outcomes",
    ],
  },
];

const advisors = [
  {
    name: "Dr. Jack Zamora",
    role: "Advisor",
    image: "/team/dr-jack-zamora-advisor.png",
    bio: [
      "Successful oculofacial plastic surgeon",
      "Pioneer in minimally invasive skin-tightening techniques with Renuvion and Vaser",
      "Early leader in mesenchymal stem cell research",
      "National trainer for ATTIVA iRF",
    ],
  },
  {
    name: "Dr. John Olsen",
    role: "Advisor",
    image: "/team/dr-john-olsen-advisor.png",
    bio: [
      "Co-founder of EncompassRx, $400M+ ARR, acquired by CVS Health in 2018",
      "Serial entrepreneur with multiple exits",
      "Entrepreneur in Residence at Georgia Tech\u2019s Advanced Technology Development Center",
      "Healthcare business expert",
    ],
  },
];

export const metadata: Metadata = {
  title: "About | Seald Healthcare",
  description:
    "Why Seald exists. Our mission is to make end-to-end encryption practical for healthcare organizations.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-6 pt-12 md:pt-16">
        <div className="glow-shape glow-cyan -top-20 right-[20%] h-[30rem] w-[30rem]" />
        <Container>
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="max-w-3xl">
              <h1 className="text-center md:text-left text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy">
                Healthcare&apos;s<br /> <span className="bg-gradient-to-r from-[#22D3EE] to-[#1677FF] bg-clip-text text-transparent">Security Problem</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary text-left md:text-left">
                Since 2009, over 846 million patient records have been exposed, with the average cost per breach reaching $10M. Most healthcare security is perimeter-focused and HIPAA-compliant, but compliant does not mean secure. The result is organizations that are technically &ldquo;compliant&rdquo; but still paralyzed by breaches. It&apos;s clear a new approach is needed, one that secures patient data itself, not just the perimeter.
              </p>
            </div>
            <div className="shrink-0">
              <AboutHeroGraphic />
            </div>
          </div>
        </Container>
      </section>

      {/* Approach / Mission */}
      <section className="relative overflow-hidden py-4">
        <div className="glow-shape glow-blue left-[10%] top-0 h-[22rem] w-[22rem]" />
        <div className="glow-shape glow-cyan right-[5%] top-[40%] h-[22rem] w-[22rem]" />
        <Container className="max-w-3xl">
          <div className="space-y-2">
            <GlassCard hover={false} className="p-8 md:p-12">
              <h2 className="text-center md:text-left text-3xl md:text-4xl font-extrabold tracking-tight text-navy">Our Approach</h2>
              <div className="mt-8 space-y-5 text-[0.9375rem] leading-relaxed text-text-secondary">
                <p>
                  Seald Healthcare is building the encrypted data layer healthcare desperately needs. We encrypt patient data at the source with centralized key management and policy controls so that even if a breach occurs, data remains unreadable. You get complete visibility and control over who accesses data, when, and from where. Only want your staff to decrypt patient data during office hours? Simply write the rule in plain English with our AI Studio and the policy is automatically enforced.
                </p>
                <p>
                  This is the future of healthcare data security. Perimeter protection alone is no longer enough. Seald Healthcare makes secure, seamless, and auditable PHI sharing a reality.
                </p>
              </div>
            </GlassCard>

            <GlassCard hover={false} className="p-8 md:p-12">
              <h2 className="text-center md:text-left text-3xl md:text-4xl font-extrabold tracking-tight text-navy">Our Mission</h2>
              <div className="mt-8 space-y-5 text-[0.9375rem] leading-relaxed text-text-secondary">
                <p>
                  To solve the healthcare data breach problem by ensuring patient data remains secure and unreadable even in the event of a breach, while enabling healthcare organizations to share information freely, efficiently, and safely across the entire ecosystem.
                </p>
              </div>
            </GlassCard>
          </div>
        </Container>
      </section>

      {/* Our Team */}
      <section className="relative overflow-hidden bg-[#F6FAFF] py-4">
        <div className="glow-shape glow-blue right-[10%] top-0 h-[24rem] w-[24rem]" />
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy">Our Founders</h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-text-secondary">
              Seald Healthcare is built by operators, healthcare executives, and cryptographers united by a mission to solve the healthcare data breach problem. We are patient, thoughtful, and deliberate, focused on building solutions that healthcare organizations can trust every day.
            </p>
          </div>

          {/* Leadership row */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person) => (
              <div key={person.name} className="flex flex-col items-center text-center">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={176}
                  height={176}
                  className="h-44 w-44 object-contain"
                />
                <span className="mt-4 inline-block rounded-full bg-[#1677FF] px-4 py-1 text-sm font-semibold text-white">
                  {person.role}
                </span>
                <h3 className="mt-3 text-lg font-bold text-[#0B1F3B]">{person.name}</h3>
                <ul className="mt-3 space-y-1.5 text-left text-sm leading-relaxed text-text-secondary">
                  {person.bio.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-text-muted" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Advisors */}
          <h3 className="mt-16 text-center text-3xl md:text-4xl font-extrabold tracking-tight text-navy">Advisors</h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:mx-auto lg:max-w-3xl">
            {advisors.map((person) => (
              <div key={person.name} className="flex flex-col items-center text-center">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={176}
                  height={176}
                  className="h-44 w-44 object-contain"
                />
                <span className="mt-4 inline-block rounded-full bg-[#1677FF] px-4 py-1 text-sm font-semibold text-white">
                  {person.role}
                </span>
                <h3 className="mt-3 text-lg font-bold text-[#0B1F3B]">{person.name}</h3>
                <ul className="mt-3 space-y-1.5 text-left text-sm leading-relaxed text-text-secondary">
                  {person.bio.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-text-muted" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#F6FAFF] py-4">
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
