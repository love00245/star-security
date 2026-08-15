import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, PhoneCall } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Container } from './Container'
import { Button } from '../ui/Button'
import { Logo } from '../shared/Logo'
import { services } from '../../data/services'
import { sectors } from '../../data/sectors'
import { primaryNav } from '../../data/navigation'
import { useModal } from '../../context/ModalContext'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { MobileNavigation } from './MobileNavigation'
import { company } from '../../config/company'
import { ThemeToggle } from '../ui/ThemeToggle'

const CLOSE_DELAY_MS = 120

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<'services' | 'sectors' | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { openModal } = useModal()
  const location = useLocation()
  const reduced = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [location.pathname])

  // Delayed-close timer so the cursor can travel from the trigger down into
  // the mega menu without the menu snapping shut mid-move.
  const closeTimer = useRef<number | null>(null)
  const cancelClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }
  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), CLOSE_DELAY_MS)
  }
  useEffect(() => cancelClose, [])

  // Close mega menu on outside click / Escape
  const headerRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (!openMenu) return
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(null)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [openMenu])

  // The home page's Hero is intentionally always dark. Only there do we need
  // to force light-on-dark navbar text when transparent. On every other route,
  // the transparent navbar sits over a theme-aware PageHero, so theme-aware
  // text already reads correctly in both themes.
  const solid = scrolled || openMenu !== null
  const overDarkHero = location.pathname === '/' && !solid
  const textOnBar = overDarkHero ? 'text-static-chalk' : 'text-chalk'
  const textSoftOnBar = overDarkHero
    ? 'text-static-chalkSoft'
    : 'text-chalk-soft'
  const overlayOnBar = overDarkHero
    ? 'hover:bg-white/10'
    : 'hover:bg-overlay-hover'

  const openServices = () => {
    cancelClose()
    setOpenMenu('services')
  }
  const openSectors = () => {
    cancelClose()
    setOpenMenu('sectors')
  }

  return (
    <>
      {/*
        onMouseLeave sits on the <header>, not the <nav>. The mega menu is a
        descendant of <header>, so mouseleave (which uses DOM ancestry, not
        visual bounds) doesn't fire when the cursor travels from the trigger
        down into the mega menu — fixing the bug where the menu closed the
        moment the cursor left the nav row.
      */}
      <header
        ref={headerRef}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-premium',
          solid
            ? 'bg-bg-primary/90 backdrop-blur-md border-b border-line-dark'
            : 'bg-transparent border-b border-transparent',
        )}
      >
        <Container className="flex h-[68px] items-center justify-between gap-6 md:h-[76px]">
          <div className="flex items-center gap-2">
            <Logo forceTone={overDarkHero ? 'onDark' : undefined} />
          </div>

          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-1"
          >
            {primaryNav.map((item) => {
              if (item.hasMenu && item.kind === 'services') {
                return (
                  <MenuTrigger
                    key={item.label}
                    label={item.label}
                    to={item.to}
                    active={openMenu === 'services'}
                    onOpen={openServices}
                    textClass={textOnBar}
                  />
                )
              }
              if (item.hasMenu && item.kind === 'sectors') {
                return (
                  <MenuTrigger
                    key={item.label}
                    label={item.label}
                    to={item.to}
                    active={openMenu === 'sectors'}
                    onOpen={openSectors}
                    textClass={textOnBar}
                  />
                )
              }
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onMouseEnter={() => setOpenMenu(null)}
                  className={({ isActive }) =>
                    cn(
                      'inline-flex h-10 items-center rounded-md px-3 text-[0.925rem] font-medium transition-colors',
                      textOnBar,
                      'opacity-85 hover:opacity-100',
                      isActive && 'opacity-100',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={company.phoneHref}
              className={cn(
                'hidden md:inline-flex items-center gap-2 rounded-md px-3 py-2 text-small transition-colors',
                textSoftOnBar,
                'hover:opacity-100',
              )}
            >
              <PhoneCall className="h-4 w-4" aria-hidden />
              <span className="tabular-nums">{company.phone}</span>
            </a>
            <ThemeToggle
              size="md"
              className={cn(textOnBar, overlayOnBar)}
            />
            <Button
              variant="primary"
              size="md"
              className="hidden md:inline-flex"
              onClick={() => openModal('quote', { source: 'navbar' })}
            >
              Get a Quote
            </Button>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className={cn(
                'inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden',
                textOnBar,
                overlayOnBar,
              )}
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </Container>

        <AnimatePresence>
          {openMenu === 'services' && (
            <MegaMenu key="services" reduced={reduced}>
              <ServicesMenu onClose={() => setOpenMenu(null)} />
            </MegaMenu>
          )}
          {openMenu === 'sectors' && (
            <MegaMenu key="sectors" reduced={reduced}>
              <SectorsMenu onClose={() => setOpenMenu(null)} />
            </MegaMenu>
          )}
        </AnimatePresence>
      </header>

      <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}

function MenuTrigger({
  label,
  to,
  active,
  onOpen,
  textClass,
}: {
  label: string
  to: string
  active: boolean
  onOpen: () => void
  textClass: string
}) {
  return (
    <div onMouseEnter={onOpen} onFocus={onOpen} className="relative">
      <Link
        to={to}
        aria-expanded={active}
        aria-haspopup="true"
        className={cn(
          'inline-flex h-10 items-center gap-1.5 rounded-md px-3 text-[0.925rem] font-medium transition-colors',
          textClass,
          'opacity-85 hover:opacity-100',
          active && 'opacity-100',
        )}
      >
        {label}
        <ChevronDown
          className={cn(
            'h-4 w-4 transition-transform duration-200',
            active && 'rotate-180',
          )}
          aria-hidden
        />
      </Link>
    </div>
  )
}

function MegaMenu({
  children,
  reduced,
}: {
  children: React.ReactNode
  reduced: boolean
}) {
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
      transition={{ duration: reduced ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-full border-b border-line-dark bg-bg-primary/95 backdrop-blur-md"
    >
      <Container className="py-8">{children}</Container>
    </motion.div>
  )
}

function ServicesMenu({ onClose }: { onClose: () => void }) {
  return (
    <div>
      <div className="mb-6 flex items-end justify-between gap-6">
        <div>
          <span className="text-eyebrow text-brand">Our Services</span>
          <h3 className="mt-1 text-h3 text-chalk">
            Trained guards and licensed gunmen for your site.
          </h3>
        </div>
        <Link
          to="/services"
          onClick={onClose}
          className="hidden md:inline-flex items-center gap-1.5 text-small text-chalk-soft hover:text-chalk"
        >
          View all services <ChevronDown className="h-4 w-4 -rotate-90" aria-hidden />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {services.map((s) => {
          const Icon = s.icon
          return (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              onClick={onClose}
              className="group flex items-start gap-4 rounded-lg p-4 transition-colors hover:bg-overlay-hover"
            >
              <span className="mt-0.5 grid h-10 w-10 place-items-center rounded-md bg-brand-soft text-brand">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="flex flex-col gap-1">
                <span className="text-[0.95rem] font-semibold text-chalk">
                  {s.title}
                </span>
                <span className="text-small text-chalk-muted">
                  {s.shortDescription}
                </span>
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

function SectorsMenu({ onClose }: { onClose: () => void }) {
  return (
    <div>
      <div className="mb-6 flex items-end justify-between gap-6">
        <div>
          <span className="text-eyebrow text-brand">Industries</span>
          <h3 className="mt-1 text-h3 text-chalk">
            Different environments. One disciplined approach.
          </h3>
        </div>
        <Link
          to="/sectors"
          onClick={onClose}
          className="hidden md:inline-flex items-center gap-1.5 text-small text-chalk-soft hover:text-chalk"
        >
          Explore industries <ChevronDown className="h-4 w-4 -rotate-90" aria-hidden />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-5">
        {sectors.map((s) => (
          <Link
            key={s.slug}
            to={`/sectors/${s.slug}`}
            onClick={onClose}
            className="group flex flex-col gap-1 rounded-lg p-3 transition-colors hover:bg-overlay-hover"
          >
            <span className="text-[0.95rem] font-semibold text-chalk">
              {s.title}
            </span>
            <span className="text-small text-chalk-muted line-clamp-2">
              {s.shortDescription}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
