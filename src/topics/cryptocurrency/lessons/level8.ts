import type { Lesson } from "../../../types";

export const level8: Lesson[] = [
  // ============================================================
  {
    id: "dex-amm",
    levelId: "defi",
    order: 1,
    title: "DEX & AMM",
    summary:
      "Menukar kripto tanpa perantara terpusat lewat bursa terdesentralisasi (DEX) dan Automated Market Maker (AMM) dengan rumus produk konstan x kali y sama dengan k.",
    durationMin: 14,
    tags: ["defi", "dex", "amm", "uniswap"],
    blocks: [
      {
        type: "paragraph",
        html: "Pada bursa biasa, ada perusahaan di tengah yang mempertemukan pembeli dan penjual lewat buku pesanan. <strong>Decentralized exchange</strong> (DEX) menghapus perantara terpusat itu: kamu menukar aset langsung lewat program di blockchain, tanpa menitipkan dana ke satu perusahaan.",
      },
      {
        type: "paragraph",
        html: "Banyak DEX tidak memakai buku pesanan, melainkan <strong>Automated Market Maker</strong> (AMM): sebuah kolam berisi dua aset yang harganya ditentukan otomatis oleh rumus matematika. <strong>Uniswap</strong> adalah pelopor model ini dengan rumus <strong>produk konstan</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus produk konstan x kali y sama dengan k",
        html: "Dalam kolam berisi aset A sebanyak x dan aset B sebanyak y, hasil kali keduanya dijaga tetap: <strong>x kali y sama dengan k</strong>. Saat seseorang menukar A dengan B, jumlah A naik dan jumlah B turun, tapi hasil kalinya tetap k. Harga ditentukan oleh <strong>rasio kolam</strong>, bukan oleh satu pihak.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser jumlah aset yang ditukar dan lihat bagaimana <strong>price impact</strong> membesar pada kolam kecil. Inilah inti rumus x kali y sama dengan k.",
      },
      { type: "widget", widget: "SimulatorAMM" },
      {
        type: "video",
        comp: "AMMVideo",
        title: "Liquidity Pool & Swap",
        caption: "Bagaimana kolam likuiditas bekerja dan harga bergerak saat aset ditukar.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kurva Produk Konstan: Aset B Tersisa saat Aset A Ditambah",
        unit: "B tersisa di kolam",
        source: "ilustrasi rumus x kali y sama dengan k, k sama dengan 1.000.000",
        note: "Makin banyak A masuk, B keluar makin sedikit per unit. Inilah price impact yang membuat harga memburuk pada transaksi besar.",
        data: [
          { label: "A=1000", value: 1000 },
          { label: "A=1100", value: 909 },
          { label: "A=1500", value: 667 },
          { label: "A=2000", value: 500 },
          { label: "A=4000", value: 250 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menukar di kolam kecil vs besar",
        html: "Sebuah kolam berisi 1000 token A dan 1000 token B (k sama dengan 1.000.000). Kamu menyetor 100 A. Jumlah A menjadi 1100, maka B harus menjadi 1.000.000 dibagi 1100 sama dengan sekitar 909,09. Jadi kamu menerima sekitar <strong>90,9 B</strong>, bukan 100 B. Selisih ini muncul karena harga bergeser saat kamu menukar. Di kolam yang jauh lebih besar, selisih harga untuk jumlah yang sama akan jauh lebih kecil.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kolam berisi 1000 A dan 1000 B sehingga k sama dengan 1.000.000. Kamu menjual 100 A. Berapa B yang kamu terima? (B keluar sama dengan 1000 dikurangi 1.000.000 dibagi 1100)",
        answer: 90.9,
        tolerance: 0.3,
        suffix: "B",
        solution:
          "Setelah setor 100 A, jumlah A menjadi 1100. Agar k tetap, B menjadi 1.000.000 dibagi 1100 sama dengan 909,09. B yang keluar sama dengan 1000 dikurangi 909,09 sama dengan <strong>90,9 B</strong>.",
        hint: "Hitung B baru sama dengan k dibagi A baru, lalu kurangkan dari B lama.",
      },
      {
        type: "classifyExercise",
        prompt: "Manakah ciri DEX dengan AMM dan manakah ciri bursa terpusat biasa?",
        buckets: ["DEX (AMM)", "Bursa terpusat"],
        items: [
          { text: "Harga ditentukan rasio kolam lewat rumus x kali y sama dengan k", bucket: "DEX (AMM)" },
          { text: "Perusahaan menyimpan dana pengguna di satu tempat", bucket: "Bursa terpusat" },
          { text: "Menukar langsung lewat program di blockchain tanpa perantara terpusat", bucket: "DEX (AMM)" },
          { text: "Mempertemukan pesanan beli dan jual lewat buku pesanan terpusat", bucket: "Bursa terpusat" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "DEX memungkinkan tukar kripto tanpa perantara terpusat, langsung lewat blockchain.",
          "AMM memakai kolam dua aset dengan harga ditentukan rumus, bukan buku pesanan.",
          "Uniswap mempopulerkan rumus produk konstan x kali y sama dengan k.",
          "Harga ditentukan rasio kolam; transaksi besar menggeser harga (price impact).",
          "Kolam besar memberi price impact kecil; kolam kecil membuat harga cepat memburuk.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa rumus inti AMM ala Uniswap?",
            options: ["x ditambah y sama dengan k", "x kali y sama dengan k", "x dibagi y sama dengan k", "x dikurang y sama dengan k"],
            answer: 1,
            explain: "Rumus produk konstan menjaga hasil kali jumlah dua aset tetap, yaitu x kali y sama dengan k.",
          },
          {
            q: "Apa yang menentukan harga di AMM?",
            options: ["Keputusan perusahaan bursa", "Rasio jumlah aset di dalam kolam", "Bank sentral", "Buku pesanan terpusat"],
            answer: 1,
            explain: "Harga muncul dari perbandingan jumlah dua aset dalam kolam.",
          },
          {
            q: "Apa kelebihan utama DEX dibanding bursa terpusat?",
            options: ["Selalu lebih murah", "Tidak perlu menitipkan dana ke satu perusahaan", "Dijamin pemerintah", "Tidak ada biaya sama sekali"],
            answer: 1,
            explain: "DEX menukar langsung lewat blockchain tanpa perantara terpusat yang memegang dana.",
          },
          {
            q: "Kolam 1000 A dan 1000 B, kamu setor 100 A. Kira-kira berapa B keluar?",
            options: ["100 B", "Sekitar 90,9 B", "Sekitar 110 B", "0 B"],
            answer: 1,
            explain: "B baru sama dengan 1.000.000 dibagi 1100 sama dengan 909,09; B keluar sama dengan 1000 dikurangi 909,09 sama dengan 90,9.",
          },
          {
            q: "Mengapa transaksi besar di kolam kecil merugikan?",
            options: ["Biaya gas nol", "Price impact besar membuat harga memburuk", "Kolam menolak transaksi", "Token jadi gratis"],
            answer: 1,
            explain: "Pada kolam kecil, menukar dalam jumlah besar menggeser rasio jauh sehingga harga memburuk.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "liquidity-yield-staking",
    levelId: "defi",
    order: 2,
    title: "Liquidity Pool, Yield Farming & Staking",
    summary:
      "Menyediakan likuiditas untuk dapat fee, mengejar imbal hasil token reward lewat yield farming, dan mengunci aset lewat staking. Kenali juga risiko impermanent loss.",
    durationMin: 14,
    tags: ["defi", "liquidity-pool", "yield-farming", "staking"],
    blocks: [
      {
        type: "paragraph",
        html: "Kolam di AMM butuh isi. Orang yang menyetor dua aset ke dalam kolam disebut <strong>penyedia likuiditas</strong> (liquidity provider). Sebagai imbalan, mereka mendapat bagian dari <strong>fee</strong> tiap kali ada yang menukar lewat kolam itu.",
      },
      {
        type: "paragraph",
        html: "<strong>Yield farming</strong> adalah strategi mengejar imbal hasil setinggi mungkin, sering dengan tambahan <strong>token reward</strong> di luar fee. <strong>Staking</strong> adalah mengunci aset untuk membantu mengamankan jaringan atau protokol dan menerima imbalan. Ketiganya cara membuat aset kripto bekerja, tapi semua punya risiko.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga cara aset bekerja",
        html: "<strong>Liquidity pool</strong>: setor dua aset, dapat bagian fee. <strong>Yield farming</strong>: pindah-pindah kolam mengejar imbal hasil dan token reward. <strong>Staking</strong>: kunci aset untuk mengamankan jaringan dan terima imbalan.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Impermanent loss",
        html: "Saat harga dua aset di kolam bergerak berbeda, nilai jatahmu bisa lebih kecil dibanding kalau aset hanya kamu simpan diam. Selisih ini disebut <strong>impermanent loss</strong>. Ia menjadi nyata jika kamu menarik dana saat harga sudah jauh bergeser, dan bisa menggerus keuntungan dari fee.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Pakai simulator DCA untuk melihat bagaimana menabung rutin meratakan harga beli, sebuah disiplin yang juga berguna sebelum masuk ke strategi imbal hasil yang lebih rumit.",
      },
      { type: "widget", widget: "SimulatorDCAKripto" },
      {
        type: "chart",
        variant: "bar",
        title: "Perkiraan Imbal Hasil Tahunan per Strategi (ilustrasi)",
        unit: "APR perkiraan (%)",
        source: "ilustrasi edukatif, angka nyata berubah-ubah dan tidak dijamin",
        note: "Imbal hasil lebih tinggi hampir selalu berarti risiko lebih tinggi, termasuk impermanent loss dan risiko token reward anjlok.",
        data: [
          { label: "Staking stabil", value: 5, color: "#26a17b" },
          { label: "Liquidity fee", value: 12, color: "#627eea" },
          { label: "Yield farming", value: 30, color: "#f7931a" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: DeFi Summer 2020 dan ledakan yield farming",
        html: "Pada pertengahan <strong>2020</strong>, protokol Compound meluncurkan token <strong>COMP</strong> dan membagikannya kepada pengguna yang meminjam serta meminjamkan. Tiba-tiba orang berlomba menyetor dana demi token reward, memicu periode yang dikenang sebagai <strong>DeFi Summer</strong>. Total dana yang dikunci di DeFi melonjak dari ratusan juta menjadi miliaran dolar AS dalam hitungan bulan. Banyak yang untung besar, tapi tidak sedikit yang rugi saat harga token reward anjlok atau terkena bug protokol baru.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kamu menyetor 2.000 dolar AS ke sebuah kolam dengan APR 12 persen. Berapa dolar AS imbal hasil kotor selama satu tahun (abaikan bunga berbunga)?",
        answer: 240,
        tolerance: 0,
        prefix: "$",
        solution:
          "Imbal hasil sama dengan 2.000 dikali 12 persen sama dengan 2.000 dikali 0,12 sama dengan <strong>240 dolar AS</strong> setahun, sebelum memperhitungkan impermanent loss dan biaya.",
        hint: "Kalikan modal dengan APR dalam bentuk desimal.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari yield farming setahun kamu dapat 240 dolar AS fee, tetapi mengalami impermanent loss 90 dolar AS. Berapa keuntungan bersihnya dalam dolar AS?",
        answer: 150,
        tolerance: 0,
        prefix: "$",
        solution:
          "240 dikurangi 90 sama dengan <strong>150 dolar AS</strong>. Impermanent loss bisa menggerus sebagian imbal hasil, jadi hitung keduanya, bukan hanya APR.",
        hint: "Kurangkan impermanent loss dari total fee.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan istilah DeFi dengan artinya.",
        pairs: [
          { left: "Penyedia likuiditas", right: "Menyetor dua aset ke kolam dan dapat bagian fee" },
          { left: "Yield farming", right: "Mengejar imbal hasil tertinggi lewat token reward" },
          { left: "Staking", right: "Mengunci aset untuk mengamankan jaringan dan terima imbalan" },
          { left: "Impermanent loss", right: "Kerugian relatif saat harga dua aset kolam bergeser" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Penyedia likuiditas menyetor dua aset ke kolam dan menerima bagian fee transaksi.",
          "Yield farming mengejar imbal hasil tertinggi, sering lewat token reward tambahan.",
          "Staking mengunci aset untuk mengamankan jaringan atau protokol demi imbalan.",
          "Impermanent loss bisa menggerus keuntungan saat harga dua aset bergerak berbeda.",
          "Imbal hasil tinggi hampir selalu berarti risiko tinggi; hitung untung bersih, bukan hanya APR.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa imbalan utama penyedia likuiditas?",
            options: ["Gaji tetap dari bursa", "Bagian dari fee transaksi kolam", "Bunga bank", "Dividen saham"],
            answer: 1,
            explain: "Penyedia likuiditas menerima sebagian fee tiap kali ada yang menukar lewat kolam.",
          },
          {
            q: "Apa itu yield farming?",
            options: [
              "Menanam padi digital",
              "Strategi mengejar imbal hasil tinggi, sering lewat token reward",
              "Menambang Bitcoin",
              "Menjual NFT",
            ],
            answer: 1,
            explain: "Yield farming memindahkan dana mengejar imbal hasil terbaik dan token reward.",
          },
          {
            q: "Apa yang dilakukan saat staking?",
            options: [
              "Menjual semua aset",
              "Mengunci aset untuk mengamankan jaringan dan terima imbalan",
              "Meminjam tanpa jaminan",
              "Menghapus dompet",
            ],
            answer: 1,
            explain: "Staking mengunci aset untuk membantu keamanan jaringan atau protokol demi imbalan.",
          },
          {
            q: "Apa itu impermanent loss?",
            options: [
              "Biaya gas yang hangus",
              "Kerugian relatif saat harga dua aset di kolam bergerak berbeda",
              "Pajak transaksi",
              "Kehilangan seed phrase",
            ],
            answer: 1,
            explain: "Impermanent loss muncul ketika harga aset bergeser, membuat nilai jatah kolam tertinggal dibanding sekadar menyimpan.",
          },
          {
            q: "Peristiwa apa yang memicu ledakan yield farming pada 2020?",
            options: [
              "Bitcoin Pizza Day",
              "Peluncuran token COMP oleh Compound saat DeFi Summer",
              "Krisis 2008",
              "Halving Bitcoin",
            ],
            answer: 1,
            explain: "Compound membagikan token COMP pada 2020, memicu lonjakan dana di DeFi yang dikenang sebagai DeFi Summer.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "lending-borrowing",
    levelId: "defi",
    order: 3,
    title: "Lending & Borrowing",
    summary:
      "Meminjamkan aset untuk bunga dan meminjam dengan jaminan berlebih (overcollateralized) di platform seperti Aave dan Compound. Pahami loan-to-value dan health factor.",
    durationMin: 14,
    tags: ["defi", "lending", "borrowing", "aave", "compound"],
    blocks: [
      {
        type: "paragraph",
        html: "Di DeFi, kamu bisa <strong>meminjamkan</strong> aset ke sebuah kolam dan menerima bunga, atau <strong>meminjam</strong> aset dengan menaruh jaminan. Platform terkenal seperti <strong>Aave</strong> dan <strong>Compound</strong> menjalankan ini lewat program di blockchain, tanpa petugas bank yang menilai kelayakanmu.",
      },
      {
        type: "paragraph",
        html: "Karena tidak ada pemeriksaan identitas atau riwayat kredit, pinjaman DeFi hampir selalu <strong>overcollateralized</strong>: nilai jaminan harus lebih besar daripada nilai pinjaman. Inilah yang melindungi pemberi pinjaman saat peminjam menghilang atau harga jaminan turun.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Loan-to-value & health factor",
        html: "<strong>Loan-to-value</strong> (LTV) adalah rasio nilai pinjaman terhadap nilai jaminan. Tiap aset punya LTV maksimum. <strong>Health factor</strong> adalah ukuran seberapa aman posisimu; saat ia turun mendekati ambang, posisimu berisiko <strong>dilikuidasi</strong>.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser nilai jaminan dan lihat berapa banyak yang aman dipinjam, serta seberapa dekat posisimu ke ambang likuidasi.",
      },
      { type: "widget", widget: "SimulatorCollateralStablecoin" },
      {
        type: "chart",
        variant: "bar",
        title: "Pinjaman Maksimum per LTV pada Jaminan 1.000 dolar AS",
        unit: "pinjaman maksimum (dolar AS)",
        source: "ilustrasi LTV jaminan 1.000 dolar AS",
        note: "Makin tinggi LTV yang diizinkan, makin besar pinjaman, tapi makin tipis bantalan sebelum likuidasi.",
        data: [
          { label: "LTV 50%", value: 500, color: "#26a17b" },
          { label: "LTV 75%", value: 750, color: "#627eea" },
          { label: "LTV 80%", value: 800, color: "#f7931a" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Meminjam tanpa menjual aset",
        html: "Kamu punya jaminan kripto senilai <strong>1.000 dolar AS</strong> dan tidak ingin menjualnya karena yakin harganya naik. Dengan LTV maksimum 75 persen, kamu bisa meminjam hingga 1.000 dikali 75 persen sama dengan <strong>750 dolar AS</strong> stablecoin untuk kebutuhan lain. Tapi jika nilai jaminan turun, rasio pinjamanmu membengkak dan kamu bisa terkena likuidasi. Banyak orang sengaja meminjam jauh di bawah batas, misalnya hanya 400 dolar AS, agar punya bantalan aman.",
      },
      {
        type: "calcExercise",
        prompt:
          "Nilai jaminan kamu 1.000 dolar AS dengan LTV maksimum 75 persen. Berapa dolar AS pinjaman maksimum yang diizinkan?",
        answer: 750,
        tolerance: 0,
        prefix: "$",
        solution:
          "Pinjaman maksimum sama dengan 1.000 dikali 75 persen sama dengan 1.000 dikali 0,75 sama dengan <strong>750 dolar AS</strong>. Meminjam di bawah angka ini memberi bantalan agar tidak cepat terlikuidasi.",
        hint: "Kalikan nilai jaminan dengan LTV maksimum dalam desimal.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kamu meminjamkan 5.000 dolar AS ke kolam dengan APR 4 persen. Berapa dolar AS bunga kotor yang kamu terima dalam satu tahun (abaikan bunga berbunga)?",
        answer: 200,
        tolerance: 0,
        prefix: "$",
        solution:
          "Bunga sama dengan 5.000 dikali 4 persen sama dengan 5.000 dikali 0,04 sama dengan <strong>200 dolar AS</strong> setahun.",
        hint: "Kalikan jumlah yang dipinjamkan dengan APR dalam desimal.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pernyataan sebagai aksi meminjamkan atau meminjam.",
        buckets: ["Meminjamkan", "Meminjam"],
        items: [
          { text: "Menyetor aset ke kolam untuk menerima bunga", bucket: "Meminjamkan" },
          { text: "Menaruh jaminan lalu mengambil stablecoin", bucket: "Meminjam" },
          { text: "Menjadi pihak yang menanggung risiko likuidasi", bucket: "Meminjam" },
          { text: "Mengincar imbal hasil pasif dari bunga kolam", bucket: "Meminjamkan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Di DeFi kamu bisa meminjamkan aset untuk bunga atau meminjam dengan jaminan.",
          "Pinjaman DeFi umumnya overcollateralized: nilai jaminan melebihi nilai pinjaman.",
          "Aave dan Compound adalah platform lending populer yang berjalan otomatis di blockchain.",
          "Loan-to-value membatasi pinjaman; health factor mengukur seberapa aman posisimu.",
          "Meminjam jauh di bawah batas LTV memberi bantalan terhadap likuidasi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa pinjaman DeFi biasanya overcollateralized?",
            options: [
              "Agar bunga lebih murah",
              "Karena tidak ada pemeriksaan identitas, jaminan harus melebihi pinjaman",
              "Karena diwajibkan pemerintah",
              "Agar transaksi gratis",
            ],
            answer: 1,
            explain: "Tanpa penilaian kredit, jaminan berlebih melindungi pemberi pinjaman.",
          },
          {
            q: "Apa arti loan-to-value (LTV)?",
            options: [
              "Lama waktu pinjaman",
              "Rasio nilai pinjaman terhadap nilai jaminan",
              "Bunga tahunan",
              "Jumlah node jaringan",
            ],
            answer: 1,
            explain: "LTV membandingkan besar pinjaman dengan nilai jaminan yang ditaruh.",
          },
          {
            q: "Jaminan 1.000 dolar AS dengan LTV maksimum 75 persen, berapa pinjaman maksimum?",
            options: ["1.000 dolar AS", "750 dolar AS", "500 dolar AS", "1.250 dolar AS"],
            answer: 1,
            explain: "1.000 dikali 0,75 sama dengan 750 dolar AS.",
          },
          {
            q: "Apa fungsi health factor?",
            options: [
              "Mengukur kecepatan jaringan",
              "Mengukur seberapa aman posisi pinjaman dari likuidasi",
              "Menghitung pajak",
              "Menentukan harga gas",
            ],
            answer: 1,
            explain: "Health factor menunjukkan seberapa dekat posisi ke ambang likuidasi.",
          },
          {
            q: "Mengapa banyak orang meminjam di bawah batas LTV?",
            options: [
              "Agar bunga nol",
              "Untuk memberi bantalan terhadap penurunan harga jaminan",
              "Karena wajib menurut bursa",
              "Agar dapat token reward",
            ],
            answer: 1,
            explain: "Bantalan ini mengurangi risiko terlikuidasi saat harga jaminan turun.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "flashloan-likuidasi",
    levelId: "defi",
    order: 4,
    title: "Flash Loan & Likuidasi",
    summary:
      "Flash loan memungkinkan meminjam tanpa jaminan asal dipinjam dan dikembalikan dalam satu transaksi. Likuidasi terjadi saat jaminan tak lagi cukup menutup pinjaman.",
    durationMin: 14,
    tags: ["defi", "flash-loan", "likuidasi", "risiko"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Flash loan</strong> adalah ide yang hanya mungkin di blockchain: kamu bisa meminjam aset dalam jumlah besar <strong>tanpa jaminan</strong>, asalkan dana itu dipinjam dan dikembalikan di dalam <strong>satu transaksi yang sama</strong>. Jika di akhir transaksi pinjaman belum lunas, seluruh transaksi dibatalkan seolah tak pernah terjadi.",
      },
      {
        type: "paragraph",
        html: "<strong>Likuidasi</strong> adalah sisi gelap meminjam dengan jaminan. Saat nilai jaminan turun di bawah ambang yang diizinkan, protokol menjual sebagian jaminan untuk melunasi pinjaman dan menjaga sistem tetap sehat. Pihak yang menjalankan likuidasi biasanya mendapat bonus kecil sebagai insentif.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Flash loan dalam satu napas",
        html: "Pinjam, pakai, kembalikan, semuanya dalam <strong>satu transaksi</strong>. Karena dijamin oleh aturan blockchain (gagal mengembalikan berarti seluruh transaksi batal), pemberi pinjaman tidak butuh jaminan. Sering dipakai untuk arbitrase yang sah, tapi juga bisa disalahgunakan.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Kapan likuidasi memicu",
        html: "Jika kamu meminjam mendekati batas LTV lalu harga jaminan anjlok, <strong>health factor</strong> jatuh di bawah ambang dan posisimu dilikuidasi. Kamu kehilangan sebagian jaminan dan sering kena penalti. Menjaga jarak aman dari batas adalah pertahanan utama.",
      },
      {
        type: "video",
        comp: "AMMVideo",
        title: "Liquidity Pool & Swap",
        caption: "Memahami kolam likuiditas membantu melihat bagaimana harga di AMM bisa dimanipulasi dalam serangan flash loan.",
      },
      {
        type: "chart",
        variant: "area",
        title: "Health Factor Anjlok saat Harga Jaminan Turun (ilustrasi)",
        unit: "health factor",
        source: "ilustrasi edukatif, ambang likuidasi pada nilai 1,0",
        note: "Saat health factor menyentuh 1,0, posisi mulai dilikuidasi. Menjaga jarak di atas 1,0 mencegah likuidasi paksa.",
        data: [
          { label: "Jaminan 100%", value: 2.0 },
          { label: "Turun 10%", value: 1.6 },
          { label: "Turun 20%", value: 1.3 },
          { label: "Turun 30%", value: 1.05 },
          { label: "Turun 35%", value: 0.9 },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Serangan flash loan bZx, Februari 2020",
        html: "Pada <strong>Februari 2020</strong>, platform DeFi <strong>bZx</strong> dua kali menjadi korban serangan yang memanfaatkan <strong>flash loan</strong>. Penyerang meminjam sejumlah besar dana tanpa jaminan, memakainya untuk <strong>memanipulasi harga</strong> di sebuah pasar yang likuiditasnya tipis, lalu mengambil keuntungan dari harga yang sudah terdistorsi, semua dalam satu transaksi. Kerugiannya ratusan ribu dolar AS dan menjadi pelajaran besar: flash loan adalah alat netral, bahaya muncul saat protokol memakai sumber harga yang mudah dimanipulasi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kamu meminjam jaminan senilai 1.000 dolar AS dan ambang likuidasi pada 80 persen LTV. Pada nilai pinjaman berapa dolar AS posisimu mulai dilikuidasi?",
        answer: 800,
        tolerance: 0,
        prefix: "$",
        solution:
          "Ambang likuidasi sama dengan 1.000 dikali 80 persen sama dengan <strong>800 dolar AS</strong>. Jika nilai pinjaman menyentuh atau melewati 800 (atau jaminan turun sampai rasio itu tercapai), likuidasi terpicu.",
        hint: "Kalikan nilai jaminan dengan ambang likuidasi dalam desimal.",
      },
      {
        type: "calcExercise",
        prompt:
          "Likuidator melunasi utang 500 dolar AS dan menerima bonus likuidasi 8 persen dari jumlah itu. Berapa dolar AS bonus yang ia terima?",
        answer: 40,
        tolerance: 0,
        prefix: "$",
        solution:
          "Bonus sama dengan 500 dikali 8 persen sama dengan 500 dikali 0,08 sama dengan <strong>40 dolar AS</strong>. Bonus inilah insentif yang membuat orang mau menjalankan likuidasi.",
        hint: "Kalikan utang yang dilunasi dengan persen bonus.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap praktik sebagai relatif aman atau berisiko tinggi.",
        buckets: ["Relatif aman", "Berisiko tinggi"],
        items: [
          { text: "Meminjam jauh di bawah batas LTV agar punya bantalan", bucket: "Relatif aman" },
          { text: "Meminjam mendekati batas LTV pada aset yang harganya liar", bucket: "Berisiko tinggi" },
          { text: "Memakai flash loan untuk arbitrase harga yang sah", bucket: "Relatif aman" },
          { text: "Protokol memakai satu sumber harga yang mudah dimanipulasi", bucket: "Berisiko tinggi" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan istilah dengan deskripsinya.",
        pairs: [
          { left: "Flash loan", right: "Pinjam tanpa jaminan, lunas dalam satu transaksi" },
          { left: "Likuidasi", right: "Penjualan paksa jaminan saat nilainya tak lagi cukup" },
          { left: "Bonus likuidasi", right: "Insentif bagi pihak yang menjalankan likuidasi" },
          { left: "Manipulasi harga", right: "Menggeser harga pasar tipis untuk meraih untung curang" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Flash loan meminjamkan dana tanpa jaminan asalkan dilunasi dalam satu transaksi yang sama.",
          "Jika pinjaman tak dikembalikan di akhir transaksi, seluruh transaksi batal otomatis.",
          "Likuidasi terjadi saat nilai jaminan turun di bawah ambang sehingga pinjaman terancam.",
          "Pihak likuidator mendapat bonus sebagai insentif menjaga sistem tetap sehat.",
          "Flash loan adalah alat netral; bahaya muncul saat protokol memakai sumber harga yang rapuh.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa syarat utama sebuah flash loan?",
            options: [
              "Jaminan dua kali lipat",
              "Dipinjam dan dikembalikan dalam satu transaksi yang sama",
              "Disetujui bank",
              "Dijamin pemerintah",
            ],
            answer: 1,
            explain: "Flash loan tidak butuh jaminan karena harus lunas di dalam satu transaksi, atau seluruhnya batal.",
          },
          {
            q: "Apa yang terjadi jika flash loan tak dikembalikan di akhir transaksi?",
            options: [
              "Bunga bertambah",
              "Seluruh transaksi dibatalkan seolah tak pernah terjadi",
              "Aset disita bertahap",
              "Tidak ada konsekuensi",
            ],
            answer: 1,
            explain: "Aturan blockchain membatalkan seluruh transaksi bila pinjaman belum lunas.",
          },
          {
            q: "Kapan likuidasi memicu?",
            options: [
              "Saat harga jaminan naik",
              "Saat nilai jaminan turun di bawah ambang yang diizinkan",
              "Saat jaringan sibuk",
              "Saat fee gas murah",
            ],
            answer: 1,
            explain: "Likuidasi terjadi ketika jaminan tak lagi cukup menutup pinjaman.",
          },
          {
            q: "Bagaimana cara serangan flash loan bZx 2020 meraih untung?",
            options: [
              "Mencuri seed phrase pengguna",
              "Memanipulasi harga di pasar tipis lalu mengambil untung dalam satu transaksi",
              "Menambang blok palsu",
              "Membobol bank",
            ],
            answer: 1,
            explain: "Penyerang memakai flash loan untuk mendistorsi harga di pasar likuiditas tipis, lalu menguangkannya.",
          },
          {
            q: "Apa pertahanan terbaik agar tidak terlikuidasi?",
            options: [
              "Meminjam tepat di batas LTV",
              "Menjaga jarak aman dari batas LTV dan health factor di atas ambang",
              "Mematikan dompet",
              "Memakai flash loan terus-menerus",
            ],
            answer: 1,
            explain: "Bantalan jarak dari batas membuat penurunan harga tidak langsung memicu likuidasi.",
          },
        ],
      },
    ],
  },
];
