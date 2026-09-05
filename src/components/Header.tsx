"use client";

import { useState } from "react";
import { useModal } from "./modal-context";
import { SITE } from "@/lib/site";

const NAV_LINKS = [
  { href: "#prices", label: "Цены" },
  { href: "#services", label: "Услуги" },
  { href: "#works", label: "Работы" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#about", label: "О компании" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  const { open } = useModal();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-navy text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2 text-lg font-extrabold tracking-tight sm:text-xl">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white">🪟</span>
          <span>
            ремонт<span className="text-accent">окна</span>.бел
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white/85 lg:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={SITE.phoneHref} className="text-right leading-tight">
            <span className="block text-base font-bold">{SITE.phone}</span>
            <span className="block text-xs text-white/60">{SITE.hours}</span>
          </a>
          <button
            onClick={() => open()}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
          >
            Заказать звонок
          </button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-xl lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Меню"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-navy-dark px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="py-1">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
            <a href={SITE.phoneHref} className="text-base font-bold">
              {SITE.phone}
            </a>
            <span className="text-xs text-white/60">{SITE.hours}</span>
            <button
              onClick={() => {
                setMenuOpen(false);
                open();
              }}
              className="mt-1 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
            >
              Заказать звонок
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
