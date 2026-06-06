"use client";

import { motion } from "motion/react";
import { Trophy, ExternalLink, FileText, Video } from "lucide-react";

const competitions = [
  {
    title: "AI Interview Avatar",
    competition: "Productathon",
    placement: "1st Place 🏆",
    description:
      "Built an AI-driven avatar that conducts mock PM interviews and delivers personalized feedback. 100+ mock interviews. Cut evaluation time by 30%.",
    tech: ["D-ID", "AWS", "Python"],
    deckUrl: "https://www.canva.com/design/DAGM3JjhhC0/WZuEYzCkR_SeGNeLxVRDMA/edit",
    hasVideo: true,
    videoLabel: "Demo Video",
  },
  {
    title: "Rethink Tank",
    competition: "VC Shark Tank",
    placement: "2nd Place 🥈",
    description:
      "Pitched a market-ready product concept to a panel of VCs. Placed 2nd in a competitive pool of product teams.",
    tech: ["Product Strategy", "Market Research", "Pitching"],
    deckUrl: "https://www.canva.com/design/DAGNbPL9fDY/LdanalmHDhl0EGVQCF78gQ/edit",
    hasVideo: false,
    videoLabel: null,
  },
];

const prds = [
  {
    title: "Zepto — Enhanced Grocery Experience",
    type: "FRD",
    description: "Voice commands, grocery list uploads, shareable cart links. Full 18-section FRD, solo authored.",
    domain: "Consumer · Quick Commerce",
    deckUrl: null,
    prdColor: "from-purple-500/20",
  },
  {
    title: "AI-Aided Income Tax Filing",
    type: "PRD",
    description: "Deep market research with real govt ITR demographic data. AI-powered deduction assistant.",
    domain: "Fintech · GovTech",
    deckUrl: null,
    prdColor: "from-blue-500/20",
  },
  {
    title: "Sukoon — Gamified Mental Health App",
    type: "PRD",
    description: "35-page PRD with full user flows, wireframes, NPC design, and metrics. Most comprehensive.",
    domain: "HealthTech · Consumer",
    deckUrl: "https://www.canva.com/design/DAGJh6DMDiE/5KZGSUJ4f9_jciRTbFNQBw/edit",
    prdColor: "from-emerald-500/20",
  },
  {
    title: "Traffic Decongestion System",
    type: "PRD",
    description: "AI-powered traffic management for Indian cities. Government data, CCTV integration, real-time signals.",
    domain: "GovTech · Urban Mobility",
    deckUrl: "https://www.canva.com/design/DAGKM9Sn8dw/fUAdlJGJ50aUhyOONbYxMQ/edit",
    prdColor: "from-orange-500/20",
  },
  {
    title: "Credit-Pesa (M-Pesa Credit)",
    type: "PRD",
    description: "Embedded short-term credit facility for M-Pesa users in Africa. $300B market, regulatory depth.",
    domain: "Fintech · Africa",
    deckUrl: "https://www.canva.com/design/DAGLhH6evww/PUeLprDqRnLpvLUa74tlyg/edit",
    prdColor: "from-cyan-500/20",
  },
  {
    title: "AI Ad Verification Tool",
    type: "PRD",
    description: "Combating $120B annual digital ad fraud on Instagram. ML-powered fraud detection system.",
    domain: "AdTech · AI",
    deckUrl: "https://www.canva.com/design/DAGK2wHgJUI/6mMcMWvaBn6hKAPdUS2jmw/edit",
    prdColor: "from-pink-500/20",
  },
  {
    title: "Enhancing Shopify Analytics",
    type: "PRD",
    description: "Comprehensive analytics dashboard overhaul. User interviews, competitor analysis, full PRD.",
    domain: "E-commerce · SaaS",
    deckUrl: "https://www.canva.com/design/DAGK27dCiP4/tZCf8xVtWN93fddX7wPmZQ/edit",
    prdColor: "from-indigo-500/20",
  },
];

const engineeringProjects = [
  {
    title: "PrepGuru — AI Interview Avatar",
    description: "AI-powered mock interview platform with personalized feedback. Built with D-ID, AWS, Python.",
    tags: ["D-ID", "AWS", "Python"],
    hasVideo: true,
  },
  {
    title: "Sales Call Analyzer",
    description: "Automated transcription + sentiment analysis of 500+ monthly sales calls. Identifies conversion patterns.",
    tags: ["Python", "AWS", "NLP"],
    hasVideo: true,
  },
];

export default function Projects() {
  return (
    <section className="relative py-32 overflow-hidden" id="projects">
      <div className="max-w-6xl mx-auto px-6 space-y-24">

        {/* — Competitions — */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <div className="text-xs tracking-[0.2em] uppercase text-zinc-600 font-mono mb-3">
              Competitions
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              Won some,
              <span className="amber-gradient-text italic"> placed in all.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {competitions.map((comp, i) => (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-2xl p-7"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Trophy size={16} className="text-amber-400" />
                    <span className="text-xs font-mono text-amber-400">
                      {comp.competition}
                    </span>
                  </div>
                  <span className="text-sm font-mono text-zinc-300">
                    {comp.placement}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                  {comp.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                  {comp.description}
                </p>

                <div className="flex items-center gap-2 flex-wrap mb-5">
                  {comp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={comp.deckUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-amber-400 transition-colors"
                  >
                    <ExternalLink size={12} />
                    View Deck
                  </a>
                  {comp.hasVideo && (
                    <span className="flex items-center gap-1.5 text-xs text-zinc-500">
                      <Video size={12} />
                      {comp.videoLabel}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* — PRD Portfolio — */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <div className="text-xs tracking-[0.2em] uppercase text-zinc-600 font-mono mb-3">
              Product Thinking
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              PRDs that prove
              <span className="amber-gradient-text italic"> the thinking.</span>
            </h2>
            <p className="text-zinc-500 text-sm mt-3">
              7 PRDs across consumer, fintech, govtech, and B2B domains.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {prds.map((prd, i) => (
              <motion.div
                key={prd.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <div className={`h-1.5 bg-gradient-to-r ${prd.prdColor} to-transparent`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-zinc-600 uppercase">
                      {prd.type}
                    </span>
                    <span className="text-xs text-zinc-600">{prd.domain}</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-200 mb-2 leading-snug">
                    {prd.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                    {prd.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 text-xs text-zinc-500">
                      <FileText size={11} />
                      PRD
                    </span>
                    {prd.deckUrl && (
                      <a
                        href={prd.deckUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-amber-400 transition-colors"
                      >
                        <ExternalLink size={11} />
                        Deck
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* — Engineering Demos — */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <div className="text-xs tracking-[0.2em] uppercase text-zinc-600 font-mono mb-3">
              Engineering
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              Proof I can
              <span className="amber-gradient-text italic"> actually code.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {engineeringProjects.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-2xl p-7"
              >
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                  {proj.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                  {proj.description}
                </p>
                <div className="flex items-center gap-2 flex-wrap mb-5">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {proj.hasVideo && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-sm text-zinc-500">
                    <Video size={14} className="text-amber-500" />
                    Video demo available — reach out to watch
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
