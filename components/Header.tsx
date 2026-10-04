"use client";
import { useEffect, useState } from "react";
import { nav, offer, site } from "@/lib/content";
import { useLang, ui } from "./LangProvider";
import { LoginModal } from "./LoginModal";

export function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [showOffer, setShowOffer] = useState(false);

  useEffect(() => {
    const live = !offer.endsAt || new Date(offer.endsAt).getTime() > Date.now();
    setShowOffer(live);
  }, []);

  return (
    <>
      {showOffer && (
        <div className="bg-pencil text-ink">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-2 text-sm font-semibold">
            <p>{t(offer.text)}</p>
            <div className="flex items-center gap-3">
              <a href="#contact" className="underline underline-offset-4">{t(ui.apply)}</a>
              <button aria-label={t(ui.close)} onClick={() => setShowOffer(false)} className="text-lg leading-none">×</button>
            </div>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-2 font-display text-xl font-bold text-forest">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-forest text-sm text-white">GV</span>
            {site.name}
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-[15px] font-medium text-ink/75 hover:text-forest">
                {t(n.label)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "en" ? "bn" : "en")}
              className="chip"
              aria-label="Switch language"
            >
              {lang === "en" ? "বাংলা" : "EN"}
            </button>
            <button onClick={() => setLogin(true)} className="hidden text-sm font-semibold text-forest sm:block">
              {t(ui.login)}
            </button>
            <a href="#contact" className="btn-primary hidden !px-5 !py-2 text-sm sm:inline-flex">{t(ui.apply)}</a>
            <button
              className="grid h-10 w-10 place-items-center rounded-md border-2 border-line lg:hidden"
              aria-label={t(ui.menu)} aria-expanded={open} onClick={() => setOpen(!open)}
            >
              <span className="block h-0.5 w-5 bg-ink before:absolute before:-translate-y-1.5 before:block before:h-0.5 before:w-5 before:bg-ink after:absolute after:translate-y-1.5 after:block after:h-0.5 after:w-5 after:bg-ink" />
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-line bg-paper px-5 pb-5 lg:hidden" aria-label="Mobile">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="block border-b border-line py-3 text-lg font-medium">
                {t(n.label)}
              </a>
            ))}
            <div className="mt-4 flex gap-3">
              <button onClick={() => { setOpen(false); setLogin(true); }} className="btn-ghost flex-1">{t(ui.login)}</button>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary flex-1">{t(ui.apply)}</a>
            </div>
          </nav>
        )}
      </header>
      <LoginModal open={login} onClose={() => setLogin(false)} />
    </>
  );
}
