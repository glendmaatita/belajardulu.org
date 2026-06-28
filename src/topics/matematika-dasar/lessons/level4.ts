import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "rasio-resep",
    levelId: "perbandingan-perubahan",
    order: 1,
    title: "Rasio: Resep, Peta, dan Skala",
    summary:
      "Sebelum menulis 'a banding b', kita masak dulu. Rasio paling mudah dipahami dari dapur dan peta.",
    durationMin: 12,
    tags: ["rasio", "perbandingan", "proporsi", "kehidupan"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu memasak nasi untuk 2 orang: 1 cangkir beras dan 2 cangkir air. Malam ini tamu datang, kamu perlu memasak untuk 6 orang. Berapa beras dan air yang dibutuhkan agar rasanya tetap pas? Ayo coba dulu sebelum menulis rumus.",
      },
      {
        type: "video",
        comp: "RasioKehidupan",
        title: "Video: Rasio di Sekitar Kita",
        caption: "Resep, peta, dan campuran warna semuanya dijaga oleh rasio.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Untuk 2 orang: 1 beras : 2 air. Untuk 6 orang berarti 3 kali lipat. Maka beras jadi 3, air jadi 6. Perhatikan: angkanya berubah, tetapi <strong>perbandingannya tetap</strong> 1 banding 2. Itulah jantung dari rasio.",
      },
      {
        type: "widget",
        widget: "SimulatorRasio",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Beras dan Air Tetap Sebanding (ilustrasi)",
        unit: "cangkir",
        source: "ilustrasi edukatif",
        note: "Berapa pun porsinya, air selalu dua kali beras. Perbandingan tetap.",
        data: [
          { label: "2 porsi: beras", value: 1, color: "#fbbf24" },
          { label: "2 porsi: air", value: 2, color: "#60a5fa" },
          { label: "6 porsi: beras", value: 3, color: "#fbbf24" },
          { label: "6 porsi: air", value: 6, color: "#60a5fa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Resep dasar 1 beras : 2 air. Jika kamu memakai 4 cangkir beras, berapa cangkir air agar perbandingannya tetap?",
        answer: 8,
        suffix: " cangkir",
        solution:
          "Perbandingan air ÷ beras selalu 2. Maka air = 2 × 4 = <strong>8 cangkir</strong>. Rasio menjaga perbandingan walau jumlahnya naik.",
        hint: "Air selalu dua kali jumlah beras.",
      },
      {
        type: "case",
        title: "Studi Kasus: Skala peta dan jarak nyata",
        html: "Sebuah peta berskala 1 : 100.000 berarti 1 cm di peta mewakili 100.000 cm atau 1 km di dunia nyata. Jika dua kota berjarak 7 cm di peta, jaraknya sekitar 7 km. Tanpa pernah mengukur langsung, kita bisa membaca dunia lewat rasio. Penjelajahan rasio di dapur ternyata sama prinsipnya dengan membaca peta.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mencoba berbagai porsi, polanya jelas. Barulah kita tuliskan: <strong>rasio a : b tetap jika kedua bagian dikali atau dibagi angka yang sama</strong>. Untuk menjaga proporsi, kalikan setiap bagian dengan faktor yang sama.",
      },
      {
        type: "takeaways",
        items: [
          "Rasio adalah perbandingan antara dua besaran.",
          "Rasio tetap walau jumlahnya membesar atau mengecil, asal dikali faktor yang sama.",
          "Resep, peta, skala, dan campuran warna semuanya dijaga oleh rasio.",
          "Rumus proporsi muncul sebagai ringkasan setelah mencoba banyak contoh.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rasio 1 : 2 pada resep berarti?",
            options: [
              "Beras dua kali air",
              "Air dua kali beras",
              "Beras dan air sama",
              "Tidak ada hubungan",
            ],
            answer: 1,
            explain: "Perbandingan 1 banding 2 berarti air dua kali beras.",
          },
          {
            q: "Jika beras 5 cangkir dengan rasio 1 : 2, airnya?",
            options: ["7", "10", "2,5", "5"],
            answer: 1,
            explain: "Air = 2 × 5 = 10 cangkir.",
          },
          {
            q: "Peta skala 1 : 100.000, jarak 5 cm di peta berarti?",
            options: ["5 m", "5 km", "50 km", "500 m"],
            answer: 1,
            explain: "1 cm = 1 km, jadi 5 cm = 5 km.",
          },
          {
            q: "Agar rasio tetap, kedua bagian harus?",
            options: [
              "Ditambah angka yang sama",
              "Dikali faktor yang sama",
              "Dikurangi setengah",
              "Dibiarkan",
            ],
            answer: 1,
            explain: "Mengalikan kedua bagian dengan faktor yang sama menjaga perbandingan.",
          },
          {
            q: "Inti dari rasio adalah?",
            options: [
              "Jumlah selalu berubah acak",
              "Perbandingan tetap walau ukuran berubah",
              "Hanya berlaku di dapur",
              "Sama dengan penjumlahan",
            ],
            answer: 1,
            explain: "Rasio menjaga perbandingan tetap meski ukurannya berubah.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "proporsi-kesebandingan",
    levelId: "perbandingan-perubahan",
    order: 2,
    title: "Proporsi dan Kesebandingan",
    summary:
      "Saat dua rasio bernilai sama, dunia jadi bisa diukur dari jauh. Kita temukan 'x' lewat bayangan, peta, dan roda gigi.",
    durationMin: 13,
    tags: ["proporsi", "kesebandingan", "rasio", "kehidupan"],
    blocks: [
      {
        type: "paragraph",
        html: "Ada pohon tinggi di halaman dan kamu ingin tahu tingginya, tetapi memanjatnya mustahil. Siang hari pohon itu punya bayangan sepanjang 9 meter. Di sebelahnya, tongkat setinggi 1 meter punya bayangan 1,5 meter. Bisakah kamu menebak tinggi pohon tanpa mengukurnya langsung? Ayo jelajahi dulu sebelum menulis rumus apa pun.",
      },
      {
        type: "video",
        comp: "ProporsiVideo",
        title: "Video: Saat Dua Rasio Bertemu",
        caption: "Dua rasio yang sama membantu kita menemukan nilai yang belum diketahui, seperti tinggi pohon dari bayangan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Tongkat dan pohon disinari matahari yang sama, jadi perbandingan tinggi terhadap bayangan pasti sama. Tongkat: 1 banding 1,5. Pohon: tinggi banding 9. Coba skalakan: jika bayangan 1,5 menjadi 9 berarti dikali 6, maka tinggi 1 menjadi <strong>6 meter</strong>. Dua rasio yang sama membuka rahasia ukuran dari kejauhan.",
      },
      {
        type: "paragraph",
        html: "Inilah yang disebut <strong>proporsi</strong>: pernyataan bahwa dua rasio bernilai sama. Ketika satu bagian membesar, bagian pasangannya ikut membesar dengan faktor yang sama. Hubungan seperti ini disebut <strong>kesebandingan lurus</strong>.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mencari yang belum diketahui",
        html: "Kalau tiga angka diketahui dan satu belum, kita tinggal menjaga agar kedua rasio tetap setara. Cara paling intuitif: cari faktor pengali dari sisi yang lengkap, lalu terapkan ke sisi yang lain. Tidak perlu menghafal, cukup menjaga keseimbangan.",
      },
      {
        type: "widget",
        widget: "SimulatorProporsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Tinggi dan Bayangan Selalu Sebanding (ilustrasi)",
        unit: "meter",
        source: "ilustrasi edukatif",
        note: "Saat bayangan bertambah, tinggi benda naik dengan faktor yang sama. Garis lurus menandakan kesebandingan.",
        data: [
          { label: "Bayangan 1,5", value: 1, color: "#34d399" },
          { label: "Bayangan 3", value: 2, color: "#34d399" },
          { label: "Bayangan 6", value: 4, color: "#34d399" },
          { label: "Bayangan 9", value: 6, color: "#34d399" },
        ],
      },
      {
        type: "chart",
        variant: "bar",
        title: "Skala Peta: Jarak Peta vs Jarak Nyata (ilustrasi)",
        unit: "satuan",
        source: "ilustrasi edukatif",
        note: "Skala 3 cm mewakili 12 km. Berapa pun jaraknya, perbandingan peta terhadap nyata tetap 1 banding 4 km per cm.",
        data: [
          { label: "3 cm di peta", value: 3, color: "#60a5fa" },
          { label: "12 km nyata", value: 12, color: "#f472b6" },
          { label: "8 cm di peta", value: 8, color: "#60a5fa" },
          { label: "32 km nyata", value: 32, color: "#f472b6" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Pada peta, 3 cm mewakili 12 km. Jika dua kota berjarak 8 cm di peta, berapa km jarak sebenarnya?",
        answer: 32,
        suffix: " km",
        solution:
          "Jaga agar kedua rasio setara: 3/12 = 8/x. Faktor dari 3 ke 8 sama untuk km. Hitung x = 8 × 12 ÷ 3 = 96 ÷ 3 = <strong>32 km</strong>.",
        hint: "Kalikan silang: x = 8 × 12 ÷ 3.",
      },
      {
        type: "calcExercise",
        prompt:
          "Tongkat 1 m berbayang 1,5 m. Sebuah tiang berbayang 12 m pada saat yang sama. Berapa meter tinggi tiang itu?",
        answer: 8,
        suffix: " m",
        solution:
          "Perbandingan tinggi terhadap bayangan sama: 1/1,5 = x/12. Maka x = 12 ÷ 1,5 = <strong>8 meter</strong>.",
        hint: "Tinggi = bayangan ÷ 1,5 karena tongkat 1 m berbayang 1,5 m.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan setiap rasio dengan rasio lain yang nilainya setara.",
        pairs: [
          { left: "1 : 2", right: "4 : 8" },
          { left: "2 : 3", right: "8 : 12" },
          { left: "3 : 4", right: "9 : 12" },
          { left: "1 : 5", right: "3 : 15" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Roda gigi sepeda dan kayuhan",
        html: "Pada sepeda, roda gigi depan punya 48 gigi dan roda gigi belakang 16 gigi. Perbandingannya 48 : 16, atau 3 : 1. Artinya satu putaran penuh pedal membuat roda belakang berputar 3 kali. Jika kamu mengayuh 20 putaran pedal, roda belakang berputar 20 × 3 = 60 kali. Proporsi yang sama, yaitu 48/16 = putaran roda/putaran pedal, membuat kita bisa memprediksi gerak sepeda hanya dari jumlah gigi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir",
        html: "Setelah menebak tinggi pohon, membaca peta, dan menghitung roda gigi, polanya jelas. Barulah kita tuliskan proporsi: <strong>a/b = c/d</strong>. Dari sini muncul aturan kali silang, yaitu <strong>a × d = b × c</strong>, sehingga nilai yang belum diketahui selalu bisa ditemukan.",
      },
      {
        type: "takeaways",
        items: [
          "Proporsi adalah pernyataan bahwa dua rasio bernilai sama.",
          "Pada kesebandingan lurus, jika satu besaran dikali faktor tertentu, pasangannya ikut dikali faktor yang sama.",
          "Bayangan, peta, dan roda gigi adalah proporsi dalam kehidupan nyata.",
          "Rumus a/b = c/d dan kali silang muncul sebagai ringkasan setelah banyak contoh.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Proporsi a/b = c/d artinya?",
            options: [
              "Dua rasio yang bernilai sama",
              "Dua angka yang dijumlahkan",
              "Selisih dua besaran",
              "Rasio yang selalu berbeda",
            ],
            answer: 0,
            explain: "Proporsi menyatakan dua rasio yang nilainya setara.",
          },
          {
            q: "Pada peta 3 cm = 12 km, jarak 5 cm di peta sama dengan?",
            options: ["15 km", "20 km", "24 km", "36 km"],
            answer: 1,
            explain: "x = 5 × 12 ÷ 3 = 20 km.",
          },
          {
            q: "Kali silang dari a/b = c/d adalah?",
            options: ["a × b = c × d", "a × d = b × c", "a + d = b + c", "a ÷ c = b ÷ d"],
            answer: 1,
            explain: "Mengalikan silang memberi a × d = b × c.",
          },
          {
            q: "Tongkat 1 m berbayang 2 m. Pohon berbayang 10 m. Tinggi pohon?",
            options: ["4 m", "5 m", "8 m", "20 m"],
            answer: 1,
            explain: "1/2 = x/10, maka x = 10 ÷ 2 = 5 m.",
          },
          {
            q: "Rasio manakah yang setara dengan 2 : 3?",
            options: ["4 : 5", "6 : 9", "3 : 2", "5 : 6"],
            answer: 1,
            explain: "6 : 9 disederhanakan menjadi 2 : 3.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "persen-dalam-hidup",
    levelId: "perbandingan-perubahan",
    order: 3,
    title: "Persen dalam Hidup: Diskon, Bunga, Pajak",
    summary:
      "Persen muncul di label diskon, slip tabungan, dan struk belanja. Kita temukan maknanya dari potongan harga dulu, rumusnya belakangan.",
    durationMin: 14,
    tags: ["persen", "diskon", "bunga", "pajak", "kehidupan"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu melihat jaket seharga Rp200.000 dengan label besar 'DISKON 25%'. Berapa rupiah yang sebenarnya kamu hemat, dan berapa harga yang harus dibayar di kasir? Sebelum membuka rumus, ayo rasakan dulu apa arti angka 25% itu.",
      },
      {
        type: "video",
        comp: "PersenVideo",
        title: "Video: Persen di Sekitar Kita",
        caption: "Persen adalah bahasa per seratus, mudah dibayangkan lewat kotak 10 kali 10.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan harga Rp200.000 dipotong menjadi 100 keping yang sama, masing-masing Rp2.000. Diskon 25% berarti kamu mengambil 25 keping itu sebagai potongan: 25 × Rp2.000 = <strong>Rp50.000</strong>. Harga bayarnya tinggal Rp200.000 - Rp50.000 = <strong>Rp150.000</strong>. Persen ternyata hanya cara membagi sesuatu menjadi seratus bagian.",
      },
      {
        type: "paragraph",
        html: "Kata <strong>persen</strong> berasal dari 'per seratus'. Jadi 25% sama dengan 25 dari 100, atau pecahan 25/100 yang sama dengan seperempat. Begitu kamu melihat persen sebagai 'sekian dari seratus', semua jadi masuk akal.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga wajah persen yang sama",
        html: "Diskon mengurangi harga, <strong>bunga</strong> menambah tabungan atau utang, dan <strong>pajak</strong> menambah harga belanja. Bentuknya berbeda, tetapi caranya sama: ambil sekian per seratus dari nilai awal.",
      },
      {
        type: "widget",
        widget: "KalkulatorPersenHidup",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Diskon 25% dari Rp200.000 (ilustrasi)",
        unit: "rupiah",
        source: "ilustrasi edukatif",
        note: "Seperempat lingkaran adalah potongan Rp50.000, sisanya Rp150.000 yang dibayar.",
        data: [
          { label: "Potongan (25%)", value: 50000, color: "#f87171" },
          { label: "Dibayar (75%)", value: 150000, color: "#34d399" },
        ],
      },
      {
        type: "chart",
        variant: "bar",
        title: "Tabungan Rp1.000.000 dengan Bunga 6% per Tahun (ilustrasi)",
        unit: "rupiah",
        source: "ilustrasi edukatif",
        note: "Setiap tahun bertambah Rp60.000 bila bunga tidak diambil. Pertumbuhan persen terasa pelan tapi pasti.",
        data: [
          { label: "Awal", value: 1000000, color: "#60a5fa" },
          { label: "Tahun 1", value: 1060000, color: "#60a5fa" },
          { label: "Tahun 2", value: 1120000, color: "#60a5fa" },
          { label: "Tahun 3", value: 1180000, color: "#60a5fa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sepatu seharga Rp320.000 diskon 15%. Berapa rupiah potongan harganya?",
        answer: 48000,
        prefix: "Rp",
        solution:
          "Potongan = harga × persen ÷ 100 = 320.000 × 15 ÷ 100 = 320.000 × 0,15 = <strong>Rp48.000</strong>.",
        hint: "15% sama dengan 0,15. Kalikan dengan harga.",
      },
      {
        type: "calcExercise",
        prompt:
          "Belanja kebutuhan Rp250.000 dikenai PPN 11%. Berapa rupiah pajak yang ditambahkan?",
        answer: 27500,
        prefix: "Rp",
        solution:
          "Pajak = harga × persen ÷ 100 = 250.000 × 11 ÷ 100 = 250.000 × 0,11 = <strong>Rp27.500</strong>.",
        hint: "11% sama dengan 0,11.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan setiap situasi: apakah persen menambah atau mengurangi nilai awal?",
        buckets: ["Menambah", "Mengurangi"],
        items: [
          { text: "Diskon 20% pada baju", bucket: "Mengurangi" },
          { text: "Bunga tabungan 5% per tahun", bucket: "Menambah" },
          { text: "PPN 11% pada belanja", bucket: "Menambah" },
          { text: "Potongan akhir tahun 30%", bucket: "Mengurangi" },
          { text: "Bunga pinjaman 12%", bucket: "Menambah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Bunga tabungan setahun",
        html: "Sinta menabung Rp4.000.000 di bank dengan bunga 6% per tahun. Setelah satu tahun, bunga yang ia terima adalah 4.000.000 × 6 ÷ 100 = Rp240.000, sehingga saldonya menjadi Rp4.240.000. Kalau bunga itu dibiarkan, tahun berikutnya bunga dihitung dari saldo baru. Persen yang kecil, bila dijaga konsisten, perlahan menumbuhkan tabungan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir",
        html: "Setelah menghitung diskon, pajak, dan bunga dengan cara yang sama, rumusnya muncul sendiri: <strong>Potongan = harga × persen ÷ 100</strong>. Bentuk yang sama berlaku untuk bunga dan pajak, yaitu nilai × persen ÷ 100, lalu hasilnya dikurangkan untuk diskon atau ditambahkan untuk bunga dan pajak.",
      },
      {
        type: "takeaways",
        items: [
          "Persen berarti 'per seratus', jadi 25% sama dengan 25/100.",
          "Diskon, bunga, dan pajak dihitung dengan cara yang sama: nilai × persen ÷ 100.",
          "Diskon mengurangi harga, sedangkan bunga dan pajak menambah nilai.",
          "Rumus Potongan = harga × persen ÷ 100 muncul setelah banyak contoh nyata.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "25% sama dengan pecahan?",
            options: ["1/2", "1/4", "1/5", "2/5"],
            answer: 1,
            explain: "25/100 disederhanakan menjadi 1/4.",
          },
          {
            q: "Diskon 10% dari harga Rp150.000 adalah?",
            options: ["Rp10.000", "Rp15.000", "Rp25.000", "Rp50.000"],
            answer: 1,
            explain: "150.000 × 10 ÷ 100 = Rp15.000.",
          },
          {
            q: "Tabungan Rp2.000.000 dengan bunga 5% setahun menghasilkan bunga?",
            options: ["Rp50.000", "Rp100.000", "Rp200.000", "Rp10.000"],
            answer: 1,
            explain: "2.000.000 × 5 ÷ 100 = Rp100.000.",
          },
          {
            q: "PPN 11% dari belanja Rp100.000 adalah?",
            options: ["Rp1.100", "Rp11.000", "Rp110.000", "Rp1.000"],
            answer: 1,
            explain: "100.000 × 11 ÷ 100 = Rp11.000.",
          },
          {
            q: "Rumus dasar menghitung potongan persen adalah?",
            options: [
              "harga + persen",
              "harga × persen ÷ 100",
              "harga ÷ persen",
              "persen ÷ harga",
            ],
            answer: 1,
            explain: "Potongan = harga × persen ÷ 100.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "laju-perubahan",
    levelId: "perbandingan-perubahan",
    order: 4,
    title: "Laju Perubahan: Kecepatan dan Pertumbuhan",
    summary:
      "Seberapa cepat sesuatu berubah? Kita temukan idenya dari jarak per waktu dan tinggi tanaman per minggu, lalu sampai pada gagasan gradien.",
    durationMin: 14,
    tags: ["laju", "kecepatan", "pertumbuhan", "gradien", "kehidupan"],
    blocks: [
      {
        type: "paragraph",
        html: "Saat mudik, mobil keluarga menempuh 240 km dalam 4 jam. Sopir bilang 'rata-rata 60 an'. Dari mana angka itu, dan apa artinya bagi waktu tiba? Sebelum menulis rumus, ayo telusuri dulu bagaimana jarak dan waktu saling bercerita.",
      },
      {
        type: "video",
        comp: "LajuPerubahan",
        title: "Video: Seberapa Cepat Dunia Berubah",
        caption: "Kecepatan kendaraan dan pertumbuhan tanaman sama-sama soal laju perubahan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "240 km dibagi rata ke dalam 4 jam berarti tiap jam menempuh 240 ÷ 4 = <strong>60 km</strong>. Jadi setiap satu jam berlalu, posisi bertambah 60 km. Angka 60 itulah <strong>laju perubahan</strong> jarak terhadap waktu, yang sehari-hari kita sebut kecepatan.",
      },
      {
        type: "paragraph",
        html: "Laju perubahan menjawab pertanyaan: berapa banyak satu hal berubah setiap satu satuan hal lain bertambah? Pada perjalanan, jarak berubah setiap waktu bertambah. Pada tabungan atau tanaman, nilai berubah setiap minggu berlalu.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Menuju gagasan gradien",
        html: "Kalau perjalanan digambar pada grafik jarak terhadap waktu, garisnya naik. Semakin curam garisnya, semakin cepat geraknya. Kecuraman inilah yang nanti disebut <strong>gradien</strong> atau kemiringan, yaitu perubahan tegak dibagi perubahan mendatar.",
      },
      {
        type: "widget",
        widget: "SimulatorKecepatan",
      },
      {
        type: "chart",
        variant: "line",
        title: "Jarak Tempuh terhadap Waktu (ilustrasi)",
        unit: "km",
        source: "ilustrasi edukatif",
        note: "Tiap jam jarak bertambah 60 km. Garis yang lurus dan naik menandakan laju yang tetap.",
        data: [
          { label: "0 jam", value: 0, color: "#60a5fa" },
          { label: "1 jam", value: 60, color: "#60a5fa" },
          { label: "2 jam", value: 120, color: "#60a5fa" },
          { label: "3 jam", value: 180, color: "#60a5fa" },
          { label: "4 jam", value: 240, color: "#60a5fa" },
        ],
      },
      {
        type: "chart",
        variant: "area",
        title: "Tinggi Tanaman per Minggu (ilustrasi)",
        unit: "cm",
        source: "ilustrasi edukatif",
        note: "Tanaman tumbuh sekitar 5 cm tiap minggu. Laju pertumbuhan adalah perubahan tinggi dibagi waktu.",
        data: [
          { label: "Minggu 0", value: 10, color: "#34d399" },
          { label: "Minggu 1", value: 15, color: "#34d399" },
          { label: "Minggu 2", value: 20, color: "#34d399" },
          { label: "Minggu 3", value: 25, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah bus menempuh 300 km dalam 5 jam dengan laju tetap. Berapa km/jam kecepatannya?",
        answer: 60,
        suffix: " km/jam",
        solution:
          "Laju = jarak ÷ waktu = 300 ÷ 5 = <strong>60 km/jam</strong>. Tiap jam bus maju 60 km.",
        hint: "Bagi jarak total dengan waktu total.",
      },
      {
        type: "calcExercise",
        prompt:
          "Tinggi tanaman naik dari 10 cm menjadi 25 cm dalam 3 minggu. Berapa cm pertumbuhan rata-rata per minggu?",
        answer: 5,
        suffix: " cm/minggu",
        solution:
          "Laju = perubahan tinggi ÷ waktu = (25 - 10) ÷ 3 = 15 ÷ 3 = <strong>5 cm/minggu</strong>.",
        hint: "Hitung selisih tinggi dulu, lalu bagi dengan jumlah minggu.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan setiap situasi dengan laju perubahannya yang benar.",
        pairs: [
          { left: "120 km dalam 2 jam", right: "60 km/jam" },
          { left: "150 km dalam 3 jam", right: "50 km/jam" },
          { left: "Tumbuh 20 cm dalam 4 minggu", right: "5 cm/minggu" },
          { left: "Hemat Rp90.000 dalam 3 bulan", right: "Rp30.000/bulan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memperkirakan waktu tiba",
        html: "Keluarga Pak Budi hendak ke kota yang berjarak 180 km. Berdasarkan pengalaman, mobil melaju rata-rata 60 km/jam. Karena laju = jarak ÷ waktu, maka waktu = jarak ÷ laju = 180 ÷ 60 = 3 jam. Jika berangkat pukul 07.00, mereka diperkirakan tiba sekitar pukul 10.00. Memahami laju perubahan membuat kita bisa merencanakan perjalanan, bukan sekadar menebak.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir",
        html: "Setelah membaca grafik jarak dan pertumbuhan tanaman, polanya jelas. Barulah kita tuliskan: <strong>Kecepatan = jarak ÷ waktu</strong>. Secara umum, laju perubahan adalah perubahan nilai dibagi perubahan waktu, dan kecuraman garis pada grafik itulah yang kita sebut gradien.",
      },
      {
        type: "takeaways",
        items: [
          "Laju perubahan mengukur seberapa banyak sesuatu berubah per satu satuan waktu.",
          "Kecepatan adalah laju perubahan jarak terhadap waktu, yaitu jarak ÷ waktu.",
          "Pada grafik, laju yang lebih besar berarti garis yang lebih curam, inilah gagasan gradien.",
          "Rumus Kecepatan = jarak ÷ waktu muncul setelah menelusuri banyak contoh nyata.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mobil menempuh 100 km dalam 2 jam. Kecepatannya?",
            options: ["20 km/jam", "50 km/jam", "200 km/jam", "102 km/jam"],
            answer: 1,
            explain: "100 ÷ 2 = 50 km/jam.",
          },
          {
            q: "Rumus kecepatan adalah?",
            options: [
              "jarak × waktu",
              "jarak ÷ waktu",
              "waktu ÷ jarak",
              "jarak + waktu",
            ],
            answer: 1,
            explain: "Kecepatan = jarak ÷ waktu.",
          },
          {
            q: "Pada grafik jarak terhadap waktu, garis yang lebih curam berarti?",
            options: [
              "Bergerak lebih lambat",
              "Bergerak lebih cepat",
              "Diam di tempat",
              "Mundur",
            ],
            answer: 1,
            explain: "Semakin curam garisnya, semakin besar lajunya, jadi makin cepat.",
          },
          {
            q: "Tanaman tumbuh dari 12 cm ke 24 cm dalam 4 minggu. Laju per minggu?",
            options: ["2 cm", "3 cm", "4 cm", "6 cm"],
            answer: 1,
            explain: "(24 - 12) ÷ 4 = 12 ÷ 4 = 3 cm per minggu.",
          },
          {
            q: "Jarak 240 km ditempuh dengan kecepatan 80 km/jam. Lama perjalanan?",
            options: ["2 jam", "3 jam", "4 jam", "5 jam"],
            answer: 1,
            explain: "Waktu = jarak ÷ kecepatan = 240 ÷ 80 = 3 jam.",
          },
        ],
      },
    ],
  },
];
