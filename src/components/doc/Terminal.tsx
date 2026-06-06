"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { ScrollReveal } from "@/components/ScrollReveal";

const lines = [
  { text: "$ # scoped the PRD, now building it", color: "#6e6e6e" },
  { text: "$ git status", color: "#0f7b6c" },
  { text: "  modified:  invoice-ocr/extraction.py", color: "#9b9b9b" },
  { text: "  modified:  invoice-ocr/approval_flow.tsx", color: "#9b9b9b" },
  { text: "$ pytest tests/ -q", color: "#0f7b6c" },
  { text: "✓ 41 passed in 6.2s", color: "#28c840" },
  { text: "$ git commit -m 'feat: confidence scoring + approval workflow'", color: "#0f7b6c" },
  { text: "$ git push origin main", color: "#0f7b6c" },
  { text: "✓ Shipped to production", color: "#28c840" },
  { text: "$ echo 'PRD to production — by the PM'", color: "#0f7b6c" },
  { text: "PRD to production — by the PM", color: "#c77d48" },
];

// Total characters in the full output
const ALL_TEXT = lines.map((l) => l.text).join("\n");
const TOTAL_CHARS = ALL_TEXT.length;

export default function Terminal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 40%"],
  });

  const [charCount, setCharCount] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const clamped = Math.min(1, Math.max(0, v));
    setCharCount(Math.floor(TOTAL_CHARS * clamped));
  });

  // Build rendered lines from charCount
  let remaining = charCount;
  const renderedLines: { text: string; color: string; done: boolean }[] = [];
  for (const line of lines) {
    if (remaining <= 0) break;
    const take = Math.min(remaining, line.text.length);
    renderedLines.push({ text: line.text.slice(0, take), color: line.color, done: take === line.text.length });
    remaining -= take + 1; // +1 for newline
  }

  const showCursor = charCount < TOTAL_CHARS;

  return (
    <section id="terminal" ref={sectionRef} className="py-6">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-[#d4d4d4]">
          <span>⚡</span> Live Demo
        </h2>
        <p className="text-[15px] text-[#6e6e6e] mb-4">
          Evidence that the PM actually opens a terminal. Scroll to watch it deploy. Not a GIF.
        </p>
      </ScrollReveal>

      {/* Terminal window */}
      <ScrollReveal>
        <div
          className="rounded-2xl overflow-hidden mb-4 shadow-lg"
          style={{
            background: "rgba(14, 14, 14, 0.95)",
            backdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05]"
            style={{ background: "rgba(30,30,30,0.8)" }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="text-[11px] text-[#6e6e6e] font-mono ml-2 flex-1 text-center -ml-10">
              kartik@macbook — zsh — invoice-ocr-prod
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-5 font-mono text-[13px] leading-[1.8] min-h-[260px]">
            {renderedLines.length === 0 ? (
              <span className="text-[#6e6e6e]">$ <span className="animate-pulse">_</span></span>
            ) : (
              renderedLines.map((line, i) => (
                <div key={i} style={{ color: line.color }}>
                  {line.text}
                  {i === renderedLines.length - 1 && showCursor && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
                      className="inline-block w-[7px] h-[14px] bg-[#d4d4d4] ml-0.5 align-middle"
                    />
                  )}
                </div>
              ))
            )}
          </div>

          {/* Status bar */}
          <div
            className="flex items-center gap-4 px-5 py-2 border-t border-white/[0.05] text-[11px] font-mono"
            style={{ background: "rgba(24,24,24,0.8)" }}
          >
            <span style={{ color: charCount >= TOTAL_CHARS ? "#28c840" : "#c77d48" }}>
              {charCount >= TOTAL_CHARS ? "● deployed" : "● deploying..."}
            </span>
            <span className="text-[#6e6e6e]">branch: main</span>
            <span className="text-[#6e6e6e] ml-auto">Azure App Service · East US</span>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="notion-callout">
          <div className="notion-callout-icon">🖥️</div>
          <div className="notion-callout-content">
            <strong>Yes, this is scroll-driven.</strong> Not a GIF. Not a timer.
            The terminal types as you scroll — same way Kartik ships: deliberate, line by line.
          </div>
        </div>
      </ScrollReveal>

      <div className="notion-divider" />
    </section>
  );
}
