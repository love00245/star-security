import {
  forwardRef,
  useId,
  type ReactNode,
  type TextareaHTMLAttributes,
} from 'react'
import { cn } from '../../lib/cn'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  hint?: ReactNode
  error?: ReactNode
  required?: boolean
  /** Legacy — ignored. Theme-aware now. */
  tone?: 'dark' | 'light'
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      label,
      hint,
      error,
      required,
      id,
      className,
      rows = 4,
      tone: _tone,
      ...rest
    },
    ref,
  ) {
    void _tone
    const autoId = useId()
    const textareaId = id ?? autoId
    const hintId = hint ? `${textareaId}-hint` : undefined
    const errorId = error ? `${textareaId}-error` : undefined
    const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

    return (
      <div className="flex w-full flex-col gap-1.5">
        <label htmlFor={textareaId} className="text-small font-medium text-chalk">
          {label}
          {required && <span className="ml-1 text-brand" aria-hidden>*</span>}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          required={required}
          className={cn(
            'w-full resize-y rounded-md border px-3.5 py-3 text-body outline-none transition-colors duration-200',
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
  },
)
