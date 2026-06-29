import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "usaha-gas-dan-proses",
    levelId: "hukum-termodinamika",
    order: 1,
    title: "Usaha Gas dan Proses Termodinamika",
    summary:
      "Gas yang memuai mendorong piston mesin, dan itulah cara mobil bergerak. Tetapi gas bisa berubah lewat beberapa jalan berbeda. Kita kenali prosesnya dulu sebelum berumus.",
    durationMin: 15,
    tags: ["fisika", "termodinamika", "usaha gas", "proses"],
    blocks: [
      {
        type: "paragraph",
        html: "Di dalam mesin mobil, gas hasil pembakaran memuai dan <strong>mendorong piston</strong>, dan dorongan itulah yang akhirnya memutar roda. Gas melakukan usaha. Tetapi gas bisa berubah lewat jalan yang berbeda: ada yang tekanannya dijaga, ada yang volumenya dikunci, ada yang suhunya dijaga, ada yang dilakukan secepat kilat tanpa sempat bertukar kalor. Ayo kenali keempat jalan ini dulu sebelum menulis rumus usahanya.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Gas Melakukan Usaha pada Piston",
        caption: "Saat gas memuai mendorong piston sejauh tertentu, ia melakukan usaha mekanik.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan gas dalam silinder bertutup piston yang bisa bergeser. Saat gas memuai, ia mendorong piston ke luar: gas <strong>melakukan usaha positif</strong>. Saat ditekan dari luar, volumenya mengecil: usaha pada gas negatif. Amati pula: jika piston dikunci sehingga volume tetap, gas tidak bisa mendorong apa-apa, jadi usahanya nol walau dipanaskan. Usaha hanya muncul saat volume berubah, dan besarnya tergantung tekanan selama perubahan itu.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Empat proses dasar",
        html: "<strong>Isobarik</strong>: tekanan tetap (piston bebas bergerak), usaha W = P·ΔV. <strong>Isokorik</strong>: volume tetap (piston dikunci), usaha = 0. <strong>Isotermal</strong>: suhu tetap (perubahan lambat sambil dijaga sesuhu lingkungan). <strong>Adiabatik</strong>: tanpa pertukaran kalor (Q = 0, perubahan sangat cepat atau terisolasi). Tiap proses punya cara menghitung usaha yang khas.",
      },
      {
        type: "widget",
        widget: "KalkulatorUsahaEnergi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Usaha Isobarik vs Pertambahan Volume (P = 100 kPa)",
        unit: "joule",
        source: "dihitung dari W = P·ΔV pada P = 100.000 Pa",
        note: "Pada tekanan tetap, usaha lurus sebanding dengan pertambahan volume: W = P·ΔV. Menggandakan ΔV menggandakan usaha. Nilai dihitung langsung dari rumus.",
        data: [
          { label: "ΔV 0,01 m³", value: 1000, color: "#34d399" },
          { label: "ΔV 0,02 m³", value: 2000, color: "#fbbf24" },
          { label: "ΔV 0,03 m³", value: 3000, color: "#fb923c" },
          { label: "ΔV 0,04 m³", value: 4000, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Gas memuai pada tekanan tetap 200 kPa dari volume 0,01 m³ menjadi 0,03 m³. Berapa usaha yang dilakukan gas (joule)?",
        answer: 4000,
        tolerance: 10,
        suffix: " J",
        solution:
          "Proses isobarik: W = P·ΔV. ΔV = 0,03 − 0,01 = 0,02 m³, dan P = 200 kPa = 200.000 Pa. Maka W = 200.000 × 0,02 = <strong>4000 J</strong>. Usaha positif karena gas memuai mendorong piston.",
        hint: "W = P·ΔV. Ubah kPa ke Pa (× 1000) dan pakai ΔV dalam m³.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada proses isotermal, 1 mol gas pada 300 K memuai sehingga volumenya menjadi dua kali. Berapa usaha gas (joule)? Pakai W = nRT·ln(V₂/V₁), R = 8,314, ln 2 = 0,693.",
        answer: 1729,
        tolerance: 10,
        suffix: " J",
        solution:
          "W = nRT·ln(V₂/V₁) = 1 × 8,314 × 300 × ln 2 = 2494,2 × 0,693 = <strong>1729 J</strong>. Karena suhu tetap, energi dalam tidak berubah, jadi seluruh usaha ini berasal dari kalor yang diserap gas.",
        hint: "Hitung nRT dulu, lalu kalikan ln(V₂/V₁) = ln 2.",
      },
      {
        type: "classifyExercise",
        prompt: "Pasangkan ciri tiap proses dengan kelompoknya.",
        buckets: ["Isobarik", "Isokorik", "Isotermal", "Adiabatik"],
        items: [
          { text: "Tekanan dijaga tetap, usaha W = P·ΔV", bucket: "Isobarik" },
          { text: "Volume dikunci, usaha = 0", bucket: "Isokorik" },
          { text: "Suhu dijaga tetap, energi dalam tetap", bucket: "Isotermal" },
          { text: "Tanpa pertukaran kalor, Q = 0", bucket: "Adiabatik" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Langkah Tenaga pada Mesin Mobil",
        html: "Pada mesin bensin empat langkah, langkah paling penting adalah <strong>langkah tenaga</strong>: campuran terbakar lalu gas panas memuai dengan cepat, mendorong piston ke bawah. Karena berlangsung sangat cepat, hampir tidak ada kalor sempat keluar, sehingga mendekati proses <strong>adiabatik</strong>. Usaha yang dilakukan gas pada piston inilah yang diubah menjadi gerak putar lewat poros engkol. Mengenali jenis proses membantu insinyur menghitung tenaga dan efisiensi mesin.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengenali tiap jalan, rumus usaha jadi jelas. Isobarik (tekanan tetap): <strong>W = P·ΔV</strong>. Isokorik (volume tetap): <strong>W = 0</strong>. Isotermal (suhu tetap): <strong>W = nRT·ln(V₂/V₁)</strong>. Adiabatik (tanpa kalor, Q = 0): seluruh usaha diambil dari energi dalam, sehingga gas mendingin saat memuai. Pada grafik P terhadap V, usaha selalu sama dengan luas di bawah lintasan proses.",
      },
      {
        type: "takeaways",
        items: [
          "Gas melakukan usaha hanya saat volumenya berubah (W terkait ΔV).",
          "Isobarik: W = P·ΔV; isokorik: W = 0 karena volume tetap.",
          "Isotermal: suhu tetap, W = nRT·ln(V₂/V₁); adiabatik: Q = 0.",
          "Pada diagram P-V, usaha sama dengan luas daerah di bawah lintasan proses.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Usaha gas pada proses isobarik (tekanan tetap) adalah?",
            options: ["W = P·ΔV", "W = 0", "W = nRT", "W = mcΔT"],
            answer: 0,
            explain: "Pada tekanan tetap, W = P·ΔV.",
          },
          {
            q: "Pada proses isokorik (volume tetap), usaha gas?",
            options: ["Sangat besar", "Nol", "Negatif selalu", "Tak terhingga"],
            answer: 1,
            explain: "Volume tidak berubah, jadi tidak ada usaha (W = 0).",
          },
          {
            q: "Proses tanpa pertukaran kalor disebut?",
            options: ["Isobarik", "Isotermal", "Adiabatik", "Isokorik"],
            answer: 2,
            explain: "Adiabatik berarti Q = 0, tidak ada kalor yang masuk atau keluar.",
          },
          {
            q: "Gas memuai pada 100 kPa dari 0,02 ke 0,05 m³. Usahanya?",
            options: ["3000 J", "300 J", "5000 J", "100 J"],
            answer: 0,
            explain: "W = P·ΔV = 100.000 × 0,03 = 3000 J.",
          },
          {
            q: "Pada diagram P-V, usaha gas sama dengan?",
            options: [
              "Kemiringan kurva",
              "Luas daerah di bawah lintasan proses",
              "Titik potong sumbu",
              "Panjang kurva",
            ],
            answer: 1,
            explain: "Usaha = luas di bawah kurva proses pada diagram P-V.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "energi-dalam-gas",
    levelId: "hukum-termodinamika",
    order: 2,
    title: "Energi Dalam Gas Ideal",
    summary:
      "Tabung gas yang dipanaskan menyimpan lebih banyak energi walau tampak diam. Energi itu tersembunyi dalam gerak molekulnya. Kita pahami dulu sebelum bertemu rumusnya.",
    durationMin: 14,
    tags: ["fisika", "termodinamika", "energi dalam", "gas ideal"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah tabung gas yang dipanaskan tampak diam di tempatnya, tidak bergerak ke mana-mana. Namun di dalamnya tersimpan energi yang makin besar saat makin panas. Energi itu bukan energi gerak tabung, melainkan <strong>energi gerak jutaan molekulnya</strong>. Inilah energi dalam. Ayo pahami dari mana asalnya dulu sebelum bertemu rumusnya.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Energi yang Tersimpan dalam Sistem",
        caption: "Energi dalam adalah total energi gerak dan getaran seluruh molekul sebuah sistem.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pompa ban berkali-kali sambil menutup lubangnya, lalu raba badan pompa: hangat. Kamu menekan gas, dan energinya berubah menjadi gerak molekul yang lebih cepat, yaitu kenaikan <strong>energi dalam</strong>. Amati hal penting: untuk gas ideal, energi dalam hanya bergantung pada suhu, bukan pada volume atau tekanan. Naikkan suhunya, energi dalamnya naik; turunkan suhunya, energi dalamnya turun, titik.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Energi dalam hanya soal suhu",
        html: "<strong>Energi dalam (U)</strong> adalah jumlah seluruh energi kinetik molekul gas. Untuk gas ideal, U hanya bergantung pada <strong>suhu mutlak</strong> dan jumlah molekul, tidak pada bentuk wadah atau tekanannya. Gas monoatomik (helium, argon) menyimpan energi hanya dalam gerak maju-mundur tiga arah, sehingga U = (3/2)nRT. Gas diatomik (oksigen, nitrogen) bisa juga berputar, sehingga energinya lebih besar.",
      },
      {
        type: "widget",
        widget: "KalkulatorUsahaEnergi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Energi Dalam 1 mol Gas Monoatomik vs Suhu",
        unit: "joule",
        source: "dihitung dari U = (3/2)·R·T untuk 1 mol",
        note: "Garisnya lurus melalui titik asal: energi dalam berbanding lurus dengan suhu mutlak. Menggandakan suhu kelvin menggandakan energi dalam. Nilai dihitung dari rumus.",
        data: [
          { label: "200 K", value: 2494, color: "#38bdf8" },
          { label: "300 K", value: 3741, color: "#34d399" },
          { label: "400 K", value: 4988, color: "#fbbf24" },
          { label: "500 K", value: 6236, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa perubahan energi dalam (joule) saat 2 mol gas monoatomik dipanaskan dari 300 K menjadi 400 K? Pakai ΔU = (3/2)·n·R·ΔT, R = 8,314.",
        answer: 2494,
        tolerance: 10,
        suffix: " J",
        solution:
          "ΔU = (3/2)·n·R·ΔT = 1,5 × 2 × 8,314 × (400 − 300) = 1,5 × 2 × 8,314 × 100 = <strong>2494,2 J</strong>. Energi dalam bertambah karena suhu naik; tidak peduli bagaimana volumenya berubah.",
        hint: "Pakai ΔU = (3/2)·n·R·ΔT dengan ΔT = 100 K.",
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa energi dalam total (joule) 3 mol gas monoatomik pada 350 K? Pakai U = (3/2)·n·R·T, R = 8,314.",
        answer: 13095,
        tolerance: 20,
        suffix: " J",
        solution:
          "U = (3/2)·n·R·T = 1,5 × 3 × 8,314 × 350 = 1,5 × 8729,7 = <strong>13.094,6 J</strong>. Inilah total energi gerak seluruh molekulnya pada suhu itu.",
        hint: "Masukkan n = 3 dan T = 350 K ke U = (3/2)nRT.",
      },
      {
        type: "classifyExercise",
        prompt: "Untuk gas ideal, kelompokkan tiap perubahan: energi dalam naik, turun, atau tetap.",
        buckets: ["U naik", "U turun", "U tetap"],
        items: [
          { text: "Gas dipanaskan sehingga suhunya naik", bucket: "U naik" },
          { text: "Gas memuai isotermal (suhu tetap)", bucket: "U tetap" },
          { text: "Gas didinginkan sehingga suhunya turun", bucket: "U turun" },
          { text: "Gas ditekan adiabatik sehingga suhunya naik", bucket: "U naik" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Gas Memuai Adiabatik Menjadi Dingin",
        html: "Semprotan parfum atau gas dari tabung terasa dingin saat keluar. Sebabnya: gas memuai dengan sangat cepat tanpa sempat menyerap kalor dari sekitarnya (adiabatik, Q = 0). Karena ia melakukan usaha mendorong udara luar tetapi tidak mendapat kalor pengganti, energinya diambil dari <strong>energi dalam</strong> sendiri, sehingga suhunya turun. Prinsip yang sama mendinginkan udara di mesin pendingin dan membentuk awan saat udara naik dan memuai di atmosfer.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah memahami asalnya, rumus jadi padat. Energi dalam gas ideal monoatomik: <strong>U = (3/2)·n·R·T</strong>, dan perubahannya <strong>ΔU = (3/2)·n·R·ΔT</strong>. Untuk gas diatomik dipakai (5/2)nRT. Kunci utamanya: untuk gas ideal, U hanya bergantung pada suhu mutlak. Jika suhu tidak berubah (isotermal), maka ΔU = 0 berapa pun perubahan volume atau tekanannya.",
      },
      {
        type: "takeaways",
        items: [
          "Energi dalam U adalah total energi gerak molekul gas.",
          "Untuk gas ideal, U hanya bergantung pada suhu mutlak.",
          "Gas monoatomik: U = (3/2)nRT; perubahannya ΔU = (3/2)nRΔT.",
          "Proses isotermal berarti ΔU = 0 walau volume berubah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Energi dalam gas ideal bergantung pada?",
            options: ["Bentuk wadah", "Suhu mutlak", "Warna gas", "Tekanan saja"],
            answer: 1,
            explain: "Untuk gas ideal, U hanya bergantung pada suhu mutlak.",
          },
          {
            q: "Energi dalam gas monoatomik dirumuskan?",
            options: ["U = (3/2)nRT", "U = P·ΔV", "U = mcΔT", "U = e·σ·A·T⁴"],
            answer: 0,
            explain: "Gas monoatomik: U = (3/2)nRT.",
          },
          {
            q: "Pada proses isotermal (suhu tetap), perubahan energi dalam gas ideal?",
            options: ["Sangat besar", "Nol", "Selalu negatif", "Tak terhingga"],
            answer: 1,
            explain: "Suhu tetap berarti ΔU = 0 untuk gas ideal.",
          },
          {
            q: "ΔU saat 1 mol gas monoatomik naik dari 300 ke 500 K?",
            options: ["2494 J", "1247 J", "6236 J", "100 J"],
            answer: 0,
            explain: "ΔU = 1,5 × 1 × 8,314 × 200 = 2494 J.",
          },
          {
            q: "Mengapa gas yang memuai adiabatik menjadi dingin?",
            options: [
              "Karena menyerap kalor besar",
              "Karena melakukan usaha dengan mengambil dari energi dalamnya",
              "Karena tekanannya naik",
              "Karena molekulnya hilang",
            ],
            answer: 1,
            explain: "Tanpa kalor masuk (Q = 0), usaha diambil dari U, jadi suhu turun.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hukum-termodinamika",
    levelId: "hukum-termodinamika",
    order: 3,
    title: "Hukum Termodinamika I dan II",
    summary:
      "Kopi panas selalu mendingin, tak pernah memanas sendiri. Energi kekal tapi punya arah. Kita temukan dua hukum besar dari kisah sehari-hari dulu.",
    durationMin: 15,
    tags: ["fisika", "termodinamika", "entropi", "hukum termodinamika"],
    blocks: [
      {
        type: "paragraph",
        html: "Secangkir kopi panas di meja selalu mendingin sampai sesuhu ruangan. Tapi pernahkah kamu melihat kopi dingin tiba-tiba memanas sendiri dengan menyerap panas ruangan? Tidak pernah, walau itu tidak melanggar kekekalan energi. Ada <strong>arah</strong> di alam. Dua hukum termodinamika menjelaskannya. Ayo renungkan dulu kisahnya sebelum menulis rumus.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Energi, Kalor, dan Usaha",
        caption: "Kalor yang masuk bisa menjadi usaha atau menambah energi dalam sistem.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pompa ban sepeda berkali-kali, lalu pegang badan pompanya: hangat. Kamu melakukan usaha menekan gas, energinya tersimpan sebagai kenaikan energi dalam (suhu naik). Itulah Hukum I: energi tidak hilang, hanya berpindah bentuk. Sekarang amati: setetes tinta di air menyebar merata, tak pernah berkumpul lagi sendiri. Alam bergerak menuju keadaan makin acak. Itu petunjuk Hukum II dan <strong>entropi</strong>.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua hukum besar",
        html: "<strong>Hukum I (kekekalan energi)</strong>: kalor yang masuk ke sistem menjadi tambahan energi dalam plus usaha yang dilakukan sistem. Energi tidak diciptakan atau dimusnahkan. <strong>Hukum II (arah proses)</strong>: entropi (ukuran ketidakteraturan) total alam semesta selalu naik pada proses spontan. Inilah sebabnya kalor mengalir dari panas ke dingin, bukan sebaliknya.",
      },
      {
        type: "widget",
        widget: "KalkulatorUsahaEnergi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Neraca Energi Sebuah Proses (Hukum I)",
        unit: "J",
        source: "ilustrasi ΔU = Q − W",
        note: "Kalor masuk 500 J. Sebanyak 200 J keluar sebagai usaha, sisanya 300 J menambah energi dalam. Perhatikan: 500 = 300 + 200, energi tidak hilang.",
        data: [
          { label: "Kalor masuk Q", value: 500, color: "#f87171" },
          { label: "Usaha keluar W", value: 200, color: "#fbbf24" },
          { label: "Tambah energi dalam ΔU", value: 300, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah gas menyerap kalor 800 J dan melakukan usaha 300 J pada lingkungan. Berapa perubahan energi dalamnya, ΔU (joule)?",
        answer: 500,
        tolerance: 1,
        suffix: " J",
        solution:
          "Hukum I: ΔU = Q − W. Kalor masuk Q = 800 J (positif), usaha oleh gas W = 300 J (positif). Maka ΔU = 800 − 300 = <strong>500 J</strong>. Energi dalam gas bertambah 500 J.",
        hint: "Pakai ΔU = Q − W, dengan Q kalor masuk dan W usaha oleh sistem.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap proses: entropi sistem cenderung naik atau turun.",
        buckets: ["Entropi naik", "Entropi turun"],
        items: [
          { text: "Es mencair menjadi air", bucket: "Entropi naik" },
          { text: "Tinta menyebar merata di air", bucket: "Entropi naik" },
          { text: "Air membeku menjadi es di freezer", bucket: "Entropi turun" },
          { text: "Gas mengembang memenuhi ruang", bucket: "Entropi naik" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Mesin Tak Pernah 100% Efisien",
        html: "Insinyur bermimpi membuat mesin yang mengubah seluruh kalor menjadi usaha, tetapi Hukum II melarangnya. Setiap mesin kalor harus membuang sebagian energi sebagai kalor ke lingkungan yang lebih dingin; jika tidak, entropi total akan turun, dan itu mustahil terjadi spontan. Itu sebabnya mesin mobil membuang panas lewat knalpot dan radiator. <strong>Entropi yang selalu naik</strong> menetapkan batas yang tak bisa ditembus rekayasa secanggih apa pun.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah memahami kisahnya, dua hukum jadi padat. Hukum I: <strong>ΔU = Q − W</strong> (perubahan energi dalam = kalor masuk dikurangi usaha oleh sistem). Hukum II: <strong>ΔS<sub>total</sub> ≥ 0</strong>, entropi total alam semesta tak pernah berkurang pada proses spontan, dengan perubahan entropi <strong>ΔS = Q/T</strong>. Hukum I berkata energi kekal; Hukum II berkata energi punya arah.",
      },
      {
        type: "takeaways",
        items: [
          "Hukum I: energi kekal, ΔU = Q − W.",
          "Hukum II: entropi total alam semesta selalu naik pada proses spontan.",
          "Entropi adalah ukuran ketidakteraturan; ΔS = Q/T.",
          "Hukum II menjelaskan arah alami: kalor mengalir dari panas ke dingin.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum I Termodinamika menyatakan?",
            options: [
              "Entropi selalu naik",
              "Energi kekal: ΔU = Q − W",
              "Kalor mengalir dari dingin ke panas",
              "Mesin bisa 100% efisien",
            ],
            answer: 1,
            explain: "Hukum I adalah kekekalan energi: ΔU = Q − W.",
          },
          {
            q: "Gas menyerap 600 J dan melakukan usaha 250 J. ΔU-nya?",
            options: ["850 J", "350 J", "250 J", "600 J"],
            answer: 1,
            explain: "ΔU = Q − W = 600 − 250 = 350 J.",
          },
          {
            q: "Apa yang dimaksud entropi?",
            options: [
              "Ukuran suhu mutlak",
              "Ukuran ketidakteraturan sistem",
              "Jumlah mol gas",
              "Tekanan gas",
            ],
            answer: 1,
            explain: "Entropi mengukur tingkat ketidakteraturan sistem.",
          },
          {
            q: "Menurut Hukum II, entropi total alam semesta pada proses spontan?",
            options: ["Selalu turun", "Selalu naik", "Selalu tetap", "Bisa nol"],
            answer: 1,
            explain: "Hukum II: entropi total selalu naik (ΔS_total ≥ 0).",
          },
          {
            q: "Mengapa kopi panas tak pernah memanas sendiri dari ruangan dingin?",
            options: [
              "Melanggar kekekalan energi",
              "Akan menurunkan entropi total, yang mustahil spontan",
              "Karena kopi tidak punya energi",
              "Karena suhu tidak nyata",
            ],
            answer: 1,
            explain: "Prosesnya akan menurunkan entropi total, dilarang Hukum II.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "entropi-dan-hukum-kedua",
    levelId: "hukum-termodinamika",
    order: 4,
    title: "Entropi dan Arah Waktu",
    summary:
      "Gelas pecah tak pernah menyusun diri lagi, dan kamar berantakan tak pernah rapi sendiri. Ada panah waktu yang ditunjukkan entropi. Kita pahami dulu sebelum menghitungnya.",
    durationMin: 15,
    tags: ["fisika", "termodinamika", "entropi", "hukum kedua"],
    blocks: [
      {
        type: "paragraph",
        html: "Putar mundur video gelas yang jatuh pecah: pecahannya melompat menyusun diri menjadi gelas utuh. Kamu langsung tahu video itu diputar terbalik, karena di dunia nyata hal itu tak pernah terjadi. Mengapa? Alam punya <strong>arah</strong>: selalu menuju keadaan lebih acak, tak pernah sebaliknya secara spontan. Ukuran keacakan itu disebut entropi. Ayo pahami gagasannya dulu sebelum menghitungnya.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Arah Alami Proses Alam",
        caption: "Proses spontan selalu menuju keadaan yang lebih tersebar dan lebih tidak teratur.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Teteskan tinta ke segelas air bening. Tinta menyebar pelan sampai air berubah warna merata, dan tak pernah berkumpul lagi jadi setetes. Mengapa? Karena ada amat sangat banyak cara molekul tinta tersebar, tetapi hanya sedikit cara mereka berkumpul rapi. Alam 'memilih' yang jumlah kemungkinannya terbanyak. Amati: <strong>keadaan acak jauh lebih mungkin daripada keadaan teratur</strong>, dan itulah jantung Hukum II.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Entropi, ukuran ketidakteraturan",
        html: "<strong>Entropi (S)</strong> mengukur banyaknya cara menyusun molekul suatu keadaan; makin banyak caranya, makin tinggi entropinya, makin 'acak'. Hukum II menyatakan entropi total alam semesta <strong>tidak pernah berkurang</strong> pada proses spontan. Ketika kalor Q mengalir masuk pada suhu T, entropi sistem bertambah sebesar Q/T. Karena pembagi T, kalor yang sama menambah entropi lebih banyak pada benda dingin daripada benda panas.",
      },
      {
        type: "widget",
        widget: "KalkulatorUsahaEnergi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perubahan Entropi Saat 1000 J Mengalir dari 400 K ke 300 K",
        unit: "J/K",
        source: "dihitung dari ΔS = Q/T",
        note: "Benda panas kehilangan entropi 2,5 J/K, benda dingin menerima 3,33 J/K, sehingga total naik 0,83 J/K. Karena pembagi T, perpindahan ini menambah entropi total: itulah sebabnya prosesnya spontan.",
        data: [
          { label: "Sumber panas (−Q/Th)", value: -2.5, color: "#f87171" },
          { label: "Sumber dingin (+Q/Tc)", value: 3.33, color: "#38bdf8" },
          { label: "Total alam semesta", value: 0.83, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebanyak 334.000 J kalor diserap untuk mencairkan es pada 273 K. Berapa pertambahan entropinya (J/K)? Pakai ΔS = Q/T.",
        answer: 1223.4,
        tolerance: 5,
        suffix: " J/K",
        solution:
          "ΔS = Q/T = 334.000 / 273 = <strong>1223,4 J/K</strong>. Es padat yang teratur berubah menjadi air cair yang lebih acak, jadi entropinya naik. Suhu harus dalam kelvin.",
        hint: "Pakai ΔS = Q/T dengan T = 273 K (titik lebur es).",
      },
      {
        type: "calcExercise",
        prompt:
          "Kalor 1000 J berpindah dari benda 400 K ke benda 300 K. Berapa perubahan entropi total alam semesta (J/K)? Pakai ΔS = Q/T untuk tiap benda.",
        answer: 0.83,
        tolerance: 0.05,
        suffix: " J/K",
        solution:
          "Benda panas kehilangan entropi −1000/400 = −2,5 J/K. Benda dingin menerima +1000/300 = +3,33 J/K. Total = −2,5 + 3,33 = <strong>+0,83 J/K</strong>. Karena positif, perpindahan dari panas ke dingin memang spontan menurut Hukum II.",
        hint: "Jumlahkan −Q/Th (benda panas) dan +Q/Tc (benda dingin).",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap proses: entropi total naik (spontan) atau seolah turun (mustahil spontan).",
        buckets: ["Entropi naik (spontan)", "Seolah turun (mustahil spontan)"],
        items: [
          { text: "Kalor mengalir dari benda panas ke benda dingin", bucket: "Entropi naik (spontan)" },
          { text: "Parfum menyebar memenuhi ruangan", bucket: "Entropi naik (spontan)" },
          { text: "Kalor mengalir sendiri dari dingin ke panas", bucket: "Seolah turun (mustahil spontan)" },
          { text: "Pecahan gelas menyusun diri menjadi utuh", bucket: "Seolah turun (mustahil spontan)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Kulkas Tidak Melanggar Hukum II",
        html: "Kulkas memindahkan kalor dari dalam yang dingin ke ruangan yang lebih panas, seolah membalik arah alami. Bukankah itu menurunkan entropi? Tidak, karena kulkas memakai <strong>kerja listrik kompresor</strong>, dan kerja itu pada akhirnya juga dilepas sebagai kalor ke ruangan. Jika dihitung lengkap, kenaikan entropi di luar lebih besar daripada penurunan di dalam, sehingga entropi total tetap naik. Hukum II tidak melarang menurunkan entropi setempat, asalkan entropi total alam semesta tetap bertambah.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah memahami arahnya, rumus entropi jadi bermakna. Perubahan entropi saat kalor Q berpindah pada suhu T: <strong>ΔS = Q/T</strong> (satuan J/K). Hukum II: <strong>ΔS<sub>total</sub> ≥ 0</strong>, entropi total alam semesta tak pernah berkurang pada proses spontan, dan tepat nol hanya pada proses ideal yang reversibel. Inilah panah waktu fisika: alam selalu bergerak ke entropi yang lebih tinggi.",
      },
      {
        type: "takeaways",
        items: [
          "Entropi mengukur ketidakteraturan; keadaan acak jauh lebih mungkin daripada teratur.",
          "Perubahan entropi saat kalor berpindah: ΔS = Q/T (suhu dalam kelvin).",
          "Hukum II: entropi total alam semesta tak pernah berkurang (ΔS total ≥ 0).",
          "Entropi setempat boleh turun (kulkas) asalkan entropi total tetap naik.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Perubahan entropi saat kalor Q berpindah pada suhu T adalah?",
            options: ["ΔS = Q/T", "ΔS = Q·T", "ΔS = T/Q", "ΔS = Q − T"],
            answer: 0,
            explain: "Perubahan entropi: ΔS = Q/T.",
          },
          {
            q: "Mengapa tinta menyebar tetapi tak pernah berkumpul kembali sendiri?",
            options: [
              "Karena tinta menolak air",
              "Karena keadaan tersebar jauh lebih mungkin (entropi tinggi)",
              "Karena air panas",
              "Karena tinta menguap",
            ],
            answer: 1,
            explain: "Keadaan acak punya jauh lebih banyak kemungkinan, jadi entropinya tinggi.",
          },
          {
            q: "Saat 600 J kalor diserap pada suhu 300 K, perubahan entropinya?",
            options: ["2 J/K", "1800 J/K", "0,5 J/K", "300 J/K"],
            answer: 0,
            explain: "ΔS = Q/T = 600/300 = 2 J/K.",
          },
          {
            q: "Hukum II menyatakan entropi total alam semesta pada proses spontan?",
            options: ["Tidak pernah berkurang", "Selalu nol", "Selalu berkurang", "Tidak menentu"],
            answer: 0,
            explain: "ΔS total ≥ 0: entropi total tak pernah berkurang.",
          },
          {
            q: "Mengapa kulkas tidak melanggar Hukum II?",
            options: [
              "Karena tidak ada entropi",
              "Karena kerja kompresor membuat entropi total tetap naik",
              "Karena kalor mengalir sendiri",
              "Karena kulkas tidak memakai energi",
            ],
            answer: 1,
            explain: "Kerja kompresor dibuang sebagai kalor, sehingga entropi total tetap naik.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kapasitas-kalor-molar-gas",
    levelId: "hukum-termodinamika",
    order: 5,
    title: "Kapasitas Kalor Molar: Cv, Cp, dan Relasi Mayer",
    summary:
      "Memanaskan gas dalam tabung kaku berbeda dari memanaskannya sambil membiarkan memuai. Pada tekanan tetap dibutuhkan kalor lebih banyak, dan selisihnya bukan kebetulan. Kita amati dulu sebelum berumus.",
    durationMin: 14,
    tags: ["fisika", "termodinamika", "kapasitas kalor", "mayer", "gas ideal"],
    blocks: [
      {
        type: "paragraph",
        html: "Panaskan gas dalam tabung baja kaku yang volumenya tidak bisa berubah, lalu panaskan gas yang sama dalam silinder berpiston yang bebas memuai. Untuk menaikkan suhu sebanyak yang sama, ternyata cara kedua menelan <strong>kalor lebih banyak</strong>. Ke mana kelebihan kalor itu pergi? Ayo amati dulu apa yang terjadi sebelum kita rumuskan dua macam kapasitas kalor gas.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Kalor, Energi Dalam, dan Usaha",
        caption: "Kalor yang masuk bisa terpecah menjadi kenaikan energi dalam dan usaha memuai.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dua percobaan menaikkan suhu gas 1 derajat. Pada <strong>volume tetap</strong>, piston dikunci sehingga gas tidak melakukan usaha; seluruh kalor menjadi tambahan energi dalam. Pada <strong>tekanan tetap</strong>, gas memuai mendorong piston, jadi sebagian kalor terpakai untuk usaha, dan sisanya barulah menaikkan suhu. Amati: karena ada usaha ekstra ini, memanaskan gas pada tekanan tetap selalu butuh kalor lebih banyak.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua kapasitas kalor",
        html: "Gas punya dua kapasitas kalor molar. <strong>Cv</strong> (volume tetap): kalor untuk menaikkan suhu 1 mol gas sebesar 1 kelvin tanpa memuai. <strong>Cp</strong> (tekanan tetap): kalor untuk hal sama tetapi gas dibiarkan memuai. Karena pada tekanan tetap gas juga melakukan usaha, selalu <strong>Cp lebih besar daripada Cv</strong>. Untuk gas ideal monoatomik, Cv = (3/2)R dan Cp = (5/2)R.",
      },
      {
        type: "widget",
        widget: "KalkulatorUsahaEnergi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kapasitas Kalor Molar Gas Ideal",
        unit: "J/mol·K",
        source: "dihitung dari kelipatan R = 8,314 J/mol·K",
        note: "Pada tiap jenis gas, Cp selalu lebih tinggi daripada Cv tepat sebesar R. Gas diatomik menyimpan energi lebih banyak karena molekulnya bisa berputar.",
        data: [
          { label: "Cv monoatomik", value: 12.47, color: "#38bdf8" },
          { label: "Cp monoatomik", value: 20.79, color: "#34d399" },
          { label: "Cv diatomik", value: 20.79, color: "#fbbf24" },
          { label: "Cp diatomik", value: 29.10, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa kalor (joule) untuk memanaskan 2 mol gas monoatomik sebesar 50 K pada volume tetap? Pakai Cv = (3/2)R = 12,47 J/mol·K.",
        answer: 1247,
        tolerance: 5,
        suffix: " J",
        solution:
          "Pada volume tetap, Q = n·Cv·ΔT = 2 × 12,47 × 50 = <strong>1247 J</strong>. Karena gas tidak memuai, seluruh kalor ini menjadi tambahan energi dalam, jadi Q sama dengan ΔU.",
        hint: "Pakai Q = n·Cv·ΔT dengan Cv = 12,47 J/mol·K.",
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa kalor (joule) untuk memanaskan 2 mol gas monoatomik yang sama sebesar 50 K, kali ini pada tekanan tetap? Pakai Cp = (5/2)R = 20,79 J/mol·K.",
        answer: 2079,
        tolerance: 5,
        suffix: " J",
        solution:
          "Pada tekanan tetap, Q = n·Cp·ΔT = 2 × 20,79 × 50 = <strong>2079 J</strong>. Selisihnya dengan kasus volume tetap, 2079 − 1247 = 832 J, persis sama dengan usaha memuai n·R·ΔT = 2 × 8,314 × 50 = 831 J. Itulah relasi Mayer.",
        hint: "Pakai Q = n·Cp·ΔT, lalu bandingkan selisihnya dengan n·R·ΔT.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap istilah dengan maknanya.",
        pairs: [
          { left: "Cv gas monoatomik", right: "(3/2)R, sekitar 12,47 J/mol·K" },
          { left: "Cp gas monoatomik", right: "(5/2)R, sekitar 20,79 J/mol·K" },
          { left: "Selisih Cp − Cv", right: "Sama dengan R (relasi Mayer)" },
          { left: "Pemanasan volume tetap", right: "Usaha nol, Q seluruhnya jadi ΔU" },
        ],
      },
      {
        type: "case",
        title: "Sejarah: Mayer dan Setara Mekanik Kalor",
        html: "Pada 1842, dokter Jerman Julius Robert von Mayer memperhatikan bahwa memanaskan gas pada tekanan tetap butuh kalor lebih banyak daripada pada volume tetap. Ia menyadari kelebihan kalor itu, yaitu selisih <strong>Cp dikurangi Cv</strong>, justru dipakai gas untuk melakukan usaha memuai. Dari sini Mayer memperkirakan berapa joule yang setara dengan satu satuan kalor, salah satu rumusan awal kekekalan energi. Selisih dua kapasitas kalor gas menjadi jembatan antara panas dan usaha mekanik.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah memahami asalnya, rumus jadi padat. Kalor pada volume tetap: <strong>Q = n·Cv·ΔT</strong> (seluruhnya jadi ΔU). Kalor pada tekanan tetap: <strong>Q = n·Cp·ΔT</strong> (jadi ΔU plus usaha P·ΔV). Selisihnya adalah relasi Mayer: <strong>Cp − Cv = R</strong>. Untuk gas monoatomik Cv = (3/2)R dan Cp = (5/2)R; untuk diatomik Cv = (5/2)R dan Cp = (7/2)R.",
      },
      {
        type: "takeaways",
        items: [
          "Cv adalah kapasitas kalor molar pada volume tetap; Cp pada tekanan tetap.",
          "Cp selalu lebih besar dari Cv karena gas juga melakukan usaha saat memuai.",
          "Relasi Mayer untuk gas ideal: Cp − Cv = R.",
          "Gas monoatomik: Cv = (3/2)R, Cp = (5/2)R; diatomik lebih besar karena bisa berotasi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Relasi Mayer untuk gas ideal menyatakan?",
            options: ["Cp − Cv = R", "Cp + Cv = R", "Cp · Cv = R", "Cp = Cv"],
            answer: 0,
            explain: "Selisih kapasitas kalor molar tekanan tetap dan volume tetap sama dengan R.",
          },
          {
            q: "Mengapa Cp lebih besar daripada Cv?",
            options: [
              "Karena tekanan lebih berbahaya",
              "Karena pada tekanan tetap gas juga melakukan usaha memuai",
              "Karena volume tetap melepas kalor",
              "Karena Cv tidak nyata",
            ],
            answer: 1,
            explain: "Pada tekanan tetap, sebagian kalor jadi usaha, jadi butuh kalor lebih banyak.",
          },
          {
            q: "Kapasitas kalor molar Cv gas monoatomik adalah?",
            options: ["(3/2)R", "(5/2)R", "(7/2)R", "R"],
            answer: 0,
            explain: "Gas monoatomik: Cv = (3/2)R, sekitar 12,47 J/mol·K.",
          },
          {
            q: "Memanaskan 1 mol gas monoatomik 1 K pada volume tetap perlu kalor sekitar?",
            options: ["8,3 J", "12,5 J", "20,8 J", "100 J"],
            answer: 1,
            explain: "Q = Cv × 1 = (3/2)R ≈ 12,47 J.",
          },
          {
            q: "Pada pemanasan volume tetap, kalor yang masuk seluruhnya menjadi?",
            options: [
              "Usaha memuai",
              "Tambahan energi dalam (suhu naik)",
              "Kalor laten",
              "Radiasi",
            ],
            answer: 1,
            explain: "Volume tetap berarti usaha nol, jadi Q seluruhnya menambah energi dalam.",
          },
        ],
      },
    ],
  },
];
