import type { Lesson } from "../../../types";

export const level5: Lesson[] = [
  // ============================================================
  {
    id: "gelombang-bunyi",
    levelId: "bunyi-doppler",
    order: 1,
    title: "Gelombang Bunyi",
    summary:
      "Apa beda nada tinggi dari nada rendah, dan suara keras dari suara pelan? Kita dengarkan dulu sebelum menamai besarannya.",
    durationMin: 13,
    tags: ["bunyi", "longitudinal", "nada", "frekuensi"],
    blocks: [
      {
        type: "paragraph",
        html: "Dekatkan tangan ke pengeras suara yang menyala: kamu merasakan udara bergetar. Bunyi adalah getaran yang merambat lewat udara sebagai rapatan dan renggangan. Suara seruling tinggi melengking, suara bedug rendah menggelegar; ada yang keras memekakkan, ada yang pelan berbisik. Sebelum menulis rumus, ayo dengarkan dulu apa yang membedakan nada dan kekerasan bunyi.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Udara yang Bergetar",
        caption: "Bunyi merambat sebagai rapatan dan renggangan udara.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dua hal yang bisa diubah dari suara. Pertama, seberapa <strong>sering</strong> udara bergetar: makin tinggi frekuensinya, makin <strong>tinggi nadanya</strong>. Kedua, seberapa <strong>kuat</strong> getarannya: makin besar amplitudonya, makin <strong>keras bunyinya</strong>. Rasakan dulu bahwa nada dan kekerasan adalah dua hal berbeda, diatur oleh frekuensi dan amplitudo.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tinggi nada, kekerasan, dan jangkauan dengar",
        html: "<strong>Frekuensi</strong> menentukan tinggi nada (pitch); <strong>amplitudo</strong> menentukan kekerasan (loudness). Telinga manusia mendengar <strong>20 Hz sampai 20.000 Hz</strong> (audiosonik). Di bawah 20 Hz disebut <strong>infrasonik</strong> (dirasakan gajah), di atas 20.000 Hz disebut <strong>ultrasonik</strong> (dipakai kelelawar dan USG).",
      },
      {
        type: "widget",
        widget: "SimulatorGelombang",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Frekuensi Beberapa Sumber Bunyi",
        unit: "Hz",
        source: "nilai khas frekuensi nada dan sumber bunyi",
        note: "Makin tinggi frekuensi, makin tinggi nada yang terdengar. Nilai-nilai ini adalah frekuensi khas tiap sumber.",
        data: [
          { label: "Dengung trafo (50 Hz)", value: 50, color: "#fb923c" },
          { label: "Nada A piano (440 Hz)", value: 440, color: "#f59e0b" },
          { label: "Peluit (2000 Hz)", value: 2000, color: "#f43f5e" },
          { label: "Batas dengar manusia (20000 Hz)", value: 20000, color: "#a855f7" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah garpu tala bergetar pada 440 Hz. Bunyi merambat 340 m/s di udara. Berapa panjang gelombang bunyinya? (gunakan λ = v/f)",
        answer: 0.77,
        tolerance: 0.02,
        suffix: " m",
        solution:
          "λ = v/f = 340/440 ≈ <strong>0,77 m</strong>. Nada yang lebih tinggi (frekuensi besar) memiliki panjang gelombang lebih pendek.",
        hint: "Bagi laju bunyi dengan frekuensi garpu tala.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap bunyi berdasarkan jangkauan frekuensinya.",
        buckets: ["Infrasonik (<20 Hz)", "Audiosonik (20-20.000 Hz)", "Ultrasonik (>20.000 Hz)"],
        items: [
          { text: "Getaran tanah 10 Hz sebelum gempa", bucket: "Infrasonik (<20 Hz)" },
          { text: "Percakapan manusia 300 Hz", bucket: "Audiosonik (20-20.000 Hz)" },
          { text: "Pemindai USG 2.000.000 Hz", bucket: "Ultrasonik (>20.000 Hz)" },
          { text: "Nada piano 440 Hz", bucket: "Audiosonik (20-20.000 Hz)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Lonceng dalam Toples Hampa",
        html: "Sebuah percobaan klasik: letakkan bel listrik yang berdering di dalam toples kaca, lalu pompa keluar udaranya. Saat udara makin tipis, deringnya makin pelan, dan saat hampir hampa, bel tampak bergetar tetapi <strong>tak terdengar sama sekali</strong>. Inilah bukti bahwa bunyi adalah gelombang mekanik: ia butuh medium seperti udara untuk merambat. Itu pula sebabnya di ruang angkasa yang hampa, ledakan bintang pun berlangsung dalam sunyi total, berbeda dari yang digambarkan film.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mendengarkan, besarannya pun dirangkum. Bunyi adalah gelombang <strong>longitudinal mekanik</strong>: butuh medium, tak bisa di ruang hampa. <strong>Frekuensi</strong> menentukan tinggi nada, <strong>amplitudo</strong> menentukan kekerasan. Panjang gelombangnya mengikuti <strong>λ = v/f</strong>, dengan v laju bunyi di medium itu.",
      },
      {
        type: "takeaways",
        items: [
          "Bunyi adalah gelombang longitudinal yang butuh medium (mekanik).",
          "Frekuensi menentukan tinggi nada; amplitudo menentukan kekerasan.",
          "Manusia mendengar 20 Hz sampai 20.000 Hz; di luar itu infrasonik dan ultrasonik.",
          "Panjang gelombang bunyi: λ = v/f.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bunyi termasuk gelombang...",
            options: ["Transversal", "Longitudinal", "Elektromagnetik", "Berdiri"],
            answer: 1,
            explain: "Bunyi merambat sebagai rapatan-renggangan, jadi longitudinal.",
          },
          {
            q: "Tinggi rendahnya nada ditentukan oleh...",
            options: ["Amplitudo", "Frekuensi", "Warna", "Suhu"],
            answer: 1,
            explain: "Frekuensi menentukan tinggi nada (pitch).",
          },
          {
            q: "Keras lemahnya bunyi ditentukan oleh...",
            options: ["Frekuensi", "Amplitudo", "Panjang tali", "Massa udara"],
            answer: 1,
            explain: "Amplitudo menentukan kekerasan (loudness).",
          },
          {
            q: "Jangkauan frekuensi yang bisa didengar manusia adalah...",
            options: ["0-20 Hz", "20-20.000 Hz", "20.000-40.000 Hz", "Semua frekuensi"],
            answer: 1,
            explain: "Audiosonik manusia 20 Hz sampai 20.000 Hz.",
          },
          {
            q: "Bel dalam toples hampa tak terdengar karena bunyi...",
            options: [
              "Terlalu pelan",
              "Butuh medium untuk merambat",
              "Berubah jadi cahaya",
              "Frekuensinya nol",
            ],
            answer: 1,
            explain: "Bunyi gelombang mekanik, perlu medium; di ruang hampa tak merambat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "cepat-rambat-bunyi",
    levelId: "bunyi-doppler",
    order: 2,
    title: "Cepat Rambat Bunyi",
    summary:
      "Mengapa menempelkan telinga ke rel membuat kereta 'terdengar' lebih dulu? Kita bandingkan dulu laju bunyi di berbagai medium sebelum rumusnya muncul.",
    durationMin: 13,
    tags: ["cepat-rambat", "bunyi", "medium", "suhu"],
    blocks: [
      {
        type: "paragraph",
        html: "Dalam film koboi, orang menempelkan telinga ke rel untuk mendeteksi kereta yang masih jauh. Mengapa rel besi 'membocorkan' suara kereta lebih cepat daripada udara? Ternyata bunyi melaju dengan kecepatan berbeda di tiap medium, dan bahkan berubah dengan suhu. Sebelum menulis rumus, ayo bandingkan dulu seberapa cepat bunyi di udara, air, dan baja.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Bunyi yang Berlomba di Tiap Medium",
        caption: "Bunyi melaju paling cepat di zat padat, paling lambat di gas.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan barisan orang berpegangan tangan menyampaikan dorongan. Kalau pegangannya erat dan rapat (seperti partikel zat <strong>padat</strong>), dorongan menjalar cepat. Kalau renggang dan longgar (seperti <strong>gas</strong>), menjalarnya lambat. Karena itu bunyi paling cepat di baja, lebih lambat di air, dan paling lambat di udara. Di udara pun, makin panas makin cepat. Rasakan dulu pola ini.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa yang menentukan laju bunyi?",
        html: "Laju bunyi bergantung pada <strong>medium</strong>: paling cepat di zat padat (partikel rapat dan kaku), lebih lambat di cair, paling lambat di gas. Di udara, laju bunyi naik bersama <strong>suhu</strong>: kira-kira 340 m/s pada suhu kamar dan bertambah sekitar 0,6 m/s tiap kenaikan satu derajat celsius.",
      },
      {
        type: "widget",
        widget: "SimulatorGLBB",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Cepat Rambat Bunyi di Berbagai Medium",
        unit: "m/s",
        source: "nilai khas cepat rambat bunyi pada suhu kamar",
        note: "Bunyi melaju jauh lebih cepat di zat padat dan cair daripada di udara, karena partikelnya lebih rapat dan kaku.",
        data: [
          { label: "Udara (20°C)", value: 343, color: "#38bdf8" },
          { label: "Air", value: 1480, color: "#0ea5e9" },
          { label: "Kayu", value: 3300, color: "#f59e0b" },
          { label: "Baja", value: 5000, color: "#f43f5e" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Laju bunyi di udara dirumuskan v = 331 + 0,6·T (T dalam °C). Berapa laju bunyi pada suhu 25°C?",
        answer: 346,
        tolerance: 1,
        suffix: " m/s",
        solution:
          "v = 331 + 0,6 × 25 = 331 + 15 = <strong>346 m/s</strong>. Udara yang lebih panas membuat bunyi sedikit lebih cepat.",
        hint: "Kalikan 0,6 dengan suhu, lalu tambahkan 331.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kamu melihat kilat lalu mendengar guruh 5 sekon kemudian. Laju bunyi 340 m/s. Berapa jarak petir? (gunakan jarak = v·t)",
        answer: 1700,
        tolerance: 20,
        suffix: " m",
        solution:
          "jarak = v × t = 340 × 5 = <strong>1700 m</strong>. Cahaya kilat tiba nyaris seketika, jadi jeda 5 sekon itu hampir seluruhnya waktu tempuh bunyi.",
        hint: "Kalikan laju bunyi dengan selang waktu.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan, manakah yang membuat bunyi merambat lebih cepat dan mana lebih lambat.",
        buckets: ["Bunyi lebih cepat", "Bunyi lebih lambat"],
        items: [
          { text: "Merambat lewat rel baja", bucket: "Bunyi lebih cepat" },
          { text: "Merambat lewat udara dingin", bucket: "Bunyi lebih lambat" },
          { text: "Merambat lewat air laut", bucket: "Bunyi lebih cepat" },
          { text: "Merambat lewat udara di puncak gunung yang dingin", bucket: "Bunyi lebih lambat" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Telinga di Rel dan Suara Bawah Air",
        html: "Menempelkan telinga ke rel benar-benar bekerja: bunyi kereta merambat di baja sekitar 5.000 m/s, hampir 15 kali lebih cepat daripada di udara, sehingga tiba lebih dulu lewat rel. Paus dan lumba-lumba memanfaatkan hal serupa di laut: bunyi merambat sekitar 1.480 m/s di air, jauh lebih cepat dan lebih jauh daripada di udara, memungkinkan mereka 'mengobrol' antarkawanan yang terpisah puluhan kilometer. Medium yang lebih rapat dan kaku selalu menjadi jalur cepat bagi bunyi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah membandingkan, rumus pun dirangkum. Laju bunyi bergantung medium: <strong>v(padat) > v(cair) > v(gas)</strong>. Di udara, ketergantungan suhunya: <strong>v = 331 + 0,6·T</strong> (T dalam °C). Untuk jarak dari selang waktu: <strong>jarak = v·t</strong>. Ingat, v inilah yang dipakai dalam v = fλ untuk bunyi.",
      },
      {
        type: "takeaways",
        items: [
          "Laju bunyi paling cepat di zat padat, paling lambat di gas.",
          "Di udara, laju bunyi naik dengan suhu: v = 331 + 0,6·T.",
          "Pada suhu kamar, laju bunyi di udara sekitar 340 m/s.",
          "Jarak sumber bunyi dari selang waktu: jarak = v·t.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bunyi merambat paling cepat di medium...",
            options: ["Gas", "Cair", "Padat", "Ruang hampa"],
            answer: 2,
            explain: "Partikel zat padat rapat dan kaku, sehingga bunyi paling cepat.",
          },
          {
            q: "Di udara, jika suhu naik maka laju bunyi...",
            options: ["Turun", "Naik", "Tetap", "Nol"],
            answer: 1,
            explain: "v = 331 + 0,6·T, laju naik bersama suhu.",
          },
          {
            q: "Laju bunyi di udara pada 25°C (v = 331 + 0,6·T) adalah...",
            options: ["331 m/s", "346 m/s", "340 m/s", "356 m/s"],
            answer: 1,
            explain: "v = 331 + 0,6 × 25 = 346 m/s.",
          },
          {
            q: "Guruh terdengar 3 s setelah kilat (v = 340 m/s). Jarak petir...",
            options: ["340 m", "1020 m", "113 m", "680 m"],
            answer: 1,
            explain: "jarak = v·t = 340 × 3 = 1020 m.",
          },
          {
            q: "Menempelkan telinga ke rel mendeteksi kereta lebih dulu karena...",
            options: [
              "Baja meredam bunyi",
              "Bunyi lebih cepat di baja daripada di udara",
              "Rel memantulkan cahaya",
              "Suhu rel tinggi",
            ],
            answer: 1,
            explain: "Bunyi di baja sekitar 5.000 m/s, jauh lebih cepat dari udara.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "resonansi-dawai-pipa",
    levelId: "bunyi-doppler",
    order: 3,
    title: "Resonansi Dawai dan Pipa Organa",
    summary:
      "Mengapa seruling dan klarinet berukuran mirip tapi bernada beda? Kita amati dulu pola gelombang di dalam pipa sebelum rumusnya muncul.",
    durationMin: 14,
    tags: ["pipa-organa", "dawai", "resonansi", "harmonik"],
    blocks: [
      {
        type: "paragraph",
        html: "Tiup ujung botol kosong, terdengar nada rendah; isi sedikit air, nadanya naik. Petik dawai gitar, lalu tiup seruling: keduanya menghasilkan nada lewat gelombang berdiri, satu pada tali, satu pada kolom udara. Anehnya, pipa yang terbuka kedua ujungnya dan yang tertutup satu ujung bernada berbeda meski sama panjang. Sebelum menulis rumus, ayo amati dulu pola gelombang di dalamnya.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Kolom Udara yang Bernyanyi",
        caption: "Gelombang berdiri pada kolom udara menentukan nada pipa.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan kolom udara dalam pipa. Di ujung yang <strong>terbuka</strong>, udara bebas bergetar, jadi di situ terbentuk <strong>perut</strong>. Di ujung yang <strong>tertutup</strong>, udara tak bisa bergerak, jadi di situ terbentuk <strong>simpul</strong>. Pola simpul-perut yang berbeda inilah yang membuat pipa tertutup dan pipa terbuka bernada berbeda. Rasakan dulu syarat ujung ini sebelum menghitung.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Pipa terbuka, pipa tertutup, dan dawai",
        html: "<strong>Dawai</strong> dan <strong>pipa terbuka</strong> (dua ujung bebas) menghasilkan semua harmonik: f, 2f, 3f, ... <strong>Pipa tertutup</strong> (satu ujung tertutup) hanya menghasilkan harmonik <strong>ganjil</strong>: f, 3f, 5f, ... Akibatnya, pada panjang yang sama, pipa tertutup bernada dasar satu oktaf lebih rendah dari pipa terbuka.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Harmonik Pipa Tertutup (nada dasar 170 Hz)",
        unit: "Hz",
        source: "perhitungan fn = n · f₁ dengan n ganjil saja, pipa tertutup",
        note: "Pipa tertutup hanya menghasilkan harmonik ganjil: 1×, 3×, 5×, 7×. Harmonik genap tidak muncul.",
        data: [
          { label: "Harmonik 1 (170 Hz)", value: 170, color: "#fb923c" },
          { label: "Harmonik 3 (510 Hz)", value: 510, color: "#f59e0b" },
          { label: "Harmonik 5 (850 Hz)", value: 850, color: "#f43f5e" },
          { label: "Harmonik 7 (1190 Hz)", value: 1190, color: "#a855f7" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah pipa organa terbuka sepanjang 0,5 m. Laju bunyi 340 m/s. Berapa frekuensi nada dasarnya? (gunakan f₁ = v/2L)",
        answer: 340,
        tolerance: 2,
        suffix: " Hz",
        solution:
          "Pipa terbuka: f₁ = v/(2L) = 340/(2 × 0,5) = 340/1 = <strong>340 Hz</strong>. Sama polanya dengan dawai terikat dua ujung.",
        hint: "Bagi laju bunyi dengan dua kali panjang pipa.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pipa organa tertutup sepanjang 0,5 m dengan laju bunyi 340 m/s. Berapa frekuensi nada dasarnya? (gunakan f₁ = v/4L)",
        answer: 170,
        tolerance: 2,
        suffix: " Hz",
        solution:
          "Pipa tertutup: f₁ = v/(4L) = 340/(4 × 0,5) = 340/2 = <strong>170 Hz</strong>. Pada panjang sama, pipa tertutup bernada dasar setengah dari pipa terbuka (satu oktaf lebih rendah).",
        hint: "Bagi laju bunyi dengan empat kali panjang pipa.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan ke pipa terbuka atau pipa tertutup.",
        buckets: ["Pipa terbuka", "Pipa tertutup"],
        items: [
          { text: "Menghasilkan semua harmonik (f, 2f, 3f, ...)", bucket: "Pipa terbuka" },
          { text: "Hanya harmonik ganjil (f, 3f, 5f, ...)", bucket: "Pipa tertutup" },
          { text: "Nada dasar f₁ = v/2L", bucket: "Pipa terbuka" },
          { text: "Nada dasar f₁ = v/4L", bucket: "Pipa tertutup" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Seruling, Klarinet, dan Pipa Orgel Gereja",
        html: "Seruling berperilaku seperti <strong>pipa terbuka</strong>: kedua ujungnya efektif terbuka, sehingga menghasilkan deret harmonik lengkap dan suaranya cerah. Klarinet berperilaku seperti <strong>pipa tertutup</strong> di ujung corongnya, sehingga hanya menghasilkan harmonik ganjil dan nada dasarnya satu oktaf lebih rendah dari seruling sepanjang itu, memberinya warna suara yang lebih bulat. Orgel gereja menggabungkan ratusan pipa terbuka dan tertutup berbagai panjang, masing-masing disetel lewat rumus yang sama, untuk menjangkau nada dari yang menggelegar sampai melengking.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati pola ujungnya, rumus pun lahir. <strong>Dawai dan pipa terbuka</strong>: fn = n·v/(2L), dengan n = 1, 2, 3, ... (semua harmonik). <strong>Pipa tertutup</strong>: fn = n·v/(4L), dengan n = 1, 3, 5, ... (hanya ganjil). Ujung terbuka selalu perut, ujung tertutup selalu simpul, dan itulah yang mengatur harmonik mana yang boleh muncul.",
      },
      {
        type: "takeaways",
        items: [
          "Ujung terbuka pipa adalah perut; ujung tertutup adalah simpul.",
          "Dawai dan pipa terbuka: fn = n·v/(2L), semua harmonik.",
          "Pipa tertutup: fn = n·v/(4L), hanya harmonik ganjil.",
          "Pada panjang sama, pipa tertutup bernada dasar satu oktaf lebih rendah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada ujung pipa yang tertutup terbentuk...",
            options: ["Perut", "Simpul", "Dua perut", "Tidak ada pola"],
            answer: 1,
            explain: "Udara tak bisa bergerak di ujung tertutup, jadi terbentuk simpul.",
          },
          {
            q: "Nada dasar pipa organa terbuka dirumuskan...",
            options: ["f₁ = v/4L", "f₁ = v/2L", "f₁ = 2vL", "f₁ = v·L"],
            answer: 1,
            explain: "Pipa terbuka: f₁ = v/(2L), sama seperti dawai dua ujung.",
          },
          {
            q: "Pipa tertutup hanya menghasilkan harmonik...",
            options: ["Genap", "Ganjil", "Semua", "Tidak ada"],
            answer: 1,
            explain: "Pipa tertutup hanya menghasilkan harmonik ganjil: f, 3f, 5f, ...",
          },
          {
            q: "Pipa tertutup 0,5 m, v = 340 m/s, nada dasarnya...",
            options: ["340 Hz", "170 Hz", "85 Hz", "680 Hz"],
            answer: 1,
            explain: "f₁ = v/(4L) = 340/2 = 170 Hz.",
          },
          {
            q: "Pada panjang sama, nada dasar pipa tertutup dibanding pipa terbuka...",
            options: [
              "Lebih tinggi",
              "Lebih rendah (satu oktaf)",
              "Sama",
              "Tidak berbunyi",
            ],
            answer: 1,
            explain: "v/4L setengah dari v/2L, jadi satu oktaf lebih rendah.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "efek-doppler",
    levelId: "bunyi-doppler",
    order: 4,
    title: "Efek Doppler",
    summary:
      "Mengapa sirene ambulans terdengar melengking saat mendekat lalu merendah saat menjauh? Kita rasakan dulu, baru rumusnya lahir.",
    durationMin: 13,
    tags: ["doppler", "bunyi", "frekuensi", "gelombang"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah ambulans melintas. Saat mendekat, sirenenya terdengar tinggi dan melengking; begitu lewat dan menjauh, nadanya tiba-tiba merendah. Padahal sopir ambulans mendengar nada yang sama sepanjang waktu. Mengapa pendengar di pinggir jalan mendengar perubahan ini? Ayo rasakan dulu fenomenanya sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Sirene yang Melintas",
        caption: "Gerakan sumber memampatkan dan meregangkan gelombang bunyi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan sumber bunyi bergerak ke arahmu. Tiap puncak gelombang berikutnya dipancarkan dari posisi yang lebih dekat, sehingga puncak-puncak itu jadi <strong>rapat</strong>: panjang gelombang memendek, frekuensi yang kamu dengar naik. Saat sumber menjauh, sebaliknya, puncak meregang: frekuensi turun. Rasakan dulu logika 'merapat-meregang' ini.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Inti efek Doppler",
        html: "<strong>Efek Doppler</strong> adalah perubahan frekuensi yang didengar akibat gerak relatif antara sumber dan pendengar. Mendekat berarti frekuensi naik (nada tinggi), menjauh berarti frekuensi turun (nada rendah).",
      },
      {
        type: "widget",
        widget: "SimulatorGelombang",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Frekuensi Sirene yang Didengar (sumber 1000 Hz, laju 30 m/s)",
        unit: "Hz",
        source: "perhitungan efek Doppler, laju bunyi 340 m/s",
        note: "Sumber yang sama (1000 Hz) terdengar lebih tinggi saat mendekat dan lebih rendah saat menjauh.",
        data: [
          { label: "Mendekat", value: 1097, color: "#f43f5e" },
          { label: "Diam", value: 1000, color: "#f59e0b" },
          { label: "Menjauh", value: 919, color: "#38bdf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sirene 1000 Hz mendekati pendengar diam dengan laju 30 m/s. Laju bunyi 340 m/s. Berapa frekuensi yang didengar? (gunakan f' = f·v/(v−vs))",
        answer: 1097,
        tolerance: 5,
        suffix: " Hz",
        solution:
          "f' = f × v/(v − vs) = 1000 × 340/(340 − 30) = 1000 × 340/310 ≈ <strong>1097 Hz</strong>. Karena sumber mendekat, penyebut mengecil sehingga frekuensi yang didengar lebih tinggi dari 1000 Hz.",
        hint: "Saat mendekat, bagi dengan (v − vs) yang lebih kecil dari v.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan, pada tiap situasi apakah frekuensi yang didengar naik atau turun.",
        buckets: ["Frekuensi naik", "Frekuensi turun"],
        items: [
          { text: "Ambulans mendekati kita", bucket: "Frekuensi naik" },
          { text: "Ambulans menjauhi kita", bucket: "Frekuensi turun" },
          { text: "Kita berlari menuju klakson kereta diam", bucket: "Frekuensi naik" },
          { text: "Kereta menjauh meninggalkan stasiun", bucket: "Frekuensi turun" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Radar Kecepatan dan Alam Semesta yang Mengembang",
        html: "Polisi mengukur kecepatan mobil dengan radar Doppler: gelombang yang dipantulkan mobil yang mendekat kembali dengan frekuensi lebih tinggi, dan selisihnya memberi tahu seberapa cepat mobil melaju. Pada skala kosmik, astronom mengamati cahaya galaksi jauh bergeser ke frekuensi lebih rendah (pergeseran merah), tanda bahwa galaksi-galaksi itu menjauh, sebuah bukti bahwa alam semesta mengembang. Satu prinsip yang sama, dari tilang sampai kosmologi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan fenomenanya, rumus pun muncul. Untuk pendengar diam dan sumber bergerak: <strong>f' = f · v/(v ∓ vs)</strong>. Pakai tanda <strong>minus</strong> saat sumber <strong>mendekat</strong> (penyebut kecil, frekuensi naik) dan <strong>plus</strong> saat <strong>menjauh</strong> (penyebut besar, frekuensi turun). Di sini v laju bunyi dan vs laju sumber.",
      },
      {
        type: "takeaways",
        items: [
          "Efek Doppler: frekuensi yang didengar berubah akibat gerak relatif sumber dan pendengar.",
          "Sumber mendekat membuat frekuensi naik (nada tinggi).",
          "Sumber menjauh membuat frekuensi turun (nada rendah).",
          "Rumus f' = f·v/(v∓vs): minus saat mendekat, plus saat menjauh.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Saat ambulans mendekat, frekuensi sirene yang kita dengar...",
            options: ["Naik", "Turun", "Tetap", "Nol"],
            answer: 0,
            explain: "Mendekat berarti gelombang memampat, frekuensi naik.",
          },
          {
            q: "Efek Doppler disebabkan oleh...",
            options: [
              "Perubahan suhu",
              "Gerak relatif sumber dan pendengar",
              "Warna sumber",
              "Berat sumber",
            ],
            answer: 1,
            explain: "Doppler muncul dari gerak relatif antara sumber dan pendengar.",
          },
          {
            q: "Dalam rumus f' = f·v/(v∓vs), tanda untuk sumber yang menjauh adalah...",
            options: ["Minus", "Plus", "Kali", "Bagi dua"],
            answer: 1,
            explain: "Menjauh memakai tanda plus, sehingga penyebut membesar dan f' turun.",
          },
          {
            q: "Pergeseran merah cahaya galaksi jauh menandakan galaksi itu...",
            options: ["Mendekat", "Menjauh", "Diam", "Memanas"],
            answer: 1,
            explain: "Frekuensi turun (geser merah) menandakan sumber menjauh.",
          },
          {
            q: "Sirene 1000 Hz mendekat dengan laju 30 m/s (v = 340 m/s) terdengar sekitar...",
            options: ["919 Hz", "1000 Hz", "1097 Hz", "1340 Hz"],
            answer: 2,
            explain: "f' = 1000 × 340/310 ≈ 1097 Hz.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "intensitas-taraf-intensitas",
    levelId: "bunyi-doppler",
    order: 5,
    title: "Intensitas dan Taraf Intensitas",
    summary:
      "Mengapa kekerasan suara diukur dalam desibel, bukan watt biasa? Kita rasakan dulu telinga kita sebelum bertemu rumus logaritma.",
    durationMin: 14,
    tags: ["intensitas", "taraf-intensitas", "desibel", "bunyi"],
    blocks: [
      {
        type: "paragraph",
        html: "Bisikan, percakapan, lalu lintas, konser, mesin jet: tiap lompatan terasa 'sekian kali lebih keras', padahal energinya melonjak ribuan hingga jutaan kali. Telinga kita tidak menambah, melainkan mengalikan. Karena itu kekerasan diukur dalam <strong>desibel</strong>, bukan watt biasa. Sebelum menulis rumus logaritma, ayo rasakan dulu mengapa pendengaran kita bekerja secara berlipat.",
      },
      {
        type: "video",
        comp: "GelombangFisika",
        title: "Video: Dari Bisikan ke Jet",
        caption: "Energi bunyi melonjak berlipat, tetapi telinga merasakannya bertahap.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan satu sumber bunyi memancar ke segala arah. Makin jauh, energinya tersebar ke permukaan bola yang makin luas, sehingga <strong>intensitas</strong> (energi per luas) mengecil. Karena luas bola sebanding kuadrat jarak, menggandakan jarak membuat intensitas tinggal <strong>seperempat</strong>. Lalu untuk kekerasan yang kita rasakan, tiap lipat sepuluh intensitas terasa sebagai langkah yang setara. Rasakan dulu dua gagasan ini: penyebaran dan perlipatan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Intensitas dan taraf intensitas",
        html: "<strong>Intensitas (I)</strong> adalah daya bunyi per satuan luas, dalam W/m²; ia mengecil mengikuti 1/r² terhadap jarak. <strong>Taraf intensitas (TI)</strong> mengubah rentang yang sangat lebar itu menjadi skala <strong>desibel (dB)</strong> yang nyaman, dengan acuan ambang dengar I₀ = 10⁻¹² W/m².",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Taraf Intensitas Beberapa Bunyi Sehari-hari",
        unit: "dB",
        source: "nilai khas taraf intensitas bunyi lingkungan",
        note: "Tiap kenaikan 10 dB berarti intensitas sepuluh kali lipat. Di atas sekitar 85 dB, paparan lama bisa merusak pendengaran.",
        data: [
          { label: "Bisikan", value: 30, color: "#22c55e" },
          { label: "Percakapan", value: 60, color: "#f59e0b" },
          { label: "Lalu lintas ramai", value: 80, color: "#fb923c" },
          { label: "Konser musik", value: 110, color: "#f43f5e" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah bunyi memiliki intensitas I = 10⁻⁶ W/m². Dengan I₀ = 10⁻¹² W/m², berapa taraf intensitasnya? (gunakan TI = 10 log(I/I₀))",
        answer: 60,
        tolerance: 1,
        suffix: " dB",
        solution:
          "I/I₀ = 10⁻⁶/10⁻¹² = 10⁶. Maka TI = 10 × log(10⁶) = 10 × 6 = <strong>60 dB</strong>, setara percakapan biasa.",
        hint: "Bagi I dengan I₀, ambil logaritmanya (pangkat 10-nya), lalu kali 10.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jika intensitas bunyi naik 100 kali lipat, berapa kenaikan taraf intensitasnya? (gunakan ΔTI = 10 log(100))",
        answer: 20,
        tolerance: 0.5,
        suffix: " dB",
        solution:
          "ΔTI = 10 × log(100) = 10 × 2 = <strong>20 dB</strong>. Intensitas 100 kali lipat hanya menambah 20 dB, inilah kenyamanan skala logaritma.",
        hint: "log(100) = 2, lalu kalikan 10.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan sumber bunyi dengan taraf intensitas khasnya.",
        pairs: [
          { left: "Bisikan halus", right: "Sekitar 30 dB" },
          { left: "Percakapan biasa", right: "Sekitar 60 dB" },
          { left: "Lalu lintas ramai", right: "Sekitar 80 dB" },
          { left: "Konser musik keras", right: "Sekitar 110 dB" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Batas Aman Pendengaran dan Aturan Kebisingan Kerja",
        html: "Mengapa pekerja pabrik wajib memakai pelindung telinga? Paparan terus-menerus di atas sekitar <strong>85 dB</strong> dapat merusak sel rambut di telinga dalam secara permanen. Karena skalanya logaritma, naik dari 85 ke 95 dB berarti intensitasnya sepuluh kali lipat, dan batas waktu aman pun memendek drastis. Aturan keselamatan kerja memakai rumus taraf intensitas untuk menetapkan berapa lama seseorang boleh berada di lingkungan bising tertentu sebelum wajib istirahat atau memakai pelindung. Logaritma di sini bukan sekadar matematika, melainkan penjaga pendengaran.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan pendengaran kita, rumus pun lahir. <strong>Intensitas: I = P/(4πr²)</strong>, sehingga I sebanding 1/r². <strong>Taraf intensitas: TI = 10 log(I/I₀)</strong> dengan I₀ = 10⁻¹² W/m². Akibat logaritma, tiap intensitas sepuluh kali lipat menambah <strong>10 dB</strong>, dan menggandakan jarak (I jadi seperempat) menurunkan sekitar 6 dB.",
      },
      {
        type: "takeaways",
        items: [
          "Intensitas I = daya per luas (W/m²), mengecil mengikuti 1/r².",
          "Taraf intensitas mengubah rentang lebar jadi skala desibel: TI = 10 log(I/I₀).",
          "Tiap intensitas sepuluh kali lipat menambah 10 dB.",
          "Paparan di atas sekitar 85 dB dapat merusak pendengaran.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Intensitas bunyi didefinisikan sebagai...",
            options: [
              "Daya per satuan luas",
              "Frekuensi per detik",
              "Amplitudo kali periode",
              "Energi kali jarak",
            ],
            answer: 0,
            explain: "Intensitas adalah daya bunyi per satuan luas (W/m²).",
          },
          {
            q: "Jika jarak ke sumber digandakan, intensitas menjadi...",
            options: ["Setengah", "Seperempat", "Dua kali", "Tetap"],
            answer: 1,
            explain: "I sebanding 1/r², jadi jarak dua kali membuat I seperempat.",
          },
          {
            q: "Taraf intensitas dirumuskan...",
            options: [
              "TI = 10 log(I/I₀)",
              "TI = I/I₀",
              "TI = log(I·I₀)",
              "TI = 10 I·I₀",
            ],
            answer: 0,
            explain: "TI = 10 log(I/I₀) dalam desibel.",
          },
          {
            q: "Bunyi berintensitas 10⁻⁶ W/m² (I₀ = 10⁻¹²) memiliki taraf intensitas...",
            options: ["6 dB", "60 dB", "120 dB", "10 dB"],
            answer: 1,
            explain: "TI = 10 log(10⁶) = 60 dB.",
          },
          {
            q: "Intensitas naik 100 kali lipat menambah taraf intensitas sebesar...",
            options: ["2 dB", "10 dB", "20 dB", "100 dB"],
            answer: 2,
            explain: "ΔTI = 10 log(100) = 20 dB.",
          },
        ],
      },
    ],
  },
];
