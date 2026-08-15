import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../lib/cn'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  /** Legacy — ignored. Kept so old callers don't error. Theme-aware now. */
  tone?: 'dark' | 'light'
  variant?: 'ghost' | 'outline' | 'solid'
  'aria-label': string
}

const sizeMap = {
  sm: 'h-9 w-9',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
} as const

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    {
      children,
      size = 'md',
      variant = 'ghost',
      className,
      type = 'button',
      tone: _tone,
      ...rest
    },
    ref,
  ) {
    void _tone
    const base =
      'inline-flex items-center justify-center rounded-md text-chalk transition-colors duration-200 ease-premium ' +
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary'

    const styles = {
      ghost: 'hover:bg-overlay-hover',
      outline: 'border border-line-darkStrong hover:bg-overlay-hover',
      solid: 'bg-overlay-active hover:bg-overlay-strong',
    }[variant]

    return (
      <button
        ref={ref}
        type={type}
        className={cn(base, styles, sizeMap[size], className)}
        {...rest}
      >
        {children}
      </button>
    )
  },
)
