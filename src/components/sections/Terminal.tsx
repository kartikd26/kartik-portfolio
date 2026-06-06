"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";

const lines = [
  { text: "$ git clone factwise/invoice-ocr", delay: 0, color: "text-zinc-300" },
  { text: "$ cd invoice-ocr && npm install", delay: 400, color: "text-zinc-300" },
  { text: "✓ Dependencies installed (FastAPI, React, Azure SDK)", delay: 900, color: "text-emerald-400" },
  { text: "$ python main.py --env prod", delay: 1400, color: "text-zinc-300" },
  { text: "✓ Azure Document Intelligence connected", delay: 1900, color: "text-emerald-400" },
  { text: "✓ Confidence scoring engine ready", delay: 2200, color: "text-emerald-400" },
  { text: "$ vercel --prod", delay: 2700, color: "text-zinc-300" },
  { text: "✓ Deployed to production in 43s", delay: 3200, color: "text-emerald-400" },
  { text: "✓ Client onboarded successfully", delay: 3600, color: "text-emerald-400" },
  { text: "✓ Invoice processing: 3 hours → 2 minutes", delay: 4000, color: "text-amber-400" },
  { text: "✓ Manual work reduced by 90%", delay: 4400, color: "text-amber-400" },
  { text: "$ # shipped. debugged. moved on.", delay: 5000, color: "text-zinc-600" },
];

function TerminalLine({ line, show }: { line: typeof lines[0]; show: boolean }) {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!show) return;
    let i = 0;
    setText("");
    setDone(false);
    const interval = setInterval(() => {
      if (i < line.text.length) {
        setText(line.text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 28);
    return () => clearInterval(interval);
  }, [show, line.text]);

  if (!show) return null;

  return (
    <div className={`font-mono text-sm ${line.color} flex`}>
      <span>{text}</span>
      {!done && (
        <span className="cursor-blink ml-px w-2 h-4 bg-current inline-block" />
      )}
    </div>
  );
}

export default function Terminal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleLines, setVisibleLines] = useState<boolean[]>(
    new Array(lines.length).fill(false)
  );

  useEffect(() => {
    if (!inView) return;
    lines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, line.delay);
    });
  }, [inView]);

  return (
    <section className="relative py-32 overflow-hidden" id="terminal">
      {/* Phase label */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="phase-label">05 / Ship</span>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-xs tracking-[0.2em] uppercase text-zinc-600 font-mono mb-4">
              Phase 05 / Ship
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
              Then I actually
              <br />
              <span className="amber-gradient-text italic">deploy it.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Most PMs&apos; involvement ends at the handoff. Mine starts over
              after deploy. I stay in the codebase, monitor production, and fix
              bugs myself.
            </p>
            <div className="space-y-3">
              {[
                "Personally built Invoice OCR with FastAPI + React + Azure",
                "Deployed BOM Data Mapper to Azure App Service",
                "Fixed production bugs across live enterprise platform",
                "Used Claude Code to ship faster without cutting corners",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm text-zinc-400">
                  <span className="text-amber-500 mt-0.5 flex-shrink-0">→</span>
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Terminal */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-amber-500/70" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
              <span className="ml-3 text-xs font-mono text-zinc-600">
                kartik@macbook ~/products/invoice-ocr
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-6 space-y-1.5 min-h-[320px]">
              {lines.map((line, i) => (
                <TerminalLine key={i} line={line} show={visibleLines[i]} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
