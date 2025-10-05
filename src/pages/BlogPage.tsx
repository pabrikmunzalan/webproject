import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Blog />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default BlogPage;