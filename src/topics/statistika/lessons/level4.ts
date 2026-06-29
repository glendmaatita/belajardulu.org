import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "ruang-sampel-dan-kejadian",
    levelId: "peluang",
    order: 1,
    title: "Ruang Sampel dan Kejadian",
    summary:
      "Sebelum mengukur kemungkinan, kita kumpulkan dulu semua hasil yang mungkin dari sebuah percobaan nyata.",
    durationMin: 12,
    tags: ["statistika", "peluang", "ruang sampel", "kejadian"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah koin kita lempar ke udara. Sebelum jatuh, kita tidak tahu pasti hasilnya. Tetapi kita tahu satu hal: hasilnya pasti angka atau gambar, tidak ada yang lain. Lempar sebuah dadu, dan hasilnya pasti salah satu dari 1 sampai 6. Sebelum menghitung apa pun, ayo kumpulkan dulu semua kemungkinan yang bisa terjadi.",
      },
      {
        type: "video",
        comp: "PeluangVideo",
        title: "Video: Mengintip Semua Kemungkinan",
        caption: "Dari satu lemparan koin sampai dadu, kita daftar dulu apa saja yang bisa terjadi.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba tulis sendiri: kalau koin dilempar, daftar hasilnya adalah {Angka, Gambar}. Kalau dadu dilempar, daftarnya {1, 2, 3, 4, 5, 6}. Daftar lengkap semua hasil yang mungkin inilah yang nanti kita beri nama. Lalu pilih sebagian saja, misalnya 'muncul angka genap', dan itu pun punya nama tersendiri.",
      },
      {
        type: "widget",
        widget: "SimulatorPeluang",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bedakan dua hal",
        html: "Seluruh hasil yang mungkin itu satu hal. Hasil yang kita <strong>tertarik</strong> mengamatinya, misalnya 'muncul angka genap', adalah hal lain yang lebih kecil. Yang kedua selalu bagian dari yang pertama.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah dadu bersisi enam dilempar satu kali. Ada berapa banyak hasil yang mungkin muncul?",
        answer: 6,
        solution:
          "Hasil yang mungkin adalah 1, 2, 3, 4, 5, dan 6, sehingga ada <strong>6</strong> kemungkinan.",
        hint: "Hitung saja banyaknya mata pada dadu.",
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan tiap deskripsi: apakah ia menyebut SELURUH kemungkinan (ruang sampel) atau hanya SEBAGIAN yang diamati (kejadian)?",
        buckets: ["Ruang Sampel", "Kejadian"],
        items: [
          { text: "{Angka, Gambar} pada lemparan koin", bucket: "Ruang Sampel" },
          { text: "Muncul mata dadu genap", bucket: "Kejadian" },
          { text: "{1, 2, 3, 4, 5, 6} pada lemparan dadu", bucket: "Ruang Sampel" },
          { text: "Muncul mata dadu lebih dari 4", bucket: "Kejadian" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap percobaan dengan banyaknya hasil yang mungkin.",
        pairs: [
          { left: "Melempar 1 koin", right: "2 hasil" },
          { left: "Melempar 1 dadu", right: "6 hasil" },
          { left: "Melempar 2 koin sekaligus", right: "4 hasil" },
          { left: "Melempar 1 koin dan 1 dadu", right: "12 hasil" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Undian arisan di kampung",
        html: "Di sebuah arisan, 40 nama ditulis pada kertas dan digulung dalam sebuah toples. Sebelum panitia mencabut satu gulungan, mereka tahu persis semua kemungkinan: 40 nama itulah seluruh hasil yang bisa keluar. Jika seorang ibu bertanya, 'Berapa kemungkinan nama keluarga RT 02 yang keluar?', ia sebenarnya sedang menunjuk sebagian dari 40 nama tadi. Memahami daftar lengkap dulu membuat pertanyaan berikutnya bisa dijawab dengan jujur.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah berpetualang, baru kita beri nama. <strong>Ruang sampel</strong> (ditulis S) adalah himpunan semua hasil yang mungkin dari sebuah percobaan; banyaknya ditulis n(S). <strong>Kejadian</strong> (ditulis A) adalah bagian dari ruang sampel, yaitu hasil yang kita amati; banyaknya ditulis n(A). Karena A selalu bagian dari S, maka 0 ≤ n(A) ≤ n(S).",
      },
      {
        type: "takeaways",
        items: [
          "Ruang sampel S adalah himpunan semua hasil yang mungkin dari sebuah percobaan.",
          "Kejadian A adalah bagian dari ruang sampel, yaitu hasil yang kita amati.",
          "Banyak anggota ditulis n(S) untuk ruang sampel dan n(A) untuk kejadian.",
          "Kejadian selalu termuat dalam ruang sampel, sehingga 0 ≤ n(A) ≤ n(S).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Himpunan semua hasil yang mungkin dari sebuah percobaan disebut?",
            options: ["Kejadian", "Ruang sampel", "Peluang", "Frekuensi"],
            answer: 1,
            explain: "Seluruh hasil yang mungkin membentuk ruang sampel (S).",
          },
          {
            q: "Pada lemparan satu dadu, 'muncul angka 5' adalah contoh?",
            options: ["Ruang sampel", "Kejadian", "Rata-rata", "Median"],
            answer: 1,
            explain: "Itu sebagian dari ruang sampel, jadi sebuah kejadian.",
          },
          {
            q: "Berapa n(S) untuk pelemparan satu koin?",
            options: ["1", "2", "4", "6"],
            answer: 1,
            explain: "Hasilnya hanya {Angka, Gambar}, jadi n(S) = 2.",
          },
          {
            q: "Melempar satu koin dan satu dadu sekaligus punya berapa hasil mungkin?",
            options: ["8", "12", "6", "36"],
            answer: 1,
            explain: "2 hasil koin dikali 6 hasil dadu = 12.",
          },
          {
            q: "Hubungan yang benar antara kejadian A dan ruang sampel S adalah?",
            options: [
              "A selalu lebih besar dari S",
              "A adalah bagian dari S",
              "A dan S tidak berhubungan",
              "A sama dengan jumlah S",
            ],
            answer: 1,
            explain: "Kejadian selalu termuat di dalam ruang sampel.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "menghitung-peluang",
    levelId: "peluang",
    order: 2,
    title: "Menghitung Peluang",
    summary:
      "Setelah tahu semua kemungkinan, kita ukur seberapa besar suatu kejadian punya kesempatan terjadi.",
    durationMin: 13,
    tags: ["statistika", "peluang", "dadu", "kejadian"],
    blocks: [
      {
        type: "paragraph",
        html: "Kita lempar sebuah dadu dan berharap muncul angka genap. Seberapa besar harapan itu masuk akal? Ada 6 hasil mungkin, dan 3 di antaranya genap (2, 4, 6). Rasanya separuh kesempatan. Ayo telusuri dulu kenapa angka itu muncul, sebelum kita rapikan jadi sebuah aturan.",
      },
      {
        type: "video",
        comp: "PeluangVideo",
        title: "Video: Mengukur Kesempatan",
        caption: "Dari menghitung hasil yang diharapkan dibanding seluruh kemungkinan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan dua dadu dilempar bersama. Ada 36 pasangan hasil yang mungkin. Kalau kita cari yang jumlahnya 7, ternyata ada 6 pasangan: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Coba hitung juga jumlah lain. Kamu akan melihat ada jumlah yang banyak caranya dan ada yang sedikit. Itu sebabnya beberapa hasil 'lebih mudah' muncul.",
      },
      {
        type: "widget",
        widget: "SimulatorPeluang",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Banyak Cara Munculnya Tiap Jumlah pada Dua Dadu",
        unit: "banyak pasangan",
        source: "perhitungan pada 36 pasangan hasil",
        note: "Jumlah 7 punya 6 cara, paling banyak; jumlah 2 dan 12 hanya 1 cara. Ini bukan persen karangan, melainkan hitungan nyata dari 36 kemungkinan.",
        data: [
          { label: "2", value: 1, color: "#0ea5e9" },
          { label: "3", value: 2, color: "#0ea5e9" },
          { label: "4", value: 3, color: "#38bdf8" },
          { label: "5", value: 4, color: "#38bdf8" },
          { label: "6", value: 5, color: "#3b82f6" },
          { label: "7", value: 6, color: "#6366f1" },
          { label: "8", value: 5, color: "#3b82f6" },
          { label: "9", value: 4, color: "#38bdf8" },
          { label: "10", value: 3, color: "#38bdf8" },
          { label: "11", value: 2, color: "#0ea5e9" },
          { label: "12", value: 1, color: "#0ea5e9" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Selalu di antara 0 dan 1",
        html: "Peluang tidak pernah kurang dari 0 (mustahil) dan tidak pernah lebih dari 1 (pasti). Kalau hitunganmu menghasilkan angka di luar itu, pasti ada yang keliru.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah dadu dilempar. Berapa peluang muncul mata dadu genap? Tulis dalam desimal.",
        answer: 0.5,
        tolerance: 0.01,
        solution:
          "Mata genap ada 3 (yaitu 2, 4, 6) dari 6 kemungkinan, jadi 3/6 = <strong>0,5</strong>.",
        hint: "Bagi banyak hasil genap dengan banyak seluruh kemungkinan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dua dadu dilempar bersama. Berapa peluang jumlah kedua mata adalah 7? Bulatkan ke tiga desimal.",
        answer: 0.167,
        tolerance: 0.01,
        solution:
          "Ada 6 pasangan berjumlah 7 dari 36 pasangan, jadi 6/36 = 0,1667, dibulatkan <strong>0,167</strong>.",
        hint: "Hitung pasangan yang berjumlah 7, lalu bagi dengan 36.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan kejadian pada satu dadu dengan peluangnya.",
        pairs: [
          { left: "Muncul angka 3", right: "1/6" },
          { left: "Muncul angka genap", right: "3/6" },
          { left: "Muncul angka lebih dari 4", right: "2/6" },
          { left: "Muncul angka kurang dari 7", right: "6/6" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Lomba tebak dadu di pasar malam",
        html: "Sebuah stan menawarkan hadiah jika pengunjung menebak tepat angka yang keluar dari satu dadu. Banyak orang ikut karena merasa 'mungkin saja'. Padahal peluang menebak tepat satu angka hanya 1 dari 6, sekitar 0,167. Dari 60 orang yang mencoba, secara wajar hanya sekitar 10 yang berhasil. Pemilik stan paham angka ini, maka ia berani memberi hadiah besar: matematika peluang menjaga usahanya tetap untung.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah berpetualang, baru kita rumuskan. Untuk percobaan dengan hasil yang sama mungkin, <strong>peluang kejadian A adalah P(A) = n(A) / n(S)</strong>, yaitu banyak hasil yang diharapkan dibagi banyak seluruh kemungkinan. Nilainya selalu berada di rentang 0 ≤ P(A) ≤ 1: nol berarti mustahil, satu berarti pasti.",
      },
      {
        type: "takeaways",
        items: [
          "Peluang kejadian = banyak hasil diharapkan dibagi banyak seluruh kemungkinan.",
          "Rumusnya P(A) = n(A) / n(S) untuk hasil yang sama mungkin.",
          "Nilai peluang selalu antara 0 (mustahil) dan 1 (pasti).",
          "Beberapa hasil lebih sering muncul karena punya lebih banyak cara terjadi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus peluang kejadian A untuk hasil yang sama mungkin adalah?",
            options: ["n(S) / n(A)", "n(A) / n(S)", "n(A) × n(S)", "n(A) + n(S)"],
            answer: 1,
            explain: "Peluang = hasil diharapkan dibagi seluruh kemungkinan.",
          },
          {
            q: "Nilai peluang tidak mungkin sebesar?",
            options: ["0", "0,5", "1", "1,5"],
            answer: 3,
            explain: "Peluang selalu di antara 0 dan 1, jadi 1,5 mustahil.",
          },
          {
            q: "Peluang muncul angka 4 pada satu dadu adalah?",
            options: ["1/6", "1/4", "4/6", "1/2"],
            answer: 0,
            explain: "Satu hasil diharapkan dari 6 kemungkinan, jadi 1/6.",
          },
          {
            q: "Pada dua dadu, jumlah berapa yang paling banyak caranya?",
            options: ["2", "6", "7", "12"],
            answer: 2,
            explain: "Jumlah 7 punya 6 pasangan, paling banyak.",
          },
          {
            q: "Peluang muncul angka kurang dari 7 pada satu dadu adalah?",
            options: ["0", "1/6", "5/6", "1"],
            answer: 3,
            explain: "Semua hasil 1-6 kurang dari 7, jadi pasti terjadi, P = 1.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "peluang-empiris-vs-teoritis",
    levelId: "peluang",
    order: 3,
    title: "Peluang Empiris vs Teoritis",
    summary:
      "Peluang yang dihitung dari rumus dan peluang dari percobaan nyata makin lama makin saling mendekat.",
    durationMin: 13,
    tags: ["statistika", "peluang", "empiris", "teoritis", "percobaan"],
    blocks: [
      {
        type: "paragraph",
        html: "Secara hitungan, peluang koin muncul gambar adalah 0,5. Tetapi coba lempar koin 10 kali sungguhan: bisa saja gambar muncul 7 kali, bukan 5. Apakah rumusnya salah? Tidak. Ayo lempar lebih banyak dan lihat apa yang terjadi pada angkanya.",
      },
      {
        type: "video",
        comp: "PeluangVideo",
        title: "Video: Antara Hitungan dan Kenyataan",
        caption: "Mengapa hasil percobaan nyata makin mendekati hitungan saat dicoba berkali-kali.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Lempar koin 10 kali, catat berapa kali gambar muncul, lalu bagi dengan 10. Ulangi untuk 50, 100, sampai 1000 lemparan. Di awal angkanya bisa meleset jauh dari 0,5, tetapi makin banyak lemparan, frekuensi relatifnya merapat ke 0,5. Inilah jembatan antara percobaan nyata dan hitungan.",
      },
      {
        type: "widget",
        widget: "SimulatorPeluang",
      },
      {
        type: "chart",
        variant: "line",
        title: "Frekuensi Relatif Gambar Mendekati 0,5",
        unit: "frekuensi relatif gambar",
        source: "ilustrasi hasil simulasi pelemparan koin",
        note: "Pada sedikit lemparan, angkanya meleset (0,70); makin banyak lemparan, ia merapat ke peluang teoritis 0,5. Ini hasil hitungan nyata, bukan persen karangan.",
        data: [
          { label: "10x", value: 0.7, color: "#0ea5e9" },
          { label: "50x", value: 0.58, color: "#0ea5e9" },
          { label: "100x", value: 0.53, color: "#38bdf8" },
          { label: "500x", value: 0.51, color: "#3b82f6" },
          { label: "1000x", value: 0.502, color: "#6366f1" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua cara, satu kebenaran",
        html: "Peluang <strong>teoritis</strong> dihitung dari banyaknya kemungkinan tanpa mencoba. Peluang <strong>empiris</strong> dihitung dari hasil percobaan yang benar-benar dilakukan. Keduanya saling mendekat saat percobaan diperbanyak.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah koin dilempar 200 kali dan gambar muncul 96 kali. Berapa peluang empiris muncul gambar? Tulis dalam desimal.",
        answer: 0.48,
        tolerance: 0.01,
        solution:
          "Peluang empiris = 96 dibagi 200 = <strong>0,48</strong>, dekat dengan teoritis 0,5.",
        hint: "Bagi banyak kemunculan gambar dengan banyak lemparan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa peluang teoritis muncul gambar pada sebuah koin yang adil? Tulis dalam desimal.",
        answer: 0.5,
        tolerance: 0.01,
        solution:
          "Ada 1 sisi gambar dari 2 sisi, jadi 1/2 = <strong>0,5</strong>.",
        hint: "Bagi banyak sisi gambar dengan banyak seluruh sisi koin.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan sebagai peluang empiris atau peluang teoritis.",
        buckets: ["Peluang Empiris", "Peluang Teoritis"],
        items: [
          { text: "Dihitung dari hasil percobaan yang benar-benar dilakukan", bucket: "Peluang Empiris" },
          { text: "Dihitung dari banyaknya kemungkinan tanpa mencoba", bucket: "Peluang Teoritis" },
          { text: "96 gambar dari 200 lemparan koin", bucket: "Peluang Empiris" },
          { text: "1/2 untuk gambar pada koin adil", bucket: "Peluang Teoritis" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Pabrik memeriksa mutu lampu",
        html: "Sebuah pabrik tidak tahu persis peluang sebuah lampu cacat dari teori, karena prosesnya rumit. Maka mereka menguji 1.000 lampu dan menemukan 12 yang cacat. Peluang empiris cacat adalah 12/1.000 = 0,012. Angka dari percobaan nyata inilah yang dipakai untuk memperkirakan mutu produksi berikutnya. Makin banyak lampu diuji, makin tepercaya angka itu. Di sini peluang empiris menjadi alat, bukan sekadar hitungan di kertas.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah berpetualang, baru kita rumuskan. <strong>Peluang empiris = frekuensi kejadian / banyak percobaan</strong>, dihitung dari hasil nyata. <strong>Peluang teoritis = n(A) / n(S)</strong>, dihitung dari kemungkinan. Menurut hukum bilangan besar, makin banyak percobaan dilakukan, peluang empiris makin mendekati peluang teoritis.",
      },
      {
        type: "takeaways",
        items: [
          "Peluang teoritis dihitung dari kemungkinan, tanpa mencoba.",
          "Peluang empiris dihitung dari frekuensi kejadian dibagi banyak percobaan.",
          "Makin banyak percobaan, peluang empiris makin mendekati teoritis.",
          "Peluang empiris berguna saat teori sulit dihitung, seperti uji mutu produk.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Peluang yang dihitung dari hasil percobaan nyata disebut?",
            options: ["Teoritis", "Empiris", "Mustahil", "Pasti"],
            answer: 1,
            explain: "Dari percobaan nyata berarti peluang empiris.",
          },
          {
            q: "Rumus peluang empiris adalah?",
            options: [
              "n(A) / n(S)",
              "frekuensi kejadian / banyak percobaan",
              "banyak percobaan / frekuensi kejadian",
              "n(S) / n(A)",
            ],
            answer: 1,
            explain: "Empiris dihitung dari frekuensi dibagi banyak percobaan.",
          },
          {
            q: "Saat percobaan diperbanyak, peluang empiris akan?",
            options: [
              "Menjauh dari teoritis",
              "Mendekati peluang teoritis",
              "Selalu tepat 0",
              "Tidak berubah",
            ],
            answer: 1,
            explain: "Menurut hukum bilangan besar, ia mendekati teoritis.",
          },
          {
            q: "Koin dilempar 50 kali, gambar muncul 24 kali. Peluang empiris gambar?",
            options: ["0,5", "0,24", "0,48", "0,52"],
            answer: 2,
            explain: "24/50 = 0,48.",
          },
          {
            q: "Mengapa pabrik memakai peluang empiris untuk mutu lampu?",
            options: [
              "Karena lebih murah dari teori",
              "Karena peluang teori sulit dihitung dari proses rumit",
              "Karena empiris selalu 1",
              "Karena tidak butuh data",
            ],
            answer: 1,
            explain: "Saat teori sukar dihitung, percobaan nyata jadi andalan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "peluang-kejadian-majemuk",
    levelId: "peluang",
    order: 4,
    title: "Peluang Kejadian Majemuk",
    summary:
      "Kita gabungkan beberapa kejadian dengan kata 'atau' dan 'bukan', lalu hitung peluangnya dengan jujur.",
    durationMin: 14,
    tags: ["statistika", "peluang", "komplemen", "kejadian majemuk"],
    blocks: [
      {
        type: "paragraph",
        html: "Kadang yang kita tanyakan bukan satu kejadian sederhana. 'Berapa peluang dadu TIDAK muncul angka 6?' atau 'Berapa peluang muncul angka 2 ATAU 5?' Pertanyaan seperti ini menggabungkan kejadian. Ayo telusuri dulu cara menghitungnya lewat dadu, sebelum kita rapikan jadi aturan.",
      },
      {
        type: "video",
        comp: "PeluangVideo",
        title: "Video: Menggabungkan Kejadian",
        caption: "Dari kata 'bukan' dan 'atau' menjadi cara menghitung peluang gabungan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Untuk 'tidak muncul angka 6', daftar saja hasil yang memenuhi: 1, 2, 3, 4, 5, yaitu 5 dari 6. Untuk 'muncul angka 2 atau 5', hasil yang memenuhi: 2 dan 5, yaitu 2 dari 6. Perhatikan: angka 2 dan 5 tidak mungkin muncul bersamaan dalam satu lemparan, jadi kita tinggal jumlahkan banyaknya. Itu kunci yang akan kita rapikan nanti.",
      },
      {
        type: "widget",
        widget: "SimulatorPeluang",
      },
      {
        type: "callout",
        tone: "info",
        title: "Hati-hati kata 'atau'",
        html: "Menjumlahkan peluang dua kejadian hanya boleh kalau keduanya <strong>tidak bisa terjadi bersamaan</strong> (saling lepas). Kalau bisa beririsan, menjumlahkan begitu saja akan menghitung sebagian dua kali.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah dadu dilempar. Berapa peluang TIDAK muncul angka 6? Bulatkan ke tiga desimal.",
        answer: 0.833,
        tolerance: 0.01,
        solution:
          "Peluang muncul 6 adalah 1/6. Komplemennya 1 − 1/6 = 5/6 = 0,8333, dibulatkan <strong>0,833</strong>.",
        hint: "Kurangkan peluang muncul angka 6 dari 1.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah dadu dilempar. Berapa peluang muncul angka 2 atau 5? Bulatkan ke tiga desimal.",
        answer: 0.333,
        tolerance: 0.01,
        solution:
          "Keduanya saling lepas, jadi 1/6 + 1/6 = 2/6 = 0,3333, dibulatkan <strong>0,333</strong>.",
        hint: "Jumlahkan peluang masing-masing karena tidak bisa muncul bersamaan.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah peluang dengan aturannya.",
        pairs: [
          { left: "Komplemen kejadian A", right: "1 − P(A)" },
          { left: "P(A atau B), saling lepas", right: "P(A) + P(B)" },
          { left: "Kejadian pasti terjadi", right: "P = 1" },
          { left: "Kejadian mustahil terjadi", right: "P = 0" },
        ],
      },
      {
        type: "classifyExercise",
        prompt:
          "Kelompokkan: pasangan kejadian pada satu dadu ini saling lepas (tidak bisa bersamaan) atau bisa beririsan?",
        buckets: ["Saling Lepas", "Bisa Beririsan"],
        items: [
          { text: "Muncul angka 2 dan muncul angka 5", bucket: "Saling Lepas" },
          { text: "Muncul angka genap dan muncul angka 4", bucket: "Bisa Beririsan" },
          { text: "Muncul angka 1 dan muncul angka 6", bucket: "Saling Lepas" },
          { text: "Muncul angka ganjil dan muncul angka 3", bucket: "Bisa Beririsan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Ramalan cuaca petani",
        html: "Seorang petani mendengar peluang hujan besok 0,3. Untuk menjadwalkan panen, yang ia butuhkan justru peluang TIDAK hujan. Dengan aturan komplemen, ia menghitung 1 − 0,3 = 0,7. Karena peluang cerahnya cukup besar, ia berani memanen besok. Tanpa menghitung ulang dari awal, ide komplemen memberi jawaban cepat dan tepat untuk keputusan di lahan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah berpetualang, baru kita rumuskan. Peluang <strong>komplemen</strong>: P(bukan A) = 1 − P(A). Untuk dua kejadian yang <strong>saling lepas</strong> (tidak bisa terjadi bersamaan): P(A atau B) = P(A) + P(B). Semua nilai tetap berada di rentang 0 sampai 1.",
      },
      {
        type: "takeaways",
        items: [
          "Peluang komplemen: P(bukan A) = 1 − P(A).",
          "Untuk kejadian saling lepas: P(A atau B) = P(A) + P(B).",
          "Menjumlahkan peluang hanya sah jika kejadian tidak bisa terjadi bersamaan.",
          "Aturan komplemen mempercepat hitungan, seperti mencari peluang tidak hujan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus peluang komplemen kejadian A adalah?",
            options: ["P(A) + 1", "1 − P(A)", "1 / P(A)", "P(A) × 2"],
            answer: 1,
            explain: "Komplemen berarti peluang A tidak terjadi, yaitu 1 − P(A).",
          },
          {
            q: "Untuk dua kejadian saling lepas, P(A atau B) sama dengan?",
            options: ["P(A) × P(B)", "P(A) + P(B)", "P(A) − P(B)", "1 − P(A)"],
            answer: 1,
            explain: "Karena tidak bisa bersamaan, peluangnya tinggal dijumlahkan.",
          },
          {
            q: "Peluang sebuah dadu tidak muncul angka 6 adalah?",
            options: ["1/6", "5/6", "1/2", "0"],
            answer: 1,
            explain: "1 − 1/6 = 5/6.",
          },
          {
            q: "Pasangan kejadian mana yang TIDAK saling lepas pada satu dadu?",
            options: [
              "Angka 1 dan angka 6",
              "Angka genap dan angka 4",
              "Angka 2 dan angka 5",
              "Angka 1 dan angka 3",
            ],
            answer: 1,
            explain: "Angka 4 termasuk genap, jadi keduanya bisa terjadi bersamaan.",
          },
          {
            q: "Jika peluang hujan 0,3, berapa peluang tidak hujan?",
            options: ["0,3", "0,7", "1,3", "0"],
            answer: 1,
            explain: "Komplemen: 1 − 0,3 = 0,7.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kejadian-saling-bebas",
    levelId: "peluang",
    order: 5,
    title: "Peluang Dua Kejadian Saling Bebas",
    summary:
      "Saat hasil satu percobaan tidak memengaruhi yang lain, peluang keduanya terjadi bersama cukup dikalikan. Aturan itu lahir dari menghitung kemungkinan.",
    durationMin: 14,
    tags: ["statistika", "peluang", "saling bebas", "aturan perkalian"],
    blocks: [
      {
        type: "paragraph",
        html: "Pelajaran lalu kita menggabungkan kejadian dengan kata 'atau'. Sekarang kita tanya yang berbeda: berapa peluang dua hal terjadi bersamaan, dihubungkan kata 'dan'? Misalnya, dua koin dilempar, berapa peluang keduanya gambar? Hasil koin pertama tidak memengaruhi koin kedua. Ayo telusuri dulu pola hitungannya sebelum merapikannya jadi aturan.",
      },
      {
        type: "video",
        comp: "PeluangVideo",
        title: "Video: Dua Hal Terjadi Bersamaan",
        caption: "Dari mendaftar pasangan hasil menuju aturan perkalian peluang.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Lempar dua koin. Daftar semua hasil: GG, GA, AG, AA, yaitu 4 pasangan yang sama mungkin. Hanya satu yang dua-duanya gambar (GG), jadi peluangnya 1 dari 4. Perhatikan: 1/4 sama dengan 1/2 dikali 1/2, yakni peluang tiap koin gambar dikalikan. Bukan kebetulan. Karena koin pertama tidak memengaruhi koin kedua, peluangnya tinggal dikalikan.",
      },
      {
        type: "chart",
        variant: "line",
        title: "Peluang Semua Koin Muncul Gambar",
        unit: "peluang",
        source: "perhitungan aturan perkalian",
        note: "Tiap tambahan koin mengalikan peluang dengan 1/2: 0,5 lalu 0,25 lalu 0,125 lalu 0,0625. Makin banyak syarat bebas yang harus terpenuhi, makin kecil peluangnya.",
        data: [
          { label: "1 koin", value: 0.5, color: "#0ea5e9" },
          { label: "2 koin", value: 0.25, color: "#38bdf8" },
          { label: "3 koin", value: 0.125, color: "#3b82f6" },
          { label: "4 koin", value: 0.0625, color: "#6366f1" },
        ],
      },
      {
        type: "widget",
        widget: "SimulatorPeluang",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bebas atau tidak bebas?",
        html: "Dua kejadian disebut <strong>saling bebas</strong> jika hasil yang satu tidak mengubah peluang yang lain, seperti dua lemparan dadu. Mengambil dua kelereng <strong>tanpa pengembalian</strong> tidak bebas, sebab kelereng pertama yang diambil mengubah isi kantong untuk pengambilan kedua.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dua koin dilempar bersama. Berapa peluang keduanya muncul gambar? Tulis dalam desimal.",
        answer: 0.25,
        tolerance: 0.01,
        solution:
          "Karena saling bebas, kalikan peluangnya: 1/2 dikali 1/2 = 1/4 = <strong>0,25</strong>.",
        hint: "Kalikan peluang gambar koin pertama dengan peluang gambar koin kedua.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah dadu dan sebuah koin dilempar bersama. Berapa peluang muncul angka 6 pada dadu DAN gambar pada koin? Bulatkan ke tiga desimal.",
        answer: 0.083,
        tolerance: 0.01,
        solution:
          "Keduanya saling bebas: 1/6 dikali 1/2 = 1/12 = 0,0833, dibulatkan <strong>0,083</strong>.",
        hint: "Kalikan peluang angka 6 pada dadu (1/6) dengan peluang gambar pada koin (1/2).",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pasangan kejadian sebagai saling bebas atau tidak saling bebas.",
        buckets: ["Saling bebas", "Tidak saling bebas"],
        items: [
          { text: "Melempar koin lalu melempar dadu", bucket: "Saling bebas" },
          { text: "Mengambil 2 kelereng tanpa pengembalian dari kantong", bucket: "Tidak saling bebas" },
          { text: "Hasil lemparan dadu pertama dan dadu kedua", bucket: "Saling bebas" },
          { text: "Mengambil kartu, menyimpannya, lalu mengambil kartu lagi", bucket: "Tidak saling bebas" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap kejadian gabungan dengan peluangnya.",
        pairs: [
          { left: "Dua koin keduanya gambar", right: "1/4" },
          { left: "Dua dadu keduanya angka 6", right: "1/36" },
          { left: "Koin gambar dan dadu angka 6", right: "1/12" },
          { left: "Dua dadu keduanya genap", right: "1/4" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Dua pengaman pada mesin pabrik",
        html: "Sebuah mesin dilengkapi dua sensor pengaman yang bekerja sendiri-sendiri. Tiap sensor punya peluang gagal 0,05 dalam sehari, dan keduanya bekerja saling bebas. Peluang keduanya gagal pada saat bersamaan adalah 0,05 dikali 0,05 = 0,0025, yaitu hanya sekitar 1 dari 400. Karena mesin baru benar-benar berbahaya bila kedua sensor gagal serentak, memasang dua pengaman independen membuat risikonya jauh lebih kecil daripada satu sensor saja. Inilah sebabnya sistem penting selalu dirancang berlapis.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah berpetualang, baru kita rumuskan. Untuk dua kejadian yang <strong>saling bebas</strong>, peluang keduanya terjadi bersama adalah <strong>P(A dan B) = P(A) x P(B)</strong>. Aturan perkalian ini hanya sah saat kejadian saling bebas; jika satu memengaruhi yang lain, peluangnya harus dihitung dengan cara lain.",
      },
      {
        type: "takeaways",
        items: [
          "Dua kejadian saling bebas jika hasil yang satu tidak memengaruhi peluang yang lain.",
          "Untuk kejadian saling bebas: P(A dan B) = P(A) x P(B).",
          "Makin banyak syarat bebas yang harus terpenuhi bersama, makin kecil peluangnya.",
          "Pengambilan tanpa pengembalian tidak saling bebas, sebab mengubah isi yang tersisa.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dua kejadian disebut saling bebas jika?",
            options: [
              "Keduanya selalu terjadi bersama",
              "Hasil yang satu tidak memengaruhi peluang yang lain",
              "Keduanya tidak pernah terjadi",
              "Peluangnya selalu sama",
            ],
            answer: 1,
            explain: "Bebas berarti satu kejadian tidak mengubah peluang kejadian lainnya.",
          },
          {
            q: "Untuk kejadian saling bebas, P(A dan B) sama dengan?",
            options: ["P(A) + P(B)", "P(A) x P(B)", "P(A) - P(B)", "1 - P(A)"],
            answer: 1,
            explain: "Aturan perkalian: peluang keduanya terjadi adalah hasil kali peluangnya.",
          },
          {
            q: "Peluang dua koin keduanya muncul gambar adalah?",
            options: ["1/2", "1/4", "1/8", "1"],
            answer: 1,
            explain: "1/2 x 1/2 = 1/4.",
          },
          {
            q: "Peluang dua dadu keduanya muncul angka 6 adalah?",
            options: ["1/6", "1/12", "1/36", "2/6"],
            answer: 2,
            explain: "1/6 x 1/6 = 1/36.",
          },
          {
            q: "Mengambil dua kelereng tanpa pengembalian termasuk kejadian?",
            options: [
              "Saling bebas",
              "Tidak saling bebas, karena pengambilan pertama mengubah isi kantong",
              "Mustahil",
              "Selalu berpeluang 1",
            ],
            answer: 1,
            explain: "Setelah satu kelereng diambil, isi kantong berubah, jadi tidak bebas.",
          },
        ],
      },
    ],
  },
];
