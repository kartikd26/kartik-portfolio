"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "AI Invoice OCR System",
    company: "FactWise",
    year: "2024",
    domain: "AI · B2B SaaS",
    description:
      "Built end-to-end from scratch — FastAPI backend, React frontend, Azure Document Intelligence. Cut client invoice processing from hours to under 2 minutes.",
    metrics: ["90% ↓ manual work", "2 min processing", "Live in prod"],
    tags: ["FastAPI", "React", "Azure", "TypeScript"],
    gradient: "from-amber-500/20 to-orange-500/10",
    featured: true,
    slug: "invoice-ocr",
  },
  {
    title: "RFQ Analytics Rebuild",
    company: "FactWise",
    year: "2024",
    domain: "Analytics · Enterprise",
    description:
      "Rescued the platform's most critical, broken dashboard. Rebuilt from ground up — aggregating vendor bids, landed costs, real-time analytics.",
    metrics: ["Critical system restored", "Multi-client adoption", "Zero downtime"],
    tags: ["React", "SQL", "Data Viz"],
    gradient: "from-blue-500/20 to-cyan-500/10",
    featured: false,
    slug: "rfq-analytics",
  },
  {
    title: "BOM Data Mapper",
    company: "FactWise",
    year: "2024",
    domain: "Automation · B2B",
    description:
      "Visual column mapping, fuzzy matching, PDF zone extraction, reusable templates. Validated by enterprise client — 60% efficiency gain.",
    metrics: ["60% ↑ efficiency", "INR 10-12L/yr value", "Enterprise validated"],
    tags: ["React", "Python", "PDF"],
    gradient: "from-violet-500/20 to-purple-500/10",
    featured: false,
    slug: "bom-mapper",
  },
  {
    title: "CryptoTax Automation Pipeline",
    company: "CryptoTax International",
    year: "2021–Now",
    domain: "Fintech · Automation",
    description:
      "Joined as founding team member at 18 during COVID. Automated 10K+ crypto transaction calculations from 4–5 days to under 10 minutes using Python.",
    metrics: ["4 days → 10 min", "20K+ rows/client", "98–99% accuracy"],
    tags: ["Python", "openpyxl", "AWS"],
    gradient: "from-emerald-500/20 to-teal-500/10",
    featured: true,
    slug: "cryptotax",
  },
];

export default function Work() {
  return (
    <section className="relative py-32 overflow-hidden" id="work">
      {/* Phase label */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="phase-label">06 / Case Studies</span>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="text-xs tracking-[0.2em] uppercase text-zinc-600 font-mono mb-4">
            Phase 06 / Backlog
          </div>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
              The backlog.
              <br />
              <span className="amber-gradient-text italic">
                Prioritized by impact.
              </span>
            </h2>
            <p className="text-zinc-500 text-sm font-mono">
              Sorted by: shipped_at DESC
            </p>
          </div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cs.featured && i === 0 ? "lg:col-span-2" : ""}
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full group cursor-pointer">
                {/* Gradient header */}
                <div
                  className={`h-32 bg-gradient-to-br ${cs.gradient} relative flex items-end p-5`}
                >
                  <div className="absolute top-4 right-4">
                    <ArrowUpRight
                      size={16}
                      className="text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    />
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-black/30 text-zinc-300 border border-white/10 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-zinc-500">
                      {cs.domain}
                    </span>
                    <span className="text-xs font-mono text-zinc-600">
                      {cs.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-zinc-100 mb-2 group-hover:text-amber-400 transition-colors duration-200">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                    {cs.description}
                  </p>

                  {/* Metrics strip */}
                  <div className="flex items-center gap-4 flex-wrap border-t border-white/[0.06] pt-4">
                    {cs.metrics.map((m) => (
                      <span
                        key={m}
                        className="text-xs font-mono text-amber-500"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
