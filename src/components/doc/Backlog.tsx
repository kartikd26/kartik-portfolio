"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { TracingBeam, TracingBeamItem } from "@/components/ui/tracing-beam";
import LiquidGlassCard from "@/components/LiquidGlassCard";
import { ExternalLink, Play } from "lucide-react";

const backlog = [
  {
    id: "CASE-001",
    title: "AI Invoice OCR System",
    status: "Shipped",
    statusColor: "notion-tag-green",
    priority: "P0",
    impact: "90% reduction in manual work",
    stack: ["FastAPI", "React", "Azure Doc Intelligence"],
    company: "FactWise",
    desc: "End-to-end invoice processing: OCR extraction, confidence scoring, multi-level approval workflows. Replaced hours of manual data entry with sub-2-minute automated pipeline.",
    links: [
      { label: "Live product", href: "https://factwise.io", icon: <ExternalLink size={10} /> },
      { label: "Request demo", href: "mailto:kartikdaswani07@gmail.com?subject=Demo Request: Invoice OCR System", icon: <Play size={10} className="fill-current" /> },
    ],
  },
  {
    id: "CASE-002",
    title: "RFQ Analytics Rebuild",
    status: "Shipped",
    statusColor: "notion-tag-green",
    priority: "P0",
    impact: "Critical system → stable",
    stack: ["React", "TypeScript", "PostgreSQL"],
    company: "FactWise",
    desc: "The platform's most critical dashboard was broken beyond repair. Rebuilt from scratch — vendor bid aggregation, landed cost calculations, real-time analytics. Now used actively by 4 enterprise clients.",
    links: [
      { label: "Live product", href: "https://factwise.io", icon: <ExternalLink size={10} /> },
      { label: "Request demo", href: "mailto:kartikdaswani07@gmail.com?subject=Demo Request: RFQ Analytics", icon: <Play size={10} className="fill-current" /> },
    ],
  },
  {
    id: "CASE-003",
    title: "BOM Data Mapper",
    status: "Shipped",
    statusColor: "notion-tag-green",
    priority: "P1",
    impact: "60% efficiency gain",
    stack: ["React", "Python", "PDF extraction"],
    company: "FactWise",
    desc: "Visual column mapping tool with fuzzy matching, PDF zone extraction, reusable templates. Enterprise client confirmed efficiency gain worth INR 10–12L/year per deployment.",
    links: [
      { label: "Live product", href: "https://factwise.io", icon: <ExternalLink size={10} /> },
      { label: "Request demo", href: "mailto:kartikdaswani07@gmail.com?subject=Demo Request: BOM Mapper", icon: <Play size={10} className="fill-current" /> },
    ],
  },
  {
    id: "CASE-004",
    title: "CryptoTax Automation Pipeline",
    status: "Shipped",
    statusColor: "notion-tag-green",
    priority: "P0",
    impact: "Months → 2–3 hours",
    stack: ["Python", "Web scraping", "AI-assisted dev"],
    company: "CryptoTax International",
    desc: "Automated the full crypto-tax pipeline — cost-basis, gain/loss logic, Form 8949 generation. Processes files up to 80K line items in 2–3 hours vs. months manually, at 98–99% accuracy. Scaled to 30+ clients and $1M+ in processed tax value.",
    links: [
      { label: "CryptoTax.international", href: "https://cryptotax.international", icon: <ExternalLink size={10} /> },
    ],
  },
];

export default function Backlog() {
  return (
    <section id="backlog" className="py-6">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-[#d4d4d4]">
          <span>📋</span> Shipped Backlog
        </h2>
        <p className="text-[15px] text-[#6e6e6e] mb-2">
          Status:{" "}
          <span className="notion-inline-code">All items shipped to production</span>
          {" "}· Sprint: Every sprint since day 1
        </p>
        <div className="notion-callout mb-6">
          <div className="notion-callout-icon">📌</div>
          <div className="notion-callout-content">
            These aren&apos;t &quot;projects I managed.&quot; These are products
            I personally built, deployed, and maintained. The backlog is the portfolio.
          </div>
        </div>
      </ScrollReveal>

      {/* Timeline with tracing beam */}
      <TracingBeam>
        {backlog.map((item) => (
          <TracingBeamItem key={item.id}>
            <LiquidGlassCard>
              <div className="px-5 py-4">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-[11px] font-mono text-[#6e6e6e] bg-white/[0.04] px-1.5 py-0.5 rounded">{item.id}</span>
                  <h3 className="text-[15px] font-semibold text-[#d4d4d4]">{item.title}</h3>
                  <span className="text-[11px] text-[#6e6e6e]">at {item.company}</span>
                </div>
                <p className="text-[13px] text-[#6e6e6e] leading-relaxed">{item.desc}</p>
              </div>
              <div className="px-5 py-3 border-t border-white/[0.04] flex items-center gap-2 flex-wrap">
                <span className={`notion-tag ${item.statusColor}`}>{item.status}</span>
                <span className="notion-tag notion-tag-red">{item.priority}</span>
                <span className="notion-tag notion-tag-orange">{item.impact}</span>
                <div className="flex gap-1.5 ml-auto items-center">
                  {/* Stack tags */}
                  {item.stack.map((t) => (
                    <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.04] text-[#6e6e6e]">{t}</span>
                  ))}
                </div>
              </div>
              {/* Links row */}
              <div className="px-5 py-2.5 border-t border-white/[0.04] flex items-center gap-2 flex-wrap">
                {item.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-md bg-white/[0.04] text-[#9b9b9b] hover:text-[#c77d48] hover:bg-white/[0.07] transition-colors border border-white/[0.05]"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </LiquidGlassCard>
          </TracingBeamItem>
        ))}
      </TracingBeam>

      <div className="notion-divider" />
    </section>
  );
}
