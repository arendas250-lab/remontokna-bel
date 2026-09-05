import { BRANDS } from "@/lib/site";

export default function BrandsSection() {
  return (
    <section className="bg-background py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Обслуживаемые бренды фурнитуры</h2>
        <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {BRANDS.map((b) => (
            <div
              key={b.name}
              className="flex items-center justify-center rounded-xl border border-border bg-white px-4 py-6 text-center text-sm font-bold text-navy/70 shadow-sm"
            >
              {b.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
