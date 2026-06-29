import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "gerak-pada-bidang-miring",
    levelId: "aplikasi-dinamika",
    order: 1,
    title: "Gerak pada Bidang Miring",
    summary:
      "Mengapa bola meluncur makin cepat di papan yang dimiringkan, dan makin curam papannya makin kencang? Kita amati dulu polanya, lalu uraikan berat menjadi komponennya.",
    durationMin: 17,
    tags: ["fisika", "dinamika", "bidang-miring", "komponen-gaya"],
    blocks: [
      {
        type: "paragraph",
        html: "Letakkan bola di papan datar, ia diam. Miringkan papan sedikit, bola mulai meluncur pelan. Miringkan lebih curam, bola meluncur makin kencang. Gravitasi yang menariknya tetap sama, lalu mengapa percepatannya berubah mengikuti kemiringan? Jawabannya terletak pada cara kita 'membagi' berat menjadi dua arah. Ayo amati polanya dulu.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Meluncur Makin Curam, Makin Cepat",
        caption: "Kemiringan bidang menentukan seberapa besar bagian berat yang mendorong benda menuruni lereng.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan perosotan di taman bermain. Yang landai membuatmu meluncur pelan, yang curam membuatmu melesat. Padahal beratmu sama di kedua perosotan. Yang berubah adalah <strong>seberapa besar bagian beratmu yang mengarah menuruni lereng</strong>. Pada bidang datar, tidak ada bagian itu sehingga kamu diam; pada bidang tegak, seluruh beratmu menarik ke bawah. Rasakan dulu hubungan kemiringan dan percepatan ini.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Membagi berat menjadi dua arah",
        html: "Pada bidang miring, berat benda (m · g) terbagi menjadi dua bagian: satu <strong>sejajar lereng</strong> yang mendorong benda meluncur turun, dan satu <strong>tegak lurus lereng</strong> yang ditahan oleh gaya normal. Makin curam sudut kemiringan, makin besar bagian yang sejajar lereng, makin cepat benda meluncur.",
      },
      {
        type: "widget",
        widget: "SimulatorGLBB",
      },
      {
        type: "chart",
        variant: "line",
        title: "Percepatan Meluncur vs Sudut Kemiringan (tanpa gesekan, g = 9,8 m/s²)",
        unit: "percepatan (m/s²)",
        source: "perhitungan a = g sin θ pada permukaan licin",
        note: "Tanpa gesekan, percepatan hanya bergantung sudut. Pada 0° benda diam, pada 90° percepatannya penuh sebesar g. Pola melengkung ini muncul sebelum rumus diberikan.",
        data: [
          { label: "0°", value: 0, color: "#c084fc" },
          { label: "30°", value: 4.9, color: "#c084fc" },
          { label: "45°", value: 6.93, color: "#c084fc" },
          { label: "60°", value: 8.49, color: "#c084fc" },
          { label: "90°", value: 9.8, color: "#c084fc" },
        ],
      },
      {
        type: "paragraph",
        html: "Perhatikan grafik. Pada 0° benda tidak dipercepat sama sekali, dan pada 90° (jatuh tegak) percepatannya penuh sebesar g. Di antaranya, percepatan naik mengikuti seberapa curam lerengnya. Pola ini persis cocok dengan nilai sinus sudut: sin 0° = 0 dan sin 90° = 1. Dari sinilah rumusnya akan lahir.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah balok meluncur pada bidang miring licin bersudut 30°. Dengan g = 10 m/s², berapa percepatannya menuruni lereng?",
        answer: 5,
        tolerance: 0.1,
        suffix: " m/s²",
        solution:
          "Tanpa gesekan, a = g sin θ = 10 × sin 30° = 10 × 0,5 = <strong>5 m/s²</strong>. Hanya bagian berat yang sejajar lereng yang mempercepat balok.",
        hint: "Gunakan a = g sin θ, dengan sin 30° = 0,5.",
      },
      {
        type: "calcExercise",
        prompt:
          "Balok bermassa 2 kg berada di bidang miring 30°. Dengan g = 10 m/s², berapa komponen berat yang sejajar lereng (gaya pendorong)?",
        answer: 10,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Komponen sejajar lereng = m · g · sin θ = 2 × 10 × sin 30° = 2 × 10 × 0,5 = <strong>10 N</strong>. Inilah gaya yang menarik balok menuruni bidang.",
        hint: "Gunakan komponen m · g · sin θ.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap komponen berat pada bidang miring berdasarkan arahnya.",
        buckets: ["Sejajar lereng (mendorong meluncur)", "Tegak lurus lereng (ditahan gaya normal)"],
        items: [
          { text: "m · g · sin θ", bucket: "Sejajar lereng (mendorong meluncur)" },
          { text: "m · g · cos θ", bucket: "Tegak lurus lereng (ditahan gaya normal)" },
          { text: "Bagian berat yang membuat balok meluncur turun", bucket: "Sejajar lereng (mendorong meluncur)" },
          { text: "Bagian berat yang menekan permukaan bidang", bucket: "Tegak lurus lereng (ditahan gaya normal)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Jalur Darurat Pengereman di Turunan Gunung",
        html: "Di jalan pegunungan yang curam, sering ada <strong>jalur darurat</strong> menanjak berpasir untuk truk yang remnya blong. Di turunan, komponen berat sejajar lereng (m · g · sin θ) terus mempercepat truk, dan makin curam jalannya makin besar dorongan itu. Jalur darurat dibuat menanjak agar komponen berat berbalik menjadi gaya pengerem alami, ditambah pasir tebal yang memperbesar gesekan. Inilah fisika bidang miring yang menyelamatkan nyawa, dipahami jauh sebelum rumusnya ditulis.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati polanya, barulah berat kita uraikan. Komponen <strong>sejajar lereng = m · g · sin θ</strong> (mendorong benda turun) dan komponen <strong>tegak lurus lereng = m · g · cos θ</strong> (ditahan gaya normal, jadi N = m · g · cos θ). Tanpa gesekan, percepatan menuruni lereng adalah <strong>a = g sin θ</strong>. Bila ada gesekan, gaya gesek f = μ · N = μ · m · g · cos θ melawan gerak, sehingga a = g(sin θ − μ cos θ). Rumus ini merangkum pola kemiringan yang sudah kita rasakan.",
      },
      {
        type: "takeaways",
        items: [
          "Berat pada bidang miring terbagi menjadi komponen sejajar dan tegak lurus lereng.",
          "Komponen pendorong = m · g · sin θ; komponen penekan = m · g · cos θ.",
          "Gaya normal pada bidang miring = m · g · cos θ, lebih kecil dari berat penuh.",
          "Tanpa gesekan, percepatan menuruni lereng a = g sin θ, makin curam makin besar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Komponen berat yang mendorong benda meluncur menuruni bidang miring adalah?",
            options: ["m · g · cos θ", "m · g · sin θ", "m · g", "μ · m · g"],
            answer: 1,
            explain: "Komponen sejajar lereng yang mendorong turun adalah m · g · sin θ.",
          },
          {
            q: "Pada bidang miring licin 30°, dengan g = 10 m/s², percepatan meluncurnya?",
            options: ["10 m/s²", "5 m/s²", "8,7 m/s²", "0 m/s²"],
            answer: 1,
            explain: "a = g sin θ = 10 × 0,5 = 5 m/s².",
          },
          {
            q: "Gaya normal pada bidang miring bersudut θ adalah?",
            options: ["m · g", "m · g · sin θ", "m · g · cos θ", "Nol"],
            answer: 2,
            explain: "Gaya normal mengimbangi komponen tegak lurus, yaitu m · g · cos θ.",
          },
          {
            q: "Saat sudut kemiringan diperbesar (mendekati tegak), percepatan meluncur tanpa gesekan?",
            options: ["Mengecil", "Membesar mendekati g", "Tetap", "Menjadi nol"],
            answer: 1,
            explain: "sin θ membesar saat θ naik, sehingga a = g sin θ mendekati g pada 90°.",
          },
          {
            q: "Bila ditambahkan gesekan, percepatan menuruni lereng menjadi?",
            options: [
              "a = g sin θ + μ cos θ",
              "a = g(sin θ − μ cos θ)",
              "a = g cos θ",
              "a = μ g",
            ],
            answer: 1,
            explain: "Gesekan melawan gerak, sehingga a = g(sin θ − μ cos θ).",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "sistem-dua-benda",
    levelId: "aplikasi-dinamika",
    order: 2,
    title: "Sistem Dua Benda",
    summary:
      "Sebuah balok di meja dihubungkan tali lewat katrol ke beban yang tergantung. Beban jatuh, balok ikut tertarik. Kita amati dulu polanya sebelum merumuskan percepatan dan tegangannya.",
    durationMin: 17,
    tags: ["fisika", "dinamika", "sistem-dua-benda", "katrol", "tegangan"],
    blocks: [
      {
        type: "paragraph",
        html: "Letakkan balok di atas meja, ikatkan tali ke balok itu, lewatkan talinya di atas katrol di tepi meja, lalu gantungkan beban di ujung tali. Lepaskan: beban yang tergantung jatuh karena beratnya, dan balok di meja ikut tertarik maju. Keduanya bergerak bersama dengan percepatan yang sama. Apa yang menentukan secepat apa mereka bergerak? Ayo amati polanya sebelum menuliskan rumus.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Balok di Meja Ditarik Beban Tergantung",
        caption: "Berat beban yang tergantung menjadi penggerak, sedangkan kedua massa harus dipercepat bersama.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan menarik balok berat di meja menggunakan beban yang digantung lewat katrol. Bila beban gantungnya ringan, balok bergerak pelan; bila beban gantungnya berat, balok melaju cepat. Tetapi makin berat pula balok di meja, makin lamban sistem bergerak. Yang menggerakkan adalah <strong>berat beban yang tergantung</strong>; yang harus dipercepat adalah <strong>kedua massa sekaligus</strong>. Rasakan dulu dua kecenderungan ini.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Pola sistem dua benda",
        html: "Balok di meja dan beban yang tergantung dihubungkan satu tali, sehingga <strong>percepatannya sama besar</strong> dan tegangan tali sama (katrol licin, tali ringan). Penggeraknya adalah berat beban yang tergantung (m₂ · g). Yang harus digerakkan adalah jumlah massa keduanya (m₁ + m₂). Pada meja licin, balok di meja tidak punya komponen berat sejajar gerak, jadi ia hanya ikut dipercepat oleh tegangan tali.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "calcExercise",
        prompt:
          "Balok 3 kg di meja licin dihubungkan tali lewat katrol ke beban 2 kg yang tergantung (g = 10 m/s²). Berapa percepatan sistem?",
        answer: 4,
        tolerance: 0.1,
        suffix: " m/s²",
        solution:
          "Penggerak = berat beban tergantung = m₂ · g = 2 × 10 = 20 N. Total massa = 3 + 2 = 5 kg. a = m₂ · g ÷ (m₁ + m₂) = 20 ÷ 5 = <strong>4 m/s²</strong>.",
        hint: "a = m₂ · g ÷ (m₁ + m₂), dengan m₂ massa beban yang tergantung.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada sistem yang sama (a = 4 m/s²), berapa tegangan talinya? Tinjau balok di meja: T = m₁ · a.",
        answer: 12,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Balok di meja licin hanya ditarik tegangan tali: T = m₁ · a = 3 × 4 = <strong>12 N</strong>. Cek lewat beban: T = m₂(g − a) = 2 × (10 − 4) = 12 N, cocok.",
        hint: "Untuk balok di meja licin, T = m₁ · a.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap gaya menurut perannya pada sistem balok-di-meja dan beban tergantung (meja licin).",
        buckets: ["Menggerakkan sistem", "Tidak menggerakkan (terimbangi)"],
        items: [
          { text: "Berat beban yang tergantung", bucket: "Menggerakkan sistem" },
          { text: "Berat balok di meja", bucket: "Tidak menggerakkan (terimbangi)" },
          { text: "Gaya normal meja pada balok", bucket: "Tidak menggerakkan (terimbangi)" },
          { text: "Tegangan tali yang menarik balok maju", bucket: "Menggerakkan sistem" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap besaran dengan rumusnya pada sistem balok (m₁, di meja licin) dan beban (m₂, tergantung).",
        pairs: [
          { left: "Percepatan sistem", right: "m₂ · g ÷ (m₁ + m₂)" },
          { left: "Penggerak sistem", right: "Berat beban tergantung, m₂ · g" },
          { left: "Massa yang dipercepat", right: "Jumlah massa, m₁ + m₂" },
          { left: "Tegangan tali", right: "m₁ · a" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ember Sumur dan Timba Gravitasi",
        html: "Pada beberapa sumur tradisional, ember diturunkan dengan membiarkan pemberat di sisi lain tali (lewat katrol) menariknya, mirip sistem dua benda. Pemberat yang tergantung menjadi penggerak, sementara ember dan air yang ditimba menjadi massa yang harus digerakkan. Dengan memilih pemberat yang tepat, orang mengatur seberapa cepat ember naik atau turun tanpa harus menarik dengan tenaga penuh. Prinsip percepatan a = m_penggerak · g ÷ massa total inilah yang diam-diam mereka manfaatkan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati polanya, kita terapkan Hukum II pada tiap benda lalu gabungkan. Untuk balok m₁ di meja licin dan beban m₂ yang tergantung: percepatan <strong>a = m₂ · g ÷ (m₁ + m₂)</strong>, dan tegangan tali <strong>T = m₁ · a</strong> (setara T = m₂(g − a) = m₁·m₂·g ÷ (m₁ + m₂)). Bila meja kasar, kurangi penggerak dengan gaya gesek: a = (m₂·g − μ·m₁·g) ÷ (m₁ + m₂). Rumus ini lahir dari dua diagram benda bebas yang digabung.",
      },
      {
        type: "takeaways",
        items: [
          "Balok di meja dan beban tergantung berbagi percepatan dan tegangan yang sama.",
          "Penggerak sistem adalah berat beban yang tergantung (m₂ · g).",
          "Percepatan: a = m₂ · g ÷ (m₁ + m₂); tegangan: T = m₁ · a (meja licin).",
          "Bila meja kasar, gaya gesek mengurangi penggerak sehingga percepatan mengecil.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada sistem balok di meja dan beban tergantung (satu tali), percepatan keduanya?",
            options: ["Berbeda", "Sama besar", "Nol", "Sama dengan g"],
            answer: 1,
            explain: "Terhubung satu tali, jadi percepatan keduanya sama besar.",
          },
          {
            q: "Apa penggerak utama sistem balok di meja licin yang ditarik beban tergantung?",
            options: ["Berat balok di meja", "Berat beban yang tergantung", "Gaya normal meja", "Gaya gesek"],
            answer: 1,
            explain: "Berat beban yang tergantung (m₂ · g) menjadi penggerak sistem.",
          },
          {
            q: "Balok 2 kg di meja licin, beban gantung 3 kg, g = 10 m/s². Percepatannya?",
            options: ["6 m/s²", "5 m/s²", "10 m/s²", "2 m/s²"],
            answer: 0,
            explain: "a = m₂ · g ÷ (m₁ + m₂) = 30 ÷ 5 = 6 m/s².",
          },
          {
            q: "Pada meja licin, tegangan tali yang menarik balok m₁ sama dengan?",
            options: ["m₁ · g", "m₁ · a", "m₂ · g", "Nol"],
            answer: 1,
            explain: "Balok di meja licin hanya ditarik tegangan, jadi T = m₁ · a.",
          },
          {
            q: "Bila meja dibuat kasar (ada gesekan), percepatan sistem?",
            options: ["Membesar", "Mengecil", "Tetap", "Menjadi g"],
            answer: 1,
            explain: "Gesekan melawan gerak, mengurangi penggerak, sehingga percepatan mengecil.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gaya-sentripetal",
    levelId: "aplikasi-dinamika",
    order: 3,
    title: "Gaya Sentripetal",
    summary:
      "Mengapa benda yang diputar di ujung tali selalu menarik tangan keluar, dan talinya bisa putus bila terlalu cepat? Kita rasakan dulu gaya yang membelokkan gerak sebelum menghitungnya.",
    durationMin: 17,
    tags: ["fisika", "dinamika", "sentripetal", "gerak-melingkar"],
    blocks: [
      {
        type: "paragraph",
        html: "Ikat sebuah bola pada tali, lalu putar di atas kepalamu. Bola bergerak melingkar, dan tanganmu terus merasakan tarikan keluar dari tali. Untuk membuat bola terus berbelok mengikuti lingkaran, tali harus menariknya ke <strong>pusat</strong> lingkaran setiap saat. Gaya yang selalu mengarah ke pusat inilah <strong>gaya sentripetal</strong>. Putar lebih cepat, tali makin tegang sampai bisa putus. Ayo rasakan dulu sebelum menuliskan rumusnya.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Gaya yang Membelokkan Gerak",
        caption: "Benda yang bergerak melingkar selalu ditarik ke pusat oleh gaya sentripetal.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Putar bola di ujung tali pelan-pelan, lalu makin cepat. Rasakan tali makin tegang saat putaran dipercepat. Coba juga tali yang lebih pendek (jari-jari kecil): pada laju yang sama, tarikannya terasa lebih kuat. Bila tali dilepas, bola tidak terbang menjauhi pusat, melainkan melesat <strong>lurus menyinggung lingkaran</strong> (mengikuti kelembamannya). Artinya gaya tali selama itu memang menariknya ke pusat. Rasakan dulu pola laju, jari-jari, dan tegangan ini.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Selalu menuju pusat",
        html: "Pada gerak melingkar, arah gerak benda terus berubah, jadi ada percepatan meski lajunya tetap. Percepatan ini, <strong>percepatan sentripetal</strong>, selalu mengarah ke pusat lingkaran. Menurut Hukum II, percepatan butuh gaya searahnya, maka harus ada <strong>gaya sentripetal</strong> yang selalu menuju pusat. Gaya ini bukan jenis gaya baru: ia bisa berupa tegangan tali, gaya gesek, gravitasi, atau gaya normal, asalkan arahnya ke pusat.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "line",
        title: "Gaya Sentripetal vs Laju (massa 1 kg, jari-jari 1 m)",
        unit: "gaya sentripetal (N)",
        source: "perhitungan F = m·v²/r pada massa dan jari-jari tetap",
        note: "Massa 1 kg dan jari-jari 1 m dijaga tetap. Saat laju digandakan, gaya melonjak empat kali lipat. Pola melengkung tajam ini muncul sebelum rumus diberikan.",
        data: [
          { label: "v = 1 m/s", value: 1, color: "#818cf8" },
          { label: "v = 2 m/s", value: 4, color: "#818cf8" },
          { label: "v = 3 m/s", value: 9, color: "#818cf8" },
          { label: "v = 4 m/s", value: 16, color: "#818cf8" },
        ],
      },
      {
        type: "paragraph",
        html: "Amati grafik. Dengan massa dan jari-jari tetap, gaya sentripetal tidak naik lurus mengikuti laju, melainkan melonjak jauh lebih cepat: laju 2 kali lipat butuh gaya 4 kali lipat, laju 4 kali butuh gaya 16 kali. Pola ini cocok dengan kuadrat laju (v²). Itulah sebabnya menikung terlalu cepat sangat berbahaya. Dari pola inilah rumusnya lahir.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah bola bermassa 0,5 kg diputar pada tali sepanjang 2 m dengan laju 4 m/s. Berapa gaya sentripetal yang dibutuhkan?",
        answer: 4,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "Gaya sentripetal = m · v² ÷ r = 0,5 × (4²) ÷ 2 = 0,5 × 16 ÷ 2 = <strong>4 N</strong>. Inilah tegangan tali yang menarik bola ke pusat.",
        hint: "Gunakan F = m · v² ÷ r.",
      },
      {
        type: "calcExercise",
        prompt:
          "Bola 0,5 kg pada tali 2 m yang sama kini diputar dua kali lebih cepat, yaitu 8 m/s. Berapa gaya sentripetalnya sekarang?",
        answer: 16,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "F = m · v² ÷ r = 0,5 × (8²) ÷ 2 = 0,5 × 64 ÷ 2 = <strong>16 N</strong>. Laju dua kali lipat membuat gaya empat kali lipat, karena gaya bergantung pada v².",
        hint: "Gandakan laju lalu kuadratkan; gaya naik empat kali lipat.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap perubahan: apakah ia memperbesar atau memperkecil gaya sentripetal yang dibutuhkan?",
        buckets: ["Memperbesar gaya sentripetal", "Memperkecil gaya sentripetal"],
        items: [
          { text: "Menambah laju putaran", bucket: "Memperbesar gaya sentripetal" },
          { text: "Memperbesar jari-jari lingkaran (laju tetap)", bucket: "Memperkecil gaya sentripetal" },
          { text: "Menambah massa benda", bucket: "Memperbesar gaya sentripetal" },
          { text: "Memutar lebih pelan", bucket: "Memperkecil gaya sentripetal" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Tikungan Tajam Berbahaya saat Ngebut",
        html: "Saat mobil menikung, gaya gesek antara ban dan jalan harus menyediakan <strong>gaya sentripetal</strong> agar mobil membelok mengikuti tikungan. Karena gaya yang dibutuhkan sebanding dengan kuadrat laju (m · v² ÷ r), melaju dua kali lebih cepat menuntut gaya gesek empat kali lebih besar. Bila kebutuhan ini melebihi gesekan maksimum yang bisa diberikan ban, mobil tidak lagi bisa berbelok dan meluncur lurus keluar tikungan. Tikungan tajam (r kecil) memperparahnya. Itulah sebabnya rambu menurunkan batas laju di tikungan, sebuah peringatan yang sepenuhnya fisika.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan pola laju dan jari-jari, barulah rumus muncul. Percepatan sentripetal <strong>a = v² ÷ r</strong> selalu mengarah ke pusat. Menurut Hukum II, gaya sentripetal <strong>F = m · v² ÷ r</strong>. Gaya ini selalu menuju pusat lingkaran dan bisa disediakan oleh tegangan tali, gaya gesek, gravitasi, atau gaya normal. Karena bergantung pada v², melipatduakan laju melipatempatkan gaya yang dibutuhkan.",
      },
      {
        type: "takeaways",
        items: [
          "Gerak melingkar memiliki percepatan sentripetal a = v² ÷ r yang selalu menuju pusat.",
          "Gaya sentripetal F = m · v² ÷ r selalu mengarah ke pusat lingkaran.",
          "Gaya sentripetal bukan gaya baru: bisa berupa tegangan, gesekan, gravitasi, atau normal.",
          "Karena bergantung v², menggandakan laju membuat gaya yang dibutuhkan empat kali lipat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Arah gaya sentripetal pada gerak melingkar selalu?",
            options: ["Menjauhi pusat", "Menuju pusat lingkaran", "Searah gerak", "Ke bawah"],
            answer: 1,
            explain: "Gaya sentripetal selalu mengarah ke pusat lingkaran.",
          },
          {
            q: "Bola 2 kg bergerak melingkar berjari-jari 1 m dengan laju 3 m/s. Gaya sentripetalnya?",
            options: ["6 N", "18 N", "9 N", "12 N"],
            answer: 1,
            explain: "F = m · v² ÷ r = 2 × 9 ÷ 1 = 18 N.",
          },
          {
            q: "Jika laju digandakan (massa dan jari-jari tetap), gaya sentripetal menjadi?",
            options: ["Dua kali lipat", "Empat kali lipat", "Setengahnya", "Tetap"],
            answer: 1,
            explain: "Gaya bergantung pada v², jadi laju dua kali lipat membuat gaya empat kali lipat.",
          },
          {
            q: "Jika jari-jari diperbesar pada laju tetap, gaya sentripetal yang dibutuhkan?",
            options: ["Membesar", "Mengecil", "Tetap", "Menjadi nol"],
            answer: 1,
            explain: "F = m · v² ÷ r, jadi memperbesar r memperkecil gaya yang dibutuhkan.",
          },
          {
            q: "Saat mobil menikung di jalan datar, gaya sentripetal disediakan oleh?",
            options: ["Gaya berat", "Gaya gesek ban dengan jalan", "Gaya normal", "Tegangan tali"],
            answer: 1,
            explain: "Gesekan ban dengan jalan yang menyediakan gaya sentripetal saat menikung.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "dinamika-gerak-melingkar",
    levelId: "aplikasi-dinamika",
    order: 4,
    title: "Dinamika Gerak Melingkar",
    summary:
      "Mengapa ada batas laju aman saat menikung, dan mengapa air tidak tumpah dari ember yang diputar vertikal? Kita amati dulu polanya lalu rumuskan laju maksimum dan syarat geraknya.",
    durationMin: 18,
    tags: ["fisika", "dinamika", "gerak-melingkar", "sentripetal", "gesek"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah mobil menikung di jalan datar. Sampai laju tertentu ia membelok mulus, tetapi bila terlalu kencang ia tergelincir lurus keluar tikungan. Lalu ada trik klasik: memutar ember berisi air secara vertikal, dan air tidak tumpah meski sesaat berada di atas kepala. Dua peristiwa ini diatur oleh gaya sentripetal yang harus dipenuhi. Ayo amati polanya dulu sebelum merumuskan batas laju dan syarat geraknya.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Menikung, Memutar, dan Batas Laju",
        caption: "Gerak melingkar nyata terjadi bila ada gaya cukup untuk menyediakan kebutuhan sentripetal.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan mengendarai sepeda menikung. Di tikungan landai dengan ban kering, kamu bisa menikung kencang. Di tikungan tajam atau jalan licin, kamu harus pelan agar tidak tergelincir. Yang membatasi adalah <strong>seberapa besar gaya gesek yang sanggup ban berikan</strong> untuk membelokkanmu. Bila kebutuhan sentripetal melebihi gesekan maksimum, kamu meluncur lurus. Rasakan dulu hubungan kekasaran jalan, jari-jari, dan batas laju ini.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Syarat gerak melingkar",
        html: "Agar benda tetap bergerak melingkar, gaya yang tersedia (gesekan, tegangan, gravitasi, atau gaya normal) harus <strong>mencukupi</strong> kebutuhan sentripetal m · v² ÷ r. Pada mobil menikung di jalan datar, gesekanlah yang menyediakannya, dan gesekan punya batas maksimum μ · m · g. Begitu kebutuhan melampaui batas itu, benda tak lagi bisa berbelok dan meluncur lurus.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah mobil menikung di jalan datar berjari-jari 20 m. Koefisien gesek ban dan jalan 0,5 (g = 10 m/s²). Berapa laju maksimum agar mobil tidak tergelincir?",
        answer: 10,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Pada batas, gesekan maksimum sama dengan kebutuhan sentripetal: μ · m · g = m · v² ÷ r. Massa lenyap, sehingga v = √(μ · g · r) = √(0,5 × 10 × 20) = √100 = <strong>10 m/s</strong>.",
        hint: "Setarakan μ · m · g dengan m · v² ÷ r, lalu v = √(μ · g · r).",
      },
      {
        type: "calcExercise",
        prompt:
          "Mobil 800 kg menikung pada jari-jari 20 m dengan laju 10 m/s. Berapa gaya sentripetal yang harus disediakan gesekan?",
        answer: 4000,
        tolerance: 1,
        suffix: " N",
        solution:
          "F = m · v² ÷ r = 800 × (10²) ÷ 20 = 800 × 100 ÷ 20 = <strong>4000 N</strong>. Cek: gesekan maksimum μ · m · g = 0,5 × 800 × 10 = 4000 N, persis terpenuhi pada laju batas.",
        hint: "Gunakan F = m · v² ÷ r.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap perubahan berdasarkan pengaruhnya pada laju maksimum aman saat menikung di jalan datar.",
        buckets: ["Laju maksimum bertambah", "Laju maksimum berkurang"],
        items: [
          { text: "Jalan dibuat lebih kasar (μ naik)", bucket: "Laju maksimum bertambah" },
          { text: "Tikungan dibuat lebih tajam (r mengecil)", bucket: "Laju maksimum berkurang" },
          { text: "Tikungan dibuat lebih melebar (r membesar)", bucket: "Laju maksimum bertambah" },
          { text: "Jalan menjadi licin oleh hujan (μ turun)", bucket: "Laju maksimum berkurang" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap situasi gerak melingkar dengan gaya yang menyediakan sentripetalnya.",
        pairs: [
          { left: "Mobil menikung di jalan datar", right: "Gaya gesek ban dengan jalan" },
          { left: "Bola diputar pada tali", right: "Tegangan tali" },
          { left: "Bulan mengorbit Bumi", right: "Gaya gravitasi" },
          { left: "Penumpang di dinding wahana berputar", right: "Gaya normal dinding" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tikungan yang Sengaja Dimiringkan",
        html: "Perhatikan tikungan jalan tol atau lintasan balap motor yang permukaannya sengaja <strong>dimiringkan ke dalam</strong> (banking). Mengapa? Pada tikungan datar, hanya gesekan yang menyediakan gaya sentripetal, dan itu terbatas. Dengan memiringkan jalan, komponen gaya normal ikut mengarah ke pusat tikungan dan membantu membelokkan kendaraan, sehingga kendaraan bisa menikung lebih cepat dengan aman, bahkan saat jalan agak licin. Insinyur jalan memanfaatkan fisika gerak melingkar untuk menambah keselamatan tanpa mengandalkan gesekan semata.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati polanya, kita setarakan gaya yang tersedia dengan kebutuhan sentripetal. Pada mobil menikung di jalan datar, gesekan maksimum menyediakan sentripetal: μ · m · g = m · v² ÷ r. Massa lenyap, menghasilkan laju maksimum <strong>v = √(μ · g · r)</strong>. Lebih umum, syarat gerak melingkar adalah gaya total ke pusat = m · v² ÷ r. Bila gaya yang tersedia kurang dari ini, benda meluncur lurus mengikuti kelembamannya. Rumus ini merangkum batas laju yang sudah kita rasakan.",
      },
      {
        type: "takeaways",
        items: [
          "Gerak melingkar terjadi bila gaya yang tersedia mencukupi kebutuhan m · v² ÷ r.",
          "Pada mobil menikung di jalan datar, gesekan menyediakan gaya sentripetal.",
          "Laju maksimum aman menikung di jalan datar: v = √(μ · g · r), tak bergantung massa.",
          "Tikungan tajam (r kecil) atau jalan licin (μ kecil) menurunkan laju maksimum aman.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang menyediakan gaya sentripetal pada mobil menikung di jalan datar?",
            options: ["Gaya berat", "Gaya gesek ban dengan jalan", "Tegangan tali", "Gaya dorong mesin"],
            answer: 1,
            explain: "Gesekan ban dengan jalan yang berperan sebagai gaya sentripetal saat menikung.",
          },
          {
            q: "Laju maksimum menikung di jalan datar dirumuskan?",
            options: ["v = μ · g · r", "v = √(μ · g · r)", "v = m · g · r", "v = g ÷ r"],
            answer: 1,
            explain: "Dari μ · m · g = m · v² ÷ r diperoleh v = √(μ · g · r).",
          },
          {
            q: "Jalan datar r = 10 m, μ = 0,4, g = 10 m/s². Laju maksimum amannya?",
            options: ["40 m/s", "20 m/s", "2 m/s", "Akar dari 40 ≈ 6,3 m/s"],
            answer: 3,
            explain: "v = √(0,4 × 10 × 10) = √40 ≈ 6,3 m/s.",
          },
          {
            q: "Saat hujan menurunkan koefisien gesek, laju maksimum aman menikung?",
            options: ["Bertambah", "Berkurang", "Tetap", "Menjadi tak terbatas"],
            answer: 1,
            explain: "v = √(μ · g · r), jadi μ yang mengecil menurunkan laju maksimum aman.",
          },
          {
            q: "Mengapa tikungan jalan sering dimiringkan ke dalam (banking)?",
            options: [
              "Agar terlihat indah",
              "Agar komponen gaya normal ikut menyediakan gaya sentripetal",
              "Agar mobil melambat sendiri",
              "Agar gesekan hilang",
            ],
            answer: 1,
            explain: "Dengan banking, komponen gaya normal membantu membelokkan kendaraan ke pusat tikungan.",
          },
        ],
      },
    ],
  },
];
