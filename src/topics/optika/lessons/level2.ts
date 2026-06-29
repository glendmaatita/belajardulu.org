import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "pembiasan",
    levelId: "pembiasan-lensa",
    order: 1,
    title: "Pembiasan dan Indeks Bias",
    summary:
      "Sebelum berhitung dengan Snell, kita pecahkan dulu teka-teki klasik: mengapa sedotan terlihat patah saat dicelupkan ke gelas berisi air.",
    durationMin: 14,
    tags: ["optika", "pembiasan", "snell", "indeks-bias"],
    blocks: [
      {
        type: "paragraph",
        html: "Celupkan sedotan ke dalam segelas air. Lihat dari samping: sedotannya tampak <strong>patah</strong> tepat di batas permukaan air, padahal kamu tahu sedotan itu lurus. Mata tidak berbohong, dan sedotan tidak benar-benar bengkok. Yang terjadi adalah cahaya membelok saat berpindah medium. Ayo kita selami fenomena ini sebelum bertemu rumusnya.",
      },
      {
        type: "video",
        comp: "PembiasanCahaya",
        title: "Video: Cahaya Membelok Antar Medium",
        caption: "Saat masuk ke medium lebih rapat, cahaya melambat dan membelok mendekati garis normal.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Letakkan koin di dasar mangkuk kosong, lalu mundur sampai koin tepat tak terlihat di balik tepi mangkuk. Sekarang minta teman menuang air pelan-pelan. Ajaib: koin seolah muncul kembali! Cahaya dari koin membelok saat keluar dari air, jadi seakan koin terangkat. Amati dulu keajaibannya, rumus menyusul.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Indeks bias mengukur 'kerapatan optik'",
        html: "<strong>Indeks bias (n)</strong> menyatakan seberapa lambat cahaya merambat dalam suatu medium dibanding di ruang hampa. Makin besar n, makin rapat optiknya, dan makin kuat cahaya membelok. Udara n ≈ 1, air n ≈ 1,33, kaca n ≈ 1,5.",
      },
      {
        type: "widget",
        widget: "SimulatorGelombang",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Indeks Bias Beberapa Medium",
        unit: "indeks bias n",
        source: "data fisika baku",
        note: "Angka nyata, bukan karangan. Makin tinggi n, makin lambat cahaya di dalamnya dan makin tajam ia membelok. Intan paling tinggi, itu sebabnya ia berkilau memukau.",
        data: [
          { label: "Udara", value: 1.0, color: "#34d399" },
          { label: "Air", value: 1.33, color: "#22d3ee" },
          { label: "Kaca", value: 1.5, color: "#38bdf8" },
          { label: "Intan", value: 2.42, color: "#818cf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Cahaya masuk dari udara ke sebuah kaca. Sudut datang 60° dan sudut bias terukur 30°. Berapa indeks bias kaca itu? (gunakan sin 60° = 0,866 dan sin 30° = 0,5)",
        answer: 1.73,
        tolerance: 0.05,
        solution:
          "Pakai Hukum Snell n₁ sin θ₁ = n₂ sin θ₂. Udara n₁ = 1, jadi n₂ = sin 60° / sin 30° = 0,866 / 0,5 = <strong>1,73</strong>. Nilai ini wajar untuk kaca padat.",
        hint: "n₂ = sin(sudut datang) dibagi sin(sudut bias), karena n udara = 1.",
      },
      {
        type: "calcExercise",
        prompt:
          "Cahaya dari udara (n = 1) masuk ke air (n = 1,33) dengan sudut datang yang membuat sin θ₁ = 0,80. Berapa nilai sin θ₂ di dalam air?",
        answer: 0.6,
        tolerance: 0.02,
        solution:
          "Snell: 1 × 0,80 = 1,33 × sin θ₂, jadi sin θ₂ = 0,80 / 1,33 = <strong>0,60</strong>. Karena sin θ₂ lebih kecil, sudutnya lebih kecil: cahaya membelok mendekati garis normal saat masuk medium lebih rapat.",
        hint: "sin θ₂ = (n₁ × sin θ₁) / n₂.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Saat cahaya melintas antar medium, apakah ia membelok mendekati atau menjauhi garis normal?",
        buckets: ["Mendekati garis normal", "Menjauhi garis normal"],
        items: [
          { text: "Dari udara masuk ke air", bucket: "Mendekati garis normal" },
          { text: "Dari air keluar ke udara", bucket: "Menjauhi garis normal" },
          { text: "Dari udara masuk ke kaca", bucket: "Mendekati garis normal" },
          { text: "Dari kaca keluar ke udara", bucket: "Menjauhi garis normal" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Dasar Kolam Tampak Lebih Dangkal",
        html: "Kolam renang yang sebenarnya sedalam 2 meter sering tampak hanya sekitar 1,5 meter dari pinggir. Penyebabnya pembiasan. Cahaya dari dasar kolam membelok <strong>menjauhi garis normal</strong> saat keluar dari air ke udara, sehingga mata kita seakan menarik dasar kolam ke atas. Kedalaman semu = kedalaman asli dibagi indeks bias air (2 / 1,33 ≈ 1,5 m). Banyak kecelakaan terjadi karena perenang salah menduga kedalaman. Tidak ada sihir, hanya cahaya yang membelok di batas dua medium.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Barulah sekarang kita tuliskan <strong>Hukum Snell</strong>: <strong>n₁ · sin θ₁ = n₂ · sin θ₂</strong>. Saat cahaya masuk ke medium lebih rapat (n besar), sudutnya mengecil sehingga membelok mendekati normal. Indeks bias juga bisa ditulis n = c/v. Rumus ini cuma merangkum pola sedotan patah dan koin muncul yang sudah kamu amati sendiri.",
      },
      {
        type: "takeaways",
        items: [
          "Pembiasan adalah pembelokan cahaya saat berpindah medium dengan kerapatan optik berbeda.",
          "Hukum Snell: n₁ · sin θ₁ = n₂ · sin θ₂.",
          "Masuk ke medium lebih rapat, cahaya membelok mendekati garis normal; sebaliknya menjauhi.",
          "Indeks bias adalah angka nyata: udara 1,00; air 1,33; kaca 1,5; intan 2,42.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa sedotan tampak patah di dalam gelas berisi air?",
            options: [
              "Sedotan benar-benar bengkok",
              "Cahaya dari sedotan membelok saat keluar dari air",
              "Air memperbesar sedotan",
              "Mata sedang lelah",
            ],
            answer: 1,
            explain: "Cahaya membelok di batas air dan udara, sehingga posisi sedotan tampak bergeser.",
          },
          {
            q: "Bunyi Hukum Snell adalah?",
            options: [
              "n₁ + θ₁ = n₂ + θ₂",
              "n₁ · sin θ₁ = n₂ · sin θ₂",
              "θ₁ = θ₂",
              "n₁ / n₂ = θ₁ · θ₂",
            ],
            answer: 1,
            explain: "Hukum Snell: n₁ · sin θ₁ = n₂ · sin θ₂.",
          },
          {
            q: "Cahaya masuk dari udara ke kaca. Ia akan membelok?",
            options: [
              "Menjauhi garis normal",
              "Mendekati garis normal",
              "Tidak membelok",
              "Berbalik arah",
            ],
            answer: 1,
            explain: "Kaca lebih rapat, cahaya melambat dan membelok mendekati garis normal.",
          },
          {
            q: "Medium manakah dengan indeks bias terbesar?",
            options: ["Udara", "Air", "Kaca", "Intan"],
            answer: 3,
            explain: "Intan memiliki n ≈ 2,42, tertinggi di antara pilihan, sehingga sangat berkilau.",
          },
          {
            q: "Mengapa dasar kolam tampak lebih dangkal dari aslinya?",
            options: [
              "Air menyusutkan kedalaman",
              "Cahaya dari dasar membelok menjauhi normal saat keluar, dasar seakan terangkat",
              "Mata tidak bisa melihat dalam air",
              "Kolam memang dangkal",
            ],
            answer: 1,
            explain: "Pembiasan saat cahaya keluar dari air membuat kedalaman semu = kedalaman asli / n.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pemantulan-total-serat-optik",
    levelId: "pembiasan-lensa",
    order: 2,
    title: "Pemantulan Total dan Serat Optik",
    summary:
      "Sebelum menghitung sudut kritis, kita kagumi dulu bagaimana cahaya bisa 'terperangkap' di dalam air mancur dan bagaimana internet mengalir lewat seutas kaca setipis rambut.",
    durationMin: 14,
    tags: ["optika", "pemantulan-total", "sudut-kritis", "serat-optik"],
    blocks: [
      {
        type: "paragraph",
        html: "Pernah lihat air mancur hias yang seakan bercahaya dari dalam, dengan cahaya yang ikut melengkung mengikuti pancuran air? Cahaya itu seolah <strong>terjebak</strong> di dalam air dan tidak bisa keluar. Hal yang sama membuat seutas kaca setipis rambut sanggup membawa seluruh video yang kamu tonton dari benua lain. Mengapa cahaya bisa terperangkap di dalam medium? Ayo selami dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "PembiasanCahaya",
        title: "Video: Cahaya Terpantul Total di Batas Medium",
        caption: "Di atas sudut kritis, cahaya tidak lagi keluar dari medium rapat, semuanya dipantulkan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Isi gelas bening dengan air, lalu lihat permukaan air dari bawah ke atas dengan sudut sangat miring (mata di bawah ketinggian permukaan). Pada sudut tertentu, permukaan air berhenti tembus pandang dan berubah menjadi <strong>cermin sempurna</strong> yang memantulkan dasar gelas. Cahaya dari bawah tidak bisa lagi menembus keluar. Itulah pemantulan total. Amati ambang sudutnya dulu, rumus menyusul.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua syarat pemantulan total",
        html: "Pemantulan total internal hanya terjadi bila: (1) cahaya bergerak dari medium <strong>lebih rapat ke kurang rapat</strong> (misalnya kaca ke udara, air ke udara); dan (2) sudut datang <strong>melebihi sudut kritis</strong> θc. Di bawah θc cahaya masih sebagian keluar (membias); tepat di θc cahaya bias menyusur permukaan; di atas θc seluruhnya dipantulkan kembali.",
      },
      {
        type: "widget",
        widget: "SimulatorGelombang",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Sudut Kritis ke Udara untuk Beberapa Medium",
        unit: "derajat sudut kritis θc",
        source: "perhitungan sin θc = 1/n",
        note: "Angka nyata. Makin besar indeks bias medium, makin kecil sudut kritisnya, sehingga makin mudah cahaya terperangkap. Intan punya θc paling kecil, kunci kilaunya.",
        data: [
          { label: "Air (n=1,33)", value: 48.8, color: "#34d399" },
          { label: "Akrilik (n=1,49)", value: 42.2, color: "#22d3ee" },
          { label: "Kaca (n=1,5)", value: 41.8, color: "#38bdf8" },
          { label: "Intan (n=2,42)", value: 24.4, color: "#818cf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Cahaya bergerak dari dalam kaca (n = 1,5) menuju udara (n = 1). Berapa nilai sinus sudut kritisnya? (gunakan sin θc = n_udara / n_kaca)",
        answer: 0.67,
        tolerance: 0.02,
        solution:
          "sin θc = n₂/n₁ = 1 / 1,5 = <strong>0,67</strong> (sudut kritis sekitar 41,8°). Untuk sudut datang lebih besar dari ini, cahaya tidak bisa keluar dari kaca dan dipantulkan total.",
        hint: "Bagi indeks bias medium luar (udara = 1) dengan indeks bias kaca.",
      },
      {
        type: "calcExercise",
        prompt:
          "Cahaya dari dalam air (n = 1,33) menuju udara (n = 1). Berapa nilai sin θc untuk pemantulan total?",
        answer: 0.75,
        tolerance: 0.02,
        solution:
          "sin θc = 1 / 1,33 = <strong>0,75</strong> (sudut kritis sekitar 48,8°). Karena sudut kritis air lebih besar dari kaca, cahaya lebih sulit terperangkap di air dibanding di kaca.",
        hint: "sin θc = n_udara / n_air = 1/1,33.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Apakah pemantulan total bisa terjadi pada tiap kondisi berikut?",
        buckets: ["Bisa terjadi", "Tidak mungkin"],
        items: [
          { text: "Dari kaca ke udara, sudut datang di atas kritis", bucket: "Bisa terjadi" },
          { text: "Dari air ke udara, sudut datang sangat besar", bucket: "Bisa terjadi" },
          { text: "Dari udara masuk ke kaca", bucket: "Tidak mungkin" },
          { text: "Dari air masuk ke intan", bucket: "Tidak mungkin" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Serat Optik Membawa Internet",
        html: "Seutas <strong>serat optik</strong> adalah benang kaca sangat murni, dibungkus lapisan kaca lain berindeks bias lebih kecil. Sinyal cahaya (laser) yang masuk dari ujung selalu mengenai dinding dengan sudut di atas <strong>sudut kritis</strong>, sehingga mengalami pemantulan total berulang-ulang dan tidak pernah bocor keluar. Cahaya pun memantul ribuan kali sambil melaju ratusan kilometer dengan kerugian sangat kecil, membawa data internet, telepon, dan TV. Endoskopi medis memakai prinsip yang sama untuk mengintip ke dalam tubuh. Semuanya hanya satu fenomena: cahaya yang terperangkap oleh pemantulan total.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita tuliskan. Sudut kritis memenuhi <strong>sin θc = n₂ / n₁</strong> (dengan n₁ > n₂, medium asal lebih rapat). Untuk sudut datang lebih besar dari θc, terjadi <strong>pemantulan total internal</strong>: seluruh cahaya dipantulkan, tidak ada yang membias keluar. Rumus ini cuma merangkum ambang sudut yang sudah kamu lihat saat permukaan air berubah jadi cermin.",
      },
      {
        type: "takeaways",
        items: [
          "Pemantulan total terjadi dari medium rapat ke kurang rapat saat sudut datang melebihi sudut kritis.",
          "Sudut kritis: sin θc = n₂/n₁ (n₁ medium asal yang lebih rapat).",
          "Makin besar indeks bias medium, makin kecil sudut kritisnya.",
          "Serat optik dan endoskop memanfaatkan pemantulan total untuk memandu cahaya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pemantulan total internal hanya terjadi saat cahaya bergerak?",
            options: [
              "Dari medium kurang rapat ke lebih rapat",
              "Dari medium lebih rapat ke kurang rapat",
              "Antar dua medium yang sama",
              "Selalu, di sembarang arah",
            ],
            answer: 1,
            explain: "Syaratnya cahaya dari rapat ke kurang rapat (n besar ke n kecil) dan sudut di atas kritis.",
          },
          {
            q: "Rumus sudut kritis adalah?",
            options: ["sin θc = n₁/n₂", "sin θc = n₂/n₁", "θc = n₁ − n₂", "sin θc = n₁·n₂"],
            answer: 1,
            explain: "sin θc = n₂/n₁, dengan n₁ medium asal yang lebih rapat dan n₂ medium tujuan.",
          },
          {
            q: "Dari kaca (n=1,5) ke udara, nilai sin θc kira-kira?",
            options: ["0,40", "0,67", "1,50", "0,90"],
            answer: 1,
            explain: "sin θc = 1/1,5 = 0,67, sudut kritis sekitar 41,8°.",
          },
          {
            q: "Apa yang terjadi bila sudut datang melebihi sudut kritis?",
            options: [
              "Cahaya seluruhnya membias keluar",
              "Cahaya seluruhnya dipantulkan kembali ke medium asal",
              "Cahaya berhenti",
              "Cahaya berubah warna",
            ],
            answer: 1,
            explain: "Di atas sudut kritis tidak ada cahaya yang keluar, semuanya dipantulkan total.",
          },
          {
            q: "Serat optik bisa membawa cahaya jauh karena?",
            options: [
              "Cahaya dibiaskan terus-menerus keluar",
              "Pemantulan total internal berulang menjaga cahaya tetap di dalam",
              "Kaca memperkuat cahaya",
              "Cahaya merambat lebih cepat di kaca",
            ],
            answer: 1,
            explain: "Sinyal selalu mengenai dinding di atas sudut kritis, jadi terpantul total tanpa bocor.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "lensa-cembung",
    levelId: "pembiasan-lensa",
    order: 3,
    title: "Lensa Cembung",
    summary:
      "Sebelum menghafal 1/f = 1/s + 1/s', kita lihat dulu bagaimana kaca pembesar membalik tulisan dan bagaimana kamera membentuk gambar.",
    durationMin: 15,
    tags: ["optika", "lensa", "lensa-cembung", "bayangan"],
    blocks: [
      {
        type: "paragraph",
        html: "Pegang kaca pembesar di atas buku. Saat dekat, huruf membesar dan tegak. Lalu jauhkan pelan-pelan: tiba-tiba huruf membalik dan mengecil! Lensa yang sama memberi dua bayangan berbeda. Mengapa? Jawabannya ada pada bagaimana lensa <strong>memusatkan cahaya</strong>. Ayo amati dulu sebelum bertemu rumus lensa.",
      },
      {
        type: "video",
        comp: "PembiasanCahaya",
        title: "Video: Lensa Memusatkan Cahaya",
        caption: "Lensa cembung membiaskan sinar sejajar menuju satu titik fokus.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pada siang terik, pegang kaca pembesar dan arahkan cahaya matahari ke selembar kertas. Geser jaraknya sampai muncul titik terang sekecil mungkin. Jarak antara lensa dan titik itu adalah <strong>jarak fokus</strong>. Di titik fokus, lensa berhasil mengumpulkan seluruh cahaya matahari jadi satu. Rasakan dulu, jangan langsung cari rumusnya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Lensa cembung itu konvergen",
        html: "Lensa <strong>cembung</strong> (lebih tebal di tengah) bersifat konvergen: ia mengumpulkan sinar sejajar ke satu titik fokus. Saat benda jauh (di luar 2f) bayangannya nyata, terbalik, diperkecil. Saat benda dekat (di dalam fokus) bayangannya maya, tegak, diperbesar, inilah mode kaca pembesar.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Jarak Bayangan vs Jarak Benda (lensa cembung f = 10 cm)",
        unit: "jarak bayangan s' (cm)",
        source: "perhitungan 1/f = 1/s + 1/s'",
        note: "Angka nyata dari rumus lensa. Saat benda mendekati titik fokus (10 cm), bayangan melesat makin jauh. Itu sebabnya proyektor butuh penyetelan halus.",
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
          "Sebuah lensa cembung berjarak fokus 10 cm. Sebuah benda diletakkan 15 cm di depan lensa. Di mana letak bayangannya (jarak s')?",
        answer: 30,
        tolerance: 0.5,
        suffix: " cm",
        solution:
          "Pakai 1/f = 1/s + 1/s'. Maka 1/s' = 1/f − 1/s = 1/10 − 1/15 = 0,1 − 0,0667 = 0,0333. Jadi s' = 1 / 0,0333 = <strong>30 cm</strong>. Bayangan nyata dan terbalik, terbentuk di sisi lain lensa.",
        hint: "1/s' = 1/f − 1/s, lalu balik hasilnya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Lensa cembung jarak fokus 10 cm, benda diletakkan 20 cm di depan lensa. Berapa perbesaran bayangannya? (perbesaran = s'/s, dan dari rumus s' = 20 cm)",
        answer: 1,
        tolerance: 0.05,
        suffix: "×",
        solution:
          "Saat benda di 20 cm (dua kali fokus), s' juga = 20 cm. Perbesaran = s'/s = 20/20 = <strong>1×</strong>. Bayangan sama besar tetapi terbalik. Ini posisi istimewa pada lensa cembung.",
        hint: "Perbesaran = jarak bayangan dibagi jarak benda.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan sifat bayangan lensa cembung berdasarkan posisi benda.",
        buckets: ["Benda di luar fokus", "Benda di dalam fokus"],
        items: [
          { text: "Bayangan nyata dan terbalik", bucket: "Benda di luar fokus" },
          { text: "Bisa diproyeksikan ke layar", bucket: "Benda di luar fokus" },
          { text: "Bayangan maya, tegak, diperbesar", bucket: "Benda di dalam fokus" },
          { text: "Berfungsi sebagai kaca pembesar", bucket: "Benda di dalam fokus" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan penerapan lensa cembung dengan perannya.",
        pairs: [
          { left: "Kaca pembesar", right: "Benda di dalam fokus, bayangan maya diperbesar" },
          { left: "Lensa kamera/HP", right: "Benda jauh, bayangan nyata diperkecil di sensor" },
          { left: "Proyektor", right: "Benda antara f dan 2f, bayangan nyata diperbesar di layar" },
          { left: "Lensa objektif mikroskop", right: "Membentuk bayangan nyata diperbesar dari benda kecil" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kamera Ponsel di Saku",
        html: "Lensa cembung di kamera ponselmu memusatkan cahaya dari pemandangan ke sensor di belakangnya, persis seperti kaca pembesar memusatkan matahari ke kertas. Karena objek biasanya jauh, bayangan yang jatuh di sensor menjadi nyata, terbalik, dan diperkecil, lalu perangkat lunak memutarnya kembali agar tegak. Saat kamu menyentuh layar untuk fokus, motor kecil menggeser lensa beberapa mikrometer untuk menepatkan s' di permukaan sensor. Semua ini hanyalah penerapan satu pola: lensa cembung mengumpulkan cahaya ke titik.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum jadi <strong>persamaan lensa tipis</strong>: <strong>1/f = 1/s + 1/s'</strong>, dengan f jarak fokus (positif untuk cembung), s jarak benda, dan s' jarak bayangan. Perbesarannya M = |s'/s|. Kuat lensa P = 1/f (dalam dioptri jika f dalam meter). Rumus ini cuma menuliskan rapi apa yang sudah kamu lihat: makin dekat benda ke fokus, makin jauh bayangannya.",
      },
      {
        type: "takeaways",
        items: [
          "Lensa cembung bersifat konvergen: mengumpulkan sinar sejajar ke titik fokus.",
          "Persamaan lensa tipis: 1/f = 1/s + 1/s'; perbesaran M = |s'/s|.",
          "Benda di luar fokus memberi bayangan nyata terbalik; di dalam fokus maya tegak diperbesar.",
          "Kuat lensa P = 1/f (dioptri), bernilai positif untuk lensa cembung.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Lensa cembung bersifat?",
            options: ["Divergen", "Konvergen", "Tidak membelokkan cahaya", "Selalu memperkecil"],
            answer: 1,
            explain: "Lensa cembung mengumpulkan sinar sejajar ke titik fokus, jadi konvergen.",
          },
          {
            q: "Persamaan lensa tipis yang benar adalah?",
            options: ["f = s + s'", "1/f = 1/s + 1/s'", "f = s · s'", "1/f = s − s'"],
            answer: 1,
            explain: "Persamaan lensa tipis: 1/f = 1/s + 1/s'.",
          },
          {
            q: "Lensa f = 10 cm, benda di 15 cm. Jarak bayangannya?",
            options: ["6 cm", "15 cm", "30 cm", "60 cm"],
            answer: 2,
            explain: "1/s' = 1/10 − 1/15 = 0,0333, jadi s' = 30 cm.",
          },
          {
            q: "Agar lensa cembung berfungsi sebagai kaca pembesar, benda harus diletakkan?",
            options: [
              "Lebih jauh dari 2f",
              "Tepat di 2f",
              "Di dalam fokus (lebih dekat dari f)",
              "Sangat jauh tak terhingga",
            ],
            answer: 2,
            explain: "Benda di dalam fokus memberi bayangan maya, tegak, dan diperbesar.",
          },
          {
            q: "Rumus perbesaran bayangan adalah?",
            options: ["M = s · s'", "M = |s'/s|", "M = f/s", "M = s + s'"],
            answer: 1,
            explain: "Perbesaran adalah perbandingan jarak bayangan terhadap jarak benda, M = |s'/s|.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "lensa-cekung",
    levelId: "pembiasan-lensa",
    order: 4,
    title: "Lensa Cekung",
    summary:
      "Sebelum memakai rumus, kita pahami dulu mengapa kacamata orang rabun jauh selalu memperkecil pemandangan dan terasa 'menjauhkan' benda.",
    durationMin: 13,
    tags: ["optika", "lensa-cekung", "divergen", "dioptri"],
    blocks: [
      {
        type: "paragraph",
        html: "Pinjam kacamata teman yang rabun jauh (berlensa minus) dan lihat tulisan melalui lensanya. Tulisannya tampak <strong>mengecil</strong> dan seakan mundur menjauh, berapa pun jaraknya, dan tidak pernah terbalik. Bandingkan dengan kaca pembesar yang justru membesarkan. Mengapa lensa cekung selalu memperkecil? Jawabannya ada pada cara ia <strong>menyebarkan cahaya</strong>. Ayo amati dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "PembiasanCahaya",
        title: "Video: Lensa Cekung Menyebarkan Cahaya",
        caption: "Lensa cekung membiaskan sinar sejajar seolah memancar dari titik fokus di depannya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pegang lensa minus (kacamata rabun jauh) di atas tulisan, lalu jauhkan dari kertas pelan-pelan. Perhatikan: tulisan tetap <strong>tegak</strong> dan makin <strong>kecil</strong>, tidak pernah membalik seperti kaca pembesar. Coba pula arahkan ke cahaya matahari di atas kertas: tidak pernah muncul titik api, karena cahaya justru disebarkan, bukan dikumpulkan. Amati dulu sifatnya, rumus belakangan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Divergen dan kuat lensa negatif",
        html: "Lensa <strong>cekung</strong> (lebih tipis di tengah) bersifat <strong>divergen</strong>: sinar sejajar disebarkan seolah memancar dari titik fokus di depan lensa, sehingga jarak fokusnya <strong>negatif</strong>. Bayangannya selalu maya, tegak, dan diperkecil. Kuat lensanya P = 1/f juga negatif (satuan dioptri), itu sebabnya kacamata rabun jauh disebut berlensa 'minus'.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Kuat Lensa (Dioptri) untuk Tiap Jarak Fokus Lensa Cekung",
        unit: "kuat lensa P (dioptri)",
        source: "perhitungan P = 1/f dengan f dalam meter",
        note: "Angka nyata. Makin pendek jarak fokus (lensa makin kuat menyebarkan), makin besar nilai minus dioptrinya. Inilah angka yang tertera pada resep kacamata.",
        data: [
          { label: "f = −100 cm", value: -1, color: "#34d399" },
          { label: "f = −50 cm", value: -2, color: "#22d3ee" },
          { label: "f = −25 cm", value: -4, color: "#38bdf8" },
          { label: "f = −20 cm", value: -5, color: "#818cf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kacamata rabun jauh memakai lensa cekung dengan jarak fokus f = −50 cm. Berapa kuat lensanya dalam dioptri? (P = 1/f, dengan f dalam meter)",
        answer: -2,
        tolerance: 0.1,
        suffix: " dioptri",
        solution:
          "Ubah f ke meter: −50 cm = −0,5 m. Maka P = 1/f = 1/(−0,5) = <strong>−2 dioptri</strong>. Tanda minus menandakan lensa cekung (divergen), persis seperti resep kacamata minus 2.",
        hint: "Ubah fokus ke meter dulu, lalu P = 1/f.",
      },
      {
        type: "calcExercise",
        prompt:
          "Lensa cekung berjarak fokus f = −20 cm. Sebuah benda diletakkan 30 cm di depannya. Berapa nilai mutlak jarak bayangannya (dalam cm)?",
        answer: 12,
        tolerance: 0.5,
        suffix: " cm",
        solution:
          "1/s' = 1/f − 1/s = −1/20 − 1/30 = −3/60 − 2/60 = −5/60 = −1/12. Jadi s' = −12 cm. Tanda negatif berarti bayangan <strong>maya</strong>, di sisi yang sama dengan benda, dengan |s'| = <strong>12 cm</strong>.",
        hint: "Gunakan f = −20: 1/s' = 1/f − 1/s.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap lensa sebagai cembung (positif) atau cekung (negatif).",
        buckets: ["Lensa cembung (konvergen, +)", "Lensa cekung (divergen, −)"],
        items: [
          { text: "Kaca pembesar", bucket: "Lensa cembung (konvergen, +)" },
          { text: "Lensa kamera ponsel", bucket: "Lensa cembung (konvergen, +)" },
          { text: "Kacamata rabun jauh (miopi)", bucket: "Lensa cekung (divergen, −)" },
          { text: "Lensa pengintip pintu (peephole)", bucket: "Lensa cekung (divergen, −)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kacamata Minus untuk Rabun Jauh",
        html: "Mata penderita rabun jauh (miopi) terlalu kuat membiaskan, sehingga bayangan benda jauh jatuh <strong>di depan</strong> retina dan tampak kabur. Solusinya memasang <strong>lensa cekung</strong> di depan mata. Karena divergen, lensa ini sedikit menyebarkan cahaya sebelum masuk mata, sehingga titik fokus bayangan mundur tepat ke retina. Angka pada resep, misalnya −2,00, adalah kuat lensa dalam dioptri (P = 1/f). Makin parah rabunnya, makin besar minus yang dibutuhkan. Tidak ada keajaiban, hanya lensa divergen yang mengompensasi mata yang terlalu cembung.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. Lensa cekung memakai persamaan yang sama, <strong>1/f = 1/s + 1/s'</strong>, tetapi dengan <strong>f negatif</strong>. Hasilnya s' selalu negatif: bayangan <strong>selalu maya, tegak, dan diperkecil</strong>. Kuat lensa <strong>P = 1/f</strong> (dioptri) bernilai negatif. Rumus ini hanya merangkum pola yang kamu lihat pada kacamata minus.",
      },
      {
        type: "takeaways",
        items: [
          "Lensa cekung bersifat divergen dengan jarak fokus dan kuat lensa negatif.",
          "Bayangannya selalu maya, tegak, dan diperkecil, berapa pun jarak benda.",
          "Persamaan tetap 1/f = 1/s + 1/s' dengan f negatif; kuat lensa P = 1/f dioptri.",
          "Dipakai untuk mengoreksi rabun jauh (miopi) sebagai kacamata minus.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Lensa cekung bersifat?",
            options: ["Konvergen", "Divergen", "Tidak membiaskan", "Selalu memperbesar"],
            answer: 1,
            explain: "Lensa cekung menyebarkan sinar sejajar, jadi divergen, dengan fokus maya.",
          },
          {
            q: "Sifat bayangan lensa cekung selalu?",
            options: [
              "Nyata, terbalik, diperbesar",
              "Maya, tegak, diperkecil",
              "Nyata, tegak, sama besar",
              "Maya, terbalik, diperbesar",
            ],
            answer: 1,
            explain: "Berapa pun jarak benda, lensa cekung memberi bayangan maya, tegak, dan diperkecil.",
          },
          {
            q: "Lensa cekung f = −50 cm. Kuat lensanya?",
            options: ["+2 dioptri", "−2 dioptri", "−0,5 dioptri", "+50 dioptri"],
            answer: 1,
            explain: "P = 1/f = 1/(−0,5 m) = −2 dioptri.",
          },
          {
            q: "Kacamata untuk rabun jauh (miopi) menggunakan lensa?",
            options: ["Cembung (positif)", "Cekung (negatif)", "Datar", "Silinder saja"],
            answer: 1,
            explain: "Lensa cekung divergen memundurkan bayangan benda jauh agar jatuh tepat di retina.",
          },
          {
            q: "Mengapa lensa minus tidak bisa membuat titik api dari matahari?",
            options: [
              "Karena terlalu tipis",
              "Karena divergen, ia menyebarkan cahaya alih-alih mengumpulkannya",
              "Karena menyerap cahaya",
              "Karena terbuat dari plastik",
            ],
            answer: 1,
            explain: "Lensa cekung menyebarkan sinar sejajar sehingga tidak pernah memusat ke satu titik.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "prisma-planparalel",
    levelId: "pembiasan-lensa",
    order: 5,
    title: "Prisma dan Kaca Planparalel",
    summary:
      "Sebelum berkutat dengan rumus deviasi, kita amati dulu mengapa kaca jendela tebal hanya menggeser pemandangan, sedangkan prisma membelokkan sekaligus mengurai cahaya.",
    durationMin: 14,
    tags: ["optika", "pembiasan", "prisma", "deviasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebatang cahaya yang menembus kaca harus membias <strong>dua kali</strong>: sekali saat masuk, sekali saat keluar. Bentuk kacanya menentukan hasilnya. Pada <strong>kaca planparalel</strong> (balok kaca dengan dua sisi sejajar, seperti kaca jendela), sinar keluar tetap sejajar dengan sinar masuk, hanya <strong>bergeser</strong> sedikit. Tetapi pada <strong>prisma</strong> (kedua sisinya membentuk sudut), sinar dibelokkan tajam dengan sudut deviasi tertentu. Ayo amati dulu sebelum bertemu rumus.",
      },
      {
        type: "video",
        comp: "PembiasanCahaya",
        title: "Video: Cahaya Membias saat Berpindah Medium",
        caption: "Pembiasan ganda di dua permukaan menentukan apakah sinar hanya bergeser atau dibelokkan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Letakkan penggaris di atas tulisan, lalu tindih dengan balok kaca tebal atau gelas berisi air. Tulisan tampak <strong>bergeser</strong> tetapi tetap tegak dan tidak berubah arah, itulah ciri kaca planparalel. Sekarang arahkan seberkas cahaya menembus prisma kaca: berkasnya membelok jelas, dan jika sumbernya cahaya putih, di sisi keluar muncul pelangi tipis. Amati dulu bedanya, jangan buru-buru cari rumus.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Planparalel menggeser, prisma membelokkan",
        html: "Pada kaca planparalel kedua permukaan sejajar, maka pembiasan saat masuk persis dibatalkan oleh pembiasan saat keluar: arah sinar tidak berubah, hanya bergeser sejauh t. Pada prisma kedua permukaan membentuk <strong>sudut pembias</strong> β, sehingga kedua pembiasan saling menguatkan dan sinar dibelokkan dengan <strong>sudut deviasi</strong> δ. Makin besar indeks bias bahan, makin besar deviasinya.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Deviasi Minimum Prisma (sudut pembias 60 derajat) untuk Beberapa Indeks Bias",
        unit: "derajat",
        source: "perhitungan n = sin((β+δ)/2) / sin(β/2) dengan β = 60°",
        note: "Angka nyata dari rumus deviasi minimum. Makin besar indeks bias bahan, makin besar pembelokannya. Karena tiap warna punya indeks bias sedikit berbeda, prisma membelokkan tiap warna dengan deviasi berbeda, itulah asal uraian warna.",
        data: [
          { label: "Air n=1,33", value: 23.4, color: "#34d399" },
          { label: "Kaca n=1,50", value: 37.2, color: "#22d3ee" },
          { label: "Flinta n=1,66", value: 52.2, color: "#818cf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah prisma kaca punya sudut pembias β = 60° dan indeks bias n = 1,5. Berapa sudut deviasi minimumnya? (gunakan n = sin((β+δ)/2) / sin(β/2))",
        answer: 37.2,
        tolerance: 0.6,
        suffix: "°",
        solution:
          "sin((60+δ)/2) = n·sin(β/2) = 1,5 × sin 30° = 1,5 × 0,5 = 0,75. Maka (60+δ)/2 = arcsin 0,75 = 48,6°, sehingga 60 + δ = 97,2° dan δ = <strong>37,2°</strong>. Sinar dibelokkan lebih dari sepertiga sudut siku.",
        hint: "Hitung n·sin(β/2), ambil arcsin-nya, kalikan 2, lalu kurangi β.",
      },
      {
        type: "calcExercise",
        prompt:
          "Cahaya datang ke kaca planparalel tebal d = 3 cm dengan sudut datang 60°. Indeks bias kaca n = 1,5 sehingga sudut biasnya r = 35,3°. Berapa pergeseran sinarnya? (gunakan t = d·sin(i−r)/cos r)",
        answer: 1.54,
        tolerance: 0.06,
        suffix: " cm",
        solution:
          "Dari hukum Snell, sin r = sin 60°/1,5 = 0,866/1,5 = 0,577, jadi r = 35,3°. Lalu t = d·sin(i−r)/cos r = 3 × sin(24,7°)/cos(35,3°) = 3 × 0,419/0,816 = <strong>1,54 cm</strong>. Sinar keluar sejajar arah semula, hanya bergeser sejauh ini.",
        hint: "Cari selisih (i − r), masukkan ke t = d·sin(i−r)/cos r.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap ciri sebagai milik kaca planparalel atau prisma.",
        buckets: ["Kaca planparalel", "Prisma"],
        items: [
          { text: "Sinar keluar sejajar dengan sinar masuk", bucket: "Kaca planparalel" },
          { text: "Arah cahaya tidak berubah, hanya bergeser", bucket: "Kaca planparalel" },
          { text: "Sinar dibelokkan dengan sudut deviasi", bucket: "Prisma" },
          { text: "Mengurai cahaya putih menjadi spektrum warna", bucket: "Prisma" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah dengan maknanya.",
        pairs: [
          { left: "Sudut pembias β", right: "Sudut antara kedua permukaan prisma" },
          { left: "Sudut deviasi δ", right: "Sudut penyimpangan sinar keluar terhadap arah datang semula" },
          { left: "Pergeseran t", right: "Jarak geser sinar pada kaca planparalel" },
          { left: "Deviasi minimum", right: "Terjadi saat jalur sinar simetris di dalam prisma" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Prisma di Dalam Teropong Binokular",
        html: "Buka teropong binokular dan kamu akan menemukan sepasang <strong>prisma</strong> di tiap tabung. Fungsinya dua: melipat lintasan cahaya agar teropong jadi pendek, dan membalikkan kembali bayangan yang semula terbalik agar tegak. Sebagai contoh hitungan, prisma kaca dengan β = 60° dan n = 1,52 punya deviasi minimum sin((60+δ)/2) = 1,52 × 0,5 = 0,76, sehingga (60+δ)/2 = 49,5° dan δ = <strong>38,9°</strong>. Namun pada prisma teropong, sudut datangnya sengaja dibuat melewati ambang pemantulan total, sehingga cahaya dipantulkan sempurna tanpa kehilangan terang, bukan sekadar dibiaskan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. Kaca planparalel hanya menggeser sinar sejauh <strong>t = d·sin(i−r)/cos r</strong> tanpa mengubah arah. Prisma membelokkan sinar dengan deviasi minimum yang memenuhi <strong>n = sin((β+δ<sub>min</sub>)/2) / sin(β/2)</strong>. Karena n bergantung pada warna, prisma sekaligus membelokkan dan mengurai cahaya. Rumus ini hanya menuliskan rapi pola yang sudah kamu lihat pada balok kaca dan prisma.",
      },
      {
        type: "takeaways",
        items: [
          "Cahaya membias dua kali saat menembus kaca: ketika masuk dan ketika keluar.",
          "Kaca planparalel menggeser sinar sejauh t = d·sin(i−r)/cos r tanpa mengubah arah.",
          "Prisma membelokkan sinar dengan sudut deviasi; deviasi minimum terjadi saat jalur simetris.",
          "Deviasi minimum: n = sin((β+δ)/2) / sin(β/2); makin besar n makin besar deviasi.",
          "Karena indeks bias berbeda tiap warna, prisma sekaligus mengurai cahaya putih.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada kaca planparalel, sinar yang keluar bersifat?",
            options: [
              "Berbelok tajam dari arah semula",
              "Sejajar dengan sinar masuk, hanya bergeser",
              "Terbalik arahnya",
              "Hilang diserap kaca",
            ],
            answer: 1,
            explain: "Kedua permukaan sejajar, sehingga pembiasan masuk dan keluar saling membatalkan arah; sinar hanya bergeser.",
          },
          {
            q: "Apa yang dimaksud sudut deviasi pada prisma?",
            options: [
              "Sudut antara dua sisi prisma",
              "Sudut penyimpangan sinar keluar terhadap arah datang semula",
              "Sudut bias di permukaan pertama",
              "Sudut kritis prisma",
            ],
            answer: 1,
            explain: "Deviasi adalah seberapa jauh sinar keluar menyimpang dari arah datang awalnya.",
          },
          {
            q: "Prisma kaca β = 60°, n = 1,5. Deviasi minimumnya kira-kira?",
            options: ["18,6°", "37,2°", "48,6°", "60°"],
            answer: 1,
            explain: "sin((60+δ)/2) = 1,5 × 0,5 = 0,75, arcsin 0,75 = 48,6°, jadi δ = 2×48,6 − 60 = 37,2°.",
          },
          {
            q: "Mengapa prisma bisa mengurai cahaya putih menjadi pelangi?",
            options: [
              "Karena prisma memancarkan warna sendiri",
              "Karena tiap warna punya indeks bias sedikit berbeda sehingga deviasinya berbeda",
              "Karena cahaya putih terdiri dari satu warna saja",
              "Karena prisma memantulkan total semua warna",
            ],
            answer: 1,
            explain: "Indeks bias bergantung warna, maka tiap warna dibelokkan dengan deviasi berbeda dan terpisah.",
          },
          {
            q: "Pergeseran sinar pada kaca planparalel akan makin besar bila?",
            options: [
              "Kaca makin tipis",
              "Kaca makin tebal dan sudut datang makin besar",
              "Sudut datang nol",
              "Indeks bias kaca makin kecil",
            ],
            answer: 1,
            explain: "t = d·sin(i−r)/cos r membesar saat ketebalan d dan selisih (i−r) bertambah.",
          },
        ],
      },
    ],
  },
];
