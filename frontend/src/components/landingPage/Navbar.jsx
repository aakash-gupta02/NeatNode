"use client"
import { FileCodeCorner, Github, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

const Navbar = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const internalNavItems = [
    { label: "Features", onClick: onNavClick?.featuresRef },
    { label: "Templates", onClick: onNavClick?.templateRef },
    { label: "Usage", onClick: onNavClick?.usageRef },
  ]

  const externalNavItems = [
    { href: "https://docs.neatnode.codes", label: "Docs", icon: FileCodeCorner },
    { href: "https://github.com/aakash-gupta02/neatnode", label: "GitHub", icon: Github },
  ]

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            
            {/* 1. Left: Logo Section */}
            <Link href="/" className="group flex items-center shrink-0">
              <div className="flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-emerald-400">
                NeatNode
              </span>
            </Link>

            {/* 2. Middle: Center Links Capsule */}
            <div className="hidden lg:flex items-center gap-1 rounded-full border border-white/5 bg-zinc-900/40 p-1.5 backdrop-blur-md shadow-2xl">
              {internalNavItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="rounded-full px-5 py-2 text-[13px] font-medium text-zinc-400 transition-all hover:bg-white/5 hover:text-emerald-300"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* 3. Right: Buttons with Icon + Label */}
            <div className="hidden md:flex items-center gap-4 shrink-0">
              {externalNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  className="group flex items-center gap-2 rounded-full border border-white/5 bg-zinc-900/40 px-4 py-2 transition-all hover:border-emerald-500/40 hover:bg-emerald-500/10"
                >
                  <item.icon 
                    size={16} 
                    className="text-zinc-400 transition-colors group-hover:text-emerald-400" 
                  />
                  <span className="text-[13px] font-medium text-zinc-400 transition-colors group-hover:text-white">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900/60 text-white" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Same as before) */}
        <div className={`absolute top-24 left-4 right-4 md:hidden transition-all duration-300 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
          <div className="rounded-3xl border border-white/10 bg-zinc-950/95 p-4 backdrop-blur-2xl shadow-2xl">
            <div className="flex flex-col gap-2">
              {internalNavItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => { setIsMenuOpen(false); item.onClick?.(); }}
                  className="w-full rounded-xl px-4 py-3 text-left text-zinc-400 hover:bg-emerald-500/10 hover:text-emerald-400 transition-all"
                >
                  {item.label}
                </button>
              ))}
              <div className="h-px bg-white/5 my-2" />
              <div className="grid grid-cols-2 gap-2">
                {externalNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    className="flex items-center justify-center gap-2 rounded-xl bg-white/5 py-3 text-sm text-zinc-400 hover:bg-white/10 hover:text-white transition-all"
                  >
                    <item.icon size={16} />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden" onClick={() => setIsMenuOpen(false)} />
      )}
    </>
  )
}

export default Navbar