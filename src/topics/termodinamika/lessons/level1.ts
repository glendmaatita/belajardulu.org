import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "suhu-dan-kalor",
    levelId: "suhu-kalor",
    order: 1,
    title: "Suhu dan Kalor",
    summary:
      "Sebelum bertemu rumus, kita amati dulu es batu yang mencair di gelas: mengapa minuman menjadi dingin dan apa beda suhu dengan kalor.",
    durationMin: 13,
    tags: ["fisika", "termodinamika", "suhu", "kalor"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu menjatuhkan sebongkah es ke dalam segelas teh hangat. Lama-lama es itu lenyap dan tehnya jadi dingin. Apa sebenarnya yang 'mengalir' dari teh ke es? Bukan suhu, melainkan <strong>kalor</strong>, yaitu energi yang berpindah karena ada beda suhu. Ayo jelajahi dulu kisah ini sebelum kita menuliskan rumus apa pun.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Suhu sebagai Besaran Pokok",
        caption: "Suhu adalah salah satu dari tujuh besaran pokok SI, dengan satuan kelvin.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pegang gagang sendok logam yang dicelupkan ke air panas, lalu pegang juga sendok plastik di air yang sama. Logam terasa lebih cepat panas. Padahal <strong>suhu</strong> airnya sama. Artinya suhu (seberapa panas) berbeda dari kalor (berapa banyak energi yang mengalir). Amati: kalor selalu mengalir dari yang panas ke yang dingin, tidak pernah sebaliknya secara spontan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Suhu bukan kalor",
        html: "<strong>Suhu</strong> mengukur rata-rata energi gerak partikel; satuannya kelvin (K), celsius (°C), atau fahrenheit (°F). <strong>Kalor</strong> adalah energi yang berpindah karena beda suhu; satuannya joule (J). Secangkir air mendidih dan sepanci air mendidih punya suhu sama, tapi panci menyimpan kalor jauh lebih banyak.",
      },
      {
        type: "widget",
        widget: "KonversiSatuan",
      },
      {
        type: "chart",
        variant: "line",
        title: "Suhu Air Saat Dipanaskan dari Es",
        unit: "°C",
        source: "ilustrasi edukatif fisika kalor",
        note: "Perhatikan dataran datar di 0 °C: di sana kalor masuk tetapi suhu tetap, karena energinya dipakai untuk mencairkan es, bukan menaikkan suhu.",
        data: [
          { label: "0 kJ", value: -20, color: "#38bdf8" },
          { label: "40 kJ", value: 0, color: "#22d3ee" },
          { label: "180 kJ", value: 0, color: "#2dd4bf" },
          { label: "260 kJ", value: 40, color: "#34d399" },
          { label: "340 kJ", value: 80, color: "#fbbf24" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Suhu ruangan 25 °C. Berapa nilainya dalam kelvin?",
        answer: 298.15,
        tolerance: 0.5,
        suffix: " K",
        solution:
          "Skala kelvin hanya menggeser nol skala celsius: T(K) = T(°C) + 273,15. Jadi 25 + 273,15 = <strong>298,15 K</strong>. Ukuran satu derajat celsius sama besar dengan satu kelvin, hanya titik nolnya berbeda.",
        hint: "Tambahkan 273,15 pada suhu celsius.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan pernyataan ini sebagai sifat suhu atau sifat kalor.",
        buckets: ["Suhu", "Kalor"],
        items: [
          { text: "Diukur dalam kelvin atau celsius", bucket: "Suhu" },
          { text: "Energi yang berpindah, diukur dalam joule", bucket: "Kalor" },
          { text: "Menunjukkan rata-rata gerak partikel", bucket: "Suhu" },
          { text: "Selalu mengalir dari panas ke dingin", bucket: "Kalor" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Lautan Menjaga Iklim Bumi",
        html: "Kota pesisir cenderung punya suhu lebih stabil daripada kota di tengah gurun. Penyebabnya: air laut mampu menyerap kalor sangat banyak tanpa suhunya melonjak. Pada siang hari laut menyerap kalor matahari, pada malam hari melepaskannya perlahan. Inilah bukti nyata bahwa <strong>kalor (energi yang berpindah)</strong> dan <strong>suhu (derajat panas)</strong> adalah dua hal berbeda: lautan menelan kalor besar dengan perubahan suhu kecil.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru rumusnya bermakna. Suhu dan kalor berbeda: konversi suhu <strong>T(K) = T(°C) + 273,15</strong>, sedangkan kalor adalah energi berpindah yang diukur dalam joule. Kalor selalu mengalir dari benda bersuhu tinggi ke benda bersuhu rendah sampai keduanya setimbang (asas Black).",
      },
      {
        type: "takeaways",
        items: [
          "Suhu mengukur derajat panas; kalor adalah energi yang berpindah karena beda suhu.",
          "Skala kelvin: T(K) = T(°C) + 273,15, dengan ukuran derajat yang sama.",
          "Kalor selalu mengalir dari benda panas ke benda dingin hingga setimbang.",
          "Saat zat berubah wujud, kalor masuk tetapi suhu bisa tetap.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa beda mendasar antara suhu dan kalor?",
            options: [
              "Tidak ada bedanya",
              "Suhu derajat panas, kalor energi yang berpindah",
              "Kalor diukur dalam kelvin",
              "Suhu diukur dalam joule",
            ],
            answer: 1,
            explain: "Suhu adalah derajat panas (kelvin), kalor adalah energi berpindah (joule).",
          },
          {
            q: "30 °C sama dengan berapa kelvin?",
            options: ["303,15 K", "30 K", "273 K", "243,15 K"],
            answer: 0,
            explain: "30 + 273,15 = 303,15 K.",
          },
          {
            q: "Ke mana arah aliran kalor secara spontan?",
            options: [
              "Dari dingin ke panas",
              "Dari panas ke dingin",
              "Selalu ke atas",
              "Tidak mengalir sama sekali",
            ],
            answer: 1,
            explain: "Kalor mengalir spontan dari suhu tinggi ke suhu rendah.",
          },
          {
            q: "Saat es mencair di 0 °C, kalor yang masuk dipakai untuk?",
            options: [
              "Menaikkan suhu es",
              "Mengubah wujud es menjadi air",
              "Menurunkan suhu",
              "Tidak terjadi apa-apa",
            ],
            answer: 1,
            explain: "Selama perubahan wujud, suhu tetap; kalor dipakai mengubah wujud.",
          },
          {
            q: "Mengapa kota pesisir suhunya lebih stabil?",
            options: [
              "Air menyerap kalor besar dengan perubahan suhu kecil",
              "Laut tidak menyerap kalor",
              "Matahari tidak menyinari laut",
              "Air tidak punya suhu",
            ],
            answer: 0,
            explain: "Air menyerap dan melepas kalor banyak tanpa lonjakan suhu.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "skala-suhu",
    levelId: "suhu-kalor",
    order: 2,
    title: "Skala Suhu: Celsius, Kelvin, Fahrenheit",
    summary:
      "Demam 37 derajat di Indonesia, tetapi 98,6 derajat di Amerika. Angkanya beda, panasnya sama. Kita pahami dulu tiga skala suhu sebelum menulis rumus konversinya.",
    durationMin: 13,
    tags: ["fisika", "termodinamika", "suhu", "skala", "konversi"],
    blocks: [
      {
        type: "paragraph",
        html: "Seorang turis Amerika panik membaca ramalan cuaca Jakarta: '32 derajat'. Di negaranya 32 derajat berarti titik beku air, sangat dingin. Padahal yang dimaksud 32 °C, panas terik. Angka yang sama bisa berarti panas berbeda karena dipakai <strong>skala</strong> yang berbeda. Ayo kenali ketiga skala suhu dulu sebelum kita susun rumus konversinya.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Satuan dan Skala Pengukuran",
        caption: "Satu besaran fisis bisa punya banyak skala; yang penting titik acuan dan ukuran tiap derajatnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan tiga termometer dicelup ke air es lalu ke air mendidih. Celsius membaca 0 lalu 100, jadi rentangnya 100 bagian. Fahrenheit membaca 32 lalu 212, rentangnya 180 bagian. Kelvin membaca 273,15 lalu 373,15, rentang 100 bagian sama seperti celsius. Amati: ukuran satu derajat celsius sama dengan satu kelvin, tetapi satu derajat fahrenheit lebih kecil karena 180 bagian menutup rentang yang sama.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga skala, satu fenomena",
        html: "<strong>Celsius (°C)</strong>: nol di titik beku air, 100 di titik didih. <strong>Kelvin (K)</strong>: skala mutlak, nol di titik terdingin mungkin (−273,15 °C), tiap satu kelvin sama besar dengan satu celsius. <strong>Fahrenheit (°F)</strong>: beku air di 32, didih di 212. Karena 100 bagian celsius setara 180 bagian fahrenheit, perbandingannya 100:180 atau 5:9.",
      },
      {
        type: "widget",
        widget: "KonversiSatuan",
      },
      {
        type: "chart",
        variant: "line",
        title: "Suhu yang Sama Dibaca Celsius dan Fahrenheit",
        unit: "°F",
        source: "ilustrasi konversi linear C ke F",
        note: "Garisnya lurus karena hubungannya linear. Perhatikan di −40 keduanya bertemu di angka sama, dan tubuh manusia 37 °C terbaca 98,6 °F.",
        data: [
          { label: "-40 °C", value: -40, color: "#38bdf8" },
          { label: "0 °C", value: 32, color: "#22d3ee" },
          { label: "37 °C", value: 98.6, color: "#34d399" },
          { label: "100 °C", value: 212, color: "#fbbf24" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Suhu tubuh sehat 37 °C. Berapa nilainya dalam fahrenheit?",
        answer: 98.6,
        tolerance: 0.3,
        suffix: " °F",
        solution:
          "Konversi celsius ke fahrenheit: F = (9/5)·C + 32. Maka F = (9/5)×37 + 32 = 66,6 + 32 = <strong>98,6 °F</strong>. Inilah angka 'suhu badan normal' yang sering kamu dengar di film berbahasa Inggris.",
        hint: "Pakai F = (9/5)·C + 32, atau F = 1,8·C + 32.",
      },
      {
        type: "calcExercise",
        prompt: "Air mendidih terbaca 212 °F pada termometer Amerika. Berapa nilainya dalam celsius?",
        answer: 100,
        tolerance: 0.5,
        suffix: " °C",
        solution:
          "Balik rumusnya: C = (5/9)·(F − 32) = (5/9)×(212 − 32) = (5/9)×180 = <strong>100 °C</strong>. Cocok, karena 212 °F memang titik didih air.",
        hint: "Pakai C = (5/9)·(F − 32). Kurangi 32 dulu, baru kali 5/9.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap titik acuan dengan bacaan skalanya.",
        pairs: [
          { left: "Titik beku air", right: "0 °C = 32 °F = 273,15 K" },
          { left: "Titik didih air", right: "100 °C = 212 °F = 373,15 K" },
          { left: "Nol mutlak", right: "−273,15 °C = 0 K" },
          { left: "Suhu tubuh manusia", right: "37 °C = 98,6 °F" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Nol Mutlak dan Mengapa Kelvin Dipilih Ilmuwan",
        html: "Mengapa rumus gas dan radiasi selalu memakai kelvin, bukan celsius? Karena celsius punya angka negatif, dan rumus seperti PV = nRT akan kacau jika suhunya nol atau minus. Kelvin dimulai dari <strong>nol mutlak</strong>, suhu terendah yang mungkin (−273,15 °C), tempat gerak partikel hampir berhenti. Dengan titik nol yang punya makna fisis, perbandingan suhu menjadi sah: gas pada 600 K benar-benar punya energi gerak dua kali lipat gas pada 300 K.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah memahami acuannya, rumus konversi jadi masuk akal. Celsius ke kelvin: <strong>T(K) = T(°C) + 273,15</strong>. Celsius ke fahrenheit: <strong>F = (9/5)·C + 32</strong>. Fahrenheit ke celsius: <strong>C = (5/9)·(F − 32)</strong>. Angka 9/5 dan 5/9 muncul dari perbandingan 180 bagian fahrenheit terhadap 100 bagian celsius, sedangkan +32 menggeser titik beku air.",
      },
      {
        type: "takeaways",
        items: [
          "Celsius dan kelvin punya ukuran derajat sama; kelvin hanya bergeser +273,15.",
          "Fahrenheit memakai 180 bagian untuk rentang yang sama, jadi tiap derajatnya lebih kecil.",
          "Konversi utama: F = (9/5)C + 32 dan C = (5/9)(F − 32).",
          "Rumus fisika gas dan radiasi wajib memakai kelvin karena bertitik nol mutlak.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Berapa nilai 25 °C dalam fahrenheit?",
            options: ["77 °F", "57 °F", "45 °F", "98 °F"],
            answer: 0,
            explain: "F = 1,8×25 + 32 = 45 + 32 = 77 °F.",
          },
          {
            q: "Pada suhu berapa Celsius dan Fahrenheit menunjukkan angka yang sama?",
            options: ["0", "100", "-40", "32"],
            answer: 2,
            explain: "Hanya di −40, karena −40 °C = −40 °F.",
          },
          {
            q: "Mengapa rumus gas ideal memakai kelvin, bukan celsius?",
            options: [
              "Karena kelvin lebih populer",
              "Karena kelvin bertitik nol mutlak sehingga sebanding dengan energi gerak",
              "Karena celsius tidak punya satuan",
              "Karena fahrenheit dilarang",
            ],
            answer: 1,
            explain: "Kelvin mulai dari nol mutlak, sehingga nilainya sebanding dengan energi gerak partikel.",
          },
          {
            q: "Ukuran satu derajat celsius dibanding satu derajat fahrenheit?",
            options: [
              "Sama persis",
              "Celsius lebih kecil",
              "Celsius lebih besar (1 °C = 1,8 °F)",
              "Tidak bisa dibandingkan",
            ],
            answer: 2,
            explain: "100 bagian celsius setara 180 bagian fahrenheit, jadi 1 °C = 1,8 °F.",
          },
          {
            q: "Berapa nilai 50 °F dalam celsius?",
            options: ["10 °C", "18 °C", "122 °C", "5 °C"],
            answer: 0,
            explain: "C = (5/9)(50 − 32) = (5/9)×18 = 10 °C.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pemuaian-zat",
    levelId: "suhu-kalor",
    order: 3,
    title: "Pemuaian Zat",
    summary:
      "Rel kereta diberi celah, jembatan punya sambungan bergerigi, kabel listrik sengaja dibiarkan kendur. Semuanya soal benda yang memuai saat panas. Kita amati dulu sebelum berumus.",
    durationMin: 14,
    tags: ["fisika", "termodinamika", "pemuaian", "muai panjang"],
    blocks: [
      {
        type: "paragraph",
        html: "Perhatikan rel kereta api: di antara batang-batangnya selalu ada celah kecil. Kabel listrik antartiang sengaja dibiarkan kendur. Jembatan baja panjang punya sambungan bergerigi yang bisa bergeser. Ketiganya bukan kecerobohan, melainkan jawaban atas satu fakta: benda <strong>memuai</strong> saat suhunya naik. Ayo amati fenomenanya dulu sebelum kita susun rumus muai.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Mengukur Panjang dan Perubahannya",
        caption: "Perubahan panjang akibat suhu sangat kecil, tetapi nyata dan penting dalam rekayasa.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Tutup botol kaca yang macet bisa dibuka dengan menyiram tutup logamnya pakai air panas. Mengapa? Logam memuai lebih banyak daripada kaca pada kenaikan suhu yang sama, sehingga tutupnya melonggar. Amati juga: semakin panjang benda awalnya dan semakin besar kenaikan suhunya, semakin besar pemuaiannya. Setiap bahan punya 'kegemaran memuai' sendiri yang nanti kita sebut koefisien muai.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga jenis pemuaian",
        html: "<strong>Muai panjang</strong>: pertambahan panjang benda batang (rel, kabel). <strong>Muai luas</strong>: pertambahan luas lempeng, koefisiennya kira-kira dua kali muai panjang. <strong>Muai volume</strong>: pertambahan ruang benda padat atau zat cair, koefisiennya kira-kira tiga kali muai panjang. Tiap bahan dicirikan oleh <strong>koefisien muai panjang (α)</strong>, makin besar α makin mudah memuai.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Koefisien Muai Panjang Berbagai Bahan",
        unit: "×10⁻⁶ per °C",
        source: "nilai koefisien muai panjang acuan",
        note: "Makin tinggi nilainya, makin besar pemuaian per derajat. Aluminium memuai dua kali lebih banyak daripada baja, itulah sebabnya bahan yang berbeda perlu perlakuan berbeda.",
        data: [
          { label: "Aluminium", value: 24, color: "#f59e0b" },
          { label: "Tembaga", value: 17, color: "#fb923c" },
          { label: "Baja", value: 12, color: "#a3a3a3" },
          { label: "Beton", value: 12, color: "#94a3b8" },
          { label: "Kaca", value: 9, color: "#38bdf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Rel baja sepanjang 10 m memanas 30 °C di siang hari. Berapa pertambahan panjangnya (mm)? Pakai α baja = 1,2 × 10⁻⁵ /°C.",
        answer: 3.6,
        tolerance: 0.1,
        suffix: " mm",
        solution:
          "Pakai ΔL = α·L₀·ΔT = (1,2 × 10⁻⁵) × 10 × 30 = 0,0036 m = <strong>3,6 mm</strong>. Kecil, tapi jika rel-rel disambung rapat tanpa celah, total pemuaian sepanjang lintasan bisa membengkokkan rel. Itu sebabnya ada celah.",
        hint: "Pakai ΔL = α × L₀ × ΔT, lalu ubah meter ke milimeter (× 1000).",
      },
      {
        type: "calcExercise",
        prompt:
          "Batang aluminium 2 m dipanaskan sehingga suhunya naik 50 °C. Berapa pertambahan panjangnya (mm)? Pakai α aluminium = 2,4 × 10⁻⁵ /°C.",
        answer: 2.4,
        tolerance: 0.1,
        suffix: " mm",
        solution:
          "ΔL = α·L₀·ΔT = (2,4 × 10⁻⁵) × 2 × 50 = 0,0024 m = <strong>2,4 mm</strong>. Walau batangnya lebih pendek dari rel tadi, koefisien aluminium yang dua kali lebih besar membuat pemuaiannya tetap berarti.",
        hint: "ΔL = α × L₀ × ΔT. Pastikan L₀ dalam meter, lalu ubah hasil ke mm.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap rancangan: mengantisipasi pemuaian atau memanfaatkan pemuaian.",
        buckets: ["Mengantisipasi pemuaian", "Memanfaatkan pemuaian"],
        items: [
          { text: "Celah pada sambungan rel kereta", bucket: "Mengantisipasi pemuaian" },
          { text: "Sambungan bergerigi pada jembatan baja", bucket: "Mengantisipasi pemuaian" },
          { text: "Keping bimetal yang melengkung di termostat setrika", bucket: "Memanfaatkan pemuaian" },
          { text: "Memanaskan tutup logam botol kaca agar mudah dibuka", bucket: "Memanfaatkan pemuaian" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Keping Bimetal pada Termostat Setrika",
        html: "Setrika listrik menjaga suhunya stabil berkat <strong>keping bimetal</strong>: dua logam dengan koefisien muai berbeda yang direkatkan jadi satu. Saat panas, logam berkoefisien besar memuai lebih banyak, sehingga keping melengkung dan memutus arus listrik. Saat dingin kembali, keping lurus lagi dan menyambung arus. Tanpa rumus rumit, perbedaan pemuaian dua logam dipakai sebagai sakelar otomatis. Pemahaman pemuaian langsung melahirkan teknologi sehari-hari.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati polanya, rumus muai jadi jelas. Muai panjang: <strong>ΔL = α·L₀·ΔT</strong>, dengan α koefisien muai panjang, L₀ panjang awal, ΔT kenaikan suhu. Muai luas: <strong>ΔA = 2α·A₀·ΔT</strong>. Muai volume: <strong>ΔV = 3α·V₀·ΔT</strong>. Perhatikan pola sederhananya: koefisien luas dua kali, koefisien volume tiga kali koefisien panjang.",
      },
      {
        type: "takeaways",
        items: [
          "Hampir semua zat memuai saat suhu naik dan menyusut saat suhu turun.",
          "Pemuaian panjang: ΔL = α·L₀·ΔT, sebanding dengan panjang awal dan kenaikan suhu.",
          "Koefisien muai luas kira-kira 2α dan muai volume kira-kira 3α.",
          "Pemuaian diantisipasi (celah rel) atau dimanfaatkan (bimetal termostat).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pertambahan panjang akibat pemuaian dirumuskan?",
            options: ["ΔL = α·L₀·ΔT", "ΔL = m·c·ΔT", "ΔL = α/ΔT", "ΔL = L₀ + ΔT"],
            answer: 0,
            explain: "Muai panjang: ΔL = α·L₀·ΔT.",
          },
          {
            q: "Jika panjang awal dan kenaikan suhu sama, bahan dengan α lebih besar akan?",
            options: [
              "Memuai lebih sedikit",
              "Memuai lebih banyak",
              "Tidak memuai",
              "Menyusut",
            ],
            answer: 1,
            explain: "Pemuaian sebanding dengan α, jadi α besar berarti pemuaian besar.",
          },
          {
            q: "Mengapa rel kereta diberi celah pada sambungannya?",
            options: [
              "Agar lebih murah",
              "Agar ada ruang untuk pemuaian saat panas",
              "Agar kereta melaju lebih cepat",
              "Agar rel menyusut",
            ],
            answer: 1,
            explain: "Celah memberi ruang pemuaian sehingga rel tidak membengkok saat panas.",
          },
          {
            q: "Koefisien muai volume kira-kira berapa kali koefisien muai panjang?",
            options: ["Setengah kali", "Dua kali", "Tiga kali", "Sama saja"],
            answer: 2,
            explain: "Muai volume memakai 3α, muai luas memakai 2α.",
          },
          {
            q: "Keping bimetal bisa jadi sakelar otomatis karena?",
            options: [
              "Dua logamnya memuai sama besar",
              "Dua logamnya memuai berbeda sehingga keping melengkung",
              "Logam tidak memuai",
              "Suhu tidak berpengaruh",
            ],
            answer: 1,
            explain: "Perbedaan pemuaian dua logam membuat keping melengkung dan memutus arus.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "perubahan-wujud-kalor-laten",
    levelId: "suhu-kalor",
    order: 4,
    title: "Perubahan Wujud dan Kalor Laten",
    summary:
      "Es di gelas bertahan di 0 °C sampai habis mencair, dan uap mendidih jauh lebih melepuh daripada air panas biasa. Rahasianya kalor laten. Kita rasakan dulu fenomenanya.",
    durationMin: 14,
    tags: ["fisika", "termodinamika", "kalor laten", "perubahan wujud"],
    blocks: [
      {
        type: "paragraph",
        html: "Masukkan termometer ke segelas es yang sedang mencair: angkanya bertahan di 0 °C sampai es terakhir hilang, padahal ruangan terus mengalirkan kalor. Ke mana kalor itu pergi jika suhu tidak naik? Ia dipakai untuk <strong>mengubah wujud</strong>, dari padat ke cair, tanpa menaikkan suhu. Energi tersembunyi ini disebut kalor laten. Ayo rasakan dulu fenomenanya sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Energi yang Tersimpan dalam Perubahan",
        caption: "Mengubah wujud zat butuh energi besar, walau suhunya tidak berubah sedikit pun.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Basahi punggung tanganmu dengan sedikit alkohol, lalu tiup. Terasa dingin, bukan? Saat alkohol menguap, ia <strong>menyerap kalor</strong> dari kulitmu untuk berubah wujud jadi gas, sehingga kulit terasa sejuk. Itulah cara keringat mendinginkan tubuh. Amati pula: uap air 100 °C jauh lebih melepuh daripada air 100 °C, karena uap menyimpan kalor laten besar yang dilepas saat ia mengembun di kulitmu.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kalor laten lebur dan uap",
        html: "<strong>Kalor laten lebur (L<sub>f</sub>)</strong>: kalor untuk mengubah 1 kg padat menjadi cair pada titik leburnya, tanpa mengubah suhu. Untuk es sekitar 334.000 J/kg. <strong>Kalor laten uap (L<sub>v</sub>)</strong>: kalor untuk mengubah 1 kg cair menjadi gas pada titik didihnya. Untuk air sekitar 2.260.000 J/kg, jauh lebih besar. Selama perubahan wujud, suhu tetap dan seluruh kalor dipakai memutus ikatan antarpartikel.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kalor Laten Berbagai Perubahan Wujud",
        unit: "kJ/kg",
        source: "nilai kalor laten acuan",
        note: "Menguapkan air menuntut energi jauh lebih besar daripada mencairkan es. Itulah sebabnya merebus air sampai habis menguap terasa sangat lama.",
        data: [
          { label: "Lebur es", value: 334, color: "#38bdf8" },
          { label: "Lebur aluminium", value: 397, color: "#f59e0b" },
          { label: "Uap alkohol", value: 846, color: "#a78bfa" },
          { label: "Uap air", value: 2260, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa kalor (joule) untuk mencairkan 0,5 kg es yang sudah berada di 0 °C? Pakai L lebur es = 334.000 J/kg.",
        answer: 167000,
        tolerance: 500,
        suffix: " J",
        solution:
          "Karena es sudah di titik lebur, pakai kalor laten: Q = m·L = 0,5 × 334.000 = <strong>167.000 J</strong> (167 kJ). Selama proses ini suhu tetap 0 °C; kalor sepenuhnya dipakai mengubah wujud.",
        hint: "Pada perubahan wujud (suhu tetap), pakai Q = m × L.",
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa kalor (joule) untuk menguapkan 0,2 kg air yang sudah mendidih di 100 °C? Pakai L uap air = 2.260.000 J/kg.",
        answer: 452000,
        tolerance: 1000,
        suffix: " J",
        solution:
          "Pakai Q = m·L = 0,2 × 2.260.000 = <strong>452.000 J</strong> (452 kJ). Bandingkan: menguapkan 0,2 kg air butuh energi jauh lebih besar daripada mencairkan 0,5 kg es tadi, karena L uap air sangat tinggi.",
        hint: "Q = m × L, dengan L kalor laten uap air.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap perubahan wujud: menyerap kalor atau melepas kalor.",
        buckets: ["Menyerap kalor", "Melepas kalor"],
        items: [
          { text: "Es mencair menjadi air", bucket: "Menyerap kalor" },
          { text: "Air menguap menjadi uap", bucket: "Menyerap kalor" },
          { text: "Uap mengembun di kaca jendela", bucket: "Melepas kalor" },
          { text: "Air membeku menjadi es di freezer", bucket: "Melepas kalor" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Keringat, Pendingin Alami Tubuh",
        html: "Saat berolahraga, tubuhmu memanas dan mengeluarkan keringat. Air keringat lalu menguap dari kulit, dan untuk menguap ia menyerap kalor laten uap yang besar dari permukaan tubuh, sehingga kulit jadi dingin. Inilah mengapa ruangan lembap terasa lebih gerah: udara yang sudah penuh uap air membuat keringat sulit menguap, sehingga pendinginan alami terhambat. Memahami <strong>kalor laten uap</strong> langsung menjelaskan kerja sistem pendingin tubuh kita.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan fenomenanya, rumus jadi padat. Saat suhu berubah tetapi wujud tetap, pakai <strong>Q = m·c·ΔT</strong>. Saat wujud berubah tetapi suhu tetap, pakai kalor laten <strong>Q = m·L</strong>, dengan L<sub>f</sub> untuk melebur atau membeku dan L<sub>v</sub> untuk menguap atau mengembun. Pada grafik suhu terhadap kalor, perubahan wujud tampak sebagai garis mendatar: kalor terus masuk, tetapi suhu diam.",
      },
      {
        type: "takeaways",
        items: [
          "Saat zat berubah wujud, suhu tetap walau kalor terus mengalir.",
          "Kalor untuk melebur atau membeku: Q = m·L lebur; untuk menguap atau mengembun: Q = m·L uap.",
          "Kalor laten uap air (2.260 kJ/kg) jauh lebih besar daripada kalor lebur es (334 kJ/kg).",
          "Penguapan menyerap kalor, sehingga keringat dan alkohol mendinginkan kulit.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Saat es mencair pada 0 °C, suhunya?",
            options: [
              "Naik terus",
              "Tetap sampai semua es mencair",
              "Turun di bawah 0 °C",
              "Naik lalu turun",
            ],
            answer: 1,
            explain: "Selama perubahan wujud, suhu tetap; kalor dipakai mengubah wujud.",
          },
          {
            q: "Rumus kalor pada perubahan wujud adalah?",
            options: ["Q = m·c·ΔT", "Q = m·L", "Q = α·L₀·ΔT", "Q = ½mv²"],
            answer: 1,
            explain: "Perubahan wujud pada suhu tetap memakai kalor laten Q = m·L.",
          },
          {
            q: "Kalor untuk mencairkan 2 kg es di 0 °C (L = 334.000 J/kg) adalah?",
            options: ["668.000 J", "167.000 J", "334.000 J", "1.000 J"],
            answer: 0,
            explain: "Q = m·L = 2 × 334.000 = 668.000 J.",
          },
          {
            q: "Mengapa keringat mendinginkan tubuh?",
            options: [
              "Keringat memanaskan kulit",
              "Penguapan keringat menyerap kalor dari kulit",
              "Keringat membekukan kulit",
              "Keringat menambah suhu tubuh",
            ],
            answer: 1,
            explain: "Untuk menguap, keringat menyerap kalor laten dari kulit, sehingga kulit dingin.",
          },
          {
            q: "Mengapa uap 100 °C lebih melepuh daripada air 100 °C?",
            options: [
              "Karena uap lebih panas",
              "Karena uap melepas kalor laten besar saat mengembun di kulit",
              "Karena air tidak panas",
              "Karena uap tidak punya energi",
            ],
            answer: 1,
            explain: "Uap melepas kalor laten uap yang besar saat mengembun di kulit.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "anomali-air",
    levelId: "suhu-kalor",
    order: 5,
    title: "Anomali Air: Mengapa Es Mengapung",
    summary:
      "Hampir semua zat menyusut saat didinginkan, tetapi air justru memuai saat membeku, dan paling padat bukan saat beku melainkan di 4 derajat. Kita amati keanehan ini dulu sebelum berumus.",
    durationMin: 13,
    tags: ["fisika", "termodinamika", "anomali air", "massa jenis"],
    blocks: [
      {
        type: "paragraph",
        html: "Es batu mengapung di gelas, gunung es mengambang di laut, dan pipa air bisa pecah saat membeku di musim dingin. Ketiganya melawan akal sehat: bukankah benda padat biasanya lebih berat dan tenggelam? Air ternyata <strong>aneh</strong>: ia memuai saat membeku, dan kerapatannya paling tinggi bukan saat beku, melainkan pada 4 derajat celsius. Ayo amati keganjilan ini dulu sebelum kita rumuskan.",
      },
      {
        type: "video",
        comp: "UsahaEnergiVideo",
        title: "Video: Wujud Zat dan Susunan Molekulnya",
        caption: "Susunan molekul menentukan apakah suatu zat memadat dengan menyusut atau justru mengembang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan mendinginkan air dari 20 derajat. Awalnya ia menyusut seperti zat biasa, makin padat. Tetapi setelah lewat 4 derajat, ia mulai <strong>memuai kembali</strong>, dan saat membeku jadi es ia mengembang cukup banyak. Amati akibatnya: es lebih ringan per satuan volume daripada air, sehingga mengapung. Air paling dingin yang masih cair justru naik ke permukaan, sedangkan air terpadat (4 derajat) tenggelam ke dasar.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kerapatan maksimum di 4 derajat",
        html: "<strong>Massa jenis (kerapatan)</strong> adalah massa per satuan volume. Untuk hampir semua zat, mendinginkan berarti menambah kerapatan. Air mematuhi aturan ini hanya sampai <strong>4 derajat celsius</strong>; di bawah itu, ikatan hidrogen memaksa molekul menyusun diri lebih renggang, sehingga air memuai lagi. Akibatnya kerapatan air puncaknya di 4 derajat (sekitar 1000 kg/m3), dan es jauh lebih ringan (sekitar 917 kg/m3).",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Massa Jenis Air dan Es pada Berbagai Suhu",
        unit: "kg/m³",
        source: "nilai massa jenis air acuan",
        note: "Perhatikan dua hal: es jauh lebih ringan daripada air (maka mengapung), dan air paling padat justru pada 4 derajat, bukan saat beku. Itulah anomali air.",
        data: [
          { label: "Es 0 °C", value: 917, color: "#bae6fd" },
          { label: "Air 0 °C", value: 999.8, color: "#38bdf8" },
          { label: "Air 4 °C", value: 1000.0, color: "#0ea5e9" },
          { label: "Air 25 °C", value: 997.0, color: "#22d3ee" },
          { label: "Air 100 °C", value: 958.4, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Massa jenis es 917 kg/m³ dan air 1000 kg/m³. Berapa persen volume gunung es yang muncul di atas permukaan air?",
        answer: 8.3,
        tolerance: 0.3,
        suffix: " %",
        solution:
          "Bagian yang tenggelam memikul beratnya sendiri, sehingga fraksi tercelup = massa jenis es dibagi massa jenis air = 917/1000 = 0,917 (91,7% tenggelam). Maka yang muncul = 1 − 0,917 = 0,083 = <strong>8,3%</strong>. Itulah sebabnya hanya 'puncak gunung es' yang terlihat, sisanya tersembunyi di bawah air.",
        hint: "Fraksi tercelup = massa jenis es / massa jenis air; sisanya muncul di atas.",
      },
      {
        type: "calcExercise",
        prompt:
          "Air bermassa jenis 1000 kg/m³ membeku menjadi es bermassa jenis 917 kg/m³. Berapa persen pertambahan volumenya?",
        answer: 9.05,
        tolerance: 0.3,
        suffix: " %",
        solution:
          "Untuk massa sama, volume berbanding terbalik dengan massa jenis. Pertambahan = (1000/917) − 1 = 1,0905 − 1 = 0,0905 = <strong>9,05%</strong>. Pemuaian inilah yang mendorong dinding pipa hingga pecah saat air di dalamnya membeku.",
        hint: "Volume berbanding terbalik dengan massa jenis: bandingkan 1000/917 dengan 1.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap peristiwa: akibat anomali air atau pemuaian biasa.",
        buckets: ["Akibat anomali air", "Pemuaian biasa"],
        items: [
          { text: "Es batu mengapung di atas air", bucket: "Akibat anomali air" },
          { text: "Pipa air pecah saat airnya membeku", bucket: "Akibat anomali air" },
          { text: "Danau membeku dari permukaan, dasarnya tetap cair", bucket: "Akibat anomali air" },
          { text: "Rel baja bertambah panjang saat siang panas", bucket: "Pemuaian biasa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ikan Bertahan Hidup di Danau yang Permukaannya Beku",
        html: "Di negara empat musim, danau membeku di permukaan tetapi ikan tetap hidup di bawahnya. Anomali air menjelaskannya: saat udara mendingin, air permukaan yang mencapai 4 derajat menjadi paling padat lalu tenggelam ke dasar, sementara air lebih dingin naik dan membeku di atas. Lapisan es yang mengapung itu lalu bertindak sebagai <strong>selimut isolasi</strong>, memperlambat pembekuan lebih lanjut. Dasar danau tetap sekitar 4 derajat dan cair, sehingga ekosistem air bertahan sepanjang musim dingin.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah mengamati keanehannya, polanya jadi jelas. Massa jenis adalah <strong>massa dibagi volume</strong>. Hampir semua zat makin padat saat didinginkan, tetapi air mencapai kerapatan maksimum pada <strong>4 derajat celsius</strong>, lalu memuai lagi dan mengembang sekitar 9% ketika membeku. Karena es lebih ringan daripada air, ia mengapung, dan fraksi yang muncul = 1 − (massa jenis es / massa jenis air).",
      },
      {
        type: "takeaways",
        items: [
          "Massa jenis air mencapai puncak pada 4 derajat celsius, bukan saat membeku.",
          "Air memuai sekitar 9% saat membeku, sehingga es lebih ringan dan mengapung.",
          "Fraksi benda terapung yang tercelup = massa jenis benda / massa jenis air.",
          "Anomali air menjaga dasar danau tetap cair sehingga ikan bertahan hidup.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Air mencapai massa jenis maksimum pada suhu berapa?",
            options: ["0 °C", "4 °C", "25 °C", "100 °C"],
            answer: 1,
            explain: "Karena anomali air, kerapatan puncaknya pada 4 derajat celsius.",
          },
          {
            q: "Mengapa es mengapung di atas air?",
            options: [
              "Karena es lebih panas",
              "Karena massa jenis es lebih kecil daripada air",
              "Karena es tidak punya massa",
              "Karena air menolak es",
            ],
            answer: 1,
            explain: "Es (917 kg/m3) lebih ringan daripada air (1000 kg/m3), jadi mengapung.",
          },
          {
            q: "Berapa kira-kira persen gunung es yang muncul di atas air (es 917, air 1000)?",
            options: ["Sekitar 8%", "Sekitar 50%", "Sekitar 92%", "Sekitar 17%"],
            answer: 0,
            explain: "Muncul = 1 − 917/1000 = 8,3%, sisanya tersembunyi di bawah air.",
          },
          {
            q: "Mengapa pipa air bisa pecah saat membeku?",
            options: [
              "Karena air menyusut menjadi es",
              "Karena air memuai sekitar 9% saat membeku",
              "Karena es menyerap pipa",
              "Karena suhu pipa naik",
            ],
            answer: 1,
            explain: "Air mengembang saat membeku, mendorong dinding pipa hingga pecah.",
          },
          {
            q: "Mengapa ikan bertahan hidup di danau yang permukaannya beku?",
            options: [
              "Karena seluruh danau membeku merata",
              "Karena air 4 derajat terpadat tenggelam ke dasar dan es mengapung sebagai isolasi",
              "Karena ikan tahan beku",
              "Karena air tidak pernah dingin",
            ],
            answer: 1,
            explain: "Air terpadat (4 derajat) di dasar tetap cair, es di atas jadi selimut isolasi.",
          },
        ],
      },
    ],
  },
];
