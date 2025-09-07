import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Clock, DollarSign, ArrowRight, ExternalLink, Star } from "lucide-react";

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const caseStudies = [
    {
      id: 1,
      title: "Toko Elektronik Jakarta",
      category: "E-Commerce",
      industry: "Retail Electronics",
      timeline: "14 hari",
      budget: "Rp 2.8 Juta",
      results: {
        revenue: "+350%",
        traffic: "+280%",
        conversion: "+45%",
        seo: "Page 1 Google"
      },
      challenge: "Toko elektronik tradisional yang ingin go digital tapi tidak tahu cara memulai. Penjualan offline menurun 60% selama pandemi.",
      solution: "Kami buatkan website e-commerce lengkap dengan sistem inventory, payment gateway, dan integrasi dengan marketplace utama.",
      testimonial: "Dalam 2 bulan pertama, penjualan online sudah mencapai 5x lipat dari target awal. Website yang dibuat sangat user-friendly dan mudah dikelola.",
      client: "Pak Budi - Owner Elektronik Jaya",
      image: "🏪",
      tags: ["E-Commerce", "Payment Gateway", "SEO", "Mobile App"]
    },
    {
      id: 2,
      title: "Klinik Kecantikan Surabaya", 
      category: "Healthcare",
      industry: "Beauty & Wellness",
      timeline: "10 hari",
      budget: "Rp 1.5 Juta",
      results: {
        revenue: "+200%",
        traffic: "+150%",
        conversion: "+60%",
        seo: "Top 3 Google"
      },
      challenge: "Klinik kecantikan dengan banyak layanan tapi website lama tidak mobile-friendly dan sulit ditemukan di Google.",
      solution: "Redesign total dengan fokus mobile-first, booking system online, dan SEO optimization untuk kata kunci lokal.",
      testimonial: "Booking online meningkat drastis! Sekarang 80% appointment datang dari website. ROI-nya luar biasa!",
      client: "Dr. Sarah - Medical Director",
      image: "💄",
      tags: ["Booking System", "Mobile-First", "Local SEO", "CRM"]
    },
    {
      id: 3,
      title: "Restaurant Chain Bali",
      category: "F&B",
      industry: "Food & Beverage", 
      timeline: "12 hari",
      budget: "Rp 2.2 Juta",
      results: {
        revenue: "+180%",
        traffic: "+220%",
        conversion: "+35%",
        seo: "Featured Snippet"
      },
      challenge: "Chain restaurant dengan 3 cabang butuh website unified untuk online ordering dan brand awareness.",
      solution: "Multi-location website dengan online menu, delivery integration, dan loyalty program digital.",
      testimonial: "Order online sekarang 40% dari total penjualan. Website jadi ujung tombak marketing digital kami.",
      client: "Made Adi - Restaurant Manager",
      image: "🍽️",
      tags: ["Multi-Location", "Online Ordering", "Loyalty Program", "Analytics"]
    }
  ];

  const handleWhatsAppClick = (caseStudy: any) => {
    const message = `Halo! Saya tertarik dengan case study ${caseStudy.title}. Bisa buatkan website serupa untuk bisnis saya?`;
    const whatsappUrl = `https://wa.me/6282241590417?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Success <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lihat bagaimana klien kami meningkatkan bisnis mereka dengan website yang tepat
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card 
              key={study.id}
              className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-primary"
              onClick={() => setSelectedCase(selectedCase === study.id ? null : study.id)}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">{study.image}</div>
                  <div>
                    <Badge variant="secondary" className="mb-2">{study.category}</Badge>
                    <CardTitle className="text-lg">{study.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-green-600 mx-auto mb-1" />
                    <div className="font-bold text-green-600">{study.results.revenue}</div>
                    <div className="text-xs text-green-700">Revenue</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Users className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                    <div className="font-bold text-blue-600">{study.results.traffic}</div>
                    <div className="text-xs text-blue-700">Traffic</div>
                  </div>
                </div>
                
                <div className="flex justify-between text-sm text-muted-foreground mb-4">
                  <span>📅 {study.timeline}</span>
                  <span>💰 {study.budget}</span>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full text-primary"
                >
                  {selectedCase === study.id ? 'Tutup Detail' : 'Lihat Detail'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Case Study */}
        {selectedCase && (
          <Card className="animate-scale-in border-primary/20">
            <CardContent className="p-8">
              {(() => {
                const study = caseStudies.find(s => s.id === selectedCase)!;
                return (
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {study.image} {study.title}
                        </h3>
                        <div className="flex gap-2 mb-4">
                          {study.tags.map(tag => (
                            <Badge key={tag} variant="outline">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                      <Button onClick={() => handleWhatsAppClick(study)} className="bg-green-500 hover:bg-green-600">
                        Diskusi Project Serupa
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                        <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-green-600">{study.results.revenue}</div>
                        <div className="text-sm text-green-700 font-medium">Peningkatan Revenue</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                        <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-blue-600">{study.results.traffic}</div>
                        <div className="text-sm text-blue-700 font-medium">Peningkatan Traffic</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                        <DollarSign className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-purple-600">{study.results.conversion}</div>
                        <div className="text-sm text-purple-700 font-medium">Conversion Rate</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                        <Star className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <div className="text-xl font-bold text-orange-600">{study.results.seo}</div>
                        <div className="text-sm text-orange-700 font-medium">SEO Ranking</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-foreground">🎯 Challenge</h4>
                        <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-foreground">💡 Solution</h4>
                        <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-foreground">💬 Testimonial</h4>
                        <blockquote className="text-muted-foreground italic leading-relaxed">
                          "{study.testimonial}"
                        </blockquote>
                        <p className="text-sm font-medium text-primary">— {study.client}</p>
                      </div>
                    </div>

                    <div className="text-center pt-6 border-t border-border">
                      <p className="text-muted-foreground mb-4">
                        Tertarik dengan hasil serupa untuk bisnis Anda?
                      </p>
                      <Button 
                        onClick={() => handleWhatsAppClick(study)}
                        size="lg"
                        className="bg-green-500 hover:bg-green-600 text-white"
                      >
                        Chat WhatsApp Untuk Konsultasi Gratis
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                );
              })()}
            </CardContent>
          </Card>
        )}

        {/* Stats Summary */}
        <div className="text-center mt-16 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Rata-rata Hasil Klien Kami
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">+243%</div>
              <p className="text-sm text-muted-foreground">Average Revenue Growth</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">+217%</div>
              <p className="text-sm text-muted-foreground">Average Traffic Increase</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">+47%</div>
              <p className="text-sm text-muted-foreground">Average Conversion Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">11 Hari</div>
              <p className="text-sm text-muted-foreground">Average Completion Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;