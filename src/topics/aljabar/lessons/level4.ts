import type { Lesson } from "../../../types";

export const level4: Lesson[] = [
  // ============================================================
  {
    id: "pertidaksamaan-linear",
    levelId: "pertidaksamaan-sistem",
    order: 1,
    title: "Pertidaksamaan Linear: Saat Jawaban Berupa Rentang",
    summary:
      "Tidak semua soal punya satu jawaban pasti. Kadang yang kita cari adalah seluruh rentang nilai yang boleh. Ayo telusuri lewat situasi nyata dulu.",
    durationMin: 12,
    tags: ["aljabar", "pertidaksamaan", "garis bilangan", "rentang"],
    blocks: [
      {
        type: "paragraph",
        html: "Di pintu masuk sebuah wahana tertulis: tinggi badan minimal 120 cm. Adikmu tingginya 115 cm, kakakmu 134 cm. Siapa yang boleh naik? Sebelum kita tulis simbol apa pun, pikirkan dulu: di sini jawabannya bukan satu angka, melainkan <strong>semua tinggi mulai 120 cm ke atas</strong>.",
      },
      {
        type: "video",
        comp: "AljabarVideo",
        title: "Video: Lebih Besar, Lebih Kecil, dan Rentang",
        caption: "Pertidaksamaan menggambarkan banyak nilai sekaligus, bukan hanya satu titik.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Sebut tinggi badan dengan <strong>t</strong>. Syarat wahana tadi bisa dibaca: t paling sedikit 120, atau t mulai dari 120 ke atas. Coba sebutkan tiga tinggi yang boleh dan tiga yang tidak. Kamu akan merasa bahwa jawabannya adalah sebuah <em>daerah</em>, bukan satu angka. Itulah inti pertidaksamaan.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Bukan sekadar mengganti tanda sama dengan",
        html: "Pertidaksamaan bukan persamaan yang tandanya diganti. Ia menjawab pertanyaan berbeda: bukan <em>berapa nilainya</em>, tetapi <em>nilai mana saja yang memenuhi syarat</em>. Karena itu hasilnya digambarkan di <strong>garis bilangan</strong> sebagai sebuah jalur, bukan satu titik.",
      },
      {
        type: "widget",
        widget: "PenjelajahPola",
      },
      {
        type: "calcExercise",
        prompt:
          "Sebuah pertidaksamaan berbunyi x > 4. Berapa bilangan bulat terkecil yang memenuhi syarat ini?",
        answer: 5,
        solution:
          "Tanda > berarti 'lebih besar dari', jadi 4 sendiri tidak ikut. Bilangan bulat pertama yang lebih besar dari 4 adalah <strong>5</strong>.",
        hint: "Ingat, tanda > tidak menyertakan angka di sampingnya.",
      },
      {
        type: "classifyExercise",
        prompt: "Untuk syarat x ≥ 3, kelompokkan nilai berikut: memenuhi atau tidak?",
        buckets: ["Memenuhi", "Tidak memenuhi"],
        items: [
          { text: "x = 3", bucket: "Memenuhi" },
          { text: "x = 7", bucket: "Memenuhi" },
          { text: "x = 2", bucket: "Tidak memenuhi" },
          { text: "x = 0", bucket: "Tidak memenuhi" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Syarat kelulusan ujian",
        html: "Seorang guru mengumumkan: siswa lulus jika nilainya minimal 75. Daripada menulis daftar panjang 75, 76, 77, dan seterusnya, ia cukup menulis satu kalimat: nilai <strong>n ≥ 75</strong>. Satu pertidaksamaan ini merangkum tak terhingga banyak nilai yang membuat siswa lulus. Di garis bilangan, daerah lulus digambar mulai titik penuh di 75 lalu memanjang ke kanan.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturannya kita rumuskan di akhir",
        html: "Setelah menjelajah, baru kita rapikan: tanda <strong>&lt;</strong> (kurang dari) dan <strong>&gt;</strong> (lebih dari) tidak menyertakan angka batasnya, di garis bilangan dipakai <strong>titik kosong</strong>. Tanda <strong>≤</strong> (kurang dari atau sama dengan) dan <strong>≥</strong> (lebih dari atau sama dengan) menyertakan batasnya, dipakai <strong>titik penuh</strong>. Arah panah mengikuti arah nilai yang memenuhi syarat.",
      },
      {
        type: "takeaways",
        items: [
          "Pertidaksamaan menjawab 'nilai mana saja yang memenuhi', bukan satu nilai tunggal.",
          "Tanda < dan > memakai titik kosong; tanda ≤ dan ≥ memakai titik penuh.",
          "Solusi digambar sebagai daerah pada garis bilangan, lengkap dengan arah panah.",
          "Satu pertidaksamaan dapat merangkum tak terhingga banyak nilai yang sah.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Kalimat 'usia minimal 17 tahun' ditulis sebagai?",
            options: ["u < 17", "u > 17", "u ≥ 17", "u ≤ 17"],
            answer: 2,
            explain: "Minimal 17 berarti 17 ikut dan boleh lebih, jadi u ≥ 17.",
          },
          {
            q: "Pada garis bilangan, tanda > digambar dengan?",
            options: ["Titik penuh", "Titik kosong", "Dua titik", "Tanpa titik"],
            answer: 1,
            explain: "Tanda > tidak menyertakan batasnya, jadi pakai titik kosong.",
          },
          {
            q: "Manakah yang memenuhi x ≤ 5?",
            options: ["x = 6", "x = 5", "x = 7", "x = 10"],
            answer: 1,
            explain: "≤ menyertakan 5, dan semua nilai di bawahnya. 5 memenuhi.",
          },
          {
            q: "Beda utama persamaan dan pertidaksamaan adalah?",
            options: [
              "Pertidaksamaan tidak punya jawaban",
              "Pertidaksamaan menghasilkan rentang nilai, bukan satu nilai",
              "Persamaan tidak boleh pakai huruf",
              "Keduanya selalu sama",
            ],
            answer: 1,
            explain: "Pertidaksamaan menghasilkan daerah nilai yang memenuhi syarat.",
          },
          {
            q: "Bilangan bulat terbesar yang memenuhi x < 4 adalah?",
            options: ["4", "3", "5", "0"],
            answer: 1,
            explain: "Karena 4 tidak ikut, bilangan bulat terbesar adalah 3.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "menyelesaikan-pertidaksamaan",
    levelId: "pertidaksamaan-sistem",
    order: 2,
    title: "Menyelesaikan Pertidaksamaan: Satu Jebakan yang Wajib Diingat",
    summary:
      "Menyelesaikan pertidaksamaan mirip persamaan, kecuali satu hal yang sering bikin keliru. Kita temukan jebakannya lewat percobaan, bukan dihafal lebih dulu.",
    durationMin: 13,
    tags: ["aljabar", "pertidaksamaan", "balik tanda", "timbangan"],
    blocks: [
      {
        type: "paragraph",
        html: "Bayangkan timbangan yang berat sebelah: sisi kiri lebih berat dari sisi kanan. Kalau kedua sisi kamu tambah beban yang sama, sisi kiri tetap lebih berat. Tapi apa yang terjadi jika kamu balik posisi kedua piring? Ayo selidiki dulu sebelum membuat aturan.",
      },
      {
        type: "video",
        comp: "PersamaanVideo",
        title: "Video: Menjaga Ketimpangan Tetap Benar",
        caption: "Operasi yang sama boleh dilakukan ke kedua ruas, tetapi ada satu pengecualian.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Mulai dari fakta benar: 5 &gt; 3. Tambah 2 ke kedua ruas: 7 &gt; 5, masih benar. Kalikan 2: 10 &gt; 6, masih benar. Sekarang kalikan dengan <strong>-1</strong>: jadi -5 dan -3. Mana yang lebih besar? Ternyata -5 &lt; -3. Tandanya <strong>berbalik</strong>. Kamu baru saja menemukan satu-satunya jebakan dalam pertidaksamaan.",
      },
      {
        type: "widget",
        widget: "SimulatorTimbangan",
      },
      {
        type: "callout",
        tone: "warn",
        title: "Inilah jebakannya",
        html: "Menambah, mengurangi, mengali, dan membagi dengan bilangan <strong>positif</strong> tidak mengubah arah tanda. Tetapi mengali atau membagi kedua ruas dengan bilangan <strong>negatif</strong> membuat tanda pertidaksamaan harus dibalik.",
      },
      {
        type: "calcExercise",
        prompt:
          "Selesaikan 2x + 3 < 11. Nilai x harus kurang dari berapa?",
        answer: 4,
        solution:
          "Kurangi 3 di kedua ruas: 2x &lt; 8. Bagi 2 (positif, tanda tetap): x &lt; <strong>4</strong>.",
        hint: "Pindahkan konstanta dulu, lalu bagi dengan koefisien x.",
      },
      {
        type: "calcExercise",
        prompt:
          "Selesaikan -3x ≥ 9. Berapa nilai terbesar x yang memenuhi?",
        answer: -3,
        solution:
          "Bagi kedua ruas dengan -3. Karena pembaginya negatif, tanda dibalik: x ≤ -3. Nilai terbesar yang memenuhi adalah <strong>-3</strong>.",
        hint: "Membagi dengan bilangan negatif membalik arah tanda.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan setiap pertidaksamaan dengan penyelesaiannya.",
        pairs: [
          { left: "x + 2 > 5", right: "x > 3" },
          { left: "2x < 10", right: "x < 5" },
          { left: "-x > 3", right: "x < -3" },
          { left: "x - 4 ≤ 0", right: "x ≤ 4" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Anggaran belanja",
        html: "Uangmu Rp50.000 dan kamu ingin membeli beberapa buku tulis seharga Rp8.000 per buah. Berapa buku maksimal yang bisa dibeli? Bentuknya 8.000<strong>b</strong> ≤ 50.000. Bagi 8.000 (positif, tanda tetap): b ≤ 6,25. Karena buku tidak bisa pecahan, kamu bisa membeli paling banyak <strong>6 buku</strong>. Pertidaksamaan menerjemahkan kalimat 'jangan sampai melebihi anggaran' menjadi hitungan yang rapi.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturannya kita kunci di akhir",
        html: "Selesaikan pertidaksamaan persis seperti persamaan: pindahkan suku dan bagi dengan koefisien. <strong>Satu pengecualian:</strong> setiap kali kamu mengali atau membagi kedua ruas dengan bilangan negatif, balik arah tanda pertidaksamaan. Operasi dengan bilangan positif tidak mengubah arah tanda.",
      },
      {
        type: "takeaways",
        items: [
          "Pertidaksamaan diselesaikan dengan langkah yang sama seperti persamaan.",
          "Tambah, kurang, kali, dan bagi dengan bilangan positif tidak mengubah arah tanda.",
          "Mengali atau membagi dengan bilangan negatif WAJIB membalik arah tanda.",
          "Jawaban konteks nyata sering dibulatkan sesuai logika soal (misal jumlah barang).",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Penyelesaian dari x + 5 > 9 adalah?",
            options: ["x > 4", "x < 4", "x > 14", "x < 14"],
            answer: 0,
            explain: "Kurangi 5 di kedua ruas: x > 4. Tanda tetap karena tidak ada pembagian negatif.",
          },
          {
            q: "Saat menyelesaikan -2x < 6, hasilnya adalah?",
            options: ["x < -3", "x > -3", "x < 3", "x > 3"],
            answer: 1,
            explain: "Bagi -2, tanda dibalik: x > -3.",
          },
          {
            q: "Kapan tanda pertidaksamaan harus dibalik?",
            options: [
              "Setiap memindahkan suku",
              "Saat mengali atau membagi dengan bilangan negatif",
              "Saat menambah konstanta",
              "Tidak pernah",
            ],
            answer: 1,
            explain: "Hanya operasi kali atau bagi dengan bilangan negatif yang membalik tanda.",
          },
          {
            q: "Penyelesaian 3x - 1 ≤ 8 adalah?",
            options: ["x ≤ 3", "x ≥ 3", "x ≤ 9", "x ≥ 9"],
            answer: 0,
            explain: "Tambah 1: 3x ≤ 9, bagi 3 (positif): x ≤ 3.",
          },
          {
            q: "Dari 5 > 3, jika kedua ruas dikali -2 maka menjadi?",
            options: ["-10 > -6", "-10 < -6", "10 > 6", "10 < 6"],
            answer: 1,
            explain: "Mengali dengan -2 membalik tanda: -10 < -6.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "sistem-persamaan-dua-variabel",
    levelId: "pertidaksamaan-sistem",
    order: 3,
    title: "Sistem Persamaan Dua Variabel: Dua Syarat Sekaligus",
    summary:
      "Satu persamaan dua variabel punya banyak jawaban. Tetapi dua syarat bersama mengunci satu titik. Kita rasakan dulu lewat teka-teki harga.",
    durationMin: 14,
    tags: ["aljabar", "sistem persamaan", "dua variabel", "eliminasi"],
    blocks: [
      {
        type: "paragraph",
        html: "Di kantin, kamu hanya ingat: membeli 2 pensil dan 1 buku habis Rp8.000. Berapa harga satu pensil? Belum bisa dipastikan, kan? Tapi kalau kamu ingat satu fakta lagi, yaitu 1 pensil dan 1 buku habis Rp5.500, tiba-tiba harga keduanya bisa ditemukan. Ayo selidiki kenapa dua petunjuk lebih kuat dari satu.",
      },
      {
        type: "video",
        comp: "PersamaanVideo",
        title: "Video: Saat Dua Garis Bertemu",
        caption: "Setiap persamaan adalah satu garis; titik potongnya adalah jawaban bersama.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Tulis petunjuknya: 2p + b = 8.000 dan p + b = 5.500. Karena keduanya sama-sama punya satu buku, coba kurangkan baris atas dengan baris bawah. Buku-nya lenyap dan tersisa p = 2.500. Sekarang harga buku gampang ditemukan. Tanpa rumus rumit, dua petunjuk saling melengkapi untuk mengunci satu jawaban.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Mengapa harus dua persamaan?",
        html: "Satu persamaan seperti p + b = 5.500 punya tak terhingga banyak pasangan jawaban. Menambah persamaan kedua menyaring semua kemungkinan itu menjadi <strong>satu pasangan (p, b)</strong> yang memenuhi keduanya. Secara gambar, itu titik potong dua garis.",
      },
      {
        type: "widget",
        widget: "PlotterFungsi",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari 2p + b = 8.000 dan p + b = 5.500, berapa harga satu pensil (p) dalam rupiah?",
        answer: 2500,
        prefix: "Rp",
        solution:
          "Kurangkan persamaan pertama dengan kedua: (2p + b) - (p + b) = 8.000 - 5.500, sehingga p = <strong>2.500</strong>. Variabel b hilang karena koefisiennya sama.",
        hint: "Cari operasi yang membuat salah satu variabel lenyap.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan p = 2.500, berapa harga satu buku (b) dari p + b = 5.500, dalam rupiah?",
        answer: 3000,
        prefix: "Rp",
        solution:
          "Substitusi p = 2.500 ke p + b = 5.500: 2.500 + b = 5.500, jadi b = <strong>3.000</strong>. Cek: 2(2.500) + 3.000 = 8.000, benar.",
        hint: "Masukkan nilai p yang sudah diketahui ke salah satu persamaan.",
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan istilah dengan maknanya dalam sistem persamaan dua variabel.",
        pairs: [
          { left: "Eliminasi", right: "Menghilangkan satu variabel dengan menambah atau mengurangi persamaan" },
          { left: "Substitusi", right: "Mengganti satu variabel dengan bentuk variabel lain" },
          { left: "Metode grafik", right: "Mencari titik potong dua garis" },
          { left: "Solusi sistem", right: "Pasangan (x, y) yang memenuhi kedua persamaan" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Tiket dewasa dan anak",
        html: "Sebuah bioskop menjual tiket dewasa dan anak. Suatu rombongan membeli 3 tiket dewasa dan 2 tiket anak seharga Rp190.000, sedangkan rombongan lain membeli 1 tiket dewasa dan 2 tiket anak seharga Rp110.000. Kurangkan keduanya: 2 tiket dewasa = Rp80.000, jadi tiket dewasa Rp40.000 dan tiket anak Rp35.000. Dua catatan sederhana cukup untuk membongkar dua harga sekaligus, persis seperti dua garis yang berpotongan di satu titik.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Aturannya kita rumuskan di akhir",
        html: "Sistem persamaan dua variabel adalah dua persamaan yang harus benar bersamaan. <strong>Solusinya</strong> adalah pasangan nilai (x, y) yang memenuhi keduanya, yaitu titik potong dua garisnya. Cara menyelesaikannya: <strong>eliminasi</strong> (lenyapkan satu variabel dengan menambah/mengurangi), <strong>substitusi</strong> (ganti satu variabel), atau <strong>grafik</strong> (cari titik potong).",
      },
      {
        type: "takeaways",
        items: [
          "Satu persamaan dua variabel punya banyak solusi; dua persamaan menyaringnya jadi satu.",
          "Solusi sistem adalah pasangan (x, y) yang memenuhi kedua persamaan sekaligus.",
          "Eliminasi menghilangkan satu variabel; substitusi mengganti satu variabel.",
          "Secara grafik, solusi sistem adalah titik potong kedua garis.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Solusi sistem persamaan dua variabel berupa?",
            options: [
              "Satu angka tunggal",
              "Sepasang nilai (x, y)",
              "Sebuah rentang",
              "Tidak ada",
            ],
            answer: 1,
            explain: "Solusinya pasangan (x, y) yang memenuhi kedua persamaan.",
          },
          {
            q: "Metode menghilangkan satu variabel dengan menambah/mengurangi persamaan disebut?",
            options: ["Substitusi", "Eliminasi", "Faktorisasi", "Interpolasi"],
            answer: 1,
            explain: "Itu adalah metode eliminasi.",
          },
          {
            q: "Dari x + y = 10 dan x - y = 2, nilai x adalah?",
            options: ["4", "6", "5", "8"],
            answer: 1,
            explain: "Jumlahkan kedua persamaan: 2x = 12, jadi x = 6.",
          },
          {
            q: "Secara grafik, solusi sistem dua persamaan linear adalah?",
            options: [
              "Titik potong dua garis",
              "Kemiringan garis",
              "Titik asal",
              "Panjang garis",
            ],
            answer: 0,
            explain: "Solusi memenuhi kedua persamaan, yaitu titik potong kedua garis.",
          },
          {
            q: "Mengapa satu persamaan dua variabel belum cukup?",
            options: [
              "Karena salah tulis",
              "Karena punya tak terhingga banyak pasangan solusi",
              "Karena tidak punya solusi",
              "Karena terlalu sulit",
            ],
            answer: 1,
            explain: "Satu persamaan dua variabel memiliki banyak solusi; perlu syarat kedua.",
          },
        ],
      },
    ],
  },
  // ============================================================
  {
    id: "soal-cerita-sistem",
    levelId: "pertidaksamaan-sistem",
    order: 4,
    title: "Soal Cerita Sistem: Dari Kalimat ke Dua Persamaan",
    summary:
      "Kekuatan sistem persamaan terasa saat memecahkan cerita belanja dan campuran. Kuncinya menerjemahkan kalimat menjadi simbol, lalu menyelesaikannya.",
    durationMin: 14,
    tags: ["aljabar", "sistem persamaan", "soal cerita", "belanja"],
    blocks: [
      {
        type: "paragraph",
        html: "Di toko pakaian, kamu mendengar dua nota: 3 baju dan 2 celana seharga Rp280.000, lalu 1 baju dan 2 celana seharga Rp160.000. Berapa harga satu baju dan satu celana? Sebelum menghafal langkah, rasakan dulu bahwa dua kalimat ini sebenarnya dua petunjuk yang saling melengkapi.",
      },
      {
        type: "video",
        comp: "AljabarVideo",
        title: "Video: Mengubah Cerita Menjadi Simbol",
        caption: "Langkah tersulit bukan menghitung, melainkan menerjemahkan kalimat ke persamaan.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ayo berpetualang dulu",
        html: "Misalkan harga baju = <strong>b</strong> dan harga celana = <strong>c</strong>. Nota pertama jadi 3b + 2c = 280.000, nota kedua jadi b + 2c = 160.000. Perhatikan keduanya sama-sama punya 2c. Kurangkan: 2b = 120.000, jadi b = 60.000. Kamu baru saja membongkar harga tersembunyi hanya dengan menyamakan dua cerita.",
      },
      {
        type: "widget",
        widget: "PolaKeAljabar",
      },
      {
        type: "calcExercise",
        prompt:
          "Dari 3b + 2c = 280.000 dan b + 2c = 160.000, berapa harga satu baju (b) dalam rupiah?",
        answer: 60000,
        prefix: "Rp",
        solution:
          "Kurangkan persamaan pertama dengan kedua: (3b + 2c) - (b + 2c) = 280.000 - 160.000, sehingga 2b = 120.000 dan b = <strong>60.000</strong>.",
        hint: "Kedua persamaan punya 2c yang sama, jadi kurangkan untuk melenyapkannya.",
      },
      {
        type: "calcExercise",
        prompt:
          "Dengan b = 60.000, berapa harga satu celana (c) dari b + 2c = 160.000, dalam rupiah?",
        answer: 50000,
        prefix: "Rp",
        solution:
          "Substitusi b = 60.000: 60.000 + 2c = 160.000, jadi 2c = 100.000 dan c = <strong>50.000</strong>. Cek: 3(60.000) + 2(50.000) = 280.000, benar.",
        hint: "Masukkan nilai b ke salah satu persamaan lalu cari c.",
      },
      {
        type: "chart",
        variant: "bar",
        title: "Harga Satuan Hasil Penyelesaian Sistem",
        unit: "rupiah",
        source: "hasil hitungan studi kasus",
        note: "Kedua harga ini adalah solusi (b, c) yang memenuhi kedua nota sekaligus.",
        data: [
          { label: "Baju (b)", value: 60000, color: "#a78bfa" },
          { label: "Celana (c)", value: 50000, color: "#c084fc" },
        ],
      },
      {
        type: "matchExercise",
        prompt: "Pasangkan kalimat soal cerita dengan persamaannya (harga apel = a, harga jeruk = j).",
        pairs: [
          { left: "2 apel dan 3 jeruk seharga 13.000", right: "2a + 3j = 13.000" },
          { left: "1 apel dan 1 jeruk seharga 5.000", right: "a + j = 5.000" },
          { left: "4 apel seharga 12.000", right: "4a = 12.000" },
          { left: "Selisih harga apel dan jeruk 1.000", right: "a - j = 1.000" },
        ],
      },
      {
        type: "case",
        title: "Studi Kasus: Campuran kopi",
        html: "Seorang pedagang mencampur kopi murah Rp80.000/kg dan kopi mahal Rp120.000/kg menjadi 10 kg campuran seharga Rp95.000/kg. Berapa kg masing-masing? Misalkan kopi murah <strong>x</strong> kg dan kopi mahal <strong>y</strong> kg. Maka x + y = 10 dan 80.000x + 120.000y = 950.000. Dari persamaan pertama y = 10 - x, substitusi ke kedua menghasilkan x = 6,25 dan y = 3,75. Jadi campurannya 6,25 kg kopi murah dan 3,75 kg kopi mahal. Soal campuran selalu memberi dua petunjuk: jumlah total dan nilai total.",
      },
      {
        type: "callout",
        tone: "key",
        title: "Langkahnya kita kunci di akhir",
        html: "Menyelesaikan soal cerita sistem selalu lewat tiga langkah: <strong>(1) Misalkan variabel</strong> untuk besaran yang dicari, <strong>(2) Terjemahkan tiap kalimat menjadi satu persamaan</strong> sehingga terbentuk dua persamaan, lalu <strong>(3) Selesaikan dengan eliminasi atau substitusi</strong> dan periksa kembali ke cerita aslinya.",
      },
      {
        type: "takeaways",
        items: [
          "Langkah pertama soal cerita: memisalkan variabel untuk besaran yang dicari.",
          "Setiap kalimat fakta biasanya menjadi satu persamaan.",
          "Soal campuran memberi dua petunjuk: jumlah total dan nilai/harga total.",
          "Selalu periksa jawaban dengan memasukkannya kembali ke cerita asli.",
        ],
      },
      {
        type: "quiz",
        questions: [
          {
            q: "Langkah pertama menyelesaikan soal cerita sistem adalah?",
            options: [
              "Langsung membagi",
              "Memisalkan variabel untuk besaran yang dicari",
              "Menggambar grafik",
              "Menebak jawaban",
            ],
            answer: 1,
            explain: "Tetapkan dulu variabel untuk hal yang ditanyakan.",
          },
          {
            q: "'5 buku dan 2 pensil seharga 31.000' diterjemahkan menjadi (buku = b, pensil = p)?",
            options: ["5b + 2p = 31.000", "5b - 2p = 31.000", "2b + 5p = 31.000", "5b + 2p = 3.100"],
            answer: 0,
            explain: "Lima buku dan dua pensil: 5b + 2p = 31.000.",
          },
          {
            q: "Dari b + c = 100.000 dan b - c = 20.000, harga b adalah?",
            options: ["40.000", "60.000", "50.000", "80.000"],
            answer: 1,
            explain: "Jumlahkan kedua persamaan: 2b = 120.000, jadi b = 60.000.",
          },
          {
            q: "Pada soal campuran, dua petunjuk yang biasa muncul adalah?",
            options: [
              "Warna dan bentuk",
              "Jumlah total dan nilai/harga total",
              "Berat dan tinggi",
              "Tanggal dan waktu",
            ],
            answer: 1,
            explain: "Campuran memberi persamaan jumlah total dan persamaan nilai total.",
          },
          {
            q: "Setelah memperoleh jawaban, langkah baik berikutnya adalah?",
            options: [
              "Langsung berhenti",
              "Memeriksa jawaban dengan memasukkannya ke cerita asli",
              "Mengganti variabel",
              "Menghapus persamaan",
            ],
            answer: 1,
            explain: "Memeriksa kembali ke cerita memastikan jawaban masuk akal dan benar.",
          },
        ],
      },
    ],
  },
];
