"use client"
import React, { useState } from 'react'
import { Download, Github, FolderTree, Copy, Share2, Check } from 'lucide-react'
import Link from 'next/link'

const CTAMinimalSimple = () => {
    const [copyState, setCopyState] = useState('idle')
    const [shareState, setShareState] = useState('idle')

    const handleCopy = async () => {
        if (copyState === 'copying') return
        
        setCopyState('copying')
        try {
            await navigator.clipboard.writeText('npm install -g nodeneat')
            setCopyState('copied')
            setTimeout(() => setCopyState('idle'), 2000)
        } catch (err) {
            setCopyState('idle')
        }
    }

    const handleShare = async () => {
        if (shareState === 'sharing') return
        
        setShareState('sharing')
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'NodeNeat - Scaffold Node Projects in Seconds',
                    text: 'Check out NodeNeat - a modern CLI to generate clean, structured Node.js apps with one command!',
                    url: window.location.href,
                })
            } else {
                await navigator.clipboard.writeText(window.location.href)
            }
            setShareState('shared')
            setTimeout(() => setShareState('idle'), 2000)
        } catch (err) {
            setShareState('idle')
        }
    }

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
            <div className="max-w-3xl mx-auto text-center">
                {/* Header */}
                <div className="mb-10">
                    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                        Start Building Faster
                    </h2>
                    <p className="text-lg text-zinc-400">
                        Join developers worldwide who are saving hours on project setup.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 justify-center mb-8">
                    
                    <Link
                    href={"https://neatnodee-docs.vercel.app/getting-started/installation"}
                    target="_blank"
                     className="bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-semibold px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 hover:scale-105">
                        <Download className="w-5 h-5" />
                        <span>Installation</span>
                    </Link>

                    <Link
                        href="https://neatnodee-docs.vercel.app/guides/contributing"
                        target='_blank'
                        className="border border-zinc-700 hover:border-zinc-600 text-zinc-300 hover:text-white font-medium px-5 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 hover:bg-zinc-800/50"
                    >
                        <Github className="w-5 h-5" />
                        <span>Contribute</span>
                    </Link>

                    <button
                        onClick={handleShare}
                        className={`border ${
                            shareState === 'shared' 
                                ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400' 
                                : 'border-zinc-700 hover:border-zinc-600 text-zinc-300 hover:text-white'
                        } font-medium px-5 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 hover:bg-zinc-800/50`}
                    >
                        {shareState === 'shared' ? (
                            <Check className="w-5 h-5" />
                        ) : (
                            <Share2 className="w-5 h-5" />
                        )}
                        <span>{shareState === 'shared' ? 'Shared!' : 'Share'}</span>
                    </button>
                </div>

                {/* Quick Install */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 max-w-md mx-auto">
                    <div className="text-sm text-zinc-400 mb-3">Quick install</div>
                    <div className="flex items-center justify-between bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
                        <code className="text-emerald-400 font-mono text-sm flex-1 text-left">
                            npm install -g neatnode
                        </code>
                        <button 
                            onClick={handleCopy}
                            className={`p-2 rounded-lg transition-all duration-200 ${
                                copyState === 'copied' 
                                    ? 'bg-emerald-500/20 text-emerald-400' 
                                    : 'text-zinc-500 hover:text-emerald-500 hover:bg-zinc-700/30'
                            }`}
                            title={copyState === 'copied' ? 'Copied!' : 'Copy to clipboard'}
                        >
                            {copyState === 'copied' ? (
                                <Check className="w-4 h-4" />
                            ) : (
                                <Copy className="w-4 h-4" />
                            )}
                        </button>
                    </div>
                    {copyState === 'copied' && (
                        <div className="mt-2 text-emerald-400 text-xs font-medium animate-pulse">
                            Copied to clipboard!
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default CTAMinimalSimple