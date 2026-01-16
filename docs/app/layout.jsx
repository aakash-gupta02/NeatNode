import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'NeatNode Docs',
  description: 'NeatNode — documentation for the NeatNode library and ecosystem.',
  applicationName: 'NeatNode Docs',
  authors: [{ name: 'NeatNode', url: 'https://github.com/aakash-gupta02/NeatNode' }],
  creator: 'Aakash Gupta',
  publisher: 'NeatNode',
  keywords: [
    'NeatNode',
    'documentation',
    'Node.js',
    'library',
    'API',
    'guide',
    'tutorial'
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://neatnodee.vercel.app'
  },
  openGraph: {
    title: 'NeatNode Docs',
    description: 'Comprehensive documentation for NeatNode — setup, guides, and API reference.',
    url: 'https://neatnodee-docs.vercel.app',
    siteName: 'NeatNode',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NeatNode — Docs'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeatNode Docs',
    description: 'Comprehensive documentation for NeatNode — setup, guides, and API reference.',
    images: ['/og-image.png'],
    site: '@neatnode',
    creator: '@neatnode'
  },
  robots: {
    index: true,
    follow: true,
    nocache: false
  },
  metadataBase: new URL('https://neatnodee-docs.vercel.app')
}

// deployment check commit

const navbar = (
  <Navbar
    logo={
      <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
        <img src="/logo.svg" alt="NeatNode Logo" style={{ width: '40px', height: '40px' }} />
        <span style={{
          fontWeight: 700,
          fontSize: '18px',
          background: 'linear-gradient(135deg, #10b981, #059669)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          NeatNode
        </span>
      </div>
    }
    projectLink="https://github.com/aakash-gupta02/NeatNode"
  />
)

const footer = (
  <Footer>
    MIT {new Date().getFullYear()} © NeatNode. Built with Nextra.
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
        color={{
          hue: 160,        // Emerald green
          saturation: 80,  // Vibrant
          lightness: {
            light: 30,     // Darker emerald for light mode
            dark: 60       // Brighter emerald for dark mode
          }
        }}
      >
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/aakash-gupta02/NeatNode/tree/main/docs"
          footer={footer}
          darkMode={true}

        >
          {children}
        </Layout>
      </body>
    </html>
  )
}