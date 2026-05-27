import { Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { metadata, viewport } from "./metadata";
import DocsFooter from "./_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export { metadata, viewport };

const footer = <DocsFooter />;

export default async function RootLayout({ children }) {
  let stars = 0;
  try {
    const res = await fetch(
      "https://api.github.com/repos/aakash-gupta02/NeatNode",
      {
        next: { revalidate: 3600 },
      },
    );
    const repo = await res.json();
    stars = repo.stargazers_count || 0;
  } catch (error) {
    console.error("Error fetching GitHub stars:", error);
  }

  const navbar = (
    <Navbar
      logo={
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <img
            src="/logo.svg"
            alt="NeatNode Logo"
            style={{ width: "40px", height: "40px" }}
          />
          <span
            style={{
              fontWeight: 700,
              fontSize: "18px",
              background: "linear-gradient(135deg, #10b981, #059669)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            NeatNode
          </span>
        </div>
      }
      projectLink="https://github.com/aakash-gupta02/NeatNode"
    >
      <div
        title={`${stars} stargazers on GitHub`}
        style={{ display: "flex", alignItems: "center", gap: "6px" }}
        className="nx-flex nx-items-center nx-gap-1 nx-rounded-full nx-bg-neutral-100 nx-px-2 nx-py-1 nx-text-xs nx-font-medium nx-text-neutral-600 dark:nx-bg-neutral-800 dark:nx-text-neutral-400 nx-ml-2 hover:nx-text-neutral-900 dark:hover:nx-text-neutral-50 transition-colors"
      >
        <svg fill="currentColor" viewBox="0 0 24 24" width="14" height="14">
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
        </svg>
        <span>{stars}</span>
      </div>
    </Navbar>
  );

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
        color={{
          hue: 160, // Emerald green
          saturation: 80, // Vibrant
          lightness: {
            light: 30, // Darker emerald for light mode
            dark: 60, // Brighter emerald for dark mode
          },
        }}
      ></Head>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} antialiased selection:bg-emerald-500 selection:text-black`}
      >
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
  );
}
