import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "gaya-lorentz",
    levelId: "gaya-magnetik",
    order: 1,
    title: "Gaya Lorentz pada Muatan Bergerak",
    summary:
      "Kenapa kawat berarus bisa tersentak saat didekatkan magnet? Inilah kisah gaya yang muncul dari muatan yang bergerak di dalam medan magnet.",
    durationMin: 14,
    tags: ["fisika", "gaya lorentz", "magnet", "arus"],
    blocks: [
      {
        type: "paragraph",
        html: "Letakkan kawat berarus di antara dua kutub magnet, lalu nyalakan arus. Tiba-tiba kawat itu tersentak ke samping, seolah didorong tangan tak terlihat. Tidak ada yang menyentuhnya. Sebelum menuliskan rumus, ayo kita selidiki dorongan misterius ini, yang ternyata menjadi jantung setiap motor listrik.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Kawat Berarus Tersentak di Medan Magnet",
        caption: "Arus mengalir, dan kawat langsung terdorong tegak lurus medan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan satu muatan listrik melesat masuk ke dalam medan magnet. Kalau ia diam, tidak terjadi apa-apa. Tapi begitu ia <strong>bergerak</strong>, medan magnet langsung mendorongnya ke samping, tegak lurus terhadap arah gerak sekaligus tegak lurus terhadap medan. Dorongan inilah yang disebut <strong>gaya Lorentz</strong>.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kaidah tangan kanan",
        html: "Arah gaya bisa ditebak dengan tangan kanan: empat jari menunjuk arah arus (atau gerak muatan positif), lalu tekuk ke arah medan B, dan ibu jari akan menunjuk arah <strong>gaya</strong>. Bila muatannya bergerak sejajar medan, gayanya nol; gaya terbesar terjadi saat gerak tegak lurus medan.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "line",
        title: "Gaya pada Muatan vs Kecepatan",
        unit: "femtonewton (fN)",
        source: "q = 1,6×10⁻¹⁹ C, B = 0,5 T, gerak tegak lurus medan",
        note: "Pada muatan dan medan tetap, gaya bertambah lurus seiring kecepatan. Dua kali laju berarti dua kali gaya.",
        data: [
          { label: "1×10⁶ m/s", value: 0.08, color: "#34d399" },
          { label: "2×10⁶ m/s", value: 0.16, color: "#22d3ee" },
          { label: "5×10⁶ m/s", value: 0.4, color: "#38bdf8" },
          { label: "1×10⁷ m/s", value: 0.8, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah muatan 2 C bergerak dengan kecepatan 3 m/s tegak lurus medan magnet 0,5 T. Berapa besar gaya Lorentz yang dialaminya?",
        answer: 3,
        tolerance: 0.05,
        suffix: " N",
        solution:
          "Pakai F = q·v·B·sin θ = 2 × 3 × 0,5 × sin 90° = 2 × 3 × 0,5 × 1 = <strong>3 N</strong>. Karena gerak tegak lurus medan, sin θ = 1.",
        hint: "F = q·v·B·sin θ, dan sin 90° = 1.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap istilah dengan maknanya pada gaya Lorentz.",
        pairs: [
          { left: "F = q·v·B·sin θ", right: "Gaya pada satu muatan yang bergerak" },
          { left: "Kaidah tangan kanan", right: "Menentukan arah gaya" },
          { left: "Gerak sejajar medan", right: "Gaya bernilai nol" },
          { left: "Gerak tegak lurus medan", right: "Gaya bernilai maksimum" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan: muncul gaya Lorentz atau tidak.",
        buckets: ["Ada gaya Lorentz", "Tidak ada gaya Lorentz"],
        items: [
          { text: "Muatan bergerak tegak lurus medan", bucket: "Ada gaya Lorentz" },
          { text: "Muatan bergerak menyilang medan", bucket: "Ada gaya Lorentz" },
          { text: "Muatan diam di dalam medan", bucket: "Tidak ada gaya Lorentz" },
          { text: "Muatan bergerak searah medan", bucket: "Tidak ada gaya Lorentz" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Aurora di Langit Kutub",
        html: "Partikel bermuatan dari Matahari melesat menuju Bumi dengan kecepatan tinggi. Saat memasuki medan magnet Bumi, gaya Lorentz membelokkan mereka dan menggiringnya menuju kutub. Di sana partikel itu menabrak atom udara dan memancarkan cahaya hijau serta ungu yang kita kenal sebagai aurora. Jadi tirai cahaya yang indah itu adalah pertunjukan langsung gaya Lorentz dalam skala planet.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang baru kita tuliskan. Untuk satu muatan q yang bergerak dengan kecepatan v dalam medan B, gaya Lorentz adalah <strong>F = q·v·B·sin θ</strong>, dengan θ sudut antara v dan B. Gaya selalu tegak lurus terhadap gerak dan terhadap medan, ditentukan dengan kaidah tangan kanan, dan paling besar saat keduanya saling tegak lurus (sin 90° = 1). Karena gaya selalu tegak lurus gerak, ia mengubah arah gerak tanpa mengubah kelajuan.",
      },
      {
        type: "takeaways",
        items: [
          "Gaya Lorentz hanya muncul pada muatan yang bergerak di dalam medan magnet.",
          "Untuk muatan tunggal: F = q·v·B·sin θ.",
          "Arah gaya tegak lurus terhadap gerak dan medan, ditentukan dengan kaidah tangan kanan.",
          "Gerak sejajar medan tidak menghasilkan gaya; gaya terbesar saat gerak tegak lurus medan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Gaya Lorentz pada satu muatan bergerak dihitung dengan?",
            options: ["F = m·a", "F = q·v·B·sin θ", "F = q/V", "F = I·R"],
            answer: 1,
            explain: "Gaya pada muatan bergerak adalah F = q·v·B·sin θ.",
          },
          {
            q: "Kapan gaya Lorentz pada muatan bernilai nol?",
            options: [
              "Saat muatan bergerak tegak lurus medan",
              "Saat muatan bergerak sejajar medan",
              "Saat medan sangat kuat",
              "Saat muatan besar",
            ],
            answer: 1,
            explain: "Jika v sejajar B maka sin θ = 0, sehingga gaya nol.",
          },
          {
            q: "Arah gaya Lorentz terhadap arah gerak dan medan adalah?",
            options: ["Sejajar gerak", "Sejajar medan", "Tegak lurus keduanya", "Berlawanan gerak"],
            answer: 2,
            explain: "Gaya selalu tegak lurus terhadap gerak sekaligus medan.",
          },
          {
            q: "Muatan 3 C bergerak 2 m/s tegak lurus medan 0,4 T. Gayanya?",
            options: ["2,4 N", "1,2 N", "0,8 N", "4,8 N"],
            answer: 0,
            explain: "F = 3 × 2 × 0,4 × 1 = 2,4 N.",
          },
          {
            q: "Aurora terjadi karena partikel bermuatan dibelokkan oleh?",
            options: ["Gaya gravitasi", "Gaya gesek", "Gaya Lorentz medan Bumi", "Gaya pegas"],
            answer: 2,
            explain: "Gaya Lorentz menggiring partikel Matahari menuju kutub Bumi.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gerak-melingkar-muatan",
    levelId: "gaya-magnetik",
    order: 2,
    title: "Gerak Melingkar Muatan dalam Medan",
    summary:
      "Bila gaya selalu tegak lurus gerak, lintasan apa yang terbentuk? Jawabannya melahirkan lingkaran sempurna dan teknologi pemercepat partikel.",
    durationMin: 13,
    tags: ["fisika", "gaya lorentz", "gerak melingkar", "sentripetal"],
    blocks: [
      {
        type: "paragraph",
        html: "Tembakkan satu muatan tegak lurus masuk ke medan magnet seragam. Gaya Lorentz langsung mendorongnya menyamping. Tapi begitu arah geraknya berubah, arah gayanya ikut berubah, selalu menekuk ke dalam. Hasilnya: muatan berputar membentuk lingkaran. Sebelum menuliskan rumus, ayo kita pahami mengapa lintasannya melingkar sempurna.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Muatan Melingkar di Dalam Medan Magnet",
        caption: "Gaya selalu menuju pusat, sehingga muatan berputar dengan laju tetap.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Karena gaya Lorentz selalu <strong>tegak lurus gerak</strong>, ia tidak pernah mempercepat atau memperlambat muatan, hanya membelokkannya. Gaya seperti ini berperan persis seperti tali pada bola yang diputar: ia menjadi <strong>gaya sentripetal</strong> yang menjaga muatan tetap melingkar. Lajunya tetap, tapi arahnya terus berubah.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa yang menentukan jari-jari?",
        html: "Muatan yang lebih cepat atau lebih berat (massa besar) membuat lingkaran lebih <strong>lebar</strong>. Medan yang lebih kuat atau muatan yang lebih besar membuat lingkaran lebih <strong>sempit</strong> karena belokannya lebih tajam. Inilah dasar alat yang memisahkan partikel berdasarkan massanya.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Jari-jari Lintasan vs Kecepatan Muatan",
        unit: "sentimeter (cm)",
        source: "proton, B = 0,5 T, gerak tegak lurus medan",
        note: "Pada muatan dan medan tetap, jari-jari membesar lurus seiring kecepatan. Dua kali laju berarti dua kali jari-jari.",
        data: [
          { label: "1×10⁶ m/s", value: 2.1, color: "#34d399" },
          { label: "2×10⁶ m/s", value: 4.2, color: "#22d3ee" },
          { label: "3×10⁶ m/s", value: 6.3, color: "#38bdf8" },
          { label: "4×10⁶ m/s", value: 8.4, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah muatan 0,002 C bermassa 0,0001 kg bergerak 300 m/s tegak lurus medan 0,5 T. Berapa jari-jari lintasan melingkarnya? (gunakan r = m·v/(q·B))",
        answer: 30,
        tolerance: 0.5,
        suffix: " m",
        solution:
          "Pakai r = m·v/(q·B) = (0,0001 × 300)/(0,002 × 0,5) = 0,03/0,001 = <strong>30 m</strong>. Makin cepat atau makin berat, makin lebar lingkarannya.",
        hint: "r = m·v / (q·B). Kalikan m dan v di atas, q dan B di bawah.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan: membuat jari-jari lintasan lebih besar atau lebih kecil.",
        buckets: ["Jari-jari lebih besar", "Jari-jari lebih kecil"],
        items: [
          { text: "Kecepatan muatan dinaikkan", bucket: "Jari-jari lebih besar" },
          { text: "Massa partikel lebih besar", bucket: "Jari-jari lebih besar" },
          { text: "Medan magnet diperkuat", bucket: "Jari-jari lebih kecil" },
          { text: "Muatan partikel lebih besar", bucket: "Jari-jari lebih kecil" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Spektrometer Massa",
        html: "Spektrometer massa menembakkan ion (atom bermuatan) ke dalam medan magnet. Karena jari-jari lintasan bergantung pada massa ion, ion yang lebih berat melengkung lebih lebar dan ion ringan lebih sempit, sehingga keduanya jatuh di tempat berbeda pada detektor. Dengan begitu para ilmuwan bisa menimbang atom satu per satu, mengidentifikasi unsur dalam sampel, bahkan mendeteksi doping pada atlet. Semua bertumpu pada gerak melingkar akibat gaya Lorentz.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rumuskan. Gaya Lorentz berperan sebagai gaya sentripetal: <strong>q·v·B = m·v²/r</strong>. Dari sini jari-jari lintasan adalah <strong>r = m·v/(q·B)</strong>. Periode satu putaran <strong>T = 2πm/(q·B)</strong> ternyata tidak bergantung pada laju, sebuah fakta yang dipakai dalam siklotron. Lajunya tetap karena gaya selalu tegak lurus gerak sehingga tidak melakukan usaha.",
      },
      {
        type: "takeaways",
        items: [
          "Muatan yang masuk tegak lurus medan seragam bergerak melingkar dengan laju tetap.",
          "Gaya Lorentz berperan sebagai gaya sentripetal: q·v·B = m·v²/r.",
          "Jari-jari lintasan r = m·v/(q·B): membesar dengan v dan m, mengecil dengan q dan B.",
          "Periode putaran T = 2πm/(q·B) tidak bergantung pada kecepatan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa muatan bergerak melingkar dalam medan seragam?",
            options: [
              "Gaya searah gerak",
              "Gaya selalu tegak lurus gerak",
              "Tidak ada gaya",
              "Gaya gravitasi menarik",
            ],
            answer: 1,
            explain: "Gaya tegak lurus gerak berperan sebagai gaya sentripetal.",
          },
          {
            q: "Jari-jari lintasan muatan dirumuskan?",
            options: ["r = m·v/(q·B)", "r = q·B/v", "r = B·I·L", "r = µ₀·n·I"],
            answer: 0,
            explain: "Dari q·v·B = m·v²/r diperoleh r = m·v/(q·B).",
          },
          {
            q: "Jika medan magnet diperkuat, jari-jari lintasan?",
            options: ["Membesar", "Mengecil", "Tetap", "Menjadi nol"],
            answer: 1,
            explain: "r berbanding terbalik dengan B, jadi medan kuat membuat lingkaran sempit.",
          },
          {
            q: "Laju muatan saat melingkar dalam medan magnet?",
            options: ["Terus bertambah", "Tetap", "Terus berkurang", "Nol"],
            answer: 1,
            explain: "Gaya tegak lurus gerak tak melakukan usaha, jadi laju tetap.",
          },
          {
            q: "Alat yang memanfaatkan gerak melingkar muatan untuk menimbang atom adalah?",
            options: ["Termometer", "Spektrometer massa", "Barometer", "Voltmeter"],
            answer: 1,
            explain: "Spektrometer massa memisahkan ion berdasarkan jari-jari lintasannya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gaya-pada-kawat-berarus",
    levelId: "gaya-magnetik",
    order: 3,
    title: "Gaya pada Kawat Berarus",
    summary:
      "Arus adalah aliran muatan. Bila tiap muatan didorong gaya Lorentz, seluruh kawat ikut terdorong. Dari sinilah motor listrik berputar.",
    durationMin: 13,
    tags: ["fisika", "gaya magnetik", "kawat berarus", "motor"],
    blocks: [
      {
        type: "paragraph",
        html: "Gantung kawat lurus di antara dua kutub magnet tapal kuda, lalu alirkan arus. Kawat melompat ke atas atau ke bawah, tergantung arah arus. Balik arah arusnya, kawat melompat ke arah sebaliknya. Sebelum menuliskan rumus, ayo kita pahami mengapa seluruh kawat bisa terdorong, bukan cuma satu titik.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Kawat Melompat Saat Arus Dinyalakan",
        caption: "Arah lompatan membalik begitu arah arus dibalik.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Arus listrik tak lain adalah jutaan muatan yang bergerak beriringan. Tiap muatan yang bergerak itu didorong gaya Lorentz, dan dorongan-dorongan kecil itu berjumlah menjadi satu <strong>gaya total pada kawat</strong>. Makin besar arus, makin panjang kawat di dalam medan, dan makin kuat medannya, makin besar gaya yang dirasakan kawat.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Sudut juga menentukan",
        html: "Gaya terbesar terjadi saat kawat <strong>tegak lurus</strong> medan. Bila kawat dipasang <strong>sejajar</strong> medan, gayanya nol, sama seperti muatan yang bergerak searah medan. Arah gaya tetap ditentukan kaidah tangan kanan: jari arah arus, tekuk ke medan, ibu jari menunjuk gaya.",
      },
      {
        type: "widget",
        widget: "SimulatorHukumNewton",
      },
      {
        type: "chart",
        variant: "line",
        title: "Gaya pada Kawat vs Besar Arus",
        unit: "newton (N)",
        source: "B = 0,5 T dan panjang kawat L = 0,2 m, tegak lurus",
        note: "Pada medan dan panjang tetap, gaya bertambah lurus seiring arus. Dua kali arus berarti dua kali gaya.",
        data: [
          { label: "1 A", value: 0.1, color: "#34d399" },
          { label: "2 A", value: 0.2, color: "#22d3ee" },
          { label: "5 A", value: 0.5, color: "#38bdf8" },
          { label: "10 A", value: 1.0, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kawat sepanjang 0,2 m membawa arus 4 A dan berada tegak lurus di dalam medan magnet 0,5 T. Berapa besar gaya magnetik pada kawat?",
        answer: 0.4,
        tolerance: 0.01,
        suffix: " N",
        solution:
          "Pakai F = B·I·L·sin θ = 0,5 × 4 × 0,2 × sin 90° = 0,5 × 4 × 0,2 × 1 = <strong>0,4 N</strong>. Karena kawat tegak lurus medan, sin θ = 1.",
        hint: "F = B·I·L·sin θ, dan sin 90° = 1.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kawat yang sama (L = 0,2 m, I = 4 A, B = 0,5 T) dimiringkan hingga membentuk sudut 30° terhadap medan. Berapa gaya magnetiknya sekarang?",
        answer: 0.2,
        tolerance: 0.01,
        suffix: " N",
        solution:
          "F = B·I·L·sin θ = 0,5 × 4 × 0,2 × sin 30° = 0,4 × 0,5 = <strong>0,2 N</strong>. Memiringkan kawat memperkecil gaya karena sin 30° = 0,5.",
        hint: "sin 30° = 0,5.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan: gaya pada kawat membesar atau mengecil.",
        buckets: ["Gaya membesar", "Gaya mengecil"],
        items: [
          { text: "Arus diperbesar", bucket: "Gaya membesar" },
          { text: "Medan magnet diperkuat", bucket: "Gaya membesar" },
          { text: "Kawat lebih panjang dalam medan", bucket: "Gaya membesar" },
          { text: "Kawat dimiringkan mendekati sejajar medan", bucket: "Gaya mengecil" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pengeras Suara (Loudspeaker)",
        html: "Di dalam pengeras suara ada kumparan kawat yang ditempel pada membran kertas dan diapit magnet permanen. Saat sinyal musik mengalir sebagai arus bolak-balik, kawat mengalami gaya magnetik yang berubah-ubah arah dan besarnya mengikuti lagu. Gaya itu menggerakkan membran maju-mundur, mendorong udara, dan lahirlah suara. Jadi setiap kali kamu mendengar musik dari speaker, kamu sedang mendengar gaya pada kawat berarus yang menari mengikuti irama.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Sekarang baru kita tuliskan. Untuk kawat sepanjang L yang membawa arus I dalam medan B, gaya magnetiknya adalah <strong>F = B·I·L·sin θ</strong>, dengan θ sudut antara kawat dan medan. Gaya maksimum saat kawat tegak lurus medan (sin 90° = 1) dan nol saat sejajar (sin 0° = 0). Arahnya tegak lurus kawat dan medan, ditentukan kaidah tangan kanan. Inilah gaya yang memutar setiap motor listrik.",
      },
      {
        type: "takeaways",
        items: [
          "Gaya pada kawat berarus adalah jumlah gaya Lorentz pada semua muatan yang mengalir.",
          "F = B·I·L·sin θ: membesar dengan B, I, dan L.",
          "Gaya maksimum saat kawat tegak lurus medan, nol saat sejajar medan.",
          "Gaya ini adalah prinsip kerja motor listrik dan pengeras suara.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Gaya pada kawat berarus dihitung dengan?",
            options: ["F = m·a", "F = B·I·L·sin θ", "F = q/V", "F = I·R"],
            answer: 1,
            explain: "Gaya pada kawat berarus adalah F = B·I·L·sin θ.",
          },
          {
            q: "Kapan gaya pada kawat bernilai nol?",
            options: [
              "Saat kawat tegak lurus medan",
              "Saat kawat sejajar medan",
              "Saat arus besar",
              "Saat kawat panjang",
            ],
            answer: 1,
            explain: "Kawat sejajar medan berarti sin 0° = 0, gaya nol.",
          },
          {
            q: "Kawat 0,5 m berarus 2 A dalam medan 0,4 T tegak lurus. Gayanya?",
            options: ["0,4 N", "0,8 N", "0,2 N", "1,0 N"],
            answer: 0,
            explain: "F = 0,4 × 2 × 0,5 × 1 = 0,4 N.",
          },
          {
            q: "Agar gaya pada kawat lebih besar, kita bisa?",
            options: [
              "Memperkecil arus",
              "Memperbesar arus, medan, atau panjang kawat",
              "Memendekkan kawat",
              "Memiringkan kawat sejajar medan",
            ],
            answer: 1,
            explain: "F = B·I·L·sin θ, jadi memperbesar B, I, atau L menambah gaya.",
          },
          {
            q: "Pengeras suara menghasilkan bunyi karena gaya magnetik?",
            options: [
              "Memanaskan kawat",
              "Menggerakkan membran maju-mundur",
              "Mengubah warna",
              "Menambah massa udara",
            ],
            answer: 1,
            explain: "Gaya yang berubah mengikuti sinyal menggetarkan membran.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "gaya-antar-dua-kawat",
    levelId: "gaya-magnetik",
    order: 4,
    title: "Gaya Antar Dua Kawat Sejajar",
    summary:
      "Dua kawat yang sama-sama berarus bisa saling menarik atau menolak tanpa bersentuhan. Fenomena ini bahkan dipakai mendefinisikan satuan ampere.",
    durationMin: 13,
    tags: ["fisika", "gaya magnetik", "dua kawat", "ampere"],
    blocks: [
      {
        type: "paragraph",
        html: "Bentangkan dua kawat sejajar berdekatan, lalu alirkan arus pada keduanya. Bila arusnya searah, kedua kawat saling mendekat. Bila berlawanan arah, keduanya saling menjauh. Tak ada yang menyentuh. Sebelum menuliskan rumus, ayo kita pahami percakapan magnetik diam-diam antara dua kawat ini.",
      },
      {
        type: "video",
        comp: "HukumNewtonVideo",
        title: "Video: Dua Kawat Sejajar Saling Tarik dan Tolak",
        caption: "Arus searah membuat kawat merapat; arus berlawanan membuatnya merenggang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Tiap kawat berarus menciptakan medan magnetnya sendiri di sekelilingnya. Kawat kedua yang berada di dalam medan kawat pertama langsung merasakan gaya. Begitu pula sebaliknya. Hasilnya saling: <strong>arus searah saling menarik</strong>, <strong>arus berlawanan saling menolak</strong>. Kebalikan dari aturan magnet biasa, jadi mudah keliru bila tidak teliti.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Apa yang menguatkan gaya?",
        html: "Gaya per satuan panjang antar kawat membesar bila <strong>arus tiap kawat</strong> lebih besar, dan mengecil bila <strong>jarak</strong> antar kawat lebih jauh. Ini karena medan kawat lurus melemah seiring jarak. Karena efeknya sangat teratur dan terukur, dahulu hubungan ini dipakai sebagai patokan satu ampere.",
      },
      {
        type: "widget",
        widget: "KalkulatorOhm",
      },
      {
        type: "chart",
        variant: "line",
        title: "Gaya per Meter Antar Kawat vs Jarak Pisah",
        unit: "mikronewton/meter (µN/m)",
        source: "kedua kawat berarus 10 A, F/L = µ₀·I₁·I₂/(2π·d)",
        note: "Gaya melemah seiring jarak: dua kali lebih jauh berarti setengah kali gaya. Pola 1/d khas kawat lurus.",
        data: [
          { label: "1 cm", value: 200, color: "#a78bfa" },
          { label: "2 cm", value: 100, color: "#38bdf8" },
          { label: "5 cm", value: 40, color: "#22d3ee" },
          { label: "10 cm", value: 20, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Dua kawat sejajar berjarak 0,1 m masing-masing berarus 10 A. Berapa gaya per meter antar keduanya? (gunakan µ₀ = 4π×10⁻⁷, jawab dalam µN/m)",
        answer: 200,
        tolerance: 5,
        suffix: " µN/m",
        solution:
          "Pakai F/L = µ₀·I₁·I₂/(2π·d) = (4π×10⁻⁷ × 10 × 10)/(2π × 0,1) = (2×10⁻⁷ × 100)/0,1 = 2×10⁻⁴ N/m = <strong>200 µN/m</strong>.",
        hint: "F/L = µ₀·I₁·I₂ / (2π·d). Ingat 1 N = 10⁶ µN.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap situasi dua kawat sejajar: saling tarik atau saling tolak.",
        buckets: ["Saling menarik", "Saling menolak"],
        items: [
          { text: "Kedua arus searah", bucket: "Saling menarik" },
          { text: "Kedua arus berlawanan arah", bucket: "Saling menolak" },
          { text: "Arus sama-sama ke atas", bucket: "Saling menarik" },
          { text: "Satu arus ke atas, satu ke bawah", bucket: "Saling menolak" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan faktor dengan pengaruhnya pada gaya antar kawat.",
        pairs: [
          { left: "Arus diperbesar", right: "Gaya membesar" },
          { left: "Jarak antar kawat dijauhkan", right: "Gaya mengecil" },
          { left: "Arus searah", right: "Saling menarik" },
          { left: "Arus berlawanan", right: "Saling menolak" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Definisi Ampere dan Rel Kereta Maglev",
        html: "Selama bertahun-tahun, satu ampere didefinisikan lewat gaya antar dua kawat sejajar: arus yang menghasilkan gaya tertentu per meter pada jarak satu meter. Gaya antar penghantar ini bukan sekadar teori. Pada jalur transmisi listrik, kabel-kabel berarus besar bisa saling tarik atau tolak hebat saat terjadi lonjakan arus, sehingga harus dipasang penyangga kuat. Prinsip serupa, gaya antar penghantar berarus, juga ikut berperan dalam sistem rel magnetik kereta cepat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rumuskan. Gaya per satuan panjang antara dua kawat sejajar adalah <strong>F/L = µ₀·I₁·I₂ / (2π·d)</strong>, dengan I₁ dan I₂ arus tiap kawat, d jarak pisah, dan µ₀ = 4π×10⁻⁷ T·m/A. Arus <strong>searah</strong> menghasilkan tarik-menarik, arus <strong>berlawanan</strong> menghasilkan tolak-menolak. Rumus ini menggabungkan dua pelajaran: kawat menghasilkan medan, dan medan memberi gaya pada kawat lain.",
      },
      {
        type: "takeaways",
        items: [
          "Dua kawat berarus saling memberi gaya lewat medan magnet masing-masing.",
          "Arus searah saling menarik; arus berlawanan saling menolak.",
          "Gaya per panjang F/L = µ₀·I₁·I₂/(2π·d): membesar dengan arus, mengecil dengan jarak.",
          "Hubungan ini pernah dipakai untuk mendefinisikan satuan ampere.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dua kawat sejajar dengan arus searah akan?",
            options: ["Saling menolak", "Saling menarik", "Diam", "Berputar"],
            answer: 1,
            explain: "Arus searah membuat kedua kawat saling menarik.",
          },
          {
            q: "Gaya per panjang antar dua kawat dirumuskan?",
            options: [
              "F/L = µ₀·I₁·I₂/(2π·d)",
              "F/L = B·I·L",
              "F/L = q·v·B",
              "F/L = m·a",
            ],
            answer: 0,
            explain: "F/L = µ₀·I₁·I₂/(2π·d) untuk dua kawat sejajar.",
          },
          {
            q: "Jika jarak antar kawat digandakan, gaya per panjang menjadi?",
            options: ["Dua kali", "Setengah", "Empat kali", "Tetap"],
            answer: 1,
            explain: "Karena F/L ∝ 1/d, jarak dua kali membuat gaya setengahnya.",
          },
          {
            q: "Dua kawat dengan arus berlawanan arah akan?",
            options: ["Saling menarik", "Saling menolak", "Tidak berinteraksi", "Meleleh"],
            answer: 1,
            explain: "Arus berlawanan menghasilkan tolak-menolak.",
          },
          {
            q: "Satuan apa yang dahulu didefinisikan lewat gaya antar dua kawat?",
            options: ["Volt", "Ohm", "Ampere", "Tesla"],
            answer: 2,
            explain: "Definisi ampere lama bertumpu pada gaya antar dua kawat sejajar.",
          },
        ],
      },
    ],
  },
];
