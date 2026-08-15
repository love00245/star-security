export type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
}

// Attributed to the client-roster names in src/data/clients.ts.
// Placeholder quotes — swap for real, attributed feedback before publication.
export const testimonials: Testimonial[] = [
  {
    quote:
      'The armed guards at our branches turn up on time, in uniform, every single day. The paperwork is in order — that alone is a change from our last vendor.',
    name: 'Branch Operations Head',
    role: 'Operations',
    company: 'Northgate Financial',
  },
  {
    quote:
      'The gate has been settled for over a year now. Shift handovers happen properly and the supervisor visit is not just a formality.',
    name: 'Plant Manager',
    role: 'Manufacturing',
    company: 'Meridian Manufacturing',
  },
  {
    quote:
      'Night vigil is what we actually pay for, and that is where their guards are strongest. Residents have stopped complaining about the gate after 10 PM.',
    name: 'Estate Committee Secretary',
    role: 'Housing Committee',
    company: 'Ashford Estates',
  },
  {
    quote:
      'For our banquet events we book their bouncers a week in advance. Well-built, well-mannered, no drama with guests.',
    name: 'General Manager — Operations',
    role: 'Hospitality',
    company: 'Halcyon Hospitality',
  },
]
