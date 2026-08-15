import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Select } from '../ui/Select'
import { Textarea } from '../ui/Textarea'
import { useForm } from '../../hooks/useForm'
import { combine, isIndianMobile, isRequired } from '../../lib/validators'
import { submitEnquiry } from '../../lib/submitEnquiry'
import { FormSuccess } from './FormSuccess'

type Field = 'name' | 'phone' | 'company' | 'contactTime' | 'message'

export function CallbackForm({ onClose }: { onClose: () => void }) {
  const form = useForm<Field>(
    {
      name: '',
      phone: '',
      company: '',
      contactTime: '',
      message: '',
    },
    {
      name: isRequired,
      phone: combine(isRequired, isIndianMobile),
    },
  )

  if (form.status === 'success') {
    return (
      <FormSuccess
        heading="Thank you. We’ll be in touch."
        message="One of our security experts will call you shortly."
        onClose={onClose}
      />
    )
  }

  return (
    <form
      noValidate
      onSubmit={form.handleSubmit(async (values) => {
        await submitEnquiry({ type: 'callback', fields: values })
      })}
      className="flex flex-col gap-5"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Input
          tone="dark"
          label="Name"
          name="name"
          required
          autoComplete="name"
          value={form.values.name}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          error={form.errors.name}
        />
        <Input
          tone="dark"
          label="Phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          value={form.values.phone}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          error={form.errors.phone}
        />
        <Input
          tone="dark"
          label="Company"
          name="company"
          autoComplete="organization"
          value={form.values.company}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        <Select
          tone="dark"
          label="Preferred Contact Time"
          name="contactTime"
          placeholder="Select a time"
          value={form.values.contactTime}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          options={[
            { value: 'morning', label: 'Morning (9 AM – 12 PM)' },
            { value: 'afternoon', label: 'Afternoon (12 PM – 4 PM)' },
            { value: 'evening', label: 'Evening (4 PM – 7 PM)' },
            { value: 'anytime', label: 'Any time' },
          ]}
        />
      </div>
      <Textarea
        tone="dark"
        label="Message"
        name="message"
        rows={3}
        placeholder="A short note on what you'd like to discuss (optional)."
        value={form.values.message}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      {form.status === 'error' && (
        <div
          role="alert"
          className="rounded-md border border-state-error/40 bg-state-error/10 px-4 py-3 text-small text-state-error"
        >
          {form.submitError ?? 'Something went wrong. Please try again.'}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={form.status === 'loading'}
        iconRight={<ArrowRight className="h-4 w-4" />}
      >
        Request a Callback
      </Button>
    </form>
  )
}
