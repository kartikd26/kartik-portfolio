"use client";

import { useEffect, useState } from "react";
import { ChevronRight, Mail } from "lucide-react";

const sections = [
  { id: "header", label: "Overview", icon: "📄" },
  { id: "problem", label: "Problem Statement", icon: "🔴" },
  { id: "research", label: "User Research", icon: "🔍" },
  { id: "persona", label: "User Persona", icon: "👤" },
  { id: "solution", label: "Proposed Solution", icon: "💡" },
  { id: "metrics", label: "Success Metrics", icon: "📊" },
  { id: "backlog", label: "Shipped Backlog", icon: "🚀" },
  { id: "thinking", label: "Product Thinking", icon: "🧠" },
  { id: "acceptance", label: "Acceptance Criteria", icon: "✅" },
];

export default function Sidebar() {
  const [active, setActive] = useState("header");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-56 z-40"
      style={{
        background: "#202020",
        borderRight: "1px solid rgba(255,255,255,0.094)",
      }}
    >
      {/* Workspace header */}
      <div className="px-3 pt-4 pb-2">
        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/[0.055] cursor-pointer transition-colors">
          <div className="w-5 h-5 bg-[#c77d48] rounded flex items-center justify-center text-[10px] font-bold text-white">
            K
          </div>
          <span className="text-[13px] font-semibold text-[#d4d4d4] truncate">
            Kartik&apos;s Portfolio
          </span>
          <ChevronRight size={12} className="text-[#6e6e6e] ml-auto" />
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex-1 px-2 py-2 overflow-y-auto">
        <div className="px-2 mb-2">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#6e6e6e]">
            Document Sections
          </span>
        </div>
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`sidebar-link ${active === s.id ? "active" : ""}`}
          >
            <span className="text-sm">{s.icon}</span>
            <span className="truncate">{s.label}</span>
          </a>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="p-3 border-t border-white/[0.094]">
        <a
          href="mailto:kartikdaswani07@gmail.com"
          className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/[0.055] transition-colors text-[#9b9b9b] hover:text-[#d4d4d4] text-[13px]"
        >
          <Mail size={14} />
          <span>Contact</span>
        </a>
        <div className="flex items-center gap-1.5 px-2 mt-2 text-[11px] text-[#6e6e6e]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Open to work
        </div>
      </div>
    </aside>
  );
}
