import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "data-dan-penyajian",
    levelId: "data-penyajian",
    order: 1,
    title: "Data dan Cara Menyajikannya",
    summary:
      "Sebelum menghitung apa pun, kita kumpulkan data nyata dan cari cara menggambarkannya agar mudah dibaca.",
    durationMin: 12,
    tags: ["statistika", "data", "diagram", "penyajian"],
    blocks: [
      {
        type: "paragraph",
        html: "Seorang guru ingin tahu buah kesukaan murid di kelas. Ia bertanya ke 30 anak dan mencatat jawabannya. Kini ada tumpukan jawaban. Sebelum menghitung apa pun, ayo cari cara menyajikan data ini supaya satu pandangan langsung bercerita.",
      },
      {
        type: "video",
        comp: "StatistikaVideo",
        title: "Video: Membaca Dunia lewat Data",
        caption: "Dari angka yang berserakan menjadi gambaran yang mudah dibaca.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan 30 jawaban tercatat acak: mangga, apel, mangga, jeruk, ... Sulit dibaca. Tetapi begitu kita kelompokkan dan hitung tiap buah, lalu gambar batangnya, mana yang paling disukai langsung terlihat. Penyajian yang baik membuat data berbicara.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Buah Kesukaan 30 Murid",
        unit: "jumlah murid",
        source: "ilustrasi edukatif",
        note: "Total 30 murid. Mangga paling banyak dipilih, langsung terlihat dari batang tertinggi.",
        data: [
          { label: "Mangga", value: 11, color: "#6366f1" },
          { label: "Apel", value: 8, color: "#3b82f6" },
          { label: "Jeruk", value: 7, color: "#06b6d4" },
          { label: "Pisang", value: 4, color: "#0ea5e9" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorStatistik",
      },
      {
        type: "callout",
        tone: "info",
        title: "Diagram yang jujur",
        html: "Diagram bisa menyesatkan jika sumbunya dipotong atau skalanya tidak rata. Statistika yang baik menyajikan data <strong>apa adanya</strong> agar pembaca tidak tertipu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari 30 murid, 11 memilih mangga. Berapa persen murid yang memilih mangga? Bulatkan ke satu desimal.",
        answer: 36.7,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "11 dibagi 30 sama dengan 0,367, jadi sekitar <strong>36,7%</strong> murid memilih mangga.",
        hint: "Bagi jumlah pemilih mangga dengan total murid, lalu kalikan 100.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan data berikut sebagai kuantitatif (angka) atau kualitatif (kategori).",
        buckets: ["Kuantitatif", "Kualitatif"],
        items: [
          { text: "Tinggi badan siswa dalam cm", bucket: "Kuantitatif" },
          { text: "Warna favorit", bucket: "Kualitatif" },
          { text: "Jumlah saudara kandung", bucket: "Kuantitatif" },
          { text: "Jenis kelamin", bucket: "Kualitatif" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pedagang dan penjualan mingguan",
        html: "Seorang pedagang mencatat penjualan tiap hari selama seminggu. Ditulis sebagai daftar angka, ia sulit melihat pola. Setelah dibuat diagram batang, ia langsung sadar penjualan melonjak di akhir pekan. Berbekal gambaran itu, ia menambah stok pada Sabtu dan Minggu. Penyajian data mengubah tumpukan angka menjadi keputusan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah berpetualang, baru kita rangkum: <strong>data</strong> adalah kumpulan fakta, bisa berupa angka (kuantitatif) atau kategori (kualitatif). Menyajikannya dengan tabel dan diagram membuat polanya mudah dibaca, asalkan jujur dan tidak menyesatkan.",
      },
      {
        type: "takeaways",
        items: [
          "Data bisa kuantitatif (angka) atau kualitatif (kategori).",
          "Tabel dan diagram membuat pola dalam data mudah terlihat.",
          "Diagram harus jujur: skala dan sumbu yang rata agar tidak menyesatkan.",
          "Penyajian yang baik mengubah tumpukan angka menjadi keputusan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Data berupa kategori seperti warna favorit disebut?",
            options: ["Kuantitatif", "Kualitatif", "Acak", "Numerik"],
            answer: 1,
            explain: "Kategori adalah data kualitatif.",
          },
          {
            q: "Diagram batang paling cocok untuk?",
            options: [
              "Menyembunyikan data",
              "Membandingkan jumlah antar kategori",
              "Mengganti angka",
              "Menghapus data kecil",
            ],
            answer: 1,
            explain: "Batang memudahkan membandingkan besaran antar kategori.",
          },
          {
            q: "Tinggi badan dalam cm termasuk data?",
            options: ["Kualitatif", "Kuantitatif", "Kategori", "Nominal"],
            answer: 1,
            explain: "Tinggi badan adalah angka, jadi kuantitatif.",
          },
          {
            q: "Sebuah diagram bisa menyesatkan jika?",
            options: [
              "Skalanya rata",
              "Sumbunya dipotong atau skalanya tidak rata",
              "Datanya lengkap",
              "Warnanya banyak",
            ],
            answer: 1,
            explain: "Memotong sumbu atau skala tak rata membuat perbandingan menipu.",
          },
          {
            q: "Dari 30 murid, 9 memilih jeruk. Berapa persennya?",
            options: ["30%", "9%", "Sekitar 30%", "Sekitar 27%"],
            answer: 2,
            explain: "9/30 = 0,30 = 30%.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "jenis-jenis-data",
    levelId: "data-penyajian",
    order: 2,
    title: "Mengenal Jenis-Jenis Data",
    summary:
      "Sebelum menghitung, kita kenali dulu wujud datanya: angka atau kategori, terhitung atau terukur. Jenis data menentukan cara kita memperlakukannya.",
    durationMin: 13,
    tags: ["statistika", "data", "kuantitatif", "kualitatif"],
    blocks: [
      {
        type: "paragraph",
        html: "Seorang peneliti muda mendata teman sekelasnya. Ia mencatat tinggi badan, ukuran sepatu, warna baju favorit, dan tingkat kepuasan terhadap kantin. Semua disebut data, tetapi terasa berbeda jenisnya. Ada yang bisa dijumlah, ada yang hanya bisa dikelompokkan. Ayo telusuri dulu perbedaannya sebelum menarik aturan.",
      },
      {
        type: "video",
        comp: "StatistikaVideo",
        title: "Video: Ragam Wujud Data",
        caption: "Mengapa tinggi badan dan warna favorit tidak bisa diperlakukan dengan cara yang sama.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba rasakan bedanya. Tinggi badan bisa bernilai 158,3 cm; ia <strong>terukur</strong> dan bisa pecahan. Jumlah saudara hanya 0, 1, 2, ...; ia <strong>terhitung</strong> dan utuh. Warna favorit cuma bisa dikelompokkan. Sebelum menamai, biarkan intuisimu menebak: mana yang bisa dijumlahkan, mana yang tidak?",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Ukuran Sepatu 30 Siswa",
        unit: "jumlah siswa",
        source: "ilustrasi edukatif",
        note: "Ukuran sepatu adalah data kuantitatif diskrit: bernilai angka, tetapi melompat (38, 39, 40, ...) tanpa nilai antara.",
        data: [
          { label: "38", value: 3, color: "#6366f1" },
          { label: "39", value: 6, color: "#3b82f6" },
          { label: "40", value: 9, color: "#06b6d4" },
          { label: "41", value: 8, color: "#0ea5e9" },
          { label: "42", value: 4, color: "#38bdf8" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorStatistik",
      },
      {
        type: "callout",
        tone: "info",
        title: "Diskrit dan kontinu",
        html: "Data kuantitatif <strong>diskrit</strong> didapat dari menghitung dan bernilai bulat (jumlah anak, ukuran sepatu). Data kuantitatif <strong>kontinu</strong> didapat dari mengukur dan bisa pecahan (tinggi, berat, suhu).",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari grafik ukuran sepatu, berapa persen siswa yang memakai ukuran 40? Bulatkan ke satu desimal.",
        answer: 30,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "Ukuran 40 dipakai 9 dari 30 siswa. 9 dibagi 30 sama dengan 0,30, jadi <strong>30%</strong>.",
        hint: "Bagi jumlah siswa berukuran 40 dengan total 30 siswa, lalu kalikan 100.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap data kuantitatif berikut sebagai diskrit (terhitung) atau kontinu (terukur).",
        buckets: ["Diskrit", "Kontinu"],
        items: [
          { text: "Jumlah halaman buku", bucket: "Diskrit" },
          { text: "Berat badan dalam kilogram", bucket: "Kontinu" },
          { text: "Banyak mobil di parkiran", bucket: "Diskrit" },
          { text: "Suhu ruangan dalam derajat", bucket: "Kontinu" },
          { text: "Waktu tempuh lari 100 meter", bucket: "Kontinu" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap contoh data dengan jenisnya yang tepat.",
        pairs: [
          { left: "Nama hari kelahiran", right: "Kualitatif nominal" },
          { left: "Peringkat lomba (1, 2, 3)", right: "Kualitatif ordinal" },
          { left: "Tinggi badan dalam cm", right: "Kuantitatif kontinu" },
          { left: "Jumlah saudara kandung", right: "Kuantitatif diskrit" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Salah jenis, salah hitung",
        html: "Sebuah panitia ingin tahu kepuasan peserta acara. Mereka memberi pilihan 'puas', 'biasa', 'kecewa', lalu menjumlahkannya seakan angka dan menghitung rata-rata. Hasilnya tak bermakna, sebab itu data kualitatif ordinal yang hanya boleh diurutkan, bukan dijumlah. Setelah sadar jenis datanya, mereka beralih ke modus dan persentase. Mengenali jenis data menyelamatkan analisis dari kesimpulan keliru.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah berpetualang, baru kita rangkum: data <strong>kuantitatif</strong> berupa angka (diskrit jika terhitung, kontinu jika terukur), sedangkan data <strong>kualitatif</strong> berupa kategori (nominal jika sekadar nama, ordinal jika punya urutan). Jenis data menentukan operasi yang sah dilakukan padanya.",
      },
      {
        type: "takeaways",
        items: [
          "Data kuantitatif berupa angka; kualitatif berupa kategori.",
          "Kuantitatif diskrit terhitung dan bulat; kontinu terukur dan bisa pecahan.",
          "Kualitatif nominal hanya nama; ordinal punya urutan bertingkat.",
          "Jenis data menentukan operasi yang sah: yang kategori tak boleh asal dijumlah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Jumlah siswa di kelas termasuk data?",
            options: ["Kuantitatif kontinu", "Kuantitatif diskrit", "Kualitatif nominal", "Kualitatif ordinal"],
            answer: 1,
            explain: "Jumlah siswa didapat dari menghitung dan selalu bulat, jadi kuantitatif diskrit.",
          },
          {
            q: "Tingkat pendidikan (SD, SMP, SMA) termasuk data?",
            options: ["Kuantitatif", "Kualitatif nominal", "Kualitatif ordinal", "Diskrit"],
            answer: 2,
            explain: "Kategorinya punya urutan bertingkat, jadi kualitatif ordinal.",
          },
          {
            q: "Manakah contoh data kuantitatif kontinu?",
            options: ["Warna mata", "Berat badan", "Jumlah pintu", "Golongan darah"],
            answer: 1,
            explain: "Berat badan diukur dan bisa bernilai pecahan, jadi kontinu.",
          },
          {
            q: "Mengapa data kualitatif nominal tidak boleh dijumlahkan?",
            options: [
              "Karena terlalu banyak",
              "Karena hanya nama kategori tanpa nilai angka",
              "Karena selalu negatif",
              "Karena tidak bisa dihitung jumlahnya",
            ],
            answer: 1,
            explain: "Nominal hanya menamai kelompok; angkanya bila ada hanya kode, bukan besaran.",
          },
          {
            q: "Golongan darah seseorang adalah jenis data?",
            options: ["Kuantitatif diskrit", "Kuantitatif kontinu", "Kualitatif nominal", "Kualitatif ordinal"],
            answer: 2,
            explain: "Golongan darah hanya nama kelompok tanpa urutan, jadi kualitatif nominal.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "tabel-frekuensi",
    levelId: "data-penyajian",
    order: 3,
    title: "Merangkum dengan Tabel Frekuensi",
    summary:
      "Saat data terlalu banyak untuk dibaca satu per satu, tabel frekuensi merapikannya menjadi kelompok yang ringkas dan jujur.",
    durationMin: 14,
    tags: ["statistika", "data", "frekuensi", "tabel"],
    blocks: [
      {
        type: "paragraph",
        html: "Seorang guru baru saja mengoreksi ulangan matematika 30 siswa. Di tangannya ada 30 angka acak: 78, 55, 91, 63, 72, ... Sulit melihat gambaran besarnya. Berapa banyak yang nilainya menengah? Berapa yang tinggi? Ayo coba rapikan dulu sebelum menyimpulkan apa pun.",
      },
      {
        type: "video",
        comp: "StatistikaVideo",
        title: "Video: Dari Tumpukan Angka ke Tabel Rapi",
        caption: "Mengelompokkan data ke dalam kelas agar polanya muncul.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan kita buat kotak-kotak: 41 sampai 50, 51 sampai 60, dan seterusnya. Lalu setiap nilai kita masukkan ke kotaknya dan kita hitung isinya. Tiba-tiba 30 angka acak berubah jadi tabel yang bercerita. Frekuensi adalah <strong>banyaknya data</strong> di tiap kelompok. Coba tebak kelompok mana yang paling ramai.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Sebaran Nilai Ulangan 30 Siswa",
        unit: "jumlah siswa (frekuensi)",
        source: "ilustrasi edukatif",
        note: "Tiap batang adalah frekuensi satu kelas interval. Kelas 71-80 paling ramai. Total semua frekuensi 30.",
        data: [
          { label: "41-50", value: 2, color: "#6366f1" },
          { label: "51-60", value: 5, color: "#3b82f6" },
          { label: "61-70", value: 8, color: "#06b6d4" },
          { label: "71-80", value: 9, color: "#0ea5e9" },
          { label: "81-90", value: 4, color: "#38bdf8" },
          { label: "91-100", value: 2, color: "#7dd3fc" },
        ],
      },
      {
        type: "widget",
        widget: "PenjelajahPola",
      },
      {
        type: "callout",
        tone: "info",
        title: "Frekuensi relatif",
        html: "Selain banyaknya data, kita sering ingin tahu <strong>porsinya</strong>. Frekuensi relatif sebuah kelas adalah frekuensinya dibagi total data. Jumlah semua frekuensi relatif selalu 1 (atau 100%).",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari tabel di atas, berapa frekuensi relatif kelas 71-80 dalam persen? Total siswa 30.",
        answer: 30,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "Kelas 71-80 berfrekuensi 9. Frekuensi relatif = 9 dibagi 30 = 0,30, jadi <strong>30%</strong> siswa berada di kelas itu.",
        hint: "Bagi frekuensi kelas itu (9) dengan total data (30), lalu kalikan 100.",
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa banyak siswa yang memperoleh nilai paling sedikit 81 (yaitu kelas 81-90 dan 91-100)?",
        answer: 6,
        solution:
          "Frekuensi kelas 81-90 adalah 4 dan kelas 91-100 adalah 2. Jumlahnya 4 + 2 = <strong>6 siswa</strong>.",
        hint: "Jumlahkan frekuensi dua kelas teratas.",
      },
      {
        type: "classifyExercise",
        prompt: "Masukkan tiap nilai ulangan berikut ke kelas intervalnya yang benar.",
        buckets: ["61-70", "71-80", "81-90"],
        items: [
          { text: "Nilai 64", bucket: "61-70" },
          { text: "Nilai 78", bucket: "71-80" },
          { text: "Nilai 85", bucket: "81-90" },
          { text: "Nilai 70", bucket: "61-70" },
          { text: "Nilai 80", bucket: "71-80" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Guru menentukan remedial",
        html: "Dengan tabel frekuensi, guru langsung melihat 7 siswa berada di kelas 41-50 dan 51-60. Itu sekitar 23% kelas yang nilainya di bawah 61. Ia memutuskan mengadakan remedial untuk kelompok tersebut, bukan untuk seluruh kelas. Tabel frekuensi mengubah tumpukan angka menjadi keputusan yang adil dan tepat sasaran.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah berpetualang, baru kita rangkum: <strong>tabel frekuensi</strong> mengelompokkan data ke dalam kelas interval lalu menghitung banyaknya data tiap kelas. <strong>Frekuensi relatif</strong> menunjukkan porsi tiap kelas dan totalnya selalu 100%. Dari tabel inilah pola sebaran data terbaca jelas.",
      },
      {
        type: "takeaways",
        items: [
          "Tabel frekuensi mengelompokkan data ke kelas interval lalu menghitung isinya.",
          "Frekuensi adalah banyaknya data dalam satu kelas.",
          "Frekuensi relatif = frekuensi dibagi total data; jumlahnya selalu 100%.",
          "Tabel frekuensi memunculkan pola sebaran yang tak terlihat dari daftar mentah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa arti frekuensi sebuah kelas interval?",
            options: [
              "Nilai tertinggi di kelas itu",
              "Banyaknya data yang masuk kelas itu",
              "Rata-rata data",
              "Lebar kelasnya",
            ],
            answer: 1,
            explain: "Frekuensi adalah banyaknya data yang jatuh ke dalam kelas tersebut.",
          },
          {
            q: "Jika total data 40 dan sebuah kelas berfrekuensi 10, frekuensi relatifnya?",
            options: ["10%", "25%", "40%", "4%"],
            answer: 1,
            explain: "10 dibagi 40 = 0,25 = 25%.",
          },
          {
            q: "Jumlah seluruh frekuensi relatif dalam sebuah tabel selalu?",
            options: ["0", "100% atau 1", "Tergantung jumlah kelas", "Selalu lebih dari 1"],
            answer: 1,
            explain: "Karena seluruh data tercakup, totalnya pasti 100% atau 1.",
          },
          {
            q: "Nilai 70 masuk ke kelas yang mana pada tabel 61-70 dan 71-80?",
            options: ["71-80", "61-70", "Keduanya", "Tidak masuk mana pun"],
            answer: 1,
            explain: "70 berada dalam rentang 61 sampai 70, jadi masuk kelas 61-70.",
          },
          {
            q: "Manfaat utama tabel frekuensi adalah?",
            options: [
              "Menyembunyikan data kecil",
              "Merangkum banyak data agar polanya terbaca",
              "Mengubah nilai data",
              "Menambah jumlah data",
            ],
            answer: 1,
            explain: "Tabel frekuensi merapikan data banyak menjadi ringkas sehingga polanya muncul.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "memilih-diagram-yang-tepat",
    levelId: "data-penyajian",
    order: 4,
    title: "Memilih Diagram yang Tepat",
    summary:
      "Setiap diagram punya tugasnya sendiri. Memilih yang tepat membuat data berbicara jujur; memilih yang keliru bisa menyesatkan.",
    durationMin: 14,
    tags: ["statistika", "diagram", "penyajian", "visualisasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Tiga panitia menyajikan data yang sama dengan diagram berbeda. Yang satu pakai diagram garis, yang lain lingkaran, yang lain batang. Anehnya, hanya satu yang membuat pesannya langsung jelas. Ternyata memilih diagram bukan soal selera, melainkan soal cocok dengan jenis datanya. Ayo telusuri dulu kapan tiap diagram bersinar.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Diagram dan Tugasnya Masing-Masing",
        caption: "Garis untuk tren, lingkaran untuk proporsi, batang untuk perbandingan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Rasakan dulu polanya. Ingin melihat <strong>perubahan dari waktu ke waktu</strong>? Garis paling jujur. Ingin melihat <strong>bagian dari keseluruhan</strong>? Lingkaran cocok. Ingin <strong>membandingkan kategori</strong>? Batang juaranya. Sebelum menghafal aturan, cocokkan dulu setiap kebutuhan dengan diagram yang terasa pas.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Suhu Udara Kota Selama Sepekan",
        unit: "derajat Celsius",
        source: "ilustrasi edukatif",
        note: "Diagram garis tepat di sini karena datanya berurutan dalam waktu, sehingga naik-turun tren terlihat jelas.",
        data: [
          { label: "Sen", value: 28, color: "#6366f1" },
          { label: "Sel", value: 29, color: "#6366f1" },
          { label: "Rab", value: 31, color: "#6366f1" },
          { label: "Kam", value: 30, color: "#6366f1" },
          { label: "Jum", value: 32, color: "#6366f1" },
          { label: "Sab", value: 33, color: "#6366f1" },
          { label: "Min", value: 31, color: "#6366f1" },
        ],
      },
      {
        type: "chart",
        variant: "donut",
        title: "Pembagian 24 Jam Sehari Seorang Siswa",
        unit: "jam",
        source: "ilustrasi edukatif",
        note: "Diagram lingkaran tepat karena semua bagian menjumlah satu keseluruhan utuh, yaitu 24 jam.",
        data: [
          { label: "Tidur", value: 8, color: "#6366f1" },
          { label: "Sekolah", value: 7, color: "#3b82f6" },
          { label: "Belajar", value: 3, color: "#06b6d4" },
          { label: "Bermain", value: 2, color: "#0ea5e9" },
          { label: "Lainnya", value: 4, color: "#38bdf8" },
        ],
      },
      {
        type: "widget",
        widget: "PenjelajahPola",
      },
      {
        type: "callout",
        tone: "info",
        title: "Diagram harus jujur",
        html: "Diagram lingkaran hanya sah bila bagian-bagiannya benar-benar menjumlah satu keseluruhan. Diagram garis menyesatkan bila sumbunya dipotong sehingga kenaikan kecil tampak dramatis. Pilih diagram yang menampilkan data <strong>apa adanya</strong>.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari diagram lingkaran 24 jam, berapa persen waktu yang dipakai untuk tidur? Bulatkan ke satu desimal.",
        answer: 33.3,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "Tidur memakan 8 dari 24 jam. 8 dibagi 24 = 0,333, jadi sekitar <strong>33,3%</strong> dari hari.",
        hint: "Bagi jam tidur (8) dengan total satu hari (24), lalu kalikan 100.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tujuan penyajian dengan diagram yang paling tepat.",
        pairs: [
          { left: "Menampilkan tren suhu sepanjang minggu", right: "Diagram garis" },
          { left: "Menunjukkan proporsi bagian dari satu keseluruhan", right: "Diagram lingkaran" },
          { left: "Membandingkan jumlah antar kategori", right: "Diagram batang" },
          { left: "Menggambarkan kumulatif yang menumpuk seiring waktu", right: "Diagram area" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Tentukan apakah tiap kebutuhan lebih tepat memakai diagram garis atau diagram lingkaran.",
        buckets: ["Diagram garis", "Diagram lingkaran"],
        items: [
          { text: "Perkembangan berat badan bayi tiap bulan", bucket: "Diagram garis" },
          { text: "Persentase pengeluaran keluarga per kategori", bucket: "Diagram lingkaran" },
          { text: "Jumlah pengunjung museum tiap jam", bucket: "Diagram garis" },
          { text: "Bagian suara tiap kandidat dari total pemilih", bucket: "Diagram lingkaran" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Diagram yang menipu",
        html: "Sebuah toko ingin terlihat tumbuh pesat, lalu membuat diagram garis penjualan dengan sumbu mulai dari 95, bukan 0. Kenaikan dari 96 ke 100 jadi tampak melonjak tinggi. Setelah sumbu dikembalikan mulai dari 0, kenaikan itu ternyata kecil. Memilih diagram yang tepat saja tak cukup; skalanya juga harus jujur agar pembaca tidak tertipu.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah berpetualang, baru kita rangkum: <strong>diagram garis</strong> untuk perubahan sepanjang waktu, <strong>diagram lingkaran</strong> untuk proporsi bagian dari keseluruhan, dan <strong>diagram batang</strong> untuk membandingkan kategori. Pilih sesuai jenis data, dan jaga skala tetap jujur agar pesannya benar.",
      },
      {
        type: "takeaways",
        items: [
          "Diagram garis paling tepat untuk data yang berubah sepanjang waktu.",
          "Diagram lingkaran untuk proporsi bagian terhadap satu keseluruhan utuh.",
          "Diagram batang untuk membandingkan jumlah antar kategori.",
          "Diagram yang tepat pun harus berskala jujur agar tidak menyesatkan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Untuk menampilkan tren penjualan tiap bulan selama setahun, diagram paling tepat adalah?",
            options: ["Diagram lingkaran", "Diagram garis", "Diagram batang tunggal", "Tabel kosong"],
            answer: 1,
            explain: "Data berurutan dalam waktu paling jelas digambarkan dengan diagram garis.",
          },
          {
            q: "Diagram lingkaran paling cocok untuk menampilkan?",
            options: [
              "Perubahan dari waktu ke waktu",
              "Proporsi bagian dari satu keseluruhan",
              "Dua variabel yang berkorelasi",
              "Nilai yang terus bertambah",
            ],
            answer: 1,
            explain: "Lingkaran menggambarkan porsi tiap bagian dari keseluruhan yang utuh.",
          },
          {
            q: "Kapan diagram lingkaran menjadi tidak sah dipakai?",
            options: [
              "Saat datanya menjumlah satu keseluruhan",
              "Saat bagian-bagiannya tidak membentuk satu keseluruhan",
              "Saat datanya banyak",
              "Saat warnanya berbeda",
            ],
            answer: 1,
            explain: "Tanpa keseluruhan utuh, porsi lingkaran kehilangan makna.",
          },
          {
            q: "Sebuah diagram garis bisa menyesatkan jika?",
            options: [
              "Sumbunya mulai dari nol",
              "Sumbu vertikalnya dipotong sehingga kenaikan kecil tampak besar",
              "Datanya lengkap",
              "Garisnya berwarna",
            ],
            answer: 1,
            explain: "Memotong sumbu membuat perubahan kecil terlihat dramatis dan menipu.",
          },
          {
            q: "Untuk membandingkan jumlah penduduk lima kota, diagram terbaik adalah?",
            options: ["Diagram garis", "Diagram batang", "Diagram lingkaran berpotong", "Tidak perlu diagram"],
            answer: 1,
            explain: "Membandingkan besaran antar kategori paling jelas dengan diagram batang.",
          },
        ],
      },
    ],
  },
];
