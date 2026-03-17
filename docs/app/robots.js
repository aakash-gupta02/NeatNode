import { siteConfig } from './metadata'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/']
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url
  }
}
