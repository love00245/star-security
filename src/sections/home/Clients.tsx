import { Container } from '../../components/layout/Container'
import { Section } from '../../components/layout/Section'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { ClientLogos } from '../../components/shared/ClientLogos'
import { clientsSectionContent } from '../../data/content'

export function Clients() {
  const c = clientsSectionContent
  return (
    <Section tone="dark" size="lg">
      <Container>
        <SectionHeading
          eyebrow={c.eyebrow}
          title={c.title}
          description={c.description}
          align="center"
          size="lg"
        />
        <div className="mt-12">
          <ClientLogos tone="dark" />
        </div>
      </Container>
    </Section>
  )
}
