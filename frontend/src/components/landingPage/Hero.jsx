import { ArrowRight, Github } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import GridBackground from './GridBackground'
import Terminal from './Terminal'
import { docsUrl } from '@/app/metadata'
const Hero = () => {


    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden isolate ">

            {/* <Background /> */}
            <GridBackground />

            <div className="max-w-5xl mx-auto text-center">

                {/* Version Badge */}
                <div
                    className="inline-flex items-center space-x-2 bg-[#01FF99]/10 border border-[#00FF99]/20 rounded-full px-4 py-1.5 mb-8">
                    <span className="relative flex h-2 w-2">
                        <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-sm text-[#ffffff]">v3.1.0 now available</span>
                </div>

                {/* Heading */}
                <h1
                    className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 bg-linear-to-b from-emerald-100 to-emerald-400 bg-clip-text text-transparent"
                >
                    Spin up Node.js <br /> Backends instantly.
                </h1>

                {/* para */}
                <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto mb-12 leading-relaxed">
                    A CLI tool that generates production-ready Node.js backends - so you can start coding instead of configuring.
                </p>

                {/* get started & github button */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href={`${docsUrl}`}
                        target='_blank'
                        className="inline-flex items-center space-x-2 bg-zinc-100 text-zinc-950 px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-all hover:scale-105">
                        <span>Get Started</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                        target='_blank'
                        href="https://github.com/aakash-gupta02/NeatNode"
                        className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 text-zinc-100 px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 hover:border-zinc-700 transition-all">
                        <Github className="w-5 h-5" />
                        <span>View on GitHub</span>
                    </Link>
                </div>


                {/* Terminal Preview */}
                <Terminal />

            </div>

        </section>
    )
}

export default Hero