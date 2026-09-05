"use client";

import { useModal } from "./modal-context";
import { MASTERS } from "@/lib/site";

export default function TeamSection() {
  const { open } = useModal();

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Наши лучшие мастера</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MASTERS.map((m) => (
            <div key={m.name} className="rounded-xl border border-border bg-background p-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/10 text-2xl">🧑‍🔧</div>
              <div className="mt-3 font-bold text-navy">{m.name}</div>
              <div className="text-sm text-foreground/60">{m.role}</div>
              <div className="mt-2 text-sm text-foreground/70">
                Специализация: {m.spec}
                <br />
                Опыт работы: {m.experience}
              </div>
              <button
                onClick={() => open(`Вызвать мастера — ${m.name}`)}
                className="mt-4 w-full rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-dark"
              >
                Вызвать мастера
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
