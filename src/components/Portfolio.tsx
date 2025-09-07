import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string | null;
  image_url: string | null;
  demo_url: string | null;
}

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(6); // Show only 6 items on homepage

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
    const message = "Halo! Saya mau lihat portfolio lengkap dan contoh website yang sudah dibuat. Bisa kirimkan detailnya?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (loading) {
    return (
      <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-secondary/5 to-background relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Portfolio <span className="text-primary">Terbaru</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lihat berbagai website yang telah kami buat untuk klien dari berbagai industri
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="glass shadow-elegant animate-pulse">
                <div className="h-64 bg-muted rounded-t-lg"></div>
                <CardContent className="p-6">
                  <div className="h-4 bg-muted rounded mb-2"></div>
                  <div className="h-3 bg-muted rounded mb-4 w-2/3"></div>
                  <div className="h-3 bg-muted rounded w-full"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-secondary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Portfolio <span className="text-primary">Terbaru</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lihat berbagai website yang telah kami buat untuk klien dari berbagai industri
          </p>
        </div>

        {portfolioItems.length === 0 ? (
          <div className="text-center">
            <p className="text-muted-foreground mb-8">Belum ada portfolio yang tersedia.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-fade-up">
            {portfolioItems.map((item, index) => (
              <Card key={item.id} className="group glass shadow-elegant hover:shadow-glow transition-all duration-300 overflow-hidden transform hover:scale-105 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  {item.image_url ? (
                    <img 
                      src={item.image_url} 
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='16' fill='%236b7280'%3E${item.title}%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  ) : (
                    <div className="w-full h-64 bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">{item.title}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" variant="secondary" className="gap-2 glass shadow-glow">
                      <Eye className="h-4 w-4" />
                      Lihat Detail
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      {item.demo_url && <ExternalLink className="h-4 w-4 text-muted-foreground cursor-pointer" onClick={() => window.open(item.demo_url!, '_blank')} />}
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground">{item.title}</h3>
                    {item.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Ingin Lihat Portfolio Lengkap?
            </h3>
            <p className="text-muted-foreground">
              Kami punya banyak contoh website lainnya yang bisa Anda lihat
            </p>
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-glow hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Lihat Portfolio Lengkap
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;