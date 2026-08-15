import { SEO } from '../components/shared/SEO'
import { TrustStrip } from '../components/shared/TrustStrip'
import { CTASection } from '../components/shared/CTASection'
import { Hero } from '../sections/home/Hero'
import { Introduction } from '../sections/home/Introduction'
import { Services } from '../sections/home/Services'
import { Sectors } from '../sections/home/Sectors'
import { WhyChooseUs } from '../sections/home/WhyChooseUs'
import { Process } from '../sections/home/Process'
import { Clients } from '../sections/home/Clients'
import { Testimonials } from '../sections/home/Testimonials'

export default function Home() {
  return (
    <>
      <SEO
        title="Security Guards & Armed Gunmen"
        description="Trained, uniformed security guards and licensed armed gunmen deployed across offices, factories, banks, societies and events in India."
        suffix
      />
      <Hero />
      <TrustStrip />
      <Introduction />
      <Services />
      <Sectors />
      <WhyChooseUs />
      <Process />
      <Clients />
      <Testimonials />
      <CTASection />
    </>
  )
}
