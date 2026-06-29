import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "matematika-bukan-berhitung",
    levelId: "apa-itu-matematika",
    order: 1,
    title: "Matematika Bukan Sekadar Berhitung",
    summary:
      "Berhitung hanyalah bagian kecil dari matematika. Kita jelajahi dulu apa beda keduanya sebelum menyimpulkan.",
    durationMin: 12,
    tags: ["matematika", "berhitung", "pola", "konsep"],
    blocks: [
      {
        type: "paragraph",
        html: "Banyak orang mengira matematika itu sama dengan <strong>berhitung</strong>: menjumlah, mengurang, mengali, membagi. Padahal berhitung hanyalah satu alat kecil di dalam dunia matematika yang jauh lebih luas. Mari kita jelajahi dulu, jangan buru-buru ke rumus.",
      },
      {
        type: "video",
        comp: "MatematikaVsBerhitung",
        title: "Video: Matematika vs Berhitung",
        caption: "Berhitung adalah lingkaran kecil di dalam lingkaran besar bernama matematika.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan kamu melihat susunan ubin lantai yang berulang. <strong>Berhitung</strong> menjawab 'ada berapa ubin'. <strong>Matematika</strong> bertanya 'mengapa polanya berulang, dan bisakah kita ramalkan ubin ke-100 tanpa menghitung satu per satu?'",
      },
      {
        type: "callout",
        tone: "key",
        title: "Berhitung vs matematika",
        html: "<strong>Berhitung</strong>: menghasilkan angka dari operasi (berapa). <strong>Matematika</strong>: mencari pola, alasan, dan hubungan (mengapa dan bagaimana). Berhitung adalah bagian dari matematika, bukan keseluruhannya.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Pola yang Ditemukan: Jumlah Bilangan Ganjil Selalu Kuadrat",
        unit: "hasil penjumlahan",
        source: "ilustrasi edukatif",
        note: "1=1², 1+3=4=2², 1+3+5=9=3², 1+3+5+7=16=4², 1+3+5+7+9=25=5². Itulah pola yang dilihat si 'pemalas cerdas', bukan sekadar berhitung satu per satu.",
        data: [
          { label: "1", value: 1, color: "#34d399" },
          { label: "1+3", value: 4, color: "#34d399" },
          { label: "1+3+5", value: 9, color: "#60a5fa" },
          { label: "1+3+5+7", value: 16, color: "#60a5fa" },
          { label: "1+3+5+7+9", value: 25, color: "#a78bfa" },
        ],
      },
      {
        type: "widget",
        widget: "PenjelajahPola",
      },
      {
        type: "classifyExercise",
        prompt: "Kegiatan ini lebih condong ke berhitung atau matematika?",
        buckets: ["Berhitung", "Matematika"],
        items: [
          { text: "Menjumlahkan harga belanjaan di kasir", bucket: "Berhitung" },
          { text: "Menemukan aturan agar bisa menebak suku ke-100 sebuah pola", bucket: "Matematika" },
          { text: "Menghitung 7 kali 8", bucket: "Berhitung" },
          { text: "Menjelaskan mengapa jumlah dua bilangan ganjil selalu genap", bucket: "Matematika" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Dengan pola 1+3+5+...= kuadrat, berapa jumlah 6 bilangan ganjil pertama (1+3+5+7+9+11)?",
        answer: 36,
        solution: "Jumlah n bilangan ganjil pertama selalu n². Untuk n=6, hasilnya 6 × 6 = 36. Tidak perlu menjumlah satu per satu.",
        hint: "Hitung saja 6 dikali 6, jangan menjumlah satu per satu.",
      },
      {
        type: "case",
        title: "Studi Kasus: Anak tangga dan si pemalas cerdas",
        html: "Seorang anak diminta menghitung berapa banyak ubin pada pola yang membesar: 1, 3, 5, 7, ... sampai pola ke-50. Teman yang rajin <strong>berhitung</strong> menjumlahkan satu per satu. Anak yang berpikir <strong>matematis</strong> mengamati pola: hasil penjumlahan 1+3+5+...selalu berupa bilangan kuadrat (1, 4, 9, 16, ...). Maka jumlah 50 bilangan ganjil pertama langsung ia ketahui: 50 × 50 = 2.500. Ia menang bukan karena lebih cepat berhitung, tetapi karena menemukan polanya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rumuskan: <strong>matematika = mencari pola dan alasan di balik angka</strong>, sedangkan berhitung hanya mengeksekusi operasinya. Itulah mengapa di topik ini kita selalu berpetualang dulu, baru rumus muncul.",
      },
      {
        type: "takeaways",
        items: [
          "Berhitung adalah bagian kecil dari matematika, bukan keseluruhannya.",
          "Berhitung menjawab 'berapa'; matematika menjawab 'mengapa' dan 'bagaimana polanya'.",
          "Inti matematika adalah menemukan pola, hubungan, dan alasan.",
          "Rumus sebaiknya muncul sebagai kesimpulan dari penjelajahan, bukan dihafal di awal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pernyataan yang paling tepat adalah?",
            options: [
              "Matematika sama dengan berhitung",
              "Berhitung adalah bagian dari matematika",
              "Berhitung lebih luas dari matematika",
              "Keduanya tidak berhubungan",
            ],
            answer: 1,
            explain: "Berhitung adalah satu alat di dalam matematika yang jauh lebih luas.",
          },
          {
            q: "Aktivitas berikut yang paling 'matematis' adalah?",
            options: [
              "Menghitung kembalian uang",
              "Menjumlahkan 12 + 19",
              "Menemukan aturan umum sebuah pola",
              "Menghafal tabel perkalian",
            ],
            answer: 2,
            explain: "Menemukan aturan umum adalah inti berpikir matematis.",
          },
          {
            q: "Berhitung pada dasarnya menjawab pertanyaan?",
            options: ["Mengapa", "Bagaimana polanya", "Berapa", "Apa buktinya"],
            answer: 2,
            explain: "Berhitung menghasilkan angka, yaitu jawaban atas 'berapa'.",
          },
          {
            q: "Jumlah bilangan ganjil 1+3+5+...+ (n ganjil pertama) menghasilkan?",
            options: ["Bilangan genap selalu", "Bilangan kuadrat n²", "Bilangan prima", "Selalu ganjil"],
            answer: 1,
            explain: "Polanya: 1, 4, 9, 16, ... yaitu n². Ini contoh menemukan pola, bukan sekadar berhitung.",
          },
          {
            q: "Mengapa di topik ini rumus ditaruh di akhir?",
            options: [
              "Agar lebih sulit",
              "Supaya rumus muncul sebagai kesimpulan dari penjelajahan",
              "Karena rumus tidak penting",
              "Agar bisa dihafal lebih cepat",
            ],
            answer: 1,
            explain: "Memahami asal-usul rumus jauh lebih kuat daripada menghafalnya lebih dulu.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pola-di-mana-mana",
    levelId: "apa-itu-matematika",
    order: 2,
    title: "Pola dan Keteraturan di Sekitar Kita",
    summary:
      "Dari kelopak bunga sampai cangkang siput, alam penuh pola. Kita amati dulu keteraturannya sebelum aturannya kita rumuskan.",
    durationMin: 14,
    tags: ["pola", "fibonacci", "simetri", "alam"],
    blocks: [
      {
        type: "paragraph",
        html: "Coba perhatikan bunga matahari, sarang lebah, atau cangkang siput di pantai. Semuanya tampak berbeda, tetapi ada sesuatu yang sama: <strong>keteraturan</strong>. Sebelum kita bicara rumus, mari kita amati dulu pola-pola yang diam-diam ada di sekitar kita setiap hari.",
      },
      {
        type: "video",
        comp: "PolaAlam",
        title: "Video: Pola Tersembunyi di Alam",
        caption: "Fibonacci, simetri, dan tesselasi muncul berulang di alam tanpa ada yang menyuruhnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Sebelum ada rumus apa pun, jadilah pengamat. Hitung kelopak bunga di tamanmu: bunga lili biasanya 3, buttercup 5, delphinium 8, aster 13. Apakah kamu mulai merasakan ada barisan angka yang berulang? Tahan dulu rasa ingin tahumu, kita akan menyusurinya pelan-pelan.",
      },
      {
        type: "paragraph",
        html: "Ada tiga jenis pola yang paling sering muncul di alam. <strong>Fibonacci</strong>: setiap angka adalah jumlah dua angka sebelumnya (1, 1, 2, 3, 5, 8, 13, ...), terlihat pada susunan biji bunga matahari. <strong>Simetri</strong>: bentuk yang sama saat dicerminkan, seperti sayap kupu-kupu. <strong>Tesselasi</strong>: bentuk yang menutupi bidang tanpa celah, seperti sarang lebah berbentuk segi enam.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa lebah memilih segi enam?",
        html: "Sarang lebah tersusun dari sel-sel segi enam. Dari semua bentuk yang bisa menutupi bidang tanpa celah (segitiga, persegi, segi enam), <strong>segi enam memakai dinding paling sedikit untuk luas terbesar</strong>. Lebah tidak belajar geometri, tetapi alam menyeleksi pola yang paling hemat. Inilah matematika yang bekerja di balik layar.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Barisan Fibonacci: Setiap Suku Jumlah Dua Sebelumnya",
        unit: "nilai suku",
        source: "ilustrasi edukatif",
        note: "1, 1, 2, 3, 5, 8, 13, 21. Coba jumlahkan dua batang berurutan, hasilnya batang berikutnya.",
        data: [
          { label: "Suku 1", value: 1, color: "#34d399" },
          { label: "Suku 2", value: 1, color: "#34d399" },
          { label: "Suku 3", value: 2, color: "#60a5fa" },
          { label: "Suku 4", value: 3, color: "#60a5fa" },
          { label: "Suku 5", value: 5, color: "#a78bfa" },
          { label: "Suku 6", value: 8, color: "#a78bfa" },
          { label: "Suku 7", value: 13, color: "#f472b6" },
          { label: "Suku 8", value: 21, color: "#f472b6" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorFibonacci",
      },
      {
        type: "calcExercise",
        prompt: "Barisan Fibonacci: 1, 1, 2, 3, 5, 8, 13, ... Berapa suku berikutnya setelah 13?",
        answer: 21,
        solution: "Setiap suku adalah jumlah dua suku sebelumnya. Maka 8 + 13 = 21.",
        hint: "Jumlahkan dua angka terakhir yang kamu lihat.",
      },
      {
        type: "classifyExercise",
        prompt: "Pola alam berikut paling tepat masuk kelompok mana?",
        buckets: ["Simetri", "Fibonacci", "Tesselasi"],
        items: [
          { text: "Susunan biji pada bunga matahari", bucket: "Fibonacci" },
          { text: "Dua sayap kupu-kupu yang saling cermin", bucket: "Simetri" },
          { text: "Sel-sel segi enam pada sarang lebah", bucket: "Tesselasi" },
          { text: "Spiral pada cangkang siput yang membesar mengikuti 1,1,2,3,5", bucket: "Fibonacci" },
          { text: "Pantulan gunung di permukaan danau yang tenang", bucket: "Simetri" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan pola dengan contohnya di kehidupan nyata.",
        pairs: [
          { left: "Fibonacci", right: "Susunan spiral biji bunga matahari" },
          { left: "Simetri", right: "Bentuk wajah dan sayap kupu-kupu" },
          { left: "Tesselasi", right: "Ubin lantai segi enam tanpa celah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menanam pohon agar tidak saling menutupi cahaya",
        html: "Tanaman menyusun daun dengan sudut putar sekitar <strong>137,5 derajat</strong> setiap daun baru, dikenal sebagai sudut emas. Mengapa? Dengan sudut ini, daun ke-2 tidak menutupi daun ke-1, daun ke-3 tidak menutupi keduanya, dan seterusnya, sehingga setiap daun mendapat cahaya matahari maksimal. Sudut 137,5 derajat ini lahir dari rasio Fibonacci: jika kita ambil 8/13 putaran penuh (360 derajat), hasilnya sekitar 221 derajat, dan sisi pendeknya sekitar 139 derajat, mendekati sudut emas. Petani dan perancang taman vertikal memakai prinsip ini agar setiap tanaman tumbuh sehat tanpa berebut cahaya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir",
        html: "Setelah menjelajah, baru kita rumuskan: barisan Fibonacci adalah F(n) = F(n-1) + F(n-2), dengan F(1) = F(2) = 1. Inti pelajarannya bukan rumus itu sendiri, melainkan kesadaran bahwa <strong>menemukan dan menamai pola adalah jantung matematika</strong>. Alam tidak menghafal rumus, tetapi mengikuti keteraturan yang bisa kita baca.",
      },
      {
        type: "takeaways",
        items: [
          "Alam penuh pola: Fibonacci, simetri, dan tesselasi muncul berulang.",
          "Fibonacci: setiap suku adalah jumlah dua suku sebelumnya.",
          "Pola yang efisien (seperti segi enam) sering dipilih alam karena hemat.",
          "Kemampuan melihat pola lebih penting daripada menghafal rumusnya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Suku berikut dari 2, 3, 5, 8, 13 dalam barisan Fibonacci adalah?",
            options: ["18", "20", "21", "26"],
            answer: 2,
            explain: "8 + 13 = 21, karena setiap suku adalah jumlah dua suku sebelumnya.",
          },
          {
            q: "Sayap kupu-kupu yang kiri dan kanannya saling mencerminkan adalah contoh?",
            options: ["Tesselasi", "Simetri", "Fibonacci", "Acak"],
            answer: 1,
            explain: "Bentuk yang sama ketika dicerminkan disebut simetri.",
          },
          {
            q: "Mengapa sarang lebah berbentuk segi enam?",
            options: [
              "Karena segi enam paling indah",
              "Karena hemat dinding untuk luas terbesar tanpa celah",
              "Karena lebah belajar geometri",
              "Karena kebetulan saja",
            ],
            answer: 1,
            explain: "Segi enam menutupi bidang tanpa celah dengan dinding paling sedikit, jadi paling efisien.",
          },
          {
            q: "Pola di mana bentuk menutupi bidang tanpa celah disebut?",
            options: ["Simetri", "Fibonacci", "Tesselasi", "Spiral"],
            answer: 2,
            explain: "Tesselasi adalah pengubinan bidang tanpa celah atau tumpang tindih.",
          },
          {
            q: "Inti dari pelajaran tentang pola di alam adalah?",
            options: [
              "Menghafal angka Fibonacci",
              "Menemukan dan membaca keteraturan adalah jantung matematika",
              "Alam sengaja memakai rumus",
              "Pola hanya kebetulan tanpa makna",
            ],
            answer: 1,
            explain: "Matematika pada dasarnya adalah ilmu tentang pola dan keteraturan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "bahasa-semesta",
    levelId: "apa-itu-matematika",
    order: 3,
    title: "Matematika sebagai Bahasa Semesta",
    summary:
      "Orbit planet, gelombang suara, dan pertumbuhan tabungan semua bisa 'dibaca' dengan matematika. Kita susuri dulu ceritanya sebelum sampai ke aturannya.",
    durationMin: 15,
    tags: ["bahasa", "semesta", "gelombang", "pertumbuhan"],
    blocks: [
      {
        type: "paragraph",
        html: "Ketika kamu mendengar lagu, melihat bulan mengelilingi bumi, atau menonton uang tabungan bertambah, kamu sedang menyaksikan semesta 'berbicara'. Bahasanya bukan Indonesia atau Inggris, melainkan <strong>matematika</strong>. Mari kita dengarkan dulu beberapa 'kalimat' alam sebelum kita mengeja tata bahasanya.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Alam Ditulis dalam Bahasa Matematika",
        caption: "Galileo menyebut alam semesta sebagai kitab yang ditulis dalam bahasa matematika.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Jangan dulu mencari rumus. Cukup amati: bandul jam berayun dengan irama tetap, ombak datang berulang, dan dawai gitar bergetar membentuk gelombang. Apa kesamaan ketiganya? Semuanya <strong>berulang secara teratur</strong>. Pegang rasa penasaran ini, kita akan menelusurinya.",
      },
      {
        type: "paragraph",
        html: "Galileo Galilei pernah menulis bahwa alam semesta adalah sebuah buku besar, dan buku itu <strong>ditulis dalam bahasa matematika</strong>. Maksudnya: gerak planet, getaran suara, dan pertumbuhan makhluk hidup semuanya mengikuti pola yang bisa dituliskan sebagai hubungan antar-besaran. Matematika adalah alat untuk membaca dan meramalkan apa yang akan terjadi.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga 'kalimat' favorit semesta",
        html: "<strong>Orbit</strong>: planet bergerak mengikuti lintasan elips yang teratur, sehingga gerhana bisa diramalkan bertahun-tahun sebelumnya. <strong>Gelombang</strong>: suara dan cahaya naik-turun berulang; nada tinggi berarti gelombang lebih rapat. <strong>Pertumbuhan</strong>: populasi, uang berbunga, dan penyebaran kabar sering tumbuh secara berlipat (eksponensial).",
      },
      {
        type: "chart",
        variant: "line",
        title: "Gelombang Suara: Naik-Turun yang Berulang (ilustrasi)",
        unit: "simpangan",
        source: "ilustrasi edukatif",
        note: "Nilai bergerak naik-turun secara teratur, mendekati bentuk gelombang sinus.",
        data: [
          { label: "0", value: 0, color: "#60a5fa" },
          { label: "1", value: 7, color: "#60a5fa" },
          { label: "2", value: 10, color: "#60a5fa" },
          { label: "3", value: 7, color: "#60a5fa" },
          { label: "4", value: 0, color: "#60a5fa" },
          { label: "5", value: -7, color: "#60a5fa" },
          { label: "6", value: -10, color: "#60a5fa" },
          { label: "7", value: -7, color: "#60a5fa" },
          { label: "8", value: 0, color: "#60a5fa" },
        ],
      },
      {
        type: "chart",
        variant: "area",
        title: "Pertumbuhan Berlipat: Uang Berbunga 10% per Tahun (ilustrasi)",
        unit: "ribu rupiah",
        source: "ilustrasi edukatif",
        note: "Mulai 100 ribu, setiap tahun dikali 1,1. Bertambah makin cepat, bukan garis lurus.",
        data: [
          { label: "Tahun 0", value: 100, color: "#34d399" },
          { label: "Tahun 1", value: 110, color: "#34d399" },
          { label: "Tahun 2", value: 121, color: "#34d399" },
          { label: "Tahun 3", value: 133, color: "#34d399" },
          { label: "Tahun 4", value: 146, color: "#34d399" },
          { label: "Tahun 5", value: 161, color: "#34d399" },
        ],
      },
      {
        type: "widget",
        widget: "PenjelajahPola",
      },
      {
        type: "calcExercise",
        prompt: "Tabungan 100 ribu rupiah berbunga 10% per tahun. Berapa nilainya (dalam ribu rupiah) setelah 2 tahun?",
        answer: 121,
        tolerance: 0.5,
        suffix: " ribu",
        solution: "Tahun 1: 100 × 1,1 = 110. Tahun 2: 110 × 1,1 = 121. Inilah pertumbuhan berlipat, bukan tambah tetap.",
        hint: "Kalikan dengan 1,1 sebanyak dua kali, jangan hanya menambah 10 setiap tahun.",
      },
      {
        type: "classifyExercise",
        prompt: "Fenomena ini paling tepat dijelaskan dengan 'kalimat' semesta yang mana?",
        buckets: ["Orbit", "Gelombang", "Pertumbuhan"],
        items: [
          { text: "Gerhana matahari yang bisa diramalkan jauh hari", bucket: "Orbit" },
          { text: "Nada tinggi dan rendah pada gitar", bucket: "Gelombang" },
          { text: "Populasi bakteri yang berlipat tiap jam", bucket: "Pertumbuhan" },
          { text: "Pasang surut air laut akibat posisi bulan", bucket: "Orbit" },
          { text: "Saldo tabungan yang membesar makin cepat", bucket: "Pertumbuhan" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tokoh atau konsep dengan idenya.",
        pairs: [
          { left: "Galileo", right: "Alam ditulis dalam bahasa matematika" },
          { left: "Gelombang", right: "Naik-turun berulang seperti suara dan cahaya" },
          { left: "Eksponensial", right: "Tumbuh berlipat, makin lama makin cepat" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Meramalkan gerhana sebelum terjadi",
        html: "Pada 2 Juli 2019 terjadi gerhana matahari total di Amerika Selatan. Para astronom sudah tahu tanggal, jam, dan lokasinya bertahun-tahun sebelumnya. Bagaimana bisa? Karena gerak bumi, bulan, dan matahari mengikuti orbit yang teratur dan bisa dituliskan secara matematis. Bulan butuh sekitar 29,5 hari untuk satu fase, dan pola bayangan berulang dalam siklus Saros sekitar 18 tahun 11 hari. Dengan membaca 'bahasa' orbit ini, manusia bisa meramal langit dengan ketelitian sampai hitungan menit. Inilah bukti bahwa semesta benar-benar bisa dibaca.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir",
        html: "Setelah menjelajah, baru kita simpulkan: <strong>matematika adalah bahasa untuk menuliskan hubungan dan meramalkan perubahan</strong>. Pertumbuhan berlipat ditulis sebagai N = N0 × r^t, gelombang ditulis sebagai fungsi naik-turun berulang, dan orbit sebagai lintasan yang teratur. Yang penting bukan menghafal lambangnya, tetapi menyadari bahwa alam memang bisa 'dibicarakan'.",
      },
      {
        type: "takeaways",
        items: [
          "Galileo: alam semesta ditulis dalam bahasa matematika.",
          "Orbit, gelombang, dan pertumbuhan adalah pola yang bisa dituliskan.",
          "Pertumbuhan berlipat (eksponensial) berbeda dari tambah tetap.",
          "Karena bisa dituliskan, fenomena seperti gerhana bisa diramalkan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Siapa yang menyebut alam ditulis dalam bahasa matematika?",
            options: ["Newton", "Galileo", "Einstein", "Pythagoras"],
            answer: 1,
            explain: "Galileo Galilei menuliskan gagasan terkenal ini.",
          },
          {
            q: "Tabungan 200 ribu berbunga 10% per tahun setelah 1 tahun menjadi?",
            options: ["210 ribu", "220 ribu", "200 ribu", "240 ribu"],
            answer: 1,
            explain: "200 × 1,1 = 220 ribu.",
          },
          {
            q: "Mengapa gerhana bisa diramalkan jauh hari?",
            options: [
              "Karena kebetulan",
              "Karena gerak orbit teratur dan bisa dituliskan secara matematis",
              "Karena ditebak para ahli",
              "Karena bulan diam",
            ],
            answer: 1,
            explain: "Orbit yang teratur memungkinkan perhitungan yang sangat akurat.",
          },
          {
            q: "Suara dan cahaya paling tepat digambarkan sebagai?",
            options: ["Garis lurus", "Gelombang yang naik-turun berulang", "Titik diam", "Lingkaran"],
            answer: 1,
            explain: "Keduanya merambat sebagai gelombang yang berulang teratur.",
          },
          {
            q: "Pertumbuhan eksponensial berarti?",
            options: [
              "Bertambah dengan jumlah tetap tiap waktu",
              "Bertambah berlipat sehingga makin cepat",
              "Selalu berkurang",
              "Tidak berubah",
            ],
            answer: 1,
            explain: "Eksponensial berarti dikali faktor tetap tiap periode, jadi makin lama makin cepat.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "berpikir-matematis",
    levelId: "apa-itu-matematika",
    order: 4,
    title: "Berpikir Matematis: Bertanya, Menebak, Menguji",
    summary:
      "Matematika bukan kumpulan rumus, melainkan cara berpikir: mengamati, menebak aturan, mengujinya, lalu menyimpulkan. Kita praktikkan dulu prosesnya.",
    durationMin: 14,
    tags: ["berpikir", "proses", "dugaan", "pembuktian"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan kamu sedang melipat selembar kertas menjadi dua, lalu dua lagi, lalu dua lagi. Berapa banyak lapisan setelah 7 lipatan? Daripada menebak asal, seorang yang berpikir matematis akan mengamati polanya pelan-pelan. Inilah inti pelajaran kita: bukan menghafal jawaban, melainkan menjalani <strong>proses berpikir</strong> untuk menemukannya.",
      },
      {
        type: "video",
        comp: "BerpikirMatematis",
        title: "Video: Cara Berpikir Matematis",
        caption: "Empat langkah penyelidik: amati, tebak, uji, lalu simpulkan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Mari jalani empat langkah seperti seorang penyelidik: <strong>amati</strong> beberapa contoh, <strong>tebak</strong> aturan umumnya (membuat dugaan), <strong>uji</strong> dugaan itu pada contoh baru, lalu <strong>simpulkan</strong> jika selalu cocok. Kita belum butuh rumus, cukup rasa ingin tahu dan kejujuran untuk menguji.",
      },
      {
        type: "paragraph",
        html: "Coba pola lipatan kertas: 1 lipatan jadi 2 lapis, 2 lipatan jadi 4 lapis, 3 lipatan jadi 8 lapis. Amati: 2, 4, 8, ... Setiap lipatan menggandakan jumlah lapis. <strong>Dugaan</strong> kita: jumlah lapis adalah 2 dikali dirinya sendiri sebanyak jumlah lipatan. <strong>Uji</strong>: 4 lipatan harusnya 16 lapis. Coba lipat sungguhan, dan benar 16. Dugaan bertahan, kita makin yakin.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dugaan bukan kebenaran (sampai diuji)",
        html: "Berpikir matematis menuntut kejujuran. Sebuah dugaan bisa cocok untuk 5 contoh pertama tetapi gagal di contoh ke-6. Karena itu seorang matematikawan tidak berhenti pada 'sepertinya benar', tetapi terus menguji dan, kalau bisa, <strong>membuktikan</strong> mengapa pola itu pasti berlaku.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Melipat Kertas: Lapisan Menggandakan Diri (ilustrasi)",
        unit: "jumlah lapis",
        source: "ilustrasi edukatif",
        note: "1 lipatan jadi 2, 2 lipatan jadi 4, 3 lipatan jadi 8. Polanya menggandakan diri.",
        data: [
          { label: "0 lipatan", value: 1, color: "#fbbf24" },
          { label: "1 lipatan", value: 2, color: "#34d399" },
          { label: "2 lipatan", value: 4, color: "#34d399" },
          { label: "3 lipatan", value: 8, color: "#60a5fa" },
          { label: "4 lipatan", value: 16, color: "#60a5fa" },
          { label: "5 lipatan", value: 32, color: "#a78bfa" },
        ],
      },
      {
        type: "widget",
        widget: "PenjelajahPola",
      },
      {
        type: "calcExercise",
        prompt: "Mengikuti pola lipatan kertas (2, 4, 8, 16, ...), berapa jumlah lapis setelah 7 lipatan?",
        answer: 128,
        solution: "Setiap lipatan menggandakan lapisan: 2, 4, 8, 16, 32, 64, 128. Setelah 7 lipatan ada 128 lapis.",
        hint: "Gandakan terus mulai dari 2 sebanyak 7 kali, atau hitung 2 pangkat 7.",
      },
      {
        type: "classifyExercise",
        prompt: "Kalimat ini termasuk langkah berpikir matematis yang mana?",
        buckets: ["Mengamati", "Menebak (dugaan)", "Menguji"],
        items: [
          { text: "'Saya lihat hasilnya 2, 4, 8, ...'", bucket: "Mengamati" },
          { text: "'Mungkin aturannya menggandakan setiap kali'", bucket: "Menebak (dugaan)" },
          { text: "'Mari cek apakah lipatan ke-4 benar 16'", bucket: "Menguji" },
          { text: "'Aku catat tinggi tanaman tiap hari'", bucket: "Mengamati" },
          { text: "'Coba dugaanku pada contoh baru yang belum kupakai'", bucket: "Menguji" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan langkah berpikir matematis dengan pertanyaan pemandunya.",
        pairs: [
          { left: "Mengamati", right: "Apa yang berulang atau berubah di sini?" },
          { left: "Menebak", right: "Kira-kira apa aturan umumnya?" },
          { left: "Menguji", right: "Apakah dugaanku cocok pada contoh baru?" },
          { left: "Menyimpulkan", right: "Bisakah aku yakin ini berlaku selalu?" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Si pemilik warung menebak stok",
        html: "Bu Sari mengamati penjualan es teh: Senin 20 gelas, Selasa 24, Rabu 28, Kamis 32. Ia <strong>mengamati</strong> selisihnya selalu naik 4. Ia <strong>menebak</strong> Jumat akan terjual sekitar 36 gelas. Ia <strong>menguji</strong> dengan menyiapkan bahan untuk 36, dan ternyata laku 35, sangat dekat. Ia <strong>menyimpulkan</strong> pola 'naik 4 per hari' cukup andal untuk merencanakan stok minggu ini, sambil tetap waspada kalau cuaca berubah. Tanpa rumus rumit, cara berpikir matematis membantunya tidak kehabisan stok dan tidak membuang bahan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir",
        html: "Setelah menjalani prosesnya, baru kita rumuskan: <strong>berpikir matematis = mengamati, menebak (membuat dugaan), menguji, lalu menyimpulkan atau menggeneralisasi</strong>. Rumus seperti jumlah lapis = 2^n hanyalah hasil akhir dari proses ini. Yang membuat seseorang 'pandai matematika' bukan banyaknya rumus yang dihafal, melainkan kebiasaan bertanya dan menguji.",
      },
      {
        type: "takeaways",
        items: [
          "Berpikir matematis adalah proses, bukan kumpulan rumus hafalan.",
          "Empat langkah: amati, tebak (dugaan), uji, lalu simpulkan.",
          "Dugaan harus diuji; cocok di beberapa contoh belum tentu selalu benar.",
          "Cara berpikir ini berguna di kehidupan nyata, dari stok warung sampai sains.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Urutan langkah berpikir matematis yang tepat adalah?",
            options: [
              "Menebak, mengamati, menyimpulkan, menguji",
              "Mengamati, menebak, menguji, menyimpulkan",
              "Menguji, menyimpulkan, mengamati, menebak",
              "Menyimpulkan, menguji, menebak, mengamati",
            ],
            answer: 1,
            explain: "Kita mengamati dulu, membuat dugaan, mengujinya, baru menyimpulkan.",
          },
          {
            q: "Pola lipatan 2, 4, 8, 16, ... setelah 6 lipatan menghasilkan?",
            options: ["32", "48", "64", "128"],
            answer: 2,
            explain: "Menggandakan: 2, 4, 8, 16, 32, 64. Lipatan ke-6 menghasilkan 64 lapis.",
          },
          {
            q: "Sebuah dugaan yang cocok untuk 5 contoh pertama berarti?",
            options: [
              "Pasti benar selamanya",
              "Boleh langsung jadi rumus tanpa diuji lagi",
              "Masih perlu diuji lebih lanjut sebelum disimpulkan",
              "Pasti salah",
            ],
            answer: 2,
            explain: "Cocok di beberapa contoh belum menjamin selalu benar; perlu diuji dan dibuktikan.",
          },
          {
            q: "Membuat 'dugaan' dalam berpikir matematis artinya?",
            options: [
              "Menjawab asal-asalan",
              "Menebak aturan umum berdasarkan pengamatan",
              "Menghafal rumus",
              "Menghitung dengan kalkulator",
            ],
            answer: 1,
            explain: "Dugaan adalah tebakan aturan umum yang lahir dari pengamatan, lalu diuji.",
          },
          {
            q: "Apa yang membuat seseorang dianggap 'pandai matematika'?",
            options: [
              "Banyak menghafal rumus",
              "Cepat berhitung tanpa berpikir",
              "Terbiasa bertanya, menebak, dan menguji",
              "Memiliki kalkulator mahal",
            ],
            answer: 2,
            explain: "Inti matematika adalah cara berpikir menyelidik, bukan banyaknya rumus yang dihafal.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "lambang-mewakili",
    levelId: "apa-itu-matematika",
    order: 5,
    title: "Lambang yang Mewakili: Awal Mula Aljabar",
    summary:
      "Kita mainkan dulu sebuah trik tebak angka yang selalu berhasil, lalu menemukan bahwa satu huruf bisa mewakili semua bilangan sekaligus.",
    durationMin: 13,
    tags: ["aljabar", "lambang", "generalisasi", "abstraksi"],
    blocks: [
      {
        type: "paragraph",
        html: "Coba ikuti permainan ini di kepalamu. Pikirkan sebuah bilangan, jangan beri tahu siapa pun. Tambahkan 4. Kalikan hasilnya dengan 2. Kurangi 6. Bagi 2. Lalu kurangi bilangan yang pertama kamu pikirkan. Berapa pun bilangan awalmu, aku berani menebak hasil akhirmu adalah <strong>1</strong>. Bagaimana mungkin aku tahu tanpa melihat angkamu? Ayo selidiki dulu.",
      },
      {
        type: "video",
        comp: "BerpikirMatematis",
        title: "Video: Cara Berpikir Matematis",
        caption: "Amati, tebak, uji, lalu simpulkan. Trik tebak angka pun bisa dibongkar dengan cara ini.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Jangan langsung percaya, ayo uji. Mulai dari 3: tambah 4 jadi 7, kali 2 jadi 14, kurangi 6 jadi 8, bagi 2 jadi 4, kurangi 3 jadi <strong>1</strong>. Coba lagi dari 20: 24, lalu 48, lalu 42, lalu 21, kurangi 20 jadi <strong>1</strong>. Selalu 1. Tahan rasa penasaranmu, kita akan membongkar rahasianya.",
      },
      {
        type: "widget",
        widget: "PenjelajahPola",
      },
      {
        type: "paragraph",
        html: "Rahasianya muncul saat kita berhenti memakai angka tertentu dan memakai <strong>lambang</strong>. Sebut saja bilangan awalmu 'n', yang bisa berarti angka berapa pun. Tambah 4 menjadi n+4. Kali 2 menjadi 2n+8. Kurangi 6 menjadi 2n+2. Bagi 2 menjadi n+1. Kurangi n, dan tersisalah <strong>1</strong>. Karena n hilang di langkah terakhir, hasilnya tidak pernah bergantung pada angka awalmu.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Satu huruf mewakili semua bilangan",
        html: "Inilah lompatan besar: dengan menulis 'n', kita tidak lagi bicara tentang satu angka, melainkan <strong>semua angka sekaligus</strong>. Itulah inti aljabar. Sebuah huruf menjadi wakil dari tak terhingga banyak bilangan, sehingga satu pernyataan bisa membuktikan pola untuk seluruhnya.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Satu Rumus, Tak Terbatas Jawaban: Keliling = 4 x sisi (ilustrasi)",
        unit: "keliling (cm)",
        source: "ilustrasi edukatif",
        note: "Dengan satu lambang sisi, rumus 4 x sisi langsung menjawab keliling untuk persegi ukuran berapa pun. Itulah hemat dan kuatnya lambang.",
        data: [
          { label: "sisi 1", value: 4, color: "#34d399" },
          { label: "sisi 2", value: 8, color: "#34d399" },
          { label: "sisi 3", value: 12, color: "#60a5fa" },
          { label: "sisi 4", value: 16, color: "#60a5fa" },
          { label: "sisi 5", value: 20, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Pilih angka 10. Tambah 4, kalikan 2, kurangi 6, bagi 2, lalu kurangi angka awal (10). Berapa hasil akhirnya?",
        answer: 1,
        solution:
          "10 tambah 4 jadi 14, kali 2 jadi 28, kurangi 6 jadi 22, bagi 2 jadi 11, kurangi 10 jadi <strong>1</strong>. Dengan lambang: (((n+4) x 2) - 6) : 2 - n selalu menjadi 1.",
        hint: "Ikuti langkahnya satu per satu, atau ganti n dengan 10 pada rumusnya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan rumus keliling persegi = 4 x sisi, berapa keliling persegi yang panjang sisinya 9 cm?",
        answer: 36,
        suffix: " cm",
        solution:
          "Ganti lambang sisi dengan 9: keliling = 4 x 9 = <strong>36 cm</strong>. Satu rumus dipakai untuk sembarang ukuran sisi.",
        hint: "Kalikan 4 dengan panjang sisinya.",
      },
      {
        type: "classifyExercise",
        prompt: "Pernyataan ini berlaku untuk semua bilangan (umum) atau hanya satu kasus (khusus)?",
        buckets: ["Pernyataan umum", "Pernyataan khusus"],
        items: [
          { text: "3 + 5 = 8", bucket: "Pernyataan khusus" },
          { text: "Sebuah bilangan ditambah nol hasilnya bilangan itu sendiri", bucket: "Pernyataan umum" },
          { text: "7 x 2 = 14", bucket: "Pernyataan khusus" },
          { text: "Dua bilangan ganjil dijumlahkan hasilnya selalu genap", bucket: "Pernyataan umum" },
          { text: "Sebuah bilangan dikali satu hasilnya tetap bilangan itu", bucket: "Pernyataan umum" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan kalimat sehari-hari dengan lambang aljabarnya (n adalah sebuah bilangan).",
        pairs: [
          { left: "Sebuah bilangan ditambah 5", right: "n + 5" },
          { left: "Dua kali sebuah bilangan", right: "2 x n" },
          { left: "Sebuah bilangan dikurangi 3", right: "n - 3" },
          { left: "Setengah dari sebuah bilangan", right: "n : 2" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Al-Khwarizmi dan lahirnya kata aljabar",
        html: "Sekitar tahun 820 Masehi di Baghdad, seorang ilmuwan bernama <strong>Al-Khwarizmi</strong> menulis sebuah kitab berjudul yang memuat kata <strong>al-jabr</strong>, bermakna 'menggenapkan' atau memulihkan keseimbangan. Dari kata itulah lahir istilah <strong>aljabar</strong>, sedangkan namanya sendiri menurunkan kata <strong>algoritma</strong>. Gagasan besarnya sederhana namun mengubah dunia: alih-alih menyelesaikan satu soal demi satu soal, ia memakai lambang untuk menyelesaikan seluruh kelompok soal sekaligus. Hari ini lambang itu ada di balik kalkulator, mesin pencari, dan setiap program komputer.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir",
        html: "Setelah membongkar triknya, baru kita simpulkan: <strong>aljabar adalah memakai lambang untuk mewakili bilangan, sehingga pola umum dapat ditulis dan dibuktikan untuk semua kasus sekaligus</strong>. Lambang bukan untuk menyulitkan, melainkan untuk berbicara tentang tak terhingga banyak bilangan dengan satu kalimat singkat.",
      },
      {
        type: "takeaways",
        items: [
          "Trik tebak angka selalu berhasil karena langkahnya menyederhana menjadi pola tetap.",
          "Sebuah huruf seperti n bisa mewakili sembarang bilangan, bahkan semua bilangan sekaligus.",
          "Aljabar memungkinkan kita membuktikan pola umum, bukan hanya satu contoh.",
          "Kata aljabar berasal dari kitab Al-Khwarizmi sekitar tahun 820 Masehi.",
          "Lambang membuat matematika ringkas dan kuat, bukan rumit tanpa makna.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa trik tebak angka selalu menghasilkan 1?",
            options: [
              "Karena kebetulan saja",
              "Karena langkahnya menyederhana menjadi n + 1 lalu dikurangi n",
              "Karena angka awal harus selalu sama",
              "Karena 1 adalah angka ajaib",
            ],
            answer: 1,
            explain: "Dengan lambang, hasil akhirnya adalah n + 1 dikurangi n, yang selalu 1.",
          },
          {
            q: "Dalam aljabar, huruf seperti n mewakili?",
            options: [
              "Hanya angka 1",
              "Sembarang bilangan, bahkan semua bilangan sekaligus",
              "Sebuah huruf biasa tanpa makna",
              "Selalu bilangan genap",
            ],
            answer: 1,
            explain: "Lambang n menjadi wakil dari bilangan apa pun.",
          },
          {
            q: "Manakah yang merupakan pernyataan paling umum?",
            options: [
              "4 + 4 = 8",
              "Sebuah bilangan ditambah nol hasilnya bilangan itu sendiri",
              "9 x 1 = 9",
              "10 - 3 = 7",
            ],
            answer: 1,
            explain: "Pernyataan itu berlaku untuk semua bilangan, bukan satu kasus saja.",
          },
          {
            q: "'Dua kali sebuah bilangan, lalu ditambah 3' ditulis sebagai?",
            options: ["2 + n + 3", "2 x n + 3", "n + 2 + 3", "3 x n + 2"],
            answer: 1,
            explain: "Dua kali bilangan adalah 2 x n, lalu ditambah 3.",
          },
          {
            q: "Kata 'aljabar' berasal dari?",
            options: [
              "Nama sebuah kota di Yunani",
              "Kitab al-jabr karya Al-Khwarizmi sekitar tahun 820 Masehi",
              "Bahasa Latin untuk angka",
              "Nama seorang raja",
            ],
            answer: 1,
            explain: "Kata al-jabr dalam kitab Al-Khwarizmi menurunkan istilah aljabar.",
          },
        ],
      },
    ],
  },
];
