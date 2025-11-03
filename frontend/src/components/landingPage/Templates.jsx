import React from "react";
import SectionCommon from "./SectionCommon";
import { Check, Code2, Server, Radio } from "lucide-react";

const templates = [
  {
    title: "Basic Template",
    icon: <Code2 className="w-6 h-6 text-emerald-500" />,
    desc: "A clean foundation to kickstart any Node.js project.",
    features: [
      "Predefined folder structure",
      "Built-in environment setup (.env)",
      "Integrated nodemon + script setup",
      "Centralized error handling",
      "Ready for any framework or service",
    ],
  },
  {
    title: "REST API Template",
    icon: <Server className="w-6 h-6 text-emerald-500" />,
    desc: "Production-grade REST API boilerplate built on Express.",
    features: [
      "Controllers, routes & middleware pre-wired",
      "Centralized response & error handlers",
      "MongoDB connection with config setup",
      "Request validation support",
      "Ready-to-extend scalable structure",
    ],
  },
  {
    title: "Socket Template",
    icon: <Radio className="w-6 h-6 text-emerald-500" />,
    desc: "Socket.io-powered backend ready for real-time systems.",
    features: [
      "Pre-configured Socket.io server",
      "Room & event architecture setup",
      "Integrated error & disconnect handlers",
      "REST + Socket hybrid structure supported",
      "Example chat event included",
    ],
  },
];

const Templates = () => {
  return (
    <SectionCommon
      title="Choose your Structure."
      desc="Pre-configured templates for every project type. — plug, code, and go."
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {templates.map((temp, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all"
          >
            <div className="bg-gradient-to-br from-emerald-500/10 to-transparent p-6 border-b border-zinc-800">
              <div className="bg-emerald-500/10 border border-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {temp.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{temp.title}</h3>
              <p className="text-zinc-400 text-sm">{temp.desc}</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {temp.features.map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="w-4 h-4 text-emerald-500 mt-1" />
                    <span className="text-sm text-zinc-400">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    </SectionCommon>
  );
};

export default Templates;
