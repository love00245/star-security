import type { Stat } from '../../data/stats'

export function StatCard({
  stat,
  tone: _tone,
}: {
  stat: Stat
  /** Legacy — ignored. Theme-aware now. */
  tone?: 'dark' | 'light'
}) {
  void _tone
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-line-dark bg-bg-secondary p-6 md:p-7">
      <span className="text-h2 text-chalk tabular-nums">{stat.value}</span>
      <span className="text-body font-semibold text-chalk">{stat.label}</span>
      {stat.sub && (
        <span className="text-small text-chalk-muted">{stat.sub}</span>
      )}
    </div>
  )
}
