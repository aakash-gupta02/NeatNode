import React, { useState } from "react";
import SectionCommon from "./SectionCommon";
import { Check, Code2, Server, Radio, Type, FileCode } from "lucide-react";

const jsTemplates = [
  {
    title: "Basic Template",
    icon: <Code2 className="w-6 h-6 text-emerald-500" />,
    language: "JavaScript",
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
    language: "JavaScript",
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
    language: "JavaScript",
    desc: "Real-time socket server with JavaScript support.",
    features: [
      "Pre-configured Socket.io server",
      "Room & event architecture setup",
      "Integrated error & disconnect handlers",
      "REST + Socket hybrid structure supported",
      "Example chat event included",
    ],
  },
];

const tsTemplates = [
  {
    title: "Basic Template",
    icon: <Type className="w-6 h-6 text-blue-500" />,
    language: "TypeScript",
    desc: "A clean TypeScript foundation with full type safety.",
    features: [
      "Full TypeScript configuration (tsconfig)",
      "Type definitions for all dependencies",
      "Environment variable typing",
      "Pre-configured build scripts",
      "ESLint & Prettier setup",
    ],
  },
  {
    title: "REST API Template",
    icon: <Server className="w-6 h-6 text-blue-500" />,
    language: "TypeScript",
    desc: "Type-safe REST API with Express and TypeScript.",
    features: [
      "Type-safe controllers and routes",
      "Request/Response type definitions",
      "Database models with TypeScript interfaces",
      "Middleware typing",
      "Zod validation integration",
    ],
  },
  {
    title: "Socket Template",
    icon: <Radio className="w-6 h-6 text-blue-500" />,
    language: "TypeScript",
    desc: "Real-time socket server with TypeScript support.",
    features: [
      "Type-safe socket events",
      "Client-server type sharing",
      "Room management with types",
      "Error handling with TypeScript",
      "Example with typed events",
    ],
  },
];

const Templates = () => {
  const [language, setLanguage] = useState("js");
  const templates = language === "js" ? jsTemplates : tsTemplates;

  const getLanguageClasses = () => {
    if (language === "js") {
      return {
        bgGradient: "from-emerald-500/10 to-transparent",
        iconBg: "bg-emerald-500/10",
        iconColor: "text-emerald-500",
        badge: "bg-emerald-500/10 text-emerald-400",
        border: "border-emerald-500/20",
        button: "bg-emerald-500 text-white",
        checkColor: "text-emerald-500",
      };
    } else {
      return {
        bgGradient: "from-blue-500/10 to-transparent",
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-500",
        badge: "bg-blue-500/10 text-blue-400",
        border: "border-blue-500/20",
        button: "bg-blue-500 text-white",
        checkColor: "text-blue-500",
      };
    }
  };

  const classes = getLanguageClasses();

  return (
    <SectionCommon
      title="Choose your Structure."
      desc="Pre-configured templates for every project type. — plug, code, and go."
    >
      {/* Language Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-zinc-800 border border-zinc-700 rounded-lg p-1">
          <button
            onClick={() => setLanguage("js")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all flex items-center space-x-2 ${
              language === "js"
                ? "bg-emerald-500 text-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <FileCode className="w-4 h-4" />
            <span>JavaScript</span>
          </button>
          <button
            onClick={() => setLanguage("ts")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all flex items-center space-x-2 ${
              language === "ts"
                ? "bg-blue-500 text-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Type className="w-4 h-4" />
            <span>TypeScript</span>
          </button>
        </div>
      </div>

      {/* Template Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {templates.map((temp, idx) => (
          <div
            key={idx}
            className={`bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all group`}
          >
            <div className={`bg-gradient-to-br ${classes.bgGradient} p-6 border-b border-zinc-800`}>
              <div className={`${classes.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                {temp.icon}
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-semibold">{temp.title}</h3>
                <span className={`text-xs px-2 py-1 rounded ${classes.badge}`}>
                  {temp.language}
                </span>
              </div>

              <p className="text-zinc-400 text-sm">{temp.desc}</p>
            </div>

            <div className="p-6">
              <ul className="space-y-3">
                {temp.features.map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className={`w-4 h-4 mt-1 ${classes.checkColor}`} />
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