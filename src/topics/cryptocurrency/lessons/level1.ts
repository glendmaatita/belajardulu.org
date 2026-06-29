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
];
