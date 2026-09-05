import { WORKS } from "@/lib/site";

export default function WorksSection() {
  return (
    <section id="works" className="bg-background py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Примеры выполненных работ</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WORKS.map((w) => (
            <div key={w.title} className="rounded-xl border border-border bg-white p-5 shadow-sm">
              <div className="flex h-24 items-center justify-center rounded-lg bg-navy/5 text-3xl">🪟</div>
              <div className="mt-4 font-semibold leading-snug text-navy">{w.title}</div>
              <dl className="mt-4 space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <dt className="text-foreground/50">Время:</dt>
                  <dd className="font-medium">{w.time}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-foreground/50">Стоимость:</dt>
                  <dd className="font-bold text-blue">{w.price}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-foreground/50">Гарантия:</dt>
                  <dd className="font-medium">{w.warranty}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
