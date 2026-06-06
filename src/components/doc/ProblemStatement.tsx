"use client";

import { ScrollReveal, TextReveal } from "@/components/ScrollReveal";
import LiquidGlassCard from "@/components/LiquidGlassCard";

export default function ProblemStatement() {
  return (
    <section id="problem" className="py-6">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-[#d4d4d4]">
          <span className="text-[#be524b]">🔴</span> Problem Statement
        </h2>
      </ScrollReveal>

      {/* TL;DR callout — glass */}
      <ScrollReveal>
        <LiquidGlassCard intensity={3} className="mb-4">
          <div className="p-4 flex gap-3 items-start">
            <span className="text-xl flex-shrink-0">⚠️</span>
            <div className="text-[15px] leading-relaxed text-[#d4d4d4]">
              <strong>TL;DR:</strong> Most product managers cannot ship a product.
              They can write a doc about one. They can present slides about one.
              They can schedule meetings about one. But actually building,
              deploying, and debugging a product in production? That&apos;s where
              it falls apart.
            </div>
          </div>
        </LiquidGlassCard>
      </ScrollReveal>

      {/* Apple-style text reveal — words light up as you scroll */}
      <div className="mb-4 mt-4">
        <TextReveal
          text="The hiring pipeline for product managers is broken. Here's why:"
          className="text-[15px] leading-relaxed text-[#d4d4d4]"
        />
      </div>

      {/* Real industry data — grounds the problem (Gartner + Standish) */}
      <ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <div className="rounded-lg border border-white/[0.094] bg-[#202020] p-4">
            <div className="text-2xl font-bold text-[#be524b] leading-none mb-1">45%</div>
            <div className="text-[13px] text-[#9b9b9b] leading-snug">
              of product launches ship late.{" "}
              <span className="text-[#6e6e6e]">— Gartner, 2019</span>
            </div>
          </div>
          <div className="rounded-lg border border-white/[0.094] bg-[#202020] p-4">
            <div className="text-2xl font-bold text-[#be524b] leading-none mb-1">45%</div>
            <div className="text-[13px] text-[#9b9b9b] leading-snug">
              of shipped features are never used.{" "}
              <span className="text-[#6e6e6e]">— Standish CHAOS</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <ul className="space-y-2.5 text-[15px] leading-relaxed text-[#9b9b9b] mb-4">
          <li className="flex gap-2.5">
            <span className="text-[#be524b] flex-shrink-0 mt-0.5">1.</span>
            <span>
              <strong className="text-[#d4d4d4]">The Handoff Gap:</strong> PM
              writes spec → throws over wall → engineer builds something
              different → PM blames engineer → feature ships 3 months late →
              users hate it. Repeat.
            </span>
          </li>
          <li className="flex gap-2.5">
            <span className="text-[#be524b] flex-shrink-0 mt-0.5">2.</span>
            <span>
              <strong className="text-[#d4d4d4]">The Technical Debt of Ignorance:</strong>{" "}
              A PM who can&apos;t read a stack trace makes decisions that sound
              smart in a meeting and cost the team 3 sprints.
            </span>
          </li>
          <li className="flex gap-2.5">
            <span className="text-[#be524b] flex-shrink-0 mt-0.5">3.</span>
            <span>
              <strong className="text-[#d4d4d4]">The Spec Fantasy:</strong> The
              PRD describes a product that doesn&apos;t exist. It won&apos;t
              exist. It can&apos;t exist. But it looks great in Notion.
            </span>
          </li>
        </ul>
      </ScrollReveal>

      {/* Quote — glass */}
      <ScrollReveal>
        <LiquidGlassCard intensity={3} className="mb-4">
          <div className="p-4 border-l-2 border-[#c77d48]">
            <p className="text-[15px] leading-relaxed text-[#d4d4d4] italic">
              The common failure mode: a PM writes a beautiful PRD, but the spec
              and the shipped product end up as two completely different things.
            </p>
            <p className="text-[13px] text-[#6e6e6e] mt-2">
              — The gap this portfolio is built to close.
            </p>
          </div>
        </LiquidGlassCard>
      </ScrollReveal>

      {/* Hypothesis callout — glass */}
      <ScrollReveal>
        <LiquidGlassCard intensity={3}>
          <div className="p-4 flex gap-3 items-start">
            <span className="text-xl flex-shrink-0">💡</span>
            <div className="text-[15px] leading-relaxed text-[#d4d4d4]">
              <strong>Hypothesis:</strong> What if the PM could also... build the
              product? Like, literally. Write the code. Deploy it. Debug it at
              11pm when it breaks. Radical idea, I know.
            </div>
          </div>
        </LiquidGlassCard>
      </ScrollReveal>

      <div className="notion-divider" />
    </section>
  );
}
