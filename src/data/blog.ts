export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "tips-meningkatkan-konversi-ecommerce",
    title: "10 Tips Meningkatkan Konversi Website E-Commerce",
    excerpt: "Pelajari strategi terbukti untuk meningkatkan penjualan online Anda hingga 300% dengan optimasi website yang tepat.",
    content: `
# 10 Tips Meningkatkan Konversi Website E-Commerce

Dalam dunia e-commerce yang kompetitif, meningkatkan tingkat konversi adalah kunci kesuksesan. Berikut adalah 10 tips yang telah terbukti efektif:

## 1. Optimasi Kecepatan Loading
Website yang lambat adalah pembunuh konversi. Pastikan halaman Anda dimuat dalam waktu kurang dari 3 detik.

## 2. Tampilan Mobile-Friendly
Lebih dari 60% traffic berasal dari mobile. Pastikan website Anda responsif dan mudah digunakan di perangkat mobile.

## 3. Foto Produk Berkualitas Tinggi
Gunakan foto produk yang jelas dengan berbagai sudut pandang. Tambahkan fitur zoom untuk detail produk.

## 4. Call-to-Action yang Jelas
Tombol CTA harus menonjol dan menggunakan action words yang kuat seperti "Beli Sekarang" atau "Tambah ke Keranjang".

## 5. Review dan Testimoni
Tampilkan review pelanggan secara prominent. 88% konsumen mempercayai review online seperti rekomendasi personal.

## 6. Proses Checkout yang Simpel
Minimalkan jumlah langkah dalam proses checkout. Tawarkan guest checkout untuk mengurangi friction.

## 7. Multiple Payment Options
Sediakan berbagai metode pembayaran termasuk e-wallet, transfer bank, dan COD.

## 8. Live Chat Support
Pelanggan yang mendapat bantuan real-time 3x lebih mungkin untuk melakukan pembelian.

## 9. Urgency dan Scarcity
Gunakan taktik seperti "Stok Terbatas" atau "Diskon Berakhir dalam 24 Jam" untuk mendorong keputusan pembelian.

## 10. Follow-up Email Marketing
Kirim email cart abandonment dan product recommendations berdasarkan browsing history.

---

Implementasi tips-tips ini secara konsisten akan membantu meningkatkan conversion rate website e-commerce Anda secara signifikan.
    `,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    category: "E-Commerce",
    date: "15 Des 2024",
    readTime: "5 min",
    featured: true,
    author: {
      name: "WebStudio Pro Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=webstudio"
    },
    tags: ["E-Commerce", "Konversi", "Marketing", "Optimasi"]
  },
  {
    id: "2",
    slug: "website-loading-cepat-penting-seo",
    title: "Mengapa Website Loading Cepat Penting untuk SEO",
    excerpt: "Dampak kecepatan website terhadap ranking Google dan bagaimana cara mengoptimalkannya untuk hasil maksimal.",
    content: `
# Mengapa Website Loading Cepat Penting untuk SEO

Kecepatan website bukan hanya tentang pengalaman pengguna, tetapi juga faktor ranking penting di Google.

## Dampak Kecepatan pada SEO

Google secara resmi menjadikan kecepatan halaman sebagai ranking factor sejak 2010 untuk desktop dan 2018 untuk mobile.

### Statistik Penting:
- 53% pengunjung mobile meninggalkan website yang loading lebih dari 3 detik
- Setiap detik delay dapat mengurangi konversi hingga 7%
- Website dengan loading 5 detik memiliki bounce rate 90% lebih tinggi

## Cara Mengoptimalkan Kecepatan Website

### 1. Optimasi Gambar
- Compress gambar tanpa mengurangi kualitas
- Gunakan format modern seperti WebP
- Implementasi lazy loading

### 2. Minify CSS dan JavaScript
- Hapus whitespace dan komentar yang tidak perlu
- Gabungkan file CSS/JS untuk mengurangi HTTP requests

### 3. Gunakan CDN
Content Delivery Network membantu menyajikan konten dari server terdekat dengan user.

### 4. Enable Browser Caching
Simpan file statis di browser pengunjung untuk kunjungan berikutnya.

### 5. Upgrade Hosting
Investasi pada hosting berkualitas adalah langkah penting untuk kecepatan optimal.

## Tools untuk Mengukur Kecepatan

- Google PageSpeed Insights
- GTmetrix
- Pingdom Tools
- WebPageTest

---

Dengan mengoptimalkan kecepatan website, Anda tidak hanya meningkatkan ranking SEO tapi juga memberikan pengalaman terbaik bagi pengunjung.
    `,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    category: "SEO",
    date: "12 Des 2024",
    readTime: "7 min",
    featured: false,
    author: {
      name: "WebStudio Pro Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=webstudio"
    },
    tags: ["SEO", "Performance", "Google", "Optimasi"]
  },
  {
    id: "3",
    slug: "tren-desain-website-2025",
    title: "Tren Desain Website 2025 yang Wajib Diketahui",
    excerpt: "Explore tren terbaru dalam desain website yang akan mendominasi tahun 2025 dan cara mengimplementasinya.",
    content: `
# Tren Desain Website 2025 yang Wajib Diketahui

Dunia desain website terus berkembang. Berikut tren yang akan mendominasi tahun 2025.

## 1. AI-Powered Personalization
Website yang dapat menyesuaikan konten berdasarkan behavior dan preferensi user secara real-time.

## 2. Dark Mode sebagai Standar
Dark mode bukan lagi fitur tambahan tapi ekspektasi user untuk mengurangi eye strain.

## 3. Micro-interactions dan Animations
Animasi subtle yang meningkatkan engagement tanpa mengganggu user experience.

## 4. Voice User Interface (VUI)
Integrasi voice search dan voice commands untuk aksesibilitas yang lebih baik.

## 5. 3D Elements dan Immersive Experiences
Penggunaan WebGL dan 3D graphics untuk menciptakan pengalaman yang lebih engaging.

## 6. Minimalist Design dengan Bold Typography
Less is more - fokus pada tipografi yang kuat dan whitespace yang efektif.

## 7. Sustainable Web Design
Desain yang fokus pada efisiensi energi dan carbon footprint yang rendah.

## 8. Asymmetric Layouts
Breaking the grid untuk menciptakan visual interest dan dinamis.

## 9. Glassmorphism Evolution
Evolusi dari glassmorphism dengan layer effects yang lebih sophisticated.

## 10. Accessibility First
WCAG compliance bukan lagi optional tapi mandatory untuk inclusive design.

---

Dengan mengadopsi tren-tren ini, website Anda akan tetap relevan dan kompetitif di tahun 2025.
    `,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    category: "Design",
    date: "10 Des 2024",
    readTime: "6 min",
    featured: false,
    author: {
      name: "WebStudio Pro Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=webstudio"
    },
    tags: ["Design", "UI/UX", "Trends", "2025"]
  },
  {
    id: "4",
    slug: "panduan-memilih-domain-tepat",
    title: "Panduan Lengkap Memilih Domain yang Tepat",
    excerpt: "Tips memilih nama domain yang SEO-friendly dan mudah diingat untuk meningkatkan branding bisnis Anda.",
    content: `
# Panduan Lengkap Memilih Domain yang Tepat

Nama domain adalah identitas online bisnis Anda. Berikut panduan lengkap memilihnya.

## Kriteria Domain yang Baik

### 1. Mudah Diingat
Domain harus simple dan mudah diucapkan. Hindari angka dan karakter khusus.

### 2. Relevan dengan Bisnis
Nama domain sebaiknya mencerminkan bisnis atau brand Anda.

### 3. Extension yang Tepat
- .com untuk bisnis global
- .co.id untuk bisnis Indonesia
- .id untuk identitas Indonesia

### 4. Pendek dan Ringkas
Idealnya maksimal 15 karakter. Semakin pendek semakin mudah diingat.

## Tips SEO untuk Domain

### Gunakan Keyword (Jika Memungkinkan)
Domain yang mengandung keyword target bisa membantu SEO, tapi jangan berlebihan.

### Hindari Hyphens
Domain dengan tanda hubung sulit diingat dan terlihat less professional.

### Check Domain Authority
Pastikan domain tidak pernah digunakan untuk spam atau blacklisted.

## Tools Memilih Domain

- Namecheap Domain Search
- GoDaddy Domain Checker
- Google Domains
- Domain.com

## Hal yang Harus Dihindari

1. Nama yang terlalu mirip dengan competitor
2. Trademark infringement
3. Angka yang membingungkan (seperti "4" untuk "for")
4. Spelling yang sulit

## Investasi Jangka Panjang

Domain adalah aset digital. Pilih dengan bijak karena mengubahnya nanti bisa merugikan SEO dan branding.

---

Dengan mengikuti panduan ini, Anda dapat memilih domain yang perfect untuk bisnis online Anda.
    `,
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
    category: "Branding",
    date: "8 Des 2024",
    readTime: "4 min",
    featured: false,
    author: {
      name: "WebStudio Pro Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=webstudio"
    },
    tags: ["Domain", "Branding", "SEO", "Bisnis"]
  },
  {
    id: "5",
    slug: "keamanan-website-proteksi-cyber-attack",
    title: "Keamanan Website: Proteksi dari Cyber Attack",
    excerpt: "Langkah-langkah penting untuk melindungi website Anda dari berbagai ancaman keamanan dan serangan cyber.",
    content: `
# Keamanan Website: Proteksi dari Cyber Attack

Keamanan website adalah prioritas utama di era digital. Berikut cara melindungi website Anda.

## Ancaman Keamanan Umum

### 1. SQL Injection
Serangan yang memanipulasi database query untuk akses unauthorized.

### 2. Cross-Site Scripting (XSS)
Injeksi malicious scripts ke dalam trusted websites.

### 3. DDoS Attacks
Membanjiri server dengan traffic untuk membuat website down.

### 4. Brute Force Attacks
Mencoba berbagai kombinasi password untuk akses unauthorized.

## Langkah Proteksi Essential

### Install SSL Certificate
HTTPS adalah must-have untuk enkripsi data dan trust user.

### Regular Updates
Update CMS, plugins, dan themes secara berkala untuk patch vulnerabilities.

### Strong Password Policy
- Minimal 12 karakter
- Kombinasi huruf, angka, dan simbol
- Two-factor authentication

### Web Application Firewall (WAF)
Filter dan monitor HTTP traffic untuk block malicious requests.

### Regular Backups
Backup website secara otomatis dan simpan di lokasi terpisah.

### Security Plugins
Gunakan tools seperti:
- Wordfence (WordPress)
- Sucuri Security
- Cloudflare

## Monitoring dan Maintenance

### Regular Security Audits
Scan website secara berkala untuk detect vulnerabilities.

### Activity Monitoring
Track user activity dan login attempts yang suspicious.

### Error Handling
Jangan expose sensitive information di error messages.

## Incident Response Plan

Siapkan prosedur jika terjadi security breach:
1. Isolasi sistem yang terkompromi
2. Identifikasi dan patch vulnerability
3. Restore dari backup yang clean
4. Inform affected users
5. Strengthen security measures

---

Keamanan website adalah ongoing process, bukan one-time setup. Stay vigilant!
    `,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
    category: "Security",
    date: "5 Des 2024",
    readTime: "8 min",
    featured: false,
    author: {
      name: "WebStudio Pro Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=webstudio"
    },
    tags: ["Security", "Cyber Security", "Protection", "Safety"]
  },
  {
    id: "6",
    slug: "mobile-first-design-prioritas",
    title: "Mobile-First Design: Kenapa Harus Prioritas?",
    excerpt: "Mengapa desain mobile-first bukan lagi pilihan tapi keharusan di era digital saat ini untuk kesuksesan bisnis.",
    content: `
# Mobile-First Design: Kenapa Harus Prioritas?

Di era mobile-first, approach desain Anda harus berubah. Ini bukan lagi optional.

## Statistik yang Mengejutkan

- 60% web traffic berasal dari mobile devices
- Google menggunakan mobile-first indexing sejak 2019
- 57% users tidak akan recommend bisnis dengan poor mobile experience

## Apa itu Mobile-First Design?

Mobile-first design adalah approach yang:
1. Desain dimulai dari layar kecil
2. Progressively enhance untuk layar lebih besar
3. Fokus pada essential content dan features

## Keuntungan Mobile-First Approach

### 1. Better User Experience
Users mendapatkan experience yang optimal di device mereka.

### 2. Improved Performance
Fokus pada essential features membuat website lebih cepat.

### 3. SEO Benefits
Google prioritizes mobile-friendly websites di search results.

### 4. Higher Conversion Rates
Seamless mobile experience meningkatkan conversions hingga 160%.

## Prinsip Mobile-First Design

### Content First
Prioritaskan konten penting dan eliminate yang tidak essential.

### Touch-Friendly Interface
- Tombol minimal 44x44 pixels
- Spacing yang cukup antar elements
- Easy navigation

### Simplified Navigation
Hamburger menu dan bottom navigation untuk accessibility.

### Optimized Images
Responsive images yang load cepat tanpa sacrifice quality.

### Fast Loading Speed
Target loading time di bawah 3 detik.

## Tools untuk Testing

- Google Mobile-Friendly Test
- Chrome DevTools Device Mode
- BrowserStack
- Responsive Design Checker

## Common Mistakes

1. Hiding important content di mobile
2. Pop-ups yang sulit di-close
3. Text yang terlalu kecil
4. Horizontal scrolling
5. Flash content

## Implementation Steps

1. Start dengan mobile wireframes
2. Design untuk smallest screen first
3. Add features progressively untuk larger screens
4. Test di real devices
5. Monitor analytics dan iterate

---

Mobile-first bukan lagi future - it's now. Adapt atau get left behind!
    `,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    category: "Mobile",
    date: "3 Des 2024",
    readTime: "5 min",
    featured: false,
    author: {
      name: "WebStudio Pro Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=webstudio"
    },
    tags: ["Mobile", "Responsive", "UI/UX", "Design"]
  }
];

export const blogCategories = [
  "Semua",
  "E-Commerce",
  "SEO",
  "Design",
  "Branding",
  "Security",
  "Mobile"
];
