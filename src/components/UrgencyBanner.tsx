import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Flame, Gift, ArrowRight } from "lucide-react";

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer when it reaches zero
          return { days: 2, hours: 14, minutes: 32, seconds: 45 };
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Halo! Saya tertarik dengan promo spesial bulan ini. Bisa info detail paket diskon 40%?";
    const whatsappUrl = `https://wa.me/6282241590417?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-white animate-pulse">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Urgency Message */}
          <div className="flex items-center gap-3">
            <Flame className="h-5 w-5 animate-bounce text-yellow-300" />
            <div className="text-center md:text-left">
              <Badge className="bg-white/20 text-white border-white/30 mb-1">
                🔥 PROMO TERBATAS
              </Badge>
              <p className="font-bold text-sm md:text-base">
                Diskon 40% untuk 50 client pertama bulan ini!
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="text-xs font-medium">Berakhir dalam:</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-center bg-white/20 rounded px-2 py-1 min-w-[40px]">
                <div className="text-lg font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
                <div className="text-xs">Hari</div>
              </div>
              <span className="text-lg font-bold">:</span>
              <div className="text-center bg-white/20 rounded px-2 py-1 min-w-[40px]">
                <div className="text-lg font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-xs">Jam</div>
              </div>
              <span className="text-lg font-bold">:</span>
              <div className="text-center bg-white/20 rounded px-2 py-1 min-w-[40px]">
                <div className="text-lg font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-xs">Menit</div>
              </div>
              <span className="text-lg font-bold">:</span>
              <div className="text-center bg-white/20 rounded px-2 py-1 min-w-[40px]">
                <div className="text-lg font-bold animate-pulse">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-xs">Detik</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={handleWhatsAppClick}
            size="sm"
            className="bg-white text-red-600 hover:bg-gray-100 font-bold whitespace-nowrap"
          >
            <Gift className="mr-1 h-4 w-4" />
            Klaim Diskon
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;