import Background from "@/components/landingPage/Background";
import Features from "@/components/landingPage/Features";
import Hero from "@/components/landingPage/Hero";
import Navbar from "@/components/landingPage/Navbar";
import Templates from "@/components/landingPage/Templates";

export default function Home() {
  return (
    <main className="bg-[#090c0b] text-zinc-100 antialiased" >
      <Background />
      <Navbar />
      <Hero />
      <Features />
      <Templates />


    </main>
  );
}
