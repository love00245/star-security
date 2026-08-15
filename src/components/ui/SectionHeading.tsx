import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  /** Legacy — ignored. Theme-aware now. */
  tone?: 'dark' | 'light'
  size?: 'md' | 'lg'
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  size = 'md',
  as: Heading = 'h2',
  className,
}: SectionHeadingProps) {
  const titleClass = size === 'lg' ? 'text-display' : 'text-h2'

  return (
    <div
      className={cn(
        'flex max-w-3xl flex-col gap-4',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className="text-eyebrow text-brand">{eyebrow}</span>
      )}
      <Heading className={cn(titleClass, 'text-balance text-chalk')}>
        {title}
      </Heading>
      {description && (
        <p className="text-body-lg text-pretty max-w-2xl text-chalk-soft">
          {description}
        </p>
      )}
    </div>
  )
}
