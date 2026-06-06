"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
  type ReactNode,
} from "react";

interface GlassDepthState {
  /** 0 → 1 how far through the page */
  scrollProgress: number;
  /** Pixels per second — abs value */
  velocity: number;
  /** Smoothed velocity 0 → 1 for visual effects */
  normalizedVelocity: number;
  /** Which "glass layer" (section index) we're inside */
  currentLayer: number;
  /** 0 → 1 progress within current section */
  sectionProgress: number;
}

const defaultState: GlassDepthState = {
  scrollProgress: 0,
  velocity: 0,
  normalizedVelocity: 0,
  currentLayer: 0,
  sectionProgress: 0,
};

const GlassDepthContext = createContext<GlassDepthState>(defaultState);

export function useGlassDepth() {
  return useContext(GlassDepthContext);
}

export function GlassDepthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GlassDepthState>(defaultState);
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());
  const smoothVelocity = useRef(0);
  const rafId = useRef(0);

  useEffect(() => {
    function update() {
      const now = Date.now();
      const dt = Math.max(now - lastTime.current, 1);
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0;

      // Raw velocity in px/s
      const rawVelocity = Math.abs(scrollY - lastScrollY.current) / (dt / 1000);

      // Smooth it (lerp)
      smoothVelocity.current += (rawVelocity - smoothVelocity.current) * 0.1;

      // Normalize: 0 at rest, 1 at ~3000px/s
      const normalizedVelocity = Math.min(smoothVelocity.current / 3000, 1);

      // Figure out which section we're in
      const sections = document.querySelectorAll("section[id]");
      let currentLayer = 0;
      let sectionProgress = 0;

      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          currentLayer = i;
          sectionProgress = (viewportCenter - rect.top) / rect.height;
        }
      });

      setState({
        scrollProgress: progress,
        velocity: smoothVelocity.current,
        normalizedVelocity,
        currentLayer,
        sectionProgress,
      });

      lastScrollY.current = scrollY;
      lastTime.current = now;
      rafId.current = requestAnimationFrame(update);
    }

    rafId.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  return (
    <GlassDepthContext.Provider value={state}>
      {children}
    </GlassDepthContext.Provider>
  );
}
