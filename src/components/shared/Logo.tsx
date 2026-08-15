import { Link } from 'react-router-dom'
import { company } from '../../config/company'
import { cn } from '../../lib/cn'

export function Logo({
  className,
  variant = 'full',
  /**
   * `undefined` → theme-aware (default).
   * `'onDark'`  → always render as if on a dark surface (used by transparent navbar over the always-dark Hero).
   */
  forceTone,
  tone: _tone,
}: {
  /** Legacy — ignored. Theme-aware now. */
  tone?: 'dark' | 'light'
  forceTone?: 'onDark'
  className?: string
  variant?: 'full' | 'mark'
}) {
  void _tone
  const textClass = forceTone === 'onDark' ? 'text-static-chalk' : 'text-chalk'
  return (
    <Link
      to="/"
      aria-label={`${company.name} — home`}
      className={cn(
        'group inline-flex items-center gap-2.5 font-semibold tracking-tight',
        textClass,
        className,
      )}
    >
      <span className="relative grid h-8 w-8 place-items-center rounded-md bg-brand shadow-[inset_0_-6px_10px_rgba(0,0,0,0.25)]">
        <ShieldMark />
      </span>
      {variant === 'full' && (
        <span className="flex flex-col leading-none">
          <span className="text-[15px]">{company.shortName}</span>
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] opacity-60">
            Agency
          </span>
        </span>
      )}
    </Link>
  )
}

function ShieldMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-white"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 2.5l7.5 2.6v6.2c0 4.6-3.1 8.7-7.5 9.7-4.4-1-7.5-5.1-7.5-9.7V5.1L12 2.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.6 12.2l2.4 2.4 4.4-4.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
