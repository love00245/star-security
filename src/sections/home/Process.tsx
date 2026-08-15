import { ArrowRight } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { Section } from '../../components/layout/Section'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { Button } from '../../components/ui/Button'
import { useModal } from '../../context/ModalContext'
import { processContent } from '../../data/content'

export function Process() {
  const { openModal } = useModal()
  const c = processContent
  return (
    <Section tone="dark" size="lg">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={c.eyebrow}
            title={c.title}
            description={c.description}
            size="lg"
          />
          <Button
            variant="primary"
            size="md"
            iconRight={<ArrowRight className="h-4 w-4" />}
            onClick={() => openModal('quote', { source: 'process' })}
          >
            {c.ctaLabel}
          </Button>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line-dark bg-line-dark md:grid-cols-2 lg:grid-cols-4">
          {c.steps.map((s, i) => (
            <li
              key={s.n}
              className="relative flex flex-col gap-3 bg-bg-primary p-7 md:p-8"
            >
              <span className="text-eyebrow text-brand tabular-nums">{s.n}</span>
              <h3 className="text-h4 text-chalk">{s.title}</h3>
              <p className="text-body text-chalk-soft text-pretty">{s.body}</p>
              {i < c.steps.length - 1 && (
                <ArrowRight
                  aria-hidden
                  className="absolute right-4 top-8 hidden h-4 w-4 text-chalk-muted lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
