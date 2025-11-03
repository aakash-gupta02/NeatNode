import { Github, Menu } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <div
                            className="bg-zinc-100 text-zinc-950 px-2.5 py-1.5 rounded-md font-semibold text-sm tracking-tight">
                            CLI</div>
                        <span className="font-semibold text-base">NeatNode</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Features</a>
                        <a href="#templates"
                            className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Templates</a>
                        <a href="#usage" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Usage</a>
                        <a href="#docs" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Docs</a>
                        <a href="https://github.com"
                            className="inline-flex items-center space-x-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                            <Github size={16} />
                            <span>GitHub</span>
                        </a>
                    </div>
                    <button className="md:hidden text-zinc-400">
                        <Menu size={20} />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar