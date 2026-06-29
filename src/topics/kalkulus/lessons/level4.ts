import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "luas-di-bawah-kurva",
    levelId: "integral",
    order: 1,
    title: "Luas di Bawah Kurva: Menjumlah Potongan Tipis",
    summary:
      "Sebelum ada rumus integral, kita taksir luas daerah melengkung dengan menumpuk persegi panjang yang makin tipis.",
    durationMin: 14,
    tags: ["kalkulus", "integral", "jumlah riemann", "luas"],
    blocks: [
      {
        type: "paragraph",
        html: "Bagaimana cara mengukur luas sebuah danau yang tepinya berkelok? Tak ada rumus persegi atau lingkaran yang pas. Tetapi kita bisa menutupnya dengan banyak ubin persegi kecil, lalu menjumlahkan luas ubin itu. Makin kecil ubinnya, makin pas hasilnya. Ide sederhana 'menjumlah potongan tipis' inilah benih dari integral. Ayo selidiki dulu sebelum bertemu lambangnya.",
      },
      {
        type: "video",
        comp: "IntegralVideo",
        title: "Video: Luas di Bawah Kurva",
        caption: "Menumpuk persegi panjang tipis untuk menaksir luas daerah melengkung.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Kita ingin luas di bawah kurva f(x) = x kuadrat dari x = 0 sampai x = 1. Tutupi daerah itu dengan persegi panjang. Mula-mula 1 persegi panjang lebar saja, lalu pecah jadi 2, lalu 4, lalu 8. Catat jumlah luasnya setiap kali. Rasakan angkanya makin menempel ke satu nilai.",
      },
      {
        type: "widget",
        widget: "SimulatorIntegral",
      },
      {
        type: "chart",
        variant: "area",
        title: "Hampiran Luas Mendekati Nilai Sejati saat Potongan Bertambah",
        unit: "taksiran luas",
        source: "jumlah Riemann kanan untuk f(x) = x kuadrat pada selang 0 sampai 1",
        note: "Dengan 1 potongan hasilnya 1; makin banyak potongan, taksiran turun menuju nilai sejati 0,333.",
        data: [
          { label: "1 potongan", value: 1.0, color: "#67e8f9" },
          { label: "2 potongan", value: 0.625, color: "#22d3ee" },
          { label: "4 potongan", value: 0.469, color: "#06b6d4" },
          { label: "8 potongan", value: 0.398, color: "#0891b2" },
          { label: "16 potongan", value: 0.365, color: "#0e7490" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Makin tipis, makin tepat",
        html: "Setiap persegi panjang punya lebar kecil (sebut Δx) dan tinggi setara nilai fungsi di titik itu. Luas satu potongan adalah tinggi kali lebar. Jumlah semua potongan disebut <strong>jumlah Riemann</strong>. Saat lebar potongan menuju nol dan jumlah potongan menuju tak hingga, taksiran berhenti di nilai sejati luasnya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Taksir luas di bawah f(x) = x dari x = 0 sampai x = 4. Daerahnya berbentuk segitiga siku-siku dengan alas 4 dan tinggi 4.",
        answer: 8,
        solution:
          "Luas segitiga = setengah kali alas kali tinggi = 0,5 x 4 x 4 = <strong>8</strong>. Jumlah potongan tipis akan menuju nilai yang sama persis.",
        hint: "Daerah di bawah garis lurus membentuk segitiga. Pakai rumus luas segitiga.",
      },
      {
        type: "calcExercise",
        prompt:
          "Satu persegi panjang punya tinggi 3 dan lebar 0,5. Berapa luas potongan itu?",
        answer: 1.5,
        solution:
          "Luas potongan = tinggi x lebar = 3 x 0,5 = <strong>1,5</strong>. Inilah cara kita menjumlah tiap potongan.",
        hint: "Luas persegi panjang adalah tinggi dikali lebar.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan tiap hampiran: apakah memakai sedikit potongan (kasar) atau banyak potongan (halus dan lebih tepat)?",
        buckets: ["Hampiran kasar", "Hampiran halus"],
        items: [
          { text: "Menutup daerah dengan 2 persegi panjang", bucket: "Hampiran kasar" },
          { text: "Menutup daerah dengan 3 persegi panjang", bucket: "Hampiran kasar" },
          { text: "Menutup daerah dengan 200 persegi panjang", bucket: "Hampiran halus" },
          { text: "Menutup daerah dengan 1000 persegi panjang", bucket: "Hampiran halus" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Jarak dari grafik kecepatan",
        html: "Sebuah mobil melaju dan kecepatannya digambar terhadap waktu. Luas di bawah grafik kecepatan ternyata sama dengan <strong>jarak tempuh</strong>. Jika kecepatan tetap, luasnya kotak biasa. Tetapi jika kecepatan berubah, kita potong waktu jadi selang-selang kecil, kalikan kecepatan dengan tiap selang, lalu jumlahkan. Makin halus potongannya, makin tepat jaraknya. Inilah jumlah Riemann di dunia nyata.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan pola menjumlah potongan, baru kita tuliskan: luas di bawah kurva adalah <strong>limit jumlah Riemann</strong> saat jumlah potongan menuju tak hingga, yaitu jumlah dari f(x) kali Δx untuk Δx menuju nol. Lambangnya nanti menjadi tanda integral, sebuah 'S' memanjang yang berarti penjumlahan tak hingga banyak potongan tipis.",
      },
      {
        type: "takeaways",
        items: [
          "Luas daerah melengkung ditaksir dengan menumpuk persegi panjang tipis.",
          "Luas satu potongan adalah tinggi (nilai fungsi) dikali lebar (Δx).",
          "Jumlah semua potongan disebut jumlah Riemann.",
          "Saat potongan makin banyak dan tipis, taksiran menuju luas sejati.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Cara menaksir luas di bawah kurva adalah?",
            options: [
              "Mengukur kemiringannya",
              "Menjumlah banyak persegi panjang tipis",
              "Mencari nilai terbesar",
              "Membagi dengan dua",
            ],
            answer: 1,
            explain: "Kita menumpuk persegi panjang tipis lalu menjumlahkan luasnya.",
          },
          {
            q: "Luas satu persegi panjang potongan dihitung dengan?",
            options: [
              "Tinggi ditambah lebar",
              "Tinggi dikali lebar",
              "Lebar dibagi tinggi",
              "Tinggi dikuadratkan",
            ],
            answer: 1,
            explain: "Luas persegi panjang adalah tinggi kali lebar.",
          },
          {
            q: "Apa yang terjadi pada taksiran saat potongan makin banyak dan tipis?",
            options: [
              "Makin jauh dari nilai sejati",
              "Tidak berubah",
              "Makin menempel ke luas sejati",
              "Menjadi nol",
            ],
            answer: 2,
            explain: "Makin halus potongannya, taksiran menuju luas sejati.",
          },
          {
            q: "Penjumlahan banyak potongan tipis ini disebut?",
            options: ["Jumlah Riemann", "Garis singgung", "Limit kiri", "Turunan kedua"],
            answer: 0,
            explain: "Penjumlahan potongan tipis di bawah kurva disebut jumlah Riemann.",
          },
          {
            q: "Luas di bawah f(x) = x dari 0 sampai 4 (berbentuk segitiga) adalah?",
            options: ["4", "8", "16", "12"],
            answer: 1,
            explain: "Luas segitiga = 0,5 x 4 x 4 = 8.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "integral-sebagai-antiturunan",
    levelId: "integral",
    order: 2,
    title: "Integral sebagai Antiturunan: Memutar Balik Turunan",
    summary:
      "Menjumlah potongan ternyata punya jalan pinta: cari fungsi yang turunannya adalah fungsi kita.",
    durationMin: 14,
    tags: ["kalkulus", "integral", "antiturunan", "turunan"],
    blocks: [
      {
        type: "paragraph",
        html: "Menjumlah ribuan potongan tipis itu melelahkan. Tetapi ada kejutan indah: kalau kamu tahu fungsi mana yang turunannya menghasilkan kurvamu, kamu bisa menemukan luas tanpa menjumlah satu per satu. Seperti tahu bahwa untuk membatalkan 'tambah 5' cukup 'kurang 5', integral adalah cara memutar balik turunan. Ayo selidiki dulu hubungan ini sebelum menulis rumusnya.",
      },
      {
        type: "video",
        comp: "TurunanVideo",
        title: "Video: Memutar Balik Turunan",
        caption: "Mengingat turunan agar bisa mencari operasi kebalikannya, yaitu antiturunan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ingat: turunan dari x kuadrat adalah 2x. Sekarang balik pertanyaannya. Fungsi apa yang jika diturunkan menghasilkan 2x? Jawabnya x kuadrat. Coba lagi: turunan x pangkat tiga adalah 3x kuadrat, jadi antiturunan 3x kuadrat adalah x pangkat tiga. Rasakan polanya: integral menambah pangkat, turunan menurunkan pangkat.",
      },
      {
        type: "widget",
        widget: "SimulatorIntegral",
      },
      {
        type: "callout",
        tone: "info",
        title: "Operasi yang saling membatalkan",
        html: "Sebut F(x) sebagai <strong>antiturunan</strong> dari f(x) jika turunan F(x) sama dengan f(x). Karena turunan sebuah konstanta adalah nol, banyak fungsi bisa menjadi antiturunan yang sama, berbeda hanya pada tambahan konstanta. Itu sebabnya kita selalu menambahkan '+ C' pada antiturunan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Antiturunan dari f(x) = 2x adalah F(x) = x kuadrat. Berapa nilai F(3)?",
        answer: 9,
        solution:
          "Karena F(x) = x kuadrat, maka F(3) = 3 kuadrat = <strong>9</strong>. Periksa: turunan x kuadrat memang 2x.",
        hint: "Masukkan x = 3 ke fungsi x kuadrat.",
      },
      {
        type: "calcExercise",
        prompt:
          "Fungsi apa yang turunannya 3x kuadrat? Hitung nilainya di x = 2.",
        answer: 8,
        solution:
          "Antiturunan 3x kuadrat adalah x pangkat tiga. Di x = 2 nilainya 2 pangkat tiga = <strong>8</strong>.",
        hint: "Turunan x pangkat tiga adalah 3x kuadrat.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap fungsi dengan antiturunannya (abaikan konstanta + C).",
        pairs: [
          { left: "f(x) = 2x", right: "x kuadrat" },
          { left: "f(x) = 3x kuadrat", right: "x pangkat tiga" },
          { left: "f(x) = 1", right: "x" },
          { left: "f(x) = 4x pangkat tiga", right: "x pangkat empat" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Dari laju air ke volume tangki",
        html: "Sebuah keran mengisi tangki dengan laju yang berubah-ubah setiap detik. Laju (liter per detik) adalah turunan dari volume terhadap waktu. Jadi untuk tahu total volume air, kita perlu <strong>memutar balik</strong>: cari fungsi volume yang turunannya sama dengan laju keran. Tanpa menjumlah tiap tetes, antiturunan langsung memberi total air. Inilah kekuatan melihat integral sebagai kebalikan turunan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan polanya, baru kita tuliskan: <strong>integral adalah antiturunan</strong>. Jika turunan F(x) sama dengan f(x), maka integral f(x) sama dengan F(x) + C. Karena turunan menurunkan pangkat, integral menaikkannya: integral dari x pangkat n adalah x pangkat (n+1) dibagi (n+1), ditambah C, berlaku selama n bukan negatif satu.",
      },
      {
        type: "takeaways",
        items: [
          "Integral adalah operasi kebalikan dari turunan.",
          "F(x) disebut antiturunan f(x) jika turunan F(x) sama dengan f(x).",
          "Turunan menurunkan pangkat, integral menaikkan pangkat.",
          "Antiturunan selalu disertai konstanta + C karena turunan konstanta nol.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Integral adalah operasi kebalikan dari?",
            options: ["Penjumlahan", "Turunan", "Perkalian", "Akar"],
            answer: 1,
            explain: "Integral memutar balik turunan, keduanya saling membatalkan.",
          },
          {
            q: "F(x) disebut antiturunan f(x) jika?",
            options: [
              "F(x) sama dengan f(x)",
              "Turunan F(x) sama dengan f(x)",
              "F(x) bernilai nol",
              "F(x) lebih besar dari f(x)",
            ],
            answer: 1,
            explain: "Antiturunan berarti turunannya kembali ke fungsi semula.",
          },
          {
            q: "Antiturunan dari 2x adalah?",
            options: ["x kuadrat", "2", "x", "2x kuadrat"],
            answer: 0,
            explain: "Turunan x kuadrat adalah 2x, jadi antiturunannya x kuadrat.",
          },
          {
            q: "Mengapa antiturunan selalu ditambah konstanta + C?",
            options: [
              "Agar terlihat rapi",
              "Karena turunan sebuah konstanta adalah nol",
              "Karena C selalu satu",
              "Karena integral selalu negatif",
            ],
            answer: 1,
            explain: "Konstanta hilang saat diturunkan, jadi banyak antiturunan beda hanya pada C.",
          },
          {
            q: "Antiturunan dari x pangkat dua adalah?",
            options: [
              "x pangkat tiga dibagi tiga",
              "2x",
              "x pangkat dua dibagi dua",
              "3x pangkat dua",
            ],
            answer: 0,
            explain: "Integral x pangkat n adalah x pangkat (n+1) dibagi (n+1), jadi x pangkat tiga dibagi tiga.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "integral-tentu",
    levelId: "integral",
    order: 3,
    title: "Integral Tentu: Luas di Antara Dua Batas",
    summary:
      "Dari antiturunan menuju angka pasti: luas daerah antara dua batas dihitung dengan selisih nilai.",
    durationMin: 15,
    tags: ["kalkulus", "integral", "integral tentu", "luas"],
    blocks: [
      {
        type: "paragraph",
        html: "Antiturunan memberi kita keluarga fungsi, tetapi luas sebuah daerah harus berupa satu angka pasti. Bagaimana mengubah fungsi menjadi bilangan? Caranya elok: ambil antiturunan, lalu hitung nilainya di batas atas dan kurangi nilainya di batas bawah. Tambahan konstanta C pun lenyap dengan sendirinya. Ayo selidiki dulu cara kerjanya sebelum bertemu lambang batasnya.",
      },
      {
        type: "video",
        comp: "IntegralVideo",
        title: "Video: Integral Tentu",
        caption: "Menghitung luas pasti antara batas bawah dan batas atas.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil f(x) = 2x. Antiturunannya x kuadrat. Kita ingin luas dari x = 0 sampai x = 3. Hitung antiturunan di batas atas: 3 kuadrat = 9. Hitung di batas bawah: 0 kuadrat = 0. Selisihnya 9 - 0 = 9. Itulah luas pastinya. Coba ganti batas atas jadi 2 lalu 4 dan amati luasnya bertambah.",
      },
      {
        type: "widget",
        widget: "SimulatorIntegral",
      },
      {
        type: "chart",
        variant: "area",
        title: "Luas Terakumulasi di Bawah f(x) = 2x dari 0 sampai Batas Atas",
        unit: "luas (satuan persegi)",
        source: "integral tentu f(x) = 2x, antiturunan x kuadrat dievaluasi dari 0",
        note: "Luas dari 0 sampai b sama dengan b kuadrat: angka nyata, bukan taksiran.",
        data: [
          { label: "sampai x=1", value: 1, color: "#67e8f9" },
          { label: "sampai x=2", value: 4, color: "#22d3ee" },
          { label: "sampai x=3", value: 9, color: "#06b6d4" },
          { label: "sampai x=4", value: 16, color: "#0891b2" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa C lenyap",
        html: "Saat menghitung selisih antiturunan di dua batas, bagian + C muncul dua kali lalu saling kurang dan hilang. Itu sebabnya pada <strong>integral tentu</strong> kita tak perlu menulis + C. Hasilnya selalu satu angka pasti, yaitu luas bersih daerah antara kurva dan sumbu x pada selang itu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Hitung integral tentu f(x) = 2x dari x = 0 sampai x = 3. (Antiturunan: x kuadrat.)",
        answer: 9,
        solution:
          "Nilai antiturunan di batas atas dikurangi di batas bawah: 3 kuadrat - 0 kuadrat = 9 - 0 = <strong>9</strong>.",
        hint: "Evaluasi x kuadrat di 3, lalu kurangi nilainya di 0.",
      },
      {
        type: "calcExercise",
        prompt:
          "Hitung integral tentu f(x) = 2x dari x = 1 sampai x = 4. (Antiturunan: x kuadrat.)",
        answer: 15,
        solution:
          "Batas atas dikurangi batas bawah: 4 kuadrat - 1 kuadrat = 16 - 1 = <strong>15</strong>.",
        hint: "Hitung 4 kuadrat lalu kurangi 1 kuadrat.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Untuk f(x) = 2x dengan antiturunan x kuadrat, kelompokkan tiap integral tentu menurut hasilnya.",
        buckets: ["Hasil 4", "Hasil 9"],
        items: [
          { text: "Dari 0 sampai 2", bucket: "Hasil 4" },
          { text: "Dari 0 sampai 3", bucket: "Hasil 9" },
          { text: "Selisih 2 kuadrat dan 0 kuadrat", bucket: "Hasil 4" },
          { text: "Selisih 3 kuadrat dan 0 kuadrat", bucket: "Hasil 9" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Total hujan dari laju curah",
        html: "Stasiun cuaca mencatat laju curah hujan (milimeter per jam) yang berubah sepanjang sore. Untuk tahu <strong>total air hujan</strong> antara pukul 14.00 dan 17.00, kita ambil antiturunan dari laju curah, lalu hitung selisih nilainya di pukul 17.00 dan pukul 14.00. Hasilnya satu angka: total milimeter hujan pada selang itu. Inilah integral tentu yang mengubah laju yang berubah menjadi total yang pasti.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan polanya, baru kita tuliskan <strong>Teorema Dasar Kalkulus</strong>: integral tentu f(x) dari a sampai b sama dengan F(b) - F(a), dengan F antiturunan dari f. Lambangnya tanda integral berbatas a di bawah dan b di atas. Jumlah tak hingga potongan tipis dari pelajaran pertama ternyata cukup dihitung lewat satu selisih nilai antiturunan.",
      },
      {
        type: "takeaways",
        items: [
          "Integral tentu menghasilkan satu angka, yaitu luas pasti pada selang tertentu.",
          "Nilainya adalah F(b) - F(a), selisih antiturunan di batas atas dan bawah.",
          "Konstanta + C lenyap karena saling kurang pada kedua batas.",
          "Teorema Dasar Kalkulus menghubungkan luas (penjumlahan) dengan antiturunan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Integral tentu menghasilkan?",
            options: [
              "Keluarga fungsi",
              "Satu angka pasti",
              "Sebuah grafik",
              "Kemiringan garis",
            ],
            answer: 1,
            explain: "Integral tentu memberi satu nilai, yaitu luas pada selang tertentu.",
          },
          {
            q: "Integral tentu f(x) dari a sampai b sama dengan?",
            options: ["F(a) - F(b)", "F(b) - F(a)", "F(a) + F(b)", "F(b) dikali F(a)"],
            answer: 1,
            explain: "Teorema Dasar Kalkulus: F(b) dikurangi F(a).",
          },
          {
            q: "Mengapa konstanta + C tidak ditulis pada integral tentu?",
            options: [
              "Karena C selalu nol",
              "Karena C muncul dua kali dan saling kurang",
              "Karena dilarang",
              "Karena C menjadi tak hingga",
            ],
            answer: 1,
            explain: "C di batas atas dan bawah saling menghilangkan.",
          },
          {
            q: "Integral tentu 2x dari 0 sampai 3 (antiturunan x kuadrat) adalah?",
            options: ["3", "6", "9", "12"],
            answer: 2,
            explain: "3 kuadrat - 0 kuadrat = 9.",
          },
          {
            q: "Teorema Dasar Kalkulus menghubungkan?",
            options: [
              "Penjumlahan luas dengan antiturunan",
              "Perkalian dengan pembagian",
              "Limit dengan konstanta",
              "Garis dengan lingkaran",
            ],
            answer: 0,
            explain: "Ia menyatukan luas (jumlah potongan) dengan antiturunan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "menghitung-integral-dasar",
    levelId: "integral",
    order: 4,
    title: "Menghitung Integral Dasar: Aturan Pangkat",
    summary:
      "Setelah paham maknanya, kita rapikan satu aturan praktis untuk mengintegralkan pangkat dengan cepat.",
    durationMin: 15,
    tags: ["kalkulus", "integral", "aturan pangkat", "perhitungan"],
    blocks: [
      {
        type: "paragraph",
        html: "Kita sudah tahu integral itu memutar balik turunan dan integral tentu memberi luas pasti. Sekarang saatnya melatih jemari: bagaimana mengintegralkan x, x kuadrat, atau x pangkat lima dengan cepat? Daripada menebak tiap kali, kita kenali satu pola sederhana yang lahir dari membalik aturan turunan. Ayo selidiki dulu polanya sebelum menulis aturannya rapi.",
      },
      {
        type: "video",
        comp: "IntegralVideo",
        title: "Video: Aturan Pangkat Integral",
        caption: "Membalik aturan turunan untuk mengintegralkan pangkat dengan cepat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Amati pola turunan terbalik. Turunan x pangkat dua adalah 2x, maka integral x adalah x pangkat dua dibagi dua. Turunan x pangkat tiga adalah 3x kuadrat, maka integral x kuadrat adalah x pangkat tiga dibagi tiga. Lihat: pangkat naik satu, lalu dibagi pangkat yang baru. Coba sendiri untuk x pangkat tiga dan x pangkat empat.",
      },
      {
        type: "widget",
        widget: "SimulatorIntegral",
      },
      {
        type: "callout",
        tone: "info",
        title: "Naikkan pangkat, bagi pangkat baru",
        html: "Aturannya bekerja dua langkah: <strong>naikkan pangkat satu tingkat</strong>, lalu <strong>bagi dengan pangkat yang baru</strong>. Untuk integral tak tentu tambahkan + C. Untuk integral tentu, evaluasi hasilnya di batas atas dan kurangi di batas bawah. Aturan ini berlaku untuk semua pangkat kecuali pangkat negatif satu, yang punya kasus khusus tersendiri.",
      },
      {
        type: "calcExercise",
        prompt:
          "Hitung integral tentu f(x) = x kuadrat dari x = 0 sampai x = 2. Bulatkan ke dua desimal.",
        answer: 2.67,
        tolerance: 0.02,
        solution:
          "Antiturunan x kuadrat adalah x pangkat tiga dibagi tiga. Di batas: (2 pangkat tiga)/3 - 0 = 8/3 yang kira-kira <strong>2,67</strong>.",
        hint: "Antiturunan x kuadrat adalah x pangkat tiga dibagi tiga, lalu pakai batas 0 dan 2.",
      },
      {
        type: "calcExercise",
        prompt:
          "Hitung integral tentu f(x) = x pangkat tiga dari x = 0 sampai x = 2.",
        answer: 4,
        solution:
          "Antiturunan x pangkat tiga adalah x pangkat empat dibagi empat. Di batas: (2 pangkat empat)/4 - 0 = 16/4 = <strong>4</strong>.",
        hint: "Naikkan pangkat jadi empat, bagi empat, lalu evaluasi di 0 dan 2.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap fungsi dengan antiturunannya menurut aturan pangkat (abaikan + C).",
        pairs: [
          { left: "integral x", right: "x kuadrat dibagi dua" },
          { left: "integral x kuadrat", right: "x pangkat tiga dibagi tiga" },
          { left: "integral x pangkat tiga", right: "x pangkat empat dibagi empat" },
          { left: "integral x pangkat empat", right: "x pangkat lima dibagi lima" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Jarak mobil yang dipercepat",
        html: "Sebuah mobil mulai dari diam dan kecepatannya naik mengikuti v(t) = 6t (meter per detik). Untuk tahu jarak yang ditempuh dalam 4 detik pertama, kita integralkan kecepatan: antiturunan 6t adalah 3 kali t kuadrat. Evaluasi dari 0 sampai 4: 3 kali 16 dikurangi 0, yaitu <strong>48 meter</strong>. Aturan pangkat membuat perhitungan jarak dari kecepatan yang berubah menjadi singkat dan pasti.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah melatih polanya, baru kita tuliskan rapi <strong>aturan pangkat integral</strong>: integral x pangkat n sama dengan x pangkat (n+1) dibagi (n+1), ditambah C, berlaku selama n bukan negatif satu. Untuk integral tentu, gabungkan dengan Teorema Dasar Kalkulus: hitung antiturunan di batas atas dikurangi di batas bawah. Inilah buah dari seluruh perjalanan menjumlah potongan tak hingga.",
      },
      {
        type: "takeaways",
        items: [
          "Aturan pangkat: naikkan pangkat satu tingkat, lalu bagi dengan pangkat baru.",
          "Integral x pangkat n sama dengan x pangkat (n+1) dibagi (n+1) tambah C.",
          "Aturan ini berlaku untuk semua pangkat kecuali negatif satu.",
          "Untuk integral tentu, evaluasi antiturunan di batas atas dikurangi batas bawah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dua langkah aturan pangkat integral adalah?",
            options: [
              "Turunkan pangkat lalu kali pangkat",
              "Naikkan pangkat lalu bagi pangkat baru",
              "Kuadratkan lalu akar",
              "Tambah satu lalu kurang satu",
            ],
            answer: 1,
            explain: "Naikkan pangkat satu tingkat, lalu bagi dengan pangkat yang baru.",
          },
          {
            q: "Integral x kuadrat sama dengan?",
            options: [
              "2x tambah C",
              "x pangkat tiga dibagi tiga tambah C",
              "x kuadrat dibagi dua tambah C",
              "3x tambah C",
            ],
            answer: 1,
            explain: "Naikkan pangkat ke tiga lalu bagi tiga: x pangkat tiga dibagi tiga.",
          },
          {
            q: "Aturan pangkat integral tidak berlaku untuk pangkat?",
            options: ["Nol", "Dua", "Negatif satu", "Lima"],
            answer: 2,
            explain: "Pangkat negatif satu membuat pembagi (n+1) menjadi nol, jadi ada kasus khusus.",
          },
          {
            q: "Integral tentu x kuadrat dari 0 sampai 2 kira-kira?",
            options: ["1,33", "2,67", "4,00", "8,00"],
            answer: 1,
            explain: "Antiturunan x pangkat tiga dibagi tiga; (8/3) dikurangi 0 sekitar 2,67.",
          },
          {
            q: "Integral x pangkat empat sama dengan?",
            options: [
              "x pangkat lima dibagi lima tambah C",
              "4x pangkat tiga tambah C",
              "x pangkat tiga dibagi tiga tambah C",
              "x pangkat empat dibagi empat tambah C",
            ],
            answer: 0,
            explain: "Naikkan pangkat ke lima lalu bagi lima: x pangkat lima dibagi lima.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "nilai-rata-rata-fungsi",
    levelId: "integral",
    order: 5,
    title: "Nilai Rata-rata Sebuah Fungsi: Meratakan yang Naik Turun",
    summary:
      "Sebelum menulis rumusnya, kita cari satu nilai datar yang mewakili seluruh fungsi yang berubah-ubah, lewat luas yang sama.",
    durationMin: 14,
    tags: ["kalkulus", "integral", "nilai rata-rata", "aplikasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Suhu sebuah kota naik turun sepanjang hari, tetapi ramalan cuaca tetap bisa menyebut 'suhu rata-rata hari ini 28 derajat'. Bagaimana meratakan sesuatu yang terus berubah setiap saat, bukan cuma beberapa angka? Jawabannya bersandar pada luas di bawah kurva. Ayo selidiki dulu sebelum menulis rumusnya.",
      },
      {
        type: "video",
        comp: "IntegralVideo",
        title: "Video: Meratakan Fungsi yang Berubah",
        caption: "Mencari tinggi datar yang luasnya sama dengan luas di bawah kurva.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil f(x) = 2x dari x = 0 sampai x = 3. Luas di bawahnya berbentuk segitiga: setengah x 3 x 6 = 9. Sekarang bayangkan sebuah persegi panjang dengan lebar 3 yang luasnya juga 9. Berapa tingginya? Tinggi itulah nilai rata-rata fungsi. Coba hitung: 9 dibagi 3.",
      },
      {
        type: "widget",
        widget: "SimulatorIntegral",
      },
      {
        type: "chart",
        variant: "line",
        title: "Fungsi f(x) = 2x dan Nilai Rata-ratanya pada Selang 0 sampai 3",
        unit: "nilai f(x)",
        source: "perhitungan f(x) = 2x; rata-rata = (luas) / lebar = 9 / 3",
        note: "Garis naik dari 0 ke 6; nilai rata-ratanya 3, yaitu tinggi di titik tengah selang.",
        data: [
          { label: "x=0", value: 0, color: "#67e8f9" },
          { label: "x=1", value: 2, color: "#22d3ee" },
          { label: "x=1,5 (rata-rata=3)", value: 3, color: "#06b6d4" },
          { label: "x=2", value: 4, color: "#0891b2" },
          { label: "x=3", value: 6, color: "#0e7490" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Tinggi datar yang luasnya sama",
        html: "Nilai rata-rata sebuah fungsi adalah <strong>tinggi persegi panjang</strong> yang, dengan lebar selebar selang, memberi luas sama persis dengan luas di bawah kurva. Karena luas itu adalah integral, kita tinggal membagi integral dengan lebar selang untuk mendapatkan tinggi rata-ratanya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa nilai rata-rata f(x) = 2x pada selang x = 0 sampai x = 4? (Antiturunan 2x adalah x kuadrat.)",
        answer: 4,
        solution:
          "Luas (integral) = 4 kuadrat - 0 = 16. Lebar selang = 4 - 0 = 4. Nilai rata-rata = 16 dibagi 4 = <strong>4</strong>.",
        hint: "Hitung integral lalu bagi dengan lebar selang.",
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa nilai rata-rata fungsi konstan f(x) = 6 pada selang x = 2 sampai x = 10?",
        answer: 6,
        solution:
          "Fungsi yang sudah datar memiliki rata-rata sama dengan nilainya sendiri, yaitu <strong>6</strong>. Periksa: luas = 6 x 8 = 48, dibagi lebar 8 = 6.",
        hint: "Fungsi konstan tidak naik turun, jadi rata-ratanya nilainya sendiri.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan fungsi dan selangnya dengan nilai rata-ratanya.",
        pairs: [
          { left: "f(x) = 2x pada 0 sampai 3", right: "3" },
          { left: "f(x) = 2x pada 0 sampai 5", right: "5" },
          { left: "f(x) = x kuadrat pada 0 sampai 3", right: "3" },
          { left: "f(x) = 4 pada 0 sampai 10", right: "4" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kecepatan rata-rata sebuah perjalanan",
        html: "Seorang pengemudi melaju dengan kecepatan yang naik turun: macet di kota, lancar di tol. Kecepatan rata-rata perjalanan bukan rata-rata sederhana dari beberapa angka, melainkan <strong>total jarak dibagi total waktu</strong>. Karena total jarak adalah luas di bawah grafik kecepatan, yaitu integral kecepatan, maka kecepatan rata-rata sama dengan integral kecepatan dibagi lamanya waktu. Inilah nilai rata-rata sebuah fungsi yang bekerja di dunia nyata.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah merasakan polanya, baru kita tuliskan: <strong>nilai rata-rata f pada selang a sampai b adalah (1 dibagi (b - a)) dikali integral dari a ke b atas f(x) dx</strong>. Artinya luas di bawah kurva dibagi lebar selang. Untuk fungsi linear, nilai rata-rata ini persis sama dengan tinggi kurva di titik tengah selang.",
      },
      {
        type: "takeaways",
        items: [
          "Nilai rata-rata fungsi adalah tinggi datar yang luasnya sama dengan luas di bawah kurva.",
          "Rumusnya: integral fungsi pada selang dibagi lebar selang.",
          "Fungsi konstan memiliki rata-rata sama dengan nilainya sendiri.",
          "Untuk fungsi linear, rata-ratanya sama dengan nilai di titik tengah selang.",
          "Kecepatan rata-rata perjalanan adalah contoh nyata nilai rata-rata sebuah fungsi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Nilai rata-rata sebuah fungsi pada selang adalah?",
            options: [
              "Nilai terbesar fungsi",
              "Integral fungsi dibagi lebar selang",
              "Turunan fungsi di titik tengah",
              "Selisih batas atas dan bawah",
            ],
            answer: 1,
            explain: "Nilai rata-rata = luas di bawah kurva (integral) dibagi lebar selang.",
          },
          {
            q: "Nilai rata-rata f(x) = 2x pada selang 0 sampai 4 adalah?",
            options: ["2", "4", "8", "16"],
            answer: 1,
            explain: "Integral = 16, dibagi lebar 4, menghasilkan 4.",
          },
          {
            q: "Nilai rata-rata fungsi konstan f(x) = 6 adalah?",
            options: ["0", "3", "6", "12"],
            answer: 2,
            explain: "Fungsi datar memiliki rata-rata sama dengan nilainya, yaitu 6.",
          },
          {
            q: "Untuk fungsi linear, nilai rata-ratanya sama dengan?",
            options: [
              "Nilai di titik tengah selang",
              "Nilai di batas kiri",
              "Nilai terbesar",
              "Nol",
            ],
            answer: 0,
            explain: "Pada fungsi linear, rata-ratanya tepat tinggi kurva di titik tengah selang.",
          },
          {
            q: "Kecepatan rata-rata sebuah perjalanan dihitung sebagai?",
            options: [
              "Total jarak dibagi total waktu",
              "Kecepatan tertinggi",
              "Selisih dua kecepatan",
              "Percepatan dikali waktu",
            ],
            answer: 0,
            explain: "Total jarak (integral kecepatan) dibagi waktu adalah nilai rata-rata kecepatan.",
          },
        ],
      },
    ],
  },
];
