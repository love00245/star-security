import type { ReactNode } from 'react'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { PageHero } from './PageHero'
import { cn } from '../../lib/cn'

export type LegalSection = {
  id: string
  heading: string
  body: ReactNode
}

type LegalPageProps = {
  eyebrow: string
  title: string
  description?: string
  effectiveDate: string
  sections: LegalSection[]
  contactNote?: ReactNode
}

export function LegalPage({
  eyebrow,
  title,
  description,
  effectiveDate,
  sections,
  contactNote,
}: LegalPageProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        crumbs={[{ label: 'Home', to: '/' }, { label: title }]}
        size="sm"
      />
      <Section tone="dark" size="lg">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            {/* Sidebar: effective date + TOC */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 flex flex-col gap-6">
                <div className="rounded-2xl border border-line-dark bg-surface-elevated/40 p-5">
                  <span className="text-eyebrow text-brand">Effective</span>
                  <p className="mt-1.5 text-body text-chalk">{effectiveDate}</p>
                </div>
                <nav aria-label="On this page">
                  <span className="text-eyebrow text-chalk-muted">On this page</span>
                  <ol className="mt-3 flex flex-col gap-1.5">
                    {sections.map((s, i) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="group flex items-baseline gap-3 rounded-md py-1 text-small text-chalk-soft transition-colors hover:text-chalk"
                        >
                          <span className="tabular-nums text-chalk-muted group-hover:text-brand">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span>{s.heading}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </aside>

            {/* Body */}
            <div className="lg:col-span-8">
              <div className="flex flex-col gap-14">
                {sections.map((s, i) => (
                  <section
                    key={s.id}
                    id={s.id}
                    className="scroll-mt-28 flex flex-col gap-4"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-eyebrow text-brand tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h2 className="text-h3">{s.heading}</h2>
                    </div>
                    <div
                      className={cn(
                        'text-body-lg text-chalk-soft text-pretty',
                        'flex flex-col gap-4',
                        '[&_a]:text-brand [&_a]:underline-offset-4 hover:[&_a]:underline',
                        '[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2',
                        '[&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:flex [&_ol]:flex-col [&_ol]:gap-2',
                        '[&_strong]:text-chalk [&_strong]:font-semibold',
                      )}
                    >
                      {s.body}
                    </div>
                  </section>
                ))}

                {contactNote && (
                  <div className="rounded-2xl border border-line-dark bg-surface-elevated/40 p-6 md:p-7 text-body text-chalk-soft">
                    {contactNote}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
