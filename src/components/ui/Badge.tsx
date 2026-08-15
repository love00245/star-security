import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type BadgeProps = {
  children: ReactNode
  /** Legacy — ignored. Theme-aware now. */
  tone?: 'dark' | 'light' | 'brand'
  size?: 'sm' | 'md'
  className?: string
  icon?: ReactNode
}

export function Badge({
  children,
  tone = 'dark',
  size = 'md',
  className,
  icon,
}: BadgeProps) {
  const toneClass =
    tone === 'brand'
      ? 'bg-brand-soft text-brand border border-brand-border'
      : 'bg-overlay-hover text-chalk border border-line-dark'

  const sizeClass = size === 'sm' ? 'h-6 px-2.5 text-[11px]' : 'h-7 px-3 text-xs'

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium uppercase tracking-[0.08em]',
        toneClass,
        sizeClass,
        className,
      )}
    >
      {icon && <span className="inline-flex h-3.5 w-3.5">{icon}</span>}
      {children}
    </span>
  )
}
