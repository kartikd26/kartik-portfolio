"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import LiquidGlassCard from "@/components/LiquidGlassCard";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const properties = [
  { key: "Status", value: "Open to Hire", tag: "notion-tag-green", emoji: "🟢" },
  { key: "Priority", value: "P0 — Critical", tag: "notion-tag-red" },
  { key: "Owner", value: "Kartik Daswani" },
  { key: "Role", value: "AI Product Manager" },
  { key: "Location", value: "Mumbai, India" },
  { key: "Version", value: "v2.0 — June 2026" },
  {
    key: "Tags",
    value: null,
    tags: [
      { label: "PM who ships", color: "notion-tag-orange" },
      { label: "CS Engineer", color: "notion-tag-blue" },
      { label: "AI Builder", color: "notion-tag-purple" },
      { label: "B2B SaaS", color: "notion-tag-green" },
    ],
  },
];

export default function DocHeader() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.97]);

  return (
    <section id="header" ref={sectionRef} className="pt-6 pb-2">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="breadcrumb mb-6"
      >
        <span>Kartik&apos;s Portfolio</span>
        <span className="breadcrumb-sep">/</span>
        <span className="text-[#6e6e6e]">Hire Me — PRD</span>
      </motion.div>

      {/* Notion-style page header — big emoji icon + plain title + subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
        className="mb-6"
      >
        <div className="text-[64px] leading-none mb-3">📋</div>
        <h1 className="text-4xl md:text-[44px] font-bold leading-tight tracking-tight text-[#d4d4d4]">
          Hiring Kartik Daswani
        </h1>

        {/* Positioning line — removes all doubt about what kind of PM, in one line */}
        <p className="mt-2 text-[17px] font-medium text-[#d4d4d4]">
          AI Product Manager · B2B SaaS &amp; Fintech · ships full-stack products with AI
        </p>

        {/* Hook metrics — one glance proves real impact (6-second test) */}
        <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] text-[#9b9b9b]">
          <span><span className="text-[#d4d4d4] font-semibold">20+</span> products &amp; features shipped</span>
          <span className="text-[#4a4a4a]">·</span>
          <span><span className="text-[#d4d4d4] font-semibold">$1M+</span> processed</span>
          <span className="text-[#4a4a4a]">·</span>
          <span><span className="text-[#d4d4d4] font-semibold">90%</span> manual work cut</span>
        </div>

        <p className="mt-3 text-[#9b9b9b] max-w-xl text-[15px] leading-relaxed">
          A Product Requirements Document for your next hire.{" "}
          Status: <span className="text-[#529e72] font-medium">Open to Hire</span>.{" "}
          Priority: <span className="text-[#be524b] font-medium">P0</span>.
        </p>
      </motion.div>

      {/* Interactive 3D robot — embedded media block (Notion-style dark embed) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="mb-8"
      >
        <Card className="w-full h-[340px] md:h-[400px] bg-[#191919] border border-white/[0.094] rounded-xl relative overflow-hidden">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" size={300} />
          <div className="flex h-full">
            <div className="flex-1 p-6 md:p-8 relative z-10 flex flex-col justify-center pointer-events-none">
              <div className="text-[11px] uppercase tracking-widest text-[#9b9b9b] mb-2">
                The candidate
              </div>
              <div className="text-2xl md:text-3xl font-semibold text-white leading-snug max-w-xs">
                A PM who opens the terminal and ships.
              </div>
            </div>
            <div className="flex-1 relative hidden md:block">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
                globalMouseTracking
              />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Property table — glass card with staggered row entrance */}
      <motion.div
        style={{
          opacity: titleOpacity,
          y: titleY,
          scale: titleScale,
          willChange: "transform, opacity",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <LiquidGlassCard intensity={4}>
            <div className="px-5 py-4 space-y-1.5">
              {properties.map((row, i) => (
                <motion.div
                  key={row.key}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.7 + i * 0.06,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-4 py-1.5 text-sm hover:bg-white/[0.02] rounded-lg px-2 -mx-2 transition-colors"
                >
                  <span className="w-32 flex-shrink-0 text-[#6e6e6e] text-[13px]">
                    {row.key}
                  </span>
                  {row.tags ? (
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {row.tags.map((t) => (
                        <span key={t.label} className={`notion-tag ${t.color}`}>
                          {t.label}
                        </span>
                      ))}
                    </div>
                  ) : row.tag ? (
                    <span className={`notion-tag ${row.tag}`}>
                      {row.emoji && `${row.emoji} `}{row.value}
                    </span>
                  ) : (
                    <span className="text-[#d4d4d4]">{row.value}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </LiquidGlassCard>
        </motion.div>
      </motion.div>

      <div className="notion-divider" />
    </section>
  );
}
