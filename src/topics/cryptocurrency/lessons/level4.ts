import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "utxo",
    levelId: "bitcoin",
    order: 1,
    title: "Model UTXO",
    summary:
      "Bitcoin tidak menyimpan 'saldo'. Yang ada adalah kumpulan kepingan koin (UTXO) yang dipakai sebagai input dan menghasilkan output baru plus kembalian.",
    durationMin: 14,
    tags: ["bitcoin", "utxo", "transaksi"],
    blocks: [
      {
        type: "paragraph",
        html: "Berbeda dengan rekening bank yang menampilkan satu angka saldo, Bitcoin sama sekali tidak menyimpan saldo. Yang dicatat di blockchain adalah <strong>UTXO</strong> (<em>Unspent Transaction Output</em>), yaitu kepingan koin hasil transaksi sebelumnya yang belum dibelanjakan dan kini menjadi milik sebuah address.",
      },
      {
        type: "paragraph",
        html: "Bayangkan dompet fisik berisi lembaran uang dengan pecahan berbeda. Saat membayar, kamu menyerahkan beberapa lembar (input) lalu menerima kembalian (output baru). Begitulah cara kerja transaksi Bitcoin: ia mengambil satu atau beberapa UTXO sebagai <strong>input</strong>, menghasilkan UTXO baru untuk penerima, dan satu UTXO <strong>kembalian</strong> (<em>change</em>) yang kembali ke pengirim.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan inti UTXO",
        html: "Sebuah UTXO harus dibelanjakan <strong>utuh</strong>. Bila nilainya lebih besar dari yang ingin dikirim, sisanya tidak hangus melainkan dikembalikan sebagai UTXO change ke address milikmu sendiri. Selisih antara total input dan total output menjadi <strong>biaya transaksi</strong> (fee) untuk penambang.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Total input = total output + fee",
        html: "Tidak ada nilai yang hilang begitu saja. Jumlah seluruh input selalu sama dengan jumlah seluruh output ditambah fee. Inilah persamaan yang selalu dijaga setiap transaksi Bitcoin.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Anatomi sebuah transaksi Bitcoin",
        unit: "BTC",
        source: "ilustrasi edukatif berdasarkan contoh hitung",
        note: "Dua UTXO masuk sebagai input; nilainya terurai menjadi kiriman, kembalian, dan fee.",
        data: [
          { label: "Input 1", value: 0.5, color: "#f7931a" },
          { label: "Input 2", value: 0.3, color: "#fbbf24" },
          { label: "Kiriman", value: 0.6, color: "#627eea" },
          { label: "Kembalian", value: 0.199, color: "#26a17b" },
          { label: "Fee", value: 0.001, color: "#94a3b8" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membelanjakan dua keping koin",
        html: "Andi memiliki dua UTXO di dompetnya, masing-masing <strong>0,5 BTC</strong> dan <strong>0,3 BTC</strong>, total 0,8 BTC. Ia ingin mengirim <strong>0,6 BTC</strong> ke temannya dengan biaya transaksi <strong>0,001 BTC</strong>. Karena tidak ada satu UTXO pun yang cukup besar sendirian untuk menutup 0,6 BTC plus fee, dompet menggabungkan kedua UTXO sebagai input (0,8 BTC). Hasilnya: 0,6 BTC ke teman, 0,001 BTC menjadi fee, dan sisanya 0,199 BTC kembali ke Andi sebagai UTXO change.",
      },
      {
        type: "calcExercise",
        prompt:
          "Andi memakai input total 0,8 BTC (UTXO 0,5 + 0,3). Ia mengirim 0,6 BTC dengan fee 0,001 BTC. Berapa BTC kembalian (change) yang kembali ke Andi?",
        answer: 0.199,
        tolerance: 0.0005,
        suffix: "BTC",
        solution:
          "Kembalian = total input - kiriman - fee = 0,8 - 0,6 - 0,001 = <strong>0,199 BTC</strong>. Sisa ini menjadi UTXO baru milik Andi sendiri.",
        hint: "Kurangi total input dengan kiriman lalu dengan fee.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap bagian transaksi sebagai input atau output.",
        buckets: ["Input", "Output"],
        items: [
          { text: "UTXO 0,5 BTC yang dipakai membayar", bucket: "Input" },
          { text: "UTXO 0,3 BTC yang dipakai membayar", bucket: "Input" },
          { text: "0,6 BTC yang diterima penerima", bucket: "Output" },
          { text: "0,199 BTC kembalian ke pengirim", bucket: "Output" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Transaksi pertama dan blok genesis",
        html: "Output pertama dalam sejarah Bitcoin lahir di <strong>blok genesis</strong> pada 3 Januari 2009: hadiah 50 BTC yang justru tidak bisa dibelanjakan karena cara pencatatannya. Lalu pada <strong>12 Januari 2009</strong>, Satoshi Nakamoto mengirim 10 BTC ke Hal Finney. Itulah transaksi UTXO antarorang pertama: sebuah output dari blok sebelumnya dipakai sebagai input, menghasilkan output baru milik Hal. Model input-output inilah yang dipakai hingga hari ini.",
      },
      {
        type: "takeaways",
        items: [
          "Bitcoin tidak punya saldo; yang ada adalah kumpulan UTXO milik tiap address.",
          "Transaksi memakai UTXO sebagai input dan menghasilkan UTXO baru sebagai output.",
          "Sebuah UTXO harus dibelanjakan utuh; sisanya kembali sebagai change.",
          "Total input selalu sama dengan total output ditambah fee.",
          "Model input-output sudah dipakai sejak transaksi Satoshi ke Hal Finney pada Januari 2009.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang sebenarnya dicatat blockchain Bitcoin untuk sebuah address?",
            options: ["Satu angka saldo", "Kumpulan UTXO yang belum dibelanjakan", "Nomor rekening", "Daftar utang"],
            answer: 1,
            explain: "Bitcoin tidak menyimpan saldo, melainkan UTXO yang belum dibelanjakan.",
          },
          {
            q: "Apa itu change dalam transaksi Bitcoin?",
            options: [
              "Biaya untuk penambang",
              "Sisa nilai input yang kembali ke pengirim sebagai UTXO baru",
              "Bonus dari jaringan",
              "Pajak transaksi",
            ],
            answer: 1,
            explain: "Karena UTXO dibelanjakan utuh, kelebihannya dikembalikan sebagai UTXO change.",
          },
          {
            q: "Persamaan apa yang selalu dijaga setiap transaksi?",
            options: [
              "Input = output - fee",
              "Total input = total output + fee",
              "Output = input + fee",
              "Fee = input + output",
            ],
            answer: 1,
            explain: "Jumlah seluruh input sama dengan jumlah seluruh output ditambah fee.",
          },
          {
            q: "Mengapa Andi menggabungkan dua UTXO untuk membayar 0,6 BTC?",
            options: [
              "Agar fee lebih murah",
              "Karena tidak ada satu UTXO yang cukup besar sendirian",
              "Karena diwajibkan jaringan",
              "Untuk menyembunyikan transaksi",
            ],
            answer: 1,
            explain: "UTXO 0,5 saja tidak cukup menutup 0,6 BTC plus fee, jadi keduanya digabung.",
          },
          {
            q: "Sebuah UTXO bernilai 0,5 BTC dipakai untuk membayar 0,2 BTC. Apa yang terjadi pada sisanya?",
            options: [
              "Hangus",
              "Menjadi fee otomatis",
              "Kembali sebagai UTXO change ke pengirim",
              "Dibagi ke semua penambang",
            ],
            answer: 2,
            explain: "UTXO dibelanjakan utuh; sisa 0,3 BTC dikurangi fee kembali sebagai change.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "mining-difficulty-halving",
    levelId: "bitcoin",
    order: 2,
    title: "Mining, Difficulty & Halving",
    summary:
      "Penambang menebak nonce sampai hash blok di bawah target. Difficulty menjaga ritme 10 menit, dan halving memangkas reward tiap 210.000 blok menuju plafon 21 juta BTC.",
    durationMin: 15,
    tags: ["bitcoin", "mining", "halving", "proof-of-work"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Mining</strong> adalah proses mengamankan jaringan Bitcoin lewat <strong>Proof of Work</strong>. Penambang berulang kali mengubah angka bernama <strong>nonce</strong> lalu menghitung hash blok, sampai hasilnya lebih kecil dari sebuah angka batas (<strong>target</strong>). Tidak ada cara pintar selain mencoba miliaran kombinasi; siapa yang menemukan duluan berhak menyusun blok dan menerima hadiah.",
      },
      {
        type: "paragraph",
        html: "Agar satu blok rata-rata muncul tiap <strong>10 menit</strong> meski daya komputasi jaringan naik turun, Bitcoin menyetel ulang <strong>difficulty</strong> setiap <strong>2016 blok</strong> (kira-kira dua minggu). Bila blok belakangan terbit terlalu cepat, target dipersempit sehingga menebak jadi lebih sulit; bila terlalu lambat, target dilonggarkan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Halving: rem pasokan tiap 210.000 blok",
        html: "Setiap <strong>210.000 blok</strong> (sekitar 4 tahun) hadiah blok dipangkas separuh. Inilah jadwalnya: <strong>50</strong> BTC di awal, lalu <strong>25</strong> (2012), <strong>12,5</strong> (2016), <strong>6,25</strong> (2020), dan <strong>3,125</strong> (2024). Karena terus dibelah, total pasokan menuju plafon <strong>21 juta BTC</strong> yang diperkirakan tercapai sekitar tahun <strong>2140</strong>.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser di simulator untuk melihat bagaimana hadiah blok menyusut tiap halving dan bagaimana total pasokan merangkak mendekati 21 juta BTC tanpa pernah melampauinya.",
      },
      { type: "widget", widget: "SimulatorHalvingBitcoin" },
      {
        type: "video",
        comp: "HalvingVideo",
        title: "Jadwal Pasokan & Halving",
        caption: "Bagaimana pemangkasan hadiah berkala membentuk kelangkaan Bitcoin menuju 21 juta koin.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Hadiah blok di tiap era halving",
        unit: "BTC per blok",
        source: "jadwal halving terverifikasi",
        note: "Tiap empat tahun hadiah dibelah dua; pertumbuhan pasokan baru melambat secara konsisten.",
        data: [
          { label: "2009", value: 50, color: "#f7931a" },
          { label: "2012", value: 25, color: "#fb923c" },
          { label: "2016", value: 12.5, color: "#fbbf24" },
          { label: "2020", value: 6.25, color: "#a3e635" },
          { label: "2024", value: 3.125, color: "#26a17b" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Berapa BTC baru dicetak dalam sehari",
        html: "Pada era hadiah <strong>6,25 BTC</strong> (2020 hingga 2024), jaringan menargetkan satu blok tiap 10 menit, berarti sekitar <strong>6 blok per jam</strong>. Dalam sehari penuh: 6 blok x 24 jam = 144 blok. Setiap blok mencetak 6,25 BTC baru, sehingga jaringan menambah sekitar <strong>144 x 6,25 = 900 BTC</strong> per hari. Setelah halving 2024 ke 3,125 BTC, angka itu turun menjadi sekitar 450 BTC per hari.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada era hadiah 6,25 BTC, jaringan menghasilkan 6 blok per jam selama 24 jam. Berapa total BTC baru yang dicetak dalam sehari?",
        answer: 900,
        tolerance: 0,
        suffix: "BTC",
        solution:
          "6 blok/jam x 24 jam = 144 blok. 144 x 6,25 BTC = <strong>900 BTC</strong> per hari.",
        hint: "Hitung jumlah blok sehari dulu, lalu kalikan dengan hadiah per blok.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan tahun halving dengan hadiah blok sesudahnya.",
        pairs: [
          { left: "Sejak peluncuran 2009", right: "50 BTC" },
          { left: "Halving 2012", right: "25 BTC" },
          { left: "Halving 2016", right: "12,5 BTC" },
          { left: "Halving 2020", right: "6,25 BTC" },
          { left: "Halving 2024", right: "3,125 BTC" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Tiga halving yang mengubah pasokan",
        html: "Halving pertama pada <strong>28 November 2012</strong> memangkas hadiah dari 50 menjadi 25 BTC. Halving kedua pada <strong>9 Juli 2016</strong> menurunkannya ke 12,5 BTC. Halving ketiga pada <strong>11 Mei 2020</strong> membawanya ke 6,25 BTC, tepat di tengah tahun pandemi. Tiap peristiwa ini mengurangi laju koin baru yang masuk pasar dan kerap menjadi sorotan karena dampaknya pada kelangkaan Bitcoin.",
      },
      {
        type: "takeaways",
        items: [
          "Mining adalah Proof of Work: menebak nonce sampai hash blok lebih kecil dari target.",
          "Difficulty disetel ulang tiap 2016 blok agar rata-rata blok tetap 10 menit.",
          "Halving memangkas hadiah blok separuh tiap 210.000 blok (sekitar 4 tahun).",
          "Jadwal hadiah: 50 -> 25 -> 12,5 -> 6,25 -> 3,125 BTC.",
          "Total pasokan dibatasi 21 juta BTC yang diperkirakan tercapai sekitar tahun 2140.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dilakukan penambang dalam Proof of Work?",
            options: [
              "Memilih transaksi favorit",
              "Mengubah nonce sampai hash blok lebih kecil dari target",
              "Mencetak uang sesuka hati",
              "Memungut pajak transaksi",
            ],
            answer: 1,
            explain: "Penambang menebak nonce berulang kali sampai hash blok memenuhi target.",
          },
          {
            q: "Setiap berapa blok difficulty disetel ulang?",
            options: ["210.000 blok", "2016 blok", "100 blok", "21 juta blok"],
            answer: 1,
            explain: "Difficulty adjustment terjadi tiap 2016 blok agar rata-rata tetap 10 menit.",
          },
          {
            q: "Berapa hadiah blok setelah halving 2024?",
            options: ["12,5 BTC", "6,25 BTC", "3,125 BTC", "50 BTC"],
            answer: 2,
            explain: "Halving 2024 memangkas hadiah dari 6,25 menjadi 3,125 BTC.",
          },
          {
            q: "Berapa total pasokan maksimum Bitcoin?",
            options: ["100 juta BTC", "21 juta BTC", "210.000 BTC", "Tak terbatas"],
            answer: 1,
            explain: "Plafon pasokan Bitcoin adalah 21 juta BTC, diperkirakan tercapai sekitar 2140.",
          },
          {
            q: "Pada era hadiah 6,25 BTC, kira-kira berapa BTC baru dicetak per hari?",
            options: ["144 BTC", "450 BTC", "900 BTC", "1.800 BTC"],
            answer: 2,
            explain: "144 blok per hari x 6,25 BTC = 900 BTC per hari.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "mempool-fee-market",
    levelId: "bitcoin",
    order: 3,
    title: "Mempool & Fee Market",
    summary:
      "Transaksi menunggu di mempool sebelum masuk blok. Saat blok penuh, penambang memilih fee per byte tertinggi, jadi biaya dihitung dalam satoshi per vByte.",
    durationMin: 13,
    tags: ["bitcoin", "mempool", "fee", "transaksi"],
    blocks: [
      {
        type: "paragraph",
        html: "Begitu sebuah transaksi disiarkan, ia belum langsung tercatat di blockchain. Ia masuk ke <strong>mempool</strong> (<em>memory pool</em>), yaitu ruang tunggu berisi transaksi yang belum dikonfirmasi. Tiap node menyimpan salinan mempool-nya sendiri sambil menunggu penambang mengangkat transaksi ke dalam blok berikutnya.",
      },
      {
        type: "paragraph",
        html: "Sebuah blok punya ruang terbatas. Ketika transaksi yang antre lebih banyak daripada yang muat, terbentuklah <strong>fee market</strong>: penambang mengutamakan transaksi dengan <strong>fee per byte</strong> tertinggi karena ruang blok itu langka dan berharga. Maka biaya tidak dihitung dari nilai yang dikirim, melainkan dari ukuran data transaksi dalam <strong>satoshi per vByte</strong> (sat/vByte). Ingat, 1 BTC = 100.000.000 satoshi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Fee = ukuran x tarif",
        html: "Biaya total sebuah transaksi kira-kira sama dengan <strong>ukuran (vByte) x tarif (sat/vByte)</strong>. Transaksi besar yang menggabungkan banyak UTXO berukuran lebih besar, jadi lebih mahal meski nilai yang dikirim kecil.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Tarif rendah bisa tertahan lama",
        html: "Saat mempool penuh, transaksi dengan tarif terlalu rendah bisa menunggu berjam-jam bahkan dijatuhkan node setelah beberapa hari. Saat sepi, tarif rendah pun cepat masuk blok.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Gunakan kalkulator untuk merasakan bagaimana ukuran transaksi dan tarif sat/vByte menentukan biaya yang harus dibayar.",
      },
      { type: "widget", widget: "KalkulatorGasFee" },
      {
        type: "chart",
        variant: "bar",
        title: "Biaya transaksi pada beberapa tarif (ukuran 250 vByte)",
        unit: "satoshi",
        source: "ilustrasi edukatif berdasarkan rumus fee",
        note: "Pada ukuran tetap, biaya naik lurus mengikuti tarif sat/vByte yang dipilih.",
        data: [
          { label: "5 sat/vB", value: 1250, color: "#a3e635" },
          { label: "10 sat/vB", value: 2500, color: "#fbbf24" },
          { label: "20 sat/vB", value: 5000, color: "#fb923c" },
          { label: "50 sat/vB", value: 12500, color: "#f7931a" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menghitung biaya satu transaksi",
        html: "Sari mengirim Bitcoin dengan transaksi berukuran <strong>250 vByte</strong>. Saat itu mempool agak ramai, dan ia memilih tarif <strong>20 sat/vByte</strong> agar masuk blok dalam waktu wajar. Biayanya: 250 x 20 = <strong>5.000 satoshi</strong>, atau 0,00005 BTC. Bila ia memilih 5 sat/vByte, biayanya cuma 1.250 satoshi, tetapi transaksinya berisiko tertahan lebih lama di mempool.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah transaksi berukuran 250 vByte dikirim dengan tarif 20 sat/vByte. Berapa total biaya transaksi dalam satoshi?",
        answer: 5000,
        tolerance: 0,
        suffix: "satoshi",
        solution:
          "Fee = ukuran x tarif = 250 vByte x 20 sat/vByte = <strong>5.000 satoshi</strong> (setara 0,00005 BTC).",
        hint: "Kalikan ukuran transaksi dengan tarif per vByte.",
      },
      {
        type: "classifyExercise",
        prompt: "Manakah yang menaikkan biaya transaksi dan manakah yang tidak berpengaruh?",
        buckets: ["Menaikkan biaya", "Tidak berpengaruh"],
        items: [
          { text: "Menggabungkan banyak UTXO sehingga ukuran membesar", bucket: "Menaikkan biaya" },
          { text: "Memilih tarif sat/vByte yang lebih tinggi", bucket: "Menaikkan biaya" },
          { text: "Nilai BTC yang dikirim lebih besar tapi ukuran sama", bucket: "Tidak berpengaruh" },
          { text: "Mengirim saat mempool sedang kosong dengan ukuran sama", bucket: "Tidak berpengaruh" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Mempool yang membludak",
        html: "Pada akhir <strong>2017</strong>, lonjakan minat membuat mempool Bitcoin membengkak hingga ratusan ribu transaksi antre sekaligus. Tarif sempat melonjak ke puluhan dolar AS per transaksi, dan banyak pengiriman tertahan berjam-jam. Tekanan inilah yang mempercepat dorongan untuk solusi efisiensi seperti SegWit dan, kemudian, Lightning Network. Lonjakan serupa terulang saat protokol baru memenuhi blok pada 2023.",
      },
      {
        type: "takeaways",
        items: [
          "Mempool adalah ruang tunggu transaksi yang belum dikonfirmasi.",
          "Ruang blok terbatas, sehingga terbentuk fee market berbasis fee per byte.",
          "Biaya dihitung dalam satoshi per vByte, bukan dari nilai yang dikirim.",
          "Fee total kira-kira sama dengan ukuran (vByte) dikali tarif (sat/vByte).",
          "Saat mempool penuh, tarif rendah berisiko tertahan lama.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa fungsi mempool?",
            options: [
              "Menyimpan saldo pengguna",
              "Menampung transaksi yang belum dikonfirmasi",
              "Mencetak koin baru",
              "Mengatur difficulty",
            ],
            answer: 1,
            explain: "Mempool adalah ruang tunggu transaksi sebelum masuk ke blok.",
          },
          {
            q: "Apa dasar penambang memilih transaksi saat blok penuh?",
            options: ["Nilai BTC terbesar", "Fee per byte tertinggi", "Urutan abjad address", "Transaksi tertua"],
            answer: 1,
            explain: "Karena ruang blok langka, penambang mengutamakan fee per byte tertinggi.",
          },
          {
            q: "Dalam satuan apa tarif biaya transaksi dihitung?",
            options: ["BTC per transaksi", "Satoshi per vByte", "Dolar per blok", "Persen dari nilai kirim"],
            answer: 1,
            explain: "Biaya dihitung dalam satoshi per vByte, mengikuti ukuran data transaksi.",
          },
          {
            q: "Transaksi 250 vByte dengan tarif 20 sat/vByte berbiaya berapa?",
            options: ["250 satoshi", "5.000 satoshi", "20 satoshi", "50.000 satoshi"],
            answer: 1,
            explain: "250 x 20 = 5.000 satoshi.",
          },
          {
            q: "Mengapa menggabungkan banyak UTXO bisa menaikkan biaya?",
            options: [
              "Karena nilai kirim membesar",
              "Karena ukuran data transaksi (vByte) membesar",
              "Karena difficulty naik",
              "Karena halving",
            ],
            answer: 1,
            explain: "Lebih banyak input berarti transaksi lebih besar, dan biaya mengikuti ukuran.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "segwit-taproot-lightning",
    levelId: "bitcoin",
    order: 4,
    title: "SegWit, Taproot & Lightning Network",
    summary:
      "Tiga peningkatan yang membuat Bitcoin lebih efisien dan cepat: SegWit menambah kapasitas, Taproot memperbaiki privasi, dan Lightning memindahkan transaksi kecil ke layer-2.",
    durationMin: 15,
    tags: ["bitcoin", "segwit", "taproot", "lightning"],
    blocks: [
      {
        type: "paragraph",
        html: "Bitcoin tidak pernah berhenti diperbaiki. Tiga peningkatan besar membuatnya lebih efisien dan murah: <strong>SegWit</strong>, <strong>Taproot</strong>, dan <strong>Lightning Network</strong>. Ketiganya menjawab masalah yang muncul saat blok mulai penuh dan biaya melonjak.",
      },
      {
        type: "paragraph",
        html: "<strong>SegWit</strong> (<em>Segregated Witness</em>, 2017) memisahkan bagian tanda tangan (<em>witness</em>) dari data inti transaksi. Pemisahan ini menambah kapasitas efektif blok dan memperbaiki <strong>malleability</strong>, yaitu celah yang dulu memungkinkan ID transaksi diubah sebelum dikonfirmasi. <strong>Taproot</strong> (November 2021) memakai <strong>Schnorr signatures</strong> untuk meningkatkan privasi dan efisiensi, sehingga transaksi rumit bisa tampak seperti transaksi biasa. <strong>Lightning Network</strong> adalah lapisan kedua (<em>layer-2</em>) berupa kanal pembayaran untuk transaksi cepat dan sangat murah di luar blockchain utama.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga peran berbeda",
        html: "<strong>SegWit</strong>: menambah ruang dan menutup celah malleability. <strong>Taproot</strong>: privasi dan efisiensi lewat Schnorr signatures. <strong>Lightning</strong>: kanal layer-2 untuk pembayaran kecil yang nyaris instan dan berbiaya recehan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa perlu layer-2?",
        html: "Blockchain utama Bitcoin mengutamakan keamanan, bukan kecepatan, sehingga kurang cocok untuk transaksi recehan sehari-hari. Lightning membuka kanal antar dua pihak, mencatat banyak pembayaran secara cepat di luar rantai, lalu hanya menyetorkan hasil akhirnya ke blockchain.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Garis waktu peningkatan Bitcoin",
        unit: "tahun aktivasi",
        source: "tanggal historis terverifikasi",
        note: "SegWit menyiapkan fondasi 2017; Lightning tumbuh sesudahnya; Taproot menyusul akhir 2021.",
        data: [
          { label: "SegWit", value: 2017 },
          { label: "Lightning awal", value: 2018 },
          { label: "Taproot", value: 2021 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membeli kopi lewat Lightning",
        html: "Budi ingin membayar kopi seharga Rp30.000 dengan Bitcoin. Lewat blockchain utama, biaya dan waktu konfirmasi membuatnya tidak praktis untuk nominal sekecil itu. Lewat <strong>Lightning Network</strong>, pembayaran selesai dalam hitungan detik dengan biaya hampir nol karena dicatat di kanal layer-2, bukan langsung di blok. Hanya saat kanal dibuka dan ditutup, transaksinya menyentuh blockchain utama.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah pembayaran Lightning bernilai 30.000 satoshi dikenai biaya layer-2 sebesar 1 satoshi. Berapa total satoshi yang berkurang dari kanal pengirim?",
        answer: 30001,
        tolerance: 0,
        suffix: "satoshi",
        solution:
          "Total = nilai kirim + biaya = 30.000 + 1 = <strong>30.001 satoshi</strong>. Biaya Lightning untuk pembayaran kecil memang nyaris tak terasa.",
        hint: "Jumlahkan nilai yang dikirim dengan biaya layer-2.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan peningkatan dengan kontribusi utamanya.",
        pairs: [
          { left: "SegWit", right: "Menambah kapasitas dan menutup malleability" },
          { left: "Taproot", right: "Privasi dan efisiensi via Schnorr signatures" },
          { left: "Lightning Network", right: "Kanal layer-2 untuk pembayaran cepat dan murah" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Manakah yang terjadi di blockchain utama (layer-1) dan manakah di layer-2?",
        buckets: ["Layer-1", "Layer-2"],
        items: [
          { text: "Aktivasi SegWit dan Taproot", bucket: "Layer-1" },
          { text: "Membuka dan menutup kanal pembayaran", bucket: "Layer-1" },
          { text: "Membayar kopi nyaris instan dalam kanal", bucket: "Layer-2" },
          { text: "Ratusan pembayaran kecil tanpa menyentuh blok", bucket: "Layer-2" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Aktivasi SegWit 2017 dan Taproot 2021",
        html: "Setelah perdebatan panjang soal ukuran blok, <strong>SegWit</strong> akhirnya aktif pada <strong>Agustus 2017</strong> lewat mekanisme persetujuan jaringan. Aktivasi ini membuka jalan bagi Lightning Network. Empat tahun kemudian, <strong>Taproot</strong> aktif pada <strong>14 November 2021</strong> di blok 709.632, menghadirkan Schnorr signatures untuk privasi dan efisiensi lebih baik. Keduanya menunjukkan bahwa Bitcoin bisa berkembang lewat kesepakatan, bukan perintah satu pihak.",
      },
      {
        type: "takeaways",
        items: [
          "SegWit (2017) memisahkan witness, menambah kapasitas blok, dan memperbaiki malleability.",
          "Taproot (November 2021) memakai Schnorr signatures untuk privasi dan efisiensi.",
          "Lightning Network adalah layer-2 berupa kanal pembayaran cepat dan murah.",
          "Transaksi recehan lebih cocok di Lightning daripada di blockchain utama.",
          "Peningkatan Bitcoin terjadi lewat kesepakatan jaringan, bukan otoritas tunggal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa kontribusi utama SegWit pada 2017?",
            options: [
              "Menghapus fee transaksi",
              "Memisahkan witness, menambah kapasitas, dan memperbaiki malleability",
              "Menaikkan plafon pasokan",
              "Mempercepat halving",
            ],
            answer: 1,
            explain: "SegWit memisahkan tanda tangan dari data inti, menambah kapasitas dan menutup malleability.",
          },
          {
            q: "Teknologi tanda tangan apa yang dibawa Taproot?",
            options: ["RSA", "Schnorr signatures", "Hash SHA-1", "Tanda tangan basah"],
            answer: 1,
            explain: "Taproot memakai Schnorr signatures untuk meningkatkan privasi dan efisiensi.",
          },
          {
            q: "Apa itu Lightning Network?",
            options: [
              "Bursa kripto",
              "Lapisan kedua berupa kanal pembayaran cepat dan murah",
              "Algoritma mining baru",
              "Dompet perangkat keras",
            ],
            answer: 1,
            explain: "Lightning adalah layer-2 yang memproses pembayaran kecil di luar blockchain utama.",
          },
          {
            q: "Kapan Taproot aktif?",
            options: ["Agustus 2017", "Mei 2020", "November 2021", "Januari 2009"],
            answer: 2,
            explain: "Taproot aktif pada 14 November 2021 di blok 709.632.",
          },
          {
            q: "Mengapa transaksi kopi recehan lebih cocok di Lightning?",
            options: [
              "Karena layer-1 gratis",
              "Karena Lightning cepat dan biayanya nyaris nol",
              "Karena halving",
              "Karena difficulty rendah",
            ],
            answer: 1,
            explain: "Lightning mencatat pembayaran kecil di kanal layer-2 dengan biaya sangat rendah.",
          },
        ],
      },
    ],
  },
];
