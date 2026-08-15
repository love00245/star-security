import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Service } from '../../data/services'
import { cn } from '../../lib/cn'

export function ServiceCard({
  service,
  tone: _tone,
}: {
  service: Service
  /** Legacy — ignored. Theme-aware now. */
  tone?: 'dark' | 'light'
}) {
  void _tone
  const Icon = service.icon
  return (
    <Link
      to={`/services/${service.slug}`}
      className={cn(
        'group relative flex flex-col gap-5 overflow-hidden rounded-2xl border p-6 md:p-7 transition-all duration-300 ease-premium',
        'border-line-dark bg-bg-secondary hover:border-line-darkStrong hover:shadow-card',
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-full text-chalk-muted transition-all group-hover:bg-overlay-hover group-hover:text-chalk">
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-h4 text-chalk">{service.title}</h3>
        <p className="text-body text-chalk-soft text-pretty">
          {service.shortDescription}
        </p>
      </div>
      <div className="mt-auto pt-2">
        <span className="inline-flex items-center gap-1.5 text-small font-medium text-brand">
          Learn more
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  )
}
