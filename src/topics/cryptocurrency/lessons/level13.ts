import type { Lesson } from "../../../types";

export const level13: Lesson[] = [
  // ============================================================
  {
    id: "wallet-hardware-multisig",
    levelId: "keamanan",
    order: 1,
    title: "Keamanan Wallet, Hardware Wallet & Multisig",
    summary:
      "Beda hot wallet dan cold wallet, mengapa hardware wallet menyimpan kunci secara offline, dan bagaimana multisig membagi kuasa lewat beberapa tanda tangan.",
    durationMin: 14,
    tags: ["keamanan", "wallet", "hardware-wallet", "multisig", "seed-phrase"],
    blocks: [
      {
        type: "paragraph",
        html: "Di dunia kripto ada pepatah terkenal: <strong>not your keys, not your coins</strong>. Artinya, jika kamu tidak memegang <strong>private key</strong>-mu sendiri, asetmu sebenarnya bukan sepenuhnya milikmu. Maka memahami cara menyimpan kunci dengan aman adalah keterampilan paling penting dalam kripto.",
      },
      {
        type: "paragraph",
        html: "Inti dari sebuah dompet bukanlah menyimpan koin, melainkan menyimpan <strong>private key</strong> dan <strong>seed phrase</strong> yang membuktikan kepemilikan. Cara kunci itu disimpan, online atau offline, menentukan seberapa aman asetmu dari pencurian.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Hot wallet vs cold wallet",
        html: "<strong>Hot wallet</strong> terhubung ke internet (aplikasi ponsel, ekstensi browser): praktis untuk transaksi harian tapi lebih rawan diretas. <strong>Cold wallet</strong> menyimpan kunci sepenuhnya <strong>offline</strong> (mis. hardware wallet): lebih aman untuk simpanan jangka panjang.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Seed phrase adalah kunci utama",
        html: "Siapa pun yang tahu <strong>seed phrase</strong>-mu menguasai seluruh aset. Jangan pernah memfotonya, mengetiknya di chat atau situs, atau membagikannya kepada siapa pun. Simpan tertulis secara fisik di tempat aman, jauh dari kamera dan internet.",
      },
      {
        type: "video",
        comp: "KeamananDompetVideo",
        title: "Menjaga Dompet Kripto",
        caption: "Seed phrase, hardware wallet, dan cara mewaspadai phishing dalam satu alur singkat.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Trezor_Model_T.jpg?width=400",
        alt: "Hardware wallet Trezor Model T yang menyimpan private key secara offline",
        caption: "Hardware wallet menyimpan kunci di dalam perangkat dan menandatangani transaksi tanpa membocorkannya ke komputer.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "info",
        title: "Hardware wallet menyimpan kunci offline",
        html: "<strong>Hardware wallet</strong> adalah perangkat kecil yang menyimpan <strong>private key</strong> di dalamnya dan menandatangani transaksi tanpa pernah membocorkan kunci ke komputer. Walau komputermu terinfeksi virus, kunci tetap aman di dalam perangkat (cold storage).",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Lihat bagaimana skema <strong>multisig m-of-n</strong> bekerja: butuh sejumlah tanda tangan minimum sebelum dana bisa dipindahkan.",
      },
      { type: "widget", widget: "SimulatorMultisig" },
      {
        type: "paragraph",
        html: "<strong>Multisig</strong> (multi-signature) adalah dompet yang butuh beberapa tanda tangan untuk mengirim dana. Skema <strong>m-of-n</strong> berarti dari total <strong>n</strong> kunci, dibutuhkan minimal <strong>m</strong> kunci untuk menyetujui. Misalnya 2-of-3: ada 3 kunci, dan transaksi sah bila 2 di antaranya menandatangani. Ini menghapus satu titik kegagalan: kehilangan satu kunci tidak langsung berarti kehilangan dana.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Tingkat Ketahanan Penyimpanan Kunci (ilustrasi edukatif)",
        unit: "perkiraan ketahanan relatif terhadap pencurian",
        source: "ilustrasi edukatif berdasarkan prinsip keamanan",
        note: "Makin offline dan makin terbagi kuasa tanda tangan, makin sulit aset dicuri lewat satu serangan.",
        data: [
          { label: "Hot wallet", value: 2, color: "#ef4444" },
          { label: "Hardware wallet", value: 7, color: "#f59e0b" },
          { label: "Multisig 2-of-3", value: 9, color: "#22c55e" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membagi kuasa dana yayasan",
        html: "Sebuah yayasan menyimpan dana donasi dalam kripto. Daripada menaruh seluruh kuasa pada satu pengurus, mereka memakai dompet <strong>multisig 2-of-3</strong>: tiga kunci dipegang ketua, bendahara, dan auditor. Tiap pengeluaran butuh dua tanda tangan, sehingga satu orang tidak bisa mengambil dana sendirian, dan kehilangan satu kunci pun tidak melumpuhkan dana. Pembagian kuasa ini menghapus satu titik kegagalan sekaligus mencegah penyalahgunaan oleh satu pihak.",
      },
      {
        type: "case",
        title: "Sejarah: Mt. Gox kehilangan sekitar 850.000 BTC (2014)",
        html: "<strong>Mt. Gox</strong> adalah bursa Bitcoin terbesar di dunia pada masanya, sempat menangani sebagian besar transaksi Bitcoin global. Pada <strong>2014</strong>, bursa ini mendadak menghentikan penarikan lalu mengumumkan kehilangan sekitar <strong>850.000 BTC</strong> milik pelanggan dan perusahaan akibat pencurian yang berlangsung lama tanpa terdeteksi. Pelajaran besarnya: menyimpan aset di bursa pihak ketiga berarti menyerahkan kuasa atas kuncimu. Inilah asal pepatah <strong>not your keys, not your coins</strong>.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah dompet multisig memakai skema 2-of-3. Dari total 3 kunci, berapa kunci minimal yang harus menandatangani agar transaksi sah?",
        answer: 2,
        tolerance: 0,
        suffix: "kunci",
        solution:
          "Pada skema 2-of-3, dibutuhkan minimal <strong>2 kunci</strong> dari 3 untuk menyetujui transaksi. Satu kunci yang hilang atau dicuri belum cukup untuk memindahkan dana.",
        hint: "Angka pertama pada m-of-n adalah jumlah tanda tangan minimum.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap kebiasaan sebagai praktik aman atau berbahaya.",
        buckets: ["Praktik aman", "Praktik berbahaya"],
        items: [
          { text: "Menyimpan seed phrase tertulis di tempat fisik yang aman", bucket: "Praktik aman" },
          { text: "Memfoto seed phrase lalu menyimpannya di galeri ponsel", bucket: "Praktik berbahaya" },
          { text: "Memakai hardware wallet untuk simpanan jangka panjang", bucket: "Praktik aman" },
          { text: "Mengetik seed phrase di situs yang menjanjikan hadiah", bucket: "Praktik berbahaya" },
          { text: "Memakai multisig untuk dana bersama yang besar", bucket: "Praktik aman" },
          { text: "Menyimpan seluruh aset di akun bursa tanpa cadangan", bucket: "Praktik berbahaya" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Not your keys, not your coins: memegang private key sendiri berarti benar-benar memiliki aset.",
          "Hot wallet praktis tapi rawan; cold wallet menyimpan kunci offline dan lebih aman.",
          "Hardware wallet menandatangani transaksi tanpa membocorkan kunci ke komputer.",
          "Multisig m-of-n membagi kuasa: butuh beberapa tanda tangan, menghapus satu titik kegagalan.",
          "Mt. Gox 2014 (sekitar 850.000 BTC hilang) menunjukkan risiko menyimpan aset di bursa.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa beda utama hot wallet dan cold wallet?",
            options: [
              "Hot wallet lebih murah",
              "Hot wallet terhubung internet, cold wallet menyimpan kunci offline",
              "Cold wallet tidak bisa menerima koin",
              "Tidak ada bedanya",
            ],
            answer: 1,
            explain: "Hot wallet online dan praktis tapi lebih rawan; cold wallet offline dan lebih aman.",
          },
          {
            q: "Mengapa hardware wallet dianggap aman?",
            options: [
              "Karena terhubung ke bank",
              "Karena menandatangani transaksi tanpa membocorkan private key ke komputer",
              "Karena gratis biaya transaksi",
              "Karena bisa membatalkan transaksi",
            ],
            answer: 1,
            explain: "Kunci tetap di dalam perangkat walau komputer terinfeksi virus.",
          },
          {
            q: "Pada skema multisig 2-of-3, berapa tanda tangan minimum yang dibutuhkan?",
            options: ["1", "2", "3", "Semua kunci"],
            answer: 1,
            explain: "Angka m pada m-of-n adalah jumlah tanda tangan minimum, di sini 2 dari 3.",
          },
          {
            q: "Apa yang terjadi pada Mt. Gox tahun 2014?",
            options: [
              "Menjadi bursa terbesar yang aman",
              "Kehilangan sekitar 850.000 BTC akibat pencurian",
              "Menemukan blok genesis",
              "Meluncurkan stablecoin pertama",
            ],
            answer: 1,
            explain: "Mt. Gox runtuh setelah kehilangan sekitar 850.000 BTC milik pelanggan.",
          },
          {
            q: "Apa arti pepatah 'not your keys, not your coins'?",
            options: [
              "Koin selalu hilang",
              "Jika tidak memegang private key sendiri, aset tidak sepenuhnya milikmu",
              "Kunci harus dibagikan ke bursa",
              "Hanya bursa yang boleh menyimpan kunci",
            ],
            answer: 1,
            explain: "Menyerahkan kunci ke pihak lain berarti menyerahkan kuasa atas asetmu.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "audit-reentrancy",
    levelId: "keamanan",
    order: 2,
    title: "Audit Smart Contract & Reentrancy",
    summary:
      "Mengapa smart contract perlu diaudit, bagaimana kerentanan reentrancy menguras dana berulang, dan pola checks-effects-interactions yang menutupnya.",
    durationMin: 14,
    tags: ["keamanan", "smart-contract", "audit", "reentrancy"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Smart contract</strong> adalah program yang berjalan di blockchain dan mengelola dana secara otomatis. Karena kode itu menjaga uang dan sering tidak bisa diubah setelah dipasang, satu baris yang salah bisa berakibat fatal. Maka <strong>audit</strong> kode menjadi tahap wajib sebelum kontrak dipercaya menyimpan dana besar.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa itu audit smart contract",
        html: "<strong>Audit</strong> adalah pemeriksaan kode oleh ahli keamanan untuk menemukan celah sebelum penyerang melakukannya. Auditor menelusuri logika, menguji kasus ekstrem, dan mencari pola berbahaya yang umum, seperti reentrancy.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Kerentanan reentrancy",
        html: "<strong>Reentrancy</strong> terjadi ketika kontrak mengirim dana ke pihak luar <strong>sebelum</strong> memperbarui catatan saldonya. Penyerang menyusun kode yang langsung memanggil balik fungsi penarikan berkali-kali sebelum saldo sempat dikurangi, sehingga dana terkuras berulang dari satu saldo yang sama.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Pola checks-effects-interactions",
        html: "Urutan aman: <strong>checks</strong> (periksa syarat dulu), <strong>effects</strong> (perbarui saldo/catatan internal), baru <strong>interactions</strong> (kirim dana keluar). Dengan memperbarui saldo sebelum mengirim, panggilan balik penyerang tidak lagi menemukan saldo untuk dikuras.",
      },
      {
        type: "video",
        comp: "KeamananDompetVideo",
        title: "Menjaga Dompet & Kontrak",
        caption: "Prinsip kehati-hatian yang sama berlaku saat menyetujui transaksi ke smart contract.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum_logo_2014.svg?width=400",
        alt: "Logo Ethereum, blockchain tempat smart contract dan kasus The DAO terjadi",
        caption: "Ethereum menjalankan smart contract; di sinilah The DAO diretas lewat celah reentrancy pada 2016.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Simulasi Dana Terkuras oleh Reentrancy (ilustrasi edukatif)",
        unit: "saldo kontrak (ETH)",
        source: "ilustrasi edukatif pola serangan reentrancy",
        note: "Saldo seharusnya berkurang 10 ETH per penarikan sah, tapi panggilan balik beruntun mengurasnya jauh lebih cepat.",
        data: [
          { label: "Awal", value: 100 },
          { label: "Tarik 1", value: 90 },
          { label: "Balik 1", value: 80 },
          { label: "Balik 2", value: 70 },
          { label: "Balik 3", value: 60 },
          { label: "Balik beruntun", value: 0 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Satu baris yang menukar urutan",
        html: "Sebuah protokol DeFi menulis fungsi penarikan yang <strong>mengirim dana dulu, baru mengurangi saldo</strong>. Saat audit, pemeriksa menandainya sebagai celah reentrancy klasik. Perbaikannya hanya menukar urutan dua baris: kurangi saldo internal dulu (effects), baru kirim dana keluar (interactions). Setelah pola checks-effects-interactions diterapkan, panggilan balik penyerang tidak lagi menemukan saldo untuk dikuras. Kasus ini menunjukkan bahwa kerentanan fatal kadang hanya soal urutan, dan audit menangkapnya sebelum dana masuk.",
      },
      {
        type: "case",
        title: "Sejarah: Peretasan The DAO (2016)",
        html: "<strong>The DAO</strong> adalah dana investasi berbasis smart contract di Ethereum yang mengumpulkan dana sangat besar dari ribuan orang. Pada <strong>2016</strong>, seorang penyerang memanfaatkan celah <strong>reentrancy</strong>: fungsi penarikan mengirim Ether sebelum memperbarui saldo, sehingga penyerang memanggilnya berulang dan menguras sekitar sepertiga dana The DAO. Insiden ini begitu besar sampai komunitas Ethereum memutuskan melakukan <strong>hard fork</strong> untuk mengembalikan dana, yang melahirkan dua rantai: Ethereum dan Ethereum Classic.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kontrak menyimpan 100 ETH. Lewat reentrancy, penyerang menguras dana dalam 5 panggilan balik beruntun, masing-masing menarik 20 ETH dari saldo yang belum sempat diperbarui. Berapa total ETH yang dicuri?",
        answer: 100,
        tolerance: 0,
        suffix: "ETH",
        solution:
          "5 panggilan x 20 ETH = <strong>100 ETH</strong>, yaitu seluruh isi kontrak. Karena saldo tidak diperbarui di antara panggilan, penyerang seolah menarik dari saldo penuh berkali-kali.",
        hint: "Kalikan jumlah panggilan balik dengan nilai tiap penarikan.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan istilah dengan maknanya.",
        pairs: [
          { left: "Audit", right: "Pemeriksaan kode untuk menemukan celah sebelum penyerang" },
          { left: "Reentrancy", right: "Mengirim dana sebelum memperbarui saldo sehingga bisa dikuras berulang" },
          { left: "Checks-effects-interactions", right: "Periksa syarat, perbarui catatan, baru kirim dana" },
          { left: "Hard fork", right: "Perubahan aturan yang memecah jaringan menjadi rantai baru" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Mana langkah yang menutup reentrancy dan mana yang membuka celah?",
        buckets: ["Menutup celah", "Membuka celah"],
        items: [
          { text: "Memperbarui saldo internal sebelum mengirim dana keluar", bucket: "Menutup celah" },
          { text: "Mengirim dana ke pihak luar lalu baru mengurangi saldo", bucket: "Membuka celah" },
          { text: "Mengaudit kode sebelum kontrak menyimpan dana besar", bucket: "Menutup celah" },
          { text: "Mempercayai kontrak tanpa pemeriksaan apa pun", bucket: "Membuka celah" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Smart contract menjaga uang dan sulit diubah, sehingga satu celah bisa berakibat fatal.",
          "Audit adalah pemeriksaan kode oleh ahli untuk menemukan celah lebih dulu.",
          "Reentrancy menguras dana karena saldo diperbarui setelah dana terlanjur dikirim keluar.",
          "Pola checks-effects-interactions menutup reentrancy dengan memperbarui catatan sebelum mengirim.",
          "Peretasan The DAO 2016 lewat reentrancy memicu hard fork Ethereum dan Ethereum Classic.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tujuan audit smart contract?",
            options: [
              "Menaikkan harga token",
              "Menemukan celah keamanan sebelum penyerang melakukannya",
              "Mempercepat transaksi",
              "Menghapus biaya gas",
            ],
            answer: 1,
            explain: "Audit mencari kerentanan lebih dulu sebelum kontrak dipercaya menyimpan dana.",
          },
          {
            q: "Apa inti kerentanan reentrancy?",
            options: [
              "Saldo diperbarui sebelum dana dikirim",
              "Dana dikirim sebelum saldo diperbarui, sehingga bisa ditarik berulang",
              "Transaksi terlalu lambat",
              "Biaya gas terlalu tinggi",
            ],
            answer: 1,
            explain: "Karena saldo belum diperbarui, panggilan balik bisa menguras dana berkali-kali.",
          },
          {
            q: "Apa urutan benar pola checks-effects-interactions?",
            options: [
              "Kirim dana, periksa syarat, perbarui saldo",
              "Periksa syarat, perbarui saldo/catatan, baru kirim dana keluar",
              "Perbarui saldo, kirim dana, periksa syarat",
              "Kirim dana dua kali lalu periksa",
            ],
            answer: 1,
            explain: "Memperbarui catatan sebelum mengirim membuat panggilan balik tidak menemukan saldo.",
          },
          {
            q: "Bagaimana penyerang The DAO menguras dana?",
            options: [
              "Menebak private key",
              "Memanfaatkan reentrancy untuk menarik berulang sebelum saldo diperbarui",
              "Menyuap penambang",
              "Memalsukan blok genesis",
            ],
            answer: 1,
            explain: "Fungsi penarikan mengirim Ether sebelum memperbarui saldo, lalu dipanggil berulang.",
          },
          {
            q: "Apa dampak besar dari peretasan The DAO 2016?",
            options: [
              "Bitcoin dihentikan",
              "Ethereum melakukan hard fork, memunculkan Ethereum dan Ethereum Classic",
              "Semua bursa ditutup",
              "Stablecoin pertama lahir",
            ],
            answer: 1,
            explain: "Untuk mengembalikan dana, komunitas hard fork sehingga muncul dua rantai.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "oracle-rugpull",
    levelId: "keamanan",
    order: 3,
    title: "Serangan Oracle & Rug Pull",
    summary:
      "Bagaimana oracle memberi data harga ke smart contract dan bisa dimanipulasi lewat flash loan, serta tanda bahaya rug pull saat pengembang kabur membawa dana.",
    durationMin: 14,
    tags: ["keamanan", "oracle", "rug-pull", "defi", "flash-loan"],
    blocks: [
      {
        type: "paragraph",
        html: "Smart contract hidup di dalam blockchain dan tidak tahu apa-apa tentang dunia luar. Untuk mengetahui harga sebuah aset, kontrak bergantung pada <strong>oracle</strong>, yaitu sumber data yang memberi <strong>umpan harga</strong> dari luar ke dalam blockchain. Bila umpan ini bisa ditipu, seluruh kontrak yang mengandalkannya ikut tertipu.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Apa itu oracle",
        html: "<strong>Oracle</strong> adalah jembatan data antara dunia nyata dan blockchain. Misalnya kontrak pinjaman butuh tahu harga aset jaminan; oracle yang memberi tahu angka itu. Jika oracle hanya membaca harga dari satu sumber kecil, harga itu mudah dipelintir.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Serangan oracle lewat flash loan",
        html: "<strong>Flash loan</strong> memungkinkan meminjam dana sangat besar tanpa jaminan, asal dikembalikan dalam transaksi yang sama. Penyerang memakai dana raksasa ini untuk sesaat membanjiri satu pasar kecil, memelintir harga yang dibaca <strong>oracle</strong>, lalu mengeksploitasi kontrak yang mempercayai harga palsu itu, semuanya dalam satu transaksi.",
      },
      {
        type: "video",
        comp: "OracleVideo",
        title: "Bagaimana Oracle Bekerja",
        caption: "Mengapa smart contract butuh umpan harga dari luar, dan mengapa sumber tunggal mudah dipelintir.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Uniswap_Logo.svg?width=400",
        alt: "Logo Uniswap, bursa terdesentralisasi yang harganya kerap dipakai sebagai umpan oracle",
        caption: "Harga di DEX seperti Uniswap kadang dipakai sebagai umpan oracle; pasar dangkal paling mudah dipelintir flash loan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Lihat lagi bagaimana <strong>hash</strong> mengunci tiap blok. Catatan yang tahan ubah membuat manipulasi data lebih sulit, walau umpan dari luar tetap perlu dijaga.",
      },
      { type: "widget", widget: "SimulatorBlokHash" },
      {
        type: "callout",
        tone: "warn",
        title: "Rug pull: pengembang kabur membawa dana",
        html: "<strong>Rug pull</strong> terjadi ketika tim pengembang sebuah proyek menarik seluruh <strong>likuiditas</strong> atau kabur membawa dana investor, meninggalkan token tak bernilai. Namanya berasal dari kiasan menarik karpet hingga korban terjatuh.",
      },
      {
        type: "chart",
        variant: "area",
        title: "Pola Harga Token Saat Rug Pull (ilustrasi edukatif)",
        unit: "harga token (indeks)",
        source: "ilustrasi edukatif pola yang umum diamati",
        note: "Harga sengaja dipompa lalu jatuh ke nyaris nol begitu pengembang menarik likuiditas.",
        data: [
          { label: "Peluncuran", value: 10 },
          { label: "Promosi gencar", value: 60 },
          { label: "Puncak euforia", value: 100 },
          { label: "Likuiditas ditarik", value: 8 },
          { label: "Setelahnya", value: 1 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pinjaman yang dijebol harga palsu",
        html: "Sebuah protokol pinjaman menilai jaminan berdasarkan harga sebuah token dari satu pasar kecil. Penyerang mengambil <strong>flash loan</strong> raksasa, memborong token itu sampai harganya melonjak sesaat, lalu menjaminkannya ke protokol pada nilai yang sudah dipompa untuk meminjam aset lain jauh melebihi nilai aslinya. Setelah meminjam, ia mengembalikan flash loan dan kabur dengan selisihnya, semuanya dalam satu transaksi. Perbaikannya: oracle yang memakai banyak sumber dan harga rata-rata berbobot waktu (TWAP) agar tak mudah dipelintir sesaat.",
      },
      {
        type: "case",
        title: "Sejarah: Demam rug pull di era DeFi dan meme coin",
        html: "Saat ledakan <strong>DeFi</strong> sekitar 2020 sampai 2021, ribuan token baru bermunculan dengan janji imbal hasil tinggi. Banyak di antaranya ternyata <strong>rug pull</strong>: tim anonim meluncurkan token, memompa harga lewat promosi, lalu menarik likuiditas dan menghilang. Salah satu pola yang berulang adalah token bertema yang viral, harga melonjak ratusan persen dalam sehari, lalu jatuh ke nyaris nol begitu pengembang menjual seluruh kepemilikannya. Pelajarannya: imbal hasil yang terlalu indah dan tim yang menyembunyikan identitas adalah tanda bahaya besar.",
      },
      {
        type: "calcExercise",
        prompt:
          "Seorang investor membeli token senilai 4.000.000 rupiah. Setelah rug pull, nilainya tersisa hanya 1 persen dari pembelian. Berapa rupiah sisa nilainya?",
        answer: 40000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "1 persen dari 4.000.000 = 0,01 x 4.000.000 = <strong>Rp40.000</strong>. Hampir seluruh modal lenyap, inilah dampak khas rug pull.",
        hint: "Kalikan nilai pembelian dengan 0,01.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan jenis serangan atau tanda bahaya dengan deskripsinya.",
        pairs: [
          { left: "Serangan oracle", right: "Memelintir umpan harga agar kontrak bertindak salah" },
          { left: "Flash loan", right: "Pinjaman besar tanpa jaminan yang dilunasi dalam satu transaksi" },
          { left: "Rug pull", right: "Pengembang menarik likuiditas dan kabur membawa dana" },
          { left: "Tim anonim tanpa audit", right: "Tanda bahaya proyek yang patut dicurigai" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap hal sebagai tanda bahaya atau tanda proyek lebih tepercaya.",
        buckets: ["Tanda bahaya", "Lebih tepercaya"],
        items: [
          { text: "Janji imbal hasil tetap yang sangat tinggi tanpa risiko", bucket: "Tanda bahaya" },
          { text: "Kode sudah diaudit oleh pihak keamanan independen", bucket: "Lebih tepercaya" },
          { text: "Tim sepenuhnya anonim dan menekan untuk cepat membeli", bucket: "Tanda bahaya" },
          { text: "Likuiditas dikunci untuk jangka waktu yang jelas", bucket: "Lebih tepercaya" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Oracle memberi data dunia nyata, seperti harga, ke smart contract yang buta dunia luar.",
          "Serangan oracle memelintir umpan harga, sering lewat flash loan, agar kontrak bertindak salah.",
          "Flash loan adalah pinjaman besar tanpa jaminan yang harus dilunasi dalam satu transaksi.",
          "Rug pull adalah pengembang menarik likuiditas atau kabur membawa dana investor.",
          "Imbal hasil terlalu indah, tim anonim, dan tanpa audit adalah tanda bahaya utama.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa fungsi oracle bagi smart contract?",
            options: [
              "Menyimpan private key",
              "Memberi data dunia luar, seperti harga, ke dalam blockchain",
              "Mencetak token baru",
              "Membatalkan transaksi",
            ],
            answer: 1,
            explain: "Blockchain buta dunia luar; oracle menjembatani data eksternal ke kontrak.",
          },
          {
            q: "Bagaimana flash loan dipakai dalam serangan oracle?",
            options: [
              "Untuk menyimpan dana jangka panjang",
              "Untuk sesaat memelintir harga pasar kecil yang dibaca oracle",
              "Untuk membayar gas fee",
              "Untuk mengaudit kontrak",
            ],
            answer: 1,
            explain: "Dana raksasa membanjiri pasar kecil sesaat, memalsukan harga yang dipercaya kontrak.",
          },
          {
            q: "Apa itu rug pull?",
            options: [
              "Kontrak yang diaudit ketat",
              "Pengembang menarik likuiditas atau kabur membawa dana investor",
              "Biaya jaringan yang tinggi",
              "Jenis hardware wallet",
            ],
            answer: 1,
            explain: "Tim proyek menghilang dengan dana, meninggalkan token tak bernilai.",
          },
          {
            q: "Mana yang merupakan tanda bahaya sebuah proyek?",
            options: [
              "Kode sudah diaudit independen",
              "Tim anonim dengan janji imbal hasil tinggi tanpa risiko",
              "Likuiditas dikunci dengan jangka jelas",
              "Dokumentasi terbuka",
            ],
            answer: 1,
            explain: "Janji muluk dan tim yang menyembunyikan identitas patut dicurigai.",
          },
          {
            q: "Mengapa oracle yang hanya membaca satu sumber kecil berbahaya?",
            options: [
              "Karena terlalu mahal",
              "Karena harganya mudah dipelintir sehingga kontrak tertipu",
              "Karena memperlambat jaringan",
              "Karena menghapus seed phrase",
            ],
            answer: 1,
            explain: "Sumber tunggal yang kecil mudah dimanipulasi, lalu menulari kontrak yang mempercayainya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "phishing-mev",
    levelId: "keamanan",
    order: 4,
    title: "Phishing & MEV",
    summary:
      "Mengenali phishing yang menipu pengguna menyetujui transaksi atau membuka seed, serta MEV ketika penyusun blok mengambil untung dengan menata ulang transaksi.",
    durationMin: 14,
    tags: ["keamanan", "phishing", "mev", "front-running", "drainer"],
    blocks: [
      {
        type: "paragraph",
        html: "Tidak semua serangan menargetkan kode. Banyak yang menargetkan <strong>manusia</strong>. <strong>Phishing</strong> adalah tipuan yang membuat korban menyerahkan akses sendiri, misalnya membuka <strong>seed phrase</strong> di situs palsu atau menekan tombol setuju pada transaksi berbahaya. Tidak ada audit kode yang bisa menyelamatkan korban yang tertipu memberikan kuncinya sendiri.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Bentuk phishing yang umum",
        html: "Situs tiruan yang mirip aslinya, pesan yang mengaku tim dukungan, atau pop-up yang meminta <strong>menyetujui</strong> (approve) akses tak terbatas ke dompetmu. Banyak korban kehilangan aset lewat <strong>drainer</strong>, yaitu skrip yang langsung menyedot dompet begitu pengguna menandatangani persetujuan jahat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan emas anti-phishing",
        html: "Tidak ada pihak sah yang akan meminta <strong>seed phrase</strong>-mu. Selalu periksa alamat situs huruf demi huruf, jangan menekan tautan dari pesan tak dikenal, dan baca baik-baik apa yang kamu <strong>setujui</strong> sebelum menandatangani. Bila ragu, jangan tanda tangan.",
      },
      {
        type: "video",
        comp: "KeamananDompetVideo",
        title: "Waspada Phishing",
        caption: "Cara mengenali situs dan pesan palsu sebelum terlanjur menyetujui transaksi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa itu MEV",
        html: "<strong>MEV</strong> (Maximal Extractable Value) adalah keuntungan yang bisa diambil pihak penyusun blok dengan <strong>menyusun ulang, menyisipkan, atau menahan</strong> transaksi. Karena transaksi menunggu di antrean publik sebelum masuk blok, pihak yang menentukan urutan bisa mendahului atau mengapit transaksi orang lain demi untung.",
      },
      {
        type: "paragraph",
        html: "Dua bentuk MEV yang sering ditemui: <strong>front-running</strong>, yaitu menyelinap mendahului transaksi yang menguntungkan; dan <strong>sandwich attack</strong>, yaitu menempatkan satu transaksi tepat sebelum dan satu tepat sesudah transaksi korban agar korban membeli lebih mahal dan menjual lebih murah, sementara penyerang menangguk selisihnya.",
      },
      {
        type: "video",
        comp: "MEVVideo",
        title: "MEV: Untung dari Urutan Transaksi",
        caption: "Bagaimana front-running dan sandwich attack memanfaatkan antrean transaksi publik.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Digital_Signature_diagram.svg?width=400",
        alt: "Diagram alur tanda tangan digital saat menyetujui sebuah transaksi",
        caption: "Tiap persetujuan transaksi adalah tanda tangan digital; phishing menipu korban menandatangani izin yang berbahaya.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Sandwich Attack: Dampak pada Harga Beli Korban (ilustrasi edukatif)",
        unit: "harga beli korban (indeks)",
        source: "ilustrasi edukatif pola sandwich attack",
        note: "Penyerang membeli lebih dulu sehingga korban terpaksa membeli pada harga yang lebih tinggi.",
        data: [
          { label: "Harga wajar", value: 100, color: "#22c55e" },
          { label: "Setelah beli penyerang", value: 108, color: "#f59e0b" },
          { label: "Harga bayar korban", value: 112, color: "#ef4444" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Approve tak terbatas yang nyaris fatal",
        html: "Seorang pengguna ingin menukar token di sebuah aplikasi. Pop-up meminta menyetujui (approve) akses, dan secara default jumlahnya <strong>tak terbatas</strong>. Untungnya ia membaca rincian transaksi sebelum menandatangani, menyadari aplikasinya situs tiruan, lalu membatalkan. Bila ia menekan setuju, sebuah <strong>drainer</strong> bisa langsung memindahkan seluruh token jenis itu. Pelajarannya: batasi izin pada jumlah yang diperlukan saja, dan cabut approval lama lewat alat pengelola izin secara berkala.",
      },
      {
        type: "case",
        title: "Sejarah: Maraknya wallet drainer dan phishing approval",
        html: "Seiring tumbuhnya DeFi dan NFT sejak sekitar 2021, muncul layanan jahat yang menjual <strong>drainer</strong> siap pakai kepada penipu. Polanya berulang: korban diarahkan ke situs palsu yang meniru proyek terkenal, lalu diminta menekan tombol <strong>approve</strong> yang sebenarnya memberi izin tak terbatas memindahkan aset. Begitu ditandatangani, skrip drainer langsung mengosongkan dompet dalam hitungan detik. Banyak kerugian besar terjadi bukan karena blockchain diretas, melainkan karena pengguna tertipu menyetujui transaksi berbahaya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Karena sandwich attack, korban membeli token pada harga 112 padahal harga wajarnya 100 (dalam indeks). Berapa persen lebih mahal yang dibayar korban?",
        answer: 12,
        tolerance: 0,
        suffix: "%",
        solution:
          "(112 - 100) / 100 x 100 persen = <strong>12 persen</strong> lebih mahal. Selisih ini berpindah menjadi keuntungan penyerang MEV.",
        hint: "Bagi selisih harga dengan harga wajar, lalu jadikan persen.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pesan atau situasi sebagai aman atau phishing.",
        buckets: ["Aman", "Phishing"],
        items: [
          { text: "Dompet resmi tidak pernah meminta kamu mengetik seed phrase di situs", bucket: "Aman" },
          { text: "Pesan mendesak: 'Verifikasi dompet, masukkan 12 kata seed di sini'", bucket: "Phishing" },
          { text: "Memeriksa alamat situs huruf demi huruf sebelum menghubungkan dompet", bucket: "Aman" },
          { text: "Pop-up meminta approve akses tak terbatas dari situs tak dikenal", bucket: "Phishing" },
          { text: "Membaca isi transaksi sebelum menandatanganinya", bucket: "Aman" },
          { text: "Tautan hadiah airdrop dari akun yang meniru proyek terkenal", bucket: "Phishing" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Phishing menargetkan manusia: menipu korban membuka seed phrase atau menyetujui transaksi jahat.",
          "Drainer adalah skrip yang menyedot dompet begitu korban menandatangani persetujuan berbahaya.",
          "Tidak ada pihak sah yang meminta seed phrase; selalu periksa alamat situs dan isi transaksi.",
          "MEV adalah untung dari menyusun ulang, menyisipkan, atau menahan transaksi di antrean publik.",
          "Front-running mendahului transaksi, sandwich attack mengapit korban agar membayar lebih mahal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa sasaran utama serangan phishing?",
            options: [
              "Kode smart contract",
              "Manusia, agar menyerahkan akses atau seed phrase sendiri",
              "Penambang",
              "Biaya gas",
            ],
            answer: 1,
            explain: "Phishing menipu manusia, bukan meretas kode, agar korban memberi akses sendiri.",
          },
          {
            q: "Apa itu wallet drainer?",
            options: [
              "Alat audit kontrak",
              "Skrip yang menyedot dompet begitu korban menyetujui transaksi jahat",
              "Jenis hardware wallet",
              "Oracle harga",
            ],
            answer: 1,
            explain: "Drainer langsung mengosongkan dompet setelah persetujuan berbahaya ditandatangani.",
          },
          {
            q: "Apa kepanjangan dan makna MEV?",
            options: [
              "Minimum Etherum Value, biaya minimum",
              "Maximal Extractable Value, untung dari menata ulang transaksi",
              "Multi Exchange Vault, brankas bursa",
              "Mining Energy Variable, konsumsi listrik",
            ],
            answer: 1,
            explain: "MEV adalah keuntungan dari menyusun ulang, menyisipkan, atau menahan transaksi.",
          },
          {
            q: "Apa yang dilakukan sandwich attack?",
            options: [
              "Mengaudit kontrak",
              "Menempatkan transaksi sebelum dan sesudah korban agar korban bayar lebih mahal",
              "Mengunci likuiditas",
              "Membakar token",
            ],
            answer: 1,
            explain: "Penyerang mengapit transaksi korban untuk menangguk selisih harga.",
          },
          {
            q: "Mana kebiasaan yang melindungi dari phishing?",
            options: [
              "Mengetik seed phrase saat diminta situs",
              "Memeriksa alamat situs dan membaca isi transaksi sebelum menandatangani",
              "Menekan semua tautan hadiah",
              "Menyetujui akses tak terbatas tanpa membaca",
            ],
            answer: 1,
            explain: "Verifikasi alamat dan isi transaksi mencegah persetujuan berbahaya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "sejarah-peretasan",
    levelId: "keamanan",
    order: 5,
    title: "Sejarah Peretasan Besar Kripto",
    summary:
      "Pelajaran dari peretasan dan keruntuhan terbesar: Mt. Gox, The DAO, Coincheck, dan FTX. Mengapa sebagian besar kerugian justru datang dari titik terpusat.",
    durationMin: 15,
    tags: ["keamanan", "sejarah", "peretasan", "bursa", "ftx"],
    blocks: [
      {
        type: "paragraph",
        html: "Sejarah kripto ditandai oleh sejumlah <strong>peretasan</strong> dan <strong>keruntuhan</strong> besar yang melenyapkan dana miliaran dolar. Mempelajarinya bukan untuk menakut-nakuti, melainkan untuk memahami pola: di mana titik lemah yang berulang, dan bagaimana cara melindungi diri.",
      },
      {
        type: "paragraph",
        html: "Pola yang paling sering muncul jelas: bukan jaringan blockchain itu sendiri yang jebol, melainkan <strong>pihak terpusat</strong> tempat orang menitipkan dana, seperti bursa. Sebagian kecil lainnya adalah celah pada <strong>smart contract</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Empat peristiwa yang wajib dikenang",
        html: "<strong>Mt. Gox</strong> (2014, sekitar 850.000 BTC raib), <strong>The DAO</strong> (2016, celah reentrancy), <strong>Coincheck</strong> (Januari 2018, sekitar 530 juta dolar AS), dan keruntuhan bursa <strong>FTX</strong> (November 2022). Tiga dari empat adalah kegagalan pihak terpusat.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Risiko menitipkan aset",
        html: "Menyimpan kripto di bursa berarti menyerahkan <strong>private key</strong> ke pihak lain. Jika bursa diretas, salah kelola, atau menyalahgunakan dana, asetmu ikut terancam, persis seperti yang terjadi pada Mt. Gox, Coincheck, dan FTX.",
      },
      {
        type: "video",
        comp: "RugPullVideo",
        title: "Saat Dana Lenyap",
        caption: "Pola berulang ketika dana investor menguap, dari penipuan proyek sampai keruntuhan bursa.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/FTX_logo.svg?width=400",
        alt: "Logo bursa FTX yang runtuh pada November 2022",
        caption: "FTX, salah satu bursa terbesar dunia, runtuh pada November 2022 dan menyeret dana pelanggan yang sangat besar.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perkiraan Skala Kerugian Tiap Peristiwa (perkiraan publik)",
        unit: "perkiraan nilai kerugian (juta dolar AS)",
        source: "perkiraan dari laporan publik, nilai pada masanya (ilustratif)",
        note: "Keruntuhan bursa FTX jauh melampaui peretasan teknis mana pun; kerugian terbesar berasal dari pihak terpusat, bukan dari blockchain yang jebol.",
        data: [
          { label: "The DAO 2016", value: 60, color: "#627eea" },
          { label: "Mt. Gox 2014", value: 450, color: "#f7931a" },
          { label: "Coincheck 2018", value: 530, color: "#f59e0b" },
          { label: "FTX 2022", value: 8000, color: "#ef4444" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Telur dalam satu keranjang",
        html: "Seorang pengguna menyimpan seluruh asetnya, senilai 50 juta rupiah, di satu bursa demi kepraktisan. Ketika bursa itu membekukan penarikan karena masalah keuangan, ia tidak bisa berbuat apa-apa, sebab <strong>private key</strong> dipegang bursa, bukan dirinya. Pelajaran dari Mt. Gox hingga FTX sama: jangan menaruh semua dana di satu pihak terpusat. Sebagian besar simpanan jangka panjang lebih aman di dompet milik sendiri.",
      },
      {
        type: "case",
        title: "Sejarah: Empat keruntuhan besar yang mengubah kripto",
        html: "<strong>Mt. Gox</strong> (2014): bursa Bitcoin terbesar pada masanya runtuh setelah kehilangan sekitar <strong>850.000 BTC</strong> akibat pencurian yang lama tak terdeteksi. <strong>The DAO</strong> (2016): dana investasi berbasis smart contract di Ethereum dikuras lewat celah <strong>reentrancy</strong>, memicu hard fork Ethereum dan Ethereum Classic. <strong>Coincheck</strong> (Januari 2018): bursa Jepang ini kehilangan token NEM senilai sekitar <strong>530 juta dolar AS</strong>, salah satu pencurian terbesar saat itu, karena aset disimpan di hot wallet tanpa pengamanan memadai. <strong>FTX</strong> (November 2022): bursa raksasa ini bangkrut setelah terungkap dana pelanggan disalahgunakan, melenyapkan nilai yang sangat besar dan mengguncang seluruh industri.",
      },
      {
        type: "calcExercise",
        prompt:
          "Mt. Gox kehilangan sekitar 850.000 BTC. Bila saat itu harga 1 BTC sekitar 500 dolar AS, berapa juta dolar AS perkiraan kerugiannya?",
        answer: 425,
        tolerance: 5,
        suffix: "juta dolar AS",
        solution:
          "850.000 x 500 = 425.000.000 dolar AS = <strong>425 juta dolar AS</strong>. Angka ini memakai harga pada masanya; bila dihitung dengan harga jauh kemudian, nilainya melonjak berkali lipat.",
        hint: "Kalikan jumlah BTC dengan harga per BTC, lalu ubah ke satuan juta.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap insiden: celah teknis smart contract atau kegagalan pihak terpusat?",
        buckets: ["Celah teknis kontrak", "Kegagalan pihak terpusat"],
        items: [
          { text: "The DAO 2016, dikuras lewat reentrancy", bucket: "Celah teknis kontrak" },
          { text: "Mt. Gox 2014, bursa kehilangan koin pelanggan", bucket: "Kegagalan pihak terpusat" },
          { text: "Coincheck 2018, token dicuri dari hot wallet bursa", bucket: "Kegagalan pihak terpusat" },
          { text: "FTX 2022, bursa menyalahgunakan dana pelanggan", bucket: "Kegagalan pihak terpusat" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan tiap peristiwa dengan tahun dan cirinya.",
        pairs: [
          { left: "Mt. Gox", right: "2014, sekitar 850.000 BTC raib dari bursa" },
          { left: "The DAO", right: "2016, dikuras lewat celah reentrancy" },
          { left: "Coincheck", right: "Januari 2018, token NEM senilai sekitar 530 juta dolar dicuri" },
          { left: "FTX", right: "November 2022, bursa bangkrut karena penyalahgunaan dana" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Mt. Gox (2014) kehilangan sekitar 850.000 BTC, menandai risiko menitip aset di bursa.",
          "The DAO (2016) dikuras lewat reentrancy dan memicu hard fork Ethereum.",
          "Coincheck (Januari 2018) kehilangan token senilai sekitar 530 juta dolar dari hot wallet.",
          "FTX (November 2022) runtuh karena penyalahgunaan dana pelanggan, kerugian terbesar dari pihak terpusat.",
          "Pola berulang: titik lemah utama adalah pihak terpusat, bukan blockchain itu sendiri.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Berapa kira-kira Bitcoin yang hilang dalam keruntuhan Mt. Gox?",
            options: ["8.500 BTC", "85.000 BTC", "850.000 BTC", "8,5 juta BTC"],
            answer: 2,
            explain: "Mt. Gox mengumumkan kehilangan sekitar 850.000 BTC pada 2014.",
          },
          {
            q: "Apa penyebab dikurasnya dana The DAO pada 2016?",
            options: [
              "Pencurian private key bursa",
              "Celah reentrancy pada smart contract",
              "Serangan SIM swap",
              "Rug pull tim pengembang",
            ],
            answer: 1,
            explain: "The DAO dikuras lewat reentrancy, lalu memicu hard fork Ethereum dan Ethereum Classic.",
          },
          {
            q: "Apa yang terjadi pada Coincheck Januari 2018?",
            options: [
              "Bursa diluncurkan",
              "Token senilai sekitar 530 juta dolar AS dicuri dari hot wallet",
              "Menjadi bursa teraman dunia",
              "Meluncurkan stablecoin",
            ],
            answer: 1,
            explain: "Coincheck kehilangan token NEM senilai sekitar 530 juta dolar AS dari hot wallet.",
          },
          {
            q: "Apa penyebab keruntuhan FTX pada November 2022?",
            options: [
              "Blockchain Bitcoin diretas",
              "Penyalahgunaan dana pelanggan oleh bursa",
              "Celah reentrancy",
              "Halving yang gagal",
            ],
            answer: 1,
            explain: "FTX bangkrut setelah terungkap dana pelanggan disalahgunakan.",
          },
          {
            q: "Apa pola umum dari sebagian besar kerugian besar di sejarah kripto?",
            options: [
              "Blockchain selalu jebol",
              "Kerugian terbesar datang dari pihak terpusat seperti bursa",
              "Hanya menimpa Bitcoin",
              "Selalu karena lupa seed phrase",
            ],
            answer: 1,
            explain: "Mt. Gox, Coincheck, dan FTX menunjukkan titik lemah utama ada pada pihak terpusat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "self-custody-kunci",
    levelId: "keamanan",
    order: 6,
    title: "Self-Custody & Manajemen Kunci",
    summary:
      "Prinsip not your keys, not your coins, beda cold dan hot wallet, cara mencadangkan seed phrase dengan benar, dan kapan multisig dibutuhkan.",
    durationMin: 15,
    tags: ["keamanan", "self-custody", "seed-phrase", "cold-wallet", "multisig"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Self-custody</strong> berarti menyimpan asetmu sendiri, memegang <strong>private key</strong> tanpa menitipkannya ke bursa atau pihak ketiga. Inilah perwujudan langsung dari pepatah <strong>not your keys, not your coins</strong>: hanya pemegang kunci yang benar-benar menguasai dana.",
      },
      {
        type: "paragraph",
        html: "Kebebasan ini datang dengan tanggung jawab. Tidak ada layanan pelanggan yang bisa memulihkan kunci yang hilang. Maka <strong>manajemen kunci</strong> yang rapi, mulai dari cara menyimpan sampai mencadangkan <strong>seed phrase</strong>, menjadi keterampilan inti.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Cold wallet vs hot wallet",
        html: "<strong>Hot wallet</strong> selalu terhubung internet: praktis untuk dana harian yang kecil. <strong>Cold wallet</strong> menyimpan kunci offline (mis. hardware wallet): tepat untuk simpanan besar jangka panjang. Banyak orang memakai keduanya, seperti dompet saku dan brankas.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Cadangkan seed phrase dengan benar",
        html: "Tulis <strong>seed phrase</strong> di media fisik, simpan beberapa salinan di lokasi berbeda yang aman dari air dan api. Jangan pernah memotretnya, menyimpannya di cloud, atau mengetiknya di situs. Satu salinan yang bocor sama dengan menyerahkan seluruh aset.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Lihat bagaimana skema <strong>multisig m-of-n</strong> membagi kuasa: untuk dana besar, butuh beberapa kunci sebelum dana bisa dipindahkan.",
      },
      { type: "widget", widget: "SimulatorMultisig" },
      {
        type: "video",
        comp: "KeamananDompetVideo",
        title: "Menjaga Kunci Sendiri",
        caption: "Mengapa dompet menyimpan kunci, bukan koin, dan cara menjaga seed phrase tetap aman.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Trezor_Model_T.jpg?width=400",
        alt: "Hardware wallet Trezor Model T sebagai contoh cold storage untuk self-custody",
        caption: "Hardware wallet adalah cold storage yang umum dipakai untuk menjaga kunci sendiri secara offline.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Ketahanan Skema Penyimpanan terhadap Kehilangan & Pencurian (ilustrasi edukatif)",
        unit: "perkiraan ketahanan relatif",
        source: "ilustrasi edukatif berdasarkan prinsip redundansi dan offline",
        note: "Menambah cadangan dan membagi kuasa tanda tangan meningkatkan ketahanan; satu hot wallet tanpa cadangan paling rapuh.",
        data: [
          { label: "Hot wallet tanpa cadangan", value: 2, color: "#ef4444" },
          { label: "Hardware wallet", value: 6, color: "#f59e0b" },
          { label: "Hardware + cadangan seed", value: 8, color: "#84cc16" },
          { label: "Multisig 2-of-3", value: 9, color: "#22c55e" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pindah dari bursa ke dompet sendiri",
        html: "Seorang investor menyimpan 20 juta rupiah kripto untuk jangka panjang di bursa. Setelah belajar self-custody, ia membeli hardware wallet, memindahkan asetnya, lalu mencatat <strong>seed phrase</strong> di dua keping logam yang disimpan di dua lokasi berbeda. Dana harian kecil ia biarkan di hot wallet untuk kepraktisan. Kini, walau bursanya bermasalah, simpanan utamanya tetap di bawah kuasanya sendiri.",
      },
      {
        type: "case",
        title: "Sejarah: Gelombang self-custody setelah FTX runtuh (akhir 2022)",
        html: "Ketika bursa <strong>FTX</strong> runtuh pada <strong>November 2022</strong>, banyak pengguna mendadak tak bisa menarik dana mereka. Akibatnya, terjadi <strong>gelombang pindah ke self-custody</strong>: penjualan <strong>hardware wallet</strong> melonjak tajam di akhir 2022, pencarian soal cara menyimpan kunci sendiri meningkat, dan banyak orang menarik aset dari bursa ke dompet pribadi. Peristiwa itu menegaskan kembali pelajaran lama, not your keys, not your coins, kali ini dirasakan langsung oleh jutaan orang.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah dompet bersama memakai skema multisig 3-of-5. Berapa kunci minimal yang harus menandatangani agar transaksi sah?",
        answer: 3,
        tolerance: 0,
        suffix: "kunci",
        solution:
          "Pada 3-of-5, dibutuhkan minimal <strong>3 kunci</strong> dari 5 untuk menyetujui. Skema ini tahan jika sampai 2 kunci hilang, dan tetap aman jika 1 atau 2 kunci dicuri.",
        hint: "Angka pertama pada m-of-n adalah jumlah tanda tangan minimum.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap kebiasaan manajemen kunci sebagai aman atau berbahaya.",
        buckets: ["Aman", "Berbahaya"],
        items: [
          { text: "Menyimpan simpanan besar di cold wallet jangka panjang", bucket: "Aman" },
          { text: "Menyimpan seluruh aset di bursa demi kepraktisan", bucket: "Berbahaya" },
          { text: "Mencadangkan seed phrase di beberapa lokasi fisik aman", bucket: "Aman" },
          { text: "Menyimpan foto seed phrase di penyimpanan cloud", bucket: "Berbahaya" },
          { text: "Memakai multisig untuk dana bersama yang besar", bucket: "Aman" },
          { text: "Mengetik seed phrase di situs yang menjanjikan bonus", bucket: "Berbahaya" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Self-custody berarti memegang private key sendiri, perwujudan not your keys, not your coins.",
          "Hot wallet untuk dana harian kecil; cold wallet untuk simpanan besar jangka panjang.",
          "Cadangkan seed phrase di media fisik di beberapa lokasi; jangan difoto atau diunggah ke cloud.",
          "Multisig m-of-n membagi kuasa dan menghapus satu titik kegagalan untuk dana besar.",
          "Runtuhnya FTX (akhir 2022) memicu gelombang pindah ke self-custody dan lonjakan hardware wallet.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa arti self-custody?",
            options: [
              "Menitipkan kunci ke bursa",
              "Menyimpan aset sendiri dengan memegang private key tanpa pihak ketiga",
              "Membeli asuransi kripto",
              "Memakai kartu kredit untuk kripto",
            ],
            answer: 1,
            explain: "Self-custody berarti memegang kuncimu sendiri, bukan menitipkannya.",
          },
          {
            q: "Untuk apa cold wallet paling cocok?",
            options: [
              "Transaksi harian yang sangat sering",
              "Simpanan besar jangka panjang",
              "Membayar gas fee",
              "Menyimpan seed phrase di cloud",
            ],
            answer: 1,
            explain: "Cold wallet offline lebih aman untuk simpanan besar yang jarang dipindahkan.",
          },
          {
            q: "Cara mencadangkan seed phrase yang benar adalah?",
            options: [
              "Memotretnya dan menyimpan di galeri",
              "Menulisnya di media fisik dan menyimpan beberapa salinan di lokasi aman",
              "Mengunggahnya ke email",
              "Mengetiknya di situs dompet",
            ],
            answer: 1,
            explain: "Cadangan fisik di beberapa lokasi aman menghindari kebocoran lewat internet.",
          },
          {
            q: "Pada multisig 3-of-5, berapa tanda tangan minimum yang dibutuhkan?",
            options: ["1", "2", "3", "5"],
            answer: 2,
            explain: "Angka m pada m-of-n adalah jumlah minimum, di sini 3 dari 5.",
          },
          {
            q: "Apa dampak runtuhnya FTX akhir 2022 terhadap perilaku pengguna?",
            options: [
              "Semua orang pindah ke bursa lain",
              "Muncul gelombang pindah ke self-custody dan lonjakan hardware wallet",
              "Bitcoin dihentikan",
              "Seed phrase tidak lagi diperlukan",
            ],
            answer: 1,
            explain: "Banyak orang menarik dana ke dompet sendiri setelah merasakan risiko menitip aset di bursa.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "rekayasa-sosial",
    levelId: "keamanan",
    order: 7,
    title: "Rekayasa Sosial & Penipuan Umum",
    summary:
      "Mengenali modus yang menyerang manusia, bukan kode: SIM swap, dukungan palsu, giveaway scam, address poisoning, dan approval drainer.",
    durationMin: 15,
    tags: ["keamanan", "rekayasa-sosial", "penipuan", "sim-swap", "scam"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Rekayasa sosial</strong> adalah seni menipu manusia agar menyerahkan akses, bukan membobol kode. Penyerang memainkan rasa takut, serakah, atau terburu-buru. Karena targetnya manusia, pertahanan terbaik adalah kebiasaan dan kewaspadaan, bukan sekadar perangkat lunak.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Lima modus yang sering ditemui",
        html: "<strong>SIM swap</strong> (membajak nomor ponsel), <strong>dukungan palsu</strong> (mengaku admin resmi), <strong>giveaway scam</strong> (janji melipatgandakan kripto), <strong>address poisoning</strong> (menyusupkan alamat mirip), dan <strong>approval drainer</strong> (menjebak korban menyetujui izin yang menguras dompet).",
      },
      {
        type: "callout",
        tone: "warn",
        title: "SIM swap dan kelemahan OTP lewat SMS",
        html: "Pada <strong>SIM swap</strong>, penyerang membujuk operator memindahkan nomormu ke kartu SIM mereka, lalu merebut kode <strong>OTP</strong> yang dikirim lewat SMS. Karena itu, 2FA berbasis SMS jauh lebih lemah dibanding aplikasi authenticator atau kunci keamanan fisik.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Address poisoning dan approval drainer",
        html: "<strong>Address poisoning</strong> menaruh alamat yang sangat mirip milikmu di riwayat transaksi, berharap kamu salah menyalinnya saat mengirim. <strong>Approval drainer</strong> menjebak korban menekan tombol setuju yang memberi izin tak terbatas, lalu menyedot dompet.",
      },
      {
        type: "video",
        comp: "KeamananDompetVideo",
        title: "Mewaspadai Tipuan",
        caption: "Cara mengenali pesan, situs, dan permintaan palsu sebelum terlanjur memberi akses.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tor-onion-network.png?width=400",
        alt: "Ilustrasi jaringan terdistribusi yang menjaga privasi",
        caption: "Privasi melindungi sebagian data, tetapi rekayasa sosial menyerang manusia langsung, bukan jaringannya.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Ketahanan Metode 2FA terhadap SIM Swap (ilustrasi edukatif)",
        unit: "perkiraan ketahanan relatif",
        source: "ilustrasi edukatif berdasarkan prinsip keamanan",
        note: "OTP lewat SMS paling rapuh terhadap SIM swap; aplikasi authenticator lebih kuat, dan kunci keamanan fisik paling tahan.",
        data: [
          { label: "OTP via SMS", value: 2, color: "#ef4444" },
          { label: "Aplikasi authenticator", value: 7, color: "#f59e0b" },
          { label: "Kunci keamanan fisik", value: 9, color: "#22c55e" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pesan dukungan palsu di malam hari",
        html: "Seorang pengguna menulis keluhan di forum publik. Beberapa menit kemudian sebuah akun mengaku <strong>tim dukungan resmi</strong> mengiriminya pesan pribadi, menawarkan bantuan, lalu meminta <strong>seed phrase</strong> untuk memverifikasi dompet. Untungnya ia ingat aturan emas: tidak ada pihak sah yang pernah meminta seed phrase. Ia memblokir akun itu. Modus ini mengandalkan rasa panik dan keinginan cepat selesai, ciri khas rekayasa sosial.",
      },
      {
        type: "case",
        title: "Sejarah: Peretasan Twitter Juli 2020",
        html: "Pada <strong>15 Juli 2020</strong>, penyerang memakai <strong>rekayasa sosial</strong> terhadap karyawan Twitter untuk mengakses alat internal, lalu membajak akun tokoh terkenal seperti Barack Obama, Elon Musk, dan Bill Gates. Akun-akun itu memposting <strong>penipuan giveaway Bitcoin</strong>: kirim Bitcoin ke alamat tertentu dan terima dua kali lipat kembali. Banyak orang tertipu, dan penipu mengumpulkan sekitar <strong>12,86 BTC</strong> senilai kira-kira <strong>118.000 dolar AS</strong> dalam waktu singkat. Pelajarannya: bahkan pesan dari akun terverifikasi pun bisa palsu, dan janji melipatgandakan uang selalu penipuan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dalam penipuan Twitter 2020, penipu mengumpulkan sekitar 12,86 BTC senilai kira-kira 118.000 dolar AS. Berapa kira-kira nilai 1 BTC saat itu (dolar AS)?",
        answer: 9176,
        tolerance: 200,
        prefix: "$",
        solution:
          "118.000 dibagi 12,86 = sekitar <strong>9.176 dolar AS</strong> per BTC, mendekati harga Bitcoin pada pertengahan 2020. Janji melipatgandakan kripto seperti ini selalu tipuan.",
        hint: "Bagi total nilai dolar dengan jumlah BTC yang terkumpul.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan tiap modus rekayasa sosial dengan cirinya.",
        pairs: [
          { left: "SIM swap", right: "Membajak nomor ponsel korban untuk merebut kode OTP" },
          { left: "Dukungan palsu", right: "Mengaku admin resmi lalu meminta seed phrase atau akses" },
          { left: "Giveaway scam", right: "Janji melipatgandakan kripto bila kamu mengirim lebih dulu" },
          { left: "Address poisoning", right: "Menyusupkan alamat mirip ke riwayat agar korban salah salin" },
          { left: "Approval drainer", right: "Menjebak korban menyetujui izin yang menguras dompet" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap situasi sebagai aman atau penipuan rekayasa sosial.",
        buckets: ["Aman", "Penipuan"],
        items: [
          { text: "Memakai aplikasi authenticator alih-alih OTP SMS untuk akun penting", bucket: "Aman" },
          { text: "Akun mengaku tim resmi meminta seed phrase lewat pesan pribadi", bucket: "Penipuan" },
          { text: "Menyalin alamat tujuan dari sumber tepercaya, bukan dari riwayat", bucket: "Aman" },
          { text: "Tawaran kirim 1 Bitcoin dapat 2 Bitcoin kembali", bucket: "Penipuan" },
          { text: "Memeriksa seluruh karakter alamat sebelum mengirim", bucket: "Aman" },
          { text: "Pop-up meminta approve akses tak terbatas dari situs tak dikenal", bucket: "Penipuan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Rekayasa sosial menyerang manusia, bukan kode; pertahanannya adalah kebiasaan dan kewaspadaan.",
          "SIM swap membajak nomor ponsel, sehingga OTP lewat SMS lebih lemah dari authenticator atau kunci fisik.",
          "Tidak ada pihak sah yang meminta seed phrase, dan janji melipatgandakan kripto selalu penipuan.",
          "Address poisoning mengandalkan korban menyalin alamat mirip; selalu periksa seluruh karakter.",
          "Peretasan Twitter Juli 2020 membajak akun tokoh untuk penipuan giveaway Bitcoin senilai sekitar 118.000 dolar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa sasaran utama rekayasa sosial?",
            options: [
              "Celah pada kode smart contract",
              "Manusia, agar menyerahkan akses atau informasi rahasia",
              "Penambang blok",
              "Biaya gas jaringan",
            ],
            answer: 1,
            explain: "Rekayasa sosial menipu manusia, bukan membobol kode.",
          },
          {
            q: "Mengapa OTP lewat SMS rawan terhadap SIM swap?",
            options: [
              "Karena SMS gratis",
              "Karena penyerang bisa membajak nomor ponsel lalu merebut kode OTP",
              "Karena SMS terlalu lambat",
              "Karena SMS terenkripsi penuh",
            ],
            answer: 1,
            explain: "SIM swap memindahkan nomor korban ke penyerang sehingga OTP SMS bisa direbut.",
          },
          {
            q: "Apa ciri khas giveaway scam?",
            options: [
              "Meminta kamu mengaudit kode",
              "Menjanjikan melipatgandakan kripto bila kamu mengirim lebih dulu",
              "Memberi hardware wallet gratis tanpa syarat",
              "Mengunci likuiditas",
            ],
            answer: 1,
            explain: "Janji menggandakan kripto bila kamu mengirim dulu selalu tipuan.",
          },
          {
            q: "Apa itu address poisoning?",
            options: [
              "Meracuni server bursa",
              "Menyusupkan alamat mirip ke riwayat agar korban salah menyalin saat mengirim",
              "Menambahkan virus ke hardware wallet",
              "Membakar token korban",
            ],
            answer: 1,
            explain: "Penyerang berharap korban menyalin alamat mirip dari riwayat, lalu salah kirim.",
          },
          {
            q: "Apa yang terjadi pada peretasan Twitter Juli 2020?",
            options: [
              "Bitcoin diretas langsung dari blockchain",
              "Akun tokoh dibajak untuk penipuan giveaway Bitcoin",
              "Bursa FTX runtuh",
              "Stablecoin kehilangan patokan",
            ],
            answer: 1,
            explain: "Lewat rekayasa sosial, akun tokoh terkenal dibajak untuk menyebar penipuan giveaway Bitcoin.",
          },
        ],
      },
    ],
  },
];
