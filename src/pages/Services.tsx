import { ArrowRight } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { PageHero } from '../components/shared/PageHero'
import { SEO } from '../components/shared/SEO'
import { ServiceCard } from '../components/cards/ServiceCard'
import { Button } from '../components/ui/Button'
import { CTASection } from '../components/shared/CTASection'
import { services } from '../data/services'
import { servicesPageContent } from '../data/content'
import { useModal } from '../context/ModalContext'

export default function Services() {
  const { openModal } = useModal()
  const c = servicesPageContent
  return (
    <>
      <SEO
        title="Security Services"
        description="Uniformed security guards and licensed armed gunmen deployed across offices, factories, banks, societies and events."
      />
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        description={c.description}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services' },
        ]}
        actions={
          <>
            <Button
              variant="primary"
              size="lg"
              iconRight={<ArrowRight className="h-4 w-4" />}
              onClick={() => openModal('quote', { source: 'services-hero' })}
            >
              {c.primaryLabel}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => openModal('callback', { source: 'services-hero' })}
            >
              {c.secondaryLabel}
            </Button>
          </>
        }
      />
      <Section tone="dark" size="lg">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} tone="dark" />
            ))}
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  )
}
