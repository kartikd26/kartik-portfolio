"use client";

import { motion } from "framer-motion";
import LiquidGlassCard from "@/components/LiquidGlassCard";
import { ScrollReveal } from "@/components/ScrollReveal";

const interviews = [
  {
    role: "Hiring Manager",
    co: "Series B SaaS",
    quote: "I need someone who can talk to engineers as an equal, not a translator standing between us and the user.",
    need: "Technical fluency",
    color: "#c77d48",
  },
  {
    role: "CTO",
    co: "B2B Startup",
    quote: "Show me someone who has actually deployed something to production. Not just reviewed a deploy. Deployed it.",
    need: "Shipping ability",
    color: "#0f7b6c",
  },
  {
    role: "Founder",
    co: "AI Product Co.",
    quote: "I want a PM who can open a terminal. Who understands why something is technically hard — not just that it is.",
    need: "Technical depth",
    color: "#2383e2",
  },
  {
    role: "VP Product",
    co: "Enterprise SaaS",
    quote: "Stop sending me PMs who need a 'technical PM' to co-pilot them. I need one PM who does both.",
    need: "Full-stack PM",
    color: "#9f6bac",
  },
];

function StackCard({ interview, index }: { interview: typeof interviews[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
    >
      <LiquidGlassCard className="mb-3">
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-[15px] font-semibold text-[#d4d4d4]">{interview.role}</div>
              <div className="text-[11px] text-[#6e6e6e]">{interview.co}</div>
            </div>
            <span className="notion-tag notion-tag-orange">{interview.need}</span>
          </div>
          <div className="relative pl-4">
            <div
              className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
              style={{ background: interview.color }}
            />
            <p className="text-[14px] text-[#9b9b9b] leading-relaxed italic">
              &ldquo;{interview.quote}&rdquo;
            </p>
          </div>
        </div>
      </LiquidGlassCard>
    </motion.div>
  );
}

export default function UserResearch() {
  return (
    <section id="research" className="py-6">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-[#d4d4d4]">
          <span>🔍</span> User Research
        </h2>
        <p className="text-[15px] text-[#9b9b9b] mb-2">
          A PM&apos;s first move is primary research. So here&apos;s that move
          turned on the &ldquo;product&rdquo; this page is really about — the hire —
          to show how I&apos;d frame findings, not to pass off real interviews.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <LiquidGlassCard intensity={3} className="mb-6">
          <div className="p-4 flex gap-3 items-start">
            <span className="text-xl flex-shrink-0">📌</span>
            <div className="text-[15px] leading-relaxed text-[#d4d4d4]">
              <span className="notion-tag notion-tag-default mr-1.5">Illustrative</span>
              The voices below are <strong>composites</strong>, not quoted individuals —
              the recurring &ldquo;jobs to be done&rdquo; hiring teams describe, synthesized
              into the four needs that keep surfacing. (My real user research lives inside
              the PRDs further down — surveys, interviews, and personas with actual data.)
            </div>
          </div>
        </LiquidGlassCard>
      </ScrollReveal>

      {/* Stacking interview cards — each scales up and rotates in as you scroll */}
      <div className="space-y-2">
        {interviews.map((interview, i) => (
          <StackCard key={i} interview={interview} index={i} />
        ))}
      </div>

      <ScrollReveal>
        <LiquidGlassCard intensity={3} className="mt-6">
          <div className="p-4 flex gap-3 items-start">
            <span className="text-xl flex-shrink-0">🎯</span>
            <div className="text-[15px] leading-relaxed text-[#d4d4d4]">
              <strong>Synthesis:</strong> four different needs, one underlying job —
              hiring teams want a PM who doesn&apos;t just own the roadmap but owns the
              repo: technical enough to talk to engineers as equals, and able to ship,
              not just spec. Every section below is structured to answer that job directly.
            </div>
          </div>
        </LiquidGlassCard>
      </ScrollReveal>

      <div className="notion-divider" />
    </section>
  );
}
