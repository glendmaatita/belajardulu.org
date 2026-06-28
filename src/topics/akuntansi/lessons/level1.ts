import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "apa-itu-akuntansi",
    levelId: "dasar",
    order: 1,
    title: "Apa Itu Akuntansi & Mengapa Penting",
    summary: "Memahami akuntansi sebagai 'bahasa bisnis' dan perannya dalam pengambilan keputusan.",
    durationMin: 12,
    tags: ["pengantar", "konsep"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan kamu membuka warung kopi. Setiap hari ada uang masuk dari penjualan, uang keluar untuk beli biji kopi, bayar listrik, dan gaji barista. Tanpa catatan yang rapi, kamu tidak akan tahu: <strong>apakah warungmu untung atau rugi?</strong> Di sinilah akuntansi berperan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Definisi sederhana",
        html: "<strong>Akuntansi</strong> adalah proses <em>mencatat, menggolongkan, meringkas,</em> dan <em>melaporkan</em> transaksi keuangan sehingga menghasilkan informasi yang berguna untuk mengambil keputusan.",
      },
      { type: "heading", text: "Akuntansi = Bahasa Bisnis" },
      {
        type: "paragraph",
        html: "Sebagaimana bahasa Indonesia dipakai untuk berkomunikasi sehari-hari, akuntansi adalah bahasa yang dipakai dunia usaha untuk berkomunikasi soal uang. Investor, bank, pemilik, dan kantor pajak semuanya 'membaca' kondisi sebuah usaha lewat laporan keuangan.",
      },
      { type: "heading", text: "Siapa yang Butuh Informasi Akuntansi?" },
      {
        type: "table",
        headers: ["Pengguna", "Butuh tahu apa?"],
        rows: [
          ["Pemilik / Manajer", "Apakah usaha untung? Ke mana uang pergi?"],
          ["Investor", "Apakah layak menanam modal di sini?"],
          ["Bank / Kreditur", "Mampukah usaha ini membayar utang?"],
          ["Kantor Pajak", "Berapa pajak yang harus dibayar?"],
          ["Karyawan", "Apakah perusahaan sehat & stabil?"],
        ],
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan setiap pengguna informasi akuntansi dengan pertanyaan utama yang ingin mereka jawab.",
        pairs: [
          { left: "Pemilik / Manajer", right: "Apakah usaha untung dan ke mana uang pergi?" },
          { left: "Investor", right: "Apakah layak menanam modal di sini?" },
          { left: "Bank / Kreditur", right: "Mampukah usaha ini membayar utang?" },
          { left: "Kantor Pajak", right: "Berapa pajak yang harus dibayar?" },
        ],
      },
      { type: "heading", text: "Akuntansi vs Pembukuan" },
      {
        type: "paragraph",
        html: "Banyak yang menyamakan keduanya. <strong>Pembukuan (bookkeeping)</strong> hanyalah bagian mencatat transaksi. <strong>Akuntansi</strong> lebih luas: termasuk menganalisis, menafsirkan, dan melaporkan agar informasi itu bisa dipakai mengambil keputusan.",
      },
      {
        type: "case",
        title: "Studi Kasus: Warung Kopi Bu Sari",
        html: "Bu Sari merasa warungnya ramai setiap hari, jadi ia yakin untung besar. Tapi setelah dicatat rapi, ternyata 70% pendapatan habis untuk biji kopi impor yang mahal. Tanpa akuntansi, Bu Sari tidak akan pernah tahu bahwa <strong>ramai ≠ untung</strong>. Setelah ganti pemasok, laba bersihnya naik 3x lipat.",
      },
      {
        type: "case",
        title: "Studi Kasus: Dua Toko Online, Nasib Berbeda",
        html: "Rina dan Dewi sama-sama jualan hijab online. Omzet keduanya Rp30.000.000/bulan. <strong>Rina</strong> mencatat semua: harga beli barang Rp18.000.000, ongkir Rp3.000.000, iklan Rp4.000.000, kemasan Rp1.000.000, laba bersih Rp4.000.000. <strong>Dewi</strong> tidak mencatat apa pun dan hanya melihat saldo rekening yang 'selalu ada uang', lalu menambah stok besar-besaran dengan dana pribadi. Tiga bulan kemudian Dewi kehabisan kas karena ternyata margin tipis. Pelajaran: tanpa pencatatan, kamu menerbangkan bisnis tanpa instrumen, <strong>kelihatan baik bukan berarti sehat</strong>.",
      },
      { type: "heading", text: "Jenis Bidang Akuntansi" },
      {
        type: "list",
        items: [
          "<strong>Akuntansi Keuangan</strong>: menghasilkan laporan untuk pihak luar (investor, bank, pajak).",
          "<strong>Akuntansi Manajemen</strong>: informasi untuk pengambilan keputusan internal.",
          "<strong>Akuntansi Biaya</strong>: menghitung biaya produksi barang/jasa.",
          "<strong>Akuntansi Pajak</strong>: menghitung kewajiban perpajakan.",
          "<strong>Auditing</strong>: memeriksa kewajaran laporan keuangan.",
        ],
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan tiap bidang akuntansi dengan tugas utamanya.",
        pairs: [
          { left: "Akuntansi Keuangan", right: "Membuat laporan untuk pihak luar (investor, bank, pajak)" },
          { left: "Akuntansi Manajemen", right: "Menyediakan informasi untuk keputusan internal" },
          { left: "Akuntansi Biaya", right: "Menghitung biaya produksi barang/jasa" },
          { left: "Auditing", right: "Memeriksa kewajaran laporan keuangan" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap aktivitas: termasuk PEMBUKUAN (sekadar mencatat) atau AKUNTANSI (lebih luas: menganalisis & melaporkan)?",
        buckets: ["Pembukuan", "Akuntansi"],
        items: [
          { text: "Mencatat nota pembelian ke buku harian", bucket: "Pembukuan" },
          { text: "Memasukkan transaksi penjualan ke jurnal", bucket: "Pembukuan" },
          { text: "Menyusun laporan laba rugi & menafsirkannya", bucket: "Akuntansi" },
          { text: "Menganalisis apakah usaha layak menambah cabang", bucket: "Akuntansi" },
          { text: "Mencatat pengeluaran kas harian", bucket: "Pembukuan" },
          { text: "Menghitung kewajiban pajak dari laba", bucket: "Akuntansi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Akuntansi mengubah transaksi mentah menjadi informasi untuk keputusan.",
          "Ia disebut 'bahasa bisnis' karena dipakai semua pemangku kepentingan.",
          "Ramai bukan berarti untung, hanya catatan yang membuktikannya.",
          "Pembukuan adalah bagian dari akuntansi, bukan keseluruhannya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Manakah yang PALING tepat menggambarkan akuntansi?",
            options: [
              "Sekadar mencatat uang masuk dan keluar",
              "Mencatat, menggolongkan, meringkas, dan melaporkan transaksi untuk pengambilan keputusan",
              "Menghitung pajak perusahaan saja",
              "Memeriksa apakah laporan keuangan benar",
            ],
            answer: 1,
            explain:
              "Akuntansi mencakup seluruh proses dari mencatat hingga melaporkan, lebih luas dari sekadar pembukuan, pajak, atau audit.",
          },
          {
            q: "Bu Sari mengira warungnya untung karena ramai. Pelajaran utamanya adalah…",
            options: [
              "Warung ramai pasti untung",
              "Pendapatan tinggi menjamin laba",
              "Tanpa pencatatan, kita tidak tahu untung/rugi sebenarnya",
              "Akuntansi hanya untuk perusahaan besar",
            ],
            answer: 2,
            explain:
              "Laba = pendapatan − beban. Pendapatan tinggi bisa habis oleh beban. Hanya pencatatan yang menunjukkan kondisi sebenarnya.",
          },
          {
            q: "Apa perbedaan utama antara pembukuan (bookkeeping) dan akuntansi?",
            options: [
              "Tidak ada bedanya, keduanya sama persis",
              "Pembukuan hanya mencatat; akuntansi mencakup analisis, penafsiran, dan pelaporan",
              "Pembukuan lebih luas daripada akuntansi",
              "Akuntansi hanya untuk pajak, pembukuan untuk bank",
            ],
            answer: 1,
            explain:
              "Pembukuan adalah bagian 'mencatat' saja. Akuntansi lebih luas: menganalisis, menafsirkan, dan melaporkan informasi untuk keputusan.",
          },
          {
            q: "Seorang manajer ingin memutuskan apakah perlu menambah karyawan. Bidang akuntansi yang paling membantu adalah…",
            options: [
              "Akuntansi Pajak",
              "Auditing",
              "Akuntansi Manajemen",
              "Akuntansi Keuangan",
            ],
            answer: 2,
            explain:
              "Akuntansi Manajemen menyediakan informasi untuk pengambilan keputusan internal seperti penambahan karyawan.",
          },
          {
            q: "Mengapa akuntansi disebut 'bahasa bisnis'?",
            options: [
              "Karena hanya dipakai oleh akuntan",
              "Karena memakai banyak istilah asing",
              "Karena menjadi alat komunikasi kondisi keuangan ke semua pemangku kepentingan",
              "Karena wajib ditulis dalam bahasa Inggris",
            ],
            answer: 2,
            explain:
              "Investor, bank, pemilik, dan pajak semua 'membaca' kondisi usaha lewat laporan keuangan, itulah mengapa akuntansi disebut bahasa bisnis.",
          },
          {
            q: "Pihak yang paling butuh tahu 'apakah usaha mampu membayar utangnya' adalah…",
            options: ["Karyawan", "Bank / Kreditur", "Pelanggan", "Pesaing"],
            answer: 1,
            explain:
              "Bank/kreditur memberi pinjaman, sehingga paling berkepentingan menilai kemampuan usaha melunasi utang.",
          },
          {
            q: "Toko Dewi beromzet sama dengan Toko Rina tetapi kehabisan kas. Penyebab paling mungkin adalah…",
            options: [
              "Omzet Dewi sebenarnya lebih kecil",
              "Dewi tidak mencatat sehingga tidak sadar marginnya tipis",
              "Rina menaikkan harga jual",
              "Akuntansi hanya berlaku untuk Rina",
            ],
            answer: 1,
            explain:
              "Tanpa pencatatan, Dewi tidak tahu margin tipis dan keliru menambah stok besar dari kas, sehingga kehabisan uang.",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "persamaan-dasar",
    levelId: "dasar",
    order: 2,
    title: "Persamaan Dasar Akuntansi",
    summary: "Aset = Kewajiban + Ekuitas, fondasi seluruh akuntansi, lengkap simulasi interaktif & video.",
    durationMin: 18,
    tags: ["fundamental", "persamaan"],
    blocks: [
      {
        type: "paragraph",
        html: "Seluruh ilmu akuntansi, sekompleks apa pun, berdiri di atas satu persamaan sederhana. Jika kamu menguasai ini, sisanya akan jauh lebih mudah.",
      },
      {
        type: "video",
        comp: "PersamaanAkuntansi",
        title: "Video: Persamaan Dasar Akuntansi",
        caption: "Animasi cara kerja Aset = Kewajiban + Ekuitas ketika terjadi transaksi. Putar & jeda sesukamu.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Persamaan Dasar Akuntansi",
        html: "<strong>ASET = KEWAJIBAN + EKUITAS</strong><br/>(Harta = Utang + Modal)",
      },
      { type: "heading", text: "Memahami Tiap Unsur" },
      {
        type: "list",
        items: [
          "<strong>Aset (Harta)</strong>: semua yang dimiliki perusahaan dan punya nilai: kas, perlengkapan, peralatan, kendaraan, gedung, piutang.",
          "<strong>Kewajiban (Utang)</strong>: kewajiban membayar pihak lain: utang usaha, utang bank, utang gaji.",
          "<strong>Ekuitas (Modal)</strong>: hak pemilik atas aset setelah dikurangi kewajiban. Inilah 'kekayaan bersih' pemilik.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa harus selalu seimbang?",
        html: "Karena setiap aset pasti dibiayai oleh sesuatu, entah dari <em>utang</em> (uang orang lain) atau <em>modal</em> (uang pemilik). Tidak ada aset yang muncul dari ketiadaan.",
      },
      { type: "heading", text: "Contoh: Membangun dari Nol" },
      {
        type: "paragraph",
        html: "Andi mendirikan jasa desain 'AndiStudio'. Mari ikuti bagaimana setiap transaksi menjaga persamaan tetap seimbang:",
      },
      {
        type: "equation",
        assets: 50_000_000,
        liabilities: 0,
        equity: 50_000_000,
        note: "1) Andi menyetor modal Rp50.000.000 tunai. Kas (aset) naik, Modal (ekuitas) naik.",
      },
      {
        type: "equation",
        assets: 50_000_000,
        liabilities: 20_000_000,
        equity: 30_000_000,
        note: "Salah! Ini hanya ilustrasi bahwa kedua sisi harus tetap sama nilainya, total tetap 50 juta.",
      },
      {
        type: "equation",
        assets: 70_000_000,
        liabilities: 20_000_000,
        equity: 50_000_000,
        note: "2) Andi pinjam bank Rp20.000.000. Kas (aset) naik 20jt, Utang Bank (kewajiban) naik 20jt. Tetap seimbang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba sendiri di bawah ini 👇",
        html: "Geser nilai Kewajiban dan Ekuitas, lalu lihat bagaimana Aset menyesuaikan agar selalu seimbang.",
      },
      { type: "widget", widget: "EquationPlayground" },
      {
        type: "calcExercise",
        prompt:
          "Sebuah usaha memiliki aset Rp250.000.000 dan kewajiban Rp160.000.000. Berapa ekuitas (modal) pemiliknya?",
        answer: 90_000_000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Gunakan <strong>Ekuitas = Aset − Kewajiban</strong>. Maka 250.000.000 − 160.000.000 = <strong>Rp90.000.000</strong>.",
        hint: "Ekuitas adalah kekayaan bersih = Aset dikurangi Kewajiban.",
      },
      {
        type: "calcExercise",
        prompt:
          "Andi punya modal (ekuitas) Rp30.000.000 dan utang bank Rp20.000.000, semuanya berwujud aset. Berapa total asetnya?",
        answer: 50_000_000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Gunakan <strong>Aset = Kewajiban + Ekuitas</strong>. Maka 20.000.000 + 30.000.000 = <strong>Rp50.000.000</strong>.",
        hint: "Balik persamaannya: Aset = Kewajiban + Ekuitas.",
      },
      { type: "heading", text: "Persamaan yang Diperluas" },
      {
        type: "paragraph",
        html: "Ketika perusahaan beroperasi, ekuitas berubah karena pendapatan, beban, dan pengambilan pribadi (prive). Bentuk lengkapnya:",
      },
      {
        type: "callout",
        tone: "key",
        html: "Aset = Kewajiban + (Modal + Pendapatan − Beban − Prive)",
      },
      {
        type: "case",
        title: "Studi Kasus: Salah Hitung Modal",
        html: "Pak Budi punya aset Rp100 juta dan merasa itulah 'kekayaan'-nya. Padahal ia berutang bank Rp60 juta. Kekayaan bersih (ekuitas) sebenarnya hanya Rp40 juta. Banyak pengusaha keliru menganggap aset = kekayaan, padahal <strong>Ekuitas = Aset − Kewajiban</strong>.",
      },
      {
        type: "case",
        title: "Studi Kasus: 'Laundry Bersih' Sebulan Beroperasi",
        html: "Sinta membuka usaha laundry. (1) Setor modal Rp25.000.000 tunai → Aset Rp25jt = Ekuitas Rp25jt. (2) Beli mesin cuci Rp15.000.000 tunai → kas turun 15jt, peralatan naik 15jt; total aset tetap Rp25jt. (3) Sebulan beroperasi, pendapatan jasa Rp6.000.000 tunai dan beban listrik+sabun Rp2.000.000 tunai. Pendapatan menambah ekuitas, beban mengurangi ekuitas. <strong>Ekuitas akhir = 25.000.000 + 6.000.000 − 2.000.000 = Rp29.000.000</strong>, dan total aset (kas + mesin) juga Rp29.000.000. Persamaan tetap seimbang, laba Rp4.000.000 'masuk' menjadi tambahan ekuitas pemilik.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pos ke unsur persamaan dasar yang tepat.",
        buckets: ["Aset", "Kewajiban", "Ekuitas"],
        items: [
          { text: "Kas di tangan", bucket: "Aset" },
          { text: "Utang Bank", bucket: "Kewajiban" },
          { text: "Modal Pemilik", bucket: "Ekuitas" },
          { text: "Peralatan kantor", bucket: "Aset" },
          { text: "Utang Usaha ke pemasok", bucket: "Kewajiban" },
          { text: "Piutang dari pelanggan", bucket: "Aset" },
          { text: "Utang Gaji karyawan", bucket: "Kewajiban" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Aset = Kewajiban + Ekuitas, dan harus SELALU seimbang.",
          "Setiap aset dibiayai oleh utang atau modal.",
          "Ekuitas = Aset − Kewajiban (kekayaan bersih pemilik).",
          "Bentuk perluasan: Ekuitas dipengaruhi Modal, Pendapatan, Beban, dan Prive.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Sebuah usaha punya aset Rp150 juta dan kewajiban Rp90 juta. Berapa ekuitasnya?",
            options: ["Rp240 juta", "Rp90 juta", "Rp60 juta", "Rp150 juta"],
            answer: 2,
            explain: "Ekuitas = Aset − Kewajiban = 150 − 90 = Rp60 juta.",
          },
          {
            q: "Perusahaan membeli peralatan Rp10 juta secara kredit (belum bayar). Apa pengaruhnya?",
            options: [
              "Aset naik 10jt, Kewajiban naik 10jt",
              "Aset naik 10jt, Ekuitas naik 10jt",
              "Aset turun 10jt, Kewajiban naik 10jt",
              "Tidak ada perubahan",
            ],
            answer: 0,
            explain:
              "Peralatan (aset) bertambah 10jt dan utang usaha (kewajiban) bertambah 10jt. Persamaan tetap seimbang.",
          },
          {
            q: "Pemilik menyetor modal Rp50 juta tunai ke perusahaan. Pengaruhnya pada persamaan?",
            options: [
              "Aset naik 50jt, Ekuitas naik 50jt",
              "Aset naik 50jt, Kewajiban naik 50jt",
              "Ekuitas naik 50jt, Kewajiban turun 50jt",
              "Tidak berpengaruh karena hanya pindah uang",
            ],
            answer: 0,
            explain:
              "Kas (aset) bertambah 50jt dan Modal (ekuitas) bertambah 50jt. Kedua sisi naik seimbang.",
          },
          {
            q: "Perusahaan melunasi utang usaha Rp5 juta secara tunai. Apa pengaruhnya?",
            options: [
              "Aset turun 5jt, Kewajiban turun 5jt",
              "Aset naik 5jt, Kewajiban turun 5jt",
              "Aset turun 5jt, Ekuitas turun 5jt",
              "Tidak ada perubahan",
            ],
            answer: 0,
            explain:
              "Kas (aset) berkurang 5jt dan Utang Usaha (kewajiban) berkurang 5jt. Persamaan tetap seimbang.",
          },
          {
            q: "Manakah pernyataan yang BENAR tentang ekuitas?",
            options: [
              "Ekuitas selalu sama dengan total aset",
              "Ekuitas = Aset − Kewajiban, yaitu kekayaan bersih pemilik",
              "Ekuitas tidak pernah berubah",
              "Ekuitas hanya berasal dari utang",
            ],
            answer: 1,
            explain:
              "Ekuitas adalah hak pemilik atas aset setelah dikurangi kewajiban: Ekuitas = Aset − Kewajiban.",
          },
          {
            q: "Dalam persamaan yang diperluas, manakah yang MENGURANGI ekuitas?",
            options: [
              "Pendapatan dan tambahan modal",
              "Beban dan prive (pengambilan pribadi)",
              "Pembelian aset tunai",
              "Penerimaan piutang",
            ],
            answer: 1,
            explain:
              "Ekuitas = Modal + Pendapatan − Beban − Prive. Beban dan prive mengurangi ekuitas.",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "akun-coa",
    levelId: "dasar",
    order: 3,
    title: "Akun & Bagan Akun (Chart of Accounts)",
    summary: "Mengenal 5 golongan akun dan bagaimana perusahaan mengkodekannya.",
    durationMin: 14,
    tags: ["akun", "klasifikasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Agar transaksi mudah dicatat dan dilaporkan, kita mengelompokkannya ke dalam <strong>akun</strong> (rekening). Misalnya semua uang tunai masuk ke akun 'Kas', semua utang ke 'Utang Usaha'.",
      },
      {
        type: "video",
        comp: "GolonganAkun",
        title: "Video: 5 Golongan Akun",
        caption: "Animasi penggolongan akun & ke laporan mana masuknya.",
      },
      { type: "heading", text: "5 Golongan Akun Utama" },
      {
        type: "table",
        headers: ["Golongan", "Contoh akun", "Bagian dari"],
        rows: [
          ["1. Aset", "Kas, Piutang, Perlengkapan, Peralatan, Gedung", "Neraca"],
          ["2. Kewajiban", "Utang Usaha, Utang Bank, Utang Gaji", "Neraca"],
          ["3. Ekuitas", "Modal Pemilik, Prive", "Neraca"],
          ["4. Pendapatan", "Pendapatan Jasa, Penjualan", "Laba Rugi"],
          ["5. Beban", "Beban Gaji, Beban Listrik, Beban Sewa", "Laba Rugi"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Cara mengingat",
        html: "Tiga golongan pertama (Aset, Kewajiban, Ekuitas) masuk ke <strong>Neraca</strong> (posisi keuangan). Dua terakhir (Pendapatan, Beban) masuk ke <strong>Laba Rugi</strong> (kinerja).",
      },
      {
        type: "classifyExercise",
        prompt: "Seret tiap akun ke golongan yang tepat. Ingat: 5 golongan utama akuntansi.",
        buckets: ["Aset", "Kewajiban", "Ekuitas", "Pendapatan", "Beban"],
        items: [
          { text: "Kas", bucket: "Aset" },
          { text: "Utang Bank", bucket: "Kewajiban" },
          { text: "Modal Pemilik", bucket: "Ekuitas" },
          { text: "Pendapatan Jasa", bucket: "Pendapatan" },
          { text: "Beban Gaji", bucket: "Beban" },
          { text: "Piutang Usaha", bucket: "Aset" },
          { text: "Utang Usaha", bucket: "Kewajiban" },
          { text: "Beban Sewa", bucket: "Beban" },
          { text: "Peralatan", bucket: "Aset" },
          { text: "Penjualan", bucket: "Pendapatan" },
        ],
      },
      { type: "heading", text: "Akun Riil vs Akun Nominal" },
      {
        type: "list",
        items: [
          "<strong>Akun Riil (permanen)</strong>: Aset, Kewajiban, Ekuitas. Saldonya dibawa terus ke periode berikutnya.",
          "<strong>Akun Nominal (sementara)</strong>: Pendapatan, Beban, Prive. Ditutup (di-nol-kan) di akhir periode.",
        ],
      },
      { type: "heading", text: "Bagan Akun (Chart of Accounts)" },
      {
        type: "paragraph",
        html: "<strong>Bagan Akun</strong> adalah daftar semua akun beserta kodenya. Pengkodean memudahkan pencatatan & laporan. Contoh pola umum:",
      },
      {
        type: "table",
        headers: ["Kode", "Nama Akun", "Golongan"],
        rows: [
          ["1-xxx", "1-101 Kas, 1-102 Piutang", "Aset"],
          ["2-xxx", "2-101 Utang Usaha", "Kewajiban"],
          ["3-xxx", "3-101 Modal Pemilik", "Ekuitas"],
          ["4-xxx", "4-101 Pendapatan Jasa", "Pendapatan"],
          ["5-xxx", "5-101 Beban Gaji", "Beban"],
        ],
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan akun-akun berikut dengan klasifikasi 'Riil/Permanen' atau 'Nominal/Sementara'.",
        pairs: [
          { left: "Kas", right: "Riil (dibawa ke periode berikutnya)" },
          { left: "Beban Listrik", right: "Nominal (ditutup tiap akhir periode)" },
          { left: "Utang Usaha", right: "Riil (dibawa ke periode berikutnya)" },
          { left: "Pendapatan Jasa", right: "Nominal (ditutup tiap akhir periode)" },
          { left: "Prive", right: "Nominal (ditutup tiap akhir periode)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: COA Berantakan",
        html: "Sebuah startup mencatat semua pengeluaran ke satu akun 'Biaya Lain-lain'. Saat investor bertanya 'berapa biaya marketing?', mereka tidak bisa menjawab. Bagan akun yang rinci sejak awal membuat laporan jauh lebih informatif.",
      },
      {
        type: "case",
        title: "Studi Kasus: Kode Akun Menyelamatkan Audit",
        html: "Kafe 'Kopi Senja' awalnya menamai akun seenaknya: ada 'Beli Kopi', 'Belanja Biji', 'Stok Kopi', tiga nama untuk hal yang sama. Saat tutup buku, angka persediaan kacau. Setelah menerapkan COA berkode (mis. <strong>1-104 Persediaan Bahan</strong>, <strong>5-101 Beban Pokok</strong>), setiap transaksi punya 'rumah' yang jelas. Laporan jadi konsisten, dan audit yang tadinya butuh seminggu selesai dalam dua hari. Pelajaran: <strong>satu konsep = satu akun = satu kode</strong>.",
      },
      {
        type: "takeaways",
        items: [
          "Ada 5 golongan akun: Aset, Kewajiban, Ekuitas, Pendapatan, Beban.",
          "Aset/Kewajiban/Ekuitas → Neraca; Pendapatan/Beban → Laba Rugi.",
          "Akun riil bersaldo permanen; akun nominal ditutup tiap akhir periode.",
          "Bagan Akun (COA) yang rapi = laporan yang informatif.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Akun 'Beban Listrik' termasuk golongan apa dan masuk laporan apa?",
            options: [
              "Aset, Neraca",
              "Beban, Laba Rugi",
              "Kewajiban, Neraca",
              "Pendapatan, Laba Rugi",
            ],
            answer: 1,
            explain: "Beban Listrik adalah golongan Beban, dilaporkan di Laporan Laba Rugi.",
          },
          {
            q: "Manakah yang merupakan akun nominal (sementara)?",
            options: ["Kas", "Utang Usaha", "Pendapatan Jasa", "Peralatan"],
            answer: 2,
            explain:
              "Pendapatan Jasa adalah akun nominal yang ditutup tiap akhir periode. Kas, Utang, Peralatan adalah akun riil.",
          },
          {
            q: "Akun manakah yang TIDAK termasuk golongan Aset?",
            options: ["Piutang Usaha", "Perlengkapan", "Utang Bank", "Peralatan"],
            answer: 2,
            explain:
              "Utang Bank adalah kewajiban. Piutang, Perlengkapan, dan Peralatan adalah aset.",
          },
          {
            q: "Dalam pola pengkodean umum, akun dengan kode awalan '4-' biasanya golongan…",
            options: ["Aset", "Beban", "Pendapatan", "Ekuitas"],
            answer: 2,
            explain:
              "Pola umum: 1=Aset, 2=Kewajiban, 3=Ekuitas, 4=Pendapatan, 5=Beban. Jadi 4- adalah Pendapatan.",
          },
          {
            q: "Manakah kelompok akun yang SEMUANYA masuk ke Neraca?",
            options: [
              "Kas, Utang Usaha, Modal Pemilik",
              "Pendapatan Jasa, Beban Gaji, Kas",
              "Beban Sewa, Penjualan, Piutang",
              "Modal, Pendapatan, Beban",
            ],
            answer: 0,
            explain:
              "Aset (Kas), Kewajiban (Utang Usaha), dan Ekuitas (Modal) adalah akun Neraca. Pendapatan & Beban masuk Laba Rugi.",
          },
          {
            q: "Mengapa akun nominal ditutup (di-nol-kan) tiap akhir periode?",
            options: [
              "Agar saldonya menumpuk antar tahun",
              "Agar pendapatan & beban dihitung per periode, lalu hasilnya pindah ke ekuitas",
              "Karena tidak penting untuk laporan",
              "Agar kas selalu nol",
            ],
            answer: 1,
            explain:
              "Pendapatan & beban diukur per periode. Setelah ditutup, labanya menambah ekuitas dan akun mulai dari nol lagi periode berikutnya.",
          },
          {
            q: "Bagan Akun (Chart of Accounts) yang baik membuat…",
            options: [
              "Laporan lebih rinci dan informatif",
              "Transaksi tidak perlu dicatat",
              "Pajak otomatis nol",
              "Semua biaya tergabung jadi satu",
            ],
            answer: 0,
            explain:
              "COA yang rapi memisahkan tiap jenis transaksi ke akun yang jelas, sehingga laporan menjadi rinci dan berguna untuk keputusan.",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "debit-kredit",
    levelId: "dasar",
    order: 4,
    title: "Aturan Debit & Kredit",
    summary: "Inti pencatatan: kapan akun di-debit, kapan di-kredit. Dengan video & latihan drill.",
    durationMin: 20,
    tags: ["debit", "kredit", "fundamental"],
    blocks: [
      {
        type: "paragraph",
        html: "Inilah bagian yang sering bikin pemula bingung. Tapi sebenarnya hanya soal menghafal <strong>satu tabel</strong> dengan logika yang konsisten. Mari kita bongkar.",
      },
      {
        type: "video",
        comp: "DebitKredit",
        title: "Video: Logika Debit & Kredit",
        caption: "Animasi aturan saldo normal tiap golongan akun.",
      },
      {
        type: "callout",
        tone: "info",
        html: "<strong>Debit</strong> berarti sisi <em>kiri</em> akun. <strong>Kredit</strong> berarti sisi <em>kanan</em>. Itu saja, debit & kredit bukan berarti 'bertambah' atau 'berkurang'! Efeknya tergantung jenis akunnya.",
      },
      { type: "heading", text: "Tabel Sakti: Saldo Normal" },
      {
        type: "table",
        headers: ["Golongan Akun", "Bertambah di", "Berkurang di", "Saldo Normal"],
        rows: [
          ["Aset", "DEBIT", "Kredit", "Debit"],
          ["Beban", "DEBIT", "Kredit", "Debit"],
          ["Kewajiban", "Kredit", "DEBIT", "Kredit"],
          ["Ekuitas/Modal", "Kredit", "DEBIT", "Kredit"],
          ["Pendapatan", "Kredit", "DEBIT", "Kredit"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Jembatan keledai: 'ABE di kiri'",
        html: "<strong>A</strong>set, <strong>B</strong>eban, dan pri<strong>v</strong>e bertambah di <strong>DEBIT</strong> (kiri). Sisanya, Kewajiban, Ekuitas, Pendapatan, bertambah di <strong>KREDIT</strong> (kanan).",
      },
      {
        type: "classifyExercise",
        prompt: "Tiap akun BERTAMBAH di sisi mana? Kelompokkan ke 'Bertambah di Debit' atau 'Bertambah di Kredit'.",
        buckets: ["Bertambah di Debit", "Bertambah di Kredit"],
        items: [
          { text: "Kas (Aset)", bucket: "Bertambah di Debit" },
          { text: "Beban Gaji (Beban)", bucket: "Bertambah di Debit" },
          { text: "Utang Usaha (Kewajiban)", bucket: "Bertambah di Kredit" },
          { text: "Modal Pemilik (Ekuitas)", bucket: "Bertambah di Kredit" },
          { text: "Pendapatan Jasa (Pendapatan)", bucket: "Bertambah di Kredit" },
          { text: "Peralatan (Aset)", bucket: "Bertambah di Debit" },
          { text: "Beban Sewa (Beban)", bucket: "Bertambah di Debit" },
          { text: "Utang Bank (Kewajiban)", bucket: "Bertambah di Kredit" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan tiap golongan akun dengan saldo normalnya.",
        pairs: [
          { left: "Aset", right: "Saldo normal Debit" },
          { left: "Beban", right: "Saldo normal Debit" },
          { left: "Kewajiban", right: "Saldo normal Kredit" },
          { left: "Ekuitas / Modal", right: "Saldo normal Kredit" },
          { left: "Pendapatan", right: "Saldo normal Kredit" },
        ],
      },
      { type: "heading", text: "Prinsip Berpasangan (Double-Entry)" },
      {
        type: "paragraph",
        html: "Setiap transaksi selalu memengaruhi <strong>minimal dua akun</strong>, dan total debit harus SAMA dengan total kredit. Inilah yang menjaga persamaan akuntansi tetap seimbang.",
      },
      {
        type: "journal",
        title: "Contoh: Membeli peralatan Rp5.000.000 tunai",
        lines: [
          { account: "Peralatan", debit: 5_000_000 },
          { account: "Kas", credit: 5_000_000 },
        ],
        note: "Peralatan (aset) bertambah → debit. Kas (aset) berkurang → kredit. Total debit = total kredit = 5jt.",
      },
      {
        type: "journal",
        title: "Contoh: Menerima pendapatan jasa Rp3.000.000 tunai",
        lines: [
          { account: "Kas", debit: 3_000_000 },
          { account: "Pendapatan Jasa", credit: 3_000_000 },
        ],
        note: "Kas (aset) bertambah → debit. Pendapatan bertambah → kredit.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Latihan cepat 👇",
        html: "Asah refleksmu! Tentukan akun harus di-debit atau di-kredit dalam latihan kilat berikut.",
      },
      { type: "widget", widget: "DebitKreditDrill" },
      {
        type: "journalExercise",
        prompt:
          "Perusahaan menerima pelunasan piutang dari pelanggan sebesar Rp4.000.000 secara tunai. Susun jurnalnya (tentukan akun mana didebit/dikredit).",
        accounts: ["Kas", "Piutang Usaha", "Pendapatan Jasa", "Utang Usaha", "Modal Pemilik", "Beban Gaji"],
        answer: [
          { account: "Kas", debit: 4_000_000 },
          { account: "Piutang Usaha", credit: 4_000_000 },
        ],
        hint: "Kas (aset) bertambah → debit. Piutang (aset) berkurang → kredit. Ini bukan pendapatan baru, hanya penagihan.",
      },
      {
        type: "journalExercise",
        prompt:
          "Pemilik mengambil uang Rp1.500.000 dari kas perusahaan untuk keperluan pribadi (prive). Susun jurnalnya.",
        accounts: ["Prive", "Kas", "Beban Gaji", "Modal Pemilik", "Pendapatan Jasa", "Utang Usaha"],
        answer: [
          { account: "Prive", debit: 1_500_000 },
          { account: "Kas", credit: 1_500_000 },
        ],
        hint: "Prive bertambah di debit (mengurangi ekuitas). Kas (aset) berkurang → kredit.",
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa selalu seimbang?",
        html: "Seorang kasir mencatat penjualan Rp1jt hanya di sisi kas, lupa sisi pendapatan. Saat neraca saldo disusun, total debit ≠ kredit, selisih Rp1jt langsung ketahuan. Prinsip berpasangan adalah 'alarm' alami pendeteksi kesalahan.",
      },
      {
        type: "case",
        title: "Studi Kasus: Salah Sisi, Laba Membengkak",
        html: "Pemilik toko mencatat pembayaran beban listrik Rp800.000 dengan KELIRU: ia mendebit Kas dan mengkredit Beban Listrik (terbalik). Akibatnya kas tampak naik dan beban tampak negatif, sehingga laba 'seolah' lebih besar Rp1.600.000 dari seharusnya. Jurnal yang benar: <strong>Debit Beban Listrik Rp800.000; Kredit Kas Rp800.000</strong> (beban bertambah di debit, kas berkurang di kredit). Pelajaran: salah memilih sisi debit/kredit bisa membuat laporan menyesatkan meski angka totalnya 'terlihat' seimbang.",
      },
      {
        type: "takeaways",
        items: [
          "Debit = sisi kiri, Kredit = sisi kanan, bukan tambah/kurang.",
          "Aset & Beban bertambah di debit; Kewajiban, Ekuitas, Pendapatan bertambah di kredit.",
          "Setiap transaksi memengaruhi ≥2 akun: total debit = total kredit.",
          "Prinsip berpasangan otomatis mendeteksi kesalahan pencatatan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Perusahaan membayar beban sewa Rp2 juta tunai. Jurnalnya?",
            options: [
              "Debit Kas 2jt; Kredit Beban Sewa 2jt",
              "Debit Beban Sewa 2jt; Kredit Kas 2jt",
              "Debit Beban Sewa 2jt; Kredit Modal 2jt",
              "Debit Kas 2jt; Kredit Utang 2jt",
            ],
            answer: 1,
            explain:
              "Beban bertambah → debit. Kas berkurang → kredit. Maka Debit Beban Sewa, Kredit Kas.",
          },
          {
            q: "Saldo normal akun Pendapatan adalah…",
            options: ["Debit", "Kredit", "Bisa keduanya", "Nol"],
            answer: 1,
            explain: "Pendapatan bertambah di kredit, sehingga saldo normalnya kredit.",
          },
          {
            q: "Perusahaan menerima kas Rp5jt dari pelanggan untuk jasa yang langsung dikerjakan. Jurnalnya?",
            options: [
              "Debit Pendapatan Jasa 5jt; Kredit Kas 5jt",
              "Debit Kas 5jt; Kredit Pendapatan Jasa 5jt",
              "Debit Kas 5jt; Kredit Utang Usaha 5jt",
              "Debit Piutang 5jt; Kredit Pendapatan Jasa 5jt",
            ],
            answer: 1,
            explain:
              "Kas (aset) bertambah → debit. Pendapatan bertambah → kredit. Maka Debit Kas, Kredit Pendapatan Jasa.",
          },
          {
            q: "Akun Kas dikredit. Apa yang sebenarnya terjadi pada kas?",
            options: [
              "Kas bertambah",
              "Kas berkurang",
              "Kas tidak berubah",
              "Tidak bisa ditentukan",
            ],
            answer: 1,
            explain:
              "Kas adalah aset (saldo normal debit). Saat dikredit, kas BERKURANG.",
          },
          {
            q: "Manakah pernyataan yang BENAR tentang debit dan kredit?",
            options: [
              "Debit selalu berarti bertambah",
              "Kredit selalu berarti berkurang",
              "Debit = sisi kiri, kredit = sisi kanan; efeknya tergantung jenis akun",
              "Debit dan kredit hanya untuk akun kas",
            ],
            answer: 2,
            explain:
              "Debit/kredit hanyalah sisi kiri/kanan. Apakah menambah atau mengurangi tergantung golongan akunnya.",
          },
          {
            q: "Perusahaan membeli perlengkapan Rp3jt secara kredit. Sisi mana yang bertambah di kredit?",
            options: [
              "Perlengkapan",
              "Utang Usaha",
              "Kas",
              "Modal",
            ],
            answer: 1,
            explain:
              "Perlengkapan (aset) didebit. Karena belum dibayar, Utang Usaha (kewajiban) bertambah di kredit.",
          },
          {
            q: "Total debit sebuah jurnal Rp7jt, tetapi total kreditnya Rp5jt. Apa yang harus disimpulkan?",
            options: [
              "Jurnal sudah benar",
              "Ada kesalahan, total debit harus sama dengan total kredit",
              "Selisihnya menjadi laba",
              "Selisihnya menjadi kas",
            ],
            answer: 1,
            explain:
              "Prinsip berpasangan mengharuskan total debit = total kredit. Selisih menandakan ada kesalahan pencatatan.",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "jurnal-umum",
    levelId: "dasar",
    order: 5,
    title: "Jurnal Umum",
    summary: "Mencatat transaksi secara kronologis. Dilengkapi latihan membuat jurnal sendiri.",
    durationMin: 18,
    tags: ["jurnal", "pencatatan"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Jurnal umum</strong> adalah 'buku harian' perusahaan: tempat pertama setiap transaksi dicatat, secara urut berdasarkan tanggal. Proses mencatatnya disebut <em>menjurnal</em>.",
      },
      {
        type: "video",
        comp: "AlurJurnal",
        title: "Video: Dari Transaksi ke Jurnal",
        caption: "Animasi alur menjurnal sebuah transaksi.",
      },
      { type: "heading", text: "Format Jurnal" },
      {
        type: "paragraph",
        html: "Setiap jurnal punya: tanggal, nama akun yang di-debit (ditulis dulu, rata kiri), nama akun yang di-kredit (ditulis di bawahnya, agak menjorok), dan jumlahnya. Akun debit selalu ditulis lebih dulu.",
      },
      {
        type: "journal",
        date: "5 Jan 2026",
        title: "Pemilik menyetor modal Rp40.000.000 tunai",
        lines: [
          { account: "Kas", debit: 40_000_000 },
          { account: "Modal Pemilik", credit: 40_000_000 },
        ],
      },
      { type: "heading", text: "Langkah Menjurnal (5 Pertanyaan)" },
      {
        type: "list",
        ordered: true,
        items: [
          "Akun apa saja yang terpengaruh?",
          "Masing-masing termasuk golongan apa (aset/kewajiban/ekuitas/pendapatan/beban)?",
          "Apakah masing-masing bertambah atau berkurang?",
          "Berdasarkan aturan saldo normal, di-debit atau di-kredit?",
          "Pastikan total debit = total kredit.",
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: 'Bengkel Maju Jaya', Januari 2026",
        html: "Mari jurnal transaksi nyata sebuah bengkel motor selama awal bulan. Ikuti setiap contoh, lalu kerjakan latihan di bawah.",
      },
      {
        type: "journal",
        date: "7 Jan",
        title: "Membeli perlengkapan bengkel Rp2.000.000 secara kredit",
        lines: [
          { account: "Perlengkapan", debit: 2_000_000 },
          { account: "Utang Usaha", credit: 2_000_000 },
        ],
        note: "Perlengkapan (aset) naik → debit. Belum bayar → Utang Usaha (kewajiban) naik → kredit.",
      },
      {
        type: "journal",
        date: "12 Jan",
        title: "Menyelesaikan servis, menerima Rp1.500.000 tunai",
        lines: [
          { account: "Kas", debit: 1_500_000 },
          { account: "Pendapatan Servis", credit: 1_500_000 },
        ],
      },
      {
        type: "journal",
        date: "20 Jan",
        title: "Membayar gaji mekanik Rp1.000.000",
        lines: [
          { account: "Beban Gaji", debit: 1_000_000 },
          { account: "Kas", credit: 1_000_000 },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Giliranmu! ✍️",
        html: "Kerjakan latihan jurnal di bawah ini. Pilih akun & isi nominal, lalu sistem akan memeriksa jawabanmu.",
      },
      {
        type: "journalExercise",
        prompt:
          "27 Jan: Bengkel membayar sebagian utang usaha sebesar Rp2.000.000 secara tunai. Buat jurnalnya!",
        accounts: ["Kas", "Utang Usaha", "Beban Gaji", "Perlengkapan", "Pendapatan Servis", "Modal Pemilik"],
        answer: [
          { account: "Utang Usaha", debit: 2_000_000 },
          { account: "Kas", credit: 2_000_000 },
        ],
        hint: "Utang berkurang (didebit karena saldo normalnya kredit), kas berkurang (dikredit).",
      },
      {
        type: "journalExercise",
        prompt:
          "30 Jan: Bengkel menyelesaikan servis besar Rp4.000.000, tetapi pelanggan baru membayar Rp1.500.000 tunai dan sisanya kredit. Buat jurnal majemuknya!",
        accounts: ["Kas", "Piutang Usaha", "Pendapatan Servis", "Utang Usaha", "Perlengkapan", "Beban Gaji"],
        answer: [
          { account: "Kas", debit: 1_500_000 },
          { account: "Piutang Usaha", debit: 2_500_000 },
          { account: "Pendapatan Servis", credit: 4_000_000 },
        ],
        hint: "Tiga baris: Kas (debit) + Piutang (debit) = Pendapatan Servis (kredit) Rp4.000.000. Total debit harus sama dengan total kredit.",
      },
      {
        type: "classifyExercise",
        prompt: "Untuk tiap transaksi, akun KAS akan didebit atau dikredit?",
        buckets: ["Kas didebit (kas bertambah)", "Kas dikredit (kas berkurang)"],
        items: [
          { text: "Menerima pendapatan tunai", bucket: "Kas didebit (kas bertambah)" },
          { text: "Membayar gaji karyawan", bucket: "Kas dikredit (kas berkurang)" },
          { text: "Pemilik menyetor modal tunai", bucket: "Kas didebit (kas bertambah)" },
          { text: "Membeli peralatan secara tunai", bucket: "Kas dikredit (kas berkurang)" },
          { text: "Menerima pelunasan piutang", bucket: "Kas didebit (kas bertambah)" },
          { text: "Melunasi utang usaha", bucket: "Kas dikredit (kas berkurang)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Salah Tanggal, Laporan Bulan Kacau",
        html: "Toko 'Sumber Rejeki' menerima pembayaran besar Rp10.000.000 pada 31 Maret, tetapi staf baru menjurnalnya tanggal 1 April. Akibatnya laporan Maret terlihat lesu dan April 'melonjak' palsu, pemilik nyaris membatalkan bonus tim penjualan Maret. Karena jurnal umum bersifat <strong>kronologis</strong>, urutan & ketepatan tanggal menentukan di periode mana transaksi diakui. Pelajaran: jurnal bukan sekadar 'apa', tapi juga 'kapan'.",
      },
      {
        type: "takeaways",
        items: [
          "Jurnal umum mencatat transaksi secara kronologis, entri pertama.",
          "Akun debit ditulis lebih dulu, kredit di bawahnya menjorok.",
          "Gunakan 5 pertanyaan untuk menentukan debit/kredit.",
          "Total debit harus selalu sama dengan total kredit.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "'Membeli peralatan Rp8jt, dibayar 3jt tunai sisanya kredit.' Berapa baris jurnalnya?",
            options: ["1 baris", "2 baris", "3 baris", "4 baris"],
            answer: 2,
            explain:
              "Debit Peralatan 8jt; Kredit Kas 3jt; Kredit Utang Usaha 5jt, total 3 baris (jurnal majemuk). Debit 8jt = Kredit 8jt.",
          },
          {
            q: "Dalam format jurnal umum, akun yang ditulis lebih dulu (rata kiri) adalah…",
            options: [
              "Akun yang dikredit",
              "Akun yang didebit",
              "Akun dengan nominal terbesar",
              "Akun kas selalu",
            ],
            answer: 1,
            explain:
              "Konvensi jurnal: akun yang DIDEBIT ditulis lebih dulu (rata kiri), lalu akun kredit di bawahnya agak menjorok.",
          },
          {
            q: "'12 Jan: menerima Rp1.500.000 tunai atas servis.' Jurnal yang benar adalah…",
            options: [
              "Debit Pendapatan Servis 1,5jt; Kredit Kas 1,5jt",
              "Debit Kas 1,5jt; Kredit Pendapatan Servis 1,5jt",
              "Debit Kas 1,5jt; Kredit Utang Usaha 1,5jt",
              "Debit Piutang 1,5jt; Kredit Kas 1,5jt",
            ],
            answer: 1,
            explain:
              "Kas (aset) bertambah → debit. Pendapatan Servis bertambah → kredit.",
          },
          {
            q: "Membeli perlengkapan Rp2.000.000 secara KREDIT. Akun apa yang dikredit?",
            options: ["Kas", "Perlengkapan", "Utang Usaha", "Pendapatan"],
            answer: 2,
            explain:
              "Perlengkapan (aset) didebit. Karena belum dibayar, Utang Usaha (kewajiban) bertambah → dikredit.",
          },
          {
            q: "Apa fungsi utama jurnal umum dalam siklus akuntansi?",
            options: [
              "Menghitung pajak akhir tahun",
              "Mencatat transaksi pertama kali secara kronologis sebelum diposting",
              "Menyusun laporan laba rugi",
              "Menutup akun nominal",
            ],
            answer: 1,
            explain:
              "Jurnal umum adalah titik pencatatan pertama (book of original entry), urut berdasarkan tanggal, sebelum diposting ke buku besar.",
          },
          {
            q: "Mengapa pencatatan tanggal pada jurnal sangat penting?",
            options: [
              "Agar jurnal terlihat rapi saja",
              "Menentukan di periode mana transaksi diakui, memengaruhi laporan",
              "Tidak penting selama nominalnya benar",
              "Hanya untuk transaksi tunai",
            ],
            answer: 1,
            explain:
              "Jurnal bersifat kronologis; tanggal menentukan periode pengakuan transaksi sehingga memengaruhi laporan bulan tersebut.",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "buku-besar",
    levelId: "dasar",
    order: 6,
    title: "Buku Besar & Posting",
    summary: "Memindahkan jurnal ke akun masing-masing dengan format T-account.",
    durationMin: 15,
    tags: ["buku besar", "posting", "t-account"],
    blocks: [
      {
        type: "paragraph",
        html: "Setelah dijurnal, transaksi dikelompokkan per akun ke dalam <strong>Buku Besar</strong>. Proses memindahkannya disebut <strong>posting</strong>. Tujuannya: tahu saldo akhir tiap akun.",
      },
      {
        type: "video",
        comp: "Posting",
        title: "Video: Posting ke Buku Besar",
        caption: "Animasi memindahkan jurnal ke T-account.",
      },
      { type: "heading", text: "T-Account: Bentuk Sederhana Buku Besar" },
      {
        type: "paragraph",
        html: "Akun digambarkan seperti huruf 'T': sisi kiri untuk <strong>debit</strong>, sisi kanan untuk <strong>kredit</strong>. Saldo = selisih keduanya.",
      },
      {
        type: "ledger",
        accounts: [
          { name: "Kas", debits: [40_000_000, 1_500_000], credits: [1_000_000, 2_000_000] },
          { name: "Modal Pemilik", debits: [], credits: [40_000_000] },
          { name: "Utang Usaha", debits: [2_000_000], credits: [2_000_000] },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Membaca saldo Kas",
        html: "Total debit = 41.500.000; total kredit = 3.000.000. Saldo = 38.500.000 di sisi <strong>debit</strong> (karena debit lebih besar). Kas adalah aset, jadi saldo debit = wajar.",
      },
      {
        type: "calcExercise",
        prompt:
          "Akun Kas memiliki sisi debit Rp40.000.000 dan Rp1.500.000, serta sisi kredit Rp1.000.000 dan Rp2.000.000. Berapa saldo akhir Kas?",
        answer: 38_500_000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Total debit = 40.000.000 + 1.500.000 = 41.500.000. Total kredit = 1.000.000 + 2.000.000 = 3.000.000. Saldo = 41.500.000 − 3.000.000 = <strong>Rp38.500.000</strong> (sisi debit).",
        hint: "Jumlahkan semua debit, jumlahkan semua kredit, lalu cari selisihnya.",
      },
      { type: "heading", text: "Alur Posting" },
      {
        type: "list",
        ordered: true,
        items: [
          "Ambil setiap baris jurnal.",
          "Pindahkan jumlah debit ke sisi debit akun terkait di buku besar.",
          "Pindahkan jumlah kredit ke sisi kredit akun terkait.",
          "Hitung saldo akhir tiap akun setelah semua diposting.",
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Buku besar sebagai 'rekening koran' internal",
        html: "Pemilik ingin tahu 'sekarang kas kita berapa?'. Ia tidak perlu menjumlah ulang semua jurnal, cukup lihat saldo akun Kas di buku besar. Itulah kekuatan posting: ringkasan saldo per akun yang selalu siap.",
      },
      {
        type: "calcExercise",
        prompt:
          "Akun Utang Usaha (saldo normal kredit) dikredit Rp2.000.000 lalu didebit Rp2.000.000 saat dilunasi. Berapa saldo akhirnya?",
        answer: 0,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Total kredit 2.000.000 dan total debit 2.000.000. Saldo = 2.000.000 − 2.000.000 = <strong>Rp0</strong> (utang sudah lunas).",
        hint: "Untuk akun bersaldo kredit, saldo = total kredit − total debit.",
      },
      {
        type: "case",
        title: "Studi Kasus: Posting Ganda yang Mahal",
        html: "Staf 'Toko Bangun Jaya' tidak sengaja memposting satu jurnal penjualan Rp6.000.000 sebanyak DUA kali ke buku besar. Akibatnya saldo Kas dan Pendapatan masing-masing terlebih Rp6.000.000, dan laba tampak lebih besar. Untungnya saat <em>menelusuri ulang</em> dari jurnal ke buku besar (mencocokkan referensi posting), entri ganda ketahuan. Pelajaran: posting harus 1-jurnal-1-kali, dan nomor referensi membantu menelusuri kesalahan.",
      },
      {
        type: "takeaways",
        items: [
          "Buku besar = kumpulan akun; posting = memindahkan jurnal ke buku besar.",
          "T-account: debit di kiri, kredit di kanan, saldo = selisihnya.",
          "Saldo akun memberi jawaban instan atas 'berapa nilai akun X sekarang?'.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Akun Kas punya total debit Rp10jt dan total kredit Rp4jt. Saldonya?",
            options: ["Rp14jt kredit", "Rp6jt debit", "Rp6jt kredit", "Rp4jt debit"],
            answer: 1,
            explain: "Saldo = 10jt − 4jt = 6jt di sisi debit (debit > kredit, dan Kas memang bersaldo normal debit).",
          },
          {
            q: "Apa yang dimaksud dengan 'posting'?",
            options: [
              "Mencatat transaksi pertama kali di jurnal",
              "Memindahkan angka dari jurnal ke akun-akun di buku besar",
              "Menyusun laporan laba rugi",
              "Menghitung pajak",
            ],
            answer: 1,
            explain:
              "Posting adalah memindahkan jumlah debit/kredit dari jurnal ke sisi yang sesuai pada tiap akun di buku besar.",
          },
          {
            q: "Pada T-account, sisi kiri dan sisi kanan masing-masing untuk…",
            options: [
              "Kredit (kiri) dan Debit (kanan)",
              "Debit (kiri) dan Kredit (kanan)",
              "Pendapatan (kiri) dan Beban (kanan)",
              "Aset (kiri) dan Kewajiban (kanan)",
            ],
            answer: 1,
            explain:
              "Bentuk T: sisi kiri = debit, sisi kanan = kredit. Saldo adalah selisih keduanya.",
          },
          {
            q: "Akun Modal Pemilik dikredit Rp40.000.000 dan tidak ada debit. Saldonya?",
            options: [
              "Rp40jt debit",
              "Rp40jt kredit",
              "Rp0",
              "Tidak bisa ditentukan",
            ],
            answer: 1,
            explain:
              "Modal (ekuitas) bersaldo normal kredit. Tanpa debit, saldonya Rp40jt di sisi kredit.",
          },
          {
            q: "Akun Beban Gaji punya total debit Rp3jt dan total kredit Rp0. Di sisi mana saldonya, dan apakah wajar?",
            options: [
              "Kredit Rp3jt, wajar",
              "Debit Rp3jt, wajar, karena beban bersaldo normal debit",
              "Debit Rp3jt, tidak wajar",
              "Nol, wajar",
            ],
            answer: 1,
            explain:
              "Beban bersaldo normal debit, sehingga saldo Rp3jt di sisi debit adalah wajar.",
          },
          {
            q: "Mengapa buku besar berguna bagi pemilik usaha?",
            options: [
              "Karena menggantikan jurnal sepenuhnya",
              "Karena memberi saldo terkini per akun tanpa menjumlah ulang semua jurnal",
              "Karena otomatis menghitung pajak",
              "Karena menghapus kesalahan jurnal",
            ],
            answer: 1,
            explain:
              "Buku besar meringkas tiap akun, sehingga saldo terkini (mis. kas) langsung terlihat tanpa menghitung ulang seluruh jurnal.",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "neraca-saldo",
    levelId: "dasar",
    order: 7,
    title: "Neraca Saldo",
    summary: "Menguji keseimbangan total debit & kredit sebelum menyusun laporan.",
    durationMin: 13,
    tags: ["neraca saldo", "kontrol"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Neraca Saldo (Trial Balance)</strong> adalah daftar semua akun beserta saldonya pada akhir periode. Fungsinya: memastikan total debit = total kredit sebelum lanjut menyusun laporan keuangan.",
      },
      {
        type: "table",
        caption: "Neraca Saldo, Bengkel Maju Jaya, 31 Jan 2026",
        headers: ["Akun", "Debit (Rp)", "Kredit (Rp)"],
        rows: [
          ["Kas", "38.500.000", "-"],
          ["Perlengkapan", "2.000.000", "-"],
          ["Utang Usaha", "-", "0"],
          ["Modal Pemilik", "-", "40.000.000"],
          ["Pendapatan Servis", "-", "1.500.000"],
          ["Beban Gaji", "1.000.000", "-"],
          ["TOTAL", "41.500.000", "41.500.000"],
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Saldo tiap akun akan muncul di KOLOM mana pada neraca saldo? (sesuai saldo normal)",
        buckets: ["Kolom Debit", "Kolom Kredit"],
        items: [
          { text: "Kas", bucket: "Kolom Debit" },
          { text: "Perlengkapan", bucket: "Kolom Debit" },
          { text: "Utang Usaha", bucket: "Kolom Kredit" },
          { text: "Modal Pemilik", bucket: "Kolom Kredit" },
          { text: "Pendapatan Servis", bucket: "Kolom Kredit" },
          { text: "Beban Gaji", bucket: "Kolom Debit" },
          { text: "Peralatan", bucket: "Kolom Debit" },
          { text: "Utang Bank", bucket: "Kolom Kredit" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah neraca saldo punya saldo: Kas Rp38.500.000, Perlengkapan Rp2.000.000, Beban Gaji Rp1.000.000 (semua debit). Berapa TOTAL kolom debit?",
        answer: 41_500_000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Jumlahkan semua saldo debit: 38.500.000 + 2.000.000 + 1.000.000 = <strong>Rp41.500.000</strong>. Total ini harus sama dengan total kolom kredit.",
        hint: "Total kolom debit = jumlah semua akun bersaldo debit.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Hati-hati: Seimbang ≠ Pasti Benar",
        html: "Neraca saldo yang seimbang TIDAK menjamin tidak ada kesalahan. Contoh kesalahan yang tetap seimbang: lupa mencatat transaksi sama sekali, salah akun (mis. dicatat di 'Beban Listrik' padahal 'Beban Air'), atau angka tertukar di dua sisi.",
      },
      { type: "heading", text: "Jika Tidak Seimbang, Cek…" },
      {
        type: "list",
        items: [
          "Salah hitung penjumlahan.",
          "Saldo akun ditempatkan di kolom yang salah.",
          "Ada jurnal yang hanya diposting satu sisi.",
          "Angka tertukar (mis. 540 ditulis 450, selisihnya habis dibagi 9).",
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Trik 'habis dibagi 9'",
        html: "Selisih neraca saldo Rp90.000. Akuntan langsung curiga ada digit tertukar (transposisi), karena selisih akibat transposisi selalu habis dibagi 9. Benar saja: Rp 360.000 tercatat Rp270.000. Trik kecil yang menghemat berjam-jam pencarian.",
      },
      {
        type: "calcExercise",
        prompt:
          "Total kolom debit neraca saldo Rp50.000.000, tetapi total kredit hanya Rp49.550.000. Berapa selisih yang harus dicari sumbernya?",
        answer: 450_000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Selisih = 50.000.000 − 49.550.000 = <strong>Rp450.000</strong>. Karena 450.000 habis dibagi 9, kemungkinan besar ada angka tertukar (transposisi).",
        hint: "Selisih = total debit − total kredit. Cek apakah hasilnya habis dibagi 9.",
      },
      {
        type: "case",
        title: "Studi Kasus: Seimbang Tapi Salah Akun",
        html: "Neraca saldo 'CV Maju' SEIMBANG sempurna, jadi pemilik tenang. Namun saat audit, ketahuan pembayaran sewa Rp5.000.000 keliru dicatat sebagai <strong>Beban Listrik</strong>. Total debit & kredit tetap sama (karena nominal & sisinya benar, hanya salah nama akun), sehingga neraca saldo TIDAK bisa mendeteksinya. Akibatnya analisis biaya listrik membengkak dan keputusan hemat energi jadi salah sasaran. Pelajaran: neraca saldo menguji keseimbangan angka, <strong>bukan ketepatan akun</strong>.",
      },
      {
        type: "takeaways",
        items: [
          "Neraca saldo mendaftar saldo semua akun untuk menguji keseimbangan debit-kredit.",
          "Seimbang adalah syarat perlu, bukan jaminan bebas kesalahan.",
          "Selisih yang habis dibagi 9 sering menandakan angka tertukar (transposisi).",
          "Ini langkah jembatan sebelum menyusun laporan keuangan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Manakah kesalahan yang TIDAK akan terdeteksi oleh neraca saldo?",
            options: [
              "Salah menjumlah kolom debit",
              "Lupa mencatat satu transaksi sepenuhnya",
              "Memposting debit ke kolom kredit",
              "Salah menyalin satu saldo akun",
            ],
            answer: 1,
            explain:
              "Jika transaksi tidak dicatat sama sekali, kedua sisi tetap seimbang sehingga tidak terdeteksi. Yang lain menyebabkan ketidakseimbangan.",
          },
          {
            q: "Apa fungsi utama neraca saldo?",
            options: [
              "Menghitung laba bersih",
              "Menguji apakah total saldo debit = total saldo kredit sebelum menyusun laporan",
              "Menggantikan buku besar",
              "Menghitung pajak terutang",
            ],
            answer: 1,
            explain:
              "Neraca saldo mendaftar saldo semua akun untuk memastikan total debit = total kredit sebelum laporan keuangan disusun.",
          },
          {
            q: "Selisih neraca saldo Rp270.000 (habis dibagi 9). Penyebab yang paling mungkin?",
            options: [
              "Lupa mencatat transaksi",
              "Angka tertukar / transposisi digit",
              "Salah nama akun",
              "Tidak ada kesalahan",
            ],
            answer: 1,
            explain:
              "Selisih yang habis dibagi 9 adalah ciri khas transposisi (digit tertukar), mis. 360.000 ditulis 270.000.",
          },
          {
            q: "Saldo akun Pendapatan Servis pada neraca saldo seharusnya muncul di kolom…",
            options: ["Debit", "Kredit", "Keduanya", "Tidak muncul"],
            answer: 1,
            explain:
              "Pendapatan bersaldo normal kredit, sehingga muncul di kolom kredit neraca saldo.",
          },
          {
            q: "Jika sebuah jurnal hanya diposting ke sisi debit saja (sisi kredit terlewat), apa akibatnya pada neraca saldo?",
            options: [
              "Tetap seimbang",
              "Total debit lebih besar dari total kredit (tidak seimbang)",
              "Total kredit lebih besar",
              "Tidak berpengaruh",
            ],
            answer: 1,
            explain:
              "Karena hanya debit yang masuk, total debit menjadi lebih besar, neraca saldo tidak seimbang dan kesalahan terdeteksi.",
          },
          {
            q: "Neraca saldo CV Maju seimbang, tetapi sewa dicatat sebagai Beban Listrik. Mengapa tidak terdeteksi?",
            options: [
              "Karena nominalnya salah",
              "Karena nominal & sisi benar, hanya nama akun yang salah, totalnya tetap sama",
              "Karena neraca saldo selalu salah",
              "Karena beban tidak dihitung",
            ],
            answer: 1,
            explain:
              "Salah klasifikasi akun tidak mengubah total debit/kredit, jadi neraca saldo tetap seimbang dan tidak bisa mendeteksinya.",
          },
        ],
      },
    ],
  },
];
