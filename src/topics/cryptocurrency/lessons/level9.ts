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
        type: "case",
        title: "Studi Kasus: Memeriksa rasio cadangan",
        html: "Sebuah penerbit stablecoin menyatakan ada <strong>100 juta token</strong> beredar dan melaporkan cadangan <strong>98 juta dolar AS</strong> dalam kas dan surat utang jangka pendek. Rasio cadangannya 98 juta dibagi 100 juta sama dengan 98%. Angka di bawah 100% jadi sinyal waspada: bila banyak orang menebus token sekaligus, penerbit bisa kekurangan dana untuk membayar semua pada nilai penuh.",
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
        html: "Tidak semua stablecoin didukung dolar di bank. <strong>Stablecoin crypto-backed</strong> dijamin oleh aset kripto seperti Ether yang dikunci dalam kontrak pintar. Contoh paling terkenal adalah <strong>DAI</strong>, yang dikelola lewat sistem <strong>MakerDAO</strong>.",
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
            explain: "DAI dijamin aset kripto yang dikunci dalam kontrak pintar, bukan dolar di bank.",
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
        html: "Mekanisme ini bekerja selama orang masih percaya. Bila kepercayaan hilang dan banyak orang menjual bersamaan, sistem mencetak token makin banyak untuk menahan harga, tetapi justru membanjiri pasar. Harga dan token pasangannya bisa jatuh bersama dalam <strong>spiral kematian</strong>.",
      },
      {
        type: "video",
        comp: "StablecoinPegVideo",
        title: "Menjaga Harga di Sekitar 1 Dolar",
        caption: "Bagaimana mekanisme suplai berusaha menarik harga kembali ke satu dolar, dan kapan itu gagal.",
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
          "Model ini rapuh: hilangnya kepercayaan bisa memicu spiral kematian.",
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
            q: "Apa itu spiral kematian pada stablecoin algoritmik?",
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
        type: "callout",
        tone: "warn",
        title: "Risiko depeg",
        html: "<strong>Depeg</strong> adalah saat harga stablecoin lepas dari 1 dolar. Pemicunya bisa cadangan yang kurang, aset cadangan yang macet, atau kepanikan pasar. Depeg bisa sementara bila cadangannya sebenarnya sehat, tetapi bisa permanen bila cadangannya memang bermasalah.",
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
];
