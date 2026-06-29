import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "pengukuran-berulang-ralat",
    levelId: "pengolahan-data",
    order: 1,
    title: "Pengukuran Berulang dan Ralat",
    summary:
      "Kenapa ilmuwan tidak puas mengukur sekali saja? Mengulang pengukuran lalu merata-ratakan adalah cara cerdas menekan kesalahan acak.",
    durationMin: 13,
    tags: ["fisika", "pengukuran berulang", "rata-rata", "ralat"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu menimbang benda yang sama lima kali dan mendapat angka yang sedikit berbeda tiap kali: 50,2 g, 50,4 g, 50,1 g, 50,3 g, 50,0 g. Bukan timbanganmu rusak, ini wajar. Setiap pengukuran punya <strong>kesalahan acak</strong> kecil. Sebelum menghafal rumus rata-rata, mari pahami mengapa mengulang pengukuran membuat hasil lebih tepercaya.",
      },
      {
        type: "video",
        comp: "MatematikaVsBerhitung",
        title: "Video: Kekuatan Mengulang dan Merata-ratakan",
        caption: "Kesalahan acak yang naik-turun saling meredam saat dirata-ratakan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Lihat lima angka tadi. Sebagian lebih tinggi, sebagian lebih rendah dari nilai sebenarnya. Saat kamu menjumlahkan lalu membaginya, simpangan ke atas dan ke bawah <strong>saling meredam</strong>. Coba rasakan: makin banyak pengulangan, makin kecil pengaruh satu hasil yang nyeleneh. Itulah kenapa satu kali ukur jarang cukup di laboratorium serius.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Rata-rata dan rentang",
        html: "Nilai terbaik dari pengukuran berulang adalah <strong>rata-rata (mean)</strong>: jumlah semua hasil dibagi banyaknya. Sebaran datanya bisa diperkirakan dari <strong>rentang</strong> (nilai terbesar dikurangi terkecil); makin sempit rentangnya, makin presisi pengukuran kita.",
      },
      {
        type: "widget",
        widget: "AngkaPenting",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Lima Kali Penimbangan Benda yang Sama",
        unit: "gram",
        source: "data percobaan sederhana",
        note: "Hasil naik-turun di sekitar 50,2 g. Rata-ratanya menjadi taksiran terbaik nilai sebenarnya.",
        data: [
          { label: "Ukur 1", value: 50.2, color: "#fbbf24" },
          { label: "Ukur 2", value: 50.4, color: "#fb923c" },
          { label: "Ukur 3", value: 50.1, color: "#f59e0b" },
          { label: "Ukur 4", value: 50.3, color: "#f97316" },
          { label: "Ukur 5", value: 50.0, color: "#fbbf24" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Hitung rata-rata dari lima penimbangan: 50,2 g, 50,4 g, 50,1 g, 50,3 g, dan 50,0 g.",
        answer: 50.2,
        tolerance: 0.01,
        suffix: " g",
        solution:
          "Jumlahnya 50,2 + 50,4 + 50,1 + 50,3 + 50,0 = 251,0 g. Dibagi 5 = <strong>50,2 g</strong>. Rata-rata inilah taksiran terbaik nilai massa benda.",
        hint: "Jumlahkan kelima angka, lalu bagi dengan 5.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari data yang sama (terbesar 50,4 g, terkecil 50,0 g), perkirakan ketidakpastian sebagai setengah rentang. Berapa nilainya dalam gram?",
        answer: 0.2,
        tolerance: 0.01,
        suffix: " g",
        solution:
          "Rentang = 50,4 - 50,0 = 0,4 g. Setengah rentang = 0,4 / 2 = <strong>0,2 g</strong>. Maka hasil dilaporkan (50,2 ± 0,2) g.",
        hint: "Kurangkan nilai terkecil dari terbesar, lalu bagi dua.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan tiap jenis kesalahan: bisa diperkecil dengan mengulang dan merata-ratakan, atau tidak?",
        buckets: ["Berkurang dengan rata-rata (acak)", "Tidak hilang dengan rata-rata (sistematis)"],
        items: [
          { text: "Tangan sedikit gemetar saat membaca skala", bucket: "Berkurang dengan rata-rata (acak)" },
          { text: "Timbangan belum di-nol-kan, selalu lebih 0,3 g", bucket: "Tidak hilang dengan rata-rata (sistematis)" },
          { text: "Pembacaan mata yang kadang tinggi kadang rendah", bucket: "Berkurang dengan rata-rata (acak)" },
          { text: "Penggaris yang ujungnya sudah aus terpotong", bucket: "Tidak hilang dengan rata-rata (sistematis)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengukur Kecepatan Cahaya Berulang Kali",
        html: "Fisikawan Albert Michelson mengukur kecepatan cahaya bukan sekali, melainkan ribuan kali sepanjang kariernya, lalu merata-ratakan hasilnya. Dengan begitu, kesalahan acak dari tiap pengukuran saling meredam, dan ia memperoleh angka yang sangat dekat dengan nilai yang kita akui sekarang. Pelajarannya: <strong>pengulangan</strong> bukan tanda ragu, melainkan kunci ketelitian. Satu pengukuran adalah tebakan; ribuan pengukuran yang dirata-ratakan mendekati kebenaran.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. <strong>Nilai terbaik = rata-rata = (jumlah semua hasil) / (banyak pengukuran).</strong> Ketidakpastiannya bisa ditaksir dari <strong>setengah rentang</strong> data, dan hasil ditulis (rata-rata &plusmn; ketidakpastian). Mengulang pengukuran meredam kesalahan acak, tetapi kesalahan sistematis (alat yang miring atau belum dinolkan) tidak hilang dengan dirata-ratakan.",
      },
      {
        type: "takeaways",
        items: [
          "Nilai terbaik dari pengukuran berulang adalah rata-ratanya.",
          "Ketidakpastian bisa ditaksir dari setengah rentang data.",
          "Mengulang dan merata-ratakan meredam kesalahan acak.",
          "Kesalahan sistematis tidak hilang dengan dirata-ratakan; alat harus dikoreksi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Nilai terbaik dari beberapa kali pengukuran adalah...",
            options: ["nilai terbesar", "nilai terkecil", "rata-ratanya", "yang pertama diukur"],
            answer: 2,
            explain: "Rata-rata menjadi taksiran terbaik karena kesalahan acak saling meredam.",
          },
          {
            q: "Rata-rata dari 4,0; 4,2; dan 4,1 cm adalah...",
            options: ["4,0 cm", "4,1 cm", "4,2 cm", "12,3 cm"],
            answer: 1,
            explain: "(4,0 + 4,2 + 4,1) / 3 = 12,3 / 3 = 4,1 cm.",
          },
          {
            q: "Mengulang pengukuran terutama mengurangi...",
            options: [
              "kesalahan acak",
              "kesalahan sistematis",
              "jumlah angka penting",
              "satuan",
            ],
            answer: 0,
            explain: "Kesalahan acak yang naik-turun saling meredam saat dirata-ratakan.",
          },
          {
            q: "Timbangan yang selalu membaca 0,3 g lebih berat adalah contoh kesalahan...",
            options: [
              "acak yang hilang dengan rata-rata",
              "sistematis yang tidak hilang dengan rata-rata",
              "angka penting",
              "yang tidak ada",
            ],
            answer: 1,
            explain: "Kesalahan sistematis tetap ada walau diulang; alat harus dikoreksi atau dinolkan.",
          },
          {
            q: "Data berkisar 50,0 sampai 50,4 g. Setengah rentangnya adalah...",
            options: ["0,4 g", "0,2 g", "0,1 g", "50,2 g"],
            answer: 1,
            explain: "Rentang 0,4 g dibagi dua = 0,2 g, dipakai sebagai taksiran ketidakpastian.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "membaca-alat-ukur",
    levelId: "pengolahan-data",
    order: 2,
    title: "Membaca Alat Ukur Berskala Ganda",
    summary:
      "Jangka sorong dan mikrometer punya dua skala sekaligus. Setelah paham caranya, membaca 0,01 mm jadi pekerjaan yang menyenangkan.",
    durationMin: 13,
    tags: ["fisika", "jangka sorong", "mikrometer", "nonius"],
    blocks: [
      {
        type: "paragraph",
        html: "Penggaris hanya punya satu deret garis, tetapi jangka sorong dan mikrometer punya <strong>dua skala</strong> yang bekerja sama: skala utama untuk angka kasar, dan skala kedua (nonius atau skala putar) untuk angka halusnya. Sebelum menghafal cara membacanya, mari pahami ide cerdas di baliknya.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Dua Skala yang Bekerja Sama",
        caption: "Skala utama menangkap angka kasar, skala nonius menangkap sisa halusnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan kamu membaca jam: jarum jam memberi angka kasar, jarum menit memberi rinciannya. Jangka sorong bekerja serupa. <strong>Skala utama</strong> memberi panjang sampai milimeter, lalu <strong>skala nonius</strong> menunjukkan garis mana yang paling lurus berimpit, dan itu menambahkan persepuluhan milimeter. Coba rasakan: dengan menggabungkan dua skala, kita membaca lebih teliti daripada satu skala saja.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Cara membaca: tambahkan dua skala",
        html: "Hasil = bacaan skala utama + (garis nonius yang berimpit &times; ketelitian noniusnya). Untuk jangka sorong umum, tiap garis nonius bernilai 0,1 mm. Untuk mikrometer sekrup, skala putarnya bernilai 0,01 mm per garis.",
      },
      {
        type: "widget",
        widget: "AngkaPenting",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada jangka sorong, skala utama menunjuk 12 mm dan garis nonius ke-4 berimpit (tiap garis = 0,1 mm). Berapa panjang bendanya dalam mm?",
        answer: 12.4,
        tolerance: 0.01,
        suffix: " mm",
        solution:
          "Hasil = skala utama + (nonius × 0,1) = 12 + (4 × 0,1) = 12 + 0,4 = <strong>12,4 mm</strong>. Skala utama memberi angka kasar, nonius melengkapi persepuluhan milimeternya.",
        hint: "Tambahkan 12 mm dengan 4 × 0,1 mm.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada mikrometer sekrup, skala utama 5,5 mm dan skala putar menunjuk garis ke-28 (tiap garis = 0,01 mm). Berapa tebal bendanya dalam mm?",
        answer: 5.78,
        tolerance: 0.01,
        suffix: " mm",
        solution:
          "Hasil = 5,5 + (28 × 0,01) = 5,5 + 0,28 = <strong>5,78 mm</strong>. Skala putar mikrometer menambahkan perseratusan milimeter, jauh lebih teliti daripada jangka sorong.",
        hint: "Tambahkan 5,5 mm dengan 28 × 0,01 mm.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap alat dengan nilai satu garis skala halusnya.",
        pairs: [
          { left: "Jangka sorong", right: "0,1 mm per garis nonius" },
          { left: "Mikrometer sekrup", right: "0,01 mm per garis putar" },
          { left: "Penggaris", right: "1 mm per garis" },
          { left: "Stopwatch digital", right: "0,01 s per langkah" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap kebiasaan saat membaca alat ukur: benar atau keliru?",
        buckets: ["Kebiasaan benar", "Kebiasaan keliru"],
        items: [
          { text: "Membaca skala lurus dari depan (tegak lurus)", bucket: "Kebiasaan benar" },
          { text: "Mengintip skala dari samping miring", bucket: "Kebiasaan keliru" },
          { text: "Memastikan alat menunjuk nol saat rahang tertutup", bucket: "Kebiasaan benar" },
          { text: "Mengabaikan skala nonius dan menebak saja", bucket: "Kebiasaan keliru" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kesalahan Paralaks di Ruang Praktikum",
        html: "Banyak siswa mencatat hasil jangka sorong yang berbeda untuk benda yang sama. Ternyata sebagian membaca skala sambil memiringkan kepala, sehingga garis tampak bergeser. Gejala ini disebut <strong>kesalahan paralaks</strong>: posisi mata yang miring membuat garis skala seolah sejajar dengan angka yang salah. Pelajarannya: ketelitian alat tidak ada gunanya kalau cara membacanya ceroboh. Mata harus tegak lurus tepat di depan skala.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. <strong>Hasil baca = bacaan skala utama + (garis skala halus yang berimpit &times; ketelitiannya).</strong> Jangka sorong menambahkan kelipatan 0,1 mm, mikrometer sekrup kelipatan 0,01 mm. Selalu baca tegak lurus untuk menghindari kesalahan paralaks, dan periksa titik nol alat sebelum dipakai.",
      },
      {
        type: "takeaways",
        items: [
          "Jangka sorong dan mikrometer memakai skala utama plus skala halus.",
          "Hasil = skala utama + (garis skala halus × ketelitiannya).",
          "Jangka sorong teliti 0,1 mm, mikrometer sekrup 0,01 mm.",
          "Baca tegak lurus untuk menghindari kesalahan paralaks, dan cek titik nol alat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Skala utama 8 mm dan nonius ke-3 berimpit (0,1 mm tiap garis). Hasilnya...",
            options: ["8,03 mm", "8,3 mm", "11 mm", "8,0 mm"],
            answer: 1,
            explain: "8 + (3 × 0,1) = 8,3 mm.",
          },
          {
            q: "Satu garis skala putar mikrometer sekrup bernilai...",
            options: ["1 mm", "0,1 mm", "0,01 mm", "0,5 mm"],
            answer: 2,
            explain: "Mikrometer sekrup teliti sampai 0,01 mm per garis putar.",
          },
          {
            q: "Membaca skala sambil memiringkan kepala menimbulkan...",
            options: [
              "kesalahan paralaks",
              "kesalahan kalibrasi",
              "ketelitian lebih tinggi",
              "tidak ada masalah",
            ],
            answer: 0,
            explain: "Posisi mata miring membuat garis tampak bergeser, disebut kesalahan paralaks.",
          },
          {
            q: "Mengapa jangka sorong lebih teliti daripada penggaris?",
            options: [
              "Karena lebih panjang",
              "Karena skala noniusnya menambahkan persepuluhan milimeter",
              "Karena terbuat dari logam",
              "Karena lebih mahal",
            ],
            answer: 1,
            explain: "Skala nonius memungkinkan pembacaan sampai 0,1 mm, sepuluh kali lebih halus.",
          },
          {
            q: "Sebelum memakai jangka sorong, sebaiknya kita...",
            options: [
              "memastikan ia menunjuk nol saat rahang tertutup",
              "memanaskannya dulu",
              "membengkokkan rahangnya",
              "mengabaikan titik nol",
            ],
            answer: 0,
            explain: "Memeriksa titik nol mencegah kesalahan sistematis pada setiap pembacaan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pengukuran-ketelitian-dan-estimasi",
    levelId: "pengolahan-data",
    order: 3,
    title: "Estimasi dan Ketidakpastian dalam Praktik",
    summary:
      "Tidak ada pengukuran yang sempurna. Fisika mengajak kita jujur soal ketidakpastian, sekaligus berani menebak orde besaran dengan akal sehat.",
    durationMin: 13,
    tags: ["fisika", "pengukuran", "ketidakpastian", "estimasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Dua orang mengukur meja yang sama dengan penggaris, satu membaca 80,2 cm dan satu lagi 80,3 cm. Siapa yang benar? Keduanya. Setiap pengukuran selalu mengandung <strong>ketidakpastian</strong>. Sebelum menghafal cara menulisnya, mari pahami dulu mengapa hasil ukur tidak pernah berupa satu angka mutlak, lalu kita pakai akal sehat untuk menebak besaran tanpa alat.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Mengukur Berarti Membandingkan",
        caption: "Setiap alat ukur punya batas ketelitian, dan itu menentukan kepercayaan kita.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba bedakan dua kata yang sering tertukar. <strong>Akurasi</strong> adalah seberapa dekat hasil dengan nilai sebenarnya, sedangkan <strong>presisi</strong> adalah seberapa konsisten hasil saat diulang. Sebuah timbangan yang selalu menunjukkan 1 kg lebih berat itu presisi tinggi tapi akurasi rendah. Rasakan: keduanya dua hal berbeda, dan keduanya penting.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Setiap alat punya batas",
        html: "Penggaris biasa teliti sampai sekitar 1 mm, jangka sorong sampai 0,1 mm, dan mikrometer sekrup sampai 0,01 mm. Makin kecil skala terkecilnya, makin teliti alatnya, dan makin kecil ketidakpastian hasil ukurnya.",
      },
      {
        type: "widget",
        widget: "AngkaPenting",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap alat ukur dengan ketelitian (skala terkecil) yang umum.",
        pairs: [
          { left: "Penggaris", right: "1 mm" },
          { left: "Jangka sorong", right: "0,1 mm" },
          { left: "Mikrometer sekrup", right: "0,01 mm" },
          { left: "Stopwatch digital", right: "0,01 s" },
        ],
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan tiap pernyataan: apakah ia berbicara tentang akurasi (dekat nilai benar) atau presisi (konsisten saat diulang)?",
        buckets: ["Akurasi", "Presisi"],
        items: [
          { text: "Rata-rata hasil sangat dekat dengan nilai sebenarnya", bucket: "Akurasi" },
          { text: "Lima kali pengukuran menghasilkan angka yang nyaris sama", bucket: "Presisi" },
          { text: "Timbangan selalu menunjukkan 0,5 kg lebih berat dari seharusnya", bucket: "Akurasi" },
          { text: "Tembakan berkumpul rapat meski jauh dari pusat sasaran", bucket: "Presisi" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah panjang dilaporkan sebagai (5,2 ± 0,1) cm. Berapa persen ketidakpastian relatifnya? Bulatkan ke satu angka di belakang koma.",
        answer: 1.9,
        tolerance: 0.4,
        suffix: " %",
        solution:
          "Ketidakpastian relatif = (Δx / x) × 100% = (0,1 / 5,2) × 100% ≈ <strong>1,9%</strong>. Makin kecil persentase ini, makin teliti pengukurannya dibanding besaran yang diukur.",
        hint: "Bagi ketidakpastian (0,1) dengan nilai ukur (5,2), lalu kalikan 100%.",
      },
      {
        type: "case",
        title: "Studi Kasus: Enrico Fermi dan Secarik Kertas",
        html: "Saat uji bom atom Trinity 1945, fisikawan Enrico Fermi menjatuhkan sobekan-sobekan kertas tepat ketika gelombang kejut lewat, lalu mengukur seberapa jauh kertas terdorong. Dari satu angka kasar itu ia langsung <strong>mengestimasi orde besaran</strong> energi ledakan, dan hasilnya cukup dekat dengan pengukuran resmi yang butuh berhari-hari. Inilah seni estimasi: dengan asumsi sederhana dan logika, kita bisa menebak besaran sampai orde 10 pangkat berapa, tanpa alat canggih.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. Hasil ukur ditulis sebagai <strong>(x &plusmn; &Delta;x)</strong>, dengan &Delta;x menyatakan ketidakpastian, dan <strong>ketidakpastian relatif = (&Delta;x / x) &times; 100%</strong>. Untuk soal kasar, <strong>estimasi orde besaran</strong> (pangkat 10 terdekat) sudah sangat berguna, sebab sering kita hanya butuh tahu 'kira-kira sebesar apa', bukan angka pasti.",
      },
      {
        type: "takeaways",
        items: [
          "Setiap pengukuran punya ketidakpastian; hasil ditulis (x ± Δx).",
          "Akurasi itu dekat nilai benar; presisi itu konsisten saat diulang.",
          "Ketidakpastian relatif = (Δx / x) × 100% menilai mutu pengukuran.",
          "Estimasi orde besaran menebak pangkat 10 dengan asumsi sederhana dan akal sehat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Alat manakah yang paling teliti untuk mengukur panjang?",
            options: ["Penggaris", "Jangka sorong", "Mikrometer sekrup", "Pita meteran"],
            answer: 2,
            explain: "Mikrometer sekrup punya skala terkecil 0,01 mm, paling teliti di antaranya.",
          },
          {
            q: "Sebuah timbangan selalu membaca 0,3 kg lebih berat. Ini contoh...",
            options: [
              "presisi rendah",
              "akurasi rendah tapi bisa presisi tinggi",
              "akurasi tinggi",
              "tidak ada ketidakpastian",
            ],
            answer: 1,
            explain: "Selisih tetap dari nilai benar menandakan akurasi rendah, meski hasilnya bisa konsisten (presisi).",
          },
          {
            q: "Panjang (4,0 ± 0,2) cm punya ketidakpastian relatif sekitar...",
            options: ["0,2%", "2%", "5%", "20%"],
            answer: 2,
            explain: "(0,2 / 4,0) × 100% = 5%.",
          },
          {
            q: "Estimasi orde besaran berguna terutama untuk...",
            options: [
              "mendapat angka sangat presisi",
              "menebak 'kira-kira sebesar apa' dengan asumsi sederhana",
              "menggantikan semua pengukuran",
              "menghindari satuan",
            ],
            answer: 1,
            explain: "Estimasi orde besaran menebak pangkat 10 terdekat, cukup untuk gambaran cepat.",
          },
          {
            q: "Cara baku menuliskan hasil pengukuran beserta ketidakpastiannya adalah...",
            options: ["x × Δx", "x / Δx", "(x ± Δx)", "x Δx"],
            answer: 2,
            explain: "Hasil ukur ditulis (x ± Δx), dengan Δx sebagai ketidakpastiannya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "estimasi-orde-besaran",
    levelId: "pengolahan-data",
    order: 4,
    title: "Estimasi Orde Besaran",
    summary:
      "Berapa banyak tetes air di satu ember? Tanpa menghitung satu per satu, kita bisa menebak jawabannya sampai pangkat 10 yang benar.",
    durationMin: 12,
    tags: ["fisika", "estimasi", "orde besaran", "fermi"],
    blocks: [
      {
        type: "paragraph",
        html: "Kalau ada yang bertanya 'berapa banyak helai rambut di kepalamu?', kamu tidak akan mencabut dan menghitungnya. Tetapi kamu bisa <strong>menebak ordenya</strong>: ratusan ribu, bukan sepuluh, bukan miliaran. Kemampuan menebak 'kira-kira sebesar apa' ini sangat dihargai fisikawan. Sebelum melihat triknya, mari rasakan kekuatan berpikir dalam pangkat 10.",
      },
      {
        type: "video",
        comp: "MatematikaVsBerhitung",
        title: "Video: Berpikir dalam Pangkat 10",
        caption: "Estimasi yang baik bukan soal angka pasti, tetapi orde yang benar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Orde besaran adalah pangkat 10 yang paling dekat dengan sebuah angka. Tinggi manusia ~10&sup0; m (satuan meter), tinggi gedung ~10&sup1; m, panjang kota ~10&#8308; m. Coba rasakan: yang penting bukan 'tepat 1,7 m', melainkan 'orde meter'. Dengan memecah masalah besar jadi tebakan-tebakan kasar lalu mengalikannya, kita sampai pada orde yang mengejutkan tepat.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Resep estimasi Fermi",
        html: "Pecah pertanyaan besar menjadi langkah-langkah yang bisa ditebak. Untuk tiap langkah, ambil angka bulat yang masuk akal (sering dalam pangkat 10). Kalikan semuanya. Hasilnya tak akan presisi, tetapi ordenya biasanya benar, dan itu sudah cukup untuk banyak keputusan.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "calcExercise",
        prompt:
          "Estimasi jumlah detak jantung manusia dalam sehari. Ambil 70 detak per menit, 60 menit per jam, 24 jam. Berapa kira-kira hasilnya?",
        answer: 100800,
        tolerance: 5000,
        suffix: " detak",
        solution:
          "70 × 60 × 24 = <strong>100.800 detak</strong>, yaitu sekitar 10⁵ (seratus ribu) per hari. Yang penting ordenya: jantung kita berdetak puluhan ribu sampai ratusan ribu kali sehari, bukan ratusan atau miliaran.",
        hint: "Kalikan detak per menit dengan menit per jam dan jam per hari.",
      },
      {
        type: "calcExercise",
        prompt:
          "Estimasi banyak tetes air dalam 1 liter, jika satu tetes kira-kira 0,05 mL. (1 liter = 1000 mL)",
        answer: 20000,
        tolerance: 1000,
        suffix: " tetes",
        solution:
          "Jumlah tetes = 1000 mL / 0,05 mL = <strong>20.000 tetes</strong>, yaitu orde 10⁴. Kita tidak menghitung satu per satu, cukup membagi volume total dengan volume satu tetes.",
        hint: "Bagi volume total (1000 mL) dengan volume satu tetes (0,05 mL).",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap besaran ke orde panjang yang paling masuk akal.",
        buckets: ["Orde 10⁰ m (meter)", "Orde 10³ m (kilometer)", "Orde 10⁻³ m (milimeter)"],
        items: [
          { text: "Tinggi seorang manusia dewasa", bucket: "Orde 10⁰ m (meter)" },
          { text: "Panjang lapangan sepak bola besar", bucket: "Orde 10³ m (kilometer)" },
          { text: "Tebal kartu tipis", bucket: "Orde 10⁻³ m (milimeter)" },
          { text: "Jarak antarkota tetangga", bucket: "Orde 10³ m (kilometer)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Berapa Penyetem Piano di Sebuah Kota?",
        html: "Enrico Fermi gemar melempar pertanyaan seperti 'berapa banyak penyetem piano di Chicago?' kepada mahasiswanya. Mereka tidak punya data apa pun, tetapi dengan <strong>estimasi bertahap</strong> (jumlah penduduk, berapa rumah punya piano, seberapa sering disetem, berapa piano bisa disetem satu orang per tahun) mereka sampai pada angka yang ordenya benar. Pelajarannya: keputusan dunia nyata sering tidak butuh angka pasti, cukup tebakan beralasan yang ordenya tepat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. <strong>Orde besaran adalah pangkat 10 terdekat dari sebuah nilai.</strong> Estimasi Fermi memecah masalah besar menjadi langkah-langkah yang bisa ditebak, mengambil angka bulat masuk akal, lalu mengalikannya. Hasilnya bukan jawaban presisi, melainkan <strong>orde yang benar</strong>, dan itu sering sudah cukup untuk memutuskan atau memeriksa kewajaran sebuah angka.",
      },
      {
        type: "takeaways",
        items: [
          "Orde besaran adalah pangkat 10 terdekat dari sebuah nilai.",
          "Estimasi Fermi memecah masalah besar menjadi langkah yang bisa ditebak.",
          "Ambil angka bulat masuk akal tiap langkah, lalu kalikan semuanya.",
          "Tujuannya orde yang benar, bukan angka presisi, dan itu sering sudah cukup.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Orde besaran sebuah nilai adalah...",
            options: [
              "angka pastinya",
              "pangkat 10 yang paling dekat dengannya",
              "jumlah angka pentingnya",
              "satuannya",
            ],
            answer: 1,
            explain: "Orde besaran menyatakan nilai sebagai pangkat 10 terdekat.",
          },
          {
            q: "Tinggi manusia dewasa paling dekat dengan orde...",
            options: ["10⁻² m", "10⁰ m", "10² m", "10³ m"],
            answer: 1,
            explain: "Sekitar 1,7 m berada pada orde 10⁰ m (satuan meter).",
          },
          {
            q: "Estimasi Fermi mengandalkan...",
            options: [
              "data yang sangat presisi",
              "pemecahan masalah jadi langkah-langkah tebakan masuk akal",
              "menghitung satu per satu",
              "menghindari perkalian",
            ],
            answer: 1,
            explain: "Kita pecah masalah besar menjadi langkah kecil yang bisa ditebak, lalu dikalikan.",
          },
          {
            q: "Sekitar 100.000 detak jantung per hari setara dengan orde...",
            options: ["10³", "10⁵", "10⁷", "10⁹"],
            answer: 1,
            explain: "100.000 = 10⁵, jadi ordenya 10⁵ detak per hari.",
          },
          {
            q: "Mengapa estimasi orde besaran berguna?",
            options: [
              "Memberi angka paling presisi",
              "Cepat memeriksa kewajaran sebuah nilai tanpa data lengkap",
              "Menggantikan semua alat ukur",
              "Menghapus ketidakpastian",
            ],
            answer: 1,
            explain: "Estimasi cepat menilai apakah sebuah angka masuk akal, tanpa perlu data persis.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "menyajikan-data",
    levelId: "pengolahan-data",
    order: 5,
    title: "Menyajikan Data Percobaan",
    summary:
      "Deretan angka mentah sulit dipahami, tetapi sebuah grafik bisa langsung menunjukkan polanya. Kita pelajari cara data 'bercerita'.",
    durationMin: 13,
    tags: ["fisika", "grafik", "data", "gradien"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan kamu mencatat jarak tempuh mobil tiap sekon: 0, 12, 24, 36, 48 meter. Dari deretan angka itu, polanya sudah ada tetapi tersembunyi. Begitu kamu menggambarnya menjadi <strong>grafik</strong>, garis lurus langsung muncul dan berkata 'kecepatannya tetap'. Sebelum menghafal cara membaca grafik, mari rasakan dulu mengapa data perlu disajikan.",
      },
      {
        type: "video",
        comp: "MatematikaVsBerhitung",
        title: "Video: Ketika Angka Berubah Jadi Garis",
        caption: "Grafik mengubah deretan angka menjadi pola yang langsung terbaca.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Lihat data jarak tadi: tiap sekon bertambah 12 meter, selalu sama. Kalau digambar, titik-titiknya membentuk <strong>garis lurus</strong>, dan kemiringannya (gradien) bernilai 12 meter per sekon, yaitu kecepatannya. Coba rasakan: bentuk grafik menyimpan makna fisis. Garis lurus berarti laju tetap, garis melengkung naik berarti dipercepat.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Gradien grafik bermakna fisis",
        html: "Kemiringan (gradien) grafik = perubahan sumbu tegak dibagi perubahan sumbu datar. Pada grafik jarak terhadap waktu, gradien itu adalah <strong>kecepatan</strong>. Letakkan besaran bebas (yang kita atur) di sumbu datar, dan besaran terikat (yang kita ukur) di sumbu tegak.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Jarak Tempuh Mobil terhadap Waktu",
        unit: "meter",
        source: "data percobaan sederhana",
        note: "Titik-titik membentuk garis lurus, menandakan kecepatan tetap. Gradiennya 12 m tiap sekon.",
        data: [
          { label: "0 s", value: 0, color: "#f59e0b" },
          { label: "1 s", value: 12, color: "#f59e0b" },
          { label: "2 s", value: 24, color: "#f59e0b" },
          { label: "3 s", value: 36, color: "#f59e0b" },
          { label: "4 s", value: 48, color: "#f59e0b" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Dari grafik jarak terhadap waktu, mobil menempuh 48 m dalam 4 s dan 0 m pada 0 s. Berapa gradien grafiknya (yaitu kecepatannya)?",
        answer: 12,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Gradien = perubahan jarak / perubahan waktu = (48 - 0) / (4 - 0) = 48 / 4 = <strong>12 m/s</strong>. Pada grafik jarak terhadap waktu, gradien garis adalah kecepatan benda.",
        hint: "Bagi perubahan jarak dengan perubahan waktu.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap bentuk grafik jarak terhadap waktu dengan arti geraknya.",
        buckets: ["Kecepatan tetap", "Gerak dipercepat", "Diam"],
        items: [
          { text: "Garis lurus miring ke atas", bucket: "Kecepatan tetap" },
          { text: "Garis mendatar (horizontal)", bucket: "Diam" },
          { text: "Kurva melengkung makin curam", bucket: "Gerak dipercepat" },
          { text: "Garis lurus dengan kemiringan tetap", bucket: "Kecepatan tetap" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap unsur penyajian data dengan fungsinya.",
        pairs: [
          { left: "Judul grafik", right: "Menjelaskan apa yang digambarkan" },
          { left: "Label sumbu + satuan", right: "Menunjukkan besaran dan satuannya" },
          { left: "Gradien garis", right: "Menyatakan hubungan antar besaran" },
          { left: "Tabel data", right: "Menyimpan angka mentah secara rapi" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Grafik Hubble dan Alam Semesta yang Memuai",
        html: "Pada 1929, Edwin Hubble memetakan jarak galaksi terhadap kecepatan menjauhnya dalam sebuah <strong>grafik</strong>. Titik-titiknya membentuk garis yang naik, dan kemiringannya mengungkap satu fakta menggemparkan: makin jauh sebuah galaksi, makin cepat ia menjauh, artinya alam semesta sedang memuai. Tanpa grafik itu, pola tersebut hanya akan jadi tumpukan angka tak bermakna. Pelajarannya: cara menyajikan data bisa mengubah daftar angka menjadi penemuan besar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. <strong>Sajikan data dalam tabel rapi, lalu grafik dengan sumbu berlabel dan bersatuan.</strong> Letakkan besaran bebas di sumbu datar, besaran terikat di sumbu tegak. <strong>Gradien = perubahan sumbu tegak / perubahan sumbu datar</strong>, dan kemiringan ini sering bermakna fisis (misalnya kecepatan pada grafik jarak terhadap waktu). Bentuk grafik menceritakan hubungan antar besaran.",
      },
      {
        type: "takeaways",
        items: [
          "Tabel menyimpan data mentah; grafik mengungkap polanya.",
          "Besaran bebas di sumbu datar, besaran terikat di sumbu tegak, semua berlabel dan bersatuan.",
          "Gradien = perubahan sumbu tegak dibagi perubahan sumbu datar.",
          "Bentuk grafik bermakna fisis: garis lurus berarti laju tetap, kurva curam berarti dipercepat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada grafik jarak terhadap waktu, gradien garis menyatakan...",
            options: ["percepatan", "kecepatan", "massa", "waktu"],
            answer: 1,
            explain: "Gradien jarak terhadap waktu = kecepatan benda.",
          },
          {
            q: "Garis lurus miring tetap pada grafik jarak terhadap waktu menandakan...",
            options: ["benda diam", "kecepatan tetap", "benda dipercepat", "benda berhenti"],
            answer: 1,
            explain: "Kemiringan yang tetap berarti jarak bertambah seragam, jadi kecepatan tetap.",
          },
          {
            q: "Mobil menempuh 60 m dalam 5 s (mulai dari 0). Gradien grafiknya...",
            options: ["5 m/s", "12 m/s", "60 m/s", "300 m/s"],
            answer: 1,
            explain: "60 / 5 = 12 m/s, itulah kecepatan sekaligus gradien grafiknya.",
          },
          {
            q: "Besaran yang kita atur sendiri sebaiknya diletakkan di...",
            options: ["sumbu tegak", "sumbu datar", "judul", "luar grafik"],
            answer: 1,
            explain: "Besaran bebas (yang kita atur) diletakkan di sumbu datar (horizontal).",
          },
          {
            q: "Mengapa grafik berguna untuk menyajikan data?",
            options: [
              "Membuat data terlihat lebih banyak",
              "Mengungkap pola dan hubungan yang tersembunyi di deretan angka",
              "Menyembunyikan ketidakpastian",
              "Menghapus kebutuhan satuan",
            ],
            answer: 1,
            explain: "Grafik mengubah angka mentah menjadi pola yang langsung terbaca, seperti grafik Hubble.",
          },
        ],
      },
    ],
  },
];
