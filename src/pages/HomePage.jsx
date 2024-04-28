import BookSessionSection from "../components/BookSessionSection";
import ClientSection from "../components/ClientSection";
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
    </div>
  );
}

export default HomePage;
