"use client";
import React, { useState, useEffect, useRef } from "react";

const METADATA = {
  languages: ["JavaScript", "TypeScript"],
  templates: ["REST API", "Basic", "Socket.IO"],
  architectures: ["Modular", "MVC"],
  databases: ["MongoDB (Mongoose)", "PostgreSQL (Prisma)"],
  resources: ["user", "product", "auth", "order", "billing"],
};

export default function Terminal() {
  const [activeLang, setActiveLang] = useState("JavaScript"); // 'JavaScript' or 'TypeScript'
  const [currentLoop, setCurrentLoop] = useState("scaffold"); // 'scaffold' | 'resource'
  const [typedText, setTypedText] = useState("");
  const [visibleLines, setVisibleLines] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  // Configuration combinations holder
  const [currentConfig, setCurrentConfig] = useState({
    template: "REST API",
    architecture: "Modular",
    database: "MongoDB (Mongoose)",
    resource: "user",
  });

  // Track rendering loops to safely prevent stale state interval updates across ticks
  const cycleRef = useRef(0);

  const getLanguageClasses = () => {
    if (activeLang === "JavaScript") {
      return {
        bgGradient: "from-emerald-500/10 to-transparent",
        iconBg: "bg-emerald-500/10",
        iconColor: "text-emerald-400",
        badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        border: "border-emerald-500/20",
        button:
          "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 font-bold",
        checkColor: "text-emerald-400",
        dollar: "text-emerald-400",
      };
    } else {
      return {
        bgGradient: "from-blue-500/10 to-transparent",
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-400",
        badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        border: "border-blue-500/20",
        button: "bg-blue-500 text-white shadow-lg shadow-blue-500/20 font-bold",
        checkColor: "text-blue-400",
        dollar: "text-blue-400",
      };
    }
  };

  const ui = getLanguageClasses();

  const randomizeMetadata = () => {
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
    setCurrentConfig({
      template: getRandom(METADATA.templates),
      architecture: getRandom(METADATA.architectures),
      database: getRandom(METADATA.databases),
      resource: getRandom(METADATA.resources),
    });
  };

  useEffect(() => {
    let isMounted = true;
    cycleRef.current += 1;
    const activeCycle = cycleRef.current;

    // Reset layout display frames
    setTypedText("");
    setVisibleLines([]);
    setIsTyping(true);

    const ext = activeLang === "JavaScript" ? "js" : "ts";
    const appName = activeLang === "JavaScript" ? "neat-app" : "neat-app-ts";
    const res = currentConfig.resource;

    const commands = {
      scaffold: `npx neatnode ${appName}`,
      resource: `neatnode g resource ${res}`,
    };

    const targetCommand = commands[currentLoop];
    let charIndex = 0;

    // Clear and execute fresh sequential key insertion
    const runTypingSimulation = () => {
      const typingInterval = setInterval(() => {
        if (!isMounted || activeCycle !== cycleRef.current) {
          clearInterval(typingInterval);
          return;
        }

        if (charIndex <= targetCommand.length) {
          setTypedText(targetCommand.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          setTimeout(triggerOutputs, 400);
        }
      }, 50);
    };

    const triggerOutputs = async () => {
      if (!isMounted || activeCycle !== cycleRef.current) return;

      if (currentLoop === "scaffold") {
        const scaffoldSteps = [
          {
            type: "prompt",
            text: "Select language:",
            highlight: activeLang,
            icon: "✔",
          },
          {
            type: "prompt",
            text: "Choose template:",
            highlight: currentConfig.template,
            icon: "✔",
          },
          {
            type: "prompt",
            text: "Select architecture:",
            highlight: currentConfig.architecture,
            icon: "✔",
          },
          {
            type: "prompt",
            text: "Configure Database:",
            highlight: currentConfig.database,
            icon: "✔",
          },
          {
            type: "status",
            text: "Installing boilerplate dependencies...",
            icon: "⏳",
          },
          {
            type: "success",
            text: "Project environment bootstrapped successfully!",
            icon: "✔",
          },
          { type: "neutral", text: `$ cd ${appName}` },
          { type: "neutral", text: "$ npm run dev" },
        ];

        for (let i = 0; i < scaffoldSteps.length; i++) {
          if (!isMounted || activeCycle !== cycleRef.current) return;
          const delay = scaffoldSteps[i].type === "status" ? 1000 : 300;
          await new Promise((res) => setTimeout(res, delay));
          if (activeCycle === cycleRef.current) {
            setVisibleLines((prev) => [...prev, scaffoldSteps[i]]);
          }
        }
      } else {
        const resourceSteps = [
          {
            type: "success",
            text: `Created ${res}.controller.${ext}`,
            icon: "✔",
          },
          { type: "success", text: `Created ${res}.service.${ext}`, icon: "✔" },
          { type: "success", text: `Created ${res}.route.${ext}`, icon: "✔" },
          ...(currentConfig.template.includes("API")
            ? [
                {
                  type: "success",
                  text: `Created ${res}.validation.${ext}`,
                  icon: "✔",
                },
              ]
            : []),
          { type: "success", text: `Created ${res}.model.${ext}`, icon: "✔" },
          {
            type: "success",
            text: `Updated routes/index.route.${ext}`,
            icon: "✔",
          },
          {
            type: "status",
            text: `Nest-style resource "${res}" generated successfully.`,
            icon: "✨",
          },
        ];

        for (let i = 0; i < resourceSteps.length; i++) {
          if (!isMounted || activeCycle !== cycleRef.current) return;
          await new Promise((res) => setTimeout(res, 200));
          if (activeCycle === cycleRef.current) {
            setVisibleLines((prev) => [...prev, resourceSteps[i]]);
          }
        }
      }

      // Route sequence holds and alternative loops triggers
      setTimeout(() => {
        if (isMounted && activeCycle === cycleRef.current) {
          if (currentLoop === "resource") {
            randomizeMetadata();
            setCurrentLoop("scaffold");
          } else {
            setCurrentLoop("resource");
          }
        }
      }, 3500);
    };

    runTypingSimulation();

    return () => {
      isMounted = false;
    };
  }, [currentLoop, activeLang]);

  const handleLangChange = (lang) => {
    setActiveLang(lang);
    randomizeMetadata();
    setCurrentLoop("scaffold");
  };

  return (
    <div className="mt-12 max-w-3xl mx-auto px-4 w-full select-none">
      {/* Interactive Tabs Menu */}
      <div className="flex items-center space-x-2 mb-3 pl-1">
        <button
          onClick={() => handleLangChange("JavaScript")}
          className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-all duration-200 border text-center min-w-[75px] ${
            activeLang === "JavaScript"
              ? ui.button + " border-emerald-500/30"
              : "text-zinc-400 hover:text-zinc-200 border-transparent bg-zinc-900/40 hover:bg-zinc-900/80"
          }`}
        >
          JS Mode
        </button>
        <button
          onClick={() => handleLangChange("TypeScript")}
          className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-all duration-200 border text-center min-w-[75px] ${
            activeLang === "TypeScript"
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 border-blue-500/30 font-bold"
              : "text-zinc-400 hover:text-zinc-200 border-transparent bg-zinc-900/40 hover:bg-zinc-900/80"
          }`}
        >
          TS Mode
        </button>
      </div>

      {/* High-Depth Shell Frame Container */}
      <div className="bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl relative">
        <div
          className={`absolute top-0 left-0 w-full h-40 bg-gradient-to-b ${ui.bgGradient} opacity-30 pointer-events-none blur-xl`}
        />

        {/* Apple/Linux Window Control Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/60 bg-zinc-900/50 backdrop-blur-sm relative z-10">
          <div className="flex space-x-2 shrink-0">
            <div className="w-3 h-3 rounded-full bg-red-500/90 border border-red-600/40 shadow-sm shadow-red-500/20" />
            <div className="w-3 h-3 rounded-full bg-amber-400/90 border border-amber-500/40 shadow-sm shadow-amber-400/20" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/90 border border-emerald-600/40 shadow-sm shadow-emerald-500/20" />
          </div>
          <span className="text-[11px] font-mono text-zinc-400 font-medium truncate max-w-[180px] sm:max-w-none px-2">
            neatnode — {activeLang.toLowerCase()} shell
          </span>
          {/* <div className="text-[10px] font-mono text-zinc-600 shrink-0 hidden sm:block">
            v4.0.0
          </div> */}
        </div>

        {/* Display Output Terminal Logs */}
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm min-h-[360px] flex flex-col justify-between relative z-10 text-left">
          <div className="space-y-4 break-words">
            {/* Command Retention Continuity Line */}
            {currentLoop === "resource" && (
              <div className="opacity-25 space-y-1 transition-all duration-700 text-zinc-400">
                <div className="flex items-center space-x-2">
                  <span className="text-zinc-500 font-bold">$</span>
                  <span className="truncate">
                    npx neatnode{" "}
                    {activeLang === "JavaScript" ? "neat-app" : "neat-app-ts"}
                  </span>
                </div>
                <div className="pl-4 text-xs truncate">
                  ✔ Boilerplate scaffolded sequence complete.
                </div>
              </div>
            )}

            {/* Simulated Live Input Line */}
            <div className="flex items-start space-x-2">
              <span className={`${ui.dollar} font-bold shrink-0 mt-[1px]`}>
                $
              </span>
              <span className="text-zinc-100 flex flex-wrap items-center tracking-normal font-medium whitespace-pre-wrap word-break">
                {typedText}
                <span
                  className={`inline-block w-2 h-4 ml-0.5 mt-0.5 animate-pulse shrink-0 ${
                    activeLang === "JavaScript"
                      ? "bg-emerald-400"
                      : "bg-blue-400"
                  }`}
                />
              </span>
            </div>

            {/* Sequential Content Stack */}
            <div className="space-y-2.5 pl-3 sm:pl-4 transition-all duration-300">
              {visibleLines.map((line, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2.5 text-zinc-300"
                >
                  {line.icon && (
                    <span
                      className={`shrink-0 select-none mt-[2px] ${
                        line.type === "success"
                          ? "text-emerald-400 font-bold"
                          : line.type === "status"
                            ? "text-amber-400 animate-pulse"
                            : "text-zinc-500"
                      }`}
                    >
                      {line.icon}
                    </span>
                  )}
                  <span
                    className={`leading-relaxed flex-1 ${line.type === "neutral" ? "text-zinc-500" : ""}`}
                  >
                    {line.text}
                    {line.highlight && (
                      <span
                        className={`inline-block font-semibold px-1.5 py-0.5 rounded text-[10px] sm:text-xs ml-2 border ${ui.badge}`}
                      >
                        {line.highlight}
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Fully Responsive Blueprint Metadata Panel Footer */}
          <div className="mt-8 pt-4 border-t border-zinc-900/60 flex flex-col gap-3 sm:flex-row justify-between items-start sm:items-center text-[11px] text-zinc-500">
            <div className="flex flex-wrap gap-1.5 items-center w-full sm:w-auto">
              <span className="text-zinc-600 shrink-0">Blueprint:</span>
              <span className="bg-zinc-900/80 border border-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded text-[10px] sm:text-[11px] truncate max-w-[130px] sm:max-w-none">
                {currentConfig.architecture}
              </span>
              <span className="bg-zinc-900/80 border border-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded text-[10px] sm:text-[11px] truncate max-w-[150px] sm:max-w-none">
                {currentConfig.database}
              </span>
            </div>
            <span className="text-zinc-500 text-[9px] uppercase font-bold tracking-widest bg-zinc-900/90 px-2 py-1 rounded border border-zinc-800/60 shrink-0 self-end sm:self-auto">
              {currentLoop === "scaffold" ? "⚡ Scaffolding" : "📦 Nest Gen"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
