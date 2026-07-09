import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "jurnal-penyesuaian",
    levelId: "siklus",
    order: 1,
    title: "Jurnal Penyesuaian",
    summary: "Menyesuaikan akun agar mencerminkan kondisi sebenarnya di akhir periode (basis akrual).",
    durationMin: 20,
    tags: ["penyesuaian", "akrual"],
    blocks: [
      {
        type: "video",
        comp: "SiklusAkuntansi",
        title: "Video: Peta Siklus Akuntansi",
        caption: "Lihat posisi jurnal penyesuaian dalam keseluruhan siklus akuntansi.",
      },
      {
        type: "paragraph",
        html: "Di akhir periode, beberapa akun belum mencerminkan keadaan sebenarnya. Misalnya perlengkapan sudah terpakai sebagian, atau sewa dibayar di muka sudah 'lewat' sebagian. <strong>Jurnal penyesuaian</strong> memperbaiki ini agar laporan akurat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Mengapa perlu?",
        html: "Karena akuntansi memakai <strong>basis akrual</strong>: pendapatan diakui saat <em>terjadi</em> (bukan saat uang diterima), dan beban diakui saat <em>terpakai</em> (bukan saat dibayar).",
      },
      { type: "heading", text: "5 Jenis Penyesuaian yang Umum" },
      {
        type: "table",
        headers: ["Jenis", "Contoh", "Jurnal Penyesuaian"],
        rows: [
          ["Beban dibayar di muka", "Sewa dibayar 1 tahun, terpakai 1 bulan", "D: Beban Sewa, K: Sewa Dibayar Dimuka"],
          ["Pendapatan diterima dimuka", "Terima uang langganan 6 bln, baru jalan 1 bln", "D: Pendapatan Diterima Dimuka, K: Pendapatan"],
          ["Beban yang masih harus dibayar", "Gaji akhir bulan belum dibayar", "D: Beban Gaji, K: Utang Gaji"],
          ["Pendapatan yang masih harus diterima", "Jasa selesai, belum ditagih", "D: Piutang, K: Pendapatan"],
          ["Penyusutan & pemakaian", "Perlengkapan terpakai; peralatan menyusut", "D: Beban …, K: akun terkait"],
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan jenis penyesuaian dengan contoh kejadiannya.",
        pairs: [
          { left: "Beban dibayar di muka", right: "Asuransi 1 tahun dibayar di awal, baru terpakai 2 bulan" },
          { left: "Pendapatan diterima di muka", right: "Uang sewa kios 6 bulan diterima, baru berjalan 1 bulan" },
          { left: "Beban yang masih harus dibayar", right: "Bunga pinjaman bulan ini belum dibayar bank" },
          { left: "Pendapatan yang masih harus diterima", right: "Pekerjaan jasa sudah selesai tetapi belum ditagih" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Perlengkapan Bengkel Maju Jaya",
        html: "Saldo akun Perlengkapan Rp2.000.000. Saat dihitung fisik di akhir Januari, sisa perlengkapan tinggal Rp1.200.000. Berarti yang <strong>terpakai = Rp800.000</strong> dan harus diakui sebagai beban.",
      },
      {
        type: "journal",
        date: "31 Jan",
        title: "Penyesuaian pemakaian perlengkapan",
        lines: [
          { account: "Beban Perlengkapan", debit: 800_000 },
          { account: "Perlengkapan", credit: 800_000 },
        ],
        note: "Beban (terpakai) muncul → debit. Perlengkapan (aset) berkurang → kredit. Saldo Perlengkapan jadi Rp1.200.000.",
      },
      {
        type: "journal",
        date: "31 Jan",
        title: "Penyesuaian penyusutan peralatan (Rp200.000/bulan)",
        lines: [
          { account: "Beban Penyusutan Peralatan", debit: 200_000 },
          { account: "Akumulasi Penyusutan Peralatan", credit: 200_000 },
        ],
        note: "'Akumulasi Penyusutan' adalah akun kontra-aset (pengurang nilai peralatan di neraca).",
      },
      {
        type: "calcExercise",
        prompt:
          "Saldo akun Perlengkapan Rp3.500.000. Hasil hitung fisik akhir bulan menunjukkan sisa Rp1.250.000. Berapa beban perlengkapan yang harus diakui?",
        answer: 2_250_000,
        prefix: "Rp",
        solution:
          "Beban perlengkapan = saldo awal − sisa = Rp3.500.000 − Rp1.250.000 = Rp2.250.000. Itulah bagian yang terpakai selama periode.",
        hint: "Yang terpakai = saldo awal dikurangi sisa fisik.",
      },
      {
        type: "journalExercise",
        prompt:
          "Gaji karyawan bulan ini Rp4.500.000 baru akan dibayar tanggal 5 bulan depan. Buat jurnal penyesuaian akhir bulan.",
        accounts: ["Beban Gaji", "Utang Gaji", "Kas", "Modal Pemilik"],
        answer: [
          { account: "Beban Gaji", debit: 4_500_000 },
          { account: "Utang Gaji", credit: 4_500_000 },
        ],
        hint: "Bebannya sudah terjadi bulan ini (akrual) walau belum dibayar. Lawannya adalah kewajiban.",
      },
      {
        type: "journalExercise",
        prompt:
          "Peralatan disusutkan Rp350.000 per bulan. Buat jurnal penyesuaian penyusutan untuk bulan ini.",
        accounts: [
          "Beban Penyusutan Peralatan",
          "Akumulasi Penyusutan Peralatan",
          "Peralatan",
          "Kas",
        ],
        answer: [
          { account: "Beban Penyusutan Peralatan", debit: 350_000 },
          { account: "Akumulasi Penyusutan Peralatan", credit: 350_000 },
        ],
        hint: "Jangan kredit akun Peralatan langsung, gunakan akun kontra Akumulasi Penyusutan.",
      },
      {
        type: "case",
        title: "Studi Kasus: Asuransi Dibayar Dimuka, Toko Roti Lezat",
        html: "Pada 1 Januari, Toko Roti Lezat membayar premi asuransi setahun penuh Rp12.000.000 dan mencatatnya sebagai <strong>Asuransi Dibayar Dimuka</strong>. Pada 31 Januari, 1 bulan sudah 'lewat', yaitu Rp12.000.000 ÷ 12 = <strong>Rp1.000.000</strong>. Penyesuaiannya: D Beban Asuransi Rp1.000.000, K Asuransi Dibayar Dimuka Rp1.000.000. <em>Pelajaran:</em> aset dibayar dimuka 'meluruh' menjadi beban seiring waktu, tanpa penyesuaian, beban Januari terlalu kecil dan aset terlalu besar.",
      },
      {
        type: "takeaways",
        items: [
          "Penyesuaian membuat laporan sesuai basis akrual.",
          "5 jenis umum: beban/pendapatan dibayar/diterima dimuka, akrual beban/pendapatan, penyusutan.",
          "Penyusutan memakai akun kontra 'Akumulasi Penyusutan', bukan mengkredit aset langsung.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Gaji bulan Januari Rp3jt baru akan dibayar 3 Februari. Penyesuaian 31 Jan?",
            options: [
              "D: Kas; K: Beban Gaji",
              "D: Beban Gaji 3jt; K: Utang Gaji 3jt",
              "Tidak perlu, karena belum dibayar",
              "D: Utang Gaji; K: Beban Gaji",
            ],
            answer: 1,
            explain:
              "Bebannya sudah terjadi di Januari (akrual), maka diakui: Debit Beban Gaji, Kredit Utang Gaji.",
          },
          {
            q: "Mengapa jurnal penyesuaian diperlukan dalam basis akrual?",
            options: [
              "Agar saldo kas selalu cocok dengan rekening bank",
              "Agar pendapatan & beban diakui pada periode terjadinya, bukan saat kas berpindah",
              "Agar jumlah debit dan kredit selalu sama",
              "Agar pajak menjadi lebih kecil",
            ],
            answer: 1,
            explain:
              "Basis akrual mengakui pendapatan saat terjadi dan beban saat terpakai. Penyesuaian menyelaraskan catatan dengan kondisi sebenarnya di akhir periode.",
          },
          {
            q: "Sewa dibayar dimuka Rp24.000.000 untuk 1 tahun, dicatat sebagai aset. Berapa Beban Sewa yang diakui setelah 3 bulan?",
            options: ["Rp24.000.000", "Rp2.000.000", "Rp6.000.000", "Rp8.000.000"],
            answer: 2,
            explain:
              "Per bulan = Rp24.000.000 ÷ 12 = Rp2.000.000. Tiga bulan = Rp6.000.000. Jurnal: D Beban Sewa Rp6.000.000, K Sewa Dibayar Dimuka Rp6.000.000.",
          },
          {
            q: "Jurnal penyesuaian yang BENAR untuk penyusutan peralatan adalah…",
            options: [
              "D: Beban Penyusutan; K: Peralatan",
              "D: Akumulasi Penyusutan; K: Beban Penyusutan",
              "D: Beban Penyusutan; K: Akumulasi Penyusutan",
              "D: Peralatan; K: Beban Penyusutan",
            ],
            answer: 2,
            explain:
              "Penyusutan mendebit Beban Penyusutan dan mengkredit akun kontra-aset Akumulasi Penyusutan, nilai perolehan Peralatan tidak diubah.",
          },
          {
            q: "Jasa konsultasi Rp5.000.000 sudah selesai dikerjakan tetapi belum ditagih ke klien. Penyesuaiannya?",
            options: [
              "D: Kas; K: Pendapatan",
              "D: Piutang Usaha 5jt; K: Pendapatan Jasa 5jt",
              "D: Pendapatan Jasa; K: Piutang Usaha",
              "Tidak dicatat sampai uang diterima",
            ],
            answer: 1,
            explain:
              "Pendapatan sudah terjadi (jasa selesai), maka diakui meski belum ditagih: D Piutang Usaha, K Pendapatan Jasa.",
          },
          {
            q: "Diterima Rp9.000.000 untuk paket langganan 6 bulan, dicatat sebagai Pendapatan Diterima Dimuka. Setelah 2 bulan berjalan, penyesuaiannya?",
            options: [
              "D: Pendapatan Diterima Dimuka 3jt; K: Pendapatan 3jt",
              "D: Pendapatan 3jt; K: Pendapatan Diterima Dimuka 3jt",
              "D: Kas 9jt; K: Pendapatan 9jt",
              "D: Pendapatan Diterima Dimuka 9jt; K: Pendapatan 9jt",
            ],
            answer: 0,
            explain:
              "Per bulan = Rp9.000.000 ÷ 6 = Rp1.500.000. Dua bulan = Rp3.000.000 sudah menjadi pendapatan: D Pendapatan Diterima Dimuka, K Pendapatan.",
          },
          {
            q: "Akun 'Akumulasi Penyusutan' digolongkan sebagai…",
            options: [
              "Beban pada laporan laba rugi",
              "Kontra-aset (pengurang nilai aset) di neraca",
              "Kewajiban jangka panjang",
              "Bagian dari ekuitas pemilik",
            ],
            answer: 1,
            explain:
              "Akumulasi Penyusutan bersaldo normal kredit dan mengurangi nilai tercatat aset tetap di neraca, bukan beban periode berjalan.",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "neraca-lajur",
    levelId: "siklus",
    order: 2,
    title: "Neraca Lajur (Worksheet)",
    summary: "Kertas kerja 10 kolom yang merangkai neraca saldo, penyesuaian, dan laporan.",
    durationMin: 16,
    tags: ["worksheet", "kertas kerja"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Neraca lajur</strong> adalah alat bantu (bukan laporan resmi) untuk menyusun laporan keuangan secara rapi. Bentuk umumnya 10 kolom.",
      },
      {
        type: "table",
        caption: "Struktur 10 kolom neraca lajur",
        headers: ["Pasangan kolom", "Isi"],
        rows: [
          ["1. Neraca Saldo", "Saldo akun sebelum penyesuaian"],
          ["2. Penyesuaian", "Jurnal penyesuaian (debit & kredit)"],
          ["3. Neraca Saldo Disesuaikan", "Hasil gabungan kolom 1 + 2"],
          ["4. Laba Rugi", "Akun pendapatan & beban"],
          ["5. Neraca", "Akun aset, kewajiban, ekuitas"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Trik penempatan",
        html: "Dari Neraca Saldo Disesuaikan: akun <strong>pendapatan & beban</strong> pindah ke kolom Laba Rugi; akun <strong>aset, kewajiban, ekuitas</strong> pindah ke kolom Neraca.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Laba/rugi sebagai penyeimbang",
        html: "Selisih kolom Laba Rugi = laba bersih (atau rugi). Angka yang sama ditambahkan di kolom Neraca sisi ekuitas agar kedua pasangan kolom seimbang. Inilah 'cek silang' kerapian kerja.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan tiap akun ke kolom tujuannya di neraca lajur: 'Laba Rugi' atau 'Neraca'.",
        buckets: ["Laba Rugi", "Neraca"],
        items: [
          { text: "Pendapatan Servis", bucket: "Laba Rugi" },
          { text: "Beban Gaji", bucket: "Laba Rugi" },
          { text: "Beban Penyusutan", bucket: "Laba Rugi" },
          { text: "Kas", bucket: "Neraca" },
          { text: "Perlengkapan", bucket: "Neraca" },
          { text: "Utang Usaha", bucket: "Neraca" },
          { text: "Modal Pemilik", bucket: "Neraca" },
          { text: "Akumulasi Penyusutan", bucket: "Neraca" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Di kolom Laba Rugi, total pendapatan Rp7.500.000 dan total beban Rp5.200.000. Berapa laba bersih yang menjadi penyeimbang?",
        answer: 2_300_000,
        prefix: "Rp",
        solution:
          "Laba bersih = Pendapatan − Beban = Rp7.500.000 − Rp5.200.000 = Rp2.300.000. Angka ini ditambahkan ke sisi kredit kolom Neraca (menambah ekuitas) agar seimbang.",
        hint: "Selisih kolom Laba Rugi adalah laba bersih.",
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa akuntan suka neraca lajur",
        html: "Saat tutup buku, ratusan akun harus dipindah ke laporan. Neraca lajur membuat seluruh proses terlihat dalam satu halaman, sehingga kesalahan cepat ketahuan sebelum laporan resmi dicetak.",
      },
      {
        type: "case",
        title: "Studi Kasus: Salah Kolom di Warung Kopi Senja",
        html: "Seorang staf keliru menaruh akun <strong>Pendapatan Diterima Dimuka Rp3.000.000</strong> ke kolom Laba Rugi, padahal itu kewajiban (akun riil) yang seharusnya masuk kolom Neraca. Akibatnya kolom Laba Rugi menggelembung dan laba bersih tampak lebih kecil Rp3.000.000, sementara kolom Neraca tidak seimbang. <em>Pelajaran:</em> 'diterima dimuka' adalah kewajiban, selalu cek apakah akun bersifat nominal (Laba Rugi) atau riil (Neraca) sebelum memindahkannya.",
      },
      {
        type: "takeaways",
        items: [
          "Neraca lajur = kertas kerja bantu, bukan laporan resmi.",
          "10 kolom: NS → Penyesuaian → NS Disesuaikan → Laba Rugi → Neraca.",
          "Laba bersih menjadi penyeimbang antara kolom Laba Rugi & Neraca.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Akun 'Akumulasi Penyusutan' di neraca lajur masuk ke kolom…",
            options: ["Laba Rugi (debit)", "Laba Rugi (kredit)", "Neraca (kredit)", "Neraca (debit)"],
            answer: 2,
            explain:
              "Akumulasi penyusutan adalah kontra-aset (bagian neraca) bersaldo kredit, jadi masuk kolom Neraca sisi kredit.",
          },
          {
            q: "Apa fungsi utama neraca lajur?",
            options: [
              "Menggantikan laporan keuangan resmi",
              "Alat bantu/kertas kerja untuk menyusun laporan dengan rapi dan meminimalkan kesalahan",
              "Dokumen yang wajib diserahkan ke kantor pajak",
              "Buku besar versi ringkas",
            ],
            answer: 1,
            explain:
              "Neraca lajur adalah kertas kerja internal, bukan laporan resmi, yang merangkai neraca saldo, penyesuaian, dan laporan dalam satu halaman.",
          },
          {
            q: "Urutan pasangan kolom neraca lajur 10 kolom yang benar adalah…",
            options: [
              "Neraca → Laba Rugi → Penyesuaian → Neraca Saldo",
              "Neraca Saldo → Penyesuaian → NS Disesuaikan → Laba Rugi → Neraca",
              "Penyesuaian → Neraca Saldo → Laba Rugi → Neraca → NS Disesuaikan",
              "Laba Rugi → Neraca → Neraca Saldo → Penyesuaian",
            ],
            answer: 1,
            explain:
              "Alurnya: Neraca Saldo, lalu Penyesuaian, digabung menjadi NS Disesuaikan, lalu dipisah ke Laba Rugi dan Neraca.",
          },
          {
            q: "Pada kolom Laba Rugi, total beban (debit) Rp6.000.000 dan total pendapatan (kredit) Rp4.500.000. Maka…",
            options: [
              "Laba bersih Rp1.500.000",
              "Rugi bersih Rp1.500.000",
              "Impas (tidak laba/rugi)",
              "Laba bersih Rp10.500.000",
            ],
            answer: 1,
            explain:
              "Beban (Rp6.000.000) lebih besar dari pendapatan (Rp4.500.000), selisih Rp1.500.000 adalah rugi bersih.",
          },
          {
            q: "Akun 'Beban Sewa' (saldo normal debit) pada neraca lajur dipindahkan ke…",
            options: [
              "Kolom Neraca debit",
              "Kolom Neraca kredit",
              "Kolom Laba Rugi debit",
              "Kolom Laba Rugi kredit",
            ],
            answer: 2,
            explain:
              "Beban adalah akun nominal yang masuk kolom Laba Rugi, dengan saldo normal di sisi debit.",
          },
          {
            q: "Saat terjadi laba bersih, di kolom mana angka penyeimbang ditempatkan?",
            options: [
              "Laba Rugi sisi kredit & Neraca sisi debit",
              "Laba Rugi sisi debit & Neraca sisi kredit",
              "Hanya di kolom Laba Rugi",
              "Hanya di kolom Neraca sisi debit",
            ],
            answer: 1,
            explain:
              "Laba bersih ditulis di sisi debit kolom Laba Rugi (agar seimbang) dan di sisi kredit kolom Neraca (menambah ekuitas).",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "laporan-keuangan",
    levelId: "siklus",
    order: 3,
    title: "Menyusun Laporan Keuangan",
    summary: "Laba Rugi, Perubahan Ekuitas, Neraca, dan Arus Kas, output utama akuntansi.",
    durationMin: 22,
    tags: ["laporan", "laba rugi", "neraca"],
    blocks: [
      {
        type: "video",
        comp: "LaporanKeuangan",
        title: "Video: Alur Laporan Keuangan",
        caption: "Animasi: laba bersih mengalir ke ekuitas, lalu ke neraca.",
      },
      {
        type: "paragraph",
        html: "Inilah tujuan akhir seluruh proses: <strong>laporan keuangan</strong>. Ada 4 laporan utama, dan urutannya penting karena saling terkait.",
      },
      { type: "heading", text: "1) Laporan Laba Rugi" },
      {
        type: "paragraph",
        html: "Mengukur kinerja: <strong>Laba = Pendapatan − Beban</strong>.",
      },
      {
        type: "table",
        caption: "Laporan Laba Rugi, Bengkel Maju Jaya, Januari 2026",
        headers: ["Keterangan", "Rp"],
        rows: [
          ["Pendapatan Servis", "1.500.000"],
          ["Beban Gaji", "(1.000.000)"],
          ["Beban Perlengkapan", "(800.000)"],
          ["Beban Penyusutan", "(200.000)"],
          ["Rugi Bersih", "(500.000)"],
        ],
      },
      {
        type: "callout",
        tone: "info",
        html: "Di bulan pertama, banyak usaha justru rugi karena beban awal besar. Itu normal, yang penting trennya membaik.",
      },
      {
        type: "calcExercise",
        prompt:
          "Bulan berikutnya bengkel membaik: Pendapatan Servis Rp9.000.000, total beban Rp6.400.000. Berapa laba bersihnya?",
        answer: 2_600_000,
        prefix: "Rp",
        solution:
          "Laba bersih = Pendapatan − Beban = Rp9.000.000 − Rp6.400.000 = Rp2.600.000. Karena pendapatan melebihi beban, hasilnya laba.",
        hint: "Laba bersih = total pendapatan − total beban.",
      },
      { type: "heading", text: "2) Laporan Perubahan Ekuitas" },
      {
        type: "table",
        headers: ["Keterangan", "Rp"],
        rows: [
          ["Modal awal", "40.000.000"],
          ["Rugi bersih", "(500.000)"],
          ["Prive", "(0)"],
          ["Modal akhir", "39.500.000"],
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Modal awal Rp50.000.000, laba bersih bulan ini Rp2.600.000, dan pemilik mengambil prive Rp1.000.000. Berapa modal akhir?",
        answer: 51_600_000,
        prefix: "Rp",
        solution:
          "Modal akhir = Modal awal + Laba bersih − Prive = Rp50.000.000 + Rp2.600.000 − Rp1.000.000 = Rp51.600.000.",
        hint: "Modal akhir = Modal awal + Laba − Prive.",
      },
      { type: "heading", text: "3) Neraca (Laporan Posisi Keuangan)" },
      {
        type: "table",
        caption: "Neraca per 31 Januari 2026",
        headers: ["Aset", "Rp", "Kewajiban & Ekuitas", "Rp"],
        rows: [
          ["Kas", "38.500.000", "Utang Usaha", "0"],
          ["Perlengkapan", "1.200.000", "Modal akhir", "39.500.000"],
          ["Peralatan (neto)", "-", "", ""],
          ["TOTAL ASET", "39.700.000*", "TOTAL", "39.700.000*"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        html: "*Angka ilustratif. Yang penting dipahami: <strong>Total Aset = Total Kewajiban + Ekuitas</strong>, dan Modal akhir di neraca berasal dari Laporan Perubahan Ekuitas.",
      },
      { type: "heading", text: "4) Laporan Arus Kas" },
      {
        type: "paragraph",
        html: "Menjelaskan dari mana kas datang dan ke mana perginya, dibagi 3 aktivitas: <strong>Operasi</strong> (kegiatan utama), <strong>Investasi</strong> (beli/jual aset tetap), dan <strong>Pendanaan</strong> (modal & utang). Dibahas mendalam di Level 5.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan setiap pos dengan laporan keuangan tempat ia disajikan.",
        pairs: [
          { left: "Pendapatan Servis", right: "Laporan Laba Rugi" },
          { left: "Prive pemilik", right: "Laporan Perubahan Ekuitas" },
          { left: "Utang Usaha", right: "Neraca" },
          { left: "Pembelian peralatan secara tunai", right: "Laporan Arus Kas (Investasi)" },
        ],
      },
      { type: "heading", text: "Contoh lengkap: laporan keuangan setahun" },
      {
        type: "paragraph",
        html: "Contoh Bengkel Maju Jaya di atas sengaja ringkas agar polanya terlihat. Laporan keuangan nyata jauh lebih panjang karena satu tahun berisi banyak pos. Berikut laporan lengkap <strong>PT Berkah Niaga</strong>, sebuah toko dagang, untuk tahun buku 2025 (angka ilustratif, dalam rupiah penuh). Perhatikan bagaimana angka mengalir antar laporan.",
      },
      {
        type: "table",
        caption: "Laporan Laba Rugi PT Berkah Niaga, tahun berakhir 31 Desember 2025",
        headers: ["Keterangan", "Rp"],
        rows: [
          ["Penjualan", "2.500.000.000"],
          ["Retur & potongan penjualan", "(100.000.000)"],
          ["Penjualan bersih", "2.400.000.000"],
          ["Harga Pokok Penjualan (HPP)", "(1.560.000.000)"],
          ["Laba kotor", "840.000.000"],
          ["Beban gaji", "(280.000.000)"],
          ["Beban sewa", "(120.000.000)"],
          ["Beban listrik & utilitas", "(48.000.000)"],
          ["Beban iklan & pemasaran", "(60.000.000)"],
          ["Beban penyusutan", "(50.000.000)"],
          ["Beban perlengkapan", "(22.000.000)"],
          ["Total beban usaha", "(580.000.000)"],
          ["Laba usaha", "260.000.000"],
          ["Pendapatan bunga", "10.000.000"],
          ["Beban bunga", "(40.000.000)"],
          ["Laba sebelum pajak", "230.000.000"],
          ["Beban pajak (22%)", "(50.600.000)"],
          ["Laba bersih", "179.400.000"],
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Membaca laba rugi bertingkat",
        html: "Laporan ini <strong>bertingkat</strong>: Penjualan bersih − HPP = <strong>Laba kotor</strong>; Laba kotor − beban usaha = <strong>Laba usaha</strong>; lalu dikoreksi pendapatan/beban lain menjadi <strong>Laba sebelum pajak</strong>; dikurangi pajak menjadi <strong>Laba bersih</strong>. Tiap tingkat menjawab pertanyaan berbeda tentang kesehatan usaha.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari Laporan Laba Rugi PT Berkah Niaga, berapa margin laba kotor (Laba kotor ÷ Penjualan bersih), dalam persen?",
        answer: 35,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "Margin laba kotor = Laba kotor ÷ Penjualan bersih = 840.000.000 ÷ 2.400.000.000 = 0,35 = <strong>35%</strong>. Artinya dari tiap Rp100 penjualan, Rp35 tersisa setelah menutup harga pokok barang.",
        hint: "Bagi Laba kotor dengan Penjualan bersih, lalu kalikan 100%.",
      },
      {
        type: "table",
        caption: "Laporan Perubahan Ekuitas PT Berkah Niaga, tahun 2025",
        headers: ["Keterangan", "Modal Saham", "Laba Ditahan", "Total"],
        rows: [
          ["Saldo 1 Januari 2025", "800.000.000", "100.000.000", "900.000.000"],
          ["Laba bersih 2025", "-", "179.400.000", "179.400.000"],
          ["Dividen", "-", "(80.000.000)", "(80.000.000)"],
          ["Saldo 31 Desember 2025", "800.000.000", "199.400.000", "999.400.000"],
        ],
      },
      {
        type: "callout",
        tone: "key",
        html: "<strong>Laba bersih Rp179.400.000</strong> dari Laporan Laba Rugi mengalir masuk ke Laba Ditahan. Setelah dikurangi dividen Rp80.000.000, ekuitas akhir menjadi <strong>Rp999.400.000</strong>, angka inilah yang muncul di sisi ekuitas Neraca.",
      },
      {
        type: "table",
        caption: "Neraca (Laporan Posisi Keuangan) PT Berkah Niaga per 31 Desember 2025",
        headers: ["Keterangan", "Rp"],
        rows: [
          ["ASET LANCAR", ""],
          ["Kas & setara kas", "220.000.000"],
          ["Piutang usaha", "180.000.000"],
          ["Persediaan barang dagang", "340.000.000"],
          ["Perlengkapan", "20.000.000"],
          ["Sewa dibayar dimuka", "40.000.000"],
          ["Total aset lancar", "800.000.000"],
          ["ASET TETAP", ""],
          ["Peralatan", "500.000.000"],
          ["Akumulasi penyusutan", "(150.000.000)"],
          ["Peralatan neto", "350.000.000"],
          ["Tanah & bangunan", "600.000.000"],
          ["Total aset tetap", "950.000.000"],
          ["TOTAL ASET", "1.750.000.000"],
          ["KEWAJIBAN LANCAR", ""],
          ["Utang usaha", "240.000.000"],
          ["Utang gaji", "20.000.000"],
          ["Utang pajak", "50.600.000"],
          ["Total kewajiban lancar", "310.600.000"],
          ["KEWAJIBAN JANGKA PANJANG", ""],
          ["Utang bank", "440.000.000"],
          ["Total kewajiban", "750.600.000"],
          ["EKUITAS", ""],
          ["Modal saham", "800.000.000"],
          ["Laba ditahan", "199.400.000"],
          ["Total ekuitas", "999.400.000"],
          ["TOTAL KEWAJIBAN & EKUITAS", "1.750.000.000"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        html: "Neraca tetap seimbang: <strong>Total Aset Rp1.750.000.000 = Total Kewajiban Rp750.600.000 + Total Ekuitas Rp999.400.000</strong>. Saldo <strong>Kas Rp220.000.000</strong> di sini nantinya menjadi angka penutup Laporan Arus Kas (lihat Level 5).",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari Neraca PT Berkah Niaga, berapa rasio lancar (Total aset lancar ÷ Total kewajiban lancar)? Bulatkan 2 desimal.",
        answer: 2.58,
        tolerance: 0.03,
        suffix: "x",
        solution:
          "Rasio lancar = 800.000.000 ÷ 310.600.000 = <strong>2,58x</strong>. Artinya tiap Rp1 kewajiban jangka pendek dijamin sekitar Rp2,58 aset lancar, likuiditas yang sehat.",
        hint: "Bagi Total aset lancar dengan Total kewajiban lancar.",
      },
      {
        type: "case",
        title: "Studi Kasus: Aliran Angka Laundry Bersih Wangi",
        html: "Laundry Bersih Wangi membukukan <strong>laba bersih Rp4.000.000</strong> di Laporan Laba Rugi. Angka itu mengalir ke Laporan Perubahan Ekuitas: modal awal Rp30.000.000 + laba Rp4.000.000 − prive Rp1.500.000 = <strong>modal akhir Rp32.500.000</strong>. Modal akhir Rp32.500.000 inilah yang muncul di sisi ekuitas Neraca, membuat Aset = Kewajiban + Ekuitas tetap seimbang. <em>Pelajaran:</em> keempat laporan bukan dokumen terpisah, satu angka mengalir berurutan dari laba rugi sampai neraca.",
      },
      {
        type: "case",
        title: "Studi Kasus: Untung tapi bangkrut?",
        html: "Sebuah toko mencatat laba di laporan laba rugi, namun kasnya kosong karena semua penjualan masih berupa piutang yang belum tertagih. Inilah kenapa <strong>laba ≠ kas</strong>, dan mengapa laporan arus kas sama pentingnya dengan laba rugi.",
      },
      {
        type: "takeaways",
        items: [
          "4 laporan: Laba Rugi → Perubahan Ekuitas → Neraca → Arus Kas (urut & saling terkait).",
          "Laba bersih mengalir ke Perubahan Ekuitas; modal akhir mengalir ke Neraca.",
          "Neraca selalu seimbang: Aset = Kewajiban + Ekuitas.",
          "Laba tidak sama dengan kas, perhatikan arus kas.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Urutan penyusunan laporan keuangan yang benar?",
            options: [
              "Neraca → Laba Rugi → Arus Kas",
              "Laba Rugi → Perubahan Ekuitas → Neraca → Arus Kas",
              "Arus Kas → Neraca → Laba Rugi",
              "Perubahan Ekuitas → Laba Rugi → Neraca",
            ],
            answer: 1,
            explain:
              "Laba bersih (Laba Rugi) dibutuhkan oleh Perubahan Ekuitas; modal akhir dibutuhkan oleh Neraca. Maka urutannya tetap.",
          },
          {
            q: "Sebuah usaha laba Rp50jt tapi kasnya menipis. Penyebab paling mungkin?",
            options: [
              "Salah hitung laba",
              "Banyak penjualan kredit yang belum tertagih (piutang)",
              "Tidak punya utang",
              "Modal terlalu besar",
            ],
            answer: 1,
            explain: "Laba bisa berupa piutang yang belum jadi kas. Laba ≠ kas.",
          },
          {
            q: "Laporan yang mengukur kinerja (laba/rugi) selama satu periode adalah…",
            options: [
              "Neraca",
              "Laporan Laba Rugi",
              "Laporan Arus Kas",
              "Neraca Saldo",
            ],
            answer: 1,
            explain:
              "Laporan Laba Rugi membandingkan pendapatan dan beban selama periode untuk menghasilkan laba atau rugi bersih.",
          },
          {
            q: "Modal awal Rp20.000.000, laba bersih Rp5.000.000, prive Rp2.000.000. Modal akhirnya?",
            options: ["Rp23.000.000", "Rp27.000.000", "Rp17.000.000", "Rp25.000.000"],
            answer: 0,
            explain:
              "Modal akhir = Rp20.000.000 + Rp5.000.000 − Rp2.000.000 = Rp23.000.000.",
          },
          {
            q: "Persamaan dasar yang selalu dipenuhi Neraca adalah…",
            options: [
              "Aset = Pendapatan − Beban",
              "Aset = Kewajiban + Ekuitas",
              "Ekuitas = Aset + Kewajiban",
              "Kas = Laba bersih",
            ],
            answer: 1,
            explain:
              "Neraca selalu seimbang sesuai persamaan akuntansi: Aset = Kewajiban + Ekuitas.",
          },
          {
            q: "Angka 'Modal akhir' yang tampil di Neraca berasal dari laporan…",
            options: [
              "Laba Rugi",
              "Arus Kas",
              "Perubahan Ekuitas",
              "Neraca Saldo Setelah Penutupan",
            ],
            answer: 2,
            explain:
              "Modal akhir dihitung di Laporan Perubahan Ekuitas, lalu dipindahkan ke sisi ekuitas Neraca.",
          },
          {
            q: "Pembelian mesin produksi secara tunai dilaporkan di Arus Kas pada aktivitas…",
            options: ["Operasi", "Investasi", "Pendanaan", "Tidak dilaporkan"],
            answer: 1,
            explain:
              "Pembelian/penjualan aset tetap tergolong aktivitas Investasi dalam Laporan Arus Kas.",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "jurnal-penutup",
    levelId: "siklus",
    order: 4,
    title: "Jurnal Penutup & Neraca Saldo Setelah Penutupan",
    summary: "Menutup akun nominal agar periode baru mulai dari nol.",
    durationMin: 15,
    tags: ["penutup", "ikhtisar laba rugi"],
    blocks: [
      {
        type: "paragraph",
        html: "Akun nominal (pendapatan, beban, prive) hanya berlaku untuk satu periode. Di akhir periode, saldonya <strong>ditutup ke nol</strong> dan dipindah ke modal melalui <strong>jurnal penutup</strong>.",
      },
      { type: "heading", text: "4 Langkah Menutup" },
      {
        type: "list",
        ordered: true,
        items: [
          "Tutup semua <strong>Pendapatan</strong> ke Ikhtisar Laba Rugi (debit Pendapatan, kredit Ikhtisar L/R).",
          "Tutup semua <strong>Beban</strong> ke Ikhtisar Laba Rugi (debit Ikhtisar L/R, kredit Beban).",
          "Tutup <strong>Ikhtisar Laba Rugi</strong> ke Modal (laba menambah modal, rugi mengurangi).",
          "Tutup <strong>Prive</strong> ke Modal (debit Modal, kredit Prive).",
        ],
      },
      {
        type: "classifyExercise",
        prompt:
          "Tentukan akun mana yang DITUTUP (nominal/sementara) dan mana yang TIDAK ditutup (riil/permanen).",
        buckets: ["Ditutup (nominal)", "Tidak ditutup (riil)"],
        items: [
          { text: "Pendapatan Servis", bucket: "Ditutup (nominal)" },
          { text: "Beban Gaji", bucket: "Ditutup (nominal)" },
          { text: "Prive", bucket: "Ditutup (nominal)" },
          { text: "Ikhtisar Laba Rugi", bucket: "Ditutup (nominal)" },
          { text: "Kas", bucket: "Tidak ditutup (riil)" },
          { text: "Peralatan", bucket: "Tidak ditutup (riil)" },
          { text: "Utang Usaha", bucket: "Tidak ditutup (riil)" },
          { text: "Modal Pemilik", bucket: "Tidak ditutup (riil)" },
        ],
      },
      {
        type: "journal",
        date: "31 Jan",
        title: "Menutup pendapatan",
        lines: [
          { account: "Pendapatan Servis", debit: 1_500_000 },
          { account: "Ikhtisar Laba Rugi", credit: 1_500_000 },
        ],
      },
      {
        type: "journal",
        date: "31 Jan",
        title: "Menutup beban (total Rp2.000.000)",
        lines: [
          { account: "Ikhtisar Laba Rugi", debit: 2_000_000 },
          { account: "Beban Gaji", credit: 1_000_000 },
          { account: "Beban Perlengkapan", credit: 800_000 },
          { account: "Beban Penyusutan", credit: 200_000 },
        ],
      },
      {
        type: "journal",
        date: "31 Jan",
        title: "Menutup Ikhtisar L/R ke modal (rugi Rp500.000)",
        lines: [
          { account: "Modal Pemilik", debit: 500_000 },
          { account: "Ikhtisar Laba Rugi", credit: 500_000 },
        ],
        note: "Karena rugi, modal berkurang. Jika laba, jurnalnya kebalikannya.",
      },
      {
        type: "journalExercise",
        prompt:
          "Pendapatan Jasa bersaldo Rp8.000.000. Buat jurnal penutup untuk menutup akun pendapatan ini.",
        accounts: ["Pendapatan Jasa", "Ikhtisar Laba Rugi", "Modal Pemilik", "Kas"],
        answer: [
          { account: "Pendapatan Jasa", debit: 8_000_000 },
          { account: "Ikhtisar Laba Rugi", credit: 8_000_000 },
        ],
        hint: "Pendapatan bersaldo kredit; untuk menolkannya, debit Pendapatan dan kredit Ikhtisar Laba Rugi.",
      },
      {
        type: "journalExercise",
        prompt:
          "Pemilik mengambil prive Rp1.500.000 selama periode (akun Prive bersaldo debit). Buat jurnal penutup untuk Prive.",
        accounts: ["Modal Pemilik", "Prive", "Ikhtisar Laba Rugi", "Kas"],
        answer: [
          { account: "Modal Pemilik", debit: 1_500_000 },
          { account: "Prive", credit: 1_500_000 },
        ],
        hint: "Prive ditutup langsung ke Modal, bukan ke Ikhtisar Laba Rugi: debit Modal, kredit Prive.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Neraca Saldo Setelah Penutupan",
        html: "Setelah penutupan, hanya akun riil (aset, kewajiban, ekuitas) yang bersaldo. Daftar ini disebut <strong>Neraca Saldo Setelah Penutupan</strong>: titik awal periode berikutnya.",
      },
      {
        type: "case",
        title: "Studi Kasus: Kenapa harus ditutup?",
        html: "Bayangkan pendapatan Januari tidak ditutup. Di Februari, akun pendapatan sudah berisi angka Januari, sehingga laba Februari jadi salah. Penutupan memastikan tiap periode dihitung 'bersih' dari awal.",
      },
      {
        type: "case",
        title: "Studi Kasus: Tutup Buku Toko Kelontong Berkah (Laba)",
        html: "Akhir tahun, Toko Berkah punya Pendapatan Rp60.000.000 dan total beban Rp45.000.000. Langkah penutupan: (1) D Pendapatan Rp60.000.000, K Ikhtisar L/R; (2) D Ikhtisar L/R Rp45.000.000, K masing-masing Beban; (3) saldo Ikhtisar L/R kini kredit Rp15.000.000 (laba), ditutup dengan D Ikhtisar L/R Rp15.000.000, K Modal Rp15.000.000. <em>Pelajaran:</em> bila laba, langkah ke-3 menambah Modal (D Ikhtisar, K Modal), kebalikan dari kondisi rugi.",
      },
      {
        type: "takeaways",
        items: [
          "Akun nominal ditutup ke nol tiap akhir periode.",
          "Gunakan akun perantara 'Ikhtisar Laba Rugi'.",
          "Laba/rugi & prive akhirnya bermuara ke Modal.",
          "Hasil akhir: Neraca Saldo Setelah Penutupan (hanya akun riil).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Akun manakah yang TIDAK ditutup di akhir periode?",
            options: ["Pendapatan Jasa", "Beban Sewa", "Kas", "Prive"],
            answer: 2,
            explain: "Kas adalah akun riil (permanen), saldonya dibawa ke periode berikutnya, tidak ditutup.",
          },
          {
            q: "Jurnal yang BENAR untuk menutup akun Beban Sewa Rp2.000.000 adalah…",
            options: [
              "D: Beban Sewa 2jt; K: Ikhtisar L/R 2jt",
              "D: Ikhtisar L/R 2jt; K: Beban Sewa 2jt",
              "D: Modal 2jt; K: Beban Sewa 2jt",
              "D: Beban Sewa 2jt; K: Kas 2jt",
            ],
            answer: 1,
            explain:
              "Beban bersaldo debit. Untuk menolkannya: debit Ikhtisar Laba Rugi, kredit Beban Sewa.",
          },
          {
            q: "Akun perantara yang dipakai untuk menampung pendapatan dan beban saat penutupan adalah…",
            options: ["Modal Pemilik", "Ikhtisar Laba Rugi", "Prive", "Kas"],
            answer: 1,
            explain:
              "Ikhtisar Laba Rugi (income summary) menampung pendapatan & beban sementara, lalu saldonya dipindah ke Modal.",
          },
          {
            q: "Pendapatan Rp10.000.000 dan beban Rp7.000.000 sudah ditutup ke Ikhtisar L/R. Jurnal menutup Ikhtisar L/R ke Modal adalah…",
            options: [
              "D: Modal 3jt; K: Ikhtisar L/R 3jt",
              "D: Ikhtisar L/R 3jt; K: Modal 3jt",
              "D: Ikhtisar L/R 17jt; K: Modal 17jt",
              "Tidak ada, karena sudah nol",
            ],
            answer: 1,
            explain:
              "Saldo Ikhtisar L/R = laba Rp3.000.000 (kredit). Untuk menutupnya: D Ikhtisar L/R Rp3.000.000, K Modal Rp3.000.000 (laba menambah modal).",
          },
          {
            q: "Jurnal menutup Prive Rp1.000.000 adalah…",
            options: [
              "D: Prive 1jt; K: Modal 1jt",
              "D: Modal 1jt; K: Prive 1jt",
              "D: Ikhtisar L/R 1jt; K: Prive 1jt",
              "D: Prive 1jt; K: Ikhtisar L/R 1jt",
            ],
            answer: 1,
            explain:
              "Prive ditutup langsung ke Modal (bukan lewat Ikhtisar L/R): debit Modal, kredit Prive.",
          },
          {
            q: "Akun apa saja yang masih bersaldo pada Neraca Saldo Setelah Penutupan?",
            options: [
              "Semua akun termasuk pendapatan & beban",
              "Hanya akun riil: aset, kewajiban, dan ekuitas",
              "Hanya akun nominal",
              "Hanya akun Kas dan Modal",
            ],
            answer: 1,
            explain:
              "Setelah penutupan, akun nominal sudah nol; yang tersisa hanya akun riil (aset, kewajiban, ekuitas).",
          },
          {
            q: "Saat perusahaan mengalami laba, langkah ke-3 penutupan (Ikhtisar L/R ke Modal) adalah…",
            options: [
              "D: Modal; K: Ikhtisar L/R",
              "D: Ikhtisar L/R; K: Modal",
              "D: Ikhtisar L/R; K: Prive",
              "Tidak dijurnal",
            ],
            answer: 1,
            explain:
              "Saat laba, Ikhtisar L/R bersaldo kredit; menutupnya dengan D Ikhtisar L/R, K Modal, laba menambah modal.",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "jurnal-pembalik",
    levelId: "siklus",
    order: 5,
    title: "Jurnal Pembalik",
    summary: "Opsional: membalik penyesuaian tertentu agar pencatatan periode baru lebih mudah.",
    durationMin: 12,
    tags: ["pembalik", "opsional"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Jurnal pembalik</strong> dibuat di awal periode baru untuk membalik beberapa jurnal penyesuaian. Sifatnya <em>opsional</em>, tapi mempermudah pencatatan rutin agar tidak salah catat ganda.",
      },
      { type: "heading", text: "Penyesuaian yang Boleh Dibalik" },
      {
        type: "list",
        items: [
          "Beban yang masih harus dibayar (utang gaji, utang bunga).",
          "Pendapatan yang masih harus diterima (piutang pendapatan).",
          "Beban dibayar dimuka, jika dicatat sebagai beban saat membayar.",
          "Pendapatan diterima dimuka, jika dicatat sebagai pendapatan saat menerima.",
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan jenis penyesuaian dengan contohnya yang BOLEH dibalik di awal periode.",
        pairs: [
          { left: "Beban masih harus dibayar", right: "Utang gaji yang belum dibayar akhir bulan" },
          { left: "Pendapatan masih harus diterima", right: "Piutang bunga deposito yang belum diterima" },
          { left: "Beban dibayar dimuka (metode beban)", right: "Asuransi dibayar dimuka yang awalnya dicatat sebagai Beban" },
          { left: "Pendapatan diterima dimuka (metode pendapatan)", right: "Uang sewa diterima yang awalnya dicatat sebagai Pendapatan" },
        ],
      },
      {
        type: "journal",
        date: "31 Jan",
        title: "Penyesuaian: utang gaji",
        lines: [
          { account: "Beban Gaji", debit: 3_000_000 },
          { account: "Utang Gaji", credit: 3_000_000 },
        ],
      },
      {
        type: "journal",
        date: "1 Feb",
        title: "Jurnal pembalik (kebalikan dari penyesuaian)",
        lines: [
          { account: "Utang Gaji", debit: 3_000_000 },
          { account: "Beban Gaji", credit: 3_000_000 },
        ],
        note: "Saat gaji benar-benar dibayar 3 Feb, cukup catat: D Beban Gaji, K Kas, tanpa perlu memikirkan utang gaji lagi.",
      },
      {
        type: "journalExercise",
        prompt:
          "Akhir periode dibuat penyesuaian piutang bunga: D Piutang Bunga Rp600.000, K Pendapatan Bunga Rp600.000. Buat jurnal pembaliknya di awal periode berikutnya.",
        accounts: ["Pendapatan Bunga", "Piutang Bunga", "Kas", "Utang Bunga"],
        answer: [
          { account: "Pendapatan Bunga", debit: 600_000 },
          { account: "Piutang Bunga", credit: 600_000 },
        ],
        hint: "Jurnal pembalik = kebalikan persis dari jurnal penyesuaian. Tukar posisi debit dan kreditnya.",
      },
      {
        type: "journalExercise",
        prompt:
          "Penyesuaian utang bunga pinjaman: D Beban Bunga Rp250.000, K Utang Bunga Rp250.000. Buat jurnal pembaliknya.",
        accounts: ["Utang Bunga", "Beban Bunga", "Kas", "Piutang Bunga"],
        answer: [
          { account: "Utang Bunga", debit: 250_000 },
          { account: "Beban Bunga", credit: 250_000 },
        ],
        hint: "Balik posisinya: yang tadinya didebit sekarang dikredit, dan sebaliknya.",
      },
      {
        type: "case",
        title: "Studi Kasus: Bunga Deposito CV Sumber Rezeki",
        html: "Akhir Desember, CV Sumber Rezeki mengakui piutang bunga deposito Rp600.000 yang baru cair 10 Januari (D Piutang Bunga, K Pendapatan Bunga). Pada 1 Januari dibuat <strong>jurnal pembalik</strong> (D Pendapatan Bunga Rp600.000, K Piutang Bunga Rp600.000). Saat bunga benar-benar diterima 10 Januari sebesar Rp600.000, staf cukup mencatat D Kas, K Pendapatan Bunga, seperti penerimaan biasa. <em>Pelajaran:</em> jurnal pembalik membuat penerimaan/pembayaran riil dicatat normal tanpa risiko mengakui pendapatan dua kali.",
      },
      {
        type: "case",
        title: "Studi Kasus: Mengurangi kesalahan staf baru",
        html: "Di perusahaan dengan banyak transaksi rutin, jurnal pembalik membuat staf akuntansi cukup mencatat pembayaran seperti biasa tanpa harus ingat penyesuaian bulan lalu, mengurangi risiko salah catat.",
      },
      {
        type: "takeaways",
        items: [
          "Jurnal pembalik bersifat opsional, dibuat di awal periode.",
          "Hanya penyesuaian akrual & dimuka (metode tertentu) yang dibalik.",
          "Tujuannya: menyederhanakan & mengamankan pencatatan rutin berikutnya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Tujuan utama jurnal pembalik adalah…",
            options: [
              "Menghapus laba periode lalu",
              "Mempermudah & mencegah salah catat di periode baru",
              "Menutup akun nominal",
              "Wajib agar laporan benar",
            ],
            answer: 1,
            explain: "Jurnal pembalik opsional; tujuannya menyederhanakan pencatatan rutin periode berikutnya.",
          },
          {
            q: "Kapan jurnal pembalik dibuat?",
            options: [
              "Di akhir periode bersamaan dengan penyesuaian",
              "Di awal periode akuntansi berikutnya",
              "Saat menyusun neraca lajur",
              "Setiap kali ada transaksi kas",
            ],
            answer: 1,
            explain:
              "Jurnal pembalik dibuat pada hari pertama periode baru untuk membalik penyesuaian tertentu dari periode sebelumnya.",
          },
          {
            q: "Penyesuaian utang gaji: D Beban Gaji Rp3.000.000, K Utang Gaji Rp3.000.000. Jurnal pembaliknya?",
            options: [
              "D: Beban Gaji 3jt; K: Utang Gaji 3jt",
              "D: Utang Gaji 3jt; K: Beban Gaji 3jt",
              "D: Utang Gaji 3jt; K: Kas 3jt",
              "D: Beban Gaji 3jt; K: Kas 3jt",
            ],
            answer: 1,
            explain:
              "Jurnal pembalik adalah kebalikan persis dari penyesuaian: D Utang Gaji, K Beban Gaji.",
          },
          {
            q: "Manakah penyesuaian yang UMUMNYA TIDAK perlu/boleh dibalik?",
            options: [
              "Beban yang masih harus dibayar (akrual)",
              "Pendapatan yang masih harus diterima (akrual)",
              "Penyusutan peralatan",
              "Utang bunga yang masih harus dibayar",
            ],
            answer: 2,
            explain:
              "Penyusutan tidak dibalik karena memakai akun kontra permanen (Akumulasi Penyusutan). Yang lazim dibalik adalah penyesuaian akrual & beberapa metode dimuka.",
          },
          {
            q: "Apa manfaat praktis jurnal pembalik bagi staf akuntansi?",
            options: [
              "Membuat laporan keuangan lebih besar labanya",
              "Memungkinkan pencatatan pembayaran/penerimaan rutin tanpa mengingat penyesuaian periode lalu",
              "Menghapus kewajiban perusahaan",
              "Menggantikan jurnal penutup",
            ],
            answer: 1,
            explain:
              "Setelah dibalik, transaksi kas berikutnya dicatat normal (mis. D Beban, K Kas) tanpa perlu memikirkan akun utang/piutang penyesuaian.",
          },
          {
            q: "Tanpa jurnal pembalik, saat membayar gaji yang sudah diakui sebagai utang gaji, jurnal yang benar adalah…",
            options: [
              "D: Beban Gaji; K: Kas",
              "D: Utang Gaji; K: Kas",
              "D: Kas; K: Utang Gaji",
              "D: Beban Gaji; K: Utang Gaji",
            ],
            answer: 1,
            explain:
              "Tanpa pembalik, pembayaran harus melunasi kewajiban: D Utang Gaji, K Kas, staf harus ingat ada utang gaji dari periode lalu.",
          },
        ],
      },
    ],
  },
];
