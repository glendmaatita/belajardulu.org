import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "momentum-dan-impuls",
    levelId: "momentum-impuls",
    order: 1,
    title: "Momentum dan Impuls",
    summary:
      "Mengapa truk pelan terasa lebih 'berbahaya' daripada bola cepat, dan kenapa airbag menyelamatkan nyawa? Kita selami dulu kisahnya sebelum bertemu rumus.",
    durationMin: 13,
    tags: ["fisika", "momentum", "impuls", "airbag"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan dua benda menabrak tembok: bola tenis melaju kencang dan truk merayap pelan. Mana yang merusak tembok? Truk yang pelan, tentu. Ternyata 'kuantitas gerak' sebuah benda tidak hanya soal cepat, tapi juga soal massa. Lalu kenapa <strong>airbag</strong> yang lembut bisa menyelamatkan pengemudi padahal tabrakannya keras? Ayo telusuri dulu kisahnya sebelum kita bertemu rumus apa pun.",
      },
      {
        type: "video",
        comp: "MomentumVideo",
        title: "Video: Kuantitas Gerak Sebuah Benda",
        caption: "Gabungan massa dan kecepatan menentukan seberapa 'sulit dihentikan' sebuah benda.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba dorong gerobak kosong, lalu dorong gerobak penuh batu pada kecepatan yang sama. Mana yang lebih susah dihentikan? Sekarang amati saat mobil mengerem mendadak: penumpang terdorong ke depan. Tubuh yang sedang bergerak 'enggan' berhenti. Rasa enggan inilah yang kita sebut <strong>momentum</strong>. Petualangan kita: cari tahu apa yang membuat momentum besar.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Momentum itu vektor",
        html: "Momentum punya besar sekaligus arah. Bola yang sama melaju ke kiri dan ke kanan punya momentum berlawanan tanda. Ini penting nanti saat kita menjumlahkan momentum beberapa benda.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Gaya pada Pengemudi 70 kg saat Berhenti dari 15 m/s",
        unit: "newton",
        source: "ilustrasi edukatif (Delta p = 70 x 15 = 1050 kg.m/s)",
        note: "Perubahan momentum sama (1050 kg.m/s), tetapi airbag memperlama waktu kontak sehingga gaya yang diterima tubuh jauh lebih kecil. Inilah rahasia airbag.",
        data: [
          { label: "Tanpa airbag (0,05 s)", value: 21000, color: "#f87171" },
          { label: "Dengan airbag (0,5 s)", value: 2100, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Sebuah bola bermassa 0,2 kg melaju dengan kecepatan 15 m/s. Berapa momentumnya?",
        answer: 3,
        tolerance: 0.01,
        suffix: " kg.m/s",
        solution:
          "Momentum = massa kali kecepatan = 0,2 kg x 15 m/s = <strong>3 kg.m/s</strong>. Perhatikan: massa kecil pun bisa berarti jika cukup cepat.",
        hint: "Kalikan massa dengan kecepatan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah gaya 50 N bekerja pada sebuah benda selama 0,4 sekon. Berapa besar impuls yang diberikan?",
        answer: 20,
        tolerance: 0.01,
        suffix: " N.s",
        solution:
          "Impuls = gaya kali waktu = 50 N x 0,4 s = <strong>20 N.s</strong>. Impuls inilah yang mengubah momentum benda.",
        hint: "Impuls = gaya dikali selang waktu.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan strategi berikut: memperbesar atau memperkecil gaya tumbukan?",
        buckets: ["Memperkecil gaya (waktu lama)", "Memperbesar gaya (waktu singkat)"],
        items: [
          { text: "Airbag mengembang saat tabrakan", bucket: "Memperkecil gaya (waktu lama)" },
          { text: "Menekuk lutut saat mendarat dari lompatan", bucket: "Memperkecil gaya (waktu lama)" },
          { text: "Memukul paku dengan palu keras", bucket: "Memperbesar gaya (waktu singkat)" },
          { text: "Karateka mematahkan papan dengan tangan cepat", bucket: "Memperbesar gaya (waktu singkat)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Airbag dan Sabuk Pengaman",
        html: "Saat mobil menabrak, tubuh pengemudi tetap melaju dan harus dihentikan. Perubahan momentumnya sudah pasti besar dan tidak bisa dihindari. Yang bisa diatur adalah <strong>waktu</strong> berhentinya. Membentur dasbor keras berarti berhenti dalam sekejap, sehingga gaya pada tubuh sangat besar dan mematikan. Airbag dan sabuk pengaman memperpanjang waktu berhenti dari 0,05 s menjadi sekitar 0,5 s, dan gaya yang diterima tubuh turun sepuluh kali lipat. Bukan keajaiban, hanya fisika impuls.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru rumusnya bermakna. <strong>Momentum: p = m . v</strong> (massa kali kecepatan, satuan kg.m/s). <strong>Impuls: J = F . t</strong> (gaya kali waktu, satuan N.s). Keduanya terhubung lewat teorema impuls-momentum: <strong>J = Delta p</strong>, artinya impuls sama dengan perubahan momentum. Karena F = Delta p / t, memperlama waktu kontak akan memperkecil gaya. Itulah sebabnya airbag bekerja.",
      },
      {
        type: "takeaways",
        items: [
          "Momentum p = m.v menggabungkan massa dan kecepatan; ia adalah besaran vektor.",
          "Impuls J = F.t adalah hasil kali gaya dan selang waktu kerjanya.",
          "Teorema impuls-momentum: impuls yang diberikan sama dengan perubahan momentum (J = Delta p).",
          "Memperlama waktu kontak memperkecil gaya tumbukan, prinsip kerja airbag dan menekuk lutut saat mendarat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus momentum adalah?",
            options: ["p = m + v", "p = m . v", "p = m / v", "p = F . t"],
            answer: 1,
            explain: "Momentum adalah hasil kali massa dan kecepatan, p = m.v.",
          },
          {
            q: "Sebuah benda 4 kg bergerak 5 m/s. Berapa momentumnya?",
            options: ["9 kg.m/s", "20 kg.m/s", "0,8 kg.m/s", "1,25 kg.m/s"],
            answer: 1,
            explain: "p = 4 x 5 = 20 kg.m/s.",
          },
          {
            q: "Mengapa airbag mengurangi cedera saat tabrakan?",
            options: [
              "Karena menambah momentum tubuh",
              "Karena memperlama waktu berhenti sehingga gaya mengecil",
              "Karena membuat tubuh lebih ringan",
              "Karena menghilangkan kecepatan tanpa gaya",
            ],
            answer: 1,
            explain: "Perubahan momentum tetap, tetapi waktu lebih lama membuat gaya F = Delta p / t mengecil.",
          },
          {
            q: "Impuls memiliki satuan yang setara dengan?",
            options: ["kg.m/s", "newton saja", "joule", "watt"],
            answer: 0,
            explain: "Impuls = perubahan momentum, jadi satuannya N.s yang setara kg.m/s.",
          },
          {
            q: "Teorema impuls-momentum menyatakan bahwa?",
            options: [
              "Impuls sama dengan energi kinetik",
              "Impuls sama dengan perubahan momentum",
              "Momentum selalu nol",
              "Gaya tidak memengaruhi momentum",
            ],
            answer: 1,
            explain: "J = Delta p: impuls yang diberikan sama dengan perubahan momentum benda.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "impuls-sentuhan-singkat",
    levelId: "momentum-impuls",
    order: 2,
    title: "Impuls: Sentuhan Singkat yang Menentukan",
    summary:
      "Pemain bola yang menendang dengan 'follow-through' membuat bola melesat lebih kencang. Apa rahasianya? Kita rasakan dulu sebelum menulis rumus.",
    durationMin: 13,
    tags: ["fisika", "impuls", "gaya", "olahraga"],
    blocks: [
      {
        type: "paragraph",
        html: "Tendangan seorang penyerang yang dahsyat bukan cuma soal otot. Pelatih selalu berkata: 'lanjutkan ayunan kakimu setelah menyentuh bola.' Gerakan lanjutan itu, atau <strong>follow-through</strong>, memperpanjang waktu sentuhan kaki dengan bola. Hasilnya bola lebih kencang. Ayo berpetualang dulu memahami mengapa waktu sentuhan begitu penting sebelum kita rumuskan.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Gaya sebagai Laju Perubahan Momentum",
        caption: "Semakin lama sebuah gaya bekerja, semakin besar perubahan momentum yang dihasilkan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba dua cara menendang kaleng kosong. Pertama, sentuh sebentar lalu tarik kaki. Kedua, dorong kaki menembus kaleng dengan ayunan panjang. Cara kedua membuat kaleng melesat jauh lebih jauh, padahal terasa sama 'kuat'. Rahasianya: gaya yang sama, tetapi bekerja lebih lama, memberi <strong>impuls</strong> yang lebih besar. Impuls inilah yang menumpuk menjadi kecepatan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Impuls juga vektor",
        html: "Impuls punya arah, searah dengan gaya yang bekerja. Saat bola datang lalu dipukul balik ke arah sebaliknya, perubahan momentumnya besar karena kecepatan berbalik tanda. Hati-hati dengan tanda positif dan negatif saat menghitung.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah bola 0,4 kg yang awalnya diam ditendang dengan gaya rata-rata 200 N selama 0,05 sekon. Berapa kecepatan bola setelah ditendang?",
        answer: 25,
        tolerance: 0.01,
        suffix: " m/s",
        solution:
          "Impuls = F x t = 200 x 0,05 = 10 N.s. Impuls ini sama dengan perubahan momentum: 10 = 0,4 x v. Maka v = 10 / 0,4 = <strong>25 m/s</strong>. Gaya yang bekerja lebih lama akan memberi kecepatan lebih besar.",
        hint: "Hitung impuls dulu (F x t), lalu samakan dengan m x v.",
      },
      {
        type: "calcExercise",
        prompt:
          "Bola 0,15 kg datang ke arah pemukul dengan kecepatan 20 m/s, lalu dipukul balik dengan kecepatan 30 m/s ke arah sebaliknya. Berapa besar impuls yang diberikan pemukul?",
        answer: 7.5,
        tolerance: 0.01,
        suffix: " N.s",
        solution:
          "Ambil arah pukulan sebagai positif. Kecepatan awal -20 m/s, kecepatan akhir +30 m/s. Impuls = m(v' - v) = 0,15 x (30 - (-20)) = 0,15 x 50 = <strong>7,5 N.s</strong>. Karena bola berbalik arah, perubahan kecepatannya 50 m/s, bukan 10 m/s.",
        hint: "Perhatikan tanda: kecepatan datang dan kecepatan balik berlawanan arah.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan: tindakan ini memperbesar impuls dengan memperpanjang waktu, atau memperbesar gaya?",
        buckets: ["Memperpanjang waktu kontak", "Memperbesar gaya sesaat"],
        items: [
          { text: "Pegolf melanjutkan ayunan setelah memukul bola", bucket: "Memperpanjang waktu kontak" },
          { text: "Petenis mengayun raket menembus bola", bucket: "Memperpanjang waktu kontak" },
          { text: "Tukang memukul paku dengan palu berat secara cepat", bucket: "Memperbesar gaya sesaat" },
          { text: "Pemain bilyar menyodok bola dengan sentakan keras", bucket: "Memperbesar gaya sesaat" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Follow-Through dalam Olahraga",
        html: "Di hampir semua olahraga lempar dan pukul, pelatih mengajarkan gerak lanjutan. Pegolf tidak berhenti tepat saat stik menyentuh bola; ia mengayun terus. Petenis menembus bola dengan raketnya. Tujuannya satu: memperpanjang waktu kontak antara alat dan bola. Karena impuls J = F x t, menambah waktu kontak dengan gaya yang sama akan menambah impuls, dan impuls yang lebih besar berarti kecepatan bola yang lebih tinggi. Teknik yang tampak sepele itu sebenarnya fisika impuls yang murni.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan sendiri, rumusnya jadi jelas. <strong>Impuls J = F . t</strong>, dan impuls sama dengan perubahan momentum: <strong>J = Delta p = m.v' - m.v</strong>. Untuk gaya yang berubah-ubah kita pakai gaya rata-rata: <strong>F_rata = Delta p / t</strong>. Maka dengan gaya tetap, memperpanjang waktu kontak memperbesar kecepatan akhir. Itulah alasan ilmiah di balik follow-through.",
      },
      {
        type: "takeaways",
        items: [
          "Impuls J = F.t adalah 'dorongan total' yang menumpuk selama gaya bekerja.",
          "Impuls sama dengan perubahan momentum: J = m.v' - m.v.",
          "Memperpanjang waktu kontak dengan gaya tetap memperbesar impuls dan kecepatan akhir.",
          "Saat benda berbalik arah, perubahan kecepatan adalah jumlah laju datang dan laju balik (perhatikan tanda).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Impuls didefinisikan sebagai?",
            options: ["Massa kali kecepatan", "Gaya kali selang waktu", "Gaya kali jarak", "Massa kali percepatan"],
            answer: 1,
            explain: "Impuls J = F x t, hasil kali gaya dan selang waktu kerjanya.",
          },
          {
            q: "Gaya 100 N bekerja 0,2 s pada benda. Berapa impulsnya?",
            options: ["20 N.s", "500 N.s", "0,002 N.s", "100 N.s"],
            answer: 0,
            explain: "J = F x t = 100 x 0,2 = 20 N.s.",
          },
          {
            q: "Mengapa follow-through membuat bola melesat lebih kencang?",
            options: [
              "Karena menambah massa bola",
              "Karena memperpanjang waktu kontak sehingga impuls lebih besar",
              "Karena mengurangi gaya",
              "Karena bola jadi lebih ringan",
            ],
            answer: 1,
            explain: "Waktu kontak lebih lama dengan gaya sama berarti impuls dan kecepatan akhir lebih besar.",
          },
          {
            q: "Bola 0,2 kg dari diam dipukul hingga 10 m/s. Berapa impuls yang diterimanya?",
            options: ["2 N.s", "0,02 N.s", "20 N.s", "5 N.s"],
            answer: 0,
            explain: "J = Delta p = 0,2 x 10 = 2 N.s.",
          },
          {
            q: "Bola datang 8 m/s lalu dipukul balik 8 m/s ke arah sebaliknya. Perubahan kecepatannya?",
            options: ["0 m/s", "8 m/s", "16 m/s", "4 m/s"],
            answer: 2,
            explain: "Karena berbalik arah, perubahan kecepatan = 8 - (-8) = 16 m/s.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "teorema-impuls-momentum",
    levelId: "momentum-impuls",
    order: 3,
    title: "Teorema Impuls-Momentum",
    summary:
      "Setiap perubahan gerak butuh dorongan. Teorema impuls-momentum adalah jembatan yang menghubungkan gaya, waktu, dan perubahan kecepatan. Kita susuri dulu ceritanya.",
    durationMin: 13,
    tags: ["fisika", "impuls", "momentum", "gaya rata-rata"],
    blocks: [
      {
        type: "paragraph",
        html: "Untuk menghentikan mobil yang melaju, rem harus bekerja selama beberapa detik. Untuk menghentikan mobil yang sama dalam sekejap, gayanya harus jauh lebih besar, dan itulah yang terjadi saat tabrakan. Hubungan antara gaya, waktu, dan perubahan gerak ternyata bisa diringkas dalam satu pernyataan yang elegan. Ayo berpetualang dulu sebelum menuliskannya.",
      },
      {
        type: "video",
        comp: "MomentumVideo",
        title: "Video: Dorongan yang Mengubah Gerak",
        caption: "Perubahan momentum selalu butuh impuls; tidak ada gerak berubah tanpa sebab.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan menangkap bola kasti yang melaju kencang. Kalau tanganmu kaku, tangkapan terasa menyakitkan. Tapi kalau kamu menarik tangan ke belakang mengikuti bola, tangkapan terasa lembut. Perubahan momentum bolanya sama (dari kencang menjadi diam), tetapi dengan memperpanjang waktu, gaya yang menyengat telapakmu jadi kecil. Amati: yang kamu atur adalah waktu, dan gaya mengikuti.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengubah momentum selalu butuh impuls",
        html: "Tidak ada benda yang mengubah kecepatannya secara gratis. Setiap perubahan momentum, sekecil apa pun, harus dibayar dengan impuls dari suatu gaya. Inilah inti hukum Newton kedua yang ditulis dalam bahasa momentum.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "calcExercise",
        prompt:
          "Mobil 1000 kg melaju 20 m/s direm hingga berhenti dalam 4 sekon. Berapa gaya rata-rata yang dibutuhkan rem?",
        answer: 5000,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Perubahan momentum = m(v' - v) = 1000 x (0 - 20) = -20000 kg.m/s. Gaya rata-rata = Delta p / t = -20000 / 4 = -5000 N. Besarnya <strong>5000 N</strong>; tanda minus hanya menunjukkan arah berlawanan gerak.",
        hint: "Hitung perubahan momentum, lalu bagi dengan waktu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Bola 0,5 kg jatuh menumbuk lantai dengan kecepatan 6 m/s lalu memantul ke atas 4 m/s. Berapa besar impuls yang diberikan lantai pada bola?",
        answer: 5,
        tolerance: 0.01,
        suffix: " N.s",
        solution:
          "Ambil arah ke atas positif. Kecepatan datang -6 m/s, kecepatan pantul +4 m/s. Impuls = m(v' - v) = 0,5 x (4 - (-6)) = 0,5 x 10 = <strong>5 N.s</strong> ke atas. Lantai harus menghentikan bola lalu mendorongnya balik.",
        hint: "Tetapkan arah positif, perhatikan bola berbalik arah saat memantul.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan situasi dengan cara teorema impuls-momentum menjelaskannya.",
        pairs: [
          { left: "Menarik tangan saat menangkap bola", right: "Memperlama waktu agar gaya pada telapak kecil" },
          { left: "Rem mobil bekerja beberapa detik", right: "Impuls bertahap menurunkan momentum hingga nol" },
          { left: "Penerjun menekuk lutut saat mendarat", right: "Waktu berhenti lebih lama, gaya pada kaki mengecil" },
          { left: "Tabrakan dasbor keras", right: "Waktu berhenti sangat singkat, gaya pada tubuh sangat besar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Jaring Pengaman Pemadam Kebakaran",
        html: "Dulu pemadam kebakaran menggunakan jaring untuk menangkap orang yang melompat dari gedung terbakar. Mengapa jaring, bukan papan? Orang yang melompat punya momentum besar saat tiba di bawah, dan momentum itu harus dijadikan nol. Jaring yang lentur memberi waktu beberapa persepuluh detik untuk menghentikan tubuh, sehingga gaya yang diterima tubuh kecil dan aman. Papan kaku menghentikan tubuh seketika, dan gaya sebesar itu mematikan. Perubahan momentum sama, tetapi jaring mengaturnya lewat waktu.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang teoremanya terasa wajar. <strong>Teorema impuls-momentum: J = Delta p</strong>, atau ditulis lengkap <strong>F_rata . t = m.v' - m.v</strong>. Ini sebenarnya hukum Newton kedua dalam bahasa momentum, sebab F = Delta p / t. Karena ruas kiri adalah impuls dan ruas kanan adalah perubahan momentum, kita bisa mengatur gaya dengan mengatur waktu, atau sebaliknya. Satu rumus, banyak penyelamat nyawa.",
      },
      {
        type: "takeaways",
        items: [
          "Teorema impuls-momentum: F_rata . t = m.v' - m.v.",
          "Ini adalah bentuk lain hukum Newton kedua, ditulis dengan momentum.",
          "Untuk perubahan momentum tertentu, waktu lebih lama berarti gaya lebih kecil.",
          "Saat benda memantul, perubahan momentum menjumlahkan laju datang dan laju pantul (perhatikan tanda).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Teorema impuls-momentum ditulis sebagai?",
            options: ["F.t = m.v' - m.v", "F = m.v", "p = F/t", "J = 1/2 m v^2"],
            answer: 0,
            explain: "Impuls (F.t) sama dengan perubahan momentum (m.v' - m.v).",
          },
          {
            q: "Benda 2 kg dari 0 menjadi 6 m/s dalam 3 s. Gaya rata-ratanya?",
            options: ["4 N", "12 N", "36 N", "1 N"],
            answer: 0,
            explain: "F = m(v'-v)/t = 2 x 6 / 3 = 4 N.",
          },
          {
            q: "Mengapa menarik tangan saat menangkap bola mengurangi rasa sakit?",
            options: [
              "Mengurangi perubahan momentum bola",
              "Memperlama waktu berhenti sehingga gaya pada telapak mengecil",
              "Menambah massa bola",
              "Membuat bola berhenti tanpa gaya",
            ],
            answer: 1,
            explain: "Perubahan momentum sama, tetapi waktu lebih lama membuat gaya F = Delta p / t mengecil.",
          },
          {
            q: "Teorema impuls-momentum pada dasarnya adalah?",
            options: [
              "Hukum kekekalan energi",
              "Hukum Newton kedua dalam bahasa momentum",
              "Hukum gravitasi",
              "Hukum Hooke",
            ],
            answer: 1,
            explain: "Karena F = Delta p / t, teorema ini setara dengan F = ma yang ditulis lewat momentum.",
          },
          {
            q: "Bola 0,2 kg menumbuk dinding 5 m/s dan memantul 5 m/s berlawanan arah. Impuls dari dinding?",
            options: ["0 N.s", "1 N.s", "2 N.s", "0,5 N.s"],
            answer: 2,
            explain: "Delta p = 0,2 x (5 - (-5)) = 0,2 x 10 = 2 N.s.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "impuls-luas-grafik-gaya-waktu",
    levelId: "momentum-impuls",
    order: 4,
    title: "Impuls sebagai Luas Grafik Gaya-Waktu",
    summary:
      "Gaya saat tumbukan tidak pernah konstan; ia melonjak lalu hilang dalam sekejap. Bagaimana menghitung impulsnya? Jawabannya tersembunyi sebagai luas grafik. Kita lihat dulu.",
    durationMin: 12,
    tags: ["fisika", "impuls", "grafik", "gaya-waktu"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat raket menyentuh bola tenis, gayanya tidak langsung 500 N lalu berhenti. Gaya itu mulai dari nol, melonjak ke puncak saat bola paling penyok, lalu turun lagi ke nol saat bola terlepas. Semuanya dalam beberapa milidetik. Lalu bagaimana kita menghitung impuls dari gaya yang terus berubah seperti itu? Ayo berpetualang dulu lewat grafik sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Gaya yang Berubah Terhadap Waktu",
        caption: "Gaya tumbukan nyata berbentuk lonjakan singkat, bukan garis datar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Gambar sebuah grafik dengan gaya di sumbu tegak dan waktu di sumbu datar. Untuk gaya tetap, grafiknya persegi panjang, dan impuls = gaya x waktu, yaitu persis luas persegi itu. Sekarang bayangkan gaya tumbukan yang naik lalu turun membentuk bukit. Impulsnya tetaplah luas daerah di bawah kurva itu. Amati: menghitung impuls sama dengan menghitung luas.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Luas di bawah kurva = impuls",
        html: "Apa pun bentuk grafik gaya terhadap waktu, impuls selalu sama dengan luas daerah di bawah kurvanya. Untuk grafik persegi panjang dan segitiga, luasnya mudah dihitung dengan rumus geometri biasa.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Gaya Tumbukan Raket pada Bola Tenis terhadap Waktu",
        unit: "newton",
        source: "ilustrasi edukatif; impuls = luas di bawah kurva",
        note: "Gaya naik dari nol ke puncak 500 N lalu turun ke nol selama 0,02 s. Impuls = luas di bawah kurva. Untuk bentuk segitiga ini, impuls = 1/2 x 0,02 s x 500 N = 5 N.s.",
        data: [
          { label: "0 ms", value: 0, color: "#a78bfa" },
          { label: "5 ms", value: 250, color: "#a78bfa" },
          { label: "10 ms", value: 500, color: "#a78bfa" },
          { label: "15 ms", value: 250, color: "#a78bfa" },
          { label: "20 ms", value: 0, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah gaya konstan 100 N bekerja selama 0,2 sekon (grafik persegi panjang). Berapa impulsnya, yaitu luas di bawah grafik?",
        answer: 20,
        tolerance: 0.01,
        suffix: " N.s",
        solution:
          "Grafik gaya tetap berbentuk persegi panjang dengan tinggi 100 N dan alas 0,2 s. Luas = 100 x 0,2 = <strong>20 N.s</strong>. Itulah impulsnya.",
        hint: "Luas persegi panjang = tinggi (gaya) x alas (waktu).",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah gaya tumbukan naik dari 0 ke puncak 100 N lalu turun lagi ke 0 selama total 0,2 sekon (grafik segitiga). Berapa impulsnya?",
        answer: 10,
        tolerance: 0.01,
        suffix: " N.s",
        solution:
          "Grafik berbentuk segitiga dengan alas 0,2 s dan tinggi 100 N. Luas segitiga = 1/2 x alas x tinggi = 1/2 x 0,2 x 100 = <strong>10 N.s</strong>. Persis separuh dari kasus gaya konstan, karena gaya rata-ratanya hanya 50 N.",
        hint: "Luas segitiga = 1/2 x alas x tinggi.",
      },
      {
        type: "case",
        title: "Studi Kasus: Sensor Gaya pada Uji Tabrak",
        html: "Di laboratorium uji tabrak (crash test), sensor merekam gaya pada boneka uji setiap milidetik. Grafiknya bukan garis datar, melainkan lonjakan tajam yang naik lalu turun. Insinyur tidak mengira-ngira gaya puncaknya saja; mereka menghitung luas di bawah kurva untuk mendapatkan impuls total, lalu membandingkannya dengan perubahan momentum boneka. Dengan mendesain mobil agar lonjakan gayanya lebih lebar dan rendah (waktu lebih lama, puncak lebih kecil), luas yang sama dicapai tanpa gaya puncak yang mematikan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Kini rumusnya bermakna. <strong>Impuls = luas di bawah grafik gaya terhadap waktu.</strong> Untuk gaya tetap, luasnya persegi panjang: <strong>J = F . t</strong>. Untuk gaya yang naik-turun seperti segitiga, <strong>J = 1/2 x alas x tinggi</strong>. Dan kita selalu bisa mengganti gaya yang rumit dengan satu gaya rata-rata: <strong>F_rata = J / t</strong>. Apa pun bentuknya, impuls tetaplah luas, dan luas itu sama dengan perubahan momentum.",
      },
      {
        type: "takeaways",
        items: [
          "Impuls sama dengan luas daerah di bawah grafik gaya terhadap waktu.",
          "Gaya tetap memberi grafik persegi panjang: J = F.t.",
          "Gaya yang naik lalu turun memberi grafik segitiga: J = 1/2 x alas x tinggi.",
          "Gaya rata-rata = impuls dibagi waktu (F_rata = J / t), berapa pun bentuk grafiknya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Impuls pada grafik gaya-terhadap-waktu ditunjukkan oleh?",
            options: ["Kemiringan grafik", "Luas di bawah kurva", "Titik puncak saja", "Panjang sumbu waktu"],
            answer: 1,
            explain: "Impuls selalu sama dengan luas daerah di bawah grafik gaya terhadap waktu.",
          },
          {
            q: "Gaya tetap 50 N selama 0,4 s. Luas grafiknya (impuls)?",
            options: ["20 N.s", "125 N.s", "0,008 N.s", "50 N.s"],
            answer: 0,
            explain: "Persegi panjang: 50 x 0,4 = 20 N.s.",
          },
          {
            q: "Grafik segitiga: puncak 200 N, alas waktu 0,1 s. Impulsnya?",
            options: ["20 N.s", "10 N.s", "200 N.s", "2 N.s"],
            answer: 1,
            explain: "1/2 x 0,1 x 200 = 10 N.s.",
          },
          {
            q: "Dua tumbukan punya impuls sama, tetapi yang satu waktunya dua kali lebih lama. Gaya rata-ratanya?",
            options: [
              "Sama saja",
              "Yang waktunya lebih lama punya gaya rata-rata setengahnya",
              "Yang waktunya lebih lama punya gaya rata-rata dua kali",
              "Tidak bisa ditentukan",
            ],
            answer: 1,
            explain: "F_rata = J / t; impuls sama tetapi waktu dua kali berarti gaya rata-rata setengahnya.",
          },
          {
            q: "Mengapa insinyur uji tabrak menghitung luas kurva, bukan gaya puncak saja?",
            options: [
              "Karena gaya puncak tidak penting",
              "Karena luas memberi impuls total yang sama dengan perubahan momentum",
              "Karena luas selalu nol",
              "Karena grafiknya selalu persegi panjang",
            ],
            answer: 1,
            explain: "Impuls total (luas kurva) sama dengan perubahan momentum, dasar untuk menilai keselamatan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "aplikasi-keselamatan-dan-olahraga",
    levelId: "momentum-impuls",
    order: 5,
    title: "Aplikasi: Keselamatan dan Olahraga",
    summary:
      "Helm, sarung tinju, matras pesenam, dan sepatu lari empuk. Semua memakai satu trik fisika yang sama. Kita temukan dulu polanya sebelum menulis rumus.",
    durationMin: 12,
    tags: ["fisika", "impuls", "keselamatan", "aplikasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Apa hubungan antara helm sepeda, sarung tinju, matras pesenam, dan sol sepatu lari yang empuk? Semuanya lembut, dan semuanya menyelamatkan tubuh dari benturan. Bukan kebetulan. Ada satu prinsip fisika yang dipakai berulang di balik semua benda pelindung itu. Ayo berpetualang dulu menemukan polanya sebelum kita rumuskan.",
      },
      {
        type: "video",
        comp: "MomentumVideo",
        title: "Video: Melembutkan Benturan",
        caption: "Bahan empuk bekerja dengan memperpanjang waktu berhenti, bukan menghilangkan momentum.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Jatuhkan telur ke lantai keras: pecah. Jatuhkan telur yang sama ke bantal: utuh. Momentum telur saat tiba di bawah persis sama pada kedua kasus, dan harus dijadikan nol. Bedanya, bantal memberi waktu lebih lama untuk berhenti, sehingga gaya pada cangkang kecil. Amati: setiap pelindung tubuh adalah 'bantal' yang memperpanjang waktu berhenti.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bukan menghilangkan momentum, tapi mengulur waktu",
        html: "Pelindung tidak membuat momentum lenyap. Momentum tetap harus dihentikan sampai nol. Yang dilakukan pelindung adalah mengulur waktu berhenti dari sangat singkat menjadi sedikit lebih lama, dan itu sudah cukup menurunkan gaya secara drastis.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Gaya pada Pesenam 60 kg saat Mendarat dari Kecepatan 5 m/s",
        unit: "newton",
        source: "ilustrasi edukatif (Delta p = 60 x 5 = 300 kg.m/s)",
        note: "Perubahan momentum sama (300 kg.m/s). Mendarat di lantai keras (0,02 s) memberi gaya 15000 N, sedangkan matras tebal (0,3 s) menurunkannya menjadi 1000 N. Itulah gunanya matras.",
        data: [
          { label: "Lantai keras (0,02 s)", value: 15000, color: "#f87171" },
          { label: "Matras tipis (0,1 s)", value: 3000, color: "#fbbf24" },
          { label: "Matras tebal (0,3 s)", value: 1000, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Seorang pesenam mendarat dengan perubahan momentum 300 kg.m/s. Jika matras membuatnya berhenti dalam 0,3 sekon, berapa gaya rata-rata yang diterima tubuhnya?",
        answer: 1000,
        tolerance: 1,
        suffix: " N",
        solution:
          "Gaya rata-rata = Delta p / t = 300 / 0,3 = <strong>1000 N</strong>. Bandingkan dengan mendarat di lantai keras (0,02 s) yang memberi 15000 N. Matras menurunkan gaya hingga 15 kali lipat.",
        hint: "Gaya = perubahan momentum dibagi waktu berhenti.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kepala pengendara mengalami perubahan momentum 250 kg.m/s saat terbentur. Helm memperpanjang waktu benturan dari 0,01 s menjadi 0,1 s. Berapa gaya rata-rata dengan helm?",
        answer: 2500,
        tolerance: 1,
        suffix: " N",
        solution:
          "Dengan helm: gaya = 250 / 0,1 = <strong>2500 N</strong>. Tanpa helm: 250 / 0,01 = 25000 N. Helm menurunkan gaya sepuluh kali lipat hanya dengan mengulur waktu benturan.",
        hint: "Pakai gaya rata-rata = perubahan momentum dibagi waktu, dengan waktu yang baru.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan: alat ini melindungi dengan memperpanjang waktu kontak, atau dirancang untuk gaya singkat yang besar?",
        buckets: ["Memperpanjang waktu (melindungi)", "Memperbesar gaya singkat (memukul)"],
        items: [
          { text: "Sarung tinju yang empuk", bucket: "Memperpanjang waktu (melindungi)" },
          { text: "Sol sepatu lari yang tebal", bucket: "Memperpanjang waktu (melindungi)" },
          { text: "Matras pendaratan pesenam", bucket: "Memperpanjang waktu (melindungi)" },
          { text: "Kepala palu baja yang keras", bucket: "Memperbesar gaya singkat (memukul)" },
          { text: "Ujung pahat yang tajam dan kaku", bucket: "Memperbesar gaya singkat (memukul)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Sarung Tinju Bukan untuk Petarung",
        html: "Banyak yang mengira sarung tinju melindungi tangan petinju. Sebagian benar, tapi fungsi utamanya melindungi lawan, terutama otak di dalam tempurung kepala. Bantalan empuk sarung memperpanjang waktu kontak setiap pukulan, sehingga gaya puncak yang sampai ke kepala lawan berkurang. Tanpa sarung, pukulan keras dengan waktu kontak sangat singkat menghasilkan gaya puncak yang jauh lebih merusak. Prinsipnya sama dengan helm dan airbag: perubahan momentum diatur lewat waktu, bukan ditiadakan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Satu rumus menyatukan semuanya. <strong>F_rata = Delta p / t</strong>. Karena perubahan momentum Delta p saat benturan sudah tertentu (dari massa dan kecepatan), satu-satunya yang bisa kita atur adalah waktu t. Memperbesar t lewat bahan empuk akan memperkecil gaya F. Itulah resep tunggal di balik helm, sarung tinju, matras, sepatu empuk, airbag, dan jaring penyelamat. Fisika impuls yang sama, ribuan penerapan.",
      },
      {
        type: "takeaways",
        items: [
          "Semua pelindung benturan bekerja dengan memperpanjang waktu kontak, bukan menghilangkan momentum.",
          "Gaya rata-rata F = Delta p / t; memperbesar waktu memperkecil gaya.",
          "Helm, sarung tinju, matras, dan sepatu empuk memakai prinsip impuls yang identik.",
          "Alat untuk memukul justru dibuat keras agar waktu kontak singkat dan gaya puncak besar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bahan empuk pelindung tubuh bekerja dengan cara?",
            options: [
              "Menghilangkan momentum tubuh",
              "Memperpanjang waktu berhenti sehingga gaya mengecil",
              "Menambah kecepatan tubuh",
              "Mengubah massa tubuh",
            ],
            answer: 1,
            explain: "Momentum tetap dihentikan, tetapi waktu lebih lama membuat gaya F = Delta p / t mengecil.",
          },
          {
            q: "Perubahan momentum 200 kg.m/s dihentikan dalam 0,2 s. Gaya rata-ratanya?",
            options: ["1000 N", "40 N", "400 N", "100 N"],
            answer: 0,
            explain: "F = 200 / 0,2 = 1000 N.",
          },
          {
            q: "Mengapa kepala palu dibuat keras, bukan empuk?",
            options: [
              "Agar waktu kontak singkat dan gaya puncak besar",
              "Agar lebih ringan",
              "Agar momentum hilang",
              "Agar lebih aman bagi paku",
            ],
            answer: 0,
            explain: "Untuk memukul, kita justru ingin gaya besar lewat waktu kontak yang sangat singkat.",
          },
          {
            q: "Telur jatuh ke bantal tidak pecah karena bantal?",
            options: [
              "Mengurangi momentum telur sebelum tiba",
              "Memperlama waktu berhenti sehingga gaya pada cangkang kecil",
              "Menambah gaya pada telur",
              "Menghilangkan gravitasi",
            ],
            answer: 1,
            explain: "Momentum saat tiba sama, tetapi waktu berhenti yang lebih lama menurunkan gaya.",
          },
          {
            q: "Fungsi utama bantalan empuk pada sarung tinju adalah?",
            options: [
              "Menambah berat pukulan",
              "Memperpanjang waktu kontak agar gaya puncak ke kepala lawan berkurang",
              "Mempercepat tangan petinju",
              "Menghilangkan momentum tangan",
            ],
            answer: 1,
            explain: "Bantalan mengulur waktu kontak sehingga gaya puncak yang sampai ke kepala lawan mengecil.",
          },
        ],
      },
    ],
  },
];
