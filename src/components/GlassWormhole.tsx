"use client";

import { useGlassDepth } from "./GlassDepthContext";

/**
 * Glass wormhole background — the "pulled into glass" effect.
 *
 * Kept: gradient blobs that drift with scroll, concentric rings,
 *       particles, subtle vignette.
 * Removed: blur on content, chromatic aberration, velocity skew,
 *          speed streaks — all were too aggressive.
 */
export default function GlassWormhole() {
  const { scrollProgress, normalizedVelocity } = useGlassDepth();

  // Subtle vignette — just enough to create tunnel feel
  const vignetteOpacity = 0.15 + scrollProgress * 0.2;
  // Blobs scale up slightly as you scroll — "zooming in" feeling
  const tunnelScale = 1 + scrollProgress * 0.1;

  return (
    <div className="glass-wormhole">
      {/* Layer 1: Gradient blobs that drift with scroll depth */}
      <div
        className="glass-wormhole-blobs"
        style={{ transform: `scale(${tunnelScale})` }}
      >
        {/* Central amber glow — the "light you're being pulled toward" */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(232, 168, 73, 0.1) 0%, rgba(232, 168, 73, 0.03) 30%, transparent 60%)",
            transform: "translate(-50%, -50%)",
            filter: "blur(60px)",
          }}
        />

        {/* Amber — top left, drifts up-left as you scroll deeper */}
        <div
          className="glass-wormhole-blob"
          style={{
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(232, 168, 73, 0.14) 0%, transparent 70%)",
            top: `${15 - scrollProgress * 25}%`,
            left: `${-5 - scrollProgress * 8}%`,
            filter: "blur(80px)",
          }}
        />
        {/* Blue — right, drifts down-right */}
        <div
          className="glass-wormhole-blob"
          style={{
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(82, 156, 202, 0.11) 0%, transparent 70%)",
            top: `${30 + scrollProgress * 15}%`,
            right: `${-8 - scrollProgress * 10}%`,
            filter: "blur(90px)",
          }}
        />
        {/* Purple — center-left, drifts down */}
        <div
          className="glass-wormhole-blob"
          style={{
            width: "350px",
            height: "350px",
            background:
              "radial-gradient(circle, rgba(159, 107, 172, 0.09) 0%, transparent 70%)",
            top: `${55 + scrollProgress * 10}%`,
            left: `${15 + scrollProgress * 5}%`,
            filter: "blur(80px)",
          }}
        />
        {/* Rose — bottom right */}
        <div
          className="glass-wormhole-blob"
          style={{
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(226, 113, 137, 0.08) 0%, transparent 70%)",
            bottom: `${15 - scrollProgress * 15}%`,
            right: `${10 + scrollProgress * 5}%`,
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Layer 2: Concentric glass rings — subtle, pulse gently */}
      <div className="glass-wormhole-rings">
        {[0, 1, 2].map((i) => {
          const baseSize = 400 + i * 300;
          const pulse = Math.sin(scrollProgress * Math.PI * 3 + i * 1.2) * 15;
          const size = baseSize + pulse;

          return (
            <div
              key={i}
              className="glass-ring"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                opacity: 0.025 - i * 0.005,
                borderColor: "rgba(255, 255, 255, 0.06)",
                animationDelay: `${i * -3}s`,
              }}
            />
          );
        })}
      </div>

      {/* Layer 3: Floating light particles — subtle glass shards */}
      <div className="glass-particles">
        {Array.from({ length: 20 }).map((_, i) => {
          const x = (i * 37) % 100;
          const y = (i * 53 + 17) % 100;
          const size = 1 + (i % 3);
          const speed = 10 + (i % 8) * 4;
          const delay = (i % 5) * -3;

          return (
            <div
              key={i}
              className="glass-particle"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDuration: `${speed}s`,
                animationDelay: `${delay}s`,
                opacity: 0.08 + normalizedVelocity * 0.15,
              }}
            />
          );
        })}
      </div>

      {/* Layer 4: Vignette — subtle tunnel darkening at edges */}
      <div
        className="glass-vignette"
        style={{
          background: `radial-gradient(
            ellipse 75% 65% at 50% 50%,
            transparent 30%,
            rgba(0, 0, 0, ${vignetteOpacity}) 70%,
            rgba(0, 0, 0, ${vignetteOpacity + 0.15}) 100%
          )`,
        }}
      />
    </div>
  );
}
