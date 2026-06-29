import type { Lesson } from "../../../types";

export const level14: Lesson[] = [
  // ============================================================
  {
    id: "fundamental-onchain",
    levelId: "investasi",
    order: 1,
    title: "Analisis Fundamental & On-chain",
    summary:
      "Menilai sebuah proyek kripto dari tim, use case, dan adopsi, lalu membaca data blockchain publik seperti alamat aktif dan arus dana ke bursa.",
    durationMin: 14,
    tags: ["investasi", "fundamental", "on-chain", "analisis"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebelum membeli sebuah aset kripto, banyak orang hanya melihat harganya naik lalu ikut membeli. Pendekatan yang lebih sehat adalah <strong>analisis fundamental</strong>: menilai apakah proyeknya benar-benar berguna dan dipakai orang, bukan sekadar ramai sesaat.",
      },
      {
        type: "paragraph",
        html: "Karena blockchain bersifat terbuka, kita juga bisa membaca langsung datanya. Inilah <strong>analisis on-chain</strong>: mempelajari aktivitas nyata di jaringan, seperti berapa banyak alamat yang aktif dan ke mana arus dana bergerak. Data ini publik dan sulit dipalsukan.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Kripto sangat berisiko",
        html: "Harga kripto sangat <strong>volatil</strong> dan bisa turun tajam dalam waktu singkat. Analisis sebaik apa pun tidak menghilangkan risiko. Lakukan riset sendiri (<strong>do your own research</strong>) dan jangan pernah menaruh dana lebih dari yang sanggup kamu relakan hilang. Materi ini edukasi, bukan ajakan atau nasihat investasi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Dua sudut pandang yang saling melengkapi",
        html: "<strong>Fundamental</strong> menjawab 'apakah proyek ini layak?' lewat tim, kegunaan, dan adopsi. <strong>On-chain</strong> menjawab 'apa yang sebenarnya terjadi sekarang?' lewat data blockchain. Keduanya dipakai bersama, bukan menggantikan satu sama lain.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Arus ke dan dari bursa",
        html: "Banyak koin mengalir <strong>masuk ke bursa</strong> sering ditafsirkan sebagai sinyal banyak orang bersiap menjual. Sebaliknya, koin yang ditarik <strong>keluar dari bursa</strong> ke dompet pribadi sering dibaca sebagai niat menyimpan jangka panjang. Ini hanya petunjuk, bukan kepastian.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Pertumbuhan Alamat Aktif Harian (ilustrasi edukatif)",
        unit: "ribu alamat aktif per hari",
        source: "ilustrasi edukatif pola adopsi yang umum diamati",
        note: "Alamat aktif yang terus bertambah menandakan pemakaian jaringan yang nyata, bukan sekadar harga yang bergerak.",
        data: [
          { label: "Q1", value: 600 },
          { label: "Q2", value: 720 },
          { label: "Q3", value: 800 },
          { label: "Q4", value: 1000 },
        ],
      },
      {
        type: "video",
        comp: "RantaiBlokVideo",
        title: "Membaca Jejak di Rantai Blok",
        caption: "Setiap transaksi tercatat permanen di blockchain publik, inilah bahan baku analisis on-chain.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Blockchain.svg?width=400",
        alt: "Diagram rantai blok yang saling terhubung",
        caption: "Karena setiap blok terhubung dan terbuka, aktivitas jaringan bisa dibaca siapa saja.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "case",
        title: "Studi Kasus: Membedakan adopsi nyata dari sekadar ramai",
        html: "Dua proyek sama-sama harganya naik 50 persen dalam sebulan. Proyek A: alamat aktif harian naik dari 600 ribu ke 1 juta dan transaksi nyata meningkat. Proyek B: harga naik tetapi alamat aktif justru turun dan hampir semua volume hanya di bursa, bukan pemakaian. Lewat data on-chain, proyek A menunjukkan adopsi yang nyata, sementara kenaikan proyek B lebih rapuh karena tidak ditopang pemakaian. Catatan penting: ini tetap bukan jaminan harga akan naik.",
      },
      {
        type: "calcExercise",
        prompt:
          "Alamat aktif harian sebuah jaringan naik dari 800 ribu menjadi 1.000 ribu (1 juta). Berapa persen pertumbuhannya?",
        answer: 25,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "(1.000 - 800) / 800 x 100 persen = 200 / 800 x 100 persen = <strong>25 persen</strong>. Pertumbuhan alamat aktif menandakan jaringan makin banyak dipakai.",
        hint: "Selisih dibagi nilai awal, lalu dikali 100 persen.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap metrik sebagai analisis fundamental atau analisis on-chain.",
        buckets: ["Fundamental", "On-chain"],
        items: [
          { text: "Rekam jejak dan kredibilitas tim pengembang", bucket: "Fundamental" },
          { text: "Jumlah alamat aktif harian di jaringan", bucket: "On-chain" },
          { text: "Kejelasan use case dan masalah yang diselesaikan", bucket: "Fundamental" },
          { text: "Arus koin masuk dan keluar dari bursa", bucket: "On-chain" },
          { text: "Tingkat adopsi dan kemitraan nyata", bucket: "Fundamental" },
          { text: "Volume transaksi yang tercatat di blockchain", bucket: "On-chain" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Bear market 2022 dan proyek tanpa fundamental",
        html: "Sepanjang <strong>2022</strong>, pasar kripto memasuki <strong>bear market</strong> yang dalam. Banyak token yang sebelumnya melonjak tanpa pemakaian nyata kehilangan sebagian besar nilainya. Puncaknya, jaringan <strong>Terra (UST/LUNA)</strong> runtuh pada Mei 2022, disusul kebangkrutan pemberi pinjaman <strong>Celsius</strong>, dan keruntuhan bursa <strong>FTX</strong> pada November 2022. Banyak korban tergiur kenaikan harga tanpa memeriksa fundamental atau membaca tanda bahaya pada data. Pelajarannya: harga yang naik bukan bukti proyek itu sehat.",
      },
      {
        type: "takeaways",
        items: [
          "Analisis fundamental menilai tim, use case, dan adopsi sebuah proyek.",
          "Analisis on-chain membaca data blockchain publik seperti alamat aktif dan volume.",
          "Arus dana ke bursa sering dibaca sebagai sinyal jual, keluar bursa sebagai sinyal simpan.",
          "Harga naik bukan bukti proyek sehat; bear market 2022 membuktikannya.",
          "Selalu lakukan riset sendiri dan sadari kripto sangat berisiko.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa fokus utama analisis fundamental pada kripto?",
            options: [
              "Pola grafik harga jangka pendek",
              "Tim, use case, dan adopsi proyek",
              "Rumor di media sosial",
              "Jumlah iklan proyek",
            ],
            answer: 1,
            explain: "Fundamental menilai kelayakan proyek dari tim, kegunaan, dan adopsi nyata.",
          },
          {
            q: "Apa itu analisis on-chain?",
            options: [
              "Menebak harga lewat ramalan",
              "Membaca data nyata dari blockchain publik",
              "Membaca berita koran",
              "Menyalin keputusan influencer",
            ],
            answer: 1,
            explain: "On-chain mempelajari aktivitas nyata di jaringan yang tercatat publik dan sulit dipalsukan.",
          },
          {
            q: "Koin yang mengalir besar masuk ke bursa sering ditafsirkan sebagai?",
            options: [
              "Sinyal banyak orang bersiap menjual",
              "Sinyal pasti harga naik",
              "Tanda jaringan mati",
              "Bukti koin palsu",
            ],
            answer: 0,
            explain: "Arus masuk ke bursa sering dibaca sebagai kesiapan menjual, meski hanya petunjuk.",
          },
          {
            q: "Apa pelajaran utama dari bear market 2022?",
            options: [
              "Semua kripto pasti untung",
              "Harga naik bukan bukti proyek sehat",
              "On-chain tidak berguna",
              "Tim proyek tidak penting",
            ],
            answer: 1,
            explain: "Banyak token naik tanpa fundamental lalu runtuh; kenaikan harga bukan jaminan kesehatan.",
          },
          {
            q: "Apa makna 'do your own research'?",
            options: [
              "Ikuti saja kata orang terkenal",
              "Lakukan riset sendiri sebelum mengambil keputusan",
              "Beli sebanyak mungkin",
              "Hindari semua data",
            ],
            answer: 1,
            explain: "Setiap orang bertanggung jawab meneliti sendiri karena kripto sangat berisiko.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "tokenomics-analysis",
    levelId: "investasi",
    order: 2,
    title: "Analisis Tokenomics",
    summary:
      "Menilai pasokan token, laju emisi, jadwal unlock yang bisa menekan harga, serta membandingkan market cap dengan fully diluted valuation (FDV).",
    durationMin: 14,
    tags: ["investasi", "tokenomics", "supply", "fdv"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Tokenomics</strong> adalah ilmu tentang ekonomi sebuah token: berapa banyak yang akan ada, seberapa cepat pasokannya bertambah, siapa yang memegangnya, dan kapan token baru dilepas ke pasar. Dua proyek dengan harga sama per token bisa sangat berbeda nilainya bila pasokannya jauh berbeda.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Market cap vs FDV",
        html: "<strong>Market cap</strong> = harga x jumlah token yang <strong>sudah beredar</strong>. <strong>Fully diluted valuation (FDV)</strong> = harga x <strong>seluruh</strong> token bila semua sudah beredar. Bila market cap jauh lebih kecil dari FDV, artinya masih banyak token yang belum dilepas dan akan masuk ke pasar nanti.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Waspadai jadwal unlock",
        html: "<strong>Unlock</strong> adalah saat token yang tadinya terkunci (milik tim atau investor awal) mulai bisa dijual. Gelombang unlock besar bisa menambah pasokan mendadak dan <strong>menekan harga</strong>. Selisih besar antara market cap dan FDV adalah tanda potensi tekanan jual di masa depan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Ubah pasokan beredar, pasokan maksimal, dan laju emisi, lalu lihat bagaimana market cap, FDV, dan tekanan inflasi berubah.",
      },
      { type: "widget", widget: "SimulatorTokenomics" },
      {
        type: "chart",
        variant: "bar",
        title: "Market Cap vs FDV: Porsi Beredar (ilustrasi edukatif)",
        unit: "nilai dalam triliun rupiah",
        source: "ilustrasi edukatif untuk membandingkan dua ukuran",
        note: "Bila FDV jauh di atas market cap, sebagian besar token belum beredar dan berpotensi menekan harga saat dilepas.",
        data: [
          { label: "Market cap", value: 2, color: "#26a17b" },
          { label: "FDV", value: 10, color: "#f7931a" },
        ],
      },
      {
        type: "video",
        comp: "VestingEmisiVideo",
        title: "Vesting & Emisi Token",
        caption: "Bagaimana token terkunci dilepas bertahap dan menambah pasokan beredar dari waktu ke waktu.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bitcoin.svg?width=400",
        alt: "Logo Bitcoin sebagai contoh aset dengan pasokan maksimal yang pasti",
        caption: "Bitcoin punya pasokan maksimal 21 juta keping, contoh tokenomics dengan batas pasokan yang jelas.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "case",
        title: "Studi Kasus: Dua token berharga sama, nilai sangat berbeda",
        html: "Token A dan token B sama-sama dihargai Rp 10.000 per keping. Token A: 200 juta beredar dari maksimal 1 miliar, jadi market cap Rp 2 triliun tetapi FDV Rp 10 triliun. Token B: 900 juta beredar dari maksimal 1 miliar, market cap Rp 9 triliun dan FDV Rp 10 triliun. Token A terlihat 'murah', padahal 80 persen pasokannya belum beredar dan akan terus menambah tekanan jual. Token B jauh lebih matang pasokannya. Harga per keping saja menyesatkan tanpa melihat tokenomics.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah token punya market cap Rp 2 triliun dan FDV Rp 10 triliun. Berapa persen pasokan yang sudah beredar (rasio market cap terhadap FDV)?",
        answer: 20,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "2 / 10 x 100 persen = <strong>20 persen</strong>. Artinya hanya 20 persen token yang sudah beredar, dan 80 persen sisanya masih akan dilepas ke pasar.",
        hint: "Bagi market cap dengan FDV, lalu kali 100 persen.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pasokan beredar sebuah token 200 juta dan pasokan maksimalnya 1.000 juta (1 miliar). Berapa juta token yang masih akan dilepas ke pasar?",
        answer: 800,
        tolerance: 0,
        suffix: "juta token",
        solution:
          "1.000 - 200 = <strong>800 juta token</strong> belum beredar. Pelepasan bertahap token ini adalah sumber tekanan jual yang perlu diperhatikan.",
        hint: "Kurangkan pasokan beredar dari pasokan maksimal.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan istilah tokenomics dengan artinya.",
        pairs: [
          { left: "Market cap", right: "Harga dikali token yang sudah beredar" },
          { left: "FDV", right: "Harga dikali seluruh token bila semua beredar" },
          { left: "Emisi", right: "Laju penambahan token baru ke pasokan" },
          { left: "Unlock", right: "Saat token terkunci mulai bisa dijual" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Hiperinflasi pasokan saat keruntuhan Terra 2022",
        html: "Saat stablecoin <strong>UST</strong> kehilangan patokannya pada Mei <strong>2022</strong>, mekanisme jaringan Terra mencetak token <strong>LUNA</strong> dalam jumlah sangat besar untuk mencoba menstabilkan harga. Pasokan LUNA meledak dari ratusan juta menjadi triliunan keping dalam hitungan hari. Akibatnya nilai tiap keping nyaris nol. Ini contoh ekstrem bagaimana <strong>emisi</strong> pasokan yang tak terkendali bisa menghancurkan nilai, dan mengapa memahami tokenomics sangat penting.",
      },
      {
        type: "takeaways",
        items: [
          "Tokenomics menilai pasokan, emisi, distribusi, dan jadwal unlock token.",
          "Market cap memakai token beredar; FDV memakai seluruh token bila semua beredar.",
          "Selisih besar market cap dan FDV menandakan banyak token belum dilepas.",
          "Gelombang unlock menambah pasokan dan bisa menekan harga.",
          "Harga per keping menyesatkan tanpa melihat berapa banyak token yang ada.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa itu market cap sebuah token?",
            options: [
              "Harga dikali seluruh token yang mungkin ada",
              "Harga dikali token yang sudah beredar",
              "Jumlah token maksimal",
              "Biaya transaksi jaringan",
            ],
            answer: 1,
            explain: "Market cap memakai jumlah token yang sudah beredar, bukan total maksimal.",
          },
          {
            q: "Apa yang diukur FDV?",
            options: [
              "Nilai bila seluruh token sudah beredar",
              "Harga rata-rata harian",
              "Jumlah bursa pendukung",
              "Volume sehari",
            ],
            answer: 0,
            explain: "FDV menghitung nilai seolah seluruh pasokan sudah beredar di pasar.",
          },
          {
            q: "Mengapa jadwal unlock perlu diwaspadai?",
            options: [
              "Karena menutup jaringan",
              "Karena menambah pasokan dan bisa menekan harga",
              "Karena menaikkan biaya gas",
              "Karena menghapus token lama",
            ],
            answer: 1,
            explain: "Unlock melepas token terkunci ke pasar, menambah pasokan dan potensi tekanan jual.",
          },
          {
            q: "Market cap jauh lebih kecil dari FDV menandakan?",
            options: [
              "Semua token sudah beredar",
              "Banyak token belum dilepas ke pasar",
              "Token sudah tidak aktif",
              "Harga pasti naik",
            ],
            answer: 1,
            explain: "Selisih besar berarti porsi besar pasokan masih akan masuk pasar nanti.",
          },
          {
            q: "Apa pelajaran tokenomics dari keruntuhan Terra 2022?",
            options: [
              "Emisi pasokan tak terkendali bisa menghancurkan nilai",
              "Stablecoin selalu aman",
              "Pasokan tidak memengaruhi harga",
              "FDV tidak penting",
            ],
            answer: 0,
            explain: "Pencetakan LUNA besar-besaran membuat nilai tiap keping nyaris nol.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "risk-portfolio",
    levelId: "investasi",
    order: 3,
    title: "Manajemen Risiko & Portofolio",
    summary:
      "Mengatur ukuran posisi, diversifikasi, dan alokasi inti-satelit, serta memahami volatilitas dan drawdown agar tidak hancur saat pasar turun.",
    durationMin: 15,
    tags: ["investasi", "risiko", "portofolio", "drawdown"],
    blocks: [
      {
        type: "paragraph",
        html: "Keuntungan besar selalu datang bersama risiko besar. Pada kripto yang sangat volatil, hal terpenting bukan menebak koin mana yang meroket, melainkan <strong>bertahan</strong> agar tidak bangkrut saat pasar turun. Di sinilah <strong>manajemen risiko</strong> berperan.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Aturan pertama: jangan hancur",
        html: "Jangan pernah menaruh dana lebih dari yang sanggup kamu relakan hilang. Atur <strong>ukuran posisi</strong> agar satu koin yang jatuh tidak menghabiskan seluruh tabunganmu. Kripto bisa turun puluhan persen dalam sehari, dan sebagian proyek bisa menuju nol.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Drawdown dan beratnya pemulihan",
        html: "<strong>Drawdown</strong> adalah seberapa dalam nilai turun dari puncaknya. Yang sering dilupakan: pemulihan butuh persentase yang jauh lebih besar daripada penurunannya. Turun 50 persen butuh naik 100 persen untuk balik modal; turun 75 persen butuh naik 300 persen.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Alokasi inti-satelit",
        html: "Strategi <strong>inti-satelit</strong> menaruh sebagian besar dana pada aset yang lebih mapan sebagai <strong>inti</strong>, dan porsi kecil pada aset berisiko tinggi sebagai <strong>satelit</strong>. Bila satelit jatuh, kerugian total tetap terkendali; bila ia naik, tetap memberi tambahan.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kenaikan yang Dibutuhkan untuk Pulih dari Drawdown",
        unit: "persen kenaikan untuk balik modal",
        source: "perhitungan matematis pasti",
        note: "Makin dalam penurunan, makin tidak seimbang kenaikan yang dibutuhkan untuk pulih.",
        data: [
          { label: "Turun 25%", value: 33 },
          { label: "Turun 50%", value: 100 },
          { label: "Turun 75%", value: 300 },
          { label: "Turun 90%", value: 900 },
        ],
      },
      {
        type: "video",
        comp: "RugPullVideo",
        title: "Saat Sebuah Proyek Menuju Nol",
        caption: "Sebagian proyek bisa runtuh total; ukuran posisi yang disiplin menjaga kerugian tetap terbatas.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/FTX_logo.svg?width=400",
        alt: "Logo bursa FTX yang runtuh pada 2022",
        caption: "FTX, bursa besar yang runtuh pada November 2022, mengingatkan risiko memusatkan aset di satu pihak.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "case",
        title: "Studi Kasus: Dua investor, hasil sangat berbeda",
        html: "Investor A menaruh seluruh dananya Rp 100 juta pada satu koin satelit berisiko tinggi. Investor B memakai inti-satelit: Rp 90 juta pada aset inti dan Rp 10 juta pada koin satelit yang sama. Koin satelit lalu jatuh 90 persen. Investor A tersisa Rp 10 juta, kehilangan 90 persen. Investor B kehilangan Rp 9 juta dari porsi satelit, total tersisa sekitar Rp 91 juta. Ukuran posisi yang disiplin menjaga investor B tetap bertahan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah aset turun dari nilai 100 menjadi 25. Berapa persen kenaikan yang dibutuhkan dari titik 25 agar kembali ke 100?",
        answer: 300,
        tolerance: 1,
        suffix: "%",
        solution:
          "Drawdown-nya 75 persen (turun dari 100 ke 25). Untuk pulih: (100 - 25) / 25 x 100 persen = 75 / 25 x 100 persen = <strong>300 persen</strong>. Inilah mengapa menghindari penurunan dalam jauh lebih penting daripada mengejar untung.",
        hint: "Selisih pemulihan dibagi nilai terendah, lalu kali 100 persen.",
      },
      {
        type: "calcExercise",
        prompt:
          "Total dana Rp 100 juta dengan aturan satu posisi maksimal 10 persen dari portofolio. Berapa rupiah maksimal untuk satu koin?",
        answer: 10000000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "10 persen x Rp 100 juta = <strong>Rp 10 juta</strong>. Membatasi ukuran posisi membuat satu koin yang jatuh tidak menghancurkan seluruh portofolio.",
        hint: "Kalikan total dana dengan batas persentase posisi.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap tindakan sebagai manajemen risiko yang sehat atau perilaku berisiko.",
        buckets: ["Risiko sehat", "Perilaku berisiko"],
        items: [
          { text: "Membatasi satu posisi maksimal 10 persen portofolio", bucket: "Risiko sehat" },
          { text: "Menaruh seluruh tabungan pada satu koin kecil", bucket: "Perilaku berisiko" },
          { text: "Mendiversifikasi ke beberapa aset dengan alokasi inti-satelit", bucket: "Risiko sehat" },
          { text: "Berutang untuk membeli kripto", bucket: "Perilaku berisiko" },
          { text: "Hanya memakai dana yang sanggup direlakan hilang", bucket: "Risiko sehat" },
          { text: "Menambah posisi panik mengejar koin yang sudah meroket", bucket: "Perilaku berisiko" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Keruntuhan FTX November 2022",
        html: "Pada <strong>November 2022</strong>, <strong>FTX</strong>, salah satu bursa kripto terbesar dunia, runtuh dalam hitungan hari setelah ketahuan menyalahgunakan dana nasabah. Jutaan pengguna yang menyimpan aset di FTX tidak bisa menarik dananya. Banyak yang kehilangan seluruh simpanannya, bukan karena harga koin turun, melainkan karena memercayakan aset pada satu pihak terpusat. Peristiwa ini menghidupkan kembali pepatah kripto: <strong>not your keys, not your coins</strong>. Bila kamu tidak memegang kuncinya sendiri, kamu tidak benar-benar memiliki asetnya.",
      },
      {
        type: "takeaways",
        items: [
          "Tujuan utama manajemen risiko adalah bertahan, bukan menebak koin yang meroket.",
          "Batasi ukuran posisi agar satu koin jatuh tidak menghabiskan portofolio.",
          "Drawdown dalam butuh kenaikan jauh lebih besar untuk pulih (turun 75% butuh +300%).",
          "Alokasi inti-satelit menjaga kerugian total tetap terkendali.",
          "Keruntuhan FTX 2022 menegaskan: not your keys, not your coins.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa tujuan utama manajemen risiko di kripto?",
            options: [
              "Menebak koin yang akan meroket",
              "Bertahan agar tidak bangkrut saat pasar turun",
              "Menghapus semua risiko",
              "Menjamin keuntungan",
            ],
            answer: 1,
            explain: "Fokusnya adalah bertahan; risiko tidak bisa dihapus, hanya dikelola.",
          },
          {
            q: "Sebuah aset turun 75 persen. Berapa kenaikan yang dibutuhkan untuk pulih?",
            options: ["75 persen", "100 persen", "300 persen", "175 persen"],
            answer: 2,
            explain: "Dari 25 kembali ke 100 butuh naik 75/25 x 100 persen = 300 persen.",
          },
          {
            q: "Apa inti strategi alokasi inti-satelit?",
            options: [
              "Semua dana di satu koin",
              "Sebagian besar di aset mapan, porsi kecil di aset berisiko tinggi",
              "Hanya membeli koin baru",
              "Tidak pernah menjual",
            ],
            answer: 1,
            explain: "Inti yang mapan menjaga stabilitas, satelit kecil memberi peluang tanpa menghancurkan total.",
          },
          {
            q: "Apa makna 'not your keys, not your coins'?",
            options: [
              "Kunci hanya untuk pengembang",
              "Bila kamu tak memegang kuncinya, kamu tak benar-benar memiliki asetnya",
              "Koin tanpa kunci lebih aman",
              "Kunci bisa dibeli di bursa",
            ],
            answer: 1,
            explain: "Menaruh aset di pihak terpusat berarti bergantung pada pihak itu, seperti pelajaran FTX.",
          },
          {
            q: "Apa yang terjadi pada FTX November 2022?",
            options: [
              "Meluncurkan koin baru",
              "Runtuh setelah menyalahgunakan dana nasabah",
              "Menjadi bursa terbesar selamanya",
              "Membagikan dana ke semua nasabah",
            ],
            answer: 1,
            explain: "FTX runtuh karena penyalahgunaan dana nasabah, banyak pengguna kehilangan simpanannya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "dca-stablecoin",
    levelId: "investasi",
    order: 4,
    title: "DCA & Strategi Stablecoin",
    summary:
      "Dollar cost averaging membeli rutin dengan nominal tetap untuk meratakan harga, serta memarkir dana di stablecoin saat menunggu. Disiplin mengalahkan menebak waktu.",
    durationMin: 13,
    tags: ["investasi", "dca", "stablecoin", "disiplin"],
    blocks: [
      {
        type: "paragraph",
        html: "Menebak titik terbawah untuk membeli dan titik tertinggi untuk menjual (<strong>timing pasar</strong>) sangat sulit, bahkan bagi profesional. <strong>Dollar cost averaging (DCA)</strong> menawarkan jalan yang lebih tenang: membeli secara <strong>rutin dengan nominal tetap</strong>, tanpa peduli harga sedang tinggi atau rendah.",
      },
      {
        type: "paragraph",
        html: "Karena nominalnya tetap, kamu otomatis membeli <strong>lebih banyak</strong> keping saat harga murah dan <strong>lebih sedikit</strong> saat harga mahal. Hasilnya, harga rata-rata pembelianmu jadi lebih halus dan risiko salah waktu berkurang.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Inti DCA",
        html: "Beli jumlah rupiah yang sama secara berkala (mis. tiap bulan). Saat harga turun, nominal tetap itu membeli lebih banyak keping; saat harga naik, membeli lebih sedikit. Disiplin ini meratakan harga beli dan mengurangi godaan emosi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Memarkir dana di stablecoin",
        html: "Saat belum ingin membeli atau ingin mengurangi paparan, sebagian dana bisa dipindahkan ke <strong>stablecoin</strong> yang nilainya dipatok ke dolar. Ini cara menunggu tanpa terombang-ambing harga koin volatil, sambil siap masuk lagi saat saatnya tiba.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "DCA mengurangi, bukan menghapus risiko",
        html: "DCA memperkecil risiko salah waktu, tetapi tidak menjamin untung. Bila sebuah aset terus turun ke nol, membeli rutin pun tetap rugi. Pilih aset dengan fundamental yang kamu pahami, dan tetap hanya pakai dana yang sanggup direlakan hilang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Bandingkan membeli rutin (DCA) dengan membeli sekaligus (<strong>lump sum</strong>) pada berbagai pola harga, dan lihat bagaimana harga rata-ratamu terbentuk.",
      },
      { type: "widget", widget: "SimulatorDCAKripto" },
      {
        type: "video",
        comp: "DCAKriptoVideo",
        title: "Beli Rutin Meratakan Harga",
        caption: "Bagaimana membeli dengan nominal tetap secara berkala menghaluskan harga rata-rata pembelianmu.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tether_Logo.svg?width=400",
        alt: "Logo stablecoin Tether (USDT)",
        caption: "Stablecoin seperti USDT dipatok ke dolar, berguna untuk memarkir dana sambil menunggu.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Nominal Tetap Membeli Lebih Banyak Saat Murah (ilustrasi)",
        unit: "keping yang didapat per pembelian Rp 1 juta",
        source: "ilustrasi edukatif perhitungan langsung",
        note: "Dengan nominal tetap, harga rendah otomatis menghasilkan lebih banyak keping.",
        data: [
          { label: "Harga Rp 8.000", value: 125, color: "#26a17b" },
          { label: "Harga Rp 12.000", value: 83, color: "#f7931a" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: DCA dua bulan menghaluskan harga",
        html: "Seorang pemula membeli rutin Rp 1.000.000 tiap bulan. Bulan pertama harga Rp 8.000 per keping, jadi ia mendapat 125 keping. Bulan kedua harga naik ke Rp 12.000, ia mendapat sekitar 83,33 keping. Total ia membelanjakan Rp 2.000.000 untuk sekitar 208,33 keping. Harga rata-ratanya Rp 2.000.000 dibagi 208,33 keping, yaitu sekitar Rp 9.600 per keping. Menariknya, ini lebih rendah daripada rata-rata sederhana dua harga (Rp 10.000), karena nominal tetap membeli lebih banyak saat murah.",
      },
      {
        type: "calcExercise",
        prompt:
          "DCA Rp 1.000.000 dua kali: harga Rp 8.000 (dapat 125 keping) dan harga Rp 12.000 (dapat sekitar 83,33 keping). Berapa harga rata-rata per keping (total rupiah dibagi total keping)?",
        answer: 9600,
        tolerance: 50,
        prefix: "Rp",
        solution:
          "Total dibelanjakan Rp 2.000.000 untuk 125 + 83,33 = 208,33 keping. Rata-rata = 2.000.000 / 208,33 = <strong>Rp 9.600</strong> per keping, lebih rendah dari rata-rata sederhana Rp 10.000.",
        hint: "Bagi total rupiah yang dibelanjakan dengan total keping yang didapat.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan istilah strategi dengan maknanya.",
        pairs: [
          { left: "Dollar cost averaging", right: "Membeli rutin dengan nominal tetap" },
          { left: "Lump sum", right: "Membeli sekaligus dalam satu waktu" },
          { left: "Stablecoin", right: "Tempat memarkir dana yang nilainya dipatok ke dolar" },
          { left: "Timing pasar", right: "Mencoba menebak titik beli dan jual terbaik" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pernyataan sebagai keunggulan DCA atau keterbatasan DCA.",
        buckets: ["Keunggulan DCA", "Keterbatasan DCA"],
        items: [
          { text: "Mengurangi risiko salah memilih waktu beli", bucket: "Keunggulan DCA" },
          { text: "Membeli lebih banyak keping saat harga murah", bucket: "Keunggulan DCA" },
          { text: "Tidak menjamin untung bila aset terus turun ke nol", bucket: "Keterbatasan DCA" },
          { text: "Menanamkan disiplin dan meredam emosi", bucket: "Keunggulan DCA" },
          { text: "Bisa kalah dari lump sum saat pasar terus menanjak", bucket: "Keterbatasan DCA" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: DCA menembus badai 2018 dan 2022",
        html: "Pasar kripto pernah anjlok dalam pada <strong>2018</strong> dan lagi pada <strong>2022</strong> (saat Terra, Celsius, dan bursa FTX berjatuhan). Investor yang panik dan menjual di dasar mengunci kerugian. Sebaliknya, mereka yang menjalankan <strong>DCA</strong> secara disiplin terus membeli nominal tetap selama harga murah, sehingga harga rata-rata mereka turun dan posisi pulih lebih cepat ketika pasar bangkit. Pelajaran historisnya: di pasar yang sangat fluktuatif, disiplin sering mengalahkan upaya menebak waktu. Catatan: ini edukasi, bukan saran finansial, dan masa lalu tidak menjamin hasil masa depan.",
      },
      {
        type: "takeaways",
        items: [
          "DCA membeli rutin dengan nominal tetap, tanpa menebak waktu pasar.",
          "Nominal tetap otomatis membeli lebih banyak saat murah dan lebih sedikit saat mahal.",
          "Harga rata-rata DCA cenderung lebih halus daripada membeli sekaligus.",
          "Stablecoin berguna untuk memarkir dana sambil menunggu dengan nilai stabil.",
          "DCA mengurangi risiko salah waktu, tetapi tidak menjamin untung.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa inti dollar cost averaging?",
            options: [
              "Membeli sekaligus di titik terbawah",
              "Membeli rutin dengan nominal tetap",
              "Menjual saat harga turun",
              "Hanya membeli saat harga tinggi",
            ],
            answer: 1,
            explain: "DCA membeli berkala dengan nominal sama tanpa menebak waktu pasar.",
          },
          {
            q: "Dengan nominal tetap, saat harga turun kamu membeli?",
            options: [
              "Lebih sedikit keping",
              "Lebih banyak keping",
              "Jumlah keping yang sama",
              "Tidak membeli sama sekali",
            ],
            answer: 1,
            explain: "Nominal tetap membeli lebih banyak keping saat harga murah.",
          },
          {
            q: "Mengapa stablecoin berguna saat menunggu?",
            options: [
              "Karena harganya melonjak cepat",
              "Karena nilainya dipatok stabil ke dolar",
              "Karena tidak bisa dipindahkan",
              "Karena menggandakan dana otomatis",
            ],
            answer: 1,
            explain: "Stablecoin menjaga nilai relatif stabil, cocok untuk memarkir dana sementara.",
          },
          {
            q: "Apa keterbatasan DCA yang penting diingat?",
            options: [
              "Selalu kalah dari semua strategi",
              "Tidak menjamin untung bila aset terus turun ke nol",
              "Tidak bisa dilakukan rutin",
              "Hanya untuk Bitcoin",
            ],
            answer: 1,
            explain: "DCA mengurangi risiko salah waktu, tetapi aset yang jatuh terus tetap merugikan.",
          },
          {
            q: "Pada studi kasus DCA (harga Rp 8.000 dan Rp 12.000), harga rata-ratanya sekitar?",
            options: ["Rp 12.000", "Rp 10.000", "Rp 9.600", "Rp 8.000"],
            answer: 2,
            explain: "Total Rp 2 juta untuk 208,33 keping menghasilkan rata-rata sekitar Rp 9.600 per keping.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "psikologi-pasar",
    levelId: "investasi",
    order: 5,
    title: "Psikologi Pasar & Manajemen Emosi",
    summary:
      "Mengenali FOMO, FUD, keserakahan, ketakutan, dan perilaku ikut-ikutan yang membuat banyak orang membeli di puncak dan menjual di dasar. Disiplin mengalahkan emosi.",
    durationMin: 14,
    tags: ["investasi", "psikologi", "emosi", "disiplin"],
    blocks: [
      {
        type: "paragraph",
        html: "Musuh terbesar seorang investor sering kali bukan pasar, melainkan <strong>emosinya sendiri</strong>. Pada kripto yang harganya bisa berayun tajam, perasaan takut dan serakah mudah mengambil alih akal sehat. Memahami psikologi pasar membantu kita tidak terseret arus.",
      },
      {
        type: "paragraph",
        html: "Pola yang berulang sangat klasik: saat harga meroket, orang takut ketinggalan lalu memburu di harga tinggi; saat harga jatuh, orang panik lalu menjual di harga rendah. Hasilnya kebalikan dari niat semula, yaitu beli mahal jual murah.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Empat emosi yang menggerakkan pasar",
        html: "<strong>FOMO</strong> (fear of missing out) mendorong membeli karena takut ketinggalan. <strong>FUD</strong> (fear, uncertainty, doubt) menyebarkan ketakutan yang memicu jual panik. <strong>Greed</strong> (keserakahan) membuat orang mengejar lebih saat sudah untung. <strong>Fear</strong> (ketakutan) membuat menyerah di titik terburuk.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Perilaku ikut-ikutan (herd behavior)",
        html: "Manusia cenderung meniru kerumunan. Saat semua orang membeli, kita ikut membeli; saat semua menjual, kita ikut menjual. <strong>Herd behavior</strong> inilah yang membentuk gelembung dan keruntuhan. Mengikuti kerumunan terasa aman, padahal sering membawa ke harga yang paling buruk.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Ini edukasi, bukan saran finansial",
        html: "Tidak ada yang bisa menebak arah harga secara pasti. Tujuan pelajaran ini adalah mengenali jebakan emosi, bukan memberi nasihat investasi. Tetap pakai hanya dana yang sanggup direlakan hilang.",
      },
      {
        type: "video",
        comp: "SiklusPasarVideo",
        title: "Siklus Emosi dalam Pasar",
        caption: "Dari optimisme, euforia, ketakutan, hingga putus asa: bagaimana emosi bergerak mengikuti harga.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bitcoin.svg?width=400",
        alt: "Logo Bitcoin sebagai aset yang dikenal sangat volatil",
        caption: "Bitcoin yang volatil sering menjadi panggung utama drama emosi pasar kripto.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Indeks Fear and Greed: Ayunan Emosi Pasar (ilustrasi edukatif)",
        unit: "skala 0 (takut ekstrem) sampai 100 (serakah ekstrem)",
        source: "ilustrasi edukatif pola yang umum diamati pada indeks sentimen",
        note: "Saat indeks mendekati serakah ekstrem pasar sering memuncak; saat mendekati takut ekstrem pasar sering mendasar.",
        data: [
          { label: "Bulan 1", value: 20 },
          { label: "Bulan 2", value: 45 },
          { label: "Bulan 3", value: 75 },
          { label: "Bulan 4", value: 90 },
          { label: "Bulan 5", value: 50 },
          { label: "Bulan 6", value: 15 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Dua reaksi atas berita buruk yang sama",
        html: "Sebuah koin yang dipegang Andi dan Budi tiba-tiba turun 30 persen dalam sehari karena berita negatif. Andi panik (FUD dan fear), menjual seluruhnya di harga rendah, lalu menyesal ketika harga pulih sebulan kemudian. Budi sudah menetapkan rencana sejak awal, ukuran posisinya kecil dan ia tidak bergantung pada dana itu, sehingga ia tenang dan tidak menjual karena panik. Bukan kecerdasan yang membedakan keduanya, melainkan <strong>disiplin emosi</strong> dan rencana yang dibuat sebelum panik datang. Catatan: ini ilustrasi, bukan jaminan harga selalu pulih.",
      },
      {
        type: "case",
        title: "Sejarah: Euforia 2017 lalu bear 2018, euforia 2021 lalu bear 2022",
        html: "Pola psikologi pasar berulang dengan jelas di kripto. Pada akhir <strong>2017</strong>, euforia mendorong Bitcoin mendekati 20.000 dolar AS di tengah FOMO besar-besaran, lalu sepanjang <strong>2018</strong> pasar memasuki bear market dalam dan harga anjlok sekitar 80 persen dari puncaknya. Pola yang sama terulang: pada akhir <strong>2021</strong> Bitcoin mencatat rekor sekitar 69.000 dolar AS, lalu sepanjang <strong>2022</strong> kembali jatuh tajam disertai keruntuhan Terra, Celsius, dan FTX. Dua siklus ini memperlihatkan euforia dan ketakutan yang berulang. Sejarah masa lalu tidak menjamin pola yang sama terjadi lagi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah aset memuncak di harga 100 (saat indeks serakah ekstrem), lalu jatuh ke 20 (saat indeks takut ekstrem). Berapa persen penurunannya dari puncak?",
        answer: 80,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "(100 - 20) / 100 x 100 persen = 80 / 100 x 100 persen = <strong>80 persen</strong>. Penurunan sedalam ini khas terjadi saat euforia berubah menjadi ketakutan, seperti dari 2017 ke 2018.",
        hint: "Selisih puncak dan dasar dibagi nilai puncak, lalu kali 100 persen.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap emosi pasar dengan tindakan keliru yang umumnya dipicunya.",
        buckets: ["Beli mahal karena emosi", "Jual murah karena emosi"],
        items: [
          { text: "FOMO saat melihat harga meroket tiap hari", bucket: "Beli mahal karena emosi" },
          { text: "Panik karena FUD setelah berita buruk", bucket: "Jual murah karena emosi" },
          { text: "Serakah menambah posisi besar di puncak euforia", bucket: "Beli mahal karena emosi" },
          { text: "Takut berlebihan lalu menyerah di dasar pasar", bucket: "Jual murah karena emosi" },
          { text: "Ikut kerumunan membeli karena semua orang membeli", bucket: "Beli mahal karena emosi" },
          { text: "Ikut kerumunan menjual karena semua orang menjual", bucket: "Jual murah karena emosi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Musuh terbesar investor sering kali emosinya sendiri, bukan pasar.",
          "FOMO dan keserakahan mendorong beli mahal; FUD dan ketakutan mendorong jual murah.",
          "Herd behavior membentuk gelembung dan keruntuhan; mengikuti kerumunan sering berujung di harga terburuk.",
          "Pola euforia lalu bear berulang: 2017 ke 2018 dan 2021 ke 2022.",
          "Rencana dan disiplin yang dibuat sebelum panik datang mengalahkan reaksi emosi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa arti FOMO dalam psikologi pasar?",
            options: [
              "Rasa takut ketinggalan yang mendorong membeli di harga tinggi",
              "Strategi membeli rutin",
              "Indikator teknikal",
              "Jenis dompet kripto",
            ],
            answer: 0,
            explain: "FOMO (fear of missing out) membuat orang memburu aset karena takut ketinggalan, sering di harga puncak.",
          },
          {
            q: "Apa yang biasanya dipicu oleh FUD?",
            options: [
              "Membeli lebih banyak dengan tenang",
              "Jual panik di harga rendah",
              "Menahan posisi tanpa emosi",
              "Menambah pasokan token",
            ],
            answer: 1,
            explain: "FUD (fear, uncertainty, doubt) menyebarkan ketakutan yang memicu penjualan panik.",
          },
          {
            q: "Apa itu herd behavior?",
            options: [
              "Strategi diversifikasi",
              "Kecenderungan meniru tindakan kerumunan",
              "Cara menghitung market cap",
              "Jadwal unlock token",
            ],
            answer: 1,
            explain: "Herd behavior adalah meniru kerumunan, yang ikut membentuk gelembung dan keruntuhan.",
          },
          {
            q: "Pola psikologi pasar kripto yang berulang ditunjukkan oleh?",
            options: [
              "Harga yang selalu datar",
              "Euforia 2017 lalu bear 2018, dan euforia 2021 lalu bear 2022",
              "Tidak adanya siklus sama sekali",
              "Kenaikan tanpa henti",
            ],
            answer: 1,
            explain: "Dua siklus itu memperlihatkan euforia yang disusul bear market secara berulang.",
          },
          {
            q: "Apa cara terbaik melawan jebakan emosi menurut pelajaran ini?",
            options: [
              "Mengikuti kerumunan",
              "Membuat rencana dan disiplin sebelum panik datang",
              "Menebak titik terbawah",
              "Membeli saat semua orang membeli",
            ],
            answer: 1,
            explain: "Rencana yang dibuat saat tenang membantu kita tidak bereaksi karena emosi saat pasar bergejolak.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "regulasi-pajak-indonesia",
    levelId: "investasi",
    order: 6,
    title: "Regulasi & Pajak Kripto di Indonesia",
    summary:
      "Memahami status hukum kripto di Indonesia sebagai komoditas di bawah Bappebti yang beralih ke OJK, serta pajak yang merujuk PMK 68/2022. Tarif dan aturan bisa berubah, rujuk sumber resmi.",
    durationMin: 14,
    tags: ["investasi", "regulasi", "pajak", "indonesia"],
    blocks: [
      {
        type: "paragraph",
        html: "Di Indonesia, kripto <strong>bukan</strong> alat pembayaran yang sah. Rupiah tetap satu-satunya alat pembayaran yang diakui. Namun kripto diizinkan untuk <strong>diperdagangkan sebagai komoditas</strong> (aset kripto), sehingga jual belinya legal di bursa yang terdaftar resmi.",
      },
      {
        type: "paragraph",
        html: "Karena diperlakukan sebagai komoditas dan objek investasi, transaksi kripto juga <strong>dikenai pajak</strong>. Memahami status hukum dan kewajiban pajak ini penting agar kamu berinvestasi secara tertib dan tidak terkejut oleh potongan biaya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Status hukum: komoditas di bawah pengawasan yang beralih",
        html: "Kripto di Indonesia diatur sebagai <strong>aset kripto (komoditas)</strong>, awalnya di bawah <strong>Bappebti</strong> (Badan Pengawas Perdagangan Berjangka Komoditi). Sesuai <strong>UU P2SK</strong>, pengawasan aset kripto beralih ke <strong>OJK</strong> (Otoritas Jasa Keuangan), yang efektif berlaku sekitar awal 2025. Hanya berdagang di exchange yang terdaftar resmi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Pajak merujuk PMK 68/2022",
        html: "Pajak kripto di Indonesia <strong>merujuk PMK 68/2022</strong> (PMK-68/PMK.03/2022) yang berlaku sejak <strong>1 Mei 2022</strong>. Dikenakan <strong>PPN final</strong> atas pembelian dan <strong>PPh Pasal 22 final</strong> atas penjualan aset kripto. Besarnya tergantung apakah exchange terdaftar di Bappebti atau tidak.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Tarif bisa berubah, rujuk sumber resmi",
        html: "Angka pajak di pelajaran ini merujuk PMK 68/2022 saat ditulis. Aturan dan tarif <strong>bisa berubah</strong>, apalagi setelah pengawasan beralih ke OJK. Selalu rujuk sumber resmi (DJP, Bappebti, OJK) untuk angka terbaru. Materi ini edukasi, bukan saran finansial atau nasihat pajak.",
      },
      {
        type: "video",
        comp: "LahirnyaBitcoinVideo",
        title: "Aset Digital yang Kini Diatur",
        caption: "Bitcoin lahir tanpa otoritas pusat; kini di banyak negara, termasuk Indonesia, diperdagangkan dengan aturan resmi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bitcoin.svg?width=400",
        alt: "Logo Bitcoin sebagai contoh aset kripto yang diatur sebagai komoditas di Indonesia",
        caption: "Di Indonesia, aset kripto seperti Bitcoin diperdagangkan sebagai komoditas, bukan alat pembayaran sah.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Tarif Pajak Kripto Indonesia (merujuk PMK 68/2022)",
        unit: "persen dari nilai transaksi",
        source: "PMK-68/PMK.03/2022, berlaku sejak 1 Mei 2022 (rujuk sumber resmi untuk angka terbaru)",
        note: "Bertransaksi di exchange terdaftar Bappebti dikenai tarif lebih rendah daripada yang tidak terdaftar.",
        data: [
          { label: "PPN beli (terdaftar)", value: 0.11, color: "#26a17b" },
          { label: "PPN beli (tidak terdaftar)", value: 0.22, color: "#f7931a" },
          { label: "PPh jual (terdaftar)", value: 0.1, color: "#2775ca" },
          { label: "PPh jual (tidak terdaftar)", value: 0.2, color: "#e74c3c" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menghitung pajak satu siklus beli dan jual",
        html: "Sari membeli aset kripto senilai Rp 10.000.000 lewat exchange yang terdaftar di Bappebti. Atas pembelian itu ia dikenai <strong>PPN final 0,11 persen</strong> = Rp 11.000. Beberapa waktu kemudian ia menjual aset senilai Rp 12.000.000 di exchange yang sama. Atas penjualan itu ia dikenai <strong>PPh Pasal 22 final 0,1 persen</strong> = Rp 12.000. Biaya pajak ini relatif kecil per transaksi, tetapi penting dicatat agar perhitungan untung-rugimu akurat. Angka merujuk PMK 68/2022 dan bisa berubah.",
      },
      {
        type: "case",
        title: "Sejarah: Pajak kripto Indonesia mulai berlaku 1 Mei 2022",
        html: "Indonesia mulai mengenakan pajak atas transaksi aset kripto sejak <strong>1 Mei 2022</strong>, melalui <strong>PMK-68/PMK.03/2022</strong>. Sejak saat itu, setiap pembelian aset kripto di exchange dikenai PPN final dan setiap penjualan dikenai PPh Pasal 22 final. Aturan ini menandai pengakuan resmi kripto sebagai objek perdagangan dan investasi yang kena pajak, sekaligus mendorong transaksi terjadi di platform terdaftar Bappebti. Belakangan, lewat UU P2SK, pengawasan aset kripto dialihkan ke OJK mulai sekitar awal 2025.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kamu membeli aset kripto senilai Rp 10.000.000 lewat exchange yang terdaftar di Bappebti. Berapa PPN final yang dikenakan dengan tarif 0,11 persen (merujuk PMK 68/2022)?",
        answer: 11000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "0,11 persen x Rp 10.000.000 = 0,0011 x 10.000.000 = <strong>Rp 11.000</strong>. Tarif PPN final untuk exchange terdaftar Bappebti lebih rendah daripada yang tidak terdaftar (0,22 persen).",
        hint: "Kalikan nilai pembelian dengan 0,11 persen, yaitu 0,0011.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kamu menjual aset kripto senilai Rp 20.000.000 di exchange terdaftar Bappebti. Berapa PPh Pasal 22 final yang dikenakan dengan tarif 0,1 persen (merujuk PMK 68/2022)?",
        answer: 20000,
        tolerance: 0,
        prefix: "Rp",
        solution:
          "0,1 persen x Rp 20.000.000 = 0,001 x 20.000.000 = <strong>Rp 20.000</strong>. PPh Pasal 22 final dikenakan atas penjualan, terpisah dari PPN atas pembelian.",
        hint: "Kalikan nilai penjualan dengan 0,1 persen, yaitu 0,001.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan lembaga dengan perannya terkait kripto di Indonesia.",
        pairs: [
          { left: "Bappebti", right: "Pengawas awal aset kripto sebagai komoditas" },
          { left: "OJK", right: "Pengawas aset kripto setelah peralihan UU P2SK" },
          { left: "DJP", right: "Otoritas yang memungut pajak (PPN dan PPh) transaksi kripto" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Kripto di Indonesia bukan alat pembayaran sah, tetapi legal diperdagangkan sebagai komoditas.",
          "Pengawasan awalnya di Bappebti, lalu beralih ke OJK sesuai UU P2SK (efektif sekitar awal 2025).",
          "Pajak merujuk PMK 68/2022: PPN final 0,11 persen (terdaftar) atau 0,22 persen (tidak terdaftar) atas pembelian.",
          "PPh Pasal 22 final 0,1 persen (terdaftar) atau 0,2 persen (tidak terdaftar) atas penjualan.",
          "Tarif dan aturan bisa berubah; selalu rujuk sumber resmi DJP, Bappebti, dan OJK.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bagaimana status hukum kripto di Indonesia?",
            options: [
              "Alat pembayaran sah menggantikan rupiah",
              "Komoditas (aset kripto) yang legal diperdagangkan",
              "Dilarang sepenuhnya",
              "Mata uang asing resmi",
            ],
            answer: 1,
            explain: "Kripto diatur sebagai komoditas yang boleh diperdagangkan, bukan alat pembayaran sah.",
          },
          {
            q: "Lembaga mana yang awalnya mengawasi aset kripto sebelum beralih ke OJK?",
            options: ["Bank Indonesia", "Bappebti", "BPK", "Kemendag saja"],
            answer: 1,
            explain: "Bappebti adalah pengawas awal; pengawasan beralih ke OJK sesuai UU P2SK.",
          },
          {
            q: "Berapa tarif PPN final pembelian kripto di exchange terdaftar Bappebti (merujuk PMK 68/2022)?",
            options: ["0,11 persen", "0,22 persen", "1 persen", "11 persen"],
            answer: 0,
            explain: "PPN final 0,11 persen untuk exchange terdaftar, 0,22 persen untuk yang tidak terdaftar.",
          },
          {
            q: "Pajak atas penjualan kripto dikenai sebagai apa?",
            options: [
              "PPh Pasal 22 final",
              "Pajak bumi dan bangunan",
              "Bea masuk",
              "Cukai",
            ],
            answer: 0,
            explain: "Penjualan kripto dikenai PPh Pasal 22 final (0,1 persen terdaftar atau 0,2 persen tidak terdaftar).",
          },
          {
            q: "Kapan pajak kripto Indonesia mulai berlaku?",
            options: ["1 Januari 2020", "1 Mei 2022", "1 Mei 2025", "1 Januari 2018"],
            answer: 1,
            explain: "Pajak kripto merujuk PMK 68/2022 dan berlaku sejak 1 Mei 2022.",
          },
        ],
      },
    ],
  },
];
