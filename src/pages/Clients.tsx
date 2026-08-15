import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { PageHero } from '../components/shared/PageHero'
import { SEO } from '../components/shared/SEO'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ClientLogos } from '../components/shared/ClientLogos'
import { TestimonialCard } from '../components/cards/TestimonialCard'
import { CTASection } from '../components/shared/CTASection'
import { testimonials } from '../data/testimonials'
import { sectors } from '../data/sectors'
import { clientCases } from '../data/content'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function Clients() {
  return (
    <>
      <SEO
        title="Clients"
        description="Placeholder client roster spanning corporate, industrial, healthcare, hospitality and residential sectors."
      />
      <PageHero
        eyebrow="Clients"
        title="Trusted where security matters."
        description="A cross-section of the sectors we serve. Illustrative placeholder brands until verified client references are added."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Clients' },
        ]}
      />

      <Section tone="dark" size="lg">
        <Container>
          <ClientLogos tone="dark" />
        </Container>
      </Section>

      <Section tone="elevated" size="lg">
        <Container>
          <SectionHeading
            eyebrow="Selected Engagements"
            title="A snapshot of the work."
            size="lg"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {clientCases.map((c) => (
              <Link
                key={c.title}
                to={`/sectors/${c.slug}`}
                className="group flex flex-col gap-4 rounded-2xl border border-line-dark bg-bg-primary p-7 transition-colors hover:bg-surface-elevated"
              >
                <span className="text-eyebrow text-brand">{c.sector}</span>
                <h3 className="text-h4 text-chalk">{c.title}</h3>
                <p className="text-body text-chalk-soft text-pretty">{c.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-small font-medium text-chalk">
                  Related sector
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="dark" size="lg">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="What our clients say."
            align="center"
            size="lg"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} tone="dark" />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="elevated" size="lg">
        <Container>
          <SectionHeading
            eyebrow="Sectors Represented"
            title="Where our teams operate."
            size="lg"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {sectors.map((s) => (
              <Link
                key={s.slug}
                to={`/sectors/${s.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-line-dark bg-bg-primary px-4 py-2 text-small text-chalk transition-colors hover:border-line-darkStrong"
              >
                {s.title}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" aria-hidden />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
