"use client";
import { notices } from "@/lib/content";
import { useLang } from "./LangProvider";
import { Section } from "./Section";

export function Notices() {
  const { t, lang } = useLang();
  const fmt = (d: string) => new Date(d).toLocaleDateString(lang === "bn" ? "bn-BD" : "en-GB", { day: "numeric", month: "short", year: "numeric" });
  return (
    <Section id="notice" title={t({ en: "Notice board", bn: "নোটিশ বোর্ড" })}>
      <ul className="max-w-3xl divide-y divide-line border-y border-line">
        {notices.map((n, i) => (
          <li key={i} className="grid gap-1 py-5 sm:grid-cols-[130px_1fr] sm:gap-6">
            <div>
              <time dateTime={n.date} className="font-hand text-xl text-margin">{fmt(n.date)}</time>
              <p className="text-sm font-semibold text-leaf">{t(n.tag)}</p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold">{t(n.title)}</h3>
              <p className="mt-1 text-ink/75">{t(n.body)}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
