"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "./LangProvider";

export function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLang();
  const [role, setRole] = useState<"student" | "teacher">("student");
  const [msg, setMsg] = useState("");
  const first = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    first.current?.focus();
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open, onClose]);

  if (!open) return null;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: connect your real auth here (NextAuth, Clerk, or your existing portal API).
    setMsg(t({ en: "Portal login is not connected yet.", bn: "পোর্টাল লগইন এখনো সংযুক্ত হয়নি।" }));
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-ink/60 p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label="Login">
      <div className="w-full max-w-md rounded-2xl bg-white p-7 shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between">
          <h2 className="font-display text-2xl font-bold">{t({ en: "Welcome back", bn: "স্বাগতম" })}</h2>
          <button onClick={onClose} aria-label="Close" className="text-2xl leading-none">×</button>
        </div>
        <div className="mt-5 flex gap-2" role="tablist">
          {(["student", "teacher"] as const).map((r) => (
            <button key={r} role="tab" aria-selected={role === r} className="chip flex-1" onClick={() => setRole(r)}>
              {r === "student" ? t({ en: "Student", bn: "শিক্ষার্থী" }) : t({ en: "Teacher", bn: "শিক্ষক" })}
            </button>
          ))}
        </div>
        <form onSubmit={submit} className="mt-5 space-y-4">
          <label className="block text-sm font-semibold">
            {t({ en: "Registration ID or email", bn: "রেজিস্ট্রেশন আইডি বা ইমেইল" })}
            <input ref={first} required className="field mt-1" autoComplete="username" />
          </label>
          <label className="block text-sm font-semibold">
            {t({ en: "Password", bn: "পাসওয়ার্ড" })}
            <input required type="password" className="field mt-1" autoComplete="current-password" />
          </label>
          <button className="btn-primary w-full">{t({ en: "Log in", bn: "লগইন করুন" })}</button>
          {msg && <p role="status" className="rounded-lg bg-pencil/30 p-3 text-sm">{msg}</p>}
        </form>
      </div>
    </div>
  );
}
