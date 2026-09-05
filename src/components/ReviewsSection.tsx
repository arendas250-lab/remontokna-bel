import { REVIEWS } from "@/lib/site";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Отзывы клиентов</h2>
          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <span className="text-accent">★★★★★</span> 4.9 / 5 на основе 200+ отзывов
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="flex flex-col rounded-xl border border-border bg-background p-5">
              <span className="mb-2 text-accent">★★★★★</span>
              <p className="grow text-sm leading-relaxed text-foreground/75">{r.text}</p>
              <div className="mt-4 border-t border-border pt-3 text-sm">
                <span className="font-semibold text-navy">{r.name}</span>
                <span className="text-foreground/50">, {r.district}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
