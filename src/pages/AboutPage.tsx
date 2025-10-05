import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Team />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default AboutPage;