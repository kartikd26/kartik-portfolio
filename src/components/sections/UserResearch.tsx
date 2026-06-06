"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const interviews = [
  {
    role: "Hiring Manager",
    company: "Series B SaaS",
    quote:
      "I need someone who can talk to engineers as an equal, not a translator standing between us.",
    emoji: "👤",
    delay: 0,
  },
  {
    role: "CTO",
    company: "B2B Startup",
    quote:
      "Our last PM wrote great PRDs. Nothing actually shipped on time. The spec and the product were two different things.",
    emoji: "🧑‍💻",
    delay: 0.1,
  },
  {
    role: "Founder",
    company: "AI Product Co.",
    quote:
      "I want a PM who can open a terminal. Who understands why something is technically hard — not just that it is.",
    emoji: "🚀",
    delay: 0.2,
  },
  {
    role: "VP Product",
    company: "Enterprise SaaS",
    quote:
      "Show me someone who has actually deployed something to production. Not just reviewed a deploy.",
    emoji: "📦",
    delay: 0.3,
  },
];

export default function UserResearch() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Horizontal scroll as you scroll vertically
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["8%", "-30%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden" id="research">
      {/* Phase label */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="phase-label">02 / Research</span>
      </div>

      {/* Parallax bg */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-xs tracking-[0.2em] uppercase text-zinc-600 font-mono mb-4">
            Phase 02 / User Research
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            What the market
            <br />
            <span className="amber-gradient-text italic">actually wants.</span>
          </h2>
          <p className="text-zinc-400 max-w-xl">
            N=4 hiring manager interviews. Pattern identified across all
            responses. Confidence level: high.
          </p>
        </motion.div>
      </div>

      {/* Horizontally scrolling cards */}
      <div ref={scrollRef} className="horizontal-scroll-section">
        <motion.div style={{ x }} className="flex gap-6 px-6 w-max">
          {interviews.map((interview, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: interview.delay,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass-card rounded-2xl p-7 w-80 flex-shrink-0 flex flex-col gap-5"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-lg">
                  {interview.emoji}
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-200">
                    {interview.role}
                  </div>
                  <div className="text-xs text-zinc-500">{interview.company}</div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-zinc-300 leading-relaxed text-sm italic border-l-2 border-amber-500/40 pl-4">
                &ldquo;{interview.quote}&rdquo;
              </blockquote>

              {/* Tag */}
              <div className="mt-auto">
                <span className="text-xs font-mono text-amber-500/70 bg-amber-500/10 px-2 py-1 rounded-full border border-amber-500/20">
                  Needs: PM who ships
                </span>
              </div>
            </motion.div>
          ))}

          {/* Insight card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass-amber rounded-2xl p-7 w-80 flex-shrink-0 flex flex-col justify-center gap-4"
          >
            <div className="text-xs font-mono text-amber-500 uppercase tracking-widest">
              Research Insight
            </div>
            <p className="text-amber-100 text-lg font-medium leading-snug">
              Pattern identified: the market wants a PM who closes the loop.
            </p>
            <p className="text-zinc-500 text-sm">
              Not just discovery. Not just delivery. The whole thing —
              spec to shipped to debugged.
            </p>
            <div className="text-xs font-mono text-zinc-600">
              n=4 · confidence: high · bias: intentional
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
