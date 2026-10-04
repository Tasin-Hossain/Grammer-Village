"use client";
import { useState } from "react";
import { site, videoCategories, videos } from "@/lib/content";
import { useLang } from "./LangProvider";
import { Section } from "./Section";

export function Videos() {
  const { t } = useLang();
  const [cat, setCat] = useState("all");
  const list = videos.filter((v) => cat === "all" || v.cat === cat);
  return (
    <Section
      id="videos" tone="soft"
      title={t({ en: "Learn from our video lessons", bn: "আমাদের ভিডিও পাঠ থেকে শিখুন" })}
      intro={t({ en: "Free lessons on our YouTube channel.", bn: "আমাদের YouTube চ্যানেলে বিনামূল্যে পাঠ।" })}
    >
      <div className="flex flex-wrap gap-2">
        {videoCategories.map((c) => (
          <button key={c.id} aria-pressed={cat === c.id} className="chip" onClick={() => setCat(c.id)}>{t(c.label)}</button>
        ))}
      </div>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((v, i) => (
          <li key={i}>
            <a href={v.youtubeId ? `https://www.youtube.com/watch?v=${v.youtubeId}` : site.youtube} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-forest">
                {v.youtubeId ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`} alt="" className="h-full w-full object-cover" loading="lazy" />
                ) : null}
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-pencil text-xl text-ink transition-transform group-hover:scale-110">▶</span>
                </span>
              </div>
              <h3 className="mt-3 font-semibold">{t(v.title)}</h3>
            </a>
          </li>
        ))}
      </ul>
      <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-8">{t({ en: "Subscribe on YouTube", bn: "YouTube এ সাবস্ক্রাইব করুন" })}</a>
    </Section>
  );
}
