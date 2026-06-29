import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "mengenal-lingkaran-satuan",
    levelId: "lingkaran-satuan",
    order: 1,
    title: "Mengenal Lingkaran Satuan",
    summary:
      "Bagaimana kalau segitiga siku-siku kita taruh di dalam lingkaran berjari-jari 1? Ayo berpetualang melihat sin dan cos menjadi sepasang koordinat.",
    durationMin: 14,
    tags: ["trigonometri", "lingkaran-satuan", "koordinat", "sin", "cos"],
    blocks: [
      {
        type: "paragraph",
        html: "Sampai sekarang sin dan cos hanya hidup di dalam segitiga siku-siku yang sudutnya antara 0 dan 90 derajat. Tetapi roda yang berputar, bandul yang berayun, dan gelombang laut punya sudut yang jauh lebih besar. Sebelum kita buru-buru menghafal rumus baru, ayo selidiki sebuah lingkaran istimewa: lingkaran berjari-jari tepat 1.",
      },
      {
        type: "video",
        comp: "LingkaranSatuanVideo",
        title: "Video: Mengenal Lingkaran Satuan",
        caption: "Sebuah titik berjalan mengelilingi lingkaran berjari-jari 1, dan bayangannya membentuk sin dan cos.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan sebuah lingkaran berjari-jari 1 dengan pusat di titik nol. Tarik garis dari pusat membentuk sudut tertentu sampai menyentuh tepi lingkaran. Lihat titik sentuh itu: jarak mendatarnya ternyata sama dengan cos sudut, dan jarak tegaknya sama dengan sin sudut. Belum perlu rumus, cukup amati dulu bahwa setiap sudut menunjuk satu titik.",
      },
      {
        type: "widget",
        widget: "SimulatorLingkaranSatuan",
      },
      {
        type: "chart",
        variant: "line",
        title: "Nilai sin pada Sudut 0 sampai 90 Derajat",
        unit: "nilai sin",
        source: "nilai trigonometri sebenarnya",
        note: "Saat sudut naik dari 0 ke 90, koordinat tegak titik naik mulus dari 0 sampai 1.",
        data: [
          { label: "0°", value: 0, color: "#eab308" },
          { label: "30°", value: 0.5, color: "#eab308" },
          { label: "45°", value: 0.71, color: "#eab308" },
          { label: "60°", value: 0.87, color: "#eab308" },
          { label: "90°", value: 1, color: "#eab308" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa jari-jari 1 itu cerdas",
        html: "Karena jari-jari lingkaran adalah 1, maka sisi miring segitiga di dalamnya juga 1. Akibatnya sin = depan ÷ 1 = depan, dan cos = samping ÷ 1 = samping. Pembagian hilang, dan sin serta cos langsung menjadi koordinat titik.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada lingkaran satuan, sudut 90 derajat menunjuk titik di koordinat (0, 1). Nilai sin 90 derajat sama dengan koordinat tegak (y) titik itu. Berapa nilainya?",
        answer: 1,
        tolerance: 0.01,
        solution:
          "Titik untuk 90 derajat berada tepat di puncak lingkaran, yaitu (0, 1). Koordinat tegaknya 1, jadi <strong>sin 90° = 1</strong>.",
        hint: "Lihat koordinat tegak (y) dari titik (0, 1).",
      },
      {
        type: "calcExercise",
        prompt:
          "Sudut 0 derajat menunjuk titik (1, 0) pada lingkaran satuan. Nilai cos 0 derajat sama dengan koordinat mendatar (x) titik itu. Berapa nilainya?",
        answer: 1,
        tolerance: 0.01,
        solution:
          "Titik untuk 0 derajat berada di tepi kanan lingkaran, yaitu (1, 0). Koordinat mendatarnya 1, jadi <strong>cos 0° = 1</strong>.",
        hint: "Lihat koordinat mendatar (x) dari titik (1, 0).",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan sudut dengan titik koordinatnya di lingkaran satuan.",
        pairs: [
          { left: "0°", right: "(1, 0)" },
          { left: "90°", right: "(0, 1)" },
          { left: "180°", right: "(-1, 0)" },
          { left: "270°", right: "(0, -1)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Posisi kursi bianglala",
        html: "Sebuah bianglala berjari-jari 1 puluhan meter berputar pelan. Jika kita anggap pusatnya titik nol, posisi sebuah kursi pada sudut putaran tertentu bisa dihitung sebagai (cos sudut, sin sudut) dikali jari-jari. Saat kursi di sudut 90 derajat ia berada paling atas, dan saat 270 derajat ia di paling bawah. Lingkaran satuan menjadi peta untuk menyebut posisi apa pun hanya dengan satu sudut.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturannya muncul di akhir",
        html: "Setelah mengamati titik berjalan di lingkaran, baru kita rumuskan: pada lingkaran satuan, setiap sudut menentukan satu titik dengan koordinat <strong>(cos sudut, sin sudut)</strong>. Koordinat mendatar adalah cos, koordinat tegak adalah sin, dan jari-jari selalu 1.",
      },
      {
        type: "takeaways",
        items: [
          "Lingkaran satuan adalah lingkaran berjari-jari 1 dengan pusat di titik nol.",
          "Setiap sudut menunjuk satu titik dengan koordinat (cos sudut, sin sudut).",
          "Koordinat mendatar (x) adalah cos, koordinat tegak (y) adalah sin.",
          "Dengan jari-jari 1, sin dan cos langsung menjadi koordinat tanpa pembagian.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Berapa jari-jari lingkaran satuan?",
            options: ["0", "1", "2", "Bergantung sudut"],
            answer: 1,
            explain: "Lingkaran satuan selalu berjari-jari tepat 1.",
          },
          {
            q: "Pada lingkaran satuan, koordinat sebuah titik ditulis sebagai?",
            options: ["(sin, cos)", "(cos, sin)", "(tan, sin)", "(cos, tan)"],
            answer: 1,
            explain: "Koordinat mendatar adalah cos dan koordinat tegak adalah sin, jadi (cos, sin).",
          },
          {
            q: "Titik untuk sudut 180 derajat berada di?",
            options: ["(1, 0)", "(0, 1)", "(-1, 0)", "(0, -1)"],
            answer: 2,
            explain: "Sudut 180 derajat menunjuk tepi kiri lingkaran, yaitu (-1, 0).",
          },
          {
            q: "Mengapa pada lingkaran satuan sin = koordinat tegak?",
            options: [
              "Karena sudutnya kecil",
              "Karena jari-jari 1 membuat sin = depan ÷ 1 = depan",
              "Karena cos selalu nol",
              "Karena lingkaran berputar",
            ],
            answer: 1,
            explain: "Sisi miring sama dengan jari-jari, yaitu 1, sehingga pembagian hilang.",
          },
          {
            q: "Nilai cos 90 derajat pada lingkaran satuan adalah?",
            options: ["1", "0", "-1", "0,5"],
            answer: 1,
            explain: "Titik untuk 90 derajat adalah (0, 1), koordinat mendatarnya 0.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "sudut-di-empat-kuadran",
    levelId: "lingkaran-satuan",
    order: 2,
    title: "Sudut di Empat Kuadran",
    summary:
      "Apa yang terjadi pada sin dan cos kalau sudut melewati 90 derajat? Ayo ikuti titik berjalan ke empat sudut ruang lingkaran.",
    durationMin: 14,
    tags: ["trigonometri", "lingkaran-satuan", "kuadran", "sudut"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat titik terus berjalan mengelilingi lingkaran, ia melewati empat wilayah. Di tiap wilayah, posisi titik bisa di kanan atau kiri, di atas atau bawah. Sebelum menghafal tabel, ayo amati dulu bagaimana lingkaran terbagi dan apa arti tiap bagian bagi sin dan cos.",
      },
      {
        type: "video",
        comp: "LingkaranSatuanVideo",
        title: "Video: Sudut di Empat Kuadran",
        caption: "Lingkaran dibagi dua sumbu menjadi empat kuadran, dan titik melewati semuanya satu per satu.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Dua sumbu yang saling tegak lurus membelah lingkaran menjadi empat bagian yang disebut kuadran. Mulai dari kanan atas dan berputar berlawanan arah jarum jam: Kuadran I dari 0 sampai 90 derajat, Kuadran II dari 90 sampai 180, Kuadran III dari 180 sampai 270, dan Kuadran IV dari 270 sampai 360. Coba tebak: di kuadran mana titik berada di kiri bawah?",
      },
      {
        type: "widget",
        widget: "SimulatorLingkaranSatuan",
      },
      {
        type: "chart",
        variant: "line",
        title: "Nilai sin Mengelilingi Satu Putaran Penuh",
        unit: "nilai sin",
        source: "nilai trigonometri sebenarnya",
        note: "Naik ke 1 di 90 derajat, turun ke -1 di 270 derajat, lalu kembali. Inilah awal pola gelombang.",
        data: [
          { label: "0°", value: 0, color: "#84cc16" },
          { label: "90°", value: 1, color: "#84cc16" },
          { label: "180°", value: 0, color: "#84cc16" },
          { label: "270°", value: -1, color: "#84cc16" },
          { label: "360°", value: 0, color: "#84cc16" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Kenapa muncul gelombang",
        html: "Karena titik bergerak melingkar mulus, koordinat tegaknya (sin) naik turun secara halus dari 1 ke -1 dan kembali. Pola berulang inilah yang kelak menjelaskan gelombang suara, arus listrik, dan ayunan.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan setiap sudut ke kuadran tempat ia berada.",
        buckets: ["Kuadran I", "Kuadran II", "Kuadran III", "Kuadran IV"],
        items: [
          { text: "45°", bucket: "Kuadran I" },
          { text: "120°", bucket: "Kuadran II" },
          { text: "200°", bucket: "Kuadran III" },
          { text: "300°", bucket: "Kuadran IV" },
          { text: "80°", bucket: "Kuadran I" },
          { text: "250°", bucket: "Kuadran III" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sudut 150 derajat berada di Kuadran II. Sudut acuannya adalah 180 - 150 = 30 derajat, dan di Kuadran II nilai sin tetap positif. Berapa nilai sin 150 derajat? (gunakan sin 30 = 0,5)",
        answer: 0.5,
        tolerance: 0.01,
        solution:
          "Sudut acuan 150 derajat adalah 30 derajat. Di Kuadran II sin bernilai positif, jadi <strong>sin 150° = sin 30° = 0,5</strong>.",
        hint: "Sudut acuan = 180 - 150, dan sin positif di Kuadran II.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan kuadran dengan rentang sudutnya.",
        pairs: [
          { left: "Kuadran I", right: "0° sampai 90°" },
          { left: "Kuadran II", right: "90° sampai 180°" },
          { left: "Kuadran III", right: "180° sampai 270°" },
          { left: "Kuadran IV", right: "270° sampai 360°" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Arah jarum kompas",
        html: "Sebuah robot bergerak menurut sudut yang diukur dari arah timur, berlawanan arah jarum jam. Pada sudut 135 derajat ia menuju kiri atas, masuk Kuadran II, sehingga melaju ke barat sambil tetap naik. Pada sudut 225 derajat ia di Kuadran III, menuju kiri bawah. Dengan membaca kuadran saja, kita sudah tahu arah kasar gerak robot sebelum menghitung apa pun.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturannya muncul di akhir",
        html: "Setelah menelusuri putaran penuh, baru kita tetapkan pembagian resmi: lingkaran dibagi menjadi <strong>empat kuadran</strong>. Kuadran I (0°-90°) kanan atas, Kuadran II (90°-180°) kiri atas, Kuadran III (180°-270°) kiri bawah, Kuadran IV (270°-360°) kanan bawah. Tiap sudut punya sudut acuan ke sumbu mendatar terdekat.",
      },
      {
        type: "takeaways",
        items: [
          "Dua sumbu membagi lingkaran menjadi empat kuadran, diberi nomor berlawanan arah jarum jam.",
          "Kuadran I 0°-90°, II 90°-180°, III 180°-270°, IV 270°-360°.",
          "Nilai sin sebuah sudut sama dengan sin sudut acuannya, dengan tanda mengikuti kuadran.",
          "Gerakan melingkar yang mulus membuat sin dan cos membentuk pola gelombang berulang.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Sudut 200 derajat berada di kuadran berapa?",
            options: ["Kuadran I", "Kuadran II", "Kuadran III", "Kuadran IV"],
            answer: 2,
            explain: "200 derajat ada di antara 180 dan 270, yaitu Kuadran III.",
          },
          {
            q: "Kuadran II mencakup rentang sudut?",
            options: ["0° sampai 90°", "90° sampai 180°", "180° sampai 270°", "270° sampai 360°"],
            answer: 1,
            explain: "Kuadran II berada di antara 90 dan 180 derajat.",
          },
          {
            q: "Sudut acuan untuk 150 derajat adalah?",
            options: ["15°", "30°", "60°", "150°"],
            answer: 1,
            explain: "Di Kuadran II sudut acuan = 180 - 150 = 30 derajat.",
          },
          {
            q: "Nilai sin paling besar (yaitu 1) terjadi pada sudut?",
            options: ["0°", "90°", "180°", "270°"],
            answer: 1,
            explain: "Titik tertinggi lingkaran ada di 90 derajat, di mana sin = 1.",
          },
          {
            q: "Mengapa sin membentuk pola gelombang dalam satu putaran?",
            options: [
              "Karena sudut dihafal",
              "Karena koordinat tegak titik naik turun mulus saat titik melingkar",
              "Karena lingkaran berjari-jari 2",
              "Karena cos selalu nol",
            ],
            answer: 1,
            explain: "Gerak melingkar yang halus membuat sin naik ke 1, turun ke -1, lalu kembali.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "tanda-sin-cos-tan-per-kuadran",
    levelId: "lingkaran-satuan",
    order: 3,
    title: "Tanda Sin, Cos, dan Tan per Kuadran",
    summary:
      "Kapan sin menjadi negatif? Ayo berpetualang membaca tanda positif dan negatif langsung dari posisi titik di lingkaran.",
    durationMin: 15,
    tags: ["trigonometri", "lingkaran-satuan", "tanda", "kuadran"],
    blocks: [
      {
        type: "paragraph",
        html: "Di segitiga biasa, sin, cos, dan tan selalu positif. Tetapi begitu titik berjalan ke kiri atau ke bawah lingkaran, koordinatnya bisa bernilai negatif. Sebelum menghafal tabel tanda, ayo amati dulu: tanda sin dan cos sebenarnya hanya mengikuti arah koordinat titik.",
      },
      {
        type: "video",
        comp: "LingkaranSatuanVideo",
        title: "Video: Tanda per Kuadran",
        caption: "Koordinat kiri bernilai negatif, koordinat bawah bernilai negatif, dan tanda sin cos tan ikut berubah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ingat, koordinat mendatar adalah cos dan koordinat tegak adalah sin. Kalau titik berada di kiri, koordinat mendatarnya negatif, jadi cos negatif. Kalau titik di bawah, koordinat tegaknya negatif, jadi sin negatif. Coba tebak: di Kuadran III titik di kiri bawah, jadi tanda sin dan cos masing-masing apa?",
      },
      {
        type: "widget",
        widget: "SimulatorLingkaranSatuan",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Nilai cos pada Sudut Wakil Tiap Kuadran",
        unit: "nilai cos",
        source: "nilai trigonometri sebenarnya",
        note: "Sudut acuan sama (30 derajat), tetapi tandanya berbeda mengikuti posisi kiri atau kanan titik.",
        data: [
          { label: "30° (K I)", value: 0.87, color: "#84cc16" },
          { label: "150° (K II)", value: -0.87, color: "#f59e0b" },
          { label: "210° (K III)", value: -0.87, color: "#f59e0b" },
          { label: "330° (K IV)", value: 0.87, color: "#84cc16" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Tan ikut aturan pembagian",
        html: "Karena tan = sin ÷ cos, tandanya ditentukan oleh tanda sin dibagi tanda cos. Dua tanda sama (keduanya positif atau keduanya negatif) menghasilkan tan positif, sedangkan tanda berbeda menghasilkan tan negatif.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan setiap pernyataan ke Positif atau Negatif sesuai tandanya.",
        buckets: ["Positif", "Negatif"],
        items: [
          { text: "sin di Kuadran II", bucket: "Positif" },
          { text: "cos di Kuadran II", bucket: "Negatif" },
          { text: "tan di Kuadran III", bucket: "Positif" },
          { text: "sin di Kuadran IV", bucket: "Negatif" },
          { text: "cos di Kuadran IV", bucket: "Positif" },
          { text: "tan di Kuadran II", bucket: "Negatif" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sudut 120 derajat berada di Kuadran II dengan sudut acuan 60 derajat. Di Kuadran II nilai cos negatif. Jika cos 60 = 0,5, berapa nilai cos 120 derajat? (boleh memakai tanda minus)",
        answer: -0.5,
        tolerance: 0.01,
        solution:
          "Sudut acuan 120 derajat adalah 60 derajat dan cos 60 = 0,5. Karena di Kuadran II cos negatif, maka <strong>cos 120° = -0,5</strong>.",
        hint: "Cari cos 60 dulu, lalu beri tanda sesuai Kuadran II.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan kuadran dengan perbandingan yang bernilai positif di sana.",
        pairs: [
          { left: "Kuadran I", right: "semua positif" },
          { left: "Kuadran II", right: "hanya sin positif" },
          { left: "Kuadran III", right: "hanya tan positif" },
          { left: "Kuadran IV", right: "hanya cos positif" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ketinggian dan arah pesawat",
        html: "Sebuah pesawat dilacak dengan sudut dari menara. Saat sudutnya di Kuadran II, koordinat tegak (sin) masih positif sehingga pesawat di atas garis pandang, tetapi koordinat mendatar (cos) negatif sehingga ia di sisi kiri menara. Operator cukup membaca tanda sin dan cos untuk tahu di kuadran mana pesawat berada, lalu menghitung posisi tepatnya. Tanda bukan hiasan, melainkan penunjuk arah.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturannya muncul di akhir",
        html: "Setelah membaca tanda dari koordinat, baru kita rangkum aturannya: di <strong>Kuadran I semua positif</strong>, di <strong>Kuadran II hanya sin positif</strong>, di <strong>Kuadran III hanya tan positif</strong>, dan di <strong>Kuadran IV hanya cos positif</strong>. Jembatan ingatannya: Semua, Sin, Tan, Cos.",
      },
      {
        type: "takeaways",
        items: [
          "Tanda sin mengikuti koordinat tegak, tanda cos mengikuti koordinat mendatar.",
          "Kuadran I semua positif; Kuadran II hanya sin positif.",
          "Kuadran III hanya tan positif; Kuadran IV hanya cos positif.",
          "Tan = sin ÷ cos, jadi tandanya hasil bagi tanda sin dan tanda cos.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Di Kuadran II, perbandingan yang bernilai positif adalah?",
            options: ["cos", "tan", "sin", "semuanya"],
            answer: 2,
            explain: "Di Kuadran II hanya sin yang positif, cos dan tan negatif.",
          },
          {
            q: "Di kuadran berapa hanya tan yang positif?",
            options: ["Kuadran I", "Kuadran II", "Kuadran III", "Kuadran IV"],
            answer: 2,
            explain: "Di Kuadran III sin dan cos sama-sama negatif, sehingga tan positif.",
          },
          {
            q: "Nilai cos 120 derajat adalah?",
            options: ["0,5", "-0,5", "0,87", "-0,87"],
            answer: 1,
            explain: "Sudut acuan 60 derajat (cos 0,5), dan di Kuadran II cos negatif, jadi -0,5.",
          },
          {
            q: "Mengapa cos bernilai negatif di Kuadran II dan III?",
            options: [
              "Karena sudutnya besar",
              "Karena titik berada di sisi kiri sehingga koordinat mendatarnya negatif",
              "Karena sin selalu positif",
              "Karena jari-jari negatif",
            ],
            answer: 1,
            explain: "Cos adalah koordinat mendatar, dan di sisi kiri lingkaran nilainya negatif.",
          },
          {
            q: "Jembatan ingatan tanda positif berurutan Kuadran I sampai IV adalah?",
            options: [
              "Cos, Tan, Sin, Semua",
              "Semua, Sin, Tan, Cos",
              "Sin, Cos, Tan, Semua",
              "Tan, Sin, Cos, Semua",
            ],
            answer: 1,
            explain: "Urutannya Semua (I), Sin (II), Tan (III), Cos (IV).",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "sudut-lebih-360-dan-negatif",
    levelId: "lingkaran-satuan",
    order: 4,
    title: "Sudut Lebih dari 360 dan Sudut Negatif",
    summary:
      "Apa arti sudut 390 derajat atau sudut -30 derajat? Ayo berpetualang memutar lebih dari sekali dan memutar balik arah.",
    durationMin: 14,
    tags: ["trigonometri", "lingkaran-satuan", "sudut-koterminal", "periodik"],
    blocks: [
      {
        type: "paragraph",
        html: "Roda tidak berhenti setelah satu putaran, dan jarum jam bisa mundur. Maka wajar kalau ada sudut lebih dari 360 derajat dan sudut negatif. Sebelum membuat rumus, ayo amati apa yang terjadi pada titik di lingkaran ketika kita memutar lebih dari sekali atau berputar ke arah sebaliknya.",
      },
      {
        type: "video",
        comp: "TrigonometriVideo",
        title: "Video: Sudut Besar dan Sudut Negatif",
        caption: "Titik yang diputar 390 derajat berhenti di tempat yang sama dengan 30 derajat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Putar titik sejauh 360 derajat penuh, lalu lanjutkan 30 derajat lagi. Total 390 derajat, tetapi titik berhenti persis di tempat yang sama seperti sudut 30 derajat. Sekarang putar balik, ke arah jarum jam, sejauh 30 derajat. Itu sudut -30 derajat, dan titiknya jatuh di tempat yang sama dengan 330 derajat. Posisi yang sama berarti nilai sin dan cos yang sama.",
      },
      {
        type: "widget",
        widget: "SimulatorLingkaranSatuan",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Nilai sin untuk Sudut yang Berbeda 360 Derajat",
        unit: "nilai sin",
        source: "nilai trigonometri sebenarnya",
        note: "Sudut 30, 390, dan 750 derajat menunjuk titik yang sama, jadi nilai sin-nya identik.",
        data: [
          { label: "30°", value: 0.5, color: "#facc15" },
          { label: "390°", value: 0.5, color: "#facc15" },
          { label: "750°", value: 0.5, color: "#facc15" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa nilainya berulang",
        html: "Setiap tambahan 360 derajat membawa titik kembali ke posisi semula, sehingga koordinatnya tidak berubah. Sifat berulang setiap 360 derajat inilah yang disebut periodik, dan itu yang membuat gelombang sin terus terulang tanpa henti.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sudut 390 derajat menunjuk titik yang sama dengan 390 - 360 = 30 derajat. Jika sin 30 = 0,5, berapa nilai sin 390 derajat?",
        answer: 0.5,
        tolerance: 0.01,
        solution:
          "Kurangi satu putaran: 390 - 360 = 30 derajat. Titiknya sama, jadi <strong>sin 390° = sin 30° = 0,5</strong>.",
        hint: "Kurangi 360 derajat dulu untuk mencari sudut yang setara.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sudut -60 derajat berarti berputar 60 derajat searah jarum jam, menunjuk titik yang sama dengan 300 derajat (di Kuadran IV). Di sana cos positif. Jika cos 60 = 0,5, berapa nilai cos -60 derajat?",
        answer: 0.5,
        tolerance: 0.01,
        solution:
          "Sudut -60 derajat setara dengan 360 - 60 = 300 derajat di Kuadran IV, tempat cos positif. Jadi <strong>cos -60° = cos 60° = 0,5</strong>.",
        hint: "Tambahkan 360 ke sudut negatif untuk mencari sudut setaranya.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan setiap sudut dengan sudut setaranya antara 0 dan 360 derajat.",
        pairs: [
          { left: "390°", right: "30°" },
          { left: "450°", right: "90°" },
          { left: "-30°", right: "330°" },
          { left: "-90°", right: "270°" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Putaran turbin angin",
        html: "Sebuah sensor mencatat sudut bilah turbin sebagai 765 derajat setelah berputar berkali-kali. Untuk tahu posisi bilah saat itu, teknisi cukup mengurangi kelipatan 360: 765 - 720 = 45 derajat. Bilah ternyata berada di posisi 45 derajat, sama seperti pertama kali. Sifat periodik membuat sudut sebesar apa pun bisa diringkas menjadi posisi yang mudah dibaca.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturannya muncul di akhir",
        html: "Setelah memutar maju dan mundur, baru kita rumuskan: dua sudut yang berbeda kelipatan <strong>360 derajat</strong> menunjuk titik yang sama, sehingga nilai sin dan cos-nya sama. Untuk sudut besar, kurangi kelipatan 360; untuk sudut negatif, tambahkan 360 sampai berada di antara 0 dan 360 derajat.",
      },
      {
        type: "takeaways",
        items: [
          "Menambah atau mengurangi 360 derajat tidak mengubah posisi titik di lingkaran.",
          "Sudut yang berbeda kelipatan 360 derajat punya nilai sin dan cos yang sama.",
          "Sudut negatif berarti berputar searah jarum jam; tambahkan 360 untuk menyetarakannya.",
          "Sifat berulang setiap 360 derajat disebut periodik dan menghasilkan gelombang sin.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Sudut 390 derajat setara dengan sudut?",
            options: ["30°", "60°", "90°", "330°"],
            answer: 0,
            explain: "390 - 360 = 30 derajat, jadi titiknya sama dengan 30 derajat.",
          },
          {
            q: "Sudut -30 derajat menunjuk titik yang sama dengan?",
            options: ["30°", "150°", "330°", "210°"],
            answer: 2,
            explain: "-30 + 360 = 330 derajat.",
          },
          {
            q: "Mengapa sin 750 derajat sama dengan sin 30 derajat?",
            options: [
              "Kebetulan",
              "Karena 750 dikurangi dua putaran (720) menjadi 30 derajat",
              "Karena 750 lebih besar",
              "Karena sin selalu 0,5",
            ],
            answer: 1,
            explain: "750 - 720 = 30 derajat, titiknya sama sehingga sin-nya sama.",
          },
          {
            q: "Sifat nilai sin yang berulang setiap 360 derajat disebut?",
            options: ["Linear", "Periodik", "Acak", "Negatif"],
            answer: 1,
            explain: "Pengulangan teratur setiap 360 derajat disebut periodik.",
          },
          {
            q: "Untuk menyederhanakan sudut 765 derajat menjadi antara 0 dan 360, kita?",
            options: [
              "Menambah 360",
              "Mengurangi kelipatan 360 (di sini 720)",
              "Mengalikan dengan 2",
              "Membaginya dengan 90",
            ],
            answer: 1,
            explain: "765 - 720 = 45 derajat, sudut setara yang mudah dibaca.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "mengukur-sudut-dengan-radian",
    levelId: "lingkaran-satuan",
    order: 5,
    title: "Mengukur Sudut dengan Radian",
    summary:
      "Mengapa kalkulator dan ilmuwan jarang memakai derajat? Kita selidiki dulu cara mengukur sudut memakai panjang busur lingkaran.",
    durationMin: 14,
    tags: ["trigonometri", "radian", "lingkaran-satuan", "busur", "pi"],
    blocks: [
      {
        type: "paragraph",
        html: "Derajat membagi lingkaran menjadi 360 bagian, sebuah angka yang dipilih bangsa Babilonia ribuan tahun lalu. Tetapi alam tidak tahu soal angka 360. Ada cara mengukur sudut yang lahir langsung dari lingkaran itu sendiri, yaitu dengan panjang busur. Ayo selidiki dulu sebelum menamai satuannya.",
      },
      {
        type: "video",
        comp: "LingkaranSatuanVideo",
        title: "Video: Sudut yang Diukur dengan Busur",
        caption: "Pada lingkaran satuan, panjang busur yang ditempuh adalah ukuran sudut itu sendiri.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan berjalan di tepi lingkaran berjari-jari 1. Saat kamu berjalan sejauh 1 satuan di tepinya, sudut yang kamu sapu dari pusat disebut 1 radian, kira-kira 57,3 derajat. Berjalan setengah keliling berarti menempuh busur sepanjang pi (sekitar 3,14), dan itu sama dengan 180 derajat. Satu putaran penuh adalah 2 pi.",
      },
      {
        type: "widget",
        widget: "SimulatorLingkaranSatuan",
      },
      {
        type: "chart",
        variant: "line",
        title: "Panjang Busur (Radian) pada Lingkaran Satuan untuk Tiap Sudut",
        unit: "radian (panjang busur)",
        source: "nilai eksak",
        note: "Pada jari-jari 1, ukuran radian sebuah sudut sama persis dengan panjang busur yang ditempuh.",
        data: [
          { label: "30°", value: 0.524, color: "#a3e635" },
          { label: "90°", value: 1.571, color: "#84cc16" },
          { label: "180°", value: 3.142, color: "#65a30d" },
          { label: "360°", value: 6.283, color: "#4d7c0f" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Jembatan derajat dan radian",
        html: "Karena setengah putaran sama dengan 180 derajat sekaligus pi radian, kita punya jembatan: <strong>180 derajat = pi radian</strong>. Untuk mengubah derajat ke radian, kalikan dengan pi ÷ 180. Untuk arah sebaliknya, kalikan dengan 180 ÷ pi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Ubah 60 derajat ke radian. Kalikan dengan pi ÷ 180 (pakai pi sekitar 3,1416). Berapa radian?",
        answer: 1.047,
        tolerance: 0.01,
        solution:
          "60 × pi ÷ 180 = pi ÷ 3 = 3,1416 ÷ 3 = <strong>sekitar 1,047 radian</strong>.",
        hint: "60 derajat adalah sepertiga dari 180 derajat, jadi sepertiga pi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah roda berjari-jari 0,3 meter berputar sebesar 2 radian. Jarak yang ditempuh satu titik di tepinya = jari-jari × sudut. Berapa meter?",
        answer: 0.6,
        tolerance: 0.01,
        suffix: " m",
        solution:
          "Panjang busur = jari-jari × sudut radian = 0,3 × 2 = <strong>0,6 meter</strong>. Inilah keunggulan radian: panjang busur langsung jadi tanpa faktor tambahan.",
        hint: "Panjang busur = r × θ, dengan θ dalam radian.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan sudut dalam derajat dengan ukuran radiannya.",
        pairs: [
          { left: "30 derajat", right: "pi ÷ 6" },
          { left: "45 derajat", right: "pi ÷ 4" },
          { left: "90 derajat", right: "pi ÷ 2" },
          { left: "180 derajat", right: "pi" },
          { left: "360 derajat", right: "2 pi" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa rumus fisika memakai radian",
        html: "Rumus panjang busur s = r × θ dan kecepatan sudut hanya rapi bila θ memakai radian. Jika dipaksa memakai derajat, setiap rumus harus menyelipkan faktor pi ÷ 180 yang mengganggu. Karena itu satelit, mesin, dan kalkulator ilmiah memakai radian sebagai bawaan. Misalnya busur sepanjang 5 meter pada jari-jari 10 meter membentuk sudut 5 ÷ 10 = 0,5 radian, tanpa konversi apa pun.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturannya muncul di akhir",
        html: "Setelah mengukur sudut lewat busur, baru satuannya kita tetapkan: <strong>1 radian adalah sudut yang busurnya sepanjang jari-jari</strong>. Konversinya: <strong>180 derajat = pi radian</strong>, sehingga derajat ke radian dikali pi ÷ 180 dan radian ke derajat dikali 180 ÷ pi. Panjang busur s = r × θ dengan θ dalam radian.",
      },
      {
        type: "takeaways",
        items: [
          "Radian mengukur sudut lewat panjang busur, bukan membagi lingkaran jadi 360.",
          "Satu radian adalah sudut yang busurnya sepanjang jari-jari, sekitar 57,3 derajat.",
          "Jembatan utamanya: 180 derajat = pi radian.",
          "Derajat ke radian dikali pi ÷ 180; radian ke derajat dikali 180 ÷ pi.",
          "Panjang busur s = r × θ hanya berlaku rapi bila θ dalam radian.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Satu putaran penuh sama dengan berapa radian?",
            options: ["pi", "2 pi", "180", "360"],
            answer: 1,
            explain: "Satu putaran penuh = 360 derajat = 2 pi radian.",
          },
          {
            q: "180 derajat sama dengan?",
            options: ["pi ÷ 2 radian", "pi radian", "2 pi radian", "pi ÷ 4 radian"],
            answer: 1,
            explain: "Setengah putaran adalah pi radian.",
          },
          {
            q: "Untuk mengubah derajat menjadi radian, dikalikan?",
            options: ["180 ÷ pi", "pi ÷ 180", "pi × 180", "360 ÷ pi"],
            answer: 1,
            explain: "Derajat ke radian: kalikan dengan pi ÷ 180.",
          },
          {
            q: "Pada jari-jari 4, sudut 1,5 radian menyapu busur sepanjang?",
            options: ["1,5", "4", "6", "5,5"],
            answer: 2,
            explain: "s = r × θ = 4 × 1,5 = 6 satuan.",
          },
          {
            q: "Kira-kira berapa derajat satu radian?",
            options: ["30 derajat", "45 derajat", "57,3 derajat", "90 derajat"],
            answer: 2,
            explain: "1 radian = 180 ÷ pi = sekitar 57,3 derajat.",
          },
        ],
      },
    ],
  },
];
