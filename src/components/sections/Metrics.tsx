"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import CountUp from "react-countup";

const metrics = [
  {
    value: 20,
    suffix: "+",
    label: "Features Shipped",
    sub: "PRD to production, end-to-end",
    color: "text-amber-400",
  },
  {
    value: 90,
    suffix: "%",
    label: "Manual Work Cut",
    sub: "Invoice OCR — hours to 2 minutes",
    color: "text-amber-400",
  },
  {
    value: 2,
    suffix: "",
    label: "Full-Stack Products",
    sub: "Built, deployed, and maintained in prod",
    color: "text-amber-400",
  },
  {
    value: 60,
    suffix: "%",
    label: "Efficiency Gain",
    sub: "BOM Mapper — validated by enterprise client",
    color: "text-amber-400",
  },
  {
    value: 4,
    suffix: "+",
    label: "Years at CryptoTax",
    sub: "Founding team member at 18",
    color: "text-amber-400",
  },
  {
    value: 1,
    suffix: "st",
    label: "Productathon",
    sub: "Won out of 100+ teams",
    color: "text-amber-400",
  },
];

function MetricCard({
  metric,
  index,
}: {
  metric: (typeof metrics)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4 }}
      className="glass-card rounded-2xl p-7"
    >
      <div className={`text-5xl font-bold font-mono ${metric.color} leading-none mb-2`}>
        {inView ? (
          <CountUp
            end={metric.value}
            duration={1.8}
            suffix={metric.suffix}
            useEasing
            easingFn={(t, b, c, d) => {
              t /= d;
              return c * t * t * t + b;
            }}
          />
        ) : (
          <span>0{metric.suffix}</span>
        )}
      </div>
      <div className="text-zinc-200 font-medium mb-1">{metric.label}</div>
      <div className="text-zinc-500 text-sm">{metric.sub}</div>
    </motion.div>
  );
}

export default function Metrics() {
  return (
    <section className="relative py-32 overflow-hidden" id="metrics">
      {/* Phase label */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="phase-label">04 / Measure</span>
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[600px] h-[300px] opacity-10"
          style={{
            background: "radial-gradient(ellipse, #f59e0b, transparent)",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            filter: "blur(60px)",
          }}
        />
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
            Phase 04 / Metrics
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Numbers don&apos;t
            <br />
            <span className="amber-gradient-text italic">lie.</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-md">
            Every bullet point is a shipped product, not a feature request that
            died in backlog.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
