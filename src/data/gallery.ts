export interface GalleryItem {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  category: string | null;
  published: boolean;
}

// Data gallery - Edit array ini untuk menambah/mengubah item gallery
export const galleryData: GalleryItem[] = [
  {
    id: "1",
    title: "Website E-Commerce Fashion",
    description: "Platform jual beli online modern dengan sistem pembayaran terintegrasi",
    image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    category: "E-Commerce",
    published: true
  },
  {
    id: "2",
    title: "Dashboard Analytics",
    description: "Dashboard untuk monitoring data dan statistik bisnis real-time",
    image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    category: "Dashboard",
    published: true
  },
  {
    id: "3",
    title: "Landing Page Startup",
    description: "Landing page modern untuk startup teknologi",
    image_url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
    category: "Landing Page",
    published: true
  },
  {
    id: "4",
    title: "Aplikasi Mobile Banking",
    description: "Interface design untuk aplikasi mobile banking",
    image_url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800",
    category: "Mobile App",
    published: true
  },
  {
    id: "5",
    title: "Website Restoran",
    description: "Website untuk restoran dengan sistem booking online",
    image_url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    category: "Food & Beverage",
    published: true
  },
  {
    id: "6",
    title: "Portfolio Designer",
    description: "Website portfolio untuk designer kreatif",
    image_url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    category: "Portfolio",
    published: true
  },
  {
    id: "7",
    title: "Toko Online Fashion",
    description: "E-commerce untuk brand fashion lokal",
    image_url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    category: "E-Commerce",
    published: true
  },
  {
    id: "8",
    title: "Website Klinik Kesehatan",
    description: "Platform online untuk booking jadwal dokter",
    image_url: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800",
    category: "Healthcare",
    published: true
  }
];

// Filter hanya item yang published
export const getPublishedGallery = () => {
  return galleryData.filter(item => item.published);
};
