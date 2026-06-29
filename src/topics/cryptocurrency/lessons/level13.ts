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
];
