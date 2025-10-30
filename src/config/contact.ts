/**
 * Centralized Contact Configuration
 * 
 * Edit this file to update contact information across the entire website.
 * All WhatsApp numbers, emails, and social media links are managed here.
 */

export const CONTACT_CONFIG = {
  whatsapp: {
    number: import.meta.env.VITE_WHATSAPP_NUMBER || '6282241590417',
    baseUrl: 'https://wa.me/',
    /**
     * Helper function to create WhatsApp URL with message
     */
    createUrl: (message: string) => {
      const number = import.meta.env.VITE_WHATSAPP_NUMBER || '6282241590417';
      return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    }
  },
  
  company: {
    name: import.meta.env.VITE_COMPANY_NAME || 'WebStudio Pro',
    email: import.meta.env.VITE_COMPANY_EMAIL || 'info@webstudiopro.com',
    phone: import.meta.env.VITE_COMPANY_PHONE || '+62 822-4159-0417',
    phoneDisplay: import.meta.env.VITE_COMPANY_PHONE_DISPLAY || '+62 822-4159-0417',
    address: import.meta.env.VITE_COMPANY_ADDRESS || 'Indonesia',
    supportHours: import.meta.env.VITE_SUPPORT_HOURS || '24/7 Online Support'
  },

  social: {
    instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/webstudiopro',
    facebook: import.meta.env.VITE_FACEBOOK_URL || 'https://facebook.com/webstudiopro',
    linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/company/webstudiopro',
    twitter: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com/webstudiopro'
  },

  // Predefined messages for different scenarios
  messages: {
    generalInquiry: 'Halo! Saya tertarik dengan jasa pembuatan website. Bisa info lebih lanjut?',
    consultation: 'Halo! Saya ingin konsultasi tentang jasa pembuatan website.',
    demoRequest: 'Halo! Saya ingin melihat demo video dan portfolio lengkap website yang pernah dibuat.',
    resourceInquiry: 'Halo! Saya tertarik untuk melihat resource dan panduan lainnya. Bisa dibantu?',
    blogInquiry: 'Halo! Saya membaca artikel di blog dan tertarik untuk konsultasi tentang website. Bisa dibantu?'
  }
} as const;

/**
 * Helper function to open WhatsApp with a custom message
 */
export const openWhatsApp = (message: string) => {
  const url = CONTACT_CONFIG.whatsapp.createUrl(message);
  window.open(url, '_blank');
};
