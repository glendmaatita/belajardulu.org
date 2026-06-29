import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "glb-dan-glbb",
    levelId: "gerak-lurus",
    order: 1,
    title: "GLB dan GLBB",
    summary:
      "Dua pola gerak lurus paling mendasar: yang kecepatannya tetap (GLB) dan yang kecepatannya berubah beraturan (GLBB). Hampir semua gerak sehari-hari adalah campuran keduanya.",
    durationMin: 15,
    tags: ["kinematika", "GLB", "GLBB", "gerak-lurus"],
    blocks: [
      {
        type: "paragraph",
        html: "Mobil di jalan tol dengan cruise control melaju nyaris seperti penggaris: tetap dan datar. Lalu kamu menyalip, menginjak gas, dan kecepatan naik teratur tiap detik. Dua keadaan ini, kecepatan tetap dan kecepatan bertambah beraturan, adalah GLB dan GLBB. Sebelum menulis rumusnya, ayo lihat dulu polanya.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Gerak Tetap dan Gerak Berubah Beraturan",
        caption: "GLB: kecepatan konstan. GLBB: percepatan konstan, kecepatan berubah teratur.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan menjatuhkan bola dari tangan. Tiap detik ia bertambah cepat dengan tambahan yang sama, sekitar 10 m/s tiap detik. Itu <strong>GLBB</strong>, karena percepatannya tetap. Sekarang bayangkan eskalator yang membawamu naik dengan laju tetap: itu <strong>GLB</strong>. Amati, GLB adalah kasus khusus GLBB ketika percepatannya nol.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Inti perbedaannya",
        html: "<strong>GLB</strong> (Gerak Lurus Beraturan): kecepatan tetap, percepatan nol. <strong>GLBB</strong> (Gerak Lurus Berubah Beraturan): percepatan tetap, kecepatan berubah teratur, misalnya jatuh bebas.",
      },
      {
        type: "widget",
        widget: "SimulatorGLBB",
      },
      {
        type: "chart",
        variant: "line",
        title: "GLBB: Kecepatan Awal 5 m/s, Percepatan 2 m/s²",
        unit: "m/s",
        source: "ilustrasi edukatif",
        note: "Mulai dari 5 m/s, tiap detik kecepatan bertambah 2 m/s. Garis lurus naik adalah ciri khas GLBB (percepatan tetap).",
        data: [
          { label: "0 s", value: 5, color: "#818cf8" },
          { label: "1 s", value: 7, color: "#818cf8" },
          { label: "2 s", value: 9, color: "#818cf8" },
          { label: "3 s", value: 11, color: "#818cf8" },
          { label: "4 s", value: 13, color: "#818cf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah benda bergerak dengan kecepatan awal 5 m/s dan percepatan tetap 2 m/s². Berapa kecepatannya setelah 4 s?",
        answer: 13,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Pakai v = v₀ + at = 5 + (2 × 4) = 5 + 8 = <strong>13 m/s</strong>. Kecepatan akhir adalah kecepatan awal ditambah hasil percepatan selama selang waktu.",
        hint: "Gunakan v = v₀ + a·t.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan kecepatan awal 5 m/s dan percepatan 2 m/s², berapa jarak yang ditempuh benda dalam 4 s?",
        answer: 36,
        tolerance: 0.5,
        suffix: " m",
        solution:
          "Pakai s = v₀t + ½at² = (5 × 4) + ½ × 2 × 4² = 20 + (1 × 16) = 20 + 16 = <strong>36 m</strong>. Suku pertama adalah jarak andai tanpa percepatan, suku kedua adalah tambahan akibat percepatan.",
        hint: "Gunakan s = v₀·t + ½·a·t².",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap peristiwa sebagai GLB atau GLBB.",
        buckets: ["GLB (kecepatan tetap)", "GLBB (kecepatan berubah)"],
        items: [
          { text: "Mobil cruise control 80 km/jam di jalan datar", bucket: "GLB (kecepatan tetap)" },
          { text: "Buah kelapa jatuh dari pohon", bucket: "GLBB (kecepatan berubah)" },
          { text: "Kereta melaju pada kecepatan tetap di rel lurus", bucket: "GLB (kecepatan tetap)" },
          { text: "Mobil mengerem hingga berhenti", bucket: "GLBB (kecepatan berubah)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Jarak Pengereman dan Keselamatan di Jalan",
        html: "Saat sopir mengerem, mobil mengalami <strong>GLBB</strong> dengan percepatan negatif (perlambatan). Inilah mengapa jarak berhenti bertambah jauh lebih cepat daripada kecepatannya: pada rumus v² = v₀² + 2as, jarak pengereman sebanding dengan <strong>kuadrat</strong> kecepatan. Menggandakan kecepatan dari 40 ke 80 km/jam membuat jarak berhenti menjadi sekitar empat kali lipat, bukan dua kali. Pemahaman GLBB inilah yang mendasari batas kecepatan dan jarak aman antarkendaraan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya berdiri di atas pemahaman. <strong>GLB: s = v · t</strong> (kecepatan tetap). <strong>GLBB: v = v₀ + a·t</strong>, <strong>s = v₀·t + ½·a·t²</strong>, dan <strong>v² = v₀² + 2·a·s</strong>. Ketiga rumus GLBB cukup untuk menyelesaikan hampir semua soal gerak lurus berubah beraturan, termasuk jatuh bebas dengan a = g ≈ 10 m/s².",
      },
      {
        type: "takeaways",
        items: [
          "GLB berarti kecepatan tetap dan percepatan nol: s = v·t.",
          "GLBB berarti percepatan tetap: v = v₀ + a·t dan s = v₀·t + ½·a·t².",
          "Jatuh bebas adalah GLBB dengan percepatan g sekitar 10 m/s².",
          "Pada GLBB, jarak pengereman sebanding dengan kuadrat kecepatan (v² = v₀² + 2as).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Ciri utama GLB adalah?",
            options: [
              "Percepatan tetap",
              "Kecepatan tetap, percepatan nol",
              "Kecepatan nol",
              "Lintasan melengkung",
            ],
            answer: 1,
            explain: "GLB: kecepatan konstan, sehingga percepatannya nol.",
          },
          {
            q: "Benda dengan v₀ = 0 dan a = 3 m/s². Kecepatan setelah 5 s?",
            options: ["8 m/s", "15 m/s", "3 m/s", "0,6 m/s"],
            answer: 1,
            explain: "v = v₀ + at = 0 + 3×5 = 15 m/s.",
          },
          {
            q: "Rumus jarak pada GLBB adalah?",
            options: ["s = v·t", "s = v₀t + ½at²", "s = a·t", "s = v/t"],
            answer: 1,
            explain: "Pada GLBB, s = v₀·t + ½·a·t².",
          },
          {
            q: "Sebuah benda jatuh bebas dari diam. Setelah 2 s kecepatannya (g = 10 m/s²)?",
            options: ["5 m/s", "10 m/s", "20 m/s", "40 m/s"],
            answer: 2,
            explain: "v = g·t = 10 × 2 = 20 m/s.",
          },
          {
            q: "Manakah contoh GLBB?",
            options: [
              "Eskalator berjalan dengan laju tetap",
              "Mobil melaju 60 km/jam konstan",
              "Apel jatuh dari pohon",
              "Kereta diam di stasiun",
            ],
            answer: 2,
            explain: "Apel jatuh dipercepat oleh gravitasi, jadi GLBB.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "jatuh-bebas",
    levelId: "gerak-lurus",
    order: 2,
    title: "Jatuh Bebas",
    summary:
      "Lepaskan benda apa pun dan gravitasi langsung bekerja. Jatuh bebas adalah GLBB paling murni: kecepatan awal nol dan percepatan tetap sebesar g.",
    durationMin: 14,
    tags: ["kinematika", "jatuh-bebas", "gravitasi", "GLBB"],
    blocks: [
      {
        type: "paragraph",
        html: "Galileo konon menjatuhkan dua bola berbeda berat dari Menara Pisa, dan keduanya mendarat hampir bersamaan. Mengejutkan: benda berat dan ringan jatuh dengan percepatan yang sama bila hambatan udara diabaikan. Apa yang menentukan seberapa cepat benda jatuh kalau bukan beratnya? Ayo selidiki dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Semua Benda Jatuh dengan g yang Sama",
        caption: "Tanpa hambatan udara, percepatan jatuh bebas sama untuk semua benda, sekitar 10 m/s².",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Jatuhkan selembar kertas dan sebuah kunci bersamaan: kunci mendarat lebih dulu. Sekarang remas kertas menjadi bola padat dan ulangi: keduanya nyaris mendarat bersamaan. Yang membuat kertas tadi lambat bukan beratnya, melainkan <strong>hambatan udara</strong>. Dalam <strong>jatuh bebas ideal</strong> (tanpa udara), semua benda dipercepat sama oleh gravitasi, sekitar 10 m/s² tiap detik.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa itu jatuh bebas",
        html: "<strong>Jatuh bebas</strong> adalah GLBB dengan kecepatan awal nol dan percepatan tetap g (sekitar 9,8 m/s², sering dibulatkan 10 m/s²) yang selalu mengarah ke bawah. Massa benda tidak memengaruhi percepatan jatuhnya.",
      },
      {
        type: "widget",
        widget: "SimulatorGLBB",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kecepatan Benda Jatuh Bebas (g = 10 m/s²)",
        unit: "m/s",
        source: "ilustrasi edukatif",
        note: "Mulai dari diam, tiap detik kecepatan bertambah 10 m/s. Garis lurus naik ini adalah ciri GLBB dengan a = g.",
        data: [
          { label: "0 s", value: 0, color: "#6366f1" },
          { label: "1 s", value: 10, color: "#6366f1" },
          { label: "2 s", value: 20, color: "#6366f1" },
          { label: "3 s", value: 30, color: "#6366f1" },
          { label: "4 s", value: 40, color: "#6366f1" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah batu dijatuhkan dari diam. Berapa kecepatannya setelah 3 s? (g = 10 m/s²)",
        answer: 30,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Karena kecepatan awal nol, v = g·t = 10 × 3 = <strong>30 m/s</strong>. Tiap detik kecepatan bertambah 10 m/s.",
        hint: "Gunakan v = g·t karena mulai dari diam.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah benda dijatuhkan dari ketinggian dan jatuh selama 2 s. Berapa jarak yang ditempuhnya? (g = 10 m/s²)",
        answer: 20,
        tolerance: 0.5,
        suffix: " m",
        solution:
          "Pakai h = ½·g·t² = ½ × 10 × 2² = ½ × 10 × 4 = <strong>20 m</strong>. Inilah ketinggian benda dijatuhkan.",
        hint: "Gunakan h = ½·g·t².",
      },
      {
        type: "classifyExercise",
        prompt: "Tentukan apakah pernyataan tentang jatuh bebas berikut benar atau salah.",
        buckets: ["Benar", "Salah"],
        items: [
          { text: "Tanpa udara, benda berat dan ringan jatuh sama cepat", bucket: "Benar" },
          { text: "Kecepatan awal jatuh bebas adalah nol", bucket: "Benar" },
          { text: "Percepatan jatuh bebas bergantung pada massa benda", bucket: "Salah" },
          { text: "Percepatan jatuh bebas selalu mengarah ke bawah", bucket: "Benar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Eksperimen Bulu dan Palu di Bulan",
        html: "Pada misi Apollo 15, astronaut menjatuhkan <strong>bulu dan palu bersamaan</strong> di permukaan Bulan yang hampir tanpa udara. Keduanya mendarat di saat yang sama, persis seperti ramalan jatuh bebas. Di Bumi, bulu kalah cepat hanya karena hambatan udara, bukan karena beratnya lebih kecil. Eksperimen ini membuktikan inti jatuh bebas: gravitasi memberi percepatan yang sama pada semua benda, terlepas dari massanya. Percepatan gravitasi Bulan memang lebih kecil (sekitar 1,6 m/s²), tetapi tetap sama untuk bulu maupun palu.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah memahami polanya, rumusnya muncul. Jatuh bebas adalah GLBB dengan v₀ = 0 dan a = g: <strong>v = g·t</strong>, <strong>h = ½·g·t²</strong>, dan <strong>v² = 2·g·h</strong>. Massa tidak muncul sama sekali dalam rumus ini, itulah sebabnya semua benda jatuh dengan percepatan yang sama.",
      },
      {
        type: "takeaways",
        items: [
          "Jatuh bebas adalah GLBB dengan kecepatan awal nol dan percepatan g.",
          "Tanpa hambatan udara, semua benda jatuh dengan percepatan yang sama.",
          "Kecepatan saat jatuh: v = g·t; ketinggian jatuh: h = ½·g·t².",
          "Massa benda tidak memengaruhi percepatan maupun waktu jatuhnya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Jatuh bebas adalah GLBB dengan?",
            options: [
              "Kecepatan awal besar dan percepatan nol",
              "Kecepatan awal nol dan percepatan g",
              "Percepatan bergantung massa",
              "Kecepatan tetap",
            ],
            answer: 1,
            explain: "Jatuh bebas: v₀ = 0 dan a = g ke bawah.",
          },
          {
            q: "Tanpa hambatan udara, bola besi dan bola plastik dijatuhkan bersama. Mana yang sampai dulu?",
            options: ["Bola besi", "Bola plastik", "Bersamaan", "Tergantung warna"],
            answer: 2,
            explain: "Percepatan jatuh bebas sama untuk semua benda, jadi sampai bersamaan.",
          },
          {
            q: "Benda jatuh bebas dari diam. Kecepatannya setelah 4 s (g = 10 m/s²)?",
            options: ["14 m/s", "40 m/s", "2,5 m/s", "80 m/s"],
            answer: 1,
            explain: "v = g·t = 10 × 4 = 40 m/s.",
          },
          {
            q: "Benda jatuh bebas selama 3 s. Ketinggian jatuhnya (g = 10 m/s²)?",
            options: ["30 m", "45 m", "90 m", "15 m"],
            answer: 1,
            explain: "h = ½·g·t² = ½ × 10 × 9 = 45 m.",
          },
          {
            q: "Faktor yang TIDAK memengaruhi percepatan jatuh bebas (tanpa udara) adalah?",
            options: ["Percepatan gravitasi", "Lokasi (planet)", "Massa benda", "Kuat medan gravitasi"],
            answer: 2,
            explain: "Massa tidak muncul dalam rumus jatuh bebas, jadi tidak berpengaruh.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gerak-vertikal-ke-atas",
    levelId: "gerak-lurus",
    order: 3,
    title: "Gerak Vertikal ke Atas",
    summary:
      "Lempar benda lurus ke atas dan gravitasi langsung memperlambatnya. Di titik tertinggi kecepatannya nol sesaat, lalu ia jatuh kembali secara simetris.",
    durationMin: 14,
    tags: ["kinematika", "gerak-vertikal", "GLBB", "gravitasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Lempar bola lurus ke atas. Ia melambat, berhenti sejenak di puncak, lalu jatuh kembali ke tanganmu. Anehnya, waktu naik sama persis dengan waktu turun, dan kecepatan saat kembali sama besar dengan kecepatan saat dilempar. Mengapa gerak naik dan turun begitu simetris? Ayo amati dulu sebelum rumusnya muncul.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Naik, Berhenti Sesaat, lalu Turun",
        caption: "Gravitasi memperlambat saat naik dan mempercepat saat turun dengan besar yang sama.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Saat bola naik, gravitasi <strong>memperlambatnya</strong> sebesar 10 m/s tiap detik. Di titik tertinggi, kecepatannya <strong>nol sesaat</strong>, persis sebelum berbalik. Saat turun, gravitasi <strong>mempercepatnya</strong> kembali sebesar 10 m/s tiap detik. Karena perlambatan naik dan percepatan turun sama besar, geraknya simetris: waktu naik = waktu turun, dan laju kembali = laju lempar.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tanda dan titik tertinggi",
        html: "Saat naik, percepatan g berlawanan arah gerak (memperlambat). Di <strong>titik tertinggi kecepatan = 0</strong>. Waktu naik t = v₀ / g, dan tinggi maksimum h = v₀² / (2g). Gerak naik dan turun simetris terhadap titik puncak.",
      },
      {
        type: "widget",
        widget: "SimulatorGLBB",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kecepatan Bola Dilempar ke Atas v₀ = 30 m/s (g = 10 m/s²)",
        unit: "m/s",
        source: "ilustrasi edukatif (tanda + naik, − turun)",
        note: "Kecepatan berkurang 10 m/s tiap detik: 30, 20, 10, 0 di puncak (3 s), lalu negatif saat turun. Perubahan linear adalah ciri GLBB.",
        data: [
          { label: "0 s", value: 30, color: "#8b5cf6" },
          { label: "1 s", value: 20, color: "#8b5cf6" },
          { label: "2 s", value: 10, color: "#8b5cf6" },
          { label: "3 s", value: 0, color: "#8b5cf6" },
          { label: "4 s", value: -10, color: "#8b5cf6" },
          { label: "5 s", value: -20, color: "#8b5cf6" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah bola dilempar ke atas dengan kecepatan 30 m/s (g = 10 m/s²). Berapa waktu untuk mencapai titik tertinggi?",
        answer: 3,
        tolerance: 0.1,
        suffix: " s",
        solution:
          "Di titik tertinggi kecepatan = 0. Dari v = v₀ − g·t, maka 0 = 30 − 10·t, sehingga t = 30 ÷ 10 = <strong>3 s</strong>.",
        hint: "Di puncak v = 0, pakai 0 = v₀ − g·t.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan kecepatan lempar 30 m/s (g = 10 m/s²), berapa ketinggian maksimum yang dicapai bola?",
        answer: 45,
        tolerance: 0.5,
        suffix: " m",
        solution:
          "Pakai h = v₀² / (2g) = 30² ÷ (2 × 10) = 900 ÷ 20 = <strong>45 m</strong>. Bisa juga dari v² = v₀² − 2g·h dengan v = 0 di puncak.",
        hint: "Gunakan h = v₀² / (2g).",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan keadaan bola yang dilempar ke atas dengan ciri kecepatannya.",
        pairs: [
          { left: "Saat baru dilempar", right: "Kecepatan maksimum ke atas" },
          { left: "Di titik tertinggi", right: "Kecepatan nol sesaat" },
          { left: "Saat kembali ke titik lempar", right: "Laju sama dengan saat dilempar" },
          { left: "Waktu naik dibanding waktu turun", right: "Sama besar (simetris)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Lemparan Koin Wasit di Awal Pertandingan",
        html: "Wasit melempar koin lurus ke atas sebelum laga. Koin melambat, berhenti sesaat di puncak, lalu jatuh kembali. Karena <strong>waktu naik sama dengan waktu turun</strong>, wasit punya jeda yang cukup untuk melihat sisi mana yang akan menghadap ke atas. Makin kuat lemparan (v₀ besar), makin tinggi koin naik dan makin lama melayang, sebab tinggi maksimum sebanding dengan kuadrat kecepatan lempar (h = v₀²/2g). Fisika gerak vertikal menjelaskan kenapa lemparan koin yang baik terlihat 'menggantung' lebih lama.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya bermakna. Gerak vertikal ke atas adalah GLBB dengan percepatan g ke bawah: <strong>v = v₀ − g·t</strong>, <strong>h = v₀·t − ½·g·t²</strong>, dan <strong>v² = v₀² − 2·g·h</strong>. Di titik tertinggi v = 0, sehingga <strong>waktu naik = v₀ / g</strong> dan <strong>tinggi maksimum = v₀² / (2g)</strong>. Gerak naik dan turun simetris sempurna.",
      },
      {
        type: "takeaways",
        items: [
          "Gerak vertikal ke atas adalah GLBB dengan percepatan g melawan arah naik.",
          "Di titik tertinggi kecepatan nol; waktu naik = v₀ / g.",
          "Tinggi maksimum = v₀² / (2g), sebanding dengan kuadrat kecepatan lempar.",
          "Waktu naik sama dengan waktu turun, dan laju kembali sama dengan laju lempar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Di titik tertinggi gerak vertikal ke atas, kecepatan benda?",
            options: ["Maksimum", "Nol sesaat", "Sama dengan awal", "Tak terhingga"],
            answer: 1,
            explain: "Kecepatan nol sesaat di puncak sebelum benda berbalik turun.",
          },
          {
            q: "Bola dilempar ke atas 20 m/s (g = 10 m/s²). Waktu mencapai puncak?",
            options: ["1 s", "2 s", "4 s", "20 s"],
            answer: 1,
            explain: "t = v₀ / g = 20 ÷ 10 = 2 s.",
          },
          {
            q: "Pada gerak vertikal ke atas, waktu naik dibanding waktu turun?",
            options: ["Naik lebih lama", "Turun lebih lama", "Sama besar", "Tidak bisa ditentukan"],
            answer: 2,
            explain: "Geraknya simetris, waktu naik sama dengan waktu turun.",
          },
          {
            q: "Bola dilempar ke atas 10 m/s (g = 10 m/s²). Tinggi maksimumnya?",
            options: ["5 m", "10 m", "20 m", "1 m"],
            answer: 0,
            explain: "h = v₀²/(2g) = 100 ÷ 20 = 5 m.",
          },
          {
            q: "Saat bola kembali ke titik lempar, lajunya dibanding saat dilempar?",
            options: ["Lebih besar", "Lebih kecil", "Sama besar", "Nol"],
            answer: 2,
            explain: "Karena gerak simetris, laju kembali sama dengan laju lempar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "glbb-pengereman",
    levelId: "gerak-lurus",
    order: 4,
    title: "GLBB dan Jarak Pengereman",
    summary:
      "Mengerem adalah GLBB dengan perlambatan. Rumus v² = v₀² + 2as menyingkap kejutan penting: jarak berhenti melonjak sebanding dengan kuadrat kecepatan.",
    durationMin: 14,
    tags: ["kinematika", "GLBB", "pengereman", "perlambatan"],
    blocks: [
      {
        type: "paragraph",
        html: "Dua mobil mengerem dengan rem yang sama persis. Yang satu melaju 40 km/jam, yang lain 80 km/jam, hanya dua kali lebih cepat. Tebak, jarak berhentinya berapa kali lipat? Jawaban kebanyakan orang meleset, karena yang berlaku bukan dua kali, melainkan empat kali. Ayo selidiki dulu rahasia di balik angka ini sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Mengerem sebagai GLBB",
        caption: "Pengereman adalah GLBB dengan percepatan negatif; kecepatan turun teratur hingga nol.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Saat mengerem, kecepatan turun <strong>teratur</strong> tiap detik, persis GLBB tetapi dengan percepatan negatif (perlambatan). Yang mengejutkan adalah jaraknya. Karena jarak berhenti memuat <strong>kuadrat kecepatan</strong>, menggandakan kecepatan melipatempatkan jarak berhenti. Itulah mengapa selisih sedikit kecepatan di jalan bisa berarti selisih besar pada titik berhenti.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Rumus tanpa waktu",
        html: "Saat waktu tidak diketahui, gunakan <strong>v² = v₀² + 2·a·s</strong>. Untuk pengereman hingga berhenti, v = 0, sehingga jarak berhenti s = v₀² / (2·|a|). Karena ada v₀², jarak berhenti sebanding dengan kuadrat kecepatan awal.",
      },
      {
        type: "widget",
        widget: "SimulatorGLBB",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Jarak Berhenti pada Perlambatan Tetap 5 m/s²",
        unit: "meter",
        source: "ilustrasi edukatif (s = v₀² / (2a))",
        note: "Menggandakan kecepatan dari 10 ke 20 m/s membuat jarak berhenti melonjak dari 10 m menjadi 40 m, yaitu empat kali lipat.",
        data: [
          { label: "10 m/s", value: 10, color: "#7c3aed" },
          { label: "20 m/s", value: 40, color: "#7c3aed" },
          { label: "30 m/s", value: 90, color: "#7c3aed" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Mobil melaju 20 m/s lalu mengerem dengan perlambatan 5 m/s² hingga berhenti. Berapa jarak pengeremannya?",
        answer: 40,
        tolerance: 0.5,
        suffix: " m",
        solution:
          "Pakai v² = v₀² − 2·a·s dengan v = 0: 0 = 20² − 2 × 5 × s, jadi s = 400 ÷ 10 = <strong>40 m</strong>.",
        hint: "Gunakan s = v₀² / (2a) dengan a = 5 m/s².",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan perlambatan sama (5 m/s²), berapa jarak berhenti jika kecepatan awalnya 10 m/s?",
        answer: 10,
        tolerance: 0.5,
        suffix: " m",
        solution:
          "s = v₀² / (2a) = 10² ÷ (2 × 5) = 100 ÷ 10 = <strong>10 m</strong>. Bandingkan: kecepatan setengahnya menghasilkan jarak seperempatnya (40 m menjadi 10 m).",
        hint: "Gunakan s = v₀² / (2a) dengan v₀ = 10 m/s.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap peristiwa sebagai percepatan positif (dipercepat) atau negatif (diperlambat).",
        buckets: ["Dipercepat (a positif)", "Diperlambat (a negatif)"],
        items: [
          { text: "Mobil menginjak gas dari lampu merah", bucket: "Dipercepat (a positif)" },
          { text: "Mobil mengerem mendekati lampu merah", bucket: "Diperlambat (a negatif)" },
          { text: "Sepeda meluncur menuruni bukit", bucket: "Dipercepat (a positif)" },
          { text: "Kereta melambat memasuki stasiun", bucket: "Diperlambat (a negatif)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Batas Kecepatan Diturunkan di Zona Sekolah",
        html: "Di depan sekolah, batas kecepatan sering dipangkas dari 50 menjadi 25 km/jam. Alasannya langsung dari GLBB: karena jarak berhenti sebanding dengan <strong>kuadrat kecepatan</strong>, memotong kecepatan menjadi setengah membuat jarak berhenti menyusut menjadi <strong>seperempatnya</strong>. Mobil yang melaju lebih pelan dapat berhenti jauh lebih cepat ketika seorang anak tiba-tiba menyeberang. Aturan lalu lintas ini bukan sekadar imbauan, melainkan penerapan langsung rumus v² = v₀² + 2as untuk menyelamatkan nyawa.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya berbicara. Saat waktu tidak diketahui, gunakan <strong>v² = v₀² + 2·a·s</strong>. Untuk pengereman hingga berhenti (v = 0): <strong>s = v₀² / (2·|a|)</strong>. Karena v₀ dikuadratkan, menggandakan kecepatan awal melipatempatkan jarak berhenti, dan melipattigakan kecepatan membuat jarak berhenti sembilan kali lipat.",
      },
      {
        type: "takeaways",
        items: [
          "Pengereman adalah GLBB dengan percepatan negatif (perlambatan).",
          "Rumus tanpa waktu: v² = v₀² + 2·a·s.",
          "Jarak berhenti s = v₀² / (2·|a|), sebanding dengan kuadrat kecepatan awal.",
          "Menggandakan kecepatan melipatempatkan jarak pengereman.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus GLBB yang tidak memuat waktu adalah?",
            options: ["v = v₀ + at", "s = v₀t + ½at²", "v² = v₀² + 2as", "s = v·t"],
            answer: 2,
            explain: "v² = v₀² + 2as menghubungkan kecepatan dan jarak tanpa waktu.",
          },
          {
            q: "Pengereman hingga berhenti adalah GLBB dengan?",
            options: ["Percepatan positif", "Percepatan negatif (perlambatan)", "Percepatan nol", "Kecepatan tetap"],
            answer: 1,
            explain: "Kecepatan berkurang, jadi percepatannya negatif.",
          },
          {
            q: "Kecepatan digandakan, jarak berhenti menjadi?",
            options: ["Dua kali", "Tiga kali", "Empat kali", "Tetap"],
            answer: 2,
            explain: "Jarak berhenti sebanding v₀², jadi 2² = 4 kali lipat.",
          },
          {
            q: "Mobil 30 m/s mengerem dengan perlambatan 5 m/s². Jarak berhentinya?",
            options: ["30 m", "60 m", "90 m", "180 m"],
            answer: 2,
            explain: "s = v₀²/(2a) = 900 ÷ 10 = 90 m.",
          },
          {
            q: "Mengapa batas kecepatan diturunkan di zona sekolah?",
            options: [
              "Agar mesin tidak panas",
              "Agar jarak berhenti jauh lebih pendek saat darurat",
              "Agar bahan bakar irit",
              "Agar ban awet",
            ],
            answer: 1,
            explain: "Jarak berhenti sebanding kuadrat kecepatan, jadi melambat memendekkannya drastis.",
          },
        ],
      },
    ],
  },
];
