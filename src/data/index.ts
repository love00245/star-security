// Barrel: single import surface for the whole content layer.
// All site data lives under src/data and src/config — nothing hardcoded in components.
//
// Structured data (drives many pages/components):
//   services.ts       — 2 services (guards + gunmen), drives Services page, ServiceDetail, navbar, footer
//   sectors.ts        — 10 sectors, drives Sectors page, SectorDetail, navbar, footer
//   testimonials.ts   — quotes attributed to the client roster
//   stats.ts          — headline numbers
//   clients.ts        — client logo tiles (10 names)
//   faqs.ts           — shared FAQ pool (general)
//   values.ts         — core values + differentiators used by About + WhyChooseUs
//   navigation.ts     — primary nav config
//
// Page/section content (previously inlined in components):
//   content.ts        — hero, introduction, process, contact & about copy
//                       + client cases + legal effective date
//
// Brand facts (name, phone, email, address, hours, socials):
//   ../config/company.ts

export * from './services'
export * from './sectors'
export * from './testimonials'
export * from './stats'
export * from './clients'
export * from './faqs'
export * from './values'
export * from './navigation'
export * from './content'
