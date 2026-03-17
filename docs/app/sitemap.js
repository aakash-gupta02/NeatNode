import { siteConfig } from './metadata'

const routes = [
  '',
  '/getting-started',
  '/getting-started/installation',
  '/getting-started/quickstart',
  '/getting-started/cli-usage',
  '/guides',
  '/guides/folder-structure',
  '/guides/customization',
  '/guides/contributing',
  '/templates',
  '/templates/javascript',
  '/templates/javascript/basic',
  '/templates/javascript/rest-api',
  '/templates/javascript/rest-api/endpoints',
  '/templates/javascript/rest-api/middleware',
  '/templates/javascript/rest-api/error-handling',
  '/templates/javascript/socket',
  '/templates/javascript/socket/events',
  '/templates/typescript',
  '/templates/typescript/basic',
  '/templates/typescript/rest-api',
  '/api-reference',
  '/api-reference/commands',
  '/api-reference/config',
  '/api-reference/options',
  '/faqs',
  '/_changelog'
]

export default function sitemap() {
  const now = new Date()

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7
  }))
}
