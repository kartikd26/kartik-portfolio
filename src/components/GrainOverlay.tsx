"use client";

import { useGlassDepth } from "./GlassDepthContext";

/**
 * Animated film grain that intensifies as you scroll deeper into the glass.
 * Replaces the static body::before grain.
 */
export default function GrainOverlay() {
  const { scrollProgress, normalizedVelocity } = useGlassDepth();

  // Grain opacity: 0.02 at top, up to 0.06 deep, spikes on fast scroll
  const opacity = 0.02 + scrollProgress * 0.03 + normalizedVelocity * 0.04;

  return (
    <div
      className="glass-grain"
      style={{ opacity: Math.min(opacity, 0.1) }}
    />
  );
}
