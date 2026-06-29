import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "apa-itu-cryptocurrency",
    levelId: "dasar",
    order: 1,
    title: "Apa Itu Cryptocurrency",
    summary:
      "Uang digital yang dijaga oleh jaringan dan matematika, bukan oleh bank. Kenali ide intinya lewat simulator dan studi kasus.",
    durationMin: 13,
    tags: ["dasar", "cryptocurrency", "bitcoin"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Cryptocurrency</strong> adalah uang digital yang dicatat di sebuah buku besar bersama (<strong>blockchain</strong>) dan dijaga oleh jaringan komputer di seluruh dunia, bukan oleh satu bank atau pemerintah. Keasliannya dijamin oleh <strong>kriptografi</strong>, cabang matematika untuk mengamankan informasi.",
      },
      {
        type: "paragraph",
        html: "Pada uang biasa, bank adalah pencatat tunggal yang memutuskan saldo siapa berkurang dan bertambah. Pada cryptocurrency, ribuan komputer menyimpan salinan catatan yang sama dan menyepakatinya bersama, sehingga tidak ada satu pihak pun yang bisa diam-diam mengubahnya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga ciri utama",
        html: "<strong>Terdesentralisasi</strong> (tidak ada penguasa tunggal), <strong>transparan</strong> (riwayat transaksi terbuka untuk diperiksa), dan <strong>tahan sensor</strong> (sulit dibekukan atau dipalsukan). Inilah yang membedakannya dari saldo rekening biasa.",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Pangsa Pasar Kripto berdasarkan Kapitalisasi (ilustrasi)",
        unit: "% kapitalisasi pasar",
        source: "ilustrasi edukatif, urutan sesuai dominasi nyata",
        note: "Bitcoin dan Ethereum secara konsisten mendominasi nilai pasar; ribuan koin lain berbagi sisanya.",
        data: [
          { label: "Bitcoin", value: 54, color: "#f7931a" },
          { label: "Ethereum", value: 17, color: "#627eea" },
          { label: "Stablecoin", value: 8, color: "#26a17b" },
          { label: "Lainnya", value: 21, color: "#94a3b8" },
        ],
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bitcoin.svg?width=400",
        alt: "Logo Bitcoin, cryptocurrency pertama dan terbesar",
        caption: "Logo Bitcoin, cryptocurrency pertama yang memperkenalkan ide uang digital tanpa bank.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Lihat bagaimana menunggu beberapa <strong>konfirmasi blok</strong> membuat sebuah transaksi makin sulit dibatalkan oleh penyerang.",
      },
      { type: "widget", widget: "SimulatorDoubleSpending" },
      {
        type: "video",
        comp: "LahirnyaBitcoinVideo",
        title: "Lahirnya Bitcoin",
        caption: "Dari whitepaper 2008 sampai blok genesis 2009: ide uang elektronik tanpa perantara.",
      },
      {
        type: "case",
        title: "Studi Kasus: Mengirim nilai tanpa perantara",
        html: "Seorang pekerja di luar negeri ingin mengirim uang ke keluarganya. Lewat jalur bank biasa, transfer bisa makan waktu beberapa hari dan biaya besar. Dengan cryptocurrency, ia mengirim langsung ke <strong>address</strong> tujuan; jaringan memverifikasi dan mencatatnya dalam hitungan menit, tanpa harus melewati banyak perantara. Kelebihan ini datang dengan tanggung jawab baru: tidak ada layanan pelanggan yang bisa membatalkan kiriman yang salah alamat.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah jaringan menghasilkan satu blok rata-rata tiap 10 menit. Berapa menit kira-kira waktu untuk mendapat 6 konfirmasi blok?",
        answer: 60,
        tolerance: 1,
        suffix: "menit",
        solution:
          "6 konfirmasi x 10 menit = <strong>60 menit</strong>. Banyak layanan menunggu 6 konfirmasi sebelum menganggap transaksi bernilai besar benar-benar final.",
        hint: "Kalikan jumlah konfirmasi dengan waktu rata-rata per blok.",
      },
      {
        type: "classifyExercise",
        prompt: "Manakah ciri cryptocurrency dan manakah ciri uang/rekening bank biasa?",
        buckets: ["Cryptocurrency", "Bank biasa"],
        items: [
          { text: "Dicatat oleh banyak komputer yang menyepakati bersama", bucket: "Cryptocurrency" },
          { text: "Saldo diatur oleh satu lembaga pusat", bucket: "Bank biasa" },
          { text: "Riwayat transaksi terbuka untuk diperiksa siapa pun", bucket: "Cryptocurrency" },
          { text: "Bisa membekukan atau membatalkan transaksi nasabah", bucket: "Bank biasa" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Krisis keuangan 2008 dan pesan di blok genesis",
        html: "Bitcoin lahir tepat setelah <strong>krisis keuangan global 2008</strong>, saat kepercayaan pada bank besar runtuh. Pada <strong>3 Januari 2009</strong>, blok pertama Bitcoin (blok genesis) ditambang dengan menyisipkan judul berita surat kabar The Times hari itu tentang dana talangan bank. Pesan itu jadi penanda niat: membangun sistem uang yang tidak bergantung pada penyelamatan bank oleh negara.",
      },
      {
        type: "takeaways",
        items: [
          "Cryptocurrency adalah uang digital yang dijaga jaringan dan kriptografi, bukan satu bank.",
          "Catatannya terdesentralisasi, transparan, dan tahan sensor.",
          "Transaksi dikonfirmasi oleh jaringan; makin banyak konfirmasi makin final.",
          "Kebebasan tanpa perantara datang dengan tanggung jawab menjaga aset sendiri.",
          "Bitcoin lahir dari ketidakpercayaan pada sistem keuangan saat krisis 2008.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang menjaga keaslian dan keamanan cryptocurrency?",
            options: ["Satu bank sentral", "Kriptografi dan jaringan terdesentralisasi", "Perusahaan asuransi", "Pemerintah penerbit"],
            answer: 1,
            explain: "Kriptografi mengamankan data dan jaringan menyepakati catatan tanpa otoritas tunggal.",
          },
          {
            q: "Apa arti 'terdesentralisasi'?",
            options: ["Diatur satu pihak", "Tidak ada penguasa tunggal atas catatan", "Tanpa aturan apa pun", "Hanya untuk negara tertentu"],
            answer: 1,
            explain: "Banyak komputer menyimpan dan menyepakati catatan yang sama, tanpa pusat tunggal.",
          },
          {
            q: "Mengapa banyak konfirmasi blok membuat transaksi lebih aman?",
            options: ["Biaya jadi gratis", "Makin sulit dibatalkan/diubah penyerang", "Transaksi jadi rahasia", "Saldo bertambah"],
            answer: 1,
            explain: "Tiap blok tambahan memperkuat transaksi sehingga makin mahal dan sulit dibalik.",
          },
          {
            q: "Apa yang istimewa dari blok genesis Bitcoin (3 Januari 2009)?",
            options: ["Berisi judul berita soal dana talangan bank", "Dibuat oleh sebuah bank", "Tidak punya hash", "Berisi 21 juta koin sekaligus"],
            answer: 0,
            explain: "Satoshi menyisipkan judul berita The Times sebagai penanda waktu dan pesan.",
          },
          {
            q: "Konsekuensi mengirim kripto ke address yang salah adalah?",
            options: ["Bank otomatis mengembalikan", "Biasanya tidak bisa dibatalkan", "Transaksi gagal sendiri", "Saldo kembali besok"],
            answer: 1,
            explain: "Tidak ada perantara yang bisa membatalkan; pengguna bertanggung jawab penuh.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "sejarah-bitcoin",
    levelId: "dasar",
    order: 2,
    title: "Sejarah Bitcoin & Mengapa Diciptakan",
    summary:
      "Dari whitepaper Satoshi Nakamoto 2008 sampai pizza seharga 10.000 BTC. Memahami alasan Bitcoin diciptakan dan jejak awalnya.",
    durationMin: 14,
    tags: ["dasar", "sejarah", "bitcoin", "satoshi"],
    blocks: [
      {
        type: "paragraph",
        html: "Pada <strong>31 Oktober 2008</strong>, seseorang (atau sekelompok orang) dengan nama samaran <strong>Satoshi Nakamoto</strong> menerbitkan sebuah dokumen sembilan halaman berjudul <em>Bitcoin: A Peer-to-Peer Electronic Cash System</em>. Dokumen ini, yang biasa disebut <strong>whitepaper</strong>, menjelaskan cara mengirim uang langsung antarorang tanpa melewati bank.",
      },
      {
        type: "paragraph",
        html: "Bitcoin tidak lahir di ruang hampa. Ia muncul tepat di tengah <strong>krisis keuangan global 2008</strong>, saat banyak bank besar runtuh dan kepercayaan publik pada lembaga keuangan jatuh. Gagasan intinya sederhana namun radikal: uang yang pasokannya tidak bisa dicetak sesuka hati dan tidak bergantung pada bank sentral mana pun.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga tonggak yang wajib diingat",
        html: "<strong>Okt 2008</strong>: whitepaper terbit. <strong>3 Jan 2009</strong>: blok genesis (blok pertama) ditambang. <strong>22 Mei 2010</strong>: transaksi nyata pertama, 10.000 BTC ditukar dengan dua pizza.",
      },
      {
        type: "video",
        comp: "LahirnyaBitcoinVideo",
        title: "Lahirnya Bitcoin",
        caption: "Menelusuri perjalanan dari ide di whitepaper 2008 sampai blok pertama tahun 2009.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/BitcoinSign.svg?width=400",
        alt: "Simbol mata uang Bitcoin, huruf B dengan dua garis vertikal",
        caption: "Simbol B Bitcoin, kini diakui luas sebagai lambang mata uang digital.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "case",
        title: "Studi Kasus: Whitepaper yang diuji para kriptografer",
        html: "Whitepaper Bitcoin pertama kali disebarkan ke sebuah <strong>milis kriptografi</strong> pada akhir 2008. Para ahli di sana, termasuk Hal Finney, langsung menguji dan mengkritisi gagasannya. Bukannya disembunyikan, rancangan Bitcoin justru dibuka untuk diperiksa siapa pun. Keterbukaan inilah yang membangun kepercayaan: setiap orang bisa membaca kode dan aturannya, lalu memutuskan sendiri apakah sistem itu masuk akal, tanpa harus percaya pada janji satu perusahaan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa pakai nama samaran?",
        html: "Sampai hari ini identitas asli Satoshi Nakamoto tidak diketahui. Justru ini memperkuat sifat <strong>terdesentralisasi</strong>: tidak ada satu sosok pendiri yang bisa mengendalikan atau dipaksa mengubah jaringan.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Garis Waktu Tonggak Awal Bitcoin",
        unit: "tahun peristiwa",
        source: "tanggal historis terverifikasi",
        note: "Hanya butuh sekitar dua tahun dari ide tertulis sampai Bitcoin dipakai membeli barang nyata.",
        data: [
          { label: "Whitepaper", value: 2008 },
          { label: "Blok genesis", value: 2009 },
          { label: "Pizza Day", value: 2010 },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Bitcoin Pizza Day, 22 Mei 2010",
        html: "Seorang programmer bernama Laszlo Hanyecz menawarkan <strong>10.000 BTC</strong> kepada siapa pun yang mau memesankan dua pizza untuknya. Seseorang menerima tawaran itu, dan jadilah transaksi pembelian barang nyata pertama memakai Bitcoin. Saat itu nilainya hanya sekitar 41 dolar AS. Bertahun kemudian, ketika harga Bitcoin melonjak, 10.000 BTC pernah bernilai ratusan juta dolar AS. Peristiwa ini dikenang tiap 22 Mei sebagai pengingat betapa awalnya Bitcoin nyaris tak bernilai.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada Bitcoin Pizza Day, 10.000 BTC ditukar dengan dua pizza. Berapa BTC harga satu pizza saat itu?",
        answer: 5000,
        tolerance: 0,
        suffix: "BTC",
        solution:
          "10.000 BTC dibagi 2 pizza = <strong>5.000 BTC</strong> per pizza. Angka yang terdengar gila hari ini, tapi wajar saat 1 BTC nyaris tak bernilai.",
        hint: "Bagi total BTC dengan jumlah pizza.",
      },
      {
        type: "calcExercise",
        prompt:
          "Bila pada Pizza Day 10.000 BTC bernilai sekitar 41 dolar AS, berapa kira-kira nilai 1 BTC saat itu (dalam dolar AS)?",
        answer: 0.0041,
        tolerance: 0.0005,
        prefix: "$",
        solution:
          "41 dibagi 10.000 = <strong>0,0041 dolar AS</strong> per BTC, kurang dari satu sen. Ini menggambarkan betapa murahnya Bitcoin di masa awal.",
        hint: "Bagi total nilai dolar dengan jumlah BTC.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan peristiwa dengan tanggalnya.",
        pairs: [
          { left: "Whitepaper Bitcoin terbit", right: "31 Oktober 2008" },
          { left: "Blok genesis ditambang", right: "3 Januari 2009" },
          { left: "Bitcoin Pizza Day", right: "22 Mei 2010" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Whitepaper Bitcoin terbit Oktober 2008, ditulis dengan nama samaran Satoshi Nakamoto.",
          "Blok genesis ditambang 3 Januari 2009 sebagai awal jaringan Bitcoin.",
          "Bitcoin diciptakan sebagai uang tanpa bank sentral, lahir dari krisis keuangan 2008.",
          "Bitcoin Pizza Day (22 Mei 2010) adalah pembelian barang nyata pertama: 10.000 BTC untuk dua pizza.",
          "Identitas Satoshi tetap misteri, dan itu menguatkan sifat tanpa penguasa tunggal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Siapa nama (samaran) penerbit whitepaper Bitcoin?",
            options: ["Vitalik Buterin", "Satoshi Nakamoto", "Hal Finney", "Laszlo Hanyecz"],
            answer: 1,
            explain: "Whitepaper diterbitkan atas nama Satoshi Nakamoto pada Oktober 2008.",
          },
          {
            q: "Kapan blok genesis Bitcoin ditambang?",
            options: ["31 Oktober 2008", "3 Januari 2009", "22 Mei 2010", "1 Januari 2008"],
            answer: 1,
            explain: "Blok pertama (genesis) ditambang pada 3 Januari 2009.",
          },
          {
            q: "Apa peristiwa Bitcoin Pizza Day?",
            options: [
              "Peluncuran bursa kripto pertama",
              "10.000 BTC ditukar dengan dua pizza",
              "Bitcoin mencapai harga 1 dolar",
              "Blok genesis ditambang",
            ],
            answer: 1,
            explain: "Pada 22 Mei 2010, 10.000 BTC ditukar dengan dua pizza, transaksi barang nyata pertama.",
          },
          {
            q: "Apa motif utama penciptaan Bitcoin?",
            options: [
              "Menggantikan internet",
              "Uang tanpa bank sentral setelah krisis 2008",
              "Menghapus semua mata uang negara",
              "Membuat permainan daring",
            ],
            answer: 1,
            explain: "Bitcoin dirancang sebagai uang elektronik tanpa otoritas pusat, lahir di tengah krisis 2008.",
          },
          {
            q: "Mengapa identitas Satoshi yang tak diketahui justru dianggap positif?",
            options: [
              "Agar bisa menaikkan harga",
              "Tidak ada sosok tunggal yang bisa mengendalikan jaringan",
              "Supaya tidak bayar pajak",
              "Agar whitepaper jadi rahasia",
            ],
            answer: 1,
            explain: "Tanpa pendiri yang bisa dikendalikan, sifat terdesentralisasi Bitcoin makin kuat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "double-spending-kelangkaan",
    levelId: "dasar",
    order: 3,
    title: "Double Spending & Kelangkaan Digital",
    summary:
      "Mengapa uang digital sulit dibuat sebelum Bitcoin: masalah membelanjakan koin yang sama dua kali, dan bagaimana batas 21 juta BTC menciptakan kelangkaan.",
    durationMin: 14,
    tags: ["dasar", "double-spending", "kelangkaan", "bitcoin"],
    blocks: [
      {
        type: "paragraph",
        html: "Berkas digital mudah disalin. Foto, lagu, atau dokumen bisa diduplikasi tanpa batas. Lalu bagaimana mungkin ada uang digital, jika koinnya bisa di-copy-paste? Inilah inti masalah <strong>double spending</strong>: membelanjakan satu unit uang digital yang sama lebih dari sekali.",
      },
      {
        type: "paragraph",
        html: "Selama puluhan tahun, satu-satunya jawaban adalah memakai <strong>perantara terpusat</strong> seperti bank, yang mencatat saldo dan mencegah uang yang sama dipakai dua kali. Terobosan Bitcoin adalah memecahkan masalah ini <strong>tanpa</strong> perantara, lewat jaringan yang menyepakati urutan transaksi bersama.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Kenapa double spending berbahaya",
        html: "Jika seseorang bisa membayar penjual A lalu memakai koin yang sama untuk membayar penjual B, nilai uang itu langsung runtuh. Tanpa solusi double spending, tidak ada yang mau menerima uang digital.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Lihat bagaimana penyerang mencoba membelanjakan koin yang sama dua kali, dan mengapa menunggu beberapa <strong>konfirmasi blok</strong> menggagalkan upaya itu.",
      },
      { type: "widget", widget: "SimulatorDoubleSpending" },
      {
        type: "video",
        comp: "HalvingVideo",
        title: "Halving & Kelangkaan Bitcoin",
        caption: "Bagaimana pemotongan hadiah blok secara berkala membuat pasokan baru kian langka menuju batas 21 juta.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bitcoin_Block_Data.png?width=400",
        alt: "Visual struktur data sebuah block Bitcoin",
        caption: "Isi sebuah block Bitcoin: kumpulan transaksi yang dikunci bersama dan tak bisa diubah belakangan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa kasir menunggu konfirmasi",
        html: "Sebuah toko daring menerima pembayaran kripto senilai besar. Alih-alih langsung mengirim barang, sistemnya menunggu beberapa <strong>konfirmasi blok</strong> dulu. Sebab dalam jeda singkat, secara teori seorang penyerang bisa mencoba menyiarkan transaksi tandingan untuk membatalkan pembayaran (upaya double spending). Setelah transaksi terkubur di bawah beberapa blok, membalikkannya jadi nyaris mustahil, dan barulah barang dikirim dengan aman.",
      },
      {
        type: "case",
        title: "Sejarah: DigiCash dan uang digital sebelum Bitcoin",
        html: "Pada awal 1990-an, kriptografer David Chaum mendirikan <strong>DigiCash</strong>, sebuah uang elektronik yang sangat menjaga privasi. Secara teknis cerdas, tapi DigiCash tetap bergantung pada <strong>perusahaan terpusat</strong> sebagai penjamin agar uang tidak dibelanjakan dua kali. Ketika perusahaannya bangkrut pada akhir 1990-an, uangnya ikut mati. Pelajaran ini jelas: selama ada satu titik pusat, sistem bisa runtuh bersama titik itu. Bitcoin kemudian menghapus titik pusat tersebut.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kelangkaan digital",
        html: "Bitcoin punya batas pasokan tetap: <strong>21 juta BTC</strong> dan tidak akan pernah lebih. Aturan ini ditulis dalam kode dan disepakati seluruh jaringan, sehingga tidak ada yang bisa mencetak Bitcoin tambahan. Kelangkaan inilah yang membuatnya sering dijuluki emas digital.",
      },
      {
        type: "chart",
        variant: "area",
        title: "Pasokan Bitcoin Menuju Batas 21 Juta",
        unit: "juta BTC beredar",
        source: "ilustrasi berdasarkan jadwal halving Bitcoin",
        note: "Pasokan baru terus melambat tiap halving; total mendekati 21 juta dan tidak pernah melampauinya.",
        data: [
          { label: "2012", value: 10.5 },
          { label: "2016", value: 15.5 },
          { label: "2020", value: 18.4 },
          { label: "2024", value: 19.7 },
          { label: "2040", value: 20.99 },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Jika dari batas 21 juta BTC sudah beredar sekitar 19,7 juta BTC, kira-kira berapa juta BTC lagi yang belum ditambang?",
        answer: 1.3,
        tolerance: 0.05,
        suffix: "juta BTC",
        solution:
          "21 - 19,7 = <strong>1,3 juta BTC</strong>. Sisa ini ditambang sangat perlahan selama puluhan tahun ke depan karena hadiah blok terus dipotong lewat halving.",
        hint: "Kurangkan jumlah yang sudah beredar dari batas total.",
      },
      {
        type: "classifyExercise",
        prompt: "Mana yang menggambarkan kelangkaan digital dan mana masalah double spending?",
        buckets: ["Kelangkaan digital", "Double spending"],
        items: [
          { text: "Pasokan Bitcoin dibatasi 21 juta dan tak bisa ditambah", bucket: "Kelangkaan digital" },
          { text: "Koin yang sama dipakai membayar dua penjual sekaligus", bucket: "Double spending" },
          { text: "Hadiah blok terus dipotong lewat halving", bucket: "Kelangkaan digital" },
          { text: "Penyerang mencoba membatalkan transaksi setelah barang diterima", bucket: "Double spending" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Double spending adalah membelanjakan unit uang digital yang sama lebih dari sekali.",
          "Sebelum Bitcoin, masalah ini hanya bisa dicegah oleh perantara terpusat seperti bank.",
          "DigiCash menunjukkan kelemahan titik pusat: ketika perusahaannya tutup, uangnya ikut mati.",
          "Bitcoin mencegah double spending tanpa perantara lewat kesepakatan jaringan dan konfirmasi blok.",
          "Batas 21 juta BTC menciptakan kelangkaan digital yang tidak bisa dilanggar siapa pun.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu double spending?",
            options: [
              "Membayar dua kali lipat harga",
              "Membelanjakan unit uang digital yang sama lebih dari sekali",
              "Membeli dua koin sekaligus",
              "Biaya transaksi ganda",
            ],
            answer: 1,
            explain: "Double spending adalah memakai koin digital yang sama untuk lebih dari satu pembayaran.",
          },
          {
            q: "Sebelum Bitcoin, bagaimana double spending dicegah?",
            options: [
              "Tidak pernah bisa dicegah",
              "Dengan perantara terpusat seperti bank",
              "Dengan menambah pasokan uang",
              "Dengan kartu fisik",
            ],
            answer: 1,
            explain: "Sistem lama bergantung pada lembaga pusat yang mencatat dan menjamin saldo.",
          },
          {
            q: "Apa kelemahan utama DigiCash?",
            options: [
              "Terlalu cepat",
              "Bergantung pada perusahaan terpusat yang bisa bangkrut",
              "Tidak menjaga privasi",
              "Pasokannya tak terbatas",
            ],
            answer: 1,
            explain: "DigiCash tetap punya titik pusat; ketika perusahaannya tutup, sistemnya ikut mati.",
          },
          {
            q: "Berapa batas total pasokan Bitcoin?",
            options: ["1 miliar BTC", "100 juta BTC", "21 juta BTC", "Tak terbatas"],
            answer: 2,
            explain: "Bitcoin dibatasi maksimal 21 juta koin dan aturannya tertanam dalam kode.",
          },
          {
            q: "Mengapa batas 21 juta menciptakan kelangkaan?",
            options: [
              "Karena pemerintah melarang lebih",
              "Karena tak ada yang bisa mencetak Bitcoin tambahan di luar aturan jaringan",
              "Karena koin sering hilang",
              "Karena harganya mahal",
            ],
            answer: 1,
            explain: "Aturan pasokan disepakati seluruh jaringan, sehingga pasokan tak bisa ditambah sesuka hati.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "koin-token-istilah",
    levelId: "dasar",
    order: 4,
    title: "Coin, Token, Stablecoin & Istilah Penting",
    summary:
      "Membedakan coin, token, dan stablecoin, lalu mengenal kosakata wajib: wallet, address, seed phrase, gas fee, block, dan node.",
    durationMin: 13,
    tags: ["dasar", "istilah", "token", "stablecoin", "wallet"],
    blocks: [
      {
        type: "paragraph",
        html: "Dunia kripto penuh istilah yang sering tertukar. Tiga yang paling membingungkan adalah <strong>coin</strong>, <strong>token</strong>, dan <strong>stablecoin</strong>. Memahami bedanya membuat kabar berita dan aplikasi kripto jauh lebih mudah dipahami.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Coin vs token vs stablecoin",
        html: "<strong>Coin</strong> adalah aset asli sebuah blockchain (mis. Bitcoin di jaringan Bitcoin, Ether di Ethereum). <strong>Token</strong> dibangun di atas blockchain milik orang lain (mis. token di jaringan Ethereum). <strong>Stablecoin</strong> adalah token yang nilainya dipatok ke aset stabil seperti dolar AS, agar harganya tidak naik turun liar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Sebelum lanjut, lihat bagaimana sebuah <strong>block</strong> dirangkai oleh <strong>hash</strong> sehingga tiap blok terkunci pada blok sebelumnya.",
      },
      { type: "widget", widget: "SimulatorBlokHash" },
      {
        type: "video",
        comp: "StablecoinPegVideo",
        title: "Cara Stablecoin Menjaga Patokan",
        caption: "Mengapa nilai stablecoin bisa tetap mendekati satu dolar AS, dan apa yang menjaganya stabil.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tether_Logo.svg?width=400",
        alt: "Logo Tether (USDT), stablecoin terbesar yang dipatok ke dolar AS",
        caption: "Logo Tether (USDT), salah satu stablecoin terbesar yang nilainya dipatok ke dolar AS.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "paragraph",
        html: "Selain coin dan token, ada kosakata harian yang wajib dikuasai: <strong>wallet</strong> (dompet penyimpan kunci), <strong>address</strong> (alamat tujuan transaksi), <strong>seed phrase</strong> (rangkaian kata cadangan dompet), <strong>gas fee</strong> (biaya jaringan), <strong>block</strong> (kumpulan transaksi), dan <strong>node</strong> (komputer penjaga salinan catatan).",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Seed phrase adalah nyawa dompetmu",
        html: "Siapa pun yang tahu <strong>seed phrase</strong>-mu bisa menguasai seluruh aset di dompet itu. Jangan pernah memotret, mengetik di chat, atau membagikannya. Kehilangan seed phrase berarti kehilangan akses selamanya, tanpa layanan pelanggan yang bisa memulihkannya.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Stabilitas Harga: Stablecoin vs Coin Biasa (ilustrasi)",
        unit: "perkiraan ayunan harga harian (%)",
        source: "ilustrasi edukatif pola yang umum diamati",
        note: "Stablecoin dirancang nyaris tak bergerak terhadap dolar, sementara coin biasa bisa berayun tajam dalam sehari.",
        data: [
          { label: "Stablecoin", value: 0.2, color: "#26a17b" },
          { label: "Bitcoin", value: 4, color: "#f7931a" },
          { label: "Coin kecil", value: 12, color: "#94a3b8" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengirim 'dolar digital' lintas negara",
        html: "Seorang pekerja lepas di Indonesia dibayar klien luar negeri memakai <strong>stablecoin</strong> senilai 500 dolar AS. Karena stablecoin dipatok ke dolar, nilainya tidak berubah saat dikirim, berbeda dengan coin biasa yang harganya bisa turun di tengah perjalanan. Ia membayar sedikit <strong>gas fee</strong> ke jaringan, dana masuk ke <strong>address</strong> dompetnya dalam hitungan menit, lalu ia bisa menukarnya ke rupiah lewat bursa.",
      },
      {
        type: "case",
        title: "Sejarah: Runtuhnya TerraUSD, Mei 2022",
        html: "Tidak semua stablecoin sama amannya. Pada <strong>Mei 2022</strong>, sebuah stablecoin algoritmik bernama <strong>TerraUSD (UST)</strong> kehilangan patokannya ke dolar AS. Berbeda dengan stablecoin yang didukung cadangan nyata, UST mengandalkan mekanisme algoritma dan koin pasangannya, Luna. Ketika kepercayaan goyah, harga UST anjlok jauh di bawah satu dolar dan koin Luna nyaris tak bernilai dalam hitungan hari, melenyapkan nilai puluhan miliar dolar AS. Peristiwa ini mengajarkan bahwa label stablecoin tidak otomatis berarti aman; cara ia dijamin sangat menentukan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Seorang pengguna mengirim stablecoin senilai 500 dolar AS dan membayar gas fee 3 dolar AS. Berapa total dolar AS yang berkurang dari saldonya?",
        answer: 503,
        tolerance: 0,
        prefix: "$",
        solution:
          "500 (nilai kiriman) + 3 (gas fee) = <strong>503 dolar AS</strong>. Gas fee adalah biaya jaringan yang dibayar terpisah dari jumlah yang dikirim.",
        hint: "Jumlahkan nilai kiriman dengan biaya jaringan.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan istilah dengan definisinya.",
        pairs: [
          { left: "Wallet", right: "Dompet yang menyimpan kunci dan mengelola aset" },
          { left: "Address", right: "Alamat tujuan untuk menerima transaksi" },
          { left: "Seed phrase", right: "Rangkaian kata cadangan untuk memulihkan dompet" },
          { left: "Gas fee", right: "Biaya yang dibayar ke jaringan untuk memproses transaksi" },
          { left: "Block", right: "Kumpulan transaksi yang dicatat bersama" },
          { left: "Node", right: "Komputer yang menyimpan salinan catatan jaringan" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap contoh sebagai coin, token, atau stablecoin.",
        buckets: ["Coin", "Token", "Stablecoin"],
        items: [
          { text: "Bitcoin, aset asli jaringan Bitcoin", bucket: "Coin" },
          { text: "Ether, aset asli jaringan Ethereum", bucket: "Coin" },
          { text: "Aset yang dibangun di atas jaringan Ethereum milik orang lain", bucket: "Token" },
          { text: "Token yang nilainya dipatok ke dolar AS", bucket: "Stablecoin" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Coin adalah aset asli sebuah blockchain; token dibangun di atas blockchain milik orang lain.",
          "Stablecoin adalah token yang nilainya dipatok ke aset stabil seperti dolar AS.",
          "Wallet menyimpan kunci, address adalah alamat tujuan, seed phrase adalah cadangan pemulihan.",
          "Gas fee adalah biaya jaringan; block adalah kumpulan transaksi; node menyimpan salinan catatan.",
          "Jangan pernah membagikan seed phrase, karena itu sama dengan menyerahkan seluruh aset.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa beda utama coin dan token?",
            options: [
              "Coin lebih mahal dari token",
              "Coin adalah aset asli sebuah blockchain, token dibangun di atas blockchain lain",
              "Token tidak bisa dikirim",
              "Tidak ada bedanya",
            ],
            answer: 1,
            explain: "Coin native pada jaringannya sendiri; token menumpang pada blockchain yang sudah ada.",
          },
          {
            q: "Apa ciri khas stablecoin?",
            options: [
              "Harganya selalu naik",
              "Nilainya dipatok ke aset stabil seperti dolar AS",
              "Tidak bisa dipindahkan",
              "Hanya ada di Bitcoin",
            ],
            answer: 1,
            explain: "Stablecoin dirancang agar nilainya tetap stabil terhadap aset acuannya.",
          },
          {
            q: "Apa fungsi seed phrase?",
            options: [
              "Menghitung biaya transaksi",
              "Rangkaian kata cadangan untuk memulihkan dompet",
              "Alamat tujuan transaksi",
              "Nama bursa kripto",
            ],
            answer: 1,
            explain: "Seed phrase adalah kunci pemulihan; siapa pun yang memilikinya menguasai dompet.",
          },
          {
            q: "Apa itu gas fee?",
            options: [
              "Harga sebuah coin",
              "Biaya yang dibayar ke jaringan untuk memproses transaksi",
              "Bonus dari bursa",
              "Pajak pemerintah",
            ],
            answer: 1,
            explain: "Gas fee adalah biaya jaringan untuk mencatat dan memproses transaksi.",
          },
          {
            q: "Apa peran sebuah node?",
            options: [
              "Mencetak coin baru tanpa aturan",
              "Komputer yang menyimpan salinan catatan jaringan",
              "Dompet fisik",
              "Alamat email pengguna",
            ],
            answer: 1,
            explain: "Node menyimpan dan menyebarkan salinan catatan, menjaga jaringan tetap terdesentralisasi.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "cypherpunk-pra-bitcoin",
    levelId: "dasar",
    order: 5,
    title: "Cypherpunk & Cikal Bakal Sebelum Bitcoin",
    summary:
      "Bitcoin tidak muncul tiba-tiba. Ada gerakan cypherpunk dan serangkaian eksperimen uang digital selama dua dekade yang menyiapkan jalannya.",
    durationMin: 14,
    tags: ["dasar", "sejarah", "cypherpunk", "kriptografi"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebelum Bitcoin lahir pada 2008, sudah ada sekelompok aktivis dan kriptografer yang memimpikan uang digital bebas pengawasan. Mereka menamai diri <strong>cypherpunk</strong>: gerakan yang percaya bahwa <strong>kriptografi</strong> bisa melindungi privasi dan kebebasan individu di era digital.",
      },
      {
        type: "paragraph",
        html: "Pada awal 1990-an, para cypherpunk saling bertukar gagasan lewat sebuah milis terkenal. Salah satu impian terbesar mereka adalah <strong>uang elektronik</strong> yang bisa dikirim privat tanpa bank. Banyak prototipe dicoba; semuanya gagal jadi besar, tetapi tiap kegagalan menyumbang satu bata penting bagi Bitcoin.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Apa itu cypherpunk?",
        html: "Cypherpunk adalah gerakan yang meyakini <strong>privasi adalah hak</strong> dan kriptografi adalah alat untuk menjaganya. Semboyan mereka kira-kira: jangan menunggu izin, tulislah kode yang melindungi kebebasan. Bitcoin adalah salah satu buah paling matang dari pemikiran ini.",
      },
      {
        type: "video",
        comp: "CypherpunkVideo",
        title: "Jejak Cypherpunk",
        caption: "Dari milis kriptografi 1990-an sampai eksperimen uang digital yang mendahului Bitcoin.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tor-onion-network.png?width=400",
        alt: "Ilustrasi jaringan terdistribusi berlapis untuk menjaga privasi",
        caption: "Cita-cita cypherpunk: jaringan terdistribusi yang menjaga privasi tanpa otoritas pusat.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa semua pendahulu gagal jadi besar",
        html: "eCash bergantung pada satu perusahaan. b-money dan Bit Gold hebat di atas kertas tetapi tak pernah dijalankan penuh. Hashcash bukan uang, melainkan alat anti-spam. Bitcoin berhasil karena merangkai potongan-potongan ini menjadi satu sistem yang benar-benar berjalan tanpa pusat.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Garis Waktu Cikal Bakal Uang Digital",
        unit: "tahun gagasan muncul",
        source: "tanggal historis terverifikasi",
        note: "Selama hampir dua dekade, ide demi ide menumpuk sampai akhirnya Bitcoin merangkainya pada 2008.",
        data: [
          { label: "eCash (Chaum)", value: 1989 },
          { label: "Hashcash (Back)", value: 1997 },
          { label: "b-money (Dai)", value: 1998 },
          { label: "Bit Gold (Szabo)", value: 1998 },
          { label: "Bitcoin", value: 2008 },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Empat pendahulu yang menyiapkan jalan Bitcoin",
        html: "<strong>eCash/DigiCash</strong> dari David Chaum (perusahaannya berdiri sekitar <strong>1989</strong>) memperkenalkan uang elektronik yang menjaga privasi, tetapi tetap terpusat. <strong>Hashcash</strong> dari Adam Back (<strong>1997</strong>) menciptakan ide <em>proof-of-work</em> untuk melawan spam email, yang kelak jadi mesin penambangan Bitcoin. <strong>b-money</strong> dari Wei Dai (<strong>1998</strong>) dan <strong>Bit Gold</strong> dari Nick Szabo (sekitar <strong>1998</strong>) merancang uang digital tanpa otoritas pusat. Semua ide ini mendahului whitepaper Bitcoin <strong>2008</strong>; whitepaper itu bahkan mengutip Hashcash dan b-money.",
      },
      {
        type: "case",
        title: "Studi Kasus: Dari anti-spam ke penambangan",
        html: "Hashcash awalnya hanya ingin membuat pengiriman email massal jadi mahal: tiap email harus disertai bukti kerja komputasi kecil yang memakan waktu. Bagi satu email, biayanya sepele; bagi pengirim spam jutaan email, biayanya menumpuk jadi mahal. Satoshi meminjam ide yang sama untuk Bitcoin: untuk menambahkan blok, penambang harus membuktikan telah melakukan kerja komputasi, sehingga memalsukan riwayat jadi sangat mahal.",
      },
      {
        type: "calcExercise",
        prompt:
          "Wei Dai mengusulkan b-money pada 1998, dan whitepaper Bitcoin terbit pada 2008. Berapa tahun jarak antara keduanya?",
        answer: 10,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "2008 - 1998 = <strong>10 tahun</strong>. Selama satu dekade itu, gagasan uang digital tanpa pusat terus diasah sampai akhirnya berhasil dijalankan oleh Bitcoin.",
        hint: "Kurangkan tahun gagasan awal dari tahun whitepaper.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan tiap gagasan pendahulu dengan tokoh dan tahunnya.",
        pairs: [
          { left: "eCash / DigiCash", right: "David Chaum, sekitar 1989" },
          { left: "Hashcash", right: "Adam Back, 1997" },
          { left: "b-money", right: "Wei Dai, 1998" },
          { left: "Bit Gold", right: "Nick Szabo, sekitar 1998" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pernyataan: gagasan cypherpunk pendahulu atau ciri khas Bitcoin?",
        buckets: ["Pendahulu cypherpunk", "Bitcoin"],
        items: [
          { text: "eCash menjaga privasi tetapi tetap terpusat", bucket: "Pendahulu cypherpunk" },
          { text: "Hashcash memakai proof-of-work untuk melawan spam", bucket: "Pendahulu cypherpunk" },
          { text: "Merangkai banyak ide jadi satu sistem yang benar-benar berjalan tanpa pusat", bucket: "Bitcoin" },
          { text: "b-money dan Bit Gold tak pernah dijalankan penuh", bucket: "Pendahulu cypherpunk" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Cypherpunk adalah gerakan yang memakai kriptografi untuk menjaga privasi dan kebebasan.",
          "eCash/DigiCash (Chaum, sekitar 1989) adalah uang elektronik privat namun tetap terpusat.",
          "Hashcash (Back, 1997) menyumbang ide proof-of-work yang jadi mesin penambangan Bitcoin.",
          "b-money (Dai, 1998) dan Bit Gold (Szabo, sekitar 1998) merancang uang tanpa otoritas pusat.",
          "Bitcoin 2008 berhasil karena merangkai semua ide pendahulu menjadi sistem yang benar-benar berjalan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa keyakinan inti gerakan cypherpunk?",
            options: [
              "Bank harus mengatur semua uang",
              "Kriptografi bisa melindungi privasi dan kebebasan individu",
              "Internet sebaiknya ditutup",
              "Uang digital mustahil dibuat",
            ],
            answer: 1,
            explain: "Cypherpunk percaya kriptografi adalah alat untuk menjaga privasi tanpa menunggu izin.",
          },
          {
            q: "Apa kontribusi Hashcash (1997) bagi Bitcoin?",
            options: [
              "Batas 21 juta koin",
              "Ide proof-of-work yang jadi dasar penambangan",
              "Nama Satoshi Nakamoto",
              "Stablecoin pertama",
            ],
            answer: 1,
            explain: "Hashcash memperkenalkan proof-of-work melawan spam, yang dipinjam Bitcoin untuk menambang blok.",
          },
          {
            q: "Apa kelemahan utama eCash/DigiCash?",
            options: [
              "Terlalu cepat diproses",
              "Tetap bergantung pada satu perusahaan terpusat",
              "Tidak menjaga privasi sama sekali",
              "Pasokannya tak terbatas",
            ],
            answer: 1,
            explain: "Meski menjaga privasi, eCash tetap punya titik pusat yang bisa runtuh bersama perusahaannya.",
          },
          {
            q: "Siapa yang mengusulkan b-money pada 1998?",
            options: ["Adam Back", "Wei Dai", "David Chaum", "Hal Finney"],
            answer: 1,
            explain: "b-money diusulkan oleh Wei Dai pada 1998 dan dikutip dalam whitepaper Bitcoin.",
          },
          {
            q: "Mengapa Bitcoin berhasil sementara pendahulunya tidak?",
            options: [
              "Karena didukung pemerintah",
              "Karena merangkai ide-ide pendahulu jadi satu sistem yang berjalan tanpa pusat",
              "Karena harganya langsung tinggi",
              "Karena dipromosikan bank besar",
            ],
            answer: 1,
            explain: "Bitcoin menggabungkan proof-of-work, kelangkaan, dan konsensus tanpa otoritas pusat menjadi sistem nyata.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "dompet-address-transaksi",
    levelId: "dasar",
    order: 6,
    title: "Dompet, Address & Transaksi Pertama",
    summary:
      "Memahami cara dompet kripto bekerja: kunci publik dan privat, address tujuan, serta cara mengirim dan menerima dengan aman.",
    durationMin: 14,
    tags: ["dasar", "wallet", "address", "transaksi"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah <strong>dompet kripto</strong> sebenarnya tidak menyimpan koin di dalamnya. Yang ia simpan adalah <strong>kunci</strong>: sepasang kunci publik dan kunci privat. Koinnya sendiri tetap tercatat di blockchain; dompet hanya menyimpan kunci yang membuktikan kamu berhak memindahkannya.",
      },
      {
        type: "paragraph",
        html: "Dari kunci publik diturunkan <strong>address</strong>, semacam nomor rekening yang boleh dibagikan ke siapa pun agar mereka bisa mengirim dana kepadamu. Sementara <strong>kunci privat</strong> adalah rahasia mutlak: siapa pun yang memilikinya bisa memindahkan seluruh isi dompet.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kunci publik vs kunci privat",
        html: "<strong>Kunci publik / address</strong>: boleh dibagikan, untuk menerima dana. <strong>Kunci privat / seed phrase</strong>: wajib dirahasiakan, untuk membelanjakan dana. Analoginya, address seperti nomor rekening, kunci privat seperti tanda tangan plus PIN sekaligus.",
      },
      {
        type: "video",
        comp: "KeamananDompetVideo",
        title: "Cara Kerja Dompet Kripto",
        caption: "Mengapa dompet menyimpan kunci, bukan koin, dan bagaimana kunci privat membuktikan kepemilikan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bitcoin_paper_wallet_generated_at_bitaddress.jpg?width=400",
        alt: "Paper wallet Bitcoin menampilkan address publik dan kunci privat dalam bentuk kode QR",
        caption: "Paper wallet: address publik (untuk menerima) di satu sisi, kunci privat (rahasia) di sisi lain.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Lihat bagaimana tiap <strong>block</strong> dikunci oleh <strong>hash</strong> ke blok sebelumnya, sehingga transaksi yang sudah tercatat sulit diubah.",
      },
      { type: "widget", widget: "SimulatorBlokHash" },
      {
        type: "chart",
        variant: "donut",
        title: "Perkiraan Bitcoin yang Hilang Permanen",
        unit: "% dari pasokan beredar",
        source: "perkiraan berbagai analisis rantai blok (ilustrasi)",
        note: "Banyak analisis memperkirakan sekitar seperlima Bitcoin tak bisa diakses lagi karena kuncinya hilang. Inilah harga dari menjaga aset sendiri.",
        data: [
          { label: "Masih dapat diakses", value: 80, color: "#26a17b" },
          { label: "Diperkirakan hilang", value: 20, color: "#94a3b8" },
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "Salah address tidak bisa dibatalkan",
        html: "Transaksi kripto bersifat <strong>final</strong>. Jika kamu mengirim ke address yang salah, tidak ada bank atau layanan pelanggan yang bisa menariknya kembali. Selalu periksa beberapa karakter awal dan akhir address sebelum mengirim.",
      },
      {
        type: "case",
        title: "Sejarah: Transaksi Bitcoin pertama, 12 Januari 2009",
        html: "Hanya sembilan hari setelah blok genesis, pada <strong>12 Januari 2009</strong>, terjadi transaksi Bitcoin pertama antar-orang. <strong>Satoshi Nakamoto</strong> mengirim <strong>10 BTC</strong> kepada <strong>Hal Finney</strong>, seorang kriptografer yang juga menjadi orang pertama yang menjalankan perangkat lunak Bitcoin selain Satoshi. Transaksi sederhana ini membuktikan bahwa mengirim nilai langsung antar-orang tanpa bank benar-benar bisa berjalan.",
      },
      {
        type: "case",
        title: "Studi Kasus: Menerima pembayaran pertama",
        html: "Seorang pedagang ingin menerima pembayaran kripto. Ia cukup membagikan <strong>address</strong> dompetnya, mirip memberikan nomor rekening. Pembeli mengirim dana ke address itu, jaringan mencatatnya, dan setelah beberapa <strong>konfirmasi</strong> dana dianggap aman. Pedagang tidak pernah perlu memberikan kunci privatnya kepada siapa pun, karena address publik sudah cukup untuk menerima.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jika sekitar 19,7 juta BTC beredar dan diperkirakan 20% di antaranya hilang permanen, berapa juta BTC kira-kira yang hilang?",
        answer: 3.94,
        tolerance: 0.1,
        suffix: "juta BTC",
        solution:
          "19,7 juta x 20% = 19,7 x 0,2 = <strong>3,94 juta BTC</strong>. Angka sebesar ini lenyap hanya karena kunci privatnya hilang, menegaskan pentingnya menjaga seed phrase.",
        hint: "Kalikan jumlah BTC beredar dengan 0,2.",
      },
      {
        type: "classifyExercise",
        prompt: "Mana yang boleh dibagikan dan mana yang harus dirahasiakan?",
        buckets: ["Boleh dibagikan", "Harus dirahasiakan"],
        items: [
          { text: "Address publik untuk menerima dana", bucket: "Boleh dibagikan" },
          { text: "Kunci privat dompet", bucket: "Harus dirahasiakan" },
          { text: "Seed phrase pemulihan", bucket: "Harus dirahasiakan" },
          { text: "Kunci publik tempat address diturunkan", bucket: "Boleh dibagikan" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan komponen dompet dengan perannya.",
        pairs: [
          { left: "Address", right: "Nomor tujuan untuk menerima dana, boleh dibagikan" },
          { left: "Kunci privat", right: "Rahasia yang membuktikan hak membelanjakan dana" },
          { left: "Seed phrase", right: "Kata-kata cadangan untuk memulihkan seluruh dompet" },
          { left: "Konfirmasi", right: "Blok tambahan yang membuat transaksi makin final" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Dompet menyimpan kunci, bukan koin; koin tetap tercatat di blockchain.",
          "Address (dari kunci publik) boleh dibagikan untuk menerima; kunci privat wajib dirahasiakan.",
          "Transaksi pertama antar-orang terjadi 12 Januari 2009: Satoshi mengirim 10 BTC ke Hal Finney.",
          "Transaksi bersifat final; salah address tidak bisa dibatalkan siapa pun.",
          "Sekitar seperlima Bitcoin diperkirakan hilang karena kuncinya raib, jadi jagalah seed phrase.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang sebenarnya disimpan sebuah dompet kripto?",
            options: ["Koin fisik", "Kunci publik dan privat", "Saldo bank", "Catatan seluruh blockchain"],
            answer: 1,
            explain: "Koin tercatat di blockchain; dompet menyimpan kunci yang membuktikan hak memindahkannya.",
          },
          {
            q: "Mana yang boleh dibagikan ke orang lain?",
            options: ["Kunci privat", "Seed phrase", "Address publik", "PIN dompet"],
            answer: 2,
            explain: "Address publik dipakai untuk menerima dana dan aman dibagikan; sisanya rahasia.",
          },
          {
            q: "Kapan transaksi Bitcoin pertama antar-orang terjadi?",
            options: ["3 Januari 2009", "12 Januari 2009", "22 Mei 2010", "31 Oktober 2008"],
            answer: 1,
            explain: "Pada 12 Januari 2009 Satoshi mengirim 10 BTC kepada Hal Finney.",
          },
          {
            q: "Apa yang terjadi jika mengirim ke address yang salah?",
            options: [
              "Bank mengembalikannya otomatis",
              "Biasanya tidak bisa dibatalkan",
              "Jaringan memperbaikinya sendiri",
              "Dana kembali setelah 24 jam",
            ],
            answer: 1,
            explain: "Transaksi bersifat final; tidak ada perantara yang bisa menarik dana kembali.",
          },
          {
            q: "Mengapa banyak Bitcoin diperkirakan hilang permanen?",
            options: [
              "Karena dicuri pemerintah",
              "Karena kunci privat atau seed phrase-nya hilang",
              "Karena pasokannya dikurangi",
              "Karena bursa menghapusnya",
            ],
            answer: 1,
            explain: "Tanpa kunci privat, koin tetap tercatat tetapi tak bisa dipindahkan oleh siapa pun.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "siklus-pasar-kripto",
    levelId: "dasar",
    order: 7,
    title: "Siklus Pasar Kripto: Bull & Bear",
    summary:
      "Harga kripto bergerak dalam gelombang naik-turun yang berulang. Kenali fase bull dan bear serta psikologi yang menyertainya agar tidak terbawa euforia.",
    durationMin: 14,
    tags: ["dasar", "pasar", "siklus", "psikologi"],
    blocks: [
      {
        type: "paragraph",
        html: "Harga kripto terkenal sangat <strong>volatil</strong>, bisa naik dan turun tajam. Namun di balik gejolak harian itu, ada pola besar yang berulang: pasar bergerak dalam <strong>siklus</strong>, bergantian antara masa optimisme dan masa pesimisme.",
      },
      {
        type: "paragraph",
        html: "Masa harga naik berkepanjangan disebut <strong>bull market</strong> (pasar banteng), sedangkan masa harga turun berkepanjangan disebut <strong>bear market</strong> (pasar beruang). Memahami siklus ini penting bukan untuk menebak harga, tetapi agar kita tidak mengambil keputusan gegabah karena euforia atau ketakutan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Bull vs bear",
        html: "<strong>Bull market</strong>: harga cenderung naik, optimisme tinggi, banyak berita gembira. <strong>Bear market</strong>: harga cenderung turun lama, banyak ketakutan, dan minat publik memudar. Keduanya selalu bergantian; tidak ada yang berlangsung selamanya.",
      },
      {
        type: "video",
        comp: "SiklusPasarVideo",
        title: "Anatomi Siklus Pasar",
        caption: "Mengapa harga kripto bergerak dalam gelombang berulang, dan bagaimana psikologi menyetir tiap fasenya.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/FTX_logo.svg?width=400",
        alt: "Logo FTX, bursa kripto besar yang runtuh pada 2022",
        caption: "Logo FTX, bursa raksasa yang runtuh pada akhir 2022, salah satu penanda bear market saat itu.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Pola Siklus Bitcoin (indeks relatif, ilustrasi)",
        unit: "indeks relatif",
        source: "ilustrasi edukatif berdasarkan urutan puncak dan jurang historis",
        note: "Polanya, bukan angkanya, yang penting: puncak di 2013, 2017, dan 2021, diselingi jurang di 2015, 2018, dan 2022, kira-kira berulang tiap empat tahun.",
        data: [
          { label: "2013", value: 10 },
          { label: "2015", value: 2 },
          { label: "2017", value: 60 },
          { label: "2018", value: 12 },
          { label: "2021", value: 100 },
          { label: "2022", value: 30 },
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "Jebakan emosi",
        html: "Banyak orang membeli saat harga sedang memuncak karena <strong>takut ketinggalan</strong> (FOMO), lalu panik menjual saat harga jatuh. Pola ini, beli mahal jual murah, justru kebalikan dari keputusan yang sehat. Siklus pasar memancing emosi, dan emosi sering jadi musuh terbesar.",
      },
      {
        type: "case",
        title: "Sejarah: Tiga puncak dan dua bear besar",
        html: "Pasar kripto sudah melewati beberapa siklus besar yang tercatat. Harga Bitcoin memuncak sekitar akhir <strong>2013</strong>, lalu jatuh dalam bear <strong>2014-2015</strong>. Puncak berikutnya terjadi akhir <strong>2017</strong>, disusul bear panjang sepanjang <strong>2018</strong>. Puncak besar berikutnya pada <strong>2021</strong>, lalu bear keras <strong>2022</strong> yang ditandai runtuhnya TerraUSD (Mei 2022) dan bursa FTX (November 2022). Pola naik-turun ini kira-kira berjarak empat tahun, kerap dikaitkan dengan jadwal <strong>halving</strong> Bitcoin.",
      },
      {
        type: "case",
        title: "Studi Kasus: Dua pembeli, satu siklus",
        html: "Bayangkan dua orang. Yang pertama membeli saat berita sedang ramai dan harga memuncak, terbawa euforia. Yang kedua mencicil beli sedikit demi sedikit secara rutin tanpa peduli sedang bull atau bear. Saat bear datang, pembeli pertama panik dan menjual rugi, sedangkan pembeli kedua tetap tenang karena harga rata-ratanya jauh lebih wajar. Bukan ramalan harga yang membedakan keduanya, melainkan disiplin terhadap emosi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Bitcoin memuncak sekitar 2013, 2017, dan 2021. Berapa tahun rata-rata jarak antar puncak tersebut?",
        answer: 4,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "Dari 2013 ke 2017 = 4 tahun, dari 2017 ke 2021 = 4 tahun. Rata-ratanya <strong>4 tahun</strong>, kira-kira sejalan dengan siklus halving Bitcoin.",
        hint: "Hitung selisih antar puncak lalu rata-ratakan.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan tahun dengan fase pasarnya.",
        pairs: [
          { left: "2017", right: "Puncak bull market" },
          { left: "2018", right: "Bear market panjang" },
          { left: "2021", right: "Puncak bull market" },
          { left: "2022", right: "Bear market, FTX runtuh" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap sikap atau tanda ke bull market atau bear market.",
        buckets: ["Bull market", "Bear market"],
        items: [
          { text: "Optimisme tinggi dan banyak berita gembira", bucket: "Bull market" },
          { text: "Banyak orang takut dan menjual rugi", bucket: "Bear market" },
          { text: "FOMO membeli saat harga memuncak", bucket: "Bull market" },
          { text: "Minat publik memudar dan harga turun lama", bucket: "Bear market" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Pasar kripto bergerak dalam siklus berulang antara bull (naik) dan bear (turun).",
          "Bitcoin memuncak sekitar 2013, 2017, dan 2021, dengan bear besar di 2015, 2018, dan 2022.",
          "Jarak antar puncak kira-kira empat tahun, sering dikaitkan dengan siklus halving.",
          "Bear 2022 ditandai runtuhnya TerraUSD (Mei) dan bursa FTX (November).",
          "Musuh terbesar investor sering kali emosi sendiri: FOMO saat puncak, panik saat jatuh.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu bull market?",
            options: [
              "Masa harga turun berkepanjangan",
              "Masa harga naik berkepanjangan dengan optimisme tinggi",
              "Bursa yang bangkrut",
              "Koin yang dipatok ke dolar",
            ],
            answer: 1,
            explain: "Bull market adalah fase harga cenderung naik lama dengan sentimen optimis.",
          },
          {
            q: "Sekitar tahun berapa saja puncak besar Bitcoin terjadi?",
            options: ["2010, 2012, 2014", "2013, 2017, 2021", "2009, 2015, 2020", "2016, 2019, 2023"],
            answer: 1,
            explain: "Puncak besar tercatat sekitar 2013, 2017, dan 2021, kira-kira tiap empat tahun.",
          },
          {
            q: "Apa dua peristiwa besar yang menandai bear market 2022?",
            options: [
              "Pizza Day dan blok genesis",
              "Runtuhnya TerraUSD dan bursa FTX",
              "Whitepaper dan halving pertama",
              "Peluncuran Ethereum dan Bitcoin",
            ],
            answer: 1,
            explain: "TerraUSD runtuh Mei 2022 dan FTX runtuh November 2022, menekan pasar dalam.",
          },
          {
            q: "Apa itu FOMO dalam konteks pasar?",
            options: [
              "Strategi menabung rutin",
              "Takut ketinggalan sehingga membeli saat harga memuncak",
              "Biaya jaringan transaksi",
              "Nama sebuah bursa",
            ],
            answer: 1,
            explain: "FOMO mendorong orang membeli di puncak karena takut ketinggalan, sering berakhir rugi.",
          },
          {
            q: "Kira-kira berapa tahun jarak antar puncak siklus Bitcoin?",
            options: ["1 tahun", "2 tahun", "4 tahun", "10 tahun"],
            answer: 2,
            explain: "Jarak antar puncak sekitar empat tahun, kerap dikaitkan dengan siklus halving.",
          },
        ],
      },
    ],
  },
];
