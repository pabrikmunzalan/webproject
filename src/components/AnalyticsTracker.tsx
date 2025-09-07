import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

interface AnalyticsTrackerProps {
  googleAnalyticsId?: string;
  facebookPixelId?: string;
}

const AnalyticsTracker = ({ 
  googleAnalyticsId = "G-XXXXXXXXXX", // Replace with actual GA4 ID
  facebookPixelId = "XXXXXXXXXXXXXXXXX" // Replace with actual Facebook Pixel ID
}: AnalyticsTrackerProps) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    if (googleAnalyticsId && googleAnalyticsId !== "G-XXXXXXXXXX") {
      // Load GA4 script
      const gaScript = document.createElement("script");
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(gaScript);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer?.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', googleAnalyticsId, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }

    // Initialize Facebook Pixel
    if (facebookPixelId && facebookPixelId !== "XXXXXXXXXXXXXXXXX") {
      const fbScript = document.createElement("script");
      fbScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${facebookPixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(fbScript);

      // Add noscript fallback
      const noscript = document.createElement("noscript");
      noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1" />`;
      document.head.appendChild(noscript);
    }

    // Clean up function
    return () => {
      // Remove scripts if component unmounts
      const scripts = document.querySelectorAll('script[src*="googletagmanager"], script[src*="fbevents"]');
      scripts.forEach(script => script.remove());
    };
  }, [googleAnalyticsId, facebookPixelId]);

  // Track page views on route change
  useEffect(() => {
    // Google Analytics page view
    if (window.gtag && googleAnalyticsId !== "G-XXXXXXXXXX") {
      window.gtag('config', googleAnalyticsId, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }

    // Facebook Pixel page view
    if (window.fbq && facebookPixelId !== "XXXXXXXXXXXXXXXXX") {
      window.fbq('track', 'PageView');
    }

    // Custom tracking for internal analytics
    console.log('Page view tracked:', {
      path: location.pathname,
      title: document.title,
      timestamp: new Date().toISOString(),
    });
  }, [location, googleAnalyticsId, facebookPixelId]);

  // Expose tracking functions globally for easy use
  useEffect(() => {
    // Custom event tracking function
    window.trackEvent = (eventName: string, parameters?: any) => {
      // Google Analytics event
      if (window.gtag) {
        window.gtag('event', eventName, parameters);
      }

      // Facebook Pixel event
      if (window.fbq) {
        window.fbq('track', eventName, parameters);
      }

      // Console log for debugging
      console.log('Event tracked:', { eventName, parameters });
    };

    // Conversion tracking function
    window.trackConversion = (value?: number, currency = 'IDR') => {
      // Google Analytics conversion
      if (window.gtag) {
        window.gtag('event', 'purchase', {
          transaction_id: Date.now().toString(),
          value: value,
          currency: currency,
        });
      }

      // Facebook Pixel conversion
      if (window.fbq) {
        window.fbq('track', 'Purchase', {
          value: value,
          currency: currency,
        });
      }

      console.log('Conversion tracked:', { value, currency });
    };

    // Lead tracking function
    window.trackLead = (leadType = 'contact_form') => {
      // Google Analytics lead
      if (window.gtag) {
        window.gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: leadType,
        });
      }

      // Facebook Pixel lead
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: leadType,
        });
      }

      console.log('Lead tracked:', { leadType });
    };

    return () => {
      // Cleanup global functions
      delete (window as any).trackEvent;
      delete (window as any).trackConversion;
      delete (window as any).trackLead;
    };
  }, []);

  return null; // This component doesn't render anything
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    trackEvent?: (eventName: string, parameters?: any) => void;
    trackConversion?: (value?: number, currency?: string) => void;
    trackLead?: (leadType?: string) => void;
  }
}

export default AnalyticsTracker;