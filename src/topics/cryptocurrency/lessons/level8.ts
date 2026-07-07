import type { Lesson } from "../../../types";

export const level8: Lesson[] = [
  // ============================================================
  {
    id: "dex-amm",
    levelId: "defi",
    order: 1,
    title: "DEX & AMM",
    summary:
      "Menukar kripto tanpa perantara terpusat lewat bursa terdesentralisasi (DEX) dan Automated Market Maker (AMM) dengan rumus constant product (hasil kali konstan) x kali y sama dengan k.",
    durationMin: 14,
    tags: ["defi", "dex", "amm", "uniswap"],
    blocks: [
      {
        type: "paragraph",
        html: "Pada bursa biasa, ada perusahaan di tengah yang mempertemukan pembeli dan penjual lewat buku pesanan. <strong>Decentralized exchange</strong> (DEX) menghapus perantara terpusat itu: kamu menukar aset langsung lewat program di blockchain, tanpa menitipkan dana ke satu perusahaan.",
      },
      {
        type: "paragraph",
        html: "Banyak DEX tidak memakai buku pesanan, melainkan <strong>Automated Market Maker</strong> (AMM): sebuah kolam berisi dua aset yang harganya ditentukan otomatis oleh rumus matematika. <strong>Uniswap</strong> adalah pelopor model ini dengan rumus <strong>constant product</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus constant product x kali y sama dengan k",
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
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Uniswap_Logo.svg?width=400",
        alt: "Logo Uniswap, DEX dengan model Automated Market Maker",
        caption: "Logo Uniswap, bursa terdesentralisasi yang mempopulerkan rumus constant product x kali y sama dengan k.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kurva Constant Product: Aset B Tersisa saat Aset A Ditambah",
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
        type: "case",
        title: "Sejarah: Uniswap dan kelahiran AMM, November 2018",
        html: "Pada <strong>November 2018</strong>, Hayden Adams meluncurkan <strong>Uniswap</strong> di jaringan Ethereum, terinspirasi catatan Vitalik Buterin tentang market maker berbasis rumus. Alih-alih buku pesanan, Uniswap memakai kolam dan rumus constant product x kali y sama dengan k. Banyak yang awalnya ragu model sesederhana itu bisa bekerja, tapi pada <strong>2020</strong> Uniswap V2 tumbuh menjadi salah satu DEX terbesar dan menjadi cetak biru bagi ratusan AMM lain. Ide bahwa harga bisa muncul dari matematika kolam, bukan dari satu pihak penentu, terbukti mengubah cara orang menukar aset on-chain.",
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
          "Uniswap mempopulerkan rumus constant product x kali y sama dengan k.",
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
            explain: "Rumus constant product menjaga hasil kali jumlah dua aset tetap, yaitu x kali y sama dengan k.",
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
        type: "video",
        comp: "StakingVideo",
        title: "Staking & Imbalan",
        caption: "Bagaimana mengunci aset membantu mengamankan jaringan dan menghasilkan imbalan berkala.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum_logo_2014.svg?width=400",
        alt: "Logo Ethereum, jaringan yang beralih ke Proof of Stake dan menjadi rumah banyak protokol yield",
        caption: "Logo Ethereum, jaringan yang sejak 2022 memakai staking untuk mengamankan jaringan dan menjadi pusat aktivitas yield farming.",
        credit: "Sumber: Wikimedia Commons",
      },
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
        title: "Studi Kasus: Fee belum tentu menutup impermanent loss",
        html: "Kamu menyetor dua aset senilai total <strong>2.000 dolar AS</strong> ke sebuah kolam dengan APR fee 12 persen. Setahun kemudian kamu mengantongi fee sekitar 240 dolar AS. Tapi karena harga salah satu aset naik tajam dibanding pasangannya, kamu mengalami impermanent loss sekitar 90 dolar AS. Untung bersihmu jadi 240 dikurangi 90 sama dengan <strong>150 dolar AS</strong>, bukan 240. Pelajarannya: selalu bandingkan fee yang didapat dengan kemungkinan impermanent loss, bukan tergiur APR semata.",
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
        type: "video",
        comp: "LendingBorrowingVideo",
        title: "Lending & Borrowing",
        caption: "Bagaimana kolam pinjaman bekerja: pemberi pinjaman dapat bunga, peminjam menaruh jaminan berlebih.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulator likuidasi",
        html: "Geser harga jaminan dan lihat bagaimana <strong>health factor</strong> turun mendekati ambang likuidasi saat harga anjlok.",
      },
      { type: "widget", widget: "SimulatorLiquidation" },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum-icon-purple.svg?width=400",
        alt: "Ikon Ethereum, jaringan tempat protokol lending seperti Aave dan Compound berjalan",
        caption: "Ikon Ethereum, tempat Aave dan Compound menjalankan pasar pinjam-meminjam secara otomatis lewat smart contract.",
        credit: "Sumber: Wikimedia Commons",
      },
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
        type: "case",
        title: "Sejarah: Compound dan token COMP, Juni 2020",
        html: "Protokol lending <strong>Compound</strong> yang diluncurkan di Ethereum mengubah sejarah DeFi pada <strong>Juni 2020</strong>, ketika ia mulai membagikan token tata kelola <strong>COMP</strong> kepada setiap orang yang meminjam maupun meminjamkan di platformnya. Tiba-tiba pengguna tidak hanya mendapat bunga, tapi juga token reward yang harganya melonjak. Dana yang dikunci di Compound dan protokol sejenis meledak dalam hitungan minggu, memicu periode yang dikenang sebagai DeFi Summer. Peristiwa ini menunjukkan betapa kuat insentif token dalam menarik likuiditas ke pasar pinjam-meminjam terdesentralisasi.",
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
        comp: "FlashLoanVideo",
        title: "Flash Loan dalam Satu Transaksi",
        caption: "Pinjam, pakai, dan kembalikan dalam satu transaksi, atau seluruhnya batal otomatis.",
      },
      {
        type: "video",
        comp: "AMMVideo",
        title: "Liquidity Pool & Swap",
        caption: "Memahami kolam likuiditas membantu melihat bagaimana harga di AMM bisa dimanipulasi dalam serangan flash loan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum_logo_2014.svg?width=400",
        alt: "Logo Ethereum, jaringan tempat flash loan dan likuidasi berlangsung dalam satu transaksi atomik",
        caption: "Logo Ethereum, tempat flash loan mungkin terjadi berkat sifat transaksi yang atomik: berhasil seluruhnya atau batal seluruhnya.",
        credit: "Sumber: Wikimedia Commons",
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
        title: "Studi Kasus: Likuidasi yang dipicu penurunan harga",
        html: "Kamu menaruh jaminan senilai <strong>1.000 dolar AS</strong> dan meminjam 700 dolar AS stablecoin saat ambang likuidasi pada 80 persen. Selama harga jaminan stabil, posisimu aman karena utang 700 masih di bawah ambang 800. Tapi ketika harga jaminan turun 15 persen menjadi 850 dolar AS, ambang likuidasi ikut turun ke 850 dikali 80 persen sama dengan <strong>680 dolar AS</strong>. Karena utang 700 kini melewati 680, posisimu mulai dilikuidasi: sebagian jaminan dijual paksa untuk melunasi utang. Inilah mengapa meminjam jauh di bawah batas memberi bantalan terhadap penurunan harga.",
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
  // ============================================================
  {
    id: "apa-itu-defi",
    levelId: "defi",
    order: 5,
    title: "Apa Itu DeFi & DeFi Summer",
    summary:
      "DeFi (decentralized finance) menyalin layanan keuangan, seperti tukar, pinjam, dan simpan, ke dalam program di blockchain tanpa bank. Kenali bedanya dengan keuangan tradisional dan ledakan DeFi Summer 2020.",
    durationMin: 14,
    tags: ["defi", "tradfi", "tvl", "defi-summer"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>DeFi</strong> adalah singkatan dari <em>decentralized finance</em>, yaitu layanan keuangan yang dijalankan oleh program di blockchain, bukan oleh bank atau bursa terpusat. Menukar aset, meminjam, meminjamkan, hingga menabung imbal hasil, semua bisa dilakukan langsung lewat <strong>smart contract</strong> tanpa harus membuka rekening atau menunggu persetujuan petugas.",
      },
      {
        type: "paragraph",
        html: "Lawannya adalah <strong>TradFi</strong> (<em>traditional finance</em>), yaitu keuangan tradisional dengan bank, perusahaan, dan regulator di tengah. Di TradFi kamu menitipkan dana ke lembaga yang mencatat saldo dan bisa membekukannya. Di DeFi, aset tetap di dompetmu sampai kamu sendiri yang menyetujui transaksi lewat program terbuka yang bisa diperiksa siapa pun.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Ciri inti DeFi",
        html: "<strong>Tanpa izin</strong> (siapa pun bisa ikut tanpa pendaftaran), <strong>terbuka</strong> (kode dan transaksi bisa diperiksa), <strong>tanpa kustodian</strong> (aset di dompetmu, bukan dititip ke perusahaan), dan <strong>komposabel</strong> (protokol bisa saling tumpuk seperti lego).",
      },
      {
        type: "callout",
        tone: "info",
        title: "Total Value Locked (TVL)",
        html: "Ukuran populer untuk besarnya DeFi adalah <strong>TVL</strong>, yaitu total nilai aset yang dikunci di dalam protokol DeFi. TVL melonjak dari ratusan juta dolar AS pada awal 2020 menjadi puluhan miliar dolar AS dalam waktu singkat saat DeFi Summer.",
      },
      {
        type: "video",
        comp: "LendingBorrowingVideo",
        title: "Layanan Keuangan Tanpa Bank",
        caption: "Bagaimana DeFi memindahkan fungsi pinjam-meminjam ke dalam program di blockchain.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Uniswap_Logo.svg?width=400",
        alt: "Logo Uniswap, salah satu protokol DeFi paling awal dan terbesar",
        caption: "Logo Uniswap, contoh protokol DeFi yang memungkinkan tukar aset tanpa perantara terpusat.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "area",
        title: "Pertumbuhan Total Value Locked (TVL) DeFi (ilustrasi)",
        unit: "TVL (miliar dolar AS)",
        source: "ilustrasi berdasarkan tren TVL yang dilaporkan luas",
        note: "TVL meledak saat DeFi Summer 2020, lalu naik lebih jauh pada 2021 sebelum surut mengikuti siklus pasar.",
        data: [
          { label: "Jan 2020", value: 0.7 },
          { label: "Jun 2020", value: 1 },
          { label: "Des 2020", value: 16 },
          { label: "Nov 2021", value: 110 },
          { label: "2023", value: 45 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menabung imbal hasil tanpa rekening bank",
        html: "Seorang pengguna tanpa akses bank yang baik menyetor <strong>1.000 dolar AS</strong> stablecoin ke sebuah protokol DeFi yang memberi bunga 5 persen setahun. Ia tidak perlu mengisi formulir, menunggu persetujuan, atau menyerahkan dananya ke kustodian. Setahun kemudian ia menerima sekitar <strong>50 dolar AS</strong> bunga, dan bisa menariknya kapan saja. Kebebasan ini datang dengan tanggung jawab: tidak ada bank yang menanggung jika protokolnya kena bug.",
      },
      {
        type: "case",
        title: "Sejarah: DeFi Summer 2020",
        html: "Pada <strong>Juni 2020</strong>, protokol Compound meluncurkan token tata kelola <strong>COMP</strong> dan membagikannya kepada pengguna yang meminjam serta meminjamkan. Tiba-tiba menyetor dana berarti mendapat bunga sekaligus token reward yang harganya melonjak. Orang berlomba memindahkan dana ke berbagai protokol, memicu periode yang dikenang sebagai <strong>DeFi Summer</strong>. Total Value Locked di DeFi meledak dari sekitar 1 miliar menjadi belasan miliar dolar AS dalam hitungan bulan, menandai DeFi sebagai gelombang besar pertama setelah ledakan ICO 2017.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kamu menyetor 1.000 dolar AS stablecoin ke protokol DeFi dengan bunga 5 persen setahun. Berapa dolar AS bunga kotor selama satu tahun (abaikan bunga berbunga)?",
        answer: 50,
        tolerance: 0,
        prefix: "$",
        solution:
          "Bunga sama dengan 1.000 dikali 5 persen sama dengan 1.000 dikali 0,05 sama dengan <strong>50 dolar AS</strong> setahun. DeFi memungkinkan ini tanpa rekening bank, tapi tanpa jaring pengaman bank pula.",
        hint: "Kalikan modal dengan bunga dalam bentuk desimal.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap ciri sebagai milik DeFi atau keuangan tradisional (TradFi).",
        buckets: ["DeFi", "TradFi"],
        items: [
          { text: "Siapa pun bisa ikut tanpa pendaftaran atau persetujuan petugas", bucket: "DeFi" },
          { text: "Lembaga pusat menyimpan dana dan bisa membekukannya", bucket: "TradFi" },
          { text: "Aset tetap di dompet sendiri sampai transaksi disetujui", bucket: "DeFi" },
          { text: "Aturan dijalankan smart contract terbuka yang bisa diperiksa", bucket: "DeFi" },
          { text: "Kantor cabang dan jam operasional membatasi akses", bucket: "TradFi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "DeFi memindahkan layanan keuangan ke program di blockchain, tanpa bank atau bursa terpusat.",
          "Cirinya tanpa izin, terbuka, tanpa kustodian, dan komposabel seperti lego.",
          "TVL mengukur total nilai yang dikunci di protokol DeFi sebagai indikator pertumbuhan.",
          "DeFi Summer 2020 dipicu peluncuran token COMP oleh Compound pada Juni 2020.",
          "Kebebasan DeFi datang tanpa jaring pengaman, jadi risiko bug dan kerugian ditanggung sendiri.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa kepanjangan DeFi?",
            options: ["Defined finance", "Decentralized finance", "Deferred finance", "Default finance"],
            answer: 1,
            explain: "DeFi adalah decentralized finance, layanan keuangan terdesentralisasi di blockchain.",
          },
          {
            q: "Apa beda utama DeFi dan TradFi?",
            options: [
              "DeFi selalu lebih untung",
              "DeFi berjalan lewat program tanpa lembaga pusat yang menyimpan dana",
              "TradFi tidak punya regulator",
              "DeFi hanya untuk Bitcoin",
            ],
            answer: 1,
            explain: "DeFi dijalankan smart contract tanpa kustodian pusat; TradFi mengandalkan bank dan lembaga.",
          },
          {
            q: "Apa yang diukur oleh TVL?",
            options: [
              "Jumlah pengguna baru",
              "Total nilai aset yang dikunci di protokol DeFi",
              "Kecepatan jaringan",
              "Harga satu token",
            ],
            answer: 1,
            explain: "Total Value Locked mengukur total nilai aset yang ditaruh di dalam protokol DeFi.",
          },
          {
            q: "Peristiwa apa yang memicu DeFi Summer 2020?",
            options: [
              "Halving Bitcoin",
              "Peluncuran token COMP oleh Compound pada Juni 2020",
              "Runtuhnya FTX",
              "Bitcoin Pizza Day",
            ],
            answer: 1,
            explain: "Compound membagikan token COMP pada Juni 2020, memicu lonjakan dana di DeFi.",
          },
          {
            q: "Apa konsekuensi sifat tanpa kustodian di DeFi?",
            options: [
              "Bank menjamin semua kerugian",
              "Aset di dompet sendiri, tapi risiko bug ditanggung pengguna",
              "Tidak ada risiko sama sekali",
              "Transaksi selalu gratis",
            ],
            answer: 1,
            explain: "Tanpa kustodian dan jaring pengaman, pengguna memegang kendali sekaligus menanggung risikonya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "impermanent-loss",
    levelId: "defi",
    order: 6,
    title: "Impermanent Loss",
    summary:
      "Penyedia likuiditas bisa rugi relatif saat harga dua aset di kolam bergerak berbeda, dibanding sekadar menyimpan aset. Pahami penyebabnya, ukuran kerugiannya, dan kapan ia menjadi nyata.",
    durationMin: 14,
    tags: ["defi", "impermanent-loss", "amm", "likuiditas"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat kamu menjadi <strong>penyedia likuiditas</strong> di AMM, kamu menyetor dua aset ke kolam. Rumus x kali y sama dengan k membuat kolam otomatis menjual aset yang harganya naik dan membeli yang harganya turun. Akibatnya, saat harga dua aset bergerak berbeda, jatahmu di kolam bisa bernilai lebih kecil dibanding kalau kedua aset hanya kamu <strong>simpan diam</strong>. Selisih ini disebut <strong>impermanent loss</strong>.",
      },
      {
        type: "paragraph",
        html: "Disebut <em>impermanent</em> (sementara) karena selama harga belum benar-benar bergeser dan kamu belum menarik dana, kerugian itu hanya di atas kertas. Jika harga kembali ke titik awal, impermanent loss lenyap. Tapi begitu kamu menarik dana saat harga sudah jauh bergeser, kerugian itu menjadi <strong>nyata</strong> dan bisa menggerus keuntungan dari fee.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Makin jauh harga bergeser, makin besar kerugian",
        html: "Impermanent loss nol saat harga tidak berubah, lalu membesar makin cepat saat selisih harga melebar. Pada kenaikan harga 2 kali lipat, kerugian relatifnya sekitar 5,7 persen; pada 4 kali lipat, sekitar 20 persen. Fee yang kamu kumpulkan harus cukup besar untuk menutup ini.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser jumlah aset yang ditukar di kolam dan amati bagaimana rasio bergeser. Pergeseran rasio inilah yang membuat nilai jatah penyedia likuiditas tertinggal dibanding sekadar menyimpan.",
      },
      { type: "widget", widget: "SimulatorAMM" },
      {
        type: "video",
        comp: "AMMVideo",
        title: "Liquidity Pool & Swap",
        caption: "Memahami cara kolam menyeimbangkan dua aset membantu melihat dari mana impermanent loss berasal.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Uniswap_Logo.svg?width=400",
        alt: "Logo Uniswap, AMM yang menyadarkan banyak orang akan impermanent loss",
        caption: "Logo Uniswap, AMM yang membuat istilah impermanent loss dikenal luas di kalangan penyedia likuiditas.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Impermanent Loss vs Perubahan Harga Salah Satu Aset",
        unit: "kerugian relatif (%)",
        source: "rumus baku impermanent loss kolam 50/50, IL sama dengan 2 akar r dibagi (1 ditambah r) dikurangi 1",
        note: "Kerugian nol saat harga stabil dan membesar makin cepat saat harga bergeser jauh; pada harga 4 kali lipat mencapai sekitar 20 persen.",
        data: [
          { label: "Naik 0%", value: 0 },
          { label: "Naik 25%", value: 0.6 },
          { label: "Naik 50%", value: 2.0 },
          { label: "Naik 100%", value: 5.7 },
          { label: "Naik 200%", value: 13.4 },
          { label: "Naik 300%", value: 20.0 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: HODL vs jadi penyedia likuiditas",
        html: "Kamu punya 1 ETH (harga 100 dolar AS) dan 100 dolar AS stablecoin, total <strong>200 dolar AS</strong>. Jika kamu hanya menyimpannya (HODL) dan harga ETH naik jadi 200 dolar AS, nilainya menjadi 1 dikali 200 ditambah 100 sama dengan <strong>300 dolar AS</strong>. Jika kamu menyetor keduanya ke kolam AMM, rumus x kali y sama dengan k membuat kolam menjual sebagian ETH-mu saat harganya naik. Saat ditarik, nilai jatahmu hanya sekitar <strong>282,84 dolar AS</strong>. Selisih sekitar 17,16 dolar AS itulah impermanent loss, sekitar 5,7 persen.",
      },
      {
        type: "case",
        title: "Sejarah: Uniswap V1 2018 dan V2 2020 memopulerkan AMM",
        html: "Ketika <strong>Uniswap V1</strong> diluncurkan pada <strong>November 2018</strong> dan disusul <strong>Uniswap V2</strong> pada <strong>Mei 2020</strong>, ribuan orang untuk pertama kalinya menjadi penyedia likuiditas. Banyak yang awalnya hanya melihat janji fee, lalu terkejut menemukan nilai modalnya tertinggal dibanding sekadar menyimpan aset saat harga bergerak liar. Dari pengalaman pahit inilah istilah <strong>impermanent loss</strong> menyebar luas, dan kalkulator impermanent loss menjadi alat wajib sebelum orang menaruh dana di kolam AMM.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jika kamu HODL, nilai asetmu 300 dolar AS. Jika kamu menjadi penyedia likuiditas, nilainya hanya 282,84 dolar AS. Berapa dolar AS impermanent loss-nya?",
        answer: 17.16,
        tolerance: 0.2,
        prefix: "$",
        solution:
          "Impermanent loss sama dengan nilai HODL dikurangi nilai LP sama dengan 300 dikurangi 282,84 sama dengan <strong>17,16 dolar AS</strong>, atau sekitar 5,7 persen dari 300.",
        hint: "Kurangkan nilai posisi penyedia likuiditas dari nilai HODL.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan kondisi harga dengan kira-kira besar impermanent loss-nya (kolam 50/50).",
        pairs: [
          { left: "Harga tidak berubah", right: "Kerugian sekitar 0 persen" },
          { left: "Harga naik 50 persen", right: "Kerugian sekitar 2 persen" },
          { left: "Harga naik 100 persen (2x)", right: "Kerugian sekitar 5,7 persen" },
          { left: "Harga naik 300 persen (4x)", right: "Kerugian sekitar 20 persen" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Impermanent loss adalah kerugian relatif penyedia likuiditas dibanding sekadar menyimpan aset.",
          "Penyebabnya rumus x kali y sama dengan k yang menjual aset naik dan membeli aset turun.",
          "Disebut sementara karena lenyap bila harga kembali, tapi nyata bila ditarik saat harga bergeser.",
          "Makin jauh harga bergeser, makin besar kerugian: sekitar 5,7 persen pada 2x, 20 persen pada 4x.",
          "Fee yang dikumpulkan harus cukup besar untuk menutup impermanent loss agar tetap untung.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu impermanent loss?",
            options: [
              "Biaya gas yang hangus",
              "Kerugian relatif penyedia likuiditas dibanding sekadar menyimpan aset",
              "Pajak atas keuntungan kripto",
              "Kehilangan seed phrase",
            ],
            answer: 1,
            explain: "Impermanent loss adalah selisih nilai jatah kolam dibanding sekadar memegang aset.",
          },
          {
            q: "Apa penyebab impermanent loss?",
            options: [
              "Biaya jaringan naik",
              "Rumus kolam menjual aset yang naik dan membeli yang turun saat harga bergeser",
              "Bursa membekukan dana",
              "Token reward anjlok",
            ],
            answer: 1,
            explain: "Rumus x kali y sama dengan k otomatis menyeimbangkan ulang, membuat jatah tertinggal saat harga bergerak.",
          },
          {
            q: "Mengapa disebut 'impermanent' (sementara)?",
            options: [
              "Karena selalu hilang setelah sehari",
              "Karena lenyap jika harga kembali ke titik awal dan dana belum ditarik",
              "Karena hanya terjadi malam hari",
              "Karena dijamin protokol",
            ],
            answer: 1,
            explain: "Selama belum ditarik dan harga bisa kembali, kerugian itu hanya di atas kertas.",
          },
          {
            q: "Kira-kira berapa impermanent loss saat harga salah satu aset naik 2 kali lipat?",
            options: ["Sekitar 0,6 persen", "Sekitar 5,7 persen", "Sekitar 20 persen", "Sekitar 50 persen"],
            answer: 1,
            explain: "Pada kenaikan harga 2x, rumus baku memberi impermanent loss sekitar 5,7 persen.",
          },
          {
            q: "Apa yang membuat menyediakan likuiditas tetap bisa untung meski ada impermanent loss?",
            options: [
              "Harga selalu naik",
              "Fee yang dikumpulkan cukup besar untuk menutup impermanent loss",
              "Protokol mengganti kerugian",
              "Tidak ada cara untung",
            ],
            answer: 1,
            explain: "Selama fee melebihi impermanent loss, penyedia likuiditas tetap meraih keuntungan bersih.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "komposabilitas-money-lego",
    levelId: "defi",
    order: 7,
    title: "Komposabilitas: Money Lego",
    summary:
      "Protokol DeFi bisa saling tumpuk seperti balok lego: keluaran satu protokol menjadi masukan protokol lain. Inilah komposabilitas, kekuatan sekaligus sumber risiko berantai DeFi.",
    durationMin: 14,
    tags: ["defi", "komposabilitas", "money-lego", "aggregator"],
    blocks: [
      {
        type: "paragraph",
        html: "Salah satu sifat paling kuat DeFi adalah <strong>komposabilitas</strong>: karena semua protokol berjalan terbuka di blockchain yang sama, keluaran satu protokol bisa langsung menjadi masukan protokol lain. Orang menyebutnya <strong>money lego</strong>, karena protokol bisa ditumpuk seperti balok lego untuk membangun layanan baru tanpa minta izin siapa pun.",
      },
      {
        type: "paragraph",
        html: "Contohnya, kamu bisa menyetor aset ke protokol lending untuk dapat bunga, menerima token bukti setoran, lalu memakai token itu sebagai jaminan di protokol lain. Sebuah <strong>yield aggregator</strong> mengotomatiskan rangkaian ini: ia memindahkan dana ke kolam dengan imbal hasil terbaik dan terus melakukan <strong>auto-compounding</strong>, sehingga pengguna cukup setor sekali.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Money lego",
        html: "Komposabilitas berarti protokol <strong>tanpa izin</strong> bisa saling memanggil. Satu protokol menjadi balok dasar, protokol di atasnya menumpuk fungsi baru. Inilah yang membuat inovasi DeFi sangat cepat: tak perlu membangun semuanya dari nol.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Risiko berantai",
        html: "Tumpukan lego juga menumpuk risiko. Jika balok dasar (misalnya sebuah protokol lending atau stablecoin) bermasalah, semua protokol di atasnya bisa ikut runtuh. Komposabilitas mempercepat inovasi sekaligus menyebarkan kegagalan lebih luas.",
      },
      {
        type: "video",
        comp: "AMMVideo",
        title: "Protokol yang Saling Tumpuk",
        caption: "Kolam likuiditas adalah salah satu balok dasar yang dipakai ulang oleh banyak protokol DeFi di atasnya.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethereum_logo_2014.svg?width=400",
        alt: "Logo Ethereum, lapisan dasar tempat protokol DeFi saling tumpuk",
        caption: "Logo Ethereum, blockchain terbuka yang menjadi fondasi tempat protokol DeFi saling tumpuk seperti lego.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Auto-Compounding Menaikkan APY Efektif (dari APR nominal 5%)",
        unit: "APY efektif (%)",
        source: "perhitungan bunga majemuk dari APR nominal 5 persen",
        note: "Aggregator yang otomatis menanam ulang imbal hasil membuat APY efektif sedikit lebih tinggi daripada APR nominal; makin sering compound, makin tinggi.",
        data: [
          { label: "Tanpa compound", value: 5.0, color: "#94a3b8" },
          { label: "Compound bulanan", value: 5.12, color: "#627eea" },
          { label: "Compound harian", value: 5.13, color: "#26a17b" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menumpuk dua sumber imbal hasil",
        html: "Sebuah strategi aggregator menyetor stablecoin-mu ke protokol lending yang memberi bunga <strong>4 persen</strong> setahun, lalu memakai token reward yang didapat untuk menambah <strong>3 persen</strong> lagi. Dengan menumpuk dua balok lego ini, total imbal hasil menjadi 4 ditambah 3 sama dengan <strong>7 persen</strong>, semua dikelola otomatis oleh satu kontrak. Kamu cukup setor sekali, tapi kamu juga menanggung risiko kedua protokol sekaligus.",
      },
      {
        type: "case",
        title: "Sejarah: Yearn Finance dan lahirnya yield aggregator, 2020",
        html: "Pada <strong>2020</strong>, di tengah DeFi Summer, Andre Cronje meluncurkan <strong>Yearn Finance</strong> (token YFI). Yearn adalah salah satu <strong>yield aggregator</strong> pertama yang populer: ia otomatis memindahkan dana pengguna ke protokol lending dan kolam dengan imbal hasil terbaik, lalu menanam ulang hasilnya. Yang menarik, token YFI dibagikan tanpa penjualan awal ke pendiri, dan harganya sempat melampaui harga satu Bitcoin. Yearn menjadi bukti nyata kekuatan money lego: ia tidak membangun protokol lending sendiri, melainkan menumpuk di atas protokol yang sudah ada seperti Compound dan Aave.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah aggregator menumpuk dua sumber imbal hasil: 4 persen dari lending dan 3 persen dari token reward. Berapa persen total imbal hasil tahunannya?",
        answer: 7,
        tolerance: 0,
        suffix: "%",
        solution:
          "Total sama dengan 4 ditambah 3 sama dengan <strong>7 persen</strong>. Menumpuk balok lego menggabungkan beberapa sumber imbal hasil, tapi juga menumpuk risiko tiap protokol.",
        hint: "Jumlahkan kedua sumber imbal hasil.",
      },
      {
        type: "classifyExercise",
        prompt: "Mana yang mencerminkan komposabilitas (money lego) dan mana yang bukan?",
        buckets: ["Komposabilitas", "Bukan komposabilitas"],
        items: [
          { text: "Token bukti setor dari protokol lending dipakai sebagai jaminan di protokol lain", bucket: "Komposabilitas" },
          { text: "Aggregator otomatis memindahkan dana antarprotokol untuk imbal hasil terbaik", bucket: "Komposabilitas" },
          { text: "Sebuah bank tertutup yang tidak bisa dihubungkan ke aplikasi lain", bucket: "Bukan komposabilitas" },
          { text: "Protokol baru menumpuk di atas kolam likuiditas yang sudah ada", bucket: "Komposabilitas" },
          { text: "Aplikasi yang menyimpan data secara rahasia dan tidak bisa dipanggil program lain", bucket: "Bukan komposabilitas" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Komposabilitas berarti keluaran satu protokol DeFi bisa menjadi masukan protokol lain.",
          "Karena bisa ditumpuk seperti lego, DeFi disebut money lego dan inovasinya sangat cepat.",
          "Yield aggregator menumpuk beberapa protokol dan auto-compounding agar pengguna cukup setor sekali.",
          "Yearn Finance (2020) adalah contoh awal aggregator yang menumpuk di atas Compound dan Aave.",
          "Tumpukan lego juga menumpuk risiko: kegagalan balok dasar bisa merembet ke atasnya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa arti komposabilitas (money lego) di DeFi?",
            options: [
              "Semua protokol memakai satu token",
              "Keluaran satu protokol bisa menjadi masukan protokol lain, ditumpuk seperti lego",
              "Hanya bisa memakai satu aplikasi",
              "Protokol dilarang saling memanggil",
            ],
            answer: 1,
            explain: "Karena terbuka di blockchain yang sama, protokol DeFi bisa saling tumpuk dan memanggil.",
          },
          {
            q: "Apa yang dilakukan sebuah yield aggregator?",
            options: [
              "Menambang Bitcoin",
              "Otomatis memindahkan dana ke imbal hasil terbaik dan menanam ulang hasilnya",
              "Mencetak stablecoin baru",
              "Menyimpan seed phrase pengguna",
            ],
            answer: 1,
            explain: "Aggregator mengotomatiskan pencarian imbal hasil terbaik dan auto-compounding.",
          },
          {
            q: "Protokol apa yang menjadi contoh awal yield aggregator pada 2020?",
            options: ["Bitcoin", "Yearn Finance", "FTX", "DigiCash"],
            answer: 1,
            explain: "Yearn Finance (token YFI) populer pada 2020 sebagai aggregator yang menumpuk di atas protokol lain.",
          },
          {
            q: "Apa keuntungan auto-compounding bagi APY efektif?",
            options: [
              "Menurunkan imbal hasil",
              "Membuat APY efektif sedikit lebih tinggi daripada APR nominal",
              "Tidak berpengaruh sama sekali",
              "Menghapus semua risiko",
            ],
            answer: 1,
            explain: "Menanam ulang imbal hasil secara berkala menaikkan APY efektif di atas APR nominal.",
          },
          {
            q: "Apa risiko utama dari komposabilitas?",
            options: [
              "Inovasi jadi lambat",
              "Kegagalan satu balok dasar bisa merembet ke protokol di atasnya",
              "Biaya gas selalu nol",
              "Protokol tidak bisa saling terhubung",
            ],
            answer: 1,
            explain: "Menumpuk protokol juga menumpuk risiko, sehingga kegagalan bisa menyebar berantai.",
          },
        ],
      },
    ],
  },
];
