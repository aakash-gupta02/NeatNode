"use client";

import React from "react";
import {
  Download,
  Terminal,
  CheckSquare,
  Rocket,
  ArrowRight,
} from "lucide-react";

import SectionCommon from "./SectionCommon";
import CopyCommand from "./CopyCommand";

const steps = [
  {
    icon: <Download className="w-6 h-6 text-emerald-400" />,
    title: "Install",
    command: "npm install -g neatnode",
  },
  {
    icon: <Terminal className="w-6 h-6 text-emerald-400" />,
    title: "Launch CLI",
    command: "npx neatnode",
  },
  {
    icon: <CheckSquare className="w-6 h-6 text-emerald-400" />,
    title: "Choose a Template",
    desc: "Basic, REST API or Socket.IO",
  },
  {
    icon: <Rocket className="w-6 h-6 text-emerald-400" />,
    title: "Start Building",
    desc: "Your backend is ready to go.",
  },
];

const Usage = () => {
  return (
    <SectionCommon
      title="Get Started in <Minutes>"
      desc="Four simple steps from an empty folder to a production-ready backend."
    >
      <div className="relative mt-12">

        {/* Desktop timeline */}
        <div className="hidden lg:block absolute top-11 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

        <div className="grid gap-8 lg:grid-cols-4">

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="hidden lg:flex absolute -top-1 left-1/2 -translate-x-1/2 z-20">
                <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/40" />
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-6 h-full transition-all duration-300 hover:border-emerald-500/30 hover:-translate-y-1">

                {/* Step */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-14 h-14 rounded-xl border border-zinc-700 bg-zinc-800/50 flex items-center justify-center">
                    {step.icon}
                  </div>

                  <span className="text-5xl font-bold text-zinc-800 group-hover:text-zinc-700 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  {step.title}
                </h3>

                {step.command ? (
                  <CopyCommand
                    command={step.command}
                    stepId={index + 1}
                  />
                ) : (
                  <p className="text-zinc-400 leading-7">
                    {step.desc}
                  </p>
                )}

              </div>

              {/* Arrow */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-30">
                  <ArrowRight className="w-6 h-6 text-zinc-700" />
                </div>
              )}
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/5 to-transparent px-8 py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          <div>
            <h3 className="text-lg font-semibold">
              That's it.
            </h3>

            <p className="text-zinc-400 mt-2">
              NeatNode handles the setup so you can focus on writing business logic.
            </p>
          </div>

          <code className="rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 font-mono text-emerald-400">
            npx neatnode my-app
          </code>

        </div>

      </div>
    </SectionCommon>
  );
};

export default Usage;