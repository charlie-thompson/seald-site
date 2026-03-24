import Container from "@/app/components/Container";
import GlassCard from "@/app/components/GlassCard";

const pillars = [
  {
    label: "01",
    title: "Encryption Travels With the Data, Not the Pipeline",
    body: "Every record, message, and file is encrypted at the point of creation. When AI agents read, transform, or route that data through a pipeline, the encryption moves with it — not with the network perimeter or the application layer.",
  },
  {
    label: "02",
    title: "Policy Enforcement at Every Step",
    body: "Access policies are embedded in the data itself. Each time an agent or downstream system attempts to read PHI, it must satisfy the policy — regardless of how many hops the data has traveled or which model processed it.",
  },
  {
    label: "03",
    title: "Revoke Access From AI Systems Instantly",
    body: "If a model is compromised, a workflow changes, or a patient withdraws consent, access is revoked immediately — even if the AI agent already holds a copy of the data. Decryption is denied at the next read attempt.",
  },
];

export default function AgenticAISection() {
  return (
    <section className="relative overflow-hidden bg-[#050d1a] py-20 md:py-28">
      <div className="glow-shape glow-cyan left-[5%] top-[10%] h-[26rem] w-[26rem]" />
      <div className="glow-shape glow-blue right-[8%] bottom-[10%] h-[22rem] w-[22rem]" />

      <Container>
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 100,
              background: "rgba(34,211,238,0.08)",
              border: "1px solid rgba(34,211,238,0.15)",
              fontSize: 13,
              fontWeight: 600,
              color: "#22D3EE",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Agentic AI Security
          </span>
        </div>

        {/* Headline */}
        <div className="text-center mb-6">
          <h2 className="text-[28px] font-extrabold tracking-tight text-white md:text-5xl leading-[1.15]">
            Encryption That Follows Data{" "}
            <span className="bg-gradient-to-r from-[#22D3EE] to-[#1677FF] bg-clip-text text-transparent">
              Through AI Workflows
            </span>
          </h2>
        </div>

        {/* Intro */}
        <p className="mx-auto mb-14 max-w-[740px] text-center text-base leading-relaxed text-white/70 md:text-lg">
          As healthcare adopts AI agents that autonomously read, write, and move patient data across systems, the data itself must stay encrypted and policy-enforced at every step. Seald Healthcare&apos;s encryption travels with the data through agentic pipelines, so AI systems only access what policy allows — and access can be revoked at any time, even after the agent has received the data.
        </p>

        {/* Three pillars */}
        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {pillars.map((p) => (
            <GlassCard key={p.label} className="glass-dark p-8">
              <div
                className="mb-5 text-xs font-bold tracking-[0.12em] uppercase"
                style={{ color: "#22D3EE" }}
              >
                {p.label}
              </div>
              <h3 className="mb-3 text-lg font-semibold leading-snug text-white">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/65">
                {p.body}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Callout */}
        <div
          style={{
            background: "rgba(34,211,238,0.05)",
            border: "1px solid rgba(34,211,238,0.18)",
            borderLeft: "3px solid #22D3EE",
            borderRadius: "1rem",
            padding: "28px 32px",
          }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#22D3EE" }}
          >
            Why This Matters Now
          </p>
          <p className="text-base leading-relaxed text-white/80 md:text-[17px]">
            AI agents are already generating, transforming, and routing PHI without human oversight at every step. Traditional perimeter controls and access logs cannot keep pace with autonomous pipelines that move data across models, microservices, and storage layers in milliseconds. Persistent encryption at the record level is the only control that remains effective regardless of where the data goes, which system processes it, or how many agents have touched it.
          </p>
        </div>
      </Container>
    </section>
  );
}
