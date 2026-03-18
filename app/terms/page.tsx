import type { Metadata } from 'next';
import LegalLayout, {
  LA,
  LH2,
  LH3,
  LLI,
  LP,
  LSection,
  LUL,
} from '@/app/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Seald Healthcare',
  description:
    'Terms and Conditions governing use of the Seald Healthcare website and data security platform.',
};

export default function Terms() {
  return (
    <LegalLayout title="Terms and Conditions" lastUpdated="March 17, 2026">

      <LSection>
        <LP>
          These Terms and Conditions ("Terms") govern your access to and use of
          the website at sealdhealthcare.com and any related services, software,
          documentation, or platforms provided by Seald Healthcare, Inc. ("Seald
          Healthcare," "we," "our," or "us"). By accessing our website or using
          our services, you ("you" or "Customer") agree to be bound by these
          Terms. If you do not agree, do not use our website or services.
        </LP>
        <LP>
          If you are accepting these Terms on behalf of an organization, you
          represent and warrant that you have authority to bind that organization
          and that your acceptance constitutes the organization's agreement to
          these Terms.
        </LP>
      </LSection>

      <LSection>
        <LH2>1. Description of Services</LH2>
        <LP>
          Seald Healthcare provides a data security platform that enables
          organizations to apply record-level encryption and persistent access
          controls to sensitive data, including protected health information
          (PHI). Our platform includes software development kits (SDKs),
          application programming interfaces (APIs), administrative tooling,
          and associated documentation ("Services").
        </LP>
        <LP>
          The specific features, functionality, support levels, and pricing
          applicable to your use of the Services are set forth in a separate
          order form, subscription agreement, or statement of work entered into
          between you and Seald Healthcare ("Order"). These Terms apply to all
          such arrangements unless an Order expressly overrides a specific
          provision.
        </LP>
      </LSection>

      <LSection>
        <LH2>2. Accounts and Access</LH2>
        <LP>
          Certain portions of our Services require you to create an account or
          receive credentials from Seald Healthcare. You agree to:
        </LP>
        <LUL>
          <LLI>
            Provide accurate, complete, and current information when registering
            or engaging with us
          </LLI>
          <LLI>
            Maintain the confidentiality of your account credentials and access
            keys
          </LLI>
          <LLI>
            Notify us immediately of any unauthorized access to your account
          </LLI>
          <LLI>
            Accept responsibility for all activity that occurs under your account
          </LLI>
        </LUL>
        <LP>
          Seald Healthcare reserves the right to suspend or terminate accounts
          that violate these Terms or that we reasonably believe pose a security
          or compliance risk.
        </LP>
      </LSection>

      <LSection>
        <LH2>3. Acceptable Use</LH2>
        <LP>
          You agree to use our website and Services only for lawful purposes and
          in accordance with these Terms. You must not:
        </LP>
        <LUL>
          <LLI>
            Use the Services in violation of any applicable federal, state,
            local, or international law or regulation
          </LLI>
          <LLI>
            Transmit any data that infringes the intellectual property rights
            or privacy rights of any third party
          </LLI>
          <LLI>
            Attempt to probe, scan, or test the vulnerability of our systems
            or circumvent any security controls
          </LLI>
          <LLI>
            Reverse engineer, decompile, disassemble, or otherwise attempt to
            derive the source code of any software we provide, except as
            expressly permitted by applicable law
          </LLI>
          <LLI>
            Use the Services to transmit unsolicited commercial communications,
            malware, or harmful code
          </LLI>
          <LLI>
            Resell, sublicense, or transfer your rights under these Terms
            without our prior written consent
          </LLI>
          <LLI>
            Use the Services in any manner that could damage, disable,
            overburden, or impair our infrastructure
          </LLI>
        </LUL>
      </LSection>

      <LSection>
        <LH2>4. Intellectual Property</LH2>

        <LH3>Our Property</LH3>
        <LP>
          All intellectual property rights in our website, Services, software,
          documentation, trademarks, trade names, and content are owned by or
          licensed to Seald Healthcare, Inc. Nothing in these Terms grants you
          any ownership interest in our intellectual property. Subject to your
          compliance with these Terms and any applicable Order, we grant you a
          limited, non-exclusive, non-transferable, revocable license to access
          and use the Services solely for your internal business purposes.
        </LP>

        <LH3>Your Data</LH3>
        <LP>
          You retain all ownership rights to data you submit, upload, or process
          through the Services ("Customer Data"). You grant Seald Healthcare a
          limited, non-exclusive license to process Customer Data solely to
          provide and improve the Services and as otherwise described in these
          Terms or our Privacy Policy.
        </LP>

        <LH3>Feedback</LH3>
        <LP>
          If you provide suggestions, ideas, or feedback about our Services
          ("Feedback"), you grant Seald Healthcare a royalty-free, worldwide,
          irrevocable license to use and incorporate that Feedback into our
          products and services without obligation to you.
        </LP>
      </LSection>

      <LSection>
        <LH2>5. HIPAA Compliance and Business Associate Agreements</LH2>
        <LP>
          If you are a HIPAA covered entity or business associate and you intend
          to use the Seald Healthcare platform in connection with PHI, you must
          execute a Business Associate Agreement (BAA) with Seald Healthcare
          prior to processing any PHI through the Services. The BAA governs our
          respective obligations with respect to PHI and is incorporated by
          reference into these Terms.
        </LP>
        <LP>
          You are solely responsible for determining whether your use of the
          Services requires a BAA and for ensuring that your use of PHI complies
          with HIPAA and any other applicable healthcare privacy laws. Seald
          Healthcare's platform is designed to support HIPAA encryption safe
          harbor requirements, but we do not guarantee that use of the Services
          alone constitutes full HIPAA compliance. Compliance depends on your
          specific implementation, configurations, and operational practices.
        </LP>
      </LSection>

      <LSection>
        <LH2>6. Confidentiality</LH2>
        <LP>
          Each party may have access to the other's confidential information in
          connection with these Terms ("Confidential Information"). Each party
          agrees to: (i) hold the other's Confidential Information in strict
          confidence; (ii) not disclose it to any third party without prior
          written consent; and (iii) use it only to fulfill obligations or
          exercise rights under these Terms. These obligations do not apply to
          information that is or becomes publicly available through no fault of
          the receiving party, is independently developed, or is required to be
          disclosed by law or court order.
        </LP>
        <LP>
          Seald Healthcare's pricing, technical architecture documentation, and
          unreleased product roadmap are examples of our Confidential
          Information. Your Customer Data is your Confidential Information.
        </LP>
      </LSection>

      <LSection>
        <LH2>7. Payment and Billing</LH2>
        <LP>
          Fees for the Services are set forth in the applicable Order. Unless
          otherwise specified: (i) fees are due and payable in U.S. dollars
          within thirty (30) days of invoice; (ii) all fees are non-refundable
          except as expressly stated in an Order; and (iii) fees do not include
          taxes, which are your responsibility.
        </LP>
        <LP>
          If you fail to pay fees when due, we may suspend your access to the
          Services after providing written notice and a reasonable cure period.
          Continued failure to pay may result in termination of your account.
        </LP>
      </LSection>

      <LSection>
        <LH2>8. Warranties and Disclaimers</LH2>
        <LP>
          Seald Healthcare warrants that: (i) it has the authority to enter into
          these Terms; and (ii) it will provide the Services in a professional
          manner consistent with reasonable industry standards.
        </LP>
        <LP>
          EXCEPT AS EXPRESSLY SET FORTH ABOVE, THE SERVICES AND WEBSITE ARE
          PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTY OF ANY KIND.
          TO THE FULLEST EXTENT PERMITTED BY LAW, SEALD HEALTHCARE DISCLAIMS
          ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT,
          AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.
        </LP>
        <LP>
          We do not warrant that the Services will be uninterrupted, error-free,
          or free of vulnerabilities. No advice or information obtained from
          Seald Healthcare or through the Services creates any warranty not
          expressly stated in these Terms.
        </LP>
      </LSection>

      <LSection>
        <LH2>9. Limitation of Liability</LH2>
        <LP>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SEALD HEALTHCARE,
          INC. AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE
          LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
          PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, GOODWILL, OR
          BUSINESS OPPORTUNITY, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS
          OR THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </LP>
        <LP>
          IN NO EVENT WILL SEALD HEALTHCARE'S TOTAL CUMULATIVE LIABILITY ARISING
          OUT OF OR RELATED TO THESE TERMS EXCEED THE GREATER OF (A) THE
          AMOUNTS PAID BY YOU TO SEALD HEALTHCARE IN THE TWELVE (12) MONTHS
          PRECEDING THE CLAIM OR (B) ONE HUNDRED U.S. DOLLARS ($100).
        </LP>
        <LP>
          Some jurisdictions do not allow the exclusion of certain warranties or
          limitation of liability for incidental or consequential damages. In
          those jurisdictions, our liability is limited to the greatest extent
          permitted by law.
        </LP>
      </LSection>

      <LSection>
        <LH2>10. Indemnification</LH2>
        <LP>
          You agree to defend, indemnify, and hold harmless Seald Healthcare,
          Inc. and its officers, directors, employees, and agents from and
          against any claims, liabilities, damages, judgments, awards, losses,
          costs, and expenses (including reasonable attorneys' fees) arising out
          of or relating to: (i) your use of the Services in violation of these
          Terms; (ii) your Customer Data; (iii) your violation of any applicable
          law or third-party right; or (iv) any breach of your representations
          or warranties under these Terms.
        </LP>
      </LSection>

      <LSection>
        <LH2>11. Termination</LH2>
        <LP>
          Either party may terminate these Terms or an applicable Order for
          convenience upon thirty (30) days' written notice. Either party may
          terminate immediately upon written notice if the other party materially
          breaches these Terms and fails to cure the breach within fifteen (15)
          days of receiving written notice of the breach.
        </LP>
        <LP>
          Upon termination: (i) your license to use the Services ceases
          immediately; (ii) you must cease all use of and destroy any Seald
          Healthcare software or confidential information in your possession;
          and (iii) we will provide you a reasonable opportunity to export your
          Customer Data before deletion. Sections relating to intellectual
          property, confidentiality, warranties, limitation of liability,
          indemnification, and governing law survive termination.
        </LP>
      </LSection>

      <LSection>
        <LH2>12. Governing Law and Dispute Resolution</LH2>
        <LP>
          These Terms are governed by the laws of the State of Delaware, United
          States, without regard to its conflict of law provisions. Any dispute
          arising out of or relating to these Terms or the Services that cannot
          be resolved through good-faith negotiation will be submitted to binding
          arbitration administered by JAMS in accordance with its Streamlined
          Arbitration Rules, except that either party may seek injunctive or
          other equitable relief in a court of competent jurisdiction to prevent
          actual or threatened infringement of intellectual property rights or
          breach of confidentiality obligations.
        </LP>
        <LP>
          You agree that any dispute will be resolved on an individual basis and
          not as part of a class or representative action.
        </LP>
      </LSection>

      <LSection>
        <LH2>13. General Provisions</LH2>

        <LH3>Entire Agreement</LH3>
        <LP>
          These Terms, together with any applicable Order and Business Associate
          Agreement, constitute the entire agreement between you and Seald
          Healthcare with respect to the subject matter hereof and supersede all
          prior or contemporaneous agreements, representations, and
          understandings.
        </LP>

        <LH3>Amendments</LH3>
        <LP>
          We may update these Terms from time to time. We will provide notice
          of material changes by updating the "Last Updated" date above and,
          where appropriate, by notifying you by email or through the Services.
          Your continued use of the Services after the effective date of any
          update constitutes your acceptance of the revised Terms.
        </LP>

        <LH3>Waiver and Severability</LH3>
        <LP>
          Failure by either party to enforce any provision of these Terms does
          not constitute a waiver. If any provision is found to be
          unenforceable, it will be modified to the minimum extent necessary to
          make it enforceable, and the remaining provisions will remain in full
          force.
        </LP>

        <LH3>Assignment</LH3>
        <LP>
          You may not assign or transfer your rights or obligations under these
          Terms without our prior written consent. Seald Healthcare may assign
          these Terms in connection with a merger, acquisition, or sale of
          substantially all of its assets.
        </LP>

        <LH3>Force Majeure</LH3>
        <LP>
          Neither party will be liable for any failure or delay in performance
          due to causes beyond its reasonable control, including natural
          disasters, pandemics, acts of government, or failures of third-party
          infrastructure providers.
        </LP>
      </LSection>

      <LSection>
        <LH2>14. Contact Us</LH2>
        <LP>
          For questions about these Terms, please contact us at:
        </LP>
        <LP>
          <strong>Seald Healthcare, Inc.</strong>
          <br />
          Email:{' '}
          <LA href="mailto:info@sealdhealthcare.com">
            info@sealdhealthcare.com
          </LA>
          <br />
          Website:{' '}
          <LA href="https://sealdhealthcare.com">sealdhealthcare.com</LA>
        </LP>
      </LSection>

    </LegalLayout>
  );
}
