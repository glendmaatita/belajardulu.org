import type { Lesson } from "../../../types";

export const level2: Lesson[] = [
  // ============================================================
  {
    id: "dimensi-besaran",
    levelId: "dimensi",
    order: 1,
    title: "Dimensi Besaran",
    summary:
      "Di balik beragam satuan, tersembunyi 'sidik jari' yang lebih dalam: dimensi. Kita kenali cara membaca besaran dari massa, panjang, dan waktu.",
    durationMin: 12,
    tags: ["fisika", "dimensi", "besaran"],
    blocks: [
      {
        type: "paragraph",
        html: "Kecepatan bisa ditulis dalam m/s, km/jam, atau bahkan mil per jam. Satuannya berbeda-beda, tetapi 'jenis' besarannya tetap sama: <strong>panjang dibagi waktu</strong>. Inti yang tidak berubah inilah yang disebut <strong>dimensi</strong>. Sebelum bertemu lambangnya, mari pahami dulu kenapa kita butuh konsep di balik satuan.",
      },
      {
        type: "video",
        comp: "AnalisisDimensi",
        title: "Video: Sidik Jari Setiap Besaran",
        caption: "Di balik banyak satuan, ada dimensi yang sama dari besaran pokok.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba pikirkan luas. Mau diukur dalam m², cm², atau hektar, intinya selalu <strong>panjang dikali panjang</strong>. Volume selalu panjang pangkat tiga. Coba rasakan: di balik satuan yang berganti-ganti, ada pola dasar yang tetap. Pola dasar itulah dimensi, dan ia hanya tersusun dari besaran pokok.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Notasi dimensi",
        html: "Dimensi ditulis dengan kurung siku: <strong>[M]</strong> untuk massa, <strong>[L]</strong> untuk panjang, dan <strong>[T]</strong> untuk waktu. Maka luas berdimensi [L]&sup2;, volume [L]&sup3;, kecepatan [L][T]&#8315;&sup1;, dan massa jenis (massa per volume) berdimensi [M][L]&#8315;&sup3;.",
      },
      {
        type: "widget",
        widget: "KonversiSatuan",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap besaran dengan dimensinya yang benar.",
        pairs: [
          { left: "Luas", right: "[L]²" },
          { left: "Volume", right: "[L]³" },
          { left: "Kecepatan", right: "[L][T]⁻¹" },
          { left: "Massa jenis", right: "[M][L]⁻³" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan tiap besaran berdasarkan dimensinya.",
        buckets: ["Berdimensi [L]", "Berdimensi [L]²", "Tak berdimensi"],
        items: [
          { text: "Keliling lingkaran", bucket: "Berdimensi [L]" },
          { text: "Luas permukaan meja", bucket: "Berdimensi [L]²" },
          { text: "Diameter bola", bucket: "Berdimensi [L]" },
          { text: "Luas lantai kamar", bucket: "Berdimensi [L]²" },
          { text: "Jumlah sudut (perbandingan dua panjang)", bucket: "Tak berdimensi" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Massa jenis berdimensi [M][L]⁻³. Sebuah balok bermassa 240 g dan bervolume 30 cm³. Berapa massa jenisnya?",
        answer: 8,
        tolerance: 0.1,
        suffix: " g/cm³",
        solution:
          "Massa jenis = massa / volume = 240 g / 30 cm³ = <strong>8 g/cm³</strong>. Perhatikan satuannya g/cm³ persis mengikuti dimensinya [M][L]⁻³, yaitu massa dibagi panjang pangkat tiga.",
        hint: "Bagi massa dengan volume.",
      },
      {
        type: "case",
        title: "Studi Kasus: Mengenali Besaran 'Asing' dari Dimensinya",
        html: "Saat membaca jurnal fisika, ilmuwan kerap menjumpai besaran baru yang belum pernah mereka lihat. Hal pertama yang mereka periksa bukan namanya, melainkan <strong>dimensinya</strong>. Jika sebuah besaran berdimensi [M][L][T]&#8315;&sup2;, mereka langsung tahu itu sejenis gaya, apa pun namanya. Dimensi bekerja seperti golongan darah besaran: ia mengungkap jati diri sebuah besaran tanpa perlu tahu satuan atau konteksnya.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. <strong>Dimensi adalah cara menyatakan sebuah besaran lewat besaran pokok</strong> (massa [M], panjang [L], waktu [T], dan lainnya), terlepas dari satuan yang dipakai. Banyak besaran berbeda satuan bisa punya dimensi sama, dan dimensi inilah identitas terdalam sebuah besaran.",
      },
      {
        type: "takeaways",
        items: [
          "Dimensi menyatakan besaran lewat besaran pokok: [M], [L], [T], dan lainnya.",
          "Satuan boleh berbeda (m/s, km/jam), tetapi dimensinya bisa sama.",
          "Luas berdimensi [L]², volume [L]³, kecepatan [L][T]⁻¹.",
          "Dimensi adalah 'sidik jari' yang mengungkap jenis sebuah besaran.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa dimensi dari luas?",
            options: ["[L]", "[L]²", "[L]³", "[M][L]"],
            answer: 1,
            explain: "Luas = panjang × panjang, jadi berdimensi [L]².",
          },
          {
            q: "Dua besaran dengan satuan berbeda (m/s dan km/jam) dapat memiliki...",
            options: [
              "dimensi yang sama",
              "dimensi yang selalu berbeda",
              "tidak ada dimensi",
              "massa yang sama",
            ],
            answer: 0,
            explain: "Keduanya sama-sama panjang per waktu, jadi dimensinya sama: [L][T]⁻¹.",
          },
          {
            q: "Massa jenis berdimensi...",
            options: ["[M][L]³", "[M][L]⁻³", "[M][L]⁻¹", "[L]³"],
            answer: 1,
            explain: "Massa jenis = massa / volume = [M] / [L]³ = [M][L]⁻³.",
          },
          {
            q: "Besaran yang merupakan perbandingan dua panjang (misal sudut radian) bersifat...",
            options: ["berdimensi [L]", "berdimensi [L]²", "tak berdimensi", "berdimensi [T]"],
            answer: 2,
            explain: "Panjang dibagi panjang saling mencoret, sehingga tak berdimensi.",
          },
          {
            q: "Apa dimensi dari volume?",
            options: ["[L]", "[L]²", "[L]³", "[M][L]³"],
            answer: 2,
            explain: "Volume = panjang × panjang × panjang = [L]³.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "dimensi-dan-analisis-dimensi",
    levelId: "dimensi",
    order: 2,
    title: "Analisis Dimensi",
    summary:
      "Daripada menghafal rumus, pelajari cara memeriksanya: dimensi adalah 'tata bahasa' fisika yang bisa menangkap rumus salah sebelum kamu menghitung.",
    durationMin: 13,
    tags: ["fisika", "dimensi", "analisis dimensi", "rumus"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan kamu lupa, apakah periode bandul itu <strong>T = 2&pi;&radic;(L/g)</strong> atau <strong>T = 2&pi;&radic;(g/L)</strong>? Kamu tidak perlu menghafal. Cukup periksa <strong>dimensinya</strong>, dan satu versi langsung ketahuan salah. Sebelum menyentuh angka, mari belajar cara fisika memeriksa rumusnya sendiri.",
      },
      {
        type: "video",
        comp: "AnalisisDimensi",
        title: "Video: Dimensi sebagai Tata Bahasa Fisika",
        caption: "Setiap besaran punya 'sidik jari' dimensi dari massa, panjang, dan waktu.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil rumus yang kamu ingat, misalnya jarak = kecepatan &times; waktu. Sekarang ganti tiap besaran dengan satuannya: meter = (meter/sekon) &times; sekon. Sekon saling mencoret, sisanya meter sama dengan meter. Cocok! Itulah inti analisis dimensi: kalau satuan di kiri dan kanan tidak cocok, rumusnya pasti keliru, tanpa perlu satu pun angka.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Notasi dimensi",
        html: "Kita tulis dimensi dengan kurung siku: <strong>[M]</strong> untuk massa, <strong>[L]</strong> untuk panjang, dan <strong>[T]</strong> untuk waktu. Maka kecepatan berdimensi [L][T]&#8315;&sup1; (panjang per waktu), dan percepatan [L][T]&#8315;&sup2; (panjang per waktu kuadrat).",
      },
      {
        type: "widget",
        widget: "KonversiSatuan",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap besaran turunan dengan rumus dimensinya yang benar.",
        pairs: [
          { left: "Kecepatan", right: "[L][T]⁻¹" },
          { left: "Gaya", right: "[M][L][T]⁻²" },
          { left: "Energi", right: "[M][L]²[T]⁻²" },
          { left: "Tekanan", right: "[M][L]⁻¹[T]⁻²" },
        ],
      },
      {
        type: "classifyExercise",
        prompt:
          "Tanpa menghitung angka, periksa dimensinya. Kelompokkan tiap persamaan: dimensinya konsisten atau tidak.",
        buckets: ["Dimensi konsisten", "Dimensi tidak konsisten"],
        items: [
          { text: "kecepatan = percepatan × waktu", bucket: "Dimensi konsisten" },
          { text: "jarak = percepatan × waktu²", bucket: "Dimensi konsisten" },
          { text: "gaya = massa × kecepatan", bucket: "Dimensi tidak konsisten" },
          { text: "energi = massa × kecepatan²", bucket: "Dimensi konsisten" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Analisis dimensi memastikan bentuk T = 2π√(L/g) sudah benar (akarnya berdimensi waktu). Sekarang hitung periode bandul dengan panjang tali L = 1,0 m dan g = 9,8 m/s².",
        answer: 2.0,
        tolerance: 0.1,
        suffix: " s",
        solution:
          "T = 2π√(L/g) = 2π√(1,0 / 9,8) = 2π × 0,319 ≈ <strong>2,0 sekon</strong>. Perhatikan, kita pakai rumus yang sudah lolos uji dimensi, baru memasukkan angka.",
        hint: "Hitung 1,0 dibagi 9,8 dulu, akarkan, lalu kalikan 2π.",
      },
      {
        type: "case",
        title: "Studi Kasus: Menebak Kekuatan Bom dari Sebuah Foto",
        html: "Pada 1950, fisikawan G. I. Taylor menghitung energi ledakan uji bom atom pertama hanya dari rangkaian foto bola api di majalah. Caranya bukan menghafal rumus, melainkan menyusun besaran yang relevan (jari-jari bola api, waktu, dan massa jenis udara) lalu memakai <strong>analisis dimensi</strong> untuk menebak bentuk hubungannya. Hasilnya sangat dekat dengan angka yang saat itu masih rahasia. Inilah bukti bahwa berpikir lewat dimensi bisa lebih kuat daripada sekadar mengingat persamaan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum prinsipnya: <strong>setiap suku dalam sebuah persamaan fisika harus berdimensi sama</strong> (asas kehomogenan dimensi). Secara umum, jika ruas kiri berdimensi [M]<sup>a</sup>[L]<sup>b</sup>[T]<sup>c</sup>, maka ruas kanan wajib berdimensi sama. Analisis dimensi tidak bisa menemukan angka seperti 2π, tetapi ia ampuh menangkap rumus yang salah.",
      },
      {
        type: "takeaways",
        items: [
          "Dimensi besaran ditulis dengan [M], [L], [T] dari besaran pokoknya.",
          "Asas kehomogenan: setiap suku dalam persamaan harus berdimensi sama.",
          "Analisis dimensi memeriksa kebenaran bentuk rumus tanpa perlu angka.",
          "Keterbatasannya: ia tak bisa menentukan konstanta tak berdimensi seperti 2π atau 1/2.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Apa dimensi dari kecepatan?",
            options: ["[L][T]⁻¹", "[L][T]⁻²", "[M][L][T]⁻¹", "[L]²[T]⁻¹"],
            answer: 0,
            explain: "Kecepatan = panjang dibagi waktu, jadi [L][T]⁻¹.",
          },
          {
            q: "Asas kehomogenan dimensi menyatakan bahwa...",
            options: [
              "semua besaran harus dalam satuan SI",
              "setiap suku dalam persamaan harus berdimensi sama",
              "rumus selalu mengandung 2π",
              "dimensi tidak penting untuk fisika",
            ],
            answer: 1,
            explain: "Ruas kiri dan setiap suku ruas kanan wajib berdimensi sama.",
          },
          {
            q: "Persamaan manakah yang dimensinya TIDAK konsisten?",
            options: [
              "jarak = kecepatan × waktu",
              "gaya = massa × percepatan",
              "gaya = massa × kecepatan",
              "energi = gaya × jarak",
            ],
            answer: 2,
            explain: "Massa × kecepatan berdimensi [M][L][T]⁻¹, bukan dimensi gaya [M][L][T]⁻².",
          },
          {
            q: "Apa keterbatasan utama analisis dimensi?",
            options: [
              "Tidak bisa menemukan konstanta tak berdimensi seperti 2π",
              "Tidak bisa dipakai pada gerak",
              "Hanya berlaku untuk massa",
              "Selalu memberi hasil yang salah",
            ],
            answer: 0,
            explain: "Analisis dimensi mengecek bentuk rumus, tetapi tak bisa menentukan angka seperti 2π atau 1/2.",
          },
          {
            q: "Dimensi energi adalah [M][L]²[T]⁻². Besaran mana yang berdimensi sama?",
            options: ["Momentum", "Usaha", "Tekanan", "Daya"],
            answer: 1,
            explain: "Usaha (gaya × jarak) berdimensi sama dengan energi, yaitu [M][L]²[T]⁻².",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "kehomogenan-dimensi",
    levelId: "dimensi",
    order: 3,
    title: "Asas Kehomogenan Dimensi",
    summary:
      "Kenapa kita tidak bisa menjumlahkan meter dengan sekon? Asas kehomogenan adalah aturan main yang menjaga setiap persamaan fisika tetap masuk akal.",
    durationMin: 12,
    tags: ["fisika", "dimensi", "kehomogenan", "rumus"],
    blocks: [
      {
        type: "paragraph",
        html: "Coba jumlahkan '3 apel + 2 jeruk'. Hasilnya bukan '5 apel' atau '5 jeruk', karena keduanya beda jenis. Persamaan fisika juga begitu: kamu tidak bisa menambahkan panjang dengan waktu. Aturan sederhana inilah <strong>asas kehomogenan dimensi</strong>, penjaga agar rumus tetap waras. Sebelum melihat lambangnya, mari rasakan logikanya.",
      },
      {
        type: "video",
        comp: "AnalisisDimensi",
        title: "Video: Hanya yang Sejenis Boleh Dijumlahkan",
        caption: "Setiap suku yang dijumlahkan dalam fisika harus berdimensi sama.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Tinjau rumus jarak gerak: s = v&#8320;t + &frac12;at&sup2;. Periksa tiap suku. v&#8320;t berdimensi (panjang/waktu)(waktu) = panjang. &frac12;at&sup2; berdimensi (panjang/waktu&sup2;)(waktu&sup2;) = panjang. Keduanya panjang, sama seperti s di kiri. Coba rasakan: kalau ada satu suku yang dimensinya beda, kita langsung tahu rumus itu pasti salah ketik atau salah ingat.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Aturan main kehomogenan",
        html: "Suku-suku yang <strong>dijumlahkan atau dikurangkan</strong> wajib berdimensi sama, dan ruas kiri harus berdimensi sama dengan ruas kanan. Angka murni seperti 2, &frac12;, atau &pi; tidak berdimensi, jadi tidak mengubah dimensi suku tempat ia menempel.",
      },
      {
        type: "widget",
        widget: "KonversiSatuan",
      },
      {
        type: "classifyExercise",
        prompt:
          "Periksa kehomogenan tiap persamaan (v = kecepatan, a = percepatan, t = waktu, s = jarak). Kelompokkan: homogen atau tidak homogen.",
        buckets: ["Homogen (boleh)", "Tidak homogen (mustahil)"],
        items: [
          { text: "s = v·t + ½·a·t²", bucket: "Homogen (boleh)" },
          { text: "v = a·t", bucket: "Homogen (boleh)" },
          { text: "s = v + a·t", bucket: "Tidak homogen (mustahil)" },
          { text: "v² = 2·a·s", bucket: "Homogen (boleh)" },
          { text: "a = v + t", bucket: "Tidak homogen (mustahil)" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap suku dengan dimensinya untuk memeriksa kehomogenan.",
        pairs: [
          { left: "v·t (kecepatan × waktu)", right: "[L]" },
          { left: "½·a·t² (percepatan × waktu²)", right: "[L]" },
          { left: "a·t (percepatan × waktu)", right: "[L][T]⁻¹" },
          { left: "v² (kecepatan kuadrat)", right: "[L]²[T]⁻²" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Pada rumus v² = v₀² + 2as, periksa dengan v₀ = 0. Jika a = 2 m/s² dan s = 25 m, berapa nilai v?",
        answer: 10,
        tolerance: 0.1,
        suffix: " m/s",
        solution:
          "Tiap suku berdimensi [L]²[T]⁻², jadi rumusnya homogen dan layak dipakai. v² = 0 + 2(2)(25) = 100, maka v = √100 = <strong>10 m/s</strong>. Kehomogenan dulu memberi izin, baru kita menghitung angka.",
        hint: "Hitung 2 × a × s, lalu akarkan hasilnya.",
      },
      {
        type: "case",
        title: "Studi Kasus: Menangkap Salah Ketik di Buku Teks",
        html: "Seorang guru fisika kerap menemukan kesalahan cetak pada rumus di buku, misalnya pangkat yang tertukar atau besaran yang hilang. Ia tidak perlu menghitung apa pun untuk curiga. Cukup ia periksa <strong>kehomogenan dimensinya</strong>: bila satu suku tiba-tiba berdimensi beda dari suku lain, hampir pasti ada yang salah cetak. Asas ini menjadi 'pemeriksa ejaan' otomatis bagi siapa pun yang menulis atau membaca persamaan fisika.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum. <strong>Asas kehomogenan dimensi: dalam persamaan fisika yang benar, semua suku yang dijumlahkan dan kedua ruas harus berdimensi sama.</strong> Konstanta tak berdimensi (seperti 2, &frac12;, &pi;) boleh muncul tanpa mengganggu. Asas ini syarat perlu, artinya rumus yang tak homogen pasti salah, tetapi rumus yang homogen belum tentu lengkap benar.",
      },
      {
        type: "takeaways",
        items: [
          "Hanya suku-suku berdimensi sama yang boleh dijumlahkan atau dikurangkan.",
          "Ruas kiri dan ruas kanan persamaan harus berdimensi sama.",
          "Konstanta tak berdimensi (2, ½, π) tidak mengubah dimensi.",
          "Kehomogenan adalah syarat perlu: tak homogen pasti salah, homogen belum tentu pasti benar.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Mengapa s = v + a·t pasti salah secara dimensi?",
            options: [
              "Karena v berdimensi kecepatan, sedangkan s berdimensi panjang",
              "Karena angkanya terlalu besar",
              "Karena tidak ada konstanta",
              "Karena memakai huruf v",
            ],
            answer: 0,
            explain: "v berdimensi [L][T]⁻¹, tidak sama dengan s yang berdimensi [L], jadi tak homogen.",
          },
          {
            q: "Suku-suku yang dijumlahkan dalam persamaan fisika harus...",
            options: [
              "berdimensi sama",
              "punya angka sama",
              "selalu positif",
              "tanpa satuan",
            ],
            answer: 0,
            explain: "Hanya besaran berdimensi sama yang bermakna untuk dijumlahkan.",
          },
          {
            q: "Konstanta seperti ½ dan π dalam rumus...",
            options: [
              "menambah dimensi panjang",
              "tidak berdimensi sehingga tidak mengubah kehomogenan",
              "membuat rumus tidak homogen",
              "harus dihilangkan",
            ],
            answer: 1,
            explain: "Angka murni tak berdimensi, jadi tidak memengaruhi pemeriksaan dimensi.",
          },
          {
            q: "Kehomogenan dimensi adalah syarat...",
            options: [
              "perlu tetapi belum tentu cukup",
              "yang menjamin rumus pasti benar sepenuhnya",
              "yang tidak penting",
              "yang hanya berlaku untuk energi",
            ],
            answer: 0,
            explain: "Rumus tak homogen pasti salah, tetapi homogen belum menjamin semua faktor benar.",
          },
          {
            q: "Pada v² = v₀² + 2as, setiap suku berdimensi...",
            options: ["[L][T]⁻¹", "[L]²[T]⁻²", "[L]", "[M][L][T]⁻²"],
            answer: 1,
            explain: "Kecepatan kuadrat berdimensi [L]²[T]⁻², dan 2as juga, sehingga homogen.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "menurunkan-rumus-dimensi",
    levelId: "dimensi",
    order: 4,
    title: "Menurunkan Rumus lewat Dimensi",
    summary:
      "Lupa rumus saat ujian? Kadang kamu bisa membangunnya kembali dari nol, hanya dengan menebak besaran yang terlibat lalu mencocokkan dimensinya.",
    durationMin: 13,
    tags: ["fisika", "dimensi", "menurunkan rumus"],
    blocks: [
      {
        type: "paragraph",
        html: "Anggap kamu lupa rumus periode bandul, tetapi kamu yakin ia bergantung pada panjang tali L dan percepatan gravitasi g. Percaya atau tidak, dari dua besaran itu saja kamu bisa <strong>menyusun ulang bentuk rumusnya</strong> hanya dengan mencocokkan dimensi. Sebelum melihat caranya, mari pahami mengapa ini mungkin.",
      },
      {
        type: "video",
        comp: "AnalisisDimensi",
        title: "Video: Membangun Rumus dari Dimensi",
        caption: "Dengan menebak besaran yang terlibat, dimensi membimbing bentuk rumusnya.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Kita ingin besaran berdimensi waktu [T] dari L (berdimensi [L]) dan g (berdimensi [L][T]&#8315;&sup2;). Coba bentuk L/g: dimensinya [L] / ([L][T]&#8315;&sup2;) = [T]&sup2;. Akarkan, jadi &radic;(L/g) berdimensi [T], persis waktu! Rasakan: dimensi menuntun kita ke bentuk &radic;(L/g), meski ia tak bisa memberi tahu ada faktor 2&pi; di depannya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Langkah menurunkan rumus",
        html: "Pertama, tebak besaran apa saja yang relevan. Kedua, tulis besaran yang dicari sebagai perkalian pangkat besaran-besaran itu. Ketiga, samakan dimensi ruas kiri dan kanan untuk mencari pangkatnya. Hasilnya bentuk rumus, lengkap kecuali konstanta tak berdimensi yang harus dicari lewat percobaan.",
      },
      {
        type: "widget",
        widget: "KonversiSatuan",
      },
      {
        type: "calcExercise",
        prompt:
          "Lewat dimensi, periode bandul berbentuk T = k√(L/g) dengan k konstanta. Percobaan memberi k = 2π. Hitung T untuk L = 0,25 m dan g = 9,8 m/s² (gunakan 2π ≈ 6,28).",
        answer: 1.0,
        tolerance: 0.1,
        suffix: " s",
        solution:
          "√(L/g) = √(0,25 / 9,8) = √0,0255 ≈ 0,16 s. Maka T = 2π × 0,16 ≈ <strong>1,0 sekon</strong>. Dimensi memberi bentuk √(L/g); percobaan melengkapi konstanta 2π.",
        hint: "Hitung √(0,25/9,8) dulu, lalu kalikan 6,28.",
      },
      {
        type: "matchExercise",
        prompt:
          "Pasangkan tiap kombinasi besaran dengan dimensi hasilnya (L = panjang, g = [L][T]⁻², m = massa).",
        pairs: [
          { left: "√(L/g)", right: "[T]" },
          { left: "√(L·g)", right: "[L][T]⁻¹" },
          { left: "L/g", right: "[T]²" },
          { left: "m·g", right: "[M][L][T]⁻²" },
        ],
      },
      {
        type: "classifyExercise",
        prompt:
          "Kita ingin menyusun besaran berdimensi kecepatan [L][T]⁻¹ dari g ([L][T]⁻²) dan L ([L]). Kelompokkan tiap bentuk: berdimensi kecepatan atau bukan.",
        buckets: ["Berdimensi kecepatan", "Bukan kecepatan"],
        items: [
          { text: "√(g·L)", bucket: "Berdimensi kecepatan" },
          { text: "g·L", bucket: "Bukan kecepatan" },
          { text: "g/L", bucket: "Bukan kecepatan" },
          { text: "√(g·L) (sekali lagi, untuk yakin)", bucket: "Berdimensi kecepatan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Rumus Kecepatan Gelombang Air",
        html: "Para fisikawan ingin tahu seberapa cepat gelombang menjalar di air dangkal. Mereka menduga kecepatannya hanya bergantung pada kedalaman air h dan percepatan gravitasi g. Dengan <strong>analisis dimensi</strong>, satu-satunya kombinasi yang berdimensi kecepatan adalah &radic;(g&middot;h). Percobaan kemudian membenarkannya: gelombang air dangkal memang bergerak secepat &radic;(g&middot;h). Tanpa menurunkan persamaan rumit, dimensi sudah menunjuk jawaban yang benar.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah menjelajah, baru kita rangkum metodenya. <strong>Untuk menurunkan bentuk rumus: tebak besaran yang relevan, tulis sebagai perkalian pangkat, lalu samakan dimensinya.</strong> Cara ini memberi bentuk rumus yang benar (seperti &radic;(L/g) atau &radic;(g&middot;h)), tetapi <strong>konstanta tak berdimensi</strong> seperti 2&pi; tetap harus ditemukan lewat percobaan atau teori lebih dalam.",
      },
      {
        type: "takeaways",
        items: [
          "Bentuk rumus bisa diturunkan dengan mencocokkan dimensi besaran yang relevan.",
          "Langkahnya: tebak besaran, tulis sebagai perkalian pangkat, samakan dimensi.",
          "Metode ini memberi bentuk rumus, bukan konstanta tak berdimensi seperti 2π.",
          "Konstanta itu dilengkapi lewat percobaan atau penurunan teori yang lebih dalam.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Dari L ([L]) dan g ([L][T]⁻²), kombinasi yang berdimensi waktu adalah...",
            options: ["L·g", "√(L/g)", "L/g", "√(L·g)"],
            answer: 1,
            explain: "√(L/g) berdimensi √[T]² = [T], yaitu waktu.",
          },
          {
            q: "Analisis dimensi mampu menentukan...",
            options: [
              "bentuk rumus, tetapi bukan konstanta tak berdimensi",
              "semua angka dalam rumus secara lengkap",
              "hanya satuan SI",
              "nilai konstanta 2π",
            ],
            answer: 0,
            explain: "Ia memberi bentuk rumus; konstanta seperti 2π didapat dari percobaan.",
          },
          {
            q: "Kecepatan gelombang air dangkal berdimensi kecepatan, tersusun dari g dan h sebagai...",
            options: ["g·h", "√(g·h)", "g/h", "h/g"],
            answer: 1,
            explain: "Hanya √(g·h) yang berdimensi [L][T]⁻¹, sesuai kecepatan.",
          },
          {
            q: "Langkah pertama menurunkan rumus lewat dimensi adalah...",
            options: [
              "menebak besaran-besaran yang relevan",
              "langsung menulis angka",
              "menghafal jawabannya",
              "mengukur dengan mikrometer",
            ],
            answer: 0,
            explain: "Kita mulai dengan menebak besaran fisis yang ikut menentukan hasilnya.",
          },
          {
            q: "Mengapa percobaan tetap diperlukan setelah analisis dimensi?",
            options: [
              "Untuk menemukan konstanta tak berdimensi seperti 2π",
              "Karena dimensi selalu salah",
              "Untuk mengganti satuan",
              "Karena rumus tidak penting",
            ],
            answer: 0,
            explain: "Dimensi tidak bisa menentukan faktor angka, jadi percobaan melengkapinya.",
          },
        ],
      },
    ],
  },
];
