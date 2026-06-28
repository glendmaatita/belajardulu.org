import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "rata-rata-mean",
    levelId: "pemusatan",
    order: 1,
    title: "Rata-rata: Meratakan Banyak Angka Jadi Satu",
    summary:
      "Sebelum menghafal rumus, kita meratakan tabungan dengan tangan sampai sama rata, dan dari situ ide rata-rata lahir.",
    durationMin: 13,
    tags: ["statistika", "pemusatan", "rata-rata", "mean"],
    blocks: [
      {
        type: "paragraph",
        html: "Lima anak menabung dengan jumlah berbeda: 6, 7, 8, 9, dan 10 ribu rupiah. Lalu muncul pertanyaan iseng, \"Kalau tabungan kalian disamaratakan, masing-masing dapat berapa?\" Pertanyaan inilah yang melahirkan ide rata-rata. Sebelum menyentuh rumus apa pun, ayo kita ratakan dulu dengan tangan.",
      },
      {
        type: "video",
        comp: "StatistikaVideo",
        title: "Video: Satu Angka yang Mewakili Banyak",
        caption: "Bagaimana sekumpulan angka bisa diwakili oleh satu nilai yang adil.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan tiap tabungan jadi tumpukan koin. Kita ambil koin dari tumpukan yang paling tinggi, lalu pindahkan ke yang paling pendek, terus begitu sampai semua tumpukan sama rata. Tabungan totalnya 6 + 7 + 8 + 9 + 10 = 40 ribu, dibagi ke 5 anak, tiap anak kebagian <strong>8 ribu</strong>. Itulah rata-rata: tinggi yang sama jika semua diratakan.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Tabungan Lima Anak dan Garis Rata-rata",
        unit: "ribu rupiah",
        source: "ilustrasi edukatif",
        note: "Total 40 ribu jika diratakan jadi 8 ribu tiap anak. Yang di atas 8 menyumbang ke yang di bawah 8.",
        data: [
          { label: "Anak 1", value: 6, color: "#3b82f6" },
          { label: "Anak 2", value: 7, color: "#3b82f6" },
          { label: "Anak 3", value: 8, color: "#6366f1" },
          { label: "Anak 4", value: 9, color: "#3b82f6" },
          { label: "Anak 5", value: 10, color: "#3b82f6" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorStatistik",
      },
      {
        type: "calcExercise",
        prompt: "Nilai ulangan lima siswa: 70, 80, 90, 85, dan 75. Berapa rata-ratanya?",
        answer: 80,
        tolerance: 0.5,
        solution:
          "Jumlahkan dulu: 70 + 80 + 90 + 85 + 75 = 400. Lalu bagi banyak data: 400 dibagi 5 sama dengan <strong>80</strong>.",
        hint: "Jumlahkan semua nilai, lalu bagi dengan banyaknya siswa.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap kumpulan data dengan rata-ratanya.",
        pairs: [
          { left: "2, 4, 6", right: "4" },
          { left: "10, 20", right: "15" },
          { left: "5, 5, 5", right: "5" },
          { left: "1, 2, 3, 4", right: "2,5" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Rata-rata nilai kelas",
        html: "Seorang guru ingin satu angka yang mewakili nilai seluruh kelas agar bisa membandingkan dengan kelas lain. Ia menjumlahkan semua nilai, lalu membaginya dengan jumlah siswa. Hasilnya, rata-rata, menjadi ringkasan adil yang menggambarkan keseluruhan, bukan hanya satu siswa pintar atau satu yang kesulitan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah meratakan dengan tangan, rumusnya tinggal menuliskan apa yang sudah kita lakukan: <strong>rata-rata = jumlah seluruh data dibagi banyaknya data</strong>. Rumus ini bukan untuk dihafal mentah, melainkan catatan singkat dari kegiatan meratakan tadi.",
      },
      {
        type: "takeaways",
        items: [
          "Rata-rata adalah tinggi yang sama jika semua data diratakan.",
          "Cara menemukannya: jumlahkan semua data, lalu bagi banyaknya data.",
          "Setiap data ikut memengaruhi rata-rata, besar maupun kecil.",
          "Rata-rata adalah satu angka yang mewakili keseluruhan secara adil.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rata-rata paling tepat digambarkan sebagai?",
            options: [
              "Nilai yang paling sering muncul",
              "Tinggi yang sama jika semua data diratakan",
              "Nilai paling besar",
              "Nilai paling tengah",
            ],
            answer: 1,
            explain: "Rata-rata adalah hasil meratakan seluruh data menjadi sama tinggi.",
          },
          {
            q: "Berapa rata-rata dari 4, 6, dan 8?",
            options: ["6", "8", "18", "4"],
            answer: 0,
            explain: "4 + 6 + 8 = 18, dibagi 3 sama dengan 6.",
          },
          {
            q: "Rumus rata-rata adalah?",
            options: [
              "Banyak data dibagi jumlah data",
              "Jumlah data dibagi banyak data",
              "Data terbesar dikurangi terkecil",
              "Data tengah setelah diurutkan",
            ],
            answer: 1,
            explain: "Rata-rata = jumlah seluruh data dibagi banyaknya data.",
          },
          {
            q: "Jika satu data sangat besar ditambahkan, rata-rata akan?",
            options: ["Tidak berubah", "Ikut naik", "Selalu turun", "Jadi nol"],
            answer: 1,
            explain: "Setiap data memengaruhi rata-rata, jadi data besar menariknya naik.",
          },
          {
            q: "Lima anak menabung 6, 7, 8, 9, 10 ribu. Rata-ratanya?",
            options: ["7 ribu", "8 ribu", "9 ribu", "10 ribu"],
            answer: 1,
            explain: "Totalnya 40 ribu dibagi 5 anak sama dengan 8 ribu.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "median-nilai-tengah",
    levelId: "pemusatan",
    order: 2,
    title: "Median: Nilai yang Berdiri di Tengah",
    summary:
      "Kita barisan dulu datanya dari kecil ke besar, lalu cari yang berdiri tepat di tengah, dan dari situ aturan median muncul.",
    durationMin: 12,
    tags: ["statistika", "pemusatan", "median", "nilai-tengah"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan beberapa anak berbaris dari yang terpendek sampai tertinggi. Siapa yang berdiri tepat di tengah barisan? Anak itulah yang membelah barisan menjadi dua bagian sama banyak. Ide sederhana inilah yang kita pakai untuk menemukan median sebuah data. Ayo coba dulu sebelum bertemu aturannya.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Mencari Titik Tengah Data",
        caption: "Mengapa nilai di tengah kadang lebih jujur daripada rata-rata.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Lima anak mencatat lama membaca: 14, 9, 21, 7, 12 menit. Jangan langsung cari yang tengah dari daftar acak ini. Urutkan dulu: 7, 9, <strong>12</strong>, 14, 21. Sekarang yang berdiri di tengah jelas, yaitu 12. Dua anak di kirinya lebih cepat, dua di kanannya lebih lama. Kalau datanya genap, tidak ada satu yang pas di tengah, jadi kita ambil rata-rata dua nilai tengah.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Nilai Tujuh Siswa Setelah Diurutkan",
        unit: "nilai",
        source: "ilustrasi edukatif",
        note: "Tujuh data terurut. Siswa ke-4 (nilai 75) berdiri tepat di tengah, membagi data jadi dua kelompok sama banyak.",
        data: [
          { label: "ke-1", value: 60, color: "#06b6d4" },
          { label: "ke-2", value: 65, color: "#06b6d4" },
          { label: "ke-3", value: 70, color: "#06b6d4" },
          { label: "ke-4", value: 75, color: "#6366f1" },
          { label: "ke-5", value: 80, color: "#06b6d4" },
          { label: "ke-6", value: 85, color: "#06b6d4" },
          { label: "ke-7", value: 90, color: "#06b6d4" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorStatistik",
      },
      {
        type: "calcExercise",
        prompt: "Lama membaca lima anak: 14, 9, 21, 7, 12 menit. Berapa median (nilai tengah) nya?",
        answer: 12,
        tolerance: 0,
        suffix: " menit",
        solution:
          "Urutkan dulu: 7, 9, 12, 14, 21. Karena ada 5 data (ganjil), nilai tengahnya adalah data ke-3, yaitu <strong>12 menit</strong>.",
        hint: "Urutkan datanya dari kecil ke besar, lalu cari yang tepat di tengah.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Untuk menemukan median, kelompokkan tiap kasus berdasarkan cara menghitungnya.",
        buckets: ["Median = satu nilai tengah", "Median = rata-rata dua nilai tengah"],
        items: [
          { text: "Data berisi 5 angka", bucket: "Median = satu nilai tengah" },
          { text: "Data berisi 8 angka", bucket: "Median = rata-rata dua nilai tengah" },
          { text: "Data berisi 7 angka", bucket: "Median = satu nilai tengah" },
          { text: "Data berisi 10 angka", bucket: "Median = rata-rata dua nilai tengah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Lama antre di puskesmas",
        html: "Petugas mencatat lama antre beberapa pasien dalam menit, lalu ingin tahu pengalaman \"pasien tengahan\". Ia mengurutkan datanya dan mengambil nilai tengah. Angka ini menggambarkan separuh pasien menunggu lebih cepat dan separuh lebih lama, sebuah patokan yang adil untuk menilai pelayanan tanpa terganggu satu antrean yang luar biasa panjang.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah berbaris dan mencari yang di tengah, aturannya tinggal ditulis: <strong>median adalah nilai tengah dari data yang sudah diurutkan</strong>. Jika banyak data ganjil, ambil satu nilai tengah; jika genap, ambil rata-rata dua nilai tengah. Tidak ada yang dihafal tanpa makna, semuanya berasal dari membariskan data.",
      },
      {
        type: "takeaways",
        items: [
          "Langkah pertama mencari median selalu mengurutkan data.",
          "Banyak data ganjil: median adalah satu nilai yang tepat di tengah.",
          "Banyak data genap: median adalah rata-rata dua nilai tengah.",
          "Median membagi data menjadi dua bagian sama banyak.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Langkah pertama mencari median adalah?",
            options: [
              "Menjumlahkan semua data",
              "Mengurutkan data dari kecil ke besar",
              "Mencari nilai terbesar",
              "Menghitung berapa kali muncul",
            ],
            answer: 1,
            explain: "Median harus dicari dari data yang sudah terurut.",
          },
          {
            q: "Median dari 3, 1, 2 adalah?",
            options: ["1", "2", "3", "6"],
            answer: 1,
            explain: "Urut jadi 1, 2, 3; nilai tengahnya adalah 2.",
          },
          {
            q: "Jika banyak data genap, mediannya adalah?",
            options: [
              "Data pertama",
              "Rata-rata dua nilai tengah",
              "Data terbesar",
              "Tidak ada median",
            ],
            answer: 1,
            explain: "Tidak ada satu nilai tengah, jadi ambil rata-rata dua yang tengah.",
          },
          {
            q: "Pada 7 data terurut, median berada di data ke?",
            options: ["ke-3", "ke-4", "ke-5", "ke-7"],
            answer: 1,
            explain: "Dari 7 data, yang tepat di tengah adalah data ke-4.",
          },
          {
            q: "Median berbeda dari rata-rata karena median?",
            options: [
              "Selalu lebih besar",
              "Menunjukkan posisi tengah, bukan hasil penjumlahan",
              "Selalu sama dengan modus",
              "Tidak bisa dihitung",
            ],
            answer: 1,
            explain: "Median soal posisi tengah data terurut, bukan menjumlahkan dan membagi.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "modus",
    levelId: "pemusatan",
    order: 3,
    title: "Modus: Nilai yang Paling Sering Muncul",
    summary:
      "Kita hitung dulu berapa kali tiap nilai muncul, lalu yang terbanyak itulah modus, ukuran yang penting bagi pedagang.",
    durationMin: 11,
    tags: ["statistika", "pemusatan", "modus", "frekuensi"],
    blocks: [
      {
        type: "paragraph",
        html: "Pemilik toko sepatu tidak terlalu peduli pada ukuran rata-rata, sebab tidak ada sepatu berukuran 40,3. Yang ia butuhkan adalah ukuran mana yang paling laku, supaya stoknya pas. Nilai yang paling sering muncul itulah modus. Ayo kita temukan dengan menghitung, bukan menghafal.",
      },
      {
        type: "video",
        comp: "StatistikaVideo",
        title: "Video: Yang Paling Sering Terjadi",
        caption: "Kadang yang kita cari bukan rata-rata, melainkan yang paling lazim.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil data: 3, 5, 5, 7, 9, 5, 2. Coba tandai tiap angka dan hitung kemunculannya. Angka 5 muncul tiga kali, sisanya hanya sekali. Karena 5 paling sering muncul, dialah <strong>modus</strong> nya. Tidak perlu menjumlahkan atau mengurutkan, cukup menghitung frekuensi.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Sepatu Terjual Menurut Ukuran",
        unit: "pasang terjual",
        source: "ilustrasi edukatif",
        note: "Batang tertinggi ada di ukuran 40, jadi modusnya 40. Inilah ukuran yang stoknya perlu paling banyak.",
        data: [
          { label: "38", value: 5, color: "#3b82f6" },
          { label: "39", value: 8, color: "#3b82f6" },
          { label: "40", value: 12, color: "#6366f1" },
          { label: "41", value: 7, color: "#3b82f6" },
          { label: "42", value: 3, color: "#3b82f6" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorStatistik",
      },
      {
        type: "calcExercise",
        prompt: "Data nilai: 3, 5, 5, 7, 9, 5, 2. Berapa modusnya?",
        answer: 5,
        tolerance: 0,
        solution:
          "Hitung kemunculan tiap nilai: angka 5 muncul tiga kali, lebih sering dari yang lain. Jadi modusnya adalah <strong>5</strong>.",
        hint: "Cari nilai yang paling sering muncul, bukan yang paling besar.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap data berdasarkan ada tidaknya modus.",
        buckets: ["Punya modus", "Tidak punya modus"],
        items: [
          { text: "10, 10, 11, 12", bucket: "Punya modus" },
          { text: "5, 6, 7, 8", bucket: "Tidak punya modus" },
          { text: "2, 2, 2, 9", bucket: "Punya modus" },
          { text: "1, 2, 3, 4, 5", bucket: "Tidak punya modus" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Stok di toko baju",
        html: "Sebuah toko baju mencatat ukuran yang paling banyak dibeli pelanggan selama sebulan. Ternyata ukuran M paling sering terjual. Berbekal modus ini, pemilik menambah stok ukuran M dan mengurangi ukuran yang jarang laku. Untuk keputusan seperti ini, modus jauh lebih berguna daripada rata-rata, apalagi karena ukuran baju adalah kategori, bukan angka yang bisa dirata-ratakan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menghitung frekuensi, kesimpulannya jelas: <strong>modus adalah nilai yang paling sering muncul</strong>. Ia ditemukan dengan menghitung kemunculan, bukan menjumlahkan. Sebuah data bisa punya satu modus, lebih dari satu, atau tidak punya modus sama sekali jika semua nilai berbeda.",
      },
      {
        type: "takeaways",
        items: [
          "Modus adalah nilai yang paling sering muncul dalam data.",
          "Cara menemukannya: hitung frekuensi, bukan menjumlahkan atau mengurutkan.",
          "Data bisa tidak punya modus jika semua nilai berbeda, atau punya lebih dari satu.",
          "Modus bisa dipakai untuk data kategori, tidak hanya angka.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Modus sebuah data adalah?",
            options: [
              "Nilai paling besar",
              "Nilai yang paling sering muncul",
              "Nilai tengah",
              "Hasil bagi jumlah dengan banyak data",
            ],
            answer: 1,
            explain: "Modus adalah nilai dengan frekuensi terbanyak.",
          },
          {
            q: "Modus dari 2, 4, 4, 4, 5 adalah?",
            options: ["2", "4", "5", "Tidak ada"],
            answer: 1,
            explain: "Angka 4 muncul paling sering, yaitu tiga kali.",
          },
          {
            q: "Data 1, 2, 3, 4 memiliki modus?",
            options: [
              "1",
              "4",
              "Tidak punya modus karena semua berbeda",
              "2,5",
            ],
            answer: 2,
            explain: "Semua nilai muncul sekali, jadi tidak ada yang paling sering.",
          },
          {
            q: "Siapa yang paling terbantu oleh modus?",
            options: [
              "Pedagang yang ingin tahu ukuran paling laku",
              "Orang yang menjumlahkan total",
              "Orang yang membagi rata",
              "Tidak ada yang terbantu",
            ],
            answer: 0,
            explain: "Modus menunjukkan pilihan paling lazim, berguna untuk menata stok.",
          },
          {
            q: "Mengapa modus cocok untuk data kategori seperti warna favorit?",
            options: [
              "Karena warna bisa dijumlahkan",
              "Karena kita hanya menghitung mana yang paling sering, tanpa perlu angka",
              "Karena warna punya urutan",
              "Karena warna bisa dirata-ratakan",
            ],
            answer: 1,
            explain: "Modus hanya butuh frekuensi, sehingga cocok untuk kategori yang tak bisa dirata-ratakan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "memilih-ukuran-pemusatan-yang-tepat",
    levelId: "pemusatan",
    order: 4,
    title: "Memilih Ukuran Pemusatan yang Tepat",
    summary:
      "Lewat data gaji dengan satu pencilan, kita lihat sendiri kapan median lebih jujur daripada rata-rata, lalu pedomannya lahir.",
    durationMin: 13,
    tags: ["statistika", "pemusatan", "median", "pencilan", "mean"],
    blocks: [
      {
        type: "paragraph",
        html: "Di sebuah warung kecil, enam pegawai bergaji sekitar 3 sampai 5 juta rupiah, tetapi pemiliknya menarik 40 juta. Jika diumumkan \"rata-rata pendapatan di sini 9 juta\", apakah itu jujur menggambarkan para pegawai? Di sinilah kita belajar bahwa memilih ukuran yang tepat sama pentingnya dengan menghitungnya. Ayo selidiki dulu.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Ketika Rata-rata Menipu",
        caption: "Satu angka ekstrem bisa membuat rata-rata bercerita keliru.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil gajinya (juta rupiah): 3, 3, 4, 4, 5, 5, 40. Hitung rata-ratanya: jumlahnya 64 dibagi 7 sama dengan sekitar 9,1 juta. Padahal enam dari tujuh orang bergaji di bawah 5 juta. Sekarang urutkan dan cari median: nilai tengahnya adalah <strong>4 juta</strong>. Lihat bedanya: satu pencilan (40) menarik rata-rata jauh ke atas, tetapi median tetap mewakili kebanyakan orang.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Gaji Tujuh Orang dan Letak Mean vs Median",
        unit: "juta rupiah",
        source: "ilustrasi edukatif",
        note: "Rata-rata sekitar 9,1 juta tertarik oleh satu pencilan (40 juta), padahal median hanya 4 juta dan lebih mewakili kebanyakan orang.",
        data: [
          { label: "Orang 1", value: 3, color: "#06b6d4" },
          { label: "Orang 2", value: 3, color: "#06b6d4" },
          { label: "Orang 3", value: 4, color: "#06b6d4" },
          { label: "Orang 4", value: 4, color: "#06b6d4" },
          { label: "Orang 5", value: 5, color: "#06b6d4" },
          { label: "Orang 6", value: 5, color: "#06b6d4" },
          { label: "Orang 7", value: 40, color: "#f59e0b" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorStatistik",
      },
      {
        type: "calcExercise",
        prompt: "Gaji tujuh orang (juta): 3, 3, 4, 4, 5, 5, 40. Berapa rata-ratanya? Bulatkan ke satu desimal.",
        answer: 9.1,
        tolerance: 0.2,
        suffix: " juta",
        solution:
          "Jumlahnya 3 + 3 + 4 + 4 + 5 + 5 + 40 = 64, dibagi 7 sama dengan sekitar <strong>9,1 juta</strong>. Bandingkan dengan median yang hanya 4 juta, dan kita lihat rata-rata tertarik oleh pencilan.",
        hint: "Jumlahkan semua, lalu bagi 7. Perhatikan betapa angka 40 menariknya naik.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Untuk tiap situasi, pilih ukuran pemusatan yang paling mewakili.",
        buckets: ["Lebih tepat Median", "Lebih tepat Mean"],
        items: [
          { text: "Gaji kantor dengan satu bos bergaji sangat tinggi", bucket: "Lebih tepat Median" },
          { text: "Nilai ulangan 30 siswa dengan sebaran wajar", bucket: "Lebih tepat Mean" },
          { text: "Harga rumah di kota yang punya beberapa vila mahal", bucket: "Lebih tepat Median" },
          { text: "Tinggi badan satu tim, tanpa angka yang aneh", bucket: "Lebih tepat Mean" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Berita pendapatan rata-rata",
        html: "Sebuah media menulis bahwa pendapatan rata-rata warga sebuah daerah naik tajam. Padahal kenaikan itu disebabkan segelintir orang super kaya, sementara kebanyakan warga tidak merasakan perubahan. Jika media memakai median, gambarannya akan lebih jujur. Memilih ukuran pemusatan yang tepat bukan urusan rumus, melainkan urusan kejujuran terhadap data.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Tidak ada rumus baru di sini, yang lahir adalah pedoman: <strong>jika ada pencilan atau data condong, median lebih mewakili; jika data simetris tanpa pencilan, mean paling informatif; untuk data kategori, pakai modus</strong>. Memilih dengan sadar membuat satu angka benar-benar bercerita jujur.",
      },
      {
        type: "takeaways",
        items: [
          "Mean mudah tertarik oleh nilai pencilan yang ekstrem.",
          "Median tahan terhadap pencilan karena hanya soal posisi tengah.",
          "Untuk data dengan pencilan, median biasanya lebih jujur daripada mean.",
          "Untuk data kategori, modus adalah ukuran yang tepat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Ukuran pemusatan yang paling mudah terpengaruh pencilan adalah?",
            options: ["Median", "Modus", "Mean (rata-rata)", "Semua sama saja"],
            answer: 2,
            explain: "Rata-rata menjumlahkan semua data, jadi satu angka ekstrem menariknya jauh.",
          },
          {
            q: "Ukuran yang paling tahan terhadap pencilan adalah?",
            options: ["Mean", "Median", "Jumlah", "Selisih"],
            answer: 1,
            explain: "Median hanya soal posisi tengah, tidak terganggu nilai ekstrem.",
          },
          {
            q: "Untuk data gaji dengan satu bos bergaji sangat tinggi, lebih tepat memakai?",
            options: ["Mean", "Median", "Jumlah total", "Nilai terbesar"],
            answer: 1,
            explain: "Median tidak tertarik pencilan, jadi lebih mewakili kebanyakan pegawai.",
          },
          {
            q: "Untuk data kategori seperti warna favorit, ukuran yang tepat adalah?",
            options: ["Mean", "Median", "Modus", "Selisih"],
            answer: 2,
            explain: "Kategori tidak bisa dijumlahkan atau diurutkan nilainya, jadi pakai modus.",
          },
          {
            q: "Gaji 3, 3, 4, 4, 5, 5, 40 (juta): mean sekitar 9,1 dan median 4. Mana yang lebih mewakili kebanyakan orang?",
            options: [
              "Mean, karena lebih besar",
              "Median, karena tidak tertarik pencilan",
              "Keduanya sama",
              "Tidak ada yang mewakili",
            ],
            answer: 1,
            explain: "Enam dari tujuh orang bergaji di bawah 5 juta, jadi median 4 juta lebih jujur.",
          },
        ],
      },
    ],
  },
];
