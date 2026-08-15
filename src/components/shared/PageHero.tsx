import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Container } from '../layout/Container'
import { Breadcrumb, type Crumb } from './Breadcrumb'

type PageHeroProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  crumbs?: Crumb[]
  image?: string
  imageAlt?: string
  align?: 'left' | 'center'
  actions?: ReactNode
  /** Legacy — ignored. Theme-aware now. */
  tone?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  image,
  imageAlt = '',
  align = 'left',
  actions,
  size = 'md',
}: PageHeroProps) {
  const padding = {
    sm: 'pt-28 pb-16 md:pt-36 md:pb-20',
    md: 'pt-32 pb-20 md:pt-40 md:pb-28',
    lg: 'pt-36 pb-24 md:pt-48 md:pb-32',
  }[size]

  return (
    <section
      className={cn(
        'relative overflow-hidden bg-bg-primary text-chalk',
        padding,
      )}
    >
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover opacity-25 dark:opacity-40"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-bg-primary/60 via-bg-primary/80 to-bg-primary"
          />
        </>
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(18,47,130,0.10),transparent_60%)]"
      />
      <Container className="relative">
        {crumbs && crumbs.length > 0 && (
          <Breadcrumb items={crumbs} className="mb-8" />
        )}
        <div
          className={cn(
            'flex flex-col gap-6 max-w-3xl',
            align === 'center' && 'mx-auto items-center text-center',
          )}
        >
          {eyebrow && (
            <span className="text-eyebrow text-brand">{eyebrow}</span>
          )}
          <h1
            className={cn(
              size === 'lg' ? 'text-display-xl' : 'text-display',
              'text-balance',
            )}
          >
            {title}
          </h1>
          {description && (
            <p className="text-body-lg max-w-2xl text-pretty text-chalk-soft">
              {description}
            </p>
          )}
          {actions && (
            <div className="flex flex-wrap items-center gap-3">{actions}</div>
          )}
        </div>
      </Container>
    </section>
  )
}
