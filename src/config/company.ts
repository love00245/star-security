// Single source of truth for brand/company facts.
// To rebrand, change values here — every page reads from this file.
// Values marked `_placeholder: true` are illustrative until real details are supplied.

export const company = {
  name: 'Star Security Agency',
  shortName: 'Star Security',
  legalName: 'Star Security Agency Pvt. Ltd.',
  tagline: 'Trained security guards and licensed armed gunmen for offices, factories, banks, societies and events across India.',
  descriptor: 'Uniformed security guards and licensed armed gunmen',

  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsapp: '+91 98765 43210',
  whatsappHref: 'https://wa.me/919876543210',
  email: 'contact@starsecurity.example',
  emailHref: 'mailto:contact@starsecurity.example',

  address: {
    line1: '4th Floor, Concord House',
    line2: 'Andheri East',
    city: 'Mumbai',
    state: 'Maharashtra',
    postal: '400069',
    country: 'India',
  },

  hours: {
    weekdays: 'Mon – Sat, 9:00 – 19:00 IST',
    operations: '24/7 Operations Support',
  },

  socials: {
    linkedin: 'https://linkedin.com/company/starsecurity',
    twitter: 'https://twitter.com/starsecurity',
  },

  _placeholder: true as const,
} as const

export const currentYear = new Date().getFullYear()

export const fullAddress = [
  company.address.line1,
  company.address.line2,
  `${company.address.city}, ${company.address.state} ${company.address.postal}`,
  company.address.country,
].join(', ')
