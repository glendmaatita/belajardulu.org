import type { Lesson } from "../../../types";

export const level5: Lesson[] = [
  // ============================================================
  {
    id: "alur-end-to-end",
    levelId: "tumbuh",
    order: 1,
    title: "Alur Ekspor End-to-End",
    summary:
      "Merangkai seluruh proses ekspor dari mencari buyer sampai dana masuk, sekaligus memahami celah modal kerja: kamu membayar produsen lebih dulu dan dibayar buyer belakangan.",
    durationMin: 15,
    tags: ["alur ekspor", "prosedur", "modal kerja"],
    blocks: [
      {
        type: "paragraph",
        html: "Setelah memahami tiap bagian, mari rangkai semuanya. Satu siklus ekspor umumnya menempuh enam tahap. Sebagai eksportir non-produsen, ada satu hal penting yang harus kamu jaga di sepanjang alur ini: <strong>arus kas</strong>, karena kamu membayar produsen lebih dulu dan menerima pembayaran buyer belakangan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Cargo_ship_Ocean_Freedom.JPG?width=500",
        alt: "Kapal barang berlayar di laut lepas",
        caption: "Satu siklus ekspor berakhir saat barang berlayar dan pembayaran dari buyer masuk.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "video",
        comp: "AlurEkspor",
        title: "Video: Alur Proses Ekspor",
        caption: "Dari mencari pembeli sampai menerima pembayaran.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "<strong>Cari buyer dan sepakati</strong>: kirim quotation, negosiasi, tutup dengan kontrak atau Purchase Order.",
          "<strong>Sepakati Incoterms dan pembayaran</strong>: mis. FOB dengan pembayaran sebagian di muka.",
          "<strong>Beli dan siapkan barang</strong>: pesan ke produsen, jaga mutu (QC), packing ekspor.",
          "<strong>Ajukan PEB ke Bea Cukai</strong>: lewat CEISA, sampai terbit NPE.",
          "<strong>Pengapalan</strong>: barang dimuat, terbit Bill of Lading.",
          "<strong>Kirim dokumen dan terima pembayaran</strong>: devisa hasil ekspor masuk.",
        ],
      },
      {
        type: "callout",
        tone: "key",
        title: "Celah modal kerja",
        html: "Uang keluar di awal (bayar produsen, biaya ekspor) tetapi masuk di akhir (buyer membayar). Selisih waktu ini adalah <strong>celah modal kerja</strong>. Mengelolanya bisa lewat uang muka dari buyer, skema PO atau konsinyasi dengan produsen, atau pembiayaan ekspor.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Posisi kas eksportir sepanjang satu siklus (ilustrasi)",
        unit: "Rp juta",
        source: "Ilustrasi edukatif",
        note: "Kas menyelam ke bawah nol sebelum pembayaran buyer masuk; titik terdalam itulah modal kerja yang harus kamu sediakan.",
        data: [
          { label: "Hari 0", value: 0 },
          { label: "Bayar produsen", value: -46 },
          { label: "Biaya ekspor", value: -55 },
          { label: "Barang berlayar", value: -55 },
          { label: "Buyer bayar", value: 9 },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Kamu membayar produsen Rp46 juta di hari ke-0 dan biaya ekspor Rp9 juta di hari ke-20. Buyer baru membayar di hari ke-45. Berapa modal kerja maksimum yang harus kamu tanggung sebelum dibayar?",
        answer: 55000000,
        tolerance: 1000,
        prefix: "Rp",
        solution: "Total uang keluar sebelum pembayaran masuk = 46 juta + 9 juta = 55 juta. Itulah titik kas terdalam.",
        hint: "Jumlahkan semua pengeluaran yang terjadi sebelum buyer membayar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Cara memperkecil celah modal kerja",
        html: "Minta <strong>uang muka</strong> (mis. 30 persen) dari buyer, sepakati bayar ke produsen <strong>setelah</strong> ada PO, atau gunakan <strong>konsinyasi</strong>. Untuk order besar, ada pembiayaan ekspor dari bank atau LPEI.",
      },
      {
        type: "case",
        title: "Studi Kasus: Uang muka menyelamatkan arus kas",
        html: "Seorang eksportir mebel menerima order Rp200 juta. Ia meminta uang muka 30 persen (Rp60 juta) saat kontrak diteken, dan memakainya untuk membayar sebagian ke produsen. Dengan begitu, modal kerja yang harus ia tomboki turun drastis, dan ia tidak perlu berutang mahal. Sisanya dibayar buyer saat dokumen dikirim. Negosiasi termin pembayaran sama pentingnya dengan negosiasi harga.",
      },
      {
        type: "case",
        title: "Studi Kasus: Satu siklus penuh dengan angka",
        html: "Rina menutup kontrak ekspor kopi olahan senilai Rp150 juta dengan termin bayar penuh saat dokumen dikirim. Di hari ke-0 ia membayar produsen Rp95 juta, lalu di hari ke-15 mengeluarkan biaya ekspor (packing, freight, dokumen) sekitar Rp12 juta. Barang berlayar di hari ke-20 dan buyer membayar di hari ke-50. Selama 50 hari itu kasnya minus hingga Rp107 juta, dan setelah dibayar ia membukukan laba kotor sekitar Rp43 juta. Pelajarannya: laba baru terasa di akhir, tetapi modal kerja harus siap di awal.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap tahap ekspor dengan keluaran (output) utamanya.",
        pairs: [
          { left: "Sepakati dengan buyer", right: "Kontrak / Purchase Order" },
          { left: "Ajukan PEB", right: "NPE dari Bea Cukai" },
          { left: "Pengapalan", right: "Bill of Lading" },
          { left: "Kirim dokumen", right: "Pembayaran / devisa masuk" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Siklus ekspor menempuh enam tahap dari cari buyer sampai dana masuk.",
          "Keluaran kunci: kontrak/PO, NPE, Bill of Lading, lalu pembayaran.",
          "Celah modal kerja muncul karena bayar produsen di awal, dibayar buyer di akhir.",
          "Uang muka, skema PO/konsinyasi, dan pembiayaan ekspor memperkecil celah itu.",
          "Negosiasi termin pembayaran sama pentingnya dengan negosiasi harga.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Urutan yang benar di awal siklus ekspor adalah?",
            options: [
              "Pengapalan lalu cari buyer",
              "Cari buyer dan sepakati, lalu siapkan barang",
              "Ajukan PEB sebelum ada buyer",
              "Terima pembayaran sebelum kirim barang selalu",
            ],
            answer: 1,
            explain: "Alurnya dimulai dari menyepakati dengan buyer, baru menyiapkan barang, PEB, pengapalan, dan pembayaran.",
          },
          {
            q: "Apa itu celah modal kerja dalam ekspor?",
            options: [
              "Selisih kurs rupiah dan dolar",
              "Jeda antara uang keluar di awal dan uang masuk di akhir",
              "Pajak yang belum dibayar",
              "Biaya asuransi",
            ],
            answer: 1,
            explain: "Kamu membayar produsen dan biaya ekspor lebih dulu, sementara buyer membayar belakangan.",
          },
          {
            q: "NPE adalah keluaran dari tahap?",
            options: ["Cari buyer", "Pengajuan PEB ke Bea Cukai", "Pembayaran", "Packing"],
            answer: 1,
            explain: "Setelah PEB diajukan dan disetujui, Bea Cukai menerbitkan NPE sebagai izin muat.",
          },
          {
            q: "Cara memperkecil celah modal kerja, kecuali?",
            options: [
              "Meminta uang muka dari buyer",
              "Bayar produsen setelah ada PO",
              "Menaikkan harga tanpa alasan",
              "Menggunakan pembiayaan ekspor",
            ],
            answer: 2,
            explain: "Menaikkan harga sembarangan bukan solusi arus kas dan justru bisa menghilangkan buyer.",
          },
          {
            q: "Bukti kontrak pengangkutan yang terbit saat pengapalan adalah?",
            options: ["Invoice", "Bill of Lading", "NPE", "Packing List"],
            answer: 1,
            explain: "Bill of Lading (atau Airway Bill untuk udara) terbit dari pengangkut sebagai bukti kontrak angkut.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "model-tanpa-pabrik",
    levelId: "tumbuh",
    order: 2,
    title: "Model Ekspor Modal Kecil Tanpa Pabrik",
    summary:
      "Empat cara memulai ekspor tanpa punya pabrik dan tanpa modal besar: undername, agregator, konsinyasi, dan dropship marketplace lintas negara. Lengkap dengan jujur soal modal, margin, kendali, dan risiko tiap model.",
    durationMin: 15,
    tags: ["undername", "agregator", "modal kecil"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu tidak perlu punya pabrik untuk mulai ekspor. Sebagai <strong>eksportir non-produsen</strong>, tugasmu adalah menjembatani produsen lokal (UMKM, petani, perajin) dengan buyer di luar negeri. Ada beberapa model yang bisa dimulai dengan modal kecil, masing-masing dengan konsekuensi berbeda pada modal, margin, kendali, dan risiko.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Woman_making_batik%2C_Indonesia_Tanah_Airku%2C_p81.jpg?width=500",
        alt: "Perempuan membuat batik tulis",
        caption: "Perajin batik dan UMKM bisa menembus pasar global lewat eksportir penghubung, tanpa perlu pabrik.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "paragraph",
        html: "Tidak ada model yang paling benar. Yang tepat adalah yang cocok dengan modal, jaringan, dan kesiapan dokumenmu saat ini. Banyak eksportir mulai dari model paling ringan, lalu naik kelas seiring modal dan pengalaman bertambah.",
      },
      {
        type: "list",
        items: [
          "<strong>Undername (pinjam bendera)</strong>: kamu memakai badan hukum eksportir lain untuk mengurus PEB, membayar fee per transaksi. Cocok saat kamu belum punya legalitas ekspor lengkap. Tanggung jawab atas isi barang tetap ada padamu.",
          "<strong>Agregator / konsolidasi</strong>: kamu mengumpulkan barang dari banyak produsen kecil menjadi satu volume yang layak dikirim, lalu mengekspornya. Nilai tambahmu ada di kurasi mutu dan konsolidasi.",
          "<strong>Konsinyasi dengan produsen</strong>: kamu membawa barang produsen tanpa membelinya lebih dulu; produsen dibayar setelah barang terjual atau setelah buyer membayar. Ini memperkecil modal kerja.",
          "<strong>Dropship / marketplace lintas negara</strong>: kamu menjual lewat Etsy, Amazon, atau Alibaba; barang dikirim saat ada pesanan. Modal paling ringan, tetapi margin ditekan biaya platform dan ongkos kirim satuan.",
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "Undername bukan lepas tanggung jawab",
        html: "Meski PEB memakai bendera perusahaan lain, kamu tetap bertanggung jawab atas kebenaran isi, dokumen, dan legalitas barang. Pilih mitra undername yang tepercaya dan sepakati fee serta pembagian tanggung jawab secara tertulis.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser parameter modal, volume, dan margin pada simulator berikut untuk melihat model mana yang paling masuk akal untuk kondisimu.",
      },
      {
        type: "widget",
        widget: "SimulatorModelEkspor",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Modal awal vs potensi margin per model (ilustrasi)",
        unit: "skor relatif",
        source: "Ilustrasi edukatif",
        note: "Model dengan modal awal ringan (dropship) cenderung bermargin tipis; model yang menuntut modal dan kendali lebih besar (agregator) berpeluang margin lebih tebal.",
        data: [
          { label: "Dropship: modal", value: 1, color: "#94a3b8" },
          { label: "Dropship: margin", value: 2, color: "#22c55e" },
          { label: "Undername: modal", value: 3, color: "#94a3b8" },
          { label: "Undername: margin", value: 4, color: "#22c55e" },
          { label: "Agregator: modal", value: 6, color: "#94a3b8" },
          { label: "Agregator: margin", value: 7, color: "#22c55e" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Naik kelas dari dropship ke agregator",
        html: "Sari mulai dengan menjual anyaman perajin desanya di Etsy secara dropship. Rata-rata ia menjual 40 item per bulan dengan margin bersih hanya sekitar Rp15.000 per item, jadi labanya sekitar Rp600.000 sebulan. Setelah punya pembeli tetap yang memesan grosir, ia beralih menjadi agregator: mengumpulkan 500 anyaman dari 10 perajin, mengekspor sekali kirim dengan margin Rp40.000 per item. Sekali order labanya menjadi sekitar Rp20 juta, walau ia harus menyiapkan modal pembelian dan biaya ekspor lebih besar.",
      },
      {
        type: "case",
        title: "Studi Kasus: Undername tanpa legalitas ekspor sendiri",
        html: "Doni belum punya NIB dengan izin ekspor lengkap, tetapi sudah memegang buyer kecil di Malaysia yang memesan kopi bubuk senilai Rp30 juta. Ia memakai jasa undername sebuah eksportir tepercaya dengan fee Rp1,5 juta per pengapalan. Dokumen PEB terbit atas nama perusahaan mitra, sedangkan Doni tetap mengurus mutu barang, kemasan, dan kebenaran isi. Fee Rp1,5 juta itu hanya 5 persen dari nilai order, jauh lebih murah dan cepat dibanding menunda ekspor berbulan-bulan demi mengurus legalitas sendiri. Setelah beberapa kali jalan, barulah ia melengkapi legalitasnya sendiri.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap model menurut kecocokannya bagi pemula bermodal sangat kecil, atau bagi yang sudah punya modal dan kesiapan lebih.",
        buckets: ["Cocok untuk pemula modal kecil", "Butuh modal / kesiapan lebih"],
        items: [
          { text: "Dropship lewat Etsy saat ada pesanan", bucket: "Cocok untuk pemula modal kecil" },
          { text: "Undername memakai bendera eksportir lain", bucket: "Cocok untuk pemula modal kecil" },
          { text: "Konsinyasi, produsen dibayar setelah laku", bucket: "Cocok untuk pemula modal kecil" },
          { text: "Agregator membeli 500 item dari 10 perajin", bucket: "Butuh modal / kesiapan lebih" },
          { text: "Mengekspor satu kontainer penuh atas nama sendiri", bucket: "Butuh modal / kesiapan lebih" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Kamu memakai jasa undername dengan fee Rp1.500.000 per pengapalan. Dalam sebulan kamu melakukan 3 kali pengapalan. Berapa total fee undername yang kamu bayar bulan itu?",
        answer: 4500000,
        tolerance: 1000,
        prefix: "Rp",
        solution: "Total fee = Rp1.500.000 x 3 pengapalan = Rp4.500.000.",
        hint: "Kalikan fee per pengapalan dengan jumlah pengapalan.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap model ekspor dengan ciri utamanya.",
        pairs: [
          { left: "Undername", right: "Pinjam badan hukum eksportir lain, bayar fee" },
          { left: "Agregator", right: "Konsolidasi barang banyak produsen kecil" },
          { left: "Konsinyasi", right: "Produsen dibayar setelah barang laku" },
          { left: "Dropship marketplace", right: "Jual lewat Etsy/Amazon, kirim per pesanan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Ekspor bisa dimulai tanpa pabrik; kamu menjembatani produsen lokal dan buyer luar negeri.",
          "Undername ringan modal tetapi tanggung jawab isi barang tetap padamu.",
          "Agregator butuh modal lebih besar tetapi berpeluang margin lebih tebal.",
          "Konsinyasi memperkecil modal kerja karena produsen dibayar belakangan.",
          "Dropship marketplace paling ringan modal tetapi margin ditekan biaya platform.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa arti model undername dalam ekspor?",
            options: [
              "Mengekspor tanpa dokumen apa pun",
              "Memakai badan hukum eksportir lain untuk mengurus PEB dengan membayar fee",
              "Menjual barang di dalam negeri saja",
              "Membeli pabrik milik orang lain",
            ],
            answer: 1,
            explain: "Undername berarti meminjam bendera perusahaan eksportir lain untuk PEB, dengan membayar fee per transaksi.",
          },
          {
            q: "Pada model undername, siapa yang bertanggung jawab atas kebenaran isi barang?",
            options: [
              "Sepenuhnya pemilik bendera",
              "Bea Cukai",
              "Kamu sebagai pemilik barang tetap bertanggung jawab",
              "Tidak ada yang bertanggung jawab",
            ],
            answer: 2,
            explain: "Meski PEB memakai bendera lain, tanggung jawab atas isi dan legalitas barang tetap ada pada pemilik barang.",
          },
          {
            q: "Apa nilai tambah utama seorang agregator ekspor?",
            options: [
              "Membuat sendiri seluruh barang",
              "Mengumpulkan dan mengkurasi barang banyak produsen kecil menjadi satu volume",
              "Menurunkan mutu agar murah",
              "Menghindari dokumen ekspor",
            ],
            answer: 1,
            explain: "Agregator memberi nilai lewat konsolidasi volume dan kurasi mutu dari banyak produsen kecil.",
          },
          {
            q: "Model mana yang paling memperkecil kebutuhan modal kerja untuk membeli barang?",
            options: [
              "Membeli tunai seluruh stok di muka",
              "Konsinyasi, produsen dibayar setelah barang laku",
              "Menimbun barang bertahun-tahun",
              "Membangun gudang besar",
            ],
            answer: 1,
            explain: "Dengan konsinyasi kamu tidak membeli di muka; produsen dibayar setelah barang terjual, sehingga modal kerja lebih kecil.",
          },
          {
            q: "Kelemahan utama model dropship marketplace lintas negara adalah?",
            options: [
              "Butuh pabrik sendiri",
              "Margin tertekan biaya platform dan ongkos kirim satuan",
              "Tidak boleh dilakukan UMKM",
              "Selalu rugi",
            ],
            answer: 1,
            explain: "Modalnya paling ringan, tetapi biaya platform dan ongkos kirim per pesanan menekan margin.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "insentif-pembiayaan",
    levelId: "tumbuh",
    order: 3,
    title: "Insentif dan Pembiayaan Ekspor",
    summary:
      "Negara memberi banyak dukungan untuk eksportir: PPN 0% yang bisa dimintakan restitusi, pembiayaan dari LPEI/Indonesia Eximbank, KUR, dan bank, sampai fasilitas KITE. Bagaimana eksportir kecil memanfaatkannya.",
    durationMin: 15,
    tags: ["PPN 0%", "restitusi", "LPEI"],
    blocks: [
      {
        type: "paragraph",
        html: "Mengekspor bukan cuma soal biaya, tetapi juga soal insentif. Ada dua hal besar yang menguntungkan eksportir: <strong>perlakuan pajak</strong> yang khusus dan <strong>akses pembiayaan</strong> yang disediakan negara. Memahami keduanya bisa membuat arus kasmu jauh lebih sehat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Ekspor kena PPN 0%, bukan bebas PPN",
        html: "Ekspor barang dikenai PPN dengan tarif <strong>0 persen</strong>, bukan dibebaskan. Bedanya penting: karena tetap termasuk objek PPN, maka <strong>PPN masukan</strong> atas pembelian bahan atau jasa terkait ekspor bisa dimintakan pengembalian (<strong>restitusi</strong>). Ini keuntungan kas bagi eksportir yang berstatus PKP.",
      },
      {
        type: "paragraph",
        html: "Artinya, saat kamu membeli bahan dari pemasok yang memungut PPN, uang PPN itu tidak hangus. Selama kamu Pengusaha Kena Pajak (PKP) dan barangnya diekspor, PPN masukan tadi bisa kamu minta kembali ke negara lewat mekanisme restitusi.",
      },
      {
        type: "list",
        items: [
          "<strong>LPEI (Indonesia Eximbank)</strong>: lembaga negara yang khusus membiayai dan menjamin ekspor, termasuk pendampingan eksportir baru.",
          "<strong>KUR</strong>: Kredit Usaha Rakyat berbunga rendah yang bisa dipakai UMKM untuk modal kerja ekspor.",
          "<strong>Bank umum</strong>: menyediakan pembiayaan ekspor, mis. pembiayaan atas dasar Purchase Order atau L/C.",
          "<strong>KITE (Kemudahan Impor Tujuan Ekspor)</strong>: fasilitas bagi yang mengimpor bahan baku untuk diolah lalu diekspor, sehingga bea masuk dan pajak impor bahan bakunya ditangguhkan atau dibebaskan.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba kalkulatornya",
        html: "Gunakan kalkulator trade finance berikut untuk memperkirakan kebutuhan pembiayaan dan biayanya sesuai nilai order dan termin pembayaranmu.",
      },
      {
        type: "widget",
        widget: "KalkulatorTradeFinance",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perbandingan sumber pembiayaan ekspor untuk usaha kecil (ilustrasi)",
        unit: "skor kemudahan akses (0-10)",
        source: "Ilustrasi edukatif",
        note: "KUR dan bank umum relatif mudah diakses UMKM; LPEI memberi produk khusus ekspor; KITE relevan hanya bila kamu mengolah bahan impor.",
        data: [
          { label: "KUR", value: 8, color: "#22c55e" },
          { label: "Bank umum", value: 7, color: "#3b82f6" },
          { label: "LPEI", value: 6, color: "#6366f1" },
          { label: "KITE", value: 4, color: "#f59e0b" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Restitusi PPN menambah napas kas",
        html: "Budi, seorang PKP, membeli bahan kopi dan kemasan senilai Rp80 juta dari pemasok yang memungut PPN masukan Rp8,8 juta (11 persen). Ia mengekspor produk jadinya, yang kena PPN 0 persen. Karena PPN keluarannya nol sementara PPN masukannya Rp8,8 juta, ia berhak meminta restitusi sekitar Rp8,8 juta. Dana itu kembali menjadi modal kerja untuk order berikutnya.",
      },
      {
        type: "case",
        title: "Sejarah: Lahirnya Indonesia Eximbank (LPEI) tahun 2009",
        html: "Lembaga Pembiayaan Ekspor Indonesia (LPEI), yang dikenal sebagai Indonesia Eximbank, dibentuk berdasarkan Undang-Undang Nomor 2 Tahun 2009 dan mulai beroperasi pada 1 September 2009, meneruskan peran Bank Ekspor Indonesia. Negara mendirikannya karena banyak eksportir, terutama UMKM, sulit mendapat pembiayaan dari bank biasa yang menilai ekspor berisiko tinggi. Sejak itu LPEI menyediakan pembiayaan, penjaminan, asuransi, sekaligus pendampingan bagi eksportir baru. Pelajarannya: dukungan pembiayaan ekspor bukan hal baru, dan pintu ini terbuka juga bagi usaha kecil.",
      },
      {
        type: "stats",
        items: [
          { value: "0%", label: "Tarif PPN ekspor barang", sub: "PPN masukan bisa direstitusi bagi PKP", color: "#22c55e" },
          { value: "2009", label: "Tahun LPEI mulai beroperasi", sub: "Indonesia Eximbank, lembaga pembiayaan ekspor negara", color: "#6366f1" },
          { value: "11%", label: "PPN masukan yang bisa kembali", sub: "Contoh tarif atas pembelian bahan ekspor", color: "#3b82f6" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Kamu (PKP) membeli bahan baku untuk ekspor senilai Rp50.000.000 dan pemasok memungut PPN masukan 11 persen. Karena ekspor kena PPN 0 persen, berapa PPN masukan yang bisa kamu mintakan restitusi?",
        answer: 5500000,
        tolerance: 1000,
        prefix: "Rp",
        solution: "PPN masukan = 11 persen x Rp50.000.000 = Rp5.500.000. Karena PPN keluaran ekspor 0 persen, seluruh Rp5.500.000 bisa dimintakan restitusi.",
        hint: "Hitung 11 persen dari nilai pembelian bahan baku.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan sebagai benar atau keliru soal insentif dan pembiayaan ekspor.",
        buckets: ["Benar", "Keliru"],
        items: [
          { text: "Ekspor barang dikenai PPN tarif 0 persen", bucket: "Benar" },
          { text: "PPN masukan atas pembelian bahan ekspor bisa direstitusi bagi PKP", bucket: "Benar" },
          { text: "LPEI adalah lembaga negara yang membiayai dan menjamin ekspor", bucket: "Benar" },
          { text: "Ekspor sepenuhnya dibebaskan dari sistem PPN sehingga masukan hangus", bucket: "Keliru" },
          { text: "KITE adalah fasilitas untuk barang yang dijual di dalam negeri", bucket: "Keliru" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Ekspor kena PPN 0 persen, bukan bebas PPN, sehingga PPN masukan bisa direstitusi bagi PKP.",
          "Restitusi PPN mengembalikan uang PPN pembelian bahan menjadi modal kerja.",
          "LPEI/Indonesia Eximbank khusus membiayai dan menjamin ekspor.",
          "KUR dan bank umum menyediakan modal kerja ekspor yang mudah diakses UMKM.",
          "KITE membebaskan atau menangguhkan pungutan impor bahan baku yang diolah lalu diekspor.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Ekspor barang di Indonesia dikenai PPN dengan tarif?",
            options: ["11 persen", "0 persen", "Dibebaskan tanpa objek PPN", "12 persen tetap"],
            answer: 1,
            explain: "Ekspor barang kena PPN tarif 0 persen, tetap sebagai objek PPN, sehingga PPN masukannya bisa direstitusi.",
          },
          {
            q: "Mengapa PPN 0 persen menguntungkan kas eksportir PKP?",
            options: [
              "Karena tidak perlu lapor pajak",
              "Karena PPN masukan atas pembelian bahan bisa dimintakan restitusi",
              "Karena harga jual jadi lebih murah",
              "Karena bebas semua pajak",
            ],
            answer: 1,
            explain: "Dengan tarif 0 persen, PPN keluaran nol tetapi PPN masukan tetap bisa diminta kembali (restitusi).",
          },
          {
            q: "Lembaga negara yang khusus membiayai dan menjamin ekspor adalah?",
            options: ["BPJS", "LPEI / Indonesia Eximbank", "OJK", "BPS"],
            answer: 1,
            explain: "LPEI (Indonesia Eximbank) adalah lembaga pembiayaan ekspor milik negara.",
          },
          {
            q: "Fasilitas KITE ditujukan untuk?",
            options: [
              "Barang yang dijual di dalam negeri",
              "Impor bahan baku yang diolah lalu diekspor",
              "Wisatawan yang belanja",
              "Ekspor tanpa dokumen",
            ],
            answer: 1,
            explain: "KITE (Kemudahan Impor Tujuan Ekspor) membebaskan atau menangguhkan pungutan impor bahan baku yang akan diekspor kembali setelah diolah.",
          },
          {
            q: "Kamu PKP membeli bahan Rp100 juta dengan PPN masukan 11 persen, lalu mengekspornya. Berapa yang bisa direstitusi?",
            options: ["Rp0", "Rp11 juta", "Rp1,1 juta", "Rp100 juta"],
            answer: 1,
            explain: "PPN masukan = 11 persen x Rp100 juta = Rp11 juta, dan seluruhnya bisa direstitusi karena PPN keluaran ekspor 0 persen.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "bea-keluar-dhe",
    levelId: "tumbuh",
    order: 4,
    title: "Bea Keluar, Pungutan Ekspor, dan Aturan Devisa",
    summary:
      "Tidak semua ekspor kena bea keluar. Pelajaran ini menjelaskan kapan bea keluar dan pungutan ekspor berlaku (komoditas tertentu saja), cara menghitungnya, serta aturan wajib simpan devisa hasil ekspor SDA (DHE) berdasarkan PP 8/2025.",
    durationMin: 15,
    tags: ["bea keluar", "DHE", "devisa"],
    blocks: [
      {
        type: "paragraph",
        html: "Banyak eksportir pemula khawatir ekspornya akan dipotong bea keluar besar. Kabar baiknya: <strong>tidak semua ekspor kena bea keluar</strong>. Bea keluar hanya dikenakan pada komoditas tertentu. Untuk eksportir kecil produk olahan, kerajinan, atau makanan, bea keluar umumnya <strong>tidak berlaku</strong>.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Komoditas yang kena bea keluar",
        html: "Bea keluar dikenakan pada komoditas tertentu, antara lain kelapa sawit/CPO dan turunannya, produk kayu, kulit, biji kakao, serta produk mineral tertentu. Kalau kamu mengekspor mebel jadi, kopi olahan, atau anyaman, biasanya kamu tidak masuk daftar ini.",
      },
      {
        type: "paragraph",
        html: "Bea keluar dihitung dari <strong>tarif x jumlah x harga</strong>. Untuk CPO, harga yang dipakai adalah Harga Patokan Ekspor (HPE) dan kurs, dan tarifnya berubah tiap periode. Karena itu angka bea keluar selalu bersifat sementara; sebut sebagai ilustrasi atau sekitar.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Pungutan Ekspor CPO itu terpisah dari bea keluar",
        html: "Khusus CPO, selain bea keluar ada <strong>Pungutan Ekspor</strong> yang dikelola BPDP (Badan Pengelola Dana Perkebunan). Keduanya berbeda dan dihitung sendiri-sendiri. Tarif pungutan ini pernah dinaikkan menjadi sekitar 10 persen dari harga referensi, dan bisa berubah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba kalkulatornya",
        html: "Gunakan kalkulator bea keluar berikut untuk memperkirakan besarnya bea keluar bila komoditasmu memang termasuk yang dikenai.",
      },
      {
        type: "widget",
        widget: "KalkulatorBeaKeluar",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan Devisa Hasil Ekspor (DHE SDA)",
        html: "Berdasarkan <strong>PP Nomor 8 Tahun 2025</strong> (berlaku sejak 1 Maret 2025), eksportir SDA di sektor pertambangan nonmigas, perkebunan, kehutanan, dan perikanan wajib menyimpan <strong>100 persen</strong> devisa hasil ekspornya di sistem keuangan dalam negeri selama <strong>12 bulan</strong> (untuk nilai ekspor pada ambang tertentu). Sektor migas mengikuti PP 36 Tahun 2023. Bagi eksportir kecil produk manufaktur atau kerajinan, kewajiban DHE SDA ini umumnya tidak berlaku, tetapi tetap penting dipahami.",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Kewajiban simpan DHE SDA menurut PP 8/2025",
        unit: "persen devisa",
        source: "PP Nomor 8 Tahun 2025",
        note: "Sektor SDA tertentu wajib menyimpan 100 persen devisa hasil ekspornya di dalam negeri selama 12 bulan.",
        data: [
          { label: "Wajib disimpan di dalam negeri (12 bulan)", value: 100, color: "#3b82f6" },
          { label: "Bebas ditempatkan di luar", value: 0, color: "#e2e8f0" },
        ],
      },
      {
        type: "stats",
        items: [
          { value: "100%", label: "DHE SDA wajib disimpan", sub: "Devisa hasil ekspor sektor SDA tertentu", color: "#3b82f6" },
          { value: "12 bulan", label: "Jangka simpan di dalam negeri", sub: "Sesuai PP Nomor 8 Tahun 2025", color: "#6366f1" },
          { value: "1 Mar 2025", label: "Mulai berlaku PP 8/2025", sub: "Aturan DHE SDA yang diperketat", color: "#f59e0b" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Dua eksportir, dua nasib bea keluar",
        html: "Rani mengekspor kopi sangrai kemasan dan kerajinan rotan. Karena keduanya produk olahan, ekspornya <strong>tidak dikenai bea keluar</strong>, sehingga seluruh nilai FOB menjadi haknya. Bandingkan dengan eksportir CPO: atas tiap ton ia harus membayar bea keluar (sekitar puluhan dolar per ton, berubah tiap bulan mengikuti harga referensi) plus pungutan ekspor BPDP sekitar 10 persen dari harga referensi. Untuk pemula produk olahan, makanan, atau kerajinan, bea keluar hampir tidak pernah menjadi urusan. Pastikan saja lewat portal INSW.",
      },
      {
        type: "case",
        title: "Sejarah: Larangan ekspor nikel mentah 2020 dan dorongan hilirisasi",
        html: "Mulai 1 Januari 2020, Indonesia menghentikan ekspor bijih nikel mentah untuk memaksa pengolahan di dalam negeri (hilirisasi). Tujuannya agar nilai tambah dinikmati di dalam negeri, bukan sekadar mengekspor bahan mentah murah. Kebijakan komoditas seperti ini, termasuk bea keluar dan larangan ekspor, memang dipakai negara untuk mengarahkan industri. Bagi eksportir kecil produk jadi, pesannya jelas: produk olahan bernilai tambah lebih aman dari hambatan ekspor dibanding bahan mentah.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah komoditas yang termasuk kena bea keluar diekspor senilai Rp250.000.000 dengan tarif bea keluar (ilustrasi) 5 persen. Berapa bea keluar yang terutang?",
        answer: 12500000,
        tolerance: 1000,
        prefix: "Rp",
        solution: "Bea keluar = 5 persen x Rp250.000.000 = Rp12.500.000.",
        hint: "Kalikan tarif persen dengan nilai ekspor komoditas.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap komoditas: umumnya kena bea keluar, atau umumnya tidak kena bea keluar.",
        buckets: ["Umumnya kena bea keluar", "Umumnya tidak kena bea keluar"],
        items: [
          { text: "CPO (minyak sawit mentah)", bucket: "Umumnya kena bea keluar" },
          { text: "Biji kakao", bucket: "Umumnya kena bea keluar" },
          { text: "Produk kayu tertentu", bucket: "Umumnya kena bea keluar" },
          { text: "Mebel rotan jadi", bucket: "Umumnya tidak kena bea keluar" },
          { text: "Kopi olahan kemasan", bucket: "Umumnya tidak kena bea keluar" },
          { text: "Anyaman kerajinan", bucket: "Umumnya tidak kena bea keluar" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Tidak semua ekspor kena bea keluar; hanya komoditas tertentu seperti CPO, kayu, kulit, kakao, dan mineral tertentu.",
          "Eksportir kecil produk olahan, kerajinan, dan makanan umumnya tidak kena bea keluar.",
          "Bea keluar dihitung dari tarif x jumlah x harga, dan tarifnya berubah tiap periode.",
          "CPO juga kena Pungutan Ekspor terpisah yang dikelola BPDP, berbeda dari bea keluar.",
          "PP 8/2025 mewajibkan eksportir SDA tertentu menyimpan 100 persen devisa di dalam negeri selama 12 bulan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pernyataan yang benar tentang bea keluar adalah?",
            options: [
              "Semua ekspor pasti kena bea keluar",
              "Hanya komoditas tertentu yang kena bea keluar",
              "Bea keluar hanya untuk produk kerajinan",
              "Bea keluar sama dengan PPN",
            ],
            answer: 1,
            explain: "Bea keluar hanya dikenakan pada komoditas tertentu seperti CPO, kayu, kulit, kakao, dan mineral tertentu.",
          },
          {
            q: "Manakah komoditas yang umumnya TIDAK kena bea keluar?",
            options: ["CPO", "Biji kakao", "Mebel rotan jadi", "Produk kayu tertentu"],
            answer: 2,
            explain: "Produk olahan bernilai tambah seperti mebel rotan jadi umumnya tidak termasuk daftar komoditas kena bea keluar.",
          },
          {
            q: "Bea keluar dihitung dari?",
            options: [
              "Tarif x jumlah x harga",
              "Berat kontainer saja",
              "Jumlah karyawan",
              "Nilai kurs kemarin",
            ],
            answer: 0,
            explain: "Bea keluar dihitung dari tarif x jumlah x harga; untuk CPO harga memakai HPE dan kurs, dengan tarif yang berubah tiap periode.",
          },
          {
            q: "Pungutan Ekspor pada CPO dikelola oleh?",
            options: ["OJK", "BPDP (Badan Pengelola Dana Perkebunan)", "BPS", "Bea Cukai saja"],
            answer: 1,
            explain: "Pungutan Ekspor CPO dikelola BPDP dan terpisah dari bea keluar.",
          },
          {
            q: "Menurut PP 8/2025, kewajiban DHE SDA untuk sektor tertentu adalah?",
            options: [
              "Menyimpan 100 persen devisa di dalam negeri selama 12 bulan",
              "Menyimpan 50 persen selama 3 bulan",
              "Bebas menempatkan seluruh devisa di luar negeri",
              "Tidak ada kewajiban apa pun",
            ],
            answer: 0,
            explain: "PP 8/2025 mewajibkan eksportir SDA di sektor tertentu menyimpan 100 persen devisa hasil ekspor di dalam negeri selama 12 bulan.",
          },
        ],
      },
    ],
  },
];
