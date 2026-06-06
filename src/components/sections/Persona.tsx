"use client";

import { motion } from "motion/react";

export default function Persona() {
  return (
    <section className="relative py-32 overflow-hidden" id="about">
      {/* Phase label */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="phase-label">03 / Define</span>
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
              Phase 03 / Define
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
              Meet the
              <br />
              <span className="amber-gradient-text italic">solution.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Since every good product starts with a user persona, here&apos;s
              mine. I&apos;m Kartik — a CS engineer who went into product because
              I wanted to own outcomes, not just influence them.
            </p>
            <p className="text-zinc-500 leading-relaxed">
              I write PRDs during the day, push code at night, and debug
              production issues whenever they decide to happen. NMIMS B.Tech
              Computer Engineering, 8.65 GPA — relevant mostly because it means
              I can actually read a stack trace.
            </p>
          </motion.div>

          {/* Right — Persona card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card rounded-2xl p-8"
          >
            {/* Card title */}
            <div className="flex items-center justify-between mb-8">
              <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
                User Persona
              </div>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Avatar + name */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center text-zinc-950 font-bold text-xl">
                KD
              </div>
              <div>
                <div className="font-semibold text-zinc-100 text-lg">
                  Kartik Daswani
                </div>
                <div className="text-sm text-zinc-500">APM → PM · Mumbai</div>
              </div>
            </div>

            {/* Persona rows */}
            {[
              {
                label: "Goals",
                items: [
                  "Ship, not just spec",
                  "Own outcomes end-to-end",
                  "Build with AI, not just about it",
                ],
                color: "text-emerald-400",
                dot: "bg-emerald-400",
              },
              {
                label: "Pain Points (previous role)",
                items: [
                  '"Just write the PRD"',
                  "No deploy access",
                  "Spec → handoff → pray",
                ],
                color: "text-red-400",
                dot: "bg-red-400",
              },
              {
                label: "Behaviours",
                items: [
                  "Opens terminal at 11pm",
                  "Debugs prod bugs himself",
                  "Writes PRD AND the code",
                ],
                color: "text-amber-400",
                dot: "bg-amber-400",
              },
            ].map((section) => (
              <div key={section.label} className="mb-6">
                <div className={`text-xs font-mono uppercase tracking-widest mb-2 ${section.color}`}>
                  {section.label}
                </div>
                <div className="space-y-1.5">
                  {section.items.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-zinc-300">
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${section.dot}`} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Tech stack */}
            <div className="border-t border-white/[0.06] pt-6">
              <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-3">
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {["FastAPI", "React", "TypeScript", "Azure", "Python", "PostgreSQL", "Docker", "Claude Code"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
