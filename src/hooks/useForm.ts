import { useCallback, useState, type ChangeEvent, type FormEvent } from 'react'

export type FieldValidators<T extends string> = Partial<
  Record<T, (value: string, allValues: Record<T, string>) => string | null>
>

export type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export function useForm<T extends string>(
  initial: Record<T, string>,
  validators: FieldValidators<T> = {},
) {
  const [values, setValues] = useState<Record<T, string>>(initial)
  const [errors, setErrors] = useState<Partial<Record<T, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<T, boolean>>>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validateField = useCallback(
    (name: T, value: string, allValues: Record<T, string>) => {
      const validator = validators[name]
      if (!validator) return null
      return validator(value, allValues)
    },
    [validators],
  )

  const validateAll = useCallback(
    (v: Record<T, string>) => {
      const next: Partial<Record<T, string>> = {}
      for (const key of Object.keys(v) as T[]) {
        const err = validateField(key, v[key], v)
        if (err) next[key] = err
      }
      return next
    },
    [validateField],
  )

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const name = e.target.name as T
      const value = e.target.value
      setValues((prev) => {
        const next = { ...prev, [name]: value }
        if (touched[name]) {
          const err = validateField(name, value, next)
          setErrors((prevErrors) => ({ ...prevErrors, [name]: err ?? undefined }))
        }
        return next
      })
    },
    [touched, validateField],
  )

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const name = e.target.name as T
      setTouched((prev) => ({ ...prev, [name]: true }))
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, values[name], values) ?? undefined,
      }))
    },
    [values, validateField],
  )

  const setValue = useCallback((name: T, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }))
  }, [])

  const reset = useCallback(() => {
    setValues(initial)
    setErrors({})
    setTouched({})
    setStatus('idle')
    setSubmitError(null)
  }, [initial])

  const handleSubmit = useCallback(
    (onSubmit: (v: Record<T, string>) => Promise<void>) =>
      async (e: FormEvent) => {
        e.preventDefault()
        const nextErrors = validateAll(values)
        setErrors(nextErrors)
        setTouched(
          Object.keys(values).reduce(
            (acc, k) => ({ ...acc, [k]: true }),
            {} as Partial<Record<T, boolean>>,
          ),
        )
        if (Object.keys(nextErrors).length > 0) return
        setStatus('loading')
        setSubmitError(null)
        try {
          await onSubmit(values)
          setStatus('success')
        } catch (err) {
          setStatus('error')
          setSubmitError(
            err instanceof Error
              ? err.message
              : 'Something went wrong. Please try again.',
          )
        }
      },
    [values, validateAll],
  )

  return {
    values,
    errors,
    touched,
    status,
    submitError,
    handleChange,
    handleBlur,
    handleSubmit,
    setValue,
    reset,
  }
}
