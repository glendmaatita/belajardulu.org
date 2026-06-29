import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "hash-sha256",
    levelId: "kriptografi",
    order: 1,
    title: "Fungsi Hash & SHA-256",
    summary:
      "Fungsi hash mengubah data apa pun menjadi sidik jari digital tetap. Kenali sifatnya dan SHA-256 lewat simulator efek longsor.",
    durationMin: 14,
    tags: ["kriptografi", "hash", "sha256"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Fungsi hash</strong> adalah mesin matematika yang menerima data apa pun, sependek satu huruf atau sepanjang satu buku, lalu mengubahnya menjadi sebuah <strong>sidik jari digital</strong> dengan panjang tetap. Sidik jari ini disebut <strong>hash</strong>. Inilah pondasi keamanan hampir semua cryptocurrency.",
      },
      {
        type: "paragraph",
        html: "Bitcoin memakai fungsi hash bernama <strong>SHA-256</strong>. Berapa pun panjang masukannya, keluarannya selalu <strong>256 bit</strong>, yang ditulis sebagai <strong>64 karakter heksadesimal</strong> (0 sampai 9 dan a sampai f). Mengubah satu titik kecil pada masukan akan mengacak total seluruh hasilnya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Empat sifat fungsi hash kriptografis",
        html: "<strong>Deterministik</strong> (masukan sama selalu memberi hash sama), <strong>satu arah</strong> (hash tidak bisa dibalik jadi data asli), <strong>tahan tabrakan</strong> (sangat sulit menemukan dua masukan dengan hash sama), dan <strong>efek longsor</strong> (ubah satu bit, separuh keluaran berubah).",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Ketik sebuah teks, lalu ubah satu huruf saja. Perhatikan bagaimana <strong>seluruh hash berubah total</strong>. Itulah efek longsor yang membuat hash sulit dipalsukan.",
      },
      { type: "widget", widget: "SimulatorHashKripto" },
      {
        type: "video",
        comp: "MerkleTreeVideo",
        title: "Hash Menyusun Pohon Bukti",
        caption: "Bagaimana banyak hash digabung berlapis menjadi satu sidik jari ringkas yang menjaga keutuhan ribuan data.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/SHA-2.svg?width=400",
        alt: "Diagram satu putaran kompresi fungsi hash SHA-2/SHA-256",
        caption: "Skema kerja satu putaran SHA-2: data diaduk berulang lewat operasi bit sehingga keluaran sulit ditebak balik.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Panjang Keluaran Beberapa Fungsi Hash",
        unit: "bit keluaran",
        source: "spesifikasi resmi tiap algoritma",
        note: "SHA-256 selalu menghasilkan 256 bit, berapa pun panjang masukan; angka bit yang lebih besar memberi ruang nilai jauh lebih luas.",
        data: [
          { label: "MD5", value: 128, color: "#94a3b8" },
          { label: "SHA-1", value: 160, color: "#f59e0b" },
          { label: "SHA-256", value: 256, color: "#f7931a" },
          { label: "SHA-512", value: 512, color: "#627eea" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Efek longsor menjaga kejujuran data",
        html: "Sebuah dokumen kontrak di-hash dan hasilnya 64 karakter disimpan terpisah. Bila ada yang diam-diam mengubah satu angka nominal di dokumen, hash baru yang dihitung ulang akan <strong>benar-benar berbeda</strong> dari hash tersimpan. Pemeriksa langsung tahu dokumen telah diutak-atik tanpa harus membaca seluruh isinya. Inilah cara blockchain mendeteksi pemalsuan: cukup bandingkan hash.",
      },
      {
        type: "calcExercise",
        prompt:
          "SHA-256 menghasilkan keluaran sepanjang 256 bit yang ditulis dalam heksadesimal. Tiap karakter heksadesimal mewakili 4 bit. Berapa banyak karakter heksadesimal pada satu hash SHA-256?",
        answer: 64,
        tolerance: 0,
        suffix: "karakter",
        solution:
          "256 bit dibagi 4 bit per karakter = <strong>64 karakter heksadesimal</strong>. Itu sebabnya hash SHA-256 selalu tampil sebagai 64 karakter, berapa pun panjang masukannya.",
        hint: "Bagi jumlah bit dengan jumlah bit yang diwakili tiap karakter heksadesimal.",
      },
      {
        type: "classifyExercise",
        prompt: "Mana yang merupakan sifat benar fungsi hash kriptografis, dan mana yang keliru?",
        buckets: ["Sifat benar", "Keliru"],
        items: [
          { text: "Masukan sama selalu menghasilkan hash yang sama", bucket: "Sifat benar" },
          { text: "Hash bisa dibalik untuk mengembalikan data asli", bucket: "Keliru" },
          { text: "Mengubah satu bit masukan mengacak seluruh hash", bucket: "Sifat benar" },
          { text: "Mudah menemukan dua masukan berbeda dengan hash sama", bucket: "Keliru" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: SHA-256 dirancang NSA, dipublikasikan NIST 2001",
        html: "Keluarga fungsi hash <strong>SHA-2</strong>, yang mencakup SHA-256, dirancang oleh <strong>NSA</strong> (badan keamanan Amerika Serikat) dan dipublikasikan secara resmi oleh <strong>NIST</strong> pada tahun <strong>2001</strong>. Berbeda dengan banyak algoritma rahasia, SHA-256 bersifat terbuka sehingga bisa diteliti siapa pun. Ketika Satoshi Nakamoto merancang Bitcoin pada 2008, ia memilih SHA-256 justru karena sudah teruji bertahun tahun oleh komunitas kriptografi dunia.",
      },
      {
        type: "takeaways",
        items: [
          "Fungsi hash mengubah data apa pun menjadi sidik jari digital berpanjang tetap.",
          "SHA-256 selalu menghasilkan 256 bit atau 64 karakter heksadesimal.",
          "Sifat utamanya: deterministik, satu arah, tahan tabrakan, dan efek longsor.",
          "Efek longsor membuat perubahan sekecil apa pun langsung terdeteksi.",
          "SHA-256 dirancang NSA dan dipublikasikan NIST pada 2001, terbuka dan teruji.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Berapa panjang keluaran SHA-256?",
            options: ["128 bit", "256 bit", "512 bit", "64 bit"],
            answer: 1,
            explain: "SHA-256 selalu menghasilkan keluaran 256 bit, yaitu 64 karakter heksadesimal.",
          },
          {
            q: "Apa arti sifat 'satu arah' pada fungsi hash?",
            options: [
              "Hash bisa dibalik jadi data asli",
              "Hash tidak bisa dibalik menjadi data asli",
              "Hanya berlaku untuk teks pendek",
              "Hasilnya selalu berubah",
            ],
            answer: 1,
            explain: "Fungsi hash mudah dihitung maju, tetapi praktis mustahil dibalik ke data asli.",
          },
          {
            q: "Apa yang terjadi pada hash jika satu huruf masukan diubah?",
            options: [
              "Hanya satu karakter hash berubah",
              "Hash tidak berubah",
              "Seluruh hash berubah total",
              "Hash menjadi lebih panjang",
            ],
            answer: 2,
            explain: "Karena efek longsor, perubahan sekecil apa pun mengacak seluruh keluaran.",
          },
          {
            q: "Siapa yang merancang SHA-256 dan kapan dipublikasikan?",
            options: [
              "Satoshi Nakamoto, 2008",
              "NSA, dipublikasikan NIST 2001",
              "Vitalik Buterin, 2015",
              "Sebuah bank, 1999",
            ],
            answer: 1,
            explain: "SHA-2 dirancang NSA dan dipublikasikan resmi oleh NIST pada tahun 2001.",
          },
          {
            q: "Mengapa fungsi hash penting bagi blockchain?",
            options: [
              "Membuat transaksi gratis",
              "Mendeteksi perubahan data dengan membandingkan sidik jari",
              "Menyembunyikan saldo pengguna",
              "Mempercepat internet",
            ],
            answer: 1,
            explain: "Hash yang berubah langsung menandakan data telah diutak-atik.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kunci-publik-privat",
    levelId: "kriptografi",
    order: 2,
    title: "Kriptografi Kunci Publik & Private Key",
    summary:
      "Sepasang kunci yang saling terkait: private key dirahasiakan, public key dan address boleh dibagikan. Pahami alurnya lewat video.",
    durationMin: 14,
    tags: ["kriptografi", "private key", "public key", "address"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Kriptografi kunci publik</strong> bekerja dengan <strong>sepasang kunci</strong> yang saling terkait secara matematika: <strong>private key</strong> (kunci pribadi) dan <strong>public key</strong> (kunci publik). Yang ajaib, public key bisa dihitung dari private key, tetapi private key tidak bisa dihitung mundur dari public key.",
      },
      {
        type: "paragraph",
        html: "Dari private key lahir public key, dan dari public key lahir <strong>address</strong> (alamat dompet) yang bisa Anda bagikan untuk menerima dana. Urutannya selalu satu arah: private key &rarr; public key &rarr; address. Siapa pun memegang private key, dialah pemilik sah aset di dalamnya.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Jaga private key seperti nyawa",
        html: "Private key adalah satu satunya bukti kepemilikan. Bila bocor, siapa pun bisa memindahkan aset Anda. Bila hilang, tidak ada bank atau layanan yang bisa memulihkannya. <strong>Tidak ada tombol lupa sandi</strong> di dunia kripto.",
      },
      {
        type: "video",
        comp: "KunciKriptoVideo",
        title: "Dari Private Key ke Address",
        caption: "Menelusuri alur private key menurunkan public key dan address, lalu cara menandatangani dan memverifikasi transaksi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Public key boleh dibagikan",
        html: "Berbeda dari private key, <strong>public key dan address aman dibagikan</strong>. Orang lain memakai address Anda untuk mengirim dana, tetapi mereka tetap tidak bisa menebak private key Anda darinya.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Public_key_encryption.svg?width=400",
        alt: "Diagram enkripsi kunci publik dengan sepasang kunci",
        caption: "Sepasang kunci yang berbeda fungsi: yang satu dibagikan, yang lain dirahasiakan, tetapi keduanya saling terkait.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Mana yang Boleh Dibagikan, Mana yang Wajib Dirahasiakan",
        unit: "kategori kunci",
        source: "ilustrasi edukatif konsep kunci publik",
        note: "Hanya private key yang wajib dirahasiakan; public key dan address dirancang untuk dibagikan.",
        data: [
          { label: "Wajib rahasia (private key)", value: 1, color: "#ef4444" },
          { label: "Boleh dibagi (public key)", value: 1, color: "#22c55e" },
          { label: "Boleh dibagi (address)", value: 1, color: "#3b82f6" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menerima dana tanpa membuka rahasia",
        html: "Andi ingin dibayar dalam kripto. Ia cukup memberi pembayar <strong>address</strong> dompetnya, yang aman disebar di mana saja. Pembayar mengirim dana ke address itu. Selama hidup transaksi, Andi <strong>tidak pernah</strong> mengungkap private key-nya. Saat nanti ingin membelanjakan dana, Andi memakai private key untuk menandatangani transaksi tanpa membocorkannya ke jaringan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dalam alur kunci publik, ada tiga tahap berurutan: private key, public key, dan address. Berapa banyak tahap turunan yang dihasilkan setelah private key?",
        answer: 2,
        tolerance: 0,
        suffix: "tahap",
        solution:
          "Setelah private key, lahir public key lalu address, jadi <strong>2 tahap turunan</strong>. Arahnya selalu maju: private key &rarr; public key &rarr; address, tidak pernah mundur.",
        hint: "Hitung berapa item yang muncul setelah private key dalam rantai itu.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan istilah dengan definisinya.",
        pairs: [
          { left: "Private key", right: "Kunci rahasia, bukti kepemilikan aset" },
          { left: "Public key", right: "Kunci yang diturunkan dari private key, boleh dibagi" },
          { left: "Address", right: "Alamat dompet untuk menerima dana" },
          { left: "Seed phrase", right: "Rangkaian kata cadangan yang menurunkan kunci" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Lahirnya kriptografi kunci publik",
        html: "Sebelum 1976, mengamankan pesan selalu butuh kedua pihak berbagi satu kunci rahasia yang sama, sebuah masalah besar. Pada <strong>1976</strong>, Whitfield Diffie dan Martin Hellman memublikasikan gagasan <strong>kriptografi kunci publik</strong>: sepasang kunci berbeda, satu dibagikan dan satu dirahasiakan. Setahun kemudian, <strong>1977</strong>, algoritma <strong>RSA</strong> (Rivest, Shamir, Adleman) mewujudkannya secara praktis. Tanpa terobosan inilah, dompet kripto yang memakai pasangan private key dan public key tidak akan pernah ada.",
      },
      {
        type: "takeaways",
        items: [
          "Kriptografi kunci publik memakai sepasang kunci yang saling terkait.",
          "Alurnya satu arah: private key menurunkan public key, lalu address.",
          "Private key wajib dirahasiakan; public key dan address boleh dibagikan.",
          "Address dipakai untuk menerima dana tanpa membuka private key.",
          "Tidak ada pemulihan resmi: kehilangan private key berarti kehilangan aset.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa urutan turunan yang benar?",
            options: [
              "Address menurunkan public key menurunkan private key",
              "Private key menurunkan public key menurunkan address",
              "Public key menurunkan private key",
              "Semua dihasilkan terpisah tanpa kaitan",
            ],
            answer: 1,
            explain: "Arahnya selalu private key lalu public key lalu address, satu arah.",
          },
          {
            q: "Mana yang WAJIB dirahasiakan?",
            options: ["Address", "Public key", "Private key", "Nomor transaksi"],
            answer: 2,
            explain: "Private key adalah satu satunya bukti kepemilikan dan harus dirahasiakan.",
          },
          {
            q: "Apa fungsi address?",
            options: [
              "Menyembunyikan private key dari pemiliknya",
              "Alamat untuk menerima dana yang boleh dibagikan",
              "Menggantikan seluruh blockchain",
              "Membatalkan transaksi",
            ],
            answer: 1,
            explain: "Address dibagikan agar orang lain bisa mengirim dana kepada kita.",
          },
          {
            q: "Bisakah private key dihitung dari public key?",
            options: [
              "Ya, dengan mudah",
              "Tidak, secara praktis mustahil",
              "Ya, oleh bank",
              "Hanya saat malam hari",
            ],
            answer: 1,
            explain: "Public key dihitung dari private key, tetapi arah sebaliknya praktis mustahil.",
          },
          {
            q: "Apa yang terjadi jika private key hilang?",
            options: [
              "Layanan pelanggan memulihkannya",
              "Aset bisa diakses bank",
              "Aset praktis tidak bisa diakses lagi",
              "Otomatis dikirim ke address baru",
            ],
            answer: 2,
            explain: "Tanpa private key tidak ada cara sah mengakses aset; tidak ada pemulihan resmi.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "tanda-tangan-ecc",
    levelId: "kriptografi",
    order: 3,
    title: "Tanda Tangan Digital & Elliptic Curve",
    summary:
      "Tanda tangan digital membuktikan kepemilikan tanpa membuka private key. Kenali ECDSA, kurva secp256k1, dan mengapa ECC lebih efisien daripada RSA.",
    durationMin: 15,
    tags: ["kriptografi", "tanda tangan digital", "ecdsa", "secp256k1"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Tanda tangan digital</strong> adalah cara membuktikan bahwa Anda pemilik sah sebuah aset <strong>tanpa pernah membuka private key</strong>. Anda memakai private key untuk menandatangani sebuah transaksi, lalu jaringan memverifikasi tanda tangan itu hanya dengan public key Anda. Private key tetap rahasia sepenuhnya.",
      },
      {
        type: "paragraph",
        html: "Bitcoin dan Ethereum memakai algoritma <strong>ECDSA</strong> (tanda tangan digital berbasis kurva eliptik) di atas kurva khusus bernama <strong>secp256k1</strong>. Pendekatan ini disebut <strong>kriptografi kurva eliptik</strong> atau ECC, dan ia memberi keamanan kuat dengan kunci yang jauh lebih pendek daripada metode lama.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tanda tangan = bukti tanpa pengakuan rahasia",
        html: "Verifikasi tanda tangan menjawab dua hal: transaksi benar dibuat oleh pemilik private key, dan isinya tidak diubah setelah ditandatangani. Semua itu dibuktikan <strong>hanya dengan public key</strong>, tanpa private key pernah terlihat.",
      },
      {
        type: "video",
        comp: "KunciKriptoVideo",
        title: "Menandatangani & Memverifikasi",
        caption: "Bagaimana private key menandatangani transaksi dan jaringan memverifikasinya cukup dengan public key.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa ECC lebih efisien daripada RSA",
        html: "Untuk tingkat keamanan setara, <strong>ECC butuh kunci jauh lebih pendek</strong> daripada RSA. Kunci ECC 256 bit kira-kira sebanding dengan kunci RSA 3072 bit. Kunci lebih pendek berarti tanda tangan lebih kecil, hitungan lebih ringan, dan blok lebih hemat ruang.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Digital_Signature_diagram.svg?width=400",
        alt: "Diagram alur pembuatan dan verifikasi tanda tangan digital",
        caption: "Penanda tangan memakai private key untuk membentuk tanda tangan; verifikator memeriksanya cukup dengan public key.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Ukuran Kunci untuk Keamanan Setara: ECC vs RSA",
        unit: "bit panjang kunci",
        source: "rekomendasi NIST tingkat keamanan setara",
        note: "Kunci ECC 256 bit memberi keamanan setara dengan kunci RSA 3072 bit, jauh lebih ringkas.",
        data: [
          { label: "ECC 128-bit aman", value: 256, color: "#22c55e" },
          { label: "RSA 128-bit aman", value: 3072, color: "#ef4444" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membelanjakan dana dengan aman",
        html: "Budi ingin mengirim 0,5 BTC. Dompetnya menyusun transaksi lalu menandatanganinya dengan <strong>private key</strong> memakai ECDSA di kurva secp256k1. Yang disiarkan ke jaringan hanyalah transaksi dan tanda tangannya, <strong>bukan</strong> private key. Ribuan node memverifikasi tanda tangan dengan public key Budi. Bila satu huruf transaksi diubah penyerang, verifikasi langsung gagal dan transaksi ditolak.",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk keamanan setara, kunci ECC butuh 256 bit sedangkan RSA butuh 3072 bit. Berapa kali lebih panjang kunci RSA dibandingkan kunci ECC?",
        answer: 12,
        tolerance: 0,
        suffix: "kali",
        solution:
          "3072 dibagi 256 = <strong>12 kali</strong>. Untuk keamanan yang sama, kunci RSA harus 12 kali lebih panjang, itulah mengapa ECC lebih hemat dan efisien.",
        hint: "Bagi panjang kunci RSA dengan panjang kunci ECC.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan pernyataan berikut: terkait ECC/ECDSA atau RSA?",
        buckets: ["ECC/ECDSA", "RSA"],
        items: [
          { text: "Kurva secp256k1 dipakai Bitcoin dan Ethereum", bucket: "ECC/ECDSA" },
          { text: "Butuh kunci 3072 bit untuk keamanan 128 bit", bucket: "RSA" },
          { text: "Kunci 256 bit sudah memberi keamanan kuat", bucket: "ECC/ECDSA" },
          { text: "Kunci jauh lebih panjang untuk keamanan setara", bucket: "RSA" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: secp256k1 dipilih Satoshi untuk Bitcoin",
        html: "Kurva <strong>secp256k1</strong> sudah ada dalam standar kriptografi sebelum Bitcoin, tetapi jarang dipakai dibanding kurva lain. Saat merancang Bitcoin pada <strong>2008 sampai 2009</strong>, Satoshi Nakamoto memilihnya, antara lain karena parameternya tersusun rapi sehingga lebih sulit dicurigai mengandung pintu belakang. Sejak itu kurva yang dulu kurang populer ini menjadi salah satu kurva eliptik paling banyak dipakai di dunia, ikut dipakai pula oleh Ethereum.",
      },
      {
        type: "takeaways",
        items: [
          "Tanda tangan digital membuktikan kepemilikan tanpa membuka private key.",
          "Verifikasi memastikan pembuat sah dan isi transaksi tidak diubah.",
          "Bitcoin dan Ethereum memakai ECDSA pada kurva secp256k1.",
          "ECC memberi keamanan setara RSA dengan kunci jauh lebih pendek.",
          "Kunci ECC 256 bit sebanding dengan kunci RSA 3072 bit.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dibuktikan tanda tangan digital?",
            options: [
              "Bahwa private key sudah dibagikan",
              "Pemilik sah membuat transaksi tanpa membuka private key",
              "Bahwa saldo bertambah",
              "Bahwa jaringan offline",
            ],
            answer: 1,
            explain: "Tanda tangan membuktikan kepemilikan sah tanpa pernah mengungkap private key.",
          },
          {
            q: "Kurva eliptik apa yang dipakai Bitcoin dan Ethereum?",
            options: ["Curve25519", "secp256k1", "P-521", "brainpool"],
            answer: 1,
            explain: "Keduanya memakai kurva secp256k1 dengan algoritma ECDSA.",
          },
          {
            q: "Mengapa ECC dianggap lebih efisien daripada RSA?",
            options: [
              "Tidak butuh kunci sama sekali",
              "Kunci lebih pendek untuk keamanan setara",
              "Selalu gratis",
              "Tidak bisa diverifikasi",
            ],
            answer: 1,
            explain: "ECC mencapai keamanan setara dengan kunci yang jauh lebih pendek.",
          },
          {
            q: "Kunci ECC 256 bit kira-kira setara dengan kunci RSA berapa bit?",
            options: ["256 bit", "512 bit", "1024 bit", "3072 bit"],
            answer: 3,
            explain: "Untuk keamanan setara, RSA butuh sekitar 3072 bit dibanding ECC 256 bit.",
          },
          {
            q: "Apa yang dipakai jaringan untuk memverifikasi tanda tangan?",
            options: ["Private key", "Public key", "Seed phrase", "Nomor telepon"],
            answer: 1,
            explain: "Verifikasi cukup memakai public key; private key tetap rahasia.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "seed-hd-wallet",
    levelId: "kriptografi",
    order: 4,
    title: "Seed Phrase & HD Wallet",
    summary:
      "Seed phrase 12 atau 24 kata adalah cadangan induk seluruh dompet. HD wallet menurunkan banyak kunci dari satu seed. Kenali standar BIP-39 dan BIP-32.",
    durationMin: 14,
    tags: ["kriptografi", "seed phrase", "bip39", "hd wallet"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Seed phrase</strong> (frasa benih) adalah rangkaian <strong>12 atau 24 kata</strong> yang menjadi cadangan induk seluruh dompet Anda. Dari deretan kata inilah semua private key, public key, dan address Anda diturunkan. Menyimpan seed phrase sama dengan menyimpan kunci ke seluruh aset.",
      },
      {
        type: "paragraph",
        html: "Daftar kata baku berasal dari standar <strong>BIP-39</strong> yang berisi <strong>2048 kata</strong>. Karena 2048 sama dengan 2 pangkat 11, tiap kata mewakili <strong>11 bit</strong> informasi. Seed ini lalu dipakai <strong>HD wallet</strong> (standar BIP-32) untuk menurunkan banyak sekali kunci dan address secara berurutan dari satu benih tunggal.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Seed phrase adalah harta paling rahasia",
        html: "Siapa pun yang tahu 12 atau 24 kata Anda bisa menguasai seluruh aset. <strong>Jangan pernah</strong> mengetiknya di situs, memotretnya, atau menyimpannya di cloud. Tulis di kertas atau logam, simpan luring di tempat aman.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Satu seed, ribuan kunci",
        html: "HD wallet (Hierarchical Deterministic) memakai <strong>satu seed</strong> untuk menurunkan deret kunci tak terbatas secara berurutan. Cukup cadangkan seed sekali, dan seluruh address masa depan otomatis ikut terlindungi.",
      },
      {
        type: "video",
        comp: "SeedPhraseVideo",
        title: "Satu Frasa, Seluruh Dompet",
        caption: "Bagaimana 12 atau 24 kata menjadi benih yang menurunkan semua kunci dan address dompet Anda.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bitcoin_paper_wallet_generated_at_bitaddress.jpg?width=400",
        alt: "Paper wallet Bitcoin yang memuat address publik dan private key",
        caption: "Contoh paper wallet: address publik di satu sisi untuk menerima, private key di sisi lain yang wajib dirahasiakan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Entropi Seed Phrase BIP-39 menurut Jumlah Kata",
        unit: "bit entropi",
        source: "spesifikasi BIP-39",
        note: "Seed 12 kata memberi 128 bit entropi, sedangkan 24 kata memberi 256 bit, keduanya sangat sulit ditebak.",
        data: [
          { label: "12 kata", value: 128, color: "#f7931a" },
          { label: "24 kata", value: 256, color: "#627eea" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memulihkan dompet di perangkat baru",
        html: "Dompet di ponsel Citra rusak. Untungnya ia pernah menulis <strong>12 kata seed phrase</strong> di kertas dan menyimpannya aman. Di ponsel baru, ia memasang aplikasi dompet, memilih opsi pulihkan, lalu mengetik 12 kata itu sesuai urutan. Seketika seluruh private key dan address-nya lahir kembali persis sama, lengkap dengan saldonya. Tanpa server siapa pun, cukup seed phrase.",
      },
      {
        type: "calcExercise",
        prompt:
          "Daftar BIP-39 berisi 2048 kata, sehingga tiap kata mewakili 11 bit. Seed 12 kata mengandung 12 x 11 = 132 bit, dan 4 bit di antaranya adalah checksum. Berapa bit entropi sebenarnya pada seed 12 kata?",
        answer: 128,
        tolerance: 0,
        suffix: "bit",
        solution:
          "132 bit total dikurangi 4 bit checksum = <strong>128 bit entropi</strong>. Itulah sebabnya seed 12 kata disebut memberi keamanan 128 bit, setara dengan banyak kunci kriptografi modern.",
        hint: "Kurangi total bit (132) dengan bit checksum (4).",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan istilah dengan keterangannya.",
        pairs: [
          { left: "Seed phrase", right: "12 atau 24 kata cadangan induk dompet" },
          { left: "BIP-39", right: "Standar daftar 2048 kata untuk seed" },
          { left: "HD wallet", right: "Menurunkan banyak kunci dari satu seed (BIP-32)" },
          { left: "Checksum", right: "Bit pemeriksa agar urutan kata tidak salah ketik" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Standar BIP-39 lahir 2013",
        html: "Sebelum ada standar, mencadangkan dompet kripto merepotkan dan rawan salah. Pada <strong>2013</strong>, proposal <strong>BIP-39</strong> memperkenalkan cara mengubah angka acak menjadi deretan kata yang mudah dibaca manusia, lengkap dengan daftar 2048 kata baku dan bit checksum. Sebelumnya, <strong>BIP-32</strong> pada 2012 sudah memperkenalkan gagasan HD wallet. Gabungan keduanya membuat satu frasa kata bisa mencadangkan seluruh dompet, dan kini menjadi standar hampir semua dompet modern.",
      },
      {
        type: "takeaways",
        items: [
          "Seed phrase 12 atau 24 kata adalah cadangan induk seluruh dompet.",
          "BIP-39 memakai daftar 2048 kata, tiap kata mewakili 11 bit.",
          "Seed 12 kata memberi 128 bit entropi setelah 4 bit checksum.",
          "HD wallet (BIP-32) menurunkan banyak kunci dan address dari satu seed.",
          "Standar BIP-39 lahir 2013 dan kini dipakai hampir semua dompet.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Berapa jumlah kata umum pada seed phrase BIP-39?",
            options: ["6 atau 9 kata", "12 atau 24 kata", "Selalu 100 kata", "1 kata"],
            answer: 1,
            explain: "Seed phrase BIP-39 umumnya terdiri dari 12 atau 24 kata.",
          },
          {
            q: "Berapa banyak kata dalam daftar baku BIP-39?",
            options: ["256 kata", "1024 kata", "2048 kata", "4096 kata"],
            answer: 2,
            explain: "BIP-39 memakai daftar 2048 kata, yaitu 2 pangkat 11, sehingga tiap kata 11 bit.",
          },
          {
            q: "Apa fungsi HD wallet (BIP-32)?",
            options: [
              "Menghapus seed phrase",
              "Menurunkan banyak kunci dari satu seed",
              "Menyimpan saldo di bank",
              "Membatalkan transaksi",
            ],
            answer: 1,
            explain: "HD wallet menurunkan deret kunci dan address tak terbatas dari satu seed.",
          },
          {
            q: "Berapa bit entropi pada seed 12 kata?",
            options: ["64 bit", "128 bit", "132 bit", "256 bit"],
            answer: 1,
            explain: "132 bit total dikurangi 4 bit checksum menghasilkan 128 bit entropi.",
          },
          {
            q: "Apa yang harus dilakukan dengan seed phrase?",
            options: [
              "Mengunggahnya ke cloud",
              "Membagikannya ke teman",
              "Menyimpannya luring di tempat aman dan rahasia",
              "Mengetiknya di sembarang situs",
            ],
            answer: 2,
            explain: "Seed phrase wajib disimpan luring dan rahasia karena menguasai seluruh aset.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "simetris-asimetris",
    levelId: "kriptografi",
    order: 5,
    title: "Enkripsi Simetris vs Asimetris",
    summary:
      "Satu kunci tunggal yang dipakai bersama, atau sepasang kunci yang berbeda peran. Pahami bedanya dan mengapa kripto memilih kriptografi asimetris.",
    durationMin: 14,
    tags: ["kriptografi", "simetris", "asimetris", "kunci publik"],
    blocks: [
      {
        type: "paragraph",
        html: "Ada dua keluarga besar cara mengamankan data. <strong>Enkripsi simetris</strong> memakai <strong>satu kunci tunggal</strong> yang sama untuk mengunci (enkripsi) dan membuka (dekripsi). <strong>Enkripsi asimetris</strong> memakai <strong>sepasang kunci</strong> berbeda yang saling terkait: satu untuk mengunci, satu lagi untuk membuka.",
      },
      {
        type: "paragraph",
        html: "Pada simetris, kedua pihak harus lebih dulu <strong>berbagi kunci rahasia yang sama</strong>. Di situ letak masalahnya: bagaimana mengirim kunci itu dengan aman tanpa disadap? Pada asimetris, tiap orang cukup menyebarkan <strong>public key</strong>-nya dan menyimpan <strong>private key</strong> sendiri, sehingga tidak ada rahasia yang perlu dipertukarkan lebih dulu.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Inti perbedaannya",
        html: "Simetris: <strong>satu kunci</strong>, cepat, tetapi sulit dibagikan dengan aman. Asimetris: <strong>sepasang kunci</strong>, lebih lambat menghitung, tetapi memecahkan masalah pembagian kunci karena public key boleh disebar bebas.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Symmetric_key_encryption.svg?width=400",
        alt: "Diagram enkripsi simetris dengan satu kunci yang sama untuk mengunci dan membuka",
        caption: "Enkripsi simetris: kunci yang sama dipakai untuk mengenkripsi dan mendekripsi, jadi harus dibagikan lebih dulu.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Asymmetric_cryptography_-_step_2.svg?width=400",
        alt: "Diagram kriptografi asimetris dengan sepasang kunci publik dan privat",
        caption: "Enkripsi asimetris: public key mengunci, hanya private key pasangannya yang bisa membuka.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "KunciKriptoVideo",
        title: "Mengapa Kripto Memakai Sepasang Kunci",
        caption: "Menelusuri bagaimana sepasang kunci yang berbeda peran menyelesaikan masalah berbagi rahasia.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kenapa cryptocurrency memilih asimetris",
        html: "Di jaringan publik yang dipakai jutaan orang asing, mustahil tiap pasang orang lebih dulu bertukar kunci rahasia. Kripto memakai <strong>asimetris</strong> agar siapa pun bisa menerima dana lewat public key/address, sementara hak membelanjakan dijaga oleh private key yang tak pernah dibagikan.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Masalah Pembagian Kunci: Kunci Rahasia yang Dibutuhkan untuk N Orang",
        unit: "kunci rahasia bersama",
        source: "rumus pasangan N(N-1)/2, ilustrasi edukatif",
        note: "Skema simetris butuh satu kunci rahasia untuk tiap pasang orang, sehingga meledak; skema asimetris butuh 0 kunci rahasia bersama.",
        data: [
          { label: "5 orang", value: 10, color: "#ef4444" },
          { label: "10 orang", value: 45, color: "#f59e0b" },
          { label: "20 orang", value: 190, color: "#f7931a" },
          { label: "50 orang", value: 1225, color: "#627eea" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengamankan obrolan grup",
        html: "Sebuah grup berisi <strong>10 orang</strong> ingin saling berkirim pesan rahasia secara berpasangan. Dengan skema <strong>simetris</strong>, tiap pasang butuh kunci rahasia sendiri, yaitu 10 x 9 / 2 = <strong>45 kunci</strong> yang semuanya harus dipertukarkan diam-diam. Dengan skema <strong>asimetris</strong>, tiap orang cukup mengumumkan satu public key, total 10 public key terbuka, dan <strong>tidak ada satu pun kunci rahasia</strong> yang perlu dikirim. Itulah kenapa asimetris menang di jaringan terbuka.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada skema simetris, tiap pasang orang butuh satu kunci rahasia bersama. Untuk 10 orang, berapa kunci rahasia yang harus dibuat dan dibagikan? (gunakan rumus pasangan N x (N-1) / 2)",
        answer: 45,
        tolerance: 0,
        suffix: "kunci",
        solution:
          "10 x 9 / 2 = <strong>45 kunci</strong>. Jumlah ini tumbuh sangat cepat seiring bertambahnya orang, dan itulah masalah pembagian kunci yang dipecahkan kriptografi asimetris.",
        hint: "Masukkan N = 10 ke rumus N x (N-1) / 2.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan ciri berikut: termasuk enkripsi simetris atau asimetris?",
        buckets: ["Simetris", "Asimetris"],
        items: [
          { text: "Memakai satu kunci yang sama untuk mengunci dan membuka", bucket: "Simetris" },
          { text: "Memakai sepasang kunci publik dan privat", bucket: "Asimetris" },
          { text: "Public key boleh disebar bebas, private key dirahasiakan", bucket: "Asimetris" },
          { text: "Kedua pihak harus lebih dulu berbagi kunci rahasia yang sama", bucket: "Simetris" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Diffie-Hellman 1976 dan RSA 1977 membuka era kunci publik",
        html: "Hingga pertengahan 1970-an, hampir semua kriptografi bersifat simetris dan terganjal masalah berbagi kunci. Pada <strong>1976</strong>, Whitfield Diffie dan Martin Hellman menerbitkan makalah <strong>New Directions in Cryptography</strong> yang memperkenalkan gagasan <strong>pertukaran kunci Diffie-Hellman</strong>, cara dua pihak menyepakati rahasia bersama tanpa pernah mengirimnya utuh. Setahun kemudian, pada <strong>1977</strong>, Rivest, Shamir, dan Adleman merancang algoritma <strong>RSA</strong>, sistem kunci publik praktis pertama. Dua tonggak inilah yang melahirkan kriptografi kunci publik, fondasi yang puluhan tahun kemudian dipakai oleh cryptocurrency.",
      },
      {
        type: "takeaways",
        items: [
          "Enkripsi simetris memakai satu kunci yang sama untuk mengunci dan membuka.",
          "Enkripsi asimetris memakai sepasang kunci publik dan privat yang berbeda peran.",
          "Simetris cepat tetapi sulit membagikan kunci dengan aman di jaringan terbuka.",
          "Asimetris memecahkan masalah pembagian kunci sehingga cocok untuk kripto.",
          "Diffie-Hellman (1976) dan RSA (1977) membuka era kriptografi kunci publik.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa ciri utama enkripsi simetris?",
            options: [
              "Memakai sepasang kunci berbeda",
              "Memakai satu kunci yang sama untuk mengunci dan membuka",
              "Tidak memakai kunci sama sekali",
              "Hanya bisa mengunci, tidak bisa membuka",
            ],
            answer: 1,
            explain: "Simetris memakai satu kunci tunggal yang sama untuk enkripsi dan dekripsi.",
          },
          {
            q: "Mengapa cryptocurrency memilih kriptografi asimetris?",
            options: [
              "Karena lebih lambat",
              "Karena tidak perlu kunci",
              "Karena public key bisa disebar bebas tanpa membagikan rahasia",
              "Karena hanya bekerja luring",
            ],
            answer: 2,
            explain: "Asimetris memungkinkan menerima dana lewat public key tanpa pernah membagikan private key.",
          },
          {
            q: "Apa kelemahan utama skema simetris di jaringan terbuka?",
            options: [
              "Tidak bisa mengenkripsi",
              "Sulit membagikan kunci rahasia dengan aman",
              "Selalu salah hitung",
              "Tidak punya kunci",
            ],
            answer: 1,
            explain: "Kedua pihak harus berbagi kunci rahasia lebih dulu, dan itu rawan disadap.",
          },
          {
            q: "Untuk 10 orang dengan skema simetris berpasangan, berapa kunci rahasia dibutuhkan?",
            options: ["10 kunci", "20 kunci", "45 kunci", "100 kunci"],
            answer: 2,
            explain: "10 x 9 / 2 = 45 kunci, sedangkan asimetris butuh 0 kunci rahasia bersama.",
          },
          {
            q: "Dua tonggak yang membuka era kriptografi kunci publik adalah?",
            options: [
              "AES dan DES",
              "Diffie-Hellman 1976 dan RSA 1977",
              "SHA-1 dan MD5",
              "Bitcoin dan Ethereum",
            ],
            answer: 1,
            explain: "Pertukaran kunci Diffie-Hellman (1976) dan algoritma RSA (1977) memulai era kunci publik.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "alamat-dari-kunci",
    levelId: "kriptografi",
    order: 6,
    title: "Dari Private Key ke Address",
    summary:
      "Menelusuri alur lengkap private key menjadi address: turunkan public key, lalu padatkan lewat hashing SHA-256 dan RIPEMD-160 menjadi alamat dompet.",
    durationMin: 15,
    tags: ["kriptografi", "address", "public key", "hashing", "bitcoin"],
    blocks: [
      {
        type: "paragraph",
        html: "Address dompet yang Anda bagikan bukan public key mentah, melainkan hasil <strong>memadatkan</strong> public key lewat beberapa langkah hashing. Alurnya satu arah: <strong>private key &rarr; public key &rarr; hash &rarr; address</strong>. Tiap langkah memberi keamanan atau keringkasan tambahan.",
      },
      {
        type: "paragraph",
        html: "Di Bitcoin, public key tidak langsung dijadikan address. Ia dihash dulu dengan <strong>SHA-256</strong>, lalu hasilnya dihash lagi dengan <strong>RIPEMD-160</strong> menjadi sidik jari 160 bit. Sidik jari itu diberi byte versi dan checksum, lalu dikodekan menjadi rangkaian huruf-angka yang kita kenal sebagai <strong>address</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Empat langkah, satu arah",
        html: "<strong>1)</strong> Private key menurunkan public key lewat ECDSA secp256k1. <strong>2)</strong> Public key dihash SHA-256. <strong>3)</strong> Hasilnya dihash RIPEMD-160 jadi 20 byte. <strong>4)</strong> Ditambah versi + checksum lalu dikodekan jadi address. Tidak ada langkah yang bisa dibalik.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Public_key_encryption.svg?width=400",
        alt: "Diagram sepasang kunci publik dan privat yang menjadi titik awal pembentukan address",
        caption: "Address berakar dari public key, yang sendiri diturunkan dari private key; arah turunan selalu maju.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "KunciKriptoVideo",
        title: "Dari Private Key ke Address",
        caption: "Menelusuri alur private key menurunkan public key, lalu dipadatkan lewat hashing menjadi address.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Ketik sebuah teks lalu ubah satu huruf dan amati hash-nya berubah total. Itulah langkah hashing yang sama yang memadatkan public key menjadi sidik jari pembentuk address.",
      },
      { type: "widget", widget: "SimulatorHashKripto" },
      {
        type: "callout",
        tone: "info",
        title: "Kenapa dipadatkan dengan hash",
        html: "Memakai hash public key, bukan public key mentah, membuat address <strong>lebih pendek</strong> dan menambah satu lapis perlindungan: public key asli baru terungkap saat dana dibelanjakan, bukan saat sekadar menerima.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Data Menyusut di Sepanjang Pipa: Private Key ke Hash Address",
        unit: "ukuran (byte)",
        source: "spesifikasi Bitcoin P2PKH",
        note: "Public key dipadatkan SHA-256 lalu RIPEMD-160 menjadi 20 byte, jauh lebih ringkas sebelum menjadi address.",
        data: [
          { label: "Private key", value: 32, color: "#ef4444" },
          { label: "Public key (terkompres)", value: 33, color: "#f59e0b" },
          { label: "Hasil SHA-256", value: 32, color: "#f7931a" },
          { label: "Hasil RIPEMD-160", value: 20, color: "#22c55e" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menghitung panjang muatan address P2PKH",
        html: "Sebuah address Bitcoin tipe <strong>P2PKH</strong> dibangun dari sidik jari public key sepanjang <strong>20 byte</strong> (hasil RIPEMD-160). Di depannya ditambah <strong>1 byte versi</strong> dan di belakangnya <strong>4 byte checksum</strong>. Total muatan sebelum dikodekan Base58 menjadi 1 + 20 + 4 = <strong>25 byte</strong>. Checksum inilah yang membuat salah ketik satu huruf address hampir selalu langsung tertolak dompet.",
      },
      {
        type: "calcExercise",
        prompt:
          "Muatan address Bitcoin P2PKH terdiri dari 1 byte versi, 20 byte hasil RIPEMD-160, dan 4 byte checksum. Berapa total byte muatan sebelum dikodekan menjadi address?",
        answer: 25,
        tolerance: 0,
        suffix: "byte",
        solution:
          "1 + 20 + 4 = <strong>25 byte</strong>. Muatan 25 byte inilah yang lalu dikodekan dengan Base58 menjadi address yang kita salin dan bagikan.",
        hint: "Jumlahkan byte versi, byte hasil RIPEMD-160, dan byte checksum.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan istilah dengan perannya dalam alur private key ke address.",
        pairs: [
          { left: "Private key", right: "Rahasia awal, menurunkan public key" },
          { left: "Public key", right: "Diturunkan dari private key, lalu dihash" },
          { left: "RIPEMD-160", right: "Memadatkan hash menjadi sidik jari 20 byte" },
          { left: "Checksum", right: "Bit pemeriksa agar salah ketik address tertolak" },
          { left: "Base58 / Bech32", right: "Cara mengkodekan muatan menjadi address terbaca" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Format address Bitcoin berkembang ke Bech32 SegWit 2017",
        html: "Address Bitcoin paling awal memakai format <strong>P2PKH</strong> berbasis pengkodean <strong>Base58</strong>, dikenali dari awalan angka <strong>1</strong>. Sekitar <strong>2012</strong> hadir format P2SH berawalan <strong>3</strong> untuk skrip yang lebih rumit. Lalu pada <strong>2017</strong>, bersama pengaktifan <strong>SegWit</strong>, diperkenalkan format <strong>Bech32</strong> (standar BIP-173) berawalan <strong>bc1</strong>. Bech32 lebih ramah ketik, lebih kuat mendeteksi salah ketik, dan lebih hemat biaya transaksi, sehingga kini banyak dipakai walau format lama tetap berlaku.",
      },
      {
        type: "takeaways",
        items: [
          "Address adalah public key yang dipadatkan lewat hashing, bukan public key mentah.",
          "Alurnya satu arah: private key, public key, hash, lalu address.",
          "Bitcoin memakai SHA-256 lalu RIPEMD-160 menjadi sidik jari 20 byte.",
          "Muatan address P2PKH = 1 versi + 20 hash + 4 checksum = 25 byte.",
          "Format berkembang dari Base58 P2PKH ke Bech32 SegWit sejak 2017.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa urutan alur pembentukan address yang benar?",
            options: [
              "Address menurunkan public key menurunkan private key",
              "Private key menurunkan public key, dihash, menjadi address",
              "Public key langsung menjadi private key",
              "Checksum menurunkan public key",
            ],
            answer: 1,
            explain: "Arahnya satu arah: private key, public key, hash, lalu address.",
          },
          {
            q: "Dua fungsi hash apa yang dipakai Bitcoin untuk membentuk sidik jari address?",
            options: [
              "MD5 lalu SHA-1",
              "SHA-256 lalu RIPEMD-160",
              "RIPEMD-160 lalu MD5",
              "Hanya SHA-512",
            ],
            answer: 1,
            explain: "Public key dihash SHA-256, lalu hasilnya dihash RIPEMD-160 menjadi 20 byte.",
          },
          {
            q: "Berapa byte sidik jari hasil RIPEMD-160?",
            options: ["4 byte", "20 byte", "32 byte", "64 byte"],
            answer: 1,
            explain: "RIPEMD-160 menghasilkan 160 bit, yaitu 20 byte.",
          },
          {
            q: "Berapa total muatan address P2PKH sebelum dikodekan?",
            options: ["20 byte", "24 byte", "25 byte", "33 byte"],
            answer: 2,
            explain: "1 byte versi + 20 byte hash + 4 byte checksum = 25 byte.",
          },
          {
            q: "Format address apa yang diperkenalkan bersama SegWit pada 2017?",
            options: ["Base58 P2PKH", "P2SH", "Bech32 (awalan bc1)", "Hex mentah"],
            answer: 2,
            explain: "Bech32 (BIP-173) berawalan bc1 hadir bersama pengaktifan SegWit pada 2017.",
          },
        ],
      },
    ],
  },
];
