import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "keliling-bangun-datar",
    levelId: "bangun-datar",
    order: 1,
    title: "Keliling Bangun Datar",
    summary:
      "Sebelum menghafal rumus, kita susuri tepi tiap bangun dan jumlahkan sisinya, sampai pola keliling muncul sendiri.",
    durationMin: 12,
    tags: ["geometri", "bangun datar", "keliling", "pengukuran"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan kamu memasang pagar mengelilingi kebun, atau menempel pita di tepi foto. Panjang seluruh tepi itulah <strong>keliling</strong>. Sebelum kita hafalkan rumusnya, ayo telusuri dulu tepinya satu per satu.",
      },
      {
        type: "video",
        comp: "BentukGeometri",
        title: "Video: Mengenal Bangun Datar",
        caption: "Segitiga, persegi, jajar genjang, trapesium, dan lingkaran beserta sisi-sisinya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil sebuah persegi panjang. Jalankan jarimu menyusuri tepinya: panjang, lebar, panjang lagi, lebar lagi. Jumlahkan keempatnya. Lalu coba pada persegi yang keempat sisinya sama. Apa yang kamu sadari tentang cara menjumlahkannya?",
      },
      {
        type: "widget",
        widget: "PenjelajahBentuk",
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar menjumlah",
        html: "Berhitung menjawab 'berapa total tepinya'. Geometri menjawab 'mengapa bangun dengan sisi sama bisa diringkas dengan perkalian', sehingga kita tak perlu mengukur ulang setiap sisi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah persegi panjang memiliki panjang 9 cm dan lebar 5 cm. Berapa kelilingnya?",
        answer: 28,
        suffix: " cm",
        solution:
          "Susuri tepinya: 9 + 5 + 9 + 5 = 28, atau lebih ringkas 2 x (9 + 5) = <strong>28 cm</strong>.",
        hint: "Ada dua panjang dan dua lebar yang dijumlahkan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah segitiga memiliki sisi 6 cm, 8 cm, dan 10 cm. Berapa kelilingnya?",
        answer: 24,
        suffix: " cm",
        solution: "Jumlahkan ketiga sisinya: 6 + 8 + 10 = <strong>24 cm</strong>.",
        hint: "Keliling adalah jumlah semua sisi.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap bangun dengan cara menghitung kelilingnya.",
        pairs: [
          { left: "Persegi (sisi s)", right: "4 x s" },
          { left: "Persegi panjang", right: "2 x (panjang + lebar)" },
          { left: "Segitiga", right: "jumlah ketiga sisi" },
          { left: "Trapesium", right: "jumlah keempat sisi" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memagari kebun sayur",
        html: "Pak Tani ingin memagari kebun berbentuk persegi panjang berukuran panjang 12 m dan lebar 7 m. Daripada mengukur tiap sisi di lapangan, ia hitung 2 x (12 + 7) = 38 m. Sekarang ia tahu persis berapa meter kawat yang harus dibeli sebelum berangkat ke toko.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menyusuri tepi, baru kita simpulkan: keliling adalah jumlah semua sisi. Maka <strong>persegi = 4 x sisi</strong>, <strong>persegi panjang = 2 x (panjang + lebar)</strong>, dan untuk <strong>segitiga serta trapesium</strong> cukup jumlahkan semua sisinya.",
      },
      {
        type: "takeaways",
        items: [
          "Keliling adalah panjang seluruh tepi sebuah bangun datar.",
          "Untuk bangun bersisi lurus, keliling selalu jumlah semua sisinya.",
          "Sisi yang sama panjang bisa diringkas dengan perkalian, seperti 4 x sisi pada persegi.",
          "Memahami keliling membantu menghitung kebutuhan pagar, pita, atau bingkai secara tepat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Keliling persegi dengan sisi 7 cm adalah?",
            options: ["14 cm", "21 cm", "28 cm", "49 cm"],
            answer: 2,
            explain: "4 x 7 = 28 cm.",
          },
          {
            q: "Keliling persegi panjang dengan panjang 10 cm dan lebar 4 cm adalah?",
            options: ["14 cm", "28 cm", "40 cm", "24 cm"],
            answer: 1,
            explain: "2 x (10 + 4) = 28 cm.",
          },
          {
            q: "Segitiga dengan sisi 5, 5, dan 6 cm memiliki keliling?",
            options: ["11 cm", "16 cm", "30 cm", "15 cm"],
            answer: 1,
            explain: "5 + 5 + 6 = 16 cm.",
          },
          {
            q: "Cara paling tepat menghitung keliling adalah?",
            options: [
              "Mengalikan panjang dan lebar",
              "Menjumlahkan semua sisi",
              "Menghitung luas dulu",
              "Membagi dua sisi terpanjang",
            ],
            answer: 1,
            explain: "Keliling selalu jumlah seluruh tepi bangun.",
          },
          {
            q: "Trapesium dengan sisi 8, 5, 6, dan 5 cm memiliki keliling?",
            options: ["19 cm", "24 cm", "240 cm", "23 cm"],
            answer: 1,
            explain: "8 + 5 + 6 + 5 = 24 cm.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "luas-segitiga",
    levelId: "bangun-datar",
    order: 2,
    title: "Luas Segitiga",
    summary:
      "Tak perlu menghafal rumus dulu. Kita potong persegi panjang menjadi dua, dan rumus luas segitiga muncul dengan sendirinya.",
    durationMin: 13,
    tags: ["geometri", "bangun datar", "luas", "segitiga"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah segitiga terlihat lebih rumit daripada kotak. Tapi tahukah kamu, setiap segitiga sebenarnya 'sepotong' dari sebuah persegi panjang? Sebelum menulis rumus, ayo buktikan dengan menggunting dan menyusun.",
      },
      {
        type: "video",
        comp: "MenemukanLuas",
        title: "Video: Menemukan Luas",
        caption: "Bagaimana luas sebuah bangun bisa ditemukan dengan menyusun ulang potongannya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Gambar persegi panjang dengan alas 6 dan tinggi 4. Tarik satu diagonal. Persegi panjang itu terbelah jadi dua segitiga yang sama besar. Berapa luas seluruh persegi panjang? Lalu, berapa luas satu segitiga? Bandingkan keduanya.",
      },
      {
        type: "widget",
        widget: "PenemuLuas",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Luas Segitiga Selalu Separuh Persegi Panjang",
        unit: "luas (satuan persegi)",
        source: "ilustrasi edukatif",
        note: "Untuk alas dan tinggi yang sama, luas segitiga tepat setengah luas persegi panjangnya.",
        data: [
          { label: "Persegi panjang 6x4", value: 24, color: "#22d3ee" },
          { label: "Segitiga 6x4", value: 12, color: "#2dd4bf" },
          { label: "Persegi panjang 8x5", value: 40, color: "#38bdf8" },
          { label: "Segitiga 8x5", value: 20, color: "#0ea5e9" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar berhitung",
        html: "Berhitung menjawab 'berapa luasnya'. Geometri menjawab 'mengapa segitiga selalu separuh persegi panjang', sehingga satu ide bisa dipakai untuk segitiga apa pun.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah segitiga memiliki alas 10 cm dan tinggi 6 cm. Berapa luasnya?",
        answer: 30,
        suffix: " cm persegi",
        solution:
          "Luas persegi panjangnya 10 x 6 = 60, segitiga separuhnya: 60 / 2 = <strong>30 cm persegi</strong>.",
        hint: "Hitung dulu alas x tinggi, lalu bagi dua.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah segitiga memiliki alas 12 cm dan tinggi 5 cm. Berapa luasnya?",
        answer: 30,
        suffix: " cm persegi",
        solution:
          "1/2 x 12 x 5 = 6 x 5 = <strong>30 cm persegi</strong>.",
        hint: "Setengah dari alas dikali tinggi.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap perhitungan: benar atau keliru untuk luas segitiga.",
        buckets: ["Benar", "Keliru"],
        items: [
          { text: "Alas 4, tinggi 3, luas = 6", bucket: "Benar" },
          { text: "Alas 4, tinggi 3, luas = 12", bucket: "Keliru" },
          { text: "Alas 10, tinggi 4, luas = 20", bucket: "Benar" },
          { text: "Alas 10, tinggi 4, luas = 40", bucket: "Keliru" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Layar perahu segitiga",
        html: "Seorang penjahit membuat layar segitiga dengan alas 3 m dan tinggi 4 m. Ia tahu layar itu sama dengan separuh kain persegi panjang 3 x 4 = 12 m persegi, jadi luas layar 6 m persegi. Dengan menyusun ulang potongan kain, ia bahkan tak membuang sisa, karena potongan kedua membentuk layar untuk perahu lain.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menggunting dan membandingkan, baru kita simpulkan: karena segitiga selalu separuh persegi panjang dengan alas dan tinggi yang sama, maka <strong>Luas segitiga = 1/2 x alas x tinggi</strong>.",
      },
      {
        type: "takeaways",
        items: [
          "Setiap segitiga adalah separuh dari sebuah persegi panjang beralas dan bertinggi sama.",
          "Luas segitiga = 1/2 x alas x tinggi.",
          "Tinggi diukur tegak lurus terhadap alas, bukan panjang sisi miring.",
          "Rumus ditemukan dari menyusun, bukan dihafal lebih dulu.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Luas segitiga dengan alas 8 cm dan tinggi 5 cm adalah?",
            options: ["13 cm persegi", "20 cm persegi", "40 cm persegi", "80 cm persegi"],
            answer: 1,
            explain: "1/2 x 8 x 5 = 20 cm persegi.",
          },
          {
            q: "Sebuah segitiga adalah separuh dari bangun apa?",
            options: ["Lingkaran", "Persegi panjang", "Layang-layang", "Bola"],
            answer: 1,
            explain: "Diagonal persegi panjang membaginya jadi dua segitiga sama besar.",
          },
          {
            q: "Pada rumus luas segitiga, tinggi diukur?",
            options: [
              "Sepanjang sisi miring",
              "Tegak lurus terhadap alas",
              "Dari sudut ke sudut",
              "Sama dengan alas",
            ],
            answer: 1,
            explain: "Tinggi selalu tegak lurus terhadap alas yang dipilih.",
          },
          {
            q: "Luas segitiga dengan alas 6 cm dan tinggi 10 cm adalah?",
            options: ["16 cm persegi", "30 cm persegi", "60 cm persegi", "32 cm persegi"],
            answer: 1,
            explain: "1/2 x 6 x 10 = 30 cm persegi.",
          },
          {
            q: "Jika alas dan tinggi sama, luas segitiga dibanding persegi panjangnya adalah?",
            options: ["Sama besar", "Dua kali lipat", "Setengahnya", "Sepertiganya"],
            answer: 2,
            explain: "Segitiga selalu setengah luas persegi panjangnya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "luas-jajar-genjang-trapesium",
    levelId: "bangun-datar",
    order: 3,
    title: "Luas Jajar Genjang dan Trapesium",
    summary:
      "Dengan menggeser dan menyusun potongan, jajar genjang berubah jadi persegi panjang dan trapesium jadi jajar genjang. Rumusnya menyusul.",
    durationMin: 14,
    tags: ["geometri", "bangun datar", "luas", "jajar genjang", "trapesium"],
    blocks: [
      {
        type: "paragraph",
        html: "Jajar genjang dan trapesium terlihat miring dan asing. Tapi keduanya bisa kita 'rapikan' menjadi bangun yang sudah kita kuasai. Sebelum menulis rumus, ayo geser dan susun potongannya.",
      },
      {
        type: "video",
        comp: "MenemukanLuas",
        title: "Video: Menemukan Luas",
        caption: "Menggeser potongan agar bangun miring berubah jadi bangun yang sudah dikenal.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Gunting segitiga di ujung sebuah jajar genjang, lalu pindahkan ke ujung lainnya. Bentuknya berubah jadi persegi panjang. Apakah luasnya berubah? Lalu coba tempelkan dua trapesium yang sama secara terbalik. Bangun apa yang terbentuk?",
      },
      {
        type: "widget",
        widget: "PenemuLuas",
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar berhitung",
        html: "Berhitung menjawab 'berapa luasnya'. Geometri menjawab 'mengapa bangun miring punya luas sama dengan persegi panjang', dengan menjaga luas tetap saat potongan digeser.",
      },
      {
        type: "calcExercise",
        prompt:
          "Jajar genjang memiliki alas 9 cm dan tinggi 4 cm. Berapa luasnya?",
        answer: 36,
        suffix: " cm persegi",
        solution:
          "Setelah digeser jadi persegi panjang, luasnya alas x tinggi = 9 x 4 = <strong>36 cm persegi</strong>.",
        hint: "Sama seperti persegi panjang: alas dikali tinggi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Trapesium memiliki dua sisi sejajar 6 cm dan 10 cm, dengan tinggi 4 cm. Berapa luasnya?",
        answer: 32,
        suffix: " cm persegi",
        solution:
          "1/2 x (6 + 10) x 4 = 1/2 x 16 x 4 = 8 x 4 = <strong>32 cm persegi</strong>.",
        hint: "Jumlahkan dua sisi sejajar, kali tinggi, lalu bagi dua.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap bangun dengan bangun hasil susunannya dan rumus luasnya.",
        pairs: [
          { left: "Jajar genjang digeser", right: "menjadi persegi panjang: alas x tinggi" },
          { left: "Dua trapesium disatukan", right: "menjadi jajar genjang" },
          { left: "Luas jajar genjang", right: "alas x tinggi" },
          { left: "Luas trapesium", right: "1/2 x (jumlah sisi sejajar) x tinggi" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Petak sawah berbentuk trapesium",
        html: "Sebidang sawah berbentuk trapesium memiliki sisi sejajar 20 m dan 30 m dengan tinggi 10 m. Petani menghitung luasnya 1/2 x (20 + 30) x 10 = 250 m persegi untuk memperkirakan kebutuhan benih. Ia tak perlu memotong sawah, cukup membayangkan dua petak yang sama disatukan menjadi jajar genjang.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menggeser dan menyatukan, baru kita simpulkan: <strong>Luas jajar genjang = alas x tinggi</strong> (karena ia persegi panjang yang digeser), dan <strong>Luas trapesium = 1/2 x (jumlah sisi sejajar) x tinggi</strong> (karena dua trapesium membentuk satu jajar genjang).",
      },
      {
        type: "takeaways",
        items: [
          "Menggeser potongan tidak mengubah luas sebuah bangun.",
          "Jajar genjang sama dengan persegi panjang yang digeser, jadi luasnya alas x tinggi.",
          "Dua trapesium yang sama membentuk satu jajar genjang, sehingga luas trapesium separuhnya.",
          "Luas trapesium = 1/2 x (jumlah sisi sejajar) x tinggi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Luas jajar genjang dengan alas 8 cm dan tinggi 5 cm adalah?",
            options: ["13 cm persegi", "20 cm persegi", "40 cm persegi", "26 cm persegi"],
            answer: 2,
            explain: "Alas x tinggi = 8 x 5 = 40 cm persegi.",
          },
          {
            q: "Jajar genjang yang digeser potongannya berubah menjadi?",
            options: ["Segitiga", "Persegi panjang", "Lingkaran", "Trapesium"],
            answer: 1,
            explain: "Memindahkan segitiga ujungnya membentuk persegi panjang dengan luas sama.",
          },
          {
            q: "Luas trapesium dengan sisi sejajar 4 cm dan 8 cm serta tinggi 5 cm adalah?",
            options: ["30 cm persegi", "60 cm persegi", "20 cm persegi", "40 cm persegi"],
            answer: 0,
            explain: "1/2 x (4 + 8) x 5 = 1/2 x 12 x 5 = 30 cm persegi.",
          },
          {
            q: "Rumus luas trapesium adalah?",
            options: [
              "alas x tinggi",
              "1/2 x alas x tinggi",
              "1/2 x (jumlah sisi sejajar) x tinggi",
              "jumlah semua sisi",
            ],
            answer: 2,
            explain: "Karena dua trapesium membentuk jajar genjang, luasnya separuh hasil kali itu.",
          },
          {
            q: "Mengapa menggeser potongan tidak mengubah luas?",
            options: [
              "Karena bentuknya tetap sama",
              "Karena tidak ada bagian yang ditambah atau dibuang",
              "Karena kelilingnya berubah",
              "Karena tingginya bertambah",
            ],
            answer: 1,
            explain: "Luas hanya bergantung pada banyaknya bidang yang ditutup, bukan posisinya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "luas-dan-keliling-lingkaran",
    levelId: "bangun-datar",
    order: 4,
    title: "Luas dan Keliling Lingkaran",
    summary:
      "Sebelum memakai pi, kita ukur keliling beberapa benda bulat dan bagi dengan diameternya. Selalu muncul angka ajaib yang sama.",
    durationMin: 14,
    tags: ["geometri", "bangun datar", "lingkaran", "pi"],
    blocks: [
      {
        type: "paragraph",
        html: "Lingkaran tidak punya sisi lurus untuk dijumlahkan. Lalu bagaimana mengukur kelilingnya? Sebelum bertemu lambang <strong>pi</strong>, ayo lakukan percobaan: ukur benda-benda bulat dan temukan polanya.",
      },
      {
        type: "video",
        comp: "LahirnyaPi",
        title: "Video: Lahirnya Pi",
        caption: "Bagaimana perbandingan keliling terhadap diameter selalu menghasilkan angka yang sama.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil tutup gelas, piring, dan koin. Lilitkan benang mengelilingi tepinya untuk mengukur keliling, lalu ukur garis tengah (diameter) tiap benda. Bagi keliling dengan diameternya. Berapapun ukuran bendanya, hasilnya selalu mendekati angka yang sama. Berapa?",
      },
      {
        type: "widget",
        widget: "SimulatorPi",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Keliling dibagi Diameter Selalu Mendekati 3,14",
        unit: "keliling / diameter",
        source: "pengukuran ilustratif benda bulat",
        note: "Berapapun besar lingkarannya, keliling dibagi diameter selalu menghasilkan pi, kira-kira 3,14.",
        data: [
          { label: "Koin (d=2)", value: 3.14, color: "#22d3ee" },
          { label: "Gelas (d=7)", value: 3.14, color: "#2dd4bf" },
          { label: "Piring (d=20)", value: 3.14, color: "#38bdf8" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar mengukur",
        html: "Berhitung menjawab 'berapa kelilingnya'. Geometri menjawab 'mengapa perbandingan itu selalu tetap untuk semua lingkaran', dan menamainya pi, sebuah konstanta yang sama di mana pun.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah lingkaran memiliki diameter 10 cm. Berapa kelilingnya? (gunakan pi = 3,14)",
        answer: 31.4,
        tolerance: 0.1,
        suffix: " cm",
        solution:
          "Keliling = pi x diameter = 3,14 x 10 = <strong>31,4 cm</strong>.",
        hint: "Keliling lingkaran adalah pi dikali diameter.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah lingkaran memiliki jari-jari 5 cm. Berapa luasnya? (gunakan pi = 3,14)",
        answer: 78.5,
        tolerance: 0.5,
        suffix: " cm persegi",
        solution:
          "Luas = pi x jari-jari x jari-jari = 3,14 x 5 x 5 = 3,14 x 25 = <strong>78,5 cm persegi</strong>.",
        hint: "Luas lingkaran adalah pi dikali kuadrat jari-jari.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap besaran: untuk menghitung KELILING atau LUAS lingkaran.",
        buckets: ["Keliling", "Luas"],
        items: [
          { text: "pi x diameter", bucket: "Keliling" },
          { text: "pi x jari-jari x jari-jari", bucket: "Luas" },
          { text: "2 x pi x jari-jari", bucket: "Keliling" },
          { text: "pi x r kuadrat", bucket: "Luas" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kolam ikan melingkar",
        html: "Sebuah taman memiliki kolam berbentuk lingkaran berjari-jari 3 m. Untuk memasang pagar di tepinya, dihitung keliling = 2 x 3,14 x 3 = 18,84 m. Untuk menutup dasarnya dengan terpal, dihitung luas = 3,14 x 3 x 3 = 28,26 m persegi. Satu konstanta pi melayani dua kebutuhan sekaligus.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengukur dan membagi, baru kita simpulkan: perbandingan keliling terhadap diameter itu adalah <strong>pi (kira-kira 3,14)</strong>. Maka <strong>Keliling = pi x diameter = 2 x pi x jari-jari</strong>, dan dari penyusunan irisan lingkaran, <strong>Luas = pi x jari-jari kuadrat</strong>.",
      },
      {
        type: "takeaways",
        items: [
          "Untuk lingkaran apa pun, keliling dibagi diameter selalu sama, yaitu pi (kira-kira 3,14).",
          "Keliling lingkaran = pi x diameter, atau 2 x pi x jari-jari.",
          "Luas lingkaran = pi x jari-jari x jari-jari.",
          "Pi ditemukan lewat pengukuran nyata, bukan sekadar angka yang dihafal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Nilai pi kira-kira sama dengan?",
            options: ["2,14", "3,14", "3,41", "4,13"],
            answer: 1,
            explain: "Pi mendekati 3,14, perbandingan keliling terhadap diameter.",
          },
          {
            q: "Keliling lingkaran dengan diameter 14 cm (pi = 3,14) kira-kira?",
            options: ["43,96 cm", "21,98 cm", "61,5 cm", "153,86 cm"],
            answer: 0,
            explain: "Keliling = 3,14 x 14 = 43,96 cm.",
          },
          {
            q: "Rumus luas lingkaran adalah?",
            options: [
              "pi x diameter",
              "2 x pi x jari-jari",
              "pi x jari-jari x jari-jari",
              "1/2 x alas x tinggi",
            ],
            answer: 2,
            explain: "Luas lingkaran = pi x kuadrat jari-jari.",
          },
          {
            q: "Luas lingkaran berjari-jari 10 cm (pi = 3,14) adalah?",
            options: ["31,4 cm persegi", "62,8 cm persegi", "314 cm persegi", "100 cm persegi"],
            answer: 2,
            explain: "3,14 x 10 x 10 = 314 cm persegi.",
          },
          {
            q: "Mengapa pi selalu sama untuk semua lingkaran?",
            options: [
              "Karena semua lingkaran berukuran sama",
              "Karena keliling dan diameter membesar dengan perbandingan tetap",
              "Karena pi adalah angka bulat",
              "Karena diukur dengan benang yang sama",
            ],
            answer: 1,
            explain: "Saat lingkaran membesar, keliling dan diameter tumbuh seiring, sehingga perbandingannya tetap.",
          },
        ],
      },
    ],
  },
];
