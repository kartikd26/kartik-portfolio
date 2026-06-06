"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContentItem {
  title: string;
  description: string;
  content: React.ReactNode;
}

export function StickyScrollReveal({
  items,
  className,
}: {
  items: ContentItem[];
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{ height: `${items.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="flex w-full max-w-5xl mx-auto gap-8 px-4">
          {/* Left — sticky content labels */}
          <div className="flex-1 flex flex-col justify-center">
            {items.map((item, i) => (
              <StickyItem
                key={item.title}
                item={item}
                index={i}
                total={items.length}
                progress={scrollYProgress}
              />
            ))}
          </div>

          {/* Right — visual content */}
          <div className="flex-1 relative hidden md:flex items-center justify-center">
            {items.map((item, i) => (
              <StickyVisual
                key={`visual-${i}`}
                index={i}
                total={items.length}
                progress={scrollYProgress}
              >
                {item.content}
              </StickyVisual>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StickyItem({
  item,
  index,
  total,
  progress,
}: {
  item: ContentItem;
  index: number;
  total: number;
  progress: ReturnType<typeof useTransform<number, number>>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;

  const opacity = useTransform(progress, [start, mid - 0.05, mid, end - 0.05, end], [0.3, 1, 1, 1, 0.3]);
  const y = useTransform(progress, [start, mid, end], [20, 0, -20]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="py-4"
    >
      <h3 className="text-lg font-semibold text-[#d4d4d4] mb-1">{item.title}</h3>
      <p className="text-[13px] text-[#9b9b9b] leading-relaxed">{item.description}</p>
    </motion.div>
  );
}

function StickyVisual({
  children,
  index,
  total,
  progress,
}: {
  children: React.ReactNode;
  index: number;
  total: number;
  progress: ReturnType<typeof useTransform<number, number>>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;

  const opacity = useTransform(progress, [start, mid - 0.05, mid, end - 0.05, end], [0, 1, 1, 1, 0]);
  const scale = useTransform(progress, [start, mid, end], [0.9, 1, 0.9]);

  return (
    <motion.div
      style={{ opacity, scale, willChange: "transform, opacity" }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
}
