"use client";

import { useModal } from "./modal-context";
import { MAIN_PRICES, FITTING_PRICES } from "@/lib/site";

export default function PricesSection() {
  const { open } = useModal();

  return (
    <section id="prices" className="bg-background py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Цены на ремонт окон</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MAIN_PRICES.map((p) => (
            <button
              key={p.title}
              onClick={() => open(p.title)}
              className="group flex items-center justify-between rounded-xl border border-border bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-blue hover:shadow-md"
            >
              <div>
                <div className="font-semibold text-navy">{p.title}</div>
                <div className="mt-1 text-lg font-extrabold text-blue">{p.price}</div>
              </div>
              <span className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue transition group-hover:bg-blue group-hover:text-white">
                →
              </span>
            </button>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-xl font-bold text-navy">Цены на замену фурнитуры</h3>
          <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-white shadow-sm">
            <table className="w-full min-w-[520px] text-left text-sm">
              <tbody>
                {FITTING_PRICES.map((p, i) => (
                  <tr key={p.title} className={i % 2 === 0 ? "bg-white" : "bg-background"}>
                    <td className="px-5 py-4 font-medium text-foreground/80">{p.title}</td>
                    <td className="px-5 py-4 font-bold text-navy">{p.price}</td>
                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={() => open(p.title)}
                        className="rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white transition hover:bg-navy-dark"
                      >
                        Заказать
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-navy px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-xl font-bold sm:text-2xl">Не нашли свою неисправность?</h3>
          <p className="mt-2 text-white/70">Оставьте заявку, и мы свяжемся с вами в течение 15 минут</p>
          <button
            onClick={() => open()}
            className="mt-5 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition hover:brightness-95"
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </section>
  );
}
