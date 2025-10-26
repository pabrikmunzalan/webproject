export interface Testimonial {
  id: string;
  client_name: string;
  client_company: string | null;
  client_position: string | null;
  content: string;
  rating: number | null;
  avatar_url: string | null;
  published: boolean;
}

// Data testimonial - Edit array ini untuk menambah/mengubah testimoni
export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    client_name: "Siti Nurhaliza",
    client_company: "Hijab Fashion Store",
    client_position: "Owner",
    content: "Luar biasa! Website yang dibuat sangat profesional dan user-friendly. Penjualan kami meningkat 385% setelah website diluncurkan. Tim sangat responsif dan memahami kebutuhan bisnis kami.",
    rating: 5,
    avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siti",
    published: true
  },
  {
    id: "2",
    client_name: "Dr. Budi Santoso",
    client_company: "Klinik Sehat Sentosa",
    client_position: "Direktur",
    content: "Sistem booking online yang dibuat sangat membantu klinik kami. Pasien bisa booking jadwal dengan mudah dan otomatis terintegrasi dengan sistem kami. Booking online naik 250% dalam 2 bulan!",
    rating: 5,
    avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi",
    published: true
  },
  {
    id: "3",
    client_name: "Ahmad Rizky",
    client_company: "Cafe Nusantara",
    client_position: "Owner",
    content: "Website restoran kami sekarang terlihat sangat modern dan menarik. Menu digital dan sistem reservasi sangat memudahkan customer. Revenue kami sudah mencapai Rp 85 juta per bulan!",
    rating: 5,
    avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad",
    published: true
  },
  {
    id: "4",
    client_name: "Linda Wijaya",
    client_company: "PT Karya Konstruksi",
    client_position: "Marketing Manager",
    content: "Company profile yang dibuat sangat profesional dan mencerminkan kredibilitas perusahaan kami. Banyak klien baru yang tertarik setelah melihat website kami. Highly recommended!",
    rating: 5,
    avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Linda",
    published: true
  },
  {
    id: "5",
    client_name: "Prof. Hendra Gunawan",
    client_company: "Akademi Digital Indonesia",
    client_position: "Direktur Akademik",
    content: "Platform e-learning yang dibuat sangat lengkap dengan fitur video course, quiz, dan sertifikat digital. Siswa kami sangat puas dengan kemudahan akses dan interface yang intuitif.",
    rating: 5,
    avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hendra",
    published: true
  },
  {
    id: "6",
    client_name: "Dewi Lestari",
    client_company: "Property Prime",
    client_position: "CEO",
    content: "Website listing properti kami sekarang jauh lebih canggih dengan fitur virtual tour 360° dan pencarian advanced. Lead generation meningkat signifikan dan closing rate jauh lebih tinggi!",
    rating: 5,
    avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dewi",
    published: true
  }
];

// Filter hanya testimonial yang published
export const getPublishedTestimonials = () => {
  return testimonialsData.filter(item => item.published);
};
