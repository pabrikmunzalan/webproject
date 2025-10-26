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
    const videoMessage = "Halo! Saya ingin melihat demo video dan portfolio lengkap website yang pernah dibuat.";
    const whatsappUrl = `https://wa.me/6282241590417?text=${encodeURIComponent(videoMessage)}`;
    window.open(whatsappUrl, '_blank');
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-glow"></div>
      </div>
      
      {/* Floating orbs - simplified to 3 */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-float" style={{
      animationDelay: '1s'
    }}></div>
      <div className="absolute top-3/4 left-1/3 w-32 h-32 bg-success/10 rounded-full blur-xl animate-float" style={{
      animationDelay: '2s'
    }}></div>
      
      {/* Animated Particle Effects */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float" style={{
        left: `${10 + i * 15}%`,
        top: `${20 + i * 10}%`,
        animationDelay: `${i * 0.3}s`,
        animationDuration: `${3 + i * 0.5}s`
      }} />)}
      </div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(hsl(262.1_83.3%_57.8%_/_0.1)_1px,transparent_1px),linear-gradient(90deg,hsl(262.1_83.3%_57.8%_/_0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 animate-fade-up">
          {/* Enhanced Main Heading */}
          <div className="space-y-6">
            <div className="relative">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in">
                Website <span className="relative bg-gradient-to-r from-primary via-primary-glow to-blue-600 bg-clip-text text-transparent animate-glow">
                  Professional
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-blue-600 opacity-20 blur-xl animate-pulse"></div>
                </span>
                <br />untuk Bisnis Anda
              </h1>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 md:-right-8">
                
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <strong className="text-primary animate-glow">Tingkatkan omzet hingga 300%</strong> dengan website modern, responsif, dan berkualitas tinggi. 
              Mulai dari <span className="font-bold text-foreground">Rp 1.200.000</span> hingga <span className="font-bold text-foreground">Rp 5.000.000</span>. 
              <br /><span className="text-success font-semibold animate-pulse">🎯 Garansi website selesai dalam 7 hari atau GRATIS!</span>
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 opacity-80">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                SSL Certificate
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                Google Partner
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                ISO Certified
              </div>
            </div>
          </div>

          {/* Enhanced Video & Stats Preview Section */}
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center animate-fade-up" style={{
          animationDelay: '0.2s'
        }}>
            {/* Video Preview with Enhanced Design */}
            <div className="relative group cursor-pointer" onClick={handleVideoPlay}>
              <div className="relative w-56 h-36 md:w-72 md:h-44 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center hover:scale-105 transition-all duration-500 shadow-elegant">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-blue-600 opacity-90"></div>
                
                {/* Animated play button */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                  <Play className="relative h-16 w-16 text-white group-hover:scale-110 transition-transform duration-300 fill-white/20" />
                </div>
                
                {/* Enhanced overlay info */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="text-white text-sm font-semibold">🎥 Lihat Portfolio Video</div>
                  <div className="text-white/80 text-xs">Demo & Case Studies</div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2">
                  <div className="bg-success text-success-foreground px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                    NEW
                  </div>
                </div>
              </div>
              
              {/* Enhanced glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-primary-glow to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
            </div>
            
            {/* Enhanced Stats Grid - simplified to 3 key metrics */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="relative p-6 glass rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 group hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-3xl font-bold text-primary animate-pulse">500+</div>
                  <div className="text-xs text-muted-foreground font-medium">Website Dibuat</div>
                  <div className="w-full h-1 bg-primary/20 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-primary rounded-full animate-pulse" style={{
                    width: '85%'
                  }}></div>
                  </div>
                </div>
              </div>
              
              <div className="relative p-6 glass rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 group hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-3xl font-bold text-success animate-pulse">98%</div>
                  <div className="text-xs text-muted-foreground font-medium">Kepuasan Client</div>
                  <div className="w-full h-1 bg-success/20 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-success rounded-full animate-pulse" style={{
                    width: '98%'
                  }}></div>
                  </div>
                </div>
              </div>
              
              <div className="relative p-6 glass rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 group hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-3xl font-bold text-blue-600 animate-pulse">14</div>
                  <div className="text-xs text-muted-foreground font-medium">Hari Rata-rata</div>
                  <div className="w-full h-1 bg-blue-500/20 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full animate-pulse" style={{
                    width: '70%'
                  }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fade-up" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative group flex flex-col items-center space-y-4 p-8 rounded-2xl glass shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 shadow-glow group-hover:shadow-2xl transition-all duration-300">
                <Smartphone className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl animate-pulse"></div>
              </div>
              
              <div className="relative text-center space-y-2">
                <h3 className="font-bold text-lg text-card-foreground group-hover:text-primary transition-colors">Mobile First</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Responsif sempurna di semua perangkat & ukuran layar</p>
                <div className="flex justify-center space-x-1 mt-3">
                  {[...Array(5)].map((_, i) => <div key={i} className="w-1 h-1 bg-primary/50 rounded-full animate-pulse" style={{
                  animationDelay: `${i * 0.1}s`
                }}></div>)}
                </div>
              </div>
            </div>
            
            <div className="relative group flex flex-col items-center space-y-4 p-8 rounded-2xl glass shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-4 rounded-2xl bg-gradient-to-br from-success/20 to-primary/20 shadow-glow group-hover:shadow-2xl transition-all duration-300">
                <Globe className="h-8 w-8 text-success group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-success/10 to-primary/10 rounded-2xl animate-pulse"></div>
              </div>
              
              <div className="relative text-center space-y-2">
                <h3 className="font-bold text-lg text-card-foreground group-hover:text-success transition-colors">SEO Optimized</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Ranking #1 Google dengan optimasi SEO terdepan</p>
                <div className="flex justify-center space-x-1 mt-3">
                  {[...Array(5)].map((_, i) => <div key={i} className="w-1 h-1 bg-success/50 rounded-full animate-pulse" style={{
                  animationDelay: `${i * 0.1}s`
                }}></div>)}
                </div>
              </div>
            </div>
            
            <div className="relative group flex flex-col items-center space-y-4 p-8 rounded-2xl glass shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-primary/20 shadow-glow group-hover:shadow-2xl transition-all duration-300">
                <Zap className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-primary/10 rounded-2xl animate-pulse"></div>
              </div>
              
              <div className="relative text-center space-y-2">
                <h3 className="font-bold text-lg text-card-foreground group-hover:text-blue-600 transition-colors">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Loading &lt;3 detik dengan teknologi terdepan</p>
                <div className="flex justify-center space-x-1 mt-3">
                  {[...Array(5)].map((_, i) => <div key={i} className="w-1 h-1 bg-blue-500/50 rounded-full animate-pulse" style={{
                  animationDelay: `${i * 0.1}s`
                }}></div>)}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-fade-up" style={{
          animationDelay: '0.6s'
        }}>
            {/* Primary CTA */}
            <div className="relative group">
              <Button size="lg" className="relative bg-gradient-to-r from-primary via-primary-glow to-blue-600 hover:from-primary/90 hover:via-primary-glow/90 hover:to-blue-600/90 text-primary-foreground px-10 py-8 text-lg font-bold shadow-glow hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-2xl overflow-hidden" onClick={handleWhatsAppClick}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
                <span className="relative flex items-center gap-3">
                  🚀 Konsultasi Gratis Sekarang
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary-glow to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
            </div>
            
            {/* Secondary CTA */}
            <Button variant="outline" size="lg" className="px-10 py-8 text-lg font-semibold border-primary/30 hover:border-primary/60 hover:bg-primary/10 glass rounded-2xl group transition-all duration-300 hover:scale-105" onClick={handleVideoPlay}>
              <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              Lihat Demo & Portfolio
            </Button>
          </div>
          
          {/* Enhanced CTA Footer */}
          <div className="space-y-3 animate-fade-up" style={{
          animationDelay: '0.8s'
        }}>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                No Hidden Fees
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                100% Money Back
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                Free Consultation
              </div>
            </div>
            
            <p className="text-sm font-semibold text-primary animate-pulse">
              🔥 Penawaran Terbatas - Diskon 25% untuk 10 klien pertama bulan ini!
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;