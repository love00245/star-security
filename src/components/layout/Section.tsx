import type { ElementType, HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

/**
 * Simplified tone system that works in both themes.
 *
 * - `default` / `dark` / `darker`  → primary canvas (bg-bg-primary)
 * - `elevated` / `light`            → raised surface (bg-bg-secondary)
 * - `staticDark`                    → always the fixed dark palette (Hero-style)
 * - `transparent`                   → no bg
 *
 * Legacy names `dark`, `darker`, `light`, `lightAlt` are kept as aliases so
 * existing callers keep working without a mass rename — they all map onto
 * theme-swapping values now.
 */
type Tone =
  | 'default'
  | 'dark'
  | 'darker'
  | 'elevated'
  | 'light'
  | 'lightAlt'
  | 'staticDark'
  | 'transparent'

type SectionProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType
  tone?: Tone
  size?: 'sm' | 'md' | 'lg'
  bleed?: boolean
}

const toneMap: Record<Tone, string> = {
  default: 'bg-bg-primary text-chalk',
  dark: 'bg-bg-primary text-chalk',
  darker: 'bg-bg-primary text-chalk',
  elevated: 'bg-bg-secondary text-chalk',
  light: 'bg-bg-secondary text-chalk',
  lightAlt: 'bg-bg-secondary text-chalk',
  staticDark: 'bg-static-dark text-static-chalk',
  transparent: '',
}

const sizeMap = {
  sm: 'py-16 md:py-20',
  md: 'py-20 md:py-28',
  lg: 'py-24 md:py-32',
} as const

export function Section({
  as: Tag = 'section',
  tone = 'default',
  size = 'md',
  bleed = false,
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <Tag
      className={cn(
        'relative w-full',
        toneMap[tone],
        !bleed && sizeMap[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
