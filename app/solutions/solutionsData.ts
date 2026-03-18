export interface SolutionEntry {
  slug: string;
  label: string;
  tagline: string;
  description: string;
}

export const solutions: SolutionEntry[] = [
  {
    slug: 'hospitals-health-systems',
    label: 'Hospitals and Health Systems',
    tagline: 'Enterprise PHI encryption for large health systems and IDNs.',
    description:
      'Large health systems and integrated delivery networks handle massive volumes of PHI across dozens of facilities and hundreds of vendor relationships. Seald Healthcare delivers record-level encryption and persistent access controls that protect patient data across the full continuum of care — without disrupting existing workflows.',
  },
  {
    slug: 'academic-medical-centers',
    label: 'Academic Medical Centers',
    tagline: 'Protect research datasets and clinical PHI across multi-site environments.',
    description:
      'Academic medical centers operate at the intersection of clinical care and research, creating complex data-sharing requirements with regulatory exposure. Seald Healthcare provides the encryption and access policy layer needed to collaborate across institutions while keeping PHI controlled and compliant.',
  },
  {
    slug: 'pharmacy',
    label: 'Pharmacy',
    tagline: 'Secure prescription data, PBM integrations, and medication records.',
    description:
      'Pharmacies and pharmacy benefit managers process some of the most sensitive PHI in healthcare. Seald Healthcare applies record-level encryption to prescription data and medication records, ensuring that PBM integrations and third-party fulfillment partners never handle unprotected patient information.',
  },
  {
    slug: 'small-specialty-providers',
    label: 'Small and Specialty Providers',
    tagline: 'Right-sized data security for specialty practices.',
    description:
      'Small and specialty providers often lack the security infrastructure of large health systems but face the same regulatory requirements and breach risks. Seald Healthcare delivers enterprise-grade encryption and access control through a lightweight SDK integration — no security team required.',
  },
  {
    slug: 'telehealth',
    label: 'Telehealth',
    tagline: 'End-to-end encryption for virtual care platforms and patient data.',
    description:
      'Telehealth platforms generate PHI across sessions, devices, and third-party integrations at a scale that traditional perimeter security cannot protect. Seald Healthcare encrypts patient data at the record level so it remains protected whether it is stored, shared, or processed by AI-assisted workflows.',
  },
  {
    slug: 'third-party-risk',
    label: 'Third Party Risk',
    tagline: 'Control PHI shared with vendors, partners, and contractors.',
    description:
      "Third-party breaches are the leading source of healthcare data exposure. Seald Healthcare ensures that data shared with vendors and partners stays encrypted at the record level — so even if a third party's systems are compromised, the PHI they hold remains unreadable without your authorization.",
  },
  {
    slug: 'insurance',
    label: 'Insurance',
    tagline: 'Protect claims data, member records, and adjudication workflows.',
    description:
      'Health insurers process millions of claims containing detailed PHI, often routing data through multiple clearinghouses and third-party processors. Seald Healthcare applies persistent encryption to claims and member records, with granular access controls that travel with the data at every step of the adjudication process.',
  },
  {
    slug: 'agentic-ai',
    label: 'Secure Agentic AI Workflows',
    tagline: 'PHI-safe AI pipelines with persistent encryption and access controls.',
    description:
      'AI agents increasingly ingest and act on PHI — creating new exposure risks that traditional security models are not designed for. Seald Healthcare provides a cryptographic layer that allows AI systems to process only the data they are explicitly authorized to access, keeping PHI protected even inside agentic and LLM-powered workflows.',
  },
];

export const solutionsBySlug: Record<string, SolutionEntry> = Object.fromEntries(
  solutions.map((s) => [s.slug, s]),
);
