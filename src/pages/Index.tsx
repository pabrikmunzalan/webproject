import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UrgencyBanner from "@/components/UrgencyBanner";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import StatsCounter from "@/components/StatsCounter";
import TrustBadges from "@/components/TrustBadges";
import ProcessTimeline from "@/components/ProcessTimeline";
import CaseStudies from "@/components/CaseStudies";
import LeadMagnet from "@/components/LeadMagnet";
import Gallery from "@/components/Gallery";
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
      {/* Analytics & Conversion Tracking */}
      <AnalyticsTracker />
      
      {/* Navigation */}
      <Navbar />
      <UrgencyBanner />
      
      {/* Main Content */}
      <Hero />
      <TrustBadges />
      <StatsCounter />
      <Services />
      <Portfolio />
      <CaseStudies />
      <ProcessTimeline />
      <PriceCalculator />
      <LeadMagnet />
      <Gallery />
      <Team />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <Blog />
      <Footer />
      
      {/* Floating & Conversion Elements */}
      <FloatingWhatsApp />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
