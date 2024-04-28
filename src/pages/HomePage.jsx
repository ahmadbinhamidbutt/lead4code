import BookSessionSection from "../components/BookSessionSection";
import ClientSection from "../components/ClientSection";
import FAQSection from "../components/FAQSection";
import HeroSection from "../components/HeroSection";
import LeadGenerationSection from "../components/LeadGenerationSection";
import LeedSpeedSection from "../components/LeedSpeedSection";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <LeadGenerationSection />
      <LeedSpeedSection />
      <ClientSection />
      <BookSessionSection />
      <FAQSection />
    </div>
  );
}

export default HomePage;
