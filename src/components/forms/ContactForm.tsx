import { Send, CheckCircle2 } from 'lucide-react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Select } from '../ui/Select'
import { Textarea } from '../ui/Textarea'
import { useForm } from '../../hooks/useForm'
import {
  combine,
  isEmail,
  isIndianMobile,
  isRequired,
  minLength,
} from '../../lib/validators'
import { submitEnquiry } from '../../lib/submitEnquiry'
import { services } from '../../data/services'
import { sectors } from '../../data/sectors'

type Field =
  | 'fullName'
  | 'company'
  | 'email'
  | 'phone'
  | 'service'
  | 'industry'
  | 'location'
  | 'message'

export function ContactForm({
  tone: _tone,
}: {
  /** Legacy — ignored. Theme-aware now. */
  tone?: 'light' | 'dark'
} = {}) {
  void _tone
  const form = useForm<Field>(
    {
      fullName: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      industry: '',
      location: '',
      message: '',
    },
    {
      fullName: isRequired,
      email: isEmail,
      phone: combine(isRequired, isIndianMobile),
      message: minLength(10),
    },
  )

  if (form.status === 'success') {
    return (
      <div className="flex flex-col gap-4 rounded-2xl border border-line-dark bg-bg-secondary p-8 text-chalk">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-state-success/15 text-state-success">
          <CheckCircle2 className="h-6 w-6" aria-hidden />
        </span>
        <h3 className="text-h3">Thank you. Your enquiry has been sent.</h3>
        <p className="text-chalk-soft">
          Our team will review your message and respond within one business day.
        </p>
        <Button variant="outline" size="md" onClick={form.reset}>
          Send another enquiry
        </Button>
      </div>
    )
  }

  return (
    <form
      noValidate
      onSubmit={form.handleSubmit(async (values) => {
        await submitEnquiry({ type: 'contact', fields: values })
      })}
      className="flex flex-col gap-5 rounded-2xl border border-line-dark bg-bg-secondary p-6 md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Input
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
          label="Company"
          name="company"
          autoComplete="organization"
          value={form.values.company}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.values.email}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          error={form.errors.email}
        />
        <Input
          label="Mobile Number"
          name="phone"
          type="tel"
          required
          inputMode="numeric"
          autoComplete="tel"
          placeholder="10-digit mobile"
          value={form.values.phone}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          error={form.errors.phone}
        />
        <Select
          label="Service"
          name="service"
          placeholder="Select a service"
          value={form.values.service}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          options={services.map((s) => ({ value: s.slug, label: s.title }))}
        />
        <Select
          label="Industry"
          name="industry"
          placeholder="Select an industry"
          value={form.values.industry}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          options={sectors.map((s) => ({ value: s.slug, label: s.title }))}
        />
        <Input
          label="Location"
          name="location"
          autoComplete="address-level2"
          value={form.values.location}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className="md:col-span-2"
        />
      </div>
      <Textarea
        label="Message"
        name="message"
        rows={5}
        placeholder="Tell us about your site, current arrangement and concerns."
        value={form.values.message}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        error={form.errors.message}
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
        iconRight={<Send className="h-4 w-4" />}
      >
        Send Enquiry
      </Button>
    </form>
  )
}
