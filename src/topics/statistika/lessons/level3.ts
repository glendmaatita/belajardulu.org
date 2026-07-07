import type { Lesson } from "../../../types";

export const level3: Lesson[] = [
  // ============================================================
  {
    id: "jangkauan-data",
    levelId: "penyebaran",
    order: 1,
    title: "Jangkauan: Seberapa Lebar Data Tersebar",
    summary:
      "Dua kelompok bisa punya rata-rata yang sama, tetapi terasa sangat berbeda. Kita mulai melihat sebaran lewat ukuran paling sederhana: jangkauan.",
    durationMin: 12,
    tags: ["statistika", "penyebaran", "jangkauan", "sebaran"],
    blocks: [
      {
        type: "paragraph",
        html: "Dua kelas mengikuti ulangan yang sama, dan keduanya punya nilai rata-rata 74. Sekilas tampak setara. Namun di Kelas A nilai murid berkumpul rapat di sekitar 74, sedangkan di Kelas B ada yang dapat 58 dan ada yang dapat 90. Rata-rata yang sama ternyata menyembunyikan cerita yang sangat berbeda. Sebelum menghitung apa pun, ayo cari cara mengukur seberapa lebar data tersebar.",
      },
      {
        type: "video",
        comp: "PenyebaranVideo",
        title: "Video: Rata-rata Sama, Cerita Berbeda",
        caption: "Mengapa satu angka rata-rata tidak pernah cukup untuk memahami data.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dua kelompok dengan rata-rata sama. Kelompok A: 70, 72, 74, 76, 78. Kelompok B: 58, 66, 74, 82, 90. Keduanya berata-rata 74. Tetapi coba lihat jarak dari nilai terkecil ke terbesar. Di A jaraknya pendek, di B jaraknya jauh. Perasaan 'lebih menyebar' itu sebenarnya bisa diukur, dan ukuran termudahnya hanya selisih dua angka.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Jangkauan Nilai Dua Kelas (rata-rata sama, 74)",
        unit: "rentang nilai (maks − min)",
        source: "ilustrasi edukatif",
        note: "Kelas A: 70 sampai 78, jangkauan 8. Kelas B: 58 sampai 90, jangkauan 32. Batang yang jauh lebih tinggi menunjukkan Kelas B jauh lebih menyebar walau rata-ratanya sama.",
        data: [
          { label: "Kelas A", value: 8, color: "#06b6d4" },
          { label: "Kelas B", value: 32, color: "#6366f1" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorPenyebaran",
      },
      {
        type: "callout",
        tone: "info",
        title: "Sederhana tetapi mudah tertipu",
        html: "Jangkauan hanya melihat dua nilai ekstrem, yaitu yang terbesar dan terkecil. Karena itu, satu nilai yang sangat menyimpang bisa membuat jangkauan terlihat besar walau sebagian besar data sebenarnya rapat. Jangkauan adalah langkah pertama, bukan kata terakhir.",
      },
      {
        type: "calcExercise",
        prompt:
          "Diketahui data: 12, 7, 19, 4, 15. Berapa jangkauan data tersebut?",
        answer: 15,
        tolerance: 0,
        solution:
          "Nilai terbesar adalah 19 dan nilai terkecil adalah 4. Jangkauan = 19 − 4 = <strong>15</strong>.",
        hint: "Cari nilai terbesar dan terkecil, lalu kurangkan.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan tiap kumpulan data sebagai lebih seragam (jangkauan kecil) atau lebih menyebar (jangkauan besar).",
        buckets: ["Lebih seragam", "Lebih menyebar"],
        items: [
          { text: "Nilai 70, 72, 74, 76, 78 (jangkauan 8)", bucket: "Lebih seragam" },
          { text: "Nilai 58, 66, 74, 82, 90 (jangkauan 32)", bucket: "Lebih menyebar" },
          { text: "Tinggi 150, 151, 152 cm", bucket: "Lebih seragam" },
          { text: "Tinggi 140, 160, 180 cm", bucket: "Lebih menyebar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memilih pemasok air minum",
        html: "Sebuah kantin menguji isi botol dari dua pemasok. Keduanya rata-rata berisi 600 ml. Pemasok pertama isinya 598 sampai 602 ml, jangkauannya hanya 4 ml. Pemasok kedua isinya 560 sampai 640 ml, jangkauannya 80 ml. Walau rata-ratanya sama, kantin memilih pemasok pertama karena isinya jauh lebih konsisten. Jangkauan membantu mengubah perasaan 'lebih stabil' menjadi angka yang bisa dibandingkan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumusnya baru muncul di akhir",
        html: "Setelah berpetualang, baru kita rangkum. <strong>Jangkauan = nilai terbesar − nilai terkecil.</strong> Ia mengukur lebar total sebaran data dengan satu pengurangan sederhana. Cepat dihitung, tetapi hanya bersandar pada dua nilai ekstrem, sehingga peka terhadap pencilan.",
      },
      {
        type: "takeaways",
        items: [
          "Rata-rata yang sama bisa menyembunyikan sebaran yang sangat berbeda.",
          "Jangkauan = nilai terbesar dikurangi nilai terkecil.",
          "Jangkauan kecil berarti data lebih seragam, jangkauan besar berarti lebih menyebar.",
          "Jangkauan hanya memakai dua nilai ekstrem, jadi mudah terpengaruh pencilan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Jangkauan sebuah data dihitung dengan?",
            options: [
              "Nilai terbesar dikurangi nilai terkecil",
              "Jumlah semua nilai dibagi banyak data",
              "Nilai yang paling sering muncul",
              "Nilai tengah data",
            ],
            answer: 0,
            explain: "Jangkauan adalah selisih nilai terbesar dan terkecil.",
          },
          {
            q: "Data 5, 9, 3, 12, 8 memiliki jangkauan?",
            options: ["3", "9", "12", "8"],
            answer: 1,
            explain: "Terbesar 12, terkecil 3, jangkauan = 12 − 3 = 9.",
          },
          {
            q: "Dua kelompok berata-rata sama. Mana yang pasti benar?",
            options: [
              "Sebaran keduanya pasti sama",
              "Sebaran keduanya bisa berbeda",
              "Jangkauan keduanya pasti nol",
              "Datanya pasti identik",
            ],
            answer: 1,
            explain: "Rata-rata sama tidak menjamin sebaran sama.",
          },
          {
            q: "Kelemahan utama jangkauan adalah?",
            options: [
              "Sulit dihitung",
              "Hanya bergantung pada dua nilai ekstrem",
              "Selalu bernilai negatif",
              "Tidak bisa untuk angka",
            ],
            answer: 1,
            explain: "Karena hanya memakai maks dan min, jangkauan peka terhadap pencilan.",
          },
          {
            q: "Botol A berisi 598 sampai 602 ml, botol B berisi 560 sampai 640 ml. Mana lebih konsisten?",
            options: ["Botol B", "Sama saja", "Botol A", "Tidak bisa ditentukan"],
            answer: 2,
            explain: "Botol A jangkauannya 4 ml, jauh lebih kecil daripada 80 ml, jadi lebih konsisten.",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "kuartil-dan-jangkauan-antarkuartil",
    levelId: "penyebaran",
    order: 2,
    title: "Kuartil dan Jangkauan Antarkuartil",
    summary:
      "Jika jangkauan terlalu mudah tertipu pencilan, kita potong data menjadi empat bagian dan ukur sebaran bagian tengahnya saja.",
    durationMin: 14,
    tags: ["statistika", "penyebaran", "kuartil", "iqr"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan dua tim penjualan dengan rata-rata mirip. Tim A hasilnya cukup rapat, tetapi satu hari ada penjualan luar biasa besar. Jika kita pakai jangkauan, Tim A langsung terlihat sangat menyebar gara-gara satu hari itu. Padahal sehari-hari mereka stabil. Sebelum percaya pada angka ekstrem, ayo cari cara mengukur sebaran yang lebih tahan terhadap pencilan.",
      },
      {
        type: "video",
        comp: "PenyebaranVideo",
        title: "Video: Membagi Data Menjadi Empat",
        caption: "Cara melihat sebaran bagian tengah data tanpa terganggu nilai ekstrem.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Susun data dari kecil ke besar, lalu bagi menjadi empat bagian sama banyak. Tiga titik pembaginya disebut kuartil: Q1 di seperempat bawah, Q2 tepat di tengah (sama dengan median), dan Q3 di tiga perempat. Dua kelompok bisa berata-rata sama, tetapi jika jarak antara Q1 dan Q3 berbeda, bagian tengah datanya menyebar dengan lebar yang berbeda pula. Inilah yang akan kita ukur.",
      },
      {
        type: "widget",
        widget: "SimulatorPenyebaran",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa hanya bagian tengah?",
        html: "Jangkauan antarkuartil mengukur sebaran 50% data yang berada di tengah, yaitu antara Q1 dan Q3. Karena mengabaikan seperempat data terbawah dan seperempat teratas, ukuran ini <strong>tidak mudah terganggu</strong> oleh satu nilai yang sangat besar atau sangat kecil.",
      },
      {
        type: "calcExercise",
        prompt:
          "Diketahui data terurut: 5, 7, 8, 10, 12, 15, 20. Hitung jangkauan antarkuartil (Q3 − Q1).",
        answer: 8,
        tolerance: 0,
        solution:
          "Median (Q2) adalah nilai tengah, yaitu 10. Bagian bawah sebelum median: 5, 7, 8, sehingga Q1 = 7. Bagian atas sesudah median: 12, 15, 20, sehingga Q3 = 15. Jangkauan antarkuartil = 15 − 7 = <strong>8</strong>.",
        hint: "Cari median lebih dulu, lalu cari median bagian bawah (Q1) dan median bagian atas (Q3).",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap istilah dengan maknanya.",
        pairs: [
          { left: "Kuartil pertama (Q1)", right: "Batas seperempat data terbawah" },
          { left: "Kuartil kedua (Q2)", right: "Median, nilai tengah data" },
          { left: "Kuartil ketiga (Q3)", right: "Batas tiga perempat data" },
          { left: "Jangkauan antarkuartil", right: "Q3 dikurangi Q1" },
        ],
      },
      {
        type: "classifyExercise",
        prompt:
          "Untuk masing-masing situasi, tentukan ukuran sebaran mana yang lebih tepat dipakai.",
        buckets: ["Jangkauan biasa", "Jangkauan antarkuartil"],
        items: [
          { text: "Data berisi satu pencilan yang sangat besar", bucket: "Jangkauan antarkuartil" },
          { text: "Ingin tahu lebar total dari nilai terkecil ke terbesar", bucket: "Jangkauan biasa" },
          { text: "Ingin sebaran yang tahan terhadap nilai ekstrem", bucket: "Jangkauan antarkuartil" },
          { text: "Hanya butuh hitungan paling cepat dari dua angka", bucket: "Jangkauan biasa" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Gaji di dua perusahaan kecil",
        html: "Dua perusahaan punya rata-rata gaji yang mirip. Namun di perusahaan pertama ada satu direktur dengan gaji sangat besar yang mendongkrak jangkauan. Saat manajer membandingkan jangkauan antarkuartil, ternyata sebaran gaji karyawan biasa di kedua perusahaan hampir sama. Dengan mengabaikan ujung-ujung data, jangkauan antarkuartil menunjukkan kenyataan sehari-hari yang lebih jujur daripada sekadar selisih gaji tertinggi dan terendah.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumusnya baru muncul di akhir",
        html: "Setelah berpetualang, baru kita rangkum. Urutkan data, lalu tentukan <strong>Q1</strong>, <strong>Q2 (median)</strong>, dan <strong>Q3</strong>. <strong>Jangkauan antarkuartil = Q3 − Q1.</strong> Ukuran ini menggambarkan sebaran 50% data di tengah dan jauh lebih tahan terhadap pencilan daripada jangkauan biasa.",
      },
      {
        type: "takeaways",
        items: [
          "Kuartil membagi data terurut menjadi empat bagian sama banyak.",
          "Q2 sama dengan median, Q1 batas seperempat bawah, Q3 batas tiga perempat.",
          "Jangkauan antarkuartil = Q3 − Q1, mengukur sebaran bagian tengah data.",
          "Ukuran ini lebih tahan terhadap pencilan dibanding jangkauan biasa.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kuartil kedua (Q2) sama dengan?",
            options: ["Rata-rata", "Median", "Modus", "Nilai terbesar"],
            answer: 1,
            explain: "Q2 adalah nilai tengah data, yaitu median.",
          },
          {
            q: "Jangkauan antarkuartil dihitung dengan?",
            options: ["Q3 + Q1", "Q3 − Q1", "Q2 − Q1", "Q3 − Q2"],
            answer: 1,
            explain: "Jangkauan antarkuartil = Q3 dikurangi Q1.",
          },
          {
            q: "Data 5, 7, 8, 10, 12, 15, 20 memiliki Q1 dan Q3 berturut-turut?",
            options: ["7 dan 15", "8 dan 12", "5 dan 20", "10 dan 15"],
            answer: 0,
            explain: "Q1 = 7 (median bagian bawah), Q3 = 15 (median bagian atas).",
          },
          {
            q: "Keunggulan jangkauan antarkuartil dibanding jangkauan biasa adalah?",
            options: [
              "Lebih cepat dihitung",
              "Lebih tahan terhadap pencilan",
              "Selalu lebih besar",
              "Memakai semua nilai ekstrem",
            ],
            answer: 1,
            explain: "Karena hanya melihat bagian tengah, ia tidak mudah terganggu nilai ekstrem.",
          },
          {
            q: "Jangkauan antarkuartil menggambarkan sebaran berapa persen data?",
            options: ["25% terbawah", "50% di tengah", "75% teratas", "Seluruh data"],
            answer: 1,
            explain: "Rentang Q1 sampai Q3 mencakup 50% data yang berada di tengah.",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "simpangan-baku",
    levelId: "penyebaran",
    order: 3,
    title: "Simpangan Baku: Rata-rata Jarak dari Pusat",
    summary:
      "Jangkauan dan kuartil hanya melihat beberapa titik. Simpangan baku memakai setiap data untuk mengukur seberapa jauh, rata-rata, nilai menyimpang dari pusatnya.",
    durationMin: 16,
    tags: ["statistika", "penyebaran", "simpangan-baku", "varians"],
    blocks: [
      {
        type: "paragraph",
        html: "Jangkauan hanya melihat dua nilai ekstrem, dan kuartil hanya melihat tiga titik pembagi. Tetapi setiap data sebenarnya punya cerita tentang seberapa jauh ia dari pusat. Bagaimana kalau kita libatkan semua data sekaligus? Sebelum berhitung, ayo bangun dulu gagasan tentang 'rata-rata jarak' setiap nilai dari rata-ratanya.",
      },
      {
        type: "video",
        comp: "PenyebaranVideo",
        title: "Video: Mengukur Jarak Setiap Data dari Pusat",
        caption: "Membangun simpangan baku langkah demi langkah, dari selisih hingga akar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil dua kelompok berata-rata sama, misalnya 74. Kelompok rapat: nilai-nilainya hanya berjarak sedikit dari 74. Kelompok menyebar: banyak nilai jauh dari 74. Untuk tiap data, hitung selisihnya dari rata-rata. Beberapa positif, beberapa negatif, dan kalau dijumlahkan begitu saja hasilnya nol. Maka kita kuadratkan dulu selisihnya supaya tidak saling meniadakan, baru kita rata-rata. Dari sinilah lahir ukuran sebaran yang memakai seluruh data.",
      },
      {
        type: "widget",
        widget: "SimulatorPenyebaran",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa dikuadratkan lalu diakar?",
        html: "Selisih dari rata-rata bisa positif atau negatif. Jika langsung dijumlahkan, totalnya selalu nol. Dengan <strong>mengkuadratkan</strong>, semua menjadi positif dan selisih besar diberi bobot lebih. Setelah dirata-rata kita peroleh varians. Karena satuannya jadi kuadrat, kita <strong>akarkan</strong> kembali agar satuannya sama dengan data asli. Itulah simpangan baku.",
      },
      {
        type: "calcExercise",
        prompt:
          "Diketahui data: 5, 7, 9, 11, 13. Rata-ratanya 9. Hitung varians data tersebut.",
        answer: 8,
        tolerance: 0,
        solution:
          "Selisih dari rata-rata: −4, −2, 0, 2, 4. Kuadratnya: 16, 4, 0, 4, 16, jumlahnya 40. Varians = 40 ÷ 5 = <strong>8</strong>.",
        hint: "Kurangkan tiap data dengan 9, kuadratkan, jumlahkan, lalu bagi banyak data.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari data yang sama (5, 7, 9, 11, 13) dengan varians 8, hitung simpangan bakunya. Bulatkan ke dua desimal.",
        answer: 2.83,
        tolerance: 0.05,
        solution:
          "Simpangan baku adalah akar dari varians. Akar 8 kira-kira <strong>2,83</strong>.",
        hint: "Simpangan baku = akar kuadrat dari varians.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap istilah dengan maknanya.",
        pairs: [
          { left: "Simpangan dari mean", right: "Selisih tiap data dengan rata-rata" },
          { left: "Varians", right: "Rata-rata kuadrat selisih dari mean" },
          { left: "Simpangan baku", right: "Akar kuadrat dari varians" },
          { left: "Mean", right: "Titik acuan untuk mengukur sebaran" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memilih saham yang lebih stabil",
        html: "Dua saham memberi keuntungan rata-rata yang sama dalam setahun. Saham pertama naik turun tipis tiap bulan, sedangkan saham kedua kadang melonjak tinggi lalu anjlok dalam. Saat dihitung, simpangan baku saham kedua jauh lebih besar. Bagi investor yang ingin tidur nyenyak, simpangan baku menjadi ukuran risiko: rata-rata untung boleh sama, tetapi sebaran yang lebih lebar berarti goyangan yang lebih menegangkan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumusnya baru muncul di akhir",
        html: "Setelah berpetualang, baru kita rangkum. Hitung rata-rata, lalu untuk tiap data ambil selisihnya dari rata-rata dan kuadratkan. <strong>Varians = rata-rata dari kuadrat selisih itu.</strong> Lalu <strong>simpangan baku = akar kuadrat dari varians.</strong> Inilah ukuran sebaran yang memakai setiap data dan bersatuan sama dengan data aslinya.",
      },
      {
        type: "takeaways",
        items: [
          "Simpangan baku mengukur rata-rata jarak data dari rata-ratanya.",
          "Selisih dikuadratkan agar tidak saling meniadakan, lalu dirata-rata menjadi varians.",
          "Simpangan baku adalah akar kuadrat dari varians, satuannya sama dengan data.",
          "Tidak seperti jangkauan, simpangan baku memakai seluruh data.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Simpangan baku adalah?",
            options: [
              "Akar kuadrat dari varians",
              "Selisih maks dan min",
              "Nilai tengah data",
              "Q3 dikurangi Q1",
            ],
            answer: 0,
            explain: "Simpangan baku = akar kuadrat dari varians.",
          },
          {
            q: "Mengapa selisih dari mean dikuadratkan?",
            options: [
              "Agar hitungannya cepat",
              "Agar tidak saling meniadakan menjadi nol",
              "Agar hasilnya selalu negatif",
              "Agar satuannya hilang",
            ],
            answer: 1,
            explain: "Jika dijumlahkan langsung, selisih positif dan negatif saling meniadakan jadi nol.",
          },
          {
            q: "Data 5, 7, 9, 11, 13 berata-rata 9. Ragamnya adalah?",
            options: ["4", "8", "16", "40"],
            answer: 1,
            explain: "Jumlah kuadrat selisih 40, dibagi 5 data, menghasilkan varians 8.",
          },
          {
            q: "Jika varians sebuah data adalah 9, simpangan bakunya adalah?",
            options: ["81", "4,5", "3", "18"],
            answer: 2,
            explain: "Simpangan baku = akar 9 = 3.",
          },
          {
            q: "Kelebihan simpangan baku dibanding jangkauan adalah?",
            options: [
              "Hanya memakai dua nilai",
              "Memakai seluruh data dalam perhitungan",
              "Selalu bernilai nol",
              "Tidak butuh rata-rata",
            ],
            answer: 1,
            explain: "Simpangan baku melibatkan setiap data, bukan hanya nilai ekstrem.",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "membandingkan-keragaman-dua-kelompok",
    levelId: "penyebaran",
    order: 4,
    title: "Membandingkan Keragaman Dua Kelompok",
    summary:
      "Saat dua kelompok berata-rata sama, ukuran sebaran menjadi penentu. Kita pakai jangkauan, kuartil, dan simpangan baku untuk memutuskan mana yang lebih konsisten.",
    durationMin: 16,
    tags: ["statistika", "penyebaran", "perbandingan", "keragaman"],
    blocks: [
      {
        type: "paragraph",
        html: "Dua pemanah berlatih untuk seleksi tim. Keduanya punya skor rata-rata yang sama persis. Pelatih bingung memilih, sampai ia melihat catatan tiap tembakan. Pemanah pertama selalu mendekati nilai rata-ratanya, sedangkan pemanah kedua kadang sempurna kadang meleset jauh. Rata-rata tidak bisa memutuskan. Sebelum menyimpulkan, ayo gunakan ukuran sebaran untuk membandingkan keragaman keduanya.",
      },
      {
        type: "video",
        comp: "PenyebaranVideo",
        title: "Video: Saat Rata-rata Tidak Cukup",
        caption: "Memilih di antara dua kelompok yang setara di atas kertas.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil dua kelompok berata-rata 74. Kelompok A: 70, 72, 74, 76, 78. Kelompok B: 58, 66, 74, 82, 90. Hitung jarak tiap nilai dari 74. Di A jaraknya kecil-kecil, di B jaraknya besar-besar. Ukuran apa pun yang kita pilih, baik jangkauan, jangkauan antarkuartil, maupun simpangan baku, semuanya akan sepakat: B lebih menyebar. Membandingkan keragaman berarti menempatkan kedua kelompok pada ukuran yang sama lalu melihat mana yang lebih besar.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Simpangan Baku Dua Kelompok (rata-rata sama, 74)",
        unit: "simpangan baku",
        source: "ilustrasi edukatif",
        note: "Kelompok A: 70, 72, 74, 76, 78 menghasilkan simpangan baku sekitar 2,83. Kelompok B: 58, 66, 74, 82, 90 menghasilkan sekitar 11,31. Walau rata-ratanya sama, sebaran B jauh lebih lebar.",
        data: [
          { label: "Kelompok A", value: 2.83, color: "#06b6d4" },
          { label: "Kelompok B", value: 11.31, color: "#6366f1" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorPenyebaran",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bandingkan dengan ukuran yang sama",
        html: "Membandingkan keragaman hanya adil jika memakai ukuran yang sama untuk kedua kelompok. Jangan menilai satu kelompok dengan jangkauan lalu kelompok lain dengan simpangan baku. Dan ingat, sebaran yang lebih kecil belum tentu selalu 'lebih baik'. Dalam ujian kita mungkin ingin hasil yang stabil, tetapi dalam eksplorasi ide justru keragaman yang luas bisa berharga.",
      },
      {
        type: "calcExercise",
        prompt:
          "Kelompok A: 70, 72, 74, 76, 78 dengan rata-rata 74. Hitung simpangan bakunya. Bulatkan ke dua desimal.",
        answer: 2.83,
        tolerance: 0.05,
        solution:
          "Selisih dari 74: −4, −2, 0, 2, 4. Kuadratnya 16, 4, 0, 4, 16, jumlah 40. Varians = 40 ÷ 5 = 8. Simpangan baku = akar 8 ≈ <strong>2,83</strong>.",
        hint: "Kurangkan tiap nilai dengan 74, kuadratkan, rata-ratakan, lalu akarkan.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Untuk tiap pernyataan tentang Kelompok A dan B (rata-rata sama), tentukan kelompok mana yang dimaksud.",
        buckets: ["Kelompok A (lebih konsisten)", "Kelompok B (lebih beragam)"],
        items: [
          { text: "Simpangan baku sekitar 2,83", bucket: "Kelompok A (lebih konsisten)" },
          { text: "Simpangan baku sekitar 11,31", bucket: "Kelompok B (lebih beragam)" },
          { text: "Jangkauan hanya 8", bucket: "Kelompok A (lebih konsisten)" },
          { text: "Jangkauan mencapai 32", bucket: "Kelompok B (lebih beragam)" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap ukuran sebaran dengan cara menghitungnya.",
        pairs: [
          { left: "Jangkauan", right: "Nilai terbesar dikurangi nilai terkecil" },
          { left: "Jangkauan antarkuartil", right: "Q3 dikurangi Q1" },
          { left: "Varians", right: "Rata-rata kuadrat selisih dari mean" },
          { left: "Simpangan baku", right: "Akar kuadrat dari varians" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memilih pemasok komponen mesin",
        html: "Sebuah pabrik menguji baut dari dua pemasok. Panjang rata-rata baut keduanya sama, yaitu 50 mm. Namun simpangan baku pemasok pertama hanya 0,2 mm, sedangkan pemasok kedua mencapai 1,5 mm. Karena baut yang terlalu menyimpang dari ukuran bisa merusak rakitan, pabrik memilih pemasok pertama. Di sini matematika bukan sekadar berhitung, melainkan alat memilih: rata-rata yang sama dipecahkan oleh ukuran keragaman.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumusnya baru muncul di akhir",
        html: "Setelah berpetualang, baru kita rangkum. Untuk membandingkan dua kelompok, hitung ukuran sebaran yang sama pada keduanya: <strong>jangkauan = maks − min</strong>, <strong>jangkauan antarkuartil = Q3 − Q1</strong>, dan <strong>simpangan baku = akar dari rata-rata kuadrat selisih terhadap mean</strong>. Nilai yang lebih besar berarti kelompok itu lebih beragam. Rata-rata menjawab 'di mana pusatnya', sebaran menjawab 'seberapa lebar ceritanya'.",
      },
      {
        type: "takeaways",
        items: [
          "Saat rata-rata sama, ukuran sebaran menentukan kelompok mana yang lebih konsisten.",
          "Bandingkan kedua kelompok dengan ukuran sebaran yang sama agar adil.",
          "Sebaran lebih kecil berarti lebih konsisten, sebaran lebih besar berarti lebih beragam.",
          "Konsisten tidak selalu berarti lebih baik, tergantung tujuannya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dua kelompok berata-rata sama. Apa yang membedakan keduanya?",
            options: ["Pasti tidak ada bedanya", "Ukuran sebarannya", "Banyak datanya selalu beda", "Mediannya pasti beda"],
            answer: 1,
            explain: "Rata-rata sama, tetapi sebaran bisa berbeda dan itulah pembedanya.",
          },
          {
            q: "Kelompok A simpangan baku 2,83 dan Kelompok B 11,31. Mana lebih konsisten?",
            options: ["Kelompok B", "Kelompok A", "Sama saja", "Tidak bisa ditentukan"],
            answer: 1,
            explain: "Simpangan baku lebih kecil berarti data lebih rapat, jadi A lebih konsisten.",
          },
          {
            q: "Agar perbandingan keragaman adil, kita harus?",
            options: [
              "Memakai ukuran sebaran yang sama untuk kedua kelompok",
              "Memakai ukuran berbeda tiap kelompok",
              "Mengabaikan rata-rata",
              "Hanya melihat satu data",
            ],
            answer: 0,
            explain: "Perbandingan baru adil jika ukuran sebarannya sama jenis.",
          },
          {
            q: "Baut pemasok A punya simpangan baku 0,2 mm, pemasok B 1,5 mm, rata-rata sama. Mana dipilih untuk presisi?",
            options: ["Pemasok B", "Pemasok A", "Keduanya sama", "Tidak ada yang cocok"],
            answer: 1,
            explain: "Simpangan baku lebih kecil berarti ukuran lebih seragam, cocok untuk presisi.",
          },
          {
            q: "Pernyataan yang benar tentang sebaran kecil adalah?",
            options: [
              "Selalu lebih baik dalam segala situasi",
              "Berarti data lebih konsisten, walau tidak selalu lebih baik",
              "Berarti rata-rata pasti besar",
              "Berarti datanya salah",
            ],
            answer: 1,
            explain: "Sebaran kecil menandakan konsistensi, tetapi baik atau tidaknya tergantung tujuan.",
          },
        ],
      },
    ],
  },

  // ============================================================
  {
    id: "mendeteksi-pencilan",
    levelId: "penyebaran",
    order: 5,
    title: "Mendeteksi Pencilan dengan Aturan Kuartil",
    summary:
      "Sebuah nilai yang jauh menyimpang bisa merusak analisis. Kita pakai kuartil untuk memberi pagar yang menandai mana yang pantas dicurigai sebagai pencilan.",
    durationMin: 14,
    tags: ["statistika", "penyebaran", "pencilan", "iqr"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan mencatat lama pengiriman paket dalam hari: kebanyakan 2 sampai 5 hari, tetapi satu paket tercatat 50 hari. Angka itu langsung mengganggu rata-rata dan jangkauan. Apakah itu kesalahan catat, atau kejadian luar biasa? Sebelum membuang atau mempercayainya, ayo cari cara objektif untuk menandai nilai yang benar-benar menyimpang.",
      },
      {
        type: "video",
        comp: "PenyebaranVideo",
        title: "Video: Menandai Nilai yang Menyimpang",
        caption: "Memakai kuartil untuk membangun pagar pendeteksi pencilan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil data terurut: 10, 12, 14, 15, 16, 18, 20, 22, 24, 50. Dari pelajaran kuartil, kita peroleh Q1 = 14 dan Q3 = 22, sehingga jangkauan antarkuartil (IQR) = 22 - 14 = 8. Sekarang bentangkan pagar sejauh satu setengah IQR dari tiap kuartil. Nilai yang jatuh di luar pagar itulah yang patut dicurigai sebagai pencilan. Coba tebak: apakah 50 lolos atau tertangkap?",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Data Terurut dengan Satu Pencilan",
        unit: "nilai data",
        source: "ilustrasi edukatif",
        note: "Sembilan nilai berkumpul di 10 sampai 24, lalu satu nilai (50, batang oranye) melompat jauh di atas batas atas 34. Ia tertangkap sebagai pencilan.",
        data: [
          { label: "1", value: 10, color: "#06b6d4" },
          { label: "2", value: 12, color: "#06b6d4" },
          { label: "3", value: 14, color: "#06b6d4" },
          { label: "4", value: 15, color: "#06b6d4" },
          { label: "5", value: 16, color: "#06b6d4" },
          { label: "6", value: 18, color: "#06b6d4" },
          { label: "7", value: 20, color: "#06b6d4" },
          { label: "8", value: 22, color: "#06b6d4" },
          { label: "9", value: 24, color: "#06b6d4" },
          { label: "10", value: 50, color: "#f59e0b" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorPenyebaran",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa satu setengah IQR?",
        html: "Pagar diletakkan pada <strong>Q1 - 1,5 x IQR</strong> dan <strong>Q3 + 1,5 x IQR</strong>. Angka 1,5 adalah kesepakatan yang sudah teruji: cukup longgar untuk membiarkan keragaman wajar, tetapi cukup ketat untuk menangkap nilai yang benar-benar menyimpang. Pencilan tidak otomatis salah, ia hanya pantas <strong>diperiksa ulang</strong>.",
      },
      {
        type: "calcExercise",
        prompt:
          "Diketahui Q1 = 14 dan Q3 = 22. Hitung batas atas pendeteksi pencilan, yaitu Q3 + 1,5 x IQR.",
        answer: 34,
        tolerance: 0,
        solution:
          "IQR = 22 - 14 = 8, sehingga 1,5 x 8 = 12. Batas atas = Q3 + 12 = 22 + 12 = <strong>34</strong>.",
        hint: "Cari IQR dulu (Q3 - Q1), kalikan 1,5, lalu tambahkan ke Q3.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan Q1 = 14, Q3 = 22, dan IQR = 8, hitung batas bawah pendeteksi pencilan, yaitu Q1 - 1,5 x IQR.",
        answer: 2,
        tolerance: 0,
        solution:
          "1,5 x 8 = 12, jadi batas bawah = Q1 - 12 = 14 - 12 = <strong>2</strong>. Nilai data sah berada di rentang 2 sampai 34.",
        hint: "Kalikan IQR dengan 1,5, lalu kurangkan dari Q1.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Dengan rentang sah 2 sampai 34, kelompokkan tiap nilai sebagai pencilan atau bukan pencilan.",
        buckets: ["Pencilan", "Bukan pencilan"],
        items: [
          { text: "Nilai 50", bucket: "Pencilan" },
          { text: "Nilai 24", bucket: "Bukan pencilan" },
          { text: "Nilai 0", bucket: "Pencilan" },
          { text: "Nilai 16", bucket: "Bukan pencilan" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap istilah dengan cara menghitung atau maknanya.",
        pairs: [
          { left: "IQR", right: "Q3 dikurangi Q1" },
          { left: "Batas atas", right: "Q3 ditambah 1,5 kali IQR" },
          { left: "Batas bawah", right: "Q1 dikurangi 1,5 kali IQR" },
          { left: "Pencilan", right: "nilai yang jatuh di luar kedua batas" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Salah ketik tertangkap aturan IQR",
        html: "Sebuah toko daring mencatat lama pengiriman ratusan pesanan dalam hari. Hampir semuanya 2 sampai 6 hari, tetapi satu pesanan tercatat 40 hari. Saat data diuji dengan aturan IQR, nilai 40 jatuh jauh di atas batas atas, sehingga ditandai sebagai pencilan. Setelah diperiksa, ternyata itu salah ketik dari angka 4. Tanpa pemeriksaan ini, satu angka keliru bisa membuat rata-rata waktu kirim tampak buruk dan menakuti calon pembeli. Aturan IQR menjadi penjaga mutu data yang objektif.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumusnya baru muncul di akhir",
        html: "Setelah berpetualang, baru kita rangkum. Hitung <strong>IQR = Q3 - Q1</strong>, lalu tetapkan <strong>batas bawah = Q1 - 1,5 x IQR</strong> dan <strong>batas atas = Q3 + 1,5 x IQR</strong>. Nilai di luar rentang itu ditandai sebagai <strong>pencilan</strong> yang pantas diperiksa, bukan langsung dibuang.",
      },
      {
        type: "takeaways",
        items: [
          "Pencilan adalah nilai yang jauh menyimpang dari sebagian besar data.",
          "Aturan IQR menandai nilai di luar Q1 - 1,5 x IQR sampai Q3 + 1,5 x IQR.",
          "Pencilan pantas diperiksa ulang, bukan otomatis dianggap salah lalu dibuang.",
          "Aturan ini objektif dan tidak mudah goyah oleh perasaan tentang satu angka.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pencilan adalah?",
            options: [
              "Nilai yang paling sering muncul",
              "Nilai yang jauh menyimpang dari sebagian besar data",
              "Nilai tengah data",
              "Selalu nilai terkecil",
            ],
            answer: 1,
            explain: "Pencilan adalah nilai yang menyimpang jauh dari kumpulan data lainnya.",
          },
          {
            q: "Aturan IQR menandai sebuah nilai sebagai pencilan jika ia?",
            options: [
              "Berada di antara Q1 dan Q3",
              "Berada di luar Q1 - 1,5 x IQR sampai Q3 + 1,5 x IQR",
              "Sama dengan median",
              "Lebih besar dari rata-rata",
            ],
            answer: 1,
            explain: "Nilai di luar kedua pagar IQR itulah yang dicurigai sebagai pencilan.",
          },
          {
            q: "Jika Q1 = 14 dan Q3 = 22, berapa IQR-nya?",
            options: ["6", "8", "36", "14"],
            answer: 1,
            explain: "IQR = Q3 - Q1 = 22 - 14 = 8.",
          },
          {
            q: "Dengan Q3 = 22 dan IQR = 8, batas atas pencilan adalah?",
            options: ["30", "34", "44", "22"],
            answer: 1,
            explain: "Q3 + 1,5 x 8 = 22 + 12 = 34.",
          },
          {
            q: "Pada data tersebut, nilai 50 dengan batas atas 34 termasuk?",
            options: ["Median", "Pencilan", "Kuartil ketiga", "Nilai biasa"],
            answer: 1,
            explain: "Karena 50 lebih besar dari 34, ia tertangkap sebagai pencilan.",
          },
        ],
      },
    ],
  },
];
