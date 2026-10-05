"use client";
import { useEffect, useState } from "react";
import { sentenceGame } from "@/lib/content";
import { useLang } from "./LangProvider";
import { Section } from "./Section";

type Tok = { id: number; w: string };

function shuffle<T>(a: T[]) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}

const tile = ["bg-pencil", "bg-blush", "bg-mint", "bg-sky"];

export function KidsLand() {
  const { t } = useLang();
  const [round, setRound] = useState(0);
  const [pool, setPool] = useState<Tok[]>([]);
  const [built, setBuilt] = useState<Tok[]>([]);
  const [result, setResult] = useState<"ok" | "no" | null>(null);
  const [wins, setWins] = useState(0);

  useEffect(() => {
    const words = sentenceGame[round].split(" ").map((w, id) => ({ id, w }));
    setPool(shuffle(words)); setBuilt([]); setResult(null);
  }, [round]);

  function add(tok: Tok) { setPool(pool.filter((p) => p.id !== tok.id)); setBuilt([...built, tok]); setResult(null); }
  function remove(tok: Tok) { setBuilt(built.filter((p) => p.id !== tok.id)); setPool([...pool, tok]); setResult(null); }
  function check() {
    const ok = built.map((b) => b.w).join(" ") === sentenceGame[round];
    setResult(ok ? "ok" : "no");
    if (ok) setWins(wins + 1);
  }

  return (
    <Section
      id="kids-land" tone="forest"
      title={t({ en: "Kids Land: build the sentence", bn: "কিডস ল্যান্ড: বাক্যটি সাজান" })}
      intro={t({ en: "Tap the words in the right order.", bn: "শব্দগুলো সঠিক ক্রমে ট্যাপ করুন।" })}
    >
      <div className="max-w-2xl rounded-2xl border-2 border-ink bg-white p-6 text-ink shadow-pop-gold">
        <p className="text-sm font-semibold text-ink/60">{t({ en: `Round ${round + 1} of ${sentenceGame.length}`, bn: `রাউন্ড ${round + 1} / ${sentenceGame.length}` })}</p>

        <div className="mt-3 flex min-h-[64px] flex-wrap gap-2 rounded-xl border-2 border-dashed border-line p-3" aria-label="Your sentence">
          {built.length === 0 && <span className="text-ink/40">{t({ en: "Your sentence appears here", bn: "আপনার বাক্য এখানে দেখাবে" })}</span>}
          {built.map((b) => (
            <button key={b.id} onClick={() => remove(b)} className="rounded-lg bg-forest px-4 py-2 text-lg font-semibold text-white">{b.w}</button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2" aria-label="Word choices">
          {pool.map((p) => (
            <button key={p.id} onClick={() => add(p)} className={`${tile[p.id % 4]} rounded-lg border-2 border-ink px-4 py-2 text-lg font-semibold shadow-pop-ink transition-transform hover:-translate-y-0.5 ${p.id % 2 ? "rotate-1" : "-rotate-1"}`}>{p.w}</button>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button onClick={check} disabled={pool.length > 0} className="btn-primary disabled:opacity-40">{t({ en: "Check", bn: "যাচাই করুন" })}</button>
          {result === "ok" && (
            <>
              <p role="status" className="font-hand text-2xl text-leaf">✓ {t({ en: "Perfect!", bn: "দারুণ!" })}</p>
              <button onClick={() => setRound((round + 1) % sentenceGame.length)} className="btn-ghost">{t({ en: "Next", bn: "পরেরটি" })}</button>
            </>
          )}
          {result === "no" && <p role="status" className="font-hand text-2xl text-margin">{t({ en: "Not quite. Tap a word to move it.", bn: "হয়নি। শব্দে ট্যাপ করে সরান।" })}</p>}
          <span className="ml-auto text-sm font-semibold text-ink/60">{t({ en: `Solved: ${wins}`, bn: `সমাধান: ${wins}` })}</span>
        </div>
      </div>
    </Section>
  );
}
