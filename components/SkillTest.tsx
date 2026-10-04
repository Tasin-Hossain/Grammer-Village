"use client";
import { useState } from "react";
import { quiz } from "@/lib/content";
import { useLang } from "./LangProvider";
import { Section } from "./Section";

export function SkillTest() {
  const { t } = useLang();
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const done = step >= quiz.length;
  const q = quiz[step];

  function next() {
    if (picked === q.a) setScore((s) => s + 1);
    setPicked(null);
    setStep(step + 1);
  }
  function restart() { setStep(0); setScore(0); setPicked(null); }

  const result =
    score <= 2
      ? { en: "Start with the basic level", bn: "বেসিক লেভেল থেকে শুরু করুন" }
      : score <= 4
      ? { en: "You are at the intermediate level", bn: "আপনি ইন্টারমিডিয়েট লেভেলে আছেন" }
      : { en: "You are ready for the advanced level", bn: "আপনি অ্যাডভান্সড লেভেলের জন্য তৈরি" };

  return (
    <Section
      id="skill-test"
      title={t({ en: "Check your grammar in two minutes", bn: "দুই মিনিটে আপনার গ্রামার যাচাই করুন" })}
      intro={t({ en: "Six questions. No sign-up needed.", bn: "ছয়টি প্রশ্ন। সাইন-আপ লাগবে না।" })}
    >
      <div className="ruled margin-line max-w-2xl rounded-xl border border-line p-7 pl-16 sm:pl-20">
        {!done ? (
          <>
            <p className="font-hand text-2xl text-margin">{t({ en: `Question ${step + 1} of ${quiz.length}`, bn: `প্রশ্ন ${step + 1} / ${quiz.length}` })}</p>
            <p className="mt-2 text-2xl font-semibold leading-[36px]">{q.q}</p>
            <div className="mt-4 grid gap-2" role="radiogroup" aria-label={q.q}>
              {q.options.map((o, i) => (
                <button
                  key={i} role="radio" aria-checked={picked === i} onClick={() => setPicked(i)}
                  className={`rounded-lg border-2 px-4 py-2.5 text-left text-lg font-medium transition-colors ${picked === i ? "border-forest bg-forest text-white" : "border-line bg-white hover:border-forest"}`}
                >
                  {o}
                </button>
              ))}
            </div>
            <button disabled={picked === null} onClick={next} className="btn-primary mt-6 disabled:opacity-40">
              {step === quiz.length - 1 ? t({ en: "See my result", bn: "ফলাফল দেখুন" }) : t({ en: "Next question", bn: "পরের প্রশ্ন" })}
            </button>
          </>
        ) : (
          <div aria-live="polite">
            <p className="font-hand text-2xl text-margin">{t({ en: "Your score", bn: "আপনার স্কোর" })}</p>
            <p className="font-display text-6xl font-extrabold text-forest">{score}/{quiz.length}</p>
            <p className="mt-3 text-xl font-semibold">{t(result)}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#courses" className="btn-primary">{t({ en: "See matching courses", bn: "মানানসই কোর্স দেখুন" })}</a>
              <button onClick={restart} className="btn-ghost">{t({ en: "Try again", bn: "আবার দিন" })}</button>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
