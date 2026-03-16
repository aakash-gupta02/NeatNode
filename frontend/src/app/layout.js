import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UmamiAnalytics from "@/components/analytics/UmamiAnalytics";
import { metadata as siteMetadata, viewport } from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = siteMetadata;
export { viewport };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-emerald-500 selection:text-black`}
      >
        {children}
        <UmamiAnalytics />
      </body>
    </html>
  );
}
