import { clients } from '../../data/clients'
import { cn } from '../../lib/cn'

export function ClientLogos({
  compact = false,
  tone: _tone,
}: {
  /** Legacy — ignored. Theme-aware now. */
  tone?: 'dark' | 'light'
  compact?: boolean
}) {
  void _tone
  return (
    <div
      className={cn(
        'grid gap-px overflow-hidden rounded-2xl border border-line-dark bg-line-dark',
        compact
          ? 'grid-cols-2 md:grid-cols-4'
          : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5',
      )}
    >
      {clients.map((c) => (
        <div
          key={c.name}
          className="flex flex-col items-center justify-center gap-1 bg-bg-primary px-4 py-8"
        >
          <span className="text-h4 font-semibold tracking-tight text-chalk">
            {c.name}
          </span>
          <span className="text-[11px] uppercase tracking-[0.16em] font-medium text-chalk-muted">
            {c.sector}
          </span>
        </div>
      ))}
    </div>
  )
}
