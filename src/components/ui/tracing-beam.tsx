"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function TracingBeam({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const heightProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      {/* The beam line */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[2px]">
        {/* Background track */}
        <div className="absolute inset-0 bg-white/[0.06] rounded-full" />
        {/* Animated fill */}
        <motion.div
          className="absolute top-0 left-0 w-full rounded-full"
          style={{
            height: heightProgress,
            background: "linear-gradient(to bottom, #c77d48, #d4922e)",
            boxShadow: "0 0 8px rgba(232, 168, 73, 0.4)",
            opacity: opacityProgress,
          }}
        />
        {/* Glowing dot at the tip */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
          style={{
            top: heightProgress,
            background: "#c77d48",
            boxShadow: "0 0 12px rgba(232, 168, 73, 0.6), 0 0 24px rgba(232, 168, 73, 0.3)",
            opacity: opacityProgress,
          }}
        />
      </div>

      {/* Content — offset for the beam */}
      <div className="pl-12 md:pl-16">{children}</div>
    </div>
  );
}

export function TracingBeamItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 60%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-20, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x, willChange: "transform, opacity" }}
      className={cn("relative pb-8", className)}
    >
      {/* Node dot on the beam */}
      <div className="absolute -left-12 md:-left-16 top-1 w-6 md:w-8 flex justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a] border-2 border-white/[0.15]" />
      </div>
      {children}
    </motion.div>
  );
}
