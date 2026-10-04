import type { ReactNode } from "react";
import type React from "react";

export function Section({
  id, title, intro, children, tone = "paper",
}: { id: string; title: string; intro?: string; children: ReactNode; tone?: "paper" | "soft" | "forest" }) {
  const bg = tone === "soft" ? "bg-forest-soft" : tone === "forest" ? "bg-forest text-white dots" : "";
  return (
    <section id={id} className={`py-20 sm:py-24 ${bg}`}>
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-snug tracking-tight sm:text-4xl">
          <span className="marker" style={tone === "forest" ? ({ "--mk": "rgba(245,200,66,.35)" } as React.CSSProperties) : undefined}>{title}</span>
        </h2>
        {intro && <p className={`mt-3 max-w-xl text-lg ${tone === "forest" ? "text-white/80" : "text-ink/70"}`}>{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
