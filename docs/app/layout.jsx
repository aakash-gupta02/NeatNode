// app/layout.jsx
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'NeatNode Docs',
  description: 'NeatNode Documentation',
}

const navbar = (
  <Navbar
    logo={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
          docsRepositoryBase="https://github.com/aakash-gupta02NeatNode"
          footer={footer}
          darkMode={true}

        >
          {children}
        </Layout>
      </body>
    </html>
  )
}