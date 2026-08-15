import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { cn } from '../../lib/cn'

export type Crumb = { label: string; to?: string }

export function Breadcrumb({
  items,
  className,
  tone: _tone,
}: {
  items: Crumb[]
  /** Legacy — ignored. Theme-aware now. */
  tone?: 'dark' | 'light'
  className?: string
}) {
  void _tone
  return (
    <nav aria-label="Breadcrumb" className={cn('text-small text-chalk-soft', className)}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={i} className="inline-flex items-center gap-2">
              {item.to && !last ? (
                <Link to={item.to} className="transition-colors hover:text-chalk">
                  {item.label}
                </Link>
              ) : (
                <span className={cn(last && 'text-chalk', 'font-medium')}>
                  {item.label}
                </span>
              )}
              {!last && (
                <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
