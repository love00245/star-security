import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'
import { cn } from '../../lib/cn'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  hint?: ReactNode
  error?: ReactNode
  required?: boolean
  /** Legacy — ignored. Theme-aware now. */
  tone?: 'dark' | 'light'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, error, required, id, className, tone: _tone, ...rest },
  ref,
) {
  void _tone
  const autoId = useId()
  const inputId = id ?? autoId
  const hintId = hint ? `${inputId}-hint` : undefined
  const errorId = error ? `${inputId}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className="flex w-full flex-col gap-1.5">
      <label htmlFor={inputId} className="text-small font-medium text-chalk">
        {label}
        {required && <span className="ml-1 text-brand" aria-hidden>*</span>}
      </label>
      <input
        ref={ref}
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        required={required}
        className={cn(
          'h-12 w-full rounded-md border px-3.5 text-body outline-none transition-colors duration-200',
          'bg-overlay-hover text-chalk border-line-darkStrong placeholder:text-chalk-muted',
          'focus:border-brand focus:bg-overlay-active',
          error && 'border-state-error focus:border-state-error',
          className,
        )}
        {...rest}
      />
      {hint && !error && (
        <p id={hintId} className="text-small text-chalk-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-small text-state-error">
          {error}
        </p>
      )}
    </div>
  )
})
