import { Container } from '../../components/layout/Container'
import { Section } from '../../components/layout/Section'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { TestimonialCard } from '../../components/cards/TestimonialCard'
import { testimonials } from '../../data/testimonials'
import { testimonialsSectionContent } from '../../data/content'

export function Testimonials() {
  const c = testimonialsSectionContent
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
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.slice(0, 2).map((t, i) => (
            <TestimonialCard key={i} testimonial={t} tone="dark" />
          ))}
        </div>
      </Container>
    </Section>
  )
}
