import React from 'react'
import { FolderTree, Users, ArrowUpRight, Terminal, Download } from 'lucide-react'
import SectionCommon from './SectionCommon'
import Link from 'next/link'

const DocsnSetup = () => {
    const docItems = [
        {
            icon: <Terminal className="w-6 h-6 text-emerald-500" />,
            title: "Documentation",
            description: "Get up and running in under 2 minutes with our step-by-step guide",
            href: "https://neatnodee-docs.vercel.app"
        },
        {
            icon: <FolderTree className="w-6 h-6 text-emerald-500" />,
            title: "Template Structure",
            description: "Deep dive into the generated project architecture",
            href: "https://neatnodee-docs.vercel.app/templates"
        },
        {
            icon: <Users className="w-6 h-6 text-emerald-500" />,
            title: "Contribution Guide",
            description: "How to contribute templates and improve the tool",
            href: "https://neatnodee-docs.vercel.app/guides/contributing"
        },
        {
            icon: <Download className="w-6 h-6 text-emerald-500" />,
            title: "API Reference",
            description: "Programmatic API for advanced integrations",
            href: "https://neatnodee-docs.vercel.app/api-reference"
        }
    ]

    return (
        <SectionCommon
            title="Documentation & Setup"
            desc="Comprehensive guides and references for NeatNode"
        >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                {docItems.map((item, index) => (
                    <Link
                        key={index}
                        target='_blank'
                        href={item.href}
                        className="relative bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-xl hover:border-zinc-700 transition-all group overflow-hidden h-full flex flex-col"
                    >
                        {/* Hover gradient overlay */}
                        <div className="absolute inset-0 bg-linear-to-br from-emerald-600/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col h-full">
                            {/* Header with icon and arrow */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="relative">
                                    <div className="border border-zinc-700 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-all group-hover:border-emerald-500/50 group-hover:bg-emerald-500/5">
                                        {item.icon}
                                    </div>
                                    <div className="absolute -inset-2 bg-emerald-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-emerald-400 transition-colors duration-300 shrink-0" />
                            </div>

                            {/* Content - flex-grow to push arrow to bottom */}
                            <div className="grow">
                                <h3 className="font-semibold mb-2 text-lg leading-tight">{item.title}</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </SectionCommon>
    )
}

export default DocsnSetup