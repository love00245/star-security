import { useId, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { cn } from '../../lib/cn'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export type AccordionItem = {
  id: string
  question: ReactNode
  answer: ReactNode
}

type AccordionProps = {
  items: AccordionItem[]
  allowMultiple?: boolean
  /** Legacy — ignored. Theme-aware now. */
  tone?: 'dark' | 'light'
  className?: string
}

export function Accordion({
  items,
  allowMultiple = false,
  className,
}: AccordionProps) {
  const [open, setOpen] = useState<string[]>([])
  const groupId = useId()
  const reduced = useReducedMotion()

  const toggle = (id: string) => {
    setOpen((prev) => {
      const isOpen = prev.includes(id)
      if (allowMultiple) {
        return isOpen ? prev.filter((x) => x !== id) : [...prev, id]
      }
      return isOpen ? [] : [id]
    })
  }

  return (
    <div
      className={cn(
        'rounded-2xl border border-line-dark bg-bg-secondary overflow-hidden',
        className,
      )}
    >
      {items.map((item, i) => {
        const isOpen = open.includes(item.id)
        const panelId = `${groupId}-${item.id}-panel`
        const buttonId = `${groupId}-${item.id}-button`
        return (
          <div
            key={item.id}
            className={cn(i > 0 && 'border-t border-line-dark')}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left text-h4 text-chalk transition-colors hover:bg-overlay-hover md:px-7 md:py-6"
              >
                <span className="text-pretty">{item.question}</span>
                <span
                  className={cn(
                    'grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line-darkStrong text-chalk transition-transform duration-300',
                    isOpen && 'rotate-45',
                  )}
                >
                  <Plus className="h-4 w-4" aria-hidden />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: reduced ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-6 md:px-7 text-body-lg text-chalk-soft">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
