import React from 'react'
import { Github, Twitter, Package } from 'lucide-react'

const links = [
    { href: "https://github.com/aakash-gupta02", title: "GitHub", icon: Github },
    { href: "https://x.com/AakashG99795", title: "Twitter", icon: Twitter },
    { href: "https://npmjs.com/package/neatnode", title: "NPM Package", icon: Package },
]

const FooterSubtle = () => {
    return (
        <footer className="border-t border-zinc-800 py-8 px-4 sm:px-6 lg:px-8 bg-linear-to-t from-emerald-500/2 to-transparent">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    {/* Left - Made by */}
                    <div className="text-zinc-400 text-sm">
                        Built with <span className='text-emerald-400'>love</span> by Aakash Gupta
                    </div>

                    <div className="flex items-center gap-6">
                        {links.map(({ href, title, icon: Icon }) => (
                            <a
                                key={title}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-emerald-400 transition-colors"
                                title={title}
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>

                    {/* Right - Year */}
                    <div className="text-zinc-500 text-sm">
                        <span className='text-emerald-400' >
                            NeatNode{" "}
                        </span>
                        © {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSubtle