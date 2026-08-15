import { Container } from '../../components/layout/Container'
import { Section } from '../../components/layout/Section'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { introductionContent } from '../../data/content'

export function Introduction() {
  const c = introductionContent
  return (
    <Section tone="dark" size="lg">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-line-dark">
              <img
                src={c.image}
                alt={c.imageAlt}
                loading="lazy"
                className="aspect-[5/4] w-full object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-bg-primary/60 via-transparent to-transparent"
              />
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8">
            <SectionHeading
              eyebrow={c.eyebrow}
              title={c.title}
              description={c.description}
            />
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {c.pillars.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-md py-1.5"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-brand-soft text-brand">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-small font-medium text-chalk">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}
