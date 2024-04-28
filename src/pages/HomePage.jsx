import BookSessionSection from "../components/BookSessionSection";
import ClientSection from "../components/ClientSection";
import FAQSection from "../components/FAQSection";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import LeadGenerationSection from "../components/LeadGenerationSection";
import LeedSpeedSection from "../components/LeedSpeedSection";
import TestimonialsSection from "../components/TestimonialsSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <LeadGenerationSection />
      <TestimonialsSection />
      <LeedSpeedSection />
      <ClientSection />
      <BookSessionSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}

export default HomePage;
