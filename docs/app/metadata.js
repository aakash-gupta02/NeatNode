const siteUrl = 'https://docs.neatnode.codes'

export const siteConfig = {
  name: 'NeatNode Docs',
  shortName: 'NeatNode',
  title: 'NeatNode Docs - Official Documentation',
  description:
    'Official NeatNode documentation for installation, quickstart, CLI usage, templates, guides, and full API reference.',
  url: siteUrl,
  ogImage: '/og-image.png',
  author: {
    name: 'Aakash Gupta',
    github: 'https://github.com/aakash-gupta02',
    twitter: '@aakashgupta02'
  },
  keywords: [
    'NeatNode docs',
    'NeatNode',
    'Node.js CLI',
    'backend scaffolding',
    'REST API template',
    'Socket.io template',
    'Express starter',
    'TypeScript backend',
    'JavaScript backend',
    'NeatNode API reference'
  ]
}

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: '%s | NeatNode Docs'
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.github }],
  creator: siteConfig.author.name,
  publisher: 'NeatNode',
  category: 'technology',
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon-16x16.png']
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'NeatNode Docs - Official Documentation'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.author.twitter,
    images: [siteConfig.ogImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' }
  ]
}
