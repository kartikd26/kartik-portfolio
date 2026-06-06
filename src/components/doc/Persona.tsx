"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LiquidGlassCard from "@/components/LiquidGlassCard";
import { ScrollReveal } from "@/components/ScrollReveal";

const details = [
  {
    title: "Background → USP",
    content: "B.Tech Computer Engineering (NMIMS, 8.65 GPA) — the CS foundation is the edge: a PM who reads the codebase, not just the roadmap.",
    color: "#2383e2",
  },
  {
    title: "Experience",
    content: "AI PM (FactWise) · Product Manager (CryptoTax) · PM Intern (Accion Labs)",
    color: "#0f7b6c",
  },
  {
    title: "Superpower",
    content: "Writes the PRD, builds the product, ships it, debugs it at 11pm",
    color: "#c77d48",
  },
  {
    title: "Looking For",
    content: "Associate Product Manager (APM) — early-career, high-ownership, AI-first product team.",
    color: "#9a6dd7",
  },
];

const traits = [
  {
    label: "Goals",
    color: "#0f7b6c",
    items: ["Ship, not just spec", "Own outcomes end-to-end", "Build with AI, not just about it"],
  },
  {
    label: "Frustrated By",
    color: "#e03e3e",
    items: ["Spec → handoff → pray", "PMs kept away from the build", "Ideas that die in review"],
  },
  {
    label: "Actual Behaviors",
    color: "#c77d48",
    items: ["Opens terminal at 11pm", "Debugs prod bugs himself", "Writes PRD AND the code"],
  },
];

const techStack = [
  { label: "FastAPI", color: "notion-tag-green" },
  { label: "React", color: "notion-tag-blue" },
  { label: "TypeScript", color: "notion-tag-blue" },
  { label: "Python", color: "notion-tag-green" },
  { label: "Azure", color: "notion-tag-blue" },
  { label: "PostgreSQL", color: "notion-tag-purple" },
  { label: "Docker", color: "notion-tag-default" },
  { label: "Claude Code", color: "notion-tag-orange" },
  { label: "AWS", color: "notion-tag-orange" },
];

function DetailReveal({ detail, index }: { detail: typeof details[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 55%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x, willChange: "transform, opacity" }}
      className="py-3 border-b border-white/[0.04] last:border-b-0"
    >
      <div className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: detail.color }}>
        {detail.title}
      </div>
      <div className="text-[14px] text-[#d4d4d4]">{detail.content}</div>
      {/* Animated underline */}
      <motion.div
        className="h-[1px] mt-2 rounded-full"
        style={{ width, background: detail.color, opacity: 0.3 }}
      />
    </motion.div>
  );
}

function TraitColumn({ trait, index }: { trait: typeof traits[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 60%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y, willChange: "transform, opacity" }}>
      <div className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: trait.color }}>
        {trait.label}
      </div>
      <ul className="space-y-1.5 text-[13px] text-[#6e6e6e]">
        {trait.items.map((item) => (
          <li key={item}>→ {item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Persona() {
  return (
    <section id="persona" className="py-6">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-[#d4d4d4]">
          <span>👤</span> User Persona
        </h2>
        <p className="text-[15px] text-[#6e6e6e] mb-4">
          Since every good product starts with a user persona, here&apos;s the
          candidate profile for the solution to your PM problem.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <LiquidGlassCard intensity={6} className="mb-4">
          {/* Header */}
          <div className="px-6 py-5 border-b border-white/[0.04]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#c77d48] to-[#d4922e] rounded-xl flex items-center justify-center text-[#0a0a0a] font-bold text-xl shadow-lg">
                KD
              </div>
              <div>
                <div className="text-xl font-semibold text-[#d4d4d4]">
                  Kartik Daswani
                </div>
                <div className="text-sm text-[#6e6e6e]">
                  AI PM at FactWise · CS Engineer · Mumbai
                </div>
              </div>
            </div>
          </div>

          {/* Details — each slides in from right */}
          <div className="px-6 py-2">
            {details.map((d, i) => (
              <DetailReveal key={d.title} detail={d} index={i} />
            ))}
          </div>

          {/* Traits — each column fades up */}
          <div className="px-6 py-4 border-t border-white/[0.04] grid md:grid-cols-3 gap-6">
            {traits.map((t, i) => (
              <TraitColumn key={t.label} trait={t} index={i} />
            ))}
          </div>

          {/* Tech stack */}
          <ScrollReveal>
            <div className="px-6 py-4 border-t border-white/[0.04]">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-[#6e6e6e] mb-2">Tech Stack</div>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((t) => (
                  <span key={t.label} className={`notion-tag ${t.color}`}>{t.label}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </LiquidGlassCard>
      </ScrollReveal>

      <div className="notion-divider" />
    </section>
  );
}
