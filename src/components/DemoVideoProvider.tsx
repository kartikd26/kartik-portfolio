"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ExternalLink } from "lucide-react";
import { getDemo, type Demo } from "@/components/doc/demoData";

type DemoVideoCtx = { openDemo: (id: string) => void };

const DemoVideoContext = createContext<DemoVideoCtx>({ openDemo: () => {} });

export const useDemoVideo = () => useContext(DemoVideoContext);

function VideoModal({ demo, onClose }: { demo: Demo; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.82)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.96, y: 16 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, y: 16 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/10"
        style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.6)" }}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
          <div className="text-[14px] font-semibold text-[#e4e4e4]">
            {demo.title}{" "}
            <span className="text-[#6e6e6e] font-normal">· {demo.company}</span>
          </div>
          <div className="flex items-center gap-3">
            {demo.kind === "drive" && (
              <a
                href={`https://drive.google.com/file/d/${demo.src}/view`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[12px] text-[#9b9b9b] hover:text-[#c77d48] transition-colors"
              >
                Open in Drive <ExternalLink size={12} />
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close"
              className="text-[#6e6e6e] hover:text-[#d4d4d4] transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        <div className="aspect-video bg-black">
          {demo.kind === "local" ? (
            <video
              src={demo.src}
              controls
              autoPlay
              playsInline
              className="w-full h-full"
            />
          ) : (
            <iframe
              title={demo.title}
              src={`https://drive.google.com/file/d/${demo.src}/preview`}
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full border-0"
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function DemoVideoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const openDemo = useCallback((id: string) => setActiveId(id), []);
  const demo = activeId ? getDemo(activeId) : undefined;

  return (
    <DemoVideoContext.Provider value={{ openDemo }}>
      {children}
      <AnimatePresence>
        {demo && <VideoModal demo={demo} onClose={() => setActiveId(null)} />}
      </AnimatePresence>
    </DemoVideoContext.Provider>
  );
}
