# BelajarYuk — Panduan & Standar Kualitas Kurikulum

Platform belajar interaktif berbahasa Indonesia, multi-topik. Dokumen ini adalah **kontrak kualitas**: ikuti agar setiap topik/pelajaran baru konsisten dengan yang sudah ada dan dapat direproduksi.

Stack: Vite + React 19 + TypeScript + Tailwind v3 + React Router 7. Video animasi pakai Remotion (`@remotion/player`). Grafik pakai sistem SVG custom (`src/components/Charts.tsx`). Backend Express + better-sqlite3 + Google Sign-In. Konten bersifat data-driven (bukan JSX per pelajaran).

---

## 0. Aturan mutlak (jangan dilanggar)

1. **Bahasa Indonesia** untuk semua konten yang dilihat user.
2. **DILARANG memakai karakter em-dash `—`** di mana pun. Pakai koma, tanda hubung biasa, atau pisah kalimat. Ini wajib. Setelah menulis konten, sapu dengan `grep -rn "—" src` dan hapus semua.
3. **Fakta harus akurat** (regulasi Indonesia: DJBC/Bea Cukai, OJK, DJP, INSW; rumus keuangan). **Verifikasi setiap angka** pada `calcExercise` dan studi kasus.
4. **Hanya gunakan field yang ada di `ContentBlock`** (lihat `src/types.ts`). Jangan mengarang field (`level` pada heading boleh, tetapi jangan tambah `style`, `caption` pada stats, `unit` pada calcExercise, dll). `callout.tone` HANYA `info | tip | warn | key`.
5. **Build harus bersih**: `npm run build` tanpa error TypeScript sebelum dianggap selesai.
6. **Konten di-code-split**: isi pelajaran (blocks) dimuat lazy per-topik lewat `loadTopic()` (`src/topics/loaders.ts`) supaya bundel awal ringan (penting untuk HP). Katalog/navigasi/dashboard hanya memakai metadata ringan dari `src/topics/manifest.ts`. Kedua file itu **dibuat otomatis** oleh `scripts/gen-manifest.mts` (`npm run gen:manifest`), yang sudah otomatis jalan saat `npm run dev`/`dev:web`/`build`. JANGAN sunting `manifest.ts`/`loaders.ts` manual; cukup regenerate. Jika menambah topik, tetap daftarkan di `src/topics/index.ts` (array `ORDER` untuk urutan tampil) lalu regenerate.

---

## 1. Arsitektur

```
src/
  types.ts                      # SATU sumber kebenaran tipe (ContentBlock, Lesson, Topic, ...)
  topics/
    index.ts                    # registry topik + helper (getTopic, orderedLessons, dst)
    <topic>/
      meta.ts                   # export const <topic>: Topic  (gabung semua level)
      levels.ts                 # export const levels: Level[]
      lessons/
        level1.ts ... levelN.ts # export const levelN: Lesson[]
  components/
    blocks.tsx                  # BlockRenderer: memetakan tiap ContentBlock ke UI
    Charts.tsx                  # grafik SVG (bar/line/donut/area) + StatCards
    widgets/index.ts            # registry simulator (widgetRegistry)
    widgets/*.tsx               # satu file per simulator
  remotion/
    registry.ts                # registry video (videoRegistry) + durasi
    theme.ts, anim.tsx         # palet, font, helper animasi (Title, usePop, useFade, Chip, Arrow)
    *.tsx                       # satu file per video
  lib/
    glossary.ts                 # kamus istilah + annotateGlossary() (tooltip otomatis)
    format.ts                   # rupiah(), angka()
```

Menambah topik = buat folder + `meta.ts` + `levels.ts` + `lessons/*`, lalu daftarkan di `src/topics/index.ts`. Tidak perlu menyentuh `types.ts`.

---

## 2. Standar kualitas per PELAJARAN (lesson)

Setiap pelajaran (objek `Lesson`) minimal harus punya:

- `id` (kebab-case, unik dalam topik), `levelId`, `order`, `title`, `summary`, `durationMin` (~12-16), `tags: string[]`.
- `blocks` yang memuat, sebagai patokan minimum:
  - 1-2 `paragraph` pengantar.
  - 2-3 `callout` (variasikan tone `info`/`tip`/`warn`/`key`).
  - **Minimal 1 `chart`** (data-viz untuk menjelaskan materi atau menyajikan fakta).
  - **Video dan/atau simulator** bila topiknya cocok (lihat aturan sebaran di bawah).
  - **Minimal 1 `case`** (studi kasus dengan angka konkret).
  - **Minimal 2 latihan**: campuran `calcExercise` + (`classifyExercise` atau `matchExercise`). Variasikan jenis antar pelajaran.
  - 1 `takeaways` (4-5 poin inti).
  - 1 `quiz` dengan **tepat 5 pertanyaan** (`answer` adalah index 0-based; sertakan `explain`).

Sebaran aset di level/topik (target yang sudah dipakai semua topik):
- Setiap level (4 pelajaran) punya **minimal 1-2 video** dan **beberapa simulator**. Jangan ada level yang kosong video & simulator.
- Setiap pelajaran sebaiknya punya grafik yang **bermakna**, bukan sekadar memenuhi jumlah. Satu grafik yang benar-benar mengajarkan sesuatu lebih baik daripada dua grafik pengisi. Lihat "Aturan mutu grafik" di bagian 6.

### Studi kasus historis (untuk topik yang bisa dihubungkan dengan sejarah)
Untuk topik yang erat dengan peristiwa nyata (kebijakan-fiskal, makroekonomi, pasar-keuangan, investasi, kepabeanan, corporate-finance, climate-finance), setiap pelajaran punya tambahan `case` berjudul diawali **"Sejarah: "** yang mengaitkan konsep dengan kejadian penting di masa lalu (mis. Depresi Besar 1929, krismon Indonesia 1998, COVID-19/PEN 2020, Smoot-Hawley 1930, VOC & rempah, RJR Nabisco 1988, Protokol Kyoto 1997/Persetujuan Paris 2015, tulip mania 1637). Fakta dan tahun harus akurat (pakai "sekitar" bila angka tak pasti). Saat menambah pelajaran baru di topik-topik ini, sertakan satu studi kasus historis seperti ini.

### Matematika: rumus selalu di akhir (untuk topik matematika-dasar)
Topik **matematika-dasar** memakai pedagogi penemuan. Tegaskan bahwa matematika BUKAN sekadar berhitung (berhitung hanya bagiannya), fokus pada penerapan sehari-hari dan matematika sebagai bahasa semesta. **Rumus tidak pernah ditaruh di awal.** Tiap pelajaran membuka dengan kisah/situasi nyata, lalu mengajak pengguna berpetualang (video, widget interaktif, grafik, latihan) untuk membangun intuisi, dan barulah rumus "lahir" di akhir lewat `callout` `tone:"key"` berjudul **"Rumus pun lahir"** atau **"Kesimpulan pun lahir"**. Sertakan `callout` `tone:"tip"` berjudul "Ayo berpetualang dulu" di awal eksplorasi. Pertahankan pola ini saat menambah pelajaran matematika.

### Foto/gambar tokoh (untuk topik yang berkaitan dengan tokoh, mis. filsafat)
Untuk topik dengan tokoh nyata, sertakan `image` berisi potret domain publik dari Wikimedia Commons (lihat catatan `image` di bagian 3). Untuk filsafat, tekankan juga perkembangan pemikiran dari era ke era dan pola tesis-antitesis-sintesis (dialektika Hegel).

### Patokan angka yang sudah dicapai (acuan "menyeluruh")
Per topik 5 level x 4 pelajaran (~20 pelajaran): ~10 video unik, ~10-14 simulator unik, ~38-63 chart, ~34-58 calcExercise, ~30+ classify/match, 20 quiz. Topik baru tidak harus identik, tetapi inilah definisi "banyak video, banyak grafik, banyak simulasi, banyak latihan".

---

## 3. ContentBlock cheat-sheet (pakai PERSIS field ini)

```ts
{ type:"heading", text, level? }
{ type:"paragraph", html }                              // html: boleh <strong>, <b>, <em>
{ type:"list", items:string[], ordered? }
{ type:"callout", tone:"info"|"tip"|"warn"|"key", title?, html }
{ type:"case", title, html }                            // selalu pakai angka konkret
{ type:"chart", variant:"bar"|"line"|"donut"|"area", title, unit?, source?, note?,
  data:[{label, value:number, color?}] }
{ type:"stats", items:[{value:string, label, sub?, color?}] }
{ type:"takeaways", items:string[] }
{ type:"video", comp:"<NamaKomponen>", title, caption? }
{ type:"image", src, alt, caption?, credit? }          // foto/gambar (mis. potret tokoh)
{ type:"widget", widget:"<NamaWidget>" }
{ type:"quiz", questions:[{q, options:string[], answer:number, explain}] }  // tepat 5
{ type:"calcExercise", prompt, answer:number, tolerance?, prefix?, suffix?, solution, hint? }
{ type:"classifyExercise", prompt, buckets:string[], items:[{text, bucket}] }
{ type:"matchExercise", prompt, pairs:[{left, right}] }
// akuntansi-spesifik: equation, journal, ledger, table, journalExercise
```

Catatan:
- `chart.data[].value` adalah angka mentah; sumbu/skala dihitung otomatis. Beri `color` hex bila ingin warna spesifik.
- `calcExercise.answer` angka murni; gunakan `prefix:"Rp"` atau `suffix:"%"` untuk tampilan, dan `tolerance` untuk toleransi pembulatan.
- `matchExercise.pairs` harus 1:1 yang jelas; hindari banyak `left` memetakan ke `right` yang sama.
- `image`: untuk foto/potret (mis. tokoh filsuf), pakai gambar domain publik dari Wikimedia Commons lewat URL stabil `https://commons.wikimedia.org/wiki/Special:FilePath/<NAMA_BERKAS>?width=400`. VERIFIKASI dulu tiap URL mengembalikan 200 (curl, hati-hati rate limit 429 yang bukan berarti tidak ada). Selalu isi `alt` dan `credit:"Sumber: Wikimedia Commons, domain publik"`. Untuk tokoh modern yang fotonya masih berhak cipta, jangan paksa pakai gambar; cukup teks/grafik.

---

## 4. Membuat VIDEO (Remotion)

1. Buat `src/remotion/NamaVideo.tsx`. Pola:
   ```tsx
   import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
   import { palette, font } from "./theme";
   import { Title, usePop, useFade } from "./anim";
   export const NamaVideo: React.FC = () => { /* ... */ };
   export const NamaVideoDuration = 200; // dalam frame (fps=30)
   ```
2. Gunakan `palette` dari `theme.ts` (bg, aset, ekuitas, kewajiban, kredit, accent, text, muted) dan helper `anim.tsx` agar gaya konsisten.
3. Pakai entity HTML untuk panah/simbol di JSX (`&rarr;`), bukan karakter Unicode mentah, dan **tidak ada em-dash**.
4. Hindari variabel `frame` yang tak terpakai (akan gagal `tsc`). Jangan pakai `Math.random()`/`Date.now()`.
5. **Daftarkan** di `src/remotion/registry.ts`: tambahkan `import` dan satu baris di `videoRegistry`:
   ```ts
   NamaVideo: { component: NamaVideo, durationInFrames: NamaVideoDuration },
   ```
6. Pakai di pelajaran: `{ type:"video", comp:"NamaVideo", title:"...", caption:"..." }`.

---

## 5. Membuat SIMULATOR (widget)

1. Buat `src/components/widgets/NamaWidget.tsx`, sebuah komponen interaktif (slider/toggle/tab) yang menghitung sesuatu secara real-time. Tiru struktur widget lain (slider helper di bawah file, `rupiah()` dari `lib/format`).
2. Hindari state/variabel tak terpakai; pastikan kelas Tailwind valid (jangan typo seperti `text-ion-faint`).
3. **Daftarkan** di `src/components/widgets/index.ts`: tambahkan `import { NamaWidget } from "./NamaWidget";` dan masukkan `NamaWidget,` ke objek `widgetRegistry`.
4. Pakai di pelajaran: `{ type:"widget", widget:"NamaWidget" }`. Idealnya didahului `callout` tone `tip` "Coba simulatornya".

---

## 6. Grafik (chart)

Cukup pakai block `chart` (tidak perlu komponen baru). Sistem render (`Charts.tsx`) menganimasikan saat masuk viewport. Beri `title`, `unit`, `source` (tandai "ilustrasi" bila bukan data resmi), `note` (1 kalimat insight), dan `data` realistis. Untuk perbandingan kategori pakai `bar`/`donut`; untuk tren waktu pakai `line`/`area`.

**Aturan mutu grafik (WAJIB, jangan bikin grafik pengisi):** Setiap grafik harus menyampaikan informasi yang BENAR, BERNILAI, dan NYAMBUNG dengan materi pelajaran itu. Sebelum menambah grafik, tanyakan: "Apakah ini mengajarkan sesuatu yang benar dan tidak sepele?" Jika tidak, jangan dibuat.
- DILARANG angka karangan yang seolah-olah data survei (mis. "36% benda berbentuk lingkaran") yang tidak punya sumber dan tidak mengajarkan apa-apa. "ilustrasi edukatif" hanya boleh untuk konsep yang memang bermakna (mis. linear vs eksponensial, frekuensi dadu mendekati 0,5, rasio Fibonacci menuju 1,618).
- DILARANG grafik tautologis yang hanya mengulang definisi (mis. batang "jumlah sisi": segitiga 3, segi empat 4, segi enam 6, sebab namanya sudah menyebut jumlah sisinya). Itu nol informasi.
- Utamakan grafik yang memvisualkan angka NYATA dari eksplorasi pelajaran (hasil hitung petak luas, konvergensi rasio, pertumbuhan majemuk, sebaran data nyata) atau fakta dunia nyata yang akurat dan bersumber.
- Lebih baik 1 grafik bermakna daripada 2 grafik pengisi. Mutu mengalahkan jumlah.

---

## 7. Glosarium (tooltip istilah)

`src/lib/glossary.ts` berisi kamus istilah → definisi. `annotateGlossary()` dipanggil di `blocks.tsx` untuk paragraph/list/callout/case/takeaways: ia menandai kemunculan pertama tiap istilah dengan ikon info biru + tooltip (CSS di `index.css`, kelas `.gloss`).

- Saat menambah materi baru yang memuat **istilah teknis baru**, tambahkan entrinya ke `GLOSSARY` (kunci = istilah seperti muncul di teks, nilai = definisi 1 kalimat sederhana). Tidak perlu menyentuh komponen apa pun.
- Pencocokan case-insensitive, frasa panjang menang atas kata pendek, dan hanya kemunculan pertama per blok yang ditandai.

---

## 8. Alur kerja membangun topik (seed-then-expand)

Pola ini terbukti andal; subagent **stall** bila menulis file besar baru via satu `Write`, tetapi **andal saat meng-EDIT file yang sudah ada** dengan banyak Edit kecil.

1. **Infra dulu (oleh agen utama):** buat `levels.ts`, `meta.ts`, simulator + video yang dibutuhkan, daftarkan semuanya.
2. **Seed:** tulis tiap `lessons/levelN.ts` dengan **satu pelajaran lengkap** sebagai jangkar.
3. **Verifikasi:** `npm run build` bersih + `grep -rl "—" src` kosong.
4. **Expand:** kirim subagent (1 per level/area) untuk **menambah** pelajaran/blok ke file yang sudah ada. Instruksi wajib ke subagent:
   - Anti-stall: **banyak Edit kecil**, sisipkan satu blok/pelajaran per Edit, **jangan** rewrite seluruh file, jangan satu Edit > ~150 baris.
   - Sertakan cheat-sheet schema (bagian 3), aturan no-em-dash, dan daftar video/widget yang boleh dipakai.
   - Tutup dengan: jalankan `npx tsc -b`, perbaiki error sendiri, lalu `grep -n "—"` pada file yang disentuh dan bersihkan.

### Memperkaya topik yang sudah ada ("buat lebih menyeluruh")
1. Audit dulu: hitung blok per topik
   ```bash
   for t in 'type: "video"' 'type: "chart"' 'type: "widget"' 'type: "calcExercise"' 'type: "matchExercise"'; do \
     printf "%-22s " "$t"; grep -rho "$t" src/topics/<topic>/lessons/ | wc -l; done
   ```
   dan cek pelajaran mana yang belum punya video/widget (`grep -E 'id: "|comp: "|widget: "'`).
2. Bangun video + simulator baru untuk mengisi level yang kosong, daftarkan, build-verify.
3. Kirim subagent enrichment per level untuk **menyisipkan** video/widget baru + minimal 1 chart & 1 latihan tambahan ke tiap pelajaran (jangan hapus konten lama).

---

## 9. Verifikasi sebelum selesai (checklist)

```bash
npm run build                 # harus 0 error TypeScript
grep -rl "—" src              # harus kosong (tidak ada em-dash)
```
- [ ] Topik terdaftar di `src/topics/index.ts`; video di `remotion/registry.ts`; widget di `components/widgets/index.ts`.
- [ ] Setiap pelajaran: chart >=1, latihan >=2, quiz tepat 5, takeaways ada.
- [ ] Tidak ada level tanpa video & simulator.
- [ ] Semua angka di `calcExercise`/`case` sudah diverifikasi.
- [ ] Istilah teknis baru sudah masuk `glossary.ts`.
- [ ] (Disarankan) cek visual satu pelajaran via dev server: `npm run dev:web`, buka `/<topic>/pelajaran/<id>`, pastikan grafik tampil dan tooltip glosarium muncul.

---

## 10. Jebakan yang sudah pernah terjadi (hindari)

- **Bar chart tinggi 0**: kolom flex butuh `h-full` agar `height:%` bar bekerja (sudah diperbaiki di `Charts.tsx`; jangan regres).
- `React.FC` butuh React dalam scope di file registry; di file video gunakan `React.FC` langsung (sudah berfungsi) atau `import type { FC }`.
- `callout.tone:"warning"` TIDAK valid; pakai `"warn"`.
- Field ekstra pada block (mis. `title` pada `stats`, `unit` pada `calcExercise`) menyebabkan error `tsc`.
- `matchExercise` dengan banyak `left` ke `right` sama bisa memicu duplikasi; buat pasangan unik.
- Kelas Tailwind typo (mis. `text-ion-faint`) lolos build tetapi salah render; tulis dengan benar.
