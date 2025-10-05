import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PortfolioResults from "@/components/PortfolioResults";
import TrustBadges from "@/components/TrustBadges";
import ProcessTimeline from "@/components/ProcessTimeline";
import LeadMagnet from "@/components/LeadMagnet";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Guarantee from "@/components/Guarantee";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import PriceCalculator from "@/components/PriceCalculator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBadges />
      <Services />
      <PortfolioResults />
      <ProcessTimeline />
      <PriceCalculator />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <LeadMagnet />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
