import {
  Building,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
} from 'lucide-react'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { PageHero } from '../components/shared/PageHero'
import { SEO } from '../components/shared/SEO'
import { ContactForm } from '../components/forms/ContactForm'
import { company, fullAddress } from '../config/company'
import { contactPageContent } from '../data/content'

export default function Contact() {
  const c = contactPageContent
  return (
    <>
      <SEO
        title="Contact Us"
        description={`Get in touch with ${company.name}. Discuss your security requirements with our team.`}
      />
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        description={c.hero.description}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact' },
        ]}
        size="sm"
      />

      <Section tone="elevated" size="lg">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <aside className="lg:col-span-5 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-eyebrow text-brand">
                  {c.aside.eyebrow}
                </span>
                <h2 className="text-h2 text-balance">{c.aside.title}</h2>
                <p className="text-body-lg text-chalk-soft text-pretty max-w-md">
                  {c.aside.description}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <ContactRow
                  icon={<PhoneCall className="h-4 w-4" aria-hidden />}
                  label="Phone"
                >
                  <a
                    href={company.phoneHref}
                    className="tabular-nums text-chalk hover:text-brand transition-colors"
                  >
                    {company.phone}
                  </a>
                </ContactRow>
                <ContactRow
                  icon={<MessageCircle className="h-4 w-4" aria-hidden />}
                  label="WhatsApp"
                >
                  <a
                    href={company.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tabular-nums text-chalk hover:text-brand transition-colors"
                  >
                    {company.whatsapp}
                  </a>
                </ContactRow>
                <ContactRow
                  icon={<Mail className="h-4 w-4" aria-hidden />}
                  label="Email"
                >
                  <a
                    href={company.emailHref}
                    className="text-chalk hover:text-brand transition-colors break-all"
                  >
                    {company.email}
                  </a>
                </ContactRow>
                <ContactRow
                  icon={<MapPin className="h-4 w-4" aria-hidden />}
                  label="Office"
                >
                  <span className="text-chalk">{fullAddress}</span>
                </ContactRow>
                <ContactRow
                  icon={<Clock3 className="h-4 w-4" aria-hidden />}
                  label="Hours"
                >
                  <span className="text-chalk">
                    {company.hours.weekdays}
                    <br />
                    <span className="text-chalk-soft">
                      {company.hours.operations}
                    </span>
                  </span>
                </ContactRow>
              </div>

              {/* Map placeholder */}
              <div className="relative overflow-hidden rounded-2xl border border-line-dark bg-bg-secondary">
                <div className="aspect-[16/10] w-full bg-[radial-gradient(circle_at_30%_30%,rgba(18,47,130,0.18),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-chalk-soft">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-white">
                      <Building className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-small">
                      {company.address.city}, {company.address.state}
                    </span>
                    <span className="text-[11px] text-chalk-muted">
                      {c.mapPlaceholderLabel}
                    </span>
                  </div>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-7">
              <ContactForm tone="dark" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-line-dark bg-bg-primary p-5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-brand-soft text-brand">
        {icon}
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="text-eyebrow text-chalk-muted">{label}</span>
        <div className="text-body">{children}</div>
      </div>
    </div>
  )
}
