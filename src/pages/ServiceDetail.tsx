import { Navigate, useParams } from 'react-router-dom'
import { ArrowRight, Check, CircleDashed } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { SEO } from '../components/shared/SEO'
import { PageHero } from '../components/shared/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { Accordion } from '../components/ui/Accordion'
import { Badge } from '../components/ui/Badge'
import { CTASection } from '../components/shared/CTASection'
import { findService } from '../data/services'
import { findSector } from '../data/sectors'
import { useModal } from '../context/ModalContext'
import { Link } from 'react-router-dom'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = findService(slug)
  const { openModal } = useModal()

  if (!service) return <Navigate to="/404" replace />

  const Icon = service.icon

  return (
    <>
      <SEO
        title={service.title}
        description={service.shortDescription}
      />
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.shortDescription}
        image={service.heroImage}
        imageAlt={service.heroImageAlt}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
        actions={
          <>
            <Button
              variant="primary"
              size="lg"
              iconRight={<ArrowRight className="h-4 w-4" />}
              onClick={() =>
                openModal('quote', {
                  serviceSlug: service.slug,
                  serviceTitle: service.title,
                  source: 'service-hero',
                })
              }
            >
              Get a Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => openModal('callback', { source: 'service-hero' })}
            >
              Speak to an Expert
            </Button>
          </>
        }
      />

      {/* Overview */}
      <Section tone="dark" size="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <div className="sticky top-28 flex flex-col gap-5">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-soft text-brand">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <span className="text-eyebrow text-brand">Overview</span>
                <h2 className="text-h2 text-balance">
                  What this engagement covers.
                </h2>
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-body-lg text-chalk-soft text-pretty">
                {service.overview}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Challenges */}
      <Section tone="elevated" size="lg">
        <Container>
          <SectionHeading
            eyebrow="Problems We Address"
            title="Common challenges this service is built to solve."
            size="lg"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.challenges.map((c) => (
              <div
                key={c}
                className="flex items-start gap-4 rounded-2xl border border-line-dark bg-bg-primary p-6"
              >
                <CircleDashed className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                <p className="text-body text-chalk text-pretty">{c}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section tone="dark" size="lg">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Capabilities"
                title="What we deliver."
                size="lg"
              />
            </div>
            <ul className="lg:col-span-7 grid gap-3 sm:grid-cols-2">
              {service.capabilities.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 rounded-md border border-line-dark bg-surface-elevated/40 px-4 py-3"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                  <span className="text-body text-chalk">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section tone="elevated" size="lg">
        <Container>
          <SectionHeading
            eyebrow="Benefits"
            title="Why our clients choose this service."
            align="center"
            size="lg"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {service.benefits.map((b) => (
              <div
                key={b.title}
                className="flex flex-col gap-3 rounded-2xl border border-line-dark bg-bg-primary p-7"
              >
                <h3 className="text-h4 text-chalk">{b.title}</h3>
                <p className="text-body text-chalk-soft text-pretty">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Industries served */}
      {service.industries.length > 0 && (
        <Section tone="dark" size="lg">
          <Container>
            <SectionHeading
              eyebrow="Industries Served"
              title="Where this service is most often deployed."
              size="lg"
            />
            <div className="mt-10 flex flex-wrap gap-3">
              {service.industries.map((sl) => {
                const sector = findSector(sl)
                if (!sector) return null
                return (
                  <Link
                    key={sl}
                    to={`/sectors/${sector.slug}`}
                    className="inline-flex"
                  >
                    <Badge tone="dark" size="md">
                      {sector.title}
                    </Badge>
                  </Link>
                )
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* Process */}
      <Section tone="elevated" size="lg">
        <Container>
          <SectionHeading
            eyebrow="How We Operate"
            title="The engagement process."
            size="lg"
          />
          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <li
                key={step.title}
                className="flex flex-col gap-3 rounded-2xl border border-line-dark bg-bg-primary p-6"
              >
                <span className="text-eyebrow text-brand tabular-nums">
                  Step {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-h4 text-chalk">{step.title}</h3>
                <p className="text-body text-chalk-soft text-pretty">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <Section tone="dark" size="lg">
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
                items={service.faqs.map((f, i) => ({
                  id: `${service.slug}-faq-${i}`,
                  question: f.question,
                  answer: f.answer,
                }))}
              />
            </div>
          </Container>
        </Section>
      )}

      <CTASection heading={`Ready to plan your ${service.title.toLowerCase()} deployment?`} />
    </>
  )
}
