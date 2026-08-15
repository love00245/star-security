import { ArrowRight } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { Section } from '../../components/layout/Section'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { Button } from '../../components/ui/Button'
import { SectorCard } from '../../components/cards/SectorCard'
import { sectors } from '../../data/sectors'
import { sectorsSectionContent } from '../../data/content'

export function Sectors() {
  const c = sectorsSectionContent
  return (
    <Section tone="dark" size="lg">
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
            to="/sectors"
            variant="ghost"
            iconRight={<ArrowRight className="h-4 w-4" />}
          >
            {c.exploreLabel}
          </Button>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.slice(0, 8).map((s) => (
            <SectorCard key={s.slug} sector={s} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
