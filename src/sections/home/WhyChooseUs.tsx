import { Container } from '../../components/layout/Container'
import { Section } from '../../components/layout/Section'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { FeatureCard } from '../../components/cards/FeatureCard'
import { differentiators } from '../../data/values'
import { whyChooseUsContent } from '../../data/content'

export function WhyChooseUs() {
  const c = whyChooseUsContent
  return (
    <Section tone="elevated" size="lg">
      <Container>
        <SectionHeading
          eyebrow={c.eyebrow}
          title={c.title}
          description={c.description}
          align="center"
          size="lg"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d) => (
            <FeatureCard
              key={d.title}
              icon={d.icon}
              title={d.title}
              description={d.description}
              tone="dark"
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
