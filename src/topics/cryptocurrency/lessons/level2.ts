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
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Blockchain.svg?width=400",
        alt: "Diagram rantai blok yang saling menunjuk lewat hash",
        caption: "Tiap block menyimpan hash block sebelumnya sehingga membentuk rantai yang saling mengunci.",
        credit: "Sumber: Wikimedia Commons",
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
      {
        type: "video",
        comp: "MerkleTreeVideo",
        title: "Merkle Tree Meringkas Transaksi",
        caption: "Pasangan hash digabung berjenjang sampai tersisa satu Merkle root di puncak.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hash_Tree.svg?width=400",
        alt: "Diagram Merkle tree (pohon hash) yang menggabungkan hash berpasangan menuju root",
        caption: "Hash daun digabung berpasangan, naik berjenjang, sampai tersisa satu Merkle root.",
        credit: "Sumber: Wikimedia Commons",
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
        type: "video",
        comp: "CypherpunkVideo",
        title: "Jaringan Tanpa Pusat",
        caption: "Semangat desentralisasi: node setara saling terhubung tanpa server tunggal yang mengendalikan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tor-onion-network.png?width=400",
        alt: "Ilustrasi jaringan terdistribusi dengan banyak simpul yang saling terhubung",
        caption: "Di jaringan peer-to-peer, banyak node setara saling meneruskan data tanpa pusat pengendali.",
        credit: "Sumber: Wikimedia Commons",
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
        type: "video",
        comp: "ForkBlockchainVideo",
        title: "Saat Rantai Bercabang",
        caption: "Bagaimana soft fork dan hard fork mengubah aturan, dan kapan rantai benar-benar terbelah.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Blockchain_workflow.png?width=400",
        alt: "Diagram alur kerja blockchain dari transaksi sampai block ditambahkan",
        caption: "Alur kerja blockchain: aturan jaringan menentukan block mana yang sah dan diterima node.",
        credit: "Sumber: Wikimedia Commons",
      },
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
  // ============================================================
  {
    id: "anatomi-blok",
    levelId: "blockchain",
    order: 5,
    title: "Anatomi Sebuah Block",
    summary:
      "Bedah isi sebuah block sampai ke tulang: block header (versi, prev hash, Merkle root, timestamp, bits/target, nonce) dan daftar transaksi di badannya.",
    durationMin: 14,
    tags: ["block", "block-header", "struktur"],
    blocks: [
      {
        type: "paragraph",
        html: "Setiap <strong>block</strong> sebenarnya terbagi dua: <strong>block header</strong> yang kecil tetapi padat informasi, dan <strong>badan block</strong> yang berisi daftar transaksi. Yang menarik, justru header yang mungil itulah yang di-hash untuk menghasilkan identitas block dan menautkannya ke rantai.",
      },
      {
        type: "paragraph",
        html: "Pada Bitcoin, block header berisi enam bagian: <strong>versi</strong> (aturan yang dipakai), <strong>prev hash</strong> (hash block sebelumnya), <strong>Merkle root</strong> (ringkasan semua transaksi), <strong>timestamp</strong> (waktu pembuatan), <strong>bits/target</strong> (tingkat kesulitan yang harus dipenuhi), dan <strong>nonce</strong> (angka yang diutak-atik penambang). Badan block menyimpan transaksi sesungguhnya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Header yang di-hash, bukan seluruh transaksi",
        html: "Penambang tidak meng-hash ribuan transaksi berulang kali. Mereka cukup meng-hash <strong>block header</strong> yang ramping. Transaksi sudah terwakili di dalamnya lewat <strong>Merkle root</strong>, jadi mengubah satu transaksi akan mengubah Merkle root, lalu mengubah hash header.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bits/target itu ambang kesulitan",
        html: "Kolom <strong>bits</strong> mengkodekan <strong>target</strong>: hash header harus lebih kecil dari nilai ini agar block diterima. Makin kecil target, makin sulit menemukannya, makin tinggi kesulitan jaringan.",
      },
      {
        type: "video",
        comp: "RantaiBlokVideo",
        title: "Isi Sebuah Block",
        caption: "Header yang ramping menyimpan prev hash dan Merkle root, lalu di-hash menjadi identitas block.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bitcoin_Block_Data.png?width=400",
        alt: "Diagram struktur data sebuah block Bitcoin beserta isinya",
        caption: "Struktur sebuah block: header padat informasi di atas, daftar transaksi di badannya.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Ukuran tiap bagian block header Bitcoin",
        unit: "byte",
        source: "spesifikasi block header Bitcoin (total 80 byte)",
        note: "Prev hash dan Merkle root paling besar (32 byte) karena keduanya hash SHA-256 penuh; sisanya hanya 4 byte.",
        data: [
          { label: "Versi", value: 4, color: "#94a3b8" },
          { label: "Prev hash", value: 32, color: "#f7931a" },
          { label: "Merkle root", value: 32, color: "#627eea" },
          { label: "Timestamp", value: 4, color: "#26a17b" },
          { label: "Bits/target", value: 4, color: "#94a3b8" },
          { label: "Nonce", value: 4, color: "#94a3b8" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membaca header satu block",
        html: "Seorang pengembang membuka sebuah block dan melihat header 80 byte: versi block, prev hash yang menunjuk block sebelumnya, Merkle root yang meringkas <strong>2.500 transaksi</strong> di badan block, timestamp, bits, dan nonce hasil penambangan. Untuk membuktikan satu transaksi termuat, ia tidak perlu seluruh badan block, cukup Merkle root di header plus jalur Merkle pendek. Header kecil, tetapi menjadi jangkar seluruh isi block.",
      },
      {
        type: "case",
        title: "Sejarah: Perang ukuran block (2015-2017)",
        html: "Sejak 2010 Bitcoin membatasi ukuran block di sekitar <strong>1 MB</strong>. Saat pemakaian meningkat, batas itu membuat transaksi antre dan biaya naik. Selama <strong>2015 sampai 2017</strong> komunitas berdebat sengit: sebagian ingin memperbesar block agar lebih murah dan cepat, sebagian menolak demi menjaga block tetap ringan agar mudah dijalankan banyak node. Perdebatan tak menemui titik temu, sehingga pada <strong>1 Agustus 2017</strong> kelompok block besar memisahkan diri lewat hard fork dan melahirkan <strong>Bitcoin Cash</strong> dengan batas block 8 MB.",
      },
      {
        type: "calcExercise",
        prompt:
          "Block header Bitcoin terdiri dari versi 4 byte, prev hash 32 byte, Merkle root 32 byte, timestamp 4 byte, bits 4 byte, dan nonce 4 byte. Berapa total ukuran header dalam byte?",
        answer: 80,
        tolerance: 0,
        suffix: "byte",
        solution:
          "4 + 32 + 32 + 4 + 4 + 4 = <strong>80 byte</strong>. Berapa pun jumlah transaksi di badan block, ukuran header tetap 80 byte.",
        hint: "Jumlahkan keenam bagian header: dua hash 32 byte dan empat bagian 4 byte.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap bagian: ada di block header atau di badan block?",
        buckets: ["Block header", "Badan block"],
        items: [
          { text: "Prev hash block sebelumnya", bucket: "Block header" },
          { text: "Merkle root ringkasan transaksi", bucket: "Block header" },
          { text: "Daftar transaksi lengkap", bucket: "Badan block" },
          { text: "Nonce hasil penambangan", bucket: "Block header" },
          { text: "Bits/target tingkat kesulitan", bucket: "Block header" },
          { text: "Transaksi coinbase penambang", bucket: "Badan block" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Block terbagi jadi block header yang ramping dan badan berisi transaksi.",
          "Header Bitcoin berisi enam bagian dan totalnya hanya 80 byte.",
          "Yang di-hash penambang adalah header, bukan seluruh transaksi.",
          "Merkle root mewakili semua transaksi di dalam header.",
          "Perdebatan ukuran block 2015-2017 berujung lahirnya Bitcoin Cash pada 2017.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bagian mana dari block yang sebenarnya di-hash penambang?",
            options: ["Seluruh badan block", "Block header", "Hanya transaksi coinbase", "Nomor urut block"],
            answer: 1,
            explain: "Penambang meng-hash block header yang ramping; transaksi sudah terwakili lewat Merkle root.",
          },
          {
            q: "Berapa total ukuran block header Bitcoin?",
            options: ["1 MB", "80 byte", "32 byte", "256 byte"],
            answer: 1,
            explain: "Enam bagian header berjumlah 80 byte, tetap berapa pun jumlah transaksi.",
          },
          {
            q: "Apa fungsi kolom bits/target?",
            options: ["Menyimpan saldo penambang", "Menentukan ambang kesulitan yang harus dipenuhi hash", "Mencatat nama pengirim", "Menghitung jumlah node"],
            answer: 1,
            explain: "Hash header harus lebih kecil dari target; makin kecil target makin sulit.",
          },
          {
            q: "Apa yang mewakili semua transaksi di dalam header?",
            options: ["Nonce", "Timestamp", "Merkle root", "Versi"],
            answer: 2,
            explain: "Merkle root adalah ringkasan hash seluruh transaksi badan block.",
          },
          {
            q: "Apa hasil dari perang ukuran block pada 1 Agustus 2017?",
            options: ["Bitcoin berhenti beroperasi", "Lahirnya Bitcoin Cash lewat hard fork", "Block dihapus seluruhnya", "Genesis block dibuat ulang"],
            answer: 1,
            explain: "Kelompok block besar memisahkan diri dan melahirkan Bitcoin Cash dengan batas 8 MB.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "imutabilitas-tamper",
    levelId: "blockchain",
    order: 6,
    title: "Imutabilitas: Kenapa Data Sulit Diubah",
    summary:
      "Rantai hash membuat setiap perubahan ketahuan. Pahami mengapa data lama nyaris mustahil diubah diam-diam dan bandingkan dengan catatan biasa.",
    durationMin: 14,
    tags: ["imutabilitas", "tamper-evident", "hash"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Imutabilitas</strong> bukan berarti data secara fisik tidak bisa diubah, melainkan bahwa setiap perubahan pasti <strong>ketahuan</strong>. Istilah tepatnya <strong>tamper-evident</strong>: bukan tak bisa dirusak, tetapi kerusakan langsung terlihat. Kuncinya ada pada rantai hash yang sudah kita pelajari.",
      },
      {
        type: "paragraph",
        html: "Karena hash satu block ikut menentukan prev hash block berikutnya, mengubah satu transaksi lama akan mengubah hash block itu, lalu memutus tautan ke seluruh block setelahnya. Untuk menutupinya, penyerang harus menghitung ulang semua block tersebut, dan di sistem Proof of Work itu berarti mengulang pekerjaan penambangan yang sangat mahal sambil mengejar jaringan yang terus maju.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tamper-evident, bukan tamper-proof",
        html: "Siapa pun bisa mengetik ulang angka di salinannya sendiri. Yang membuat blockchain kuat adalah perubahan itu <strong>tidak akan diterima</strong> node lain karena hash-nya tidak cocok. Makin dalam sebuah transaksi terkubur oleh block-block baru, makin besar pekerjaan yang harus diulang untuk menyembunyikan perubahannya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Ubah data sebuah block dan saksikan hash-nya berubah lalu memutus tautan ke block-block setelahnya. Rantai langsung tampak rusak. Itulah tamper-evident yang bekerja.",
      },
      { type: "widget", widget: "SimulatorBlokHash" },
      {
        type: "video",
        comp: "RantaiBlokVideo",
        title: "Mengapa Perubahan Selalu Ketahuan",
        caption: "Satu data diubah, hash berubah, dan seluruh tautan setelahnya ikut putus sehingga manipulasi terdeteksi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Blockchain.svg?width=400",
        alt: "Diagram rantai blok yang menunjukkan tautan hash antar block",
        caption: "Tautan hash antar block membuat perubahan di satu titik merembet dan langsung terdeteksi.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Berapa titik yang harus diubah serempak agar manipulasi lolos (ilustrasi)",
        unit: "perkiraan jumlah titik",
        source: "ilustrasi edukatif perbandingan model penyimpanan catatan",
        note: "Catatan terpusat cukup diubah di satu tempat; pada blockchain perubahan harus diterima ribuan node sekaligus, nyaris mustahil.",
        data: [
          { label: "Catatan kertas", value: 1, color: "#94a3b8" },
          { label: "Database 1 server", value: 1, color: "#627eea" },
          { label: "Database + 3 backup", value: 4, color: "#26a17b" },
          { label: "Blockchain (ribuan node)", value: 5000, color: "#f7931a" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mencoba menghapus utang lama",
        html: "Seseorang ingin menghapus catatan transaksi 2 BTC yang ia kirim setahun lalu, terkubur di kedalaman <strong>50.000 block</strong> dari ujung rantai. Untuk itu ia harus menambang ulang 50.000 block sekaligus mengalahkan laju seluruh penambang dunia yang terus menambah block baru. Biaya listrik dan perangkatnya jauh melampaui 2 BTC yang ingin ia hapus. Secara ekonomi, berbuat jujur jauh lebih murah. Itulah imutabilitas dalam praktik.",
      },
      {
        type: "case",
        title: "Sejarah: Linked timestamping Haber dan Stornetta (1991)",
        html: "Pada <strong>1991</strong> Stuart Haber dan W. Scott Stornetta menerbitkan makalah <em>How to Time-Stamp a Digital Document</em> di Journal of Cryptology. Gagasannya: tiap dokumen baru menyertakan hash dokumen sebelumnya, sehingga membentuk rantai yang saling mengunci dan tak bisa disisipi atau diubah tanpa ketahuan. Untuk memperkuatnya, sejak <strong>1995</strong> mereka bahkan menerbitkan hash gabungan mingguan di koran <strong>The New York Times</strong>. Whitepaper Bitcoin 2008 mengutip karya mereka sebagai dasar konsep rantai ber-timestamp.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah rantai memiliki 500 block. Seorang penyerang mengubah transaksi di block ke-450. Berapa block yang harus ditambang ulang agar rantai kembali konsisten sampai ujung?",
        answer: 51,
        tolerance: 0,
        suffix: "block",
        solution:
          "Dari block ke-450 sampai ke-500 inklusif: 500 - 450 + 1 = <strong>51 block</strong>. Makin dalam transaksi terkubur, makin banyak block yang harus diulang.",
        hint: "Hitung dari block yang diubah sampai block terakhir, inklusif.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah dengan maknanya.",
        pairs: [
          { left: "Tamper-evident", right: "Perubahan tetap mungkin tetapi pasti terdeteksi" },
          { left: "Imutabilitas", right: "Data lama nyaris mustahil diubah diam-diam" },
          { left: "Efek longsor", right: "Ubah sedikit data, hash berubah total" },
          { left: "Linked timestamping", right: "Dokumen baru menyertakan hash dokumen sebelumnya" },
          { left: "Prev hash", right: "Penaut yang putus saat block lama diubah" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Imutabilitas berarti perubahan pasti ketahuan, bukan mustahil dilakukan.",
          "Mengubah block lama memutus tautan hash ke semua block setelahnya.",
          "Di Proof of Work, menyembunyikan perubahan berarti menambang ulang yang sangat mahal.",
          "Makin dalam transaksi terkubur, makin sulit dan mahal mengubahnya.",
          "Konsep linked timestamping Haber dan Stornetta (1991) mendasari rantai Bitcoin.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa arti tepat dari imutabilitas blockchain?",
            options: ["Data secara fisik tak bisa diketik ulang", "Setiap perubahan pasti terdeteksi (tamper-evident)", "Tidak ada yang bisa membaca data", "Data otomatis terhapus tiap tahun"],
            answer: 1,
            explain: "Blockchain bersifat tamper-evident: perubahan mungkin dicoba, tetapi tidak akan diterima karena hash tidak cocok.",
          },
          {
            q: "Mengapa mengubah block lama begitu mahal di Proof of Work?",
            options: ["Karena harus minta izin bank", "Harus menambang ulang semua block setelahnya sambil mengejar jaringan", "Karena data tidak punya hash", "Karena block lama dihapus otomatis"],
            answer: 1,
            explain: "Penyerang harus mengulang proof-of-work seluruh block berikutnya dan tetap kalah cepat dari jaringan jujur.",
          },
          {
            q: "Apa yang terjadi pada prev hash saat sebuah block lama diubah?",
            options: ["Tetap cocok", "Tautan ke block berikutnya putus karena hash berubah", "Berubah jadi nol", "Menghapus seluruh rantai"],
            answer: 1,
            explain: "Hash block yang diubah berubah, sehingga prev hash di block berikutnya tak lagi cocok dan tautan putus.",
          },
          {
            q: "Apa kontribusi Haber dan Stornetta pada 1991?",
            options: ["Menciptakan Bitcoin", "Memperkenalkan linked timestamping dokumen digital", "Menemukan kartu kredit", "Membuat bank pertama"],
            answer: 1,
            explain: "Mereka merancang rantai dokumen ber-timestamp yang menjadi cikal bakal konsep blockchain.",
          },
          {
            q: "Mengapa transaksi yang terkubur lebih dalam lebih aman?",
            options: ["Karena lebih murah diubah", "Karena makin banyak block yang harus ditambang ulang untuk mengubahnya", "Karena dihapus dari rantai", "Karena tidak punya hash"],
            answer: 1,
            explain: "Setiap block baru di atasnya menambah pekerjaan yang harus diulang untuk menyembunyikan perubahan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "fork-bersejarah",
    levelId: "blockchain",
    order: 7,
    title: "Fork Bersejarah & Chain Split",
    summary:
      "Bedah beda soft fork dan hard fork lewat peristiwa nyata: pemisahan Ethereum dan Ethereum Classic (2016) serta Bitcoin dan Bitcoin Cash (2017).",
    durationMin: 15,
    tags: ["fork", "chain-split", "sejarah"],
    blocks: [
      {
        type: "paragraph",
        html: "Aturan jaringan blockchain tidak selalu beku. Ketika komunitas ingin mengubahnya, lahirlah sebuah <strong>fork</strong>. Ada dua jenis perubahan aturan: <strong>soft fork</strong> yang lembut dan <strong>hard fork</strong> yang tegas. Bedanya menentukan apakah jaringan tetap satu atau terbelah menjadi dua koin.",
      },
      {
        type: "paragraph",
        html: "<strong>Soft fork</strong> hanya memperketat aturan dan tetap <strong>kompatibel ke belakang</strong>: node lama masih menganggap block baru sah, sehingga jaringan tetap utuh. <strong>Hard fork</strong> mengubah aturan secara tidak kompatibel: node lama menolak block baru. Jika sebagian komunitas bertahan di aturan lama, rantai terpecah jadi dua jaringan terpisah, sebuah <strong>chain split</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Soft fork menyempit, hard fork melebar",
        html: "Bayangkan aturan sebagai gerbang. <strong>Soft fork</strong> mempersempit gerbang: apa pun yang lolos gerbang baru pasti lolos gerbang lama, jadi node lama tetap setuju. <strong>Hard fork</strong> memperlebar gerbang: ada block yang diterima aturan baru tetapi ditolak aturan lama, sehingga keduanya bisa berpisah jalan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Setelah split, pemilik punya dua koin",
        html: "Saat chain split terjadi, riwayat sebelum titik fork sama persis di kedua rantai. Maka pemilik koin saat itu otomatis memegang saldo yang sama di kedua jaringan. Setelah berpisah, harga, komunitas, dan pengembangan kedua koin berjalan sendiri-sendiri.",
      },
      {
        type: "video",
        comp: "ForkBlockchainVideo",
        title: "Saat Komunitas Berpisah Jalan",
        caption: "Bagaimana satu rantai terbelah menjadi dua koin saat aturan baru tidak diterima semua orang.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Vitalik_Buterin_TechCrunch_London_2015_(cropped).jpg?width=400",
        alt: "Vitalik Buterin, salah satu pendiri Ethereum",
        caption: "Vitalik Buterin, pendiri Ethereum. Fork The DAO 2016 melahirkan Ethereum dan Ethereum Classic.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Skala peristiwa The DAO yang memicu hard fork Ethereum 2016",
        unit: "juta ETH",
        source: "data peristiwa The DAO, Juni 2016 (angka dibulatkan)",
        note: "Penyerang menguras sekitar 3,6 juta ETH dari total 12,7 juta ETH yang terkumpul, memicu perdebatan apakah perlu memutar balik rantai.",
        data: [
          { label: "Terkumpul The DAO", value: 12.7, color: "#627eea" },
          { label: "Dikuras penyerang", value: 3.6, color: "#f7931a" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memilih ikut rantai mana saat split",
        html: "Seorang pemegang 10 koin saat sebuah hard fork terjadi mendapati saldonya tersalin di dua rantai: 10 koin di rantai aturan baru dan 10 koin di rantai aturan lama. Total kepemilikannya jadi 20 koin dari dua jaringan berbeda, tetapi nilai gabungan keduanya belum tentu lebih besar dari sebelum split karena likuiditas, penambang, dan komunitas terbagi. Ia harus memutuskan rantai mana yang ia dukung dan gunakan.",
      },
      {
        type: "case",
        title: "Sejarah: The DAO dan lahirnya Ethereum Classic (2016)",
        html: "Pada <strong>2016</strong> sebuah proyek bernama <strong>The DAO</strong> menggalang sekitar 12,7 juta ETH. Pada <strong>17 Juni 2016</strong> seorang penyerang memanfaatkan celah kode dan menguras sekitar 3,6 juta ETH. Komunitas Ethereum lalu menggelar <strong>hard fork</strong> pada <strong>20 Juli 2016</strong> untuk memutar balik pencurian itu. Sebagian peserta menolak, dengan alasan 'kode adalah hukum', dan tetap di rantai lama yang kini dikenal sebagai <strong>Ethereum Classic (ETC)</strong>, sementara rantai hasil fork menjadi <strong>Ethereum (ETH)</strong>. Setahun kemudian, pada <strong>1 Agustus 2017</strong>, hard fork serupa memecah Bitcoin menjadi <strong>Bitcoin (BTC)</strong> dan <strong>Bitcoin Cash (BCH)</strong>.",
      },
      {
        type: "calcExercise",
        prompt:
          "Penyerang The DAO menguras sekitar 3,6 juta ETH dari total 12,7 juta ETH yang terkumpul. Berapa persen dana yang dikuras? (bulatkan ke bilangan bulat)",
        answer: 28,
        tolerance: 2,
        suffix: "%",
        solution:
          "3,6 / 12,7 = 0,283, yaitu sekitar <strong>28%</strong> dana The DAO dikuras. Skala sebesar ini yang membuat komunitas memilih hard fork untuk memutar baliknya.",
        hint: "Bagi jumlah yang dikuras dengan total terkumpul, lalu kalikan 100.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap ciri atau peristiwa: soft fork atau hard fork?",
        buckets: ["Soft fork", "Hard fork"],
        items: [
          { text: "Memperketat aturan, kompatibel ke belakang", bucket: "Soft fork" },
          { text: "Node lama tetap menerima block baru", bucket: "Soft fork" },
          { text: "Node lama menolak block baru", bucket: "Hard fork" },
          { text: "Bisa berujung dua koin terpisah", bucket: "Hard fork" },
          { text: "Pemisahan Ethereum dan Ethereum Classic (2016)", bucket: "Hard fork" },
          { text: "Pemisahan Bitcoin dan Bitcoin Cash (2017)", bucket: "Hard fork" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Soft fork memperketat aturan dan kompatibel ke belakang, jaringan tetap utuh.",
          "Hard fork mengubah aturan secara tidak kompatibel dan bisa memecah rantai.",
          "Chain split menyalin riwayat lama, jadi pemilik memegang koin di kedua rantai.",
          "The DAO 2016 memicu hard fork yang melahirkan Ethereum dan Ethereum Classic.",
          "Bitcoin Cash lahir dari hard fork Bitcoin pada 1 Agustus 2017.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa ciri utama soft fork?",
            options: ["Node lama menolak block baru", "Memperketat aturan dan tetap kompatibel ke belakang", "Selalu memecah rantai jadi dua", "Menghapus seluruh riwayat"],
            answer: 1,
            explain: "Soft fork mempersempit aturan sehingga block baru tetap diterima node lama.",
          },
          {
            q: "Kapan hard fork bisa berujung chain split?",
            options: ["Selalu, tanpa kecuali", "Saat sebagian komunitas bertahan di aturan lama", "Hanya jika tidak ada penambang", "Tidak pernah"],
            answer: 1,
            explain: "Bila ada kelompok yang tetap menjalankan aturan lama, rantai terbelah jadi dua jaringan.",
          },
          {
            q: "Peristiwa apa yang memicu hard fork Ethereum pada 2016?",
            options: ["Halving Bitcoin", "Peretasan The DAO yang menguras jutaan ETH", "Genesis block Ethereum", "Penemuan Merkle tree"],
            answer: 1,
            explain: "Penyerang menguras sekitar 3,6 juta ETH dari The DAO, memicu fork untuk memutar baliknya.",
          },
          {
            q: "Apa nama rantai yang menolak fork dan bertahan di aturan lama?",
            options: ["Bitcoin Cash", "Ethereum Classic", "Litecoin", "Dogecoin"],
            answer: 1,
            explain: "Kelompok 'kode adalah hukum' bertahan di rantai lama yang menjadi Ethereum Classic (ETC).",
          },
          {
            q: "Saat chain split terjadi, apa yang terjadi pada saldo pemilik koin?",
            options: ["Saldo hilang seluruhnya", "Tersalin di kedua rantai sehingga ia punya koin di dua jaringan", "Otomatis pindah ke bank", "Berkurang setengah"],
            answer: 1,
            explain: "Riwayat sebelum fork sama, jadi saldo lama muncul identik di kedua rantai.",
          },
        ],
      },
    ],
  },
];
