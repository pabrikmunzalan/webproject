import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import StatsCounter from "@/components/StatsCounter";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Guarantee from "@/components/Guarantee";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import PriceCalculator from "@/components/PriceCalculator";
import Team from "@/components/Team";
import Blog from "@/components/Blog";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsCounter />
      <Services />
      <Portfolio />
      <PriceCalculator />
      <Testimonials />
      <Team />
      <Guarantee />
      <FAQ />
      <Blog />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
