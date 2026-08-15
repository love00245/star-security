export type Validator = (value: string) => string | null

export const isRequired: Validator = (v) =>
  v && v.trim().length > 0 ? null : 'This field is required.'

export const isEmail: Validator = (v) => {
  if (!v) return null
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
    ? null
    : 'Enter a valid email address.'
}

export const isPhone: Validator = (v) => {
  if (!v) return null
  // Permissive international: allow +, digits, spaces, hyphens; 7–20 total chars
  const cleaned = v.replace(/[\s\-()]/g, '')
  return /^\+?\d{7,15}$/.test(cleaned)
    ? null
    : 'Enter a valid phone number.'
}

// Indian 10-digit mobile: starts with 6, 7, 8, or 9. Accepts an optional
// leading +91 or 0 prefix, plus common spacing / hyphens.
export const isIndianMobile: Validator = (v) => {
  if (!v) return null
  const cleaned = v.replace(/[\s\-()]/g, '').replace(/^(\+91|0)/, '')
  return /^[6-9]\d{9}$/.test(cleaned)
    ? null
    : 'Enter a valid 10-digit Indian mobile number.'
}

export const isPositiveInt: Validator = (v) => {
  if (!v) return null
  return /^[1-9]\d{0,4}$/.test(v.trim()) ? null : 'Enter a whole number of 1 or more.'
}

export const minLength = (n: number): Validator => (v) =>
  !v || v.length >= n ? null : `Must be at least ${n} characters.`

export function combine(...validators: Validator[]): Validator {
  return (value) => {
    for (const v of validators) {
      const err = v(value)
      if (err) return err
    }
    return null
  }
}
