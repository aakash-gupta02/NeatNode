import { ArrowRight, Github, Sparkles } from 'lucide-react'
import React from 'react'
import Background from './Background'

const Hero = () => {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden isolate ">

            <Background />

            <div className="max-w-5xl mx-auto text-center">


                <div
                    className="inline-flex items-center space-x-2 bg-[#01FF99]/10 border border-[#00FF99]/20 rounded-full px-4 py-1.5 mb-8">
                    <span className="relative flex h-2 w-2">
                        <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-sm text-[#ffffff]">v2.0.0 now available</span>
                </div>


                <h1
                    className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 bg-linear-to-b from-emerald-100 to-emerald-400 bg-clip-text text-transparent">
                    Build Backend project<br />templates instantly.
                </h1>

                <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto mb-12 leading-relaxed">
                    A CLI tool that generates ready-to-use Node.js + frontend starter templates — so you can start building
                    instead of setting up.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#usage"
                        className="inline-flex items-center space-x-2 bg-zinc-100 text-zinc-950 px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-all hover:scale-105">
                        <span>Get Started</span>
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/aakash-gupta02/NeatNode"
                        className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 text-zinc-100 px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 hover:border-zinc-700 transition-all">
                        <Github className="w-5 h-5" />
                        <span>View on GitHub</span>
                    </a>
                </div>

                {/* Terminal Preview */}
                <div className="mt-16 max-w-3xl mx-auto">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
                        <div className="flex items-center space-x-2 px-4 py-3 border-b border-zinc-800">
                            <div className="flex space-x-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-xs text-zinc-500 ml-2">terminal</span>
                        </div>
                        <div className="p-6 font-mono text-sm">
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-emerald-400">$</span>
                                <span className="text-zinc-300">npx neatnode my-app</span>
                            </div>
                            <div className="space-y-1 ml-4 text-zinc-500">
                                <div className="flex items-center space-x-2">
                                    <span className="text-emerald-400">✔</span>
                                    <span>Select a template: <span className="text-zinc-300">REST API</span></span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-emerald-400">✔</span>
                                    <span>Enter project name: <span className="text-zinc-300">my-app</span></span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-emerald-400">✔</span>
                                    <span>Location to save: <span className="text-zinc-300">./projects</span></span>
                                </div>
                                <div className="mt-3 flex items-center space-x-2 text-emerald-400">
                                    <span>✅</span>
                                    <span>Template generated successfully!</span>
                                </div>
                                <div className="mt-2 text-zinc-400">
                                    cd my-app && npm install && npm run dev
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero