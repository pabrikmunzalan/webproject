import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { X, Gift, Clock, Star, ArrowRight, Download } from "lucide-react";
import { toast } from "sonner";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    let mouseMoveTimer: NodeJS.Timeout;
    
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the page
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    // Also trigger on rapid mouse movement (mobile alternative)
    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(mouseMoveTimer);
      mouseMoveTimer = setTimeout(() => {
        // If mouse hasn't moved for 3 seconds and hasn't shown popup
        if (!hasShown && Math.random() < 0.3) { // 30% chance to show
          setIsOpen(true);
          setHasShown(true);
        }
      }, 3000);
    };

    // Mobile: trigger on scroll attempt to top
    const handleScroll = () => {
      if (window.scrollY === 0 && !hasShown && Math.random() < 0.2) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    // Desktop exit intent
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleMouseMove);
    
    // Mobile alternative
    window.addEventListener('scroll', handleScroll);

    // Fallback timer - show after 45 seconds if not shown
    const fallbackTimer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 45000);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(mouseMoveTimer);
      clearTimeout(fallbackTimer);
    };
  }, [hasShown]);

  const handleClaimOffer = () => {
    if (!email) {
      toast.error("Mohon masukkan email untuk mendapatkan penawaran");
      return;
    }

    const message = `Halo! Saya ingin klaim special offer 50% OFF + free template dari website. Email saya: ${email}`;
    const whatsappUrl = `https://wa.me/6282241590417?text=${encodeURIComponent(message)}`;
    
    toast.success("Penawaran akan dikirim ke WhatsApp Anda!");
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const handleRemindLater = () => {
    setIsOpen(false);
    // Show again in 10 minutes
    setTimeout(() => {
      if (!hasShown) {
        setHasShown(false);
      }
    }, 600000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50">
        <DialogHeader className="text-center space-y-4">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Header Content */}
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-4 animate-bounce">
              <Gift className="h-8 w-8 text-white" />
            </div>
            
            <Badge className="bg-red-500 text-white mb-2 animate-pulse">
              🔥 TUNGGU! JANGAN PERGI DULU
            </Badge>
            
            <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
              Special Offer Hanya Untuk Anda!
            </DialogTitle>
            
            <p className="text-gray-600 text-sm">
              Dapatkan penawaran eksklusif sebelum meninggalkan halaman ini
            </p>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Offer Details */}
          <div className="bg-white rounded-lg p-4 border-2 border-dashed border-red-200">
            <div className="text-center space-y-3">
              <h3 className="text-xl font-bold text-red-600">
                50% OFF + Bonus Template GRATIS!
              </h3>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center p-2 bg-red-50 rounded">
                  <Clock className="h-5 w-5 text-red-500 mx-auto mb-1" />
                  <div className="font-medium">Pengerjaan Priority</div>
                  <div className="text-gray-600">5 hari selesai</div>
                </div>
                <div className="text-center p-2 bg-orange-50 rounded">
                  <Download className="h-5 w-5 text-orange-500 mx-auto mb-1" />
                  <div className="font-medium">Free Template Pack</div>
                  <div className="text-gray-600">Senilai Rp 500K</div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  <span className="line-through text-gray-400">Rp 2.500.000</span>
                  <span className="text-red-600 ml-2">Rp 1.250.000</span>
                </div>
                <p className="text-xs text-gray-500">*Promo terbatas 24 jam</p>
              </div>
            </div>
          </div>

          {/* Email Capture */}
          <div className="space-y-3">
            <Label htmlFor="popup-email" className="text-sm font-medium">
              Masukkan email untuk mendapatkan penawaran:
            </Label>
            <Input
              id="popup-email"
              type="email"
              placeholder="masukkan@email.anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-red-200 focus:border-red-500"
            />
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 rating</span>
            </div>
            <span>•</span>
            <span>247+ clients puas</span>
            <span>•</span>
            <span>Garansi 100%</span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={handleClaimOffer}
              size="lg"
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold text-lg py-6 animate-pulse"
            >
              <Gift className="mr-2 h-5 w-5" />
              Klaim Penawaran Eksklusif
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex gap-2">
              <Button 
                variant="outline"
                size="sm"
                className="flex-1 text-gray-600 border-gray-300"
                onClick={handleRemindLater}
              >
                Ingatkan Nanti
              </Button>
              <Button 
                variant="ghost"
                size="sm"
                className="flex-1 text-gray-500"
                onClick={() => setIsOpen(false)}
              >
                Tidak, Terima Kasih
              </Button>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="text-center text-xs text-gray-500">
            🔒 Data Anda aman. Kami tidak akan spam email.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;