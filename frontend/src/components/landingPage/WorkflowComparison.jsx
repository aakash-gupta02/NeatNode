import { Check, X, Terminal, Sparkles } from "lucide-react";
import SectionCommon from "./SectionCommon";

const comparison = [
  {
    phase: "Project Setup",
    manual: "Initialize project & install packages",
    neatnode: "npx neatnode my-app",
    command: true,
  },
  {
    phase: "Architecture",
    manual: "Create folders & project structure",
    neatnode: "MVC / Modular structure ready",
  },
  {
    phase: "Configuration",
    manual: "Setup env, logger & middleware",
    neatnode: "Production-ready configuration",
  },
  {
    phase: "Security",
    manual: "Configure Helmet, CORS & validation",
    neatnode: "Security & validation included",
  },
  {
    phase: "New Resource",
    manual: "Write controller, service, model & route",
    neatnode: "neatnode g resource user",
    command: true,
  },
  {
    phase: "Routing",
    manual: "Register routes manually",
    neatnode: "Automatic route registration",
  },
];

const WorkflowComparison = () => {
  return (
    <SectionCommon
      title="From Setup to <Shipping>"
      desc="Spend less time configuring your backend and more time building your application."
    >
      <div className="max-w-6xl mx-auto mt-12">
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">

          {/* Header */}
          <div className="grid grid-cols-12 gap-8 border-b border-zinc-800 bg-zinc-900/60 px-8 py-5">

            <div className="col-span-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Lifecycle
              </p>
            </div>

            <div className="col-span-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Manual Workflow
              </p>
            </div>

            <div className="col-span-5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />

              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                NeatNode Workflow
              </p>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-zinc-800">
            {comparison.map((item) => (
              <div
                key={item.phase}
                className="grid grid-cols-12 gap-8 px-8 py-7 hover:bg-zinc-900/30 transition-colors"
              >
                {/* Phase */}
                <div className="col-span-3 flex items-center">
                  <h3 className="font-semibold text-lg text-white">
                    {item.phase}
                  </h3>
                </div>

                {/* Manual */}
                <div className="col-span-4 flex items-center gap-3">
                  <X className="w-5 h-5 shrink-0 text-red-400" />

                  <p className="text-base text-zinc-400 leading-relaxed">
                    {item.manual}
                  </p>
                </div>

                {/* NeatNode */}
                <div className="col-span-5 flex items-center gap-3">
                  <Check className="w-5 h-5 shrink-0 text-emerald-400" />

                  {item.command ? (
                    <code className="rounded-lg border border-emerald-500/20 bg-black px-3 py-2 font-mono text-sm text-emerald-400">
                      {item.neatnode}
                    </code>
                  ) : (
                    <p className="text-base text-zinc-200 leading-relaxed">
                      {item.neatnode}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-4 border-t border-zinc-800 bg-zinc-900/70 px-8 py-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-center gap-3">
              <Terminal className="h-5 w-5 text-emerald-400" />

              <p className="text-base text-zinc-300">
                From zero to a production-ready Express backend in under a minute.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript",
                "TypeScript",
                "MVC",
                "Modular",
                "Mongoose",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-sm text-zinc-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </SectionCommon>
  );
};

export default WorkflowComparison;