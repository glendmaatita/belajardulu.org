import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "identitas-pythagoras",
    levelId: "identitas",
    order: 1,
    title: "Identitas Pythagoras: sin kuadrat + cos kuadrat",
    summary:
      "Sebuah titik berputar di lingkaran satuan. Ke mana pun ia pergi, ada satu angka yang tak pernah berubah. Ayo kita kejar dulu angka itu.",
    durationMin: 14,
    tags: ["trigonometri", "identitas", "pythagoras", "lingkaran-satuan"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan sebuah titik yang menari mengelilingi lingkaran berjari-jari 1. Posisinya berubah terus, koordinat x dan y naik turun tanpa henti. Tetapi ada satu besaran rahasia yang tetap diam, sama untuk setiap sudut. Sebelum menuliskan rumusnya, ayo kita buru dulu angka yang membandel itu.",
      },
      {
        type: "video",
        comp: "LingkaranSatuanVideo",
        title: "Video: Titik yang Menari di Lingkaran Satuan",
        caption: "Koordinat titik di lingkaran satuan adalah (cos, sin). Jaraknya ke pusat selalu 1.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Pilih sembarang sudut, lalu catat cos (koordinat x) dan sin (koordinat y) titik di lingkaran satuan. Kuadratkan keduanya lalu jumlahkan. Coba untuk 30 derajat, lalu 60 derajat, lalu 200 derajat. Apa yang kamu dapat? Angkanya selalu 1, berapa pun sudutnya.",
      },
      {
        type: "widget",
        widget: "SimulatorLingkaranSatuan",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Nilai sin kuadrat + cos kuadrat di Berbagai Sudut",
        unit: "hasil penjumlahan",
        source: "perhitungan lingkaran satuan",
        note: "Berapa pun sudutnya, sin kuadrat ditambah cos kuadrat selalu menghasilkan tepat 1.",
        data: [
          { label: "0°", value: 1, color: "#84cc16" },
          { label: "30°", value: 1, color: "#65a30d" },
          { label: "45°", value: 1, color: "#22c55e" },
          { label: "60°", value: 1, color: "#16a34a" },
          { label: "200°", value: 1, color: "#15803d" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa angkanya selalu 1",
        html: "Titik di lingkaran satuan punya koordinat (cos, sin), dan jaraknya ke pusat selalu sama dengan jari-jari, yaitu 1. Menurut teorema Pythagoras, jarak itu adalah akar dari (cos kuadrat tambah sin kuadrat). Karena jaraknya 1, maka cos kuadrat tambah sin kuadrat pasti 1.",
      },
      {
        type: "calcExercise",
        prompt:
          "Diketahui sin sebuah sudut = 0,6. Dengan identitas Pythagoras, berapa nilai cos kuadrat sudut itu?",
        answer: 0.64,
        tolerance: 0.01,
        solution:
          "cos kuadrat = 1 − sin kuadrat = 1 − 0,6 × 0,6 = 1 − 0,36 = <strong>0,64</strong>. (Maka cos = 0,8 jika sudut di kuadran I.)",
        hint: "Gunakan cos kuadrat = 1 − sin kuadrat.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah titik di lingkaran satuan punya cos = 0 (di sumbu atas). Berapa nilai sin kuadrat sudut itu?",
        answer: 1,
        tolerance: 0.01,
        solution:
          "sin kuadrat = 1 − cos kuadrat = 1 − 0 = <strong>1</strong>. Titik di puncak lingkaran satuan punya sin = 1, dan 1 kuadrat memang 1.",
        hint: "sin kuadrat = 1 − cos kuadrat.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan setiap bentuk dengan nilai setaranya menurut identitas Pythagoras.",
        pairs: [
          { left: "sin kuadrat + cos kuadrat", right: "1" },
          { left: "1 − sin kuadrat", right: "cos kuadrat" },
          { left: "1 − cos kuadrat", right: "sin kuadrat" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Sensor sudut pada lengan robot",
        html: "Sebuah lengan robot membaca cos posisinya = 0,8 dari sensor, tetapi sensor sin-nya rusak. Insinyur tidak perlu panik. Dengan identitas Pythagoras, sin kuadrat = 1 − 0,64 = 0,36, sehingga sin = 0,6. Hanya dengan satu nilai dan satu identitas, posisi lengan tetap bisa dihitung penuh. Identitas yang tampak abstrak ternyata menyelamatkan mesin di dunia nyata.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Identitas pun ditemukan di akhir",
        html: "Setelah melihat penjumlahan yang selalu 1, barulah kita tuliskan namanya: <strong>sin kuadrat θ + cos kuadrat θ = 1</strong>. Ini bukan rumus untuk dihafal buta, melainkan akibat langsung teorema Pythagoras pada lingkaran satuan, dan berlaku untuk setiap sudut tanpa kecuali.",
      },
      {
        type: "takeaways",
        items: [
          "Titik di lingkaran satuan berkoordinat (cos θ, sin θ) dengan jarak ke pusat selalu 1.",
          "Identitas Pythagoras: sin kuadrat θ + cos kuadrat θ = 1 untuk semua sudut.",
          "Dari identitas ini: cos kuadrat = 1 − sin kuadrat dan sin kuadrat = 1 − cos kuadrat.",
          "Identitas ditemukan dari geometri, bukan dihafal lebih dulu.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Identitas Pythagoras menyatakan bahwa sin kuadrat θ + cos kuadrat θ sama dengan?",
            options: ["0", "1", "θ", "2"],
            answer: 1,
            explain: "Untuk setiap sudut, sin kuadrat θ + cos kuadrat θ = 1.",
          },
          {
            q: "Mengapa nilai itu selalu 1?",
            options: [
              "Karena sudutnya selalu sama",
              "Karena jari-jari lingkaran satuan adalah 1 dan berlaku Pythagoras",
              "Karena sin selalu sama dengan cos",
              "Kebetulan saja",
            ],
            answer: 1,
            explain: "Jarak titik ke pusat (jari-jari) = 1, dan menurut Pythagoras jaraknya akar dari sin kuadrat + cos kuadrat.",
          },
          {
            q: "Jika sin θ = 0,8, maka cos kuadrat θ bernilai?",
            options: ["0,36", "0,64", "0,2", "1,64"],
            answer: 0,
            explain: "cos kuadrat = 1 − sin kuadrat = 1 − 0,64 = 0,36.",
          },
          {
            q: "Bentuk 1 − cos kuadrat θ setara dengan?",
            options: ["sin kuadrat θ", "tan kuadrat θ", "cos θ", "1"],
            answer: 0,
            explain: "Dari identitas Pythagoras, 1 − cos kuadrat θ = sin kuadrat θ.",
          },
          {
            q: "Koordinat sebuah titik di lingkaran satuan adalah?",
            options: ["(sin θ, cos θ)", "(cos θ, sin θ)", "(tan θ, sin θ)", "(1, 1)"],
            answer: 1,
            explain: "Titik di lingkaran satuan berkoordinat (cos θ, sin θ).",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "identitas-perbandingan",
    levelId: "identitas",
    order: 2,
    title: "Identitas Perbandingan: tan = sin ÷ cos",
    summary:
      "Tangen sering terasa seperti makhluk asing yang berdiri sendiri. Padahal ia diam-diam terbuat dari sin dan cos. Ayo kita bongkar isinya.",
    durationMin: 13,
    tags: ["trigonometri", "identitas", "tangen", "perbandingan"],
    blocks: [
      {
        type: "paragraph",
        html: "Banyak orang menghafal sin, cos, dan tan sebagai tiga hal terpisah. Tetapi kalau kita amati segitiga dan lingkaran satuan baik-baik, tan ternyata bukan makhluk baru. Ia lahir dari pembagian dua sahabat lamanya. Ayo kita telusuri dulu sebelum menamai hubungannya.",
      },
      {
        type: "video",
        comp: "TrigonometriVideo",
        title: "Video: Dari Mana Tangen Berasal",
        caption: "tan adalah perbandingan sisi depan dan sisi samping, yang ternyata sama dengan sin dibagi cos.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil sudut 45 derajat. Nilai sin-nya kira-kira 0,707 dan cos-nya juga 0,707. Bagi sin dengan cos: 0,707 ÷ 0,707 = 1. Sekarang cek nilai tan 45 derajat di kalkulator. Hasilnya juga 1. Coba lagi untuk 30 derajat: sin 0,5 dibagi cos 0,866 menghasilkan sekitar 0,577, persis tan 30 derajat. Selalu cocok.",
      },
      {
        type: "widget",
        widget: "SimulatorTrigonometri",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa pembagiannya pas",
        html: "Pada segitiga siku-siku, sin = depan ÷ miring dan cos = samping ÷ miring. Saat sin dibagi cos, faktor miring saling menghapus, tersisa depan ÷ samping. Padahal itu persis definisi tan. Jadi tan memang sin dibagi cos, bukan kebetulan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Diketahui sin sebuah sudut = 0,6 dan cos = 0,8. Berapa nilai tan sudut itu?",
        answer: 0.75,
        tolerance: 0.01,
        solution:
          "tan = sin ÷ cos = 0,6 ÷ 0,8 = <strong>0,75</strong>.",
        hint: "tan = sin dibagi cos.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah sudut punya sin = 0,5 dan cos = 0,5. Berapa nilai tan-nya?",
        answer: 1,
        tolerance: 0.01,
        solution:
          "tan = sin ÷ cos = 0,5 ÷ 0,5 = <strong>1</strong>. Ketika sin dan cos sama besar, tan selalu 1.",
        hint: "Bagi sin dengan cos.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan pernyataan berikut: benar atau salah tentang tan.",
        buckets: ["Benar", "Salah"],
        items: [
          { text: "tan = sin ÷ cos", bucket: "Benar" },
          { text: "tan tidak terdefinisi saat cos = 0", bucket: "Benar" },
          { text: "tan = cos ÷ sin", bucket: "Salah" },
          { text: "tan selalu bernilai antara 0 dan 1", bucket: "Salah" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan sudut dengan nilai tan-nya (dari tan = sin ÷ cos).",
        pairs: [
          { left: "tan 45°", right: "1" },
          { left: "tan 0°", right: "0" },
          { left: "tan 60°", right: "sekitar 1,732" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Kemiringan jalan tanjakan",
        html: "Rambu jalan menulis kemiringan 'grade 10 persen'. Artinya untuk setiap 100 meter mendatar, jalan naik 10 meter. Perbandingan naik dibagi mendatar itu adalah depan ÷ samping, yaitu tan sudut tanjakan, sama saja dengan sin ÷ cos. Insinyur jalan memakai identitas ini untuk mengubah persen kemiringan menjadi sudut sebenarnya. Tangen pun bekerja di aspal.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Identitas pun ditemukan di akhir",
        html: "Setelah membuktikan pembagian yang selalu pas, baru kita namai: <strong>tan θ = sin θ ÷ cos θ</strong>. Identitas ini juga menjelaskan kenapa tan tak terdefinisi saat cos θ = 0, karena kita tidak boleh membagi dengan nol.",
      },
      {
        type: "takeaways",
        items: [
          "tan θ = sin θ ÷ cos θ, bukan perbandingan yang berdiri sendiri.",
          "Faktor sisi miring saling menghapus sehingga sin ÷ cos = depan ÷ samping = tan.",
          "tan tidak terdefinisi ketika cos θ = 0 (membagi dengan nol).",
          "Identitas ini menghubungkan ketiga perbandingan trigonometri menjadi satu keluarga.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Identitas perbandingan menyatakan tan θ sama dengan?",
            options: ["cos θ ÷ sin θ", "sin θ ÷ cos θ", "sin θ × cos θ", "sin θ + cos θ"],
            answer: 1,
            explain: "tan θ = sin θ dibagi cos θ.",
          },
          {
            q: "Mengapa sin ÷ cos sama dengan depan ÷ samping?",
            options: [
              "Karena sin = cos",
              "Karena faktor sisi miring saling menghapus saat dibagi",
              "Karena segitiga selalu sama besar",
              "Kebetulan",
            ],
            answer: 1,
            explain: "sin = depan/miring dan cos = samping/miring; saat dibagi, miring hilang, tersisa depan/samping.",
          },
          {
            q: "Jika sin θ = 0,6 dan cos θ = 0,8, maka tan θ adalah?",
            options: ["1,33", "0,75", "0,48", "1,4"],
            answer: 1,
            explain: "tan = 0,6 ÷ 0,8 = 0,75.",
          },
          {
            q: "Kapan tan θ tidak terdefinisi?",
            options: ["Saat sin θ = 0", "Saat cos θ = 0", "Saat θ = 45°", "Tidak pernah"],
            answer: 1,
            explain: "Karena tan = sin ÷ cos, ia tak terdefinisi ketika cos θ = 0 (pembagian dengan nol).",
          },
          {
            q: "Nilai tan 45° adalah?",
            options: ["0", "0,5", "1", "tak terdefinisi"],
            answer: 2,
            explain: "Pada 45°, sin = cos, sehingga tan = sin ÷ cos = 1.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "menyederhanakan-bentuk-trigonometri",
    levelId: "identitas",
    order: 3,
    title: "Menyederhanakan Bentuk Trigonometri",
    summary:
      "Sebuah ekspresi trigonometri yang panjang dan menyeramkan sering kali hanya angka 1 yang menyamar. Ayo kita kupas penyamarannya.",
    durationMin: 14,
    tags: ["trigonometri", "identitas", "penyederhanaan"],
    blocks: [
      {
        type: "paragraph",
        html: "Kadang kita bertemu bentuk seperti sin kuadrat tambah cos kuadrat ditulis di tengah soal yang rumit. Wajahnya menakutkan, padahal isinya cuma 1. Menyederhanakan bukan sekadar menghitung, melainkan mengenali identitas yang bersembunyi. Ayo kita berlatih melihat tembus penyamaran itu sebelum menamai aturannya.",
      },
      {
        type: "video",
        comp: "PythagorasPetualangan",
        title: "Video: Membongkar Penyamaran Bentuk Trigonometri",
        caption: "Identitas Pythagoras dan tan = sin ÷ cos adalah dua alat utama untuk menyederhanakan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Lihat bentuk ini: (sin kuadrat θ + cos kuadrat θ) × 5. Jangan langsung panik. Ingat kurung pertama selalu 1, jadi seluruhnya hanya 5. Sekarang coba bentuk sin θ ÷ cos θ. Itu hanya tan θ menyamar. Latih matamu menangkap identitas yang tersembunyi.",
      },
      {
        type: "widget",
        widget: "EksplorasiPythagoras",
      },
      {
        type: "callout",
        tone: "info",
        title: "Dua alat andalan",
        html: "Hampir semua penyederhanaan memakai dua identitas yang sudah kita temukan: <strong>sin kuadrat + cos kuadrat = 1</strong> dan <strong>tan = sin ÷ cos</strong>. Kenali keduanya, dan bentuk panjang sering runtuh menjadi sesuatu yang sederhana.",
      },
      {
        type: "calcExercise",
        prompt:
          "Berapa nilai dari bentuk (sin kuadrat θ + cos kuadrat θ) + 4 untuk sudut berapa pun?",
        answer: 5,
        tolerance: 0.01,
        solution:
          "sin kuadrat θ + cos kuadrat θ = 1, jadi 1 + 4 = <strong>5</strong>, berapa pun sudutnya.",
        hint: "Ganti kurung dengan 1.",
      },
      {
        type: "calcExercise",
        prompt:
          "Sederhanakan dan hitung: (1 − sin kuadrat θ) ÷ cos θ, jika cos θ = 0,5. (Petunjuk: 1 − sin kuadrat = cos kuadrat.)",
        answer: 0.5,
        tolerance: 0.01,
        solution:
          "1 − sin kuadrat = cos kuadrat, jadi bentuknya cos kuadrat ÷ cos = cos θ = <strong>0,5</strong>.",
        hint: "Ubah 1 − sin kuadrat menjadi cos kuadrat lebih dulu.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan setiap bentuk menurut hasil sederhananya.",
        buckets: ["Sama dengan 1", "Sama dengan tan θ", "Sama dengan cos kuadrat θ"],
        items: [
          { text: "sin kuadrat θ + cos kuadrat θ", bucket: "Sama dengan 1" },
          { text: "sin θ ÷ cos θ", bucket: "Sama dengan tan θ" },
          { text: "1 − sin kuadrat θ", bucket: "Sama dengan cos kuadrat θ" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan bentuk rumit dengan bentuk sederhananya.",
        pairs: [
          { left: "(sin kuadrat + cos kuadrat) × cos θ", right: "cos θ" },
          { left: "1 − cos kuadrat θ", right: "sin kuadrat θ" },
          { left: "(sin θ ÷ cos θ) × cos θ", right: "sin θ" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menyederhanakan rumus fisika gelombang",
        html: "Dalam rumus energi gelombang, seorang mahasiswa menemukan suku A × (sin kuadrat θ + cos kuadrat θ). Alih-alih menghitung sudut satu per satu, ia langsung mengganti kurung itu dengan 1, sehingga sukunya cukup ditulis A saja. Perhitungan yang tadinya berbaris panjang menyusut jadi satu huruf. Menyederhanakan menghemat waktu, kertas, dan kesalahan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturan pun dirangkum di akhir",
        html: "Setelah berlatih melihat tembus, kita rangkum: ganti <strong>sin kuadrat + cos kuadrat dengan 1</strong>, ubah <strong>1 − sin kuadrat menjadi cos kuadrat</strong> (atau sebaliknya), dan tulis <strong>sin ÷ cos sebagai tan</strong>. Menyederhanakan adalah seni mengenali identitas, bukan menghafal langkah.",
      },
      {
        type: "takeaways",
        items: [
          "Bentuk sin kuadrat + cos kuadrat selalu bisa diganti dengan 1.",
          "1 − sin kuadrat = cos kuadrat dan 1 − cos kuadrat = sin kuadrat.",
          "sin ÷ cos dapat ditulis sebagai tan untuk merapikan ekspresi.",
          "Menyederhanakan berarti mengenali identitas tersembunyi, bukan sekadar menghitung.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bentuk (sin kuadrat θ + cos kuadrat θ) × 7 sama dengan?",
            options: ["7", "14", "θ", "0"],
            answer: 0,
            explain: "Kurung bernilai 1, sehingga 1 × 7 = 7.",
          },
          {
            q: "1 − sin kuadrat θ dapat disederhanakan menjadi?",
            options: ["tan kuadrat θ", "cos kuadrat θ", "1", "sin θ"],
            answer: 1,
            explain: "Dari identitas Pythagoras, 1 − sin kuadrat θ = cos kuadrat θ.",
          },
          {
            q: "Bentuk sin θ ÷ cos θ paling ringkas ditulis sebagai?",
            options: ["1", "cos θ", "tan θ", "sin kuadrat θ"],
            answer: 2,
            explain: "sin θ ÷ cos θ adalah definisi tan θ.",
          },
          {
            q: "Bentuk cos kuadrat θ ÷ cos θ sama dengan?",
            options: ["cos θ", "1", "sin θ", "tan θ"],
            answer: 0,
            explain: "cos kuadrat dibagi cos meninggalkan satu faktor cos θ.",
          },
          {
            q: "Inti dari menyederhanakan bentuk trigonometri adalah?",
            options: [
              "Menghafal banyak rumus",
              "Mengenali identitas yang tersembunyi di dalam ekspresi",
              "Selalu memakai kalkulator",
              "Menghindari sudut istimewa",
            ],
            answer: 1,
            explain: "Penyederhanaan adalah mengenali identitas seperti sin kuadrat + cos kuadrat = 1.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "membuktikan-identitas",
    levelId: "identitas",
    order: 4,
    title: "Membuktikan Identitas Trigonometri",
    summary:
      "Membuktikan identitas itu seperti merapikan dua kamar agar isinya sama persis. Ayo kita pelajari seninya, bukan trik hafalannya.",
    durationMin: 15,
    tags: ["trigonometri", "identitas", "pembuktian"],
    blocks: [
      {
        type: "paragraph",
        html: "Membuktikan identitas berarti menunjukkan bahwa ruas kiri dan ruas kanan sebuah persamaan sebenarnya makhluk yang sama, hanya berpakaian beda. Kita tidak menghitung angka, melainkan mengubah bentuk satu ruas sampai menyerupai ruas lain. Sebelum melihat strateginya, ayo rasakan dulu prosesnya lewat satu contoh kecil.",
      },
      {
        type: "video",
        comp: "PythagorasPetualangan",
        title: "Video: Seni Membuktikan Identitas",
        caption: "Bukti yang baik mengubah satu ruas langkah demi langkah memakai identitas dasar.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Mari buktikan tan θ × cos θ = sin θ. Mulai dari ruas kiri: ganti tan θ dengan sin θ ÷ cos θ. Maka ruas kiri menjadi (sin θ ÷ cos θ) × cos θ. Faktor cos θ saling menghapus, tersisa sin θ, persis ruas kanan. Selesai. Kamu baru saja membuktikan, bukan menebak.",
      },
      {
        type: "widget",
        widget: "EksplorasiPythagoras",
      },
      {
        type: "callout",
        tone: "info",
        title: "Strategi membuktikan",
        html: "Pilih ruas yang lebih rumit lalu ubah memakai identitas dasar yang sudah kita temukan: <strong>sin kuadrat + cos kuadrat = 1</strong> dan <strong>tan = sin ÷ cos</strong>. Ubah semuanya ke sin dan cos bila bingung. Bekerja satu ruas saja sampai bertemu ruas lain.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dalam bukti tan θ × cos θ = sin θ, jika sin θ = 0,6 dan cos θ = 0,8, berapa nilai kedua ruas (yang harus sama)?",
        answer: 0.6,
        tolerance: 0.01,
        solution:
          "tan θ = 0,6 ÷ 0,8 = 0,75; ruas kiri = 0,75 × 0,8 = 0,6. Ruas kanan = sin θ = 0,6. Keduanya <strong>0,6</strong>, terbukti sama.",
        hint: "Hitung tan dulu lalu kalikan dengan cos.",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk identitas (1 − cos kuadrat θ) ÷ sin θ = sin θ, jika sin θ = 0,5, berapa nilai tiap ruas?",
        answer: 0.5,
        tolerance: 0.01,
        solution:
          "1 − cos kuadrat = sin kuadrat = 0,25; lalu 0,25 ÷ 0,5 = 0,5. Ruas kanan = sin θ = 0,5. Keduanya <strong>0,5</strong>, identitas terbukti.",
        hint: "Ubah 1 − cos kuadrat menjadi sin kuadrat lebih dulu.",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan langkah berikut: langkah pembuktian yang sah atau tidak sah.",
        buckets: ["Langkah sah", "Langkah tidak sah"],
        items: [
          { text: "Mengganti tan θ dengan sin θ ÷ cos θ", bucket: "Langkah sah" },
          { text: "Mengganti sin kuadrat + cos kuadrat dengan 1", bucket: "Langkah sah" },
          { text: "Mengganti tan θ dengan cos θ ÷ sin θ", bucket: "Langkah tidak sah" },
          { text: "Mengganti sin kuadrat + cos kuadrat dengan 0", bucket: "Langkah tidak sah" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan ruas kiri dengan ruas kanan identitas yang benar.",
        pairs: [
          { left: "tan θ × cos θ", right: "sin θ" },
          { left: "1 − cos kuadrat θ", right: "sin kuadrat θ" },
          { left: "sin kuadrat θ + cos kuadrat θ", right: "1" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Menyusun bukti di lembar ujian",
        html: "Seorang siswa diminta membuktikan tan θ × cos θ = sin θ di ujian. Ia tidak menebak hasil, melainkan menulis langkah: ubah tan jadi sin ÷ cos, kalikan cos, coret cos, tinggal sin. Pemeriksa memberi nilai penuh bukan karena jawaban akhirnya, melainkan karena setiap langkahnya beralasan. Membuktikan menilai cara berpikir, bukan sekadar hasil.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Seni pembuktian dirangkum di akhir",
        html: "Inilah inti membuktikan identitas: <strong>kerjakan satu ruas</strong> (biasanya yang lebih rumit), <strong>ubah ke sin dan cos</strong>, lalu pakai <strong>sin kuadrat + cos kuadrat = 1</strong> dan <strong>tan = sin ÷ cos</strong> sampai bertemu ruas lain. Bukti yang baik adalah rantai langkah beralasan, bukan hafalan jawaban.",
      },
      {
        type: "takeaways",
        items: [
          "Membuktikan identitas berarti mengubah satu ruas sampai sama dengan ruas lain.",
          "Mengubah semua bentuk ke sin dan cos sering memudahkan pembuktian.",
          "Identitas dasar sin kuadrat + cos kuadrat = 1 dan tan = sin ÷ cos adalah alat utama.",
          "Yang dinilai adalah rantai langkah yang beralasan, bukan sekadar hasil akhir.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Membuktikan identitas trigonometri berarti?",
            options: [
              "Menghitung nilai untuk satu sudut",
              "Menunjukkan kedua ruas selalu setara dengan mengubah bentuknya",
              "Menebak jawaban akhir",
              "Menghafal rumus",
            ],
            answer: 1,
            explain: "Bukti menunjukkan ruas kiri dan kanan setara untuk semua sudut lewat perubahan bentuk.",
          },
          {
            q: "Langkah pertama yang umum dalam membuktikan identitas adalah?",
            options: [
              "Mengubah semuanya ke sin dan cos",
              "Langsung menulis hasil",
              "Mengalikan kedua ruas dengan nol",
              "Mengganti sudut dengan angka acak",
            ],
            answer: 0,
            explain: "Mengubah ke sin dan cos membuat identitas dasar mudah diterapkan.",
          },
          {
            q: "Dalam bukti tan θ × cos θ = sin θ, tan θ diganti dengan?",
            options: ["cos θ ÷ sin θ", "sin θ ÷ cos θ", "sin θ × cos θ", "1"],
            answer: 1,
            explain: "tan θ = sin θ ÷ cos θ; setelah dikali cos θ, tersisa sin θ.",
          },
          {
            q: "Bentuk 1 − cos kuadrat θ dalam pembuktian diganti dengan?",
            options: ["sin kuadrat θ", "tan kuadrat θ", "1", "cos θ"],
            answer: 0,
            explain: "Dari identitas Pythagoras, 1 − cos kuadrat θ = sin kuadrat θ.",
          },
          {
            q: "Mana langkah pembuktian yang TIDAK sah?",
            options: [
              "Mengganti sin ÷ cos dengan tan",
              "Mengganti sin kuadrat + cos kuadrat dengan 1",
              "Mengganti sin kuadrat + cos kuadrat dengan 0",
              "Mengubah tan menjadi sin ÷ cos",
            ],
            answer: 2,
            explain: "sin kuadrat + cos kuadrat selalu 1, bukan 0, jadi langkah itu salah.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "identitas-jumlah-dua-sudut",
    levelId: "identitas",
    order: 5,
    title: "Identitas Jumlah Dua Sudut",
    summary:
      "Bagaimana menemukan sin 75 derajat padahal bukan sudut istimewa? Kita selidiki dulu apa yang terjadi saat dua sudut dijumlahkan.",
    durationMin: 14,
    tags: ["trigonometri", "identitas", "jumlah-sudut", "sin", "cos"],
    blocks: [
      {
        type: "paragraph",
        html: "sin 30 dan sin 45 derajat sudah kita kenal. Tetapi bagaimana dengan sin 75 derajat, padahal 75 bukan sudut istimewa? Menariknya, 75 = 45 + 30. Apakah sin sebuah jumlah sudut bisa dirakit dari sin dan cos kedua bagiannya? Ayo selidiki dulu sebelum menulis identitasnya.",
      },
      {
        type: "video",
        comp: "TrigonometriVideo",
        title: "Video: Menjumlahkan Dua Sudut",
        caption: "sin sebuah jumlah sudut tidak sama dengan menjumlahkan kedua sin-nya.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Jebakan yang sering terjadi",
        html: "Banyak yang menebak sin (A + B) = sin A + sin B. Uji dengan A = B = 30 derajat: ruas kanan menjadi 0,5 + 0,5 = 1, padahal sin 60 derajat hanya 0,866. Jelas keliru. Penjumlahan sudut tidak sesederhana itu.",
      },
      {
        type: "widget",
        widget: "SimulatorTrigonometri",
      },
      {
        type: "chart",
        variant: "bar",
        title: "sin (A + B) Bukan sin A + sin B",
        unit: "nilai",
        source: "nilai trigonometri eksak",
        note: "Untuk A = B = 30 derajat, nilai benar sin 60 = 0,866, sedangkan menjumlahkan sin keliru menghasilkan 1.",
        data: [
          { label: "sin(30°+30°) benar", value: 0.866, color: "#22c55e" },
          { label: "sin30° + sin30° keliru", value: 1.0, color: "#ef4444" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Coba rumus yang benar untuk A = B = 30 derajat: sin A cos B + cos A sin B = (0,5)(0,866) + (0,866)(0,5) = 0,433 + 0,433 = 0,866. Hasilnya pas sin 60 derajat. Rakitan sin kali cos inilah yang cocok, bukan penjumlahan langsung.",
      },
      {
        type: "calcExercise",
        prompt:
          "Hitung sin 75 derajat sebagai sin (45 + 30). Pakai sin45 = cos45 = 0,7071, cos30 = 0,8660, sin30 = 0,5. Rumus: sinA cosB + cosA sinB. Berapa hasilnya?",
        answer: 0.966,
        tolerance: 0.005,
        solution:
          "sin75 = sin45 cos30 + cos45 sin30 = 0,7071 × 0,8660 + 0,7071 × 0,5 = 0,6124 + 0,3536 = <strong>sekitar 0,966</strong>.",
        hint: "Pecah 75 menjadi 45 + 30, lalu pakai sinA cosB + cosA sinB.",
      },
      {
        type: "classifyExercise",
        prompt: "Pernyataan berikut benar atau salah?",
        buckets: ["Benar", "Salah"],
        items: [
          { text: "sin (A + B) = sin A cos B + cos A sin B", bucket: "Benar" },
          { text: "cos (A + B) = cos A cos B − sin A sin B", bucket: "Benar" },
          { text: "sin (A + B) = sin A + sin B", bucket: "Salah" },
          { text: "cos (A + B) = cos A + cos B", bucket: "Salah" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tabel chord milik Ptolemaios",
        html: "Sekitar tahun 150 Masehi, astronom Ptolemaios menyusun tabel panjang tali busur untuk meramal posisi bintang. Ia tidak bisa mengukur tiap sudut satu per satu, jadi ia memakai hubungan jumlah dan selisih sudut untuk merakit nilai sudut baru dari yang sudah diketahui. Persis seperti kita merakit sin 75 derajat dari sin 45 dan sin 30. Satu identitas membuka ratusan nilai tanpa pengukuran ulang.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Identitas pun ditemukan di akhir",
        html: "Setelah mengujinya, baru identitasnya kita tuliskan: <strong>sin (A + B) = sin A cos B + cos A sin B</strong> dan <strong>cos (A + B) = cos A cos B − sin A sin B</strong>. Keduanya merakit nilai sudut gabungan dari sin dan cos bagian-bagiannya, bukan dari penjumlahan langsung.",
      },
      {
        type: "takeaways",
        items: [
          "sin (A + B) tidak sama dengan sin A + sin B.",
          "sin (A + B) = sin A cos B + cos A sin B.",
          "cos (A + B) = cos A cos B − sin A sin B.",
          "Identitas ini merakit nilai sudut bukan istimewa, misalnya sin 75 = sin (45 + 30).",
          "Dengan satu identitas, banyak nilai baru lahir tanpa pengukuran ulang.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus yang benar untuk sin (A + B) adalah?",
            options: [
              "sin A + sin B",
              "sin A cos B + cos A sin B",
              "sin A cos B − cos A sin B",
              "cos A cos B − sin A sin B",
            ],
            answer: 1,
            explain: "sin (A + B) = sin A cos B + cos A sin B.",
          },
          {
            q: "Mengapa sin (30 + 30) bukan sin 30 + sin 30?",
            options: [
              "Karena 30 + 30 bukan 60",
              "Karena sin 60 = 0,866 sedangkan 0,5 + 0,5 = 1",
              "Karena sin tidak bisa dijumlahkan",
              "Karena sudutnya terlalu kecil",
            ],
            answer: 1,
            explain: "Nilai benar sin 60 = 0,866, bukan 1, jadi penjumlahan langsung salah.",
          },
          {
            q: "cos (A + B) sama dengan?",
            options: [
              "cos A cos B + sin A sin B",
              "cos A cos B − sin A sin B",
              "cos A + cos B",
              "sin A cos B + cos A sin B",
            ],
            answer: 1,
            explain: "cos (A + B) = cos A cos B − sin A sin B.",
          },
          {
            q: "Untuk menghitung sin 75 derajat, pecahan sudut yang tepat adalah?",
            options: ["75 = 90 − 15", "75 = 45 + 30", "75 = 60 + 5", "75 = 100 − 25"],
            answer: 1,
            explain: "45 dan 30 keduanya sudut istimewa, jadi 45 + 30 paling praktis.",
          },
          {
            q: "Nilai sin 75 derajat hasil identitas adalah sekitar?",
            options: ["0,707", "0,866", "0,966", "1,000"],
            answer: 2,
            explain: "sin 75 = 0,6124 + 0,3536 = sekitar 0,966.",
          },
        ],
      },
    ],
  },
];
