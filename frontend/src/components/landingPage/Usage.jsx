"use client";
import React, { useState } from "react";
import { Download, Terminal, CheckSquare, Rocket, Copy } from "lucide-react";
import SectionCommon from "./SectionCommon";


const steps = [
    {
        id: 1,
        title: "Install globally",
        icon: <Download className="w-6 h-6" />,
        command: "npm i -g neatnode",
    },
    {
        id: 2,
        title: "Run the CLI",
        icon: <Terminal className="w-6 h-6" />,
        command: "npx neatnode",
    },
    {
        id: 3,
        title: "Choose template",
        icon: <CheckSquare className="w-6 h-6" />,
        desc: "Select from Basic, REST API, or Socket template options.",
    },
    {
        id: 4,
        title: "Start building",
        icon: <Rocket className="w-6 h-6" />,
        desc: "Your backend structure is generated and ready to run.",
    },
];

const Usage = () => {
    const [copiedId, setCopiedId] = useState(null);

    const copyToClipboard = async (text, id) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        } catch (e) {
            console.error("Failed to copy text: ", e);
        }
    };

    return (
        <SectionCommon title="How It Works" desc="Get started with NeatNode in four simple steps">
            {/* Steps Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step) => (
                    <div key={step.id} className="relative">
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all">
                            <div className="absolute -top-3 -left-3 bg-emerald-500 text-zinc-950 w-8 h-8 rounded-lg flex items-center justify-center font-semibold text-sm">
                                {step.id}
                            </div>
                            <div className="bg-zinc-800 border border-zinc-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mt-2 text-emerald-400">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>

                            {step.command ? (
                                <div className="relative">
                                    <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 pr-12 font-mono text-xs text-zinc-400 overflow-x-auto">
                                        {step.command}
                                    </div>

                                    <button
                                        onClick={() => copyToClipboard(step.command, step.id)}
                                        className="absolute top-2 right-2 inline-flex items-center gap-1 bg-zinc-800/40 hover:bg-zinc-700 text-zinc-300 rounded px-2 py-1 text-xs"
                                        aria-label={`Copy command for step ${step.id}`}
                                    >
                                        {copiedId === step.id ? (
                                            <span className="text-emerald-400">Copied</span>
                                        ) : (
                                            <>
                                                <Copy className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            ) : (
                                <p className="text-sm text-zinc-400">{step.desc}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </SectionCommon>

    );
};

export default Usage;
