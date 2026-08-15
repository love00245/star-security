import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Select } from '../ui/Select'
import { Textarea } from '../ui/Textarea'
import { useForm } from '../../hooks/useForm'
import {
  combine,
  isIndianMobile,
  isPositiveInt,
  isRequired,
} from '../../lib/validators'
import { submitEnquiry } from '../../lib/submitEnquiry'
import { services } from '../../data/services'
import { FormSuccess } from './FormSuccess'

type Field =
  | 'fullName'
  | 'mobile'
  | 'city'
  | 'requirement'
  | 'guards'
  | 'duration'
  | 'deployDate'
  | 'notes'

export function LeadForm({
  onClose,
  preselectedServiceSlug,
}: {
  onClose: () => void
  preselectedServiceSlug?: string
}) {
  const form = useForm<Field>(
    {
      fullName: '',
      mobile: '',
      city: '',
      requirement: preselectedServiceSlug ?? '',
      guards: '',
      duration: '',
      deployDate: '',
      notes: '',
    },
    {
      fullName: isRequired,
      mobile: combine(isRequired, isIndianMobile),
      city: isRequired,
      requirement: isRequired,
      guards: combine(isRequired, isPositiveInt),
    },
  )

  if (form.status === 'success') {
    return (
      <FormSuccess
        heading="Thank you. We’ve received your enquiry."
        message="Our team will call you shortly to understand your site and share a quote."
        onClose={onClose}
      />
    )
  }

  return (
    <form
      noValidate
      onSubmit={form.handleSubmit(async (values) => {
        await submitEnquiry({ type: 'quote', fields: values })
      })}
      className="flex flex-col gap-5"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Input
          tone="dark"
          label="Full Name"
          name="fullName"
          required
          autoComplete="name"
          value={form.values.fullName}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          error={form.errors.fullName}
        />
        <Input
          tone="dark"
          label="Mobile Number"
          name="mobile"
          type="tel"
          required
          inputMode="numeric"
          autoComplete="tel"
          placeholder="10-digit mobile"
          value={form.values.mobile}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          error={form.errors.mobile}
        />
        <Input
          tone="dark"
          label="City / Site Location"
          name="city"
          required
          autoComplete="address-level2"
          value={form.values.city}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          error={form.errors.city}
        />
        <Select
          tone="dark"
          label="Requirement"
          name="requirement"
          required
          placeholder="Select requirement"
          value={form.values.requirement}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          error={form.errors.requirement}
          options={services.map((s) => ({ value: s.slug, label: s.title }))}
        />
        <Input
          tone="dark"
          label="Number of Guards"
          name="guards"
          type="text"
          inputMode="numeric"
          required
          placeholder="e.g. 4"
          value={form.values.guards}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          error={form.errors.guards}
        />
        <Select
          tone="dark"
          label="Duration"
          name="duration"
          placeholder="Select duration"
          value={form.values.duration}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          options={[
            { value: 'lt-1m', label: 'Less than 1 month' },
            { value: '1-6m', label: '1 – 6 months' },
            { value: '6-12m', label: '6 – 12 months' },
            { value: 'ongoing', label: 'Ongoing / long-term' },
          ]}
        />
        <Input
          tone="dark"
          label="Preferred Start Date"
          name="deployDate"
          type="date"
          value={form.values.deployDate}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className="md:col-span-2"
        />
      </div>
      <Textarea
        tone="dark"
        label="Notes"
        name="notes"
        rows={3}
        placeholder="Site type, shift timings, any specific requirement."
        value={form.values.notes}
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

      <div className="flex flex-col gap-3 pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={form.status === 'loading'}
          iconRight={<ArrowRight className="h-4 w-4" />}
        >
          Get a Quote
        </Button>
        <p className="text-small text-chalk-muted">
          By submitting this form, you agree to be contacted regarding your enquiry.
        </p>
      </div>
    </form>
  )
}
