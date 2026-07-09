import type { Lesson } from "../../../types";

export const level5: Lesson[] = [
  // ============================================================
  {
    id: "analisis-rasio",
    levelId: "advance",
    order: 1,
    title: "Analisis Laporan Keuangan (Rasio)",
    summary: "Membaca kesehatan perusahaan lewat rasio likuiditas, solvabilitas, profitabilitas, & aktivitas.",
    durationMin: 22,
    tags: ["rasio", "analisis"],
    blocks: [
      {
        type: "paragraph",
        html: "Laporan keuangan menjadi jauh lebih bermakna saat dianalisis dengan <strong>rasio</strong>. Rasio mengubah angka mentah menjadi indikator yang bisa dibandingkan antar waktu & antar perusahaan.",
      },
      { type: "heading", text: "1) Rasio Likuiditas (kemampuan bayar jangka pendek)" },
      {
        type: "table",
        headers: ["Rasio", "Rumus", "Makna"],
        rows: [
          ["Rasio Lancar", "Aset Lancar ÷ Utang Lancar", "Ideal ≥ 1,5–2"],
          ["Rasio Cepat (Quick)", "(Aset Lancar − Persediaan) ÷ Utang Lancar", "Likuiditas tanpa jual stok"],
        ],
      },
      { type: "heading", text: "2) Rasio Solvabilitas (struktur utang)" },
      {
        type: "table",
        headers: ["Rasio", "Rumus", "Makna"],
        rows: [
          ["Debt to Equity (DER)", "Total Utang ÷ Ekuitas", "Makin tinggi makin berisiko"],
          ["Debt to Asset", "Total Utang ÷ Total Aset", "% aset yang dibiayai utang"],
        ],
      },
      { type: "heading", text: "3) Rasio Profitabilitas (kemampuan menghasilkan laba)" },
      {
        type: "table",
        headers: ["Rasio", "Rumus"],
        rows: [
          ["Margin Laba Bersih", "Laba Bersih ÷ Penjualan"],
          ["ROA (Return on Assets)", "Laba Bersih ÷ Total Aset"],
          ["ROE (Return on Equity)", "Laba Bersih ÷ Ekuitas"],
        ],
      },
      { type: "heading", text: "4) Rasio Aktivitas (efisiensi)" },
      {
        type: "table",
        headers: ["Rasio", "Rumus"],
        rows: [
          ["Perputaran Persediaan", "HPP ÷ Rata-rata Persediaan"],
          ["Perputaran Piutang", "Penjualan Kredit ÷ Rata-rata Piutang"],
        ],
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan setiap rasio dengan rumus/maknanya.",
        pairs: [
          { left: "Rasio Lancar", right: "Aset Lancar ÷ Utang Lancar" },
          { left: "DER", right: "Total Utang ÷ Ekuitas" },
          { left: "ROE", right: "Laba Bersih ÷ Ekuitas" },
          { left: "Margin Laba Bersih", right: "Laba Bersih ÷ Penjualan" },
          { left: "Perputaran Persediaan", right: "HPP ÷ Rata-rata Persediaan" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Aset lancar Rp450jt, persediaan Rp150jt, utang lancar Rp200jt. Berapa rasio cepat (quick ratio)?",
        answer: 1.5,
        tolerance: 0.01,
        solution:
          "Rasio cepat = (Aset Lancar − Persediaan) ÷ Utang Lancar = (450 − 150) ÷ 200 = 300 ÷ 200 = <strong>1,5</strong>.",
        hint: "Keluarkan persediaan dari aset lancar dulu, lalu bagi dengan utang lancar.",
      },
      {
        type: "calcExercise",
        prompt: "Total utang Rp600jt dan ekuitas Rp300jt. Berapa DER (Debt to Equity Ratio)?",
        answer: 2,
        tolerance: 0.01,
        solution: "DER = Total Utang ÷ Ekuitas = 600 ÷ 300 = <strong>2,0</strong>. Artinya tiap Rp1 modal ditopang Rp2 utang, tergolong agresif.",
        hint: "Bagi total utang dengan ekuitas.",
      },
      {
        type: "calcExercise",
        prompt: "Laba bersih Rp80jt dan ekuitas Rp400jt. Berapa ROE dalam persen?",
        answer: 20,
        tolerance: 0.1,
        suffix: "%",
        solution: "ROE = Laba Bersih ÷ Ekuitas × 100% = 80 ÷ 400 × 100% = <strong>20%</strong>.",
        hint: "Bagi laba bersih dengan ekuitas, lalu kali 100%.",
      },
      {
        type: "calcExercise",
        prompt: "Penjualan Rp500jt dan laba bersih Rp60jt. Berapa margin laba bersih dalam persen?",
        answer: 12,
        tolerance: 0.1,
        suffix: "%",
        solution: "Margin Laba Bersih = Laba Bersih ÷ Penjualan × 100% = 60 ÷ 500 × 100% = <strong>12%</strong>.",
        hint: "Laba bersih dibagi penjualan, lalu kali 100%.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap rasio ke kategori analisisnya.",
        buckets: ["Likuiditas", "Solvabilitas", "Profitabilitas", "Aktivitas"],
        items: [
          { text: "Rasio Lancar", bucket: "Likuiditas" },
          { text: "Rasio Cepat", bucket: "Likuiditas" },
          { text: "Debt to Equity (DER)", bucket: "Solvabilitas" },
          { text: "Debt to Asset", bucket: "Solvabilitas" },
          { text: "ROE", bucket: "Profitabilitas" },
          { text: "Margin Laba Bersih", bucket: "Profitabilitas" },
          { text: "Perputaran Persediaan", bucket: "Aktivitas" },
          { text: "Perputaran Piutang", bucket: "Aktivitas" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Dua toko, laba sama, kesehatan beda",
        html: "Toko A dan B sama-sama laba Rp100jt. Tapi DER toko A = 0,5 sedangkan B = 3,0. Toko B sangat bergantung utang, sekali bunga naik atau penjualan turun, ia paling rentan. Rasio mengungkap risiko yang tak terlihat dari angka laba saja.",
      },
      {
        type: "case",
        title: "Studi Kasus: CV Sumber Rezeki, likuiditas yang menyesatkan",
        html: "CV Sumber Rezeki punya rasio lancar 2,5 (aset lancar Rp500jt, utang lancar Rp200jt) sehingga manajemen merasa aman. Namun Rp350jt dari aset lancar itu adalah <strong>persediaan</strong> yang lambat laku. Saat dihitung rasio cepat = (500 − 350) ÷ 200 = <strong>0,75</strong>: jauh di bawah 1. Ternyata perusahaan kesulitan membayar utang jatuh tempo karena stok sulit dicairkan jadi kas.<br/><br/><em>Pelajaran:</em> rasio lancar yang tinggi bisa menutupi masalah likuiditas bila persediaan menumpuk. Selalu cek rasio cepat sebagai pembanding.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Cara membaca rasio",
        html: "Satu angka rasio tidak banyak berarti. Bandingkan dengan: (1) periode sebelumnya (tren), (2) pesaing/industri, dan (3) target manajemen.",
      },
      {
        type: "takeaways",
        items: [
          "4 kelompok rasio: likuiditas, solvabilitas, profitabilitas, aktivitas.",
          "Rasio lancar & cepat menilai kemampuan bayar jangka pendek.",
          "DER & ROE mengungkap risiko utang & imbal hasil pemilik.",
          "Bandingkan rasio antar waktu & antar perusahaan, bukan berdiri sendiri.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Aset lancar Rp200jt, utang lancar Rp100jt. Rasio lancar?",
            options: ["0,5", "2,0", "100", "300"],
            answer: 1,
            explain: "Rasio lancar = 200 ÷ 100 = 2,0, tergolong sehat.",
          },
          {
            q: "Rasio yang mengukur imbal hasil bagi pemilik adalah…",
            options: ["Rasio lancar", "ROE", "Perputaran persediaan", "Debt to Asset"],
            answer: 1,
            explain: "ROE = Laba Bersih ÷ Ekuitas, mengukur imbal hasil atas modal pemilik.",
          },
          {
            q: "DER yang sangat tinggi (mis. 3,0) menandakan…",
            options: [
              "Perusahaan sangat likuid",
              "Perusahaan sangat bergantung pada utang (berisiko)",
              "Laba pasti besar",
              "Persediaan berputar cepat",
            ],
            answer: 1,
            explain: "DER tinggi berarti struktur modal didominasi utang, sehingga lebih rentan saat bunga naik atau penjualan turun.",
          },
          {
            q: "Mengapa rasio cepat (quick ratio) sering lebih konservatif daripada rasio lancar?",
            options: [
              "Karena memasukkan aset tetap",
              "Karena mengeluarkan persediaan yang sulit dicairkan",
              "Karena memakai laba bersih",
              "Karena membagi dengan total aset",
            ],
            answer: 1,
            explain: "Rasio cepat mengeluarkan persediaan, sehingga lebih menggambarkan kemampuan bayar memakai aset yang benar-benar likuid.",
          },
          {
            q: "Penjualan Rp1.000jt, laba bersih Rp50jt. Margin laba bersih adalah…",
            options: ["50%", "20%", "5%", "2%"],
            answer: 2,
            explain: "Margin = 50 ÷ 1.000 × 100% = 5%.",
          },
          {
            q: "Perputaran persediaan dihitung dengan…",
            options: [
              "Penjualan ÷ Ekuitas",
              "HPP ÷ Rata-rata Persediaan",
              "Laba ÷ Total Aset",
              "Utang ÷ Aset",
            ],
            answer: 1,
            explain: "Perputaran persediaan = HPP ÷ Rata-rata Persediaan; makin tinggi makin cepat stok terjual.",
          },
          {
            q: "Satu rasio sebaiknya dibaca dengan cara…",
            options: [
              "Berdiri sendiri tanpa pembanding",
              "Dibandingkan dengan tren, industri, dan target",
              "Hanya dibandingkan dengan kas",
              "Diabaikan jika positif",
            ],
            answer: 1,
            explain: "Rasio bermakna saat dibandingkan antar waktu, antar perusahaan/industri, dan terhadap target manajemen.",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "akuntansi-manufaktur",
    levelId: "advance",
    order: 2,
    title: "Akuntansi Perusahaan Manufaktur",
    summary: "Tiga jenis persediaan dan menghitung Harga Pokok Produksi (HPP produksi).",
    durationMin: 20,
    tags: ["manufaktur", "HPProduksi"],
    blocks: [
      {
        type: "paragraph",
        html: "Perusahaan manufaktur <strong>mengubah bahan baku menjadi produk jadi</strong>. Karena itu ada tiga jenis persediaan dan perhitungan biaya produksi yang khas.",
      },
      {
        type: "list",
        items: [
          "<strong>Persediaan Bahan Baku</strong>: material mentah.",
          "<strong>Persediaan Barang Dalam Proses (WIP)</strong>: sedang diproduksi.",
          "<strong>Persediaan Barang Jadi</strong>: siap dijual.",
        ],
      },
      { type: "heading", text: "3 Unsur Biaya Produksi" },
      {
        type: "table",
        headers: ["Unsur", "Contoh"],
        rows: [
          ["Bahan Baku Langsung", "Kayu untuk meja"],
          ["Tenaga Kerja Langsung", "Upah tukang kayu"],
          ["Biaya Overhead Pabrik (BOP)", "Listrik pabrik, penyusutan mesin, bahan penolong"],
        ],
      },
      {
        type: "callout",
        tone: "key",
        title: "Harga Pokok Produksi (HPProd)",
        html: "Biaya Produksi = BB Langsung + TK Langsung + BOP<br/>HPProd = Biaya Produksi + WIP Awal − WIP Akhir<br/>HPP = HPProd + Barang Jadi Awal − Barang Jadi Akhir",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap biaya ke unsur biaya produksi yang tepat.",
        buckets: ["Bahan Baku Langsung", "Tenaga Kerja Langsung", "Overhead Pabrik"],
        items: [
          { text: "Kain untuk membuat kemeja", bucket: "Bahan Baku Langsung" },
          { text: "Tepung untuk roti", bucket: "Bahan Baku Langsung" },
          { text: "Upah penjahit yang merakit kemeja", bucket: "Tenaga Kerja Langsung" },
          { text: "Gaji operator mesin oven", bucket: "Tenaga Kerja Langsung" },
          { text: "Listrik pabrik", bucket: "Overhead Pabrik" },
          { text: "Penyusutan mesin produksi", bucket: "Overhead Pabrik" },
          { text: "Benang & kancing (bahan penolong)", bucket: "Overhead Pabrik" },
          { text: "Gaji mandor pabrik", bucket: "Overhead Pabrik" },
        ],
      },
      {
        type: "table",
        caption: "Contoh: PT Mebel Jaya",
        headers: ["Komponen", "Rp (juta)"],
        rows: [
          ["Bahan baku langsung dipakai", "120"],
          ["Tenaga kerja langsung", "80"],
          ["Overhead pabrik", "50"],
          ["Total biaya produksi", "250"],
          ["WIP awal − WIP akhir", "+10 − 15"],
          ["Harga Pokok Produksi", "245"],
        ],
      },
      {
        type: "widget",
        widget: "KalkulatorPersediaan",
      },
      {
        type: "calcExercise",
        prompt:
          "PT Roti Enak: bahan baku langsung dipakai Rp200jt, tenaga kerja langsung Rp90jt, overhead pabrik Rp60jt. WIP awal Rp20jt, WIP akhir Rp10jt. Berapa Harga Pokok Produksi (Rp juta)?",
        answer: 360,
        tolerance: 0.5,
        prefix: "Rp",
        suffix: "juta",
        solution:
          "Biaya produksi = 200 + 90 + 60 = 350.<br/>HPProd = Biaya produksi + WIP awal − WIP akhir = 350 + 20 − 10 = <strong>Rp360 juta</strong>.",
        hint: "Jumlahkan 3 unsur biaya, lalu tambah WIP awal dan kurangi WIP akhir.",
      },
      {
        type: "calcExercise",
        prompt:
          "Lanjutan PT Roti Enak: HPProd Rp360jt, persediaan barang jadi awal Rp40jt, barang jadi akhir Rp50jt. Berapa Harga Pokok Penjualan / HPP (Rp juta)?",
        answer: 350,
        tolerance: 0.5,
        prefix: "Rp",
        suffix: "juta",
        solution:
          "HPP = HPProd + Barang Jadi Awal − Barang Jadi Akhir = 360 + 40 − 50 = <strong>Rp350 juta</strong>.",
        hint: "Mulai dari HPProd, tambah barang jadi awal, kurangi barang jadi akhir.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan istilah manufaktur dengan pengertiannya.",
        pairs: [
          { left: "Bahan Baku", right: "Material mentah belum diproses" },
          { left: "WIP (Barang Dalam Proses)", right: "Produk yang masih dikerjakan" },
          { left: "Barang Jadi", right: "Produk siap dijual" },
          { left: "Overhead Pabrik", right: "Biaya produksi tak langsung (listrik, penyusutan mesin)" },
          { left: "HPProd", right: "Total biaya membuat produk yang selesai" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Salah alokasi overhead",
        html: "PT Mebel membebankan seluruh overhead ke produk termurah, membuatnya terlihat 'rugi' padahal laku keras. Setelah alokasi overhead diperbaiki (berdasarkan jam mesin), keputusan produk yang dipertahankan jadi tepat. Alokasi BOP sangat memengaruhi keputusan.",
      },
      {
        type: "case",
        title: "Studi Kasus: PT Konveksi Bahagia, lupa WIP akhir",
        html: "PT Konveksi Bahagia menghitung biaya produksi bulan ini Rp300jt dan langsung menyebutnya sebagai Harga Pokok Produksi. Padahal di akhir bulan masih ada <strong>barang dalam proses (WIP akhir) senilai Rp40jt</strong> yang belum selesai. HPProd yang benar = 300 + WIP awal Rp25jt − WIP akhir Rp40jt = <strong>Rp285jt</strong>. Karena lupa mengurangi WIP akhir, perusahaan melebih-bebankan biaya Rp15jt sehingga laba terlihat lebih kecil dari seharusnya.<br/><br/><em>Pelajaran:</em> biaya produksi periode berjalan ≠ HPProd. Selalu sesuaikan dengan perubahan saldo WIP.",
      },
      {
        type: "takeaways",
        items: [
          "Manufaktur punya 3 persediaan: bahan baku, WIP, barang jadi.",
          "Biaya produksi = Bahan baku langsung + TK langsung + Overhead pabrik.",
          "HPProd memperhitungkan perubahan WIP; HPP memperhitungkan barang jadi.",
          "Alokasi overhead yang keliru menyesatkan keputusan produk.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Upah operator mesin produksi termasuk…",
            options: ["Bahan baku langsung", "Tenaga kerja langsung", "Overhead pabrik", "Beban administrasi"],
            answer: 1,
            explain: "Upah yang langsung mengerjakan produk adalah tenaga kerja langsung.",
          },
          {
            q: "Listrik dan penyusutan mesin pabrik diklasifikasikan sebagai…",
            options: ["Bahan baku langsung", "Tenaga kerja langsung", "Overhead pabrik (BOP)", "Beban penjualan"],
            answer: 2,
            explain: "Biaya produksi tak langsung seperti listrik pabrik dan penyusutan mesin masuk overhead pabrik.",
          },
          {
            q: "Rumus biaya produksi adalah…",
            options: [
              "BB langsung + TK langsung + BOP",
              "Penjualan − HPP",
              "Aset − Utang",
              "Laba + Penyusutan",
            ],
            answer: 0,
            explain: "Biaya produksi = Bahan baku langsung + Tenaga kerja langsung + Overhead pabrik.",
          },
          {
            q: "Biaya produksi Rp250jt, WIP awal Rp30jt, WIP akhir Rp20jt. HPProd?",
            options: ["Rp240jt", "Rp260jt", "Rp250jt", "Rp300jt"],
            answer: 1,
            explain: "HPProd = 250 + 30 − 20 = Rp260jt.",
          },
          {
            q: "Persediaan yang sedang dalam pengerjaan disebut…",
            options: ["Barang jadi", "Bahan baku", "Barang dalam proses (WIP)", "Bahan penolong"],
            answer: 2,
            explain: "Barang yang masih diproses (belum selesai) adalah Work In Process / barang dalam proses.",
          },
          {
            q: "HPProd Rp245jt, barang jadi awal Rp30jt, barang jadi akhir Rp25jt. HPP?",
            options: ["Rp240jt", "Rp250jt", "Rp245jt", "Rp270jt"],
            answer: 1,
            explain: "HPP = HPProd + barang jadi awal − barang jadi akhir = 245 + 30 − 25 = Rp250jt.",
          },
          {
            q: "Gaji staf administrasi kantor pusat termasuk…",
            options: [
              "Overhead pabrik",
              "Tenaga kerja langsung",
              "Beban operasional (bukan biaya produksi)",
              "Bahan baku langsung",
            ],
            answer: 2,
            explain: "Gaji administrasi/kantor bukan biaya produksi; ia masuk beban operasional (administrasi & umum).",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "arus-kas",
    levelId: "advance",
    order: 3,
    title: "Laporan Arus Kas (Metode Langsung & Tidak Langsung)",
    summary: "Melacak kas dari aktivitas operasi, investasi, dan pendanaan.",
    durationMin: 20,
    tags: ["arus kas", "cash flow"],
    blocks: [
      {
        type: "paragraph",
        html: "Laporan arus kas menjelaskan perubahan saldo kas selama periode, dikelompokkan menjadi 3 aktivitas. Ini menjawab pertanyaan 'kalau laba, ke mana kasnya?'.",
      },
      {
        type: "video",
        comp: "ArusKas",
        title: "Video: Tiga Aktivitas Arus Kas",
        caption: "Animasi: operasi, investasi, dan pendanaan.",
      },
      {
        type: "table",
        headers: ["Aktivitas", "Isi", "Contoh"],
        rows: [
          ["Operasi", "Kegiatan utama usaha", "Kas dari pelanggan, bayar pemasok & gaji"],
          ["Investasi", "Beli/jual aset jangka panjang", "Beli mesin, jual gedung"],
          ["Pendanaan", "Modal & utang", "Setoran modal, pinjam/lunasi bank, prive"],
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap transaksi ke aktivitas arus kas yang tepat.",
        buckets: ["Operasi", "Investasi", "Pendanaan"],
        items: [
          { text: "Menerima kas dari pelanggan", bucket: "Operasi" },
          { text: "Membayar gaji karyawan", bucket: "Operasi" },
          { text: "Membayar pemasok bahan baku", bucket: "Operasi" },
          { text: "Membeli mesin produksi tunai", bucket: "Investasi" },
          { text: "Menjual gedung lama", bucket: "Investasi" },
          { text: "Membeli saham perusahaan lain (investasi jangka panjang)", bucket: "Investasi" },
          { text: "Menerima setoran modal pemilik", bucket: "Pendanaan" },
          { text: "Meminjam uang dari bank", bucket: "Pendanaan" },
          { text: "Membayar prive/dividen", bucket: "Pendanaan" },
        ],
      },
      { type: "heading", text: "Metode Langsung vs Tidak Langsung" },
      {
        type: "list",
        items: [
          "<strong>Langsung</strong>: daftar penerimaan & pengeluaran kas operasi secara rinci (kas dari pelanggan, kas ke pemasok, dst).",
          "<strong>Tidak langsung</strong>: mulai dari laba bersih, lalu disesuaikan (tambah penyusutan, koreksi perubahan piutang/utang/persediaan). Paling umum dipakai.",
        ],
      },
      {
        type: "callout",
        tone: "key",
        title: "Metode tidak langsung (operasi)",
        html: "Laba Bersih + Penyusutan + penurunan aset lancar/kenaikan utang − kenaikan aset lancar/penurunan utang = <strong>Arus Kas Operasi</strong>",
      },
      {
        type: "matchExercise",
        prompt: "Pada metode tidak langsung, cocokkan tiap perubahan dengan pengaruhnya ke arus kas operasi.",
        pairs: [
          { left: "Penyusutan (beban non-kas)", right: "Ditambahkan kembali ke laba" },
          { left: "Piutang usaha naik", right: "Dikurangkan dari laba" },
          { left: "Persediaan turun", right: "Ditambahkan ke laba" },
          { left: "Utang usaha naik", right: "Ditambahkan ke laba" },
          { left: "Utang usaha turun", right: "Dikurangkan dari laba" },
        ],
      },
      { type: "heading", text: "Contoh lengkap: laporan arus kas setahun" },
      {
        type: "paragraph",
        html: "Berikut Laporan Arus Kas lengkap <strong>PT Berkah Niaga</strong> tahun 2025 (metode tidak langsung). Perusahaan ini sama dengan contoh di Level 2: <strong>laba bersih Rp179.400.000</strong> dan penyusutan Rp50.000.000 diambil dari Laporan Laba Rugi-nya, sedangkan perubahan piutang, persediaan, dan utang berasal dari perbandingan Neraca dua tahun.",
      },
      {
        type: "table",
        caption: "Laporan Arus Kas PT Berkah Niaga, tahun berakhir 31 Desember 2025 (metode tidak langsung)",
        headers: ["Keterangan", "Rp"],
        rows: [
          ["ARUS KAS DARI AKTIVITAS OPERASI", ""],
          ["Laba bersih", "179.400.000"],
          ["Penyusutan (beban non-kas)", "50.000.000"],
          ["Kenaikan piutang usaha", "(30.000.000)"],
          ["Kenaikan persediaan", "(60.000.000)"],
          ["Penurunan perlengkapan", "8.000.000"],
          ["Kenaikan utang usaha", "40.000.000"],
          ["Kenaikan utang pajak", "10.600.000"],
          ["Kas bersih dari operasi", "198.000.000"],
          ["ARUS KAS DARI AKTIVITAS INVESTASI", ""],
          ["Pembelian peralatan", "(120.000.000)"],
          ["Kas bersih untuk investasi", "(120.000.000)"],
          ["ARUS KAS DARI AKTIVITAS PENDANAAN", ""],
          ["Penerimaan utang bank", "40.000.000"],
          ["Pembayaran dividen", "(80.000.000)"],
          ["Kas bersih untuk pendanaan", "(40.000.000)"],
          ["Kenaikan bersih kas", "38.000.000"],
          ["Kas awal (1 Januari 2025)", "182.000.000"],
          ["Kas akhir (31 Desember 2025)", "220.000.000"],
        ],
      },
      {
        type: "callout",
        tone: "key",
        html: "Ketiga aktivitas dijumlah: operasi <strong>+198jt</strong> − investasi 120jt − pendanaan 40jt = kenaikan kas <strong>Rp38.000.000</strong>. Ditambah kas awal Rp182.000.000, saldo <strong>Kas akhir Rp220.000.000</strong> ini persis sama dengan pos Kas di Neraca Level 2. Di sinilah keempat laporan mengunci satu sama lain.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari Laporan Arus Kas PT Berkah Niaga, berapa kas bersih dari aktivitas operasi (Rp juta)?",
        answer: 198,
        tolerance: 0.5,
        prefix: "Rp",
        suffix: "juta",
        solution:
          "Kas operasi = Laba bersih 179,4 + Penyusutan 50 − Kenaikan piutang 30 − Kenaikan persediaan 60 + Penurunan perlengkapan 8 + Kenaikan utang usaha 40 + Kenaikan utang pajak 10,6 = <strong>Rp198 juta</strong>.",
        hint: "Mulai dari laba bersih, tambahkan penyusutan, lalu sesuaikan tiap perubahan modal kerja.",
      },
      {
        type: "calcExercise",
        prompt:
          "Laba bersih Rp100jt, penyusutan Rp20jt, piutang usaha naik Rp15jt, utang usaha naik Rp10jt. Berapa arus kas dari operasi (metode tidak langsung, Rp juta)?",
        answer: 115,
        tolerance: 0.5,
        prefix: "Rp",
        suffix: "juta",
        solution:
          "Arus kas operasi = Laba 100 + Penyusutan 20 − Kenaikan piutang 15 + Kenaikan utang 10 = <strong>Rp115 juta</strong>.<br/>Penyusutan ditambah (non-kas); piutang naik = kas tertahan (dikurang); utang naik = pembayaran ditunda (ditambah).",
        hint: "Tambah penyusutan, kurangi kenaikan piutang, tambah kenaikan utang.",
      },
      {
        type: "calcExercise",
        prompt:
          "Laba bersih Rp80jt, penyusutan Rp25jt, persediaan turun Rp10jt, piutang turun Rp5jt, utang usaha turun Rp12jt. Berapa arus kas operasi (Rp juta)?",
        answer: 108,
        tolerance: 0.5,
        prefix: "Rp",
        suffix: "juta",
        solution:
          "Arus kas operasi = 80 + 25 + 10 (persediaan turun) + 5 (piutang turun) − 12 (utang turun) = <strong>Rp108 juta</strong>.<br/>Penurunan aset lancar menambah kas; penurunan utang mengurangi kas.",
        hint: "Penurunan aset lancar = sumber kas (+); penurunan utang = pemakaian kas (−).",
      },
      {
        type: "case",
        title: "Studi Kasus: Penyusutan menambah kas?",
        html: "Penyusutan mengurangi laba tapi BUKAN pengeluaran kas. Maka pada metode tidak langsung, penyusutan <strong>ditambahkan kembali</strong> ke laba untuk mendapatkan arus kas operasi. Inilah jembatan antara laba akrual dan kas nyata.",
      },
      {
        type: "case",
        title: "Studi Kasus: PT Maju Terus, laba besar tapi kas kering",
        html: "PT Maju Terus membukukan laba bersih Rp200jt, tetapi saldo kas justru turun. Penyebabnya terlihat dari arus kas: penjualan kredit melonjak sehingga <strong>piutang naik Rp180jt</strong> dan perusahaan menimbun stok sehingga <strong>persediaan naik Rp90jt</strong>. Arus kas operasi = 200 + penyusutan 20 − 180 − 90 = <strong>minus Rp50jt</strong>. Laba ada di atas kertas, tetapi kasnya 'tersangkut' di piutang dan gudang.<br/><br/><em>Pelajaran:</em> laba akrual bisa positif sementara kas negatif. Arus kas operasi adalah penanda kesehatan yang lebih jujur.",
      },
      {
        type: "takeaways",
        items: [
          "Arus kas dibagi: operasi, investasi, pendanaan.",
          "Metode langsung merinci penerimaan/pengeluaran; tidak langsung mulai dari laba bersih.",
          "Penyusutan (beban non-kas) ditambahkan kembali pada metode tidak langsung.",
          "Arus kas operasi positif yang konsisten = tanda usaha sehat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Membeli mesin produksi secara tunai masuk aktivitas…",
            options: ["Operasi", "Investasi", "Pendanaan", "Tidak dicatat"],
            answer: 1,
            explain: "Pembelian aset jangka panjang adalah aktivitas investasi.",
          },
          {
            q: "Pada metode tidak langsung, penyusutan diperlakukan dengan…",
            options: [
              "Dikurangkan dari laba",
              "Ditambahkan kembali ke laba",
              "Diabaikan",
              "Dicatat di aktivitas pendanaan",
            ],
            answer: 1,
            explain: "Penyusutan adalah beban non-kas, jadi ditambahkan kembali ke laba bersih.",
          },
          {
            q: "Menerima pinjaman dari bank termasuk aktivitas…",
            options: ["Operasi", "Investasi", "Pendanaan", "Tidak dicatat"],
            answer: 2,
            explain: "Penerimaan/pelunasan utang dan setoran modal adalah aktivitas pendanaan.",
          },
          {
            q: "Pada metode tidak langsung, kenaikan piutang usaha…",
            options: [
              "Ditambahkan ke laba",
              "Dikurangkan dari laba",
              "Diabaikan",
              "Masuk aktivitas investasi",
            ],
            answer: 1,
            explain: "Piutang naik berarti penjualan belum jadi kas, sehingga dikurangkan dari laba.",
          },
          {
            q: "Laba bersih Rp50jt, penyusutan Rp10jt, utang usaha naik Rp5jt. Arus kas operasi?",
            options: ["Rp45jt", "Rp55jt", "Rp65jt", "Rp35jt"],
            answer: 2,
            explain: "50 + 10 + 5 = Rp65jt. Penyusutan dan kenaikan utang sama-sama menambah kas.",
          },
          {
            q: "Membayar prive (penarikan pemilik) termasuk aktivitas…",
            options: ["Operasi", "Investasi", "Pendanaan", "Beban gaji"],
            answer: 2,
            explain: "Prive/dividen terkait modal pemilik, sehingga masuk aktivitas pendanaan.",
          },
          {
            q: "Perusahaan laba tapi arus kas operasi negatif paling mungkin karena…",
            options: [
              "Penyusutan terlalu kecil",
              "Piutang & persediaan membengkak menahan kas",
              "Membayar dividen",
              "Menjual mesin",
            ],
            answer: 1,
            explain: "Kenaikan piutang dan persediaan menahan kas, sehingga laba akrual bisa positif sementara kas operasi negatif.",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "psak",
    levelId: "advance",
    order: 4,
    title: "Standar Akuntansi Keuangan (PSAK & IFRS)",
    summary: "Kerangka standar yang mengatur akuntansi di Indonesia.",
    durationMin: 16,
    tags: ["PSAK", "IFRS", "standar"],
    blocks: [
      {
        type: "paragraph",
        html: "Agar laporan keuangan konsisten & dapat dibandingkan, akuntansi mengikuti <strong>standar</strong>. Di Indonesia, standar disusun oleh DSAK-IAI dan sebagian besar mengadopsi <strong>IFRS</strong>.",
      },
      { type: "heading", text: "Empat Pilar Standar di Indonesia" },
      {
        type: "table",
        headers: ["Standar", "Untuk siapa"],
        rows: [
          ["PSAK (berbasis IFRS)", "Entitas dengan akuntabilitas publik (Tbk, bank, dll)"],
          ["SAK ETAP / SAK EP", "Entitas tanpa akuntabilitas publik signifikan (UKM menengah)"],
          ["SAK EMKM", "Usaha mikro, kecil & menengah"],
          ["SAK Syariah", "Transaksi & entitas berbasis syariah"],
        ],
      },
      { type: "heading", text: "Asumsi & Prinsip Dasar" },
      {
        type: "list",
        items: [
          "<strong>Kelangsungan usaha (going concern)</strong>: entitas diasumsikan terus beroperasi.",
          "<strong>Basis akrual</strong>: transaksi diakui saat terjadi, bukan saat kas berpindah.",
          "<strong>Entitas terpisah</strong>: keuangan usaha terpisah dari pemilik.",
          "<strong>Pengaitan (matching)</strong>: beban diakui sepadan dengan pendapatannya.",
          "<strong>Konsistensi & dapat dibandingkan</strong>: metode tidak berganti-ganti tanpa alasan.",
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Pilih standar yang paling tepat untuk tiap entitas.",
        buckets: ["PSAK (berbasis IFRS)", "SAK EP", "SAK EMKM", "SAK Syariah"],
        items: [
          { text: "Bank umum yang sahamnya tercatat di bursa (Tbk)", bucket: "PSAK (berbasis IFRS)" },
          { text: "Perusahaan asuransi terbuka", bucket: "PSAK (berbasis IFRS)" },
          { text: "Perusahaan manufaktur menengah tanpa akuntabilitas publik", bucket: "SAK EP" },
          { text: "Warung kelontong omzet kecil", bucket: "SAK EMKM" },
          { text: "Toko online rumahan skala mikro", bucket: "SAK EMKM" },
          { text: "Bank syariah", bucket: "SAK Syariah" },
          { text: "Lembaga pembiayaan berbasis akad murabahah", bucket: "SAK Syariah" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan asumsi/prinsip dasar dengan maknanya.",
        pairs: [
          { left: "Going concern", right: "Entitas diasumsikan terus beroperasi" },
          { left: "Basis akrual", right: "Transaksi diakui saat terjadi, bukan saat kas berpindah" },
          { left: "Entitas terpisah", right: "Keuangan usaha terpisah dari pemilik" },
          { left: "Matching", right: "Beban diakui sepadan dengan pendapatannya" },
          { left: "Konsistensi", right: "Metode tidak diganti tanpa alasan kuat" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: UMKM tak perlu PSAK penuh",
        html: "Sebuah UMKM bingung harus menerapkan PSAK penuh yang rumit. Padahal cukup memakai <strong>SAK EMKM</strong> yang jauh lebih sederhana namun tetap diakui, laporan tetap kredibel untuk pengajuan kredit usaha rakyat (KUR).",
      },
      {
        type: "case",
        title: "Studi Kasus: Koperasi Syariah salah standar",
        html: "Koperasi Berkah menjalankan pembiayaan dengan akad <strong>murabahah</strong> (jual-beli dengan margin), tetapi mencatatnya seperti pinjaman berbunga memakai PSAK umum. Akibatnya 'pendapatan margin' tercatat keliru sebagai pendapatan bunga, dan laporan tidak mencerminkan substansi akad syariah. Setelah beralih ke <strong>SAK Syariah</strong>, pengakuan margin murabahah menjadi tepat dan laporan bisa diaudit sesuai prinsip syariah.<br/><br/><em>Pelajaran:</em> pilih kerangka standar sesuai substansi transaksi & jenis entitas, bukan sekadar yang paling familiar.",
      },
      {
        type: "takeaways",
        items: [
          "Indonesia memakai PSAK (adopsi IFRS), SAK EP, SAK EMKM, & SAK Syariah.",
          "Pilih standar sesuai skala & jenis entitas.",
          "Asumsi inti: going concern, akrual, entitas terpisah, matching, konsistensi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Standar yang paling tepat untuk usaha mikro/kecil di Indonesia adalah…",
            options: ["PSAK penuh (IFRS)", "SAK EMKM", "US GAAP", "SAK Syariah"],
            answer: 1,
            explain: "SAK EMKM dirancang sederhana khusus untuk usaha mikro, kecil & menengah.",
          },
          {
            q: "Perusahaan terbuka (Tbk) di bursa wajib memakai…",
            options: ["SAK EMKM", "PSAK berbasis IFRS", "SAK EP", "Tidak ada standar"],
            answer: 1,
            explain: "Entitas dengan akuntabilitas publik seperti Tbk memakai PSAK yang mengadopsi IFRS.",
          },
          {
            q: "Mengakui transaksi saat terjadi (bukan saat kas berpindah) adalah penerapan…",
            options: ["Basis kas", "Basis akrual", "Going concern", "Konsistensi"],
            answer: 1,
            explain: "Itu prinsip basis akrual, pendapatan/beban diakui saat terjadi.",
          },
          {
            q: "Prinsip yang memisahkan keuangan usaha dari keuangan pribadi pemilik adalah…",
            options: ["Matching", "Entitas terpisah", "Going concern", "Materialitas"],
            answer: 1,
            explain: "Konsep entitas terpisah (business entity) memisahkan keuangan usaha dan pemilik.",
          },
          {
            q: "Transaksi dengan akad murabahah pada bank syariah sebaiknya mengikuti…",
            options: ["PSAK umum", "SAK Syariah", "SAK EMKM", "US GAAP"],
            answer: 1,
            explain: "Transaksi & entitas berbasis syariah diatur oleh SAK Syariah.",
          },
          {
            q: "PSAK di Indonesia sebagian besar mengadopsi standar internasional, yaitu…",
            options: ["US GAAP", "IFRS", "ISO 9001", "Basel III"],
            answer: 1,
            explain: "PSAK disusun DSAK-IAI dengan mengadopsi IFRS.",
          },
          {
            q: "Asumsi bahwa perusahaan akan terus beroperasi di masa mendatang disebut…",
            options: ["Going concern", "Akrual", "Konservatisme", "Matching"],
            answer: 0,
            explain: "Going concern: entitas diasumsikan melanjutkan usaha, bukan akan dilikuidasi.",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "akuntansi-pajak",
    levelId: "advance",
    order: 5,
    title: "Dasar Akuntansi Pajak",
    summary: "PPh, PPN, dan perbedaan laba akuntansi vs laba fiskal.",
    durationMin: 20,
    tags: ["pajak", "PPh", "fiskal"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Akuntansi pajak</strong> menyesuaikan laporan keuangan dengan ketentuan perpajakan untuk menghitung pajak terutang. Laba menurut akuntansi seringkali berbeda dengan laba menurut pajak.",
      },
      { type: "heading", text: "Jenis Pajak Utama bagi Usaha" },
      {
        type: "list",
        items: [
          "<strong>PPh Badan</strong>: pajak atas laba perusahaan (tarif umum 22%).",
          "<strong>PPh 21</strong>: pajak penghasilan karyawan (dipotong perusahaan).",
          "<strong>PPh 23</strong>: atas jasa, sewa, royalti, dividen tertentu.",
          "<strong>PPN</strong>: 11% atas penyerahan barang/jasa kena pajak.",
          "<strong>PPh Final UMKM (PP 55/2022)</strong>: 0,5% dari peredaran bruto untuk UMKM tertentu.",
        ],
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan jenis pajak dengan objek/dasar pengenaannya.",
        pairs: [
          { left: "PPh Badan", right: "Laba kena pajak perusahaan (tarif 22%)" },
          { left: "PPh 21", right: "Penghasilan karyawan" },
          { left: "PPh 23", right: "Jasa, sewa, royalti, dividen tertentu" },
          { left: "PPN", right: "Penyerahan barang/jasa kena pajak (11%)" },
          { left: "PPh Final UMKM", right: "Peredaran bruto UMKM (0,5%)" },
        ],
      },
      { type: "heading", text: "Laba Akuntansi vs Laba Fiskal" },
      {
        type: "paragraph",
        html: "Laba akuntansi (komersial) disusun menurut PSAK; laba fiskal menurut UU Pajak. Perbedaannya dijembatani <strong>koreksi fiskal</strong>.",
      },
      {
        type: "table",
        headers: ["Jenis koreksi", "Contoh"],
        rows: [
          ["Beda tetap (permanen)", "Sumbangan, denda pajak, biaya yang tak boleh dikurangkan"],
          ["Beda waktu (temporer)", "Perbedaan metode penyusutan komersial vs fiskal"],
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap koreksi fiskal sebagai beda tetap atau beda waktu.",
        buckets: ["Beda Tetap", "Beda Waktu"],
        items: [
          { text: "Denda/sanksi administrasi pajak", bucket: "Beda Tetap" },
          { text: "Sumbangan yang tidak memenuhi syarat", bucket: "Beda Tetap" },
          { text: "Biaya jamuan tanpa daftar nominatif", bucket: "Beda Tetap" },
          { text: "Pendapatan bunga deposito (sudah kena PPh final)", bucket: "Beda Tetap" },
          { text: "Perbedaan tarif penyusutan komersial vs fiskal", bucket: "Beda Waktu" },
          { text: "Penyisihan piutang tak tertagih (cadangan)", bucket: "Beda Waktu" },
          { text: "Perbedaan metode penilaian persediaan yang bersifat sementara", bucket: "Beda Waktu" },
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "Disclaimer",
        html: "Tarif & aturan pajak berubah dari waktu ke waktu (mis. UU HPP). Selalu cek peraturan terbaru dari DJP/konsultan pajak sebelum pelaporan resmi.",
      },
      {
        type: "calcExercise",
        prompt:
          "PT Sentosa punya laba fiskal (penghasilan kena pajak) Rp1.000jt. Dengan tarif PPh Badan 22%, berapa PPh Badan terutang (Rp juta)?",
        answer: 220,
        tolerance: 0.5,
        prefix: "Rp",
        suffix: "juta",
        solution: "PPh Badan = 22% × Rp1.000jt = <strong>Rp220 juta</strong>.",
        hint: "Kalikan penghasilan kena pajak dengan tarif 22%.",
      },
      {
        type: "calcExercise",
        prompt:
          "Toko UMKM Barokah memiliki peredaran bruto (omzet) Rp600jt setahun dan memenuhi syarat PPh Final UMKM. Berapa PPh Final terutang (Rp juta)?",
        answer: 3,
        tolerance: 0.1,
        prefix: "Rp",
        suffix: "juta",
        solution: "PPh Final UMKM = 0,5% × Rp600jt = <strong>Rp3 juta</strong> (per tahun).",
        hint: "Tarif 0,5% dikalikan peredaran bruto.",
      },
      {
        type: "calcExercise",
        prompt:
          "PT Andalan menjual barang kena pajak senilai Rp50jt (belum termasuk pajak). Berapa PPN yang dipungut (tarif 11%, Rp juta)?",
        answer: 5.5,
        tolerance: 0.05,
        prefix: "Rp",
        suffix: "juta",
        solution: "PPN keluaran = 11% × Rp50jt = <strong>Rp5,5 juta</strong>.",
        hint: "Kalikan dasar pengenaan pajak dengan 11%.",
      },
      {
        type: "calcExercise",
        prompt:
          "Laba komersial PT Jaya Rp500jt. Ada beda tetap berupa denda pajak Rp20jt (tidak boleh dikurangkan). Berapa laba fiskal sebelum pajak (Rp juta)?",
        answer: 520,
        tolerance: 0.5,
        prefix: "Rp",
        suffix: "juta",
        solution:
          "Denda pajak adalah beda tetap yang tidak boleh dikurangkan, jadi laba dikoreksi positif: 500 + 20 = <strong>Rp520 juta</strong>.",
        hint: "Biaya yang tak boleh dikurangkan menambah laba fiskal (koreksi positif).",
      },
      {
        type: "case",
        title: "Studi Kasus: Denda yang tak mengurangi pajak",
        html: "Perusahaan mencatat 'beban denda pajak Rp10jt' dan mengira itu mengurangi PPh. Secara fiskal, denda pajak TIDAK boleh dikurangkan (beda tetap), sehingga laba fiskal harus dikoreksi naik. Salah paham ini bisa berujung kurang bayar pajak.",
      },
      {
        type: "case",
        title: "Studi Kasus: PT Cahaya, memilih skema pajak yang tepat",
        html: "PT Cahaya, sebuah UMKM dengan omzet Rp800jt/tahun dan margin laba tipis (laba bersih hanya Rp30jt), awalnya memakai skema PPh Final UMKM 0,5%: pajaknya = 0,5% × 800 = <strong>Rp4jt</strong>. Padahal jika memakai tarif umum, PPh-nya = 22% × laba Rp30jt = <strong>Rp6,6jt</strong>. Dalam kondisi margin tipis dan omzet besar, skema final 0,5% bisa lebih ringan. Sebaliknya, untuk usaha bermargin sangat tinggi, tarif final atas omzet justru bisa lebih besar dari pajak atas laba.<br/><br/><em>Pelajaran:</em> pilih skema pajak dengan menghitung kedua opsi; perhatikan pula batas waktu pemanfaatan tarif final UMKM. <em>Aturan dapat berubah, selalu cek peraturan terbaru.</em>",
      },
      {
        type: "takeaways",
        items: [
          "Pajak usaha utama: PPh Badan, PPh 21/23, PPN, PPh Final UMKM.",
          "Laba akuntansi ≠ laba fiskal; dijembatani koreksi fiskal.",
          "Beda tetap vs beda waktu menentukan pajak kini & tangguhan.",
          "Aturan pajak dinamis, selalu rujuk peraturan terbaru.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Perbedaan metode penyusutan komersial vs fiskal menimbulkan koreksi…",
            options: ["Beda tetap", "Beda waktu (temporer)", "Tidak ada koreksi", "PPN masukan"],
            answer: 1,
            explain: "Perbedaan penyusutan bersifat sementara (akan sama secara total), sehingga termasuk beda waktu/temporer.",
          },
          {
            q: "Tarif PPh Final untuk UMKM (PP 55/2022) atas peredaran bruto adalah…",
            options: ["0,5%", "11%", "22%", "1%"],
            answer: 0,
            explain: "PPh Final UMKM = 0,5% dari peredaran bruto bagi yang memenuhi syarat.",
          },
          {
            q: "Tarif umum PPh Badan saat ini adalah…",
            options: ["10%", "15%", "22%", "25%"],
            answer: 2,
            explain: "Tarif umum PPh Badan adalah 22% (sesuai UU HPP). Aturan dapat berubah.",
          },
          {
            q: "Tarif PPN atas penyerahan barang/jasa kena pajak adalah…",
            options: ["5%", "10%", "11%", "22%"],
            answer: 2,
            explain: "PPN saat ini dikenakan 11% atas penyerahan barang/jasa kena pajak.",
          },
          {
            q: "Denda pajak yang dibayar perusahaan dalam koreksi fiskal merupakan…",
            options: [
              "Beda waktu yang akan terbalik",
              "Beda tetap yang tak boleh dikurangkan",
              "Pengurang pajak",
              "PPN keluaran",
            ],
            answer: 1,
            explain: "Denda pajak tidak boleh dikurangkan secara fiskal, termasuk beda tetap (permanen).",
          },
          {
            q: "Penghasilan kena pajak Rp2.000jt, tarif 22%. PPh Badan terutang?",
            options: ["Rp220jt", "Rp440jt", "Rp200jt", "Rp110jt"],
            answer: 1,
            explain: "22% × Rp2.000jt = Rp440jt.",
          },
          {
            q: "Pajak atas jasa, sewa, dan royalti tertentu yang dipotong saat pembayaran adalah…",
            options: ["PPh 21", "PPh 23", "PPN", "PPh Final UMKM"],
            answer: 1,
            explain: "PPh 23 dikenakan atas jasa, sewa, royalti, dan dividen tertentu.",
          },
        ],
      },
    ],
  },
];
