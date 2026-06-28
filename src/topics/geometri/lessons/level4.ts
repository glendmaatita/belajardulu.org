import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "volume-kubus-balok",
    levelId: "bangun-ruang",
    order: 1,
    title: "Volume Kubus dan Balok",
    summary:
      "Sebelum menghafal rumus volume, kita tumpuk dulu kubus-kubus satuan sampai polanya muncul sendiri.",
    durationMin: 13,
    tags: ["geometri", "bangun-ruang", "volume", "kubus", "balok"],
    blocks: [
      {
        type: "paragraph",
        html: "Lihat sebuah kardus, akuarium, atau tumpukan dadu. Berapa banyak ruang yang ditempatinya? Itulah <strong>volume</strong>. Sebelum kita ambil rumus, ayo isi dulu ruang itu dengan kotak-kotak kecil berukuran sama, yaitu <strong>kubus satuan</strong>, lalu kita hitung berapa banyak yang muat.",
      },
      {
        type: "video",
        comp: "VolumeVideo",
        title: "Video: Mengisi Ruang dengan Kubus Satuan",
        caption: "Volume adalah banyaknya kubus satuan yang memenuhi sebuah bangun ruang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dasar sebuah kotak ditutup penuh kubus satuan: satu lapis berisi panjang kali lebar kubus. Lalu tumpuk lapis demi lapis sampai setinggi kotak. Coba beberapa ukuran, lalu hitung total kubusnya. Apa yang kamu temukan tentang hubungan banyak kubus dengan panjang, lebar, dan tinggi?",
      },
      {
        type: "widget",
        widget: "SimulatorVolume",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Banyak Kubus Satuan untuk Beberapa Ukuran Balok",
        unit: "kubus satuan",
        source: "perhitungan langsung dengan menumpuk kubus",
        note: "Banyak kubus selalu sama dengan panjang kali lebar kali tinggi. Pola ini muncul sendiri, bukan dihafal.",
        data: [
          { label: "2x2x2", value: 8, color: "#60a5fa" },
          { label: "3x2x2", value: 12, color: "#3b82f6" },
          { label: "4x3x2", value: 24, color: "#6366f1" },
          { label: "5x4x3", value: 60, color: "#818cf8" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar berhitung",
        html: "Berhitung menjawab 'berapa kubus yang muat'. Geometri menjawab 'mengapa banyak kubus selalu panjang kali lebar kali tinggi', lalu memakai pola itu untuk bangun yang jauh lebih besar tanpa harus menghitung satu per satu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah balok berukuran panjang 8 cm, lebar 5 cm, dan tinggi 4 cm. Berapa volumenya?",
        answer: 160,
        suffix: " cm3",
        solution:
          "Satu lapis dasar memuat 8 x 5 = 40 kubus satuan, lalu ditumpuk 4 lapis: 40 x 4 = <strong>160 cm3</strong>. Inilah panjang x lebar x tinggi.",
        hint: "Hitung dulu satu lapis (panjang x lebar), lalu kalikan banyak lapis (tinggi).",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kubus memiliki rusuk 6 cm. Berapa volumenya?",
        answer: 216,
        suffix: " cm3",
        solution:
          "Pada kubus semua rusuk sama, jadi volume = 6 x 6 x 6 = <strong>216 cm3</strong>.",
        hint: "Volume kubus = rusuk x rusuk x rusuk.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap benda menjadi kubus atau balok menurut bentuknya.",
        buckets: ["Kubus", "Balok"],
        items: [
          { text: "Dadu", bucket: "Kubus" },
          { text: "Kotak korek api", bucket: "Balok" },
          { text: "Rubik 3x3", bucket: "Kubus" },
          { text: "Batu bata", bucket: "Balok" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengisi akuarium",
        html: "Seorang penggemar ikan punya akuarium panjang 50 cm, lebar 30 cm, tinggi 40 cm. Ia ingin tahu berapa liter air yang muat. Dengan membayangkan ruang itu diisi kubus satuan 1 cm, volumenya 50 x 30 x 40 = 60.000 cm3. Karena 1.000 cm3 sama dengan 1 liter, akuariumnya memuat 60 liter. Tanpa rumus pun ia bisa menalar lewat tumpukan kubus.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menumpuk kubus, baru kita simpulkan: <strong>Volume balok = panjang x lebar x tinggi</strong>. Karena kubus punya rusuk yang sama panjang (s), maka <strong>Volume kubus = s x s x s = s pangkat 3</strong>. Rumus ini hanyalah cara ringkas menghitung banyak kubus satuan yang memenuhi ruang.",
      },
      {
        type: "takeaways",
        items: [
          "Volume adalah banyaknya kubus satuan yang memenuhi sebuah bangun ruang.",
          "Volume balok = panjang x lebar x tinggi, yaitu satu lapis dasar dikalikan banyak lapis.",
          "Volume kubus = s pangkat 3 karena semua rusuknya sama panjang.",
          "1.000 cm3 sama dengan 1 liter, berguna untuk wadah air sehari-hari.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Volume sebuah bangun ruang menyatakan?",
            options: [
              "Jumlah rusuknya",
              "Banyak kubus satuan yang memenuhinya",
              "Panjang sisi terpanjang",
              "Luas alasnya saja",
            ],
            answer: 1,
            explain: "Volume adalah banyaknya kubus satuan yang muat di dalam ruang.",
          },
          {
            q: "Rumus volume balok adalah?",
            options: ["p + l + t", "p x l x t", "2(p + l + t)", "s pangkat 3"],
            answer: 1,
            explain: "Volume balok = panjang x lebar x tinggi.",
          },
          {
            q: "Kubus dengan rusuk 4 cm memiliki volume?",
            options: ["12 cm3", "16 cm3", "64 cm3", "48 cm3"],
            answer: 2,
            explain: "4 x 4 x 4 = 64 cm3.",
          },
          {
            q: "Balok 10 x 3 x 2 memiliki volume?",
            options: ["15 cm3", "60 cm3", "30 cm3", "120 cm3"],
            answer: 1,
            explain: "10 x 3 x 2 = 60 cm3.",
          },
          {
            q: "Volume 2.000 cm3 sama dengan berapa liter?",
            options: ["0,2 liter", "2 liter", "20 liter", "200 liter"],
            answer: 1,
            explain: "1.000 cm3 = 1 liter, jadi 2.000 cm3 = 2 liter.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "volume-prisma-tabung",
    levelId: "bangun-ruang",
    order: 2,
    title: "Volume Prisma dan Tabung",
    summary:
      "Daripada langsung memakai rumus, kita tumpuk dulu lapisan alas sampai terlihat bahwa volume hanyalah luas alas dikali tinggi.",
    durationMin: 13,
    tags: ["geometri", "bangun-ruang", "volume", "prisma", "tabung"],
    blocks: [
      {
        type: "paragraph",
        html: "Tumpukan koin, kaleng susu, atau cokelat batang berbentuk segitiga panjang. Bentuk-bentuk ini punya satu ciri sama: alasnya tetap dari bawah sampai atas. Sebelum kita pakai rumus, ayo amati apa yang terjadi kalau kita tumpuk lapisan alas itu setinggi bangunnya.",
      },
      {
        type: "video",
        comp: "VolumeVideo",
        title: "Video: Menumpuk Lapisan Alas",
        caption: "Prisma dan tabung terbentuk dari alas yang sama ditumpuk setinggi bangun.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan satu lapis tipis berbentuk alas, lalu tumpuk lapis demi lapis seperti tumpukan koin sampai setinggi bangun. Setiap lapis punya isi sebesar luas alas. Kalau ada banyak lapis setinggi t, berapa total isinya? Coba beberapa tinggi, lalu lihat polanya.",
      },
      {
        type: "widget",
        widget: "SimulatorVolume",
      },
      {
        type: "chart",
        variant: "line",
        title: "Volume Tabung Berjari-jari 7 cm untuk Beberapa Tinggi",
        unit: "cm3",
        source: "perhitungan dengan luas alas 154 cm2 dikali tinggi",
        note: "Luas alas (pi x r x r = 154 cm2) tetap, jadi volume naik lurus mengikuti tinggi. Ini menunjukkan volume = luas alas x tinggi.",
        data: [
          { label: "t=5", value: 770, color: "#3b82f6" },
          { label: "t=10", value: 1540, color: "#6366f1" },
          { label: "t=15", value: 2310, color: "#818cf8" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar berhitung",
        html: "Berhitung menjawab 'berapa cm3 isinya'. Geometri menyatukan banyak bangun berbeda dengan satu gagasan: selama alas tetap dari bawah ke atas, volume selalu luas alas dikali tinggi, entah alasnya segitiga, segi enam, atau lingkaran.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah prisma segitiga memiliki alas segitiga dengan panjang alas 6 cm dan tinggi segitiga 4 cm. Tinggi prisma 10 cm. Berapa volumenya?",
        answer: 120,
        suffix: " cm3",
        solution:
          "Luas alas segitiga = 1/2 x 6 x 4 = 12 cm2. Lalu ditumpuk setinggi 10 cm: 12 x 10 = <strong>120 cm3</strong>.",
        hint: "Cari dulu luas alas (segitiga), lalu kalikan tinggi prisma.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah tabung memiliki jari-jari 7 cm dan tinggi 10 cm. Gunakan pi = 22/7. Berapa volumenya?",
        answer: 1540,
        suffix: " cm3",
        solution:
          "Luas alas lingkaran = pi x r x r = 22/7 x 7 x 7 = 154 cm2. Lalu ditumpuk setinggi 10 cm: 154 x 10 = <strong>1540 cm3</strong>.",
        hint: "Volume tabung = luas lingkaran alas x tinggi.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap bangun dengan cara menghitung luas alasnya.",
        pairs: [
          { left: "Tabung", right: "pi x r x r" },
          { left: "Prisma segitiga", right: "1/2 x alas x tinggi segitiga" },
          { left: "Prisma persegi panjang (balok)", right: "panjang x lebar" },
          { left: "Prisma persegi", right: "sisi x sisi" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kaleng cat",
        html: "Sebuah pabrik membuat kaleng cat berbentuk tabung berjari-jari 10 cm dan tinggi 20 cm. Untuk tahu berapa cat yang muat, mereka hitung luas alas lingkaran 3,14 x 10 x 10 = 314 cm2, lalu kalikan tinggi: 314 x 20 = 6.280 cm3 atau sekitar 6,28 liter. Dengan memandang tabung sebagai tumpukan lapis lingkaran, perhitungan jadi sederhana.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menumpuk lapisan alas, baru kita simpulkan: untuk semua prisma dan tabung, <strong>Volume = luas alas x tinggi</strong>. Khusus tabung, karena alasnya lingkaran, <strong>Volume tabung = pi x r x r x t</strong>. Rumus berbeda hanya karena luas alasnya berbeda, gagasannya satu.",
      },
      {
        type: "takeaways",
        items: [
          "Prisma dan tabung punya alas yang tetap dari bawah sampai atas.",
          "Volume prisma maupun tabung = luas alas x tinggi.",
          "Volume tabung = pi x r x r x t karena alasnya lingkaran.",
          "Satu gagasan menyatukan banyak bangun: tumpukan lapisan alas setinggi bangun.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Volume prisma dihitung dengan?",
            options: [
              "Keliling alas x tinggi",
              "Luas alas x tinggi",
              "Luas alas + tinggi",
              "1/3 x luas alas x tinggi",
            ],
            answer: 1,
            explain: "Semua prisma: volume = luas alas x tinggi.",
          },
          {
            q: "Rumus volume tabung adalah?",
            options: ["pi x r x t", "pi x r x r x t", "2 x pi x r x t", "pi x r x r"],
            answer: 1,
            explain: "Luas alas lingkaran (pi x r x r) dikali tinggi.",
          },
          {
            q: "Prisma dengan luas alas 25 cm2 dan tinggi 8 cm memiliki volume?",
            options: ["33 cm3", "200 cm3", "100 cm3", "50 cm3"],
            answer: 1,
            explain: "25 x 8 = 200 cm3.",
          },
          {
            q: "Tabung berjari-jari 7 cm dan tinggi 5 cm (pi = 22/7) memiliki volume?",
            options: ["770 cm3", "154 cm3", "385 cm3", "1540 cm3"],
            answer: 0,
            explain: "Luas alas 22/7 x 7 x 7 = 154, lalu 154 x 5 = 770 cm3.",
          },
          {
            q: "Mengapa rumus volume prisma dan tabung mirip?",
            options: [
              "Karena keduanya selalu berukuran sama",
              "Karena alasnya tetap dari bawah ke atas, jadi cukup luas alas x tinggi",
              "Karena keduanya berbentuk lingkaran",
              "Karena keduanya tidak punya tinggi",
            ],
            answer: 1,
            explain:
              "Selama alas tetap sepanjang bangun, volume = luas alas x tinggi, apa pun bentuk alasnya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "volume-limas-kerucut",
    levelId: "bangun-ruang",
    order: 3,
    title: "Volume Limas dan Kerucut",
    summary:
      "Sebelum percaya pada angka sepertiga, kita bandingkan dulu bangun runcing dengan prisma yang alas dan tingginya sama.",
    durationMin: 13,
    tags: ["geometri", "bangun-ruang", "volume", "limas", "kerucut"],
    blocks: [
      {
        type: "paragraph",
        html: "Piramida, tumpukan pasir berbentuk kerucut, atau cone es krim. Bangun runcing ini punya alas lebar yang mengecil sampai satu titik puncak. Sebelum kita terima rumusnya, ayo bandingkan dulu isinya dengan prisma atau tabung yang alas dan tingginya persis sama.",
      },
      {
        type: "video",
        comp: "VolumeVideo",
        title: "Video: Menuang Limas ke dalam Prisma",
        caption: "Bangun runcing ternyata muat tepat tiga kali ke dalam prisma seukurannya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan sebuah limas berongga dengan alas dan tinggi yang sama persis dengan sebuah balok. Isi limas dengan pasir, lalu tuang ke dalam balok. Berapa kali tuang sampai balok penuh? Lakukan juga untuk kerucut dan tabung seukurannya. Hitungannya selalu sama, dan angka itulah kuncinya.",
      },
      {
        type: "widget",
        widget: "SimulatorVolume",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Balok dan Limas dengan Alas serta Tinggi yang Sama",
        unit: "cm3",
        source: "alas 36 cm2 dan tinggi 10 cm untuk kedua bangun",
        note: "Limas hanya berisi sepertiga dari balok seukurannya: 360 berbanding 120. Tiga limas penuh sama dengan satu balok.",
        data: [
          { label: "Balok", value: 360, color: "#6366f1" },
          { label: "Limas (alas & tinggi sama)", value: 120, color: "#a78bfa" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar berhitung",
        html: "Berhitung menjawab 'berapa isinya'. Geometri menjawab 'mengapa bangun runcing selalu sepertiga dari prisma seukurannya', sebuah pola yang berlaku untuk limas alas apa pun maupun kerucut.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah limas memiliki alas persegi dengan sisi 6 cm dan tinggi limas 10 cm. Berapa volumenya?",
        answer: 120,
        suffix: " cm3",
        solution:
          "Luas alas = 6 x 6 = 36 cm2. Karena limas hanya sepertiga prisma seukurannya: 1/3 x 36 x 10 = <strong>120 cm3</strong>.",
        hint: "Volume limas = 1/3 x luas alas x tinggi.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kerucut memiliki jari-jari 7 cm dan tinggi 12 cm. Gunakan pi = 22/7. Berapa volumenya?",
        answer: 616,
        suffix: " cm3",
        solution:
          "Luas alas lingkaran = 22/7 x 7 x 7 = 154 cm2. Kerucut sepertiga tabung seukurannya: 1/3 x 154 x 12 = <strong>616 cm3</strong>.",
        hint: "Volume kerucut = 1/3 x pi x r x r x t.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap bangun runcing menjadi limas atau kerucut menurut bentuk alasnya.",
        buckets: ["Limas", "Kerucut"],
        items: [
          { text: "Alas lingkaran (cone es krim)", bucket: "Kerucut" },
          { text: "Alas persegi (piramida)", bucket: "Limas" },
          { text: "Alas segitiga", bucket: "Limas" },
          { text: "Alas lingkaran (tumpukan pasir)", bucket: "Kerucut" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Topi ulang tahun",
        html: "Sebuah toko membuat topi ulang tahun berbentuk kerucut dengan jari-jari 5 cm dan tinggi 12 cm untuk diisi permen. Mereka hitung luas alas 3,14 x 5 x 5 = 78,5 cm2, lalu memakai aturan sepertiga: 1/3 x 78,5 x 12 = 314 cm3. Tanpa membongkar topi, mereka tahu daya tampungnya berkat hubungan limas dan tabung seukurannya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menuang dan membandingkan, baru kita simpulkan: bangun runcing selalu sepertiga dari prisma atau tabung seukurannya. Maka <strong>Volume limas = 1/3 x luas alas x tinggi</strong> dan <strong>Volume kerucut = 1/3 x pi x r x r x t</strong>. Angka 1/3 bukan hafalan, melainkan hasil pengamatan.",
      },
      {
        type: "takeaways",
        items: [
          "Limas dan kerucut adalah bangun runcing dengan satu titik puncak.",
          "Bangun runcing berisi sepertiga dari prisma atau tabung yang alas dan tingginya sama.",
          "Volume limas = 1/3 x luas alas x tinggi.",
          "Volume kerucut = 1/3 x pi x r x r x t.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Volume limas dibanding prisma yang alas dan tingginya sama adalah?",
            options: ["Sama besar", "Dua kali", "Sepertiga", "Setengah"],
            answer: 2,
            explain: "Tiga limas penuh sama dengan satu prisma seukurannya, jadi limas sepertiganya.",
          },
          {
            q: "Rumus volume kerucut adalah?",
            options: [
              "pi x r x r x t",
              "1/3 x pi x r x r x t",
              "2 x pi x r x t",
              "1/3 x pi x r x t",
            ],
            answer: 1,
            explain: "Kerucut sepertiga tabung seukurannya: 1/3 x pi x r x r x t.",
          },
          {
            q: "Limas dengan luas alas 30 cm2 dan tinggi 9 cm memiliki volume?",
            options: ["270 cm3", "90 cm3", "39 cm3", "810 cm3"],
            answer: 1,
            explain: "1/3 x 30 x 9 = 90 cm3.",
          },
          {
            q: "Kerucut berjari-jari 7 cm dan tinggi 6 cm (pi = 22/7) memiliki volume?",
            options: ["308 cm3", "924 cm3", "154 cm3", "462 cm3"],
            answer: 0,
            explain: "Luas alas 154 cm2, lalu 1/3 x 154 x 6 = 308 cm3.",
          },
          {
            q: "Dari mana datangnya angka 1/3 pada rumus limas dan kerucut?",
            options: [
              "Dari banyaknya sisi alas",
              "Dari pengamatan bahwa bangun runcing muat tiga kali ke dalam prisma seukurannya",
              "Dari nilai pi",
              "Dari tinggi bangun",
            ],
            answer: 1,
            explain:
              "Tiga limas atau kerucut tepat mengisi prisma atau tabung seukurannya, sehingga isinya sepertiga.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "luas-permukaan-bangun-ruang",
    levelId: "bangun-ruang",
    order: 4,
    title: "Luas Permukaan Bangun Ruang",
    summary:
      "Sebelum menghafal rumus permukaan, kita bongkar dulu bangun jadi jaring-jaring dan jumlahkan luas tiap sisinya.",
    durationMin: 13,
    tags: ["geometri", "bangun-ruang", "luas-permukaan", "jaring-jaring"],
    blocks: [
      {
        type: "paragraph",
        html: "Berapa kertas kado untuk membungkus kotak, atau berapa cat untuk mengecat seluruh kaleng? Itu bukan soal volume, melainkan <strong>luas permukaan</strong>, yaitu total luas semua sisi luar. Sebelum mengambil rumus, ayo bongkar dulu bangun menjadi <strong>jaring-jaring</strong> yang datar.",
      },
      {
        type: "video",
        comp: "MenemukanLuas",
        title: "Video: Membuka Bangun Menjadi Jaring-jaring",
        caption: "Luas permukaan adalah jumlah luas semua sisi setelah bangun dibuka mendatar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil kotak pasta gigi, gunting di rusuk-rusuknya, lalu bentangkan mendatar. Kamu dapat enam persegi panjang. Hitung luas tiap potong lalu jumlahkan. Coba juga pada kubus: berapa sisi yang muncul, dan apakah semuanya sama besar? Polanya akan terlihat sendiri.",
      },
      {
        type: "widget",
        widget: "PenemuLuas",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Luas Permukaan Kubus untuk Beberapa Panjang Rusuk",
        unit: "cm2",
        source: "perhitungan dari enam sisi persegi yang sama",
        note: "Kubus selalu punya 6 sisi persegi, jadi luas permukaan = 6 x rusuk x rusuk. Angka-angka ini dihitung nyata, bukan dikarang.",
        data: [
          { label: "rusuk 1", value: 6, color: "#3b82f6" },
          { label: "rusuk 2", value: 24, color: "#6366f1" },
          { label: "rusuk 3", value: 54, color: "#818cf8" },
          { label: "rusuk 4", value: 96, color: "#a78bfa" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Geometri, bukan sekadar berhitung",
        html: "Berhitung menjawab 'berapa cm2 permukaannya'. Geometri menjawab 'mengapa kita bisa menjumlahkan sisi-sisi datar untuk mengukur kulit bangun tiga dimensi', dan itu berlaku dari kotak sederhana sampai tabung.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kubus memiliki rusuk 5 cm. Berapa luas permukaannya?",
        answer: 150,
        suffix: " cm2",
        solution:
          "Kubus punya 6 sisi persegi yang sama, masing-masing 5 x 5 = 25 cm2. Total: 6 x 25 = <strong>150 cm2</strong>.",
        hint: "Luas permukaan kubus = 6 x rusuk x rusuk.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah balok berukuran panjang 5 cm, lebar 4 cm, dan tinggi 3 cm. Berapa luas permukaannya?",
        answer: 94,
        suffix: " cm2",
        solution:
          "Balok punya 3 pasang sisi: (5x4) + (5x3) + (4x3) = 20 + 15 + 12 = 47 cm2 untuk separuh, lalu kali 2: 2 x 47 = <strong>94 cm2</strong>.",
        hint: "Luas permukaan balok = 2 x (pl + pt + lt).",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap bangun dengan rumus luas permukaannya.",
        pairs: [
          { left: "Kubus", right: "6 x s x s" },
          { left: "Balok", right: "2 x (pl + pt + lt)" },
          { left: "Bola", right: "4 x pi x r x r" },
          { left: "Tabung", right: "2 x pi x r x (r + t)" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membungkus kado",
        html: "Seseorang ingin membungkus kotak hadiah berukuran 20 cm x 15 cm x 10 cm. Daripada menebak, ia hitung luas permukaannya: 2 x (20x15 + 20x10 + 15x10) = 2 x (300 + 200 + 150) = 1.300 cm2. Dengan menambah sedikit untuk lipatan, ia tahu persis berapa kertas kado yang perlu dibeli, tanpa mubazir.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah membongkar jaring-jaring dan menjumlahkan sisinya, baru kita simpulkan: <strong>Luas permukaan kubus = 6 x s x s</strong>, <strong>balok = 2 x (pl + pt + lt)</strong>, <strong>tabung = 2 x pi x r x (r + t)</strong>, dan <strong>bola = 4 x pi x r x r</strong>. Semua rumus ini hanyalah jumlah luas seluruh sisi luar bangun.",
      },
      {
        type: "takeaways",
        items: [
          "Luas permukaan adalah jumlah luas semua sisi luar sebuah bangun ruang.",
          "Jaring-jaring membantu kita melihat dan menjumlahkan tiap sisi datar.",
          "Luas permukaan kubus = 6 x s x s, balok = 2 x (pl + pt + lt).",
          "Luas permukaan berguna untuk membungkus, mengecat, atau melapisi benda.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Luas permukaan sebuah bangun ruang adalah?",
            options: [
              "Ruang yang ditempatinya",
              "Jumlah luas semua sisi luarnya",
              "Panjang semua rusuknya",
              "Luas alasnya saja",
            ],
            answer: 1,
            explain: "Luas permukaan = total luas seluruh sisi luar bangun.",
          },
          {
            q: "Rumus luas permukaan kubus adalah?",
            options: ["s x s x s", "6 x s x s", "4 x s x s", "2 x s x s"],
            answer: 1,
            explain: "Kubus punya 6 sisi persegi yang sama, jadi 6 x s x s.",
          },
          {
            q: "Kubus dengan rusuk 3 cm memiliki luas permukaan?",
            options: ["27 cm2", "54 cm2", "9 cm2", "18 cm2"],
            answer: 1,
            explain: "6 x 3 x 3 = 54 cm2.",
          },
          {
            q: "Luas permukaan balok dihitung dengan?",
            options: [
              "p x l x t",
              "2 x (pl + pt + lt)",
              "6 x p x l",
              "pl + pt + lt",
            ],
            answer: 1,
            explain: "Balok punya 3 pasang sisi: 2 x (pl + pt + lt).",
          },
          {
            q: "Mengapa jaring-jaring membantu menghitung luas permukaan?",
            options: [
              "Karena membuat bangun jadi lebih besar",
              "Karena membuka bangun jadi sisi-sisi datar yang mudah dihitung dan dijumlahkan",
              "Karena mengubah volume bangun",
              "Karena menghilangkan beberapa sisi",
            ],
            answer: 1,
            explain:
              "Jaring-jaring membentangkan semua sisi jadi datar sehingga luasnya mudah dihitung lalu dijumlahkan.",
          },
        ],
      },
    ],
  },
];
