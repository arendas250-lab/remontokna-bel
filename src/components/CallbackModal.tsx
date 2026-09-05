"use client";

import { useEffect, useState } from "react";
import { useModal } from "./modal-context";
import { SITE } from "@/lib/site";

export default function CallbackModal() {
  const { isOpen, presetService, close } = useModal();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => setSubmitted(false), 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/60 px-4"
      onClick={close}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue/10 text-2xl text-blue">
              ✓
            </div>
            <h3 className="text-xl font-bold text-navy">Заявка отправлена!</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Мы перезвоним вам в течение 15 минут.
            </p>
            <button
              onClick={close}
              className="mt-6 w-full rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-dark"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="mb-5 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-navy">Заказать звонок</h3>
                <p className="mt-1 text-sm text-foreground/60">
                  Оставьте заявку — перезвоним в течение 15 минут
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Закрыть"
                className="-mt-1 -mr-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-foreground/40 transition hover:bg-black/5 hover:text-foreground"
              >
                ✕
              </button>
            </div>

            {presetService && (
              <div className="mb-4 rounded-lg bg-blue/10 px-3 py-2 text-sm font-medium text-blue-dark">
                Услуга: {presetService}
              </div>
            )}

            <div className="space-y-3">
              <input
                required
                type="text"
                placeholder="Ваше имя"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-blue"
              />
              <input
                required
                type="tel"
                placeholder="+375 (__) ___-__-__"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-blue"
              />
              <textarea
                placeholder="Опишите проблему (необязательно)"
                rows={3}
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-blue"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Отправить заявку
            </button>
            <p className="mt-3 text-center text-xs text-foreground/50">
              Нажимая на кнопку, вы соглашаетесь с политикой обработки персональных данных
            </p>
            <p className="mt-3 text-center text-sm text-foreground/60">
              или звоните: <a href={SITE.phoneHref} className="font-semibold text-navy">{SITE.phone}</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
