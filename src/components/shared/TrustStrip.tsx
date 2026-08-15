import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { stats } from '../../data/stats'
import { trustIndicators } from '../../data/content'
import { cn } from '../../lib/cn'

export function TrustStrip({
  variant = 'stats',
  tone = 'default',
}: {
  variant?: 'stats' | 'indicators'
  /** 'default' uses theme-swapping tokens; 'static-dark' pins to the fixed dark palette (Hero). */
  tone?: 'default' | 'static-dark'
}) {
  if (variant === 'indicators') {
    const textClass =
      tone === 'static-dark' ? 'text-static-chalkSoft' : 'text-chalk-soft'
    return (
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {trustIndicators.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className={cn('inline-flex items-center gap-2 text-small', textClass)}
          >
            <Icon className="h-4 w-4 text-brand" aria-hidden />
            <span>{label}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <Section tone="elevated" size="sm" className="border-y border-line-dark">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5">
              <span className="text-h2 text-chalk tabular-nums">{s.value}</span>
              <span className="text-small font-medium text-chalk">{s.label}</span>
              {s.sub && (
                <span className="text-small text-chalk-muted">{s.sub}</span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
