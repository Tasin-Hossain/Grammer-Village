"use client";
import Link from "next/link";
import { useState } from "react";
import { courses } from "@/lib/content";
import { useLang } from "./LangProvider";
import { Section } from "./Section";
import { courseLook } from "./courseLook";

const levels = [
  { id: "basic", label: { en: "Just starting", bn: "সবে শুরু" } },
  { id: "mid", label: { en: "Know the basics", bn: "বেসিক জানি" } },
  { id: "adv", label: { en: "Want a challenge", bn: "চ্যালেঞ্জ চাই" } },
];

const advice: Record<string, { en: string; bn: string }> = {
  basic: { en: "Start from the first month. We will build up step by step.", bn: "প্রথম মাস থেকে শুরু করুন। আমরা ধাপে ধাপে এগোব।" },
  mid: { en: "Take the skill test. We will place you in the right month.", bn: "দক্ষতা পরীক্ষাটি দিন। আমরা সঠিক মাসে বসিয়ে দেব।" },
  adv: { en: "Ask about the intensive batch with one-to-one feedback.", bn: "একক ফিডব্যাকসহ ইনটেনসিভ ব্যাচ সম্পর্কে জিজ্ঞেস করুন।" },
};

export function CoursesPage() {
  const { t } = useLang();
  const [level, setLevel] = useState<string | null>(null);

  return (
    <>
      <section className="bg-forest-soft py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold text-ink/60">
            <Link href="/" className="hover:text-forest">{t({ en: "Home", bn: "হোম" })}</Link>
            <span aria-hidden className="mx-2">/</span>
            <span className="text-ink">{t({ en: "Courses", bn: "কোর্স" })}</span>
          </nav>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-forest-deep sm:text-6xl">
            <span className="marker">{t({ en: "Courses for every class level", bn: "প্রতিটি ক্লাসের জন্য কোর্স" })}</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink/75">
            {t({
              en: "Four written outlines, each made for a different age. See what is taught and how the classes run.",
              bn: "চারটি লিখিত আউটলাইন, প্রতিটি আলাদা বয়সের জন্য। কী পড়ানো হয় এবং ক্লাস কীভাবে চলে দেখুন।",
            })}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label={t({ en: "Jump to a level", bn: "লেভেলে যান" })}>
            {courses.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="chip">{t(c.name)} · {t(c.classes)}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-14 px-5">
          {courses.map((c) => (
            <article key={c.id} id={c.id} className="grid gap-6 lg:grid-cols-[320px_1fr]">
              <div className={`${courseLook[c.id].bg} rounded-2xl border-2 border-ink p-6 shadow-pop-lg lg:sticky lg:top-24 lg:self-start`}>
                {courseLook[c.id].icon}
                <h2 className="mt-4 font-display text-3xl font-extrabold">{t(c.name)}</h2>
                <p className="font-semibold">{t(c.classes)}</p>
                <p className="text-sm text-ink/70">{t(c.age)}</p>
              </div>

              <div className="ruled margin-line rounded-xl border border-line p-7 pl-16 sm:pl-20">
                <p className="font-hand text-2xl text-margin">{t(c.age)}</p>
                <p className="mt-2 max-w-lg text-lg text-ink/80">{t(c.intro)}</p>
                <h3 className="mt-5 font-display text-xl font-bold">{t({ en: "What is taught", bn: "কী পড়ানো হয়" })}</h3>
                <ul className="mt-1 text-lg">
                  {c.topics.map((tp, i) => (
                    <li key={i} className="flex gap-3 leading-[36px]">
                      <span className="text-leaf">✓</span>
                      {t(tp)}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm font-semibold text-ink/70">{t(c.format)}</p>
                <Link href="/#contact" className="btn-primary mt-6">
                  {t({ en: "Ask about this level", bn: "এই লেভেল সম্পর্কে জানুন" })}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Section
        id="level-help"
        tone="soft"
        title={t({ en: "Not sure where to start?", bn: "কোথা থেকে শুরু করবেন বুঝতে পারছেন না?" })}
        intro={t({ en: "Tell us how comfortable you feel with English.", bn: "ইংরেজিতে আপনি কতটা স্বচ্ছন্দ জানান।" })}
      >
        <div className="flex flex-wrap gap-2">
          {levels.map((l) => (
            <button key={l.id} aria-pressed={level === l.id} className="chip" onClick={() => setLevel(l.id)}>
              {t(l.label)}
            </button>
          ))}
        </div>
        {level && <p role="status" className="mt-4 max-w-xl rounded-lg bg-white p-4 text-lg">{t(advice[level])}</p>}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/#skill-test" className="btn-primary">{t({ en: "Take the free skill test", bn: "বিনামূল্যে দক্ষতা পরীক্ষা দিন" })}</Link>
          <Link href="/#contact" className="btn-ghost">{t({ en: "Talk to us", bn: "আমাদের সাথে কথা বলুন" })}</Link>
        </div>
      </Section>
    </>
  );
}
