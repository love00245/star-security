import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { SEO } from '../components/shared/SEO'
import { ShieldAlert } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you were looking for could not be found."
      />
      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-bg-primary pt-28 pb-20 text-chalk">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(18,47,130,0.16),transparent_60%)]"
        />
        <Container className="relative">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand">
              <ShieldAlert className="h-6 w-6" aria-hidden />
            </span>
            <span className="text-eyebrow text-brand">404</span>
            <h1 className="text-display text-balance">
              This page couldn’t be found.
            </h1>
            <p className="text-body-lg text-chalk-soft text-pretty">
              The link may be broken or the page may have moved. Return home or
              get in touch with our team.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button as="link" to="/" variant="primary" size="lg">
                Return Home
              </Button>
              <Button as="link" to="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
