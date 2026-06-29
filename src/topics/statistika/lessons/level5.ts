import type { Lesson } from "../../../types";

export const level5: Lesson[] = [
  // ============================================================
  {
    id: "membaca-distribusi-data",
    levelId: "distribusi-korelasi",
    order: 1,
    title: "Membaca Distribusi Data",
    summary:
      "Sebelum menyimpulkan apa pun, kita lihat dulu bentuk sebaran data: di mana data menumpuk, di mana yang jarang.",
    durationMin: 13,
    tags: ["statistika", "distribusi", "frekuensi", "histogram"],
    blocks: [
      {
        type: "paragraph",
        html: "Seorang guru baru saja memeriksa ulangan 40 siswa. Rata-rata kelas 74. Tetapi angka rata-rata saja menyembunyikan banyak hal: apakah hampir semua siswa dekat 74, atau ada yang sangat tinggi dan sangat rendah? Sebelum menyimpulkan, ayo lihat dulu bentuk sebaran nilainya. Matematika di sini bukan sekadar berhitung rata-rata, melainkan membaca cerita di balik angka.",
      },
      {
        type: "video",
        comp: "StatistikaVideo",
        title: "Video: Bentuk di Balik Angka",
        caption: "Bagaimana sekumpulan data punya bentuk sebaran yang bercerita.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan nilai 40 siswa kita kelompokkan ke dalam selang: 50-59, 60-69, dan seterusnya. Lalu kita hitung berapa siswa di tiap selang dan gambar batangnya. Tiba-tiba muncul sebuah <strong>bentuk</strong>: ada puncak tempat nilai menumpuk dan ada ekor tempat nilai jarang. Inilah distribusi. Mari kita amati sebelum menarik kesimpulan.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Distribusi Nilai Ulangan 40 Siswa",
        unit: "jumlah siswa",
        source: "ilustrasi edukatif",
        note: "Total 40 siswa. Data menumpuk di selang 70-79 (puncak) dan menipis di kedua ujung (ekor).",
        data: [
          { label: "50-59", value: 4, color: "#3b82f6" },
          { label: "60-69", value: 9, color: "#6366f1" },
          { label: "70-79", value: 15, color: "#4f46e5" },
          { label: "80-89", value: 8, color: "#6366f1" },
          { label: "90-100", value: 4, color: "#3b82f6" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorStatistik",
      },
      {
        type: "callout",
        tone: "info",
        title: "Puncak dan ekor",
        html: "Selang dengan batang tertinggi adalah tempat data paling sering muncul, sering disebut <strong>puncak</strong>. Bagian yang rendah di ujung kiri dan kanan disebut <strong>ekor</strong>. Membaca puncak dan ekor membuat kita paham di mana mayoritas data berada, bukan sekadar satu angka rata-rata.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari 40 siswa, berapa persen yang mendapat nilai 80 atau lebih (gabungan selang 80-89 dan 90-100)?",
        answer: 30,
        tolerance: 0.5,
        suffix: "%",
        solution:
          "Siswa dengan nilai 80 atau lebih ada 8 + 4 = 12. Maka 12 dibagi 40 sama dengan 0,30, yaitu <strong>30%</strong>.",
        hint: "Jumlahkan siswa di dua selang teratas, lalu bagi dengan 40 dan kalikan 100.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Berdasarkan distribusi di atas, kelompokkan tiap selang sebagai bagian yang ramai (banyak siswa) atau sepi (sedikit siswa).",
        buckets: ["Banyak siswa", "Sedikit siswa"],
        items: [
          { text: "Selang 70-79 (15 siswa)", bucket: "Banyak siswa" },
          { text: "Selang 60-69 (9 siswa)", bucket: "Banyak siswa" },
          { text: "Selang 50-59 (4 siswa)", bucket: "Sedikit siswa" },
          { text: "Selang 90-100 (4 siswa)", bucket: "Sedikit siswa" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah distribusi dengan maknanya.",
        pairs: [
          { left: "Puncak distribusi", right: "selang dengan frekuensi tertinggi" },
          { left: "Ekor distribusi", right: "bagian ujung dengan frekuensi rendah" },
          { left: "Frekuensi", right: "banyaknya data dalam satu selang" },
          { left: "Distribusi simetris", right: "bentuk kiri dan kanan hampir seimbang" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Dua kelas dengan rata-rata sama",
        html: "Kelas A dan Kelas B sama-sama punya rata-rata 74. Tetapi saat digambar distribusinya, Kelas A menumpuk rapat di sekitar 74, sedangkan Kelas B terbelah: banyak siswa di 50-an dan banyak di 90-an, sangat sedikit di tengah. Rata-rata yang sama menyembunyikan kenyataan yang sangat berbeda. Guru memutuskan memberi Kelas B dua kelompok belajar terpisah, karena distribusinya menunjukkan dua kebutuhan yang berbeda.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah mengamati bentuknya, baru kita simpulkan: <strong>distribusi</strong> menggambarkan bagaimana data tersebar, di mana ia menumpuk dan di mana ia jarang. Rata-rata saja bisa menipu; bentuk sebaran memberi gambaran yang jauh lebih jujur tentang sekelompok data.",
      },
      {
        type: "takeaways",
        items: [
          "Distribusi menunjukkan bagaimana data tersebar, bukan hanya satu angka.",
          "Puncak adalah tempat data sering muncul; ekor adalah ujung yang jarang.",
          "Dua kumpulan data bisa punya rata-rata sama tetapi distribusi sangat berbeda.",
          "Membaca bentuk sebaran membuat kesimpulan lebih jujur dan tepat.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Selang dengan batang tertinggi pada histogram menunjukkan?",
            options: [
              "Data yang paling jarang",
              "Tempat data paling sering muncul",
              "Nilai rata-rata pasti",
              "Kesalahan pengukuran",
            ],
            answer: 1,
            explain: "Batang tertinggi adalah selang dengan frekuensi terbanyak, yaitu puncak distribusi.",
          },
          {
            q: "Mengapa rata-rata saja bisa menyesatkan?",
            options: [
              "Karena rata-rata selalu salah",
              "Karena data dengan rata-rata sama bisa punya sebaran sangat berbeda",
              "Karena rata-rata tidak bisa dihitung",
              "Karena rata-rata hanya untuk angka kecil",
            ],
            answer: 1,
            explain: "Rata-rata sama belum tentu bentuk distribusinya sama.",
          },
          {
            q: "Bagian ujung distribusi yang frekuensinya rendah disebut?",
            options: ["Puncak", "Ekor", "Median", "Modus"],
            answer: 1,
            explain: "Ujung dengan frekuensi rendah disebut ekor distribusi.",
          },
          {
            q: "Frekuensi sebuah selang berarti?",
            options: [
              "Lebar selang",
              "Banyaknya data dalam selang itu",
              "Nilai tertinggi dalam selang",
              "Rata-rata selang",
            ],
            answer: 1,
            explain: "Frekuensi adalah banyaknya data yang jatuh dalam selang tersebut.",
          },
          {
            q: "Dari 40 siswa, 9 ada di selang 60-69. Berapa persennya?",
            options: ["Sekitar 22,5%", "9%", "60%", "Sekitar 40%"],
            answer: 0,
            explain: "9 dibagi 40 sama dengan 0,225, yaitu sekitar 22,5%.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "diagram-pencar",
    levelId: "distribusi-korelasi",
    order: 2,
    title: "Diagram Pencar: Melihat Hubungan Dua Hal",
    summary:
      "Saat tiap individu punya dua angka sekaligus, diagram pencar membantu kita melihat apakah keduanya bergerak bersama.",
    durationMin: 13,
    tags: ["statistika", "diagram-pencar", "korelasi", "dua-variabel"],
    blocks: [
      {
        type: "paragraph",
        html: "Sampai sekarang kita mengamati satu variabel: nilai, tinggi, atau buah kesukaan. Tetapi sering muncul pertanyaan yang lebih menarik: apakah dua hal saling berkaitan? Misalnya, apakah siswa yang belajar lebih lama cenderung mendapat nilai lebih tinggi? Untuk itu kita perlu cara baru memandang data, dan jawabannya bukan sekadar berhitung, melainkan menggambar hubungan.",
      },
      {
        type: "video",
        comp: "BahasaSemesta",
        title: "Video: Dua Angka pada Satu Titik",
        caption: "Bagaimana sepasang nilai untuk tiap individu bisa membentuk pola.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan tiap siswa kita beri dua angka: jam belajar dan nilai ulangan. Tiap siswa menjadi satu titik pada bidang, dengan jam belajar sebagai sumbu mendatar dan nilai sebagai sumbu tegak. Saat semua titik digambar, muncul sebuah <strong>pola</strong>. Jika titik cenderung naik ke kanan, dua hal itu bergerak bersama. Mari kita amati dulu polanya.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Rata-rata Nilai menurut Jam Belajar per Hari",
        unit: "nilai rata-rata",
        source: "ilustrasi edukatif",
        note: "Setiap titik adalah rata-rata nilai siswa pada kelompok jam belajar yang sama. Garis cenderung naik ke kanan: tren positif.",
        data: [
          { label: "1 jam", value: 60, color: "#6366f1" },
          { label: "2 jam", value: 68, color: "#6366f1" },
          { label: "3 jam", value: 74, color: "#6366f1" },
          { label: "4 jam", value: 82, color: "#6366f1" },
          { label: "5 jam", value: 88, color: "#6366f1" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorStatistik",
      },
      {
        type: "callout",
        tone: "info",
        title: "Membaca pola titik",
        html: "Pada diagram pencar, kita memperhatikan arah dan kerapatan titik. Titik yang <strong>naik ke kanan</strong> menandakan hubungan searah, <strong>turun ke kanan</strong> menandakan hubungan berlawanan, dan titik yang <strong>berserak acak</strong> menandakan hampir tidak ada hubungan. Diagram pencar tidak menghitung, ia memperlihatkan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari data di atas, nilai rata-rata naik dari 60 (1 jam) menjadi 88 (5 jam). Rata-rata, berapa kenaikan nilai untuk setiap tambahan 1 jam belajar?",
        answer: 7,
        tolerance: 0.1,
        suffix: " poin",
        solution:
          "Kenaikan total 88 - 60 = 28 poin terjadi sepanjang 5 - 1 = 4 langkah jam. Maka 28 dibagi 4 sama dengan <strong>7 poin</strong> per jam.",
        hint: "Bagi selisih nilai total dengan selisih jam total.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan tiap gambaran sebaran titik sebagai menunjukkan hubungan atau hampir tanpa hubungan.",
        buckets: ["Ada hubungan", "Hampir tanpa hubungan"],
        items: [
          { text: "Titik rapi naik ke kanan", bucket: "Ada hubungan" },
          { text: "Titik rapi turun ke kanan", bucket: "Ada hubungan" },
          { text: "Titik berserak acak tanpa arah", bucket: "Hampir tanpa hubungan" },
          { text: "Titik tersebar merata di seluruh bidang", bucket: "Hampir tanpa hubungan" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan bagian diagram pencar dengan perannya.",
        pairs: [
          { left: "Sumbu mendatar", right: "menampilkan variabel pertama" },
          { left: "Sumbu tegak", right: "menampilkan variabel kedua" },
          { left: "Satu titik", right: "sepasang nilai untuk satu individu" },
          { left: "Arah titik", right: "menunjukkan jenis hubungan dua variabel" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pelatih dan waktu latihan",
        html: "Seorang pelatih lari mencatat dua angka tiap atlet: jam latihan per minggu dan waktu tempuh 100 meter. Saat digambar sebagai diagram pencar, titik-titiknya cenderung turun ke kanan: makin banyak latihan, waktu tempuh makin kecil (makin cepat). Pelatih tidak buru-buru menyimpulkan sebabnya, tetapi pola itu cukup untuk mendorongnya menambah sesi latihan terstruktur. Diagram pencar mengubah catatan acak menjadi arah yang bisa diuji.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah mengamati titik-titiknya, baru kita simpulkan: <strong>diagram pencar</strong> menampilkan tiap individu sebagai satu titik dengan dua nilai. Dari arah sebaran titik, kita bisa menduga apakah dua variabel bergerak bersama, berlawanan, atau tidak berkaitan. Ini langkah pertama memahami hubungan, bukan langkah terakhir.",
      },
      {
        type: "takeaways",
        items: [
          "Diagram pencar memetakan tiap individu sebagai satu titik dengan dua nilai.",
          "Titik naik ke kanan menandakan hubungan searah; turun ke kanan menandakan berlawanan.",
          "Titik berserak acak menandakan hampir tidak ada hubungan.",
          "Diagram pencar memperlihatkan pola, bukan membuktikan penyebab.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Satu titik pada diagram pencar mewakili?",
            options: [
              "Satu variabel saja",
              "Sepasang nilai untuk satu individu",
              "Rata-rata semua data",
              "Jumlah seluruh data",
            ],
            answer: 1,
            explain: "Tiap titik memuat dua nilai sekaligus untuk satu individu.",
          },
          {
            q: "Titik yang cenderung naik ke kanan menandakan?",
            options: [
              "Hubungan berlawanan",
              "Hubungan searah",
              "Tidak ada data",
              "Kesalahan grafik",
            ],
            answer: 1,
            explain: "Naik ke kanan berarti saat satu variabel naik, yang lain cenderung ikut naik.",
          },
          {
            q: "Titik yang berserak acak tanpa arah menunjukkan?",
            options: [
              "Hubungan yang sangat kuat",
              "Hampir tidak ada hubungan",
              "Hubungan berlawanan sempurna",
              "Data palsu",
            ],
            answer: 1,
            explain: "Sebaran acak menandakan dua variabel hampir tidak berkaitan.",
          },
          {
            q: "Pada contoh jam belajar dan nilai, polanya adalah?",
            options: [
              "Turun ke kanan",
              "Naik ke kanan",
              "Acak",
              "Datar sempurna",
            ],
            answer: 1,
            explain: "Nilai rata-rata naik seiring bertambahnya jam belajar, jadi naik ke kanan.",
          },
          {
            q: "Nilai naik dari 60 ke 88 sepanjang 4 langkah jam. Kenaikan per jam adalah?",
            options: ["28 poin", "4 poin", "7 poin", "14 poin"],
            answer: 2,
            explain: "28 dibagi 4 sama dengan 7 poin per jam.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "korelasi-positif-negatif",
    levelId: "distribusi-korelasi",
    order: 3,
    title: "Korelasi Positif dan Negatif",
    summary:
      "Kita beri nama pada pola diagram pencar: korelasi positif saat keduanya naik bersama, negatif saat satu naik dan satu turun.",
    durationMin: 13,
    tags: ["statistika", "korelasi", "positif", "negatif"],
    blocks: [
      {
        type: "paragraph",
        html: "Setelah bisa membaca arah titik pada diagram pencar, kini kita beri nama yang tepat pada polanya. Saat dua hal cenderung naik bersama, dan saat satu naik sementara yang lain justru turun, keduanya punya istilah sendiri. Memberi nama yang tepat membuat kita bisa membandingkan hubungan secara jujur, bukan sekadar menebak.",
      },
      {
        type: "video",
        comp: "StatistikaVideo",
        title: "Video: Searah atau Berlawanan",
        caption: "Membedakan dua arah hubungan antar variabel.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dua catatan. Pertama: tinggi dan berat badan anak, makin tinggi cenderung makin berat, titik naik ke kanan. Kedua: suhu udara dan penjualan jaket, makin panas penjualan jaket makin sedikit, titik turun ke kanan. Dua pola ini berlawanan arah. Mari kita amati dulu, lalu kita beri nama yang tepat.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Suhu Udara dan Penjualan Jaket Harian",
        unit: "jaket terjual",
        source: "ilustrasi edukatif",
        note: "Makin tinggi suhu, makin sedikit jaket terjual. Garis turun ke kanan: korelasi negatif.",
        data: [
          { label: "15 derajat", value: 50, color: "#0ea5e9" },
          { label: "20 derajat", value: 38, color: "#0ea5e9" },
          { label: "25 derajat", value: 25, color: "#0ea5e9" },
          { label: "30 derajat", value: 12, color: "#0ea5e9" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorPenyebaran",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua nama, satu gagasan",
        html: "<strong>Korelasi positif</strong>: dua variabel cenderung naik bersama (titik naik ke kanan). <strong>Korelasi negatif</strong>: saat satu naik, yang lain cenderung turun (titik turun ke kanan). Makin rapat titik mengikuti garis, makin kuat korelasinya. Kata <em>cenderung</em> penting, sebab korelasi bicara soal kecenderungan, bukan kepastian tiap individu.",
      },
      {
        type: "calcExercise",
        prompt:
          "Saat suhu naik dari 15 ke 30 derajat, penjualan jaket turun dari 50 menjadi 12. Berapa banyak jaket yang berkurang seluruhnya?",
        answer: 38,
        tolerance: 0.1,
        suffix: " jaket",
        solution:
          "Penurunan adalah 50 - 12 = <strong>38 jaket</strong>. Karena penjualan turun saat suhu naik, hubungannya korelasi negatif.",
        hint: "Hitung selisih penjualan tertinggi dan terendah.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pasangan variabel sebagai cenderung korelasi positif atau negatif.",
        buckets: ["Korelasi positif", "Korelasi negatif"],
        items: [
          { text: "Tinggi badan dan berat badan", bucket: "Korelasi positif" },
          { text: "Jam belajar dan nilai ujian", bucket: "Korelasi positif" },
          { text: "Suhu udara dan penjualan jaket", bucket: "Korelasi negatif" },
          { text: "Kecepatan kendaraan dan waktu tempuh", bucket: "Korelasi negatif" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah korelasi dengan ciri arahnya.",
        pairs: [
          { left: "Korelasi positif", right: "titik naik ke kanan, keduanya naik bersama" },
          { left: "Korelasi negatif", right: "titik turun ke kanan, satu naik satu turun" },
          { left: "Korelasi kuat", right: "titik rapat mengikuti satu garis" },
          { left: "Korelasi lemah", right: "titik agak menyebar dari garis" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Toko es teh dan cuaca",
        html: "Pemilik kedai mencatat suhu harian dan jumlah es teh terjual. Diagram pencarnya naik ke kanan: makin panas hari, makin banyak es teh laku, sebuah korelasi positif yang cukup kuat. Berbekal pola ini, ia menyiapkan lebih banyak es saat ramalan cuaca menyebut hari panas. Ia berhati-hati: korelasi hanya memberi kecenderungan, jadi ia tetap menyisakan ruang untuk hari yang tak terduga. Memberi nama pada pola membantunya merencanakan tanpa terlalu yakin.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah mengamati arahnya, baru kita simpulkan: <strong>korelasi positif</strong> berarti dua variabel cenderung naik bersama, <strong>korelasi negatif</strong> berarti satu naik saat yang lain turun. Kekuatannya terlihat dari serapat apa titik mengikuti garis. Korelasi menggambarkan kecenderungan, bukan jaminan untuk setiap individu.",
      },
      {
        type: "takeaways",
        items: [
          "Korelasi positif: dua variabel cenderung naik bersama (titik naik ke kanan).",
          "Korelasi negatif: satu naik saat yang lain turun (titik turun ke kanan).",
          "Makin rapat titik mengikuti garis, makin kuat korelasinya.",
          "Korelasi bicara kecenderungan kelompok, bukan kepastian tiap individu.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dua variabel yang cenderung naik bersama memiliki?",
            options: ["Korelasi negatif", "Korelasi positif", "Tidak ada korelasi", "Korelasi nol"],
            answer: 1,
            explain: "Naik bersama berarti korelasi positif.",
          },
          {
            q: "Saat suhu naik dan penjualan jaket turun, itu contoh?",
            options: ["Korelasi positif", "Korelasi negatif", "Tanpa korelasi", "Korelasi acak"],
            answer: 1,
            explain: "Satu naik, satu turun, jadi korelasi negatif.",
          },
          {
            q: "Korelasi disebut kuat jika?",
            options: [
              "Titik tersebar acak",
              "Titik rapat mengikuti satu garis",
              "Hanya ada satu titik",
              "Garisnya datar",
            ],
            answer: 1,
            explain: "Titik yang rapat mengikuti garis menandakan korelasi kuat.",
          },
          {
            q: "Pernyataan yang benar tentang korelasi adalah?",
            options: [
              "Berlaku pasti untuk setiap individu",
              "Menggambarkan kecenderungan, bukan kepastian",
              "Selalu berarti sebab-akibat",
              "Hanya untuk data kategori",
            ],
            answer: 1,
            explain: "Korelasi menunjukkan kecenderungan kelompok, bukan kepastian per individu.",
          },
          {
            q: "Penjualan turun dari 50 ke 12. Berapa pengurangannya?",
            options: ["62", "38", "12", "50"],
            answer: 1,
            explain: "50 - 12 = 38.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "korelasi-bukan-sebab-akibat",
    levelId: "distribusi-korelasi",
    order: 4,
    title: "Korelasi Bukan Sebab-Akibat",
    summary:
      "Pelajaran paling penting: dua hal yang bergerak bersama belum tentu yang satu menyebabkan yang lain.",
    durationMin: 14,
    tags: ["statistika", "korelasi", "sebab-akibat", "berpikir-kritis"],
    blocks: [
      {
        type: "paragraph",
        html: "Sekarang kita sampai pada pelajaran paling penting sekaligus paling sering dilanggar. Kita sudah pandai menemukan korelasi. Tetapi godaan terbesar adalah langsung berkata: berarti yang satu menyebabkan yang lain. Di sinilah matematika berubah menjadi cara berpikir kritis, bukan sekadar berhitung. Mari kita uji godaan itu sebelum percaya.",
      },
      {
        type: "video",
        comp: "PenyebaranVideo",
        title: "Video: Bergerak Bersama, Belum Tentu Menyebabkan",
        caption: "Mengapa korelasi tidak otomatis berarti sebab-akibat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan data sebuah kota sepanjang tahun: bulan-bulan dengan penjualan es krim tinggi ternyata juga bulan-bulan dengan kasus tenggelam tinggi. Korelasinya kuat dan positif. Apakah es krim menyebabkan orang tenggelam? Tentu tidak. Ada faktor ketiga yang tersembunyi. Mari kita amati pola musimannya dulu, lalu cari biang sebenarnya.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Penjualan Es Krim per Bulan (Sebuah Kota)",
        unit: "ribu porsi",
        source: "ilustrasi edukatif",
        note: "Penjualan memuncak di pertengahan tahun saat cuaca panas. Kasus tenggelam juga memuncak di bulan yang sama. Keduanya didorong oleh cuaca, bukan saling menyebabkan.",
        data: [
          { label: "Feb", value: 12, color: "#6366f1" },
          { label: "Apr", value: 20, color: "#6366f1" },
          { label: "Jun", value: 34, color: "#4f46e5" },
          { label: "Agu", value: 33, color: "#4f46e5" },
          { label: "Okt", value: 19, color: "#6366f1" },
          { label: "Des", value: 11, color: "#6366f1" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorPenyebaran",
      },
      {
        type: "callout",
        tone: "info",
        title: "Variabel perancu",
        html: "Faktor tersembunyi yang memengaruhi dua hal sekaligus disebut <strong>variabel perancu</strong> (lurking). Pada contoh tadi, cuaca panas mendorong orang membeli es krim sekaligus berenang, sehingga es krim dan kasus tenggelam tampak berkorelasi padahal tak saling menyebabkan. Untuk membuktikan sebab-akibat, kita butuh lebih dari sekadar korelasi: biasanya percobaan terkontrol dan alasan yang masuk akal.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan tiap hubungan: apakah masuk akal sebagai sebab-akibat langsung, atau lebih mungkin korelasi karena faktor lain?",
        buckets: ["Mungkin sebab-akibat langsung", "Korelasi karena faktor lain"],
        items: [
          { text: "Penjualan es krim dan kasus tenggelam meningkat bersama", bucket: "Korelasi karena faktor lain" },
          { text: "Jumlah jam belajar dan penguasaan materi meningkat bersama", bucket: "Mungkin sebab-akibat langsung" },
          { text: "Banyak mobil pemadam di sebuah kebakaran dan besarnya kerugian", bucket: "Korelasi karena faktor lain" },
          { text: "Memakai tabir surya dan kulit terlindung dari sengatan matahari", bucket: "Mungkin sebab-akibat langsung" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Penjualan es krim memuncak 34 ribu porsi di Jun dan terendah 11 ribu porsi di Des. Berapa selisih puncak dan dasarnya?",
        answer: 23,
        tolerance: 0.1,
        suffix: " ribu porsi",
        solution:
          "Selisihnya 34 - 11 = <strong>23 ribu porsi</strong>. Pola musiman ini sejajar dengan suhu, faktor yang juga memengaruhi aktivitas berenang.",
        hint: "Kurangkan nilai terendah dari nilai tertinggi.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah berpikir kritis dengan maknanya.",
        pairs: [
          { left: "Korelasi", right: "dua hal cenderung bergerak bersama" },
          { left: "Sebab-akibat", right: "satu hal benar-benar menyebabkan yang lain" },
          { left: "Variabel perancu", right: "faktor tersembunyi yang memengaruhi keduanya" },
          { left: "Korelasi semu", right: "hubungan yang muncul karena kebetulan atau faktor lain" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kota dengan banyak rumah sakit",
        html: "Sebuah laporan menemukan kota dengan lebih banyak rumah sakit ternyata punya lebih banyak orang sakit. Seseorang buru-buru menyimpulkan: rumah sakit membuat orang sakit. Salah besar. Variabel perancunya adalah jumlah penduduk: kota berpenduduk besar punya banyak rumah sakit dan, tentu saja, banyak orang yang kebetulan sakit. Setelah mempertimbangkan jumlah penduduk, hubungan menyesatkan itu lenyap. Berpikir kritis menyelamatkan kita dari kesimpulan yang keliru.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah menguji godaan itu, baru kita simpulkan: <strong>korelasi tidak menyiratkan sebab-akibat</strong>. Dua hal bisa bergerak bersama karena kebetulan atau karena variabel perancu. Untuk menyatakan sesuatu menyebabkan yang lain, kita butuh bukti lebih: alasan yang masuk akal dan, idealnya, percobaan terkontrol. Inilah inti statistika sebagai cara berpikir, bukan sekadar berhitung.",
      },
      {
        type: "takeaways",
        items: [
          "Korelasi tidak otomatis berarti sebab-akibat.",
          "Variabel perancu bisa membuat dua hal tampak berhubungan padahal tidak saling menyebabkan.",
          "Untuk membuktikan sebab-akibat dibutuhkan alasan masuk akal dan percobaan terkontrol.",
          "Berpikir kritis menjaga kita dari kesimpulan yang menyesatkan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pernyataan paling tepat tentang korelasi adalah?",
            options: [
              "Korelasi selalu berarti sebab-akibat",
              "Korelasi tidak otomatis berarti sebab-akibat",
              "Korelasi tidak pernah berguna",
              "Korelasi hanya untuk data kategori",
            ],
            answer: 1,
            explain: "Korelasi menunjukkan hubungan, tetapi bukan bukti sebab-akibat.",
          },
          {
            q: "Faktor tersembunyi yang memengaruhi dua variabel sekaligus disebut?",
            options: ["Variabel perancu", "Median", "Frekuensi", "Modus"],
            answer: 0,
            explain: "Itu disebut variabel perancu atau lurking variable.",
          },
          {
            q: "Es krim dan kasus tenggelam berkorelasi karena?",
            options: [
              "Es krim membuat orang tenggelam",
              "Keduanya didorong cuaca panas",
              "Kebetulan tanpa sebab apa pun yang bisa dijelaskan",
              "Kesalahan menghitung",
            ],
            answer: 1,
            explain: "Cuaca panas adalah variabel perancu yang mendorong keduanya.",
          },
          {
            q: "Untuk membuktikan sebab-akibat, idealnya kita perlu?",
            options: [
              "Cukup melihat korelasi kuat",
              "Alasan masuk akal dan percobaan terkontrol",
              "Data sebanyak mungkin saja",
              "Diagram yang berwarna",
            ],
            answer: 1,
            explain: "Sebab-akibat butuh bukti tambahan, bukan sekadar korelasi.",
          },
          {
            q: "Kota dengan banyak rumah sakit punya banyak orang sakit terutama karena?",
            options: [
              "Rumah sakit menyebabkan penyakit",
              "Jumlah penduduk yang besar",
              "Es krim",
              "Kebetulan semata",
            ],
            answer: 1,
            explain: "Jumlah penduduk adalah variabel perancunya.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "distribusi-normal",
    levelId: "distribusi-korelasi",
    order: 5,
    title: "Distribusi Normal: Kurva Lonceng",
    summary:
      "Banyak ukuran alami, seperti tinggi badan, membentuk lonceng simetris. Dari bentuk ini lahir aturan praktis untuk menebak sebaran data.",
    durationMin: 14,
    tags: ["statistika", "distribusi", "normal", "kurva-lonceng"],
    blocks: [
      {
        type: "paragraph",
        html: "Ukur tinggi badan ribuan orang dewasa, lalu gambar distribusinya. Anehnya, bentuk yang muncul hampir selalu sama: sebuah lonceng. Sangat sedikit yang amat pendek, sangat sedikit yang amat tinggi, dan mayoritas berkumpul di tengah. Bentuk ini begitu sering muncul di alam sehingga diberi nama khusus. Sebelum memakai aturannya, ayo amati dulu lonceng itu lahir.",
      },
      {
        type: "video",
        comp: "StatistikaVideo",
        title: "Video: Mengapa Alam Suka Bentuk Lonceng",
        caption: "Dari tumpukan data alami menuju kurva normal yang simetris.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan tinggi 1.000 orang dewasa kita kelompokkan per 5 cm. Hitung dan gambar batangnya. Yang muncul bukan sembarang bentuk: batang tertinggi ada di tengah, lalu menurun mulus dan <strong>simetris</strong> ke kiri dan ke kanan. Mayoritas dekat rata-rata, makin jauh dari pusat makin jarang. Inilah ciri distribusi normal yang akan kita beri aturan praktis.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Distribusi Tinggi Badan 1.000 Orang Dewasa",
        unit: "jumlah orang",
        source: "ilustrasi edukatif",
        note: "Total 1.000 orang. Bentuknya lonceng: memuncak di tengah (165-170 cm) dan menipis simetris ke kedua ujung.",
        data: [
          { label: "150-155", value: 15, color: "#3b82f6" },
          { label: "155-160", value: 90, color: "#6366f1" },
          { label: "160-165", value: 230, color: "#4f46e5" },
          { label: "165-170", value: 330, color: "#4338ca" },
          { label: "170-175", value: 230, color: "#4f46e5" },
          { label: "175-180", value: 90, color: "#6366f1" },
          { label: "180-185", value: 15, color: "#3b82f6" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorStatistik",
      },
      {
        type: "callout",
        tone: "info",
        title: "Aturan 68-95-99,7",
        html: "Pada distribusi normal berlaku pola yang rapi: sekitar <strong>68%</strong> data berada dalam jarak 1 simpangan baku dari rata-rata, sekitar <strong>95%</strong> dalam 2 simpangan baku, dan sekitar <strong>99,7%</strong> dalam 3 simpangan baku. Selain itu, rata-rata, median, dan modus semuanya berimpit tepat di pusat lonceng.",
      },
      {
        type: "calcExercise",
        prompt:
          "Tinggi badan sebuah kelompok berdistribusi normal dengan rata-rata 165 cm dan simpangan baku 7 cm. Kira-kira berapa persen orang bertinggi antara 158 dan 172 cm (yaitu dalam 1 simpangan baku)?",
        answer: 68,
        tolerance: 1,
        suffix: "%",
        solution:
          "Rentang 158 sampai 172 cm adalah rata-rata plus minus 1 simpangan baku (165 plus minus 7). Menurut aturan, sekitar <strong>68%</strong> data ada di sana.",
        hint: "158 dan 172 berjarak tepat 7 cm (satu simpangan baku) dari rata-rata 165.",
      },
      {
        type: "calcExercise",
        prompt:
          "Pada kelompok yang sama (rata-rata 165 cm, simpangan baku 7 cm), kira-kira berapa persen orang bertinggi antara 151 dan 179 cm?",
        answer: 95,
        tolerance: 1,
        suffix: "%",
        solution:
          "Rentang 151 sampai 179 cm adalah rata-rata plus minus 2 simpangan baku (165 plus minus 14). Menurut aturan, sekitar <strong>95%</strong> data ada di sana.",
        hint: "151 dan 179 berjarak 14 cm, yaitu dua simpangan baku, dari rata-rata.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap data: bentuknya cenderung lonceng normal atau bukan?",
        buckets: ["Cenderung normal (lonceng)", "Bukan normal"],
        items: [
          { text: "Tinggi badan orang dewasa", bucket: "Cenderung normal (lonceng)" },
          { text: "Hasil pelemparan satu dadu (rata)", bucket: "Bukan normal" },
          { text: "Berat bayi yang baru lahir", bucket: "Cenderung normal (lonceng)" },
          { text: "Kekayaan penduduk (banyak menengah bawah, sedikit sangat kaya)", bucket: "Bukan normal" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap istilah dengan maknanya pada distribusi normal.",
        pairs: [
          { left: "Distribusi normal", right: "berbentuk lonceng dan simetris" },
          { left: "Aturan 68%", right: "data dalam 1 simpangan baku dari rata-rata" },
          { left: "Aturan 95%", right: "data dalam 2 simpangan baku dari rata-rata" },
          { left: "Pusat lonceng", right: "tempat mean, median, dan modus berimpit" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kontrol mutu pengisian botol",
        html: "Sebuah pabrik mengisi botol minuman dengan rata-rata 600 ml dan simpangan baku 3 ml, dan isinya berdistribusi normal. Dengan aturan 95%, sekitar 95% botol berisi antara 594 dan 606 ml (yaitu 600 plus minus 6 ml). Botol di luar rentang itu, kira-kira hanya 5%, langsung disisihkan untuk diperiksa. Tanpa memeriksa setiap botol satu per satu, distribusi normal memberi pabrik patokan cepat untuk menjaga mutu. Statistika di sini menjadi alat kerja, bukan sekadar hitungan di kertas.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah mengamati bentuknya, baru kita simpulkan: <strong>distribusi normal</strong> adalah sebaran berbentuk lonceng simetris dengan mean, median, dan modus berimpit di pusat. Aturan <strong>68-95-99,7</strong> memberi cara cepat menebak berapa banyak data yang berada dalam 1, 2, atau 3 simpangan baku dari rata-rata.",
      },
      {
        type: "takeaways",
        items: [
          "Distribusi normal berbentuk lonceng simetris, memuncak di tengah.",
          "Pada distribusi normal, mean, median, dan modus berimpit di pusat.",
          "Sekitar 68% data dalam 1 simpangan baku, 95% dalam 2, dan 99,7% dalam 3.",
          "Banyak ukuran alami, seperti tinggi badan, mendekati distribusi normal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Distribusi normal memiliki bentuk?",
            options: ["Mendatar rata", "Lonceng simetris", "Naik terus", "Acak tanpa pola"],
            answer: 1,
            explain: "Ciri khas distribusi normal adalah kurva lonceng yang simetris.",
          },
          {
            q: "Pada distribusi normal, mean, median, dan modus?",
            options: [
              "Selalu berjauhan",
              "Berimpit di pusat lonceng",
              "Tidak bisa dihitung",
              "Selalu nol",
            ],
            answer: 1,
            explain: "Karena simetris, ketiganya jatuh di titik tengah yang sama.",
          },
          {
            q: "Sekitar berapa persen data berada dalam 1 simpangan baku dari rata-rata?",
            options: ["50%", "68%", "95%", "99,7%"],
            answer: 1,
            explain: "Aturan empiris menyebut sekitar 68% data dalam 1 simpangan baku.",
          },
          {
            q: "Sekitar berapa persen data berada dalam 2 simpangan baku dari rata-rata?",
            options: ["68%", "95%", "99,7%", "100%"],
            answer: 1,
            explain: "Sekitar 95% data berada dalam 2 simpangan baku dari rata-rata.",
          },
          {
            q: "Tinggi rata-rata 165 cm, simpangan baku 7 cm. Rentang 158-172 cm mencakup sekitar?",
            options: ["34%", "68%", "95%", "99,7%"],
            answer: 1,
            explain: "158 sampai 172 adalah 1 simpangan baku dari rata-rata, jadi sekitar 68%.",
          },
        ],
      },
    ],
  },
];
