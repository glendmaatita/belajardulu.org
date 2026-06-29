import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "gagasan-limit",
    levelId: "limit",
    order: 1,
    title: "Gagasan Limit: Mendekati Tanpa Menyentuh",
    summary:
      "Sebelum aturan limit, kita dekati sebuah nilai dari dua arah dan rasakan ke mana ia menuju.",
    durationMin: 13,
    tags: ["kalkulus", "limit", "pendekatan", "fondasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan kamu berjalan setengah jarak ke pintu, lalu setengahnya lagi, lalu setengahnya lagi. Kamu makin dekat ke pintu tetapi seolah tak pernah benar-benar menyentuhnya. Gagasan 'mendekati' inilah jantung kalkulus. Ayo selidiki dulu sebelum menulis lambang limit.",
      },
      {
        type: "video",
        comp: "LimitVideo",
        title: "Video: Gagasan Limit",
        caption: "Nilai yang didekati dari kiri dan kanan saat x mendekati suatu titik.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil fungsi f(x) = x + 2. Kita ingin tahu nilainya saat x mendekati 2. Coba x = 1,9 lalu 1,99 lalu 1,999 (dari kiri), dan x = 2,1 lalu 2,01 lalu 2,001 (dari kanan). Lihat hasilnya makin menempel ke satu angka.",
      },
      {
        type: "widget",
        widget: "SimulatorLimit",
      },
      {
        type: "chart",
        variant: "line",
        title: "Nilai f(x) = x + 2 saat x Mendekati 2",
        unit: "nilai f(x)",
        source: "ilustrasi edukatif",
        note: "Dari kedua arah, nilai f(x) makin menempel ke 4. Itulah limitnya.",
        data: [
          { label: "x=1,9", value: 3.9, color: "#a78bfa" },
          { label: "x=1,99", value: 3.99, color: "#8b5cf6" },
          { label: "x=2,01", value: 4.01, color: "#7c3aed" },
          { label: "x=2,1", value: 4.1, color: "#6d28d9" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Mendekati, bukan harus mencapai",
        html: "Yang menarik, limit tidak peduli apakah f(x) benar-benar bernilai 4 saat x = 2. Yang penting ke mana nilainya <strong>menuju</strong> saat x makin dekat. Ini memungkinkan kita menangani kasus yang tampak buntu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk f(x) = 3x, nilai apa yang didekati f(x) saat x mendekati 2?",
        answer: 6,
        solution:
          "Coba x mendekati 2: f(1,99) = 5,97 dan f(2,01) = 6,03. Dari dua arah menuju <strong>6</strong>. Jadi limitnya 6.",
        hint: "Masukkan nilai x yang sangat dekat dengan 2 dari kedua sisi.",
      },
      {
        type: "classifyExercise",
        prompt: "Saat x mendekati 3, ke mana nilai berikut menuju? Kelompokkan limitnya.",
        buckets: ["Menuju 6", "Menuju 9"],
        items: [
          { text: "f(x) = 2x saat x mendekati 3", bucket: "Menuju 6" },
          { text: "f(x) = x + 3 saat x mendekati 3", bucket: "Menuju 6" },
          { text: "f(x) = 3x saat x mendekati 3", bucket: "Menuju 9" },
          { text: "f(x) = x kuadrat saat x mendekati 3", bucket: "Menuju 9" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kecepatan sesaat di spidometer",
        html: "Spidometer mobil menunjukkan kecepatan pada <strong>satu saat</strong>, bukan rata-rata seluruh perjalanan. Bagaimana mungkin menghitung kecepatan dalam waktu nol detik? Caranya: ukur kecepatan rata-rata pada selang yang makin pendek (1 detik, 0,1 detik, 0,01 detik) dan lihat nilai yang didekati. Itulah limit, dan dari sinilah lahir gagasan turunan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Definisi pun lahir di akhir",
        html: "Setelah merasakan polanya, baru kita tuliskan: <strong>limit f(x) saat x mendekati a</strong> adalah nilai yang didekati f(x) ketika x makin dekat ke a dari kedua arah. Ditulis lim x→a f(x). Nilai ini ada jika pendekatan dari kiri dan kanan menuju angka yang sama.",
      },
      {
        type: "takeaways",
        items: [
          "Limit adalah nilai yang didekati fungsi saat masukan mendekati suatu titik.",
          "Limit melihat dari dua arah: kiri dan kanan harus menuju nilai yang sama.",
          "Limit tidak mengharuskan nilai itu benar-benar dicapai.",
          "Gagasan limit adalah fondasi turunan dan integral.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Limit sebuah fungsi adalah?",
            options: [
              "Nilai terbesar fungsi",
              "Nilai yang didekati saat x mendekati suatu titik",
              "Nilai fungsi di nol",
              "Kemiringan fungsi",
            ],
            answer: 1,
            explain: "Limit adalah nilai yang didekati, bukan harus dicapai.",
          },
          {
            q: "Agar limit ada, pendekatan dari kiri dan kanan harus?",
            options: ["Berbeda", "Menuju nilai yang sama", "Nol", "Tak hingga"],
            answer: 1,
            explain: "Limit ada jika kedua arah menuju nilai yang sama.",
          },
          {
            q: "Limit f(x) = x + 2 saat x mendekati 5 adalah?",
            options: ["5", "7", "2", "10"],
            answer: 1,
            explain: "Nilai yang didekati adalah 5 + 2 = 7.",
          },
          {
            q: "Mengapa limit penting untuk kecepatan sesaat?",
            options: [
              "Karena kecepatan selalu tetap",
              "Karena kita memperpendek selang waktu menuju nol",
              "Karena spidometer rusak",
              "Karena jarak tidak berubah",
            ],
            answer: 1,
            explain: "Kecepatan sesaat adalah limit kecepatan rata-rata saat selang menuju nol.",
          },
          {
            q: "Limit f(x) = x kuadrat saat x mendekati 4 adalah?",
            options: ["8", "16", "4", "12"],
            answer: 1,
            explain: "Nilai yang didekati adalah 4 kuadrat = 16.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "limit-kiri-dan-kanan",
    levelId: "limit",
    order: 2,
    title: "Limit Kiri dan Kanan: Dua Pintu Menuju Satu Nilai",
    summary:
      "Sebelum menyimpulkan limit ada atau tidak, kita intip pendekatan dari sisi kiri dan sisi kanan secara terpisah.",
    durationMin: 14,
    tags: ["kalkulus", "limit", "satu sisi", "intuisi"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan dua orang berjalan menuju satu titik temu: satu datang dari arah barat, satu dari arah timur. Kalau keduanya berhenti di tempat yang sama, mereka 'bertemu'. Tetapi kalau mereka berhenti di tempat berbeda, tidak ada titik temu. Begitulah cara fungsi mendekati sebuah titik. Ayo selidiki dulu sebelum kita beri nama.",
      },
      {
        type: "video",
        comp: "LimitVideo",
        title: "Video: Pendekatan dari Dua Sisi",
        caption: "Mengamati nilai fungsi saat x mendekati titik dari kiri lalu dari kanan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil f(x) = |x| / x. Untuk x positif hasilnya selalu 1, untuk x negatif selalu -1. Coba dekati x = 0 dari kiri: x = -0,1 lalu -0,01 (hasil tetap -1). Lalu dari kanan: x = 0,1 lalu 0,01 (hasil tetap 1). Rasakan ada sesuatu yang janggal di sini.",
      },
      {
        type: "widget",
        widget: "SimulatorLimit",
      },
      {
        type: "chart",
        variant: "line",
        title: "Nilai f(x) = |x| / x saat x Mendekati 0",
        unit: "nilai f(x)",
        source: "ilustrasi edukatif",
        note: "Dari kiri nilainya menempel ke -1, dari kanan menempel ke 1. Dua sisi tidak bertemu.",
        data: [
          { label: "x=-0,1", value: -1, color: "#a78bfa" },
          { label: "x=-0,01", value: -1, color: "#8b5cf6" },
          { label: "x=0,01", value: 1, color: "#7c3aed" },
          { label: "x=0,1", value: 1, color: "#6d28d9" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Lambang sisi kiri dan kanan",
        html: "Pendekatan dari kiri ditulis dengan tanda minus kecil: lim x→a⁻. Pendekatan dari kanan ditulis dengan tanda plus kecil: lim x→a⁺. Keduanya adalah <strong>limit satu sisi</strong>. Limit penuh hanyalah kabar baik ketika kedua sisi sepakat.",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk f(x) = x kuadrat, berapa nilai yang didekati dari sisi kiri saat x mendekati 2 dari kiri?",
        answer: 4,
        solution:
          "Coba x mendekati 2 dari kiri: f(1,9) = 3,61 dan f(1,99) = 3,9601. Nilainya menempel ke <strong>4</strong>. Jadi limit kirinya 4.",
        hint: "Masukkan nilai x yang sedikit lebih kecil dari 2, lalu makin dekat.",
      },
      {
        type: "classifyExercise",
        prompt: "Berdasarkan pendekatan kiri dan kanan, kelompokkan apakah limit penuhnya ada.",
        buckets: ["Limit ada", "Limit tidak ada"],
        items: [
          { text: "kiri→6 dan kanan→6 saat x→2", bucket: "Limit ada" },
          { text: "kiri→-1 dan kanan→1 saat x→0", bucket: "Limit tidak ada" },
          { text: "kiri→7 dan kanan→7 saat x→2", bucket: "Limit ada" },
          { text: "kiri→0 dan kanan→3 saat x→0", bucket: "Limit tidak ada" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tarif parkir yang melompat",
        html: "Tarif parkir Rp5.000 untuk jam pertama, lalu naik menjadi Rp8.000 begitu melewati satu jam. Saat waktu mendekati tepat 1 jam <strong>dari bawah</strong>, tarif menuju Rp5.000. Saat mendekati 1 jam <strong>dari atas</strong>, tarif menuju Rp8.000. Karena kedua sisi berbeda, tidak ada satu nilai tunggal di titik 1 jam. Inilah contoh nyata limit kiri dan kanan yang tidak sepakat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah mengamati banyak kasus, baru kita rumuskan: <strong>limit penuh lim x→a f(x) ada jika dan hanya jika limit kiri dan limit kanan ada dan bernilai sama</strong>. Jika lim x→a⁻ f(x) ≠ lim x→a⁺ f(x), maka limit di titik itu tidak ada.",
      },
      {
        type: "takeaways",
        items: [
          "Limit satu sisi mengamati pendekatan hanya dari kiri (a⁻) atau hanya dari kanan (a⁺).",
          "Limit penuh ada hanya jika limit kiri sama dengan limit kanan.",
          "Jika kedua sisi menuju nilai berbeda, limit di titik itu tidak ada.",
          "Fungsi yang melompat, seperti tarif berjenjang, sering memiliki limit kiri dan kanan yang berbeda.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Lambang lim x→a⁺ f(x) berarti pendekatan dari?",
            options: ["Sisi kiri", "Sisi kanan", "Atas grafik", "Bawah grafik"],
            answer: 1,
            explain: "Tanda plus menandakan pendekatan dari sisi kanan, yaitu x sedikit lebih besar dari a.",
          },
          {
            q: "Agar limit penuh ada, limit kiri dan limit kanan harus?",
            options: ["Berbeda tanda", "Bernilai sama", "Sama-sama nol", "Tak hingga"],
            answer: 1,
            explain: "Limit penuh ada hanya jika kedua sisi menuju nilai yang sama.",
          },
          {
            q: "Untuk f(x) = |x|/x, limit saat x mendekati 0 adalah?",
            options: ["0", "1", "-1", "Tidak ada"],
            answer: 3,
            explain: "Sisi kiri menuju -1 dan sisi kanan menuju 1, sehingga limitnya tidak ada.",
          },
          {
            q: "Jika kiri→4 dan kanan→4 saat x→1, maka limit penuhnya?",
            options: ["Tidak ada", "4", "8", "0"],
            answer: 1,
            explain: "Kedua sisi sepakat di 4, jadi limit penuhnya 4.",
          },
          {
            q: "Fungsi tarif parkir yang melompat di jam ke-1 menunjukkan bahwa?",
            options: [
              "Limit selalu ada",
              "Limit kiri dan kanan bisa berbeda",
              "Tarif tidak pernah berubah",
              "Limit sama dengan nol",
            ],
            answer: 1,
            explain: "Pendekatan dari bawah dan dari atas menuju tarif berbeda, jadi kedua sisi tidak sepakat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "menghitung-limit-fungsi",
    levelId: "limit",
    order: 3,
    title: "Menghitung Limit: Dari Coba-Coba ke Cara Cepat",
    summary:
      "Setelah merasakan limit lewat angka, kita temukan jalan pintas: substitusi langsung, dan trik faktor untuk kasus 0/0.",
    durationMin: 15,
    tags: ["kalkulus", "limit", "substitusi", "faktor"],
    blocks: [
      {
        type: "paragraph",
        html: "Menebak limit dengan memasukkan angka satu per satu memang melelahkan. Untungnya, banyak fungsi 'jujur': nilai yang didekati ternyata sama dengan nilai yang dihitung langsung. Tetapi ada pula yang menipu, memberi bentuk 0/0 yang seolah buntu. Ayo selidiki polanya dulu sebelum menetapkan aturan.",
      },
      {
        type: "video",
        comp: "LimitVideo",
        title: "Video: Cara Menghitung Limit",
        caption: "Mengubah pendekatan angka menjadi langkah hitung yang rapi dan cepat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil f(x) = (x kuadrat − 4) / (x − 2). Jika x = 2 dimasukkan langsung, hasilnya 0/0, tampak buntu. Tetapi coba x = 1,99 lalu 2,01. Hasilnya menempel ke satu angka yang rapi. Tebak dulu angkanya sebelum kita buktikan dengan faktor.",
      },
      {
        type: "widget",
        widget: "SimulatorLimit",
      },
      {
        type: "chart",
        variant: "line",
        title: "Nilai (x² − 4)/(x − 2) saat x Mendekati 2",
        unit: "nilai f(x)",
        source: "ilustrasi edukatif",
        note: "Meski tak terdefinisi tepat di x = 2, nilai dari kedua arah menempel ke 4.",
        data: [
          { label: "x=1,9", value: 3.9, color: "#a78bfa" },
          { label: "x=1,99", value: 3.99, color: "#8b5cf6" },
          { label: "x=2,01", value: 4.01, color: "#7c3aed" },
          { label: "x=2,1", value: 4.1, color: "#6d28d9" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Trik faktor untuk bentuk 0/0",
        html: "Bentuk 0/0 disebut bentuk tak tentu, bukan jawaban akhir. Sering kali pembilang bisa difaktorkan. Di sini x kuadrat − 4 = (x − 2)(x + 2), sehingga (x − 2) bisa dicoret dengan penyebut. Tersisa x + 2, yang saat x mendekati 2 menuju <strong>4</strong>.",
      },
      {
        type: "calcExercise",
        prompt:
          "Hitung lim x→2 dari (x kuadrat − 4) / (x − 2).",
        answer: 4,
        solution:
          "Faktorkan: (x − 2)(x + 2) / (x − 2) = x + 2. Saat x mendekati 2, hasilnya 2 + 2 = <strong>4</strong>.",
        hint: "Faktorkan pembilang sebagai selisih kuadrat, lalu coret faktor yang sama.",
      },
      {
        type: "calcExercise",
        prompt:
          "Hitung lim x→3 dari (x kuadrat − 9) / (x − 3).",
        answer: 6,
        solution:
          "Faktorkan: (x − 3)(x + 3) / (x − 3) = x + 3. Saat x mendekati 3, hasilnya 3 + 3 = <strong>6</strong>.",
        hint: "x kuadrat − 9 adalah selisih kuadrat (x − 3)(x + 3).",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan setiap limit dengan nilainya.",
        pairs: [
          { left: "lim x→1 (3x + 1)", right: "4" },
          { left: "lim x→0 (x kuadrat + 2)", right: "2" },
          { left: "lim x→5 (x − 2)", right: "3" },
          { left: "lim x→3 (x kuadrat − 9)/(x − 3)", right: "6" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kecepatan rata-rata mendekati sesaat",
        html: "Sebuah benda menempuh jarak s(t) = t kuadrat meter. Kecepatan rata-rata antara t = 2 dan t = 2 + h adalah (s(2+h) − s(2)) / h. Sederhanakan: ((2+h)² − 4)/h = (4h + h²)/h = 4 + h. Saat h mendekati 0, ekspresi ini menuju <strong>4 m/s</strong>. Inilah kecepatan sesaat di t = 2, dihitung lewat trik faktor yang sama persis.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Dari banyak contoh kita simpulkan dua langkah: <strong>(1) coba substitusi langsung</strong> nilai x ke fungsi; jika hasilnya angka wajar, itulah limitnya. <strong>(2) Jika muncul bentuk 0/0</strong>, sederhanakan dulu dengan memfaktorkan atau merasionalkan, baru substitusikan. Limit mengukur ke mana fungsi menuju, bukan sekadar nilainya di titik itu.",
      },
      {
        type: "takeaways",
        items: [
          "Untuk fungsi yang mulus, limit bisa dihitung dengan substitusi langsung.",
          "Bentuk 0/0 adalah bentuk tak tentu, bukan jawaban; perlu disederhanakan dulu.",
          "Memfaktorkan pembilang dan penyebut sering melenyapkan penyebab 0/0.",
          "Selisih kuadrat a² − b² = (a − b)(a + b) adalah alat faktor yang sangat berguna.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Langkah pertama menghitung limit biasanya adalah?",
            options: [
              "Menggambar grafik",
              "Substitusi langsung nilai x",
              "Menebak secara acak",
              "Menurunkan fungsi",
            ],
            answer: 1,
            explain: "Jika substitusi langsung memberi angka wajar, itulah limitnya.",
          },
          {
            q: "Bentuk 0/0 disebut?",
            options: ["Nol", "Tak hingga", "Bentuk tak tentu", "Satu"],
            answer: 2,
            explain: "0/0 adalah bentuk tak tentu yang harus disederhanakan dulu.",
          },
          {
            q: "lim x→2 (x kuadrat − 4)/(x − 2) sama dengan?",
            options: ["0", "2", "4", "Tidak ada"],
            answer: 2,
            explain: "Setelah difaktorkan menjadi x + 2, nilainya menuju 4.",
          },
          {
            q: "Faktor dari x kuadrat − 9 adalah?",
            options: ["(x − 3)(x + 3)", "(x − 9)(x + 1)", "(x − 3)²", "(x + 9)(x − 1)"],
            answer: 0,
            explain: "Selisih kuadrat: x² − 9 = (x − 3)(x + 3).",
          },
          {
            q: "lim x→1 (3x + 1) sama dengan?",
            options: ["3", "4", "1", "0"],
            answer: 1,
            explain: "Substitusi langsung: 3(1) + 1 = 4.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "limit-dan-kekontinuan",
    levelId: "limit",
    order: 4,
    title: "Limit dan Kekontinuan: Grafik Tanpa Putus",
    summary:
      "Kita rasakan kapan sebuah grafik bisa digambar tanpa mengangkat pena, lalu kaitkan dengan limit dan nilai fungsi.",
    durationMin: 14,
    tags: ["kalkulus", "limit", "kekontinuan", "fungsi"],
    blocks: [
      {
        type: "paragraph",
        html: "Coba gambar sebuah garis dari kiri ke kanan tanpa mengangkat pena sama sekali. Selama tanganmu tidak melompat dan tidak ada lubang, grafik itu 'mulus terus'. Tetapi begitu ada lubang kecil atau lompatan, pena harus diangkat. Ayo selidiki dulu rasa 'tanpa putus' ini sebelum menulis syaratnya.",
      },
      {
        type: "video",
        comp: "LimitVideo",
        title: "Video: Grafik yang Kontinu",
        caption: "Membandingkan grafik yang mulus tersambung dengan yang berlubang atau melompat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil f(x) = x + 2 di titik x = 2. Hitung nilai yang didekati saat x menuju 2 (yaitu 4) dan hitung pula nilai fungsi tepat di x = 2 (yaitu f(2) = 4). Keduanya sama. Sekarang bayangkan fungsi yang sama tetapi titik di x = 2 dilubangi. Rasakan apa yang berubah.",
      },
      {
        type: "widget",
        widget: "SimulatorLimit",
      },
      {
        type: "chart",
        variant: "line",
        title: "Nilai f(x) = x + 2 di Sekitar dan Tepat di x = 2",
        unit: "nilai f(x)",
        source: "ilustrasi edukatif",
        note: "Nilai yang didekati (3,99 dan 4,01) dan nilai tepat f(2) = 4 saling sepakat, tanda grafik tersambung.",
        data: [
          { label: "x=1,99", value: 3.99, color: "#a78bfa" },
          { label: "x=2 (f(2))", value: 4, color: "#8b5cf6" },
          { label: "x=2,01", value: 4.01, color: "#7c3aed" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga hal yang harus sepakat",
        html: "Agar sebuah grafik tersambung di titik a, tiga hal perlu benar: <strong>(1)</strong> f(a) terdefinisi (tidak ada lubang), <strong>(2)</strong> limit f(x) saat x→a ada (kiri = kanan), dan <strong>(3)</strong> nilai limit itu sama dengan f(a). Jika salah satu gagal, grafik putus di titik tersebut.",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk f(x) = x + 3, berapa nilai limit saat x→1 sekaligus nilai f(1) yang membuatnya kontinu?",
        answer: 4,
        solution:
          "Limit saat x→1 adalah 1 + 3 = 4, dan f(1) = 1 + 3 = 4. Karena limit = nilai fungsi = <strong>4</strong>, fungsi kontinu di x = 1.",
        hint: "Hitung nilai yang didekati dan nilai fungsi di x = 1, lalu bandingkan.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan apakah fungsi kontinu di titik yang disebut.",
        buckets: ["Kontinu di titik", "Tidak kontinu"],
        items: [
          { text: "limit→6 dan f(3)=6 di x=3", bucket: "Kontinu di titik" },
          { text: "limit→4 tetapi f(2) tak terdefinisi (lubang) di x=2", bucket: "Tidak kontinu" },
          { text: "limit→1 dan f(0)=1 di x=0", bucket: "Kontinu di titik" },
          { text: "kiri→0 dan kanan→3 (melompat) di x=0", bucket: "Tidak kontinu" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Suhu ruangan sepanjang hari",
        html: "Suhu sebuah ruangan berubah halus dari pagi ke siang: tidak mungkin melompat dari 20° langsung ke 30° tanpa melewati nilai di antaranya. Karena itu grafik suhu terhadap waktu adalah fungsi kontinu. Sifat ini menjamin bahwa jika suhu pernah 20° dan kemudian 30°, pasti ada saat ketika suhunya tepat 25°. Banyak fenomena alam bersifat kontinu, dan itulah mengapa kekontinuan begitu penting.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Definisi pun lahir di akhir",
        html: "Setelah merasakan grafik tanpa putus, baru kita tuliskan: fungsi f <strong>kontinu di titik a</strong> jika lim x→a f(x) = f(a). Ini sekaligus menuntut f(a) terdefinisi dan limitnya ada. Fungsi disebut kontinu pada suatu selang jika ia kontinu di setiap titik selang itu.",
      },
      {
        type: "takeaways",
        items: [
          "Fungsi kontinu di a berarti grafiknya tersambung di titik itu, tanpa lubang atau lompatan.",
          "Syaratnya: f(a) terdefinisi, limit di a ada, dan limit sama dengan f(a).",
          "Lubang muncul saat limit ada tetapi f(a) tak terdefinisi; lompatan saat limit kiri ≠ kanan.",
          "Banyak besaran nyata seperti suhu dan posisi bersifat kontinu terhadap waktu.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Fungsi f kontinu di titik a jika?",
            options: [
              "f(a) = 0",
              "lim x→a f(x) = f(a)",
              "f naik di a",
              "limitnya tak hingga",
            ],
            answer: 1,
            explain: "Kekontinuan menuntut nilai limit sama dengan nilai fungsi di titik itu.",
          },
          {
            q: "Berapa syarat yang harus dipenuhi agar fungsi kontinu di sebuah titik?",
            options: ["Satu", "Dua", "Tiga", "Empat"],
            answer: 2,
            explain: "f(a) terdefinisi, limit ada, dan limit = f(a). Total tiga syarat.",
          },
          {
            q: "Jika limit ada tetapi f(a) tak terdefinisi, grafiknya memiliki?",
            options: ["Lompatan", "Lubang", "Garis lurus", "Puncak"],
            answer: 1,
            explain: "Limit ada namun titiknya hilang, sehingga muncul lubang.",
          },
          {
            q: "Fungsi dengan limit kiri ≠ limit kanan di a bersifat?",
            options: ["Kontinu", "Tidak kontinu (melompat)", "Selalu naik", "Konstan"],
            answer: 1,
            explain: "Kedua sisi berbeda berarti limit tidak ada, jadi fungsi tidak kontinu.",
          },
          {
            q: "Mengapa grafik suhu ruangan terhadap waktu kontinu?",
            options: [
              "Karena suhu selalu tetap",
              "Karena suhu berubah halus tanpa melompat",
              "Karena waktu berhenti",
              "Karena suhu selalu nol",
            ],
            answer: 1,
            explain: "Suhu tidak bisa melompat tanpa melewati nilai di antaranya, sehingga grafiknya tersambung.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "limit-di-tak-hingga",
    levelId: "limit",
    order: 5,
    title: "Limit di Tak Hingga: Perilaku Jangka Panjang",
    summary:
      "Sebelum aturannya, kita amati ke mana sebuah fungsi menuju saat x dibesarkan terus tanpa batas.",
    durationMin: 13,
    tags: ["kalkulus", "limit", "tak hingga", "asimtot"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah tablet obat memberi dosis dalam darah yang naik lalu mendatar di nilai stabil. Saldo tabungan dengan bunga tetap mendekati garis tertentu setelah lama. Banyak hal di dunia nyata 'menuju' suatu nilai ketika waktu atau masukan dibesarkan terus. Ayo selidiki dulu perilaku jangka panjang ini sebelum menulis aturannya.",
      },
      {
        type: "video",
        comp: "LimitVideo",
        title: "Video: Saat x Membesar Tanpa Batas",
        caption: "Mengamati nilai fungsi ketika x dibuat makin besar menuju tak hingga.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil f(x) = 1 / x. Coba x = 1 (hasil 1), lalu x = 10 (hasil 0,1), lalu x = 100 (hasil 0,01), lalu x = 1.000 (hasil 0,001). Ke mana nilainya menuju saat x makin besar? Lalu coba f(x) = (2x) / (x + 1): di x = 1.000 hasilnya sekitar 1,998. Tebak nilai yang didekatinya.",
      },
      {
        type: "widget",
        widget: "SimulatorLimit",
      },
      {
        type: "chart",
        variant: "line",
        title: "Nilai f(x) = 1 / x saat x Makin Besar",
        unit: "nilai f(x)",
        source: "perhitungan 1 / x",
        note: "Makin besar x, nilai 1 / x makin menempel ke nol. Sumbu x menjadi asimtot datar.",
        data: [
          { label: "x=1", value: 1, color: "#a78bfa" },
          { label: "x=10", value: 0.1, color: "#8b5cf6" },
          { label: "x=100", value: 0.01, color: "#7c3aed" },
          { label: "x=1.000", value: 0.001, color: "#6d28d9" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Suku berpangkat tertinggi yang menentukan",
        html: "Untuk pecahan seperti (2x + 1) / (x + 3), saat x sangat besar suku 1 dan 3 nyaris tak berarti dibanding 2x dan x. Maka nilainya menempel ke 2x / x = <strong>2</strong>. Garis datar y = 2 yang didekati grafik ini disebut <strong>asimtot datar</strong>.",
      },
      {
        type: "calcExercise",
        prompt:
          "Hitung nilai yang didekati f(x) = (2x) / (x + 1) saat x menuju tak hingga.",
        answer: 2,
        solution:
          "Bagi pembilang dan penyebut dengan x: 2 / (1 + 1/x). Saat x menuju tak hingga, 1/x menuju nol, jadi hasilnya 2 / 1 = <strong>2</strong>.",
        hint: "Bagi semua suku dengan x, lalu ingat 1/x menuju nol.",
      },
      {
        type: "calcExercise",
        prompt:
          "Hitung nilai yang didekati f(x) = (3x + 5) / x saat x menuju tak hingga.",
        answer: 3,
        solution:
          "Pisahkan: (3x)/x + 5/x = 3 + 5/x. Saat x menuju tak hingga, 5/x menuju nol, jadi hasilnya <strong>3</strong>.",
        hint: "Pecah pecahan menjadi 3 + 5/x.",
      },
      {
        type: "classifyExercise",
        prompt: "Saat x menuju tak hingga, kelompokkan apakah limitnya menuju nol atau menuju nilai tak nol.",
        buckets: ["Menuju nol", "Menuju nilai tak nol"],
        items: [
          { text: "f(x) = 1 / x", bucket: "Menuju nol" },
          { text: "f(x) = 7 / x", bucket: "Menuju nol" },
          { text: "f(x) = (2x) / (x + 1)", bucket: "Menuju nilai tak nol" },
          { text: "f(x) = (5x + 2) / x", bucket: "Menuju nilai tak nol" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kadar obat yang stabil dalam darah",
        html: "Saat seseorang minum obat secara teratur, kadar zat aktif dalam darah naik tetapi tidak selamanya. Karena tubuh juga membuang obat, kadarnya mendekati sebuah nilai stabil yang disebut kadar tunak. Secara matematis, kadar sebagai fungsi waktu memiliki <strong>limit di tak hingga</strong>, yaitu garis datar yang didekati grafik saat waktu berjalan lama. Dokter memakai nilai limit ini untuk menentukan dosis yang aman dan efektif.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah merasakan polanya, baru kita tuliskan: <strong>limit x→tak hingga f(x)</strong> adalah nilai yang didekati f(x) saat x dibesarkan tanpa batas. Untuk f(x) = 1 / x pangkat n (n positif), limitnya nol. Untuk pecahan dua polinomial berderajat sama, limitnya adalah perbandingan koefisien suku berpangkat tertinggi. Nilai yang didekati ini muncul sebagai asimtot datar pada grafik.",
      },
      {
        type: "takeaways",
        items: [
          "Limit di tak hingga melihat ke mana fungsi menuju saat x dibesarkan tanpa batas.",
          "f(x) = 1 / x dan sejenisnya menuju nol saat x menuju tak hingga.",
          "Pada pecahan polinomial berderajat sama, limitnya perbandingan koefisien tertinggi.",
          "Nilai yang didekati ini tampak sebagai asimtot datar pada grafik.",
          "Perilaku jangka panjang banyak fenomena nyata, seperti kadar obat, dijelaskan oleh limit ini.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Limit di tak hingga mengamati nilai fungsi saat?",
            options: [
              "x mendekati nol",
              "x dibesarkan tanpa batas",
              "x sama dengan satu",
              "fungsi bernilai nol",
            ],
            answer: 1,
            explain: "Limit di tak hingga melihat perilaku fungsi saat x menuju tak hingga.",
          },
          {
            q: "Nilai yang didekati f(x) = 1 / x saat x menuju tak hingga adalah?",
            options: ["1", "Tak hingga", "0", "Tidak ada"],
            answer: 2,
            explain: "Makin besar x, nilai 1 / x makin menempel ke nol.",
          },
          {
            q: "Limit (2x) / (x + 1) saat x menuju tak hingga adalah?",
            options: ["0", "1", "2", "Tak hingga"],
            answer: 2,
            explain: "Suku berpangkat tertinggi menentukan: 2x / x = 2.",
          },
          {
            q: "Garis datar yang didekati grafik di jangka panjang disebut?",
            options: ["Garis singgung", "Asimtot datar", "Titik balik", "Limit kiri"],
            answer: 1,
            explain: "Nilai limit di tak hingga muncul sebagai asimtot datar.",
          },
          {
            q: "Limit (3x + 5) / x saat x menuju tak hingga adalah?",
            options: ["5", "8", "3", "0"],
            answer: 2,
            explain: "Pecah menjadi 3 + 5/x; suku 5/x menuju nol sehingga hasilnya 3.",
          },
        ],
      },
    ],
  },
];
