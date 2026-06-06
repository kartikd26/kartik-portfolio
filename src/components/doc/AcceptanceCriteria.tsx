"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { Mail, Linkedin, Github } from "lucide-react";
import LiquidGlassCard from "@/components/LiquidGlassCard";
import { ScrollReveal } from "@/components/ScrollReveal";

const criteria = [
  { check: true, text: "Can write a PRD that actually matches the shipped product" },
  { check: true, text: "Can open a terminal and deploy to production" },
  { check: true, text: "Can debug at 11pm without paging the on-call engineer" },
  { check: true, text: "Can talk to engineers without a translator" },
  { check: true, text: "Can read a stack trace and know what went wrong" },
  { check: true, text: "Has shipped 20+ features and 2 full products to production" },
  { check: true, text: "Won 1st place at a Productathon" },
  { check: true, text: "Built this portfolio website as a PRD (yes, this one)" },
];

// Circular progress SVG
function CircularProgress({ progress, total }: { progress: number; total: number }) {
  const pct = total === 0 ? 0 : progress / total;
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const dash = circumference * pct;

  return (
    <div className="relative flex items-center justify-center w-16 h-16 flex-shrink-0">
      <svg width="64" height="64" className="rotate-[-90deg]">
        {/* Track */}
        <circle cx="32" cy="32" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
        {/* Fill */}
        <motion.circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="#c77d48"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - dash}
          style={{ filter: "drop-shadow(0 0 4px rgba(232,168,73,0.5))" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[14px] font-bold font-mono text-[#c77d48] leading-none">{progress}</span>
        <span className="text-[9px] text-[#6e6e6e] leading-none">/{total}</span>
      </div>
    </div>
  );
}

function CheckItem({ item, index, isChecked }: { item: typeof criteria[0]; index: number; isChecked: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 72%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-16, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x, willChange: "transform, opacity" }}
      className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.02] transition-colors"
    >
      <motion.span
        animate={{ color: isChecked ? "#0f7b6c" : "#6e6e6e" }}
        transition={{ duration: 0.3 }}
        className="text-lg leading-none flex-shrink-0"
      >
        {isChecked ? "☑" : "☐"}
      </motion.span>
      <span className="text-[14px] text-[#d4d4d4] leading-snug">{item.text}</span>
    </motion.div>
  );
}

export default function AcceptanceCriteria() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 60%"],
  });

  const [checkedCount, setCheckedCount] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const clamped = Math.min(1, Math.max(0, v));
    setCheckedCount(Math.round(criteria.length * clamped));
  });

  return (
    <section id="acceptance" ref={sectionRef} className="py-6">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-[#d4d4d4]">
          <span>✅</span> Acceptance Criteria
        </h2>
        <p className="text-[15px] text-[#6e6e6e] mb-4">
          No PRD is complete without acceptance criteria. Scroll to verify the candidate meets spec.
        </p>
      </ScrollReveal>

      {/* Progress header card */}
      <ScrollReveal>
        <LiquidGlassCard intensity={4} className="mb-5">
          <div className="p-4 flex items-center gap-4">
            <CircularProgress progress={checkedCount} total={criteria.length} />
            <div>
              <div className="text-[14px] font-semibold text-[#d4d4d4] mb-0.5">
                {checkedCount === criteria.length
                  ? "All criteria met ✓"
                  : checkedCount === 0
                  ? "Scroll to verify..."
                  : `Verifying candidate (${checkedCount}/${criteria.length})`}
              </div>
              <div className="text-[12px] text-[#6e6e6e]">
                {checkedCount === criteria.length
                  ? "Candidate is ready to hire. Move to In Progress."
                  : "Keep scrolling to run acceptance checks."}
              </div>
            </div>
          </div>
        </LiquidGlassCard>
      </ScrollReveal>

      <div className="space-y-1 mb-6">
        {criteria.map((c, i) => (
          <CheckItem key={i} item={c} index={i} isChecked={i < checkedCount} />
        ))}
      </div>

      <ScrollReveal>
        <div className="notion-callout">
          <div className="notion-callout-icon">🚀</div>
          <div className="notion-callout-content">
            <strong>Next Step:</strong> Move this candidate from{" "}
            <span className="notion-inline-code">Backlog</span> to{" "}
            <span className="notion-inline-code">In Progress</span>. Schedule
            an interview, or just email him. He responds faster than your CI/CD pipeline.
          </div>
        </div>
      </ScrollReveal>

      {/* CTA — solid high-contrast button (Notion accent blue) */}
      <ScrollReveal className="mt-8">
        <div className="flex justify-center mb-6">
          <a
            href="mailto:kartikdaswani07@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-[#2383e2] hover:bg-[#1a6fc4] text-white font-semibold text-[15px] px-7 py-3.5 transition-colors shadow-[0_2px_12px_rgba(35,131,226,0.35)]"
          >
            <Mail className="size-5" />
            Hire This PM
          </a>
        </div>
      </ScrollReveal>

      {/* Contact card */}
      <ScrollReveal className="mt-4">
        <LiquidGlassCard intensity={6}>
          <div className="p-6 text-center">
            <div className="text-[13px] text-[#9b9b9b] uppercase tracking-widest mb-3">Contact</div>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <a
                href="mailto:kartikdaswani07@gmail.com"
                className="text-[#5e87c9] hover:text-[#7aa3e0] hover:underline text-[15px] font-medium flex items-center gap-1.5 transition-opacity hover:opacity-80"
              >
                <Mail size={14} />
                kartikdaswani07@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/kartik-daswani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5e87c9] hover:text-[#7aa3e0] hover:underline text-[15px] font-medium flex items-center gap-1.5 transition-opacity hover:opacity-80"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
              <a
                href="https://github.com/kartikd26"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5e87c9] hover:text-[#7aa3e0] hover:underline text-[15px] font-medium flex items-center gap-1.5 transition-opacity hover:opacity-80"
              >
                <Github size={14} />
                GitHub
              </a>
            </div>
          </div>
        </LiquidGlassCard>
      </ScrollReveal>

      <div className="mt-8 text-center text-[12px] text-[#6e6e6e]">
        <p>Built with Next.js, Tailwind, and Framer Motion. Deployed on Vercel.</p>
        <p className="mt-1">Written as a PRD because the PM couldn&apos;t resist the format.</p>
        <p className="mt-1">© 2026 Kartik Daswani. All rights shipped.</p>
      </div>
    </section>
  );
}
