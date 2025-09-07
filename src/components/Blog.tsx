import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const Blog = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "6282241590417";
    const message = "Halo! Saya membaca artikel di blog dan tertarik untuk konsultasi tentang website. Bisa dibantu?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const blogPosts = [
    {
      title: "10 Tips Meningkatkan Konversi Website E-Commerce",
      excerpt: "Pelajari strategi terbukti untuk meningkatkan penjualan online Anda hingga 300% dengan optimasi website yang tepat.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      category: "E-Commerce",
      date: "15 Des 2024",
      readTime: "5 min",
      featured: true
    },
    {
      title: "Mengapa Website Loading Cepat Penting untuk SEO",
      excerpt: "Dampak kecepatan website terhadap ranking Google dan bagaimana cara mengoptimalkannya untuk hasil maksimal.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "SEO",
      date: "12 Des 2024",
      readTime: "7 min",
      featured: false
    },
    {
      title: "Tren Desain Website 2025 yang Wajib Diketahui",
      excerpt: "Explore tren terbaru dalam desain website yang akan mendominasi tahun 2025 dan cara mengimplementasinya.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      category: "Design",
      date: "10 Des 2024",
      readTime: "6 min",
      featured: false
    },
    {
      title: "Panduan Lengkap Memilih Domain yang Tepat",
      excerpt: "Tips memilih nama domain yang SEO-friendly dan mudah diingat untuk meningkatkan branding bisnis Anda.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop",
      category: "Branding",
      date: "8 Des 2024",
      readTime: "4 min",
      featured: false
    },
    {
      title: "Keamanan Website: Proteksi dari Cyber Attack",
      excerpt: "Langkah-langkah penting untuk melindungi website Anda dari berbagai ancaman keamanan dan serangan cyber.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
      category: "Security",
      date: "5 Des 2024",
      readTime: "8 min",
      featured: false
    },
    {
      title: "Mobile-First Design: Kenapa Harus Prioritas?",
      excerpt: "Mengapa desain mobile-first bukan lagi pilihan tapi keharusan di era digital saat ini untuk kesuksesan bisnis.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      category: "Mobile",
      date: "3 Des 2024",
      readTime: "5 min",
      featured: false
    }
  ];

  const categories = ["Semua", "E-Commerce", "SEO", "Design", "Branding", "Security", "Mobile"];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Blog & <span className="text-primary">Tips Website</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dapatkan insights terbaru tentang web development, SEO, dan digital marketing untuk mengembangkan bisnis online Anda
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {categories.map((category, index) => (
            <Badge 
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={`px-4 py-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                index === 0 
                  ? 'bg-primary hover:bg-primary/90' 
                  : 'hover:bg-primary hover:text-primary-foreground border-primary/50'
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post, index) => (
          <Card 
            key={index} 
            className="glass shadow-elegant hover:shadow-glow transition-all duration-300 mb-12 overflow-hidden animate-fade-up group cursor-pointer"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <Card 
              key={index} 
              className="glass shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-up overflow-hidden group cursor-pointer"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="w-full text-primary hover:bg-primary/10 group"
                >
                  Baca Artikel
                  <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <Card className="glass shadow-elegant p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Butuh Konsultasi Website Professional?
              </h3>
              <p className="text-muted-foreground">
                Dapatkan konsultasi gratis dari tim expert kami untuk membantu mengembangkan website bisnis Anda
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground px-8 py-4 shadow-glow hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4"
                >
                  Lihat Semua Artikel
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;