"use client"
import { Code2, DotSquareIcon, FileCodeCorner, Github, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

const Navbar = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const internalNavItems = [
    { label: "Features", onClick: onNavClick?.featuresRef },
    { label: "Templates", onClick: onNavClick?.templateRef },
    { label: "Usage", onClick: onNavClick?.usageRef }
  ]

  const externalNavItems = [
    { href: "https://neatnodee-docs.vercel.app", label: "Docs", icon: FileCodeCorner },
    { href: "https://github.com/aakash-gupta02/neatnode", label: "GitHub", icon: Github }
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 group">
              <Image
                src="/logo.svg"
                alt="NeatNode Logo"
                width={32}
                height={32}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <span className="font-semibold text-base group-hover:text-emerald-400 transition-colors duration-300">
                NeatNode
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Internal scroll links */}
              {internalNavItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="text-sm text-zinc-400 hover:text-emerald-400 transition-all duration-200 relative group/nav"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover/nav:w-full transition-all duration-300"></span>
                </button>
              ))}

              {/* External links */}
              {externalNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-emerald-400 transition-all duration-200 relative group/nav"
                >
                  {item.icon && <item.icon className="inline mr-2 h-5 w-5 text-emerald-400 "/>}

                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover/nav:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-zinc-400 hover:text-emerald-400 transition-all duration-200 p-2 rounded-lg hover:bg-zinc-800/50"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
          } overflow-hidden bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50`}
        >
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col space-y-4">
              {/* Internal links */}
              {internalNavItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setIsMenuOpen(false)
                    item.onClick?.()
                  }}
                  className="text-base text-zinc-400 hover:text-emerald-400 transition-all duration-300 py-3 border-b border-zinc-800/50 hover:border-emerald-400/30 hover:pl-4 text-left"
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms"
                  }}
                >
                  {item.label}
                </button>
              ))}

              {/* External links */}
              {externalNavItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-zinc-400 hover:text-emerald-400 transition-all duration-300 py-3 border-b border-zinc-800/50 hover:border-emerald-400/30 hover:pl-4"
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms"
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon && <item.icon className="inline mr-2 h-5 w-5 text-emerald-400"/>}
                  {item.label}
                </a>
              ))}

            </div>
          </div>

        </div>
      </nav>

      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar
