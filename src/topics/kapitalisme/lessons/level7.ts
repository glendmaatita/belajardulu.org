import type { Lesson } from "../../../types";

export const level7: Lesson[] = [
  // ============================================================
  {
    id: "krisis-siklus-ekonomi",
    levelId: "krisis",
    order: 1,
    title: "Krisis & Siklus Ekonomi",
    summary:
      "Kapitalisme tidak bergerak lurus, melainkan naik turun dalam siklus. Pelajari gelembung, keruntuhan, dan Depresi Besar 1929 sebagai pelajaran abadi.",
    durationMin: 15,
    tags: ["krisis", "siklus bisnis", "depresi 1929", "gelembung"],
    blocks: [
      {
        type: "paragraph",
        html: "Ekonomi pasar bergerak dalam <strong>siklus bisnis</strong>: masa ekspansi (tumbuh), puncak, kontraksi (resesi), lalu pemulihan, berulang. Saat optimisme berlebihan, harga aset bisa membentuk <strong>gelembung</strong> yang kemudian pecah dan memicu krisis.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Anatomi gelembung",
        html: "Harga melonjak jauh di atas nilai wajar karena euforia dan utang, lalu kepercayaan tiba-tiba pecah dan harga ambruk. Pola ini berulang sepanjang sejarah, dari tulip 1637 sampai properti 2008.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Atur tingkat euforia dan utang, lalu lihat bagaimana gelembung membesar dan seberapa dalam koreksinya saat pecah.",
      },
      { type: "widget", widget: "SimulatorBoomBust" },
      {
        type: "video",
        comp: "SiklusBisnis",
        title: "Siklus Bisnis",
        caption: "Ekspansi, puncak, resesi, dan pemulihan yang terus berulang dalam ekonomi pasar.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Unemployed_men_during_the_Great_Depression.jpg?width=400",
        alt: "Antrean pengangguran pada masa Depresi Besar 1930-an",
        caption: "Depresi Besar 1930-an: jutaan orang kehilangan pekerjaan setelah keruntuhan pasar saham 1929.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "area",
        title: "Pengangguran AS Melonjak Saat Depresi Besar (ilustrasi)",
        unit: "perkiraan tingkat pengangguran (%)",
        source: "ilustrasi berdasarkan data sejarah Depresi Besar",
        note: "Setelah crash 1929, pengangguran AS melonjak hingga sekitar seperempat angkatan kerja.",
        data: [
          { label: "1929", value: 3 },
          { label: "1931", value: 16 },
          { label: "1933", value: 25 },
          { label: "1937", value: 14 },
          { label: "1941", value: 10 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Krisis keuangan global 2008",
        html: "Pada pertengahan 2000-an, harga rumah di Amerika melonjak dan bank memberi <strong>kredit perumahan</strong> kepada peminjam berisiko tinggi, lalu mengemasnya jadi produk keuangan rumit. Saat harga rumah berbalik turun pada <strong>2007-2008</strong>, gelembung pecah. Bank besar seperti Lehman Brothers bangkrut, kredit membeku, dan resesi menjalar ke seluruh dunia. Krisis ini menunjukkan bahwa gelembung yang ditopang utang bisa menulari seluruh sistem keuangan global.",
      },
      {
        type: "case",
        title: "Sejarah: Depresi Besar 1929 dan tulip mania 1637",
        html: "Pada <strong>24 Oktober 1929</strong> ('Black Thursday'), pasar saham New York ambruk, memicu <strong>Depresi Besar</strong>: ribuan bank tutup dan pengangguran melonjak sampai sekitar 25%. Jauh sebelumnya, pada <strong>1637</strong>, terjadi <strong>tulip mania</strong> di Belanda, ketika harga umbi bunga tulip melambung gila-gilaan lalu runtuh dalam sekejap. Dua peristiwa berjarak tiga abad ini mengajarkan pelajaran sama: euforia dan spekulasi berlebihan selalu berakhir dengan koreksi yang menyakitkan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Tingkat pengangguran AS naik dari sekitar 3% (1929) menjadi 25% (1933). Berapa poin persen kenaikannya?",
        answer: 22,
        tolerance: 0,
        suffix: "poin persen",
        solution:
          "25 - 3 = <strong>22 poin persen</strong>. Lonjakan sebesar ini menggambarkan betapa dalamnya Depresi Besar melukai ekonomi nyata.",
        hint: "Kurangkan angka awal dari angka puncak.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan fase siklus bisnis dengan cirinya.",
        pairs: [
          { left: "Ekspansi", right: "Ekonomi tumbuh, lapangan kerja bertambah" },
          { left: "Puncak", right: "Pertumbuhan mencapai titik tertinggi" },
          { left: "Resesi", right: "Ekonomi menyusut, pengangguran naik" },
          { left: "Pemulihan", right: "Ekonomi mulai bangkit kembali" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Ekonomi pasar bergerak dalam siklus: ekspansi, puncak, resesi, pemulihan.",
          "Gelembung terbentuk saat harga aset melonjak karena euforia dan utang, lalu pecah.",
          "Depresi Besar 1929 menaikkan pengangguran AS hingga sekitar 25%.",
          "Krisis 2008 menunjukkan gelembung berbasis utang bisa menulari sistem global.",
          "Dari tulip 1637 sampai 2008, pola euforia lalu koreksi terus berulang.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bagaimana ekonomi pasar umumnya bergerak?",
            options: ["Selalu lurus naik", "Dalam siklus naik turun", "Selalu turun", "Tidak pernah berubah"],
            answer: 1,
            explain: "Ekonomi bergerak dalam siklus ekspansi, puncak, resesi, dan pemulihan.",
          },
          {
            q: "Apa yang memicu gelembung aset?",
            options: [
              "Euforia dan utang yang mendorong harga jauh di atas nilai wajar",
              "Harga yang terlalu stabil",
              "Pajak rendah",
              "Kurangnya pembeli",
            ],
            answer: 0,
            explain: "Optimisme berlebihan dan utang membuat harga melambung sebelum akhirnya pecah.",
          },
          {
            q: "Apa peristiwa pemicu Depresi Besar?",
            options: [
              "Keruntuhan pasar saham 1929",
              "Tembok Berlin runtuh",
              "Tulip mania",
              "Krisis minyak 1973",
            ],
            answer: 0,
            explain: "Crash pasar saham New York Oktober 1929 memicu Depresi Besar.",
          },
          {
            q: "Apa pelajaran bersama tulip mania 1637 dan krisis 2008?",
            options: [
              "Spekulasi berlebihan berakhir dengan koreksi menyakitkan",
              "Gelembung tidak pernah pecah",
              "Bunga tulip selalu mahal",
              "Bank tidak pernah bangkrut",
            ],
            answer: 0,
            explain: "Euforia dan spekulasi berlebih selalu diikuti keruntuhan harga.",
          },
          {
            q: "Pengangguran naik dari 3% ke 25% berarti naik?",
            options: ["22 poin persen", "25 poin persen", "3 poin persen", "28 poin persen"],
            answer: 0,
            explain: "25 dikurangi 3 sama dengan 22 poin persen.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "siklus-bisnis-lebih-dalam",
    levelId: "krisis",
    order: 2,
    title: "Siklus Bisnis Lebih Dalam",
    summary:
      "Mengapa ekonomi tidak pernah tumbuh lurus. Telusuri empat fase siklus bisnis, peran utang dan suku bunga, serta cara membaca tanda pergantian fase.",
    durationMin: 14,
    tags: ["siklus bisnis", "resesi", "ekspansi", "suku bunga"],
    blocks: [
      {
        type: "paragraph",
        html: "Pertumbuhan ekonomi tidak pernah berjalan dalam garis lurus. Output (PDB) bergerak naik turun di sekitar tren jangka panjangnya, membentuk <strong>siklus bisnis</strong> dengan empat fase: ekspansi, puncak, kontraksi (resesi), dan palung lalu pemulihan.",
      },
      {
        type: "paragraph",
        html: "Mesin utama siklus adalah <strong>kepercayaan</strong> dan <strong>kredit</strong>. Saat optimisme tinggi, rumah tangga dan perusahaan berutang dan berbelanja, sehingga ekspansi menguat. Saat utang menumpuk dan suku bunga naik, belanja mengerem dan ekonomi berbalik ke arah kontraksi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa itu resesi?",
        html: "Definisi teknis yang sering dipakai adalah PDB riil yang menyusut selama dua kuartal berturut-turut. Tetapi lembaga seperti NBER menilai resesi dari gambaran luas: produksi, lapangan kerja, pendapatan, dan penjualan.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Puncak justru paling berbahaya",
        html: "Saat ekonomi memuncak, semua tampak indah: harga aset tinggi, utang murah, optimisme penuh. Justru di titik inilah risiko terbesar menumpuk, karena koreksi biasanya datang setelah euforia.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser tingkat investasi dan produktivitas, lalu lihat bagaimana lintasan pertumbuhan ekonomi berubah dari satu periode ke periode berikutnya.",
      },
      { type: "widget", widget: "SimulatorPertumbuhanEkonomi" },
      {
        type: "video",
        comp: "SiklusBisnis",
        title: "Siklus Bisnis",
        caption: "Empat fase yang terus berulang: ekspansi, puncak, resesi, dan pemulihan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Trading_Floor_at_the_New_York_Stock_Exchange_during_the_Zendesk_IPO.jpg?width=400",
        alt: "Lantai bursa New York Stock Exchange",
        caption: "Pasar saham sering menjadi cermin awal pergantian fase siklus bisnis.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "PDB Bergerak Naik Turun di Sekitar Tren (ilustrasi)",
        unit: "indeks output (tren = 100)",
        source: "ilustrasi edukatif bentuk siklus bisnis",
        note: "Output nyata berosilasi di sekitar tren jangka panjang, bukan garis lurus.",
        data: [
          { label: "Ekspansi", value: 98 },
          { label: "Menguat", value: 108 },
          { label: "Puncak", value: 114 },
          { label: "Resesi", value: 101 },
          { label: "Palung", value: 94 },
          { label: "Pulih", value: 103 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Resesi singkat akibat COVID-19 (2020)",
        html: "Pada awal <strong>2020</strong>, pandemi COVID-19 memaksa penutupan ekonomi global. PDB banyak negara anjlok tajam dalam hitungan bulan, lalu pulih relatif cepat berkat stimulus besar. Indonesia mencatat pertumbuhan negatif sekitar <strong>-2,1%</strong> sepanjang 2020, resesi pertama sejak 1998. Ini contoh siklus yang dipicu guncangan luar (eksternal), bukan gelembung utang biasa.",
      },
      {
        type: "case",
        title: "Sejarah: Resesi panjang 1873 (Long Depression)",
        html: "Mulai dari kepanikan keuangan di <strong>1873</strong>, dunia memasuki periode lesu berkepanjangan yang dikenal sebagai <strong>Long Depression</strong> hingga sekitar 1879. Dipicu spekulasi rel kereta api dan keruntuhan bank, peristiwa ini menunjukkan bahwa kontraksi bisa berlangsung bertahun-tahun, bukan sekadar beberapa kuartal. Siklus bisnis sudah menjadi ciri kapitalisme jauh sebelum abad ke-20.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada satu siklus, indeks output naik dari 100 (awal ekspansi) menjadi 114 (puncak). Berapa persen pertumbuhan dari awal ke puncak?",
        answer: 14,
        tolerance: 0,
        suffix: "%",
        solution:
          "(114 - 100) / 100 x 100% = <strong>14%</strong>. Inilah besar ekspansi sebelum ekonomi mencapai puncak dan berbalik.",
        hint: "Selisih dibagi nilai awal, lalu kalikan 100%.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap ciri ke fase siklus bisnis yang tepat.",
        buckets: ["Ekspansi", "Resesi"],
        items: [
          { text: "Lapangan kerja bertambah", bucket: "Ekspansi" },
          { text: "Belanja konsumen meningkat", bucket: "Ekspansi" },
          { text: "Optimisme dan investasi naik", bucket: "Ekspansi" },
          { text: "Pengangguran meningkat", bucket: "Resesi" },
          { text: "Produksi pabrik menyusut", bucket: "Resesi" },
          { text: "Perusahaan menunda investasi", bucket: "Resesi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Siklus bisnis punya empat fase: ekspansi, puncak, resesi, dan pemulihan.",
          "Mesin siklus adalah kepercayaan dan kredit yang pasang surut.",
          "Resesi sering didefinisikan sebagai PDB menyusut dua kuartal berturut-turut.",
          "Puncak justru titik paling rawan karena euforia menutupi risiko.",
          "Guncangan luar seperti COVID-19 juga bisa memicu resesi mendadak.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Berapa fase utama siklus bisnis?",
            options: ["Dua", "Tiga", "Empat", "Enam"],
            answer: 2,
            explain: "Empat fase: ekspansi, puncak, resesi (kontraksi), dan pemulihan.",
          },
          {
            q: "Apa mesin utama yang menggerakkan siklus bisnis?",
            options: [
              "Cuaca dan musim",
              "Kepercayaan dan kredit yang pasang surut",
              "Jumlah penduduk",
              "Warna uang kertas",
            ],
            answer: 1,
            explain: "Optimisme dan utang yang naik turun mendorong ekspansi lalu kontraksi.",
          },
          {
            q: "Definisi teknis resesi yang umum dipakai adalah?",
            options: [
              "PDB riil menyusut dua kuartal berturut-turut",
              "Harga saham naik",
              "Inflasi nol",
              "Suku bunga negatif",
            ],
            answer: 0,
            explain: "Dua kuartal berturut-turut PDB riil menyusut sering dipakai sebagai patokan.",
          },
          {
            q: "Mengapa puncak siklus justru berbahaya?",
            options: [
              "Karena harga aset murah",
              "Karena euforia menumpuk risiko sebelum koreksi datang",
              "Karena tidak ada utang",
              "Karena pengangguran tinggi",
            ],
            answer: 1,
            explain: "Di puncak semua tampak indah, padahal risiko terbesar sedang menumpuk.",
          },
          {
            q: "Resesi 2020 di banyak negara terutama dipicu oleh?",
            options: [
              "Gelembung properti",
              "Guncangan luar berupa pandemi COVID-19",
              "Tulip mania",
              "Krisis minyak",
            ],
            answer: 1,
            explain: "Penutupan ekonomi akibat pandemi membuat PDB anjlok mendadak pada 2020.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "depresi-besar-1929",
    levelId: "krisis",
    order: 3,
    title: "Depresi Besar 1929",
    summary:
      "Krisis ekonomi terdalam dalam sejarah kapitalisme. Telusuri keruntuhan pasar saham 24 Oktober 1929, gelombang kebangkrutan bank, dan lahirnya kebijakan New Deal.",
    durationMin: 15,
    tags: ["depresi 1929", "krisis", "new deal", "pasar saham"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Depresi Besar</strong> adalah krisis ekonomi terparah dalam sejarah kapitalisme modern. Dimulai dari keruntuhan pasar saham New York pada akhir 1929, krisis ini menyebar ke seluruh dunia dan berlangsung hampir satu dekade, dengan jutaan orang kehilangan pekerjaan dan tabungan.",
      },
      {
        type: "paragraph",
        html: "Pemicunya adalah euforia spekulasi saham yang ditopang utang (<strong>margin</strong>). Banyak orang meminjam untuk membeli saham, sehingga ketika harga mulai turun, mereka terpaksa menjual cepat, memicu kepanikan beruntun yang menjatuhkan harga lebih dalam lagi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Black Thursday",
        html: "Pada <strong>24 Oktober 1929</strong>, dikenal sebagai 'Black Thursday', pasar saham New York mulai runtuh, disusul 'Black Tuesday' 29 Oktober. Dalam beberapa tahun, indeks Dow Jones kehilangan hampir 90% nilainya.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Bank ikut runtuh",
        html: "Ketika nasabah panik menarik uang serentak (rush), ribuan bank di Amerika tidak sanggup membayar dan tutup. Kredit membeku, perusahaan bangkrut, dan pengangguran melonjak hingga sekitar seperempat angkatan kerja.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Lahirnya New Deal",
        html: "Presiden Franklin D. Roosevelt menjawab krisis dengan program <strong>New Deal</strong> sejak 1933: proyek pekerjaan umum, jaminan sosial, dan pengawasan bank. Inilah momen ketika peran negara dalam ekonomi tumbuh besar.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Unemployed_men_during_the_Great_Depression.jpg?width=400",
        alt: "Antrean pria pengangguran pada masa Depresi Besar",
        caption: "Jutaan orang antre mencari kerja dan bantuan makanan sepanjang Depresi Besar 1930-an.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "KapitalismeVideo",
        title: "Kapitalisme dan Krisisnya",
        caption: "Bagaimana euforia pasar bisa berbalik menjadi keruntuhan yang menyeret seluruh ekonomi.",
      },
      {
        type: "widget",
        widget: "SimulatorBoomBust",
      },
      {
        type: "chart",
        variant: "line",
        title: "Indeks Dow Jones Runtuh 1929-1932 (ilustrasi)",
        unit: "perkiraan indeks Dow Jones",
        source: "ilustrasi berdasarkan data sejarah Depresi Besar",
        note: "Dari puncak sekitar 381 pada 1929, indeks anjlok ke sekitar 41 pada 1932, kehilangan hampir 90%.",
        data: [
          { label: "1929", value: 381 },
          { label: "1930", value: 250 },
          { label: "1931", value: 150 },
          { label: "1932", value: 41 },
          { label: "1936", value: 180 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kebangkrutan bank beruntun",
        html: "Antara 1930 dan 1933, sekitar <strong>9.000 bank</strong> di Amerika Serikat tutup. Bayangkan sebuah keluarga menabung Rp setara 10.000 dolar di bank lokal; ketika bank itu kolaps tanpa jaminan simpanan, seluruh tabungan lenyap. Pengalaman pahit inilah yang melahirkan lembaga penjamin simpanan (FDIC) pada 1933, cikal bakal sistem seperti LPS di Indonesia.",
      },
      {
        type: "case",
        title: "Sejarah: Smoot-Hawley 1930 memperburuk krisis",
        html: "Pada <strong>1930</strong>, Amerika Serikat memberlakukan <strong>Tarif Smoot-Hawley</strong> yang menaikkan bea masuk ribuan barang impor demi melindungi industri dalam negeri. Negara lain membalas dengan tarif serupa, sehingga perdagangan dunia anjlok lebih dari setengahnya pada awal 1930-an. Alih-alih menyelamatkan ekonomi, proteksionisme justru memperdalam Depresi Besar.",
      },
      {
        type: "calcExercise",
        prompt:
          "Indeks Dow Jones turun dari sekitar 381 (1929) menjadi sekitar 41 (1932). Berapa persen penurunannya?",
        answer: 89,
        tolerance: 1,
        suffix: "%",
        solution:
          "(381 - 41) / 381 x 100% = 340 / 381 x 100% kira-kira <strong>89%</strong>. Hampir seluruh nilai pasar saham lenyap dalam tiga tahun.",
        hint: "Selisih puncak dan dasar dibagi nilai puncak, lalu kalikan 100%.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap hal sebagai penyebab krisis atau respons kebijakan New Deal.",
        buckets: ["Penyebab krisis", "Respons New Deal"],
        items: [
          { text: "Spekulasi saham dengan utang margin", bucket: "Penyebab krisis" },
          { text: "Penarikan uang massal dari bank", bucket: "Penyebab krisis" },
          { text: "Tarif Smoot-Hawley menjatuhkan perdagangan", bucket: "Penyebab krisis" },
          { text: "Proyek pekerjaan umum besar-besaran", bucket: "Respons New Deal" },
          { text: "Pembentukan penjamin simpanan FDIC", bucket: "Respons New Deal" },
          { text: "Pengawasan ketat terhadap bank", bucket: "Respons New Deal" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Depresi Besar dipicu keruntuhan pasar saham New York 24 Oktober 1929.",
          "Spekulasi saham dengan utang margin memperbesar gelembung lalu kepanikan.",
          "Ribuan bank tutup, kredit membeku, dan pengangguran mencapai sekitar 25%.",
          "Tarif Smoot-Hawley 1930 memperburuk krisis dengan menjatuhkan perdagangan dunia.",
          "New Deal memperluas peran negara: pekerjaan umum, jaminan sosial, pengawasan bank.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kapan keruntuhan pasar saham pemicu Depresi Besar terjadi?",
            options: ["24 Oktober 1929", "1 Januari 1930", "15 September 2008", "Mei 1998"],
            answer: 0,
            explain: "Black Thursday 24 Oktober 1929 menandai awal keruntuhan pasar saham.",
          },
          {
            q: "Apa yang memperbesar gelembung saham sebelum 1929?",
            options: [
              "Pembelian saham dengan utang margin",
              "Larangan jual beli saham",
              "Pajak saham yang tinggi",
              "Kurangnya investor",
            ],
            answer: 0,
            explain: "Banyak orang meminjam untuk membeli saham, memperbesar euforia dan risiko.",
          },
          {
            q: "Apa dampak Tarif Smoot-Hawley 1930?",
            options: [
              "Perdagangan dunia anjlok karena balasan tarif negara lain",
              "Ekonomi langsung pulih",
              "Harga saham naik",
              "Bank tidak terpengaruh",
            ],
            answer: 0,
            explain: "Proteksionisme memicu perang tarif yang memperdalam Depresi.",
          },
          {
            q: "Program apa yang diluncurkan untuk menjawab Depresi Besar?",
            options: ["New Deal", "Marshall Plan", "Bretton Woods", "Perestroika"],
            answer: 0,
            explain: "New Deal pimpinan Roosevelt memperluas peran negara dalam ekonomi.",
          },
          {
            q: "Indeks Dow Jones turun dari 381 ke 41, kira-kira berapa persen?",
            options: ["Sekitar 89%", "Sekitar 25%", "Sekitar 50%", "Sekitar 10%"],
            answer: 0,
            explain: "340 dibagi 381 sekitar 89%, hampir seluruh nilai pasar lenyap.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "krisis-keuangan-global-2008",
    levelId: "krisis",
    order: 4,
    title: "Krisis Keuangan Global 2008",
    summary:
      "Bagaimana kredit perumahan berisiko di Amerika berubah menjadi krisis global. Telusuri gelembung subprime, kebangkrutan Lehman Brothers 15 September 2008, dan resesi besar.",
    durationMin: 15,
    tags: ["krisis 2008", "subprime", "lehman brothers", "resesi global"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Krisis Keuangan Global 2008</strong> bermula dari pasar perumahan Amerika Serikat. Bank memberi <strong>kredit subprime</strong>, yaitu pinjaman rumah kepada peminjam berisiko tinggi, lalu mengemasnya menjadi produk keuangan rumit yang dijual ke seluruh dunia.",
      },
      {
        type: "paragraph",
        html: "Selama harga rumah naik, semua tampak aman. Tetapi ketika harga rumah mulai turun pada 2006-2007, banyak peminjam gagal bayar. Produk keuangan yang tadinya dianggap aman tiba-tiba beracun, dan kepercayaan antarbank ambruk.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Lehman Brothers bangkrut",
        html: "Pada <strong>15 September 2008</strong>, bank investasi raksasa Lehman Brothers menyatakan bangkrut, kebangkrutan terbesar dalam sejarah Amerika. Peristiwa ini memicu kepanikan global dan pembekuan kredit di mana-mana.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Terlalu besar untuk gagal",
        html: "Banyak lembaga keuangan begitu besar dan saling terhubung sehingga kejatuhannya mengancam seluruh sistem. Pemerintah AS akhirnya menyuntik dana talangan ratusan miliar dolar (TARP) untuk mencegah keruntuhan total.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Akar masalah: gelembung dot-com 2000",
        html: "Sebelum gelembung properti, ada <strong>gelembung dot-com</strong> yang pecah pada 2000, ketika harga saham perusahaan internet melambung tanpa laba lalu runtuh. Suku bunga rendah setelahnya ikut menyuburkan euforia properti yang berujung krisis 2008.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Trading_Floor_at_the_New_York_Stock_Exchange_during_the_Zendesk_IPO.jpg?width=400",
        alt: "Lantai bursa New York Stock Exchange",
        caption: "Bursa saham menjadi pusat kepanikan ketika kepercayaan pasar runtuh pada 2008.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "SiklusBisnis",
        title: "Siklus Bisnis",
        caption: "Gelembung dan keruntuhan adalah bagian dari siklus naik turun ekonomi pasar.",
      },
      {
        type: "widget",
        widget: "SimulatorBoomBust",
      },
      {
        type: "chart",
        variant: "line",
        title: "Indeks Dow Jones Anjlok Saat Krisis 2008-2009 (ilustrasi)",
        unit: "perkiraan indeks Dow Jones",
        source: "ilustrasi berdasarkan data sejarah krisis 2008",
        note: "Dari puncak sekitar 14.164 (Oktober 2007), indeks jatuh ke sekitar 6.547 (Maret 2009).",
        data: [
          { label: "Okt 2007", value: 14164 },
          { label: "Sep 2008", value: 11000 },
          { label: "Des 2008", value: 8776 },
          { label: "Mar 2009", value: 6547 },
          { label: "Des 2009", value: 10428 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Resesi menjalar ke seluruh dunia",
        html: "Setelah Lehman jatuh, kredit membeku dan perdagangan global menyusut. Pengangguran di Amerika naik dari sekitar <strong>4,7% (2007)</strong> menjadi sekitar <strong>10% (akhir 2009)</strong>. Banyak negara masuk resesi, dan pemerintah di seluruh dunia memberi stimulus serta dana talangan bank untuk mencegah depresi seperti 1929.",
      },
      {
        type: "case",
        title: "Sejarah: Gelembung dot-com pecah tahun 2000",
        html: "Pada akhir 1990-an, saham perusahaan internet melambung tinggi meski banyak yang belum untung. Indeks Nasdaq memuncak Maret <strong>2000</strong> lalu runtuh, kehilangan sekitar 78% nilainya sampai 2002. Pelajaran dari gelembung dot-com, euforia tanpa fundamental selalu berakhir koreksi, terulang lagi dalam gelembung properti yang memicu krisis 2008.",
      },
      {
        type: "calcExercise",
        prompt:
          "Indeks Dow Jones turun dari sekitar 14.164 (2007) menjadi sekitar 6.547 (2009). Berapa persen penurunannya?",
        answer: 54,
        tolerance: 1,
        suffix: "%",
        solution:
          "(14164 - 6547) / 14164 x 100% = 7617 / 14164 x 100% kira-kira <strong>54%</strong>. Lebih dari separuh nilai pasar lenyap dalam sekitar 17 bulan.",
        hint: "Selisih puncak dan dasar dibagi nilai puncak, lalu kalikan 100%.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan istilah krisis 2008 dengan penjelasannya.",
        pairs: [
          { left: "Kredit subprime", right: "Pinjaman rumah kepada peminjam berisiko tinggi" },
          { left: "Lehman Brothers", right: "Bank investasi yang bangkrut 15 September 2008" },
          { left: "Terlalu besar untuk gagal", right: "Lembaga yang kejatuhannya mengancam seluruh sistem" },
          { left: "TARP", right: "Dana talangan pemerintah untuk menyelamatkan bank" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Krisis 2008 berawal dari kredit subprime yang dikemas jadi produk keuangan rumit.",
          "Saat harga rumah turun, gagal bayar meluas dan kepercayaan antarbank runtuh.",
          "Kebangkrutan Lehman Brothers 15 September 2008 memicu kepanikan global.",
          "Lembaga 'terlalu besar untuk gagal' diselamatkan dengan dana talangan TARP.",
          "Gelembung dot-com 2000 mengajarkan pola euforia tanpa fundamental yang terulang.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dari mana krisis keuangan global 2008 bermula?",
            options: [
              "Pasar perumahan dan kredit subprime di Amerika",
              "Harga minyak dunia",
              "Gagal panen di Eropa",
              "Perang dagang Asia",
            ],
            answer: 0,
            explain: "Kredit subprime yang dikemas jadi produk keuangan menjadi sumber krisis.",
          },
          {
            q: "Peristiwa apa yang memicu kepanikan global pada September 2008?",
            options: [
              "Kebangkrutan Lehman Brothers",
              "Keruntuhan tulip",
              "Krisis minyak 1973",
              "Tembok Berlin runtuh",
            ],
            answer: 0,
            explain: "Lehman Brothers bangkrut 15 September 2008, kebangkrutan terbesar di AS.",
          },
          {
            q: "Apa arti 'terlalu besar untuk gagal'?",
            options: [
              "Lembaga yang kejatuhannya mengancam seluruh sistem keuangan",
              "Perusahaan yang tidak pernah rugi",
              "Bank yang dilarang berkembang",
              "Pasar yang selalu naik",
            ],
            answer: 0,
            explain: "Karena saling terhubung, kejatuhan satu lembaga besar bisa menyeret yang lain.",
          },
          {
            q: "Apa pelajaran dari gelembung dot-com 2000?",
            options: [
              "Euforia tanpa fundamental berakhir dengan koreksi",
              "Saham internet selalu untung",
              "Gelembung tidak pernah pecah",
              "Suku bunga tidak penting",
            ],
            answer: 0,
            explain: "Nasdaq runtuh setelah memuncak 2000, pola yang terulang di properti 2008.",
          },
          {
            q: "Indeks Dow Jones turun dari 14.164 ke 6.547, kira-kira berapa persen?",
            options: ["Sekitar 54%", "Sekitar 89%", "Sekitar 25%", "Sekitar 10%"],
            answer: 0,
            explain: "7617 dibagi 14164 sekitar 54%, lebih dari separuh nilai pasar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "krisis-moneter-asia-1997",
    levelId: "krisis",
    order: 5,
    title: "Krisis Moneter Asia 1997-1998",
    summary:
      "Ketika rupiah anjlok dan ekonomi Indonesia runtuh. Telusuri pelarian modal, intervensi IMF, krisis perbankan, dan akhir Orde Baru pada Mei 1998.",
    durationMin: 14,
    tags: ["krismon 1998", "rupiah", "imf", "indonesia"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Krisis Moneter Asia</strong> meletus pada 1997, dimulai dari Thailand ketika mata uang baht ambruk, lalu menyebar cepat ke Indonesia, Korea Selatan, dan negara tetangga. Di Indonesia, krisis ini dikenal sebagai <strong>krismon</strong> dan menjadi titik balik sejarah bangsa.",
      },
      {
        type: "paragraph",
        html: "Penyebabnya adalah utang luar negeri jangka pendek yang besar, nilai tukar tetap yang rapuh, dan pelarian modal mendadak (<strong>capital flight</strong>). Ketika investor asing menarik dana serentak, rupiah jatuh bebas dan perusahaan yang berutang dolar tidak sanggup membayar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rupiah anjlok",
        html: "Rupiah jatuh dari sekitar <strong>Rp2.500 per dolar</strong> pada pertengahan 1997 menjadi sekitar <strong>Rp16.000 per dolar</strong> pada pertengahan 1998. Harga barang melonjak, dan banyak perusahaan serta bank kolaps.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Krisis perbankan",
        html: "Puluhan bank tutup dan ditutup paksa. Pemerintah menanggung biaya penyehatan perbankan yang sangat besar lewat BLBI, beban yang menambah utang negara selama bertahun-tahun setelahnya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Peran IMF",
        html: "Indonesia meminta bantuan <strong>IMF</strong> yang memberi pinjaman disertai syarat reformasi ketat: menutup bank bermasalah, mencabut subsidi, dan menertibkan anggaran. Sebagian syarat justru dinilai memperberat tekanan sosial saat itu.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jukung_Pasar_Terapung.jpg?width=400",
        alt: "Pasar terapung dengan perahu jukung di Indonesia",
        caption: "Krisis 1997-1998 memukul ekonomi rakyat Indonesia dari pasar tradisional hingga industri besar.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "InflasiVideo",
        title: "Inflasi",
        caption: "Anjloknya rupiah membuat harga barang melonjak tajam, contoh nyata inflasi tinggi.",
      },
      {
        type: "widget",
        widget: "KalkulatorInflasi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Nilai Tukar Rupiah Terhadap Dolar AS 1997-1998 (ilustrasi)",
        unit: "perkiraan rupiah per dolar AS",
        source: "ilustrasi berdasarkan data sejarah krisis moneter",
        note: "Rupiah anjlok dari sekitar 2.500 menjadi puncak sekitar 16.000 per dolar dalam setahun.",
        data: [
          { label: "Jul 1997", value: 2500 },
          { label: "Okt 1997", value: 3600 },
          { label: "Jan 1998", value: 10000 },
          { label: "Jun 1998", value: 16000 },
          { label: "Des 1998", value: 8000 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Perusahaan terjerat utang dolar",
        html: "Bayangkan perusahaan yang berutang <strong>1 juta dolar</strong> saat kurs Rp2.500. Beban utangnya sekitar Rp2,5 miliar. Ketika rupiah anjlok ke Rp16.000, utang yang sama membengkak menjadi Rp16 miliar tanpa berubah jumlah dolarnya. Banyak perusahaan dengan pola seperti ini langsung bangkrut, memutus rantai produksi dan lapangan kerja.",
      },
      {
        type: "case",
        title: "Sejarah: Soeharto mundur Mei 1998",
        html: "Krisis ekonomi memicu krisis sosial dan politik. Harga melonjak, pengangguran meluas, dan gelombang demonstrasi besar pecah di berbagai kota. Pada <strong>21 Mei 1998</strong>, Presiden Soeharto menyatakan berhenti setelah 32 tahun berkuasa, menandai akhir Orde Baru dan awal era Reformasi. Krisis moneter menjadi salah satu peristiwa paling menentukan dalam sejarah modern Indonesia.",
      },
      {
        type: "calcExercise",
        prompt:
          "Rupiah melemah dari sekitar Rp2.500 menjadi sekitar Rp16.000 per dolar. Berapa kali lipat pelemahannya? (bulatkan)",
        answer: 6,
        tolerance: 1,
        suffix: "kali",
        solution:
          "16.000 / 2.500 = 6,4 atau dibulatkan sekitar <strong>6 kali lipat</strong>. Artinya beban utang dolar membengkak berkali lipat dalam waktu singkat.",
        hint: "Bagi nilai kurs akhir dengan kurs awal.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap hal sebagai penyebab atau dampak krisis moneter 1997-1998.",
        buckets: ["Penyebab", "Dampak"],
        items: [
          { text: "Utang luar negeri jangka pendek yang besar", bucket: "Penyebab" },
          { text: "Pelarian modal asing mendadak", bucket: "Penyebab" },
          { text: "Nilai tukar tetap yang rapuh", bucket: "Penyebab" },
          { text: "Rupiah anjlok dan harga melonjak", bucket: "Dampak" },
          { text: "Puluhan bank tutup", bucket: "Dampak" },
          { text: "Soeharto mundur dan Orde Baru berakhir", bucket: "Dampak" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Krisis moneter Asia 1997 menyebar dari Thailand ke Indonesia dan negara tetangga.",
          "Pemicunya utang luar negeri jangka pendek, kurs tetap rapuh, dan pelarian modal.",
          "Rupiah anjlok dari sekitar Rp2.500 menjadi sekitar Rp16.000 per dolar.",
          "Utang dolar perusahaan membengkak berkali lipat sehingga banyak yang bangkrut.",
          "Krisis berujung mundurnya Soeharto pada 21 Mei 1998 dan lahirnya era Reformasi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dari negara mana krisis moneter Asia 1997 bermula?",
            options: ["Thailand", "Indonesia", "Jepang", "Amerika Serikat"],
            answer: 0,
            explain: "Krisis dimulai dari jatuhnya baht Thailand lalu menyebar ke kawasan.",
          },
          {
            q: "Apa salah satu penyebab utama krisis di Indonesia?",
            options: [
              "Utang luar negeri jangka pendek dan pelarian modal",
              "Harga minyak turun",
              "Gagal panen padi",
              "Larangan ekspor",
            ],
            answer: 0,
            explain: "Utang jangka pendek dan capital flight membuat rupiah jatuh bebas.",
          },
          {
            q: "Sekitar berapa puncak nilai tukar rupiah saat krisis 1998?",
            options: ["Rp16.000 per dolar", "Rp2.500 per dolar", "Rp5.000 per dolar", "Rp30.000 per dolar"],
            answer: 0,
            explain: "Rupiah sempat menyentuh sekitar Rp16.000 per dolar pada pertengahan 1998.",
          },
          {
            q: "Lembaga internasional apa yang memberi pinjaman bersyarat ke Indonesia?",
            options: ["IMF", "WTO", "OPEC", "NATO"],
            answer: 0,
            explain: "IMF memberi pinjaman disertai syarat reformasi ekonomi yang ketat.",
          },
          {
            q: "Apa peristiwa politik besar akibat krisis ini?",
            options: [
              "Soeharto mundur pada Mei 1998",
              "Indonesia merdeka",
              "Pemilu pertama",
              "Pembentukan ASEAN",
            ],
            answer: 0,
            explain: "Pada 21 Mei 1998 Soeharto berhenti, mengakhiri Orde Baru.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "penghancuran-kreatif-schumpeter",
    levelId: "krisis",
    order: 6,
    title: "Penghancuran Kreatif (Schumpeter)",
    summary:
      "Mengapa krisis dan kehancuran justru bagian dari kemajuan kapitalisme. Pahami gagasan penghancuran kreatif Joseph Schumpeter dan peran wirausahawan inovatif.",
    durationMin: 14,
    tags: ["schumpeter", "inovasi", "penghancuran kreatif", "wirausaha"],
    blocks: [
      {
        type: "paragraph",
        html: "Ekonom <strong>Joseph Schumpeter</strong> menawarkan cara pandang berbeda tentang krisis. Dalam bukunya tahun <strong>1942</strong>, ia menyebut <strong>penghancuran kreatif</strong> (creative destruction): proses ketika inovasi baru terus-menerus menggantikan cara lama, menghancurkan industri usang sambil melahirkan yang baru.",
      },
      {
        type: "paragraph",
        html: "Bagi Schumpeter, mesin kapitalisme bukan persaingan harga biasa, melainkan <strong>inovasi</strong> yang dibawa <strong>wirausahawan</strong>. Mobil menggusur kereta kuda, telepon pintar menggusur kamera saku, layanan digital menggusur toko fisik. Kehancuran sebagian lama adalah harga dari kemajuan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Penghancuran kreatif",
        html: "Schumpeter menyebutnya 'badai abadi penghancuran kreatif'. Pertumbuhan jangka panjang justru lahir dari proses yang merontokkan perusahaan dan pekerjaan lama untuk digantikan yang lebih produktif.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Wirausahawan sebagai penggerak",
        html: "Inti gagasan Schumpeter adalah <strong>wirausahawan</strong> yang berani memperkenalkan produk, metode, atau pasar baru. Merekalah yang memicu gelombang inovasi dan, dengan itu, sekaligus menghancurkan keseimbangan lama.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser tingkat investasi dan produktivitas, lalu amati bagaimana inovasi mendorong pertumbuhan ekonomi dari periode ke periode.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Joseph_Schumpeter_1945_Bachrach_portrait.png?width=400",
        alt: "Potret Joseph Schumpeter, ekonom penggagas penghancuran kreatif",
        caption: "Joseph Schumpeter (1883-1950), penggagas konsep penghancuran kreatif.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "video",
        comp: "CreativeDestructionVideo",
        title: "Penghancuran Kreatif",
        caption: "Inovasi terus menggantikan cara lama, menghancurkan sekaligus menciptakan.",
      },
      {
        type: "widget",
        widget: "SimulatorPertumbuhanEkonomi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Umur Rata-rata Perusahaan Besar Makin Pendek (ilustrasi)",
        unit: "perkiraan umur rata-rata (tahun) di indeks saham besar",
        source: "ilustrasi edukatif konsep penghancuran kreatif",
        note: "Perusahaan makin cepat tergantikan, tanda penghancuran kreatif yang makin kencang.",
        data: [
          { label: "1960-an", value: 60 },
          { label: "1980-an", value: 35 },
          { label: "2000-an", value: 22 },
          { label: "2020-an", value: 18 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Dari kamera film ke kamera ponsel",
        html: "Selama puluhan tahun, industri kamera dan film fotografi sangat besar dan menguntungkan. Ketika kamera digital lalu kamera ponsel pintar muncul, permintaan film anjlok dan banyak perusahaan kamera klasik runtuh. Namun pada saat sama, lahir industri baru: aplikasi foto, media sosial, dan jutaan pekerjaan konten. Inilah penghancuran kreatif dalam praktik, kehancuran lama membuka jalan bagi yang baru.",
      },
      {
        type: "case",
        title: "Sejarah: Schumpeter dan bukunya tahun 1942",
        html: "Joseph Schumpeter, ekonom kelahiran Austria yang kemudian mengajar di Harvard, menulis <strong>Capitalism, Socialism and Democracy</strong> pada <strong>1942</strong>. Di sanalah istilah 'penghancuran kreatif' dipopulerkan. Gagasan ini muncul justru di tengah bayang-bayang Depresi Besar dan Perang Dunia II, ketika banyak orang meragukan masa depan kapitalisme. Schumpeter menjawab bahwa gejolak dan kehancuran adalah ciri hakiki, bukan kegagalan, dari sistem itu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah gelombang inovasi menciptakan 500 pekerjaan baru sambil menghapus 300 pekerjaan lama. Berapa pekerjaan bersih yang tercipta?",
        answer: 200,
        tolerance: 0,
        suffix: "pekerjaan",
        solution:
          "500 - 300 = <strong>200 pekerjaan</strong> bersih. Penghancuran kreatif menghapus pekerjaan lama, tetapi bila inovasi cukup kuat, menciptakan lebih banyak lagi yang baru.",
        hint: "Kurangkan pekerjaan yang hilang dari pekerjaan yang tercipta.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan inovasi baru dengan apa yang digusurnya.",
        pairs: [
          { left: "Kamera ponsel", right: "Kamera film dan studio cuci cetak" },
          { left: "Mobil", right: "Kereta kuda dan kusir" },
          { left: "Layanan musik digital", right: "Toko kaset dan CD fisik" },
          { left: "Toko daring", right: "Sebagian toko ritel fisik" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Penghancuran kreatif adalah gagasan Joseph Schumpeter dalam bukunya tahun 1942.",
          "Inovasi baru terus menggantikan cara lama, menghancurkan sekaligus menciptakan.",
          "Wirausahawan inovatif adalah penggerak utama kemajuan kapitalisme.",
          "Kehancuran industri usang adalah harga dari pertumbuhan jangka panjang.",
          "Contohnya kamera ponsel menggusur film, tetapi melahirkan industri baru yang lebih besar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Siapa penggagas konsep penghancuran kreatif?",
            options: ["Joseph Schumpeter", "Adam Smith", "Karl Marx", "John Maynard Keynes"],
            answer: 0,
            explain: "Schumpeter mempopulerkan istilah ini dalam bukunya tahun 1942.",
          },
          {
            q: "Apa inti penghancuran kreatif?",
            options: [
              "Inovasi baru menggantikan cara lama secara terus-menerus",
              "Pemerintah menutup semua pabrik",
              "Harga selalu naik",
              "Persaingan dihilangkan",
            ],
            answer: 0,
            explain: "Inovasi merontokkan industri usang sambil melahirkan yang baru.",
          },
          {
            q: "Menurut Schumpeter, siapa penggerak utama inovasi?",
            options: ["Wirausahawan", "Bank sentral", "Serikat buruh", "Konsumen pasif"],
            answer: 0,
            explain: "Wirausahawan memperkenalkan produk, metode, dan pasar baru.",
          },
          {
            q: "Kamera ponsel menggusur kamera film adalah contoh dari?",
            options: [
              "Penghancuran kreatif",
              "Gelembung aset",
              "Inflasi",
              "Resesi global",
            ],
            answer: 0,
            explain: "Industri lama runtuh sementara industri baru tumbuh menggantikannya.",
          },
          {
            q: "Inovasi menciptakan 500 dan menghapus 300 pekerjaan, berapa bersihnya?",
            options: ["200 pekerjaan", "800 pekerjaan", "300 pekerjaan", "500 pekerjaan"],
            answer: 0,
            explain: "500 dikurangi 300 sama dengan 200 pekerjaan bersih.",
          },
        ],
      },
    ],
  },
];
