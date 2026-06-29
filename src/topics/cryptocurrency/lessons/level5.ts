import type { Lesson } from "../../../types";

export const level5: Lesson[] = [
  // ============================================================
  {
    id: "account-evm-gas",
    levelId: "ethereum",
    order: 1,
    title: "Account Model, EVM & Gas",
    summary:
      "Ethereum mencatat saldo lewat akun, menjalankan program di komputer dunia bernama EVM, dan menagih biaya komputasi dalam bentuk gas.",
    durationMin: 14,
    tags: ["ethereum", "evm", "gas", "account-model"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Ethereum</strong> diluncurkan tahun <strong>2015</strong> oleh Vitalik Buterin dan rekan-rekannya, berdasarkan whitepaper tahun 2013. Berbeda dari Bitcoin yang memakai model <strong>UTXO</strong> (kumpulan keping sisa transaksi), Ethereum memakai <strong>account model</strong>: setiap akun punya saldo yang langsung bertambah atau berkurang, mirip rekening bank.",
      },
      {
        type: "paragraph",
        html: "Ada dua jenis akun. <strong>EOA</strong> (Externally Owned Account) dikendalikan oleh kunci pribadi manusia. <strong>Contract account</strong> dikendalikan oleh kode program. Keduanya punya saldo ETH dan bisa saling kirim nilai serta memanggil program.",
      },
      {
        type: "callout",
        tone: "key",
        title: "EVM, komputer dunia",
        html: "<strong>EVM</strong> (Ethereum Virtual Machine) adalah komputer virtual yang dijalankan serempak oleh semua node jaringan. Setiap transaksi mengubah <strong>state</strong> (keadaan) bersama. Karena semua node menghitung hal yang sama, hasilnya disepakati tanpa server pusat.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Gas, satuan biaya komputasi",
        html: "Setiap operasi di EVM punya ongkos yang diukur dalam <strong>gas</strong>. Harga gas dinyatakan dalam <strong>gwei</strong>, satuan kecil ETH (1 ETH = 1 miliar gwei). Transfer ETH biasa selalu butuh <strong>21.000 gas</strong>; operasi yang lebih rumit butuh gas lebih banyak.",
      },
      {
        type: "video",
        comp: "EVMSmartContractVideo",
        title: "EVM Menjalankan Kontrak",
        caption: "Transaksi membayar gas, EVM menjalankan kode, lalu state jaringan berubah.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum_logo_2014.svg?width=400",
        alt: "Logo Ethereum",
        caption: "Ethereum: platform smart contract dengan account model dan EVM sebagai komputer dunia.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Atur jumlah gas dan harga gas (gwei), lalu lihat berapa biaya total sebuah transaksi dalam ETH.",
      },
      { type: "widget", widget: "KalkulatorGasFee" },
      {
        type: "chart",
        variant: "bar",
        title: "Perkiraan Gas untuk Berbagai Operasi (ilustrasi edukatif)",
        unit: "gas unit",
        source: "ilustrasi berdasarkan biaya operasi umum di EVM",
        note: "Transfer ETH biasa paling murah (21.000 gas); berinteraksi dengan kontrak menelan gas jauh lebih banyak.",
        data: [
          { label: "Transfer ETH", value: 21000, color: "#627eea" },
          { label: "Transfer token ERC-20", value: 50000, color: "#8b9bf4" },
          { label: "Swap di DEX", value: 150000, color: "#a5b4fc" },
          { label: "Mint NFT", value: 200000, color: "#c4b5fd" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membaca biaya sebuah transfer",
        html: "Andi mengirim ETH ke temannya. Transaksinya butuh <strong>21.000 gas</strong> dan saat itu harga gas <strong>30 gwei</strong>. Biaya total = 21.000 x 30 = 630.000 gwei. Karena 1 ETH = 1 miliar gwei, biayanya = 630.000 / 1.000.000.000 = <strong>0,00063 ETH</strong>. Biaya inilah yang dibayar Andi ke jaringan, bukan ke temannya.",
      },
      {
        type: "case",
        title: "Sejarah: Ethereum lahir 2015 dengan EVM dan gas sejak awal",
        html: "Ketika Ethereum diluncurkan pada <strong>30 Juli 2015</strong>, konsep <strong>EVM</strong> dan <strong>gas</strong> sudah ada sejak hari pertama. Gagasannya berasal dari whitepaper <strong>Vitalik Buterin tahun 2013</strong> yang ingin membuat blockchain serbaguna, bukan sekadar uang. Mekanisme gas dirancang untuk mencegah program berjalan tanpa henti dan untuk membayar para node yang menjalankan komputasi. Sampai sekarang, transfer ETH biasa tetap menelan <strong>21.000 gas</strong>, angka yang sudah ditetapkan sejak awal.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah transfer ETH butuh 21.000 gas dengan harga gas 30 gwei. Berapa biaya total dalam ETH? (1 ETH = 1 miliar gwei)",
        answer: 0.00063,
        tolerance: 0.00001,
        suffix: "ETH",
        solution:
          "21.000 x 30 = 630.000 gwei. Lalu 630.000 / 1.000.000.000 = <strong>0,00063 ETH</strong>.",
        hint: "Kalikan gas dengan harga gas untuk dapat gwei, lalu bagi 1 miliar untuk jadi ETH.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan pernyataan berikut: ciri EOA atau ciri contract account?",
        buckets: ["EOA", "Contract account"],
        items: [
          { text: "Dikendalikan oleh kunci pribadi manusia", bucket: "EOA" },
          { text: "Dikendalikan oleh kode program di blockchain", bucket: "Contract account" },
          { text: "Dipakai orang untuk mengirim ETH dari dompetnya", bucket: "EOA" },
          { text: "Menjalankan logika otomatis saat dipanggil", bucket: "Contract account" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Ethereum diluncurkan 2015 oleh Vitalik Buterin dkk, memakai account model, bukan UTXO seperti Bitcoin.",
          "Ada dua akun: EOA (dikendalikan manusia) dan contract account (dikendalikan kode).",
          "EVM adalah komputer dunia yang dijalankan semua node dan menyepakati perubahan state.",
          "Gas adalah satuan biaya komputasi; harganya dalam gwei (1 ETH = 1 miliar gwei).",
          "Transfer ETH biasa selalu butuh 21.000 gas; operasi rumit butuh lebih banyak.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa perbedaan utama model akun Ethereum dengan Bitcoin?",
            options: [
              "Ethereum memakai UTXO, Bitcoin memakai account model",
              "Ethereum memakai account model dengan saldo, Bitcoin memakai UTXO",
              "Keduanya sama persis",
              "Ethereum tidak punya saldo",
            ],
            answer: 1,
            explain: "Ethereum memakai account model (saldo per akun), sedangkan Bitcoin memakai UTXO.",
          },
          {
            q: "Apa itu EVM?",
            options: [
              "Sebuah bursa kripto",
              "Komputer virtual yang dijalankan semua node dan mengubah state bersama",
              "Dompet perangkat keras",
              "Jenis token",
            ],
            answer: 1,
            explain: "EVM adalah Ethereum Virtual Machine, komputer dunia yang menyepakati perubahan state.",
          },
          {
            q: "Berapa gas untuk transfer ETH biasa?",
            options: ["1.000 gas", "21.000 gas", "1 juta gas", "Tergantung harga ETH"],
            answer: 1,
            explain: "Transfer ETH standar selalu menelan 21.000 gas.",
          },
          {
            q: "Berapa gwei dalam 1 ETH?",
            options: ["1.000 gwei", "1 juta gwei", "1 miliar gwei", "21.000 gwei"],
            answer: 2,
            explain: "1 ETH sama dengan 1 miliar (1.000.000.000) gwei.",
          },
          {
            q: "Jenis akun mana yang dikendalikan oleh kode, bukan manusia?",
            options: ["EOA", "Contract account", "Akun bank", "Tidak ada"],
            answer: 1,
            explain: "Contract account dijalankan oleh kode program, sedangkan EOA dikendalikan kunci pribadi manusia.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "smart-contract-dasar",
    levelId: "ethereum",
    order: 2,
    title: "Smart Contract",
    summary:
      "Program yang berjalan otomatis di blockchain sesuai aturan yang sudah ditulis, tanpa perlu perantara untuk menegakkannya.",
    durationMin: 13,
    tags: ["ethereum", "smart-contract", "evm"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Smart contract</strong> adalah program yang disimpan di blockchain dan berjalan <strong>otomatis</strong> ketika syaratnya terpenuhi. Begitu di-deploy, kodenya tidak bisa diubah diam-diam dan dijalankan sama persis oleh seluruh jaringan. Aturan main ditegakkan oleh kode, bukan oleh kepercayaan pada satu pihak.",
      },
      {
        type: "paragraph",
        html: "Analoginya seperti mesin penjual minuman: masukkan uang yang cukup, pilih produk, lalu mesin mengeluarkan barang otomatis tanpa kasir. Smart contract melakukan hal serupa untuk nilai dan data digital, dengan aturan yang transparan dan bisa diperiksa siapa pun.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Inti smart contract",
        html: "<strong>Otomatis</strong> (berjalan sendiri saat syarat terpenuhi), <strong>deterministik</strong> (input sama selalu menghasilkan output sama), dan <strong>tanpa perantara</strong> (tidak butuh pihak ketiga untuk menegakkan kesepakatan).",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Kode adalah hukum, juga risikonya",
        html: "Karena kontrak berjalan persis seperti yang ditulis, <strong>bug pada kode bisa berakibat fatal</strong> dan sulit diperbaiki setelah deploy. Audit kode sebelum meluncurkan dana besar adalah keharusan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Lihat contoh kontrak <strong>escrow</strong>: dana ditahan kontrak sampai syarat terpenuhi, lalu dilepas otomatis ke pihak yang berhak.",
      },
      { type: "widget", widget: "SimulatorEscrowKontrak" },
      {
        type: "video",
        comp: "EVMSmartContractVideo",
        title: "EVM Menjalankan Kontrak",
        caption: "Bagaimana sebuah panggilan ke smart contract membayar gas dan mengubah state.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum-icon-purple.svg?width=400",
        alt: "Ikon Ethereum berwarna ungu",
        caption: "Smart contract disimpan dan dijalankan di atas Ethereum, tanpa perlu server pusat.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Ragam Pemakaian Smart Contract (ilustrasi edukatif)",
        unit: "% jenis aktivitas",
        source: "ilustrasi edukatif, urutan sesuai pola pemakaian umum",
        note: "Keuangan terdesentralisasi (DeFi) dan token/NFT mendominasi aktivitas smart contract di praktiknya.",
        data: [
          { label: "DeFi (tukar, pinjam)", value: 45, color: "#627eea" },
          { label: "Token & NFT", value: 30, color: "#8b9bf4" },
          { label: "Escrow & tata kelola", value: 15, color: "#a5b4fc" },
          { label: "Lainnya", value: 10, color: "#c4b5fd" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Escrow pembayaran freelance",
        html: "Budi memesan desain logo seharga <strong>0,5 ETH</strong>. Dana ditaruh di smart contract escrow, bukan langsung ke desainer. Saat Budi menandai pekerjaan selesai dan menyetujui, kontrak otomatis melepas 0,5 ETH ke desainer. Jika sengketa, dana tetap aman terkunci di kontrak sampai syarat penyelesaian terpenuhi. Tidak ada satu pihak pun yang bisa kabur membawa dana.",
      },
      {
        type: "case",
        title: "Sejarah: Peristiwa The DAO 2016",
        html: "Pada tahun <strong>2016</strong>, sebuah smart contract investasi bernama The DAO mengumpulkan dana sangat besar, lalu seorang penyerang memanfaatkan <strong>bug pada kodenya</strong> untuk menyedot sekitar sepertiga dananya. Peristiwa ini memicu perdebatan sengit dan akhirnya membelah Ethereum menjadi dua rantai. Pelajarannya tegas: smart contract menjalankan kode apa adanya, jadi kesalahan kode adalah risiko nyata yang harus diaudit.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kontrak escrow menahan 0,5 ETH untuk satu proyek. Jika ada 4 proyek serupa berjalan, berapa total ETH yang terkunci di kontrak?",
        answer: 2,
        tolerance: 0,
        suffix: "ETH",
        solution: "0,5 ETH x 4 proyek = <strong>2 ETH</strong> total terkunci sampai tiap syarat terpenuhi.",
        hint: "Kalikan nilai per proyek dengan jumlah proyek.",
      },
      {
        type: "classifyExercise",
        prompt: "Mana yang cocok diotomatiskan dengan smart contract, dan mana yang lebih cocok ditangani manusia?",
        buckets: ["Cocok untuk smart contract", "Lebih cocok manusia"],
        items: [
          { text: "Melepas dana otomatis saat syarat terpenuhi", bucket: "Cocok untuk smart contract" },
          { text: "Membagi hadiah sesuai aturan tetap dan transparan", bucket: "Cocok untuk smart contract" },
          { text: "Menilai mutu karya seni secara subjektif", bucket: "Lebih cocok manusia" },
          { text: "Negosiasi perasaan dan empati dalam konflik keluarga", bucket: "Lebih cocok manusia" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Smart contract adalah program yang berjalan otomatis di blockchain sesuai aturan yang ditulis.",
          "Sifatnya otomatis, deterministik, dan tidak butuh perantara untuk menegakkan kesepakatan.",
          "Cocok untuk aturan yang jelas dan bisa diukur, bukan keputusan subjektif.",
          "Kode adalah hukum: bug bisa berakibat fatal, seperti peristiwa The DAO 2016.",
          "Escrow adalah contoh klasik: dana terkunci aman sampai syarat terpenuhi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu smart contract?",
            options: [
              "Dokumen hukum yang ditandatangani notaris",
              "Program di blockchain yang berjalan otomatis sesuai aturan",
              "Sebuah jenis koin",
              "Kontrak kerja karyawan bursa",
            ],
            answer: 1,
            explain: "Smart contract adalah program di blockchain yang otomatis menjalankan aturannya.",
          },
          {
            q: "Apa arti smart contract bersifat deterministik?",
            options: [
              "Hasilnya acak",
              "Input yang sama selalu menghasilkan output yang sama",
              "Hanya berjalan sekali",
              "Butuh izin pemerintah",
            ],
            answer: 1,
            explain: "Deterministik berarti hasil eksekusi konsisten untuk input yang sama.",
          },
          {
            q: "Mengapa bug pada smart contract berbahaya?",
            options: [
              "Kontrak berjalan persis seperti ditulis dan sulit diperbaiki setelah deploy",
              "Kontrak otomatis berhenti sendiri",
              "Bank akan menutupnya",
              "Tidak ada bahaya sama sekali",
            ],
            answer: 0,
            explain: "Karena kode dijalankan apa adanya, kesalahan kode bisa langsung dieksploitasi.",
          },
          {
            q: "Apa yang terjadi pada peristiwa The DAO 2016?",
            options: [
              "Ethereum diluncurkan",
              "Bug pada kontrak dieksploitasi sehingga banyak dana tersedot",
              "Bitcoin lahir",
              "Smart contract dilarang",
            ],
            answer: 1,
            explain: "Penyerang memanfaatkan bug The DAO untuk menyedot sebagian besar dananya.",
          },
          {
            q: "Tugas mana paling cocok untuk smart contract?",
            options: [
              "Menilai keindahan lukisan",
              "Melepas dana otomatis saat syarat objektif terpenuhi",
              "Menengahi pertengkaran keluarga",
              "Menebak suasana hati seseorang",
            ],
            answer: 1,
            explain: "Smart contract unggul untuk aturan jelas dan terukur, bukan penilaian subjektif.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "standar-token",
    levelId: "ethereum",
    order: 3,
    title: "Standar Token: ERC-20, ERC-721 & ERC-1155",
    summary:
      "Tiga standar token populer di Ethereum: ERC-20 untuk token seragam, ERC-721 untuk NFT unik, dan ERC-1155 untuk gabungan keduanya.",
    durationMin: 13,
    tags: ["ethereum", "token", "erc-20", "erc-721", "nft"],
    blocks: [
      {
        type: "paragraph",
        html: "Di atas Ethereum siapa pun bisa menerbitkan token sendiri. Agar dompet dan aplikasi bisa mengenali token apa pun secara seragam, dipakailah <strong>standar</strong>: aturan antarmuka yang disepakati bersama. Tiga yang paling populer adalah <strong>ERC-20</strong>, <strong>ERC-721</strong>, dan <strong>ERC-1155</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Fungible vs non-fungible",
        html: "<strong>Fungible</strong> berarti seragam dan bisa saling tukar 1:1, seperti uang: satu lembar Rp10.000 sama nilainya dengan lembar Rp10.000 lain. <strong>Non-fungible</strong> berarti unik dan tidak bisa ditukar setara, seperti tiket konser bernomor kursi tertentu.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga standar singkat",
        html: "<strong>ERC-20</strong>: token <strong>fungible</strong> (seragam), cocok untuk mata uang dan poin. <strong>ERC-721</strong>: token <strong>unik</strong> alias NFT, cocok untuk karya seni atau sertifikat. <strong>ERC-1155</strong>: <strong>multi-token</strong> yang bisa mengelola banyak jenis sekaligus, gabungan fungible dan non-fungible dalam satu kontrak.",
      },
      {
        type: "video",
        comp: "EVMSmartContractVideo",
        title: "EVM Menjalankan Kontrak Token",
        caption: "Token adalah smart contract; mentransfernya berarti memanggil kontrak dan mengubah state.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum_logo_2014.svg?width=400",
        alt: "Logo Ethereum",
        caption: "Standar ERC menjadikan token apa pun di Ethereum bisa dikenali seragam oleh dompet dan aplikasi.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perbandingan Karakter Tiga Standar Token",
        unit: "jumlah jenis token per kontrak (ilustrasi)",
        source: "ilustrasi edukatif berdasarkan rancangan tiap standar",
        note: "ERC-20 dan ERC-721 mengelola satu jenis token per kontrak; ERC-1155 dirancang untuk banyak jenis sekaligus.",
        data: [
          { label: "ERC-20", value: 1, color: "#627eea" },
          { label: "ERC-721", value: 1, color: "#8b9bf4" },
          { label: "ERC-1155", value: 100, color: "#a5b4fc" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Game memilih ERC-1155",
        html: "Sebuah game blockchain butuh dua hal: <strong>koin emas</strong> yang seragam (fungible) dan <strong>pedang legendaris</strong> yang unik (non-fungible). Dengan ERC-20 dan ERC-721 ia perlu dua kontrak terpisah. Dengan satu kontrak <strong>ERC-1155</strong>, game bisa mengelola ribuan koin emas sekaligus item unik dalam satu tempat, sehingga transfer massal jadi lebih hemat gas.",
      },
      {
        type: "case",
        title: "Sejarah: ERC-20 lahir 2015 dan ledakan ICO 2017",
        html: "Standar <strong>ERC-20</strong> diusulkan oleh Fabian Vogelsteller pada akhir <strong>2015</strong> dan menjadi resmi kemudian. Standar inilah yang memicu gelombang <strong>ICO</strong> (penggalangan dana lewat penjualan token) pada tahun <strong>2017</strong>: ribuan proyek menerbitkan token ERC-20 mereka. Banyak yang gagal, namun standar ini terbukti jadi fondasi penting bagi ekosistem token Ethereum.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah game menerbitkan 3 jenis koin fungible dan 2 jenis item unik. Berapa jenis token total yang dikelola dalam satu kontrak ERC-1155?",
        answer: 5,
        tolerance: 0,
        suffix: "jenis",
        solution: "3 koin fungible + 2 item unik = <strong>5 jenis token</strong>, semuanya dalam satu kontrak ERC-1155.",
        hint: "Jumlahkan jenis fungible dan non-fungible.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan standar token dengan contoh penggunaan yang paling tepat.",
        pairs: [
          { left: "ERC-20", right: "Stablecoin dan token poin yang seragam" },
          { left: "ERC-721", right: "Karya seni digital unik (NFT)" },
          { left: "ERC-1155", right: "Aset game: koin seragam dan item unik dalam satu kontrak" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan aset berikut: fungible atau non-fungible?",
        buckets: ["Fungible", "Non-fungible"],
        items: [
          { text: "Stablecoin senilai 1 dolar yang bisa ditukar 1:1", bucket: "Fungible" },
          { text: "Lukisan digital edisi tunggal", bucket: "Non-fungible" },
          { text: "Poin loyalitas yang seragam nilainya", bucket: "Fungible" },
          { text: "Sertifikat tanah digital untuk bidang tertentu", bucket: "Non-fungible" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Standar token adalah antarmuka seragam agar dompet dan aplikasi mengenali token apa pun.",
          "ERC-20 untuk token fungible (seragam) seperti mata uang dan poin.",
          "ERC-721 untuk token unik (NFT) seperti karya seni atau sertifikat.",
          "ERC-1155 adalah multi-token: mengelola banyak jenis fungible dan non-fungible dalam satu kontrak.",
          "ERC-20 lahir 2015 dan memicu gelombang ICO pada 2017.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa arti token bersifat fungible?",
            options: [
              "Unik dan tak tergantikan",
              "Seragam dan bisa ditukar 1:1",
              "Hanya bisa dipakai sekali",
              "Tidak punya nilai",
            ],
            answer: 1,
            explain: "Fungible berarti seragam dan saling tukar setara, seperti uang.",
          },
          {
            q: "Standar mana yang dipakai untuk NFT unik?",
            options: ["ERC-20", "ERC-721", "ERC-1155 saja", "Tidak ada"],
            answer: 1,
            explain: "ERC-721 dirancang untuk token unik yang dikenal sebagai NFT.",
          },
          {
            q: "Apa keunggulan ERC-1155?",
            options: [
              "Hanya bisa fungible",
              "Mengelola banyak jenis token, fungible dan non-fungible, dalam satu kontrak",
              "Tidak butuh gas",
              "Hanya untuk Bitcoin",
            ],
            answer: 1,
            explain: "ERC-1155 adalah standar multi-token yang menggabungkan fungible dan non-fungible.",
          },
          {
            q: "Untuk menerbitkan stablecoin seragam, standar mana paling cocok?",
            options: ["ERC-20", "ERC-721", "Tidak ada standar", "ERC-1155 wajib"],
            answer: 0,
            explain: "Stablecoin seragam paling cocok memakai ERC-20 yang fungible.",
          },
          {
            q: "Peristiwa apa yang dipicu oleh standar ERC-20 pada 2017?",
            options: [
              "Peluncuran Bitcoin",
              "Gelombang ICO, penggalangan dana lewat penjualan token",
              "The Merge",
              "Bitcoin Pizza Day",
            ],
            answer: 1,
            explain: "ERC-20 memudahkan penerbitan token, memicu ledakan ICO di tahun 2017.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "layer2-rollup",
    levelId: "ethereum",
    order: 4,
    title: "Layer 2 & Rollup",
    summary:
      "Saat Ethereum ramai, gas jadi mahal. Layer 2 dan rollup memproses transaksi di luar rantai utama lalu menulis ringkasannya ke L1 agar tetap aman dan murah.",
    durationMin: 14,
    tags: ["ethereum", "layer2", "rollup", "skalabilitas"],
    blocks: [
      {
        type: "paragraph",
        html: "Ethereum aman dan terdesentralisasi, tetapi kapasitasnya terbatas. Ketika banyak orang bertransaksi serentak, mereka bersaing memperebutkan ruang blok, sehingga <strong>harga gas melonjak</strong>. Biaya transaksi yang biasanya beberapa sen bisa membengkak menjadi puluhan dolar. Inilah masalah <strong>skalabilitas</strong>.",
      },
      {
        type: "paragraph",
        html: "Solusinya adalah <strong>Layer 2</strong> (L2): jaringan terpisah yang dibangun di atas Ethereum (L1). L2 memproses transaksi <strong>di luar rantai utama</strong> (off-chain), lalu menulis ringkasan padat ke L1. Hasilnya: transaksi tetap mewarisi keamanan Ethereum, tapi jauh lebih cepat dan murah.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Apa itu rollup",
        html: "<strong>Rollup</strong> menggulung (rolls up) banyak transaksi menjadi satu paket, memprosesnya di L2, lalu mengirim ringkasan ke L1. Karena ratusan transaksi berbagi satu penulisan ke L1, biaya gas per transaksi terbagi dan jadi murah.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua jenis rollup",
        html: "<strong>Optimistic rollup</strong> menganggap transaksi benar secara default, dengan masa sanggah untuk menantang yang curang. <strong>ZK-rollup</strong> memakai bukti kriptografi (zero-knowledge proof) yang membuktikan transaksi benar tanpa perlu masa tunggu panjang.",
      },
      {
        type: "video",
        comp: "RollupVideo",
        title: "Cara Kerja Rollup",
        caption: "Banyak transaksi digulung di L2 menjadi satu ringkasan padat yang ditulis ke L1.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum_logo_2014.svg?width=400",
        alt: "Logo Ethereum",
        caption: "Layer 2 dibangun di atas Ethereum (L1) dan mewarisi keamanannya sambil menekan biaya.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Atur jumlah gas dan harga gas untuk merasakan betapa mahalnya transaksi saat gwei melonjak, lalu bayangkan ratusan transaksi berbagi satu penulisan di L2.",
      },
      { type: "widget", widget: "KalkulatorGasFee" },
      {
        type: "chart",
        variant: "bar",
        title: "Perbandingan Biaya Transaksi L1 vs L2 (ilustrasi edukatif)",
        unit: "dolar AS per transaksi",
        source: "ilustrasi edukatif berdasarkan rentang biaya yang umum diamati",
        note: "Dengan menggulung banyak transaksi, rollup memangkas biaya per transaksi jauh di bawah L1 langsung.",
        data: [
          { label: "Ethereum L1 (ramai)", value: 25, color: "#ef4444" },
          { label: "Optimistic rollup", value: 0.5, color: "#627eea" },
          { label: "ZK-rollup", value: 0.3, color: "#22c55e" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memindahkan transfer kecil ke L2",
        html: "Sari sering mengirim token bernilai kecil. Di L1 saat ramai, satu transfer bisa kena biaya gas sekitar <strong>15 dolar AS</strong>, lebih mahal dari nilai yang dikirim. Setelah memakai sebuah <strong>rollup</strong> di L2, biayanya turun menjadi sekitar <strong>0,3 dolar AS</strong> per transfer. Untuk 50 transfer dalam sebulan, ia menghemat sangat banyak, dengan keamanan yang tetap bersandar pada Ethereum.",
      },
      {
        type: "case",
        title: "Sejarah: CryptoKitties 2017 dan boom DeFi 2020 yang mendorong L2",
        html: "Pada akhir <strong>2017</strong>, game NFT <strong>CryptoKitties</strong> begitu populer sampai membuat jaringan Ethereum tersendat dan biaya gas melonjak. Lalu pada <strong>2020</strong>, ledakan <strong>DeFi</strong> (keuangan terdesentralisasi) kembali memenuhi jaringan, dan biaya gas berkali-kali menembus puluhan dolar per transaksi. Tekanan inilah yang mempercepat pengembangan dan adopsi solusi <strong>Layer 2</strong> serta rollup. Sebagai catatan, peralihan Ethereum ke <strong>Proof of Stake</strong> lewat The Merge baru terjadi pada <strong>September 2022</strong>, dan itu menambah ruang fokus pada penskalaan via L2.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah transfer berbiaya 15 dolar AS di L1 dan 0,3 dolar AS di L2. Berapa dolar AS yang dihemat per transfer dengan pindah ke L2?",
        answer: 14.7,
        tolerance: 0.05,
        prefix: "$",
        solution: "15 - 0,3 = <strong>14,7 dolar AS</strong> dihemat per transfer dengan memakai L2.",
        hint: "Kurangkan biaya L2 dari biaya L1.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan pernyataan: ciri optimistic rollup atau ZK-rollup?",
        buckets: ["Optimistic rollup", "ZK-rollup"],
        items: [
          { text: "Menganggap transaksi benar secara default", bucket: "Optimistic rollup" },
          { text: "Punya masa sanggah untuk menantang transaksi curang", bucket: "Optimistic rollup" },
          { text: "Memakai bukti kriptografi zero-knowledge", bucket: "ZK-rollup" },
          { text: "Membuktikan kebenaran transaksi tanpa masa tunggu panjang", bucket: "ZK-rollup" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Saat Ethereum ramai, persaingan ruang blok membuat harga gas melonjak.",
          "Layer 2 adalah jaringan di atas Ethereum yang memproses transaksi off-chain.",
          "Rollup menggulung banyak transaksi jadi satu ringkasan yang ditulis ke L1, sehingga murah.",
          "Optimistic rollup memakai masa sanggah; ZK-rollup memakai bukti kriptografi.",
          "Lonjakan gas saat CryptoKitties 2017 dan boom DeFi 2020 mendorong adopsi L2.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa harga gas melonjak saat jaringan ramai?",
            options: [
              "Karena ETH dicetak lebih banyak",
              "Karena banyak transaksi bersaing memperebutkan ruang blok terbatas",
              "Karena bank menaikkan biaya",
              "Karena gas tidak ada batasnya",
            ],
            answer: 1,
            explain: "Ruang blok terbatas; saat permintaan tinggi, biaya gas naik karena persaingan.",
          },
          {
            q: "Apa itu Layer 2?",
            options: [
              "Versi kedua Bitcoin",
              "Jaringan di atas Ethereum yang memproses transaksi off-chain lalu menulis ringkasan ke L1",
              "Sebuah bursa kripto",
              "Jenis token",
            ],
            answer: 1,
            explain: "L2 memproses transaksi di luar rantai utama dan menyandarkan keamanan pada L1.",
          },
          {
            q: "Bagaimana rollup membuat biaya per transaksi murah?",
            options: [
              "Menghapus biaya gas sepenuhnya",
              "Menggulung banyak transaksi jadi satu ringkasan yang berbagi penulisan ke L1",
              "Memindahkan dana ke bank",
              "Menambah pasokan ETH",
            ],
            answer: 1,
            explain: "Banyak transaksi berbagi satu penulisan ke L1, sehingga biaya terbagi dan murah.",
          },
          {
            q: "Apa ciri ZK-rollup?",
            options: [
              "Menganggap semua transaksi salah",
              "Memakai bukti kriptografi zero-knowledge untuk membuktikan transaksi benar",
              "Tidak menulis apa pun ke L1",
              "Butuh masa sanggah berhari-hari selalu",
            ],
            answer: 1,
            explain: "ZK-rollup memakai zero-knowledge proof untuk membuktikan kebenaran tanpa masa tunggu panjang.",
          },
          {
            q: "Peristiwa apa yang ikut mendorong kebutuhan Layer 2?",
            options: [
              "Bitcoin Pizza Day 2010",
              "Lonjakan gas saat CryptoKitties 2017 dan boom DeFi 2020",
              "Peluncuran whitepaper Bitcoin 2008",
              "Tidak ada peristiwa terkait",
            ],
            answer: 1,
            explain: "Kemacetan dan gas mahal saat CryptoKitties 2017 dan boom DeFi 2020 mempercepat adopsi L2.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "sejarah-ethereum",
    levelId: "ethereum",
    order: 5,
    title: "Sejarah Ethereum & The Merge",
    summary:
      "Dari whitepaper Vitalik Buterin sampai peralihan ke Proof of Stake: bagaimana Ethereum lahir, diuji oleh The DAO, lalu berubah konsensus lewat The Merge.",
    durationMin: 14,
    tags: ["ethereum", "sejarah", "the-merge", "proof-of-stake"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Ethereum</strong> bermula dari sebuah gagasan: bagaimana jika blockchain tidak hanya mencatat uang, tetapi bisa menjalankan <strong>program apa pun</strong>? Gagasan ini ditulis <strong>Vitalik Buterin</strong> dalam whitepaper pada tahun <strong>2013</strong>, saat ia masih sangat muda. Tujuannya membuat sebuah komputer dunia yang bisa diprogram siapa saja.",
      },
      {
        type: "paragraph",
        html: "Dana pengembangan dikumpulkan lewat <strong>penjualan token (ICO) tahun 2014</strong>. Jaringan utama akhirnya diluncurkan pada <strong>30 Juli 2015</strong>. Sejak itu Ethereum tumbuh menjadi fondasi bagi ribuan aplikasi: token, NFT, dan keuangan terdesentralisasi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tonggak penting",
        html: "<strong>2013</strong> whitepaper Vitalik Buterin. <strong>2014</strong> ICO penggalangan dana. <strong>2015</strong> peluncuran jaringan utama. <strong>2016</strong> peristiwa The DAO. <strong>September 2022</strong> The Merge: peralihan ke Proof of Stake.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa itu The Merge",
        html: "<strong>The Merge</strong> adalah peralihan mekanisme konsensus Ethereum dari <strong>Proof of Work</strong> (menambang dengan daya komputasi) ke <strong>Proof of Stake</strong> (mengamankan jaringan dengan menaruh jaminan ETH). Terjadi pada <strong>September 2022</strong> dan memangkas konsumsi energi jaringan sekitar <strong>99,9%</strong>.",
      },
      {
        type: "video",
        comp: "EVMSmartContractVideo",
        title: "Ethereum Sebagai Komputer Dunia",
        caption: "Ide inti yang dituliskan Vitalik Buterin: blockchain yang bisa menjalankan program, bukan sekadar uang.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Vitalik_Buterin_TechCrunch_London_2015_(cropped).jpg?width=400",
        alt: "Vitalik Buterin, pendiri Ethereum",
        caption: "Vitalik Buterin, yang menuliskan whitepaper Ethereum pada 2013.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Dampak The Merge terhadap Konsumsi Energi Ethereum",
        unit: "indeks konsumsi energi (sebelum = 100)",
        source: "ilustrasi edukatif berdasarkan klaim pengurangan energi sekitar 99,9% setelah The Merge",
        note: "Peralihan ke Proof of Stake memangkas konsumsi energi jaringan sekitar 99,9%, dari 100 menjadi sekitar 0,1.",
        data: [
          { label: "Sebelum (Proof of Work)", value: 100, color: "#ef4444" },
          { label: "Sesudah (Proof of Stake)", value: 0.1, color: "#22c55e" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membaca pengurangan energi The Merge",
        html: "Misalkan sebelum The Merge jaringan memakai energi setara <strong>100 satuan</strong>. Pengurangan sekitar <strong>99,9%</strong> berarti pemakaian tinggal 0,1% x 100 = <strong>0,1 satuan</strong>. Jadi konsumsi energi turun dari 100 menjadi sekitar 0,1, atau sekitar <strong>seperseribu</strong> dari sebelumnya. Inilah salah satu alasan The Merge disebut perubahan besar bagi keberlanjutan Ethereum.",
      },
      {
        type: "case",
        title: "Sejarah: Dari whitepaper 2013 sampai The Merge 2022",
        html: "Perjalanan Ethereum: <strong>2013</strong> Vitalik Buterin menulis whitepaper. <strong>2014</strong> ICO mengumpulkan dana pengembangan. <strong>30 Juli 2015</strong> jaringan utama diluncurkan. <strong>2016</strong> peristiwa <strong>The DAO</strong>, ketika bug pada smart contract dieksploitasi dan menyedot sekitar sepertiga dananya, hingga memicu perpecahan rantai. Bertahun kemudian, pada <strong>September 2022</strong>, Ethereum menjalankan <strong>The Merge</strong>, beralih dari Proof of Work ke Proof of Stake dan memangkas konsumsi energi sekitar <strong>99,9%</strong>. Semua tahun ini adalah fakta historis penting bagi ekosistem Ethereum.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebelum The Merge konsumsi energi setara 100 satuan. Setelah pengurangan 99,9%, berapa satuan energi yang tersisa?",
        answer: 0.1,
        tolerance: 0.01,
        suffix: "satuan",
        solution: "Sisa = 100 x (100% - 99,9%) = 100 x 0,1% = 100 x 0,001 = <strong>0,1 satuan</strong>.",
        hint: "Pengurangan 99,9% menyisakan 0,1% dari nilai semula.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan tahun dengan peristiwa penting dalam sejarah Ethereum.",
        pairs: [
          { left: "2013", right: "Vitalik Buterin menulis whitepaper Ethereum" },
          { left: "2015", right: "Jaringan utama Ethereum diluncurkan" },
          { left: "2016", right: "Peristiwa The DAO dieksploitasi lewat bug" },
          { left: "2022", right: "The Merge: peralihan ke Proof of Stake" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan ciri berikut: Proof of Work (sebelum) atau Proof of Stake (sesudah The Merge)?",
        buckets: ["Proof of Work", "Proof of Stake"],
        items: [
          { text: "Mengamankan jaringan dengan daya komputasi (menambang)", bucket: "Proof of Work" },
          { text: "Mengamankan jaringan dengan menaruh jaminan ETH", bucket: "Proof of Stake" },
          { text: "Konsumsi energi sangat tinggi", bucket: "Proof of Work" },
          { text: "Konsumsi energi turun sekitar 99,9%", bucket: "Proof of Stake" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Whitepaper Ethereum ditulis Vitalik Buterin pada 2013, dengan ide blockchain yang bisa diprogram.",
          "Dana dikumpulkan lewat ICO 2014, lalu jaringan utama diluncurkan 30 Juli 2015.",
          "Peristiwa The DAO 2016 menunjukkan risiko bug pada smart contract.",
          "The Merge pada September 2022 mengubah konsensus dari Proof of Work ke Proof of Stake.",
          "The Merge memangkas konsumsi energi jaringan sekitar 99,9%.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Siapa yang menulis whitepaper Ethereum dan tahun berapa?",
            options: [
              "Satoshi Nakamoto, 2008",
              "Vitalik Buterin, 2013",
              "Fabian Vogelsteller, 2015",
              "Tidak diketahui",
            ],
            answer: 1,
            explain: "Vitalik Buterin menuliskan whitepaper Ethereum pada tahun 2013.",
          },
          {
            q: "Kapan jaringan utama Ethereum diluncurkan?",
            options: ["2008", "2013", "2015", "2022"],
            answer: 2,
            explain: "Jaringan utama Ethereum diluncurkan pada 30 Juli 2015.",
          },
          {
            q: "Apa itu The Merge?",
            options: [
              "Peluncuran Bitcoin",
              "Peralihan Ethereum dari Proof of Work ke Proof of Stake",
              "Penggabungan dua bursa kripto",
              "Sebuah token baru",
            ],
            answer: 1,
            explain: "The Merge adalah peralihan konsensus Ethereum ke Proof of Stake pada September 2022.",
          },
          {
            q: "Kira-kira berapa pengurangan konsumsi energi setelah The Merge?",
            options: ["Sekitar 10%", "Sekitar 50%", "Sekitar 99,9%", "Tidak berubah"],
            answer: 2,
            explain: "The Merge memangkas konsumsi energi jaringan sekitar 99,9%.",
          },
          {
            q: "Apa yang terjadi pada peristiwa The DAO 2016?",
            options: [
              "Ethereum diluncurkan",
              "Bug pada smart contract dieksploitasi sehingga banyak dana tersedot",
              "Ethereum beralih ke Proof of Stake",
              "ICO pertama dilakukan",
            ],
            answer: 1,
            explain: "Pada 2016, bug The DAO dieksploitasi dan menyedot sekitar sepertiga dananya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gas-eip1559",
    levelId: "ethereum",
    order: 6,
    title: "Gas, Fee & EIP-1559",
    summary:
      "Bagaimana biaya transaksi Ethereum dihitung: base fee yang dibakar, priority fee untuk penambang/validator, dan mengapa EIP-1559 mengubah pasar gas.",
    durationMin: 14,
    tags: ["ethereum", "gas", "fee", "eip-1559"],
    blocks: [
      {
        type: "paragraph",
        html: "Setiap transaksi Ethereum membayar <strong>fee</strong> yang besarnya tergantung dua hal: berapa banyak <strong>gas</strong> yang dipakai, dan berapa <strong>harga per gas</strong> (dalam gwei). Sebelum tahun 2021, harga gas ditentukan lewat lelang sederhana: siapa berani bayar tinggi, transaksinya didahulukan. Sistem ini sering membuat fee melonjak liar dan sulit ditebak.",
      },
      {
        type: "paragraph",
        html: "Sejak pembaruan <strong>EIP-1559</strong>, fee dipecah menjadi dua bagian: <strong>base fee</strong> dan <strong>priority fee</strong> (tip). Base fee ditentukan otomatis oleh jaringan sesuai keramaian, lalu <strong>dibakar</strong> (dihapus dari peredaran). Priority fee adalah tip tambahan agar transaksi didahulukan, dan diberikan ke validator.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus fee setelah EIP-1559",
        html: "<strong>Total fee = gas dipakai x (base fee + priority fee)</strong>. Base fee dibakar sehingga mengurangi pasokan ETH; priority fee menjadi imbalan validator yang memasukkan transaksimu ke blok.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa base fee dibakar",
        html: "Dengan <strong>membakar</strong> base fee, sebagian ETH lenyap dari peredaran setiap transaksi. Saat jaringan sangat ramai, ETH yang dibakar bisa melebihi ETH baru yang diterbitkan, sehingga pasokan ETH justru bisa berkurang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Atur jumlah gas dan harga gas (gwei), lalu lihat bagaimana total fee dalam ETH berubah saat jaringan ramai atau sepi.",
      },
      { type: "widget", widget: "KalkulatorGasFee" },
      {
        type: "video",
        comp: "EVMSmartContractVideo",
        title: "Transaksi Membayar Gas",
        caption: "Setiap panggilan ke EVM membayar gas; setelah EIP-1559 sebagian fee itu dibakar.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum-icon-purple.svg?width=400",
        alt: "Ikon Ethereum berwarna ungu",
        caption: "EIP-1559 mengubah cara Ethereum menentukan dan membakar biaya transaksi.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Komposisi Fee Sebuah Transaksi (ilustrasi edukatif)",
        unit: "gwei per gas",
        source: "ilustrasi edukatif untuk menjelaskan pembagian base fee dan priority fee",
        note: "Total harga per gas adalah base fee (dibakar) ditambah priority fee (tip ke validator).",
        data: [
          { label: "Base fee (dibakar)", value: 25, color: "#ef4444" },
          { label: "Priority fee (tip)", value: 2, color: "#627eea" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menghitung total fee setelah EIP-1559",
        html: "Sebuah transfer ETH memakai <strong>21.000 gas</strong>. Saat itu base fee <strong>25 gwei</strong> dan priority fee (tip) <strong>2 gwei</strong>, sehingga harga total per gas = 25 + 2 = <strong>27 gwei</strong>. Total fee = 21.000 x 27 = 567.000 gwei. Karena 1 ETH = 1 miliar gwei, fee = 567.000 / 1.000.000.000 = <strong>0,000567 ETH</strong>. Dari jumlah itu, bagian base fee (21.000 x 25 = 525.000 gwei) <strong>dibakar</strong>, sisanya jadi tip validator.",
      },
      {
        type: "case",
        title: "Sejarah: EIP-1559 aktif lewat London Upgrade Agustus 2021",
        html: "Pembaruan <strong>EIP-1559</strong> diaktifkan lewat <strong>London Upgrade</strong> pada <strong>Agustus 2021</strong>. Sejak saat itu Ethereum mulai <strong>membakar base fee</strong> di setiap transaksi. Perubahan ini membuat estimasi fee lebih mudah ditebak dibanding sistem lelang lama, dan memperkenalkan mekanisme deflasi: pada periode jaringan sangat ramai, ETH yang dibakar bisa melampaui ETH yang baru diterbitkan. Tanggal dan nama upgrade ini adalah fakta historis.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah transfer memakai 21.000 gas dengan base fee 25 gwei dan priority fee 2 gwei. Berapa total fee dalam ETH? (1 ETH = 1 miliar gwei)",
        answer: 0.000567,
        tolerance: 0.000005,
        suffix: "ETH",
        solution:
          "Harga per gas = 25 + 2 = 27 gwei. Total = 21.000 x 27 = 567.000 gwei. Lalu 567.000 / 1.000.000.000 = <strong>0,000567 ETH</strong>.",
        hint: "Jumlahkan base fee dan priority fee dulu, kalikan gas, lalu bagi 1 miliar.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari transaksi di atas, berapa banyak gwei base fee yang dibakar? (gas 21.000, base fee 25 gwei)",
        answer: 525000,
        tolerance: 0,
        suffix: "gwei",
        solution: "Base fee dibakar = 21.000 x 25 = <strong>525.000 gwei</strong>. Priority fee tidak dibakar, melainkan jadi tip validator.",
        hint: "Kalikan gas dengan base fee saja (tanpa priority fee).",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan pernyataan: tentang base fee atau priority fee?",
        buckets: ["Base fee", "Priority fee"],
        items: [
          { text: "Ditentukan otomatis oleh jaringan sesuai keramaian", bucket: "Base fee" },
          { text: "Dibakar sehingga mengurangi pasokan ETH", bucket: "Base fee" },
          { text: "Tip tambahan agar transaksi didahulukan", bucket: "Priority fee" },
          { text: "Diberikan sebagai imbalan ke validator", bucket: "Priority fee" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Total fee = gas dipakai x (base fee + priority fee).",
          "Base fee ditentukan otomatis oleh jaringan dan dibakar dari peredaran.",
          "Priority fee adalah tip ke validator agar transaksi didahulukan.",
          "EIP-1559 aktif lewat London Upgrade pada Agustus 2021 dan mulai membakar base fee.",
          "Pembakaran base fee bisa membuat pasokan ETH berkurang saat jaringan ramai.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Setelah EIP-1559, fee transaksi dipecah menjadi apa?",
            options: [
              "Hanya satu harga tetap",
              "Base fee dan priority fee",
              "Pajak dan bea masuk",
              "Biaya bank dan biaya kartu",
            ],
            answer: 1,
            explain: "EIP-1559 memecah fee menjadi base fee dan priority fee (tip).",
          },
          {
            q: "Apa yang terjadi pada base fee?",
            options: [
              "Diberikan ke pengirim",
              "Dibakar sehingga mengurangi pasokan ETH",
              "Disimpan di bank",
              "Dikembalikan setelah sebulan",
            ],
            answer: 1,
            explain: "Base fee dibakar (dihapus dari peredaran), bukan diberikan ke siapa pun.",
          },
          {
            q: "Untuk apa priority fee?",
            options: [
              "Tip ke validator agar transaksi didahulukan",
              "Membayar pajak negara",
              "Dibakar sepenuhnya",
              "Membeli ETH baru",
            ],
            answer: 0,
            explain: "Priority fee adalah tip tambahan yang menjadi imbalan validator.",
          },
          {
            q: "Kapan EIP-1559 mulai aktif?",
            options: [
              "Saat peluncuran Ethereum 2015",
              "London Upgrade, Agustus 2021",
              "The Merge, September 2022",
              "Belum aktif",
            ],
            answer: 1,
            explain: "EIP-1559 aktif lewat London Upgrade pada Agustus 2021.",
          },
          {
            q: "Sebuah transfer memakai 10.000 gas dengan harga total 30 gwei per gas. Berapa total fee dalam gwei?",
            options: ["300.000 gwei", "30.000 gwei", "3.000 gwei", "10.000 gwei"],
            answer: 0,
            explain: "Total = 10.000 x 30 = 300.000 gwei.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "dapp-ekosistem",
    levelId: "ethereum",
    order: 7,
    title: "Aplikasi Terdesentralisasi (dApp)",
    summary:
      "dApp menggabungkan front-end biasa, smart contract sebagai otak, dan dompet sebagai identitas. Dari DeFi sampai NFT dan game, inilah wujud nyata Ethereum.",
    durationMin: 14,
    tags: ["ethereum", "dapp", "defi", "nft"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>dApp</strong> (decentralized application) adalah aplikasi yang otak logikanya berjalan di blockchain, bukan di server satu perusahaan. Dari sisi pengguna ia terlihat seperti aplikasi web biasa, tetapi aturan dan datanya disimpan di smart contract yang transparan dan tidak bisa diubah sepihak.",
      },
      {
        type: "paragraph",
        html: "Sebuah dApp khas punya tiga bagian: <strong>front-end</strong> (tampilan yang dilihat pengguna), <strong>smart contract</strong> (logika dan aturan di blockchain), dan <strong>dompet</strong> (identitas serta cara pengguna menandatangani transaksi). Tidak ada nama pengguna dan kata sandi; dompetlah yang menjadi identitas.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga lapis sebuah dApp",
        html: "<strong>Front-end</strong>: antarmuka biasa (web atau aplikasi). <strong>Smart contract</strong>: otak yang menyimpan aturan dan dana di blockchain. <strong>Dompet</strong>: identitas pengguna sekaligus alat menandatangani transaksi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Ragam dApp",
        html: "<strong>DeFi</strong> (keuangan terdesentralisasi): tukar, pinjam, dan simpan aset tanpa bank. <strong>NFT</strong>: kepemilikan karya digital unik. <strong>Game</strong>: aset dalam game yang benar-benar dimiliki pemain. Semua berjalan di atas smart contract.",
      },
      {
        type: "video",
        comp: "AMMVideo",
        title: "Contoh dApp: Bursa Terdesentralisasi",
        caption: "Bursa otomatis (AMM) seperti Uniswap adalah salah satu dApp DeFi paling populer.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Uniswap_Logo.svg?width=400",
        alt: "Logo Uniswap",
        caption: "Uniswap, bursa terdesentralisasi (DEX), adalah contoh dApp DeFi yang banyak dipakai.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Ragam Kategori dApp (ilustrasi edukatif)",
        unit: "% pangsa aktivitas",
        source: "ilustrasi edukatif berdasarkan pola pemakaian umum di ekosistem Ethereum",
        note: "DeFi mendominasi aktivitas dApp, diikuti NFT, lalu game dan kategori lain.",
        data: [
          { label: "DeFi", value: 50, color: "#627eea" },
          { label: "NFT", value: 25, color: "#8b9bf4" },
          { label: "Game", value: 15, color: "#a5b4fc" },
          { label: "Lainnya", value: 10, color: "#c4b5fd" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menukar token lewat dApp DEX",
        html: "Rina ingin menukar <strong>100 USDT</strong> menjadi ETH. Ia membuka dApp bursa terdesentralisasi, menghubungkan <strong>dompet</strong>-nya (tanpa daftar akun), lalu menekan tukar. Front-end mengirim perintah ke <strong>smart contract</strong> bursa, ia menandatangani transaksi dan membayar gas, dan ETH langsung masuk ke dompetnya. Tidak ada perusahaan yang menyimpan dananya di tengah; semua diatur oleh kontrak.",
      },
      {
        type: "case",
        title: "Sejarah: DeFi Summer 2020 dan lonjakan gas",
        html: "Pada pertengahan <strong>2020</strong>, terjadi ledakan dApp keuangan terdesentralisasi yang dikenal sebagai <strong>DeFi Summer</strong>. Banyak protokol baru menawarkan imbal hasil dari menyediakan likuiditas (yield farming), sehingga jutaan transaksi membanjiri Ethereum. Akibatnya <strong>harga gas melonjak tajam</strong>, kadang menembus puluhan dolar per transaksi. Lonjakan ini menegaskan kebutuhan akan solusi penskalaan seperti Layer 2. Peristiwa DeFi Summer 2020 adalah momen historis nyata bagi ekosistem dApp.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah dApp memproses 3 jenis aksi: tukar (150.000 gas), pinjam (200.000 gas), dan klaim hadiah (50.000 gas). Berapa total gas untuk menjalankan ketiganya sekali?",
        answer: 400000,
        tolerance: 0,
        suffix: "gas",
        solution: "150.000 + 200.000 + 50.000 = <strong>400.000 gas</strong> total untuk ketiga aksi.",
        hint: "Jumlahkan gas dari ketiga aksi.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap bagian ini ke lapisan dApp yang tepat.",
        buckets: ["Front-end", "Smart contract", "Dompet"],
        items: [
          { text: "Tampilan tombol tukar yang dilihat pengguna", bucket: "Front-end" },
          { text: "Logika yang menahan dan melepas dana di blockchain", bucket: "Smart contract" },
          { text: "Alat menandatangani transaksi dan identitas pengguna", bucket: "Dompet" },
          { text: "Aturan tukar token yang transparan dan tak bisa diubah sepihak", bucket: "Smart contract" },
          { text: "Halaman web yang menampilkan saldo dan harga", bucket: "Front-end" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan kategori dApp dengan contoh nyatanya.",
        pairs: [
          { left: "DeFi", right: "Menukar dan meminjam aset tanpa bank" },
          { left: "NFT", right: "Memiliki karya seni digital unik" },
          { left: "Game", right: "Memiliki aset dalam game yang bisa diperjualbelikan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "dApp adalah aplikasi yang otak logikanya berjalan di smart contract, bukan server satu perusahaan.",
          "Tiga lapisnya: front-end (tampilan), smart contract (otak), dan dompet (identitas).",
          "Dompet menggantikan nama pengguna dan kata sandi sebagai identitas.",
          "Kategori populer: DeFi, NFT, dan game.",
          "DeFi Summer 2020 meledakkan jumlah dApp dan membuat harga gas melonjak.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang membedakan dApp dari aplikasi biasa?",
            options: [
              "Tampilannya selalu jelek",
              "Logikanya berjalan di smart contract, bukan server satu perusahaan",
              "Tidak butuh internet",
              "Hanya bisa dipakai pembuatnya",
            ],
            answer: 1,
            explain: "dApp menjalankan logikanya di smart contract di blockchain, bukan server terpusat.",
          },
          {
            q: "Apa tiga lapisan utama sebuah dApp?",
            options: [
              "CPU, RAM, dan disk",
              "Front-end, smart contract, dan dompet",
              "Bank, notaris, dan pengacara",
              "Penambang, validator, dan node",
            ],
            answer: 1,
            explain: "Sebuah dApp terdiri dari front-end, smart contract, dan dompet.",
          },
          {
            q: "Apa peran dompet dalam dApp?",
            options: [
              "Menyimpan halaman web",
              "Menjadi identitas pengguna dan alat menandatangani transaksi",
              "Menjalankan logika kontrak",
              "Mencetak ETH baru",
            ],
            answer: 1,
            explain: "Dompet menjadi identitas dan alat menandatangani transaksi, menggantikan akun dan kata sandi.",
          },
          {
            q: "Manakah contoh dApp kategori DeFi?",
            options: [
              "Bursa terdesentralisasi untuk menukar dan meminjam aset",
              "Aplikasi cuaca biasa",
              "Spreadsheet di komputer",
              "Email pribadi",
            ],
            answer: 0,
            explain: "DeFi mencakup tukar dan pinjam aset tanpa bank, seperti bursa terdesentralisasi.",
          },
          {
            q: "Apa itu DeFi Summer 2020?",
            options: [
              "Peluncuran Bitcoin",
              "Ledakan dApp DeFi pada 2020 yang membuat harga gas melonjak",
              "The Merge",
              "Pelarangan kripto global",
            ],
            answer: 1,
            explain: "DeFi Summer 2020 adalah ledakan dApp keuangan terdesentralisasi yang melonjakkan harga gas.",
          },
        ],
      },
    ],
  },
];
