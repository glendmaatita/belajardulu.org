import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "apa-itu-demokrasi",
    levelId: "fondasi",
    order: 1,
    title: "Apa Itu Demokrasi",
    summary:
      "Pemerintahan dari, oleh, dan untuk rakyat. Kenali arti demokrasi, lima prinsip intinya, dan mengapa ia lebih dari sekadar pemilu.",
    durationMin: 14,
    tags: ["fondasi", "definisi", "kedaulatan rakyat"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Demokrasi</strong> berasal dari kata Yunani <em>demos</em> (rakyat) dan <em>kratos</em> (kekuasaan): <strong>kekuasaan di tangan rakyat</strong>. Dalam demokrasi, pemerintah memperoleh wewenang dari persetujuan yang diperintah, dan rakyat bisa mengganti pemimpin secara damai lewat pemilihan.",
      },
      {
        type: "paragraph",
        html: "Namun demokrasi bukan sekadar memungut suara. Tanpa kebebasan berpendapat, pers yang bebas, dan hukum yang ditegakkan adil, pemilu bisa menjadi sekadar formalitas. Demokrasi sejati adalah satu paket prinsip, bukan satu kegiatan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Lima prinsip inti",
        html: "<strong>Kedaulatan rakyat</strong>, <strong>kesetaraan</strong> (satu orang satu suara), <strong>partisipasi</strong>, <strong>kebebasan</strong> (berpendapat dan berkumpul), dan <strong>negara hukum</strong> (aturan berlaku untuk semua, termasuk penguasa).",
      },
      {
        type: "video",
        comp: "DemokrasiVideo",
        title: "Lima Prinsip Demokrasi",
        caption: "Pemerintahan dari, oleh, dan untuk rakyat, jauh lebih dari sekadar pemilu.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ballot_dropped_into_ballot_box_2024_Swedish_EU_election_at_St%C3%A5ngen%C3%A4sskolan%2C_Brastad.jpg?width=400",
        alt: "Tangan memasukkan surat suara ke dalam kotak suara saat pemilu",
        caption: "Pemungutan suara: cara damai rakyat menentukan dan mengganti pemimpinnya.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Demokrasi diukur lebih dari ada-tidaknya pemilu. Nilai lima dimensi dan lihat kategori rezim yang dihasilkan.",
      },
      { type: "widget", widget: "SimulatorIndeksDemokrasi" },
      {
        type: "chart",
        variant: "donut",
        title: "Bentuk Pemerintahan di Dunia (ilustrasi)",
        unit: "porsi negara (ilustrasi)",
        source: "ilustrasi edukatif berdasarkan pemeringkatan demokrasi yang umum",
        note: "Hanya sebagian negara tergolong demokrasi penuh; banyak yang demokrasi cacat atau hibrida.",
        data: [
          { label: "Demokrasi penuh", value: 8, color: "#34d399" },
          { label: "Demokrasi cacat", value: 32, color: "#60a5fa" },
          { label: "Rezim hibrida", value: 18, color: "#fbbf24" },
          { label: "Rezim otoriter", value: 42, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pemilu tanpa kebebasan",
        html: "Beberapa negara rutin menggelar <strong>pemilu</strong>, tetapi oposisi dibungkam, pers dikendalikan, dan hasilnya sudah bisa ditebak. Pemilu seperti ini hanya kulit demokrasi tanpa isinya. Sebaliknya, demokrasi sehat menjamin warga bebas mengkritik penguasa, memilih di antara pilihan nyata, dan yakin suaranya dihitung jujur. Pelajarannya: keberadaan kotak suara saja tidak cukup; yang menentukan adalah kebebasan dan kejujuran di sekitarnya.",
      },
      {
        type: "case",
        title: "Sejarah: Lincoln dan 'pemerintahan dari rakyat'",
        html: "Pada <strong>1863</strong>, dalam pidato Gettysburg, Presiden Amerika <strong>Abraham Lincoln</strong> merumuskan demokrasi dengan kalimat termasyhur: pemerintahan <strong>dari rakyat, oleh rakyat, untuk rakyat</strong>. Rumusan singkat ini menangkap inti demokrasi: kekuasaan bukan milik segelintir bangsawan atau raja, melainkan bersumber dari dan ditujukan bagi seluruh rakyat. Gagasan ini menjadi rujukan demokrasi modern di seluruh dunia.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari 200 kursi parlemen, sebuah partai meraih 110 kursi. Apakah ini mayoritas, dan berapa persen kursinya?",
        answer: 55,
        tolerance: 0,
        suffix: "%",
        solution:
          "110 / 200 x 100% = <strong>55%</strong>, yaitu lebih dari setengah, sehingga merupakan mayoritas. Dalam demokrasi, mayoritas memerintah tetapi tetap wajib menghormati hak minoritas.",
        hint: "Bagi kursi partai dengan total kursi, lalu kali 100%.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap ciri: DEMOKRASI atau OTOKRASI.",
        buckets: ["Demokrasi", "Otokrasi"],
        items: [
          { text: "Pemimpin bisa diganti damai lewat pemilu", bucket: "Demokrasi" },
          { text: "Kekuasaan dipegang satu orang tanpa kontrol", bucket: "Otokrasi" },
          { text: "Pers bebas mengkritik penguasa", bucket: "Demokrasi" },
          { text: "Oposisi dilarang dan dibungkam", bucket: "Otokrasi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Demokrasi berarti kekuasaan di tangan rakyat (demos + kratos).",
          "Ia lebih dari pemilu: butuh kebebasan, kesetaraan, partisipasi, dan negara hukum.",
          "Pemilu tanpa kebebasan dan kejujuran hanyalah kulit demokrasi.",
          "Lincoln merumuskannya sebagai pemerintahan dari, oleh, dan untuk rakyat.",
          "Mayoritas memerintah, tetapi wajib menghormati hak minoritas.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa arti harfiah demokrasi?",
            options: ["Kekuasaan raja", "Kekuasaan rakyat", "Kekuasaan tentara", "Kekuasaan agama"],
            answer: 1,
            explain: "Dari demos (rakyat) dan kratos (kekuasaan): kekuasaan di tangan rakyat.",
          },
          {
            q: "Mengapa demokrasi lebih dari sekadar pemilu?",
            options: [
              "Karena pemilu mahal",
              "Karena butuh kebebasan, kesetaraan, dan negara hukum agar bermakna",
              "Karena pemilu tidak penting",
              "Karena rakyat tidak boleh memilih",
            ],
            answer: 1,
            explain: "Tanpa kebebasan dan hukum yang adil, pemilu bisa jadi sekadar formalitas.",
          },
          {
            q: "Siapa yang merumuskan 'pemerintahan dari, oleh, untuk rakyat'?",
            options: ["Aristoteles", "Abraham Lincoln", "Karl Marx", "Montesquieu"],
            answer: 1,
            explain: "Lincoln menyampaikannya dalam pidato Gettysburg 1863.",
          },
          {
            q: "Dalam demokrasi, bagaimana kedudukan hak minoritas?",
            options: [
              "Boleh diabaikan mayoritas",
              "Tetap wajib dihormati meski mayoritas memerintah",
              "Lebih kuat dari mayoritas",
              "Tidak diatur",
            ],
            answer: 1,
            explain: "Demokrasi sejati melindungi minoritas dari tirani mayoritas.",
          },
          {
            q: "Partai meraih 110 dari 200 kursi. Berapa persen dan apakah mayoritas?",
            options: ["55%, mayoritas", "45%, minoritas", "11%, minoritas", "50%, seri"],
            answer: 0,
            explain: "110/200 = 55%, lebih dari setengah, sehingga mayoritas.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kedaulatan-rakyat-kesetaraan",
    levelId: "fondasi",
    order: 2,
    title: "Kedaulatan Rakyat dan Kesetaraan",
    summary:
      "Dua pilar demokrasi: kekuasaan tertinggi ada di tangan rakyat, dan setiap warga punya bobot suara yang sama, satu orang satu suara.",
    durationMin: 14,
    tags: ["fondasi", "kedaulatan rakyat", "kesetaraan"],
    blocks: [
      {
        type: "paragraph",
        html: "<strong>Kedaulatan rakyat</strong> berarti kekuasaan tertinggi dalam negara berasal dari rakyat, bukan dari raja, tentara, atau golongan tertentu. Pemerintah hanyalah penerima mandat: ia memerintah karena dipercaya rakyat, dan mandat itu bisa ditarik lewat pemilu berikutnya.",
      },
      {
        type: "paragraph",
        html: "Pasangan pilar ini adalah <strong>kesetaraan</strong>. Suara seorang petani sama nilainya dengan suara seorang menteri: <em>satu orang satu suara</em>. Tidak ada warga yang suaranya dihitung dua kali, dan tidak ada yang dilarang memilih karena harta, jenis kelamin, atau keturunan.",
      },
      {
        type: "video",
        comp: "DemokrasiVideo",
        title: "Kedaulatan Rakyat dan Satu Suara yang Setara",
        caption: "Kekuasaan bersumber dari rakyat, dan setiap warga memilih dengan bobot yang sama.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Satu orang satu suara",
        html: "Inti kesetaraan politik: setiap warga dewasa punya <strong>bobot suara yang persis sama</strong> di bilik pemungutan suara, tanpa memandang kekayaan atau jabatan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Hak pilih tidak selalu universal",
        html: "Dahulu hak pilih hanya untuk laki-laki pemilik tanah. Perjuangan panjang membuat hak pilih meluas ke perempuan dan semua warga dewasa, sebuah kemenangan besar bagi kesetaraan.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Inside_the_D%C3%A1il_-_The_Irish_Parliament_Chamber.jpg?width=400",
        alt: "Ruang sidang parlemen dengan deretan kursi wakil rakyat",
        caption: "Parlemen: tempat wakil-wakil yang dipilih rakyat menjalankan kedaulatan rakyat.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Geser dimensi proses pemilu dan partisipasi, lalu amati bagaimana kedaulatan dan kesetaraan ikut menentukan kualitas demokrasi.",
      },
      { type: "widget", widget: "SimulatorIndeksDemokrasi" },
      {
        type: "chart",
        variant: "line",
        title: "Perluasan Hak Pilih dari Waktu ke Waktu (ilustrasi)",
        unit: "% penduduk dewasa yang berhak memilih",
        source: "ilustrasi edukatif berdasarkan tren perluasan hak pilih global",
        note: "Kesetaraan politik tidak datang sekaligus; hak pilih meluas bertahap menuju hampir seluruh warga dewasa.",
        data: [
          { label: "1850", value: 10, color: "#f87171" },
          { label: "1900", value: 25, color: "#fbbf24" },
          { label: "1950", value: 60, color: "#60a5fa" },
          { label: "2000", value: 95, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Bobot suara yang adil",
        html: "Di sebuah daerah, 100.000 pemilih memilih wakil. Jika satu kursi mewakili 50.000 pemilih, daerah itu mendapat 2 kursi yang setara. Bila ada daerah lain dengan 100.000 pemilih hanya diberi 1 kursi, suara warganya jadi <strong>setengah lebih ringan</strong>. Demokrasi sehat berusaha membuat bobot suara seimbang antardaerah agar kesetaraan benar-benar terwujud, bukan hanya di atas kertas.",
      },
      {
        type: "case",
        title: "Sejarah: Lincoln dan kedaulatan rakyat 1863",
        html: "Ketika <strong>Abraham Lincoln</strong> menyebut pemerintahan <strong>dari rakyat, oleh rakyat, untuk rakyat</strong> pada <strong>1863</strong> di Gettysburg, ia menegaskan kedaulatan rakyat: sumber kekuasaan bukan takhta atau bangsawan, melainkan rakyat itu sendiri. Gagasan ini menjadi fondasi mengapa pemimpin harus dipilih dan bisa diganti oleh rakyat yang memberinya mandat.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari 100 juta pemilih terdaftar, 70 juta datang memberikan suara. Berapa persen tingkat partisipasi pemilih?",
        answer: 70,
        tolerance: 0,
        suffix: "%",
        solution:
          "70 juta / 100 juta x 100% = <strong>70%</strong>. Partisipasi tinggi menandakan rakyat aktif menggunakan kedaulatannya untuk menentukan arah negara.",
        hint: "Bagi jumlah yang memilih dengan jumlah pemilih terdaftar, lalu kali 100%.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah dengan maknanya.",
        pairs: [
          { left: "Kedaulatan rakyat", right: "Kekuasaan tertinggi bersumber dari rakyat" },
          { left: "Satu orang satu suara", right: "Setiap warga punya bobot suara sama" },
          { left: "Mandat", right: "Kepercayaan yang diberikan rakyat lewat pemilu" },
          { left: "Hak pilih universal", right: "Semua warga dewasa berhak memilih" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Kedaulatan rakyat berarti kekuasaan tertinggi bersumber dari rakyat.",
          "Pemerintah memerintah karena mandat yang bisa ditarik lewat pemilu.",
          "Kesetaraan politik berarti satu orang satu suara, tanpa pandang harta atau jabatan.",
          "Hak pilih meluas bertahap dalam sejarah menuju hampir semua warga dewasa.",
          "Bobot suara yang adil antardaerah membuat kesetaraan nyata, bukan formalitas.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa makna kedaulatan rakyat?",
            options: [
              "Kekuasaan tertinggi ada pada raja",
              "Kekuasaan tertinggi bersumber dari rakyat",
              "Kekuasaan tertinggi ada pada tentara",
              "Kekuasaan tertinggi ada pada hakim",
            ],
            answer: 1,
            explain: "Dalam demokrasi, sumber kekuasaan adalah rakyat, bukan golongan tertentu.",
          },
          {
            q: "Apa arti satu orang satu suara?",
            options: [
              "Orang kaya bersuara lebih banyak",
              "Setiap warga dewasa punya bobot suara yang sama",
              "Hanya pejabat yang boleh memilih",
              "Suara dihitung berdasarkan pendidikan",
            ],
            answer: 1,
            explain: "Kesetaraan politik menuntut bobot suara yang persis sama untuk semua warga.",
          },
          {
            q: "Dari mana pemerintah memperoleh wewenang dalam demokrasi?",
            options: [
              "Dari keturunan bangsawan",
              "Dari mandat rakyat lewat pemilu",
              "Dari kekuatan militer",
              "Dari kekayaan pribadi",
            ],
            answer: 1,
            explain: "Pemerintah menerima mandat dari rakyat dan dapat diganti lewat pemilu.",
          },
          {
            q: "Bagaimana sejarah hak pilih berkembang?",
            options: [
              "Selalu universal sejak awal",
              "Meluas bertahap dari kelompok terbatas ke hampir semua warga dewasa",
              "Makin menyempit dari waktu ke waktu",
              "Hanya untuk bangsawan sampai sekarang",
            ],
            answer: 1,
            explain: "Hak pilih meluas bertahap, termasuk ke perempuan dan warga tanpa harta.",
          },
          {
            q: "Dari 100 juta pemilih, 70 juta memilih. Berapa partisipasinya?",
            options: ["7%", "70%", "30%", "100%"],
            answer: 1,
            explain: "70 juta / 100 juta x 100% = 70%.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "demokrasi-vs-otokrasi",
    levelId: "fondasi",
    order: 3,
    title: "Demokrasi vs Otokrasi",
    summary:
      "Membandingkan dua kutub pemerintahan: kekuasaan yang dibagi dan dikontrol rakyat versus kekuasaan yang terpusat tanpa kontrol.",
    durationMin: 14,
    tags: ["fondasi", "otokrasi", "perbandingan"],
    blocks: [
      {
        type: "paragraph",
        html: "Lawan dari demokrasi adalah <strong>otokrasi</strong>, yaitu sistem ketika kekuasaan terpusat pada satu orang atau kelompok kecil tanpa kontrol berarti dari rakyat. Penguasa otokratis tidak perlu izin rakyat untuk bertindak, dan rakyat sulit menggantinya secara damai.",
      },
      {
        type: "paragraph",
        html: "Perbedaan terbesar bukan pada ada-tidaknya pemilu, melainkan pada <strong>pergantian kekuasaan secara damai</strong> dan <strong>kontrol terhadap penguasa</strong>. Dalam demokrasi, pemimpin tahu ia bisa kalah dan harus pergi. Dalam otokrasi, penguasa berusaha bertahan dengan segala cara.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Ujian penentu",
        html: "Pertanyaan kunci: <strong>bisakah penguasa diganti tanpa kekerasan?</strong> Jika ya, ada benih demokrasi. Jika tidak, sistemnya cenderung otokratis.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Hati-hati demokrasi semu",
        html: "Banyak rezim otoriter tetap menggelar pemilu untuk terlihat sah, tetapi oposisi dilumpuhkan, pers dibungkam, dan hasilnya sudah ditentukan. Pemilu seperti itu bukan tanda demokrasi.",
      },
      {
        type: "video",
        comp: "DemokrasiVideo",
        title: "Demokrasi dan Lawannya",
        caption: "Kontrol rakyat dan pergantian damai membedakan demokrasi dari otokrasi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/G20_peaceful_crowd.jpg?width=400",
        alt: "Kerumunan warga melakukan unjuk rasa secara damai",
        caption: "Unjuk rasa damai: hak yang dijamin di demokrasi, tetapi ditekan di otokrasi.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "line",
        title: "Jumlah Negara Demokrasi Sejak Gelombang Ketiga (ilustrasi)",
        unit: "perkiraan jumlah negara demokrasi",
        source: "ilustrasi edukatif berdasarkan tesis gelombang ketiga Samuel Huntington",
        note: "Sejak sekitar 1974, jumlah negara demokrasi meningkat tajam, lalu cenderung mendatar.",
        data: [
          { label: "1974", value: 35, color: "#f87171" },
          { label: "1990", value: 70, color: "#fbbf24" },
          { label: "2005", value: 115, color: "#60a5fa" },
          { label: "2020", value: 100, color: "#34d399" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pergantian damai versus bertahan paksa",
        html: "Bayangkan dua negara. Di negara A, presiden kalah pemilu lalu menyerahkan kekuasaan dengan tertib; dalam 20 tahun negara itu berganti presiden 4 kali secara damai. Di negara B, penguasa yang sama bertahan 30 tahun dengan membubarkan oposisi dan mengubah konstitusi demi memperpanjang masa jabatan. Negara A menunjukkan ciri <strong>demokrasi</strong>; negara B menunjukkan ciri <strong>otokrasi</strong>, sekalipun keduanya sama-sama menggelar pemilu.",
      },
      {
        type: "case",
        title: "Sejarah: Gelombang ketiga demokratisasi sejak 1974",
        html: "Ilmuwan politik <strong>Samuel Huntington</strong> menyebut periode setelah <strong>1974</strong> sebagai <strong>gelombang ketiga</strong> demokratisasi, dimulai dari runtuhnya kediktatoran di Portugal dan menyebar ke Eropa Selatan, Amerika Latin, Asia, hingga Eropa Timur setelah 1989. Banyak otokrasi berubah jadi demokrasi dalam rentang ini, termasuk gelombang reformasi di berbagai negara, sebelum laju demokratisasi global melambat pada dekade berikutnya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dalam 20 tahun, sebuah negara berganti presiden 4 kali lewat pemilu damai. Rata-rata berapa tahun satu masa jabatan presiden?",
        answer: 5,
        tolerance: 0,
        suffix: " tahun",
        solution:
          "20 tahun / 4 kali = <strong>5 tahun</strong> per masa jabatan. Pergantian yang teratur dan damai seperti ini adalah ciri khas demokrasi yang sehat.",
        hint: "Bagi total tahun dengan jumlah pergantian presiden.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap ciri: DEMOKRASI atau OTOKRASI.",
        buckets: ["Demokrasi", "Otokrasi"],
        items: [
          { text: "Penguasa bisa diganti damai lewat pemilu jujur", bucket: "Demokrasi" },
          { text: "Konstitusi diubah agar penguasa bisa berkuasa seumur hidup", bucket: "Otokrasi" },
          { text: "Warga bebas berunjuk rasa menentang kebijakan", bucket: "Demokrasi" },
          { text: "Media yang mengkritik penguasa diberangus", bucket: "Otokrasi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Otokrasi memusatkan kekuasaan tanpa kontrol berarti dari rakyat.",
          "Beda utama demokrasi dan otokrasi adalah pergantian kekuasaan damai dan kontrol penguasa.",
          "Pemilu bisa dipakai rezim otoriter untuk terlihat sah, jadi bukan jaminan demokrasi.",
          "Gelombang ketiga sejak 1974 menambah banyak negara demokrasi di dunia.",
          "Ujian kunci: bisakah penguasa diganti tanpa kekerasan?",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa ciri utama otokrasi?",
            options: [
              "Kekuasaan terpusat tanpa kontrol rakyat",
              "Pergantian pemimpin yang teratur",
              "Pers yang bebas",
              "Oposisi yang kuat",
            ],
            answer: 0,
            explain: "Otokrasi memusatkan kekuasaan dan menutup kontrol dari rakyat.",
          },
          {
            q: "Apa pembeda paling penting demokrasi dari otokrasi?",
            options: [
              "Jumlah penduduk",
              "Pergantian kekuasaan secara damai dan adanya kontrol",
              "Luas wilayah negara",
              "Warna bendera",
            ],
            answer: 1,
            explain: "Pergantian damai dan kontrol terhadap penguasa adalah pembeda intinya.",
          },
          {
            q: "Mengapa pemilu saja tidak menjamin demokrasi?",
            options: [
              "Karena pemilu selalu jujur",
              "Karena rezim otoriter bisa menggelar pemilu semu",
              "Karena pemilu dilarang di otokrasi",
              "Karena rakyat tidak suka memilih",
            ],
            answer: 1,
            explain: "Rezim otoriter sering memakai pemilu semu untuk terlihat sah.",
          },
          {
            q: "Apa yang dimaksud gelombang ketiga demokratisasi?",
            options: [
              "Krisis ekonomi global 1974",
              "Penyebaran demokrasi ke banyak negara sejak sekitar 1974",
              "Perang dunia ketiga",
              "Penemuan kotak suara elektronik",
            ],
            answer: 1,
            explain: "Huntington menyebut gelombang demokratisasi yang menyebar sejak sekitar 1974.",
          },
          {
            q: "Negara berganti presiden 4 kali dalam 20 tahun. Rata-rata masa jabatan?",
            options: ["2 tahun", "4 tahun", "5 tahun", "10 tahun"],
            answer: 2,
            explain: "20 / 4 = 5 tahun per masa jabatan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "mengapa-demokrasi-penting",
    levelId: "fondasi",
    order: 4,
    title: "Mengapa Demokrasi Penting",
    summary:
      "Kelebihan demokrasi, mulai dari pergantian damai sampai perlindungan hak, dan juga kritik jujur terhadapnya seperti yang diakui Churchill.",
    durationMin: 14,
    tags: ["fondasi", "kelebihan", "kritik"],
    blocks: [
      {
        type: "paragraph",
        html: "Demokrasi penting bukan karena sempurna, melainkan karena ia menyediakan cara <strong>damai</strong> untuk mengganti pemimpin, mengoreksi kesalahan, dan melindungi hak warga. Ketika rakyat bisa memecat pemerintah lewat suara, penguasa terdorong mendengar dan melayani, bukan menindas.",
      },
      {
        type: "paragraph",
        html: "Tetapi demokrasi juga punya kelemahan: proses bisa lambat, keputusan kadang penuh kompromi, dan mayoritas bisa keliru. Justru kejujuran mengakui kekurangan inilah yang membuat demokrasi terus diperbaiki, bukan dipuja secara buta.",
      },
      {
        type: "video",
        comp: "DemokrasiVideo",
        title: "Mengapa Demokrasi Berharga",
        caption: "Katup pengaman damai untuk mengganti pemimpin dan mengoreksi kesalahan tanpa kekerasan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Katup pengaman damai",
        html: "Nilai terbesar demokrasi: rakyat bisa mengganti pemerintah <strong>tanpa kekerasan</strong>. Kemarahan publik disalurkan lewat kotak suara, bukan lewat kudeta atau perang saudara.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Demokrasi dan kesejahteraan",
        html: "Negara dengan kebebasan pers dan akuntabilitas cenderung lebih sigap menanggapi krisis seperti kelaparan, karena pemerintah bisa dimintai pertanggungjawaban oleh rakyat.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Bukan jaminan otomatis",
        html: "Demokrasi tidak otomatis membuat negara makmur atau bebas korupsi. Ia hanya membuka jalan untuk perbaikan; rakyat tetap harus aktif mengawasi.",
      },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Headquarters_of_the_United_Nations%2C_New_York_City%2C_20231001_1103_1006.jpg?width=400",
        alt: "Gedung markas Perserikatan Bangsa-Bangsa di New York",
        caption: "Markas PBB: nilai demokrasi dan hak asasi menjadi acuan banyak negara dunia.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Naik-turunkan dimensi kebebasan sipil dan fungsi pemerintah, lalu lihat bagaimana kelebihan demokrasi muncul saat semua dimensi seimbang.",
      },
      { type: "widget", widget: "SimulatorIndeksDemokrasi" },
      {
        type: "chart",
        variant: "bar",
        title: "Skor Persepsi Antikorupsi menurut Tipe Rezim (ilustrasi)",
        unit: "skor 0-100 (makin tinggi makin bersih)",
        source: "ilustrasi edukatif berdasarkan pola umum indeks persepsi korupsi",
        note: "Rata-rata, demokrasi penuh cenderung lebih bersih, tetapi demokrasi bukan jaminan otomatis bebas korupsi.",
        data: [
          { label: "Demokrasi penuh", value: 73, color: "#34d399" },
          { label: "Demokrasi cacat", value: 50, color: "#60a5fa" },
          { label: "Rezim hibrida", value: 35, color: "#fbbf24" },
          { label: "Rezim otoriter", value: 28, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengoreksi kesalahan tanpa kekerasan",
        html: "Sebuah pemerintah menaikkan pajak secara tidak populer dan ekonomi memburuk. Dalam demokrasi, rakyat menunggu pemilu, lalu memilih partai lain yang menjanjikan kebijakan berbeda; kekuasaan berpindah tanpa satu tetes darah. Tanpa demokrasi, satu-satunya cara mengganti pemimpin yang gagal sering kali adalah pemberontakan atau kudeta yang berdarah. Inilah mengapa katup pengaman damai begitu berharga.",
      },
      {
        type: "case",
        title: "Sejarah: Churchill 1947 tentang demokrasi",
        html: "Pada <strong>1947</strong>, di hadapan parlemen Inggris, <strong>Winston Churchill</strong> berkata bahwa <strong>demokrasi adalah bentuk pemerintahan terburuk, kecuali semua bentuk lain</strong> yang pernah dicoba. Kalimat ini jujur mengakui kekurangan demokrasi, lambat dan berisik, sekaligus menegaskan bahwa alternatifnya, kekuasaan tanpa kontrol, terbukti jauh lebih buruk bagi rakyat.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dalam jajak pendapat, 60% warga puas dengan demokrasi dan 25% tidak puas. Berapa persen yang masih ragu-ragu?",
        answer: 15,
        tolerance: 0,
        suffix: "%",
        solution:
          "100% - 60% - 25% = <strong>15%</strong>. Kelompok ragu ini sering jadi penentu, dan dalam demokrasi mereka bebas dibujuk lewat argumen, bukan paksaan.",
        hint: "Kurangi 100% dengan persentase yang puas dan yang tidak puas.",
      },
      {
        type: "classifyExercise",
        prompt: "Golongkan tiap pernyataan: KELEBIHAN demokrasi atau KRITIK terhadap demokrasi.",
        buckets: ["Kelebihan", "Kritik"],
        items: [
          { text: "Pemimpin bisa diganti damai lewat pemilu", bucket: "Kelebihan" },
          { text: "Melindungi hak minoritas dari kesewenangan", bucket: "Kelebihan" },
          { text: "Pengambilan keputusan bisa lambat dan penuh kompromi", bucket: "Kritik" },
          { text: "Mayoritas kadang bisa keliru memilih", bucket: "Kritik" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Demokrasi penting karena menyediakan cara damai mengganti pemimpin.",
          "Ia mendorong penguasa akuntabel dan responsif terhadap rakyat.",
          "Demokrasi punya kelemahan: lambat, penuh kompromi, dan mayoritas bisa keliru.",
          "Churchill menyebutnya buruk, tetapi lebih baik dari semua alternatif yang dicoba.",
          "Demokrasi membuka jalan perbaikan, tetapi rakyat tetap harus mengawasi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa nilai terbesar demokrasi menurut pelajaran ini?",
            options: [
              "Membuat negara langsung kaya",
              "Mengganti pemimpin tanpa kekerasan",
              "Menghapus semua perbedaan pendapat",
              "Menjamin pemimpin tidak pernah salah",
            ],
            answer: 1,
            explain: "Demokrasi adalah katup pengaman damai untuk mengganti pemerintah.",
          },
          {
            q: "Apa salah satu kritik jujur terhadap demokrasi?",
            options: [
              "Tidak pernah memungut suara",
              "Pengambilan keputusan bisa lambat dan penuh kompromi",
              "Melarang rakyat bicara",
              "Tidak punya pemimpin",
            ],
            answer: 1,
            explain: "Proses demokratis memang bisa lambat dan butuh banyak kompromi.",
          },
          {
            q: "Apa kata Churchill tentang demokrasi pada 1947?",
            options: [
              "Bentuk terbaik tanpa cela",
              "Bentuk terburuk kecuali semua bentuk lain yang dicoba",
              "Tidak layak dipakai",
              "Sama dengan otokrasi",
            ],
            answer: 1,
            explain: "Churchill mengakui kekurangannya tetapi menilainya lebih baik dari alternatif.",
          },
          {
            q: "Apakah demokrasi otomatis membuat negara bebas korupsi?",
            options: [
              "Ya, selalu",
              "Tidak, ia hanya membuka jalan perbaikan dan butuh pengawasan rakyat",
              "Ya, tanpa kecuali",
              "Tidak ada hubungannya sama sekali",
            ],
            answer: 1,
            explain: "Demokrasi memudahkan akuntabilitas, tetapi rakyat tetap harus aktif mengawasi.",
          },
          {
            q: "60% puas, 25% tidak puas. Berapa persen yang ragu-ragu?",
            options: ["5%", "10%", "15%", "25%"],
            answer: 2,
            explain: "100% - 60% - 25% = 15%.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "mengukur-demokrasi",
    levelId: "fondasi",
    order: 5,
    title: "Mengukur Demokrasi",
    summary:
      "Demokrasi bukan ya atau tidak, melainkan soal derajat. Kenali lima dimensi indeks demokrasi dan cara menilai sebuah negara berdasarkan skornya.",
    durationMin: 14,
    tags: ["fondasi", "indeks", "pengukuran"],
    blocks: [
      {
        type: "paragraph",
        html: "Demokrasi bukan saklar hidup atau mati, melainkan <strong>spektrum</strong>. Para peneliti mengukurnya dengan <strong>indeks demokrasi</strong> yang menilai banyak aspek, lalu mengelompokkan negara menjadi demokrasi penuh, demokrasi cacat, rezim hibrida, atau rezim otoriter.",
      },
      {
        type: "paragraph",
        html: "Salah satu indeks terkenal menilai <strong>lima dimensi</strong>: proses pemilu dan pluralisme, fungsi pemerintah, partisipasi politik, budaya politik, dan kebebasan sipil. Skor tiap dimensi dirata-rata menjadi skor akhir dari 0 sampai 10.",
      },
      {
        type: "video",
        comp: "DemokrasiVideo",
        title: "Mengukur Demokrasi sebagai Spektrum",
        caption: "Demokrasi bukan ya atau tidak, melainkan derajat yang dinilai lewat lima dimensi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Lima dimensi indeks",
        html: "<strong>Proses pemilu</strong>, <strong>fungsi pemerintah</strong>, <strong>partisipasi politik</strong>, <strong>budaya politik</strong>, dan <strong>kebebasan sipil</strong>. Skor akhir adalah rata-rata kelimanya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Empat kategori rezim",
        html: "Umumnya: skor di atas 8 tergolong <strong>demokrasi penuh</strong>, 6 sampai 8 <strong>demokrasi cacat</strong>, 4 sampai 6 <strong>rezim hibrida</strong>, dan di bawah 4 <strong>rezim otoriter</strong>.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Coba simulatornya",
        html: "Atur kelima dimensi sesuai gambaranmu tentang sebuah negara, lalu lihat skor rata-rata dan kategori rezim yang dihasilkan.",
      },
      { type: "widget", widget: "SimulatorIndeksDemokrasi" },
      {
        type: "image",
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ballot_dropped_into_ballot_box_2024_Swedish_EU_election_at_St%C3%A5ngen%C3%A4sskolan%2C_Brastad.jpg?width=400",
        alt: "Surat suara dimasukkan ke kotak suara dalam pemilu",
        caption: "Proses pemilu yang jujur adalah salah satu dari lima dimensi indeks demokrasi.",
        credit: "Sumber: Wikimedia Commons",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Contoh Skor Lima Dimensi Sebuah Negara (ilustrasi)",
        unit: "skor 0-10 per dimensi",
        source: "ilustrasi edukatif berdasarkan struktur lima dimensi indeks demokrasi",
        note: "Skor akhir adalah rata-rata; satu dimensi yang lemah bisa menurunkan kategori sebuah negara.",
        data: [
          { label: "Proses pemilu", value: 8, color: "#34d399" },
          { label: "Fungsi pemerintah", value: 7, color: "#60a5fa" },
          { label: "Partisipasi", value: 6, color: "#a78bfa" },
          { label: "Budaya politik", value: 9, color: "#fbbf24" },
          { label: "Kebebasan sipil", value: 5, color: "#f87171" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Satu dimensi lemah menarik turun skor",
        html: "Sebuah negara punya skor tinggi pada proses pemilu (8) dan budaya politik (9), tetapi kebebasan sipilnya lemah (5) karena pers sering ditekan. Dengan dimensi lain 7 dan 6, rata-ratanya adalah (8 + 7 + 6 + 9 + 5) / 5 = <strong>7,0</strong>, sehingga negara itu tergolong <strong>demokrasi cacat</strong>, bukan demokrasi penuh. Pelajarannya: demokrasi yang sehat butuh semua dimensi kuat, bukan hanya pemilu yang ramai.",
      },
      {
        type: "case",
        title: "Sejarah: Gelombang ketiga dan naik-turunnya skor sejak 1974",
        html: "Setelah <strong>gelombang ketiga</strong> demokratisasi yang dirumuskan <strong>Samuel Huntington</strong> sejak <strong>1974</strong>, banyak negara baru masuk kategori demokrasi dan skor indeks global rata-rata naik. Namun pada dekade-dekade berikutnya sejumlah indeks mencatat <strong>kemunduran demokrasi</strong> di beberapa kawasan, ketika kebebasan sipil dan fungsi pemerintah melemah. Indeks membantu kita melihat tren naik-turun ini secara terukur, bukan sekadar kesan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Lima dimensi sebuah negara dinilai 8, 7, 6, 9, dan 5 dari 10. Berapa skor rata-rata indeks demokrasinya?",
        answer: 7,
        tolerance: 0.1,
        solution:
          "(8 + 7 + 6 + 9 + 5) / 5 = 35 / 5 = <strong>7,0</strong>. Skor 7 termasuk rentang demokrasi cacat (6 sampai 8), jadi negara ini demokrasi cacat.",
        hint: "Jumlahkan kelima skor, lalu bagi dengan 5.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan dimensi indeks dengan contoh pertanyaannya.",
        pairs: [
          { left: "Proses pemilu", right: "Apakah pemilu jujur dan oposisi bisa ikut?" },
          { left: "Fungsi pemerintah", right: "Apakah pemerintah bekerja efektif dan akuntabel?" },
          { left: "Partisipasi politik", right: "Seberapa aktif warga terlibat dalam politik?" },
          { left: "Kebebasan sipil", right: "Apakah pers dan warga bebas bersuara?" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Demokrasi adalah spektrum, bukan sekadar ada atau tidak.",
          "Indeks menilai lima dimensi dan merata-ratakannya jadi skor 0 sampai 10.",
          "Kategori rezim: demokrasi penuh, demokrasi cacat, hibrida, dan otoriter.",
          "Satu dimensi lemah bisa menurunkan kategori sebuah negara.",
          "Indeks membantu memantau tren naik-turun demokrasi secara terukur.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa demokrasi disebut spektrum, bukan saklar?",
            options: [
              "Karena hanya ada dua pilihan",
              "Karena negara bisa lebih atau kurang demokratis dalam derajat",
              "Karena tidak bisa diukur",
              "Karena selalu sama di semua negara",
            ],
            answer: 1,
            explain: "Demokrasi diukur dalam derajat, dari penuh sampai otoriter.",
          },
          {
            q: "Berapa dimensi yang dinilai indeks demokrasi dalam pelajaran ini?",
            options: ["Tiga", "Lima", "Tujuh", "Sepuluh"],
            answer: 1,
            explain: "Lima: proses pemilu, fungsi pemerintah, partisipasi, budaya politik, kebebasan sipil.",
          },
          {
            q: "Skor akhir indeks demokrasi diperoleh dengan cara apa?",
            options: [
              "Mengambil skor tertinggi",
              "Merata-ratakan skor kelima dimensi",
              "Mengambil skor terendah",
              "Menjumlahkan tanpa membagi",
            ],
            answer: 1,
            explain: "Skor akhir adalah rata-rata dari kelima dimensi.",
          },
          {
            q: "Negara dengan skor 7,0 termasuk kategori apa?",
            options: ["Demokrasi penuh", "Demokrasi cacat", "Rezim hibrida", "Rezim otoriter"],
            answer: 1,
            explain: "Skor 6 sampai 8 tergolong demokrasi cacat.",
          },
          {
            q: "Dimensi dinilai 8, 7, 6, 9, 5. Berapa rata-ratanya?",
            options: ["6,5", "7,0", "7,5", "8,0"],
            answer: 1,
            explain: "(8 + 7 + 6 + 9 + 5) / 5 = 35 / 5 = 7,0.",
          },
        ],
      },
    ],
  },
];
