import type { Lesson } from "../../../types";

export const level9: Lesson[] = [
  // ============================================================
  {
    id: "fiat-backed",
    levelId: "stablecoin",
    order: 1,
    title: "Stablecoin Fiat-Backed",
    summary:
      "Satu token dijamin satu dolar cadangan nyata. Memahami USDT dan USDC, peran penerbit, audit cadangan, dan risiko kepercayaan.",
    durationMin: 14,
    tags: ["stablecoin", "fiat-backed", "usdt", "usdc", "cadangan"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Stablecoin fiat-backed</strong> adalah token kripto yang nilainya dipatok ke mata uang biasa, paling sering dolar AS, dengan janji sederhana: tiap satu token didukung oleh satu dolar cadangan nyata yang disimpan penerbit. Dua yang terbesar adalah <strong>USDT</strong> (Tether) dan <strong>USDC</strong>.",
      },
      {
        type: "paragraph",
        html: "Berbeda dari Bitcoin yang harganya berayun liar, stablecoin dirancang agar nilainya selalu mendekati 1 dolar. Kestabilan ini membuatnya berguna untuk berdagang, mengirim uang, dan menyimpan nilai sementara tanpa keluar dari dunia kripto.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Janji 1:1",
        html: "Untuk tiap token yang beredar, penerbit berjanji menyimpan <strong>1 dolar cadangan</strong> (uang tunai atau aset setara kas). Jika 100 juta token beredar, idealnya ada 100 juta dolar cadangan. Inilah arti rasio cadangan 100%.",
      },
      {
        type: "video",
        comp: "StablecoinPegVideo",
        title: "Menjaga Harga di Sekitar 1 Dolar",
        caption: "Bagaimana stablecoin berusaha menjaga nilainya tetap dekat dengan satu dolar.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Risiko kepercayaan",
        html: "Seluruh sistem bergantung pada satu hal: apakah penerbit benar-benar menyimpan cadangan yang dijanjikan. Jika cadangan ternyata kurang atau tidak likuid, kepercayaan bisa runtuh dan harga token jatuh di bawah 1 dolar. Karena itu <strong>audit cadangan</strong> dan transparansi sangat penting.",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Pangsa Stablecoin berdasarkan Kapitalisasi (ilustrasi)",
        unit: "% kapitalisasi stablecoin",
        source: "ilustrasi edukatif, urutan sesuai dominasi nyata",
        note: "USDT dan USDC secara konsisten mendominasi pasar stablecoin; sisanya dibagi banyak token lain.",
        data: [
          { label: "USDT", value: 68, color: "#26a17b" },
          { label: "USDC", value: 22, color: "#2775ca" },
          { label: "Lainnya", value: 10, color: "#94a3b8" },
        ],
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tether_Logo.svg?width=400",
        alt: "Logo Tether (USDT), stablecoin fiat-backed terbesar yang dipatok ke dolar AS",
        caption: "Logo Tether (USDT), stablecoin fiat-backed terbesar yang nilainya dipatok ke dolar AS.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "case",
        title: "Studi Kasus: Memeriksa rasio cadangan",
        html: "Sebuah penerbit stablecoin menyatakan ada <strong>100 juta token</strong> beredar dan melaporkan cadangan <strong>98 juta dolar AS</strong> dalam kas dan surat utang jangka pendek. Rasio cadangannya 98 juta dibagi 100 juta sama dengan 98%. Angka di bawah 100% jadi sinyal waspada: bila banyak orang menebus token sekaligus, penerbit bisa kekurangan dana untuk membayar semua pada nilai penuh.",
      },
      {
        type: "case",
        title: "Sejarah: Tether didenda soal cadangan, Februari 2021",
        html: "Kepercayaan pada stablecoin fiat-backed berdiri di atas kejujuran soal cadangan. Pada <strong>Februari 2021</strong>, Jaksa Agung New York menyelesaikan penyelidikan terhadap <strong>Tether (USDT)</strong> dan bursa terkaitnya, Bitfinex. Penyelidikan menyimpulkan klaim bahwa USDT sepenuhnya didukung dolar tidak selalu benar pada periode tertentu. Tether setuju membayar denda <strong>18,5 juta dolar AS</strong> dan berhenti beroperasi di New York, serta wajib melaporkan rincian cadangannya secara berkala. Kasus ini menegaskan bahwa transparansi cadangan bukan formalitas, melainkan inti kepercayaan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah stablecoin punya 100 juta token beredar. Berapa juta dolar AS cadangan yang dibutuhkan agar rasio cadangan tepat 100%?",
        answer: 100,
        tolerance: 0,
        prefix: "$",
        suffix: "juta",
        solution:
          "Rasio 100% berarti tiap token didukung 1 dolar. 100 juta token x 1 dolar = <strong>100 juta dolar AS</strong> cadangan.",
        hint: "Kalikan jumlah token dengan 1 dolar per token.",
      },
      {
        type: "classifyExercise",
        prompt: "Mana yang memperkuat kepercayaan pada stablecoin fiat-backed dan mana yang melemahkannya?",
        buckets: ["Memperkuat", "Melemahkan"],
        items: [
          { text: "Audit cadangan rutin oleh pihak independen", bucket: "Memperkuat" },
          { text: "Cadangan kurang dari jumlah token beredar", bucket: "Melemahkan" },
          { text: "Laporan transparan tentang isi cadangan", bucket: "Memperkuat" },
          { text: "Penerbit menolak membuka rincian cadangan", bucket: "Melemahkan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Stablecoin fiat-backed dipatok ke dolar AS dengan janji 1 token didukung 1 dolar cadangan.",
          "USDT (Tether) dan USDC adalah dua stablecoin fiat-backed terbesar.",
          "Rasio cadangan 100% berarti cadangan sama besar dengan jumlah token beredar.",
          "Audit dan transparansi cadangan menjaga kepercayaan pengguna.",
          "Risiko utamanya adalah cadangan yang kurang atau tidak likuid sehingga peg bisa lepas.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa janji inti stablecoin fiat-backed?",
            options: [
              "Harganya selalu naik",
              "Tiap token didukung satu dolar cadangan nyata",
              "Tidak butuh penerbit",
              "Pasokannya tak terbatas",
            ],
            answer: 1,
            explain: "Stablecoin fiat-backed menjanjikan 1 dolar cadangan untuk tiap token yang beredar.",
          },
          {
            q: "Manakah contoh stablecoin fiat-backed?",
            options: ["Bitcoin", "USDT dan USDC", "Ether", "Dogecoin"],
            answer: 1,
            explain: "USDT (Tether) dan USDC adalah stablecoin yang didukung cadangan dolar.",
          },
          {
            q: "Jika 100 juta token beredar, berapa cadangan untuk rasio 100%?",
            options: ["50 juta dolar", "100 juta dolar", "200 juta dolar", "10 juta dolar"],
            answer: 1,
            explain: "Rasio 100% berarti cadangan sama dengan jumlah token, yaitu 100 juta dolar.",
          },
          {
            q: "Mengapa audit cadangan penting?",
            options: [
              "Agar harga naik",
              "Untuk memastikan penerbit benar menyimpan cadangan yang dijanjikan",
              "Untuk menambah pasokan token",
              "Agar transaksi gratis",
            ],
            answer: 1,
            explain: "Audit memverifikasi bahwa cadangan benar-benar ada, menjaga kepercayaan pengguna.",
          },
          {
            q: "Apa risiko utama stablecoin fiat-backed?",
            options: [
              "Terlalu banyak konfirmasi blok",
              "Cadangan kurang atau tidak likuid sehingga peg lepas",
              "Harga tidak pernah berubah",
              "Tidak ada penerbit",
            ],
            answer: 1,
            explain: "Bila cadangan tak cukup atau sulit dicairkan, kepercayaan runtuh dan harga jatuh di bawah 1 dolar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "crypto-backed",
    levelId: "stablecoin",
    order: 2,
    title: "Stablecoin Crypto-Backed",
    summary:
      "Stablecoin yang dijamin aset kripto, bukan dolar. Memahami overcollateralization, rasio jaminan tinggi, dan harga likuidasi lewat contoh DAI.",
    durationMin: 14,
    tags: ["stablecoin", "crypto-backed", "dai", "jaminan", "makerdao"],
    blocks: [
      {
        type: "paragraph",
        html: "Tidak semua stablecoin didukung dolar di bank. <strong>Stablecoin crypto-backed</strong> dijamin oleh aset kripto seperti Ether yang dikunci dalam smart contract. Contoh paling terkenal adalah <strong>DAI</strong>, yang dikelola lewat sistem <strong>MakerDAO</strong>.",
      },
      {
        type: "paragraph",
        html: "Masalahnya, harga kripto naik turun tajam. Jika jaminannya jatuh nilai, stablecoin bisa kehilangan dukungan. Solusinya adalah <strong>overcollateralization</strong>: pengguna mengunci jaminan yang nilainya jauh lebih besar daripada stablecoin yang dicetak.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Overcollateralization",
        html: "Untuk mencetak stablecoin, kamu harus mengunci jaminan kripto yang nilainya melebihi token yang kamu buat. Pada rasio minimum <strong>150%</strong>, mencetak 100 DAI butuh jaminan senilai 150 dolar AS. Kelebihan jaminan ini jadi bantalan terhadap penurunan harga.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser nilai jaminan dan jumlah stablecoin yang dicetak untuk melihat <strong>rasio jaminan</strong> dan <strong>harga likuidasi</strong>, yaitu titik harga saat jaminanmu mulai dilelang.",
      },
      { type: "widget", widget: "SimulatorCollateralStablecoin" },
      {
        type: "video",
        comp: "StablecoinPegVideo",
        title: "Menjaga Harga di Sekitar 1 Dolar",
        caption: "Bagaimana stablecoin berusaha menjaga nilainya tetap dekat satu dolar, termasuk model yang dijamin kripto.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Blockchain.svg?width=400",
        alt: "Diagram rantai blok yang menjadi tempat jaminan kripto dikunci dalam smart contract",
        caption: "Jaminan kripto stablecoin seperti DAI dikunci dalam smart contract di atas blockchain.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Risiko likuidasi",
        html: "Bila harga jaminan jatuh sampai rasio menyentuh batas minimum, sistem otomatis menjual jaminanmu untuk melunasi utang stablecoin. Inilah <strong>likuidasi</strong>. Karena itu pengguna biasa menjaga rasio jauh di atas minimum agar punya ruang aman.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Rasio Jaminan: Fiat-Backed vs Crypto-Backed (ilustrasi)",
        unit: "rasio jaminan minimum (%)",
        source: "ilustrasi edukatif pola yang umum dipakai",
        note: "Stablecoin crypto-backed butuh rasio jauh di atas 100% karena jaminannya bisa berayun nilai.",
        data: [
          { label: "Fiat-backed", value: 100, color: "#26a17b" },
          { label: "Crypto-backed", value: 150, color: "#f5ac37" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Saat jaminan turun nilai",
        html: "Seorang pengguna mengunci jaminan Ether senilai <strong>300 dolar AS</strong> lalu mencetak <strong>150 DAI</strong>. Rasio jaminannya 300 dibagi 150 sama dengan 200%, aman. Lalu harga Ether turun sehingga jaminannya tinggal <strong>225 dolar AS</strong>. Rasio jadi 225 dibagi 150 sama dengan 150%, tepat di batas minimum. Bila Ether turun lagi, jaminan akan dilikuidasi. Pelajarannya: selalu sisakan bantalan jauh di atas 150%.",
      },
      {
        type: "case",
        title: "Sejarah: Black Thursday MakerDAO, Maret 2020",
        html: "Pada <strong>12 Maret 2020</strong>, saat pasar panik di awal pandemi COVID-19, harga Ether anjlok sekitar setengahnya dalam sehari. Jaringan Ethereum macet dan biaya transaksi melonjak, sehingga lelang likuidasi <strong>MakerDAO</strong> sempat dimenangkan dengan tawaran nyaris <strong>0 DAI</strong>. Akibatnya sistem menanggung utang macet sekitar <strong>4 juta dolar AS</strong>, yang akhirnya ditutup dengan melelang token tata kelola MKR. Peristiwa yang dijuluki Black Thursday ini menunjukkan bahwa overcollateralization saja tidak cukup; mekanisme likuidasi juga harus tahan saat pasar dan jaringan sama-sama tertekan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada rasio jaminan minimum 150%, berapa dolar AS jaminan yang dibutuhkan untuk mencetak 100 DAI (anggap 1 DAI = 1 dolar)?",
        answer: 150,
        tolerance: 0,
        prefix: "$",
        solution:
          "100 DAI senilai 100 dolar. Rasio 150% berarti jaminan = 100 x 1,5 = <strong>150 dolar AS</strong>. Kelebihan 50 dolar adalah bantalan terhadap penurunan harga.",
        hint: "Kalikan nilai stablecoin yang dicetak dengan 1,5.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan istilah crypto-backed dengan artinya.",
        pairs: [
          { left: "Overcollateralization", right: "Jaminan dikunci lebih besar daripada stablecoin yang dicetak" },
          { left: "Rasio jaminan", right: "Perbandingan nilai jaminan terhadap utang stablecoin" },
          { left: "Likuidasi", right: "Penjualan paksa jaminan saat rasio menyentuh batas minimum" },
          { left: "Harga likuidasi", right: "Titik harga jaminan yang memicu pelelangan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Stablecoin crypto-backed dijamin aset kripto, bukan dolar di bank; contohnya DAI lewat MakerDAO.",
          "Karena harga kripto berayun, jaminan harus overcollateralized, lebih besar dari token yang dicetak.",
          "Pada rasio minimum 150%, mencetak 100 DAI butuh jaminan senilai 150 dolar.",
          "Rasio jaminan mengukur seberapa aman posisi; makin tinggi makin aman.",
          "Bila harga jaminan jatuh sampai batas minimum, jaminan dilikuidasi otomatis.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang menjamin stablecoin crypto-backed seperti DAI?",
            options: ["Dolar di bank", "Aset kripto yang dikunci", "Emas fisik", "Saham perusahaan"],
            answer: 1,
            explain: "DAI dijamin aset kripto yang dikunci dalam smart contract, bukan dolar di bank.",
          },
          {
            q: "Mengapa stablecoin crypto-backed perlu overcollateralization?",
            options: [
              "Agar harganya naik",
              "Karena harga jaminan kripto bisa turun tajam",
              "Supaya tanpa penerbit",
              "Agar pasokannya tak terbatas",
            ],
            answer: 1,
            explain: "Kelebihan jaminan jadi bantalan ketika nilai jaminan kripto turun.",
          },
          {
            q: "Pada rasio minimum 150%, berapa jaminan untuk mencetak 100 DAI?",
            options: ["100 dolar", "150 dolar", "50 dolar", "200 dolar"],
            answer: 1,
            explain: "100 DAI x 1,5 = 150 dolar jaminan yang dibutuhkan.",
          },
          {
            q: "Apa itu likuidasi pada sistem crypto-backed?",
            options: [
              "Menambah jaminan",
              "Penjualan paksa jaminan saat rasio menyentuh batas minimum",
              "Mencetak token baru",
              "Menurunkan biaya",
            ],
            answer: 1,
            explain: "Saat rasio jatuh ke batas minimum, jaminan dijual otomatis untuk melunasi utang stablecoin.",
          },
          {
            q: "Bagaimana cara menghindari likuidasi?",
            options: [
              "Mencetak sebanyak mungkin DAI",
              "Menjaga rasio jaminan jauh di atas minimum",
              "Menghapus jaminan",
              "Menunggu harga turun",
            ],
            answer: 1,
            explain: "Menjaga rasio jauh di atas 150% memberi ruang aman terhadap penurunan harga jaminan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "algoritmik-peg",
    levelId: "stablecoin",
    order: 3,
    title: "Stablecoin Algoritmik & Mekanisme Peg",
    summary:
      "Stablecoin tanpa jaminan penuh yang menjaga harga lewat aturan suplai. Memahami mekanisme mint-burn dan arbitrase, serta keruntuhan TerraUSD 2022.",
    durationMin: 15,
    tags: ["stablecoin", "algoritmik", "peg", "terra", "ust"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Stablecoin algoritmik</strong> mencoba menjaga harga di sekitar 1 dolar tanpa cadangan penuh berupa dolar atau kripto. Sebagai gantinya, ia mengandalkan <strong>aturan suplai</strong>: program otomatis menambah atau mengurangi jumlah token agar harga kembali ke peg.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Mekanisme mint-burn",
        html: "Ketika harga di atas 1 dolar, sistem mencetak (<strong>mint</strong>) token baru agar pasokan naik dan harga turun. Ketika harga di bawah 1 dolar, sistem memusnahkan (<strong>burn</strong>) token agar pasokan menyusut dan harga naik. <strong>Arbitrase</strong> oleh pedagang yang mengejar selisih harga seharusnya mendorong harga kembali ke 1 dolar.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Mengapa rapuh",
        html: "Mekanisme ini bekerja selama orang masih percaya. Bila kepercayaan hilang dan banyak orang menjual bersamaan, sistem mencetak token makin banyak untuk menahan harga, tetapi justru membanjiri pasar. Harga dan token pasangannya bisa jatuh bersama dalam <strong>death spiral</strong> (spiral kematian).",
      },
      {
        type: "video",
        comp: "StablecoinPegVideo",
        title: "Menjaga Harga di Sekitar 1 Dolar",
        caption: "Bagaimana mekanisme suplai berusaha menarik harga kembali ke satu dolar, dan kapan itu gagal.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tether_Logo.svg?width=400",
        alt: "Logo Tether (USDT) sebagai pembanding stablecoin yang didukung cadangan nyata",
        caption: "Berbeda dari model algoritmik, stablecoin seperti USDT bersandar pada cadangan nyata, bukan sekadar aturan suplai.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Harga TerraUSD (UST) saat Keruntuhan Mei 2022 (ilustrasi)",
        unit: "harga UST (dolar AS)",
        source: "ilustrasi berdasarkan peristiwa nyata Mei 2022",
        note: "Setelah peg lepas, mekanisme algoritmik gagal menariknya kembali dan harga runtuh dalam hitungan hari.",
        data: [
          { label: "7 Mei", value: 1.0 },
          { label: "9 Mei", value: 0.75 },
          { label: "11 Mei", value: 0.3 },
          { label: "13 Mei", value: 0.1 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Bagaimana arbitrase menutup selisih harga",
        html: "Bayangkan stablecoin algoritmik berharga <strong>0,98 dolar AS</strong>, sedikit di bawah peg. Sistem mengizinkan menukar 1 token dengan aset pasangan senilai <strong>1,00 dolar AS</strong> lalu memusnahkan token itu. Seorang pedagang membeli token seharga 0,98 dolar, menebusnya senilai 1,00 dolar, dan mengantongi <strong>0,02 dolar AS</strong> per token. Aksi ini mengurangi pasokan dan mendorong harga naik kembali ke 1 dolar. Selama tetap ada pembeli aset pasangan, mekanisme ini bekerja; begitu kepercayaan hilang, justru mekanisme yang sama bisa berubah jadi death spiral.",
      },
      {
        type: "case",
        title: "Sejarah: Keruntuhan TerraUSD (UST), Mei 2022",
        html: "<strong>TerraUSD (UST)</strong> adalah stablecoin algoritmik yang dipasangkan dengan token <strong>LUNA</strong>. Ketika UST di bawah 1 dolar, pengguna bisa menukarnya untuk LUNA baru senilai 1 dolar, sehingga UST dimusnahkan dan LUNA dicetak. Pada awal <strong>Mei 2022</strong>, penarikan besar membuat UST lepas dari peg. Sistem mencetak LUNA dalam jumlah amat besar untuk menahan UST, tetapi banjir LUNA membuat harganya ambruk hampir ke nol. Dalam beberapa hari, nilai sekitar <strong>puluhan miliar dolar AS</strong> lenyap. Peristiwa ini jadi pelajaran paling mahal tentang risiko stablecoin algoritmik.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jika sebuah stablecoin algoritmik berharga 0,80 dolar AS, berapa dolar AS jarak harga itu dari peg 1,00 dolar AS?",
        answer: 0.2,
        tolerance: 0,
        prefix: "$",
        solution:
          "1,00 - 0,80 = <strong>0,20 dolar AS</strong> di bawah peg. Selisih ini yang seharusnya dipersempit oleh mekanisme burn dan arbitrase.",
        hint: "Kurangkan harga sekarang dari nilai peg 1 dolar.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap stablecoin sesuai jenis dukungannya.",
        buckets: ["Fiat-backed", "Crypto-backed", "Algoritmik"],
        items: [
          { text: "USDT, didukung cadangan dolar", bucket: "Fiat-backed" },
          { text: "USDC, didukung cadangan dolar", bucket: "Fiat-backed" },
          { text: "DAI, dijamin kripto yang overcollateralized", bucket: "Crypto-backed" },
          { text: "TerraUSD (UST), menjaga peg lewat mekanisme suplai", bucket: "Algoritmik" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Stablecoin algoritmik menjaga peg lewat aturan suplai, bukan cadangan penuh.",
          "Mekanisme mint-burn menambah pasokan saat harga tinggi dan mengurangi saat harga rendah.",
          "Arbitrase pedagang diharapkan menarik harga kembali ke 1 dolar.",
          "Model ini rapuh: hilangnya kepercayaan bisa memicu death spiral.",
          "TerraUSD runtuh Mei 2022 dan melenyapkan nilai puluhan miliar dolar AS.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bagaimana stablecoin algoritmik menjaga peg?",
            options: [
              "Dengan cadangan dolar penuh",
              "Dengan aturan suplai yang menambah atau mengurangi token",
              "Dengan emas fisik",
              "Dengan menaikkan biaya transaksi",
            ],
            answer: 1,
            explain: "Stablecoin algoritmik mengatur jumlah token lewat mint-burn untuk menjaga harga di peg.",
          },
          {
            q: "Apa yang dilakukan sistem saat harga di bawah 1 dolar?",
            options: [
              "Mencetak lebih banyak token",
              "Memusnahkan token agar pasokan menyusut",
              "Membekukan semua transaksi",
              "Menaikkan rasio jaminan",
            ],
            answer: 1,
            explain: "Burn mengurangi pasokan sehingga, secara teori, harga terdorong kembali naik ke peg.",
          },
          {
            q: "Apa itu death spiral pada stablecoin algoritmik?",
            options: [
              "Harga naik tanpa henti",
              "Penjualan massal memicu pencetakan berlebih sehingga harga ambruk",
              "Cadangan bertambah otomatis",
              "Jaringan berhenti bekerja",
            ],
            answer: 1,
            explain: "Hilangnya kepercayaan membuat token dicetak makin banyak, membanjiri pasar dan menjatuhkan harga.",
          },
          {
            q: "Kapan TerraUSD (UST) runtuh?",
            options: ["Mei 2022", "Januari 2009", "Maret 2020", "Mei 2010"],
            answer: 0,
            explain: "TerraUSD kehilangan peg dan runtuh pada Mei 2022.",
          },
          {
            q: "Apa pelajaran utama dari keruntuhan TerraUSD?",
            options: [
              "Stablecoin selalu aman",
              "Stablecoin algoritmik tanpa jaminan penuh sangat berisiko",
              "Cadangan dolar tidak perlu",
              "Arbitrase selalu berhasil",
            ],
            answer: 1,
            explain: "Tanpa jaminan penuh, hilangnya kepercayaan bisa menghapus nilai puluhan miliar dolar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "reserve-risk",
    levelId: "stablecoin",
    order: 4,
    title: "Reserve & Manajemen Risiko",
    summary:
      "Kualitas cadangan, transparansi, dan risiko depeg. Memahami beda kas dan surat utang, serta de-peg sementara USDC Maret 2023 terkait Silicon Valley Bank.",
    durationMin: 14,
    tags: ["stablecoin", "cadangan", "risiko", "depeg", "usdc"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah stablecoin fiat-backed hanya sekuat <strong>cadangannya</strong>. Tetapi tidak semua cadangan sama. Cadangan berupa <strong>kas</strong> bisa langsung dipakai membayar penebusan, sementara cadangan berupa <strong>surat utang</strong> harus dijual dulu, dan nilainya bisa berubah atau sulit dicairkan cepat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kualitas cadangan menentukan keamanan",
        html: "Cadangan ideal didominasi <strong>kas dan setara kas</strong> yang sangat likuid. Makin banyak porsi aset yang sulit dicairkan atau berisiko, makin besar peluang penerbit kesulitan membayar saat penebusan terjadi serentak.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Transparansi dan audit",
        html: "Penerbit yang baik menerbitkan laporan berkala tentang isi cadangan dan diperiksa pihak independen. Transparansi ini membantu pengguna menilai apakah peg benar-benar terjamin, bukan sekadar janji.",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Komposisi Cadangan Stablecoin yang Sehat (ilustrasi)",
        unit: "% komposisi cadangan",
        source: "ilustrasi edukatif pola cadangan yang umum",
        note: "Cadangan yang sehat didominasi kas dan surat utang jangka pendek yang mudah dicairkan.",
        data: [
          { label: "Kas & setara kas", value: 80, color: "#26a17b" },
          { label: "Surat utang jangka pendek", value: 15, color: "#2775ca" },
          { label: "Aset lain", value: 5, color: "#94a3b8" },
        ],
      },
      {
        type: "video",
        comp: "StablecoinPegVideo",
        title: "Menjaga Harga di Sekitar 1 Dolar",
        caption: "Mengapa kualitas cadangan menentukan apakah peg bertahan saat banyak orang menebus sekaligus.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Blockchain.svg?width=400",
        alt: "Diagram rantai blok yang mencatat penerbitan dan penebusan stablecoin secara transparan",
        caption: "Blockchain mencatat pasokan token secara terbuka, tetapi cadangan di dunia nyata tetap harus diaudit terpisah.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Risiko depeg",
        html: "<strong>Depeg</strong> adalah saat harga stablecoin lepas dari 1 dolar. Pemicunya bisa cadangan yang kurang, aset cadangan yang macet, atau kepanikan pasar. Depeg bisa sementara bila cadangannya sebenarnya sehat, tetapi bisa permanen bila cadangannya memang bermasalah.",
      },
      {
        type: "case",
        title: "Studi Kasus: Membaca laporan cadangan",
        html: "Sebuah penerbit melaporkan total cadangan <strong>50 miliar dolar AS</strong> untuk <strong>50 miliar token</strong> beredar, terdiri atas <strong>42 miliar dolar AS kas dan surat utang jangka pendek</strong> serta 8 miliar dolar AS aset lain yang lebih sulit dicairkan. Rasio cadangannya tepat 100%, terlihat sehat. Namun bila penebusan besar datang serentak, hanya bagian likuid yang bisa segera dibayar. Karena itu pembaca laporan tidak cukup melihat angka total; ia harus menilai berapa porsi cadangan yang benar-benar likuid.",
      },
      {
        type: "case",
        title: "Sejarah: De-peg sementara USDC, Maret 2023",
        html: "Pada <strong>Maret 2023</strong>, bank <strong>Silicon Valley Bank (SVB)</strong> di AS kolaps. Penerbit USDC menyimpan sebagian cadangan kasnya, sekitar <strong>3,3 miliar dolar AS</strong>, di bank itu. Saat kabar tersebar, pengguna panik dan harga USDC sempat turun ke sekitar <strong>0,87 dolar AS</strong>. Namun karena sebagian besar cadangan USDC tetap utuh dan dana di SVB akhirnya dijamin, USDC kembali ke <strong>1 dolar</strong> dalam beberapa hari. Ini contoh depeg sementara, kebalikan dari keruntuhan permanen TerraUSD.",
      },
      {
        type: "calcExercise",
        prompt:
          "Saat de-peg Maret 2023, USDC sempat turun ke sekitar 0,87 dolar AS. Berapa dolar AS jarak harga itu dari peg 1,00 dolar AS?",
        answer: 0.13,
        tolerance: 0,
        prefix: "$",
        solution:
          "1,00 - 0,87 = <strong>0,13 dolar AS</strong> di bawah peg. Selisih ini cepat pulih karena cadangan USDC secara keseluruhan tetap sehat.",
        hint: "Kurangkan harga terendah dari nilai peg 1 dolar.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan jenis stablecoin dengan sumber jaminannya.",
        pairs: [
          { left: "USDT", right: "Cadangan dolar (fiat)" },
          { left: "USDC", right: "Cadangan dolar (fiat)" },
          { left: "DAI", right: "Jaminan kripto yang overcollateralized" },
          { left: "TerraUSD (UST)", right: "Mekanisme suplai algoritmik tanpa jaminan penuh" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Mana depeg yang cenderung sementara dan mana yang cenderung permanen?",
        buckets: ["Cenderung sementara", "Cenderung permanen"],
        items: [
          { text: "Panik pasar padahal cadangan secara keseluruhan sehat", bucket: "Cenderung sementara" },
          { text: "Sebagian kas tersangkut sebentar di bank yang akhirnya dijamin", bucket: "Cenderung sementara" },
          { text: "Model algoritmik tanpa jaminan penuh kehilangan kepercayaan", bucket: "Cenderung permanen" },
          { text: "Cadangan ternyata jauh lebih kecil dari token beredar", bucket: "Cenderung permanen" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Stablecoin fiat-backed hanya sekuat kualitas dan likuiditas cadangannya.",
          "Kas dan setara kas lebih aman daripada surat utang yang harus dijual dulu.",
          "Transparansi dan audit cadangan membantu pengguna menilai keamanan peg.",
          "Depeg adalah lepasnya harga dari 1 dolar; bisa sementara atau permanen tergantung cadangan.",
          "USDC sempat depeg ke sekitar 0,87 dolar Maret 2023 karena SVB, lalu pulih ke 1 dolar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa kualitas cadangan stablecoin penting?",
            options: [
              "Agar harga selalu naik",
              "Karena cadangan yang likuid memudahkan membayar penebusan",
              "Agar transaksi gratis",
              "Supaya pasokan tak terbatas",
            ],
            answer: 1,
            explain: "Cadangan likuid seperti kas bisa langsung dipakai membayar saat pengguna menebus token.",
          },
          {
            q: "Manakah bentuk cadangan yang paling mudah dicairkan?",
            options: ["Surat utang jangka panjang", "Kas dan setara kas", "Aset properti", "Token kripto lain"],
            answer: 1,
            explain: "Kas dan setara kas paling likuid sehingga paling aman untuk menjaga peg.",
          },
          {
            q: "Apa itu depeg?",
            options: [
              "Saat harga stablecoin lepas dari 1 dolar",
              "Saat token dicetak ulang",
              "Saat biaya jaringan naik",
              "Saat audit dilakukan",
            ],
            answer: 0,
            explain: "Depeg adalah kondisi harga stablecoin menyimpang dari nilai patokan 1 dolar.",
          },
          {
            q: "Apa pemicu de-peg USDC pada Maret 2023?",
            options: [
              "Keruntuhan TerraUSD",
              "Sebagian cadangan kas tersangkut di Silicon Valley Bank yang kolaps",
              "Halving Bitcoin",
              "Serangan double spending",
            ],
            answer: 1,
            explain: "Sekitar 3,3 miliar dolar cadangan USDC ada di SVB yang kolaps, memicu kepanikan sementara.",
          },
          {
            q: "Mengapa de-peg USDC 2023 hanya sementara?",
            options: [
              "Karena tidak ada penerbit",
              "Karena sebagian besar cadangan tetap sehat dan dana di SVB akhirnya dijamin",
              "Karena USDC algoritmik",
              "Karena pasokannya tak terbatas",
            ],
            answer: 1,
            explain: "Cadangan USDC secara keseluruhan utuh, sehingga harga cepat pulih ke 1 dolar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "sejarah-stablecoin",
    levelId: "stablecoin",
    order: 5,
    title: "Sejarah & Peran Stablecoin",
    summary:
      "Mengapa stablecoin muncul sebagai jembatan fiat dan kripto, alat dagang serta remitansi, dan bagaimana pasarnya tumbuh dari nol menjadi ratusan miliar dolar AS.",
    durationMin: 14,
    tags: ["stablecoin", "sejarah", "remitansi", "pasar", "usdt"],
    blocks: [
      {
        type: "paragraph",
        html: "Harga kripto seperti Bitcoin bisa naik turun belasan persen dalam sehari. Bagi pedagang dan pengirim uang, ayunan itu merepotkan. <strong>Stablecoin</strong> lahir untuk menjawab masalah ini: aset kripto yang nilainya dipatok stabil ke dolar AS, sehingga bisa dipakai bertransaksi tanpa keluar dari dunia blockchain.",
      },
      {
        type: "paragraph",
        html: "Peran utama stablecoin ada tiga: menjadi <strong>jembatan</strong> antara uang fiat dan kripto, menjadi <strong>alat dagang</strong> yang stabil di bursa, dan menjadi cara <strong>remitansi</strong> lintas negara yang cepat dan murah dibanding transfer bank tradisional.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Jembatan, dagang, remitansi",
        html: "Saat ingin keluar dari posisi kripto yang bergejolak tanpa menarik ke bank, pedagang pindah ke <strong>stablecoin</strong>. Saat bursa mencatat harga, pasangan paling umum adalah token terhadap stablecoin. Saat pekerja migran mengirim uang pulang, stablecoin bisa sampai dalam hitungan menit dengan biaya kecil.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Dolar digital tanpa rekening bank dolar",
        html: "Stablecoin memungkinkan orang di mana pun memegang nilai setara dolar AS hanya dengan dompet kripto, tanpa harus membuka rekening bank dolar. Inilah salah satu alasan adopsinya cepat di negara dengan mata uang yang tidak stabil.",
      },
      {
        type: "video",
        comp: "StablecoinPegVideo",
        title: "Menjaga Harga di Sekitar 1 Dolar",
        caption: "Mengapa stablecoin bisa berfungsi sebagai dolar digital yang stabil untuk berdagang dan mengirim uang.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tether_Logo.svg?width=400",
        alt: "Logo Tether (USDT), stablecoin pertama yang jadi besar dan terbesar hingga kini",
        caption: "Tether (USDT) hadir sejak 2014 dan menjadi stablecoin terbesar yang menjembatani fiat dan kripto.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "area",
        title: "Pertumbuhan Total Kapitalisasi Stablecoin (ilustrasi)",
        unit: "miliar dolar AS",
        source: "ilustrasi berdasarkan tren pasar yang teramati",
        note: "Pasar tumbuh pesat sampai awal 2022, sempat menyusut setelah keruntuhan TerraUSD, lalu pulih kembali.",
        data: [
          { label: "2018", value: 3 },
          { label: "2020", value: 25 },
          { label: "2022", value: 180 },
          { label: "2024", value: 160 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Remitansi lewat stablecoin",
        html: "Seorang pekerja migran ingin mengirim <strong>200 dolar AS</strong> ke keluarganya. Lewat penyedia transfer tradisional, biayanya bisa sekitar 6%, yaitu <strong>12 dolar AS</strong>, dan dananya baru sampai beberapa hari kemudian. Memakai <strong>stablecoin</strong>, ia hanya membayar biaya jaringan kecil dan dana sampai dalam hitungan menit. Karena nilainya dipatok ke dolar, jumlah yang diterima tidak tergerus ayunan harga di tengah jalan.",
      },
      {
        type: "case",
        title: "Sejarah: Lahirnya USDT (2014) lalu USDC (2018)",
        html: "Stablecoin fiat-backed pertama yang jadi besar adalah <strong>Tether (USDT)</strong>, yang diluncurkan pada <strong>2014</strong> (awalnya bernama Realcoin sebelum berganti nama menjadi Tether). USDT dengan cepat jadi jembatan utama antara dolar dan kripto di banyak bursa. Empat tahun kemudian, pada <strong>2018</strong>, perusahaan Circle bersama Coinbase merilis <strong>USD Coin (USDC)</strong> yang menekankan transparansi dan laporan cadangan berkala. Kehadiran dua raksasa ini membentuk tulang punggung pasar stablecoin sampai hari ini.",
      },
      {
        type: "calcExercise",
        prompt:
          "USDT diluncurkan pada 2014 dan USDC pada 2018. Berapa tahun jarak antara peluncuran keduanya?",
        answer: 4,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "2018 - 2014 = <strong>4 tahun</strong>. Dalam rentang itu USDT mendominasi, lalu USDC hadir menawarkan transparansi cadangan yang lebih ketat.",
        hint: "Kurangkan tahun peluncuran USDT dari tahun peluncuran USDC.",
      },
      {
        type: "calcExercise",
        prompt:
          "Mengirim 200 dolar AS lewat penyedia tradisional dikenai biaya 6%. Berapa dolar AS biayanya?",
        answer: 12,
        tolerance: 0,
        prefix: "$",
        solution:
          "200 x 6% = 200 x 0,06 = <strong>12 dolar AS</strong>. Lewat stablecoin, biaya jaringan biasanya jauh lebih kecil daripada ini.",
        hint: "Kalikan jumlah kiriman dengan 0,06.",
      },
      {
        type: "classifyExercise",
        prompt: "Mana yang merupakan peran nyata stablecoin dan mana yang bukan?",
        buckets: ["Peran stablecoin", "Bukan peran stablecoin"],
        items: [
          { text: "Tempat berlindung sementara saat harga kripto bergejolak", bucket: "Peran stablecoin" },
          { text: "Alat remitansi lintas negara yang cepat dan murah", bucket: "Peran stablecoin" },
          { text: "Pasangan dagang utama di bursa kripto", bucket: "Peran stablecoin" },
          { text: "Menjamin harganya akan terus naik seperti saham", bucket: "Bukan peran stablecoin" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Stablecoin muncul untuk menyediakan nilai stabil di dalam dunia kripto yang bergejolak.",
          "Tiga perannya: jembatan fiat-kripto, alat dagang di bursa, dan remitansi lintas negara.",
          "USDT (Tether) hadir 2014 sebagai stablecoin fiat-backed pertama yang jadi besar.",
          "USDC menyusul pada 2018 dengan penekanan pada transparansi cadangan.",
          "Pasar stablecoin tumbuh menjadi ratusan miliar dolar AS, meski sempat menyusut setelah keruntuhan TerraUSD.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa stablecoin diciptakan?",
            options: [
              "Agar harganya melonjak cepat",
              "Untuk menyediakan nilai stabil di dunia kripto yang bergejolak",
              "Untuk menggantikan blockchain",
              "Agar tidak butuh dompet",
            ],
            answer: 1,
            explain: "Stablecoin memberi nilai stabil terhadap dolar sehingga praktis untuk berdagang dan mengirim uang.",
          },
          {
            q: "Manakah yang BUKAN peran utama stablecoin?",
            options: [
              "Jembatan antara fiat dan kripto",
              "Alat remitansi lintas negara",
              "Menjamin keuntungan investasi yang terus naik",
              "Pasangan dagang di bursa",
            ],
            answer: 2,
            explain: "Stablecoin menjaga nilai tetap stabil, bukan menjanjikan kenaikan harga.",
          },
          {
            q: "Kapan Tether (USDT) diluncurkan?",
            options: ["2009", "2014", "2018", "2022"],
            answer: 1,
            explain: "USDT diluncurkan pada 2014 dan menjadi stablecoin fiat-backed pertama yang besar.",
          },
          {
            q: "Stablecoin apa yang hadir pada 2018 dengan penekanan transparansi?",
            options: ["USDC", "DAI", "TerraUSD", "Bitcoin"],
            answer: 0,
            explain: "USDC dirilis Circle dan Coinbase pada 2018 dengan laporan cadangan berkala.",
          },
          {
            q: "Apa keunggulan stablecoin untuk remitansi?",
            options: [
              "Selalu gratis tanpa biaya apa pun",
              "Cepat sampai dan biayanya kecil dibanding transfer bank tradisional",
              "Nilainya pasti naik saat dikirim",
              "Tidak butuh jaringan apa pun",
            ],
            answer: 1,
            explain: "Stablecoin sampai dalam hitungan menit dengan biaya jaringan kecil, dan nilainya stabil.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "regulasi-stablecoin",
    levelId: "stablecoin",
    order: 6,
    title: "Regulasi & Masa Depan Stablecoin",
    summary:
      "Mengapa regulator memperhatikan stablecoin: kualitas cadangan, transparansi, dan risiko sistemik. Mengenal arah regulasi global seperti kerangka MiCA Uni Eropa.",
    durationMin: 15,
    tags: ["stablecoin", "regulasi", "mica", "risiko-sistemik", "masa-depan"],
    blocks: [
      {
        type: "paragraph",
        html: "Ketika stablecoin tumbuh menjadi pasar ratusan miliar dolar AS dan dipakai jutaan orang, regulator di seluruh dunia mulai menaruh perhatian serius. Sebab bila sebuah stablecoin besar gagal, dampaknya bisa menjalar ke seluruh pasar kripto bahkan menyentuh sistem keuangan biasa.",
      },
      {
        type: "paragraph",
        html: "Ada tiga hal yang paling dikhawatirkan regulator: apakah <strong>cadangan</strong> benar-benar cukup dan berkualitas, apakah penerbit cukup <strong>transparan</strong> dan diaudit, dan seberapa besar <strong>risiko sistemik</strong> bila stablecoin sebesar itu runtuh tiba-tiba.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Tiga perhatian utama regulator",
        html: "<strong>Cadangan</strong>: harus 1:1 dengan aset likuid berkualitas tinggi. <strong>Transparansi</strong>: laporan cadangan rutin dan audit independen. <strong>Risiko sistemik</strong>: stablecoin sebesar bank harus diawasi agar kegagalannya tidak menular ke ekonomi luas.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Hak penebusan",
        html: "Banyak aturan baru mewajibkan pemegang stablecoin bisa <strong>menebus</strong> tokennya kembali ke nilai penuh kapan saja. Jaminan ini memaksa penerbit benar-benar menyimpan cadangan yang dijanjikan, bukan sekadar mengklaim.",
      },
      {
        type: "video",
        comp: "StablecoinPegVideo",
        title: "Menjaga Harga di Sekitar 1 Dolar",
        caption: "Mengapa regulator ingin memastikan peg dan penebusan benar-benar terjamin oleh cadangan nyata.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Blockchain.svg?width=400",
        alt: "Diagram rantai blok yang menjadi objek perhatian regulasi stablecoin",
        caption: "Regulator berupaya menyeimbangkan inovasi blockchain dengan perlindungan pengguna dan stabilitas keuangan.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Garis Waktu Peristiwa yang Mendorong Regulasi Stablecoin",
        unit: "tahun peristiwa",
        source: "tanggal historis terverifikasi",
        note: "Keruntuhan TerraUSD 2022 dan de-peg USDC 2023 mempercepat pengesahan aturan seperti MiCA.",
        data: [
          { label: "Keruntuhan UST", value: 2022 },
          { label: "De-peg USDC", value: 2023 },
          { label: "MiCA berlaku", value: 2024 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa risiko sistemik ditakuti",
        html: "Bayangkan sebuah stablecoin beredar senilai <strong>100 miliar dolar AS</strong> dan dipakai sebagai jaminan di banyak platform. Bila tiba-tiba muncul keraguan soal cadangannya, pengguna berebut menebus serentak. Penerbit harus menjual aset cadangan dalam jumlah besar sekaligus, yang bisa menekan harga pasar surat utang. Tekanan ini bisa menjalar ke luar dunia kripto. Itulah sebabnya regulator memperlakukan stablecoin raksasa mirip seperti lembaga keuangan yang harus diawasi ketat.",
      },
      {
        type: "case",
        title: "Sejarah: Terra 2022 & de-peg USDC 2023 mempercepat regulasi",
        html: "Dua guncangan beruntun mengubah sikap regulator. Pada <strong>Mei 2022</strong>, stablecoin algoritmik <strong>TerraUSD (UST)</strong> runtuh dan melenyapkan nilai puluhan miliar dolar AS. Lalu pada <strong>Maret 2023</strong>, <strong>USDC</strong> sempat lepas dari peg karena sebagian cadangannya tersangkut di Silicon Valley Bank yang kolaps, meski cepat pulih. Kedua peristiwa ini mempercepat pembahasan aturan. Uni Eropa mengesahkan kerangka <strong>MiCA</strong> (Markets in Crypto-Assets), yang ketentuan stablecoinnya mulai berlaku pada <strong>2024</strong> dan mewajibkan cadangan memadai, transparansi, serta hak penebusan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Keruntuhan TerraUSD terjadi 2022 dan ketentuan stablecoin MiCA berlaku 2024. Berapa tahun jarak antara keduanya?",
        answer: 2,
        tolerance: 0,
        suffix: "tahun",
        solution:
          "2024 - 2022 = <strong>2 tahun</strong>. Guncangan 2022 dan 2023 mempercepat regulator merampungkan aturan yang berlaku 2024.",
        hint: "Kurangkan tahun keruntuhan Terra dari tahun MiCA berlaku.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan perhatian regulasi dengan maknanya.",
        pairs: [
          { left: "Cadangan", right: "Token harus didukung aset likuid berkualitas tinggi secara penuh" },
          { left: "Transparansi", right: "Laporan cadangan rutin dan audit oleh pihak independen" },
          { left: "Risiko sistemik", right: "Bahaya kegagalan stablecoin besar menular ke ekonomi luas" },
          { left: "Hak penebusan", right: "Pemegang dapat menukar token kembali ke nilai penuh kapan saja" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Mana yang sejalan dengan arah regulasi stablecoin dan mana yang berlawanan?",
        buckets: ["Sejalan dengan regulasi", "Berlawanan"],
        items: [
          { text: "Cadangan penuh berupa aset likuid berkualitas tinggi", bucket: "Sejalan dengan regulasi" },
          { text: "Audit independen dan laporan cadangan berkala", bucket: "Sejalan dengan regulasi" },
          { text: "Menolak membuka rincian cadangan kepada publik", bucket: "Berlawanan" },
          { text: "Model algoritmik tanpa jaminan penuh berskala besar", bucket: "Berlawanan" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Regulator mengkhawatirkan cadangan, transparansi, dan risiko sistemik stablecoin.",
          "Hak penebusan memaksa penerbit benar-benar menyimpan cadangan yang dijanjikan.",
          "Stablecoin raksasa diperlakukan mirip lembaga keuangan yang harus diawasi ketat.",
          "Keruntuhan TerraUSD 2022 dan de-peg USDC 2023 mempercepat lahirnya aturan baru.",
          "MiCA Uni Eropa adalah salah satu kerangka regulasi stablecoin yang ketentuannya berlaku mulai 2024.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa regulator memperhatikan stablecoin besar?",
            options: [
              "Karena harganya selalu naik",
              "Karena kegagalannya bisa menular ke pasar dan sistem keuangan luas",
              "Karena tidak ada penggunanya",
              "Karena tidak memakai blockchain",
            ],
            answer: 1,
            explain: "Stablecoin sebesar lembaga keuangan menimbulkan risiko sistemik bila runtuh tiba-tiba.",
          },
          {
            q: "Manakah yang TERMASUK perhatian utama regulator?",
            options: [
              "Warna logo stablecoin",
              "Kualitas cadangan, transparansi, dan risiko sistemik",
              "Kecepatan internet pengguna",
              "Jumlah karyawan bursa",
            ],
            answer: 1,
            explain: "Tiga fokusnya adalah cadangan yang cukup, keterbukaan, dan dampak sistemik.",
          },
          {
            q: "Apa itu hak penebusan dalam aturan stablecoin?",
            options: [
              "Hak mencetak token baru",
              "Hak menukar token kembali ke nilai penuh kapan saja",
              "Hak menghapus audit",
              "Hak menaikkan harga",
            ],
            answer: 1,
            explain: "Hak penebusan memastikan penerbit benar menyimpan cadangan yang dijanjikan.",
          },
          {
            q: "Dua peristiwa apa yang mempercepat regulasi stablecoin?",
            options: [
              "Halving Bitcoin dan pizza day",
              "Keruntuhan TerraUSD 2022 dan de-peg USDC 2023",
              "Lahirnya whitepaper Bitcoin",
              "Peluncuran Ethereum",
            ],
            answer: 1,
            explain: "Runtuhnya UST 2022 dan de-peg USDC 2023 mendorong regulator merampungkan aturan.",
          },
          {
            q: "Apa MiCA?",
            options: [
              "Nama sebuah stablecoin",
              "Kerangka regulasi kripto Uni Eropa yang ketentuan stablecoinnya berlaku mulai 2024",
              "Sebuah bursa kripto",
              "Algoritma penambangan",
            ],
            answer: 1,
            explain: "MiCA (Markets in Crypto-Assets) adalah kerangka regulasi Uni Eropa untuk aset kripto termasuk stablecoin.",
          },
        ],
      },
    ],
  },
];
