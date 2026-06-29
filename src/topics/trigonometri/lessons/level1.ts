import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "lahirnya-sin-cos-tan",
    levelId: "perbandingan-segitiga",
    order: 1,
    title: "Lahirnya Sin, Cos, dan Tan",
    summary:
      "Bagaimana mengukur tinggi pohon tanpa memanjat? Kita berpetualang dengan bayangan dan perbandingan sisi dulu.",
    durationMin: 13,
    tags: ["trigonometri", "perbandingan", "segitiga", "rasio"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu ingin tahu tinggi sebuah pohon, tetapi tidak mungkin memanjatnya. Anehnya, dengan mengukur panjang bayangan dan sudut matahari, kita bisa menghitungnya. Sebelum bertemu rumus sin, cos, tan, ayo selidiki dulu satu pola ajaib pada segitiga.",
      },
      {
        type: "video",
        comp: "TrigonometriVideo",
        title: "Video: Lahirnya Sin, Cos, Tan",
        caption: "Pada sudut yang sama, perbandingan sisi segitiga siku-siku selalu tetap.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Gambar beberapa segitiga siku-siku dengan sudut 30 derajat tetapi ukuran berbeda-beda. Untuk tiap segitiga, bagi panjang sisi depan dengan sisi miring. Apa yang terjadi? Hasilnya selalu sama, yaitu sekitar 0,5. Ukuran berubah, perbandingan tetap.",
      },
      {
        type: "widget",
        widget: "SimulatorTrigonometri",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Perbandingan Depan ÷ Miring untuk Sudut 30 Derajat",
        unit: "nilai perbandingan",
        source: "ilustrasi edukatif",
        note: "Tiga segitiga beda ukuran, semua bersudut 30 derajat. Perbandingannya selalu 0,5.",
        data: [
          { label: "miring 4", value: 0.5, color: "#fb923c" },
          { label: "miring 8", value: 0.5, color: "#f59e0b" },
          { label: "miring 12", value: 0.5, color: "#eab308" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa ini berguna",
        html: "Karena perbandingan hanya bergantung pada sudut, kita bisa mengukur jarak yang tak terjangkau cukup dengan mengetahui satu sudut dan satu sisi. Inilah inti trigonometri.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada segitiga siku-siku, sisi depan sudut = 3 dan sisi miring = 5. Berapa nilai sin sudut itu (depan dibagi miring)?",
        answer: 0.6,
        tolerance: 0.01,
        solution:
          "sin = depan ÷ miring = 3 ÷ 5 = <strong>0,6</strong>. Nilai ini tetap untuk semua segitiga sebangun dengan sudut yang sama.",
        hint: "sin = sisi depan dibagi sisi miring.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan perbandingan trigonometri dengan definisinya.",
        pairs: [
          { left: "sin", right: "depan ÷ miring" },
          { left: "cos", right: "samping ÷ miring" },
          { left: "tan", right: "depan ÷ samping" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengukur tinggi tiang bendera",
        html: "Seorang siswa berdiri 10 meter dari tiang bendera. Ia mengukur sudut ke puncak tiang sebesar 40 derajat. Dengan tan 40 derajat yang nilainya sekitar 0,84, tinggi tiang = 10 × 0,84 = sekitar 8,4 meter, ditambah tinggi matanya. Tanpa memanjat, ia tahu tinggi tiang hanya dari sudut dan jarak. Itulah trigonometri bekerja di dunia nyata.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah melihat perbandingan yang selalu tetap, baru kita beri nama: pada segitiga siku-siku, <strong>sin = depan ÷ miring</strong>, <strong>cos = samping ÷ miring</strong>, dan <strong>tan = depan ÷ samping</strong>. Nilainya hanya bergantung pada besar sudut.",
      },
      {
        type: "takeaways",
        items: [
          "Pada segitiga siku-siku sebangun, perbandingan sisi selalu tetap untuk sudut yang sama.",
          "sin = depan ÷ miring, cos = samping ÷ miring, tan = depan ÷ samping.",
          "Nilai perbandingan hanya bergantung pada sudut, bukan ukuran segitiga.",
          "Trigonometri memungkinkan mengukur jarak dan tinggi yang tak terjangkau.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Nilai sin sebuah sudut didefinisikan sebagai?",
            options: ["samping ÷ miring", "depan ÷ miring", "depan ÷ samping", "miring ÷ depan"],
            answer: 1,
            explain: "sin = sisi depan dibagi sisi miring.",
          },
          {
            q: "Mengapa nilai sin 30 derajat sama untuk segitiga besar dan kecil?",
            options: [
              "Kebetulan",
              "Karena segitiga sebangun punya perbandingan sisi yang sama",
              "Karena sisinya selalu sama panjang",
              "Karena sudutnya berbeda",
            ],
            answer: 1,
            explain: "Segitiga sebangun memiliki perbandingan sisi yang identik.",
          },
          {
            q: "Jika depan = 6 dan samping = 8, maka tan sudut itu adalah?",
            options: ["0,75", "1,33", "0,6", "0,8"],
            answer: 0,
            explain: "tan = depan ÷ samping = 6 ÷ 8 = 0,75.",
          },
          {
            q: "cos sebuah sudut adalah perbandingan?",
            options: ["depan ÷ miring", "samping ÷ miring", "depan ÷ samping", "miring ÷ samping"],
            answer: 1,
            explain: "cos = sisi samping dibagi sisi miring.",
          },
          {
            q: "Trigonometri terutama berguna untuk?",
            options: [
              "Menghafal sudut",
              "Mengukur jarak dan tinggi yang sulit dijangkau",
              "Menggambar lingkaran",
              "Menghitung uang",
            ],
            answer: 1,
            explain: "Dengan sudut dan satu sisi, kita bisa menghitung sisi lain yang tak terjangkau.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "menghitung-sisi-segitiga",
    levelId: "perbandingan-segitiga",
    order: 2,
    title: "Menghitung Sisi yang Hilang",
    summary:
      "Sebuah tangga bersandar di dinding. Berapa tinggi yang dijangkaunya? Kita selidiki dulu cara perbandingan membuka panjang sisi yang tersembunyi.",
    durationMin: 14,
    tags: ["trigonometri", "sisi", "segitiga", "sin", "cos", "tan"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah tangga sepanjang 6 meter bersandar di dinding membentuk sudut 60 derajat dengan lantai. Berapa tinggi dinding yang dijangkau ujung tangga? Kita tidak punya meteran sepanjang itu di udara, tetapi kita punya sudut dan satu sisi. Sebelum menulis rumus, ayo bangun dulu intuisinya.",
      },
      {
        type: "video",
        comp: "TrigonometriVideo",
        title: "Video: Membuka Sisi yang Hilang",
        caption: "Jika satu sudut dan satu sisi diketahui, perbandingan tetap membuka sisi lainnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ingat lagi: untuk sudut tertentu, sisi depan dibagi sisi miring selalu menghasilkan angka yang sama. Untuk sudut 60 derajat, angka itu sekitar 0,866. Artinya, sisi depan selalu sekitar 0,866 kali sisi miring. Jadi kalau miringnya 6, sisi depan kira-kira 6 kali 0,866. Coba terka hasilnya sebelum dihitung.",
      },
      {
        type: "widget",
        widget: "SimulatorTrigonometri",
      },
      {
        type: "chart",
        variant: "line",
        title: "Tinggi yang Dijangkau pada Sudut 60 Derajat",
        unit: "meter sisi depan",
        source: "ilustrasi edukatif",
        note: "Untuk sudut 60 derajat, sisi depan selalu 0,866 kali sisi miring. Saat miring tumbuh, sisi depan tumbuh sebanding.",
        data: [
          { label: "miring 6", value: 5.2, color: "#fb923c" },
          { label: "miring 8", value: 6.93, color: "#f59e0b" },
          { label: "miring 10", value: 8.66, color: "#eab308" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Pilih perbandingan yang tepat",
        html: "Kuncinya adalah memilih perbandingan yang menghubungkan sisi yang diketahui dengan sisi yang dicari. Jika tahu sisi miring dan cari sisi depan, pakai sin. Jika tahu miring dan cari samping, pakai cos. Jika tahu samping dan cari depan, pakai tan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Tangga 6 meter bersandar dengan sudut 60 derajat terhadap lantai. Tinggi yang dijangkau = 6 × sin 60 derajat (sin 60 derajat sekitar 0,866). Berapa meter tingginya?",
        answer: 5.2,
        tolerance: 0.1,
        suffix: " m",
        solution:
          "Tinggi = sisi depan = miring × sin 60 derajat = 6 × 0,866 = <strong>sekitar 5,2 meter</strong>.",
        hint: "Sisi depan = sisi miring × sin sudut.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah rampa miring 10 meter membentuk sudut 30 derajat dengan tanah. Panjang bayangan mendatarnya = 10 × cos 30 derajat (cos 30 derajat sekitar 0,866). Berapa meter?",
        answer: 8.66,
        tolerance: 0.1,
        suffix: " m",
        solution:
          "Sisi samping = miring × cos 30 derajat = 10 × 0,866 = <strong>sekitar 8,66 meter</strong>.",
        hint: "Sisi samping = sisi miring × cos sudut.",
      },
      {
        type: "classifyExercise",
        prompt: "Perbandingan mana yang dipakai untuk tiap situasi mencari sisi?",
        buckets: ["sin", "cos", "tan"],
        items: [
          { text: "Tahu sisi miring, cari sisi depan", bucket: "sin" },
          { text: "Tahu sisi miring, cari sisi samping", bucket: "cos" },
          { text: "Tahu sisi samping, cari sisi depan", bucket: "tan" },
          { text: "Tahu sisi depan, cari sisi samping", bucket: "tan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Panjang penyangga atap",
        html: "Seorang tukang merancang atap dengan kemiringan 30 derajat. Lebar mendatar setengah atap adalah 4 meter, dan ia perlu tahu panjang kayu penyangga yang miring. Karena sisi samping diketahui dan ia mencari sisi miring, ia memakai hubungan samping = miring × cos 30 derajat, sehingga miring = 4 ÷ 0,866 = sekitar 4,62 meter. Dengan satu sudut dan satu sisi, panjang kayu yang harus dipotong langsung ketemu sebelum menggergaji.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah memilih perbandingan yang tepat, baru rumusnya kita rapikan: <strong>sisi depan = miring × sin sudut</strong>, <strong>sisi samping = miring × cos sudut</strong>, dan <strong>sisi depan = samping × tan sudut</strong>. Setiap sisi yang hilang bisa dibuka asal satu sudut dan satu sisi diketahui.",
      },
      {
        type: "takeaways",
        items: [
          "Satu sudut dan satu sisi sudah cukup untuk membuka sisi-sisi lain.",
          "Sisi depan = miring × sin sudut; sisi samping = miring × cos sudut.",
          "Sisi depan = samping × tan sudut bila yang diketahui sisi samping.",
          "Langkah pertama selalu memilih perbandingan yang menghubungkan sisi diketahui dan dicari.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Untuk mencari sisi depan saat sisi miring diketahui, pakai?",
            options: ["miring × cos", "miring × sin", "samping × tan", "miring ÷ sin"],
            answer: 1,
            explain: "Sisi depan = sisi miring × sin sudut.",
          },
          {
            q: "Tangga 10 m bersandar dengan sudut 30 derajat. Tinggi yang dijangkau (sin 30 = 0,5) adalah?",
            options: ["5 m", "8,66 m", "10 m", "0,5 m"],
            answer: 0,
            explain: "Tinggi = 10 × sin 30 = 10 × 0,5 = 5 meter.",
          },
          {
            q: "Sisi samping dihitung dengan?",
            options: ["miring × sin", "miring × cos", "miring × tan", "samping × sin"],
            answer: 1,
            explain: "Sisi samping = sisi miring × cos sudut.",
          },
          {
            q: "Rampa 8 m bersudut 60 derajat. Tinggi rampa (sin 60 = 0,866) sekitar?",
            options: ["4 m", "6,93 m", "8 m", "0,866 m"],
            answer: 1,
            explain: "Tinggi = 8 × sin 60 = 8 × 0,866 = sekitar 6,93 meter.",
          },
          {
            q: "Hal pertama yang dilakukan saat mencari sisi yang hilang?",
            options: [
              "Langsung mengalikan semua sisi",
              "Memilih perbandingan yang menghubungkan sisi diketahui dan dicari",
              "Menghafal nilai sudut",
              "Menggambar lingkaran",
            ],
            answer: 1,
            explain: "Pilih sin, cos, atau tan sesuai sisi yang diketahui dan dicari.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "sudut-elevasi-dan-depresi",
    levelId: "perbandingan-segitiga",
    order: 3,
    title: "Sudut Elevasi dan Depresi",
    summary:
      "Mengapa pilot dan tukang ukur tanah selalu bicara soal sudut pandang? Kita berpetualang dulu dengan garis pandang ke atas dan ke bawah.",
    durationMin: 14,
    tags: ["trigonometri", "elevasi", "depresi", "aplikasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat kamu menengadah memandang puncak gedung, garis pandangmu naik membentuk sudut dengan arah mendatar. Saat kamu di atas tebing memandang perahu di laut, garis pandangmu turun. Dua sudut sederhana ini, elevasi dan depresi, dipakai untuk mengukur tinggi dan jarak yang mustahil dijangkau pita ukur. Ayo selidiki dulu sebelum menamai rumusnya.",
      },
      {
        type: "video",
        comp: "TrigonometriVideo",
        title: "Video: Memandang ke Atas dan ke Bawah",
        caption: "Sudut elevasi diukur dari mendatar ke atas, sudut depresi dari mendatar ke bawah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan kamu berdiri 30 meter dari sebuah menara dan menengadah ke puncaknya dengan sudut 30 derajat. Segitiga siku-sikunya: sisi samping 30 meter, sisi depan adalah tinggi menara. Karena tan menghubungkan depan dan samping, tinggi = 30 × tan 30 derajat. Coba terka dulu, kira-kira lebih tinggi atau lebih pendek dari posisi matamu.",
      },
      {
        type: "widget",
        widget: "SimulatorTrigonometri",
      },
      {
        type: "chart",
        variant: "line",
        title: "Tinggi Menara Terukur pada Elevasi 30 Derajat",
        unit: "meter tinggi",
        source: "ilustrasi edukatif",
        note: "Dengan sudut elevasi tetap 30 derajat, tinggi = jarak × tan 30 (0,577). Semakin jauh kita berdiri saat sudut sama, semakin tinggi objeknya.",
        data: [
          { label: "jarak 30 m", value: 17.3, color: "#fb923c" },
          { label: "jarak 60 m", value: 34.6, color: "#f59e0b" },
          { label: "jarak 90 m", value: 51.9, color: "#eab308" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Elevasi versus depresi",
        html: "Sudut elevasi dan sudut depresi diukur dari garis mendatar yang sama. Karena garis mendatar di mata pengamat sejajar dengan garis mendatar di objek, sudut depresi dari atas sama besar dengan sudut elevasi dari bawah. Ini sering memudahkan perhitungan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kamu berdiri 30 meter dari menara dan melihat puncaknya dengan sudut elevasi 30 derajat. Tinggi menara = 30 × tan 30 derajat (tan 30 sekitar 0,577). Berapa meter (abaikan tinggi mata)?",
        answer: 17.3,
        tolerance: 0.2,
        suffix: " m",
        solution:
          "Tinggi = samping × tan 30 derajat = 30 × 0,577 = <strong>sekitar 17,3 meter</strong>.",
        hint: "Tinggi adalah sisi depan; pakai tinggi = jarak × tan sudut.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari atas mercusuar setinggi 40 meter, sebuah perahu terlihat dengan sudut depresi 45 derajat. Jarak mendatar perahu = 40 ÷ tan 45 derajat (tan 45 = 1). Berapa meter?",
        answer: 40,
        tolerance: 0.5,
        suffix: " m",
        solution:
          "Karena tan 45 derajat = 1, jarak = tinggi ÷ tan 45 = 40 ÷ 1 = <strong>40 meter</strong>. Pada 45 derajat, tinggi dan jarak mendatar selalu sama.",
        hint: "tan 45 derajat = 1, jadi jarak = tinggi ÷ tan sudut.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah dengan maknanya.",
        pairs: [
          { left: "Sudut elevasi", right: "Garis pandang naik dari mendatar" },
          { left: "Sudut depresi", right: "Garis pandang turun dari mendatar" },
          { left: "Sisi samping", right: "Jarak mendatar pengamat ke objek" },
          { left: "Sisi depan", right: "Tinggi objek dari garis mendatar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pesawat dan landasan",
        html: "Seorang pilot pada ketinggian 600 meter melihat ujung landasan dengan sudut depresi 3 derajat saat hendak mendarat. Dengan tan 3 derajat yang nilainya sekitar 0,0524, jarak mendatar ke landasan = 600 ÷ 0,0524 = sekitar 11.450 meter, atau lebih dari 11 kilometer. Itulah sebabnya pendekatan pendaratan dimulai sangat jauh: sudut turun yang landai berarti jarak mendatar yang panjang.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah memetakan garis pandang, baru rumusnya muncul: pada sudut elevasi atau depresi, <strong>tinggi = jarak mendatar × tan sudut</strong>, dan sebaliknya <strong>jarak mendatar = tinggi ÷ tan sudut</strong>. Sudut depresi dari atas selalu sama besar dengan sudut elevasi dari bawah.",
      },
      {
        type: "takeaways",
        items: [
          "Sudut elevasi diukur naik dari garis mendatar, sudut depresi diukur turun.",
          "Tinggi = jarak mendatar × tan sudut; jarak = tinggi ÷ tan sudut.",
          "Sudut depresi dari atas sama besar dengan sudut elevasi dari bawah.",
          "Sudut kecil berarti jarak mendatar sangat panjang untuk tinggi tertentu.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Sudut elevasi adalah sudut yang dibentuk garis pandang?",
            options: [
              "Turun dari garis mendatar",
              "Naik dari garis mendatar",
              "Tegak lurus tanah",
              "Sejajar tanah",
            ],
            answer: 1,
            explain: "Elevasi diukur naik dari garis mendatar menuju objek di atas.",
          },
          {
            q: "Berdiri 50 m dari menara, elevasi 45 derajat (tan 45 = 1). Tinggi menara?",
            options: ["25 m", "50 m", "100 m", "70 m"],
            answer: 1,
            explain: "Tinggi = 50 × tan 45 = 50 × 1 = 50 meter.",
          },
          {
            q: "Mengapa sudut depresi dari atas sama dengan sudut elevasi dari bawah?",
            options: [
              "Karena jaraknya sama",
              "Karena dua garis mendatar itu sejajar",
              "Karena tingginya sama",
              "Hanya kebetulan",
            ],
            answer: 1,
            explain: "Keduanya sudut dalam berseberangan pada dua garis mendatar yang sejajar.",
          },
          {
            q: "Untuk mencari jarak mendatar bila tinggi dan sudut diketahui, pakai?",
            options: ["tinggi × tan sudut", "tinggi ÷ tan sudut", "tinggi × sin sudut", "tinggi ÷ sin sudut"],
            answer: 1,
            explain: "jarak mendatar = tinggi ÷ tan sudut.",
          },
          {
            q: "Sudut depresi yang sangat kecil menghasilkan?",
            options: [
              "Jarak mendatar yang sangat pendek",
              "Jarak mendatar yang sangat panjang",
              "Tinggi yang sangat besar",
              "Tidak ada segitiga",
            ],
            answer: 1,
            explain: "Sudut kecil membuat tan kecil, sehingga jarak = tinggi ÷ tan menjadi besar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "perbandingan-sudut-pelengkap",
    levelId: "perbandingan-segitiga",
    order: 4,
    title: "Rahasia Sudut Pelengkap",
    summary:
      "Mengapa sin sebuah sudut diam-diam sama dengan cos kawannya? Kita selidiki dulu pasangan sudut yang berjumlah 90 derajat.",
    durationMin: 13,
    tags: ["trigonometri", "sudut-pelengkap", "sin", "cos", "ko-fungsi"],
    blocks: [
      {
        type: "paragraph",
        html: "Pada sebuah segitiga siku-siku, dua sudut lancipnya selalu berjumlah 90 derajat. Mereka adalah pasangan pelengkap. Anehnya, sisi depan salah satu sudut justru menjadi sisi samping bagi sudut yang lain. Dari pertukaran posisi inilah lahir sebuah hubungan rapi. Ayo selidiki dulu polanya sebelum menulis rumus.",
      },
      {
        type: "video",
        comp: "TrigonometriVideo",
        title: "Video: Pasangan Sudut 90 Derajat",
        caption: "Sisi depan satu sudut adalah sisi samping bagi sudut pelengkapnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil segitiga siku-siku dengan sudut 30 dan 60 derajat. Hitung sin 30 derajat, nilainya 0,5. Sekarang hitung cos 60 derajat, nilainya juga 0,5. Bukan kebetulan: 30 dan 60 berjumlah 90 derajat. Coba ulangi dengan sin 20 dan cos 70, lalu lihat polanya.",
      },
      {
        type: "widget",
        widget: "SimulatorTrigonometri",
      },
      {
        type: "chart",
        variant: "bar",
        title: "sin θ Selalu Sama dengan cos (90 − θ)",
        unit: "nilai perbandingan",
        source: "ilustrasi edukatif",
        note: "Tiap pasang batang adalah sin sebuah sudut dan cos pelengkapnya. Nilainya selalu sama persis.",
        data: [
          { label: "sin 20°", value: 0.342, color: "#fb923c" },
          { label: "cos 70°", value: 0.342, color: "#fdba74" },
          { label: "sin 40°", value: 0.643, color: "#f59e0b" },
          { label: "cos 50°", value: 0.643, color: "#fbbf24" },
          { label: "sin 60°", value: 0.866, color: "#eab308" },
          { label: "cos 30°", value: 0.866, color: "#facc15" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa bisa begitu",
        html: "Pada segitiga siku-siku, sisi yang menjadi depan bagi sudut θ adalah sisi yang menjadi samping bagi sudut pelengkapnya (90 − θ). Karena sin memakai sisi depan dan cos memakai sisi samping, keduanya membaca sisi yang sama. Maka nilainya identik.",
      },
      {
        type: "calcExercise",
        prompt:
          "Diketahui sin 25 derajat sekitar 0,423. Tanpa menghitung ulang, berapa nilai cos 65 derajat?",
        answer: 0.423,
        tolerance: 0.005,
        solution:
          "Karena 25 + 65 = 90, maka cos 65 derajat = sin 25 derajat = <strong>0,423</strong>.",
        hint: "cos (90 − θ) = sin θ; perhatikan 25 + 65 = 90.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan pasangan berikut: bernilai sama atau tidak sama?",
        buckets: ["Bernilai sama", "Belum tentu sama"],
        items: [
          { text: "sin 35° dan cos 55°", bucket: "Bernilai sama" },
          { text: "sin 10° dan cos 80°", bucket: "Bernilai sama" },
          { text: "sin 40° dan cos 40°", bucket: "Belum tentu sama" },
          { text: "sin 30° dan cos 30°", bucket: "Belum tentu sama" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menyederhanakan tabel trigonometri",
        html: "Dahulu para pelaut dan astronom menyimpan tabel nilai sin dan cos untuk berlayar. Berkat hubungan sudut pelengkap, mereka cukup mencatat satu kolom saja: nilai sin dari 0 sampai 45 derajat sudah memuat semua nilai cos dari 45 sampai 90 derajat. Setengah tabel menghilang, dan navigasi tetap akurat. Satu pola sederhana menghemat kerja berhari-hari.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah melihat sin dan cos pelengkap selalu berimpit, baru kita tuliskan ko-fungsi: <strong>sin θ = cos (90° − θ)</strong> dan <strong>cos θ = sin (90° − θ)</strong>. Sinus dan kosinus sebenarnya fungsi yang sama, hanya dibaca dari sudut yang saling melengkapi.",
      },
      {
        type: "takeaways",
        items: [
          "Dua sudut lancip segitiga siku-siku selalu berjumlah 90 derajat (saling melengkapi).",
          "sin θ = cos (90° − θ) dan cos θ = sin (90° − θ).",
          "Sisi depan sebuah sudut adalah sisi samping bagi sudut pelengkapnya.",
          "Hubungan ini memangkas separuh tabel trigonometri yang perlu dihafal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dua sudut disebut saling melengkapi jika jumlahnya?",
            options: ["180 derajat", "90 derajat", "360 derajat", "45 derajat"],
            answer: 1,
            explain: "Sudut pelengkap berjumlah tepat 90 derajat.",
          },
          {
            q: "Nilai sin 30 derajat sama dengan?",
            options: ["cos 30 derajat", "cos 60 derajat", "sin 60 derajat", "tan 30 derajat"],
            answer: 1,
            explain: "sin 30 = cos (90 − 30) = cos 60 = 0,5.",
          },
          {
            q: "Jika cos 70 derajat sekitar 0,342, maka sin 20 derajat adalah?",
            options: ["0,940", "0,342", "0,5", "0,643"],
            answer: 1,
            explain: "sin 20 = cos (90 − 20) = cos 70 = 0,342.",
          },
          {
            q: "Mengapa sin dan cos sudut pelengkap bernilai sama?",
            options: [
              "Karena sudutnya sama",
              "Karena sisi depan satu sudut adalah sisi samping pelengkapnya",
              "Karena sisi miringnya berbeda",
              "Hanya kebetulan",
            ],
            answer: 1,
            explain: "Pertukaran peran sisi depan dan samping membuat nilainya identik.",
          },
          {
            q: "Pernyataan yang benar adalah?",
            options: [
              "sin θ = cos θ untuk semua sudut",
              "sin θ = cos (90° − θ)",
              "sin θ = sin (90° − θ)",
              "cos θ = tan (90° − θ)",
            ],
            answer: 1,
            explain: "Hubungan ko-fungsi: sin θ = cos (90° − θ).",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kebalikan-cosec-sec-cot",
    levelId: "perbandingan-segitiga",
    order: 5,
    title: "Tiga Kawan Kebalikan: Cosec, Sec, Cot",
    summary:
      "Kabel penyangga harus menjangkau puncak tiang. Berapa panjangnya? Kita selidiki dulu apa yang terjadi saat perbandingan dibalik.",
    durationMin: 13,
    tags: ["trigonometri", "cosecan", "secan", "cotangen", "kebalikan"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah kabel penyangga harus dibentang dari tanah ke puncak tiang. Kita tahu tinggi tiang dan sudut kabel, tetapi yang dicari justru sisi miringnya. Memakai sin berarti membagi, padahal akan lebih ringkas jika ada perbandingan yang langsung mengalikan. Sebelum menamai rumus, ayo selidiki dulu apa yang terjadi saat sin, cos, dan tan kita balik.",
      },
      {
        type: "video",
        comp: "TrigonometriVideo",
        title: "Video: Membalik Perbandingan",
        caption: "Saat sin, cos, dan tan dibalik, lahir tiga perbandingan kawan: cosec, sec, dan cot.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil segitiga 3, 4, 5. Untuk sudut yang sisi depannya 3 dan sisi sampingnya 4: sin = 3 ÷ 5 = 0,6, cos = 4 ÷ 5 = 0,8, tan = 3 ÷ 4 = 0,75. Sekarang balik tiap pecahan: 5 ÷ 3 = 1,667, 5 ÷ 4 = 1,25, 4 ÷ 3 = 1,333. Tiga angka baru ini punya nama sendiri.",
      },
      {
        type: "widget",
        widget: "SimulatorTrigonometri",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Nilai cosec Mengecil Menuju 1 saat Sudut Menuju 90 Derajat",
        unit: "nilai cosec",
        source: "ilustrasi edukatif",
        note: "cosec adalah kebalikan sin. Karena sin tumbuh menuju 1, kebalikannya menyusut menuju 1.",
        data: [
          { label: "cosec 30°", value: 2.0, color: "#fb923c" },
          { label: "cosec 45°", value: 1.414, color: "#f59e0b" },
          { label: "cosec 60°", value: 1.155, color: "#eab308" },
          { label: "cosec 90°", value: 1.0, color: "#facc15" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Kenapa kebalikan ini membantu",
        html: "Saat yang dicari adalah sisi miring sedangkan yang diketahui sisi depan, memakai sin memaksa kita membagi. Dengan cosec kita cukup mengalikan: sisi miring = sisi depan × cosec sudut. Banyak rumus fisika dan teknik ditulis dengan sec atau cosec agar tetap berupa perkalian.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada segitiga dengan sisi samping = 4 dan sisi miring = 5, berapa nilai sec sudut itu (miring dibagi samping)?",
        answer: 1.25,
        tolerance: 0.01,
        solution:
          "sec = miring ÷ samping = 5 ÷ 4 = <strong>1,25</strong>. Nilai ini adalah kebalikan dari cos = 0,8.",
        hint: "sec adalah kebalikan cos, yaitu miring dibagi samping.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kabel penyangga menuju puncak tiang setinggi 12 m dengan sudut 40 derajat terhadap tanah. Panjang kabel = 12 × cosec 40 derajat (cosec 40 sekitar 1,556). Berapa meter?",
        answer: 18.67,
        tolerance: 0.2,
        suffix: " m",
        solution:
          "Panjang kabel = sisi depan × cosec 40 derajat = 12 × 1,556 = <strong>sekitar 18,67 meter</strong>. Sama saja dengan 12 ÷ sin 40 derajat.",
        hint: "cosec = 1 ÷ sin; panjang miring = tinggi × cosec sudut.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan perbandingan kebalikan dengan definisinya.",
        pairs: [
          { left: "cosec", right: "miring ÷ depan (kebalikan sin)" },
          { left: "sec", right: "miring ÷ samping (kebalikan cos)" },
          { left: "cot", right: "samping ÷ depan (kebalikan tan)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tabel cotangen para pengukur tanah",
        html: "Sebelum kalkulator ada, para pengukur tanah membawa tabel cotangen. Untuk menghitung jarak mendatar dari tinggi dan sudut, mereka cukup mengalikan tinggi dengan cotangen sudut, bukan membagi dengan tangen yang merepotkan di lapangan. Misalnya tinggi menara 50 m terlihat dengan sudut elevasi 25 derajat: jarak = 50 × cot 25 derajat = 50 × 2,145 = sekitar 107 meter. Satu kali perkalian, hasil langsung jadi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah membalik tiap perbandingan, baru namanya kita tetapkan: <strong>cosec θ = 1 ÷ sin θ = miring ÷ depan</strong>, <strong>sec θ = 1 ÷ cos θ = miring ÷ samping</strong>, dan <strong>cot θ = 1 ÷ tan θ = samping ÷ depan</strong>. Ketiganya bukan fungsi baru, hanya sin, cos, dan tan yang dibalik.",
      },
      {
        type: "takeaways",
        items: [
          "cosec, sec, dan cot adalah kebalikan dari sin, cos, dan tan.",
          "cosec θ = miring ÷ depan, sec θ = miring ÷ samping, cot θ = samping ÷ depan.",
          "Memakai kebalikan mengubah pembagian menjadi perkalian yang lebih ringkas.",
          "Karena sin maksimal 1, nilai cosec selalu 1 atau lebih besar.",
          "Banyak rumus teknik ditulis dengan sec atau cosec demi kerapian.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "cosec sebuah sudut didefinisikan sebagai?",
            options: ["samping ÷ depan", "miring ÷ depan", "depan ÷ miring", "miring ÷ samping"],
            answer: 1,
            explain: "cosec = 1 ÷ sin = miring ÷ depan.",
          },
          {
            q: "Jika cos sebuah sudut = 0,5, maka sec sudut itu adalah?",
            options: ["0,5", "1,5", "2", "0,25"],
            answer: 2,
            explain: "sec = 1 ÷ cos = 1 ÷ 0,5 = 2.",
          },
          {
            q: "cot adalah kebalikan dari?",
            options: ["sin", "cos", "tan", "sec"],
            answer: 2,
            explain: "cot = 1 ÷ tan = samping ÷ depan.",
          },
          {
            q: "Mengapa nilai cosec tidak pernah kurang dari 1?",
            options: [
              "Karena sin tidak pernah lebih dari 1",
              "Karena cosec selalu bulat",
              "Karena sudutnya kecil",
              "Hanya kebetulan",
            ],
            answer: 0,
            explain: "Nilai sin paling besar 1, jadi kebalikannya paling kecil 1.",
          },
          {
            q: "Untuk mencari sisi miring saat sisi depan dan sudut diketahui, paling ringkas pakai?",
            options: ["sisi depan × cosec", "sisi depan × sin", "sisi depan ÷ cosec", "sisi depan × cos"],
            answer: 0,
            explain: "miring = depan × cosec sudut, sama dengan depan ÷ sin sudut.",
          },
        ],
      },
    ],
  },
];
