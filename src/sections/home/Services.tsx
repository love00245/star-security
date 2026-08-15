import { ArrowRight } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { Section } from '../../components/layout/Section'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { Button } from '../../components/ui/Button'
import { ServiceCard } from '../../components/cards/ServiceCard'
import { services } from '../../data/services'
import { servicesSectionContent } from '../../data/content'

export function Services() {
  const c = servicesSectionContent
  return (
    <Section id="services" tone="darker" size="lg">
      <Container>
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={c.eyebrow}
            title={c.title}
            description={c.description}
            size="lg"
          />
          <Button
            as="link"
            to="/services"
            variant="ghost"
            iconRight={<ArrowRight className="h-4 w-4" />}
          >
            {c.viewAllLabel}
          </Button>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} tone="dark" />
          ))}
        </div>
      </Container>
    </Section>
  )
}
