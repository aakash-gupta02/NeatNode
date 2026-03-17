import { Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { metadata, viewport } from './metadata'
import DocsFooter from './_components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap'
})

export { metadata, viewport }

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

const footer = <DocsFooter />

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
      </Head>
      <body className={`${inter.variable} ${jetBrainsMono.variable} antialiased selection:bg-emerald-500 selection:text-black`}>
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