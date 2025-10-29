# 📝 Panduan Edit Konten Website

Panduan lengkap untuk mengedit konten website tanpa perlu menggunakan database atau admin panel.

---

## 📋 Daftar Isi
1. [Konfigurasi Kontak & WhatsApp](#-1-konfigurasi-kontak--whatsapp)
2. [Environment Variables](#-2-environment-variables)
3. [Edit Gallery](#-3-edit-gallery)
4. [Edit Portfolio](#-4-edit-portfolio)
5. [Edit Testimonials](#-5-edit-testimonials)
6. [Edit Team](#-6-edit-team)
7. [Deploy Perubahan](#-7-deploy-perubahan)

---

## 🔧 1. Konfigurasi Kontak & WhatsApp

### ⚠️ PENTING: Centralized Configuration

**Semua nomor WhatsApp, email, dan informasi kontak sekarang dikelola di satu file:**

**File:** `src/config/contact.ts`

```typescript
export const CONTACT_CONFIG = {
  whatsapp: {
    number: '6282241590417', // Edit nomor WhatsApp di sini
  },
  
  company: {
    name: 'WebStudio Pro',
    email: 'info@webstudiopro.com',
    phone: '+62 822-4159-0417',
    address: 'Indonesia',
    supportHours: '24/7 Online Support'
  },

  social: {
    instagram: 'https://instagram.com/webstudiopro',
    facebook: 'https://facebook.com/webstudiopro',
    linkedin: 'https://linkedin.com/company/webstudiopro',
  }
};
```

### Cara Edit Nomor WhatsApp:

1. Buka file `src/config/contact.ts`
2. Cari bagian `whatsapp: { number: '...' }`
3. Ganti nomor dengan format: `62` + nomor tanpa 0
   - **Contoh:** `082241590417` → `6282241590417`
4. Save file
5. Nomor WhatsApp akan otomatis berubah di **seluruh website**!

### Keuntungan Centralized Config:
- ✅ Edit sekali, berubah di semua halaman
- ✅ Tidak ada nomor yang terlewat
- ✅ Mudah maintenance
- ✅ Mengurangi human error

---

## 🌍 2. Environment Variables

### Apa itu Environment Variables?

Environment variables memungkinkan Anda mengatur konfigurasi tanpa mengubah kode. Sangat berguna untuk:
- Beda konfigurasi antara development & production
- Menyimpan data sensitif (API keys)
- Mudah update tanpa edit code

### Setup File `.env`

**Langkah-langkah:**

1. **Copy file `.env.example` menjadi `.env`:**
   ```bash
   cp .env.example .env
   ```

2. **Edit file `.env`:**
   ```env
   # Contact Configuration
   VITE_WHATSAPP_NUMBER=6282241590417
   VITE_COMPANY_EMAIL=info@webstudiopro.com
   VITE_COMPANY_NAME=WebStudio Pro
   VITE_COMPANY_PHONE=+62 822-4159-0417
   
   # Social Media
   VITE_INSTAGRAM_URL=https://instagram.com/webstudiopro
   VITE_FACEBOOK_URL=https://facebook.com/webstudiopro
   
   # App URL
   VITE_APP_URL=http://localhost:8080
   ```

3. **Restart development server setelah edit `.env`:**
   ```bash
   npm run dev
   ```

### Environment Variables untuk Production:

Saat deploy ke hosting (Vercel/Netlify/dll):

#### **Vercel:**
1. Buka Project Settings
2. Pilih "Environment Variables"
3. Tambahkan setiap variable dari `.env.example`
4. Redeploy project

#### **Netlify:**
1. Buka Site Settings
2. Pilih "Build & Deploy" → "Environment"
3. Tambahkan setiap variable dari `.env.example`
4. Redeploy site

### Prioritas Loading:

File `src/config/contact.ts` akan menggunakan nilai dari:
1. **Environment variables (`.env`)** - PRIORITAS TERTINGGI ✅
2. **Default hardcoded values** - fallback jika env var tidak ada

Contoh:
```typescript
// Akan menggunakan VITE_WHATSAPP_NUMBER dari .env
// Jika tidak ada, gunakan '6282241590417'
number: import.meta.env.VITE_WHATSAPP_NUMBER || '6282241590417'
```

---

## 📍 Lokasi File Data Konten

Semua data konten website ada di folder `src/data/`:

```
src/data/
├── gallery.ts       → Data galeri foto
├── portfolio.ts     → Data portfolio proyek
├── testimonials.ts  → Data testimoni klien
└── team.ts          → Data anggota tim
```

---

## 🎨 3. Edit Gallery

**File:** `src/data/gallery.ts`

### Langkah-langkah:

1. Buka file `src/data/gallery.ts`
2. Copy salah satu object di dalam array `galleryData`
3. Paste di bawahnya
4. Edit properties yang diperlukan
5. Save file

### Contoh:

```typescript
{
  id: "9",  // Ganti dengan ID unik
  title: "Judul Gallery Baru",
  description: "Deskripsi singkat tentang gambar ini",
  image_url: "https://images.unsplash.com/photo-xxxxx",  // URL gambar
  category: "Kategori",  // Kategori untuk filter
  published: true  // true = tampil, false = tidak tampil
}
```

### Tips Upload Gambar:

**Option 1: Unsplash (Gratis, Tanpa Login)**
1. Cari gambar di https://unsplash.com
2. Klik gambar → Copy Link → Paste ke `image_url`

**Option 2: Imgur (Upload Sendiri, Gratis)**
1. Buka https://imgur.com/upload
2. Upload gambar Anda
3. Klik kanan pada gambar → Copy Image Address
4. Paste ke `image_url`

**Option 3: Cloudinary (Profesional, Optimized)**
1. Signup gratis di https://cloudinary.com
2. Upload gambar via dashboard
3. Copy URL CDN → Paste ke `image_url`
4. Bonus: Auto optimization & responsive images

---

## 💼 4. Edit Portfolio

**File:** `src/data/portfolio.ts`

### Langkah-langkah:

1. Buka file `src/data/portfolio.ts`
2. Copy salah satu object di dalam array `portfolioData`
3. Edit sesuai kebutuhan
4. Save file

### Contoh:

```typescript
{
  id: "7",
  title: "Nama Project",
  category: "E-Commerce",  // Kategori: E-Commerce, Corporate, Education, dll
  description: "Deskripsi lengkap tentang project ini...",
  image_url: "https://images.unsplash.com/photo-xxxxx",
  demo_url: "https://linkdemo.com",  // Link ke demo/website (opsional)
  published: true
}
```

---

## 💬 5. Edit Testimonials

**File:** `src/data/testimonials.ts`

### Langkah-langkah:

1. Buka file `src/data/testimonials.ts`
2. Copy salah satu object di dalam array `testimonialsData`
3. Edit informasi klien dan testimoni
4. Save file

### Contoh:

```typescript
{
  id: "7",
  client_name: "Nama Klien",
  client_company: "Nama Perusahaan",
  client_position: "Jabatan",
  content: "Testimoni klien di sini. Ceritakan pengalaman mereka...",
  rating: 5,  // Rating 1-5
  avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=NamaKlien",
  published: true
}
```

### Tips Avatar:

**Option 1: Generated Avatar (Gratis)**
```
https://api.dicebear.com/7.x/avataaars/svg?seed=NamaKlien
```
Ganti `NamaKlien` dengan nama client untuk mendapat avatar unik.

**Option 2: Upload Foto Real**
- Upload foto ke Imgur → Copy URL → Paste ke `avatar_url`

---

## 👥 6. Edit Team

**File:** `src/data/team.ts`

### Langkah-langkah:

1. Buka file `src/data/team.ts`
2. Copy salah satu object di dalam array `teamData`
3. Edit informasi anggota tim
4. Save file

### Contoh:

```typescript
{
  id: "4",
  name: "Nama Lengkap",
  position: "Jabatan / Posisi",
  bio: "Bio singkat tentang keahlian dan pengalaman...",
  avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nama",
  linkedin_url: "https://linkedin.com/in/username",  // Opsional
  github_url: "https://github.com/username",  // Opsional
  published: true
}
```

---

## ⚙️ Cara Hide/Show Konten

Untuk menyembunyikan konten tanpa menghapusnya:

### Hide item:
```typescript
published: false  // Item tidak akan tampil di website
```

### Show item:
```typescript
published: true  // Item akan tampil di website
```

---

## 🚀 7. Deploy Perubahan

### Development Mode (Local Testing):

1. Buka terminal di folder project
2. Jalankan:
   ```bash
   npm run dev
   ```
3. Website otomatis reload setiap ada perubahan

### Production Deployment:

**Option 1: Via Lovable Dashboard**
1. Semua perubahan otomatis tersimpan
2. Klik tombol "Publish" di top-right
3. Website akan update otomatis

**Option 2: Manual Build & Deploy**
1. Build project:
   ```bash
   npm run build
   ```
2. Upload folder `dist` ke hosting Anda

**Option 3: Git + Vercel/Netlify (Recommended)**
1. Push changes ke GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
2. Vercel/Netlify akan auto-deploy

---

## 📋 Checklist Sebelum Publish

- [ ] Semua nomor WhatsApp & email sudah benar di `src/config/contact.ts`
- [ ] Environment variables sudah di-set (production)
- [ ] Semua gambar sudah ter-upload dan URL valid
- [ ] Tidak ada typo di title atau description
- [ ] `published: true` untuk item yang mau ditampilkan
- [ ] Test di local dulu (`npm run dev`)
- [ ] Check responsive di mobile & desktop
- [ ] Test semua WhatsApp buttons berfungsi

---

## ⚠️ Catatan Penting

1. **Backup Data:** Sebelum edit besar, copy file data dulu sebagai backup
2. **Format TypeScript:** Jangan lupa tanda koma (`,`) setelah setiap object
3. **ID Unique:** Setiap item harus punya ID unik (tidak boleh sama)
4. **String Format:** Text harus dalam tanda petik `"text"`
5. **Boolean:** `true` dan `false` tanpa petik
6. **Environment Variables:** Jangan commit file `.env` ke Git! (sudah ada di `.gitignore`)

---

## 🆘 Troubleshooting

### Error: "Cannot read property..."
- **Penyebab:** Ada syntax error (tanda koma hilang, petik tidak lengkap)
- **Solusi:** Check syntax di line yang error

### Gambar tidak muncul
- **Penyebab:** URL gambar tidak valid atau rusak
- **Solusi:** Test URL di browser, pastikan bisa dibuka

### Perubahan tidak muncul
- **Penyebab:** Cache browser atau belum deploy
- **Solusi:** Hard refresh browser (Ctrl+Shift+R) atau redeploy

### WhatsApp button tidak berfungsi
- **Penyebab:** Nomor WhatsApp format salah
- **Solusi:** Format harus `62` + nomor (contoh: `6282241590417`)

### Environment variables tidak terbaca
- **Penyebab:** Belum restart dev server atau typo di `.env`
- **Solusi:** Restart dev server (`npm run dev`) dan cek nama variable

---

## 📞 Butuh Bantuan?

Jika ada pertanyaan atau kesulitan, silakan hubungi:
- **WhatsApp:** Lihat nomor di `src/config/contact.ts`
- **Email:** Lihat email di `src/config/contact.ts`

---

**Happy Editing! 🎉**
