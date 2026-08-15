import { ArrowRight, PhoneCall } from 'lucide-react'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { useModal } from '../../context/ModalContext'
import { finalCtaContent } from '../../data/content'

type CTASectionProps = {
  heading?: string
  description?: string
  primaryLabel?: string
  secondaryLabel?: string
  tone?: 'dark' | 'darker' | 'brand'
}

export function CTASection({
  heading = finalCtaContent.heading,
  description = finalCtaContent.description,
  primaryLabel = finalCtaContent.primaryLabel,
  secondaryLabel = finalCtaContent.secondaryLabel,
  tone = 'darker',
}: CTASectionProps) {
  const { openModal } = useModal()

  return (
    <Section
      tone={tone === 'brand' ? 'transparent' : tone}
      size="md"
      className={tone === 'brand' ? 'bg-brand text-white' : ''}
    >
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-line-dark bg-bg-secondary p-8 md:p-14 lg:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_100%_0%,rgba(18,47,130,0.14),transparent_65%)]"
          />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-display text-balance">{heading}</h2>
              <p className="mt-5 text-body-lg text-chalk-soft text-pretty">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                iconRight={<ArrowRight className="h-4 w-4" />}
                onClick={() => openModal('quote', { source: 'cta-section' })}
              >
                {primaryLabel}
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconLeft={<PhoneCall className="h-4 w-4" />}
                onClick={() => openModal('callback', { source: 'cta-section' })}
              >
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
