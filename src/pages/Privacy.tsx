import { LegalPage, type LegalSection } from '../components/shared/LegalPage'
import { SEO } from '../components/shared/SEO'
import { company } from '../config/company'
import { legalEffectiveDate } from '../data/content'

const sections: LegalSection[] = [
  {
    id: 'overview',
    heading: 'Overview',
    body: (
      <>
        <p>
          This Privacy Policy explains how {company.name} (“we”, “us”, “our”)
          collects, uses and protects information when you interact with our
          website, submit an enquiry, or engage our services.
        </p>
        <p>
          We treat all information shared with us with discretion appropriate
          to a security services provider. This policy is provided as a
          template — please have it reviewed by qualified legal counsel before
          publication.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    heading: 'Information we collect',
    body: (
      <>
        <p>We collect information in the following ways:</p>
        <ul>
          <li>
            <strong>Enquiry information</strong> — details you provide via our
            forms, including name, company, phone number, email, service
            interest, site location and message content.
          </li>
          <li>
            <strong>Contact records</strong> — records of correspondence when
            you email, call or message us.
          </li>
          <li>
            <strong>Site usage data</strong> — non-identifying information
            such as pages visited, referrer, device type and approximate
            location, collected via standard web analytics where enabled.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-use',
    heading: 'How we use your information',
    body: (
      <>
        <p>We use your information to:</p>
        <ul>
          <li>Respond to your enquiry and prepare a proposal.</li>
          <li>Schedule assessments, site visits or callbacks.</li>
          <li>Manage active engagements and account communication.</li>
          <li>Improve our services and website experience.</li>
          <li>Meet legal, regulatory and contractual obligations.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'lawful-basis',
    heading: 'Lawful basis for processing',
    body: (
      <p>
        We process your information where you have provided consent, where
        processing is necessary to take steps prior to entering into a
        contract with you, where processing is necessary for our legitimate
        interests as a service provider, and where required by law.
      </p>
    ),
  },
  {
    id: 'sharing',
    heading: 'Sharing your information',
    body: (
      <>
        <p>
          We do not sell your personal information. We may share your
          information with:
        </p>
        <ul>
          <li>
            <strong>Service providers</strong> operating on our behalf under
            written agreements (for example, hosting, email delivery,
            analytics).
          </li>
          <li>
            <strong>Regulators, law-enforcement and authorities</strong> where
            required by law or in response to lawful requests.
          </li>
          <li>
            <strong>Successors in interest</strong> in the event of a merger,
            acquisition or restructuring, subject to standard confidentiality
            protections.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'retention',
    heading: 'Data retention',
    body: (
      <p>
        We retain enquiry and engagement records for as long as necessary to
        fulfil the purposes described in this policy, meet contractual
        obligations, resolve disputes and comply with applicable legal
        requirements.
      </p>
    ),
  },
  {
    id: 'security',
    heading: 'Information security',
    body: (
      <p>
        We maintain administrative, technical and physical safeguards
        appropriate to the nature of the information we process. No system
        can be guaranteed to be completely secure — if you believe your
        interaction with us has been compromised, please contact us
        immediately.
      </p>
    ),
  },
  {
    id: 'your-rights',
    heading: 'Your rights',
    body: (
      <>
        <p>
          Subject to applicable law, you may have the right to access,
          correct, update or request deletion of your personal information,
          object to certain processing, or withdraw consent.
        </p>
        <p>
          To exercise these rights, contact us at{' '}
          <a href={company.emailHref}>{company.email}</a>.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    heading: 'Cookies and analytics',
    body: (
      <p>
        Our website may use essential cookies for site functionality and
        optional analytics cookies to understand how visitors interact with
        the site. You can control cookies through your browser settings. Any
        analytics service we use will be documented here once integrated.
      </p>
    ),
  },
  {
    id: 'children',
    heading: 'Children’s information',
    body: (
      <p>
        Our services are directed to businesses and institutions. We do not
        knowingly collect personal information from children. If you believe
        we have inadvertently collected such information, please contact us
        and we will delete it.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to this policy',
    body: (
      <p>
        We may update this policy from time to time. Material changes will be
        indicated by updating the “Effective” date at the top of this page
        and, where appropriate, providing further notice.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contacting us',
    body: (
      <>
        <p>For any questions about this Privacy Policy, contact us at:</p>
        <ul>
          <li>
            <strong>Email:</strong>{' '}
            <a href={company.emailHref}>{company.email}</a>
          </li>
          <li>
            <strong>Phone:</strong>{' '}
            <a href={company.phoneHref}>{company.phone}</a>
          </li>
          <li>
            <strong>Address:</strong> {company.address.line1},{' '}
            {company.address.line2}, {company.address.city},{' '}
            {company.address.state} {company.address.postal},{' '}
            {company.address.country}
          </li>
        </ul>
      </>
    ),
  },
]

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description={`How ${company.name} collects, uses and protects your information when you interact with our website and services.`}
      />
      <LegalPage
        eyebrow="Legal"
        title="Privacy Policy"
        description={`How ${company.name} collects, uses and protects your information.`}
        effectiveDate={legalEffectiveDate}
        sections={sections}
        contactNote={
          <>
            <strong className="text-chalk">
              Placeholder document.
            </strong>{' '}
            This Privacy Policy is provided as a starting template and should
            be reviewed and finalised by qualified legal counsel before
            publication.
          </>
        }
      />
    </>
  )
}
