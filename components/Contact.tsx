"use client";
import { useState } from "react";
import { site } from "@/lib/content";
import { useLang } from "./LangProvider";
import { Section } from "./Section";

export function Contact() {
  const { t } = useLang();
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      setState("ok"); form.reset();
    } catch { setState("err"); }
  }

  return (
    <Section id="contact" tone="soft" title={t({ en: "Visit us or send a message", bn: "আসুন অথবা মেসেজ পাঠান" })}>
      <div className="grid gap-12 lg:grid-cols-2">
        <form onSubmit={submit} className="space-y-4">
          <label className="block text-sm font-semibold">{t({ en: "Your name", bn: "আপনার নাম" })}
            <input name="name" required className="field mt-1" autoComplete="name" />
          </label>
          <label className="block text-sm font-semibold">{t({ en: "Phone number", bn: "ফোন নম্বর" })}
            <input name="phone" required type="tel" className="field mt-1" autoComplete="tel" />
          </label>
          <label className="block text-sm font-semibold">{t({ en: "Message", bn: "বার্তা" })}
            <textarea name="message" rows={4} className="field mt-1" />
          </label>
          <button className="btn-primary" disabled={state === "sending"}>
            {state === "sending" ? t({ en: "Sending...", bn: "পাঠানো হচ্ছে..." }) : t({ en: "Send message", bn: "বার্তা পাঠান" })}
          </button>
          <p role="status" aria-live="polite">
            {state === "ok" && <span className="font-semibold text-leaf">{t({ en: "Sent. We will call you soon.", bn: "পাঠানো হয়েছে। শীঘ্রই কল করব।" })}</span>}
            {state === "err" && <span className="font-semibold text-margin">{t({ en: "Could not send. Please call or use WhatsApp.", bn: "পাঠানো যায়নি। কল করুন বা WhatsApp ব্যবহার করুন।" })}</span>}
          </p>
        </form>

        <div>
          <ul className="space-y-2 text-lg">
            <li>{t(site.address)}</li>
            <li><a className="font-semibold text-forest underline underline-offset-4" href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a></li>
            <li><a className="font-semibold text-forest underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
          <iframe title="Map" src={site.mapEmbed} loading="lazy" className="mt-5 h-64 w-full rounded-xl border-0" />
          <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-forest underline underline-offset-4">
            {t({ en: "Open in Google Maps", bn: "Google Maps এ খুলুন" })}
          </a>
        </div>
      </div>
    </Section>
  );
}
