import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark'
type Size = 'sm' | 'md' | 'lg'

type CommonProps = {
  variant?: Variant
  size?: Size
  iconLeft?: ReactNode
  iconRight?: ReactNode
  loading?: boolean
  fullWidth?: boolean
  children?: ReactNode
  className?: string
}

const base =
  'group relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-premium ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand focus-visible:ring-offset-bg-primary ' +
  'disabled:cursor-not-allowed disabled:opacity-55 select-none whitespace-nowrap'

const variantMap: Record<Variant, string> = {
  primary:
    'bg-brand text-white hover:bg-brand-hover active:translate-y-[1px] shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset]',
  // Inverse-of-canvas: light-button in dark theme, dark-button in light theme.
  secondary:
    'bg-chalk text-bg-primary hover:bg-chalk/90 active:translate-y-[1px]',
  outline:
    'bg-transparent text-current border border-current/25 hover:border-current/60 hover:bg-current/5 active:translate-y-[1px]',
  ghost:
    'bg-transparent text-current hover:bg-current/10 active:translate-y-[1px]',
  // Always-dark button — used sparingly.
  dark:
    'bg-static-dark text-static-chalk hover:bg-static-darker active:translate-y-[1px]',
}

const sizeMap: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm rounded-md',
  md: 'h-11 px-5 text-[0.95rem] rounded-lg',
  lg: 'h-14 px-7 text-[1rem] rounded-lg',
}

function Content({
  loading,
  iconLeft,
  iconRight,
  children,
}: Pick<CommonProps, 'loading' | 'iconLeft' | 'iconRight' | 'children'>) {
  return (
    <>
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
      ) : (
        iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>
      )}
      {children && <span className="truncate">{children}</span>}
      {iconRight && !loading && (
        <span className="inline-flex shrink-0 transition-transform duration-200 ease-premium group-hover:translate-x-0.5">
          {iconRight}
        </span>
      )}
    </>
  )
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    as?: 'button'
  }

type ButtonAsAnchor = CommonProps & {
  as: 'a'
  href: string
  target?: string
  rel?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  'aria-label'?: string
}

type ButtonAsLink = CommonProps & {
  as: 'link'
  to: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  'aria-label'?: string
}

export type AnyButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink

export const Button = forwardRef<HTMLElement, AnyButtonProps>(function Button(
  props,
  ref,
) {
  const {
    variant = 'primary',
    size = 'md',
    iconLeft,
    iconRight,
    loading,
    fullWidth,
    className,
    children,
  } = props

  const classes = cn(
    base,
    variantMap[variant],
    sizeMap[size],
    fullWidth && 'w-full',
    className,
  )

  const inner = (
    <Content loading={loading} iconLeft={iconLeft} iconRight={iconRight}>
      {children}
    </Content>
  )

  if (props.as === 'link') {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        to={props.to}
        onClick={props.onClick}
        aria-label={props['aria-label']}
        className={classes}
      >
        {inner}
      </Link>
    )
  }

  if (props.as === 'a') {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={props.href}
        target={props.target}
        rel={props.rel ?? (props.target === '_blank' ? 'noopener noreferrer' : undefined)}
        onClick={props.onClick}
        aria-label={props['aria-label']}
        className={classes}
      >
        {inner}
      </a>
    )
  }

  const {
    as: _ignored,
    variant: _v,
    size: _s,
    iconLeft: _il,
    iconRight: _ir,
    loading: _l,
    fullWidth: _fw,
    className: _c,
    children: _ch,
    type = 'button',
    disabled,
    ...buttonRest
  } = props as ButtonAsButton
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      disabled={disabled || loading}
      className={classes}
      {...buttonRest}
    >
      {inner}
    </button>
  )
})
