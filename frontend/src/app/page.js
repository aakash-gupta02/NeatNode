import Background from "@/components/landingPage/Background"
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
    <main className="bg-[#090c0b] text-zinc-100 antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <Templates />
      <Usage />
      <Features />
      <DocsnSetup />
      <CTA />
      <Footer />
    </main>
  )
}
