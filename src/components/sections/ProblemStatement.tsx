"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";

export default function ProblemStatement() {
  const ref = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden" id="problem">
      {/* Parallax grid bg */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      {/* Phase label */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="phase-label">01 / Discover</span>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — section intro */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-xs tracking-[0.2em] uppercase text-zinc-600 font-mono mb-4">
              Phase 01 / Problem Statement
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
              Every product starts
              <br />
              <span className="amber-gradient-text italic">
                with a problem.
              </span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              So let&apos;s apply the same rigor I use at work to introduce
              myself. You have a hiring problem. I might be the solution. Let me
              walk you through my process.
            </p>
          </motion.div>

          {/* Right — PRD-style problem card */}
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40, rotate: 1 }}
            animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: -0.5, scale: 1.01 }}
            className="glass-card rounded-2xl p-8 relative"
          >
            {/* Card header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="text-xs font-mono text-red-400 uppercase tracking-widest">
                  P0 · Critical
                </span>
              </div>
              <span className="text-xs font-mono text-zinc-600">
                PRD-001
              </span>
            </div>

            {/* Problem */}
            <h3 className="text-xl font-semibold mb-4 text-zinc-100">
              Problem Statement
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Most PMs hand off a spec and wait. Products ship late, break in
              production, and miss the actual user need. The market needs a PM
              who closes the loop — from discovery to deployment.
            </p>

            {/* Metadata */}
            <div className="border-t border-white/[0.06] pt-6 grid grid-cols-2 gap-4 text-xs font-mono">
              {[
                { key: "Reporter", value: "Every CTO ever" },
                { key: "Priority", value: "P0 — Hire immediately" },
                { key: "Affected users", value: "Your entire product team" },
                { key: "Status", value: "🟢 Solution available" },
              ].map((row) => (
                <div key={row.key}>
                  <div className="text-zinc-600 mb-0.5">{row.key}</div>
                  <div className="text-zinc-300">{row.value}</div>
                </div>
              ))}
            </div>

            {/* Sticky note */}
            <motion.div
              animate={{ rotate: [2, -1, 2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-amber-400 text-zinc-950 text-xs font-medium px-3 py-2 rounded shadow-lg rotate-2"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              This is you reading this 👆
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
