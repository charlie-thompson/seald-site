export interface Capability {
  iconName: string;
  title: string;
  description: string;
}

export interface ProblemPoint {
  text: string;
}

export interface SolutionFullContent {
  slug: string;
  heroBadge: string;
  heroHeadlineStart: string;
  heroHeadlineAccent: string;
  heroHeadlineEnd: string;
  heroSubtitle: string;
  problemBadge: string;
  problemHeadline: string;
  problemIntro: string;
  problemPoints: ProblemPoint[];
  capabilitiesBadge: string;
  capabilitiesHeadline: string;
  capabilitiesSubtitle: string;
  capabilities: Capability[];
  ctaTagline: string;
  ctaHeadline: string;
  ctaBody: string;
}

export const solutionsFullContent: Record<string, SolutionFullContent> = {
  'hospitals-health-systems': {
    slug: 'hospitals-health-systems',
    heroBadge: 'Hospitals and Health Systems',
    heroHeadlineStart: 'PHI Encryption Across',
    heroHeadlineAccent: 'Every Facility,',
    heroHeadlineEnd: 'Every Vendor, Every Workflow',
    heroSubtitle:
      'Large health systems and integrated delivery networks handle massive volumes of PHI across dozens of facilities and hundreds of vendor relationships. Seald Healthcare delivers record-level encryption and persistent access controls that protect patient data across the full continuum of care.',
    problemBadge: 'The Problem',
    problemHeadline: 'Perimeter security was not built for enterprise healthcare complexity',
    problemIntro:
      'Modern health systems are not bounded networks. PHI moves continuously across campuses, cloud platforms, EHR systems, and third-party partners. Firewalls and role-based access controls protect the perimeter, but not the data itself.',
    problemPoints: [
      { text: 'A single vendor breach exposes PHI held by every partner in your network.' },
      { text: 'Access controls live in the system, not in the data, so a compromised credential means full exposure.' },
      { text: 'Audit logs often capture what happened after a breach, not in time to prevent it.' },
      { text: 'Compliance audits require demonstrating control over data you may have already shared with dozens of downstream partners.' },
    ],
    capabilitiesBadge: 'How Seald Healthcare Solves It',
    capabilitiesHeadline: 'Enterprise-grade encryption without the enterprise complexity',
    capabilitiesSubtitle:
      'Seald Healthcare encrypts PHI at the record level so protection travels with the data, not the network.',
    capabilities: [
      {
        iconName: 'Shield',
        title: 'Record-Level Encryption at Scale',
        description:
          'PHI is encrypted on the originating system before it is transmitted or stored. Even if your infrastructure is compromised, patient records remain unreadable without explicit authorization.',
      },
      {
        iconName: 'Users',
        title: 'Group and Role-Based Access Across IDNs',
        description:
          'Assign access to care teams, departments, and facilities. Permissions update automatically as staff change roles or locations, with no manual key management required.',
      },
      {
        iconName: 'RefreshCw',
        title: 'Real-Time Policy Enforcement',
        description:
          'Access policies are enforced at decryption, not at the network perimeter. Revoke a vendor relationship or a terminated employee instantly, even for data already shared.',
      },
      {
        iconName: 'BarChart2',
        title: 'Tamper-Evident Audit Trail',
        description:
          'Every access, denial, and policy change is logged with cryptographic integrity. Produce a complete chain of custody for any patient record during a compliance audit or breach investigation.',
      },
    ],
    ctaTagline: 'Ready to protect your health system?',
    ctaHeadline: 'Encrypt PHI at the source. Control it everywhere it goes.',
    ctaBody:
      'See how Seald Healthcare fits into your existing EHR, cloud, and vendor ecosystem without disrupting clinical workflows.',
  },

  'academic-medical-centers': {
    slug: 'academic-medical-centers',
    heroBadge: 'Academic Medical Centers',
    heroHeadlineStart: 'Protect Research Data',
    heroHeadlineAccent: 'and Clinical PHI',
    heroHeadlineEnd: 'Across Every Collaboration',
    heroSubtitle:
      'Academic medical centers operate at the intersection of clinical care and research, creating complex data-sharing requirements with serious regulatory exposure. Seald Healthcare provides the encryption and access policy layer needed to collaborate across institutions while keeping PHI controlled and compliant.',
    problemBadge: 'The Problem',
    problemHeadline: 'Research collaboration and HIPAA compliance are in constant tension',
    problemIntro:
      'Academic medical centers share PHI with research partners, grant agencies, and affiliated institutions constantly. Each data-sharing agreement creates new exposure. Traditional security models cannot track or restrict data once it leaves your systems.',
    problemPoints: [
      { text: 'IRB-approved data sharing does not guarantee that partners handle PHI correctly after receipt.' },
      { text: 'De-identified datasets can be re-identified when combined with data from collaborating institutions.' },
      { text: 'Researchers often work from personal devices or off-campus networks that fall outside institutional controls.' },
      { text: 'A breach involving research PHI can jeopardize NIH funding, accreditation, and patient trust simultaneously.' },
    ],
    capabilitiesBadge: 'How Seald Healthcare Solves It',
    capabilitiesHeadline: 'Secure collaboration without sacrificing scientific velocity',
    capabilitiesSubtitle:
      'Seald Healthcare lets you share data with research partners while retaining cryptographic control over every record.',
    capabilities: [
      {
        iconName: 'Lock',
        title: 'Persistent Encryption for Research Datasets',
        description:
          'PHI shared with research partners remains encrypted and policy-bound. Your institution retains the ability to revoke access even after data has been transmitted.',
      },
      {
        iconName: 'Clock',
        title: 'Time-Bounded Access for Study Periods',
        description:
          'Set access windows that match IRB approval periods. When a study ends, access expires automatically without requiring manual action from either institution.',
      },
      {
        iconName: 'Eye',
        title: 'Cross-Institution Audit Visibility',
        description:
          'Track who accessed research data, from which device, and at what time, across every partner institution. Logs are cryptographically signed and cannot be altered after the fact.',
      },
      {
        iconName: 'Layers',
        title: 'SDK Integration with Existing Research Platforms',
        description:
          'Seald Healthcare integrates with REDCap, Epic, and custom research data pipelines through a lightweight SDK. No changes to how researchers collect or analyze data.',
      },
    ],
    ctaTagline: 'Ready to accelerate your research program?',
    ctaHeadline: 'Collaborate across institutions without losing control of PHI.',
    ctaBody:
      'Learn how Seald Healthcare enables compliant data sharing while maintaining full auditability for every access event.',
  },

  pharmacy: {
    slug: 'pharmacy',
    heroBadge: 'Pharmacy',
    heroHeadlineStart: 'Secure Prescription Data',
    heroHeadlineAccent: 'Across Every Partner',
    heroHeadlineEnd: 'in the Dispensing Chain',
    heroSubtitle:
      'Pharmacies and pharmacy benefit managers process some of the most sensitive PHI in healthcare. Seald Healthcare applies record-level encryption to prescription data and medication records, ensuring that PBM integrations and third-party fulfillment partners never handle unprotected patient information.',
    problemBadge: 'The Problem',
    problemHeadline: 'Prescription data flows through too many hands with too little protection',
    problemIntro:
      'A single prescription touches prescribers, PBMs, clearinghouses, mail-order fulfillment centers, and payers before it reaches the patient. Each handoff is a potential breach point, and traditional encryption does not travel with the data.',
    problemPoints: [
      { text: 'Clearinghouses and PBMs hold plaintext prescription data that is highly targeted by ransomware groups.' },
      { text: 'Formulary and adjudication workflows require sharing PHI with multiple parties who each represent an independent breach risk.' },
      { text: 'Specialty pharmacy and mail-order operations depend on third-party logistics partners who are outside your security perimeter.' },
      { text: 'A single breach in the dispensing chain can expose years of medication history for millions of patients.' },
    ],
    capabilitiesBadge: 'How Seald Healthcare Solves It',
    capabilitiesHeadline: 'Encrypt at the prescription level. Control across every partner.',
    capabilitiesSubtitle:
      'Seald Healthcare ensures PHI stays protected through every step of the dispensing and adjudication process.',
    capabilities: [
      {
        iconName: 'Shield',
        title: 'Record-Level Encryption for Prescription Data',
        description:
          'Each prescription record is encrypted at the source. PBMs, clearinghouses, and fulfillment partners process only the data they are explicitly authorized to access, and nothing more.',
      },
      {
        iconName: 'ArrowRightLeft',
        title: 'Persistent Controls Through PBM Integrations',
        description:
          'Access policies travel with prescription records through adjudication workflows. Authorization decisions are enforced at decryption, regardless of which system holds the data.',
      },
      {
        iconName: 'Key',
        title: 'Automatic Key Management for High-Volume Environments',
        description:
          'Pharmacies process millions of transactions. Seald Healthcare handles key issuance, rotation, and revocation automatically so your team never has to manage cryptographic infrastructure.',
      },
      {
        iconName: 'CheckCircle2',
        title: 'HIPAA Encryption Safe Harbor Compliance',
        description:
          'Seald Healthcare is designed to support the HIPAA encryption safe harbor. If encrypted data is breached, it does not trigger breach notification requirements, reducing regulatory and reputational risk.',
      },
    ],
    ctaTagline: 'Ready to protect your dispensing chain?',
    ctaHeadline: 'Keep prescription data encrypted from prescriber to patient.',
    ctaBody:
      'See how Seald Healthcare integrates with your existing PBM and pharmacy management systems without disrupting dispensing workflows.',
  },

  'small-specialty-providers': {
    slug: 'small-specialty-providers',
    heroBadge: 'Small and Specialty Providers',
    heroHeadlineStart: 'Enterprise-Grade Encryption',
    heroHeadlineAccent: 'Without an Enterprise',
    heroHeadlineEnd: 'Security Team',
    heroSubtitle:
      'Small and specialty providers face the same regulatory requirements and breach risks as large health systems, without the same resources. Seald Healthcare delivers record-level encryption and access control through a lightweight SDK integration that requires no cryptography expertise.',
    problemBadge: 'The Problem',
    problemHeadline: 'Regulators do not grade on a curve for smaller practices',
    problemIntro:
      'Specialty practices in cardiology, oncology, behavioral health, and other sensitive disciplines often hold the most private patient data. HIPAA enforcement actions and breach penalties apply equally regardless of organization size.',
    problemPoints: [
      { text: 'Behavioral health and addiction treatment records carry some of the highest re-identification and discrimination risks in healthcare.' },
      { text: 'Specialty practices frequently share PHI with referring providers, labs, and imaging centers outside their control.' },
      { text: 'Small practices often lack dedicated IT staff to monitor access logs, manage credentials, or respond to incidents quickly.' },
      { text: 'A single breach can result in OCR fines, class action exposure, and permanent reputational damage for a practice that cannot absorb either.' },
    ],
    capabilitiesBadge: 'How Seald Healthcare Solves It',
    capabilitiesHeadline: 'Strong data protection that works without a security team',
    capabilitiesSubtitle:
      'Seald Healthcare is built to be implemented and operated by clinical and administrative staff, not security engineers.',
    capabilities: [
      {
        iconName: 'Zap',
        title: 'Lightweight SDK, Minimal Integration Effort',
        description:
          'Add Seald Healthcare to your existing EHR, patient portal, or clinical application without rebuilding your workflow. Integration typically takes days, not months.',
      },
      {
        iconName: 'Key',
        title: 'Automatic Key Management',
        description:
          'Encryption keys are issued, rotated, and revoked automatically. Your staff never touches cryptographic infrastructure, and there is nothing additional to manage.',
      },
      {
        iconName: 'Shield',
        title: 'Policy-Bound Sharing with Referral Partners',
        description:
          'Share patient records with labs, specialists, and imaging centers with access controls built in. Recipients access only what they are authorized to see, and you can revoke that access at any time.',
      },
      {
        iconName: 'BarChart2',
        title: 'Audit Logs Without the Overhead',
        description:
          'Every access event is logged automatically with cryptographic integrity. Respond to OCR information requests and internal compliance reviews without manual record reconstruction.',
      },
    ],
    ctaTagline: 'Ready to protect your practice?',
    ctaHeadline: 'Encrypt PHI without adding complexity to your practice.',
    ctaBody:
      'See how Seald Healthcare gives small and specialty providers the same data security capabilities as large health systems, at the right scale.',
  },

  telehealth: {
    slug: 'telehealth',
    heroBadge: 'Telehealth',
    heroHeadlineStart: 'Encrypt Every Virtual Care Session',
    heroHeadlineAccent: 'Across Every Device',
    heroHeadlineEnd: 'and Workflow',
    heroSubtitle:
      'Telehealth platforms generate PHI across sessions, devices, and third-party integrations at a scale that traditional perimeter security cannot protect. Seald Healthcare encrypts patient data at the record level so it remains protected whether it is stored, shared, or processed by AI-assisted workflows.',
    problemBadge: 'The Problem',
    problemHeadline: 'Virtual care surfaces are growing faster than security controls can keep up',
    problemIntro:
      'Telehealth platforms connect patients, providers, and care coordinators across networks that no single organization controls. PHI generated in a virtual session can be routed through EHR integrations, remote monitoring tools, asynchronous messaging platforms, and AI-powered triage systems before care is delivered.',
    problemPoints: [
      { text: 'Session recordings, chat logs, and clinical notes often flow to third-party platforms with weaker security postures than the originating system.' },
      { text: 'Patients accessing care from personal devices and home networks are outside any institutional security perimeter.' },
      { text: 'AI-assisted triage and documentation tools ingest PHI continuously, creating new exposure points that are difficult to audit.' },
      { text: 'A breach involving telehealth session data can expose mental health, substance use, and other highly sensitive clinical information.' },
    ],
    capabilitiesBadge: 'How Seald Healthcare Solves It',
    capabilitiesHeadline: 'Protection that extends to every endpoint in a virtual care workflow',
    capabilitiesSubtitle:
      'Seald Healthcare ensures PHI stays encrypted and policy-bound regardless of which platform or device it touches.',
    capabilities: [
      {
        iconName: 'Lock',
        title: 'End-to-End Encryption for Session Data',
        description:
          'Clinical notes, chat transcripts, and session recordings are encrypted before they leave the provider platform. Third-party integrations handle only ciphertext, not plaintext PHI.',
      },
      {
        iconName: 'Shield',
        title: 'Device-Aware Access Policies',
        description:
          'Set access controls that account for the type of device and network a user is connecting from. Revoke access from a specific device without affecting the provider account.',
      },
      {
        iconName: 'Bot',
        title: 'Safe PHI Ingestion for AI Workflows',
        description:
          'Seald Healthcare provides a cryptographic layer that allows AI documentation and triage tools to process only the data they are explicitly authorized to access, preventing PHI leakage across AI pipelines.',
      },
      {
        iconName: 'RefreshCw',
        title: 'Persistent Control After Sharing',
        description:
          'Update or revoke access to any patient record in real time, even after it has been shared with a remote monitoring vendor or third-party platform. Policies are enforced at decryption, not at the point of transfer.',
      },
    ],
    ctaTagline: 'Ready to secure your telehealth platform?',
    ctaHeadline: 'Encrypt PHI at the source across every virtual care workflow.',
    ctaBody:
      'Learn how Seald Healthcare integrates with your telehealth stack to protect session data without adding friction for providers or patients.',
  },

  'third-party-risk': {
    slug: 'third-party-risk',
    heroBadge: 'Third Party Risk',
    heroHeadlineStart: 'Control PHI You Share',
    heroHeadlineAccent: 'Even After It Leaves',
    heroHeadlineEnd: 'Your Systems',
    heroSubtitle:
      "Third-party breaches are the leading source of healthcare data exposure. Seald Healthcare ensures that data shared with vendors and partners stays encrypted at the record level, so even if a third party's systems are compromised, the PHI they hold remains unreadable without your authorization.",
    problemBadge: 'The Problem',
    problemHeadline: 'You cannot control what happens inside a vendor you do not manage',
    problemIntro:
      'Health systems, payers, and specialty providers share PHI with hundreds of vendors annually. Business Associate Agreements create legal accountability, but they do not prevent breaches. Once you hand over plaintext data, the risk is entirely theirs to manage and entirely yours to bear.',
    problemPoints: [
      { text: 'The majority of large healthcare breaches originate at business associates, not covered entities themselves.' },
      { text: 'BAAs establish liability but do not reduce the probability or impact of a third-party breach.' },
      { text: 'Vendor security assessments are point-in-time snapshots; they cannot account for changes in a vendor posture after you share data.' },
      { text: 'When a vendor is breached, you face the OCR notification obligation, the class action exposure, and the reputational damage, regardless of which party was at fault.' },
    ],
    capabilitiesBadge: 'How Seald Healthcare Solves It',
    capabilitiesHeadline: 'Make third-party breaches a vendor problem, not a patient data problem',
    capabilitiesSubtitle:
      'Seald Healthcare ensures the data you share with vendors is never plaintext, so a breach at their end does not become a breach at yours.',
    capabilities: [
      {
        iconName: 'Lock',
        title: 'PHI Encrypted Before It Reaches Third Parties',
        description:
          'Data shared with vendors, clearinghouses, and contractors is encrypted at the record level before transmission. A breach at the vendor exposes only ciphertext, not patient records.',
      },
      {
        iconName: 'Shield',
        title: 'Access That Expires When the Relationship Does',
        description:
          'Set access policies tied to contract terms or project timelines. When a vendor relationship ends, access is revoked automatically, including for data they already hold.',
      },
      {
        iconName: 'Eye',
        title: 'Visibility Into Third-Party Access Events',
        description:
          'Track every time a vendor accesses PHI in your shared data set. Detect unusual access patterns before they become breach incidents.',
      },
      {
        iconName: 'CheckCircle2',
        title: 'HIPAA Encryption Safe Harbor for Shared Data',
        description:
          'PHI shared through Seald Healthcare is encrypted in a manner designed to support the HIPAA encryption safe harbor. A breach of encrypted data does not trigger the same notification obligations as a breach of plaintext PHI.',
      },
    ],
    ctaTagline: 'Ready to close your third-party exposure?',
    ctaHeadline: 'Share PHI with vendors without handing over patient data.',
    ctaBody:
      'See how Seald Healthcare gives you persistent control over the PHI you share, regardless of what happens inside your vendors systems.',
  },

  insurance: {
    slug: 'insurance',
    heroBadge: 'Insurance',
    heroHeadlineStart: 'Protect Claims and Member Records',
    heroHeadlineAccent: 'Across Every Step',
    heroHeadlineEnd: 'of Adjudication',
    heroSubtitle:
      'Health insurers process millions of claims containing detailed PHI, often routing data through multiple clearinghouses and third-party processors. Seald Healthcare applies persistent encryption to claims and member records, with granular access controls that travel with the data at every step.',
    problemBadge: 'The Problem',
    problemHeadline: 'Claims data is among the most valuable and most targeted PHI in healthcare',
    problemIntro:
      'Health insurance claims contain a complete picture of a member\'s medical history, diagnoses, medications, and providers. The adjudication workflow routes this data through clearinghouses, utilization management vendors, fraud analytics platforms, and reinsurance partners before a claim is resolved.',
    problemPoints: [
      { text: 'Each stop in the adjudication chain is a separate breach risk. Clearinghouse breaches have exposed tens of millions of claims in a single incident.' },
      { text: 'Utilization management and fraud analytics vendors often require full PHI access to perform their function, but they hold data long after the claim is resolved.' },
      { text: 'State insurance regulators and CMS increasingly require payers to demonstrate granular control over member data sharing.' },
      { text: 'A breach involving claims data can expose years of medical history and create class action liability at a scale that threatens business continuity.' },
    ],
    capabilitiesBadge: 'How Seald Healthcare Solves It',
    capabilitiesHeadline: 'Persistent encryption that travels through every adjudication step',
    capabilitiesSubtitle:
      'Seald Healthcare keeps claims and member data encrypted and policy-bound as it moves through your processing ecosystem.',
    capabilities: [
      {
        iconName: 'Lock',
        title: 'Claim-Level Encryption Through Adjudication',
        description:
          'Each claim record is encrypted at origination and remains protected through every step of the adjudication workflow. Clearinghouses and processors access only what they are authorized to see.',
      },
      {
        iconName: 'Users',
        title: 'Role-Based Access for Processor Networks',
        description:
          'Assign access to utilization management vendors, fraud analytics partners, and reinsurance companies by role and scope. Update or revoke permissions across all partners simultaneously when a relationship changes.',
      },
      {
        iconName: 'Database',
        title: 'Encrypted Member Record Storage',
        description:
          'Member records stored for eligibility verification, prior authorization, and coordination of benefits are encrypted at rest with access policies that limit exposure to each business function.',
      },
      {
        iconName: 'BarChart2',
        title: 'Regulatory-Ready Audit Logs',
        description:
          'Demonstrate to CMS, state insurance departments, and your own compliance team exactly who accessed which member records, when, and from which system. Logs are cryptographically signed and cannot be altered.',
      },
    ],
    ctaTagline: 'Ready to protect your member data?',
    ctaHeadline: 'Encrypt claims and member records across your entire processing network.',
    ctaBody:
      'Learn how Seald Healthcare integrates with your adjudication platform and processor network to keep PHI protected at every step.',
  },

  'agentic-ai': {
    slug: 'agentic-ai',
    heroBadge: 'Secure Agentic AI Workflows',
    heroHeadlineStart: 'Let AI Agents Access',
    heroHeadlineAccent: 'Only What They Are',
    heroHeadlineEnd: 'Authorized to See',
    heroSubtitle:
      'AI agents increasingly ingest and act on PHI, creating new exposure risks that traditional security models are not designed for. Seald Healthcare provides a cryptographic layer that allows AI systems to process only the data they are explicitly authorized to access, keeping PHI protected inside every agentic and LLM-powered workflow.',
    problemBadge: 'The Problem',
    problemHeadline: 'AI agents create PHI exposure risks that did not exist in traditional software',
    problemIntro:
      'When an AI agent is given access to a data system, it often receives access to far more PHI than any individual task requires. LLM-powered tools ingest context windows full of patient data. Agentic pipelines pass PHI between models, tools, and APIs in ways that are difficult to audit or control after the fact.',
    problemPoints: [
      { text: 'AI models and agents that ingest PHI can inadvertently memorize, surface, or leak patient information in unrelated outputs.' },
      { text: 'Agentic pipelines often pass PHI between multiple AI systems and third-party APIs, each of which represents a new exposure point.' },
      { text: 'Traditional access control operates at the system level. AI agents that are granted database access can read any record, not just the records relevant to the task.' },
      { text: 'Regulators are beginning to scrutinize AI use in healthcare, and organizations that cannot demonstrate granular PHI control in AI workflows face growing compliance risk.' },
    ],
    capabilitiesBadge: 'How Seald Healthcare Solves It',
    capabilitiesHeadline: 'Cryptographic guardrails for PHI inside AI pipelines',
    capabilitiesSubtitle:
      'Seald Healthcare enforces access at the record level so AI agents can only read the data they are explicitly authorized to process.',
    capabilities: [
      {
        iconName: 'Lock',
        title: 'Record-Level Access for AI Agents',
        description:
          'Rather than granting an AI agent access to a database or file system, Seald Healthcare grants access to specific encrypted records. The agent can decrypt only what it is authorized to process for a given task.',
      },
      {
        iconName: 'Shield',
        title: 'PHI Isolation Across Multi-Agent Pipelines',
        description:
          'In workflows where multiple AI agents pass data between each other, Seald Healthcare ensures each agent receives only the PHI relevant to its function. Downstream agents cannot access upstream context they are not authorized to see.',
      },
      {
        iconName: 'Eye',
        title: 'Full Audit Trail for AI Data Access',
        description:
          'Every record decrypted by an AI agent is logged with the agent identity, task context, timestamp, and cryptographic signature. Demonstrate exactly what data your AI systems touched and when.',
      },
      {
        iconName: 'RefreshCw',
        title: 'Dynamic Policy Updates for Evolving AI Workflows',
        description:
          'As your AI pipeline grows and changes, update access policies in real time without redeploying the AI system. Revoke a data access grant instantly if a model or workflow is deprecated or compromised.',
      },
    ],
    ctaTagline: 'Ready to secure your AI workflows?',
    ctaHeadline: 'Give AI agents the access they need, and nothing more.',
    ctaBody:
      'See how Seald Healthcare applies cryptographic access controls to your AI and agentic pipelines, keeping PHI protected without limiting AI capability.',
  },
};
