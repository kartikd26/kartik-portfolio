"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/**
 * Apple-style scroll reveal. Fades + lifts content into view
 * as it enters the viewport. Only uses opacity + transform (GPU-only).
 */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 60%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, willChange: "transform, opacity" }}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Apple-style staggered reveal — children appear one after another,
 * each offset by scroll position.
 */
export function ScrollStagger({
  children,
  className = "",
  staggerPx = 60,
}: {
  children: React.ReactNode[];
  className?: string;
  staggerPx?: number;
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <ScrollRevealItem key={i} index={i} staggerPx={staggerPx}>
          {child}
        </ScrollRevealItem>
      ))}
    </div>
  );
}

function ScrollRevealItem({
  children,
  index,
  staggerPx,
}: {
  children: React.ReactNode;
  index: number;
  staggerPx: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 65%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30 + index * staggerPx * 0.1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Apple-style sticky section — pins content while scroll drives
 * a 0→1 progress value. Use scrollProgress to animate anything.
 *
 * height: how much scroll runway (e.g., "300vh" = 3 screens of scroll)
 */
export function StickySection({
  children,
  height = "200vh",
  className = "",
}: {
  children: (progress: ReturnType<typeof useTransform<number, number>>) => React.ReactNode;
  height?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref} style={{ height }} className={`relative ${className}`}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {children(scrollYProgress)}
      </div>
    </div>
  );
}

/**
 * Apple-style text reveal — text transitions from dim to bright
 * as it scrolls into view, word by word.
 */
export function TextReveal({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 40%"],
  });

  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <TextRevealWord
          key={`${word}-${i}`}
          word={word}
          progress={scrollYProgress}
          index={i}
          total={words.length}
        />
      ))}
    </div>
  );
}

function TextRevealWord({
  word,
  progress,
  index,
  total,
}: {
  word: string;
  progress: ReturnType<typeof useTransform<number, number>>;
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <motion.span
      style={{ opacity, willChange: "opacity" }}
      className="inline-block mr-[0.3em]"
    >
      {word}
    </motion.span>
  );
}
