import { Navigate, useParams } from 'react-router-dom'
import { ArrowRight, Check, CircleDashed } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { SEO } from '../components/shared/SEO'
import { PageHero } from '../components/shared/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { Accordion } from '../components/ui/Accordion'
import { CTASection } from '../components/shared/CTASection'
import { ServiceCard } from '../components/cards/ServiceCard'
import { findSector } from '../data/sectors'
import { findService } from '../data/services'
import { useModal } from '../context/ModalContext'

export default function SectorDetail() {
  const { slug } = useParams<{ slug: string }>()
  const sector = findSector(slug)
  const { openModal } = useModal()

  if (!sector) return <Navigate to="/404" replace />

  return (
    <>
      <SEO
        title={`${sector.title} Security`}
        description={sector.shortDescription}
      />
      <PageHero
        eyebrow={sector.eyebrow}
        title={`Security for ${sector.title.toLowerCase()}.`}
        description={sector.shortDescription}
        image={sector.heroImage}
        imageAlt={sector.heroImageAlt}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Industries', to: '/sectors' },
          { label: sector.title },
        ]}
        actions={
          <>
            <Button
              variant="primary"
              size="lg"
              iconRight={<ArrowRight className="h-4 w-4" />}
              onClick={() => openModal('quote', { source: 'sector-hero' })}
            >
              Get a Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => openModal('callback', { source: 'sector-hero' })}
            >
              Speak to an Expert
            </Button>
          </>
        }
      />

      {/* Challenges */}
      <Section tone="dark" size="lg">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Sector Challenges"
                title={`The specific risks in ${sector.title.toLowerCase()}.`}
                size="lg"
              />
            </div>
            <ul className="lg:col-span-7 flex flex-col gap-4">
              {sector.challenges.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-4 rounded-2xl border border-line-dark bg-surface-elevated/40 p-5"
                >
                  <CircleDashed className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                  <p className="text-body text-chalk text-pretty">{c}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Approach */}
      <Section tone="elevated" size="lg">
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title="How we design security for this environment."
            size="lg"
          />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {sector.approach.map((a) => (
              <li
                key={a}
                className="flex items-start gap-3 rounded-2xl border border-line-dark bg-bg-primary p-6"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                <span className="text-body text-chalk text-pretty">{a}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Relevant services */}
      {sector.relevantServices.length > 0 && (
        <Section tone="dark" size="lg">
          <Container>
            <SectionHeading
              eyebrow="Relevant Services"
              title="Services most often deployed in this sector."
              size="lg"
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {sector.relevantServices.map((sl) => {
                const svc = findService(sl)
                if (!svc) return null
                return <ServiceCard key={sl} service={svc} tone="dark" />
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* Deployment model */}
      <Section tone="elevated" size="lg">
        <Container>
          <SectionHeading
            eyebrow="Deployment Model"
            title="How we structure the team on your site."
            size="lg"
          />
          <div className="mt-10">
            <div className="flex flex-col gap-3 rounded-2xl border border-line-dark bg-bg-primary p-7 md:p-10">
              <span className="text-eyebrow text-brand">Personnel</span>
              <p className="text-body-lg text-chalk-soft text-pretty">
                {sector.personnelModel}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why us */}
      <Section tone="dark" size="lg">
        <Container>
          <SectionHeading
            eyebrow="Why Choose Us"
            title={`Why organisations in ${sector.title.toLowerCase()} choose our team.`}
            size="lg"
          />
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {sector.whyUs.map((w) => (
              <li
                key={w}
                className="flex items-start gap-3 rounded-2xl border border-line-dark bg-surface-elevated/40 p-6"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                <span className="text-body text-chalk text-pretty">{w}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* FAQ */}
      {sector.faqs.length > 0 && (
        <Section tone="elevated" size="lg">
          <Container>
            <SectionHeading
              eyebrow="Questions"
              title="Frequently asked."
              align="center"
              size="lg"
            />
            <div className="mt-12 max-w-3xl mx-auto">
              <Accordion
                tone="dark"
                items={sector.faqs.map((f, i) => ({
                  id: `${sector.slug}-faq-${i}`,
                  question: f.question,
                  answer: f.answer,
                }))}
              />
            </div>
          </Container>
        </Section>
      )}

      <CTASection heading={`Ready to secure your ${sector.title.toLowerCase()} operation?`} />
    </>
  )
}
