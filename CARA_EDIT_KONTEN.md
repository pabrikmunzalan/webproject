# 📝 Panduan Edit Konten Website

Panduan lengkap untuk mengedit konten website tanpa perlu menggunakan database atau admin panel.

---

## 📍 Lokasi File Data

Semua data konten website ada di folder `src/data/`:

```
src/data/
├── gallery.ts       → Data galeri foto
├── portfolio.ts     → Data portfolio proyek
├── testimonials.ts  → Data testimoni klien
└── team.ts          → Data anggota tim
```

---

## 🎨 Cara Menambah Item Gallery

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

**Option 3: Cloudinary (Profesional)**
1. Signup gratis di https://cloudinary.com
2. Upload gambar via dashboard
3. Copy URL CDN → Paste ke `image_url`

---

## 💼 Cara Menambah Portfolio

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

## 💬 Cara Menambah Testimoni

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

## 👥 Cara Menambah Anggota Tim

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

## 🚀 Cara Deploy Perubahan

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

**Option 2: Manual Build**
1. Build project:
   ```bash
   npm run build
   ```
2. Upload folder `dist` ke hosting Anda

---

## 📋 Checklist Sebelum Publish

- [ ] Semua gambar sudah ter-upload dan URL valid
- [ ] Tidak ada typo di title atau description
- [ ] `published: true` untuk item yang mau ditampilkan
- [ ] Test di local dulu (`npm run dev`)
- [ ] Check responsive di mobile & desktop

---

## ⚠️ Catatan Penting

1. **Backup Data:** Sebelum edit besar, copy file data dulu sebagai backup
2. **Format TypeScript:** Jangan lupa tanda koma (`,`) setelah setiap object
3. **ID Unique:** Setiap item harus punya ID unik (tidak boleh sama)
4. **String Format:** Text harus dalam tanda petik `"text"`
5. **Boolean:** `true` dan `false` tanpa petik

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

---

## 📞 Butuh Bantuan?

Jika ada pertanyaan atau kesulitan, silakan hubungi:
- WhatsApp: +62 822-4159-0417
- Email: support@webpro.com

---

**Happy Editing! 🎉**
