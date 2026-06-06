"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import LiquidGlassCard from "@/components/LiquidGlassCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ExternalLink, Play, X, FileText } from "lucide-react";

// Real, downloadable PRDs — full documents in /public/prds.
// Featured 4 first (AI-relevant + most polished), then the rest.
const prds = [
  {
    title: "AI Ad Verification Tool",
    tag: "AI/ML",
    tagColor: "notion-tag-orange",
    desc: "Combating $120B/yr digital ad fraud on Instagram. Market sizing, ad-system teardown, algorithm analysis, AI fraud-detection design.",
    link: "/prds/ai-ad-verification.pdf",
    linkLabel: "Read PRD",
  },
  {
    title: "AI-Aided Income Tax Filing",
    tag: "AI/ML",
    tagColor: "notion-tag-orange",
    desc: "Simplifying ITR filing for 72M+ Indian taxpayers. Market research, competitor analysis, user surveys, personas, AI-assisted deduction guidance.",
    link: "/prds/ai-income-tax-filing.pdf",
    linkLabel: "Read PRD",
  },
  {
    title: "Zepto — Enhanced Grocery Experience",
    tag: "Product",
    tagColor: "notion-tag-purple",
    desc: "Voice commands, list uploads, shareable cart links for q-commerce. Full FRD: system design, edge cases, roll-out plan, metrics.",
    link: "/prds/zepto-frd.pdf",
    linkLabel: "Read PRD",
  },
  {
    title: "Sukoon — Gamified Mental Health App",
    tag: "Product",
    tagColor: "notion-tag-green",
    desc: "0→1 mental wellness app with XP/level progression and an AI companion. Full gamification system design, competitor analysis, user research.",
    link: "/prds/sukoon.pdf",
    linkLabel: "Read PRD",
  },
  {
    title: "Credit-Pesa",
    tag: "Fintech",
    tagColor: "notion-tag-blue",
    desc: "Embedded short-term credit on M-Pesa for financial inclusion in Africa. McKinsey-sourced market sizing, regulatory landscape, solution design.",
    link: "/prds/credit-pesa.pdf",
    linkLabel: "Read PRD",
  },
  {
    title: "Traffic Decongestion",
    tag: "Civic Tech",
    tagColor: "notion-tag-default",
    desc: "Real-time adaptive traffic management for Indian cities. Root-cause analysis, international benchmarking, user interviews, wireframes.",
    link: "/prds/traffic-decongestion.pdf",
    linkLabel: "Read PRD",
  },
  {
    title: "Shopify Analytics Dashboard",
    tag: "Analytics",
    tagColor: "notion-tag-blue",
    desc: "Customizable merchant analytics for an e-commerce platform. Market analysis ($4.8B→$27B), KPI framework, dashboard design.",
    link: "/prds/shopify-analytics.pdf",
    linkLabel: "Read PRD",
  },
];

const competitions = [
  {
    emoji: "🏆",
    title: "Productathon — 1st Place",
    desc: "Won first place by leading a team to a solution that cut peer workloads by 90%.",
    tag: "1st Place",
    tagColor: "notion-tag-orange",
    link: "https://linkedin.com/in/kartik-daswani",
    linkLabel: "View on LinkedIn",
  },
  {
    emoji: "🦈",
    title: "VC Pitch Competition — 2nd Place",
    desc: "Pitched a market-ready product concept to a panel of judges and placed 2nd.",
    tag: "2nd Place",
    tagColor: "notion-tag-blue",
    link: "https://linkedin.com/in/kartik-daswani",
    linkLabel: "View on LinkedIn",
  },
];

// Video demos — use real YouTube IDs when available
// Currently using placeholder "request demo" flow for confidentiality
const demos = [
  {
    title: "Sales Call Analyzer — Full Demo",
    duration: "End-to-end",
    desc: "Real footage: automated transcription and sentiment analysis pipeline processing a sales call end to end.",
    youtubeId: null as string | null,
    videoSrc: "/demos/sales-call-analyzer.mp4" as string | null,
    thumbnail: null as string | null,
  },
  {
    title: "Invoice OCR — Full Demo",
    duration: "Private",
    desc: "Live footage: uploading a real vendor invoice, watching OCR extract fields, approval workflow triggering automatically. Contains client data — request access.",
    youtubeId: null as string | null,
    videoSrc: null as string | null,
    thumbnail: null as string | null,
  },
  {
    title: "BOM Mapper — Walkthrough",
    duration: "Private",
    desc: "Mapping a multi-column BOM file to the system schema with fuzzy matching and live DigiKey/Mouser validation. Contains client data — request access.",
    youtubeId: null as string | null,
    videoSrc: null as string | null,
    thumbnail: null as string | null,
  },
];

function VideoCard({ demo, onRequest }: { demo: typeof demos[0]; onRequest: () => void }) {
  const [hovering, setHovering] = useState(false);

  if (demo.videoSrc) {
    // Real, public demo — play natively
    return (
      <div className="rounded-xl overflow-hidden aspect-video bg-black border border-white/[0.094]">
        <video
          src={demo.videoSrc}
          controls
          preload="metadata"
          className="w-full h-full"
        />
      </div>
    );
  }

  if (demo.youtubeId) {
    // Actual YouTube embed if ID is provided
    return (
      <div className="rounded-xl overflow-hidden aspect-video bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${demo.youtubeId}`}
          title={demo.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  return (
    <motion.button
      className="w-full text-left rounded-xl overflow-hidden relative group"
      style={{
        background: "rgba(20,20,20,0.6)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      onHoverStart={() => setHovering(true)}
      onHoverEnd={() => setHovering(false)}
      onClick={onRequest}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      {/* Fake video thumbnail */}
      <div
        className="aspect-video flex items-center justify-center relative"
        style={{ background: "linear-gradient(135deg, rgba(232,168,73,0.08), rgba(77,171,154,0.08))" }}
      >
        {/* Fake scanlines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)",
        }} />
        {/* Play button */}
        <motion.div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          animate={{ scale: hovering ? 1.1 : 1 }}
          style={{ background: "rgba(232,168,73,0.15)", border: "1.5px solid rgba(232,168,73,0.3)" }}
        >
          <Play size={20} className="text-[#c77d48] fill-current ml-0.5" />
        </motion.div>
        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 text-[11px] font-mono text-[#9b9b9b] bg-white/70 px-1.5 py-0.5 rounded">
          {demo.duration}
        </div>
        {/* Private badge */}
        <div className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-black/60 text-[#6e6e6e] border border-white/[0.06]">
          🔒 Private — request access
        </div>
      </div>
      <div className="p-3">
        <div className="text-[13px] font-medium text-[#d4d4d4] mb-0.5">{demo.title}</div>
        <div className="text-[12px] text-[#6e6e6e] leading-relaxed">{demo.desc}</div>
      </div>
    </motion.button>
  );
}

function DemoRequestModal({ title, onClose }: { title: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(10px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-sm w-full rounded-2xl overflow-hidden"
        style={{
          background: "rgba(18,18,18,0.98)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
        }}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[15px] font-semibold text-[#d4d4d4]">🎬 Request Demo Access</div>
            <button onClick={onClose} className="text-[#6e6e6e] hover:text-[#d4d4d4] transition-colors p-1">
              <X size={15} />
            </button>
          </div>
          <p className="text-[13px] text-[#6e6e6e] leading-relaxed mb-2">
            <strong className="text-[#d4d4d4]">{title}</strong> shows real client data — so it stays off YouTube.
          </p>
          <p className="text-[13px] text-[#9b9b9b] leading-relaxed mb-5">
            Email me and I'll send a private link within the hour.
          </p>
          <a
            href={`mailto:kartikdaswani07@gmail.com?subject=Demo Request: ${encodeURIComponent(title)}&body=Hi Kartik, I'd like to see the demo for ${encodeURIComponent(title)}.`}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-[13px] font-medium text-[#0a0a0a] transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #c77d48, #d4922e)" }}
          >
            Request via Email →
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Toggle({
  title,
  emoji,
  children,
  defaultOpen = false,
}: {
  title: string;
  emoji: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="notion-toggle">
      <button onClick={() => setOpen(!open)} className="notion-toggle-header w-full">
        <span className={`notion-toggle-arrow ${open ? "notion-toggle-arrow-open" : ""}`}>▶</span>
        <span className="text-lg mr-2">{emoji}</span>
        <span className="text-[15px] font-medium text-[#d4d4d4]">{title}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="notion-toggle-content">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Parallax layer wrapper
function ParallaxLayer({ speed = 0.2, children }: { speed?: number; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * -60]);

  return (
    <motion.div ref={ref} style={{ y, willChange: "transform" }}>
      {children}
    </motion.div>
  );
}

export default function ProductThinking() {
  const [demoTitle, setDemoTitle] = useState<string | null>(null);

  return (
    <section id="thinking" className="py-6">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-[#d4d4d4]">
          <span>🧠</span> Product Thinking
        </h2>
        <p className="text-[15px] text-[#6e6e6e] mb-4">
          PRDs, competitions, and demos. Proof that the PM thinks before building — and then builds anyway.
        </p>
      </ScrollReveal>

      {/* PRDs — each row is a real link */}
      <ParallaxLayer speed={0.15}>
        <ScrollReveal>
          <Toggle title="PRDs Written (7)" emoji="📝" defaultOpen>
            <div className="space-y-2">
              {prds.map((prd) => (
                <div
                  key={prd.title}
                  className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-white/[0.02] transition-colors group"
                >
                  <FileText size={13} className="text-[#6e6e6e] flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] text-[#d4d4d4] truncate">{prd.title}</div>
                    <div className="text-[11px] text-[#6e6e6e] leading-snug mt-0.5 hidden group-hover:block">
                      {prd.desc}
                    </div>
                  </div>
                  <span className={`notion-tag ${prd.tagColor} flex-shrink-0`}>{prd.tag}</span>
                  <a
                    href={prd.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 text-[11px] text-[#9b9b9b] hover:text-[#c77d48] transition-colors flex items-center gap-1"
                  >
                    {prd.linkLabel} <ExternalLink size={9} />
                  </a>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#6e6e6e] mt-3 pl-2">
              Full PRDs — open and read each one. Hover a row to expand its description.
            </p>
          </Toggle>
        </ScrollReveal>
      </ParallaxLayer>

      {/* Competitions */}
      <ParallaxLayer speed={0.1}>
        <ScrollReveal>
          <Toggle title="Competitions (2 wins)" emoji="🏅">
            <div className="space-y-3">
              {competitions.map((c) => (
                <LiquidGlassCard key={c.title} intensity={4}>
                  <div className="flex items-start gap-3 p-4">
                    <span className="text-2xl">{c.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-[14px] font-semibold text-[#d4d4d4]">{c.title}</span>
                        <span className={`notion-tag ${c.tagColor}`}>{c.tag}</span>
                      </div>
                      <p className="text-[13px] text-[#6e6e6e] leading-relaxed mb-2">{c.desc}</p>
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-[#c77d48] hover:underline"
                      >
                        {c.linkLabel} <ExternalLink size={9} />
                      </a>
                    </div>
                  </div>
                </LiquidGlassCard>
              ))}
            </div>
          </Toggle>
        </ScrollReveal>
      </ParallaxLayer>

      {/* Video Demos */}
      <ParallaxLayer speed={0.05}>
        <ScrollReveal>
          <Toggle title="Video Demos (3)" emoji="🎬" defaultOpen={false}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              {demos.map((d) => (
                <VideoCard key={d.title} demo={d} onRequest={() => setDemoTitle(d.title)} />
              ))}
            </div>
            <div className="flex items-start gap-2 text-[12px] text-[#6e6e6e] mt-1 pl-1">
              <span>🔒</span>
              <span>
                Demos contain real client data — kept private out of respect for confidentiality, not lack of footage.
                Email for access: <a href="mailto:kartikdaswani07@gmail.com" className="text-[#c77d48] hover:underline">kartikdaswani07@gmail.com</a>
              </span>
            </div>
          </Toggle>
        </ScrollReveal>
      </ParallaxLayer>

      <ScrollReveal>
        <div className="notion-callout mt-4">
          <div className="notion-callout-icon">💡</div>
          <div className="notion-callout-content">
            <strong>The full picture:</strong> 7 PRDs written, 20+ features and 2 full products shipped to production, 2 competition wins, 3 video demos.
            This isn&apos;t a portfolio — it&apos;s a shipping log.
          </div>
        </div>
      </ScrollReveal>

      <div className="notion-divider" />

      <AnimatePresence>
        {demoTitle && (
          <DemoRequestModal title={demoTitle} onClose={() => setDemoTitle(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
