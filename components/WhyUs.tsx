"use client";
import { why } from "@/lib/content";
import { useLang } from "./LangProvider";
import { Section } from "./Section";
import { IconChat, IconHeart, IconLife, IconPath } from "./Art";

const icons = [<IconChat key="a" />, <IconPath key="b" />, <IconHeart key="c" />, <IconLife key="d" />];
const tints = ["bg-pencil", "bg-mint", "bg-blush", "bg-sky"];

export function WhyUs() {
  const { t } = useLang();
  return (
    <Section id="why" title={t({ en: "Why families choose Grammar Village", bn: "কেন অভিভাবকরা গ্রামার ভিলেজ বেছে নেন" })}>
      <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
        {why.map((w, i) => (
          <div key={i} className="flex gap-5">
            <span className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl border-2 border-ink shadow-pop-sm ${tints[i]}`}>{icons[i]}</span>
            <div>
            <h3 className="font-display text-xl font-bold">{t(w.title)}</h3>
            <p className="mt-1 max-w-sm text-ink/75">{t(w.body)}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
