import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "mata-dan-cacat-mata",
    levelId: "alat-optik",
    order: 1,
    title: "Mata dan Cacat Mata",
    summary:
      "Sebelum menghitung kuat lensa kacamata, kita pahami dulu bagaimana mata kita bekerja seperti kamera hidup, dan mengapa ada yang tak bisa melihat papan tulis sementara yang lain tak bisa membaca dari dekat.",
    durationMin: 15,
    tags: ["optika", "alat-optik", "mata", "kacamata", "akomodasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Mata yang sedang membaca kalimat ini sebenarnya adalah <strong>kamera hidup</strong>: lensanya memusatkan cahaya ke retina, persis seperti lensa kamera ke sensor. Tetapi mata punya batas, ada yang tak bisa melihat papan tulis dari jauh, ada yang tak bisa membaca dari dekat. Lalu manusia menciptakan kacamata untuk menembus batas itu. Ayo telusuri dulu cara kerja mata sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "PembiasanCahaya",
        title: "Video: Lensa Mata Membentuk Bayangan",
        caption: "Lensa mata membiaskan cahaya agar jatuh tepat di retina, sama seperti lensa kamera.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pegang jarimu sejauh lengan, lalu dekatkan pelan ke hidung sambil tetap fokus. Pada satu titik, jarimu mulai kabur, itulah <strong>titik dekat</strong> matamu (sekitar 25 cm untuk mata normal). Otot di matamu tadi bekerja mengubah ketebalan lensa agar tetap fokus, proses yang disebut <strong>akomodasi</strong>. Rasakan dulu kemampuan matamu sendiri sebelum bicara rumus.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua cacat mata yang umum",
        html: "<strong>Rabun jauh (miopi)</strong>: bayangan benda jauh jatuh di depan retina, dikoreksi dengan lensa <strong>cekung (negatif)</strong>. <strong>Rabun dekat (hipermetropi)</strong>: bayangan benda dekat jatuh di belakang retina, dikoreksi dengan lensa <strong>cembung (positif)</strong>. Mata normal punya titik dekat 25 cm dan titik jauh tak terhingga.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kuat Lensa Kacamata Miopi untuk Tiap Titik Jauh",
        unit: "kuat lensa P (dioptri)",
        source: "perhitungan P = −1 / (titik jauh dalam meter)",
        note: "Angka nyata. Makin dekat titik jauh penderita (makin parah rabunnya), makin besar nilai minus dioptri yang diperlukan. Inilah angka pada resep kacamata.",
        data: [
          { label: "titik jauh 2 m", value: -0.5, color: "#34d399" },
          { label: "titik jauh 1 m", value: -1, color: "#22d3ee" },
          { label: "titik jauh 0,5 m", value: -2, color: "#38bdf8" },
          { label: "titik jauh 0,25 m", value: -4, color: "#818cf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Seorang penderita miopi hanya bisa melihat jelas sampai jarak 2 m (titik jauhnya). Berapa kuat lensa kacamata yang dibutuhkan agar bisa melihat benda jauh? (P = −1 / titik jauh, dalam meter)",
        answer: -0.5,
        tolerance: 0.05,
        suffix: " dioptri",
        solution:
          "P = −1 / 2 = <strong>−0,5 dioptri</strong>. Lensa cekung ini membuat benda jauh tak terhingga seakan berada di titik jauh mata (2 m), sehingga bayangannya jatuh tepat di retina.",
        hint: "Bagi −1 dengan titik jauh dalam meter.",
      },
      {
        type: "calcExercise",
        prompt:
          "Penderita hipermetropi memiliki titik dekat 50 cm dan ingin membaca pada jarak normal 25 cm. Berapa kuat lensa kacamatanya? (P = 1/0,25 − 1/0,50)",
        answer: 2,
        tolerance: 0.1,
        suffix: " dioptri",
        solution:
          "P = 1/0,25 − 1/0,50 = 4 − 2 = <strong>+2 dioptri</strong>. Lensa cembung positif ini memajukan bayangan benda dekat agar jatuh di retina, sehingga ia bisa membaca pada 25 cm.",
        hint: "P = 1/(jarak baca) − 1/(titik dekat), keduanya dalam meter.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap kondisi mata dengan jenis lensa koreksinya.",
        buckets: ["Lensa cekung (negatif)", "Lensa cembung (positif)"],
        items: [
          { text: "Rabun jauh (miopi): tak bisa lihat papan tulis", bucket: "Lensa cekung (negatif)" },
          { text: "Bayangan jatuh di depan retina", bucket: "Lensa cekung (negatif)" },
          { text: "Rabun dekat (hipermetropi): tak bisa baca dekat", bucket: "Lensa cembung (positif)" },
          { text: "Bayangan jatuh di belakang retina", bucket: "Lensa cembung (positif)" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan bagian mata dan istilahnya dengan fungsinya.",
        pairs: [
          { left: "Retina", right: "Layar penerima bayangan, seperti sensor kamera" },
          { left: "Lensa mata", right: "Memfokuskan cahaya, ketebalannya bisa berubah" },
          { left: "Akomodasi", right: "Penyesuaian ketebalan lensa agar tetap fokus" },
          { left: "Titik dekat", right: "Jarak terdekat yang masih bisa dilihat jelas (≈25 cm)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Resep Kacamata Minus dan Plus",
        html: "Saat kamu memeriksakan mata, dokter menuliskan angka seperti −2,00 atau +1,50. Angka itu adalah <strong>kuat lensa dalam dioptri</strong> (P = 1/f). Tanda minus berarti lensa <strong>cekung</strong> untuk rabun jauh: ia memundurkan bayangan benda jauh ke retina. Tanda plus berarti lensa <strong>cembung</strong> untuk rabun dekat: ia memajukan bayangan benda dekat ke retina. Makin besar angkanya, makin pendek jarak fokus lensa dan makin kuat koreksinya. Semua bertumpu pada persamaan lensa 1/f = 1/s + 1/s' yang sudah kamu kenal.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. Kuat lensa kacamata <strong>P = 1/f</strong> (dioptri, f dalam meter). Untuk <strong>miopi</strong>: P = −1/(titik jauh), lensa cekung. Untuk <strong>hipermetropi</strong>: P = 1/(jarak baca) − 1/(titik dekat), lensa cembung. Semua memakai persamaan lensa 1/f = 1/s + 1/s'. Rumus hanya merangkai pola mata yang sudah kamu amati.",
      },
      {
        type: "takeaways",
        items: [
          "Mata bekerja seperti kamera: lensa memfokuskan cahaya ke retina, dengan akomodasi mengubah ketebalan lensa.",
          "Rabun jauh (miopi) dikoreksi lensa cekung (negatif); rabun dekat (hipermetropi) lensa cembung (positif).",
          "Kuat lensa P = 1/f (dioptri); miopi P = −1/(titik jauh).",
          "Mata normal: titik dekat 25 cm, titik jauh tak terhingga.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bagian mata yang berperan seperti sensor kamera adalah?",
            options: ["Kornea", "Lensa", "Retina", "Pupil"],
            answer: 2,
            explain: "Retina menerima bayangan yang difokuskan lensa mata, seperti sensor pada kamera.",
          },
          {
            q: "Proses mata mengubah ketebalan lensa agar tetap fokus disebut?",
            options: ["Dispersi", "Akomodasi", "Difraksi", "Polarisasi"],
            answer: 1,
            explain: "Akomodasi adalah penyesuaian ketebalan lensa mata untuk memfokuskan benda di berbagai jarak.",
          },
          {
            q: "Penderita rabun jauh (miopi) dibantu dengan lensa?",
            options: ["Cembung (positif)", "Cekung (negatif)", "Datar", "Silinder saja"],
            answer: 1,
            explain: "Lensa cekung memundurkan bayangan benda jauh agar jatuh tepat di retina.",
          },
          {
            q: "Miopi dengan titik jauh 2 m membutuhkan kuat lensa?",
            options: ["−0,5 dioptri", "−2 dioptri", "+0,5 dioptri", "+2 dioptri"],
            answer: 0,
            explain: "P = −1/2 = −0,5 dioptri (lensa cekung).",
          },
          {
            q: "Rabun dekat (hipermetropi) terjadi karena bayangan benda dekat jatuh?",
            options: [
              "Tepat di retina",
              "Di depan retina",
              "Di belakang retina",
              "Di luar mata",
            ],
            answer: 2,
            explain: "Pada hipermetropi bayangan jatuh di belakang retina, dikoreksi lensa cembung.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "lup",
    levelId: "alat-optik",
    order: 2,
    title: "Lup (Kaca Pembesar)",
    summary:
      "Sebelum memakai rumus perbesaran, kita pahami dulu mengapa mendekatkan benda saja tidak cukup, dan bagaimana selembar lensa membuat tukang jam melihat roda gigi sekecil pasir.",
    durationMin: 13,
    tags: ["optika", "alat-optik", "lup", "perbesaran"],
    blocks: [
      {
        type: "paragraph",
        html: "Untuk melihat detail kecil, kita reflek mendekatkannya ke mata. Tetapi ada batas: lebih dekat dari <strong>titik dekat</strong> (sekitar 25 cm), benda justru jadi kabur karena mata tak sanggup berakomodasi lebih. Di sinilah <strong>lup</strong> menolong: lensa cembung sederhana yang memungkinkan benda didekatkan jauh melewati titik dekat tanpa kabur, sehingga tampak jauh lebih besar. Ayo amati dulu cara kerjanya sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "PembiasanCahaya",
        title: "Video: Lensa Cembung Memperbesar Benda Dekat",
        caption: "Benda di dalam fokus lensa cembung menghasilkan bayangan maya tegak yang diperbesar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pegang kaca pembesar dekat tulisan kecil, lalu atur jaraknya sampai huruf tampak besar, tegak, dan jelas. Perhatikan: huruf harus berada <strong>di dalam jarak fokus</strong> lensa agar bayangannya maya dan diperbesar. Geser sedikit melewati fokus, dan huruf langsung membalik serta kabur. Rasakan dulu rentang fokus yang pas, jangan buru-buru cari rumus.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua cara memakai lup",
        html: "Lup dipakai dengan dua cara. <strong>Mata berakomodasi maksimum</strong>: bayangan diletakkan di titik dekat (25 cm), mata sedikit tegang tetapi perbesaran lebih besar. <strong>Mata tak berakomodasi</strong>: benda tepat di titik fokus, bayangan di tak terhingga, mata santai (nyaman untuk pemakaian lama) tetapi perbesaran sedikit lebih kecil.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perbesaran Lup (Akomodasi Maksimum) untuk Tiap Jarak Fokus",
        unit: "perbesaran (kali)",
        source: "perhitungan M = (25/f) + 1 dengan titik dekat 25 cm",
        note: "Angka nyata dari rumus lup. Makin pendek jarak fokus lensa, makin besar perbesarannya. Itu sebabnya lup perhiasan dibuat berfokus sangat pendek.",
        data: [
          { label: "f = 10 cm", value: 3.5, color: "#34d399" },
          { label: "f = 5 cm", value: 6, color: "#22d3ee" },
          { label: "f = 4 cm", value: 7.25, color: "#38bdf8" },
          { label: "f = 2,5 cm", value: 11, color: "#818cf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah lup berjarak fokus 5 cm dipakai dengan mata berakomodasi maksimum (titik dekat 25 cm). Berapa perbesarannya? (M = (25/f) + 1)",
        answer: 6,
        tolerance: 0.2,
        suffix: "×",
        solution:
          "M = (25/5) + 1 = 5 + 1 = <strong>6×</strong>. Benda tampak enam kali lebih besar karena lup memungkinkannya didekatkan jauh melewati titik dekat mata.",
        hint: "Hitung 25 dibagi f dulu, lalu tambah 1.",
      },
      {
        type: "calcExercise",
        prompt:
          "Lup yang sama (f = 5 cm) dipakai dengan mata tak berakomodasi (santai). Berapa perbesarannya sekarang? (M = 25/f)",
        answer: 5,
        tolerance: 0.2,
        suffix: "×",
        solution:
          "M = 25/5 = <strong>5×</strong>. Sedikit lebih kecil daripada akomodasi maksimum (6×), tetapi mata lebih nyaman karena tidak tegang, cocok untuk pengamatan lama.",
        hint: "Tanpa akomodasi cukup 25 dibagi f, tanpa menambah 1.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan ke cara pemakaian lup yang sesuai.",
        buckets: ["Akomodasi maksimum", "Tak berakomodasi"],
        items: [
          { text: "Bayangan diletakkan di titik dekat (25 cm)", bucket: "Akomodasi maksimum" },
          { text: "Perbesaran M = (25/f) + 1", bucket: "Akomodasi maksimum" },
          { text: "Benda tepat di titik fokus lensa", bucket: "Tak berakomodasi" },
          { text: "Mata santai, nyaman untuk pemakaian lama", bucket: "Tak berakomodasi" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Lup Tukang Jam dan Juri Perhiasan",
        html: "Tukang reparasi jam menjepit <strong>lup</strong> kecil berfokus pendek di matanya untuk melihat roda gigi sehalus butir pasir. Juri perhiasan memakai loupe 10× untuk memeriksa cacat dan kemurnian intan. Keduanya memilih lensa berfokus sangat pendek karena perbesaran lup berbanding terbalik dengan jarak fokus: makin pendek f, makin besar M. Filatelis (kolektor perangko) dan ahli forensik memakai prinsip yang sama untuk membaca detail mikroskopis. Semua hanyalah satu lensa cembung yang dipakai dengan benda di dalam fokusnya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum perbesaran lup. <strong>Mata tak berakomodasi</strong>: <strong>M = 25/f</strong>. <strong>Mata berakomodasi maksimum</strong>: <strong>M = (25/f) + 1</strong>, dengan 25 cm titik dekat mata normal dan f jarak fokus lup dalam cm. Keduanya bertumpu pada persamaan lensa cembung yang sudah kamu kenal. Rumus hanya merangkum pola yang kamu lihat saat menyetel kaca pembesar.",
      },
      {
        type: "takeaways",
        items: [
          "Lup adalah satu lensa cembung; benda diletakkan di dalam fokus agar bayangan maya tegak diperbesar.",
          "Perbesaran tak berakomodasi M = 25/f; akomodasi maksimum M = (25/f) + 1.",
          "Makin pendek jarak fokus, makin besar perbesaran lup.",
          "Akomodasi maksimum memberi perbesaran sedikit lebih besar tetapi mata lebih tegang.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Lup pada dasarnya adalah?",
            options: ["Lensa cekung", "Satu lensa cembung", "Dua lensa cembung", "Cermin cekung"],
            answer: 1,
            explain: "Lup adalah sebuah lensa cembung tunggal yang memperbesar benda dekat.",
          },
          {
            q: "Agar lup memperbesar, benda harus diletakkan?",
            options: [
              "Di luar 2f",
              "Tepat di 2f",
              "Di dalam jarak fokus (lebih dekat dari f)",
              "Sangat jauh",
            ],
            answer: 2,
            explain: "Benda di dalam fokus memberi bayangan maya, tegak, dan diperbesar.",
          },
          {
            q: "Perbesaran lup untuk mata berakomodasi maksimum adalah?",
            options: ["M = 25/f", "M = (25/f) + 1", "M = f/25", "M = 25·f"],
            answer: 1,
            explain: "Akomodasi maksimum: M = (25/f) + 1, dengan titik dekat 25 cm.",
          },
          {
            q: "Lup f = 5 cm, mata berakomodasi maksimum. Perbesarannya?",
            options: ["3×", "5×", "6×", "10×"],
            answer: 2,
            explain: "M = (25/5) + 1 = 5 + 1 = 6×.",
          },
          {
            q: "Mengapa lup perhiasan dibuat berfokus sangat pendek?",
            options: [
              "Agar lebih murah",
              "Karena perbesaran makin besar saat jarak fokus makin pendek",
              "Agar lebih ringan",
              "Agar bayangan terbalik",
            ],
            answer: 1,
            explain: "Perbesaran berbanding terbalik dengan f, jadi f pendek memberi M besar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "mikroskop",
    levelId: "alat-optik",
    order: 3,
    title: "Mikroskop",
    summary:
      "Sebelum memakai rumus perbesaran total, kita pahami dulu mengapa satu lensa saja tak cukup untuk melihat sel, dan bagaimana dua lensa bekerja sama membuka dunia mikroskopis.",
    durationMin: 14,
    tags: ["optika", "alat-optik", "mikroskop", "perbesaran"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah lup mungkin memperbesar 10 kali, tetapi sel darah atau bakteri butuh ratusan kali. Mendekatkan lup lebih jauh tak menolong, ada batasnya. Solusinya cerdik: <strong>susun dua lensa cembung</strong> sehingga lensa kedua memperbesar bayangan yang sudah diperbesar lensa pertama. Itulah <strong>mikroskop</strong>, yang membuka dunia sel, kuman, dan kristal yang tak kasat mata. Ayo telusuri dulu cara kerjanya sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "PembiasanCahaya",
        title: "Video: Dua Lensa Memperbesar Bertingkat",
        caption: "Lensa objektif membentuk bayangan nyata diperbesar, lalu okuler memperbesarnya lagi seperti lup.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pegang dua kaca pembesar sejajar, satu di atas yang lain, lalu lihat tulisan kecil melalui keduanya. Atur jaraknya pelan-pelan sampai tulisan tampak <strong>jauh lebih besar</strong> daripada memakai satu lup saja. Lensa bawah (objektif) membentuk gambar di antara keduanya, dan lensa atas (okuler) memperbesar gambar itu lagi. Rasakan dulu efek bertingkatnya, jangan buru-buru cari rumus.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Objektif dan okuler",
        html: "Mikroskop punya dua lensa cembung. <strong>Lensa objektif</strong> (dekat benda) berfokus sangat pendek dan membentuk bayangan nyata yang sudah diperbesar. <strong>Lensa okuler</strong> (dekat mata) bertindak seperti lup, memperbesar bayangan itu sekali lagi. Karena perbesaran bertingkat, total perbesarannya adalah hasil kali keduanya.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perbesaran Total Mikroskop (Objektif 10×) dengan Berbagai Okuler",
        unit: "perbesaran total (kali)",
        source: "perhitungan M_total = M_objektif × M_okuler",
        note: "Angka nyata. Dengan objektif tetap 10×, mengganti okuler langsung melipatkan perbesaran total. Itu sebabnya mikroskop punya beberapa okuler yang bisa ditukar.",
        data: [
          { label: "okuler 4×", value: 40, color: "#34d399" },
          { label: "okuler 5×", value: 50, color: "#22d3ee" },
          { label: "okuler 10×", value: 100, color: "#38bdf8" },
          { label: "okuler 40×", value: 400, color: "#818cf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah mikroskop memakai lensa objektif dengan perbesaran 10× dan okuler 10×. Berapa perbesaran total bayangannya? (M_total = M_objektif × M_okuler)",
        answer: 100,
        tolerance: 1,
        suffix: "×",
        solution:
          "M_total = 10 × 10 = <strong>100×</strong>. Benda tampak seratus kali lebih besar karena bayangan diperbesar dua kali bertingkat, oleh objektif lalu oleh okuler.",
        hint: "Kalikan perbesaran objektif dengan perbesaran okuler.",
      },
      {
        type: "calcExercise",
        prompt:
          "Mikroskop dengan objektif 40× dipasangi okuler 10×. Berapa perbesaran totalnya?",
        answer: 400,
        tolerance: 1,
        suffix: "×",
        solution:
          "M_total = 40 × 10 = <strong>400×</strong>. Objektif berfokus pendek memberi perbesaran besar, lalu okuler melipatkannya sepuluh kali lagi.",
        hint: "Sama seperti soal sebelumnya: kalikan kedua perbesaran.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap ciri ke lensa mikroskop yang sesuai.",
        buckets: ["Lensa objektif", "Lensa okuler"],
        items: [
          { text: "Berada dekat dengan benda/preparat", bucket: "Lensa objektif" },
          { text: "Membentuk bayangan nyata yang diperbesar", bucket: "Lensa objektif" },
          { text: "Berada dekat dengan mata", bucket: "Lensa okuler" },
          { text: "Bertindak seperti lup memperbesar bayangan", bucket: "Lensa okuler" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Leeuwenhoek Menemukan Dunia Renik",
        html: "Pada akhir 1600-an, Antonie van Leeuwenhoek mengasah lensa-lensa mungil dan menyusun mikroskop yang sanggup memperbesar ratusan kali. Lewat alat itu, untuk pertama kalinya manusia melihat <strong>bakteri</strong>, sel darah, dan makhluk renik di setetes air kolam, yang ia sebut 'animalcules'. Penemuan ini melahirkan mikrobiologi dan akhirnya teori kuman penyakit. Mikroskop modern memakai prinsip yang sama, dua lensa cembung yang perbesarannya berlipat: M_total = M_objektif × M_okuler. Hanya dengan menukar okuler, satu mikroskop bisa berpindah dari 40× ke 400×.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. Perbesaran total mikroskop adalah <strong>M_total = M_objektif × M_okuler</strong>. Bayangan objektif (nyata, diperbesar, terbalik) menjadi 'benda' bagi okuler, yang lalu memperbesarnya lagi seperti lup. Keduanya lensa cembung dan bertumpu pada persamaan 1/f = 1/s + 1/s'. Rumus hanya merangkum efek bertingkat yang sudah kamu lihat dengan dua kaca pembesar.",
      },
      {
        type: "takeaways",
        items: [
          "Mikroskop memakai dua lensa cembung: objektif (dekat benda) dan okuler (dekat mata).",
          "Objektif membentuk bayangan nyata diperbesar; okuler memperbesarnya lagi seperti lup.",
          "Perbesaran total M_total = M_objektif × M_okuler.",
          "Menukar okuler langsung mengubah perbesaran total tanpa mengganti seluruh alat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mikroskop tersusun dari?",
            options: [
              "Satu lensa cembung",
              "Dua lensa cembung (objektif dan okuler)",
              "Satu lensa cekung",
              "Sebuah cermin cekung",
            ],
            answer: 1,
            explain: "Mikroskop memakai dua lensa cembung yang perbesarannya berlipat.",
          },
          {
            q: "Lensa yang berada dekat benda/preparat disebut?",
            options: ["Okuler", "Objektif", "Kondensor", "Difraktor"],
            answer: 1,
            explain: "Lensa objektif berada dekat benda dan membentuk bayangan nyata diperbesar.",
          },
          {
            q: "Perbesaran total mikroskop dihitung dengan?",
            options: [
              "M_objektif + M_okuler",
              "M_objektif × M_okuler",
              "M_objektif − M_okuler",
              "M_objektif / M_okuler",
            ],
            answer: 1,
            explain: "Karena perbesaran bertingkat, totalnya adalah hasil kali keduanya.",
          },
          {
            q: "Objektif 40× dan okuler 10× memberi perbesaran total?",
            options: ["50×", "100×", "400×", "4×"],
            answer: 2,
            explain: "M_total = 40 × 10 = 400×.",
          },
          {
            q: "Lensa okuler pada mikroskop berfungsi seperti?",
            options: ["Cermin datar", "Lup yang memperbesar bayangan objektif", "Lensa cekung", "Prisma"],
            answer: 1,
            explain: "Okuler bertindak seperti lup, memperbesar bayangan yang dibentuk objektif.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "teleskop-kamera",
    levelId: "alat-optik",
    order: 4,
    title: "Teleskop dan Kamera",
    summary:
      "Sebelum memakai rumus perbesaran, kita kagumi dulu bagaimana dua lensa membawa bulan ke depan mata Galileo, dan bagaimana kamera membekukan cahaya jadi gambar.",
    durationMin: 15,
    tags: ["optika", "alat-optik", "teleskop", "kamera"],
    blocks: [
      {
        type: "paragraph",
        html: "Mikroskop mendekatkan yang sangat kecil; <strong>teleskop</strong> mendekatkan yang sangat jauh. Dengan dua lensa dalam tabung, Galileo membawa bulan, kawah, dan bulan-bulan Jupiter ke depan matanya pada 1609. Di sisi lain, <strong>kamera</strong> melakukan kebalikan mata: ia membekukan cahaya jadi gambar yang bisa disimpan. Keduanya hanyalah penerapan lensa cembung yang sudah kamu kenal. Ayo telusuri dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "PembiasanCahaya",
        title: "Video: Dua Lensa Mendekatkan Benda Jauh",
        caption: "Objektif fokus panjang menangkap benda jauh, okuler fokus pendek memperbesar sudut pandangnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Susun dua kaca pembesar segaris menghadap jendela: lensa berfokus panjang di depan (objektif), lensa berfokus pendek di belakang (okuler) dekat mata. Geser jaraknya sampai pemandangan jauh tampak <strong>besar tetapi terbalik</strong>. Itulah teleskop sederhana. Perhatikan: makin pendek fokus okuler, makin besar perbesarannya. Amati dulu polanya, rumus menyusul.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengganti okuler, bukan teleskop",
        html: "Teleskop bias punya <strong>objektif</strong> berfokus panjang (menangkap benda jauh) dan <strong>okuler</strong> berfokus pendek (memperbesar sudut pandang). Perbesarannya hanya bergantung pada perbandingan kedua jarak fokus. Itu sebabnya astronom mengganti okuler untuk mengubah perbesaran, bukan membeli teleskop baru. Kamera berbeda: ia satu lensa cembung yang membentuk bayangan <strong>nyata, terbalik, diperkecil</strong> di sensor.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Perbesaran Teleskop (Objektif f = 120 cm) dengan Berbagai Okuler",
        unit: "perbesaran (kali)",
        source: "perhitungan M = f_objektif / f_okuler",
        note: "Angka nyata dari rumus teleskop. Makin pendek fokus okuler, makin besar perbesaran. Itu sebabnya astronom cukup mengganti okuler, bukan teleskopnya.",
        data: [
          { label: "okuler 30 mm", value: 40, color: "#34d399" },
          { label: "okuler 24 mm", value: 50, color: "#22d3ee" },
          { label: "okuler 12 mm", value: 100, color: "#38bdf8" },
          { label: "okuler 6 mm", value: 200, color: "#818cf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah teleskop memakai lensa objektif berjarak fokus 120 cm dan okuler 6 cm untuk mengamati langit jauh. Berapa perbesarannya? (M = f_objektif / f_okuler)",
        answer: 20,
        tolerance: 0.5,
        suffix: "×",
        solution:
          "M = f_objektif / f_okuler = 120 / 6 = <strong>20×</strong>. Objek seperti bulan tampak 20 kali lebih besar sudutnya dibanding dengan mata telanjang.",
        hint: "Bagi jarak fokus objektif dengan jarak fokus okuler.",
      },
      {
        type: "calcExercise",
        prompt:
          "Teleskop lain berobjektif 150 cm dan okuler 5 cm. Berapa perbesarannya?",
        answer: 30,
        tolerance: 0.5,
        suffix: "×",
        solution:
          "M = 150 / 5 = <strong>30×</strong>. Karena perbesaran hanya bergantung perbandingan fokus, memendekkan okuler atau memanjangkan objektif sama-sama menaikkan perbesaran.",
        hint: "Bagi 150 dengan 5.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap ciri ke alat optik yang sesuai.",
        buckets: ["Teleskop", "Kamera"],
        items: [
          { text: "Dua lensa: objektif fokus panjang dan okuler fokus pendek", bucket: "Teleskop" },
          { text: "Perbesaran M = f_objektif / f_okuler", bucket: "Teleskop" },
          { text: "Satu lensa cembung membentuk bayangan di sensor", bucket: "Kamera" },
          { text: "Bayangan nyata, terbalik, diperkecil yang direkam", bucket: "Kamera" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Dari Galileo ke Teleskop Antariksa",
        html: "Teleskop Galileo (1609) hanya dua lensa dalam tabung dengan perbesaran sekitar 20 kali, namun cukup untuk menyingkap kawah bulan dan empat bulan Jupiter, bukti yang menggoyang pandangan bahwa segalanya mengelilingi Bumi. Teleskop modern seperti Hubble dan James Webb memakai <strong>cermin cekung</strong> raksasa sebagai objektif untuk mengumpulkan cahaya redup dari galaksi miliaran tahun cahaya jauhnya. Sementara itu kamera di sakumu adalah keturunan lain dari lensa cembung yang sama: ia membentuk bayangan nyata terbalik di sensor, lalu menyimpannya sebagai foto. Satu prinsip lensa, dua arah penjelajahan: ke langit jauh dan ke momen yang dibekukan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. <strong>Teleskop</strong> (mata tak berakomodasi): <strong>M = f_objektif / f_okuler</strong>, jadi objektif fokus panjang dan okuler fokus pendek memberi perbesaran besar. <strong>Kamera</strong>: lensa cembung membentuk bayangan nyata, terbalik, diperkecil di sensor, mengikuti 1/f = 1/s + 1/s'. Rumus hanya merangkum pola dua lensa yang sudah kamu susun sendiri.",
      },
      {
        type: "takeaways",
        items: [
          "Teleskop bias memakai objektif fokus panjang dan okuler fokus pendek.",
          "Perbesaran teleskop M = f_objektif / f_okuler; mengganti okuler mengubah perbesaran.",
          "Teleskop besar (Hubble, JWST) memakai cermin cekung sebagai objektif pengumpul cahaya.",
          "Kamera adalah lensa cembung yang membentuk bayangan nyata, terbalik, diperkecil di sensor.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Perbesaran teleskop dihitung dengan?",
            options: [
              "f_okuler / f_objektif",
              "f_objektif / f_okuler",
              "f_objektif × f_okuler",
              "f_objektif + f_okuler",
            ],
            answer: 1,
            explain: "Perbesaran teleskop = jarak fokus objektif dibagi jarak fokus okuler.",
          },
          {
            q: "Teleskop objektif 120 cm dan okuler 6 cm memberi perbesaran?",
            options: ["6×", "20×", "120×", "720×"],
            answer: 1,
            explain: "M = 120 / 6 = 20×.",
          },
          {
            q: "Mengapa astronom cukup mengganti okuler untuk mengubah perbesaran?",
            options: [
              "Karena objektif tidak penting",
              "Karena perbesaran hanya bergantung perbandingan fokus objektif dan okuler",
              "Karena okuler lebih murah",
              "Karena okuler memantulkan cahaya",
            ],
            answer: 1,
            explain: "M = f_objektif/f_okuler, jadi mengganti okuler langsung mengubah perbesaran.",
          },
          {
            q: "Bayangan yang dibentuk lensa kamera di sensor bersifat?",
            options: [
              "Maya, tegak, diperbesar",
              "Nyata, terbalik, diperkecil",
              "Maya, terbalik, sama besar",
              "Nyata, tegak, diperbesar",
            ],
            answer: 1,
            explain: "Benda jauh menghasilkan bayangan nyata, terbalik, dan diperkecil di sensor.",
          },
          {
            q: "Teleskop antariksa Hubble dan James Webb memakai objektif berupa?",
            options: [
              "Lensa cekung besar",
              "Cermin cekung raksasa pengumpul cahaya",
              "Cermin datar",
              "Prisma",
            ],
            answer: 1,
            explain: "Teleskop pemantul memakai cermin cekung besar untuk mengumpulkan cahaya redup dari benda jauh.",
          },
        ],
      },
    ],
  },
];
