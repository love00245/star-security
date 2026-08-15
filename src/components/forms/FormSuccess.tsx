import { CheckCircle2 } from 'lucide-react'
import { Button } from '../ui/Button'

export function FormSuccess({
  heading = 'Thank you. Your request has been received.',
  message = 'Our security team will review your requirements and contact you shortly.',
  onClose,
}: {
  heading?: string
  message?: string
  onClose: () => void
}) {
  return (
    <div className="flex flex-col items-start gap-5 py-2">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-state-success/15 text-state-success">
        <CheckCircle2 className="h-6 w-6" aria-hidden />
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="text-h4 text-chalk">{heading}</h3>
        <p className="text-body text-chalk-soft">{message}</p>
      </div>
      <Button variant="secondary" size="md" onClick={onClose}>
        Close
      </Button>
    </div>
  )
}
