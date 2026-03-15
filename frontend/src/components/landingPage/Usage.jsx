"use client";
import React from "react";
import { Download, Terminal, CheckSquare, Rocket } from "lucide-react";
import SectionCommon from "./SectionCommon";
import CopyCommand from "./CopyCommand";

const steps = [
    {
        id: 1,
        title: "Install globally",
        icon: <Download className="w-6 h-6 text-emerald-500" />,
        command: "npm i -g neatnode",
    },
    {
        id: 2,
        title: "Run the CLI",
        icon: <Terminal className="w-6 h-6 text-emerald-500" />,
        command: "npx neatnode",
    },
    {
        id: 3,
        title: "Choose template",
        icon: <CheckSquare className="w-6 h-6 text-emerald-500" />,
        desc: "Select from Basic, REST API, or Socket template options.",
    },
    {
        id: 4,
        title: "Start building",
        icon: <Rocket className="w-6 h-6 text-emerald-500" />,
        desc: "Your backend structure is generated and ready to run.",
    },
];

const Usage = () => {
    return (
        <SectionCommon title="How It Works" desc="Get started with NeatNode in four simple steps">
            {/* Steps Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step) => (
                    <div key={step.id} className="relative group">
                        <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 hover:border-zinc-700 transition-all relative">
                            {/* Hover gradient overlay */}
                            <div className="absolute inset-0 bg-linear-to-br from-emerald-600/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            
                            {/* Step number badge */}
                            <div className="absolute -top-3 -left-3 bg-emerald-500 text-zinc-950 w-8 h-8 rounded-lg flex items-center justify-center font-semibold text-sm shadow-lg shadow-emerald-500/20">
                                {step.id}
                            </div>
                            
                            {/* Icon */}
                            <div className="relative mb-4 mt-2">
                                <div className="border border-zinc-700 w-12 h-12 rounded-lg flex items-center justify-center transition-all group-hover:from-emerald-500/10 group-hover:to-emerald-300/10">
                                    {step.icon}
                                </div>
                                <div className="absolute -inset-1 bg-emerald-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                            </div>
                            
                            <h3 className="text-lg font-semibold mb-2 relative z-10">{step.title}</h3>

                            {step.command ? (
                                <CopyCommand command={step.command} stepId={step.id} />
                            ) : (
                                <p className="text-sm text-zinc-400 relative z-10">{step.desc}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </SectionCommon>
    );
};

export default Usage;