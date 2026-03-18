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
  title: 'Privacy Policy | Seald Healthcare',
  description:
    'Privacy Policy for Seald Healthcare, Inc. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="March 17, 2026">

      <LSection>
        <LP>
          Seald Healthcare, Inc. ("Seald Healthcare," "we," "our," or "us")
          operates the website at sealdhealthcare.com and provides a data
          security platform that enables organizations to encrypt and control
          access to sensitive information, including protected health
          information (PHI). This Privacy Policy explains how we collect, use,
          disclose, and safeguard personal information when you visit our
          website, contact us, or engage with our services.
        </LP>
        <LP>
          Please read this policy carefully. By using our website or services,
          you agree to the practices described here. If you do not agree, please
          discontinue use of our website and services.
        </LP>
      </LSection>

      <LSection>
        <LH2>1. Scope of This Policy</LH2>
        <LP>
          This policy applies to personal information collected through our
          website, marketing communications, sales processes, and customer
          support interactions. It does not apply to the content of data that
          our customers process using the Seald Healthcare platform. Our
          customers are responsible for their own data processing activities and
          compliance obligations, including any applicable obligations under
          the Health Insurance Portability and Accountability Act (HIPAA).
        </LP>
        <LP>
          When Seald Healthcare acts as a service provider or business associate
          to a customer that is a HIPAA covered entity or business associate,
          the terms of the applicable Business Associate Agreement govern the
          handling of any PHI we access in connection with providing those
          services.
        </LP>
      </LSection>

      <LSection>
        <LH2>2. Information We Collect</LH2>

        <LH3>Information You Provide Directly</LH3>
        <LP>We collect information you give us when you:</LP>
        <LUL>
          <LLI>Fill out a contact, demo request, or inquiry form</LLI>
          <LLI>Subscribe to our newsletter or email updates</LLI>
          <LLI>Download a white paper, report, or other resource</LLI>
          <LLI>Register for a webinar or event</LLI>
          <LLI>Communicate with our sales or support team by email or phone</LLI>
          <LLI>Enter into a business relationship or sign a contract with us</LLI>
        </LUL>
        <LP>
          This information may include your name, business email address, job
          title, company name, phone number, and any other details you choose
          to share with us.
        </LP>

        <LH3>Information Collected Automatically</LH3>
        <LP>
          When you visit our website, we automatically collect certain technical
          information, including:
        </LP>
        <LUL>
          <LLI>IP address and approximate geographic location</LLI>
          <LLI>Browser type, version, and operating system</LLI>
          <LLI>Pages visited, time spent on each page, and navigation path</LLI>
          <LLI>Referring URL (the site or link that brought you to ours)</LLI>
          <LLI>Device identifiers and screen resolution</LLI>
          <LLI>Cookies and similar tracking technologies (see Section 8)</LLI>
        </LUL>

        <LH3>Information from Third Parties</LH3>
        <LP>
          We may receive information about you from third-party sources such as
          our CRM provider, marketing data enrichment partners, or publicly
          available professional directories (such as LinkedIn), to the extent
          permitted by applicable law. This information may supplement records
          we already hold or help us identify relevant contacts within
          organizations we serve or intend to serve.
        </LP>
      </LSection>

      <LSection>
        <LH2>3. How We Use Your Information</LH2>
        <LP>We use the information we collect to:</LP>
        <LUL>
          <LLI>
            Respond to your inquiries, demo requests, and support questions
          </LLI>
          <LLI>
            Communicate with you about our products, services, and company news
            (with your consent where required)
          </LLI>
          <LLI>
            Process and fulfill agreements, orders, and transactions
          </LLI>
          <LLI>
            Improve and optimize our website, product offerings, and marketing
          </LLI>
          <LLI>
            Analyze website traffic and usage patterns using aggregated,
            anonymized data
          </LLI>
          <LLI>
            Detect, prevent, and respond to fraud, abuse, or security incidents
          </LLI>
          <LLI>
            Comply with legal obligations, including regulatory requirements
            applicable to our business
          </LLI>
          <LLI>
            Enforce our Terms and Conditions and other agreements
          </LLI>
        </LUL>
        <LP>
          We do not sell your personal information to third parties for their
          own marketing purposes.
        </LP>
      </LSection>

      <LSection>
        <LH2>4. Legal Basis for Processing (EEA and UK Visitors)</LH2>
        <LP>
          If you are located in the European Economic Area (EEA) or the United
          Kingdom, we process your personal information on the following legal
          bases:
        </LP>
        <LUL>
          <LLI>
            <strong>Legitimate interests:</strong> To operate and improve our
            business, communicate with prospective and existing customers, and
            protect against fraud and security threats.
          </LLI>
          <LLI>
            <strong>Contractual necessity:</strong> To perform obligations under
            a contract with you or your organization.
          </LLI>
          <LLI>
            <strong>Consent:</strong> For marketing communications and certain
            cookie placements, where we have obtained your prior consent.
          </LLI>
          <LLI>
            <strong>Legal obligation:</strong> Where processing is required to
            comply with applicable law.
          </LLI>
        </LUL>
      </LSection>

      <LSection>
        <LH2>5. Sharing of Information</LH2>
        <LP>
          We share personal information only in the circumstances described
          below:
        </LP>

        <LH3>Service Providers</LH3>
        <LP>
          We work with third-party vendors who perform services on our behalf,
          including website hosting, email delivery, CRM management, analytics,
          payment processing, and customer support tooling. These providers
          access personal information only as necessary to perform their
          functions and are contractually required to handle it securely and
          in accordance with this policy.
        </LP>

        <LH3>Business Transfers</LH3>
        <LP>
          If Seald Healthcare, Inc. is involved in a merger, acquisition,
          financing, or sale of all or a portion of its assets, personal
          information may be transferred as part of that transaction. We will
          notify you of any such change by updating this policy and, where
          required, seeking your consent.
        </LP>

        <LH3>Legal and Safety Requirements</LH3>
        <LP>
          We may disclose personal information when we believe in good faith
          that disclosure is necessary to comply with applicable law, legal
          process, or a valid governmental or regulatory request; to enforce our
          agreements; or to protect the rights, property, or safety of Seald
          Healthcare, our customers, or the public.
        </LP>

        <LH3>With Your Consent</LH3>
        <LP>
          We may share your information with other parties when you have
          provided explicit consent for us to do so.
        </LP>
      </LSection>

      <LSection>
        <LH2>6. HIPAA and Healthcare Data</LH2>
        <LP>
          Seald Healthcare provides a data security platform that healthcare
          organizations use to encrypt and control access to PHI. When
          customers use our platform in connection with PHI, Seald Healthcare
          may function as a business associate under HIPAA. In those
          circumstances, our handling of PHI is governed by the applicable
          Business Associate Agreement, not this Privacy Policy.
        </LP>
        <LP>
          We do not collect, store, or process identifiable patient health
          information through our marketing website or general contact channels.
          If you believe PHI has been inadvertently submitted through our
          website, please contact us immediately at{' '}
          <LA href="mailto:info@sealdhealthcare.com">
            info@sealdhealthcare.com
          </LA>
          .
        </LP>
      </LSection>

      <LSection>
        <LH2>7. Data Retention</LH2>
        <LP>
          We retain personal information for as long as necessary to fulfill the
          purposes described in this policy, to maintain business records, and
          to comply with our legal obligations. When information is no longer
          needed, we delete or anonymize it in accordance with our data
          retention schedule. Factors that influence retention periods include
          the nature of the relationship (prospect vs. active customer),
          regulatory requirements, and the existence of any unresolved disputes
          or contractual obligations.
        </LP>
      </LSection>

      <LSection>
        <LH2>8. Cookies and Tracking Technologies</LH2>
        <LP>
          Our website uses cookies and similar technologies to recognize
          returning visitors, analyze site usage, and support our marketing
          activities. For a full description of the cookies we use and how to
          control them, please see our{' '}
          <LA href="/cookie-policy">Cookie Policy</LA>.
        </LP>
      </LSection>

      <LSection>
        <LH2>9. Your Privacy Rights</LH2>
        <LP>
          Depending on your location, you may have rights with respect to your
          personal information, including:
        </LP>
        <LUL>
          <LLI>
            <strong>Access:</strong> The right to request a copy of the
            personal information we hold about you.
          </LLI>
          <LLI>
            <strong>Correction:</strong> The right to request that we correct
            inaccurate or incomplete information.
          </LLI>
          <LLI>
            <strong>Deletion:</strong> The right to request that we delete your
            personal information, subject to certain exceptions.
          </LLI>
          <LLI>
            <strong>Portability:</strong> The right to receive your information
            in a structured, machine-readable format.
          </LLI>
          <LLI>
            <strong>Objection or restriction:</strong> The right to object to
            or request that we restrict certain processing activities.
          </LLI>
          <LLI>
            <strong>Withdrawal of consent:</strong> Where processing is based
            on consent, the right to withdraw that consent at any time without
            affecting the lawfulness of prior processing.
          </LLI>
        </LUL>
        <LP>
          To exercise any of these rights, contact us at{' '}
          <LA href="mailto:info@sealdhealthcare.com">
            info@sealdhealthcare.com
          </LA>
          . We will respond within the timeframe required by applicable law.
          We may need to verify your identity before processing certain requests.
        </LP>
        <LP>
          California residents may have additional rights under the California
          Consumer Privacy Act (CCPA), including the right to know, delete, and
          opt out of the sale of personal information. We do not sell personal
          information as defined under the CCPA.
        </LP>
      </LSection>

      <LSection>
        <LH2>10. Security</LH2>
        <LP>
          We implement administrative, technical, and physical safeguards
          designed to protect personal information against unauthorized access,
          disclosure, alteration, and destruction. Our internal security
          practices include access controls, encryption in transit and at rest,
          and regular security assessments.
        </LP>
        <LP>
          No method of transmission over the Internet or electronic storage is
          completely secure. While we apply commercially reasonable measures,
          we cannot guarantee absolute security. If you have reason to believe
          that your interaction with us is no longer secure, please notify us
          immediately.
        </LP>
      </LSection>

      <LSection>
        <LH2>11. Third-Party Links</LH2>
        <LP>
          Our website may contain links to third-party websites, integrations,
          or resources. This Privacy Policy does not apply to those sites, and
          we are not responsible for their content or privacy practices. We
          encourage you to review the privacy policies of any third-party sites
          you visit.
        </LP>
      </LSection>

      <LSection>
        <LH2>12. Children's Privacy</LH2>
        <LP>
          Our website and services are directed at businesses and professionals
          and are not intended for children under the age of 16. We do not
          knowingly collect personal information from children. If we learn that
          we have collected personal information from a child under 16, we will
          delete it promptly.
        </LP>
      </LSection>

      <LSection>
        <LH2>13. International Data Transfers</LH2>
        <LP>
          Seald Healthcare, Inc. is based in the United States. If you are
          located outside the United States, your personal information may be
          transferred to, stored, and processed in the U.S., where data
          protection laws may differ from those in your country. Where required
          by applicable law, we rely on approved transfer mechanisms such as
          Standard Contractual Clauses to facilitate international transfers of
          personal information.
        </LP>
      </LSection>

      <LSection>
        <LH2>14. Changes to This Policy</LH2>
        <LP>
          We may update this Privacy Policy periodically to reflect changes in
          our practices, technology, legal requirements, or other factors. When
          we make material changes, we will update the "Last Updated" date at
          the top of this page and, where appropriate, provide notice through
          our website or by email. Your continued use of our website or services
          after the effective date of any update constitutes acceptance of the
          revised policy.
        </LP>
      </LSection>

      <LSection>
        <LH2>15. Contact Us</LH2>
        <LP>
          If you have questions, concerns, or requests regarding this Privacy
          Policy or our data practices, please contact us at:
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
