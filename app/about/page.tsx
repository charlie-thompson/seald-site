import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/app/components/Container";
import SectionHeading from "@/app/components/SectionHeading";
import GlassCard from "@/app/components/GlassCard";
import { PrimaryButton } from "@/app/components/Buttons";

const leadership = [
  {
    name: "Tanner Haas",
    role: "CEO",
    image: "/team/tanner-haas-ceo.png",
    bio: [
      "Five-time founder in various industries",
      "Multiple successful exits and one in the healthcare space",
      "Sold first company at the age of 21",
    ],
  },
  {
    name: "Dmitry Dain",
    role: "CTO",
    image: "/team/dmitry-dain-cto.png",
    bio: [
      "Led breakthrough DARPA initiative from concept to a $990M deployment contract",
      "Co-founder of multiple technology companies, including Virgil Security",
      "Consulted for the US Treasury, Goldman Sachs on blockchain security",
    ],
  },
  {
    name: "Charlie Thompson",
    role: "COO",
    image: "/team/charlie-thompson-coo.png",
    bio: [
      "15+ years in healthcare & revenue cycle, building and selling enterprise SaaS",
      "Deep domain expertise in PHI security, HIPAA workflows, and RCM automation",
      "Technical-sales hybrid: engineer turned top-performing sales leader",
    ],
  },
];

const advisors = [
  {
    name: "Dr. Jack Zamora",
    role: "Advisor",
    image: "/team/dr-jack-zamora-advisor.png",
    bio: [
      "Successful oculofacial plastic surgeon and pioneer in minimally invasive skin-tightening techniques with Renuvion and Vaser",
      "Early leader in mesenchymal stem cell research and national trainer for ATTIVA iRF",
    ],
  },
  {
    name: "Dr. John Olsen",
    role: "Advisor",
    image: "/team/dr-john-olsen-advisor.png",
    bio: [
      "Co-Founder of EncompassRx, $400M+ ARR, acquired by CVS Health in 2018",
      "Entrepreneur in Residence at GA Tech's Advanced Technology Development Center",
      "Serial entrepreneur with multiple successful exits",
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
      <section className="relative overflow-hidden pb-16 pt-20 md:pt-24">
        <div className="glow-shape glow-cyan -top-20 right-[20%] h-[30rem] w-[30rem]" />
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
              Encryption should protect data, not slow it down
            </h1>
          </div>
        </Container>
      </section>

      {/* Our Team */}
      <section className="relative overflow-hidden bg-[#F6FAFF] py-16 md:py-20">
        <div className="glow-shape glow-blue right-[10%] top-0 h-[24rem] w-[24rem]" />
        <Container>
          <SectionHeading title="Our Team" centered />

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

          {/* Advisors row */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:mx-auto lg:max-w-3xl">
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

      {/* Mission / Why / Approach */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="glow-shape glow-blue left-[10%] top-0 h-[22rem] w-[22rem]" />
        <div className="glow-shape glow-cyan right-[5%] top-[40%] h-[22rem] w-[22rem]" />
        <Container className="max-w-3xl">
          <div className="space-y-2">
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
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#F6FAFF] py-16 md:py-20">
        <div className="glow-shape glow-cyan right-[20%] top-0 h-[20rem] w-[20rem]" />
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-r from-[#22D3EE] via-[#1677FF] to-[#0B5CFF] px-8 py-16 text-center shadow-lg md:px-16">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Want to learn more?
            </h2>
            <p className="mt-4 text-white/80">
              We would be happy to walk you through our approach and answer your
              questions.
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
