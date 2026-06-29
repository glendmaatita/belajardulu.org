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
];
