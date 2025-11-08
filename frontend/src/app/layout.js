import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "NeatNode — Node.js Project Scaffolding CLI",
    template: "%s | NeatNode"
  },
  description:
    "NeatNode is a plug-and-play CLI that scaffolds clean, production-ready Node.js backends in seconds. Build REST APIs, Socket.io servers, or basic templates instantly — no setup, no hassle.",
  applicationName: "NeatNode",
  authors: [
    { name: "Aakash Gupta", url: "https://github.com/aakash-gupta02" }
  ],
  creator: "Aakash Gupta",
  publisher: "NeatNode",
  keywords: [
    "NeatNode",
    "Node.js CLI",
    "backend scaffolding",
    "REST API",
    "Socket.io",
    "starter templates",
    "Node boilerplate",
    "MERN",
    "Express.js",
    "project generator"
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://neatnodee.vercel.app"
  },
  openGraph: {
    title: "NeatNode — Instant Node.js Backend Scaffolding CLI",
    description:
      "Generate production-ready Node.js templates instantly. REST API, Socket.io, or basic setups — all with one CLI command.",
    url: "https://neatnodee.vercel.app",
    siteName: "NeatNode",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NeatNode CLI — Build Node.js backends instantly"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "NeatNode — Node.js Project Scaffolding CLI",
    description:
      "Create ready-to-use Node.js templates in seconds using NeatNode CLI.",
    images: ["/og-image.png"],
    site: "@neatnode",
    creator: "@aakashgupta02"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false
  },
  metadataBase: new URL("https://neatnodee.vercel.app")
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
