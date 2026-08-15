import { Award, Building, Compass, ScrollText } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { PageHero } from '../components/shared/PageHero'
import { SEO } from '../components/shared/SEO'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { FeatureCard } from '../components/cards/FeatureCard'
import { CTASection } from '../components/shared/CTASection'
import { coreValues, differentiators } from '../data/values'
import { aboutContent } from '../data/content'
import { useModal } from '../context/ModalContext'
import { company } from '../config/company'

export default function About() {
  const { openModal } = useModal()
  const c = aboutContent

  return (
    <>
      <SEO
        title="About Us"
        description={`${company.name} — a guarding company built on discipline, accountability and trust.`}
      />
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        description={c.hero.description}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'About' },
        ]}
        actions={
          <Button
            variant="primary"
            size="lg"
            onClick={() => openModal('callback', { source: 'about-hero' })}
          >
            {c.hero.ctaLabel}
          </Button>
        }
      />

      {/* Story */}
      <Section tone="dark" size="lg">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-line-dark">
                <img
                  src={c.story.image}
                  alt={c.story.imageAlt}
                  loading="lazy"
                  className="aspect-[5/4] w-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col gap-6">
              <SectionHeading
                eyebrow={c.story.eyebrow}
                title={c.story.title}
              />
              <div className="flex flex-col gap-4 text-body-lg text-chalk-soft text-pretty">
                {c.story.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission / Vision */}
      <Section tone="elevated" size="lg">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-3xl border border-line-dark bg-bg-primary p-8 md:p-10">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                <Compass className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="text-h3">Our Mission</h2>
              <p className="text-body-lg text-chalk-soft text-pretty">
                {c.mission}
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-line-dark bg-bg-primary p-8 md:p-10">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                <Award className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="text-h3">Our Vision</h2>
              <p className="text-body-lg text-chalk-soft text-pretty">
                {c.vision}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section tone="dark" size="lg">
        <Container>
          <SectionHeading
            eyebrow="Core Values"
            title="The principles that guide every deployment."
            align="center"
            size="lg"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((v) => (
              <div
                key={v.title}
                className="flex flex-col gap-2 rounded-2xl border border-line-dark bg-surface-elevated/40 p-6"
              >
                <h3 className="text-h4 text-chalk">{v.title}</h3>
                <p className="text-small text-chalk-soft">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Training + Operations + Compliance */}
      <Section tone="elevated" size="lg">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="How We Operate"
                title="Training, supervision and compliance."
              />
            </div>
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="rounded-2xl border border-line-dark bg-bg-primary p-7">
                <h3 className="text-h4 text-chalk">Personnel training</h3>
                <p className="mt-2 text-body text-chalk-soft text-pretty">
                  {c.training}
                </p>
              </div>
              <div className="rounded-2xl border border-line-dark bg-bg-primary p-7">
                <h3 className="text-h4 text-chalk">Operations & supervision</h3>
                <p className="mt-2 text-body text-chalk-soft text-pretty">
                  {c.operations}
                </p>
              </div>
              <div className="rounded-2xl border border-line-dark bg-bg-primary p-7">
                <h3 className="text-h4 text-chalk">Compliance</h3>
                <p className="mt-2 text-body text-chalk-soft text-pretty">
                  {c.compliance}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.certifications.map((cert) => (
                    <Badge
                      key={cert}
                      tone="dark"
                      icon={<ScrollText className="h-3 w-3" />}
                    >
                      {cert}
                    </Badge>
                  ))}
                </div>
                <p className="mt-3 text-small text-chalk-muted">
                  {c.certificationsNote}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Differentiators */}
      <Section tone="dark" size="lg">
        <Container>
          <SectionHeading
            eyebrow="Why Us"
            title="What we bring to every engagement."
            align="center"
            size="lg"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d) => (
              <FeatureCard
                key={d.title}
                icon={d.icon}
                title={d.title}
                description={d.description}
                tone="dark"
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact card */}
      <Section tone="elevated" size="md">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-line-dark bg-bg-primary p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="flex items-center gap-5">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-soft text-brand">
                <Building className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="text-h3">Ready to talk?</h3>
                <p className="mt-1 text-body text-chalk-soft">
                  Reach our team on {company.phone} or send an enquiry.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                as="link"
                to="/contact"
                variant="primary"
                size="lg"
              >
                Contact Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => openModal('callback', { source: 'about-contact' })}
              >
                Request a Callback
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
