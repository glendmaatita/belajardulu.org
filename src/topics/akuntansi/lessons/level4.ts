import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "kas-rekonsiliasi",
    levelId: "lanjutan",
    order: 1,
    title: "Kas & Rekonsiliasi Bank",
    summary: "Mengelola kas kecil dan mencocokkan catatan perusahaan dengan rekening koran bank.",
    durationMin: 16,
    tags: ["kas", "rekonsiliasi", "bank"],
    blocks: [
      {
        type: "paragraph",
        html: "Kas adalah aset paling likuid sekaligus paling rawan. Karena itu butuh pengendalian: pemisahan tugas, kas kecil (petty cash), dan <strong>rekonsiliasi bank</strong>.",
      },
      { type: "heading", text: "Mengapa Saldo Bank ≠ Saldo Buku?" },
      {
        type: "table",
        headers: ["Penyebab", "Penyesuaian di sisi"],
        rows: [
          ["Setoran dalam proses (deposit in transit)", "Tambah saldo bank"],
          ["Cek beredar (outstanding check)", "Kurangi saldo bank"],
          ["Jasa giro / bunga bank", "Tambah saldo buku"],
          ["Biaya administrasi bank", "Kurangi saldo buku"],
          ["Cek kosong (NSF) dari pelanggan", "Kurangi saldo buku"],
        ],
      },
      {
        type: "classifyExercise",
        prompt:
          "Tempatkan tiap item rekonsiliasi ke pos penyesuaian yang benar.",
        buckets: [
          "Menambah saldo bank",
          "Mengurangi saldo bank",
          "Menambah saldo buku",
          "Mengurangi saldo buku",
        ],
        items: [
          { text: "Setoran dalam proses (deposit in transit)", bucket: "Menambah saldo bank" },
          { text: "Cek beredar (outstanding check)", bucket: "Mengurangi saldo bank" },
          { text: "Jasa giro / bunga bank", bucket: "Menambah saldo buku" },
          { text: "Biaya administrasi bank", bucket: "Mengurangi saldo buku" },
          { text: "Cek kosong (NSF) dari pelanggan", bucket: "Mengurangi saldo buku" },
          { text: "Kesalahan kasir mencatat setoran terlalu kecil", bucket: "Menambah saldo buku" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah rekonsiliasi dengan definisinya.",
        pairs: [
          { left: "Setoran dalam proses", right: "Sudah dicatat perusahaan, belum tercatat bank" },
          { left: "Cek beredar", right: "Sudah ditulis perusahaan, belum dicairkan penerima" },
          { left: "Jasa giro", right: "Bunga dari bank yang baru diketahui dari rekening koran" },
          { left: "Cek kosong (NSF)", right: "Cek pelanggan ditolak karena dananya tidak cukup" },
        ],
      },
      {
        type: "callout",
        tone: "key",
        title: "Tujuan rekonsiliasi",
        html: "Menemukan saldo kas yang BENAR, mendeteksi kesalahan/penipuan, dan menyiapkan jurnal penyesuaian untuk item yang hanya diketahui bank.",
      },
      {
        type: "journal",
        title: "Penyesuaian: biaya admin bank Rp25.000 & jasa giro Rp40.000",
        lines: [
          { account: "Kas", debit: 15_000 },
          { account: "Beban Administrasi Bank", debit: 25_000 },
          { account: "Pendapatan Bunga", credit: 40_000 },
        ],
        note: "Hanya item dari sisi BUKU yang butuh dijurnal. Item sisi bank (cek beredar, setoran dalam proses) tidak dijurnal.",
      },
      {
        type: "calcExercise",
        prompt:
          "Saldo bank Rp12.000.000. Setoran dalam proses Rp3.000.000; cek beredar Rp1.500.000. Berapa saldo bank yang BENAR (rekonsiliasi sisi bank)?",
        answer: 13_500_000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Saldo bank benar = 12.000.000 + 3.000.000 (setoran dalam proses) − 1.500.000 (cek beredar) = Rp13.500.000.",
        hint: "Setoran dalam proses menambah, cek beredar mengurangi sisi bank.",
      },
      {
        type: "calcExercise",
        prompt:
          "Saldo buku Rp10.000.000. Jasa giro Rp50.000; biaya admin bank Rp25.000; cek kosong pelanggan Rp200.000. Berapa saldo buku yang BENAR?",
        answer: 9_825_000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Saldo buku benar = 10.000.000 + 50.000 − 25.000 − 200.000 = Rp9.825.000.",
        hint: "Jasa giro menambah; biaya admin dan cek kosong mengurangi saldo buku.",
      },
      {
        type: "case",
        title: "Studi Kasus: Mendeteksi penggelapan",
        html: "Seorang kasir diam-diam mengambil kas dan tidak menyetor sebagian. Rekonsiliasi bank bulanan menunjukkan 'setoran dalam proses' yang tak pernah masuk rekening, sinyal kuat adanya penyelewengan. Rekonsiliasi rutin adalah benteng pengendalian internal.",
      },
      {
        type: "case",
        title: "Studi Kasus: Kas kecil sistem imprest",
        html: "Toko 'Sumber Rejeki' menetapkan kas kecil Rp1.000.000 dengan sistem imprest. Akhir bulan, kas fisik tersisa Rp150.000 dengan bukti pengeluaran Rp840.000, selisih Rp10.000 dicatat sebagai <strong>Selisih Kas</strong>. Pengisian kembali dijurnal: debit beban-beban (Rp840.000) + Beban Selisih Kas (Rp10.000), kredit Kas Rp850.000. <em>Pelajaran:</em> sistem imprest memaksa setiap rupiah dipertanggungjawabkan dengan bukti.",
      },
      {
        type: "takeaways",
        items: [
          "Kas butuh pengendalian internal kuat karena paling likuid.",
          "Rekonsiliasi mencocokkan saldo buku vs rekening koran bank.",
          "Hanya item sisi buku yang perlu dijurnal penyesuaian.",
          "Rekonsiliasi rutin mendeteksi kesalahan & kecurangan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Cek yang sudah ditulis perusahaan tapi belum dicairkan penerima disebut…",
            options: ["Setoran dalam proses", "Cek beredar", "Cek kosong", "Jasa giro"],
            answer: 1,
            explain: "Cek beredar (outstanding) mengurangi saldo bank dalam rekonsiliasi; tidak dijurnal.",
          },
          {
            q: "Item rekonsiliasi mana yang HARUS dijurnal penyesuaian?",
            options: [
              "Cek beredar",
              "Setoran dalam proses",
              "Biaya administrasi bank",
              "Kesalahan pencatatan oleh pihak bank",
            ],
            answer: 2,
            explain: "Hanya item sisi BUKU yang dijurnal. Biaya admin bank baru diketahui dari rekening koran, jadi perlu dijurnal. Item sisi bank tidak dijurnal.",
          },
          {
            q: "Saldo bank Rp8.000.000, setoran dalam proses Rp2.000.000, cek beredar Rp500.000. Saldo bank yang benar?",
            options: ["Rp9.500.000", "Rp10.500.000", "Rp6.500.000", "Rp5.500.000"],
            answer: 0,
            explain: "8.000.000 + 2.000.000 − 500.000 = Rp9.500.000.",
          },
          {
            q: "Jasa giro yang diterima dari bank dalam rekonsiliasi akan…",
            options: [
              "Mengurangi saldo bank",
              "Menambah saldo buku",
              "Mengurangi saldo buku",
              "Menambah saldo bank",
            ],
            answer: 1,
            explain: "Jasa giro adalah pendapatan yang baru diketahui dari rekening koran, sehingga menambah saldo buku dan dijurnal (debit Kas, kredit Pendapatan Bunga).",
          },
          {
            q: "Pengendalian internal kas yang paling mendasar adalah…",
            options: [
              "Menyatukan tugas pencatat dan pemegang kas",
              "Pemisahan tugas (segregation of duties)",
              "Menyimpan semua kas tunai di laci",
              "Menghapus rekonsiliasi agar hemat waktu",
            ],
            answer: 1,
            explain: "Pemisahan tugas mencegah satu orang menguasai seluruh siklus kas, mengurangi peluang kecurangan.",
          },
          {
            q: "Cek kosong (NSF) dari pelanggan dalam rekonsiliasi diperlakukan sebagai…",
            options: [
              "Menambah saldo buku",
              "Mengurangi saldo buku",
              "Menambah saldo bank",
              "Tidak ada penyesuaian",
            ],
            answer: 1,
            explain: "Kas yang dikira diterima ternyata gagal cair, sehingga saldo buku harus dikurangi (dan piutang pelanggan diakui kembali).",
          },
          {
            q: "Sistem kas kecil imprest berarti…",
            options: [
              "Saldo kas kecil dibiarkan berubah-ubah",
              "Dana kas kecil dipertahankan pada jumlah tetap dan diisi ulang sesuai pengeluaran",
              "Kas kecil tidak butuh bukti pengeluaran",
              "Semua transaksi besar lewat kas kecil",
            ],
            answer: 1,
            explain: "Pada sistem imprest, dana kas kecil dijaga tetap; pengisian ulang sebesar total bukti pengeluaran sehingga setiap rupiah dapat dipertanggungjawabkan.",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "piutang",
    levelId: "lanjutan",
    order: 2,
    title: "Piutang & Penyisihan Piutang Tak Tertagih",
    summary: "Mencatat penjualan kredit dan mengantisipasi piutang yang gagal tertagih.",
    durationMin: 17,
    tags: ["piutang", "kerugian piutang"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Piutang usaha</strong> timbul dari penjualan kredit. Sebagian piutang berisiko tidak tertagih. Akuntansi mengantisipasinya lewat <strong>penyisihan (allowance)</strong>.",
      },
      { type: "heading", text: "Dua Metode" },
      {
        type: "list",
        items: [
          "<strong>Metode penghapusan langsung</strong>: kerugian dicatat saat piutang benar-benar macet. Sederhana, tapi kurang sesuai prinsip pengaitan (matching).",
          "<strong>Metode penyisihan (allowance)</strong>: mengestimasi kerugian di akhir periode. Lebih sesuai PSAK & dianjurkan.",
        ],
      },
      {
        type: "journal",
        date: "31 Des",
        title: "Penyisihan: estimasi piutang tak tertagih Rp3.000.000",
        lines: [
          { account: "Beban Kerugian Piutang", debit: 3_000_000 },
          { account: "Penyisihan Piutang Tak Tertagih", credit: 3_000_000 },
        ],
        note: "'Penyisihan' adalah kontra-aset, pengurang Piutang Usaha di neraca → menghasilkan 'Piutang neto'.",
      },
      {
        type: "journal",
        title: "Saat piutang benar-benar dihapus (Rp500.000), metode penyisihan",
        lines: [
          { account: "Penyisihan Piutang Tak Tertagih", debit: 500_000 },
          { account: "Piutang Usaha", credit: 500_000 },
        ],
        note: "Penghapusan memakai saldo penyisihan, tidak menyentuh beban lagi (sudah diestimasi sebelumnya).",
      },
      {
        type: "journalExercise",
        prompt:
          "Akhir tahun, perusahaan mengestimasi piutang tak tertagih Rp4.500.000. Buat jurnal penyesuaiannya (metode penyisihan).",
        accounts: [
          "Beban Kerugian Piutang",
          "Penyisihan Piutang Tak Tertagih",
          "Piutang Usaha",
          "Kas",
        ],
        answer: [
          { account: "Beban Kerugian Piutang", debit: 4_500_000 },
          { account: "Penyisihan Piutang Tak Tertagih", credit: 4_500_000 },
        ],
        hint: "Estimasi → debit beban, kredit kontra-aset (penyisihan).",
      },
      {
        type: "journalExercise",
        prompt:
          "Piutang pelanggan CV Maju sebesar Rp700.000 dipastikan macet dan dihapus. Buat jurnal penghapusan dengan metode penyisihan.",
        accounts: [
          "Penyisihan Piutang Tak Tertagih",
          "Piutang Usaha",
          "Beban Kerugian Piutang",
          "Kas",
        ],
        answer: [
          { account: "Penyisihan Piutang Tak Tertagih", debit: 700_000 },
          { account: "Piutang Usaha", credit: 700_000 },
        ],
        hint: "Penghapusan memakai saldo penyisihan, bukan beban. Debit penyisihan, kredit piutang.",
      },
      { type: "heading", text: "Cara Mengestimasi" },
      {
        type: "list",
        items: [
          "<strong>Persentase dari penjualan</strong>: fokus laporan laba rugi.",
          "<strong>Persentase dari piutang / umur piutang (aging)</strong>: fokus neraca; makin tua piutang, makin tinggi % risiko.",
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Saldo Piutang Usaha Rp80.000.000. Perusahaan mengestimasi 5% tak tertagih. Berapa saldo Penyisihan yang ditargetkan?",
        answer: 4_000_000,
        tolerance: 0,
        prefix: "Rp",
        solution: "5% × Rp80.000.000 = Rp4.000.000.",
        hint: "Penyisihan = % risiko × saldo piutang.",
      },
      {
        type: "calcExercise",
        prompt:
          "Aging: <30 hari Rp50.000.000 (1%), 31–90 hari Rp20.000.000 (5%), >90 hari Rp8.000.000 (25%). Berapa total penyisihan yang diperlukan?",
        answer: 3_500_000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "(1% × 50jt) + (5% × 20jt) + (25% × 8jt) = 500.000 + 1.000.000 + 2.000.000 = Rp3.500.000.",
        hint: "Hitung penyisihan tiap kelompok umur lalu jumlahkan.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah piutang dengan maknanya.",
        pairs: [
          { left: "Metode penyisihan", right: "Mengestimasi kerugian di akhir periode" },
          { left: "Penghapusan langsung", right: "Mencatat rugi saat piutang benar-benar macet" },
          { left: "Piutang neto", right: "Piutang Usaha − Penyisihan" },
          { left: "Aging schedule", right: "Tabel piutang menurut umur untuk estimasi risiko" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Analisis umur piutang",
        html: "Sebuah distributor membuat tabel umur piutang: piutang <30 hari berisiko 1%, 31–90 hari 5%, >90 hari 25%. Hasilnya membuat manajemen memperketat penagihan pelanggan tua sebelum menjadi kerugian.",
      },
      {
        type: "case",
        title: "Studi Kasus: Pelanggan yang sudah dihapus tiba-tiba membayar",
        html: "PT Sentosa pernah menghapus piutang PT Berkah Rp1.200.000 (debit Penyisihan, kredit Piutang). Enam bulan kemudian PT Berkah membayar penuh. Akuntan <strong>memunculkan kembali</strong> piutang (debit Piutang Usaha, kredit Penyisihan), lalu mencatat penerimaan kas (debit Kas, kredit Piutang Usaha). <em>Pelajaran:</em> pemulihan piutang (recovery) tidak boleh langsung diakui sebagai pendapatan, kembalikan dulu ke piutang agar jejak audit jelas.",
      },
      {
        type: "takeaways",
        items: [
          "Penjualan kredit menimbulkan piutang yang sebagian berisiko macet.",
          "Metode penyisihan (allowance) lebih sesuai PSAK daripada penghapusan langsung.",
          "Penyisihan = kontra-aset → Piutang neto di neraca.",
          "Estimasi via % penjualan atau analisis umur piutang (aging).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Akun 'Penyisihan Piutang Tak Tertagih' tergolong…",
            options: ["Beban", "Aset biasa", "Kontra-aset", "Kewajiban"],
            answer: 2,
            explain: "Penyisihan adalah kontra-aset yang mengurangi Piutang Usaha menjadi nilai bersih (neto).",
          },
          {
            q: "Saat piutang Rp600.000 dihapus dengan metode penyisihan, jurnalnya…",
            options: [
              "Debit Beban Kerugian Piutang, kredit Piutang Usaha",
              "Debit Penyisihan Piutang Tak Tertagih, kredit Piutang Usaha",
              "Debit Piutang Usaha, kredit Penyisihan",
              "Debit Kas, kredit Piutang Usaha",
            ],
            answer: 1,
            explain: "Penghapusan memakai saldo penyisihan: debit Penyisihan, kredit Piutang Usaha. Beban tidak disentuh lagi.",
          },
          {
            q: "Piutang Usaha Rp100.000.000, estimasi tak tertagih 3%. Saldo penyisihan yang ditargetkan?",
            options: ["Rp3.000.000", "Rp30.000.000", "Rp300.000", "Rp1.500.000"],
            answer: 0,
            explain: "3% × Rp100.000.000 = Rp3.000.000.",
          },
          {
            q: "Mengapa metode penyisihan lebih sesuai PSAK daripada penghapusan langsung?",
            options: [
              "Lebih mudah dihitung",
              "Mengaitkan beban kerugian dengan pendapatan periode yang sama (matching)",
              "Menghindari pajak",
              "Tidak perlu estimasi",
            ],
            answer: 1,
            explain: "Metode penyisihan mengakui estimasi kerugian pada periode penjualan, sesuai prinsip pengaitan (matching).",
          },
          {
            q: "Piutang Usaha Rp50.000.000 dan Penyisihan Rp2.000.000. Berapa piutang neto di neraca?",
            options: ["Rp52.000.000", "Rp48.000.000", "Rp50.000.000", "Rp2.000.000"],
            answer: 1,
            explain: "Piutang neto = 50.000.000 − 2.000.000 = Rp48.000.000.",
          },
          {
            q: "Metode estimasi yang berfokus pada laporan laba rugi adalah…",
            options: [
              "Persentase dari piutang",
              "Analisis umur piutang (aging)",
              "Persentase dari penjualan",
              "Penghapusan langsung",
            ],
            answer: 2,
            explain: "Persentase dari penjualan menekankan pengaitan beban dengan pendapatan (fokus laba rugi); aging dan % piutang fokus pada nilai neraca.",
          },
          {
            q: "Pelanggan yang piutangnya sudah dihapus tiba-tiba membayar. Langkah pertama yang benar…",
            options: [
              "Catat langsung sebagai pendapatan lain-lain",
              "Munculkan kembali piutang (debit Piutang, kredit Penyisihan) lalu catat penerimaan kas",
              "Abaikan karena sudah dihapus",
              "Debit Kas, kredit Beban Kerugian Piutang",
            ],
            answer: 1,
            explain: "Pemulihan piutang dibalik dulu (debit Piutang, kredit Penyisihan), baru penerimaan kas dicatat, menjaga jejak audit yang jelas.",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "aset-tetap-penyusutan",
    levelId: "lanjutan",
    order: 3,
    title: "Aset Tetap & Penyusutan",
    summary: "Menghitung penyusutan dengan garis lurus & saldo menurun. Dengan kalkulator interaktif.",
    durationMin: 20,
    tags: ["aset tetap", "depresiasi", "penyusutan"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Aset tetap</strong> (peralatan, kendaraan, gedung) dipakai bertahun-tahun. Biayanya tidak dibebankan sekaligus, melainkan dialokasikan selama masa manfaat lewat <strong>penyusutan (depresiasi)</strong>.",
      },
      {
        type: "video",
        comp: "Penyusutan",
        title: "Video: Garis Lurus vs Saldo Menurun",
        caption: "Animasi membandingkan pola dua metode penyusutan.",
      },
      { type: "heading", text: "Metode Garis Lurus (Straight Line)" },
      {
        type: "callout",
        tone: "key",
        html: "Penyusutan/tahun = (Harga Perolehan − Nilai Residu) ÷ Umur Manfaat",
      },
      {
        type: "paragraph",
        html: "Contoh: mesin Rp50.000.000, nilai residu Rp5.000.000, umur 5 tahun → (50jt − 5jt) ÷ 5 = <strong>Rp9.000.000/tahun</strong>.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kendaraan Rp120.000.000, nilai residu Rp20.000.000, umur manfaat 8 tahun. Berapa penyusutan per tahun (garis lurus)?",
        answer: 12_500_000,
        tolerance: 0,
        prefix: "Rp",
        solution: "(120.000.000 − 20.000.000) ÷ 8 = 100.000.000 ÷ 8 = Rp12.500.000 per tahun.",
        hint: "(Harga − Residu) ÷ Umur manfaat.",
      },
      { type: "heading", text: "Metode Saldo Menurun Ganda (Double Declining)" },
      {
        type: "paragraph",
        html: "Penyusutan lebih besar di tahun-tahun awal. Tarif = 2 × (1 ÷ umur). Diterapkan ke <em>nilai buku</em> (bukan harga perolehan), dan mengabaikan residu sampai mendekati nilai residu.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Bandingkan kedua metode 👇",
        html: "Masukkan harga perolehan, residu, dan umur manfaat, lalu lihat tabel penyusutan tahunan untuk garis lurus & saldo menurun.",
      },
      { type: "widget", widget: "KalkulatorPenyusutan" },
      {
        type: "journal",
        title: "Jurnal penyusutan tahunan (garis lurus, Rp9.000.000)",
        lines: [
          { account: "Beban Penyusutan", debit: 9_000_000 },
          { account: "Akumulasi Penyusutan Mesin", credit: 9_000_000 },
        ],
      },
      {
        type: "journalExercise",
        prompt:
          "Penyusutan tahunan sebuah peralatan adalah Rp7.500.000. Buat jurnal penyesuaian penyusutan akhir tahun.",
        accounts: [
          "Beban Penyusutan",
          "Akumulasi Penyusutan Peralatan",
          "Peralatan",
          "Kas",
        ],
        answer: [
          { account: "Beban Penyusutan", debit: 7_500_000 },
          { account: "Akumulasi Penyusutan Peralatan", credit: 7_500_000 },
        ],
        hint: "Debit Beban Penyusutan, kredit Akumulasi Penyusutan (kontra-aset). Aset tidak dikreditkan langsung.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Nilai Buku",
        html: "Nilai Buku = Harga Perolehan − Akumulasi Penyusutan. Inilah nilai aset yang tampil di neraca.",
      },
      {
        type: "calcExercise",
        prompt:
          "Mesin Rp50.000.000 disusutkan Rp9.000.000/tahun. Setelah 3 tahun, berapa nilai bukunya?",
        answer: 23_000_000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Akumulasi penyusutan 3 tahun = 3 × 9.000.000 = 27.000.000. Nilai buku = 50.000.000 − 27.000.000 = Rp23.000.000.",
        hint: "Nilai Buku = Harga Perolehan − Akumulasi Penyusutan.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan metode/istilah penyusutan dengan cirinya.",
        pairs: [
          { left: "Garis lurus", right: "Beban penyusutan sama tiap tahun" },
          { left: "Saldo menurun ganda", right: "Beban besar di awal, diterapkan ke nilai buku" },
          { left: "Akumulasi Penyusutan", right: "Kontra-aset pengurang harga perolehan" },
          { left: "Tanah", right: "Tidak disusutkan (masa manfaat tak terbatas)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memilih metode untuk kendaraan",
        html: "Perusahaan rental memilih saldo menurun untuk mobil karena nilai mobil anjlok cepat di tahun-tahun awal, metode ini lebih mencerminkan penurunan nilai ekonomi sebenarnya dibanding garis lurus.",
      },
      {
        type: "case",
        title: "Studi Kasus: Menjual mesin lebih awal",
        html: "PT Karya Logam menjual mesin (harga perolehan Rp50.000.000, akumulasi penyusutan Rp27.000.000, nilai buku Rp23.000.000) seharga Rp25.000.000 tunai. Karena harga jual > nilai buku, ada <strong>laba penjualan aset Rp2.000.000</strong>. Jurnal: debit Kas Rp25.000.000 dan Akumulasi Penyusutan Rp27.000.000; kredit Mesin Rp50.000.000 dan Laba Penjualan Aset Rp2.000.000. <em>Pelajaran:</em> laba/rugi pelepasan dihitung dari nilai buku, bukan harga perolehan.",
      },
      {
        type: "takeaways",
        items: [
          "Aset tetap disusutkan selama masa manfaat, bukan dibebankan sekaligus.",
          "Garis lurus: beban tetap tiap tahun.",
          "Saldo menurun ganda: beban besar di awal, diterapkan ke nilai buku.",
          "Nilai Buku = Harga Perolehan − Akumulasi Penyusutan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mesin Rp30jt, residu Rp0, umur 6 tahun (garis lurus). Penyusutan/tahun?",
            options: ["Rp6jt", "Rp5jt", "Rp30jt", "Rp3jt"],
            answer: 1,
            explain: "(30jt − 0) ÷ 6 = Rp5jt per tahun.",
          },
          {
            q: "Tanah biasanya TIDAK disusutkan karena…",
            options: [
              "Harganya murah",
              "Masa manfaatnya dianggap tak terbatas",
              "Bukan aset",
              "Sudah termasuk gedung",
            ],
            answer: 1,
            explain: "Tanah dianggap memiliki masa manfaat tak terbatas, sehingga tidak disusutkan.",
          },
          {
            q: "Jurnal penyusutan tahunan yang benar adalah…",
            options: [
              "Debit Akumulasi Penyusutan, kredit Beban Penyusutan",
              "Debit Beban Penyusutan, kredit Akumulasi Penyusutan",
              "Debit Beban Penyusutan, kredit Mesin",
              "Debit Mesin, kredit Kas",
            ],
            answer: 1,
            explain: "Debit Beban Penyusutan (laba rugi), kredit Akumulasi Penyusutan (kontra-aset). Aset tidak dikreditkan langsung.",
          },
          {
            q: "Akun 'Akumulasi Penyusutan' tergolong…",
            options: ["Beban", "Kontra-aset", "Liabilitas", "Pendapatan"],
            answer: 1,
            explain: "Akumulasi Penyusutan adalah kontra-aset yang mengurangi harga perolehan aset menjadi nilai buku.",
          },
          {
            q: "Mesin Rp40jt, residu Rp4jt, umur 6 tahun. Penyusutan garis lurus per tahun?",
            options: ["Rp6jt", "Rp7jt", "Rp6,67jt", "Rp5jt"],
            answer: 0,
            explain: "(40jt − 4jt) ÷ 6 = 36jt ÷ 6 = Rp6jt per tahun.",
          },
          {
            q: "Saldo menurun ganda diterapkan terhadap…",
            options: [
              "Harga perolehan setiap tahun",
              "Nilai buku awal tahun",
              "Nilai residu",
              "Akumulasi penyusutan",
            ],
            answer: 1,
            explain: "Tarif saldo menurun (2 × 1/umur) dikalikan nilai buku awal tahun, sehingga beban makin kecil tiap tahun.",
          },
          {
            q: "Aset dengan nilai buku Rp10jt dijual Rp12jt tunai. Hasilnya…",
            options: [
              "Rugi Rp2jt",
              "Laba Rp2jt",
              "Tidak untung/rugi",
              "Laba Rp12jt",
            ],
            answer: 1,
            explain: "Harga jual Rp12jt > nilai buku Rp10jt → laba penjualan aset Rp2jt.",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "liabilitas",
    levelId: "lanjutan",
    order: 4,
    title: "Liabilitas (Kewajiban)",
    summary: "Utang jangka pendek & panjang, utang wesel, dan bunga.",
    durationMin: 14,
    tags: ["kewajiban", "utang", "bunga"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Liabilitas</strong> adalah kewajiban kini perusahaan untuk menyerahkan sumber daya di masa depan. Dibagi jangka pendek (≤1 tahun) dan jangka panjang (>1 tahun).",
      },
      {
        type: "table",
        headers: ["Jenis", "Contoh"],
        rows: [
          ["Jangka pendek", "Utang usaha, utang gaji, utang pajak, utang wesel <1 thn"],
          ["Jangka panjang", "Utang bank jangka panjang, obligasi, utang hipotek"],
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Klasifikasikan tiap kewajiban sebagai jangka pendek atau jangka panjang.",
        buckets: ["Jangka pendek", "Jangka panjang"],
        items: [
          { text: "Utang usaha jatuh tempo 30 hari", bucket: "Jangka pendek" },
          { text: "Utang gaji karyawan", bucket: "Jangka pendek" },
          { text: "Utang pajak bulan ini", bucket: "Jangka pendek" },
          { text: "Obligasi jatuh tempo 5 tahun", bucket: "Jangka panjang" },
          { text: "Utang hipotek 10 tahun", bucket: "Jangka panjang" },
          { text: "Utang bank jangka panjang", bucket: "Jangka panjang" },
        ],
      },
      { type: "heading", text: "Utang Wesel & Bunga" },
      {
        type: "callout",
        tone: "key",
        html: "Bunga = Pokok × Tarif × Waktu (dalam tahun)",
      },
      {
        type: "journal",
        title: "Meminjam Rp24.000.000, bunga 10%/tahun, 1 tahun",
        lines: [
          { account: "Kas", debit: 24_000_000 },
          { account: "Utang Wesel", credit: 24_000_000 },
        ],
      },
      {
        type: "journal",
        title: "Penyesuaian bunga 3 bulan berjalan",
        lines: [
          { account: "Beban Bunga", debit: 600_000 },
          { account: "Utang Bunga", credit: 600_000 },
        ],
        note: "Bunga 3 bln = 24jt × 10% × 3/12 = Rp600.000.",
      },
      {
        type: "calcExercise",
        prompt:
          "Perusahaan meminjam Rp36.000.000 dengan bunga 9% per tahun. Berapa bunga untuk 4 bulan?",
        answer: 1_080_000,
        tolerance: 0,
        prefix: "Rp",
        solution: "36.000.000 × 9% × 4/12 = 3.240.000 × 4/12 = Rp1.080.000.",
        hint: "Bunga = Pokok × Tarif × Waktu (dalam tahun).",
      },
      {
        type: "journalExercise",
        prompt:
          "Perusahaan menerbitkan utang wesel dan menerima kas Rp15.000.000. Buat jurnalnya.",
        accounts: ["Kas", "Utang Wesel", "Beban Bunga", "Utang Bunga"],
        answer: [
          { account: "Kas", debit: 15_000_000 },
          { account: "Utang Wesel", credit: 15_000_000 },
        ],
        hint: "Menerima kas → debit Kas; timbul kewajiban → kredit Utang Wesel.",
      },
      {
        type: "journalExercise",
        prompt:
          "Akhir periode, bunga yang sudah berjalan tapi belum dibayar adalah Rp450.000. Buat jurnal penyesuaiannya.",
        accounts: ["Beban Bunga", "Utang Bunga", "Kas", "Utang Wesel"],
        answer: [
          { account: "Beban Bunga", debit: 450_000 },
          { account: "Utang Bunga", credit: 450_000 },
        ],
        hint: "Bunga berjalan diakui: debit Beban Bunga, kredit Utang Bunga.",
      },
      {
        type: "case",
        title: "Studi Kasus: Rasio lancar terlalu rendah",
        html: "Bank menolak pinjaman karena liabilitas jangka pendek perusahaan melebihi aset lancarnya (rasio lancar < 1). Memahami klasifikasi jangka pendek vs panjang penting untuk menjaga likuiditas & kelayakan kredit.",
      },
      {
        type: "case",
        title: "Studi Kasus: Bagian lancar utang jangka panjang",
        html: "PT Bangun Jaya punya utang bank Rp500.000.000 berjangka 5 tahun, dengan angsuran pokok Rp100.000.000 jatuh tempo tahun depan. Dalam neraca, Rp100.000.000 itu direklasifikasi menjadi <strong>liabilitas jangka pendek</strong> (current portion of long-term debt), sisanya Rp400.000.000 tetap jangka panjang. <em>Pelajaran:</em> klasifikasi mengikuti tanggal jatuh tempo, bukan jenis pinjaman aslinya.",
      },
      {
        type: "takeaways",
        items: [
          "Liabilitas dibagi jangka pendek (≤1 thn) & jangka panjang.",
          "Bunga = Pokok × Tarif × Waktu.",
          "Bunga yang sudah berjalan namun belum dibayar diakui sebagai Utang Bunga.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pinjam Rp50jt, bunga 12%/tahun. Bunga untuk 6 bulan?",
            options: ["Rp6jt", "Rp3jt", "Rp12jt", "Rp1,5jt"],
            answer: 1,
            explain: "50jt × 12% × 6/12 = Rp3jt.",
          },
          {
            q: "Manakah yang termasuk liabilitas jangka panjang?",
            options: ["Utang gaji", "Utang pajak", "Obligasi 5 tahun", "Utang usaha 30 hari"],
            answer: 2,
            explain: "Obligasi 5 tahun jatuh tempo lebih dari satu tahun, sehingga tergolong jangka panjang.",
          },
          {
            q: "Bunga yang sudah berjalan tetapi belum dibayar diakui sebagai…",
            options: ["Beban dibayar di muka", "Utang Bunga", "Pendapatan Bunga", "Kas"],
            answer: 1,
            explain: "Bunga berjalan yang belum dibayar adalah kewajiban: kredit Utang Bunga (lawan debit Beban Bunga).",
          },
          {
            q: "Jurnal saat menerima kas dari penerbitan utang wesel adalah…",
            options: [
              "Debit Utang Wesel, kredit Kas",
              "Debit Kas, kredit Utang Wesel",
              "Debit Kas, kredit Pendapatan",
              "Debit Beban Bunga, kredit Kas",
            ],
            answer: 1,
            explain: "Menerima kas → debit Kas; timbul kewajiban → kredit Utang Wesel.",
          },
          {
            q: "Pinjam Rp60jt, bunga 10%/tahun. Bunga untuk 3 bulan?",
            options: ["Rp6jt", "Rp1,5jt", "Rp3jt", "Rp600rb"],
            answer: 1,
            explain: "60jt × 10% × 3/12 = 6jt × 3/12 = Rp1,5jt.",
          },
          {
            q: "Angsuran pokok utang jangka panjang yang jatuh tempo dalam 12 bulan ke depan…",
            options: [
              "Tetap jangka panjang seluruhnya",
              "Direklasifikasi menjadi liabilitas jangka pendek",
              "Dihapus dari neraca",
              "Menjadi pendapatan",
            ],
            answer: 1,
            explain: "Bagian yang jatuh tempo ≤1 tahun (current portion) direklasifikasi sebagai liabilitas jangka pendek.",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "akuntansi-biaya",
    levelId: "lanjutan",
    order: 5,
    title: "Pengantar Akuntansi Biaya",
    summary: "Klasifikasi biaya, biaya tetap vs variabel, dan analisis titik impas (BEP).",
    durationMin: 18,
    tags: ["biaya", "BEP", "manajemen"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Akuntansi biaya</strong> membantu manajemen memahami struktur biaya untuk menetapkan harga, anggaran, dan keputusan produksi.",
      },
      { type: "heading", text: "Klasifikasi Biaya" },
      {
        type: "list",
        items: [
          "<strong>Biaya tetap (fixed)</strong>: tidak berubah dengan volume (sewa, gaji tetap).",
          "<strong>Biaya variabel</strong>: berubah sebanding volume (bahan baku, komisi).",
          "<strong>Biaya semivariabel</strong>: campuran (listrik: ada beban tetap + pemakaian).",
          "<strong>Biaya langsung vs tidak langsung</strong>: bisa/tak bisa ditelusuri ke produk tertentu.",
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap biaya sebagai biaya tetap atau biaya variabel.",
        buckets: ["Tetap", "Variabel"],
        items: [
          { text: "Sewa gedung pabrik per bulan", bucket: "Tetap" },
          { text: "Gaji tetap manajer", bucket: "Tetap" },
          { text: "Penyusutan mesin (garis lurus)", bucket: "Tetap" },
          { text: "Bahan baku per unit", bucket: "Variabel" },
          { text: "Komisi penjualan per unit terjual", bucket: "Variabel" },
          { text: "Upah borongan per potong", bucket: "Variabel" },
        ],
      },
      { type: "heading", text: "Titik Impas (Break Even Point)" },
      {
        type: "callout",
        tone: "key",
        html: "BEP (unit) = Biaya Tetap ÷ (Harga Jual per unit − Biaya Variabel per unit)<br/>Penyebutnya disebut <strong>margin kontribusi</strong> per unit.",
      },
      {
        type: "paragraph",
        html: "Contoh: biaya tetap Rp10.000.000/bln, harga jual Rp50.000, biaya variabel Rp30.000. Margin kontribusi = Rp20.000. BEP = 10jt ÷ 20rb = <strong>500 unit/bulan</strong> agar tidak rugi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Biaya tetap Rp24.000.000/bln, harga jual Rp40.000/unit, biaya variabel Rp25.000/unit. Berapa BEP dalam unit?",
        answer: 1600,
        tolerance: 0,
        suffix: "unit",
        solution:
          "Margin kontribusi = 40.000 − 25.000 = 15.000. BEP = 24.000.000 ÷ 15.000 = 1.600 unit.",
        hint: "BEP unit = Biaya Tetap ÷ (Harga jual − Biaya variabel per unit).",
      },
      {
        type: "calcExercise",
        prompt:
          "Harga jual Rp80.000/unit, biaya variabel Rp50.000/unit. Berapa margin kontribusi per unit?",
        answer: 30_000,
        tolerance: 0,
        prefix: "Rp",
        solution: "Margin kontribusi = 80.000 − 50.000 = Rp30.000 per unit.",
        hint: "Margin kontribusi = Harga jual − Biaya variabel per unit.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah akuntansi biaya dengan maknanya.",
        pairs: [
          { left: "Biaya tetap", right: "Tidak berubah dengan volume produksi" },
          { left: "Biaya variabel", right: "Berubah sebanding dengan volume" },
          { left: "Margin kontribusi", right: "Harga jual − biaya variabel per unit" },
          { left: "Titik impas (BEP)", right: "Volume saat laba = nol" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Haruskah terima pesanan murah?",
        html: "Sebuah pabrik kapasitas menganggur ditawari pesanan di bawah harga normal. Selama harga masih di atas biaya variabel, pesanan itu tetap menambah margin kontribusi (menutup biaya tetap). Akuntansi biaya membuat keputusan ini rasional, bukan sekadar firasat.",
      },
      {
        type: "case",
        title: "Studi Kasus: Target laba kedai kopi",
        html: "Kedai 'Kopi Senja' punya biaya tetap Rp9.000.000/bln. Harga jual segelas Rp25.000 dengan biaya variabel Rp10.000 (margin kontribusi Rp15.000). BEP = 9.000.000 ÷ 15.000 = 600 gelas/bln. Untuk laba Rp3.000.000, target = (9.000.000 + 3.000.000) ÷ 15.000 = <strong>800 gelas/bln</strong>. <em>Pelajaran:</em> target laba dihitung dengan menambahkan laba yang diinginkan ke biaya tetap, lalu dibagi margin kontribusi.",
      },
      {
        type: "takeaways",
        items: [
          "Biaya: tetap, variabel, semivariabel; langsung vs tidak langsung.",
          "Margin kontribusi = Harga − Biaya variabel per unit.",
          "BEP (unit) = Biaya Tetap ÷ Margin kontribusi per unit.",
          "Keputusan harga & pesanan khusus berbasis margin kontribusi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Biaya tetap Rp20jt, margin kontribusi per unit Rp25rb. BEP?",
            options: ["500 unit", "800 unit", "1.000 unit", "1.250 unit"],
            answer: 1,
            explain: "BEP = 20.000.000 ÷ 25.000 = 800 unit.",
          },
          {
            q: "Komisi penjualan per unit terjual tergolong biaya…",
            options: ["Tetap", "Variabel", "Semivariabel", "Tidak langsung tetap"],
            answer: 1,
            explain: "Komisi naik turun sebanding dengan jumlah unit terjual, jadi biaya variabel.",
          },
          {
            q: "Margin kontribusi per unit dihitung dengan…",
            options: [
              "Harga jual + biaya variabel",
              "Harga jual − biaya variabel per unit",
              "Biaya tetap ÷ unit",
              "Harga jual − biaya tetap",
            ],
            answer: 1,
            explain: "Margin kontribusi per unit = Harga jual − Biaya variabel per unit; itulah kontribusi tiap unit untuk menutup biaya tetap.",
          },
          {
            q: "Biaya tetap Rp30jt, harga jual Rp60rb, biaya variabel Rp40rb. BEP?",
            options: ["1.000 unit", "1.500 unit", "750 unit", "2.000 unit"],
            answer: 1,
            explain: "Margin = 60.000 − 40.000 = 20.000. BEP = 30.000.000 ÷ 20.000 = 1.500 unit.",
          },
          {
            q: "Sewa pabrik bulanan yang tidak berubah dengan volume produksi adalah biaya…",
            options: ["Variabel", "Tetap", "Langsung", "Marginal"],
            answer: 1,
            explain: "Sewa tetap jumlahnya berapa pun volume produksi, sehingga tergolong biaya tetap.",
          },
          {
            q: "Pabrik dengan kapasitas menganggur ditawari pesanan di bawah harga normal. Keputusan terbaik adalah…",
            options: [
              "Selalu menolak karena di bawah harga normal",
              "Menerima selama harga di atas biaya variabel per unit",
              "Menerima walau harga di bawah biaya variabel",
              "Menerima hanya jika menutup seluruh biaya tetap",
            ],
            answer: 1,
            explain: "Selama harga melebihi biaya variabel, pesanan menambah margin kontribusi dan membantu menutup biaya tetap.",
          },
        ],
      },
    ],
  },
];
