import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "hakikat-cahaya",
    levelId: "cahaya-pemantulan",
    order: 1,
    title: "Hakikat Cahaya",
    summary:
      "Sebelum berhitung dengan kecepatan cahaya, kita amati dulu mengapa kita bisa melihat benda dan mengapa cahaya membentuk bayang-bayang setajam pisau.",
    durationMin: 12,
    tags: ["optika", "cahaya", "perambatan", "gelombang"],
    blocks: [
      {
        type: "paragraph",
        html: "Matikan lampu di malam hari dan ruangan jadi gelap total: tidak ada benda yang bisa kamu lihat, padahal benda-benda itu tetap ada. Nyalakan lampu, dan seketika semuanya muncul. Kita melihat benda karena <strong>cahaya</strong> dari sumber memantul ke benda lalu masuk ke mata. Tetapi apa sebenarnya cahaya itu, dan mengapa ia membuat bayang-bayang yang tepinya tegas? Ayo kita amati dulu sebelum bertemu angka.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Cahaya sebagai Gelombang Elektromagnetik",
        caption: "Cahaya adalah gelombang elektromagnetik yang merambat lurus tanpa perlu medium.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Di kamar gelap, nyalakan senter ponsel dan letakkan tanganmu di antara senter dan dinding. Bayang-bayang tanganmu jatuh tegas di dinding, dengan tepi yang rapi. Geser tangan mendekati dinding, bayangan mengecil dan makin tajam. Cahaya jelas merambat <strong>lurus</strong>, sebab kalau ia bisa membelok sembarangan, tidak akan ada bayangan setajam itu. Rasakan polanya dulu, jangan buru-buru cari rumusnya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Cahaya itu gelombang sekaligus cepat luar biasa",
        html: "<strong>Cahaya</strong> adalah gelombang elektromagnetik. Di ruang hampa ia melaju dengan kelajuan c ≈ 3 × 10⁸ m/s (300.000 km/detik), tercepat di alam semesta. Di dalam medium seperti air atau kaca, cahaya melambat menjadi v = c/n, dengan n indeks bias medium.",
      },
      {
        type: "widget",
        widget: "SimulatorGelombang",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kelajuan Cahaya dalam Beberapa Medium",
        unit: "×10⁸ m/s",
        source: "perhitungan v = c/n dengan c = 3×10⁸ m/s",
        note: "Angka nyata, bukan karangan. Makin rapat optik medium (n makin besar), makin lambat cahaya di dalamnya. Di intan cahaya melambat sampai sekitar 40% dari kecepatan di hampa.",
        data: [
          { label: "Udara (n=1,0)", value: 3.0, color: "#34d399" },
          { label: "Air (n=1,33)", value: 2.26, color: "#22d3ee" },
          { label: "Kaca (n=1,5)", value: 2.0, color: "#38bdf8" },
          { label: "Intan (n=2,42)", value: 1.24, color: "#818cf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Cahaya merambat di dalam kaca dengan indeks bias n = 1,5. Berapa kelajuan cahaya di dalam kaca itu? (gunakan c = 3×10⁸ m/s dan v = c/n)",
        answer: 2.0,
        tolerance: 0.05,
        suffix: " ×10⁸ m/s",
        solution:
          "v = c/n = (3×10⁸) / 1,5 = <strong>2×10⁸ m/s</strong>. Cahaya melambat sepertiga dibanding di ruang hampa karena harus berinteraksi dengan atom-atom kaca.",
        hint: "Bagi kelajuan cahaya di hampa (3×10⁸) dengan indeks bias.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan tiap benda sebagai sumber cahaya (memancarkan cahaya sendiri) atau benda gelap (hanya memantulkan cahaya).",
        buckets: ["Sumber cahaya", "Benda gelap (memantulkan)"],
        items: [
          { text: "Matahari", bucket: "Sumber cahaya" },
          { text: "Nyala lilin", bucket: "Sumber cahaya" },
          { text: "Bulan", bucket: "Benda gelap (memantulkan)" },
          { text: "Buku di atas meja", bucket: "Benda gelap (memantulkan)" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah tentang cahaya dengan maknanya.",
        pairs: [
          { left: "Perambatan lurus", right: "Cahaya bergerak garis lurus di medium serbasama" },
          { left: "Kelajuan cahaya c", right: "Sekitar 3×10⁸ m/s di ruang hampa" },
          { left: "Umbra", right: "Bagian bayangan paling gelap, tanpa cahaya sama sekali" },
          { left: "Indeks bias n", right: "Pembanding kelajuan cahaya di hampa terhadap di medium" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kamera Lubang Jarum",
        html: "Lubangi salah satu sisi kaleng tertutup dengan jarum, lalu pasang kertas kalkir di sisi seberangnya. Arahkan lubang ke jendela terang. Di kalkir akan muncul gambar pemandangan luar, tetapi <strong>terbalik</strong>. Penyebabnya satu hal sederhana: cahaya merambat lurus. Sinar dari bagian atas pemandangan menembus lubang dan jatuh di bawah, sinar dari bawah jatuh di atas, sehingga gambar terbalik. Tidak ada lensa, tidak ada rumus rumit, hanya perambatan lurus cahaya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. Cahaya adalah gelombang elektromagnetik yang merambat <strong>lurus</strong> di medium serbasama dengan kelajuan c ≈ 3×10⁸ m/s di ruang hampa. Di dalam medium ia melambat menjadi <strong>v = c/n</strong>. Rumus ini cuma menuliskan rapi apa yang sudah kamu lihat pada bayang-bayang tegas dan kamera lubang jarum.",
      },
      {
        type: "takeaways",
        items: [
          "Kita melihat benda karena cahaya memantul dari benda masuk ke mata.",
          "Cahaya merambat lurus di medium serbasama, itu sebabnya bayang-bayang bertepi tegas.",
          "Kelajuan cahaya di ruang hampa c ≈ 3×10⁸ m/s, tercepat di alam.",
          "Di dalam medium cahaya melambat: v = c/n, dengan n indeks bias.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa kita bisa melihat sebuah buku?",
            options: [
              "Buku memancarkan cahaya sendiri",
              "Cahaya memantul dari buku masuk ke mata",
              "Mata memancarkan sinar ke buku",
              "Buku menyerap semua cahaya",
            ],
            answer: 1,
            explain: "Benda gelap seperti buku terlihat karena memantulkan cahaya dari sumber ke mata kita.",
          },
          {
            q: "Bukti bahwa cahaya merambat lurus adalah?",
            options: [
              "Pelangi setelah hujan",
              "Bayang-bayang bertepi tegas",
              "Warna gelembung sabun",
              "Cermin memperbesar wajah",
            ],
            answer: 1,
            explain: "Bayang-bayang tajam terbentuk karena cahaya bergerak lurus dan terhalang benda.",
          },
          {
            q: "Kelajuan cahaya di ruang hampa kira-kira?",
            options: ["3×10⁵ m/s", "3×10⁶ m/s", "3×10⁸ m/s", "3×10¹⁰ m/s"],
            answer: 2,
            explain: "Cahaya melaju c ≈ 3×10⁸ m/s, atau 300.000 km tiap detik.",
          },
          {
            q: "Kelajuan cahaya dalam medium dengan indeks bias n adalah?",
            options: ["v = c·n", "v = c/n", "v = c + n", "v = n/c"],
            answer: 1,
            explain: "Cahaya melambat di medium: v = c/n, makin besar n makin lambat.",
          },
          {
            q: "Gambar pada kamera lubang jarum tampak terbalik karena?",
            options: [
              "Lubang membelokkan cahaya",
              "Cahaya merambat lurus sehingga sinar atas jatuh di bawah",
              "Kertas memantulkan cahaya",
              "Lensa membalik gambar",
            ],
            answer: 1,
            explain: "Karena cahaya lurus, sinar dari atas objek menyeberang lubang dan jatuh di bawah, gambar terbalik.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hukum-pemantulan",
    levelId: "cahaya-pemantulan",
    order: 2,
    title: "Hukum Pemantulan Cahaya",
    summary:
      "Sebelum menghafal rumus sudut, kita amati dulu mengapa kita bisa melihat wajah sendiri di cermin dan mengapa permukaan kasar tidak memantulkan bayangan.",
    durationMin: 13,
    tags: ["optika", "cahaya", "pemantulan", "cermin"],
    blocks: [
      {
        type: "paragraph",
        html: "Coba berdiri di depan cermin kamar mandi. Wajahmu muncul jelas. Lalu lihat dinding di sebelahnya yang juga terkena cahaya yang sama, tetapi tak ada bayangan apa pun di situ. Apa bedanya? Jawabannya bukan rumus, melainkan cara <strong>cahaya memantul</strong>. Ayo kita amati dulu sebelum bertemu angka.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Cahaya sebagai Gelombang",
        caption: "Cahaya adalah gelombang elektromagnetik yang merambat dan bisa dipantulkan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil senter dan arahkan ke cermin dengan posisi miring. Perhatikan: berkas pantulnya ikut miring ke arah berlawanan, seimbang seperti cermin lipat. Makin miring kamu menyorot, makin miring pula pantulannya, selalu seimbang terhadap garis tegak lurus permukaan. Rasakan polanya dulu, jangan buru-buru cari rumusnya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Garis normal itu kuncinya",
        html: "<strong>Garis normal</strong> adalah garis khayal yang tegak lurus permukaan di titik cahaya mengenai. Sudut datang dan sudut pantul selalu diukur dari garis normal ini, bukan dari permukaan cermin.",
      },
      {
        type: "widget",
        widget: "SimulatorGelombang",
      },
      {
        type: "chart",
        variant: "line",
        title: "Sudut Pantul untuk Tiap Sudut Datang",
        unit: "derajat sudut pantul",
        source: "hukum pemantulan",
        note: "Garisnya lurus naik 1:1. Berapa pun sudut datang, sudut pantul persis sama. Inilah pola yang kita temukan sebelum menuliskannya jadi rumus.",
        data: [
          { label: "datang 0°", value: 0, color: "#34d399" },
          { label: "datang 15°", value: 15, color: "#2dd4bf" },
          { label: "datang 30°", value: 30, color: "#22d3ee" },
          { label: "datang 45°", value: 45, color: "#38bdf8" },
          { label: "datang 60°", value: 60, color: "#60a5fa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Seberkas cahaya mengenai cermin datar dengan sudut datang 35° terhadap garis normal. Berapa besar sudut pantulnya?",
        answer: 35,
        tolerance: 0.5,
        suffix: "°",
        solution:
          "Pada pemantulan, sudut pantul selalu sama dengan sudut datang. Jadi sudut pantul = <strong>35°</strong>. Tidak perlu menghitung apa pun, cukup memahami bahwa keduanya seimbang terhadap garis normal.",
        hint: "Sudut pantul = sudut datang.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan tiap permukaan sebagai pemantulan teratur (membentuk bayangan) atau pemantulan baur (cahaya tersebar).",
        buckets: ["Pemantulan teratur", "Pemantulan baur"],
        items: [
          { text: "Cermin datar mengilap", bucket: "Pemantulan teratur" },
          { text: "Permukaan air kolam yang tenang", bucket: "Pemantulan teratur" },
          { text: "Kertas putih kasar", bucket: "Pemantulan baur" },
          { text: "Tembok bercat tembok", bucket: "Pemantulan baur" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah pemantulan dengan maknanya.",
        pairs: [
          { left: "Garis normal", right: "Garis tegak lurus permukaan di titik datang" },
          { left: "Sudut datang", right: "Sudut antara sinar masuk dan garis normal" },
          { left: "Pemantulan baur", right: "Terjadi pada permukaan kasar" },
          { left: "Bayangan cermin datar", right: "Maya, tegak, dan sama besar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Jalan Basah Menyilaukan di Malam Hari",
        html: "Aspal kering memantulkan cahaya lampu secara <strong>baur</strong> ke segala arah, jadi tidak silau. Tetapi saat hujan, lapisan air mengisi celah aspal dan membuat permukaannya jadi halus seperti cermin. Cahaya lampu kendaraan lalu memantul <strong>teratur</strong> tepat ke mata pengemudi lain, menyilaukan. Tidak ada rumus baru di sini, hanya perubahan dari pemantulan baur menjadi teratur karena permukaan menjadi rata.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum jadi <strong>Hukum Pemantulan</strong>: (1) sinar datang, sinar pantul, dan garis normal terletak pada satu bidang; (2) <strong>sudut datang = sudut pantul</strong>, ditulis θ<sub>i</sub> = θ<sub>r</sub>. Rumus ini hanyalah catatan rapi dari pola yang sudah kamu lihat sendiri pada cermin dan senter.",
      },
      {
        type: "takeaways",
        items: [
          "Sudut datang dan sudut pantul diukur dari garis normal, bukan dari permukaan.",
          "Hukum pemantulan: sudut datang selalu sama dengan sudut pantul.",
          "Permukaan halus memberi pemantulan teratur (bayangan); permukaan kasar memberi pemantulan baur.",
          "Cermin datar menghasilkan bayangan maya, tegak, dan sama besar dengan benda.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Sudut datang dan sudut pantul diukur terhadap apa?",
            options: ["Permukaan cermin", "Garis normal", "Sinar datang", "Lantai"],
            answer: 1,
            explain: "Keduanya selalu diukur dari garis normal yang tegak lurus permukaan.",
          },
          {
            q: "Jika sudut datang 50°, berapa sudut pantulnya?",
            options: ["25°", "40°", "50°", "100°"],
            answer: 2,
            explain: "Hukum pemantulan: sudut pantul = sudut datang = 50°.",
          },
          {
            q: "Permukaan kasar seperti kertas menyebabkan?",
            options: ["Pemantulan teratur", "Pemantulan baur", "Pembiasan", "Tidak ada pantulan"],
            answer: 1,
            explain: "Permukaan kasar menyebarkan cahaya ke banyak arah, disebut pemantulan baur.",
          },
          {
            q: "Bayangan pada cermin datar bersifat?",
            options: [
              "Nyata dan terbalik",
              "Maya, tegak, sama besar",
              "Nyata dan diperbesar",
              "Maya dan diperkecil",
            ],
            answer: 1,
            explain: "Cermin datar selalu memberi bayangan maya, tegak, dan sama besar.",
          },
          {
            q: "Mengapa jalan basah lebih menyilaukan dari jalan kering di malam hari?",
            options: [
              "Air memperkuat cahaya lampu",
              "Lapisan air membuat permukaan rata sehingga pantulan jadi teratur",
              "Air menyerap semua cahaya",
              "Aspal basah memancarkan cahaya sendiri",
            ],
            answer: 1,
            explain: "Air mengisi celah aspal, mengubah pemantulan baur menjadi teratur ke arah mata.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "cermin-datar",
    levelId: "cahaya-pemantulan",
    order: 3,
    title: "Cermin Datar dan Bayangannya",
    summary:
      "Sebelum menghafal rumus jumlah bayangan, kita selidiki dulu mengapa cermin membuat tulisan terbaca terbalik dan mengapa dua cermin bisa menghasilkan banyak salinan dirimu.",
    durationMin: 13,
    tags: ["optika", "cermin-datar", "bayangan", "pemantulan"],
    blocks: [
      {
        type: "paragraph",
        html: "Tuliskan namamu di kertas, lalu hadapkan ke cermin. Tulisannya tampak <strong>terbalik kiri-kanan</strong>, itulah kenapa mobil ambulans menulis 'AMBULANS' secara terbalik di kapnya agar terbaca normal di kaca spion pengemudi depan. Lalu coba berdiri di antara dua cermin yang saling berhadapan: dirimu seakan tersalin tak terhingga. Mengapa? Ayo amati dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Pemantulan dan Pembentukan Bayangan",
        caption: "Bayangan cermin datar terbentuk di belakang cermin sejauh benda di depannya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Tempelkan stiker kecil di cermin, lalu dekatkan jarimu ke permukaan cermin. Lihat: jari dan bayangannya bertemu tepat di kaca. Sekarang mundur 30 cm, bayanganmu seakan berada 30 cm di balik kaca, sama jauhnya. Lalu ambil dua cermin saku, buka seperti buku dengan sudut berbeda-beda, dan hitung berapa banyak bayangan kelereng yang muncul. Makin kecil sudutnya, makin banyak bayangan. Amati polanya dulu.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Sifat bayangan cermin datar",
        html: "Bayangan cermin datar selalu <strong>maya</strong> (di belakang cermin, tak bisa ditangkap layar), <strong>tegak</strong>, <strong>sama besar</strong> dengan benda, dan berjarak sama: jarak bayangan = jarak benda. Yang tampak terbalik hanyalah arah kiri-kanan, bukan atas-bawah.",
      },
      {
        type: "widget",
        widget: "SimulatorGelombang",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Jumlah Bayangan pada Dua Cermin Bersudut",
        unit: "jumlah bayangan",
        source: "perhitungan n = (360/θ) − 1",
        note: "Angka nyata dari rumus. Makin kecil sudut antara dua cermin, makin banyak bayangan terbentuk. Inilah prinsip di balik kaleidoskop.",
        data: [
          { label: "sudut 180°", value: 1, color: "#34d399" },
          { label: "sudut 120°", value: 2, color: "#22d3ee" },
          { label: "sudut 90°", value: 3, color: "#38bdf8" },
          { label: "sudut 60°", value: 5, color: "#60a5fa" },
          { label: "sudut 45°", value: 7, color: "#818cf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Dua cermin datar disusun membentuk sudut 60° satu sama lain. Berapa banyak bayangan sebuah benda yang diletakkan di antaranya? (gunakan n = (360/θ) − 1)",
        answer: 5,
        tolerance: 0.5,
        suffix: " bayangan",
        solution:
          "n = (360/θ) − 1 = (360/60) − 1 = 6 − 1 = <strong>5 bayangan</strong>. Makin kecil sudutnya, makin banyak salinan yang muncul, persis seperti yang kamu lihat saat dua cermin dirapatkan.",
        hint: "Bagi 360 dengan sudut, lalu kurangi 1.",
      },
      {
        type: "calcExercise",
        prompt:
          "Seorang anak setinggi 150 cm berdiri 2 meter di depan cermin datar besar. Berapa jarak antara anak itu dengan bayangannya di dalam cermin?",
        answer: 4,
        tolerance: 0.1,
        suffix: " m",
        solution:
          "Bayangan berada sejauh benda di balik cermin, yaitu 2 m di belakang kaca. Jarak benda ke bayangan = 2 m + 2 m = <strong>4 m</strong>. Tinggi anak tidak memengaruhi jarak ini.",
        hint: "Jarak bayangan ke cermin = jarak benda ke cermin; jumlahkan keduanya.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan sebagai benar atau salah untuk bayangan cermin datar.",
        buckets: ["Benar", "Salah"],
        items: [
          { text: "Bayangan bersifat maya (di belakang cermin)", bucket: "Benar" },
          { text: "Bayangan sama besar dengan benda", bucket: "Benar" },
          { text: "Bayangan diperbesar dua kali", bucket: "Salah" },
          { text: "Bayangan bisa ditangkap layar", bucket: "Salah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Periskop Kapal Selam",
        html: "Periskop memungkinkan awak kapal selam mengintip permukaan laut dari dalam air. Di dalamnya hanya ada dua <strong>cermin datar</strong> (atau prisma) yang dipasang miring 45°, satu di atas dan satu di bawah. Cahaya dari permukaan memantul di cermin atas, turun lurus melalui tabung, lalu memantul lagi di cermin bawah menuju mata pengamat. Tidak ada lensa rumit, hanya dua kali pemantulan teratur. Prinsip yang sama dipakai kaleidoskop, hanya saja cermin-cerminnya disusun bersudut kecil agar pola terkali-kali jadi simetri indah.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan. Cermin datar memberi bayangan maya, tegak, sama besar, dengan <strong>jarak bayangan = jarak benda</strong>. Untuk dua cermin yang membentuk sudut θ, jumlah bayangan adalah <strong>n = (360/θ) − 1</strong>. Rumus ini hanya merangkum pola banyaknya bayangan yang sudah kamu hitung sendiri.",
      },
      {
        type: "takeaways",
        items: [
          "Bayangan cermin datar: maya, tegak, sama besar, dan jarak bayangan = jarak benda.",
          "Yang terbalik pada bayangan cermin adalah arah kiri-kanan, bukan atas-bawah.",
          "Dua cermin bersudut θ menghasilkan n = (360/θ) − 1 bayangan.",
          "Periskop dan kaleidoskop bekerja hanya dengan pemantulan cermin datar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Sifat bayangan pada cermin datar adalah?",
            options: [
              "Nyata, terbalik, diperbesar",
              "Maya, tegak, sama besar",
              "Nyata, tegak, diperkecil",
              "Maya, terbalik, diperbesar",
            ],
            answer: 1,
            explain: "Cermin datar selalu memberi bayangan maya, tegak, dan sama besar dengan benda.",
          },
          {
            q: "Benda 1,5 m di depan cermin datar. Jarak bayangan ke cermin adalah?",
            options: ["0,75 m", "1,5 m", "3 m", "Tak terhingga"],
            answer: 1,
            explain: "Jarak bayangan selalu sama dengan jarak benda, yaitu 1,5 m di belakang kaca.",
          },
          {
            q: "Dua cermin bersudut 90° menghasilkan berapa bayangan?",
            options: ["2", "3", "4", "5"],
            answer: 1,
            explain: "n = (360/90) − 1 = 4 − 1 = 3 bayangan.",
          },
          {
            q: "Mengapa tulisan 'AMBULANS' ditulis terbalik di kap mobil?",
            options: [
              "Agar terlihat keren",
              "Agar terbaca normal di kaca spion pengemudi depan",
              "Agar lebih hemat cat",
              "Karena cermin memperbesar huruf",
            ],
            answer: 1,
            explain: "Cermin membalik kiri-kanan, sehingga tulisan terbalik justru terbaca normal di spion.",
          },
          {
            q: "Periskop kapal selam pada dasarnya menggunakan?",
            options: [
              "Dua lensa cembung",
              "Dua cermin datar miring 45°",
              "Satu cermin cekung",
              "Sebuah prisma tunggal yang membiaskan",
            ],
            answer: 1,
            explain: "Dua cermin datar 45° memantulkan cahaya dari permukaan turun ke mata pengamat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "cermin-cekung",
    levelId: "cahaya-pemantulan",
    order: 4,
    title: "Cermin Cekung",
    summary:
      "Sebelum memakai rumus cermin, kita amati dulu mengapa sendok bagian dalam memperbesar wajah dari dekat tetapi membalikkannya dari jauh.",
    durationMin: 14,
    tags: ["optika", "cermin-cekung", "fokus", "bayangan"],
    blocks: [
      {
        type: "paragraph",
        html: "Ambil sendok logam mengilap dan lihat wajahmu di sisi <strong>cekungnya</strong>. Dari dekat, wajahmu membesar dan tegak, seperti kaca rias. Lalu jauhkan sendok pelan-pelan: tiba-tiba wajahmu mengecil dan <strong>terbalik</strong>! Cermin yang sama memberi dua bayangan yang sangat berbeda. Mengapa? Jawabannya ada pada bagaimana cermin cekung mengumpulkan cahaya ke satu titik. Ayo amati dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "PembiasanCahaya",
        title: "Video: Cermin Cekung Memusatkan Cahaya",
        caption: "Cermin cekung memantulkan sinar sejajar menuju satu titik fokus di depannya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pada siang terik, pegang sendok cekung atau cermin rias dan pantulkan cahaya matahari ke selembar kertas. Geser jaraknya sampai muncul titik terang sekecil mungkin, lalu tahan: kertasnya bisa mulai menghangat. Jarak antara cermin dan titik api itu adalah <strong>jarak fokus</strong> f, dan ia setengah dari jari-jari kelengkungan cermin. Rasakan dulu pemusatan cahayanya, jangan langsung cari rumus.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Konvergen dan titik fokus",
        html: "Cermin cekung bersifat <strong>konvergen</strong> (mengumpulkan cahaya). Sinar sejajar yang datang dipantulkan menuju satu <strong>titik fokus F</strong> di depan cermin. Jarak fokus f = R/2, dengan R jari-jari kelengkungan. Saat benda di luar fokus, bayangan jadi nyata dan terbalik; saat benda di dalam fokus, bayangan jadi maya, tegak, dan diperbesar.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Jarak Bayangan vs Jarak Benda (cermin cekung f = 10 cm)",
        unit: "jarak bayangan s' (cm)",
        source: "perhitungan 1/f = 1/s + 1/s'",
        note: "Angka nyata dari rumus cermin. Saat benda mendekati fokus (10 cm), bayangan melesat makin jauh. Itu sebabnya reflektor senter butuh penyetelan tepat.",
        data: [
          { label: "benda 15 cm", value: 30, color: "#34d399" },
          { label: "benda 20 cm", value: 20, color: "#22d3ee" },
          { label: "benda 30 cm", value: 15, color: "#38bdf8" },
          { label: "benda 50 cm", value: 12.5, color: "#818cf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Cermin cekung berjarak fokus 10 cm. Sebuah benda diletakkan 30 cm di depan cermin. Di mana letak bayangannya (jarak s')?",
        answer: 15,
        tolerance: 0.5,
        suffix: " cm",
        solution:
          "Pakai 1/f = 1/s + 1/s'. Maka 1/s' = 1/10 − 1/30 = 3/30 − 1/30 = 2/30 = 1/15. Jadi s' = <strong>15 cm</strong>. Karena s' positif, bayangan nyata dan terbalik, terbentuk di depan cermin.",
        hint: "1/s' = 1/f − 1/s, lalu balik hasilnya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada cermin cekung yang sama (benda 30 cm, bayangan 15 cm), berapa perbesaran bayangannya? (M = |s'/s|)",
        answer: 0.5,
        tolerance: 0.02,
        suffix: "×",
        solution:
          "M = |s'/s| = 15/30 = <strong>0,5×</strong>. Bayangan diperkecil setengahnya dan terbalik. Inilah yang kamu lihat saat wajah mengecil di sendok yang dijauhkan.",
        hint: "Bagi jarak bayangan dengan jarak benda.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan sifat bayangan cermin cekung berdasarkan posisi benda.",
        buckets: ["Benda di luar fokus", "Benda di dalam fokus"],
        items: [
          { text: "Bayangan nyata dan terbalik", bucket: "Benda di luar fokus" },
          { text: "Bisa ditangkap layar", bucket: "Benda di luar fokus" },
          { text: "Bayangan maya, tegak, diperbesar", bucket: "Benda di dalam fokus" },
          { text: "Dipakai sebagai kaca rias", bucket: "Benda di dalam fokus" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Reflektor Lampu Senter dan Kompor Surya",
        html: "Di dalam lampu senter, bohlam kecil diletakkan tepat di <strong>titik fokus</strong> cermin cekung. Cahaya dari bohlam memantul di cermin dan keluar sebagai berkas sejajar yang kuat menyorot jauh, kebalikan dari sinar matahari yang dikumpulkan ke fokus. Prinsip yang sama, dibalik. Kompor surya memakai cermin cekung besar untuk mengumpulkan sinar matahari ke satu titik panas hingga bisa memasak air tanpa bahan bakar. Antena parabola pun bekerja begitu: gelombang dikumpulkan ke penerima di fokus. Semua memakai satu pola: cermin cekung memusatkan cahaya di fokus.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. Cermin cekung memenuhi <strong>1/f = 1/s + 1/s'</strong> dengan <strong>f = R/2</strong>, dan perbesaran <strong>M = |s'/s|</strong>. Tanda s' positif berarti bayangan nyata (di depan cermin); s' negatif berarti maya (di belakang). Rumus ini cuma menuliskan rapi pola yang sudah kamu lihat pada sendok dan reflektor senter.",
      },
      {
        type: "takeaways",
        items: [
          "Cermin cekung bersifat konvergen: sinar sejajar dipantulkan ke titik fokus.",
          "Jarak fokus f = R/2 (setengah jari-jari kelengkungan).",
          "Persamaan cermin: 1/f = 1/s + 1/s'; perbesaran M = |s'/s|.",
          "Benda di luar fokus memberi bayangan nyata terbalik; di dalam fokus maya tegak diperbesar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Cermin cekung bersifat?",
            options: ["Divergen", "Konvergen", "Tidak memantulkan", "Selalu memperkecil"],
            answer: 1,
            explain: "Cermin cekung mengumpulkan sinar sejajar ke titik fokus, jadi konvergen.",
          },
          {
            q: "Hubungan jarak fokus dan jari-jari kelengkungan cermin adalah?",
            options: ["f = R", "f = R/2", "f = 2R", "f = R²"],
            answer: 1,
            explain: "Jarak fokus cermin lengkung adalah setengah jari-jarinya, f = R/2.",
          },
          {
            q: "Cermin cekung f = 10 cm, benda di 30 cm. Jarak bayangannya?",
            options: ["7,5 cm", "15 cm", "30 cm", "60 cm"],
            answer: 1,
            explain: "1/s' = 1/10 − 1/30 = 1/15, jadi s' = 15 cm.",
          },
          {
            q: "Agar cermin cekung memberi bayangan maya tegak diperbesar (kaca rias), benda harus?",
            options: [
              "Di luar fokus",
              "Di dalam fokus (lebih dekat dari f)",
              "Tepat di titik fokus",
              "Sangat jauh",
            ],
            answer: 1,
            explain: "Benda di dalam fokus menghasilkan bayangan maya, tegak, dan diperbesar.",
          },
          {
            q: "Mengapa bohlam senter diletakkan di titik fokus cermin cekung?",
            options: [
              "Agar cahaya tersebar baur",
              "Agar cahaya keluar sebagai berkas sejajar menyorot jauh",
              "Agar bohlam lebih awet",
              "Agar cahaya dibiaskan",
            ],
            answer: 1,
            explain: "Sumber di fokus memantul jadi berkas sejajar, kebalikan dari sinar sejajar yang dikumpulkan ke fokus.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "cermin-cembung",
    levelId: "cahaya-pemantulan",
    order: 5,
    title: "Cermin Cembung",
    summary:
      "Sebelum memakai rumus, kita pahami dulu mengapa kaca spion bertuliskan 'benda lebih dekat dari yang tampak' dan mengapa cermin di tikungan toko melihat seisi ruangan.",
    durationMin: 13,
    tags: ["optika", "cermin-cembung", "divergen", "spion"],
    blocks: [
      {
        type: "paragraph",
        html: "Lihat sisi <strong>cembung</strong> sebuah sendok, atau kaca spion samping mobil. Bayanganmu selalu <strong>tegak dan diperkecil</strong>, dan kamu bisa melihat area yang luas sekaligus. Itu sebabnya di spion sering tertulis 'objects in mirror are closer than they appear'. Mengapa cermin cembung tidak pernah memperbesar dan tidak pernah membalik? Ayo amati dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "PembiasanCahaya",
        title: "Video: Cermin Cembung Menyebarkan Cahaya",
        caption: "Cermin cembung memantulkan sinar sejajar seolah berasal dari titik fokus di belakangnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pegang sendok dengan sisi cembung menghadapmu, lalu gerakkan maju-mundur. Perhatikan: sekecil atau sebesar apa pun jaraknya, bayanganmu selalu <strong>tegak</strong> dan <strong>lebih kecil</strong> dari aslinya, tidak pernah terbalik. Lalu mundur dan amati: kamu bisa melihat hampir seluruh ruangan di sendok kecil itu. Itulah keunggulan medan pandang luas. Amati polanya dulu, rumus belakangan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Divergen dan fokus maya",
        html: "Cermin cembung bersifat <strong>divergen</strong> (menyebarkan cahaya). Sinar sejajar dipantulkan menyebar seolah berasal dari titik fokus di <strong>belakang</strong> cermin, jadi jarak fokusnya bernilai <strong>negatif</strong>. Akibatnya bayangan selalu maya, tegak, dan diperkecil, berapa pun jarak bendanya. Sebagai gantinya, medan pandangnya jadi sangat luas.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perbesaran Cermin Cembung untuk Tiap Jarak Benda (f = −20 cm)",
        unit: "perbesaran (kali)",
        source: "perhitungan 1/f = 1/s + 1/s', M = |s'/s|",
        note: "Angka nyata dari rumus. Perbesaran selalu di bawah 1 (selalu mengecil) dan makin jauh benda makin kecil bayangannya. Itu sebabnya spion cembung memuat banyak kendaraan dalam pandangan.",
        data: [
          { label: "benda 10 cm", value: 0.67, color: "#34d399" },
          { label: "benda 20 cm", value: 0.5, color: "#22d3ee" },
          { label: "benda 40 cm", value: 0.33, color: "#38bdf8" },
          { label: "benda 60 cm", value: 0.25, color: "#818cf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Kaca spion cembung memiliki jarak fokus f = −20 cm. Sebuah motor berada 30 cm di depannya. Berapa jarak bayangannya (tuliskan nilai mutlaknya, dalam cm)?",
        answer: 12,
        tolerance: 0.5,
        suffix: " cm",
        solution:
          "1/s' = 1/f − 1/s = −1/20 − 1/30 = −3/60 − 2/60 = −5/60 = −1/12. Jadi s' = −12 cm. Tandanya negatif berarti bayangan <strong>maya</strong>, di belakang cermin, dengan jarak |s'| = <strong>12 cm</strong>.",
        hint: "Fokus cembung negatif: 1/s' = 1/f − 1/s dengan f = −20.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada spion yang sama (benda 30 cm, bayangan 12 cm), berapa perbesaran bayangannya? (M = |s'/s|)",
        answer: 0.4,
        tolerance: 0.02,
        suffix: "×",
        solution:
          "M = |s'/s| = 12/30 = <strong>0,4×</strong>. Bayangan tampak 0,4 kali ukuran asli, jadi terlihat lebih kecil dan lebih jauh dari kenyataan. Itulah alasan peringatan di kaca spion.",
        hint: "Bagi jarak bayangan dengan jarak benda.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap cermin sebagai konvergen atau divergen.",
        buckets: ["Konvergen (mengumpulkan)", "Divergen (menyebarkan)"],
        items: [
          { text: "Cermin cekung (kaca rias)", bucket: "Konvergen (mengumpulkan)" },
          { text: "Reflektor lampu senter", bucket: "Konvergen (mengumpulkan)" },
          { text: "Kaca spion samping mobil", bucket: "Divergen (menyebarkan)" },
          { text: "Cermin keselamatan di tikungan toko", bucket: "Divergen (menyebarkan)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Cermin Cembung di Tikungan Jalan dan Toko",
        html: "Di tikungan tajam dan di pojok minimarket sering dipasang cermin <strong>cembung</strong> besar. Karena sifatnya divergen, satu cermin kecil bisa menampilkan medan pandang yang sangat luas, sehingga pengemudi melihat kendaraan dari arah tersembunyi, dan kasir mengawasi seluruh lorong. Bayangannya memang diperkecil, tetapi tegak dan menyeluruh. Trade-off yang sama berlaku pada kaca spion: pandangan luas dibayar dengan benda yang tampak lebih kecil dan lebih jauh, maka muncullah peringatan agar pengemudi tidak salah memperkirakan jarak.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. Cermin cembung memakai persamaan yang sama, <strong>1/f = 1/s + 1/s'</strong>, tetapi dengan <strong>f bernilai negatif</strong> (f = R/2, R negatif). Hasilnya s' selalu negatif, artinya bayangan <strong>selalu maya, tegak, dan diperkecil</strong>. Perbesaran M = |s'/s| selalu kurang dari 1. Rumus ini hanya merangkum pola yang kamu lihat pada spion dan sendok cembung.",
      },
      {
        type: "takeaways",
        items: [
          "Cermin cembung bersifat divergen dengan jarak fokus negatif.",
          "Bayangannya selalu maya, tegak, dan diperkecil, berapa pun jarak benda.",
          "Persamaan tetap 1/f = 1/s + 1/s', dengan f negatif; M = |s'/s| < 1.",
          "Keunggulannya medan pandang luas, dipakai pada spion dan cermin keselamatan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Cermin cembung bersifat?",
            options: ["Konvergen", "Divergen", "Tidak memantulkan", "Selalu memperbesar"],
            answer: 1,
            explain: "Cermin cembung menyebarkan sinar sejajar, jadi divergen, dengan fokus maya di belakang.",
          },
          {
            q: "Sifat bayangan cermin cembung selalu?",
            options: [
              "Nyata, terbalik, diperbesar",
              "Maya, tegak, diperkecil",
              "Nyata, tegak, sama besar",
              "Maya, terbalik, diperbesar",
            ],
            answer: 1,
            explain: "Berapa pun jarak benda, cermin cembung memberi bayangan maya, tegak, dan diperkecil.",
          },
          {
            q: "Jarak fokus cermin cembung bertanda?",
            options: ["Positif", "Negatif", "Nol", "Tak terhingga"],
            answer: 1,
            explain: "Fokusnya berada di belakang cermin, sehingga f bernilai negatif.",
          },
          {
            q: "Spion cembung f = −20 cm, benda 30 cm. Nilai mutlak jarak bayangannya?",
            options: ["6 cm", "12 cm", "20 cm", "60 cm"],
            answer: 1,
            explain: "1/s' = −1/20 − 1/30 = −1/12, jadi |s'| = 12 cm (maya).",
          },
          {
            q: "Keunggulan utama cermin cembung sebagai spion adalah?",
            options: [
              "Memperbesar kendaraan di belakang",
              "Memberi medan pandang yang sangat luas",
              "Membentuk bayangan nyata di layar",
              "Memusatkan cahaya ke satu titik",
            ],
            answer: 1,
            explain: "Sifat divergen membuat satu cermin kecil menampung pandangan yang lebar.",
          },
        ],
      },
    ],
  },
];
