import { Quote } from 'lucide-react'
import type { Testimonial } from '../../data/testimonials'

export function TestimonialCard({
  testimonial,
  tone: _tone,
}: {
  testimonial: Testimonial
  /** Legacy — ignored. Theme-aware now. */
  tone?: 'dark' | 'light'
}) {
  void _tone
  return (
    <figure className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-line-dark bg-bg-secondary p-6 md:p-8">
      <div className="flex flex-col gap-6">
        <Quote className="h-6 w-6 text-brand" aria-hidden />
        <blockquote className="text-body-lg text-chalk text-pretty">
          “{testimonial.quote}”
        </blockquote>
      </div>
      <figcaption className="flex items-center gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-overlay-active text-small font-semibold text-chalk">
          {testimonial.name
            .split(' ')
            .slice(0, 2)
            .map((s) => s[0])
            .join('')}
        </span>
        <div className="flex flex-col">
          <span className="text-small font-semibold text-chalk">
            {testimonial.name}
          </span>
          <span className="text-small text-chalk-muted">
            {testimonial.role} · {testimonial.company}
          </span>
        </div>
      </figcaption>
    </figure>
  )
}
