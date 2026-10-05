"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, navHref, offer } from "@/lib/content";
import { useLang, ui } from "./LangProvider";

export function Header() {
  const { lang, setLang, t } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [showOffer, setShowOffer] = useState(false);
  const [spy, setSpy] = useState("");

  useEffect(() => {
    const live = !offer.endsAt || new Date(offer.endsAt).getTime() > Date.now();
    setShowOffer(live);
  }, []);

  // Home page only: highlight the section currently in the middle of the screen
  useEffect(() => {
    if (pathname !== "/") {
      setSpy("");
      return;
    }
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setSpy(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

  // On /courses the Courses link is active; on the home page the scroll spy decides
  const active = pathname.startsWith("/courses") ? "courses" : spy;

  return (
    <>
      {showOffer && (
        <div className="bg-pencil text-ink">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-2 text-sm font-semibold">
            <p>{t(offer.text)}</p>
            <div className="flex items-center gap-3">
              <Link href="/#contact" className="underline underline-offset-4">
                {t(ui.apply)}
              </Link>
              <button
                aria-label={t(ui.close)}
                onClick={() => setShowOffer(false)}
                className="text-lg leading-none"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-2.5 font-display font-bold text-forest">
            <Image
              src="/logo/logo.png"
              alt=""
              width={40}
              height={40}
              priority
              className="h-9 w-9 object-contain sm:h-14 sm:w-14"
            />
            <span className="font-display text-2xl">
              Grammar <span className="text-red-600!">Village</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
            {nav.map((n) => {
              const on = active === n.id;
              return (
                <Link
                  key={n.id}
                  href={navHref(n.id)}
                  aria-current={on ? (n.id === "courses" ? "page" : "location") : undefined}
                  className={`text-[15px] font-medium transition-colors ${
                    on
                      ? "text-forest underline decoration-pencil decoration-4 underline-offset-8"
                      : "text-ink/75 hover:text-forest"
                  }`}
                >
                  {t(n.label)}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "en" ? "bn" : "en")}
              className="chip"
              aria-label="Switch language"
            >
              {lang === "en" ? "বাংলা" : "EN"}
            </button>
            <Link href="/#contact" className="btn-primary hidden px-5! py-2! text-sm sm:inline-flex">
              {t(ui.apply)}
            </Link>
            <button
              className="grid h-10 w-10 place-items-center rounded-md border-2 border-line lg:hidden"
              aria-label={t(ui.menu)}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span className="block h-0.5 w-5 bg-ink before:absolute before:-translate-y-1.5 before:block before:h-0.5 before:w-5 before:bg-ink after:absolute after:translate-y-1.5 after:block after:h-0.5 after:w-5 after:bg-ink" />
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-line bg-paper px-5 pb-5 lg:hidden" aria-label="Mobile">
            {nav.map((n) => {
              const on = active === n.id;
              return (
                <Link
                  key={n.id}
                  href={navHref(n.id)}
                  onClick={() => setOpen(false)}
                  aria-current={on ? (n.id === "courses" ? "page" : "location") : undefined}
                  className={`block border-b border-line py-3 text-lg font-medium ${
                    on ? "border-l-4 border-l-pencil pl-3 text-forest" : ""
                  }`}
                >
                  {t(n.label)}
                </Link>
              );
            })}
            <Link href="/#contact" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">
              {t(ui.apply)}
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
