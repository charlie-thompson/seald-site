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
  title: 'Cookie Policy | Seald Healthcare',
  description:
    'Cookie Policy for Seald Healthcare, Inc. Learn what cookies we use and how to control them.',
};

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="March 17, 2026">

      <LSection>
        <LP>
          This Cookie Policy explains how Seald Healthcare, Inc. ("Seald
          Healthcare," "we," "our," or "us") uses cookies and similar tracking
          technologies on our website at sealdhealthcare.com. By continuing to
          use our website, you consent to the use of cookies as described in
          this policy, unless you have adjusted your browser or cookie settings
          to refuse them.
        </LP>
        <LP>
          This policy should be read alongside our{' '}
          <LA href="/privacy-policy">Privacy Policy</LA>, which provides
          additional context on how we handle personal information more broadly.
        </LP>
      </LSection>

      <LSection>
        <LH2>1. What Are Cookies?</LH2>
        <LP>
          Cookies are small text files placed on your device (computer, tablet,
          or smartphone) when you visit a website. They are widely used to make
          websites work more efficiently, provide a better user experience, and
          give website operators information about how their site is used.
        </LP>
        <LP>
          Cookies can be "session cookies," which expire when you close your
          browser, or "persistent cookies," which remain on your device for a
          defined period or until you delete them. They can also be classified
          as "first-party cookies" (set directly by us) or "third-party cookies"
          (set by a service operating on our behalf or for their own purposes).
        </LP>
        <LP>
          In addition to traditional cookies, we may also use similar
          technologies such as web beacons (also called pixel tags), local
          storage objects, and session tokens that serve comparable functions.
          References to "cookies" in this policy include all such technologies
          unless otherwise noted.
        </LP>
      </LSection>

      <LSection>
        <LH2>2. Types of Cookies We Use</LH2>

        <LH3>Strictly Necessary Cookies</LH3>
        <LP>
          These cookies are essential for the website to function correctly.
          They enable core features such as page navigation, secure form
          submission, and session management. Without these cookies, certain
          parts of our website will not function as intended. Because these
          cookies are strictly necessary, they cannot be disabled.
        </LP>
        <LP>Examples include:</LP>
        <LUL>
          <LLI>Session identifier cookies that maintain your visit state</LLI>
          <LLI>
            Security cookies that help detect and prevent fraudulent activity
          </LLI>
          <LLI>
            Cookies that remember your cookie consent preferences
          </LLI>
        </LUL>

        <LH3>Analytics and Performance Cookies</LH3>
        <LP>
          These cookies collect anonymized or aggregated information about how
          visitors use our website. The data helps us understand which pages
          are most popular, how visitors navigate through the site, and where
          errors occur so we can improve the experience. The information
          collected does not identify you personally.
        </LP>
        <LP>Examples include:</LP>
        <LUL>
          <LLI>
            Page view and session duration data collected through analytics
            platforms
          </LLI>
          <LLI>
            Bounce rate and traffic source data used to evaluate marketing
            effectiveness
          </LLI>
          <LLI>
            Error tracking data used to diagnose technical issues
          </LLI>
        </LUL>

        <LH3>Functional Cookies</LH3>
        <LP>
          Functional cookies allow the website to remember choices you make and
          provide enhanced, personalized features. For example, they may
          remember your language or region preference, or whether you have
          previously dismissed a notification. These cookies are not strictly
          necessary but improve your experience on the site.
        </LP>

        <LH3>Marketing and Targeting Cookies</LH3>
        <LP>
          We may use marketing cookies to track visitors across our website and
          other digital properties in order to deliver advertising that is more
          relevant to your interests, to limit how many times you see an
          advertisement, and to measure the effectiveness of advertising
          campaigns. These cookies are set by our advertising partners and
          involve sharing information with those partners.
        </LP>
        <LP>
          If you are located in the European Economic Area (EEA) or another
          jurisdiction that requires consent for marketing cookies, we will
          obtain your consent before placing them.
        </LP>
      </LSection>

      <LSection>
        <LH2>3. Third-Party Cookies</LH2>
        <LP>
          Some cookies on our site are set by third-party services that appear
          on our pages. These third parties may include analytics providers,
          advertising networks, and embedded content providers. We do not
          control these third-party cookies, and their use is governed by the
          privacy and cookie policies of the respective third parties.
        </LP>
        <LP>
          Third-party services we may use include, but are not limited to:
        </LP>
        <LUL>
          <LLI>
            <strong>Analytics platforms</strong> (such as Google Analytics) that
            help us understand website traffic and user behavior
          </LLI>
          <LLI>
            <strong>CRM and marketing automation tools</strong> that help us
            manage leads and customer communications
          </LLI>
          <LLI>
            <strong>Advertising and retargeting platforms</strong> that may
            display Seald Healthcare advertisements on other websites you visit
          </LLI>
          <LLI>
            <strong>Chat and support tools</strong> that enable real-time
            communication on our website
          </LLI>
        </LUL>
        <LP>
          We encourage you to review the privacy policies of any third-party
          services for more information about their use of cookies and your
          options for limiting tracking.
        </LP>
      </LSection>

      <LSection>
        <LH2>4. How Long Do Cookies Last?</LH2>
        <LP>
          The duration of cookies varies depending on their type and purpose:
        </LP>
        <LUL>
          <LLI>
            <strong>Session cookies</strong> expire when you close your browser
            or end your session.
          </LLI>
          <LLI>
            <strong>Persistent cookies</strong> remain on your device until
            they expire or you delete them. Persistence periods range from a
            few days (for certain analytics cookies) to up to two years (for
            some preference and marketing cookies).
          </LLI>
        </LUL>
        <LP>
          The specific expiration period for each cookie depends on the service
          that sets it. Where possible, we configure cookies to use the shortest
          retention period consistent with their purpose.
        </LP>
      </LSection>

      <LSection>
        <LH2>5. Managing and Disabling Cookies</LH2>

        <LH3>Browser Settings</LH3>
        <LP>
          Most browsers allow you to control cookies through their settings.
          You can typically configure your browser to:
        </LP>
        <LUL>
          <LLI>Block all cookies</LLI>
          <LLI>Block third-party cookies only</LLI>
          <LLI>Delete existing cookies</LLI>
          <LLI>Receive a notification before a cookie is placed</LLI>
        </LUL>
        <LP>
          Instructions for managing cookies in commonly used browsers can be
          found at the links below. Note that these links point to external
          sites and Seald Healthcare is not responsible for their content:
        </LP>
        <LUL>
          <LLI>
            <LA href="https://support.google.com/chrome/answer/95647">
              Google Chrome
            </LA>
          </LLI>
          <LLI>
            <LA href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop">
              Mozilla Firefox
            </LA>
          </LLI>
          <LLI>
            <LA href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac">
              Apple Safari
            </LA>
          </LLI>
          <LLI>
            <LA href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-168dab11-0753-043d-7c16-ede5947fc64d">
              Microsoft Edge
            </LA>
          </LLI>
        </LUL>
        <LP>
          Please note that disabling cookies may affect the functionality of
          our website and your ability to use certain features.
        </LP>

        <LH3>Opt-Out Tools</LH3>
        <LP>
          For analytics and advertising cookies set by third parties, you may
          be able to opt out using industry tools such as:
        </LP>
        <LUL>
          <LLI>
            <LA href="https://tools.google.com/dlpage/gaoptout">
              Google Analytics Opt-out Browser Add-on
            </LA>
          </LLI>
          <LLI>
            <LA href="https://optout.networkadvertising.org/">
              NAI Opt-Out Tool (Network Advertising Initiative)
            </LA>
          </LLI>
          <LLI>
            <LA href="https://optout.aboutads.info/">
              DAA Opt-Out Tool (Digital Advertising Alliance)
            </LA>
          </LLI>
        </LUL>

        <LH3>Do Not Track</LH3>
        <LP>
          Some browsers include a "Do Not Track" (DNT) signal. At this time,
          our website does not respond to DNT signals because there is no
          consistent industry standard for their interpretation. We will
          reassess this position as standards evolve.
        </LP>
      </LSection>

      <LSection>
        <LH2>6. Cookies and Healthcare Data</LH2>
        <LP>
          Seald Healthcare does not use cookies to collect, store, or transmit
          protected health information (PHI). Our marketing website is separate
          from our customer-facing platform environments, and no PHI is
          processed through our public-facing website cookies. If you are a
          healthcare organization using our platform under a Business Associate
          Agreement, the cookie and tracking practices within the platform
          environment are governed by your agreement with us, not this policy.
        </LP>
      </LSection>

      <LSection>
        <LH2>7. Updates to This Policy</LH2>
        <LP>
          We may update this Cookie Policy from time to time to reflect changes
          in the cookies we use, applicable law, or our business practices. When
          we make changes, we will update the "Last Updated" date at the top of
          this page. We encourage you to review this policy periodically. Your
          continued use of our website after any update constitutes acceptance
          of the revised policy.
        </LP>
      </LSection>

      <LSection>
        <LH2>8. Contact Us</LH2>
        <LP>
          If you have questions about our use of cookies or this Cookie Policy,
          please contact us at:
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
