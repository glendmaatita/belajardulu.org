# BelajarYuk · Platform Belajar Interaktif Multi-Topik

Satu aplikasi web, banyak topik. Tiap topik adalah kurikulum lengkap berbahasa
**Indonesia** dengan video animasi (Remotion), simulator interaktif, grafik data,
studi kasus, dan kuis. Dirancang agar **menambah topik baru cukup menaruh satu folder**.

## Topik saat ini

- **Pajak UMKM** (🧾): dibuat ramah untuk awam, banyak simulator. NPWP, PPh Final 0,5%, PPN & PKP, pajak karyawan (PPh 21/23), cara bayar/lapor, dan denda. 5 level, 20 pelajaran, 6 simulator pajak.
- **Carbon Trading** (🌿): lingkungan, ekonomi, hukum, kebijakan, keuangan, akuntansi karbon (GHG Protocol & ISO), pajak, teknologi (MRV), tata kelola, risiko, bisnis, sosial, etika, internasional, politik. 6 level, 32 pelajaran.
- **Akuntansi** (📒): persamaan dasar, siklus akuntansi, perusahaan dagang, topik lanjutan, analisis & standar. 5 level, 27 pelajaran.

## Menjalankan

```bash
npm install
cp .env.example .env    # opsional: isi GOOGLE_CLIENT_ID & JWT_SECRET untuk login

npm run dev      # frontend (Vite) + backend (API) bersamaan
                 # web pada http://localhost:5173 , API pada http://localhost:8787
npm run build    # build frontend ke dist/
npm start        # mode produksi: API sekaligus melayani dist/
```

## Rute

- `/` landing, daftar semua topik
- `/:topicId` kurikulum sebuah topik (mis. `/carbon`, `/akuntansi`)
- `/:topicId/pelajaran/:lessonId` halaman pelajaran

## Login Google + SQLite

Backend Express + `better-sqlite3` (`server/`), verifikasi token Google via
`google-auth-library`, sesi cookie `httpOnly` (JWT). Progres disimpan dengan kunci
`topicId:lessonId` sehingga terpisah per topik dan sinkron antar perangkat. Tanpa login,
progres tersimpan di `localStorage`; saat login, progres tamu digabung ke akun. Jika
`GOOGLE_CLIENT_ID` belum diisi, aplikasi tetap berjalan penuh dalam mode tamu.

## Menambah topik baru

1. Buat folder `src/topics/<id>/` berisi `levels.ts`, `lessons/level*.ts`, dan `meta.ts`.
2. (Opsional) tambahkan komposisi video baru di `src/remotion/` dan daftarkan di `src/remotion/registry.ts`; tambahkan widget di `src/components/widgets/` dan daftarkan di `src/components/widgets/index.ts`.
3. Import topik di `src/topics/index.ts` dan masukkan ke array `topics`.

Tidak perlu mengubah komponen inti: `blocks.tsx`, `Charts.tsx`, halaman, dan progres semuanya generik.

## Struktur

```
src/
  types.ts                 # tipe gabungan: Topic, Level, Lesson, ContentBlock (superset)
  topics/
    index.ts               # registry topik + helper (getTopic, lessonsByLevel, dst)
    akuntansi/ meta.ts, levels.ts, lessons/level1..5.ts
    carbon/    meta.ts, levels.ts, lessons/level1..6.ts
  remotion/                # SEMUA komposisi video (akuntansi + carbon) + registry gabungan
  components/
    blocks.tsx             # merender semua jenis block
    Charts.tsx             # grafik animasi (bar/line/donut/area) + kartu KPI
    widgets/               # SEMUA simulator + registry gabungan
  pages/ Landing.tsx, TopicHome.tsx, LessonPage.tsx
  lib/ auth.tsx, progress.tsx (per-topik), format.ts
server/ index.ts, db.ts    # Express API + SQLite
```

> Catatan: materi bersifat edukatif. Angka, tarif, dan regulasi dapat berubah, selalu rujuk
> sumber resmi sebelum mengambil keputusan nyata.
