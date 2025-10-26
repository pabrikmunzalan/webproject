export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string | null;
  image_url: string | null;
  demo_url: string | null;
  published: boolean;
}

// Data portfolio - Edit array ini untuk menambah/mengubah portfolio
export const portfolioData: PortfolioItem[] = [
  {
    id: "1",
    title: "Toko Online Fashion Hijab",
    category: "E-Commerce",
    description: "Website e-commerce lengkap dengan sistem pembayaran, keranjang belanja, dan tracking pengiriman. Menghasilkan peningkatan penjualan 385% dalam 3 bulan.",
    image_url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    demo_url: null,
    published: true
  },
  {
    id: "2",
    title: "Website Klinik Kesehatan",
    category: "Healthcare",
    description: "Platform booking online untuk klinik dengan integrasi WhatsApp notification. Meningkatkan booking online 250% dalam 2 bulan.",
    image_url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
    demo_url: null,
    published: true
  },
  {
    id: "3",
    title: "Restoran & Cafe",
    category: "Food & Beverage",
    description: "Website untuk restoran dengan menu digital dan sistem reservasi. Mencapai revenue Rp 85 juta per bulan dalam 4 bulan.",
    image_url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    demo_url: null,
    published: true
  },
  {
    id: "4",
    title: "Company Profile Konstruksi",
    category: "Corporate",
    description: "Website company profile profesional untuk perusahaan konstruksi dengan portfolio lengkap dan form kontak.",
    image_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    demo_url: null,
    published: true
  },
  {
    id: "5",
    title: "Aplikasi Pembelajaran Online",
    category: "Education",
    description: "Platform e-learning dengan video course, quiz, dan sertifikat digital untuk institusi pendidikan.",
    image_url: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800",
    demo_url: null,
    published: true
  },
  {
    id: "6",
    title: "Property Listing Website",
    category: "Real Estate",
    description: "Website listing properti dengan pencarian advanced, virtual tour 360°, dan sistem CRM terintegrasi.",
    image_url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    demo_url: null,
    published: true
  }
];

// Filter hanya item yang published
export const getPublishedPortfolio = () => {
  return portfolioData.filter(item => item.published);
};
