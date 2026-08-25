"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Play, X, ExternalLink } from "lucide-react";

type Demo = {
  title: string;
  company: string;
  caption: string;
  metric: string;
  tag: string;
  kind: "local" | "drive";
  src: string; // local mp4 path, or Google Drive file id
};

const demos: Demo[] = [
  {
    title: "AI Invoice OCR System",
    company: "FactWise",
    caption:
      "Reads an invoice, scores how confident it is, and routes it through approval.",
    metric: "Hours to under 2 min",
    tag: "notion-tag-orange",
    kind: "local",
    src: "/demos/invoice-ocr.mp4",
  },
  {
    title: "BOM Data Mapper",
    company: "FactWise",
    caption:
      "Maps a messy supplier spreadsheet onto a clean schema with fuzzy matching.",
    metric: "60% efficiency gain",
    tag: "notion-tag-green",
    kind: "local",
    src: "/demos/bom-mapper.mp4",
  },
  {
    title: "Sales Call Analyzer",
    company: "Project",
    caption:
      "Transcribes and sentiment-scores sales calls to surface what actually converts.",
    metric: "500+ calls a month",
    tag: "notion-tag-blue",
    kind: "local",
    src: "/demos/sales-call-analyzer.mp4",
  },
  {
    title: "AI Interview Avatar",
    company: "Productathon, 1st place",
    caption:
      "An avatar that runs mock PM interviews and gives instant, personal feedback.",
    metric: "100+ mock interviews",
    tag: "notion-tag-purple",
    kind: "drive",
    src: "1fjRAZmYXzmSp31axSDShe0Rf3vGgNNiD",
  },
];

function DemoTile({ demo, onOpen }: { demo: Demo; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="group block w-full text-left rounded-xl overflow-hidden border border-white/[0.08] bg-[#141414] hover:border-[#c77d48]/50 transition-colors"
    >
      <div className="relative aspect-video bg-black/40 overflow-hidden">
        {demo.kind === "local" ? (
          <video
            src={`${demo.src}#t=0.6`}
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#2a2440] to-[#141414]" />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-black/55 border border-white/20 backdrop-blur-sm group-hover:bg-[#c77d48] group-hover:border-[#c77d48] transition-colors">
            <Play size={18} className="fill-white text-white ml-0.5" />
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <h3 className="text-[14px] font-semibold text-[#e4e4e4]">{demo.title}</h3>
          <span className="text-[11px] text-[#6e6e6e]">{demo.company}</span>
        </div>
        <p className="text-[12.5px] text-[#9b9b9b] leading-relaxed mb-2.5">
          {demo.caption}
        </p>
        <span className={`notion-tag ${demo.tag}`}>{demo.metric}</span>
      </div>
    </button>
  );
}

function VideoModal({ demo, onClose }: { demo: Demo; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.82)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.96, y: 16 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, y: 16 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/10"
        style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.6)" }}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
          <div className="text-[14px] font-semibold text-[#e4e4e4]">
            {demo.title}{" "}
            <span className="text-[#6e6e6e] font-normal">· {demo.company}</span>
          </div>
          <div className="flex items-center gap-3">
            {demo.kind === "drive" && (
              <a
                href={`https://drive.google.com/file/d/${demo.src}/view`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[12px] text-[#9b9b9b] hover:text-[#c77d48] transition-colors"
              >
                Open in Drive <ExternalLink size={12} />
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close"
              className="text-[#6e6e6e] hover:text-[#d4d4d4] transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        <div className="aspect-video bg-black">
          {demo.kind === "local" ? (
            <video
              src={demo.src}
              controls
              autoPlay
              playsInline
              className="w-full h-full"
            />
          ) : (
            <iframe
              title={demo.title}
              src={`https://drive.google.com/file/d/${demo.src}/preview`}
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full border-0"
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Demos() {
  const [active, setActive] = useState<Demo | null>(null);

  return (
    <section id="demos" className="py-6">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#d4d4d4]">
          <span>🎬</span> See it running
        </h2>
        <p className="text-[15px] text-[#6e6e6e] mb-5">
          Real screen recordings of products I built and shipped. Click to play.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        {demos.map((d) => (
          <DemoTile key={d.title} demo={d} onOpen={() => setActive(d)} />
        ))}
      </div>

      <div className="notion-divider" />

      <AnimatePresence>
        {active && <VideoModal demo={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
