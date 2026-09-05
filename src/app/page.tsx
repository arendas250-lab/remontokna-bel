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

export default function Home() {
  return (
    <>
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
