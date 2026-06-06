"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import LiquidGlassCard from "@/components/LiquidGlassCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ExternalLink, Play, X } from "lucide-react";

const products = [
  {
    emoji: "🏗️",
    title: "AI Invoice OCR System",
    problem: "Clients spent hours keying invoice data by hand — slow, error-prone, unscalable.",
    solution: "Built an AI document-intelligence pipeline (FastAPI, React, Azure Document Intelligence) with confidence scoring and multi-level approval workflows.",
    impact: "Invoice processing dropped from manual hours to under 2 minutes — 90% less manual work.",
    metric: "90% manual work cut",
    tag: "notion-tag-orange",
    company: "FactWise",
    links: [
      { label: "Live at FactWise", href: "https://factwise.io", icon: "🌐" },
    ],
  },
  {
    emoji: "🗺️",
    title: "BOM Data Mapper",
    problem: "Every client's bill-of-materials arrived in a different column format — mapping them was manual and repetitive.",
    solution: "Built a visual column-mapping tool with fuzzy matching, PDF zone extraction, and reusable templates.",
    impact: "An enterprise client confirmed a 60% efficiency gain — worth INR 10–12L/year per deployment.",
    metric: "60% efficiency gain",
    tag: "notion-tag-green",
    company: "FactWise",
    links: [
      { label: "Live at FactWise", href: "https://factwise.io", icon: "🌐" },
    ],
  },
  {
    emoji: "📊",
    title: "RFQ Analytics Rebuild",
    problem: "The platform's most critical dashboard — vendor bid comparison — was broken and unusable.",
    solution: "Rebuilt it from the ground up: vendor bid aggregation, landed-cost calculations, real-time analytics.",
    impact: "Now a production-stable system used actively by 4 enterprise clients.",
    metric: "Broken → 4 clients live",
    tag: "notion-tag-blue",
    company: "FactWise",
    links: [
      { label: "Live at FactWise", href: "https://factwise.io", icon: "🌐" },
    ],
  },
  {
    emoji: "🧮",
    title: "CryptoTax Automation Pipeline",
    problem: "Crypto-tax filings were done by hand in Excel — a single client's file could take months.",
    solution: "Automated the full pipeline (cost-basis, gain/loss logic, Form 8949) with AI-assisted development, at 98–99% accuracy.",
    impact: "Files up to 80K line items now process in 2–3 hours. Scaled to 30+ clients and $1M+ in processed tax value.",
    metric: "Months → 2–3 hours",
    tag: "notion-tag-purple",
    company: "CryptoTax International",
    links: [
      { label: "CryptoTax International", href: "https://cryptotax.international", icon: "🌐" },
    ],
  },
];

function ProductCard({
  item,
  index,
  onVideoRequest,
}: {
  item: (typeof products)[0];
  index: number;
  onVideoRequest: (title: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 50%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y, willChange: "transform, opacity" }}>
      <LiquidGlassCard intensity={4}>
        <div className="p-5 flex items-start gap-4">
          <span className="text-2xl flex-shrink-0 mt-0.5">{item.emoji}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <h3 className="text-[15px] font-semibold text-[#d4d4d4]">{item.title}</h3>
              <span className="text-[11px] text-[#6e6e6e]">at {item.company}</span>
            </div>
            {/* Problem → Solution → Impact arc (scannable, per portfolio research) */}
            <div className="space-y-1.5 mb-3">
              <p className="text-[13px] leading-relaxed">
                <span className="text-[#be524b] font-medium">Problem · </span>
                <span className="text-[#9b9b9b]">{item.problem}</span>
              </p>
              <p className="text-[13px] leading-relaxed">
                <span className="text-[#5e87c9] font-medium">Built · </span>
                <span className="text-[#9b9b9b]">{item.solution}</span>
              </p>
              <p className="text-[13px] leading-relaxed">
                <span className="text-[#529e72] font-medium">Impact · </span>
                <span className="text-[#d4d4d4]">{item.impact}</span>
              </p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`notion-tag ${item.tag}`}>{item.metric}</span>
              {/* Links */}
              {item.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-white/[0.05] text-[#9b9b9b] hover:text-[#c77d48] hover:bg-white/[0.08] transition-colors border border-white/[0.06]"
                >
                  <span>{link.icon}</span>
                  {link.label}
                  <ExternalLink size={9} />
                </a>
              ))}
              {/* Video demo request button */}
              <button
                onClick={() => onVideoRequest(item.title)}
                className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-white/[0.05] text-[#9b9b9b] hover:text-[#c77d48] hover:bg-white/[0.08] transition-colors border border-white/[0.06]"
              >
                <Play size={9} className="fill-current" />
                Watch demo
              </button>
            </div>
          </div>
        </div>
      </LiquidGlassCard>
    </motion.div>
  );
}

/** Simple email-request modal for private demos */
function DemoRequestModal({ title, onClose }: { title: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-sm w-full rounded-2xl overflow-hidden"
        style={{
          background: "rgba(20,20,20,0.95)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
        }}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[15px] font-semibold text-[#d4d4d4]">Request Demo</div>
            <button onClick={onClose} className="text-[#6e6e6e] hover:text-[#d4d4d4] transition-colors">
              <X size={16} />
            </button>
          </div>
          <p className="text-[13px] text-[#6e6e6e] leading-relaxed mb-4">
            The <strong className="text-[#d4d4d4]">{title}</strong> demo includes live footage of real client data — so it stays off YouTube.
          </p>
          <p className="text-[13px] text-[#9b9b9b] leading-relaxed mb-5">
            Email me and I'll send a private link within the hour.
          </p>
          <a
            href={`mailto:kartikdaswani07@gmail.com?subject=Demo Request: ${encodeURIComponent(title)}`}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-[13px] font-medium text-[#0a0a0a] transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #c77d48, #d4922e)" }}
          >
            Request via Email
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Solution() {
  const [demoTitle, setDemoTitle] = useState<string | null>(null);

  return (
    <section id="solution" className="py-6">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-[#d4d4d4]">
          <span>💡</span> Proposed Solution
        </h2>
        <p className="text-[15px] text-[#d4d4d4] leading-relaxed mb-4">
          Hire Kartik Daswani. Specifically, here&apos;s what you get:
        </p>
      </ScrollReveal>

      <div className="space-y-3 mb-6">
        {products.map((item, i) => (
          <ProductCard
            key={item.title}
            item={item}
            index={i}
            onVideoRequest={(title) => setDemoTitle(title)}
          />
        ))}
      </div>

      <ScrollReveal>
        <div className="notion-callout">
          <div className="notion-callout-icon">🤔</div>
          <div className="notion-callout-content">
            <strong>Wait, the PM built these?</strong> Yes. Personally. With AI
            tools (Claude Code), shipped to production and maintained live.
            This isn&apos;t &quot;I supervised the build.&quot;
            It&apos;s &quot;I scoped it, built it, tested it, and shipped it.&quot;
          </div>
        </div>
      </ScrollReveal>

      <div className="notion-divider" />

      {/* Demo request modal */}
      {demoTitle && (
        <DemoRequestModal title={demoTitle} onClose={() => setDemoTitle(null)} />
      )}
    </section>
  );
}
