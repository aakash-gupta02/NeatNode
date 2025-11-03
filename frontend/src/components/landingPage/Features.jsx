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
      <div className="grid lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 hover:border-emerald-600/50 hover:bg-zinc-900 transition-all"
          >
            <div className="bg-emerald-500/10 border border-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </SectionCommon>
  );
};

export default Features;
