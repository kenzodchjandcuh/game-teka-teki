# 🎮 GAME PETUALANGAN - 10 LEVEL

## 📋 Deskripsi Program

**Game Petualangan** adalah sebuah permainan web interaktif yang menghadirkan 10 level tantangan penuh dengan teka-teki, pertanyaan logika, dan puzzle yang menguji kemampuan berpikir pemain. Permainan ini dirancang dengan antarmuka yang menarik dan responsif untuk memberikan pengalaman bermain yang menyenangkan.

---

## 🎯 Fitur Utama

### 1. **10 Level Petualangan**
   - Setiap level memiliki cerita dan tema unik
   - Tingkat kesulitan yang bertingkat
   - Tantangan berbeda di setiap level:
     - Teka-teki logika
     - Pertanyaan matematika
     - Puzzle kata-kata
     - Permainan riddle tradisional

### 2. **Sistem Nyawa (Lives)**
   - Pemain memiliki **5 nyawa** untuk setiap level
   - Satu nyawa berkurang untuk setiap jawaban yang salah
   - Game berakhir jika semua nyawa habis
   - Bagian atas permainan menampilkan visual nyawa yang tersisa

### 3. **Sistem Poin/Skor**
   - Skor meningkat setiap kali berhasil menjawab pertanyaan
   - Skor terakumulasi untuk seluruh pertandingan
   - Ditampilkan di dashboard statistik permainan

### 4. **Level Selection (Pilihan Level)**
   - Tampilan menu utama dengan 10 tombol level
   - Level pertama terbuka dari awal
   - Level berikutnya terbuka setelah menyelesaikan level sebelumnya
   - Status visual: 
     - 🔓 Level terbuka (dapat dimainkan)
     - 🔒 Level terkunci (belum terbuka)
     - ✓ Level selesai (sudah diselesaikan)

### 5. **Antarmuka Pengguna (UI)**
   - **Menu Utama**: Menampilkan semua level dan opsi untuk memulai
   - **Game Screen**: Tampilan permainan dengan pertanyaan dan pilihan jawaban
   - **Modal Result**: Menampilkan hasil jawaban (benar/salah)
   - **Modal End Game**: Menampilkan hasil akhir setelah menyelesaikan atau gagal level
   - **Progress Bar**: Menunjukkan kemajuan level (1-100%)

---

## 🏗️ Struktur Program

### File Utama

| File | Fungsi |
|------|--------|
| `adventure_game.html` | File HTML utama - struktur halaman dan elemen DOM |
| `js/script.js` | Logika permainan utama dan pengelolaan game state |
| `js/main.js` | Database level dan pertanyaan (backup atau versi alternatif) |
| `css/style.css` | Styling dan desain visual keseluruhan |
| `song/` | Folder untuk menyimpan file audio permainan |

### Struktur HTML
```
Body
├── Container
│   ├── Menu Screen (Beranda)
│   │   ├── Header (Judul)
│   │   ├── Level Select (Grid Tombol 10 Level)
│   │   └── Tombol Mulai
│   ├── Game Screen (Area Bermain)
│   │   ├── Stats (Level, Skor, Nyawa)
│   │   ├── Progress Bar
│   │   ├── Lives Container
│   │   ├── Game Content (Pertanyaan & Pilihan)
│   │   └── Tombol Kontrol
│   ├── Result Modal (Pop-up Hasil)
│   └── End Game Modal (Pop-up Akhir)
```

---

## 🎮 Mekanik Permainan

### Alur Permainan:
1. **Mulai Game** → Pemain memilih level atau mulai dari level 1
2. **Tampilkan Pertanyaan** → Game menampilkan teka-teki/pertanyaan dengan 4 pilihan jawaban
3. **Pilih Jawaban** → Pemain memilih salah satu dari 4 pilihan
4. **Validasi Jawaban** → Sistem memeriksa apakah jawaban benar atau salah
5. **Tampilkan Hasil** → Pop-up menampilkan apakah jawaban benar/salah
6. **Lanjut atau Game Over** → 
   - Jika benar → Lanjut ke pertanyaan/level berikutnya
   - Jika salah → Kurangi nyawa, jika nyawa habis → Game Over
7. **Kembali ke Menu** → Setelah semua level selesai atau gagal

### Kondisi Kemenangan:
- Menyelesaikan semua 10 level dengan berhasil

### Kondisi Kekalahan:
- Semua nyawa habis di level manapun sebelum menyelesaikan 10 level

---

## 🎨 Desain & Styling

### Warna Tema
- **Gradient Utama**: Ungu (#667eea) ke Ungu Gelap (#764ba2)
- **Background Game**: White dengan shadow yang elegan
- **Tombol**: Biru (#2196F3) dan Merah (#f44336)
- **Teks**: Gelap (#333) untuk kontras yang baik

### Elemen Visual
- **Animasi Slide-In** pada container utama
- **Rounded Corners** (border-radius: 20px) untuk desain modern
- **Box Shadows** untuk kedalaman visual
- **Progress Bar** yang dinamis menunjukkan kemajuan
- **Responsive Design** - bekerja pada desktop, tablet, dan mobile

---

## 💻 Fungsi-Fungsi Utama (JavaScript)

### Fungsi Inisialisasi
- `initializeGame()` - Memulai permainan
- `displayMenu()` - Menampilkan menu utama

### Fungsi Gameplay
- `startGame(levelNumber)` - Memulai level tertentu
- `displayLevel()` - Menampilkan pertanyaan level saat ini
- `handleAnswerClick(index)` - Menangani klik jawaban pemain
- `checkAnswer()` - Memeriksa apakah jawaban benar

### Fungsi UI/Modal
- `showResultModal(message, isCorrect)` - Menampilkan pop-up hasil
- `closeResultModal()` - Menutup modal hasil
- `showEndGameModal()` - Menampilkan modal akhir permainan
- `backToMenu()` - Kembali ke menu utama

### Fungsi Manajemen State
- `gameState` - Objek yang menyimpan status permainan:
  - `currentLevel`: Level saat ini (1-10)
  - `score`: Poin pemain
  - `lives`: Nyawa tersisa
  - `completedLevels`: Array level yang sudah selesai
  - `isAnswered`: Status apakah sudah menjawab
  - `selectedAnswer`: Jawaban yang dipilih
  - `gameOver`: Status apakah permainan berakhir

---

## 📚 10 Level Tantangan

| Level | Judul | Tipe Tantangan |
|-------|-------|----------------|
| 1 | Pintu Misteri | Pilihan logika |
| 2 | Teka-teki Sihir | Riddle klasik (Peta) |
| 3 | Jembatan Angka | Matematika (8 + 7 × 2) |
| 4 | Hutan Terlarang | Logika pilihan jalan |
| 5 | Permainan Logika | Logika sederhana |
| 6 | Gua Naga Purba | Riddle kata (Sepatu) |
| 7 | Istana Terakhir | Riddle tentang waktu (Matahari) |
| 8 | Lembah Angin | Riddle (Keyboard) |
| 9 | Menara ES | Riddle (Percakapan) |
| 10 | Pohon Kehidupan | Riddle tersulit (Waktu) |

---

## 🚀 Cara Memainkan

1. **Buka file** `adventure_game.html` di web browser
2. **Klik tombol** "Mulai dari Level 1" atau pilih level yang sudah terbuka
3. **Baca pertanyaan** dan 4 pilihan jawaban yang tersedia
4. **Pilih satu jawaban** dengan mengklik tombolnya
5. **Lihat hasilnya** - benar atau salah?
6. **Lanjutkan** hingga semua level selesai atau nyawa habis
7. **Kembali ke menu** kapan saja dengan tombol "Kembali ke Menu"

---

## 📱 Kompatibilitas

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Tablet (iPad, Android Tablet)
- ✅ Mobile (Smartphone)
- ✅ Responsive Design (Adaptive UI)

---

## 🔧 Teknologi yang Digunakan

- **HTML5** - Struktur halaman
- **CSS3** - Styling dan animasi
- **Vanilla JavaScript** - Logika permainan (ES6+)
- **Tidak memerlukan** framework atau library eksternal

---

## 📝 Catatan Developer

- Semua level dan pertanyaan disimpan dalam array `levels` di `script.js`
- Game state dikelola dengan objek `gameState` untuk tracking kemajuan
- Sistem modal digunakan untuk pop-up hasil dan akhir permainan
- CSS menggunakan Flexbox dan Grid untuk layout yang responsif
- Tidak ada koneksi database atau backend - semua data disimpan di frontend

---

## 🎓 Pembelajaran & Pengembangan

Proyek ini cocok untuk pembelajaran:
- **Fundamental Web Development** (HTML, CSS, JS)
- **DOM Manipulation** dan Event Handling
- **Game Development** dengan JavaScript vanilla
- **State Management** dalam aplikasi web
- **Responsive Design** dan Mobile-First Approach

---

## 📄 Lisensi

Program ini dapat digunakan, dimodifikasi, dan didistribusikan secara bebas.

---

**Selamat bermain dan menikmati petualangan seru ini! 🎉**
