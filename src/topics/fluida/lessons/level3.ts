import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "fluida-dinamis-dan-kontinuitas",
    levelId: "fluida-dinamis",
    order: 1,
    title: "Fluida Dinamis dan Kontinuitas",
    summary:
      "Kenapa air menyembur lebih deras saat ujung selang dipencet? Kita amati aliran air dulu, baru persamaan kontinuitas A1v1 = A2v2 muncul dengan sendirinya.",
    durationMin: 14,
    tags: ["fluida", "kontinuitas", "debit", "aliran"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat menyiram tanaman, kamu memencet ujung selang dengan jempol. Tiba-tiba air menyembur jauh lebih deras dan jauh. Padahal kerannya tidak diputar lebih besar. Sebelum melihat rumusnya, ayo pahami dulu gagasan sederhana ini: ke mana perginya air yang sama banyak lewat lubang yang lebih sempit.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Aliran yang Kekal",
        caption: "Air yang masuk harus sama dengan air yang keluar tiap detiknya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan air mengalir di pipa lebar lalu masuk ke bagian yang menyempit. Karena air tidak bisa dimampatkan atau menumpuk, jumlah air yang lewat tiap detik (disebut <strong>debit</strong>) harus tetap. Supaya air sebanyak itu bisa lewat lubang sempit, ia harus bergerak <strong>lebih cepat</strong>. Itulah sebabnya selang yang dipencet menyemburkan air lebih kencang. Penampang mengecil, kecepatan membesar.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa itu debit",
        html: "<strong>Debit</strong> adalah volume fluida yang mengalir tiap satuan waktu. Ia sama dengan luas penampang dikali kecepatan aliran. Pada pipa yang tidak bocor, debit selalu tetap di sepanjang pipa, walau penampangnya berubah-ubah.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kecepatan Aliran vs Luas Penampang Pipa",
        unit: "meter per detik (m/s)",
        source: "hitungan v = Q/A dengan debit tetap Q 0,001 m^3/s",
        note: "Dengan debit tetap, kecepatan naik saat penampang menyempit. Pipa berpenampang 0,001 m^2 mengalirkan air sepuluh kali lebih cepat daripada 0,01 m^2.",
        data: [
          { label: "0,01 m^2", value: 0.1, color: "#38bdf8" },
          { label: "0,005 m^2", value: 0.2, color: "#22d3ee" },
          { label: "0,002 m^2", value: 0.5, color: "#2dd4bf" },
          { label: "0,001 m^2", value: 1.0, color: "#60a5fa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Air mengalir di pipa berpenampang 0,02 m^2 dengan kecepatan 3 m/s. Berapa debit airnya?",
        answer: 0.06,
        tolerance: 0.001,
        suffix: " m^3/s",
        solution:
          "Debit Q = A x v = 0,02 x 3 = <strong>0,06 m^3/s</strong>. Tiap detik, 0,06 meter kubik air melewati penampang itu.",
        hint: "Kalikan luas penampang dengan kecepatan aliran.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pipa menyempit dari penampang 0,01 m^2 (kecepatan 2 m/s) menjadi 0,004 m^2. Berapa kecepatan air di bagian sempit?",
        answer: 5,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Kontinuitas A1v1 = A2v2. Maka v2 = (A1 x v1)/A2 = (0,01 x 2)/0,004 = 0,02/0,004 = <strong>5 m/s</strong>. Penampang mengecil 2,5 kali, kecepatan membesar 2,5 kali.",
        hint: "Gunakan A1 x v1 = A2 x v2 dan cari v2.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan kondisi penampang pipa dengan akibatnya pada aliran.",
        pairs: [
          { left: "Penampang menyempit", right: "Kecepatan aliran bertambah" },
          { left: "Penampang melebar", right: "Kecepatan aliran berkurang" },
          { left: "Debit di sepanjang pipa", right: "Selalu tetap jika tak bocor" },
          { left: "Ujung selang dipencet", right: "Air menyembur lebih cepat" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Sungai yang Tiba-tiba Deras",
        html: "Sebuah sungai mengalir tenang di hamparan lembah yang lebar. Namun saat memasuki celah ngarai yang sempit, airnya berubah menjadi arus deras yang berbahaya. Tidak ada tambahan air, tidak ada hujan baru. Yang terjadi murni persamaan kontinuitas: debit air tetap, tetapi penampang sungai menyempit drastis di ngarai, sehingga kecepatan air melonjak. Pengarung jeram memahami betul: bagian sungai yang menyempit selalu yang paling cepat dan paling menantang.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rumuskan. <strong>Debit</strong>: Q = A x v, tetap di sepanjang pipa. Dari sini lahir <strong>persamaan kontinuitas</strong>: A1 x v1 = A2 x v2. Penampang dan kecepatan berbanding terbalik: bila luas mengecil, kecepatan membesar dengan perbandingan yang sama, agar debit tetap kekal.",
      },
      {
        type: "takeaways",
        items: [
          "Debit Q = A x v adalah volume fluida yang mengalir tiap detik.",
          "Pada pipa tak bocor, debit selalu tetap walau penampang berubah.",
          "Persamaan kontinuitas: A1 x v1 = A2 x v2.",
          "Penampang sempit membuat aliran lebih cepat, penampang lebar membuatnya lambat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Debit aliran fluida dihitung dengan?",
            options: [
              "Luas dibagi kecepatan",
              "Luas dikali kecepatan",
              "Kecepatan dibagi luas",
              "Massa dibagi volume",
            ],
            answer: 1,
            explain: "Debit Q = A x v, luas penampang dikali kecepatan aliran.",
          },
          {
            q: "Saat pipa menyempit, kecepatan aliran air akan?",
            options: ["Berkurang", "Bertambah", "Tetap", "Menjadi nol"],
            answer: 1,
            explain: "Karena debit tetap, penampang sempit membuat kecepatan bertambah.",
          },
          {
            q: "A1 = 0,01 m^2, v1 = 4 m/s, A2 = 0,002 m^2. Berapa v2?",
            options: ["20 m/s", "2 m/s", "8 m/s", "0,8 m/s"],
            answer: 0,
            explain: "v2 = (0,01 x 4)/0,002 = 0,04/0,002 = 20 m/s.",
          },
          {
            q: "Mengapa debit pada pipa tertutup yang tidak bocor selalu tetap?",
            options: [
              "Karena air menumpuk",
              "Karena fluida tak bisa dimampatkan dan tak menumpuk",
              "Karena gravitasi konstan",
              "Karena pipa memuai",
            ],
            answer: 1,
            explain: "Fluida tak termampatkan, jadi yang masuk harus sama dengan yang keluar tiap detik.",
          },
          {
            q: "Sungai melebar dari ngarai sempit ke lembah luas. Alirannya?",
            options: [
              "Makin cepat",
              "Makin lambat",
              "Tetap sama",
              "Berhenti",
            ],
            answer: 1,
            explain: "Penampang melebar, jadi kecepatan berkurang agar debit tetap.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "bernoulli-dan-viskositas",
    levelId: "fluida-dinamis",
    order: 2,
    title: "Asas Bernoulli",
    summary:
      "Apa yang membuat pesawat ratusan ton terangkat ke udara? Kita amati aliran cepat di atas sayap dulu, baru asas Bernoulli jadi masuk akal.",
    durationMin: 15,
    tags: ["fluida", "bernoulli", "tekanan", "aliran cepat"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah pesawat seberat ratusan ton melaju di landasan, lalu mengangkasa. Tidak ada tali yang menariknya naik. Yang mengangkatnya adalah udara, fluida yang biasa kita anggap kosong. Sebelum membuka rumusnya, ayo pahami dulu hubungan mengejutkan antara <strong>kecepatan</strong> aliran dan <strong>tekanan</strong>.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Cepat Mengalir, Rendah Tekanan",
        caption: "Di tempat fluida mengalir lebih cepat, tekanannya justru lebih rendah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pegang dua lembar kertas sejajar dengan jarak sempit, lalu tiup di antaranya. Bukannya terdorong menjauh, kedua kertas justru saling mendekat. Aneh? Aliran udara cepat di tengah membuat <strong>tekanan di sana turun</strong>, sehingga udara luar yang bertekanan lebih tinggi mendorong kertas ke dalam. Inilah inti yang sama dengan sayap pesawat: udara mengalir lebih cepat di atas sayap, tekanannya rendah, dan tekanan tinggi dari bawah mendorong sayap naik.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Inti asas Bernoulli",
        html: "<strong>Asas Bernoulli</strong> mengatakan bahwa di aliran yang lebih cepat, tekanan fluida lebih rendah, dan sebaliknya. Energi aliran terbagi tiga: energi tekanan, energi gerak (kecepatan), dan energi ketinggian. Ketika satu naik, yang lain harus turun agar totalnya tetap.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Tekanan Dinamis vs Kecepatan Aliran Udara",
        unit: "pascal (Pa)",
        source: "hitungan tekanan dinamis 0,5 x rho x v^2, udara 1,2 kg/m^3",
        note: "Suku kecepatan dalam Bernoulli adalah 0,5 x rho x v^2. Ia tumbuh mengikuti kuadrat kecepatan, jadi menggandakan kecepatan membuat sumbangannya empat kali lipat.",
        data: [
          { label: "10 m/s", value: 60, color: "#38bdf8" },
          { label: "20 m/s", value: 240, color: "#22d3ee" },
          { label: "30 m/s", value: 540, color: "#2dd4bf" },
          { label: "40 m/s", value: 960, color: "#60a5fa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Udara (rho 1,2 kg/m^3) mengalir dengan kecepatan 20 m/s. Berapa tekanan dinamisnya, yaitu 0,5 x rho x v^2?",
        answer: 240,
        tolerance: 2,
        suffix: " Pa",
        solution:
          "Tekanan dinamis = 0,5 x 1,2 x 20^2 = 0,5 x 1,2 x 400 = <strong>240 Pa</strong>. Suku inilah yang menabung 'energi gerak' fluida dalam persamaan Bernoulli.",
        hint: "Kuadratkan kecepatan dulu, lalu kalikan dengan 0,5 dan massa jenis.",
      },
      {
        type: "calcExercise",
        prompt:
          "Di bawah sayap tekanan udara 101.000 Pa, di atas sayap 100.500 Pa. Jika luas sayap 30 m^2, berapa gaya angkat totalnya?",
        answer: 15000,
        tolerance: 100,
        suffix: " N",
        solution:
          "Selisih tekanan = 101.000 - 100.500 = 500 Pa. Gaya angkat = selisih tekanan x luas = 500 x 30 = <strong>15.000 N</strong>. Beda tekanan kecil dikali luas sayap besar menghasilkan gaya angkat besar.",
        hint: "Cari beda tekanan atas dan bawah, lalu kalikan dengan luas sayap.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Menurut asas Bernoulli, di bagian aliran yang lebih cepat, tentukan keadaan tiap besaran.",
        buckets: ["Lebih besar", "Lebih kecil"],
        items: [
          { text: "Kecepatan aliran", bucket: "Lebih besar" },
          { text: "Tekanan fluida", bucket: "Lebih kecil" },
          { text: "Energi gerak (0,5 rho v^2)", bucket: "Lebih besar" },
          { text: "Energi tekanan", bucket: "Lebih kecil" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Atap Terbang Saat Angin Kencang",
        html: "Saat badai melanda, atap rumah kadang terangkat dan terlepas, bukan tertekan ke bawah. Penyebabnya asas Bernoulli. Angin kencang melesat cepat di atas permukaan atap, sehingga tekanan udara di atas atap turun. Sementara itu udara di dalam rumah relatif diam dan bertekanan lebih tinggi. Beda tekanan ini mendorong atap ke atas, persis seperti sayap pesawat. Itulah mengapa rumah di daerah berangin sering dirancang dengan atap landai dan ikatan kuat ke struktur bawah.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan asas Bernoulli untuk aliran ideal: <strong>P + 0,5 x rho x v^2 + rho x g x h = konstan</strong>. Suku tekanan, suku kecepatan, dan suku ketinggian saling bertukar tetapi totalnya tetap. Jika kecepatan v naik, suku 0,5 x rho x v^2 membesar, maka tekanan P harus turun. Inilah jantung dari hampir semua penerapan fluida dinamis.",
      },
      {
        type: "takeaways",
        items: [
          "Asas Bernoulli: di aliran lebih cepat, tekanan fluida lebih rendah.",
          "Persamaan Bernoulli: P + 0,5 x rho x v^2 + rho x g x h = konstan.",
          "Gaya angkat pesawat lahir dari beda tekanan atas dan bawah sayap.",
          "Suku energi gerak 0,5 x rho x v^2 tumbuh mengikuti kuadrat kecepatan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Menurut asas Bernoulli, di tempat fluida mengalir lebih cepat, tekanannya?",
            options: ["Lebih tinggi", "Lebih rendah", "Tetap sama", "Menjadi nol"],
            answer: 1,
            explain: "Aliran lebih cepat berarti tekanan lebih rendah, sesuai asas Bernoulli.",
          },
          {
            q: "Apa yang menyebabkan gaya angkat pada sayap pesawat?",
            options: [
              "Berat udara di atas sayap",
              "Beda tekanan antara atas dan bawah sayap",
              "Gravitasi yang melemah di udara",
              "Suhu mesin yang tinggi",
            ],
            answer: 1,
            explain: "Tekanan rendah di atas dan tekanan tinggi di bawah sayap menghasilkan gaya angkat.",
          },
          {
            q: "Persamaan Bernoulli menyatakan jumlah ketiga suku selalu?",
            options: [
              "Bertambah di pipa sempit",
              "Konstan di sepanjang aliran ideal",
              "Berkurang searah aliran",
              "Bergantung warna fluida",
            ],
            answer: 1,
            explain: "P + 0,5 rho v^2 + rho g h tetap konstan untuk aliran ideal.",
          },
          {
            q: "Tekanan dinamis udara (rho 1,2) pada kecepatan 10 m/s, yaitu 0,5 x rho x v^2, adalah?",
            options: ["60 Pa", "600 Pa", "12 Pa", "120 Pa"],
            answer: 0,
            explain: "0,5 x 1,2 x 10^2 = 0,5 x 1,2 x 100 = 60 Pa.",
          },
          {
            q: "Saat dua kertas sejajar ditiup di antaranya, keduanya?",
            options: [
              "Menjauh karena terdorong",
              "Mendekat karena tekanan di tengah turun",
              "Diam saja",
              "Robek",
            ],
            answer: 1,
            explain: "Aliran cepat di tengah menurunkan tekanan, lalu udara luar mendorong kertas saling mendekat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "penerapan-bernoulli",
    levelId: "fluida-dinamis",
    order: 3,
    title: "Penerapan Bernoulli: Venturi dan Pitot",
    summary:
      "Bagaimana pesawat tahu kecepatannya, dan kenapa air menyembur deras dari lubang tangki yang dalam? Kita amati alatnya dulu, baru rumus Torricelli dan venturi muncul.",
    durationMin: 15,
    tags: ["fluida", "bernoulli", "venturi", "torricelli", "pitot"],
    blocks: [
      {
        type: "paragraph",
        html: "Penyemprot parfum mengubah cairan menjadi kabut halus. Pesawat membaca kecepatannya lewat tabung kecil di moncongnya. Air menyembur lebih jauh dari lubang yang lebih dalam pada tangki. Ketiganya adalah anak kandung asas Bernoulli. Sebelum membuka rumusnya, ayo amati dulu bagaimana beda kecepatan dan kedalaman dipakai untuk hal-hal berguna.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Bernoulli dalam Alat Sehari-hari",
        caption: "Venturi, tabung pitot, dan semprotan semuanya memanfaatkan hubungan kecepatan dan tekanan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pada <strong>penyemprot</strong>, udara dihembuskan cepat melewati ujung pipa kecil yang mencelup ke cairan. Aliran cepat itu menurunkan tekanan di mulut pipa, sehingga tekanan atmosfer mendorong cairan naik dan tersembur menjadi kabut. Pada <strong>tabung pitot</strong> di pesawat, beda antara tekanan udara yang menabrak langsung dan tekanan udara yang mengalir lewat samping dipakai untuk menghitung kecepatan terbang. Semua memanfaatkan Bernoulli: cepat berarti tekanan rendah.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Torricelli, anak Bernoulli",
        html: "Jika sebuah tangki terbuka punya lubang di kedalaman h, air menyembur keluar dengan kecepatan yang sama seperti benda jatuh bebas dari ketinggian h. Ini disebut <strong>teorema Torricelli</strong>, hasil langsung dari Bernoulli ketika tekanan di permukaan dan di lubang sama-sama tekanan atmosfer. Makin dalam lubang, makin deras semburannya.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Kecepatan Semburan vs Kedalaman Lubang (Torricelli)",
        unit: "meter per detik (m/s)",
        source: "hitungan v = akar(2 x g x h), g 10 m/s^2",
        note: "Kecepatan semburan tumbuh mengikuti akar kedalaman. Lubang 5 meter di bawah permukaan menyemburkan air sekitar 10 m/s.",
        data: [
          { label: "0,5 m", value: 3.16, color: "#38bdf8" },
          { label: "1 m", value: 4.47, color: "#22d3ee" },
          { label: "2 m", value: 6.32, color: "#2dd4bf" },
          { label: "5 m", value: 10.0, color: "#60a5fa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah tangki terbuka berlubang 1,8 m di bawah permukaan air (g = 10 m/s^2). Berapa kecepatan air yang menyembur keluar? (v = akar dari 2 x g x h)",
        answer: 6,
        tolerance: 0.2,
        suffix: " m/s",
        solution:
          "v = akar(2 x g x h) = akar(2 x 10 x 1,8) = akar(36) = <strong>6 m/s</strong>. Persis seperti benda yang jatuh bebas dari ketinggian 1,8 m.",
        hint: "Hitung 2 x g x h dulu, lalu akarkan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada venturimeter, air mengalir 2 m/s di pipa lebar berpenampang 0,02 m^2 lalu masuk ke leher sempit 0,005 m^2. Berapa kecepatan air di leher?",
        answer: 8,
        tolerance: 0.2,
        suffix: " m/s",
        solution:
          "Pakai kontinuitas A1v1 = A2v2: v2 = (0,02 x 2)/0,005 = 0,04/0,005 = <strong>8 m/s</strong>. Di leher yang lebih cepat ini, sesuai Bernoulli, tekanannya jadi paling rendah.",
        hint: "Gunakan persamaan kontinuitas A1v1 = A2v2 untuk mencari kecepatan di leher.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap alat dengan cara kerjanya yang berdasar asas Bernoulli.",
        pairs: [
          { left: "Tabung pitot", right: "Mengukur kecepatan terbang pesawat" },
          { left: "Venturimeter", right: "Mengukur laju aliran dari beda tekanan di leher" },
          { left: "Penyemprot parfum", right: "Aliran cepat menyedot cairan naik" },
          { left: "Teorema Torricelli", right: "Kecepatan semburan dari lubang tangki" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tabung Pitot Penjaga Keselamatan Penerbangan",
        html: "Di moncong setiap pesawat terdapat tabung pitot, pipa kecil menghadap ke depan yang menjadi indra kecepatan pesawat. Udara yang menabrak lubang depan tabung berhenti dan menumpuk tekanan, sementara lubang di sisinya merasakan tekanan udara yang mengalir bebas. Beda kedua tekanan ini, lewat asas Bernoulli, diterjemahkan menjadi kecepatan udara terhadap pesawat. Kalau tabung pitot tersumbat es atau serangga, pembacaan kecepatan menjadi salah, dan ini pernah menyebabkan kecelakaan fatal. Itulah mengapa tabung pitot dipanaskan dan diperiksa ketat sebelum tiap penerbangan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. <strong>Teorema Torricelli</strong>: v = akar(2 x g x h), kecepatan semburan dari lubang sedalam h. <strong>Venturimeter</strong>: memadukan kontinuitas (A1v1 = A2v2) dan Bernoulli, beda tekanan antara pipa lebar dan leher sempit dipakai menghitung laju aliran. <strong>Tabung pitot</strong>: dari beda tekanan total dan tekanan statis, v = akar(2 x beda_tekanan / rho). Semuanya satu akar: Bernoulli.",
      },
      {
        type: "takeaways",
        items: [
          "Teorema Torricelli: v = akar(2 x g x h), makin dalam lubang makin deras semburan.",
          "Venturimeter mengukur laju aliran lewat beda tekanan di leher sempit.",
          "Tabung pitot mengukur kecepatan dari beda tekanan total dan tekanan statis.",
          "Penyemprot bekerja karena aliran cepat menurunkan tekanan dan menyedot cairan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Teorema Torricelli untuk kecepatan semburan dari lubang sedalam h adalah?",
            options: [
              "v = g x h",
              "v = akar(2 x g x h)",
              "v = 2 x g x h",
              "v = akar(g / h)",
            ],
            answer: 1,
            explain: "v = akar(2 x g x h), sama seperti kecepatan jatuh bebas dari ketinggian h.",
          },
          {
            q: "Pada venturimeter, di leher yang menyempit kecepatan naik, maka tekanannya?",
            options: ["Naik", "Turun", "Tetap", "Nol"],
            answer: 1,
            explain: "Sesuai Bernoulli, di leher cepat tekanan justru paling rendah.",
          },
          {
            q: "Lubang tangki 0,2 m di bawah permukaan (g 10). Kecepatan semburannya?",
            options: ["1 m/s", "2 m/s", "4 m/s", "8 m/s"],
            answer: 1,
            explain: "v = akar(2 x 10 x 0,2) = akar(4) = 2 m/s.",
          },
          {
            q: "Tabung pitot pada pesawat berfungsi mengukur?",
            options: [
              "Ketinggian terbang",
              "Kecepatan udara terhadap pesawat",
              "Suhu mesin",
              "Berat pesawat",
            ],
            answer: 1,
            explain: "Tabung pitot mengukur kecepatan dari beda tekanan total dan tekanan statis.",
          },
          {
            q: "Mengapa penyemprot bisa menyedot cairan naik ke pipa?",
            options: [
              "Cairan menjadi ringan",
              "Aliran udara cepat menurunkan tekanan di mulut pipa",
              "Gravitasi membalik",
              "Cairan memuai",
            ],
            answer: 1,
            explain: "Aliran cepat menurunkan tekanan, lalu tekanan atmosfer mendorong cairan naik.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gaya-angkat-sayap",
    levelId: "fluida-dinamis",
    order: 4,
    title: "Gaya Angkat Sayap Pesawat",
    summary:
      "Mengapa pesawat lepas landas melawan arah angin, dan kenapa gaya angkat melonjak saat kecepatan digandakan? Kita amati sayap dulu, baru rumus gaya angkat muncul.",
    durationMin: 14,
    tags: ["fluida", "bernoulli", "gaya angkat", "sayap pesawat"],
    blocks: [
      {
        type: "paragraph",
        html: "Pesawat penumpang seberat ratusan ton hanya perlu berlari cukup cepat di landasan sebelum mengangkasa dengan mulus. Sayapnya tidak mengepak, tidak ada mesin pendorong ke atas. Kita sudah tahu beda tekanan mengangkat sayap. Sekarang ayo lihat lebih dekat: apa yang menentukan <strong>besar</strong> gaya angkat, dan mengapa kecepatan begitu menentukan.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Bentuk Sayap dan Aliran Udara",
        caption: "Bentuk sayap dan kemiringannya mengatur beda kecepatan udara di atas dan bawah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Sayap pesawat (airfoil) dirancang agar udara mengalir lebih cepat di sisi atas daripada sisi bawah. Sesuai Bernoulli, tekanan di atas jadi lebih rendah dan tekanan di bawah lebih tinggi, lalu selisihnya mendorong sayap naik. Yang menarik: gaya angkat sebanding dengan <strong>kuadrat kecepatan</strong> pesawat. Menggandakan kecepatan membuat gaya angkat empat kali lebih besar. Itu sebabnya pesawat butuh kecepatan minimum tertentu agar gaya angkat menyamai beratnya dan bisa lepas landas.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Sudut serang dan luas sayap",
        html: "Selain kecepatan, gaya angkat dipengaruhi <strong>luas sayap</strong> dan <strong>sudut serang</strong>, yaitu kemiringan sayap terhadap arah datang udara. Memperbesar sudut serang menambah gaya angkat sampai batas tertentu. Jika terlalu curam, aliran udara terlepas dari sayap dan gaya angkat hilang mendadak, kondisi berbahaya yang disebut stall.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Gaya Angkat vs Kecepatan Pesawat",
        unit: "newton (N)",
        source: "hitungan F = 0,5 x rho x CL x A x v^2, dengan 0,5 x rho x CL x A = 12",
        note: "Gaya angkat tumbuh mengikuti kuadrat kecepatan. Saat kecepatan dari 30 menjadi 60 m/s (dua kali), gaya angkat melonjak empat kali, dari 10.800 menjadi 43.200 N.",
        data: [
          { label: "30 m/s", value: 10800, color: "#38bdf8" },
          { label: "40 m/s", value: 19200, color: "#22d3ee" },
          { label: "50 m/s", value: 30000, color: "#2dd4bf" },
          { label: "60 m/s", value: 43200, color: "#60a5fa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Tekanan udara di bawah sayap 102.000 Pa, di atas sayap 101.200 Pa. Luas total sayap 25 m^2. Berapa gaya angkatnya?",
        answer: 20000,
        tolerance: 100,
        suffix: " N",
        solution:
          "Beda tekanan = 102.000 - 101.200 = 800 Pa. Gaya angkat = beda tekanan x luas = 800 x 25 = <strong>20.000 N</strong>. Beda tekanan kecil dikali luas sayap besar menghasilkan gaya angkat besar.",
        hint: "Cari beda tekanan, lalu kalikan dengan luas sayap.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada kecepatan 30 m/s sebuah pesawat menghasilkan gaya angkat 10.800 N. Karena gaya angkat sebanding kuadrat kecepatan, berapa gaya angkat saat kecepatan 60 m/s?",
        answer: 43200,
        tolerance: 200,
        suffix: " N",
        solution:
          "Kecepatan menjadi 2 kali, jadi gaya angkat menjadi 2^2 = 4 kali: 10.800 x 4 = <strong>43.200 N</strong>. Kuadrat kecepatan membuat gaya angkat melonjak cepat.",
        hint: "Gaya angkat baru = gaya lama x (v_baru/v_lama)^2.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan tindakan berikut: MENAMBAH gaya angkat atau MENGURANGI gaya angkat (sebelum stall).",
        buckets: ["Menambah gaya angkat", "Mengurangi gaya angkat"],
        items: [
          { text: "Menambah kecepatan pesawat", bucket: "Menambah gaya angkat" },
          { text: "Memperbesar luas sayap (flap dibuka)", bucket: "Menambah gaya angkat" },
          { text: "Mengurangi kecepatan saat mendarat", bucket: "Mengurangi gaya angkat" },
          { text: "Menutup flap sehingga sayap menyempit", bucket: "Mengurangi gaya angkat" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Lepas Landas Melawan Arah Angin",
        html: "Pilot selalu berusaha lepas landas dan mendarat melawan arah angin, bukan searah. Alasannya gaya angkat bergantung pada kecepatan udara terhadap sayap, bukan kecepatan terhadap tanah. Saat pesawat bergerak melawan angin, udara yang melewati sayap menjadi lebih cepat, sehingga gaya angkat yang cukup tercapai pada kecepatan tanah yang lebih rendah. Pesawat bisa terangkat dengan landasan lebih pendek dan lebih aman. Inilah mengapa menara kontrol bandara selalu mengarahkan pesawat sesuai arah angin saat itu, dan mengapa landasan dirancang membentang searah angin dominan setempat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan. Gaya angkat dari beda tekanan: <strong>F = (P_bawah - P_atas) x A</strong>. Beda tekanannya sendiri lahir dari Bernoulli: P_bawah - P_atas = 0,5 x rho x (v_atas^2 - v_bawah^2). Digabung menjadi bentuk umum <strong>F = 0,5 x rho x CL x A x v^2</strong>, dengan CL koefisien angkat yang bergantung bentuk dan sudut serang sayap. Karena ada v^2, kecepatan adalah faktor paling menentukan.",
      },
      {
        type: "takeaways",
        items: [
          "Gaya angkat = beda tekanan atas-bawah dikali luas sayap: F = (P_bawah - P_atas) x A.",
          "Gaya angkat sebanding kuadrat kecepatan, jadi menggandakan laju memberi empat kali gaya.",
          "Luas sayap dan sudut serang ikut menentukan besar gaya angkat.",
          "Pesawat lepas landas melawan angin agar gaya angkat cukup pada kecepatan tanah rendah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Gaya angkat sayap sebanding dengan?",
            options: [
              "Kecepatan pesawat",
              "Kuadrat kecepatan pesawat",
              "Akar kecepatan pesawat",
              "Berat pesawat",
            ],
            answer: 1,
            explain: "F sebanding v^2, sehingga kecepatan menjadi faktor paling menentukan.",
          },
          {
            q: "Beda tekanan bawah-atas sayap 600 Pa, luas sayap 20 m^2. Gaya angkatnya?",
            options: ["1.200 N", "12.000 N", "120 N", "120.000 N"],
            answer: 1,
            explain: "F = 600 x 20 = 12.000 N.",
          },
          {
            q: "Kecepatan pesawat digandakan dari 40 ke 80 m/s. Gaya angkat menjadi?",
            options: ["2 kali", "3 kali", "4 kali", "Tetap"],
            answer: 2,
            explain: "Karena F sebanding v^2, menggandakan kecepatan memberi 2^2 = 4 kali gaya angkat.",
          },
          {
            q: "Mengapa pesawat lepas landas melawan arah angin?",
            options: [
              "Agar lebih hemat bahan bakar",
              "Agar kecepatan udara terhadap sayap lebih besar pada laju tanah rendah",
              "Agar tidak terbalik",
              "Agar mesin lebih dingin",
            ],
            answer: 1,
            explain: "Melawan angin menambah kecepatan udara terhadap sayap, gaya angkat cukup lebih awal.",
          },
          {
            q: "Apa yang terjadi jika sudut serang sayap terlalu curam?",
            options: [
              "Gaya angkat naik tanpa batas",
              "Aliran terlepas dan gaya angkat hilang mendadak (stall)",
              "Tekanan menjadi nol",
              "Pesawat melaju lebih cepat",
            ],
            answer: 1,
            explain: "Sudut serang berlebihan menyebabkan aliran terlepas dari sayap, terjadi stall.",
          },
        ],
      },
    ],
  },
];
