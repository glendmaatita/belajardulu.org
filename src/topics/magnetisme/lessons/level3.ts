import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "arus-listrik-sumber-magnet",
    levelId: "sumber-medan-magnet",
    order: 1,
    title: "Arus Listrik Sumber Magnet",
    summary:
      "Ternyata listrik bisa membuat magnet. Kita telusuri bagaimana arus pada kawat lurus menciptakan medan magnetnya sendiri, penemuan tak sengaja Ørsted.",
    durationMin: 14,
    tags: ["fisika", "elektromagnet", "kawat berarus", "Ørsted"],
    blocks: [
      {
        type: "paragraph",
        html: "Tahun 1820, Hans Christian Ørsted sedang mengajar ketika ia menyalakan arus di dekat kompas. Jarum kompas bergoyang. Sebuah penemuan tak sengaja yang mengguncang dunia: arus listrik menghasilkan medan magnet. Sebelum menuliskan rumusnya, ayo kita ikuti bagaimana kawat berarus bisa menjadi magnet buatan.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Arus Listrik Menggerakkan Jarum Kompas",
        caption: "Begitu arus mengalir, kompas di dekat kawat langsung menyimpang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Letakkan beberapa kompas kecil melingkari sebuah kawat lurus, lalu alirkan arus. Semua jarum berputar membentuk <strong>lingkaran</strong> mengelilingi kawat. Garis medan kawat lurus memang berbentuk lingkaran-lingkaran sepusat, dan makin jauh dari kawat makin renggang alias makin lemah. Balik arah arus, semua jarum berputar ke arah sebaliknya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kaidah tangan kanan untuk kawat",
        html: "Genggam kawat dengan tangan kanan, <strong>ibu jari menunjuk arah arus</strong>, maka keempat jari yang menggenggam menunjukkan arah putaran garis medan. Inilah cara cepat menebak arah medan di sekitar kawat lurus tanpa menghafal rumus apa pun.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "line",
        title: "Medan Magnet Kawat Lurus vs Jarak",
        unit: "mikrotesla (µT)",
        source: "arus I = 10 A pada kawat lurus panjang",
        note: "Medan melemah seiring jarak: dua kali lebih jauh berarti setengah kali kuat. Pola 1/r ini khas kawat lurus.",
        data: [
          { label: "1 cm", value: 200, color: "#a78bfa" },
          { label: "2 cm", value: 100, color: "#38bdf8" },
          { label: "5 cm", value: 40, color: "#22d3ee" },
          { label: "10 cm", value: 20, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Pada kawat lurus berarus 10 A, berapa kuat medan magnet pada jarak 5 cm (0,05 m) dari kawat? (gunakan µ₀ = 4π×10⁻⁷, jawab dalam µT)",
        answer: 40,
        tolerance: 1,
        suffix: " µT",
        solution:
          "Pakai B = µ₀·I / (2π·r) = (4π×10⁻⁷ × 10) / (2π × 0,05) = 4×10⁻⁵ T = <strong>40 µT</strong>. Medan berbanding terbalik dengan jarak r.",
        hint: "B = µ₀·I / (2π·r). Jangan lupa ubah cm ke meter.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kawat lurus berarus 20 A. Berapa kuat medan magnet pada jarak 10 cm (0,1 m)? (jawab dalam µT)",
        answer: 40,
        tolerance: 1,
        suffix: " µT",
        solution:
          "Pakai B = µ₀·I/(2π·r) = (4π×10⁻⁷ × 20)/(2π × 0,1) = 4×10⁻⁵ T = <strong>40 µT</strong>. Arus dua kali lipat tapi jarak juga dua kali lipat, hasilnya sama.",
        hint: "B = µ₀·I / (2π·r).",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan: membuat medan kawat lurus lebih kuat atau lebih lemah.",
        buckets: ["Medan lebih kuat", "Medan lebih lemah"],
        items: [
          { text: "Arus diperbesar", bucket: "Medan lebih kuat" },
          { text: "Titik makin dekat ke kawat", bucket: "Medan lebih kuat" },
          { text: "Titik makin jauh dari kawat", bucket: "Medan lebih lemah" },
          { text: "Arus diperkecil", bucket: "Medan lebih lemah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kabel Listrik dan Kompas Rumah",
        html: "Kabel arus tinggi yang membentang di atas jalan menghasilkan medan magnet melingkar di sekelilingnya. Surveyor yang memakai kompas di dekat jaringan listrik harus berhati-hati, karena jarumnya bisa menyimpang dari utara sebenarnya akibat medan kawat ini. Inilah bukti langsung penemuan Ørsted: di mana ada arus, di situ ada medan magnet. Untuk mengurangi gangguan, kabel pergi dan pulang sering dipilin berdekatan agar medannya saling meniadakan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rumuskan. Di sekitar <strong>kawat lurus</strong> panjang, kuat medan adalah <strong>B = µ₀·I / (2π·r)</strong>, dengan I arus, r jarak dari kawat, dan µ₀ = 4π×10⁻⁷ T·m/A (permeabilitas ruang hampa). Medan membentuk lingkaran sepusat mengelilingi kawat, arahnya dengan kaidah tangan kanan, dan melemah berbanding terbalik dengan jarak. Penemuan inilah yang menyatukan listrik dan magnet.",
      },
      {
        type: "takeaways",
        items: [
          "Arus listrik selalu menghasilkan medan magnet di sekitarnya (penemuan Ørsted, 1820).",
          "Medan kawat lurus berbentuk lingkaran sepusat, arahnya ditentukan kaidah tangan kanan.",
          "Besarnya B = µ₀·I/(2π·r): membesar dengan arus, melemah berbanding terbalik dengan jarak.",
          "Tetapan µ₀ = 4π×10⁻⁷ T·m/A disebut permeabilitas ruang hampa.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Siapa yang menemukan bahwa arus menghasilkan medan magnet?",
            options: ["Newton", "Ørsted", "Ohm", "Pascal"],
            answer: 1,
            explain: "Hans Christian Ørsted menemukannya pada 1820.",
          },
          {
            q: "Bentuk garis medan di sekitar kawat lurus adalah?",
            options: ["Garis lurus", "Lingkaran sepusat", "Parabola", "Spiral menjauh"],
            answer: 1,
            explain: "Garis medan kawat lurus berupa lingkaran-lingkaran sepusat.",
          },
          {
            q: "Medan magnet kawat lurus dirumuskan?",
            options: ["B = µ₀·I/(2π·r)", "F = B·I·L", "V = I·R", "B = µ₀·n·I"],
            answer: 0,
            explain: "Kawat lurus: B = µ₀·I/(2π·r).",
          },
          {
            q: "Jika jarak dari kawat digandakan, medannya menjadi?",
            options: ["Dua kali", "Setengah", "Empat kali", "Tetap"],
            answer: 1,
            explain: "Karena B ∝ 1/r, jarak dua kali membuat medan setengahnya.",
          },
          {
            q: "Arah medan di sekitar kawat lurus ditentukan dengan?",
            options: [
              "Kaidah tangan kanan menggenggam kawat",
              "Hukum Ohm",
              "Hukum Pascal",
              "Aturan jarak",
            ],
            answer: 0,
            explain: "Ibu jari arah arus, jari menggenggam menunjukkan arah medan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "medan-kawat-melingkar",
    levelId: "sumber-medan-magnet",
    order: 2,
    title: "Medan Magnet Kawat Melingkar",
    summary:
      "Bila kawat lurus dibengkokkan menjadi lingkaran, medannya berkumpul di pusat. Satu lengkung sederhana yang menjadi cikal bakal solenoida.",
    durationMin: 13,
    tags: ["fisika", "kawat melingkar", "medan magnet", "kumparan"],
    blocks: [
      {
        type: "paragraph",
        html: "Ambil kawat lurus yang medannya melingkar lemah, lalu lengkungkan jadi satu lingkaran. Sesuatu yang menarik terjadi: garis-garis medan yang tadinya tersebar kini berkumpul rapi menembus pusat lingkaran. Sebelum menuliskan rumus, ayo kita pahami mengapa membengkokkan kawat memusatkan medannya.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Medan di Pusat Loop Kawat Berarus",
        caption: "Garis medan dari seluruh bagian lingkaran menyatu menembus pusatnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pada kawat melingkar, tiap potongan kecil kawat menyumbang medan yang arahnya <strong>sama</strong> di titik pusat, yaitu menembus tegak lurus bidang lingkaran. Karena semua sumbangan searah, medan di pusat menjadi jauh lebih terpusat daripada kawat lurus. Satu lingkaran menghasilkan medan kecil; tumpuk banyak lingkaran (N lilitan), medannya berlipat ganda.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Loop kecil pun punya dua kutub",
        html: "Kawat melingkar berarus berperilaku seperti magnet pipih: satu sisinya menjadi kutub utara, sisi lain menjadi kutub selatan, sesuai arah arus dan kaidah tangan kanan. Inilah jembatan menuju gagasan bahwa magnet pada dasarnya berasal dari arus-arus melingkar mungil di dalam bahan.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Medan di Pusat Loop vs Jumlah Lilitan",
        unit: "mikrotesla (µT)",
        source: "jari-jari R = 0,05 m, arus I = 2 A, B = µ₀·N·I/(2R)",
        note: "Pada jari-jari dan arus tetap, medan di pusat bertambah lurus seiring jumlah lilitan N.",
        data: [
          { label: "1 lilitan", value: 25, color: "#34d399" },
          { label: "2 lilitan", value: 50, color: "#22d3ee" },
          { label: "5 lilitan", value: 126, color: "#38bdf8" },
          { label: "10 lilitan", value: 251, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kawat melingkar tunggal berjari-jari 0,05 m dialiri arus 2 A. Berapa kuat medan di pusatnya? (gunakan µ₀ = 4π×10⁻⁷, B = µ₀·I/(2R), jawab dalam µT)",
        answer: 25,
        tolerance: 1,
        suffix: " µT",
        solution:
          "Pakai B = µ₀·I/(2R) = (4π×10⁻⁷ × 2)/(2 × 0,05) = (2,513×10⁻⁶)/0,1 = 2,513×10⁻⁵ T ≈ <strong>25 µT</strong>.",
        hint: "B = µ₀·I/(2R) untuk satu lilitan di pusat.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kumparan datar 10 lilitan berjari-jari 0,05 m dialiri arus 2 A. Berapa kuat medan di pusatnya? (gunakan B = µ₀·N·I/(2R), jawab dalam µT)",
        answer: 251,
        tolerance: 3,
        suffix: " µT",
        solution:
          "Pakai B = µ₀·N·I/(2R) = (4π×10⁻⁷ × 10 × 2)/(2 × 0,05) = 2,513×10⁻⁴ T ≈ <strong>251 µT</strong>. Sepuluh lilitan memberi medan sepuluh kali lipat satu lilitan.",
        hint: "Kalikan hasil satu lilitan dengan jumlah lilitan N.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan: membuat medan di pusat loop lebih kuat atau lebih lemah.",
        buckets: ["Medan lebih kuat", "Medan lebih lemah"],
        items: [
          { text: "Jumlah lilitan ditambah", bucket: "Medan lebih kuat" },
          { text: "Arus diperbesar", bucket: "Medan lebih kuat" },
          { text: "Jari-jari lingkaran diperbesar", bucket: "Medan lebih lemah" },
          { text: "Arus diperkecil", bucket: "Medan lebih lemah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kumparan Helmholtz di Laboratorium",
        html: "Untuk meneliti perilaku partikel atau menyetel sensor, fisikawan butuh medan magnet yang sangat seragam di suatu ruang kecil. Mereka memakai sepasang kumparan melingkar identik yang dipasang sejajar pada jarak tertentu, disebut kumparan Helmholtz. Di antara kedua kumparan, medan dari masing-masing loop bergabung menjadi medan yang nyaris rata. Bahkan untuk meniadakan medan magnet Bumi di ruang percobaan, susunan kumparan melingkar seperti ini dipakai sebagai 'peniadaan medan'.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rumuskan. Di pusat kawat melingkar tunggal berjari-jari R, kuat medan adalah <strong>B = µ₀·I/(2R)</strong>. Untuk kumparan datar berisi N lilitan, medannya menjadi <strong>B = µ₀·N·I/(2R)</strong>. Medan berbanding lurus dengan arus dan jumlah lilitan, serta berbanding terbalik dengan jari-jari. Arah medan menembus pusat tegak lurus bidang, sesuai kaidah tangan kanan.",
      },
      {
        type: "takeaways",
        items: [
          "Membengkokkan kawat menjadi lingkaran memusatkan medan menembus pusatnya.",
          "Medan di pusat satu lilitan: B = µ₀·I/(2R).",
          "Untuk N lilitan: B = µ₀·N·I/(2R), berlipat ganda dengan jumlah lilitan.",
          "Loop berarus berperilaku seperti magnet pipih dengan dua kutub.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Medan di pusat kawat melingkar tunggal dirumuskan?",
            options: ["B = µ₀·I/(2R)", "B = µ₀·I/(2π·r)", "B = µ₀·n·I", "B = B·I·L"],
            answer: 0,
            explain: "Di pusat satu lilitan: B = µ₀·I/(2R).",
          },
          {
            q: "Untuk kumparan datar N lilitan, medan di pusat menjadi?",
            options: ["B = µ₀·N·I/(2R)", "B = µ₀·I/(2R)", "B = N/R", "B = µ₀·I·R"],
            answer: 0,
            explain: "N lilitan memberi medan N kali lipat: B = µ₀·N·I/(2R).",
          },
          {
            q: "Jika jari-jari loop diperbesar (arus tetap), medan di pusat?",
            options: ["Membesar", "Mengecil", "Tetap", "Nol"],
            answer: 1,
            explain: "B ∝ 1/R, jadi jari-jari besar membuat medan lebih lemah.",
          },
          {
            q: "Arah medan di pusat loop berarus adalah?",
            options: [
              "Sejajar bidang lingkaran",
              "Menembus pusat tegak lurus bidang",
              "Acak",
              "Menuju kawat",
            ],
            answer: 1,
            explain: "Medan menembus pusat tegak lurus bidang sesuai kaidah tangan kanan.",
          },
          {
            q: "Loop kawat berarus berperilaku seperti?",
            options: ["Kapasitor", "Magnet pipih berkutub dua", "Lensa", "Resistor"],
            answer: 1,
            explain: "Satu sisi menjadi kutub utara, sisi lain kutub selatan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "solenoida-dan-toroida",
    levelId: "sumber-medan-magnet",
    order: 3,
    title: "Solenoida dan Toroida",
    summary:
      "Tumpuk banyak lingkaran kawat menjadi gulungan panjang, dan lahirlah magnet buatan sekuat magnet batang yang bisa dinyalakan dan dimatikan.",
    durationMin: 14,
    tags: ["fisika", "solenoida", "toroida", "elektromagnet"],
    blocks: [
      {
        type: "paragraph",
        html: "Lilitkan kawat berkali-kali pada sebatang paku, lalu hubungkan ke baterai. Paku itu kini bisa mengangkat klip kertas. Putuskan arus, klip pun jatuh. Kamu baru saja membuat elektromagnet dari sebuah solenoida. Sebelum menuliskan rumus, ayo kita pahami mengapa menggulung kawat menciptakan magnet sekuat batang besi.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Medan Seragam di Dalam Solenoida",
        caption: "Garis medan di dalam gulungan menjadi lurus, rapat, dan seragam.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "<strong>Solenoida</strong> adalah kawat yang dililit rapat memanjang seperti pegas. Medan dari tiap lilitan saling memperkuat di dalamnya, sehingga di bagian dalam medan menjadi <strong>kuat dan seragam</strong>, sedangkan di luar nyaris nol, persis seperti magnet batang. Tambah jumlah lilitan per meter atau perbesar arus, magnetnya makin kuat.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Toroida: solenoida yang dibulatkan",
        html: "Bengkokkan solenoida hingga kedua ujungnya bertemu membentuk donat, dan kamu mendapat <strong>toroida</strong>. Keunggulannya: hampir seluruh medan terkurung di dalam donat, tidak bocor ke luar. Karena itu toroida dipakai bila kebocoran medan harus ditekan, misalnya pada inti trafo dan kumparan elektronik.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "line",
        title: "Medan Solenoida vs Lilitan per Meter",
        unit: "militesla (mT)",
        source: "arus I = 2 A, B = µ₀·n·I",
        note: "Pada arus tetap, medan di dalam solenoida bertambah lurus seiring kerapatan lilitan n.",
        data: [
          { label: "500 /m", value: 1.26, color: "#34d399" },
          { label: "1000 /m", value: 2.51, color: "#22d3ee" },
          { label: "2000 /m", value: 5.03, color: "#38bdf8" },
          { label: "4000 /m", value: 10.05, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah solenoida punya 1000 lilitan per meter dan dialiri arus 2 A. Berapa kuat medan magnet di dalamnya? (gunakan µ₀ = 4π×10⁻⁷, jawab dalam mT)",
        answer: 2.51,
        tolerance: 0.05,
        suffix: " mT",
        solution:
          "Pakai B = µ₀·n·I = (4π×10⁻⁷)(1000)(2) ≈ 2,51×10⁻³ T = <strong>2,51 mT</strong>. Di sini n adalah jumlah lilitan per meter, bukan jumlah total.",
        hint: "B = µ₀·n·I, lalu ubah tesla ke militesla (×1000).",
      },
      {
        type: "calcExercise",
        prompt:
          "Solenoida panjang 0,5 m berisi 2000 lilitan total dialiri arus 3 A. Berapa kuat medan di dalamnya? (cari dulu n = N/L, jawab dalam mT)",
        answer: 15.1,
        tolerance: 0.3,
        suffix: " mT",
        solution:
          "Hitung n = N/L = 2000/0,5 = 4000 lilitan/m. Lalu B = µ₀·n·I = (4π×10⁻⁷)(4000)(3) ≈ 1,51×10⁻² T = <strong>15,1 mT</strong>.",
        hint: "Cari n = N/L dulu, baru pakai B = µ₀·n·I.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap istilah dengan cirinya.",
        pairs: [
          { left: "Solenoida", right: "Medan seragam di dalam, mirip magnet batang" },
          { left: "Toroida", right: "Medan terkurung dalam bentuk donat" },
          { left: "n pada B = µ₀·n·I", right: "Jumlah lilitan per meter" },
          { left: "Elektromagnet", right: "Magnet yang bisa dinyalakan dan dimatikan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Derek Magnet di Tempat Rongsokan",
        html: "Di tempat pemrosesan logam, derek besar mengangkat mobil rongsokan dengan cakram solenoida raksasa berinti besi. Operator cukup menyalakan arus, dan ratusan kilogram besi langsung menempel. Untuk menjatuhkannya di lokasi baru, ia hanya memutus arus. Magnet permanen tidak bisa melakukan ini karena tidak bisa dimatikan. Inti besi di dalam solenoida memperkuat medan ratusan kali lipat, sehingga gulungan kawat sederhana mampu menjadi magnet sekuat itu.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rumuskan. Di dalam <strong>solenoida</strong> panjang, medannya seragam: <strong>B = µ₀·n·I</strong>, dengan n = N/L jumlah lilitan per meter. Di dalam <strong>toroida</strong> berjari-jari r, medannya <strong>B = µ₀·N·I/(2π·r)</strong>, dengan N jumlah lilitan total. Keduanya menegaskan bahwa menggulung kawat memusatkan dan menguatkan medan. Menyisipkan inti besi (permeabilitas tinggi) memperkuat medan ini berkali-kali lipat.",
      },
      {
        type: "takeaways",
        items: [
          "Solenoida menghasilkan medan kuat dan seragam di dalamnya, mirip magnet batang.",
          "Medan solenoida: B = µ₀·n·I, dengan n jumlah lilitan per meter.",
          "Toroida mengurung medan dalam bentuk donat: B = µ₀·N·I/(2π·r).",
          "Elektromagnet unggul karena kekuatannya bisa diatur dan dimatikan lewat arus, dan diperkuat inti besi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Medan di dalam solenoida dirumuskan?",
            options: ["B = µ₀·n·I", "B = µ₀·I/(2πr)", "B = µ₀·I/(2R)", "F = B·I·L"],
            answer: 0,
            explain: "Solenoida: B = µ₀·n·I dengan n lilitan per meter.",
          },
          {
            q: "Pada B = µ₀·n·I, lambang n berarti?",
            options: [
              "Jumlah lilitan total",
              "Jumlah lilitan per meter",
              "Jari-jari",
              "Arus",
            ],
            answer: 1,
            explain: "n adalah kerapatan lilitan, yaitu jumlah lilitan per meter (N/L).",
          },
          {
            q: "Keunggulan bentuk toroida dibanding solenoida lurus adalah?",
            options: [
              "Lebih murah",
              "Medan hampir tidak bocor ke luar",
              "Tidak butuh arus",
              "Tidak punya lilitan",
            ],
            answer: 1,
            explain: "Toroida mengurung medan dalam donat sehingga bocoran ke luar minim.",
          },
          {
            q: "Agar solenoida lebih kuat, kita bisa?",
            options: [
              "Mengurangi lilitan",
              "Menambah lilitan per meter, arus, atau inti besi",
              "Memanjangkan tanpa menambah lilitan",
              "Menurunkan arus",
            ],
            answer: 1,
            explain: "B = µ₀·n·I, dan inti besi memperkuat medan berkali-kali lipat.",
          },
          {
            q: "Keunggulan elektromagnet dibanding magnet permanen adalah?",
            options: [
              "Selalu lebih murah",
              "Kekuatannya bisa diatur dan dimatikan",
              "Tidak butuh listrik",
              "Tidak punya kutub",
            ],
            answer: 1,
            explain: "Elektromagnet bisa dinyalakan, diperkuat, dan dimatikan lewat arus.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hukum-ampere",
    levelId: "sumber-medan-magnet",
    order: 4,
    title: "Hukum Ampere",
    summary:
      "Adakah satu aturan tunggal yang menjelaskan semua medan dari arus, baik kawat lurus maupun solenoida? Ada, dan namanya Hukum Ampere.",
    durationMin: 13,
    tags: ["fisika", "hukum ampere", "medan magnet", "arus"],
    blocks: [
      {
        type: "paragraph",
        html: "Kita sudah punya rumus terpisah untuk kawat lurus dan untuk solenoida. Tapi adakah satu prinsip yang menjadi induk semuanya? André-Marie Ampère menemukan jawabannya: ada hubungan rapi antara medan di sekeliling sebuah lintasan tertutup dengan arus yang dikurungnya. Sebelum menuliskan rumus, ayo kita pahami gagasannya dulu.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Medan Melingkari Arus yang Dikurung",
        caption: "Makin besar arus yang dilingkari, makin kuat medan di sepanjang lintasan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan kamu berjalan mengelilingi sebuah kawat berarus sambil mencatat medan magnet di tiap langkah, lalu menjumlahkannya sepanjang putaranmu. Ampère menemukan: total itu hanya bergantung pada <strong>seberapa besar arus yang kamu lingkari</strong>, bukan pada bentuk jalanmu. Lingkari arus lebih besar, totalnya lebih besar. Tak melingkari arus sama sekali, totalnya nol.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Jalan pintas menurunkan rumus",
        html: "Karena tak bergantung bentuk lintasan, kita bebas memilih lintasan yang paling mudah. Untuk kawat lurus, pilih lintasan lingkaran sepusat: langsung muncul <strong>B = µ₀·I/(2π·r)</strong>. Untuk solenoida, pilih lintasan kotak menembus gulungan: langsung muncul <strong>B = µ₀·n·I</strong>. Satu hukum, banyak hasil.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Medan di Lintasan vs Arus yang Dikurung",
        unit: "mikrotesla (µT)",
        source: "lintasan lingkaran jari-jari 0,02 m, B = µ₀·I/(2π·r)",
        note: "Pada lintasan tetap, medan sebanding lurus dengan arus total yang dilingkari.",
        data: [
          { label: "5 A", value: 50, color: "#34d399" },
          { label: "10 A", value: 100, color: "#22d3ee" },
          { label: "20 A", value: 200, color: "#38bdf8" },
          { label: "40 A", value: 400, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah lintasan lingkaran berjari-jari 0,02 m mengelilingi kawat berarus 20 A. Berapa kuat medan di sepanjang lintasan itu? (gunakan B = µ₀·I/(2π·r), jawab dalam µT)",
        answer: 200,
        tolerance: 5,
        suffix: " µT",
        solution:
          "Dari Hukum Ampere untuk lintasan lingkaran: B = µ₀·I/(2π·r) = (4π×10⁻⁷ × 20)/(2π × 0,02) = 2×10⁻⁴ T = <strong>200 µT</strong>.",
        hint: "B = µ₀·I/(2π·r).",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan: total medan di sepanjang lintasan tertutup membesar atau nol.",
        buckets: ["Total membesar", "Total nol"],
        items: [
          { text: "Lintasan melingkari arus 10 A", bucket: "Total membesar" },
          { text: "Lintasan melingkari arus lebih besar", bucket: "Total membesar" },
          { text: "Lintasan tidak melingkari arus apa pun", bucket: "Total nol" },
          { text: "Arus yang dilingkari nol", bucket: "Total nol" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan pilihan lintasan dengan hasil yang diturunkan.",
        pairs: [
          { left: "Lintasan lingkaran sekeliling kawat", right: "B = µ₀·I/(2π·r)" },
          { left: "Lintasan kotak menembus solenoida", right: "B = µ₀·n·I" },
          { left: "Lintasan tanpa melingkari arus", right: "Total medan nol" },
          { left: "Arus yang dikurung diperbesar", right: "Total medan bertambah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menghitung Medan Kabel Koaksial",
        html: "Kabel koaksial pada antena dan internet terdiri atas kawat tengah berarus dan selubung luar yang membawa arus balik sama besar. Dengan Hukum Ampere, mudah dibuktikan bahwa di luar selubung, arus yang dilingkari adalah nol (arus pergi dan pulang saling meniadakan), sehingga medan magnet di luar kabel praktis nol. Itu sebabnya kabel koaksial tidak mengganggu perangkat di sekitarnya dan tahan gangguan. Tanpa Hukum Ampere, perhitungan ini akan jauh lebih rumit.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan. Hukum Ampere menyatakan bahwa jumlah medan magnet sepanjang lintasan tertutup sebanding dengan arus total yang dikurungnya: <strong>∮ B·dl = µ₀·I<sub>terkurung</sub></strong>. Untuk kawat lurus ia menghasilkan <strong>B = µ₀·I/(2π·r)</strong>; untuk solenoida menghasilkan <strong>B = µ₀·n·I</strong>. Inilah hukum induk yang menyatukan semua perhitungan medan dari arus, dan kelak menjadi salah satu persamaan Maxwell.",
      },
      {
        type: "takeaways",
        items: [
          "Hukum Ampere: jumlah B sepanjang lintasan tertutup sebanding arus yang dikurung, ∮ B·dl = µ₀·I.",
          "Hasilnya tidak bergantung bentuk lintasan, hanya pada arus yang dilingkari.",
          "Memilih lintasan tepat menurunkan B kawat lurus dan B solenoida dengan cepat.",
          "Bila lintasan tidak melingkari arus, total medannya nol.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum Ampere menghubungkan medan sepanjang lintasan tertutup dengan?",
            options: [
              "Massa kawat",
              "Arus total yang dikurung lintasan",
              "Suhu kawat",
              "Panjang kawat",
            ],
            answer: 1,
            explain: "∮ B·dl = µ₀·I_terkurung, bergantung arus yang dilingkari.",
          },
          {
            q: "Bentuk matematis Hukum Ampere adalah?",
            options: [
              "∮ B·dl = µ₀·I_terkurung",
              "F = B·I·L",
              "ε = -N·dΦ/dt",
              "Φ = B·A·cos θ",
            ],
            answer: 0,
            explain: "Hukum Ampere: ∮ B·dl = µ₀·I_terkurung.",
          },
          {
            q: "Jika lintasan tidak melingkari arus apa pun, totalnya?",
            options: ["Maksimum", "Nol", "Tak hingga", "Negatif besar"],
            answer: 1,
            explain: "Tanpa arus terkurung, ruas kanan nol sehingga totalnya nol.",
          },
          {
            q: "Dari Hukum Ampere, medan solenoida menjadi?",
            options: ["B = µ₀·n·I", "B = µ₀·I/(2R)", "B = q·v·B", "B = m·a"],
            answer: 0,
            explain: "Memilih lintasan kotak menembus solenoida memberi B = µ₀·n·I.",
          },
          {
            q: "Mengapa medan di luar kabel koaksial praktis nol?",
            options: [
              "Karena tidak ada listrik",
              "Karena arus pergi dan pulang saling meniadakan",
              "Karena kabelnya pendek",
              "Karena suhunya rendah",
            ],
            answer: 1,
            explain: "Arus terkurung total nol, sehingga menurut Ampere medannya nol.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "bahan-magnetik-dan-permeabilitas",
    levelId: "sumber-medan-magnet",
    order: 5,
    title: "Bahan Magnetik dan Permeabilitas",
    summary:
      "Solenoida kosong menghasilkan medan lemah. Selipkan inti besi, dan medannya melonjak ribuan kali lipat tanpa menambah arus. Mengapa? Jawabannya ada pada sifat bahan: diamagnetik, paramagnetik, dan feromagnetik.",
    durationMin: 14,
    tags: ["fisika", "bahan magnetik", "permeabilitas", "feromagnetik"],
    blocks: [
      {
        type: "paragraph",
        html: "Kita sudah tahu arus listrik melahirkan medan magnet. Tapi ada rahasia kedua: medan yang sama bisa jauh lebih kuat hanya dengan mengganti ruang di dalam kumparan dengan bahan tertentu. Selipkan paku besi ke dalam solenoida, dan tiba-tiba ia mampu mengangkat banyak klip. Sebelum menuliskan rumus, ayo kita selidiki mengapa <strong>bahan</strong> begitu menentukan.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Inti Besi Memperkuat Medan Solenoida",
        caption: "Tanpa inti, garis medan renggang; dengan inti besi, garis merapat berlipat ganda.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Lilitkan kawat pada paku besi, alirkan arus dari baterai: paku jadi magnet yang mampu mengangkat klip. Cabut paku, hanya sisakan kumparan udara: daya angkatnya anjlok drastis padahal arusnya sama. Bahan di dalam kumparan ternyata ikut 'menguatkan diri' searah medan. Bahan yang bisa menguatkan medan sangat besar disebut <strong>feromagnetik</strong>, seperti besi, nikel, dan kobalt.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga jenis bahan magnetik",
        html: "<strong>Feromagnetik</strong> (besi, nikel, kobalt): sangat kuat ditarik, bisa jadi magnet permanen, permeabilitas relatif µr bisa ribuan. <strong>Paramagnetik</strong> (aluminium): ditarik sangat lemah, µr sedikit di atas 1. <strong>Diamagnetik</strong> (tembaga, bismut, air): justru sedikit ditolak magnet, µr sedikit di bawah 1. Hanya feromagnetik yang berguna sebagai inti magnet praktis.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Permeabilitas Relatif Beberapa Bahan",
        unit: "µr (tanpa satuan)",
        source: "nilai tipikal, ilustratif",
        note: "Inti feromagnetik bisa memperkuat medan ratusan sampai ribuan kali dibanding udara (µr=1). Itu sebabnya elektromagnet, motor, dan trafo memakai inti besi.",
        data: [
          { label: "Udara", value: 1, color: "#34d399" },
          { label: "Nikel", value: 600, color: "#22d3ee" },
          { label: "Besi lunak", value: 5000, color: "#38bdf8" },
          { label: "Permalloy", value: 8000, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah solenoida udara dengan 1000 lilitan per meter dialiri arus 2 A. Berapa kuat medan di dalamnya? (µ₀ = 4π×10⁻⁷ T·m/A; jawab dalam mT)",
        answer: 2.5,
        tolerance: 0.1,
        suffix: " mT",
        solution:
          "B₀ = µ₀·n·I = (4π×10⁻⁷) × 1000 × 2 = 2,51×10⁻³ T ≈ <strong>2,5 mT</strong>. Medan solenoida udara memang lemah.",
        hint: "B₀ = µ₀·n·I. Ingat 4π ≈ 12,57 dan 1 T = 1000 mT.",
      },
      {
        type: "calcExercise",
        prompt:
          "Solenoida tadi (B₀ = 2,5 mT) disisipi inti besi dengan permeabilitas relatif µr = 500. Berapa kuat medan di dalamnya sekarang? (jawab dalam tesla)",
        answer: 1.25,
        tolerance: 0.02,
        suffix: " T",
        solution:
          "Inti besi mengalikan medan dengan µr: B = µr × B₀ = 500 × 2,5 mT = 1250 mT = <strong>1,25 T</strong>. Tanpa menambah arus, medan melonjak 500 kali.",
        hint: "B = µr × B₀, lalu ubah mT ke T (bagi 1000).",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap bahan menurut sifat magnetiknya.",
        buckets: ["Feromagnetik", "Paramagnetik", "Diamagnetik"],
        items: [
          { text: "Besi", bucket: "Feromagnetik" },
          { text: "Nikel", bucket: "Feromagnetik" },
          { text: "Kobalt", bucket: "Feromagnetik" },
          { text: "Aluminium", bucket: "Paramagnetik" },
          { text: "Tembaga", bucket: "Diamagnetik" },
          { text: "Bismut", bucket: "Diamagnetik" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah dengan maknanya.",
        pairs: [
          { left: "Feromagnetik", right: "µr sangat besar, bisa jadi magnet permanen" },
          { left: "Paramagnetik", right: "µr sedikit di atas 1, tarikan sangat lemah" },
          { left: "Diamagnetik", right: "µr sedikit di bawah 1, sedikit ditolak" },
          { left: "Permeabilitas relatif", right: "Berapa kali bahan memperkuat medan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Crane Elektromagnet di Tempat Rongsokan",
        html: "Crane raksasa yang mengangkat mobil bekas di tempat rongsokan memakai elektromagnet, bukan magnet permanen. Sebuah kumparan besar dililitkan pada inti besi lunak; saat arus dialirkan, inti feromagnetik melipatgandakan medan kumparan sehingga mampu menarik bongkahan besi berton-ton. Saat operator memutus arus, inti besi lunak cepat kehilangan kemagnetannya sehingga muatan langsung terlepas. Dipilih besi lunak (mudah dimagnetkan dan mudah hilang) bukan baja keras, justru karena sifatnya yang tidak menyimpan kemagnetan, agar bisa 'dinyalakan' dan 'dimatikan' sesuka hati.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan. Permeabilitas bahan adalah <strong>µ = µr · µ₀</strong>, dengan µ₀ = 4π×10⁻⁷ T·m/A permeabilitas ruang hampa dan µr <strong>permeabilitas relatif</strong> bahan. Medan dalam solenoida berinti menjadi <strong>B = µ · n · I = µr · µ₀ · n · I</strong>. Untuk feromagnetik µr bisa ratusan sampai ribuan, untuk paramagnetik µr sedikit di atas 1, dan untuk diamagnetik µr sedikit di bawah 1. Inilah alasan inti besi mengubah kumparan lemah menjadi magnet kuat.",
      },
      {
        type: "takeaways",
        items: [
          "Bahan terbagi menjadi feromagnetik (kuat ditarik), paramagnetik (lemah ditarik), dan diamagnetik (sedikit ditolak).",
          "Permeabilitas µ = µr · µ₀; µr menunjukkan berapa kali bahan memperkuat medan.",
          "Medan solenoida berinti: B = µr · µ₀ · n · I, sehingga inti besi melonjakkan medan ribuan kali.",
          "Besi lunak dipakai untuk elektromagnet karena mudah dimagnetkan dan cepat hilang saat arus diputus.",
          "Hanya feromagnetik (besi, nikel, kobalt) yang praktis sebagai inti magnet.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bahan yang paling kuat ditarik magnet dan bisa jadi magnet permanen disebut?",
            options: ["Diamagnetik", "Paramagnetik", "Feromagnetik", "Isolator"],
            answer: 2,
            explain: "Feromagnetik (besi, nikel, kobalt) ditarik sangat kuat dan dapat jadi magnet permanen.",
          },
          {
            q: "Permeabilitas relatif udara (atau ruang hampa) kira-kira bernilai?",
            options: ["0", "1", "500", "5000"],
            answer: 1,
            explain: "µr ruang hampa/udara ≈ 1, menjadi acuan bahan lain.",
          },
          {
            q: "Medan dalam solenoida berinti dirumuskan?",
            options: ["B = µr · µ₀ · n · I", "B = q · v · B", "B = Φ / A", "B = I · R"],
            answer: 0,
            explain: "B = µ·n·I dengan µ = µr·µ₀, jadi B = µr·µ₀·n·I.",
          },
          {
            q: "Solenoida udara bermedan 2 mT disisipi inti µr = 1000. Medan barunya?",
            options: ["2 mT", "20 mT", "2 T", "0,2 T"],
            answer: 2,
            explain: "B = µr × B₀ = 1000 × 2 mT = 2000 mT = 2 T.",
          },
          {
            q: "Mengapa crane elektromagnet memakai inti besi lunak, bukan baja keras?",
            options: [
              "Agar lebih murah",
              "Agar kemagnetan mudah dinyalakan dan dimatikan",
              "Agar lebih ringan",
              "Agar tahan panas",
            ],
            answer: 1,
            explain: "Besi lunak mudah dimagnetkan dan cepat hilang saat arus diputus, sehingga muatan bisa dilepas.",
          },
        ],
      },
    ],
  },
];
