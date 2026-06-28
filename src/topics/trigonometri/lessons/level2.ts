import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "sudut-istimewa-45",
    levelId: "sudut-istimewa",
    order: 1,
    title: "Sudut 45 Derajat dari Segitiga Sama Kaki",
    summary:
      "Lipat sebuah persegi pada diagonalnya. Dari segitiga siku-siku sama kaki yang muncul, nilai sin dan cos 45 derajat akan tampak dengan sendirinya.",
    durationMin: 13,
    tags: ["trigonometri", "sudut istimewa", "45 derajat", "segitiga"],
    blocks: [
      {
        type: "paragraph",
        html: "Ada sudut yang muncul di mana-mana: pada lipatan kertas, pada diagonal ubin, pada potongan kue. Itulah sudut 45 derajat. Daripada langsung menghafal nilai sin dan cos-nya, ayo kita temukan sendiri dari sebuah segitiga yang sangat sederhana.",
      },
      {
        type: "video",
        comp: "TrigonometriVideo",
        title: "Video: Sudut 45 dan Segitiga Sama Kaki",
        caption: "Segitiga siku-siku sama kaki menyimpan rahasia sudut 45 derajat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil selembar kertas persegi, lalu lipat tepat pada diagonalnya. Kamu mendapat segitiga siku-siku dengan dua sisi tegak yang sama panjang. Karena dua sisinya sama, dua sudut lancipnya pun sama besar, masing-masing 45 derajat. Coba beri panjang kedua sisi tegak = 1. Berapa panjang sisi miringnya?",
      },
      {
        type: "widget",
        widget: "EksplorasiPythagoras",
      },
      {
        type: "callout",
        tone: "info",
        title: "Pythagoras menolong kita",
        html: "Dengan dua kaki sama panjang 1, sisi miring = akar dari (1 kuadrat + 1 kuadrat) = akar 2, yang nilainya sekitar 1,414. Jadi segitiga ini punya sisi 1, 1, dan akar 2. Sekarang semua perbandingan sudut 45 derajat bisa kita baca langsung dari sisinya.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perbandingan Depan ÷ Miring untuk Sudut 45 Derajat",
        unit: "nilai perbandingan",
        source: "ilustrasi edukatif",
        note: "Tiga segitiga sama kaki beda ukuran, semua bersudut 45 derajat. Perbandingan depan dibagi miring selalu sekitar 0,707.",
        data: [
          { label: "kaki 1", value: 0.707, color: "#fb923c" },
          { label: "kaki 3", value: 0.707, color: "#f59e0b" },
          { label: "kaki 5", value: 0.707, color: "#eab308" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Pada segitiga siku-siku sama kaki, sisi depan sudut 45 derajat = 1 dan sisi miring = akar 2 (sekitar 1,414). Berapa nilai sin 45 derajat (depan dibagi miring)?",
        answer: 0.707,
        tolerance: 0.01,
        solution:
          "sin 45 = depan ÷ miring = 1 ÷ akar 2 = akar 2 ÷ 2 = sekitar <strong>0,707</strong>. Nilai ini sama untuk segitiga sama kaki seberapa pun besarnya.",
        hint: "Bagi 1 dengan 1,414.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada segitiga yang sama, sisi depan = sisi samping = 1. Berapa nilai tan 45 derajat (depan dibagi samping)?",
        answer: 1,
        tolerance: 0.001,
        solution:
          "tan 45 = depan ÷ samping = 1 ÷ 1 = <strong>1</strong>. Karena kedua kaki sama panjang, perbandingannya pasti 1.",
        hint: "Kedua kaki segitiga sama kaki panjangnya sama.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan perbandingan sudut 45 derajat dengan nilainya.",
        pairs: [
          { left: "sin 45", right: "akar 2 ÷ 2 (sekitar 0,707)" },
          { left: "cos 45", right: "akar 2 ÷ 2 (sekitar 0,707)" },
          { left: "tan 45", right: "1" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tangga bersandar 45 derajat",
        html: "Sebuah tangga bersandar pada dinding membentuk sudut 45 derajat dengan lantai. Jika kaki tangga berjarak 2 meter dari dinding, maka tinggi titik sandar = 2 × tan 45 = 2 × 1 = 2 meter. Karena tan 45 = 1, jarak mendatar dan tinggi vertikalnya selalu sama. Itulah mengapa sudut 45 derajat terasa seimbang.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Nilai pun muncul di akhir",
        html: "Setelah membaca sisi 1, 1, akar 2, kita simpulkan: <strong>sin 45 = cos 45 = akar 2 ÷ 2 (sekitar 0,707)</strong> dan <strong>tan 45 = 1</strong>. Tidak ada yang dihafal lebih dulu; semuanya ditemukan dari segitiga siku-siku sama kaki.",
      },
      {
        type: "takeaways",
        items: [
          "Diagonal persegi membentuk segitiga siku-siku sama kaki dengan dua sudut 45 derajat.",
          "Sisi segitiga itu berbanding 1 : 1 : akar 2.",
          "sin 45 = cos 45 = akar 2 ÷ 2, kira-kira 0,707.",
          "tan 45 = 1 karena kedua kaki sama panjang.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Segitiga untuk menemukan sudut 45 derajat adalah?",
            options: [
              "Segitiga sama sisi",
              "Segitiga siku-siku sama kaki",
              "Segitiga tumpul",
              "Segitiga sembarang",
            ],
            answer: 1,
            explain: "Dua kaki sama panjang membuat dua sudut lancipnya masing-masing 45 derajat.",
          },
          {
            q: "Jika kedua kaki = 1, panjang sisi miringnya adalah?",
            options: ["1", "2", "akar 2", "akar 3"],
            answer: 2,
            explain: "Pythagoras: akar dari (1 + 1) = akar 2.",
          },
          {
            q: "Nilai sin 45 derajat kira-kira?",
            options: ["0,5", "0,707", "0,866", "1"],
            answer: 1,
            explain: "sin 45 = 1 ÷ akar 2 = akar 2 ÷ 2 = sekitar 0,707.",
          },
          {
            q: "Nilai tan 45 derajat adalah?",
            options: ["0", "0,5", "1", "akar 2"],
            answer: 2,
            explain: "tan 45 = depan ÷ samping = 1 ÷ 1 = 1.",
          },
          {
            q: "Mengapa sin 45 dan cos 45 bernilai sama?",
            options: [
              "Kebetulan",
              "Karena sisi depan dan sisi samping sama panjang",
              "Karena sisi miring = 1",
              "Karena sudutnya 90 derajat",
            ],
            answer: 1,
            explain: "Pada segitiga sama kaki, depan dan samping sama, jadi perbandingannya terhadap miring sama.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "sudut-istimewa-30-60",
    levelId: "sudut-istimewa",
    order: 2,
    title: "Sudut 30 dan 60 Derajat dari Segitiga Sama Sisi",
    summary:
      "Belah sebuah segitiga sama sisi tepat di tengah. Dari belahannya, nilai sin dan cos untuk 30 dan 60 derajat akan terungkap sekaligus.",
    durationMin: 14,
    tags: ["trigonometri", "sudut istimewa", "30 derajat", "60 derajat"],
    blocks: [
      {
        type: "paragraph",
        html: "Sudut 30 dan 60 derajat sering muncul bersama, dan ternyata keduanya lahir dari satu bentuk yang sangat rapi: segitiga sama sisi. Sebelum mencatat nilainya, ayo belah segitiga itu dan lihat apa yang muncul.",
      },
      {
        type: "video",
        comp: "PythagorasPetualangan",
        title: "Video: Membelah Segitiga Sama Sisi",
        caption: "Satu garis tinggi mengubah segitiga sama sisi menjadi dua segitiga 30-60-90.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Gambar segitiga sama sisi dengan panjang sisi 2. Semua sudutnya 60 derajat. Sekarang tarik garis tegak dari satu puncak ke tengah sisi alas. Garis ini membelahnya menjadi dua segitiga siku-siku yang sama. Sudut 60 derajat tetap di bawah, dan sudut puncak terbelah menjadi 30 derajat. Berapa panjang sisi-sisinya sekarang?",
      },
      {
        type: "widget",
        widget: "EksplorasiPythagoras",
      },
      {
        type: "callout",
        tone: "info",
        title: "Membaca sisi-sisinya",
        html: "Sisi miring tetap 2 (sisi asli segitiga). Alas terbelah dua menjadi 1. Tinggi = akar dari (2 kuadrat dikurang 1 kuadrat) = akar 3, sekitar 1,732. Jadi segitiga 30-60-90 ini berbanding 1 : akar 3 : 2. Semua nilai sudut 30 dan 60 derajat bisa dibaca dari sini.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Nilai Sinus untuk Sudut 30 dan 60 Derajat",
        unit: "nilai sin",
        source: "ilustrasi edukatif",
        note: "Dibaca dari segitiga berbanding 1 : akar 3 : 2. Semakin besar sudut, semakin besar nilai sinusnya.",
        data: [
          { label: "sin 30", value: 0.5, color: "#fb923c" },
          { label: "sin 60", value: 0.866, color: "#f59e0b" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Pada segitiga 30-60-90 dengan sisi miring 2, sisi depan sudut 30 derajat = 1. Berapa nilai sin 30 derajat (depan dibagi miring)?",
        answer: 0.5,
        tolerance: 0.01,
        solution:
          "sin 30 = depan ÷ miring = 1 ÷ 2 = <strong>0,5</strong>. Persis setengah, nilai yang mudah diingat karena ditemukan dari segitiga.",
        hint: "Sisi di depan sudut 30 adalah yang terpendek, yaitu 1.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada segitiga yang sama, sisi depan sudut 60 derajat = akar 3 (sekitar 1,732) dan sisi miring = 2. Berapa nilai sin 60 derajat?",
        answer: 0.866,
        tolerance: 0.01,
        solution:
          "sin 60 = depan ÷ miring = akar 3 ÷ 2 = sekitar <strong>0,866</strong>. Sisi di depan sudut 60 lebih panjang, jadi nilainya lebih besar dari sin 30.",
        hint: "Bagi 1,732 dengan 2.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan nilai berikut sesuai sudutnya.",
        buckets: ["Sudut 30 derajat", "Sudut 60 derajat"],
        items: [
          { text: "sin = 1/2", bucket: "Sudut 30 derajat" },
          { text: "cos = akar 3 ÷ 2", bucket: "Sudut 30 derajat" },
          { text: "sin = akar 3 ÷ 2", bucket: "Sudut 60 derajat" },
          { text: "cos = 1/2", bucket: "Sudut 60 derajat" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Atap rumah miring 30 derajat",
        html: "Sebuah atap membentuk sudut 30 derajat dengan garis mendatar. Jika panjang sisi miring atap 6 meter, maka tinggi puncak atap = 6 × sin 30 = 6 × 0,5 = 3 meter. Tukang bangunan memakai nilai sin 30 = 1/2 ini setiap hari, dan nilainya bukan hafalan kosong melainkan berasal dari segitiga sama sisi yang dibelah.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Nilai pun muncul di akhir",
        html: "Dari segitiga 30-60-90 berbanding 1 : akar 3 : 2 kita peroleh: <strong>sin 30 = 1/2</strong>, <strong>cos 30 = akar 3 ÷ 2</strong>, <strong>tan 30 = 1 ÷ akar 3 (akar 3 ÷ 3)</strong>, lalu <strong>sin 60 = akar 3 ÷ 2</strong>, <strong>cos 60 = 1/2</strong>, dan <strong>tan 60 = akar 3</strong>. Perhatikan bahwa nilai 30 dan 60 saling bertukar untuk sin dan cos.",
      },
      {
        type: "takeaways",
        items: [
          "Garis tinggi membelah segitiga sama sisi menjadi dua segitiga 30-60-90.",
          "Sisi segitiga itu berbanding 1 : akar 3 : 2.",
          "sin 30 = 1/2, sin 60 = akar 3 ÷ 2; nilai cos-nya saling bertukar.",
          "tan 30 = akar 3 ÷ 3 dan tan 60 = akar 3.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Sudut 30 dan 60 derajat ditemukan dengan cara?",
            options: [
              "Membelah persegi",
              "Membelah segitiga sama sisi dengan garis tinggi",
              "Menggambar lingkaran",
              "Menghafal tabel",
            ],
            answer: 1,
            explain: "Garis tinggi membagi segitiga sama sisi menjadi dua segitiga 30-60-90.",
          },
          {
            q: "Perbandingan sisi segitiga 30-60-90 adalah?",
            options: ["1 : 1 : akar 2", "1 : akar 3 : 2", "1 : 2 : 3", "2 : 3 : 4"],
            answer: 1,
            explain: "Alas 1, tinggi akar 3, miring 2.",
          },
          {
            q: "Nilai sin 30 derajat adalah?",
            options: ["1/2", "akar 2 ÷ 2", "akar 3 ÷ 2", "1"],
            answer: 0,
            explain: "sin 30 = 1 ÷ 2 = 1/2.",
          },
          {
            q: "Nilai cos 60 derajat adalah?",
            options: ["akar 3 ÷ 2", "1/2", "1", "0"],
            answer: 1,
            explain: "cos 60 = samping ÷ miring = 1 ÷ 2 = 1/2.",
          },
          {
            q: "Nilai tan 60 derajat adalah?",
            options: ["1 ÷ akar 3", "1", "akar 3", "2"],
            answer: 2,
            explain: "tan 60 = depan ÷ samping = akar 3 ÷ 1 = akar 3.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "nilai-pada-0-dan-90",
    levelId: "sudut-istimewa",
    order: 3,
    title: "Apa yang Terjadi pada 0 dan 90 Derajat?",
    summary:
      "Bayangkan segitiga yang sudutnya dipipihkan sampai 0 derajat, lalu ditegakkan sampai 90 derajat. Pada batas inilah nilai sin dan cos paling ekstrem muncul.",
    durationMin: 12,
    tags: ["trigonometri", "sudut istimewa", "0 derajat", "90 derajat"],
    blocks: [
      {
        type: "paragraph",
        html: "Sudut 0 dan 90 derajat terasa aneh karena segitiganya seolah lenyap. Tetapi justru di batas inilah pola sin dan cos menjadi paling jelas. Daripada menghafal angka 0 dan 1, ayo bayangkan sebuah segitiga yang sudutnya kita ubah perlahan.",
      },
      {
        type: "video",
        comp: "LingkaranSatuanVideo",
        title: "Video: Sudut di Batas 0 dan 90",
        caption: "Saat sudut mengecil menuju 0 atau membesar menuju 90, sisi depan ikut menyusut atau memanjang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan segitiga siku-siku dengan sisi miring tetap 1. Saat sudut diperkecil mendekati 0 derajat, segitiga makin pipih: sisi depan menyusut mendekati 0, sedangkan sisi samping memanjang mendekati 1. Saat sudut diperbesar mendekati 90 derajat, kebalikannya terjadi. Coba bayangkan ke mana tiap sisi menuju.",
      },
      {
        type: "widget",
        widget: "SimulatorLingkaranSatuan",
      },
      {
        type: "callout",
        tone: "info",
        title: "Membaca batasnya",
        html: "Pada 0 derajat: sisi depan = 0 dan sisi samping = 1, sehingga sin 0 = 0 dan cos 0 = 1. Pada 90 derajat: sisi depan = 1 dan sisi samping = 0, sehingga sin 90 = 1 dan cos 90 = 0. Sin naik dari 0 ke 1, sementara cos turun dari 1 ke 0.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Nilai Sinus dari 0 sampai 90 Derajat",
        unit: "nilai sin",
        source: "nilai sudut istimewa",
        note: "Dibaca dari segitiga: sin naik mulus dari 0 menuju 1 seiring membesarnya sudut.",
        data: [
          { label: "0", value: 0, color: "#fb923c" },
          { label: "30", value: 0.5, color: "#fb923c" },
          { label: "45", value: 0.707, color: "#f59e0b" },
          { label: "60", value: 0.866, color: "#eab308" },
          { label: "90", value: 1, color: "#eab308" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Pada sudut 90 derajat dengan sisi miring 1, sisi depan = 1. Berapa nilai sin 90 derajat (depan dibagi miring)?",
        answer: 1,
        tolerance: 0.001,
        solution:
          "sin 90 = depan ÷ miring = 1 ÷ 1 = <strong>1</strong>. Inilah nilai maksimum sinus; sisi depan sudah sepanjang sisi miring.",
        hint: "Saat sudut 90 derajat, sisi depan sama panjang dengan sisi miring.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada sudut 0 derajat dengan sisi miring 1, sisi samping = 1. Berapa nilai cos 0 derajat (samping dibagi miring)?",
        answer: 1,
        tolerance: 0.001,
        solution:
          "cos 0 = samping ÷ miring = 1 ÷ 1 = <strong>1</strong>. Saat sudut 0, sisi samping berimpit dengan sisi miring.",
        hint: "Pada sudut 0, segitiga pipih dan sisi samping sepanjang miring.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan perbandingan dengan nilai batasnya.",
        pairs: [
          { left: "sin 0", right: "0" },
          { left: "cos 0", right: "1" },
          { left: "sin 90", right: "1" },
          { left: "cos 90", right: "0" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Matahari di ufuk dan di puncak",
        html: "Saat matahari tepat di ufuk, sudut ketinggiannya mendekati 0 derajat dan bayangan benda menjadi sangat panjang karena tan mendekati 0. Saat matahari tepat di atas kepala, sudutnya mendekati 90 derajat dan bayangan hampir hilang. Perubahan panjang bayangan sepanjang hari adalah cerita nyata tentang sin dan cos yang bergerak antara 0 dan 1.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Nilai pun muncul di akhir",
        html: "Dari segitiga yang dipipihkan dan ditegakkan, kita simpulkan: <strong>sin 0 = 0</strong>, <strong>cos 0 = 1</strong>, <strong>tan 0 = 0</strong>, lalu <strong>sin 90 = 1</strong>, <strong>cos 90 = 0</strong>. Sedangkan <strong>tan 90 tidak terdefinisi</strong> karena pembaginya (cos 90) bernilai 0.",
      },
      {
        type: "takeaways",
        items: [
          "Saat sudut mendekati 0, sisi depan menyusut ke 0 dan sisi samping mendekati miring.",
          "sin 0 = 0, cos 0 = 1, dan tan 0 = 0.",
          "sin 90 = 1, cos 90 = 0; sin naik sementara cos turun.",
          "tan 90 tidak terdefinisi karena harus membagi dengan 0.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Nilai sin 0 derajat adalah?",
            options: ["0", "0,5", "1", "tidak terdefinisi"],
            answer: 0,
            explain: "Pada 0 derajat sisi depan = 0, jadi sin 0 = 0.",
          },
          {
            q: "Nilai cos 0 derajat adalah?",
            options: ["0", "0,5", "1", "akar 2 ÷ 2"],
            answer: 2,
            explain: "Sisi samping berimpit dengan miring, jadi cos 0 = 1.",
          },
          {
            q: "Nilai sin 90 derajat adalah?",
            options: ["0", "0,707", "1", "tidak terdefinisi"],
            answer: 2,
            explain: "Sisi depan sama panjang dengan miring, jadi sin 90 = 1.",
          },
          {
            q: "Mengapa tan 90 derajat tidak terdefinisi?",
            options: [
              "Karena sin 90 = 0",
              "Karena cos 90 = 0 sehingga membagi dengan nol",
              "Karena sudutnya terlalu besar",
              "Karena segitiganya hilang",
            ],
            answer: 1,
            explain: "tan = sin ÷ cos, dan cos 90 = 0 membuat pembagian tak terdefinisi.",
          },
          {
            q: "Seiring sudut membesar dari 0 ke 90 derajat, nilai cos akan?",
            options: ["Naik dari 0 ke 1", "Turun dari 1 ke 0", "Tetap 1", "Tetap 0"],
            answer: 1,
            explain: "cos turun dari 1 menuju 0, kebalikan dari sin yang naik.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "memakai-sudut-istimewa",
    levelId: "sudut-istimewa",
    order: 4,
    title: "Memakai Sudut Istimewa untuk Memecahkan Soal",
    summary:
      "Setelah semua nilai ditemukan dari segitiga, kini saatnya memakainya. Dengan sudut istimewa, banyak soal bisa diselesaikan tanpa kalkulator.",
    durationMin: 14,
    tags: ["trigonometri", "sudut istimewa", "penerapan", "segitiga"],
    blocks: [
      {
        type: "paragraph",
        html: "Kekuatan sudut istimewa bukan pada hafalannya, melainkan pada kemudahan memakainya. Begitu kita tahu nilai untuk 30, 45, dan 60 derajat berasal dari segitiga sederhana, banyak persoalan tinggi, jarak, dan kemiringan bisa dijawab di kepala. Ayo lihat bagaimana nilai-nilai ini bekerja bersama.",
      },
      {
        type: "video",
        comp: "TrigonometriVideo",
        title: "Video: Memakai Sudut Istimewa",
        caption: "Satu sisi diketahui dan satu sudut istimewa sudah cukup untuk menjawab banyak soal.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan sebuah jalur landai (ramp) sepanjang 10 meter pada sisi miringnya. Sebelum menghitung, tebak: jika sudut landai 30 derajat, lebih tinggi mana ujungnya dibanding jika sudutnya 60 derajat? Lalu pakai sin untuk membuktikan tebakanmu, karena tinggi = miring × sin sudut.",
      },
      {
        type: "widget",
        widget: "SimulatorTrigonometri",
      },
      {
        type: "callout",
        tone: "info",
        title: "Pola yang membantu",
        html: "Untuk mencari sisi depan: depan = miring × sin sudut. Untuk sisi samping: samping = miring × cos sudut. Dengan nilai sudut istimewa, perkalian ini sering menghasilkan angka rapi, misalnya 10 × sin 30 = 10 × 0,5 = 5.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Tinggi Ujung Ramp Sepanjang 10 m pada Berbagai Sudut",
        unit: "meter",
        source: "hasil hitungan 10 × sin sudut",
        note: "Tinggi = 10 × sin sudut. Makin curam sudutnya, makin tinggi ujungnya.",
        data: [
          { label: "30 derajat", value: 5, color: "#fb923c" },
          { label: "45 derajat", value: 7.07, color: "#f59e0b" },
          { label: "60 derajat", value: 8.66, color: "#eab308" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah ramp dengan sisi miring 10 meter membentuk sudut 30 derajat. Berapa tinggi ujungnya dalam meter? (tinggi = miring × sin 30)",
        answer: 5,
        tolerance: 0.1,
        prefix: "",
        suffix: " meter",
        solution:
          "tinggi = 10 × sin 30 = 10 × 0,5 = <strong>5 meter</strong>. Karena sin 30 = 1/2, tingginya pas setengah dari panjang ramp.",
        hint: "sin 30 = 0,5; kalikan dengan 10.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah tiang dilihat dari jarak 12 meter dengan sudut elevasi 60 derajat. Berapa tinggi tiang dalam meter? (tinggi = jarak × tan 60, tan 60 sekitar 1,732)",
        answer: 20.78,
        tolerance: 0.3,
        suffix: " meter",
        solution:
          "tinggi = 12 × tan 60 = 12 × 1,732 = sekitar <strong>20,8 meter</strong>. Karena tan 60 = akar 3, hasilnya lebih dari tiga kali lipat dibanding sudut kecil.",
        hint: "tan 60 = akar 3 (sekitar 1,732); kalikan dengan 12.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan perhitungan berdasarkan perbandingan yang dipakai.",
        buckets: ["Memakai sin", "Memakai cos", "Memakai tan"],
        items: [
          { text: "Mencari tinggi dari sisi miring dan sudut", bucket: "Memakai sin" },
          { text: "Mencari sisi samping dari sisi miring dan sudut", bucket: "Memakai cos" },
          { text: "Mencari tinggi dari jarak mendatar dan sudut elevasi", bucket: "Memakai tan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Merancang jalur kursi roda",
        html: "Standar jalur kursi roda yang nyaman memakai sudut kecil agar tidak terlalu curam. Jika sebuah pintu tingginya 0,5 meter dan kita ingin sudut landai 30 derajat, maka panjang miring yang dibutuhkan = tinggi ÷ sin 30 = 0,5 ÷ 0,5 = 1 meter. Dengan nilai sudut istimewa, perancang langsung tahu panjang ramp tanpa coba-coba.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rangkuman nilai di akhir",
        html: "Inilah nilai yang sudah kita temukan dan kini kita pakai: <strong>sin 30 = 1/2</strong>, <strong>sin 45 = akar 2 ÷ 2</strong>, <strong>sin 60 = akar 3 ÷ 2</strong>; <strong>cos 30 = akar 3 ÷ 2</strong>, <strong>cos 45 = akar 2 ÷ 2</strong>, <strong>cos 60 = 1/2</strong>; serta <strong>tan 30 = akar 3 ÷ 3</strong>, <strong>tan 45 = 1</strong>, <strong>tan 60 = akar 3</strong>. Rumus pemakaiannya: depan = miring × sin, samping = miring × cos.",
      },
      {
        type: "takeaways",
        items: [
          "Sisi depan = miring × sin sudut; sisi samping = miring × cos sudut.",
          "Tinggi dari jarak mendatar = jarak × tan sudut elevasi.",
          "Nilai sudut istimewa membuat perkalian sering menghasilkan angka rapi.",
          "Memahami asal nilai dari segitiga membuat pemakaiannya jauh lebih mudah daripada menghafal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Untuk mencari sisi depan dari sisi miring dan sudut, kita pakai?",
            options: ["miring × cos", "miring × sin", "miring × tan", "miring ÷ sin"],
            answer: 1,
            explain: "sin = depan ÷ miring, jadi depan = miring × sin sudut.",
          },
          {
            q: "Ramp 10 meter dengan sudut 30 derajat tingginya?",
            options: ["3 meter", "5 meter", "7 meter", "10 meter"],
            answer: 1,
            explain: "10 × sin 30 = 10 × 0,5 = 5 meter.",
          },
          {
            q: "Untuk mencari tinggi dari jarak mendatar dan sudut elevasi, kita pakai?",
            options: ["sin", "cos", "tan", "miring"],
            answer: 2,
            explain: "tan = depan ÷ samping, jadi tinggi = jarak × tan sudut.",
          },
          {
            q: "Dari ketiga sudut 30, 45, 60, mana yang menghasilkan ujung ramp tertinggi pada panjang sama?",
            options: ["30 derajat", "45 derajat", "60 derajat", "Sama saja"],
            answer: 2,
            explain: "Makin besar sudut, makin besar sin-nya, jadi 60 derajat paling tinggi.",
          },
          {
            q: "Mengapa sudut istimewa praktis dipakai?",
            options: [
              "Karena nilainya rapi dan berasal dari segitiga sederhana",
              "Karena selalu menghasilkan bilangan bulat",
              "Karena tidak butuh segitiga",
              "Karena hanya berlaku di 90 derajat",
            ],
            answer: 0,
            explain: "Nilainya ditemukan dari segitiga sederhana sehingga mudah dipahami dan dipakai.",
          },
        ],
      },
    ],
  },
];
