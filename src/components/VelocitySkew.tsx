"use client";

import { useGlassDepth } from "./GlassDepthContext";

/**
 * Wrapper that applies subtle skew/stretch to children based on scroll velocity.
 * Fast scroll = glass cards warp slightly, like looking through moving glass.
 */
export default function VelocitySkew({ children }: { children: React.ReactNode }) {
  const { normalizedVelocity, scrollProgress } = useGlassDepth();

  // Subtle Y skew based on velocity: max ±2 degrees
  const skewY = normalizedVelocity * 1.5;
  // Slight Y scale stretch on fast scroll
  const scaleY = 1 + normalizedVelocity * 0.02;
  // Subtle perspective zoom as you go deeper
  const perspective = 1200 - scrollProgress * 400;

  return (
    <div
      style={{
        transform: `perspective(${perspective}px) skewY(${skewY}deg) scaleY(${scaleY})`,
        transition: "transform 0.15s ease-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
