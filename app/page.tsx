import HeroSection from "@/components/sections/HeroSection";
import PartnerSection from "@/components/sections/PartnerSection";
import AboutSection from "@/components/sections/AboutSection";
import BentoGridSection from "@/components/sections/BentoGridSection";
import ConsultationSection from "@/components/sections/ConsultationSection";
import Footer from "@/components/sections/Footer";
import NavSection from "@/components/sections/NavSection";

export default function Home() {
  return (
    <main>
      <NavSection />
      <HeroSection />
      <PartnerSection />
      <div className="bg-[#F3F2F7]">
        <AboutSection />
        <BentoGridSection />
        <ConsultationSection />
        <Footer />
      </div>
    </main>
  );
}
