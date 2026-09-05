import Link from "next/link";
import { DISTRICTS } from "@/lib/site";

export default function AreaSection() {
  return (
    <section id="area" className="bg-background py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
          География выезда мастеров по Гродно и области
        </h2>
        <p className="mt-2 text-foreground/60">
          Выезжаем в любой район города и в пределах 30 км от Гродно — выберите свой район, чтобы узнать подробности
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {DISTRICTS.map((d) => (
            <Link
              key={d.slug}
              href={`/rajony/${d.slug}`}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-navy transition hover:-translate-y-0.5 hover:border-blue hover:bg-blue hover:text-white hover:shadow-md"
            >
              {d.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
