"use client";
import CTA from "@/components/landingPage/CTA"
import DocsnSetup from "@/components/landingPage/DocsnSetup"
import Features from "@/components/landingPage/Features"
import Footer from "@/components/landingPage/Footer"
import Hero from "@/components/landingPage/Hero"
import Navbar from "@/components/landingPage/Navbar"
import Templates from "@/components/landingPage/Templates"
import Usage from "@/components/landingPage/Usage"
import { useEffect, useRef } from "react"

export default function Home() {

  const FeaturesRef = useRef(null);
  const TemplateRef = useRef(null);
  const UsageRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-[#090c0b] text-zinc-100 antialiased overflow-x-hidden">
      <Navbar
        onNavClick={{
          templateRef: () => scrollTo(TemplateRef),
          usageRef: () => scrollTo(UsageRef),
          featuresRef: () => scrollTo(FeaturesRef),
        }}

      />
      <Hero />
      <div ref={TemplateRef}>
        <Templates />
      </div>

      <div ref={UsageRef}>
        <Usage />
      </div>

      <div ref={FeaturesRef}>
        <Features />
      </div>

      <DocsnSetup />
      <CTA />
      <Footer />
    </main>
  )
}
