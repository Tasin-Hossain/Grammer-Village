"use client";
import Link from "next/link";
import { courses } from "@/lib/content";
import { useLang } from "./LangProvider";
import { Section } from "./Section";
import { courseLook } from "./courseLook";

// Home page teaser. Full details live on /courses.
export function Courses() {
  const { t } = useLang();
  return (
    <Section
      id="courses"
      tone="soft"
      title={t({ en: "Four levels, one clear path", bn: "চারটি লেভেল, একটি স্পষ্ট পথ" })}
      intro={t({ en: "Pick the class level to see what is taught.", bn: "ক্লাসের লেভেল বেছে কী পড়ানো হয় দেখুন।" })}
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((c) => (
          <li key={c.id}>
            <Link
              href={`/courses#${c.id}`}
              className={`${courseLook[c.id].bg} flex h-full flex-col rounded-2xl border-2 border-ink p-5 shadow-pop-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-pop-lg`}
            >
              {courseLook[c.id].icon}
              <span className="mt-3 block font-display text-2xl font-extrabold">{t(c.name)}</span>
              <span className="block font-semibold">{t(c.classes)}</span>
              <span className="block text-sm text-ink/70">{t(c.age)}</span>
              <span className="mt-3 flex-1 text-ink/80">{t(c.intro)}</span>
              <span className="mt-4 font-semibold underline underline-offset-4">
                {t({ en: "See details →", bn: "বিস্তারিত দেখুন →" })}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/courses" className="btn-primary mt-10">
        {t({ en: "View all courses", bn: "সব কোর্স দেখুন" })}
      </Link>
    </Section>
  );
}
