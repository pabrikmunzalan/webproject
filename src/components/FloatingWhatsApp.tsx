import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_CONFIG } from "@/config/contact";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Hide tooltip after 10 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const whatsappUrl = CONTACT_CONFIG.whatsapp.createUrl(CONTACT_CONFIG.messages.generalInquiry);
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-4 mr-2 bg-card border border-border rounded-lg p-3 shadow-lg max-w-xs animate-in slide-in-from-bottom-2">
            <div className="flex justify-between items-start gap-2">
              <div>
                <p className="font-medium text-card-foreground text-sm">
                  💬 Ada yang bisa kami bantu?
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Chat sekarang untuk konsultasi gratis!
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={() => setShowTooltip(false)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
            {/* Arrow */}
            <div className="absolute bottom-0 right-6 transform translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-border"></div>
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-card -mt-px"></div>
            </div>
          </div>
        )}

        {/* WhatsApp Button */}
        <Button
          onClick={handleWhatsAppClick}
          className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          size="icon"
        >
          <MessageCircle className="h-7 w-7" />
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-bounce">
            !
          </div>
        </Button>
      </div>

      {/* Pulsing Ring Effect */}
      <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
        <div className="h-14 w-14 rounded-full bg-green-500/30 animate-ping"></div>
      </div>
    </>
  );
};

export default FloatingWhatsApp;