import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import OpenModalButton from "@/components/OpenModalButton";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const url = `https://remontokna.by/uslugi/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      siteName: SITE.name,
      locale: "ru_RU",
      type: "website",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const priceNumber = service.price.replace(/\D/g, "") || "0";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: `${service.title} в Гродно`,
    description: service.metaDescription,
    areaServed: { "@type": "City", name: "Гродно" },
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
    offers: {
      "@type": "Offer",
      priceCurrency: "BYN",
      price: priceNumber,
      url: `https://remontokna.by/uslugi/${service.slug}`,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://remontokna.by/" },
      { "@type": "ListItem", position: 2, name: "Услуги", item: "https://remontokna.by/uslugi" },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://remontokna.by/uslugi/${service.slug}`,
      },
    ],
  };

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 8);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
              <Link href="/uslugi" className="hover:text-navy">
                Услуги
              </Link>
              <span className="mx-2">/</span>
              <span className="text-navy">{service.title}</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue">{service.group}</p>
            <h1 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">{service.title} в Гродно</h1>
            <p className="mt-3 text-2xl font-extrabold text-blue">{service.price}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.phoneHref}
                className="rounded-full bg-navy px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-navy/20 transition hover:bg-navy-dark"
              >
                Позвонить: {SITE.phone}
              </a>
              <OpenModalButton
                service={service.title}
                className="rounded-full border-2 border-navy/15 px-7 py-3.5 text-base font-semibold text-navy transition hover:bg-navy/5"
              >
                Заказать звонок
              </OpenModalButton>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="space-y-4">
              {service.text.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-foreground/75">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-navy px-6 py-8 text-center text-white sm:px-10">
              <h2 className="text-xl font-bold sm:text-2xl">Закажите «{service.title.toLowerCase()}» в Гродно</h2>
              <p className="mt-2 text-white/70">Перезвоним в течение 15 минут и согласуем удобное время выезда</p>
              <a
                href={SITE.phoneHref}
                className="mt-5 inline-block rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition hover:brightness-95"
              >
                {SITE.phone}
              </a>
            </div>

            <div className="mt-10">
              <h2 className="text-lg font-bold text-navy">Другие услуги</h2>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {otherServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/uslugi/${s.slug}`}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-navy transition hover:border-blue hover:text-blue"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
