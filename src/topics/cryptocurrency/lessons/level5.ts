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
];
