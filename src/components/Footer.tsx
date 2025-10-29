import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT_CONFIG } from "@/config/contact";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = CONTACT_CONFIG.whatsapp.createUrl(CONTACT_CONFIG.messages.consultation);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer id="contact" className="bg-card/80 backdrop-blur-sm border-t shadow-elegant">
      <div className="container mx-auto max-w-7xl px-4 py-16 relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl -z-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">{CONTACT_CONFIG.company.name}</h3>
            <p className="text-muted-foreground leading-relaxed">
              Jasa pembuatan website professional untuk mengembangkan bisnis Anda secara online. 
              Dengan harga terjangkau dan kualitas terbaik.
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-success to-success/90 hover:from-success/90 hover:to-success/80 text-success-foreground shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              <Phone className="h-4 w-4 mr-2" />
              Hubungi Kami
            </Button>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-card-foreground">Layanan Kami</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Website Company Profile</li>
              <li>Website E-Commerce</li>
              <li>Website Landing Page</li>
              <li>Website Portfolio</li>
              <li>Website Blog</li>
              <li>Maintenance Website</li>
            </ul>
          </div>

          {/* Package Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-card-foreground">Paket Harga</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Starter: Rp 800.000</li>
              <li>Professional: Rp 1.500.000</li>
              <li>Enterprise: Rp 3.000.000</li>
              <li>Custom Package</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-card-foreground">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>{CONTACT_CONFIG.company.phoneDisplay}</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>{CONTACT_CONFIG.company.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{CONTACT_CONFIG.company.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>{CONTACT_CONFIG.company.supportHours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-center md:text-left">
              © 2024 {CONTACT_CONFIG.company.name}. All rights reserved. Jasa Pembuatan Website Professional.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors">Privacy Policy</button>
              <button className="hover:text-primary transition-colors">Terms of Service</button>
              <button className="hover:text-primary transition-colors">FAQ</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;