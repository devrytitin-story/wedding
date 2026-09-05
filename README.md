# Undangan Pernikahan Digital Kage — Titin & Devry

Undangan pernikahan digital bertema Zen Sanctuary sinematik 3D Three.js berbasis arsitektur kuil Kage (ThreeUI), disesuaikan khusus untuk pernikahan dan syukuran **Titin Rahma Lestari & Devry Rizkie H**.

## Fitur-Fitur

1. **3D World & Camera Motion (Three.js)**:
   - Efek lentera batu, dedaunan maple, pohon pinus, dan bebatuan kuil tradisional Jepang yang bergerak seiring scroll (*scroll-driven parallax 3D*).
2. **Pemutar Musik Mengambang (Floating Music Player)**:
   - Tombol audio dengan visualizer bar animasi (*5 audio bars*).
   - Otomatis berputar saat tombol **"Buka Undangan"** ditekan.
3. **Nama Tamu Personal (Dynamic URL Parameter)**:
   - Format: `?to=Nama+Tamu` atau `?u=Bapak+Budi`
   - Nama tamu akan otomatis ditampilkan secara anggun di kotak ucapan selamat datang di gerbang utama.
4. **Hitung Mundur Acara (Interactive Countdown)**:
   - Menghitung mundur otomatis menuju **Minggu, 27 September 2026 08:00 WIB**.
   - Tombol praktis **"Simpan ke Google Calendar"**.
5. **Dua Jiwa, Satu Takdir (Profil Mempelai)**:
   - Kartu profil mempelai wanita (**Titin**) & mempelai pria (**Devry**) beserta informasi kedua orang tua.
6. **Rangkaian Acara**:
   - Akad Nikah (Ijab & Qabul) & Walimatul 'Ursy (Syukuran).
7. **Lokasi & Galeri Foto**:
   - Peta lokasi Rumah Mempelai Wanita dengan tombol langsung ke **Google Maps**.
   - Galeri 6 foto kenangan dengan fitur **Lightbox Modal** (klik foto untuk memperbesar).
8. **Konfirmasi Kehadiran (RSVP) & Doa Restu**:
   - Form konfirmasi kehadiran yang terhubung langsung ke **WhatsApp** mempelai.
   - Kolom ucapan dan doa yang langsung tampil secara *live* di halaman.

---

## Cara Menjalankan di Komputer Lokal

Buka terminal di folder ini, lalu jalankan:

```bash
node server.js
```

Buka browser di:
- **Default**: [http://localhost:3000](http://localhost:3000)
- **Dengan Nama Tamu**: [http://localhost:3000/?to=Bapak+Joko+%26+Keluarga](http://localhost:3000/?to=Bapak+Joko+%26+Keluarga)

---

## Cara Deploy ke GitHub Pages

1. Buat repository baru di GitHub (misal: `undangan-kage` atau ganti isi repo `Selamet`).
2. Jalankan perintah git:
   ```bash
   git add .
   git commit -m "feat: initial release of Kage wedding invitation for Titin & Devry"
   git remote add origin https://github.com/<username>/<nama-repo>.git
   git branch -M main
   git push -u origin main
   ```
3. Di halaman GitHub repo, buka **Settings** > **Pages** > pilih branch **main** dan folder **/(root)** > klik **Save**.
4. Website undangan Anda akan langsung live di `https://<username>.github.io/<nama-repo>/`.
