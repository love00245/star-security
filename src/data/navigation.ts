import { services } from './services'
import { sectors } from './sectors'

export const primaryNav = [
  { label: 'Services', to: '/services', hasMenu: true, kind: 'services' as const },
  { label: 'Industries', to: '/sectors', hasMenu: true, kind: 'sectors' as const },
  { label: 'About', to: '/about', hasMenu: false },
  { label: 'Clients', to: '/clients', hasMenu: false },
  { label: 'Contact', to: '/contact', hasMenu: false },
]

export const serviceNavItems = services.map((s) => ({
  label: s.title,
  to: `/services/${s.slug}`,
  description: s.shortDescription,
  icon: s.icon,
}))

export const sectorNavItems = sectors.map((s) => ({
  label: s.title,
  to: `/sectors/${s.slug}`,
  description: s.shortDescription,
}))
