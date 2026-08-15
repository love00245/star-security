import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '../../components/layout/Container'
import { Button } from '../../components/ui/Button'
import { TrustStrip } from '../../components/shared/TrustStrip'
import { useModal } from '../../context/ModalContext'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { heroContent } from '../../data/content'

/**
 * The Hero is intentionally pinned to the dark palette in BOTH themes.
 * See plan: floofy-herding-castle.md — hero stays cinematic for conversion impact.
 * That's why this component uses `static.*` tokens instead of the theme-swapping ones.
 */
export function Hero() {
  const { openModal } = useModal()
  const reduced = useReducedMotion()
  const c = heroContent

  return (
    <section className="relative isolate overflow-hidden bg-static-dark text-static-chalk">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_10%,rgba(18,47,130,0.22),transparent_60%),radial-gradient(40%_40%_at_10%_80%,rgba(18,47,130,0.08),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-static-lineDarkStrong to-transparent"
      />
      <Container className="relative pt-36 pb-20 md:pt-44 md:pb-28 lg:pb-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col gap-7"
          >
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-static-lineDarkStrong bg-white/[0.04] px-3 py-1.5 text-eyebrow text-static-chalk">
              <ShieldCheck className="h-3.5 w-3.5 text-brand" aria-hidden />
              {c.eyebrow}
            </span>

            <h1 className="text-display-xl text-balance">
              {c.headline.prefix}
              <span className="text-brand">{c.headline.highlight}</span>
              {c.headline.suffix}
            </h1>

            <p className="text-body-lg text-static-chalkSoft max-w-xl text-pretty">
              {c.body}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                variant="primary"
                size="lg"
                iconRight={<ArrowRight className="h-4 w-4" />}
                onClick={() => openModal('quote', { source: 'hero' })}
              >
                {c.primaryCta}
              </Button>
              <Button
                as="link"
                to="/services"
                variant="outline"
                size="lg"
                iconLeft={<PlayCircle className="h-4 w-4" />}
                className="text-static-chalk"
              >
                {c.secondaryCta}
              </Button>
            </div>

            <div className="pt-4">
              <TrustStrip variant="indicators" tone="static-dark" />
            </div>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-brand/25 via-transparent to-transparent blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[28px] border border-static-lineDarkStrong bg-static-darkElevated">
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                />
                <div className="absolute inset-x-6 bottom-6 flex flex-col gap-3 rounded-2xl border border-static-lineDarkStrong bg-black/60 p-5 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand text-white">
                      <ShieldCheck className="h-4 w-4" aria-hidden />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-small font-semibold text-static-chalk">
                        {c.panelLabel}
                      </span>
                      <span className="text-[11px] text-static-chalkMuted">
                        {c.panelSub}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-1 text-center">
                    {c.panelStats.map((s) => (
                      <div key={s.label} className="flex flex-col gap-0.5">
                        <span className="text-body font-semibold text-static-chalk tabular-nums">
                          {s.value}
                        </span>
                        <span className="text-[11px] text-static-chalkMuted">
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
