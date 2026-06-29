import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "konjungsi-dan-disjungsi",
    levelId: "operator-tabel",
    order: 1,
    title: "Konjungsi dan Disjungsi",
    summary:
      "Kata 'dan' serta 'atau' bukan sekadar penyambung kalimat. Kita uji dulu kapan gabungan dua pernyataan menjadi benar sebelum merumuskan aturannya.",
    durationMin: 12,
    tags: ["logika", "konjungsi", "disjungsi", "operator"],
    blocks: [
      {
        type: "paragraph",
        html: "\"Aku akan datang jika hujan reda <strong>dan</strong> motorku sudah diperbaiki.\" \"Kita menang jika cetak gol <strong>atau</strong> lawan diskualifikasi.\" Dua kata kecil, 'dan' serta 'atau', diam-diam mengatur kapan sebuah janji terpenuhi. Sebelum menghafal simbolnya, ayo selidiki dulu kapan gabungan dua pernyataan ini bernilai benar.",
      },
      {
        type: "video",
        comp: "OperatorLogika",
        title: "Video: Operator Logika 'Dan' dan 'Atau'",
        caption: "Konjungsi menuntut keduanya benar, disjungsi cukup salah satu.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Bayangkan janji 'aku bawa payung <strong>dan</strong> jas hujan'. Coba uji empat kemungkinan: bawa keduanya, bawa salah satu saja, atau tidak bawa sama sekali. Kapan janji itu kamu tepati? Lalu ubah 'dan' menjadi 'atau' dan uji lagi. Rasakan dulu perbedaannya sebelum kita tulis aturannya.",
      },
      {
        type: "widget",
        widget: "SimulatorOperatorLogika",
      },
      {
        type: "callout",
        tone: "info",
        title: "Lambang yang dipakai",
        html: "Konjungsi 'p dan q' ditulis <strong>p &and; q</strong>. Disjungsi 'p atau q' ditulis <strong>p &or; q</strong>. Dalam logika, 'atau' bersifat inklusif: tetap benar walau keduanya benar.",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Banyak baris BENAR pada konjungsi p ∧ q",
        unit: " baris",
        source: "Tabel kebenaran 2 variabel (4 baris)",
        note: "Konjungsi hanya benar saat kedua pernyataan benar, jadi cuma 1 dari 4 baris.",
        data: [
          { label: "Baris BENAR", value: 1, color: "#22c55e" },
          { label: "Baris SALAH", value: 3, color: "#94a3b8" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Setiap gabungan di bawah BENAR atau SALAH? (Anggap 'Ikan hidup di air' = benar, 'Ayam bisa terbang jauh' = salah.)",
        buckets: ["Bernilai BENAR", "Bernilai SALAH"],
        items: [
          { text: "Ikan hidup di air DAN ayam bisa terbang jauh", bucket: "Bernilai SALAH" },
          { text: "Ikan hidup di air ATAU ayam bisa terbang jauh", bucket: "Bernilai BENAR" },
          { text: "Ikan hidup di air DAN 2 + 2 = 4", bucket: "Bernilai BENAR" },
          { text: "Ayam bisa terbang jauh ATAU 1 > 5", bucket: "Bernilai SALAH" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Dari 4 baris tabel kebenaran disjungsi p ∨ q, berapa baris yang bernilai BENAR?",
        answer: 3,
        suffix: " baris",
        solution:
          "Disjungsi salah hanya ketika p dan q sama-sama salah, yaitu 1 baris. Sisa 4 − 1 = 3 baris bernilai benar.",
        hint: "Disjungsi cukup butuh satu pernyataan benar. Kapan satu-satunya saat ia salah?",
      },
      {
        type: "case",
        title: "Studi Kasus: Pencarian di toko daring",
        html: "Saat kamu menyaring produk dengan filter 'warna hitam <strong>dan</strong> gratis ongkir', toko hanya menampilkan barang yang memenuhi kedua syarat sekaligus. Itu konjungsi. Tetapi pencarian 'kaus <strong>atau</strong> kemeja' menampilkan barang yang memenuhi salah satu syarat, jadi hasilnya lebih banyak. Itu disjungsi. Mesin pencari memilih operator yang tepat agar hasil sesuai maksudmu, bukan sekadar mencocokkan kata.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah menguji semua kemungkinan, baru kita simpulkan: <strong>konjungsi p &and; q</strong> bernilai benar hanya jika <em>kedua</em> pernyataan benar. <strong>Disjungsi p &or; q</strong> bernilai benar jika <em>paling sedikit satu</em> pernyataan benar, dan hanya salah ketika keduanya salah. Aturan ini ditemukan dari menguji, bukan dihafal lebih dulu.",
      },
      {
        type: "takeaways",
        items: [
          "Konjungsi (p ∧ q) benar hanya saat kedua pernyataan benar.",
          "Disjungsi (p ∨ q) benar jika minimal satu pernyataan benar.",
          "Disjungsi dalam logika bersifat inklusif, tetap benar walau keduanya benar.",
          "Aturan operator ditemukan dengan menguji setiap kemungkinan, bukan dihafal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Konjungsi p ∧ q bernilai benar ketika?",
            options: [
              "Minimal satu benar",
              "Kedua-duanya benar",
              "Kedua-duanya salah",
              "Salah satu salah",
            ],
            answer: 1,
            explain: "Konjungsi menuntut kedua pernyataan benar.",
          },
          {
            q: "Disjungsi p ∨ q bernilai salah hanya ketika?",
            options: [
              "Keduanya benar",
              "Salah satu benar",
              "Keduanya salah",
              "Tidak pernah salah",
            ],
            answer: 2,
            explain: "Disjungsi salah hanya saat p dan q sama-sama salah.",
          },
          {
            q: "'5 genap ATAU 5 ganjil' bernilai?",
            options: ["Benar", "Salah", "Tergantung", "Tidak bisa dinilai"],
            answer: 0,
            explain: "'5 ganjil' benar, jadi disjungsinya benar.",
          },
          {
            q: "'3 < 2 DAN 4 > 1' bernilai?",
            options: ["Benar", "Salah", "Keduanya", "Kalimat terbuka"],
            answer: 1,
            explain: "'3 < 2' salah, maka konjungsi salah walau bagian lain benar.",
          },
          {
            q: "Dari 4 baris tabel kebenaran, konjungsi bernilai benar di berapa baris?",
            options: ["0 baris", "1 baris", "2 baris", "3 baris"],
            answer: 1,
            explain: "Hanya baris ketika p benar dan q benar.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "negasi-pada-operator",
    levelId: "operator-tabel",
    order: 2,
    title: "Negasi pada Operator",
    summary:
      "Membalik kalimat 'dan' atau 'atau' tidak sesederhana menambah kata 'tidak'. Kita uji dulu, baru menemukan pola De Morgan.",
    durationMin: 12,
    tags: ["logika", "negasi", "de morgan", "operator"],
    blocks: [
      {
        type: "paragraph",
        html: "Seseorang berkata, \"Aku suka kopi <strong>dan</strong> teh.\" Lalu temannya membantah. Apa lawan yang tepat? \"Aku tidak suka kopi dan tidak suka teh\"? Atau cukup \"salah satunya tidak aku suka\"? Banyak orang keliru di sini. Ayo uji dulu setiap kemungkinan sebelum menyimpulkan cara membalik konjungsi dan disjungsi.",
      },
      {
        type: "video",
        comp: "OperatorLogika",
        title: "Video: Membalik Operator Logika",
        caption: "Negasi 'dan' ternyata berubah menjadi 'atau', begitu pula sebaliknya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil pernyataan 'hari ini panas <strong>dan</strong> cerah'. Kapan pernyataan itu salah? Daftarkan setiap keadaan: tidak panas, tidak cerah, atau tidak keduanya. Kamu akan melihat ingkarannya benar ketika <em>salah satu</em> bagian gagal. Catat polanya sebelum kita beri nama.",
      },
      {
        type: "widget",
        widget: "EvaluatorProposisi",
      },
      {
        type: "callout",
        tone: "info",
        title: "Negasi pada operator",
        html: "Lambang negasi adalah <strong>&not;</strong>. Yang kita selidiki: &not;(p &and; q) dan &not;(p &or; q). Tujuannya menyatakan ulang ingkaran itu tanpa tanda kurung, agar lebih mudah dibaca.",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Banyak baris BENAR pada ¬(p ∧ q)",
        unit: " baris",
        source: "Tabel kebenaran 2 variabel (4 baris)",
        note: "Konjungsi benar di 1 baris, jadi negasinya benar di 3 baris sisanya.",
        data: [
          { label: "Baris BENAR", value: 3, color: "#22c55e" },
          { label: "Baris SALAH", value: 1, color: "#94a3b8" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan setiap pernyataan dengan ingkaran yang setara (gunakan pola De Morgan).",
        pairs: [
          { left: "¬(p ∧ q)", right: "¬p ∨ ¬q" },
          { left: "¬(p ∨ q)", right: "¬p ∧ ¬q" },
          { left: "¬(¬p)", right: "p" },
          { left: "¬(p ∧ ¬q)", right: "¬p ∨ q" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Manakah ingkaran yang BENAR dari pernyataan asalnya, dan mana yang KELIRU?",
        buckets: ["Ingkaran benar", "Ingkaran keliru"],
        items: [
          { text: "Ingkaran 'lapar dan haus' = 'tidak lapar atau tidak haus'", bucket: "Ingkaran benar" },
          { text: "Ingkaran 'menang atau seri' = 'tidak menang dan tidak seri'", bucket: "Ingkaran benar" },
          { text: "Ingkaran 'lapar dan haus' = 'tidak lapar dan tidak haus'", bucket: "Ingkaran keliru" },
          { text: "Ingkaran 'kaya atau terkenal' = 'tidak kaya atau tidak terkenal'", bucket: "Ingkaran keliru" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Syarat lulus seleksi",
        html: "Sebuah lowongan menulis: 'pelamar harus bisa bahasa Inggris <strong>dan</strong> menguasai Excel'. Bagian penolakan otomatis menolak pelamar yang <strong>tidak</strong> memenuhi syarat itu. Sistem tidak menulis 'tidak bisa Inggris dan tidak bisa Excel', sebab cukup gagal di salah satu untuk ditolak. Karena itu ia memakai 'tidak bisa Inggris <strong>atau</strong> tidak bisa Excel'. Pola De Morgan inilah yang membuat aturan saringan tetap adil dan tepat.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Dari menguji semua baris, lahir <strong>Hukum De Morgan</strong>: &not;(p &and; q) setara dengan &not;p &or; &not;q, dan &not;(p &or; q) setara dengan &not;p &and; &not;q. Singkatnya, saat membalik, 'dan' berganti menjadi 'atau' dan tiap bagian dinegasikan. Pola ini bukan hafalan, melainkan hasil pengujian yang konsisten di setiap kemungkinan.",
      },
      {
        type: "takeaways",
        items: [
          "Negasi konjungsi: ¬(p ∧ q) setara dengan ¬p ∨ ¬q.",
          "Negasi disjungsi: ¬(p ∨ q) setara dengan ¬p ∧ ¬q.",
          "Saat membalik, operator 'dan' dan 'atau' saling bertukar.",
          "Negasi ganda kembali ke pernyataan semula: ¬(¬p) = p.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Ingkaran dari 'aku lapar dan haus' adalah?",
            options: [
              "Tidak lapar dan tidak haus",
              "Tidak lapar atau tidak haus",
              "Lapar atau haus",
              "Tidak lapar saja",
            ],
            answer: 1,
            explain: "De Morgan: ¬(p ∧ q) = ¬p ∨ ¬q.",
          },
          {
            q: "¬(p ∨ q) setara dengan?",
            options: ["¬p ∨ ¬q", "¬p ∧ ¬q", "p ∧ q", "p ∨ q"],
            answer: 1,
            explain: "Negasi disjungsi menjadi konjungsi dua negasi.",
          },
          {
            q: "Ingkaran 'menang atau seri' adalah?",
            options: [
              "Tidak menang atau tidak seri",
              "Menang dan seri",
              "Tidak menang dan tidak seri",
              "Kalah saja",
            ],
            answer: 2,
            explain: "¬(p ∨ q) = ¬p ∧ ¬q, yaitu kalah (tidak menang dan tidak seri).",
          },
          {
            q: "¬(¬p) sama dengan?",
            options: ["¬p", "p", "Selalu benar", "Selalu salah"],
            answer: 1,
            explain: "Negasi ganda mengembalikan pernyataan semula.",
          },
          {
            q: "Pada ¬(p ∧ q), berapa baris bernilai BENAR dari 4 baris?",
            options: ["0", "1", "2", "3"],
            answer: 3,
            explain: "p ∧ q benar di 1 baris, jadi negasinya benar di 3 baris.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "menyusun-tabel-kebenaran",
    levelId: "operator-tabel",
    order: 3,
    title: "Menyusun Tabel Kebenaran",
    summary:
      "Tabel kebenaran bukan untuk dihafal, melainkan disusun dengan menguji setiap kemungkinan secara rapi dan lengkap.",
    durationMin: 13,
    tags: ["logika", "tabel kebenaran", "kemungkinan", "operator"],
    blocks: [
      {
        type: "paragraph",
        html: "Bagaimana kita yakin sebuah pernyataan gabungan benar di <em>semua</em> keadaan, bukan cuma yang kebetulan terpikir? Jawabannya: daftarkan setiap kemungkinan dengan rapi, lalu uji satu per satu. Itulah inti tabel kebenaran. Bukan benda untuk dihafal, melainkan alat untuk menelusuri seluruh kemungkinan tanpa ada yang terlewat.",
      },
      {
        type: "video",
        comp: "TabelKebenaran",
        title: "Video: Menyusun Tabel Kebenaran",
        caption: "Setiap baris adalah satu kemungkinan kombinasi nilai benar dan salah.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Untuk dua pernyataan p dan q, coba daftarkan sendiri semua pasangan nilainya: (B,B), (B,S), (S,B), (S,S). Ada empat. Tambah satu variabel r, dan jumlahnya berlipat. Hitung dulu pola pelipatannya sebelum kita rumuskan, lalu isi kolom hasilnya satu baris demi satu baris.",
      },
      {
        type: "widget",
        widget: "TabelKebenaranBuilder",
      },
      {
        type: "callout",
        tone: "info",
        title: "Banyak baris yang dibutuhkan",
        html: "Setiap variabel punya 2 nilai (benar atau salah). Dengan n variabel, banyak baris adalah <strong>2<sup>n</sup></strong>. Jadi 1 variabel butuh 2 baris, 2 variabel butuh 4 baris, 3 variabel butuh 8 baris.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Banyak baris tabel kebenaran menurut jumlah variabel",
        unit: " baris",
        source: "Rumus 2 pangkat n",
        note: "Tiap penambahan satu variabel melipatgandakan jumlah baris.",
        data: [
          { label: "1 variabel", value: 2, color: "#64748b" },
          { label: "2 variabel", value: 4, color: "#64748b" },
          { label: "3 variabel", value: 8, color: "#64748b" },
          { label: "4 variabel", value: 16, color: "#64748b" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Berapa banyak baris yang dibutuhkan untuk menyusun tabel kebenaran dengan 3 variabel?",
        answer: 8,
        suffix: " baris",
        solution: "Banyak baris = 2^n = 2^3 = 8 baris, agar setiap kombinasi nilai terdaftar.",
        hint: "Gunakan rumus 2 pangkat banyaknya variabel.",
      },
      {
        type: "calcExercise",
        prompt: "Pada tabel kebenaran (p ∧ q) ∨ p, berapa baris yang bernilai BENAR dari 4 baris?",
        answer: 2,
        suffix: " baris",
        solution:
          "Uji tiap baris: (B,B)→B, (B,S)→B, (S,B)→S, (S,S)→S. Hasilnya benar di 2 baris, yaitu ketika p benar.",
        hint: "Susun kolom p ∧ q lebih dulu, lalu gabungkan dengan p memakai 'atau'.",
      },
      {
        type: "classifyExercise",
        prompt: "Untuk menyusun tabel kebenaran yang benar, mana langkah yang TEPAT dan mana yang KELIRU?",
        buckets: ["Langkah tepat", "Langkah keliru"],
        items: [
          { text: "Mendaftar semua kombinasi nilai variabel lebih dulu", bucket: "Langkah tepat" },
          { text: "Mengerjakan operator dalam kurung sebelum yang di luar", bucket: "Langkah tepat" },
          { text: "Langsung menghafal hasil akhir tanpa mengisi kolom", bucket: "Langkah keliru" },
          { text: "Melewati baris (S,S) karena dianggap tidak penting", bucket: "Langkah keliru" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menguji program tanpa celah",
        html: "Seorang penguji perangkat lunak harus memastikan sebuah fitur bekerja di semua kondisi: pengguna login atau tidak, langganan aktif atau tidak. Daripada menebak, ia membuat tabel berisi setiap kombinasi kondisi, lalu memeriksa hasil program di tiap baris. Tabel kebenaran membuatnya yakin tidak ada keadaan yang lolos dari pengujian. Inilah sebabnya tabel disusun, bukan dihafal.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah berlatih mengisinya, kita rangkum cara menyusun tabel kebenaran: (1) tentukan banyak baris dengan <strong>2<sup>n</sup></strong>; (2) daftarkan setiap kombinasi nilai variabel secara rapi; (3) kerjakan operator dari dalam kurung ke luar; (4) isi kolom hasil baris demi baris. Tabel benar karena setiap kemungkinan diuji, bukan karena dihafal.",
      },
      {
        type: "takeaways",
        items: [
          "Banyak baris tabel kebenaran dengan n variabel adalah 2^n.",
          "Setiap baris mewakili satu kombinasi nilai yang mungkin.",
          "Kerjakan operator di dalam kurung lebih dulu, baru yang di luar.",
          "Tabel disusun dengan menguji semua kemungkinan, bukan dihafal.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Tabel kebenaran dengan 2 variabel punya berapa baris?",
            options: ["2", "3", "4", "8"],
            answer: 2,
            explain: "2^2 = 4 baris.",
          },
          {
            q: "Berapa baris untuk 4 variabel?",
            options: ["8", "12", "16", "32"],
            answer: 2,
            explain: "2^4 = 16 baris.",
          },
          {
            q: "Langkah pertama menyusun tabel kebenaran adalah?",
            options: [
              "Menebak hasil akhir",
              "Mendaftar semua kombinasi nilai variabel",
              "Menghapus baris yang salah",
              "Menghafal pola",
            ],
            answer: 1,
            explain: "Semua kombinasi didaftar lebih dulu agar lengkap.",
          },
          {
            q: "Pada pernyataan ((p ∨ q) ∧ r), bagian mana dikerjakan lebih dulu?",
            options: ["r ∧ ...", "p ∨ q di dalam kurung", "Operator paling kanan", "Tidak ada urutan"],
            answer: 1,
            explain: "Operator dalam kurung dikerjakan lebih dahulu.",
          },
          {
            q: "Mengapa baris (S,S) tetap ditulis?",
            options: [
              "Agar tabel terlihat panjang",
              "Karena itu salah satu kemungkinan yang harus diuji",
              "Karena selalu bernilai benar",
              "Tidak perlu ditulis",
            ],
            answer: 1,
            explain: "Setiap kemungkinan harus diuji agar tabel lengkap.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "tautologi-dan-kontradiksi",
    levelId: "operator-tabel",
    order: 4,
    title: "Tautologi dan Kontradiksi",
    summary:
      "Beberapa pernyataan selalu benar, sebagian selalu salah. Kita temukan keduanya dengan menguji seluruh baris, bukan dengan menebak.",
    durationMin: 12,
    tags: ["logika", "tautologi", "kontradiksi", "tabel kebenaran"],
    blocks: [
      {
        type: "paragraph",
        html: "\"Besok hujan <strong>atau</strong> besok tidak hujan.\" Pernyataan itu pasti benar, apa pun yang terjadi. Sebaliknya, \"hari ini Senin <strong>dan</strong> hari ini bukan Senin\" tidak mungkin benar. Bagaimana kita memastikan sebuah pernyataan selalu benar atau selalu salah? Bukan dengan menebak, tetapi dengan menguji setiap baris tabelnya.",
      },
      {
        type: "video",
        comp: "TabelKebenaran",
        title: "Video: Tautologi dan Kontradiksi",
        caption: "Lihat kolom hasilnya: seluruhnya benar, seluruhnya salah, atau campuran.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil pernyataan p &or; &not;p. Susun tabelnya: saat p benar hasilnya benar, saat p salah &not;p benar sehingga hasilnya tetap benar. Sekarang coba p &and; &not;p dan perhatikan kolom hasilnya. Amati polanya dulu sebelum kita beri nama.",
      },
      {
        type: "widget",
        widget: "EvaluatorProposisi",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tiga kemungkinan kolom hasil",
        html: "Setelah tabel disusun, kolom hasil akhir bisa: <strong>semua benar</strong>, <strong>semua salah</strong>, atau <strong>campuran</strong>. Ketiganya punya nama tersendiri yang akan kita simpulkan di akhir.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap pernyataan berdasarkan kolom hasil tabel kebenarannya.",
        buckets: ["Selalu benar", "Selalu salah", "Kadang benar kadang salah"],
        items: [
          { text: "p ∨ ¬p", bucket: "Selalu benar" },
          { text: "p ∧ ¬p", bucket: "Selalu salah" },
          { text: "p ∧ q", bucket: "Kadang benar kadang salah" },
          { text: "(p ∧ q) ∨ ¬(p ∧ q)", bucket: "Selalu benar" },
          { text: "¬p ∧ p ∧ q", bucket: "Selalu salah" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Pada tautologi dengan 2 variabel, dari 4 baris tabel, berapa baris yang bernilai BENAR?",
        answer: 4,
        suffix: " baris",
        solution: "Tautologi bernilai benar di setiap baris, jadi keempat baris bernilai benar.",
        hint: "Tautologi berarti selalu benar di semua kemungkinan.",
      },
      {
        type: "calcExercise",
        prompt: "Pada kontradiksi dengan 2 variabel, berapa baris yang bernilai BENAR dari 4 baris?",
        answer: 0,
        suffix: " baris",
        solution: "Kontradiksi tidak pernah benar, jadi tidak ada baris yang bernilai benar.",
        hint: "Kontradiksi berarti selalu salah di semua kemungkinan.",
      },
      {
        type: "case",
        title: "Studi Kasus: Aturan yang mustahil",
        html: "Sebuah formulir online menetapkan: 'usia harus di bawah 18 <strong>dan</strong> usia harus di atas 18'. Tidak ada satu pun usia yang lolos, karena syaratnya kontradiksi, selalu salah. Sebaliknya, validasi 'angka ini bilangan bulat <strong>atau</strong> bukan bilangan bulat' selalu lolos karena tautologi, sehingga tidak menyaring apa pun. Memahami tautologi dan kontradiksi membantu menemukan aturan yang sia-sia atau mustahil sebelum dipakai.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Dari pengujian tabel, lahir tiga istilah: <strong>tautologi</strong> adalah pernyataan yang bernilai benar di setiap baris; <strong>kontradiksi</strong> bernilai salah di setiap baris; <strong>kontingensi</strong> kadang benar kadang salah. Kita menentukannya dengan memeriksa seluruh kolom hasil, bukan dengan menebak satu kasus.",
      },
      {
        type: "takeaways",
        items: [
          "Tautologi bernilai benar di setiap baris tabel kebenaran.",
          "Kontradiksi bernilai salah di setiap baris tabel kebenaran.",
          "Kontingensi bernilai benar pada sebagian baris dan salah pada sebagian lain.",
          "Jenisnya ditentukan dengan menguji seluruh baris, bukan satu kasus saja.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Pernyataan yang selalu benar di setiap baris disebut?",
            options: ["Kontradiksi", "Tautologi", "Kontingensi", "Negasi"],
            answer: 1,
            explain: "Tautologi bernilai benar di semua kemungkinan.",
          },
          {
            q: "p ∧ ¬p termasuk?",
            options: ["Tautologi", "Kontradiksi", "Kontingensi", "Kalimat terbuka"],
            answer: 1,
            explain: "Tidak ada nilai p yang membuatnya benar, jadi kontradiksi.",
          },
          {
            q: "p ∨ ¬p termasuk?",
            options: ["Tautologi", "Kontradiksi", "Kontingensi", "Bukan pernyataan"],
            answer: 0,
            explain: "Selalu benar untuk nilai p apa pun, jadi tautologi.",
          },
          {
            q: "Pernyataan p ∧ q termasuk?",
            options: ["Tautologi", "Kontradiksi", "Kontingensi", "Negasi ganda"],
            answer: 2,
            explain: "Kadang benar kadang salah tergantung nilai p dan q.",
          },
          {
            q: "Cara memastikan sebuah pernyataan tautologi adalah?",
            options: [
              "Menebak satu kasus",
              "Memeriksa apakah semua baris tabel bernilai benar",
              "Melihat panjang kalimatnya",
              "Menghafal bentuknya",
            ],
            answer: 1,
            explain: "Tautologi harus benar di seluruh baris, jadi semua diperiksa.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "disjungsi-eksklusif",
    levelId: "operator-tabel",
    order: 5,
    title: "Disjungsi Eksklusif: 'Atau' yang Hanya Salah Satu",
    summary:
      "Kata 'atau' kadang berarti boleh dua-duanya, kadang hanya salah satu. Kita uji dulu kedua makna ini sebelum merumuskan disjungsi eksklusif.",
    durationMin: 12,
    tags: ["logika", "disjungsi eksklusif", "xor", "tabel kebenaran"],
    blocks: [
      {
        type: "paragraph",
        html: "Di rumah makan tertulis: \"Paket ini gratis teh <strong>atau</strong> kopi.\" Apakah kamu boleh ambil keduanya? Tentu tidak, hanya satu. Tetapi pada \"diskon untuk pelajar <strong>atau</strong> lansia\", seseorang yang kebetulan pelajar sekaligus lansia tetap dapat. Dua kalimat memakai kata 'atau', tetapi maknanya berbeda. Ayo selidiki dulu kapan 'atau' berarti boleh keduanya dan kapan hanya salah satu.",
      },
      {
        type: "video",
        comp: "TabelKebenaran",
        title: "Video: Dua Wajah Kata 'Atau'",
        caption: "Disjungsi inklusif membolehkan keduanya, eksklusif hanya salah satu.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Uji janji 'aku akan menonton film <strong>atau</strong> tidur'. Kalau ternyata kamu melakukan keduanya sekaligus, apakah janji itu masih pas? Bandingkan dengan 'aku bawa payung <strong>atau</strong> jas hujan' yang tetap benar walau kamu bawa keduanya. Catat dulu di kalimat mana 'keduanya sekaligus' membuat pernyataan menjadi salah.",
      },
      {
        type: "widget",
        widget: "SimulatorOperatorLogika",
      },
      {
        type: "callout",
        tone: "info",
        title: "Membaca lambangnya",
        html: "Disjungsi inklusif ditulis <strong>p &or; q</strong> dan benar bila minimal satu benar (termasuk keduanya). Disjungsi eksklusif ditulis <strong>p &veebar; q</strong> dan benar hanya bila <em>tepat satu</em> yang benar. Hubungannya: p &veebar; q setara dengan (p &or; q) &and; &not;(p &and; q).",
      },
      {
        type: "chart",
        variant: "donut",
        title: "Banyak baris BENAR pada disjungsi eksklusif p ⊻ q",
        unit: " baris",
        source: "Tabel kebenaran 2 variabel (4 baris)",
        note: "Eksklusif benar hanya saat nilai p dan q berbeda, yaitu 2 dari 4 baris.",
        data: [
          { label: "Baris BENAR", value: 2, color: "#22c55e" },
          { label: "Baris SALAH", value: 2, color: "#94a3b8" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Pada tiap pemakaian kata 'atau', mana yang bermakna EKSKLUSIF (hanya salah satu) dan mana INKLUSIF (boleh keduanya)?",
        buckets: ["Eksklusif (hanya satu)", "Inklusif (boleh keduanya)"],
        items: [
          { text: "Lampu lalu lintas: menyala merah atau hijau", bucket: "Eksklusif (hanya satu)" },
          { text: "Syarat daftar: warga negara Indonesia atau penduduk tetap", bucket: "Inklusif (boleh keduanya)" },
          { text: "Hasil lempar koin: angka atau gambar", bucket: "Eksklusif (hanya satu)" },
          { text: "Bonus untuk anggota baru atau pembeli pertama", bucket: "Inklusif (boleh keduanya)" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Dari 4 baris tabel kebenaran disjungsi eksklusif p ⊻ q, berapa baris yang bernilai BENAR?",
        answer: 2,
        suffix: " baris",
        solution:
          "Eksklusif benar hanya bila tepat satu pernyataan benar, yaitu baris (B,S) dan (S,B). Baris (B,B) dan (S,S) bernilai salah. Jadi 2 baris bernilai benar.",
        hint: "Eksklusif benar ketika nilai p dan q berbeda.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan nilai p dan q dengan hasil disjungsi eksklusif p ⊻ q.",
        pairs: [
          { left: "p benar, q benar", right: "p ⊻ q salah" },
          { left: "p benar, q salah", right: "p ⊻ q benar" },
          { left: "p salah, q benar", right: "p ⊻ q benar" },
          { left: "p salah, q salah", right: "p ⊻ q salah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Saklar tangga dua arah",
        html: "Sebuah lampu tangga dikendalikan dua saklar, satu di bawah dan satu di atas. Lampu menyala ketika kedua saklar berada pada posisi <strong>berbeda</strong>, dan padam ketika posisinya sama. Itu persis disjungsi eksklusif: benar (menyala) hanya saat satu saklar berbeda dari yang lain. Karena itu, menekan satu saklar mana pun selalu membalik keadaan lampu. Rangkaian sederhana ini membuktikan disjungsi eksklusif bukan teori belaka, melainkan dipakai nyata di rumah.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun lahir di akhir",
        html: "Setelah menguji semua baris, baru kita rumuskan: <strong>disjungsi eksklusif p &veebar; q bernilai benar hanya ketika tepat satu pernyataan benar</strong>, yakni saat nilai p dan q berbeda. Ia salah bila keduanya benar atau keduanya salah. Bedanya dengan disjungsi inklusif (p &or; q) terletak pada baris (B,B): inklusif tetap benar, eksklusif menjadi salah.",
      },
      {
        type: "takeaways",
        items: [
          "Disjungsi inklusif (p ∨ q) benar bila minimal satu benar, termasuk keduanya.",
          "Disjungsi eksklusif (p ⊻ q) benar hanya bila tepat satu benar.",
          "Eksklusif benar ketika nilai p dan q berbeda, dan salah ketika sama.",
          "p ⊻ q setara dengan (p ∨ q) ∧ ¬(p ∧ q).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Disjungsi eksklusif p ⊻ q bernilai benar ketika?",
            options: [
              "Keduanya benar",
              "Tepat satu yang benar",
              "Keduanya salah",
              "Minimal satu benar",
            ],
            answer: 1,
            explain: "Eksklusif benar hanya saat tepat satu pernyataan benar.",
          },
          {
            q: "Pada baris (B,B), nilai p ⊻ q adalah?",
            options: ["Benar", "Salah", "Tergantung", "Tidak terdefinisi"],
            answer: 1,
            explain: "Karena keduanya benar (tidak berbeda), eksklusif bernilai salah.",
          },
          {
            q: "Pemakaian 'atau' yang bermakna eksklusif adalah?",
            options: [
              "Hasil lempar koin: angka atau gambar",
              "Diskon untuk pelajar atau lansia",
              "Boleh bawa pena atau pensil",
              "Syarat: KTP atau SIM",
            ],
            answer: 0,
            explain: "Sekeping koin hanya bisa angka atau gambar, tidak mungkin keduanya.",
          },
          {
            q: "Dari 4 baris tabel kebenaran, p ⊻ q bernilai benar di berapa baris?",
            options: ["1 baris", "2 baris", "3 baris", "4 baris"],
            answer: 1,
            explain: "Baris (B,S) dan (S,B), yaitu 2 baris.",
          },
          {
            q: "Perbedaan p ∨ q dan p ⊻ q terletak pada baris?",
            options: ["(B,S)", "(S,B)", "(B,B)", "(S,S)"],
            answer: 2,
            explain: "Saat keduanya benar, inklusif tetap benar tetapi eksklusif menjadi salah.",
          },
        ],
      },
    ],
  },
];
