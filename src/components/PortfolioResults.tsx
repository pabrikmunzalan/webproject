import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn, ExternalLink, TrendingUp, Clock, DollarSign } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import SkeletonCard from "./SkeletonCard";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image_url: string;
  demo_url?: string;
}

const PortfolioResults = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolio();

    const channel = supabase
      .channel('portfolio_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'portfolio' }, () => {
        fetchPortfolio();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchPortfolio = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(6);

      if (error) throw error;
      setPortfolioItems(data || []);
    } catch (error) {
      console.error('Error fetching portfolio:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "6282241590417";
    const message = "Halo! Saya tertarik dengan portfolio Anda. Bisa minta detail lengkap dan case studies lainnya?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const caseHighlights = [
    {
      title: "E-Commerce Fashion",
      metric: "+385%",
      label: "Peningkatan Penjualan",
      duration: "3 Bulan",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Klinik Kesehatan",
      metric: "+250%",
      label: "Booking Online",
      duration: "2 Bulan",
      icon: Clock,
      color: "text-blue-600"
    },
    {
      title: "Resto & Cafe",
      metric: "Rp 85jt",
      label: "Revenue Bulanan",
      duration: "4 Bulan",
      icon: DollarSign,
      color: "text-orange-600"
    }
  ];

  if (loading) {
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Loading...</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Portfolio & Results
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Project & <span className="text-primary">Hasil Nyata</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lihat hasil kerja kami dan dampak nyata yang kami berikan kepada klien
          </p>
        </div>

        {/* Case Study Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {caseHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="glass shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-blue-500/10">
                      <Icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                  </div>
                  <div className={`text-3xl font-bold ${item.color} mb-2`}>
                    {item.metric}
                  </div>
                  <p className="text-sm font-medium text-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    {item.title}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    Dalam {item.duration}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        {portfolioItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Belum ada portfolio yang ditambahkan</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card 
                    className="group cursor-pointer overflow-hidden glass shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-up"
                    style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden h-64">
                      {item.image_url ? (
                        <img 
                          src={item.image_url} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              const placeholder = document.createElement('div');
                              placeholder.className = 'w-full h-full bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center';
                              placeholder.innerHTML = `<span class="text-2xl font-bold text-primary">${item.title}</span>`;
                              parent.appendChild(placeholder);
                            }
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">{item.title}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ZoomIn className="h-12 w-12 text-white" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="space-y-4">
                    <img 
                      src={item.image_url} 
                      alt={item.title}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                    <div className="space-y-2">
                      <Badge>{item.category}</Badge>
                      <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                      {item.demo_url && (
                        <Button 
                          onClick={() => window.open(item.demo_url, '_blank')}
                          className="mt-4"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Lihat Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.9s' }}>
          <Card className="glass shadow-elegant p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ingin Melihat Portfolio Lengkap?
            </h3>
            <p className="text-muted-foreground mb-6">
              Lihat lebih banyak case studies, testimoni klien, dan hasil detail project kami
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-glow"
            >
              Chat WhatsApp untuk Portfolio Lengkap
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioResults;