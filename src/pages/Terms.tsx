import { LegalPage, type LegalSection } from '../components/shared/LegalPage'
import { SEO } from '../components/shared/SEO'
import { company } from '../config/company'
import { legalEffectiveDate } from '../data/content'

const sections: LegalSection[] = [
  {
    id: 'acceptance',
    heading: 'Acceptance of terms',
    body: (
      <p>
        These Terms of Use (“Terms”) govern your access to and use of the{' '}
        {company.name} website and any online services made available by us
        through this website. By accessing the site you agree to be bound by
        these Terms. If you do not agree, please do not use the site.
      </p>
    ),
  },
  {
    id: 'services',
    heading: 'Our services',
    body: (
      <>
        <p>
          {company.name} provides integrated security services including
          manned guarding, corporate security, industrial security, electronic
          security, event security, fire and safety, residential security and
          facility support.
        </p>
        <p>
          Information on this website is provided for general informational
          purposes. Any engagement for services is subject to a separate
          written agreement, including scope, pricing, deployment terms and
          service levels.
        </p>
      </>
    ),
  },
  {
    id: 'use-of-site',
    heading: 'Acceptable use',
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Use the site in any way that violates applicable law or regulation.</li>
          <li>Attempt to gain unauthorised access to any portion of the site, its systems or related networks.</li>
          <li>Introduce malware, viruses or other harmful code.</li>
          <li>Use automated means to scrape, extract or replicate site content.</li>
          <li>Impersonate another person or misrepresent your affiliation with an entity.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'enquiries',
    heading: 'Enquiries and submissions',
    body: (
      <p>
        By submitting information through our enquiry forms, you confirm that
        the information is accurate and that you are authorised to share it.
        We use enquiry information in accordance with our{' '}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    ),
  },
  {
    id: 'intellectual-property',
    heading: 'Intellectual property',
    body: (
      <p>
        The content on this website — including text, imagery, graphics,
        logos, and layout — is owned by or licensed to {company.name} and is
        protected by applicable intellectual property laws. You may not
        reproduce, distribute or create derivative works without our prior
        written consent, except for personal, non-commercial reference.
      </p>
    ),
  },
  {
    id: 'trademarks',
    heading: 'Trademarks',
    body: (
      <p>
        “{company.name}” and any associated marks used on this site are the
        property of {company.name} or its licensors. Other names,
        trademarks and logos referenced on this site are the property of
        their respective owners and are used for identification purposes
        only.
      </p>
    ),
  },
  {
    id: 'third-party',
    heading: 'Third-party links',
    body: (
      <p>
        This site may contain links to third-party websites for convenience.
        We are not responsible for the content, policies or practices of
        those websites. Accessing them is at your own risk.
      </p>
    ),
  },
  {
    id: 'disclaimer',
    heading: 'Disclaimer',
    body: (
      <p>
        The site and its content are provided on an “as is” and “as
        available” basis. To the fullest extent permitted by law, we
        disclaim all warranties, express or implied, including warranties of
        merchantability, fitness for a particular purpose and
        non-infringement. We do not warrant that the site will be
        uninterrupted, error-free or free of harmful components.
      </p>
    ),
  },
  {
    id: 'limitation',
    heading: 'Limitation of liability',
    body: (
      <p>
        To the fullest extent permitted by law, {company.name} shall not be
        liable for any indirect, incidental, consequential, special or
        exemplary damages arising out of or in connection with your access
        to or use of the site. Our services engagement liability is governed
        by the terms of the applicable service agreement.
      </p>
    ),
  },
  {
    id: 'indemnity',
    heading: 'Indemnification',
    body: (
      <p>
        You agree to indemnify and hold harmless {company.name}, its
        officers, employees and affiliates from any claim or demand,
        including reasonable legal fees, arising out of your breach of these
        Terms or your violation of any law or the rights of a third party.
      </p>
    ),
  },
  {
    id: 'governing-law',
    heading: 'Governing law',
    body: (
      <p>
        These Terms are governed by the laws of India, without regard to
        conflict-of-law principles. Courts located in{' '}
        {company.address.city}, {company.address.state} shall have
        exclusive jurisdiction over any disputes arising out of these Terms
        or your use of the site.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to these terms',
    body: (
      <p>
        We may update these Terms from time to time. Material changes will
        be indicated by updating the “Effective” date at the top of this
        page. Your continued use of the site after any such change
        constitutes acceptance of the updated Terms.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contacting us',
    body: (
      <>
        <p>Questions about these Terms can be directed to:</p>
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

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Use"
        description={`Terms governing your use of the ${company.name} website and services.`}
      />
      <LegalPage
        eyebrow="Legal"
        title="Terms of Use"
        description={`The terms that govern your use of the ${company.name} website.`}
        effectiveDate={legalEffectiveDate}
        sections={sections}
        contactNote={
          <>
            <strong className="text-chalk">
              Placeholder document.
            </strong>{' '}
            These Terms of Use are provided as a starting template and should
            be reviewed and finalised by qualified legal counsel before
            publication.
          </>
        }
      />
    </>
  )
}
