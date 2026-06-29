import type { Lesson } from "../../../types";

export const level5: Lesson[] = [
  // ============================================================
  {
    id: "generator-dan-motor-listrik",
    levelId: "aplikasi-magnet",
    order: 1,
    title: "Generator dan Motor Listrik",
    summary:
      "Dua mesin, satu prinsip yang bekerja terbalik: generator mengubah gerak jadi listrik, motor mengubah listrik jadi gerak.",
    durationMin: 15,
    tags: ["fisika", "generator", "motor listrik", "GGL"],
    blocks: [
      {
        type: "paragraph",
        html: "Di balik setiap colokan listrik di rumahmu, ada turbin raksasa yang berputar di pembangkit. Dan di dalam kipas angin yang menyejukkanmu, ada mesin yang berputar karena listrik. Keduanya kebalikan satu sama lain, tapi lahir dari prinsip yang sama. Sebelum menuliskan rumus, ayo kita bongkar dua mesin yang menggerakkan peradaban modern ini.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Kumparan Berputar di Antara Magnet",
        caption: "Putaran kumparan dalam medan magnet menjadi inti generator dan motor.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan satu kumparan di antara dua kutub magnet. Kalau kamu <strong>memutarnya dengan tangan</strong>, fluks berubah dan muncul arus listrik, itulah <strong>generator</strong>. Tapi kalau kamu <strong>mengalirkan arus</strong> ke kumparan itu, gaya Lorentz membuatnya berputar sendiri, itulah <strong>motor</strong>. Mesin yang sama, dijalankan dari dua arah berlawanan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua arah konversi energi",
        html: "<strong>Generator</strong> mengubah energi gerak (mekanik) menjadi energi listrik, memakai hukum induksi Faraday. <strong>Motor</strong> melakukan kebalikannya: mengubah energi listrik menjadi energi gerak, memakai gaya Lorentz pada kawat berarus. Air terjun, uap, atau angin memutar generator; sebaliknya, listrik dari stopkontak memutar motor di kipas dan bor.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "line",
        title: "GGL Maksimum Generator vs Frekuensi Putaran",
        unit: "volt (V)",
        source: "kumparan N = 200, B = 0,1 T, luas A = 0,01 m²",
        note: "Makin cepat kumparan berputar, makin besar GGL yang dihasilkan. Hubungannya lurus terhadap frekuensi putaran.",
        data: [
          { label: "10 Hz", value: 12.6, color: "#34d399" },
          { label: "20 Hz", value: 25.1, color: "#22d3ee" },
          { label: "50 Hz", value: 62.8, color: "#38bdf8" },
          { label: "60 Hz", value: 75.4, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Generator dengan 100 lilitan, luas kumparan 0,01 m², berada dalam medan 0,2 T dan berputar dengan kecepatan sudut 50 rad/s. Berapa GGL maksimum yang dihasilkan?",
        answer: 10,
        tolerance: 0.1,
        suffix: " V",
        solution:
          "Pakai ε_maks = N·B·A·ω = 100 × 0,2 × 0,01 × 50 = <strong>10 V</strong>. GGL maksimum terjadi saat bidang kumparan sejajar medan, ketika fluks berubah paling cepat.",
        hint: "ε_maks = N·B·A·ω. Kalikan keempatnya.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap alat: bekerja sebagai generator atau motor.",
        buckets: ["Generator", "Motor"],
        items: [
          { text: "Turbin PLTA", bucket: "Generator" },
          { text: "Dinamo sepeda", bucket: "Generator" },
          { text: "Kipas angin listrik", bucket: "Motor" },
          { text: "Bor listrik", bucket: "Motor" },
          { text: "Mesin cuci yang memutar tabung", bucket: "Motor" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap mesin dengan ciri kerjanya.",
        pairs: [
          { left: "Generator", right: "Gerak menjadi listrik (Hukum Faraday)" },
          { left: "Motor listrik", right: "Listrik menjadi gerak (gaya Lorentz)" },
          { left: "Komutator/cincin belah", right: "Mengatur arah arus pada kumparan" },
          { left: "GGL maksimum", right: "Saat fluks berubah paling cepat" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pembangkit Listrik Tenaga Air",
        html: "Di sebuah PLTA, air yang ditampung di bendungan dijatuhkan untuk memutar turbin. Turbin terhubung ke generator raksasa, sehingga energi gerak air berubah menjadi energi listrik yang mengalir ke jutaan rumah. Yang menakjubkan, mobil listrik membalik proses ini: listrik dari baterai memutar motor untuk menggerakkan roda, dan saat mengerem, motornya berperan sebagai generator yang mengisi ulang baterai. Satu prinsip, dipakai bolak-balik.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rumuskan. Pada <strong>generator</strong>, kumparan yang berputar menghasilkan GGL bolak-balik dengan nilai maksimum <strong>ε_maks = N·B·A·ω</strong>, dengan ω kecepatan sudut putaran. Inilah penerapan langsung hukum Faraday. Pada <strong>motor</strong>, arus yang dialirkan ke kumparan menimbulkan gaya Lorentz <strong>F = B·I·L</strong> yang menghasilkan torsi pemutar. Generator dan motor adalah satu prinsip yang dijalankan dari dua arah berlawanan.",
      },
      {
        type: "takeaways",
        items: [
          "Generator mengubah energi gerak menjadi listrik lewat induksi (Hukum Faraday).",
          "Motor mengubah energi listrik menjadi gerak lewat gaya Lorentz.",
          "GGL maksimum generator: ε_maks = N·B·A·ω, makin cepat berputar makin besar.",
          "Keduanya satu prinsip yang bekerja terbalik; banyak motor bisa berperan sebagai generator saat berhenti.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Generator mengubah energi?",
            options: [
              "Listrik menjadi gerak",
              "Gerak menjadi listrik",
              "Kalor menjadi cahaya",
              "Kimia menjadi kalor",
            ],
            answer: 1,
            explain: "Generator mengubah energi mekanik menjadi energi listrik.",
          },
          {
            q: "Motor listrik bekerja berdasarkan?",
            options: ["Gaya Lorentz", "Hukum Pascal", "Hukum Archimedes", "Hukum Ohm saja"],
            answer: 0,
            explain: "Arus dalam medan magnet menimbulkan gaya Lorentz yang memutar.",
          },
          {
            q: "GGL maksimum generator dirumuskan sebagai?",
            options: ["ε = N·B·A·ω", "F = m·a", "V = I·R", "B = µ₀·n·I"],
            answer: 0,
            explain: "ε_maks = N·B·A·ω untuk kumparan berputar.",
          },
          {
            q: "Generator N=50, B=0,2 T, A=0,02 m², ω=10 rad/s. GGL maksimumnya?",
            options: ["2 V", "5 V", "10 V", "1 V"],
            answer: 0,
            explain: "ε = 50 × 0,2 × 0,02 × 10 = 2 V.",
          },
          {
            q: "Manakah yang bekerja sebagai motor?",
            options: ["Turbin PLTA", "Dinamo sepeda", "Kipas angin listrik", "Panel surya"],
            answer: 2,
            explain: "Kipas angin mengubah listrik menjadi gerak, jadi sebuah motor.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "generator-ac-dan-dc",
    levelId: "aplikasi-magnet",
    order: 2,
    title: "Generator AC dan DC",
    summary:
      "Kumparan berputar menghasilkan tegangan yang naik-turun bolak-balik. Satu komponen kecil menentukan apakah keluarannya AC atau DC.",
    durationMin: 13,
    tags: ["fisika", "generator", "arus bolak-balik", "dinamo"],
    blocks: [
      {
        type: "paragraph",
        html: "Putar kumparan terus-menerus di antara dua kutub magnet, lalu amati tegangan keluarannya. Ia tidak tetap, melainkan naik ke puncak, turun ke nol, lalu membalik arah, terus berulang. Sebelum menuliskan rumus, ayo kita pahami mengapa keluaran generator berbentuk gelombang dan bagaimana mengubahnya menjadi searah.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Tegangan Generator Naik-Turun Saat Kumparan Berputar",
        caption: "Tiap setengah putaran, arah GGL membalik membentuk gelombang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Saat bidang kumparan <strong>sejajar</strong> medan, fluks berubah paling cepat, GGL <strong>maksimum</strong>. Saat bidang <strong>tegak lurus</strong> medan, fluks sesaat tak berubah, GGL <strong>nol</strong>. Karena posisi ini bergantian tiap putaran, GGL keluar sebagai gelombang naik-turun. Inilah <strong>arus bolak-balik (AC)</strong> yang menyalakan rumahmu.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Cincin geser vs komutator",
        html: "Generator <strong>AC</strong> memakai dua <strong>cincin geser</strong> utuh, sehingga arah arus keluaran ikut membalik tiap setengah putaran. Generator <strong>DC</strong> (dinamo) memakai <strong>komutator</strong> (cincin belah) yang membalik sambungan tepat saat arus hendak berbalik, sehingga keluarannya selalu searah meski berdenyut. Bedanya hanya pada satu komponen sambungan ini.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "GGL Maksimum Generator vs Kecepatan Sudut",
        unit: "volt (V)",
        source: "N = 100, B = 0,2 T, A = 0,01 m², ε_maks = N·B·A·ω",
        note: "Pada kumparan dan medan tetap, GGL maksimum bertambah lurus seiring kecepatan sudut putaran.",
        data: [
          { label: "25 rad/s", value: 5, color: "#34d399" },
          { label: "50 rad/s", value: 10, color: "#22d3ee" },
          { label: "100 rad/s", value: 20, color: "#38bdf8" },
          { label: "150 rad/s", value: 30, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Generator AC: N = 200 lilitan, B = 0,1 T, luas A = 0,02 m², berputar dengan ω = 100 rad/s. Berapa GGL maksimumnya?",
        answer: 40,
        tolerance: 0.5,
        suffix: " V",
        solution:
          "Pakai ε_maks = N·B·A·ω = 200 × 0,1 × 0,02 × 100 = <strong>40 V</strong>. Tegangan keluaran berayun dari +40 V ke −40 V.",
        hint: "ε_maks = N·B·A·ω. Kalikan keempatnya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Generator berputar 1500 putaran per menit (rpm). Berapa frekuensi listrik AC yang dihasilkannya? (ubah rpm ke putaran per detik)",
        answer: 25,
        tolerance: 0.5,
        suffix: " Hz",
        solution:
          "Frekuensi = putaran per detik = 1500/60 = <strong>25 Hz</strong>. Tiap putaran kumparan menghasilkan satu siklus gelombang AC.",
        hint: "Bagi rpm dengan 60 untuk mendapat putaran per detik (Hz).",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap ciri: milik generator AC atau generator DC.",
        buckets: ["Generator AC", "Generator DC"],
        items: [
          { text: "Memakai dua cincin geser utuh", bucket: "Generator AC" },
          { text: "Keluaran membalik arah tiap setengah putaran", bucket: "Generator AC" },
          { text: "Memakai komutator (cincin belah)", bucket: "Generator DC" },
          { text: "Keluaran selalu searah meski berdenyut", bucket: "Generator DC" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Jaringan Listrik Memakai AC",
        html: "Hampir semua jaringan listrik dunia memakai arus bolak-balik (AC), termasuk di Indonesia dengan frekuensi 50 Hz. Alasannya bukan kebetulan: tegangan AC mudah dinaikkan atau diturunkan dengan transformator, sehingga listrik bisa dikirim pada tegangan sangat tinggi (rugi daya kecil) lalu diturunkan lagi untuk rumah. Generator DC pada dinamo sepeda lawas cukup untuk menyalakan satu lampu, tapi untuk mengirim listrik ratusan kilometer, AC dari generator besar jauh lebih unggul.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rumuskan. GGL generator berayun sebagai gelombang sinus: <strong>ε = ε_maks·sin(ωt)</strong>, dengan puncak <strong>ε_maks = N·B·A·ω</strong>. Frekuensi listrik sama dengan putaran per detik kumparan. Perbedaan AC dan DC hanya terletak pada sambungan: cincin geser menghasilkan AC, komutator menghasilkan DC. Keduanya tetap menjalankan hukum Faraday yang sama.",
      },
      {
        type: "takeaways",
        items: [
          "GGL generator berbentuk gelombang sinus: ε = ε_maks·sin(ωt), dengan ε_maks = N·B·A·ω.",
          "GGL maksimum saat bidang kumparan sejajar medan, nol saat tegak lurus medan.",
          "Cincin geser menghasilkan AC; komutator (cincin belah) menghasilkan DC.",
          "Jaringan listrik memakai AC karena tegangannya mudah diubah dengan transformator.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "GGL keluaran generator berbentuk?",
            options: ["Garis lurus tetap", "Gelombang sinus naik-turun", "Nol selamanya", "Tangga"],
            answer: 1,
            explain: "GGL = ε_maks·sin(ωt), berupa gelombang sinus.",
          },
          {
            q: "Komponen yang membuat generator menghasilkan DC adalah?",
            options: ["Dua cincin geser", "Komutator (cincin belah)", "Baterai", "Kapasitor"],
            answer: 1,
            explain: "Komutator membalik sambungan sehingga keluaran tetap searah.",
          },
          {
            q: "GGL generator maksimum saat bidang kumparan?",
            options: [
              "Tegak lurus medan",
              "Sejajar medan",
              "Membentuk 45°",
              "Diam",
            ],
            answer: 1,
            explain: "Saat bidang sejajar medan, fluks berubah paling cepat, GGL maksimum.",
          },
          {
            q: "Generator berputar 3000 rpm menghasilkan frekuensi?",
            options: ["50 Hz", "30 Hz", "60 Hz", "100 Hz"],
            answer: 0,
            explain: "3000/60 = 50 Hz.",
          },
          {
            q: "Mengapa jaringan listrik memilih AC?",
            options: [
              "AC tidak berbahaya",
              "Tegangan AC mudah diubah dengan transformator",
              "AC tidak butuh generator",
              "AC lebih lambat",
            ],
            answer: 1,
            explain: "Transformator mudah menaik-turunkan tegangan AC untuk transmisi.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "transformator",
    levelId: "aplikasi-magnet",
    order: 3,
    title: "Transformator",
    summary:
      "Tanpa bagian yang berputar, alat ini menaikkan dan menurunkan tegangan listrik sesuka kita. Tanpanya, listrik tak akan sampai ke rumah dengan aman.",
    durationMin: 14,
    tags: ["fisika", "transformator", "tegangan", "induksi"],
    blocks: [
      {
        type: "paragraph",
        html: "Listrik dari pembangkit dikirim pada tegangan ratusan ribu volt, tapi stopkontak rumahmu hanya 220 volt. Siapa yang menurunkannya? Sebuah kotak diam tanpa bagian bergerak, hanya dua gulungan kawat pada inti besi. Sebelum menuliskan rumus, ayo kita pahami bagaimana transformator mengubah tegangan tanpa menyentuh listriknya langsung.",
      },
      {
        type: "video",
        comp: "HukumOhmVideo",
        title: "Video: Dua Kumparan pada Satu Inti Besi",
        caption: "Arus bolak-balik di kumparan primer menginduksi tegangan di kumparan sekunder.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Transformator punya dua kumparan pada satu inti besi: <strong>primer</strong> (masukan) dan <strong>sekunder</strong> (keluaran). Arus bolak-balik di primer membuat fluks berubah-ubah di inti besi. Fluks yang sama menembus sekunder, dan menurut Faraday, menginduksi tegangan di sana. Bila lilitan sekunder lebih banyak, tegangan <strong>naik</strong> (step-up); bila lebih sedikit, tegangan <strong>turun</strong> (step-down).",
      },
      {
        type: "callout",
        tone: "info",
        title: "Hanya bekerja untuk AC",
        html: "Transformator <strong>tidak bekerja</strong> dengan arus searah (DC) yang tetap, karena fluks yang konstan tidak menginduksi apa pun. Ia butuh arus yang terus berubah agar fluksnya berubah. Inilah salah satu alasan kuat mengapa jaringan listrik memakai AC: hanya AC yang bisa dinaik-turunkan tegangannya dengan transformator.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "line",
        title: "Tegangan Sekunder vs Jumlah Lilitan Sekunder",
        unit: "volt (V)",
        source: "primer Vp = 220 V dengan Np = 100 lilitan, Vs = Vp·Ns/Np",
        note: "Pada primer tetap, tegangan sekunder bertambah lurus seiring jumlah lilitan sekunder. Lebih banyak lilitan = tegangan lebih tinggi.",
        data: [
          { label: "50 lilitan", value: 110, color: "#34d399" },
          { label: "100 lilitan", value: 220, color: "#22d3ee" },
          { label: "200 lilitan", value: 440, color: "#38bdf8" },
          { label: "500 lilitan", value: 1100, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah transformator memiliki 1000 lilitan primer dan 50 lilitan sekunder. Jika tegangan primer 220 V, berapa tegangan sekundernya? (gunakan Vp/Vs = Np/Ns)",
        answer: 11,
        tolerance: 0.1,
        suffix: " V",
        solution:
          "Pakai Vp/Vs = Np/Ns, maka Vs = Vp·Ns/Np = 220 × 50/1000 = 220 × 0,05 = <strong>11 V</strong>. Lilitan sekunder lebih sedikit, jadi tegangan turun (step-down).",
        hint: "Vs = Vp × (Ns/Np).",
      },
      {
        type: "calcExercise",
        prompt:
          "Transformator step-up ideal: tegangan primer 220 V dengan arus primer 5 A. Jika tegangan sekunder 1100 V, berapa arus sekundernya? (anggap daya masuk = daya keluar, Vp·Ip = Vs·Is)",
        answer: 1,
        tolerance: 0.02,
        suffix: " A",
        solution:
          "Pada trafo ideal Vp·Ip = Vs·Is, maka Is = Vp·Ip/Vs = (220 × 5)/1100 = 1100/1100 = <strong>1 A</strong>. Tegangan naik 5 kali, arus turun 5 kali.",
        hint: "Vp·Ip = Vs·Is, susun ulang untuk Is.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap transformator: step-up (menaikkan) atau step-down (menurunkan).",
        buckets: ["Step-up", "Step-down"],
        items: [
          { text: "Lilitan sekunder lebih banyak dari primer", bucket: "Step-up" },
          { text: "Tegangan keluaran lebih tinggi dari masukan", bucket: "Step-up" },
          { text: "Lilitan sekunder lebih sedikit dari primer", bucket: "Step-down" },
          { text: "Adaptor pengisi daya ponsel (220 V ke 5 V)", bucket: "Step-down" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Gardu Listrik dan Charger Ponsel",
        html: "Listrik dari pembangkit dinaikkan ke ratusan ribu volt oleh trafo step-up sebelum dikirim lewat kabel transmisi. Tegangan tinggi berarti arus kecil untuk daya yang sama, sehingga rugi panas di kabel (yang sebanding kuadrat arus) jauh berkurang. Mendekati kota, gardu memakai trafo step-down menurunkannya bertahap hingga 220 V untuk rumah. Bahkan charger ponsel di tanganmu berisi trafo step-down mungil yang menurunkan 220 V menjadi 5 V. Transformator hadir di setiap mata rantai perjalanan listrik.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rumuskan. Pada transformator berlaku perbandingan <strong>Vp/Vs = Np/Ns</strong>: rasio tegangan sama dengan rasio jumlah lilitan. Pada transformator <strong>ideal</strong> (tanpa rugi daya), daya masuk sama dengan daya keluar: <strong>Vp·Ip = Vs·Is</strong>, sehingga saat tegangan naik, arus turun seimbang. Transformator adalah penerapan langsung hukum Faraday tanpa satu pun bagian yang berputar.",
      },
      {
        type: "takeaways",
        items: [
          "Transformator mengubah tegangan AC lewat induksi pada dua kumparan di inti besi.",
          "Perbandingan tegangan: Vp/Vs = Np/Ns; lilitan sekunder banyak = step-up, sedikit = step-down.",
          "Trafo ideal: Vp·Ip = Vs·Is, sehingga tegangan naik membuat arus turun.",
          "Hanya bekerja untuk AC; itulah salah satu alasan jaringan listrik memakai AC.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Perbandingan pada transformator adalah?",
            options: ["Vp/Vs = Np/Ns", "F = B·I·L", "B = µ₀·n·I", "ε = B·L·v"],
            answer: 0,
            explain: "Rasio tegangan sama dengan rasio jumlah lilitan: Vp/Vs = Np/Ns.",
          },
          {
            q: "Transformator step-up memiliki?",
            options: [
              "Lilitan sekunder lebih sedikit",
              "Lilitan sekunder lebih banyak dari primer",
              "Tidak punya lilitan",
              "Inti dari kayu",
            ],
            answer: 1,
            explain: "Lilitan sekunder lebih banyak membuat tegangan naik.",
          },
          {
            q: "Transformator tidak bekerja dengan?",
            options: ["Arus bolak-balik (AC)", "Arus searah tetap (DC)", "Tegangan tinggi", "Inti besi"],
            answer: 1,
            explain: "DC tetap menghasilkan fluks konstan yang tidak menginduksi apa pun.",
          },
          {
            q: "Trafo: Np=1000, Ns=100, Vp=220 V. Tegangan sekundernya?",
            options: ["22 V", "2200 V", "110 V", "44 V"],
            answer: 0,
            explain: "Vs = 220 × 100/1000 = 22 V.",
          },
          {
            q: "Pada trafo ideal, jika tegangan dinaikkan 10 kali, arusnya?",
            options: ["Naik 10 kali", "Turun 10 kali", "Tetap", "Nol"],
            answer: 1,
            explain: "Karena Vp·Ip = Vs·Is, tegangan naik 10 kali membuat arus turun 10 kali.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "motor-listrik",
    levelId: "aplikasi-magnet",
    order: 4,
    title: "Motor Listrik",
    summary:
      "Dari kipas hingga mobil listrik, motor mengubah arus menjadi putaran. Rahasianya: gaya Lorentz yang memuntir kumparan tanpa henti.",
    durationMin: 14,
    tags: ["fisika", "motor listrik", "gaya Lorentz", "torsi"],
    blocks: [
      {
        type: "paragraph",
        html: "Kipas angin, blender, bor, mobil listrik, semuanya berputar karena satu komponen yang sama: motor listrik. Alirkan arus, dan sesuatu di dalamnya langsung berputar kencang tanpa henti. Sebelum menuliskan rumus, ayo kita bongkar bagaimana arus listrik diubah menjadi putaran yang terus-menerus.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Kumparan Berputar karena Gaya pada Dua Sisinya",
        caption: "Arus berlawanan di kedua sisi kumparan menghasilkan pasangan gaya yang memuntir.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pada kumparan berarus di dalam medan, sisi kiri dan sisi kanan mengalirkan arus ke arah <strong>berlawanan</strong>. Maka gaya Lorentz pada kedua sisi juga berlawanan: satu sisi terdorong naik, sisi lain turun. Pasangan gaya berlawanan ini memuntir kumparan, itulah <strong>torsi</strong>. Selama arus mengalir dan arahnya diatur tepat, kumparan berputar terus.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Peran komutator",
        html: "Setiap setengah putaran, posisi kumparan terbalik. Tanpa pengaturan, torsi akan membalik dan kumparan berhenti berayun. <strong>Komutator</strong> (cincin belah) membalik arah arus tepat pada saat itu, sehingga torsi selalu mendorong ke arah yang sama. Inilah yang menjaga motor berputar satu arah tanpa henti.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "line",
        title: "Gaya pada Sisi Kumparan vs Arus Motor",
        unit: "newton (N)",
        source: "B = 0,5 T, panjang sisi L = 0,1 m, F = B·I·L",
        note: "Pada medan dan panjang tetap, gaya (dan torsi) motor bertambah lurus seiring arus. Arus lebih besar = putaran lebih bertenaga.",
        data: [
          { label: "1 A", value: 0.05, color: "#34d399" },
          { label: "2 A", value: 0.1, color: "#22d3ee" },
          { label: "5 A", value: 0.25, color: "#38bdf8" },
          { label: "10 A", value: 0.5, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Pada motor, satu sisi kumparan sepanjang 0,1 m membawa arus 4 A dalam medan 0,5 T (tegak lurus). Berapa gaya Lorentz pada sisi itu?",
        answer: 0.2,
        tolerance: 0.01,
        suffix: " N",
        solution:
          "Pakai F = B·I·L = 0,5 × 4 × 0,1 = <strong>0,2 N</strong>. Sisi berseberangan mengalami gaya sama besar ke arah berlawanan, sehingga kumparan terpuntir.",
        hint: "F = B·I·L pada satu sisi kumparan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah motor menarik arus 3 A pada tegangan 12 V. Berapa daya listrik yang diserapnya? (gunakan P = V·I)",
        answer: 36,
        tolerance: 0.5,
        suffix: " W",
        solution:
          "Pakai P = V·I = 12 × 3 = <strong>36 W</strong>. Sebagian besar daya ini diubah menjadi energi gerak, sisanya menjadi panas.",
        hint: "P = V × I.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan: membuat torsi motor lebih besar atau lebih kecil.",
        buckets: ["Torsi lebih besar", "Torsi lebih kecil"],
        items: [
          { text: "Arus diperbesar", bucket: "Torsi lebih besar" },
          { text: "Medan magnet diperkuat", bucket: "Torsi lebih besar" },
          { text: "Jumlah lilitan kumparan ditambah", bucket: "Torsi lebih besar" },
          { text: "Arus diperkecil", bucket: "Torsi lebih kecil" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Motor Mobil Listrik dan Pengereman Regeneratif",
        html: "Mobil listrik digerakkan motor yang mengubah listrik baterai menjadi putaran roda lewat gaya Lorentz. Yang cerdik, saat pengemudi mengerem, motor dibalik perannya menjadi generator: roda yang masih berputar memutar kumparan, fluks berubah, dan GGL induksi mengisi ulang baterai sambil memperlambat mobil. Energi gerak yang biasanya terbuang sebagai panas di rem cakram kini sebagian dipungut kembali. Satu mesin yang sama menjalankan dua hukum: gaya Lorentz saat menarik, hukum Faraday saat mengerem.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rumuskan. Gaya pada tiap sisi kumparan motor adalah <strong>F = B·I·L</strong>, dan pasangan gaya berlawanan pada kedua sisi menghasilkan <strong>torsi τ = N·B·I·A</strong> yang memutar kumparan (N lilitan, A luas kumparan). Daya listrik yang diserap motor adalah <strong>P = V·I</strong>. Komutator menjaga arah torsi tetap. Motor adalah kebalikan generator: gaya Lorentz mengubah listrik menjadi gerak.",
      },
      {
        type: "takeaways",
        items: [
          "Motor memutar kumparan lewat pasangan gaya Lorentz berlawanan pada kedua sisinya.",
          "Gaya tiap sisi F = B·I·L; torsi total τ = N·B·I·A.",
          "Komutator membalik arah arus tiap setengah putaran agar torsi tetap satu arah.",
          "Motor adalah kebalikan generator, dan bisa berperan sebagai generator saat pengereman regeneratif.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa yang memutar kumparan motor listrik?",
            options: [
              "Gaya gravitasi",
              "Pasangan gaya Lorentz berlawanan pada kedua sisi",
              "Gaya pegas",
              "Tekanan udara",
            ],
            answer: 1,
            explain: "Arus berlawanan di dua sisi membuat gaya berlawanan yang memuntir kumparan.",
          },
          {
            q: "Fungsi komutator pada motor adalah?",
            options: [
              "Menyimpan energi",
              "Membalik arah arus agar torsi tetap satu arah",
              "Menurunkan tegangan",
              "Mendinginkan motor",
            ],
            answer: 1,
            explain: "Komutator membalik arus tiap setengah putaran agar torsi konsisten.",
          },
          {
            q: "Torsi motor membesar jika?",
            options: [
              "Arus, medan, atau jumlah lilitan diperbesar",
              "Arus diperkecil",
              "Medan dihilangkan",
              "Lilitan dikurangi",
            ],
            answer: 0,
            explain: "τ = N·B·I·A, jadi memperbesar N, B, atau I menambah torsi.",
          },
          {
            q: "Motor menarik arus 2 A pada 6 V. Daya yang diserap?",
            options: ["12 W", "3 W", "8 W", "6 W"],
            answer: 0,
            explain: "P = V·I = 6 × 2 = 12 W.",
          },
          {
            q: "Saat mobil listrik mengerem regeneratif, motornya berperan sebagai?",
            options: ["Transformator", "Generator yang mengisi baterai", "Resistor", "Kapasitor"],
            answer: 1,
            explain: "Roda memutar kumparan, GGL induksi mengisi baterai (hukum Faraday).",
          },
        ],
      },
    ],
  },
];
