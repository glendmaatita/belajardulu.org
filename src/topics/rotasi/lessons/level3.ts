import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "momentum-sudut",
    levelId: "momentum-energi-sudut",
    order: 1,
    title: "Momentum Sudut",
    summary:
      "Gasing yang berputar sulit dijatuhkan, roda sepeda yang melaju enggan miring. Ada 'kuantitas putaran' yang melekat pada benda berputar.",
    durationMin: 13,
    tags: ["fisika", "rotasi", "momentum sudut", "kekekalan", "gasing"],
    blocks: [
      {
        type: "paragraph",
        html: "Roda sepeda yang diam mudah dijatuhkan ke samping. Tetapi roda yang berputar kencang terasa keras kepala: ia menolak dimiringkan dan tetap tegak. Apa yang membuatnya begitu kokoh? Ada besaran tersembunyi yang melekat pada benda berputar, sejenis 'momentum' versi putaran. Ayo telusuri kisahnya sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "MomentumVideo",
        title: "Video: Kuantitas Gerak yang Berputar",
        caption: "Momentum sudut adalah momentum versi berputar, melekat pada benda yang berotasi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pada gerak lurus, benda yang berat dan cepat punya momentum besar dan sulit dihentikan. Pada rotasi, ada padanannya: benda dengan momen inersia besar dan berputar cepat punya <strong>momentum sudut</strong> besar, dan sulit dihentikan atau diubah arah putarnya. Itulah mengapa gasing yang berputar kencang berdiri tegak begitu lama.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Cermin dari p = m·v",
        html: "Momentum linear adalah massa dikali kecepatan (p = m·v). Momentum sudut tinggal menukar besarannya: massa menjadi <strong>momen inersia</strong>, kecepatan menjadi <strong>kecepatan sudut</strong>. Hasilnya L = I·ω. Makin besar momen inersia atau makin cepat berputar, makin besar momentum sudutnya. Satuannya kg·m²/s.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Momentum Sudut Roda (I = 0,5 kg·m²)",
        unit: "kg·m²/s",
        source: "perhitungan L = I·ω dengan I tetap 0,5 kg·m²",
        note: "Momen inersia tetap 0,5 kg·m². Momentum sudut tumbuh lurus dengan kecepatan sudut: putar dua kali lebih cepat, momentum sudut pun dua kali lipat.",
        data: [
          { label: "ω = 4 rad/s", value: 2, color: "#f472b6" },
          { label: "ω = 8 rad/s", value: 4, color: "#e879f9" },
          { label: "ω = 12 rad/s", value: 6, color: "#c084fc" },
          { label: "ω = 16 rad/s", value: 8, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah roda dengan momen inersia 0,5 kg·m² berputar pada 4 rad/s. Berapa momentum sudutnya? (L = I·ω)",
        answer: 2,
        tolerance: 0.01,
        suffix: " kg·m²/s",
        solution:
          "Momentum sudut L = I × ω = 0,5 × 4 = <strong>2 kg·m²/s</strong>. Inilah 'kuantitas putaran' yang melekat pada roda.",
        hint: "Kalikan momen inersia dengan kecepatan sudut.",
      },
      {
        type: "calcExercise",
        prompt:
          "Roda gila bermomentum sudut 30 kg·m²/s berputar pada 6 rad/s. Berapa momen inersianya? (I = L/ω)",
        answer: 5,
        tolerance: 0.01,
        suffix: " kg·m²",
        solution:
          "Dari L = I·ω, maka I = L/ω = 30/6 = <strong>5 kg·m²</strong>. Membalik rumus untuk mencari momen inersia.",
        hint: "Bagi momentum sudut dengan kecepatan sudut.",
      },
      {
        type: "calcExercise",
        prompt:
          "Massa titik 2 kg berputar pada jari-jari 0,5 m dengan kecepatan sudut 10 rad/s. Berapa momentum sudutnya? (I = m·r² dulu, lalu L = I·ω)",
        answer: 5,
        tolerance: 0.01,
        suffix: " kg·m²/s",
        solution:
          "I = m·r² = 2 × 0,5² = 0,5 kg·m². Lalu L = I·ω = 0,5 × 10 = <strong>5 kg·m²/s</strong>.",
        hint: "Hitung momen inersia massa titik dulu, baru kalikan kecepatan sudut.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan besaran gerak lurus dengan padanan rotasinya.",
        pairs: [
          { left: "Momentum p = m·v", right: "Momentum sudut L = I·ω" },
          { left: "Massa m", right: "Momen inersia I" },
          { left: "Kecepatan v", right: "Kecepatan sudut ω" },
          { left: "Satuan kg·m/s", right: "Satuan kg·m²/s" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan benda berdasarkan momentum sudutnya besar atau kecil.",
        buckets: ["Momentum sudut besar", "Momentum sudut kecil"],
        items: [
          { text: "Roda gila berat berputar kencang", bucket: "Momentum sudut besar" },
          { text: "Gangsing kecil berputar pelan", bucket: "Momentum sudut kecil" },
          { text: "Turbin besar pada putaran tinggi", bucket: "Momentum sudut besar" },
          { text: "Kelereng yang nyaris berhenti berputar", bucket: "Momentum sudut kecil" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Roda Gila dan Roda Sepeda Tegak",
        html: "Roda sepeda yang berputar kencang punya momentum sudut besar dan menolak dimiringkan, itulah mengapa sepeda yang melaju lebih mudah dijaga tegak daripada sepeda diam. Prinsip yang sama dipakai pada roda gila penyimpan energi dan giroskop navigasi. Para perancang tidak menghafal rumus; mereka tahu bahwa momentum sudut yang besar membuat sumbu putar 'keras kepala' mempertahankan arahnya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya jelas. Momentum sudut adalah momen inersia dikali kecepatan sudut: <strong>L = I·ω</strong>, satuannya kg·m²/s. Ia cermin dari momentum linear p = m·v. Untuk massa titik, L = m·r²·ω = m·v·r. Besaran inilah yang akan kekal bila tak ada torsi luar, kisah indah yang kita kupas di pelajaran berikutnya.",
      },
      {
        type: "takeaways",
        items: [
          "Momentum sudut L = I·ω adalah 'kuantitas putaran' yang melekat pada benda berputar.",
          "Ia cermin rotasi dari momentum linear p = m·v.",
          "Makin besar momen inersia atau kecepatan sudut, makin besar momentum sudut.",
          "Momentum sudut besar membuat sumbu putar keras kepala mempertahankan arahnya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus momentum sudut adalah?",
            options: ["L = m·v", "L = I·ω", "L = ½I·ω²", "L = τ·r"],
            answer: 1,
            explain: "Momentum sudut L = I·ω, hasil kali momen inersia dan kecepatan sudut.",
          },
          {
            q: "Satuan momentum sudut adalah?",
            options: ["kg·m/s", "kg·m²/s", "N·m", "J"],
            answer: 1,
            explain: "L = I·ω berarti kg·m² × rad/s = kg·m²/s.",
          },
          {
            q: "Roda I = 2 kg·m² berputar 5 rad/s. Momentum sudutnya?",
            options: ["2,5 kg·m²/s", "7 kg·m²/s", "10 kg·m²/s", "25 kg·m²/s"],
            answer: 2,
            explain: "L = I·ω = 2 × 5 = 10 kg·m²/s.",
          },
          {
            q: "Momentum sudut adalah padanan rotasi dari?",
            options: ["Gaya", "Momentum linear", "Energi", "Percepatan"],
            answer: 1,
            explain: "L = I·ω adalah cermin rotasi dari momentum linear p = m·v.",
          },
          {
            q: "Mengapa roda sepeda yang berputar sulit dimiringkan?",
            options: [
              "Karena lebih berat",
              "Karena momentum sudutnya besar dan menolak perubahan arah",
              "Karena gravitasi hilang",
              "Karena tidak ada gesekan",
            ],
            answer: 1,
            explain: "Momentum sudut besar membuat sumbu putar mempertahankan arahnya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kekekalan-momentum-sudut",
    levelId: "momentum-energi-sudut",
    order: 2,
    title: "Kekekalan Momentum Sudut",
    summary:
      "Penari es menarik tangan dan tiba-tiba berputar kencang. Bukan sihir, melainkan kekekalan momentum sudut. Rumus menanti di akhir.",
    durationMin: 14,
    tags: ["fisika", "rotasi", "momentum sudut", "kekekalan", "penari es"],
    blocks: [
      {
        type: "paragraph",
        html: "Seorang penari es berputar dengan kedua tangan terentang. Lalu ia menarik tangannya rapat ke tubuh, dan seketika putarannya melesat lebih cepat, tanpa ada yang mendorong. Dari mana datangnya kecepatan itu? Inilah salah satu kisah paling indah dalam fisika rotasi. Ayo telusuri dulu sebelum menulis rumus.",
      },
      {
        type: "video",
        comp: "MomentumVideo",
        title: "Video: Saat Putaran Melesat Sendiri",
        caption: "Momentum sudut kekal bila tak ada torsi luar; itulah rahasia penari es.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Saat penari menarik tangan, ia mendekatkan massanya ke poros, sehingga <strong>momen inersianya mengecil</strong>. Tetapi alam menjaga sesuatu tetap konstan: hasil kali momen inersia dengan kecepatan sudut. Bila momen inersia turun, kecepatan sudut harus naik agar perkaliannya tetap. Itulah mengapa putarannya melesat tanpa dorongan apa pun.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kapan momentum sudut kekal?",
        html: "Momentum sudut total tetap selama <strong>tidak ada torsi luar</strong> yang bekerja. Penari es di atas es nyaris tanpa gesekan, jadi torsi luarnya hampir nol, dan L = I·ω terjaga konstan. Saat I mengecil (tangan ditarik), ω membesar. Bila I membesar (tangan dibuka), ω mengecil. Hasil kalinya selalu sama.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kecepatan Sudut Penari saat Momen Inersia Turun (L = 8 kg·m²/s)",
        unit: "rad/s",
        source: "perhitungan ω = L/I dengan L kekal 8 kg·m²/s",
        note: "Momentum sudut kekal di 8 kg·m²/s. Saat penari menarik tangan dan momen inersianya turun, kecepatan sudut melonjak naik. Hasil kali I×ω selalu 8.",
        data: [
          { label: "I = 4 kg·m²", value: 2, color: "#f472b6" },
          { label: "I = 3 kg·m²", value: 2.67, color: "#e879f9" },
          { label: "I = 2 kg·m²", value: 4, color: "#c084fc" },
          { label: "I = 1 kg·m²", value: 8, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Penari berputar dengan momen inersia 4 kg·m² pada 2 rad/s, lalu menarik tangan hingga momen inersianya menjadi 2 kg·m². Berapa kecepatan sudut barunya? (I₁ω₁ = I₂ω₂)",
        answer: 4,
        tolerance: 0.01,
        suffix: " rad/s",
        solution:
          "Momentum sudut kekal: I₁ω₁ = I₂ω₂, jadi 4 × 2 = 2 × ω₂, maka ω₂ = 8/2 = <strong>4 rad/s</strong>. Momen inersia separuh, kecepatan sudut menjadi dua kali lipat.",
        hint: "Pertahankan hasil kali I×ω tetap sama, lalu cari ω yang baru.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah piringan I = 6 kg·m² berputar 3 rad/s. Sekeping tanah liat menempel hingga I menjadi 9 kg·m². Berapa kecepatan sudut barunya?",
        answer: 2,
        tolerance: 0.01,
        suffix: " rad/s",
        solution:
          "I₁ω₁ = I₂ω₂, jadi 6 × 3 = 9 × ω₂, maka ω₂ = 18/9 = <strong>2 rad/s</strong>. Momen inersia bertambah, putaran melambat.",
        hint: "Samakan I×ω sebelum dan sesudah, lalu cari ω baru.",
      },
      {
        type: "calcExercise",
        prompt:
          "Bintang berputar dengan L = 40 kg·m²/s mengerut hingga momen inersianya 5 kg·m². Berapa kecepatan sudutnya sekarang? (ω = L/I)",
        answer: 8,
        tolerance: 0.01,
        suffix: " rad/s",
        solution:
          "Karena L kekal, ω = L/I = 40/5 = <strong>8 rad/s</strong>. Bintang yang mengerut berputar makin cepat, seperti penari es kosmik.",
        hint: "Bagi momentum sudut yang kekal dengan momen inersia baru.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan: pada situasi mana momentum sudut tetap kekal, dan pada mana tidak (ada torsi luar)?",
        buckets: ["Momentum sudut kekal", "Tidak kekal (ada torsi luar)"],
        items: [
          { text: "Penari es menarik tangan ke tubuh", bucket: "Momentum sudut kekal" },
          { text: "Gasing diputar di atas meja licin tanpa gesekan", bucket: "Momentum sudut kekal" },
          { text: "Roda sepeda direm hingga berhenti", bucket: "Tidak kekal (ada torsi luar)" },
          { text: "Komidi putar didorong tangan dari luar", bucket: "Tidak kekal (ada torsi luar)" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan peristiwa dengan akibatnya pada kekekalan momentum sudut.",
        pairs: [
          { left: "Penari menarik tangan (I turun)", right: "ω naik, putaran melesat" },
          { left: "Penari membuka tangan (I naik)", right: "ω turun, putaran melambat" },
          { left: "Bintang mengerut (I turun)", right: "Berputar makin cepat" },
          { left: "Ada torsi luar bekerja", right: "Momentum sudut tidak kekal" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Penari Es dan Bintang Neutron",
        html: "Saat penari es membuka tangan, momen inersianya besar dan ia berputar pelan. Saat ia merapatkan tangan ke tubuh, momen inersianya mengecil dan ω melonjak, karena momentum sudut L = I·ω harus tetap (es nyaris tanpa gesekan). Hukum yang sama persis bekerja di langit: ketika bintang masif mengerut menjadi bintang neutron yang kecil padat, momen inersianya anjlok dan ia berputar puluhan kali per detik. Penari maupun bintang tidak menghafal rumus; keduanya tunduk pada kekekalan momentum sudut.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Kini rumusnya jelas. Bila tak ada torsi luar, momentum sudut kekal: <strong>L = I·ω = konstan</strong>, sehingga <strong>I₁ω₁ = I₂ω₂</strong>. Mengecilkan momen inersia membuat kecepatan sudut melonjak, dan sebaliknya. Inilah hukum kekekalan momentum sudut, satu dari hukum kekekalan paling mendasar di alam, sejajar dengan kekekalan energi dan momentum linear.",
      },
      {
        type: "takeaways",
        items: [
          "Tanpa torsi luar, momentum sudut kekal: I₁ω₁ = I₂ω₂.",
          "Mengecilkan momen inersia membuat kecepatan sudut melonjak (kisah penari es).",
          "Menambah momen inersia membuat putaran melambat.",
          "Hukum yang sama menjelaskan penari es hingga putaran cepat bintang neutron.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Momentum sudut kekal bila?",
            options: [
              "Selalu, tanpa syarat",
              "Tidak ada torsi luar yang bekerja",
              "Hanya saat benda diam",
              "Hanya untuk benda berat",
            ],
            answer: 1,
            explain: "Momentum sudut kekal selama jumlah torsi luar nol.",
          },
          {
            q: "Mengapa penari es berputar lebih cepat saat menarik tangan?",
            options: [
              "Karena ia mendorong lantai",
              "Karena momen inersia mengecil sedang momentum sudut kekal",
              "Karena energi hilang",
              "Karena gravitasi membantu",
            ],
            answer: 1,
            explain: "L = I·ω kekal, jadi saat I mengecil, ω harus membesar.",
          },
          {
            q: "Piringan I = 4 kg·m², ω = 6 rad/s. Bila I menjadi 8 kg·m², ω baru?",
            options: ["2 rad/s", "3 rad/s", "6 rad/s", "12 rad/s"],
            answer: 1,
            explain: "I₁ω₁ = I₂ω₂: 4×6 = 8×ω₂, jadi ω₂ = 24/8 = 3 rad/s.",
          },
          {
            q: "Persamaan kekekalan momentum sudut adalah?",
            options: ["I₁ω₁ = I₂ω₂", "F₁ = F₂", "½I₁ω₁² = ½I₂ω₂²", "τ = I·α"],
            answer: 0,
            explain: "Tanpa torsi luar, I₁ω₁ = I₂ω₂.",
          },
          {
            q: "Bintang yang mengerut berputar makin cepat karena?",
            options: [
              "Massanya bertambah",
              "Momen inersianya turun sedang momentum sudut kekal",
              "Gravitasi mendorongnya",
              "Energinya bertambah dari luar",
            ],
            answer: 1,
            explain: "Mengerut menurunkan I, sehingga ω naik agar L tetap kekal.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "energi-kinetik-rotasi",
    levelId: "momentum-energi-sudut",
    order: 3,
    title: "Energi Kinetik Rotasi",
    summary:
      "Benda berputar menyimpan energi gerak, walau pusatnya diam. Roda gila memanfaatkannya untuk menyimpan tenaga. Rumus menyusul di akhir.",
    durationMin: 14,
    tags: ["fisika", "rotasi", "energi kinetik", "roda gila", "energi"],
    blocks: [
      {
        type: "paragraph",
        html: "Roda gerinda yang berputar kencang tetap menyimpan tenaga walau motornya dimatikan; ia terus berputar dan masih bisa mengasah. Padahal pusatnya diam di tempat. Dari mana energi itu? Benda yang berputar menyimpan <strong>energi kinetik rotasi</strong>, energi gerak yang lahir dari putaran. Ayo telusuri kisahnya sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "MomentumVideo",
        title: "Video: Energi yang Tersimpan dalam Putaran",
        caption: "Benda berputar punya energi kinetik, sama seperti benda yang melaju lurus.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pada gerak lurus, energi kinetik adalah ½mv²: makin berat dan makin cepat, makin besar energinya, dan kecepatan dikuadratkan. Pada rotasi, ceritanya cermin: makin besar momen inersia dan makin cepat berputar, makin besar energinya, dengan <strong>kecepatan sudut dikuadratkan</strong>. Itulah mengapa menggandakan putaran melipatempatkan energinya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Cermin dari ½mv²",
        html: "Energi kinetik translasi adalah ½mv². Energi kinetik rotasi tinggal menukar: massa menjadi <strong>momen inersia</strong>, kecepatan menjadi <strong>kecepatan sudut</strong>. Hasilnya ½Iω². Karena ω dikuadratkan, kecepatan sudut sangat menentukan: itulah sebabnya roda gila menyimpan energi besar pada putaran tinggi.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Energi Rotasi sebuah Roda Gila (I = 2 kg·m²)",
        unit: "joule",
        source: "perhitungan Ek = ½ I ω²",
        note: "Momen inersia tetap 2 kg·m². Karena energi bergantung pada ω², menggandakan kecepatan sudut melipatempatkan energi: 10 ke 20 rad/s membuat energi melonjak dari 100 ke 400 J.",
        data: [
          { label: "ω = 10 rad/s", value: 100, color: "#f472b6" },
          { label: "ω = 20 rad/s", value: 400, color: "#e879f9" },
          { label: "ω = 30 rad/s", value: 900, color: "#c084fc" },
          { label: "ω = 40 rad/s", value: 1600, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Roda gila dengan momen inersia 2 kg·m² berputar pada 3 rad/s. Berapa energi rotasinya? (Ek = ½ I ω²)",
        answer: 9,
        tolerance: 0.01,
        suffix: " J",
        solution:
          "Ek rotasi = ½ × I × ω² = ½ × 2 × 3² = ½ × 2 × 9 = <strong>9 J</strong>. Perhatikan ω dikuadratkan, jadi kecepatan sangat menentukan energi.",
        hint: "Kuadratkan kecepatan sudut, kalikan momen inersia, lalu bagi dua.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah silinder I = 0,5 kg·m² berputar 8 rad/s. Berapa energi kinetik rotasinya?",
        answer: 16,
        tolerance: 0.1,
        suffix: " J",
        solution:
          "Ek = ½ I ω² = ½ × 0,5 × 8² = ½ × 0,5 × 64 = <strong>16 J</strong>. Walau momen inersianya kecil, putaran cepat menyimpan energi lumayan.",
        hint: "Kuadratkan 8, kalikan 0,5, lalu bagi dua.",
      },
      {
        type: "calcExercise",
        prompt:
          "Roda gila menyimpan 200 J energi rotasi pada momen inersia 4 kg·m². Berapa kecepatan sudutnya? (ω = √(2Ek/I))",
        answer: 10,
        tolerance: 0.1,
        suffix: " rad/s",
        solution:
          "Dari Ek = ½Iω², maka ω² = 2Ek/I = (2×200)/4 = 100, sehingga ω = √100 = <strong>10 rad/s</strong>.",
        hint: "Balik rumus: ω = akar dari (2 × energi / momen inersia).",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan energi gerak lurus dengan padanan rotasinya.",
        pairs: [
          { left: "Energi kinetik ½mv²", right: "Energi rotasi ½Iω²" },
          { left: "Massa m", right: "Momen inersia I" },
          { left: "Kecepatan v", right: "Kecepatan sudut ω" },
          { left: "Satuan energi", right: "Joule (J)" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Untuk roda gila yang sama, kelompokkan keadaan menyimpan energi besar atau kecil.",
        buckets: ["Energi rotasi besar", "Energi rotasi kecil"],
        items: [
          { text: "Berputar sangat cepat (ω besar)", bucket: "Energi rotasi besar" },
          { text: "Nyaris berhenti berputar", bucket: "Energi rotasi kecil" },
          { text: "Putaran penuh saat mesin menyala", bucket: "Energi rotasi besar" },
          { text: "Putaran pelan saat mesin mau mati", bucket: "Energi rotasi kecil" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Roda Gila Penyimpan Energi",
        html: "Beberapa bus dan kereta memakai roda gila berputar sangat cepat untuk menyimpan energi pengereman, lalu memakainya kembali saat berakselerasi. Karena energi rotasi ½Iω² bergantung pada kuadrat kecepatan sudut, perancang memilih putaran setinggi mungkin (hingga puluhan ribu rpm) agar satu roda gila kecil menyimpan energi besar. Mereka tidak menghafal rumus; mereka mengeksploitasi fakta bahwa energi melonjak dengan kuadrat putaran.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya wajar. Energi kinetik rotasi adalah <strong>Ek = ½ I ω²</strong>, cermin dari ½mv². Karena ω dikuadratkan, menggandakan kecepatan sudut melipatempatkan energi. Catat bedanya dengan momentum sudut (L = I·ω yang hanya berbanding lurus dengan ω): energi dan momentum sudut adalah dua besaran berbeda yang patuh pada aturan berbeda.",
      },
      {
        type: "takeaways",
        items: [
          "Benda berputar menyimpan energi kinetik rotasi Ek = ½ I ω².",
          "Ia cermin rotasi dari energi kinetik translasi ½mv².",
          "Karena ω dikuadratkan, menggandakan putaran melipatempatkan energi.",
          "Energi rotasi (½Iω²) berbeda dari momentum sudut (I·ω) dan patuh aturan berbeda.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus energi kinetik rotasi adalah?",
            options: ["Ek = ½mv²", "Ek = ½Iω²", "Ek = Iω", "Ek = ½Iω"],
            answer: 1,
            explain: "Energi kinetik rotasi Ek = ½Iω², cermin dari ½mv².",
          },
          {
            q: "Roda I = 2 kg·m² berputar 5 rad/s. Energi rotasinya?",
            options: ["10 J", "25 J", "50 J", "100 J"],
            answer: 1,
            explain: "Ek = ½ I ω² = ½ × 2 × 5² = ½ × 2 × 25 = 25 J.",
          },
          {
            q: "Jika kecepatan sudut digandakan, energi rotasi menjadi?",
            options: ["2 kali", "3 kali", "4 kali", "tetap"],
            answer: 2,
            explain: "Karena ω dikuadratkan, menggandakan ω membuat energi 2² = 4 kali lipat.",
          },
          {
            q: "Apa beda energi rotasi dan momentum sudut?",
            options: [
              "Sama saja",
              "Energi = ½Iω² (ω kuadrat), momentum sudut = Iω (ω pangkat satu)",
              "Energi tidak bergantung ω",
              "Momentum sudut diukur dalam joule",
            ],
            answer: 1,
            explain: "Energi rotasi ½Iω² bergantung pada ω², sedangkan momentum sudut I·ω berbanding lurus ω.",
          },
          {
            q: "Mengapa roda gila dibuat berputar sangat cepat untuk menyimpan energi?",
            options: [
              "Agar lebih ringan",
              "Karena energi ½Iω² melonjak dengan kuadrat kecepatan sudut",
              "Agar momen inersianya nol",
              "Agar tidak panas",
            ],
            answer: 1,
            explain: "Energi rotasi naik dengan ω², jadi putaran tinggi menyimpan energi besar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "torsi-dan-momentum-sudut",
    levelId: "momentum-energi-sudut",
    order: 4,
    title: "Torsi dan Perubahan Momentum Sudut",
    summary:
      "Untuk mengubah momentum sudut sebuah benda, dibutuhkan torsi yang bekerja selama waktu tertentu. Inilah impuls sudut. Rumus di akhir.",
    durationMin: 13,
    tags: ["fisika", "rotasi", "torsi", "momentum sudut", "impuls sudut"],
    blocks: [
      {
        type: "paragraph",
        html: "Untuk menghentikan roda gila yang berputar, rem harus bekerja beberapa saat; sekejap saja tidak cukup. Untuk membuat gangsing berputar kencang, tali ditarik selama beberapa waktu. Ternyata mengubah momentum sudut butuh dua hal: torsi <em>dan</em> waktu. Ayo telusuri hubungannya sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "MomentumVideo",
        title: "Video: Torsi yang Mengubah Putaran",
        caption: "Torsi yang bekerja selama waktu tertentu mengubah momentum sudut benda.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pada gerak lurus, gaya yang bekerja selama waktu tertentu mengubah momentum (impuls = F·t). Pada rotasi, padanannya: <strong>torsi yang bekerja selama waktu tertentu mengubah momentum sudut</strong>. Torsi besar dalam waktu singkat, atau torsi kecil dalam waktu lama, bisa memberi perubahan momentum sudut yang sama.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Torsi adalah laju perubahan L",
        html: "Sama seperti gaya adalah laju perubahan momentum (F = Δp/Δt), torsi adalah <strong>laju perubahan momentum sudut</strong>: τ = ΔL/Δt. Bila tak ada torsi (τ = 0), maka ΔL = 0, artinya momentum sudut kekal. Inilah akar dari hukum kekekalan momentum sudut yang kita pelajari sebelumnya.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perubahan Momentum Sudut dari Torsi 5 N·m",
        unit: "kg·m²/s",
        source: "perhitungan ΔL = τ·Δt dengan torsi tetap 5 N·m",
        note: "Torsi tetap 5 N·m. Makin lama torsi bekerja, makin besar perubahan momentum sudut. Inilah impuls sudut dalam angka nyata.",
        data: [
          { label: "t = 1 s", value: 5, color: "#f472b6" },
          { label: "t = 2 s", value: 10, color: "#e879f9" },
          { label: "t = 3 s", value: 15, color: "#c084fc" },
          { label: "t = 4 s", value: 20, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Torsi 5 N·m bekerja pada roda selama 3 sekon. Berapa perubahan momentum sudutnya? (ΔL = τ·Δt)",
        answer: 15,
        tolerance: 0.01,
        suffix: " kg·m²/s",
        solution:
          "ΔL = τ × Δt = 5 × 3 = <strong>15 kg·m²/s</strong>. Inilah impuls sudut, padanan rotasi dari impuls F·t.",
        hint: "Kalikan torsi dengan lama waktunya bekerja.",
      },
      {
        type: "calcExercise",
        prompt:
          "Momentum sudut roda berubah 24 kg·m²/s selama 4 sekon. Berapa torsi rata-rata yang bekerja? (τ = ΔL/Δt)",
        answer: 6,
        tolerance: 0.01,
        suffix: " N·m",
        solution:
          "τ = ΔL/Δt = 24/4 = <strong>6 N·m</strong>. Torsi adalah laju perubahan momentum sudut.",
        hint: "Bagi perubahan momentum sudut dengan waktunya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Roda gila bermomentum sudut 30 kg·m²/s direm dengan torsi 6 N·m hingga berhenti. Berapa lama waktu yang dibutuhkan? (Δt = ΔL/τ)",
        answer: 5,
        tolerance: 0.01,
        suffix: " s",
        solution:
          "Δt = ΔL/τ = 30/6 = <strong>5 sekon</strong>. Momentum sudut harus dibawa dari 30 ke nol, dan torsi rem menentukan kecepatannya.",
        hint: "Bagi momentum sudut yang harus dihilangkan dengan torsi rem.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan besaran gerak lurus dengan padanan rotasinya.",
        pairs: [
          { left: "Gaya F = Δp/Δt", right: "Torsi τ = ΔL/Δt" },
          { left: "Impuls F·t", right: "Impuls sudut τ·t" },
          { left: "Momentum p", right: "Momentum sudut L" },
          { left: "F = 0 → p kekal", right: "τ = 0 → L kekal" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan situasi: ada torsi luar (L berubah) atau tidak (L kekal).",
        buckets: ["L berubah (ada torsi)", "L kekal (tanpa torsi)"],
        items: [
          { text: "Rem menekan roda yang berputar", bucket: "L berubah (ada torsi)" },
          { text: "Gasing di meja licin tanpa gesekan", bucket: "L kekal (tanpa torsi)" },
          { text: "Tangan menarik tali gangsing", bucket: "L berubah (ada torsi)" },
          { text: "Satelit berputar bebas di luar angkasa", bucket: "L kekal (tanpa torsi)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Roda Reaksi Satelit",
        html: "Satelit mengubah arah hadapnya tanpa mesin pendorong dengan memutar roda reaksi di dalam tubuhnya. Motor memberi torsi pada roda selama waktu tertentu, mengubah momentum sudut roda, dan karena momentum sudut total kekal, tubuh satelit berputar ke arah berlawanan. Insinyur menghitung berapa lama torsi harus bekerja (ΔL = τ·Δt) untuk memutar satelit tepat sekian derajat. Mereka tidak menghafal; mereka memakai hubungan torsi dan momentum sudut.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Inilah jembatan terakhir. Torsi adalah laju perubahan momentum sudut: <strong>τ = ΔL/Δt</strong>, cermin dari F = Δp/Δt. Maka <strong>ΔL = τ·Δt</strong> (impuls sudut). Dan bila τ = 0, momentum sudut tidak berubah, alias kekal, persis seperti kisah penari es. Semua hukum rotasi ternyata satu keluarga dengan hukum gerak lurus, hanya berganti besaran.",
      },
      {
        type: "takeaways",
        items: [
          "Torsi adalah laju perubahan momentum sudut: τ = ΔL/Δt.",
          "Impuls sudut ΔL = τ·Δt: torsi dikali waktu mengubah momentum sudut.",
          "Bila torsi nol, momentum sudut kekal (akar hukum kekekalan).",
          "Ini cermin rotasi dari F = Δp/Δt dan impuls F·t pada gerak lurus.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hubungan torsi dan momentum sudut adalah?",
            options: ["τ = ΔL/Δt", "τ = L·ω", "τ = ½Iω²", "τ = L/I"],
            answer: 0,
            explain: "Torsi adalah laju perubahan momentum sudut: τ = ΔL/Δt.",
          },
          {
            q: "Torsi 4 N·m bekerja 5 s. Perubahan momentum sudutnya?",
            options: ["0,8 kg·m²/s", "9 kg·m²/s", "20 kg·m²/s", "100 kg·m²/s"],
            answer: 2,
            explain: "ΔL = τ·Δt = 4 × 5 = 20 kg·m²/s.",
          },
          {
            q: "Impuls sudut adalah padanan rotasi dari?",
            options: ["Energi", "Impuls F·t", "Gaya", "Massa"],
            answer: 1,
            explain: "Impuls sudut τ·t adalah cermin dari impuls linear F·t.",
          },
          {
            q: "Jika torsi total nol, momentum sudut?",
            options: ["Bertambah", "Berkurang", "Kekal (tetap)", "Menjadi nol"],
            answer: 2,
            explain: "τ = 0 berarti ΔL = 0, jadi momentum sudut kekal.",
          },
          {
            q: "Roda L = 40 kg·m²/s direm torsi 8 N·m. Waktu sampai berhenti?",
            options: ["3 s", "5 s", "8 s", "320 s"],
            answer: 1,
            explain: "Δt = ΔL/τ = 40/8 = 5 s.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "energi-dan-momentum-sudut",
    levelId: "momentum-energi-sudut",
    order: 5,
    title: "Energi dan Momentum Sudut",
    summary:
      "Saat penari es menarik tangan, momentum sudutnya kekal tetapi energinya justru bertambah. Dari mana energi itu datang? Kisah dulu, rumus di akhir.",
    durationMin: 13,
    tags: ["fisika", "rotasi", "energi rotasi", "momentum sudut", "usaha"],
    blocks: [
      {
        type: "paragraph",
        html: "Kita sudah tahu penari es berputar makin cepat saat menarik tangan, karena momentum sudut kekal. Tetapi ada teka-teki yang lebih dalam: energi rotasinya ternyata <strong>bertambah</strong>, padahal tidak ada torsi dari luar. Bagaimana mungkin energi muncul dari ketiadaan? Jawabannya menyingkap hubungan halus antara energi dan momentum sudut. Ayo telusuri kisahnya sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "MomentumVideo",
        title: "Video: Dua Wajah Putaran",
        caption: "Momentum sudut dan energi rotasi adalah dua besaran berbeda yang patuh aturan berbeda.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Saat penari menarik tangan, momen inersianya turun separuh, tetapi kecepatan sudutnya naik dua kali (agar L tetap). Sekarang hitung energinya: energi rotasi bergantung pada ω yang dikuadratkan, jadi ω naik dua kali membuat energi naik dua kali lipat (bukan tetap). <strong>Energi tambahan itu datang dari otot penari</strong> yang bekerja menarik tangan melawan dorongan ke luar. Tidak ada yang gratis.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Satu besaran, dua sudut pandang",
        html: "Energi rotasi bisa ditulis lewat kecepatan sudut (½Iω²) atau lewat momentum sudut. Karena L = I·ω, kita bisa mengganti ω = L/I, dan energi menjadi <strong>L²/(2I)</strong>. Bentuk ini berguna saat L kekal: bila momen inersia I mengecil sedang L tetap, energi justru naik. Itulah tanda bahwa ada usaha yang dilakukan untuk mengecilkan I.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Energi Rotasi saat Momen Inersia Turun (L kekal = 8 kg·m²/s)",
        unit: "joule",
        source: "perhitungan Ek = L²/(2I) dengan L kekal 8 kg·m²/s",
        note: "Momentum sudut kekal di 8 kg·m²/s, tetapi energi rotasi naik saat I mengecil. Tambahan energi ini berasal dari usaha penari menarik tangan, bukan dari ketiadaan.",
        data: [
          { label: "I = 4 kg·m²", value: 8, color: "#f472b6" },
          { label: "I = 2 kg·m²", value: 16, color: "#e879f9" },
          { label: "I = 1 kg·m²", value: 32, color: "#c084fc" },
          { label: "I = 0,5 kg·m²", value: 64, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah roda bermomentum sudut 6 kg·m²/s dan momen inersia 3 kg·m². Berapa energi rotasinya? (Ek = L²/(2I))",
        answer: 6,
        tolerance: 0.01,
        suffix: " J",
        solution:
          "Ek = L²/(2I) = 6² / (2 × 3) = 36 / 6 = <strong>6 J</strong>. Bentuk energi memakai momentum sudut.",
        hint: "Kuadratkan momentum sudut lalu bagi dengan dua kali momen inersia.",
      },
      {
        type: "calcExercise",
        prompt:
          "Penari es bermomentum sudut kekal 8 kg·m²/s. Awalnya I = 4 kg·m², lalu menarik tangan hingga I = 2 kg·m². Berapa tambahan energi rotasinya? (selisih Ek = L²/(2I))",
        answer: 8,
        tolerance: 0.01,
        suffix: " J",
        solution:
          "Ek awal = 8²/(2×4) = 64/8 = 8 J. Ek akhir = 8²/(2×2) = 64/4 = 16 J. Tambahan = 16 − 8 = <strong>8 J</strong>, yaitu usaha otot penari menarik tangan.",
        hint: "Hitung energi sebelum dan sesudah, lalu cari selisihnya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah piringan bermomentum sudut 10 kg·m²/s dengan momen inersia 5 kg·m². Berapa energi rotasinya? (Ek = L²/(2I))",
        answer: 10,
        tolerance: 0.01,
        suffix: " J",
        solution:
          "Ek = L²/(2I) = 10² / (2 × 5) = 100 / 10 = <strong>10 J</strong>.",
        hint: "Kuadratkan 10, bagi dengan 2 kali 5.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan besaran rotasi dengan rumus atau sifatnya.",
        pairs: [
          { left: "Energi lewat kecepatan sudut", right: "Ek = ½Iω²" },
          { left: "Energi lewat momentum sudut", right: "Ek = L²/(2I)" },
          { left: "Momentum sudut", right: "L = I·ω" },
          { left: "L kekal, I turun", right: "Ek naik (ada usaha)" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Dengan momentum sudut kekal, kelompokkan peristiwa yang menaikkan atau menurunkan energi rotasi.",
        buckets: ["Energi rotasi naik", "Energi rotasi turun"],
        items: [
          { text: "Penari menarik tangan ke tubuh (I turun)", bucket: "Energi rotasi naik" },
          { text: "Penari membuka tangan lebar (I naik)", bucket: "Energi rotasi turun" },
          { text: "Bintang mengerut menjadi padat (I turun)", bucket: "Energi rotasi naik" },
          { text: "Tanah liat menempel di tepi piringan (I naik)", bucket: "Energi rotasi turun" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Energi Tersembunyi Penari Es",
        html: "Penari es berputar dengan momentum sudut kekal 8 kg·m²/s. Saat tangan terbuka, I = 4 kg·m² dan energinya L²/(2I) = 64/8 = 8 J. Saat tangan dirapatkan, I turun ke 2 kg·m² dan energinya melonjak ke 64/4 = 16 J. Selisih <strong>8 joule</strong> bukan sihir: itulah usaha yang dilakukan otot penari menarik tangan melawan gaya yang mendorong keluar. Berbeda dengan momentum sudut yang kekal tanpa torsi luar, energi rotasi bisa berubah karena ada kerja internal. Para pelatih tidak menghafal rumus; mereka tahu menarik tangan butuh tenaga, dan tenaga itu menjadi energi putar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang teka-tekinya terjawab. Energi rotasi bisa ditulis dua cara: <strong>Ek = ½Iω² = L²/(2I)</strong>. Saat momentum sudut kekal (L tetap) dan momen inersia mengecil, energi naik berbanding terbalik dengan I. Kenaikan energi itu sama dengan <strong>usaha</strong> yang dilakukan untuk menarik massa ke dalam. Jadi momentum sudut kekal tidak berarti energi kekal: keduanya besaran berbeda dengan aturan berbeda.",
      },
      {
        type: "takeaways",
        items: [
          "Energi rotasi punya dua bentuk: Ek = ½Iω² = L²/(2I).",
          "Saat L kekal dan I mengecil, energi rotasi justru naik.",
          "Tambahan energi itu berasal dari usaha menarik massa ke dalam, bukan dari ketiadaan.",
          "Momentum sudut kekal tidak menjamin energi kekal; keduanya besaran berbeda.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Energi rotasi dalam bentuk momentum sudut adalah?",
            options: ["Ek = L·ω", "Ek = L²/(2I)", "Ek = 2I·L", "Ek = ½L·I"],
            answer: 1,
            explain: "Karena ω = L/I, energi ½Iω² menjadi L²/(2I).",
          },
          {
            q: "Roda L = 4 kg·m²/s, I = 2 kg·m². Energi rotasinya?",
            options: ["2 J", "4 J", "8 J", "16 J"],
            answer: 1,
            explain: "Ek = L²/(2I) = 4²/(2×2) = 16/4 = 4 J.",
          },
          {
            q: "Saat momentum sudut kekal dan momen inersia mengecil, energi rotasi?",
            options: ["Tetap", "Naik", "Turun", "Menjadi nol"],
            answer: 1,
            explain: "Ek = L²/(2I); bila L tetap dan I mengecil, energi naik.",
          },
          {
            q: "Dari mana datang tambahan energi penari es saat menarik tangan?",
            options: [
              "Dari gravitasi",
              "Dari usaha otot menarik tangan ke dalam",
              "Dari ketiadaan",
              "Dari gesekan es",
            ],
            answer: 1,
            explain: "Usaha otot melawan dorongan ke luar berubah menjadi tambahan energi rotasi.",
          },
          {
            q: "Apakah momentum sudut kekal berarti energi rotasi juga kekal?",
            options: [
              "Ya, selalu",
              "Tidak, keduanya besaran berbeda dengan aturan berbeda",
              "Ya, jika tidak ada gesekan",
              "Hanya untuk benda berat",
            ],
            answer: 1,
            explain: "Momentum sudut dan energi rotasi patuh aturan berbeda; L bisa kekal sementara Ek berubah.",
          },
        ],
      },
    ],
  },
];
