import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "besaran-sudut",
    levelId: "kinematika-rotasi",
    order: 1,
    title: "Sudut dan Radian",
    summary:
      "Sebelum menyentuh rumus, kita rasakan dulu bagaimana sebuah pintu berputar: lahirlah sudut, kecepatan sudut, dan percepatan sudut.",
    durationMin: 13,
    tags: ["fisika", "rotasi", "sudut", "radian", "kecepatan sudut"],
    blocks: [
      {
        type: "paragraph",
        html: "Dorong sebuah pintu. Ujung dekat engsel hampir tidak bergeser, tetapi gagangnya menyapu jarak yang jauh. Aneh, padahal keduanya bergerak bersama. Rahasianya: dalam gerak berputar, yang sama bagi setiap titik bukan jarak tempuh, melainkan <strong>sudut</strong> yang disapu. Ayo kenali dulu kisahnya sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Sudut yang Berubah Tiap Detik",
        caption: "Kecepatan sudut hanyalah laju perubahan sudut terhadap waktu.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan jarum jam. Dalam satu menit, jarum detik menyapu satu putaran penuh. Putaran penuh itu bernilai <strong>2π radian</strong> (sekitar 6,28). Jadi tiap detik jarum menyapu sudut yang sama, tak peduli kita ukur dari pangkal atau ujung jarum. Itulah mengapa fisikawan memilih <strong>radian</strong>, bukan sentimeter, untuk menggambarkan putaran.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa itu radian?",
        html: "Satu <strong>radian</strong> adalah sudut yang busurnya sepanjang satu jari-jari. Karena keliling lingkaran 2πr, satu putaran penuh memuat <strong>2π radian</strong>, alias 360°. Maka 180° = π rad dan 90° = π/2 rad. Radian membuat rumus rotasi menjadi rapi, karena panjang busur s = r·θ langsung berlaku tanpa faktor konversi.",
      },
      {
        type: "widget",
        widget: "SimulatorPi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kecepatan Sudut Benda Sehari-hari",
        unit: "rad/s",
        source: "konversi dari putaran per menit (rpm)",
        note: "Nilai didapat dari rpm: tiap putaran bernilai 2π rad. Komidi putar yang lambat dan bilah blender yang ganas sama-sama diukur dengan satuan yang sama.",
        data: [
          { label: "Komidi putar (5 rpm)", value: 0.52, color: "#f472b6" },
          { label: "Piringan hitam (33 rpm)", value: 3.49, color: "#e879f9" },
          { label: "Roda sepeda (120 rpm)", value: 12.57, color: "#c084fc" },
          { label: "Bilah blender (300 rpm)", value: 31.42, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sudut 90° sama dengan berapa radian? (pakai π = 3,14)",
        answer: 1.57,
        tolerance: 0.02,
        suffix: " rad",
        solution:
          "90° adalah seperempat putaran. Satu putaran = 2π rad, jadi seperempatnya = 2π/4 = π/2 = 3,14/2 = <strong>1,57 rad</strong>.",
        hint: "90° adalah seperempat putaran penuh (2π).",
      },
      {
        type: "calcExercise",
        prompt:
          "Jarum detik jam menyapu satu putaran penuh (2π rad) dalam 60 sekon. Berapa kecepatan sudutnya? (pakai π = 3,14)",
        answer: 0.105,
        tolerance: 0.005,
        suffix: " rad/s",
        solution:
          "ω = sudut dibagi waktu = (2 × 3,14) / 60 = 6,28 / 60 ≈ <strong>0,105 rad/s</strong>. Lambat, tetapi tak pernah berhenti.",
        hint: "Bagi 2π radian dengan 60 sekon.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan besaran rotasi dengan padanannya pada gerak lurus.",
        pairs: [
          { left: "Sudut θ (rad)", right: "Posisi x (m)" },
          { left: "Kecepatan sudut ω (rad/s)", right: "Kecepatan v (m/s)" },
          { left: "Percepatan sudut α (rad/s²)", right: "Percepatan a (m/s²)" },
          { left: "Putaran penuh = 2π rad", right: "Satu keliling lingkaran" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap nilai sudut: kurang dari setengah putaran atau lebih.",
        buckets: ["Kurang dari ½ putaran", "Lebih dari ½ putaran"],
        items: [
          { text: "90° (π/2 rad)", bucket: "Kurang dari ½ putaran" },
          { text: "270° (3π/2 rad)", bucket: "Lebih dari ½ putaran" },
          { text: "1 rad (≈57°)", bucket: "Kurang dari ½ putaran" },
          { text: "5 rad (≈286°)", bucket: "Lebih dari ½ putaran" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Piringan Hard Disk",
        html: "Di dalam hard disk komputer, piringan berputar 7200 putaran per menit. Diubah ke radian: 7200/60 = 120 putaran per detik, dikali 2π menjadi sekitar <strong>754 rad/s</strong>. Kepala baca harus menemukan satu bit data pada piringan yang menyapu ratusan radian tiap detik. Memahami sudut dan kecepatan sudut bukan soal hafalan, tetapi soal merancang mesin yang bekerja di tepi batas fisika.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, barulah rumusnya terasa wajar. Konversi sudut: <strong>1 putaran = 2π rad = 360°</strong>, sehingga θ(rad) = θ(°) × π/180. Panjang busur: <strong>s = r·θ</strong> (θ dalam radian). Kecepatan sudut: <strong>ω = Δθ/Δt</strong>, dan percepatan sudut: <strong>α = Δω/Δt</strong>. Tiga besaran ini adalah cermin rotasi dari posisi, kecepatan, dan percepatan.",
      },
      {
        type: "takeaways",
        items: [
          "Dalam rotasi, semua titik menyapu sudut yang sama, diukur dalam radian.",
          "Satu putaran penuh bernilai 2π radian (≈ 6,28) atau 360°.",
          "Satu radian adalah sudut yang busurnya sepanjang satu jari-jari; panjang busur s = r·θ.",
          "Kecepatan sudut ω = Δθ/Δt; percepatan sudut α = Δω/Δt.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Satu putaran penuh sama dengan berapa radian?",
            options: ["π", "2π", "π/2", "360"],
            answer: 1,
            explain: "Satu putaran penuh sama dengan 2π radian (sekitar 6,28).",
          },
          {
            q: "Sudut 180° sama dengan?",
            options: ["π/2 rad", "π rad", "2π rad", "3π rad"],
            answer: 1,
            explain: "180° adalah setengah putaran, yaitu π radian.",
          },
          {
            q: "Padanan rotasi dari percepatan a adalah?",
            options: ["Sudut θ", "Kecepatan sudut ω", "Percepatan sudut α", "Torsi"],
            answer: 2,
            explain: "Percepatan sudut α adalah cermin rotasi dari percepatan linear a.",
          },
          {
            q: "Panjang busur lingkaran jari-jari 2 m untuk sudut 3 rad adalah?",
            options: ["1,5 m", "5 m", "6 m", "0,67 m"],
            answer: 2,
            explain: "s = r·θ = 2 × 3 = 6 m (θ harus dalam radian).",
          },
          {
            q: "Mengapa fisikawan memakai radian, bukan sentimeter, untuk rotasi?",
            options: [
              "Karena radian lebih besar",
              "Karena setiap titik menyapu sudut yang sama",
              "Karena sentimeter dilarang",
              "Karena radian tidak punya satuan",
            ],
            answer: 1,
            explain:
              "Semua titik pada benda berputar menyapu sudut sama, sehingga sudut adalah ukuran yang adil bagi seluruh benda.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kecepatan-sudut",
    levelId: "kinematika-rotasi",
    order: 2,
    title: "Kecepatan Sudut, Periode, dan Frekuensi",
    summary:
      "Roda yang berputar punya tiga cara bercerita: berapa rad tiap detik, berapa lama satu putaran, berapa putaran tiap detik. Ketiganya satu keluarga.",
    durationMin: 13,
    tags: ["fisika", "rotasi", "kecepatan sudut", "periode", "frekuensi"],
    blocks: [
      {
        type: "paragraph",
        html: "Kipas angin di langit-langit berputar tenang. Bagaimana kita menggambarkan 'seberapa cepat'? Bisa lewat berapa putaran tiap menit (rpm), berapa detik untuk satu putaran (periode), atau berapa radian tiap detik (kecepatan sudut). Ketiganya cara yang sama untuk satu cerita. Ayo telusuri hubungannya sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Seberapa Cepat Ia Berputar",
        caption: "Kecepatan sudut menghitung berapa banyak sudut yang disapu tiap detik.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan roda yang menyelesaikan satu putaran setiap 2 detik. Maka <strong>periodenya</strong> 2 sekon. Dalam 1 detik ia menyelesaikan setengah putaran, jadi <strong>frekuensinya</strong> 0,5 putaran per detik (0,5 hertz). Karena satu putaran = 2π radian, dalam 2 detik ia menyapu 2π rad, sehingga kecepatan sudutnya 2π/2 = π rad/s. Tiga angka berbeda, satu gerak yang sama.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Periode dan frekuensi",
        html: "<strong>Periode (T)</strong> adalah waktu untuk satu putaran penuh, satuannya sekon. <strong>Frekuensi (f)</strong> adalah jumlah putaran tiap detik, satuannya hertz. Keduanya saling membalik: f = 1/T. Karena satu putaran menyapu 2π radian, kecepatan sudut menjadi ω = 2π·f = 2π/T.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kecepatan Sudut dari Berbagai Periode",
        unit: "rad/s",
        source: "perhitungan ω = 2π/T dengan π = 3,14",
        note: "Makin singkat periode (makin cepat satu putaran selesai), makin besar kecepatan sudut. Periode 0,5 s menghasilkan ω empat kali lipat dari periode 2 s.",
        data: [
          { label: "T = 2 s", value: 3.14, color: "#f472b6" },
          { label: "T = 1 s", value: 6.28, color: "#e879f9" },
          { label: "T = 0,5 s", value: 12.57, color: "#c084fc" },
          { label: "T = 0,25 s", value: 25.13, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah roda menyelesaikan satu putaran dalam 4 sekon. Berapa kecepatan sudutnya? (pakai π = 3,14)",
        answer: 1.57,
        tolerance: 0.02,
        suffix: " rad/s",
        solution:
          "ω = 2π/T = (2 × 3,14)/4 = 6,28/4 = <strong>1,57 rad/s</strong>. Periode panjang berarti putaran lambat.",
        hint: "Pakai ω = 2π/T dengan T = 4 s.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kipas berputar 300 rpm (putaran per menit). Berapa frekuensinya dalam hertz?",
        answer: 5,
        tolerance: 0.01,
        suffix: " Hz",
        solution:
          "300 putaran per menit = 300/60 = <strong>5 putaran per detik = 5 Hz</strong>. Bagi rpm dengan 60 untuk mendapat hertz.",
        hint: "Satu menit = 60 detik, jadi bagi rpm dengan 60.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah piringan berputar dengan frekuensi 4 Hz. Berapa kecepatan sudutnya? (pakai π = 3,14)",
        answer: 25.12,
        tolerance: 0.1,
        suffix: " rad/s",
        solution:
          "ω = 2π·f = 2 × 3,14 × 4 = <strong>25,12 rad/s</strong>. Tiap putaran menyumbang 2π rad, dikali 4 putaran tiap detik.",
        hint: "Pakai ω = 2π·f.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan besaran dengan satuan dan maknanya.",
        pairs: [
          { left: "Periode (T)", right: "Waktu satu putaran (s)" },
          { left: "Frekuensi (f)", right: "Putaran per detik (Hz)" },
          { left: "Kecepatan sudut (ω)", right: "Radian per detik (rad/s)" },
          { left: "Hubungan f dan T", right: "f = 1/T" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mesin Cuci saat Memeras",
        html: "Saat tahap pengeringan, tabung mesin cuci berputar sekitar 1200 rpm. Diubah: 1200/60 = 20 putaran per detik (20 Hz), periodenya hanya 0,05 sekon, dan kecepatan sudutnya 2π × 20 ≈ 125 rad/s. Putaran secepat ini melempar air keluar lewat lubang tabung. Insinyur tidak menghafal angka; mereka memilih periode sependek mungkin agar pakaian cepat kering tanpa merusak mesin.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya jelas. Frekuensi dan periode saling membalik: <strong>f = 1/T</strong>. Kecepatan sudut menghubungkan keduanya dengan putaran penuh 2π: <strong>ω = 2π/T = 2π·f</strong>. Dan untuk mengubah rpm menjadi hertz, cukup bagi dengan 60. Semua mengalir dari satu fakta: satu putaran penuh adalah 2π radian.",
      },
      {
        type: "takeaways",
        items: [
          "Periode T adalah waktu satu putaran; frekuensi f adalah putaran per detik; f = 1/T.",
          "Kecepatan sudut menghubungkan keduanya: ω = 2π/T = 2π·f.",
          "Untuk mengubah rpm menjadi hertz, bagi dengan 60.",
          "Periode pendek berarti putaran cepat dan kecepatan sudut besar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hubungan frekuensi dan periode adalah?",
            options: ["f = T", "f = 1/T", "f = 2πT", "f = T²"],
            answer: 1,
            explain: "Frekuensi adalah kebalikan periode: f = 1/T.",
          },
          {
            q: "Rumus kecepatan sudut dari frekuensi adalah?",
            options: ["ω = f/2π", "ω = 2π·f", "ω = π·f", "ω = f²"],
            answer: 1,
            explain: "ω = 2π·f, karena tiap putaran menyapu 2π radian.",
          },
          {
            q: "Roda berputar 600 rpm. Frekuensinya dalam hertz?",
            options: ["6 Hz", "10 Hz", "60 Hz", "600 Hz"],
            answer: 1,
            explain: "600/60 = 10 putaran per detik = 10 Hz.",
          },
          {
            q: "Periode sebuah putaran adalah 0,5 s. Frekuensinya?",
            options: ["0,5 Hz", "1 Hz", "2 Hz", "5 Hz"],
            answer: 2,
            explain: "f = 1/T = 1/0,5 = 2 Hz.",
          },
          {
            q: "Jika periode diperpendek setengahnya, kecepatan sudut menjadi?",
            options: ["Setengah", "Tetap", "Dua kali", "Empat kali"],
            answer: 2,
            explain: "ω = 2π/T; bila T menjadi setengah, ω menjadi dua kali lipat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gmbb-rotasi",
    levelId: "kinematika-rotasi",
    order: 3,
    title: "Gerak Melingkar Berubah Beraturan",
    summary:
      "Saat percepatan sudut tetap, rotasi mengikuti pola yang persis sama dengan GLBB pada gerak lurus. Kisah dulu, rumus menyusul.",
    durationMin: 14,
    tags: ["fisika", "rotasi", "percepatan sudut", "GMBB", "kinematika"],
    blocks: [
      {
        type: "paragraph",
        html: "Tekan tombol blender dari mati. Bilahnya tidak langsung secepat itu; ia mempercepat putaran dari nol sampai kencang dalam beberapa saat. Saat motor memberi dorongan tetap, kecepatan sudut bertambah secara teratur tiap detik. Inilah gerak melingkar berubah beraturan. Ayo rasakan polanya sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Putaran yang Makin Cepat",
        caption: "Percepatan sudut tetap membuat kecepatan sudut tumbuh lurus terhadap waktu.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan roda mulai diam, lalu tiap detik kecepatan sudutnya bertambah 2 rad/s. Setelah 1 detik: 2 rad/s. Setelah 2 detik: 4 rad/s. Setelah 3 detik: 6 rad/s. Polanya rapi seperti tangga. Pertambahan tetap tiap detik inilah yang kita sebut <strong>percepatan sudut</strong>, persis seperti percepatan biasa pada mobil yang menambah kecepatan tetap.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Cermin dari GLBB",
        html: "Gerak melingkar berubah beraturan (GMBB) adalah cermin rotasi dari GLBB. Tukar saja besarannya: posisi x menjadi sudut θ, kecepatan v menjadi kecepatan sudut ω, percepatan a menjadi percepatan sudut α. Semua persamaan GLBB tetap berlaku, hanya berganti simbol. Inilah keindahan rotasi: kamu tidak perlu menghafal rumus baru.",
      },
      {
        type: "widget",
        widget: "SimulatorGLBB",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kecepatan Sudut vs Waktu (mulai diam, α = 2 rad/s²)",
        unit: "rad/s",
        source: "perhitungan ω = ω₀ + αt dengan ω₀ = 0",
        note: "Garis lurus naik: tiap detik kecepatan sudut bertambah tetap 2 rad/s. Kemiringan garis inilah percepatan sudut α.",
        data: [
          { label: "t = 0 s", value: 0, color: "#f472b6" },
          { label: "t = 1 s", value: 2, color: "#e879f9" },
          { label: "t = 2 s", value: 4, color: "#c084fc" },
          { label: "t = 3 s", value: 6, color: "#a78bfa" },
          { label: "t = 4 s", value: 8, color: "#818cf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah roda mula-mula diam, lalu kecepatan sudutnya naik menjadi 20 rad/s dalam 4 sekon. Berapa percepatan sudutnya?",
        answer: 5,
        tolerance: 0.01,
        suffix: " rad/s²",
        solution:
          "Percepatan sudut adalah perubahan kecepatan sudut dibagi waktu: α = (20 − 0)/4 = <strong>5 rad/s²</strong>. Persis seperti percepatan biasa, hanya berputar.",
        hint: "Bagi perubahan kecepatan sudut dengan selang waktunya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Roda berputar 4 rad/s lalu dipercepat 3 rad/s² selama 2 sekon. Berapa kecepatan sudut akhirnya? (ω = ω₀ + αt)",
        answer: 10,
        tolerance: 0.01,
        suffix: " rad/s",
        solution:
          "ω = ω₀ + αt = 4 + 3 × 2 = 4 + 6 = <strong>10 rad/s</strong>. Sama persis pola v = v₀ + at pada gerak lurus.",
        hint: "Tambahkan kecepatan awal dengan percepatan sudut dikali waktu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Roda mulai diam, dipercepat 2 rad/s² selama 3 sekon. Berapa sudut total yang disapu? (θ = ω₀t + ½αt²)",
        answer: 9,
        tolerance: 0.01,
        suffix: " rad",
        solution:
          "θ = ω₀t + ½αt² = 0 + ½ × 2 × 3² = ½ × 2 × 9 = <strong>9 rad</strong>. Karena t dikuadratkan, sudut bertambah makin cepat.",
        hint: "Pakai θ = ω₀t + ½αt² dengan ω₀ = 0.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan persamaan GMBB rotasi dengan padanan GLBB-nya.",
        pairs: [
          { left: "ω = ω₀ + αt", right: "v = v₀ + at" },
          { left: "θ = ω₀t + ½αt²", right: "x = v₀t + ½at²" },
          { left: "ω² = ω₀² + 2αθ", right: "v² = v₀² + 2ax" },
          { left: "α tetap", right: "a tetap (GLBB)" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan gerak: percepatan sudut tetap (GMBB) atau kecepatan sudut tetap (GMB).",
        buckets: ["GMBB (α tetap)", "GMB (ω tetap)"],
        items: [
          { text: "Blender baru dinyalakan, putaran makin cepat", bucket: "GMBB (α tetap)" },
          { text: "Jarum jam berdetak tetap", bucket: "GMB (ω tetap)" },
          { text: "Roda direm, putaran melambat teratur", bucket: "GMBB (α tetap)" },
          { text: "Kipas sudah stabil pada putaran maksimum", bucket: "GMB (ω tetap)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Turbin Angin Saat Mulai Berputar",
        html: "Ketika angin mulai bertiup, baling-baling turbin angin tidak langsung berputar penuh. Ia mempercepat dari diam sampai kecepatan kerja secara teratur, mengikuti pola GMBB. Insinyur menghitung berapa lama (waktu) dan berapa putaran (sudut total) dibutuhkan agar generator mencapai putaran ideal. Mereka tidak menghafal rumus; mereka memakai pola yang sama dengan mobil yang menambah kecepatan, hanya ditukar simbolnya ke besaran sudut.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Bila percepatan sudut tetap, gerak rotasi mengikuti pola GLBB yang sama persis. Percepatan sudut: <strong>α = Δω/Δt</strong>. Kecepatan sudut: <strong>ω = ω₀ + αt</strong>. Sudut tempuh: <strong>θ = ω₀t + ½αt²</strong>. Dan tanpa waktu: <strong>ω² = ω₀² + 2αθ</strong>. Semua hanya menukar x dengan θ, v dengan ω, a dengan α.",
      },
      {
        type: "takeaways",
        items: [
          "GMBB terjadi saat percepatan sudut α tetap, cermin rotasi dari GLBB.",
          "Percepatan sudut α = Δω/Δt; satuannya rad/s².",
          "Persamaan: ω = ω₀ + αt, θ = ω₀t + ½αt², dan ω² = ω₀² + 2αθ.",
          "Cukup tukar x→θ, v→ω, a→α; tak perlu menghafal rumus baru.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Satuan percepatan sudut adalah?",
            options: ["rad/s", "rad/s²", "m/s²", "Hz"],
            answer: 1,
            explain: "Percepatan sudut adalah perubahan ω tiap detik, satuannya rad/s².",
          },
          {
            q: "Roda berputar dari 10 rad/s menjadi 30 rad/s dalam 5 s. Percepatan sudutnya?",
            options: ["2 rad/s²", "4 rad/s²", "8 rad/s²", "40 rad/s²"],
            answer: 1,
            explain: "α = (30 − 10)/5 = 20/5 = 4 rad/s².",
          },
          {
            q: "Persamaan padanan rotasi dari x = v₀t + ½at² adalah?",
            options: ["ω = ω₀ + αt", "θ = ω₀t + ½αt²", "L = Iω", "τ = Iα"],
            answer: 1,
            explain: "θ = ω₀t + ½αt² adalah cermin rotasi dari persamaan posisi GLBB.",
          },
          {
            q: "Roda mulai diam, α = 4 rad/s², setelah 3 s kecepatan sudutnya?",
            options: ["7 rad/s", "12 rad/s", "16 rad/s", "36 rad/s"],
            answer: 1,
            explain: "ω = ω₀ + αt = 0 + 4 × 3 = 12 rad/s.",
          },
          {
            q: "Kapan persamaan GMBB berlaku?",
            options: [
              "Saat ω tetap",
              "Saat percepatan sudut α tetap",
              "Hanya saat benda diam",
              "Saat tidak ada torsi",
            ],
            answer: 1,
            explain: "GMBB berlaku ketika percepatan sudut konstan, seperti GLBB untuk percepatan linear tetap.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hubungan-linear-sudut",
    levelId: "kinematika-rotasi",
    order: 4,
    title: "Hubungan Besaran Linear dan Sudut",
    summary:
      "Gagang pintu dan engsel menyapu sudut sama, tetapi menempuh jarak berbeda. Jembatan antara dunia putar dan dunia lurus adalah jari-jari.",
    durationMin: 14,
    tags: ["fisika", "rotasi", "kecepatan linear", "sentripetal", "jari-jari"],
    blocks: [
      {
        type: "paragraph",
        html: "Dua anak naik komidi putar: satu di tepi, satu dekat poros. Keduanya menyelesaikan satu putaran dalam waktu sama, jadi kecepatan sudutnya sama. Tetapi anak di tepi melesat jauh lebih cepat menembus udara. Mengapa? Jawabannya satu kata: <strong>jari-jari</strong>. Ayo telusuri jembatan antara putaran dan gerak maju sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Dari Sudut ke Kecepatan Nyata",
        caption: "Makin jauh dari poros, makin cepat sebuah titik bergerak meski sudutnya sama.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan roda berputar satu kali. Titik di tepi menempuh seluruh keliling lingkaran (2πr), sedangkan titik setengah jari-jari hanya menempuh setengahnya. Karena waktunya sama, titik tepi punya <strong>kecepatan linear</strong> dua kali lipat. Jadi meski kecepatan sudut ω semua titik sama, kecepatan nyata mereka bergantung pada seberapa jauh dari poros.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua jembatan",
        html: "Ada dua hubungan penting. Pertama, <strong>kecepatan linear</strong>: titik sejauh r dari poros bergerak dengan v = ω·r. Kedua, percepatan. Meski ω tetap, titik yang melingkar selalu berbelok, sehingga ada <strong>percepatan sentripetal</strong> menuju pusat. Bila ω berubah, ada pula percepatan tangensial a = α·r yang searah gerak.",
      },
      {
        type: "widget",
        widget: "SimulatorGLBB",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kecepatan Linear pada Roda ω = 10 rad/s",
        unit: "m/s",
        source: "perhitungan v = ω·r dengan ω tetap 10 rad/s",
        note: "Kecepatan sudut sama untuk semua titik (10 rad/s), tetapi kecepatan linear tumbuh lurus dengan jarak dari poros. Titik di tepi paling kencang.",
        data: [
          { label: "r = 0,1 m", value: 1, color: "#f472b6" },
          { label: "r = 0,2 m", value: 2, color: "#e879f9" },
          { label: "r = 0,3 m", value: 3, color: "#c084fc" },
          { label: "r = 0,5 m", value: 5, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah titik berada 0,4 m dari poros pada roda yang berputar 5 rad/s. Berapa kecepatan linearnya? (v = ω·r)",
        answer: 2,
        tolerance: 0.01,
        suffix: " m/s",
        solution:
          "v = ω·r = 5 × 0,4 = <strong>2 m/s</strong>. Makin jauh dari poros, makin cepat titik itu bergerak.",
        hint: "Kalikan kecepatan sudut dengan jari-jari.",
      },
      {
        type: "calcExercise",
        prompt:
          "Roda berjari-jari 0,5 m mengalami percepatan sudut 4 rad/s². Berapa percepatan tangensial di tepinya? (a = α·r)",
        answer: 2,
        tolerance: 0.01,
        suffix: " m/s²",
        solution:
          "a = α·r = 4 × 0,5 = <strong>2 m/s²</strong>. Percepatan tangensial adalah cermin linear dari percepatan sudut.",
        hint: "Kalikan percepatan sudut dengan jari-jari.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah benda melingkar dengan v = 6 m/s pada jari-jari 2 m. Berapa percepatan sentripetalnya? (a = v²/r)",
        answer: 18,
        tolerance: 0.1,
        suffix: " m/s²",
        solution:
          "a sentripetal = v²/r = 6²/2 = 36/2 = <strong>18 m/s²</strong>. Selalu menuju pusat lingkaran, menjaga benda tetap melingkar.",
        hint: "Kuadratkan kecepatan linear lalu bagi jari-jari.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan besaran sudut dengan padanan linearnya melalui jari-jari.",
        pairs: [
          { left: "Sudut θ", right: "Panjang busur s = r·θ" },
          { left: "Kecepatan sudut ω", right: "Kecepatan linear v = ω·r" },
          { left: "Percepatan sudut α", right: "Percepatan tangensial a = α·r" },
          { left: "Berbelok (ω tetap)", right: "Percepatan sentripetal v²/r" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Untuk ω sama, kelompokkan titik mana berkecepatan linear besar atau kecil.",
        buckets: ["Kecepatan linear besar", "Kecepatan linear kecil"],
        items: [
          { text: "Ujung baling-baling (jauh dari poros)", bucket: "Kecepatan linear besar" },
          { text: "Titik dekat poros baling-baling", bucket: "Kecepatan linear kecil" },
          { text: "Kursi tepi komidi putar", bucket: "Kecepatan linear besar" },
          { text: "Titik di sumbu komidi putar", bucket: "Kecepatan linear kecil" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Gerinda dan Mata Pisau",
        html: "Batu gerinda berputar pada kecepatan sudut tetap, tetapi tepi luarnya bergerak jauh lebih cepat daripada bagian dekat poros. Itulah mengapa logam diasah di tepi roda, bukan di tengahnya: kecepatan linear tepi yang tinggi (v = ω·r) menghasilkan gesekan dan pengikisan yang ampuh. Perancang gerinda tidak menghafal rumus; mereka memilih jari-jari roda agar kecepatan tepi tepat sesuai kebutuhan tanpa membuat batu pecah.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Jari-jari adalah jembatan antara dunia putar dan dunia lurus. Panjang busur: <strong>s = r·θ</strong>. Kecepatan linear: <strong>v = ω·r</strong>. Percepatan tangensial (saat ω berubah): <strong>a = α·r</strong>. Dan walau ω tetap, benda yang melingkar selalu menuju pusat dengan percepatan sentripetal <strong>a = v²/r = ω²·r</strong>. Semua memakai jari-jari sebagai penghubung.",
      },
      {
        type: "takeaways",
        items: [
          "Jari-jari adalah jembatan: s = r·θ, v = ω·r, a = α·r.",
          "Untuk ω sama, titik yang jauh dari poros bergerak lebih cepat.",
          "Benda melingkar selalu punya percepatan sentripetal menuju pusat: a = v²/r = ω²·r.",
          "Percepatan tangensial (a = α·r) muncul hanya saat kecepatan sudut berubah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hubungan kecepatan linear dan sudut adalah?",
            options: ["v = ω/r", "v = ω·r", "v = ω + r", "v = ω²r"],
            answer: 1,
            explain: "Kecepatan linear v = ω·r; jari-jari menjadi pengali.",
          },
          {
            q: "Titik 0,3 m dari poros, ω = 10 rad/s. Kecepatan linearnya?",
            options: ["0,03 m/s", "3 m/s", "10 m/s", "30 m/s"],
            answer: 1,
            explain: "v = ω·r = 10 × 0,3 = 3 m/s.",
          },
          {
            q: "Untuk kecepatan sudut sama, titik yang lebih jauh dari poros?",
            options: ["Bergerak lebih lambat", "Bergerak lebih cepat", "Sama saja", "Diam"],
            answer: 1,
            explain: "Kecepatan linear v = ω·r naik dengan r, jadi titik jauh lebih cepat.",
          },
          {
            q: "Percepatan sentripetal sebuah benda melingkar adalah?",
            options: ["a = α·r", "a = v²/r", "a = ω/r", "a = v·r"],
            answer: 1,
            explain: "Percepatan sentripetal a = v²/r (= ω²r), selalu menuju pusat.",
          },
          {
            q: "Percepatan tangensial a = α·r muncul ketika?",
            options: [
              "Selalu, walau ω tetap",
              "Hanya saat kecepatan sudut berubah",
              "Hanya saat benda diam",
              "Tidak pernah",
            ],
            answer: 1,
            explain: "Percepatan tangensial ada hanya bila ω berubah (α ≠ 0).",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gaya-sentripetal",
    levelId: "kinematika-rotasi",
    order: 5,
    title: "Percepatan dan Gaya Sentripetal",
    summary:
      "Mobil yang menikung, ember air yang diputar, satelit yang mengorbit: semuanya butuh gaya yang menarik ke pusat agar tetap melingkar. Kisah dulu, rumus di akhir.",
    durationMin: 14,
    tags: ["fisika", "rotasi", "sentripetal", "gerak melingkar", "gaya"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat mobil menikung tajam, tubuhmu serasa terlempar ke luar. Padahal yang sebenarnya terjadi sebaliknya: ada gaya yang menarikmu <strong>ke dalam</strong>, menuju pusat tikungan, agar kamu ikut berbelok bersama mobil. Tanpa gaya itu, kamu akan melaju lurus menembus pintu. Ayo telusuri gaya tersembunyi yang menjaga benda tetap melingkar sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Selalu Berbelok ke Pusat",
        caption: "Benda yang melingkar terus berbelok, dan berbelok berarti ada percepatan menuju pusat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan mengikat batu di tali lalu memutarnya mendatar. Tanganmu terus menarik tali ke dalam; begitu tali putus, batu langsung melesat lurus, bukan melingkar. Jadi untuk membuat benda tetap berputar, sesuatu harus <strong>selalu menariknya ke pusat</strong>. Makin cepat putarannya, makin keras tarikan yang kamu rasakan di tali.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Berbelok berarti dipercepat",
        html: "Walau kecepatan sudut ω tetap, benda yang melingkar tak pernah bergerak lurus: arahnya selalu berubah. Perubahan arah adalah bentuk percepatan, dan percepatan ini menunjuk <strong>ke pusat lingkaran</strong> (sentripetal). Karena ada percepatan, pasti ada gaya yang menyebabkannya: gaya sentripetal. Ia bukan jenis gaya baru, melainkan peran yang dipegang gesekan, gravitasi, atau tegangan tali.",
      },
      {
        type: "widget",
        widget: "SimulatorGLBB",
      },
      {
        type: "chart",
        variant: "line",
        title: "Percepatan Sentripetal di Tikungan r = 50 m",
        unit: "m/s²",
        source: "perhitungan a = v²/r dengan r tetap 50 m",
        note: "Jari-jari tikungan tetap. Karena a bergantung pada v², menggandakan laju melipatempatkan percepatan: dari 20 ke 40 km/jam, percepatan ke pusat melonjak dari 8 ke 32. Itulah mengapa menikung kencang berbahaya.",
        data: [
          { label: "v = 10 m/s", value: 2, color: "#f472b6" },
          { label: "v = 20 m/s", value: 8, color: "#e879f9" },
          { label: "v = 30 m/s", value: 18, color: "#c084fc" },
          { label: "v = 40 m/s", value: 32, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah mobil 1000 kg menikung dengan laju 10 m/s pada jari-jari 50 m. Berapa gaya sentripetal yang dibutuhkan? (F = m·v²/r)",
        answer: 2000,
        tolerance: 1,
        suffix: " N",
        solution:
          "F = m·v²/r = 1000 × 10² / 50 = 1000 × 100 / 50 = <strong>2000 N</strong>. Gaya inilah yang harus disediakan gesekan ban agar mobil tidak melaju lurus.",
        hint: "Kuadratkan laju, kalikan massa, lalu bagi jari-jari.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah benda melingkar dengan laju 8 m/s pada jari-jari 4 m. Berapa percepatan sentripetalnya? (a = v²/r)",
        answer: 16,
        tolerance: 0.1,
        suffix: " m/s²",
        solution:
          "a = v²/r = 8² / 4 = 64 / 4 = <strong>16 m/s²</strong>. Selalu mengarah ke pusat lingkaran.",
        hint: "Kuadratkan laju lalu bagi dengan jari-jari.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah massa 0,5 kg berputar pada jari-jari 0,5 m dengan kecepatan sudut 10 rad/s. Berapa gaya sentripetalnya? (F = m·ω²·r)",
        answer: 25,
        tolerance: 0.1,
        suffix: " N",
        solution:
          "F = m·ω²·r = 0,5 × 10² × 0,5 = 0,5 × 100 × 0,5 = <strong>25 N</strong>. Bentuk lain dari F = m·v²/r memakai kecepatan sudut.",
        hint: "Kuadratkan kecepatan sudut, kalikan massa dan jari-jari.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan situasi melingkar dengan gaya yang berperan sebagai gaya sentripetal.",
        pairs: [
          { left: "Mobil menikung di jalan datar", right: "Gaya gesek ban" },
          { left: "Satelit mengorbit Bumi", right: "Gaya gravitasi" },
          { left: "Ember air diputar di ujung tali", right: "Tegangan tali" },
          { left: "Bola melingkar di dinding melengkung", right: "Gaya normal dinding" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan: gaya itu berperan sebagai gaya sentripetal (menuju pusat) atau bukan.",
        buckets: ["Berperan sentripetal", "Bukan sentripetal"],
        items: [
          { text: "Gesekan ban saat mobil menikung", bucket: "Berperan sentripetal" },
          { text: "Gravitasi yang menahan satelit di orbit", bucket: "Berperan sentripetal" },
          { text: "Dorongan mesin pada mobil yang melaju lurus", bucket: "Bukan sentripetal" },
          { text: "Tegangan tali pada bandul yang diputar mendatar", bucket: "Berperan sentripetal" },
          { text: "Gaya gesek pada mobil yang mengerem di jalan lurus", bucket: "Bukan sentripetal" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tikungan Jalan dan Batas Aman",
        html: "Sebuah mobil 1200 kg menikung dengan laju 15 m/s (sekitar 54 km/jam) pada tikungan berjari-jari 45 m. Gaya sentripetal yang dibutuhkan: F = m·v²/r = 1200 × 15² / 45 = 1200 × 225 / 45 = <strong>6000 N</strong>. Seluruh gaya ini harus disediakan oleh gesekan ban dengan aspal. Bila jalan basah dan gesekan tak sanggup memberi 6000 N, mobil akan tergelincir keluar tikungan. Insinyur jalan tidak menghafal rumus; mereka memperlebar jari-jari tikungan dan memiringkan permukaannya agar gaya yang dibutuhkan tetap dalam batas aman.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya jelas. Benda yang melingkar selalu dipercepat menuju pusat: <strong>a = v²/r = ω²·r</strong>. Percepatan ini butuh gaya, yaitu gaya sentripetal: <strong>F = m·v²/r = m·ω²·r</strong>. Gaya ini bukan jenis baru, melainkan peran yang dimainkan gesekan, gravitasi, atau tegangan tali. Hilangkan gaya itu, dan benda langsung melaju lurus sesuai hukum I Newton.",
      },
      {
        type: "takeaways",
        items: [
          "Benda melingkar selalu dipercepat menuju pusat: a = v²/r = ω²·r.",
          "Gaya sentripetal F = m·v²/r = m·ω²·r adalah penyebab percepatan itu.",
          "Gaya sentripetal bukan gaya baru, tetapi peran gesekan, gravitasi, atau tegangan tali.",
          "Karena bergantung pada v², menggandakan laju melipatempatkan gaya yang dibutuhkan.",
          "Tanpa gaya sentripetal, benda melaju lurus (hukum I Newton).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Ke arah mana percepatan sentripetal menunjuk?",
            options: ["Menjauhi pusat", "Menuju pusat lingkaran", "Searah gerak", "Ke atas"],
            answer: 1,
            explain: "Percepatan sentripetal selalu menunjuk ke pusat lingkaran, menjaga benda tetap melingkar.",
          },
          {
            q: "Rumus gaya sentripetal adalah?",
            options: ["F = m·v/r", "F = m·v²/r", "F = m·r/v²", "F = m·v²·r"],
            answer: 1,
            explain: "Gaya sentripetal F = m·v²/r (= m·ω²·r).",
          },
          {
            q: "Benda 2 kg melingkar v = 4 m/s pada r = 2 m. Gaya sentripetalnya?",
            options: ["8 N", "16 N", "32 N", "4 N"],
            answer: 1,
            explain: "F = m·v²/r = 2 × 4² / 2 = 2 × 16 / 2 = 16 N.",
          },
          {
            q: "Jika laju digandakan pada tikungan yang sama, gaya sentripetal menjadi?",
            options: ["2 kali", "3 kali", "4 kali", "tetap"],
            answer: 2,
            explain: "Karena F bergantung pada v², menggandakan laju membuat gaya 2² = 4 kali lipat.",
          },
          {
            q: "Apa yang berperan sebagai gaya sentripetal pada satelit yang mengorbit Bumi?",
            options: ["Gaya dorong roket", "Gaya gravitasi", "Gaya gesek udara", "Tegangan tali"],
            answer: 1,
            explain: "Gravitasi Bumi menarik satelit ke pusat, berperan sebagai gaya sentripetal.",
          },
        ],
      },
    ],
  },
];
