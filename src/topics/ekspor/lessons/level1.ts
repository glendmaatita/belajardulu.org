import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "kenapa-ekspor",
    levelId: "mulai",
    order: 1,
    title: "Kenapa Ekspor, dan Kamu Tak Perlu Pabrik",
    summary:
      "Membongkar mitos bahwa ekspor hanya untuk pemilik pabrik. Kenali model eksportir non-produsen dan empat cara memulai tanpa memproduksi sendiri.",
    durationMin: 14,
    tags: ["ekspor", "eksportir non-produsen", "mindset"],
    blocks: [
      {
        type: "paragraph",
        html: "Banyak orang mengira <strong>ekspor</strong> hanya untuk perusahaan besar yang punya pabrik dan kontainer sendiri. Kenyataannya, sebagian besar barang yang diekspor dari Indonesia justru dibuat oleh UMKM, petani, dan perajin kecil, lalu dijual ke luar negeri oleh orang lain: sang eksportir. Kamu bisa jadi orang itu.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/VOC_ships_Mauritius_and_Zuid-Holland%2C_1628.jpg?width=500",
        alt: "Lukisan kapal-kapal dagang VOC di laut pada 1628",
        caption: "Kapal dagang VOC (1628). Dulu keuntungan terbesar perdagangan rempah Nusantara justru dinikmati para perantara.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "paragraph",
        html: "Model ini disebut <strong>eksportir non-produsen</strong> atau <em>trading company</em>. Kamu tidak memproduksi barang, melainkan menjadi <strong>jembatan</strong>: mencari produk bagus dari produsen lokal, menemukan pembeli di luar negeri, lalu mengurus agar barang sampai dan uang masuk. Modalmu bukan mesin, melainkan jaringan produsen, riset pasar, dan kepercayaan buyer.",
      },
      {
        type: "video",
        comp: "EksporTanpaPabrik",
        title: "Video: Ekspor Tanpa Punya Pabrik",
        caption: "Bagaimana orang biasa menjadi jembatan antara produsen lokal dan pembeli dunia.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Inti model ini",
        html: "Kamu tidak harus membuat barang untuk mengekspornya. Yang kamu jual adalah <strong>jasa menghubungkan</strong>: menemukan produk, meyakinkan buyer, dan mengurus proses ekspor. Nilai tambahmu ada di situ.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kenapa ekspor menggoda",
        html: "Pasar jadi jauh lebih luas dari sekadar dalam negeri, harga jual sering lebih tinggi, pembayaran dalam valuta asing, dan permintaan tidak bergantung pada satu pasar saja. Risikonya juga nyata (jarak, bahasa, pembayaran), dan itulah yang kita pelajari langkah demi langkah.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perkiraan harga per kg: dijual lokal vs diekspor (kopi specialty)",
        unit: "Rp ribu/kg",
        source: "Ilustrasi edukatif",
        note: "Selisih harga inilah ruang untuk margin eksportir sekaligus tambahan pendapatan bagi petani.",
        data: [
          { label: "Petani jual lokal", value: 65, color: "#f59e0b" },
          { label: "Harga ekspor (FOB)", value: 135, color: "#10b981" },
        ],
      },
      {
        type: "paragraph",
        html: "Ada beberapa <strong>cara memulai tanpa pabrik</strong>, dari yang paling ringan sampai paling mandiri. Masing-masing punya untung-rugi antara modal, margin, kendali, dan kerumitan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Bandingkan empat model ekspor tanpa pabrik. Perhatikan bahwa model bermodal kecil biasanya mengorbankan margin atau kendali, dan sebaliknya.",
      },
      { type: "widget", widget: "SimulatorModelEkspor" },
      {
        type: "stats",
        items: [
          { value: "4", label: "Model ekspor tanpa pabrik", sub: "mandiri, undername, agregator, marketplace" },
          { value: "0", label: "Pabrik yang wajib dimiliki" },
          { value: "3", label: "Modal utama penghubung", sub: "jaringan, riset pasar, kepercayaan buyer" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Perajin rotan dan seorang penghubung",
        html: "Seorang perajin rotan di Cirebon menjual kursi Rp250.000 per unit di pasar lokal. Seorang eksportir menemukan buyer di Belanda yang mau membeli seharga setara Rp600.000 per unit (FOB). Eksportir membeli dari perajin Rp300.000 (perajin untung lebih besar dari biasanya), menanggung biaya ekspor sekitar Rp120.000 per unit, dan tetap mengantongi margin sekitar Rp180.000 per unit. Semua menang, dan eksportir tidak memiliki satu pun mesin.",
      },
      {
        type: "case",
        title: "Sejarah: VOC, rempah, dan kuasa perdagangan",
        html: "Pada abad ke-17, kepulauan Nusantara adalah sumber rempah paling dicari di dunia. Tetapi keuntungan terbesar justru dinikmati para <strong>pedagang perantara</strong> dan kongsi dagang seperti VOC (berdiri 1602), bukan petani rempahnya. Pelajarannya tetap relevan: nilai besar sering berada di tangan pihak yang menghubungkan produsen dengan pasar dunia. Bedanya, hari ini peran perantara itu bisa dijalankan secara adil dan terbuka oleh siapa saja.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan pernyataan ini: mitos atau fakta soal ekspor?",
        buckets: ["Mitos", "Fakta"],
        items: [
          { text: "Harus punya pabrik sendiri untuk bisa ekspor.", bucket: "Mitos" },
          { text: "Butuh modal miliaran sebelum mulai.", bucket: "Mitos" },
          { text: "Barang bisa dibeli dari produsen lokal lalu diekspor.", bucket: "Fakta" },
          { text: "Bisa mulai dari volume kecil lewat marketplace lintas negara.", bucket: "Fakta" },
          { text: "Eksportir wajib menguasai semua proses produksi.", bucket: "Mitos" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap model ekspor tanpa pabrik dengan ciri utamanya.",
        pairs: [
          { left: "Ekspor mandiri", right: "Margin dan kendali terbesar, paling banyak diurus" },
          { left: "Undername", right: "Pakai bendera perusahaan lain, bayar fee jasa" },
          { left: "Agregator ekspor", right: "Barang banyak produsen digabung jadi satu kiriman" },
          { left: "Marketplace / dropship", right: "Jual paket kecil lewat platform lintas negara" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Ekspor tidak menuntut kepemilikan pabrik; banyak eksportir hanyalah penghubung produsen dan buyer.",
          "Model ini disebut eksportir non-produsen atau trading company.",
          "Nilai tambahmu adalah menemukan produk, meyakinkan buyer, dan mengurus proses ekspor.",
          "Ada empat cara memulai tanpa pabrik: mandiri, undername, agregator, dan marketplace.",
          "Model bermodal kecil biasanya menukar margin atau kendali dengan kemudahan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu eksportir non-produsen?",
            options: [
              "Eksportir yang punya pabrik besar",
              "Eksportir yang membeli dari produsen lokal lalu menjual ke luar negeri",
              "Pegawai Bea Cukai",
              "Importir yang menjual di dalam negeri",
            ],
            answer: 1,
            explain: "Eksportir non-produsen tidak memproduksi sendiri; ia menjadi jembatan antara produsen dan pembeli luar negeri.",
          },
          {
            q: "Manakah yang merupakan mitos tentang ekspor?",
            options: [
              "Bisa mulai dari volume kecil",
              "Barang bisa dibeli dari UMKM lokal",
              "Wajib punya pabrik sendiri",
              "Pasar jadi lebih luas",
            ],
            answer: 2,
            explain: "Tidak wajib punya pabrik; banyak eksportir hanya menghubungkan produsen dengan buyer.",
          },
          {
            q: "Dalam model non-produsen, apa 'modal' utama seorang eksportir?",
            options: [
              "Mesin dan gudang",
              "Jaringan produsen, riset pasar, dan kepercayaan buyer",
              "Kapal kontainer",
              "Lahan pabrik",
            ],
            answer: 1,
            explain: "Nilai tambahnya ada pada kemampuan menghubungkan dan mengurus, bukan pada aset produksi.",
          },
          {
            q: "Model ekspor mana yang umumnya memberi margin dan kendali paling besar?",
            options: ["Agregator", "Undername", "Ekspor mandiri", "Dropship"],
            answer: 2,
            explain: "Ekspor mandiri paling menguntungkan dan paling terkendali, dengan konsekuensi paling banyak yang harus diurus.",
          },
          {
            q: "Apa keuntungan model undername bagi pemula?",
            options: [
              "Margin paling besar",
              "Bisa mulai cepat tanpa banyak urus izin sendiri",
              "Tidak ada tanggung jawab hukum sama sekali",
              "Tidak perlu buyer",
            ],
            answer: 1,
            explain: "Undername memakai bendera perusahaan lain sehingga cepat mulai, tetapi tanggung jawab atas barang dan dokumen tetap ada.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kesiapan-ekspor",
    levelId: "mulai",
    order: 2,
    title: "Menilai Kesiapan Ekspor",
    summary:
      "Cek jujur kesiapanmu sebelum mulai ekspor: pasokan produsen, konsistensi mutu, modal dan arus kas, pengetahuan pasar, legalitas, serta komunikasi dengan buyer.",
    durationMin: 13,
    tags: ["kesiapan", "modal kerja", "persiapan"],
    blocks: [
      {
        type: "paragraph",
        html: "Semangat saja tidak cukup untuk mulai ekspor. Sebelum menghubungi buyer pertama, ada baiknya kamu menilai kesiapan secara jujur. Sebagai eksportir non-produsen, kesiapanmu bukan soal punya pabrik, melainkan soal apakah kamu bisa <strong>mendapat pasokan yang stabil</strong>, menjaga mutu, dan menanggung arus kas sampai pembayaran buyer masuk.",
      },
      {
        type: "paragraph",
        html: "Ada enam aspek yang perlu dicek: <strong>pasokan produsen</strong>, <strong>konsistensi mutu</strong>, <strong>modal dan arus kas</strong>, <strong>pengetahuan pasar</strong>, <strong>legalitas</strong>, dan <strong>komunikasi dengan buyer</strong>. Kamu tidak perlu sempurna di semuanya untuk mulai, tetapi kamu perlu tahu di mana lubang terbesarmu agar bisa dibenahi lebih dulu.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Enam aspek kesiapan",
        html: "Pasokan (apakah produsen sanggup memenuhi pesanan berulang), mutu (apakah barang seragam tiap batch), modal kerja (uang untuk membeli barang sebelum buyer bayar), pengetahuan pasar (siapa yang mau dan berapa harganya), legalitas (izin usaha dan dokumen), dan komunikasi (bahasa serta respons cepat ke buyer).",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Bobot perhatian tiap aspek kesiapan bagi pemula",
        unit: "bobot relatif",
        source: "Ilustrasi edukatif",
        note: "Modal kerja dan pasokan biasanya jadi hambatan terbesar pemula, jadi benahi keduanya lebih dulu sebelum aspek lain.",
        data: [
          { label: "Modal & arus kas", value: 25, color: "#ef4444" },
          { label: "Pasokan produsen", value: 22, color: "#f59e0b" },
          { label: "Konsistensi mutu", value: 18, color: "#f59e0b" },
          { label: "Pengetahuan pasar", value: 15, color: "#10b981" },
          { label: "Legalitas", value: 12, color: "#10b981" },
          { label: "Komunikasi buyer", value: 8, color: "#10b981" },
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "Arus kas sering dilupakan",
        html: "Banyak pemula fokus mencari buyer, lalu kaget saat harus <strong>membayar produsen di depan</strong> sementara buyer baru bayar setelah barang dikirim. Jarak waktu inilah yang menguras modal kerja. Hitung kebutuhan kas sebelum menerima pesanan besar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba cek kesiapanmu",
        html: "Gunakan simulator berikut untuk menilai skor kesiapan di tiap aspek. Perhatikan aspek dengan skor terendah, di situlah pekerjaan rumahmu.",
      },
      { type: "widget", widget: "SimulatorKesiapanEkspor" },
      {
        type: "case",
        title: "Studi Kasus: Pesanan pertama yang hampir gagal karena kas",
        html: "Sari mendapat pesanan 400 unit tas anyaman dari buyer Australia. Ia harus membayar perajin Rp70.000 per unit di muka, jadi butuh modal beli Rp28.000.000. Buyer setuju bayar 30% di awal (Rp12.000.000 dari nilai FOB) dan sisanya setelah barang dikapalkan. Karena Sari sudah menghitung arus kas dan menyiapkan dana talangan, ia bisa membayar perajin tepat waktu. Tanpa persiapan kas, pesanan bagus itu justru bisa membuatnya bangkrut.",
      },
      {
        type: "case",
        title: "Sejarah: Krisis moneter 1998 dan pelajaran arus kas",
        html: "Saat krismon 1998, banyak usaha di Indonesia yang sebenarnya punya pesanan dan pasar justru tumbang karena tidak sanggup menanggung biaya dan utang jangka pendek ketika rupiah anjlok. Pelajaran yang bertahan sampai sekarang: <strong>omzet besar tidak menyelamatkan bisnis yang kehabisan kas</strong>. Bagi eksportir pemula, menjaga arus kas sama pentingnya dengan mendapatkan pesanan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk mulai ekspor, kamu perlu biaya persiapan tetap (izin, sampel, ongkos foto produk, dan uji dokumen) sebesar Rp5.000.000. Dari tiap unit yang diekspor kamu memperoleh margin bersih Rp25.000. Berapa unit yang harus diekspor agar biaya persiapan itu balik modal?",
        answer: 200,
        tolerance: 0,
        suffix: " unit",
        solution:
          "Titik impas = biaya tetap dibagi margin per unit = Rp5.000.000 / Rp25.000 = 200 unit. Setelah unit ke-200, biaya persiapan sudah tertutup dan margin berikutnya menjadi keuntungan.",
        hint: "Bagi biaya tetap dengan margin per unit.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Nilai tiap kondisi ini: sudah 'Siap' atau masih 'Perlu dibenahi' sebelum menerima pesanan ekspor?",
        buckets: ["Siap", "Perlu dibenahi"],
        items: [
          { text: "Punya 2 produsen cadangan yang mutunya sama.", bucket: "Siap" },
          { text: "Belum tahu berapa lama buyer akan membayar.", bucket: "Perlu dibenahi" },
          { text: "Sudah menghitung kebutuhan modal kerja per pesanan.", bucket: "Siap" },
          { text: "Mutu barang berbeda-beda tiap kali dibeli.", bucket: "Perlu dibenahi" },
          { text: "Belum punya izin usaha apa pun.", bucket: "Perlu dibenahi" },
          { text: "Bisa membalas email buyer dalam bahasa Inggris sehari.", bucket: "Siap" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Kesiapan ekspor dinilai dari enam aspek: pasokan, mutu, modal kerja, pengetahuan pasar, legalitas, dan komunikasi.",
          "Bagi eksportir non-produsen, pasokan yang stabil dan arus kas biasanya jadi hambatan terbesar.",
          "Arus kas kritis karena produsen sering dibayar di depan, sementara buyer bayar belakangan.",
          "Titik impas biaya persiapan = biaya tetap dibagi margin per unit.",
          "Tidak perlu sempurna di semua aspek, tetapi kenali dan benahi lubang terbesarmu lebih dulu.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa arus kas sangat penting bagi eksportir non-produsen?",
            options: [
              "Karena pajak ekspor sangat tinggi",
              "Karena produsen sering dibayar di depan sementara buyer bayar belakangan",
              "Karena bank melarang ekspor tanpa kas besar",
              "Karena harga ekspor selalu turun",
            ],
            answer: 1,
            explain: "Ada jeda waktu antara membayar produsen dan menerima pembayaran buyer; jeda itu harus ditutup dengan modal kerja.",
          },
          {
            q: "Biaya persiapan tetap Rp6.000.000 dan margin per unit Rp30.000. Berapa unit untuk balik modal?",
            options: ["100 unit", "150 unit", "200 unit", "300 unit"],
            answer: 2,
            explain: "Rp6.000.000 / Rp30.000 = 200 unit.",
          },
          {
            q: "Manakah tanda bahwa aspek pasokan masih 'Perlu dibenahi'?",
            options: [
              "Punya beberapa produsen cadangan",
              "Produsen hanya satu dan sering telat memenuhi pesanan",
              "Mutu barang seragam tiap batch",
              "Sudah menghitung modal kerja",
            ],
            answer: 1,
            explain: "Bergantung pada satu produsen yang tidak andal membuat pasokan rapuh dan berisiko gagal memenuhi pesanan buyer.",
          },
          {
            q: "Apa yang dimaksud 'konsistensi mutu' dalam kesiapan ekspor?",
            options: [
              "Harga yang selalu murah",
              "Barang yang seragam kualitasnya di setiap batch pengiriman",
              "Jumlah produsen yang banyak",
              "Kecepatan membalas email",
            ],
            answer: 1,
            explain: "Buyer luar negeri mengharapkan mutu yang sama tiap kali; mutu yang naik-turun bisa membuat pesanan berhenti.",
          },
          {
            q: "Bagi pemula, aspek mana yang biasanya paling perlu diprioritaskan lebih dulu?",
            options: [
              "Komunikasi buyer dan legalitas",
              "Modal kerja dan pasokan produsen",
              "Desain logo dan situs web",
              "Jumlah pengikut media sosial",
            ],
            answer: 1,
            explain: "Modal kerja dan pasokan adalah hambatan terbesar yang bisa menggagalkan pesanan; keduanya sebaiknya dibenahi lebih dulu.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "cari-produk",
    levelId: "mulai",
    order: 3,
    title: "Menemukan Produk dan Produsen Lokal",
    summary:
      "Memilih produk yang dicari pasar ekspor dan menemukan produsen lokal yang andal: MOQ, sampel, menjaga mutu, dan kesepakatan pasokan yang jelas.",
    durationMin: 15,
    tags: ["sourcing", "produk unggulan", "produsen"],
    blocks: [
      {
        type: "paragraph",
        html: "Karena kamu tidak memproduksi sendiri, keterampilan intimu adalah <strong>sourcing</strong>: menemukan produk yang dicari pasar luar negeri, lalu menemukan produsen lokal yang bisa memasoknya dengan mutu dan harga yang tepat. Di sinilah sebagian besar keberhasilan eksportir non-produsen ditentukan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/20230925_rattan_furniture.jpg?width=500",
        alt: "Aneka mebel dan kerajinan dari rotan",
        caption: "Kerajinan rotan, salah satu produk khas Indonesia yang diminati pasar ekspor.",
        credit: "Sumber: Wikimedia Commons, CC0",
      },
      {
        type: "paragraph",
        html: "Mulailah dari produk yang punya <strong>permintaan ekspor</strong> dan cocok untuk modal kecil: nilai per kilogram cukup tinggi, tidak mudah rusak, dan bisa dipesan dalam jumlah yang masuk akal. Indonesia kuat di beberapa kelompok produk yang sudah terbukti laku di pasar dunia.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Ciri produk ramah pemula",
        html: "Nilai per kg tinggi (ongkos kirim jadi porsi kecil), tahan lama atau tidak cepat rusak, punya cerita atau keunikan (kerajinan tangan, kopi asal daerah), dan produsennya banyak sehingga pasokan tidak bergantung pada satu orang.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kelompok produk yang ramah untuk eksportir pemula modal kecil",
        unit: "skor kecocokan (1-10)",
        source: "Ilustrasi edukatif",
        note: "Skor menimbang nilai per kg, ketahanan barang, fleksibilitas MOQ, dan banyaknya produsen. Furnitur dan kerajinan serta kopi dan rempah cenderung paling ramah untuk pemula.",
        data: [
          { label: "Furnitur & kerajinan", value: 9, color: "#10b981" },
          { label: "Kopi & rempah", value: 9, color: "#10b981" },
          { label: "Makanan olahan", value: 7, color: "#f59e0b" },
          { label: "Fesyen & tekstil", value: 7, color: "#f59e0b" },
          { label: "Produk perikanan", value: 5, color: "#ef4444" },
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "Hati-hati produk yang mudah rusak",
        html: "Produk perikanan segar dan makanan berpendingin memang bernilai, tetapi menuntut rantai dingin, sertifikasi, dan penanganan cepat. Untuk transaksi pertama, produk kering dan tahan lama jauh lebih memaafkan kesalahan pemula.",
      },
      {
        type: "paragraph",
        html: "Setelah memilih produk, cari produsennya. Datangi sentra UMKM, koperasi petani, atau pameran kerajinan. Saat bicara dengan calon produsen, tanyakan tiga hal kunci: <strong>MOQ</strong> (Minimum Order Quantity, jumlah pesanan minimum), harga per unit di berbagai volume, dan apakah mereka bisa menjaga mutu yang sama untuk pesanan berulang. Selalu minta <strong>sampel</strong> sebelum berjanji apa pun ke buyer.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba kalkulatornya",
        html: "Sebelum sepakat dengan produsen, hitung dulu harga jual ekspormu dari harga beli plus biaya. Gunakan kalkulator ini agar tahu apakah margin masih sehat.",
      },
      { type: "widget", widget: "KalkulatorHargaEkspor" },
      {
        type: "case",
        title: "Studi Kasus: Memilih perajin dengan MOQ yang masuk akal",
        html: "Dimas mengincar produk keranjang pandan. Produsen A menetapkan MOQ 300 pcs seharga Rp40.000 per pcs, jadi modal beli Rp12.000.000. Produsen B menawarkan MOQ 1.000 pcs seharga Rp35.000 per pcs (modal Rp35.000.000). Untuk pesanan percobaan dari buyer sebanyak 300 pcs, Dimas memilih Produsen A meski harga satuannya lebih tinggi, karena MOQ-nya cocok dengan pesanan dan modalnya lebih ringan. Harga murah tidak ada gunanya jika stok menumpuk tak terjual.",
      },
      {
        type: "case",
        title: "Studi Kasus: Menegosiasikan sampel dan konsistensi mutu",
        html: "Nita menemukan perajin sabun herbal yang menawarkan harga Rp15.000 per batang untuk MOQ 500 batang. Sebelum sepakat, ia meminta <strong>3 sampel gratis</strong> dan diam-diam memesan sampel kedua tiga minggu kemudian untuk menguji konsistensi. Ternyata warna dan aroma batch kedua sedikit berbeda. Nita lalu menyepakati <strong>spesifikasi tertulis</strong> (berat 90 gram, kadar minyak esensial, warna acuan) dan sistem tolak-terima: jika lebih dari 5% barang di luar spesifikasi, batch diperbaiki tanpa biaya tambahan. Kesepakatan ini menambah harga jadi Rp16.000 per batang, tetapi menyelamatkan Nita dari komplain buyer yang jauh lebih mahal.",
      },
      {
        type: "case",
        title: "Sejarah: Kopi Jawa yang mendunia sejak abad ke-18",
        html: "Belanda membawa bibit kopi arabika ke Jawa sekitar akhir abad ke-17 (kira-kira 1696-1699). Pada awal abad ke-18, kopi dari Jawa sudah dikirim ke Eropa dan menjadi begitu terkenal sehingga kata <em>java</em> sampai hari ini dipakai sebagai sebutan untuk kopi. Menariknya, para petani lokal yang menanamnya, terutama pada masa <strong>tanam paksa</strong> (dimulai 1830), justru mendapat bagian paling kecil. Pelajarannya bagi eksportir masa kini: produk asal daerah yang khas bisa punya nilai besar di pasar dunia, dan idealnya nilai itu dibagi lebih adil dengan produsennya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Seorang produsen menetapkan MOQ 300 pcs dengan harga beli Rp40.000 per pcs. Berapa modal yang kamu butuhkan untuk membeli satu batch minimum dari produsen ini?",
        answer: 12000000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Modal beli = MOQ x harga per pcs = 300 x Rp40.000 = Rp12.000.000. Inilah uang yang harus kamu siapkan untuk menebus barang dari produsen sebelum menjualnya ke buyer.",
        hint: "Kalikan jumlah minimum pesanan dengan harga per unit.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap produk dengan ciri atau pasar yang paling melekat padanya.",
        pairs: [
          { left: "Kopi specialty", right: "Nilai per kg tinggi, dihargai karena asal daerahnya" },
          { left: "Furnitur rotan", right: "Kerajinan bervolume besar, kuat di pasar Eropa" },
          { left: "Rempah kering", right: "Tahan lama dan ringan, mudah dikirim jarak jauh" },
          { left: "Ikan beku", right: "Bernilai tinggi tetapi menuntut rantai dingin" },
          { left: "Fesyen batik", right: "Menjual keunikan budaya dan cerita di baliknya" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Keterampilan inti eksportir non-produsen adalah sourcing: menemukan produk laku dan produsen andal.",
          "Produk ramah pemula bernilai per kg tinggi, tahan lama, unik, dan punya banyak produsen.",
          "Tanyakan MOQ, harga di tiap volume, dan konsistensi mutu sebelum sepakat dengan produsen.",
          "Selalu minta sampel sebelum berjanji apa pun kepada buyer.",
          "Pilih MOQ yang cocok dengan pesanan; harga murah tak berguna jika stok menumpuk tak terjual.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa keterampilan inti seorang eksportir non-produsen?",
            options: [
              "Merakit mesin produksi",
              "Sourcing: menemukan produk laku dan produsen andal",
              "Mengoperasikan kapal kontainer",
              "Menjahit sendiri semua produk",
            ],
            answer: 1,
            explain: "Karena tidak memproduksi sendiri, kekuatan utamanya adalah menemukan produk yang dicari pasar dan produsen yang bisa dipercaya.",
          },
          {
            q: "Apa arti MOQ?",
            options: [
              "Mutu Optimal Quality",
              "Jumlah pesanan minimum dari produsen",
              "Margin atas kualitas",
              "Metode ongkos kirim",
            ],
            answer: 1,
            explain: "MOQ (Minimum Order Quantity) adalah jumlah pembelian terkecil yang mau dilayani produsen.",
          },
          {
            q: "MOQ 300 pcs dengan harga Rp40.000 per pcs membutuhkan modal beli sebesar?",
            options: ["Rp4.000.000", "Rp12.000.000", "Rp1.200.000", "Rp40.000.000"],
            answer: 1,
            explain: "300 x Rp40.000 = Rp12.000.000.",
          },
          {
            q: "Kenapa produk kering dan tahan lama lebih cocok untuk transaksi ekspor pertama?",
            options: [
              "Karena selalu paling mahal",
              "Karena lebih memaafkan kesalahan dan tidak menuntut rantai dingin",
              "Karena tidak perlu dokumen",
              "Karena bebas dari Bea Cukai",
            ],
            answer: 1,
            explain: "Barang kering tidak cepat rusak sehingga kesalahan penanganan pemula tidak langsung berakibat fatal, berbeda dari produk segar.",
          },
          {
            q: "Apa yang sebaiknya selalu kamu minta sebelum berjanji ke buyer?",
            options: [
              "Diskon 50 persen",
              "Sampel produk dari produsen",
              "Kontrak eksklusif seumur hidup",
              "Pembayaran penuh di muka dari buyer",
            ],
            answer: 1,
            explain: "Sampel memastikan mutu yang kamu janjikan ke buyer benar-benar bisa dipenuhi produsen.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pemain-ekspor",
    levelId: "mulai",
    order: 4,
    title: "Mengenal Pemain dan Rantai Ekspor",
    summary:
      "Mengenali semua pihak dalam rantai ekspor dan peran masing-masing, dari produsen dan freight forwarder sampai Bea Cukai, pelayaran, bank, dan buyer, agar kamu tahu harus bekerja sama dengan siapa.",
    durationMin: 14,
    tags: ["rantai ekspor", "pemain", "peran"],
    blocks: [
      {
        type: "paragraph",
        html: "Ekspor bukan pekerjaan satu orang. Kamu sebagai eksportir adalah penghubung, tetapi ada banyak pihak lain yang membuat barang benar-benar sampai ke buyer dan uang kembali ke rekeningmu. Mengenali <strong>rantai ekspor</strong> dan peran tiap pemain membuatmu tahu harus bekerja sama dengan siapa di setiap langkah.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Cap_San_Diego%2C_Ladebaum.jpg?width=500",
        alt: "Palka dan derek muat pada kapal barang",
        caption: "Bongkar muat kapal barang melibatkan banyak pihak: forwarder, pelayaran, pelabuhan, sampai bank.",
        credit: "Sumber: Wikimedia Commons, domain publik",
      },
      {
        type: "paragraph",
        html: "Pemain utamanya: <strong>produsen</strong> yang membuat barang, <strong>kamu (eksportir)</strong> yang mengurus dan menjual, <strong>freight forwarder</strong> yang mengatur logistik, <strong>Bea Cukai (DJBC)</strong> yang mengawasi barang keluar, <strong>perusahaan pelayaran</strong> yang mengangkut, <strong>bank</strong> yang memproses pembayaran, <strong>surveyor</strong> yang memeriksa mutu, dan <strong>buyer</strong> yang membeli.",
      },
      {
        type: "video",
        comp: "SupplyChainVideo",
        title: "Video: Rantai Pasok Ekspor dari Produsen ke Buyer",
        caption: "Melihat perjalanan barang dan peran tiap pemain di sepanjang rantai ekspor.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Posisimu di tengah rantai",
        html: "Sebagai eksportir non-produsen, kamu berdiri di tengah: menghadap produsen di satu sisi dan buyer di sisi lain, lalu mengoordinasikan freight forwarder, bank, dan Bea Cukai agar semuanya berjalan. Kamu tidak mengerjakan semuanya sendiri, tetapi kamu yang mengatur.",
      },
      {
        type: "table",
        headers: ["Pemain", "Peran utama"],
        rows: [
          ["Produsen (UMKM/petani/perajin)", "Membuat barang yang akan diekspor"],
          ["Eksportir (kamu)", "Menghubungkan produsen dan buyer, mengurus seluruh proses"],
          ["Freight forwarder", "Mengatur pengangkutan, ruang kapal, dan dokumen logistik"],
          ["Bea Cukai (DJBC)", "Mengawasi dan mengesahkan barang keluar lewat PEB"],
          ["Perusahaan pelayaran", "Mengangkut kontainer melintasi laut ke negara tujuan"],
          ["Bank", "Memproses pembayaran internasional dari buyer"],
          ["Surveyor", "Memeriksa dan memverifikasi mutu serta jumlah barang"],
          ["Buyer", "Membeli dan membayar barang di luar negeri"],
        ],
        caption: "Peran tiap pemain dalam rantai ekspor. Kamu adalah pengaturnya, bukan pelaku tunggal.",
      },
      {
        type: "stats",
        items: [
          { value: "8", label: "Pemain utama dalam rantai ekspor", sub: "dari produsen sampai buyer" },
          { value: "1", label: "Peranmu", sub: "pengatur di tengah, bukan pelaku tunggal" },
          { value: "~46%", label: "Porsi ocean freight dari biaya ekspor", sub: "perkiraan, dari studi kasus Rina" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membedah biaya satu kiriman LCL",
        html: "Rina mengekspor kerajinan senilai Rp150.000.000 (nilai FOB). Ia membeli barang dari produsen seharga Rp120.000.000. Untuk mengapalkannya secara LCL, ia membayar berbagai pihak: ongkos angkut lokal ke pelabuhan Rp2.000.000, jasa freight forwarder dan dokumen Rp3.500.000, ongkos pelayaran (ocean freight) Rp6.000.000, asuransi kargo Rp900.000, dan biaya bank Rp600.000. Total biaya ekspor Rp13.000.000. Margin bersih Rina = Rp150.000.000 - Rp120.000.000 - Rp13.000.000 = Rp17.000.000. Perhatikan bahwa uang itu tersebar ke banyak pemain, dan tiap pemain mengambil bagian atas jasanya.",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Sebaran biaya ekspor satu kiriman LCL (dari studi kasus Rina)",
        unit: "Rp",
        source: "Ilustrasi edukatif",
        note: "Ongkos pelayaran biasanya porsi terbesar; tiap komponen mengalir ke pemain rantai yang berbeda.",
        data: [
          { label: "Ocean freight (pelayaran)", value: 6000000, color: "#3b82f6" },
          { label: "Freight forwarder & dokumen", value: 3500000, color: "#10b981" },
          { label: "Angkut lokal ke pelabuhan", value: 2000000, color: "#f59e0b" },
          { label: "Asuransi kargo", value: 900000, color: "#8b5cf6" },
          { label: "Biaya bank", value: 600000, color: "#ef4444" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Peti kemas mengubah rantai ekspor dunia",
        html: "Sebelum tahun 1956, memuat kapal dilakukan sekarung demi sekarung oleh banyak buruh, lambat dan mahal. Malcolm McLean memperkenalkan <strong>peti kemas</strong> (kontainer standar) yang bisa dipindahkan langsung dari truk ke kapal. Biaya bongkar muat anjlok drastis dan perdagangan lintas benua meledak. Inilah alasan hari ini seorang eksportir kecil di Indonesia bisa mengirim barang ke Eropa dengan biaya yang masuk akal lewat sistem LCL dan FCL.",
      },
      {
        type: "calcExercise",
        prompt:
          "Nilai FOB satu kiriman Rp150.000.000. Kamu membeli barang dari produsen Rp120.000.000 dan menanggung total biaya ekspor Rp13.000.000. Berapa margin bersihmu?",
        answer: 17000000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "Margin bersih = nilai FOB - harga beli - biaya ekspor = Rp150.000.000 - Rp120.000.000 - Rp13.000.000 = Rp17.000.000.",
        hint: "Kurangi harga beli produsen dan seluruh biaya ekspor dari nilai FOB.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap pemain rantai ekspor dengan peran utamanya.",
        pairs: [
          { left: "Produsen", right: "Membuat barang yang akan diekspor" },
          { left: "Freight forwarder", right: "Mengatur pengangkutan dan dokumen logistik" },
          { left: "Bea Cukai (DJBC)", right: "Mengesahkan barang keluar lewat PEB" },
          { left: "Perusahaan pelayaran", right: "Mengangkut kontainer melintasi laut" },
          { left: "Bank", right: "Memproses pembayaran internasional buyer" },
          { left: "Surveyor", right: "Memeriksa mutu dan jumlah barang" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Ekspor melibatkan banyak pemain; kamu sebagai eksportir adalah pengaturnya, bukan pelaku tunggal.",
          "Produsen membuat, freight forwarder mengatur logistik, pelayaran mengangkut, bank memproses pembayaran.",
          "Bea Cukai (DJBC) mengawasi dan mengesahkan barang keluar lewat PEB.",
          "Surveyor memeriksa mutu dan jumlah agar buyer dan eksportir sama-sama terlindungi.",
          "Biaya ekspor tersebar ke banyak pemain; ongkos pelayaran biasanya porsi terbesar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa peran freight forwarder dalam rantai ekspor?",
            options: [
              "Membuat barang yang diekspor",
              "Mengatur pengangkutan, ruang kapal, dan dokumen logistik",
              "Membayar barang di luar negeri",
              "Menetapkan tarif bea keluar",
            ],
            answer: 1,
            explain: "Freight forwarder adalah pengatur logistik yang membantu eksportir memesan ruang kapal dan mengurus dokumen pengiriman.",
          },
          {
            q: "Siapa yang mengawasi dan mengesahkan barang keluar dari Indonesia?",
            options: [
              "Perusahaan pelayaran",
              "Bea Cukai (DJBC)",
              "Surveyor",
              "Bank",
            ],
            answer: 1,
            explain: "Direktorat Jenderal Bea dan Cukai (DJBC) mengawasi ekspor dan mengesahkan lewat dokumen PEB.",
          },
          {
            q: "Dari studi kasus Rina, komponen biaya ekspor mana yang paling besar?",
            options: [
              "Asuransi kargo",
              "Biaya bank",
              "Ongkos pelayaran (ocean freight)",
              "Angkut lokal ke pelabuhan",
            ],
            answer: 2,
            explain: "Ocean freight Rp6.000.000 adalah komponen terbesar dari total biaya ekspor Rp13.000.000.",
          },
          {
            q: "Apa peran surveyor?",
            options: [
              "Mengangkut kontainer",
              "Memeriksa dan memverifikasi mutu serta jumlah barang",
              "Menjual barang ke konsumen akhir",
              "Menerbitkan izin usaha",
            ],
            answer: 1,
            explain: "Surveyor memeriksa mutu dan jumlah barang sehingga buyer dan eksportir sama-sama terlindungi dari sengketa.",
          },
          {
            q: "Bagaimana posisi eksportir non-produsen dalam rantai ekspor?",
            options: [
              "Sebagai pembuat barang",
              "Sebagai pengatur di tengah yang menghubungkan produsen, buyer, dan penyedia jasa",
              "Sebagai petugas Bea Cukai",
              "Sebagai pengangkut kapal",
            ],
            answer: 1,
            explain: "Eksportir berdiri di tengah rantai, mengoordinasikan produsen, buyer, freight forwarder, bank, dan Bea Cukai.",
          },
        ],
      },
    ],
  },
];
