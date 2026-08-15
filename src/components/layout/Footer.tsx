import { Link } from 'react-router-dom'
import { Mail, MapPin, PhoneCall } from 'lucide-react'
import { Container } from './Container'
import { Logo } from '../shared/Logo'
import { company, currentYear, fullAddress } from '../../config/company'
import { services } from '../../data/services'
import { sectors } from '../../data/sectors'

const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'Clients', to: '/clients' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
]

export function Footer() {
  return (
    <footer className="border-t border-line-dark bg-bg-primary text-chalk">
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4 flex flex-col gap-5">
            <Logo />
            <p className="text-body-lg text-chalk-soft max-w-sm text-pretty">
              {company.descriptor}. Small, hands-on and disciplined — deployed
              across offices, factories, banks and societies in Maharashtra.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={company.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line-darkStrong text-chalk-soft hover:text-chalk hover:bg-overlay-hover transition-colors"
              >
                <LinkedInIcon />
              </a>
              <a
                href={company.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line-darkStrong text-chalk-soft hover:text-chalk hover:bg-overlay-hover transition-colors"
              >
                <XIcon />
              </a>
            </div>
          </div>

          <FooterColumn title="Services" className="md:col-span-2">
            {services.map((s) => (
              <FooterLink key={s.slug} to={`/services/${s.slug}`}>
                {s.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Industries" className="md:col-span-4">
            {sectors.map((s) => (
              <FooterLink key={s.slug} to={`/sectors/${s.slug}`}>
                {s.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Company" className="md:col-span-2">
            {companyLinks.map((l) => (
              <FooterLink key={l.label} to={l.to}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-14 grid gap-6 border-t border-line-dark pt-8 text-small text-chalk-soft md:grid-cols-3">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
            <span>{fullAddress}</span>
          </div>
          <a
            href={company.phoneHref}
            className="flex items-center gap-3 hover:text-chalk transition-colors"
          >
            <PhoneCall className="h-4 w-4 shrink-0 text-brand" aria-hidden />
            <span className="tabular-nums">{company.phone}</span>
          </a>
          <a
            href={company.emailHref}
            className="flex items-center gap-3 hover:text-chalk transition-colors break-all"
          >
            <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden />
            <span>{company.email}</span>
          </a>
        </div>

        <div className="mt-8 flex flex-col-reverse items-start justify-between gap-3 border-t border-line-dark pt-6 text-small text-chalk-muted md:flex-row md:items-center">
          <p>
            © {currentYear} {company.legalName}. All rights reserved.
          </p>
          <p className="text-chalk-muted">{company.hours.operations}</p>
        </div>
      </Container>
    </footer>
  )
}

function FooterColumn({
  title,
  children,
  className = '',
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <h4 className="text-eyebrow mb-4 text-chalk">{title}</h4>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  )
}

function FooterLink({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        to={to}
        className="text-small text-chalk-soft hover:text-chalk transition-colors"
      >
        {children}
      </Link>
    </li>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18V9.98H5.67V18h2.67zM7 8.75a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zM18.34 18v-4.4c0-2.35-1.26-3.44-2.94-3.44-1.36 0-1.96.75-2.3 1.28V9.98h-2.66c.03.75 0 8.02 0 8.02h2.66v-4.48c0-.24.02-.48.09-.65.19-.48.63-.98 1.36-.98.96 0 1.34.73 1.34 1.79V18h2.45z"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M17.53 3H20.4l-6.27 7.17L21.5 21h-5.78l-4.53-5.9L5.83 21H2.96l6.7-7.66L2.5 3h5.93l4.1 5.42L17.53 3zm-1 16.2h1.6L7.6 4.7H5.86l10.68 14.5z"/>
    </svg>
  )
}
