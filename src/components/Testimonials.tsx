import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, CheckCircle } from "lucide-react";

const Testimonials = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "6282241590417";
    const message = "Halo! Saya melihat testimoni yang bagus di website. Saya juga ingin membuat website dengan hasil seperti itu. Bisa konsultasi?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const testimonials = [
    {
      name: "Budi Santoso",
      company: "Toko Elektronik Jaya",
      role: "Owner",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Website e-commerce yang dibuat WebStudio Pro benar-benar mengubah bisnis saya! Omzet naik 250% dalam 3 bulan pertama. Tim sangat professional dan support yang luar biasa.",
      results: "Omzet naik 250%",
      package: "Enterprise",
      verified: true
    },
    {
      name: "Dr. Sari Indah",
      company: "Klinik Sehat Bersama",
      role: "Direktur",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Sistem booking online yang terintegrasi sangat membantu pasien untuk reservasi. Website terlihat professional dan loading sangat cepat. Highly recommended!",
      results: "Booking online +180%",
      package: "Professional",
      verified: true
    },
    {
      name: "Ahmad Fauzi",
      company: "Warung Makan Sederhana",
      role: "Pemilik",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Sebagai UMKM, budget saya terbatas. WebStudio Pro memberikan solusi terbaik dengan harga terjangkau. Website saya sekarang tampil di Google dan orderan meningkat drastis!",
      results: "Order online +300%",
      package: "Starter",
      verified: true
    },
    {
      name: "Lisa Permata",
      company: "Studio Fotografi LP",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b605?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Portfolio website yang dibuat sangat aesthetic dan sesuai dengan branding kami. Banyak klien baru yang datang setelah melihat website. Tim sangat memahami kebutuhan kreatif.",
      results: "Klien baru +150%",
      package: "Professional",
      verified: true
    },
    {
      name: "Eka Pratama",
      company: "PT. Teknologi Maju",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Website corporate yang professional dengan fitur lengkap. SEO optimization sangat baik, traffic organic naik signifikan. Maintenance support juga responsif. Excellent work!",
      results: "Traffic organic +200%",
      package: "Enterprise",
      verified: true
    },
    {
      name: "Maya Sari",
      company: "Boutique Fashion MS",
      role: "Owner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "E-commerce website yang user-friendly dengan design yang menarik. Integrasi payment gateway smooth dan dashboard admin mudah digunakan. Sales online meningkat pesat!",
      results: "Sales online +280%",
      package: "Enterprise",
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-secondary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Apa Kata <span className="text-primary">Klien Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lebih dari 500+ klien puas dengan hasil website yang kami buat. Lihat bagaimana website kami membantu bisnis mereka berkembang
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="text-center p-6 glass rounded-xl shadow-elegant">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Website Selesai</div>
          </div>
          <div className="text-center p-6 glass rounded-xl shadow-elegant">
            <div className="text-3xl font-bold text-success mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 glass rounded-xl shadow-elegant">
            <div className="text-3xl font-bold text-blue-500 mb-2">250%</div>
            <div className="text-sm text-muted-foreground">Avg. Omzet Increase</div>
          </div>
          <div className="text-center p-6 glass rounded-xl shadow-elegant">
            <div className="text-3xl font-bold text-orange-500 mb-2">7 Hari</div>
            <div className="text-sm text-muted-foreground">Avg. Completion</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="glass shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-up relative overflow-hidden"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Package Badge */}
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="text-xs font-semibold">
                  {testimonial.package}
                </Badge>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                    />
                    {testimonial.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-success rounded-full p-1">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-card-foreground">{testimonial.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                    <div className="flex items-center mt-2">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20" />
                  <p className="text-sm text-muted-foreground leading-relaxed pl-4 italic">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Results */}
                <div className="p-3 bg-gradient-to-r from-success/10 to-success/5 rounded-lg border border-success/20">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-full bg-success/20">
                      <ArrowRight className="h-3 w-3 text-success" />
                    </div>
                    <span className="text-sm font-semibold text-success">{testimonial.results}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <Card className="glass shadow-elegant p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Ingin Hasil Seperti Mereka?
              </h3>
              <p className="text-muted-foreground">
                Bergabunglah dengan 500+ klien yang telah merasakan peningkatan bisnis dengan website professional dari kami
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground px-8 py-4 shadow-glow hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Mulai Konsultasi Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4"
                >
                  Lihat Portfolio Lengkap
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;