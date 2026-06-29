import type { Lesson } from "../../../types";

export const level5: Lesson[] = [
  // ============================================================
  {
    id: "mengenal-persamaan-kuadrat",
    levelId: "persamaan-kuadrat",
    order: 1,
    title: "Mengenal Persamaan Kuadrat lewat Luas",
    summary:
      "Mengapa ada x kuadrat? Kita mulai dari sesuatu yang sangat nyata: luas. Dari taman persegi sampai pola angka, kuadrat muncul dengan sendirinya.",
    durationMin: 13,
    tags: ["aljabar", "kuadrat", "luas", "parabola"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan sebuah taman berbentuk persegi. Kamu tidak tahu panjang sisinya, tetapi kamu tahu luasnya 49 meter persegi. Berapa panjang sisi taman itu? Sebelum menyentuh rumus apa pun, rasakan dulu: begitu ada kata <em>luas</em>, sisi yang dicari otomatis dikalikan dengan dirinya sendiri. Di situlah kuadrat lahir.",
      },
      {
        type: "video",
        comp: "MenemukanLuas",
        title: "Video: Saat Sisi Bertemu Dirinya Sendiri",
        caption: "Luas persegi = sisi × sisi. Mengalikan sesuatu dengan dirinya sendiri itulah inti kuadrat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Sebut sisi taman dengan <strong>x</strong>. Karena taman persegi, luasnya x × x, atau x². Jika luasnya 49, maka x² = 49, sehingga x = 7 meter. Kamu baru saja menyelesaikan persamaan kuadrat sederhana tanpa rumus rumit, cukup dengan menebak angka yang dikalikan dirinya sendiri menghasilkan 49.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bukan sekadar berhitung dengan pangkat",
        html: "Persamaan kuadrat bukan sekadar angka yang dipangkatkan dua. Ia adalah <strong>bahasa luas dan pertumbuhan melengkung</strong>: lintasan bola yang dilempar, luas bidang yang membesar, dan banyak pola alam mengikuti bentuk yang sama.",
      },
      {
        type: "widget",
        widget: "PenemuLuas",
      },
      {
        type: "chart",
        variant: "line",
        title: "Tabel Nilai y = x² Membentuk Parabola",
        unit: "nilai y",
        source: "tabel nilai eksak",
        note: "Nilai dihitung langsung dari y = x². Perhatikan bentuknya yang melengkung simetris, inilah parabola, ciri khas kuadrat.",
        data: [
          { label: "x = -2", value: 4, color: "#a78bfa" },
          { label: "x = -1", value: 1, color: "#a78bfa" },
          { label: "x = 0", value: 0, color: "#818cf8" },
          { label: "x = 1", value: 1, color: "#a78bfa" },
          { label: "x = 2", value: 4, color: "#a78bfa" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah lantai persegi memiliki luas 81 ubin persegi. Berapa banyak ubin pada satu sisinya?",
        answer: 9,
        suffix: " ubin",
        solution:
          "Karena lantai persegi, sisi × sisi = luas, jadi x² = 81. Angka yang dikali dirinya sendiri menghasilkan 81 adalah <strong>9</strong>, sebab 9 × 9 = 81.",
        hint: "Cari angka yang jika dikalikan dengan dirinya sendiri menghasilkan 81.",
      },
      {
        type: "classifyExercise",
        prompt: "Mana yang termasuk persamaan kuadrat (pangkat tertinggi 2) dan mana yang bukan?",
        buckets: ["Kuadrat", "Bukan kuadrat"],
        items: [
          { text: "x² + 3x + 2 = 0", bucket: "Kuadrat" },
          { text: "x² = 49", bucket: "Kuadrat" },
          { text: "2x + 5 = 11", bucket: "Bukan kuadrat" },
          { text: "5x - 1 = 0", bucket: "Bukan kuadrat" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memperluas kebun",
        html: "Pak Tani punya kebun persegi dan ingin menambah lebar 2 meter di salah satu sisi sehingga kebun menjadi persegi panjang. Jika sisi semula x meter, luas baru menjadi x × (x + 2) = x² + 2x. Begitu ia menghitung luas dengan sisi yang belum diketahui, bentuk x² langsung muncul. Kuadrat bukan dibuat-buat, ia hadir alami setiap kali kita mengukur luas dengan ukuran yang dicari.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah berpetualang lewat luas, baru kita rumuskan: <strong>persamaan kuadrat</strong> adalah persamaan dengan pangkat tertinggi variabel sama dengan dua, ditulis bentuk baku <strong>ax² + bx + c = 0</strong> dengan a ≠ 0. Huruf a, b, c adalah koefisien, dan grafik fungsinya selalu berbentuk parabola.",
      },
      {
        type: "takeaways",
        items: [
          "Kuadrat muncul alami saat menghitung luas dengan sisi yang belum diketahui.",
          "Bentuk baku persamaan kuadrat adalah ax² + bx + c = 0 dengan a ≠ 0.",
          "Grafik fungsi kuadrat selalu berbentuk parabola yang simetris.",
          "Persamaan kuadrat adalah bahasa luas dan pertumbuhan melengkung, bukan sekadar pangkat dua.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Bentuk baku persamaan kuadrat adalah?",
            options: ["ax + b = 0", "ax² + bx + c = 0 (a ≠ 0)", "x + y = c", "a/x = b"],
            answer: 1,
            explain: "Persamaan kuadrat baku adalah ax² + bx + c = 0 dengan a tidak sama dengan nol.",
          },
          {
            q: "Jika luas taman persegi 64 m², panjang sisinya adalah?",
            options: ["6 m", "8 m", "16 m", "32 m"],
            answer: 1,
            explain: "x² = 64, dan 8 × 8 = 64, jadi sisinya 8 m.",
          },
          {
            q: "Manakah yang BUKAN persamaan kuadrat?",
            options: ["x² - 9 = 0", "2x² + x = 5", "3x - 7 = 0", "x² + 4x + 4 = 0"],
            answer: 2,
            explain: "3x - 7 = 0 hanya berpangkat satu, jadi bukan kuadrat.",
          },
          {
            q: "Grafik fungsi kuadrat berbentuk?",
            options: ["Garis lurus", "Parabola", "Lingkaran", "Zig-zag"],
            answer: 1,
            explain: "Fungsi kuadrat selalu menghasilkan kurva melengkung simetris bernama parabola.",
          },
          {
            q: "Pada x² + 2x, dari mana datangnya bentuk x²?",
            options: [
              "Dari menjumlahkan dua angka",
              "Dari mengalikan sisi dengan dirinya sendiri (luas)",
              "Dari membagi dua bilangan",
              "Dari mengurangi konstanta",
            ],
            answer: 1,
            explain: "x² berasal dari sisi dikali sisi, yaitu perhitungan luas.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "pemfaktoran-kuadrat",
    levelId: "persamaan-kuadrat",
    order: 2,
    title: "Pemfaktoran: Memecah Luas Jadi Sisi-sisi",
    summary:
      "Kalau kuadrat lahir dari mengalikan dua sisi, maka menyelesaikannya berarti membongkar luas kembali menjadi sisi-sisinya. Itulah pemfaktoran.",
    durationMin: 14,
    tags: ["aljabar", "kuadrat", "pemfaktoran", "akar"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah persegi panjang punya luas yang bisa ditulis x² + 5x + 6. Pertanyaannya: berapa panjang dan lebarnya? Sebelum menghafal trik, sadari dulu bahwa kita sedang melakukan kebalikan dari mengalikan. Tadi sisi dikali sisi menghasilkan luas; sekarang kita pecah luas kembali menjadi dua sisi.",
      },
      {
        type: "video",
        comp: "AljabarVideo",
        title: "Video: Membongkar Perkalian Kembali",
        caption: "Memfaktorkan adalah menebak dua bentuk yang bila dikalikan menghasilkan kembali bentuk semula.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Untuk x² + 5x + 6, carilah dua angka yang <strong>dikali jadi 6</strong> dan <strong>dijumlah jadi 5</strong>. Coba 2 dan 3: 2 × 3 = 6 dan 2 + 3 = 5. Cocok. Maka luasnya bisa disusun sebagai (x + 2)(x + 3). Tanpa rumus, hanya menebak pasangan angka yang pas.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa pemfaktoran membantu",
        html: "Jika (x + 2)(x + 3) = 0, maka cukup salah satu kurung yang bernilai nol. Sebab <strong>hasil kali nol hanya jika ada faktor yang nol</strong>. Dari sini akar persamaan langsung terbaca: x = -2 atau x = -3.",
      },
      {
        type: "widget",
        widget: "SimulatorOperasi",
      },
      {
        type: "calcExercise",
        prompt:
          "Selesaikan x² - 5x + 6 = 0. Faktorkan menjadi (x - 2)(x - 3) = 0, lalu isikan akar yang lebih besar.",
        answer: 3,
        solution:
          "Cari dua angka yang dikali jadi 6 dan dijumlah jadi -5, yaitu -2 dan -3. Maka (x - 2)(x - 3) = 0, sehingga x = 2 atau x = 3. Akar yang lebih besar adalah <strong>3</strong>.",
        hint: "Dua angka yang dikali jadi 6 dan dijumlah jadi -5 keduanya negatif.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan bentuk kuadrat dengan hasil pemfaktorannya yang benar.",
        pairs: [
          { left: "x² + 5x + 6", right: "(x + 2)(x + 3)" },
          { left: "x² - 5x + 6", right: "(x - 2)(x - 3)" },
          { left: "x² + x - 6", right: "(x + 3)(x - 2)" },
          { left: "x² - 9", right: "(x - 3)(x + 3)" },
        ],
      },
      {
        type: "classifyExercise",
        prompt: "Untuk x² + x - 6, kelompokkan pernyataan yang BENAR dan SALAH tentang faktornya.",
        buckets: ["Benar", "Salah"],
        items: [
          { text: "Dua angkanya dikali jadi -6", bucket: "Benar" },
          { text: "Dua angkanya dijumlah jadi 1", bucket: "Benar" },
          { text: "Faktornya (x + 2)(x + 3)", bucket: "Salah" },
          { text: "Akarnya x = -3 atau x = 2", bucket: "Benar" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Membagi taman jadi petak",
        html: "Seorang tukang kebun ingin menyusun ubin seluas x² + 7x + 12 menjadi satu blok persegi panjang yang rapi. Ia mencari dua angka yang dikali jadi 12 dan dijumlah jadi 7, yaitu 3 dan 4. Maka blok bisa disusun berukuran (x + 3) kali (x + 4). Pemfaktoran membantunya tahu ukuran sisi nyata yang harus dipasang, bukan sekadar bermain simbol.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah berlatih menebak, baru kita rumuskan aturannya: untuk memfaktorkan <strong>x² + bx + c</strong>, carilah dua bilangan <strong>p dan q</strong> dengan <strong>p × q = c</strong> dan <strong>p + q = b</strong>, sehingga x² + bx + c = (x + p)(x + q). Lalu pakai sifat <strong>hasil kali nol</strong>: jika (x + p)(x + q) = 0 maka x = -p atau x = -q.",
      },
      {
        type: "takeaways",
        items: [
          "Memfaktorkan adalah kebalikan dari mengalikan dua bentuk aljabar.",
          "Untuk x² + bx + c, cari dua angka yang dikali jadi c dan dijumlah jadi b.",
          "Sifat hasil kali nol: jika faktor dikali jadi nol, salah satunya pasti nol.",
          "Akar persamaan terbaca langsung dari faktor yang membuat tiap kurung nol.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Faktorisasi dari x² + 5x + 6 adalah?",
            options: ["(x + 1)(x + 6)", "(x + 2)(x + 3)", "(x - 2)(x - 3)", "(x + 5)(x + 6)"],
            answer: 1,
            explain: "2 × 3 = 6 dan 2 + 3 = 5, jadi (x + 2)(x + 3).",
          },
          {
            q: "Akar dari (x - 4)(x + 1) = 0 adalah?",
            options: ["x = 4 atau x = -1", "x = -4 atau x = 1", "x = 4 atau x = 1", "x = -4 atau x = -1"],
            answer: 0,
            explain: "Tiap kurung dibuat nol: x - 4 = 0 memberi x = 4, dan x + 1 = 0 memberi x = -1.",
          },
          {
            q: "Untuk memfaktorkan x² - 7x + 12, dua angka yang dicari adalah?",
            options: ["-3 dan -4", "3 dan 4", "-2 dan -6", "2 dan 6"],
            answer: 0,
            explain: "(-3) × (-4) = 12 dan (-3) + (-4) = -7, jadi -3 dan -4.",
          },
          {
            q: "Sifat yang dipakai setelah memfaktorkan agar bisa cari akar adalah?",
            options: ["Sifat distributif", "Sifat hasil kali nol", "Sifat komutatif", "Sifat identitas"],
            answer: 1,
            explain: "Hasil kali bernilai nol hanya jika ada faktor yang nol.",
          },
          {
            q: "Faktorisasi dari x² - 9 adalah?",
            options: ["(x - 9)(x + 1)", "(x - 3)(x - 3)", "(x - 3)(x + 3)", "(x + 9)(x - 1)"],
            answer: 2,
            explain: "Ini selisih kuadrat: x² - 9 = (x - 3)(x + 3).",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "melengkapkan-kuadrat",
    levelId: "persamaan-kuadrat",
    order: 3,
    title: "Melengkapkan Kuadrat: Menambah Sudut yang Hilang",
    summary:
      "Tidak semua kuadrat mudah difaktorkan. Tapi setiap kuadrat bisa diubah menjadi persegi sempurna, asal kita tahu sudut mana yang perlu dilengkapi.",
    durationMin: 15,
    tags: ["aljabar", "kuadrat", "melengkapkan-kuadrat", "luas"],
    blocks: [
      {
        type: "paragraph",
        html: "Bentuk x² + 6x susah dibayangkan. Tapi coba susun secara geometris: satu persegi sisi x, lalu tempelkan dua batang masing-masing seluas 3x di dua sisinya. Hasilnya hampir membentuk persegi besar, hanya kurang satu pojok kecil. Berapa luas pojok yang hilang itu? Pertanyaan sederhana ini adalah pintu masuk teknik melengkapkan kuadrat.",
      },
      {
        type: "video",
        comp: "MenemukanLuas",
        title: "Video: Melengkapi Persegi yang Belum Utuh",
        caption: "Menambahkan satu pojok kecil mengubah bentuk berantakan menjadi persegi sempurna.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ambil x² + 6x. Bagi koefisien x (yaitu 6) menjadi dua, dapat 3, lalu kuadratkan jadi 9. Itulah luas pojok yang hilang. Maka x² + 6x + 9 membentuk persegi sempurna (x + 3)². Karena kita menambah 9, kita juga harus menguranginya lagi: x² + 6x = (x + 3)² - 9. Tidak ada sihir, hanya melengkapi sudut.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa teknik ini penting",
        html: "Begitu sebuah bentuk menjadi <strong>(x + p)² = angka</strong>, kita bisa langsung menarik akar kedua sisi. Teknik ini bekerja untuk <strong>semua</strong> persamaan kuadrat, bahkan yang tidak bisa difaktorkan dengan angka bulat.",
      },
      {
        type: "widget",
        widget: "PenemuLuas",
      },
      {
        type: "calcExercise",
        prompt:
          "Untuk melengkapkan kuadrat pada x² + 8x, berapa angka yang harus ditambahkan agar menjadi persegi sempurna?",
        answer: 16,
        solution:
          "Bagi dua koefisien x: 8 ÷ 2 = 4. Lalu kuadratkan: 4² = <strong>16</strong>. Maka x² + 8x + 16 = (x + 4)².",
        hint: "Setengah dari koefisien x, lalu kuadratkan.",
      },
      {
        type: "calcExercise",
        prompt:
          "Selesaikan x² + 6x + 5 = 0 dengan melengkapkan kuadrat. Isikan akar yang lebih besar.",
        answer: -1,
        solution:
          "Tulis x² + 6x = -5, lalu tambah 9 di kedua sisi: x² + 6x + 9 = 4, sehingga (x + 3)² = 4. Tarik akar: x + 3 = ±2, jadi x = -1 atau x = -5. Akar yang lebih besar adalah <strong>-1</strong>.",
        hint: "Ubah jadi (x + 3)² = 4, lalu tarik akar kedua sisi (jangan lupa tanda ±).",
      },
      {
        type: "classifyExercise",
        prompt: "Kelompokkan langkah melengkapkan kuadrat yang BENAR urutannya untuk x² + 4x - 5 = 0.",
        buckets: ["Langkah benar", "Langkah keliru"],
        items: [
          { text: "Pindahkan -5: x² + 4x = 5", bucket: "Langkah benar" },
          { text: "Tambah 4 di kedua sisi (setengah dari 4, dikuadratkan)", bucket: "Langkah benar" },
          { text: "Tulis ruas kiri sebagai (x + 2)²", bucket: "Langkah benar" },
          { text: "Langsung tulis (x + 4)² tanpa membagi dua", bucket: "Langkah keliru" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Memperbesar kolam jadi persegi",
        html: "Sebuah kolam berbentuk x² + 10x meter persegi akan diubah menjadi kolam persegi sempurna dengan menambah area sudut. Tukang menghitung: setengah dari 10 adalah 5, dikuadratkan jadi 25. Ia perlu menambah 25 meter persegi di pojok agar kolam menjadi persegi utuh berukuran (x + 5) × (x + 5). Melengkapkan kuadrat di sini benar-benar berarti menambah luas nyata, bukan trik di atas kertas.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah memahami idenya lewat luas, baru kita rumuskan: untuk melengkapkan kuadrat pada <strong>x² + bx</strong>, tambahkan <strong>(b/2)²</strong> sehingga menjadi <strong>(x + b/2)² - (b/2)²</strong>. Untuk menyelesaikan x² + bx + c = 0, ubah menjadi (x + b/2)² = (b/2)² - c, lalu tarik akar kedua sisi.",
      },
      {
        type: "takeaways",
        items: [
          "Setiap bentuk x² + bx bisa diubah menjadi persegi sempurna (x + b/2)².",
          "Angka pelengkapnya adalah (b/2)², luas pojok yang hilang.",
          "Apa yang ditambahkan di satu sisi harus diimbangi di sisi lain.",
          "Teknik ini bekerja untuk semua kuadrat, termasuk yang tak bisa difaktorkan rapi.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Untuk melengkapkan kuadrat pada x² + 10x, angka yang ditambahkan adalah?",
            options: ["5", "10", "25", "100"],
            answer: 2,
            explain: "Setengah dari 10 adalah 5, dikuadratkan menjadi 25.",
          },
          {
            q: "Bentuk x² + 6x + 9 sama dengan?",
            options: ["(x + 3)²", "(x + 6)²", "(x + 9)²", "(x - 3)²"],
            answer: 0,
            explain: "Setengah dari 6 adalah 3, dan 3² = 9, jadi (x + 3)².",
          },
          {
            q: "Jika (x + 4)² = 9, maka nilai x adalah?",
            options: ["x = -1 atau x = -7", "x = 1 atau x = 7", "x = 3 atau x = -3", "x = 5 atau x = -5"],
            answer: 0,
            explain: "Tarik akar: x + 4 = ±3, jadi x = -1 atau x = -7.",
          },
          {
            q: "Mengapa melengkapkan kuadrat lebih ampuh daripada pemfaktoran biasa?",
            options: [
              "Lebih cepat dihafal",
              "Bekerja untuk semua kuadrat, termasuk yang tak bisa difaktorkan rapi",
              "Tidak perlu menghitung",
              "Selalu menghasilkan satu akar saja",
            ],
            answer: 1,
            explain: "Teknik ini selalu bisa diterapkan, bahkan ketika faktor bulat tidak ada.",
          },
          {
            q: "Pada penyelesaian x² + 6x + 5 = 0, langkah pertama yang tepat adalah?",
            options: [
              "Langsung tarik akar dari 5",
              "Pindahkan 5 ke kanan: x² + 6x = -5",
              "Bagi semua dengan 6",
              "Kuadratkan kedua sisi",
            ],
            answer: 1,
            explain: "Pisahkan konstanta dulu agar ruas kiri siap dilengkapi menjadi persegi sempurna.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "rumus-abc",
    levelId: "persamaan-kuadrat",
    order: 4,
    title: "Rumus abc: Puncak dari Semua Petualangan",
    summary:
      "Rumus abc bukan jatuh dari langit. Ia adalah hasil melengkapkan kuadrat pada bentuk paling umum ax² + bx + c = 0. Kita turunkan sendiri, lalu rumusnya lahir di akhir.",
    durationMin: 16,
    tags: ["aljabar", "kuadrat", "rumus-abc", "diskriminan"],
    blocks: [
      {
        type: "paragraph",
        html: "Bagaimana kalau kita menyelesaikan bukan satu persamaan kuadrat, melainkan SEMUA persamaan kuadrat sekaligus? Daripada melengkapkan kuadrat berulang kali untuk tiap soal, ayo lakukan sekali saja pada bentuk paling umum ax² + bx + c = 0. Hasilnya akan menjadi satu rumus pamungkas. Tapi ingat, kita bangun dulu, rumusnya menyusul di akhir.",
      },
      {
        type: "video",
        comp: "PersamaanVideo",
        title: "Video: Menyelesaikan Semua Kuadrat Sekaligus",
        caption: "Satu penurunan pada bentuk umum menghasilkan rumus untuk segala persamaan kuadrat.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Mulai dari ax² + bx + c = 0. Bagi semua dengan a: x² + (b/a)x + c/a = 0. Pindahkan konstanta: x² + (b/a)x = -c/a. Lalu lengkapkan kuadrat dengan menambah (b/2a)² di kedua sisi. Ruas kiri menjadi (x + b/2a)². Ini persis teknik yang sudah kamu kuasai, hanya kini hurufnya umum. Belum ada rumus jadi, kita masih merakitnya.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Diskriminan menentukan nasib akar",
        html: "Saat melengkapkan kuadrat tadi, ruas kanan menjadi (b² - 4ac) / 4a². Bagian <strong>b² - 4ac</strong> disebut <strong>diskriminan</strong>. Jika positif ada dua akar berbeda, jika nol ada satu akar kembar, jika negatif tidak ada akar real. Diskriminan adalah ramalan sebelum menghitung.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Tabel Nilai y = x² - 5x + 6 dan Akar-akarnya",
        unit: "nilai y",
        source: "tabel nilai eksak",
        note: "Nilai dihitung langsung dari y = x² - 5x + 6. Parabola menyentuh nol di x = 2 dan x = 3, persis akar yang nanti diberikan rumus abc.",
        data: [
          { label: "x = 0", value: 6, color: "#818cf8" },
          { label: "x = 1", value: 2, color: "#818cf8" },
          { label: "x = 2", value: 0, color: "#34d399" },
          { label: "x = 2,5", value: -0.25, color: "#f87171" },
          { label: "x = 3", value: 0, color: "#34d399" },
          { label: "x = 4", value: 2, color: "#818cf8" },
          { label: "x = 5", value: 6, color: "#818cf8" },
        ],
      },
      {
        type: "calcExercise",
        prompt:
          "Hitung diskriminan b² - 4ac untuk persamaan x² - 5x + 6 = 0 (a = 1, b = -5, c = 6).",
        answer: 1,
        solution:
          "Diskriminan = b² - 4ac = (-5)² - 4(1)(6) = 25 - 24 = <strong>1</strong>. Karena positif, ada dua akar real berbeda.",
        hint: "Masukkan a = 1, b = -5, c = 6 ke b² - 4ac.",
      },
      {
        type: "calcExercise",
        prompt:
          "Selesaikan 2x² - 4x - 6 = 0 dengan rumus abc (a = 2, b = -4, c = -6). Isikan akar yang lebih besar.",
        answer: 3,
        solution:
          "Diskriminan = (-4)² - 4(2)(-6) = 16 + 48 = 64, akarnya √64 = 8. Maka x = (4 ± 8) / (2·2) = (4 ± 8) / 4. Jadi x = 12/4 = 3 atau x = -4/4 = -1. Akar yang lebih besar adalah <strong>3</strong>.",
        hint: "x = (-b ± akar(b²-4ac)) / 2a, dengan -b = 4 dan 2a = 4.",
      },
      {
        type: "classifyExercise",
        prompt: "Berdasarkan diskriminan b² - 4ac, kelompokkan situasi akar berikut.",
        buckets: ["Dua akar berbeda", "Satu akar kembar", "Tidak ada akar real"],
        items: [
          { text: "b² - 4ac = 25 (positif)", bucket: "Dua akar berbeda" },
          { text: "b² - 4ac = 0", bucket: "Satu akar kembar" },
          { text: "b² - 4ac = -9 (negatif)", bucket: "Tidak ada akar real" },
          { text: "b² - 4ac = 1 (positif)", bucket: "Dua akar berbeda" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Lintasan bola yang dilempar",
        html: "Tinggi sebuah bola (dalam meter) mengikuti pola yang bisa disusun jadi persamaan kuadrat terhadap waktu. Untuk tahu kapan bola menyentuh tanah (tinggi = 0), kita perlu menyelesaikan persamaan kuadrat yang koefisiennya tidak rapi untuk difaktorkan. Di sinilah rumus abc menjadi penyelamat: berapa pun nilai a, b, dan c, ia selalu memberi jawabannya. Rumus ini bukan hafalan kosong, melainkan alat universal untuk masalah nyata.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Rumus pun lahir di akhir",
        html: "Setelah kita turunkan sendiri lewat melengkapkan kuadrat pada ax² + bx + c = 0, barulah rumus pamungkasnya lahir: <strong>x = (-b ± akar(b² - 4ac)) / 2a</strong>, dengan a ≠ 0. Nilai <strong>b² - 4ac</strong> (diskriminan) menentukan banyaknya akar: positif berarti dua akar, nol berarti satu akar kembar, negatif berarti tidak ada akar real. Inilah puncak perjalanan kita.",
      },
      {
        type: "takeaways",
        items: [
          "Rumus abc adalah hasil melengkapkan kuadrat pada bentuk umum ax² + bx + c = 0.",
          "Rumusnya: x = (-b ± akar(b² - 4ac)) / 2a dengan a ≠ 0.",
          "Diskriminan b² - 4ac menentukan jumlah akar: positif, nol, atau tak ada akar real.",
          "Rumus abc menyelesaikan setiap persamaan kuadrat, bahkan yang tak bisa difaktorkan.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Rumus abc untuk ax² + bx + c = 0 adalah?",
            options: [
              "x = (-b ± akar(b² - 4ac)) / 2a",
              "x = (b ± akar(b² + 4ac)) / a",
              "x = -b / 2a",
              "x = (b² - 4ac) / 2a",
            ],
            answer: 0,
            explain: "Rumus abc yang benar adalah x = (-b ± akar(b² - 4ac)) / 2a.",
          },
          {
            q: "Diskriminan dari x² - 5x + 6 = 0 adalah?",
            options: ["1", "-1", "49", "11"],
            answer: 0,
            explain: "b² - 4ac = (-5)² - 4(1)(6) = 25 - 24 = 1.",
          },
          {
            q: "Jika diskriminan bernilai negatif, maka persamaan kuadrat itu?",
            options: [
              "Punya dua akar berbeda",
              "Punya satu akar kembar",
              "Tidak punya akar real",
              "Selalu bernilai nol",
            ],
            answer: 2,
            explain: "Diskriminan negatif berarti akar di bawah akar pangkat dua negatif, tidak ada akar real.",
          },
          {
            q: "Rumus abc diturunkan dengan teknik?",
            options: ["Pemfaktoran", "Melengkapkan kuadrat", "Pembagian bersusun", "Coba-coba angka"],
            answer: 1,
            explain: "Rumus abc lahir dari melengkapkan kuadrat pada bentuk umum ax² + bx + c = 0.",
          },
          {
            q: "Akar dari 2x² - 4x - 6 = 0 adalah?",
            options: ["x = 3 atau x = -1", "x = 1 atau x = -3", "x = 2 atau x = -3", "x = 6 atau x = -1"],
            answer: 0,
            explain: "x = (4 ± akar(16 + 48)) / 4 = (4 ± 8) / 4, jadi x = 3 atau x = -1.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "diskriminan",
    levelId: "persamaan-kuadrat",
    order: 5,
    title: "Diskriminan: Membaca Jumlah Akar Sebelum Menghitung",
    summary:
      "Sebelum repot memakai rumus abc, ada satu angka yang bisa memberi tahu berapa akar yang akan kita temukan. Kita temukan dulu lewat tiga kasus nyata.",
    durationMin: 14,
    tags: ["aljabar", "kuadrat", "diskriminan", "akar"],
    blocks: [
      {
        type: "paragraph",
        html: "Sebuah bola dilempar ke atas. Kadang ia mencapai ketinggian yang kita incar (dua kali: saat naik dan saat turun), kadang hanya menyentuhnya sekali di puncak, kadang tidak pernah sampai. Ternyata persamaan kuadrat punya pola serupa: bisa punya dua akar, satu akar, atau tidak punya akar real. Adakah cara tahu lebih dulu tanpa menghitung penuh?",
      },
      {
        type: "video",
        comp: "PersamaanVideo",
        title: "Video: Satu Angka yang Meramal Jumlah Akar",
        caption: "Bagian di bawah tanda akar pada rumus abc menentukan banyaknya jawaban.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Ingat rumus abc: x = (-b ± akar(b² - 4ac)) / 2a. Perhatikan bagian di dalam akar, yaitu <strong>b² - 4ac</strong>. Coba tiga kasus: pada x² - 4x + 3 nilainya 16 - 12 = 4 (positif, dan benar ada dua akar: 1 dan 3). Pada x² - 4x + 4 nilainya 16 - 16 = 0 (dan akarnya hanya satu: 2). Pada x² - 4x + 5 nilainya 16 - 20 = -4 (negatif, dan memang tidak ada akar real).",
      },
      {
        type: "callout",
        tone: "info",
        title: "Tanda sang penentu",
        html: "Bagian b² - 4ac kita sebut <strong>diskriminan</strong> (lambang D). Aturannya sederhana: jika <strong>D &gt; 0</strong> ada dua akar real berbeda, jika <strong>D = 0</strong> ada satu akar (kembar), dan jika <strong>D &lt; 0</strong> tidak ada akar real. Akar dari bilangan negatif tidak menghasilkan bilangan biasa, itulah sebab kasus ketiga kosong.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "chart",
        variant: "line",
        title: "Grafik y = x² - 4x + 3 Memotong Sumbu Dua Kali",
        unit: "nilai y",
        source: "y dihitung untuk x = 0 sampai 4",
        note: "Karena diskriminannya 4 (positif), kurva turun di bawah nol lalu naik lagi, memotong sumbu x di dua titik: x = 1 dan x = 3.",
        data: [
          { label: "x=0", value: 3, color: "#8b5cf6" },
          { label: "x=1", value: 0, color: "#7c3aed" },
          { label: "x=2", value: -1, color: "#6d28d9" },
          { label: "x=3", value: 0, color: "#7c3aed" },
          { label: "x=4", value: 3, color: "#8b5cf6" },
        ],
      },
      {
        type: "calcExercise",
        prompt: "Hitung diskriminan dari 2x² + 3x - 2 (gunakan D = b² - 4ac).",
        answer: 25,
        solution:
          "a = 2, b = 3, c = -2. D = 3² - 4(2)(-2) = 9 + 16 = <strong>25</strong>. Karena positif, ada dua akar real.",
        hint: "Hati-hati tanda: -4 × 2 × (-2) menjadi +16.",
      },
      {
        type: "calcExercise",
        prompt: "Agar x² + 6x + c memiliki tepat satu akar (kembar), berapa nilai c?",
        answer: 9,
        solution:
          "Satu akar berarti D = 0. D = 6² - 4(1)(c) = 36 - 4c = 0, jadi 4c = 36 dan c = <strong>9</strong>. Bentuknya menjadi x² + 6x + 9 = (x + 3)².",
        hint: "Setel diskriminan sama dengan nol, lalu cari c.",
      },
      {
        type: "classifyExercise",
        prompt: "Berdasarkan nilai diskriminan D, kelompokkan jumlah akar realnya.",
        buckets: ["Dua akar real", "Satu akar real", "Tak punya akar real"],
        items: [
          { text: "D = 4", bucket: "Dua akar real" },
          { text: "D = 25", bucket: "Dua akar real" },
          { text: "D = 0", bucket: "Satu akar real" },
          { text: "D = -4", bucket: "Tak punya akar real" },
          { text: "D = -1", bucket: "Tak punya akar real" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan tiap persamaan kuadrat dengan nilai diskriminannya.",
        pairs: [
          { left: "x² - 4x + 3", right: "D = 4" },
          { left: "x² - 4x + 4", right: "D = 0" },
          { left: "x² - 4x + 5", right: "D = -4" },
          { left: "x² - 2x - 3", right: "D = 16" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Bola yang tak mencapai 25 meter",
        html: "Tinggi sebuah bola (dalam meter) didekati h = -5t² + 20t, dengan t dalam detik. Apakah bola pernah mencapai 25 m? Susun -5t² + 20t = 25, lalu rapikan menjadi t² - 4t + 5 = 0. Diskriminannya D = 16 - 20 = <strong>-4</strong>, negatif, jadi <strong>tidak ada</strong> waktu t yang memenuhinya. Memang puncak lintasan bola hanya 20 m (saat t = 2 detik), sehingga 25 m mustahil dicapai. Diskriminan menjawabnya tanpa perlu mencoba banyak nilai t.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Kesimpulan pun lahir di akhir",
        html: "Setelah menelusuri, baru kita rumuskan: <strong>diskriminan D = b² - 4ac</strong> meramal jumlah akar persamaan kuadrat ax² + bx + c = 0. D &gt; 0 berarti dua akar real berbeda, D = 0 berarti satu akar kembar, dan D &lt; 0 berarti tak ada akar real. Secara grafik, D menentukan apakah parabola memotong sumbu x dua kali, menyentuhnya sekali, atau tidak sama sekali.",
      },
      {
        type: "takeaways",
        items: [
          "Diskriminan D = b² - 4ac adalah bagian di dalam akar pada rumus abc.",
          "D > 0 berarti dua akar real berbeda; D = 0 berarti satu akar kembar.",
          "D < 0 berarti tidak ada akar real, karena akar bilangan negatif bukan bilangan biasa.",
          "Secara grafik, D menentukan berapa kali parabola memotong sumbu x.",
          "Diskriminan menjawab 'ada solusinya atau tidak' tanpa menghitung akar penuh.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Diskriminan dari ax² + bx + c adalah?",
            options: ["b² - 4ac", "b² + 4ac", "4ac - b²", "2b - 4ac"],
            answer: 0,
            explain: "Diskriminan D = b² - 4ac, bagian di dalam tanda akar rumus abc.",
          },
          {
            q: "Jika D > 0, persamaan kuadrat punya?",
            options: [
              "Satu akar kembar",
              "Dua akar real berbeda",
              "Tidak punya akar real",
              "Tak hingga akar",
            ],
            answer: 1,
            explain: "Diskriminan positif memberi dua akar real yang berbeda.",
          },
          {
            q: "Berapa diskriminan dari x² + 2x + 1?",
            options: ["0", "4", "8", "-4"],
            answer: 0,
            explain: "D = 2² - 4(1)(1) = 4 - 4 = 0, jadi satu akar kembar.",
          },
          {
            q: "Jika D bernilai negatif, maka akar persamaannya?",
            options: [
              "Ada dua, keduanya positif",
              "Ada satu",
              "Tidak ada akar real",
              "Selalu nol",
            ],
            answer: 2,
            explain: "Akar dari bilangan negatif bukan bilangan real, jadi tidak ada akar real.",
          },
          {
            q: "Manfaat menghitung diskriminan lebih dulu adalah?",
            options: [
              "Mengganti rumus abc sepenuhnya",
              "Mengetahui jumlah dan jenis akar sebelum menghitung penuh",
              "Membuat parabola hilang",
              "Menghapus suku konstanta",
            ],
            answer: 1,
            explain: "Diskriminan memberi tahu banyaknya akar tanpa harus menyelesaikan seluruh rumus.",
          },
        ],
      },
    ],
  },
];
