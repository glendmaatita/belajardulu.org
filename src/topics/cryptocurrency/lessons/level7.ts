import type { Lesson } from "../../../types";

export const level7: Lesson[] = [
  // ============================================================
  {
    id: "solidity-lifecycle",
    levelId: "smartcontract",
    order: 1,
    title: "Solidity & Daur Hidup Kontrak",
    summary:
      "Mengenal Solidity sebagai bahasa utama smart contract, lalu menelusuri perjalanan kontrak dari ditulis, di-compile jadi bytecode, di-deploy hingga dapat address, sampai dipanggil pengguna.",
    durationMin: 14,
    tags: ["smart contract", "solidity", "deploy", "ethereum"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Smart contract</strong> adalah program yang hidup di atas blockchain. Begitu dipasang, ia berjalan persis seperti yang ditulis, tanpa bisa dihentikan atau diubah seenaknya oleh satu pihak. Di Ethereum, bahasa yang paling umum dipakai untuk menulisnya adalah <strong>Solidity</strong>.",
      },
      {
        type: "paragraph",
        html: "Kode Solidity yang kita tulis tidak langsung dijalankan jaringan. Ia harus melewati beberapa tahap: ditulis, di-<strong>compile</strong> menjadi <strong>bytecode</strong> (kode mesin yang dimengerti mesin virtual Ethereum), lalu di-<strong>deploy</strong> ke jaringan sehingga memperoleh sebuah <strong>address</strong>, dan akhirnya bisa <strong>dipanggil</strong> oleh pengguna.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Empat tahap daur hidup",
        html: "<strong>1) Tulis</strong> kode Solidity. <strong>2) Compile</strong> jadi bytecode. <strong>3) Deploy</strong> ke jaringan dan dapat address tetap. <strong>4) Panggil</strong>: pengguna mengirim transaksi ke address itu untuk menjalankan fungsi dan mengubah state.",
      },
      {
        type: "video",
        comp: "DaurHidupKontrakVideo",
        title: "Daur Hidup Smart Contract",
        caption: "Dari tulis ke compile, deploy, lalu dipanggil sampai state-nya berubah.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum-icon-purple.svg?width=400",
        alt: "Logo Ethereum berwarna ungu",
        caption: "Ethereum adalah jaringan tempat smart contract Solidity hidup dan dijalankan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "info",
        title: "Address kontrak itu permanen",
        html: "Setelah di-deploy, kontrak menempati satu <strong>address</strong> di blockchain selamanya. Siapa pun bisa mengirim transaksi ke address itu untuk memanggil fungsinya, selama aturan di dalam kontrak mengizinkan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Mainkan kontrak <strong>escrow</strong> sederhana dan amati bagaimana <strong>state</strong>-nya berpindah dari satu kondisi ke kondisi lain saat fungsi dipanggil.",
      },
      { type: "widget", widget: "SimulatorEscrowKontrak" },
      {
        type: "chart",
        variant: "bar",
        title: "Perkiraan Biaya Tiap Tahap (ilustrasi gas)",
        unit: "perkiraan gas",
        source: "ilustrasi edukatif, urutan biaya sesuai praktik umum",
        note: "Compile terjadi di komputer kita (tanpa gas); deploy adalah tahap termahal karena menulis seluruh bytecode ke blockchain.",
        data: [
          { label: "Tulis", value: 0, color: "#94a3b8" },
          { label: "Compile", value: 0, color: "#94a3b8" },
          { label: "Deploy", value: 800000, color: "#f7931a" },
          { label: "Panggil fungsi", value: 45000, color: "#627eea" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Dari kode ke kontrak hidup",
        html: "Seorang pengembang menulis kontrak escrow di Solidity. Ia menjalankan compiler, dan kodenya berubah menjadi <strong>bytecode</strong>. Ia lalu men-deploy bytecode itu lewat satu transaksi; jaringan memberinya sebuah <strong>address</strong>, misalnya diawali 0x9f3c. Sejak saat itu, pembeli cukup mengirim transaksi ke address tersebut untuk menyetor dana, dan kontrak otomatis menahan dana sampai syarat terpenuhi. Tidak ada admin yang perlu menekan tombol manual.",
      },
      {
        type: "case",
        title: "Sejarah: Ethereum dan lahirnya smart contract serbaguna, 2015",
        html: "Pada <strong>30 Juli 2015</strong>, jaringan <strong>Ethereum</strong> diluncurkan setelah digagas <strong>Vitalik Buterin</strong> sekitar tahun 2013. Bitcoin sudah punya skrip terbatas, tetapi Ethereum membawa ide besar: sebuah komputer dunia yang bisa menjalankan program apa pun lewat smart contract. Solidity diciptakan sebagai bahasa utamanya, dan sejak itu ribuan aplikasi terdesentralisasi dibangun di atasnya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jika men-deploy kontrak memakan 800.000 gas dan setiap pemanggilan fungsi memakan 45.000 gas, berapa total gas untuk satu deploy lalu tiga kali pemanggilan?",
        answer: 935000,
        tolerance: 0,
        suffix: "gas",
        solution:
          "Deploy 800.000 + (3 x 45.000) = 800.000 + 135.000 = <strong>935.000 gas</strong>. Deploy sekali itu mahal, tetapi setelah hidup, tiap pemanggilan jauh lebih murah.",
        hint: "Jumlahkan biaya deploy dengan tiga kali biaya pemanggilan.",
      },
      {
        type: "classifyExercise",
        prompt: "Urutkan tiap aktivitas ke tahap daur hidup kontrak yang tepat.",
        buckets: ["Tulis", "Compile", "Deploy", "Panggil"],
        items: [
          { text: "Mengetik fungsi dalam bahasa Solidity", bucket: "Tulis" },
          { text: "Mengubah kode menjadi bytecode", bucket: "Compile" },
          { text: "Mengirim bytecode ke jaringan dan menerima address", bucket: "Deploy" },
          { text: "Pengguna mengirim transaksi untuk menjalankan fungsi", bucket: "Panggil" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Solidity adalah bahasa utama untuk menulis smart contract di Ethereum.",
          "Kode Solidity di-compile menjadi bytecode sebelum bisa dijalankan jaringan.",
          "Deploy menempatkan kontrak di blockchain dan memberinya address permanen.",
          "Setelah hidup, kontrak dipanggil lewat transaksi ke address-nya untuk mengubah state.",
          "Deploy adalah tahap termahal; pemanggilan fungsi setelahnya jauh lebih murah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bahasa apa yang paling umum dipakai menulis smart contract Ethereum?",
            options: ["Python", "Solidity", "Java", "Rust"],
            answer: 1,
            explain: "Solidity adalah bahasa utama smart contract di Ethereum.",
          },
          {
            q: "Hasil dari proses compile sebuah kontrak adalah?",
            options: ["Address", "Bytecode", "Seed phrase", "Token"],
            answer: 1,
            explain: "Compiler mengubah kode Solidity menjadi bytecode yang dimengerti mesin virtual.",
          },
          {
            q: "Apa yang diperoleh kontrak setelah di-deploy?",
            options: ["Sebuah address permanen di blockchain", "Sebuah kata sandi", "Sebuah server pribadi", "Saldo gratis"],
            answer: 0,
            explain: "Deploy menempatkan kontrak di jaringan dan memberinya address tetap.",
          },
          {
            q: "Bagaimana pengguna menjalankan fungsi sebuah kontrak yang sudah hidup?",
            options: [
              "Menelepon pengembang",
              "Mengirim transaksi ke address kontrak",
              "Mengirim email ke jaringan",
              "Menambang blok baru",
            ],
            answer: 1,
            explain: "Pengguna memanggil fungsi dengan mengirim transaksi ke address kontrak.",
          },
          {
            q: "Kapan jaringan Ethereum diluncurkan?",
            options: ["2009", "2013", "2015", "2020"],
            answer: 2,
            explain: "Ethereum diluncurkan pada 30 Juli 2015, membawa smart contract serbaguna.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "events-storage",
    levelId: "smartcontract",
    order: 2,
    title: "Events & Storage",
    summary:
      "Dua cara kontrak menyimpan dan menyiarkan informasi: events sebagai log murah untuk didengar aplikasi, dan storage sebagai state permanen on-chain yang mahal untuk ditulis.",
    durationMin: 14,
    tags: ["smart contract", "events", "storage", "gas"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat sebuah kontrak berjalan, ia perlu dua hal: menyimpan data yang harus diingat selamanya, dan memberi tahu dunia luar bahwa sesuatu telah terjadi. Untuk itu Solidity memisahkan dua mekanisme: <strong>storage</strong> dan <strong>events</strong>.",
      },
      {
        type: "paragraph",
        html: "<strong>Storage</strong> adalah tempat menyimpan <strong>state</strong> permanen di blockchain, misalnya saldo tiap pengguna. Menulis ke storage <strong>mahal</strong> karena setiap node jaringan harus menyimpannya selamanya. <strong>Events</strong> hanya memancarkan <strong>log</strong> yang murah; aplikasi atau front-end bisa mendengarkannya untuk tahu apa yang terjadi, tetapi kontrak tidak bisa membaca kembali log itu.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Storage vs events",
        html: "<strong>Storage</strong>: state permanen, bisa dibaca kontrak, mahal ditulis. <strong>Events</strong>: log untuk dunia luar, murah, tidak bisa dibaca ulang oleh kontrak. Pakai event untuk memberi tahu aplikasi; pakai storage hanya untuk data yang benar-benar harus disimpan.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Storage itu sumber daya mahal",
        html: "Menulis satu slot storage baru memakan sekitar <strong>20.000 gas</strong>, jauh lebih besar dibanding memancarkan event atau melakukan perhitungan biasa. Karena itu kontrak yang baik berhemat menulis ke storage.",
      },
      {
        type: "video",
        comp: "DaurHidupKontrakVideo",
        title: "Saat Kontrak Mengubah State",
        caption: "Perhatikan momen pemanggilan fungsi mengubah state yang tersimpan di storage.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Blockchain.svg?width=400",
        alt: "Diagram rantai blok yang saling terhubung",
        caption: "State yang ditulis ke storage tersimpan permanen di rantai blok dan disalin tiap node.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perkiraan Biaya Gas per Operasi (ilustrasi)",
        unit: "perkiraan gas",
        source: "ilustrasi edukatif berdasarkan biaya khas EVM",
        note: "Menulis slot storage baru jauh lebih mahal daripada memancarkan event atau operasi memori biasa.",
        data: [
          { label: "Operasi memori", value: 3, color: "#94a3b8" },
          { label: "Pancarkan event", value: 1500, color: "#26a17b" },
          { label: "Ubah slot lama", value: 5000, color: "#627eea" },
          { label: "Tulis slot baru", value: 20000, color: "#f7931a" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Pola umum yang hemat",
        html: "Banyak kontrak menyimpan sesedikit mungkin di storage, lalu memancarkan <strong>event</strong> berisi detail lengkap. Front-end membaca event itu untuk menampilkan riwayat, sehingga kontrak tetap murah dijalankan.",
      },
      {
        type: "case",
        title: "Studi Kasus: Token mencatat transfer",
        html: "Sebuah kontrak token menyimpan saldo tiap pemilik di <strong>storage</strong> (data yang wajib diingat). Setiap kali terjadi pengiriman, kontrak memperbarui dua saldo di storage lalu memancarkan event <em>Transfer</em> berisi pengirim, penerima, dan jumlah. Dompet dan penjelajah blok tidak membaca storage satu per satu; mereka cukup <strong>mendengarkan event Transfer</strong> untuk menampilkan riwayat transaksi secara murah dan cepat.",
      },
      {
        type: "case",
        title: "Sejarah: Standar ERC-20 dan event Transfer, 2015",
        html: "Pada akhir 2015, <strong>Fabian Vogelsteller</strong> mengusulkan <strong>ERC-20</strong>, standar token di Ethereum yang kini dipakai ribuan proyek. Standar ini mewajibkan kontrak memancarkan event <em>Transfer</em> dan <em>Approval</em>. Justru karena event inilah dompet dan bursa bisa menampilkan saldo serta riwayat token apa pun secara seragam, tanpa perlu kode khusus untuk tiap token.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jika menulis satu slot storage baru memakan 20.000 gas, berapa total gas untuk mengisi 5 slot storage baru?",
        answer: 100000,
        tolerance: 0,
        suffix: "gas",
        solution:
          "5 x 20.000 = <strong>100.000 gas</strong>. Inilah sebabnya menyimpan banyak data baru di on-chain cepat menjadi mahal.",
        hint: "Kalikan biaya per slot baru dengan jumlah slot.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah fungsi memilih antara menulis data ke storage (20.000 gas) atau memancarkannya sebagai event (1.500 gas). Berapa gas yang dihemat dengan memakai event?",
        answer: 18500,
        tolerance: 0,
        suffix: "gas",
        solution:
          "20.000 - 1.500 = <strong>18.500 gas</strong> lebih hemat. Maka data yang tak perlu dibaca ulang oleh kontrak sebaiknya cukup dipancarkan lewat event.",
        hint: "Kurangkan biaya event dari biaya storage.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan ke storage atau events.",
        buckets: ["Storage", "Events"],
        items: [
          { text: "Menyimpan saldo permanen yang bisa dibaca kontrak", bucket: "Storage" },
          { text: "Memancarkan log murah agar front-end tahu ada transfer", bucket: "Events" },
          { text: "Mahal ditulis karena disimpan tiap node selamanya", bucket: "Storage" },
          { text: "Tidak bisa dibaca kembali oleh kontrak", bucket: "Events" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Storage menyimpan state permanen on-chain dan bisa dibaca ulang oleh kontrak.",
          "Menulis storage mahal, sekitar 20.000 gas untuk satu slot baru.",
          "Events memancarkan log murah untuk didengar aplikasi dan front-end.",
          "Kontrak tidak bisa membaca kembali event yang sudah dipancarkan.",
          "Pola hemat: simpan sedikit di storage, siarkan detail lewat event.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa fungsi utama storage pada smart contract?",
            options: [
              "Menyiarkan pesan ke aplikasi luar",
              "Menyimpan state permanen yang bisa dibaca kontrak",
              "Mempercepat compile",
              "Menghapus data lama otomatis",
            ],
            answer: 1,
            explain: "Storage menyimpan state permanen on-chain dan bisa dibaca ulang oleh kontrak.",
          },
          {
            q: "Mengapa menulis ke storage mahal?",
            options: [
              "Karena butuh kata sandi",
              "Karena setiap node menyimpannya selamanya",
              "Karena memakai internet cepat",
              "Karena harus dicetak ke kertas",
            ],
            answer: 1,
            explain: "Semua node menyimpan storage permanen, sehingga biayanya tinggi.",
          },
          {
            q: "Apa keterbatasan utama events?",
            options: [
              "Tidak bisa dibaca kembali oleh kontrak",
              "Selalu lebih mahal dari storage",
              "Tidak bisa didengar front-end",
              "Hanya bisa dipakai sekali",
            ],
            answer: 0,
            explain: "Event hanya untuk dunia luar; kontrak tidak bisa membaca log yang sudah dipancarkan.",
          },
          {
            q: "Kira-kira berapa gas untuk menulis satu slot storage baru?",
            options: ["20 gas", "200 gas", "2.000 gas", "20.000 gas"],
            answer: 3,
            explain: "Menulis satu slot storage baru memakan sekitar 20.000 gas.",
          },
          {
            q: "Mengapa standar ERC-20 mewajibkan event Transfer?",
            options: [
              "Agar token lebih mahal",
              "Agar dompet dan bursa bisa menampilkan riwayat secara seragam",
              "Agar kontrak bisa dihapus",
              "Agar gas jadi gratis",
            ],
            answer: 1,
            explain: "Event Transfer memungkinkan aplikasi membaca riwayat token apa pun dengan cara yang sama.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "keamanan-kontrak",
    levelId: "smartcontract",
    order: 3,
    title: "Keamanan Smart Contract",
    summary:
      "Karena kontrak memegang dana nyata dan sulit diubah, satu celah bisa berakibat fatal. Mengenal kerentanan umum seperti reentrancy dan overflow, serta prinsip checks-effects-interactions.",
    durationMin: 15,
    tags: ["smart contract", "keamanan", "reentrancy", "audit"],
    blocks: [
      {
        type: "paragraph",
        html: "Smart contract sering memegang dana nyata dan, secara default, tidak bisa diubah setelah di-deploy. Akibatnya, satu <strong>bug</strong> kecil bisa langsung dieksploitasi dan menguras seluruh dana, tanpa tombol darurat untuk membatalkannya. Karena itu keamanan adalah prioritas utama.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Tiga celah yang paling sering muncul",
        html: "<strong>Reentrancy</strong>: kontrak luar memanggil balik sebelum state diperbarui, sehingga dana ditarik berkali-kali. <strong>Overflow/underflow</strong>: angka melampaui batas dan berputar ke nilai keliru. <strong>Akses tak terbatas</strong>: fungsi penting tidak dibatasi, sehingga siapa pun bisa memanggilnya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Prinsip checks-effects-interactions",
        html: "Urutan aman saat menulis fungsi: <strong>checks</strong> (periksa syarat dulu), lalu <strong>effects</strong> (perbarui state sendiri, mis. kurangi saldo), baru <strong>interactions</strong> (kirim dana ke pihak luar). Dengan memperbarui state sebelum berinteraksi keluar, serangan reentrancy ditutup.",
      },
      {
        type: "case",
        title: "Sejarah: Peretasan The DAO, 2016",
        html: "Pada <strong>Juni 2016</strong>, sebuah dana investasi terdesentralisasi bernama <strong>The DAO</strong> diretas lewat celah <strong>reentrancy</strong>. Penyerang berulang kali memanggil fungsi penarikan sebelum saldonya sempat diperbarui, sehingga menguras sekitar <strong>3,6 juta ETH</strong>. Untuk memulihkan dana, komunitas Ethereum melakukan <strong>hard fork</strong> yang memecah jaringan menjadi <strong>Ethereum</strong> (rantai hasil fork) dan <strong>Ethereum Classic</strong> (rantai asli). Inilah pelajaran keamanan paling terkenal di dunia smart contract.",
      },
      {
        type: "video",
        comp: "DaurHidupKontrakVideo",
        title: "Mengapa Kontrak Sulit Diperbaiki",
        caption: "Setelah di-deploy, kode kontrak tetap; satu celah bisa terus dieksploitasi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum_logo_2014.svg?width=400",
        alt: "Logo Ethereum 2014",
        caption: "Banyak insiden keamanan paling terkenal terjadi pada kontrak di jaringan Ethereum.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kerugian Beberapa Insiden Smart Contract (perkiraan)",
        unit: "perkiraan kerugian (juta USD)",
        source: "perkiraan berdasarkan laporan publik insiden",
        note: "Banyak insiden besar berasal dari kelas bug yang sama, terutama reentrancy dan kesalahan kontrol akses.",
        data: [
          { label: "The DAO 2016", value: 60, color: "#f7931a" },
          { label: "Parity 2017", value: 150, color: "#627eea" },
          { label: "Beberapa DeFi 2021", value: 600, color: "#94a3b8" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Pertahanan berlapis",
        html: "Selain menerapkan checks-effects-interactions, gunakan pustaka teruji untuk operasi angka agar aman dari overflow, batasi fungsi sensitif hanya untuk pemilik, dan lakukan <strong>audit</strong> sebelum men-deploy kontrak yang memegang dana.",
      },
      {
        type: "calcExercise",
        prompt:
          "The DAO menguras sekitar 3,6 juta ETH. Jika saat itu 1 ETH bernilai sekitar 20 dolar AS, berapa kira-kira nilai kerugiannya dalam juta dolar AS?",
        answer: 72,
        tolerance: 1,
        suffix: "juta USD",
        solution:
          "3,6 juta ETH x 20 dolar = 72 juta dolar = <strong>72 juta USD</strong>. Nilai inilah yang memicu perdebatan besar dan akhirnya hard fork.",
        hint: "Kalikan jumlah ETH (dalam juta) dengan harga per ETH.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah variabel angka tak bertanda hanya bisa menyimpan nilai 0 sampai 255. Jika nilainya 255 lalu ditambah 3 dan terjadi overflow yang memutar ke awal, berapa hasil akhirnya?",
        answer: 2,
        tolerance: 0,
        solution:
          "255 + 3 = 258, tetapi karena batasnya 256 nilai, hasilnya berputar: 258 - 256 = <strong>2</strong>. Bug overflow seperti ini bisa membuat saldo melonjak tak terduga bila tidak dicegah.",
        hint: "Setelah melewati 255 nilainya kembali ke 0; hitung sisa setelah 256.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan tiap kerentanan dengan mitigasinya.",
        pairs: [
          { left: "Reentrancy", right: "Terapkan checks-effects-interactions" },
          { left: "Overflow angka", right: "Gunakan pustaka aritmetika teruji" },
          { left: "Akses tak terbatas", right: "Batasi fungsi hanya untuk pemilik" },
          { left: "Bug tak terdeteksi sebelum rilis", right: "Lakukan audit sebelum deploy" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Kontrak default tak bisa diubah, jadi satu celah bisa langsung dieksploitasi.",
          "Reentrancy, overflow, dan akses tak terbatas adalah kerentanan paling umum.",
          "Checks-effects-interactions memperbarui state sebelum berinteraksi keluar untuk menutup reentrancy.",
          "Peretasan The DAO 2016 menguras sekitar 3,6 juta ETH dan memicu hard fork Ethereum dan Ethereum Classic.",
          "Audit dan pustaka teruji adalah lapisan pertahanan wajib sebelum deploy kontrak bernilai.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu serangan reentrancy?",
            options: [
              "Menebak kata sandi kontrak",
              "Kontrak luar memanggil balik sebelum state diperbarui untuk menarik dana berulang",
              "Menambang dua blok sekaligus",
              "Menaikkan harga gas",
            ],
            answer: 1,
            explain: "Reentrancy mengeksploitasi pemanggilan balik sebelum saldo diperbarui.",
          },
          {
            q: "Apa urutan benar prinsip checks-effects-interactions?",
            options: [
              "Kirim dana dulu, baru periksa syarat",
              "Periksa syarat, perbarui state, lalu interaksi keluar",
              "Interaksi keluar, periksa, lalu perbarui",
              "Perbarui state setelah mengirim dana",
            ],
            answer: 1,
            explain: "State diperbarui sebelum berinteraksi keluar agar reentrancy gagal.",
          },
          {
            q: "Berapa kira-kira ETH yang terkuras dalam peretasan The DAO?",
            options: ["360 ribu ETH", "3,6 juta ETH", "36 juta ETH", "36 ribu ETH"],
            answer: 1,
            explain: "Sekitar 3,6 juta ETH terkuras lewat celah reentrancy.",
          },
          {
            q: "Apa akibat besar dari peretasan The DAO bagi Ethereum?",
            options: [
              "Ethereum ditutup permanen",
              "Terjadi hard fork yang memecah Ethereum dan Ethereum Classic",
              "Bitcoin mengambil alih",
              "Tidak terjadi apa-apa",
            ],
            answer: 1,
            explain: "Hard fork pemulihan memecah jaringan menjadi Ethereum dan Ethereum Classic.",
          },
          {
            q: "Mitigasi tepat untuk bug overflow angka adalah?",
            options: [
              "Menaikkan gas",
              "Memakai pustaka aritmetika teruji",
              "Menghapus event",
              "Membuat kontrak rahasia",
            ],
            answer: 1,
            explain: "Pustaka aritmetika teruji mencegah angka berputar ke nilai keliru.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "upgradeability-proxy",
    levelId: "smartcontract",
    order: 4,
    title: "Upgradeability & Proxy Pattern",
    summary:
      "Kontrak immutable secara default, padahal kadang perlu perbaikan. Pola proxy memisahkan tempat menyimpan state dari logic yang bisa diganti, dengan trade-off antara fleksibilitas dan keamanan.",
    durationMin: 14,
    tags: ["smart contract", "proxy", "upgrade", "ethereum"],
    blocks: [
      {
        type: "paragraph",
        html: "Secara default, smart contract bersifat <strong>immutable</strong>: setelah di-deploy, kodenya tidak bisa diubah. Sifat ini memberi kepastian, tetapi menyulitkan saat ada bug yang perlu diperbaiki atau fitur yang ingin ditambah. Solusinya adalah pola <strong>proxy</strong>.",
      },
      {
        type: "paragraph",
        html: "Dalam pola proxy, ada dua kontrak. Kontrak <strong>proxy</strong> menyimpan <strong>state</strong> dan menjadi address tetap yang dipakai pengguna. Ia tidak punya logic sendiri, melainkan <strong>mendelegasikan</strong> setiap panggilan ke kontrak <strong>implementasi</strong> yang berisi kode. Untuk meng-upgrade, pemilik cukup mengarahkan proxy ke implementasi baru, sementara state dan address tetap sama.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Proxy menyimpan state, implementasi menyimpan logic",
        html: "<strong>Proxy</strong>: address tetap + state permanen, meneruskan panggilan. <strong>Implementasi</strong>: berisi logic yang bisa diganti. Upgrade berarti menukar implementasi, bukan memindahkan dana atau mengganti address yang dipakai pengguna.",
      },
      {
        type: "video",
        comp: "DaurHidupKontrakVideo",
        title: "State Tetap, Logic Bisa Berganti",
        caption: "Proxy menjaga state dan address, sementara logic implementasi dapat diperbarui.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Blockchain_workflow.png?width=400",
        alt: "Diagram alur kerja blockchain",
        caption: "Pola proxy meneruskan tiap panggilan ke kontrak implementasi yang dapat ditukar.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Fleksibilitas membawa risiko baru",
        html: "Kemampuan upgrade berarti ada pihak (pemilik atau admin) yang bisa mengganti logic. Bila kunci admin bocor atau disalahgunakan, logic jahat bisa dipasang. Maka kekuatan upgrade sering dikunci di balik <strong>multisig</strong> atau <strong>timelock</strong> agar tidak bisa dipakai diam-diam.",
      },
      {
        type: "case",
        title: "Studi Kasus: Memperbaiki bug tanpa pindah address",
        html: "Sebuah aplikasi keuangan terdesentralisasi memakai pola proxy. Suatu hari ditemukan bug kecil pada perhitungan bunga. Karena logic terpisah di kontrak <strong>implementasi</strong>, tim cukup men-deploy implementasi baru yang sudah diperbaiki lalu mengarahkan <strong>proxy</strong> kepadanya. Pengguna tetap memakai <strong>address</strong> yang sama dan saldo mereka, yang tersimpan di storage proxy, tidak bergeser sama sekali.",
      },
      {
        type: "case",
        title: "Sejarah: Bug Parity multisig, 2017",
        html: "Pada <strong>November 2017</strong>, sebuah pustaka kontrak dompet <strong>multisig Parity</strong> tak sengaja dipicu dan dikunci oleh seorang pengguna. Karena banyak dompet bergantung pada satu kontrak pustaka bersama, pembekuan itu membuat sekitar <strong>513 ribu ETH</strong> terkunci dan tak bisa diakses. Insiden ini menegaskan bahwa arsitektur dengan logic terpisah harus dirancang sangat hati-hati, sebab kesalahan pada bagian bersama bisa berdampak luas.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan pola proxy, upgrade dilakukan dengan men-deploy 1 kontrak implementasi baru lalu 1 transaksi mengarahkan proxy. Berapa total kontrak yang ikut serta saat aplikasi berjalan setelah upgrade (proxy + implementasi aktif)?",
        answer: 2,
        tolerance: 0,
        suffix: "kontrak",
        solution:
          "Saat berjalan ada <strong>2 kontrak</strong>: satu proxy (menyimpan state) dan satu implementasi aktif (menyimpan logic). Implementasi lama ditinggalkan, tidak lagi dirujuk.",
        hint: "Hitung proxy ditambah satu implementasi yang sedang aktif.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pernyataan ke kontrak proxy atau kontrak implementasi.",
        buckets: ["Proxy", "Implementasi"],
        items: [
          { text: "Menyimpan state dan saldo pengguna secara permanen", bucket: "Proxy" },
          { text: "Berisi logic yang dijalankan dan bisa diganti", bucket: "Implementasi" },
          { text: "Memberi address tetap yang dipakai pengguna", bucket: "Proxy" },
          { text: "Di-deploy versi baru saat ada perbaikan bug", bucket: "Implementasi" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan istilah dengan perannya pada pola upgrade.",
        pairs: [
          { left: "Proxy", right: "Menyimpan state dan meneruskan panggilan" },
          { left: "Implementasi", right: "Berisi logic yang bisa diperbarui" },
          { left: "Timelock", right: "Menunda upgrade agar bisa diawasi publik" },
          { left: "Immutable", right: "Sifat default kontrak yang tak bisa diubah" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Smart contract bersifat immutable secara default, sehingga sulit diperbaiki setelah deploy.",
          "Pola proxy memisahkan state (di proxy) dari logic (di implementasi yang bisa diganti).",
          "Upgrade dilakukan dengan mengarahkan proxy ke implementasi baru, address dan state tetap.",
          "Fleksibilitas upgrade menambah risiko karena ada pihak yang bisa mengganti logic.",
          "Multisig dan timelock dipakai untuk membatasi dan mengawasi kekuatan upgrade.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa sifat default sebuah smart contract setelah di-deploy?",
            options: ["Bisa diedit kapan saja", "Immutable, tidak bisa diubah", "Otomatis terhapus", "Selalu gratis dijalankan"],
            answer: 1,
            explain: "Secara default kode kontrak tidak bisa diubah setelah di-deploy.",
          },
          {
            q: "Pada pola proxy, di mana state pengguna disimpan?",
            options: ["Di kontrak implementasi", "Di kontrak proxy", "Di luar blockchain", "Di dompet pengguna"],
            answer: 1,
            explain: "Proxy menyimpan state dan address tetap; implementasi hanya menyimpan logic.",
          },
          {
            q: "Bagaimana cara meng-upgrade kontrak dengan pola proxy?",
            options: [
              "Memindahkan semua dana ke address baru",
              "Mengarahkan proxy ke kontrak implementasi baru",
              "Mengubah kode proxy secara langsung",
              "Menambang ulang blok genesis",
            ],
            answer: 1,
            explain: "Upgrade berarti menukar implementasi, sementara proxy dan state tetap.",
          },
          {
            q: "Apa risiko utama dari kontrak yang bisa di-upgrade?",
            options: [
              "Gas menjadi gratis",
              "Ada pihak yang bisa mengganti logic, termasuk dengan logic jahat",
              "Address selalu berubah",
              "State otomatis hilang",
            ],
            answer: 1,
            explain: "Kemampuan upgrade memberi kekuasaan mengganti logic yang bisa disalahgunakan.",
          },
          {
            q: "Apa pelajaran dari insiden multisig Parity 2017?",
            options: [
              "Proxy selalu aman",
              "Kesalahan pada kontrak bersama bisa membekukan dana banyak pengguna",
              "Immutable tidak pernah berguna",
              "Gas tidak penting",
            ],
            answer: 1,
            explain: "Sekitar 513 ribu ETH terkunci karena bug pada pustaka kontrak bersama.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "bahasa-tooling",
    levelId: "smartcontract",
    order: 5,
    title: "Bahasa & Tooling Smart Contract",
    summary:
      "Mengenal bahasa penulisan smart contract seperti Solidity dan Vyper, proses kompilasi ke bytecode, serta alat bantu modern seperti Remix, Hardhat, dan Foundry, plus pentingnya menguji di testnet sebelum mainnet.",
    durationMin: 14,
    tags: ["smart contract", "solidity", "tooling", "testnet"],
    blocks: [
      {
        type: "paragraph",
        html: "Menulis smart contract bukan cuma soal mengetik kode. Pengembang memilih <strong>bahasa</strong> yang tepat, memakai <strong>alat (tooling)</strong> untuk mengompilasi serta menguji, lalu mencoba semuanya di <strong>testnet</strong> sebelum berani melepasnya ke jaringan utama. Rangkaian alat inilah yang membuat kontrak lebih aman dan dapat diandalkan.",
      },
      {
        type: "paragraph",
        html: "Dua bahasa paling dikenal di Ethereum adalah <strong>Solidity</strong> dan <strong>Vyper</strong>. Solidity bergaya mirip JavaScript dan paling banyak dipakai, sedangkan Vyper bergaya mirip Python dan sengaja dibuat lebih sederhana agar mudah diaudit. Apa pun bahasanya, kodenya tetap di-<strong>compile</strong> menjadi <strong>bytecode</strong> yang sama-sama dijalankan mesin virtual Ethereum.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Solidity vs Vyper",
        html: "<strong>Solidity</strong>: paling populer, fitur lengkap, gaya mirip JavaScript. <strong>Vyper</strong>: lebih ringkas dan ketat, gaya mirip Python, dirancang agar mudah dibaca dan diaudit. Keduanya menghasilkan bytecode untuk EVM yang sama.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga alat yang sering dipakai",
        html: "<strong>Remix</strong>: editor di browser, cocok untuk belajar dan mencoba cepat. <strong>Hardhat</strong>: kerangka kerja berbasis JavaScript untuk menulis test dan men-deploy. <strong>Foundry</strong>: perangkat cepat berbasis bahasa Solidity untuk testing, populer karena kecepatannya.",
      },
      {
        type: "video",
        comp: "DaurHidupKontrakVideo",
        title: "Dari Kode ke Kontrak yang Hidup",
        caption: "Tooling membantu tiap tahap: menulis, compile jadi bytecode, menguji, lalu deploy.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum_logo_2014.svg?width=400",
        alt: "Logo Ethereum 2014",
        caption: "Solidity dan Vyper sama-sama menargetkan mesin virtual Ethereum (EVM).",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Uji di testnet dulu",
        html: "Sebelum melepas kontrak ke <strong>mainnet</strong> (jaringan utama dengan dana asli), pengembang men-deploy ke <strong>testnet</strong> seperti Sepolia. Di testnet, gas dibayar dengan token uji tanpa nilai, sehingga bug bisa ditemukan tanpa risiko kehilangan uang sungguhan.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perkiraan Pemakaian Bahasa Smart Contract di Ethereum (ilustrasi)",
        unit: "perkiraan pangsa (%)",
        source: "ilustrasi edukatif, urutan sesuai praktik umum komunitas",
        note: "Solidity mendominasi penulisan kontrak, sementara Vyper dipakai sebagian proyek yang mengutamakan kesederhanaan.",
        data: [
          { label: "Solidity", value: 85, color: "#627eea" },
          { label: "Vyper", value: 10, color: "#26a17b" },
          { label: "Lainnya", value: 5, color: "#94a3b8" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Alur kerja sebelum rilis",
        html: "Sebuah tim menulis kontrak token di <strong>Solidity</strong> memakai <strong>Foundry</strong>. Mereka menulis puluhan test otomatis, menjalankannya hingga semua lulus, lalu men-deploy ke <strong>testnet Sepolia</strong> untuk dicoba bersama front-end. Setelah dua minggu tanpa masalah dan satu <strong>audit</strong> singkat, barulah kontrak yang sama di-deploy ke <strong>mainnet</strong>. Urutan ini memangkas risiko bug mahal yang sulit diperbaiki setelah live.",
      },
      {
        type: "case",
        title: "Sejarah: Solidity diusulkan, 2014",
        html: "Pada <strong>2014</strong>, <strong>Gavin Wood</strong>, salah satu pendiri Ethereum, mengusulkan bahasa <strong>Solidity</strong>. Bahasa ini kemudian dikembangkan oleh tim Ethereum dan menjadi bahasa utama untuk menulis smart contract. Sejak itu, mayoritas aplikasi terdesentralisasi di Ethereum ditulis dengan Solidity, menjadikannya salah satu bahasa terpenting di dunia kripto.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah tim menjalankan 40 test otomatis, dan 38 di antaranya lulus. Berapa persen test yang lulus?",
        answer: 95,
        tolerance: 0,
        suffix: "%",
        solution:
          "38 / 40 = 0,95 = <strong>95%</strong>. Dua test yang gagal menandai bug yang harus diperbaiki sebelum deploy.",
        hint: "Bagi jumlah test lulus dengan total test, lalu kalikan 100.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap item ke kategori yang tepat.",
        buckets: ["Bahasa", "Alat (Tooling)"],
        items: [
          { text: "Solidity", bucket: "Bahasa" },
          { text: "Vyper", bucket: "Bahasa" },
          { text: "Hardhat", bucket: "Alat (Tooling)" },
          { text: "Foundry", bucket: "Alat (Tooling)" },
          { text: "Remix", bucket: "Alat (Tooling)" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan tiap istilah dengan perannya.",
        pairs: [
          { left: "Compile", right: "Mengubah kode jadi bytecode" },
          { left: "Testnet", right: "Jaringan uji tanpa dana asli" },
          { left: "Mainnet", right: "Jaringan utama dengan dana nyata" },
          { left: "Remix", right: "Editor kontrak di browser" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Solidity (gaya JavaScript) dan Vyper (gaya Python) adalah bahasa smart contract utama di Ethereum.",
          "Apa pun bahasanya, kode di-compile menjadi bytecode untuk mesin virtual Ethereum.",
          "Remix, Hardhat, dan Foundry adalah alat populer untuk menulis, menguji, dan men-deploy.",
          "Uji kontrak di testnet sebelum melepasnya ke mainnet yang memegang dana asli.",
          "Solidity diusulkan Gavin Wood pada 2014 dan menjadi bahasa utama smart contract.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bahasa mana yang bergaya mirip Python dan dirancang agar mudah diaudit?",
            options: ["Solidity", "Vyper", "Rust", "Java"],
            answer: 1,
            explain: "Vyper bergaya mirip Python dan sengaja dibuat ringkas agar mudah dibaca dan diaudit.",
          },
          {
            q: "Apa hasil dari mengompilasi kode Solidity atau Vyper?",
            options: ["Bytecode untuk EVM", "Sebuah dompet", "Seed phrase", "Token gratis"],
            answer: 0,
            explain: "Kedua bahasa di-compile menjadi bytecode yang dijalankan mesin virtual Ethereum.",
          },
          {
            q: "Apa fungsi testnet?",
            options: [
              "Tempat menyimpan dana asli",
              "Jaringan uji untuk mencoba kontrak tanpa risiko uang sungguhan",
              "Alat untuk menambang Bitcoin",
              "Bahasa pemrograman baru",
            ],
            answer: 1,
            explain: "Testnet memakai token uji tanpa nilai sehingga bug bisa ditemukan tanpa kerugian nyata.",
          },
          {
            q: "Alat mana yang berupa editor kontrak di browser, cocok untuk belajar cepat?",
            options: ["Foundry", "Hardhat", "Remix", "Vyper"],
            answer: 2,
            explain: "Remix adalah editor berbasis browser yang praktis untuk mencoba dan belajar.",
          },
          {
            q: "Siapa yang mengusulkan bahasa Solidity pada 2014?",
            options: ["Satoshi Nakamoto", "Gavin Wood", "Fabian Vogelsteller", "Charles Hoskinson"],
            answer: 1,
            explain: "Gavin Wood, salah satu pendiri Ethereum, mengusulkan Solidity pada 2014.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pola-standar-kontrak",
    levelId: "smartcontract",
    order: 6,
    title: "Pola Desain & Library Standar",
    summary:
      "Pengembang tidak menemukan ulang roda: ada pola desain teruji seperti kontrol akses (Ownable), pausable, dan pull-over-push, serta library standar seperti OpenZeppelin yang sudah diaudit untuk dipakai ulang dengan aman.",
    durationMin: 14,
    tags: ["smart contract", "pola desain", "openzeppelin", "keamanan"],
    blocks: [
      {
        type: "paragraph",
        html: "Setelah memahami bahasa dan tooling, pertanyaan berikutnya adalah: bagaimana menulis kontrak yang aman dan rapi? Jawabannya bukan menulis semuanya dari nol, melainkan memakai <strong>pola desain</strong> yang sudah terbukti dan <strong>library standar</strong> yang sudah diaudit banyak orang.",
      },
      {
        type: "paragraph",
        html: "Beberapa pola yang paling sering dipakai: <strong>kontrol akses</strong> (mis. <em>Ownable</em>, membatasi fungsi penting hanya untuk pemilik), <strong>pausable</strong> (bisa menghentikan kontrak saat darurat), dan <strong>pull-over-push</strong> (pengguna menarik dananya sendiri alih-alih kontrak mengirim otomatis, agar lebih aman dari kegagalan dan reentrancy).",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga pola desain inti",
        html: "<strong>Ownable</strong>: hanya pemilik boleh memanggil fungsi sensitif. <strong>Pausable</strong>: ada tombol jeda darurat untuk menghentikan operasi saat ada masalah. <strong>Pull-over-push</strong>: pengguna menarik dananya sendiri, bukan kontrak yang mendorong kirim, sehingga lebih tahan terhadap kegagalan dan reentrancy.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Pakai library teruji",
        html: "<strong>OpenZeppelin</strong> adalah kumpulan kontrak standar (token ERC-20, ERC-721, Ownable, Pausable, dan lainnya) yang sudah diaudit dan dipakai ribuan proyek. Memakai kode teruji jauh lebih aman daripada menulis ulang sendiri dan berisiko mengulang bug lama.",
      },
      {
        type: "video",
        comp: "DaurHidupKontrakVideo",
        title: "Menyusun Kontrak dari Pola Teruji",
        caption: "Pola desain dan library standar menjadi fondasi kontrak yang aman dan rapi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum-icon-purple.svg?width=400",
        alt: "Logo Ethereum berwarna ungu",
        caption: "Library seperti OpenZeppelin menyediakan kontrak standar siap pakai untuk Ethereum.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Mainkan kontrak <strong>multisig</strong>: amati bagaimana sebuah transaksi baru dieksekusi setelah cukup banyak pemilik menyetujuinya. Ini adalah salah satu pola kontrol akses paling penting untuk dana bersama.",
      },
      { type: "widget", widget: "SimulatorMultisig" },
      {
        type: "case",
        title: "Studi Kasus: Membangun token dengan pola standar",
        html: "Sebuah tim ingin merilis token. Daripada menulis logika transfer dari nol, mereka memakai kontrak <strong>ERC-20</strong> dari <strong>OpenZeppelin</strong>, menambahkan <em>Ownable</em> agar hanya pemilik bisa mencetak token baru, dan <em>Pausable</em> sebagai rem darurat. Dengan kode yang sudah diaudit ribuan mata, mereka menghemat waktu sekaligus memangkas peluang bug fatal.",
      },
      {
        type: "case",
        title: "Sejarah: Bug multisig Parity, 2017",
        html: "Pada <strong>November 2017</strong>, sebuah bug pada pustaka kontrak dompet <strong>multisig Parity</strong> dipicu seorang pengguna yang lalu mengunci pustaka itu. Karena banyak dompet bergantung pada satu pustaka bersama, sekitar <strong>513 ribu ETH</strong> ikut terkunci permanen dan tak bisa diakses. Insiden ini menegaskan pentingnya pola desain yang hati-hati dan <strong>audit</strong> menyeluruh: kesalahan pada kode bersama bisa berakibat luas dan tak bisa dibatalkan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah dompet multisig membutuhkan persetujuan minimal 3 dari 5 pemilik agar transaksi dieksekusi. Jika baru 2 pemilik menyetujui, berapa persetujuan lagi yang dibutuhkan?",
        answer: 1,
        tolerance: 0,
        suffix: "persetujuan",
        solution:
          "Butuh 3, sudah ada 2, jadi kurang <strong>1 persetujuan</strong> lagi. Pola multisig mencegah satu orang bertindak sendirian atas dana bersama.",
        hint: "Kurangkan jumlah persetujuan yang sudah ada dari ambang minimal.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap praktik sebagai praktik baik atau praktik buruk.",
        buckets: ["Praktik baik", "Praktik buruk"],
        items: [
          { text: "Memakai library OpenZeppelin yang sudah diaudit", bucket: "Praktik baik" },
          { text: "Menulis ulang logika token dari nol tanpa audit", bucket: "Praktik buruk" },
          { text: "Membatasi fungsi cetak token hanya untuk pemilik (Ownable)", bucket: "Praktik baik" },
          { text: "Membiarkan siapa pun memanggil fungsi sensitif", bucket: "Praktik buruk" },
          { text: "Menyediakan tombol jeda darurat (Pausable)", bucket: "Praktik baik" },
          { text: "Menyalin kode acak dari internet tanpa diperiksa", bucket: "Praktik buruk" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Pakai pola desain teruji daripada menulis semuanya dari nol.",
          "Ownable membatasi fungsi sensitif, Pausable memberi rem darurat, pull-over-push lebih aman dari reentrancy.",
          "Library standar seperti OpenZeppelin sudah diaudit dan dipakai ribuan proyek.",
          "Multisig mensyaratkan beberapa persetujuan sehingga satu orang tak bisa bertindak sendiri atas dana bersama.",
          "Bug pustaka multisig Parity 2017 membekukan sekitar 513 ribu ETH, menegaskan pentingnya pola dan audit.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tujuan pola Ownable?",
            options: [
              "Membuat kontrak gratis",
              "Membatasi fungsi penting hanya untuk pemilik",
              "Menghapus kontrak otomatis",
              "Mempercepat compile",
            ],
            answer: 1,
            explain: "Ownable membatasi fungsi sensitif agar hanya bisa dipanggil pemilik.",
          },
          {
            q: "Apa keunggulan pola pull-over-push?",
            options: [
              "Membuat gas gratis",
              "Pengguna menarik dananya sendiri sehingga lebih aman dari kegagalan dan reentrancy",
              "Kontrak mengirim dana ke semua orang otomatis",
              "Menghapus kebutuhan storage",
            ],
            answer: 1,
            explain: "Dengan pull, pengguna menarik dananya sendiri, mengurangi risiko kegagalan dan reentrancy.",
          },
          {
            q: "Apa itu OpenZeppelin?",
            options: [
              "Sebuah bursa kripto",
              "Kumpulan kontrak standar yang sudah diaudit dan dipakai ulang",
              "Bahasa pemrograman baru",
              "Sebuah dompet perangkat keras",
            ],
            answer: 1,
            explain: "OpenZeppelin menyediakan kontrak standar teruji seperti ERC-20, Ownable, dan Pausable.",
          },
          {
            q: "Mengapa memakai library teruji lebih disarankan daripada menulis ulang sendiri?",
            options: [
              "Karena selalu gratis",
              "Karena kode sudah diaudit banyak orang sehingga lebih kecil peluang bug fatal",
              "Karena membuat gas nol",
              "Karena address jadi lebih pendek",
            ],
            answer: 1,
            explain: "Kode teruji yang diaudit ribuan mata memangkas peluang mengulang bug lama.",
          },
          {
            q: "Apa pelajaran utama dari bug multisig Parity 2017?",
            options: [
              "Library tidak pernah berguna",
              "Kesalahan pada kode bersama bisa membekukan dana banyak pengguna secara permanen",
              "Multisig membuat gas gratis",
              "Audit tidak diperlukan",
            ],
            answer: 1,
            explain: "Sekitar 513 ribu ETH terkunci permanen, menegaskan pentingnya pola hati-hati dan audit.",
          },
        ],
      },
    ],
  },
];
