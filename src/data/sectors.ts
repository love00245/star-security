export type Sector = {
  slug: string
  title: string
  eyebrow: string
  shortDescription: string
  heroImage: string
  heroImageAlt: string
  challenges: string[]
  approach: string[]
  relevantServices: string[] // service slugs
  personnelModel: string
  whyUs: string[]
  faqs: { question: string; answer: string }[]
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`

export const sectors: Sector[] = [
  {
    slug: 'corporate',
    title: 'Corporate Offices',
    eyebrow: 'Offices & Campuses',
    shortDescription:
      'Uniformed reception guards, visitor register and lobby vigil for offices, IT parks and multi-tenant buildings.',
    heroImage: img('photo-1486406146926-c627a92ad1ab'),
    heroImageAlt: 'Corporate office lobby',
    challenges: [
      'Uncontrolled visitor entry through the lobby',
      'Contractor and delivery movement without a register',
      'Sensitive floors without any front-desk check',
      'Night and weekend cover with untrained standby',
    ],
    approach: [
      'Reception-grade guards briefed on your office etiquette',
      'Visitor register with ID and in/out time entries',
      'Vendor and contractor entry checks',
      'Weekly supervisor visits with a written report',
    ],
    relevantServices: ['security-guards'],
    personnelModel:
      'Uniformed reception and lobby guards on 12-hour shifts, with a reliever guard on the rolls and a field supervisor doing weekly rounds.',
    whyUs: [
      'Office-friendly grooming and conduct',
      'Written visitor register maintained daily',
      'Reliever cover so posts are never empty',
    ],
    faqs: [
      {
        question: 'Can you provide English-speaking reception guards?',
        answer:
          'Yes — for corporate reception posts we depute guards comfortable in basic English and Hindi, briefed on your office etiquette.',
      },
      {
        question: 'Do you supply a written visitor register?',
        answer:
          'Every corporate deployment includes a printed visitor register. Digital visitor apps are supported if your office already uses one.',
      },
    ],
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    eyebrow: 'Plants & Factories',
    shortDescription:
      'Gate guards, material gate-pass checks and shift-based cover for factories and manufacturing plants.',
    heroImage: img('photo-1565043666747-69f6646db940'),
    heroImageAlt: 'Manufacturing plant gate',
    challenges: [
      'Large gates with unchecked vehicle and material movement',
      'Contractor labour entering without ID',
      'Night-shift lapses on the perimeter',
      'Material pilferage from stores and dispatch',
    ],
    approach: [
      'Gate guards trained on material gate-pass verification',
      'Contractor labour headcount register',
      'Perimeter patrolling during night shifts',
      'Supervisor visits with an incident-log check',
    ],
    relevantServices: ['security-guards', 'armed-gunmen'],
    personnelModel:
      'Two- or three-shift gate teams with a head-guard on each shift, plus a floating supervisor covering multiple plants in the same industrial belt.',
    whyUs: [
      'Comfortable with 24/7 shift patterns',
      'Gate-pass and contractor register discipline',
      'Long track record with SME factories in Maharashtra',
    ],
    faqs: [
      {
        question: 'Can you match our factory’s shift pattern?',
        answer:
          'Yes. We commonly run two 12-hour or three 8-hour shifts, aligned to your production timings, with reliever cover for weekly offs.',
      },
      {
        question: 'Do you check material gate passes?',
        answer:
          'Guards are briefed on your gate-pass format and tally material dispatch against the pass before allowing exit.',
      },
    ],
  },
  {
    slug: 'logistics',
    title: 'Warehousing & Logistics',
    eyebrow: 'Warehouses & Yards',
    shortDescription:
      'Gate cover, loading-bay watch and armed cash-van escort for warehouses and logistics hubs.',
    heroImage: img('photo-1553413077-190dd305871c'),
    heroImageAlt: 'Warehouse loading bay',
    challenges: [
      'Continuous truck movement at loading bays',
      'Driver and helper turnover without any register',
      'Inventory shortage at dispatch',
      'Weekend and night lulls with reduced discipline',
    ],
    approach: [
      'Loading-bay guards checking every in/out',
      'Driver and helper register with time entries',
      'Perimeter patrols after last dispatch',
      'Armed escort for cash and high-value consignments',
    ],
    relevantServices: ['security-guards', 'armed-gunmen'],
    personnelModel:
      'Bay guards through the working day, night patrols after last dispatch, plus armed escort for cash and bullion runs where required.',
    whyUs: [
      'Bay-side discipline through peak hours',
      'Comfortable with 24/7 warehouse cycles',
      'Armed escort for high-value loads',
    ],
    faqs: [
      {
        question: 'Can you provide armed guards on our cash van?',
        answer:
          'Yes. Armed gunmen are available on hourly, per-trip or monthly billing for cash-in-transit and bullion movement.',
      },
      {
        question: 'How do you keep track of drivers and helpers?',
        answer:
          'Every driver and helper entry is logged with ID and time; a daily register is handed to your warehouse in-charge.',
      },
    ],
  },
  {
    slug: 'retail',
    title: 'Retail',
    eyebrow: 'Stores & Showrooms',
    shortDescription:
      'Shop-front guards and armed cover for showrooms, malls and jewellery stores.',
    heroImage: img('photo-1481437156560-3205f6a55735'),
    heroImageAlt: 'Retail store interior',
    challenges: [
      'Shoplifting and shrinkage on the shop floor',
      'Cash handling at billing counters',
      'Opening and closing without any visible cover',
      'Weekend footfall spikes',
    ],
    approach: [
      'Uniformed guards at store entry and exit',
      'Armed cover for jewellery and cash counters',
      'Opening and closing checklist with the store manager',
      'Supervisor visits during peak weekend hours',
    ],
    relevantServices: ['security-guards', 'armed-gunmen'],
    personnelModel:
      'Store-front guards through business hours, plus armed cover for jewellery showrooms and cash handling as required.',
    whyUs: [
      'Retail-appropriate grooming and conduct',
      'Armed gunmen available for jewellery and cash',
      'Weekend supervisor rounds during peak footfall',
    ],
    faqs: [
      {
        question: 'Do you provide armed guards for jewellery showrooms?',
        answer:
          'Yes — licensed armed guards are our standard deployment for jewellery and bullion premises.',
      },
      {
        question: 'Can you cover opening and closing?',
        answer:
          'A guard is present from before opening until after closing, with an opening/closing checklist countersigned by your manager.',
      },
    ],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    eyebrow: 'Hospitals & Clinics',
    shortDescription:
      'Reception, ward-floor and emergency-area guards for hospitals, clinics and diagnostic centres.',
    heroImage: img('photo-1519494026892-80bbd2d6fd0d'),
    heroImageAlt: 'Hospital reception',
    challenges: [
      'High visitor volume with emotional situations',
      'Restricted zones (ICU, pharmacy) needing gentle enforcement',
      '24/7 emergency-area cover',
      'Ambulance and vehicle traffic at the entry',
    ],
    approach: [
      'Guards briefed on hospital etiquette and patient interaction',
      'Restricted-zone entry check',
      'Round-the-clock emergency-area cover',
      'Ambulance flow management at the porch',
    ],
    relevantServices: ['security-guards'],
    personnelModel:
      'Three-shift cover across reception, wards, ICU access and the emergency porch, with a hospital-experienced supervisor visiting through the week.',
    whyUs: [
      'Guards briefed for hospital environments',
      'Comfortable with 24/7 patient-facing duty',
      'Ambulance-flow discipline at the porch',
    ],
    faqs: [
      {
        question: 'Are your guards trained for hospital settings?',
        answer:
          'Every hospital deployment includes a briefing on patient interaction, restricted-zone protocols and emergency escalation.',
      },
      {
        question: 'How do you handle aggressive attendants?',
        answer:
          'Guards are briefed to de-escalate first and involve your medical or admin staff before any physical intervention.',
      },
    ],
  },
  {
    slug: 'hospitality',
    title: 'Hospitality',
    eyebrow: 'Hotels & Banquets',
    shortDescription:
      'Guest-friendly guards, banquet bouncers and back-of-house cover for hotels, banquet halls and resorts.',
    heroImage: img('photo-1566073771259-6a8506099945'),
    heroImageAlt: 'Hotel lobby',
    challenges: [
      'Guest-facing presence without looking heavy',
      'Banquet and wedding events with large crowds',
      'Back-of-house and staff-entry discipline',
      'Vehicle and valet traffic at the porch',
    ],
    approach: [
      'Concierge-appropriate uniformed guards at the entry',
      'Event bouncers for banquets and weddings',
      'Staff-entry register at the back-of-house',
      'Vehicle flow management at the porch',
    ],
    relevantServices: ['security-guards'],
    personnelModel:
      'Reception guards through the day, banquet bouncers per event, and staff-entry cover at the back-of-house on a fixed roster.',
    whyUs: [
      'Guest-friendly grooming and conduct',
      'Event bouncer teams on standby for weddings and banquets',
      'Back-of-house discipline that hoteliers rely on',
    ],
    faqs: [
      {
        question: 'Do you provide bouncers for weddings and banquets?',
        answer:
          'Yes — a per-event team of well-built, uniformed guards is deployed for weddings and banquets on notice.',
      },
      {
        question: 'Are your hotel guards comfortable with guest interaction?',
        answer:
          'Hotel deployments are staffed with guards briefed on grooming, greeting and guest etiquette.',
      },
    ],
  },
  {
    slug: 'banking',
    title: 'Banking & Finance',
    eyebrow: 'Branches & ATMs',
    shortDescription:
      'Armed branch cover, ATM lobby guards and cash-van escort for banks, NBFCs and cooperative societies.',
    heroImage: img('photo-1601597111158-2fceff292cdc'),
    heroImageAlt: 'Bank branch interior',
    challenges: [
      'Cash handling at counters and vaults',
      'ATM lobbies without any visible presence',
      'Opening and closing routines under time pressure',
      'Cash-in-transit routes needing armed cover',
    ],
    approach: [
      'Licensed armed gunmen inside the branch and at the vault',
      'ATM lobby guards through banking hours',
      'Opening and closing checklist with the branch head',
      'Armed cash-van escort on defined routes',
    ],
    relevantServices: ['armed-gunmen', 'security-guards'],
    personnelModel:
      'Licensed armed gunmen inside the branch and cash van, backed by unarmed guards at ATM lobbies and outer counters.',
    whyUs: [
      'Licensed armed guards, ex-servicemen preferred',
      'Comfortable with bank compliance paperwork',
      'Route-planned cash-van escort',
    ],
    faqs: [
      {
        question: 'Do you have valid arms licenses on file?',
        answer:
          'Yes. Every armed guard’s license is on file and copies are shared with the branch during onboarding.',
      },
      {
        question: 'Can you cover both the branch and the ATM lobby?',
        answer:
          'Bundled cover is common — one armed guard inside the branch, one unarmed guard in the ATM lobby, with billing on one invoice.',
      },
    ],
  },
  {
    slug: 'education',
    title: 'Education',
    eyebrow: 'Schools & Campuses',
    shortDescription:
      'Gate guards, campus patrolling and event cover for schools, colleges and coaching institutes.',
    heroImage: img('photo-1523050854058-8df90110c9f1'),
    heroImageAlt: 'School campus entrance',
    challenges: [
      'Student, parent and vendor entry through one gate',
      'Large open campuses with multiple buildings',
      'Examination and event days with visitor spikes',
      'After-hours cover when the campus is empty',
    ],
    approach: [
      'Gate guards trained on child-safety etiquette',
      'Campus patrolling between buildings',
      'Extra deployment for exams and events',
      'Night watch when the campus is closed',
    ],
    relevantServices: ['security-guards'],
    personnelModel:
      'Gate guards through school hours, patrolling guards during class time, and a lean night team when the campus is closed.',
    whyUs: [
      'Guards briefed on child-safety awareness',
      'Comfortable with exam and event surges',
      'Overnight cover with supervisor rounds',
    ],
    faqs: [
      {
        question: 'Are guards briefed for a school environment?',
        answer:
          'Yes. School deployments include a briefing on student and parent interaction, and any specific safeguarding requirement the school has.',
      },
      {
        question: 'Can you support exam and event days?',
        answer:
          'Additional guards are deployed on notice for exams, PTMs, sports days and cultural events.',
      },
    ],
  },
  {
    slug: 'construction',
    title: 'Construction',
    eyebrow: 'Sites & Projects',
    shortDescription:
      'Site guards, material check and labour discipline for construction and infrastructure projects.',
    heroImage: img('photo-1541888946425-d81bb19240f5'),
    heroImageAlt: 'Construction site with perimeter fencing',
    challenges: [
      'Site material and equipment theft',
      'Unauthorised entry through open perimeters',
      'Contractor labour with no ID discipline',
      'Extended after-hours cover',
    ],
    approach: [
      'Site guards on the gate and at material storage',
      'Labour ID and headcount register',
      'Night patrols across the site',
      'Coordination with the site engineer on daily basis',
    ],
    relevantServices: ['security-guards'],
    personnelModel:
      'Gate and material-store guards through the day, plus a night team patrolling the site after work stops.',
    whyUs: [
      'Comfortable with hot, dusty site conditions',
      'Labour headcount discipline every shift',
      'Long history with SME builders and civil contractors',
    ],
    faqs: [
      {
        question: 'Can you handle a large labour force on site?',
        answer:
          'Yes — labour ID check and daily headcount reconciliation are standard for construction deployments.',
      },
      {
        question: 'Do you cover the site at night?',
        answer:
          'Night patrol teams are deployed with torches, whistles and a documented patrol route.',
      },
    ],
  },
  {
    slug: 'residential',
    title: 'Residential Societies',
    eyebrow: 'Housing & Estates',
    shortDescription:
      'Gate cover, visitor register and night vigil for housing societies, gated communities and villa estates.',
    heroImage: img('photo-1568605114967-8130f3a36994'),
    heroImageAlt: 'Residential community entrance',
    challenges: [
      'Uncontrolled visitor and delivery entry',
      'Late-night vigilance on the internal roads',
      'Domestic help entry without any register',
      'Vehicle sticker and parking discipline',
    ],
    approach: [
      'Gate guards with a visitor register and society etiquette',
      'Night patrols on internal roads and parking areas',
      'Domestic-help entry check',
      'Vehicle sticker and parking rule enforcement',
    ],
    relevantServices: ['security-guards'],
    personnelModel:
      'Two-shift gate guards plus a night patrolling guard, with the committee’s point-of-contact supervisor visiting weekly.',
    whyUs: [
      'Respectful conduct with residents and staff',
      'Torch, whistle and register kit on every shift',
      'Weekly supervisor meeting with the committee',
    ],
    faqs: [
      {
        question: 'Can guards use our society app for visitor entries?',
        answer:
          'Yes — where a society app is in place, guards will operate through it in addition to keeping the manual register.',
      },
      {
        question: 'How is the night patrol handled?',
        answer:
          'A dedicated night guard patrols the internal roads with a torch and whistle, on a documented patrol route.',
      },
    ],
  },
]

export function findSector(slug: string | undefined) {
  if (!slug) return undefined
  return sectors.find((s) => s.slug === slug)
}
