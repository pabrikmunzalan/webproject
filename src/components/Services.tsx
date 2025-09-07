import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Services = () => {
  const handleWhatsAppClick = (packageName: string, price: string) => {
    const phoneNumber = "6282241590417";
    const message = `Halo! Saya tertarik dengan paket ${packageName} seharga ${price}. Bisa info lebih detail?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      name: "Paket Starter",
      price: "Rp 800.000",
      description: "Cocok untuk bisnis kecil dan UMKM",
      features: [
        "Website 5 halaman",
        "Design responsif mobile",
        "Domain gratis 1 tahun",
        "Hosting 1 tahun",
        "SSL Certificate",
        "Contact form",
        "Google Maps",
        "Basic SEO setup"
      ],
      popular: false,
      color: "border-border"
    },
    {
      name: "Paket Professional",
      price: "Rp 1.500.000",
      description: "Terbaik untuk bisnis berkembang",
      features: [
        "Website 10 halaman",
        "Design custom premium",
        "Domain gratis 1 tahun",
        "Hosting premium 1 tahun",
        "SSL Certificate",
        "Contact & booking form",
        "Google Maps & Analytics",
        "Advanced SEO",
        "WhatsApp integration",
        "Admin panel basic",
        "3x revisi design"
      ],
      popular: true,
      color: "border-primary"
    },
    {
      name: "Paket Enterprise",
      price: "Rp 3.000.000",
      description: "Solusi lengkap untuk perusahaan",
      features: [
        "Website unlimited halaman",
        "Design custom exclusive",
        "Domain gratis 1 tahun",
        "Hosting premium 1 tahun",
        "SSL Certificate",
        "Multiple forms",
        "Google Suite integration",
        "Advanced SEO & Analytics",
        "WhatsApp & social media",
        "Full admin panel",
        "E-commerce ready",
        "Blog system",
        "Unlimited revisi",
        "Maintenance 3 bulan"
      ],
      popular: false,
      color: "border-success"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Paket Website <span className="text-primary">Terjangkau</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket sudah termasuk hosting dan domain gratis!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative glass shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-up ${service.popular ? 'ring-2 ring-primary/20' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-primary to-blue-600 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-glow">
                    <Star className="h-4 w-4 mr-1" />
                    TERPOPULER
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-card-foreground">{service.name}</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">{service.price}</div>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => handleWhatsAppClick(service.name, service.price)}
                  className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                    service.popular 
                      ? 'bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground shadow-glow hover:shadow-2xl hover:scale-105' 
                      : 'glass hover:shadow-elegant text-foreground hover:scale-105'
                  }`}
                >
                  Pesan Sekarang
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Butuh paket custom? Atau ada pertanyaan lain?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => handleWhatsAppClick("Custom", "Sesuai kebutuhan")}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Konsultasi Custom Package
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;