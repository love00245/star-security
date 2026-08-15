import {
  useCallback,
  useEffect,
  useId,
  useRef,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '../../lib/cn'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useReducedMotion } from '../../hooks/useReducedMotion'

type ModalProps = {
  open: boolean
  onClose: () => void
  title: string
  description?: string
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

const sizeMap = {
  sm: 'md:max-w-md',
  md: 'md:max-w-lg',
  lg: 'md:max-w-2xl',
} as const

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function Modal({
  open,
  onClose,
  title,
  description,
  size = 'md',
  children,
}: ModalProps) {
  const titleId = useId()
  const descId = useId()
  const panelRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const reduced = useReducedMotion()

  useLockBodyScroll(open)

  // Remember & restore focus
  useEffect(() => {
    if (open) {
      triggerRef.current = document.activeElement as HTMLElement
    } else if (triggerRef.current) {
      triggerRef.current.focus?.()
      triggerRef.current = null
    }
  }, [open])

  // ESC + focus trap
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onClose()
        return
      }
      if (e.key === 'Tab' && panelRef.current) {
        const nodes = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
        if (nodes.length === 0) {
          e.preventDefault()
          return
        }
        const first = nodes[0]
        const last = nodes[nodes.length - 1]
        const active = document.activeElement as HTMLElement | null
        if (e.shiftKey && active === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && active === last) {
          e.preventDefault()
          first.focus()
        }
      }
    },
    [onClose],
  )

  // Autofocus first focusable when opening
  useEffect(() => {
    if (!open || !panelRef.current) return
    const first = panelRef.current.querySelector<HTMLElement>(FOCUSABLE)
    first?.focus?.()
  }, [open])

  return createPortal(
    <AnimatePresence>
      {open && (
        <div
          role="presentation"
          className="fixed inset-0 z-[100] flex items-end justify-center md:items-center"
          onKeyDown={handleKeyDown}
        >
          <motion.button
            type="button"
            aria-label="Close dialog"
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={description ? descId : undefined}
            initial={
              reduced
                ? false
                : isDesktop
                  ? { opacity: 0, scale: 0.97, y: 8 }
                  : { y: '100%' }
            }
            animate={isDesktop ? { opacity: 1, scale: 1, y: 0 } : { y: 0 }}
            exit={
              reduced
                ? { opacity: 0 }
                : isDesktop
                  ? { opacity: 0, scale: 0.98, y: 8 }
                  : { y: '100%' }
            }
            transition={{ duration: reduced ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'relative w-full max-h-[92vh] overflow-y-auto bg-bg-primary text-chalk shadow-modal',
              'md:h-auto md:w-[92vw] md:rounded-2xl md:border md:border-line-darkStrong',
              'rounded-t-2xl border-t border-line-darkStrong',
              sizeMap[size],
            )}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-6 border-b border-line-dark bg-bg-primary/95 px-6 py-5 backdrop-blur md:px-8">
              <div className="flex-1">
                <h2 id={titleId} className="text-h3">
                  {title}
                </h2>
                {description && (
                  <p id={descId} className="mt-2 text-body text-chalk-soft">
                    {description}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-chalk-soft transition-colors hover:bg-overlay-active hover:text-chalk focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <div className="px-6 py-6 md:px-8 md:py-8">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
