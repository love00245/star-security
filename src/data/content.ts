// Single source of truth for all site content that isn't already in
// dedicated data files (services.ts, sectors.ts, testimonials.ts,
// stats.ts, clients.ts, faqs.ts, values.ts).
//
// Section components stay presentational — copy, images and lists live here.

import type { LucideIcon } from 'lucide-react'
import {
  BadgeCheck,
  ClipboardCheck,
  ClipboardList,
  Clock3,
  ShieldCheck,
  UserCheck,
  Users,
  Zap,
} from 'lucide-react'

// ─── Home: Hero ────────────────────────────────────────────────────────
export const heroContent = {
  eyebrow: 'Security Guards & Armed Gunmen',
  headline: {
    prefix: 'Trained ',
    highlight: 'security guards',
    suffix: ', deployed with discipline.',
  },
  body: 'A small, hands-on security agency based in Mumbai. We deploy uniformed, police-verified guards and licensed armed gunmen for offices, factories, banks, societies and events across Maharashtra.',
  primaryCta: 'Get a Quote',
  secondaryCta: 'View Services',
  image:
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80',
  imageAlt: 'Uniformed security guard on duty at a corporate gate',
  panelStats: [
    { value: '12+', label: 'Years' },
    { value: '400+', label: 'Guards' },
    { value: '60+', label: 'Sites' },
  ],
  panelLabel: 'On-ground supervisor active',
  panelSub: 'Weekly rounds & incident logs',
}

// ─── Global: trust indicators ──────────────────────────────────────────
export const trustIndicators: { icon: LucideIcon; label: string }[] = [
  { icon: BadgeCheck, label: 'PSARA-compliant' },
  { icon: UserCheck, label: 'Police-verified staff' },
  { icon: Clock3, label: '24/7 supervisor reach' },
  { icon: ShieldCheck, label: 'Uniformed & disciplined' },
]

// ─── Home: Introduction ───────────────────────────────────────────────
export const introductionContent = {
  eyebrow: 'Guarding, done properly',
  title: 'A guard at your gate is easy. Running the operation is the hard part.',
  description:
    'We look after the operation — screening, uniforms, shift discipline, reliever cover, supervisor visits and paperwork — so the guard on your site actually shows up, in uniform, on time, every day.',
  pillars: [
    { icon: Users, label: 'Trained guards' },
    { icon: UserCheck, label: 'Police-verified' },
    { icon: ClipboardCheck, label: 'Supervisor visits' },
    { icon: ShieldCheck, label: 'Uniformed presence' },
    { icon: ClipboardList, label: 'Attendance & incident register' },
    { icon: Zap, label: 'Reliever cover' },
  ] as { icon: LucideIcon; label: string }[],
  image:
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
  imageAlt: 'Security guards being briefed by a supervisor',
}

// ─── Home: Services section header ────────────────────────────────────
export const servicesSectionContent = {
  eyebrow: 'Our Services',
  title: 'Two services. Done properly.',
  description:
    'We stay focused on manpower — trained uniformed guards and licensed armed gunmen. No sub-contracting, no surprises.',
  viewAllLabel: 'View services',
}

// ─── Home: Sectors section header ─────────────────────────────────────
export const sectorsSectionContent = {
  eyebrow: 'Where We Deploy',
  title: 'Offices, factories, banks, societies and more.',
  description:
    'Different sites, different shift patterns — same discipline. Here are the environments we deploy across most often.',
  exploreLabel: 'Explore industries',
}

// ─── Home: Why Choose Us section header ───────────────────────────────
export const whyChooseUsContent = {
  eyebrow: 'Why Us',
  title: 'The small things that make guarding actually work.',
  description:
    'What sets us apart isn’t a slogan — it’s the boring, daily discipline that keeps your post manned and your paperwork clean.',
}

// ─── Home: Process (How It Works) ─────────────────────────────────────
export const processContent = {
  eyebrow: 'How It Works',
  title: 'From enquiry to guards on duty in a week.',
  description:
    'Four simple steps. We keep it plain — no long assessments, just a site visit and a written quote.',
  ctaLabel: 'Get a Quote',
  steps: [
    {
      n: '01',
      title: 'Enquiry',
      body: 'Call, WhatsApp or the quote form — tell us the site and the requirement.',
    },
    {
      n: '02',
      title: 'Site visit',
      body: 'Our supervisor visits, walks the site and understands your shifts.',
    },
    {
      n: '03',
      title: 'Deployment plan',
      body: 'You receive a written quote with headcount, shifts and monthly rate.',
    },
    {
      n: '04',
      title: 'Guards on duty',
      body: 'Guards in uniform, on time, with reliever cover and supervisor rounds.',
    },
  ],
}

// ─── Home: Clients strip section ──────────────────────────────────────
export const clientsSectionContent = {
  eyebrow: 'Clients',
  title: 'A cross-section of the sites we cover.',
  description:
    'From banks and factories to societies and hotels — a snapshot of the client sectors we serve.',
}

// ─── Home: Testimonials section header ────────────────────────────────
export const testimonialsSectionContent = {
  eyebrow: 'What Clients Say',
  title: 'A few words from the sites we cover.',
  description:
    'Short, honest feedback from the people who see our guards every day.',
}

// ─── Home: Final CTA ──────────────────────────────────────────────────
export const finalCtaContent = {
  heading: 'Need guards on your site next week?',
  description:
    'Tell us where the site is and what you need — guards or gunmen, day or night. We’ll visit, understand and share a quote within one business day.',
  primaryLabel: 'Get a Quote',
  secondaryLabel: 'Call Us',
}

// ─── Clients page: selected engagements ───────────────────────────────
export type EngagementCase = {
  sector: string
  slug: string
  title: string
  summary: string
}

export const clientCases: EngagementCase[] = [
  {
    sector: 'Banking',
    slug: 'banking',
    title: 'Northgate Financial — armed cash-desk cover across three branches.',
    summary:
      'Licensed armed gunmen at three branches, plus an unarmed guard in each ATM lobby. One bundled monthly invoice with all compliance paperwork.',
  },
  {
    sector: 'Manufacturing',
    slug: 'manufacturing',
    title: 'Meridian Manufacturing — gate & shift discipline for a Pune plant.',
    summary:
      'Two-shift gate teams, material gate-pass verification and a contractor labour register. Zero unmanned hours across 14 months of deployment.',
  },
  {
    sector: 'Warehousing',
    slug: 'logistics',
    title: 'Blueline Logistics — 24/7 armed cover across Bhiwandi warehouses.',
    summary:
      'Bay-side guards through the working day, night patrols after last dispatch, and armed escort for the cash van on defined routes.',
  },
]

// ─── About page: hero + story + placeholder certifications ───────────
export const aboutContent = {
  hero: {
    eyebrow: 'About Us',
    title: 'A small guarding agency, hands-on with every site.',
    description:
      'We deploy trained security guards and licensed armed gunmen across offices, factories, banks, societies and events. Small enough that a supervisor knows every site — big enough to cover reliever, paperwork and compliance without fuss.',
    ctaLabel: 'Talk to Our Team',
  },
  story: {
    eyebrow: 'Our Story',
    title: 'Started with a handful of guards in Mumbai. Grown by word of mouth.',
    paragraphs: [
      'We began years ago with a handful of guards at one gate in Andheri. The idea was simple — the guard should show up in uniform, on time, every day, and someone should actually visit the site to check.',
      'Most of what people call "corporate security" is over-engineered for a small business. We stay focused: guards and gunmen, with the paperwork, uniforms, reliever cover and supervisor visits that make the deployment actually reliable.',
      'Today we cover about 60 sites across Maharashtra — factories, offices, bank branches, jewellery showrooms, warehouses and residential societies. Most of our growth has come from clients recommending us. That’s the yardstick we care about.',
    ],
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Security guards being briefed at the start of a shift',
  },
  mission:
    'To deploy trained security guards and licensed armed gunmen with discipline, reliever cover and honest supervision — so the guard on your site is actually the guard you were promised.',
  vision:
    'To be the small-but-serious guarding agency our clients keep for years, measured by how many of them recommend us and how few of them ever have to chase us.',
  training:
    'Every guard is police-verified before joining and briefed on your specific site — gate protocol, visitor register, uniform standards and escalation. Refresher briefings happen on the supervisor’s weekly visit.',
  operations:
    'A field supervisor covers every site on a weekly rotation. Attendance is logged daily, reliever cover is on our rolls, and any incident is reported to your point of contact the same day.',
  compliance:
    'We operate under the Private Security Agencies Regulation Act (PSARA) and are ESIC, PF and GST registered. All armed guards carry valid arms licenses that are on file with our office.',
  certifications: [
    'PSARA License — Maharashtra',
    'ESIC & PF registered',
    'GST registered',
  ],
  certificationsNote:
    'License numbers and copies are shared with clients during onboarding. Replace these placeholder labels with your actual registration numbers before publication.',
}

// ─── Sectors page hero content ────────────────────────────────────────
export const sectorsPageContent = {
  eyebrow: 'Industries',
  title: 'The environments we deploy guards across.',
  description:
    'Every sector runs on a different shift and expects different conduct from the guard on duty. Here’s how we adapt.',
  ctaLabel: 'Get a Quote',
}

// ─── Services page hero content ───────────────────────────────────────
export const servicesPageContent = {
  eyebrow: 'Security Services',
  title: 'Two services. Done properly.',
  description:
    'Uniformed security guards and licensed armed gunmen — deployed with reliever cover, supervisor visits and clean paperwork.',
  primaryLabel: 'Get a Quote',
  secondaryLabel: 'Call Us',
}

// ─── Contact page copy ────────────────────────────────────────────────
export const contactPageContent = {
  hero: {
    eyebrow: 'Contact',
    title: 'Let’s talk about your site.',
    description:
      'Share your requirement on the form or call us directly. Our team responds within one business day.',
  },
  aside: {
    eyebrow: 'Reach us directly',
    title: 'Talk to our team.',
    description:
      'Our operations team is available round the clock for site emergencies. For enquiries, we respond within one business day.',
  },
  mapPlaceholderLabel: 'Map placeholder',
}

// ─── Legal effective date (shared across Privacy + Terms) ─────────────
export const legalEffectiveDate = '1 January 2026'
