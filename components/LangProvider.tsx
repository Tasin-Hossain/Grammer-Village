"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { L } from "@/lib/content";

type Lang = "en" | "bn";
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (x: L) => string }>({
  lang: "en",
  setLang: () => {},
  t: (x) => x.en,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("gv-lang");
      if (saved === "bn" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("gv-lang", l); } catch {}
  }, []);

  const t = useCallback((x: L) => x[lang], [lang]);
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);

// UI strings used by components that are not part of lib/content.ts
export const ui = {
  apply: { en: "Apply now", bn: "ভর্তি হোন" },
  login: { en: "Log in", bn: "লগইন" },
  menu: { en: "Menu", bn: "মেনু" },
  close: { en: "Close", bn: "বন্ধ করুন" },
} satisfies Record<string, L>;
