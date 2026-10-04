"use client";
import { useLang } from "./LangProvider";
import { Section } from "./Section";

// Replace these placeholders with real photos: put files in /public/gallery and use next/image.
const photos = [
  { en: "Interactive classes", bn: "ইন্টারঅ্যাক্টিভ ক্লাস", c: "bg-forest" },
  { en: "Grammar books", bn: "গ্রামার বই", c: "bg-margin" },
  { en: "Practice sessions", bn: "অনুশীলন সেশন", c: "bg-leaf" },
  { en: "Award day", bn: "পুরস্কার বিতরণ", c: "bg-pencil text-ink" },
];

export function About() {
  const { t } = useLang();
  return (
    <Section id="about" title={t({ en: "Why we started", bn: "কেন আমরা শুরু করেছিলাম" })}>
      <div className="grid gap-10 lg:grid-cols-2">
        <p className="max-w-md text-lg text-ink/80">
          {t({
            en: "Grammar Village was created to move away from dry textbook teaching. Students learn in a lively, hands-on way, with games, speaking practice and a clear path from one level to the next.",
            bn: "শুকনো পাঠ্যবইয়ের পড়ানো থেকে সরে আসতেই গ্রামার ভিলেজের শুরু। এখানে শিক্ষার্থীরা খেলা, কথা বলার অনুশীলন এবং এক লেভেল থেকে পরের লেভেলে যাওয়ার স্পষ্ট পথ ধরে প্রাণবন্তভাবে শেখে।",
          })}
        </p>
        <ul className="grid grid-cols-2 gap-4" aria-label="Gallery">
          {photos.map((p, i) => (
            <li key={i} className={`grid aspect-[4/3] place-items-end rounded-xl p-4 text-white ${p.c}`}>
              <span className="font-hand text-2xl">{t(p)}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
