import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, CheckCircle } from "lucide-react";
import { getPublishedTestimonials } from "@/data/testimonials";

const Testimonials = () => {
  const testimonials = getPublishedTestimonials().slice(0, 6);

  const handleWhatsAppClick = () => {
    const phoneNumber = "6282241590417";
    const message = "Halo! Saya melihat testimoni yang bagus di website. Saya juga ingin membuat website dengan hasil seperti itu. Bisa konsultasi?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Testimoni <span className="text-primary">Klien</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dengarkan langsung dari klien kami yang telah merasakan peningkatan bisnis setelah menggunakan jasa kami
          </p>
        </div>

        {testimonials.length === 0 ? (
          <div className="text-center">
            <p className="text-muted-foreground mb-8">Belum ada testimoni yang tersedia.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="group glass shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {testimonial.avatar_url ? (
                        <img 
                          src={testimonial.avatar_url} 
                          alt={testimonial.client_name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-primary font-semibold">
                            {testimonial.client_name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-card-foreground">{testimonial.client_name}</h4>
                        {testimonial.client_position && testimonial.client_company && (
                          <p className="text-sm text-muted-foreground">
                            {testimonial.client_position} - {testimonial.client_company}
                          </p>
                        )}
                      </div>
                    </div>
                    <Badge variant="secondary" className="gap-1">
                      <CheckCircle className="h-3 w-3" />
                      Verified
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-1 mt-2">
                    {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-1 h-8 w-8 text-primary/20" />
                    <p className="text-muted-foreground leading-relaxed pl-6 italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <Card className="glass shadow-elegant p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Ingin Hasil Seperti Mereka?
              </h3>
              <p className="text-muted-foreground">
                Bergabunglah dengan ratusan klien yang telah merasakan peningkatan signifikan dalam bisnis mereka
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground px-8 py-4 shadow-glow hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Mulai Konsultasi Gratis
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
