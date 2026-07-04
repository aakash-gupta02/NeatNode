import React from "react";
import SectionCommon from "./SectionCommon";
import {
  Rocket,
  FolderTree,
  Code2,
  ShieldCheck,
  Settings,
  Terminal,
  Cpu,
  Plug,
  Activity,
  Type,
} from "lucide-react";

const features = [
  {
    icon: <Rocket className="w-6 h-6 text-emerald-500" />,
    title: "Instant Project Setup",
    desc: "Bootstrap production-ready Express projects with batteries included, using a single command.",
  },
  {
    icon: <FolderTree className="w-6 h-6 text-emerald-500" />,
    title: "Resource Generation",
    desc: "Generate controllers, services, routes, validation, models, and automatic route registration with one command.",
  },
  {
    icon: <Type className="w-6 h-6 text-emerald-500" />,
    title: "JavaScript & TypeScript",
    desc: "First-class support for both JavaScript and TypeScript, with language-specific templates and configuration.",
  },
  {
    icon: <Settings className="w-6 h-6 text-emerald-500" />,
    title: "MVC & Modular Architecture",
    desc: "Choose between MVC or modular project structures without changing your development workflow.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    title: "Config-Driven Development",
    desc: "NeatNode understands your project through configuration, enabling smart code generation and future extensibility.",
  },
  {
    icon: <Activity className="w-6 h-6 text-emerald-500" />,
    title: "Production Ready",
    desc: "Built-in validation, security middleware, centralized error handling, logging, and scalable project structure from day one.",
  },
];

const Features = () => {
  return (
    <SectionCommon
      title="Everything You Need to Build <Faster>"
      desc="Scaffold projects, generate resources, and stay productive with production-ready defaults."
    >
      <div className="grid lg:grid-cols-2 gap-4 relative">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-xl hover:border-zinc-700 transition-all group overflow-hidden"
          >
            {/* hover gradient overlay for each card */}
            <div className="absolute inset-0 bg-linear-to-br from-emerald-600/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="relative z-10 flex items-start space-x-4">
              <div className="relative">
                <div className="border border-zinc-700 w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all group-hover:from-emerald-500/10 group-hover:to-emerald-300/10">
                  {feature.icon}
                </div>
                <div className="absolute -inset-1 bg-green-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-zinc-400">{feature.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionCommon>
  );
};

export default Features;
