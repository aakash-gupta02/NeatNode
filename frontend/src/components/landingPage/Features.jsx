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
  Activity
} from "lucide-react";

const features = [
  {
    icon: <Rocket className="w-6 h-6 text-emerald-500" />,
    title: "Instant Project Setup",
    desc: "Spin up a full Node.js project with one command — folder structure, routes, configs, and utils ready."
  },
  {
    icon: <Settings className="w-6 h-6 text-emerald-500" />,
    title: "Dynamic Template Logic",
    desc: "Choose to include or remove CRUD setups dynamically, no manual file editing needed."
  },
  {
    icon: <FolderTree className="w-6 h-6 text-emerald-500" />,
    title: "Ready-to-Code MVC",
    desc: "Prebuilt MVC architecture for maintainable and scalable codebases."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    title: "Security First",
    desc: "Includes Helmet, Rate Limiter, and CORS — secure defaults baked in."
  },
  {
    icon: <Code2 className="w-6 h-6 text-emerald-500" />,
    title: "Built-in Error & Logging",
    desc: "Centralized error handlers, Winston logger, and Morgan setup out of the box."
  },
  {
    icon: <Activity className="w-6 h-6 text-emerald-500" />,
    title: "Production Ready",
    desc: "Winston logs, validation, and clean responses included — deploy-ready from day one."
  }
];

const Features = () => {
  return (
    <SectionCommon
      title="Why NeatNode?"
      desc="A practical CLI tool built for developers who value time, structure, and scalability"
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
