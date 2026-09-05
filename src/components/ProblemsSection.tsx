"use client";

import { useModal } from "./modal-context";
import { PROBLEMS } from "@/lib/site";

export default function ProblemsSection() {
  const { open } = useModal();

  return (
    <section id="services" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Основные неисправности окон</h2>
        <p className="mt-2 text-foreground/60">Выберите проблему — мы приедем и устраним её в день обращения</p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {PROBLEMS.map((p) => (
            <button
              key={p.title}
              onClick={() => open(p.title)}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background p-5 text-center transition hover:-translate-y-0.5 hover:border-blue hover:shadow-md"
            >
              <span className="text-sm font-semibold text-navy">{p.title}</span>
              <span className="text-sm font-bold text-blue">{p.price}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
