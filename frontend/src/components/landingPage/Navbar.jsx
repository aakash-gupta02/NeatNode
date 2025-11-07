"use client";
import { Github, Menu, X } from 'lucide-react'
import Link from 'next/link';
import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { href: "features", label: "Features" },
        { href: "templates", label: "Templates" },
        { href: "usage", label: "Usage" },
        { href: "https://neatnodee-docs.vercel.app", label: "Docs" },
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-2 group">
                            <div className="bg-zinc-100 text-zinc-950 px-2.5 py-1.5 rounded-md font-semibold text-sm tracking-tight group-hover:bg-emerald-400 transition-colors duration-300">
                                CLI
                            </div>
                            <span className="font-semibold text-base group-hover:text-emerald-400 transition-colors duration-300">
                                NeatNode
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-all duration-200 relative group/nav"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover/nav:w-full transition-all duration-300"></span>
                                </Link>
                            ))}
                            <Link
                                href="https://github.com/aakash-gupta02/neatnode"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 text-sm text-zinc-400 hover:text-emerald-400 transition-all duration-200 border border-zinc-700 hover:border-emerald-400/50 px-3 py-1.5 rounded-lg hover:bg-emerald-400/5"
                            >
                                <Github size={16} />
                                <span>GitHub</span>
                            </Link>
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
                <div className={`md:hidden transition-all duration-500 ease-in-out ${
                    isMenuOpen 
                        ? 'max-h-96 opacity-100 translate-y-0' 
                        : 'max-h-0 opacity-0 -translate-y-4'
                } overflow-hidden bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50`}>
                    <div className="px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item, index) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-base text-zinc-400 hover:text-emerald-400 transition-all duration-300 py-3 border-b border-zinc-800/50 hover:border-emerald-400/30 hover:pl-4"
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{
                                        transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
                                    }}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href="https://github.com/aakash/nodeneat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-3 text-base text-zinc-400 hover:text-emerald-400 transition-all duration-300 py-3 mt-4 border border-zinc-700 hover:border-emerald-400/50 rounded-lg px-4 justify-center hover:bg-emerald-400/5"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Github size={18} />
                                <span>Star on GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Overlay for mobile menu */}
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