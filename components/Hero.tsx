"use client";
import { useState } from "react";
import { heroSentences } from "@/lib/content";
import { useLang } from "./LangProvider";
import { Bunting, Skyline } from "./Art";

export function Hero() {
  const { t } = useLang();
  const [i, setI] = useState(0);
  const [picking, setPicking] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [wrongTry, setWrongTry] = useState<string | null>(null);
  const s = heroSentences[i];

  function choose(opt: string) {
    if (opt === s.answer) { setFixed(true); setPicking(false); setWrongTry(null); }
    else setWrongTry(opt);
  }
  function next() {
    setI((i + 1) % heroSentences.length);
    setFixed(false); setPicking(false); setWrongTry(null);
  }

  return (
    <section id="top" className="relative overflow-hidden">
      {/* warm sun glow behind the notebook */}
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-[34rem] w-[34rem] rounded-full bg-pencil/30 blur-3xl" />
      <Bunting className="absolute inset-x-0 top-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-14 pt-24 sm:pt-28 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-rise">
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-forest-deep sm:text-7xl">
            {t({ en: "English that sticks, one step at a time.", bn: "ধাপে ধাপে ইংরেজি, যা সত্যিই মনে থাকে।" })}
          </h1>
          <p className="mt-5 max-w-lg text-lg text-ink/75">
            {t({
              en: "Bilingual classes for Play to Class 12 in Dhaka. Practise grammar, phonics and speaking with teachers who correct you kindly.",
              bn: "ঢাকায় প্লে থেকে দ্বাদশ শ্রেণি পর্যন্ত দ্বিভাষিক ক্লাস। গ্রামার, ফনিক্স ও স্পিকিং অনুশীলন করুন এমন শিক্ষকদের সাথে, যারা ভুল শুধরে দেন যত্ন করে।",
            })}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#courses" className="btn-primary">{t({ en: "See courses", bn: "কোর্স দেখুন" })}</a>
            <a href="#skill-test" className="btn-ghost">{t({ en: "Take the free skill test", bn: "বিনামূল্যে দক্ষতা পরীক্ষা দিন" })}</a>
          </div>
        </div>

        {/* The memorable moment: a page from an exercise book you can correct yourself */}
        <div className="relative animate-rise [animation-delay:.15s]">
          <span aria-hidden className="absolute -right-3 -top-7 z-10 grid h-14 w-14 rotate-[9deg] place-items-center rounded-xl border-2 border-ink bg-pencil font-display text-3xl font-extrabold shadow-[3px_3px_0_#12231B]">A</span>
          <span aria-hidden className="absolute -bottom-6 -left-5 z-10 hidden h-14 w-14 -rotate-[10deg] place-items-center rounded-xl border-2 border-ink bg-[#F4B6B0] font-display text-3xl font-extrabold shadow-[3px_3px_0_#12231B] sm:grid">b</span>
          <div className="ruled margin-line -rotate-1 rounded-xl border border-line p-6 pl-16 shadow-[0_18px_40px_-18px_rgba(6,48,31,.35)] sm:p-8 sm:pl-20">
            <p className="font-hand text-2xl text-margin">
              {t({ en: "Tap the mistake and fix it:", bn: "ভুলটিতে ট্যাপ করে ঠিক করুন:" })}
            </p>

            <p className={`mt-4 text-2xl font-semibold leading-[36px] sm:text-3xl sm:leading-[36px] ${wrongTry ? "animate-shake" : ""}`} key={`${i}-${wrongTry}`}>
              {s.parts.map((w, idx) =>
                idx === s.wrong ? (
                  fixed ? (
                    <span key={idx} className="rounded bg-leaf/15 px-1 text-leaf">{s.answer} </span>
                  ) : (
                    <button
                      key={idx}
                      onClick={() => setPicking(!picking)}
                      aria-expanded={picking}
                      className="squiggle mr-2 rounded px-0.5 hover:bg-margin/10"
                    >
                      {w}
                    </button>
                  )
                ) : (
                  <span key={idx}>{w} </span>
                ),
              )}
            </p>

            {picking && !fixed && (
              <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Choose the correct word">
                {s.options.map((o) => (
                  <button key={o} onClick={() => choose(o)} className="chip !text-base">{o}</button>
                ))}
              </div>
            )}

            <div aria-live="polite" className="mt-4 min-h-[72px] font-hand text-2xl">
              {wrongTry && !fixed && <p className="text-margin">{t({ en: `Not “${wrongTry}”. Try again!`, bn: `“${wrongTry}” নয়। আবার চেষ্টা করুন!` })}</p>}
              {fixed && (
                <div>
                  <p className="text-leaf">✓ {t(s.note)}</p>
                  <button onClick={next} className="mt-2 text-lg font-semibold text-forest underline underline-offset-4">
                    {t({ en: "Next sentence", bn: "পরের বাক্য" })}
                  </button>
                </div>
              )}
              {!picking && !fixed && !wrongTry && <p className="text-ink/40">{t({ en: "Hint: it is the underlined word.", bn: "ইঙ্গিত: দাগ দেওয়া শব্দটি।" })}</p>}
            </div>
          </div>
        </div>
      </div>
      <Skyline className="block h-28 w-full sm:h-44" />
    </section>
  );
}
