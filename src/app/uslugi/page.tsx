import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { SERVICES, SERVICE_GROUPS } from "@/lib/services";

export const metadata: Metadata = {
  title: "Все услуги по ремонту окон в Гродно — ремонтокна.бел",
  description:
    "Полный каталог услуг по ремонту и обслуживанию окон в Гродно: регулировка, утепление, замена фурнитуры, уплотнителя, москитные сетки. Цены и описание каждой услуги.",
  alternates: { canonical: "https://remontokna.by/uslugi" },
};

export default function ServicesIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://remontokna.by/uslugi/${s.slug}`,
      name: `${s.title} в Гродно`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1 bg-white">
        <section className="border-b border-border bg-background py-10 sm:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <nav className="mb-4 text-sm text-foreground/50">
              <Link href="/" className="hover:text-navy">
                Главная
              </Link>
              <span className="mx-2">/</span>
              <span className="text-navy">Услуги</span>
            </nav>
            <h1 className="text-3xl font-extrabold text-navy sm:text-4xl">Все услуги по ремонту окон в Гродно</h1>
            <p className="mt-3 max-w-2xl text-foreground/70">
              Выберите услугу, чтобы узнать подробное описание, цену и особенности выполнения работ.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6">
            {SERVICE_GROUPS.map((group) => (
              <div key={group}>
                <h2 className="text-xl font-bold text-navy">{group}</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {SERVICES.filter((s) => s.group === group).map((s) => (
                    <Link
                      key={s.slug}
                      href={`/uslugi/${s.slug}`}
                      className="flex items-center justify-between rounded-xl border border-border bg-background p-5 transition hover:-translate-y-0.5 hover:border-blue hover:shadow-md"
                    >
                      <span className="font-medium text-navy">{s.title}</span>
                      <span className="font-bold text-blue">{s.price}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
