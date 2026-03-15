import CTA from "@/components/landingPage/CTA"
import DocsnSetup from "@/components/landingPage/DocsnSetup"
import Features from "@/components/landingPage/Features"
import Footer from "@/components/landingPage/Footer"
import Hero from "@/components/landingPage/Hero"
import Navbar from "@/components/landingPage/Navbar"
import Templates from "@/components/landingPage/Templates"
import Usage from "@/components/landingPage/Usage"

export default function Home() {
  return (
    <main className="bg-zinc-950 text-zinc-100 antialiased overflow-x-hidden">
      <Navbar />

      <Hero />
      
      <div id="templates">
        <Templates />
      </div>

      <div id="usage">
        <Usage />
      </div>

      <div id="features">
        <Features />
      </div>

      <DocsnSetup />
      <CTA />
      <Footer />
    </main>
  )
}
