import type { LucideIcon } from 'lucide-react'

export function FeatureCard({
  icon: Icon,
  title,
  description,
  tone: _tone,
}: {
  icon: LucideIcon
  title: string
  description: string
  /** Legacy — ignored. Theme-aware now. */
  tone?: 'dark' | 'light'
}) {
  void _tone
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-line-dark bg-bg-secondary p-6 md:p-7 transition-colors duration-300 hover:bg-surface-elevated">
      <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="text-h4 text-chalk">{title}</h3>
      <p className="text-body text-chalk-soft text-pretty">{description}</p>
    </div>
  )
}
