import React, { useState } from 'react'

const Terminal = () => {

    const [language, setLanguage] = useState('js');

    const steps = {
        js: [
            { icon: "✔", text: "Select a template:", highlight: "REST API" },
            { icon: "✔", text: "Enter project name:", highlight: "my-app" },
            { icon: "✔", text: "Location to save:", highlight: "./projects" },
        ],
        ts: [
            { icon: "✔", text: "Select a template:", highlight: "REST API with TypeScript" },
            { icon: "✔", text: "Enter project name:", highlight: "my-app-ts" },
            { icon: "✔", text: "Location to save:", highlight: "./projects" },
            { icon: "✔", text: "TypeScript setup:", highlight: "Enabled" },
        ],
    };


    return (
        <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
                <div className="flex items-center space-x-2 px-4 py-3 border-b border-zinc-800">
                    <div className="flex space-x-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs text-zinc-500 ml-2">terminal</span>
                </div>


                <div className="p-6 font-mono text-sm bg-zinc-900 rounded-lg border border-zinc-800">
                    {/* Toggle buttons */}
                    <div className="flex space-x-2 mb-4">
                        <button
                            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${language === 'js'
                                ? 'bg-emerald-500 text-white'
                                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                                }`}
                            onClick={() => setLanguage('js')}
                        >
                            JavaScript
                        </button>
                        <button
                            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${language === 'ts'
                                ? 'bg-blue-500 text-white'
                                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                                }`}
                            onClick={() => setLanguage('ts')}
                        >
                            TypeScript
                        </button>
                    </div>

                    {/* Terminal content */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-emerald-400">$</span>
                            <span className="text-zinc-300">npx neatnode {language === 'js' ? 'my-app' : 'my-app-ts'}</span>
                            <span className="text-zinc-500 text-xs">--{language}</span>
                        </div>

                        <div className="space-y-1 ml-4">
                            {steps[language].map((step, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <span className="text-emerald-400">{step.icon}</span>
                                    <span className="text-zinc-500">
                                        {step.text} <span className="text-zinc-300">{step.highlight}</span>
                                    </span>
                                </div>
                            ))}

                            <div className="mt-3 flex items-center space-x-2 text-emerald-400">
                                <span>✅</span>
                                <span>Template generated successfully!</span>
                            </div>

                            <div className="mt-2 text-zinc-400">
                                cd {language === 'js' ? 'my-app' : 'my-app-ts'} && npm install && npm run dev
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terminal