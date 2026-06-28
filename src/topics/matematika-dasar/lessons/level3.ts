import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "menemukan-luas",
    levelId: "bentuk-ruang",
    order: 2,
    title: "Menemukan Luas dengan Menghitung Petak",
    summary:
      "Sebelum menghafal 'panjang kali lebar', kita hitung dulu petak satu per satu sampai rumusnya muncul sendiri.",
    durationMin: 12,
    tags: ["geometri", "luas", "persegi panjang", "pola"],
    blocks: [
      {
        type: "paragraph",
        html: "Kamu ingin memasang ubin di lantai kamar. Toko menjual ubin berukuran 1 meter × 1 meter. Pertanyaannya: berapa ubin yang kamu butuhkan? Jangan pakai rumus dulu, ayo kita hitung bersama.",
      },
      {
        type: "video",
        comp: "MenemukanLuas",
        title: "Video: Menemukan Luas",
        caption: "Hitung petak satuan dulu, rumus luas muncul belakangan sebagai ringkasan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan kamar berukuran 4 meter × 3 meter. Susun ubin 1×1 hingga penuh. Hitung baris pertama: 4 ubin. Ada 3 baris. Daripada menghitung 12 satu per satu, kamu mulai melihat polanya: cukup kalikan jumlah ubin per baris dengan banyaknya baris.",
      },
      {
        type: "widget",
        widget: "PenemuLuas",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kamar berukuran 5 meter × 4 meter. Tanpa menghitung satu per satu, berapa ubin 1×1 yang dibutuhkan?",
        answer: 20,
        suffix: " ubin",
        solution:
          "5 ubin per baris, sebanyak 4 baris. Maka 5 × 4 = <strong>20 ubin</strong>. Pola 'isi per baris dikali jumlah baris' inilah cikal bakal rumus luas.",
        hint: "Hitung ubin di satu baris, lalu kalikan dengan jumlah baris.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan ukuran persegi panjang dengan jumlah petak satuannya.",
        pairs: [
          { left: "3 x 3", right: "9" },
          { left: "6 x 2", right: "12" },
          { left: "7 x 5", right: "35" },
          { left: "8 x 4", right: "32" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tukang dan tanah sawah",
        html: "Seorang petani ingin tahu luas sawah berbentuk persegi panjang berukuran 30 meter × 20 meter untuk memperkirakan bibit. Ia tidak mungkin menaruh petak 1×1 sebanyak itu satu per satu. Tetapi karena ia sudah menemukan polanya saat mencoba petak kecil, ia langsung tahu: 30 × 20 = 600 meter persegi. Penjelajahan pada ukuran kecil membuahkan rumus yang bekerja untuk ukuran besar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menghitung banyak petak, polanya jelas. Barulah kita tuliskan rumusnya: <strong>Luas persegi panjang = panjang × lebar</strong>. Rumus ini bukan hafalan, melainkan ringkasan dari menghitung petak yang berulang.",
      },
      {
        type: "takeaways",
        items: [
          "Luas adalah banyaknya petak satuan yang menutupi sebuah bidang.",
          "Daripada menghitung satu per satu, kita temukan pola 'isi per baris dikali jumlah baris'.",
          "Rumus Luas persegi panjang = panjang × lebar muncul sebagai ringkasan pola.",
          "Memahami asal rumus membuatnya mudah diingat dan diterapkan ke ukuran besar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Luas pada dasarnya menghitung?",
            options: [
              "Panjang tepi bidang",
              "Banyaknya petak satuan yang menutupi bidang",
              "Jumlah sudut",
              "Tinggi bidang",
            ],
            answer: 1,
            explain: "Luas adalah banyaknya satuan persegi yang menutupi permukaan.",
          },
          {
            q: "Persegi panjang 6 × 4 memiliki luas?",
            options: ["10", "24", "20", "12"],
            answer: 1,
            explain: "6 × 4 = 24 petak satuan.",
          },
          {
            q: "Mengapa kita tidak perlu menghitung petak satu per satu untuk sawah besar?",
            options: [
              "Karena terlalu malas",
              "Karena polanya sudah ditemukan: panjang × lebar",
              "Karena luas tidak penting",
              "Karena petaknya berbeda ukuran",
            ],
            answer: 1,
            explain: "Pola panjang × lebar berlaku untuk ukuran apa pun.",
          },
          {
            q: "Rumus luas persegi panjang sebaiknya dipahami sebagai?",
            options: [
              "Hafalan tanpa makna",
              "Ringkasan dari menghitung petak yang berulang",
              "Aturan yang tak bisa dijelaskan",
              "Kebetulan",
            ],
            answer: 1,
            explain: "Rumus adalah ringkasan pola menghitung petak.",
          },
          {
            q: "Sawah 30 m × 20 m memiliki luas?",
            options: ["50 m²", "600 m²", "300 m²", "120 m²"],
            answer: 1,
            explain: "30 × 20 = 600 meter persegi.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "bentuk-di-sekeliling",
    levelId: "bentuk-ruang",
    order: 1,
    title: "Bentuk di Sekeliling Kita",
    summary:
      "Sebelum menghafal nama-nama bentuk, kita amati dulu benda di sekitar dan menemukan bahwa setiap bentuk punya sifat yang bisa kita kenali.",
    durationMin: 11,
    tags: ["geometri", "bentuk", "pola", "sifat bangun"],
    blocks: [
      {
        type: "paragraph",
        html: "Coba tengok sekelilingmu sekarang. Jam dinding bundar, ubin lantai persegi, atap rumah segitiga, dan rambu lalu lintas bersegi banyak. Matematika bukan sekadar berhitung, melainkan cara kita membaca bahasa bentuk di alam. Sebelum menamai apa pun, ayo kita amati dulu.",
      },
      {
        type: "video",
        comp: "BentukGeometri",
        title: "Video: Mengenali Bentuk dari Sifatnya",
        caption: "Setiap bentuk punya ciri sendiri. Amati dulu sisi, sudut, dan simetrinya sebelum kita beri nama.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil tiga benda di dekatmu. Untuk tiap benda, tanyakan: berapa sisinya? Berapa sudutnya? Apakah ia simetris jika dilipat? Belum perlu tahu namanya. Cukup catat sifat-sifatnya. Lama-lama kamu akan melihat bahwa benda dengan sifat serupa bisa dikelompokkan bersama.",
      },
      {
        type: "paragraph",
        html: "Lingkaran terasa istimewa: ia tidak punya sudut sama sekali dan tampak sama dari segala arah. Segitiga punya tiga sisi dan tiga sudut, paling kokoh sehingga dipakai pada rangka jembatan. Persegi punya empat sisi sama panjang. Bentuk dengan banyak sisi kita sebut segi banyak, seperti segi enam pada sarang lebah.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Sifat itu petunjuk",
        html: "Tiga petunjuk utama membantu kita mengenali bentuk: <strong>jumlah sisi</strong>, <strong>jumlah sudut</strong>, dan <strong>simetri</strong>. Hanya dengan tiga petunjuk ini, kamu bisa membedakan hampir semua bentuk datar tanpa menghafal satu per satu.",
      },
      {
        type: "widget",
        widget: "PenjelajahBentuk",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap benda sehari-hari berdasarkan bentuk dasarnya.",
        buckets: ["Lingkaran", "Segitiga", "Persegi", "Segi banyak"],
        items: [
          { text: "Jam dinding", bucket: "Lingkaran" },
          { text: "Roda sepeda", bucket: "Lingkaran" },
          { text: "Atap rumah dari depan", bucket: "Segitiga" },
          { text: "Penggaris siku", bucket: "Segitiga" },
          { text: "Ubin lantai", bucket: "Persegi" },
          { text: "Bingkai foto", bucket: "Persegi" },
          { text: "Sarang lebah", bucket: "Segi banyak" },
          { text: "Rambu stop", bucket: "Segi banyak" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan bentuk dengan sifat yang menjadi cirinya.",
        pairs: [
          { left: "Lingkaran", right: "Tidak punya sudut, sama dari segala arah" },
          { left: "Segitiga", right: "3 sisi dan 3 sudut" },
          { left: "Persegi", right: "4 sisi sama panjang dan 4 sudut siku-siku" },
          { left: "Segi enam", right: "6 sisi, seperti sarang lebah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Mengapa lebah memilih segi enam",
        html: "Lebah membangun sarang dari sel-sel berbentuk segi enam. Kenapa bukan lingkaran atau persegi? Karena segi enam bisa menutup bidang tanpa celah sambil memakai dinding paling sedikit, jadi hemat lilin. Dengan mengenali sifat bentuk, yaitu sisi dan cara mereka saling mengunci, kita memahami pilihan cerdas yang dibuat alam jauh sebelum manusia menghitungnya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengamati banyak benda, intinya jelas: <strong>kita bisa mengelompokkan bentuk apa pun hanya dengan membaca sifatnya, yaitu jumlah sisi, jumlah sudut, dan simetri</strong>. Penggolongan ini bukan hafalan, melainkan hasil mengamati pola yang berulang di sekeliling kita.",
      },
      {
        type: "takeaways",
        items: [
          "Bentuk ada di mana-mana, dari jam dinding hingga sarang lebah.",
          "Setiap bentuk dikenali dari sifatnya: jumlah sisi, jumlah sudut, dan simetri.",
          "Lingkaran istimewa karena tidak punya sudut dan sama dari segala arah.",
          "Mengelompokkan bentuk berdasarkan sifat lebih bermakna daripada sekadar menghafal namanya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Tiga petunjuk utama untuk mengenali sebuah bentuk datar adalah?",
            options: [
              "Warna, berat, dan bau",
              "Jumlah sisi, jumlah sudut, dan simetri",
              "Harga, ukuran, dan bahan",
              "Nama, umur, dan pemilik",
            ],
            answer: 1,
            explain: "Sifat geometri seperti sisi, sudut, dan simetri menjadi ciri pembeda bentuk.",
          },
          {
            q: "Bentuk yang tidak memiliki sudut sama sekali adalah?",
            options: ["Segitiga", "Persegi", "Lingkaran", "Segi enam"],
            answer: 2,
            explain: "Lingkaran tidak punya sudut dan tampak sama dari segala arah.",
          },
          {
            q: "Sarang lebah berbentuk segi enam memiliki berapa sisi?",
            options: ["4", "5", "6", "8"],
            answer: 2,
            explain: "Segi enam berarti enam sisi.",
          },
          {
            q: "Mengapa segitiga sering dipakai pada rangka jembatan?",
            options: [
              "Karena paling murah",
              "Karena bentuknya paling kokoh",
              "Karena paling indah",
              "Karena mudah dicat",
            ],
            answer: 1,
            explain: "Segitiga adalah bentuk yang paling kokoh sehingga cocok untuk rangka.",
          },
          {
            q: "Cara terbaik memahami beragam bentuk adalah?",
            options: [
              "Menghafal semua namanya tanpa makna",
              "Mengelompokkannya berdasarkan sifat seperti sisi dan sudut",
              "Mengabaikannya",
              "Hanya melihat warnanya",
            ],
            answer: 1,
            explain: "Mengelompokkan berdasarkan sifat membuat pemahaman lebih bermakna dan mudah.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "keliling-dan-pi",
    levelId: "bentuk-ruang",
    order: 3,
    title: "Keliling, dan Lahirnya Pi",
    summary:
      "Dengan mengukur keliling banyak lingkaran lalu membaginya dengan diameter, kita menemukan satu angka ajaib yang selalu muncul, yaitu pi.",
    durationMin: 13,
    tags: ["geometri", "keliling", "lingkaran", "pi"],
    blocks: [
      {
        type: "paragraph",
        html: "Berapa panjang tepi gelasmu jika dibentangkan lurus? Ikatkan benang mengelilingi bibir gelas, lalu ukur benangnya. Itulah keliling. Pertanyaan menariknya: adakah hubungan tetap antara keliling sebuah lingkaran dan lebarnya? Jangan pakai rumus dulu, ayo kita ukur banyak lingkaran.",
      },
      {
        type: "video",
        comp: "LahirnyaPi",
        title: "Video: Lahirnya Pi",
        caption: "Ukur keliling banyak lingkaran lalu bagi dengan diameter. Kita kejar dulu polanya sebelum menamainya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Siapkan tutup botol, piring, dan roda. Untuk tiap benda, ukur keliling dengan benang lalu ukur diameter (garis tengahnya). Sekarang bagi keliling dengan diameter. Lakukan untuk ketiganya. Apakah hasilnya berdekatan? Kamu akan terkejut, hasilnya selalu mendekati angka yang sama.",
      },
      {
        type: "paragraph",
        html: "Tutup botol kecil, piring besar, atau roda raksasa sekalipun, hasil bagi keliling dibagi diameter tetap berkisar di angka 3,14. Lingkaran sekecil atau sebesar apa pun mematuhi aturan yang sama. Inilah salah satu keajaiban yang membuat matematika terasa seperti bahasa semesta.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Diameter dan jari-jari",
        html: "Diameter adalah garis lurus yang melintasi pusat lingkaran dari tepi ke tepi. Jari-jari adalah setengahnya. Saat kita membagi keliling dengan diameter, perbandingannya selalu tetap, tidak peduli ukuran lingkarannya.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Keliling dibagi Diameter untuk Berbagai Lingkaran (ilustrasi)",
        unit: "rasio keliling : diameter",
        source: "ilustrasi edukatif",
        note: "Lihat garisnya nyaris datar di sekitar 3,14, tak peduli lingkarannya kecil atau besar. Dari sinilah pi lahir.",
        data: [
          { label: "Tutup botol", value: 3.14, color: "#60a5fa" },
          { label: "Gelas", value: 3.15, color: "#34d399" },
          { label: "Piring", value: 3.13, color: "#a78bfa" },
          { label: "Roda", value: 3.14, color: "#f472b6" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorPi",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah roda memiliki diameter 10 cm. Dengan perbandingan ajaib 3,14, berapa kira-kira keliling roda itu?",
        answer: 31.4,
        tolerance: 0.5,
        suffix: " cm",
        solution:
          "Karena keliling dibagi diameter selalu sekitar 3,14, maka keliling = 3,14 × 10 = <strong>31,4 cm</strong>.",
        hint: "Kalikan diameter dengan 3,14.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan diameter lingkaran dengan kelilingnya (memakai pi 3,14).",
        pairs: [
          { left: "d = 5 cm", right: "15,7 cm" },
          { left: "d = 10 cm", right: "31,4 cm" },
          { left: "d = 20 cm", right: "62,8 cm" },
          { left: "d = 100 cm", right: "314 cm" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Berapa jauh sepeda melaju dalam satu putaran roda",
        html: "Ban sepeda berdiameter 70 cm. Dalam satu putaran penuh, sepeda melaju sejauh keliling bannya. Karena kita sudah menemukan perbandingan tetap 3,14, keliling = 3,14 × 70 = 219,8 cm, atau hampir 2,2 meter. Jadi 100 putaran roda membawa sepeda sekitar 220 meter. Penemuan pi pada lingkaran kecil ternyata berguna untuk menghitung jarak nyata.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah mengukur banyak lingkaran, perbandingan tetap itu kita beri nama pi (π) yang bernilai sekitar 3,14. Barulah rumusnya muncul: <strong>Keliling = pi × diameter</strong>. Pi bukan angka ajaib yang muncul tiba-tiba, melainkan hasil pengamatan bahwa keliling selalu sekitar 3,14 kali diameter.",
      },
      {
        type: "takeaways",
        items: [
          "Keliling adalah panjang tepi sebuah bentuk jika dibentangkan lurus.",
          "Keliling lingkaran dibagi diameternya selalu mendekati 3,14, sekecil atau sebesar apa pun lingkarannya.",
          "Perbandingan tetap itu kita namai pi (π) yang bernilai sekitar 3,14.",
          "Rumus Keliling = pi × diameter adalah ringkasan dari pola yang kita temukan sendiri.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Keliling sebuah lingkaran adalah?",
            options: [
              "Luas di dalam lingkaran",
              "Panjang tepi lingkaran jika dibentangkan lurus",
              "Garis tengah lingkaran",
              "Setengah diameter",
            ],
            answer: 1,
            explain: "Keliling adalah panjang seluruh tepi lingkaran.",
          },
          {
            q: "Jika keliling lingkaran dibagi diameternya, hasilnya selalu sekitar?",
            options: ["1,14", "2,00", "3,14", "6,28"],
            answer: 2,
            explain: "Perbandingan tetap itu adalah pi, kira-kira 3,14.",
          },
          {
            q: "Lingkaran berdiameter 10 cm memiliki keliling sekitar?",
            options: ["10 cm", "20 cm", "31,4 cm", "100 cm"],
            answer: 2,
            explain: "Keliling = 3,14 × 10 = 31,4 cm.",
          },
          {
            q: "Mengapa pi disebut perbandingan tetap?",
            options: [
              "Karena hanya berlaku untuk lingkaran besar",
              "Karena nilainya selalu sekitar 3,14 untuk semua ukuran lingkaran",
              "Karena berubah-ubah tiap lingkaran",
              "Karena hanya angka kira-kira yang tidak berguna",
            ],
            answer: 1,
            explain: "Berapa pun ukuran lingkaran, keliling dibagi diameter selalu mendekati 3,14.",
          },
          {
            q: "Rumus keliling lingkaran yang muncul dari pengamatan adalah?",
            options: [
              "Keliling = panjang × lebar",
              "Keliling = pi × diameter",
              "Keliling = diameter + jari-jari",
              "Keliling = 2 × luas",
            ],
            answer: 1,
            explain: "Keliling = pi × diameter, ringkasan dari pola yang ditemukan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "petualangan-pythagoras",
    levelId: "bentuk-ruang",
    order: 4,
    title: "Petualangan Segitiga: Menemukan Pythagoras",
    summary:
      "Dengan membangun persegi pada tiap sisi segitiga siku-siku lalu menghitung luasnya, kita menemukan sendiri bahwa a kuadrat ditambah b kuadrat sama dengan c kuadrat.",
    durationMin: 15,
    tags: ["geometri", "segitiga", "pythagoras", "luas"],
    blocks: [
      {
        type: "paragraph",
        html: "Tukang kayu zaman dulu memastikan sudut benar-benar siku-siku tanpa busur derajat. Caranya: ukur tiga langkah ke satu arah, empat langkah ke arah tegak lurus, lalu cek apakah jarak miringnya pas lima langkah. Mengapa angka 3, 4, dan 5 begitu ajaib? Jangan pakai rumus dulu, ayo kita selidiki bersama.",
      },
      {
        type: "video",
        comp: "PythagorasPetualangan",
        title: "Video: Petualangan Pythagoras",
        caption: "Bangun persegi di tiap sisi segitiga siku-siku, hitung luasnya, dan saksikan polanya muncul.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Gambar segitiga siku-siku dengan kaki 3 dan 4 satuan. Pada setiap sisi, bangun sebuah persegi keluar. Hitung luas persegi pada kaki pendek (3 × 3 = 9), pada kaki panjang (4 × 4 = 16), dan pada sisi miring. Coba tebak dulu luas persegi di sisi miring sebelum mengukurnya.",
      },
      {
        type: "paragraph",
        html: "Ketika kamu menjumlahkan luas dua persegi pada kaki, yaitu 9 dan 16, hasilnya 25. Dan ternyata luas persegi pada sisi miring juga tepat 25, yang berarti sisi miringnya 5 satuan. Bukan kebetulan. Ulangi dengan segitiga lain, misalnya kaki 6 dan 8, lalu lihat apakah polanya bertahan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mari uji sekali lagi",
        html: "Untuk kaki 6 dan 8: luas perseginya 36 dan 64, dijumlahkan menjadi 100. Akar dari 100 adalah 10, jadi sisi miringnya 10. Pola yang sama: jumlah luas dua persegi kaki sama dengan luas persegi sisi miring. Semakin sering dicoba, semakin yakin kita bahwa ini aturan, bukan keberuntungan.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Luas Persegi pada Tiap Sisi Segitiga 3-4-5 (ilustrasi)",
        unit: "luas (satuan persegi)",
        source: "ilustrasi edukatif",
        note: "Perhatikan: 9 + 16 = 25. Luas dua persegi kaki persis sama dengan luas persegi sisi miring.",
        data: [
          { label: "Kaki a = 3", value: 9, color: "#60a5fa" },
          { label: "Kaki b = 4", value: 16, color: "#34d399" },
          { label: "Sisi miring c = 5", value: 25, color: "#f472b6" },
        ],
      },
      {
        type: "chart",
        variant: "bar",
        title: "Jumlah Luas Dua Kaki Selalu Sama dengan Luas Sisi Miring (ilustrasi)",
        unit: "nilai a kuadrat + b kuadrat = c kuadrat",
        source: "ilustrasi edukatif",
        note: "Untuk tiap segitiga siku-siku, a kuadrat + b kuadrat selalu menghasilkan c kuadrat.",
        data: [
          { label: "3,4,5", value: 25, color: "#60a5fa" },
          { label: "6,8,10", value: 100, color: "#34d399" },
          { label: "5,12,13", value: 169, color: "#a78bfa" },
          { label: "8,15,17", value: 289, color: "#f472b6" },
        ],
      },
      {
        type: "widget",
        widget: "EksplorasiPythagoras",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah segitiga siku-siku berkaki 3 dan 4 satuan. Dengan menjumlahkan luas persegi kakinya lalu menarik akarnya, berapa panjang sisi miringnya?",
        answer: 5,
        suffix: " satuan",
        solution:
          "Luas persegi kaki: 3 × 3 = 9 dan 4 × 4 = 16. Jumlahnya 9 + 16 = 25. Akar dari 25 adalah <strong>5 satuan</strong>.",
        hint: "Jumlahkan 9 dan 16, lalu cari bilangan yang dikalikan dirinya menghasilkan jumlah itu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Segitiga siku-siku lain berkaki 6 dan 8 satuan. Berapa panjang sisi miringnya?",
        answer: 10,
        suffix: " satuan",
        solution:
          "6 × 6 = 36 dan 8 × 8 = 64. Jumlahnya 36 + 64 = 100. Akar dari 100 adalah <strong>10 satuan</strong>.",
        hint: "Hitung kuadrat tiap kaki, jumlahkan, lalu tarik akarnya.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan pasangan kaki segitiga siku-siku dengan panjang sisi miringnya.",
        pairs: [
          { left: "Kaki 3 dan 4", right: "5" },
          { left: "Kaki 6 dan 8", right: "10" },
          { left: "Kaki 5 dan 12", right: "13" },
          { left: "Kaki 8 dan 15", right: "17" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tangga bersandar di tembok",
        html: "Sebuah tangga sepanjang 5 meter disandarkan ke tembok. Kaki tangga berjarak 3 meter dari dasar tembok. Seberapa tinggi ujung tangga menyentuh tembok? Tangga, lantai, dan tembok membentuk segitiga siku-siku. Sisi miring 5, satu kaki 3, maka tinggi yang dicari memenuhi tinggi kuadrat = 25 dikurangi 9 = 16, sehingga tingginya 4 meter. Aturan yang kita temukan pada gambar kecil langsung berguna di dunia nyata.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah membangun persegi pada banyak segitiga dan menghitung luasnya, polanya tak terbantahkan. Barulah kita tuliskan teorema Pythagoras: <strong>a² + b² = c²</strong>, dengan a dan b panjang kaki, dan c panjang sisi miring. Rumus ini lahir dari menghitung luas persegi, bukan dari hafalan.",
      },
      {
        type: "takeaways",
        items: [
          "Pada segitiga siku-siku, persegi yang dibangun di tiap sisi mengungkap pola luasnya.",
          "Jumlah luas persegi pada dua kaki selalu sama dengan luas persegi pada sisi miring.",
          "Pola ini diringkas menjadi teorema Pythagoras: a² + b² = c².",
          "Teorema ini berguna nyata, dari memastikan sudut siku-siku hingga menghitung tinggi tangga.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pada segitiga siku-siku, sisi terpanjang yang berhadapan dengan sudut siku-siku disebut?",
            options: ["Kaki", "Sisi miring", "Alas", "Tinggi"],
            answer: 1,
            explain: "Sisi miring (hipotenusa) adalah sisi terpanjang di depan sudut siku-siku.",
          },
          {
            q: "Untuk segitiga berkaki 3 dan 4, jumlah luas persegi pada kedua kakinya adalah?",
            options: ["7", "12", "25", "49"],
            answer: 2,
            explain: "9 + 16 = 25, yang sama dengan luas persegi pada sisi miring.",
          },
          {
            q: "Segitiga siku-siku berkaki 6 dan 8 memiliki sisi miring sepanjang?",
            options: ["10", "12", "14", "48"],
            answer: 0,
            explain: "36 + 64 = 100, dan akar 100 adalah 10.",
          },
          {
            q: "Teorema Pythagoras menyatakan bahwa?",
            options: [
              "a + b = c",
              "a² + b² = c²",
              "a × b = c",
              "a² + b² = c",
            ],
            answer: 1,
            explain: "Jumlah kuadrat dua kaki sama dengan kuadrat sisi miring.",
          },
          {
            q: "Tangga 5 m bersandar dengan kaki 3 m dari tembok. Tinggi yang dicapai di tembok adalah?",
            options: ["2 m", "4 m", "6 m", "8 m"],
            answer: 1,
            explain: "Tinggi kuadrat = 25 - 9 = 16, jadi tingginya 4 m.",
          },
        ],
      },
    ],
  },
];
