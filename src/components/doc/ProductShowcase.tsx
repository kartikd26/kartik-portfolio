"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function ProductShowcase() {
  return (
    <section className="-mx-4 md:-mx-8 lg:-ml-[calc((100vw-720px)/2+1rem)] lg:w-screen">
      <ContainerScroll
        titleComponent={
          <div className="px-4">
            <p className="text-sm uppercase tracking-widest text-[#6e6e6e] mb-3">
              Built by the PM. Deployed to production.
            </p>
            <h2 className="text-3xl md:text-[4rem] font-bold leading-tight text-[#d4d4d4]"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Ships, not slides.
            </h2>
          </div>
        }
      >
        <div className="h-full w-full bg-[#0a0a0a] flex flex-col items-center justify-center p-4 md:p-8">
          {/* Terminal inside the MacBook frame */}
          <div className="w-full max-w-3xl rounded-xl overflow-hidden" style={{
            background: "rgba(25, 25, 25, 0.95)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}>
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06]"
              style={{ background: "rgba(40, 40, 40, 0.8)" }}
            >
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[10px] text-[#6e6e6e] font-mono ml-2">
                kartik@macbook — zsh
              </span>
            </div>

            {/* Terminal lines */}
            <div className="p-4 md:p-6 font-mono text-[11px] md:text-[13px] leading-relaxed space-y-1">
              <p><span className="text-[#529e72]">$</span> <span className="text-[#d4d4d4]">git log --oneline -5</span></p>
              <p className="text-[#9b9b9b]">a3f2d1c feat: add confidence scoring to invoice OCR</p>
              <p className="text-[#9b9b9b]">b7e4a2f fix: landed cost rounding in RFQ analytics</p>
              <p className="text-[#9b9b9b]">c9d1b3e feat: PDF zone extraction for BOM mapper</p>
              <p className="text-[#9b9b9b]">d2f8c4a refactor: assignment rules engine</p>
              <p className="text-[#9b9b9b]">e5a7d6b feat: quote analytics dashboard v2</p>
              <p className="mt-3"><span className="text-[#529e72]">$</span> <span className="text-[#d4d4d4]">pytest tests/ -q && git push origin main</span></p>
              <p className="text-[#28c840]">✓ 41 passed — shipped to production</p>
              <p className="mt-3"><span className="text-[#529e72]">$</span> <span className="text-[#d4d4d4]">whoami</span></p>
              <p className="text-[#c77d48]">{'{'}</p>
              <p className="text-[#c77d48] pl-4">&quot;role&quot;: &quot;product_manager&quot;,</p>
              <p className="text-[#c77d48] pl-4">&quot;also&quot;: &quot;scopes it, builds it, ships it&quot;,</p>
              <p className="text-[#c77d48] pl-4">&quot;tooling&quot;: &quot;claude_code&quot;</p>
              <p className="text-[#c77d48]">{'}'}</p>
              <p className="mt-3"><span className="text-[#529e72]">$</span> <span className="text-[#d4d4d4] cursor-blink">_</span></p>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
