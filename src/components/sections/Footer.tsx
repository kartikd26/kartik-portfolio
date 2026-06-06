"use client";

import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-32 overflow-hidden border-t border-white/[0.06]">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #f59e0b, transparent)",
            bottom: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-xs tracking-[0.2em] uppercase text-zinc-600 font-mono mb-8">
              07 / Next Steps
            </div>

            <h2 className="font-display text-5xl md:text-6xl font-semibold tracking-tight mb-6 leading-tight">
              The problem is defined.
              <br />
              <span className="amber-gradient-text italic">
                Let&apos;s ship it together.
              </span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              You need a PM who closes the loop. I need a product worth
              obsessing over. Next step: ship it together.
            </p>

            {/* CTA */}
            <div className="flex items-center justify-center gap-4 flex-wrap mb-16">
              <a
                href="mailto:kartikdaswani07@gmail.com"
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-medium px-6 py-3 rounded-xl transition-all duration-200 group"
              >
                Get in touch
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>
              <a
                href="https://linkedin.com/in/kartik-daswani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/[0.1] hover:border-white/[0.2] text-zinc-300 hover:text-zinc-100 font-medium px-6 py-3 rounded-xl transition-all duration-200 glass"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </div>

            {/* Links row */}
            <div className="flex items-center justify-center gap-8 text-sm text-zinc-600">
              <a
                href="mailto:kartikdaswani07@gmail.com"
                className="flex items-center gap-2 hover:text-zinc-400 transition-colors"
              >
                <Mail size={13} />
                kartikdaswani07@gmail.com
              </a>
              <a
                href="https://github.com/kartikd26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-zinc-400 transition-colors"
              >
                <Github size={13} />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/[0.04] flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-zinc-700">
          <span>Kartik Daswani · {new Date().getFullYear()}</span>
          <span>Built with Next.js · Deployed on Vercel</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open to work</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
