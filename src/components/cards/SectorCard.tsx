import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Sector } from '../../data/sectors'

export function SectorCard({ sector }: { sector: Sector }) {
  return (
    <Link
      to={`/sectors/${sector.slug}`}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-line-dark bg-surface-elevated"
    >
      <img
        src={sector.heroImage}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-500 ease-premium group-hover:scale-[1.04] group-hover:opacity-90"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20"
      />
      <div className="relative p-6 md:p-7">
        <span className="text-eyebrow text-brand mb-3 block">
          {sector.eyebrow}
        </span>
        <h3 className="text-h3 text-white text-balance">{sector.title}</h3>
        <p className="mt-2 text-body text-white/75 line-clamp-2">
          {sector.shortDescription}
        </p>
        <div className="mt-5 inline-flex items-center gap-1.5 text-small font-medium text-white">
          Explore
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </div>
      </div>
    </Link>
  )
}
