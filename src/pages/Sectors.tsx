import { ArrowRight } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { PageHero } from '../components/shared/PageHero'
import { SEO } from '../components/shared/SEO'
import { SectorCard } from '../components/cards/SectorCard'
import { Button } from '../components/ui/Button'
import { CTASection } from '../components/shared/CTASection'
import { sectors } from '../data/sectors'
import { sectorsPageContent } from '../data/content'
import { useModal } from '../context/ModalContext'

export default function Sectors() {
  const { openModal } = useModal()
  const c = sectorsPageContent
  return (
    <>
      <SEO
        title="Industries We Protect"
        description="Security services tailored to your operating environment — corporate, manufacturing, logistics, retail, healthcare, hospitality, banking, education, construction and residential."
      />
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        description={c.description}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Industries' },
        ]}
        actions={
          <Button
            variant="primary"
            size="lg"
            iconRight={<ArrowRight className="h-4 w-4" />}
            onClick={() => openModal('quote', { source: 'sectors-hero' })}
          >
            {c.ctaLabel}
          </Button>
        }
      />
      <Section tone="dark" size="lg">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s) => (
              <SectorCard key={s.slug} sector={s} />
            ))}
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  )
}
