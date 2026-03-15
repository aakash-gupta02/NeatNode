"use client"

import React, { useState } from "react";
import { Copy } from "lucide-react";

const CopyCommand = ({ command, stepId }) => {
    const [copiedId, setCopiedId] = useState(null);

    const copyToClipboard = async (text, id) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        } catch (e) {
            console.error("Failed to copy text: ", e);
        }
    };

    return (
        <div className="relative z-10">
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 pr-12 font-mono text-xs text-zinc-400 overflow-x-auto">
                {command}
            </div>

            <button
                onClick={() => copyToClipboard(command, stepId)}
                className="absolute top-2 right-2 inline-flex items-center gap-1 bg-zinc-800/40 hover:bg-zinc-700 text-zinc-300 rounded px-2 py-1 text-xs transition-all"
                aria-label={`Copy command for step ${stepId}`}
            >
                {copiedId === stepId ? (
                    <span className="text-emerald-400">Copied!</span>
                ) : (
                    <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                    </>
                )}
            </button>
        </div>
    );
};

export default CopyCommand;