// Company values / differentiators — read by About page and WhyChooseUs section.

import type { LucideIcon } from 'lucide-react'
import {
  BadgeCheck,
  ClipboardCheck,
  GraduationCap,
  Radio,
  ShieldCheck,
  Zap,
} from 'lucide-react'

export type ValueItem = {
  title: string
  description: string
  icon: LucideIcon
}

export const differentiators: ValueItem[] = [
  {
    title: 'Trained & verified guards',
    description:
      'Every guard is police-verified and site-briefed before deployment.',
    icon: GraduationCap,
  },
  {
    title: 'Licensed armed gunmen',
    description:
      'Ex-servicemen preferred, with valid arms licenses kept on file.',
    icon: ShieldCheck,
  },
  {
    title: 'Supervisor on every beat',
    description:
      'A field supervisor visits every site on a documented weekly rotation.',
    icon: Radio,
  },
  {
    title: 'Reliever cover guaranteed',
    description:
      'Standby guards on our rolls so weekly offs never leave the post empty.',
    icon: Zap,
  },
  {
    title: 'PSARA-compliant operations',
    description:
      'PSARA license, police verification, ESIC and PF — the paperwork is clean.',
    icon: ClipboardCheck,
  },
  {
    title: 'Transparent monthly billing',
    description:
      'Per guard per shift, with the attendance register attached to every invoice.',
    icon: BadgeCheck,
  },
]

export const coreValues = [
  { title: 'Integrity', description: 'Honest with clients and with our guards.' },
  { title: 'Vigilance', description: 'Awareness that doesn’t drop after midnight.' },
  { title: 'Accountability', description: 'Every duty logged, every incident owned.' },
  { title: 'Professionalism', description: 'Uniformed presence, disciplined conduct.' },
  { title: 'Preparedness', description: 'Trained, briefed and drilled before the shift.' },
]
