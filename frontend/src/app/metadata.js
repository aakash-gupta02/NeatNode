const siteUrl = "https://neatnode.codes";
export const docsUrl = "https://docs.neatnode.codes"

export const siteConfig = {
  name: "NeatNode",
  title: "NeatNode - Node.js Project Scaffolding CLI",
  description:
    "NeatNode is a plug-and-play CLI that scaffolds clean, production-ready Node.js backends in seconds. Build REST APIs, Socket.io servers, or basic templates instantly - no setup, no hassle.",
  url: siteUrl,
  ogImage: "/og-image.png",
  author: {
    name: "Aakash Gupta",
    github: "https://github.com/aakash-gupta02",
    twitter: "@aakashgupta02",
    portfolio: "https://aakashgupta.dev"
  },
  keywords: [
    "NeatNode",
    "Node.js CLI",
    "backend scaffolding",
    "REST API template",
    "Socket.io boilerplate",
    "Express.js starter",
    "Node.js project generator",
    "TypeScript backend template",
    "JavaScript backend template",
    "MERN backend starter",
    "CLI developer tools"
  ]
};

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: "%s | NeatNode"
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.github }],
  creator: siteConfig.author.name,
  publisher: siteConfig.name,
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "NeatNode - Instant Node.js backend scaffolding"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090c0b",
  colorScheme: "dark"
};
