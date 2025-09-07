import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Zap, Gift, Star } from "lucide-react";

const ABTestCTA = ({ className = "" }: { className?: string }) => {
  const [variant, setVariant] = useState<'A' | 'B' | 'C'>('A');

  useEffect(() => {
    // Randomly assign variant on mount
    const variants = ['A', 'B', 'C'] as const;
    const randomVariant = variants[Math.floor(Math.random() * variants.length)];
    setVariant(randomVariant);

    // Track variant assignment (in real app, send to analytics)
    console.log(`CTA Variant assigned: ${randomVariant}`);
  }, []);

  const handleClick = () => {
    const phoneNumber = "6282241590417";
    
    // Different messages for different variants
    const messages = {
      A: "Halo! Saya tertarik dengan jasa pembuatan website. Bisa konsultasi gratis?",
      B: "Hi! Saya mau tanya tentang paket website yang tersedia. Bisa info detail?",
      C: "Halo! Saya ingin dapatkan penawaran terbaik untuk website bisnis saya."
    };
    
    const message = messages[variant];
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Track click event (in real app, send to analytics)
    console.log(`CTA Variant ${variant} clicked`);
    
    window.open(whatsappUrl, '_blank');
  };

  const variants = {
    A: {
      text: "Konsultasi Gratis Sekarang",
      icon: MessageCircle,
      style: "bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90",
      description: "Chat langsung dengan expert kami"
    },
    B: {
      text: "Dapatkan Penawaran Terbaik",
      icon: Zap,
      style: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      description: "Harga khusus untuk Anda"
    },
    C: {
      text: "Klaim Promo Eksklusif",
      icon: Gift,
      style: "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600",
      description: "Limited time offer!"
    }
  };

  const currentVariant = variants[variant];
  const Icon = currentVariant.icon;

  return (
    <div className={`text-center space-y-4 ${className}`}>
      {/* Variant-specific content */}
      {variant === 'A' && (
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <span>Dipercaya 250+ bisnis di Indonesia</span>
        </div>
      )}
      
      {variant === 'B' && (
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
          <Zap className="h-4 w-4" />
          Hemat hingga 40% dari kompetitor
        </div>
      )}
      
      {variant === 'C' && (
        <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-medium mb-2 animate-pulse">
          <Gift className="h-4 w-4" />
          Promo berakhir dalam 24 jam!
        </div>
      )}

      <Button 
        onClick={handleClick}
        size="lg"
        className={`${currentVariant.style} text-white px-8 py-6 text-lg font-semibold shadow-glow hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
          variant === 'C' ? 'animate-pulse' : ''
        }`}
      >
        <Icon className="mr-2 h-5 w-5" />
        {currentVariant.text}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      
      <p className="text-sm text-muted-foreground">
        {currentVariant.description}
      </p>

      {/* Variant identifier for debugging */}
      <div className="hidden">Variant: {variant}</div>
    </div>
  );
};

export default ABTestCTA;