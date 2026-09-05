"use client";

import { useModal } from "./modal-context";
import CountdownTimer from "./CountdownTimer";

const BULLETS = [
  "Мастер выезжает в течение 30-60 минут",
  "Выезд и диагностика — бесплатно",
  "Гарантия на работу и материалы до 5 лет",
  "100% возврат денег, если результат не устроил",
];

export default function Hero() {
  const { open } = useModal();

  return (
    <section id="top" className="border-b border-border bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:items-center lg:py-16">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-5xl">
            Ремонт окон в Гродно
          </h1>
          <ul className="mt-6 space-y-3">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-start gap-3 text-base text-foreground/80">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue">
                  ★
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => open()}
              className="rounded-full bg-navy px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-navy/20 transition hover:bg-navy-dark"
            >
              Вызвать мастера
            </button>
            <a
              href="#prices"
              className="rounded-full border-2 border-navy/15 px-7 py-3.5 text-base font-semibold text-navy transition hover:bg-navy/5"
            >
              Смотреть цены
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3 rounded-xl bg-accent/10 px-4 py-3 text-accent">
            <span className="text-2xl">🔥</span>
            <div className="text-sm font-semibold leading-snug">
              Скидка 20% на ремонт окон с 12:00 до 16:00
            </div>
          </div>
          <p className="mt-3 text-sm text-foreground/60">
            До конца акции осталось: <CountdownTimer />
          </p>

          <form
            className="mt-6 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              open();
            }}
          >
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-blue"
            />
            <input
              type="tel"
              placeholder="+375 (__) ___-__-__"
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-blue"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-blue px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-dark"
            >
              Заказать звонок
            </button>
          </form>
          <p className="mt-3 text-xs text-foreground/50">
            Нажимая на кнопку, вы соглашаетесь с условиями обработки персональных данных
          </p>
        </div>
      </div>

      <div className="border-t border-border bg-background">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm leading-relaxed text-foreground/70 sm:px-6">
          «ремонтокна.бел» — сервис по профессиональному ремонту окон всех видов в Гродно: ПВХ, алюминиевые,
          деревянные евро-окна. Выполняем регулировку, замену уплотнителей, ремонт и замену фурнитуры,
          утепление, шумоизоляцию и многое другое по доступным ценам.
        </p>
      </div>
    </section>
  );
}
