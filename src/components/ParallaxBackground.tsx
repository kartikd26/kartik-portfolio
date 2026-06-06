"use client";

import { motion, useScroll, useTransform } from "motion/react";

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);
  const y5 = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);

  return (
    <>
      {/* SVG Liquid Glass distortion filter */}
      <svg style={{ display: "none" }}>
        <defs>
          <filter id="liquid-glass" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="2" seed="42" result="noise" />
            <feGaussianBlur in="noise" stdDeviation="3" result="blurred" />
            <feDisplacementMap in="SourceGraphic" in2="blurred" scale="20" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <div className="parallax-bg">
        {/* Amber/orange — top left */}
        <motion.div style={{ y: y1 }}>
          <div style={{
            width: "600px", height: "600px", borderRadius: "50%",
            background: "radial-gradient(circle, #c77d48 0%, #d4922e 40%, transparent 70%)",
            position: "absolute", top: "-8%", left: "-8%",
            filter: "blur(100px)", opacity: 0.15,
          }} />
        </motion.div>

        {/* Blue/cyan — right */}
        <motion.div style={{ y: y2 }}>
          <div style={{
            width: "500px", height: "500px", borderRadius: "50%",
            background: "radial-gradient(circle, #2383e2 0%, #3b82f6 40%, transparent 70%)",
            position: "absolute", top: "25%", right: "-10%",
            filter: "blur(100px)", opacity: 0.12,
          }} />
        </motion.div>

        {/* Purple — center */}
        <motion.div style={{ y: y3 }}>
          <div style={{
            width: "450px", height: "450px", borderRadius: "50%",
            background: "radial-gradient(circle, #9f6bac 0%, #7c3aed 40%, transparent 70%)",
            position: "absolute", top: "50%", left: "10%",
            filter: "blur(100px)", opacity: 0.1,
          }} />
        </motion.div>

        {/* Rose/pink — bottom right */}
        <motion.div style={{ y: y4 }}>
          <div style={{
            width: "400px", height: "400px", borderRadius: "50%",
            background: "radial-gradient(circle, #e27189 0%, #f43f5e 40%, transparent 70%)",
            position: "absolute", top: "70%", right: "5%",
            filter: "blur(100px)", opacity: 0.1,
          }} />
        </motion.div>

        {/* Green — far bottom */}
        <motion.div style={{ y: y5 }}>
          <div style={{
            width: "400px", height: "400px", borderRadius: "50%",
            background: "radial-gradient(circle, #0f7b6c 0%, #10b981 40%, transparent 70%)",
            position: "absolute", top: "88%", left: "15%",
            filter: "blur(100px)", opacity: 0.1,
          }} />
        </motion.div>
      </div>
    </>
  );
}
