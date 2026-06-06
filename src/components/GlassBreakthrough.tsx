"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * Glass breakthrough flash — triggers when scrolling through section boundaries.
 * A brief white flash + refraction ring that makes it feel like you're
 * breaking through a glass pane into the next section.
 */
export default function GlassBreakthrough() {
  const [flash, setFlash] = useState(false);
  const lastSection = useRef(0);

  useEffect(() => {
    function checkSection() {
      const sections = document.querySelectorAll("section[id]");
      const viewportCenter = window.innerHeight / 2;
      let current = 0;

      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          current = i;
        }
      });

      if (current !== lastSection.current) {
        lastSection.current = current;
        setFlash(true);
        setTimeout(() => setFlash(false), 400);
      }
    }

    window.addEventListener("scroll", checkSection, { passive: true });
    return () => window.removeEventListener("scroll", checkSection);
  }, []);

  return (
    <AnimatePresence>
      {flash && (
        <motion.div
          initial={{ opacity: 0.6, scale: 0.8 }}
          animate={{ opacity: 0, scale: 2.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            pointerEvents: "none",
            background: `radial-gradient(
              ellipse 50% 40% at 50% 50%,
              rgba(255, 255, 255, 0.08) 0%,
              rgba(232, 168, 73, 0.03) 40%,
              transparent 70%
            )`,
          }}
        >
          {/* Refraction ring */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "300px",
              height: "300px",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: `
                0 0 40px rgba(255, 255, 255, 0.05),
                inset 0 0 40px rgba(255, 255, 255, 0.03)
              `,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
