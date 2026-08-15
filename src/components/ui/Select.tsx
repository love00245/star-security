import {
  forwardRef,
  useId,
  type ReactNode,
  type SelectHTMLAttributes,
} from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/cn'

type Option = { value: string; label: string }

type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> & {
  label: string
  options: Option[]
  hint?: ReactNode
  error?: ReactNode
  required?: boolean
  /** Legacy — ignored. Theme-aware now. */
  tone?: 'dark' | 'light'
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  {
    label,
    options,
    hint,
    error,
    required,
    placeholder,
    id,
    className,
    tone: _tone,
    ...rest
  },
  ref,
) {
  void _tone
  const autoId = useId()
  const selectId = id ?? autoId
  const hintId = hint ? `${selectId}-hint` : undefined
  const errorId = error ? `${selectId}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className="flex w-full flex-col gap-1.5">
      <label htmlFor={selectId} className="text-small font-medium text-chalk">
        {label}
        {required && <span className="ml-1 text-brand" aria-hidden>*</span>}
      </label>
      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          required={required}
          className={cn(
            'h-12 w-full appearance-none rounded-md border px-3.5 pr-10 text-body outline-none transition-colors duration-200',
            'bg-overlay-hover text-chalk border-line-darkStrong',
            'focus:border-brand focus:bg-overlay-active',
            error && 'border-state-error focus:border-state-error',
            className,
          )}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden
          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-chalk-soft"
        />
      </div>
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
