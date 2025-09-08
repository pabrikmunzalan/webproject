import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Globe, Zap, Play } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "6282241590417";
    const message = "Halo! Saya tertarik dengan jasa pembuatan website. Bisa info lebih lanjut?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleVideoPlay = () => {
    // Placeholder for video modal or redirect to demo video
    const videoMessage = "Halo! Saya ingin melihat demo video dan portfolio lengkap website yang pernah dibuat.";
    const whatsappUrl = `https://wa.me/6282241590417?text=${encodeURIComponent(videoMessage)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/10 px-4 py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-glow"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 animate-fade-up">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in">
              Website <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent animate-glow">Professional</span>
              <br />untuk Bisnis Anda
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <strong className="text-primary">Tingkatkan omzet hingga 300%</strong> dengan website modern, responsif, dan berkualitas tinggi. 
              Mulai dari Rp 1.200.000 hingga Rp 5.000.000. 
              <br /><span className="text-success font-semibold">🎯 Garansi website selesai dalam 7 hari atau GRATIS!</span>
            </p>
          </div>

          {/* Video Preview Section */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center animate-fade-up" style={{
            animationDelay: '0.2s'
          }}>
            <div 
              className="relative group cursor-pointer"
              onClick={handleVideoPlay}
            >
              <div className="relative w-48 h-32 md:w-64 md:h-40 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 opacity-80"></div>
                <Play className="relative h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                  🎥 Lihat Portfolio Video
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            </div>
            
            {/* Stats Quick Preview */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 glass rounded-lg">
                <div className="text-2xl font-bold text-primary">250+</div>
                <div className="text-xs text-muted-foreground">Website Dibuat</div>
              </div>
              <div className="p-4 glass rounded-lg">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-xs text-muted-foreground">Client Puas</div>
              </div>
              <div className="p-4 glass rounded-lg">
                <div className="text-2xl font-bold text-blue-600">7 Hari</div>
                <div className="text-xs text-muted-foreground">Rata-rata Selesai</div>
              </div>
              <div className="p-4 glass rounded-lg">
                <div className="text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-xs text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-up" style={{
            animationDelay: '0.3s'
          }}>
            <div className="flex flex-col items-center space-y-3 p-6 rounded-xl glass shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
              <div className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 shadow-glow">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-card-foreground">Mobile First</h3>
                <p className="text-sm text-muted-foreground">Responsif di semua perangkat</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 rounded-xl glass shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
              <div className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 shadow-glow">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-card-foreground">SEO Ready</h3>
                <p className="text-sm text-muted-foreground">Mudah ditemukan Google</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 rounded-xl glass shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
              <div className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 shadow-glow">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-card-foreground">Loading Cepat</h3>
                <p className="text-sm text-muted-foreground">Performa maksimal</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-up" style={{
            animationDelay: '0.6s'
          }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-glow hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse" 
              onClick={handleWhatsAppClick}
            >
              Konsultasi Gratis via WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-semibold border-primary/20 hover:bg-primary/5"
              onClick={handleVideoPlay}
            >
              <Play className="mr-2 h-5 w-5" />
              Lihat Demo Video
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground animate-fade-up" style={{
            animationDelay: '0.8s'
          }}>
            🚀 Dapatkan penawaran khusus bulan ini!
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;