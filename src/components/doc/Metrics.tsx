"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import LiquidGlassCard from "@/components/LiquidGlassCard";
import { ScrollReveal } from "@/components/ScrollReveal";

const metrics = [
  { value: 20, suffix: "+", label: "Features shipped", sub: "PRD → production" },
  { value: 90, suffix: "%", label: "Manual work cut", sub: "Invoice OCR" },
  { value: 2, suffix: "", label: "Full products built", sub: "Solo, shipped to production" },
  { value: 60, suffix: "%", label: "Efficiency gain", sub: "BOM Mapper, client-validated" },
  { value: 1, prefix: "$", suffix: "M+", label: "Tax value processed", sub: "CryptoTax · 30+ clients" },
  { value: 1, suffix: "st", label: "Productathon", sub: "Won 1st place" },
];

function AnimatedMetric({
  m,
  index,
}: {
  m: (typeof metrics)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 50%"],
  });

  // Animate counter from 0 → value based on scroll position
  const [displayValue, setDisplayValue] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const clamped = Math.min(1, Math.max(0, v));
    setDisplayValue(Math.round(m.value * clamped));
  });

  // Each card fades up individually
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [30, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, willChange: "transform, opacity" }}
    >
      <LiquidGlassCard intensity={3} className="h-full">
        <div className="p-4 text-center">
          <div className="text-3xl font-bold font-mono text-[#c77d48] leading-none mb-1">
            {"prefix" in m ? (m as { prefix?: string }).prefix : ""}
            {displayValue}
            {m.suffix}
          </div>
          <div className="text-[13px] text-[#d4d4d4] font-medium">{m.label}</div>
          <div className="text-[11px] text-[#9b9b9b] mt-0.5">{m.sub}</div>
        </div>
      </LiquidGlassCard>
    </motion.div>
  );
}

export default function Metrics() {
  return (
    <section id="metrics" className="py-6">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-[#d4d4d4]">
          <span>📊</span> Success Metrics
        </h2>
        <p className="text-[15px] text-[#6e6e6e] mb-4">
          Every number here is a shipped product, not a Jira ticket that got
          moved to &quot;Done&quot; without anyone checking.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        {metrics.map((m, i) => (
          <AnimatedMetric key={m.label} m={m} index={i} />
        ))}
      </div>

      <ScrollReveal>
        <div className="notion-callout">
          <div className="notion-callout-icon">📈</div>
          <div className="notion-callout-content">
            <strong>Note on methodology:</strong> These metrics are from production
            systems used by real clients, not from a demo that crashed after the
            investor meeting.
          </div>
        </div>
      </ScrollReveal>

      <div className="notion-divider" />
    </section>
  );
}
