"use client";
import Link from "next/link";
import { courses, nav, navHref, site } from "@/lib/content";
import { useLang } from "./LangProvider";

export function Footer() {
  const { t } = useLang();
  return (
    <>
      <footer className="bg-forest-deep text-white/80">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold text-white">{site.name}</p>
            <p className="mt-2 max-w-xs text-sm">{t({ en: "Bilingual English classes for Play to Class 12.", bn: "প্লে থেকে দ্বাদশ শ্রেণির জন্য দ্বিভাষিক ইংরেজি ক্লাস।" })}</p>
          </div>
          <div>
            <p className="font-semibold text-white">{t({ en: "Courses", bn: "কোর্স" })}</p>
            <ul className="mt-2 space-y-1 text-sm">{courses.map((c) => <li key={c.id}><Link href={`/courses#${c.id}`} className="hover:text-white">{t(c.classes)}</Link></li>)}</ul>
          </div>
          <div>
            <p className="font-semibold text-white">{t({ en: "Quick links", bn: "দ্রুত লিংক" })}</p>
            <ul className="mt-2 space-y-1 text-sm">{nav.map((n) => <li key={n.id}><Link href={navHref(n.id)} className="hover:text-white">{t(n.label)}</Link></li>)}</ul>
          </div>
        </div>
        <p className="border-t border-white/10 py-5 text-center text-sm">© {new Date().getFullYear()} {site.name}</p>
      </footer>
      <a
        href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-2xl text-white shadow-lg"
      >
        💬
      </a>
    </>
  );
}
