import type { Lesson } from "../../../types";

export const level6: Lesson[] = [
  // ============================================================
  {
    id: "proof-of-work",
    levelId: "konsensus",
    order: 1,
    title: "Proof of Work",
    summary:
      "Bagaimana Bitcoin menyepakati siapa yang berhak menambahkan blok lewat lomba menebak hash, dan mengapa keamanannya dibayar dengan energi.",
    durationMin: 14,
    tags: ["konsensus", "proof-of-work", "bitcoin", "penambangan"],
    blocks: [
      {
        type: "paragraph",
        html: "Tanpa bank pusat, siapa yang berhak memutuskan blok berikutnya pada blockchain? Bitcoin menjawabnya dengan <strong>Proof of Work (PoW)</strong>: para <strong>penambang</strong> berlomba memecahkan teka-teki matematika, dan yang pertama berhasil berhak menambahkan blok serta menerima hadiah.",
      },
      {
        type: "paragraph",
        html: "Teka-tekinya adalah menebak sebuah angka (disebut <strong>nonce</strong>) sehingga <strong>hash</strong> blok jatuh di bawah target tertentu. Tidak ada jalan pintas; satu-satunya cara adalah mencoba miliaran tebakan per detik. Kecepatan menebak ini disebut <strong>hashrate</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Keamanan dibeli dengan biaya",
        html: "Karena memecahkan teka-teki butuh listrik nyata, mengubah riwayat berarti mengulang seluruh kerja itu. Untuk membalikkan transaksi, penyerang harus menguasai lebih dari setengah hashrate jaringan, sebuah <strong>serangan 51%</strong> yang sangat mahal.",
      },
      {
        type: "video",
        comp: "KonsensusVideo",
        title: "Proof of Work vs Proof of Stake",
        caption: "Dua cara jaringan menyepakati blok: berlomba dengan energi, atau mempertaruhkan stake.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Harga keamanan: boros energi",
        html: "Karena jutaan mesin menebak terus menerus, jaringan PoW seperti Bitcoin mengonsumsi listrik dalam skala setara sebuah negara kecil. Inilah kritik terbesar terhadap PoW dan alasan munculnya alternatif yang lebih hemat.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Peluang Menang Blok Sesuai Pangsa Hashrate",
        unit: "% peluang menang per blok",
        source: "ilustrasi: peluang menang sebanding dengan pangsa hashrate",
        note: "Pada PoW, peluang menambang blok kira-kira sama dengan pangsa hashrate yang dimiliki penambang.",
        data: [
          { label: "10% hashrate", value: 10 },
          { label: "25% hashrate", value: 25 },
          { label: "50% hashrate", value: 50 },
          { label: "75% hashrate", value: 75 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengejar peluang dengan hashrate",
        html: "Sebuah jaringan PoW punya total hashrate 100 TH/s. Penambang Andi menyumbang 20 TH/s. Karena peluang menambang blok sebanding dengan pangsa hashrate, peluang Andi memenangkan blok adalah 20 dibagi 100 = <strong>20%</strong>. Jika ia menggandakan mesinnya menjadi 40 TH/s sementara penambang lain tidak berubah, total menjadi 120 TH/s dan peluangnya naik menjadi sekitar 33%. Menambah daya komputasi memang menaikkan peluang, tetapi tagihan listriknya ikut naik.",
      },
      {
        type: "calcExercise",
        prompt:
          "Total hashrate jaringan 100 TH/s. Seorang penambang punya 20 TH/s. Berapa persen peluangnya memenangkan satu blok?",
        answer: 20,
        tolerance: 0,
        suffix: "%",
        solution:
          "Peluang = pangsa hashrate = 20 dibagi 100 = <strong>20%</strong>. Pada PoW, peluang menang sebanding dengan porsi daya komputasi yang dimiliki.",
        hint: "Bagi hashrate milik penambang dengan total hashrate jaringan, lalu jadikan persen.",
      },
      {
        type: "classifyExercise",
        prompt: "Mana kekuatan dan mana kelemahan Proof of Work?",
        buckets: ["Kekuatan PoW", "Kelemahan PoW"],
        items: [
          { text: "Keamanan tinggi karena menyerang butuh biaya energi besar", bucket: "Kekuatan PoW" },
          { text: "Konsumsi listrik sangat besar", bucket: "Kelemahan PoW" },
          { text: "Sudah terbukti aman bertahun tahun di Bitcoin", bucket: "Kekuatan PoW" },
          { text: "Rentan terhadap serangan 51% bila satu pihak menguasai mayoritas hashrate", bucket: "Kelemahan PoW" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Penambangan Bitcoin dari CPU ke ASIC",
        html: "Pada 2009, Bitcoin bisa ditambang dengan <strong>prosesor (CPU)</strong> komputer rumah biasa. Seiring naiknya nilai, penambang beralih ke kartu grafis (GPU) sekitar 2010, lalu ke perangkat khusus <strong>ASIC</strong> mulai sekitar 2013 yang ribuan kali lebih cepat. Akibatnya hashrate jaringan melonjak dan menambang sendirian di rumah jadi nyaris mustahil. Ini menunjukkan inti PoW: makin tinggi taruhannya, makin besar energi dan perangkat yang dikerahkan untuk menang.",
      },
      {
        type: "takeaways",
        items: [
          "Proof of Work memilih penambah blok lewat lomba menebak hash di bawah target.",
          "Hashrate adalah kecepatan menebak; makin besar hashrate, makin besar peluang menang blok.",
          "Keamanan PoW berasal dari biaya energi nyata yang membuat serangan sangat mahal.",
          "Serangan 51% terjadi bila satu pihak menguasai lebih dari setengah hashrate.",
          "Kelemahan utama PoW adalah konsumsi energi yang sangat besar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang dilakukan penambang pada Proof of Work?",
            options: [
              "Memilih validator lewat voting",
              "Berlomba menebak hash di bawah target tertentu",
              "Mempertaruhkan koin sebagai jaminan",
              "Menyetujui blok berdasarkan identitas",
            ],
            answer: 1,
            explain: "Penambang mencoba miliaran tebakan nonce sampai hash blok jatuh di bawah target.",
          },
          {
            q: "Apa itu hashrate?",
            options: [
              "Harga satu blok",
              "Kecepatan jaringan menebak hash",
              "Jumlah koin beredar",
              "Biaya transaksi",
            ],
            answer: 1,
            explain: "Hashrate mengukur berapa banyak tebakan hash yang bisa dicoba per detik.",
          },
          {
            q: "Dari mana keamanan PoW berasal?",
            options: [
              "Dari izin pemerintah",
              "Dari biaya energi nyata yang membuat serangan mahal",
              "Dari jumlah pengguna",
              "Dari kecepatan internet",
            ],
            answer: 1,
            explain: "Mengubah riwayat berarti mengulang seluruh kerja energi, sehingga sangat mahal.",
          },
          {
            q: "Apa itu serangan 51%?",
            options: [
              "Menguasai 51% koin",
              "Menguasai lebih dari setengah hashrate jaringan",
              "Membayar biaya 51%",
              "Memiliki 51 penambang",
            ],
            answer: 1,
            explain: "Dengan mayoritas hashrate, penyerang bisa menulis ulang blok terbaru dan membalik transaksi.",
          },
          {
            q: "Apa kelemahan paling sering dikritik dari PoW?",
            options: [
              "Terlalu lambat membuat dompet",
              "Konsumsi energi yang sangat besar",
              "Tidak bisa dipakai untuk transaksi",
              "Pasokan koin tak terbatas",
            ],
            answer: 1,
            explain: "Jutaan mesin menebak terus menerus sehingga konsumsi listriknya sangat besar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "proof-of-stake",
    levelId: "konsensus",
    order: 2,
    title: "Proof of Stake & Delegated PoS",
    summary:
      "Alih alih membakar energi, validator dipilih sesuai jumlah koin yang dipertaruhkan. Kenali PoS, DPoS, dan pelajaran dari The Merge Ethereum.",
    durationMin: 14,
    tags: ["konsensus", "proof-of-stake", "ethereum", "dpos"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Proof of Stake (PoS)</strong> mengganti lomba energi dengan jaminan ekonomi. Untuk menjadi <strong>validator</strong>, seseorang mempertaruhkan (<em>stake</em>) sejumlah koin sebagai jaminan. Jaringan lalu memilih validator untuk mengusulkan blok dengan peluang yang sebanding dengan besar stake mereka.",
      },
      {
        type: "paragraph",
        html: "Karena tidak perlu menebak hash sebanyak banyaknya, PoS jauh lebih hemat energi. Keamanannya bukan dari biaya listrik, melainkan dari risiko kehilangan stake bila validator berbuat curang.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Delegated Proof of Stake (DPoS)",
        html: "Pada <strong>DPoS</strong>, pemegang token tidak memvalidasi sendiri, tetapi <strong>memilih</strong> sejumlah kecil <strong>delegasi</strong> tepercaya untuk membuat blok atas nama mereka. Jaringan seperti EOS dan Tron memakai pola ini agar lebih cepat, dengan trade-off lebih sedikit pihak yang memvalidasi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Bandingkan konsumsi energi dan peluang menang antara PoW (berdasarkan hashrate) dan PoS (berdasarkan stake).",
      },
      { type: "widget", widget: "SimulatorPoWvsPoS" },
      {
        type: "chart",
        variant: "bar",
        title: "Konsumsi Energi Ethereum Sebelum dan Sesudah The Merge",
        unit: "% dari konsumsi awal",
        source: "Ethereum Foundation: penurunan sekitar 99,9% setelah The Merge",
        note: "Setelah pindah ke PoS lewat The Merge, konsumsi energi Ethereum turun sekitar 99,9%.",
        data: [
          { label: "Sebelum (PoW)", value: 100, color: "#f7931a" },
          { label: "Sesudah (PoS)", value: 0.1, color: "#627eea" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: The Merge Ethereum, September 2022",
        html: "Pada <strong>15 September 2022</strong>, Ethereum menjalankan <strong>The Merge</strong>, peralihan dari Proof of Work ke Proof of Stake. Ini adalah salah satu upgrade terbesar dalam sejarah kripto karena dilakukan pada jaringan bernilai ratusan miliar dolar AS tanpa menghentikan layanan. Hasilnya, konsumsi energi Ethereum turun <strong>sekitar 99,9%</strong>. Peristiwa ini membuktikan bahwa konsensus hemat energi bisa menggantikan PoW pada skala besar.",
      },
      {
        type: "calcExercise",
        prompt:
          "Total stake jaringan PoS adalah 1.000.000 koin. Seorang validator mempertaruhkan 50.000 koin. Berapa persen peluangnya terpilih mengusulkan blok?",
        answer: 5,
        tolerance: 0,
        suffix: "%",
        solution:
          "Peluang = stake validator dibagi total stake = 50.000 dibagi 1.000.000 = 0,05 = <strong>5%</strong>. Pada PoS, peluang terpilih sebanding dengan besar stake.",
        hint: "Bagi stake validator dengan total stake jaringan, lalu jadikan persen.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan ciri berikut ke Proof of Work atau Proof of Stake.",
        buckets: ["Proof of Work", "Proof of Stake"],
        items: [
          { text: "Menebak hash dengan daya komputasi besar", bucket: "Proof of Work" },
          { text: "Validator dipilih sesuai besar koin yang dipertaruhkan", bucket: "Proof of Stake" },
          { text: "Konsumsi energi sangat besar", bucket: "Proof of Work" },
          { text: "Dipakai Ethereum setelah The Merge 2022", bucket: "Proof of Stake" },
          { text: "Dipakai Bitcoin sejak awal", bucket: "Proof of Work" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Proof of Stake memilih validator sesuai besar koin yang dipertaruhkan, bukan daya komputasi.",
          "PoS jauh lebih hemat energi karena tidak ada lomba menebak hash.",
          "Keamanan PoS berasal dari risiko kehilangan stake bila validator curang.",
          "DPoS memakai voting untuk memilih sedikit delegasi, seperti pada EOS dan Tron.",
          "The Merge Ethereum (September 2022) memangkas konsumsi energi sekitar 99,9%.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bagaimana validator dipilih pada Proof of Stake?",
            options: [
              "Berdasarkan kecepatan menebak hash",
              "Sebanding dengan jumlah koin yang dipertaruhkan",
              "Secara acak murni tanpa syarat",
              "Berdasarkan urutan pendaftaran",
            ],
            answer: 1,
            explain: "Peluang terpilih sebanding dengan besar stake yang dipertaruhkan validator.",
          },
          {
            q: "Apa keunggulan utama PoS dibanding PoW?",
            options: [
              "Lebih boros energi",
              "Jauh lebih hemat energi",
              "Tidak butuh koin sama sekali",
              "Tidak bisa diserang",
            ],
            answer: 1,
            explain: "PoS tidak memerlukan lomba menebak hash sehingga konsumsi energinya jauh lebih kecil.",
          },
          {
            q: "Apa ciri Delegated Proof of Stake (DPoS)?",
            options: [
              "Semua orang menambang dengan ASIC",
              "Pemegang token memilih sedikit delegasi untuk membuat blok",
              "Tidak ada validator sama sekali",
              "Blok dibuat oleh bank",
            ],
            answer: 1,
            explain: "Pada DPoS, pemegang token memilih sejumlah kecil delegasi tepercaya lewat voting.",
          },
          {
            q: "Apa itu The Merge pada Ethereum?",
            options: [
              "Peluncuran Bitcoin",
              "Peralihan Ethereum dari PoW ke PoS pada September 2022",
              "Penggabungan dua bursa kripto",
              "Penghapusan biaya transaksi",
            ],
            answer: 1,
            explain: "The Merge pada 15 September 2022 mengubah Ethereum dari Proof of Work ke Proof of Stake.",
          },
          {
            q: "Kira kira berapa penurunan konsumsi energi Ethereum setelah The Merge?",
            options: ["Sekitar 10%", "Sekitar 50%", "Sekitar 99,9%", "Tidak berubah"],
            answer: 2,
            explain: "Peralihan ke PoS memangkas konsumsi energi Ethereum sekitar 99,9%.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "poa-bft",
    levelId: "konsensus",
    order: 3,
    title: "Proof of Authority & Byzantine Fault Tolerance",
    summary:
      "Konsensus untuk jaringan tepercaya: validator beridentitas pada PoA, dan masalah klasik Byzantine Generals yang melahirkan ambang toleransi sepertiga.",
    durationMin: 13,
    tags: ["konsensus", "proof-of-authority", "bft", "byzantine"],
    blocks: [
      {
        type: "paragraph",
        html: "Tidak semua jaringan butuh ribuan penambang anonim. Pada <strong>Proof of Authority (PoA)</strong>, blok dibuat oleh sejumlah <strong>validator beridentitas yang tepercaya</strong>. Reputasi merekalah yang dipertaruhkan. Pola ini cepat dan hemat, cocok untuk <strong>jaringan privat</strong> atau konsorsium perusahaan.",
      },
      {
        type: "paragraph",
        html: "Tetapi bagaimana jika sebagian validator berkhianat? Inilah masalah <strong>Byzantine Generals</strong>: beberapa jenderal harus menyepakati satu rencana lewat pesan, padahal sebagian bisa berbohong. Solusinya dikenal sebagai <strong>Byzantine Fault Tolerance (BFT)</strong>.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Ambang ajaib: kurang dari sepertiga",
        html: "Sistem BFT tetap bisa mencapai kesepakatan yang benar selama jumlah node jahat <strong>kurang dari sepertiga</strong> total node. Begitu sepertiga atau lebih berkhianat, jaringan tidak bisa lagi dijamin sepakat dengan benar.",
      },
      {
        type: "video",
        comp: "KonsensusVideo",
        title: "Cara jaringan menyepakati blok",
        caption: "Gambaran bagaimana node menyepakati satu kebenaran meski sebagian bisa berbuat curang.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Batas Node Jahat yang Ditoleransi BFT",
        unit: "maksimal node jahat",
        source: "ilustrasi: ambang BFT kurang dari sepertiga total node",
        note: "Makin besar jaringan, makin banyak pengkhianat yang bisa ditoleransi, selalu di bawah sepertiga.",
        data: [
          { label: "10 node", value: 3 },
          { label: "21 node", value: 6 },
          { label: "100 node", value: 33 },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Konsorsium 100 validator",
        html: "Sebuah konsorsium bank menjalankan jaringan BFT dengan <strong>100 validator</strong>. Ambang BFT mensyaratkan jumlah node jahat kurang dari sepertiga, yaitu kurang dari 33,33. Maka jaringan tetap aman selama paling banyak <strong>33 validator</strong> berbuat curang, karena 33 masih kurang dari 33,33. Jika 34 validator berkhianat, ambang terlampaui dan kesepakatan yang benar tidak lagi dijamin.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah jaringan BFT punya 100 validator. Berapa node jahat maksimal yang masih bisa ditoleransi (jumlahnya harus kurang dari sepertiga)?",
        answer: 33,
        tolerance: 0,
        suffix: "node",
        solution:
          "Sepertiga dari 100 adalah 33,33. Jumlah node jahat harus kurang dari itu, jadi maksimal <strong>33 node</strong> karena 33 masih lebih kecil dari 33,33.",
        hint: "Hitung sepertiga dari 100, lalu ambil bilangan bulat terbesar yang masih lebih kecil darinya.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan mekanisme konsensus dengan ciri khasnya.",
        pairs: [
          { left: "Proof of Authority", right: "Validator beridentitas dan tepercaya" },
          { left: "Byzantine Fault Tolerance", right: "Tahan selama node jahat kurang dari sepertiga" },
          { left: "Proof of Work", right: "Lomba menebak hash dengan energi besar" },
          { left: "Proof of Stake", right: "Validator dipilih sesuai besar stake" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Masalah Byzantine Generals, 1982",
        html: "Pada <strong>1982</strong>, Leslie Lamport bersama Robert Shostak dan Marshall Pease menerbitkan makalah <em>The Byzantine Generals Problem</em>. Mereka membuktikan secara matematis bahwa kesepakatan yang andal hanya mungkin bila pengkhianat kurang dari sepertiga peserta. Puluhan tahun kemudian, gagasan ini menjadi fondasi banyak blockchain modern yang memakai konsensus bergaya BFT untuk menyepakati blok meski sebagian node berbuat curang.",
      },
      {
        type: "takeaways",
        items: [
          "Proof of Authority memakai validator beridentitas tepercaya, cocok untuk jaringan privat.",
          "Masalah Byzantine Generals adalah soal menyepakati satu rencana meski sebagian peserta berbohong.",
          "BFT menjamin kesepakatan benar selama node jahat kurang dari sepertiga total.",
          "Pada 100 validator, jaringan BFT tahan sampai 33 node jahat.",
          "Makalah Lamport 1982 menjadi dasar konsensus bergaya BFT pada blockchain modern.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa ciri utama Proof of Authority?",
            options: [
              "Penambang anonim berlomba hash",
              "Validator beridentitas yang tepercaya membuat blok",
              "Tidak ada validator sama sekali",
              "Pasokan koin tak terbatas",
            ],
            answer: 1,
            explain: "Pada PoA, blok dibuat sejumlah validator tepercaya yang mempertaruhkan reputasinya.",
          },
          {
            q: "Apa inti masalah Byzantine Generals?",
            options: [
              "Menambah pasokan uang",
              "Menyepakati satu rencana meski sebagian peserta bisa berbohong",
              "Menebak hash tercepat",
              "Memilih harga koin",
            ],
            answer: 1,
            explain: "Masalahnya adalah mencapai kesepakatan andal padahal sebagian peserta bisa berkhianat.",
          },
          {
            q: "Berapa ambang toleransi node jahat pada sistem BFT?",
            options: [
              "Kurang dari setengah",
              "Kurang dari sepertiga",
              "Kurang dari dua pertiga",
              "Berapa pun jumlahnya",
            ],
            answer: 1,
            explain: "BFT menjamin kesepakatan benar selama node jahat kurang dari sepertiga total.",
          },
          {
            q: "Pada jaringan BFT dengan 100 validator, berapa node jahat maksimal yang ditoleransi?",
            options: ["50 node", "33 node", "67 node", "100 node"],
            answer: 1,
            explain: "Sepertiga dari 100 adalah 33,33; jumlah jahat harus di bawahnya, jadi maksimal 33 node.",
          },
          {
            q: "Untuk apa Proof of Authority paling cocok dipakai?",
            options: [
              "Jaringan publik besar yang anonim",
              "Jaringan privat atau konsorsium dengan validator tepercaya",
              "Menambang Bitcoin",
              "Menghapus semua validator",
            ],
            answer: 1,
            explain: "PoA cepat dan hemat, cocok untuk jaringan privat dengan validator beridentitas.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "validator-slashing",
    levelId: "konsensus",
    order: 4,
    title: "Validator & Slashing",
    summary:
      "Peran validator dalam mengusulkan dan memvalidasi blok, mengapa mereka mempertaruhkan stake, dan bagaimana slashing menghukum perilaku jahat.",
    durationMin: 13,
    tags: ["konsensus", "validator", "slashing", "proof-of-stake"],
    blocks: [
      {
        type: "paragraph",
        html: "Pada jaringan Proof of Stake, <strong>validator</strong> adalah penjaga buku besar. Tugasnya dua: <strong>mengusulkan blok</strong> baru saat gilirannya, dan <strong>memvalidasi</strong> (membuktikan benar atau salah) blok yang diusulkan validator lain. Sebagai jaminan, mereka mengunci sejumlah koin sebagai <strong>stake</strong>.",
      },
      {
        type: "paragraph",
        html: "Stake bukan sekadar tiket masuk; ia adalah uang jaminan yang bisa hangus. Mekanisme yang memotong sebagian atau seluruh stake ketika validator berbuat jahat disebut <strong>slashing</strong>. Inilah yang membuat berbuat curang jadi tidak menguntungkan.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Dua pelanggaran utama yang dihukum slashing",
        html: "<strong>Double signing</strong> (menandatangani dua blok berbeda pada tinggi yang sama, seperti berbohong) dihukum berat. <strong>Sering offline</strong> sehingga gagal menjalankan tugas dihukum lebih ringan, biasa disebut penalti tidak aktif.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Lihat bagaimana besar stake mengubah peluang menang dan bandingkan dengan model energi PoW.",
      },
      { type: "widget", widget: "SimulatorPoWvsPoS" },
      {
        type: "chart",
        variant: "bar",
        title: "Berat Pemotongan Stake Sesuai Jenis Pelanggaran",
        unit: "% stake terpotong (ilustrasi)",
        source: "ilustrasi edukatif: pelanggaran sengaja dihukum jauh lebih berat",
        note: "Pelanggaran yang disengaja seperti double signing dihukum jauh lebih berat daripada sekadar offline.",
        data: [
          { label: "Offline sesekali", value: 1, color: "#f59e0b" },
          { label: "Sering offline", value: 5, color: "#f97316" },
          { label: "Double signing", value: 100, color: "#ef4444" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Stake yang hangus karena curang",
        html: "Seorang validator mengunci <strong>32 koin</strong> sebagai stake. Karena mencoba <strong>double signing</strong> untuk membantu serangan, jaringan menerapkan slashing yang memotong <strong>25%</strong> stake-nya. Jumlah yang hangus adalah 25% dari 32 = <strong>8 koin</strong>, menyisakan 24 koin sebelum ia akhirnya dikeluarkan dari kumpulan validator. Kerugian nyata inilah yang membuat menyerang jaringan PoS menjadi mahal dan tidak masuk akal secara ekonomi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Seorang validator mempertaruhkan 32 koin. Ia terkena slashing sebesar 25% karena double signing. Berapa koin yang hangus?",
        answer: 8,
        tolerance: 0,
        suffix: "koin",
        solution:
          "25% dari 32 = 0,25 x 32 = <strong>8 koin</strong> hangus. Slashing membuat kerugian curang lebih besar daripada keuntungannya.",
        hint: "Kalikan stake dengan persentase pemotongan dalam bentuk desimal.",
      },
      {
        type: "matchExercise",
        prompt: "Cocokkan perilaku validator dengan konsekuensinya.",
        pairs: [
          { left: "Double signing dua blok di tinggi sama", right: "Slashing berat, dikeluarkan dari validator" },
          { left: "Sering offline tidak menjalankan tugas", right: "Penalti tidak aktif yang ringan" },
          { left: "Mengusulkan dan memvalidasi blok dengan benar", right: "Menerima hadiah staking" },
          { left: "Mengunci koin sebagai jaminan", right: "Berhak menjadi validator" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Slashing pertama di Ethereum, 2023",
        html: "Setelah Ethereum beralih ke Proof of Stake lewat The Merge 2022, mekanisme <strong>slashing</strong> mulai bekerja sungguhan. Sepanjang masa awal PoS, sejumlah validator terkena slashing, sebagian besar bukan karena niat jahat melainkan kesalahan konfigurasi yang menyebabkan <strong>double signing</strong> tidak sengaja, misalnya menjalankan satu kunci validator di dua mesin sekaligus. Kasus kasus ini menjadi pengingat penting: slashing menghukum perbuatannya, bukan niatnya, sehingga validator wajib sangat berhati hati.",
      },
      {
        type: "takeaways",
        items: [
          "Validator bertugas mengusulkan blok dan memvalidasi blok validator lain.",
          "Validator mengunci stake sebagai jaminan untuk berperilaku jujur.",
          "Slashing memotong sebagian atau seluruh stake bila validator berbuat jahat.",
          "Double signing dihukum berat, sedangkan sering offline dihukum lebih ringan.",
          "Ancaman kehilangan stake membuat menyerang jaringan PoS menjadi tidak menguntungkan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa dua tugas utama seorang validator pada PoS?",
            options: [
              "Menambang dan menjual koin",
              "Mengusulkan blok dan memvalidasi blok validator lain",
              "Mencetak uang dan membekukan saldo",
              "Mengatur harga dan biaya",
            ],
            answer: 1,
            explain: "Validator mengusulkan blok saat gilirannya dan memvalidasi blok yang diusulkan validator lain.",
          },
          {
            q: "Apa itu slashing?",
            options: [
              "Menambah hadiah validator",
              "Memotong sebagian atau seluruh stake validator yang berbuat jahat",
              "Menggandakan stake",
              "Menghapus biaya transaksi",
            ],
            answer: 1,
            explain: "Slashing menghukum validator nakal dengan memotong stake yang ia pertaruhkan.",
          },
          {
            q: "Pelanggaran mana yang dihukum slashing paling berat?",
            options: [
              "Offline sesekali",
              "Double signing dua blok pada tinggi yang sama",
              "Menjalankan tugas dengan benar",
              "Mengunci stake",
            ],
            answer: 1,
            explain: "Double signing setara berbohong pada jaringan sehingga dihukum jauh lebih berat.",
          },
          {
            q: "Seorang validator dengan stake 32 koin kena slashing 25%. Berapa koin hangus?",
            options: ["4 koin", "8 koin", "16 koin", "32 koin"],
            answer: 1,
            explain: "25% dari 32 koin adalah 8 koin yang hangus.",
          },
          {
            q: "Mengapa slashing membuat serangan PoS tidak masuk akal secara ekonomi?",
            options: [
              "Karena validator dapat hadiah lebih besar",
              "Karena curang membuat penyerang kehilangan stake-nya sendiri",
              "Karena biaya transaksi gratis",
              "Karena pasokan koin bertambah",
            ],
            answer: 1,
            explain: "Risiko kehilangan stake membuat kerugian curang lebih besar daripada keuntungannya.",
          },
        ],
      },
    ],
  },
];
