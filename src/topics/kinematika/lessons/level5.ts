import type { Lesson } from "../../../types";

export const level5: Lesson[] = [
  // ============================================================
  {
    id: "besaran-sudut",
    levelId: "gerak-melingkar",
    order: 1,
    title: "Besaran Sudut",
    summary:
      "Gerak melingkar punya bahasa sendiri: sudut diukur dalam radian, dan kecepatan sudut menggantikan kecepatan biasa. Inilah perkakas dasar sebelum berputar.",
    durationMin: 13,
    tags: ["kinematika", "gerak-melingkar", "radian", "kecepatan-sudut"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat jarum jam berputar, kita tidak bertanya berapa meter ujungnya bergerak, melainkan berapa derajat ia berputar. Gerak melingkar punya bahasa sendiri: bukan jarak dan kecepatan biasa, melainkan sudut dan kecepatan sudut. Dan satuan sudut favorit fisika bukan derajat, melainkan radian. Mengapa? Ayo selidiki dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "BesaranSatuan",
        title: "Video: Mengukur Putaran dengan Radian",
        caption: "Radian menghubungkan sudut langsung dengan panjang busur dan jari-jari lingkaran.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan tali sepanjang jari-jari lingkaran kamu lengkungkan di sepanjang tepi lingkaran. Sudut yang terbentuk adalah <strong>1 radian</strong>. Satu putaran penuh berisi <strong>2π radian</strong> (sekitar 6,28), setara 360°. Radian terasa lebih alami karena <strong>panjang busur = jari-jari × sudut (s = r·θ)</strong>, hubungan yang langsung dan rapi tanpa angka konversi aneh.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Besaran dasar putaran",
        html: "<strong>Sudut tempuh (θ)</strong> dalam radian; satu putaran = 2π rad. <strong>Periode (T)</strong>: waktu satu putaran. <strong>Frekuensi (f)</strong> = 1/T. <strong>Kecepatan sudut (ω)</strong> = sudut per waktu = 2π/T = 2π·f.",
      },
      {
        type: "widget",
        widget: "SimulatorPi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Sudut Beberapa Pecahan Putaran dalam Radian",
        unit: "radian",
        source: "ilustrasi edukatif (1 putaran = 2π ≈ 6,28 rad)",
        note: "Seperempat putaran = π/2 ≈ 1,57 rad; setengah = π ≈ 3,14; penuh = 2π ≈ 6,28 rad.",
        data: [
          { label: "1/4 putaran", value: 1.57, color: "#fb923c" },
          { label: "1/2 putaran", value: 3.14, color: "#fb923c" },
          { label: "3/4 putaran", value: 4.71, color: "#fb923c" },
          { label: "1 putaran", value: 6.28, color: "#f97316" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah roda berputar 3 putaran penuh. Berapa sudut yang ditempuhnya dalam radian? (gunakan π ≈ 3,14)",
        answer: 18.84,
        tolerance: 0.1,
        suffix: " rad",
        solution:
          "Satu putaran = 2π rad. Tiga putaran = 3 × 2π = 6π = 6 × 3,14 = <strong>18,84 rad</strong>.",
        hint: "Kalikan jumlah putaran dengan 2π.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah benda berputar dengan periode 2 s. Berapa kecepatan sudutnya? (gunakan π ≈ 3,14)",
        answer: 3.14,
        tolerance: 0.05,
        suffix: " rad/s",
        solution:
          "Kecepatan sudut ω = 2π / T = (2 × 3,14) ÷ 2 = 6,28 ÷ 2 = <strong>3,14 rad/s</strong>. Inilah sudut yang disapu tiap detik.",
        hint: "Gunakan ω = 2π / T.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan besaran sudut dengan definisi atau rumusnya.",
        pairs: [
          { left: "Radian", right: "Sudut saat busur sama panjang dengan jari-jari" },
          { left: "Satu putaran penuh", right: "2π radian (360°)" },
          { left: "Kecepatan sudut (ω)", right: "ω = 2π / T" },
          { left: "Panjang busur", right: "s = r · θ" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Piringan Hitam dan Putaran per Menit",
        html: "Piringan hitam vinil diputar pada angka khas seperti <strong>33⅓ atau 45 putaran per menit (rpm)</strong>. Angka rpm ini sebenarnya adalah frekuensi putaran. Untuk menghitung fisikanya, teknisi mengubahnya menjadi <strong>kecepatan sudut</strong> dalam radian per detik: rpm dibagi 60 memberi putaran per detik (frekuensi), lalu dikali 2π memberi ω. Dengan ω yang tepat, jarum membaca alur pada kecepatan linear yang sesuai sehingga suara terdengar normal. Besaran sudut menerjemahkan 'putaran per menit' menjadi bahasa fisika yang bisa dihitung.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah memahami polanya, rumusnya muncul. Sudut dalam radian: <strong>satu putaran = 2π rad</strong>, dan <strong>panjang busur s = r·θ</strong>. Periode dan frekuensi: <strong>f = 1/T</strong>. Kecepatan sudut: <strong>ω = θ/t = 2π/T = 2π·f</strong>, satuannya rad/s. Inilah perkakas dasar yang dipakai seluruh gerak melingkar.",
      },
      {
        type: "takeaways",
        items: [
          "Sudut diukur dalam radian; satu putaran penuh = 2π rad = 360°.",
          "Panjang busur s = r·θ, hubungan langsung yang membuat radian alami.",
          "Frekuensi f = 1/T (putaran per detik), periode T waktu satu putaran.",
          "Kecepatan sudut ω = 2π/T = 2π·f, diukur dalam rad/s.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Satu putaran penuh setara dengan?",
            options: ["π rad", "2π rad", "π/2 rad", "360 rad"],
            answer: 1,
            explain: "Satu putaran penuh = 2π radian = 360°.",
          },
          {
            q: "Kecepatan sudut dirumuskan sebagai?",
            options: ["ω = 2π / T", "ω = T / 2π", "ω = v·r", "ω = r / T"],
            answer: 0,
            explain: "ω = 2π/T = 2π·f, sudut per satuan waktu.",
          },
          {
            q: "Roda berputar 2 putaran. Sudut tempuhnya (π ≈ 3,14)?",
            options: ["3,14 rad", "6,28 rad", "12,56 rad", "1,57 rad"],
            answer: 2,
            explain: "2 × 2π = 4π = 12,56 rad.",
          },
          {
            q: "Benda berputar dengan periode 4 s. Kecepatan sudutnya (π ≈ 3,14)?",
            options: ["1,57 rad/s", "3,14 rad/s", "6,28 rad/s", "0,5 rad/s"],
            answer: 0,
            explain: "ω = 2π/T = 6,28 ÷ 4 = 1,57 rad/s.",
          },
          {
            q: "Hubungan panjang busur, jari-jari, dan sudut adalah?",
            options: ["s = r / θ", "s = r · θ", "s = θ / r", "s = 2πr"],
            answer: 1,
            explain: "Panjang busur s = r·θ dengan θ dalam radian.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gerak-melingkar-beraturan",
    levelId: "gerak-melingkar",
    order: 2,
    title: "Gerak Melingkar Beraturan",
    summary:
      "Roda, satelit, dan komidi putar bergerak melingkar. Meski lajunya tetap, arahnya terus berubah, dan di sinilah kecepatan linear dan kecepatan sudut bertemu.",
    durationMin: 15,
    tags: ["kinematika", "gerak-melingkar", "GMB", "periode"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat mobil membelok tajam, tubuhmu seakan terdorong ke luar. Saat komidi putar berputar, kursi di tepi terasa melaju lebih kencang daripada yang dekat poros. Gerak melingkar punya keanehannya sendiri: lajunya bisa tetap, tetapi arahnya selalu berubah. Sebelum rumus, ayo rasakan dulu apa yang membuat benda tetap di lintasan lingkaran.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Berputar dengan Laju Tetap, Arah Berubah",
        caption: "Pada gerak melingkar beraturan, laju tetap tetapi arah kecepatan terus berubah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Naik komidi putar: kamu yang duduk di tepi terasa lebih kencang daripada teman yang dekat poros, padahal kalian berputar bersama dengan <strong>kecepatan sudut yang sama</strong>. Sebabnya, dalam satu putaran kamu menempuh lingkaran yang lebih besar. Makin jauh dari pusat (r besar), makin besar <strong>kecepatan linear v</strong>, meski ω-nya sama untuk semua.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Linear bertemu sudut",
        html: "Pada gerak melingkar beraturan (GMB), laju (besar v) tetap. Hubungan kecepatan linear dan sudut: <strong>v = ω·r</strong>. Titik dengan ω sama tetapi r lebih besar memiliki v lebih besar.",
      },
      {
        type: "widget",
        widget: "SimulatorKecepatan",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kecepatan Linear pada Jari-jari Berbeda (ω = 2 rad/s)",
        unit: "m/s",
        source: "ilustrasi edukatif",
        note: "Dengan kecepatan sudut sama, titik yang lebih jauh dari pusat melaju lebih cepat. Hubungannya v = ω·r, jadi makin besar r makin besar v.",
        data: [
          { label: "r = 1 m", value: 2, color: "#fb923c" },
          { label: "r = 2 m", value: 4, color: "#fb923c" },
          { label: "r = 3 m", value: 6, color: "#fb923c" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah roda berputar 120 putaran tiap menit. Berapa frekuensinya dalam hertz?",
        answer: 2,
        tolerance: 0.05,
        suffix: " Hz",
        solution:
          "Frekuensi adalah putaran per detik. 120 putaran per menit = 120 ÷ 60 = <strong>2 putaran per detik = 2 Hz</strong>. Periodenya T = 1/f = 0,5 s.",
        hint: "Bagi jumlah putaran per menit dengan 60.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah benda bergerak melingkar dengan jari-jari 0,5 m dan periode 1 s. Berapa kecepatan linearnya? (gunakan π ≈ 3,14)",
        answer: 3.14,
        tolerance: 0.05,
        suffix: " m/s",
        solution:
          "Kecepatan linear v = 2πr / T = (2 × 3,14 × 0,5) ÷ 1 = 3,14 ÷ 1 = <strong>3,14 m/s</strong>. Dalam satu periode, benda menempuh satu keliling lingkaran (2πr).",
        hint: "Jarak satu putaran = keliling = 2πr; bagi dengan periode T.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan besaran gerak melingkar dengan definisi atau rumusnya.",
        pairs: [
          { left: "Periode (T)", right: "Waktu untuk satu putaran penuh" },
          { left: "Frekuensi (f)", right: "f = 1 / T" },
          { left: "Kecepatan sudut (ω)", right: "ω = 2π / T" },
          { left: "Kecepatan linear (v)", right: "v = ω · r" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mesin Cuci dan Putaran Pengering",
        html: "Saat mode pengeringan, tabung mesin cuci berputar sangat cepat. Air terlempar keluar lewat lubang-lubang dinding tabung karena pakaian dan air sebenarnya 'ingin' bergerak lurus, tetapi dinding tabung menahan pakaian ke dalam. Air, yang tidak tertahan, melanjutkan gerak lurusnya dan keluar lewat lubang. Makin tinggi kecepatan sudut, makin besar kecepatan linear di tepi tabung (v = ω·r), sehingga pengeringan makin efektif. Fisika gerak melingkar bekerja di balik pakaian yang cepat kering.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah memahami polanya, rumus melingkar jadi masuk akal. <strong>f = 1/T</strong>, <strong>ω = 2π/T = 2π·f</strong>, dan <strong>v = 2πr/T = ω·r</strong>. Pada gerak melingkar beraturan, laju (v) tetap, kecepatan sudut (ω) sama untuk semua titik, tetapi kecepatan linear bergantung pada jari-jari: makin jauh dari pusat, makin cepat.",
      },
      {
        type: "takeaways",
        items: [
          "Periode T adalah waktu satu putaran; frekuensi f = 1/T.",
          "Kecepatan sudut ω = 2π/T sama untuk semua titik pada benda yang berputar.",
          "Kecepatan linear v = 2πr/T = ω·r, jadi titik lebih jauh melaju lebih cepat.",
          "Pada GMB laju tetap, tetapi arah kecepatan terus berubah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada gerak melingkar beraturan, yang tetap dan yang berubah adalah?",
            options: [
              "Laju berubah, arah tetap",
              "Laju tetap, arah berubah",
              "Keduanya tetap",
              "Keduanya berubah",
            ],
            answer: 1,
            explain: "Laju (besar kecepatan) tetap, tetapi arahnya terus berubah.",
          },
          {
            q: "Periode (T) adalah?",
            options: [
              "Jumlah putaran per detik",
              "Waktu untuk satu putaran penuh",
              "Jari-jari lingkaran",
              "Percepatan ke pusat",
            ],
            answer: 1,
            explain: "Periode = waktu menempuh satu putaran penuh.",
          },
          {
            q: "Roda berputar dengan periode 0,25 s. Frekuensinya?",
            options: ["0,25 Hz", "2 Hz", "4 Hz", "8 Hz"],
            answer: 2,
            explain: "f = 1/T = 1 / 0,25 = 4 Hz.",
          },
          {
            q: "Hubungan kecepatan linear dan kecepatan sudut adalah?",
            options: ["v = ω / r", "v = ω · r", "v = r / ω", "v = ω + r"],
            answer: 1,
            explain: "v = ω·r, jadi r lebih besar berarti v lebih besar.",
          },
          {
            q: "Dengan kecepatan sudut sama, titik yang lebih jauh dari pusat memiliki kecepatan linear?",
            options: ["Lebih kecil", "Sama", "Lebih besar", "Nol"],
            answer: 2,
            explain: "v = ω·r, jadi r lebih besar berarti v lebih besar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "percepatan-sentripetal",
    levelId: "gerak-melingkar",
    order: 3,
    title: "Percepatan Sentripetal",
    summary:
      "Benda yang berputar dengan laju tetap tetap mengalami percepatan, karena arahnya berubah. Percepatan ini selalu menuju pusat dan menjaga benda di lintasannya.",
    durationMin: 14,
    tags: ["kinematika", "gerak-melingkar", "sentripetal", "percepatan"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah benda berputar dengan laju yang sama persis dari awal sampai akhir. Apakah ia mengalami percepatan? Jawaban mengejutkan: ya. Walau lajunya tidak berubah sedikit pun, arah geraknya berubah terus, dan perubahan arah adalah perubahan kecepatan. Ke mana percepatan ini mengarah, dan apa yang menimbulkannya? Ayo selidiki dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Percepatan yang Selalu Menuju Pusat",
        caption: "Pada gerak melingkar, percepatan sentripetal mengarah ke pusat dan mengubah arah, bukan laju.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ikat benda pada tali lalu putar di atas kepala. Tanganmu harus terus <strong>menarik benda ke dalam</strong>; lepaskan tali, dan benda terlempar lurus menyinggung lingkaran. Tarikan tetap ke pusat itu menghasilkan <strong>percepatan sentripetal</strong>. Ia tidak mengubah laju benda, melainkan terus-menerus <strong>membelokkan arahnya</strong> agar tetap melingkar.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa ada percepatan",
        html: "Kecepatan adalah vektor (laju + arah). Pada gerak melingkar, arah berubah terus, jadi kecepatan berubah, jadi ada percepatan. Percepatan ini, <strong>percepatan sentripetal</strong>, selalu mengarah ke <strong>pusat lingkaran</strong>, tegak lurus terhadap kecepatan.",
      },
      {
        type: "widget",
        widget: "SimulatorPi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Percepatan Sentripetal vs Kecepatan (r = 2 m, a = v²/r)",
        unit: "m/s²",
        source: "ilustrasi edukatif",
        note: "Menggandakan laju dari 2 ke 4 m/s membuat percepatan sentripetal melonjak dari 2 ke 8 m/s², empat kali lipat, karena a bergantung pada kuadrat v.",
        data: [
          { label: "v = 2 m/s", value: 2, color: "#f59e0b" },
          { label: "v = 4 m/s", value: 8, color: "#f59e0b" },
          { label: "v = 6 m/s", value: 18, color: "#f59e0b" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah benda bergerak melingkar dengan laju 4 m/s pada jari-jari 2 m. Berapa percepatan sentripetalnya?",
        answer: 8,
        tolerance: 0.1,
        suffix: " m/s²",
        solution:
          "Percepatan sentripetal a = v² / r = 4² ÷ 2 = 16 ÷ 2 = <strong>8 m/s²</strong>, mengarah ke pusat lingkaran.",
        hint: "Gunakan a = v² / r.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah benda berputar dengan kecepatan sudut 3 rad/s pada jari-jari 2 m. Berapa percepatan sentripetalnya? Gunakan a = ω²·r.",
        answer: 18,
        tolerance: 0.1,
        suffix: " m/s²",
        solution:
          "a = ω²·r = 3² × 2 = 9 × 2 = <strong>18 m/s²</strong>. Bentuk ini setara dengan a = v²/r karena v = ω·r.",
        hint: "Gunakan a = ω²·r.",
      },
      {
        type: "classifyExercise",
        prompt: "Tentukan apakah pernyataan tentang percepatan sentripetal benar atau salah.",
        buckets: ["Benar", "Salah"],
        items: [
          { text: "Percepatan sentripetal selalu mengarah ke pusat", bucket: "Benar" },
          { text: "Benda berputar dengan laju tetap tidak punya percepatan", bucket: "Salah" },
          { text: "Percepatan sentripetal mengubah arah, bukan laju", bucket: "Benar" },
          { text: "a = v²/r juga bisa ditulis a = ω²·r", bucket: "Benar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tikungan Miring di Lintasan Balap",
        html: "Lintasan balap dan jalan tol melengkung sering dibuat <strong>miring ke dalam</strong> pada tikungan. Alasannya percepatan sentripetal: untuk membelokkan mobil, dibutuhkan gaya yang selalu menuju pusat tikungan, dan besarnya bergantung pada <strong>v²/r</strong>. Pada kecepatan tinggi, gesekan ban saja sering tak cukup. Dengan memiringkan jalan, sebagian gaya normal dari permukaan ikut mengarah ke pusat, menambah gaya sentripetal yang tersedia. Itulah mengapa tikungan cepat selalu dirancang menanjak ke luar, langsung dari rumus a = v²/r.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang rumusnya bermakna. Percepatan sentripetal selalu menuju pusat dengan besar <strong>a = v² / r = ω² · r</strong>. Karena memuat v², menggandakan laju melipatempatkan percepatan sentripetal yang dibutuhkan. Pada gerak melingkar beraturan, percepatan ini tidak pernah nol meski laju tetap, sebab arah kecepatan terus dibelokkan ke pusat.",
      },
      {
        type: "takeaways",
        items: [
          "Gerak melingkar selalu dipercepat karena arah kecepatan berubah terus.",
          "Percepatan sentripetal selalu mengarah ke pusat lingkaran.",
          "Besarnya a = v²/r = ω²·r.",
          "Karena ada v², menggandakan laju melipatempatkan percepatan sentripetal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Percepatan sentripetal selalu mengarah ke?",
            options: ["Luar lingkaran", "Pusat lingkaran", "Searah gerak", "Berlawanan arah gerak"],
            answer: 1,
            explain: "Percepatan sentripetal selalu menuju pusat lingkaran.",
          },
          {
            q: "Benda berputar dengan laju tetap. Percepatannya?",
            options: ["Nol", "Tidak nol karena arah berubah", "Searah gerak", "Tak terhingga"],
            answer: 1,
            explain: "Arah kecepatan berubah, jadi ada percepatan meski laju tetap.",
          },
          {
            q: "Rumus percepatan sentripetal adalah?",
            options: ["a = v / r", "a = v² / r", "a = r / v²", "a = v·r"],
            answer: 1,
            explain: "a = v²/r = ω²·r.",
          },
          {
            q: "Laju 6 m/s, jari-jari 3 m. Percepatan sentripetalnya?",
            options: ["2 m/s²", "12 m/s²", "18 m/s²", "36 m/s²"],
            answer: 1,
            explain: "a = v²/r = 36 ÷ 3 = 12 m/s².",
          },
          {
            q: "Laju digandakan pada jari-jari tetap, percepatan sentripetal menjadi?",
            options: ["Dua kali", "Empat kali", "Setengah", "Tetap"],
            answer: 1,
            explain: "a sebanding v², jadi 2² = 4 kali lipat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "hubungan-roda-roda",
    levelId: "gerak-melingkar",
    order: 4,
    title: "Hubungan Roda-Roda",
    summary:
      "Sepeda, gir, dan katrol menghubungkan beberapa roda. Aturannya sederhana: roda yang seporos berbagi kecepatan sudut, roda yang terhubung sabuk berbagi kecepatan linear.",
    durationMin: 14,
    tags: ["kinematika", "gerak-melingkar", "roda-roda", "gir"],
    blocks: [
      {
        type: "paragraph",
        html: "Sepeda mengubah satu putaran pedal menjadi beberapa putaran roda belakang. Gir kecil dan gir besar saling memutar dengan kecepatan berbeda, tetapi ada pola yang konsisten. Bagaimana dua roda yang terhubung menentukan kecepatan satu sama lain? Jawabannya cuma dua aturan sederhana. Ayo selidiki dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Tiga Cara Roda Terhubung",
        caption: "Seporos berbagi ω; terhubung sabuk atau bersinggungan berbagi v linear.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ada tiga cara roda terhubung. <strong>Seporos</strong> (satu sumbu): keduanya berputar bersama, jadi <strong>kecepatan sudut ω sama</strong>. <strong>Terhubung sabuk atau rantai</strong>, atau <strong>bersinggungan langsung</strong>: titik singgungnya bergerak sama cepat, jadi <strong>kecepatan linear v sama</strong>. Perhatikan sepeda: gir depan dan belakang dihubungkan rantai (v sama), sedangkan gir belakang seporos dengan roda (ω sama).",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua aturan roda",
        html: "<strong>Seporos:</strong> ω sama, sehingga v = ω·r berbeda menurut jari-jari. <strong>Sabuk/rantai atau bersinggungan:</strong> v sama, sehingga ω₁·r₁ = ω₂·r₂, dan roda kecil berputar lebih cepat.",
      },
      {
        type: "widget",
        widget: "SimulatorPi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Roda Terhubung Sabuk: v Sama, ω Berbeda (v = 6 m/s)",
        unit: "rad/s",
        source: "ilustrasi edukatif (ω = v / r)",
        note: "Karena v sama, roda berjari-jari kecil berputar lebih cepat. Roda r = 0,2 m berputar 30 rad/s, sedangkan r = 0,6 m hanya 10 rad/s.",
        data: [
          { label: "r = 0,2 m", value: 30, color: "#f97316" },
          { label: "r = 0,3 m", value: 20, color: "#f97316" },
          { label: "r = 0,6 m", value: 10, color: "#f97316" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Dua roda terhubung sabuk. Roda A (r = 0,1 m) berputar dengan kecepatan linear tepi 6 m/s. Berapa kecepatan sudut roda A? Gunakan ω = v / r.",
        answer: 60,
        tolerance: 0.5,
        suffix: " rad/s",
        solution:
          "ω = v / r = 6 ÷ 0,1 = <strong>60 rad/s</strong>. Roda kecil berputar sangat cepat untuk kecepatan tepi yang sama.",
        hint: "Gunakan ω = v / r.",
      },
      {
        type: "calcExercise",
        prompt:
          "Roda A dan B terhubung sabuk (v sama). Roda A r = 0,1 m, ω = 60 rad/s. Jika roda B berjari-jari 0,3 m, berapa kecepatan sudut roda B? Gunakan ωₐ·rₐ = ω_b·r_b.",
        answer: 20,
        tolerance: 0.5,
        suffix: " rad/s",
        solution:
          "Karena terhubung sabuk, kecepatan linear sama: ωₐ·rₐ = ω_b·r_b. Maka 60 × 0,1 = ω_b × 0,3, jadi ω_b = 6 ÷ 0,3 = <strong>20 rad/s</strong>. Roda yang lebih besar berputar lebih lambat.",
        hint: "Samakan v: ωₐ·rₐ = ω_b·r_b, lalu cari ω_b.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan jenis hubungan roda dengan besaran yang sama di antara keduanya.",
        pairs: [
          { left: "Dua roda seporos (satu sumbu)", right: "Kecepatan sudut ω sama" },
          { left: "Roda terhubung rantai sepeda", right: "Kecepatan linear v sama" },
          { left: "Dua gir bersinggungan langsung", right: "Kecepatan linear v sama" },
          { left: "Roda gila dan poros yang sama", right: "Kecepatan sudut ω sama" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memindah Gigi Sepeda di Tanjakan",
        html: "Saat menanjak, pengendara memindahkan rantai ke <strong>gir belakang yang lebih besar</strong>. Karena rantai membuat <strong>kecepatan linear sama</strong> antara gir depan dan belakang, gir belakang yang besar berputar lebih lambat (ω_b·r_b tetap), sehingga roda berputar lebih pelan tetapi terasa lebih ringan dikayuh. Sebaliknya, di jalan datar pengendara memilih gir belakang kecil agar roda berputar cepat. Seluruh strategi gigi sepeda adalah penerapan langsung aturan hubungan roda-roda: v sama pada rantai, ω sama pada poros.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang aturannya jelas. <strong>Roda seporos:</strong> kecepatan sudut sama, <strong>ω₁ = ω₂</strong>, sehingga v₁/r₁ = v₂/r₂. <strong>Roda terhubung sabuk/rantai atau bersinggungan:</strong> kecepatan linear sama, <strong>v₁ = v₂</strong>, sehingga <strong>ω₁·r₁ = ω₂·r₂</strong>. Dari sini, roda yang lebih kecil selalu berputar lebih cepat saat v dibuat sama.",
      },
      {
        type: "takeaways",
        items: [
          "Roda seporos berbagi kecepatan sudut sama: ω₁ = ω₂.",
          "Roda terhubung sabuk/rantai atau bersinggungan berbagi kecepatan linear sama: v₁ = v₂.",
          "Saat v sama, ω₁·r₁ = ω₂·r₂, jadi roda kecil berputar lebih cepat.",
          "Sistem gigi sepeda menerapkan kedua aturan ini sekaligus.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dua roda seporos (satu sumbu) memiliki besaran sama berupa?",
            options: ["Kecepatan linear", "Kecepatan sudut", "Jari-jari", "Percepatan sentripetal"],
            answer: 1,
            explain: "Roda seporos berputar bersama, jadi kecepatan sudut ω sama.",
          },
          {
            q: "Dua roda terhubung sabuk memiliki besaran sama berupa?",
            options: ["Kecepatan sudut", "Kecepatan linear tepi", "Periode", "Massa"],
            answer: 1,
            explain: "Sabuk membuat kecepatan linear titik singgung sama.",
          },
          {
            q: "Roda A (r kecil) dan B (r besar) terhubung sabuk. Mana berputar lebih cepat (ω lebih besar)?",
            options: ["Roda A (kecil)", "Roda B (besar)", "Sama cepat", "Tidak bisa ditentukan"],
            answer: 0,
            explain: "v sama, jadi ω = v/r; r kecil berarti ω besar.",
          },
          {
            q: "Roda seporos, A r = 0,2 m dan B r = 0,4 m, ω = 5 rad/s. Kecepatan linear tepi B?",
            options: ["1 m/s", "2 m/s", "5 m/s", "10 m/s"],
            answer: 1,
            explain: "Seporos berarti ω sama; v_B = ω·r_B = 5 × 0,4 = 2 m/s.",
          },
          {
            q: "Pada gir bersinggungan, hubungan yang berlaku adalah?",
            options: ["ω₁ = ω₂", "ω₁·r₁ = ω₂·r₂", "r₁ = r₂", "v₁·r₁ = v₂·r₂"],
            answer: 1,
            explain: "Bersinggungan berarti v sama, sehingga ω₁·r₁ = ω₂·r₂.",
          },
        ],
      },
    ],
  },
];
