import { Helmet } from "react-helmet-async"

type SEOProps = {
  title: string
  description: string
  path?: string
}

const siteUrl = "https://www.sunilkafley.com/"
const socialImageUrl = `${siteUrl}og-image.jpg`
const socialImageAlt =
  "Sunil Kafley — Software Engineering Student and aspiring Full-Stack Developer"

const SEO = ({
  title,
  description,
  path = "/",
}: SEOProps) => {
  const canonicalUrl = new URL(path, siteUrl).toString()

  return (
    <Helmet>

      {/* Primary */}
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:locale" content="en_NZ" />

      <meta property="og:site_name" content="Sunil Kafley" />

      <meta property="og:url" content={canonicalUrl} />

      <meta property="og:title" content={title} />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta property="og:image" content={socialImageUrl} />

      <meta
        property="og:image:secure_url"
        content={socialImageUrl}
      />

      <meta property="og:image:type" content="image/jpeg" />

      <meta property="og:image:width" content="1200" />

      <meta property="og:image:height" content="630" />

      <meta property="og:image:alt" content={socialImageAlt} />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta name="twitter:image" content={socialImageUrl} />

      <meta name="twitter:image:alt" content={socialImageAlt} />

    </Helmet>
  )
}

export default SEO
