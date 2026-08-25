"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Play } from "lucide-react";
import { DEMOS, type Demo } from "@/components/doc/demoData";
import { useDemoVideo } from "@/components/DemoVideoProvider";

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

export default function Demos() {
  const { openDemo } = useDemoVideo();

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
        {DEMOS.map((d) => (
          <DemoTile key={d.id} demo={d} onOpen={() => openDemo(d.id)} />
        ))}
      </div>

      <div className="notion-divider" />
    </section>
  );
}
