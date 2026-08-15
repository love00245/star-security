import type { LucideIcon } from 'lucide-react'
import { ShieldCheck, Shield } from 'lucide-react'

export type ServiceProcessStep = {
  title: string
  description: string
}

export type ServiceFAQ = {
  question: string
  answer: string
}

export type Service = {
  slug: string
  title: string
  eyebrow: string
  shortDescription: string
  icon: LucideIcon
  heroImage: string
  heroImageAlt: string
  featured: boolean
  overview: string
  challenges: string[]
  capabilities: string[]
  benefits: { title: string; description: string }[]
  industries: string[]
  process: ServiceProcessStep[]
  faqs: ServiceFAQ[]
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`

export const services: Service[] = [
  {
    slug: 'security-guards',
    title: 'Unarmed Security Guards',
    eyebrow: 'Manpower Deployment',
    shortDescription:
      'Trained, uniformed guards for gates, lobbies, factories, warehouses and societies — day and night shifts with supervisor visits.',
    icon: ShieldCheck,
    heroImage: img('photo-1454165804606-c3d57bc86b40'),
    heroImageAlt: 'Uniformed security guard at a gate',
    featured: true,
    overview:
      'Uniformed, police-verified security guards deployed on 8-hour or 12-hour shifts with reliever cover, supervisor visits, and daily attendance logs. Suitable for corporate offices, factories, warehouses, showrooms, hospitals, schools and residential societies.',
    challenges: [
      'Uncontrolled entry and exit at your gate',
      'No structured visitor or vehicle log',
      'Night-shift attendance and vigilance concerns',
      'Frequent absenteeism and no reliever cover',
    ],
    capabilities: [
      'Gate & visitor management',
      'Vehicle entry checks and parking discipline',
      'Reception / lobby guards',
      'Factory & warehouse perimeter patrolling',
      'Society night-shift vigil',
      'Daily attendance & duty registers',
    ],
    benefits: [
      {
        title: 'Police-verified staff',
        description:
          'Every guard is verified by local police and carries an Aadhaar-linked ID card.',
      },
      {
        title: 'Reliever cover',
        description:
          'Standby guards on our rolls so your post is never left unmanned.',
      },
      {
        title: 'Supervisor visits',
        description:
          'A field supervisor visits each site on a documented weekly rotation.',
      },
    ],
    industries: [
      'corporate',
      'manufacturing',
      'retail',
      'residential',
      'healthcare',
      'education',
      'hospitality',
      'construction',
      'logistics',
    ],
    process: [
      {
        title: 'Enquiry',
        description: 'You share your requirement on call, WhatsApp or the quote form.',
      },
      {
        title: 'Site visit',
        description: 'Our supervisor visits the site to plan posts and shifts.',
      },
      {
        title: 'Deployment plan',
        description:
          'You receive a written quote with headcount, shift pattern and monthly rate.',
      },
      {
        title: 'Guards on duty',
        description:
          'Guards deployed in uniform, with reliever cover and supervisor rounds.',
      },
    ],
    faqs: [
      {
        question: 'Are your guards police-verified?',
        answer:
          'Yes. Every guard undergoes local police verification, Aadhaar check and reference checks before deployment. Documents are on file for audit.',
      },
      {
        question: 'What shift patterns do you offer?',
        answer:
          '8-hour and 12-hour shifts, with reliever cover so posts are never left unmanned. Weekly offs are rotated so the site always has cover.',
      },
      {
        question: 'How quickly can you deploy?',
        answer:
          'Standard deployment is within 48–72 hours after site visit. For urgent requirements we can deploy within 24 hours in Mumbai, Pune and Thane.',
      },
    ],
  },
  {
    slug: 'armed-gunmen',
    title: 'Armed Gunmen',
    eyebrow: 'Licensed Armed Guards',
    shortDescription:
      'Licensed armed gunmen for banks, ATMs, jewellers, cash-in-transit, VIP escorts and high-risk sites — ex-servicemen preferred.',
    icon: Shield,
    heroImage: img('photo-1521737604893-d14cc237f11d'),
    heroImageAlt: 'Armed security personnel on duty',
    featured: true,
    overview:
      'Armed gunmen with valid arms licenses and prior service experience, deployed for banks, jewellery showrooms, cash vans, ATMs, VIP movement and high-risk premises. Every armed deployment is supervised and logged, with strict weapon-handling protocols.',
    challenges: [
      'Cash and valuables handled without armed cover',
      'ATM lobbies and vaults with no visible deterrent',
      'VIP or family movement without trained protection',
      'High-risk sites without escalation-ready personnel',
    ],
    capabilities: [
      'Bank branch & vault armed cover',
      'ATM lobby armed guards',
      'Cash-in-transit / cash-van escort',
      'Jewellery showroom deployment',
      'Personal security (bodyguard) for VIPs and families',
      'High-risk site armed patrolling',
    ],
    benefits: [
      {
        title: 'Licensed weapons',
        description:
          'All arms are legally licensed and inspected; documentation is on file.',
      },
      {
        title: 'Ex-servicemen preferred',
        description:
          'Preference given to retired Army, CRPF and police personnel with weapon-handling discipline.',
      },
      {
        title: 'Supervised deployment',
        description:
          'Every armed guard is on a supervisor’s daily beat with incident reporting.',
      },
    ],
    industries: ['banking', 'retail', 'residential', 'logistics', 'hospitality'],
    process: [
      {
        title: 'Enquiry',
        description: 'Share your site, risk profile and hours of armed cover needed.',
      },
      {
        title: 'Site & risk assessment',
        description: 'Supervisor visits, assesses the risk and confirms feasibility.',
      },
      {
        title: 'Quote & paperwork',
        description:
          'Written quote plus the compliance paperwork for armed deployment.',
      },
      {
        title: 'Deployment',
        description:
          'Armed guard on duty in uniform, with daily log and supervisor rounds.',
      },
    ],
    faqs: [
      {
        question: 'Are your gunmen properly licensed?',
        answer:
          'Yes. Every armed guard carries a valid arms license and government-issued ID. Licenses are verified and copies are maintained by our office.',
      },
      {
        question: 'Do you deploy ex-servicemen?',
        answer:
          'Preference is given to retired Army, CRPF and state police personnel. Their weapon-handling discipline and prior service record make them our first choice for armed deployments.',
      },
      {
        question: 'Can you provide gunmen for cash-in-transit?',
        answer:
          'Yes — cash van and bullion movement is a common deployment. Armed escort is available on hourly, daily or monthly billing depending on the route.',
      },
    ],
  },
]

export function findService(slug: string | undefined) {
  if (!slug) return undefined
  return services.find((s) => s.slug === slug)
}
