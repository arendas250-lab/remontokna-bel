import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { DISTRICTS, MAIN_PRICES, SITE } from "@/lib/site";

export function generateStaticParams() {
  return DISTRICTS.map((d) => ({ slug: d.slug }));
}

function getDistrict(slug: string) {
  return DISTRICTS.find((d) => d.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const district = getDistrict(slug);
  if (!district) return {};

  const url = `https://remontokna.by/rajony/${district.slug}`;

  return {
    title: district.metaTitle,
    description: district.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: district.metaTitle,
      description: district.metaDescription,
      url,
      siteName: SITE.name,
      locale: "ru_RU",
      type: "website",
    },
  };
}

export default async function DistrictPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const district = getDistrict(slug);
  if (!district) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ремонт и обслуживание окон",
    name: `Ремонт окон в районе ${district.name}, Гродно`,
    description: district.metaDescription,
    areaServed: {
      "@type": "Place",
      name: `${district.name}, Гродно`,
    },
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: SITE.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.addressShort,
        addressLocality: "Гродно",
        addressCountry: "BY",
      },
      openingHours: "Mo-Su 08:00-22:00",
    },
    offers: MAIN_PRICES.slice(0, 5).map((p) => ({
      "@type": "Offer",
      name: p.title,
      priceCurrency: "BYN",
      price: p.price.replace(/\D/g, ""),
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://remontokna.by/" },
      { "@type": "ListItem", position: 2, name: "Районы выезда", item: "https://remontokna.by/#area" },
      {
        "@type": "ListItem",
        position: 3,
        name: district.name,
        item: `https://remontokna.by/rajony/${district.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Header />
      <main className="flex-1 bg-white">
        <section className="border-b border-border bg-background py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <nav className="mb-4 text-sm text-foreground/50">
              <Link href="/" className="hover:text-navy">
                Главная
              </Link>
              <span className="mx-2">/</span>
              <Link href="/#area" className="hover:text-navy">
                Районы выезда
              </Link>
              <span className="mx-2">/</span>
              <span className="text-navy">{district.name}</span>
            </nav>
            <h1 className="text-3xl font-extrabold text-navy sm:text-4xl">
              Ремонт окон в районе {district.name}, Гродно
            </h1>
            <p className="mt-5 text-base leading-relaxed text-foreground/75">{district.text}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.phoneHref}
                className="rounded-full bg-navy px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-navy/20 transition hover:bg-navy-dark"
              >
                Позвонить: {SITE.phone}
              </a>
              <Link
                href="/#prices"
                className="rounded-full border-2 border-navy/15 px-7 py-3.5 text-base font-semibold text-navy transition hover:bg-navy/5"
              >
                Все цены на ремонт
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="text-xl font-bold text-navy">
              Популярные услуги в районе {district.name}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {MAIN_PRICES.slice(0, 6).map((p) => (
                <div
                  key={p.title}
                  className="flex items-center justify-between rounded-xl border border-border bg-background p-5"
                >
                  <span className="font-medium text-navy">{p.title}</span>
                  <span className="font-bold text-blue">{p.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-navy px-6 py-8 text-center text-white sm:px-10">
              <h3 className="text-xl font-bold sm:text-2xl">
                Нужен мастер по ремонту окон в {district.name}?
              </h3>
              <p className="mt-2 text-white/70">Перезвоним в течение 15 минут и согласуем удобное время выезда</p>
              <a
                href={SITE.phoneHref}
                className="mt-5 inline-block rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition hover:brightness-95"
              >
                {SITE.phone}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {DISTRICTS.filter((d) => d.slug !== district.slug).map((d) => (
                <Link
                  key={d.slug}
                  href={`/rajony/${d.slug}`}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-navy transition hover:border-blue hover:text-blue"
                >
                  {d.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
