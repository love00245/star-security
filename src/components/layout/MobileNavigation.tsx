import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, PhoneCall, X } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { services } from '../../data/services'
import { sectors } from '../../data/sectors'
import { company } from '../../config/company'
import { useModal } from '../../context/ModalContext'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { Logo } from '../shared/Logo'
import { ThemeToggle } from '../ui/ThemeToggle'
import { useState } from 'react'

export function MobileNavigation({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const { openModal } = useModal()
  const reduced = useReducedMotion()
  const [expanded, setExpanded] = useState<'services' | 'sectors' | null>(null)

  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (!open) setExpanded(null)
  }, [open])

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[110] lg:hidden">
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={reduced ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: reduced ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-bg-primary text-chalk shadow-modal"
          >
            <div className="flex items-center justify-between border-b border-line-dark px-5 py-4">
              <Logo />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-chalk hover:bg-overlay-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-4">
              <ul className="flex flex-col gap-1">
                <li>
                  <MobileAccordion
                    label="Services"
                    open={expanded === 'services'}
                    onToggle={() =>
                      setExpanded((prev) => (prev === 'services' ? null : 'services'))
                    }
                  >
                    <ul className="flex flex-col gap-0.5">
                      <li>
                        <NavLink
                          to="/services"
                          onClick={onClose}
                          className="block rounded-md px-3 py-2 text-small text-chalk-soft hover:bg-overlay-hover hover:text-chalk"
                        >
                          All services
                        </NavLink>
                      </li>
                      {services.map((s) => (
                        <li key={s.slug}>
                          <NavLink
                            to={`/services/${s.slug}`}
                            onClick={onClose}
                            className="block rounded-md px-3 py-2 text-small text-chalk-soft hover:bg-overlay-hover hover:text-chalk"
                          >
                            {s.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </MobileAccordion>
                </li>

                <li>
                  <MobileAccordion
                    label="Industries"
                    open={expanded === 'sectors'}
                    onToggle={() =>
                      setExpanded((prev) => (prev === 'sectors' ? null : 'sectors'))
                    }
                  >
                    <ul className="flex flex-col gap-0.5">
                      <li>
                        <NavLink
                          to="/sectors"
                          onClick={onClose}
                          className="block rounded-md px-3 py-2 text-small text-chalk-soft hover:bg-overlay-hover hover:text-chalk"
                        >
                          All industries
                        </NavLink>
                      </li>
                      {sectors.map((s) => (
                        <li key={s.slug}>
                          <NavLink
                            to={`/sectors/${s.slug}`}
                            onClick={onClose}
                            className="block rounded-md px-3 py-2 text-small text-chalk-soft hover:bg-overlay-hover hover:text-chalk"
                          >
                            {s.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </MobileAccordion>
                </li>

                {[
                  { label: 'About', to: '/about' },
                  { label: 'Clients', to: '/clients' },
                  { label: 'Contact', to: '/contact' },
                ].map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.to}
                      onClick={onClose}
                      className="block rounded-md px-3 py-3 text-body font-medium text-chalk hover:bg-overlay-hover"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-line-dark p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-2 text-small text-chalk-soft"
                >
                  <PhoneCall className="h-4 w-4" aria-hidden />
                  <span className="tabular-nums">{company.phone}</span>
                </a>
                <ThemeToggle size="md" />
              </div>
              <Button
                fullWidth
                variant="primary"
                size="lg"
                onClick={() => {
                  onClose()
                  openModal('quote', { source: 'mobile-nav' })
                }}
              >
                Get a Quote
              </Button>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

function MobileAccordion({
  label,
  open,
  onToggle,
  children,
}: {
  label: string
  open: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <div className="rounded-md">
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-2 rounded-md px-3 py-3 text-body font-medium text-chalk hover:bg-overlay-hover"
      >
        {label}
        <ChevronDown
          className={cn(
            'h-4 w-4 transition-transform duration-200',
            open && 'rotate-180',
          )}
          aria-hidden
        />
      </button>
      {open && <div className="pl-3 pt-1 pb-2">{children}</div>}
    </div>
  )
}
