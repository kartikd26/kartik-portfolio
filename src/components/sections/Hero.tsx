"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "20+", label: "features shipped" },
  { value: "90%", label: "manual work cut" },
  { value: "2", label: "products built & deployed" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const blobY1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background blobs */}
      <motion.div
        style={{ y: blobY1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="blob w-[600px] h-[600px] opacity-20"
          style={{
            background: "#f59e0b",
            top: "-10%",
            left: "-10%",
            animationDelay: "0s",
          }}
        />
      </motion.div>
      <motion.div
        style={{ y: blobY2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="blob w-[400px] h-[400px] opacity-10"
          style={{
            background: "#f59e0b",
            bottom: "10%",
            right: "-5%",
            animationDelay: "-6s",
            animationDuration: "18s",
          }}
        />
      </motion.div>

      {/* Phase label */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="phase-label">00 / Intro</span>
      </div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-20"
      >
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left — main content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:col-span-3 space-y-8"
          >
            {/* Label */}
            <motion.div variants={item}>
              <span className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-mono">
                Product Manager · Mumbai, India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="font-display text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight"
            >
              I write the PRD.
              <br />
              <span className="amber-gradient-text">I ship the product.</span>
              <br />
              <span className="text-zinc-500">I debug it in production.</span>
            </motion.h1>

            {/* Typewriter subtext */}
            <motion.div variants={item} className="text-lg text-zinc-400 h-8">
              <TypeAnimation
                sequence={[
                  "APM at FactWise — shipped 20+ features on a live B2B platform.",
                  2000,
                  "CS engineer who stayed technical on purpose.",
                  2000,
                  "Most PMs hand off a spec. I hand off a deployed product.",
                  2500,
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
                className="font-sans"
              />
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex items-center gap-4 flex-wrap">
              <a
                href="#work"
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-medium px-5 py-2.5 rounded-xl transition-all duration-200 text-sm group"
              >
                View My Work
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>
              <a
                href="#about"
                className="flex items-center gap-2 border border-white/[0.1] hover:border-white/[0.2] text-zinc-300 hover:text-zinc-100 font-medium px-5 py-2.5 rounded-xl transition-all duration-200 text-sm glass"
              >
                About Me
              </a>
            </motion.div>

            {/* Previously at */}
            <motion.div
              variants={item}
              className="flex items-center gap-3 flex-wrap"
            >
              <span className="text-xs text-zinc-600 uppercase tracking-widest font-mono">
                Previously
              </span>
              {["FactWise", "Accion Labs", "CryptoTax", "Kenmark"].map((co) => (
                <span
                  key={co}
                  className="text-xs text-zinc-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]"
                >
                  {co}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — stats bento */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-3"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6 + i * 0.1,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="text-4xl font-bold font-mono text-amber-400 leading-none">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}

            {/* Competition wins */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-amber rounded-2xl p-4 flex items-center gap-3"
            >
              <span className="text-2xl">🏆</span>
              <div>
                <div className="text-sm font-medium text-amber-400">
                  Productathon Winner
                </div>
                <div className="text-xs text-zinc-500">
                  + 2nd at Rethink Shark Tank
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-zinc-600 tracking-widest uppercase font-mono">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
