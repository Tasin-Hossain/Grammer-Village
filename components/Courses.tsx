"use client";
import { useState } from "react";
import { courses } from "@/lib/content";
import { useLang } from "./LangProvider";
import { Section } from "./Section";
import { IconBook, IconCap, IconKids, IconPencil } from "./Art";

const look: Record<string, { bg: string; icon: JSX.Element }> = {
  kids: { bg: "bg-pencil", icon: <IconKids /> },
  primary: { bg: "bg-[#F4B6B0]", icon: <IconBook /> },
  junior: { bg: "bg-[#BFE3CF]", icon: <IconPencil /> },
  advanced: { bg: "bg-[#BCDDEE]", icon: <IconCap /> },
};

const levels = [
  { id: "basic", label: { en: "Just starting", bn: "সবে শুরু" } },
  { id: "mid", label: { en: "Know the basics", bn: "বেসিক জানি" } },
  { id: "adv", label: { en: "Want a challenge", bn: "চ্যালেঞ্জ চাই" } },
];

export function Courses() {
  const { t } = useLang();
  const [active, setActive] = useState(courses[0].id);
  const [level, setLevel] = useState<string | null>(null);
  const c = courses.find((x) => x.id === active)!;

  const advice: Record<string, { en: string; bn: string }> = {
    basic: { en: "Start from the first month. We will build up step by step.", bn: "প্রথম মাস থেকে শুরু করুন। আমরা ধাপে ধাপে এগোব।" },
    mid: { en: "Take the skill test below. We will place you in the right month.", bn: "নিচের দক্ষতা পরীক্ষাটি দিন। আমরা সঠিক মাসে বসিয়ে দেব।" },
    adv: { en: "Ask about the intensive batch with one-to-one feedback.", bn: "একক ফিডব্যাকসহ ইনটেনসিভ ব্যাচ সম্পর্কে জিজ্ঞেস করুন।" },
  };

  return (
    <Section
      id="courses"
      tone="soft"
      title={t({ en: "Pick the class level, see what is taught", bn: "ক্লাসের লেভেল বেছে নিন, কী পড়ানো হয় দেখুন" })}
      intro={t({ en: "Four outlines, each written for a different age.", bn: "চারটি আউটলাইন, প্রতিটি আলাদা বয়সের জন্য।" })}
    >
      <div role="tablist" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((x) => {
          const on = active === x.id;
          return (
            <button
              key={x.id} role="tab" aria-selected={on} onClick={() => setActive(x.id)}
              className={`${look[x.id].bg} rounded-2xl border-2 border-ink p-5 text-left transition-all duration-200 ${on ? "-translate-y-1 shadow-[6px_6px_0_#06301F]" : "shadow-[2px_2px_0_#06301F] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#06301F]"}`}
            >
              {look[x.id].icon}
              <span className="mt-3 block font-display text-2xl font-extrabold">{t(x.name)}</span>
              <span className="block font-semibold">{t(x.classes)}</span>
              <span className="block text-sm text-ink/70">{t(x.age)}</span>
            </button>
          );
        })}
      </div>

      <div role="tabpanel" className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="ruled margin-line rounded-xl border border-line p-7 pl-16 sm:pl-20">
          <p className="font-hand text-2xl text-margin">{t(c.age)}</p>
          <h3 className="mt-1 font-display text-2xl font-bold">{t(c.classes)}</h3>
          <p className="mt-2 max-w-md text-ink/75">{t(c.intro)}</p>
          <ul className="mt-5 space-y-[0px] text-lg">
            {c.topics.map((tp, i) => (
              <li key={i} className="flex gap-3 leading-[36px]"><span className="text-leaf">✓</span>{t(tp)}</li>
            ))}
          </ul>
          <p className="mt-5 text-sm font-semibold text-ink/70">{t(c.format)}</p>
          <a href="#contact" className="btn-primary mt-6">{t({ en: "Ask about this level", bn: "এই লেভেল সম্পর্কে জানুন" })}</a>
        </div>

        <div>
          <h3 className="font-display text-xl font-bold">{t({ en: "Not sure where to start?", bn: "কোথা থেকে শুরু করবেন বুঝতে পারছেন না?" })}</h3>
          <p className="mt-1 text-ink/70">{t({ en: "Tell us how comfortable you feel with English.", bn: "ইংরেজিতে আপনি কতটা স্বচ্ছন্দ জানান।" })}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {levels.map((l) => (
              <button key={l.id} aria-pressed={level === l.id} className="chip" onClick={() => setLevel(l.id)}>{t(l.label)}</button>
            ))}
          </div>
          {level && <p role="status" className="mt-4 rounded-lg bg-white p-4 text-lg">{t(advice[level])}</p>}
        </div>
      </div>
    </Section>
  );
}
