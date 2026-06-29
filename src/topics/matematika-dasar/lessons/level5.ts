import type { Lesson } from "../../../types";

export const level5: Lesson[] = [
  // ============================================================
  {
    id: "peluang-ketidakpastian",
    levelId: "bahasa-semesta",
    order: 1,
    title: "Peluang: Menjinakkan Ketidakpastian",
    summary:
      "Sebelum menulis rumus peluang, kita lempar dadu dulu berkali-kali dan amati ke mana angkanya menuju.",
    durationMin: 12,
    tags: ["peluang", "probabilitas", "ketidakpastian", "data"],
    blocks: [
      {
        type: "paragraph",
        html: "Akankah besok hujan? Apakah dadu ini akan menunjukkan angka genap? Dunia penuh ketidakpastian. Matematika tidak meramal masa depan dengan pasti, tetapi bisa mengukur seberapa <strong>mungkin</strong> sesuatu terjadi. Ayo kita lempar dadu dulu.",
      },
      {
        type: "video",
        comp: "PeluangVideo",
        title: "Video: Menjinakkan Ketidakpastian",
        caption: "Melempar dadu berkali-kali menuntun kita menemukan rumus peluang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Sebuah dadu punya 6 sisi: 1, 2, 3, 4, 5, 6. Berapa sisi yang genap? Ada 3 (yaitu 2, 4, 6). Kalau kamu melempar berkali-kali, kira-kira berapa bagian yang muncul genap? Coba dulu dengan simulator di bawah sebelum menyimpulkan.",
      },
      {
        type: "widget",
        widget: "SimulatorPeluang",
      },
      {
        type: "chart",
        variant: "line",
        title: "Frekuensi Genap Mendekati 0,5 Seiring Lemparan (ilustrasi)",
        unit: "proporsi genap",
        source: "ilustrasi edukatif",
        note: "Makin banyak lemparan, hasilnya makin stabil mendekati peluang teoritis 0,5.",
        data: [
          { label: "10x", value: 0.4, color: "#60a5fa" },
          { label: "50x", value: 0.46, color: "#60a5fa" },
          { label: "200x", value: 0.49, color: "#34d399" },
          { label: "1000x", value: 0.5, color: "#34d399" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Pada satu dadu, berapa peluang muncul angka lebih dari 4 (yaitu 5 atau 6)? Tulis dalam persen.",
        answer: 33.3,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "Ada 2 hasil yang diharapkan (5 dan 6) dari 6 kemungkinan. Peluang = 2/6 = 0,333 atau sekitar <strong>33,3%</strong>.",
        hint: "Hitung berapa sisi yang lebih dari 4, lalu bagi dengan 6.",
      },
      {
        type: "classifyExercise",
        prompt: "Kejadian ini mustahil, mungkin, atau pasti?",
        buckets: ["Mustahil", "Mungkin", "Pasti"],
        items: [
          { text: "Dadu menunjukkan angka 7", bucket: "Mustahil" },
          { text: "Dadu menunjukkan angka genap", bucket: "Mungkin" },
          { text: "Dadu menunjukkan angka antara 1 sampai 6", bucket: "Pasti" },
          { text: "Koin yang dilempar jatuh pada sisi gambar", bucket: "Mungkin" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ramalan cuaca 70 persen hujan",
        html: "Saat prakiraan menyebut 'peluang hujan 70 persen', artinya pada hari-hari dengan kondisi atmosfer serupa, sekitar 7 dari 10 kali turun hujan. Itu bukan tebakan asal. Itu rasio dari banyak pengamatan. Sama seperti dadu, makin banyak data, makin tepat peluangnya membantu kita mengambil keputusan, misalnya membawa payung atau tidak.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah melempar dan mengamati, polanya jelas. Barulah kita tuliskan: <strong>Peluang = banyaknya kejadian yang diharapkan ÷ banyaknya semua kemungkinan</strong>. Nilainya antara 0 (mustahil) dan 1 (pasti).",
      },
      {
        type: "takeaways",
        items: [
          "Peluang mengukur seberapa mungkin sesuatu terjadi, bernilai 0 sampai 1.",
          "Makin banyak percobaan, frekuensi nyata mendekati peluang teoritis.",
          "Peluang = kejadian diharapkan dibagi semua kemungkinan.",
          "Peluang membantu mengambil keputusan di tengah ketidakpastian.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Nilai peluang selalu berada di antara?",
            options: ["0 dan 100", "0 dan 1", "1 dan 10", "minus 1 dan 1"],
            answer: 1,
            explain: "Peluang berkisar dari 0 (mustahil) sampai 1 (pasti).",
          },
          {
            q: "Peluang muncul angka genap pada satu dadu adalah?",
            options: ["1/6", "1/2", "1/3", "2/3"],
            answer: 1,
            explain: "Ada 3 sisi genap dari 6, jadi 3/6 = 1/2.",
          },
          {
            q: "Makin banyak lemparan dadu, frekuensi nyata akan?",
            options: [
              "Makin jauh dari peluang teoritis",
              "Mendekati peluang teoritis",
              "Selalu tepat sejak awal",
              "Acak tak menentu selamanya",
            ],
            answer: 1,
            explain: "Inilah hukum bilangan besar: frekuensi mendekati peluang teoritis.",
          },
          {
            q: "'Peluang hujan 70 persen' paling tepat dimaknai?",
            options: [
              "Pasti hujan",
              "Dari kondisi serupa, sekitar 7 dari 10 kali hujan",
              "Hujan selama 70 persen hari",
              "Tidak akan hujan",
            ],
            answer: 1,
            explain: "Ini rasio dari banyak pengamatan kondisi serupa.",
          },
          {
            q: "Rumus peluang sebuah kejadian adalah?",
            options: [
              "Semua kemungkinan dikali kejadian diharapkan",
              "Kejadian diharapkan dibagi semua kemungkinan",
              "Semua kemungkinan dibagi kejadian diharapkan",
              "Kejadian diharapkan ditambah semua kemungkinan",
            ],
            answer: 1,
            explain: "Peluang = kejadian diharapkan ÷ semua kemungkinan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "statistika-membaca-dunia",
    levelId: "bahasa-semesta",
    order: 2,
    title: "Statistika: Membaca Dunia lewat Data",
    summary:
      "Sebelum menulis rumus rata-rata, kita kumpulkan data nyata dulu lalu cari satu angka yang mewakili semuanya.",
    durationMin: 13,
    tags: ["statistika", "rata-rata", "median", "modus", "data"],
    blocks: [
      {
        type: "paragraph",
        html: "Berapa nilai ulangan kelasmu pada umumnya? Berapa tinggi badan rata-rata teman sekelas? Kita sering ingin meringkas banyak angka menjadi <strong>satu angka</strong> yang mewakili keseluruhan. Statistika adalah cara matematika membaca dunia lewat data. Ayo kumpulkan datanya dulu.",
      },
      {
        type: "video",
        comp: "StatistikaVideo",
        title: "Video: Membaca Dunia lewat Data",
        caption: "Dari sekumpulan angka yang berserakan, muncul rata-rata, median, dan modus yang meringkasnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan nilai ulangan lima siswa: 60, 70, 80, 90, 100. Kalau kamu harus menyebut <em>satu</em> angka untuk menggambarkan kelas ini, angka berapa yang kamu pilih? Coba jumlahkan semua lalu bagi dengan banyaknya siswa, dan amati polanya sebelum kita beri nama.",
      },
      {
        type: "widget",
        widget: "SimulatorStatistik",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga cara meringkas data",
        html: "Ada tiga 'utusan' yang sering mewakili sekumpulan data: <strong>rata-rata</strong> (titik keseimbangan dari semua nilai), <strong>median</strong> (nilai yang tepat di tengah setelah diurutkan), dan <strong>modus</strong> (nilai yang paling sering muncul). Masing-masing menceritakan sisi yang berbeda.",
      },
      {
        type: "paragraph",
        html: "Coba urutkan nilai 60, 70, 80, 90, 100. Nilai tengahnya adalah 80, itulah median. Sekarang lihat data lain: 70, 80, 80, 80, 90. Nilai 80 muncul paling sering, itulah modus. Satu kumpulan data bisa diringkas dari beberapa sudut pandang.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Saat Ada Pencilan, Rata-rata Tertarik tapi Median Bertahan (ilustrasi)",
        unit: "juta rupiah",
        source: "ilustrasi edukatif",
        note: "Pendapatan lima keluarga: 4, 5, 6, 7, 50. Satu keluarga sangat kaya menarik rata-rata ke 14,4, padahal median (nilai tengah) tetap 6. Median lebih mewakili kebanyakan keluarga.",
        data: [
          { label: "Keluarga 1", value: 4, color: "#60a5fa" },
          { label: "Keluarga 2", value: 5, color: "#60a5fa" },
          { label: "Keluarga 3", value: 6, color: "#34d399" },
          { label: "Keluarga 4", value: 7, color: "#60a5fa" },
          { label: "Keluarga 5", value: 50, color: "#f43f5e" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Tinggi badan lima teman: 150, 155, 160, 165, 170 cm. Berapa tinggi badan rata-ratanya?",
        answer: 160,
        tolerance: 0.5,
        suffix: " cm",
        solution:
          "Jumlahkan semua: 150 + 155 + 160 + 165 + 170 = 800. Lalu bagi dengan banyak data, yaitu 5. Hasilnya 800 ÷ 5 = <strong>160 cm</strong>.",
        hint: "Jumlahkan semua tinggi, lalu bagi dengan banyaknya orang (5).",
      },
      {
        type: "calcExercise",
        prompt:
          "Data nilai: 70, 80, 80, 80, 90. Berapa modus (nilai yang paling sering muncul)?",
        answer: 80,
        tolerance: 0,
        solution:
          "Nilai 80 muncul tiga kali, lebih sering daripada nilai lain. Jadi modusnya adalah <strong>80</strong>.",
        hint: "Cari nilai yang paling banyak muncul.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah statistika dengan maknanya.",
        pairs: [
          { left: "Rata-rata", right: "Jumlah semua data dibagi banyaknya data" },
          { left: "Median", right: "Nilai tepat di tengah setelah data diurutkan" },
          { left: "Modus", right: "Nilai yang paling sering muncul" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Rata-rata uang jajan sebulan",
        html: "Dalam satu minggu, lima hari sekolah, uang jajan harian seorang siswa: Rp10.000, Rp12.000, Rp8.000, Rp15.000, dan Rp10.000. Jumlahnya Rp55.000. Dibagi 5 hari, rata-ratanya Rp11.000 per hari. Dengan satu angka ini, orang tua bisa memperkirakan kebutuhan sebulan tanpa harus menghafal setiap nominal harian. Itulah kekuatan data yang diringkas.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir",
        html: "Setelah mengumpulkan dan menjumlahkan data, polanya jelas. Barulah kita tuliskan: <strong>rata-rata = jumlah data ÷ banyak data</strong>. Satu angka yang menjadi titik keseimbangan dari semuanya.",
      },
      {
        type: "takeaways",
        items: [
          "Statistika meringkas banyak angka menjadi satu angka yang mewakili.",
          "Rata-rata adalah titik keseimbangan; median adalah nilai tengah; modus adalah yang paling sering muncul.",
          "Rata-rata = jumlah data dibagi banyak data.",
          "Satu kumpulan data bisa dibaca dari beberapa sudut pandang sekaligus.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rata-rata dari data 60, 70, 80, 90, 100 adalah?",
            options: ["75", "80", "85", "90"],
            answer: 1,
            explain: "Jumlahnya 400, dibagi 5 data menghasilkan 80.",
          },
          {
            q: "Median dari data terurut 5, 7, 8, 10, 12 adalah?",
            options: ["7", "8", "10", "8,4"],
            answer: 1,
            explain: "Nilai tepat di tengah dari lima data terurut adalah 8.",
          },
          {
            q: "Modus dari data 3, 4, 4, 4, 7, 9 adalah?",
            options: ["3", "4", "7", "9"],
            answer: 1,
            explain: "Nilai 4 muncul paling sering, yaitu tiga kali.",
          },
          {
            q: "Rumus rata-rata adalah?",
            options: [
              "Banyak data dibagi jumlah data",
              "Jumlah data dibagi banyak data",
              "Jumlah data dikali banyak data",
              "Nilai tengah dari data terurut",
            ],
            answer: 1,
            explain: "Rata-rata = jumlah data ÷ banyak data.",
          },
          {
            q: "Mengapa kita meringkas data menjadi satu angka?",
            options: [
              "Agar data menjadi lebih banyak",
              "Agar mudah membaca dan mengambil keputusan",
              "Agar nilai aslinya hilang",
              "Agar perhitungan menjadi salah",
            ],
            answer: 1,
            explain: "Satu angka ringkasan memudahkan kita memahami dan memutuskan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pertumbuhan-eksponensial",
    levelId: "bahasa-semesta",
    order: 3,
    title: "Pertumbuhan Eksponensial dan Bunga Majemuk",
    summary:
      "Sebelum menulis rumus bunga majemuk, kita kalikan berulang dulu dan lihat betapa cepatnya angka meledak.",
    durationMin: 14,
    tags: ["eksponensial", "bunga majemuk", "pertumbuhan", "data"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan selembar kertas dilipat berkali-kali, atau satu kabar yang diteruskan ke dua orang, lalu masing-masing meneruskan ke dua orang lagi. Mula-mula terlihat lambat, tetapi tiba-tiba angkanya meledak. Inilah pertumbuhan eksponensial. Ayo kita kalikan berulang dulu dan amati polanya.",
      },
      {
        type: "video",
        comp: "PertumbuhanMajemuk",
        title: "Video: Ketika Angka Berlipat Ganda",
        caption: "Dari perkalian berulang yang sederhana, lahir ledakan pertumbuhan yang mengejutkan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Mulai dari angka 1. Kalikan 2 terus menerus: 1, 2, 4, 8, 16, 32, 64... Setelah 10 langkah, kamu sudah di 1.024. Bandingkan dengan menambah 2 setiap langkah: 1, 3, 5, 7, 9... yang hanya sampai 21. Coba mainkan simulator di bawah sebelum kita simpulkan.",
      },
      {
        type: "widget",
        widget: "SimulatorBungaMajemuk",
      },
      {
        type: "callout",
        tone: "info",
        title: "Linear vs eksponensial",
        html: "Pertumbuhan <strong>linear</strong> menambah jumlah yang sama setiap periode (misalnya +2). Pertumbuhan <strong>eksponensial</strong> mengalikan dengan faktor yang sama setiap periode (misalnya ×2). Awalnya keduanya mirip, tetapi eksponensial dengan cepat meninggalkan linear jauh di belakang.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Eksponensial (×2 tiap langkah): Mula-mula Datar lalu Meledak (ilustrasi)",
        unit: "nilai",
        source: "ilustrasi edukatif",
        note: "Mengalikan 2 tiap langkah: 1, 2, 4, 8, 16, 32, 64. Sebagai pembanding, pertumbuhan linear +2 hanya sampai 13 di langkah ke-6. Kurva yang melengkung curam itulah ciri eksponensial.",
        data: [
          { label: "Langkah 0", value: 1, color: "#f43f5e" },
          { label: "Langkah 1", value: 2, color: "#f43f5e" },
          { label: "Langkah 2", value: 4, color: "#f43f5e" },
          { label: "Langkah 3", value: 8, color: "#f43f5e" },
          { label: "Langkah 4", value: 16, color: "#f43f5e" },
          { label: "Langkah 5", value: 32, color: "#f43f5e" },
          { label: "Langkah 6", value: 64, color: "#f43f5e" },
        ],
      },
      {
        type: "chart",
        variant: "bar",
        title: "Tabungan Rp1.000.000 Bunga Majemuk 10% per Tahun (ilustrasi)",
        unit: "rupiah",
        source: "ilustrasi edukatif",
        note: "Setiap tahun saldo dikali 1,1. Bunga ikut berbunga, jadi pertumbuhannya makin curam.",
        data: [
          { label: "Tahun 0", value: 1000000, color: "#34d399" },
          { label: "Tahun 1", value: 1100000, color: "#34d399" },
          { label: "Tahun 2", value: 1210000, color: "#34d399" },
          { label: "Tahun 3", value: 1331000, color: "#34d399" },
          { label: "Tahun 5", value: 1610510, color: "#10b981" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Tabungan awal Rp1.000.000 dengan bunga majemuk 10% per tahun. Berapa saldo setelah 3 tahun?",
        answer: 1331000,
        tolerance: 100,
        prefix: "Rp",
        solution:
          "Setiap tahun saldo dikali 1,1. Maka 1.000.000 × 1,1 × 1,1 × 1,1 = 1.000.000 × 1,331 = <strong>Rp1.331.000</strong>.",
        hint: "Kalikan 1.000.000 dengan 1,1 sebanyak tiga kali.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah kabar diteruskan, dan setiap orang menyebarkan ke 2 orang baru tiap putaran. Mulai dari 1 orang, berapa orang tahu setelah 10 putaran (yaitu 2 pangkat 10)?",
        answer: 1024,
        tolerance: 0,
        suffix: " orang",
        solution:
          "Tiap putaran jumlahnya dikali 2: 2 pangkat 10 = 1.024. Jadi setelah 10 putaran ada <strong>1.024 orang</strong>.",
        hint: "Hitung 2 dikali 2 sebanyak 10 kali.",
      },
      {
        type: "classifyExercise",
        prompt: "Pertumbuhan ini linear atau eksponensial?",
        buckets: ["Linear", "Eksponensial"],
        items: [
          { text: "Menabung Rp50.000 setiap bulan", bucket: "Linear" },
          { text: "Saldo bertambah 10% dari saldo tiap tahun", bucket: "Eksponensial" },
          { text: "Bakteri membelah jadi dua tiap jam", bucket: "Eksponensial" },
          { text: "Tinggi tanaman bertambah 2 cm setiap minggu", bucket: "Linear" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Penyebaran kabar viral",
        html: "Satu orang membagikan video ke 2 teman pada putaran pertama. Tiap teman membagikan lagi ke 2 orang baru, begitu seterusnya. Putaran 1 ada 2 orang, putaran 2 ada 4, putaran 3 ada 8. Setelah 20 putaran, jumlahnya lebih dari satu juta orang. Pola perkalian berulang yang sederhana inilah yang membuat sesuatu menjadi viral, sama persis dengan cara uang tumbuh lewat bunga majemuk.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir",
        html: "Setelah mengalikan berulang, polanya jelas. Barulah kita tuliskan: <strong>nilai akhir = nilai awal × (1 + bunga)^periode</strong>. Pangkat pada periode itulah yang membuat pertumbuhan meledak.",
      },
      {
        type: "takeaways",
        items: [
          "Pertumbuhan linear menambah jumlah tetap; eksponensial mengalikan dengan faktor tetap.",
          "Eksponensial mula-mula lambat lalu melesat jauh meninggalkan linear.",
          "Bunga majemuk membuat bunga ikut berbunga setiap periode.",
          "Nilai akhir = nilai awal × (1 + bunga) pangkat periode.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Ciri utama pertumbuhan eksponensial adalah?",
            options: [
              "Menambah jumlah yang sama tiap periode",
              "Mengalikan dengan faktor yang sama tiap periode",
              "Selalu menurun tiap periode",
              "Tetap konstan tiap periode",
            ],
            answer: 1,
            explain: "Eksponensial mengalikan dengan faktor tetap setiap periode.",
          },
          {
            q: "Berapa hasil 2 pangkat 10?",
            options: ["100", "512", "1.024", "2.048"],
            answer: 2,
            explain: "2 dikali dirinya 10 kali menghasilkan 1.024.",
          },
          {
            q: "Tabungan Rp1.000.000 bunga majemuk 10% per tahun setelah 2 tahun menjadi?",
            options: ["Rp1.200.000", "Rp1.210.000", "Rp1.100.000", "Rp1.331.000"],
            answer: 1,
            explain: "1.000.000 × 1,1 × 1,1 = 1.210.000.",
          },
          {
            q: "Manakah contoh pertumbuhan linear?",
            options: [
              "Bakteri membelah dua tiap jam",
              "Menabung Rp50.000 tiap bulan",
              "Saldo bertambah 10% tiap tahun",
              "Kabar viral berlipat ganda tiap jam",
            ],
            answer: 1,
            explain: "Menambah jumlah tetap tiap periode adalah pertumbuhan linear.",
          },
          {
            q: "Rumus nilai akhir bunga majemuk adalah?",
            options: [
              "awal + (bunga × periode)",
              "awal × (1 + bunga)^periode",
              "awal × bunga × periode",
              "awal ÷ (1 + bunga)^periode",
            ],
            answer: 1,
            explain: "Nilai akhir = nilai awal × (1 + bunga) pangkat periode.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "keindahan-matematika",
    levelId: "bahasa-semesta",
    order: 4,
    title: "Rasio Emas dan Keindahan Matematika",
    summary:
      "Sebelum menulis angka 1,618, kita amati dulu pola pada bunga, cangkang, dan karya seni, lalu biarkan rasionya muncul sendiri.",
    durationMin: 14,
    tags: ["rasio emas", "fibonacci", "keindahan", "pola", "data"],
    blocks: [
      {
        type: "paragraph",
        html: "Mengapa kelopak bunga matahari, cangkang siput, dan wajah pada lukisan terkenal terasa begitu enak dipandang? Ternyata ada satu pola yang berulang di alam dan seni. Matematika bukan sekadar berhitung, ia adalah bahasa keindahan semesta. Ayo amati polanya dulu sebelum menyebut angkanya.",
      },
      {
        type: "video",
        comp: "PolaAlam",
        title: "Video: Pola Tersembunyi di Alam",
        caption: "Dari deret angka sederhana, muncul rasio yang menghiasi bunga, cangkang, dan karya seni.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Mulai dari 1 dan 1. Jumlahkan dua angka terakhir untuk mendapat angka berikutnya: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55... Inilah deret Fibonacci. Sekarang coba bagi tiap angka dengan angka sebelumnya, lalu amati hasilnya pada simulator di bawah.",
      },
      {
        type: "widget",
        widget: "SimulatorFibonacci",
      },
      {
        type: "callout",
        tone: "info",
        title: "Rasio yang menetap",
        html: "Coba bagi angka Fibonacci berurutan: 3÷2 = 1,5, lalu 5÷3 ≈ 1,667, lalu 8÷5 = 1,6, lalu 13÷8 = 1,625, lalu 21÷13 ≈ 1,615. Makin jauh kita melangkah, hasilnya makin mendekati satu angka yang sama. Pola simetri dan keseimbangan ini muncul berulang di alam.",
      },
      {
        type: "paragraph",
        html: "Rasio inilah yang banyak ditemukan dalam susunan biji bunga matahari, lekukan cangkang nautilus, hingga proporsi pada arsitektur dan lukisan. Karena terasa seimbang, banyak seniman dan arsitek sengaja memakainya untuk menciptakan kesan harmonis.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Rasio Suku Berurutan Mendekati 1,618 (ilustrasi)",
        unit: "rasio",
        source: "ilustrasi edukatif",
        note: "Pembagian suku Fibonacci berurutan berosilasi naik-turun lalu menetap di sekitar 1,618, yaitu rasio emas.",
        data: [
          { label: "3÷2", value: 1.5, color: "#a78bfa" },
          { label: "5÷3", value: 1.667, color: "#a78bfa" },
          { label: "8÷5", value: 1.6, color: "#a78bfa" },
          { label: "13÷8", value: 1.625, color: "#a78bfa" },
          { label: "21÷13", value: 1.615, color: "#a78bfa" },
          { label: "34÷21", value: 1.619, color: "#a78bfa" },
          { label: "55÷34", value: 1.618, color: "#7c3aed" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Bagilah angka Fibonacci 55 dengan angka sebelumnya, yaitu 34. Berapa hasilnya (dua angka di belakang koma)?",
        answer: 1.62,
        tolerance: 0.02,
        solution:
          "55 ÷ 34 = 1,6176... yang dibulatkan menjadi <strong>1,62</strong>. Nilai ini sangat dekat dengan rasio emas 1,618.",
        hint: "Bagi 55 dengan 34 memakai pembagian biasa.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada deret Fibonacci 1, 1, 2, 3, 5, 8, 13, 21, ... berapa angka berikutnya setelah 13 dan 21?",
        answer: 34,
        tolerance: 0,
        solution:
          "Setiap suku adalah jumlah dua suku sebelumnya: 13 + 21 = <strong>34</strong>.",
        hint: "Jumlahkan dua angka terakhir.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah dengan maknanya.",
        pairs: [
          { left: "Deret Fibonacci", right: "Tiap suku adalah jumlah dua suku sebelumnya" },
          { left: "Rasio emas", right: "Hasil bagi suku Fibonacci berurutan, sekitar 1,618" },
          { left: "Simetri", right: "Keseimbangan bentuk yang terasa harmonis" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Rasio emas pada bangunan",
        html: "Banyak arsitek merancang fasad bangunan dengan perbandingan panjang terhadap tinggi mendekati 1,618. Misalnya sebuah fasad selebar 16,18 meter dengan tinggi 10 meter memberi perbandingan 1,618. Proporsi seperti ini sering disebut membuat bangunan terasa seimbang dan enak dipandang, persis rasio yang muncul dari deret Fibonacci yang tadi kita hitung.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir",
        html: "Setelah mengamati deret dan membagi suku berurutan, polanya jelas. Barulah kita tuliskan: <strong>rasio emas ≈ 1,618</strong>, yang muncul dari pembagian dua suku Fibonacci berurutan saat deretnya makin panjang.",
      },
      {
        type: "takeaways",
        items: [
          "Deret Fibonacci: tiap suku adalah jumlah dua suku sebelumnya.",
          "Membagi suku Fibonacci berurutan menghasilkan angka yang mendekati 1,618.",
          "Rasio emas 1,618 muncul di alam, seni, dan arsitektur.",
          "Matematika adalah bahasa untuk membaca keindahan dan keteraturan semesta.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Angka berikutnya pada deret 1, 1, 2, 3, 5, 8, ... adalah?",
            options: ["11", "13", "10", "16"],
            answer: 1,
            explain: "5 + 8 = 13, sesuai aturan Fibonacci.",
          },
          {
            q: "Nilai rasio emas kira-kira?",
            options: ["1,414", "1,618", "2,718", "3,142"],
            answer: 1,
            explain: "Rasio emas bernilai sekitar 1,618.",
          },
          {
            q: "Rasio emas diperoleh dengan cara?",
            options: [
              "Menjumlahkan semua suku Fibonacci",
              "Membagi suku Fibonacci dengan suku sebelumnya",
              "Mengalikan dua suku Fibonacci",
              "Mengurangi dua suku Fibonacci",
            ],
            answer: 1,
            explain: "Pembagian suku berurutan mendekati 1,618.",
          },
          {
            q: "Berapa hasil 8 ÷ 5 pada deret Fibonacci?",
            options: ["1,5", "1,6", "1,667", "1,625"],
            answer: 1,
            explain: "8 dibagi 5 sama dengan 1,6, dekat dengan rasio emas.",
          },
          {
            q: "Mengapa rasio emas penting dalam seni dan alam?",
            options: [
              "Karena membuat perhitungan menjadi sulit",
              "Karena memberi kesan seimbang dan sering muncul di alam",
              "Karena hanya berlaku pada angka genap",
              "Karena tidak ada hubungannya dengan Fibonacci",
            ],
            answer: 1,
            explain: "Proporsinya terasa harmonis dan berulang di alam serta karya seni.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kurva-lonceng",
    levelId: "bahasa-semesta",
    order: 5,
    title: "Kurva Lonceng: Pola Tersembunyi dalam Keacakan",
    summary:
      "Kita lempar dua dadu berulang kali dan amati jumlahnya, lalu menemukan bahwa keacakan pun punya bentuk yang teratur, yaitu kurva lonceng.",
    durationMin: 14,
    tags: ["distribusi normal", "kurva lonceng", "peluang", "data"],
    blocks: [
      {
        type: "paragraph",
        html: "Lempar satu dadu, hasilnya benar-benar acak: 1 sampai 6 sama mungkinnya. Tetapi lempar <strong>dua dadu</strong> sekaligus lalu jumlahkan angkanya. Apakah semua jumlah dari 2 sampai 12 sama mungkinnya? Ternyata tidak. Di balik keacakan ternyata bersembunyi sebuah bentuk yang teratur. Ayo lempar dulu dan amati polanya.",
      },
      {
        type: "video",
        comp: "StatistikaVideo",
        title: "Video: Membaca Dunia lewat Data",
        caption: "Dari banyak angka acak yang berserakan, muncul satu bentuk sebaran yang teratur.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pikirkan jumlah 2: hanya bisa dari 1 dan 1, jadi satu cara saja. Sekarang jumlah 7: bisa dari 1+6, 2+5, 3+4, 4+3, 5+2, dan 6+1, yaitu enam cara. Karena lebih banyak cara, jumlah 7 jauh lebih sering muncul daripada jumlah 2 atau 12. Coba lempar berkali-kali di simulator dan amati angka mana yang menumpuk di tengah.",
      },
      {
        type: "widget",
        widget: "SimulatorPeluang",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Banyaknya Cara Memperoleh Tiap Jumlah dari Dua Dadu",
        unit: "banyak cara (dari 36)",
        source: "fakta matematika",
        note: "Jumlah 7 punya 6 cara sehingga paling sering, sedangkan ujung 2 dan 12 hanya 1 cara. Batangnya menggunung di tengah lalu menurun ke kedua sisi, itulah bentuk lonceng.",
        data: [
          { label: "2", value: 1, color: "#60a5fa" },
          { label: "3", value: 2, color: "#60a5fa" },
          { label: "4", value: 3, color: "#34d399" },
          { label: "5", value: 4, color: "#34d399" },
          { label: "6", value: 5, color: "#a78bfa" },
          { label: "7", value: 6, color: "#f43f5e" },
          { label: "8", value: 5, color: "#a78bfa" },
          { label: "9", value: 4, color: "#34d399" },
          { label: "10", value: 3, color: "#34d399" },
          { label: "11", value: 2, color: "#60a5fa" },
          { label: "12", value: 1, color: "#60a5fa" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Keacakan yang punya bentuk",
        html: "Aneh tetapi nyata: tiap lemparan tak bisa ditebak, namun bila diulang banyak kali, sebaran hasilnya sangat teratur. Nilai-nilai di tengah muncul paling sering, nilai ekstrem makin jarang. Pola menggunung ini muncul karena jumlah dua dadu adalah <strong>gabungan banyak kemungkinan kecil</strong> yang saling menyeimbangkan.",
      },
      {
        type: "calcExercise",
        prompt: "Pada lemparan dua dadu, ada berapa cara untuk memperoleh jumlah 7?",
        answer: 6,
        suffix: " cara",
        solution:
          "Pasangan yang berjumlah 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Ada <strong>6 cara</strong>, paling banyak di antara semua jumlah.",
        hint: "Daftar pasangan dadu yang totalnya 7.",
      },
      {
        type: "calcExercise",
        prompt:
          "Peluang jumlah dua dadu sama dengan 2 (kedua dadu menunjukkan 1). Tulis dalam persen.",
        answer: 2.8,
        tolerance: 0.3,
        suffix: "%",
        solution:
          "Hanya ada 1 cara (1 dan 1) dari 36 kemungkinan. Peluang = 1/36 = 0,0278 atau sekitar <strong>2,8%</strong>. Itulah sebabnya jumlah 2 sangat jarang.",
        hint: "Bagi 1 dengan 36, lalu kalikan 100.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan jumlah dua dadu dengan banyaknya cara memperolehnya.",
        pairs: [
          { left: "Jumlah 2", right: "1 cara" },
          { left: "Jumlah 5", right: "4 cara" },
          { left: "Jumlah 7", right: "6 cara" },
          { left: "Jumlah 10", right: "3 cara" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Sebaran data ini menggunung di tengah (lonceng) atau tersebar merata?",
        buckets: ["Menggunung di tengah", "Tersebar merata"],
        items: [
          { text: "Tinggi badan orang dewasa di sebuah kota", bucket: "Menggunung di tengah" },
          { text: "Angka yang keluar pada satu lemparan satu dadu", bucket: "Tersebar merata" },
          { text: "Nilai ujian satu kelas besar", bucket: "Menggunung di tengah" },
          { text: "Nomor yang keluar pada roda undian yang seimbang", bucket: "Tersebar merata" },
          { text: "Berat buah apel dari satu kebun", bucket: "Menggunung di tengah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Papan Galton",
        html: "Sekitar tahun 1870-an, ilmuwan bernama <strong>Francis Galton</strong> membuat papan berpaku. Bola-bola dijatuhkan dari atas, dan tiap kali membentur paku, bola memantul ke kiri atau ke kanan secara acak. Setelah ratusan bola jatuh, tumpukan di bawah membentuk gunungan: paling tinggi di tengah dan makin pendek ke tepi. Padahal tiap bola bergerak acak. Inilah bukti nyata bahwa banyak peristiwa acak kecil yang dijumlahkan menghasilkan <strong>kurva lonceng</strong>, pola yang sama dengan sebaran jumlah dua dadu tadi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir",
        html: "Setelah melempar dadu dan melihat papan Galton, polanya jelas. Barulah kita simpulkan: <strong>banyak hal acak yang merupakan gabungan dari banyak faktor kecil cenderung menumpuk di tengah membentuk kurva lonceng</strong>. Bentuk sebaran ini disebut <strong>distribusi normal</strong>, dan ia muncul di mana-mana, dari tinggi badan sampai nilai ujian. Keteraturan di balik keacakan inilah salah satu kalimat terindah dari bahasa semesta.",
      },
      {
        type: "takeaways",
        items: [
          "Satu dadu memberi hasil merata, tetapi jumlah dua dadu menumpuk di tengah.",
          "Jumlah 7 paling sering (6 cara), jumlah 2 dan 12 paling jarang (1 cara).",
          "Banyak peristiwa acak kecil yang digabung menghasilkan bentuk kurva lonceng.",
          "Bentuk lonceng ini disebut distribusi normal dan muncul di banyak data nyata.",
          "Di balik keacakan sering tersembunyi keteraturan yang bisa dibaca matematika.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Jumlah dua dadu yang paling sering muncul adalah?",
            options: ["2", "6", "7", "12"],
            answer: 2,
            explain: "Jumlah 7 punya 6 cara, terbanyak di antara semua jumlah.",
          },
          {
            q: "Ada berapa cara memperoleh jumlah 7 dari dua dadu?",
            options: ["3", "4", "5", "6"],
            answer: 3,
            explain: "Pasangannya (1,6), (2,5), (3,4), (4,3), (5,2), (6,1), yaitu 6 cara.",
          },
          {
            q: "Bentuk sebaran jumlah dua dadu menyerupai?",
            options: [
              "Garis lurus mendatar",
              "Gunungan yang tinggi di tengah dan rendah di tepi",
              "Lingkaran",
              "Tangga yang naik terus",
            ],
            answer: 1,
            explain: "Sebarannya menggunung di tengah, itulah bentuk kurva lonceng.",
          },
          {
            q: "Manakah data yang paling mungkin mengikuti kurva lonceng?",
            options: [
              "Angka pada satu lemparan satu dadu",
              "Tinggi badan orang dewasa di sebuah kota",
              "Nomor pada roda undian seimbang",
              "Sisi koin yang dilempar sekali",
            ],
            answer: 1,
            explain: "Tinggi badan menumpuk di sekitar rata-rata, ciri distribusi normal.",
          },
          {
            q: "Papan Galton menunjukkan bahwa?",
            options: [
              "Keacakan tidak punya pola sama sekali",
              "Banyak peristiwa acak kecil yang digabung membentuk kurva lonceng",
              "Bola selalu jatuh ke satu sisi",
              "Dadu lebih akurat daripada koin",
            ],
            answer: 1,
            explain: "Tumpukan bola membentuk lonceng meski tiap bola bergerak acak.",
          },
        ],
      },
    ],
  },
];
