import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ValuePropsSection from "@/components/ValuePropsSection";
import TestimonialSection from "@/components/TestimonialSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <ValuePropsSection />
      <TestimonialSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
