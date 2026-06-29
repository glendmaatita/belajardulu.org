import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "blockchain-block-hash",
    levelId: "blockchain",
    order: 1,
    title: "Blockchain, Block & Hash",
    summary:
      "Memahami blockchain sebagai rantai blok yang saling mengunci lewat hash. Bedah anatomi satu block dan rasakan efek longsor saat datanya diubah.",
    durationMin: 14,
    tags: ["blockchain", "hash", "block"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Blockchain</strong> secara harfiah berarti rantai blok. Ia adalah buku besar yang disusun sebagai deretan <strong>block</strong>, dan tiap block menyimpan sekumpulan transaksi lalu menyegelnya dengan sebuah sidik jari digital bernama <strong>hash</strong>. Block yang baru selalu mencatat hash block sebelumnya, sehingga semua block terkunci berurutan seperti mata rantai.",
      },
      {
        type: "paragraph",
        html: "Karena setiap block menunjuk ke block sebelumnya, mengubah satu transaksi lama akan mengubah hash block itu, lalu merusak tautan ke semua block setelahnya. Inilah yang membuat catatan blockchain sangat sulit dipalsukan tanpa ketahuan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Anatomi sebuah block",
        html: "Satu block umumnya berisi: <strong>data</strong> (daftar transaksi), <strong>timestamp</strong> (waktu pembuatan), <strong>prev hash</strong> (hash block sebelumnya), <strong>nonce</strong> (angka yang diutak-atik penambang), dan <strong>hash</strong> block itu sendiri yang dihitung dari semua isi di atas.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Hash itu sidik jari data",
        html: "<strong>Hash</strong> adalah fungsi satu arah: masukan apa pun menghasilkan kode dengan panjang tetap. Data yang sama selalu menghasilkan hash yang sama, tetapi mengubah satu huruf saja akan mengubah hash secara total. Hash tidak bisa dibalik untuk menebak data aslinya.",
      },
      {
        type: "video",
        comp: "RantaiBlokVideo",
        title: "Blok Dirantai oleh Hash",
        caption: "Bagaimana prev hash menautkan tiap block ke pendahulunya menjadi satu rantai utuh.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Efek longsor: berapa karakter hash berubah saat data diutak-atik (ilustrasi)",
        unit: "perkiraan % karakter hash yang berubah",
        source: "ilustrasi edukatif sifat avalanche pada fungsi hash",
        note: "Sekecil apa pun perubahan masukan, sekitar separuh karakter hash berganti; hash lama dan baru tampak tak berhubungan.",
        data: [
          { label: "Ubah 1 huruf", value: 50, color: "#f7931a" },
          { label: "Ubah 1 kata", value: 50, color: "#627eea" },
          { label: "Ubah 1 angka", value: 50, color: "#26a17b" },
          { label: "Tukar 2 huruf", value: 50, color: "#94a3b8" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Ubah data di salah satu block dan lihat bagaimana hash-nya berubah, lalu memutus tautan ke block-block setelahnya. Rantai langsung tampak rusak (merah).",
      },
      { type: "widget", widget: "SimulatorBlokHash" },
      {
        type: "case",
        title: "Studi Kasus: Mengubah satu transaksi lama",
        html: "Misalkan seorang penyerang ingin mengubah jumlah satu transaksi di block ke-100 dari 1 BTC menjadi 10 BTC. Begitu datanya diubah, hash block ke-100 ikut berubah. Padahal block ke-101 menyimpan hash lama block ke-100 di kolom prev hash-nya, sehingga tautan putus. Untuk menutupinya, penyerang harus menghitung ulang hash block ke-101, ke-102, dan seterusnya sampai block terbaru, lalu mengejar seluruh jaringan. Itulah sebabnya pemalsuan nyaris mustahil.",
      },
      {
        type: "case",
        title: "Sejarah: Rantai dokumen ber-timestamp (1991)",
        html: "Jauh sebelum Bitcoin, pada <strong>1991</strong> dua peneliti, <strong>Stuart Haber dan W. Scott Stornetta</strong>, menerbitkan cara memberi cap waktu pada dokumen digital agar tidak bisa dimundurkan atau dipalsukan. Idenya: tiap dokumen baru menyertakan hash dokumen sebelumnya sehingga membentuk rantai yang saling mengunci. Konsep rantai blok ber-timestamp inilah yang kemudian dirujuk Satoshi Nakamoto saat merancang Bitcoin.",
      },
      {
        type: "calcExercise",
        prompt:
          "Seorang penyerang mengubah data di block ke-100, sedangkan block terbaru adalah block ke-105. Berapa block yang hash-nya harus dihitung ulang agar rantai kembali konsisten?",
        answer: 6,
        tolerance: 0,
        suffix: "block",
        solution:
          "Block ke-100 sampai ke-105 ikut rusak, yaitu block 100, 101, 102, 103, 104, dan 105 = <strong>6 block</strong>. Makin dalam transaksi terkubur, makin banyak block yang harus dihitung ulang.",
        hint: "Hitung dari block yang diubah sampai block terakhir, inklusif: 105 - 100 + 1.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap bagian block dengan fungsinya.",
        pairs: [
          { left: "Data", right: "Daftar transaksi yang disimpan block" },
          { left: "Prev hash", right: "Sidik jari block sebelumnya, penaut rantai" },
          { left: "Timestamp", right: "Waktu block dibuat" },
          { left: "Nonce", right: "Angka yang diutak-atik penambang" },
          { left: "Hash", right: "Sidik jari dari seluruh isi block ini" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Blockchain adalah rantai block; tiap block menyimpan hash block sebelumnya.",
          "Satu block berisi data, timestamp, prev hash, nonce, dan hash-nya sendiri.",
          "Hash adalah sidik jari satu arah; ubah sedikit data, hash berubah total.",
          "Mengubah block lama merusak tautan ke semua block setelahnya.",
          "Ide rantai ber-timestamp sudah ada sejak Haber dan Stornetta pada 1991.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang menautkan satu block ke block sebelumnya?",
            options: ["Timestamp", "Prev hash (hash block sebelumnya)", "Nonce", "Nomor rekening"],
            answer: 1,
            explain: "Tiap block menyimpan hash block sebelumnya, membentuk rantai yang saling mengunci.",
          },
          {
            q: "Apa sifat utama sebuah fungsi hash?",
            options: ["Bisa dibalik jadi data asli", "Masukan sama selalu hasil sama, ubah sedikit berubah total", "Selalu menghasilkan angka kecil", "Berbeda tiap kali walau data sama"],
            answer: 1,
            explain: "Hash deterministik namun sangat sensitif: perubahan kecil mengubah hasil secara menyeluruh.",
          },
          {
            q: "Mengapa mengubah transaksi lama sulit dilakukan?",
            options: ["Karena gratis", "Hash block ikut berubah dan merusak semua tautan setelahnya", "Karena tidak ada timestamp", "Karena data tidak disimpan"],
            answer: 1,
            explain: "Perubahan memaksa perhitungan ulang hash semua block berikutnya, nyaris mustahil dikejar.",
          },
          {
            q: "Bagian block mana yang diutak-atik penambang?",
            options: ["Prev hash", "Timestamp", "Nonce", "Data transaksi"],
            answer: 2,
            explain: "Nonce diubah-ubah untuk mencari hash yang memenuhi syarat jaringan.",
          },
          {
            q: "Siapa yang memperkenalkan rantai dokumen ber-timestamp pada 1991?",
            options: ["Satoshi Nakamoto", "Haber dan Stornetta", "Vitalik Buterin", "Hal Finney"],
            answer: 1,
            explain: "Stuart Haber dan W. Scott Stornetta merancang rantai timestamp yang mendahului Bitcoin.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "merkle-genesis",
    levelId: "blockchain",
    order: 2,
    title: "Merkle Tree & Genesis Block",
    summary:
      "Bagaimana ribuan transaksi diringkas menjadi satu Merkle root untuk verifikasi cepat, dan mengapa block pertama (genesis) begitu istimewa.",
    durationMin: 14,
    tags: ["merkle-tree", "genesis-block", "verifikasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Satu block bisa memuat ribuan transaksi. Daripada menyimpan dan mengirim semuanya saat ingin membuktikan satu transaksi, blockchain memakai <strong>Merkle tree</strong>: pohon hash yang meringkas semua transaksi menjadi satu nilai tunggal bernama <strong>Merkle root</strong>.",
      },
      {
        type: "paragraph",
        html: "Cara kerjanya berjenjang. Tiap transaksi di-hash, lalu pasangan hash digabung dan di-hash lagi, terus naik sampai tersisa satu hash di puncak. Merkle root inilah yang ikut masuk ke header block. Jika satu transaksi berubah, Merkle root berubah, sehingga manipulasi mudah terdeteksi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Mengapa pohon, bukan daftar",
        html: "Dengan Merkle tree, untuk membuktikan satu transaksi ada di sebuah block, kita cukup menyajikan sebagian kecil hash di sepanjang jalur menuju root, bukan seluruh transaksi. Untuk 1.000 transaksi, cukup sekitar 10 hash saja. Inilah dasar <strong>verifikasi efisien</strong>.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Efek longsor lagi",
        html: "Sama seperti hash block, Merkle root sangat sensitif. Mengubah satu transaksi di paling bawah pohon akan menjalar ke atas dan mengubah root. Coba rasakan sensitivitas hash lewat simulator berikut.",
      },
      { type: "widget", widget: "SimulatorHashKripto" },
      {
        type: "chart",
        variant: "bar",
        title: "Jumlah level Merkle tree untuk N transaksi",
        unit: "tinggi pohon (level)",
        source: "perhitungan log2(N) dibulatkan ke atas",
        note: "Tinggi pohon tumbuh sangat lambat: lipat dua jumlah transaksi hanya menambah satu level.",
        data: [
          { label: "2 tx", value: 1, color: "#f7931a" },
          { label: "8 tx", value: 3, color: "#627eea" },
          { label: "1.024 tx", value: 10, color: "#26a17b" },
          { label: "1.048.576 tx", value: 20, color: "#94a3b8" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membuktikan satu transaksi tanpa unduh seluruh block",
        html: "Sebuah dompet ringan ingin memastikan pembayaran 0,2 BTC benar tercatat di sebuah block berisi 1.024 transaksi. Alih-alih mengunduh ribuan transaksi, dompet cukup meminta jalur Merkle: sekitar <strong>10 hash</strong> pendukung. Dengan menghitung ulang dari transaksi itu sampai root dan mencocokkannya dengan Merkle root di header, dompet yakin transaksi sah, dengan data minimal.",
      },
      {
        type: "case",
        title: "Sejarah: Genesis block Bitcoin (3 Januari 2009)",
        html: "Block pertama sebuah blockchain disebut <strong>genesis block</strong> dan tidak memiliki prev hash karena tidak ada block sebelumnya. Genesis block Bitcoin ditambang pada <strong>3 Januari 2009</strong>. Di dalamnya Satoshi menyisipkan teks judul berita The Times: 'Chancellor on brink of second bailout for banks'. Hadiah 50 BTC pada block genesis ini secara teknis tidak bisa dibelanjakan, menjadikannya penanda abadi awal mula Bitcoin.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah block berisi 1.024 transaksi yang disusun jadi Merkle tree biner penuh. Berapa level (tinggi pohon) dari daun sampai ke Merkle root?",
        answer: 10,
        tolerance: 0,
        suffix: "level",
        solution:
          "Pohon biner memerlukan log2(1024) = <strong>10 level</strong> karena 2 pangkat 10 = 1.024. Tiap level menggabungkan pasangan hash, memangkas jumlahnya jadi separuh.",
        hint: "Cari pangkat berapa dari 2 yang menghasilkan 1.024.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan pernyataan: tentang Merkle tree atau tentang genesis block?",
        buckets: ["Merkle tree", "Genesis block"],
        items: [
          { text: "Meringkas banyak transaksi jadi satu Merkle root", bucket: "Merkle tree" },
          { text: "Block pertama yang tidak punya prev hash", bucket: "Genesis block" },
          { text: "Memungkinkan verifikasi transaksi dengan sedikit hash", bucket: "Merkle tree" },
          { text: "Menyisipkan judul berita The Times pada 3 Januari 2009", bucket: "Genesis block" },
          { text: "Tinggi pohonnya sekitar log2 dari jumlah transaksi", bucket: "Merkle tree" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Merkle tree meringkas semua transaksi block menjadi satu Merkle root.",
          "Verifikasi satu transaksi cukup butuh jalur hash, bukan seluruh transaksi.",
          "Tinggi Merkle tree tumbuh lambat, sekitar log2 dari jumlah transaksi.",
          "Genesis block adalah block pertama dan tidak memiliki prev hash.",
          "Genesis block Bitcoin (3 Januari 2009) menyimpan pesan berita The Times.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu Merkle root?",
            options: ["Block pertama jaringan", "Satu hash yang meringkas seluruh transaksi block", "Nomor urut block", "Kunci privat penambang"],
            answer: 1,
            explain: "Merkle root adalah puncak pohon hash, mewakili semua transaksi di block.",
          },
          {
            q: "Apa keuntungan utama Merkle tree?",
            options: ["Transaksi jadi gratis", "Verifikasi satu transaksi cukup dengan sedikit hash", "Block jadi lebih besar", "Menghapus kebutuhan hash"],
            answer: 1,
            explain: "Cukup jalur hash menuju root, tanpa mengunduh semua transaksi.",
          },
          {
            q: "Untuk 1.024 transaksi, berapa kira-kira tinggi Merkle tree biner penuh?",
            options: ["1.024 level", "10 level", "512 level", "100 level"],
            answer: 1,
            explain: "log2(1.024) = 10, karena 2 pangkat 10 sama dengan 1.024.",
          },
          {
            q: "Apa yang membedakan genesis block dari block lain?",
            options: ["Punya dua prev hash", "Tidak memiliki prev hash", "Tidak punya transaksi sama sekali", "Dibuat oleh bank"],
            answer: 1,
            explain: "Genesis block adalah block pertama sehingga tidak ada block sebelumnya untuk dirujuk.",
          },
          {
            q: "Kapan genesis block Bitcoin ditambang?",
            options: ["31 Oktober 2008", "3 Januari 2009", "12 Mei 2010", "1 Januari 2000"],
            answer: 1,
            explain: "Genesis block Bitcoin ditambang pada 3 Januari 2009 dengan pesan berita The Times.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "node-jaringan-p2p",
    levelId: "blockchain",
    order: 3,
    title: "Node & Jaringan Peer-to-Peer",
    summary:
      "Siapa yang menyimpan blockchain. Kenali full node, light node, dan jaringan peer-to-peer yang berjalan tanpa server pusat.",
    durationMin: 13,
    tags: ["node", "peer-to-peer", "full-node"],
    blocks: [
      {
        type: "paragraph",
        html: "Blockchain tidak disimpan di satu server. Ia hidup di ribuan komputer yang disebut <strong>node</strong>. Tiap node terhubung langsung ke node lain dalam jaringan <strong>peer-to-peer</strong> (P2P), saling bertukar transaksi dan block tanpa perlu pusat pengendali.",
      },
      {
        type: "paragraph",
        html: "Tidak semua node sama. <strong>Full node</strong> menyimpan dan memverifikasi seluruh salinan blockchain dari genesis sampai block terbaru, lalu menolak block atau transaksi yang melanggar aturan. <strong>Light node</strong> hanya menyimpan header block dan mengandalkan metode <strong>SPV</strong> (Simplified Payment Verification) untuk memeriksa transaksi tertentu, sehingga ringan dipakai di ponsel.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tanpa server pusat",
        html: "Di jaringan P2P tidak ada satu komputer yang menjadi bos. Tiap node setara: menerima, memverifikasi, lalu meneruskan data ke tetangganya. Mematikan satu atau banyak node tidak menjatuhkan jaringan selama masih ada node lain yang menyalin blockchain.",
      },
      {
        type: "callout",
        tone: "info",
        title: "SPV memakai Merkle proof",
        html: "Light node memanfaatkan Merkle tree dari pelajaran sebelumnya. Dengan header block dan jalur Merkle yang pendek, ia bisa memastikan sebuah transaksi termuat di suatu block tanpa menyimpan seluruh isi block.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perkiraan kebutuhan penyimpanan: full node vs light node (ilustrasi)",
        unit: "GB data yang disimpan",
        source: "ilustrasi edukatif, full node Bitcoin nyata ratusan GB",
        note: "Full node menyimpan seluruh riwayat sehingga berat; light node hanya header sehingga sangat ringan.",
        data: [
          { label: "Full node", value: 600, color: "#f7931a" },
          { label: "Light node", value: 1, color: "#26a17b" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memilih jenis node",
        html: "Sebuah bursa kripto menjalankan <strong>full node</strong> agar bisa memverifikasi sendiri setiap transaksi pelanggan tanpa percaya pihak lain, meski butuh ratusan GB penyimpanan dan koneksi stabil. Sementara seorang pengguna biasa cukup memakai dompet ponsel berbasis <strong>light node</strong>: ringan, cepat sinkron, dan tetap bisa memastikan dananya tercatat lewat SPV, dengan menaruh sedikit kepercayaan pada full node yang ia hubungi.",
      },
      {
        type: "case",
        title: "Sejarah: Transaksi P2P pertama Bitcoin (12 Januari 2009)",
        html: "Pada <strong>12 Januari 2009</strong>, hanya sembilan hari setelah genesis block, Satoshi Nakamoto mengirim 10 BTC kepada <strong>Hal Finney</strong>. Itu transaksi Bitcoin pertama antar dua node manusia, membuktikan jaringan peer-to-peer benar-benar bisa memindahkan nilai langsung tanpa bank di tengahnya. Hal Finney juga menjalankan salah satu node paling awal di jaringan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah jaringan punya 10.000 full node. Penyerang berhasil mematikan 9.990 di antaranya. Berapa full node yang masih menyimpan salinan lengkap blockchain?",
        answer: 10,
        tolerance: 0,
        suffix: "node",
        solution:
          "10.000 - 9.990 = <strong>10 node</strong>. Selama masih ada satu pun full node, salinan lengkap blockchain tetap utuh dan jaringan bisa pulih. Inilah ketahanan desentralisasi.",
        hint: "Kurangi jumlah node yang mati dari total node.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan ciri berikut: milik full node atau light node?",
        buckets: ["Full node", "Light node"],
        items: [
          { text: "Menyimpan seluruh riwayat blockchain", bucket: "Full node" },
          { text: "Hanya menyimpan header block", bucket: "Light node" },
          { text: "Memverifikasi semua transaksi secara mandiri", bucket: "Full node" },
          { text: "Memakai SPV untuk memeriksa transaksi tertentu", bucket: "Light node" },
          { text: "Cocok dijalankan di ponsel karena ringan", bucket: "Light node" },
          { text: "Butuh ratusan GB penyimpanan", bucket: "Full node" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Blockchain disimpan tersebar di ribuan node, bukan satu server.",
          "Full node menyimpan dan memverifikasi seluruh blockchain secara mandiri.",
          "Light node hanya menyimpan header dan memakai SPV agar ringan.",
          "Jaringan peer-to-peer membuat node setara dan tahan terhadap gangguan.",
          "Selama satu full node bertahan, salinan lengkap blockchain tetap hidup.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dilakukan full node?",
            options: ["Hanya menyimpan header block", "Menyimpan dan memverifikasi seluruh blockchain", "Mengatur seluruh jaringan", "Mencetak koin baru sesuka hati"],
            answer: 1,
            explain: "Full node menyimpan salinan lengkap dan memeriksa setiap aturan secara mandiri.",
          },
          {
            q: "Apa yang dipakai light node untuk memeriksa transaksi?",
            options: ["Menyimpan semua transaksi", "SPV dengan header dan Merkle proof", "Bertanya ke bank", "Menambang block sendiri"],
            answer: 1,
            explain: "SPV memakai header block dan jalur Merkle pendek tanpa menyimpan seluruh data.",
          },
          {
            q: "Apa ciri jaringan peer-to-peer?",
            options: ["Ada satu server pusat", "Tiap node setara dan saling meneruskan data", "Hanya satu node yang menyimpan data", "Dikendalikan satu perusahaan"],
            answer: 1,
            explain: "Node saling terhubung langsung tanpa pusat, sehingga tahan gangguan.",
          },
          {
            q: "Mengapa mematikan banyak node sulit menjatuhkan jaringan?",
            options: ["Karena ada cadangan di bank", "Selama satu full node bertahan, salinan tetap utuh", "Karena node tidak bisa dimatikan", "Karena data hanya di satu tempat"],
            answer: 1,
            explain: "Banyak salinan identik membuat jaringan bisa pulih dari node yang tersisa.",
          },
          {
            q: "Siapa penerima transaksi Bitcoin pertama dari Satoshi?",
            options: ["Vitalik Buterin", "Hal Finney", "Stuart Haber", "Charlie Lee"],
            answer: 1,
            explain: "Pada 12 Januari 2009 Satoshi mengirim 10 BTC ke Hal Finney.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "fork-finality",
    levelId: "blockchain",
    order: 4,
    title: "Fork & Finality",
    summary:
      "Apa yang terjadi saat aturan jaringan berubah atau dua block muncul bersamaan. Pahami soft fork, hard fork, dan kapan transaksi benar-benar final.",
    durationMin: 14,
    tags: ["fork", "finality", "konfirmasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah <strong>fork</strong> terjadi ketika rantai blockchain bercabang. Cabang bisa muncul sesaat saat dua penambang menemukan block hampir bersamaan, atau muncul karena perubahan aturan jaringan. Untuk perubahan aturan, ada dua jenis: <strong>soft fork</strong> dan <strong>hard fork</strong>.",
      },
      {
        type: "paragraph",
        html: "<strong>Soft fork</strong> memperketat aturan dan tetap kompatibel ke belakang: node lama masih menganggap block baru sah. <strong>Hard fork</strong> mengubah aturan secara tidak kompatibel sehingga node lama menolak block baru; bila sebagian komunitas tetap di aturan lama, rantai bisa terpecah jadi dua koin berbeda (<strong>chain split</strong>).",
      },
      {
        type: "callout",
        tone: "key",
        title: "Finality: kapan transaksi dianggap final",
        html: "<strong>Finality</strong> adalah jaminan bahwa transaksi tidak akan dibatalkan. Di Proof of Work, finality bersifat <strong>probabilistik</strong>: makin banyak block menumpuk di atas transaksi, makin kecil peluang dibalik, tetapi tak pernah benar-benar nol. Di sejumlah sistem Proof of Stake, finality bisa bersifat <strong>deterministik</strong>: setelah ronde validasi tertentu, transaksi dikunci permanen.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Hubungannya dengan double spending",
        html: "Menunggu konfirmasi adalah cara melawan upaya membelanjakan koin yang sama dua kali. Coba simulator berikut untuk melihat mengapa transaksi besar sebaiknya menunggu beberapa block sebelum dianggap final.",
      },
      { type: "widget", widget: "SimulatorDoubleSpending" },
      {
        type: "chart",
        variant: "line",
        title: "Peluang transaksi dibalik turun seiring jumlah konfirmasi (ilustrasi PoW)",
        unit: "perkiraan peluang dibalik (%)",
        source: "ilustrasi edukatif sifat finality probabilistik",
        note: "Tiap block tambahan menekan peluang pembalikan; setelah 6 konfirmasi peluangnya sangat kecil namun tak pernah nol.",
        data: [
          { label: "0 konfirmasi", value: 100, color: "#f7931a" },
          { label: "1 konfirmasi", value: 40, color: "#f7931a" },
          { label: "2 konfirmasi", value: 16, color: "#627eea" },
          { label: "3 konfirmasi", value: 6, color: "#627eea" },
          { label: "6 konfirmasi", value: 1, color: "#26a17b" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Bursa menunggu konfirmasi",
        html: "Sebuah bursa menerima setoran 5 BTC. Jika langsung mengkreditkan saldo pada 0 konfirmasi, penyetor bisa mencoba double spending dan membatalkan setoran. Maka bursa menetapkan kebijakan menunggu <strong>6 konfirmasi</strong>. Dengan rata-rata 10 menit per block, setoran baru tersedia setelah sekitar <strong>60 menit</strong>, saat peluang pembalikan sudah sangat kecil. Inilah finality probabilistik dalam praktik.",
      },
      {
        type: "case",
        title: "Sejarah: Hard fork Bitcoin Cash (1 Agustus 2017)",
        html: "Komunitas Bitcoin lama berdebat soal ukuran block yang membatasi jumlah transaksi per block. Sebagian ingin memperbesar batas itu agar transaksi lebih murah dan cepat. Karena perubahan ini tidak kompatibel ke belakang, pada <strong>1 Agustus 2017</strong> terjadi <strong>hard fork</strong>: rantai terpecah menjadi Bitcoin (BTC) yang mempertahankan aturan lama dan <strong>Bitcoin Cash (BCH)</strong> dengan block lebih besar. Pemilik BTC saat itu otomatis memiliki BCH dalam jumlah sama, contoh nyata chain split.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah bursa menunggu 6 konfirmasi sebelum setoran tersedia. Jika rata-rata satu block muncul tiap 10 menit, berapa menit kira-kira pelanggan menunggu?",
        answer: 60,
        tolerance: 1,
        suffix: "menit",
        solution:
          "6 konfirmasi x 10 menit = <strong>60 menit</strong>. Menunggu konfirmasi adalah harga dari finality probabilistik di Proof of Work.",
        hint: "Kalikan jumlah konfirmasi dengan waktu rata-rata per block.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah dengan maknanya.",
        pairs: [
          { left: "Soft fork", right: "Perubahan aturan kompatibel ke belakang" },
          { left: "Hard fork", right: "Perubahan tidak kompatibel, bisa pecah jadi dua koin" },
          { left: "Chain split", right: "Rantai terbelah menjadi dua jaringan terpisah" },
          { left: "Finality probabilistik", right: "Makin banyak konfirmasi, makin kecil peluang dibalik" },
          { left: "Finality deterministik", right: "Transaksi dikunci permanen setelah ronde validasi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Fork adalah percabangan rantai, bisa karena block bersamaan atau perubahan aturan.",
          "Soft fork kompatibel ke belakang; hard fork tidak dan bisa memecah rantai.",
          "Chain split melahirkan dua koin terpisah, seperti BTC dan Bitcoin Cash 2017.",
          "Finality di Proof of Work bersifat probabilistik: makin banyak konfirmasi makin aman.",
          "Sebagian Proof of Stake menawarkan finality deterministik yang mengunci transaksi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa beda utama soft fork dan hard fork?",
            options: ["Soft fork lebih mahal", "Soft fork kompatibel ke belakang, hard fork tidak", "Hard fork selalu gagal", "Keduanya sama persis"],
            answer: 1,
            explain: "Soft fork tetap diterima node lama; hard fork mengubah aturan secara tidak kompatibel.",
          },
          {
            q: "Apa itu chain split?",
            options: ["Block yang hilang", "Rantai terbelah jadi dua jaringan terpisah", "Hash yang rusak", "Node yang mati"],
            answer: 1,
            explain: "Saat sebagian komunitas tetap di aturan lama, rantai bisa terpecah jadi dua koin.",
          },
          {
            q: "Apa arti finality probabilistik di Proof of Work?",
            options: ["Transaksi langsung permanen", "Peluang dibalik mengecil seiring konfirmasi, tak pernah nol", "Tidak ada konfirmasi", "Transaksi selalu bisa dibatalkan"],
            answer: 1,
            explain: "Tiap block tambahan menekan peluang pembalikan, tetapi tidak pernah benar-benar nol.",
          },
          {
            q: "Mengapa bursa menunggu beberapa konfirmasi?",
            options: ["Agar biaya gratis", "Untuk mengurangi risiko double spending", "Untuk menambah saldo", "Agar transaksi rahasia"],
            answer: 1,
            explain: "Menunggu konfirmasi membuat upaya membatalkan setoran jadi sangat sulit.",
          },
          {
            q: "Peristiwa apa yang terjadi pada 1 Agustus 2017?",
            options: ["Genesis block Bitcoin", "Hard fork yang melahirkan Bitcoin Cash", "Transaksi pertama ke Hal Finney", "Penemuan Merkle tree"],
            answer: 1,
            explain: "Hard fork pada 1 Agustus 2017 memecah rantai menjadi BTC dan Bitcoin Cash (BCH).",
          },
        ],
      },
    ],
  },
];
