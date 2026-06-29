import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "hukum-boyle",
    levelId: "gas-ideal",
    order: 1,
    title: "Hukum Boyle: Tekanan dan Volume",
    summary:
      "Menutup ujung suntikan lalu menekannya terasa makin berat, dan penyelam harus waspada saat naik ke permukaan. Semua soal tekanan lawan volume. Kita uji dulu sebelum berumus.",
    durationMin: 13,
    tags: ["fisika", "termodinamika", "gas ideal", "hukum boyle"],
    blocks: [
      {
        type: "paragraph",
        html: "Tutup ujung sebuah suntikan dengan jari, lalu dorong pendorongnya. Awalnya ringan, tetapi makin kamu tekan, makin berat melawannya, padahal tidak ada gas yang keluar. Kamu sedang memperkecil <strong>volume</strong> gas, dan sebagai balasannya <strong>tekanannya</strong> naik. Ayo uji hubungan terbalik ini dulu sebelum menulis rumus rapinya.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Gas yang Ditekan dalam Ruang",
        caption: "Memperkecil ruang membuat molekul lebih sering menumbuk dinding, tekanan pun naik.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan gas dalam suntikan tertutup pada suhu tetap. Saat volume kamu jadikan setengah, molekul yang sama banyaknya kini berdesakan di ruang separuhnya, jadi mereka menumbuk dinding dua kali lebih sering: tekanan jadi dua kali lipat. Jadikan volume sepertiga, tekanan jadi tiga kali. Amati polanya: <strong>tekanan dan volume berbanding terbalik</strong>, hasil kalinya selalu tetap selama suhu dijaga.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Syarat: suhu tetap",
        html: "Hukum Boyle berlaku saat <strong>suhu dijaga tetap</strong> (proses isotermal) dan jumlah gas tidak berubah. Dalam keadaan ini, memperkecil volume selalu menaikkan tekanan, dan sebaliknya. Hubungannya berbanding terbalik: jika satu menjadi dua kali, yang lain menjadi setengah, sehingga hasil kali P dikali V selalu konstan.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Tekanan vs Volume Gas pada Suhu Tetap",
        unit: "kPa",
        source: "ilustrasi P·V = 120 (kPa·L)",
        note: "Setiap titik memenuhi P × V = 120. Saat volume mengecil, tekanan membesar berbanding terbalik, membentuk kurva melengkung khas Hukum Boyle.",
        data: [
          { label: "1 L", value: 120, color: "#f87171" },
          { label: "2 L", value: 60, color: "#fb923c" },
          { label: "3 L", value: 40, color: "#fbbf24" },
          { label: "4 L", value: 30, color: "#34d399" },
          { label: "6 L", value: 20, color: "#38bdf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Gas bertekanan 100 kPa menempati 6 L. Pada suhu tetap, gas ditekan menjadi 2 L. Berapa tekanannya sekarang (kPa)?",
        answer: 300,
        tolerance: 1,
        suffix: " kPa",
        solution:
          "Suhu tetap berarti Hukum Boyle: P₁V₁ = P₂V₂. Maka P₂ = P₁V₁/V₂ = (100 × 6)/2 = 600/2 = <strong>300 kPa</strong>. Volume menjadi sepertiga, tekanan menjadi tiga kali lipat.",
        hint: "Pada suhu tetap, P₁V₁ = P₂V₂.",
      },
      {
        type: "calcExercise",
        prompt:
          "Gas bertekanan 150 kPa dan volume 4 L ditekan pada suhu tetap hingga tekanannya 250 kPa. Berapa volume akhirnya (L)?",
        answer: 2.4,
        tolerance: 0.05,
        suffix: " L",
        solution:
          "Dari P₁V₁ = P₂V₂, maka V₂ = P₁V₁/P₂ = (150 × 4)/250 = 600/250 = <strong>2,4 L</strong>. Tekanan naik, jadi volume menyusut.",
        hint: "Susun ulang menjadi V₂ = P₁V₁ / P₂.",
      },
      {
        type: "classifyExercise",
        prompt: "Pada suhu tetap, kelompokkan tiap tindakan: tekanan gas naik atau turun.",
        buckets: ["Tekanan naik", "Tekanan turun"],
        items: [
          { text: "Memperkecil volume gas dalam suntikan", bucket: "Tekanan naik" },
          { text: "Membiarkan gas mengembang ke ruang lebih besar", bucket: "Tekanan turun" },
          { text: "Menekan pendorong suntikan tertutup", bucket: "Tekanan naik" },
          { text: "Menarik pendorong sehingga volume membesar", bucket: "Tekanan turun" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Penyelam dan Bahaya Naik Terlalu Cepat",
        html: "Penyelam scuba diajari untuk tidak menahan napas saat naik ke permukaan. Sebabnya Hukum Boyle: makin dalam, tekanan air makin besar dan menekan udara di paru-paru menjadi volume kecil. Saat naik, tekanan turun, sehingga udara di paru-paru <strong>memuai</strong>. Jika napas ditahan, paru-paru bisa robek karena gas mengembang tak tertahankan. Memahami hubungan terbalik tekanan dan volume di sini menyangkut keselamatan jiwa.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menguji polanya, Hukum Boyle ditulis padat: pada suhu tetap, <strong>P · V = konstan</strong>, atau untuk dua keadaan <strong>P₁V₁ = P₂V₂</strong>. Tekanan dan volume berbanding terbalik: jika satu dilipatkan, yang lain dibagi dengan angka yang sama. Hukum ini berlaku selama suhu dan jumlah gas dijaga tetap.",
      },
      {
        type: "takeaways",
        items: [
          "Hukum Boyle berlaku pada suhu tetap (proses isotermal).",
          "Tekanan dan volume berbanding terbalik: P·V = konstan.",
          "Rumus dua keadaan: P₁V₁ = P₂V₂.",
          "Memperkecil volume menaikkan tekanan, dan sebaliknya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum Boyle berlaku saat besaran mana yang dijaga tetap?",
            options: ["Tekanan", "Volume", "Suhu", "Massa jenis"],
            answer: 2,
            explain: "Hukum Boyle berlaku pada suhu tetap (isotermal).",
          },
          {
            q: "Pada suhu tetap, jika volume gas dijadikan setengah, tekanannya?",
            options: ["Jadi setengah", "Jadi dua kali lipat", "Tetap", "Jadi nol"],
            answer: 1,
            explain: "P·V tetap, jadi volume setengah berarti tekanan dua kali.",
          },
          {
            q: "Gas 200 kPa pada 3 L ditekan jadi 1 L (suhu tetap). Tekanannya?",
            options: ["600 kPa", "200 kPa", "67 kPa", "100 kPa"],
            answer: 0,
            explain: "P₂ = (200 × 3)/1 = 600 kPa.",
          },
          {
            q: "Hubungan tekanan dan volume pada Hukum Boyle adalah?",
            options: ["Berbanding lurus", "Berbanding terbalik", "Tidak berkaitan", "Selalu sama"],
            answer: 1,
            explain: "P dan V berbanding terbalik sehingga P·V konstan.",
          },
          {
            q: "Mengapa penyelam tidak boleh menahan napas saat naik?",
            options: [
              "Karena udara menyusut",
              "Karena tekanan turun sehingga udara paru-paru memuai",
              "Karena suhu naik",
              "Karena air masuk paru-paru",
            ],
            answer: 1,
            explain: "Tekanan turun saat naik, gas paru-paru memuai (Hukum Boyle), bisa melukai.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hukum-charles-gaylussac",
    levelId: "gas-ideal",
    order: 2,
    title: "Hukum Charles dan Gay-Lussac",
    summary:
      "Balon mengempis di kulkas, balon udara naik saat dipanaskan, dan panci presto siap meledak jika katupnya macet. Semua soal suhu gas. Kita amati dulu sebelum berumus.",
    durationMin: 14,
    tags: ["fisika", "termodinamika", "hukum charles", "gay-lussac"],
    blocks: [
      {
        type: "paragraph",
        html: "Masukkan balon yang ditiup penuh ke dalam kulkas, beberapa menit kemudian ia mengempis. Keluarkan, balon mengembang lagi. Balon udara raksasa naik justru karena udaranya dipanaskan. Panci presto bisa berbahaya jika katupnya macet saat dipanaskan. Tiga kisah, satu pelajaran: <strong>suhu gas mengubah volume atau tekanannya</strong>. Ayo amati polanya dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Suhu dan Gerak Molekul Gas",
        caption: "Memanaskan gas mempercepat molekulnya, mendorong dinding lebih kuat atau lebih jauh.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dua percobaan. Pertama, gas dalam balon lentur (tekanan tetap mengikuti udara luar): dipanaskan, volumenya membesar (Hukum Charles). Kedua, gas dalam tabung baja kaku (volume tetap): dipanaskan, tekanannya naik tanpa volume berubah (Hukum Gay-Lussac). Amati polanya: pada keadaan yang tepat, <strong>volume sebanding suhu mutlak</strong>, atau <strong>tekanan sebanding suhu mutlak</strong>. Kuncinya, suhu harus dipakai dalam kelvin.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua hukum bersaudara",
        html: "<strong>Hukum Charles</strong>: pada tekanan tetap, volume gas sebanding suhu mutlak, ditulis V/T tetap. <strong>Hukum Gay-Lussac</strong>: pada volume tetap, tekanan gas sebanding suhu mutlak, ditulis P/T tetap. Keduanya menuntut suhu dalam <strong>kelvin</strong>, sebab hanya skala mutlak yang membuat 'dua kali suhu' berarti benar-benar dua kali energi gerak molekul.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Volume Gas vs Suhu Mutlak pada Tekanan Tetap (Hukum Charles)",
        unit: "liter",
        source: "ilustrasi V/T = 0,01 L/K",
        note: "Garisnya lurus dan, jika ditarik mundur, menuju volume nol di 0 kelvin. Inilah salah satu petunjuk adanya nol mutlak. Setiap titik memenuhi V/T tetap.",
        data: [
          { label: "200 K", value: 2, color: "#38bdf8" },
          { label: "300 K", value: 3, color: "#34d399" },
          { label: "400 K", value: 4, color: "#fbbf24" },
          { label: "500 K", value: 5, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Balon berisi 3 L gas pada 300 K dipanaskan menjadi 360 K pada tekanan tetap. Berapa volume akhirnya (L)?",
        answer: 3.6,
        tolerance: 0.05,
        suffix: " L",
        solution:
          "Tekanan tetap berarti Hukum Charles: V₁/T₁ = V₂/T₂. Maka V₂ = V₁·T₂/T₁ = 3 × 360/300 = 3 × 1,2 = <strong>3,6 L</strong>. Suhu naik 20%, volume pun naik 20%. Suhu sudah dalam kelvin, jadi langsung dipakai.",
        hint: "Pada tekanan tetap, V₁/T₁ = V₂/T₂, suhu dalam kelvin.",
      },
      {
        type: "calcExercise",
        prompt:
          "Ban berisi gas bertekanan 200 kPa pada 300 K. Setelah perjalanan, suhunya naik ke 330 K dengan volume tetap. Berapa tekanannya sekarang (kPa)?",
        answer: 220,
        tolerance: 1,
        suffix: " kPa",
        solution:
          "Volume tetap berarti Hukum Gay-Lussac: P₁/T₁ = P₂/T₂. Maka P₂ = P₁·T₂/T₁ = 200 × 330/300 = 200 × 1,1 = <strong>220 kPa</strong>. Suhu naik 10%, tekanan naik 10%.",
        hint: "Pada volume tetap, P₁/T₁ = P₂/T₂, suhu dalam kelvin.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap hukum gas dengan besaran yang dijaga tetap dan hubungannya.",
        pairs: [
          { left: "Hukum Boyle (P·V tetap)", right: "Suhu tetap" },
          { left: "Hukum Charles (V/T tetap)", right: "Tekanan tetap" },
          { left: "Hukum Gay-Lussac (P/T tetap)", right: "Volume tetap" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Balon Udara Panas Bisa Terbang",
        html: "Balon udara panas naik karena pembakar memanaskan udara di dalamnya. Menurut Hukum Charles, pada tekanan tetap udara panas <strong>memuai</strong>, sehingga sebagian keluar dari mulut balon dan udara yang tersisa menjadi lebih renggang alias lebih ringan per satuan volume. Karena lebih ringan daripada udara dingin di sekitarnya, balon pun terangkat. Mematikan pembakar membuat udara mendingin, menyusut, dan balon turun. Hukum Charles langsung menjelaskan cara mengendalikan ketinggian.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati keduanya, rumus jadi padat. Hukum Charles (tekanan tetap): <strong>V₁/T₁ = V₂/T₂</strong>. Hukum Gay-Lussac (volume tetap): <strong>P₁/T₁ = P₂/T₂</strong>. Bersama Hukum Boyle, ketiganya menyatu jadi hukum gabungan <strong>P₁V₁/T₁ = P₂V₂/T₂</strong>. Ingat: suhu T selalu dalam kelvin.",
      },
      {
        type: "takeaways",
        items: [
          "Hukum Charles: pada tekanan tetap, V/T tetap (volume sebanding suhu mutlak).",
          "Hukum Gay-Lussac: pada volume tetap, P/T tetap (tekanan sebanding suhu mutlak).",
          "Gabungan ketiga hukum: P₁V₁/T₁ = P₂V₂/T₂.",
          "Suhu pada semua hukum gas wajib dalam kelvin.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Hukum Charles menjaga besaran mana tetap?",
            options: ["Suhu", "Tekanan", "Volume", "Massa jenis"],
            answer: 1,
            explain: "Hukum Charles berlaku pada tekanan tetap: V/T tetap.",
          },
          {
            q: "Gas 4 L pada 200 K dipanaskan ke 400 K (tekanan tetap). Volumenya?",
            options: ["8 L", "2 L", "4 L", "16 L"],
            answer: 0,
            explain: "V₂ = 4 × 400/200 = 8 L.",
          },
          {
            q: "Pada volume tetap, jika suhu mutlak gas digandakan, tekanannya?",
            options: ["Setengah", "Tetap", "Dua kali lipat", "Nol"],
            answer: 2,
            explain: "Gay-Lussac: P/T tetap, jadi suhu dua kali berarti tekanan dua kali.",
          },
          {
            q: "Suhu pada Hukum Charles dan Gay-Lussac harus dalam?",
            options: ["Celsius", "Kelvin", "Fahrenheit", "Joule"],
            answer: 1,
            explain: "Harus kelvin agar sebanding dengan energi gerak molekul.",
          },
          {
            q: "Mengapa balon udara panas bisa naik?",
            options: [
              "Udara panas menyusut",
              "Udara panas memuai sehingga lebih ringan per volume",
              "Tekanan udara hilang",
              "Balon menolak gravitasi",
            ],
            answer: 1,
            explain: "Hukum Charles: udara panas memuai, jadi lebih ringan dan terangkat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gas-ideal",
    levelId: "gas-ideal",
    order: 3,
    title: "Persamaan Gas Ideal PV = nRT",
    summary:
      "Ban motor mengeras di siang panas, balon mengembang saat dijemur. Tekanan, volume, dan suhu gas saling terkait. Kita satukan semua hukum gas jadi satu persamaan.",
    durationMin: 15,
    tags: ["fisika", "termodinamika", "gas ideal", "tekanan"],
    blocks: [
      {
        type: "paragraph",
        html: "Pagi hari ban motormu terasa pas, tapi setelah dipakai jauh di siang terik, ban jadi keras dan tekanannya naik. Balon yang dijemur ikut mengembang. Tiga besaran gas, yaitu <strong>tekanan</strong>, <strong>volume</strong>, dan <strong>suhu</strong>, selalu berkaitan. Ayo amati polanya dulu sebelum bertemu satu rumus rapi yang menyatukannya.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Gerak Molekul Gas",
        caption: "Tekanan gas lahir dari jutaan tumbukan molekul pada dinding wadah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Tekan ujung suntikan yang lubangnya kamu tutup dengan jari. Saat volume gas kamu perkecil, terasa makin sulit ditekan: tekanannya naik. Jika suntikan itu dipanaskan, gas mendorong lebih kuat lagi. Amati polanya: pada suhu tetap, perkecil volume maka tekanan naik (Boyle); panaskan gas maka tekanan atau volume naik (Gay-Lussac dan Charles). Semua pola ini akan menyatu jadi satu rumus.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa itu gas ideal",
        html: "<strong>Gas ideal</strong> adalah model gas yang molekulnya dianggap titik tanpa volume sendiri dan tanpa gaya tarik antar-molekul. Banyak gas nyata (udara, nitrogen) berperilaku mendekati ideal pada suhu kamar dan tekanan biasa. Tiga besarannya, P (tekanan), V (volume), dan T (suhu mutlak dalam kelvin), tidak bebas: mengubah satu mengubah yang lain.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Tekanan vs Volume Gas pada Suhu Tetap (Hukum Boyle)",
        unit: "kPa",
        source: "ilustrasi P·V = konstan",
        note: "Perhatikan: setiap titik memenuhi P × V = 200 (kPa·L). Saat volume diperkecil, tekanan naik berbanding terbalik. Inilah Hukum Boyle, satu kasus khusus dari PV = nRT.",
        data: [
          { label: "1 L", value: 200, color: "#f87171" },
          { label: "2 L", value: 100, color: "#fb923c" },
          { label: "4 L", value: 50, color: "#fbbf24" },
          { label: "5 L", value: 40, color: "#34d399" },
          { label: "8 L", value: 25, color: "#38bdf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Gas bertekanan 200 kPa menempati 2 L. Pada suhu tetap, gas ditekan menjadi 1 L. Berapa tekanannya sekarang (kPa)?",
        answer: 400,
        tolerance: 1,
        suffix: " kPa",
        solution:
          "Suhu tetap berarti Hukum Boyle: P₁V₁ = P₂V₂. Jadi P₂ = P₁V₁ / V₂ = (200 × 2) / 1 = <strong>400 kPa</strong>. Volume jadi setengah, tekanan jadi dua kali lipat.",
        hint: "Pada suhu tetap, P₁V₁ = P₂V₂.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebanyak 2 mol gas ideal bersuhu 300 K menempati volume 0,05 m³. Berapa tekanannya (Pa)? Pakai R = 8,314 J/mol·K.",
        answer: 99768,
        tolerance: 200,
        suffix: " Pa",
        solution:
          "Pakai PV = nRT, jadi P = nRT / V = (2 × 8,314 × 300) / 0,05 = 4988,4 / 0,05 = <strong>99.768 Pa</strong> (sekitar 100 kPa, hampir 1 atmosfer).",
        hint: "Susun PV = nRT menjadi P = nRT / V. Pastikan T dalam kelvin.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap hukum gas dengan besaran yang dijaga tetap.",
        pairs: [
          { left: "Hukum Boyle (P·V tetap)", right: "Suhu tetap" },
          { left: "Hukum Charles (V/T tetap)", right: "Tekanan tetap" },
          { left: "Hukum Gay-Lussac (P/T tetap)", right: "Volume tetap" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tekanan Ban Naik di Jalan Tol",
        html: "Pabrikan menyarankan mengukur tekanan ban saat dingin. Sebabnya: setelah melaju kencang, gesekan memanaskan ban, suhu gas di dalamnya naik, dan karena volumenya hampir tetap, tekanannya ikut naik (Hukum Gay-Lussac, P/T tetap). Mengisi ban sampai 'pas' saat panas berarti ban akan kurang tekanan saat dingin. Pemahaman <strong>PV = nRT</strong> langsung menjelaskan saran keselamatan ini.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah melihat semua pola, mereka menyatu dalam satu persamaan gas ideal: <strong>PV = nRT</strong>, dengan P tekanan (Pa), V volume (m³), n jumlah mol, R = 8,314 J/mol·K, dan T suhu mutlak (K). Hukum Boyle, Charles, dan Gay-Lussac hanyalah kasus khusus saat salah satu besaran dijaga tetap, dirangkum sebagai <strong>P₁V₁/T₁ = P₂V₂/T₂</strong>.",
      },
      {
        type: "takeaways",
        items: [
          "Tekanan, volume, dan suhu gas saling terkait, tidak bebas satu sama lain.",
          "Persamaan gas ideal menyatukan semuanya: PV = nRT.",
          "Hukum Boyle, Charles, Gay-Lussac adalah kasus khusus dengan satu besaran tetap.",
          "Suhu pada rumus gas harus selalu dalam kelvin (mutlak).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Persamaan gas ideal yang benar adalah?",
            options: ["PV = nRT", "P = mcΔT", "PV = ½mv²", "P = ρgh"],
            answer: 0,
            explain: "Persamaan gas ideal: PV = nRT.",
          },
          {
            q: "Pada suhu tetap, jika volume gas dijadikan setengah, tekanannya?",
            options: ["Jadi setengah", "Jadi dua kali lipat", "Tetap", "Jadi nol"],
            answer: 1,
            explain: "Hukum Boyle: P·V tetap, jadi volume setengah berarti tekanan dua kali.",
          },
          {
            q: "Suhu pada persamaan gas ideal harus dalam satuan?",
            options: ["Celsius", "Fahrenheit", "Kelvin", "Joule"],
            answer: 2,
            explain: "T harus suhu mutlak dalam kelvin.",
          },
          {
            q: "Apa nilai tetapan gas universal R?",
            options: ["8,314 J/mol·K", "9,8 m/s²", "5,67 × 10⁻⁸", "273 K"],
            answer: 0,
            explain: "Tetapan gas universal R = 8,314 J/mol·K.",
          },
          {
            q: "Mengapa tekanan ban naik setelah perjalanan jauh?",
            options: [
              "Karena udara bocor masuk",
              "Suhu gas naik sementara volume hampir tetap",
              "Karena ban menyusut",
              "Karena R berubah",
            ],
            answer: 1,
            explain: "Suhu naik, volume tetap, maka tekanan naik (P/T tetap).",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "teori-kinetik-gas",
    levelId: "gas-ideal",
    order: 4,
    title: "Teori Kinetik Gas",
    summary:
      "Bau parfum menyebar ke seluruh ruangan, dan helium membuat balon terbang sekaligus mengubah suara. Semua bermula dari molekul yang berlarian. Kita amati dulu sebelum berumus.",
    durationMin: 15,
    tags: ["fisika", "termodinamika", "teori kinetik", "suhu"],
    blocks: [
      {
        type: "paragraph",
        html: "Seseorang menyemprot parfum di sudut ruangan, dan beberapa saat kemudian kamu menciumnya dari seberang ruangan. Tidak ada yang mengipasinya ke arahmu. Molekul parfum bergerak sendiri, berlarian secepat ratusan meter per detik, menabrak molekul udara, sampai tersebar merata. Di balik tekanan dan suhu gas, ada <strong>jutaan molekul yang terus bergerak</strong>. Ayo amati dunia mikro ini dulu sebelum bertemu rumusnya.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Dunia Molekul yang Bergerak",
        caption: "Suhu sebenarnya adalah ukuran rata-rata energi gerak molekul-molekul gas.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan ribuan bola kecil memantul liar dalam kotak. Setiap kali sebuah bola menabrak dinding, ia memberi dorongan kecil. Jutaan tumbukan per detik bergabung menjadi <strong>tekanan</strong>. Sekarang panaskan kotaknya: bola-bola bergerak lebih cepat, menabrak lebih keras dan lebih sering, jadi tekanan naik. Amati: <strong>suhu adalah ukuran seberapa cepat molekul bergerak</strong>, dan molekul yang lebih ringan (helium) melesat jauh lebih cepat daripada yang berat pada suhu sama.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Suhu adalah energi gerak",
        html: "Teori kinetik menjelaskan asal-usul tekanan dan suhu dari gerak molekul. <strong>Tekanan</strong> lahir dari tumbukan molekul pada dinding. <strong>Suhu mutlak</strong> berbanding lurus dengan rata-rata energi kinetik molekul: makin panas, makin cepat molekul bergerak. Karena energi kinetik bergantung pada massa dan kecepatan, pada suhu sama molekul ringan bergerak lebih cepat agar energinya setara dengan molekul berat.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Laju Rata-rata (rms) Berbagai Gas pada 300 K",
        unit: "m/s",
        source: "dihitung dari v = akar(3RT/M), T = 300 K",
        note: "Pada suhu sama, molekul ringan melesat jauh lebih cepat. Hidrogen yang sangat ringan hampir lima kali lebih gesit daripada karbon dioksida yang berat. Nilai dihitung langsung dari rumus.",
        data: [
          { label: "H₂", value: 1934, color: "#38bdf8" },
          { label: "He", value: 1368, color: "#34d399" },
          { label: "N₂", value: 517, color: "#fbbf24" },
          { label: "O₂", value: 484, color: "#fb923c" },
          { label: "CO₂", value: 412, color: "#f87171" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa energi dalam total (joule) 2 mol gas ideal monoatomik pada 300 K? Pakai U = (3/2)·n·R·T dan R = 8,314 J/mol·K.",
        answer: 7483,
        tolerance: 10,
        suffix: " J",
        solution:
          "Energi dalam gas monoatomik U = (3/2)·n·R·T = 1,5 × 2 × 8,314 × 300 = 1,5 × 4988,4 = <strong>7482,6 J</strong>. Ini adalah jumlah energi gerak seluruh molekulnya. Suhu harus dalam kelvin.",
        hint: "Pakai U = (3/2)·n·R·T dengan n = 2, T = 300 K.",
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa laju rata-rata (rms) molekul helium pada 300 K (m/s)? Pakai v = akar(3RT/M), R = 8,314 J/mol·K, M helium = 0,004 kg/mol.",
        answer: 1368,
        tolerance: 10,
        suffix: " m/s",
        solution:
          "v = akar(3RT/M) = akar(3 × 8,314 × 300 / 0,004) = akar(7482,6 / 0,004) = akar(1.870.650) = <strong>1368 m/s</strong>. Sangat cepat, lebih dari 4900 km/jam, karena molekul helium ringan.",
        hint: "Hitung 3RT dulu, bagi dengan M (dalam kg/mol), lalu akarkan.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan teori kinetik: benar atau keliru.",
        buckets: ["Benar", "Keliru"],
        items: [
          { text: "Suhu mutlak sebanding dengan rata-rata energi kinetik molekul", bucket: "Benar" },
          { text: "Tekanan gas berasal dari tumbukan molekul pada dinding", bucket: "Benar" },
          { text: "Pada suhu sama, molekul ringan dan berat sama cepat", bucket: "Keliru" },
          { text: "Memanaskan gas mempercepat gerak molekulnya", bucket: "Benar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa Bumi Menahan Oksigen tapi Kehilangan Hidrogen",
        html: "Atmosfer Bumi kaya nitrogen dan oksigen, tetapi hampir tidak punya hidrogen bebas. Teori kinetik menjelaskannya: pada suhu yang sama, molekul hidrogen yang sangat ringan bergerak jauh lebih cepat daripada oksigen. Sebagian molekul hidrogen melaju melampaui kecepatan lepas Bumi dan kabur ke angkasa selama miliaran tahun, sedangkan oksigen yang lebih berat dan lebih lambat tetap tertahan gravitasi. Memahami <strong>laju molekul yang bergantung massa</strong> menjelaskan susunan udara yang kita hirup.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menyusuri dunia molekul, rumus kinetik jadi bermakna. Rata-rata energi kinetik per molekul: <strong>E<sub>k</sub> = (3/2)·k·T</strong>, dengan k tetapan Boltzmann 1,38 × 10⁻²³ J/K. Energi dalam gas monoatomik: <strong>U = (3/2)·n·R·T</strong>. Laju efektif molekul: <strong>v<sub>rms</sub> = akar(3RT/M)</strong>. Ketiganya menegaskan bahwa suhu mutlak adalah ukuran energi gerak molekul.",
      },
      {
        type: "takeaways",
        items: [
          "Tekanan gas berasal dari tumbukan molekul pada dinding wadah.",
          "Suhu mutlak sebanding dengan rata-rata energi kinetik molekul: Ek = (3/2)kT.",
          "Energi dalam gas monoatomik: U = (3/2)nRT.",
          "Pada suhu sama, molekul ringan bergerak lebih cepat: v rms = akar(3RT/M).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Menurut teori kinetik, tekanan gas berasal dari?",
            options: [
              "Gaya tarik antarmolekul",
              "Tumbukan molekul pada dinding wadah",
              "Berat molekul",
              "Warna gas",
            ],
            answer: 1,
            explain: "Tekanan adalah hasil jutaan tumbukan molekul pada dinding.",
          },
          {
            q: "Suhu mutlak gas sebanding dengan?",
            options: [
              "Jumlah molekul",
              "Rata-rata energi kinetik molekul",
              "Volume wadah",
              "Warna wadah",
            ],
            answer: 1,
            explain: "Suhu mutlak berbanding lurus dengan rata-rata energi kinetik molekul.",
          },
          {
            q: "Energi dalam gas monoatomik dirumuskan?",
            options: ["U = (3/2)nRT", "U = mcΔT", "U = PV", "U = ½kx²"],
            answer: 0,
            explain: "Gas monoatomik: U = (3/2)nRT.",
          },
          {
            q: "Pada suhu sama, molekul mana yang bergerak paling cepat?",
            options: ["CO₂ (berat)", "O₂", "N₂", "H₂ (ringan)"],
            answer: 3,
            explain: "Pada suhu sama, molekul paling ringan punya laju rms tertinggi.",
          },
          {
            q: "Mengapa Bumi kehilangan hidrogen tapi menahan oksigen?",
            options: [
              "Hidrogen beracun",
              "Hidrogen ringan dan cepat sehingga lolos dari gravitasi",
              "Oksigen tidak bergerak",
              "Hidrogen tidak ada di atmosfer",
            ],
            answer: 1,
            explain: "Molekul hidrogen ringan bergerak sangat cepat dan lolos ke angkasa.",
          },
        ],
      },
    ],
  },
];
