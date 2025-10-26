import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn, Camera } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  category: string | null;
}

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGallery();

    // Setup realtime subscription
    const channel = supabase
      .channel('gallery-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'gallery'
        },
        () => {
          fetchGallery();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchGallery = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(12);

      if (error) throw error;
      setGalleryItems(data || []);
    } catch (error) {
      console.error('Error fetching gallery:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Gallery <span className="text-primary">Karya</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Card key={i} className="glass shadow-elegant animate-pulse overflow-hidden">
                <div className="aspect-square bg-muted"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Gallery <span className="text-primary">Karya</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Koleksi visual dari berbagai project dan karya yang telah kami selesaikan
          </p>
        </div>

        {galleryItems.length === 0 ? (
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 rounded-full bg-muted/20">
                <Camera className="h-12 w-12 text-muted-foreground" />
              </div>
            </div>
            <p className="text-muted-foreground">Belum ada item gallery yang tersedia.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {galleryItems.map((item, index) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card className="group glass shadow-elegant hover:shadow-glow transition-all duration-300 cursor-pointer overflow-hidden transform hover:scale-105 animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={item.image_url} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='14' fill='%236b7280'%3E${item.title}%3C/text%3E%3C/svg%3E";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ZoomIn className="h-8 w-8 text-white" />
                      </div>
                      {item.category && (
                        <div className="absolute top-3 left-3">
                          <Badge variant="secondary" className="bg-white/90 text-foreground">
                            {item.category}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
                  <div className="relative">
                    <img 
                      src={item.image_url} 
                      alt={item.title}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                    <div className="p-6 bg-background">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                        {item.category && (
                          <Badge variant="outline">{item.category}</Badge>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;