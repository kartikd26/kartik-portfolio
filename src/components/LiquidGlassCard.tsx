"use client";

import { cn } from "@/lib/utils";

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

/**
 * Notion-style block: flat warm-gray surface, hairline border, no drop shadow.
 * Matches Notion's callout/database blocks — content sits ON the page, not floating.
 */
export default function LiquidGlassCard({
  children,
  className = "",
}: LiquidGlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-lg border border-white/[0.094] bg-[#202020] transition-colors hover:bg-[#252525]",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
