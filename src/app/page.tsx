import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PricesSection from "@/components/PricesSection";
import ProblemsSection from "@/components/ProblemsSection";
import WorksSection from "@/components/WorksSection";
import ReviewsSection from "@/components/ReviewsSection";
import BrandsSection from "@/components/BrandsSection";
import TeamSection from "@/components/TeamSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import FaqSection from "@/components/FaqSection";
import AreaSection from "@/components/AreaSection";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { SITE, MAIN_PRICES, FITTING_PRICES, PROBLEMS, type Price } from "@/lib/site";

const BUSINESS_ID = `${SITE.url}/#organization`;

function toOffer(p: Price) {
  const minPrice = p.price.match(/\d+/)?.[0] ?? "0";
  const unit = p.price.match(/за (.+)$/)?.[1];

  return {
    "@type": "Offer",
    priceCurrency: "BYN",
    price: minPrice,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "BYN",
      minPrice,
      ...(unit && { unitText: unit }),
    },
    availability: "https://schema.org/InStock",
    itemOffered: { "@type": "Service", name: p.title, provider: { "@id": BUSINESS_ID } },
  };
}

function toCatalog(name: string, prices: Price[]) {
  return {
    "@type": "OfferCatalog",
    name,
    itemListElement: prices.map(toOffer),
  };
}

const businessLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": BUSINESS_ID,
  name: SITE.name,
  alternateName: "Ремонт окон в Гродно",
  description:
    "Ремонт и обслуживание пластиковых, алюминиевых и деревянных окон в Гродно и области. Выезд мастера в день обращения, гарантия до 5 лет.",
  url: `${SITE.url}/`,
  telephone: SITE.phoneHref.replace("tel:", ""),
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Врублевского, 3",
    addressLocality: "Гродно",
    addressRegion: "Гродненская область",
    addressCountry: "BY",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "22:00",
  },
  areaServed: [
    { "@type": "City", name: "Гродно" },
    { "@type": "AdministrativeArea", name: "Гродненский район" },
  ],
  priceRange: "10–45 BYN",
  currenciesAccepted: "BYN",
  paymentAccepted: "Наличные, банковская карта",
  foundingDate: "2020",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Цены на ремонт окон",
    itemListElement: [
      toCatalog("Ремонт окон", MAIN_PRICES),
      toCatalog("Замена фурнитуры и установка комплектующих", FITTING_PRICES),
      toCatalog("Устранение неисправностей", PROBLEMS),
    ],
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: `${SITE.url}/`,
  name: SITE.name,
  inLanguage: "ru",
  publisher: { "@id": BUSINESS_ID },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      <Header />
      <main className="flex-1">
        <Hero />
        <PricesSection />
        <ProblemsSection />
        <WorksSection />
        <ReviewsSection />
        <BrandsSection />
        <TeamSection />
        <AdvantagesSection />
        <FaqSection />
        <AreaSection />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
