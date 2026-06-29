import type { Lesson } from "../../../types";

export const level1: Lesson[] = [
  // ============================================================
  {
    id: "pernyataan-nilai-kebenaran",
    levelId: "pernyataan",
    order: 1,
    title: "Pernyataan dan Nilai Kebenaran",
    summary:
      "Tidak semua kalimat bisa dinilai benar atau salah. Kita uji dulu berbagai kalimat sebelum menyimpulkan aturannya.",
    durationMin: 11,
    tags: ["logika", "pernyataan", "kebenaran", "negasi"],
    blocks: [
      {
        type: "paragraph",
        html: "\"Jakarta ibu kota Indonesia.\" \"Tutup pintunya!\" \"Apakah kamu lapar?\" Tiga kalimat, tetapi hanya satu yang bisa dinilai benar atau salah. Sebelum membuat aturan logika, ayo selidiki dulu kalimat seperti apa yang bisa kita nilai.",
      },
      {
        type: "video",
        comp: "OperatorLogika",
        title: "Video: Pernyataan dan Operatornya",
        caption: "Logika bekerja pada kalimat yang punya nilai benar atau salah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba uji tiap kalimat dengan satu pertanyaan: 'Bisakah aku bilang ini benar atau salah?' Kalimat berita seperti '2 tambah 2 sama dengan 5' bisa (kebetulan salah). Tetapi perintah dan pertanyaan tidak bisa dinilai benar atau salah, jadi bukan urusan logika.",
      },
      {
        type: "widget",
        widget: "EvaluatorProposisi",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kalimat terbuka",
        html: "Kalimat seperti 'x lebih besar dari 5' belum bisa dinilai sebelum x diketahui. Ini disebut <strong>kalimat terbuka</strong>. Begitu x diisi, ia menjadi pernyataan yang benar atau salah.",
      },
      {
        type: "classifyExercise",
        prompt: "Mana yang merupakan pernyataan (bisa dinilai benar atau salah)?",
        buckets: ["Pernyataan", "Bukan pernyataan"],
        items: [
          { text: "Air mendidih pada 100 derajat Celsius di permukaan laut", bucket: "Pernyataan" },
          { text: "Tolong ambilkan buku itu", bucket: "Bukan pernyataan" },
          { text: "Berapa umurmu?", bucket: "Bukan pernyataan" },
          { text: "5 adalah bilangan genap", bucket: "Pernyataan" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan pernyataan dengan negasinya (ingkaran).",
        pairs: [
          { left: "Hari ini hujan", right: "Hari ini tidak hujan" },
          { left: "Semua siswa hadir", right: "Ada siswa yang tidak hadir" },
          { left: "5 lebih besar dari 3", right: "5 tidak lebih besar dari 3" },
          { left: "Pintu terbuka", right: "Pintu tidak terbuka" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Saklar dan rangkaian",
        html: "Dalam komputer, setiap kondisi disederhanakan menjadi benar (1) atau salah (0). Sebuah saklar yang menyala bernilai benar, yang mati bernilai salah. Seluruh logika mesin dibangun dari pernyataan benar dan salah ini. Maka memahami nilai kebenaran bukan sekadar latihan, melainkan dasar cara mesin berpikir.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah menguji banyak kalimat, baru kita rumuskan: <strong>pernyataan</strong> adalah kalimat yang bernilai benar atau salah, tetapi tidak keduanya. <strong>Negasi</strong> (ingkaran) membalik nilainya: jika p benar, maka 'bukan p' salah. Kalimat perintah dan pertanyaan bukan pernyataan.",
      },
      {
        type: "takeaways",
        items: [
          "Pernyataan adalah kalimat yang bernilai benar atau salah, tidak keduanya.",
          "Perintah, pertanyaan, dan seruan bukan pernyataan.",
          "Kalimat terbuka baru bernilai benar atau salah setelah variabelnya diisi.",
          "Negasi membalik nilai kebenaran sebuah pernyataan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Manakah yang merupakan pernyataan?",
            options: ["Cepat lari!", "Apakah ini benar?", "Ibu kota Jepang adalah Tokyo", "Aduh!"],
            answer: 2,
            explain: "Hanya kalimat berita yang bisa dinilai benar atau salah.",
          },
          {
            q: "Negasi dari 'Semua burung bisa terbang' adalah?",
            options: [
              "Semua burung tidak bisa terbang",
              "Ada burung yang tidak bisa terbang",
              "Tidak ada burung",
              "Semua burung bisa terbang",
            ],
            answer: 1,
            explain: "Ingkaran 'semua' adalah 'ada yang tidak'.",
          },
          {
            q: "'x + 2 = 7' termasuk?",
            options: ["Pernyataan benar", "Pernyataan salah", "Kalimat terbuka", "Bukan kalimat"],
            answer: 2,
            explain: "Nilainya bergantung pada x, jadi kalimat terbuka.",
          },
          {
            q: "Jika pernyataan p bernilai benar, maka negasi p bernilai?",
            options: ["Benar", "Salah", "Tergantung", "Keduanya"],
            answer: 1,
            explain: "Negasi membalik nilai kebenaran.",
          },
          {
            q: "Mengapa perintah bukan pernyataan?",
            options: [
              "Karena terlalu pendek",
              "Karena tidak bisa dinilai benar atau salah",
              "Karena tidak penting",
              "Karena tidak punya kata kerja",
            ],
            answer: 1,
            explain: "Logika hanya menilai kalimat yang punya nilai benar atau salah.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kalimat-terbuka",
    levelId: "pernyataan",
    order: 2,
    title: "Kalimat Terbuka dan Penyelesaiannya",
    summary:
      "\"x + 3 = 10\" belum benar atau salah sampai x kita isi. Kita amati dulu bagaimana sebuah kalimat berubah nilai sebelum merumuskan apa itu kalimat terbuka.",
    durationMin: 11,
    tags: ["logika", "kalimat terbuka", "variabel", "penyelesaian"],
    blocks: [
      {
        type: "paragraph",
        html: "\"x lebih besar dari 7.\" Benar atau salah? Kita belum bisa menjawab, sebab kita belum tahu x berapa. Tetapi begitu x diisi 9, kalimat itu menjadi benar; jika x diisi 3, ia menjadi salah. Sebelum membuat definisi, ayo perhatikan dulu bagaimana satu kalimat bisa berganti-ganti nilai.",
      },
      {
        type: "video",
        comp: "OperatorLogika",
        title: "Video: Dari Kalimat Terbuka ke Pernyataan",
        caption: "Sebuah kalimat dengan variabel baru bisa dinilai setelah variabelnya diganti.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil kalimat 'x adalah bilangan genap'. Coba ganti x dengan 2, lalu 3, lalu 10. Perhatikan: nilainya berubah-ubah mengikuti isian. Selama masih ada huruf yang belum diisi, kita tidak bisa memvonis benar atau salah. Belum usah dihafal istilahnya, rasakan dulu polanya.",
      },
      {
        type: "widget",
        widget: "EvaluatorProposisi",
      },
      {
        type: "classifyExercise",
        prompt: "Mana kalimat terbuka (mengandung variabel yang belum diisi) dan mana yang sudah jadi pernyataan?",
        buckets: ["Kalimat terbuka", "Pernyataan"],
        items: [
          { text: "y - 4 = 1", bucket: "Kalimat terbuka" },
          { text: "3 lebih besar dari 1", bucket: "Pernyataan" },
          { text: "Kota itu beribu kota Indonesia", bucket: "Kalimat terbuka" },
          { text: "7 adalah bilangan ganjil", bucket: "Pernyataan" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Untuk kalimat terbuka \"x + 4 = 9\", nilai x berapa yang membuatnya menjadi pernyataan yang benar?",
        answer: 5,
        solution: "Cari x agar ruas kiri sama dengan 9. Karena 5 + 4 = 9, maka x = 5 membuat kalimat itu menjadi pernyataan yang benar. Nilai x = 5 disebut penyelesaian kalimat terbuka tersebut.",
        hint: "Kurangi 9 dengan 4.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan kalimat terbuka dengan nilai pengganti yang membuatnya benar.",
        pairs: [
          { left: "x + 2 = 6", right: "x = 4" },
          { left: "2x = 10", right: "x = 5" },
          { left: "x adalah bilangan prima genap", right: "x = 2" },
          { left: "x kurang dari 1 dan x bilangan asli", right: "tidak ada" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Rumus pada lembar kerja",
        html: "Di aplikasi pengolah angka, sel berisi rumus seperti '=A1 > 100' tidak punya nilai sampai sel A1 diisi. Begitu A1 diisi 150, rumus berubah menjadi BENAR; bila diisi 80, menjadi SALAH. Inilah kalimat terbuka di dunia nyata: kerangka kalimat sudah ada, tetapi nilai kebenarannya menunggu isian. Jadi kalimat terbuka bukan istilah teoretis belaka, melainkan cara kita menunda penilaian sampai datanya lengkap.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah mengamati banyak contoh, baru kita rumuskan: <strong>kalimat terbuka</strong> adalah kalimat yang memuat variabel sehingga belum dapat ditentukan benar atau salahnya. Nilai pengganti variabel yang membuatnya menjadi pernyataan benar disebut <strong>penyelesaian</strong>, dan himpunan semua penyelesaiannya disebut <strong>himpunan penyelesaian</strong>. Mengisi variabel mengubah kalimat terbuka menjadi pernyataan.",
      },
      {
        type: "takeaways",
        items: [
          "Kalimat terbuka memuat variabel sehingga belum bisa dinilai benar atau salah.",
          "Mengganti variabel dengan nilai tertentu mengubahnya menjadi pernyataan.",
          "Nilai pengganti yang membuat kalimat bernilai benar disebut penyelesaian.",
          "Kumpulan semua penyelesaian disebut himpunan penyelesaian, dan bisa saja kosong.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Manakah yang merupakan kalimat terbuka?",
            options: ["4 + 5 = 9", "Jakarta ada di Pulau Jawa", "n adalah bilangan ganjil", "Tutup jendelanya!"],
            answer: 2,
            explain: "Nilai kebenarannya bergantung pada n, jadi kalimat terbuka.",
          },
          {
            q: "Penyelesaian dari kalimat terbuka \"x - 3 = 8\" adalah?",
            options: ["x = 5", "x = 11", "x = 24", "x = 3"],
            answer: 1,
            explain: "Karena 11 - 3 = 8, maka x = 11.",
          },
          {
            q: "Apa yang terjadi pada kalimat terbuka setelah variabelnya diisi nilai tertentu?",
            options: [
              "Tetap kalimat terbuka",
              "Menjadi pernyataan yang benar atau salah",
              "Menjadi perintah",
              "Menjadi pertanyaan",
            ],
            answer: 1,
            explain: "Setelah variabel diisi, kalimat bisa dinilai benar atau salah.",
          },
          {
            q: "Himpunan penyelesaian dari \"x bilangan asli dan x kurang dari 1\" adalah?",
            options: ["{0}", "{1}", "Himpunan kosong", "Semua bilangan asli"],
            answer: 2,
            explain: "Tidak ada bilangan asli yang kurang dari 1, jadi himpunan penyelesaiannya kosong.",
          },
          {
            q: "Mengapa kalimat terbuka belum bisa disebut pernyataan?",
            options: [
              "Karena terlalu panjang",
              "Karena memuat variabel yang belum diketahui nilainya",
              "Karena berupa pertanyaan",
              "Karena tidak memuat angka",
            ],
            answer: 1,
            explain: "Selama variabel belum diisi, nilai kebenarannya belum dapat ditentukan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "negasi-ingkaran",
    levelId: "pernyataan",
    order: 3,
    title: "Negasi: Membalik Nilai Kebenaran",
    summary:
      "Menambahkan kata \"tidak\" mengubah benar menjadi salah dan sebaliknya. Kita coba banyak contoh dulu sebelum merumuskan aturan ingkaran.",
    durationMin: 12,
    tags: ["logika", "negasi", "ingkaran", "kebenaran"],
    blocks: [
      {
        type: "paragraph",
        html: "\"Hari ini libur.\" Jika ternyata hari ini bukan libur, kalimat itu salah, tetapi ingkarannya 'Hari ini tidak libur' justru benar. Aneh sekaligus rapi: keduanya selalu berlawanan nilai. Sebelum menuliskan aturannya, ayo uji dulu beberapa pasangan kalimat dan ingkarannya.",
      },
      {
        type: "video",
        comp: "OperatorLogika",
        title: "Video: Operator Negasi",
        caption: "Negasi adalah operator yang membalik nilai kebenaran sebuah pernyataan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba ambil pernyataan yang kamu tahu benar, misalnya '2 lebih kecil dari 5'. Buat ingkarannya: '2 tidak lebih kecil dari 5'. Karena aslinya benar, ingkarannya pasti salah. Ulangi dengan pernyataan yang salah, lalu perhatikan: ingkaran selalu menyeberang ke nilai lawannya. Belum perlu rumus, cukup rasakan dulu polanya.",
      },
      {
        type: "widget",
        widget: "SimulatorOperatorLogika",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan pernyataan dengan ingkaran (negasi) yang tepat. Hati-hati pada kata \"semua\" dan \"ada\".",
        pairs: [
          { left: "Semua siswa lulus", right: "Ada siswa yang tidak lulus" },
          { left: "Ada bilangan genap yang prima", right: "Semua bilangan genap bukan prima" },
          { left: "9 habis dibagi 3", right: "9 tidak habis dibagi 3" },
          { left: "Tidak ada hantu", right: "Ada hantu" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Pernyataan asal di bawah BENAR. Kelompokkan ingkaran tiap pernyataan berdasarkan nilainya. (Ingat: ingkaran dari pernyataan benar pasti salah.)",
        buckets: ["Ingkarannya benar", "Ingkarannya salah"],
        items: [
          { text: "Ingkaran dari '3 + 2 = 5'", bucket: "Ingkarannya salah" },
          { text: "Ingkaran dari 'Matahari terbit di timur'", bucket: "Ingkarannya salah" },
          { text: "Ingkaran dari '7 adalah bilangan genap'", bucket: "Ingkarannya benar" },
          { text: "Ingkaran dari 'Semua bilangan prima ganjil'", bucket: "Ingkarannya benar" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Pakai kode 1 untuk benar dan 0 untuk salah. Jika pernyataan p bernilai benar, berapa nilai kebenaran negasi ganda ¬(¬p)?",
        answer: 1,
        solution: "Mulai dari p = benar (1). Negasi pertama ¬p membalik menjadi salah (0). Negasi kedua ¬(¬p) membalik lagi menjadi benar (1). Jadi negasi ganda mengembalikan nilai semula, hasilnya 1 (benar).",
        hint: "Balik nilainya dua kali.",
      },
      {
        type: "case",
        title: "Studi Kasus: Tombol \"Tidak Setuju\"",
        html: "Pada formulir digital, kotak centang persetujuan punya dua keadaan: tercentang (benar) atau kosong (salah). Tombol 'batalkan centang' bekerja persis seperti negasi: ia membalik keadaan saat ini. Menekan dua kali mengembalikan keadaan semula, sama seperti negasi ganda. Maka memahami negasi bukan sekadar main kata 'tidak', melainkan memahami operasi membalik yang dipakai di mana-mana.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah menguji banyak contoh, baru kita rumuskan: <strong>negasi</strong> (ingkaran) sebuah pernyataan p, ditulis ¬p, selalu bernilai kebalikan dari p. Jika p benar maka ¬p salah, dan sebaliknya. Negasi 'semua A adalah B' adalah 'ada A yang bukan B', sedangkan negasi 'ada A yang B' adalah 'semua A bukan B'. Negasi ganda ¬(¬p) bernilai sama dengan p.",
      },
      {
        type: "takeaways",
        items: [
          "Negasi membalik nilai kebenaran: benar menjadi salah, salah menjadi benar.",
          "Negasi 'semua' adalah 'ada yang tidak'; negasi 'ada' adalah 'semua tidak'.",
          "Negasi ganda mengembalikan pernyataan ke nilai semula.",
          "Ingkaran bukan sekadar menambah kata 'tidak', tetapi membalik makna logisnya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Jika pernyataan q bernilai salah, maka negasi q bernilai?",
            options: ["Salah", "Benar", "Tergantung q", "Tidak terdefinisi"],
            answer: 1,
            explain: "Negasi membalik nilai, jadi negasi dari salah adalah benar.",
          },
          {
            q: "Negasi dari 'Ada siswa yang terlambat' adalah?",
            options: [
              "Ada siswa yang tidak terlambat",
              "Semua siswa terlambat",
              "Semua siswa tidak terlambat",
              "Tidak ada siswa",
            ],
            answer: 2,
            explain: "Ingkaran 'ada yang' adalah 'semua tidak'.",
          },
          {
            q: "Negasi dari 'Semua logam memuai jika dipanaskan' adalah?",
            options: [
              "Semua logam tidak memuai jika dipanaskan",
              "Ada logam yang tidak memuai jika dipanaskan",
              "Tidak ada logam",
              "Semua logam memuai",
            ],
            answer: 1,
            explain: "Ingkaran 'semua' adalah 'ada yang tidak'.",
          },
          {
            q: "Nilai dari negasi ganda sebuah pernyataan salah adalah?",
            options: ["Benar", "Salah", "Berubah-ubah", "Tidak ada"],
            answer: 1,
            explain: "Dua kali membalik mengembalikan ke nilai semula, yaitu salah.",
          },
          {
            q: "Manakah pasangan pernyataan dan negasi yang TEPAT?",
            options: [
              "'5 > 2' dan '5 < 2'",
              "'5 > 2' dan '5 tidak lebih besar dari 2'",
              "'Hujan' dan 'Cerah'",
              "'Pintu terbuka' dan 'Jendela tertutup'",
            ],
            answer: 1,
            explain: "Negasi '5 > 2' adalah '5 tidak lebih besar dari 2'; '5 < 2' melewatkan kemungkinan sama dengan.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "menentukan-nilai-kebenaran",
    levelId: "pernyataan",
    order: 4,
    title: "Menentukan Nilai Kebenaran Pernyataan",
    summary:
      "Untuk memutuskan benar atau salah, kita butuh fakta atau bukti, bukan tebakan. Kita latih dulu memeriksa berbagai pernyataan sebelum menyimpulkan caranya.",
    durationMin: 12,
    tags: ["logika", "kebenaran", "fakta", "pembuktian"],
    blocks: [
      {
        type: "paragraph",
        html: "\"Semua bilangan prima ganjil.\" Terdengar masuk akal, sampai kita ingat bahwa 2 adalah prima yang genap. Satu contoh saja sudah cukup menjatuhkan pernyataan itu menjadi salah. Sebelum membuat pedoman, ayo berlatih dulu memeriksa pernyataan satu per satu dengan fakta.",
      },
      {
        type: "video",
        comp: "TabelKebenaran",
        title: "Video: Memeriksa Nilai Kebenaran",
        caption: "Nilai kebenaran ditentukan oleh fakta dan bukti, bukan oleh perasaan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Untuk pernyataan berawalan 'semua', cari satu contoh yang melanggar; jika ketemu, pernyataan itu salah. Untuk pernyataan berawalan 'ada', cari satu contoh yang memenuhi; jika ketemu, pernyataan itu benar. Coba uji 'Ada bilangan genap yang lebih besar dari 100' dan rasakan betapa cepatnya satu contoh menyelesaikan urusan.",
      },
      {
        type: "widget",
        widget: "EvaluatorProposisi",
      },
      {
        type: "classifyExercise",
        prompt: "Tentukan nilai kebenaran tiap pernyataan matematika berikut.",
        buckets: ["Benar", "Salah"],
        items: [
          { text: "Setiap bilangan kuadrat bernilai tidak negatif", bucket: "Benar" },
          { text: "Semua bilangan prima ganjil", bucket: "Salah" },
          { text: "Ada bilangan asli yang lebih kecil dari 1", bucket: "Salah" },
          { text: "Jumlah dua bilangan genap selalu genap", bucket: "Benar" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Dari empat pernyataan ini, berapa banyak yang BENAR? (1) 3 bilangan prima. (2) 10 habis dibagi 4. (3) 6 bilangan genap. (4) 1 bilangan prima.",
        answer: 2,
        solution: "Periksa satu per satu: (1) 3 prima, BENAR. (2) 10 dibagi 4 sisa 2, jadi tidak habis, SALAH. (3) 6 genap, BENAR. (4) 1 hanya punya satu faktor, bukan prima, SALAH. Yang benar ada 2, yaitu pernyataan (1) dan (3).",
        hint: "Ingat bahwa 1 bukan bilangan prima.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap pernyataan dengan alasan yang menentukan nilai kebenarannya.",
        pairs: [
          { left: "'Semua bilangan prima ganjil' bernilai salah", right: "Karena 2 adalah prima yang genap" },
          { left: "'Ada bilangan genap yang prima' bernilai benar", right: "Karena 2 genap dan prima" },
          { left: "'4 adalah bilangan prima' bernilai salah", right: "Karena 4 habis dibagi 2" },
          { left: "'17 adalah bilangan prima' bernilai benar", right: "Karena 17 hanya habis dibagi 1 dan dirinya" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Klaim iklan dan bukti",
        html: "Sebuah iklan mengklaim 'Semua produk kami tahan air'. Untuk membuktikan klaim 'semua' benar, perlu pemeriksaan menyeluruh; tetapi untuk menjatuhkannya, cukup satu produk yang bocor. Sebaliknya, klaim 'ada produk yang gratis ongkir' cukup dibuktikan dengan satu contoh. Maka menentukan nilai kebenaran bukan soal yakin atau tidak, melainkan soal apakah ada fakta atau contoh yang mendukung atau membantah.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah berlatih memeriksa banyak pernyataan, baru kita simpulkan: <strong>nilai kebenaran</strong> ditentukan oleh fakta, bukti, atau aturan matematika, bukan oleh keyakinan. Pernyataan berkata 'semua' cukup dibantah oleh <strong>satu contoh penyangkal</strong> agar menjadi salah. Pernyataan berkata 'ada' cukup didukung <strong>satu contoh</strong> agar menjadi benar. Periksalah, jangan menebak.",
      },
      {
        type: "takeaways",
        items: [
          "Nilai kebenaran ditentukan oleh fakta dan bukti, bukan perasaan.",
          "Satu contoh penyangkal sudah cukup membuat pernyataan 'semua' bernilai salah.",
          "Satu contoh yang memenuhi sudah cukup membuat pernyataan 'ada' bernilai benar.",
          "Memeriksa pernyataan lebih kuat daripada sekadar menebak atau merasa yakin.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pernyataan 'Semua bilangan ganjil adalah prima' bernilai?",
            options: ["Benar", "Salah", "Kalimat terbuka", "Tidak bisa ditentukan"],
            answer: 1,
            explain: "Contoh penyangkal: 9 ganjil tetapi bukan prima, jadi salah.",
          },
          {
            q: "Cara tercepat membuktikan pernyataan 'semua A bersifat B' itu salah adalah?",
            options: [
              "Memeriksa seluruh A",
              "Menemukan satu A yang tidak bersifat B",
              "Menebak saja",
              "Mengubahnya jadi pertanyaan",
            ],
            answer: 1,
            explain: "Satu contoh penyangkal sudah cukup menggugurkan klaim 'semua'.",
          },
          {
            q: "Pernyataan 'Ada bilangan genap yang habis dibagi 7' bernilai?",
            options: ["Benar", "Salah", "Kalimat terbuka", "Bukan pernyataan"],
            answer: 0,
            explain: "Contohnya 14: genap dan habis dibagi 7, jadi benar.",
          },
          {
            q: "Dari pernyataan: (1) 2 prima, (2) 8 ganjil, (3) 15 habis dibagi 5, berapa yang benar?",
            options: ["0", "1", "2", "3"],
            answer: 2,
            explain: "(1) benar, (2) salah karena 8 genap, (3) benar; jadi 2 yang benar.",
          },
          {
            q: "Mengapa keyakinan pribadi tidak cukup untuk menentukan nilai kebenaran?",
            options: [
              "Karena keyakinan selalu salah",
              "Karena nilai kebenaran bergantung pada fakta dan bukti, bukan perasaan",
              "Karena matematika tidak punya nilai benar",
              "Karena semua pernyataan bernilai benar",
            ],
            answer: 1,
            explain: "Logika menilai berdasarkan fakta dan bukti yang dapat diperiksa.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pernyataan-tunggal-dan-majemuk",
    levelId: "pernyataan",
    order: 5,
    title: "Pernyataan Tunggal dan Majemuk",
    summary:
      "Sebuah kalimat bisa berisi satu gagasan atau beberapa gagasan yang disambung kata hubung. Kita pilah dulu contohnya sebelum merumuskan apa itu pernyataan majemuk.",
    durationMin: 12,
    tags: ["logika", "pernyataan tunggal", "pernyataan majemuk", "kata hubung"],
    blocks: [
      {
        type: "paragraph",
        html: "\"Hari ini hujan.\" \"Hari ini hujan <strong>dan</strong> angin kencang.\" Kalimat pertama membawa satu gagasan, kalimat kedua menggabungkan dua. Kata kecil seperti 'dan', 'atau', serta 'jika ... maka' diam-diam menyatukan beberapa pernyataan menjadi satu. Sebelum membuat definisi, ayo pisahkan dulu mana kalimat yang berisi satu gagasan dan mana yang lebih.",
      },
      {
        type: "video",
        comp: "OperatorLogika",
        title: "Video: Menyusun Pernyataan dari Kata Hubung",
        caption: "Kata penghubung menyatukan pernyataan tunggal menjadi pernyataan majemuk.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil kalimat di sekitarmu, lalu coba pecah: 'Adik tidur dan kakak belajar' sebenarnya dua pernyataan, 'adik tidur' serta 'kakak belajar', yang disambung kata 'dan'. Hitung berapa pernyataan tunggal di dalam tiap kalimat sebelum kita beri nama bentuknya.",
      },
      {
        type: "widget",
        widget: "EvaluatorProposisi",
      },
      {
        type: "callout",
        tone: "info",
        title: "Kata penghubung dan lambangnya",
        html: "Setiap kata penghubung punya lambang logika tersendiri: <strong>dan</strong> menjadi konjungsi (&and;), <strong>atau</strong> menjadi disjungsi (&or;), <strong>jika ... maka</strong> menjadi implikasi (&rarr;), <strong>jika dan hanya jika</strong> menjadi biimplikasi (&harr;), dan <strong>tidak</strong> menjadi negasi (&not;).",
      },
      {
        type: "table",
        headers: ["Kata penghubung", "Nama bentuk", "Lambang"],
        rows: [
          ["dan", "Konjungsi", "p ∧ q"],
          ["atau", "Disjungsi", "p ∨ q"],
          ["jika ... maka ...", "Implikasi", "p → q"],
          ["... jika dan hanya jika ...", "Biimplikasi", "p ↔ q"],
          ["tidak / bukan", "Negasi", "¬p"],
        ],
        caption: "Setiap kata hubung sehari-hari punya padanan lambang logika yang baku.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap kalimat: pernyataan tunggal (satu gagasan) atau majemuk (gabungan beberapa gagasan)?",
        buckets: ["Tunggal", "Majemuk"],
        items: [
          { text: "Jakarta ibu kota Indonesia", bucket: "Tunggal" },
          { text: "Andi rajin dan Budi malas", bucket: "Majemuk" },
          { text: "Jika hari libur maka sekolah tutup", bucket: "Majemuk" },
          { text: "5 adalah bilangan prima", bucket: "Tunggal" },
          { text: "Kita naik bus atau naik kereta", bucket: "Majemuk" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan kalimat majemuk dengan nama bentuknya.",
        pairs: [
          { left: "Hari panas dan langit cerah", right: "Konjungsi" },
          { left: "Naik gunung atau ke pantai", right: "Disjungsi" },
          { left: "Jika belajar maka lulus", right: "Implikasi" },
          { left: "Lulus jika dan hanya jika nilai cukup", right: "Biimplikasi" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memecah aturan menjadi bagian",
        html: "Sebuah peraturan parkir berbunyi: \"Kendaraan boleh masuk jika punya kartu anggota <strong>dan</strong> tempat masih tersedia.\" Petugas yang cermat memecahnya menjadi dua pernyataan tunggal: 'punya kartu anggota' dan 'tempat masih tersedia', lalu menyadari keduanya disambung 'dan'. Dengan memisahkan pernyataan majemuk menjadi bagian-bagiannya, ia bisa memeriksa tiap syarat satu per satu tanpa salah membaca. Inilah gunanya membedakan tunggal dan majemuk: bukan sekadar tata bahasa, melainkan cara membaca aturan dengan teliti.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah memilah banyak kalimat, baru kita rumuskan: <strong>pernyataan tunggal</strong> memuat satu gagasan yang berdiri sendiri. <strong>Pernyataan majemuk</strong> dibentuk dengan menyambung dua pernyataan atau lebih memakai kata penghubung (dan, atau, jika ... maka, jika dan hanya jika), atau dengan menambah negasi. Nilai kebenaran pernyataan majemuk ditentukan oleh nilai bagian-bagiannya dan jenis penghubungnya.",
      },
      {
        type: "takeaways",
        items: [
          "Pernyataan tunggal memuat satu gagasan yang berdiri sendiri.",
          "Pernyataan majemuk menyambung dua pernyataan atau lebih dengan kata penghubung.",
          "Kata hubung 'dan', 'atau', 'jika ... maka', dan 'jika dan hanya jika' membentuk bentuk majemuk yang berbeda.",
          "Nilai kebenaran pernyataan majemuk bergantung pada bagian-bagiannya dan jenis penghubungnya.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Manakah yang merupakan pernyataan majemuk?",
            options: [
              "7 adalah bilangan ganjil",
              "Hujan turun dan jalanan basah",
              "Bandung ada di Jawa Barat",
              "Air mendidih pada 100 derajat",
            ],
            answer: 1,
            explain: "Kalimat itu menggabungkan dua pernyataan dengan kata 'dan', jadi majemuk.",
          },
          {
            q: "Kata penghubung 'jika ... maka ...' membentuk pernyataan majemuk berbentuk?",
            options: ["Konjungsi", "Disjungsi", "Implikasi", "Biimplikasi"],
            answer: 2,
            explain: "'Jika ... maka ...' adalah ciri implikasi (p → q).",
          },
          {
            q: "Kalimat 'Tidak benar bahwa 9 prima' termasuk pernyataan majemuk jenis?",
            options: ["Negasi", "Konjungsi", "Implikasi", "Tunggal murni"],
            answer: 0,
            explain: "Kata 'tidak benar bahwa' menambahkan negasi pada sebuah pernyataan.",
          },
          {
            q: "Pernyataan 'Andi suara tinggi dan Budi suara rendah' tersusun dari berapa pernyataan tunggal?",
            options: ["1", "2", "3", "4"],
            answer: 1,
            explain: "Ada dua gagasan: 'Andi suara tinggi' dan 'Budi suara rendah'.",
          },
          {
            q: "Apa yang menentukan nilai kebenaran sebuah pernyataan majemuk?",
            options: [
              "Panjang kalimatnya",
              "Nilai kebenaran bagian-bagiannya dan jenis penghubungnya",
              "Jumlah kata di dalamnya",
              "Urutan kata pertama",
            ],
            answer: 1,
            explain: "Pernyataan majemuk dinilai dari nilai komponennya dan operator penghubungnya.",
          },
        ],
      },
    ],
  },
];
