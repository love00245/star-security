import { company } from '../../config/company'

// React 19 hoists <title> and <meta> in components into <head>.
// No react-helmet dependency required.

type SEOProps = {
  title: string
  description: string
  suffix?: boolean
}

export function SEO({ title, description, suffix = true }: SEOProps) {
  const fullTitle = suffix ? `${title} — ${company.name}` : title
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </>
  )
}
