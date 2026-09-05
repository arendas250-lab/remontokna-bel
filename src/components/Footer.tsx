"use client";

import { useModal } from "./modal-context";
import { SITE, SERVICE_MENU } from "@/lib/site";

export default function Footer() {
  const { open } = useModal();

  return (
    <footer id="contacts" className="bg-navy-dark text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="text-xl font-extrabold text-white">
              ремонт<span className="text-accent">окна</span>.бел
            </div>
            <p className="mt-3 text-sm leading-relaxed">Срочный ремонт окон в Гродно</p>
            <p className="mt-4 text-sm leading-relaxed">
              {SITE.addressShort}
              <br />
              {SITE.hours}
            </p>
            <a href={SITE.phoneHref} className="mt-4 block text-lg font-bold text-white">
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="mt-1 block text-sm">
              {SITE.email}
            </a>
            <button
              onClick={() => open()}
              className="mt-5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Заказать звонок
            </button>
          </div>

          {SERVICE_MENU.map((group) => (
            <div key={group.title}>
              <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-white/50">{group.title}</h4>
              <ul className="space-y-2 text-sm">
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#services" className="transition hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2020–2026 «ремонтокна.бел» — ремонт окон в Гродно и области</span>
          <a href="#" className="hover:text-white">
            Политика конфиденциальности и обработки персональных данных
          </a>
        </div>
      </div>
    </footer>
  );
}
